<template>
  <div>
    <Toolbar class="m-toolbar" @addNewNote="addNewNote"></Toolbar>    
    <List class="m-nav" @renderNote="renderNote" :list="list"></List>
    <!--<router-view class="m-con" title="1"></router-view>-->
    <div class="m-doc">
      <EditItem v-if="item" :data="item" :isEdit="isEdit"></EditItem>
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
      item: null,
      isEdit: true
    }
  },
  computed: {
    list () {
      return this.$store.state.list
    }
  },
  methods: {
    renderNote: function (item) {
      console.log(item)
      this.item = item
      this.isEdit = true
    },
    addNewNote: function () {
      this.item = {
        title: '',
        content: ''
      }
      this.isEdit = false
    }
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