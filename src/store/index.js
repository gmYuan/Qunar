import Vue from 'vue';     //引入vue
import Vuex from 'vuex';   //引入vuex

Vue.use(Vuex) 

export default new Vuex.Store({
    state: { 
      currentCity: '上海',
    },
    getters: { 
        
    },


    mutations: {
      setCurrentCity (state, city) {
        state.currentCity = city
        // console.log(222, city)
      }, 
        
    },
    actions: {
       setCurrentCity (ctx,city) {
         ctx.commit('setCurrentCity', city)
       },
    }
})
