<template>
  <div class="header">
    <div class="vw-header-left">
      <i class="iconfont back_icon">&#xe679;</i>
    </div>

    <div class="vw-header-input">
      <div class="input-wrap">
        <i class="iconfont">&#xe65c;</i>
        <span>输入城市/景点/游玩主题</span>
      </div>
    </div>
    
    <div class="vw-header-right" @click = "toCity">
      <div class="city-wrap">
        <span class="city">{{city}}</span>
        <i class="iconfont city_icon">&#xe79b;</i>
      </div>
    </div>
  	
      

  </div>
</template>

<script>

export default {
  name: 'HomeHeader',
  props: {
    city: String,
  },

  methods: {
    toCity () {
      this.$router.push('/city')
    },
  },
  
}
  
 
</script>


<style lang="scss" scoped>

@import '@scss/variables.scss';


.header {
  display: flex;
  align-items: center;

  width: 750px;
  height: $headerHeight;
  background: $headerBackground;
  color: #fff;

  .vw-header-left{
    width: 80px;
    height: 88px;
    padding: 0 20px 0 20px;
   
    .back_icon { 
      width: 100%;
      height: 100%;
      line-height: 88px;
      font-size: 42px;
      text-align: left;
    }

  }


  .vw-header-input {
    flex: 1;
    height: 60px;
    line-height: 60px;
    background: #fff;
    border-radius: 7px;
    .input-wrap{
      color: #E4E7EB;
      padding-left: 20px;

    } 
   
  }

  .vw-header-right{
    height: 100%;
    line-height: 70px;
    
    .city-wrap {
      width: 144px;
      padding-left: 22px;
     
      .city_icon {
        margin-left: -6px;
        vertical-align: 8px;
      }
    }
  }

}


</style>
