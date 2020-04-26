const withImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// const nextConfig = {
//   // exportTrailingSlash: true,
//   webpack(config, options) {
//     config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

//     return config;
//   },
// };

module.exports = withPlugins(
  [
    [withCSS],
    [
      withImages,
      {
        optimizeImagesInDev: true,
        handleImages: ["jpeg", "png", "svg"],
        inlineImageLimit: -1,
      },
    ],
  ]
  // nextConfig
);
