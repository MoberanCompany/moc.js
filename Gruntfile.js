module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'lib/moc.js',
                dest: 'dist/moc.min.js'
            }
        },
        concat: {
            basic:{
                src: ['lib/moc.js', 'lib/mocString.js', 'lib/mocLog.js', 'lib/mocNumber.js'],
                dest: 'dist/moc.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat', 'uglify']);
};