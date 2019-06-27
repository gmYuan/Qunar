<template>
  <div>

    <div class="search">
      <input @model="searchContent"  class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>

    <div class="search-content">
      <ul>
        <li>123</li>
      </ul>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'citySearch',
  props: {
    cities: Object,
  },
  data () {
    return {
      searchContent: '',
    }
  },

  watch: {
    searchContent () {
      
    },
  },

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
  top: 162px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: green;
}
  
</style>