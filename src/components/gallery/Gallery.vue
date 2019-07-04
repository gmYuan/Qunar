<template>
  <div>

    <div class="container">
      <div class="inner-wrap">
        <swiper :options="swiperOption">
          <swiper-slide
            v-for="item of imgList"
            :key="item.id"
          >
            <img :src="item.url" @click="emitClose" alt="图片" class="img">

          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>


      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "CommonGallery",

    props: {
      imgArr: Array,
    },

    data () {
      return {
        // swiper配置对象
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType : 'fraction',
          observer:true,
          observeParents:true,
        },


      }
    },

    computed: {
      imgList () {
        return this.imgArr
      },
    },

    methods: {
      emitClose () {
        this.$emit('close')
      }
    },



  }
</script>

<style lang="scss" scoped>

  .container {
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    z-index: 10;

    display: flex;
    flex-direction: column;      // 子元素垂直居中
    justify-content: center;
    background: #000;

    .inner-wrap {
      width: 100%;
      height: 0;
      padding-bottom: 80%;

      img {
        height: 585px;
      }

      // 内部swiper去除overflow,从而让分页器可以在容器之外
      /deep/ .swiper-container {
        overflow: inherit;
      }

      .swiper-pagination {
        color: #fff;
        bottom: -40%;
      }
    }


  }

</style>