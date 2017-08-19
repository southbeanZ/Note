import Vue from 'vue'
import Vuex from 'Vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  list: [
    {
      'id': 0,
      'star': true,
      'title': '今日天气',
      'time': '2017/08/01',
      'summary': '今天的天气不错',
      'content': '今天天气很凉快，才38℃，万里无云。'
    },
    {
      'id': 1,
      'star': false,
      'title': '今日天气1',
      'time': '2017/08/02',
      'summary': '今天的天气不错1',
      'content': '今天天气很凉快，才38℃，万里无云。1'
    },
    {
      'id': 2,
      'star': false,
      'title': '今日天气2',
      'time': '2017/08/03',
      'summary': '今天的天气不错2',
      'content': '今天天气很凉快，才38℃，万里无云。2'
    },
    {
      'id': 3,
      'star': false,
      'title': '今日天气3',
      'time': '2017/08/04',
      'summary': '今天的天气不错3',
      'content': '今天天气很凉快，才38℃，万里无云。3'
    },
    {
      'id': 4,
      'star': false,
      'title': '今日天气4',
      'time': '2017/08/05',
      'summary': '今天的天气不错4',
      'content': '今天天气很凉快，才38℃，万里无云。4'
    }
  ]
}

export default new Vuex.Store({
  state,
  mutations
})
