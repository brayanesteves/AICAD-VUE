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
                <b-dropdown-item to="/profile/ajustes/settings">Ajustes</b-dropdown-item>
                <b-dropdown-item to="/profile/ayuda/help">Ayuda</b-dropdown-item>
                <b-dropdown-item to="/profile/formacion/tips">Formación</b-dropdown-item>
                <b-dropdown-item to="/profile/consejos/training">Consejos</b-dropdown-item>
                <b-dropdown-item to="/">Cerrar Sesión</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

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
                <b-dropdown-item to="/profile/ajustes/settings">Ajustes</b-dropdown-item>
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
.navbar {
  background-color: #167db7 !important;
}
.navbar-profile nav { background-color: #fff !important; }
.navbar-profile nav ul > li a { color: #8c9397 !important; }
.navbar-profile nav ul > li a:hover { color: #007bff !important; transition:1s; }
</style>