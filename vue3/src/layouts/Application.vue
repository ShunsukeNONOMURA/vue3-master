<template lang="pug">
application-header(
  :title='applicationHeaderTitle'
)
router-view(:applicationHeaderTitle='applicationHeaderTitle')
application-footer()
</template>

<script setup lang="ts">
const applicationHeaderTitle = 'tddi'
const props = defineProps({
  title: {
    type: String,
    default: () => {
      return 't'
    },
  },
})
</script>
