// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://altale.github.io',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    shikiConfig: { theme: 'github-dark-default' },
  },
});
