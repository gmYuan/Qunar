<template>
  <div class="main-page">
    
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :lists="lists"></detail-list>



  </div>
</template>


<script>

import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/list'


export default {
  name: "detail",

  data() {
    return {
     lists: [
       {title: '成人票', children: 
          [{
            title: '成人二馆联票',
            children: [{title: '第一销售点'}]
          },
          {  title: '成人三馆联票'}

          ] 
       },
       {title: '儿童票'},
       {title: '老人票'},
       {title: '特惠票'}
     ],

     
    }
  },

  components: {
    detailBanner,
    detailHeader,
    detailList
  },


}
</script>


<style lang="scss" scoped>

@import '@scss/mixins.scss';

.main-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: #f5f5f5;

  height: 2000px;
}



</style>
