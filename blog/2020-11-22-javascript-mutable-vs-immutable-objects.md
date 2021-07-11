---
slug: javascript-mutable-vs-immutable-objects
title: '[Javascript] Mutable vs Immutable Objects'
author: Eric Deng
author_url: /about
author_image_url: /img/ericdeng.jpg
tags: [Javascript, Mutable, Immutable]
keywords: [Javascript, Mutable, Immutable]
---

介紹 JavaScript 的重要觀念 **_Mutable 及 Immutable Objects_**，並以範例解釋他們的差別。

<!--truncate-->

## Immutable object

- 所有的[原始資料型態(primitive)](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)，包含 null, undefined, string, number, boolean, symbol, bigint，都是 immutable。
- immutable object 是透過 call by value 的方式，會指向新分配的記憶體位置再存入值，因此 object 在建立之後就不可再被改變。
- 當重新賦值時，會指向新分配的記憶體位置，而非直接改變記憶體裡的值，原本的記憶體位置會被 garbage collection，換句話說他是被取代而不是直接被修改。

### example 1

```js
let a = 1; // 建立一個immutable object a
let b = a; // 創建一個新的記憶體位置，call by value a的值存入1，b指向這個新的位置
b = a + 1; // 創建一個新的記憶體位置，call by value a的值存入1+1=2，b指向這個新的位置，因此a不會被+1
console.log(a, b); // 1 2 -> 因為是不同的記憶體位置，改變b也不會影響到a
a = 3; // a指向新分配的記憶體位置裡面存放3，原先存放1的記憶體位置則會被垃圾回收
```

### example 2

```js
function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
}

let x = 10;
let y = 20;
swap(x, y);
console.log(x, y); // 10 20 -> a b是call by value，因此交換並不會影響到傳入的x y
```

## Mutable object

- 除了 primitive 之外的 object, array 都是 mutable。
- mutable object 是透過 call by sharing 的方式，共享同一個記憶體位置，因此 object 建立之後可再被改變。
- 需要注意的是，當重新賦值時，仍會指向新分配的記憶體位置，結束原本的記憶體共享，因此原本的 object 不會被改變。

### example 1

```js
let a = { number: 0 }; // 建立一個mutable object a
let b = a; // call by sharing，b與a共享記憶體位置
b.number++;
console.log(b); // {number: 1}
console.log(a); // {number: 1} -> 改變b的同時a也被改變了
b = { age: 27 }; // 對b重新賦值，b指向新的記憶體位置，結束與a共享記憶體位置
console.log(a); // {number: 1} -> a不會被改變
```

### example 2

```js
function add(obj) {
  obj.number++;
}

let o = { number: 10 };
add(o);
console.log(o.number); // 11 -> o與obj共享記憶體位置，因此改變obj的參數也同時會改變o的參數

function add(obj) {
  obj = {
    number: obj.number + 1,
  }; // 對obj重新賦值，obj指向新的記憶體位置，結束與o共享記憶體位置
}

let o = { number: 10 };
add(o);
console.log(o.number); // 10 -> o維持一樣的值
```

## Reference

[https://developer.mozilla.org/en-US/docs/Glossary/Mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)
[https://blog.techbridge.cc/2018/06/23/javascript-call-by-value-or-reference/](https://blog.techbridge.cc/2018/06/23/javascript-call-by-value-or-reference/)
