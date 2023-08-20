/** for local development */
// const mix = require('laravel-mix');
// mix.js('resources/assets/js/main.js', 'public/js').vue()

/** for server production */
const mix = require('laravel-mix');

mix.setPublicPath('../html/panel')
mix.webpackConfig({
    output: {
        chunkFilename: 'js/chunks/[name]_[chunkhash].js',
        publicPath: '/panel/'
    }
});
mix.js('/var/www/panel/resources/assets/js/main.js', 'js').vue()
mix.sass('/var/www/panel/resources/assets/scss/general.scss', 'css')
mix.sass('/var/www/panel/resources/assets/scss/login.scss', 'css')

mix.js('/var/www/panel/resources/assets/js/auth/login.js', 'js').vue()
