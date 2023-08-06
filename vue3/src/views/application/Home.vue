<template lang="pug">
user-data-table(
  :items="store.users"
  @onDelete="store.onDelete"
)

//- v-btn(
//-   ) open dialog
//-   base-dialog(
//-     v-model="showDialog"
//-     activator="parent"
//-   )
//-     //- template(v-slot:activator="{ props }")
//-     //-   v-btn(@click="showDialog=!showDialog") open dialog
//-     v-card
//-       v-card-text
//-         | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//-       v-card-actions
//-         v-btn(color="primary" block @click="showDialog = false") close



v-row(no-gutters)
  v-col(v-for="(dog, index) in dogs" :key="dog" cols="4")
    v-img(:src="dog")

//- div
//-   v-row(no-gutters)
//-     v-col(v-for="dog in dogStore.dogs.value" :key="dog" cols="4" :ref="dog")
//-       //- div {{ dog }}
//-       v-img(:src="dog")
//-   template #fallback
//-     div loading



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

import { useAppStore } from '@/store/app'
const store = useAppStore()

import { dogAppStore } from '@/store/dog';
const dogStore = dogAppStore()
const dogs = dogStore.dogs



const showDialog = ref(false)


function updateView() {
  store.search(route.query)
  dogStore.update(10)
}
updateView()

watch(route, () => {
  console.log(route.query)
  updateView()
})

</script>
