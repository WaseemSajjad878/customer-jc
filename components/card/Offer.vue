<template>
  <q-card
    class="q-mt-sm rounded-borders bg-white cursor-pointer"
    style="max-width: 370px; min-width: 300px"
    flat
  >
    <div class="row" style="height: 110px">
      <div class="q-col-6">
        <img src="/images/ext.png" />
      </div>
      <div class="q-col-6">
        <img src="/images/int.png" />
      </div>
    </div>
    <div class="q-mt-xs flex column q-pa-sm text-black" style="gap: 4px">
      <div class="flex items-center justify-between">
        <div class="text-body1 text-weight-bold">Cessna Citation Excel</div>
        <div class="text-body2 text-secondary-1">9 Passengers</div>
      </div>
      <div class="flex items-center">
        <div class="text-body1 text-weight-bold">
          <span class="text-primary">OMDB</span> (DXB)
        </div>

        <div class="flex q-mx-sm items-center flex-grow-1">
          <q-icon
            name="fa-regular fa-circle-dot"
            size="8px"
            color="secondary-2"
          />
          <div class="flex-grow-1 q-mx-xs dash-line"></div>
          <img src="/images/jet-primary.svg" />
          <div class="flex-grow-1 q-mx-xs dash-line"></div>
          <q-icon
            name="fa-regular fa-circle-dot"
            size="8px"
            color="secondary-2"
          />
        </div>
        <div class="text-body1 text-weight-bold">
          <span class="text-primary">OMDB</span> (DXB)
        </div>
      </div>
      <div class="flex items-center justify-between">
        <div class="text-body2 text-secondary-1">Dubai - UAE</div>
        <div class="text-body2 text-secondary-1">Vienna - Austria</div>
      </div>
      <q-separator color="text-secondary-5" />
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img
            style="width: 53px; height: 32px; object-fit: contain"
            src="/images/company-logo.svg"
          />
          <div class="q-ml-sm">
            <div class="text-secondary-1 text-caption">Operated By</div>
            <div class="text-bold text-body1">Air Hamburg - Private Jets</div>
          </div>
        </div>
        <div class="text-body2 text-weight-bold text-subtitle1">$60,500</div>
      </div>
    </div>
  </q-card>
</template>

<style scoped lang="scss">
.dash-line {
  border-bottom: 1px dashed $secondary-2;
  height: 1px;
}
</style>

<script setup></script>
