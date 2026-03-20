'use client';

import type { MouseEvent } from 'react';

import { Github, Loader2Icon, MenuIcon, MoonIcon, XIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import { useTheme } from '@/app/(contexts)/theme';
import { IntlText } from '@/components/intl';
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
  Switch
} from '@/components/ui';

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
        <Link className='flex items-center font-pixelify-sans text-3xl font-bold' href='/'>
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
                <Github aria-label={intl.formatMessage({ id: 'header.github.alt' })} />
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

                <Link className='flex items-center font-pixelify-sans text-3xl font-bold' href='/'>
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

              <div className='flex flex-col gap-3 uppercase'>
                {NAVIGATION.map((navigation) => (
                  <SheetClose asChild key={navigation.href}>
                    <Link
                      className='px-4 py-2 text-5xl font-bold text-primary'
                      href={navigation.href}
                    >
                      <IntlText path={navigation.label} />
                    </Link>
                  </SheetClose>
                ))}

                <Separator />

                <SheetClose asChild>
                  <Link
                    className='inline-flex items-center gap-2 px-4 py-2 text-2xl font-bold'
                    href='https://github.com/siberiacancode'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <Github aria-label={intl.formatMessage({ id: 'header.github.alt' })} />
                    GITHUB
                  </Link>
                </SheetClose>

                <div className='flex items-center justify-between'>
                  <span className='inline-flex items-center gap-2 px-4 py-2 text-2xl font-bold'>
                    <MoonIcon />
                    <IntlText path='navigationMenu.darkTheme' />
                  </span>

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
