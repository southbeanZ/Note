<template>
  <div>
    <NoteList class="m-nav" :list="list"></NoteList>
    <div class="m-doc">
      <EditItem v-if="item" :data="item" :isNew="isNew"></EditItem>
    </div>
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
  },
  created () {
    this.$store.dispatch('getNoteList')
  }
}
</script>
<style lang="scss" scoped>
.m-nav {
  position: absolute;
  left: 73px;
  top: 0;
}
.m-doc {
  margin-left: 400px;
}
</style>