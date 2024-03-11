<script setup>
import { SwiperSlide } from 'swiper/vue'
useSeoMeta({
  title: 'Jet Class',
  ogTitle: 'Jet Class',
  description: 'Jet Class Customer portal',
  ogDescription: 'Jet Class Customer portal.',
  ogImage:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHuuRnm9oc2thMWLBkcX-_utY_w1QNeQKrzFUhusmjdb_eNh9rT8tIOZUBIhlrgvSQvFE&usqp=CAU',
  twitterCard: 'summary_large_image',
})
definePageMeta({
  layout: 'search',
})
const offerStore = useOfferStore()

const arrival = ref('')

const showDetails = ref(false)

const jetTypes = ref([
  { id: 1, name: 'Light Jet', isActive: true },
  { id: 2, name: 'Medium Size', isActive: false },
  { id: 3, name: 'Heavy Size', isActive: false },
  { id: 4, name: 'VIP Size', isActive: false },
])

const setJetTypeActive = (index) => {
  jetTypes.value?.forEach((el) => (el.isActive = false))
  jetTypes.value[index].isActive = true
}

const isExpanded = ref([])

onMounted(async () => {
  await offerStore.fetchOffers()
  console.log('jetsCategory', offerStore?.getGroupJetTypes)
})
</script>

<template>
  <div class="wrapper">
    <div class="card-wrapper relative-position">
      <card-offer-filter />
    </div>
    <div style="margin-top: -50px" class="q-mb-md flex items-center justify-between">
      <div class="flex items-center">
        <div class="text-weight-bold text-h5 q-mr-sm">Jet Comparison</div>
        <q-icon name="jc:chevron-down" color="black" size="18px" />
      </div>
    </div>

    <div>
      <BaseSearchInput v-model:search="arrival" icon="jc:search-refraction" iconColor="secondary-1"
        class="custom-search-input" placeholder="Search by Aircraft name, code, etc." debounce="400">
        <template #append>
          <div class="text-weight-bold text-subtitle2 text-black">
            <span class="text-primary">128</span> Aircraft from <span class="text-primary">32</span> Operators
          </div>
        </template>
      </BaseSearchInput>
    </div>

    <!-- card component here -->


    <div>
      <div v-for="(category, jetType) in offerStore?.getGroupJetTypes" :key="jetType" class="wrapper q-mt-md">
        <div class="flex items-center justify-between text-weight-bold q-mb-md">
          <div class="flex items-center">
            <div class="text-h3 text-weight-bold">{{ jetType }}</div>
            <div class="text-primary q-ml-sm q-mr-xs">Price Range: $5,500 - $12,431</div>
            <q-icon name="fa-solid fa-sort" color="secondary-1" />
          </div>
          <q-btn class="text-weight-bold" flat style="text-decoration: underline">View All</q-btn>
        </div>
        <div class="window-width">
          <base-swiper>
            <template #default>
              <swiper-slide v-for="(item, idx) in category" :key="idx">
                <card-jet :jets="item" @click="showDetails = true" />
              </swiper-slide>
            </template>
          </base-swiper>
        </div>
      </div>
    </div>






    <!-- <div class="q-py-xl">
      <Footer />
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  top: -70px;
  z-index: 1000;
}

.b-right {
  border-right: 1px solid $secondary-2;
}

.card-enter-active,
.card-leave-active {
  transition: all 0.5s ease-in-out;
}

.card-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}


.card-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}


.details-enter-active,
.deatils-leave-active {
  transition: all 0.5s ease-in-out;
}

.details-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.details-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
