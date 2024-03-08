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

    <div class="row q-mt-lg">
      <div class="col-lg-4">
        <div class="flex items-center gap-15 q-mb-lg">
          <q-btn
            v-for="(type, idx) in jetTypes"
            :key="idx"
            unelevated
            :color="type.isActive ? 'primary' : 'secondary-3'"
            :class="[type.isActive ? '' : 'text-black', ' text-weight-bold']"
            padding="7px 20px"
            @click="setJetTypeActive(idx)"
          >
            {{ type.name }}
          </q-btn>
        </div>
        <base-expansion
          v-for="(category, jetType) in offerStore?.getGroupJetTypes"
          :key="jetType"
          :title="jetType"
          v-model:isExpanded="isExpanded[jetType]"
        >
          <card-jet class="q-my-sm" v-for="(item, idx) in category" :key="idx" :jets="item" />
        </base-expansion>
      </div>
      <div class="col-lg-8"></div>
    </div>

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
              <card-jet :jets="item" />
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

<style lang="scss" scoped>
.card-wrapper {
  top: -50px;
  z-index: 1000;
}
</style>
