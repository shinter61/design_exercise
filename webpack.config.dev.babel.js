import webpack from 'webpack';
import path from 'path';

export default {
  mode: 'development',
  entry:[
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'src/')
  ],
  output:{
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve:{
    extensions: ['.js','.json','.jsx']
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        use:{
          loader: 'babel-loader'
        },
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader'
      },
    ]
  }
};