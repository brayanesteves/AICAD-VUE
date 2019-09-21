<template>
  <div id="question-email-password">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div class="header"></div>
          <div class="body">
            <div
              class="col-child panel-canvas inner inner-expanded panel-rounded"
            >
              <h1 class="h2">
                <span>¿Puedo cambiar mi email o contraseña de InfoJobs?</span>
              </h1>
              <p>
                <span></span>
              </p>
              <p>
                Sí, puedes cambiar tu email y contraseña actual sin que tus
                datos o candidaturas sufran ningún cambio ni pérdida de
                información.
                <a href="/candidate/account/index.xhtml" target="_blank"
                  >Haz click aquí</a
                >
                para cambiar el email y la contraseña actuales.
              </p>
              <p></p>
            </div>
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
#question-email-password .container .heading {
  margin: 10px 10px 20px 0;
}
#question-email-password .container .heading {
  margin: 20px 10px 20px 10px;
}
#question-email-password .container h1 {
  font-size: 30px;
  line-height: 33px;
}
#question-email-password .container .col-child {
  max-width: calc(100% - 10px);
  margin: 0 0 0 10px;
}
#question-email-password .container.col-child.inner {
  max-width: 100%;
}
#question-email-password .container .panel-rounded {
  border-radius: 6px;
}
#question-email-password .panel-canvas {
  background-color: #fff;
}
#question-email-password .container .inner-expanded {
  padding: 40px 30px;
}

#question-email-password .container h2,
#question-email-password .container .h2 {
  font-size: 25px;
  line-height: 28px;
}
#question-email-password .container h2,
#question-email-password .container .h2 {
  font-size: 20px;
  line-height: 23px;
  margin: 0 0 20px 0;
}
#question-email-password .container h1 {
  font-size: 30px;
  line-height: 33px;
}
#question-email-password .container h1 {
  font-size: 25px;
  line-height: 28px;
  margin-bottom: 35px;
}
#question-email-password .container p {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
  word-wrap: break-word;
}
#question-email-password .container a {
  transition: all 0.2s ease 0;
  text-decoration: none;
  color: #167db7;
}
</style>
<script>
import mejoras from "@/components/contains/profile/help/access-profile/mejoras.vue";
export default {
  name: "question-email-password",
  components: {
    mejoras
  }
};
</script>
