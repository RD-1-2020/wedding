import { Component, inject } from '@angular/core';
import { GuestQuery } from '../core/guest-query';
import {
  GUEST_CHAT_VK_URL,
  MARINA_PHONE_DISPLAY,
  MARINA_PHONE_TEL,
  MARINA_TELEGRAM,
  MARINA_VK,
} from '../core/wedding.constants';
import { MotionReveal } from '../motion/motion-reveal';
import { IconTelegram } from '../ui/icon-telegram';
import { IconVk } from '../ui/icon-vk';

@Component({
  selector: 'app-details-section',
  imports: [IconTelegram, IconVk, MotionReveal],
  templateUrl: './details-section.html',
})
export class DetailsSection {
  private readonly guest = inject(GuestQuery);

  readonly hasToken = this.guest.hasToken;
  readonly guestChatUrl = GUEST_CHAT_VK_URL;
  readonly phoneDisplay = MARINA_PHONE_DISPLAY;
  readonly phoneTel = MARINA_PHONE_TEL;
  readonly telegram = MARINA_TELEGRAM;
  readonly vk = MARINA_VK;
}
