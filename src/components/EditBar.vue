<template>
  <div class="m-editbar">
    <div class="u-btngroup u-btngroup-left">
      <a href="javascript:;" class="btn btn-star" @click="starNote" :class="{active: isStar}"></a>
      <a href="javascript:;" class="btn btn-delete" @click="deleteNote"></a>  
    </div>
    <div class="u-btngroup u-btngroup-right">
      <!-- <a href="javascript:;" class="btn btn-add" @click="updatNote" v-if="isEdit">保存</a> -->
      <!-- <a href="javascript:;" class="btn btn-add" @click="addNote" v-else>添加</a> -->
      <a href="javascript:;" class="btn btn-add" @click="addNote" v-if="!isEdit">添加</a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['isEdit', 'isStar'],
  methods: {
    addNote: function () {
      this.$emit('addNote')
    },
    starNote: function () {
      this.$emit('starNote')
    },
    updatNote: function () {
      this.$emit('updatNote')
    },
    deleteNote: function () {
      this.$emit('deleteNote')
    }
  }
}
</script>
<style lang="scss" scoped>
.m-editbar {
  display: block;
  width: 100%;
  height: 26px;
  padding: 12px 0;
  font-size: 0;
  .u-btngroup {
    display: inline-block;
    vertical-align: middle;
    height: 26px;
    &.u-btngroup-left {
      float: left;
      .btn {
        display: inline-block;
        width: 26px;
        height: 100%;
        padding: 0 10px 0 0;
        background-color: transparent;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        &.btn-star {
          background-image: url(../assets/imgs/star_sm.png)
        }
        &.btn-delete {
          background-image: url(../assets/imgs/delete.png)
        }
        &:hover, &.active {
          &.btn-star {
            background-image: url(../assets/imgs/star_sm_active.png)
          }
          &.btn-delete {
            background-image: url(../assets/imgs/delete_active.png)
          }
        }
      }
    }
    &.u-btngroup-right {
        float: right;
        .btn {
          height: 26px;
          line-height: 26px;
          margin-right: 10px;
        }
    }
  }
}
</style>