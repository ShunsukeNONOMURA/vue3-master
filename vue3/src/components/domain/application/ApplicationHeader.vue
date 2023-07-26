<template lang="pug">
base-header(
)
  router-link(to="/")
    application-icon-button
  //- v-toolbar-title {{props.title}}
  v-text-field(
    v-model="searchText"
    @search="onSearch"
    @keyup.enter="onSearch"
    placeholder="キーワードを入力"
    density="comfortable"
    rounded
    hide-details
  )
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const searchText = ref(route.query.q)

const props = defineProps({
  title: {
    type: String,
    default: () => {
      return ''
    },
  },
  toHomeLink: {
    type: String,
    default: () => {
      return '/'
    },
  },
})

function onSearch() {
  console.log(searchText.value)
  router.push({
    path: '/',
    // path: '/' + searchText.value,
    query: {
      q: searchText.value,
    },
  })
}
</script>
