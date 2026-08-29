import { afterNextRender, Component, computed, DestroyRef, ElementRef, inject, signal } from '@angular/core';
import { GuestQuery } from '../core/guest-query';
import { countdownParts, weddingStart } from '../core/wedding.constants';
import { prefersReducedMotion } from '../motion/prefers-reduced-motion';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.html',
})
export class HeroSection {
  private readonly guest = inject(GuestQuery);
  private readonly destroyRef = inject(DestroyRef);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly now = signal(Date.now());

  readonly remaining = computed(() => countdownParts(this.now(), weddingStart(this.guest.isFull())));

  constructor() {
    const id = globalThis.setInterval(() => this.now.set(Date.now()), 1000);
    this.destroyRef.onDestroy(() => globalThis.clearInterval(id));

    afterNextRender(() => {
      const markIn = (): void => {
        for (const node of this.host.querySelectorAll('.motion-hero')) {
          node.classList.add('motion-hero--in');
        }
      };

      if (prefersReducedMotion()) {
        markIn();
        return;
      }

      globalThis.requestAnimationFrame(() => {
        globalThis.requestAnimationFrame(markIn);
      });
    });
  }

  protected pad(value: number): string {
    return String(value).padStart(2, '0');
  }
}
