const h=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}};h();const l='<h2>How to use</h2><p>nav\u304B\u3089\u30AB\u30C6\u30B4\u30EA\u3092\u9078\u3073\u554F\u984C\u3092\u8868\u793A\u3055\u305B\u307E\u3059</p><h2>How to run locally</h2><ol><li>\u30BF\u30FC\u30DF\u30CA\u30EB\u3067<code>git clone https://github.com/OkazakiRui/sandbox-js.git</code>\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002</li><li><code>npm i</code>\u3067<code>node_modules</code>\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u3002</li><li><code>npm run dev</code>\u3067<a href="http://localhost:3000">localhost:3000</a>\u306B\u3066\u30B5\u30FC\u30D0\u30FC\u3092\u7ACB\u3061\u4E0A\u3052\u307E\u3059\u3002</li></ol>',i=({contentElement:n,problems:t,locationHref:o})=>{var p,d;const c=(d=(p=o||window.location.href)==null?void 0:p.split("#")[1])==null?void 0:d.split("-");if(!c)return n.innerHTML=l;const[e,r]=c;n.innerHTML=t[e][r]||"<h2>404 Not Found</h2>"},u=`
<h2>plus_one</h2>

<h3>\u554F\u984C\u6587</h3>
<p>\u914D\u5217\u304C\u4E0E\u3048\u3089\u308C\u3001\u305D\u306E\u672B\u5C3E\u306B1\u3092\u8FFD\u52A0\u3059\u308B\u95A2\u6570\u3092\u4F5C\u6210\u305B\u3088\u3002</p>

<h3>\u5236\u7D04</h3>
<p>\u95A2\u6570\u306E\u5F15\u6570\u306B\u306F\u914D\u5217\u3092\u53D7\u3051\u53D6\u308A\u3001\u8FD4\u308A\u5024\u306B\u914D\u5217\u3092\u8FD4\u3059\u3053\u3068\u3068\u3059\u308B</p>
<pre>
@param {number[]}
@return {number[]}
</pre>

<h3>\u5165\u51FA\u529B\u4F8B</h3>
<pre>
<code>
[1, 2, 3] // param
[1, 2, 4] // return

[1, 2, 3, 4, 5, 10] // param
[1, 2, 3, 4, 5, 11] // return
</code>
</pre>
`,m=`
<h2>maximum_product_of_three_numbers</h2>

<h3>\u554F\u984C\u6587</h3>
<p>\u7A4D\u304C\u6700\u5927\u3067\u3042\u308B3\u3064\u306E\u6570\u5024\u3092\u898B\u3064\u3051\u3066\u3001\u6700\u5927\u306E\u7A4D\u3092\u51FA\u529B\u3059\u308B\u95A2\u6570\u3092\u4F5C\u6210\u305B\u3088\u3002</p>

<h3>\u5236\u7D04</h3>
<p>\u95A2\u6570\u306E\u5F15\u6570\u306B\u306F\u914D\u5217\u3092\u53D7\u3051\u53D6\u308A\u3001\u8FD4\u308A\u5024\u306B\u5024\u3092\u8FD4\u3059\u3053\u3068\u3068\u3059\u308B</p>
<pre>
@param {number[]}
@return {number}
</pre>

<h3>\u5165\u51FA\u529B\u4F8B</h3>
<pre>
<code>
[1, 2, 3] // param
6 // return

[1, 2, 3, 4, 5, 10] // param
200 // return
</code>
</pre>
`,f=`
<h2>reverse_array</h2>

<h3>\u554F\u984C\u6587</h3>
<p>\u914D\u5217\u304C\u4E0E\u3048\u3089\u308C\u3001\u914D\u5217\u306E\u5185\u5BB9\u3092\u53CD\u8EE2\u3055\u305B\u308B\u95A2\u6570\u3092\u4F5C\u6210\u305B\u3088\u3002</p>

<h3>\u5236\u7D04</h3>
<p>\u95A2\u6570\u306E\u5F15\u6570\u306B\u306F\u914D\u5217\u3092\u53D7\u3051\u53D6\u308A\u3001\u8FD4\u308A\u5024\u306B\u914D\u5217\u3092\u8FD4\u3059\u3053\u3068\u3068\u3059\u308B</p>
<pre>
@param {number[]}
@return {number[]}
</pre>

<h3>\u5165\u51FA\u529B\u4F8B</h3>
<pre>
<code>
[1, 2, 3] // param
[3, 2, 1] // return

[1, 2, 3, 4, 5, 10] // param
[10, 5, 4, 3, 2, 1] // return
</code>
</pre>
`,g=`
<h2>exclude_negative_numbers</h2>

<h3>\u554F\u984C\u6587</h3>
<p>\u914D\u5217\u304C\u4E0E\u3048\u3089\u308C\u3001\u8CA0\u306E\u5024\u3092\u9664\u304F\u95A2\u6570\u3092\u4F5C\u6210\u305B\u3088</p>

<h3>\u5236\u7D04</h3>
<p>\u95A2\u6570\u306E\u5F15\u6570\u306B\u306F\u914D\u5217\u3092\u53D7\u3051\u53D6\u308A\u3001\u8FD4\u308A\u5024\u306B\u914D\u5217\u3092\u8FD4\u3059\u3053\u3068\u3068\u3059\u308B</p>
<pre>
@param {number[]}
@return {number[]}
</pre>

<h3>\u5165\u51FA\u529B\u4F8B</h3>
<pre>
<code>
[1, 2, -3] // param
[1, 2] // return

[1, 2, -3, 4, -5, 10] // param
[1, 2, 4, 10] // return
</code>
</pre>
`,y={plus_one:u,maximum_product_of_three_numbers:m,reverse_array:f,exclude_negative_numbers:g},_=`
<h2>background_color_change</h2>

<h3>\u554F\u984C\u6587</h3>
<p>\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u80CC\u666F\u8272\u304C\u9806\u756A\u306B\u5909\u66F4\u3055\u308C\u308B\u95A2\u6570\u3092\u4F5C\u6210\u3057\u306A\u3055\u3044</p>

<h3>\u5236\u7D04</h3>
<p>\u4F5C\u6210\u3057\u305F\u95A2\u6570\u306F<code>\u30DC\u30BF\u30F3.addEventListener("click", \u95A2\u6570)</code>\u3067\u52D5\u4F5C\u3059\u308B\u3088\u3046\u306B\u3057\u306A\u3055\u3044\u3002</p>
<p>\u95A2\u6570\u306E\u5F15\u6570\u306B\u306F\u30AB\u30E9\u30FC\u30B3\u30FC\u30C9\u304C\u5165\u3063\u305F\u914D\u5217\u3092\u6E21\u3059\u3053\u3068\u3068\u3059\u308B</p>
<pre>
@param {string[]}
@return {void}
</pre>

<h3>\u5165\u51FA\u529B\u4F8B</h3>
<pre>
<code>
["#EF4444", "#22C55E", "#3B82F6", "#EC4899"] // param
// return
</code>
</pre>
`,b=`
<h2>stapwatch</h2>

<h3>\u554F\u984C\u6587</h3>
<p>\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u30BF\u30A4\u30DE\u30FC\u304C\u9032\u307F\u3001\u3082\u3046\u4E00\u5EA6\u62BC\u3059\u3068\u30BF\u30A4\u30DE\u30FC\u304C\u6B62\u307E\u308B\u30B9\u30C8\u30C3\u30D7\u30A6\u30A9\u30C3\u30C1\u3092\u4F5C\u6210\u3057\u3066\u304F\u3060\u3055\u3044</p>

<h3>\u5236\u7D04</h3>
<p>\u4F5C\u6210\u3057\u305F\u95A2\u6570\u306F<code>\u30DC\u30BF\u30F3.addEventListener("click", \u95A2\u6570)</code>\u3067\u52D5\u4F5C\u3059\u308B\u3088\u3046\u306B\u3057\u306A\u3055\u3044\u3002</p>
<p>\u95A2\u6570\u306E\u5F15\u6570\u306B\u306F\u6642\u9593\u3092\u8868\u793A\u3055\u305B\u305F\u3044\u8981\u7D20\u3092\u6E21\u3059\u3053\u3068\u3068\u3059\u308B</p>
<pre>
@param {HTMLElement}
@return {void}
</pre>

<h3>\u5165\u51FA\u529B\u4F8B</h3>
<pre>
<code>
document.getElementById("display") // param
// return
</code>
</pre>
`,v=`
<h2>random_integer</h2>

<h3>\u554F\u984C\u6587</h3>
<p>\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u753B\u9762\u306B\u30E9\u30F3\u30C0\u30E0\u306A\u6570\u5B57\u3092\u8868\u793A\u3059\u308B\u30DC\u30BF\u30F3\u3092\u4F5C\u6210\u3057\u306A\u3055\u3044</p>

<h3>\u5236\u7D04</h3>
<p>\u8868\u793A\u3055\u305B\u308B\u6570\u5B57\u306F\u6574\u6570\u306B\u3059\u308B\u3053\u3068\uFF08\u5207\u308A\u4E0A\u3052\uFF09</p>
<p>\u4F5C\u6210\u3057\u305F\u95A2\u6570\u306F<code>\u30DC\u30BF\u30F3.addEventListener("click", \u95A2\u6570)</code>\u3067\u52D5\u4F5C\u3059\u308B\u3088\u3046\u306B\u3057\u306A\u3055\u3044\u3002</p>
<p>\u95A2\u6570\u306E\u5F15\u6570\u306B\u306F\u6570\u5B57\u3092\u8868\u793A\u3055\u305B\u305F\u3044\u8981\u7D20\u3092\u6E21\u3059\u3053\u3068\u3068\u3059\u308B</p>
<pre>
@param {HTMLElement}
@return {void}
</pre>

<h3>\u5165\u51FA\u529B\u4F8B</h3>
<pre>
<code>
document.getElementById("display") // param
// return
</code>
</pre>
`,E={background_color_change:_,stopwatch:b,random_integer:v},L=({category:n,titles:t})=>`<li class="nav-item"><span>${n}</span><ul>${t.map(o=>'<li><a href="#'+n+"-"+o+'">'+o+"</a></li>").join().replaceAll(",","")}</ul></li>`,a={array:y,dom:E},s=document.getElementById("content");window.addEventListener("load",()=>{i({contentElement:s,problems:a});const n=document.getElementById("categories");for(const t of Object.keys(a))n.innerHTML+=L({category:t,titles:Object.keys(a[t])});document.querySelectorAll("a").forEach(t=>t.addEventListener("click",o=>{o.preventDefault();const c=o.target.href;i({contentElement:s,problems:a,locationHref:c}),window.history.replaceState("","",c)}))});
