export type Link = {
  label: string
  href: string
}

export type OpenSourceItem = {
  name: string
  description: string
  note?: Link
  links: Link[]
}

export type SiteContent = {
  hero: {
    name: string
    identity: string
  }
  bio: string[]
  openSource: {
    heading: string
    items: OpenSourceItem[]
  }
  stack: {
    heading: string
    sentence: string
  }
  contact: {
    heading: string
    intro: string
    primary: Link
    email: string
    secondary: Link[]
  }
}

export const site: SiteContent = {
  hero: {
    name: 'Tomek Naorniakowski',
    identity: 'Senior fullstack developer in Warsaw. Vue, TypeScript and Laravel, with a frontend heart. Building for the web since 2005.',
  },
  bio: [
    'I\'ve been building for the web since 2005: agency websites first, then a site-generator platform where I went on to lead the frontend team.',
    'Since then I\'ve shipped product frontends at scale, including a TypeScript analytics package that ran across 150+ products and 105M+ visitors.',
    'These days I\'m on a small team in ad tech, building a dashboard that brings together data from multiple markets so the business can make decisions on facts.',
  ],
  openSource: {
    heading: 'Open source',
    items: [
      {
        name: 'Numerik',
        description: 'Validate and parse Polish ID numbers (PESEL, NIP, REGON and more). A PHP library, a TypeScript package and a Laravel integration.',
        note: { label: 'Published under Slashlab', href: 'https://slashlab.pl' },
        links: [
          { label: 'numerik.slashlab.pl', href: 'https://numerik.slashlab.pl' },
          { label: 'GitHub', href: 'https://github.com/Sqrcz/numerik' },
        ],
      },
    ],
  },
  stack: {
    heading: 'Favourite stack',
    sentence: 'Vue and TypeScript on the front, Laravel on the back, Tailwind for styling, and Vitest with Playwright to keep it honest.',
  },
  contact: {
    heading: 'Get in touch',
    intro: 'Get in touch on LinkedIn or by email.',
    primary: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naorniakowski' },
    email: 'tomek@naorniakowski.pl',
    secondary: [
      { label: 'GitHub', href: 'https://github.com/Sqrcz' },
    ],
  },
}
