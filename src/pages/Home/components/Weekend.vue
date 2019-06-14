<template>
  <div class="weekend-trip">

    <h2 class="info">
      周末去哪儿
    </h2>

    <ul class="weekend-list">
      <li class="weekend-item">
        <a href="javascript:;" class="full-link">
          <div class="img-wrap"
          >
            <img class="weekend-img" src="http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg" alt="#">
          </div>

          <div class="weekend-info">
            <p class="name">上海必打卡</p>
            <p class="desc">中西合璧，现代和传统各有各的精彩</p>
          </div>
        </a>
      </li>

       <li class="weekend-item">
        <a href="javascript:;" class="full-link">
          <div class="img-wrap"
          >
            <img class="weekend-img" src="http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg" alt="#">
          </div>

          <div class="weekend-info">
            <p class="name">上海必打卡</p>
            <p class="desc">中西合璧，现代和传统各有各的精彩</p>
          </div>
        </a>
      </li>


     
    </ul>


  </div>
</template>


<script>
export default {
  name: "HomeMaylike",

  data() {
    return {
     
    }
  },


}
</script>


<style lang="scss" scoped>

@import '@scss/mixins.scss';

.weekend-trip {
  .info {
    height: 80px;
    padding-left: 26px;
    font-size: 28px;
    line-height: 80px;
    color: #212121;
  }

  .weekend-list {
    .weekend-item {
      position: relative;
      margin-bottom: 10px;
      background: #fff;
      .full-link {
        display: block;
        width: 100%;
        height: 100%;

        .img-wrap {
          overflow: hidden;
          height: 0;
          padding-bottom: 37.4375%;
          .weekend-img {
            display: block;
            width: 100%;
          }
        }

        .weekend-info {
          padding: 14px 20px 20px 20px;
          .name {
            overflow: hidden;
            padding-right: 140px;
            color: #212121;
            font-size: 28px;
            line-height: 48px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .desc {
            overflow: hidden;
            padding-right: 140px;
            color: #616161;
            font-size: 24px;
            line-height: 42px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }

      }
    }
  }

}




</style>
