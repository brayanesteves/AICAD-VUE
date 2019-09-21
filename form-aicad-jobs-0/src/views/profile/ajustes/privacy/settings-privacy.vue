<template>
  <div id="settings-privacy">
    <b-container>
      <b-row>
        <b-col sm="12" md="12">
          <div id="section-0" class="section-0">
            <div class="section-header">
              <h1 class="text-center" style="width: auto;">
                Qué ven las empresas
              </h1>
            </div>
            <div class="section-body">
              <div id="form-0" class="form-0">
                <b-form>
                  <fieldset>
                    <legend>
                      Opciones configuración visibilidad de datos personales
                    </legend>
                    <ul class="form--field-block clearfix">
                      <li>
                        <b-form-group id="input-group-0">
                          <b-form-checkbox-group id="checkboxes-0">
                            <b-form-checkbox
                              id="checkPrivacidad"
                              name="checkPrivacidad"
                              checked="true"
                              value
                              >CV visible en base de datos</b-form-checkbox
                            >
                          </b-form-checkbox-group>
                        </b-form-group>
                      </li>
                    </ul>
                    <p id="description">
                      Tu CV es visible para empresas que buscan en nuestra base
                      de datos sin publicar ofertas.
                    </p>
                  </fieldset>
                  <button
                    id="submit_button"
                    class="btn btn-primary js-btn-save margin-top"
                    type="submit"
                  >
                    Guardar
                  </button>
                  <a
                    class="btn btn-outline-primary js-btn-cancel margin-top"
                    id="cancelar_button"
                    href
                  >
                    <span class="hide-small-device">Cancelar</span>
                  </a>
                </b-form>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
#settings-privacy #section-0 {
  background-color: #fff;
  margin: 5px 0;
  padding: 20px;
  border-radius: 16px;
}
#settings-privacy #section-0 .row div:nth-child(1) {
  align-items: center;
}
.text-center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
h1 {
  font-size: 30px;
  line-height: 33px;
}

h1 {
  font-size: 25px;
  line-height: 28px;
  margin-bottom: 35px;
  color: #2d3133;
}
.section-body form {
  margin: 0 auto 10px auto;
  width: 446px;
}
ul {
  list-style: none;
}
input[type="radio"],
input[type="checkbox"] {
  display: inline-block;
  cursor: pointer;
  padding: 0;
  margin: 3px 6px 0 0;
  width: auto;
  border: 0 none;
  vertical-align: top;
  height: auto;
  font-size: 15px;
}
p {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
  word-wrap: break-word;
}
legend {
  display: none;
}
.margin-top {
  margin-top: 20px;
}
.margin-top {
  margin-top: 10px;
}
.btn {
  font-size: 14px;
  padding: 13px 20px 11px 20px;
  line-height: 1;
}
.btn-primary {
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
  border: 1px solid #167db7;
  background-color: #167db7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}
.btn-primary
  + [class*="btn"]:not(.btn-group-justified):not(.btn-full-width--small-device) {
  margin-left: 5px;
}
.btn-outline-primary:hover {
  background-color: #167db7;
  color: #fff;
}
</style>
<script>
export default {
  name: "setting-privacy"
};
</script>
