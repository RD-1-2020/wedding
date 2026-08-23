import {
  countdownParts,
  googleCalendarUrl,
  locationCards,
  scheduleItems,
  STORY_CARDS,
  weddingStart,
} from './wedding.constants';

describe('wedding.constants', () => {
  it('does not include the ceremony in the short schedule', () => {
    const titles = scheduleItems(false).map((item) => `${item.title} ${item.time}`);
    expect(titles).toEqual(['Праздничный банкет 15:30', 'Торт 21:30', 'Окончание праздничного дня 22:30']);
  });

  it('puts the ceremony first in the full schedule', () => {
    const items = scheduleItems(true);
    expect(`${items[0].title} ${items[0].time}`).toBe('Торжественная регистрация 14:30');
    expect(items[0].caption).toBe('Красный проспект 68');
    expect(items.map((item) => `${item.title} ${item.time}`)).toEqual([
      'Торжественная регистрация 14:30',
      'Праздничный банкет 15:30',
      'Торт 21:30',
      'Окончание праздничного дня 22:30',
    ]);
  });

  it('uses stitch captions and keeps foreign slots out', () => {
    const all = [...scheduleItems(false), ...scheduleItems(true)];
    const captions = all.map((item) => item.caption).join(' ');
    expect(captions).toContain('Новая Заря, 53А');
    expect(captions).toContain('Сладкий момент вечера');
    expect(captions).toContain('До новых встреч!');
    expect(captions).not.toMatch(/12:00|14:00|17:00|23:00|фуршет|ЗАГС/i);
  });

  it('lists four story cards with cinema in 2025 and no first-meeting card', () => {
    expect(STORY_CARDS.map((card) => card.title)).toEqual([
      'Первое свидание',
      'Путешествия',
      'Первый поход в кино',
      'Предложение',
    ]);
    const cinema = STORY_CARDS.find((card) => card.id === 'cinema');
    expect(cinema?.year).toBe('2025');
    expect(cinema?.src).toContain('story-cinema.jpg');
    expect(STORY_CARDS.some((card) => card.id === 'meeting' || card.title === 'Знакомство')).toBe(
      false,
    );
    expect(STORY_CARDS.some((card) => card.src.includes('story-meeting'))).toBe(false);
  });

  it('hides the registry location unless the invitation is full', () => {
    expect(locationCards(false).map((card) => card.title)).toEqual(['Банкет']);
    expect(locationCards(true).map((card) => card.title)).toEqual(['Регистрация', 'Банкет']);
    expect(locationCards(true)[0].lines).toContain('Красный проспект 68');
    expect(locationCards(false)[0].lines).toEqual(['Отель Slumo', 'ул. Новая Заря, 53А']);
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
