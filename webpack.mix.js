const mix = require('laravel-mix');

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            cacheCompression: true,
                            babelrc: false,
                            sourceType: 'unambiguous',
                            presets: [
                                ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
                                '@babel/preset-typescript',
                                '@babel/preset-react',
                                '@emotion/babel-preset-css-prop',
                            ],
                            plugins: ['@babel/plugin-proposal-class-properties'],
                        },
                    },
                ],
            }
        ]
    }
});
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/ts/index.tsx', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .version();


