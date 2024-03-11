<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="instant-card bg-black rounded-borders q-pa-md">
    <div class="row q-col-gutter-sm">
      <div class="col-4 rounded-borders relative-position img-wrapper">
        <img src="/images/jetimg.png" class="full-width full-height rounded-borders cover" />
        <div
          class="label text-white text-body2 rouneded-opposite-corners absolute absolute-bottom-right bg-green-10 q-px-sm q-py-xs"
        >
          Economical
        </div>
      </div>
      <div class="col-8 flex column">
        <h2 class="text-h2 text-white text-weight-bold q-my-none">EUR 14,600</h2>
        <p class="text-secondary-1 text-subtitle1 q-my-none">
          Seats: 3
          <q-icon name="fa-solid fa-circle" size="8px" class="q-mx-sm" />
          <span class=""> 3,500/person </span>
        </p>
        <div class="flex q-mt-auto">
          <div class="box-black bg-grey-11 rounded-borders flex-shrink-0"></div>
          <div class="flex-grow-1 q-pl-sm">
            <h4 class="text-white q-my-none">JetClass Airtaxi</h4>
            <div class="country text-secondary-1">Austria</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.instant-card {
  .img-wrapper {
    height: 120px;
  }
}
.box-black {
  width: 80px;
}
</style>
