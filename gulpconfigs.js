const dev = './dev/';
const app = './app/';
const build = './build/';
const pkg = './node_modules/';

const dest = (process.env.NODE_ENV == 'prod') ? build : app;

module.exports = {
    paths: {
        dev: {
            base: dev,
            js: dev + 'js/',
            scss: [
                dev + 'scss/*.scss'
            ],
            images: dev + 'images/',
            svg: dev + 'svg/',
            fonts: {
                filesource: dev + 'fonts/',
                tempdest: './fontdest/',
                scssdest: dev + 'scss/configs/',
                scssname: '_fonts.scss',
                urlReplace: {
                    from: 'url("',
                    to: 'url("fonts/',
                }
            }
        },
        dest: {
            base: dest,
            scripts: dest + 'scripts/',
            styles: dest + 'styles/',
            media: dest + 'media/',
            uikit: dest + 'uikit/',
            fonts: dest + 'styles/fonts/'
        },
        vendors: [
            pkg + 'video.js/dist/video.min.js',
            pkg + 'videojs-markers/dist/videojs-markers.min.js',
            pkg + 'objectFitPolyfill/dist/objectFitPolyfill.basic.min.js'
        ]
    },
    uikit: [
        "uikit",
        "widgets"
    ],
    sassdoc: {
        src: './node_modules/foundation-sites/scss/**/*.scss',
        dest: './docs/styles/'
    },
    todowatch: [
        dev + '*.{html|njk}',
        dev + 'js/**/*.js',
        dev + 'scss/**/*.scss',
        './tasks/*.js',
        './gulpfile.js',
        './gulpconfigs.js'
    ],
    webpack: {
        entries: [
            dev + 'js/main.js'
        ]
    },
    alfred: {
        filesize: [

        ]
    }
}
