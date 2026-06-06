import { BugIcon, ClipboardCheckIcon, FileSearchIcon, FlaskConicalIcon } from 'lucide-react';

export const SKILLS = [
  {
    title: 'page.testers.skills.testCases.title',
    description: 'page.testers.skills.testCases.description',
    Icon: ClipboardCheckIcon,
    featured: true
  },
  {
    title: 'page.testers.skills.requirements.title',
    description: 'page.testers.skills.requirements.description',
    Icon: FileSearchIcon,
    featured: false
  },
  {
    title: 'page.testers.skills.bugReports.title',
    description: 'page.testers.skills.bugReports.description',
    Icon: BugIcon,
    featured: false
  },
  {
    title: 'page.testers.skills.automation.title',
    description: 'page.testers.skills.automation.description',
    Icon: FlaskConicalIcon,
    featured: false
  }
] as const;

export const SKILL_AUTO_CHANGE_DELAY_SECONDS = 5;
export const SKILL_AUTO_CHANGE_DELAY_MS = SKILL_AUTO_CHANGE_DELAY_SECONDS * 1000;
