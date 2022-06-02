const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};p();const d='<h2>How to use</h2><p>nav\u304B\u3089\u30AB\u30C6\u30B4\u30EA\u3092\u9078\u3073\u554F\u984C\u3092\u8868\u793A\u3055\u305B\u307E\u3059</p><h2>How to run locally</h2><ol><li>\u30BF\u30FC\u30DF\u30CA\u30EB\u3067<code>git clone https://github.com/OkazakiRui/sandbox-js.git</code>\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002</li><li><code>npm i</code>\u3067<code>node_modules</code>\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u3002</li><li><code>npm run dev</code>\u3067<a href="http://localhost:3000">localhost:3000</a>\u306B\u3066\u30B5\u30FC\u30D0\u30FC\u3092\u7ACB\u3061\u4E0A\u3052\u307E\u3059\u3002</li></ol>',u=({contentElement:r,problems:o,locationHref:n})=>{var i,s;const c=(s=(i=n||window.location.href)==null?void 0:i.split("#")[1])==null?void 0:s.split("-");if(!c)return r.innerHTML=d;const[e,t]=c;r.innerHTML=o[e][t]||"<h2>404 Not Found</h2>"},h=`
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
[1, 2, 3] // input
[1, 2, 4] // output

[1, 2, 3, 4, 5, 10] // input
[1, 2, 3, 4, 5, 11] // output
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
[1, 2, 3] // input
6 // output

[1, 2, 3, 4, 5, 10] // input
200 // output
</code>
</pre>
`,f={plus_one:h,maximum_product_of_three_numbers:m},y=({category:r,titles:o})=>`<li class="nav-item"><span>${r}</span><ul>${o.map(n=>'<li><a href="#'+r+"-"+n+'">'+n+"</a></li>").join().replaceAll(",","")}</ul></li>`,l={array:f},a=document.getElementById("content");window.addEventListener("load",()=>{u({contentElement:a,problems:l});const r=document.getElementById("categories");for(const o of Object.keys(l))r.innerHTML+=y({category:o,titles:Object.keys(l[o])});document.querySelectorAll("a").forEach(o=>o.addEventListener("click",n=>{n.preventDefault();const c=n.target.href;u({contentElement:a,problems:l,locationHref:c}),window.history.replaceState("","",c)}))});
