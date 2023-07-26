<template lang="pug">
base-header(
)
    v-toolbar-title {{props.title}}
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: () => {
      return ''
    },
  },
})
</script>
