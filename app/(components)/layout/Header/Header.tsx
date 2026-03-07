'use client';

import { Github, Loader2Icon, MenuIcon, XIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { VisuallyHidden } from 'radix-ui';
import { useIntl } from 'react-intl';

import { IntlText } from '@/components/intl';
import {
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui';

const ThemeButton = dynamic(
  () => import('./components/ThemeButton/ThemeButton').then((module) => module.ThemeButton),
  {
    ssr: false,
    loading: () => (
      <Button iconOnly variant='ghost'>
        <Loader2Icon className='animate-spin' />
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
      <div className='mx-auto flex h-16 max-w-(--max-width) items-center justify-between px-6'>
        <Link className='flex items-center font-pixelify-sans text-3xl font-bold' href='/'>
          jb
        </Link>

        <NavigationMenu className='hidden sm:flex'>
          <NavigationMenuList>
            {NAVIGATION.map((navigation) => (
              <NavigationMenuItem key={navigation.href}>
                <Button asChild variant='ghost'>
                  <NavigationMenuLink href={navigation.href}>
                    <IntlText path={navigation.label} />
                  </NavigationMenuLink>
                </Button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex items-center gap-6'>
          <div className='hidden items-center gap-2 sm:flex'>
            <Button asChild iconOnly variant='ghost'>
              <Link
                href='https://github.com/siberiacancode'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Github aria-label={intl.formatMessage({ id: 'header.github.alt' })} />
              </Link>
            </Button>

            <ThemeButton />
          </div>

          <div className='flex items-center gap-2'>
            {/* <Button data-icon='inline-end'>
              <IntlText path='button.login-via' />
              <TelegramIcon />
            </Button> */}

            <Sheet>
              <SheetTrigger asChild>
                <Button iconOnly className='rounded-full sm:hidden'>
                  <MenuIcon className='size-4' />
                </Button>
              </SheetTrigger>
              <SheetContent className='w-full' showCloseButton={false}>
                <SheetHeader className='flex h-16 flex-row items-center justify-between px-6'>
                  <VisuallyHidden.Root asChild>
                    <SheetTitle>
                      <IntlText path='sheet.menu.title' />
                    </SheetTitle>
                  </VisuallyHidden.Root>

                  <VisuallyHidden.Root asChild>
                    <SheetDescription>
                      <IntlText path='sheet.menu.description' />
                    </SheetDescription>
                  </VisuallyHidden.Root>

                  <Link
                    className='flex items-center font-pixelify-sans text-3xl font-bold'
                    href='/'
                  >
                    jb
                  </Link>

                  <div className='flex items-center gap-2'>
                    <SheetClose asChild>
                      <Button iconOnly className='rounded-full'>
                        <XIcon className='size-4' />
                      </Button>
                    </SheetClose>
                  </div>
                </SheetHeader>

                <div className='flex flex-col gap-3'>
                  {NAVIGATION.map((navigation) => (
                    <SheetClose asChild key={navigation.href}>
                      <Link
                        className='px-4 py-2 text-5xl font-bold text-primary uppercase'
                        href={navigation.href}
                      >
                        <IntlText path={navigation.label} />
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
