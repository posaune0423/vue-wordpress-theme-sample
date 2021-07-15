const path = require('path');
const { argv } = require('process');
const MODE = argv.mode;

/////////////////////// Plugins ///////////////////////
const TerserPlugin = require('terser-webpack-plugin'); // js optimization
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin'); // plugin for Vuetify

module.exports = {
  // Entry point (main js file)
  entry: './src/main.js',
  // Where to output bundle file
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/index.js'
  },
  mode: MODE,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 81920,
              esModule: false,
              name: '[name].[ext]',
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // Load common SCSS [ Vars & Mixins ]
              resources: './src/assets/styles/base.scss'
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // prevent error caused by @mdi/font
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            // to convert ES2019 to ES5
            '@babel/preset-env'
          ]
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '~': path.resolve(__dirname, '/src'),
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['.ts', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ],
  // Minimize files if mode is production
  optimization: {
    minimizer:
      'production' === MODE
        ? []
        : [
            // Optimize js file
            new TerserPlugin({
              extractComments: 'all', // remove all comment
              terserOptions: {
                compress: { drop_console: true } // remove output of console.log
              }
            })
          ]
  },
  // Reload browser when html, css, js files is updated
  devServer: {
    publicPath: '/dist/',
    contentBase: './src/',
    watchContentBase: true,
    open: true, // Autostart browser when the server is started
    host: '0.0.0.0',
    port: 8000
  },
  watchOptions: {
    poll: true
  }
};
