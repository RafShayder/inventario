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
   ]
  return {data};
})