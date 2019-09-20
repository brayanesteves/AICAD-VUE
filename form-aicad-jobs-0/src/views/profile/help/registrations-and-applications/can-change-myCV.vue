<template>
  <div id="can-change-myCV" class="can-change-myCV">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div class="col-child panel-canvas inner inner-expanded panel-rounded">
            <h1 class="h2">
              <span>¿Puedo modificar mi CV una vez me haya inscrito en una oferta?</span>
            </h1>
            <p>
              <span></span>
            </p>
            <p>
              Al inscribirte en una oferta, en realidad no estás “mandando” tu CV, más bien estás inscribiendo tu CV online en la oferta. Por tanto, cuando una empresa quiera consultar tu CV, siempre verá la versión más actualizada de tu CV.
              <br />Ejemplo: Si te inscribiste ayer en una oferta, hoy haces un cambio en tu CV y la empresa consulta tu CV mañana. La empresa verá tu CV con el último cambio aplicado.
              <br />* La empresa sólo verá los datos del CV con el que te hayas inscrito en su oferta, no los de ningún otro CV que tengas en InfoJobs.
            </p>
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
  name: "can-change-myCV",
  components: {
    mejoras
  }
};
</script>