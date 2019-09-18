<template>
  <div class="profile">
    <router-view />
  </div>
</template>
<script>
export default {
  name:"profile",
  data(){
    return {
      id:this.$route.name
    }
  }
}
</script>
