<template>
  <div class="city-list" ref="cityWrapper">
    <div>

      <div class="area">
        <h2 class="title">热门城市</h2>
        <ul class="lists">
          <li class="map-list"
            v-for="item of hotcity"
            :key = "item.id"
            @click="handleClickCity(item.name)"
          >
            <a href="javascript:;" class="address">{{item.name}}</a>
          </li>
        </ul>
      </div>


      <div class="area">
        <h2 class="title">字母排序</h2>
        <ul class="character-lists">
          <li class="character-item"
            v-for="(item, key) of cities"
            :key = "key"
            @click="saveCharacter"
          >
            <a href="javascript:;" class="character"> {{key}}  </a>
          </li>
        </ul>
      </div>

      <!-- 具体内容 -->
      <div class="area"
        v-for = "(item, key) of cities"
        :key = "key"
      >
        <h2 class="title" :ref="key">{{key}}</h2>
        <ul class="lists">
          <li class="map-list"
            v-for="inner of item"
            :key = "inner.id"
            @click="handleClickCity(inner.name)"
          >
            <a href="javascript:;" class="address">{{inner.name}}</a>
          </li>
        </ul>
      </div>


    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core"
import {mapState, mapActions} from 'vuex'


export default {
  name: "cityList",

  props: {
    hotcity: Array,
    cities: Object,
  },

  data () {
    return {
      clickCharacter: '',
    }
  },

  computed: {
    ...mapState(['currentCity'])

  },

  methods: {
    ...mapActions(['setCurrentCity']),   // 把公有方法注册到组件methods中

    saveCharacter (e) {
      this.clickCharacter = e.target.innerText
    },

    handleClickCity (city) {
      // alert(city)
      this.setCurrentCity(city)
      this.$router.push('/')

    },


  },

  watch: {
    clickCharacter () {
      console.log(2222, this.clickCharacter, this.$refs[this.clickCharacter])
      if (this.clickCharacter) {
        const element = this.$refs[this.clickCharacter][0]
        this.scroll.scrollToElement(element)
      }

    },
  },

  mounted () {
    this.scroll = new BScroll(this.$refs.cityWrapper, {
      click: true,
      scrollbar: true,
      mouseWheel: true,
    })

  },

};
</script>


<style lang="scss" scoped>
@import "@scss/variables.scss";
@import "@scss/mixins.scss";

.city-list {
  position: absolute;
  top: 178px;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;

  color: #212121;
  font-size: 28px;
  line-height: 1;
  .area {
    background: #f5f5f5;
    .title {
      font-size: 24px;
      padding: 24px 30px;
    }
    // 热门城市列表
    .lists {
      overflow: hidden;
      position: relative;
      z-index: 0;
      background: #fff;
      &::before {
        content: "";
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

    // 城市字母列表
    .character-lists {
      overflow: hidden;
      position: relative;
      z-index: 0;
      background-color: #fff;
      padding: 30px 0;

      .character-item {
        float: left;
        position: relative;
        z-index: 10;
        width: 16.66%;
        height: 90px;
        line-height: 90px;
        font-size: 28px;
        text-align: center;
        color: #212121;
        .character {
          display: block;
          @include ellipse();
        }
      }
    }
  }
}
</style>