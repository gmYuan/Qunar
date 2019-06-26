<template>
  <div>

    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'citySearch',

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
  
</style>