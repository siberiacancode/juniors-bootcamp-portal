'use client';

import { useDidUpdate, useInterval, useMediaQuery } from '@siberiacancode/reactuse';
import * as motion from 'motion/react-client';
import { useState } from 'react';

import { MascotDefaultIllustration } from '@/components/illustrations';
import { Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

import type { Skill } from './types';

import {
  SkillProgress,
  SkillsAccordion,
  SkillsAccordionContent,
  SkillsAccordionItem,
  SkillsAccordionTrigger
} from './components';
import { SKILLS } from './constants';

export const SkillsSection = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [activeSkillTitle, setActiveSkillTitle] = useState<Skill>(SKILLS[0].title);

  const interval = useInterval(() => {
    setActiveSkillTitle((skillTitle) => {
      const skillIndex = SKILLS.findIndex((skill) => skill.title === skillTitle);

      return SKILLS[(skillIndex + 1) % SKILLS.length].title;
    });
  }, 5000);

  useDidUpdate(() => {
    interval.pause();
    const timeoutId = window.setTimeout(interval.resume);

    return () => window.clearTimeout(timeoutId);
  }, [activeSkillTitle]);

  return (
    <motion.section
      transition={{
        duration: 0.6
      }}
      className='relative grid gap-6 pt-52 lg:grid-cols-[minmax(0,560px)_1fr] lg:pt-0'
      id='skills'
      initial={{ opacity: 0, y: '20%' }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <motion.div
        aria-hidden
        transition={{
          delay: 0.35,
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1]
        }}
        className='pointer-events-none absolute top-0 left-1/2 z-0 -translate-x-1/2 select-none lg:-top-52 lg:right-22 lg:left-auto lg:translate-x-0'
        initial={{ opacity: 0, scale: 0.94, x: 24, y: 28, rotate: 4 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
      >
        <MascotDefaultIllustration className='h-67 w-auto' />
      </motion.div>

      <SkillsAccordion
        className='z-10 flex flex-col gap-4'
        type='single'
        value={activeSkillTitle}
        onValueChange={(skillTitle) => setActiveSkillTitle(skillTitle as Skill)}
      >
        {SKILLS.map((skill) => {
          const Icon = skill.Icon;

          return (
            <SkillsAccordionItem
              key={skill.title}
              className={cn(
                isDesktop
                  ? 'flex flex-col rounded-32 border-0 bg-secondary px-10 py-8'
                  : 'rounded-32 border-0 bg-secondary p-6',
                'data-[state=open]:bg-(--color-olive-100) data-[state=open]:text-action-primary'
              )}
              value={skill.title}
            >
              <SkillsAccordionTrigger
                icon={isDesktop && <Icon className='size-10 shrink-0 text-action-primary' />}
              >
                <Typography as='span' variant={isDesktop ? 'title-lg' : 'title-md'}>
                  <IntlText path={skill.title} />
                </Typography>
              </SkillsAccordionTrigger>
              <SkillsAccordionContent className={cn(!isDesktop && 'flex flex-col gap-6')}>
                {!isDesktop && (
                  <div
                    className={cn(
                      'relative grid size-full gap-4 rounded-32 bg-secondary p-8',
                      'mt-6 bg-background p-6 sm:p-8'
                    )}
                  >
                    <div
                      className={cn(
                        'grid min-h-full place-content-center rounded-32 bg-background',
                        'min-h-48'
                      )}
                    >
                      <div className='flex flex-col items-center'>
                        <Icon className='size-10 text-action-primary' />
                        <Typography as='p' variant='body-lg'>
                          Контент
                        </Typography>
                      </div>
                    </div>

                    {activeSkillTitle === skill.title && (
                      <SkillProgress
                        key={activeSkillTitle}
                        className='right-4 bottom-4 size-6'
                        dotClassName='size-5'
                      />
                    )}
                  </div>
                )}
                {isDesktop ? (
                  <IntlText path={skill.description} />
                ) : (
                  <Typography as='span' variant='body-sm'>
                    <IntlText path={skill.description} />
                  </Typography>
                )}
              </SkillsAccordionContent>
            </SkillsAccordionItem>
          );
        })}
      </SkillsAccordion>

      <div className='z-10 hidden items-center justify-center overflow-hidden lg:flex'>
        <div className='relative grid size-full gap-4 rounded-32 bg-secondary p-8'>
          <div className='grid min-h-full place-content-center rounded-32 bg-background'>
            <div className='flex flex-col items-center'>
              <Typography as='p' variant='body-lg'>
                Контент
              </Typography>
            </div>
          </div>

          <SkillProgress key={activeSkillTitle} />
        </div>
      </div>
    </motion.section>
  );
};
