<template>
  <div class="m-taglist">
    <a href="javascript:;" class="u-icon"></a>
    <span class="u-tag" :key="id" v-for="(item, id) in list">{{item.name}}</span>
  </div>
</template>
<script>
export default {
  props: ['list']
}
</script>
<style lang="scss" scoped>
.m-taglist {
  text-align: left;
  .u-icon {
    height: 13px;
    width: 12px;
    overflow: hidden;
    background: url(../assets/imgs/icon-tag.png) -0px -0px no-repeat;
    background-size: 12px 13px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }
  .u-tag {
    color: #606060;
    background-color: #f8f8f8;
    vertical-align: middle;
    border: 1px solid #ececec;
    padding: 1px 8px 1px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 17px;
    margin: 0 2px;
  }
}
</style>
