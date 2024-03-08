<script setup>
const props = defineProps({
  jets: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <q-card style="width: 485px; height: 264px" class="bg-white border" flat>
    <div style="position: relative">
      <div
        style="position: absolute; right: 10px; top: 10px"
        class="rounded-borders bg-white q-pa-sm text-weight-bold text-body1 flex items-center"
      >
        <q-icon name="fa-solid fa-star" color="warning" class="q-mr-xs" />
        5.0
      </div>
      <img src="/images/jetimg.png" style="width: 100%" />
      <div class="text-white text-weight-bold" style="position: absolute; bottom: 15px; left: 15px">
        {{ jets?.aircraftModel }}
        <!-- Citation CJ4 -->
      </div>
      <div class="text-white text-weight-bold" style="position: absolute; bottom: 15px; right: 15px">
        <div class="flex items-center" style="gap: 10px">
          <div class="flex items-center">
            <q-icon name="fa-solid fa-chair" class="q-mr-xs" />
            <!-- 6 -->
            {{ jets?.seats }}
          </div>
          <div class="flex items-center">
            <q-icon name="fa-solid fa-box" class="q-mr-xs" />

            2000
          </div>
          <q-icon name="fa-solid fa-smoking" />
          <q-icon name="fa-solid fa-dog" />
          <q-icon name="fa-solid fa-wifi" />
          <q-icon name="fa-solid fa-shield-halved" />
        </div>
      </div>
    </div>
    <div class="q-pa-md">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div style="width: 91px; height: 44px" class="bg-secondary-3"></div>
          <div class="q-ml-sm">
            <div class="text-weight-bold">INTRO CS-AERO 53</div>
            <div class="text-secondary-1 text-subtitle2">
              <!-- Kyiv - Ukraine -->
              {{ jets?.operatorCountry }}
            </div>
          </div>
        </div>
        <div>
          <div class="text-weight-bold text-h5">
            $6,500
            {{ jets?.price }}
          </div>
          <div class="text-secondary-1 text-subtitle2">Estimated Price</div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<style scoped lang="scss">
.border {
  border: 1px solid $secondary-2;
}
</style>
