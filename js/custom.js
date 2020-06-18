$(document).ready(function () {



	// fullpage plugin initialization
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', 'thirdPage', '4thPage', '5thPage'],
		menu: '#jsMenu',
		autoScrolling: false,
		fitToSection: false,//行動裝置上這個不理想所以打false
		scrollingSpeed: 1200
	});
	$("#myCarousel .owl-carousel").owlCarousel({
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
		touchDrag: true,

	});

	$("#myCarousel2 .owl-carousel").owlCarousel({
		items: 3,
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

	$(window).on('scroll', function () {
		var scrollDistance = $(window).scrollTop();
		var $overlay = $("#overlay");
		if (scrollDistance > 80) {
			$overlay.css({ 'opacity': '0', 'visibility': ' hidden' });
		}

	})

	if ($(window).width() < 576) {
		$("#myCarousel2 .owl-carousel").owlCarousel({
			items: 2,
		});
	}

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


	// logo change when scroll
	$(window).on('scroll', function () {
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if (scrollDistance > 80) {
			$header.addClass("header--scrolling");
		}
		else {
			$header.removeClass("header--scrolling")
		}
	})

	// rellax initialization如果行動裝置不要視差滾動就if斷點
	if (screen.width > 768) {
		var rellax = new Rellax('.rellax', {
			center: true
		});
	}








});