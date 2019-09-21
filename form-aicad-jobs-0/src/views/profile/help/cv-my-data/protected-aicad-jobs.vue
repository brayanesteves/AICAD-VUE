<template>
  <div id="protected-aicad-jobs" class="protected-aicad-jobs">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div
            class="col-child panel-canvas inner inner-expanded panel-rounded"
          >
            <h1 class="h2">
              <span>¿Cómo protege AICAD Jobs mis datos?</span>
            </h1>
            <p>
              <span>
                En AICAD Jobs nos tomamos muy en serio los datos personales que
                nos facilitas al usar nuestros servicios y nos comprometemos a
                mantener tus datos personales completamente a salvo. Si deseas
                saber más, te explicamos en qué casos compartimos tus datos y
                con qué propósito y cómo puedes modificar los permisos para
                hacerlo.
                <router-link to="" target="_blank">Más información</router-link>
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
  name: "protected-aicad-jobs",
  components: {
    mejoras
  }
};
</script>
