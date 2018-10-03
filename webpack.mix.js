let mix = require('laravel-mix');

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

/*mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

   */
   mix.scripts([
      'resources/js/jquery-3.2.1.js',
      'resources/js/bootstrap.js',
      'resources/js/toastr.js',
      'resources/js/vue.js',
      'resources/js/axios.js',
      'resources/js/app.js',

    ], 'public/js/app.js'    )
   .styles ([
        'resources/css/bootstrap.css',
        'resources/css/toastr.css',
       ], 'public/css/app.css') ;
