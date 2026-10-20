import type { SiteContent } from './site'

// Worst-case content for break-ui: same shape as `site`, every field pushed to its limit.
export const siteWorstCase: SiteContent = {
  hero: {
    name: 'Tomasz Bartłomiej Naorniakowski-Wierzchosławski',
    identity: 'Senior fullstack developer in Warsaw, Kraków, Wrocław or fully remote across the EU. Vue, TypeScript, Nuxt, Laravel, Inertia.js and PostgreSQL, with a frontend heart and a soft spot for accessible, well-tested interfaces. Building for the web since 2005, through agencies, startups and large product companies.',
  },
  bio: [
    'I\'ve been building for the web since 2005: agency websites first, then a site-generator platform where I went on to lead the frontend team.',
    'Since then I\'ve shipped product frontends at scale, including a TypeScript analytics package that ran across 150+ products and 105M+ visitors.',
    'Along the way I\'ve worked on internationalisation, design systems, server-side rendering, performance budgets and accessibility audits.',
    'Long unbroken strings happen too: https://numerik.slashlab.pl/docs/validators/pesel-with-extended-checksum-and-birthdate-parsing',
    'Konstantynopolitańczykowianeczka is a real Polish word and it has to wrap somewhere.',
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
      {
        name: 'laravel-polish-administrative-divisions-teryt-importer-and-validator',
        description: 'Imports the TERYT register of Polish voivodeships, counties and municipalities.',
        links: [
          { label: 'GitHub', href: 'https://github.com/Sqrcz/laravel-polish-administrative-divisions-teryt-importer-and-validator' },
        ],
      },
      {
        name: 'Short',
        description: 'Tiny.',
        links: [],
      },
      {
        name: 'Vue Accessible Data Table',
        description: 'A keyboard-first, screen-reader-friendly data table for Vue 3 with sorting, filtering, column pinning, virtual scrolling, row grouping, inline editing and CSV export, built to stay usable on a 320px screen with 200% zoom.',
        note: { label: 'Published under Slashlab', href: 'https://slashlab.pl' },
        links: [
          { label: 'Docs', href: 'https://example.com' },
          { label: 'GitHub', href: 'https://example.com' },
          { label: 'npm', href: 'https://example.com' },
        ],
      },
    ],
  },
  stack: {
    heading: 'Favourite stack',
    sentence: 'Vue, Nuxt, Pinia and TypeScript on the front, Laravel, Inertia.js, PHP, PostgreSQL, MySQL and Redis on the back, Tailwind CSS for styling, and Vitest, Playwright, PHPStan, GitHub Actions and Docker to keep it honest.',
  },
  contact: {
    heading: 'Get in touch',
    intro: 'Get in touch on LinkedIn or by email. I read everything, though replies can take a few days when I\'m deep in a release.',
    primary: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naorniakowski' },
    email: 'tomasz.bartlomiej.naorniakowski-wierzchoslawski@naorniakowski.pl',
    secondary: [
      { label: 'GitHub', href: 'https://github.com/Sqrcz' },
    ],
  },
}
