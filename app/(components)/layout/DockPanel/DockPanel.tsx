'use client';

import { HouseIcon, MoonIcon, SunIcon } from 'lucide-react';
import Link from 'next/link';

import { SECTIONS } from '@/app/(constants)';
import { useTheme } from '@/app/(contexts)/theme';
import { GithubIcon } from '@/components/icons';
import {
  Button,
  buttonVariants,
  Dock,
  DockIcon,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui';
import { cn } from '@/lib/utils';

export const DockPanel = () => {
  const theme = useTheme();

  const onThemeClick = () => theme.set(theme.value === 'dark' ? 'light' : 'dark');

  return (
    <TooltipProvider>
      <Dock direction='middle'>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger>
              <Button asChild className='size-12 rounded-full' size='icon' variant='ghost'>
                <Link aria-label='main' href='/'>
                  <HouseIcon className='size-4' />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>main</TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator className='h-full' orientation='vertical' />
        {SECTIONS.filter(({ disabled }) => !disabled).map(({ href, Icon }) => (
          <DockIcon key={href}>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'size-12 rounded-full'
                  )}
                  aria-label={href.slice(1)}
                  href={href}
                >
                  <Icon className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{href.split('/').at(-1)}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator className='h-full py-2' orientation='vertical' />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger>
              <Button asChild className='size-12 rounded-full' size='icon' variant='ghost'>
                <Link
                  href='https://github.com/siberiacancode'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <GithubIcon aria-label='github' />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>github</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger>
              <Button
                asChild
                className='size-12 rounded-full'
                size='icon'
                variant='ghost'
                onClick={onThemeClick}
              >
                <span>{theme.value === 'dark' ? <SunIcon /> : <MoonIcon />}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </TooltipProvider>
  );
};
