<template lang="pug">
base-data-table(
    :headers="headers"
    :items="props.items"
)
    template(#[`item.userId`]="{ item }")
        router-link(:to="`/user/${item.raw.userId}`") {{ item.raw.userId }}
    template(#[`item.userCreationDatetime`]="{ item }")
        | {{ item.raw.userCreationDatetime.toLocaleString() }}
    template(#[`item.actions`]="{ item }")
        delete-icon-button(
          size="x-small"
          @click="onDelete(item.raw)"
        )
div {{ props.items }}
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  items: {
    type: Array,
    default: () => {
      return []
    },
  },
})
const headers = [
  {
    title: t('domain.user.id'),
    align: 'start',
    // sortable: false,
    key: 'userId',
  },
  {
    title: t('domain.user.name'),
    align: 'start',
    // sortable: false,
    key: 'userName',
  },
  {
    title: t('domain.user.role'),
    align: 'start',
    // sortable: false,
    key: 'userRole',
  },
  {
    title: t('domain.user.creationDatetime'),
    align: 'start',
    // sortable: false,
    key: 'userCreationDatetime',
  },
  {
    title: t('case.action'),
    align: 'start',
    // sortable: false,
    key: 'actions',
  },
]

/**
 * Emits
 */
interface Emits {
  // 関数名, 引数の型, 返り値の型
  (e: 'onDelete', v: null): void
}
const emits = defineEmits<Emits>()
function onDelete(item: any) {
  emits('onDelete', item)
}
</script>
