<template>
  <div>
    <my-addition></my-addition>

    <p></p>

    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from './components/Addition'
import Subtraction from './components/Subtraction'
export default {
  data() {
    return {}
  },
  components: {
    // 注册为app的子组件
    'my-addition': Addition,
    'my-subtraction': Subtraction,
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less">
</style>
