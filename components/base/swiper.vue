<script setup>
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode } from 'swiper/modules'
const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode]

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  // console.log('slide change')
}
</script>

<template>
  <template>
    <swiper
      :loop="true"
      :modules="modules"
      :space-between="8"
      :slides-per-view="'auto'"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
    >
      <slot name="default" />
    </swiper>
  </template>
</template>

<style lang="scss">
.swiper {
  width: 100%;
}

.swiper-slide {
  width: max-content !important;
}
</style>
