<template>
  <div class="header">

    <div class="header-left" @click="toIndex">
      <i class="iconfont back_icon">&#xe679;</i>
    </div>

    <div class="header-title">
      <h1>城市选择</h1>
    </div>
      
  </div>
</template>

<script>

export default {
  name: 'cityHeader',
 
  methods: {
    toIndex () {
      this.$router.push('/')
    },
    
  },
  
}
</script>


<style lang="scss" scoped>

@import '@scss/variables.scss';
@import '@scss/mixins.scss';

.header {
  display: flex;
  align-items: center;

  width: 750px;
  height: $headerHeight;
  background: $cityHeaderBg;
  color: #fff;
  
  .header-left{
    width: 80px;
    height: 88px;
    text-align: center;
    .back_icon { 
      width: 100%;
      height: 100%;
      line-height: 88px;
      font-size: 42px; 
    }
  }

  .header-title {
    flex: 1;
    margin-right: 100px;
    line-height:88px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    @include ellipse();
  }
}



</style>
