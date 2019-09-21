<template>
  <div id="ajustes">
    <section id="section-0">
      <div class="ajustes-section-header">
        <b-container>
          <b-row>
            <b-col sm="12" md="12">
              <h1>Ajustes</h1>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="ajustes-section-body">
        <b-container>
          <b-row>
            <b-col sm="12" md="12" id="datos-acceso">
              <div class="datos-acceso">
                <div class="header">
                  <h2>Datos de Acceso</h2>
                </div>
                <div class="body">
                  <ul>
                    <li>
                      <a
                        class="fas fa-envelope-open-text"
                        href="/ajustes/datos-acceso/change-email"
                      >
                        Cambiar email
                        <span class="fas fa-chevron-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/ajustes/datos-acceso/change-password">
                        Cambiar contraseña
                        <span class="fa fa-arrow-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>

            <b-col sm="12" md="12" id="notificaciones-y-consejos">
              <div class="notificaciones-y-consejos">
                <div class="header">
                  <h2>Notificaciones y consejos</h2>
                </div>
                <div class="body">
                  <ul>
                    <li>
                      <a
                        href="/ajustes/notificaciones-y-consejos/alertas-de-empleo-por-email"
                      >
                        Alerta de empleo por email
                        <span class="fa fa-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/ajustes/notificaciones-y-consejos/settings-comunications"
                      >
                        Configura tus comunicaciones
                        <span class="fa fa-arrow-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>

            <b-col sm="12" md="12" id="privacidad">
              <div class="privacidad">
                <div class="header">
                  <h2>Privacidad</h2>
                </div>
                <div class="body">
                  <ul>
                    <li>
                      <a href="/ajustes/privacy/settings-privacy">
                        Que ven las empresas
                        <span class="fa fa-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/ajustes/privacy/settings-privacy">
                        Que se ve en el internet de tu perfil
                        <span class="fa fa-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/ajustes/privacy/settings-privacy">
                        Bloquear empresas
                        <span class="fa fa-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/ajustes/privacy/settings-privacy">
                        Publicidad inteligente
                        <span class="fa fa-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/ajustes/privacy/settings-privacy">
                        Como gestionamos tus datos
                        <span class="fa fa-arrow-right"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/ajustes/privacy/settings-privacy">
                        Descarga una copia de datos
                        <span class="fa fa-arrow-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>

            <b-col sm="12" md="12" id="darme-de-baja">
              <div class="darme-de-baja">
                <div class="header">
                  <h2></h2>
                </div>
                <div class="body">
                  <ul>
                    <li>
                      <a href>
                        Darme de baja
                        <span class="fa fa-arrow-right"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>
  </div>
</template>
<style scoped>
#section-0 {
  margin-top: 20px;
}
#section-0 .ajustes-section-header {
  margin-top: 10px;
  margin-bottom: 20px;
  margin-right: 10px;
  text-align: left;
}
.row > div {
  margin: 5px 0;
  border-radius: 8px;
  padding: 40px 30px;
}
.ajustes-section-header h1 {
  font-size: 30px;
  line-height: 33px;
  color: #2d3133;
}
.ajustes-section-body .container ul {
  list-style: none;
}

.ajustes-section-body .container #datos-acceso {
  background-color: #fff;
}
.datos-acceso .header {
  text-align: left;
}
.datos-acceso .header h2 {
  font-size: 25px;
  line-height: 28px;
  margin: 0 0 20px 0;
  color: #2d3133;
}
.datos-acceso .body ul {
  text-align: left;
}
.datos-acceso .body ul li {
  padding-top: 20px;
}
.datos-acceso .body ul li a {
  color: #2d3133;
  text-decoration: none;
}

.ajustes-section-body .container #notificaciones-y-consejos {
  background-color: #fff;
}
.notificaciones-y-consejos .header {
  text-align: left;
}
.notificaciones-y-consejos .header h2 {
  font-size: 25px;
  line-height: 28px;
  margin: 0 0 20px 0;
  color: #2d3133;
}
.notificaciones-y-consejos .body ul {
  text-align: left;
}
.notificaciones-y-consejos .body ul li {
  padding-top: 20px;
}
.notificaciones-y-consejos .body ul li a {
  color: #2d3133;
  text-decoration: none;
}

.ajustes-section-body .container #privacidad {
  background-color: #fff;
}
.privacidad .header {
  text-align: left;
}
.privacidad .header h2 {
  font-size: 25px;
  line-height: 28px;
  margin: 0 0 20px 0;
  color: #2d3133;
}
.privacidad .body ul {
  text-align: left;
}
.privacidad .body ul li {
  padding-top: 20px;
}
.privacidad .body ul li a {
  color: #2d3133;
  text-decoration: none;
}

.ajustes-section-body .container #darme-de-baja {
  background-color: #fff;
}
.darme-de-baja .header {
  text-align: left;
}
.darme-de-baja .header h2 {
  font-size: 25px;
  line-height: 28px;
  margin: 0 0 20px 0;
  color: #2d3133;
}
.darme-de-baja .body ul {
  text-align: left;
}
.darme-de-baja .body ul li {
  padding-top: 20px;
}
.darme-de-baja .body ul li a {
  color: #2d3133;
  text-decoration: none;
}
</style>
