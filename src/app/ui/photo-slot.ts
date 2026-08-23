import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-photo-slot',
  templateUrl: './photo-slot.html',
})
export class PhotoSlot {
  readonly src = input.required<string>();
  readonly src2x = input.required<string>();
  readonly alt = input.required<string>();
  readonly label = input.required<string>();
  readonly failed = signal(false);
}
