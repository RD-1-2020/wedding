export const WEDDING_YEAR = 2026;
export const WEDDING_MONTH = 12;
export const WEDDING_DAY = 26;
export const START_HOUR_FULL = 14;
export const START_HOUR_SHORT = 15;
export const START_MINUTE = 30;
export const END_HOUR = 22;
export const END_MINUTE = 30;

export const MAP_WIDGET_FULL =
  'https://yandex.ru/map-widget/v1/?um=constructor%3A3a9957aa19ac8f287415728f2171469275fe968f69bcb4523d89ab7652ffc348&source=constructor';

export const MAP_WIDGET_SHORT =
  'https://yandex.ru/map-widget/v1/?um=constructor%3Af4b93e0707874f6aee0dfa1cfec58d744e190c9514401d4972c4993dc228893e&source=constructor';

/** Cloud Run RSVP endpoint. Replace after deploy. Secrets stay on the function. */
export const RSVP_FUNCTION_URL = 'https://wedding-rsvp-placeholder.a.run.app';

export const MARINA_PHONE_DISPLAY = '+8 (913) 008-71-17';
export const MARINA_PHONE_TEL = 'tel:+89130087117';
export const MARINA_TELEGRAM = 'https://t.me/Marinatuch';
export const MARINA_VK = 'https://vk.ru/tuchmarinsk';

export interface ScheduleItem {
  readonly id: string;
  readonly title: string;
  readonly time: string;
  readonly caption: string;
}

export function weddingStart(isFull: boolean): Date {
  const hour = isFull ? START_HOUR_FULL : START_HOUR_SHORT;
  return new Date(WEDDING_YEAR, WEDDING_MONTH - 1, WEDDING_DAY, hour, START_MINUTE, 0, 0);
}

export function scheduleItems(isFull: boolean): readonly ScheduleItem[] {
  const shared: readonly ScheduleItem[] = [
    {
      id: 'banquet',
      title: 'Праздничный банкет',
      time: '15:30',
      caption: 'Новая Заря, 53А',
    },
    {
      id: 'cake',
      title: 'Торт',
      time: '21:30',
      caption: 'Сладкий момент вечера',
    },
    {
      id: 'end',
      title: 'Окончание праздничного дня',
      time: '22:30',
      caption: 'До новых встреч!',
    },
  ];

  if (isFull) {
    return [
      {
        id: 'ceremony',
        title: 'Торжественная регистрация',
        time: '14:30',
        caption: 'Красный проспект 68',
      },
      ...shared,
    ];
  }

  return shared;
}

export function googleCalendarUrl(isFull: boolean): string {
  const start = isFull ? '143000' : '153000';
  const dates = `20261226T${start}/20261226T223000`;
  const text = encodeURIComponent('Свадьба Вероники и Дмитрия');
  const location = isFull ? encodeURIComponent('г. Новосибирск, Красный проспект 68') :
    encodeURIComponent('г. Новосибирск, ул. Новая Заря, 53А');
  const details = encodeURIComponent(scheduleItems(isFull).map((place => place.title + ' - ' + place.time)).join('\n'));
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&location=${location}&details=${details}`;
}

export interface CountdownParts {
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly arrived: boolean;
}

export function countdownParts(nowMs: number, target: Date): CountdownParts {
  const diff = target.getTime() - nowMs;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, arrived: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    arrived: false,
  };
}

export interface StoryCard {
  readonly id: string;
  readonly title: string;
  readonly text: string;
  readonly src: string;
  readonly src2x: string;
  readonly alt: string;
}

export const STORY_CARDS: readonly StoryCard[] = [
  {
    id: 'meeting',
    title: 'Знакомство',
    text: 'Все началось со случайной встречи в уютной кофейне, которая изменила нашу жизнь навсегда.',
    src: '/assets/photos/story-meeting.jpg',
    src2x: '/assets/photos/story-meeting@2x.jpg',
    alt: 'Знакомство Вероники и Дмитрия',
  },
  {
    id: 'first-date',
    title: 'Первое свидание',
    text: 'Долгие разговоры под звездным небом и осознание того, что мы нашли друг друга.',
    src: '/assets/photos/story-first-date.jpg',
    src2x: '/assets/photos/story-first-date@2x.jpg',
    alt: 'Первое свидание Вероники и Дмитрия',
  },
  {
    id: 'travel',
    title: 'Путешествия',
    text: 'Сотни километров вместе, новые города и страны, где каждый момент был наполнен счастьем.',
    src: '/assets/photos/story-travel.jpg',
    src2x: '/assets/photos/story-travel@2x.jpg',
    alt: 'Путешествия Вероники и Дмитрия',
  },
  {
    id: 'proposal',
    title: 'Предложение',
    text: "Тот самый день, когда 'Я' и 'Ты' окончательно стали 'Мы'. Идеальный момент, идеальное 'Да'.",
    src: '/assets/photos/story-proposal.jpg',
    src2x: '/assets/photos/story-proposal@2x.jpg',
    alt: 'Предложение руки и сердца',
  },
];

export interface LocationCard {
  readonly id: string;
  readonly title: string;
  readonly lines: readonly string[];
  readonly icon: string;
}

export const LOCATION_CARDS: readonly LocationCard[] = [
  {
    id: 'registry',
    title: 'Регистрация',
    lines: ['Красный проспект 68'],
    icon: 'account_balance',
  },
  {
    id: 'banquet',
    title: 'Банкет',
    lines: ['Парк-отель SLUMO', 'ул. Новая Заря, 53А'],
    icon: 'restaurant',
  },
];
