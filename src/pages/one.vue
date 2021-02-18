<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <el-button @click="toOne"> {{ count }} </el-button>
</template>

<script>
  import HelloWorld from '../components/HelloWorld.vue'
  // import { useRouter } from 'vue-router'
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../store'
  export default defineComponent({
    components: {
      HelloWorld
    },
    setup() {
      // const router = useRouter()
      const store = useStore(key)
      const toOne = () => {
        store.commit('increment')
      }
      const count = computed(() => store.state.count)
      return {
        toOne,
        count
      }
    }
  })
</script>
