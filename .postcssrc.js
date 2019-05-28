// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},

    // 新增postcss-write-svg解决移动端1px问题
    "postcss-write-svg": {},

    // 增加px-vw的插件配置
    "postcss-px-to-viewport": {
      unitToConvert: 'px',
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 5,
      propList: ['*', 'vw'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568
    },

  }
}
