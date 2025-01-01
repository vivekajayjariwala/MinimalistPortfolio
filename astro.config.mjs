import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
   vite: {
    plugins: [tailwindcss()],
  },
   site: 'https://yourdomain.com',
  integrations: [sitemap()]
});