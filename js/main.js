$(document).ready(function () {
	
	// Функционал кнопки бургера и меню бургера при клике 
	$('.burger__menu').click(function () {
		$('.burger__menu').toggleClass('active');
		$('.menu__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.menu__link a').click(function () {
		$('.menu__nav').removeClass('active');
	});

	
	// Раскрывающееся меню с "крестиками" 
	$('.cooperation__subtitle').click(function () {
		if ($('.cooperation__stages').hasClass('only-one-open')) {
			$('.cooperation__subtitle').not($(this)).removeClass('active');
			$('.cooperation__text').not($(this).next()).slideUp(400);
		}
		$(this).toggleClass('active').next().slideToggle(400);
	});

	$('.cost__subtitle').click(function () {
		if ($('.cost__stages').hasClass('only-one-open')) {
			$('.cost__subtitle').not($(this)).removeClass('active');
			$('.cost__text').not($(this).next()).slideUp(400);
		}
		$(this).toggleClass('active').next().slideToggle(400);
	});


	// Плавный скролл к блокам-якорям
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");	

		$('html, body').animate({scrollTop: $(_href).offset().top});
		$('.burger__menu').removeClass('active');  
		$('body').removeClass('lock'); 

		return false;
	});	

	// Увеличение картинок в слайдере
	$('.image-slider__image').click(function() {
		$(this).toggleClass('zoom');
	});


	// Меняем блоки в quiz + функционал кнопок "Назад/Далее"
	$('.block__item.item').click(function() {		
		$(this).closest('.quiz-test-block__page').removeClass('open').next('.quiz-test-block__page').addClass('open');
	});

	$('.quiz-page__left-button').click(function() {		
		$(this).closest('.quiz-test-block__page').removeClass('open').prev('.quiz-test-block__page').addClass('open');
	});

	$('.quiz-page__right-button').click(function() {		
		$(this).closest('.quiz-test-block__page').removeClass('open').next('.quiz-test-block__page').addClass('open');
	});


	// Radiobuttons
	$.each($('.item'), function(index,val) {
		if ($(this).find('input').prop('checked')==true) {
			$(this).addClass('active');
		}
	});

	// При нажатии на кнопку удаляем всё выделение и добавляем его только активной кнопке
	$(document).on('click', '.item', function(event) {	
		$(this).parents('.block').find('.item').removeClass('active'); // Если пользователь передумает и вернётся, чтобы выбрать другой вариант, первый - заменится вторым
		$(this).toggleClass('active');
		$(this).find('input').prop('checked', true);

		return false;
	});
	
});