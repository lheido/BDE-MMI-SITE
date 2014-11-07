module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
          update: true
        },
        files: {
            "css/bde_flex.css": "scss/bde.scss"
        }
        // files: [{ // C'est ici que l'on définit le dossier que l'on souhaite importer
        //   "expand": true,
        //   "cwd": "scss/",
        //   "src": ["*.scss"],
        //   "dest": "css/",
        //   "ext": ".css"
        // }]
      }
    },
    watch: {
        styles: {
            files: ['**/*.scss', "**/*.html", "**/*.js"], // tous les fichiers Sass de n'importe quel dossier
            tasks: ['sass:dist']
        },
        options: {
            livereload: true
        }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['sass:dist'])
}
