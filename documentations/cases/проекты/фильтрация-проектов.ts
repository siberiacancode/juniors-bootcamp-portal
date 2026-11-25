import { createTestCases } from '@siberiacancode/autotest';

import { projectPreconditions } from './preconditions';

export const cases = createTestCases([
  {
    name: 'Фильтры проектов. Значения',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Открыть оба фильтра.',
        expected: [
          'Фильтр заданий содержит «Все задания», «Доставка еды», «Аренда машин», «Онлайн-кинотеатр», «Пиццерия» и «Магазин игр».',
          'Фильтр framework содержит «Любой стек», React, Next, Vue, Nuxt и Angular.'
        ]
      }
    ]
  },
  {
    name: 'Фильтры проектов. Выбор по умолчанию',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Проверить выбранные значения фильтров и URL при открытии страницы.',
        expected: [
          'В фильтре заданий выбрано «Все задания», в фильтре framework — «Любой стек».',
          'В URL отсутствуют параметры task и framework; галерея показывает все проекты каталога.'
        ]
      }
    ]
  },
  {
    name: 'Фильтры проектов. Задание',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Выбрать задание, для которого в каталоге есть проекты разных framework.',
        expected: [
          'Выбранное задание показано в фильтре, его значение записано в параметр task URL.',
          'В галерее остаются только проекты выбранного задания; порядок совпадает с порядком этих записей в projects.json.'
        ]
      }
    ]
  },
  {
    name: 'Фильтры проектов. Framework',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Выбрать framework, для которого в каталоге есть проекты разных заданий.',
        expected: [
          'Выбранный framework показан в фильтре, его значение записано в параметр framework URL.',
          'В галерее остаются только проекты с выбранным framework.'
        ]
      }
    ]
  },
  {
    name: 'Фильтры проектов. Совместное применение',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action:
          'Выбрать задание и framework при наличии проектов для каждого условия по отдельности.',
        expected: [
          'Оба выбранных значения показаны в фильтрах и записаны в параметры task и framework URL.',
          'В галерее остаются только проекты, соответствующие обоим условиям одновременно.'
        ]
      }
    ]
  },
  {
    name: 'Фильтры проектов. Восстановление из URL',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Выбрать оба фильтра, скопировать полученный URL и открыть его заново.',
        expected: [
          'URL сохраняет выбранные значения в task и framework; после повторного открытия они восстановлены в фильтрах, а галерея соответствует их пересечению.'
        ]
      }
    ]
  },
  {
    name: 'Фильтры проектов. Неизвестное значение',
    steps: [
      {
        action: 'Открыть /projects?task=unknown&framework=react напрямую через адресную строку.',
        expected: [
          'Фильтр заданий показывает «Все задания», фильтр framework — React.',
          'Параметр task=unknown остаётся в URL; галерея показывает только проекты с framework = react.'
        ]
      }
    ]
  },
  {
    name: 'Фильтры проектов. Задание. Метрика',
    steps: [
      {
        action:
          'В production-сборке открыть /projects, нажать «Принять» в уведомлении о cookies и выбрать задание, отличное от «Все задания». Проверить отправленную цель в DevTools → Network.',
        expected: [
          'В Яндекс Метрику отправляется цель project_task_filter_click с task = значению выбранного задания.'
        ]
      }
    ]
  },
  {
    name: 'Фильтры проектов. Framework. Метрика',
    steps: [
      {
        action:
          'В production-сборке открыть /projects, нажать «Принять» в уведомлении о cookies и выбрать framework, отличный от «Любой стек». Проверить отправленную цель в DevTools → Network.',
        expected: [
          'В Яндекс Метрику отправляется цель project_framework_filter_click с framework = значению выбранного framework.'
        ]
      }
    ]
  }
]);
