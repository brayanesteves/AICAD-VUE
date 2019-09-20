<template>
  <div id="create-add-present" class="create-add-present">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div class="col-child panel-canvas inner inner-expanded panel-rounded">
            <h1 class="h2">
              <span>¿Cómo puedo crear, adjuntar o editar una carta de presentación?</span>
            </h1>
            <p>
              <span>
                En la sección
                <a href="/candidate/cv/edition/private-view.xhtml" target="_blank">Mis CVs</a> del menú principal, puedes crear una carta de presentación o editar las que ya tengas creadas. Verás en la columna derecha (desde ordenador) o abajo de todo (desde dispositivo móvil) el apartado “Cartas de presentación”. Allí verás en color azul las que ya tienes creadas. Haz clic en ellos para editarlos, o crea una nueva con el botón de debajo.
              </span>
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
.heading h1, .heading h2 {
	font-family: Proximanovasemibold,Helvetica,Arial,sans-serif;
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
.content-wrapper, .inner {
	padding: 20px 30px;
}
h2, .h2 {
	font-size: 25px;
	line-height: 28px;
    margin: 0 0 20px 0;
}
h1, h2, .h2, h3, .h3 {
	font-family: Proximanovasemibold,Helvetica,Arial,sans-serif;
	color: #2d3133;
}

</style>
<script>
import mejoras from "@/components/contains/profile/help/access-profile/mejoras.vue";
export default {
  name: "create-add-present",
  components: {
    mejoras
  }
};
</script>