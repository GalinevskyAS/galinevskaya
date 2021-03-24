$(document).ready(function(){

	$('.close-popup').click(function() {
		$('.popup').removeClass('open');
		$('body').removeClass('lock');
		$('body').removeClass('scroll-lock');
		$('.header').removeClass('scroll-lock');
	}); 

	$('.error-button').click(function() {
		$('.popup').removeClass('open');
		$('body').removeClass('lock');
		$('body').removeClass('scroll-lock');
		$('.header').removeClass('scroll-lock');
	});
});