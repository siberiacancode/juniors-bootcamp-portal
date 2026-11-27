'use client';

import { useDisclosure } from '@siberiacancode/reactuse';
import {
  ArrowRightIcon,
  BookOpenIcon,
  CodeXmlIcon,
  LayersIcon,
  Loader2Icon,
  LoaderIcon,
  MenuIcon,
  XIcon
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useIntl } from 'react-intl';

// import type { tasksSource } from '@/lib/source';
import {
  MotorScooterIcon,
  PackageIcon,
  PizzaIcon,
  PopcornIcon,
  VideoGameIcon
} from '@/components/icons';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  IconButton,
  NavigationMenuAction,
  NavigationMenuCard,
  NavigationMenuCardDescription,
  NavigationMenuCardIcon,
  NavigationMenuCardTitle
} from '@/components/ui';
import { LINKS } from '@/constants';
import { IntlText } from '@/intl';

// import { Search } from '../Search/Search';

// interface MobileHeaderProps {
//   tree: typeof tasksSource.pageTree.children;
// }

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

export const MobileHeader = () => {
  const intl = useIntl();
  const menu = useDisclosure();

  return (
    <header className='relative z-40 w-full bg-background text-foreground min-[861px]:hidden'>
      <Dialog disablePointerDismissal open={menu.opened} onOpenChange={menu.toggle}>
        <div className='mx-auto flex h-18 items-center gap-2 px-4'>
          <Link
            className='mr-auto font-pixelify-sans text-[28px]/10 font-bold tracking-wide'
            href='/'
          >
            jb
          </Link>
          {/* <Search tree={tree} variant='mobile' /> */}
          <ThemeButton
            aria-label={intl.formatMessage({ id: 'label.themeChange' })}
            className='size-10 rounded-full bg-muted text-foreground hover:bg-secondary'
          />
          <DialogTrigger
            aria-expanded={menu.opened}
            aria-label={intl.formatMessage({ id: 'label.menuOpen' })}
            className='flex size-10 items-center justify-center rounded-full bg-muted text-foreground'
          >
            <MenuIcon size={18} />
          </DialogTrigger>
        </div>
        <DialogContent
          className='inset-0 top-0 left-0 flex h-dvh max-w-none translate-0 flex-col gap-0 overflow-hidden rounded-none border-0 p-0 ring-0 sm:max-w-none'
          showCloseButton={false}
        >
          <DialogTitle className='sr-only'>
            <IntlText path='navigationMenu.title' />
          </DialogTitle>
          <DialogDescription className='sr-only'>
            <IntlText path='navigationMenu.description' />
          </DialogDescription>
          <div className='flex h-18 shrink-0 items-center gap-2 px-4'>
            <Link
              className='mr-auto font-pixelify-sans text-[28px]/10 font-bold tracking-wide'
              href='/'
              onClick={menu.close}
            >
              jb
            </Link>
            <ThemeButton
              aria-label={intl.formatMessage({ id: 'label.themeChange' })}
              className='size-10 rounded-full bg-muted text-foreground hover:bg-secondary'
            />
            <DialogClose
              aria-label={intl.formatMessage({ id: 'label.menuClose' })}
              className='flex size-10 items-center justify-center rounded-full bg-muted text-foreground'
            >
              <XIcon size={18} />
            </DialogClose>
          </div>
          <nav
            aria-label={intl.formatMessage({ id: 'navigationMenu.title' })}
            className='flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 py-3'
          >
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
            <NavigationMenuCard render={<Link href='/tasks/pizza' onClick={menu.close} />}>
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
            <NavigationMenuCard render={<Link href='/tasks/cars' onClick={menu.close} />}>
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
            <NavigationMenuCard render={<Link href='/tasks/cinema' onClick={menu.close} />}>
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
            <NavigationMenuCard render={<Link href='/tasks/delivery' onClick={menu.close} />}>
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
            <NavigationMenuCard render={<Link href='/projects' onClick={menu.close} />}>
              <NavigationMenuCardIcon>
                <CodeXmlIcon aria-hidden='true' className='size-6' />
              </NavigationMenuCardIcon>
              <span className='flex min-w-0 flex-col'>
                <NavigationMenuCardTitle>
                  <IntlText path='header.tasks.projects.title' />
                </NavigationMenuCardTitle>
                <NavigationMenuCardDescription>
                  <IntlText path='header.tasks.projects.description' />
                </NavigationMenuCardDescription>
              </span>
            </NavigationMenuCard>
            <NavigationMenuAction render={<Link href='/tasks' onClick={menu.close} />}>
              <IntlText path='button.allTasks' />
              <ArrowRightIcon size={16} />
            </NavigationMenuAction>
            <div className='my-1 h-px bg-border-soft' />
            <div className='px-2 pt-2 pb-1 text-[12px]/4 tracking-wide text-muted-fg'>
              <IntlText path='navigation.docs' />
            </div>
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
            <NavigationMenuCard render={<Link href='/guides' onClick={menu.close} />}>
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
            <div className='my-1 h-px bg-border-soft' />
            <NavigationMenuAction render={<Link href='/qa' onClick={menu.close} />}>
              <IntlText path='navigation.qa' />
              <ArrowRightIcon size={16} />
            </NavigationMenuAction>
            <NavigationMenuAction
              render={
                <Link
                  href={LINKS.SOCIAL.GITHUB}
                  rel='noopener noreferrer'
                  target='_blank'
                  onClick={menu.close}
                />
              }
            >
              <IntlText path='navigation.openSource' />
              <ArrowRightIcon size={16} />
            </NavigationMenuAction>
          </nav>
        </DialogContent>
      </Dialog>
    </header>
  );
};
