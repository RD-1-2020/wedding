import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class GuestQuery {
  private readonly route = inject(ActivatedRoute);

  readonly paramMap = toSignal(this.route.queryParamMap, {
    initialValue: this.route.snapshot.queryParamMap,
  });

  readonly isFull = computed(() => this.paramMap().get('full') === 'true');
  /** True when `token` is present in the query string (even if empty). */
  readonly hasToken = computed(() => this.paramMap().has('token'));
  readonly token = computed(() => this.paramMap().get('token') ?? '');
  readonly firstName = computed(() => this.paramMap().get('firstName') ?? '');
  readonly lastName = computed(() => this.paramMap().get('lastName') ?? '');
}
