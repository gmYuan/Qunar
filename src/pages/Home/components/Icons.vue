<template>
  <div class="icon-wrap">
    <ul class="icons">
      <li class="icon-item">
        <img
         class="icon-img"
         src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="图标">
        <p class="icon-desc">景点门票</p>
      </li>
    </ul>

    

  </div>
</template>

<script>

export default {
  name: 'HomeSwiper',
  //data() {}
   
  

}
</script>


<style lang="scss" scoped>

.icon-wrap {
  width: 100%;
  height: 370px;
  outline: 1px solid red;

  .icons {
    display: flex;

    .icon-item {
      outline : 1px solid blue;
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
      }
    }
  }

 
 
}

</style>
