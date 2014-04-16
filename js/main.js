;(function (window) {

	'use strict';

	var
		CodeMirror = window.CodeMirror,
		marked = window.marked,
		editor,
		output,

		init = function () {
			editor = CodeMirror.fromTextArea(document.getElementById('code'), {
				lineNumbers: true,
				lineWrapping: true,
				theme: 'solarized dark'
			});
			editor.on('change', update);
			output = document.getElementById('output');

			window.addEventListener('load', function () {
				update(editor);
			});
		},

		update = function (e) {
			var val = e.getValue();
			output.innerHTML = marked(val);
		};

	init();

}(this));
