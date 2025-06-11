const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/amino_acid_sequence/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@utils': path.resolve(__dirname, 'src/common/utils/'),
            '@features': path.resolve(__dirname, 'src/features/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            'common': path.resolve(__dirname, 'src/common/'),
        },
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
        open: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],
};