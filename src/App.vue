<script setup lang="ts">
import matchTable from '@/components/match-table.vue'
import operatinoStatus from './components/operatino-status.vue'

</script>

<template>
  <match-table />
  <operatino-status />
</template>

<style lang="scss">
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


</style>
