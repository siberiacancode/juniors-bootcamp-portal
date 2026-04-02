import { TASKS } from '../_constants';

export const isValidTaskId = (id: string): id is keyof typeof TASKS => id in TASKS;
