<template>
    <v-main>
        <v-container>
            <h1 class="text-blue">Pronatel</h1>
        </v-container>
        <v-container fluid>
            <wFileVue></wFileVue>
        </v-container>
    </v-main>
</template>

  
<script>
import wFileVue from '../../assets/widget/wFile.vue';

export default {
    components: {
        wFileVue,
    },
};
</script>
  