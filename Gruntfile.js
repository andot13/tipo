module.exports = function(grunt){
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		imageoptim: {
			optimise: {
				src: ['public/images', 'public/images']
			}
		},

		less: {
			development: {
				files: {
				  'public/stylesheets/style.css': 'public/stylesheets/style.less'
				}
	  		},

		  	production: {
				options: {
			  		cleancss: true,
				},

				files: {
				  	'public/stylesheets/style.css': 'public/stylesheets/style.less'
				}
	  		}
		},

		watch: {
			image: {
				files: ['public/images/*.jpg'],
				tasks: ['imageoptim:optimise'],
				options: {
				  spawn: false,
				}
			},

			styles: {
				option: {
					spawn: false,
				},

				files: ['public/stylesheets/*.css', 'public/stylesheets/*.less'],
				tasks: ['less'],
				option: {
					livereload: true,
				}
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-imageoptim');


	grunt.registerTask('default', ['watch']);
};	