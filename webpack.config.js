import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const isDev = process.env.NODE_ENV === 'development'

const resolvePath = (...segments) => path.resolve(process.cwd(), ...segments)

export default {
    context: resolvePath('src'),
    entry: {
        main: ['core-js/stable', 'regenerator-runtime/runtime', './index.ts']
    },
    mode: isDev ? 'development' : 'production',
    output: {
        filename: `[name]${isDev ? '' : '.[contenthash]'}.js`,
        path: resolvePath('dist'),
        clean: true
    },
    devtool: isDev ? 'source-map' : false,
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            '@': resolvePath('src')
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
        static: resolvePath('public')
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './index.html' }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: resolvePath('src/assets'),
                    to: resolvePath('dist/assets')
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
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