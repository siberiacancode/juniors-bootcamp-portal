import { use } from 'react';

import { TaskSettingsContext } from './TaskSettingsContext';

export const useTaskSettings = () => use(TaskSettingsContext);
