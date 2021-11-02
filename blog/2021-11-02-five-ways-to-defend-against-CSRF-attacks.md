---
slug: five-ways-to-defend-against-CSRF-attacks
title: '防禦CSRF攻擊的五種方法'
author: Eric Deng
author_url: /about
author_image_url: /img/ericdeng.jpg
tags: [CSRF, cookie, security]
keywords: [CSRF, cookie, security]
---

![charles-deluvio-pjAH2Ax4uWk-unsplash.jpg](./2021-11-02-five-ways-to-defend-against-CSRF-attacks-assets/charles-deluvio-pjAH2Ax4uWk-unsplash.jpg)

## What is CSRF?

Cross Site Request Forgery 跨站請求偽造，也被稱為 one-click attack 或 session riding，通常縮寫為 CSRF 或 XSRF。

假設有兩個不同網域(domain)的網站：

- A 網站: 惡意網站，例如小遊戲網站
- B 網站: 受害目標網站，例如你做的網站或銀行網站

攻擊流程：

1. 使用者已經登入過 B 網站並且瀏覽器 cookie 中包含識別身份的 auth token
2. 駭客想辦法讓使用者在 A 網站上對 B 網站發出 API 請求 → 跨站請求，而且這個請求帶著 B 網站的 cookie 及 auth token→ 偽造身份
3. B 網站收到請求，確認 auth token 正確後繼續執行駭客預期的請求內容

用這個請求就可以讓使用者在使用 A 網站時可能是點擊一個按鈕甚至是載入一張圖片無意間就以自己的身份對 B 網站執行惡意攻擊，例如在登入過的銀行網站轉帳，如果 B 網站也沒察覺偽造的請求那這個攻擊就成功了

## 如何解決 CSRF 攻擊

1. 後端服務在 response header `Access-Control-Allow-Origin` 指定允許的 domain，瀏覽器會先發出 preflight 請求給 server 檢查 client domain 是否被允許，如果允許的話才會再發出真正的請求。
2. 瀏覽器會在 request header 加入`Referer` 及`Origin` 兩個欄位代表請求的來源 domain，server 可以檢查這兩個欄位的值是不是允許的 domain，雖然這兩個欄位是[Forbidden header name](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name) ，但仍有些[小技巧](https://www.trustedsec.com/blog/setting-the-referer-header-using-javascript/)可以修改，而且有些瀏覽器可能沒有這兩個欄位，所以只用這個方法並不安全。
3. set cookie with `SameSite=Strict or Lax`
   - Strict: 這個 cookie 只會跟著相同 domain 的請求送出，不會跟著 cross site request 一起送出去
   - Lax: 只允許特定方式的 cross site request 可以一起帶著送出去，特定方式包含：`<a>`, `<link rel="prerender">`, `<form method="GET">`，Chrome set cookie 預設`SameSite=Lax`
4. CSRF token: server 加密產生一個唯一且有時效性的 token，在前端載入頁面時或是在呼叫需要保護的 api 之前先跟 server 取得這個 token，再把 token 放進 api request header 中送給 server 檢查是合法 token 才接受請求。

   CSRF token 就像是一次性使用的密碼來讓請求多一層保護，所以特別需要注意取得 CSRF token 的 api 不能接受跨網域的請求，不能讓駭客有機會取得 CSRF token 否則一樣有風險。

   這個方法也是最有效的方法，實作上可以使用套件達成，例如 nodejs 的[csurf](http://expressjs.com/en/resources/middleware/csurf.html)。

5. Double submit cookie: 前端隨機產生一個 CSRF token，同時放進 cookie 以及每個 request header，server 檢查兩邊的 token 是相同的才接受請求，因為瀏覽器的設計駭客無法將偽造的 token 放進你的 domain 的 cookie，此時跨 domain 請求所帶的 cookie 中一定沒有正確的`csrftoken`。

這篇文章提供了 5 個防禦 CSRF 攻擊的方法，實務上也要考慮哪些方法適用在你的服務中，可以單獨使用也可以組合使用得到更好的保護。

另外，對於使用者來說養成登出網站的好習慣也可以降低遇到的風險喔！

## Reference

[CSRF 攻擊原理](https://medium.com/@Tommmmm/csrf-%E6%94%BB%E6%93%8A%E5%8E%9F%E7%90%86-d0f2a51810ca)

[SameSite cookies - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)

[零基礎資安系列（一）-認識 CSRF（Cross Site Request Forgery）](https://tech-blog.cymetrics.io/posts/jo/zerobased-cross-site-request-forgery/)

[Setting the 'Referer' Header Using JavaScript - TrustedSec](https://www.trustedsec.com/blog/setting-the-referer-header-using-javascript/)

[Prevent Cross-Site Request Forgery (CSRF) Attacks](https://auth0.com/blog/cross-site-request-forgery-csrf/#CSRF-Defenses-Strategies)
