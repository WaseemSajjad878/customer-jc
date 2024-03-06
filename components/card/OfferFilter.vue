<script setup>
import { ref } from 'vue'
const departure = ref('DXB - Dubai International Airport, Dubai - United')
const arrival = ref('LOW - Austria International Airport, Aus')

const date = ref('12 Dec, 23')
const time = ref('08:00 AM')

const passengers = [
  {
    label: '2',
    value: '2',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '6',
    value: '6',
  },
  {
    label: '8',
    value: '8',
  },
  {
    label: '10',
    value: '10',
  },
]

const value = ref('2')
</script>

<template>
  <q-card class="bg-white card-shadow q-pa-md">
    <div class="flex items-center q-mb-lg">
      <h5 class="text-h5 text-weight-bold q-my-none">Please enter the following details</h5>
      <base-btn class="text-weight-bold q-ml-auto" padding="5px 10px" text-color="white">+ ADD LEG</base-btn>
      <base-btn class="text-weight-bold q-ml-md" :outlined="true" padding="5px 10px">FIND A JET</base-btn>
    </div>
    <div class="row q-col-gutter-md">
      <div class="col-lg-2">
        <BaseSearchInput
          v-model:search="departure"
          icon="fa-solid fa-plane-departure"
          iconColor="secondary-4"
          class="custom-search-input"
          placeholder="Search by Aircraft name, code, etc."
          debounce="400"
        />
      </div>
      <div class="col-lg-2">
        <BaseSearchInput
          v-model:search="arrival"
          icon="fa-solid fa-plane-departure"
          iconColor="secondary-4"
          class="custom-search-input"
          placeholder="Search by Aircraft name, code, etc."
          debounce="400"
        />
      </div>
      <div class="col-lg-2">
        <BaseSingleDateInput v-model:vModel="date" format="DD MMM, YY" />
      </div>
      <div class="col-lg-2">
        <BaseTimeInput v-model:vModel="time" format="DD MMM, YY" />
      </div>
      <div class="col-lg-2">
        <base-autocomplete v-model:select="value" :options="passengers">
          <template #prepend>
            <q-icon color="secondary-4" name="fa-solid fa-user-group" size="16px" />
          </template>
        </base-autocomplete>
      </div>
      <div class="col-lg-2">
        <base-btn class="text-weight-bold full-width full-height flex items-center q-py-lg" text-color="white">
          <q-icon class="cursor-pointer" color="white" name="jc:search-refraction" size="xs" />
          SEARCH
        </base-btn>
      </div>
    </div>
  </q-card>
</template>

<style lang="scss" scoped>
.card-shadow {
  box-shadow: 5px 4px 20px 0px #0000000d;
}
</style>
