<template>
  <div id="not-access-profile">
    <b-container>
      <div class="header heading">
        <h1 id="title-value">Ayuda y sugerencias</h1>
      </div>
      <b-row>
        <b-col sm="12" md="8">
          <div class="header"></div>
          <div class="body">
            <div class="col-child panel-canvas inner inner-expanded panel-rounded">
              <h1 class="h2">
                <span>No puedo acceder a mi cuenta porque no recuerdo o no puedo entrar al email que uso para InfoJobs</span>
              </h1>
              <p>
                <span></span>
              </p>
              <p>
                No puedo acceder a mi cuenta porque no recuerdo o no puedo entrar al email que uso para InfoJobs. Para ayudarte a recuperar el acceso a tu cuenta, primero debemos comprobar tu identidad.
                <br />Por favor, envíanos
                <a href="/candidate/help/questions.xhtml">a través de este formulario</a>, los siguientes datos:
              </p>
              <ol>
                <li>1. Nombre y apellidos, DNI, Calle, Número y Piso, Código Postal, Localidad y Provincia.</li>
                <li>2. Un teléfono de contacto.</li>
                <li>3. Tu antiguo email y el nuevo email que quieres usar para acceder a InfoJobs.</li>
              </ol>
              <p>Tan pronto sea posible, nuestro equipo hará las modificaciones oportunas y se pondrá en contacto contigo al email desde el cual nos envíes tus datos.</p>
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
#not-access-profile .container .heading {
  margin: 10px 10px 20px 0;
}
#not-access-profile .container .heading {
  margin: 20px 10px 20px 10px;
}
#not-access-profile .container h1 {
  font-size: 30px;
  line-height: 33px;
}
#not-access-profile .container .col-child {
  max-width: calc(100% - 10px);
  margin: 0 0 0 10px;
}
#not-access-profile .container.col-child.inner {
  max-width: 100%;
}
#not-access-profile .container .panel-rounded {
  border-radius: 6px;
}
#not-access-profile .panel-canvas {
  background-color: #fff;
}
#not-access-profile .container .inner-expanded {
  padding: 40px 30px;
}

#not-access-profile .container h2,
#not-access-profile .container .h2 {
  font-size: 25px;
  line-height: 28px;
}
#not-access-profile .container h2,
#not-access-profile .container .h2 {
  font-size: 20px;
  line-height: 23px;
  margin: 0 0 20px 0;
}
#not-access-profile .container h1 {
  font-size: 30px;
  line-height: 33px;
}
#not-access-profile .container h1 {
  font-size: 25px;
  line-height: 28px;
  margin-bottom: 35px;
}
#not-access-profile .container p {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
  word-wrap: break-word;
}
#not-access-profile .container a {
  transition: all 0.2s ease 0;
  text-decoration: none;
  color: #167db7;
}
</style>
<script>
import mejoras from "@/components/contains/profile/help/access-profile/mejoras.vue";
export default {
  name: "not-access-profile",
  components: {
    mejoras
  }
};
</script>