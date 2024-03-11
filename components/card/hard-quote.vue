<script setup>

const props = defineProps({
    confirm: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <q-card class="rounded-borders q-pa-md " flat :class="confirm ? 'bg-blue-10' : 'card-br'">
        <div class="row ">
            <div :class="[confirm ? 'br-right-confirm' : 'br-right', 'col-5']">
                <div class="row items-center ">
                    <div style="position: relative">
                        <div style="position: absolute; right: 8px; top: 8px"
                            class="rounded-borders bg-white q-pa-xs text-weight-bold text-body2 flex items-center">
                            <q-icon name="fa-solid fa-star" size="12px" color="warning" class="q-mr-xs" />
                            5.0
                        </div>
                        <img src="https://s3-alpha-sig.figma.com/img/ee82/69e3/4b777020f9cd602ba34bc6ea5cfa7b5b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZsfNIQoCOhKwvBF2yX1dbnPH6cNytUCn6Kp0lq9fJuDPfWwLTGzz8cLZfiwiGglnF3m7kJGPSFzgq4yuURprjlMAOjNVQkeThZLt~DZM2G497EKX-oX6qtxM80u7WfgLLyjgQjGGgKTSjrbiDMw8M9PaO2ENcFVQE2gZn52LYm390gk533iiVlruNI3A4XgSFVBCDlzEbqLG~oUxCSByhVvcPPrqd7eIEeM7ZmLEPkQ0bAfTigAMsg2H5H7R1XguFFtt9kVGYDc2PZBDIqHPSeInqVeQULolX8QPSOuE5c4LERN0p06~hLW-KnoUmAF76tpOepWn92Tw5TvqB3NRA__"
                            class="rounded-borders" style="width: 150px;object-fit: cover;" />
                    </div>

                    <div class="q-ml-sm">
                        <div class="text-weight-bold text-body1 text-secondary">Light Jet</div>
                        <div class="text-weight-bold text-h5 text-grey-10" :class="confirm ? 'text-white' : null">
                            INTRO CS-AERO 53 JETS LIMITED</div>
                        <div class="flex items-center q-mt-xs">
                            <div class="bg-secondary-3 q-mr-sm" style="width: 75px;height: 40px;"></div>
                            <div>
                                <div class="text-subtitle2  text-weight-bold" :class="confirm ? 'text-white' : null">
                                    INTO CS-AERO 53</div>
                                <div class="text-body2 text-secondary-1 text-weight-bold">Kyiv - Ukraine</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div :class="[confirm ? 'br-right-confirm' : 'br-right', 'col-5 q-px-lg']">
                <div class="text-weight-bold text-h5" :class="confirm ? 'text-white' : null">
                    Flight Details
                </div>
                <div class="flex items-center q-mt-sm">
                    <div>


                        <div class="text-secondary-1 text-subtitle2 text-weight-bold">12 Jan, 2023</div>
                        <div class="text-weight-bold text-h5" :class="confirm ? 'text-white' : null">00:00</div>
                        <div class="text-secondary text-subtitle2 text-weight-bold">DXB / OMDB</div>
                    </div>

                    <div class=" q-mx-md  flex-grow-1 text-center">
                        <div class="text-primary text-weight-bold text-subtitle2 q-mt-sm"><img
                                src="/images/jet-primary.svg" /></div>
                    </div>

                    <div>


                        <div class="text-secondary-1 text-subtitle2 text-weight-bold">12 Jan, 2023</div>
                        <div class="text-weight-bold text-h5" :class="confirm ? 'text-white' : null">00:00</div>
                        <div class="text-secondary text-subtitle2 text-weight-bold">DXB / OMDB</div>
                    </div>

                </div>
            </div>
            <div v-if="!confirm" class="col-2 flex items-end column w-100">

                <div class="text-positive text-subtitle2 text-weight-bold">Confirmed Price</div>

                <div class="text-weight-bold text-h5">$12,000</div>
                <div class="q-mt-auto">
                    <base-btn padding="5px 30px" class="text-weight-bold">Confirm</base-btn>
                </div>
            </div>

            <div v-else class="col-2 flex items-start q-pl-md column ">

                <div class="flex items-center no-wrap">
                    <img style="width: 28px;" src="/images/loader.gif" />
                    <div class="text-white q-ml-sm text-subtitle2">Pending Confirmation
                        form Operator</div>
                </div>
                <div class="text-weight-bold text-h5 text-white q-mt-auto">$12,000</div>
                <div class="text-green-8 text-subtitle2 text-weight-bold">Price you confirmed</div>

            </div>

        </div>
    </q-card>
</template>
<style lang="scss" scoped>
.card-br {
    border: 1px solid $grey-5;
}

.br-right {
    border-right: 1px solid $grey-5;

}

.br-right-confirm {
    border-right: 1px solid $grey-11;

}
</style>