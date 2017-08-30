<template>
  <div class="m-note-container">
    <p class="u-title">笔记</p>
    <p class="u-num">{{list.length}}条笔记</p>
    <ul class="m-item-list">
      <li class="m-item" v-for="item in list" :key="item.id" @click="renderNote(item.id)" :class="{'active': activeIndex === item.id}">
        <NoteItem :item="item"></NoteItem>
        <div class="u-cover"></div>
      </li>
    </ul>
  </div>
</template>
<script>
import NoteItem from '@/components/NoteItem'

export default {
  components: {
    NoteItem
  },
  data () {
    return {
      activeIndex: ''
    }
  },
  props: [
    'list'
  ],
  methods: {
    renderNote: function (id) {
      console.log(id)
      this.activeIndex = id
      // this.$emit('renderNote', id)
      this.$store.commit('RENDER_NOTE', {
        id: id,
        isNew: false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.m-note-container {
  height: 100%;
  width: 300px;
  border-right: 1px solid #ececec;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: left;
  .u-title {
    color: #878787;
    display: inline-block;
    vertical-align: top;
    font-size: 21px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 20px 0 20px 10px;
  }
  .u-num {
    font-size: 13px;
    font-weight: 400;
    color: #ababab;
    padding: 0 0 5px 10px;
  }
}
.m-item-list {
  border-top: 1px solid #ececec;
}
.m-item {
  box-sizing: border-box;
  text-align: left;
  height: 110px;
  font-size: 0;
  position: relative;
  &.active {
    .u-cover {
      display: block;
    }
    .u-link {
      border: none;
    }
  }
  .u-cover {
    display: none;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 3px solid #ececec;
  }
}
</style>