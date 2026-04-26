import { GithubIcon, TelegramIcon, TwitchIcon, YoutubeIcon } from '@/components/icons';
import { LINKS } from '@/constants';

export const PRODUCTS = [
  {
    href: 'TODO1',
    label: ''
  },
  {
    href: 'TODO2',
    label: ''
  },
  {
    href: 'TODO3',
    label: ''
  }
] as const;

export const SOCIALS = [
  {
    href: LINKS.SOCIAL.GITHUB,
    Icon: GithubIcon,
    alt: 'footer.social.github.alt'
  },
  {
    href: LINKS.SOCIAL.TELEGRAM,
    Icon: TelegramIcon,
    alt: 'footer.social.telegram.alt'
  },
  {
    href: LINKS.SOCIAL.TWITCH,
    Icon: TwitchIcon,
    alt: 'footer.social.twitch.alt'
  },
  {
    href: LINKS.SOCIAL.YOUTUBE,
    Icon: YoutubeIcon,
    alt: 'footer.social.youtube.alt'
  }
] as const;

export const NAVIGATION = [
  {
    href: '/tasks',
    label: 'navigation.tasks'
  },
  {
    href: '/guides',
    label: 'navigation.guides'
  }
] as const;

export const OPENSOURCE = [
  {
    href: LINKS.OPENSOURCE.REACTUSE,
    label: 'reactuse'
  },
  {
    href: LINKS.OPENSOURCE.MOCK_CONFIG,
    label: 'mock-config'
  },
  {
    href: LINKS.OPENSOURCE.APICRAFT,
    label: 'apicraft'
  },
  {
    href: LINKS.OPENSOURCE.FETCHES,
    label: 'fetches'
  }
] as const;
