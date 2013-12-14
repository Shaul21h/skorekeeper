module.exports =function(grunt){
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.initConfig({
		express: {
			all: {
				options: {
					port: 9000,
					hostname: "0.0.0.0",
					bases: ['_public'],
					livereload: true
				}
			}
		},

		jshint: {
		  files: ['server.js']
		},
		jade: {
			compile: {
				options: {
					data: {
						debug: false,
						client: false,
                		pretty: true
					}
				},
				files: [{
					cwd: "view/",
					src: "*.jade",
					dest: "_public",
					expand: true,
					ext: ".html"
				}]
			}
		},
		less:{
			base:{
				options: {
					minified: true
				},
				files:{
					'_public/styles/boot.css':'vendor/bootstrap/bootstrap.less'
				}
			},
			all:{
				options: {
					minified: false
				},
				files:[
					{dest:'_public/styles', src:'*.less',cwd:'less/', ext:'.css', expand:true }
				]
			}
		},
		watch:{
			jade:{
				files: ['**/*.jade'],
				tasks: ['jade'],
				options: {
					livereload: true
				}
			},
			less:{
				files: ["less/*.less"],
				tasks: ['less:all'],
				options: {
					livereload: true
				}
			}

		}

	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['jade','express','less:all','watch']);
	grunt.registerTask('compileless', ['less:base']);
}