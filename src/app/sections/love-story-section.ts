import { Component } from '@angular/core';
import { STORY_CARDS } from '../core/wedding.constants';
import { MotionReveal } from '../motion/motion-reveal';
import { PhotoSlot } from '../ui/photo-slot';

@Component({
  selector: 'app-love-story-section',
  imports: [PhotoSlot, MotionReveal],
  templateUrl: './love-story-section.html',
})
export class LoveStorySection {
  readonly cards = STORY_CARDS;
}
