<template lang="pug">
base-text-field(
    append-inner-icon="mdi-magnify"

    clearable
    placeholder="キーワードを入力"
    density="comfortable"
    hide-details
    variant="outlined"

    @click:append-inner="onSearch"
    @keyup.enter="onSearch"
)
</template>

<script lang="ts" setup>
interface Emits {
  // 関数名, 引数の型, 返り値の型
  (e: 'search', v: null): void
}
const emits = defineEmits<Emits>()
function onSearch() {
  emits('search', {})
}
</script>
