<template>
  <div class="g-bd">
    <Sidebar class="m-sidebar"></Sidebar>
    <router-view class="m-content"></router-view>
    <!-- <NoteList class="m-nav" :list="list"></NoteList>
    <div class="m-doc">
      <EditItem v-if="item" :data="item" :isNew="isNew"></EditItem>
    </div> -->
  </div>
</template>
<script>
import NoteList from '@/components/NoteList'
import Sidebar from '@/components/Sidebar'
import EditItem from '@/components/EditItem'

export default {
  components: {
    NoteList,
    Sidebar,
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
.g-bd {
  height: 100%;
}
.m-sidebar {
  position: absolute;
  left: 0;
  top: 0;
}
.m-content {
  position: relative;
  margin-left: 73px;
  height: 100%;
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