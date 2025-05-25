import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  site: 'https://qronexstudiosai.work.gd',
  output: 'server',
  alias: {
    '@': path.resolve('./src'),
  },
   output: 'static',
});
