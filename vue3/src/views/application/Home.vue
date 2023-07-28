<template lang="pug">
user-data-table(
  :items="store.users"
  @onDelete="store.onDelete"
)

v-btn(
  ) open dialog
  base-dialog(
    v-model="showDialog"
    activator="parent"
  )
    //- template(v-slot:activator="{ props }")
    //-   v-btn(@click="showDialog=!showDialog") open dialog
    v-card
      v-card-text
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      v-card-actions
        v-btn(color="primary" block @click="showDialog = false") close

//- search-button()
//- base-date-picker()
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

import { defineComponent, inject, onMounted, onUpdated, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const title = t('view.home')
document.title = title

// console.log(inject('applicationHeaderTitle'))
// const applicationHeaderTitle = 'home'

import { useAppStore } from '@/store/app'
const store = useAppStore()

// store.updateUserList()

function updateView() {
  store.search(route.query)
}

const showDialog = ref(false)

updateView()
// onUpdated(() => {
//   updateView()
// })

watch(route, () => {
  console.log(route.query);
  updateView()
})
</script>
