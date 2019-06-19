<template>
  <div class="wrap">

    <swiper :options="swiperOption" v-if="showSwiper">
    
      <swiper-slide
        v-for="item in list"
        :key="item.id"
      >
        <img :src="item.img" alt="图片" class="banner-img">
       
      </swiper-slide>
      
      <div class="swiper-pagination"  slot="pagination"></div>
    
    </swiper>
        

  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  data() {
    return {
      // swiper配置对象
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop : true,
      },

    }  //对应data-return
  },

  props: {
    list: Array,
  },

  computed: {
    showSwiper () {
      return this.list.length > 0 
    },
  }
  

}
</script>


<style lang="scss" scoped>

.wrap {
  width: 100%;
  height: 209px;  //会转化为vw,所以才可以直接写
  overflow: hidden;

  // 覆盖第3方样式
  /deep/ .swiper-pagination-bullets .swiper-pagination-bullet{
    margin: 0 8px;
  }

  /deep/ .swiper-pagination-bullet {
    width: 12px;
    height: 12px;

  }

  /deep/ .swiper-pagination-bullet-active {
    background: #fff;
  }

  // 组件部分
  .banner-img{
    width: 100%;
  }
  
}

</style>
