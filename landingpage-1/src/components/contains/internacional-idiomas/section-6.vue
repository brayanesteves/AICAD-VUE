<template>
  <section class="c-form-university" id="formUniversityGeneral">
    <div class="wrapper">
      <p id="gracias" style="display:none; font-size:30px; color: #ffffff; padding-left: 200px">
        <strong>¡GRACIAS!</strong>
        <br />Tu solicitud será atendida en breve
      </p>

      <form class="material-form" method="post" action id="form_contacto_grado">
        <input type="hidden" name="validar_hashcash_contacto_grado" value="WkdEPWUFxVKRwsgSGCYH" />
        <input type="hidden" name="contacto_grado" value="1" />
        <input type="hidden" name="url" value="/grado-idiomas.php" />
        <input type="hidden" name="id_analytics" value="15665122560773620" />
        <input type="hidden" name="originCampaignId" value />

        <div class="container">
          <div class="c-form-university__title">
            <div>
              <p class="c-form-university__title--color u-color-black">PROCESO DE ADMISIÓN ABIERTO</p>
              <p class="c-form-university__title--medium">CURSO 2019 / 2020</p>
            </div>
            <p class="c-form-university__title--big">
              SOLICITA MÁS
              <span>INFORMACIÓN</span>
            </p>
          </div>

          <p class="select-options">Selecciona una opción*</p>
          <div class="contain__radio">
            <label class="container_radios">
              <p>Padre/Madre</p>
              <input type="radio" name="relacion" value="Padre/Madre" />
              <span class="checkmark"></span>
            </label>
            <label class="container_radios">
              <p>Tutor</p>
              <input type="radio" name="relacion" value="Tutor" />
              <span class="checkmark"></span>
            </label>
            <label class="container_radios">
              <p>Estudiante</p>
              <input type="radio" name="relacion" value="Estudiante" />
              <span class="checkmark"></span>
            </label>
          </div>

          <section class="c-form-grid-desktop">
            <section class="c-form__contain-inputs">
              <div class="material-input">
                <input class="input-item" type="text" name="nombre" />
                <label>Nombre*</label>
                <span class="bar"></span>
              </div>

              <div class="material-input">
                <input class="input-item" type="text" name="apellido1" />
                <label>Primer Apellido*</label>
                <span class="bar"></span>
              </div>

              <div class="material-input">
                <input class="input-item" type="text" name="apellido2" />
                <label>Segundo Apellido</label>
                <span class="bar"></span>
              </div>

              <div class="material-input">
                <input class="input-item" type="email" name="email" />
                <label>Email*</label>
                <span class="bar"></span>
              </div>

              <div class="material-input">
                <input
                  class="input-item"
                  type="tel"
                  name="telefono"
                  onkeypress="return soloNumeros(event)"
                  maxlength="9"
                />
                <label>Teléfono*</label>
                <span class="bar"></span>
              </div>

              <div class="material-input">
                <select name="id_pais">
                  <option value="0">País de residencia*</option>
                  <option value="1">Afghanistán</option>
                  <option value="2">Albania</option>
                  <option value="64">Alemania</option>
                  <option value="4">Andorra</option>
                  <option value="5">Angola</option>
                  <option value="6">Antigua y Barbuda</option>
                  <option value="149">Arabia Saudí</option>
                  <option value="3">Argelia</option>
                  <option value="7">Argentina</option>
                  <option value="8">Armenia</option>
                  <option value="9">Australia</option>
                  <option value="10">Austria</option>
                  <option value="11">Azerbaijan</option>
                  <option value="12">Bahamas</option>
                  <option value="13">Bahrain</option>
                  <option value="14">Bangladesh</option>
                  <option value="15">Barbados</option>
                  <option value="17">Bélgica</option>
                  <option value="18">Belice</option>
                  <option value="19">Benin</option>
                  <option value="20">Bhutan</option>
                  <option value="16">Bielorrusia</option>
                  <option value="21">Bolivia</option>
                  <option value="22">Bosnia Herzegovina</option>
                  <option value="23">Botswana</option>
                  <option value="24">Brasil</option>
                  <option value="25">Brunei</option>
                  <option value="26">Bulgaria</option>
                  <option value="27">Burkina Faso</option>
                  <option value="29">Burundi</option>
                  <option value="33">Cabo Verde</option>
                  <option value="30">Camboya</option>
                  <option value="31">Camerún</option>
                  <option value="32">Canadá</option>
                  <option value="35">Chad</option>
                  <option value="36">Chile</option>
                  <option value="37">China</option>
                  <option value="45">Chipre</option>
                  <option value="38">Colombia</option>
                  <option value="39">Comoros</option>
                  <option value="40">Congo</option>
                  <option value="90">Corea del Norte</option>
                  <option value="91">Corea del Sur</option>
                  <option value="41">Costa Rica</option>
                  <option value="43">Croacia</option>
                  <option value="44">Cuba</option>
                  <option value="47">Dinamarca</option>
                  <option value="48">Djibouti</option>
                  <option value="49">Dominica</option>
                  <option value="51">Ecuador</option>
                  <option value="52">Egipto</option>
                  <option value="53">El Salvador</option>
                  <option value="73">El Vaticano</option>
                  <option value="178">Emiratos Árabes</option>
                  <option value="55">Eritrea</option>
                  <option value="153">Eslovaquia</option>
                  <option value="154">Eslovenia</option>
                  <option value="158" selected>España</option>
                  <option value="191">Estados Unidos</option>
                  <option value="56">Estonia</option>
                  <option value="57">Etiopía</option>
                  <option value="136">Filipinas</option>
                  <option value="59">Finlandia</option>
                  <option value="60">Francia</option>
                  <option value="61">Gabón</option>
                  <option value="62">Gambia</option>
                  <option value="65">Gana</option>
                  <option value="63">Georgia</option>
                  <option value="179">Gran Bretaña</option>
                  <option value="66">Grecia</option>
                  <option value="68">Guatemala</option>
                  <option value="69">Guinea</option>
                  <option value="54">Guinea Ecuatorial</option>
                  <option value="70">Guinea-Bissau</option>
                  <option value="71">Guyana</option>
                  <option value="72">Haití</option>
                  <option value="123">Holanda</option>
                  <option value="74">Honduras</option>
                  <option value="75">Hungría</option>
                  <option value="77">India</option>
                  <option value="78">Indonesia</option>
                  <option value="79">Irán</option>
                  <option value="80">Iraq</option>
                  <option value="81">Irlanda</option>
                  <option value="76">Islandia</option>
                  <option value="58">Islas Fiji</option>
                  <option value="67">Islas Granada</option>
                  <option value="110">Islas Marshall</option>
                  <option value="155">Islas Salomón</option>
                  <option value="82">Israel</option>
                  <option value="83">Italia</option>
                  <option value="84">Jamaica</option>
                  <option value="85">Japón</option>
                  <option value="86">Jordania</option>
                  <option value="87">Kazajistán</option>
                  <option value="88">Kenia</option>
                  <option value="89">Kiribati</option>
                  <option value="92">Kuwait</option>
                  <option value="93">Kyrgyzstan</option>
                  <option value="94">Laos</option>
                  <option value="97">Lesotho</option>
                  <option value="95">Letonia</option>
                  <option value="96">Líbano</option>
                  <option value="98">Liberia</option>
                  <option value="99">Libia</option>
                  <option value="100">Liechtenstein</option>
                  <option value="101">Lituania</option>
                  <option value="102">Luxemburgo</option>
                  <option value="103">Macedonia</option>
                  <option value="104">Madagascar</option>
                  <option value="106">Malasia</option>
                  <option value="105">Malawi</option>
                  <option value="107">Maldivas</option>
                  <option value="108">Mali</option>
                  <option value="109">Malta</option>
                  <option value="118">Marruecos</option>
                  <option value="112">Mauricio</option>
                  <option value="111">Mauritania</option>
                  <option value="113">Méjico</option>
                  <option value="114">Micronesia</option>
                  <option value="115">Moldavia</option>
                  <option value="116">Mónaco</option>
                  <option value="117">Mongolia</option>
                  <option value="119">Mozambique</option>
                  <option value="28">Myanmar</option>
                  <option value="120">Namibia</option>
                  <option value="121">Nauru</option>
                  <option value="122">Nepal</option>
                  <option value="125">Nicaragua</option>
                  <option value="126">NÍger</option>
                  <option value="127">Nigeria</option>
                  <option value="128">Noruega</option>
                  <option value="133">Nueva Guinea Papúa</option>
                  <option value="124">Nueva Zelanda</option>
                  <option value="129">Omán</option>
                  <option value="130">Pakistán</option>
                  <option value="131">Palau</option>
                  <option value="132">Panama</option>
                  <option value="134">Paraguay</option>
                  <option value="135">Perú</option>
                  <option value="137">Polonia</option>
                  <option value="138">Portugal</option>
                  <option value="139">Qatar</option>
                  <option value="34">República Centroafricana</option>
                  <option value="46">República Checa</option>
                  <option value="50">República Dominicana</option>
                  <option value="142">Ruanda</option>
                  <option value="140">Rumanía</option>
                  <option value="141">Rusia</option>
                  <option value="143">Saint Kitts y Nevis</option>
                  <option value="144">Saint Lucia</option>
                  <option value="145">Saint Vincent</option>
                  <option value="146">Samoa</option>
                  <option value="147">San Marino</option>
                  <option value="150">Senegal</option>
                  <option value="151">Seychelles</option>
                  <option value="152">Sierra Leona</option>
                  <option value="188">Singapur</option>
                  <option value="165">Siria</option>
                  <option value="156">Somalia</option>
                  <option value="159">Sri Lanka</option>
                  <option value="148">Sto. Tomé y Príncipe</option>
                  <option value="157">Sudáfrica</option>
                  <option value="160">Sudán</option>
                  <option value="163">Suecia</option>
                  <option value="164">Suiza</option>
                  <option value="161">Surinam</option>
                  <option value="162">Swazilandia</option>
                  <option value="168">Tailandia</option>
                  <option value="190">Taiwan</option>
                  <option value="166">Tajikistán</option>
                  <option value="167">Tanzania</option>
                  <option value="169">Togo</option>
                  <option value="170">Tonga</option>
                  <option value="171">Trinidad y Tobago</option>
                  <option value="172">Túnez</option>
                  <option value="174">Turkmenistán</option>
                  <option value="173">Turquía</option>
                  <option value="175">Tuvalu</option>
                  <option value="177">Ucrania</option>
                  <option value="176">Uganda</option>
                  <option value="180">Uruguay</option>
                  <option value="181">Uzbekistán</option>
                  <option value="182">Vanuatu</option>
                  <option value="183">Venezuela</option>
                  <option value="184">Vietnam</option>
                  <option value="185">Yemen</option>
                  <option value="189">Yugoslavia</option>
                  <option value="186">Zambia</option>
                  <option value="187">Zimbabwe</option>
                </select>
              </div>

              <div class="material-input">
                <select class="select_arrow" name="curso">
                  <option value>Curso*</option>
                  <option value="1º Bachillerato">1º Bachillerato</option>
                  <option value="2º Bachillerato">2º Bachillerato</option>
                  <option value="CFGS">CFGS</option>
                  <option value="4º ESO">4º ESO</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>

              <div class="material-input">
                <select name="sede" onchange="cambia_carrera(this.value)">
                  <option value="0" disabled selected>Campus*</option>
                  <option value="madrid">Madrid</option>
                  <option value="barcelona">Barcelona</option>
                  <option value="valencia">Valencia</option>
                  <option value="sevilla">Sevilla</option>
                  <option value="zaragoza">Zaragoza</option>
                  <option value="malaga">Málaga</option>
                  <option value="navarra">Navarra</option>
                  <option value="granada">Granada</option>
                </select>
              </div>

              <div class="material-input u-width-full">
                <select name="IdP">
                  <option value="0" disabled selected>Titulación de interés*</option>
                </select>
              </div>
            </section>
            <div class="material-input textarea">
              <textarea name="comentarios" cols="30" rows="7" placeholder="Mensaje"></textarea>
            </div>
          </section>

          <section class="c-form-university__foot">
            <div class="material-input material-check u-align-center check-politics">
              <input type="checkbox" name="privacidad" value="1" class="check" />
              <p>
                He leído y acepto la
                <a
                  class="modal__btn"
                  href="#"
                  data-modal="#popup__privacidad"
                >Política de privacidad</a>*
              </p>
            </div>

            <div class="c-form__paragraph--section">
              <p class="c-form__paragraph">(*) Campos obligatorios</p>
            </div>

            <div class="butonEnviar">
              <a
                href="#"
                onClick="javascript: return validar_contacto_grado('')"
                class="c-button-round-filling c-button-round-filling--orange u-bold"
              >Enviar</a>
            </div>
          </section>
        </div>
      </form>
    </div>
  </section>
</template>