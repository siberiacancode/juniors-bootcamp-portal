import { createPreconditions, createTestCases } from '@siberiacancode/autotest';

const headerPreconditions = createPreconditions({
  home: { action: 'Открыть главную страницу /.' },
  search: { action: 'Открыть / и нажать кнопку поиска в хедере.' }
});

export const cases = createTestCases([
  {
    name: 'Хедер. Дизайн. Десктоп',
    preconditions: [headerPreconditions.home],
    steps: [
      {
        action:
          'Установить ширину 1440 px и проверить состав и расположение хедера в светлой и тёмной темах.',
        expected: [
          'Логотип jb, «Задания», «Документация», «Тестирование», «Open source», поле поиска, GitHub и переключатель темы расположены в порядке макета; контейнер не шире 1280 px. Внешний вид соответствует 01-closed-light.png и 08-closed-dark.png из .ai/inputs/header-kit.zip.'
        ]
      }
    ]
  },
  {
    name: 'Хедер. Логотип',
    steps: [{ action: 'На внутренней странице нажать логотип jb.', expected: ['Открывается /.'] }]
  },
  {
    name: 'Хедер. Тестирование',
    preconditions: [headerPreconditions.home],
    steps: [{ action: 'Нажать «Тестирование».', expected: ['Открывается /qa.'] }]
  },
  {
    name: 'Хедер. GitHub',
    preconditions: [headerPreconditions.home],
    steps: [
      {
        action: 'Нажать иконку GitHub.',
        expected: ['В новой вкладке открывается https://github.com/siberiacancode.']
      }
    ]
  },
  {
    name: 'Хедер. Меню. Открытие и закрытие',
    preconditions: [headerPreconditions.home],
    steps: [
      {
        action: 'Открыть «Задания» кликом, закрыть по Escape; повторить с кликом вне меню.',
        expected: [
          'После клика меню открыто и триггер активен; Escape и клик вне меню закрывают его.'
        ]
      }
    ]
  },
  {
    name: 'Хедер. Меню. Клавиатура',
    preconditions: [headerPreconditions.home],
    steps: [
      {
        action: 'С клавиатуры открыть выпадающее меню хедера и активировать доступную ссылку.',
        expected: [
          'Триггер и ссылки доступны с клавиатуры; открывается страница выбранного пункта.'
        ]
      }
    ]
  },
  {
    name: 'Хедер. Мобильное меню. Дизайн',
    preconditions: [headerPreconditions.home],
    steps: [
      {
        action:
          'При ширине 390 px открыть бургер и проверить состав и расположение листа в обеих темах.',
        expected: [
          'Меню занимает экран, прокручивается при нехватке высоты; страница за ним не прокручивается.'
        ]
      }
    ]
  },
  {
    name: 'Хедер. Мобильное меню. Закрытие',
    preconditions: [headerPreconditions.home],
    steps: [
      {
        action:
          'При ширине 390 px открыть бургер, закрыть его крестиком, затем открыть снова и выбрать ссылку.',
        expected: [
          'Крестик закрывает меню; после выбора ссылки меню закрывается и открывается выбранная страница.'
        ]
      }
    ]
  },
  {
    name: 'Хедер. Тема',
    preconditions: [headerPreconditions.home],
    steps: [
      {
        action:
          'Переключить тему на десктопе и мобильном экране, открыв меню на обоих экранах и поиск на десктопе.',
        expected: [
          'Выбранная тема применяется к хедеру, меню и десктопному поиску; текст и элементы управления читаемы.'
        ]
      }
    ]
  },
  {
    name: 'Хедер. Навигация. Доступные пункты',
    preconditions: [headerPreconditions.home],
    steps: [
      {
        action:
          'Открыть меню «Задания», «Документация» и «Open source» и последовательно выбрать доступные пункты.',
        expected: [
          'Задания ведут на /tasks/pizza, /tasks/cars, /tasks/cinema и /tasks/delivery; «Все задания» — на /tasks; «Гайды» — на /guides; внешние проекты открывают адреса из LINKS в новой вкладке.'
        ]
      }
    ]
  },
  {
    name: 'Хедер. Навигация. Недоступные пункты',
    preconditions: [headerPreconditions.home],
    steps: [
      {
        action:
          'Открыть меню «Задания» и «Документация», проверить «Магазин игр», «Скиллы» и «Архитектура».',
        expected: [
          'Пункты показаны приглушённым цветом, имеют aria-disabled и не ведут на страницу.'
        ]
      }
    ]
  },
  {
    name: 'Хедер. Поиск. Дизайн',
    preconditions: [headerPreconditions.search],
    steps: [
      {
        action: 'При ширине 1440 px проверить расположение и оформление окна поиска в обеих темах.',
        expected: [
          'Поле ввода, область результатов и подвал с текстом «Поиск от algolia» соответствуют 05-search-empty.png и 11-search-dark.png из .ai/inputs/header-kit.zip.'
        ]
      }
    ]
  },
  {
    name: 'Хедер. Поиск. Открытие',
    preconditions: [headerPreconditions.home],
    steps: [
      {
        action: 'На десктопе открыть поиск кнопкой, закрыть и повторить через Ctrl+K или ⌘K.',
        expected: ['Окно открывается обоими способами на десктопе; фокус установлен в поле ввода.']
      }
    ]
  },
  {
    name: 'Хедер. Поиск. Закрытие и фокус',
    preconditions: [headerPreconditions.search],
    steps: [
      {
        action: 'Закрыть поиск по Escape, затем повторить с кликом по подложке.',
        expected: ['Окно закрывается обоими способами; фокус возвращается к вызвавшему элементу.']
      }
    ]
  },
  {
    name: 'Хедер. Поиск. Состояния',
    preconditions: [headerPreconditions.search],
    steps: [
      {
        action:
          'Проверить пустой запрос, затем ввести запрос с результатами и запрос без совпадений.',
        expected: [
          'При пустом запросе показаны страницы заданий и гайдов из дерева навигации; при вводе виден индикатор загрузки, после ответа Algolia результаты добавляются в группу «Результаты поиска». При отсутствии совпадений показано «Ничего не найдено». В подвале показано «Поиск от algolia».'
        ]
      }
    ]
  },
  {
    name: 'Хедер. Поиск. Выбор результата с клавиатуры',
    preconditions: [headerPreconditions.search],
    steps: [
      {
        action:
          'Ввести запрос с несколькими результатами, выбрать результат стрелками и нажать Enter.',
        expected: [
          'Стрелки меняют выбранный результат; Enter открывает выбранную страницу или раздел.'
        ]
      }
    ]
  }
]);
