/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
  env: {
    NEXT_PUBLIC_URL_API_POSTER_BASE: process.env.NEXT_PUBLIC_URL_API_POSTER_BASE,
    NEXT_PUBLIC_URL_API_BASE: process.env.NEXT_PUBLIC_URL_API_BASE,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
}

module.exports = nextConfig
