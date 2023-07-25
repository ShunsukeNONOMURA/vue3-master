<template lang="pug">
user-data-table(
  :items="store.users"
  @onDelete="store.onDelete"
)

user-id-text-field(v-model="store.tUser.userId")
user-name-text-field(v-model="store.tUser.userName")

user-role-select(
  :items="store.userRoleItems"
  v-model="store.tUser.userRole"
)

add-button(
  @click="store.userAppend"
)

</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/store/app'
const store = useAppStore()

onMounted(() => {
  store.updateUserList()
})
</script>
