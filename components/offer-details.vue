<script setup></script>

<template>
  <div>
    <q-card style="width: 100%; height: 264px" class="bg-white border" flat>
      <div style="position: relative">
        <div
          style="position: absolute; left: 10px; top: 10px"
          class="rounded-borders bg-white q-px-md q-py-sm text-weight-bold text-body1 flex items-center"
        >
          <q-icon name="fa-solid fa-star" color="warning" class="q-mr-xs" />
          5.0
        </div>
        <img src="/images/jetimg.png" style="width: 100%" />
        <div class="text-white" style="position: absolute; bottom: 15px; left: 15px">
          <div class="flex" style="gap: 20px">
            <div class="text-weight-bold text-h2">Citation CJ4</div>

            <div class="flex items-center" style="gap: 10px">
              <div class="flex items-center">
                <q-icon name="fa-solid fa-chair" class="q-mr-xs" />
                6
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

            <div class="flex items-center text-weight-bold" style="gap: 10px">
              <div class="flex items-center">
                <img src="/images/verify.svg" class="q-mr-xs" />
                Wyvern
              </div>
              <div class="flex items-center">
                <img src="/images/verify.svg" class="q-mr-xs" />

                Argus Gold+
              </div>
            </div>
          </div>
        </div>
        <div class="text-white text-weight-bold text-h3" style="position: absolute; bottom: 15px; right: 15px">
          $6,500
        </div>
      </div>
    </q-card>
  </div>
</template>

<style scoped lang="scss"></style>
