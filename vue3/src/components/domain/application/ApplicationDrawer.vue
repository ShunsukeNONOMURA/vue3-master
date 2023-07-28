<template lang="pug">
base-drawer()
    v-list(nav density="compact")
        v-list-item(prepend-icon="mdi-home" title="home" to="/home")
        v-list-item(prepend-icon="mdi-cog" title="setting" to="/setting")
        v-list-item(prepend-icon="mdi-information" title="information" to="/infomation")
</template>

<script lang="ts" setup></script>
