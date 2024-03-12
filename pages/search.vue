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

const detailsModal = ref(false)

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




    <!-- card component here -->
    <div class="q-mt-md">
      <div class="flex items-center justify-between">

        <base-chip text-color="white" class="text-weight-bold text-h6" square>
          Instant Booking <span><q-icon name="jc:help-octagon" /></span></base-chip>

        <div class="flex items-center text-primary text-weight-bold">
          <q-icon name="jc:tag-03" color="primary" />
          3 Confirmed Instant Offers
        </div>
      </div>
      <div class="row q-col-gutter-md q-mt-xs">
        <div v-for="item in [1, 2, 3]" :key="item" class="col-4">
          <card-instant />
        </div>
      </div>
    </div>

    <!-- hard qutoes start -->
    <div class="q-mt-md">
      <base-chip color="positive" text-color="white" class="text-weight-bold text-h6" square>
        Hard Quotes <span><q-icon name="jc:help-octagon" /></span></base-chip>
      <div class="q-mt-md">
        <card-hard-quote />
      </div>
    </div>
    <!-- hard qutoes end -->

    <div class="q-mt-md">
      <base-chip color="blue-10" text-color="white" class="text-weight-bold text-h6" square>
        Confirmed Offers <span><q-icon name="jc:help-octagon" /></span></base-chip>
      <div class="q-mt-md">
        <card-hard-quote :confirm="true" />
      </div>
    </div>


    <div class="q-pa-md rounded-borders q-mt-lg bg-offers">
      <div class=" flex items-center justify-between">
        <base-chip color="grey-1" text-color="white" class="text-weight-bold text-h6" square>
          Estimated Offers <span><q-icon name="jc:help-octagon" /></span></base-chip>
        <div class="flex items-center">
          <div class="text-weight-bold text-h5 q-mr-xs">Collapse Estimated Offers </div>
          <q-icon name="jc:chevron-down" size="18px" />
        </div>
      </div>
      <div v-for="(category, jetType) in offerStore?.getGroupJetTypes" :key="jetType" class="wrapper q-mt-xl ">
        <div class="flex items-center justify-between text-weight-bold q-mb-md">
          <div class="flex items-center gap-15">
            <div class="text-h3 text-weight-bold">{{ jetType }}</div>
            <div class="text-primary   flex items-center text-weight-bold"><q-icon name="jc:credit-card-01"
                color="primary" class="q-mr-xs" />

              <div>
                Average Cost:
                $10,500
              </div>

            </div>

            <div class="text-secondary-1   flex items-center text-weight-bold"><q-icon name="jc:users-03"
                color="secondary-1" class="q-mr-xs" />

              <div>
                Max Seating: 7 Seats
              </div>

            </div>
            <div class="text-secondary-1   flex items-center text-weight-bold"><q-icon name="jc:tag-03"
                color="secondary-1" class="q-mr-xs" />

              <div>
                21 Estimated Offers
              </div>

            </div>

          </div>
          <q-btn class="text-weight-bold" no-caps rounded text-color="grey-1" unelevated color="grey-5">View All</q-btn>
        </div>
        <div>
          <base-swiper>
            <template #default>
              <swiper-slide v-for="(item, idx) in category" :key="idx">
                <card-jet :jets="item" @click="detailsModal.showDetails" />
              </swiper-slide>
            </template>
          </base-swiper>
        </div>
      </div>
    </div>
    <modal-offer-details ref="detailsModal" />
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  top: -70px;
  z-index: 1000;
}

.bg-offers {
  border: 1px solid rgba(234, 236, 240, 1);
  background: rgba(242, 244, 247, 1);

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
