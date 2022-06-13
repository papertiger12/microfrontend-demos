/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          destination: `/:path*`,
        },
      ],
      afterFiles: [
        {
          source: '/micro/:path*',
          destination: `http://localhost:3001/micro/:path*`,
        },
      ],
      fallback: [
        {
          source: '/:path*',
          destination: `https://www.goodrx.com/:path*`,
          // destination: `https://fastly-good-dev-0.fastly.lifecycle.dev.goodrx.com/:path*`,
        },
      ]
    }
  }
};

module.exports = nextConfig;
