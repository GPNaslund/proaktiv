(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[114],{92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return S}});let r=n(6927),i=n(5909),o=i._(n(6006)),l=r._(n(2930)),a=n(6374),u=n(8891),d=n(168);n(7653);let s=n(5231);function c(e){return"/"===e[0]?e.slice(1):e}let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},p=new Set,m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",g=new Map([["default",function(e){let{config:t,src:n,width:r,quality:i}=e;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:(0,s.normalizePathTrailingSlash)(t.path)+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}],["imgix",function(e){let{config:t,src:n,width:r,quality:i}=e,o=new URL(""+t.path+c(n)),l=o.searchParams;return l.set("auto",l.getAll("auto").join(",")||"format"),l.set("fit",l.get("fit")||"max"),l.set("w",l.get("w")||r.toString()),i&&l.set("q",i.toString()),o.href}],["cloudinary",function(e){let{config:t,src:n,width:r,quality:i}=e,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return""+t.path+o+c(n)}],["akamai",function(e){let{config:t,src:n,width:r}=e;return""+t.path+c(n)+"?imwidth="+r}],["custom",function(e){let{src:t}=e;throw Error('Image with src "'+t+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}]]);function b(e){return void 0!==e.default}function h(e){let{config:t,src:n,unoptimized:r,layout:i,width:o,quality:l,sizes:a,loader:u}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:d,kind:s}=function(e,t,n,r){let{deviceSizes:i,allSizes:o}=e;if(r&&("fill"===n||"responsive"===n)){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t||"fill"===n||"responsive"===n)return{widths:i,kind:"w"};let l=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:l,kind:"x"}}(t,o,i,a),c=d.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:d.map((e,r)=>u({config:t,src:n,quality:l,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:u({config:t,src:n,quality:l,width:d[c]})}}function y(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function v(e){var t;let n=(null==(t=e.config)?void 0:t.loader)||"default",r=g.get(n);if(r)return r(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '+a.VALID_LOADERS.join(", ")+". Received: "+n)}function _(e,t,n,r,i,o){if(!e||e.src===m||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode&&(p.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){let{naturalWidth:t,naturalHeight:n}=e;i.current({naturalWidth:t,naturalHeight:n})}})}let w=e=>{let{imgAttributes:t,heightInt:n,widthInt:r,qualityInt:i,layout:l,className:a,imgStyle:u,blurStyle:d,isLazy:s,placeholder:c,loading:f,srcString:p,config:m,unoptimized:g,loader:b,onLoadingCompleteRef:y,setBlurComplete:v,setIntersection:w,onLoad:S,onError:k,isVisible:x,noscriptSizes:O,...A}=e;return f=s?"lazy":f,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",{...A,...t,decoding:"async","data-nimg":l,className:a,style:{...u,...d},ref:(0,o.useCallback)(e=>{w(e),(null==e?void 0:e.complete)&&_(e,p,l,c,y,v)},[w,p,l,c,y,v]),onLoad:e=>{let t=e.currentTarget;_(t,p,l,c,y,v),S&&S(e)},onError:e=>{"blur"===c&&v(!0),k&&k(e)}}),(s||"blur"===c)&&o.default.createElement("noscript",null,o.default.createElement("img",{...A,loading:f,decoding:"async","data-nimg":l,style:u,className:a,...h({config:m,src:p,unoptimized:g,layout:l,width:r,quality:i,sizes:O,loader:b})})))};function S(e){var t;let n,{src:r,sizes:i,unoptimized:s=!1,priority:c=!1,loading:g,lazyRoot:_=null,lazyBoundary:S,className:k,quality:x,width:O,height:A,style:j,objectFit:E,objectPosition:P,onLoadingComplete:I,placeholder:C="empty",blurDataURL:M,...z}=e,R=(0,o.useContext)(d.ImageConfigContext),D=(0,o.useMemo)(()=>{let e=f||R||a.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[R]),L=i?"responsive":"intrinsic";"layout"in z&&(z.layout&&(L=z.layout),delete z.layout);let U=v;if("loader"in z){if(z.loader){let e=z.loader;U=t=>{let{config:n,...r}=t;return e(r)}}delete z.loader}let N="";if("object"==typeof(t=r)&&(b(t)||void 0!==t.src)){let e=b(r)?r.default:r;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(M=M||e.blurDataURL,N=e.src,(!L||"fill"!==L)&&(A=A||e.height,O=O||e.width,!e.height||!e.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e))}let T=!c&&("lazy"===g||void 0===g);((r="string"==typeof r?r:N).startsWith("data:")||r.startsWith("blob:"))&&(s=!0,T=!1),p.has(r)&&(T=!1),D.unoptimized&&(s=!0);let[q,W]=(0,o.useState)(!1),[B,H,F]=(0,u.useIntersection)({rootRef:_,rootMargin:S||"200px",disabled:!T}),V=!T||H,G={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},$={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},J=!1,Q=y(O),Y=y(A),K=y(x),X=Object.assign({},j,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:E,objectPosition:P}),Z="blur"!==C||q?{}:{backgroundSize:E||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'+M+'")'};if("fill"===L)G.display="block",G.position="absolute",G.top=0,G.left=0,G.bottom=0,G.right=0;else if(void 0!==Q&&void 0!==Y){let e=Y/Q,t=isNaN(e)?"100%":""+100*e+"%";"responsive"===L?(G.display="block",G.position="relative",J=!0,$.paddingTop=t):"intrinsic"===L?(G.display="inline-block",G.position="relative",G.maxWidth="100%",J=!0,$.maxWidth="100%",n="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"+Q+"%27%20height=%27"+Y+"%27/%3e"):"fixed"===L&&(G.display="inline-block",G.position="relative",G.width=Q,G.height=Y)}let ee={src:m,srcSet:void 0,sizes:void 0};V&&(ee=h({config:D,src:r,unoptimized:s,layout:L,width:Q,quality:K,sizes:i,loader:U}));let et=r,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:z.crossOrigin,referrerPolicy:z.referrerPolicy},er=o.default.useLayoutEffect,ei=(0,o.useRef)(I),eo=(0,o.useRef)(r);(0,o.useEffect)(()=>{ei.current=I},[I]),er(()=>{eo.current!==r&&(F(),eo.current=r)},[F,r]);let el={isLazy:T,imgAttributes:ee,heightInt:Y,widthInt:Q,qualityInt:K,layout:L,className:k,imgStyle:X,blurStyle:Z,loading:g,config:D,unoptimized:s,placeholder:C,loader:U,srcString:et,onLoadingCompleteRef:ei,setBlurComplete:W,setIntersection:B,isVisible:V,noscriptSizes:i,...z};return o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:G},J?o.default.createElement("span",{style:$},n?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:n}):null):null,o.default.createElement(w,el)),c?o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src,...en})):null)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1364:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8891:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let r=n(6006),i=n(1364),o="function"==typeof IntersectionObserver,l=new Map,a=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,d=u||!o,[s,c]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);(0,r.useEffect)(()=>{if(o){if(d||s)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:i,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let i=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:i},a.push(n),l.set(n,t),t}(n);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),l.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=(0,i.requestIdleCallback)(()=>c(!0));return()=>(0,i.cancelIdleCallback)(e)}},[d,n,t,s,f.current]);let m=(0,r.useCallback)(()=>{c(!1)},[]);return[p,s,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4626:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let r=n(6927),i=r._(n(6006)),o=i.default.createContext({})},7290:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},2930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return s},default:function(){return m}});let r=n(6927),i=n(5909),o=i._(n(6006)),l=r._(n(9488)),a=n(4626),u=n(6436),d=n(7290);function s(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(7653);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(c,[]).reverse().concat(s(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(l.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,d.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return l}});let r=n(6927),i=r._(n(6006)),o=n(6374),l=i.default.createContext(o.imageConfigDefault)},6374:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},9488:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(5909),i=r._(n(6006)),o=i.useLayoutEffect,l=i.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7653:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),i=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,u={},d=null,s=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(s=t.ref),t)o.call(t,r)&&!a.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:s,props:u,_owner:l.current}}t.jsx=u,t.jsxs=u},9268:function(e,t,n){"use strict";e.exports=n(3177)},9590:function(e,t,n){e.exports=n(92)}}]);