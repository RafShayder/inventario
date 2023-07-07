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
export default {
  data() {
    return {
      link: '',
    }
  },
  mounted() {
  
    const point = new Point(fromLonLat([this.longitud, this.latitud]));
    this.link = "https://www.google.com/maps?q=" + this.latitud + "," + this.longitud;
    const pointFeature = new Feature({
      geometry: point
    });

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
        center: fromLonLat([this.longitud, this.latitud]),
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
