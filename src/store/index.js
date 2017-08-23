import Vue from 'vue'
import Vuex from 'Vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  list: [],
  activeItem: null,
  isNew: false,
  showStar: false
}

let getters = {
  starNotes: (state) => {
    console.log(state)
    if (state.showStar) {
      return state.list.filter(item => item.star)
    } else {
      return state.list
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
