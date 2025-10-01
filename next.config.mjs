/** @type {import('next').NextConfig} */
const repo = 'Porfolio'; // exact repo name

const nextConfig = {
  output: 'export',            // required for GitHub Pages
  trailingSlash: true,         // stable folder-based routing
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
};

export default nextConfig;
