<template>
  <div id="stopped-offers" class="stopped-offers">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div class="col-child panel-canvas inner inner-expanded panel-rounded">
            <h1 class="h2">
              <span>¿Por qué he dejado de recibir ofertas de empleo en mi email?</span>
            </h1>
            <p>
              <span></span>
            </p>
            <p>Puede que no recibas ofertas en tu email porque las ofertas entran a la carpeta de “Correo no deseado” de tu correo electrónico. En ocasiones, puede ser que los gestores de correo (Gmail, Hotmail, Yahoo!, etc.) interpreten erróneamente algunos emails como correo no deseado ("spam") y que por eso no los recibas en tu bandeja de entrada. Para recibir las ofertas sin problemas, te aconsejamos que añadas la dirección pushinfojobs@push.infojobs.net a tu lista de contactos.</p>
            <p>
              Si has comprobado tu buzón Spam y no están los emails de ofertas, significa que no tienes la alerta creada. Puede que la borraras anteriormente. ¡No pasa nada! Crear una alerta es fácil y sencillo. Puedes ir a
              <a href="https://www.infojobs.net/candidate/account/index.xhtml">Ajustes</a> del menú principal y crear nuevas alertas o eliminar aquellas que ya no te interesen.
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
  name: "stopped-offers",
  components: {
    mejoras
  }
};
</script>