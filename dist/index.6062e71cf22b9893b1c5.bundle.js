"use strict";
(self["webpackChunkmason_bennett_business_card"] = self["webpackChunkmason_bennett_business_card"] || []).push([[826],{

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 816:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
;// CONCATENATED MODULE: ./src/assets/images/profile.jpg
const profile_namespaceObject = __webpack_require__.p + "60b3fa6ce63d29e2afaa.jpg";
;// CONCATENATED MODULE: ./src/components/Profile/Profile.js



function Profile() {
  return /*#__PURE__*/react.createElement("figure", {
    className: "profile"
  }, /*#__PURE__*/react.createElement("img", {
    src: profile_namespaceObject,
    alt: "Mason Bennett"
  }));
}
;// CONCATENATED MODULE: ./src/components/Abstract/Abstract.js


function Abstract() {
  return /*#__PURE__*/react.createElement("header", {
    className: "abstract"
  }, /*#__PURE__*/react.createElement("h1", {
    className: "name"
  }, "Mason Bennett"), /*#__PURE__*/react.createElement("h2", {
    className: "profession"
  }, "Full-Stack Developer"), /*#__PURE__*/react.createElement("h3", {
    className: "business"
  }, "MB Applications"));
}
;// CONCATENATED MODULE: ./src/assets/images/icons/envelope.svg
const envelope_namespaceObject = __webpack_require__.p + "b4111e35b483f2274aa1.svg";
;// CONCATENATED MODULE: ./src/components/Contact/Contact.js



function Contact() {
  return /*#__PURE__*/react.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/react.createElement("a", {
    className: "link email"
  }, /*#__PURE__*/react.createElement("figure", {
    className: "contact-icon"
  }, /*#__PURE__*/react.createElement("svg", {
    id: "email",
    viewBox: "0 0 23.4375 16.875",
    width: "500",
    height: "360",
    version: "1.1",
    sodipodiDocname: "envelope.svg",
    inkscapeVersion: "1.2.2 (732a01da63, 2022-12-09)",
    xmlnsInkscape: "http://www.inkscape.org/namespaces/inkscape",
    xmlnsSodipodi: "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsSvg: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("defs", {
    id: "defs9"
  }), /*#__PURE__*/react.createElement("sodipodiNamedview", {
    id: "namedview7",
    pagecolor: "#ffffff",
    bordercolor: "#000000",
    borderopacity: "0.25",
    inkscapeShowpageshadow: "2",
    inkscapePageopacity: "0.0",
    inkscapePagecheckerboard: "0",
    inkscapeDeskcolor: "#d1d1d1",
    showgrid: "false",
    inkscapeZoom: "0.57906046",
    inkscapeCx: "285.80781",
    inkscapeCy: "124.33935",
    "inkscapeWindow-width": "1920",
    "inkscapeWindow-height": "1080",
    "inkscapeWindow-x": "0",
    "inkscapeWindow-y": "0",
    "inkscapeWindow-maximized": "0",
    "inkscapeCurrent-layer": "Filled"
  }), /*#__PURE__*/react.createElement("path", {
    d: "m 23.392577,3.4839204 -8.220703,6.4569888 a 4.8896484,3.8405965 0 0 1 -6.9062488,0 L 0.04492187,3.4839204 C 0.03125,3.6051135 0,3.7148011 0,3.8352272 V 13.039773 A 4.8886718,3.8398295 0 0 0 4.8828124,16.875 H 18.554687 A 4.8886718,3.8398295 0 0 0 23.4375,13.039773 V 3.8352272 c 0,-0.1204261 -0.03125,-0.2301137 -0.04492,-0.3513068 z",
    id: "path2"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M 13.791016,8.8563067 22.710937,1.8493466 A 4.8691404,3.8244885 0 0 0 18.554687,0 H 4.8828124 A 4.8691404,3.8244885 0 0 0 0.72656248,1.8493466 L 9.6464841,8.8563067 a 2.9365234,2.3065057 0 0 0 4.1445319,0 z",
    id: "path4"
  }))), /*#__PURE__*/react.createElement("p", null, "Email")), /*#__PURE__*/react.createElement("a", {
    className: "link linkedin"
  }, /*#__PURE__*/react.createElement("figure", {
    className: "contact-icon"
  }, /*#__PURE__*/react.createElement("svg", {
    version: "1.1",
    id: "linkedin",
    x: "0px",
    y: "0px",
    viewBox: "0 0 23.4375 16.875",
    xmlSpace: "preserve",
    width: "500",
    height: "360",
    sodipodiDocname: "linkedin.svg",
    inkscapeVersion: "1.2.2 (732a01da63, 2022-12-09)",
    xmlnsInkscape: "http://www.inkscape.org/namespaces/inkscape",
    xmlnsSodipodi: "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsSvg: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("defs", {
    id: "defs300"
  }), /*#__PURE__*/react.createElement("sodipodiNamedview", {
    id: "namedview298",
    pagecolor: "#ffffff",
    bordercolor: "#000000",
    borderopacity: "0.25",
    inkscapeShowpageshadow: "2",
    inkscapePageopacity: "0.0",
    inkscapePagecheckerboard: "0",
    inkscapeDeskcolor: "#d1d1d1",
    showgrid: "false",
    inkscapeZoom: "0.4609375",
    inkscapeCx: "265.76271",
    inkscapeCy: "323.25424",
    "inkscapeWindow-width": "1920",
    "inkscapeWindow-height": "1080",
    "inkscapeWindow-x": "0",
    "inkscapeWindow-y": "0",
    "inkscapeWindow-maximized": "0",
    "inkscapeCurrent-layer": "Capa_1"
  }), /*#__PURE__*/react.createElement("g", {
    id: "g295",
    transform: "matrix(0.97655935,0,0,0.82574003,0,-1.471356)"
  }, /*#__PURE__*/react.createElement("path", {
    id: "Path_2525",
    d: "m 23.002,21.584 h 0.227 l -0.435,-0.658 v 0 c 0.266,0 0.407,-0.169 0.409,-0.376 0,-0.008 0,-0.017 -10e-4,-0.025 0,-0.282 -0.17,-0.417 -0.519,-0.417 h -0.564 v 1.476 h 0.212 v -0.643 h 0.261 z m -0.425,-0.81 h -0.246 v -0.499 h 0.312 c 0.161,0 0.345,0.026 0.345,0.237 0,0.242 -0.186,0.262 -0.412,0.262"
  }), /*#__PURE__*/react.createElement("path", {
    id: "Path_2520",
    d: "m 17.291,19.073 h -3.007 v -4.709 c 0,-1.123 -0.02,-2.568 -1.564,-2.568 -1.566,0 -1.806,1.223 -1.806,2.487 v 4.79 H 7.908 V 9.389 h 2.887 v 1.323 h 0.04 c 0.589,-1.006 1.683,-1.607 2.848,-1.564 3.048,0 3.609,2.005 3.609,4.612 z M 4.515,8.065 C 3.551,8.065 2.77,7.284 2.77,6.32 c 0,-0.964 0.781,-1.745 1.745,-1.745 0.964,0 1.745,0.781 1.745,1.745 0,0.964 -0.781,1.745 -1.745,1.745 v 0 M 6.018,19.073 H 3.008 V 9.389 h 3.01 z M 18.79,1.783 H 1.497 C 0.68,1.774 0.01,2.429 0,3.246 V 20.61 c 0.01,0.818 0.68,1.473 1.497,1.464 H 18.79 c 0.819,0.01 1.492,-0.645 1.503,-1.464 V 3.245 C 20.281,2.426 19.608,1.771 18.79,1.782"
  }), /*#__PURE__*/react.createElement("path", {
    id: "Path_2526",
    d: "m 22.603,19.451 c -0.764,0.007 -1.378,0.633 -1.37,1.397 0.007,0.764 0.633,1.378 1.397,1.37 0.764,-0.007 1.378,-0.633 1.37,-1.397 -0.007,-0.754 -0.617,-1.363 -1.37,-1.37 h -0.027 m 0.032,2.608 c -0.67,0.011 -1.254,-0.522 -1.265,-1.192 -0.011,-0.67 0.523,-1.222 1.193,-1.233 0.67,-0.011 1.222,0.523 1.233,1.193 0,0.007 0,0.013 0,0.02 0.014,0.655 -0.506,1.198 -1.161,1.212 h -0.031"
  })))), /*#__PURE__*/react.createElement("p", null, "LinkedIn")));
}
;// CONCATENATED MODULE: ./src/assets/images/icons/css3-alt.svg
const css3_alt_namespaceObject = __webpack_require__.p + "cf1624af08d938b7ba3c.svg";
;// CONCATENATED MODULE: ./src/assets/images/icons/figma.svg
const figma_namespaceObject = __webpack_require__.p + "423eb53e707954eea385.svg";
;// CONCATENATED MODULE: ./src/assets/images/icons/wordpress.svg
const wordpress_namespaceObject = __webpack_require__.p + "c1b6448320c1370543aa.svg";
;// CONCATENATED MODULE: ./src/components/Synopsis/Synopsis.js





function Synopsis() {
  return /*#__PURE__*/react.createElement("div", {
    className: "synopsis"
  }, /*#__PURE__*/react.createElement("section", {
    className: "about"
  }, /*#__PURE__*/react.createElement("h2", null, "About"), /*#__PURE__*/react.createElement("p", null, "I am a full-stack web developer based in Pennsylvania. My passion for programming stems from a deep appreciation for systems. This passion fuels my constant pursuit of challenges, as they offer opportunities to craft innovative systems aimed at solving persistent issues or devising methodologies to address future occurrences in a sustainable manner.")), /*#__PURE__*/react.createElement("section", {
    className: "values"
  }, /*#__PURE__*/react.createElement("h2", null, "My Values"), /*#__PURE__*/react.createElement("p", null, "When I look for a company to work with, I am searching for someone with a strong identity, a clear purpose, and the determination to see their goals through. I promise to do the utmost to help your company realize its vision.")), /*#__PURE__*/react.createElement("section", {
    className: "skills"
  }, /*#__PURE__*/react.createElement("h2", null, "Skills"), /*#__PURE__*/react.createElement("div", {
    className: "skills_container"
  }, /*#__PURE__*/react.createElement("figure", {
    className: "skills_item"
  }, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    version: "1.1",
    id: "Capa_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    width: "512",
    height: "512"
  }, /*#__PURE__*/react.createElement("g", {
    id: "layer1_00000069379214082054225550000004600713903019782292_",
    transform: "translate(-193.633,-276.3622)"
  }, /*#__PURE__*/react.createElement("g", {
    id: "g3013_00000093138603932973688150000013863908198644500923_",
    transform: "translate(119,276.3622)"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M78.131,4.717l1.547,17.356L86.623,24l6.963-1.93l1.549-17.353H78.131z M81.295,8.264h5.33v2.129h-5.137L81.295,8.264z     M86.633,14.701h2.614L89,17.462l-2.367,0.639V14.701z M86.633,12.573v-2.18h2.992l-0.194,2.18H86.633z M81.679,12.573h4.947    v2.129H81.87L81.679,12.573z M92.259,20.965l-5.626,1.56v-2.209l-0.01,0.003l-4.36-1.211l-0.298-3.342h2.137l0.152,1.698    l2.37,0.64l0.002,0v2.214l0.007-0.002l4.357-1.208l0.968-10.844h-5.325V6.135h6.95L92.259,20.965z"
  }), /*#__PURE__*/react.createElement("polygon", {
    points: "91.958,8.264 90.99,19.108 86.633,20.315 86.633,18.101 89,17.462 89.247,14.701 86.633,14.701 86.633,12.573     89.431,12.573 89.625,10.393 86.633,10.393 86.633,8.264   "
  }), /*#__PURE__*/react.createElement("rect", {
    x: "86.626",
    y: "12.573",
    width: "0.007",
    height: "2.129"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "86.626",
    y: "8.264",
    width: "0.007",
    height: "2.129"
  }), /*#__PURE__*/react.createElement("rect", {
    x: "86.625",
    y: "18.102",
    width: "0.008",
    height: "2.214"
  }), /*#__PURE__*/react.createElement("path", {
    id: "path2999_00000183935336956994173500000009856227378309738643_",
    d: "M82.133,0h2.578v1.078h-1.5v1.078h1.5v1.078h-2.578V0    z"
  }), /*#__PURE__*/react.createElement("path", {
    id: "path3001_00000096055226761582317920000005110122629658984122_",
    d: "M85.227,0h2.578v0.938h-1.5v0.188h1.5v2.156h-2.578    V2.297h1.5V2.109h-1.5V0z"
  }), /*#__PURE__*/react.createElement("path", {
    id: "path3003_00000136402835624896882680000006132478931596835508_",
    d: "M88.32,0h2.578v0.938h-1.5v0.188h1.5v2.156H88.32    V2.297h1.5V2.109h-1.5V0z"
  }), /*#__PURE__*/react.createElement("polygon", {
    points: "91.958,8.264 90.99,19.108 86.633,20.315 86.626,20.317 86.626,18.103 86.633,18.101 89,17.462 89.247,14.701     86.626,14.701 86.626,12.573 89.431,12.573 89.625,10.393 86.626,10.393 86.626,8.264   "
  }))))), /*#__PURE__*/react.createElement("figure", {
    className: "skills_item"
  }, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    version: "1.1",
    id: "Capa_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    width: "512",
    height: "512"
  }, /*#__PURE__*/react.createElement("g", {
    id: "Group"
  }, /*#__PURE__*/react.createElement("g", {
    id: "Rectangle_55_x5F_2"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M18.312,8.245c1.222-0.803,2.031-2.187,2.031-3.755c0-2.476-2.015-4.49-4.491-4.49H8.148C5.672,0,3.657,2.014,3.657,4.49    c0,1.568,0.809,2.952,2.031,3.755C4.466,9.048,3.657,10.432,3.657,12s0.809,2.952,2.031,3.755    c-1.222,0.802-2.031,2.186-2.031,3.755c0,2.476,2.025,4.49,4.515,4.49c2.516,0,4.564-2.036,4.564-4.539V15.32    c0.798,0.727,1.858,1.17,3.019,1.17h0.097c2.476,0,4.491-2.014,4.491-4.49C20.343,10.432,19.534,9.048,18.312,8.245z     M12.735,1.471h3.117c1.665,0,3.02,1.354,3.02,3.019s-1.355,3.02-3.02,3.02h-3.117V1.471z M5.128,4.49    c0-1.665,1.355-3.019,3.02-3.019h3.117V7.51H8.148C6.483,7.51,5.128,6.155,5.128,4.49z M5.128,12c0-1.665,1.355-3.019,3.02-3.019    h3.117v6.039H8.129C6.473,15.009,5.128,13.658,5.128,12z M11.265,19.461c0,1.692-1.388,3.068-3.093,3.068    c-1.678,0-3.044-1.354-3.044-3.019s1.355-3.02,3.02-3.02h3.117V19.461z M15.852,15.02h-0.097c-1.665,0-3.019-1.355-3.019-3.02    s1.354-3.019,3.019-3.019h0.097c1.665,0,3.02,1.354,3.02,3.019S17.517,15.02,15.852,15.02z"
  })), /*#__PURE__*/react.createElement("g", {
    id: "Rectangle_55_x5F_4"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M8.148,15.019c-0.007,0-0.013,0-0.019,0h3.136v0H8.148z"
  }))))), /*#__PURE__*/react.createElement("figure", {
    className: "skills_item"
  }, /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    version: "1.1",
    id: "Capa_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 24 24",
    xmlSpace: "preserve",
    width: "512",
    height: "512"
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    d: "M5.457,4.257c-0.277,0-0.472,0.033-0.669,0.082v0.033H4.82   c0.132,0.261,0.36,0.441,0.522,0.67c0.131,0.261,0.246,0.521,0.376,0.783C5.734,5.808,5.75,5.791,5.75,5.791   c0.23-0.162,0.344-0.424,0.344-0.816C5.996,4.86,5.98,4.747,5.898,4.632C5.8,4.469,5.588,4.388,5.457,4.257L5.457,4.257z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M22.107,18.442c-1.307-0.033-2.318,0.098-3.167,0.457   c-0.245,0.098-0.636,0.098-0.67,0.408c0.131,0.13,0.147,0.342,0.262,0.523c0.196,0.326,0.537,0.766,0.848,0.996   c0.343,0.261,0.686,0.521,1.045,0.75c0.636,0.393,1.355,0.621,1.974,1.013c0.36,0.228,0.718,0.522,1.079,0.767   c0.179,0.13,0.292,0.343,0.521,0.424V23.73c-0.115-0.146-0.147-0.359-0.261-0.523c-0.163-0.162-0.327-0.31-0.49-0.472   c-0.474-0.637-1.062-1.191-1.697-1.648c-0.523-0.36-1.666-0.85-1.877-1.452c0,0-0.017-0.017-0.033-0.033   c0.359-0.033,0.784-0.164,1.127-0.263c0.554-0.146,1.06-0.113,1.631-0.26c0.262-0.066,0.523-0.148,0.785-0.228v-0.148   c-0.295-0.293-0.506-0.686-0.817-0.963c-0.832-0.718-1.747-1.419-2.693-2.008c-0.507-0.327-1.16-0.538-1.699-0.816   c-0.195-0.098-0.521-0.146-0.636-0.311c-0.294-0.359-0.458-0.832-0.67-1.257c-0.473-0.897-0.931-1.892-1.338-2.84   c-0.294-0.636-0.473-1.272-0.832-1.86c-1.682-2.775-3.51-4.456-6.317-6.105C7.579,2.2,6.861,2.053,6.094,1.874   C5.685,1.856,5.278,1.825,4.87,1.809C4.608,1.694,4.346,1.384,4.118,1.237c-0.931-0.587-3.329-1.86-4.015-0.179   c-0.441,1.062,0.653,2.106,1.029,2.645c0.277,0.375,0.637,0.8,0.832,1.224C2.078,5.204,2.11,5.498,2.225,5.791   c0.261,0.718,0.505,1.518,0.849,2.188C3.253,8.322,3.449,8.682,3.677,8.99c0.132,0.181,0.36,0.261,0.409,0.556   C3.858,9.872,3.84,10.362,3.71,10.77c-0.587,1.845-0.359,4.13,0.474,5.484c0.261,0.408,0.881,1.306,1.714,0.963   c0.734-0.293,0.571-1.224,0.783-2.039c0.049-0.197,0.016-0.327,0.114-0.457v0.033c0.228,0.456,0.457,0.896,0.67,1.355   c0.506,0.799,1.387,1.632,2.123,2.186c0.391,0.295,0.701,0.8,1.191,0.98v-0.049h-0.032c-0.098-0.146-0.245-0.212-0.375-0.326   c-0.294-0.294-0.62-0.653-0.849-0.98c-0.685-0.914-1.29-1.926-1.828-2.971c-0.262-0.507-0.49-1.062-0.702-1.567   c-0.098-0.195-0.098-0.49-0.261-0.587c-0.246,0.359-0.604,0.669-0.783,1.109c-0.31,0.703-0.343,1.568-0.458,2.466   c-0.065,0.017-0.032,0-0.065,0.032c-0.522-0.13-0.701-0.669-0.898-1.125c-0.489-1.16-0.572-3.021-0.147-4.36   c0.114-0.342,0.605-1.419,0.408-1.746C4.689,8.859,4.363,8.682,4.184,8.436c-0.212-0.31-0.442-0.701-0.587-1.045   c-0.392-0.914-0.589-1.926-1.012-2.84c-0.196-0.425-0.54-0.866-0.816-1.257C1.458,2.853,1.115,2.543,0.87,2.021   c-0.081-0.18-0.195-0.474-0.065-0.669c0.032-0.131,0.098-0.18,0.229-0.213C1.245,0.96,1.85,1.188,2.061,1.286   C2.666,1.53,3.172,1.76,3.677,2.102c0.229,0.164,0.474,0.474,0.767,0.556h0.343c0.522,0.113,1.11,0.032,1.6,0.179   c0.864,0.277,1.648,0.685,2.35,1.126c2.138,1.355,3.901,3.282,5.092,5.583c0.196,0.375,0.279,0.718,0.458,1.109   c0.343,0.802,0.768,1.618,1.11,2.4c0.343,0.767,0.67,1.55,1.16,2.188c0.244,0.342,1.224,0.522,1.665,0.702   c0.326,0.146,0.832,0.277,1.126,0.456c0.555,0.342,1.109,0.735,1.632,1.111C21.241,17.708,22.058,18.115,22.107,18.442   L22.107,18.442z"
  })))))));
}
;// CONCATENATED MODULE: ./src/components/Summary/Summary.js





function Summary() {
  return /*#__PURE__*/react.createElement("main", {
    class: "summary"
  }, /*#__PURE__*/react.createElement(Abstract, null), /*#__PURE__*/react.createElement(Contact, null), /*#__PURE__*/react.createElement(Synopsis, null));
}
;// CONCATENATED MODULE: ./src/assets/images/icons/discord.svg
const discord_namespaceObject = __webpack_require__.p + "b92356bb25ee094b9038.svg";
;// CONCATENATED MODULE: ./src/assets/images/icons/github.svg
const github_namespaceObject = __webpack_require__.p + "cc44f0ad2c7e983a9daa.svg";
;// CONCATENATED MODULE: ./src/assets/images/icons/facebook.svg
const facebook_namespaceObject = __webpack_require__.p + "045062ed003a64aa9374.svg";
;// CONCATENATED MODULE: ./src/components/LinkBox/LinkBox.js





function LinkBox() {
  return /*#__PURE__*/react.createElement("footer", {
    className: "link-box"
  }, /*#__PURE__*/react.createElement("figure", {
    className: "icon"
  }, /*#__PURE__*/react.createElement("img", {
    src: discord_namespaceObject
  })), /*#__PURE__*/react.createElement("figure", {
    className: "icon"
  }, /*#__PURE__*/react.createElement("img", {
    src: github_namespaceObject
  })), /*#__PURE__*/react.createElement("figure", {
    className: "icon"
  }, /*#__PURE__*/react.createElement("img", {
    src: facebook_namespaceObject
  })));
}
;// CONCATENATED MODULE: ./src/App.js





function App() {
  return /*#__PURE__*/react.createElement("div", {
    id: "app"
  }, /*#__PURE__*/react.createElement(Profile, null), /*#__PURE__*/react.createElement(Summary, null), /*#__PURE__*/react.createElement(LinkBox, null));
}
;// CONCATENATED MODULE: ./src/index.tsx




const root = client.createRoot(document.querySelector('#root'));
root.render(react.createElement(App, null));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(816)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.6062e71cf22b9893b1c5.bundle.js.map