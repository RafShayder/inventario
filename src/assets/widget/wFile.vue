<template>
    <div>
      <video ref="videoElement"></video>
      <canvas ref="canvasElement" style="display: none;"></canvas>
      <img :src="imageSrc" alt="Imagen capturada" v-if="imageSrc">
      <div>
        <button @click="openCamera" v-if="!cameraOpen">Abrir cámara</button>
        <button @click="captureImage" v-else>Tomar foto</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cameraOpen: false,
        videoStream: null,
        videoElement: null,
        canvasElement: null,
        imageSrc:null
      };
    },
    mounted() {
      this.videoElement = this.$refs.videoElement;
      this.canvasElement = this.$refs.canvasElement;
    },
    methods: {
      openCamera() {
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(stream => {
            this.videoStream = stream;
            this.videoElement.srcObject = stream;
            this.videoElement.play();
            this.cameraOpen = true;
          })
          .catch(error => {
            console.error('Error opening camera:', error);
          });
      },
      captureImage() {
        const videoWidth = this.videoElement.videoWidth;
        const videoHeight = this.videoElement.videoHeight;
        this.canvasElement.width = videoWidth;
        this.canvasElement.height = videoHeight;
        this.canvasElement.getContext('2d').drawImage(this.videoElement, 0, 0, videoWidth, videoHeight);
        this.imageSrc = this.canvasElement.toDataURL('image/png');
        // Aquí puedes hacer lo que desees con la imagen capturada, por ejemplo, enviarla a un servidor o mostrarla en una vista previa.
        console.log('Captured image:', this.imageSrc);
        
        // Detener la cámara y limpiar la imagen capturada
        this.videoStream.getTracks().forEach(track => track.stop());
        this.videoElement.srcObject = null;
        this.cameraOpen = false;
        this.canvasElement.getContext('2d').clearRect(0, 0, videoWidth, videoHeight);
      }
    }
  };
  </script>
  