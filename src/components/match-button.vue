<script setup lang="ts">
defineProps<{
  itemValue: string,
}>()
const emit = defineEmits(['matchItemClick'])


function onClick(value: string) {
  emit('matchItemClick', value)
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