<template>
  <div class="hot-wrap">
    <div class="info">
      <img class="hot-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="热门榜单">
      <span class="desc">本周热门榜单</span>

      <a href="javascript:;" class="more">
        <span>全部榜单</span>
        <i class="iconfont more-right"> &#xe6a3; </i>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomeHot"
};
</script>


<style lang="scss" scoped>
.hot-wrap {
  margin-top: 20px;
  width: 100%;
  background: #fff;

  .info {
    outline: 1px solid red;
    position: relative;
    padding: 24px 0 26px;

    .hot-img {
      display: inline-block;
      overflow: hidden;
      width: 30px;
      height: 30px;
      margin-left: 20px;
      vertical-align: top;
    }
    .desc {
      display: inline-block;
      margin-left: 8px;
      height: 44px;
      line-height: 44px;
      color: #212121;
      font-size: 32px;
    }
    .more {
      position: absolute;
      top: 36px;
      right: 32px;
      color: #616161;
      font-size: 24px;
      line-height: 30px;
      .more-right {
        margin-left: -8px;
        font-size: 32px;
        color:#9A9A9A;
        vertical-align: top;
      }
    }
  }
}
</style>
