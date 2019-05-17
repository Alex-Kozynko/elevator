$('.slider').slick({
	centerMode: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
	infinite: false
});

$('.floating').click(function () {
	$(this).find('p span').slideToggle();
	$(this).toggleClass('active');
});

$(window).on("load", function() {
	var wow = new WOW({
		offset: 60
	})
	wow.init();
});

if ( $(window).width() < 999 ) {
	$('.page_wrapper, .certificate .container, .portfolio .container .wrapper').slick({
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: false
	});
};