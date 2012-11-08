(function ($, win, doc) {
	var slug = window.location.href.split('.com')[1];

	function init() {
		var navItem = $('nav').find('a');
		$.each(navItem, function() {
			if(navItem === slug) {
				$(this).addClass('active');
			} else {}
		})
	}

	init();

})(jQuery, window, document);