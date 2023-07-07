<template>
  <div class="elevation-20 pa-2 rounded-xl" id="map" style="width: 100%; height: 100%;"></div>
  <span> <strong>Latitud: {{ latitud }} , Longitud: {{ longitud }}</strong></span> <v-btn prepend-icon="mdi-google-maps" :href="link" target="_blank" elevation="14" class="ma-4" color="blue">Ver en google maps</v-btn>
</template>


<script setup>
defineProps({
  latitud: Number,
  longitud: Number,
})
</script>

<script>
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';
import gps from  '../images/gps3.png';

export default {
  data() {
    return {
      link: '',
    }
  },
  mounted() {
    const coordinates = fromLonLat([this.longitud, this.latitud]);
    this.link = `https://www.google.com/maps?q=${this.latitud},${this.longitud}`;
    
    const point = new Point(coordinates);
    const pointFeature = new Feature({
      geometry: point
    });
    
    const iconStyle = new Style({
      image: new Icon({
        src: gps, // Ruta a la imagen del punto rojo
        imgSize: [40, 40], // Tamaño de la imagen del punto rojo
        anchor: [0.5, 1] // Punto de anclaje para la imagen del punto rojo
      })
    });
    
    pointFeature.setStyle(iconStyle);
    
    const vectorSource = new VectorSource({
      features: [pointFeature]
    });
    
    const vectorLayer = new VectorLayer({
      source: vectorSource
    });
    
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: coordinates,
        zoom: 15
      })
    });
  }
};

</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
