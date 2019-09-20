<template>
  <div id="question-my-cv" class="question-my-cv">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div class="col-child panel-canvas inner inner-expanded panel-rounded">
            <h1 class="h2">
              <span>¿Cómo modifico mi CV?</span>
            </h1>
            <p>
              <span></span>
            </p>
            <p>
              Dirígete a la sección
              <a
                href="/candidate/cv/edition/private-view.xhtml"
                target="_blank"
              >Mis CVs</a> del menú principal. Una vez allí ya puede añadir experiencias, estudios u otros, así como editar cualquiera existente. Sólo tienes que hacer clic en el botón “Editar” de cada campo o un clic encima del campo que quieres editar si estas en la web desde tu dispositivo móvil.
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
.inner-expanded {
  padding-bottom: 20px;
  padding-top: 20px;
}
.content-wrapper,
.inner {
  padding: 20px 30px;
}
h2,
.h2 {
  font-size: 25px;
  line-height: 28px;
}
h2,
.h2 {
  font-size: 20px;
  line-height: 23px;
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
h1 {
  font-size: 30px;
  line-height: 33px;
}
h1 {
  font-size: 25px;
  line-height: 28px;
  margin-bottom: 35px;
}
p {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
  word-wrap: break-word;
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
  name: "question-my-cv",
  components: {
    mejoras
  }
};
</script>