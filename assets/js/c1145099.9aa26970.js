"use strict";(self.webpackChunkpixly_docs=self.webpackChunkpixly_docs||[]).push([[3289],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,p=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return n?i.createElement(p,a(a({ref:t},d),{},{components:n})):i.createElement(p,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},243:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(7294);function r(e){var t="https://gfycat.com/ifr/"+e.id+"?controls=0&autoplay=1&hd=1";return i.createElement("div",{style:{position:"relative",paddingBottom:"56.25%"}},i.createElement("iframe",{src:t,frameBorder:"0",scrolling:"no",width:"100%",height:"100%",style:{position:"absolute",top:0,left:0},allowFullScreen:!0}))}},3736:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return f}});var i=n(3117),r=n(102),o=(n(7294),n(3905)),a=n(243),l=["components"],s={title:"Animation"},c=void 0,d={unversionedId:"guides/animation/index",id:"guides/animation/index",title:"Animation",description:"Timeline",source:"@site/docs/guides/animation/index.md",sourceDirName:"guides/animation",slug:"/guides/animation/",permalink:"/docs/guides/animation/",editUrl:"https://github.com/tavomaciel/pixly/edit/main/docs/guides/animation/index.md",tags:[],version:"current",frontMatter:{title:"Animation"},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/guides/basics"},next:{title:"Onion skinning",permalink:"/docs/guides/animation/onion"}},u=[{value:"Timeline",id:"timeline",children:[],level:3},{value:"The frames list",id:"the-frames-list",children:[],level:3},{value:"Remove",id:"remove",children:[],level:3},{value:"Add",id:"add",children:[],level:3},{value:"Ghost",id:"ghost",children:[],level:3},{value:"Timing",id:"timing",children:[],level:3}],m={toc:u};function f(e){var t=e.components,s=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"timeline"},"Timeline"),(0,o.kt)("p",null,"The timeline is on the bottom of the screen and usually collapsed, touch it to expand and you'll have the following window shown:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Collapsed Timeline",src:n(4857).Z}),"\n",(0,o.kt)("img",{alt:"Expanded Timeline",src:n(8009).Z})),(0,o.kt)("p",null,"It consists of 4 buttons and a list of frames."),(0,o.kt)("h3",{id:"the-frames-list"},"The frames list"),(0,o.kt)("p",null,"All the frames in your project will be shown here, the green one is the selected.\nYou can drag left or right to scroll through the list.\nTouching a frame and holding your finger down for a second will allow you to ",(0,o.kt)("strong",{parentName:"p"},"move this frame")," somewhere else.\nSwiping a frame up or down will completely delete it."),(0,o.kt)(a.Z,{id:"BelatedSoftKittiwake",mdxType:"GfyCat"}),(0,o.kt)("p",null,"Don't shed tears if you delete or move something you didn't intend to. The ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/history"},"undo")," button works fine for deletions and moves. Just hit it some times until it goes back to a place where you find yourself fine."),(0,o.kt)(a.Z,{id:"WastefulSardonicEgg",mdxType:"GfyCat"}),(0,o.kt)("h3",{id:"remove"},(0,o.kt)("a",{parentName:"h3",href:"/docs/guides/animation/manage/delete"},"Remove")),(0,o.kt)("p",null,"Remove the current selected frame."),(0,o.kt)("h3",{id:"add"},(0,o.kt)("a",{parentName:"h3",href:"/docs/guides/animation/manage/create"},"Add")),(0,o.kt)("p",null,"Add a blank frame or duplicate the current frame."),(0,o.kt)("h3",{id:"ghost"},(0,o.kt)("a",{parentName:"h3",href:"/docs/guides/animation/onion"},"Ghost")),(0,o.kt)("p",null,"Let you choose how many frames will be shown in the onion skin"),(0,o.kt)("h3",{id:"timing"},(0,o.kt)("a",{parentName:"h3",href:"/docs/guides/animation/manage/timing"},"Timing")),(0,o.kt)("p",null,"Set the duration of the current selected frame or all animation"))}f.isMDXComponent=!0},4857:function(e,t,n){t.Z=n.p+"assets/images/collapsed-timeline-ca44a2cf065e4cd211ff7cb6e88c507a.png"},8009:function(e,t,n){t.Z=n.p+"assets/images/expanded-timeline-f90bbc914a718ce96b96675efe659026.png"}}]);