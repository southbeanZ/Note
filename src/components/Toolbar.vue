<template>
  <div class="m-toolbar">
    <!-- <a href="javascript:;" class="btn btn-search">搜索</a>
    <a href="javascript:;" class="btn btn-add" @click="addNewNote">添加</a> -->
    <a href="javascript:;" class="btn btn-add" @click="addNewNote"></a>
    <a href="javascript:;" class="btn btn-search"></a>
    <a href="javascript:;" class="btn btn-start"></a>
    <a href="javascript:;" class="btn btn-note"></a>
    <a href="javascript:;" class="btn btn-book"></a>
    <a href="javascript:;" class="btn btn-tag"></a>
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
  width: 73px;
  height: 100%;
  border-right: 1px solid #aaa;
  .btn {
    width: 42px;
    height: 42px;
    background-color: transparent;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    &.btn-add {
      background-image: url(../assets/imgs/add.png)
    }
    &.btn-search {
      background-image: url(../assets/imgs/search.png)
    }
    &.btn-start {
      background-image: url(../assets/imgs/start.png)
    }
    &.btn-note {
      background-image: url(../assets/imgs/note.png)
    }
    &.btn-book {
      background-image: url(../assets/imgs/book.png)
    }
    &.btn-tag {
      background-image: url(../assets/imgs/tag.png)
    }
    &:hover, &.active {
      &.btn-add {
        background-image: url(../assets/imgs/add_active.png)
      }
      &.btn-search {
        background-image: url(../assets/imgs/search_active.png)
      }
      &.btn-start {
        background-image: url(../assets/imgs/start_active.png)
      }
      &.btn-note {
        background-image: url(../assets/imgs/note_active.png)
      }
      &.btn-book {
        background-image: url(../assets/imgs/book_active.png)
      }
      &.btn-tag {
        background-image: url(../assets/imgs/tag_active.png)
      }
    }
  }
}
</style>