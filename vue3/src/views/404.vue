<template>404 Not Found</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
document.title=t('view.notFound')
</script>
