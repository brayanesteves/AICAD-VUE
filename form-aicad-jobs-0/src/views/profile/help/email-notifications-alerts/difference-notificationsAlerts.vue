<template>
  <div
    id="difference-notificationsAlerts"
    class="difference-notificationsAlerts"
  >
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
              <span
                >¿Qué diferencia hay entre Notificaciones y Alertas, y cómo las
                activo/desactivo?</span
              >
            </h1>
            <p>
              <span></span>
            </p>
            <p>
              <strong>Alertas por email:</strong>
              <br />Si quieres crear una nueva alerta por email, realiza una
              búsqueda de empleo y a continuación haz clic en el botón [Crear
              alerta].A partir de ese momento recibirás un mail diario con los
              resultados de esa búsqueda de empleo que has realizado.Para
              gestionar las alertas que tienes creadas, puedes hacerlo desde
              Ajustes del menú principal. Allí también podrás crear nuevas y
              eliminar aquellas que ya no te interesen.
            </p>
            <p>
              <strong
                >Notificaciones de las aplicaciones en tus dispositivos
                móviles:</strong
              >
              <br />Las puedes activar o desactivar desde Ajustes en el menú de
              cada aplicación (Android y iOS)Por el momento, las notificaciones
              de la App Android y las alertas email no están sincronizadas.
              Esperamos poder ofrecerte más adelante, una gestión completa y
              transversal de todas las notificaciones desde cualquier
              dispositivo.
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
  name: "difference-notificationsAlerts",
  components: {
    mejoras
  }
};
</script>
