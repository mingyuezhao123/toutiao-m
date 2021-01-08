<template>
  <div>
    <h3>当前最新的count值为:{{ count }}</h3>
    <h3>{{ showNum }}</h3>
    <button @click="btnhandler1">-1</button>
    <button @click="subn(2)">-n</button>
    <button @click="subAsync">-1 async</button>
    <button @click="subAsync1(5)">-n async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum']),
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations(['sub', 'subn']),
    ...mapActions(['subAsync', 'subAsync1']),
    btnhandler1() {
      this.sub()
    },
  },
}
</script>

<style scoped lang="less">
</style>
