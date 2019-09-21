<template>
  <div id="unsubscribe-aicadjobs" class="unsubscribe-aicadjobs">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div
            class="col-child panel-canvas inner inner-expanded panel-rounded"
          >
            <h1 class="h2">
              <span>¿Cómo puedo darme de baja de InfoJobs?</span>
            </h1>
            <p>
              <span></span>
            </p>
            <p>
              Conservar tus datos en AICAD Jobs, te puede ser muy útil si en el
              futuro quieres volver a buscar trabajo, así no tendrás que volver
              a rellenar toda tu información. Además, si tu CV está en InfoJobs,
              aunque no estés buscando trabajo, éste estará disponible para las
              empresas que buscan candidatos como tú.Quizá un día recibes una
              oferta muy interesante por parte de una empresa :)
            </p>
            <p>
              Por favor dirígete a la sección
              <a href="https://www.infojobs.net/candidate/account/index.xhtml"
                >Ajustes</a
              >, allí encontrarás el apartado Darme de baja. Podrás escoger
              entre:
            </p>
            <ul class="list-default list-bullet-default">
              <li>Dejar de recibir emails con ofertas de empleo</li>
              <li>
                Eliminar todas mis candidaturas de las ofertas donde me he
                inscrito anteriormente
              </li>
              <li>
                Ocultar mi CV a las empresas que buscan candidatos en AICAD Jobs
              </li>
            </ul>
            <p></p>
            <p>
              Si no quieres ninguna opción anterior y prefieres darte de baja,
              eliminando definitivamente todos tus datos de InfoJobs, podrás
              hacerlo haciendo clic en el botón [Quiero darme de baja].
            </p>
            <p>
              ¿Tienes algún problema con el proceso de baja? Nosotros podemos
              realizarlo por ti si nos envías
              <a
                href="https://media.infojobs.net/portales/ij/app/docs/formulario-solicitud-baja.pdf"
                target="_blank"
                >este formulario</a
              >
              cumplimentado.
            </p>
            <p></p>
          </div>
        </b-col>
        <b-col sm="12" md="4">
          <div class="header"></div>
          <div class="body">
            <mejoras />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
.heading {
  margin: 10px 10px 20px 0;
}
.heading h1,
.heading h2 {
  font-family: Proximanovasemibold, Helvetica, Arial, sans-serif;
  margin: 0;
}
h1 {
  font-size: 30px;
  line-height: 33px;
}
.col-child.inner {
  max-width: 100%;
}
.panel-rounded {
  border-radius: 6px;
}
.panel-canvas {
  background-color: #fff;
}
.col-child {
  max-width: calc(100% - 10px);
  margin: 0 0 0 10px;
}
.inner-expanded {
  padding-bottom: 40px;
  padding-top: 40px;
}
.content-wrapper,
.inner {
  padding: 20px 30px;
}
h2,
.h2 {
  font-size: 25px;
  line-height: 28px;
  margin: 0 0 20px 0;
}
h1,
h2,
.h2,
h3,
.h3 {
  font-family: Proximanovasemibold, Helvetica, Arial, sans-serif;
  color: #2d3133;
}
ol,
ul {
  list-style: none;
}
.list-bullet-default > li::before,
.list-bullet-default > dt::before {
  content: "";
  position: absolute;
  top: 6px;
  left: 0;
  display: block;
  width: 5px;
  height: 5px;
  list-style-position: inside;
  border-radius: 50%;
  background-color: #999;
}
.list-bullet-default > li,
.list-bullet-default > dt,
.list-bullet-default > dd {
  padding-left: 15px;
}
.list-default > li,
.list-default > dt {
  display: block;
  position: relative;
  margin-bottom: 10px;
  word-break: break-word;
}
a {
  transition: all 0.2s ease 0;
  text-decoration: none;
  color: #167db7;
}
</style>
<script>
import mejoras from "@/components/contains/profile/help/access-profile/mejoras.vue";
export default {
  name: "unsubscribe-aicadjobs",
  components: {
    mejoras
  }
};
</script>
