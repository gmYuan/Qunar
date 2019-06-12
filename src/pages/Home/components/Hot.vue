<template>
  <div class="hot-wrap">
    <div class="info">
      <img src alt>
      <span>本周热门榜单</span>

      <a href="javascript:;" class="all-info">
        <span>全部榜单</span>
        <i>>></i>
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
    padding: 24px 0 26px;
  }
}
</style>
