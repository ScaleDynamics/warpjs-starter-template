const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WarpifyPlugin = require('@warpjs/webpack-plugin')

require('dotenv').config()

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
      exclude: [/node_modules/],
      include: [/\.js$/],
      config: {
        // project config
        project: {
          userId: process.env.WARPJS_USER_ID,
          name: process.env.WARPJS_PROJECT_NAME
        },
        // server initialization
        server: {
          init: {
            import: './server-init.js'
          }
        }
      }
    })
  ]
}
