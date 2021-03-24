$(document).ready(function() {
	$('#quiz-form').submit(function(e) {		
		var firstName = $('#username').val();
		var phone = $('#userphone').val();
	
		if (firstName.length < 2) {
			e.preventDefault();
			$('#popup-error-length-name').addClass('open');
			$('body').addClass('lock');
			$('body').addClass('scroll-lock');
			$('.header').addClass('scroll-lock');
	 	} else {
			var regEx = /^[а-яА-ЯёЁa-zA-Z]+$/;
			var validName = regEx.test(firstName);

			if (!validName) {
				e.preventDefault();
				$('#popup-error-correct-name').addClass('open');
				$('body').addClass('lock');
				$('body').addClass('scroll-lock');
				$('.header').addClass('scroll-lock');
			}			
		}

		if (phone.length < 1) {
			e.preventDefault();
			$('#popup-error-length-phone').addClass('open');
			$('body').addClass('lock');
			$('body').addClass('scroll-lock');
			$('.header').addClass('scroll-lock');
		} else {	  
			var regExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
			var validPhone = regExp.test(phone);

			if (!validPhone) {
				e.preventDefault();
				$('#popup-error-phone').addClass('open');
				$('body').addClass('lock');
				$('body').addClass('scroll-lock');
				$('.header').addClass('scroll-lock');
			}
		}

		if (!validName && !validPhone) {
			e.preventDefault();
			$('#popup-error-both').addClass('open');
			$('#popup-error-length-name').removeClass('open');
			$('#popup-error-phone').removeClass('open');
			$('#popup-error-length-phone').removeClass('open');
			$('body').addClass('lock');
			$('body').addClass('scroll-lock');
			$('.header').addClass('scroll-lock');
		}

	});
	

});	