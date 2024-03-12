<template>
    <q-card class="bg-black q-pa-md rounded-borders text-white">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-15 ">

                <img style="width: 90px;height: 20px;object-fit: contain;"
                    src="https://s3-alpha-sig.figma.com/img/2b73/e59c/34d100ed89d73be610d22e68beb9b3ce?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n0cmbhWg82dbYQeYpZJzVc8Nu1Y2IhputCad3Nizh9N0ANuvzUAjAKG4mgPLesRFwmj2ovcAV9eZaoF~S0PJASoGWsU0BYIWuNWvLqWcFeCNDziW5oZVD581pdi1~3tVt-QLjIQ~bUnD9TnG-iNf2nDthUinGkxEHPV2ccKg2UlaL9yu13IcryoNDEptAILJd2PjlY-R7OSrtbCHNoDOZKhvF0iP-1~1SWrGkrgKtiBJBm0eYOfQWRZDrWzn3yZr-9EXbyVvIJ2NwReGAqWbGwHN5GPu1twrqGvNWduvYHSuTSRQI06rIzsaTFJFgqeHov382mZSl~cRFw2qeJBRXg__" />
                <div class="flex items-center q-mt-sm">
                    <q-icon color="yellow" class="q-mr-xs" name="fa-solid fa-star" v-for="item in [1, 2, 3, 4, 5] "
                        :key="item" />
                    <span class="text-subtitle2 text-weight-bold">5.0</span>
                </div>
            </div>
            <div class="text-primary flex items-center ">
                <img src="/images/primary-verify.svg" />
                <div class="text-weight-bold text-subtitle1 q-ml-sm">Verified Operator</div>
            </div>

        </div>
        <div class="flex items-center justify-between q-mt-md">
            <div class="flex items-center gap-15 ">
                <div class="text-weight-bold tex-subtitle2">
                    <span class="text-secondary-1"> Country: </span>United Arab Emirated
                </div>
                <div class="text-weight-bold tex-subtitle2">
                    <span class="text-secondary-1"> City: </span>Dubai
                </div>
            </div>
            <div class="text-primary flex items-center ">
                <img style="width: 90px;height: 20px;object-fit: contain;"
                    src="https://s3-alpha-sig.figma.com/img/2b73/e59c/34d100ed89d73be610d22e68beb9b3ce?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n0cmbhWg82dbYQeYpZJzVc8Nu1Y2IhputCad3Nizh9N0ANuvzUAjAKG4mgPLesRFwmj2ovcAV9eZaoF~S0PJASoGWsU0BYIWuNWvLqWcFeCNDziW5oZVD581pdi1~3tVt-QLjIQ~bUnD9TnG-iNf2nDthUinGkxEHPV2ccKg2UlaL9yu13IcryoNDEptAILJd2PjlY-R7OSrtbCHNoDOZKhvF0iP-1~1SWrGkrgKtiBJBm0eYOfQWRZDrWzn3yZr-9EXbyVvIJ2NwReGAqWbGwHN5GPu1twrqGvNWduvYHSuTSRQI06rIzsaTFJFgqeHov382mZSl~cRFw2qeJBRXg__" />

            </div>

        </div>
    </q-card>
</template>
<style lang="scss" scoped></style>