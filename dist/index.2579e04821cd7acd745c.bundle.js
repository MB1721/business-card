(self["webpackChunkmason_bennett_business_card"] = self["webpackChunkmason_bennett_business_card"] || []).push([[826],{

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
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

"use strict";


if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 556:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

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
  }, "Full-Stack Developer"));
}
;// CONCATENATED MODULE: ./src/assets/images/icons/envelope.svg
const envelope_namespaceObject = __webpack_require__.p + "0af0fcc9da11b16649c4.svg";
;// CONCATENATED MODULE: ./src/assets/images/icons/linkedin.svg
const linkedin_namespaceObject = __webpack_require__.p + "3645565ceb9709016ed2.svg";
;// CONCATENATED MODULE: ./src/components/Contact/Contact.js




function Contact() {
  return /*#__PURE__*/react.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/react.createElement("a", {
    className: "link email",
    href: "mailto:masonbennett1721@gmail.com"
  }, /*#__PURE__*/react.createElement("figure", {
    className: "contact-icon"
  }, /*#__PURE__*/react.createElement("img", {
    src: envelope_namespaceObject,
    alt: "email"
  })), /*#__PURE__*/react.createElement("p", null, "Email")), /*#__PURE__*/react.createElement("a", {
    className: "link linkedin",
    target: "_blank",
    href: "https://www.linkedin.com/in/mason-bennett-074856191"
  }, /*#__PURE__*/react.createElement("figure", {
    className: "contact-icon"
  }, /*#__PURE__*/react.createElement("img", {
    src: linkedin_namespaceObject,
    alt: "linkedin"
  })), /*#__PURE__*/react.createElement("p", null, "LinkedIn")));
}
;// CONCATENATED MODULE: ./src/components/Synopsis/Synopsis.js


const skills = __webpack_require__(832);
function Synopsis() {
  const skillItems = skills.keys().map(path => {
    const title = path.replace('./', '').replace('.svg', '');
    return /*#__PURE__*/react.createElement("figure", {
      className: "skills_item",
      key: path,
      title: title.replace('-js', '.js')
    }, /*#__PURE__*/react.createElement("img", {
      src: skills(path),
      alt: title
    }));
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "synopsis"
  }, /*#__PURE__*/react.createElement("section", {
    className: "about"
  }, /*#__PURE__*/react.createElement("h2", null, "About"), /*#__PURE__*/react.createElement("p", null, "I am a full-stack web developer based in Pennsylvania. My passion for programming stems from a deep appreciation for systems and constant pursuit of challenges. I enjoy opportunities to craft innovative systems aimed at solving persistent issues or devising methodologies to address future occurrences in a sustainable manner.")), /*#__PURE__*/react.createElement("section", {
    className: "values"
  }, /*#__PURE__*/react.createElement("h2", null, "My Values"), /*#__PURE__*/react.createElement("p", null, "When I look for a company to work with, I am searching for someone with a strong identity, a clear purpose, and the determination to see their goals through. I promise to do the utmost to help your company realize its vision.")), /*#__PURE__*/react.createElement("section", {
    className: "skills"
  }, /*#__PURE__*/react.createElement("h2", null, "Skills"), /*#__PURE__*/react.createElement("div", {
    className: "skills_container"
  }, skillItems)));
}
;// CONCATENATED MODULE: ./src/components/Summary/Summary.js





function Summary() {
  return /*#__PURE__*/react.createElement("main", {
    className: "summary"
  }, /*#__PURE__*/react.createElement(Abstract, null), /*#__PURE__*/react.createElement(Contact, null), /*#__PURE__*/react.createElement(Synopsis, null));
}
;// CONCATENATED MODULE: ./src/assets/images/icons/discord.svg
const discord_namespaceObject = __webpack_require__.p + "b92356bb25ee094b9038.svg";
;// CONCATENATED MODULE: ./src/assets/images/icons/github.svg
const github_namespaceObject = __webpack_require__.p + "cc44f0ad2c7e983a9daa.svg";
;// CONCATENATED MODULE: ./src/assets/images/icons/facebook.svg
const facebook_namespaceObject = __webpack_require__.p + "045062ed003a64aa9374.svg";
;// CONCATENATED MODULE: ./src/components/LinkBox/LinkBox.js






// Separate component for rendering an icon
const IconFig = _ref => {
  let {
    icon,
    link
  } = _ref;
  return /*#__PURE__*/react.createElement("figure", {
    className: "icon",
    key: icon
  }, /*#__PURE__*/react.createElement("a", {
    href: link,
    target: "_blank"
  }, /*#__PURE__*/react.createElement("img", {
    src: icon,
    alt: icon
  })));
};
function LinkBox() {
  const icons = [{
    icon: discord_namespaceObject,
    link: 'https://discord.com/'
  }, {
    icon: github_namespaceObject,
    link: 'https://github.com/MB1721/business-card'
  }, {
    icon: facebook_namespaceObject,
    link: 'https://www.facebook.com/masson.be.23'
  }].map(_ref2 => {
    let {
      icon,
      link
    } = _ref2;
    return /*#__PURE__*/react.createElement(IconFig, {
      icon: icon,
      link: link,
      key: link
    });
  });
  return /*#__PURE__*/react.createElement("footer", {
    className: "link-box"
  }, icons);
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


/***/ }),

/***/ 832:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./css3.svg": 290,
	"./figma.svg": 955,
	"./html5.svg": 470,
	"./js.svg": 649,
	"./mysql.svg": 584,
	"./node-js.svg": 643,
	"./php.svg": 289,
	"./postgre.svg": 906,
	"./react.svg": 576,
	"./wordpress.svg": 190
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 832;

/***/ }),

/***/ 290:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cf1624af08d938b7ba3c.svg";

/***/ }),

/***/ 955:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "423eb53e707954eea385.svg";

/***/ }),

/***/ 470:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6ddffdf38737a4d496d8.svg";

/***/ }),

/***/ 649:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "42a1f8bb56f62d54a8da.svg";

/***/ }),

/***/ 584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b0d561d3c1f032397cef.svg";

/***/ }),

/***/ 643:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ea1bba1581b75170cd20.svg";

/***/ }),

/***/ 289:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ab29c81f5fb2a4f45c87.svg";

/***/ }),

/***/ 906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3451415c220be8e13782.svg";

/***/ }),

/***/ 576:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ee99e77b677db651c7ae.svg";

/***/ }),

/***/ 190:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8a8277b74de8eb864f9a.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(556)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.2579e04821cd7acd745c.bundle.js.map