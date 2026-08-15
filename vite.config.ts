import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// oxlint-disable-next-line no-default-export
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
