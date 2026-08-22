import { Component } from '@angular/core';
import { HlmBadge } from '@spartan-ng/helm/badge';
import { HlmCard, HlmCardContent, HlmCardHeader, HlmCardTitle } from '@spartan-ng/helm/card';

@Component({
  selector: 'app-couple-section',
  imports: [HlmBadge, HlmCard, HlmCardContent, HlmCardHeader, HlmCardTitle],
  templateUrl: './couple-section.html',
})
export class CoupleSection {}
