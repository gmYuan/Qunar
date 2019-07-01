<template>
  <div>

    <div class="search">
      <input v-model="searchContent"  class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>

    <div class="search-content"
         ref="search"
         v-show="searchContent"
    >
      <ul>
        <li class="search-item" 
          v-for="item of searchResult" 
          :key="item.id"
          @click="handleClickCity(item.name)"
          >
            {{item.name}}
        </li>
        <li class="search-item" v-show="hasNoData"> 无对应内容 </li>
      </ul>
    </div>
    
  </div>
</template>

<script>

import BScroll from 'better-scroll'

import {mapMutations} from 'vuex'


export default {
  name: 'citySearch',
  props: {
    cities: Object,
  },

  data () {
    return {
      searchContent: '',    // 搜索内容
      searchResult: [],     // 搜索结果
      timer: null,          // 节流计时器
    }
  },
  computed:  {
    city() {
      return this.cities    // 搜索源数据,类型是对象- 数组
    },
    hasNoData (){
      return !this.searchResult.length
    },
  },

  methods: {
    ...mapMutations(['setCurrentCity']),

    handleClickCity (city) {
      this.setCurrentCity(city)
      
      this.$router.push('/')
    },


  },

  watch: {
    searchContent () {

      if (this.timer) {
        clearTimeout(this.timer)
      }

      if (!this.searchContent) {  // 当搜索内容为空字符串时,直接置空 结果数组并返回
        this.searchResult = []
        return
      }

      this.timer = setTimeout( ()=> {
        const result = []
        for (let key in this.city) {
          this.city[key].forEach(item => {  // 遍历对象里的数组, item又是一个对象
            if (item.spell.indexOf(this.searchContent) > -1 || item.name.indexOf(this.searchContent) > -1 ) {
              result.push(item)
            }
          })
        }
        // console.log(222, result)   // result表示本次搜索结果
        this.searchResult = result
      }, 500)
    },
  },

  mounted () {
    this.scroll = new BScroll(this.$refs.search, {
      click: true,
    })
  }

}

</script>

<style lang="scss" scoped>
@import '@scss/variables.scss';

.search {
  background-color: $cityHeaderBg;
  padding: 20px 10px;
  color: #fff;

  .search-input {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    color: #666;
  }
}

.search-content {
  position: absolute;
  top: 190px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: #eee;

  .search-item {
    padding: 20px;
    line-height: 38px;
    border-bottom: 1px solid #aaa;
    background: #fff;
  }
}
  
</style>