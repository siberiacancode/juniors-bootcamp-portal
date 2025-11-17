'use client';

import Link from 'next/link';
import { useIntl } from 'react-intl';

import { GithubIcon, TelegramIcon, TwitchIcon, YoutubeIcon } from '@/components/icons';
import { IntlText } from '@/components/intl';
import { Button } from '@/components/ui';

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
    <footer className='bg-background border-border z-0 my-20 border-t'>
      <div className='mx-auto max-w-[var(--max-width)] px-4 py-16'>
        <div className='flex flex-col justify-between gap-4 md:flex-row'>
          <div className='space-y-4'>
            <Link href='/' className='font-pixelify-sans flex items-center text-2xl font-bold'>
              juniors bootcamp
              {/* <Logo alt={intl.formatMessage({ id: 'footer.logo.alt' })} className='w-10' /> */}
            </Link>

            <Button asChild>
              <Link href='https://t.me/siberiacancode' rel='noopener noreferrer' target='_blank'>
                contact us
              </Link>
            </Button>
            <p className='text-muted-foreground text-sm'>
              <IntlText path='footer.description' />
            </p>
            <div className='flex gap-3'>
              {SOCIALS.map((social) => (
                <Link
                  href={social.href}
                  key={social.href}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <social.Icon
                    aria-label={intl.formatMessage({ id: social.alt })}
                    className='size-5'
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className='flex flex-col justify-between gap-4 md:flex-row md:gap-20'>
            <div className='space-y-4'>
              <h3 className='text-sm font-semibold'>
                <IntlText path='footer.directions.title' />
              </h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    href='/platform/road-map'
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    <IntlText path='footer.directions.road-map' />
                  </Link>
                </li>
                {NAVIGATION.map((navigation) => (
                  <li key={navigation.href}>
                    <Link
                      href={navigation.href}
                      className='text-muted-foreground hover:text-foreground transition-colors'
                    >
                      <IntlText path={navigation.label as MessagePath} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='space-y-4'>
              <h3 className='text-sm font-semibold'>
                <IntlText path='footer.opensource.title' />
              </h3>
              <ul className='space-y-2 text-sm'>
                {OPENSOURCE.map((opensource) => (
                  <li key={opensource.href}>
                    <Link
                      href={opensource.href}
                      className='text-muted-foreground hover:text-foreground transition-colors'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      {opensource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className='text-muted-foreground mt-12 w-full text-center text-sm'>
          Built by{' '}
          <Link
            href='https://github.com/siberiacancode'
            className='underline'
            rel='noopener noreferrer'
            target='_blank'
          >
            siberiacancode
          </Link>
          . The source code is available on{' '}
          <Link
            href='https://github.com/siberiacancode/juniors-bootcamp-portal'
            className='underline'
            rel='noopener noreferrer'
            target='_blank'
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};
