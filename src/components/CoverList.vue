<template>
  <div class="m-coverList">
    <div class="m-content">
      <p class="u-title">标签</p>
      <div class="m-ip-box">
        <input type="text" class="u-search" placeholder="查找标签">
      </div>
      <div class="m-tagList">
        <div class="m-tagGroup">
          <div class="u-group">8</div>
          <div class="u-tag">
            <span class="name">8月</span>
            <span class="num">3</span>
          </div>
        </div>
        <div class="m-tagGroup">
          <div class="u-group">杭</div>
          <div class="u-tag">
            <span class="name">杭州</span>
            <span class="num">2</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.m-coverList {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
}
.m-content {
  box-sizing: border-box;
  width: 460px;
  height: 100%;
  background-color: #fff;
  border-right: 4px solid rgba(236, 236, 236, 0.7);
  padding: 20px 24px;
  text-align: left;
  .u-title {
    font-size: 21px;
    color: #878787;
    margin-bottom: 20px;
  }
}
.m-ip-box {
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  border: 1px solid #ddd;
  padding: 0 10px;
  .u-search {
    width: 100%;
    height: 100%;
    text-align: center;
  }
}
.m-tagList {
  border-top: 1px solid #ddd;
  margin-top: 20px;
  padding: 20px 0 0;
}
.m-tagGroup {
  margin-bottom: 20px;
  .u-group {
    font-size: 11px;
    font-weight: bold;
    color: #878787;
    margin-bottom: 10px;
  }
  .u-tag {
    display: inline-block;
    vertical-align: middle;
    font-size: 13px;
    color: #4a4a4a;
    background-color: #f8f8f8;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    box-sizing: border-box;
    line-height: 22px;
    padding: 4px 6px;
    .num {
      color: #28a955;
    }
  }
}
</style>

