/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ae-pic-a1.aliexpress-media.com",
      "ae01.alicdn.com",
      "img.btdmp.com",
      "m.media-amazon.com"
    ]
  }
};

module.exports = nextConfig;
