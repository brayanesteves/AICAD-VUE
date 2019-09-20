<template>
  <div id="candidate-states-exist" class="candidate-states-exist">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div class="col-child panel-canvas inner inner-expanded panel-rounded">
            <h1 class="h2">
              <span>¿Cuántos estados de la candidatura existen y qué significan?</span>
            </h1>
            <p>
              <span></span>
            </p>
            <p>
              <strong>Inscrito</strong>: Te has inscrito correctamente en dicha oferta.
              <br />
              <strong>CV Leído</strong>: La empresa ha leído tu CV.
              <br />
              <strong>Sigues en proceso</strong>: La empresa ha incluido tu CV entre los que siguen en el proceso
              <br />
              <strong>Mensaje de la empresa</strong>: La empresa te ha enviado un mensaje por email
              <br />
              <strong>Descartado</strong>: La empresa ha considerado que tu perfil no se adecúa al perfil que están buscando. En algunos casos InfoJobs podrá comunicarte los motivos por los que has sido descartado
              <br />
              <strong>CV exportado</strong>: Únicamente para esta inscripción, has aceptado que la empresa utilice los datos de tu CV en otra herramienta externa y diferente a InfoJobs
              <br />
              <strong>Has vuelto al proceso</strong>: La empresa ha vuelto a considerar tu candidatura dentro del proceso de selección.
              <br />
              <strong>Proceso cerrado</strong>: La empresa ha cerrado el proceso de selección y no acepta más inscripciones. Desde InfoJobs ya no podemos darte más información sobre este proceso de selección.
              <br />
              <strong>Proceso reabierto</strong>: La empresa ha vuelto a reabrir el proceso de selección que había cerrado anteriormente.
            </p>
            <p>
              <strong>La empresa ha gestionado CVs</strong>: La empresa ha realizado algún movimiento, visualización o cambio en el proceso de selección. Si tú no tienes ningún estado nuevo en la cronología, significa que los cambios no te afectan.
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
  name: "candidate-states-offers",
  components: {
    mejoras
  }
};
</script>