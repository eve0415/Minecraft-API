(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{195:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(189),i=a(192),s=a(193),u=a(22),m=a(188);function d(e){var t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,l=e.href,u=e.label,m=e.activeClassName,d=void 0===m?"navbar__link--active":m,f=e.prependBaseUrlToHref,b=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),v=Object(s.a)(c),h=Object(s.a)(t),g=Object(s.a)(l,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({},l?{href:f?g:l}:Object.assign({isNavLink:!0,activeClassName:d,to:v},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(h)}}:null),b),u)}function f(e){var t,a=e.items,i=e.position,s=e.className,u=Object(r.a)(e,["items","position","className"]),m=Object(c.useRef)(null),f=Object(c.useRef)(null),b=Object(c.useState)(!1),v=b[0],h=b[1];Object(c.useEffect)((function(){var e=function(e){m.current&&!m.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]);var g=function(e,t){return void 0===t&&(t=!1),Object(l.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return a?o.a.createElement("div",{ref:m,className:Object(l.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===i,"dropdown--right":"right"===i,"dropdown--show":v})},o.a.createElement(d,Object(n.a)({className:g(s)},u,{onClick:u.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!v))}}),null!==(t=u.children)&&void 0!==t?t:u.label),o.a.createElement("ul",{ref:f,className:"dropdown__menu"},a.map((function(e,t){var c=e.className,l=Object(r.a)(e,["className"]);return o.a.createElement("li",{key:t},o.a.createElement(d,Object(n.a)({onKeyDown:function(e){if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var n=m.current.nextElementSibling;n&&n.focus()}},activeClassName:"dropdown__link--active",className:g(c,!0)},l)))})))):o.a.createElement(d,Object(n.a)({className:g(s)},u))}function b(e){var t,a,i,s=e.items,f=e.className,b=(e.position,Object(r.a)(e,["items","className","position"])),v=Object(c.useRef)(null),h=Object(u.useLocation)().pathname,g=Object(c.useState)((function(){var e;return null===(e=!(null!=s&&s.some((function(e){return Object(m.isSamePath)(e.to,h)}))))||void 0===e||e})),O=g[0],E=g[1],j=function(e,t){return void 0===t&&(t=!1),Object(l.a)("menu__link",{"menu__link--sublist":t},e)};if(!s)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(d,Object(n.a)({className:j(f)},b)));var p=null!==(t=v.current)&&void 0!==t&&t.scrollHeight?(null===(a=v.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return o.a.createElement("li",{className:Object(l.a)("menu__list-item",{"menu__list-item--collapsed":O})},o.a.createElement(d,Object(n.a)({role:"button",className:j(f,!0)},b,{onClick:function(e){e.preventDefault(),E((function(e){return!e}))}}),null!==(i=b.children)&&void 0!==i?i:b.label),o.a.createElement("ul",{className:"menu__list",ref:v,style:{height:O?void 0:p}},s.map((function(e,t){var a=e.className,c=Object(r.a)(e,["className"]);return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(d,Object(n.a)({activeClassName:"menu__link--active",className:j(a)},c,{onClick:b.onClick})))}))))}t.a=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,["mobile"]),c=a?b:f;return o.a.createElement(c,n)}},196:function(e,t,a){"use strict";var n=a(0),r=a(197);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},197:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},198:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(189),o=a(190),l=a(22),i=a(54),s=a.n(i);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var m=function(){var e=Object(n.useRef)(null),t=Object(l.useLocation)();return Object(n.useEffect)((function(){!t.hash&&e.current&&u(e.current)}),[t.pathname]),r.a.createElement("div",{ref:e},r.a.createElement("a",{href:"#main",className:s.a.skipToContent,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.a.createElement(o.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},d=a(188),f=a(196),b=a(55),v=a.n(b);var h=function(){var e,t=Object(f.a)(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar,l=Object(d.useThemeConfig)().announcementBar;if(!l)return null;var i=l.content,s=l.backgroundColor,u=l.textColor,m=l.isCloseable;return!i||m&&a?null:r.a.createElement("div",{className:v.a.announcementBar,style:{backgroundColor:s,color:u},role:"banner"},r.a.createElement("div",{className:Object(c.a)(v.a.announcementBarContent,(e={},e[v.a.announcementBarCloseable]=m,e)),dangerouslySetInnerHTML:{__html:i}}),m?r.a.createElement("button",{type:"button",className:v.a.announcementBarClose,onClick:n,"aria-label":Object(o.b)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},g=a(3),O=function(){return null},E=a(16),j=a(56),p=a.n(j),k=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(p.a.toggle,p.a.dark),style:a},t)},N=function(e){var t=e.icon,a=e.style;return r.a.createElement("span",{className:Object(c.a)(p.a.toggle,p.a.light),style:a},t)},w=Object(n.memo)((function(e){var t=e.className,a=e.icons,o=e.checked,l=e.disabled,i=e.onChange,s=Object(n.useState)(o),u=s[0],m=s[1],d=Object(n.useState)(!1),f=d[0],b=d[1],v=Object(n.useRef)(null);return r.a.createElement("div",{className:Object(c.a)("react-toggle",t,{"react-toggle--checked":u,"react-toggle--focus":f,"react-toggle--disabled":l}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void m(null==t?void 0:t.checked)}},r.a.createElement("div",{className:"react-toggle-track"},r.a.createElement("div",{className:"react-toggle-track-check"},a.checked),r.a.createElement("div",{className:"react-toggle-track-x"},a.unchecked)),r.a.createElement("div",{className:"react-toggle-thumb"}),r.a.createElement("input",{ref:v,checked:u,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onFocus:function(){return b(!0)},onBlur:function(){return b(!1)}}))})),y=function(e){var t=Object(d.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,o=t.lightIconStyle,l=Object(E.default)().isClient;return r.a.createElement(w,Object(g.a)({disabled:!l,icons:{checked:r.a.createElement(k,{icon:a,style:n}),unchecked:r.a.createElement(N,{icon:c,style:o})}},e))},C=a(199),_=a(207),L=function(e){var t=Object(l.useLocation)(),a=Object(n.useState)(e),r=a[0],c=a[1],o=Object(n.useRef)(!1),i=Object(n.useState)(0),s=i[0],u=i[1],m=Object(n.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return Object(_.a)((function(t,a){var n=t.scrollY,r=a.scrollY;if(e)if(n<s)c(!0);else{if(o.current)return o.current=!1,void c(!1);r&&0===n&&c(!0);var l=document.documentElement.scrollHeight-s,i=window.innerHeight;r&&n>=r?c(!1):n+i<l&&c(!0)}}),[s,o]),Object(n.useEffect)((function(){e&&c(!0)}),[t.pathname]),Object(n.useEffect)((function(){e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:r}},S=a(208),A=a(209),T=a(7),D=a(195),I=function(e){var t=e.width,a=void 0===t?20:t,n=e.height,c=void 0===n?20:n,o=Object(T.a)(e,["width","height"]);return r.a.createElement("svg",Object(g.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:a,height:c},o),r.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function B(e){var t=e.mobile,a=e.dropdownItemsBefore,n=e.dropdownItemsAfter,c=Object(T.a)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),o=Object(E.default)().i18n,l=o.currentLocale,i=o.locales,s=o.localeConfigs,u=Object(d.useAlternatePageUtils)();function m(e){return s[e].label}var f=i.map((function(e){var t="pathname://"+u.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:m(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===l?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),b=[].concat(a,f,n),v=t?"Languages":m(l);return r.a.createElement(D.a,Object(g.a)({},c,{href:"#",mobile:t,label:r.a.createElement("span",null,r.a.createElement(I,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.a.createElement("span",null,v)),items:b}))}var x=a(57),P=a.n(x);function V(e){return e.mobile?null:r.a.createElement("div",{className:P.a.searchWrapper},r.a.createElement(O,null))}var M={default:function(){return D.a},localeDropdown:function(){return B},search:function(){return V},docsVersion:function(){return a(227).default},docsVersionDropdown:function(){return a(228).default},doc:function(){return a(229).default}};function U(e){var t=e.type,a=Object(T.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=M[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.a.createElement(n,a)}var R=a(210),H=a(212),z=a(59),G=a.n(z),F="right";var W=function(){var e,t=Object(d.useThemeConfig)(),a=t.navbar,o=a.items,l=a.hideOnScroll,i=a.style,s=t.colorMode.disableSwitch,u=Object(n.useState)(!1),m=u[0],f=u[1],b=Object(C.a)(),v=b.isDarkTheme,h=b.setLightTheme,E=b.setDarkTheme,j=L(l),p=j.navbarRef,k=j.isNavbarVisible;Object(S.a)(m);var N=Object(n.useCallback)((function(){f(!0)}),[f]),w=Object(n.useCallback)((function(){f(!1)}),[f]),_=Object(n.useCallback)((function(e){return e.target.checked?E():h()}),[h,E]),T=Object(A.a)();Object(n.useEffect)((function(){T===A.b.desktop&&f(!1)}),[T]);var D=o.some((function(e){return"search"===e.type})),I=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:F)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:F)}))}}(o),B=I.leftItems,x=I.rightItems;return r.a.createElement("nav",{ref:p,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":m},e[G.a.navbarHideable]=l,e[G.a.navbarHidden]=l&&!k,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=o&&0!==o.length&&r.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:N,onKeyDown:N},r.a.createElement(H.a,null)),r.a.createElement(R.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),B.map((function(e,t){return r.a.createElement(U,Object(g.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},x.map((function(e,t){return r.a.createElement(U,Object(g.a)({},e,{key:t}))})),!s&&r.a.createElement(y,{className:G.a.displayOnlyInLargeViewport,checked:v,onChange:_}),!D&&r.a.createElement(O,null))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:w}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(R.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:w}),!s&&m&&r.a.createElement(y,{checked:v,onChange:_})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.a.createElement(U,Object(g.a)({mobile:!0},e,{onClick:w,key:t}))})))))))},K=a(192),Y=a(193),Q=a(60),q=a.n(Q),J=a(211);function X(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(T.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(Y.a)(t),i=Object(Y.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(K.a,Object(g.a)({className:"footer__link-item"},a?{href:c?i:a}:{to:l},o),n)}var $=function(e){var t=e.sources,a=e.alt;return r.a.createElement(J.a,{className:"footer__logo",alt:a,sources:t})};var Z=function(){var e=Object(d.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,o=void 0===n?[]:n,l=t.logo,i=void 0===l?{}:l,s={light:Object(Y.a)(i.src),dark:Object(Y.a)(i.srcDark||i.src)};return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(X,e))}))):null)}))),(i||a)&&r.a.createElement("div",{className:"footer__bottom text--center"},i&&(i.src||i.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement(K.a,{href:i.href,className:q.a.footerLogoLink},r.a.createElement($,{alt:i.alt,sources:s})):r.a.createElement($,{alt:i.alt,sources:s})),a?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null},ee=a(8),te=Object(d.createStorageSlot)("theme"),ae="light",ne="dark",re=function(e){return e===ne?ne:ae},ce=function(e){Object(d.createStorageSlot)("theme").set(re(e))},oe=function(){var e=Object(d.useThemeConfig)().colorMode,t=e.defaultMode,a=e.disableSwitch,r=e.respectPrefersColorScheme,c=Object(n.useState)(function(e){return ee.a.canUseDOM?re(document.documentElement.getAttribute("data-theme")):re(e)}(t)),o=c[0],l=c[1],i=Object(n.useCallback)((function(){l(ae),ce(ae)}),[]),s=Object(n.useCallback)((function(){l(ne),ce(ne)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",re(o))}),[o]),Object(n.useEffect)((function(){if(!a)try{var e=te.get();null!==e&&l(re(e))}catch(t){console.error(t)}}),[l]),Object(n.useEffect)((function(){a&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?ne:ae)}))}),[]),{isDarkTheme:o===ne,setLightTheme:i,setDarkTheme:s}},le=a(206);var ie=function(e){var t=oe(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(le.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)};function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function ue(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return se(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?se(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(a=e[Symbol.iterator]()).next.bind(a)}var me="docusaurus.tab.",de=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){Object(d.createStorageSlot)("docusaurus.tab."+e).set(t)}),[]);return Object(n.useEffect)((function(){try{for(var e,t={},n=ue(Object(d.listStorageKeys)());!(e=n()).done;){var r=e.value;if(r.startsWith(me))t[r.substring(me.length)]=Object(d.createStorageSlot)(r).get()}a(t)}catch(c){console.error(c)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},fe=Object(d.createStorageSlot)("docusaurus.announcement.dismiss"),be=Object(d.createStorageSlot)("docusaurus.announcement.id"),ve=function(){var e=Object(d.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((function(){fe.set("true"),r(!0)}),[]);return Object(n.useEffect)((function(){if(e){var t=e.id,a=be.get();"annoucement-bar"===a&&(a="announcement-bar");var n=t!==a;be.set(t),n&&fe.set("false"),(n||"false"===fe.get())&&r(!1)}}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},he=a(197);var ge=function(e){var t=de(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=ve(),o=c.isAnnouncementBarClosed,l=c.closeAnnouncementBar;return r.a.createElement(he.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:o,closeAnnouncementBar:l}},e.children)};function Oe(e){var t=e.children;return r.a.createElement(ie,null,r.a.createElement(ge,null,r.a.createElement(d.DocsPreferredVersionContextProvider,null,t)))}var Ee=a(24);function je(e){var t=e.locale,a=e.version,n=e.tag;return r.a.createElement(Ee.a,null,t&&r.a.createElement("meta",{name:"docusaurus_locale",content:""+t}),a&&r.a.createElement("meta",{name:"docusaurus_version",content:a}),n&&r.a.createElement("meta",{name:"docusaurus_tag",content:n}))}var pe=a(213);function ke(){var e=Object(E.default)().i18n,t=e.defaultLocale,a=e.locales,n=Object(d.useAlternatePageUtils)();return r.a.createElement(Ee.a,null,a.map((function(e){return r.a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.a.createElement("link",{rel:"alternate",href:n.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Ne(e){var t=e.permalink,a=Object(E.default)().siteConfig.url,n=function(){var e=Object(E.default)().siteConfig.url,t=Object(l.useLocation)().pathname;return e+Object(Y.a)(t)}(),c=t?""+a+t:n;return r.a.createElement(Ee.a,null,r.a.createElement("meta",{property:"og:url",content:c}),r.a.createElement("link",{rel:"canonical",href:c}))}function we(e){var t=Object(E.default)(),a=t.siteConfig,n=a.favicon,c=a.themeConfig.metadatas,o=t.i18n,l=o.currentLocale,i=o.localeConfigs,s=e.title,u=e.description,m=e.image,f=e.keywords,b=e.searchMetadatas,v=Object(Y.a)(n),h=Object(d.useTitleFormatter)(s),O=l,j=i[l].direction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.a,null,r.a.createElement("html",{lang:O,dir:j}),n&&r.a.createElement("link",{rel:"shortcut icon",href:v}),r.a.createElement("title",null,h),r.a.createElement("meta",{property:"og:title",content:h})),r.a.createElement(pe.a,{description:u,keywords:f,image:m}),r.a.createElement(Ne,null),r.a.createElement(ke,null),r.a.createElement(je,Object(g.a)({tag:d.DEFAULT_SEARCH_TAG,locale:l},b)),r.a.createElement(Ee.a,null,c.map((function(e,t){return r.a.createElement("meta",Object(g.a)({key:"metadata_"+t},e))}))))}a(61);var ye=function(){Object(n.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(62);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName,o=e.pageClassName;return ye(),r.a.createElement(Oe,null,r.a.createElement(we,e),r.a.createElement(m,null),r.a.createElement(h,null),r.a.createElement(W,null),r.a.createElement("div",{className:Object(c.a)(d.ThemeClassNames.wrapper.main,n,o)},t),!a&&r.a.createElement(Z,null))}},199:function(e,t,a){"use strict";var n=a(0),r=a(206);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},206:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},207:function(e,t,a){"use strict";var n=a(0),r=a(8),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useRef)(c()),r=function(){var t=c();e&&e(t,a.current),a.current=t};Object(n.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},208:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},209:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(0),r=a(8),c={desktop:"desktop",mobile:"mobile"};t.a=function(){var e=r.a.canUseDOM;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}var a=Object(n.useState)(t),o=a[0],l=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){l(t())}}),[]),o}},210:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(192),i=a(211),s=a(193),u=a(16),m=a(188);t.a=function(e){var t=Object(u.default)().isClient,a=Object(m.useThemeConfig)().navbar,c=a.title,d=a.logo,f=void 0===d?{src:""}:d,b=e.imageClassName,v=e.titleClassName,h=Object(r.a)(e,["imageClassName","titleClassName"]),g=Object(s.a)(f.href||"/"),O={light:Object(s.a)(f.src),dark:Object(s.a)(f.srcDark||f.src)};return o.a.createElement(l.a,Object(n.a)({to:g},h,f.target&&{target:f.target}),f.src&&o.a.createElement(i.a,{key:t,className:b,sources:O,alt:f.alt||c||"Logo"}),null!=c&&o.a.createElement("strong",{className:v},c))}},211:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(189),i=a(16),s=a(199),u=a(58),m=a.n(u);t.a=function(e){var t=Object(i.default)().isClient,a=Object(s.a)().isDarkTheme,c=e.sources,u=e.className,d=e.alt,f=void 0===d?"":d,b=Object(r.a)(e,["sources","className","alt"]),v=t?a?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,v.map((function(e){return o.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:f,className:Object(l.a)(m.a.themedImage,m.a["themedImage--"+e],u)},b))})))}},212:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),o=a.n(c);t.a=function(e){var t=e.width,a=void 0===t?30:t,c=e.height,l=void 0===c?30:c,i=e.className,s=Object(r.a)(e,["width","height","className"]);return o.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:i,width:a,height:l,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},227:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(195),i=a(191),s=a(188);function u(e){var t,a=e.label,c=e.to,u=e.docsPluginId,m=Object(r.a)(e,["label","to","docsPluginId"]),d=Object(i.useActiveVersion)(u),f=Object(s.useDocsPreferredVersion)(u).preferredVersion,b=Object(i.useLatestVersion)(u),v=null!==(t=null!=d?d:f)&&void 0!==t?t:b,h=null!=a?a:v.label,g=null!=c?c:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return o.a.createElement(l.a,Object(n.a)({},m,{label:h,to:g}))}},228:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(195),i=a(191),s=a(188),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,a,c=e.mobile,m=e.docsPluginId,d=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,b=e.dropdownItemsAfter,v=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),h=Object(i.useActiveDocContext)(m),g=Object(i.useVersions)(m),O=Object(i.useLatestVersion)(m),E=Object(s.useDocsPreferredVersion)(m),j=E.preferredVersion,p=E.savePreferredVersionName;var k=null!==(t=null!==(a=h.activeVersion)&&void 0!==a?a:j)&&void 0!==t?t:O,N=c?"Versions":k.label,w=c?void 0:u(k).path;return o.a.createElement(l.a,Object(n.a)({},v,{mobile:c,label:N,to:w,items:function(){var e=g.map((function(e){var t=(null==h?void 0:h.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==h?void 0:h.activeVersion)},onClick:function(){p(e.name)}}})),t=[].concat(f,e,b);if(!(t.length<=1))return t}(),isActive:d?function(){return!1}:void 0}))}},229:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),c=a(0),o=a.n(c),l=a(195),i=a(191),s=a(189),u=a(188);function m(e){var t,a,c=e.docId,m=e.activeSidebarClassName,d=e.label,f=e.docsPluginId,b=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]),v=Object(i.useActiveDocContext)(f),h=v.activeVersion,g=v.activeDoc,O=Object(u.useDocsPreferredVersion)(f).preferredVersion,E=Object(i.useLatestVersion)(f),j=null!==(t=null!=h?h:O)&&void 0!==t?t:E,p=j.docs.find((function(e){return e.id===c}));if(!p){var k=j.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+c+" in version "+j.name+".\nAvailable docIds=\n- "+k)}return o.a.createElement(l.a,Object(n.a)({exact:!0},b,{className:Object(s.a)(b.className,(a={},a[m]=g&&g.sidebar===p.sidebar,a)),label:null!=d?d:p.id,to:p.path}))}}}]);