---
slug: a-guidebook-to-optimize-web-vitals
title: '[前端優化系列]Web Vitals優化方法懶人包'
author: Eric Deng
author_url: /about
author_image_url: /img/ericdeng.jpg
tags: [performance, web vitals]
keywords: [performance, web vitals]
---

這篇文章介紹了 Web Vitals、測量方式以及優化方法，其中優化方法會隨著自己的實務經驗及研究持續更新，期望未來可以成為優化效能的懶人包，在開發功能時作為提醒自己會影響效能的注意事項，要優化網站時也方便回來找實作的方向。

![kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg](./2021-11-14-a-guidebook-to-optimize-web-vitals-assets/kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg)Photo by Kate Stone Matheson on Unsplash

## 目錄

- [什麼是 Web Vitals?](#什麼是-web-vitals)
- [如何測量網站的 Web Vitals？](#如何測量網站的-web-vitals？)
  - [實驗模擬測量(In the lab)](#實驗模擬測量in-the-lab)
  - [實測(In the field)](#實測in-the-field)
  - [如何將測量工具導入產品開發流程中](#如何將測量工具導入產品開發流程中)
- [載入速度(Loading Performance)](#載入速度loading-performance)
  - [Largest Contentful Paint (LCP)](#largest-contentful-paint-lcp)
  - [First Contentful Paint (FCP)](#first-contentful-paint-fcp)
  - [Time to First Byte (TTFB)](#time-to-first-byte-ttfb)
  - [優化方法](#優化方法)
- [互動反應能力(Interactivity)](#互動反應能力interactivity)
  - [First Input Delay (FID)](#first-input-delay-fid)
  - [Time to Interactive (TTI)](#time-to-interactive-tti)
  - [Total Blocking Time (TBT)](#total-blocking-time-tbt)
  - [優化方法](#優化方法-1)
- [視覺穩定性(Visual Stability)](#視覺穩定性visual-stability)
  - [Cumulative Layout Shift (CLS)](#cumulative-layout-shift-cls)
  - [Speed Index (SI)](#speed-index-si)
  - [優化方法](#優化方法-2)
- [總結](#總結)
- [Reference](#reference)

## 什麼是 Web Vitals?

**Web Vitals**是由 Google 提出衡量網站效能及使用體驗的量化指標，可以幫助開發者做為優化網站的參考。以使用者體驗為中心提出了三個改善面向，每個面向有以下各自對應的指標：

1. 載入速度(Loading Performance)
   1. **Largest Contentful Paint (LCP)**
   2. First Contentful Paint (FCP)
   3. Time to First Byte (TTFB)
2. 互動反應能力(Interactivity)
   1. **First Input Delay (FID)**
   2. Time to Interactive (TTI)
   3. Total Blocking Time (TBT)
3. 視覺穩定性(Visual Stability)
   1. **Cumulative Layout Shift (CLS)**
   2. Speed Index (SI)

其中**LCP, FID, CLS**是三個較為重要代表各面向的**核心指標(Core Web Vitals)**。

## 如何測量網站的 Web Vitals？

有很多工具可以幫我們解析網站效能，並且產生出這些量化指標分數以及改善建議的分析報告，依照環境分成兩種測量方式，不同方式有各自的工具：

### 實驗模擬測量(In the lab)

模擬測量工具會去模擬使用者的操作行為，使用模擬資料評分，提供可以重現的結果，適合用在產品開發階段做分析及驗證。

- [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)，設定在 PR 時自動化跑 Lighthouse 產生測量報告。
- [Chrome DevTools Performance panel](https://developer.chrome.com/docs/devtools/evaluate-performance/)，可以錄製畫面，更深入針對某段 frame 做優化。
- [WebPageTest](https://webpagetest.org/)

### 實測(In the field)

也被稱為 Real User Monitoring(RUM)，實測工具會使用從真實使用者蒐集來的匿名使用行為資料評分，可以知道使用者真實體驗狀況，但分數也會受使用者當下裝置影響，例如使用者的網路狀況不佳，或是每個使用者會顯示不同的客製化資料，都會影響測量評分，因此可能會跟模擬測量結果有差距。

- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=zh-TW)
- [Search Console](https://search.google.com/search-console/about)
- [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report) API
- [Firebase Performance Monitoring](https://firebase.google.com/docs/perf-mon)
- [Web Vitals Chrome Extension](https://github.com/GoogleChrome/web-vitals-extension)

如果需要更詳細的使用行為資料可以使用 [web-vitals](https://github.com/GoogleChrome/web-vitals) javascript library，在自己的專案中實作 Real User Monitoring，來觀察使用者實際操作細節，驗證在產品環境中效能問題是否有改善。

> 這篇文章不會太詳細解釋每個測量工具計算指標分數的公式，如果有興趣可以到各指標標題提供的超連結研究。

### 如何將測量工具導入產品開發流程中

參考 [https://web.dev/i18n/en/vitals-tools/](https://web.dev/i18n/en/vitals-tools/) 提到的流程

1. 使用 Search Console 產生每個頁面的核心指標測量報告，找到哪個頁面需要特別進行優化。
2. 找到需要優化的頁面 URL，使用 PageSpeed Insights 或其他 RUM 工具得到包含 lab 及 field 的詳細指標測量結果跟優化建議。
3. 在本地開發環境配合優化建議進行修正，配合 Lighthouse 跟 Chrome DevTools 做驗證。
4. 使用 Lighthouse CI 在 PR 自動化測量，通過設定的指標分數門檻後才 merge 進主線然後 deploy production。
5. 回到步驟 1 跟 2，驗證真實產品環境中的指標分數是否真的有優化成功。

## 載入速度(Loading Performance)

目標是要評估網頁可以多快載入完成並且渲染好畫面。

### [Largest Contentful Paint (LCP)](https://web.dev/lcp/)

`core web vital`

從網頁開始載入到最大面積的元素渲染(render)到畫面上所花的時間。

![LCP.svg](./2021-11-14-a-guidebook-to-optimize-web-vitals-assets/LCP.svg)

### [First Contentful Paint (FCP)](https://web.dev/fcp/)

從網頁開始載入到任何一個元素渲染到畫面上所花的時間。

### [Time to First Byte (TTFB)](https://web.dev/ttfb/)

瀏覽器對伺服器發出請求(ex: http api request)後到收到回應資料(第一個 byte)所花的時間。

### 優化方法

- 加速取得資源的時間
  - Cache
    - CDN caching
      - 例如使用 SSG 將靜態 HTML cache 在 CDN
    - [HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
    - service worker [Workbox Precaching](https://developers.google.com/web/tools/workbox/modules/workbox-precaching)
    - server caching，將靜態檔案 cache 在 server-side disk
      - reverse proxies (Varnish, nginx)
      - cloud provider (Firebase, AWS, Azure)
      - CDN edge servers
  - 在真正需要執行之前預先下載好資源，要用時可以直接開始執行，使用 Resource Hints `preload`, `prefetch`，例如 prefetch 分頁的下一頁會用到的資源
  - 預先與資源服務器建立連線，要用時可以更快下載到資源，使用 Resource Hints `dns-prefetch`, `preconnect`，例如[早一點與 third-party 建立連線](https://web.dev/optimize-lcp/#establish-third-party-connections-early)
  - 減少 HTTP request 數量
  - 加速後端伺服器回應速度，優化 DB query
- 減少資源體積，更快取得及執行資源內容
  - 減少 server remote API response data 體積，例如不拿多餘用不到的資料
  - dynamic import，在需要用到時才載入 module
  - route-based code splitting，特定頁面只載入相關的腳本與樣式檔
  - tree shaking
  - partial import，只從 module 中載入需要用的 function，不是載入整個 module
  - 改善 webpack chunk 設定，減少 bundle size
  - 改善套件使用方式，盡量挑選體積小的套件，移除多餘引用的套件
  - 分析 bundle size 工具：
    - [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)
    - [source-map-explorer](https://www.npmjs.com/package/source-map-explorer)
    - [Import Cost VSCode Extension](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
  - 精簡程式碼: 刪除用不到的程式碼、minify js & css
  - [減少 polyfills 體積](https://web.dev/serve-modern-code-to-modern-browsers/)
    - 使用@babel/preset-env 只針對要支援的瀏覽器使用 polyfill
- 瀏覽器在下載或執行資源(js, css)時會暫停解析 HTML DOM 及延遲渲染畫面(**render-blocking**)，因此減少 render-blocking 時間也是一個方法
  - CSR 因為有很多 JS 需要在瀏覽器執行，對 LCP 影響較大，可以考慮改成使用 server-side rendering 或是其他 pre-rendering 方式，但可能也會對 TTFB 及 TTI 造成負面影響，需要評估是否適合自己的專案
  - script tag 使用 async 屬性，讓 js 可以在背景下載不阻擋渲染畫面
  - script tag 使用 defer 屬性，讓非關鍵的 js 可以延遲執行不阻擋渲染畫面
  - [延遲載入非關鍵的 CSS](https://web.dev/optimize-lcp/#defer-non-critical-css)
    - [loadCSS](https://github.com/filamentgroup/loadCSS)
  - 加速取得資源的時間以及減少資源體積也可以幫助減少 render-blocking 時間
- 優化圖片
  - [響應式圖檔](https://web.dev/serve-responsive-images/)，根據裝置尺寸拿取對應足夠的圖片尺寸
  - 使用 WebP、AVIF 格式
  - Image Server ([Cloudinary](https://cloudinary.com/))
  - lazy loading
  - 壓縮圖片([Imagemin](https://web.dev/use-imagemin-to-compress-images/))

## 互動反應能力(Interactivity)

目標是要評估網頁多快可以回應使用者的互動行為，例如按下按鈕之後多久會有反應。

### [First Input Delay (FID)](https://web.dev/fid/)

`core web vital`

使用者首次與網站互動，直到瀏覽器回應互動事件的時間差。這個指標會因為真實使用者首次互動行為而有所不同，所以只能實測(field)無法模擬測量(lab)。在開發階段因為沒有辦法實測，可以藉由優化有關聯性的 TBT 指標來協助改善 FID。

![FID.svg](./2021-11-14-a-guidebook-to-optimize-web-vitals-assets/FID.svg)

### [Time to Interactive (TTI)](https://web.dev/tti/)

從網頁開始載入到長時間任務(long tasks)都已經結束而且可以回應使用者互動所花的時間。

長時間任務(long tasks)是指超過 50ms 的任務，可能是解析 HTML 建立 DOM Tree、解析 CSS 套用樣式、執行 JS 等。

### [Total Blocking Time (TBT)](https://web.dev/tbt/)

主執行緒被長時間任務(long tasks)阻塞的總時間，阻塞的時間是指長時間任務中超過 50ms 的時間(long task time - 50ms)，將每個 long task 阻塞時間做總和就是 TBT，這段時間被視為無法回應使用者互動的時間。

### 優化方法

延遲互動回應時間的主要原因是繁重的 js 執行任務佔用著主執行緒，讓瀏覽器無法處理使用者的互動行為事件，因此**[減少主執行緒負擔](https://web.dev/mainthread-work-breakdown/)可以有效改善**。

- 減少 JS 執行時間，可以參考[上述已經提到的方法](https://www.notion.so/Web-Vitals-2345c615d06945bd985eb2bf1033000f)
- 拆分 long task，code-split js bundle 拆分成多個可以非同步執行的小檔案(chunk)，配合 async, defer 屬性
- 延遲執行不重要的資源，例如使用 script tag defer 屬性
- 使用[web workers](https://developer.mozilla.org/en-US/docs/Web/API/Worker)，讓 js 在另一個背景執行緒執行，套件: [Comlink](https://github.com/GoogleChromeLabs/comlink)
- 先準備好互動行為需要的資料，例如盡量避免在互動時才去打 api fetch 資料
- Debounce
- Throttle

## 視覺穩定性(Visual Stability)

目標是要評估網頁上的元素是否發生未預期的位置改變而影響使用者的互動行為，例如要按下按鈕時突然跳出廣告。以及評估轉場或動畫的渲染有維持一定的 frame rate，畫面上每個狀態的改變是流暢的。

### [Cumulative Layout Shift (CLS)](https://web.dev/cls/)

`core web vital`

累計佈局偏移，畫面發生未預期排版移動的程度，例如突然滑出來的廣告就會有很大的影響，較低的 CLS 分數可以有助於視覺體驗上的舒適度。

![CLS.svg](./2021-11-14-a-guidebook-to-optimize-web-vitals-assets/CLS.svg)

### [Speed Index (SI)](https://web.dev/speed-index/)

網頁載入期間內容能多快被使用者看到，用來衡量視覺的流暢性。測量工具會在網頁載入期間錄製影片，計算每個 frame 在視覺上的內容完成進度。

### 優化方法

- img, video, iframe 設定 width, height 屬性，或是[寬高比](https://web.dev/optimize-cls/#images-without-dimensions)
- 避免在現有內容上方插入動態載入的內容，導致推擠到其他元件的排版，可以先預留好需要的空間([CSS aspect ratio boxes](https://css-tricks.com/aspect-ratio-boxes/))，或是將受影響的排版移到可視範圍之外
- 避免突然移動或蓋板的內容，例如廣告突然跳出來
- [防止 FOIT (flash of invisible text) 文字突然出現、FOUT (flash of unstyled text) 字體突然改變](https://web.dev/optimize-cls/#web-fonts-causing-foutfoit)
  - 使用`<link rel=preload>` 提早下載字體，@font-face 加上 `font-display: optional` ，[參考](https://web.dev/preload-optional-fonts/)
  - google fonts url 加上`&display=swap`
- 盡量使用`transform`做動畫

在實作視覺穩定性的改善通常會需要使用到[Chrome DevTools Performance panel](https://developer.chrome.com/docs/devtools/evaluate-performance/)，去分析每個 frame 細部的狀況來找到 root cause，[參考詳細如何 debug](https://web.dev/debug-layout-shifts/)。

## 總結

這篇文章將會跟著 Google 在 Web Vitals 上的新提案以及筆者自身的研究持續更新，如果有任何問題或建議都歡迎與我聯絡。

## Reference

[Web Vitals](https://web.dev/learn-web-vitals/)

[I/O Extended 2021 系列: Chrome DevTools & Web Vitals](https://www.youtube.com/watch?v=_o0Q-fUjeiA&t=27s&ab_channel=GoogleDevelopersTaiwan-Google%E9%96%8B%E7%99%BC%E4%BA%BA%E5%93%A1%E5%8F%B0%E7%81%A3%E9%A0%BB%E9%81%93)

[打造高速網站，從網站指標開始！(Speed Up Your App with Web Vitals) MOPCON 2021 逐字稿 | Summer。桑莫。夏天](https://cythilya.github.io/2021/10/24/mopcon-speed-up-your-app-with-web-vitals/?fbclid=IwAR3GXoUWjr9GXFaYZBjR4NMfiiucoGAIOtjSG8sRg02BFg86qlFF55u6fq4)
