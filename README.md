# template-sass

Para utilizar correctamente la librería debemos hacer los siguientes pasos.
1. Copiar el archivo artico.sass donde se encuentra todo el nucleo del sass.
2. Copiar el archivo config.sass donde podemos modificar las variables generales según requiera nuestra aplicación.
3. Crear un archivo main.sass para importar ``` @import "config.sass"``` y  ``` @import "config.sass"```, y luego escribir nuestro código sass.
4. Como recomendación es bueno crear un carpeta theme e ir incluendo archivos sass desde el main.sass que contengan nuestro código sass por modulos css.
5. Crear un archivo package.json con el siguiente código
``` 
{
  "private": true,
  "scripts": {
    "prod": "gulp --production",
    "dev": "gulp watch"
  },
  "devDependencies": {
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^3.1.1",
    "gulp-concat": "^2.6.1",
    "gulp-install": "^0.6.0",
    "gulp-minify-css": "^1.2.4",
    "gulp-rename": "^1.2.2",
    "gulp-sass": "^2.2.0",
    "gulp-sourcemaps": "^2.4.1"
  },
  "dependencies": {
    "gulp-autoprefixer": "^3.1.1"
  }
}

```
6. jecutamos npm install, cabe recordar que se debe tener instalado NodeJs y npm.
7. Para finalizar se crea el archivo el gulpfile.js de la siguiente manera.

``` 
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename');

;
gulp.task('sass', function () {
    return gulp.src('./assets/sass/main.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(concat('main.css'))
        .pipe(rename({
            basename: 'main',
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function () {
    gulp.watch('./assets/sass/**/*.sass', ['sass']);
});
``` 
##### Nota: En este caso el gulpfile.js en watch es presto a cualquier cambio en la capeta /assets/sass/**/*.sass esto se debe modificar según la estructura de las carpetas de cada proyecto, igual el destino del archivo css en .pipe(gulp.dest('./assets/css/')); 
