/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.itscard.co.kr",
        port: "",
      },
      {
        protocol: "https",
        hostname: "goony-common-s3-bucket.s3.ap-northeast-2.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
