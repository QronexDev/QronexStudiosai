import { defineConfig } from 'astro/config';
import path from 'path';

export default defineConfig({
  output: 'server',
  alias: {
    '@': path.resolve('./src'),
  },
});
