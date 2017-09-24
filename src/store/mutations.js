import * as types from './mutation-types'

function getIndex (list, id) {
  return list.findIndex((ele) => {
    return +ele.id === id
  })
}

const mutations = {
  [types.RENDER_NOTE] (state, data) {
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
  [types.ADD_NOTE] (state, data) {
    data.id = state.list.length > 0 ? state.list[state.list.length - 1].id + 1 : 0
    data.summary = data.content
    data.star = false
    localStorage.setItem('notes' + data.id, JSON.stringify(data))
    localStorage.setItem('notesNum', +localStorage.getItem('notesNum') + 1)
    state.list = [...state.list, data]
  },
  [types.DELETE_NOTE] (state, id) {
    // let index = state.list.findIndex((ele) => {
    //   return +ele.id === id
    // })
    // console.log(index)
    localStorage.removeItem('notes' + id)
    state.list.splice(getIndex(state.list, id), 1)
    state.activeItem = null
  },
  [types.UPDATE_NOTE] (state, newData) {
    let _id = newData.id
    state.list[_id] = newData
    localStorage.setItem('notes' + _id, JSON.stringify(newData))
  },
  [types.STAR_NOTE] (state, id) {
    let index = getIndex(state.list, id)
    state.list[index].star = !state.list[index].star
  },
  [types.GET_NOTELIST] (state, data) {
    console.log('data:' + data)
    state.list = data
  },
  [types.GET_STAR] (state, data) {
    state.showStar = !state.showStar
    // state = {...state, showStar: !state.showStar}
    // console.log(state)
  },
  [types.ADD_TAG] (state, data) {
    let index = getIndex(state.list, state.activeItem.id)
    state.list[index].tagList.push({
      'name': data
    })
  },
  [types.SHOW_TAG_LIST] (state) {
    state.showNoteList = !state.showNoteList
  },
  [types.SHOW_NOTE_LIST] (state) {
    state.showNoteList = true
  }
}

export default mutations
