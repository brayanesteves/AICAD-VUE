$(document).ready(function() {
	// ********************************** menu access **********************************

	$('#navAccesosDrop').click(function(e) {
		e.preventDefault();
		$('.js-nav').toggleClass('u-display__none');
		$('#navAccesosDrop').toggleClass('a-rotate-180deg--before');
	});


	// ********************************** menu principal **********************************

	$('#menuIcon').click(function(e) {
		e.preventDefault();
		$('.js-nav-menu').toggleClass('u-display__none');
		$('.content-lines').toggleClass('close-hamburguer');
	});


	// ********************************** Buscador **********************************

	$('#lupa').click(function(e) {
		e.preventDefault();
		$('.c-form-search-js').toggleClass('u-display__none');
	});

	// ********************************** dropdown filtro **********************************


	$('#filterButton').click(function (e) {
		e.preventDefault();
		$('.js-drop-none').toggleClass('js-drop-none__active');
		$('.c-filtro-university .background-grado').toggleClass('background-grado__active')
		$('.c-admision-cta').toggleClass('u-margin-top-null');
		$('#introFiltro').toggleClass('u-padding-top-sm');


	});


	// **********************************custom dropdown filtro **********************************




	// $('#filterButton_tema').click(function (e) {
	//   e.preventDefault();
	//   $('.c-filter-content-tematica').toggleClass('c-filter-content-tematica_active');
	//   $('#filterButton_tema').toggleClass('active');
	// });



	// ********************************** dropdown menu escritorio **********************************

	$('.c-menu-campus__title').click(function(e) {
		e.preventDefault();
		$('.c-menu-campus__list').toggleClass('u-block');
	});

	// ********************************** top scroll button **********************************


	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
			//Click event to scroll to filtro
	// $('.scrollfiltro').click(function(){
	//   $('html,body').animate({scrollTop: $('#resultado-filtro').position().top}, 800);
	//   return false;
	// });

	// ****************************** mosca sobre contacto****************************


	// $(window).scroll(function () {
	//   var windowTop = $(document).scrollTop();
	//   var windowBottom = windowTop + window.innerHeight;
	//   var elementPositionTop = $('#form_buzon__university').offset().top;
	//   var elementPositionBottom = elementPositionTop + $('#form_buzon__university').height();

	//   if (windowBottom >= elementPositionTop) {
	//     $('.sobreIcon').addClass("u-display__none--hard");
	//     $('.sobreIcon').attr('style', 'border-bottom:none');
	//   }
	//   else {
	//     $('.sobreIcon').removeClass("u-display__none--hard");
	//   }
	// });

	//*******desaparacen moscas en seccion a tu disposicion -becas y ayudas****************



		$(window).scroll(function () {
		var windowTop = $(document).scrollTop();
		var windowBottom = windowTop + window.innerHeight;
		if ($('#formUniversityGeneral').length > 0){
			var elementPositionTop = $('#formUniversityGeneral').offset().top;
		}

		var elementPositionBottom = elementPositionTop + $('#formUniversityGeneral').height();

		if (windowBottom >= elementPositionTop) {
			$('.sobreIcon').addClass("u-display__none--hard");
			$('.fly').addClass("u-display__none--hard");

		}
		else {
			$('.sobreIcon').removeClass("u-display__none--hard");
			$('.fly').removeClass("u-display__none--hard");
		}
	});

// form material design

$(document).bind('change', function(e){
	if( $(e.target).is(':invalid') ){
			$(e.target).addClass('invalid-input');
	} else {
			$(e.target).removeClass('invalid-input');
	}
});




	// dropdown grado

	$('#buttonEsicExperience').click(function (e) {
		e.preventDefault();
		$('.c-experience__head .description .description--none').toggleClass('active');
	});


		// dropdown grado - descripcion ficha

	$('#buttonEsicExperienceFicha').click(function (e) {
		e.preventDefault();
		$('.list-description__container .items-no-visible').toggleClass('active');
	});




	// mostrar un enlace u otro en el icono de contacto del nav
	if($('body').hasClass('c-page-university')){
		$('#popupPhoneInstitucional').remove();
		$('#footerNavSedesInstitucion').attr('style', 'display:none');
		var id = $('#ContactFixButton');
		id.attr("class", "sobreIcon");
		id.removeAttr("data-modal");
		id.attr("href", "#formUniversityGeneral");
		id.attr("data-ancla", "formUniversityGeneral");
	} else if ($('body').hasClass('c-page-institucional')){
		$('#popupPhoneUniversity').remove();
		$('#footerNavSedesUniversity').attr('style', 'display:none');
		custPopup();
	}else{
		$('#popupPhoneUniversity').remove();
		$('#footerNavSedesUniversity').attr('style', 'display:none');
		custPopup();
	}



	// ancla mosca sobre

	$('.sobreIcon').click(function (e) {
		e.preventDefault();		//evitar el eventos del enlace normal
		var strAncla = $(this).attr('href'); //id del ancla
		$('body,html').stop(true, true).animate({
			scrollTop: $(strAncla).offset().top
		}, 1000);

	});

//ancla financiacion
	$('.ayuda-financiacion').click(function (e) {
		e.preventDefault();   //evitar el eventos del enlace normal
		var strAncla = $(this).attr('href'); //id del ancla
		$('body,html').stop(true, true).animate({
			scrollTop: $(strAncla).offset().top
		}, 1000);

	});


	// checkmark filtro
	$('.c-radios').click(function(e) {
		e.preventDefault();
		if ($(this).find(".checkmark").hasClass('checkmark__active')) {
			$(this).find(".checkmark").removeClass('checkmark__active');
			$(this).find("input[type='checkbox']").prop('checked', false);
		} else {
			$(this).find(".checkmark").addClass('checkmark__active');
			$(this).find("input[type='checkbox']").prop('checked', true);
		}
	});


// IE VERSION


	// Get IE or Edge browser version
	var version = detectIE();

	if (version === false) {
		$('#IE').addClass('');
	} else if (version >= 12) {
		$('#IE').addClass('Edge' + version);
	} else {
	$('#IE').addClass('IE' + version);
	}

	/**
	 * detect IE
	 * returns version of IE or false, if browser is not Internet Explorer
	 */
	function detectIE() {
		var ua = window.navigator.userAgent;

		// Test values; Uncomment to check result ?

		// IE 10
		// ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

		// IE 11
		// ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

		// Edge 12 (Spartan)
		// ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

		// Edge 13
		// ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			// IE 10 or older => return version number
			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}

		var trident = ua.indexOf('Trident/');
		if (trident > 0) {
			// IE 11 => return version number
			var rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}

		var edge = ua.indexOf('Edge/');
		if (edge > 0) {
			// Edge (IE 12+) => return version number
			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}

		// other browser
		return false;
	}



	// DROP BECAS Y AYUDAS

	$('#dropInfoBecas').click(function(e){
		e.preventDefault();
		// $(this).parents('.c-seleccion-content').next('#contentBecas').toggleClass('u-block');
		$('body,html').stop(true, true).animate({
			scrollTop: $('#dropInfoBecas').offset().top
		}, 600);
	});



});// document ready





// ********************************** scroll fix menu  **********************************

// $(window).resize(function() {
		$(window).on("scroll", function(e){

			if ($(window).scrollTop() > 0 && $( window ).width() < 970 ) {
				$('.c-nav-principal').addClass("u-fixed");
			} else {
				$('.c-nav-principal').removeClass("u-fixed");
			}

		});
// });

// ********************************** hack de IOS porque el formulario casca en un popup  **********************************

//target ios
var isMobile = {
		iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		}
}
if(isMobile.iOS()) {
			jQuery('body').addClass('apple-ios');
}


// ********************************** pop up  **********************************

function custPopup(){
  var cargar = {
    popup__buzon: '<iframe src="calidad/buzon_virtual.php" frameborder="0" class="c-iframe" style="margin-bottom: 0"></iframe>',
    popup__privacidad: '<iframe src="https://www.esic.edu/legalidad.php?id=1" frameborder="0" class="c-iframe"></iframe>',
    popup__legales: '<iframe src="https://www.esic.edu/legalidad.php" frameborder="0" class="c-iframe"></iframe>',
    popup__legalidad__moscas: '<iframe src="https://www.esic.edu/legalidad.php?id=1" frameborder="0" class="c-iframe" style="margin-bottom: 0"></iframe>'
  };
	$('.modal__btn').click(function(event) {
		event.preventDefault();
		var modalId = $(this).attr('data-modal');
    if (cargar[modalId.replace('#', '')]) {
      $(modalId).find('section').html(cargar[modalId.replace('#', '')]);
    }
		$('body').append('<div class="modal__filter"></div>');
		$('body').addClass('modal__open');
		$(modalId).fadeIn();
		$('.modal__filter').fadeIn();
	});

	$('.close').click(function() {
		$('body').removeClass('modal__open');
		$(this).closest('.modal__wrapp').fadeOut();
		$('.modal__filter').fadeOut(function() {
			$('.modal__filter').remove();
		})
    if ($(this).closest('.c-popup-video')) {
      var iframe_video = $(this).closest('.c-popup-video').find('iframe');
      $(iframe_video).attr('src', $(iframe_video).attr('src'));
    }
	})
}


// **********************************  Modal fichas carreras **********************************


function showAnimatedWindow(target) {
	$('body').css('overflow', 'hidden');
	target = $(target.attr('href'));
	target.show();
	target.css('z-index', 999);
	target.addClass("slideInRight");
}

//MOSTRAR VENTANA
$(document).on('click', '.btn-animated', function (event) {
	event.preventDefault();
	var data = $(this).attr('rel').split('_');
	$('#carrera_modal').load('carreras-universitarias_carrera_modal_ajax.php', 'cat=' + data[0] + (data[1] ? '&lugar=' + data[1] : ''));
	$('.animated').removeClass("slideOutRight");
	showAnimatedWindow($(this));
});


//OCULTAR VENTANA
$(document).on('click', '.animated a.close__modal', function (event) {
	event.preventDefault();
	var target = $(this).closest('.animated');
	target.removeClass("slideInRight");
	target.addClass("slideOutRight");
	setTimeout(function () {
		target.hide();
		target.css('z-index', 'auto');
		target.removeClass("slideOutRight");
		$('#carrera_modal').html('');
		$('body').css('overflow', 'auto');
	}, 1000);
});


// // dropdown mobile tab desktop

// function custTabPanelMobileDrop() {

//   if ($(window).width() > 767) {

//     $('.cust__tabs__drop').find('.cust__acordeon .item-body').show();

//     var $wrapper = $('.cust__tabs__drop');
//     $allTabs = $wrapper.find('.tab__content > div');
//     $tabMenu = $wrapper.find('.tab__menu .item');
//     $allTabs.not(':first-of-type').hide();
//     $tabMenu.filter(':first-of-type').find(':first').width('100%')


//     $tabMenu.each(function (i) {

//       $(this).attr('data-tab', 'tabDrop' + i);

//     });


//     $allTabs.each(function (i) {

//       $(this).attr('data-tab', 'tabDrop' + i);

//     });

//     $tabMenu.on('click', function () {

//       var dataTab = $(this).data('tab'),
//         $getWrapper = $(this).closest($wrapper);
//       $getWrapper.find($tabMenu).removeClass('active');
//       $(this).addClass('active');
//       $getWrapper.find('.tab__content > div').hide();
//       $getWrapper.find('.tab__content > div').filter('[data-tab=' + dataTab + ']').show();
//     });

//   } else {

//     var linkDrop = $('.item-heading');
//     $('.cust__acordeon').addClass('u-block');
//     for (var i = 0; i < linkDrop.length; i++){
//       linkDrop[i].onclick = function (event) {
//         event.preventDefault();

//         $(this).parents('.cust__acordeon').find('.item-body').toggleClass('u-block');
//         $(this).toggleClass('item-heading__active');
//     }
//     }
//   }
// }


 // **********************************custom dropdown filtro **********************************



function toggleFilter(obj){
		$(obj).siblings().toggleClass('c-filter-content-tematica_active');
		$(obj).toggleClass('active');
	}




	// dropdown desktop becas y ayudas**********************************************************

function custTabPanelDrop() {

		var linkDrop = $('.item-heading');
		// $('.cust__acordeon').addClass('u-block');
		for (var i = 0; i < linkDrop.length; i++){
			linkDrop[i].onclick = function (event) {
				event.preventDefault();

				$(this).parents().siblings('.item-body').toggleClass('u-block');
				$(this).toggleClass('item-heading__active');

		}
	}
}

	 // ********************************** tabs **********************************

// var $wrapper = $('.c-tab'),
//     $allTabs = $wrapper.find('.c-tab__content > div'),
//     $tabMenu = $wrapper.find('.c-tab__menu button');
//     // $line = $('<div class="line"></div>').appendTo($tabMenu);

// $allTabs.not(':first-of-type').hide();
// // $tabMenu.filter(':first-of-type').find(':first').width('100%')

// $tabMenu.each(function (i) {
//     $(this).attr('data-tab', 'tab' + i);
// });

// $allTabs.each(function (i) {
//     $(this).attr('data-tab', 'tab' + i);
// });

// $tabMenu.on('click', function () {

//     var dataTab = $(this).data('tab'),
//         $getWrapper = $(this).closest($wrapper);

//     $getWrapper.find($tabMenu).removeClass('active');
//     $(this).addClass('active');

//     $getWrapper.find($allTabs).hide();
//     $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
// });

	// ********************************** tabs **********************************

//tab filtro becas y ayudas
$('.filtro-campus > div').hide();

$('.filtro-carrera li>a').click(function(e){
	e.preventDefault();
	var $this = $(this),
			tabgroup = '#'+$this.parents('.filtro-carrera').data('tabgroup'),
			others = $this.closest('li').siblings().children('a'),
			target = $this.attr('href');
	others.removeClass('active');
	$this.addClass('active');
	$(tabgroup).children('div').hide();
	$(target).show();
	$('html,body').animate({scrollTop: $('#tab-group-filtro').position().top}, 800);

	$('#resultado-filtro').removeClass('u-block');
})



// tab principal ficha

$('.c-tab__content > div').hide();
$('.c-tab__content > div:first-of-type').show();
$('.c-tab__menu li>a').click(function(e){
	e.preventDefault();
		var $this = $(this),
				tabgroup = '#'+$this.parents('.c-tab__menu').data('tabgroup'),
				others = $this.closest('li').siblings().children('a'),
				target = $this.attr('href');
				if($(window).width() > 767){
					others.removeClass('active').parents('li').show();
					$this.addClass('active').parents('li').show();
					$(tabgroup).children('div').hide();
					$(target).show();

				} else{
					others.removeClass('active').parents('li').show();
					$this.addClass('active').parents('li').show();
					$(tabgroup).children('div').hide();
					$(target).show();
				}

});

	// tab skills en ficha

var $wrapper = $('.c-tab-2'),
		$allTabs = $wrapper.find('.c-tab__content > div'),
		$tabMenu = $wrapper.find('.c-tab__menu button');
		// $line = $('<div class="line"></div>').appendTo($tabMenu);

$allTabs.not(':first-of-type').hide();
// $tabMenu.filter(':first-of-type').find(':first').width('100%')

$tabMenu.each(function (i) {
		$(this).attr('data-tab', 'tab' + i);
});

$allTabs.each(function (i) {
		$(this).attr('data-tab', 'tab' + i);
});

$tabMenu.on('click', function () {

		var dataTab = $(this).data('tab'),
				$getWrapper = $(this).closest($wrapper);

		$getWrapper.find($tabMenu).removeClass('active');
		$(this).addClass('active');

		$getWrapper.find($allTabs).hide();
		$getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();

});

//tab plan de estudios dentro de modal en ficha

$('.c-tab__content_modal > div').hide();
$('.c-tab__content_modal > div:first-of-type').show();
$('.c-tab__menu_modal a').click(function(e){
	e.preventDefault();
		var $this = $(this),
				tabgroup = '#'+$this.parents('.c-tab__menu_modal').data('tabgroup'),
				others = $this.closest('li').siblings().children('a'),
				target = $this.attr('href');
					others.removeClass('active').parents();
					$this.addClass('active').parents();
					$(tabgroup).children('div').hide();
					$(target).show();

});

// tab que cambia a dropdown en ficha

function TabToDropCustom(){
	 if ($(window).width() > 767) {

		$('.tabgroup > div').hide();
		$('.tabgroup > div:first-of-type').show();
		$('.tabs a').click(function(e){
			e.preventDefault();
				var $this = $(this),
						tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
						others = $this.closest('li').siblings().children('a'),
						target = $this.attr('href');
				others.removeClass('active');
				$this.addClass('active');
				$(tabgroup).children('div').hide();
				$(target).show();

		})
	 } else{
			$('.tab_drawer_heading').click(function(e) {
				if
					($('.tab_drawer_heading').hasClass("d_active")){
					$(".tab_drawer_heading").removeClass("d_active");
					var d_activeTab = $(this).attr("rel");
					 $("#"+d_activeTab).removeClass('u-block');

				} else{
					$(this).addClass("d_active");
				$(".tab_drawer_heading").siblings(".tab_content").toggleClass('u-block');
				var d_activeTab = $(this).attr("rel");
			$("#"+d_activeTab).addClass('u-block');

				}

		})
		}
	}


// Las moscas tienen su archivo propio de js en raiz de carpeta

/*MOSCAS APARECER - DESAPARECER*/

	function moscasInOut(){
		$('.fly__item--1gr').click(function(e){
			e.preventDefault();
			$('.fly').toggleClass("mosca-in");
			$('.fly').find(".fly__item--1gr img").toggleClass("active__fly--rotate");
		});

	}

// /* MOSCAS NUEVAS DE GRADO*/
// function moscasGrPopup(){
//   $('.modal__btn').click(function(event) {
//     event.preventDefault();
//     var modalId = $(this).attr('data-modal');
//     $('body').append('<div class="modal__filter"></div>');
//     $('body').addClass('modal__open');
//     $(modalId).fadeIn();
//     $('.modal__filter').fadeIn();
//   });

//   $('.cerrar-pop-up-moscas').click(function() {
//     $('body').removeClass('modal__open');
//     $(this).closest('.modal__wrapp').fadeOut();
//     $(this).closest('.form__cv').fadeOut();
//     $('.modal__filter').fadeOut(function() {
//       $('.modal__filter').remove();
//     })
//   })
// }



// MOSTRAR PLANES ESTUDIO
$(document).on('click', '.btn-animated-plan', function (event) {
	event.preventDefault();
	var data = $(this).attr('href');
	$('.animated').removeClass("slideOutRight");
	showAnimatedWindow($(this));
});


//OCULTAR VENTANA
$(document).on('click', '.animated a.close__modal', function (event) {
	event.preventDefault();
	var target = $(this).closest('.animated');
	target.removeClass("slideInRight");
	target.addClass("slideOutRight");
	setTimeout(function () {
		target.hide();
		target.css('z-index', 'auto');
		target.removeClass("slideOutRight");
		$('#carrera_modal').html('');
		$('body').css('overflow', 'auto');
	}, 1000);
});

// PAGE PRECIOS - BAJAR AL FORMULARIO

$('.bajaraformulario').click(function(e){
	e.preventDefault();
	// $(this).parents('.c-seleccion-content').next('#contentBecas').toggleClass('u-block');
	$('body,html').stop(true, true).animate({
		scrollTop: $('#formUniversityGeneral').offset().top-70
	}, 800);
});
