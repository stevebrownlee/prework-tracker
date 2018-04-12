module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        watch: {
            scripts: {
              files: [
                  "./src/index.html",
                  "./src/scripts/**/*.js",
                  "./src/styles/**/*.css",
                  "!node_modules/**/*.js"
                ],
              tasks: ["eslint", "browserify", "uglify", "copy"],
              options: {
                spawn: false,
              },
            }
        },
        browserify: {
            options: {
                browserifyOptions: {
                    debug: true,
                    paths: ["./src/scripts"],
                }
            },
            dist: {
                files: {
                    "dist/bundle.js": ["src/scripts/main.js"]
                }
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */"
            },
            build: {
                files: [{
                    expand: true,
                    cwd: "dist",
                    src: "bundle.js",
                    dest: "dist",
                    ext: ".min.js"
                }]
            }
        },
        eslint: {
            src: [
                "./src/scripts/**/*.js",
                "!node_modules/**/*.js"
            ]
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: "src",
                        src: "styles/*",
                        dest: "dist/"
                    },
                    {
                        expand: true,
                        cwd: "src",
                        src: "index.html",
                        dest: "dist/"
                    }
                ]
            }
          }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-browserify");

    // Default task(s).
    grunt.registerTask("default", ["eslint", "browserify", "uglify", "copy", "watch"]);

};
