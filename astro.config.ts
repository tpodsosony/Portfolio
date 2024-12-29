import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import spectre from './package/integration';

// https://astro.build/config
export default defineConfig({
  site: 'https://spectre.louisescher.dev',
  output: 'static',
  integrations: [
    expressiveCode(),
    mdx(),
    sitemap(),
    pagefind(),
    spectre({
      name: 'Spectre',
      openGraph: {
        home: {
          title: 'Spectre',
          description: 'A minimalistic theme for Astro.'
        },
        blog: {
          title: 'Blog',
          description: 'News and guides for Spectre.'
        },
        projects: {
          title: 'Projects'
        }
      }
    })
  ]
});