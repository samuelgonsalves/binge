<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Watch This!</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Trending</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <TrendingMovies 
        v-for="movie in movies" 
        :key="movie.id" 
        :title="movie.title"
        :description="movie.overview">
      </TrendingMovies>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import TrendingMovies from '@/components/TrendingMovies.vue';
import { Movies } from '@/services/MoviesService';

export default  {
  name: 'Trending',
  components: { TrendingMovies, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data: function() {
    return {
        movies: Movies.results.slice(0, 10)
    }
  }
}
</script>