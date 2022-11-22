// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: "./src/index.js",
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new MiniCssExtractPlugin(),
   
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
      from: path.resolve(__dirname, "./assets"),
      to: path.resolve(__dirname, "./dist/assets")
        }
      ]
    }),

   


    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],


  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },

  devServer: {
    static:{
    directory: path.resolve(__dirname, "./dist/"), // racine du serveur
            },
   // hot: true, //active le hot module reload (HMR)
    port: 5500,
    liveReload: true,
    watchFiles: ['src/**/*', 'index.html']
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
