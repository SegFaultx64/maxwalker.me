/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/maxwalker.me',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
