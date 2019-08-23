$(document).ready(function(){

    moscasInOut()

      $('.modal__btn').click(function(event) {
          event.preventDefault();
          var modalId = $(this).attr('data-modal');
          if (modalId == '#popup__legalidad__moscas') {
              $(modalId).find('section').html('<iframe src="legalidad.php?id=1" frameborder="0" class="c-iframe" style="margin-bottom: 0"></iframe>');
          }
          $('body').append('<div class="modal__filter"></div>');
          $('body').addClass('modal__open');
          $(modalId).fadeIn();
          $('.modal__filter').fadeIn();
      });

      $('.cerrar-pop-up-moscas').click(function() {
          $('body').removeClass('modal__open');
          $(this).closest('.modal__wrapp').fadeOut();
          $(this).closest('.form__cv').fadeOut();
          $('.modal__filter').fadeOut(function() {
              $('.modal__filter').remove();
          })
      })


  })


  function ancla_moscas_grado(mosca){
      if (mosca == 'admision'){
          $('select[name="solicitud"]').val('Prueba');
      } else if (mosca == 'informacion'){
          $('select[name="solicitud"]').val('Información');
      }

      $('body,html').stop(true,true).animate({
              scrollTop: $('#contacto').offset().top
      },1000);
  }

  
function carga_contacto(datos) {
	$.ajax ({
		type: 'GET',
		dataType: "html",
		cache: false,
		contentType: "application/x-www-form-urlencoded; charset=iso-8859-1",
		data: datos || {idarea: 0, IdSA: 0},
		url: '//www.esic.edu/contacto_ajax.php',
		success: function(data){
			$('#contenedor_form').html(data);
			custPopup();
		}
	});
}

carga_contacto();

function hashcash_create(c){for(var d=!1,h="",a="";!d;)a=c.value+""+randomString(20),h=SHA1(a),d="00"==h.substring(0,2);c.value=a}function randomString(c){for(var d="",h=0;h<c;h++)d+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(Math.floor(61*Math.random()));return d} function SHA1(c){function d(a,b){return a<<b|a>>>32-b}function h(a){var b="",c,d;for(c=7;0<=c;c--)d=a>>>4*c&15,b+=d.toString(16);return b}var a,e,k=Array(80),p=1732584193,q=4023233417,r=2562383102,s=271733878,t=3285377520,b,f,g,l,m;c=function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):(127<d&&2048>d?b+=String.fromCharCode(d>>6|192):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128)),b+=String.fromCharCode(d& 63|128))}return b}(c);b=c.length;var n=[];for(a=0;a<b-3;a+=4)e=c.charCodeAt(a)<<24|c.charCodeAt(a+1)<<16|c.charCodeAt(a+2)<<8|c.charCodeAt(a+3),n.push(e);switch(b%4){case 0:a=2147483648;break;case 1:a=c.charCodeAt(b-1)<<24|8388608;break;case 2:a=c.charCodeAt(b-2)<<24|c.charCodeAt(b-1)<<16|32768;break;case 3:a=c.charCodeAt(b-3)<<24|c.charCodeAt(b-2)<<16|c.charCodeAt(b-1)<<8|128}for(n.push(a);14!=n.length%16;)n.push(0);n.push(b>>>29);n.push(b<<3&4294967295);for(c=0;c<n.length;c+=16){for(a=0;16>a;a++)k[a]= n[c+a];for(a=16;79>=a;a++)k[a]=d(k[a-3]^k[a-8]^k[a-14]^k[a-16],1);e=p;b=q;f=r;g=s;l=t;for(a=0;19>=a;a++)m=d(e,5)+(b&f|~b&g)+l+k[a]+1518500249&4294967295,l=g,g=f,f=d(b,30),b=e,e=m;for(a=20;39>=a;a++)m=d(e,5)+(b^f^g)+l+k[a]+1859775393&4294967295,l=g,g=f,f=d(b,30),b=e,e=m;for(a=40;59>=a;a++)m=d(e,5)+(b&f|b&g|f&g)+l+k[a]+2400959708&4294967295,l=g,g=f,f=d(b,30),b=e,e=m;for(a=60;79>=a;a++)m=d(e,5)+(b^f^g)+l+k[a]+3395469782&4294967295,l=g,g=f,f=d(b,30),b=e,e=m;p=p+e&4294967295;q=q+b&4294967295;r=r+f&4294967295; s=s+g&4294967295;t=t+l&4294967295}m=h(p)+h(q)+h(r)+h(s)+h(t);return m.toLowerCase()};
function sub(s) {
  var cachos = s.split('_');
  $('[data-tabgroup="first-tab-group"] li a[href="#tab1"]').removeClass('active');
  $('#tab1').hide();
  $('[data-tabgroup="first-tab-group"] li a[href="#tab2"]').addClass('active');
  $('#tab2').show(function() {
    $('[data-tabgroup="ficha-tab-group"] li a[href="#' + cachos[0] + '"]').click();
    if (cachos.length > 1) {
      $('#'+s).parents().siblings('.item-body').toggleClass('u-block');
      $('#'+s).toggleClass('item-heading__active');
    }
    $('html,body').animate({scrollTop: $('#'+s).position().top}, 800);
  });
}
