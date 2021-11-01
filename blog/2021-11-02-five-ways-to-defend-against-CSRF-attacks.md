---
slug: five-ways-to-defend-against-CSRF-attacks
title: '防禦CSRF攻擊的五種方法'
author: Eric Deng
author_url: /about
author_image_url: /img/ericdeng.jpg
tags: [javascript, CSRF, web, security]
keywords: [javascript, CSRF, web, security]
---

## What is CSRF?

cross site request forgery 跨站請求偽造，也被稱為 one-click attack 或 session riding，通常縮寫為 CSRF 或 XSRF

假設兩個網站：

- A 網站: 惡意網站，例如小遊戲網站
- B 網站: 受害目標網站，例如你做的網站或銀行網站

攻擊流程：

1. 使用者已經登入過 B 網站並且瀏覽器 cookie 中包含識別身份的 auth token
2. 駭客想辦法讓使用者在 A 網站上對 B 網站發出 API 請求 → 跨站請求，而且這個請求帶著 B 網站的 cookie 及 auth token→ 偽造身份

用這個請求就可以讓使用者在用 A 網站時可能是點擊一個按鈕甚至是載入一張圖片無意間就以自己的身份對 B 網站執行惡意攻擊，例如在登入過的銀行網站轉帳，如果 B 網站也沒察覺偽造的請求那這個攻擊就成功了

## 如何解決 CSRF 攻擊

1. server 只允許相同 domain 的 request，不允許跨站請求，通常前後端服務會在一樣的 domain，後端設定 response header `Access-Control-Allow-Origin`: own domain

2. set cookie with `SameSite=Strict or Lax`

   - Strict: 這個 cookie 只會跟著相同 domain 的請求送出，不會跟著 cross site request 一起送出去
   - Lax: 只允許特定方式的 cross site request 可以一起帶著送出去，特定方式包含：`<a>`, `<link rel="prerender">`, `<form method="GET">`，Chrome set cookie 預設`SameSite=Lax`

3. CSRF token: server side 或 client side 隨機產生一個 token，client side 可以將這個 token 命名為`csrftoken`，同時將這個`csrftoken`寫進 cookie 以及每個 request header，server 只允許收到的 request header `csrftoken`與 cookie `csrftoken`相同，因為駭客沒辦法跨 domain set cookie，此時偽造的 request 所帶的 cookie 中一定沒有正確的`csrftoken`

4. 瀏覽器會在 request header 加入`referer: 發出請求的domain`，server 檢查 referer 是允許的，不過駭客也可以輕鬆偽造這個 referer 欄位

5. 使用者(你各位)養成登出網站的好習慣

## reference

[CSRF 攻擊原理](https://medium.com/@Tommmmm/csrf-%E6%94%BB%E6%93%8A%E5%8E%9F%E7%90%86-d0f2a51810ca)

[SameSite cookies - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)

[跨站请求伪造 - 维基百科，自由的百科全书](https://zh.wikipedia.org/zh-tw/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0)

[零基礎資安系列（一）-認識 CSRF（Cross Site Request Forgery）](https://tech-blog.cymetrics.io/posts/jo/zerobased-cross-site-request-forgery/)
