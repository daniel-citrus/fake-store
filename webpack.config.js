const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env, argv) => {
    let production = argv.mode === 'production';

    return {
        entry: './src/scripts/index.js',
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        production
                            ? MiniCssExtractPlugin.loader
                            : 'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
            ],
        },
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, './dist'),
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Fake Store',
                template: './src/template.html',
            }),
            new MiniCssExtractPlugin(),
        ],
    };
};
