'use client';

import type { MouseEvent } from 'react';

import { Loader2Icon, MenuIcon, MoonIcon, XIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import { useTheme } from '@/app/_contexts/theme';
import { GithubIcon } from '@/components/icons';
import {
  Button,
  IconButton,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Switch,
  Typography
} from '@/components/ui';
import { IntlText } from '@/intl';

const ThemeButton = dynamic(
  () => import('./components/ThemeButton/ThemeButton').then((module) => module.ThemeButton),
  {
    ssr: false,
    loading: () => (
      <IconButton rounded variant='ghost'>
        <Loader2Icon className='animate-spin' />
      </IconButton>
    )
  }
);

const NAVIGATION = [
  { href: '/tasks', label: 'navigation.tasks' },
  { href: '/guides', label: 'navigation.guides' }
] as const;

export const Header = () => {
  const intl = useIntl();

  const theme = useTheme();

  const onThemeClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const x = event.clientX;
    const y = event.clientY;
    theme.animate(x, y, theme.value === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className='mt-3 w-full sm:mt-6'>
      <div className='content-container flex h-10 items-center justify-between sm:h-16'>
        <Link className='font-pixelify-sans text-[32px]/10 font-bold tracking-[5%]' href='/'>
          jb
        </Link>

        <div className='hidden sm:flex'>
          {NAVIGATION.map((navigation) => (
            <Button asChild key={navigation.href} variant='ghost'>
              <Link href={navigation.href}>
                <IntlText path={navigation.label} />
              </Link>
            </Button>
          ))}
        </div>

        <div className='flex items-center gap-6'>
          <div className='hidden items-center gap-2 sm:flex'>
            <IconButton asChild rounded variant='ghost'>
              <Link
                href='https://github.com/siberiacancode'
                rel='noopener noreferrer'
                target='_blank'
              >
                <GithubIcon aria-label={intl.formatMessage({ id: 'header.github.alt' })} />
              </Link>
            </IconButton>

            <ThemeButton />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <IconButton rounded className='sm:hidden'>
                <MenuIcon className='size-4' />
              </IconButton>
            </SheetTrigger>
            <SheetContent showCloseButton={false}>
              <SheetHeader className='mt-3 flex h-10 flex-row items-center justify-between'>
                <SheetTitle className='sr-only'>
                  <IntlText path='navigationMenu.title' />
                </SheetTitle>
                <SheetDescription className='sr-only'>
                  <IntlText path='navigationMenu.description' />
                </SheetDescription>

                <Link
                  className='font-pixelify-sans text-[32px]/10 font-bold tracking-[5%]'
                  href='/'
                >
                  jb
                </Link>

                <div className='flex items-center gap-2'>
                  <SheetClose asChild>
                    <IconButton className='rounded-full'>
                      <XIcon className='size-4' />
                    </IconButton>
                  </SheetClose>
                </div>
              </SheetHeader>

              <div className='flex flex-col gap-3'>
                {NAVIGATION.map((navigation) => (
                  <SheetClose asChild key={navigation.href}>
                    <Typography asChild className='px-4 py-2 uppercase' variant='heading-md'>
                      <Link href={navigation.href}>
                        <IntlText path={navigation.label} />
                      </Link>
                    </Typography>
                  </SheetClose>
                ))}

                <Separator />

                <SheetClose asChild>
                  <Typography
                    as='a'
                    className='inline-flex items-center gap-2 px-4 py-2'
                    href='https://github.com/siberiacancode'
                    rel='noopener noreferrer'
                    target='_blank'
                    variant='body-lg'
                  >
                    <GithubIcon
                      aria-label={intl.formatMessage({ id: 'header.github.alt' })}
                      className='size-6'
                    />
                    Github
                  </Typography>
                </SheetClose>

                <div className='flex items-center justify-between'>
                  <Typography
                    as='span'
                    className='inline-flex items-center gap-2 px-4 py-2'
                    variant='body-lg'
                  >
                    <MoonIcon className='size-6' />
                    <IntlText path='navigationMenu.darkTheme' />
                  </Typography>

                  <Switch checked={theme.value === 'dark'} onClick={onThemeClick} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
          {/* <div className='flex items-center gap-2'>
             <Button disabled data-icon='inline-end'>
              <IntlText path='button.loginVia' />
              <TelegramIcon />
            </Button> 
          </div> */}
        </div>
      </div>
    </header>
  );
};
