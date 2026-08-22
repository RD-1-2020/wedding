import { countdownParts, googleCalendarUrl, scheduleItems, weddingStart } from './wedding.constants';

describe('wedding.constants', () => {
  it('does not include the ceremony in the short schedule', () => {
    const titles = scheduleItems(false).map((item) => `${item.title} ${item.time}`);
    expect(titles).toEqual([
      'Праздничный банкет 15:30',
      'торт 21:30',
      'Окончание праздничного дня 22:30',
    ]);
  });

  it('puts the ceremony first in the full schedule', () => {
    const titles = scheduleItems(true).map((item) => `${item.title} ${item.time}`);
    expect(titles[0]).toBe('Торжественная регистрация 14:30');
  });

  it('builds Google Calendar links for both modes', () => {
    expect(googleCalendarUrl(false)).toContain('calendar.google.com');
    expect(googleCalendarUrl(false)).toContain('20261226T153000/20261226T223000');
    expect(googleCalendarUrl(true)).toContain('20261226T143000/20261226T223000');
  });

  it('clamps the countdown at zero after the start', () => {
    const target = weddingStart(false);
    const parts = countdownParts(target.getTime() + 5_000, target);
    expect(parts).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0, arrived: true });
  });
});
