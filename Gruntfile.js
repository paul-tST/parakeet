'use strict';

module.exports = function(grunt){
	grunt.initConfig({

		require('load-grunt-tasks')(grunt);

		bowerInstall:{
			app:{
				src: '',
				ignorePath: '',
				fileTypes{
					html:{
						replace:{
							js: '',
							css: ''
						}
					}
				}
			}
		}
	});

};