module.exports = function (grunt, options) {
  return {
    options: {
      stripBanners: {
        block: true
      },
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
      separator: ';\n'
    },

    app: {
      files: [{
        'scripts/js/core.min.js': [
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/bootstrap/dist/js/bootstrap.min.js',
          'bower_components/angular/angular.min.js',
          'bower_components/angular-bootstrap/ui-bootstrap.min.js'
        ],

        'scripts/js/plugins.min.js': [],

        'scripts/css/core.min.css': ['bower_components/bootstrap/dist/css/bootstrap.min.css']
      }]
    }
  };
};