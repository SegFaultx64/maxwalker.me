/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-site',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
