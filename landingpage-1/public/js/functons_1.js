$('.c-slider-hero').slick({
    dots: false,
    speed: 300,
    arrows: false,
    mobileFirst: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '0px',
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  var b_sedes = {
    '01': 'madrid',
    '10': 'malaga',
    '02': 'valencia',
    '12': 'barcelona',
    '05': 'navarra',
    '04': 'sevilla',
    '08': 'granada',
    '03': 'zaragoza',
  };
  var b_programas = {
  '01':'<optgroup label="Administración y Dirección de Empresas"><option value="170">Bachelor\'s Degree in Business Administration and Management</option><option value="241">Bachelor\'s Degree in Business Administration and Management + Degree in Data Science</option><option value="242">Bachelor\'s Degree in Business Administration and Management + Degree in Entrepreneurship and Innovation</option><option value="172">Bachelor\'s Degree in Business Administration and Management + Degree in Global Marketing Management</option><option value="61">Grado Oficial en Administración y Dirección de Empresas</option><option value="234">Grado Oficial en Administración y Dirección de Empresas + Título Superior en Data Science</option><option value="62">Grado Oficial en Administración y Dirección de Empresas + Título Superior en Dirección de Marketing Global</option><option value="235">Grado Oficial en Administración y Dirección de Empresas + Título Superior en Emprendimiento e Innovación</option></optgroup><optgroup label="Marketing"><option value="216">Bachelor\'s Degree in Marketing</option><option value="243">Bachelor\'s Degree in Marketing + Degree in Data Science</option><option value="217">Bachelor\'s Degree in Marketing + Degree in Digital Business</option><option value="244">Bachelor\'s Degree in Marketing + Degree in Entrepreneurship and Innovation</option><option value="59">Grado Oficial en Marketing</option><option value="236">Grado Oficial en Marketing + Título Superior en Data Science</option><option value="237">Grado Oficial en Marketing + Título Superior en Emprendimiento e Innovación</option><option value="60">Grado Oficial en Marketing + Título Superior en Negocios Digitales</option><option value="21">Título Superior en Dirección de Marketing Global</option></optgroup><optgroup label="Digital Business"><option value="173">Grado Oficial en Dirección y Gestión de Empresas en el Ámbito Digital / Digital Business</option><option value="238">Grado Oficial en Dirección y Gestión de Empresas en el Ámbito digital / Digital Business + Título Superior en Data Science</option><option value="174">Grado Oficial en Dirección y Gestión de Empresas en el Ámbito Digital / Digital Business + Título Superior en Dirección de Marketing Global</option><option value="239">Grado Oficial en Dirección y Gestión de Empresas en el Ámbito digital / Digital Business + Título Superior en Emprendimiento e Innovación</option></optgroup><optgroup label="Comunicación / Publicidad y Relaciones Públicas"><option value="63">Grado Oficial en Publicidad y Relaciones Públicas</option><option value="240">Grado Oficial en Publicidad y Relaciones Públicas + Título Superior en Emprendimiento e Innovación</option><option value="64">Grado Oficial en Publicidad y Relaciones Públicas + Título Superior en Marketing</option></optgroup>','02':'<optgroup label="Administración y Dirección de Empresas"><option value="232">Bachelor\'s Degree in Business Administration and Management</option><option value="233">Bachelor\'s Degree in Business Administration and Management + Degree in Global Marketing Management</option><option value="23">Grado Oficial en Administración y Dirección de Empresas</option><option value="93">Grado Oficial en Administración y Dirección de Empresas + Título Superior en Dirección de Marketing Global</option></optgroup><optgroup label="Marketing"><option value="229">Degree in Global Marketing Management</option></optgroup><optgroup label="Gestión Comercial y Marketing"><option value="123">Grado Oficial en Gestión Comercial y Marketing</option><option value="122">Grado Oficial en Gestión Comercial y Marketing + Título Superior en Negocios Digitales</option></optgroup><optgroup label="Digital Business"><option value="193">Grado Oficial en Dirección y Gestión de Empresas en el Ámbito Digital / Digital Business</option><option value="195">Grado Oficial en Dirección y Gestión de Empresas en el Ámbito Digital / Digital Business + Título Superior en Dirección de Marketing Global</option></optgroup><optgroup label="Comunicación / Publicidad y Relaciones Públicas"><option value="27">Grado Oficial en Comunicación y Relaciones Públicas</option><option value="92">Grado Oficial en Comunicación y Relaciones Públicas + Título Superior en Marketing</option></optgroup><optgroup label="International Business"><option value="144">Grado Oficial en Negocios Internacionales / International Business</option><option value="145">Grado Oficial en Negocios Internacionales/International Business + Título Superior en Dirección de Marketing Global</option></optgroup>','03':'<optgroup label="Administración y Dirección de Empresas"><option value="221">Grado Oficial en Administración y Dirección de Empresas + Título Superior en Dirección de Marketing Global</option></optgroup><optgroup label="Marketing"><option value="175">Grado Oficial en Marketing</option><option value="214">Grado Oficial en Marketing + Título Superior en Negocios Digitales</option></optgroup>','04':'<optgroup label="Marketing"><option value="21">Título Superior en Dirección de Marketing Global</option></optgroup>','05':'<optgroup label="Marketing"><option value="21">Título Superior en Dirección de Marketing Global</option></optgroup>','08':'<optgroup label="Marketing"><option value="21">Título Superior en Dirección de Marketing Global</option></optgroup>','10':'<optgroup label="Marketing"><option value="21">Título Superior en Dirección de Marketing Global</option></optgroup>','12':'<optgroup label="Marketing"><option value="246">Bachelor\'s Degree in Marketing</option><option value="247">Bachelor\'s Degree in Marketing + Degree in Digital Business</option><option value="229">Degree in Global Marketing Management</option><option value="182">Grado Oficial en Marketing</option><option value="215">Grado Oficial en Marketing + Título Superior en Negocios Digitales</option><option value="21">Título Superior en Dirección de Marketing Global</option></optgroup>','000':''};
  
  var b_ncorto = {
  170: 'bbam',
  241: 'bbam+dds',
  242: 'bbam+dei',
  172: 'bbam+dgmm',
  61: 'grade',
  234: 'grade+tsds',
  62: 'grade+tsdmg',
  235: 'grade+tsei',
  232: 'bbam',
  233: 'bbam+dgmm',
  23: 'gradev',
  93: 'gradev+tsdmg',
  221: 'gradez+tsdmg',
  216: 'bm',
  243: 'bm+dds',
  217: 'bm+ddb',
  244: 'bm+dei',
  59: 'grmk',
  236: 'grmk+tsds',
  237: 'grmk+tsei',
  60: 'grmk+tsnd',
  21: 'tsdmg',
  229: 'dgmm',
  175: 'grmk',
  214: 'grmk+tsnd',
  246: 'bm',
  247: 'bm+ddb',
  182: 'grmk',
  215: 'grmk+tsnd',
  123: 'grcm',
  122: 'grcm+tsnd',
  173: 'grdb',
  238: 'grdb+tsds',
  174: 'grdb+tsdmg',
  239: 'grdb+tsei',
  193: 'grdb',
  195: 'grdb+tsdmg',
  63: 'grpub',
  240: 'grpub+tsei',
  64: 'grpub+tsm',
  27: 'grcom',
  92: 'grcom+tsm',
  144: 'grib',
  145: 'grib+tsdmg',
  };
  
  $(function() {
    $('#fecha').datepicker({
      language: "es",
      autoclose: true,
      minDate : "+3",
      beforeShowDay: function(date) {
        if (date.getMonth() == 7 && date.getDate() == 15) {
          // 15/08 es fiesta
          return [false, ''];
        } else {
          return $.datepicker.noWeekends(date);
        }
      },
      onSelect:  function(date) {
        if (date.substring(3,5)*1 == 8) {
            $('select[name="hora"]').html('<option value="">¿A qué hora?</option><option value="9:30h">9:30h</option><option value="10:00h">10:00h</option><option value="10:30h">10:30h</option><option value="11:00h">11:00h</option><option value="11:30h">11:30h</option><option value="12:00h">12:00h</option><option value="12:30h">12:30h</option><option value="13:00h">13:00h</option><option value="13:30h">13:30h</option>');
        } else if ($('input[name="IdCA"]').val() == 12 && date.substring(3,5)*1 >= 9){
            $('select[name="hora"]').html('<option value="">¿A qué hora?</option><option value="9:30h">9:30h</option><option value="10:00h">10:00h</option><option value="10:30h">10:30h</option><option value="11:00h">11:00h</option><option value="11:30h">11:30h</option><option value="12:00h">12:00h</option><option value="12:30h">12:30h</option><option value="13:00h">13:00h</option><option value="13:30h">13:30h</option><option value="16:00h">16:00h</option><option value="16:30h">16:30h</option><option value="17:00h">17:00h</option><option value="17:30h">17:30h</option><option value="18:00h">18:00h</option><option value="18:30h">18:30h</option><option value="19:00h">19:00h</option>');
        } else {
          if ($('input[name="IdCA"]').val() == '02') {
            $('select[name="hora"]').html('<option value="">¿A qué hora?</option><option value="9:30h">9:30h</option><option value="10:00h">10:00h</option><option value="10:30h">10:30h</option><option value="11:00h">11:00h</option><option value="11:30h">11:30h</option><option value="12:00h">12:00h</option><option value="12:30h">12:30h</option><option value="13:00h">13:00h</option><option value="13:30h">13:30h</option><option value="16:00h">16:00h</option><option value="16:30h">16:30h</option><option value="17:00h">17:00h</option><option value="17:30h">17:30h</option>');
          } else {
            $('select[name="hora"]').html('<option value="">¿A qué hora?</option><option value="9:30h">9:30h</option><option value="10:00h">10:00h</option><option value="10:30h">10:30h</option><option value="11:00h">11:00h</option><option value="11:30h">11:30h</option><option value="12:00h">12:00h</option><option value="12:30h">12:30h</option><option value="15:30h">15:30h</option><option value="16:00h">16:00h</option><option value="16:30h">16:30h</option><option value="17:00h">17:00h</option><option value="17:30h">17:30h</option>');
          }
        }
      }
    });
  
    custTabPanelDrop();
  });
  
  
  function contacto(id) {
    
    $('#nombre_contacto').html($('#n' + id).html());
    $('select[name="IdA"]').html('<option value="">Carrera*</option>' + b_programas[id]);
    
    $('input[name="IdCA"]').val(id);
    if (id == '03') {
      $('.tipo').hide(0);
      $('#carrera').addClass('textarea');
    } else {
      $('.tipo').show(0) && $('.tipo').css({'overflow' : 'visible' , 'display' : 'block'});
      $('#carrera').removeClass('textarea');
    }
    if (id == '03' || $('select[name="solicitud"]').val() == 'Información') {
      $('.diayhora').hide(0);
      $('#modalidad').hide(0);
    } else {
      if (id == '02') {
        $('select[name="hora"]').html('<option value="">¿A qué hora?</option><option value="9:30h">9:30h</option><option value="10:00h">10:00h</option><option value="10:30h">10:30h</option><option value="11:00h">11:00h</option><option value="11:30h">11:30h</option><option value="12:00h">12:00h</option><option value="12:30h">12:30h</option><option value="13:00h">13:00h</option><option value="13:30h">13:30h</option><option value="16:00h">16:00h</option><option value="16:30h">16:30h</option><option value="17:00h">17:00h</option><option value="17:30h">17:30h</option>');
        $('#modalidad').hide(0);
      } else {
        $('select[name="hora"]').html('<option value="">¿A qué hora?</option><option value="9:30h">9:30h</option><option value="10:00h">10:00h</option><option value="10:30h">10:30h</option><option value="11:00h">11:00h</option><option value="11:30h">11:30h</option><option value="12:00h">12:00h</option><option value="12:30h">12:30h</option><option value="15:30h">15:30h</option><option value="16:00h">16:00h</option><option value="16:30h">16:30h</option><option value="17:00h">17:00h</option><option value="17:30h">17:30h</option>');
        $('#modalidad').show(0);
        $('#modalidad').css({'overflow' : 'visible' , 'display' : 'block'});
      }
      $('.diayhora').show(0);
      $('.diayhora').css({'overflow' : 'visible' , 'display' : 'block'});
    }
    $('.c-form-university').show(0);
    $('html,body').animate({scrollTop: $('.c-form-university').position().top}, 800);
    $('#ok').hide(0);
      cambiar_campos();
  }
  
  function cambiar_campos() {
    if ($('input[name="IdCA"]').val() == '01' && ($('select[name="solicitud"]').val() == 'Prueba' || $('select[name="solicitud"]').val() == 'Prueba+Información')){
        $('select[name="IdA"]').html('<option value="">Carrera*</option><optgroup label="Marketing"><option value="21">Título Superior en Dirección de Marketing Global</option></optgroup>');
    } else {
        $('select[name="IdA"]').html('<option value="">Carrera*</option>' + b_programas['01']);
    }
    if ($('input[name="IdCA"]').val() == '03' || $('select[name="solicitud"]').val() == 'Información') {
      $('.diayhora').hide(0);
      $('#modalidad').hide(0);
    } else {
      if ($('input[name="IdCA"]').val() == '02') {
        $('#modalidad').hide(0);
      } else {
        $('#modalidad').show(0);
        $('#modalidad').css({'overflow' : 'visible' , 'display' : 'block'});
      }
      $('.diayhora').show(0);
      $('.diayhora').css({'overflow' : 'visible' , 'display' : 'block'});
    }
  }
  
  function soloNumeros(e){
    tecla = (document.all) ? e.keyCode : e.which;
    if((tecla < 48 || tecla > 57) && (tecla != 32 && tecla != 43 && tecla != 8 && tecla != 0)){
      return false;
    }
  }
  
  function validar(f) {
    error = 0;
    texto = '';
  
    if (f.smfr_enviando === undefined) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'smfr_enviando');
        input.setAttribute('value', 0);
        f.appendChild(input);
    }
  
    if (!f.relacion[0].checked && !f.relacion[1].checked && !f.relacion[2].checked) {
      texto += "- Padre/Madre|Tutor|Estudiante\n";
      error = 1;
    }
    if (f.nombre.value.search(/\S/) == -1) {
      texto += "- Nombre\n";
      f.nombre.focus();
      error = 1;
    }
    if (f.apellido1.value.search(/\S/) == -1) {
      texto += "- Apellido\n";
      f.apellido1.focus();
      error = 1;
    }
    if (f.id_pais.selectedIndex == 0) {
      texto += "- País de residencia\n";
      f.id_pais.focus();
      error = 1;
    }
    if (!f.bachillerato[0].checked && !f.bachillerato[1].checked) {
      texto += "- Tipo de bachillerato\n";
      error = 1;
    }
    if (f.email.value.search(/\S/) == -1) {
      texto += "- Email\n";
      f.email.focus();
      error = 1;
    } else if (f.email.value.search(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-z]{2,}$/i) == -1) {
      texto += "- Email con formato incorrecto\n";
      f.email.focus()
      error = 1;
    }
    if (f.telefono.value.search(/\S/) == -1) {
      texto += "- Teléfono\n";
      f.telefono.focus();
      error = 1;
    }
    if (f.curso.value.search(/\S/) == -1) {
    alert('Por favor, selecciona tu curso');
    f.curso.focus();
    }
    if (f.IdCA.value != '03' && f.solicitud.selectedIndex == 0) {
      texto += "- Tipo de solicitud\n";
      f.solicitud.focus();
      error = 1;
    }
    if (f.IdA.selectedIndex == 0) {
      texto += "- Carrera\n";
      f.IdA.focus();
      error = 1;
    }
    if (f.IdCA.value != '03' && f.solicitud.selectedIndex != 0 && f.solicitud.value != 'Información' && f.fecha.value.search(/\S/) == -1) {
      texto += "- Fecha de la prueba\n";
      f.fecha.focus();
      error = 1;
    }
    if (f.IdCA.value != '03' && f.solicitud.selectedIndex != 0 && f.solicitud.value != 'Información' && f.hora.selectedIndex == 0) {
      texto += "- Hora de la prueba\n";
      f.hora.focus();
      error = 1;
    }
    if (f.IdCA.value != '02' && f.IdCA.value != '03' && f.solicitud.selectedIndex != 0 && f.solicitud.value != 'Información' && f.modalidad.selectedIndex == 0) {
      texto += "- Modalidad\n";
      f.modalidad.focus();
      error = 1;
    }
    if (f.acepto.checked == false) {
      texto += "- Acepta la política de protección de datos\n";
      error = 1;
    }
    if (error == 1) {
      alert("Por favor, revisa los siguientes campos: \n\n"+texto);
    } else if (1 * f.smfr_enviando.value == 0) {
      f.smfr_enviando.value = 1;
      ga('send', 'event', 'grado', b_sedes[f.IdCA.value], f.IdA.selectedIndex == 0 ? 'admisiones_y_ayudas' : b_ncorto[f.IdA.value]);
  
      hashcash_create(f.validar_hashcash_admisiones);
      f.submit();
    }
  }