<template>
  <h1>{{ msg }}</h1>
  <button @click="inCrement"> count is: {{ count }} </button>
  <p>Edit <code>components/one.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../store'

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    setup() {
      const store = useStore(key)
      const count = computed(() => store.state.count)
      return {
        count,
        inCrement: () => store.commit('increment')
      }
    }
  }
</script>
