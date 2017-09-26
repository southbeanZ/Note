import * as types from './mutation-types'
import api from '@/api/api'

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
        summary: '',
        star: false
      }
    } else {
      let _data = state.list[getIndex(state.list, data.id)]
      state.activeItem = _data || null
    }
    state.isNew = data.isNew
  },
  [types.ADD_NOTE] (state, data) {
    api.setNoteItem(data)
    let notes = api.getItem('notesNames') || []
    notes.push('notes_' + data.id)
    api.setNoteNames(notes)
    state.list = [...state.list, data]
    state.isNew = false
  },
  [types.DELETE_NOTE] (state, id) {
    api.removeNoteItem(id)
    state.list.splice(getIndex(state.list, id), 1)
    state.activeItem = null
  },
  [types.UPDATE_NOTE] (state, newData) {
    let index = getIndex(state.list, newData.id)
    api.setNoteItem(newData)
    state.list[index] = newData
  },
  [types.STAR_NOTE] (state, id) {
    let index = getIndex(state.list, id)
    state.list[index].star = !state.list[index].star
    api.setNoteItem(state.list[index])
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
    api.setNoteItem(state.list[index])
  },
  [types.SHOW_TAG_LIST] (state) {
    state.showNoteList = !state.showNoteList
  },
  [types.SHOW_NOTE_LIST] (state) {
    state.showNoteList = true
  }
}

export default mutations
