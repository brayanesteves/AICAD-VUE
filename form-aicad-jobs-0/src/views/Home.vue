<template>
  <div class="home">
    <div class="wrapper">
      <b-container class="bv-example-row">
        <b-row>
          <!--<COLUMNA Nº0>-->
          <b-col sm="12" md="6">
            <!--<SECTION Nº0>-->
            <div id="section" class="section-0">
              <!--o-o-o-o-o-o-o-o-o-o-o-o-o-o--->
              <!--<SECTION HEADER>-->
              <div id="section-header">
                <h2 class="text-left">Accede como candidato</h2>
              </div>
              <!--</SECTION HEADER>-->
              <!--o-o-o-o-o-o-o-o-o-o-o-o-o-o--->
              <!--<SECTION BODY>-->
              <div id="section-body">
                <!--<FORM Nº0>-->
                <div id="form-0" class="form-0">
                  <!--<FORMULARIO Nº0>-->
                  <b-form>
                    <b-form-group
                      id="input-group-1"
                      label="Email:"
                      label-for="input-1"
                      class="text-left"
                    >
                      <b-form-input
                        id="input-1"
                        type="email"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-2"
                      class="text-left"
                      label="Contraseña:"
                      label-for="input-2"
                    >
                      <b-form-input id="input-2" required></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-3"
                      class="text-left"
                      label="Contraseña:"
                      label-for="input-3"
                    >
                      <b-link href="#foo">¿Has olvidado tu contraseña?</b-link>
                    </b-form-group>

                    <b-form-group
                      id="input-group-4"
                      class="text-left"
                      label-for="input-4"
                    >
                      <b-button
                        type="submit"
                        variant="primary"
                        class="btn-incrscn"
                        @click="iniciar_sesion"
                        >INICIAR SESIÓN</b-button
                      >
                    </b-form-group>

                    <b-form-group id="input-group-5" class="text-left">
                      <b-form-checkbox id="checkbox-1">
                        Mantener mi sesión abierta
                        <b-link href="#">Más info</b-link>
                      </b-form-checkbox>
                    </b-form-group>
                  </b-form>
                  <!--</FORMULARIO Nº0>-->
                </div>
                <!--</FORM Nº0>-->
              </div>
              <!--</SECTION BODY>-->
              <!--o-o-o-o-o-o-o-o-o-o-o-o-o-o--->
              <!--<SECTION FOOTER>-->
              <div
                id="section-footer"
                class="section-footer border-top text-left"
              >
                <p>
                  ¿Eres una empresa?
                  <b-link href="#">Accede a tu cuenta</b-link>
                </p>
              </div>
              <!--</SECTION FOOTER>-->
              <!--o-o-o-o-o-o-o-o-o-o-o-o-o-o-->
            </div>
            <!--</SECTION Nº0>-->
          </b-col>
          <!--</COLUMNA Nº0>-->
          <!--O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-->
          <!--<COLUMNA Nº1>-->
          <b-col sm="12" md="6">
            <!--<SECTION Nº1>-->
            <div id="section" class="section-0">
              <!--o-o-o-o-o-o-o-o-o-o-o-o-o-o--->
              <!--<SECTION HEADER>-->
              <div id="section-header">
                <h2 class="text-left">¿Eres nuevo/a?</h2>
              </div>
              <!--</SECTION HEADER>-->
              <!--o-o-o-o-o-o-o-o-o-o-o-o-o-o--->
              <!--<SECTION BODY>-->
              <div id="section-body">
                <!--<FORM Nº0>-->
                <div id="list-requisitos" class="list-requisitos">
                  <dl class="requisitos">
                    <!--<TERMINO Nº0>-->
                    <dt class="h3 icon-CV">Crea tu CV</dt>
                    <dd>Muestra a las empresas todo tu talento</dd>
                    <!--</TERMINO Nº0>-->

                    <!--<TERMINO Nº1>-->
                    <dt class="h3 icon-check">
                      Inscribite en las ofertas que te gustan
                    </dt>
                    <dd>Y sigue tus candidaturas</dd>
                    <!--</TERMINO Nº1>-->

                    <!--<TERMINO Nº2>-->
                    <dt class="h3 icon-CV">Mantén actualizado tu CV</dt>
                    <dd>
                      Y dobla las posibilidades de ser contactado por la empresa
                      que quieres
                    </dd>
                    <!--</TERMINO Nº2>-->
                  </dl>
                </div>
                <!--</FORM Nº0>-->
              </div>
              <!--</SECTION BODY>-->
              <!--o-o-o-o-o-o-o-o-o-o-o-o-o-o--->
              <!--<SECTION FOOTER>-->
              <div id="section-footer" class="section-footer text-left">
                <b-link href="#" class="btn btn-outline-primary"
                  >REGISTRATE</b-link
                >
              </div>
              <!--</SECTION FOOTER>-->
              <!--o-o-o-o-o-o-o-o-o-o-o-o-o-o--->
            </div>
            <!--</SECTION Nº1>-->
          </b-col>
          <!--</COLUMNA Nº1>-->
          <!--O-O-O-O-O-O-O-O-O-O-O-O-O-O-O-->
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  methods: {
    iniciar_sesion() {
      this.$router.push("profile");
    }
  }
};
</script>
<style scoped>
.home {
  padding: 20px 0 20px 0;
  box-sizing: border-box;
}
#section {
  background: #ffffff;
  border-radius: 16px;
  height: 100%;
}
.border-top {
  margin: 0;
  border-top: 1px solid #e2e5e6;
}
input {
  height: 40px;
  width: 330px;
}
.section-0 {
  padding: 20px;
}
.form-0 .btn-incrscn {
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
#list-requisitos {
  text-align: left;
  padding-left: 40px;
}
.requisitos + dd {
  padding-left: 40px;
}
.h3 {
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 15px;
}
.section-footer p {
  padding-top: 20px;
}
/* ----------------------- <RESPONSIVE> ----------------------- */
@media only screen and (min-width: 769px) {
  input {
    width: 50%;
  }
}
/* ----------------------- </RESPONSIVE> ----------------------- */
</style>
