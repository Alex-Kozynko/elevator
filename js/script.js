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

let scroll = $("main .key .wrapper .img1").width() + $("main .key .wrapper .img1").width()/14;
$("main .key .wrapper").click(function () {

	$("main .key .wrapper").animate({scrollLeft: scroll}, 500);
})


	$('.advantage .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.advantage').css('background-image', 'url(img/bg_slider'+nextSlide+'.jpg)');
	});
	$('.reviews .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.reviews').css('background-image', 'url(img/slider2_bg'+nextSlide+'.png)');
		if (nextSlide === 3) {
			$('.reviews').css("background-position", "55% 0%");
		} else {
			$('.reviews').css("background-position", "0% 0%");
		}
	});
