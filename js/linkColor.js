$(document).ready(function () {	
	
	// Переключение цвета ссылки меню при скролле на соответствующий блок 
	$(window).scroll(function () {
		let elementAbout = $('#about');
		let targetClassAbout = $('.about-link');
		let scrollTopPos = $(window).scrollTop();
		let elementAboutTopPos = elementAbout.offset().top;
		let elementAboutBottomPos = elementAboutTopPos + elementAbout.height();

		if (scrollTopPos >= elementAboutTopPos && scrollTopPos <= elementAboutBottomPos + 39) {
			targetClassAbout.addClass('active');			
		} else {
			targetClassAbout.removeClass('active');	
		}
	});

	$(window).scroll(function () {
		let elementPresent = $('#present');
		let targetClassPresent = $('.present-link');
		let scrollTopPos = $(window).scrollTop();
		let elementPresentTopPos = elementPresent.offset().top - 1;
		let elementPresentBottomPos = elementPresentTopPos + elementPresent.height();

		if (scrollTopPos >= elementPresentTopPos && scrollTopPos <= elementPresentBottomPos + 30) {
			targetClassPresent.addClass('active');			
		} else {
			targetClassPresent.removeClass('active');	
		}
	});

	$(window).scroll(function () {
		let elementCooperation = $('#cooperation');
		let targetClassCooperation = $('.cooperation-link');
		let scrollTopPos = $(window).scrollTop();
		let elementCooperationTopPos = elementCooperation.offset().top - 1;
		let elementCooperationBottomPos = elementCooperationTopPos + elementCooperation.height();

		if (scrollTopPos >= elementCooperationTopPos && scrollTopPos <= elementCooperationBottomPos + 1) {
			targetClassCooperation.addClass('active');			
		} else {
			targetClassCooperation.removeClass('active');	
		}
	});

	$(window).scroll(function () {
		let elementResults = $('#results');
		let targetClassResults = $('.results-link');
		let scrollTopPos = $(window).scrollTop();
		let elementResultsTopPos = elementResults.offset().top - 1;
		let elementResultsBottomPos = elementResultsTopPos + elementResults.height();

		if (scrollTopPos >= elementResultsTopPos && scrollTopPos <= elementResultsBottomPos + 50) {
			targetClassResults.addClass('active');			
		} else {
			targetClassResults.removeClass('active');	
		}
	});

	$(window).scroll(function () {
		let elementResults = $('#reviews');
		let targetClassResults = $('.reviews-link');
		let scrollTopPos = $(window).scrollTop();
		let elementResultsTopPos = elementResults.offset().top - 1;
		let elementResultsBottomPos = elementResultsTopPos + elementResults.height();

		if (scrollTopPos >= elementResultsTopPos && scrollTopPos <= elementResultsBottomPos + 100) {
			targetClassResults.addClass('active');			
		} else {
			targetClassResults.removeClass('active');	
		}
	});
});