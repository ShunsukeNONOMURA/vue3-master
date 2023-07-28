<template lang="pug">
application-drawer(
  v-model="drawer"
)
application-header(
  v-model:drawer="drawer"
)
router-view()
application-footer()
</template>

<script setup lang="ts">
// const applicationHeaderTitle = 'tddi'
import { ref } from 'vue'
const drawer = ref(false)
// const props = defineProps({
//   title: {
//     type: String,
//     default: () => {
//       return 't'
//     },
//   },
// })
</script>
