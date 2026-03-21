// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vivaspeak.com',
  trailingSlash: 'always',
  redirects: {
    '/recursos/': '/blog/',
    '/en/resources/': '/en/blog/',
  },
  integrations: [sitemap()],
});
