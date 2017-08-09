<template>
  <div class="m-toolbar">
    <a href="javascript:;" class="btn btn-search">搜索</a>
    <a href="javascript:;" class="btn btn-add" @click="addNewNote">添加</a>
  </div>
</template>
<script>
export default {
  methods: {
    addNewNote: function () {
      this.$emit('addNewNote')
    }
  }
}
</script>
<style lang="scss" scoped>
.m-toolbar {
  display: block;
  height: 60px;
}
</style>