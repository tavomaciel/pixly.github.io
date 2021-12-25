"use strict";(self.webpackChunkpixly_docs=self.webpackChunkpixly_docs||[]).push([[1594],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=o,f=d["".concat(u,".").concat(y)]||d[y]||p[y]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9390:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:9,title:"History"},u=void 0,c={unversionedId:"guides/history",id:"guides/history",title:"History",description:"Pixly has a history system, upon which most operations are recorded and you can undo and redo them.",source:"@site/docs/guides/history.md",sourceDirName:"guides",slug:"/guides/history",permalink:"/docs/guides/history",editUrl:"https://github.com/tavomaciel/pixly/edit/main/docs/guides/history.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"History"},sidebar:"tutorialSidebar",previous:{title:"Polygon",permalink:"/docs/guides/toolbar/tools/polygon"},next:{title:"Main Menu",permalink:"/docs/guides/mainmenu/"}},l=[],p={toc:l};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pixly has a history system, upon which most operations are recorded and you can ",(0,i.kt)("strong",{parentName:"p"},"undo")," and ",(0,i.kt)("strong",{parentName:"p"},"redo")," them."),(0,i.kt)("p",null,"The undo and redo buttons, represented by green arrows are located in the bottom-left corner"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Undo Redo buttons",src:n(4315).Z})),(0,i.kt)("p",null,"The arrow pointing left is the Undo, likewise, the one pointing right is the Redo."),(0,i.kt)("p",null,"A lit button represents that there's operations to be undone or redone, a unlit button shows that there's no operation to be undone or redone."),(0,i.kt)("p",null,"In landscape you can see a History tab at the bottom. When expanding it, you can check all the operations you executed, and choose one to go back to."))}d.isMDXComponent=!0},4315:function(e,t,n){t.Z=n.p+"assets/images/undo-redo-6a45f14d9a6c45b1f42156782b4bfe0c.png"}}]);