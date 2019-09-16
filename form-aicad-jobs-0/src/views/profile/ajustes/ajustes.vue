<template>
  <div id="ajustes">
    <section id="section-0">
      <div class="ajustes-section-header">
        <h1>Ajustes</h1>
      </div>
      <div class="ajustes-section-body">
        <b-container>
          <b-row>
            <b-col sm="12" md="12" class="acceso">
              <div class="datos-acceso">
                <div class="header">
                  <h2>Datos de Acceso</h2>
                </div>
                <div class="body">
                  <ul>
                    <li>
                      <a href>Cambiar email</a>
                    </li>
                    <li>
                      <a href>Cambiar contraseña</a>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>

            <b-col sm="12" md="12">
              <div class="datos-acceso">
                <div class="header">
                  <h2>Notificaciones y consejos</h2>
                </div>
                <div class="body">
                  <ul>
                    <li>
                      <a href>Alerta de empleo por email</a>
                    </li>
                    <li>
                      <a href>Configura tus comunicaciones</a>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>

            <b-col sm="12" md="12">
              <div class="datos-acceso">
                <div class="header">
                  <h2>Privacidad</h2>
                </div>
                <div class="body">
                  <ul>
                    <li>
                      <a href>Que ven las empresas</a>
                    </li>
                    <li>
                      <a href>Que se ve en el internet de tu perfil</a>
                    </li>
                    <li>
                      <a href>Bloquear empresas</a>
                    </li>
                    <li>
                      <a href>Publicidad inteligente</a>
                    </li>
                    <li>
                      <a href>Como gestionamos tus datos</a>
                    </li>
                    <li>
                      <a href>Descarga una copia de datos</a>
                    </li>
                  </ul>
                </div>
              </div>
            </b-col>

            <b-col sm="12" md="12">
              <div class="datos-acceso">
                <div class="header">
                  <h2></h2>
                </div>
                <div class="body">
                  <ul>
                    <li>
                      <a href>Darme de baja</a>
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
.datos-acceso .header h2 {
  font-size: 25px;
  line-height: 28px;
  margin: 0 0 20px 0;
  color:#2d3133;
}
.ajustes-section-header h1 { font-size:30px; line-height:33px; color:#2d3133; }
.ajustes-section-body .container ul { list-style: none; }

.ajustes-section-body .container .acceso { background-color: #fff; }
</style>