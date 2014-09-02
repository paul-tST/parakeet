module.exports = function(grunt){
	'use strict';
	
	// Load Grunt tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-script-inject');
	
	grunt.initConfig({
		
		filepaths: {
			src: 'app',
			dist: 'dist',
			test: 'test'
		},
		
		jshint: {
			options: {
				jshintrc: true
			},
			all: ['Gruntfile.js', '<%= filepaths.src %>/js/*.js'],
			gruntfile: ['Gruntfile.js']
		},
		
		wiredep: {
			dev: {
				src: [
					'<%= filepaths.src %>/index.html'
				]
			}
		},
		
		scriptinject: {
			dev: {
				srcs: [
					'<%= filepaths.src %>/js/**/*.js'
				],
				html: '<%= filepaths.src %>/index.html',
				without: 'app/'
			}
		}
	});
	
	grunt.registerTask('test', [
		'jshint:all'
	]);
	
	grunt.registerTask('scripts', [
		'wiredep',
		'scriptinject'
	]);
	
	// Default task
	grunt.registerTask('default', ['test']);

};