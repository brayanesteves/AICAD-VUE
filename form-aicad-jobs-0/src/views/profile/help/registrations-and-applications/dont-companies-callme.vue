<template>
  <div id="dont-companies-callme" class="dont-companies-callme">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div class="col-child panel-canvas inner inner-expanded panel-rounded">
            <h1 class="h2">
              <span></span>
            </h1>
            <p>
              <span></span>
            </p>
            <p>
              En InfoJobs no intervenimos en los procesos de selección porque cada empresa es quien gestiona los CVs como considera conveniente y es quien decide si el candidato tiene el perfil adecuado para el puesto ofertado. El consejo que podemos darte es que tengas tu CV completado al máximo y permanentemente actualizado. Además, te recomendamos
              <a
                href="https://orientacion-laboral.infojobs.net/buscar-trabajo-requisitos"
              >este artículo de nuestra sección de Orientación laboral</a>, donde una reclutadora explica cómo gestiona sus procesos de selección. ¡Esperamos que también sea de utilidad!
            </p>
            <p>Por otro lado, somos conscientes de que algunas empresas no actualizan con celeridad el estado de las candidaturas. Desde InfoJobs, concienciamos a las empresas&nbsp;para que actualicen el estado del proceso de selección para poder ofrecer así un mejor servicio a los candidatos.</p>
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
  name: "dont-companies-callme",
  components: {
    mejoras
  }
};
</script>