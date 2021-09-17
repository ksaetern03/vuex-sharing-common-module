import Vue from 'vue'
import Vuex from 'vuex'

//import cat from './modules/cats'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug
})

// export default new Vuex.Store({
//   modules: {
//     cat
//   },
//   strict: debug
// })