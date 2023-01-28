<script setup lang="ts">

defineProps<{
  itemValue: string
}>()
</script>

<template>
  <button type="button" @click="$emit('matchItemClick',itemValue)">
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