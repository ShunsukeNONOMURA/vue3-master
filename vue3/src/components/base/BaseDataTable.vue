<template lang="pug">
v-data-table(
    density="compact"
)
    template(v-for="(_, name) in $slots" v-slot:[name]="slotData")
        slot(:name="name" v-bind="slotData")
</template>

<script lang="ts" setup></script>
