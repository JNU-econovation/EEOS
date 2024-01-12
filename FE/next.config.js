/** @type {import('next').NextConfig} */
const nextConfig = {
  // rewrite
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
