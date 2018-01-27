# g0v summit 2018 官網

[![Build Status](https://travis-ci.org/g0v/summit2018.svg?branch=master)](https://travis-ci.org/g0v/summit2018)

> https://g0v.github.io/summit2018


## Get Started

### 開發
``` bash
# 安裝套件
yarn

# 在 localhost:8080 跑 dev server 開發
yarn dev

# 開發完成把你的 branch merge 進 master 並 push，Travis CI 約三分鐘
# 後 build 完並更新到 https://g0v.github.io/summit2018
```

### 翻譯

src/views/***Page.vue 的檔案（如 [LandingPage.vue](https://github.com/g0v/summit2018/blob/master/src/views/LandingPage.vue) ）基本上就是一般 html 格式，只需注意包在 `<TW>`、`<EN>` 裡的分別是中英文版要顯示的內容即可。

commit message 格式： `:speech_balloon: 更新g0v組織簡介`

## Project structure
```
node_modules
static
src
 |-assets
 |-components            可重複使用的 Component
 `-views
   |-LandingPage.vue     網站首頁
   |-SchedulePage.vue    議程分頁(todo)
   ˋ- ...
 |-router
 |-App.vue
 `-main.js
package.json
404.html                 GitHub Page 上 SPA 的非根目錄網址會 404 的 workaround，詳見 rafrex/spa-github-pages
.travis.yml
```
vue webpack 模板文檔：[vuejs-templates/webpack](https://vuejs-templates.github.io/webpack/)

## Contribution
本專案 follow [Vue.js 官方風格指南](https://cn.vuejs.org/v2/style-guide/) ，commit message 格式可以參考[這裏](https://gitmoji.carloscuesta.me/)，master 盡量以 merge 自己的 branch 代替直接 commit

## Todo
- [ ] 修改 router base 為 `/2018/` 或 `/`
