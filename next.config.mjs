/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain HTML/CSS/JS site to /out
  // that can be hosted anywhere (Vercel, Netlify, cPanel, S3...).
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
