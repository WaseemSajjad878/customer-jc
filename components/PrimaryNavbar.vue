<template>
  <div class="">
    <q-toolbar class="text-white padding q-my-md" style="height: 28px">
      <div class="flex items-center">
        <div class="text-right">
          <NuxtLink style="text-decoration: none" to="/" class="flex items-center">
            <q-img width="21px" src="/images/jet.svg" />
            <div class="logo-text text-white">JETCLASS</div>
          </NuxtLink>
        </div>
      </div>
      <q-space style="color: black"></q-space>
      <q-list padding class="row itmes-center remove-bg-on-hover" style="gap: 15px">
        <q-item
          v-for="(item, idx) in links"
          :key="idx"
          :to="item.to"
          :clickable="false"
          :manual-focus="false"
          class="text-subtitle1 text-weight-medium q-pa-none cursor-pointer"
        >
          <!-- item -->
          <!-- active-class="active-item" -->
          <q-item-section>{{ item.title }}</q-item-section>
        </q-item>
        <q-btn outline class="text-weight-bold" padding="10px 30px">LOGIN</q-btn>
        <base-btn text-color="black" class="text-weight-bold" padding="10px 30px">SIGN-UP</base-btn>
      </q-list>

      <!-- <div class="ring cursor-pointer">
          <q-avatar>
            <img style="width: 50px; object-fit: contain" src="/images/profile-img.png" />
            <base-menu>
              <template #body>
                <q-list class="q-pa-none" dense style="min-width: 80px">
                  <q-item @click="$router.push('/edit-profile')" class="q-px-none" clickable v-close-popup>
                    <div class="text-black flex items-center text-body1">
                      <q-icon name="jc:users-01" class="q-mr-xs"></q-icon> My Profile
                    </div>
                  </q-item>

                  <q-item @click="logout" class="q-px-none" clickable v-close-popup>
                    <div class="text-black flex items-center text-body1">
                      <q-icon name="jc:log-out-01" class="q-mr-xs"></q-icon> Logout
                    </div>
                  </q-item>
                </q-list>
              </template>
            </base-menu>
          </q-avatar>
        </div> -->
    </q-toolbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { useRoute } from "vue-router";
// import { useAuthStore } from "@/stores/auth";

// const route = useRoute();
// const authStore = useAuthStore();
const links = ref([
  {
    title: 'How it works?',
    to: '',
  },
  {
    title: 'Why JetClass?',
    to: '',
  },
  {
    title: 'Fleet',
    to: '',
  },
])
</script>

<style lang="scss">
.header-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
}

.active-drawer .header-overlay::before {
  display: none;
}
.padding {
  padding: 0px;
}

.underline-text {
  position: relative;
  display: flex;
  // width: 95px;
  color: black;
}

.underline-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  color: black;
  width: 70%;
  height: 2px; /* Adjust the line height as needed */
  background-color: #13b89b; /* Adjust the line color as needed */
  transition: all 0.2s ease-in-out;
}

.underline-text:hover::after {
  width: 85%;
}

.item:hover {
  font-weight: 600;
  color: #000 !important;
  position: relative;
}
.item::after {
  content: '';
  position: absolute;
  bottom: 25%;
  width: 0%;
  border-radius: 8px !important;
  height: 2px; /* Adjust the line height as needed */
  background-color: black; /* Adjust the line color as needed */
  transition: all 0.2s ease-in-out;
}

.item:hover::after {
  width: 70%;
}

.active-item {
  font-weight: 600;
  color: #000 !important;
  font-size: 20px;
  position: relative;
}
.active-item::after {
  content: '';
  position: absolute;
  bottom: 25%;
  width: 70%;
  border-radius: 8px !important;
  height: 2px; /* Adjust the line height as needed */
  background-color: black; /* Adjust the line color as needed */
  transition: all 0.2s ease-in-out;
}

.active-item:hover::after {
  width: 90%;
}

// .arrow-top::before {
//   content: ' ';
//   position: absolute;
//   left: 21.6%;
//   top: -10px;
//   z-index: 10;
//   border-top: none;
//   border-right: 15px solid transparent;
//   border-left: 15px solid transparent;
//   border-bottom: 15px solid black;
// }

.logo-text {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 2px;
  margin-left: 4px;
}
</style>
