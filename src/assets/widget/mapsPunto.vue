<template>
  <div id="map" style="width: 100%; height: 400px;"></div>
</template>

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
import gps from '../images/gps.png';
export default {
  mounted() {
    const lon = -77.084152 ;
    const lat = -11.989350;

    const point = new Point(fromLonLat([lon, lat]));
    
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
        center: fromLonLat([lon, lat]),
        zoom: 16
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
