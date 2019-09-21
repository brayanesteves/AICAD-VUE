<template>
  <div id="not-email-sent">
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
                <span>No recibo el email para cambiar de contraseña</span>
              </h1>
              <p>
                <span>
                  Antes que nada: ¿Has comprobado que el email no haya ido a la
                  carpeta de Spam o Correo no deseado? Para evitarlo, añade la
                  dirección
                  <ins>pushinfojobs@push.infojobs.net</ins> a tu lista de
                  remitentes seguros. <br />Cuando lo hayas hecho, repite el
                  proceso para cambiar la contraseña haciendo
                  <a
                    href="//accounts.infojobs.net/security/accounts/recovery/index-responsive.xhtml?j_clientId=empleo_ij"
                    target="_blank"
                    >clic aquí.</a
                  >
                </span>
              </p>
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
#not-email-sent .container .heading {
  margin: 10px 10px 20px 0;
}
#not-email-sent .container .heading {
  margin: 20px 10px 20px 10px;
}
#not-email-sent .container h1 {
  font-size: 30px;
  line-height: 33px;
}
#not-email-sent .container .col-child {
  max-width: calc(100% - 10px);
  margin: 0 0 0 10px;
}
#not-email-sent .container.col-child.inner {
  max-width: 100%;
}
#not-email-sent .container .panel-rounded {
  border-radius: 6px;
}
#not-email-sent .panel-canvas {
  background-color: #fff;
}
#not-email-sent .container .inner-expanded {
  padding: 40px 30px;
}

#not-email-sent .container h2,
#not-email-sent .container .h2 {
  font-size: 25px;
  line-height: 28px;
}
#not-email-sent .container h2,
#not-email-sent .container .h2 {
  font-size: 20px;
  line-height: 23px;
  margin: 0 0 20px 0;
}
#not-email-sent .container h1 {
  font-size: 30px;
  line-height: 33px;
}
#not-email-sent .container h1 {
  font-size: 25px;
  line-height: 28px;
  margin-bottom: 35px;
}
#not-email-sent .container p {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
  word-wrap: break-word;
}
#not-email-sent .container a {
  transition: all 0.2s ease 0;
  text-decoration: none;
  color: #167db7;
}
</style>
<script>
import mejoras from "@/components/contains/profile/help/access-profile/mejoras.vue";
export default {
  name: "not-email-sent",
  components: {
    mejoras
  }
};
</script>
