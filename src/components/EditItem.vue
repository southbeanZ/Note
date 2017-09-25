<template>
  <div>
    <EditBar @updateNote="updateNote" @addNote="addNote" @starNote="starNote" @deleteNote="deleteNote" :isNew="isNew" :isStar="data.star"></EditBar>
    <TagList :list="data.tagList"></TagList>
    <form class="m-item">
      <input type="text" name="title" class="u-title J_title" placeholder="写下笔记标题" v-model="data.title">
      <textarea name="content" class="u-content J_content" placeholder="在这里输入正文" v-model="data.content"></textarea><br>
    </form>
  </div>
</template>
<script>
import EditBar from '@/components/EditBar.vue'
import TagList from '@/components/TagList.vue'
export default {
  props: {
    data: {
      default: function () {
        return {
          title: '',
          content: '',
          tagList: []
        }
      },
      type: Object
    },
    isNew: {
      default: false,
      type: Boolean
    }
  },
  components: {
    EditBar,
    TagList
  },
  methods: {
    addNote: function () {
      let data = this.data,
        _title = data.title
      if (_title === '') {
        alert('请输入标题')
      } else {
        data.time = this.fDateFormater(new Date())
        // this.$emit('addNote', data)
        this.$store.commit('ADD_NOTE', data)
      }
    },
    deleteNote: function () {
        // this.$emit('deleteNote', this.data.id)
      this.$store.commit('DELETE_NOTE', this.data.id)
    },
    starNote: function () {
      this.$store.commit('STAR_NOTE', this.data.id)
    },
    updateNote: function () {
      console.log(this.data)
      this.$store.commit('UPDATE_NOTE', this.data)
    },
    fDateFormater (date) {
      let _year = date.getFullYear(),
          _month = date.getMonth() + 1,
          _date = date.getDate()
      _month = _month < 10 ? '0' + _month : _month
      return _year + '/' + _month + '/' + _date
    }
  }
}
</script>

<style lang="scss" scoped>
.m-item {
  text-align: left;
  box-sizing: border-box;
  width: 100%;
  margin: 20px 0;
  padding: 0 20px;
  .u-title {
    display: block;
    width: 100%;
    height: 40px;
    padding: 10px 0;
    font-size: 28px;
    color: #2dbe60;
    border-top: 1px solid #ececec;
    &::-webkit-input-placeholder {
      font-size: 28px;
      color: #2dbe60;
    }
  }
  .u-content {
    display: block;
    width: 100%;
    height: 300px;
    color: #383838;
    font-size: 14px;
  }
}
</style>
