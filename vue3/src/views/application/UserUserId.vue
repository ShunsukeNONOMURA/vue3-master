<template lang="pug">
div {{ user }}
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useRoute } from 'vue-router'
const route = useRoute()
// console.log(route.query)
// console.log(route.params)

import { useAppStore } from '@/store/app'
const store = useAppStore()
const user = store.findUser(route.params.userId as string)

document.title = t('view.userUserId', { userName: user.userName })
</script>
