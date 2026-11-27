'use client';

import {
  ArrowRightIcon,
  BookOpenIcon,
  LayersIcon,
  Loader2Icon,
  LoaderIcon,
  PackageIcon as OutlinePackageIcon
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import type { tasksSource } from '@/lib/source';

import {
  GithubIcon,
  MockConfigIcon,
  MotorScooterIcon,
  PackageIcon,
  PizzaIcon,
  PopcornIcon,
  ReactuseIcon,
  VideoGameIcon
} from '@/components/icons';
import {
  IconButton,
  NavigationMenu,
  NavigationMenuAction,
  NavigationMenuCard,
  NavigationMenuCardDescription,
  NavigationMenuCardIcon,
  NavigationMenuCardTitle,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui';
import { LINKS } from '@/constants';
import { IntlText } from '@/intl';

import { Search } from '../Search/Search';

interface DesktopHeaderProps {
  tree: typeof tasksSource.pageTree.children;
}

const ThemeButton = dynamic(
  () => import('../ThemeButton/ThemeButton').then((module) => module.ThemeButton),
  {
    ssr: false,
    loading: () => (
      <IconButton
        rounded
        className='size-10 rounded-full bg-muted text-foreground hover:bg-secondary'
        variant='ghost'
      >
        <Loader2Icon className='animate-spin' />
      </IconButton>
    )
  }
);

export const DesktopHeader = ({ tree }: DesktopHeaderProps) => {
  const intl = useIntl();

  return (
    <header className='relative z-40 hidden w-full bg-background text-foreground min-[861px]:block'>
      <div className='relative z-3 mx-auto flex h-22 max-w-7xl items-center gap-6 px-9 py-3'>
        <Link
          className='mr-4 font-pixelify-sans text-[32px]/10 font-bold tracking-wide text-foreground'
          href='/'
        >
          jb
        </Link>

        <NavigationMenu className='flex-none'>
          <NavigationMenuList className='gap-0.5'>
            <NavigationMenuItem value='tasks'>
              <NavigationMenuTrigger className='text-foreground hover:bg-muted'>
                <IntlText path='navigation.tasks' />
              </NavigationMenuTrigger>
              <NavigationMenuContent className='w-[340px]'>
                <div className='px-2 pt-2 pb-1 text-[12px]/4 tracking-wide text-muted-fg'>
                  <IntlText path='navigation.tasks' />
                </div>
                <NavigationMenuCard
                  className='opacity-50 hover:bg-transparent'
                  render={<button disabled aria-disabled='true' type='button' />}
                >
                  <NavigationMenuCardIcon>
                    <VideoGameIcon aria-hidden='true' className='size-6' />
                  </NavigationMenuCardIcon>
                  <span className='flex min-w-0 flex-col'>
                    <NavigationMenuCardTitle>
                      <IntlText path='header.tasks.game.title' />
                    </NavigationMenuCardTitle>
                    <NavigationMenuCardDescription>
                      <IntlText path='header.tasks.game.description' />
                    </NavigationMenuCardDescription>
                  </span>
                </NavigationMenuCard>
                <NavigationMenuCard
                  render={<NavigationMenuLink render={<Link href='/tasks/pizza' />} />}
                >
                  <NavigationMenuCardIcon>
                    <PizzaIcon aria-hidden='true' className='size-6' />
                  </NavigationMenuCardIcon>
                  <span className='flex min-w-0 flex-col'>
                    <NavigationMenuCardTitle>
                      <IntlText path='header.tasks.pizza.title' />
                    </NavigationMenuCardTitle>
                    <NavigationMenuCardDescription>
                      <IntlText path='header.tasks.pizza.description' />
                    </NavigationMenuCardDescription>
                  </span>
                </NavigationMenuCard>
                <NavigationMenuCard
                  render={<NavigationMenuLink render={<Link href='/tasks/cars' />} />}
                >
                  <NavigationMenuCardIcon>
                    <MotorScooterIcon aria-hidden='true' className='size-6' />
                  </NavigationMenuCardIcon>
                  <span className='flex min-w-0 flex-col'>
                    <NavigationMenuCardTitle>
                      <IntlText path='header.tasks.cars.title' />
                    </NavigationMenuCardTitle>
                    <NavigationMenuCardDescription>
                      <IntlText path='header.tasks.cars.description' />
                    </NavigationMenuCardDescription>
                  </span>
                </NavigationMenuCard>
                <NavigationMenuCard
                  render={<NavigationMenuLink render={<Link href='/tasks/cinema' />} />}
                >
                  <NavigationMenuCardIcon>
                    <PopcornIcon aria-hidden='true' className='size-6' />
                  </NavigationMenuCardIcon>
                  <span className='flex min-w-0 flex-col'>
                    <NavigationMenuCardTitle>
                      <IntlText path='header.tasks.cinema.title' />
                    </NavigationMenuCardTitle>
                    <NavigationMenuCardDescription>
                      <IntlText path='header.tasks.cinema.description' />
                    </NavigationMenuCardDescription>
                  </span>
                </NavigationMenuCard>
                <NavigationMenuCard
                  render={<NavigationMenuLink render={<Link href='/tasks/delivery' />} />}
                >
                  <NavigationMenuCardIcon>
                    <PackageIcon aria-hidden='true' className='size-6' />
                  </NavigationMenuCardIcon>
                  <span className='flex min-w-0 flex-col'>
                    <NavigationMenuCardTitle>
                      <IntlText path='header.tasks.delivery.title' />
                    </NavigationMenuCardTitle>
                    <NavigationMenuCardDescription>
                      <IntlText path='header.tasks.delivery.description' />
                    </NavigationMenuCardDescription>
                  </span>
                </NavigationMenuCard>
                <div className='my-1 h-px bg-border-soft' />
                <NavigationMenuAction
                  render={<NavigationMenuLink render={<Link href='/tasks' />} />}
                >
                  <IntlText path='button.allTasks' />
                  <ArrowRightIcon size={16} />
                </NavigationMenuAction>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem value='docs'>
              <NavigationMenuTrigger className='text-foreground hover:bg-muted'>
                <IntlText path='navigation.docs' />
              </NavigationMenuTrigger>
              <NavigationMenuContent className='w-[320px]'>
                <NavigationMenuCard
                  className='opacity-50 hover:bg-transparent'
                  render={<button disabled aria-disabled='true' type='button' />}
                >
                  <NavigationMenuCardIcon>
                    <LoaderIcon aria-hidden='true' className='size-4.5' />
                  </NavigationMenuCardIcon>
                  <span className='flex min-w-0 flex-col'>
                    <NavigationMenuCardTitle>
                      <IntlText path='header.docs.skills.title' />
                    </NavigationMenuCardTitle>
                    <NavigationMenuCardDescription>
                      <IntlText path='header.docs.skills.description' />
                    </NavigationMenuCardDescription>
                  </span>
                </NavigationMenuCard>
                <NavigationMenuCard
                  className='opacity-50 hover:bg-transparent'
                  render={<button disabled aria-disabled='true' type='button' />}
                >
                  <NavigationMenuCardIcon>
                    <LayersIcon aria-hidden='true' className='size-4.5' />
                  </NavigationMenuCardIcon>
                  <span className='flex min-w-0 flex-col'>
                    <NavigationMenuCardTitle>
                      <IntlText path='header.docs.architecture.title' />
                    </NavigationMenuCardTitle>
                    <NavigationMenuCardDescription>
                      <IntlText path='header.docs.architecture.description' />
                    </NavigationMenuCardDescription>
                  </span>
                </NavigationMenuCard>
                <NavigationMenuCard
                  render={<NavigationMenuLink render={<Link href='/guides' />} />}
                >
                  <NavigationMenuCardIcon>
                    <BookOpenIcon aria-hidden='true' className='size-4.5' />
                  </NavigationMenuCardIcon>
                  <span className='flex min-w-0 flex-col'>
                    <NavigationMenuCardTitle>
                      <IntlText path='navigation.guides' />
                    </NavigationMenuCardTitle>
                    <NavigationMenuCardDescription>
                      <IntlText path='header.docs.guides.description' />
                    </NavigationMenuCardDescription>
                  </span>
                </NavigationMenuCard>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className='h-10 rounded-full px-6 text-[14px] font-medium tracking-wide text-foreground hover:bg-muted'
                render={<Link href='/qa' />}
              >
                <IntlText path='navigation.qa' />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem value='oss'>
              <NavigationMenuTrigger className='text-foreground hover:bg-muted'>
                <IntlText path='navigation.openSource' />
              </NavigationMenuTrigger>
              <NavigationMenuContent className='w-[580px]'>
                <div className='grid grid-cols-[220px_1fr] gap-2'>
                  <NavigationMenuLink
                    render={
                      <Link
                        href={LINKS.OPENSOURCE.REACTUSE}
                        rel='noopener noreferrer'
                        target='_blank'
                      />
                    }
                    className='flex cursor-pointer flex-col items-start gap-4 rounded-20 bg-secondary p-6 text-foreground transition-[background-color] duration-150 ease-[ease] hover:bg-secondary-emphasis-hover hover:text-foreground focus-visible:bg-secondary-emphasis-hover focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground focus-visible:outline-solid'
                  >
                    <span className='flex flex-col items-start gap-2'>
                      <span className='flex size-12 shrink-0 items-center justify-center rounded-14 bg-background'>
                        <ReactuseIcon aria-hidden='true' className='h-6 w-auto' />
                      </span>
                      <strong className='text-[20px] font-bold'>
                        <IntlText path='header.reactuse.title' />
                      </strong>
                    </span>
                    <span className='text-[16px]/6 text-muted-fg'>
                      <IntlText path='header.reactuse.description' />
                    </span>
                  </NavigationMenuLink>
                  <div>
                    <div className='px-3 pt-2 pb-1 text-[14px]/5 tracking-wide text-muted-fg'>
                      <IntlText path='header.oss.more' />
                    </div>
                    <NavigationMenuCard
                      render={
                        <NavigationMenuLink
                          render={
                            <Link
                              href={LINKS.OPENSOURCE.MOCK_CONFIG}
                              rel='noopener noreferrer'
                              target='_blank'
                            />
                          }
                        />
                      }
                      className='gap-4 p-3'
                    >
                      <NavigationMenuCardIcon className='size-12'>
                        <MockConfigIcon aria-hidden='true' className='size-6' />
                      </NavigationMenuCardIcon>
                      <span className='flex min-w-0 flex-col'>
                        <NavigationMenuCardTitle className='text-[16px]/6'>
                          <IntlText path='header.oss.mock.title' />
                        </NavigationMenuCardTitle>
                        <NavigationMenuCardDescription className='text-[14px]/5'>
                          <IntlText path='header.oss.mock.description' />
                        </NavigationMenuCardDescription>
                      </span>
                    </NavigationMenuCard>
                    <NavigationMenuCard
                      render={
                        <NavigationMenuLink
                          render={
                            <Link
                              href={LINKS.OPENSOURCE.APICRAFT}
                              rel='noopener noreferrer'
                              target='_blank'
                            />
                          }
                        />
                      }
                      className='gap-4 p-3'
                    >
                      <NavigationMenuCardIcon className='size-12'>
                        <OutlinePackageIcon aria-hidden='true' className='size-4.5' />
                      </NavigationMenuCardIcon>
                      <span className='flex min-w-0 flex-col'>
                        <NavigationMenuCardTitle className='text-[16px]/6'>
                          <IntlText path='header.oss.apicraft.title' />
                        </NavigationMenuCardTitle>
                        <NavigationMenuCardDescription className='text-[14px]/5'>
                          <IntlText path='header.oss.apicraft.description' />
                        </NavigationMenuCardDescription>
                      </span>
                    </NavigationMenuCard>
                    <NavigationMenuCard
                      render={
                        <NavigationMenuLink
                          render={
                            <Link
                              href={LINKS.OPENSOURCE.FETCHES}
                              rel='noopener noreferrer'
                              target='_blank'
                            />
                          }
                        />
                      }
                      className='gap-4 p-3'
                    >
                      <NavigationMenuCardIcon className='size-12'>
                        <OutlinePackageIcon aria-hidden='true' className='size-4.5' />
                      </NavigationMenuCardIcon>
                      <span className='flex min-w-0 flex-col'>
                        <NavigationMenuCardTitle className='text-[16px]/6'>
                          <IntlText path='header.oss.fetches.title' />
                        </NavigationMenuCardTitle>
                        <NavigationMenuCardDescription className='text-[14px]/5'>
                          <IntlText path='header.oss.fetches.description' />
                        </NavigationMenuCardDescription>
                      </span>
                    </NavigationMenuCard>
                    <div className='my-1 h-px bg-border-soft' />
                    <NavigationMenuAction
                      render={
                        <NavigationMenuLink
                          render={
                            <Link
                              href={LINKS.SOCIAL.GITHUB}
                              rel='noopener noreferrer'
                              target='_blank'
                            />
                          }
                        />
                      }
                      className='p-3 text-[16px]'
                    >
                      <IntlText path='button.allProjectsOnGitHub' />
                      <ArrowRightIcon size={16} />
                    </NavigationMenuAction>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className='flex flex-1 items-center justify-end gap-2'>
          <Search tree={tree} variant='desktop' />
          <IconButton asChild rounded className='bg-muted hover:bg-secondary' variant='ghost'>
            <Link
              aria-label={intl.formatMessage({ id: 'label.github' })}
              href={LINKS.SOCIAL.GITHUB}
              rel='noopener noreferrer'
              target='_blank'
            >
              <GithubIcon className='size-[18px]' />
            </Link>
          </IconButton>
          <ThemeButton
            aria-label={intl.formatMessage({ id: 'label.themeChange' })}
            className='size-10 rounded-full bg-muted text-foreground hover:bg-secondary'
          />
        </div>
      </div>
    </header>
  );
};
