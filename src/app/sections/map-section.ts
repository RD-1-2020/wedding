import { Component, computed, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HlmCard } from '@spartan-ng/helm/card';
import { GuestQuery } from '../core/guest-query';
import { MAP_WIDGET_FULL, MAP_WIDGET_SHORT } from '../core/wedding.constants';

@Component({
  selector: 'app-map-section',
  imports: [HlmCard],
  templateUrl: './map-section.html',
})
export class MapSection {
  private readonly guest = inject(GuestQuery);
  private readonly sanitizer = inject(DomSanitizer);

  readonly mapSrc = computed(() => {
    const url = this.guest.isFull() ? MAP_WIDGET_FULL : MAP_WIDGET_SHORT;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });
}
