import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes), provideHttpClient()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the invitation', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Вероника');
    expect(compiled.textContent).toContain('Дмитрий');
    expect(compiled.textContent).toContain('Наша история');
    expect(compiled.textContent).toContain('Знакомство');
    expect(compiled.textContent).toContain('Программа дня');
    expect(compiled.textContent).toContain('Для гостей');
    expect(compiled.querySelector('#story')).toBeTruthy();
    expect(compiled.querySelector('#program')).toBeTruthy();
    expect(compiled.querySelector('#details')).toBeTruthy();
    expect(compiled.querySelector('#rsvp')).toBeTruthy();
  });
});
