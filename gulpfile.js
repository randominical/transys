var del = require('del');
var fileinclude = require('gulp-file-include');

//папка с итоговым результатом
let project_folder = "dist";
//папка с исходниками
let source_folder = "#src";

//подключение шрифтов
let fs = require('fs');

//пути к файлам и папкам
let path = {
    //пути вывода, куда gulp выгружает обработанные файлы
    build:{
        //путь к html-файлу
        html: project_folder + "/",
        //путь к css-файлу
        css: project_folder + "/css/",
        //путь к js-файлу
        js: project_folder + "/js/",
        //путь к img
        img: project_folder + "/img/",
        //путь к fonts
        fonts: project_folder + "/fonts/",
    },
    //пути для папки с исходниками
    src:{
        //путь к html-файлу
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        //путь к css-файлу
        css: source_folder + "/scss/style.scss",
        //путь к js-файлу
        js: source_folder + "/js/script.js",
        //путь к img
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        //путь к fonts
        fonts: source_folder + "/fonts/*.ttf",
    },
    //пути к файлам, изменения в которых нужно слушать постоянно
    watch:{
        //путь к html-файлу
        html: source_folder + "/**/*.html",
        //путь к css-файлу
        css: source_folder + "/scss/**/*.scss",
        //путь к js-файлу
        js: source_folder + "/js/**/*.js",
        //путь к img
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    //удаление папки проекта при запуске gulp
    clean: "./" + project_folder + "/"
}

// переменные написания сценария, которым присвоен gulp
let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    //плагин browser sync
    browsersync = require("browser-sync").create();
    //плагин file include
    fileinclude = require("gulp-file-include");
    //плагин del
    del = require("del");
    //плагин sass
    scss = require("gulp-sass");
    //плагин autoprefixer
    autoprefixer = require("gulp-autoprefixer");
    //плагин group-media (группировка медиа-запросов)
    group_media = require("gulp-group-css-media-queries");
    //плагин gulp-clean-css (сжатие кода)
    clean_css = require("gulp-clean-css");
    //плагин gulp-rename
    rename = require("gulp-rename");
    //плагин gulp-uglify-es
    uglify = require("gulp-uglify-es").default;
    //плагин gulp-imagemin
    imagemin = require("gulp-imagemin");
    //плагин gulp-ttf2woff
    ttf2woff = require("gulp-ttf2woff");
    //плагин gulp-ttf2woff2
    ttf2woff2 = require("gulp-ttf2woff2");
    //плагин gulp-fonter
    fonter = require("gulp-fonter");

//фунция обновления страницы
function browserSync(params) {
    browsersync.init({
        //сервер (папка)
        server:{
            baseDir: "./" + project_folder + "/"
        },
        //порт открытия браузера
        port: 3000,
        //отключение уведомлений плагина
        notify: false
    })
}

//функция для работы с html-файлом
function html() {
    //обращение к корню исходной папки проекта
    return src(path.src.html)
        //сбор файлов для выгрузки
        .pipe(fileinclude())
        //перемещение файлов в папку назначения
        .pipe(dest(path.build.html))
        //обновление страницы
        .pipe(browsersync.stream())
}

//функция для работы с css-файлом
function css() {
    //обращение к корню исходной папки проекта
    return src(path.src.css)
        //scss
        .pipe(
            scss({
                //отмена сжатия файла
                outputStyle: "expanded"
            })
        )
        //группировка медиа-запросов
        .pipe(
            group_media()
        )
        //автопрефиксер
        .pipe(
            autoprefixer({
                //браузеры, которые нужно поддерживать (здесь: последние 5 версий)
                overrideBrowserslist: ["last 5 versions"],
                //стиль написания автопрефиксов
                cascade: true,
            })
        )
        //перемещение файлов в папку назначения 1
        .pipe(dest(path.build.css))
        //чистка кода, сжатие файла
        .pipe(clean_css())
        //изменение названия файла
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        //перемещение файлов в папку назначения 2
        .pipe(dest(path.build.css))
        //обновление страницы
        .pipe(browsersync.stream())
}

//функция для работы с js-файлом
function js() {
    //обращение к корню исходной папки проекта
    return src(path.src.js)
        //сбор файлов для выгрузки
        .pipe(fileinclude())
        //перемещение файлов в папку назначения 1
        .pipe(dest(path.build.js))
        //сжатие файла
        .pipe(
            uglify()
        )
        //изменение названия файла
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        //перемещение файлов в папку назначения 2
        .pipe(dest(path.build.js))
        //обновление страницы
        .pipe(browsersync.stream())
}

//функция для работы с img
function images() {
    //обращение к корню исходной папки проекта
    return src(path.src.img)
        //сжатие изображений
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3 // 0 to 7
            })
        )
        //перемещение файлов в папку назначения
        .pipe(dest(path.build.img))
        //обновление страницы
        .pipe(browsersync.stream())
}

//функция для конвертации шрифтов ttf в woff и woff2
function fonts() {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts));
}

//конвертация шрифтов otf в woff и woff2
gulp.task('otf2ttf', function () {
    return src([source_folder + '/fonts/*.otf'])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest(path.src.fonts));
})

//подключение шрифтов
//!!!!!!!!!!!!!!в файле fonts.scss вручную меняем имя и вес для шрифтов одного семейства
function fontsStyle(params) {

    let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
    if (file_content == '') {
        fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
}
    
function cb() { }

//отслеживание изменений в файлах
function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

//функция удаления папка
function clean(params) {
    return del(path.clean);
}

//запуск работы плагина
let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;