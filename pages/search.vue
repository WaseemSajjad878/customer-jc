<script setup>
import { SwiperSlide } from 'swiper/vue'
definePageMeta({
  layout: 'search',
})
</script>

<template>
  <div style="position: relative; top: 15vh">
    <div>
      <q-card class="bg-white q-pa-md" style="box-shadow: 5px 4px 20px 0px #0000000d"> Fields to render </q-card>
    </div>

    <div class="flex items-center justify-between q-my-md">
      <div>Menu</div>
      <div>Btn Groups</div>
    </div>

    <div>
      <BaseSearchInput
        v-model:search="arrival"
        icon="jc:search-refraction"
        iconColor="secondary-1"
        class="custom-search-input"
        placeholder="Search by Aircraft name, code, etc."
        debounce="400"
      >
        <template #append>
          <div class="text-weight-bold text-subtitle2 text-black">
            <span class="text-primary">128</span> Aircraft from <span class="text-primary">32</span> Operators
          </div>
        </template>
      </BaseSearchInput>
    </div>

    <div class="q-mt-md">
      <div class="flex items-center justify-between text-weight-bold q-mb-md">
        <div class="flex items-center">
          <div class="text-h3 text-weight-bold">Light Jets</div>
          <div class="text-primary q-ml-sm q-mr-xs">Price Range: $5,500 - $12,431</div>
          <q-icon name="fa-solid fa-sort" color="secondary-1" />
        </div>
        <q-btn class="text-weight-bold" flat style="text-decoration: underline">View All</q-btn>
      </div>
      <div style="width: 100vw">
        <base-swiper>
          <template #default>
            <swiper-slide v-for="item in [1, 2, 3, 4, 5]" :key="item">
              <card-jet />
            </swiper-slide>
          </template>
        </base-swiper>
      </div>
    </div>

    <div class="q-mt-xl">
      <div class="flex items-center justify-between text-weight-bold q-mb-md">
        <div class="flex items-center">
          <div class="text-h3 text-weight-bold">Medium Size Jets</div>
          <div class="text-primary q-ml-sm q-mr-xs">Price Range: $5,500 - $12,431</div>
          <q-icon name="fa-solid fa-sort" color="secondary-1" />
        </div>
        <q-btn class="text-weight-bold" flat style="text-decoration: underline">View All</q-btn>
      </div>
      <div style="width: 100vw">
        <base-swiper>
          <template #default>
            <swiper-slide v-for="item in [1, 2, 3, 4, 5]" :key="item">
              <card-jet />
            </swiper-slide>
          </template>
        </base-swiper>
      </div>
    </div>

    <div class="q-mt-xl">
      <div class="flex items-center justify-between text-weight-bold q-mb-md">
        <div class="flex items-center">
          <div class="text-h3 text-weight-bold">Heavy Size Jets</div>
          <div class="text-primary q-ml-sm q-mr-xs">Price Range: $5,500 - $12,431</div>
          <q-icon name="fa-solid fa-sort" color="secondary-1" />
        </div>
        <q-btn class="text-weight-bold" flat style="text-decoration: underline">View All</q-btn>
      </div>
      <div style="width: 100vw">
        <base-swiper>
          <template #default>
            <swiper-slide v-for="item in [1, 2, 3, 4, 5]" :key="item">
              <card-jet />
            </swiper-slide>
          </template>
        </base-swiper>
      </div>
    </div>
    <div class="q-py-xl">
      <Footer />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
