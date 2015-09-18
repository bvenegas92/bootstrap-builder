"use strict";

module.exports = function(grunt) {
    //Plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        pgk: grunt.file.readJSON('package.json'),

        less: {
            normalize: {
                options:{
                    sourceMap: true,
                    sourceMapFilename: "dist/css/normalize.css.map",
                    sourceMapURL: "normalize.css.map"
                },
                files: {
                    'dist/css/normalize.css': 'less/normalize.less'
                }
            },
            grid: {
                options:{
                    sourceMap: true,
                    sourceMapFilename: "dist/css/grid.css.map",
                    sourceMapURL: "grid.css.map"
                },
                files: {
                    'dist/css/grid.css': 'less/grid.less'
                }
            },
            bootstrap_build: {
                options:{
                    sourceMap: true,
                    sourceMapFilename: "dist/css/bootstrap-build.css.map",
                    sourceMapURL: "bootstrap-build.css.map"
                },
                files: {
                    'dist/css/bootstrap-build.css': 'less/bootstrap-build.less'
                }
            }
        },

        cssmin: {
            normalize: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1
                },
                files: {
                    'dist/css/normalize.min.css': 'dist/css/normalize.css'
                }
            },
            grid: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1
                },
                files: {
                    'dist/css/grid.min.css': 'dist/css/grid.css'
                }
            },
            bootstrap_build: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1
                },
                files: {
                    'dist/css/bootstrap-build.min.css': 'dist/css/bootstrap-build.css'
                }
            }
        },

        watch:{
            options: {
                livereload: false
            },
            grid2: {
                files: [ 'less/grid2.less' ],
                tasks: [ 'less:grid2', 'cssmin:grid2' ]
            }
        },
    });

    //Tasks
    grunt.registerTask('normalize', ['less:normalize', 'cssmin:normalize']);
    grunt.registerTask('grid', ['less:grid', 'cssmin:grid']);
    grunt.registerTask('all', ['normalize', 'grid']);
    grunt.registerTask('bootstrap-build', ['less:bootstrap_build', 'cssmin:bootstrap_build']);

    grunt.registerTask('dev', ['grid', 'watch']);
    grunt.registerTask('default', ['dev']);
};
