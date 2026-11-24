import { createPreconditions } from '@siberiacancode/autotest';

export const projectPreconditions = createPreconditions({
  openedProjectsPage: {
    action: 'Открыть /projects с подготовленным каталогом проектов.'
  }
});
