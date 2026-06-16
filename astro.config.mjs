// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', 
  adapter: vercel(), // <-- Limpio y listo para SSR estable
  integrations: [react()],
});