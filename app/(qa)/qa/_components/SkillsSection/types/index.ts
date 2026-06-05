import type { SKILLS } from '../constants';

export type Skill = (typeof SKILLS)[number];
export type SkillTitle = Skill['title'];
