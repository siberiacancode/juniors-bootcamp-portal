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
          'Фильтр заданий содержит «Все задания», доставку, аренду машин, кинотеатр, пиццерию и магазин игр; фильтр framework содержит «Любой стек», React, Next, Vue, Nuxt и Angular. По умолчанию выбраны «Все задания» и «Любой стек».'
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
        expected: ['В галерее остаются только проекты с выбранным framework.']
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
    name: 'Фильтры проектов. Неизвестное значение URL',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action:
          'Выбрать оба фильтра в URL, заменить значение одного параметра неизвестным и открыть адрес.',
        expected: [
          'Фильтр с неизвестным значением отображает начальное, но неизвестный параметр остаётся в URL; второй фильтр сохраняет выбранное значение, и галерея соответствует ему.'
        ]
      }
    ]
  },
  {
    name: 'Фильтры проектов. Пустой список',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Выбрать сочетание задания и framework без совпадений в каталоге.',
        expected: ['Вместо галереи показано пустое состояние с действием сброса фильтров.']
      }
    ]
  },
  {
    name: 'Фильтры проектов. Сброс пустого списка',
    steps: [
      {
        action: 'Открыть /projects с сочетанием фильтров без совпадений и выбрать сброс фильтров.',
        expected: [
          'Оба фильтра возвращаются к значениям «Все задания» и «Любой стек», параметры task и framework удаляются из URL; галерея снова показывает все проекты.'
        ]
      }
    ]
  }
]);
