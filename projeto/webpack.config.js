import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from "path"

export default {
    entry: './index.js',
    module: {
       rules: [
         {
           test: /\.(js|jsx)$/,
           exclude: /node_modules/,
           use: ['babel-loader']
         }
       ]
    },
    resolve: {
      extensions: [".*", ".js", ".jsx"]
   },
    plugins: [
       new HtmlWebpackPlugin({
         template: './views/index.html',
         filename: './index.html'
       }),
    ],
    devServer: {
      static: {
        directory: path.join(path.resolve(process.cwd(), 'dist'), 'public'),
      },
      port: 3000,
   },
};