export interface RsvpPayload {
  token: string;
  firstName: string;
  lastName: string;
  withPartner: boolean;
  withChild: boolean;
  extraInfo: string;
}

export type RsvpStatus = 'idle' | 'sending' | 'success' | 'error';
