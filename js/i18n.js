;(function () {
	'use strict';

	var rsvpFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScoqBtRC6pdjJ6ABzbYaOacPK42xnatY0zmwK9HK4-o6LsW8A/viewform?usp=dialog';
	var mapsUrl = 'https://www.google.com/maps/place/Antigua+F%C3%A1brica+de+Harinas/@40.8418307,-3.4760695,17z/data=!3m1!4b1!4m6!3m5!1s0xd43c13c6627b697:0xc4e967e61bfe66b0!8m2!3d40.8418307!4d-3.4734892!16s%2Fg%2F11xy19zcc?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D';

	var translations = {
		es: {
			'meta.title': 'Boda Samuel & Celia',
			'meta.description': 'Página web con la información de la boda de Samuel y Celia',
			'nav.home': 'Home',
			'nav.place': 'Lugar',
			'nav.transport': 'Transporte',
			'nav.accommodation': 'Alojamientos',
			'nav.gifts': 'Regalos',
			'hero.subtitle': '¡Nos casamos!',
			'hero.rsvpButton': '¡Confírmanos tu asistencia!',
			'intro.title': '¡Tenemos una noticia maravillosa!',
			'intro.text': 'Después de 12 años juntos, de superar mil aventuras, de celebrar el amor en todas sus formas y de compartir la vida con nuestros dos gatitos, hemos decidido dar el gran paso…',
			'intro.date': '¡Nos casamos el sábado 15 de agosto de 2026!',
			'intro.invite': 'Y nada nos haría más felices que compartir este momento tan especial con todas las personas que queremos. ¿Te vienes?',
			'couple.samuel': 'Doctor (de los de verdad, con doctorado), músico retirado y entusiasta de Warhammer 40K, aunque la mayoría de sus miniaturas sigan aún sin pintar. Disfruta tanto de una tarde de sofá con peli y palomitas como de unas cervezas con los amigos. Con buen sentido del humor, algo cabezota y bastante organizado. Y si le conoces, ya sabes que en la boda no faltarán croquetas.',
			'couple.celia': 'Médico de profesión y música retirada de vocación. Amante de los animales en casi todas sus formas, fiestera (siempre dentro de un orden), adora a sus gatos y al sofá casi a partes iguales, y con un puntito de caos que la hace única. Con carácter fuerte y algo de mala leche, pero sobre todo cariñosa y entregada con los suyos. En pocas palabras: una persona tan ecléctica como especial.',
			'event.kicker': 'La celebración será en',
			'event.title': 'Lugar de la ceremonia',
			'event.day': 'Sábado 15',
			'event.month': 'Agosto, 2026',
			'event.description': 'La celebración tendrá lugar en la <strong>Antigua Fábrica de Harinas</strong>, situada en <a href="' + mapsUrl + '" target="_blank">Ctra. M-128, Km 1,3, 28189 Torremocha de Jarama, Madrid.</a> Se puede llegar fácilmente en coche y la finca cuenta con aparcamiento junto al recinto.',
			'transport.title': 'Transporte',
			'transport.subtitle': '¿Cómo llegar y volver?',
			'transport.description': 'El sitio es precioso y, aunque se puede llegar en coche, somos conscientes de que el lugar está un pelín retirado 😅. Para ponértelo fácil, tenemos pensado poner autobús de ida y vuelta.<br>Aún no tenemos horarios ni puntos de recogida: <strong>los añadiremos aquí más adelante</strong>.<br>En la confirmación de asistencia dinos si te interesa usar el bus.',
			'accommodation.title': 'Alojamiento',
			'accommodation.subtitle': 'El bus es un rollo... ¿No se puede pasar la noche ahí?',
			'accommodation.description': 'En la finca no hay habitaciones para quedarse a dormir (salvo una reservada para los novios 😜). Aun así, aunque Torremocha es un pueblo pequeño, ¡hay varias opciones cerca para pasar la noche! Seguro que sabes moverte por Booking, Airbnb y compañía, pero para ponértelo fácil te dejamos aquí una lista de alojamientos recomendados por la dueña de la finca.',
			'accommodation.option1': 'Casa Rural Los Diezmos - a 1 Km',
			'accommodation.option2': 'Hotel Rural Luna Llena - a 2 Km',
			'accommodation.option3': 'Casa Rural Melones - a 2 Km',
			'accommodation.option4': 'Apartamentos San Isidro - a 2 Km',
			'accommodation.option5': 'El Soportal de Uceda - a 1 Km',
			'accommodation.option6': 'Posada del Camino Real - a 7 Km',
			'accommodation.option7': 'Hotel Rural La Fuente - a 5 Km',
			'accommodation.option8': 'Casa Rural Antigua Botica - a 1 Km',
			'accommodation.option9': 'La Casona de Torremocha - a 1 Km',
			'rsvp.title': '¿Contamos contigo?',
			'rsvp.description': 'Por favor, rellena este formulario para confirmar tu asistencia. ¡Gracias!',
			'rsvp.button': 'Confirmar Asistencia',
			'gift.title': 'Regalo',
			'gift.description': 'Vuestra presencia en nuestro enlace es el mayor regalo que podemos recibir. Si además deseáis acompañarnos con un detalle para el comienzo de esta nueva etapa, os dejamos nuestro IBAN con todo nuestro cariño.',
			'gift.account': '<strong>Cuenta:</strong> ES21 1465 0100 91 1751832650'
		},
		en: {
			'meta.title': 'Samuel & Celia Wedding',
			'meta.description': 'Wedding information page for Samuel and Celia',
			'nav.home': 'Home',
			'nav.place': 'Venue',
			'nav.transport': 'Transport',
			'nav.accommodation': 'Accommodation',
			'nav.gifts': 'Gifts',
			'hero.subtitle': 'We are getting married!',
			'hero.rsvpButton': 'Please confirm your attendance!',
			'intro.title': 'We have wonderful news!',
			'intro.text': 'After 12 years together, after sharing countless adventures, celebrating love in all its forms, and building a life with our two cats, we have decided to take the big step…',
			'intro.date': 'We are getting married on Saturday, August 15, 2026!',
			'intro.invite': 'Nothing would make us happier than sharing this very special moment with the people we love. Will you join us?',
			'couple.samuel': 'Doctor (the real kind, with a PhD), retired musician, and Warhammer 40K enthusiast, even if most of his miniatures are still unpainted. He enjoys an afternoon on the sofa with a movie and popcorn just as much as beers with friends. He has a good sense of humor, is a bit stubborn, and is very organized. And if you know him, you already know there will be croquetas at the wedding.',
			'couple.celia': 'A doctor by profession and a retired musician at heart. She loves animals in almost all their forms, enjoys a good party (always within reason), adores her cats and the sofa almost equally, and has just the right touch of chaos that makes her unique. Strong-willed and a little fiery, but above all affectionate and devoted to her loved ones. In short: as eclectic as she is special.',
			'event.kicker': 'The celebration will be at',
			'event.title': 'Ceremony venue',
			'event.day': 'Saturday 15',
			'event.month': 'August, 2026',
			'event.description': 'The celebration will take place at <strong>Antigua Fábrica de Harinas</strong>, located at <a href="' + mapsUrl + '" target="_blank">Ctra. M-128, Km 1,3, 28189 Torremocha de Jarama, Madrid.</a> It is easy to get there by car, and the venue has parking next to the grounds.',
			'transport.title': 'Transport',
			'transport.subtitle': 'How do I get there and back?',
			'transport.description': 'The venue is beautiful and, although you can get there by car, we know it is a little out of the way 😅. To make things easier, we are planning to arrange a return bus service.<br>We do not have the times or pickup points yet: <strong>we will add them here later</strong>.<br>When you confirm your attendance, please tell us whether you would like to use the bus.',
			'accommodation.title': 'Accommodation',
			'accommodation.subtitle': 'The bus sounds like a hassle... Can I stay overnight there?',
			'accommodation.description': 'There are no rooms at the venue for guests to stay overnight (apart from one reserved for the bride and groom 😜). Even so, although Torremocha is a small town, there are several nearby options for spending the night. You probably know your way around Booking, Airbnb, and similar sites, but to make things easier we are leaving here a list of accommodations recommended by the venue owner.',
			'accommodation.option1': 'Casa Rural Los Diezmos - 1 km away',
			'accommodation.option2': 'Hotel Rural Luna Llena - 2 km away',
			'accommodation.option3': 'Casa Rural Melones - 2 km away',
			'accommodation.option4': 'Apartamentos San Isidro - 2 km away',
			'accommodation.option5': 'El Soportal de Uceda - 1 km away',
			'accommodation.option6': 'Posada del Camino Real - 7 km away',
			'accommodation.option7': 'Hotel Rural La Fuente - 5 km away',
			'accommodation.option8': 'Casa Rural Antigua Botica - 1 km away',
			'accommodation.option9': 'La Casona de Torremocha - 1 km away',
			'rsvp.title': 'Can we count on you?',
			'rsvp.description': 'Please fill out this form to confirm your attendance. Thank you!',
			'rsvp.button': 'Confirm Attendance',
			'gift.title': 'Gift',
			'gift.description': 'Your presence at our wedding is the greatest gift we could receive. If you would also like to contribute something as we begin this new chapter, we are leaving our IBAN here with all our love.',
			'gift.account': '<strong>Account:</strong> ES21 1465 0100 91 1751832650'
		}
	};

	var countdownWords = {
		es: {
			days: 'día',
			hours: 'hora',
			minutes: 'minuto',
			seconds: 'segundo',
			pluralLetter: 's'
		},
		en: {
			days: 'day',
			hours: 'hour',
			minutes: 'minute',
			seconds: 'second',
			pluralLetter: 's'
		}
	};
	var countdownInterval = null;

	function getInitialLanguage() {
		var params = new URLSearchParams(window.location.search);
		var queryLang = params.get('lang');
		var savedLang = getSavedLanguage();

		if (translations[queryLang]) {
			return queryLang;
		}

		if (translations[savedLang]) {
			return savedLang;
		}

		return 'es';
	}

	function getSavedLanguage() {
		try {
			return window.localStorage.getItem('weddingLanguage');
		} catch (error) {
			return null;
		}
	}

	function saveLanguage(lang) {
		try {
			window.localStorage.setItem('weddingLanguage', lang);
		} catch (error) {
			return;
		}
	}

	function translateTextNodes(lang) {
		var dictionary = translations[lang];

		document.title = dictionary['meta.title'];

		var description = document.querySelector('meta[name="description"]');
		if (description) {
			description.setAttribute('content', dictionary['meta.description']);
		}

		document.querySelectorAll('[data-i18n]').forEach(function (element) {
			var key = element.getAttribute('data-i18n');
			if (dictionary[key]) {
				element.textContent = dictionary[key];
			}
		});

		document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
			var key = element.getAttribute('data-i18n-html');
			if (dictionary[key]) {
				element.innerHTML = dictionary[key];
			}
		});
	}

	function updateLanguageButtons(lang) {
		document.querySelectorAll('[data-lang-option]').forEach(function (button) {
			var isActive = button.getAttribute('data-lang-option') === lang;

			button.classList.toggle('active', isActive);
			button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
		});
	}

	function createCountdownSection(countdown, className) {
		var section = document.createElement('div');
		var inner = document.createElement('div');
		var amount = document.createElement('span');
		var word = document.createElement('span');

		section.className = 'simply-section ' + className;
		amount.className = 'simply-amount';
		word.className = 'simply-word';

		inner.appendChild(amount);
		inner.appendChild(word);
		section.appendChild(inner);
		countdown.appendChild(section);

		return {
			amount: amount,
			word: word
		};
	}

	function getCountdownLabel(value, wordSet, key) {
		return value === 1 ? wordSet[key] : wordSet[key] + wordSet.pluralLetter;
	}

	function renderCountdown(lang) {
		var countdown = document.querySelector('.simply-countdown-one');
		var targetDate = new Date(2026, 7, 15, 0, 0, 0);
		var wordSet = countdownWords[lang];
		var sections;

		if (!countdown) {
			return;
		}

		if (countdownInterval) {
			window.clearInterval(countdownInterval);
		}

		countdown.innerHTML = '';
		sections = {
			days: createCountdownSection(countdown, 'simply-days-section'),
			hours: createCountdownSection(countdown, 'simply-hours-section'),
			minutes: createCountdownSection(countdown, 'simply-minutes-section'),
			seconds: createCountdownSection(countdown, 'simply-seconds-section')
		};

		function refresh() {
			var secondsLeft = Math.max(0, Math.floor((targetDate.getTime() - Date.now()) / 1000));
			var days = Math.floor(secondsLeft / 86400);
			var hours;
			var minutes;
			var seconds;

			secondsLeft = secondsLeft % 86400;
			hours = Math.floor(secondsLeft / 3600);
			secondsLeft = secondsLeft % 3600;
			minutes = Math.floor(secondsLeft / 60);
			seconds = secondsLeft % 60;

			sections.days.amount.textContent = days;
			sections.days.word.textContent = getCountdownLabel(days, wordSet, 'days');
			sections.hours.amount.textContent = hours;
			sections.hours.word.textContent = getCountdownLabel(hours, wordSet, 'hours');
			sections.minutes.amount.textContent = minutes;
			sections.minutes.word.textContent = getCountdownLabel(minutes, wordSet, 'minutes');
			sections.seconds.amount.textContent = seconds;
			sections.seconds.word.textContent = getCountdownLabel(seconds, wordSet, 'seconds');

			if (targetDate.getTime() <= Date.now() && countdownInterval) {
				window.clearInterval(countdownInterval);
			}
		}

		refresh();
		countdownInterval = window.setInterval(refresh, 1000);
	}

	function applyLanguage(lang) {
		var safeLang = translations[lang] ? lang : 'es';

		document.documentElement.setAttribute('lang', safeLang);
		saveLanguage(safeLang);

		translateTextNodes(safeLang);
		updateLanguageButtons(safeLang);
		renderCountdown(safeLang);
	}

	document.addEventListener('click', function (event) {
		var button = event.target.closest('[data-lang-option]');

		if (!button) {
			return;
		}

		event.preventDefault();
		applyLanguage(button.getAttribute('data-lang-option'));
	});

	window.weddingI18n = {
		applyLanguage: applyLanguage,
		getInitialLanguage: getInitialLanguage,
		rsvpFormUrl: rsvpFormUrl
	};

	document.addEventListener('DOMContentLoaded', function () {
		applyLanguage(getInitialLanguage());
	});
}());
