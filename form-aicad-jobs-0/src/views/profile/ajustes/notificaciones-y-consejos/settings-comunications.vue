<template>
  <div id="settings-comunications">
    <b-container>
      <b-row class="row-centered inner inner-expanded">
        <b-col>
          <div id="section-0" class="section-0">
            <div class="section-header">
              <h1 class="text-center">Configura tus comunicaciones</h1>
            </div>
            <div class="section-body">
              <b-form>
                <fieldset>
                  <dl class="list-default">
                    <dt>
                      <b-form-group id="input-group-0">
                        <b-form-checkbox-group id="checkboxes-0">
                          <b-form-checkbox value>Cambios en tus candidaturas</b-form-checkbox>
                        </b-form-checkbox-group>
                      </b-form-group>
                    </dt>
                    <dd class="indent">
                      <p
                        id="descripcion-candidateNotifications"
                      >Recibe un email y una notificación en tu aplicación cada vez que haya un cambio en una de tus candidaturas</p>
                    </dd>

                    <dt>
                      <b-form-group id="input-group-1">
                        <b-form-checkbox-group id="checkboxes-1">
                          <b-form-checkbox value>Comunicados de AICAD Jobs</b-form-checkbox>
                        </b-form-checkbox-group>
                      </b-form-group>
                    </dt>
                    <dd class="indent">
                      <p
                        id="descripcion-consejosNovedades"
                      >De vez en cuando te enviaremos mensajes para mejorar tu CV o tu búsqueda de ofertas.</p>
                    </dd>

                    <dt>
                      <b-form-group id="input-group-2">
                        <b-form-checkbox-group id="checkboxes-2">
                          <b-form-checkbox value>Comunicados de empresas</b-form-checkbox>
                        </b-form-checkbox-group>
                      </b-form-group>
                    </dt>
                    <dd class="indent">
                      <p
                        id="descripcion-otrasPromociones"
                      >A veces, las empresas quieren enviar contenido directamente a los candidatos.</p>
                    </dd>
                  </dl>
                </fieldset>
                <p class="margin-top">
                  <a class="link-underline" id="link_perfil" href>Más información</a>
                </p>
                <b-form-group id="input-group-2">
                  <button
                    id="submit_button"
                    class="btn btn-primary js-btn-save margin-top"
                    type="submit"
                  >Guardar</button>
                  <button class="btn btn-outline-primary js-btn-cancel  margin-top" id="cancelar_button">
                    <span class="hide-small-device">Cancelar</span>
                  </button>
                </b-form-group>
              </b-form>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
#settings-comunications #section-0 {
  background-color: #fff;
  margin: 5px 0;
  padding: 20px;
  border-radius: 16px;
}
#settings-comunications #section-0 .row div:nth-child(1) {
  align-items: center;
}
h1 {
  font-size: 30px;
  line-height: 33px;
}
h1 {
  font-size: 25px;
  line-height: 28px;
  margin-bottom: 35px;
}
.text-center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.margin-top {
  margin-top: 20px;
}
p {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
  word-wrap: break-word;
}
fieldset:first-child {
  margin-top: 0;
}
.row-centered form {
  margin: 0 auto 10px auto;
  width: 446px;
}
.indent {
  margin-top: 5px;
  margin-left: 24px;
}
.list-default > dt:not(.semi-bold) {
  font-family: Proximanovabold, Helvetica, Arial, sans-serif;
}
.list-default dd + dt {
  margin-top: 20px;
}
.list-default > dt {
  margin-bottom: 0;
  color: #2d3133;
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
p:last-child,
p:only-child {
  margin-bottom: 0;
}
input[type="checkbox"] + label,
input[type="radio"] + label,
.label-checkbox {
  cursor: pointer;
  width: auto;
  max-width: calc(100% - 30px);
}
.row-centered {
  margin: 0 auto 10px auto;
  width: 645px;
}
.row-centered {
  width: 100%;
}
.inner-expanded {
  padding-bottom: 40px;
  padding-top: 40px;
}
.inner-expanded {
  padding-bottom: 20px;
  padding-top: 20px;
}
.link-underline,
.link-underline:hover {
  cursor: pointer;
  text-decoration: underline;
}
a {
  transition: all 0.2s ease 0;
  text-decoration: none;
  color: #167db7;
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
export default {};
</script>