<template>
  <div id="where-aicadjobs" class="where-aicadjobs">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div class="col-child panel-canvas inner inner-expanded panel-rounded">
            <h1 class="h2">
              <span>
                <strong>¿Dónde está la red de contactos de AICAD Jobs?</strong>
              </span>
            </h1>
            <p>
              <span></span>
            </p>
            <p>La red de contactos ya no está disponible en AICAD Jobs.</p>
            <p>Tu opinión y la de otros candidatos nos importa mucho y tras valorarlo y hablarlo a nivel interno hemos decidido eliminar este servicio y focalizarnos en crear otras herramientas que se ajusten más a tus necesidades.Por tanto, el servicio “red de contactos” se ha descontinuado.</p>
            <p>Si tienes dudas, consultas o alguna incidencia, siempre puedes contactar con Atención al Cliente al final de esta página en [Contáctanos]</p>
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
  name: "where-aicadjobs",
  components: {
    mejoras
  }
};
</script>