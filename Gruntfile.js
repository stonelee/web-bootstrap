module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      sass: {
        files: ['<%= sass.dev.src %>'],
        tasks: ['sass:dev'],
      },
      other: {
        files: ['*.html', 'assets/js/*.js', 'assets/images/*.{png,jpg,jpeg,gif,webp,svg}'],
      },
      options: {
        livereload: true,
      },
    },
    sass: {
      dev: {
        src: ['assets/css/main.scss'],
        dest: 'assets/css/main.css',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['watch']);
};
