import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoBase = process.env.NODE_ENV === 'production' ? '/FLOW-STAR_Social_Media/' : '/';

export default defineConfig({ plugins: [react()], base: repoBase });