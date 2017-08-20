import data from '@/assets/data/noteList.json'

export default {
  getNoteList (cb) {
    setTimeout(() => cb(data.list), 100)
  }
}
