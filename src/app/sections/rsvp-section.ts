import { Component, inject, linkedSignal, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { GuestQuery } from '../core/guest-query';
import { RsvpApi } from '../core/rsvp-api';
import { RsvpStatus } from '../core/rsvp.types';

@Component({
  selector: 'app-rsvp-section',
  imports: [MatButton, MatCard, MatCardContent, MatFormField, MatInput, MatLabel, MatSlideToggle],
  templateUrl: './rsvp-section.html',
})
export class RsvpSection {
  private readonly guest = inject(GuestQuery);
  private readonly api = inject(RsvpApi);

  readonly firstName = linkedSignal(() => this.guest.firstName());
  readonly lastName = linkedSignal(() => this.guest.lastName());
  readonly withPartner = signal(false);
  readonly withChild = signal(false);
  readonly extraInfo = signal('');
  readonly status = signal<RsvpStatus>('idle');

  protected onTextInput(event: Event, setter: (value: string) => void): void {
    setter((event.target as HTMLInputElement | HTMLTextAreaElement).value);
  }

  async submit(): Promise<void> {
    this.status.set('sending');

    try {
      await this.api.submit({
        token: this.guest.token(),
        firstName: this.firstName(),
        lastName: this.lastName(),
        withPartner: this.withPartner(),
        withChild: this.withChild(),
        extraInfo: this.extraInfo(),
      });
      this.status.set('success');
    } catch {
      this.status.set('error');
    }
  }
}
