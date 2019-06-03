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




## 其他