<template>
  <div id="app">
    
    <cabecera />
    <navegacion />
    
    <router-view/>
    <footerweb />
  </div>
</template>
<script>
import cabecera from '@/components/header/header-n-0'
import navegacion from '@/components/menu/menu-n-0'
import footerweb from '@/components/footer/footer-n-0'
export default {
  name: "app",
  components: {
    cabecera,
    navegacion,
    footerweb
  },
  
}
</script>
<style>
  @import "https://fonts.googleapis.com/css?family=Lato&display=swap";
  @import '/css/bootstrap/version/v3.3.1/bootstrap.min.css';
  @import '/css/fontawesome/version/v5.10.0/css/all.min.css';
  
  @import '/css/assets/fuentes.css';
  @import '/css/assets/menu.css';
  @import '/css/style.css';
  @import '/css/assets/carrusel.css';
  @import '/css/assets/footer.css';
  @import '/css/assets/reponsivo.css';
  @import '/css/bootstrap/plugin/bootstrap-dialog.min.css';
</style>
