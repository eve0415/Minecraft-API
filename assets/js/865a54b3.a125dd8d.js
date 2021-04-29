(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(187)),o={id:"api_curseforge.getcategorieslist",title:"Function: getCategoriesList",sidebar_label:"getCategoriesList",custom_edit_url:null},c={unversionedId:"api/functions/api_curseforge.getcategorieslist",id:"api/functions/api_curseforge.getcategorieslist",isDocsHomePage:!1,title:"Function: getCategoriesList",description:"api/CurseForge.getCategoriesList",source:"@site/docs/api/functions/api_curseforge.getcategorieslist.md",sourceDirName:"api/functions",slug:"/api/functions/api_curseforge.getcategorieslist",permalink:"/MC-API/docs/api/functions/api_curseforge.getcategorieslist",editUrl:null,version:"current",sidebar_label:"getCategoriesList",frontMatter:{id:"api_curseforge.getcategorieslist",title:"Function: getCategoriesList",sidebar_label:"getCategoriesList",custom_edit_url:null},sidebar:"api",previous:{title:"Variable: SortTypes",permalink:"/MC-API/docs/api/variables/typings.sorttypes"},next:{title:"Function: getCategoryInfo",permalink:"/MC-API/docs/api/functions/api_curseforge.getcategoryinfo"}},p=[],s={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/MC-API/docs/api/modules/api_curseforge"},"api/CurseForge"),".getCategoriesList"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getCategoriesList"),"(",Object(i.b)("inlineCode",{parentName:"p"},"id?"),": ",Object(i.b)("em",{parentName:"p"},"number"),"): ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/MC-API/docs/api/classes/typings.categoryinfo"},Object(i.b)("em",{parentName:"a"},"CategoryInfo")),"[]",">"),Object(i.b)("p",null,"Fetch all sections and categories that are connected to Game ID."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"default"))," 432 - Minecraft"),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Default value"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"id")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"number")),Object(i.b)("td",{parentName:"tr",align:"left"},"432"),Object(i.b)("td",{parentName:"tr",align:"left"},"The game ID")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise"),"<",Object(i.b)("a",{parentName:"p",href:"/MC-API/docs/api/classes/typings.categoryinfo"},Object(i.b)("em",{parentName:"a"},"CategoryInfo")),"[]",">"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/eve0415/MC-API/blob/1e34058/src/api/CurseForge/category.ts#L32"},"api/CurseForge/category.ts:32")))}l.isMDXComponent=!0},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(r),g=n,f=b["".concat(o,".").concat(g)]||b[g]||u[g]||i;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);