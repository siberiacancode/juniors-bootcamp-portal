import { createPreconditions, createTestCases } from '@siberiacancode/autotest';

const footerPreconditions = createPreconditions({
  openedHomePage: {
    action: 'Открыть главную страницу /.'
  }
});

export const cases = createTestCases([
  {
    name: 'Футер. Дизайн. Десктоп',
    preconditions: [footerPreconditions.openedHomePage],
    steps: [
      {
        action: 'Установить десктопную ширину экрана и проверить состав и расположение футера.',
        expected: [
          'Wordmark juniorsbootcamp, описание, кнопка «Связаться» и социальные ссылки расположены слева; колонки «Направления» и «Opensource siberiacancode» — справа. Под разделителем расположены copyright с текущим годом и подпись об авторе и исходном коде.'
        ]
      }
    ]
  },
  {
    name: 'Футер. Дизайн. Мобилка',
    preconditions: [footerPreconditions.openedHomePage],
    steps: [
      {
        action: 'Установить мобильную ширину экрана и проверить состав и расположение футера.',
        expected: [
          'Wordmark, описание, кнопка «Связаться», социальные ссылки, «Направления», «Opensource siberiacancode» и нижняя строка расположены друг под другом; горизонтального скролла нет.'
        ]
      }
    ]
  },
  {
    name: 'Футер. Логотип',
    preconditions: [footerPreconditions.openedHomePage],
    steps: [
      {
        action: 'Проверить ссылку wordmark juniorsbootcamp.',
        expected: ['Ссылка ведёт на /.']
      }
    ]
  },
  {
    name: 'Футер. Связаться',
    preconditions: [footerPreconditions.openedHomePage],
    steps: [
      {
        action: 'Нажать кнопку «Связаться».',
        expected: ['В новой вкладке открывается https://t.me/siberiacancode.']
      }
    ]
  },
  {
    name: 'Футер. Социальные сети',
    preconditions: [footerPreconditions.openedHomePage],
    steps: [
      {
        action: 'Поочерёдно нажать все ссылки социальных сетей.',
        expected: [
          'GitHub открывает https://github.com/siberiacancode в новой вкладке.',
          'Telegram открывает https://t.me/siberiacancode в новой вкладке.',
          'Twitch открывает https://www.twitch.tv/siberiacancode в новой вкладке.',
          'YouTube открывает https://www.youtube.com/@siberiacancode в новой вкладке.'
        ]
      }
    ]
  },
  {
    name: 'Футер. Направления',
    preconditions: [footerPreconditions.openedHomePage],
    steps: [
      {
        action:
          'Поочерёдно нажать все ссылки раздела «Направления», возвращаясь на / после перехода.',
        expected: [
          '«Задания» открывает /tasks.',
          '«Гайды» открывает /guides.',
          '«Тестирование» открывает /qa.',
          '«Проекты» открывает /projects.'
        ]
      }
    ]
  },
  {
    name: 'Футер. Opensource siberiacancode',
    preconditions: [footerPreconditions.openedHomePage],
    steps: [
      {
        action: 'Поочерёдно нажать все ссылки раздела «Opensource siberiacancode».',
        expected: [
          'reactuse открывает https://siberiacancode.github.io/reactuse/ в новой вкладке.',
          'mock-config открывает https://www.npmjs.com/package/@siberiacancode/mock-config-server в новой вкладке.',
          'apicraft открывает https://www.npmjs.com/package/@siberiacancode/apicraft в новой вкладке.',
          'fetches открывает https://www.npmjs.com/package/@siberiacancode/fetches в новой вкладке.'
        ]
      }
    ]
  },
  {
    name: 'Футер. Автор и исходный код',
    preconditions: [footerPreconditions.openedHomePage],
    steps: [
      {
        action: 'Поочерёдно нажать обе ссылки в нижней строке футера.',
        expected: [
          'siberiacancode открывает https://github.com/siberiacancode в новой вкладке.',
          'GitHub открывает https://github.com/siberiacancode/juniors-bootcamp-portal в новой вкладке.'
        ]
      }
    ]
  },
  {
    name: 'Футер. Темы',
    preconditions: [footerPreconditions.openedHomePage],
    steps: [
      {
        action: 'Нажать кнопку смены темы в хедере.',
        expected: [
          'Футер принимает противоположную тему; текст, кнопка и ссылки остаются читаемыми.'
        ]
      }
    ]
  }
]);
