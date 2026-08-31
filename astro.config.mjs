// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

  // base: '/portfolio/',
   base: process.env.NETLIFY ? '/' : '/portfolio/',
   outDir: './docs',
});
