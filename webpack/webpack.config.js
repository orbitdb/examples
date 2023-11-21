import path from 'path';
import { fileURLToPath } from 'url'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default (env, argv) => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
        
  return {
    target: 'web',
    entry: './src/index.js',
    mode: 'development',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      fallback: {
        util: 'util/'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser'
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]
  }
};