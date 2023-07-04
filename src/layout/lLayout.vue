<template>
    <lSidebar></lSidebar>
    <lHeader></lHeader>
    <v-container fluid class="fondo">
      <router-view />
    </v-container>
    <lFooter></lFooter>
</template>
  
<script>
import lHeader from "./lHeader.vue";
import lSidebar from "./lSidebar.vue";
import lFooter from "./lFooter.vue";
export default {
  name: "lLayout",
  components: {
    lHeader,
    lSidebar,
    lFooter
  }
}
</script>
<style scoped>
.fondo{
  background-color:#F5F8FA;
}
</style>