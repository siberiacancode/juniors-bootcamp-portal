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
    name: 'Проекты. Метаданные и индексация',
    steps: [
      {
        action: 'Открыть /projects и /tasks и проверить метатеги в исходном HTML обеих страниц.',
        expected: [
          'У /projects title — «Проекты учеников | juniorsbootcamp», description — «Решения учеников по заданиям juniorsbootcamp. Смотрите код, сравнивайте подходы и делитесь своим проектом.».',
          'У /projects сохранены Open Graph-метатеги: og:image — /metadata/open-graph.png, og:image:type — image/png, og:image:width — 1200, og:image:height — 640.',
          'В исходном HTML /projects и /tasks отсутствует robots со значением noindex, nofollow.'
        ]
      }
    ]
  },
  {
    name: 'Проекты. Добавить свой проект',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Нажать на кнопку «Добавить свой проект».',
        expected: [
          'Открывается https://github.com/siberiacancode/juniors-bootcamp-examples/blob/main/CONTRIBUTING.md.'
        ]
      },
      {
        action: 'Нажать на кнопку «Отправить проект» в нижнем баннере.',
        expected: [
          'Открывается https://github.com/siberiacancode/juniors-bootcamp-examples/blob/main/CONTRIBUTING.md.'
        ]
      }
    ]
  },
  {
    name: 'Проекты. Метрика',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action:
          'Открыть DevTools → Console, запомнить текущее содержимое window.dataLayer и выбрать задание в фильтре. Проверить новые записи window.dataLayer.',
        expected: [
          'В window.dataLayer добавлена запись события изменения задания с выбранным значением.'
        ]
      },
      {
        action: 'Выбрать framework в фильтре и проверить новые записи window.dataLayer.',
        expected: [
          'В window.dataLayer добавлена запись события изменения framework с выбранным значением.'
        ]
      },
      {
        action:
          'Открыть ссылку GitHub в карточке проекта и проверить новые записи window.dataLayer.',
        expected: [
          'В window.dataLayer добавлена запись project_code_click с username и task выбранного проекта.'
        ]
      },
      {
        action:
          'Вернуться на /projects, нажать верхнюю кнопку «Добавить свой проект» и проверить новые записи window.dataLayer.',
        expected: [
          'В window.dataLayer добавлена запись project_contribute_click с placement = top.'
        ]
      },
      {
        action:
          'Вернуться на /projects, нажать кнопку «Отправить проект» в нижнем баннере и проверить новые записи window.dataLayer.',
        expected: [
          'В window.dataLayer добавлена запись project_contribute_click с placement = banner.'
        ]
      }
    ]
  }
]);
