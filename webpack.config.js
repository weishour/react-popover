const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)?$/,
        include: path.resolve(__dirname, './src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react', '@babel/typescript']
            }
          }
        ]
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, './src'),
        use: [
           MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
              sourceMap: true 
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom'
	}
}
