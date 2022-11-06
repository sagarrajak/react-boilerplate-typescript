module.exports = {
  // Add you postcss configuration here
  // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
  plugins: [
    require('postcss-will-change')(),
    require('autoprefixer')(),
    require('postcss-color-rgba-fallback')(),
    require('postcss-opacity')(),
    require('postcss-pseudoelements')(),
    require('postcss-vmin')(),
    require('pixrem')()
  ],
};
