<template>
  <div id="app">
    <navAicad />
    <router-view />
    <footerAicad />
  </div>
</template>
<script>
import navAicad from '@/components/nav/nav'
import footerAicad from '@/components/footer/footer'
import {mapState} from 'vuex'

export default {
  name:"app",
  components: {
    navAicad,
    footerAicad
  },
  
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color:#f2f2f2;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
