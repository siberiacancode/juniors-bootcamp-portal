import { createTestCases } from '@siberiacancode/autotest';

import { projectPreconditions } from './preconditions';

export const cases = createTestCases([
  {
    name: 'Проекты. Дизайн. Десктоп',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action:
          'Установить десктопную ширину экрана и проверить общую компоновку страницы: заголовок, описание, фильтры, кнопку добавления проекта, галерею и нижний баннер.',
        expected: [
          'Заголовок и описание расположены над фильтрами и кнопкой «Добавить свой проект»; ниже показана masonry-галерея из трёх колонок, затем баннер с кнопкой «Отправить проект».'
        ]
      }
    ]
  },
  {
    name: 'Проекты. Дизайн. Мобилка',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action:
          'Установить мобильную ширину экрана и проверить общую компоновку страницы: заголовок, описание, фильтры, кнопку добавления проекта, галерею и нижний баннер.',
        expected: [
          'Заголовок, описание, фильтры, кнопка «Добавить свой проект», карточки галереи и нижний баннер расположены последовательно в одну колонку без горизонтального скролла.'
        ]
      }
    ]
  },
  {
    name: 'Проекты. Темы',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Нажать кнопку смены темы в хедере.',
        expected: [
          'Тема страницы меняется на противоположную; текст, карточки, фильтры и баннер читаемы.'
        ]
      }
    ]
  },
  {
    name: 'Проекты. Метаданные',
    steps: [
      {
        action: 'Открыть /projects и проверить метатеги в исходном HTML страницы.',
        expected: [
          'title — «Проекты учеников | juniorsbootcamp», description — «Решения учеников по заданиям juniorsbootcamp. Смотрите код, сравнивайте подходы и делитесь своим проектом.».',
          'Сохранены Open Graph-метатеги: og:image — /metadata/open-graph.png, og:image:type — image/png, og:image:width — 1200, og:image:height — 640.'
        ]
      }
    ]
  },
  {
    name: 'Проекты. Добавить свой проект',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Нажать верхнюю кнопку «Добавить свой проект».',
        expected: [
          'В новой вкладке открывается https://github.com/siberiacancode/juniors-bootcamp-examples/blob/main/CONTRIBUTING.md.'
        ]
      }
    ]
  },
  {
    name: 'Проекты. Отправить проект',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Нажать на кнопку «Отправить проект» в нижнем баннере.',
        expected: [
          'В новой вкладке открывается https://github.com/siberiacancode/juniors-bootcamp-examples/blob/main/CONTRIBUTING.md.'
        ]
      }
    ]
  },
  {
    name: 'Проекты. Добавить свой проект. Метрика',
    steps: [
      {
        action:
          'В production-сборке открыть /projects, нажать «Принять» в уведомлении о cookies и верхнюю кнопку «Добавить свой проект». Проверить отправленную цель в DevTools → Network.',
        expected: [
          'В Яндекс Метрику отправляется цель project_contribute_click с placement = gallery.'
        ]
      }
    ]
  },
  {
    name: 'Проекты. Отправить проект. Метрика',
    steps: [
      {
        action:
          'В production-сборке открыть /projects, нажать «Принять» в уведомлении о cookies и кнопку «Отправить проект» в нижнем баннере. Проверить отправленную цель в DevTools → Network.',
        expected: [
          'В Яндекс Метрику отправляется цель project_contribute_click с placement = subfooter.'
        ]
      }
    ]
  }
]);
