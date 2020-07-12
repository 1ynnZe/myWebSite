$(document).ready(function () {

	$('.menu-toggle').on('click', function () {
		$('#overlay').css('opacity', '1').css('visibility', 'visible')
	})


	$('.popup-close ').on('click', function () {
		$('#overlay').css('opacity', '0').css('visibility', 'hidden')
	})

	// fullpage plugin initialization
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', '4thPage', '5thPage', '6thPage'],
		menu: '#jsMenu',
		autoScrolling: false,
		fitToSection: false,//行動裝置上這個不理想所以打false
		scrollingSpeed: 1200
	});

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
		items: 3,
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


	$(function () {
		var $container = $('.masonry');
		$container.imagesLoaded(function () {
			$container.masonry({
				itemSelector: '.item'
			})

		});
	});

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




	// logo change when scroll
	// $(window).on('scroll', function () {
	// 	var scrollDistance = $(window).scrollTop();
	// 	var $header = $(".js-header");
	// 	if (scrollDistance > 80) {
	// 		$header.addClass("header--scrolling");
	// 	}
	// 	else {
	// 		$header.removeClass("header--scrolling")
	// 	}
	// })

	// rellax initialization如果行動裝置不要視差滾動就if斷點
	// if (screen.width > 768) {
	// 	var rellax = new Rellax('.rellax', {
	// 		center: true
	// 	});
	// }








});