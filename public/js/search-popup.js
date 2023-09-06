(function ($) {
    'use strict';
    $( document ).ready(function() {

		var $search_site = $('.site-search-popup');
		var $body = $('body');

		$body.on('click', '.button-search-popup', function (e) {
			e.preventDefault();
			$search_site.toggleClass('active');
			setTimeout(function () {
				$search_site.find('input[type="search"]').focus();
			},500);

		});

        $('.site-search-popup-close, .site-search-popup-overlay').on('click', function (e) {
            e.preventDefault();
			$search_site.removeClass('active');
        });
    });
})(jQuery);

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */