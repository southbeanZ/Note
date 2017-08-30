<template>
  <div class="m-con">
    <a href="javascript:;" class="m-link">
      <div class="m-info">
        <p class="u-title">
          <span class="title">{{item.title}}</span>
          <a href="javascript:;" class="btn btn-star" @click="starNote" :class="{active: item.star}"></a>
          <a href="javascript:;" class="btn btn-delete" @click="deleteNote"></a>
        </p>
        <p class="u-time">{{item.time}}</p>
        <p class="u-summary">{{item.summary}}</p>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: ['item'],
  methods: {
    deleteNote: function () {
      this.$store.commit('DELETE_NOTE', this.item.id)
    },
    starNote: function () {
      this.$store.commit('STAR_NOTE', this.item.id)
    }
  }
}
</script>
<style lang="scss" scoped>
.m-con {
  height: 100%;
  position: relative;
}
.m-link {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &:hover {
      background: #40bc6c;
    }
}
.m-info {
  display: block;
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
  border-bottom: 1px solid #ececec;
  color: #878787;
  .u-title {
    .title {
      font-size: 16px;
      color: #4a4a4a;
    }
    .btn {
      display: inline-block;
      width: 42px;
      height: 42px;
      padding: 3px 0;
      background-color: transparent;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      float: right;
      &.btn-delete {
        background-image: url(../assets/imgs/delete.png)
      }
      &.btn-star {
        background-image: url(../assets/imgs/star.png)
      }
      &:hover, &.active {
        &.btn-delete {
          background-image: url(../assets/imgs/delete_active.png)
        }
        &.btn-star {
          background-image: url(../assets/imgs/star_active.png)
        }
      }
    }
  }
  .u-time {
    font-size: 10px;
    padding: 5px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .u-summary {
    font-size: 12px;
    overflow: hidden;
  }
}
</style>

