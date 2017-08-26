import { RENDER_NOTE, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, STAR_NOTE, GET_NOTELIST, GET_STAR, ADD_TAG } from './mutation-types'

function getIndex (list, id) {
  return list.findIndex((ele) => {
    return +ele.id === id
  })
}

const mutations = {
  [RENDER_NOTE] (state, data) {
    if (data.isNew) {
      state.activeItem = {
        title: '',
        content: ''
      }
    } else {
      let _data = state.list[getIndex(state.list, data.id)]
      state.activeItem = _data || null
    }
    state.isNew = data.isNew
  },
  [ADD_NOTE] (state, data) {
    console.log(data)
    data.id = state.list[state.list.length - 1].id + 1
    data.summary = data.content
    data.star = false
    console.log(data)
    state.list = [...state.list, data]
  },
  [DELETE_NOTE] (state, id) {
    // let index = state.list.findIndex((ele) => {
    //   return +ele.id === id
    // })
    // console.log(index)
    state.list.splice(getIndex(state.list, id), 1)
    state.activeItem = null
  },
  [UPDATE_NOTE] (state, newData) {
    let _id = newData.id
    state.list[_id] = newData
  },
  [STAR_NOTE] (state, id) {
    let index = getIndex(state.list, id)
    state.list[index].star = !state.list[index].star
  },
  [GET_NOTELIST] (state, data) {
    state.list = data
  },
  [GET_STAR] (state, data) {
    state.showStar = !state.showStar
    // state = {...state, showStar: !state.showStar}
    // console.log(state)
  },
  [ADD_TAG] (state, data) {
    let index = getIndex(state.list, state.activeItem.id)
    state.list[index].tagList.push({
      'name': data
    })
  }
}

export default mutations
