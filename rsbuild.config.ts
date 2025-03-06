import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    swc: {
      jsc: {
        experimental: {
          plugins: [['@swc/plugin-emotion', {}]],
        },
      },
    },
  },
  server: {
    port: Number(process.env.DEV_PORT) || 3000,
  },
  output: {
    assetPrefix: './',
  },
})
