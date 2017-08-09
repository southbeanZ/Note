<template>
  <div class="m-panel" v-if="item">
    <div class="u-tlt">
      <p class="title">{{item.title}}</p>
      <p class="time">{{item.time}}</p>
    </div>
    <p class="u-con">{{item.content}}</p>
  </div>
</template>
<script>
export default {
  props: {
    // title: {
    //   default: '标题',
    //   type: String
    // },
    // time: {
    //   default: '2017/08/08',
    //   type: String
    // },
    // content: {
    //   default: '内容',
    //   type: String
    // }
    item: null
  }
}
</script>
<style lang="scss" scoped>
// @import url('./assets/style/common.scss');
.m-panel {
  width: 600px;
  border: 1px solid #aaa;
  border-radius: 10px;
  box-shadow: 2px 2px 2px #888;
  text-align: left;
  .u-tlt {
    height: 40px;
    background: #7aa;
    font-size: 20px;
    line-height: 40px;
    font-weight: bold;
    color: #fff;
    padding: 0 20px;
    border-radius: 10px 10px 0 0;
    .title {
      float: left;
    }
    .time {
      float: right;
      font-size: 16px;
    }
  }
  .u-con {
    background: #fff;
    height: 400px;
    margin: 20px;
  }
}
</style>

