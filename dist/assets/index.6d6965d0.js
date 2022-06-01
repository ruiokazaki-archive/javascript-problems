const u=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};u();const s=({contentElement:i,problems:o,locationHref:n})=>{var r,l;const c=(l=(r=n||window.location.href)==null?void 0:r.split("#")[1])==null?void 0:l.split("-");if(!c)return i.innerHTML=o.home;const[e,t]=c;i.innerHTML=o[e][t]||"<h2>404 Not Found</h2>"},f=`<h2>How to use</h2>
<p>nav\u304B\u3089\u30AB\u30C6\u30B4\u30EA\u3092\u9078\u3073\u554F\u984C\u3092\u8868\u793A\u3055\u305B\u307E\u3059</p>
<h2>How to run locally</h2>
<ol>
  <li>
    \u30BF\u30FC\u30DF\u30CA\u30EB\u3067<code
      >git clone https://github.com/OkazakiRui/sandbox-js.git</code
    >\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002
  </li>
  <li>
    <code>npm i</code>\u3067<code>node_modules</code>\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u307E\u3059\u3002
  </li>
  <li>
    <code>npm run dev</code>\u3067
    <a href="http://localhost:3000">localhost:3000</a>
    \u306B\u3066\u30B5\u30FC\u30D0\u30FC\u3092\u7ACB\u3061\u4E0A\u3052\u307E\u3059\u3002
  </li>
</ol>`,h={test:"<h2>dom-test</h2>"},d={home:f,dom:h},a=document.getElementById("content");window.addEventListener("load",()=>s({contentElement:a,problems:d}));document.querySelectorAll("a").forEach(i=>i.addEventListener("click",o=>{o.preventDefault();const n=o.target.href;s({contentElement:a,problems:d,locationHref:n}),window.history.replaceState("","",n)}));
