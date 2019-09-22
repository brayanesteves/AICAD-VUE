<template>
  <div id="navAICAD">
    <header>
      <div v-if="$route.name === 'home'" class="navbar-login">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">AICAD</b-navbar-brand>
        </b-navbar>
      </div>
      <div v-else-if="$route.name === 'profile'" class="navbar-profile">
        <b-navbar toggleable="lg" type="info" variant="info">
          <b-navbar-brand href="#">AICAD</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Empleos</b-nav-item>
              <b-nav-item href="#">Mis ofertas</b-nav-item>
              <b-nav-item href="#">CV</b-nav-item>
              <b-nav-item href="#">Quien me ve</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item v-bind:to="{ path: '/profile/ajustes/settings' }">Ajustes</b-dropdown-item>
                <b-dropdown-item to="/profile/ayuda/help">Ayuda</b-dropdown-item>
                <b-dropdown-item to="/profile/formacion/tips">Formación</b-dropdown-item>
                <b-dropdown-item to="/profile/consejos/training">Consejos</b-dropdown-item>
                <b-dropdown-item to="/">Cerrar Sesión</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <!--<NAVBAR: OUR>-->
      <div v-else-if="$route.name === 'main'" class="navbar-our">
        <div class="container-0">
          <!--<MENU Nº0>-->
          <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">AICAD</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item href="#">Empleo</b-nav-item>
                <b-nav-item href="#">Executive</b-nav-item>
                <b-nav-item href="#">Empresas</b-nav-item>
                <b-nav-item href="#">Consejos</b-nav-item>
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                  <b-nav-item href="#">Soy una empresa</b-nav-item>
                </b-navbar-nav>
                <b-nav-form>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Accede</b-button>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Date de Alta</b-button>
                </b-nav-form>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <!--</MENU Nº0>-->
          <!--<MENU Nº1>-->
          <b-navbar toggleable="lg" type="success" variant="primary" class="menu-our-1">
            <b-navbar-brand href="#">AICAD Jobs Hoy</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item-dropdown text="Prensa" right>
                  <b-dropdown-item href="#">Notas de prensa</b-dropdown-item>
                  <b-dropdown-item href="#">Dossier de prensa</b-dropdown-item>
                  <b-dropdown-item href="#">Indicadores AICAD Jobs</b-dropdown-item>
                  <b-dropdown-item href="#">AICAD Jobs opina</b-dropdown-item>
                  <b-dropdown-item href="#">Informes</b-dropdown-item>
                  <b-dropdown-item href="#">Contacto</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item href="#">Sobre Nosotros</b-nav-item>
                <b-nav-item-dropdown text="Sobre tus datos" right>
                  <b-dropdown-item href="#">Notas de prensa</b-dropdown-item>
                  <b-dropdown-item href="#">Dossier de prensa</b-dropdown-item>
                  <b-dropdown-item href="#">Indicadores AICAD Jobs</b-dropdown-item>
                  <b-dropdown-item href="#">AICAD Jobs opina</b-dropdown-item>
                  <b-dropdown-item href="#">Informes</b-dropdown-item>
                  <b-dropdown-item href="#">Contacto</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <!--</MENU Nº1>-->
        </div>
      </div>
      <!--<CONTINUE>-->
      <div v-else-if="$route.name === 'about-aicadjobs'" class="navbar-our">
        <div class="container-0">
          <!--<MENU Nº0>-->
          <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">AICAD</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item href="#">Empleo</b-nav-item>
                <b-nav-item href="#">Executive</b-nav-item>
                <b-nav-item href="#">Empresas</b-nav-item>
                <b-nav-item href="#">Consejos</b-nav-item>
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                  <b-nav-item href="#">Soy una empresa</b-nav-item>
                </b-navbar-nav>
                <b-nav-form>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Accede</b-button>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">Date de Alta</b-button>
                </b-nav-form>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <!--</MENU Nº0>-->
          <!--<MENU Nº1>-->
          <b-navbar toggleable="lg" type="success" variant="primary" class="menu-our-1">
            <b-navbar-brand href="#">AICAD Jobs Hoy</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item-dropdown text="Prensa" right>
                  <b-dropdown-item href="#">Notas de prensa</b-dropdown-item>
                  <b-dropdown-item href="#">Dossier de prensa</b-dropdown-item>
                  <b-dropdown-item href="#">Indicadores AICAD Jobs</b-dropdown-item>
                  <b-dropdown-item href="#">AICAD Jobs opina</b-dropdown-item>
                  <b-dropdown-item href="#">Informes</b-dropdown-item>
                  <b-dropdown-item href="#">Contacto</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item href="#">Sobre Nosotros</b-nav-item>
                <b-nav-item-dropdown text="Sobre tus datos" right>
                  <b-dropdown-item href="#">Notas de prensa</b-dropdown-item>
                  <b-dropdown-item href="#">Dossier de prensa</b-dropdown-item>
                  <b-dropdown-item href="#">Indicadores AICAD Jobs</b-dropdown-item>
                  <b-dropdown-item href="#">AICAD Jobs opina</b-dropdown-item>
                  <b-dropdown-item href="#">Informes</b-dropdown-item>
                  <b-dropdown-item href="#">Contacto</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <!--</MENU Nº1>-->
        </div>
      </div>
      <!--</NAVBAR: OUR>-->
      <div v-else class="navbar-profile">
        <b-navbar toggleable="lg" type="info" variant="info">
          <b-navbar-brand href="#">AICAD</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Empleos</b-nav-item>
              <b-nav-item href="#">Mis ofertas</b-nav-item>
              <b-nav-item href="#">CV</b-nav-item>
              <b-nav-item href="#">Quien me ve</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item v-bind:to="{ path: '/profile/ajustes/settings' }">Ajustes</b-dropdown-item>
                <b-dropdown-item to="/profile/ayuda/help">Ayuda</b-dropdown-item>
                <b-dropdown-item to="/profile/formacion/tips">Formación</b-dropdown-item>
                <b-dropdown-item to="/profile/consejos/training">Consejos</b-dropdown-item>
                <b-dropdown-item to="/">Cerrar Sesión</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "navAICAD",
  data() {
    return {
      id: this.$route.name
    };
  },
  methods: {}
};
</script>
<style scoped>
.navbar-profile nav {
  background-color: #fff !important;
}
.navbar-profile nav ul > li a {
  color: #8c9397 !important;
}
.navbar-profile nav ul > li a:hover {
  color: #007bff !important;
  transition: 1s;
}
/*----------<MENÚ: OUR>*/
.navbar-our {
  max-width: 96%;
  margin: 0 auto;
}
.navbar-our .text-primary {
  color: #000 !important;
}
.navbar-our nav {
  background-color: #fff !important;
}
.navbar-our nav ul > li a {
  color: #8c9397 !important;
}
.navbar-our nav ul > li a:hover {
  color: #007bff !important;
  transition: 1s;
}
.navbar-our .menu-our-1 {
  background-color:#9c9c9c !important;
}
.navbar-our .menu-our-1 a {
  color: #000 !important;
}
.navbar-our .menu-our-1 div ul li a {
  color: #000 !important;
}
</style>
