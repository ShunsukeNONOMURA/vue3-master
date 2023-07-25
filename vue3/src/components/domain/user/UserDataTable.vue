<template lang="pug">
base-data-table(
    :headers="headers"
    :items="props.items"
)
    template(#[`item.userId`]="{ item }")
        router-link(:to="`/user/${item.raw.userId}`") {{ item.raw.userId }}
    template(#[`item.actions`]="{ item }")
        delete-icon-button(
          size="x-small"
          @click="onDelete(item.raw)"
        )
</template>

<script lang="ts" setup>
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
    title: 'UserId',
    align: 'start',
    // sortable: false,
    key: 'userId',
  },
  {
    title: 'UserName',
    align: 'start',
    // sortable: false,
    key: 'userName',
  },
  {
    title: 'UserRole',
    align: 'start',
    // sortable: false,
    key: 'userRole',
  },
  {
    title: 'Actions',
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
