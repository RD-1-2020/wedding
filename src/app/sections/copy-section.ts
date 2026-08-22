import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCard, HlmCardContent, HlmCardHeader, HlmCardTitle } from '@spartan-ng/helm/card';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import {
  MARINA_PHONE_DISPLAY,
  MARINA_PHONE_TEL,
  MARINA_TELEGRAM,
  MARINA_VK,
} from '../core/wedding.constants';
import { IconTelegram } from '../ui/icon-telegram';
import { IconVk } from '../ui/icon-vk';

@Component({
  selector: 'app-copy-section',
  imports: [HlmButton, HlmCard, HlmCardContent, HlmCardHeader, HlmCardTitle, HlmSeparator, IconTelegram, IconVk],
  templateUrl: './copy-section.html',
})
export class CopySection {
  readonly phoneDisplay = MARINA_PHONE_DISPLAY;
  readonly phoneTel = MARINA_PHONE_TEL;
  readonly telegram = MARINA_TELEGRAM;
  readonly vk = MARINA_VK;
}
