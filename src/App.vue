<template>
  <div id="app">
    <List class="m-nav" @renderNote="renderNote" :list="list"></List>
    <!--<router-view class="m-con" title="1"></router-view>-->
    <div class="m-doc">
      <Toolbar @addNewNote="addNewNote"></Toolbar>
      <EditItem @addNote="addNote" v-if="editShow"></EditItem>
      <Panel class="m-con" :item="item" v-else></Panel>
    </div>
  </div>
</template>
<script>
import List from '@/components/List'
import Panel from '@/components/Panel'
import Toolbar from '@/components/Toolbar'
import EditItem from '@/components/EditItem'

export default {
  name: 'app',
  components: {
    List,
    Panel,
    Toolbar,
    EditItem
  },
  data () {
    return {
      list: [
        {
          'id': 0,
          'title': '今日天气',
          'time': '2017/08/01',
          'summary': '今天的天气不错',
          'content': '今天天气很凉快，才38℃，万里无云。'
        },
        {
          'id': 1,
          'title': '今日天气1',
          'time': '2017/08/02',
          'summary': '今天的天气不错1',
          'content': '今天天气很凉快，才38℃，万里无云。1'
        },
        {
          'id': 2,
          'title': '今日天气2',
          'time': '2017/08/03',
          'summary': '今天的天气不错2',
          'content': '今天天气很凉快，才38℃，万里无云。2'
        },
        {
          'id': 3,
          'title': '今日天气3',
          'time': '2017/08/04',
          'summary': '今天的天气不错3',
          'content': '今天天气很凉快，才38℃，万里无云。3'
        },
        {
          'id': 4,
          'title': '今日天气4',
          'time': '2017/08/05',
          'summary': '今天的天气不错4',
          'content': '今天天气很凉快，才38℃，万里无云。4'
        }
      ],
      item: null,
      editShow: true
    }
  },
  methods: {
    renderNote: function (item) {
      console.log(item)
      this.item = item
      this.editShow = false
    },
    addNote: function (data) {
      console.log(data)
      data.id = this.list[this.list.length - 1].id + 1
      data.summary = data.content
      console.log(data)
      this.list = [...this.list, data]
    },
    addNewNote: function () {
      this.editShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.m-nav {
  position: absolute;
  left: 0;
  top: 0;
}
.m-doc {
  margin-left: 320px;
}
</style>
