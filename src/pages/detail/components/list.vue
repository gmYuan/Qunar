<template>
  <div class="lists">
    <h3 class="item"
      v-for="(item, index) of lists"
      :key="index"
    >
      <i class="title-icon"></i>
      <span class="title"> {{item.title}}</span>

      <div v-if="item.children" >  
        <detail-list :lists="item.children"></detail-list>    
      </div>


    </h3>
  
  </div>
</template>


<script>

export default {
  name: "detailList",

  props: {
    lists: Array,
  }


}
</script>


<style lang="scss" scoped>

@import "@scss/variables.scss";
@import "@scss/mixins.scss";

.lists {
  background: #fff;

  .item {
    position: relative;
    z-index: 4;
    margin-bottom: -2px;
    padding: 0 20px;
    min-height: 88px;
    line-height:88px;
    color: #333;
    font-size: 32px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      @include onepx-border(bottom, #e0e0e0);
    }

    .title-icon {
      display: inline-block;
      position: absolute;
      width: 36px;
      height: 36px;
      top: 26px;
      left: 20px;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -45px no-repeat;
      margin-right: 10px;
      background-size: 40px 300px;
    }
    .title {
      margin-left: 44px;
    }
  }
}

</style>
