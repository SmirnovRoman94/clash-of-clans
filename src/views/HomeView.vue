<template>
  <div class="container">
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide class="card__wrapper" v-for="item in items" :key="item.id">
        <Card :name="`${item.lvl} lvl`" :title="item.title" :body="item.descr" :imgUrl="item.img" :link="`/${item.alias}`">
          <template v-slot:body>
            {{ item.descr }}
          </template>
          <template v-slot:footer>
            <div class="card-stats">
              <div v-for="(stat, index) in item.info" :key="index" class="one-third">
                <div class="stat-value">{{ stat.value }}</div>
                <span class="stat">{{ stat.title }}</span>
              </div>
            </div>
          </template>
        </Card>
      </slide>
      <!--addons-->
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import Card from '@/components/UI/Card.vue';
import items from '@/seeders/items';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
export default {
  name: 'HomeView',
  components: {
    Card,
    Carousel,
    Slide,
    Navigation
  },
  data: ()=>({
    items: items,
    settings: {
      itemsToShow: 1.5,
      wrapAround: true,
      snapAlign: 'center',
    },
    breakpoints: {
      300: {
        itemsToShow: 1,
      },
      700: {
        itemsToShow: 2,
      }
    }

  })
};
</script>

<style lang="scss">
.card__wrapper{
  margin-bottom: 15px;
}
.carousel__prev, .carousel__next{
  border-radius: 50% !important;
}
</style>