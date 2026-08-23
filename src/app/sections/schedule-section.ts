import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  signal,
  viewChildren,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { GuestQuery } from '../core/guest-query';
import { googleCalendarUrl, scheduleItems } from '../core/wedding.constants';

@Component({
  selector: 'app-schedule-section',
  imports: [MatButton],
  templateUrl: './schedule-section.html',
})
export class ScheduleSection {
  private readonly guest = inject(GuestQuery);
  private readonly destroyRef = inject(DestroyRef);
  private readonly nodeRefs = viewChildren<ElementRef<HTMLElement>>('timelineNode');

  readonly items = computed(() => scheduleItems(this.guest.isFull()));
  readonly calendarHref = computed(() => googleCalendarUrl(this.guest.isFull()));
  readonly bloomed = signal<Readonly<Record<string, boolean>>>({});

  constructor() {
    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }
            const id = entry.target.getAttribute('data-slot');
            if (!id) {
              continue;
            }
            this.bloomed.update((current) => ({ ...current, [id]: true }));
          }
        },
        { threshold: 0.6 },
      );

      for (const ref of this.nodeRefs()) {
        observer.observe(ref.nativeElement);
      }

      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
