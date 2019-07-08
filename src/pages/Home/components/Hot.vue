<template>
  <div class="hot-wrap">
    <div class="info">
      <img
        class="hot-img"
        src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
        alt="热门榜单"
      >
      <span class="desc">本周热门榜单</span>

      <a href="javascript:;" class="more">
        <span>全部榜单</span>
        <i class="iconfont more-right">&#xe6a3;</i>
      </a>
    </div>

    <ul class="places-wrap">
      <li class="place-item"
      v-for = "(item, index)  of list"
      :key = "item.id"
      >
        <router-link class="full-link"
          :to=" `detail/${item.id}`"
        >
          <div class="rate-wrap"
            v-if=" index < 3"
          >
            <img class="rate-tag" :src="item.topSrc" alt="#">
          </div>

          <div class="place-wrap">
            <img :src="item.url" :alt="item.desc" class="place">
          </div>

          <div class="place-desc">{{item.desc}}</div>

          <div class="place-price">
            <span class="price-category">
              ¥<em class="price-num">{{item.price}}</em>
            </span>
            起
          </div>

        </router-link>
      </li>
    </ul>

  </div>
</template>


<script>
export default {
  name: "HomeHot",

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

.hot-wrap {
  margin-top: 20px;
  width: 100%;
  background: #fff;

  .info {
   
    position: relative;
    padding: 24px 0 26px;

    .hot-img {
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
    .more {
      position: absolute;
      top: 36px;
      right: 32px;
      color: #616161;
      font-size: 24px;
      line-height: 30px;
      .more-right {
        margin-left: -8px;
        font-size: 32px;
        color: #9a9a9a;
        vertical-align: top;
      }
    }
  }

  //  热门景点
  .places-wrap {
    margin: 0 24px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;

    .place-item {
      position: relative;
      display: inline-block;
      padding: 6px 0 20px;
      margin: 0 6px;
      width: 200px;

      .full-link {
        display: block;
        width: 100%;
        height: 100%;

        .rate-wrap {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          overflow: hidden;
          width: 84px;
          height: 40px;

          .rate-tag {
            display: block;
            width: 100%;
          }
        }

        .place-wrap {
          overflow: hidden;
          width: 200px;
          height: 0;
          padding-bottom: 100%;    //防止网速不好时的页面抖动
          .place {
            display: block;
            width: 100%;
          }
        }

        .place-desc {
          margin-top: 12px;
          color: #212121;
          font-size: 24px;
          line-height: 32px;
          text-align: center;
          @include ellipse();
        }

        .place-price {
          color: #616161;
          font-size: 24px;
          line-height: 36px;
          text-align: center;

          .price-category {
            color: #ff8300;
            .price-num {
              font-size: 28px;
            }
          }

        }
      }
    }
  }
}
</style>
