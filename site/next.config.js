/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Lauer Kasm Registry',
    description: 'Images by Mike Lauer',
    icon: '/img/logo.svg',
    listUrl: 'https://mikelauer.github.io/kasm-registry',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
