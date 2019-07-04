<template>
  <div>

    <div class="banner-wrap" @click="showGallery">
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

    <common-gallery :imgArr="imgArr" v-show="isShowGallery" @close="handleClose"></common-gallery>


  </div>
</template>



<script>

import CommonGallery from 'components/gallery/Gallery'

export default {
  name: "detailBanner",

  data() {
    return {
      imgArr: [
        {id: '0001', url: "http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_r_800x800_d6a63068.jpg"},
        {id: '0002', url: "http://img1.qunarzz.com/sight/p0/1906/3d/3d61f18973a5ab7a3.img.jpg_r_800x800_cb717d83.jpg"},
        {id: '0003', url: "http://img1.qunarzz.com/sight/p0/1906/de/de426d5aaf95f96a3.img.jpg_r_800x800_7588f0e0.jpg"}
      ],

      isShowGallery : false,   //画廊是否显示

    }
  },

  components: {
    CommonGallery,
  },

  methods: {
    showGallery () {
      this.isShowGallery = true
    },

    handleClose () {
      this.isShowGallery = false    // 监听组件传出事件，关闭画廊
    },
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
