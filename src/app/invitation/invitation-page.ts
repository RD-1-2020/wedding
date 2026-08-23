import { Component } from '@angular/core';
import { SiteFooter } from '../layout/site-footer';
import { SiteHeader } from '../layout/site-header';
import { CopySection } from '../sections/copy-section';
import { DetailsSection } from '../sections/details-section';
import { HeroSection } from '../sections/hero-section';
import { LoveStorySection } from '../sections/love-story-section';
import { MapSection } from '../sections/map-section';
import { RsvpSection } from '../sections/rsvp-section';
import { ScheduleSection } from '../sections/schedule-section';

@Component({
  selector: 'app-invitation-page',
  imports: [
    SiteHeader,
    HeroSection,
    CopySection,
    LoveStorySection,
    ScheduleSection,
    DetailsSection,
    RsvpSection,
    MapSection,
    SiteFooter,
  ],
  templateUrl: './invitation-page.html',
})
export class InvitationPage {}
