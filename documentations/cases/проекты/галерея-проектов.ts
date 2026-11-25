import { createTestCases } from '@siberiacancode/autotest';

import { projectPreconditions } from './preconditions';

export const cases = createTestCases([
  {
    name: 'Галерея проектов. Данные',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Сопоставить карточки с подготовленным каталогом из public/projects/projects.json.',
        expected: [
          'Количество и порядок карточек совпадают с массивом каталога; каждая карточка показывает @username из username, название из name или название задания при пустом name начальной записи и иконку из framework.'
        ]
      }
    ]
  },
  {
    name: 'Галерея проектов. Карточка. Со скриншотом',
    steps: [
      {
        action: 'Открыть /projects с проектом, у которого задан preview.',
        expected: [
          'Сверху карточки показан скриншот из preview с alt "Скриншот проекта «{name}» автора @{username}", где name и username соответствуют карточке.'
        ]
      }
    ]
  },
  {
    name: 'Галерея проектов. Карточка. Без скриншота',
    steps: [
      {
        action: 'Открыть /projects с проектом без preview.',
        expected: ['Карточка показана без изображения и пустой заглушки.']
      }
    ]
  },
  {
    name: 'Галерея проектов. Карточка. Ссылка на код',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'С клавиатуры выбрать и открыть иконку GitHub у карточки проекта.',
        expected: [
          'Ссылка имеет доступное название "Открыть код проекта «{name}» автора @{username} на GitHub" и атрибуты rel="noopener noreferrer".',
          'В новой вкладке открывается https://github.com/siberiacancode/juniors-bootcamp-examples/tree/main/{path}, где path соответствует выбранному проекту.'
        ]
      }
    ]
  },
  {
    name: 'Галерея проектов. Карточка. Область клика',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Выбрать свободную область карточки вне ссылок.',
        expected: ['Карточка не открывает страницу; переход выполняется только по ссылке GitHub.']
      }
    ]
  },
  {
    name: 'Галерея проектов. Пустой список',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Выбрать сочетание задания и framework без совпадений в каталоге.',
        expected: [
          'Вместо карточек показаны заголовок «Проекты не найдены», текст «Попробуйте выбрать другое задание или стек.» и кнопка «Сбросить фильтры».'
        ]
      }
    ]
  },
  {
    name: 'Галерея проектов. Сброс фильтров',
    steps: [
      {
        action: 'Открыть /projects?task=delivery&framework=angular и нажать «Сбросить фильтры».',
        expected: [
          'Фильтры показывают «Все задания» и «Любой стек», параметры task и framework удалены из URL; галерея снова показывает все проекты каталога.'
        ]
      }
    ]
  },
  {
    name: 'Галерея проектов. Карточка. Ссылка на код. Метрика',
    steps: [
      {
        action:
          'В production-сборке открыть /projects, нажать «Принять» в уведомлении о cookies и ссылку GitHub в карточке проекта. Проверить отправленную цель в DevTools → Network.',
        expected: [
          'В Яндекс Метрику отправляется цель project_code_click с username и task выбранного проекта.'
        ]
      }
    ]
  }
]);
