'use client';

import Image from 'next/image';
import { useIntl } from 'react-intl';

import type { Project, ProjectFramework } from '@/types';

import {
  AngularIcon,
  GithubIcon,
  NextIcon,
  NuxtIcon,
  ReactIcon,
  VueIcon
} from '@/components/icons';
import {
  Button,
  Empty,
  EmptyDescription,
  EmptyTitle,
  ProjectCard,
  ProjectCardActions,
  ProjectCardAuthor,
  ProjectCardCodeLink,
  ProjectCardContent,
  ProjectCardFramework,
  ProjectCardImage,
  ProjectCardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui';
import { LINKS } from '@/constants';
import { IntlText } from '@/intl';

import { TASK_LABELS, useGallerySection } from './hooks/useGallerySection';

interface GallerySectionProps {
  projects: Project[];
}

const FRAMEWORK_ICONS = {
  angular: AngularIcon,
  next: NextIcon,
  nuxt: NuxtIcon,
  react: ReactIcon,
  vue: VueIcon
} satisfies Record<ProjectFramework, typeof ReactIcon>;

export const GallerySection = ({ projects }: GallerySectionProps) => {
  const intl = useIntl();
  const { state, functions } = useGallerySection(projects);

  return (
    <section
      aria-label={intl.formatMessage({ id: 'page.projects.galleryLabel' })}
      className='flex flex-col gap-8 sm:gap-10'
    >
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex flex-wrap gap-2'>
          <Select
            items={state.taskOptions}
            value={state.selectedTask}
            onValueChange={functions.onTaskChange}
          >
            <SelectTrigger
              aria-label={intl.formatMessage({ id: 'select.task.label' })}
              className='data-[size=lg]:text-[16px]/6 sm:w-64'
              size='lg'
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {state.taskOptions.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            items={state.frameworkOptions}
            value={state.selectedFramework}
            onValueChange={functions.onFrameworkChange}
          >
            <SelectTrigger
              aria-label={intl.formatMessage({ id: 'select.framework.label' })}
              className='data-[size=lg]:text-[16px]/6 sm:w-64'
              size='lg'
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {state.frameworkOptions.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          asChild
          className='w-full sm:w-auto'
          size='lg'
          onClick={functions.onContributeClick}
        >
          <a href={LINKS.PROJECTS.CONTRIBUTING} rel='noopener noreferrer' target='_blank'>
            <IntlText path='button.addProject' />
          </a>
        </Button>
      </div>

      {!!state.filteredProjects.length && (
        <>
          <ol className='grid gap-5 md:grid-cols-2 lg:hidden'>
            {state.filteredProjects.map((project) => {
              const title =
                project.name.trim() || intl.formatMessage({ id: TASK_LABELS[project.task] });
              const FrameworkIcon = FRAMEWORK_ICONS[project.framework];
              const codeUrl = `${LINKS.PROJECTS.REPOSITORY}/tree/main/${project.path}`;

              return (
                <li key={`${project.username}-${project.path}`}>
                  <ProjectCard>
                    {project.preview && (
                      <ProjectCardImage
                        render={
                          <Image
                            alt={intl.formatMessage(
                              { id: 'page.projects.previewAlt' },
                              { name: title, username: project.username }
                            )}
                            height={348}
                            src={project.preview}
                            width={640}
                          />
                        }
                      />
                    )}

                    <ProjectCardContent>
                      <ProjectCardAuthor>@{project.username}</ProjectCardAuthor>
                      <ProjectCardTitle>{title}</ProjectCardTitle>

                      <ProjectCardActions>
                        <ProjectCardCodeLink
                          aria-label={intl.formatMessage(
                            { id: 'page.projects.codeLabel' },
                            { name: title, username: project.username }
                          )}
                          href={codeUrl}
                          rel='noopener noreferrer'
                          target='_blank'
                          onClick={() => functions.onProjectClick(project)}
                        >
                          <GithubIcon aria-hidden='true' />
                        </ProjectCardCodeLink>

                        <ProjectCardFramework>
                          <FrameworkIcon aria-hidden='true' />
                        </ProjectCardFramework>
                      </ProjectCardActions>
                    </ProjectCardContent>
                  </ProjectCard>
                </li>
              );
            })}
          </ol>

          <div className='hidden lg:grid lg:grid-cols-3 lg:gap-6'>
            {[0, 1, 2].map((column) => (
              <ol key={column} className='flex flex-col gap-6'>
                {state.filteredProjects
                  .filter((_, index) => index % 3 === column)
                  .map((project) => {
                    const title =
                      project.name.trim() || intl.formatMessage({ id: TASK_LABELS[project.task] });
                    const FrameworkIcon = FRAMEWORK_ICONS[project.framework];
                    const codeUrl = `${LINKS.PROJECTS.REPOSITORY}/tree/main/${project.path}`;

                    return (
                      <li key={`${project.username}-${project.path}`}>
                        <ProjectCard>
                          {project.preview && (
                            <ProjectCardImage
                              render={
                                <Image
                                  alt={intl.formatMessage(
                                    { id: 'page.projects.previewAlt' },
                                    { name: title, username: project.username }
                                  )}
                                  height={348}
                                  src={project.preview}
                                  width={640}
                                />
                              }
                            />
                          )}

                          <ProjectCardContent>
                            <ProjectCardAuthor>@{project.username}</ProjectCardAuthor>
                            <ProjectCardTitle>{title}</ProjectCardTitle>

                            <ProjectCardActions>
                              <ProjectCardCodeLink
                                aria-label={intl.formatMessage(
                                  { id: 'page.projects.codeLabel' },
                                  { name: title, username: project.username }
                                )}
                                href={codeUrl}
                                rel='noopener noreferrer'
                                target='_blank'
                                onClick={() => functions.onProjectClick(project)}
                              >
                                <GithubIcon aria-hidden='true' />
                              </ProjectCardCodeLink>

                              <ProjectCardFramework>
                                <FrameworkIcon aria-hidden='true' />
                              </ProjectCardFramework>
                            </ProjectCardActions>
                          </ProjectCardContent>
                        </ProjectCard>
                      </li>
                    );
                  })}
              </ol>
            ))}
          </div>
        </>
      )}

      {!state.filteredProjects.length && (
        <Empty>
          <EmptyTitle>
            <IntlText path='page.projects.empty.title' />
          </EmptyTitle>
          <EmptyDescription>
            <IntlText path='page.projects.empty.description' />
          </EmptyDescription>
          <Button variant='secondary' onClick={functions.onResetFilters}>
            <IntlText path='button.resetFilters' />
          </Button>
        </Empty>
      )}
    </section>
  );
};
