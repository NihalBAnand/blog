import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'all-roads',
  description:
    'An eclectic collection of stuff collected along the way.',
  href: 'https://nihalbanand.github.io/blog/',
  author: 'Nihal Anand',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: 'blog',
    label: 'blog',
  },
  {
    href: 'authors',
    label: 'authors',
  },
  {
    href: 'about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'mailto:nihalbanand@gmail.com',
    label: 'Email',
  },
  {
    href: 'rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
