<template>
  <a href="javascript:;" class="u-link">
    <div class="con">
      <p class="title">{{item.title}}</p>
      <p class="time">{{item.time}}</p>
      <p class="summary">{{item.summary}}</p>
    </div>
  </a>
</template>
<script>
export default {
  props: ['item']
}
</script>
<style lang="scss" scoped>
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
    color: #878787;
    &:hover {
      background: #40bc6c;
    }
    .title {
      font-size: 16px;
      color: #4a4a4a;
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

