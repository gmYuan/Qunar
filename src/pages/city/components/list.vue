<template>
  <div class="city-list">

    <div class="area">
      <h2 class="title">热门城市</h2>
      <ul class="lists clearfix">
        <li class="map-list">
          <a href="javascript:;" class="address">北京</a>
        </li>
        <li class="map-list">
          <a href="javascript:;" class="address">北京</a>
        </li>
        <li class="map-list">
          <a href="javascript:;" class="address">北京</a>
        </li>
        <li class="map-list">
          <a href="javascript:;" class="address">北京</a>
        </li>
        <li class="map-list">
          <a href="javascript:;" class="address">北京</a>
        </li>
        <li class="map-list">
          <a href="javascript:;" class="address">北京</a>
        </li>
        <li class="map-list">
          <a href="javascript:;" class="address">北京</a>
        </li>
        <li class="map-list">
          <a href="javascript:;" class="address">北京</a>
        </li>
        <li class="map-list">
          <a href="javascript:;" class="address">北京</a>
        </li>



      </ul>
    </div>

   
      
  </div>
</template>

<script>

export default {
  name: 'cityList',
 
  methods: {
    
    
  },
  
}
</script>


<style lang="scss" scoped>

@import '@scss/variables.scss';
@import '@scss/mixins.scss';

.city-list {
  color: #212121;
  font-size: 28px;
  line-height: 1;
  .area {
    background: #F5F5F5;
    .title {
      font-size: 24px;
      padding: 24px 30px;
    }

    .lists {
      position: relative;
      z-index: 0;
      background: #fff;
      &::before {
        content: '';
        position: absolute;
        left: 33.33%;

        width: 33.33%;
        height: 100%;
        border-left: 2px solid #ddd;
        border-right: 2px solid #ddd;
      }
       
       .map-list {
          float: left;
          position: relative;
          z-index: 10;
          width: 33.333%;
          height: 92px;
          line-height: 92px;
          font-size: 28px;
          text-align: center;
          border-bottom: 2px solid #ddd;
          color: #212121;
          margin-bottom: -2px;

          .address {
            display: block;
            @include ellipse();
          }
       }
    }
  }
}


</style>