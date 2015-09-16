"use strict";

module.exports = function(grunt) {
    //Plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        pgk: grunt.file.readJSON('package.json'),

        less: {
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
            responsive_utilities: {
                options:{
                    sourceMap: true,
                    sourceMapFilename: "dist/css/responsive.utilities.css.map",
                    sourceMapURL: "responsive.utilities.css.map"
                },
                files: {
                    'dist/css/responsive.utilities.css': 'less/responsive-utilities.less'
                }
            },
            bootstrap: {
                options:{
                    sourceMap: true,
                    sourceMapFilename: "dist/css/bootstrap.css.map",
                    sourceMapURL: "bootstrap.css.map"
                },
                files: {
                    'dist/css/bootstrap.css': 'less/bootstrap.less'
                }
            }
        },

        cssmin: {
            grid: {
                target: {
                    files: [{ src: 'dist/css/grid.css', dest: 'dist/css/grid.min.css' }]
                }
            }
        },

        watch:{
            options: {
                livereload: false
            },
            grid: {
                files: [ 'less/grid.less' , 'less/variables.less'],
                tasks: [ 'less:grid' ]
            },
            responsive_utilities: {
                files: [ 'less/responsive-utilities.less' , 'less/variables.less'],
                tasks: [ 'less:responsive_utilities' ]
            }
        }
    });

    //Tasks
    grunt.registerTask('grid', ['less:grid', 'cssmin:grid']);
    grunt.registerTask('responsive-utilities', ['less:responsive_utilities']);
    grunt.registerTask('bootstrap', ['less:bootstrap']);

    grunt.registerTask('dev', ['grid', 'responsive-utilities', 'watch']);
    grunt.registerTask('default', ['dev']);
};
