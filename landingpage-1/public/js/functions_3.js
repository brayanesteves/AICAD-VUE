var programas = {
    'madrid':'<optgroup label="Administración y Dirección de Empresas"><option value="170">Bachelor\'s Degree in Business Administration and Management</option><option value="241">Bachelor\'s Degree in Business Administration and Management + Degree in Data Science</option><option value="242">Bachelor\'s Degree in Business Administration and Management + Degree in Entrepreneurship and Innovation</option><option value="172">Bachelor\'s Degree in Business Administration and Management + Degree in Global Marketing Management</option><option value="61">Grado Oficial en Administración y Dirección de Empresas</option><option value="234">Grado Oficial en Administración y Dirección de Empresas + Título Superior en Data Science</option><option value="62">Grado Oficial en Administración y Dirección de Empresas + Título Superior en Dirección de Marketing Global</option><option value="235">Grado Oficial en Administración y Dirección de Empresas + Título Superior en Emprendimiento e Innovación</option></optgroup><optgroup label="Marketing"><option value="216">Bachelor\'s Degree in Marketing</option><option value="243">Bachelor\'s Degree in Marketing + Degree in Data Science</option><option value="217">Bachelor\'s Degree in Marketing + Degree in Digital Business</option><option value="244">Bachelor\'s Degree in Marketing + Degree in Entrepreneurship and Innovation</option><option value="59">Grado Oficial en Marketing</option><option value="236">Grado Oficial en Marketing + Título Superior en Data Science</option><option value="237">Grado Oficial en Marketing + Título Superior en Emprendimiento e Innovación</option><option value="60">Grado Oficial en Marketing + Título Superior en Negocios Digitales</option><option value="21">Título Superior en Dirección de Marketing Global</option></optgroup><optgroup label="Digital Business"><option value="173">Grado Oficial en Dirección y Gestión de Empresas en el Ámbito Digital / Digital Business</option><option value="238">Grado Oficial en Dirección y Gestión de Empresas en el Ámbito digital / Digital Business + Título Superior en Data Science</option><option value="174">Grado Oficial en Dirección y Gestión de Empresas en el Ámbito Digital / Digital Business + Título Superior en Dirección de Marketing Global</option><option value="239">Grado Oficial en Dirección y Gestión de Empresas en el Ámbito digital / Digital Business + Título Superior en Emprendimiento e Innovación</option></optgroup><optgroup label="Comunicación / Publicidad y Relaciones Públicas"><option value="63">Grado Oficial en Publicidad y Relaciones Públicas</option><option value="240">Grado Oficial en Publicidad y Relaciones Públicas + Título Superior en Emprendimiento e Innovación</option><option value="64">Grado Oficial en Publicidad y Relaciones Públicas + Título Superior en Marketing</option></optgroup>','valencia':'<optgroup label="Administración y Dirección de Empresas"><option value="232">Bachelor\'s Degree in Business Administration and Management</option><option value="233">Bachelor\'s Degree in Business Administration and Management + Degree in Global Marketing Management</option><option value="23">Grado Oficial en Administración y Dirección de Empresas</option><option value="93">Grado Oficial en Administración y Dirección de Empresas + Título Superior en Dirección de Marketing Global</option></optgroup><optgroup label="Marketing"><option value="229">Degree in Global Marketing Management</option></optgroup><optgroup label="Gestión Comercial y Marketing"><option value="123">Grado Oficial en Gestión Comercial y Marketing</option><option value="122">Grado Oficial en Gestión Comercial y Marketing + Título Superior en Negocios Digitales</option></optgroup><optgroup label="Digital Business"><option value="193">Grado Oficial en Dirección y Gestión de Empresas en el Ámbito Digital / Digital Business</option><option value="195">Grado Oficial en Dirección y Gestión de Empresas en el Ámbito Digital / Digital Business + Título Superior en Dirección de Marketing Global</option></optgroup><optgroup label="Comunicación / Publicidad y Relaciones Públicas"><option value="27">Grado Oficial en Comunicación y Relaciones Públicas</option><option value="92">Grado Oficial en Comunicación y Relaciones Públicas + Título Superior en Marketing</option></optgroup><optgroup label="International Business"><option value="144">Grado Oficial en Negocios Internacionales / International Business</option><option value="145">Grado Oficial en Negocios Internacionales/International Business + Título Superior en Dirección de Marketing Global</option></optgroup>','zaragoza':'<optgroup label="Administración y Dirección de Empresas"><option value="221">Grado Oficial en Administración y Dirección de Empresas + Título Superior en Dirección de Marketing Global</option></optgroup><optgroup label="Marketing"><option value="175">Grado Oficial en Marketing</option><option value="214">Grado Oficial en Marketing + Título Superior en Negocios Digitales</option></optgroup>','sevilla':'<optgroup label="Marketing"><option value="21">Título Superior en Dirección de Marketing Global</option></optgroup>','navarra':'<optgroup label="Marketing"><option value="21">Título Superior en Dirección de Marketing Global</option></optgroup>','granada':'<optgroup label="Marketing"><option value="21">Título Superior en Dirección de Marketing Global</option></optgroup>','malaga':'<optgroup label="Marketing"><option value="21">Título Superior en Dirección de Marketing Global</option></optgroup>','barcelona':'<optgroup label="Marketing"><option value="246">Bachelor\'s Degree in Marketing</option><option value="247">Bachelor\'s Degree in Marketing + Degree in Digital Business</option><option value="229">Degree in Global Marketing Management</option><option value="182">Grado Oficial en Marketing</option><option value="215">Grado Oficial en Marketing + Título Superior en Negocios Digitales</option><option value="21">Título Superior en Dirección de Marketing Global</option></optgroup>','000':''};
    
    var ncorto = {
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
    
    function cambia_carrera(id) {
      $('select[name="IdP"]').html('<option value="0">Carrera</option>' + programas[id]);
    }
    
    function mas_info(s) {
      $("select[name='sede']").val(s)
      cambia_carrera(s)
      $('html,body').animate({scrollTop: $('#form_contacto_grado').position().top}, 800);
    }
    
    function soloNumeros(e) {
      tecla = (document.all) ? e.keyCode : e.which;
      if((tecla < 48 || tecla > 57) && (tecla != 32 && tecla != 43 && tecla != 8 && tecla != 0)){
        return false;
      }
    }
    
    function validar_contacto_grado(n) {
      f = document.forms['form_contacto_grado' + n];
      if (f.smfr_enviando === undefined) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'smfr_enviando');
        input.setAttribute('value', 0);
        f.appendChild(input);
      }
      if ((n == '' || n == '_folleto') && (!f.relacion[0].checked && !f.relacion[1].checked && !f.relacion[2].checked)) {
        alert('Por favor, selecciona Padre/Madre|Tutor|Estudiante');
      } else if (f.nombre.value.search(/\S/) == -1) {
        alert('Por favor, introduce tu nombre');
        f.nombre.focus();
      } else if (f.apellido1.value.search(/\S/) == -1) {
        alert('Por favor, introduce tu primer apellido');
        f.apellido1.focus();
      } else if (f.email.value.search(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-z]{2,}$/i) == -1) {
        alert('Por favor, introduce el email');
        f.email.focus();
      } else if (f.id_pais.selectedIndex == 0) {
        alert('Por favor, selecciona tu país de residencia');
        f.id_pais.focus();
      } else if (f.telefono.value.search(/\S/) == -1) {
        alert('Por favor, introduce el teléfono');
        f.telefono.focus();
      } else if (f.curso.value.search(/\S/) == -1) {
        alert('Por favor, selecciona tu curso');
        f.curso.focus();
      } else if (f.sede.selectedIndex == 0) {
        alert('Por favor, selecciona tu campus');
        f.sede.focus();
      } else if ((n == '' || n == '_folleto') && f.IdP.selectedIndex == 0) {
        alert('Por favor, selecciona la carrera');
        f.IdP.focus();
      } else if (!f.privacidad.checked) {
        alert('Por favor, confirma que has leído y aceptado el texto legal');
      } else if (1 * f.smfr_enviando.value == 0) {
        f.smfr_enviando.value = 1;
        if (n == '') {
          $("#form_contacto_grado .butonEnviar").html('<a href="javascript:;" class="naranja">Enviando...</a>');
        } else {
          $("#form_contacto_grado" + n + " .btnEnviar").html('<p>Enviando...</p>');
        }
        hashcash_create(f.validar_hashcash_contacto_grado);
        $.ajax ({
          type: 'POST',
          dataType: "html",
          cache: false,
          contentType: "application/x-www-form-urlencoded; charset=iso-8859-1",
          data: $("#form_contacto_grado" + n).serialize(),
          url: 'codigo/codigo.php',
          success: function(data){
            // Todo OK
            var resultado = data.split('&');
            if (resultado[0] == 'ok') {
              ga('send', 'event', 'grado', f.sede.value, f.IdP ? ncorto[f.IdP.value] : 'generico');
    
              /* inicio de código ecommerce */
              ga('require', 'ecommerce');
              ga('ecommerce:addTransaction', {
                'id': '15647204177449528',     // Transaction ID. Required.
                'affiliation': 'Esic_web',   // Affiliation or store name.
                'revenue': '1000',               // Grand Total.
                'shipping': '0',                  // Shipping.
                'tax': '0'                     // Tax.
              });
              ga('ecommerce:addItem', {
                'id': '15647204177449528',                     // Transaction ID. Required.
                'name': f.IdP ? ncorto[f.IdP.value] : 'generico',    // Product name. Required.
                'sku': f.sede.value,                 // SKU/code.
                'category': 'grado',         // Category or variation.
                'price': '1000',                 // Unit price.
                'quantity': '1'                   // Quantity.
              });
              ga('ecommerce:send');
              ga('ecommerce:clear');
              /* fin de código ecommerce */
    
              // PIXEL CONVERSIÓN TRB
              try { var script = document.createElement('script'); script.type = 'text/javascript'; script.src = '//bucket.cdnwebcloud.com/adg-esic-conv11.js?z=' + Math.random(); script.async = true; script.defer = true; document.getElementsByTagName('head')[0].appendChild(script); } catch(n_o_outer_inform) { console.log('n_o_outer_inform:' + n_o_outer_inform.message); }
    
              var script2 = document.createElement('script');
              script2.type = 'text/javascript';
              script2.src = '//pixel.mathtag.com/event/js?mt_id=1419511&mt_adid=225420&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3=';
              script2.async = true;
              document.getElementsByTagName('head')[0].appendChild(script2);
    
              if (n == '_folleto') {
                $('#enlace_folleto').attr('href', resultado[1])
              }
    
              $('#form_contacto_grado' + n).hide();
              $('#gracias' + n).show();
            } else {
              alert('Lo sentimos, se ha producido un error.\nVuelve a intentarlo més tarde.');
            }
          },
          error: function(data) {
            alert('Lo sentimos, se ha producido un error.\nVuelve a intentarlo més tarde');
          }
        });
      }
      return false;
    }