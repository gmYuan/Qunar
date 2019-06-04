<template>
  <div class="wrap">
    <swiper :options="swiperOption">
    
      <swiper-slide
        v-for="(item,index) in bannerList"

      >
        <img></img>
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
      swiperOption: {},

      // 轮播banner数据列表
      bannerList: [
        {
          id: 1,
          img: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
        },
        {
          id: 2,
          img: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
        },
        {
          id: 3,
          img: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e1e587f554e5a8372be44a4c6b73a5cf.jpg_750x200_5732f03f.jpg'
        }, 
        {
          id: 4,
          img: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b1847cf91a34cf95402240a3f62aad77.jpg_750x200_26ea3527.jpg'
        },
      ],

    }  //对应data-return
  },
  

}
  
 
</script>


<style lang="scss" scoped>
.wrap {
  
}

</style>
