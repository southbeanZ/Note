<<template>
  <form class="m-item">
    <label for="title">标题</label>
    <input type="text" name="title" class="J_title" placeholder="写下笔记标题"><br>
    <!--<label for="time">时间</label>-->
    <!--<input type="date" name="time" class="J_time"><br>-->
    <label for="content">内容</label>
    <textarea name="content" cols="30" rows="10" class="J_content" placeholder="在这里输入正文"></textarea><br>
    <a href="javascript:;" class="btn btn-add" @click="addNote">添加</a>
    <!--<input type="submit" value="清空" class="btn btn-clear">-->
  </form>
</template>
<script>
export default {
  methods: {
    addNote: function () {
      let data = {}
      data.title = document.getElementsByClassName('J_title')[0].value
      // data.time = document.getElementsByClassName('J_time')[0].value
      data.content = document.getElementsByClassName('J_content')[0].value
      data.time = new Date()
      this.$emit('addNote', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.m-item {
  text-align: left;
}
</style>
