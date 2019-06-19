<template>
  <div class="maylike-wrap">
    <div class="info">
      <img
        class="like-img"
        src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        alt="猜你喜欢"
      >
      <span class="desc">猜你喜欢</span>
    </div>

    <ul class="like-list">
      <li class="like-item onepx-border"
        v-for = "item of list"
        :key = "item.id"
      >
        <a href="javascript:;" class="full-link clearfix">
          <div class="img-wrap">
            <img class="like-img" 
            :src="item.imgUrl" 
            :alt="item.title"
            >
          </div>

          <div class="like-tag"
            :style="{ backgroundImage:`url(${item.tagUrl})` }"
          >
            {{item.tagDesc}}
          </div>

          <div class="like-info">
            <div class="like-title">{{item.title}}</div>
            <div class="like-price">
              <span class="price-category">
                ¥<em class="price-num">{{item.price}}</em>
              </span>
              起
              <span class="like-address">{{item.address}}</span>
            </div>
            <div class="like-feature">
              <div> {{item.desc}} </div>
            </div>

          </div>
        </a>
      </li>

    </ul>

    <a href="javascript:;" class="like-more max1px-border">
      查看所有产品
    </a>


  </div>
</template>


<script>
export default {
  name: "HomeMaylike",

  data() {
    return {
     
    }
  },

  props: {
    list: Array,
  },


}
</script>


<style lang="scss" scoped>

@import '@scss/mixins.scss';

.maylike-wrap {
  margin-top: 20px;
  width: 100%;
  background: #fff;

  .info {
    padding: 24px 0 26px;
    .like-img {
      display: inline-block;
      overflow: hidden;
      width: 30px;
      height: 30px;
      margin-left: 20px;
      vertical-align: top;
    }
    .desc {
      display: inline-block;
      margin-left: 8px;
      height: 44px;
      line-height: 44px;
      color: #212121;
      font-size: 32px;
    }
  }

  .like-list {
    margin-left: 24px;

    .like-item {
      position: relative;
      overflow: hidden;
      padding: 20px 0;
      min-height: 316px;
      .full-link {
        display: block;
        width: 100%;
        height: 100%;

        .img-wrap {
          float: left;
          overflow: hidden;
          width: 200px;
          height: 200px;
          .like-img {
            display: block;
            width: 100%;
          }
        }
        .like-tag {
          position: absolute;
          top: 20px;
          left: 0;
          width: 102px;
          height: 38px;
          background-size: 100%;
          color: #fff;
          font-size: 2px;
          line-height: 38px;
          text-indent: 4px;
          background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);
        }
        .like-info {
          overflow: hidden;
          padding-left: 22px;
          .like-title {
            margin-top: 26px;
            height: 44px;
            color: #212121;
            font-size: 32px;
            line-height: 44px;
          }
          .like-price {
            position: relative;
            margin-top: 22px;
            color: #616161;
            font-size: 28px;
            line-height: 47px;
            .price-category {
              color: #ff8300;
              .price-num {
                font-size: 40px;
              }
            }

            .like-address {
              position: absolute;
              right: 24px;
              bottom: 0;
            }
          }

          .like-feature {
            display: inline-block;
            margin-top: 48px;
            margin-right: 24px;
            background: #fff9f9;
            padding: 4px 10px;
            color: #f55;
            font-size: 24px;
            line-height: 34px;
            @include ellipse();
          }
        }
      }
    }
  }

  .like-more {
    position: relative;
    display: block;
    padding: 20px 0;
    color: #00afc7;
    font-size: 28px;
    line-height: 41px;
    text-align: center;
  }


}



</style>
