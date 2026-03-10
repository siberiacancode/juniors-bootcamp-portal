'use client';

import Link from 'next/link';
import { useIntl } from 'react-intl';

import { GithubIcon, TelegramIcon, TwitchIcon, YoutubeIcon } from '@/components/icons';
import { IntlText } from '@/components/intl';
import { Button, IconButton } from '@/components/ui';

const PRODUCTS = [
  {
    href: '#1',
    label: ''
  },
  {
    href: '#2',
    label: ''
  },
  {
    href: '#3',
    label: ''
  }
] as const;

const SOCIALS = [
  {
    href: 'https://github.com/siberiacancode',
    Icon: GithubIcon,
    alt: 'footer.social.github.alt'
  },
  {
    href: 'https://t.me/siberiacancode',
    Icon: TelegramIcon,
    alt: 'footer.social.telegram.alt'
  },
  {
    href: 'https://www.twitch.tv/siberiacancode',
    Icon: TwitchIcon,
    alt: 'footer.social.twitch.alt'
  },
  {
    href: 'https://www.youtube.com/@siberiacancode',
    Icon: YoutubeIcon,
    alt: 'footer.social.youtube.alt'
  }
] as const;

const NAVIGATION = [
  {
    href: '/tasks',
    label: 'navigation.tasks'
  },
  {
    href: '/guides',
    label: 'navigation.guides'
  }
] as const;

const OPENSOURCE = [
  {
    href: 'https://siberiacancode.github.io/reactuse/',
    label: 'reactuse'
  },
  {
    href: 'https://www.npmjs.com/package/@siberiacancode/mock-config-server',
    label: 'mock-config'
  },
  {
    href: 'https://www.npmjs.com/package/@siberiacancode/apicraft',
    label: 'apicraft'
  },
  {
    href: 'https://www.npmjs.com/package/@siberiacancode/fetches',
    label: 'fetches'
  }
] as const;

export const Footer = () => {
  const intl = useIntl();

  return (
    <footer className='content-container mb-12 w-full space-y-6 sm:mb-16'>
      <div className='flex flex-col gap-6 rounded-2xl bg-muted px-4 py-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-10 sm:px-6 sm:py-10'>
        <span className='font-pixelify-sans text-3xl font-bold'>juniorsbootcamp</span>

        <div className='flex flex-col gap-4 sm:flex-row sm:gap-10'>
          {PRODUCTS.map((product) => (
            <span key={product.href} className='text-sm font-semibold'>
              Ссылка на продукт
            </span>
          ))}
        </div>
      </div>

      <div className='space-y-6 rounded-2xl bg-muted px-4 py-6 sm:space-y-10 sm:px-6 sm:py-10'>
        <div className='flex flex-col gap-6 sm:flex-row sm:gap-10'>
          <div className='flex flex-col gap-4'>
            <p className='font-normal'>
              <IntlText path='footer.description' />
            </p>

            <Button asChild className='sm:w-fit'>
              <Link href='https://t.me/siberiacancode' rel='noopener noreferrer' target='_blank'>
                <IntlText path='link.contact' />
              </Link>
            </Button>

            <div className='flex gap-6'>
              {SOCIALS.map((social) => (
                <IconButton asChild key={social.href} variant='ghost'>
                  <Link href={social.href} rel='noopener noreferrer' target='_blank'>
                    <social.Icon aria-label={intl.formatMessage({ id: social.alt })} />
                  </Link>
                </IconButton>
              ))}
            </div>
          </div>

          <div className='space-y-4'>
            <h3 className='font-bold'>
              <IntlText path='footer.directions.title' />
            </h3>
            <ul className='space-y-3 text-sm font-medium'>
              {NAVIGATION.map((navigation) => (
                <li key={navigation.href}>
                  <Link href={navigation.href}>
                    <IntlText path={navigation.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-4'>
            <h3 className='font-bold'>
              <IntlText path='footer.opensource.title' />
            </h3>
            <ul className='space-y-3 text-sm font-medium'>
              {OPENSOURCE.map((opensource) => (
                <li key={opensource.href}>
                  <Link href={opensource.href} rel='noopener noreferrer' target='_blank'>
                    {opensource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <p className='text-sm font-normal text-surface-foreground'>
            Built by{' '}
            <Link
              className='underline'
              href='https://github.com/siberiacancode'
              rel='noopener noreferrer'
              target='_blank'
            >
              siberiacancode
            </Link>
            . The source code is available on{' '}
            <Link
              className='underline'
              href='https://github.com/siberiacancode/juniors-bootcamp-portal'
              rel='noopener noreferrer'
              target='_blank'
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
