const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WarpifyPlugin = require('@warpjs/webpack-plugin')

module.exports = {
  plugins: [
    // clean output for each build
    new CleanWebpackPlugin(),
    // define html template
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // copy assets to output
    new CopyPlugin([
      {
        from: 'public',
        to: '.'
      }
    ]),
    // WarpJS webpack plugin
    new WarpifyPlugin({
      config: {
        // server initialization
        server: {
          init: {
            import: './src/warp-init.js'
          }
        }
      }
    })
  ]
}
