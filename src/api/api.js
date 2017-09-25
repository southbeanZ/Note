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
  }
}
