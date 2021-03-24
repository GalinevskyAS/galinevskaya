$(document).ready(function () {	
	
	// Слайдер-swiper 
	new Swiper('.reviews__image-slider', {

		// СТРЕЛКИ 
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next'
		},

		// НАВИГАЦИЯ
		// Буллиты, текущее положение, прогрессбар
		pagination: {
			el: '.swiper-pagination',
			// Буллиты (возможность клика)
			clickable: true,
			// Динамические буллиты (размер точек зависит от близости к крайнему слайду)
			dynamicBullets: true
		},

		// СКРОЛЛ (перетаскивание)
		scrollbar: {
			el: '.swiper-scrollbar',
			// Возможность перетаскивать скролл "рукой"
			dragable: true
		},

		// Включение/отключение перетаскивания на ПК
		simulateTouch: true,
		// Чувствительность свайпа (для меньшего усилия увеличиваем значение, 0 отключит перетаскивание на всех устройствах)
		touchRatio: 1,
		// Курсор перетаскивания ("рука")
		grabCursor: true,

		// АВТОВЫСОТА (высота слайдера подстраивается под высоту контента в конкретном слайде; полезна, если присутствует текст разного объема)
		autoHeight: true,

		// КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА НА СТРАНИЦУ (можно указать дробь: 2,8 или 4,75)
		slidesPerView: 1, // можно поставить значение 'auto' и {width:auto; (см. scss)}

		//БЕСКОНЕЧНОЕ ПРОКРУЧИВАНИЕ (отключи scrollbar, slidesPerColumn не больше 1)
		loop: true,

		//ПЛАВНОСТЬ
		speed: 1200,

		// Куб
		effect: 'cube',
		// Используется с effect: cube
		cubeEffect: {
			// Настройки тени 		 
			slideShadows: false,
			shadow: false,
		}
	});	

	// Слайдер-swiper 
	new Swiper('.case-stages__image-slider', {

		// СТРЕЛКИ 
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next'
		},

		// НАВИГАЦИЯ
		// Буллиты, текущее положение, прогрессбар
		pagination: {
			el: '.swiper-pagination',
			// Буллиты (возможность клика)
			clickable: true,
			// Динамические буллиты (размер точек зависит от близости к крайнему слайду)
			dynamicBullets: true
		},

		// СКРОЛЛ (перетаскивание)
		scrollbar: {
			el: '.swiper-scrollbar',
			// Возможность перетаскивать скролл "рукой"
			dragable: true
		},
		// Включение/отключение перетаскивания на ПК
		simulateTouch: true,
		// Чувствительность свайпа (для меньшего усилия увеличиваем значение, 0 отключит перетаскивание на всех устройствах)
		touchRatio: 1,
		// Курсор перетаскивания ("рука")
		grabCursor: true,

		// АВТОВЫСОТА (высота слайдера подстраивается под высоту контента в конкретном слайде; полезна, если присутствует текст разного объема)
		autoHeight: true,

		// КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА НА СТРАНИЦУ (можно указать дробь: 2,8 или 4,75)
		slidesPerView: 1, // можно поставить значение 'auto' и {width:auto; (см. scss)}

		//БЕСКОНЕЧНОЕ ПРОКРУЧИВАНИЕ (отключи scrollbar, slidesPerColumn не больше 1)
		loop: true,

		//АВТОПРОКРУТКА
		autoplay: {
			// Пауза между прокруткой 
			delay: 3000,
			// Окончание на последнем слайде (отключи loop)
			stopOnLastSlide: false,
			// Отключить после переключения вручную
			disableOnInteraction: false, //(false - после ручной смены автопрокрутка возобновится)
		},

		//ПЛАВНОСТЬ
		speed: 1200,

		// Куб
		effect: 'cube',
		// Используется с effect: cube
		cubeEffect: {
			// Настройки тени 		 
			slideShadows: false,
			shadow: false,
		}
	});	

	// Слайдер-swiper 
	new Swiper('.case-stages__video-slider', {

		// СТРЕЛКИ 
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next'
		},

		// НАВИГАЦИЯ
		// Буллиты, текущее положение, прогрессбар
		pagination: {
			el: '.swiper-pagination',
			// Буллиты (возможность клика)
			clickable: true,
			// Динамические буллиты (размер точек зависит от близости к крайнему слайду)
			dynamicBullets: true
		},

		// АВТОВЫСОТА (высота слайдера подстраивается под высоту контента в конкретном слайде; полезна, если присутствует текст разного объема)
		autoHeight: true,

		// КОЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА НА СТРАНИЦУ (можно указать дробь: 2,8 или 4,75)
		slidesPerView: 1, // можно поставить значение 'auto' и {width:auto; (см. scss)}

		//БЕСКОНЕЧНОЕ ПРОКРУЧИВАНИЕ (отключи scrollbar, slidesPerColumn не больше 1)
		loop: true,

		//ПЛАВНОСТЬ
		speed: 1200,

		// Куб
		effect: 'cube',
		// Используется с effect: cube
		cubeEffect: {
			// Настройки тени 		 
			slideShadows: false,
			shadow: false,
		}
	});	

});