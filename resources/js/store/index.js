import Vue from 'vue'
import Vuex from 'vuex'

import state from './states'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// import {replaceState} from 'vue-router/src/util/push-state'




Vue.use(Vuex)
const initialStateCopy = JSON.parse(JSON.stringify(state))
export const store=new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  // modules:{
  //   example:moduleExample
  // },
  // plugins:[myInit]
})

export function resetState () {
  store.replaceState(initialStateCopy)
}

