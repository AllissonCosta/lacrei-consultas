// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingRoot: require('path').join(__dirname, '../../'),
  },
  
  compiler: {
    styledComponents: true,
  }
};

module.exports = nextConfig;