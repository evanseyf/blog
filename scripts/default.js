(function ($, win, doc) {

	$('#toc button').click(function(){
		$('.old').toggle('ease-out');
		$(this).toggleClass('less');

		if( $(this).attr('class') === 'less' ) {
			$(this).html('<i></i>Less');
		}
		else {
			$(this).html('<i></i>More');
		}
	});

})(jQuery, window, document);