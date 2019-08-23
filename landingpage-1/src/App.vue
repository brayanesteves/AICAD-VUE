<template>
  <div id="aicad">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <cabecera />
    <router-view/>
  </div>
</template>
<script>
import cabecera  from '@/components/header/header-n-0'
export default {
  name: "aicad",
  components: {
    cabecera,
    /*navegacion,
    footerweb*/
  },
}
</script>
<style>

</style>
