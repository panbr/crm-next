import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const module = require.context('@/pages', true, /\.module\.js$/)
let modules = {}

module.keys().forEach(v => {
    modules = {...modules, ...module(v)}
})

export default new Vuex.Store({
    modules
})
