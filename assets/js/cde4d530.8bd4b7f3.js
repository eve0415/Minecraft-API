(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(187)),o={id:"api_mojang.getskin",title:"Function: getSkin",sidebar_label:"getSkin",custom_edit_url:null},c={unversionedId:"api/functions/api_mojang.getskin",id:"api/functions/api_mojang.getskin",isDocsHomePage:!1,title:"Function: getSkin",description:"api/Mojang.getSkin",source:"@site/docs/api/functions/api_mojang.getskin.md",sourceDirName:"api/functions",slug:"/api/functions/api_mojang.getskin",permalink:"/MC-API/docs/api/functions/api_mojang.getskin",editUrl:null,version:"current",sidebar_label:"getSkin",frontMatter:{id:"api_mojang.getskin",title:"Function: getSkin",sidebar_label:"getSkin",custom_edit_url:null},sidebar:"api",previous:{title:"Function: getNameHistory",permalink:"/MC-API/docs/api/functions/api_mojang.getnamehistory"},next:{title:"Function: getUUID",permalink:"/MC-API/docs/api/functions/api_mojang.getuuid"}},p=[],b={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/MC-API/docs/api/modules/api_mojang"},"api/Mojang"),".getSkin"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getSkin"),"(",Object(i.b)("inlineCode",{parentName:"p"},"uuid"),": ",Object(i.b)("em",{parentName:"p"},"string"),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/MC-API/docs/api/classes/typings.skin"},Object(i.b)("em",{parentName:"a"},"Skin")),">"),Object(i.b)("p",null,"Fetch player skins and capes"),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"uuid")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"string")),Object(i.b)("td",{parentName:"tr",align:"left"},"The UUID of the player")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/MC-API/docs/api/classes/typings.skin"},Object(i.b)("em",{parentName:"a"},"Skin")),">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/eve0415/MC-API/blob/1e34058/src/api/Mojang/profile.ts#L44"},"api/Mojang/profile.ts:44")))}l.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,f=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(f,c(c({ref:t},b),{},{components:n})):a.a.createElement(f,c({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);