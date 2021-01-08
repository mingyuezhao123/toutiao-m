import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
    // 将store挂载上来,这样vue里面所有的组件都可以访问到store里面的数据了
    store,
    render: h => h(App)
}).$mount('#app')