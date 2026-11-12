// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://altale.github.io',
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: { theme: 'github-dark-default' },
  },
});
