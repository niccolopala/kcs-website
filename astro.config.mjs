// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kentcontentstudios.com',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
