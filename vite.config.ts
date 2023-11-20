import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import GitRevision from '@jinixx/vite-plugin-git-revision'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

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
      GitRevision({
        branch: true,
        datetimeCommand:
          'log -1 --date=format:"%Y-%m-%d %H:%M" --pretty=format:"%ad"',
      }),
    ],
    server: {
      port: Number(env.VITE_PORT) ?? 3000,
    },
  }
})
