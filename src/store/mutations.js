import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './mutation-types'

const mutations = {
  [ADD_NOTE] (state, data) {
    console.log(data)
    data.id = state.list[state.list.length - 1].id + 1
    data.summary = data.content
    console.log(data)
    state.list = [...state.list, data]
  },
  [DELETE_NOTE] (state, id) {
    state.list.splice(id, 1)
    state.activeItem = null
  },
  [UPDATE_NOTE] (state, newData) {
    let _id = newData.id
    state.list[_id] = newData
  }
}

export default mutations
