/*! For license information please see 16.db82fcbb.chunk.js.LICENSE.txt */
(this["webpackJsonpmultiparty-meeting"]=this["webpackJsonpmultiparty-meeting"]||[]).push([[16],{344:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},409:function(e,t,n){"use strict";var r=n(130),o=n(132);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=(0,r(n(131)).default)(i.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),"AccountCircle");t.default=a},479:function(e,t,n){"use strict";(function(e){var n="undefined"!==typeof window&&"undefined"!==typeof document&&"undefined"!==typeof navigator,r=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(n&&navigator.userAgent.indexOf(e[t])>=0)return 1;return 0}();var o=n&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then((function(){t=!1,e()})))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),r))}};function i(e){return e&&"[object Function]"==={}.toString.call(e)}function a(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function s(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function c(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=a(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(n+o+r)?e:c(s(e))}function p(e){return e&&e.referenceNode?e.referenceNode:e}var l=n&&!(!window.MSInputMethodContext||!document.documentMode),f=n&&/MSIE 10/.test(navigator.userAgent);function u(e){return 11===e?l:10===e?f:l||f}function d(e){if(!e)return document.documentElement;for(var t=u(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var r=n&&n.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===a(n,"position")?d(n):n:e?e.ownerDocument.documentElement:document.documentElement}function m(e){return null!==e.parentNode?m(e.parentNode):e}function h(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,o=n?t:e,i=document.createRange();i.setStart(r,0),i.setEnd(o,0);var a=i.commonAncestorContainer;if(e!==a&&t!==a||r.contains(o))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||d(e.firstElementChild)===e)}(a)?a:d(a);var s=m(e);return s.host?h(s.host,t):h(e,m(t).host)}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",r=e.nodeName;if("BODY"===r||"HTML"===r){var o=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||o;return i[n]}return e[n]}function g(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=v(t,"top"),o=v(t,"left"),i=n?-1:1;return e.top+=r*i,e.bottom+=r*i,e.left+=o*i,e.right+=o*i,e}function b(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"])+parseFloat(e["border"+r+"Width"])}function y(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],u(10)?parseInt(n["offset"+e])+parseInt(r["margin"+("Height"===e?"Top":"Left")])+parseInt(r["margin"+("Height"===e?"Bottom":"Right")]):0)}function w(e){var t=e.body,n=e.documentElement,r=u(10)&&getComputedStyle(n);return{height:y("Height",t,n,r),width:y("Width",t,n,r)}}var O=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},x=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function j(e){return T({},e,{right:e.left+e.width,bottom:e.top+e.height})}function L(e){var t={};try{if(u(10)){t=e.getBoundingClientRect();var n=v(e,"top"),r=v(e,"left");t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}else t=e.getBoundingClientRect()}catch(d){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?w(e.ownerDocument):{},s=i.width||e.clientWidth||o.width,c=i.height||e.clientHeight||o.height,p=e.offsetWidth-s,l=e.offsetHeight-c;if(p||l){var f=a(e);p-=b(f,"x"),l-=b(f,"y"),o.width-=p,o.height-=l}return j(o)}function M(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=u(10),o="HTML"===t.nodeName,i=L(e),s=L(t),p=c(e),l=a(t),f=parseFloat(l.borderTopWidth),d=parseFloat(l.borderLeftWidth);n&&o&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var m=j({top:i.top-s.top-f,left:i.left-s.left-d,width:i.width,height:i.height});if(m.marginTop=0,m.marginLeft=0,!r&&o){var h=parseFloat(l.marginTop),v=parseFloat(l.marginLeft);m.top-=f-h,m.bottom-=f-h,m.left-=d-v,m.right-=d-v,m.marginTop=h,m.marginLeft=v}return(r&&!n?t.contains(p):t===p&&"BODY"!==p.nodeName)&&(m=g(m,t)),m}function k(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,r=M(e,n),o=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:v(n),s=t?0:v(n,"left"),c={top:a-r.top+r.marginTop,left:s-r.left+r.marginLeft,width:o,height:i};return j(c)}function C(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===a(e,"position"))return!0;var n=s(e);return!!n&&C(n)}function N(e){if(!e||!e.parentElement||u())return document.documentElement;for(var t=e.parentElement;t&&"none"===a(t,"transform");)t=t.parentElement;return t||document.documentElement}function S(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=o?N(e):h(e,p(t));if("viewport"===r)i=k(a,o);else{var l=void 0;"scrollParent"===r?"BODY"===(l=c(s(t))).nodeName&&(l=e.ownerDocument.documentElement):l="window"===r?e.ownerDocument.documentElement:r;var f=M(l,a,o);if("HTML"!==l.nodeName||C(a))i=f;else{var u=w(e.ownerDocument),d=u.height,m=u.width;i.top+=f.top-f.marginTop,i.bottom=d+f.top,i.left+=f.left-f.marginLeft,i.right=m+f.left}}var v="number"===typeof(n=n||0);return i.left+=v?n:n.left||0,i.top+=v?n:n.top||0,i.right-=v?n:n.right||0,i.bottom-=v?n:n.bottom||0,i}function D(e){return e.width*e.height}function R(e,t,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=S(n,r,i,o),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},c=Object.keys(s).map((function(e){return T({key:e},s[e],{area:D(s[e])})})).sort((function(e,t){return t.area-e.area})),p=c.filter((function(e){var t=e.width,r=e.height;return t>=n.clientWidth&&r>=n.clientHeight})),l=p.length>0?p[0].key:c[0].key,f=e.split("-")[1];return l+(f?"-"+f:"")}function F(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=r?N(t):h(t,p(n));return M(n,o,r)}function P(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),r=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function B(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function A(e,t,n){n=n.split("-")[0];var r=P(e),o={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",s=i?"left":"top",c=i?"height":"width",p=i?"width":"height";return o[a]=t[a]+t[c]/2-r[c]/2,o[s]=n===s?t[s]-r[p]:t[B(s)],o}function H(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function W(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var r=H(e,(function(e){return e[t]===n}));return e.indexOf(r)}(e,"name",n))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&i(n)&&(t.offsets.popper=j(t.offsets.popper),t.offsets.reference=j(t.offsets.reference),t=n(t,e))})),t}function I(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=F(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=R(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=A(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=W(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function z(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function U(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length;r++){var o=t[r],i=o?""+o+n:e;if("undefined"!==typeof document.body.style[i])return i}return null}function V(){return this.state.isDestroyed=!0,z(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[U("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function Y(e){var t=e.ownerDocument;return t?t.defaultView:window}function $(e,t,n,r){n.updateBound=r,Y(e).addEventListener("resize",n.updateBound,{passive:!0});var o=c(e);return function e(t,n,r,o){var i="BODY"===t.nodeName,a=i?t.ownerDocument.defaultView:t;a.addEventListener(n,r,{passive:!0}),i||e(c(a.parentNode),n,r,o),o.push(a)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function q(){this.state.eventsEnabled||(this.state=$(this.reference,this.options,this.state,this.scheduleUpdate))}function _(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,Y(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)})),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function G(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function J(e,t){Object.keys(t).forEach((function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&G(t[n])&&(r="px"),e.style[n]=t[n]+r}))}var X=n&&/Firefox/i.test(navigator.userAgent);function K(e,t,n){var r=H(e,(function(e){return e.name===t})),o=!!r&&e.some((function(e){return e.name===n&&e.enabled&&e.order<r.order}));if(!o){var i="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}var Q=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Z=Q.slice(3);function ee(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Z.indexOf(e),r=Z.slice(n+1).concat(Z.slice(0,n));return t?r.reverse():r}var te="flip",ne="clockwise",re="counterclockwise";function oe(e,t,n,r){var o=[0,0],i=-1!==["right","left"].indexOf(r),a=e.split(/(\+|\-)/).map((function(e){return e.trim()})),s=a.indexOf(H(a,(function(e){return-1!==e.search(/,|\s/)})));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var c=/\s*,\s*|\s+/,p=-1!==s?[a.slice(0,s).concat([a[s].split(c)[0]]),[a[s].split(c)[1]].concat(a.slice(s+1))]:[a];return(p=p.map((function(e,r){var o=(1===r?!i:i)?"height":"width",a=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,r){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+o[1],a=o[2];if(!i)return e;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=r}return j(s)[t]/100*i}if("vh"===a||"vw"===a){return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}return i}(e,o,t,n)}))}))).forEach((function(e,t){e.forEach((function(n,r){G(n)&&(o[t]+=n*("-"===e[r-1]?-1:1))}))})),o}var ie={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var o=e.offsets,i=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),c=s?"left":"top",p=s?"width":"height",l={start:E({},c,i[c]),end:E({},c,i[c]+i[p]-a[p])};e.offsets.popper=T({},a,l[r])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,r=e.placement,o=e.offsets,i=o.popper,a=o.reference,s=r.split("-")[0],c=void 0;return c=G(+n)?[+n,0]:oe(n,i,a,s),"left"===s?(i.top+=c[0],i.left-=c[1]):"right"===s?(i.top+=c[0],i.left+=c[1]):"top"===s?(i.left+=c[0],i.top-=c[1]):"bottom"===s&&(i.left+=c[0],i.top+=c[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||d(e.instance.popper);e.instance.reference===n&&(n=d(n));var r=U("transform"),o=e.instance.popper.style,i=o.top,a=o.left,s=o[r];o.top="",o.left="",o[r]="";var c=S(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);o.top=i,o.left=a,o[r]=s,t.boundaries=c;var p=t.priority,l=e.offsets.popper,f={primary:function(e){var n=l[e];return l[e]<c[e]&&!t.escapeWithReference&&(n=Math.max(l[e],c[e])),E({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=l[n];return l[e]>c[e]&&!t.escapeWithReference&&(r=Math.min(l[n],c[e]-("right"===e?l.width:l.height))),E({},n,r)}};return p.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";l=T({},l,f[t](e))})),e.offsets.popper=l,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,r=t.reference,o=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",c=a?"left":"top",p=a?"width":"height";return n[s]<i(r[c])&&(e.offsets.popper[c]=i(r[c])-n[p]),n[c]>i(r[s])&&(e.offsets.popper[c]=i(r[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!K(e.instance.modifiers,"arrow","keepTogether"))return e;var r=t.element;if("string"===typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],i=e.offsets,s=i.popper,c=i.reference,p=-1!==["left","right"].indexOf(o),l=p?"height":"width",f=p?"Top":"Left",u=f.toLowerCase(),d=p?"left":"top",m=p?"bottom":"right",h=P(r)[l];c[m]-h<s[u]&&(e.offsets.popper[u]-=s[u]-(c[m]-h)),c[u]+h>s[m]&&(e.offsets.popper[u]+=c[u]+h-s[m]),e.offsets.popper=j(e.offsets.popper);var v=c[u]+c[l]/2-h/2,g=a(e.instance.popper),b=parseFloat(g["margin"+f]),y=parseFloat(g["border"+f+"Width"]),w=v-e.offsets.popper[u]-b-y;return w=Math.max(Math.min(s[l]-h,w),0),e.arrowElement=r,e.offsets.arrow=(E(n={},u,Math.round(w)),E(n,d,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(z(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=S(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),r=e.placement.split("-")[0],o=B(r),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case te:a=[r,o];break;case ne:a=ee(r);break;case re:a=ee(r,!0);break;default:a=t.behavior}return a.forEach((function(s,c){if(r!==s||a.length===c+1)return e;r=e.placement.split("-")[0],o=B(r);var p=e.offsets.popper,l=e.offsets.reference,f=Math.floor,u="left"===r&&f(p.right)>f(l.left)||"right"===r&&f(p.left)<f(l.right)||"top"===r&&f(p.bottom)>f(l.top)||"bottom"===r&&f(p.top)<f(l.bottom),d=f(p.left)<f(n.left),m=f(p.right)>f(n.right),h=f(p.top)<f(n.top),v=f(p.bottom)>f(n.bottom),g="left"===r&&d||"right"===r&&m||"top"===r&&h||"bottom"===r&&v,b=-1!==["top","bottom"].indexOf(r),y=!!t.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&m||!b&&"start"===i&&h||!b&&"end"===i&&v),w=!!t.flipVariationsByContent&&(b&&"start"===i&&m||b&&"end"===i&&d||!b&&"start"===i&&v||!b&&"end"===i&&h),O=y||w;(u||g||O)&&(e.flipped=!0,(u||g)&&(r=a[c+1]),O&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=r+(i?"-"+i:""),e.offsets.popper=T({},e.offsets.popper,A(e.instance.popper,e.offsets.reference,e.placement)),e=W(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,o=r.popper,i=r.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=i[n]-(s?o[a?"width":"height"]:0),e.placement=B(t),e.offsets.popper=j(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=H(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,r=t.y,o=e.offsets.popper,i=H(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==i?i:t.gpuAcceleration,s=d(e.instance.popper),c=L(s),p={position:o.position},l=function(e,t){var n=e.offsets,r=n.popper,o=n.reference,i=Math.round,a=Math.floor,s=function(e){return e},c=i(o.width),p=i(r.width),l=-1!==["left","right"].indexOf(e.placement),f=-1!==e.placement.indexOf("-"),u=t?l||f||c%2===p%2?i:a:s,d=t?i:s;return{left:u(c%2===1&&p%2===1&&!f&&t?r.left-1:r.left),top:d(r.top),bottom:d(r.bottom),right:u(r.right)}}(e,window.devicePixelRatio<2||!X),f="bottom"===n?"top":"bottom",u="right"===r?"left":"right",m=U("transform"),h=void 0,v=void 0;if(v="bottom"===f?"HTML"===s.nodeName?-s.clientHeight+l.bottom:-c.height+l.bottom:l.top,h="right"===u?"HTML"===s.nodeName?-s.clientWidth+l.right:-c.width+l.right:l.left,a&&m)p[m]="translate3d("+h+"px, "+v+"px, 0)",p[f]=0,p[u]=0,p.willChange="transform";else{var g="bottom"===f?-1:1,b="right"===u?-1:1;p[f]=v*g,p[u]=h*b,p.willChange=f+", "+u}var y={"x-placement":e.placement};return e.attributes=T({},y,e.attributes),e.styles=T({},p,e.styles),e.arrowStyles=T({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return J(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach((function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&J(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,r,o){var i=F(o,t,e,n.positionFixed),a=R(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),J(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},ae=function(){function e(t,n){var r=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};O(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=o(this.update.bind(this)),this.options=T({},e.Defaults,a),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(T({},e.Defaults.modifiers,a.modifiers)).forEach((function(t){r.options.modifiers[t]=T({},e.Defaults.modifiers[t]||{},a.modifiers?a.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return T({name:e},r.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&i(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)})),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return x(e,[{key:"update",value:function(){return I.call(this)}},{key:"destroy",value:function(){return V.call(this)}},{key:"enableEventListeners",value:function(){return q.call(this)}},{key:"disableEventListeners",value:function(){return _.call(this)}}]),e}();ae.Utils=("undefined"!==typeof window?window:e).PopperUtils,ae.placements=Q,ae.Defaults=ie,t.a=ae}).call(this,n(113))},662:function(e,t,n){"use strict";var r=n(2),o=n(4),i=n(0),a=(n(6),n(5)),s=n(7),c=n(36),p=n(206),l=n(13),f=i.forwardRef((function(e,t){var n=e.edge,s=void 0!==n&&n,c=e.children,f=e.classes,u=e.className,d=e.color,m=void 0===d?"default":d,h=e.disabled,v=void 0!==h&&h,g=e.disableFocusRipple,b=void 0!==g&&g,y=e.size,w=void 0===y?"medium":y,O=Object(o.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return i.createElement(p.a,Object(r.a)({className:Object(a.a)(f.root,u,"default"!==m&&f["color".concat(Object(l.a)(m))],v&&f.disabled,"small"===w&&f["size".concat(Object(l.a)(w))],{start:f.edgeStart,end:f.edgeEnd}[s]),centerRipple:!0,focusRipple:!b,disabled:v,ref:t},O),i.createElement("span",{className:f.label},c))}));t.a=Object(s.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(c.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(f)},683:function(e,t,n){"use strict";var r=n(2),o=n(49),i=n(4),a=n(17),s=n(0),c=n(15),p=(n(6),n(5)),l=n(330),f=n(36),u=n(7),d=n(13),m=n(286),h=n(479),v=n(128),g=n(331),b=n(51),y=n(50),w=n(14);function O(e){return"function"===typeof e?e():e}var x="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,E={},T=s.forwardRef((function(e,t){var n=e.anchorEl,o=e.children,a=e.container,c=e.disablePortal,p=void 0!==c&&c,l=e.keepMounted,f=void 0!==l&&l,u=e.modifiers,d=e.open,m=e.placement,T=void 0===m?"bottom":m,j=e.popperOptions,L=void 0===j?E:j,M=e.popperRef,k=e.style,C=e.transition,N=void 0!==C&&C,S=Object(i.a)(e,["anchorEl","children","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"]),D=s.useRef(null),R=Object(w.a)(D,t),F=s.useRef(null),P=Object(w.a)(F,M),B=s.useRef(P);x((function(){B.current=P}),[P]),s.useImperativeHandle(M,(function(){return F.current}),[]);var A=s.useState(!0),H=A[0],W=A[1],I=function(e,t){if("ltr"===(t&&t.direction||"ltr"))return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(T,Object(v.a)()),z=s.useState(I),U=z[0],V=z[1];s.useEffect((function(){F.current&&F.current.update()}));var Y=s.useCallback((function(){if(D.current&&n&&d){F.current&&(F.current.destroy(),B.current(null));var e=function(e){V(e.placement)},t=(O(n),new h.a(O(n),D.current,Object(r.a)({placement:I},L,{modifiers:Object(r.a)({},p?{}:{preventOverflow:{boundariesElement:"window"}},u,L.modifiers),onCreate:Object(b.a)(e,L.onCreate),onUpdate:Object(b.a)(e,L.onUpdate)})));B.current(t)}}),[n,p,u,d,I,L]),$=s.useCallback((function(e){Object(y.a)(R,e),Y()}),[R,Y]),q=function(){F.current&&(F.current.destroy(),B.current(null))};if(s.useEffect((function(){return function(){q()}}),[]),s.useEffect((function(){d||N||q()}),[d,N]),!f&&!d&&(!N||H))return null;var _={placement:U};return N&&(_.TransitionProps={in:d,onEnter:function(){W(!1)},onExited:function(){W(!0),q()}}),s.createElement(g.a,{disablePortal:p,container:a},s.createElement("div",Object(r.a)({ref:$,role:"tooltip"},S,{style:Object(r.a)({position:"fixed",top:0,left:0,display:d||!f||N?null:"none"},k)}),"function"===typeof o?o(_):o))})),j=n(142),L=n(91),M=n(92),k=n(27);function C(e){return Math.round(1e5*e)/1e5}var N=!1,S=null;var D=s.forwardRef((function(e,t){var n=e.arrow,a=void 0!==n&&n,f=e.children,u=e.classes,h=e.disableFocusListener,v=void 0!==h&&h,g=e.disableHoverListener,b=void 0!==g&&g,O=e.disableTouchListener,x=void 0!==O&&O,E=e.enterDelay,C=void 0===E?100:E,D=e.enterNextDelay,R=void 0===D?0:D,F=e.enterTouchDelay,P=void 0===F?700:F,B=e.id,A=e.interactive,H=void 0!==A&&A,W=e.leaveDelay,I=void 0===W?0:W,z=e.leaveTouchDelay,U=void 0===z?1500:z,V=e.onClose,Y=e.onOpen,$=e.open,q=e.placement,_=void 0===q?"bottom":q,G=e.PopperComponent,J=void 0===G?T:G,X=e.PopperProps,K=e.title,Q=e.TransitionComponent,Z=void 0===Q?m.a:Q,ee=e.TransitionProps,te=Object(i.a)(e,["arrow","children","classes","disableFocusListener","disableHoverListener","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","id","interactive","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"]),ne=Object(k.a)(),re=s.useState(),oe=re[0],ie=re[1],ae=s.useState(null),se=ae[0],ce=ae[1],pe=s.useRef(!1),le=s.useRef(),fe=s.useRef(),ue=s.useRef(),de=s.useRef(),me=Object(M.a)({controlled:$,default:!1,name:"Tooltip",state:"open"}),he=Object(o.a)(me,2),ve=he[0],ge=he[1],be=ve,ye=Object(j.a)(B);s.useEffect((function(){return function(){clearTimeout(le.current),clearTimeout(fe.current),clearTimeout(ue.current),clearTimeout(de.current)}}),[]);var we=function(e){clearTimeout(S),N=!0,ge(!0),Y&&Y(e)},Oe=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var n=f.props;"mouseover"===t.type&&n.onMouseOver&&e&&n.onMouseOver(t),pe.current&&"touchstart"!==t.type||(oe&&oe.removeAttribute("title"),clearTimeout(fe.current),clearTimeout(ue.current),C||N&&R?(t.persist(),fe.current=setTimeout((function(){we(t)}),N?R:C)):we(t))}},xe=Object(L.a)(),Ee=xe.isFocusVisible,Te=xe.onBlurVisible,je=xe.ref,Le=s.useState(!1),Me=Le[0],ke=Le[1],Ce=function(){Me&&(ke(!1),Te())},Ne=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){oe||ie(t.currentTarget),Ee(t)&&(ke(!0),Oe()(t));var n=f.props;n.onFocus&&e&&n.onFocus(t)}},Se=function(e){clearTimeout(S),S=setTimeout((function(){N=!1}),800+I),ge(!1),V&&V(e),clearTimeout(le.current),le.current=setTimeout((function(){pe.current=!1}),ne.transitions.duration.shortest)},De=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(t){var n=f.props;"blur"===t.type&&(n.onBlur&&e&&n.onBlur(t),Ce()),"mouseleave"===t.type&&n.onMouseLeave&&t.currentTarget===oe&&n.onMouseLeave(t),clearTimeout(fe.current),clearTimeout(ue.current),t.persist(),ue.current=setTimeout((function(){Se(t)}),I)}},Re=function(e){pe.current=!0;var t=f.props;t.onTouchStart&&t.onTouchStart(e)},Fe=Object(w.a)(ie,t),Pe=Object(w.a)(je,Fe),Be=s.useCallback((function(e){Object(y.a)(Pe,c.findDOMNode(e))}),[Pe]),Ae=Object(w.a)(f.ref,Be);""===K&&(be=!1);var He=!be&&!b,We=Object(r.a)({"aria-describedby":be?ye:null,title:He&&"string"===typeof K?K:null},te,f.props,{className:Object(p.a)(te.className,f.props.className),onTouchStart:Re,ref:Ae}),Ie={};x||(We.onTouchStart=function(e){Re(e),clearTimeout(ue.current),clearTimeout(le.current),clearTimeout(de.current),e.persist(),de.current=setTimeout((function(){Oe()(e)}),P)},We.onTouchEnd=function(e){f.props.onTouchEnd&&f.props.onTouchEnd(e),clearTimeout(de.current),clearTimeout(ue.current),e.persist(),ue.current=setTimeout((function(){Se(e)}),U)}),b||(We.onMouseOver=Oe(),We.onMouseLeave=De(),H&&(Ie.onMouseOver=Oe(!1),Ie.onMouseLeave=De(!1))),v||(We.onFocus=Ne(),We.onBlur=De(),H&&(Ie.onFocus=Ne(!1),Ie.onBlur=De(!1)));var ze=s.useMemo((function(){return Object(l.a)({popperOptions:{modifiers:{arrow:{enabled:Boolean(se),element:se}}}},X)}),[se,X]);return s.createElement(s.Fragment,null,s.cloneElement(f,We),s.createElement(J,Object(r.a)({className:Object(p.a)(u.popper,H&&u.popperInteractive,a&&u.popperArrow),placement:_,anchorEl:oe,open:!!oe&&be,id:We["aria-describedby"],transition:!0},Ie,ze),(function(e){var t=e.placement,n=e.TransitionProps;return s.createElement(Z,Object(r.a)({timeout:ne.transitions.duration.shorter},n,ee),s.createElement("div",{className:Object(p.a)(u.tooltip,u["tooltipPlacement".concat(Object(d.a)(t.split("-")[0]))],pe.current&&u.touch,a&&u.tooltipArrow)},K,a?s.createElement("span",{className:u.arrow,ref:ce}):null))})))}));t.a=Object(u.a)((function(e){return{popper:{zIndex:e.zIndex.tooltip,pointerEvents:"none"},popperInteractive:{pointerEvents:"auto"},popperArrow:{'&[x-placement*="bottom"] $arrow':{top:0,left:0,marginTop:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"0 100%"}},'&[x-placement*="top"] $arrow':{bottom:0,left:0,marginBottom:"-0.71em",marginLeft:4,marginRight:4,"&::before":{transformOrigin:"100% 0"}},'&[x-placement*="right"] $arrow':{left:0,marginLeft:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"100% 100%"}},'&[x-placement*="left"] $arrow':{right:0,marginRight:"-0.71em",height:"1em",width:"0.71em",marginTop:4,marginBottom:4,"&::before":{transformOrigin:"0 0"}}},tooltip:{backgroundColor:Object(f.c)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(10),lineHeight:"".concat(C(1.4),"em"),maxWidth:300,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},tooltipArrow:{position:"relative",margin:"0"},arrow:{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:Object(f.c)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}},touch:{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:"".concat(C(16/14),"em"),fontWeight:e.typography.fontWeightRegular},tooltipPlacementLeft:Object(a.a)({transformOrigin:"right center",margin:"0 24px "},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementRight:Object(a.a)({transformOrigin:"left center",margin:"0 24px"},e.breakpoints.up("sm"),{margin:"0 14px"}),tooltipPlacementTop:Object(a.a)({transformOrigin:"center bottom",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"}),tooltipPlacementBottom:Object(a.a)({transformOrigin:"center top",margin:"24px 0"},e.breakpoints.up("sm"),{margin:"14px 0"})}}),{name:"MuiTooltip",flip:!1})(D)}}]);
//# sourceMappingURL=16.db82fcbb.chunk.js.map