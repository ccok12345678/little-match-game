import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const matchCount = ref(0)

  // const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function matchCountIncrement() {
    matchCount.value++
  }

  function reset() {
    count.value = 0
    matchCount.value = 0
  }

  return {
    count, matchCount,
    increment, reset, matchCountIncrement
  }
})
