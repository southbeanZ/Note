// import data from '@/assets/data/noteList.json'

export default {
  getNoteList (cb) {
    let notes = [],
        notesNames = JSON.parse(localStorage.getItem('notesNames')) || []
    for (let i = 0; i < notesNames.length; i++) {
      notes.push(JSON.parse(localStorage.getItem(notesNames[i])))
    }
    setTimeout(() => cb(notes), 100)
    // setTimeout(() => cb(data.list), 100)
  },
  setNoteItem (data) {
    data.id = data.id || new Date().getTime()
    data.summary = data.content.length > 40 ? data.content.slice(0, 40) + '...' : data.content
    data.star = data.star || false
    localStorage.setItem('notes_' + data.id, JSON.stringify(data))
  },
  removeNoteItem (id) {
    localStorage.removeItem('notes_' + id)
    let notes = JSON.parse(localStorage.getItem('notesNames'))
    notes.splice(notes.indexOf('notes_' + id), 1)
    this.setNoteNames(notes)
  },
  setNoteNames (data) {
    localStorage.setItem('notesNames', JSON.stringify(data))
  },
  getItem (key) {
    return JSON.parse(localStorage.getItem(key))
  }
}
