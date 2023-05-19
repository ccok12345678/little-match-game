<script setup lang="ts">
import matchButton from './match-button.vue'
import { useCounterStore } from '@/stores/counter'

const { matchCountIncrement } = useCounterStore()

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

let tempItem: string | undefined
let tempBtn: HTMLElement | null

function onMatchItemClick(value: string, position: string) {
  const btn = document.getElementById(position)

  if (!tempItem) {
    tempItem = value
    tempBtn = btn
    tempBtn?.setAttribute('class', 'hide')
  } else {
    if (tempItem === value) {
      console.log('match!')
      matchCountIncrement()
      btn?.classList.add('hide')
    } else {
      tempBtn?.classList.remove('hide')
      tempBtn = null
    }
    tempItem = undefined
  }
}


</script>

<template>
  <div>
    <table>
      <tr v-for="(_, i) in new Array(4)" :key="i">
        <td v-for="(_, j) in new Array(4)" :key="`${i}${j}`">
          <match-button
            :id="`${i}${j}`"
            :item-value="getRandomItem()"
            @match-item-click="onMatchItemClick($event, `${i}${j}`)" />
        </td>
      </tr>

    </table>
  </div>
</template>

<style lang="scss" scoped>
td {
  border: var(--border-width) solid var(--table-border-color);
  padding: 0;
}

.hide {
  visibility: hidden;
}
</style>
