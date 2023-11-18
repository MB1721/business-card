const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // creates an html file to inject source code into
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // extracts css from each js file and creates a new css reference file
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // analyze bundle build structure
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  devtool: 'inline-source-map', // extract source maps and include in final bundle
  devServer: {
    static: './public'
  },
  plugins: [
    new HtmlWebpackPlugin({ // should be first, as it is depended on by other integrated plugins
      title: 'Business Card',
      filename: 'index.html',
      template: './src/assets/html-templates/index.html',
      inject: true, // inject all assets into template; Position– head or body– depends on scriptLoading
      scriptLoading: 'defer' // choose how scripts are injected into the html {'blocking'|'defer'|'module'}
    }),
    new MiniCssExtractPlugin(),
    new FaviconsWebpackPlugin({
      logo: './src/assets/images/logo/mb-logo-no-background-light.svg', // source image to generate icon from
      inject: true, // inject links/metadata into HtmlWebpackPlugin(s)
      outputPath: 'assets/', // directory to output the assets relative to the webpack output dir.
      //prefix: 'assets/favicons/', // prefix path for generated assets
      // generated icon depends on the webpack mode:
      // development-> use a light favicons build.
      // production-> use a full webapp favicons build.
      mode: 'auto', 
      favicons: {
        developerURL: null, // prevent retrieving from the nearest package.json
        background: null,
        theme_color: null,
        icons: { // create icons for the following:
          android: true, 
          appleIcon: true, 
          appleStartup: true,
          favicons: true, 
          windows: true, 
          yandex: true, 
        }
      }
    }),
    // new BundleAnalyzerPlugin(),
  ],
  module: {
    // rules are processed top -> bottom. Loaders within each rule are processed bottom -> top.
    rules: [ 
      {
        test: /.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /.(jpg|jpeg|png|svg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ],
            cacheDirectory: true,
          }
        }
      }
    ]
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()], // create resolve alias entries from the tsconfig.json "paths" option
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // omit file extensions in import statements
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[id].chunk.js', // determines the name of dynamic chunk files
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    moduleIds: 'deterministic', // keeps the vender hash consistent between builds
    runtimeChunk: 'single', // create a single runtime bundle for all chunks
    splitChunks: {
      cacheGroups: {
        vendor: { // create bundles for third-party libraries
          test: /[\\/]node_modules[\\/](react|react-dom|babel)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  },
  cache: true,
}