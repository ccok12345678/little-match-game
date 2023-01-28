<script setup lang="ts">
import matchButton from './match-button.vue'

const matchItems: string[] = [
  '🦖', '🦥', '🐋', '🍕', '🥯', '🦄', '🐦', '🐝',
  '🦖', '🦥', '🐋', '🍕', '🥯', '🦄', '🐦', '🐝'
]

const usedIndexList: number[] = []

function getRandomItem(): string {
  let randomIndex = Math.floor(Math.random() * matchItems.length)
  while (usedIndexList.includes(randomIndex)) {
    randomIndex = Math.floor(Math.random() * matchItems.length)
  }
  usedIndexList.push(randomIndex)
  return matchItems[randomIndex]
}

function onMatchItemClick(value: string) {
  console.log(value)
}

const array = new Array(4)

</script>

<template>
  <div>
    <table>
      <tr v-for="(_, i) in array" :key="i">
        <td v-for="(_, j) in array" :key="j">
          <match-button :item-value="getRandomItem()"
            @match-item-click="onMatchItemClick"></match-button>
        </td>
      </tr>

    </table>
  </div>
</template>

<style lang="scss" scoped>
table {
  margin-bottom: 0;
}

td {
  border: var(--border-width) solid var(--table-border-color);
  padding: 0;
}
</style>
