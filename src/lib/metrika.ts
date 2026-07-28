// Яндекс.Метрика: номер счётчика брать в интерфейсе метрики
// (https://metrika.yandex.ru -> нужный счётчик -> номер под названием).
// 0 = метрика выключена, скрипт не грузится (удобно для локальной разработки).
export const YM_COUNTER_ID = 111097971;

export type MetrikaGoal =
  | 'book_online'
  | 'online_consult_open'
  | 'call_clinic_open'
  | 'call_clinic_dial'
  | 'telegram'
  | 'whatsapp'
  | 'addresses'
  | 'clinic_profile'
  | 'reviews';

declare global {
  interface Window {
    ym?: {
      (counterId: number, event: string, ...args: unknown[]): void;
      a?: unknown[];
      l?: number;
    };
  }
}

export function initMetrika() {
  if (!YM_COUNTER_ID || typeof window === 'undefined' || window.ym) {
    return;
  }

  const queue: unknown[] = [];
  const ym: Window['ym'] = function (...args: unknown[]) {
    queue.push(args);
  } as NonNullable<Window['ym']>;
  ym.a = queue;
  ym.l = Date.now();
  window.ym = ym;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://mc.yandex.ru/metrika/tag.js?id=${YM_COUNTER_ID}`;
  document.head.appendChild(script);

  window.ym(YM_COUNTER_ID, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    referrer: document.referrer,
    url: location.href,
  });
}

export function reachGoal(goal: MetrikaGoal) {
  if (!YM_COUNTER_ID) {
    return;
  }

  window.ym?.(YM_COUNTER_ID, 'reachGoal', goal);
}
