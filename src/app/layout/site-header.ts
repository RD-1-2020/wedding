import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GuestQuery } from '../core/guest-query';
import { googleCalendarUrl } from '../core/wedding.constants';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink],
  templateUrl: './site-header.html',
})
export class SiteHeader {
  private readonly guest = inject(GuestQuery);

  readonly menuOpen = signal(false);
  readonly calendarHref = computed(() => googleCalendarUrl(this.guest.isFull()));

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
