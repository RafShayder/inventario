<template>
    <lSidebar></lSidebar>
    <lHeader></lHeader>
    <v-container fluid >
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