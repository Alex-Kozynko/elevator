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

if ( $(window).width() > 999 ) {
	/*$('.advantage .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.advantage').css('background-image', 'url(img/bg_slider'+nextSlide+'.png)');
	});*/
	$('.reviews .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.reviews').css('background-image', 'url(img/slider2_bg'+nextSlide+'.png)');
	});
}