# Qunar



## 项目预览


## 项目介绍

该项目实现了饿了么移动端的部分页面，包括: 首页、城市选择页


## 技术栈

Vue + Vue-Router + Vuex + SCSS + Swiper


## 问题记录

1 Q: 如何实现移动端1px效果

A: 项目中采用的方法是: svg + border-image,  具体是使用了 `postcss-write-svg`插件

步骤如下:

S1 安装插件: `npm install jonathantneal/postcss-write-svg --save-dev`

S2 在.postcssrc.js文件中，引入插件:

```js
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},

    "autoprefixer": {},

    // 新增postcss-write-svg解决移动端1px问题
    "postcss-write-svg": {},

  },
}
```

S3 在common.scss中定义公有的class样式(common.scss一般会在main.js中全局引入)

```scss

// 解决1px问题
@svg 1px-border {
  width: 4px;
  height: 4px;
  @rect {
    fill: transparent;
    width: 100%;
    height: 100%;
    stroke-width: 25%;
    stroke: var(--color, black);
  }
}
.onepx-border {
  //border: 1px solid;
  border-bottom: 1px solid ;
  border-image: svg(1px-border param(--color red)) 1 stretch;
}
```

S4 在需要有1px边框的元素上，直接使用.onepx-border类即可

```html
<div class="onepx-border">
  test
</div>
```


2 Q: 如何实现移动端轮播

A:

S1 安装插件: `npm install vue-awesome-swiper@2.6.7 --save`

S2 因为可能需要在全局中使用轮播，所以在main.js文件中 全局引入和挂载插件

```js
// main.js文件

// 引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
```

S3 新建Swiper.vue组件，设置内容 + 配置

注意点:

A1 Swiper.vue组件的name属性不能为Swiper，否则会报错，改成其他值即可  

A2 手动左右滑动时会出现报错，在html元素上增加 `touch-action: none;` 即可

A3 覆盖第3方组件的样式(SCSS): `/deep/ .swiper-pagination-bullet`

A4 为了防止慢速环境下，图片下方内容有抖动情况，需要设置轮播部分的height/padding-bottom占位，

具体代码，可参考 [swiper组件内容](https://github.com/gmYuan/Qunar/blob/self/src/pages/Home/components/Swiper.vue)

S4 在需要使用的组件中，引入+渲染 swiper子组件

```js
// home.vue组件
<template>
  <div>
    ......
    <home-swiper></home-swiper>

  </div>
</template>

<script>
......
import homeSwiper from './components/Swiper'

export default {
  name: 'Home',
  components: {
    ......
    homeSwiper,
  },
}
</script>
```


3  Q: 如何实现 icon部分左右滑动划页

A:
S1 S1 左右滑动切换页面，其实可以理解为是一个 `不会自动切换的轮播效果`

S2 通过vue-swiper组件，swiper-slide内部包裹 ul-li-img即可

S3.1 对一个对象数组通过分成二维数组，形成分页效果

S3.2 currentPage的计算方法是: Math.floor(index/每页数量)

S4 具体代码，可参考 [icons部分](https://github.com/gmYuan/Qunar/blob/self/src/pages/Home/components/Icons.vue)


4 Q: 如何实现后台数据对接到前端

A: 
S1 在一个页面的父组件中，获取到后台数据

S2 通过自定义动态属性，传入到子组件中

S3 子组件通过props属性，接收父组件传入的数据


5 Q: 如何实现Vuex公有数据

A:
S1 安装vuex: npm install --save vuex

S2 创建Vuex的 入口文件index.js + 在main.js入口文件中 把store 注入到每一个组件中

  S2.1 在State中 定义数据data

  S2.2 mutations中 mth1通过state.data操作数据

  S2.3 actions中 通过ctx.commit(mth1)触发mutations中定义的mth1

S3 在组件中 引入Vuex中定义的 state/getter/mutations/actions

   S3.1 引入时可使用 mapStaet/mapMutations/MapActions等辅助函数 + computed中使用 ES6扩展运算符

```JS

// S2代码
import Vue from 'vue';     //引入vue
import Vuex from 'vuex';   //引入vuex

Vue.use(Vuex) 

export default new Vuex.Store({
    state: { 
      currentCity: '上海',
    },
    getters: { 
        
    },

    mutations: {
      setCurrentCity (state, city) {    // 要传入state + 参数
        state.currentCity = city
      }, 
        
    },
    actions: {
       setCurrentCity (ctx,city) {   // 要传入ctx + 参数
         ctx.commit('setCurrentCity', city)    // 是字符串类型
       },
    }
})


// S3 代码，在组件中使用
import {mapState, mapActions} from 'vuex'

export default {
  name: "cityList",

  computed: {
    ...mapState(['currentCity'])

  },

  methods: {
    ...mapActions(['setCurrentCity']),   // 把公有方法注册到组件methods中

    handleClickCity (city) {
      // alert(city)
      this.setCurrentCity(city)
      this.$router.push('/')

    },
  }
}
```

6 Q1:  为什么要引入 keep-alive

A:

S1 在路由切换的过程中，缓存某个路由对应的 组件状态(位置/数据等)

S2 不再重复发送AJAX请求，提高性能


Q2: 如何去除 某个情况下的组件的  keep-alive复用

A:

S1 方法1:  actived生命周期钩子(actived: 页面重新渲染时会执行) + 查询参数 + vuex-state

```JS
// S1 keep-alive复用

<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>


// S2 vuex-state + 查询参数 +  actived生命周期钩子(actived: 页面重新渲染时会执行) 

import axios from 'axios'

import { mapState } from 'vuex'

export default {
  name: 'Home',
 
  data () {
    return {
      //  keep-alive相关
      lastCity: '',      // 用来判断 选取的城市是否发生变化
    }
  }, 

  computed: {
    ...mapState(['currentCity']),  // 用作查询参数，获取当前城市对应的 首页数据

  },

  methods: {
    getHomeInfo () {
      axios.get(`/api/index.json?${this.currentCity}`).then( res => {
        console.log(res)
      })
    },

  },

  mounted () {
    this.lastCity = this.currentCity
    this.getHomeInfo()
  },

  activated () {
    if (this.lastCity !== this.currentCity) {
      this.lastCity = this.currentCity
      this.getHomeInfo()
    }
  },
  
}
```


7 Q: 如何实现图片画廊功能

A:

S1 container部分形成遮罩层 + flex子元素垂直居中

S2 vue-swiper组件 + 设置分页器样式(去除容器的overflow + bottom为负值)

S3 通过props接收待渲染的数据

S4.1 画廊默认隐藏，点击后才会展示

S4.2 swiper在隐藏变成展示后会有滑动问题，所以需要实现 监听父元素的结构发生变化，就自动刷新的功能

S5 通过$emit + 父组件监听  组件传出事件，关闭画廊

```html
<template>
  <div>

    <div class="container">
      <div class="inner-wrap">
        <swiper :options="swiperOption">
          <swiper-slide
            v-for="item of imgList"
            :key="item.id"
          >
            <img :src="item.url" @click="emitClose" alt="图片" class="img">

          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "CommonGallery",

    props: {
      imgArr: Array,
    },

    data () {
      return {
        // swiper配置对象
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType : 'fraction',
          observer:true,
          observeParents:true,
        },

      }
    },

    computed: {
      imgList () {
        return this.imgArr
      },
    },

    methods: {
      emitClose () {
        this.$emit('close')
      }
    },

  }
</script>
```


8  Q: 如何让header部分，根据页面滚动渐隐渐现到 完全显示

A:

S1 实现header完全展示 + fixed布局效果

S2 根据滚动动态切换 opacity值(绑定动态对象)

  S2.1 在actived生命周期钩子内，监听滚动事件

  S2.2 监测 当前滚动距离>90px时，控制 opacity的值为 当前滚动对应的比例值

S3 在对全局对象(window)进行事件绑定后，需要对其进行解绑，否则会作用在所有组件中



## 其他