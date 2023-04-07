$(document).ready(function () {

	$('.menu-toggle').on('click', function () {
		$('#overlay').css('opacity', '1').css('visibility', 'visible')
	})


	$('.popup-close ').on('click', function () {
		$('#overlay').css('opacity', '0').css('visibility', 'hidden')
	})


	//owl-carousel

	if ($(window).width() < 992) {
		$("#myCarousel2 .owl-carousel").owlCarousel({
			items: 2,
			loop: true,
			pullDrag: false,
			navText: [],//預設有navText就是前後頁箭頭是文字，這裡我們不要就寫個空陣列
			dots: true,//預設有點，這裡我們不要
			rewind: true,
			autoplay: true,
			margin: 0,
			nav: false,
			mouseDrag: true,
			touchDrag: true
		});
		$("#myCarousel3 .owl-carousel").owlCarousel({
			items: 2,
			loop: true,
			pullDrag: false,
			navText: [],//預設有navText就是前後頁箭頭是文字，這裡我們不要就寫個空陣列
			dots: true,//預設有點，這裡我們不要
			rewind: true,
			autoplay: true,
			margin: 0,
			nav: false,
			mouseDrag: true,
			touchDrag: true
		});
	}
	if ($(window).width() < 600) {
		$("#myCarousel2 .owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			pullDrag: false,
			navText: [],//預設有navText就是前後頁箭頭是文字，這裡我們不要就寫個空陣列
			dots: true,//預設有點，這裡我們不要
			rewind: true,
			autoplay: true,
			margin: 0,
			nav: false,
			mouseDrag: true,
			touchDrag: true
		});
	}
	$("#myCarousel .owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		pullDrag: false,
		navText: [],//預設有navText就是前後頁箭頭是文字，這裡我們不要就寫個空陣列
		autoplay: true,
		dots: true,
		nav: false,
		autoplayHoverPause: true,
		animateOut: 'slideOutUp',
		animateIn: 'slideInUp'

	});

	$("#myCarousel2 .owl-carousel").owlCarousel({
		items: 4,
		loop: true,
		pullDrag: false,
		navText: [],//預設有navText就是前後頁箭頭是文字，這裡我們不要就寫個空陣列
		autoplay: true,
		dots: true,
		nav: false,
		autoplayHoverPause: true,
		animateOut: 'slideOutUp',
		animateIn: 'slideInUp'
	});
	$("#myCarousel3 .owl-carousel").owlCarousel({
		items: 4,
		loop: true,
		pullDrag: false,
		navText: [],//預設有navText就是前後頁箭頭是文字，這裡我們不要就寫個空陣列
		dots: true,//預設有點，這裡我們不要
		rewind: true,
		autoplay: true,
		margin: 0,
		nav: false,
		mouseDrag: true,
		touchDrag: true
	});

	//手機popupmenu下滑時 消失
	$(window).on('scroll', function () {
		var scrollDistance = $(window).scrollTop();
		var $overlay = $("#overlay");
		if (scrollDistance > 80) {
			$overlay.css({ 'opacity': '0', 'visibility': ' hidden' });
		}

	})


	var $container = $('.masonry');
	if ($container.length > 0) {
		$container.imagesLoaded(function () {
			$container.masonry({
				itemSelector: '.item'
			})

		});
	}


	if ($(window).width() < 992) {
		$('.section.fp-section').css("height", "100%")
	}

	$(window).resize(function () {
		if ($(window).width() < 992) {
			$('.section.fp-section').css("height", "100%")
		}
		if ($(window).width() < 576) {
			$("#myCarousel2 .owl-carousel").owlCarousel({
				items: 2,
			});
		}
	})













});