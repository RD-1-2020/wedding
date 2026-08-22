import { Component } from '@angular/core';
import { CopySection } from '../sections/copy-section';
import { CoupleSection } from '../sections/couple-section';
import { HeroSection } from '../sections/hero-section';
import { LoveStorySection } from '../sections/love-story-section';
import { MapSection } from '../sections/map-section';
import { RsvpSection } from '../sections/rsvp-section';
import { ScheduleSection } from '../sections/schedule-section';

@Component({
  selector: 'app-invitation-page',
  imports: [
    HeroSection,
    CopySection,
    CoupleSection,
    ScheduleSection,
    RsvpSection,
    LoveStorySection,
    MapSection,
  ],
  templateUrl: './invitation-page.html',
})
export class InvitationPage {}
