module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //--------------------
        // clean :: remove directories/files
        //--------------------

        clean: {
            main: 'dist'
        },

        //--------------------
        // copy :: copies stuff
        //--------------------

        copy: {
            main: {
                expand: true,
                cwd: '.',
                src: [
                    '*'
                ],
                dest: 'dist',
                filter: 'isFile',
                dot: true,
                files : [
                    {
                        expand: true,
                        cwd: 'assets/fonts/',
                        src: ['*'],
                        dest: 'dist/assets/fonts'
                    }
                ]
            }
        },

        //--------------------
        // sass :: compile scss
        //--------------------

        sass: {
            dev: {
                options: { 
                    outputStyle: 'expanded',
                    sourceMap: true
                },
                files: {
                    'assets/stylesheets/css/home.css': 'assets/stylesheets/scss/home.scss'

                }
            },
            dist: {
                options: { 
                    outputStyle: 'compressed',
                    sourceMap: false
                },
                files: {
                    'dist/assets/stylesheets/css/home.css': 'assets/stylesheets/scss/home.scss'
                }
            }
        },

        //--------------------
        // embed fonts :: attach all fonts
        //--------------------

        embedFonts: {
            all: {
              files: {
                'dist/assets/stylesheets/css/home.css': ['assets/stylesheets/css/home.css']
              }
            }
          },


        //--------------------
        // imagemin :: optimize images
        //--------------------

        imagemin: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'assets/img',
                    src: [
                        '**/*.*{png,jpg,gif}'
                    ],
                    dest: 'dist/assets/img'
                }]
            }
        },

        //--------------------
        // html-build :: dynamically build into html
        //--------------------

        htmlbuild: {
            main: {
                src: 'dist/index.html',
                dest: 'dist',
                options: {
                    prefix: '/',
                    styles: {
                        main: {
                            cwd: 'dist',
                            files: 'styles/*.css',
                        }
                    }
                }
            }
        },

        //--------------------
        // uglify :: minify javascript files
        //----------------
        uglify: {
          options: {
            // the banner is inserted at the top of the output
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
          },
          dist: {
            files: {
              'dist/assets/js/typed.js': ['assets/js/typed.js']
            }
          }
        },

        //--------------------
        // watch :: run tasks in response to file changes
        //--------------------
        
        watch: {
            options: {
                interrupt: true
            },
            dev: { 
                files: ['assets/stylesheets/scss/**/*.scss'],
                tasks: ['sass:dev']
            },
            dist: { 
                files: ['assets/stylesheets/scss/styles/**/*.scss'],
                tasks: ['sass:dist']
            }
        },

        //--------------------
        // connect :: start simple webserver
        //--------------------

        connect: {
            dev: {
                options: {
                    base: '',
                    port: 9000
                }
            },
            dist: {
                options: {
                    base: 'dist',
                    port: 9000
                }
            }
        }
    });

    //-- load packages
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-embed-fonts');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    

    //-- tasks
    grunt.registerTask('default', [
        'sass:dev',
        'connect:dev',
        'watch:dev',
        'embedFonts'
    ]);

    grunt.registerTask('dist', [
        'clean',
        'copy',
        'sass:dist',
        'imagemin',
        'uglify',
        'htmlbuild',
        'connect:dist',
        'watch:dist',
    ]);

    grunt.registerTask ('deploy', ['gh-pages']);


};







