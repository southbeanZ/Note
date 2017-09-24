// import data from '@/assets/data/noteList.json'

export default {
  getNoteList (cb) {
    let notes = [],
        num = 0
    num = localStorage.getItem('notesNum')
    for (let i = 0; i < num; i++) {
      notes.push(JSON.parse(localStorage.getItem('notes' + i)))
    }
    setTimeout(() => cb(notes), 100)
    // setTimeout(() => cb(data.list), 100)
  }
}
