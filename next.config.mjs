/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // check with Theo's video
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lxbpjvrr41.ufs.sh",
        port: "",
        pathname: "/f/**",
        search: "**",
      },
    ],
  },
};

export default nextConfig;
