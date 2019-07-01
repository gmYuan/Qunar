# Qunar



## 项目预览


## 项目介绍

该项目实现了饿了么移动端的部分页面，包括: 首页、


## 技术栈




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



## 其他