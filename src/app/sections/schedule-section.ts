import { Component, computed, inject } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCard, HlmCardContent, HlmCardFooter } from '@spartan-ng/helm/card';
import { GuestQuery } from '../core/guest-query';
import { googleCalendarUrl, scheduleItems } from '../core/wedding.constants';

@Component({
  selector: 'app-schedule-section',
  imports: [HlmButton, HlmCard, HlmCardContent, HlmCardFooter],
  templateUrl: './schedule-section.html',
})
export class ScheduleSection {
  private readonly guest = inject(GuestQuery);

  readonly items = computed(() => scheduleItems(this.guest.isFull()));
  readonly calendarHref = computed(() => googleCalendarUrl(this.guest.isFull()));
}
