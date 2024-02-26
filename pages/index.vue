<script setup>
import { computed } from 'vue'

const eligibleBenefits = ['Get to view open requests']
const notEligibleBenefits = [
  'Get a jet market place',
  'Get Jet requests for your aircrafts',
  'Get full chat/call assistance from JETCLASS representative',
  'View full statistics',
  'Get suggested offers from powerful JETCLASS system',
  'Aircraft Detailed Statistics',
]

const value = computed(() => 1 - 0.1)
const pendingActions = [
  {
    img: '/images/details.png',
    title: 'Add your company details',
    subtitle: 'This will help us represent you to our customers in a better way',
    link: '/company-profile',
  },
  {
    img: '/images/plane.png',
    title: 'Add first aircraft',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nulla pretium, vestibulum elit quis, iaculis ligula.',
    link: '/add-aircraft',
  },
  {
    img: '/images/edit-profile.png',
    title: 'Add User Roles',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nulla pretium, vestibulum.',
    link: '/roles',
  },
  {
    img: '/images/plane.png',
    title: 'Add first aircraft',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a nulla pretium, vestibulum elit quis, iaculis ligula.',
    link: '/add-aircraft',
  },
]
const completedActions = [
  {
    img: '/images/details.png',
    title: 'Add your company details',
    subtitle: 'This will help us represent you to our customers in a better way',
    link: '',
  },
]
</script>

<template>
  <div>
    <div class="row items-start text-white">
      <div class="col-10" style="margin-top: 80px">
        <div class="text-subtitle2 text-weight-bold" style="font-size: 60px">
          Access the <br />
          World of Private Jet <span class="text-primary">Charters</span>
        </div>
        <div class="text-subtitle1 text-weight-medium">The google of private jets.</div>

        <div class="text-h5 text-weight-bold" style="margin-top: 80px">Search for the best prices.</div>

        <div class="flex items-center q-mt-md" style="gap: 20px">
          <div>fwafaw</div>
          <div>fwafaw</div>
          <base-btn class="text-weight-bold" padding="16px 60px" text-color="black">SEARCH</base-btn>
        </div>

        <div>
          <div class="text-h5 text-weight-bold" style="margin-top: 40px">Recently Booked</div>
          <div class="text-body1 text-secondary-2">You name it, and we will take you there, all across the globe.</div>
          <div class="q-mt-md flex items-center" style="gap: 10px">
            <card-offer v-for="item in [1, 2, 3]" :key="item" />
          </div>
        </div>
      </div>
      <div class="col-3 q-pl-xl">
        <div>Map Here</div>
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
