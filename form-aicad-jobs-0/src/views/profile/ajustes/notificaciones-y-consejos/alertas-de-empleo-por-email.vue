<template>
  <div id="alerta-de-empleo-por-email" class="alerta-de-empleo-por-email">
    <div class="panel-canvas">
      <div class="row-centered inner inner-expanded">
        <div class="wrapper">
          <b-container>
            <b-row>
              <!--<COLUMNA Nº0>-->
              <b-col sm="12" md="12">
                <div id="section-0" class="section-alertas-0">
                  <div class="header">
                    <h1 class="text-center">Alertas de empleo por email</h1>
                  </div>
                  <div class="body">
                    <!--<FORMULARIO Nº0>-->
                    <b-form>
                      <fieldset>
                        <h2 class="h3 heading-divider">Mis alertas</h2>
                        <ul id="ul-alertas" class="form-field-block clearfix">
                          <li class="alerta">
                            <div class="content-middle content-block-small-device">
                              <div class="content-type-text">
                                <h3>
                                  <a href>Ofertas de</a>
                                </h3>
                                <ul class="list-default line-inline small">
                                  <li>
                                    <span class="alternative dt">Fecha de creación:</span>
                                    <span class="alternative">{{new Date()}}</span>
                                  </li>
                                </ul>
                              </div>

                              <div class="content-type-media">
                                <button
                                  type="button"
                                  id="edit-nom-alerta"
                                  class="btn-small btn-default"
                                >EDITAR NOMBRE</button>
                                <button
                                  type="button"
                                  id="btn-eliminar"
                                  class="btn-small btn-default"
                                >ELIMINAR</button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                    </b-form>
                    <!--<FORMULARIO Nº0>-->
                  </div>
                </div>
              </b-col>
              <!--</COLUMNA Nº0>-->

              <!--<COLUMNA Nº1>-->
              <b-col sm="12" md="12">
                <div id="section-0">
                  <div class="header">
                    <h2
                      class="h3 heading-divider"
                    >Crear una nueva alerta que se ajuste a tus intereses</h2>
                  </div>

                  <div class="body">
                    <div id="more-info" class="hide" style="display:none;">
                      <p>01. Introduce las palabras que te interesan en el buscador y clica "Buscar"</p>
                      <p>02. Cuando se muestren los resultados te aconsejamos utilizar los filtros para ajustar más tu búsqueda</p>
                      <p>03. Si los resultados que se muestran te parecen interesantes, crea tu nueva alerta haciendo clic en el botón "Crear alerta"</p>
                    </div>

                    <p>
                      <a href="javascript:void(0);" id="show-more" class="link-underline">Más info</a>
                    </p>

                    <p class="text-left">
                      <a
                        href="javascript:void(0);"
                        id="show-less"
                        class="link-underline hide"
                        style="display:none;"
                      >Menos info</a>
                    </p>

                    <div id="searchBox">
                      <b-form>
                        <b-form-group
                          id="input-group-1"
                          class="text-left"
                          label="Busco ofertas de..."
                          label-for="input-1"
                        >
                          <b-form-input
                            id="input-1"
                            type="email"
                            required
                            placeholder="Puesto, empresa o palabra clave"
                          ></b-form-input>
                        </b-form-group>

                        <b-form-group
                          id="input-group-3"
                          class="text-left"
                          label="en..."
                          label-for="input-3"
                        >
                          <b-form-select id="input-3" required></b-form-select>
                        </b-form-group>
                        <b-form-group id="input-group-4" class="text-left" label-for="input-4">
                          <b-button type="submit" variant="primary" class="btn-search">BUSCAR</b-button>
                        </b-form-group>
                      </b-form>
                      <!--<form action class="form" id="offersSearch" name="offersSearch" method="post">
                        <fieldset>
                          <legend>Opciones de búsqueda</legend>
                          <ul class="form--field-block clearfix input-drop-down-wrapper">
                            <li class="search-field search-keyword-field">
                              <label for="palabra">Busco ofertas de...</label>
                              <div>
                                <input
                                  type="text"
                                  placeholder="Puesto, empresa o palabra clave"
                                  name="palabra"
                                  id="palabra"
                                  maxlength="200"
                                  class="ui-autocomplete-input"
                                  autocomplete="off"
                                />
                                <input
                                  id="normalizedJobTitleId"
                                  type="hidden"
                                  name="normalizedJobTitleId"
                                  value
                                />
                              </div>
                              <div class="input-drop-down"></div>
                            </li>
                            <li class="search-field search-country-field js-show-field">
                              <div class="form-select" id="provinciasDiv">
                                <label for="of_provincia">en...</label>
                                <select
                                  class="chosen-select"
                                  data-placeholder="Toda España"
                                  id="of_provincia"
                                  name="of_provincia"
                                  title="Selecciona una de las opciones o escribe tu opción"
                                  style="display: block;"
                                >
                                  <option value="0" selected="true">Toda España</option>
                                  <option value="foreign">El extranjero</option>
                                  <optgroup label="Más comunes">
                                    <option value="33">Madrid</option>
                                    <option value="9">Barcelona</option>
                                    <option value="49">Valencia/València</option>
                                    <option value="43">Sevilla</option>
                                  </optgroup>
                                  <optgroup label="Todas">
                                    <option value="28">A Coruña</option>
                                    <option value="2">Álava/Araba</option>
                                    <option value="3">Albacete</option>
                                    <option value="4">Alicante/Alacant</option>
                                    <option value="5">Almería</option>
                                    <option value="6">Asturias</option>
                                    <option value="7">Ávila</option>
                                    <option value="8">Badajoz</option>
                                    <option value="9">Barcelona</option>
                                    <option value="10">Burgos</option>
                                    <option value="11">Cáceres</option>
                                    <option value="12">Cádiz</option>
                                    <option value="13">Cantabria</option>
                                    <option value="14">Castellón/Castelló</option>
                                    <option value="15">Ceuta</option>
                                    <option value="16">Ciudad Real</option>
                                    <option value="17">Córdoba</option>
                                    <option value="18">Cuenca</option>
                                    <option value="19">Girona</option>
                                    <option value="21">Granada</option>
                                    <option value="22">Guadalajara</option>
                                    <option value="23">Guipúzcoa/Gipuzkoa</option>
                                    <option value="24">Huelva</option>
                                    <option value="25">Huesca</option>
                                    <option value="26">Islas Baleares/Illes Balears</option>
                                    <option value="27">Jaén</option>
                                    <option value="29">La Rioja</option>
                                    <option value="20">Las Palmas</option>
                                    <option value="30">León</option>
                                    <option value="31">Lleida</option>
                                    <option value="32">Lugo</option>
                                    <option value="33">Madrid</option>
                                    <option value="34">Málaga</option>
                                    <option value="35">Melilla</option>
                                    <option value="36">Murcia</option>
                                    <option value="37">Navarra</option>
                                    <option value="38">Ourense</option>
                                    <option value="39">Palencia</option>
                                    <option value="40">Pontevedra</option>
                                    <option value="41">Salamanca</option>
                                    <option value="46">Santa Cruz de Tenerife</option>
                                    <option value="42">Segovia</option>
                                    <option value="43">Sevilla</option>
                                    <option value="44">Soria</option>
                                    <option value="45">Tarragona</option>
                                    <option value="47">Teruel</option>
                                    <option value="48">Toledo</option>
                                    <option value="49">Valencia/València</option>
                                    <option value="50">Valladolid</option>
                                    <option value="51">Vizcaya/Bizkaia</option>
                                    <option value="52">Zamora</option>
                                    <option value="53">Zaragoza</option>
                                  </optgroup>
                                </select>
                                <div
                                  class="chosen-container chosen-container-single"
                                  style="width: 100%;"
                                  title="Selecciona una de las opciones o escribe tu opción"
                                  id="of_provincia_chosen"
                                >
                                  <a class="chosen-single chosen-default" tabindex="-1">
                                    <span>Toda España</span>
                                    <div>
                                      <b></b>
                                    </div>
                                  </a>
                                  <div class="chosen-drop">
                                    <div class="chosen-search">
                                      <input
                                        type="text"
                                        autocomplete="off"
                                        title="&quot;Selecciona una de estas opciones&quot;"
                                      />
                                    </div>
                                    <ul class="chosen-results"></ul>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <button
                              type="submit"
                              id="searchOffers"
                              class="btn btn-cta"
                              title="Buscar trabajo con mis preferencias"
                            >Buscar</button>
                          </ul>
                          <input type="hidden" value="0" name="canal" id="canal" />
                          <input
                            type="hidden"
                            value="0"
                            name="origen_busqueda"
                            id="origen_busqueda"
                          />
                          <input type="hidden" value="0" name="origen_accion" id="origen_accion" />
                          <input type="hidden" value="false" name="vieneUrlExecutive" />
                        </fieldset>
                      </form>-->
                    </div>
                  </div>

                  <div id="footer" class="text-left">
                    <b-container>
                      <b-row>
                        <b-col>
                          <a href id="cancelar_button" class="btn btn-default js-btn-cancel">
                            <span class="hide-small-device">Volver</span>
                          </a>
                        </b-col>
                      </b-row>
                    </b-container>
                  </div>
                </div>
              </b-col>
              <!--</COLUMNA Nº1>-->
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "alerta-de-empleo-por-email"
};
</script>
<style scoped>
.alerta-de-empleo-por-email { align-items: center; }
#alerta-de-empleo-por-email .panel-canvas .wrapper .container {
  background-color: #fff;
  margin: 5px 0;
  padding: 20px;
  border-radius: 16px;
  align-items: center;
}
.section-alertas-0 .header h1 {
  font-size: 30px;
  line-height: 33px;
}
.panel-canvas {
  align-items: center;
}
.row-centered form {
  margin: 0 auto 10px auto;
  width: 446px;
}
h3.heading-divider,
.h3.heading-divider,
.medium.heading-divider {
  padding-bottom: 12px;
}
.heading-divider {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e5e6;
}
ul {
  list-style-type: none;
}
.form--field-block > li:last-child {
  margin-bottom: 0;
}
.form--field-block > li:last-child {
  margin-bottom: 0;
}
.form--field-block > li {
  margin-bottom: 20px;
  vertical-align: middle;
}
.content-top,
.content-middle {
  max-width: 100%;
}
.content-middle {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  -webkit-align-items: center;
  flex-grow: 1;
}

.content-middle .content-type-text:not(:last-child) {
  margin-right: 20px;
}
.content-middle .content-type-text {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
}
.content-middle .content-type-text h1,
.content-middle .content-type-text h2,
.content-middle .content-type-text h3 {
  margin: 0;
  -moz-hyphens: auto;
  word-wrap: break-word;
}
.list-inline,
.list-inline-center,
.list-inline-center-small-device {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
}

.list-default > li:last-child,
.list-default > dt:last-child {
  margin-bottom: 0;
}
.small.list-default > li,
.list-default > dt {
  margin-bottom: 5px;
}
.list-default > li,
.list-default > dt {
  display: block;
  position: relative;
  margin-bottom: 10px;
  word-break: break-word;
}
.small {
  font-size: 14px;
  line-height: 18px;
}
.list-inline .dt,
.list-inline-center .dt,
.list-inline-center-small-device .dt {
  margin-right: 5px;
}
.alternative,
.alternative[class*="iconfont-"]::before {
  color: #999;
}
.list-default > li,
.list-default > dt {
  word-break: break-word;
}
.alternative,
.alternative[class*="iconfont-"]::before {
  color: #999;
}
.content-middle .content-type-media {
  -webkit-box-flex: none;
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
}
.btn-small {
  font-size: 12px;
  padding: 9px 10px 7px 10px;
  line-height: 1;
}
.btn-default {
  font-family: Proximanovasemibold, Helvetica, Arial, sans-serif;
  border-radius: 4px;
  display: inline-block;
  width: auto;
  cursor: pointer;
  font-weight: normal;
  overflow: visible;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  text-shadow: none;
  text-transform: uppercase;
  -webkit-appearance: none;
  outline: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: #167db7;
  border: 1px solid #167db7;
  background-color: transparent;
}
.btn-default
  + [class*="btn"]:not(.btn-group-justified):not(.btn-full-width--small-device) {
  margin-left: 5px;
}
.inner-expanded {
  padding-bottom: 40px;
  padding-top: 40px;
}
.inner-expanded {
  padding-bottom: 20px;
  padding-top: 20px;
}
h3.heading-divider,
.h3.heading-divider,
.medium.heading-divider {
  padding-bottom: 12px;
}
p {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
  word-wrap: break-word;
}
h3, .h3 {
	font-size: 18px;
	line-height: 21px;
	margin-bottom: 15px;
}
.link-underline,
.link-underline:hover {
  cursor: pointer;
  text-decoration: underline;
}
.link-underline,
.link-underline:hover {
  cursor: pointer;
  text-decoration: underline;
}
.row-centered form {
  margin: 0 auto 10px auto;
  width: 446px;
}
fieldset:first-child {
  margin-top: 0;
}
legend {
  display: none;
}
.input-drop-down-wrapper {
  position: relative;
}
.form--field-block > li {
  margin-bottom: 20px;
  vertical-align: middle;
}
.form--field-block label {
  width: 100%;
}
label,
.label {
  display: inline-block;
  vertical-align: top;
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 125%;
}
.form--field-block > li {
  margin-bottom: 20px;
  vertical-align: middle;
}
.form-select {
  position: relative;
  line-height: 14px;
  -webkit-appearance: none;
}
.btn-cta {
  font-family: Proximanovasemibold, Helvetica, Arial, sans-serif;
  border-radius: 4px;
  display: inline-block;
  width: auto;
  cursor: pointer;
  font-weight: normal;
  overflow: visible;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  text-shadow: none;
  text-transform: uppercase;
  -webkit-appearance: none;
  outline: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
  color: #fff;
  border: 1px solid #ff6340;
  background-color: #ff6340;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}
.chosen-container-single .chosen-single div {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 23px;
  height: 100%;
}
.chosen-container-single .chosen-drop {
  margin-top: -3px;
  border-radius: 0;
  background-clip: padding-box;
}
.chosen-container .chosen-drop,
.ui-autocomplete {
  position: absolute;
  top: 102%;
  left: -9999px;
  z-index: 8999;
  margin-left: -1px;
  width: calc(100% - -2px);
  border-top: 1px;
  border-right: 1px;
  border-bottom: 1px;
  border-left: 1px;
  border-style: solid;
  border-color: #c7c9ca;
  border-top-color: #167db7;
  background: #fff;
}
#section-0 .body .btn-search {
  background-color: #ff6340 !important;
  border: 1px solid #ff6340;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}
#footer .btn-default:hover { background-color:#167db7; transition:background-color 0.3s ease, color 0.3s ease; color:#fff; }
</style>
