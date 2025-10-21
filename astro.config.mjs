// @ts-check
import { defineConfig } from 'astro/config'
import matomo from 'astro-matomo'

import tailwindcss from '@tailwindcss/vite'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify(),

  integrations: [
    matomo({
      disableCookies: true,
      enabled: import.meta.env.PROD,
      heartBeatTimer: 5,
      host: "https://analytics.slashlab.pl/",
      setCookieDomain: "*.slashlab.pl",
      siteId: 1,
      viewTransition: {
        contentElement: "main"
      }
    }),
  ]
})
