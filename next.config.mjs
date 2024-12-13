/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**", // Allows all HTTPS domains
      },
    ],
  },
};

export default nextConfig;
