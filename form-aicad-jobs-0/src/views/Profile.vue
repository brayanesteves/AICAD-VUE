<template>
  <div class="about">
    <router-view />
  </div>
</template>
<script>
export default {
  data(){
    return {
      id:this.$route.name
    }
  }
}
</script>
