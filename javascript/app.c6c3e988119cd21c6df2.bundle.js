(()=>{var e,t,r,n,o,a={4323:(e,t,r)=>{var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a,i=n(r(5179)),s=p(r(7294)),l=n(r(62)),d=p(r(3686)),u=p(r(6848)),c=r(3286);function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}var h=100,m=100,v=l.default.TouchableOpacity(o||(o=(0,i.default)(["\n  transform: ",";\n"])),(function(e){return"scale("+e.scale})),_=l.default.View(a||(a=(0,i.default)(["\n  height: ","px;\n  width: ","px;\n"])),h,m),y=d.default.createAnimatedComponent(u.Path);t.default=function(e){var t,n=e.scale,o=e.color,a=e.type,i=e.animationDuration,l=e.itemOffset,f=(0,c.useGetAnimation)({type:null!=a?a:"elasticRotation",animationDuration:i}),p=f.animationClock,g=f.rotation,w=f.animation,b=null!=o?o:"black",k=null!=n?n:1,P=null!=l?l:15,C=[(0,c.useGetAnimatedPropsFirstLine)({dimensions:{width:m,height:h},fill:b,offset:-P,animationClock:p,animationType:a}),(0,c.useGetAnimatedPropsSecondLine)({dimensions:{width:m,height:h},fill:b,offset:0,animationClock:p,animationType:a}),(0,c.useGetAnimatedPropsThirdLine)({dimensions:{width:m,height:h},fill:b,offset:P,animationClock:p,animationType:a})],x=(0,d.useAnimatedStyle)(((t=function(){return{transform:[{rotate:g.value+"deg"}]}})._closure={rotation:g},t.asString='function _f(){const{rotation}=jsThis._closure;{return{transform:[{rotate:rotation.value+"deg"}]};}}',t.__workletHash=0xb8f92e0794d,t.__location="C:\\Projects\\reanimated-burger-menu\\src\\BurgerMenu\\index.tsx (80:41)",t.__optimalization=3,r.g.__reanimatedWorkletInit(t),t)),A=(0,s.useCallback)((function(){w()}),[]);return s.default.createElement(_,null,s.default.createElement(v,{onPress:A,scale:k},s.default.createElement(d.default.View,{style:x},s.default.createElement(u.default,{width:h,height:m},C.map((function(e,t){return s.default.createElement(y,{key:t,animatedProps:e,fill:"none",fillRule:"evenodd",strokeLinecap:"round"})}))))))}},5674:(e,t,r)=>{var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BurgerMenu",{enumerable:!0,get:function(){return o.default}});var o=n(r(4323))},452:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_SPRING_CONFIG=void 0,t.DEFAULT_SPRING_CONFIG={damping:15,mass:1,stiffness:120,overshootClamping:!1,restSpeedThreshold:1,restDisplacementThreshold:1}},5120:(e,t,r)=>{var n=r(5318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(7294)),a=r(5674);r(4889),r.g.setImmediate||(r.g.setImmediate=setTimeout);t.default=function(){return o.default.createElement(a.BurgerMenu,null)}},3219:(e,t,r)=>{var n,o=r(5318),a=r(2880),i=o(r(5120)),s=r.g,l=s.document.getElementById("root");l&&(n=l,s.__webappRootTag=n,a.AppRegistry.registerComponent("reanimated-burger-menu",(function(){return i.default})),a.AppRegistry.runApplication("reanimated-burger-menu",{rootTag:n}))},3286:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useGetAnimatedPropsFirstLine",{enumerable:!0,get:function(){return n.useGetAnimatedPropsFirstLine}}),Object.defineProperty(t,"useGetAnimatedPropsSecondLine",{enumerable:!0,get:function(){return o.useGetAnimatedPropsSecondLine}}),Object.defineProperty(t,"useGetAnimatedPropsThirdLine",{enumerable:!0,get:function(){return a.useGetAnimatedPropsThirdLine}}),Object.defineProperty(t,"useGetAnimation",{enumerable:!0,get:function(){return i.useGetAnimation}});var n=r(269),o=r(4966),a=r(3275),i=r(2080)},269:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useGetAnimatedPropsFirstLine=void 0;var n=r(3686),o=r(9629);t.useGetAnimatedPropsFirstLine=function(e){var t,a=e.dimensions,i=e.offset,s=e.fill,l=e.animationClock;return(0,n.useAnimatedProps)(((t=function(){var e=a.height,t=a.width,r=t/2,d=e/2,u=t>=50?t/4:t/6,c=t/6,f=(0,o.createPath)({x:r-u,y:d+i});(0,o.addCurve)(f,{c1:{x:r-u,y:d+i},c2:{x:r+u,y:d+i},to:{x:r+u,y:d+i}});var p=(0,o.createPath)({x:r-c,y:d+c});return(0,o.addCurve)(p,{c1:{x:r-c,y:d+c},c2:{x:r+c,y:d-c},to:{x:r+c,y:d-c}}),{stroke:(0,n.interpolateColor)(l.value,[0,20],[s,s]),strokeWidth:(0,n.interpolate)(l.value,[0,20],[5,5]),d:(0,o.interpolatePath)(l.value,[0,20],[f,p])}})._closure={dimensions:a,createPath:o.createPath,offset:i,addCurve:o.addCurve,interpolateColor:n.interpolateColor,animationClock:l,fill:s,interpolate:n.interpolate,interpolatePath:o.interpolatePath},t.asString="function _f(){const{dimensions,createPath,offset,addCurve,interpolateColor,animationClock,fill,interpolate,interpolatePath}=jsThis._closure;{const{height:height,width:width}=dimensions;const startX=width/2;const startY=height/2;const x_offset=width>=50?width/4:width/6;const directional_offset=width/6;const straightArrow=createPath({x:startX-x_offset,y:startY+offset});addCurve(straightArrow,{c1:{x:startX-x_offset,y:startY+offset},c2:{x:startX+x_offset,y:startY+offset},to:{x:startX+x_offset,y:startY+offset}});const directionalArrow=createPath({x:startX-directional_offset,y:startY+directional_offset});addCurve(directionalArrow,{c1:{x:startX-directional_offset,y:startY+directional_offset},c2:{x:startX+directional_offset,y:startY-directional_offset},to:{x:startX+directional_offset,y:startY-directional_offset}});return{stroke:interpolateColor(animationClock.value,[0,20],[fill,fill]),strokeWidth:interpolate(animationClock.value,[0,20],[5,5]),d:interpolatePath(animationClock.value,[0,20],[straightArrow,directionalArrow])};}}",t.__workletHash=0xa878d280cd4,t.__location="C:\\Projects\\reanimated-burger-menu\\src\\worklets\\useGetAnimatedPropsFirstLine.ts (11:19)",r.g.__reanimatedWorkletInit(t),t))}},4966:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useGetAnimatedPropsSecondLine=void 0;var n=r(3686),o=r(9629);t.useGetAnimatedPropsSecondLine=function(e){var t,a=e.dimensions,i=e.offset,s=e.fill,l=e.animationClock,d=e.animationType;return(0,n.useAnimatedProps)(((t=function(){var e=a.height,t=a.width,r=t/2,u=e/2,c=t>=50?t/4:t/6,f=t/4,p=(0,o.createPath)({x:r-c,y:u+i});(0,o.addCurve)(p,{to:{x:r+c,y:u+i},c1:{x:r-c,y:u+i},c2:{x:r+c,y:u+i}});var h=(0,o.createPath)({x:f-c,y:u+i});return(0,o.addCurve)(h,{to:{x:f+c,y:u+i},c1:{x:f-c,y:u+i},c2:{x:f+c,y:u+i}}),{stroke:(0,n.interpolateColor)(l.value,[0,18,20],[s,s,"transparent"]),strokeWidth:(0,n.interpolate)(l.value,[0,20],[5,0]),d:(0,o.interpolatePath)(l.value,[0,20],[p,"slider"===d?h:p])}})._closure={dimensions:a,createPath:o.createPath,offset:i,addCurve:o.addCurve,interpolateColor:n.interpolateColor,animationClock:l,fill:s,interpolate:n.interpolate,interpolatePath:o.interpolatePath,animationType:d},t.asString="function _f(){const{dimensions,createPath,offset,addCurve,interpolateColor,animationClock,fill,interpolate,interpolatePath,animationType}=jsThis._closure;{const{height:height,width:width}=dimensions;const startX=width/2;const startY=height/2;const x_offset=width>=50?width/4:width/6;const x_dissapear=width/4;const straightArrow=createPath({x:startX-x_offset,y:startY+offset});addCurve(straightArrow,{to:{x:startX+x_offset,y:startY+offset},c1:{x:startX-x_offset,y:startY+offset},c2:{x:startX+x_offset,y:startY+offset}});const dissapearArrow=createPath({x:x_dissapear-x_offset,y:startY+offset});addCurve(dissapearArrow,{to:{x:x_dissapear+x_offset,y:startY+offset},c1:{x:x_dissapear-x_offset,y:startY+offset},c2:{x:x_dissapear+x_offset,y:startY+offset}});return{stroke:interpolateColor(animationClock.value,[0,18,20],[fill,fill,'transparent']),strokeWidth:interpolate(animationClock.value,[0,20],[5,0]),d:interpolatePath(animationClock.value,[0,20],[straightArrow,animationType==='slider'?dissapearArrow:straightArrow])};}}",t.__workletHash=0xff6768e9d47,t.__location="C:\\Projects\\reanimated-burger-menu\\src\\worklets\\useGetAnimatedPropsSecondLine.ts (12:19)",r.g.__reanimatedWorkletInit(t),t))}},3275:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useGetAnimatedPropsThirdLine=void 0;var n=r(3686),o=r(9629);t.useGetAnimatedPropsThirdLine=function(e){var t,a=e.dimensions,i=e.offset,s=e.fill,l=e.animationClock;return(0,n.useAnimatedProps)(((t=function(){var e=a.height,t=a.width,r=t/2,d=e/2,u=t>=50?t/4:t/6,c=t/6,f=(0,o.createPath)({x:r-u,y:d+i});(0,o.addCurve)(f,{to:{x:r+u,y:d+i},c1:{x:r-u,y:d+i},c2:{x:r+u,y:d+i}});var p=(0,o.createPath)({x:r-c,y:d-c});return(0,o.addCurve)(p,{c1:{x:r-c,y:d-c},c2:{x:r+c,y:d+c},to:{x:r+c,y:d+c}}),{stroke:(0,n.interpolateColor)(l.value,[0,20],[s,s]),strokeWidth:(0,n.interpolate)(l.value,[0,20],[5,5]),d:(0,o.interpolatePath)(l.value,[0,20],[f,p])}})._closure={dimensions:a,createPath:o.createPath,offset:i,addCurve:o.addCurve,interpolateColor:n.interpolateColor,animationClock:l,fill:s,interpolate:n.interpolate,interpolatePath:o.interpolatePath},t.asString="function _f(){const{dimensions,createPath,offset,addCurve,interpolateColor,animationClock,fill,interpolate,interpolatePath}=jsThis._closure;{const{height:height,width:width}=dimensions;const startX=width/2;const startY=height/2;const x_offset=width>=50?width/4:width/6;const directional_offset=width/6;const straightArrow=createPath({x:startX-x_offset,y:startY+offset});addCurve(straightArrow,{to:{x:startX+x_offset,y:startY+offset},c1:{x:startX-x_offset,y:startY+offset},c2:{x:startX+x_offset,y:startY+offset}});const directionalArrow=createPath({x:startX-directional_offset,y:startY-directional_offset});addCurve(directionalArrow,{c1:{x:startX-directional_offset,y:startY-directional_offset},c2:{x:startX+directional_offset,y:startY+directional_offset},to:{x:startX+directional_offset,y:startY+directional_offset}});return{stroke:interpolateColor(animationClock.value,[0,20],[fill,fill]),strokeWidth:interpolate(animationClock.value,[0,20],[5,5]),d:interpolatePath(animationClock.value,[0,20],[straightArrow,directionalArrow])};}}",t.__workletHash=0xac501d3d5f4,t.__location="C:\\Projects\\reanimated-burger-menu\\src\\worklets\\useGetAnimatedPropsThirdLine.ts (11:19)",r.g.__reanimatedWorkletInit(t),t))}},2080:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useGetAnimation=void 0;var n,o=r(7294),a=r(3686),i=r(452),s=((n=function(e){var t=e.type,n=e.animationDuration,s=(0,a.useSharedValue)(0),l=(0,a.useSharedValue)(0),d=(0,a.useSharedValue)(0),u=(0,a.useDerivedValue)(function(){var e=function(){return null!=n?n:250};return e._closure={animationDurationSetting:n,DEFAULT_ANIMATION_DURATION:250},e.asString="function _f(){const{animationDurationSetting,DEFAULT_ANIMATION_DURATION}=jsThis._closure;{var _animationDurationSet;return(_animationDurationSet=animationDurationSetting)!==null&&_animationDurationSet!==void 0?_animationDurationSet:DEFAULT_ANIMATION_DURATION;}}",e.__workletHash=6076975261954,e.__location="C:\\Projects\\reanimated-burger-menu\\src\\worklets\\useGetAnimation.ts (22:4)",r.g.__reanimatedWorkletInit(e),e}(),[n]),c=(0,o.useCallback)((function(){switch(t){case"elasticRotation":s.value=(0,a.withTiming)(0===s.value?20:0,{duration:u.value}),d.value=(0,a.withSpring)(0===s.value?360:0,i.DEFAULT_SPRING_CONFIG);break;case"normalRotation":s.value=(0,a.withTiming)(0===s.value?20:0,{duration:u.value}),d.value=(0,a.withTiming)(0===s.value?360:0,{duration:u.value});break;case"slider":case"boring":s.value=(0,a.withTiming)(0===s.value?20:0,{duration:u.value});break;default:throw new Error("No animation type was given")}}),[t,s,u,d]);return{animationClock:s,translateX:l,rotation:d,animation:c}})._closure={useSharedValue:a.useSharedValue,useDerivedValue:a.useDerivedValue,DEFAULT_ANIMATION_DURATION:250,useCallback:o.useCallback,withTiming:a.withTiming,withSpring:a.withSpring,DEFAULT_SPRING_CONFIG:i.DEFAULT_SPRING_CONFIG},n.asString="function _f({type:type,animationDuration:animationDurationSetting}){const{useSharedValue,useDerivedValue,DEFAULT_ANIMATION_DURATION,useCallback,withTiming,withSpring,DEFAULT_SPRING_CONFIG}=jsThis._closure;{const animationClock=useSharedValue(0);const translateX=useSharedValue(0);const rotation=useSharedValue(0);const animationDuration=useDerivedValue(function(){return animationDurationSetting!==null&&animationDurationSetting!==void 0?animationDurationSetting:DEFAULT_ANIMATION_DURATION;},[animationDurationSetting]);const animation=useCallback(function(){switch(type){case'elasticRotation':{animationClock.value=withTiming(animationClock.value===0?20:0,{duration:animationDuration.value});rotation.value=withSpring(animationClock.value===0?360:0,DEFAULT_SPRING_CONFIG);break;}case'normalRotation':{animationClock.value=withTiming(animationClock.value===0?20:0,{duration:animationDuration.value});rotation.value=withTiming(animationClock.value===0?360:0,{duration:animationDuration.value});break;}case'slider':{animationClock.value=withTiming(animationClock.value===0?20:0,{duration:animationDuration.value});break;}case'boring':{animationClock.value=withTiming(animationClock.value===0?20:0,{duration:animationDuration.value});break;}default:{throw new Error('No animation type was given');}}},[type,animationClock,animationDuration,rotation]);return{animationClock:animationClock,translateX:translateX,rotation:rotation,animation:animation};}}",n.__workletHash=373932406413,n.__location="C:\\Projects\\reanimated-burger-menu\\src\\worklets\\useGetAnimation.ts (12:31)",r.g.__reanimatedWorkletInit(n),n);t.useGetAnimation=s}},i={};function s(e){var t=i[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var r=i[e]={id:e,loaded:!1,exports:{}};try{var n={id:e,module:r,factory:a[e],require:s};s.i.forEach((function(e){e(n)})),r=n.module,n.factory.call(r.exports,r,r.exports,n.require)}catch(e){throw r.error=e,e}return r.loaded=!0,r.exports}s.m=a,s.c=i,s.i=[],e=[],s.O=(t,r,n,o)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,n,o]=e[u],i=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(s.O).every((e=>s.O[e](r[l])))?r.splice(l--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);s.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,s.d(o,a),o},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.hu=e=>e+"."+s.h()+".hot-update.js",s.hmrF=()=>"app."+s.h()+".hot-update.json",s.h=()=>"02cbe921073fdc8e671f",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="@marcuzgabriel/reanimated-burger-menu:",s.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var i,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==o+r){i=c;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",o+r),i.src=e,0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous")),n[e]=[t];var f=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e,t,r,n,o={},a=s.c,i=[],l=[],d="idle";function u(e){d=e;for(var t=[],r=0;r<l.length;r++)t[r]=l[r].call(null,e);return Promise.all(t)}function c(e){if(0===t.length)return e();var r=t;return t=[],Promise.all(r).then((function(){return c(e)}))}function f(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return u("check").then(s.hmrM).then((function(n){return n?u("prepare").then((function(){var o=[];return t=[],r=[],Promise.all(Object.keys(s.hmrC).reduce((function(e,t){return s.hmrC[t](n.c,n.r,n.m,e,r,o),e}),[])).then((function(){return c((function(){return e?h(e):u("ready").then((function(){return o}))}))}))})):u(m()?"ready":"idle").then((function(){return null}))}))}function p(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var t=r.map((function(t){return t(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var a=u("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var i,s=u("apply"),l=function(e){i||(i=e)},d=[];return t.forEach((function(e){if(e.apply){var t=e.apply(l);if(t)for(var r=0;r<t.length;r++)d.push(t[r])}})),Promise.all([a,s]).then((function(){return i?u("fail").then((function(){throw i})):n?h(e).then((function(e){return d.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):u("idle").then((function(){return d}))}))}function m(){if(n)return r||(r=[]),Object.keys(s.hmrI).forEach((function(e){n.forEach((function(t){s.hmrI[e](t,r)}))})),n=void 0,!0}s.hmrD=o,s.i.push((function(h){var m,v,_,y,g=h.module,w=function(r,n){var o=a[n];if(!o)return r;var s=function(t){if(o.hot.active){if(a[t]){var s=a[t].parents;-1===s.indexOf(n)&&s.push(n)}else i=[n],e=t;-1===o.children.indexOf(t)&&o.children.push(t)}else console.warn("[HMR] unexpected require("+t+") from disposed module "+n),i=[];return r(t)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&"e"!==f&&Object.defineProperty(s,f,l(f));return s.e=function(e){return function(e){switch(d){case"ready":return u("prepare"),t.push(e),c((function(){return u("ready")})),e;case"prepare":return t.push(e),e;default:return e}}(r.e(e))},s}(h.require,h.id);g.hot=(m=h.id,v=g,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:_=e!==m,_requireSelf:function(){i=v.parents.slice(),e=_?void 0:m,s(m)},active:!0,accept:function(e,t,r){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)y._acceptedDependencies[e[n]]=t||function(){},y._acceptedErrorHandlers[e[n]]=r;else y._acceptedDependencies[e]=t||function(){},y._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._declinedDependencies[e[t]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=y._disposeHandlers.indexOf(e);t>=0&&y._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":r=[],Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,r)})),u("ready");break;case"ready":Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:f,apply:p,status:function(e){if(!e)return d;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:o[m]},e=void 0,y),g.parents=i,g.children=[],i=[],h.require=w})),s.hmrC={},s.hmrI={}})(),s.p="/",(()=>{var e,t,r,n,o=s.hmrS_jsonp=s.hmrS_jsonp||{143:0},a={};function i(e){return new Promise(((t,r)=>{a[e]=t;var n=s.p+s.hu(e),o=new Error;s.l(n,(t=>{if(a[e]){a[e]=void 0;var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,r(o)}}))}))}function l(a){function i(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),a=o.id,i=o.chain,d=s.c[a];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var u=0;u<d.parents.length;u++){var c=d.parents[u],f=s.c[c];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([c]),moduleId:a,parentId:c};-1===t.indexOf(c)&&(f.hot._acceptedDependencies[a]?(r[c]||(r[c]=[]),l(r[c],[a])):(delete r[c],t.push(c),n.push({chain:i.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}s.f&&delete s.f.jsonpHmr,e=void 0;var d={},u=[],c={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(s.o(t,p)){var h,m=t[p],v=!1,_=!1,y=!1,g="";switch((h=m?i(p):{type:"disposed",moduleId:p}).chain&&(g="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":a.onDeclined&&a.onDeclined(h),a.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+g));break;case"declined":a.onDeclined&&a.onDeclined(h),a.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+g));break;case"unaccepted":a.onUnaccepted&&a.onUnaccepted(h),a.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+g));break;case"accepted":a.onAccepted&&a.onAccepted(h),_=!0;break;case"disposed":a.onDisposed&&a.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(_)for(p in c[p]=m,l(u,h.outdatedModules),h.outdatedDependencies)s.o(h.outdatedDependencies,p)&&(d[p]||(d[p]=[]),l(d[p],h.outdatedDependencies[p]));y&&(l(u,[h.moduleId]),c[p]=f)}t=void 0;for(var w,b=[],k=0;k<u.length;k++){var P=u[k],C=s.c[P];C&&(C.hot._selfAccepted||C.hot._main)&&c[P]!==f&&!C.hot._selfInvalidated&&b.push({module:P,require:C.hot._requireSelf,errorHandler:C.hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete o[e]})),r=void 0;for(var t,n=u.slice();n.length>0;){var a=n.pop(),i=s.c[a];if(i){var l={},c=i.hot._disposeHandlers;for(k=0;k<c.length;k++)c[k].call(null,l);for(s.hmrD[a]=l,i.hot.active=!1,delete s.c[a],delete d[a],k=0;k<i.children.length;k++){var f=s.c[i.children[k]];f&&(e=f.parents.indexOf(a))>=0&&f.parents.splice(e,1)}}}for(var p in d)if(s.o(d,p)&&(i=s.c[p]))for(w=d[p],k=0;k<w.length;k++)t=w[k],(e=i.children.indexOf(t))>=0&&i.children.splice(e,1)},apply:function(e){for(var t in c)s.o(c,t)&&(s.m[t]=c[t]);for(var r=0;r<n.length;r++)n[r](s);for(var o in d)if(s.o(d,o)){var i=s.c[o];if(i){w=d[o];for(var l=[],f=[],p=[],h=0;h<w.length;h++){var m=w[h],v=i.hot._acceptedDependencies[m],_=i.hot._acceptedErrorHandlers[m];if(v){if(-1!==l.indexOf(v))continue;l.push(v),f.push(_),p.push(m)}}for(var y=0;y<l.length;y++)try{l[y].call(null,w)}catch(t){if("function"==typeof f[y])try{f[y](t,{moduleId:o,dependencyId:p[y]})}catch(r){a.onErrored&&a.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:p[y],error:r,originalError:t}),a.ignoreErrored||(e(r),e(t))}else a.onErrored&&a.onErrored({type:"accept-errored",moduleId:o,dependencyId:p[y],error:t}),a.ignoreErrored||e(t)}}}for(var g=0;g<b.length;g++){var k=b[g],P=k.module;try{k.require(P)}catch(t){if("function"==typeof k.errorHandler)try{k.errorHandler(t,{moduleId:P,module:s.c[P]})}catch(r){a.onErrored&&a.onErrored({type:"self-accept-error-handler-errored",moduleId:P,error:r,originalError:t}),a.ignoreErrored||(e(r),e(t))}else a.onErrored&&a.onErrored({type:"self-accept-errored",moduleId:P,error:t}),a.ignoreErrored||e(t)}}return u}}}self.webpackHotUpdate_marcuzgabriel_reanimated_burger_menu=(e,r,o)=>{for(var i in r)s.o(r,i)&&(t[i]=r[i]);o&&n.push(o),a[e]&&(a[e](),a[e]=void 0)},s.hmrI.jsonp=function(e,o){t||(t={},n=[],r=[],o.push(l)),s.o(t,e)||(t[e]=s.m[e])},s.hmrC.jsonp=function(a,d,u,c,f,p){f.push(l),e={},r=d,t=u.reduce((function(e,t){return e[t]=!1,e}),{}),n=[],a.forEach((function(t){s.o(o,t)&&void 0!==o[t]&&(c.push(i(t)),e[t]=!0)})),s.f&&(s.f.jsonpHmr=function(t,r){e&&!s.o(e,t)&&s.o(o,t)&&void 0!==o[t]&&(r.push(i(t)),e[t]=!0)})},s.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(s.p+s.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},s.O.j=e=>0===o[e];var d=(e,t)=>{var r,n,[a,i,l]=t,d=0;if(a.some((e=>0!==o[e]))){for(r in i)s.o(i,r)&&(s.m[r]=i[r]);if(l)var u=l(s)}for(e&&e(t);d<a.length;d++)n=a[d],s.o(o,n)&&o[n]&&o[n][0](),o[a[d]]=0;return s.O(u)},u=self.webpackChunk_marcuzgabriel_reanimated_burger_menu=self.webpackChunk_marcuzgabriel_reanimated_burger_menu||[];u.forEach(d.bind(null,0)),u.push=d.bind(null,u.push.bind(u))})();var l=s.O(void 0,[301],(()=>s(3219)));l=s.O(l)})();
//# sourceMappingURL=app.c6c3e988119cd21c6df2.bundle.js.map