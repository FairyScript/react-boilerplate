import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import { vitePluginVersionMark } from 'vite-plugin-version-mark'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const isProd = mode === 'production'
  return {
    base: '',
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        plugins: [['@swc/plugin-emotion', {}]],
      }),
      tsconfigPaths({
        root: '.',
      }),
      isProd &&
        vitePluginVersionMark({
          ifShortSHA: true,
        }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            emotion: ['@emotion/react'],
          },
        },
      },
    },
    server: {
      host: true,
      port: Number(env.VITE_PORT) ?? 3000,
      proxy: {
      },
    },
  }
})
