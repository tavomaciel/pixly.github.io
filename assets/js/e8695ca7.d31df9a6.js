"use strict";(self.webpackChunkpixly_docs=self.webpackChunkpixly_docs||[]).push([[6162],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9941:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:1,title:"Onion skinning"},c=void 0,u={unversionedId:"guides/animation/onion",id:"guides/animation/onion",title:"Onion skinning",description:"Currently, hitting the ghost icon will show a list of how many frames you want to show as onion skins. To disable it, just choose none.",source:"@site/docs/guides/animation/onion.md",sourceDirName:"guides/animation",slug:"/guides/animation/onion",permalink:"/docs/guides/animation/onion",editUrl:"https://github.com/tavomaciel/pixly/edit/main/docs/guides/animation/onion.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Onion skinning"},sidebar:"tutorialSidebar",previous:{title:"Animation",permalink:"/docs/guides/animation/"},next:{title:"Managing frames",permalink:"/docs/guides/animation/manage/"}},l=[],p={toc:l};function d(e){var n=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Currently, hitting the ghost icon will show a list of how many frames you want to show as onion skins. To disable it, just choose none."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you don't use a ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/mainmenu/colors-filters/transparency"},"transparent background"),", set up your ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/color-brush/primary-secondary"},"secondary color")," to the background color of your art."),(0,i.kt)("p",{parentName:"div"},"Otherwise, Pixly won't be able to tell what is art and what is background, thus, it won't be able to remove the background, making it impossible to render previous frames behind the current frame."),(0,i.kt)("p",{parentName:"div"},"Well, just sort your ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/color-brush/primary-secondary"},"primary and secondary colors")," and you'll be fine!"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"onions",src:t(1734).Z})))}d.isMDXComponent=!0},1734:function(e,n,t){n.Z=t.p+"assets/images/onions-fe4a1aba1388dc0bdf6f3283aaa360f7.png"}}]);