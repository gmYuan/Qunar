<template>
  <div class="main-page">
    
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    >
    </detail-banner>

    <detail-header></detail-header>
    <detail-list :lists="lists"></detail-list>

  </div>
</template>


<script>

import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/list'

import axios from 'axios'


export default {
  name: "detail",

  components: {
    detailBanner,
    detailHeader,
    detailList
  },


  data() {
    return {
      sightName: '',    
      bannerImg: '',
      gallaryImgs: [],  
      lists: []    // detail-list数据

    }
  },

  methods: {
    getDetailInfo () {
      axios.get(`api/detail.json?${this.$route.params.id}`).then(res => {
        res = res.data
        console.log(res)
        if (res.ret && res.data) {
          const data = res.data

          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.lists = data.categoryList
         
        }
      })
    },
  },

  mounted () {
    this.getDetailInfo()
  }

  

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
