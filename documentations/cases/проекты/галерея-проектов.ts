import { createTestCases } from '@siberiacancode/autotest';

import { projectPreconditions } from './preconditions';

export const cases = createTestCases([
  {
    name: 'Галерея проектов. Данные',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Сопоставить карточки на /projects с подготовленным каталогом из projects.json.',
        expected: [
          'Количество и порядок карточек совпадают с массивом каталога; каждая карточка показывает @username из username, название из name или задания при пустом name начальной записи и иконку из framework.'
        ]
      }
    ]
  },
  {
    name: 'Галерея проектов. Данные. Со скриншотом',
    steps: [
      {
        action: 'Открыть /projects с проектом, у которого задан preview.',
        expected: ['Сверху карточки показан локально подготовленный скриншот с осмысленным alt.']
      }
    ]
  },
  {
    name: 'Галерея проектов. Данные. Без скриншота',
    steps: [
      {
        action: 'Открыть /projects с проектом без preview.',
        expected: ['Карточка компактна, без изображения и пустой заглушки; ссылка GitHub доступна.']
      }
    ]
  },
  {
    name: 'Галерея проектов. Код',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'С клавиатуры выбрать и открыть иконку GitHub у карточки проекта.',
        expected: [
          'Ссылка имеет понятное доступное название и безопасные атрибуты внешней ссылки; копия решения по полю path открывается в новой вкладке репозитория juniors-bootcamp-examples.'
        ]
      }
    ]
  },
  {
    name: 'Галерея проектов. Область клика',
    preconditions: [projectPreconditions.openedProjectsPage],
    steps: [
      {
        action: 'Выбрать свободную область карточки вне ссылок.',
        expected: ['Карточка не открывает страницу; переход выполняется только по ссылке GitHub.']
      }
    ]
  }
]);
