import Link from 'next/link';

import { Button, IconButton, Typography } from '@/components/ui';
import { LINKS } from '@/constants';
import { IntlText } from '@/intl';
import { intl } from '@/intl/server';

import { NAVIGATION, OPENSOURCE, SOCIALS } from './constants';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => (
  <footer className='mt-16 w-full bg-background pt-8 pb-10 sm:mt-24 sm:pt-16 sm:pb-12'>
    <div className='content-container'>
      <div className='grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.65fr)_minmax(0,1fr)] lg:gap-16'>
        <div className='flex flex-col items-start'>
          <Link
            className='font-pixelify-sans text-[20px]/7 font-bold tracking-wide focus-visible:rounded-4 focus-visible:outline-2 focus-visible:outline-ring sm:text-[32px]/10'
            href='/'
          >
            juniorsbootcamp
          </Link>

          <Typography
            as='p'
            className='mt-5 max-w-100 text-[14px]/5 sm:mt-6 sm:text-[18px]/7'
            variant='body-md'
          >
            <IntlText path='footer.description' />
          </Typography>

          <Button asChild className='mt-5 sm:mt-6' size='sm'>
            <a href={LINKS.SOCIAL.TELEGRAM} rel='noopener noreferrer' target='_blank'>
              <IntlText path='link.contact' />
            </a>
          </Button>

          <ul
            aria-label={intl.formatMessage({ id: 'footer.social.title' })}
            className='mt-6 flex gap-2 sm:mt-7'
          >
            {SOCIALS.map((social) => (
              <li key={social.href}>
                <IconButton asChild size='sm' variant='ghost'>
                  <a
                    aria-label={intl.formatMessage({ id: social.alt })}
                    href={social.href}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <social.Icon aria-hidden='true' className='size-5' />
                  </a>
                </IconButton>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label={intl.formatMessage({ id: 'footer.directions.title' })}>
          <Typography as='h2' className='text-[14px]/5 sm:text-[18px]/7' variant='title-md'>
            <IntlText path='footer.directions.title' />
          </Typography>
          <ul className='mt-4 flex flex-col items-start gap-3 sm:mt-5 sm:gap-4'>
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
        </nav>

        <nav aria-label={intl.formatMessage({ id: 'footer.opensource.title' })}>
          <Typography as='h2' className='text-[14px]/5 sm:text-[18px]/7' variant='title-md'>
            <IntlText path='footer.opensource.title' />
          </Typography>
          <ul className='mt-4 flex flex-col items-start gap-3 sm:mt-5 sm:gap-4'>
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
        </nav>
      </div>

      <div className='mt-12 flex flex-col gap-3 border-t border-border-soft/30 pt-5 text-[11px]/4 text-muted-fg sm:mt-16 sm:flex-row sm:justify-between sm:gap-8 sm:pt-6 sm:text-[14px]/5'>
        <Typography as='p' className='text-[11px]/4 sm:text-[14px]/5' variant='caption'>
          <IntlText path='footer.copyright' values={{ year: CURRENT_YEAR }} />
        </Typography>
        <Typography as='p' className='text-[11px]/4 sm:text-[14px]/5' variant='caption'>
          Built by{' '}
          <Typography
            as='a'
            href={LINKS.SOCIAL.GITHUB}
            rel='noopener noreferrer'
            target='_blank'
            variant='link'
          >
            siberiacancode
          </Typography>
          . The source code is available on{' '}
          <Typography
            as='a'
            href={LINKS.CONTENT.SOURCE}
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
