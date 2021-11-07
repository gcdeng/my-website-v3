---
slug: solve-seo-problems-with-prerenderio
title: 'CSR SPA的SEO救星 - Prerender.io 原理介紹與使用教學'
author: Eric Deng
author_url: /about
author_image_url: /img/ericdeng.jpg
tags: [seo, prerender, csr, ssr, ssg, prerender.io, frontend, web]
keywords: [seo, prerender, csr, ssr, ssg, prerender.io, frontend, web]
---

Client-Side Rendering (CSR) Single Page Application (SPA) 最常遇到的問題就是 SEO，解決這個問題的方法有很多種，其中一種獲得 Google 推薦的方法是 Prerender.io，這篇文章將會介紹它的運作原理以及如何開始導入使用。

## 開始之前，先聊聊 CSR 的 SEO 問題

Client-Side Rendering (CSR) 是過去幾年流行的前端開發方式，瀏覽器會收到一個 body 裡只有根元件以及引入打包好的 JS 的 HTML，解析 HTML 後開始下載及執行 JS 將內容渲染進根元件中，大部分的運算資源會集中在瀏覽器上，而最大的問題是做 SEO 的爬蟲並不會等待 AJAX 跟 JS 渲染好內容才開始蒐集資料，他只會看到 HTML 中一個空空的根元件，沒有資料可以給他做 Index，雖然 Google Search 後來也有[新的爬蟲機制](https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics)解決這個問題，但爬蟲也有[資源預算](https://prerender.io/crawl-budget-seo/)(Crawl Budget)限制，CSR 需要花費大量爬蟲運算資源，導致 Index 會需要很多時間甚至有些頁面也無法做 Index，於是開始有人提出很多事先渲染(pre-rendering)好靜態 HTML 再送給 client 的解法，以下列舉幾種：

1. Pre-build 或稱 Static Site Generator (SSG)，是在 build-time 準備好每個路由(Route)需要的資料並建立出完整的靜態 HTML，server 收到請求時直接回傳已經建立好的 HTML，常見的工具包含[react-snap](https://github.com/stereobooster/react-snap)，[Eleventy](https://www.11ty.dev/)，這個方法的優點包含可以在 CDN cache HTML 縮短請求回傳時間以及[First Contentful Paint (FCP)](https://web.dev/fcp/)時間，缺點則是因為是在 build-time 產生 HTML，每次有內容變動都要重 build，對於內容變動頻率高的網站會很麻煩，也會延長 build 的時間。
2. Server-Side Rendering (SSR)，相對於 SSG 來說它則是在 run-time 建立好 HTML，當 server 收到某個路由的請求後開始準備需要的資料並建立好 HTML 回傳給 client，解決了 SSG 的問題同時繼承其優點，但也有它本身的的問題，就是會提升開發複雜度，以及現有的 CSR 專案難以轉換成 SSR 架構，常見的工具框架包含 React 的[Next.js](https://nextjs.org/)，Vue 的[Nuxt.js](https://nuxtjs.org/)。（不過這類框架還是有很多很香的特色）
3. Prerender.io

## Prerender.io 運作原理 - Dynamic Rendering

![prerenderio.svg](./2021-11-07-solve-seo-problems-with-prerenderio-assets/prerenderio.svg)

[Prerender.io](https://prerender.io/)運作流程是當前端的 web server 收到請求時去辨識這個請求是從瀏覽器還是從爬蟲發出的，如果是瀏覽器就依照原本的 CSR 機制，如果是爬蟲才需要做 prerender，會委託 Prerender.io cloud service 幫我們渲染出靜態 HTML 再回傳給 web server 然後再回給爬蟲，這樣的渲染方式稱為[Dynamic Rendering](https://developers.google.com/search/docs/advanced/javascript/dynamic-rendering)。

### 辨識爬蟲的方法

利用 request header 中 user-agent 的值，如果是 google search 的爬蟲會帶上 `googlebot` ，目前支援的爬蟲有這些：

```jsx
prerender.crawlerUserAgents = [
  'googlebot',
  'Yahoo! Slurp',
  'bingbot',
  'yandex',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest/0.',
  'developers.google.com/+/web/snippet',
  'slackbot',
  'vkShare',
  'W3C_Validator',
  'redditbot',
  'Applebot',
  'WhatsApp',
  'flipboard',
  'tumblr',
  'bitlybot',
  'SkypeUriPreview',
  'nuzzel',
  'Discordbot',
  'Google Page Speed',
  'Qwantify',
  'pinterestbot',
  'Bitrix link preview',
  'XING-contenttabreceiver',
  'Chrome-Lighthouse',
  'TelegramBot',
];
```

### 爬蟲獲取靜態 HTML 的方法

我們的 web server 要去打 Prerender.io 提供的 GET API 並帶上爬蟲請求的路由，Prerender.io 會開一個[Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome)去跟我們的 server 請求該路由的資料來渲染 HTML，這段其實等同使用 Headless Chrome 在做 CSR，再透過 HTTP 分塊(chunk)傳輸從原本的 API 回傳渲染好的 HTML 給我們的 server，server 收到後再把 HTML 回覆給爬蟲的請求，因此爬蟲就可以收到渲染好的靜態 HTML 而且不包含 JS 檔案。

```jsx
prerender.plainResponse = function (response, callback) {
  var content = '';

  response.on('data', function (chunk) {
    content += chunk;
  });
  response.on('end', function () {
    response.body = content;
    callback(null, response);
  });
};
```

## 如何開始使用

### 在 Dev 環境測試

先在 local 跑一台[Prerender Node Server](https://github.com/prerender/prerender)，假設開起來的 URL 是 `http://localhost:3000`

```bash
git clone https://github.com/prerender/prerender.git
cd prerender
npm install
node server.js
```

官方有提供多種語言的 open source server [middleware](https://docs.prerender.io/article/12-middlewares)已經幫我們做好上述的 Dynamic Rendering，可以把它安裝進我們的前端 web server 中，如果你的 server 是 Node.js 的話可以用[prerender-node](https://github.com/prerender/prerender-node)

```bash
npm install prerender-node --save
```

引入 middleware

```jsx
app.use(require('prerender-node'));
```

middleware 中會讀取環境變數 `process.env.PRERENDER_SERVICE_URL` 所以可以把它設為 `http://localhost:3000` ，或是直接設定 middleware 的 `prerenderServiceUrl`

```jsx
const prerenderServiceUrl = 'http://localhost:3000';
app.use(
  require('prerender-node').set('prerenderServiceUrl', prerenderServiceUrl)
);
```

執行 curl 或是使用 browser extension，例如[ModHeader](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj?hl=zh-TW)，在 header 中加入 user-agent: `Googlebot`，去打你的 service 某個頁面路由，假設 `https://www.example.com/`

```bash
curl -A Googlebot https://www.example.com/
```

你的 server 收到請求後，middleware 如果判斷是爬蟲就會去打 GET `http://localhost:3000/https://www.example.com/` ，請求 Prerender Node Server 渲染 HTML，之後就可以收到一個完整渲染好沒有 script tag 的靜態 HTML。

### 在 Stage 環境測試

在[Prerender.io](https://prerender.io/)官網註冊新帳號拿到 token，middleware 中會讀取環境變數 `process.env.PRERENDER_TOKEN` 可以把他設定為你的 token，或是直接設定以下的 `prerenderToken`。

```jsx
app.use(require('prerender-node').set('prerenderToken', 'YOUR_TOKEN'));
```

通常 Stage server 不會對外公開，需要先設定白名單允許[Prerender.io 的 IP](https://docs.prerender.io/article/22-ip-addresses)，讓他們的 cloud service 可以打進 Stage server 請求頁面資料，再照著一樣的方法帶著爬蟲的 user-agent 去打你的 service，middleware 會去 GET `https://service.prerender.io/https://www.example.com/` ，之後就可以看到 stage 環境下的 prerendered HTML，在官網的 Dashboard 上也可以看到爬蟲請求紀錄以及被 cache 的頁面。

## Prerender.io 的優缺點

優點

- 實作起來比其他解法更簡單快速，只要設定 server middleware。
- 任何現有 CSR 前端框架 React, Vue, Angular 都可以直接使用。
- 介面不錯的 Dashboard。
- Cloud service 有 cache 機制，可以在 dashboard 上設定 cache 時間，如果有特別頁面需求也有提供建立跟清除 cache 的 API。

缺點

- [額外雲端服務成本](https://prerender.io/pricing/)或是自己維運 Prerender Node Server 成本，不過這項對於任何 SSR 方式或多或少都會有。

## 總結

這篇文章講解了 CSR 遇到的問題與 SSG、SSR、Prerender.io 三種解決方案，針對 Prerender.io 介紹它的運作原理 Dynamic Rendering、middleware 使用方式以及優缺點比較，整體來說我覺得 Prerender.io 是介於 SSG 與 SSR 之間解決 SEO 問題的折衷方案，如果是以下情境：

1. 具有一定規模的 CSR SPA 專案轉換 SSR 架構成本過高
2. 網站內容變更頻率高
3. 只想優化 SEO

這些情況下 Prerender.io 會是個建議可以考慮的解法，還有其他更多細節也可以到他們的官方文件看看。

如果有任何問題或建議歡迎與我聯絡討論。

## Reference

[Render Javascript With Search Engines in Mind | Prerender](https://prerender.io/)

[Prerender.io Knowledge Base](https://docs.prerender.io/)

[https://github.com/prerender/prerender](https://github.com/prerender/prerender)

[https://github.com/prerender/prerender-node](https://github.com/prerender/prerender-node)

[Dynamic Rendering | Google Search Central | Google Developers](https://developers.google.com/search/docs/advanced/javascript/dynamic-rendering)

[Understand JavaScript SEO Basics | Google Search Central](https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics)

[Crawl Budget Optimization | Improve Crawl Health | Prerender](https://prerender.io/crawl-budget-seo/)

[Getting Started with Headless Chrome | Web | Google Developers](https://developers.google.com/web/updates/2017/04/headless-chrome)
