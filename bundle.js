var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let s=!1;const c=new Set;function i(e,t){s&&c.delete(t),t.parentNode!==e&&e.appendChild(t)}function l(e,t,n){s&&c.delete(t),(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function d(e){s?c.add(e):e.parentNode&&e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function p(){return e=" ",document.createTextNode(e);var e}function h(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function f(e,t){e.value=null==t?"":t}class b{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=u(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)l(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(d)}}function g(e){const t={};for(const n of e)t[n.name]=n.value;return t}let $;function v(e){$=e}const x=[],k=[],y=[],_=[],w=Promise.resolve();let E=!1;function C(e){y.push(e)}let N=!1;const A=new Set;function z(){if(!N){N=!0;do{for(let e=0;e<x.length;e+=1){const t=x[e];v(t),L(t.$$)}for(v(null),x.length=0;k.length;)k.pop()();for(let e=0;e<y.length;e+=1){const t=y[e];A.has(t)||(A.add(t),t())}y.length=0}while(x.length);for(;_.length;)_.pop()();E=!1,N=!1,A.clear()}}function L(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const M=new Set;function S(e,t){-1===e.$$.dirty[0]&&(x.push(e),E||(E=!0,w.then(z)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function T(a,i,l,u,p,h,m=[-1]){const f=$;v(a);const b=a.$$={fragment:null,ctx:null,props:h,update:e,not_equal:p,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:i.context||[]),callbacks:n(),dirty:m,skip_bound:!1};let g=!1;if(b.ctx=l?l(a,i.props||{},((e,t,...n)=>{const o=n.length?n[0]:t;return b.ctx&&p(b.ctx[e],b.ctx[e]=o)&&(!b.skip_bound&&b.bound[e]&&b.bound[e](o),g&&S(a,e)),t})):[],b.update(),g=!0,o(b.before_update),b.fragment=!!u&&u(b.ctx),i.target){if(i.hydrate){s=!0;const e=function(e){return Array.from(e.childNodes)}(i.target);b.fragment&&b.fragment.l(e),e.forEach(d)}else b.fragment&&b.fragment.c();i.intro&&((x=a.$$.fragment)&&x.i&&(M.delete(x),x.i(k))),function(e,n,a,s){const{fragment:c,on_mount:i,on_destroy:l,after_update:d}=e.$$;c&&c.m(n,a),s||C((()=>{const n=i.map(t).filter(r);l?l.push(...n):o(n),e.$$.on_mount=[]})),d.forEach(C)}(a,i.target,i.anchor,i.customElement),function(){s=!1;for(const e of c)e.parentNode.removeChild(e);c.clear()}(),z()}var x,k;v(f)}let q;"function"==typeof HTMLElement&&(q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(t).filter(r);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}})
/*!
     * escape-html
     * Copyright(c) 2012-2013 TJ Holowaychuk
     * Copyright(c) 2015 Andreas Lubbe
     * Copyright(c) 2015 Tiancheng "Timothy" Gu
     * MIT Licensed
     */;var H=/["'&<>]/,j=function(e){var t,n=""+e,o=H.exec(n);if(!o)return n;var r="",a=0,s=0;for(a=o.index;a<n.length;a++){switch(n.charCodeAt(a)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}s!==a&&(r+=n.substring(s,a)),s=a+1,r+=t}return s!==a?r+n.substring(s,a):r};function O(t){let n,r,a,s,c,g,$,v,x;return{c(){n=u("div"),r=u("textarea"),a=p(),s=u("div"),c=u("style"),c.textContent=".md-token{color:var(--mde-col);opacity:.5}.md-string{color: #ff9a3b}code{font-family:var(--mde-font,monospace);background:var(--mde-code-bg,#1e1e1e);color:var(--mde-col,#eee);}blockquote{background:var(--mde-blockquote-bg,#555);box-shadow:0.5rem 0 #666 inset}pre{background:#1e1e1e}",g=p(),this.c=e,m(r,"spellcheck","false"),m(r,"placeholder",t[0]),$=new b(null),m(s,"class","actual-text"),m(n,"class","wrapper")},m(e,o){l(e,n,o),i(n,r),f(r,t[1]),i(n,a),i(n,s),i(s,c),i(s,g),$.m(t[2],s),v||(x=[h(r,"input",t[5]),h(r,"keydown",t[3])],v=!0)},p(e,[t]){1&t&&m(r,"placeholder",e[0]),2&t&&f(r,e[1]),4&t&&$.p(e[2])},i:e,o:e,d(e){e&&d(n),v=!1,o(x)}}}function R(e,t,n){let o,r,{value:a=""}=t,{placeholder:s=""}=t;return e.$$set=e=>{"value"in e&&n(4,a=e.value),"placeholder"in e&&n(0,s=e.placeholder)},e.$$.update=()=>{16&e.$$.dirty&&n(1,o=a),2&e.$$.dirty&&n(2,r=(e=>j(e).replace(/^### (.*$)/gim,'<b><span class="md-token">###</span> $1</b>').replace(/^## (.*$)/gim,'<b><span class="md-token">##</span> $1</b>').replace(/^# (.*$)/gim,'<b><span class="md-token">#</span> $1</b>').replace(/\*(.*?)\*/gim,'<b><span class="md-token">*</span>$1<span class="md-token">*</span></b>').replace(/_(.*?)__*/gim,'<i><span class="md-token">_</span>$1<span class="md-token">_</span></i>').replace(/`(.+?)`/gim,'<code><span class="md-token">`</span>$1<span class="md-token">`</span></code>').replace(/!\[(.*?)\]\((.*?)\)/gim,"<img alt='$1' src='$2' />").replace(/\[(.*?)\]\((.*?)\)/gim,"[$1](<a href='$2'>$2</a>)").replace(/\n/gim,"<br />").trim())(o))},[s,o,r,function(){const e=new CustomEvent("value-change",{detail:o,bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(e)},a,function(){o=this.value,n(1,o),n(4,a)}]}class B extends q{constructor(e){super(),this.shadowRoot.innerHTML="<style>*{margin:0;padding:0;box-sizing:border-box}:root{--mde-bg:;--mde-col:;--mde-border-radius:;--mde-border:;--mde-focus-shadow:;--mde-font-size:;--mde-font:;--mde-line-height:}.wrapper{position:relative;display:block;height:100%;width:100%;border-radius:var(--mde-border-radius, 5px)}textarea,.actual-text{position:absolute;top:0;left:0;height:100%;width:100%;font-size:var(--mde-font-size, 1rem);line-height:var(--mde-line-height, 2rem);font-family:var(--mde-font, monospace);padding:0.5rem;margin:0;border:var(--mde-border, 3px solid transparent);border-radius:var(--mde-border-radius, 5px)}textarea{z-index:1;background:transparent;color:transparent;caret-color:var(--mde-col, #eee);resize:none;border-radius:var(--mde-border-radius, 5px);border:var(--mde-border, 3px solid transparent)}textarea::placeholder{color:var(--mde-col, #eee);opacity:0.4}textarea:focus{outline:none;box-shadow:var(--mde-focus-shadow, 0 0 0 2px rgba(0, 153, 255, 0.75))}textarea::selection{background:rgba(122, 122, 122, 0.2);color:transparent}.actual-text{z-index:0;background:var(--mde-bg, #333);color:var(--mde-col, #eee)}</style>",T(this,{target:this.shadowRoot,props:g(this.attributes),customElement:!0},R,O,a,{value:4,placeholder:0}),e&&(e.target&&l(e.target,this,e.anchor),e.props&&(this.$set(e.props),z()))}static get observedAttributes(){return["value","placeholder"]}get value(){return this.$$.ctx[4]}set value(e){this.$set({value:e}),z()}get placeholder(){return this.$$.ctx[0]}set placeholder(e){this.$set({placeholder:e}),z()}}return customElements.define("md-editor",B),{App:B}}();
//# sourceMappingURL=bundle.js.map