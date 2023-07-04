<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn  icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>
        <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
  </template>
  <script>
  export default {
    data: () => ({
      items: [
        { title: 'Opcion 0' },
        { title: 'Opcion 1' },
        { title: 'Cerrar Sesion' },
      ],
    }),
  }
  </script>