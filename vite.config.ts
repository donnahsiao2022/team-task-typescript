import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
// https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env,
    },
    plugins: [react()],
    base: '/team-task-typescript/',
  };
});
