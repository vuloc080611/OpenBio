/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Vì deploy tĩnh lên Vercel/Netlify
  },
};
module.exports = nextConfig;
