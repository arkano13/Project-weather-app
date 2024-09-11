const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {
    module: {
     
      rules: [
        {
            test: /\.html$/i,
          loader: "html-loader",
    
        },
        {
          test: /\.css$/i,
          /* use: [MiniCssExtractPlugin.loader, "css-loader"], */
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                 publicPath: 'assets/',
              },
            },
            "css-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'assets',
              publicPath: 'assets',
              },
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65, // Ajusta según la calidad deseada
                },
                optipng: {
                  enabled: true,
                },
                pngquant: {
                  quality: [0.65, 0.90], // Ajusta según la calidad deseada
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75, // Ajusta según la calidad deseada
                },
              },
            },
          ],
        },
      ],   
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename:"./index.html",
            minify: false
          }),
          new MiniCssExtractPlugin(),
    ],

  };

