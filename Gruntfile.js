/* global module */

module.exports = function(grunt) {

	'use strict';

	// Grunt configuration.
	grunt.initConfig({

		connect: {
			server: {
				options: {
					port: 8000,
					keepalive: true
				}
			}
		}

	});

	// Load the grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Register the default task(s).
	grunt.registerTask('default', ['connect:server']);
};
