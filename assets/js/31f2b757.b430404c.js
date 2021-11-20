"use strict";(self.webpackChunkgcdeng_github_io=self.webpackChunkgcdeng_github_io||[]).push([[982],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return m}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),d=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},s=function(e){var r=d(e.components);return t.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return n?t.createElement(g,o(o({ref:r},s),{},{components:n})):t.createElement(g,o({ref:r},s))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<l;d++)o[d]=n[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6444:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return d},assets:function(){return s},toc:function(){return c},default:function(){return m}});var t=n(3117),a=n(102),l=(n(7294),n(3905)),o=["components"],p={slug:"solve-seo-problems-with-prerenderio",title:"Prerender.io\u5982\u4f55\u5e6b\u52a9CSR\u7684SEO - \u539f\u7406\u4ecb\u7d39\u8207\u4f7f\u7528\u6559\u5b78",description:"Client-Side Rendering (CSR) Single Page Application (SPA) \u6700\u5e38\u9047\u5230\u7684\u554f\u984c\u5c31\u662f SEO\uff0c\u89e3\u6c7a\u9019\u500b\u554f\u984c\u7684\u65b9\u6cd5\u6709\u5f88\u591a\u7a2e\uff0c\u5176\u4e2d\u4e00\u7a2e\u7372\u5f97 Google \u63a8\u85a6\u7684\u65b9\u6cd5\u662f**Prerender.io**\uff0c\u9019\u7bc7\u6587\u7ae0\u5c07\u6703\u4ecb\u7d39\u5b83\u7684\u904b\u4f5c\u539f\u7406\u4ee5\u53ca\u5982\u4f55\u958b\u59cb\u5c0e\u5165\u4f7f\u7528\u3002",image:"/img/2021-11-07-solve-seo-problems-with-prerenderio-assets/prerenderio.png",authors:"ericdeng",tags:["seo","prerender","csr","ssr","ssg","prerender.io","frontend","web"],keywords:["seo","prerender","csr","ssr","ssg","prerender.io","frontend","web"]},i=void 0,d={permalink:"/blog/solve-seo-problems-with-prerenderio",source:"@site/blog/2021-11-07-solve-seo-problems-with-prerenderio.md",title:"Prerender.io\u5982\u4f55\u5e6b\u52a9CSR\u7684SEO - \u539f\u7406\u4ecb\u7d39\u8207\u4f7f\u7528\u6559\u5b78",description:"Client-Side Rendering (CSR) Single Page Application (SPA) \u6700\u5e38\u9047\u5230\u7684\u554f\u984c\u5c31\u662f SEO\uff0c\u89e3\u6c7a\u9019\u500b\u554f\u984c\u7684\u65b9\u6cd5\u6709\u5f88\u591a\u7a2e\uff0c\u5176\u4e2d\u4e00\u7a2e\u7372\u5f97 Google \u63a8\u85a6\u7684\u65b9\u6cd5\u662f**Prerender.io**\uff0c\u9019\u7bc7\u6587\u7ae0\u5c07\u6703\u4ecb\u7d39\u5b83\u7684\u904b\u4f5c\u539f\u7406\u4ee5\u53ca\u5982\u4f55\u958b\u59cb\u5c0e\u5165\u4f7f\u7528\u3002",date:"2021-11-07T00:00:00.000Z",formattedDate:"November 7, 2021",tags:[{label:"seo",permalink:"/blog/tags/seo"},{label:"prerender",permalink:"/blog/tags/prerender"},{label:"csr",permalink:"/blog/tags/csr"},{label:"ssr",permalink:"/blog/tags/ssr"},{label:"ssg",permalink:"/blog/tags/ssg"},{label:"prerender.io",permalink:"/blog/tags/prerender-io"},{label:"frontend",permalink:"/blog/tags/frontend"},{label:"web",permalink:"/blog/tags/web"}],readingTime:8.92,truncated:!0,authors:[{name:"Eric Deng",url:"/",imageURL:"/img/ericdeng.jpg",key:"ericdeng"}],prevItem:{title:"[\u524d\u7aef\u512a\u5316\u7cfb\u5217]Web Vitals\u512a\u5316\u65b9\u6cd5\u61f6\u4eba\u5305",permalink:"/blog/a-guidebook-to-optimize-web-vitals"},nextItem:{title:"[\u524d\u7aef\u512a\u5316\u7cfb\u5217] \u4f7f\u7528async, defer\u5c6c\u6027\u52a0\u901f\u7db2\u9801\u8f09\u5165\u6642\u9593",permalink:"/blog/script-tag-async-defer-attributes"}},s={authorsImageUrls:[void 0]},c=[{value:"\u958b\u59cb\u4e4b\u524d\uff0c\u5148\u804a\u804a CSR \u7684 SEO \u554f\u984c",id:"\u958b\u59cb\u4e4b\u524d\u5148\u804a\u804a-csr-\u7684-seo-\u554f\u984c",children:[],level:2},{value:"Prerender.io \u904b\u4f5c\u539f\u7406 - Dynamic Rendering",id:"prerenderio-\u904b\u4f5c\u539f\u7406---dynamic-rendering",children:[{value:"\u8fa8\u8b58\u722c\u87f2\u7684\u65b9\u6cd5",id:"\u8fa8\u8b58\u722c\u87f2\u7684\u65b9\u6cd5",children:[],level:3},{value:"\u722c\u87f2\u7372\u53d6\u975c\u614b HTML \u7684\u65b9\u6cd5",id:"\u722c\u87f2\u7372\u53d6\u975c\u614b-html-\u7684\u65b9\u6cd5",children:[],level:3}],level:2},{value:"\u5982\u4f55\u958b\u59cb\u4f7f\u7528",id:"\u5982\u4f55\u958b\u59cb\u4f7f\u7528",children:[{value:"\u5728 Dev \u74b0\u5883",id:"\u5728-dev-\u74b0\u5883",children:[],level:3},{value:"\u5728 Stage \u74b0\u5883",id:"\u5728-stage-\u74b0\u5883",children:[],level:3}],level:2},{value:"Prerender.io \u7684\u512a\u7f3a\u9ede",id:"prerenderio-\u7684\u512a\u7f3a\u9ede",children:[],level:2},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],u={toc:c};function m(e){var r=e.components,p=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},u,p,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Client-Side Rendering (CSR) Single Page Application (SPA) \u6700\u5e38\u9047\u5230\u7684\u554f\u984c\u5c31\u662f SEO\uff0c\u89e3\u6c7a\u9019\u500b\u554f\u984c\u7684\u65b9\u6cd5\u6709\u5f88\u591a\u7a2e\uff0c\u5176\u4e2d\u4e00\u7a2e\u7372\u5f97 Google \u63a8\u85a6\u7684\u65b9\u6cd5\u662f",(0,l.kt)("strong",{parentName:"p"},"Prerender.io"),"\uff0c\u9019\u7bc7\u6587\u7ae0\u5c07\u6703\u4ecb\u7d39\u5b83\u7684\u904b\u4f5c\u539f\u7406\u4ee5\u53ca\u5982\u4f55\u958b\u59cb\u5c0e\u5165\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"\u958b\u59cb\u4e4b\u524d\u5148\u804a\u804a-csr-\u7684-seo-\u554f\u984c"},"\u958b\u59cb\u4e4b\u524d\uff0c\u5148\u804a\u804a CSR \u7684 SEO \u554f\u984c"),(0,l.kt)("p",null,"Client-Side Rendering (CSR) \u662f\u904e\u53bb\u5e7e\u5e74\u6d41\u884c\u7684\u524d\u7aef\u958b\u767c\u65b9\u5f0f\uff0c\u700f\u89bd\u5668\u6703\u6536\u5230\u4e00\u500b body \u88e1\u53ea\u6709\u6839\u5143\u4ef6\u4ee5\u53ca\u5f15\u5165\u6253\u5305\u597d\u7684 JS \u7684 HTML\uff0c\u89e3\u6790 HTML \u5f8c\u958b\u59cb\u4e0b\u8f09\u53ca\u57f7\u884c JS \u5c07\u5167\u5bb9\u6e32\u67d3\u9032\u6839\u5143\u4ef6\u4e2d\uff0c\u5927\u90e8\u5206\u7684\u904b\u7b97\u8cc7\u6e90\u6703\u96c6\u4e2d\u5728\u700f\u89bd\u5668\u4e0a\uff0c\u800c\u6700\u5927\u7684\u554f\u984c\u662f\u641c\u5c0b\u5f15\u64ce\u505a SEO \u7684\u722c\u87f2\u4e26\u4e0d\u6703\u7b49\u5f85 AJAX \u8ddf JS \u6e32\u67d3\u597d\u5167\u5bb9\u624d\u958b\u59cb\u8490\u96c6\u8cc7\u6599\uff0c\u4ed6\u53ea\u6703\u770b\u5230 HTML \u4e2d\u4e00\u500b\u7a7a\u7a7a\u7684\u6839\u5143\u4ef6\uff0c\u6c92\u6709\u8cc7\u6599\u53ef\u4ee5\u7d66\u4ed6\u505a Index\uff0c\u96d6\u7136 Google Search \u5f8c\u4f86\u4e5f\u6709",(0,l.kt)("a",{parentName:"p",href:"https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics"},"\u65b0\u7684\u722c\u87f2\u6a5f\u5236"),"\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u4f46\u722c\u87f2\u4e5f\u6709",(0,l.kt)("a",{parentName:"p",href:"https://prerender.io/crawl-budget-seo/"},"\u8cc7\u6e90\u9810\u7b97"),"(Crawl Budget)\u9650\u5236\uff0cCSR \u9700\u8981\u82b1\u8cbb\u5927\u91cf\u722c\u87f2\u904b\u7b97\u8cc7\u6e90\uff0c\u5c0e\u81f4 Index \u6703\u9700\u8981\u5f88\u591a\u6642\u9593\u751a\u81f3\u6709\u4e9b\u9801\u9762\u4e5f\u7121\u6cd5\u505a Index\uff0c\u53e6\u5916\u4e00\u500b\u554f\u984c\u662f\u793e\u4ea4\u5a92\u9ad4\u4f8b\u5982 FB, Twitter \u9700\u8981\u7684",(0,l.kt)("a",{parentName:"p",href:"https://ahrefs.com/blog/open-graph-meta-tags/"},"open graph meta tag"),"\u5982\u679c\u662f CSR \u52d5\u614b\u7522\u751f\u7684\u8a71\u4e00\u958b\u59cb\u4e5f\u6703\u62ff\u4e0d\u5230\uff0c\u65bc\u662f\u958b\u59cb\u6709\u4eba\u63d0\u51fa\u5f88\u591a\u4e8b\u5148\u6e32\u67d3(pre-rendering)\u597d\u975c\u614b HTML \u518d\u9001\u7d66 client \u7684\u89e3\u6cd5\uff0c\u4ee5\u4e0b\u5217\u8209\u5e7e\u7a2e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Pre-build \u6216\u7a31 Static Site Generator (SSG)\uff0c\u662f\u5728 build-time \u6e96\u5099\u597d\u6bcf\u500b\u8def\u7531(Route)\u9700\u8981\u7684\u8cc7\u6599\u4e26\u5efa\u7acb\u51fa\u5b8c\u6574\u7684\u975c\u614b HTML\uff0cserver \u6536\u5230\u8acb\u6c42\u6642\u76f4\u63a5\u56de\u50b3\u5df2\u7d93\u5efa\u7acb\u597d\u7684 HTML\uff0c\u5e38\u898b\u7684\u5de5\u5177\u5305\u542b",(0,l.kt)("a",{parentName:"li",href:"https://github.com/stereobooster/react-snap"},"react-snap"),"\uff0c",(0,l.kt)("a",{parentName:"li",href:"https://www.11ty.dev/"},"Eleventy"),"\uff0c\u9019\u500b\u65b9\u6cd5\u7684\u512a\u9ede\u5305\u542b\u53ef\u4ee5\u5728 CDN cache HTML \u7e2e\u77ed\u8acb\u6c42\u56de\u50b3\u6642\u9593\u4ee5\u53ca",(0,l.kt)("a",{parentName:"li",href:"https://web.dev/fcp/"},"First Contentful Paint (FCP)"),"\u6642\u9593\uff0c\u7f3a\u9ede\u5247\u662f\u56e0\u70ba\u662f\u5728 build-time \u7522\u751f HTML\uff0c\u6bcf\u6b21\u6709\u5167\u5bb9\u8b8a\u52d5\u90fd\u8981\u91cd build\uff0c\u5c0d\u65bc\u5167\u5bb9\u8b8a\u52d5\u983b\u7387\u9ad8\u7684\u7db2\u7ad9\u6703\u5f88\u9ebb\u7169\uff0c\u4e5f\u6703\u5ef6\u9577 build \u7684\u6642\u9593\u3002"),(0,l.kt)("li",{parentName:"ol"},"Server-Side Rendering (SSR)\uff0c\u76f8\u5c0d\u65bc SSG \u4f86\u8aaa\u5b83\u5247\u662f\u5728 run-time \u5efa\u7acb\u597d HTML\uff0c\u7576 server \u6536\u5230\u67d0\u500b\u8def\u7531\u7684\u8acb\u6c42\u5f8c\u958b\u59cb\u6e96\u5099\u9700\u8981\u7684\u8cc7\u6599\u4e26\u5efa\u7acb\u597d HTML \u56de\u50b3\u7d66 client\uff0c\u89e3\u6c7a\u4e86 SSG \u7684\u554f\u984c\u540c\u6642\u7e7c\u627f\u5176\u512a\u9ede\uff0c\u4f46\u4e5f\u6709\u5b83\u672c\u8eab\u7684\u7684\u554f\u984c\uff0c\u5c31\u662f\u6703\u63d0\u5347\u958b\u767c\u8907\u96dc\u5ea6\uff0c\u4ee5\u53ca\u73fe\u6709\u7684 CSR \u5c08\u6848\u96e3\u4ee5\u8f49\u63db\u6210 SSR \u67b6\u69cb\uff0c\u5e38\u898b\u7684\u5de5\u5177\u6846\u67b6\u5305\u542b React \u7684",(0,l.kt)("a",{parentName:"li",href:"https://nextjs.org/"},"Next.js"),"\uff0cVue \u7684",(0,l.kt)("a",{parentName:"li",href:"https://nuxtjs.org/"},"Nuxt.js"),"\u3002\uff08\u4e0d\u904e\u9019\u985e\u6846\u67b6\u9084\u662f\u6709\u5f88\u591a\u5f88\u9999\u7684\u7279\u8272\uff09"),(0,l.kt)("li",{parentName:"ol"},"Prerender.io")),(0,l.kt)("h2",{id:"prerenderio-\u904b\u4f5c\u539f\u7406---dynamic-rendering"},"Prerender.io \u904b\u4f5c\u539f\u7406 - Dynamic Rendering"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Screen Shot 2021-11-08 at 11.11.38 AM.png",src:n(6475).Z})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://prerender.io/"},"Prerender.io"),"\u904b\u4f5c\u6d41\u7a0b\u662f\u7576\u524d\u7aef\u7684 web server \u6536\u5230\u8acb\u6c42\u6642\u900f\u904e Prerender-node Middleware \u53bb\u8fa8\u8b58\u9019\u500b\u8acb\u6c42\u662f\u5f9e\u700f\u89bd\u5668\u9084\u662f\u5f9e\u722c\u87f2\u767c\u51fa\u7684\uff0c\u5982\u679c\u662f\u700f\u89bd\u5668\u5c31\u4f9d\u7167\u539f\u672c\u7684 CSR \u6a5f\u5236\uff0c\u5982\u679c\u662f\u722c\u87f2\u624d\u9700\u8981\u505a prerender\uff0c\u6703\u59d4\u8a17 Prerender.io cloud service \u5e6b\u6211\u5011\u6e32\u67d3\u51fa\u975c\u614b HTML \u518d\u56de\u50b3\u7d66 web server \u7136\u5f8c\u518d\u56de\u7d66\u722c\u87f2\uff0c\u9019\u6a23\u7684\u6e32\u67d3\u65b9\u5f0f\u7a31\u70ba",(0,l.kt)("a",{parentName:"p",href:"https://developers.google.com/search/docs/advanced/javascript/dynamic-rendering"},"Dynamic Rendering"),"\u3002"),(0,l.kt)("h3",{id:"\u8fa8\u8b58\u722c\u87f2\u7684\u65b9\u6cd5"},"\u8fa8\u8b58\u722c\u87f2\u7684\u65b9\u6cd5"),(0,l.kt)("p",null,"\u5229\u7528 request header \u4e2d user-agent \u7684\u503c\uff0c\u5982\u679c\u662f google search \u7684\u722c\u87f2\u6703\u5e36\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},"googlebot")," \uff0c\u76ee\u524d\u652f\u63f4\u7684\u722c\u87f2\u6709\u9019\u4e9b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"prerender.crawlerUserAgents = [\n  'googlebot',\n  'Yahoo! Slurp',\n  'bingbot',\n  'yandex',\n  'baiduspider',\n  'facebookexternalhit',\n  'twitterbot',\n  'rogerbot',\n  'linkedinbot',\n  'embedly',\n  'quora link preview',\n  'showyoubot',\n  'outbrain',\n  'pinterest/0.',\n  'developers.google.com/+/web/snippet',\n  'slackbot',\n  'vkShare',\n  'W3C_Validator',\n  'redditbot',\n  'Applebot',\n  'WhatsApp',\n  'flipboard',\n  'tumblr',\n  'bitlybot',\n  'SkypeUriPreview',\n  'nuzzel',\n  'Discordbot',\n  'Google Page Speed',\n  'Qwantify',\n  'pinterestbot',\n  'Bitrix link preview',\n  'XING-contenttabreceiver',\n  'Chrome-Lighthouse',\n  'TelegramBot',\n];\n")),(0,l.kt)("h3",{id:"\u722c\u87f2\u7372\u53d6\u975c\u614b-html-\u7684\u65b9\u6cd5"},"\u722c\u87f2\u7372\u53d6\u975c\u614b HTML \u7684\u65b9\u6cd5"),(0,l.kt)("p",null,"\u6211\u5011\u7684 web server \u8981\u53bb\u6253 Prerender.io \u63d0\u4f9b\u7684 GET API \u4e26\u5e36\u4e0a\u722c\u87f2\u8acb\u6c42\u7684\u8def\u7531\uff0cPrerender.io \u6703\u958b\u4e00\u500b",(0,l.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"Headless Chrome"),"\u53bb\u8ddf\u6211\u5011\u7684 server \u8acb\u6c42\u8a72\u8def\u7531\u7684\u8cc7\u6599\u4f86\u6e32\u67d3 HTML\uff0c\u9019\u6bb5\u5176\u5be6\u7b49\u540c\u4f7f\u7528 Headless Chrome \u5728\u505a CSR\uff0c\u518d\u900f\u904e HTTP \u5206\u584a(chunk)\u50b3\u8f38\u5f9e\u539f\u672c\u7684 API \u56de\u50b3\u6e32\u67d3\u597d\u7684 HTML \u7d66\u6211\u5011\u7684 server\uff0cserver \u6536\u5230\u5f8c\u518d\u628a HTML \u56de\u8986\u7d66\u722c\u87f2\u7684\u8acb\u6c42\uff0c\u56e0\u6b64\u722c\u87f2\u5c31\u53ef\u4ee5\u6536\u5230\u6e32\u67d3\u597d\u7684\u975c\u614b HTML \u800c\u4e14\u4e0d\u5305\u542b JS \u6a94\u6848\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"prerender.plainResponse = function (response, callback) {\n  var content = '';\n\n  response.on('data', function (chunk) {\n    content += chunk;\n  });\n  response.on('end', function () {\n    response.body = content;\n    callback(null, response);\n  });\n};\n")),(0,l.kt)("h2",{id:"\u5982\u4f55\u958b\u59cb\u4f7f\u7528"},"\u5982\u4f55\u958b\u59cb\u4f7f\u7528"),(0,l.kt)("h3",{id:"\u5728-dev-\u74b0\u5883"},"\u5728 Dev \u74b0\u5883"),(0,l.kt)("p",null,"\u5148\u5728 local \u8dd1\u4e00\u53f0",(0,l.kt)("a",{parentName:"p",href:"https://github.com/prerender/prerender"},"Prerender Node Server"),"\uff0c\u5047\u8a2d\u958b\u8d77\u4f86\u7684 URL \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/prerender/prerender.git\ncd prerender\nnpm install\nnode server.js\n")),(0,l.kt)("p",null,"\u5b98\u65b9\u6709\u63d0\u4f9b\u591a\u7a2e\u8a9e\u8a00\u7684 open source server ",(0,l.kt)("a",{parentName:"p",href:"https://docs.prerender.io/article/12-middlewares"},"middleware"),"\uff0c\u53ef\u4ee5\u628a\u5b83\u5b89\u88dd\u9032\u6211\u5011\u7684\u524d\u7aef web server \u4e2d\uff0c\u5982\u679c\u4f60\u7684 server \u662f Node.js \u7684\u8a71\u53ef\u4ee5\u7528",(0,l.kt)("a",{parentName:"p",href:"https://github.com/prerender/prerender-node"},"prerender-node")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install prerender-node --save\n")),(0,l.kt)("p",null,"\u5f15\u5165 middleware"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"app.use(require('prerender-node'));\n")),(0,l.kt)("p",null,"middleware \u4e2d\u6703\u8b80\u53d6\u74b0\u5883\u8b8a\u6578 ",(0,l.kt)("inlineCode",{parentName:"p"},"process.env.PRERENDER_SERVICE_URL")," \u6240\u4ee5\u53ef\u4ee5\u628a\u5b83\u8a2d\u70ba ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," \uff0c\u6216\u662f\u76f4\u63a5\u8a2d\u5b9a middleware \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"prerenderServiceUrl")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const prerenderServiceUrl = 'http://localhost:3000';\napp.use(\n  require('prerender-node').set('prerenderServiceUrl', prerenderServiceUrl)\n);\n")),(0,l.kt)("p",null,"\u57f7\u884c curl \u6216\u662f\u4f7f\u7528 browser extension\uff0c\u4f8b\u5982",(0,l.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj?hl=zh-TW"},"ModHeader"),"\uff0c\u5728 header \u4e2d\u52a0\u5165 user-agent: ",(0,l.kt)("inlineCode",{parentName:"p"},"Googlebot"),"\uff0c\u53bb\u6253\u4f60\u7684 service \u67d0\u500b\u9801\u9762\u8def\u7531\uff0c\u5047\u8a2d ",(0,l.kt)("inlineCode",{parentName:"p"},"https://www.example.com/")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -A Googlebot https://www.example.com/\n")),(0,l.kt)("p",null,"\u4f60\u7684 server \u6536\u5230\u8acb\u6c42\u5f8c\uff0cmiddleware \u5982\u679c\u5224\u65b7\u662f\u722c\u87f2\u5c31\u6703\u53bb\u6253 GET ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/https://www.example.com/")," \uff0c\u8acb\u6c42 Prerender Node Server \u6e32\u67d3 HTML\uff0c\u4e4b\u5f8c\u5c31\u53ef\u4ee5\u6536\u5230\u4e00\u500b\u5b8c\u6574\u6e32\u67d3\u597d\u6c92\u6709 script tag \u7684\u975c\u614b HTML\u3002"),(0,l.kt)("h3",{id:"\u5728-stage-\u74b0\u5883"},"\u5728 Stage \u74b0\u5883"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("a",{parentName:"p",href:"https://prerender.io/"},"Prerender.io"),"\u5b98\u7db2\u8a3b\u518a\u65b0\u5e33\u865f\u62ff\u5230 token\uff0cmiddleware \u4e2d\u6703\u8b80\u53d6\u74b0\u5883\u8b8a\u6578 ",(0,l.kt)("inlineCode",{parentName:"p"},"process.env.PRERENDER_TOKEN")," \u53ef\u4ee5\u628a\u4ed6\u8a2d\u5b9a\u70ba\u4f60\u7684 token\uff0c\u6216\u662f\u76f4\u63a5\u8a2d\u5b9a\u4ee5\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"prerenderToken"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"app.use(require('prerender-node').set('prerenderToken', 'YOUR_TOKEN'));\n")),(0,l.kt)("p",null,"\u901a\u5e38 Stage server \u4e0d\u6703\u5c0d\u5916\u516c\u958b\uff0c\u9700\u8981\u5148\u8a2d\u5b9a\u767d\u540d\u55ae\u5141\u8a31",(0,l.kt)("a",{parentName:"p",href:"https://docs.prerender.io/article/22-ip-addresses"},"Prerender.io \u7684 IP"),"\uff0c\u8b93\u4ed6\u5011\u7684 cloud service \u53ef\u4ee5\u6253\u9032 Stage server \u8acb\u6c42\u9801\u9762\u8cc7\u6599\uff0c\u518d\u7167\u8457\u4e00\u6a23\u7684\u65b9\u6cd5\u5e36\u8457\u722c\u87f2\u7684 user-agent \u53bb\u6253\u4f60\u7684 service\uff0cmiddleware \u6703\u53bb GET ",(0,l.kt)("inlineCode",{parentName:"p"},"https://service.prerender.io/https://www.example.com/")," \uff0c\u8acb\u6c42 cloud service \u6e32\u67d3 HTML\uff0c\u4e4b\u5f8c\u5c31\u53ef\u4ee5\u770b\u5230 stage \u74b0\u5883\u4e0b\u7684 prerendered HTML\uff0c\u5728\u5b98\u7db2\u7684 Dashboard \u4e0a\u4e5f\u53ef\u4ee5\u770b\u5230\u722c\u87f2\u8acb\u6c42\u7d00\u9304\u4ee5\u53ca\u88ab cache \u7684\u9801\u9762\u3002"),(0,l.kt)("p",null,"Stage \u8ddf Production \u4e5f\u53ef\u4ee5\u8003\u616e\u4e0d\u7528\u4ed6\u5011\u7684 cloud service\uff0c\u800c\u662f\u5167\u90e8\u7dad\u8b77",(0,l.kt)("a",{parentName:"p",href:"https://github.com/prerender/prerender"},"Prerender Node Server"),"\uff0c\u5728 middleware \u8a2d\u5b9a\u597d prerenderServiceUrl \u6253\u5230\u81ea\u5df1\u7684 Prerender Node Server\u3002"),(0,l.kt)("h2",{id:"prerenderio-\u7684\u512a\u7f3a\u9ede"},"Prerender.io \u7684\u512a\u7f3a\u9ede"),(0,l.kt)("p",null,"\u512a\u9ede"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5be6\u4f5c\u8d77\u4f86\u6bd4\u5176\u4ed6\u89e3\u6cd5\u66f4\u7c21\u55ae\u5feb\u901f\uff0c\u53ea\u8981\u8a2d\u5b9a server middleware\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4efb\u4f55\u73fe\u6709 CSR \u524d\u7aef\u6846\u67b6 React, Vue, Angular \u90fd\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4ecb\u9762\u4e0d\u932f\u7684 Dashboard\u3002"),(0,l.kt)("li",{parentName:"ul"},"Cloud service \u6709 cache \u6a5f\u5236\uff0c\u53ef\u4ee5\u5728 dashboard \u4e0a\u8a2d\u5b9a cache \u6642\u9593\uff0c\u5982\u679c\u6709\u7279\u5225\u9801\u9762\u9700\u6c42\u4e5f\u6709\u63d0\u4f9b\u5efa\u7acb\u8ddf\u6e05\u9664 cache \u7684 API\u3002")),(0,l.kt)("p",null,"\u7f3a\u9ede"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://prerender.io/pricing/"},"\u984d\u5916\u96f2\u7aef\u670d\u52d9\u6210\u672c"),"\u6216\u662f\u81ea\u5df1\u7dad\u904b",(0,l.kt)("a",{parentName:"li",href:"https://github.com/prerender/prerender"},"Prerender Node Server"),"\u6210\u672c\uff0c\u4e0d\u904e\u9019\u9805\u5c0d\u65bc\u4efb\u4f55 SSR \u65b9\u5f0f\u6216\u591a\u6216\u5c11\u90fd\u6703\u6709\u3002")),(0,l.kt)("h2",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,l.kt)("p",null,"\u9019\u7bc7\u6587\u7ae0\u8b1b\u89e3\u4e86 CSR \u9047\u5230\u7684\u554f\u984c\u8207 SSG\u3001SSR\u3001Prerender.io \u4e09\u7a2e\u89e3\u6c7a\u65b9\u6848\uff0c\u91dd\u5c0d Prerender.io \u4ecb\u7d39\u5b83\u7684\u904b\u4f5c\u539f\u7406 Dynamic Rendering\u3001middleware \u4f7f\u7528\u65b9\u5f0f\u4ee5\u53ca\u512a\u7f3a\u9ede\u6bd4\u8f03\uff0c\u6574\u9ad4\u4f86\u8aaa\u6211\u89ba\u5f97 Prerender.io \u662f\u4ecb\u65bc SSG \u8207 SSR \u4e4b\u9593\u89e3\u6c7a SEO \u554f\u984c\u7684\u6298\u8877\u65b9\u6848\uff0c\u5982\u679c\u662f\u4ee5\u4e0b\u60c5\u5883\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5177\u6709\u4e00\u5b9a\u898f\u6a21\u7684 CSR SPA \u5c08\u6848\u8f49\u63db SSR \u67b6\u69cb\u6210\u672c\u904e\u9ad8"),(0,l.kt)("li",{parentName:"ol"},"\u7db2\u7ad9\u5167\u5bb9\u8b8a\u66f4\u983b\u7387\u9ad8"),(0,l.kt)("li",{parentName:"ol"},"\u53ea\u60f3\u512a\u5316 SEO")),(0,l.kt)("p",null,"\u9019\u4e9b\u60c5\u6cc1\u4e0b Prerender.io \u6703\u662f\u500b\u5efa\u8b70\u53ef\u4ee5\u8003\u616e\u7684\u89e3\u6cd5\uff0c\u9084\u6709\u5176\u4ed6\u66f4\u591a\u7d30\u7bc0\u4e5f\u53ef\u4ee5\u5230\u4ed6\u5011\u7684\u5b98\u65b9\u6587\u4ef6\u770b\u770b\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6709\u4efb\u4f55\u554f\u984c\u6216\u5efa\u8b70\u6b61\u8fce\u8207\u6211\u806f\u7d61\u8a0e\u8ad6\u3002"),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://prerender.io/"},"Render Javascript With Search Engines in Mind | Prerender")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.prerender.io/"},"Prerender.io Knowledge Base")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/prerender/prerender"},"https://github.com/prerender/prerender")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/prerender/prerender-node"},"https://github.com/prerender/prerender-node")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developers.google.com/search/docs/advanced/javascript/dynamic-rendering"},"Dynamic Rendering | Google Search Central | Google Developers")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics"},"Understand JavaScript SEO Basics | Google Search Central")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://prerender.io/crawl-budget-seo/"},"Crawl Budget Optimization | Improve Crawl Health | Prerender")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2017/04/headless-chrome"},"Getting Started with Headless Chrome | Web | Google Developers")))}m.isMDXComponent=!0},6475:function(e,r,n){r.Z=n.p+"assets/images/prerenderio-eaa86238665cb1f1713fa10066d9e922.png"}}]);