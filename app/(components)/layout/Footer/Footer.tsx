'use client';

import Link from 'next/link';
import { useIntl } from 'react-intl';

import { GithubIcon, TelegramIcon, TwitchIcon, YoutubeIcon } from '@/components/icons';
import { Button, IconButton, Typography } from '@/components/ui';
import { IntlText } from '@/intl';

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
    <footer className='content-container mb-12 flex w-full flex-col gap-6 sm:mb-16'>
      <div className='flex flex-col gap-6 rounded-24 bg-secondary px-4 py-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-10 sm:px-6 sm:py-10'>
        <span className='font-pixelify-sans text-[32px]/10 font-bold tracking-[5%]'>
          juniorsbootcamp
        </span>

        <div className='flex flex-col gap-4 sm:flex-row sm:gap-10'>
          {PRODUCTS.map((product) => (
            <Typography key={product.href} as='span' variant='body-md'>
              Ссылка на продукт
            </Typography>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-6 rounded-24 bg-secondary px-4 py-6 sm:gap-10 sm:px-6 sm:py-10'>
        <div className='flex flex-col gap-6 sm:flex-row sm:gap-10'>
          <div className='flex flex-col gap-4'>
            <Typography as='p' variant='body-md'>
              <IntlText path='footer.description' />
            </Typography>

            <Button asChild className='sm:w-fit'>
              <Link href='https://t.me/siberiacancode' rel='noopener noreferrer' target='_blank'>
                <IntlText path='link.contact' />
              </Link>
            </Button>

            <div className='flex gap-2'>
              {SOCIALS.map((social) => (
                <IconButton asChild key={social.href} variant='ghost'>
                  <Link href={social.href} rel='noopener noreferrer' target='_blank'>
                    <social.Icon
                      aria-label={intl.formatMessage({ id: social.alt })}
                      className='size-6'
                    />
                  </Link>
                </IconButton>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <Typography variant='body-md'>
              <IntlText path='footer.directions.title' />
            </Typography>

            <ul className='flex flex-col gap-3'>
              {NAVIGATION.map((navigation) => (
                <li key={navigation.href}>
                  <Typography asChild variant='link'>
                    <Link href={navigation.href}>
                      <IntlText path={navigation.label} />
                    </Link>
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col gap-4'>
            <Typography variant='body-md'>
              <IntlText path='footer.opensource.title' />
            </Typography>

            <ul className='flex flex-col gap-3'>
              {OPENSOURCE.map((opensource) => (
                <li key={opensource.href}>
                  <Typography
                    as='a'
                    href={opensource.href}
                    rel='noopener noreferrer'
                    target='_blank'
                    variant='link'
                  >
                    {opensource.label}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <Typography as='p' className='text-muted-fg' variant='caption'>
            Built by{' '}
            <Typography
              as='a'
              href='https://github.com/siberiacancode'
              rel='noopener noreferrer'
              target='_blank'
              variant='link'
            >
              siberiacancode
            </Typography>
            . The source code is available on{' '}
            <Typography
              as='a'
              href='https://github.com/siberiacancode/juniors-bootcamp-portal'
              rel='noopener noreferrer'
              target='_blank'
              variant='link'
            >
              GitHub
            </Typography>
            .
          </Typography>
        </div>
      </div>
    </footer>
  );
};
