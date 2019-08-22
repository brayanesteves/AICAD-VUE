<template>
  <div id="aicad">
    
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
  name: "aicad",
  components: {
    cabecera,
    navegacion,
    footerweb
  },
  data: () => ({
    navLinks: [
      {
        text: "",
        path: "",
        icon: "",
        img: ""
      }
    ]
  })
}
</script>
<style>

</style>
