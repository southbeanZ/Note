<template>
  <div class="m-list">
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
  .u-link {
    display: block;
    box-sizing: border-box;
    padding: 10px;
    height: 100%;
    border-bottom: 1px solid #ececec;
    &:hover {
      background: #40bc6c;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .time {
      font-size: 10px;
      padding: 5px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .summary {
      font-size: 12px;
      overflow: hidden;
    }
  }
}
</style>