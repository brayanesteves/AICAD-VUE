<template>
  <div class="footer">
    <footer>
      <!--<SECTION FOOTER Nº0>-->
      <div id="section-footer-0">
        <b-container>
          <b-row>
            <b-col sm="" md="3">
              <!--<LISTS Nº0>-->
              <div id="lists" class="lists-0">
                <div class="lists-header text-left">
                  <h3>Nosotros</h3>
                </div>
                <div class="lists-body text-left">
                  <ul>
                    <li><a href="#" target="_blank">Seguridad</a></li>
                    <li><a href="#" target="_blank">Condiciones legales</a></li>
                    <li>
                      <a href="#" target="_blank">Política de Privacidad</a>
                    </li>
                    <li><a href="#" target="_blank">Uso del servicio</a></li>
                    <li><a href="#" target="_blank">Política de cookies</a></li>
                  </ul>
                </div>
              </div>
              <!--</LISTS Nº0>-->
            </b-col>
            <b-col sm="" md="3">
              <!--<LISTS Nº1>-->
              <div id="lists" class="lists-1">
                <div class="lists-header text-left">
                  <h3>Sobre AICAD Jobs</h3>
                </div>
                <div class="lists-body text-left">
                  <ul>
                    <li>
                      <a href="#" target="_blank">Trabaja con nosotros</a>
                    </li>
                    <li><a href="#" target="_blank">Ofertas de práctica</a></li>
                    <li><a href="#" target="_blank">Ofertas de empleo</a></li>
                  </ul>
                </div>
              </div>
              <!--</LISTS Nº1>-->
            </b-col>
            <b-col sm="" md="3">
              <!--<LISTS Nº2>-->
              <div id="lists" class="lists-2">
                <div class="lists-header text-left">
                  <h3>Servicios VIP empresas</h3>
                </div>
                <div class="lists-body text-left">
                  <ul>
                    <li><a href="#" target="_blank">Alumnos erasmus</a></li>
                    <li>
                      <a href="#" target="_blank">Convenio de prácticas</a>
                    </li>
                    <li>
                      <a href="#" target="_blank">Multiofertas de empleo</a>
                    </li>
                  </ul>
                </div>
              </div>
              <!--</LISTS Nº2>-->
            </b-col>
            <b-col sm="" md="3">
              <!--<LISTS Nº3>-->
              <div id="lists" class="lists-3">
                <div class="lists-header text-left">
                  <h3>Ofertas de empleo</h3>
                </div>
                <div class="lists-body">
                  <ul class="text-left">
                    <li><a href="#" target="_blank">Orientación laboral</a></li>
                    <li><a href="#" target="_blank">Executive education</a></li>
                    <li>
                      <a href="#" target="_blank">Formación para el empleo</a>
                    </li>
                    <li>
                      <a href="#" target="_blank">Profesional de confianza</a>
                    </li>
                  </ul>
                </div>
              </div>
              <!--</LISTS Nº3>-->
            </b-col>
          </b-row>
        </b-container>
      </div>
      <!--</SECTION FOOTER Nº>-->
    </footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  font-family: Proximanova, Helvetica, Arial, sans-serif;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #e2e5e6;
  text-align: center;
  background-color: #f2f2f2;
}
.footer .container {
  max-width: 960px;
  margin: 0 auto;
  background-color: #f2f2f2;
}
.lists-header h3 {
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 15px;
}
.lists-body ul {
  padding: 0;
  list-style: none;
}
.lists-body ul li a {
  color: #2d3133;
}

/* ----------------------- <RESPONSIVE> ----------------------- */
@media only screen and (min-width: 769px) {
  .footer {
    position: absolute;
    left: 0;
    right: 0;
    text-align: left;
    padding-top: 20px;
    background-color: #f2f2f2;
  }
}

/* ----------------------- </RESPONSIVE> ----------------------- */
</style>
