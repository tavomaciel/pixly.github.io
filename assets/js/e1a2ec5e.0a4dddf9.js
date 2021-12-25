"use strict";(self.webpackChunkpixly_docs=self.webpackChunkpixly_docs||[]).push([[3059],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},243:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(7294);function a(e){var t="https://gfycat.com/ifr/"+e.id+"?controls=0&autoplay=1&hd=1";return n.createElement("div",{style:{position:"relative",paddingBottom:"56.25%"}},n.createElement("iframe",{src:t,frameBorder:"0",scrolling:"no",width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},allowFullScreen:!0}))}},1631:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=r(243),l=["components"],s={title:"Layers"},d=void 0,c={unversionedId:"guides/layers/index",id:"guides/layers/index",title:"Layers",description:"Layer Window",source:"@site/docs/guides/layers/index.md",sourceDirName:"guides/layers",slug:"/guides/layers/",permalink:"/docs/guides/layers/",editUrl:"https://github.com/tavomaciel/pixly/edit/main/docs/guides/layers/index.md",tags:[],version:"current",frontMatter:{title:"Layers"},sidebar:"tutorialSidebar",previous:{title:"Patterns",permalink:"/docs/guides/color-brush/brush/patterns"},next:{title:"Managing layers",permalink:"/docs/guides/layers/manage/"}},u=[{value:"Layer Window",id:"layer-window",children:[],level:3},{value:"Things to keep in mind...",id:"things-to-keep-in-mind",children:[],level:3},{value:"The layers list",id:"the-layers-list",children:[],level:3},{value:"Merge",id:"merge",children:[],level:3},{value:"Remove",id:"remove",children:[],level:3},{value:"Add",id:"add",children:[],level:3},{value:"Previous Frame",id:"previous-frame",children:[],level:3},{value:"Next frame",id:"next-frame",children:[],level:3},{value:"Visibility",id:"visibility",children:[],level:3}],p={toc:u};function h(e){var t=e.components,s=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"layer-window"},"Layer Window"),(0,i.kt)("p",null,"The layer window is on the right of the screen and usually collapsed on the bottom."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The layer window isn't shown on portrait mode. Make sure the phone rotation isn't locked and turn your phone into landscape to see it."))),(0,i.kt)("p",null,"Touch it to expand and you'll have the layer window shown:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Collapsed Layers",src:r(8762).Z}),"\n",(0,i.kt)("img",{alt:"Expanded Layers",src:r(834).Z})),(0,i.kt)("p",null,"It consists of 5 buttons and a list of layers, all described below."),(0,i.kt)("h3",{id:"things-to-keep-in-mind"},"Things to keep in mind..."),(0,i.kt)("p",null,"All ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/animation/"},"frames")," have the same amount of layers, ",(0,i.kt)("strong",{parentName:"p"},"always"),". But unlike Photoshop, in Pixly, each frame has his own set of layers. Frames share only the amount of layers, they don't share the images in them, or the visibility settings of the layers."),(0,i.kt)("p",null,"Layers are able to ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/layers/manage/move"},"move")," freely. When one layer move, the other layers in other frames aren't touched, they remain the same."),(0,i.kt)("p",null,"The bottom layer is never able to move, so think before drawing directly to it. You're still able to copy/paste/clear stuff off of it.\nIf your ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/mainmenu/colors-filters/transparency"},"project is transparent")," your bottom layer will be able to have transparency, otherwise it will always be a solid color, the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/color-brush/primary-secondary"},"secondary color"),". The other layers will always be able to have transparency, independent of your transparency settings."),(0,i.kt)("h3",{id:"the-layers-list"},"The layers list"),(0,i.kt)("p",null,"All the layers of the current frame will be shown here, the green one is the selected layer. You can drag up or down to scroll through the list. Touching a layer and holding your finger down for a second will allow you to ",(0,i.kt)("strong",{parentName:"p"},"move this layer")," somewhere else.\nSwiping a layer left or right will delete it."),(0,i.kt)(o.Z,{id:"FarawayFaithfulAmericanbobtail",mdxType:"GfyCat"}),(0,i.kt)("p",null,"If you delete or move something you didn't intend to. The ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/history"},"undo")," button works fine for deletions and moves."),(0,i.kt)(o.Z,{id:"ThreadbareUnevenHapuku",mdxType:"GfyCat"}),(0,i.kt)("h3",{id:"merge"},(0,i.kt)("a",{parentName:"h3",href:"/docs/guides/layers/manage/merge"},"Merge")),(0,i.kt)("p",null,"Merge the current layer with the one right below it."),(0,i.kt)("h3",{id:"remove"},(0,i.kt)("a",{parentName:"h3",href:"/docs/guides/layers/manage/delete"},"Remove")),(0,i.kt)("p",null,"Remove the current selected layer"),(0,i.kt)("h3",{id:"add"},(0,i.kt)("a",{parentName:"h3",href:"/docs/guides/layers/manage/create"},"Add")),(0,i.kt)("p",null,"Add a blank layer or duplicate the current layer."),(0,i.kt)("h3",{id:"previous-frame"},"Previous Frame"),(0,i.kt)("p",null,"A shortcut to change to the previous frame without having to open the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/animation/"},"animation timeline")),(0,i.kt)("h3",{id:"next-frame"},"Next frame"),(0,i.kt)("p",null,"A shortcut to change to the next frame without having to open the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/animation/"},"animation timeline")),(0,i.kt)("h3",{id:"visibility"},(0,i.kt)("a",{parentName:"h3",href:"/docs/guides/layers/manage/visibility"},"Visibility")),(0,i.kt)("p",null,"Toggles the visibility of that layer. A hidden layer is also hidden when exporting."))}h.isMDXComponent=!0},8762:function(e,t,r){t.Z=r.p+"assets/images/collapsed-layers-0a89f3f58b20da25636f7b418b65c631.png"},834:function(e,t,r){t.Z=r.p+"assets/images/expanded-layers-7e0bd14a61a87a69db7c937ca603ff05.png"}}]);