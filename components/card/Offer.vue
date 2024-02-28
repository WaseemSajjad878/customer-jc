<script setup>
const props = defineProps({
  offer: {
    required: true,
  },
})
</script>
<template>
  <q-card class="q-mt-sm rounded-borders cursor-pointer offer-card" style="max-width: 370px; min-width: 300px" flat>
    <div class="row">
      <div class="q-col-6">
        <img style="width: 150px; border-top-left-radius: 4px" :src="offer.exteriorPhoto" />
      </div>
      <div class="q-col-6">
        <img style="width: 150px; border-top-right-radius: 4px" :src="offer.interiorPhoto" />
      </div>
    </div>
    <div class="q-mt-xs flex column q-pa-sm text-black" style="gap: 4px">
      <div class="flex items-center justify-between">
        <div class="text-body1 text-weight-bold">{{ offer.aircraftModel }}</div>
        <div class="text-body2 text-secondary-1">{{ offer.seats }} Passengers</div>
      </div>
      <div class="flex items-center">
        <div class="text-body1 text-weight-bold">
          <span class="text-primary">{{ offer.legs[0].fromIcao }} {{ ' ' }}</span
          >({{ offer.legs[0].fromIata }})
        </div>

        <div class="flex q-mx-sm items-center flex-grow-1">
          <q-icon name="fa-regular fa-circle-dot" size="8px" color="secondary-2" />
          <div class="flex-grow-1 q-mx-xs dash-line"></div>
          <img src="/images/jet-primary.svg" />
          <div class="flex-grow-1 q-mx-xs dash-line"></div>
          <q-icon name="fa-regular fa-circle-dot" size="8px" color="secondary-2" />
        </div>
        <div class="text-body1 text-weight-bold">
          <span class="text-primary">{{ offer.legs[0].toIcao }} {{ ' ' }}</span> ({{ offer.legs[0].toIata }})
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="text-body2 text-secondary-1">{{ offer.legs[0].fromCity }} - {{ offer.legs[0].fromCountry }}</div>
        <div class="text-body2 text-secondary-1">{{ offer.legs[0].toCity }} - {{ offer.legs[0].toCountry }}</div>
      </div>
      <q-separator color="text-secondary-5" />
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img style="width: 53px; height: 32px; object-fit: contain; border-radius: 4px" :src="offer.operatorLogo" />
          <div class="q-ml-sm">
            <div class="text-secondary-1 text-caption">Operated By</div>
            <div class="text-bold text-body1">{{ offer.operatorTitle }}</div>
          </div>
        </div>
        <div class="text-body2 text-weight-bold text-subtitle1">{{ offer.currency }} {{ offer.price }}</div>
      </div>
    </div>
  </q-card>
</template>

<style lang="scss">
.dash-line {
  border-bottom: 1px dashed $secondary-2;
  height: 1px;
}
.offer-card {
  background-color: $secondary-5;
  // $secondary-5
}
.swiper-slide-active {
  .offer-card {
    background-color: white;
  }
}
</style>
