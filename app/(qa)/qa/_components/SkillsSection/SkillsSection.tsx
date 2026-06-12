'use client';

import { useDidUpdate, useTimer } from '@siberiacancode/reactuse';
import * as motion from 'motion/react-client';
import { useState } from 'react';

import { MascotDefaultIllustration } from '@/components/illustrations';
import { Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { cn } from '@/lib/utils';

import type { Skill, SkillTitle } from './types';

import {
  SkillsAccordion,
  SkillsAccordionContent,
  SkillsAccordionItem,
  SkillsAccordionTrigger
} from './components';
import { SKILL_AUTO_CHANGE_DELAY_SECONDS, SKILLS } from './constants';

const getSkillByTitle = (title: string) => SKILLS.find((skill) => skill.title === title);

const getNextSkillTitle = (title: SkillTitle) => {
  const currentIndex = SKILLS.findIndex((skill) => skill.title === title);
  const nextIndex = (currentIndex + 1) % SKILLS.length;

  return SKILLS[nextIndex].title;
};

const SkillProgress = ({
  className,
  dotClassName = 'size-8'
}: {
  className?: string;
  dotClassName?: string;
}) => (
  <span
    className={cn(
      'absolute right-5 bottom-5 flex size-10 shrink-0 items-center justify-center',
      className
    )}
  >
    <span className={cn('rounded-full bg-(--color-neutral-400)', dotClassName)} />
    <svg aria-hidden className='absolute inset-0 -rotate-90' fill='none' viewBox='0 0 40 40'>
      <circle
        className='stroke-(--color-olive-700) opacity-30'
        cx='20'
        cy='20'
        r='18'
        strokeWidth='2'
      />
      <motion.circle
        animate={{ pathLength: 1 }}
        className='stroke-(--color-olive-700)'
        cx='20'
        cy='20'
        initial={{ pathLength: 0 }}
        r='18'
        strokeLinecap='round'
        strokeWidth='2'
        transition={{ duration: SKILL_AUTO_CHANGE_DELAY_SECONDS, ease: 'linear' }}
      />
    </svg>
  </span>
);

const SkillPreview = ({
  className,
  contentClassName,
  progressDotClassName,
  progressClassName,
  skill,
  withProgress = true
}: {
  className?: string;
  contentClassName?: string;
  progressDotClassName?: string;
  progressClassName?: string;
  skill: Skill;
  withProgress?: boolean;
}) => {
  const Icon = skill.Icon;

  return (
    <div className={cn('relative grid size-full gap-4 rounded-32 bg-secondary p-8', className)}>
      <div
        className={cn(
          'grid min-h-full place-content-center rounded-32 bg-background',
          contentClassName
        )}
      >
        <div className='flex flex-col items-center'>
          <Icon className='size-10 text-action-primary' />
          <Typography as='p' variant='body-lg'>
            Контент
          </Typography>
        </div>
      </div>

      {withProgress && (
        <SkillProgress
          key={skill.title}
          className={progressClassName}
          dotClassName={progressDotClassName}
        />
      )}
    </div>
  );
};

export const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillTitle>(SKILLS[0].title);

  const selectedSkillData = getSkillByTitle(selectedSkill) ?? SKILLS[0];

  const autoSwitchTimer = useTimer(SKILL_AUTO_CHANGE_DELAY_SECONDS, {
    onExpire: () => setSelectedSkill(getNextSkillTitle)
  });

  useDidUpdate(() => {
    autoSwitchTimer.restart(SKILL_AUTO_CHANGE_DELAY_SECONDS);
  }, [selectedSkill]);

  const onSkillChange = (value: string) => {
    const skill = getSkillByTitle(value);

    if (skill) setSelectedSkill(skill.title);
  };

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
        className='z-10 hidden flex-col gap-4 lg:flex'
        type='single'
        value={selectedSkillData.title}
        onValueChange={onSkillChange}
      >
        {SKILLS.map((skill) => {
          const Icon = skill.Icon;

          return (
            <SkillsAccordionItem
              key={skill.title}
              className={cn(
                'flex flex-col rounded-32 border-0 bg-secondary px-10 py-8',
                'data-[state=open]:bg-(--color-olive-100) data-[state=open]:text-action-primary'
              )}
              value={skill.title}
            >
              <SkillsAccordionTrigger
                icon={<Icon className='size-10 shrink-0 text-action-primary' />}
              >
                <Typography as='span' variant='title-lg'>
                  <IntlText path={skill.title} />
                </Typography>
              </SkillsAccordionTrigger>
              <SkillsAccordionContent>
                <IntlText path={skill.description} />
              </SkillsAccordionContent>
            </SkillsAccordionItem>
          );
        })}
      </SkillsAccordion>

      <div className='z-10 hidden items-center justify-center overflow-hidden lg:flex'>
        <SkillPreview skill={selectedSkillData} />
      </div>

      <SkillsAccordion
        className='z-10 flex flex-col gap-4 lg:hidden'
        type='single'
        value={selectedSkillData.title}
        onValueChange={onSkillChange}
      >
        {SKILLS.map((skill) => (
          <SkillsAccordionItem
            key={skill.title}
            className={cn(
              'rounded-32 border-0 bg-secondary p-6',
              'data-[state=open]:bg-(--color-olive-100) data-[state=open]:text-action-primary'
            )}
            value={skill.title}
          >
            <SkillsAccordionTrigger>
              <Typography as='span' variant='title-md'>
                <IntlText path={skill.title} />
              </Typography>
            </SkillsAccordionTrigger>
            <SkillsAccordionContent className='flex flex-col gap-6'>
              <SkillPreview
                className='mt-6 bg-background p-6 sm:p-8'
                contentClassName='min-h-48'
                progressClassName='right-4 bottom-4 size-6'
                progressDotClassName='size-5'
                skill={skill}
                withProgress={selectedSkillData.title === skill.title}
              />
              <Typography as='span' variant='body-sm'>
                <IntlText path={skill.description} />
              </Typography>
            </SkillsAccordionContent>
          </SkillsAccordionItem>
        ))}
      </SkillsAccordion>
    </motion.section>
  );
};
