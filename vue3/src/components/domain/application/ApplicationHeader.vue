<template lang="pug">
base-header(
)
  v-app-bar-nav-icon(@click.stop="drawerComputed = !drawerComputed")
  router-link(to="/")
    application-icon-button
  //- v-toolbar-title {{props.title}}
  search-text-field(
    v-model="searchText"
    @search="onSearch"
  )
  notice-icon-button(id="menu-activator")
  v-menu(activator="#menu-activator")
    v-list
      v-list-item
        v-list-item-title hoge

</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import { computed, ref } from 'vue'
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
  drawer: {
    type: Boolean,
    default: () => {
      return false
    },
  },
})

function onSearch() {
  // console.log(searchText.value)
  if (searchText.value == '') return
  router.push({
    path: '/home',
    // path: '/' + searchText.value,
    query: {
      q: searchText.value,
    },
  })
}

const emit = defineEmits<{
  (e: 'update:drawer', model: boolean): void
}>()
const drawerComputed = computed({
  get: () => props.text,
  set: (value) => {
    emit('update:drawer', value)
  },
})
</script>
