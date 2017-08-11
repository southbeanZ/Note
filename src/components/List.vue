<template>
  <div class="m-list">
    <p class="u-title">笔记</p>
    <p class="u-num">{{list.length}}条笔记</p>
    <ul>
      <li class="m-item" v-for="item in list" :key="item.id" @click="renderNote(item.id)" :class="{'active': activeIndex === item.id}">
        <NoteItem :item="item"></NoteItem>
        <!--<a href="javascript:;" class="u-link">
          <div class="con">
            <p class="title">{{item.title}}</p>
            <p class="time">{{item.time}}</p>
            <p class="summary">{{item.summary}}</p>
          </div>
        </a>-->
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
      this.$emit('renderNote', this.list[id])
    }
  }
}
</script>
<style lang="scss" scoped>
.m-list {
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
.m-item {
  box-sizing: border-box;
  text-align: left;
  height: 110px;
  &.active {
    border: 3px solid #ececec;
    .u-link {
      border: none;
    }
  }
}
</style>