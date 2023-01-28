<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const { increment } = useCounterStore()

defineProps<{
  itemValue: string,
}>()
const emit = defineEmits(['matchItemClick'])


function onClick(value: string) {
  emit('matchItemClick', value)
  increment()
}

</script>

<template>
  <button type="button" @click="onClick(itemValue)"
  >
    {{ itemValue }}
  </button>

</template>

<style lang="scss" scoped>
button {
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 1.25em;
}
</style>