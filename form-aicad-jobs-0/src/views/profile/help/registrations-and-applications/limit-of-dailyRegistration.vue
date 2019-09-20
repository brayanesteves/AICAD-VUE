<template>
  <div id="limit-of-dailyRegistration" class="limit-of-dailyRegistration">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div class="col-child panel-canvas inner inner-expanded panel-rounded">
            <h1 class="h2">
              <span>¿Límite de inscripciones diarias? Lee toda la información aquí</span>
            </h1>
            <p>
              <span></span>
            </p>
            <p>A partir de Junio de 2016, se ha implementado un límite de 50 inscripciones diarias. El motivo de éste, es el de mantener la calidad, rendimiento y agilidad de los procesos de inscripción. El límite se reinicia cada 24 horas. Por tanto, cada día a las 00:00, volverás a tener 50 inscripciones disponibles. Ten en cuenta que el nº de inscripciones no es acumulable y tampoco se puede aumentar. Todos los usuarios de InfoJobs tienen el mismo número de inscripciones, no hay excepciones.</p>
            <p>
              <strong>Consejos para optimizar tus inscripciones.</strong>
              <br />Cuando te apuntas a ofertas en las que no cumples todos los requisitos se resiente tu reputación, y es posible que te perjudique si algún día esa misma empresa publica una oferta ideal para ti.
              <br />Por eso, no recomendamos inscribirse en más de una oferta de la misma empresa; especialmente si las ofertas son muy diferentes entre ellas.
              <br />Te aconsejamos inscribirte solamente en aquellas ofertas que se ajusten a tu perfil e intereses. Para ello, puedes utilizar los filtros de búsqueda para encontrar ofertas ideales para ti. Por ejemplo el salario, la jornada laboral o tu experiencia, entre otros.
              <br />Todo ello, quizá haga que te inscribas en menos ofertas, pero tendrás más probabilidades de ser contratado/a. Recuerda, más no siempre es mejor.
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
</style>
<script>
import mejoras from "@/components/contains/profile/help/access-profile/mejoras.vue";
export default {
  name: "limit-of-dailyRegistration",
  components: {
    mejoras
  }
};
</script>