<script setup lang="ts">
import matchTable from '@/components/match-table.vue'
import operatinoStatus from '@/components/operatino-status.vue'
import finishedView from '@/components/finished-view.vue'
import { useCounterStore } from './stores/counter';
import { toRefs } from 'vue';

const { matchCount } = toRefs(useCounterStore())

</script>

<template>

  <match-table v-if="matchCount < 8" />
  <finishedView v-else />

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
