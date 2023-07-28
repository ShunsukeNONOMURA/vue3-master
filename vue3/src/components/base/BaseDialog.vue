<template lang="pug">
v-dialog(
    width="auto"
)
    template(v-for="(_, name) in $slots" v-slot:[name]="slotData")
        slot(:name="name" v-bind="slotData")
</template>

<script lang="ts" setup></script>
