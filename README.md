# g0v summit 2018 官網

[![Build Status](https://travis-ci.org/g0v/summit2018.svg?branch=master)](https://travis-ci.org/g0v/summit2018)

[網站開發進度 Trello](https://trello.com/c/PUH4VaGS/19-%E4%B8%80%E9%A0%81%E5%BC%8F%E7%B6%B2%E7%AB%99%E9%96%8B%E7%99%BC)

## API

https://g0v.github.io/summit2018/static/api

提供 2018 summit 官網上就有的各種資料，如果你覺得官網上有不該出現的資訊，或這裡的資料有不應該出現的欄位，請不吝聯絡 g0v 討論/指教： g0v-summit-committee-2018@googlegroups.com 。

p.s. 會加這個文件主要是為了避免有人覺得「雖然是網站前端就有的資料，如果可以用 json 的格式拿到叫做安全漏洞」，所以加了這份文件把它變成 feature，不是很有用的一套 API。but still, like open source project always says, 'We are excited about what you will(can) build with it!'

## 更新網頁內容(免寫code!)

### 1. 大部分的文字、翻譯

超簡單圖文步驟： https://hackmd.io/s/HJA8pHAoG

### 2. 贊助商、議程、講者相關內容
1. 到 [Airtable 資料庫](https://airtable.com/invite/l?inviteId=invgmSI7Kq7mpXF1B&inviteToken=e0e3636599e4e385248fc8b714a89c7ec662a4d8cdb73b0143a311cd37f74b93) 更新相關資料、圖片。**編輯權限請到 slack 工作群組裡找邀請連結或私訊 @choznerol**

2. 網站每天會自動更新一次（通常是凌晨 4 點），如果要馬上更新，可以到 [Travis CI 的 Build 頁面](https://travis-ci.org/g0v/summit2018/builds) 點選 trigger build、確認，跑完後等待 2~5 分鐘網站上就會更新囉

![screen shot 2018-03-25 at 12 08 37 pm](https://user-images.githubusercontent.com/12410942/37871683-6de7a312-3026-11e8-92e4-9a313a53a7f8.png)

---

##  開發

### Installation
``` bash
# 安裝套件
yarn

# 抓取 Airtable 上的議程、講者等資料
AIRTABLE_KEY_G0V_SUMMIT_2018=<Your_key_for_Airtable> yarn pull_airtable

# 在 localhost:8080 跑 dev server 開發
yarn dev
```

### Project structure
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

### Contribution
本專案 follow [Vue.js 官方風格指南](https://cn.vuejs.org/v2/style-guide/) ，commit message 格式可以參考[這裏](https://gitmoji.carloscuesta.me/)，master 盡量以 merge 自己的 branch 代替直接 commit

### Thank you, kind contributors!
@yoyodiy

@ooookai

@ymhuang0808
