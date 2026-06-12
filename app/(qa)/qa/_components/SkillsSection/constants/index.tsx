import { BugIcon, ClipboardCheckIcon, FileSearchIcon, FlaskConicalIcon } from 'lucide-react';

export const SKILLS = [
  {
    title: 'page.qa.skills.testCases.title',
    description: 'page.qa.skills.testCases.description',
    Icon: ClipboardCheckIcon,
    featured: true
  },
  {
    title: 'page.qa.skills.requirements.title',
    description: 'page.qa.skills.requirements.description',
    Icon: FileSearchIcon,
    featured: false
  },
  {
    title: 'page.qa.skills.bugReports.title',
    description: 'page.qa.skills.bugReports.description',
    Icon: BugIcon,
    featured: false
  },
  {
    title: 'page.qa.skills.automation.title',
    description: 'page.qa.skills.automation.description',
    Icon: FlaskConicalIcon,
    featured: false
  }
] as const;

export const SKILL_AUTO_CHANGE_DELAY_SECONDS = 5;
