<template>
  <div id="help">
    <b-container>
      <b-row>
        <b-col>
          <div id="section-0" class="section-0">
            <div class="section-header heading">
              <h1 id="title-value">Ayuda y sugerencias</h1>
            </div>
            <div class="section-body">
              <div class="panel-default container-expanded">
                <ol class="collapsible-accordion">
                  <li class="panel-rounded panel-canvas">
                    <a
                      href="#"
                      class="script js-collapsible-accordion-toggle collapsible-accordion-header margin-top-s panel-rounded"
                    >
                      <span class="arrow iconfont-ArrowDown iconfont-22px" title></span>
                      Darse de alta / Validar email
                    </a>
                    <div
                      class="collapsible-accordion-content toggle panel-canvas panel-rounded hide"
                    >
                      <ul class="list-default--large list-canvas border-top padding-top">
                        <li>
                          <a
                            href=""
                          >¿Cómo puedo darme de alta en InfoJobs?</a>
                        </li>
                        <li>
                          <a
                            href=""
                          >¿Cómo se valida el email tras hacer el proceso de alta?</a>
                        </li>
                        <li>
                          <a
                            href=""
                          >No recibo el email para validar mi cuenta. ¿Qué hago?</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="panel-rounded panel-canvas">
                    <a
                      href="#"
                      class="script js-collapsible-accordion-toggle collapsible-accordion-header margin-top-s panel-rounded"
                    >
                      <span class="arrow iconfont-22px iconfont-ArrowDown" title></span>
                      Acceso a mi cuenta
                    </a>
                    <div
                      class="collapsible-accordion-content toggle panel-canvas panel-rounded hide"
                    >
                      <ul class="list-default--large list-canvas border-top padding-top">
                        <li>
                            <router-link to="/help/access-data/question-password">He olvidado mi contraseña, ¿qué debo hacer?</router-link>                          
                        </li>
                        <li>
                          <router-link to="/help/access-data/not-email-sent"
                          >No recibo el email para cambiar de contraseña</router-link>
                        </li>
                        <li>
                          <router-link to="/help/access-data/not-access-profile"
                          >No puedo acceder a mi cuenta porque no recuerdo o no puedo entrar al email que uso para InfoJobs</router-link>
                        </li>
                        <li>
                          <router-link to="/help/access-data/question-email-password"
                          >¿Puedo cambiar mi email o contraseña de AICAD Jobs?</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="panel-rounded panel-canvas">
                    <a
                      href="#"
                      class="script js-collapsible-accordion-toggle collapsible-accordion-header margin-top-s panel-rounded"
                    >
                      <span class="arrow iconfont-ArrowDown iconfont-22px" title></span>
                      CV / Mis datos
                    </a>
                    <div
                      class="collapsible-accordion-content toggle panel-canvas panel-rounded hide"
                    >
                      <ul class="list-default--large list-canvas border-top padding-top">
                        <li>
                          <router-link to="/help/cv-my-data/question-my-cv"
                          >¿Cómo modifico mi CV?</router-link>
                        </li>
                        <li>
                          <router-link to="/help/cv-my-data/create-update-cv"
                          >¿Cómo puedo crear otro CV o editar otros que ya tengo?</router-link>
                        </li>
                        <li>
                          <router-link to="/help/cv-my-data/create-add-present"
                          >¿Cómo puedo crear, adjuntar o editar una carta de presentación?</router-link>
                        </li>
                        <li>
                          <router-link to="/help/cv-my-data/profile-visible"
                          >¿Mi perfil está visible en internet?</router-link>
                        </li>
                        <li>
                          <router-link to="/help/cv-my-data/protected-aicad-jobs"
                          >¿Cómo protege AICAD Jobs mis datos?</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="panel-rounded panel-canvas">
                    <a
                      href="#"
                      class="script js-collapsible-accordion-toggle collapsible-accordion-header margin-top-s panel-rounded"
                    >
                      <span class="arrow iconfont-ArrowDown iconfont-22px" title></span>
                      Ofertas y recomendaciones
                    </a>
                    <div
                      class="collapsible-accordion-content toggle panel-canvas panel-rounded hide"
                    >
                      <ul class="list-default--large list-canvas border-top padding-top">
                        <li>
                          <router-link to="/help/offers-and-recommendations/repeated-or-fraudulent"
                          >¿Qué puedo hacer si veo ofertas repetidas o que parecen fraudulentas?</router-link>
                        </li>
                        <li>
                          <router-link to="/help/offers-and-recommendations/offers-for-you"
                          >¿Qué son las Ofertas para ti?</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="panel-rounded panel-canvas">
                    <a
                      href="#"
                      class="script js-collapsible-accordion-toggle collapsible-accordion-header margin-top-s panel-rounded"
                    >
                      <span class="arrow iconfont-ArrowDown iconfont-22px" title></span>
                      Inscripciones y candidaturas
                    </a>
                    <div
                      class="collapsible-accordion-content toggle panel-canvas panel-rounded hide"
                    >
                      <ul class="list-default--large list-canvas border-top padding-top">
                        <li>
                          <router-link to="/help/registrations-and-applications/cant-signup-offers"
                          >Estoy dado de alta, ¿por qué no puedo inscribirme en las ofertas?</router-link>
                        </li>
                        <li>
                          <router-link to="/help/registrations-and-applications/candidate-states-exist"
                          >¿Cuántos estados de la candidatura existen y qué significan?</router-link>
                        </li>
                        <li>
                          <router-link to="/help/registrations-and-applications/dont-companies-callme"
                          >¿Por qué no me llaman las empresas?</router-link>
                        </li>
                        <li>
                          <router-link to="/help/registrations-and-applications/can-change-myCV"
                          >¿Puedo modificar mi CV una vez me haya inscrito en una oferta?</router-link>
                        </li>
                        <li>
                          <router-link to="/help/registrations-and-applications/limit-of-dailyRegistration"
                          >¿Límite de inscripciones diarias? Lee toda la información aquí</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="panel-rounded panel-canvas">
                    <a
                      href="#"
                      class="script js-collapsible-accordion-toggle collapsible-accordion-header margin-top-s panel-rounded"
                    >
                      <span class="arrow iconfont-ArrowDown iconfont-22px" title></span>
                      Notificaciones / Alertas email
                    </a>
                    <div
                      class="collapsible-accordion-content toggle panel-canvas panel-rounded hide"
                    >
                      <ul class="list-default--large list-canvas border-top padding-top">
                        <li>
                          <router-link to="/candidate/help/question.xhtml?questionKey=desktop.help.category.60.question.10&amp;dgv=6919049022066891053"
                          >¿Qué diferencia hay entre Notificaciones y Alertas, y cómo las activo/desactivo?</router-link>
                        </li>
                        <li>
                          <router-link to="/candidate/help/question.xhtml?questionKey=desktop.help.category.60.question.20&amp;dgv=3019030743229452732"
                          >¿Por qué he dejado de recibir ofertas de empleo en mi email?</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="panel-rounded panel-canvas">
                    <a
                      href="#"
                      class="script js-collapsible-accordion-toggle collapsible-accordion-header margin-top-s panel-rounded"
                    >
                      <span class="arrow iconfont-ArrowDown iconfont-22px" title></span>
                      Red de contactos
                    </a>
                    <div
                      class="collapsible-accordion-content toggle panel-canvas panel-rounded hide"
                    >
                      <ul class="list-default--large list-canvas border-top padding-top">
                        <li>
                          <router-link to="/candidate/help/question.xhtml?questionKey=desktop.help.category.70.question.10&amp;dgv=8321270872540471758"
                          >¿Dónde está la red de contactos de AICAD Jobs?</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="panel-rounded panel-canvas">
                    <a
                      href="#"
                      class="script js-collapsible-accordion-toggle collapsible-accordion-header margin-top-s panel-rounded"
                    >
                      <span class="arrow iconfont-ArrowDown iconfont-22px" title></span>
                      Quién me ve
                    </a>
                    <div
                      class="collapsible-accordion-content toggle panel-canvas panel-rounded hide"
                    >
                      <ul class="list-default--large list-canvas border-top padding-top">
                        <li>
                          <router-link to="/candidate/help/question.xhtml?questionKey=desktop.help.category.74.question.10&amp;dgv=7351986388027138909"
                          >Mi CV ha recibido visitas ¿Que significa eso?</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="panel-rounded panel-canvas">
                    <a
                      href="#"
                      class="script js-collapsible-accordion-toggle collapsible-accordion-header margin-top-s panel-rounded"
                    >
                      <span class="arrow iconfont-ArrowDown iconfont-22px" title></span>
                      Cuenta Executive
                    </a>
                    <div
                      class="collapsible-accordion-content toggle panel-canvas panel-rounded hide"
                    >
                      <ul class="list-default--large list-canvas border-top padding-top">
                        <li>
                          <router-link to="/candidate/help/question.xhtml?questionKey=desktop.help.category.77.question.10&amp;dgv=4921772700910185685"
                          >¿Cómo activo mi cuenta Executive?</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="panel-rounded panel-canvas">
                    <a
                      href="#"
                      class="script js-collapsible-accordion-toggle collapsible-accordion-header margin-top-s panel-rounded"
                    >
                      <span class="arrow iconfont-ArrowDown iconfont-22px" title></span>
                      Baja
                    </a>
                    <div
                      class="collapsible-accordion-content toggle panel-canvas panel-rounded hide"
                    >
                      <ul class="list-default--large list-canvas border-top padding-top">
                        <li>
                          <router-link to="/candidate/help/question.xhtml?questionKey=desktop.help.category.80.question.10&amp;dgv=340131819273158037"
                          >¿Cómo puedo darme de baja de AICAD Jobs?</router-link>
                        </li>
                        <li>
                          <router-link to="/candidate/help/question.xhtml?questionKey=desktop.help.category.80.question.20&amp;dgv=5512497107654091420"
                          >He encontrado trabajo ¿Me doy de baja?</router-link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
.container {
	margin-top: 20px;
}
.container {
	max-width: 960px;
	margin: 0 auto;
}
.heading {
	margin: 10px 10px 20px 0;
}
.heading {
	margin: 20px 10px 20px 10px;
}
.panel-default {
	background-color: #f2f2f2;
}
.container-expanded {
	margin-top: 10px;
}
ol, ul {
	list-style: none;
}
.panel-rounded {
	border-radius: 6px;
}
.panel-canvas {
	background-color: #fff;
}
.script, a.script, a.script:hover, a.script:visited, a.script:active, .script[class*="iconfont-"]::before {
	color: #2d3133;
}
a:focus {
	outline: 0;
}
.margin-top-s {
	margin-top: 10px;
}
.margin-top-s {
	margin-top: 10px;
}
.collapsible-accordion-header {
	font-size: 18px;
	line-height: 21px;
}
.collapsible-accordion-header {
	font-size: 16px;
	line-height: 20px;
	font-family: Proximanovabold,Helvetica,Arial,sans-serif;
	display: block;
	position: relative;
	padding: 20px 30px 15px 30px;
	margin: 0;
}
.panel-rounded {
	border-radius: 6px;
}
a {
	transition: all .2s ease 0;
	text-decoration: none;
	color: #167db7;
}
.iconfont-22px::before, [class*="btn"][class*="iconfont-"].iconfont-22px::before {
	font-size: 22px;
}
[class*="iconfont-"]::before {
	font-size: 18px;
}
.collapsible-accordion-header .arrow {
	height: 100%;
	padding-top: 22px;
	padding-left: 16px;
	top: 0;
	right: 20px;
	position: absolute;
}
.script, a.script, a.script:hover, a.script:visited, a.script:active, .script[class*="iconfont-"]::before {
	color: #2d3133;
}
.collapsible-accordion-content {
	padding: 0 30px 20px 30px;
}
.panel-rounded {
	border-radius: 6px;
}


</style>
<script>
export default {
  name: "help",
  data() {
    return {};
  }
};
</script>