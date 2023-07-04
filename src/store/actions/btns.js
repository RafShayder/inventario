import { ref } from 'vue'
import { defineStore } from 'pinia'
export const estadoSidebar = defineStore('estado', () => {
    const valor = ref(false)
    function cambiarEstado() {
      valor.value=!valor.value;
    }
  
    return { valor,cambiarEstado }
  })

export const sidebardata=defineStore('sidebardata', () => {
  const  data={
    lambayeque: {
      icon: 'mdi-apps-box',
      data:[
        {titulo:'Acceso', name: 'Inventario',path:'LAC', icon: 'mdi-access-point-check', query:{titulo:'Inventario de Acceso',ruta:'Acceso'}},
        {titulo:'Transporte', name: 'Inventario',path:'LTX', icon: 'mdi-cable-data'},
        {titulo:'Pronatel', name: 'pronatel',path:'', icon: 'mdi-domain' ,query:{}},
        {titulo:'Trabajo a demanda', name: 'tdemanda',path:'', icon: 'mdi-account-hard-hat',query:{}},
      ],
    },
    tups: {
      icon: 'mdi-apps-box',
      data:[
        {titulo:'Planta', name: 'planta',path:'planta', icon: 'mdi-download-network',query:{} },
        {titulo:'Almacen', name: 'almacen',path:'almacen', icon: 'mdi-warehouse' ,query:{} },
      ],
    },
    grupoequipo:{
      icon: 'mdi-select-group',
      data: [
        {titulo:'Rectificadores', name: 'grupoequipo',path:'acceso', icon: 'mdi-camera-rear-variant' ,query:{} },
        {titulo:'Baterias', name: 'grupoequipo',path:'acceso', icon: 'mdi-battery-charging-medium' ,query:{} },
      ],
    }
  }
  return {data};
});

