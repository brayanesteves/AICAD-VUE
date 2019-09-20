<template>
  <div class="profile">
    <div id="views-profile" v-if="$route.name != ''">
      <router-view />
    </div>
    <div id="view-profile-main" v-else>
      <h1>HOLA</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "profile",
  data() {
    return {
      id: this.$route.name
    };
  }
};
</script>
