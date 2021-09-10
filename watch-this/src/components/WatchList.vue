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
          <ion-title size="large">Watch List</ion-title>
        </ion-toolbar>
      </ion-header>
      <TrendingMovies 
        v-for="movie in movies" 
        :key="movie.id" 
        :title="movie.name">
      </TrendingMovies>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import TrendingMovies from '@/components/TrendingMovies.vue';
import axios from 'axios'
require('dotenv').config();

export default defineComponent ({
  name: 'WatchList',
  components: { TrendingMovies, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return { 
      movies: []
    };
  },
  mounted() {
    if (!localStorage.getItem('sessionId'))
    {
      axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.VUE_APP_API_KEY}`)
          .then(response => {
              console.log(response.data.request_token);
              localStorage.setItem('sessionId', response.data.request_token);
              window.open(`https://www.themoviedb.org/authenticate/${response.data.request_token}`, '_blank') 
          });
    }

    this.fetchMovies();
  },
  methods: {
    fetchMovies() {
      axios.get(`https://api.themoviedb.org/3/list/7107234?api_key=${process.env.VUE_APP_API_KEY}&language=en-US`)
         .then(response => {
           this.movies = response.data.items; 
         });
    }
  }
});
</script>