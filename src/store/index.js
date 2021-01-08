import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    // mutations用于改变state里的值
    mutations: {
        add(state) {
            state.count++
        },
        addn(state, step) {
            state.count += step
        },
        sub(state) {
            state.count--
        },
        subn(state, step) {
            state.count -= step
        }
    },
    // actions用于处理异步任务
    actions: {
        addAsync(content) {
            setTimeout(() => {
                // 在actions中,不能直接修改state中的数据
                // 必须通过content.commit()触发某个mutation才行
                content.commit('add')
            }, 1000)
        },
        addAsync1(content, step) {
            setTimeout(() => {
                // 在actions中,不能直接修改state中的数据
                // 必须通过content.commit()触发某个mutation才行
                content.commit('addn', step)
            }, 1000)
        },
        subAsync(content) {
            setTimeout(() => {
                // 在actions中,不能直接修改state中的数据
                // 必须通过content.commit()触发某个mutation才行
                content.commit('sub')
            }, 1000)
        },
        subAsync1(content, step) {
            setTimeout(() => {
                // 在actions中,不能直接修改state中的数据
                // 必须通过content.commit()触发某个mutation才行
                content.commit('subn', step)
            }, 1000)
        }
    },
    getters: {
        showNum(state) {
            return '当前最新的数量是[' + state.count + ']'
        }
    },
    modules: {}
})