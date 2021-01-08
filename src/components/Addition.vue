<template>
  <div>
    <h3>当前最新的count值为:{{ $store.state.count }}</h3>
    <h3>{{ $store.getters.showNum }}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+n</button>
    <button @click="btnHandler3">+1 async</button>
    <button @click="btnHandler4">+n async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    btnHandler1() {
      this.$store.commit('add')
    },
    btnHandler2() {
      // commit的作用,就是调用某个mutation函数
      //   3是调用addn函数时携带的参数
      this.$store.commit('addn', 3)
    },
    btnHandler3() {
      // 异步
      //   这里的dispatch函数用来触发action
      this.$store.dispatch('addAsync')
    },
    btnHandler4() {
      this.$store.dispatch('addAsync1', 5)
    },
  },
}
</script>

<style scoped lang="less">
</style>
