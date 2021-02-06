(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{185:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,d=s["".concat(c,".").concat(f)]||s[f]||b[f]||i;return r?n.a.createElement(d,o(o({ref:t},l),{},{components:r})):n.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),i=(r(0),r(185)),c={id:"api_curseforge",title:"Module: api/CurseForge",sidebar_label:"api/CurseForge",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/modules/api_curseforge",id:"api/modules/api_curseforge",isDocsHomePage:!1,title:"Module: api/CurseForge",description:"Module: api/CurseForge",source:"@site/docs/api/modules/api_curseforge.md",slug:"/api/modules/api_curseforge",permalink:"/MC-API/docs/api/modules/api_curseforge",editUrl:null,version:"current",sidebar_label:"api/CurseForge",sidebar:"api",previous:{title:"MC-API",permalink:"/MC-API/docs/api"},next:{title:"Module: api/Mojang",permalink:"/MC-API/docs/api/modules/api_mojang"}},p=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Functions",id:"functions",children:[]}]}],l={toc:p};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"module-apicurseforge"},"Module: api/CurseForge"),Object(i.b)("h2",{id:"table-of-contents"},"Table of contents"),Object(i.b)("h3",{id:"functions"},"Functions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getcategorieslist"}),"getCategoriesList")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getcategoryinfo"}),"getCategoryInfo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getcategoryupdatedtime"}),"getCategoryUpdatedTime")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getfeatured"}),"getFeatured")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getgameinfo"}),"getGameInfo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getgamelist"}),"getGameList")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getgameupdatedtime"}),"getGameUpdatedTime")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getminecraftupdatedtime"}),"getMinecraftUpdatedTime")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getminecraftversioninfo"}),"getMinecraftVersionInfo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getminecraftversionlist"}),"getMinecraftVersionList")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getmodloaderinfo"}),"getModLoaderInfo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getmodloaderupdatedtime"}),"getModLoaderUpdatedTime")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getmodloaderversionlist"}),"getModLoaderVersionList")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getmultipleprojects"}),"getMultipleProjects")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getproject"}),"getProject")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getprojectdescription"}),"getProjectDescription")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getprojectfilechangelog"}),"getProjectFileChangelog")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getprojectfileinfo"}),"getProjectFileInfo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getprojectfilelink"}),"getProjectFileLink")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getprojectfilesinfo"}),"getProjectFilesInfo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.getsectioninfo"}),"getSectionInfo")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/MC-API/docs/api/functions/api_curseforge.searchproject"}),"searchProject"))))}u.isMDXComponent=!0}}]);