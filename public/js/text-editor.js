(function ($) {
	'use strict';

	function text_editor_hover() {
		let $text_hover = $('.text-editor-hover');

		$text_hover.each(function () {
			let $text = $(this).find('.elementor-text-editor > *').text();

			$(this).find('.elementor-text-editor  > *').attr('data-hover',$text);
		});

	}

	text_editor_hover();

})(jQuery);

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */