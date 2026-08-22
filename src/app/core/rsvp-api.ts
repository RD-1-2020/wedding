import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { RSVP_FUNCTION_URL } from './wedding.constants';
import { RsvpPayload } from './rsvp.types';

@Injectable({ providedIn: 'root' })
export class RsvpApi {
  private readonly http = inject(HttpClient);

  submit(payload: RsvpPayload): Promise<void> {
    return firstValueFrom(this.http.post<unknown>(RSVP_FUNCTION_URL, payload)).then(() => undefined);
  }
}
