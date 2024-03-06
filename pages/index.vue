<script setup>
import { computed } from 'vue'
import { SwiperSlide } from 'swiper/vue'
const offerStore = useOfferStore()

const opts = [
  {
    label: 'Google',
    value: 'goog',
  },
  {
    label: 'Facebook',
    value: 'fb',
  },
  {
    label: 'Twitter',
    value: 'twt',
  },
  {
    label: 'Apple',
    value: 'app',
  },
  {
    label: 'Oracle',
    value: 'ora',
    disable: true,
  },
]

const value = ref(null)

onMounted(async () => {
  await offerStore.fetchOffers()
})
</script>

<template>
  <div>
    <div class="row items-start text-white">
      <div class="col-8" style="margin-top: 30px">
        <div class="text-subtitle2 text-weight-bold" style="font-size: 40px">
          Access the <br />
          World of Private Jet <span class="text-primary">Charters</span>
        </div>
        <div class="text-subtitle1 text-weight-medium">The google of private jets.</div>

        <div class="text-h5 text-weight-bold" style="margin-top: 30px">Search for the best prices.</div>

        <div class="flex items-center q-mt-md" style="gap: 20px">
          <div>
            <base-autocomplete v-model:select="value" label="Departure AIrport" :options="opts">
              <!-- <template #prepend>
                <img src="/images/departure.png" />
              </template> -->
            </base-autocomplete>
          </div>

          <base-autocomplete v-model:select="value" label="Arrival AIrport" :options="opts">
            <!-- <template #prepend>
              <img src="/images/arrival.png" />
            </template> -->
          </base-autocomplete>
          <base-btn @click="$router.push('/search')" class="text-weight-bold" padding="16px 60px" text-color="black"
            >SEARCH</base-btn
          >
        </div>

        <div>
          <div class="text-h5 text-weight-bold" style="margin-top: 40px">Recently Booked</div>
          <div class="text-body1 text-secondary-2">You name it, and we will take you there, all across the globe.</div>

          <!-- <client-only> -->
          <div class="q-my-md" style="gap: 10px">
            <base-swiper>
              <template #default>
                <swiper-slide v-for="(item, idx) in offerStore.getOffers" :key="idx">
                  <card-offer :offer="item" />
                </swiper-slide>
              </template>
            </base-swiper>
          </div>
          <!-- </client-only> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  padding: 20px;
  border-radius: 4px;
  border: 1px solid $secondary-2;
  width: 100%;
}
.hover:hover {
  background: $secondary-3;
  cursor: pointer;
}
.q-linear-progress__model--determinate {
  background-color: $primary !important;
  border-radius: 12px !important;
}
</style>
