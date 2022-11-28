/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    allowMiddlewareResponseBody: true,
  },
  sassOptions: {
    includePath: [path.join(__dirname, 'styles')],
  },
  output: 'standalone',
}

module.exports = nextConfig
