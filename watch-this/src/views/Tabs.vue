<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="trending" href="/tabs/trending">
          <ion-icon :icon="trendingUp"></ion-icon>
          <ion-label>Trending</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="watchlist" href="/tabs/watchlist">
          <ion-icon :icon="eyeOutline"></ion-icon>
          <ion-label>Watch List</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="share" href="/tabs/share">
          <ion-icon :icon="shareSocialOutline"></ion-icon>
          <ion-label>Share</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { trendingUp, eyeOutline, shareSocialOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      eyeOutline,
      trendingUp,
      shareSocialOutline
    }
  }
}
</script>