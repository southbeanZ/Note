import Vue from 'vue'
import Vuex from 'Vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  list: [],
  activeItem: null,
  isNew: false
}

let getters = {
  starNotes: (state) => {
    return state.list.filter(item => item.star)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
