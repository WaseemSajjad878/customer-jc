<script setup></script>

<template>
  <div>
    <q-card style="width: 100%;" class="bg-white border" flat>
      <div style="position: relative">
        <div style="position: absolute; left: 10px; top: 10px"
          class="rounded-borders bg-white q-px-md q-py-sm text-weight-bold text-body1 flex items-center">
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

      <div class="flex items-center " style="gap: 10px;">
        <img v-for="item in [1, 2, 3, 4]" :key="item" style="width: 220px;object-fit: cover;height: 100px;"
          src="https://s3-alpha-sig.figma.com/img/cab1/c43f/cb4a8a7e28aef4d5ee50addc15737520?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X1StPlGyA58gazVjrPaiS~fes5Po4LRcecXyPJZlx4Lr4yxSJgCoh~A0maEORnKcSbnmZ5PnT5OXT9H2uXQ-MMO-KjL0xPcpCH-7y-JtZiFgLu6G27UC7puaOPo1N75XUgQK3UVqiKfVFpaNFwSWauMAjLbcGNNGd0alPI9KZRcAJeljY~fTXuaLjmVgGqr1aQ~UTduDsc6XLQHQBAJPb7let7mJ2B6LwYJA-NMz8QpyrzhO0jWi3~8gRosUW3aWkCi8unIe0ymS~6MeZBS-6fJ4di9Z3dyfiJJMA2u5Vfkdp3tsYjlwPI-ylMwoup6IvsnkWyhvxzR6xfYwRq-sSA__" />
      </div>


      <div class="flex items-center justify-between q-mt-md ">
        <div class="flex items-center q-pa-md bg-secondary-3 col-grow q-mr-md rounded-borders justify-between">
          <base-chip color="secondary-1" text-color="white" class="text-weight-bold text-h6" square>ESTIMATED
            OFFER</base-chip>
          <div class="text-weight-bold text-h5">
            $6,500
          </div>
        </div>
        <div>
          <base-btn padding="15px 50px">
            <div class="text-weight-bold text-h6">FIND THIS JET</div>
            <div class="text-caption">Or Similar</div>
          </base-btn>
        </div>
      </div>

      <div class="divider q-py-md q-mt-xl">
        <div class="text-weight-bold text-h5">
          Jet Amenities
        </div>
        <div class="row q-mt-xs q-col-gutter-md">
          <div v-for="item in [1, 2, 3, 4, 5, 6]" :key="item" class="col-3 ">
            <div class="flex items-center">
              <q-icon name="fa-solid fa-smoking" color="secondary-6" />
              <div class="text-weight-bold text-h6 q-ml-sm">Smoking Allowed</div>
            </div>
          </div>
        </div>
      </div>

      <div class="divider q-py-md q-mt-lg">
        <div class="text-weight-bold text-h5">
          Operator Information
        </div>
        <div class="row items-center q-mt-lg">
          <div class="flex items-center col-9">
            <div class="bg-secondary-3" style="width: 150px;height: 60px;"></div>
            <div class="q-ml-sm">
              <div class="text-weight-bold text-h4">INTRO CS-AERO 53 JETS LIMITED</div>
              <div class="text-subtitle2 text-secondary-1 text-weight-bold">Kyiv - Ukraine</div>
            </div>

          </div>
          <div class="flex items-center col-3 justify-end" style="gap:15px">
            <div v-for="item in [1, 2, 3]" :key="item" class=" flex items-center">
              <img src="/images/verify.svg" class="q-mr-xs" />

              Argus Gold+
            </div>


          </div>
        </div>

        <div class="flex items-center justify-between q-mt-md">
          <div class="flex items-center" style="gap:20px">
            <img v-for="item in [1, 2, 3, 4]" :key="item" style="width: 120px;height: 50px;object-fit: cover;"
              src="https://s3-alpha-sig.figma.com/img/8a12/0a8d/004dc70a899957f5b6ee9f6562cedfc6?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bwCJP3BG5e6AwwAGU9IJTCyK3LIWW9KXHARIUe-4s5wr5Rh8aoiVhQ0e3xTK3etrKxLUqGJr0TuvtVBihb0Px2o1JLAl1INcet6tMol-YCB~VNqDCN8EZAXG5RFRlfg4KZydldccXAnF-FeL1hHb0njxILRTQyHZR999jyTLh9oDziHZ1f1fxscHnbS25bSLZIhjwKx3iPkuaafm2Jo3csbegRzFdx2FzXv9fVRnV0DxS4bMWRaa13u38W3DyWSpDw~nhfHmbBFZUX3HVClK1ew5ZHILoDCXmo4-BRH3mouoL20CA8C7vdTlUOX9gyhXIiIHksQJanpH60wAzs4pHQ__" />
          </div>

          <div>
            <img style="width: 120px;height: 50px;object-fit: cover;"
              src="https://s3-alpha-sig.figma.com/img/6c2b/db94/1f67a52df7d1cf23d7e1d8c0bbf7fe45?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OYgoukDhr1QpG~xSiSUtkpZCo~LQRPK3a24~uvIyuIROdCHwqfvLNUvtnpP-xptYuf2WyyjewH~hhW00aU~iWH0kxHvQc1e0U8Mvf8VdKUmHUcVjm~fUxZqHWnt7RchpJDK58yMGUBVpQELxhY4T9zLOtEwdZhEEdkWRZXMSJdDObuQZVs-GC4XZ8hYlK570MzdvpyIeMLE~BvvbxNTrnc0fLW2UDQqNclmBSTvB7zeQ4F2k~rH69U4YaBQa8n0UmSYKKLYHqN40JIxebjOsjAHxA5YUs9SCFo3aZc764k3wueDdPm-KI4TUI41oZovvSYs8xhVDpXkRk0qwEOzJeQ__" />
          </div>
        </div>
      </div>


      <div class="divider q-py-md q-mt-lg">
        <div class="flex items-center">
          <div>
            <div class="text-h6 text-weight-bold">Dubai, UAE</div>
            <div class="text-subtitle2">Dubai International Airpo...</div>
            <div class="text-secondary-1 text-subtitle2 text-weight-bold">DXB / OMDB</div>
            <div class="text-weight-bold text-subtitle2">13:50</div>
            <div class="text-secondary-2 text-subtitle2 text-weight-bold">12 Jan, 2023</div>
          </div>

          <div class=" q-mx-md  flex-grow-1 text-center">
            <!-- <q-icon name="fa-regular fa-circle-dot" size="8px" color="secondary-2" /> -->
            <div class="flex items-center">

              <div class="flex-grow-1 q-mx-xs dash-line"></div>
              <img src="/images/jet-primary.svg" />
              <div class="flex-grow-1 q-mx-xs dash-line"></div>
            </div>
            <div class="text-primary text-weight-bold text-subtitle2 q-mt-sm">2 Hours 32 Minutes</div>

            <!-- <q-icon name="fa-regular fa-circle-dot" size="8px" color="secondary-2" /> -->
          </div>

          <div>
            <div class="text-h6 text-weight-bold">Dubai, UAE</div>
            <div class="text-subtitle2">Dubai International Airpo...</div>
            <div class="text-secondary-1 text-subtitle2 text-weight-bold">DXB / OMDB</div>
            <div class="text-weight-bold text-subtitle2">13:50</div>
            <div class="text-secondary-2 text-subtitle2 text-weight-bold">12 Jan, 2023</div>
          </div>

        </div>
      </div>


    </q-card>
  </div>
</template>

<style scoped lang="scss">
.divider {
  border-top: 1px solid $secondary-2;
}
</style>
