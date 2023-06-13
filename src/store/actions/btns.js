import { ref } from 'vue'
import { defineStore } from 'pinia'
export const estadoSidebar = defineStore('estado', () => {
    const valor = ref(false)
    function cambiarEstado() {
      valor.value=true;
    }
  
    return { valor,cambiarEstado }
  })

export const rutajson=defineStore('rutajson', () => {
  
  const data=[
    { name: 'Home',path:'home', icon: 'mdi-lan-connect'},
    { name: 'Inventario',path:'inventario', icon: 'mdi-lan-connect'},
    { name: 'AlmacenTups',path:'almacen', icon: 'mdi-lan-connect'},
    { name: 'Acctrans',path:'acctrans', icon: 'mdi-lan-connect'},
   ]
  return {data};
});

export const sidebardata=defineStore('sidebardata', () => {
  const  data={
    lambayeque: {
      config:{icon: 'mdi-lan-connect'},
      data:[
        { name: 'Acceso',path:'acceso', icon: 'mdi-lan-connect'},
        { name: 'Transporte',path:'transporte', icon: 'mdi-lan-connect'},
        { name: 'Planta',path:'planta', icon: 'mdi-lan-connect'},
        { name: 'Almacen',path:'almacen', icon: 'mdi-lan-connect'},
        { name: 'Pronatel',path:'pronatel', icon: 'mdi-lan-connect'},
        { name: 'Trabajo demanda',path:'tdemanda', icon: 'mdi-lan-connect'},
      ],
    },
    grupoequipo:{
      config:{icon: 'mdi-lan-connect'},
      data: [
        { name: 'Rectificadores',path:'acceso', icon: 'mdi-lan-connect'},
        { name: 'Baterias',path:'acceso', icon: 'mdi-lan-connect'},
      ],
    }
  }
  return data;
})