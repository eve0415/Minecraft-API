(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(184)),c={id:"api_mojang.getskin",title:"Function: getSkin",sidebar_label:"getSkin",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/functions/api_mojang.getskin",id:"api/functions/api_mojang.getskin",isDocsHomePage:!1,title:"Function: getSkin",description:"Function: getSkin",source:"@site/docs/api/functions/api_mojang.getskin.md",slug:"/api/functions/api_mojang.getskin",permalink:"/MC-API/docs/api/functions/api_mojang.getskin",editUrl:null,version:"current",sidebar_label:"getSkin",sidebar:"api",previous:{title:"Function: getNameHistory",permalink:"/MC-API/docs/api/functions/api_mojang.getnamehistory"},next:{title:"Function: getUUID",permalink:"/MC-API/docs/api/functions/api_mojang.getuuid"}},p=[],b={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"function-getskin"},"Function: getSkin"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/MC-API/docs/api/modules/api_mojang"}),"api/Mojang"),".getSkin"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getSkin"),"(",Object(i.b)("inlineCode",{parentName:"p"},"uuid"),": ",Object(i.b)("em",{parentName:"p"},"string"),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/MC-API/docs/api/classes/typings.skin"}),Object(i.b)("em",{parentName:"a"},"Skin")),">"),Object(i.b)("p",null,"Fetch player skins and capes"),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"uuid")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"string")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The UUID of the player")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/MC-API/docs/api/classes/typings.skin"}),Object(i.b)("em",{parentName:"a"},"Skin")),">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eve0415/MC-API/blob/16d2fb5/src/api/Mojang/profile.ts#L44"}),"api/Mojang/profile.ts:44")))}l.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,j=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?a.a.createElement(j,o(o({ref:t},b),{},{components:n})):a.a.createElement(j,o({ref:t},b))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);