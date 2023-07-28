<template lang="pug">
user-id-text-field(v-model="store.tUser.userId")
user-name-text-field(v-model="store.tUser.userName")
user-role-select(
  :items="store.userRoleItems"
  v-model="store.tUser.userRole"
)
create-button(
  @click="store.userAppend(); snackbar=!snackbar"
)

v-snackbar(v-model="snackbar")
    template(v-slot:actions)
        | {{store.tUser.userId}} create complete
</template>
<script lang="ts" setup>
import {
  computed,
  defineProps,
  withDefaults,
  defineEmits,
  ref,
  watch,
} from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
document.title = t('view.setting')

import { useAppStore } from '@/store/app'
const store = useAppStore()
const snackbar = ref(false)
</script>
