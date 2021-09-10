<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Share</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Share</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <!-- <TrendingMovies name="Tab 3 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
// import TrendingMovies from '@/components/TrendingMovies.vue';

export default  {
  name: 'Share',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>