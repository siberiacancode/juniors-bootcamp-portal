'use client';

import { Loader2Icon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import { GithubIcon } from '@/components/icons';
import { IntlText } from '@/components/intl';
import {
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui';

const ThemeButton = dynamic(
  async () => import('./components/ThemeButton/ThemeButton').then((module) => module.ThemeButton),
  {
    ssr: false,
    loading: () => (
      <Button size='icon' variant='ghost'>
        <Loader2Icon className='size-4 animate-spin' />
      </Button>
    )
  }
);

const NAVIGATION = [
  { href: '/tasks', label: 'navigation.tasks' },
  { href: '/guides', label: 'navigation.guides' }
] as const;

export const Header = () => {
  const intl = useIntl();

  return (
    <header className='w-full'>
      <div
        className='
        mx-auto flex h-16 max-w-(--max-width) items-center justify-between px-4
      '
      >
        <div className='flex gap-4'>
          <Link
            className='
            flex items-center font-pixelify-sans text-2xl font-bold
          '
            href='/'
          >
            j.bootcamp
            {/* <Logo alt={intl.formatMessage({ id: 'header.logo.alt' })} className='w-10' /> */}
          </Link>

          <NavigationMenu
            className='
            max-w-none
            *:w-full
          '
          >
            <NavigationMenuList className='items-start gap-2'>
              {NAVIGATION.map((navigation, index) => (
                <NavigationMenuItem key={index} className='w-full'>
                  <NavigationMenuLink className='py-1.5' href={navigation.href}>
                    <IntlText path={navigation.label as MessagePath} />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className='flex items-center gap-1'>
          <Button asChild size='icon' variant='ghost'>
            <Link
              href='https://github.com/siberiacancode'
              rel='noopener noreferrer'
              target='_blank'
            >
              <GithubIcon aria-label={intl.formatMessage({ id: 'header.github.alt' })} />
            </Link>
          </Button>

          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
