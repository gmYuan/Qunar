<template>
  <div class="icon-wrap">
   
    <swiper :options="swiperOption">
      <swiper-slide 
      v-for="(items, index)  of createPage"
      :key="index"
      >
        <ul class="icons">
          <li 
            class="icon-item test"
            v-for="item of items"
            :key="item.id"
          >
            <img class="icon-img"  :src="item.url" alt="图标">
            <p class="icon-desc"> {{item.desc}}</p>
          </li>
        </ul>
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

  

  </div>
</template>

<script>

export default {
  name: 'HomeIcons',
  data () {
    return {
      // swiper配置对象
      swiperOption: {
        pagination: '.swiper-pagination',
      },
    }
  },

  props: {
    list: Array,
  },

  computed: {
    createPage () {
      let pages = []
      this.list.map( (item, index) => {
        let currentPage = Math.floor(index / 8)   // 分别为 0/1/2... flor向下取整

        if (!pages[currentPage]) {        // null和undefined时，都是false
          pages[currentPage] = []
        }
        pages[currentPage].push(item)
      }) 

      return pages   // 在循环外部 返回结果

    },
  },
      
  
}
</script>


<style lang="scss" scoped>

@import '@scss/mixins.scss';

.icon-wrap {
  width: 100%;
  height: 370px;
  background: #fff;
  // outline: 1px solid red;

  // 第3方swiper样式
  /deep/ .swiper-container {
    height: 100%;
    .swiper-pagination-bullet {
      margin: 0 8px;
      width: 12px;
      height: 12px;

      &.swiper-pagination-bullet-active {
        background: rgba(0,175,190,.8);
      }
    }
  }


  .icons {
    display: flex;
    flex-wrap: wrap;

    .icon-item {
      // outline : 1px solid blue;
      width: 25%;
      height: 162px;
      padding-top: 1.35vw;
      text-align: center;

      .icon-img {
        display: inline-block;
        width: 110px;
        height: 110px
      }
      .icon-desc {
        color: #212121;
        font-size: 16px;
        @include ellipse();
      }
    }
  }

 
 
}

</style>
