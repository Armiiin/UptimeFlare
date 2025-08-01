/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AI_API_TOKEN: process.env.AI_API_TOKEN
  },
}

if (process.env.NODE_ENV === 'development') {
  const { setupDevBindings } = require('@cloudflare/next-on-pages/next-dev')
  setupDevBindings({
    bindings: {
      UPTIMEFLARE_STATE: {
        type: 'kv',
        id: 'UPTIMEFLARE_STATE',
      },
    },
  })
}

module.exports = nextConfig
