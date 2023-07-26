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
create-button(
  @click="store.userAppend"
)

search-button()
base-date-picker()
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

import { defineComponent, inject } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const title = t('view.home')
document.title = title
console.log(inject('applicationHeaderTitle'))

const applicationHeaderTitle = 'home'

import { useAppStore } from '@/store/app'
const store = useAppStore()

store.updateUserList()

store.search(route.query.q)
</script>
