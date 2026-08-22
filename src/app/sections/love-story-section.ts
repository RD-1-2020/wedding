import {
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  viewChildren,
} from '@angular/core';
import { LOVE_MOMENTS } from '../core/wedding.constants';

@Component({
  selector: 'app-love-story-section',
  templateUrl: './love-story-section.html',
})
export class LoveStorySection {
  private readonly destroyRef = inject(DestroyRef);
  private readonly momentRefs = viewChildren<ElementRef<HTMLElement>>('momentCard');

  readonly moments = LOVE_MOMENTS;
  readonly visible = signal<Readonly<Record<string, boolean>>>({});

  constructor() {
    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        const all: Record<string, boolean> = {};
        for (const moment of this.moments) {
          all[moment.year] = true;
        }
        this.visible.set(all);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }
            const year = entry.target.getAttribute('data-year');
            if (!year) {
              continue;
            }
            this.visible.update((current) => ({ ...current, [year]: true }));
          }
        },
        { threshold: 0.28 },
      );

      for (const ref of this.momentRefs()) {
        observer.observe(ref.nativeElement);
      }

      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
