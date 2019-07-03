<template>
  <div class="banner-wrap">

    <div class="img-wrap">
      <img
        src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg"
        alt
      />
    </div>

    <div class="banner-info">
      <div class="banner-title">上海迪士尼乐园</div>
    </div>

    <div class="banner-photo">
      <i class="iconfont icon"> &#xe62f; </i>
      <em class="num"> 76 </em>
    </div>


  </div>
</template>



<script>
export default {
  name: "detailBanner",

  data() {
    return {};
  }
};
</script>


<style lang="scss" scoped>
@import "@scss/mixins.scss";

.banner-wrap {
  position: relative;
  &::after {
    content: " ";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 60px;
    background-color: transparent;
    background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
  }


  // banner部分
  .img-wrap {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 55%;
  }

  // banner内文本
  .banner-info {
    position: absolute;
    right: 20px;
    bottom: 36px;
    left: 20px;
    min-height: 40px;

    .banner-title {
      position: relative;
      z-index: 1;
      line-height: 40px;
      color: #fff;
      font-size: 36px;
      text-shadow: 0 1px 2px rgba(0,0,0,0.7);
    }
  }

  // banner内photo图标
  .banner-photo {
    position: absolute;
    right: 20px;
    bottom: 36px;
    z-index: 9;

    width: 120px;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    color: #fff;
    text-align: center;
    background: rgba(0,0,0,.5);
    border-radius: 20px;

    .icon {
      font-size: 28px;
    }
    
  }

}
</style>
