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
      <q-list padding class="flex itmes-center remove-bg-on-hover" style="gap: 15px">
        <q-item v-for="(item, idx) in links" :key="idx" :to="item.to" :clickable="false" :manual-focus="false"
          class="text-subtitle1 nav-item text-weight-medium q-pa-none cursor-pointer">
          <!-- item -->
          <!-- active-class="active-item" -->
          <q-item-section>{{ item.title }}</q-item-section>
        </q-item>
        <div style="margin: auto;">
          <q-btn outline class="text-weight-bold" no-caps color="grey-1" padding="5px 30px">
            <div class="text-white">Login</div>
          </q-btn>
        </div>
        <div style="margin: auto; cursor: pointer;">

          <q-icon name="jc:menu-04" size="28px" color="primary" />
          <q-menu class="bg-black" style="width: 550px;" :offset="[-20, 10]">
            <div class="q-pa-lg rounded-borders">
              <div class="row q-col-gutter-lg">
                <div v-for="item in menuItems" :key="item" class="col-6 flex items-center no-wrap menu-item">
                  <q-icon class="icon" :name="item.icon" />
                  <div class="text-weight-bold q-ml-sm">
                    {{ item.title }}
                    <div class="text-grey-1 text-body1">
                      {{ item.subtitle }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-menu>
        </div>

      </q-list>
    </q-toolbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const links = ref([
  {
    title: 'Jet-Tech',
    to: '',
  },
  {
    title: 'Explore Jet-Seats',
    to: '',
  },
  {
    title: 'Explore Air-Taxi',
    to: '',
  },
])

const menuItems = [
  {
    title: 'About Us',
    subtitle: 'Learn more about Jet Class.',
    icon: 'jc:bar-chart-10'
  },
  {
    title: 'How It Works',
    subtitle: 'Learn how booking process works.',
    icon: 'jc:message-question-circle'
  },
  {
    title: 'Our Fleet',
    subtitle: 'We have diverse fleet of Jets.',
    icon: 'jc:plane'
  },
  {
    title: 'Listed Operators',
    subtitle: 'All the verified listed operators on JC.',
    icon: 'jc:check-verified-01'
  },
  {
    title: 'Wiki',
    subtitle: 'Everything you want to know about jets, we got you covered.',
    icon: 'jc:book-open-01'
  },
]
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


.logo-text {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 2px;
  margin-left: 4px;
}

.menu-item {
  color: white;
  cursor: pointer;

  &:hover {
    @extend .text-primary;

    .icon {
      @extend .text-primary;
    }
  }
}

.nav-item {
  color: white;
  cursor: pointer;


  &:hover {
    @extend .text-primary;
  }
}
</style>
