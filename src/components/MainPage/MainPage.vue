<template>
  <section class="main_page">
    <Menu />
    <SliderMain />
  </section>
</template>

<script>

import Menu from './Menu/Menu.vue'
import SliderMain from './SliderMain/SliderMain.vue'

export default {
  name: 'MainPage',
  components: {
    Menu,
    SliderMain,
  },
}
</script>

<style src="./MainPage.sass" lang="sass"></style>


