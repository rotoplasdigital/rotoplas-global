/* ==============================================================
/*	INCIALIZAR includeHTML
/* ============================================================== */
includeHTML()


/* ==============================================================
/*	i18n
/* ============================================================== */
jQuery(document).ready(function() {
	console.log('App:rdy');

	// actualizar textos
	var update_texts = function() { 
		$('body').i18n()
	}

	// cambio de opcion en el selector
	if(Cookies.get('rtplang') == 'en') {
		document.getElementById("navegacion-idioma").value = 'en'
	}
	if(Cookies.get('rtplang') == 'es') {
		document.getElementById("navegacion-idioma").value = 'es'
	}

	// verificacion de idioma en cookie
	if(Cookies.get('rtplang')){
		//console.log('cookie:lang:si')
		$.i18n().locale = Cookies.get('rtplang')
		update_texts()
	} else {
		//console.log('cookie:lang:no')
		Cookies.set('rtplang', 'es', { expires: 365 })
		update_texts()
	}

	// carga de los paquetes de idiomas
	$.i18n().load({
		'es': 'http://127.0.0.1:5500/js/languages/es.json',
		'en': 'http://127.0.0.1:5500/js/languages/en.json'
	}).done(function(){
		console.log('load:done')
		update_texts()
	})

	// selector de idioma
	$("#navegacion-idioma").change(function(){
		//console.log('idioma:'+$(this).val())
		selectedLang = $(this).val()
		Cookies.set('rtplang', selectedLang, { expires: 365 })
		$.i18n().locale = selectedLang
		update_texts()
	})

	//
	$('#locationSelector').change(function(){
		console.log('change')
		if((this).value == 'br') {
			console.log((this).value)
		} else if((this).value == 'us') {
			console.log((this).value)
			window.open('https://acuantia.com', '_blank')
		}
		$("#locationSelector").val('')
	})
})


/* ==============================================================
/*	HIDE MENU
/* ============================================================== */
	
	//var logo = document.getElementById('navegacion-logo')
	//var logoMovil = document.getElementById('navegacion-logo-movil')
	var menu = document.getElementById('navegacion')
	var prevScrollpos = window.pageYOffset
	window.onscroll = function() {
		if (window.pageYOffset > 0) {
			menu.classList.add('scrolled-alternate')
			//logo.classList.remove('logo-oculto')
			//logoMovil.classList.remove('logo-oculto')
		} else {
			menu.classList.remove('scrolled-alternate')
			//logo.classList.add('logo-oculto')
			//logoMovil.classList.add('logo-oculto')
		}
		var currentScrollPos = window.pageYOffset;
		var currentWidth = document.documentElement.clientWidth;
		if (prevScrollpos > currentScrollPos) {
			menu.classList.remove('scrolled-down')
			menu.classList.add('scrolled-up')
		} else {
			menu.classList.remove('scrolled-up')
			menu.classList.add('scrolled-down')
		}
		prevScrollpos = currentScrollPos
	}

	/* 
		var toggler = document.getElementById('navegacion-toggler')
		toggler.onclick = function() {
			if ( window.pageYOffset == 0 && menu.classList.contains('scrolled-alternate') ) {
				menu.classList.remove('scrolled-alternate')
			} else {
				menu.classList.add('scrolled-alternate')
			}
			
		}
	*/
/* hide menu */