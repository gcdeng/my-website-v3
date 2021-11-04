---
slug: script-tag-async-defer-attributes
title: '[前端優化系列] 使用async, defer屬性加速網頁載入時間'
author: Eric Deng
author_url: /about
author_image_url: /img/ericdeng.jpg
tags: [performance, frontend, web]
keywords: [performance, frontend, web]
---

瀏覽器在解析 HTML 時如果遇到`<script>...</script>`就會暫停解析直接開始執行，如果是外部資源`<script src="..."></script>`會等待下載並執行完成之後才開始繼續解析 HTML 建立 DOM，這樣當遇到內容很多的 script 時將會延長頁面渲染的時間，也會讓使用者更慢看到網頁內容影響使用體驗。

`async`, `defer` 正是為了解決上述問題而生的兩個 script tag 屬性，這篇文章會介紹他們的共同點與相異點，以及各自適用的情境。

![script-async-defer.png](./2021-11-04-script-tag-async-defer-attributes-assets/script-async-defer.png)

時序圖 (來源：Speed up Google Maps(and everything else) with async & defer)

## async, defer 的共同點

- 解析 HTML 時跑到就開始背景下載 script，下載時不阻擋瀏覽器解析 HTML、建立 DOM，如此一來頁面渲染完成使用者就可以先看到網頁內容。
- 只對從外部載入的 script 有效，也就是沒有 src 的 inline script 沒有作用，會直接開始執行。

## defer

- DOM 建立完成之後才開始執行 script。
- 加了 defer 的 script 之間會照著寫在 HTML 的順序執行，就算先下載好了也會等前面的執行完成。

適用情境：

依賴 DOM 或其他 script，例如會需要使用 HTML element 或是其他 script 的資料，符合大部分的使用情境，通常都可以加上這個屬性，然後把 script tag 放在`<head>`裡讓他盡早開始背景下載，只需要注意寫在 HTML 上的執行先後順序。

## async

- 不管 DOM 好了沒，script 下載好就執行，開始執行之後依然會暫停解析 HTML。
- 加了 async 的 script 之間不保證執行順序，也不會等待其他 script，先下載好先執行。

適用情境：

沒有相依性的 script，不依賴 DOM 或其他 script，誰先執行都沒關係，適用於獨立的第三方 script 像 GA, GTM, ads...

## Dynamic scripts

有時候可能會寫 js 動態建立 script tag 然後插入 HTML，這樣被載入的 script 稱為 Dynamic scripts，像是這樣 👇

```jsx
let script = document.createElement('script');
script.src = '/article/script-async-defer/long.js';
document.body.append(script); // (*)
```

以這種方式插入的 script 預設`async`效果，插入 document 之後`(*)`就開始背景下載。如果想要改成`defer`只要設定`script.async=false`就可以了，背景下載完成後會照著插入 document 的順序執行 script。

## 很少會直接撰寫 HTML，實務上會怎麼做呢？

現在通常會使用 webpack 來打包 js，可以搭配[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates)，他會生成 HTML 並引入打包好的 script，可以在使用時設定`scriptLoading`參數為`defer`。

剩下其他第三方的 script 會需要直接寫在 HTML 中，這時就可以加上`acync`屬性。

## 總結

這兩個屬性讓載入頁面時可以更早開始下載 script 同時解析 HTML，算是一個小小舉手之勞就可以加速網頁載入時間的方法喔。

如果有任何問題或建議歡迎與我聯絡討論。

## Reference

[The Script element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

[Scripts: async, defer](https://javascript.info/script-async-defer)

[Efficiently load JavaScript with defer and async](https://flaviocopes.com/javascript-async-defer/)

[前端三十｜ 02. [HTML] script tag 加上 async & defer 的功能及差異？](https://medium.com/schaoss-blog/02-html-script-tag-%E5%8A%A0%E4%B8%8A-async-defer-%E7%9A%84%E5%8A%9F%E8%83%BD%E5%8F%8A%E5%B7%AE%E7%95%B0-8205fddbbafc)

[[JS] Async, defer attributes | PJCHENder 未整理筆記](https://pjchender.dev/javascript/js-async-defer/)
