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
        content: '',
        tagList: [],
        star: false
      }
    } else {
      let _data = state.list[getIndex(state.list, data.id)]
      state.activeItem = _data || null
    }
    state.isNew = data.isNew
  },
  [types.ADD_NOTE] (state, data) {
    data.id = new Date().getTime()
    data.summary = data.content.length > 40 ? data.content.slice(0, 40) + '...' : data.content
    data.star = false
    localStorage.setItem('notes_' + data.id, JSON.stringify(data))
    let notes = JSON.parse(localStorage.getItem('notesNames')) || []
    notes.push('notes_' + data.id)
    localStorage.setItem('notesNames', JSON.stringify(notes))
    state.list = [...state.list, data]
    state.isNew = false
  },
  [types.DELETE_NOTE] (state, id) {
    localStorage.removeItem('notes_' + id)
    let notes = JSON.parse(localStorage.getItem('notesNames'))
    notes.splice(notes.indexOf('notes_' + id), 1)
    localStorage.setItem('notesNames', JSON.stringify(notes))
    state.list.splice(getIndex(state.list, id), 1)
    state.activeItem = null
  },
  [types.UPDATE_NOTE] (state, newData) {
    let _id = newData.id
    // state.list[_id] = newData
    let index = getIndex(state.list, _id)
    newData.summary = newData.content.length > 40 ? newData.content.slice(0, 40) + '...' : newData.content
    state.list[index] = newData
    localStorage.setItem('notes_' + _id, JSON.stringify(newData))
  },
  [types.STAR_NOTE] (state, id) {
    let index = getIndex(state.list, id)
    state.list[index].star = !state.list[index].star
    localStorage.setItem('notes_' + id, JSON.stringify(state.list[index]))
  },
  [types.GET_NOTELIST] (state, data) {
    state.list = data
  },
  [types.GET_STAR] (state, data) {
    state.showStar = !state.showStar
  },
  [types.ADD_TAG] (state, data) {
    let index = getIndex(state.list, state.activeItem.id),
        tagList = []
    if (index === -1) {
      tagList = state.activeItem.tagList || []
      tagList.push(data)
      state.activeItem.tagList = [...new Set(tagList)]
      return
    }
    tagList = state.list[index].tagList || []
    tagList.push(data)
    state.list[index].tagList = [...new Set(tagList)]
    localStorage.setItem('notes_' + state.activeItem.id, JSON.stringify(state.list[index]))
  },
  [types.SHOW_TAG_LIST] (state) {
    state.showNoteList = !state.showNoteList
  },
  [types.SHOW_NOTE_LIST] (state) {
    state.showNoteList = true
  }
}

export default mutations
