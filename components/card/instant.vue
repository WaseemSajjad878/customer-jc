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
        <img
          src="https://s3-alpha-sig.figma.com/img/15a1/241a/4b1dcb846a2032f71cfbe2bbc67ba91c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QIS75DJ2SI7oQep7khPK2onmmgLR1~TJksT3ra3cPS0jlYiskrrR3ZP9v9VfQmDVmpVpMdKhN4ZRZoEA7t3M6k3sHbkIjdeQme5IXe4SDT0ndYAlcvimgiSjqKzugfpdy5YfqgEY87VJWIJgFn7SN6FzOdVyp3JvREkQ15Rnr1yQs-cw0a-bFCmT7gLUplqWlURz-SVRyaPmItGt~yiOQ0jAGqwdRnlCdPme8m8jfZUURRV9fQiU1A~mkVQomy4KtC~mFYUi3cGA6XdY6IJCqQHhRN95YmA4hXlLVaHIooG6z0Spv1CCjGj7NHv6Uw~0R3Ec7OqJoj6HobjG6HGfWA__"
          class="full-width full-height rounded-borders cover" />
        <div
          class="label text-white text-body2 rouneded-opposite-corners absolute absolute-bottom-right bg-green-10 q-px-sm q-py-xs">
          Economical
        </div>
      </div>
      <div class="col-8 flex column">
        <h2 class="text-h4 text-white text-weight-bold q-my-none">EUR 14,600</h2>
        <p class="text-secondary-1 text-subtitle1 q-my-none text-weight-bold">
          Seats: 3
          <q-icon name="fa-solid fa-circle" size="8px" class="q-mx-sm" />
          <span class="text-weight-bold"> 3,500/person </span>
        </p>
        <div class="flex q-mt-auto">
          <div class="box-black bg-grey-11 rounded-borders flex-shrink-0"></div>
          <div class="flex-grow-1 q-pl-sm">
            <h4 class="text-white text-h5 text-weight-bold q-my-none">JetClass Airtaxi</h4>
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
    height: 100px;
  }
}

.box-black {
  width: 80px;
}
</style>
