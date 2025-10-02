import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';


// https://astro.build/config
const config = defineConfig({
  site: 'https://spectre.lou.gg',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Tal Podsosony',
      openGraph: {
        home: {
          title: 'Spectre',
          description: 'A display of the work of Tal Podsosony'
        },
        blog: {
          title: 'Blog',
          description: 'News and guides for Spectre.'
        },
        projects: {
          title: 'Projects'
        }
      },
      
    })
  ],
  adapter: node({
    mode: 'standalone'
  })
});

export default config;
