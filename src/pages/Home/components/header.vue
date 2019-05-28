<template>
  <div class="header">
    <div class="vw-header-left">返回</div>
    <div class="vw-header-input">
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    
    <div class="vw-header-right">城市</div>
  	
      
      
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
  
}
  
 
</script>


<style lang="scss" scoped>

.header {
  display: flex;
  align-items: center;

  width: 750px;
  height: 88px;
  background: #5CBBD4;
  color: #fff;

  .vw-header-left{
    width: 80px;
    padding: 0 20px;
  }
  .vw-header-input {
    flex: 1;
    height: 60px;
    & input {
      
      width: 100%;
      height: 100%;
      color: #e4e7ea;
      border-radius: 7px;
    }
  }

  .vw-header-right{
    width: 128px;
    padding: 0 22px;
  }
}
</style>
