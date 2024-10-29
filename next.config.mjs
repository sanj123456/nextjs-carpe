/** @type {import('next').NextConfig} */
const nextConfig = {
//output: 'export',
distDir: 'dist',
images: {
  domains: ['carapp-strapi.testyourapp.online'],
},
eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
