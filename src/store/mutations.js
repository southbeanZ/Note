import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, STAR_NOTE, GET_NOTELIST } from './mutation-types'

const mutations = {
  [ADD_NOTE] (state, data) {
    console.log(data)
    data.id = state.list[state.list.length - 1].id + 1
    data.summary = data.content
    data.star = false
    console.log(data)
    state.list = [...state.list, data]
  },
  [DELETE_NOTE] (state, id) {
    let index = state.list.findIndex((ele) => {
      return +ele.id === id
    })
    console.log(index)
    state.list.splice(index, 1)
    state.activeItem = null
  },
  [UPDATE_NOTE] (state, newData) {
    let _id = newData.id
    state.list[_id] = newData
  },
  [STAR_NOTE] (state, id) {
    state.list[id].star = !state.list[id].star
  },
  [GET_NOTELIST] (state, data) {
    state.list = data
  }
}

export default mutations
