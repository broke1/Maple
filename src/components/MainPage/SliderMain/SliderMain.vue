<template>
  <section class="slider_section">
    <Carousel :autoplay="2000" :wrap-around="true" :transition="600">
      <Slide v-for="(slide,index) in  3" :key="slide">
        <div class="carousel__item">
          <div 
            class="slider_item"
            :style="{ backgroundImage: 'url(' + require(`../../../assets/slidesMain/item-${index+1}.jpg`) + ')'}"
          ></div>
        </div>
      </Slide>

      <template #addons>
      </template>
    </Carousel>
  </section>
  
</template>

<script>

// Vue3-Carousel
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'


export default {
  name: 'SliderMainSection',
  components: {
    Carousel,
    Slide
  }
}
</script>

<style src="./SliderMain.sass" lang="sass"></style>