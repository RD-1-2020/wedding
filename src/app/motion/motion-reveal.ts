import { afterNextRender, DestroyRef, Directive, ElementRef, inject } from '@angular/core';
import { prefersReducedMotion } from './prefers-reduced-motion';

function isIntersectingNow(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  const viewHeight = globalThis.innerHeight || 0;
  const viewWidth = globalThis.innerWidth || 0;
  return (
    rect.width > 0 &&
    rect.height > 0 &&
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.top < viewHeight &&
    rect.left < viewWidth
  );
}

function sectionForHash(hash: string): HTMLElement | null {
  const id = hash.replace('#', '');
  if (!id) {
    return null;
  }
  return document.getElementById(id);
}

function isInsideHashTarget(el: HTMLElement, hash: string): boolean {
  const section = sectionForHash(hash);
  if (!section) {
    return false;
  }
  return section === el || section.contains(el);
}

@Directive({
  selector: '[appMotionReveal]',
  host: {
    class: 'motion-reveal',
  },
})
export class MotionReveal {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const el = this.host;
      let revealed = false;
      let observer: IntersectionObserver | undefined;

      const reveal = (): void => {
        if (revealed) {
          return;
        }
        revealed = true;
        el.classList.add('motion-reveal--in');
        observer?.disconnect();
        globalThis.removeEventListener('hashchange', onHash);
        document.removeEventListener('click', onNavClick, true);
      };

      const onHash = (): void => {
        if (isInsideHashTarget(el, globalThis.location.hash)) {
          reveal();
        }
      };

      const onNavClick = (event: Event): void => {
        const target = event.target;
        if (!(target instanceof Element)) {
          return;
        }
        const link = target.closest('a[href^="#"]');
        if (!link) {
          return;
        }
        const href = link.getAttribute('href');
        if (href && isInsideHashTarget(el, href)) {
          reveal();
        }
      };

      if (prefersReducedMotion()) {
        reveal();
        return;
      }

      if (isInsideHashTarget(el, globalThis.location.hash) || isIntersectingNow(el)) {
        reveal();
        return;
      }

      globalThis.addEventListener('hashchange', onHash);
      document.addEventListener('click', onNavClick, true);
      this.destroyRef.onDestroy(() => {
        globalThis.removeEventListener('hashchange', onHash);
        document.removeEventListener('click', onNavClick, true);
        observer?.disconnect();
      });

      if (typeof IntersectionObserver === 'undefined') {
        reveal();
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            reveal();
          }
        },
        { threshold: 0.08, rootMargin: '80px 0px 30% 0px' },
      );

      observer.observe(el);

      if (isIntersectingNow(el)) {
        reveal();
      }
    });
  }
}
