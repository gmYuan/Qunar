<template>
  <div>
    
    <router-link tag="div" 
      to="/"
      class="header-back"
      v-show="!showHeader"
    >
       <span class="mask"></span>
       <i class="iconfont back_icon">&#xe679; </i>
    </router-link>

    <div class="fixed-header"
      v-show="showHeader"
      :style="headerStyle"
    >
      <router-link tag="div" 
        to="/" 
        class="left"
      >
         <i class="iconfont header_back_icon">&#xe679; </i>
      </router-link>

      <h1 class="title">
        景点详情
      </h1>
    </div>
    

  </div>
</template>


<script>

export default {
  name: "detailHeader",

  data () {
    return {
      showHeader: false,
      headerStyle: {
        opacity: 1,
      }
    }
  },

  methods: {
    changeOpacity () {
      console.log('scroll')
      const top = document.documentElement.scrollTop
      if (top > 40) {
        this.showHeader = true

        let opacity = top/140
        opacity === 1 ? 1 : opacity
        this.headerStyle = {opacity}

      } else {
        this.showHeader = false
      }
    },


  },

  activated () {
    window.addEventListener('scroll', this.changeOpacity)
  },

  deactivated () {
    window.removeEventListener('scroll', this.changeOpacity)
  }

}
</script>


<style lang="scss" scoped>

@import "@scss/variables.scss";
@import "@scss/mixins.scss";

.header-back {
  position: absolute;
  left: 10px;
  top: 10px;
  
  width: 72px;
  height: 72px;
  line-height: 72px;
  text-align: center;

  .mask {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 36px;

    background-color: #000;
    opacity: .5;
  }

  .back_icon {
    position: absolute;
    left: 20%;
    top: 0;
    font-size: 38px;
    color: #fff;
  }

}

.fixed-header {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0;
    z-index: 91;

    height: $headerHeight;
    background: $cityHeaderBg;
    // opacity: 1; 

    .left {
      position: absolute;
      left: 0;
      top: 0;
      width: 80px;
      height: 88px;
      line-height: 88px;
      text-align: center;

      .header_back_icon {
        color: #fff;
        font-size: 42px;
      }
    }

    .title {
      margin: 0 100px;
      font-size: 32px;
      line-height: 88px;
      text-align: center;
      color: #fff;
      @include ellipse();
    }

}








</style>
