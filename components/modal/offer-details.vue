<script setup>
const dialog = ref(false)

const showDetails = () => {
    dialog.value = true
}

defineExpose({
    showDetails,
})
</script>
<template>
    <div>
        <q-dialog v-model="dialog" class="offer-modal" transition-show="slide-up" :maximized="true"
            transition-hide="slide-down">
            <div>
                <q-card style="background-color: #F9FAFB" class="q-pa-md">
                    <div class="flex items-center justify-between">
                        <div>
                            <breadcrumbs />
                        </div>
                        <div class="flex items-center gap-15">
                            <q-btn flat class="text-weight-bold text-body1" no-caps padding="5px" color="grey-10">
                                <q-icon name="jc:file-download-01" class="q-mr-xs" size="12px"></q-icon>
                                Download Offer </q-btn>
                        </div>
                    </div>

                    <div class="row q-col-gutter-md q-ma-none">
                        <div class="col-7">
                            <div class="row q-ma-none q-col-gutter-md">
                                <div class="col-2 q-pa-none">
                                    <div class="flex column gap-15">
                                        <img v-for="item in [1, 2, 3, 4]" :key="item"
                                            style="height: 70px;object-fit: cover;" class="rounded-borders"
                                            src="https://s3-alpha-sig.figma.com/img/886b/bdee/6cc7fc232beb7212703bdd48f7dcad23?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEGI~YTsd7tphqbavVqVq-fNuzmYALmJxu4cT36H-nQBWa-Ck8IqtITnHXxoKyPe4LYcsFw5QICxzd4w2NnXzCYkBBD-JqrAWYP4NKSYMO0o7BkzU-2soOu2zP7A9HGbw8jYbdyxN8HAPs1Mz17FCrSyRq6QtxzSDsT7gfr6KP31zz505cJWGHguiaQXbbCWJkoNOI154SoxCUyg8h8l8XQcVGhiETTWUzqEsW0hBeiZEzEF6ktUOvVOJVxAT0Tghbzp6ncBrZNsM0nIrB0Ez1oZk8Tz6W1Lhk9jRm6olCJRIPLpBnkn1SJc5n9n3gA7SlT2BAzGLKcdygwObq1Jfg__" />
                                    </div>
                                </div>
                                <div class="col-10 q-pt-none">
                                    <img style="height: 325px;object-fit: cover;width: 100%;" class="rounded-borders"
                                        src="https://s3-alpha-sig.figma.com/img/886b/bdee/6cc7fc232beb7212703bdd48f7dcad23?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEGI~YTsd7tphqbavVqVq-fNuzmYALmJxu4cT36H-nQBWa-Ck8IqtITnHXxoKyPe4LYcsFw5QICxzd4w2NnXzCYkBBD-JqrAWYP4NKSYMO0o7BkzU-2soOu2zP7A9HGbw8jYbdyxN8HAPs1Mz17FCrSyRq6QtxzSDsT7gfr6KP31zz505cJWGHguiaQXbbCWJkoNOI154SoxCUyg8h8l8XQcVGhiETTWUzqEsW0hBeiZEzEF6ktUOvVOJVxAT0Tghbzp6ncBrZNsM0nIrB0Ez1oZk8Tz6W1Lhk9jRm6olCJRIPLpBnkn1SJc5n9n3gA7SlT2BAzGLKcdygwObq1Jfg__" />
                                </div>
                            </div>
                            <div class="q-mt-md flex items-center justify-between">
                                <div>
                                    <div class="text-weight-bold text-h3">

                                        Cessna Citation CJ2
                                    </div>
                                    <div class="flex items-center q-mt-sm">
                                        <q-icon color="yellow" class="q-mr-xs" name="fa-solid fa-star"
                                            v-for="item in [1, 2, 3, 4, 5] " :key="item" />
                                        <span class="text-subtitle2 text-weight-bold">5.0</span>
                                    </div>
                                </div>
                                <div class="text-weight-bold text-secondary-1 text-h4">
                                    Light Jet
                                </div>
                            </div>
                            <q-separator color="grey-5 q-my-lg" />
                            <div>
                                <img style="height: 280px;width: 100%;object-fit: cover;" class="rounded-borders"
                                    src="https://s3-alpha-sig.figma.com/img/553a/473b/2b9478136740baaf3dc860cc65cde1c4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvh2J38zzqvO1mow~uLa8nkRHIMdXcBqb0ANxQP0dXNCpVXmabRFehCvwQWDQEUSC9Mxc6nhvjMAaS2TpN5PiL5YiZzCDajRY3qOaW9ra5uz66xwO~EcB3BA-47ShzAVUqu-pJWoveyiWqM3LQap4Z5ml0aoarxAXQPiyiaBFuX56xkmTNviAfQGCQGkgCHJEZbDTYqitMiA2E7mFTfuL9N5~jL1PBXfU4Y-pWfTLvKt-roAo5mvhikqmwVah-Bi4tQg2XBjnmGhsHLn9pAUk89kn~oxmErM1KKcmAUpLzHtlFOwaCdsrlzmL1ZY~hu-RN7SRf98g~TP-mdLN4wBPw__" />

                                <div class="divider q-py-md q-mt-md">
                                    <div class="flex items-center ">
                                        <div>
                                            <div class="text-secondary-1 text-subtitle2 text-weight-bold">DXB / OMDB
                                            </div>
                                            <div class="text-weight-bold text-h4">13:50</div>

                                            <div class="text-h6 text-secondary text-weight-bold">Dubai International
                                                Airport - Dubai</div>
                                            <div class="text-secondary-1 text-subtitle2 text-weight-bold">12 Jan, 2023
                                            </div>
                                        </div>

                                        <div class=" q-mx-md  flex-grow-1 text-center">

                                            <img src="/images/jet-primary.svg" />
                                        </div>

                                        <div class="text-right">
                                            <div class="text-secondary-1 text-subtitle2 text-weight-bold">DXB / OMDB
                                            </div>
                                            <div class="text-weight-bold text-h4">13:50</div>

                                            <div class="text-h6 text-secondary text-weight-bold">Vienna International
                                                Airport- Vienna</div>
                                            <div class="text-secondary-1 text-subtitle2 text-weight-bold">12 Jan, 2023
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <q-card flat class="q-pa-md br-card q-mt-md">
                                <div class="text-h5 text-weight-bold">Jet Specifications</div>
                                <div class="row q-mt-none q-col-gutter-md">
                                    <div class="col-6 flex items-start" v-for="item in [1, 2, 3, 4,]" :key="item">
                                        <q-icon name="jc:star-02" color="secondary-1" />
                                        <div class=" q-ml-sm">
                                            <div class="text-secondary-1 text-subtitle2 text-weight-bold">
                                                Cabin Height
                                            </div>
                                            <div class="text-weight-bold text-h5">
                                                4.98 Meters
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </q-card>
                            <q-card flat class="q-pa-md br-card q-mt-md">
                                <div class="text-h5 text-weight-bold">Jet Amenities</div>
                                <div class="row q-mt-none q-col-gutter-md">
                                    <div class="col-6 flex items-start" v-for="item in [1, 2, 3, 4,]" :key="item">
                                        <q-icon name="jc:star-02" color="secondary-1" />
                                        <div class=" q-ml-sm">
                                            <div class="text-secondary-1 text-subtitle2 text-weight-bold">
                                                Cabin Height
                                            </div>
                                            <div class="text-weight-bold text-h5">
                                                4.98 Meters
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </q-card>
                            <div class="q-mt-md">
                                <card-operator />
                            </div>
                            <div class="q-mt-md">

                            </div>

                        </div>
                        <div class="col-5 flex column gap-15">
                            <base-chip color="grey-1" text-color="white" class="text-weight-bold text-h6 "
                                style="height: 54px;" square>
                                <div class="flex items-center justify-between w-full ">
                                    <div>
                                        Estimated Offers
                                    </div>
                                    <q-icon name="jc:help-octagon" />
                                </div>
                            </base-chip>
                            <q-card flat class="q-pa-md br-card">
                                <div class="flex items-center justify-between br-bottom q-pb-md">
                                    <div>
                                        <div class="text-weight-bold text-h4">
                                            Offer Price
                                        </div>
                                        <div class="text-weight-medium text-h5 text-grey-11">
                                            90% Price prediction confidence
                                        </div>
                                    </div>
                                    <div class="text-weight-bold text-h2">
                                        $13,500
                                    </div>
                                </div>
                                <div class="q-mt-md text-secondary-1 text-weight-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, tortor
                                    sit amet posuere
                                    sollicitudin, velit leo placerat lacus. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>

                                <div class="q-mt-lg full-width">
                                    <base-btn class="text-weight-bold full-width" padding="15px 10px">REQUEST HARD QUOTE
                                    </base-btn>
                                </div>
                            </q-card>
                            <q-card flat class="q-pa-md br-card">
                                <div class="text-h4 text-weight-bold">
                                    Contract Terms
                                    <q-icon name="jc:help-octagon" size="14px" color="grey-10" />
                                </div>
                                <div class="q-mt-sm text-secondary-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, tortor
                                    sit amet posuere
                                    sollicitudin.
                                </div>

                                <div class="text-h5 text-weight-bold q-mt-lg">
                                    Cancellation Terms
                                    <q-icon name="jc:help-octagon" size="12px" />
                                </div>
                                <div class="q-mt-md flex items-start no-wrap" v-for="item in [1, 2, 3, 4, 5, 6]"
                                    :key="item">
                                    <q-icon name="fa-solid fa-circle" class="q-mt-xs q-mr-sm" size="8px"
                                        color="primary" />
                                    <div class="text-secondary text-weight-medium">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                        Curabitur suscipit,
                                        tortor sit amet posuere
                                        sollicitudin.</div>
                                </div>

                                <div class="text-h5 text-weight-bold q-mt-lg">
                                    Other Terms
                                    <q-icon name="jc:help-octagon" size="12px" />
                                </div>
                                <div class="q-mt-md flex items-start no-wrap" v-for="item in [1, 2, 3, 4, 5, 6]"
                                    :key="item">
                                    <q-icon name="fa-solid fa-circle" class="q-mt-xs q-mr-sm" size="8px"
                                        color="secondary-2" />
                                    <div class="text-secondary text-weight-medium">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                        Curabitur suscipit,
                                        tortor sit amet posuere
                                        sollicitudin.</div>
                                </div>

                            </q-card>

                        </div>
                    </div>
                    <div class="row q-ma-none q-col-gutter-md">
                        <div class="col-7">

                            <q-btn @click="dialog = false" flat class="text-weight-bold text-body1" no-caps
                                padding="5px" color="grey-10">
                                <q-icon name="jc:chevron-left" class="q-mr-xs" size="12px"></q-icon>
                                Go Back </q-btn>
                        </div>
                        <div class="col-5 ">


                            <base-btn>
                                <div class="text-h6 text-weight-bold">REQUEST HARD QUOTE FOR THIS</div>
                                <div class="text-body1">OR SIMILAR</div>
                            </base-btn>
                        </div>
                    </div>
                </q-card>
            </div>
        </q-dialog>
    </div>
</template>

<style lang="scss">
.offer-modal .q-dialog__inner {
    top: 70px
}

.br-card {
    border: 1px solid $grey-5;
}

.br-bottom {
    border-bottom: 1px dashed $grey-11 !important;
}
</style>
