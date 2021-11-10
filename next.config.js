/** @type {import('next').NextConfig} */
const path = require('path');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  pwa: {
    disable: true,
    dest: 'public',
  },
  typescript: {},
  distDir: '.next',
  webpack(config, options) {
    const { dev, isServer } = options;
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@import "./lib/variables.scss";`,
  },
  trailingSlash: true,
};
