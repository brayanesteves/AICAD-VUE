<template>
  <div id="question-password">
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
                <span>He olvidado mi contraseña, ¿qué debo hacer?</span>
              </h1>
              <p>
                <span></span>
              </p>
              <p>
                Si has olvidado tu contraseña, puedes cambiarla a través de tu
                correo electrónico.
                <br />Por favor,
                <a
                  href="//accounts.infojobs.net/security/accounts/recovery/index-responsive.xhtml?j_clientId=empleo_ij"
                  target="_blank"
                  >haz clic aquí</a
                >
                y escribe el correo electrónico que usas en tu cuenta InfoJobs.
                A continuación te mandaremos un email con las indicaciones para
                crear tu nueva contraseña.
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
#question-password .container .heading {
  margin: 10px 10px 20px 0;
}
#question-password .container .heading {
  margin: 20px 10px 20px 10px;
}
#question-password .container h1 {
  font-size: 30px;
  line-height: 33px;
}
#question-password .container .col-child {
  max-width: calc(100% - 10px);
  margin: 0 0 0 10px;
}
#question-password .container.col-child.inner {
  max-width: 100%;
}
#question-password .container .panel-rounded {
  border-radius: 6px;
}
#question-password .panel-canvas {
  background-color: #fff;
}
#question-password .container .inner-expanded {
  padding: 40px 30px;
}

#question-password .container h2,
#question-password .container .h2 {
  font-size: 25px;
  line-height: 28px;
}
#question-password .container h2,
#question-password .container .h2 {
  font-size: 20px;
  line-height: 23px;
  margin: 0 0 20px 0;
}
#question-password .container h1 {
  font-size: 30px;
  line-height: 33px;
}
#question-password .container h1 {
  font-size: 25px;
  line-height: 28px;
  margin-bottom: 35px;
}
#question-password .container p {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
  word-wrap: break-word;
}
#question-password .container a {
  transition: all 0.2s ease 0;
  text-decoration: none;
  color: #167db7;
}
</style>
<script>
import mejoras from "@/components/contains/profile/help/access-profile/mejoras.vue";
export default {
  name: "question-password",
  components: {
    mejoras
  }
};
</script>
