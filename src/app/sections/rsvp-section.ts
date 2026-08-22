import { Component, inject, linkedSignal, signal } from '@angular/core';
import { HlmAlert, HlmAlertDescription } from '@spartan-ng/helm/alert';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmCard, HlmCardContent } from '@spartan-ng/helm/card';
import { HlmField, HlmFieldGroup, HlmFieldLabel } from '@spartan-ng/helm/field';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmSwitch } from '@spartan-ng/helm/switch';
import { HlmTextarea } from '@spartan-ng/helm/textarea';
import { GuestQuery } from '../core/guest-query';
import { RsvpApi } from '../core/rsvp-api';
import { RsvpStatus } from '../core/rsvp.types';

@Component({
  selector: 'app-rsvp-section',
  imports: [
    HlmAlert,
    HlmAlertDescription,
    HlmButton,
    HlmCard,
    HlmCardContent,
    HlmField,
    HlmFieldGroup,
    HlmFieldLabel,
    HlmInput,
    HlmSwitch,
    HlmTextarea,
  ],
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
