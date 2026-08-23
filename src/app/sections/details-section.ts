import { Component } from '@angular/core';
import {
  MARINA_PHONE_DISPLAY,
  MARINA_PHONE_TEL,
  MARINA_TELEGRAM,
  MARINA_VK,
} from '../core/wedding.constants';
import { IconTelegram } from '../ui/icon-telegram';
import { IconVk } from '../ui/icon-vk';

@Component({
  selector: 'app-details-section',
  imports: [IconTelegram, IconVk],
  templateUrl: './details-section.html',
})
export class DetailsSection {
  readonly phoneDisplay = MARINA_PHONE_DISPLAY;
  readonly phoneTel = MARINA_PHONE_TEL;
  readonly telegram = MARINA_TELEGRAM;
  readonly vk = MARINA_VK;
}
