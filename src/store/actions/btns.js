import { ref } from 'vue'
import { defineStore } from 'pinia'
export const estadoSidebar = defineStore('estado', () => {
    const valor = ref(false)
    function cambiarEstado() {
      valor.value=true;
    }
  
    return { valor,cambiarEstado }
  })

export const sidebardata=defineStore('sidebardata', () => {
  const  data={
    lambayeque: {
      icon: 'mdi-apps-box',
      data:[
        {titulo:'Acceso', name: 'acctrans',path:'LACC', icon: 'mdi-access-point-check'},
        {titulo:'Transporte', name: 'acctrans',path:'LTRX', icon: 'mdi-cable-data'},
       
      ],
    },
   
  }
  return {data};
})