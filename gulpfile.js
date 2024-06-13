var gulp = require("gulp"),
  minify = require("gulp-minify"),
  jsdoc = require("gulp-jsdoc3");
var jest = require("gulp-jest").default;

gulp.task("test", function () {
  return gulp.src("./test/parse.test.js", { read: false }).pipe(
    jest({
      preprocessorIgnorePatterns: [
        "<rootDir>/dist/",
        "<rootDir>/node_modules/",
      ],
      automock: false,
    })
  );
});

gulp.task("minify", function () {
  return gulp
    .src("./src/index.js")
    .pipe(
      minify({
        ext: {
          min: ".min.js",
        },
        noSource: true,
      })
    )
    .pipe(gulp.dest("./dist"));
});

gulp.task("doc", function (cb) {
  var config = require("./jsdoc.json");

  return gulp
    .src(["README.md", "./src/index.js"], { read: false })
    .pipe(jsdoc(config, cb));
});

gulp.task("build", gulp.series("test", "minify", "doc"));
