export type ProjectFramework = 'angular' | 'next' | 'nuxt' | 'react' | 'vue';
export type ProjectTask = 'cars' | 'cinema' | 'delivery' | 'games' | 'pizza';

export interface Project {
  framework: ProjectFramework;
  name: string;
  path: string;
  preview?: string;
  task: ProjectTask;
  username: string;
}
