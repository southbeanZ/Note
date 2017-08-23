<template>
  <div>
    <Toolbar class="m-toolbar"></Toolbar>    
    <List class="m-nav" :list="list"></List>
    <!--<router-view class="m-con" title="1"></router-view>-->
    <div class="m-doc">
      <EditItem v-if="item" :data="item" :isNew="isNew"></EditItem>
      <!-- <Panel class="m-con" :item="item" v-else></Panel> -->
    </div>
  </div>
</template>
<script>
import List from '@/components/List'
import Panel from '@/components/Panel'
import Toolbar from '@/components/Toolbar'
import EditItem from '@/components/EditItem'

export default {
  components: {
    List,
    Panel,
    Toolbar,
    EditItem
  },
  data () {
    return {
      // item: null,
      // isNew: true
    }
  },
  computed: {
    list () {
      return this.$store.getters.starNotes
    },
    // list () {
    //   return this.$store.state.list
    // },
    item () {
      return this.$store.state.activeItem
    },
    isNew () {
      return this.$store.state.isNew
    }
  },
  methods: {
    // renderNote: function (id) {
    //   // console.log(item)
    //   // this.item = item
    //   // // this.item = JSON.parse(JSON.stringify(item))
    //   // this.isNew = true
    //   let index = this.list.findIndex((ele) => {
    //     return +ele.id === id
    //   })
    //   let data = this.list[index]
    //   this.$store.commit('RENDER_NOTE', data)
    //   this.isNew = true
    // },
    // addNewNote: function () {
    //   // this.item = {
    //   //   title: '',
    //   //   content: ''
    //   // }
    //   this.isNew = false
    // },
  },
  created () {
    this.$store.dispatch('getNoteList')
  }
}
</script>
<style lang="scss" scoped>
.m-toolbar {
  position: absolute;
  left: 0;
  top: 0;
}
.m-nav {
  position: absolute;
  left: 73px;
  top: 0;
}
.m-doc {
  margin-left: 400px;
}
</style>