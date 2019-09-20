<template>
  <div id="offers-for-you" class="offers-for-you">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div class="col-child panel-canvas inner inner-expanded panel-rounded">
            <h1 class="h2">
              <span>¿Qué son las Ofertas para ti?</span>
            </h1>
            <p>
              <span></span>
            </p>
            <p>Son ofertas recomendadas para ti, en base a tus búsquedas, inscripciones y experiencia laboral. Analizamos qué ofertas buscas, en qué ofertas te inscribes y la experiencia laboral de tu CV. Así podremos encontrar ofertas que encajen con tus intereses y recomendártelas.</p>
            <p>
              <strong>¿Dónde encuentro las Ofertas para ti?</strong>
            </p>
            <p></p>
            <ul class="list-default list-bullet-default">
              <li>En la app de Android, las encontrarás como sección del menú.</li>
              <li>En la Web, están ubicadas en la parte inferior de la página “Mi InfoJobs”.</li>
            </ul>
            <p></p>
            <p>
              <strong>¿Sustituyen a las búsquedas que hago habitualmente?</strong>
            </p>
            <p>No las sustituyen, las complementan. Sigue buscando e inscribiéndote como hasta ahora, así podremos aprender sobre tus intereses y recomendarte aquellas ofertas que te pueden interesar.</p>
            <p>
              <strong>¿Por qué veo pocas recomendaciones?</strong>
            </p>
            <p>El listado de recomendaciones tiene un máximo de 10 ofertas. Pero se van renovando para que siempre tengas nuevas ofertas.</p>
            <p>
              <strong>¿Por qué a veces no tengo recomendaciones?</strong>
            </p>
            <p>Puede que en alguna ocasión la sección esté vacía. Para que podamos ofrecerte recomendaciones, primero debes buscar e inscribirte en ofertas como lo haces habitualmente. Así, podremos aprender sobre tus intereses y encontraremos aquellas ofertas interesantes para ti.</p>
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
.list-bullet-default > li::before, .list-bullet-default > dt::before {
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
.list-bullet-default > li, .list-bullet-default > dt, .list-bullet-default > dd {
	padding-left: 15px;
}
.list-default > li, .list-default > dt {
	display: block;
	position: relative;
	margin-bottom: 10px;
	word-break: break-word;
}
p {
	font-size: 16px;
	line-height: 20px;
	margin-bottom: 15px;
	word-wrap: break-word;
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
p:last-child,
p:only-child {
  margin-bottom: 0;
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
  name: "offers-for-you",
  components: {
    mejoras
  }
};
</script>