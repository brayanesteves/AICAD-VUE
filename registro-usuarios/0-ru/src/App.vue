<template>
  <div id="wrapper" class="wrapper">
    <!--</CONTENEDOR PADRE>-->
    <div class="container">
      <containerh0 msg="Container hijo Nº0"></containerh0>
      <containerh1 msg="Container hijo Nº0"></containerh1>
      <footerweb></footerweb>
    </div>   
		<!--</CONTENEDOR PADRE>-->
  </div>
</template>

<script>
import containerh0 from './components/container-h-0'
import containerh1 from './components/container-h-1'
import footerweb from './components/footer'

export default {
  name: 'app',
  components: {
    containerh0,
    containerh1,
    footerweb
  }
}
</script>

<style lang="css">
.wrapper { min-height:100%; } 
</style>
