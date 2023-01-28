<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { toRefs } from 'vue'

const { count } = toRefs(useCounterStore())
const countReset = useCounterStore().reset

function restart() {
  countReset()

  document.querySelectorAll('.hide').forEach(element => {
    element.classList.remove('hide')
  })
}

</script>

<template>
  <ul class="list">
    <li><b>Steps:</b> {{ count }}</li>

    <li>
      <a href="#" role="button" class="outline"
        @click="restart"
      >Restart</a>
    </li>

  </ul>

</template>

<style lang="scss" scoped>
ul.list {
  list-style: none;
  display: flex;
  width: 300px;
  justify-content: space-around;
  align-items: center;

  li {
    display: inline-block;
    padding: .5rem 0;
  }
}

b {
  margin-right: .5rem;
}

a[role="button"] {
  padding: .35rem .45rem;
}
</style>