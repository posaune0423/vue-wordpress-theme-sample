// 開発or本番モードの選択(development、production、noneのいずれか設定必須)
// development: 開発時のファイル出力のモード(最適化より時間短縮,エラー表示などを優先)
// production: 本番時のファイル出力のモード(最適化されて出力される)
const { argv } = require('process');
const MODE = argv.mode;
// const MODE = 'development';

// ファイル出力時の絶対パス指定に使用
const path = require('path');

/////////////////////// Plugins ///////////////////////
const TerserPlugin = require('terser-webpack-plugin'); // js最適化
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin'); // plugin for Vuetify

module.exports = {
  // エントリーポイント(メインのjsファイル)
  entry: './src/main.js',
  // ファイルの出力設定
  output: {
    // 出力先(絶対パスでの指定必須)
    path: path.resolve(__dirname, './dist'),
    // 出力ファイル名
    filename: 'js/index.js'
  },
  mode: MODE,
  devtool: 'source-map',
  // ローダーの設定
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 81920,
              esModule: false,
              name: '[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                js: 'babel-loader'
              }
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader', // prevent error caused by @mdi/font
        options: {
          name: '[name].[ext]'
        }
      },
      {
        // ローダーの対象 // 拡張子 .js の場合
        test: /\.js$/,
        // ローダーの処理対象から外すディレクトリ
        exclude: /node_modules/,
        // Babel を利用する
        loader: 'babel-loader',
        // Babel のオプションを指定する
        options: {
          presets: [
            // プリセットを指定することで、ES2019 を ES5 に変換
            '@babel/preset-env'
          ]
        }
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    // Webpackで利用するときの設定
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '~': path.resolve(__dirname, '/src'),
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    // Vueを読み込めるようにするため
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  // mode:puroductionでビルドした場合のファイル圧縮
  optimization: {
    minimizer:
      'production' === MODE
        ? []
        : [
            // jsファイルの最適化
            new TerserPlugin({
              // すべてのコメント削除
              extractComments: 'all',
              // console.logの出力除去
              terserOptions: {
                compress: { drop_console: true }
              }
            })
          ]
  },
  // js, css, html更新時自動的にブラウザをリロード
  devServer: {
    // サーバーの起点ディレクトリ
    contentBase: '/dist/',
    // バンドルされるファイルの監視 // パスがサーバー起点と異なる場合に設定
    publicPath: '/dist/',
    //コンテンツの変更監視をする
    watchContentBase: true,
    // 実行時(サーバー起動時)ブラウザ自動起動
    open: true,
    //　同一network内からのアクセス可能に
    host: '0.0.0.0',
    port: 8000,
    stats: {
      warnings: false
    }
  }
};
