import type { SKILLS } from '../constants';

export type Skill = (typeof SKILLS)[number]['title'];
