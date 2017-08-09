<<template>
  <form class="m-item">
    <a href="javascript:;" class="btn btn-add" @click="addNote">添加</a>
    <!--<input type="submit" value="清空" class="btn btn-clear">-->
    <!-- <label for="title">标题</label> -->
    <input type="text" name="title" class="u-title J_title" placeholder="写下笔记标题">
    <!--<label for="time">时间</label>-->
    <!--<input type="date" name="time" class="J_time"><br>-->
    <!-- <label for="content">内容</label> -->
    <textarea name="content" class="u-content J_content" placeholder="在这里输入正文"></textarea><br>
  </form>
</template>
<script>
export default {
  methods: {
    addNote: function () {
      let data = {},
        _title = document.getElementsByClassName('J_title')[0].value,
        _content = document.getElementsByClassName('J_content')[0].value
      if (_title === '') {
        alert('请输入标题')
      } else {
        data.title = _title
        data.content = _content
        data.time = new Date()
        this.$emit('addNote', data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.m-item {
  text-align: left;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  .u-title {
    display: block;
    width: 100%;
    height: 40px;
    margin: 10px 0;
    font-size: 28px;
    color: #2dbe60;
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
