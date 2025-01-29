import path from 'path'
import { fileURLToPath } from 'url'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const isDev = process.env.NODE_ENV === 'development'

export default {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['core-js/stable', 'regenerator-runtime/runtime', './index.ts']
    },
    mode: isDev ? 'development' : 'production',
    output: {
        filename: `[name]${isDev ? '' : '.[contenthash]'}.js`,
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: isDev ? 'source-map' : false,
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    devServer: {
        port: 3000,
        hot: true,
        static: path.resolve(__dirname, 'src/assets'), //Указал ассеты, если нужно
        watchFiles: ['src/**/*'] //Следит за всеми файлами в `src`
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './index.html' }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets')
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}