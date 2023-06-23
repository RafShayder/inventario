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
        {titulo:'Pronatel', name: 'pronatel',path:'', icon: 'mdi-domain'},
        {titulo:'Trabajo a demanda', name: 'tdemanda',path:'', icon: 'mdi-account-hard-hat'},
      ],
    },
    tups: {
      icon: 'mdi-apps-box',
      data:[
        {titulo:'Planta', name: 'planta',path:'planta', icon: 'mdi-download-network'},
        {titulo:'Almacen', name: 'almacen',path:'almacen', icon: 'mdi-warehouse'},
      ],
    },
    grupoequipo:{
      icon: 'mdi-select-group',
      data: [
        {titulo:'Rectificadores', name: 'grupoequipo',path:'acceso', icon: 'mdi-camera-rear-variant'},
        {titulo:'Baterias', name: 'grupoequipo',path:'acceso', icon: 'mdi-battery-charging-medium'},
      ],
    }
  }
  return {data};
})