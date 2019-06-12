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

      // icon列表数组
      iconList: [
        {id: '001', url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '景点门票'},
        {id: '002', url: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png', desc: '水上乐园'},
        {id: '003', url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png', desc: '魔都上海'},
        {id: '004', url: 'http://img1.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png', desc: '室内娱乐'},
        {id: '005', url: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png', desc: '动植物园'},
        {id: '006', url: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png', desc: '世纪公园'},
        {id: '007', url: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png', desc: '上海野生'},
        {id: '008', url: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png', desc: '上海迪士尼'},
        {id: '009', url: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png', desc: '上海海昌'},
        
      ]
    }
  },

  computed: {
    createPage () {
      let pages = []
      this.iconList.map( (item, index) => {
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
