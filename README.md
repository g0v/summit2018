# g0v summit 2018 官網

[![Build Status](https://travis-ci.org/g0v/summit2018.svg?branch=master)](https://travis-ci.org/g0v/summit2018)

### [2/15一頁式網站開發進度(Trello)](https://trello.com/c/PUH4VaGS/19-%E4%B8%80%E9%A0%81%E5%BC%8F%E7%B6%B2%E7%AB%99%E9%96%8B%E7%99%BC)
### [2/15一頁市網站需求共筆(HackMD)](https://hackmd.io/KwNgpgLAJlBGAMBaSxaIgThAJkQQwA4BGYREA7BWIsYWsIA=?both#)


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

`src/pages/` 裡的檔案（如 [LandingPage.vue](https://github.com/g0v/summit2018/blob/master/src/views/LandingPage.vue) ）基本上都是以 [pug](https://pugjs.org/zh-cn/language/attributes.html) 的為主 （以前的 jade，一種好讀好寫的 html 變形(?)），只需注意包在 `<TW>`、`<EN>` 裡的分別是中英文版下會顯示的內容即可。有一些重複性的內容（如 好幾篇報導、好幾個講者）會抽出到 `src/assets/` 之類的地方，但總之只要在這個 repo 直接搜尋你想改的文字，應該都找得到對應的檔案。

編輯的時候從 master 隨便開一個 edit/ 開頭 的 branch （e.g. edit/update-landing-page-text），改完之後發 PR 然後直接按 merge [範例](https://github.com/g0v/summit2018/pull/4)）

commit message 格式範例（那個圖案叫speech-balloon）：💬 更新g0v組織簡介zzzz

如果直接在線上改的話就是長這樣：
![開branch送PR](https://i.imgur.com/YigEsyQ.png)

### 更新贊助商、議程、講者資料
1. 到 [Airtable 資料庫](https://airtable.com/invite/l?inviteId=invgmSI7Kq7mpXF1B&inviteToken=e0e3636599e4e385248fc8b714a89c7ec662a4d8cdb73b0143a311cd37f74b93) 更新相關資料、圖片。**編輯權限請到 slack 工作群組裡找邀請連結或私訊 @choznerol**
2. 網站每天會自動更新一次（通常是凌晨 4 點），如果要馬上更新，可以到 [Travis CI 的 Build 頁面](https://travis-ci.org/g0v/summit2018/builds) 點選 trigger build、確認，跑完後等待 2~5 分鐘網站上就會更新囉

![screen shot 2018-03-25 at 12 08 37 pm](https://user-images.githubusercontent.com/12410942/37871683-6de7a312-3026-11e8-92e4-9a313a53a7f8.png)


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
