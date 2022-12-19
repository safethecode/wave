/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */

const path = require('path');

module.exports = {
  reactStrictMode: true,
  typescript: {},
  distDir: '.next',
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@import "./lib/variables.scss";`,
  },
  trailingSlash: true,
  swcMinify: true,
};
