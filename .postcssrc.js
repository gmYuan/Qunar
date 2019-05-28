// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},

    // 新增postcss-write-svg解决移动端1px问题
    "postcss-write-svg": {},

  }
}
