import Link from 'next/link';

import { Button, IconButton, Typography } from '@/components/ui';
import { IntlText } from '@/intl';
import { intl } from '@/intl/server';

import { NAVIGATION, OPENSOURCE, PRODUCTS, SOCIALS } from './constants';

export const Footer = () => (
  <footer className='content-container mb-12 flex w-full flex-col gap-6 sm:mb-16'>
    <div className='flex flex-col gap-6 rounded-24 bg-secondary px-4 py-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-10 sm:px-6 sm:py-10'>
      <span className='font-pixelify-sans text-[32px]/10 font-bold tracking-wide'>
        juniorsbootcamp
      </span>

      <div className='flex flex-col gap-4 sm:flex-row sm:gap-10'>
        {PRODUCTS.map((product) => (
          <Typography key={product.href} as='span' variant='body-md'>
            {product.label}
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
