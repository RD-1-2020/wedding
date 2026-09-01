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
    expect(compiled.textContent).toContain('Первый поход в кино');
    expect(compiled.textContent).toContain('2025');
    expect(compiled.textContent).not.toContain('Знакомство');
    expect(compiled.textContent).toContain('Подтверждение');
    expect(compiled.textContent).not.toContain('RSVP');
    expect(compiled.querySelector('img[alt="Вероника и Дмитрий"]')).toBeTruthy();
    expect(compiled.textContent).toContain('Программа дня');
    expect(compiled.textContent).toContain('Для гостей');
    expect(compiled.querySelector('#story')).toBeTruthy();
    expect(compiled.querySelector('#program')).toBeTruthy();
    expect(compiled.querySelector('#details')).toBeTruthy();
    expect(compiled.querySelector('#rsvp')).toBeTruthy();
    expect(compiled.querySelector('#locations')).toBeTruthy();
    expect(compiled.textContent).toContain('Банкет');
    expect(compiled.textContent).not.toContain('Регистрация');
    const desktopNavLabels = Array.from(compiled.querySelectorAll('header nav.hidden a')).map((link) =>
      link.textContent?.trim(),
    );
    expect(desktopNavLabels).toEqual(['История', 'Программа', 'Детали', 'Подтверждение', 'Локация']);
    expect(compiled.querySelector('header nav.hidden a[href*="#locations"]')).toBeTruthy();
    expect(compiled.textContent).toContain(
      'Если вы хотите подготовить творческий подарок, номер или сюрприз — пожалуйста, обязательно предупредите Марину. Она впишет всё в тайминг и поможет с деталями, а для нас праздник останется полным сюрпризом',
    );
    expect(compiled.textContent).not.toContain('пожалуйста, предупредите ведущую Марину:');
    expect(compiled.textContent).toContain('Чат для гостей');
    expect(compiled.textContent).toContain(
      'В начале ноября мы пригласим вас в общий чат с нашей прекрасной ведущей Мариной',
    );
    expect(compiled.querySelector('#details a[href^="https://t.me"]')).toBeTruthy();
    const detailsArticles = Array.from(compiled.querySelectorAll('#details article'));
    expect(detailsArticles.some((article) => article.className.includes('col-span-2'))).toBe(true);
  });

  it('should list the same anchors in the mobile menu', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/');
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const menuButton = compiled.querySelector('header button[aria-controls="mobile-nav"]') as HTMLButtonElement;
    menuButton.click();
    fixture.detectChanges();
    const mobileLabels = Array.from(compiled.querySelectorAll('#mobile-nav a')).map((link) =>
      link.textContent?.trim(),
    );
    expect(mobileLabels).toEqual(['История', 'Программа', 'Детали', 'Подтверждение', 'Локация']);
    expect(compiled.querySelector('#mobile-nav a[href*="#locations"]')).toBeTruthy();
  });
});
