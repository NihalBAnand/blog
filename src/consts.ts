import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'intellectual-nomad',
  description:
    'Trying, and probably failing, to find a place to settle.',
  href: 'https://nihalbanand.github.io/blog/',
  author: 'Nihal Anand',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: 'https://nihalbanand.github.io/blog/blog/',
    label: 'blog',
  },
  {
    href: 'https://nihalbanand.github.io/blog/authors/',
    label: 'authors',
  },
  {
    href: 'https://nihalbanand.github.io/blog/about/',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'mailto:nihalbanand@gmail.com',
    label: 'Email',
  },
  {
    href: 'https://nihalbanand.github.io/blog/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
