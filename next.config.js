/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.ibb.co",
      "ibb.co",
      "img.freepik.com",
      "iili.io",
      "freeimage.host",
      "i.postimg.cc", // Updated to match the actual domain used in the image URL
      "encrypted-tbn0.gstatic.com",
      "ajeetchaulagain.com",
    ],
  },
};

module.exports = nextConfig;
