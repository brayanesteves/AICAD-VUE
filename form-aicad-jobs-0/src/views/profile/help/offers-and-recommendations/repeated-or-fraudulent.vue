<template>
  <div id="repeated-or-fraudelent" class="repeated-or-fraudelent">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div class="col-child panel-canvas inner inner-expanded panel-rounded">
            <h1 class="h2">
              <span>¿Qué puedo hacer si veo ofertas repetidas o que parecen fraudulentas?</span>
            </h1>
            <p>
              <span></span>
            </p>
            <p>
              Si has iniciado sesión verás que debajo del botón inscribirse (el de debajo de la página) hay un enlace en el que puedes denunciar las ofertas que consideres fraudulentas indicándonos el motivo. Desde InfoJobs tomaremos las medidas que creamos oportunas para frenar cualquier comportamiento que no encaje con lo recogido en nuestras
              <a
                href="/rules-and-services.xhtml"
                target="_blank"
              >características y reglas de uso</a> para la publicación de ofertas en InfoJobs.
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
  name: "repeated-or-fraudelent",
  components: {
    mejoras
  }
};
</script>