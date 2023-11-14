const path = require("path");
const withAntdLess = require('next-plugin-antd-less');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  lessVarsFilePath: './src/styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: true,
  
  sassOptions: {
    includePaths: [path.join(__dirname, "styles"), "./src"],
    prependData: `@import "templates/helpers/mixins.scss"; @import "templates/helpers/variables.scss";`,
  },

  devIndicators: {
    buildActivity: false
  },

  images: {
    remotePatterns: [],
  },
};

module.exports = withAntdLess(nextConfig);
