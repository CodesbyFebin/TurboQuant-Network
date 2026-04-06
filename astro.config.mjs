// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://turboquant.network',
  integrations: [sitemap()],
  image: {
    // Enable Astro's native Image optimization for Core Web Vitals
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  compressHTML: true,
  build: {
    format: 'directory', // Supports "Silobuster" SEO URL structure
  },
});
