if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!s[e]&&(await new Promise(async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}),!s[e]))throw new Error(`Module ${e} didn’t register its module`);return s[e]},i=async(i,s)=>{const a=await Promise.all(i.map(e));s(1===a.length?a[0]:a)};i.toUrl=e=>`./${e}`;const s={require:Promise.resolve(i)};self.define=(i,a,r)=>{s[i]||(s[i]=new Promise(async s=>{let c={};const o={uri:location.origin+i.slice(1)},d=await Promise.all(a.map(i=>"exports"===i?c:"module"===i?o:e(i))),f=r(...d);c.default||(c.default=f),s(c)}))}}define("./sw.js",["./workbox-2aa9f459"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"images/codificacion (1).svg",revision:"3ff0e5526aea4e71ee3ed9eb15324c17"},{url:"images/codificacion.svg",revision:"3ff0e5526aea4e71ee3ed9eb15324c17"},{url:"images/hero-large.jpg",revision:"bf02a7601170733ad5dbeb8390c398d4"},{url:"images/hero-medium.jpg",revision:"bf02a7601170733ad5dbeb8390c398d4"},{url:"images/hero-small.jpg",revision:"bf02a7601170733ad5dbeb8390c398d4"},{url:"images/marcas/gobiernochile.webp",revision:"f99faf590c2e6cad4df93030f3837dea"},{url:"images/marcas/lascondes.webp",revision:"19af63ac8df5053b6565fe89ef347bd0"},{url:"images/marcas/puc.webp",revision:"0bdceeb52e6d77b0b69bd58891aa6acd"},{url:"images/marcas/saludcchc.webp",revision:"8c0eb016286eaf9c08757bbf80f5b223"},{url:"images/ordenador-portatil.svg",revision:"4e6e0a93b39e4ee7581e0036fbc0c338"},{url:"index.html",revision:"c35a537c339bef328eeef78d7048aae5"},{url:"index.js",revision:"18f17fc825b66530807a88d619868fd0"},{url:"mobile.css",revision:"d430e7e5fcdca3a3d26491f79c7e2896"},{url:"style.css",revision:"f088779e0372da93f2cec2bb415cd5ff"}],{})}));
//# sourceMappingURL=sw.js.map
