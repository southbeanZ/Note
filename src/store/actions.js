import api from '@/api/api'
import { GET_NOTELIST } from './mutation-types'

const actions = {
  getNoteList ({commit}) {
    api.getNoteList((res) => commit(GET_NOTELIST, res))
  }
}

export default actions
