import Vue from 'vue';     //引入vue
import Vuex from 'vuex';   //引入vuex

import state from './state'
import mutations from './mutations'

Vue.use(Vuex) 


export default new Vuex.Store({
    state,
    getters: {},

    mutations,

    actions: {
       setCurrentCity (ctx,city) {
         ctx.commit('setCurrentCity', city)
       },
    }
})
