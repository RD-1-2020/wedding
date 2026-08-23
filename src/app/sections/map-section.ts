import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GuestQuery } from '../core/guest-query';
import { LOCATION_CARDS, MAP_WIDGET_FULL, MAP_WIDGET_SHORT } from '../core/wedding.constants';

@Component({
  selector: 'app-map-section',
  templateUrl: './map-section.html',
})
export class MapSection {
  private readonly guest = inject(GuestQuery);
  private readonly sanitizer = inject(DomSanitizer);

  readonly locations = LOCATION_CARDS;

  readonly mapSrc = computed(() => {
    const url = this.guest.isFull() ? MAP_WIDGET_FULL : MAP_WIDGET_SHORT;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });
}
