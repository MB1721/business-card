"use strict";
(self["webpackChunkapp_boilerplate"] = self["webpackChunkapp_boilerplate"] || []).push([["index"],{

/***/ 680:
/*!**********************************!*\
  !*** ./src/developer-message.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ developerMessage)
/* harmony export */ });
function developerMessage() {
  console.log('Start developing me!');
  console.log('You may go into "/src/developer-message.js" to delete this file.');
}

/***/ }),

/***/ 98:
/*!********************************************!*\
  !*** ./src/assets/styles/global-style.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 181:
/*!******************************************!*\
  !*** ./src/components/sample/sample.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 972:
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

          'use strict';

/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
}
          var enableSchedulerDebugging = false;
var enableProfiling = false;
var frameYieldMs = 5;

function push(heap, node) {
  var index = heap.length;
  heap.push(node);
  siftUp(heap, node, index);
}
function peek(heap) {
  return heap.length === 0 ? null : heap[0];
}
function pop(heap) {
  if (heap.length === 0) {
    return null;
  }

  var first = heap[0];
  var last = heap.pop();

  if (last !== first) {
    heap[0] = last;
    siftDown(heap, last, 0);
  }

  return first;
}

function siftUp(heap, node, i) {
  var index = i;

  while (index > 0) {
    var parentIndex = index - 1 >>> 1;
    var parent = heap[parentIndex];

    if (compare(parent, node) > 0) {
      // The parent is larger. Swap positions.
      heap[parentIndex] = node;
      heap[index] = parent;
      index = parentIndex;
    } else {
      // The parent is smaller. Exit.
      return;
    }
  }
}

function siftDown(heap, node, i) {
  var index = i;
  var length = heap.length;
  var halfLength = length >>> 1;

  while (index < halfLength) {
    var leftIndex = (index + 1) * 2 - 1;
    var left = heap[leftIndex];
    var rightIndex = leftIndex + 1;
    var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

    if (compare(left, node) < 0) {
      if (rightIndex < length && compare(right, left) < 0) {
        heap[index] = right;
        heap[rightIndex] = node;
        index = rightIndex;
      } else {
        heap[index] = left;
        heap[leftIndex] = node;
        index = leftIndex;
      }
    } else if (rightIndex < length && compare(right, node) < 0) {
      heap[index] = right;
      heap[rightIndex] = node;
      index = rightIndex;
    } else {
      // Neither child is smaller. Exit.
      return;
    }
  }
}

function compare(a, b) {
  // Compare sort index first, then task id.
  var diff = a.sortIndex - b.sortIndex;
  return diff !== 0 ? diff : a.id - b.id;
}

// TODO: Use symbols?
var ImmediatePriority = 1;
var UserBlockingPriority = 2;
var NormalPriority = 3;
var LowPriority = 4;
var IdlePriority = 5;

function markTaskErrored(task, ms) {
}

/* eslint-disable no-var */

var hasPerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

if (hasPerformanceNow) {
  var localPerformance = performance;

  exports.unstable_now = function () {
    return localPerformance.now();
  };
} else {
  var localDate = Date;
  var initialTime = localDate.now();

  exports.unstable_now = function () {
    return localDate.now() - initialTime;
  };
} // Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111


var maxSigned31BitInt = 1073741823; // Times out immediately

var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
var NORMAL_PRIORITY_TIMEOUT = 5000;
var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt; // Tasks are stored on a min heap

var taskQueue = [];
var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.
var currentTask = null;
var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrance.

var isPerformingWork = false;
var isHostCallbackScheduled = false;
var isHostTimeoutScheduled = false; // Capture local references to native APIs, in case a polyfill overrides them.

var localSetTimeout = typeof setTimeout === 'function' ? setTimeout : null;
var localClearTimeout = typeof clearTimeout === 'function' ? clearTimeout : null;
var localSetImmediate = typeof setImmediate !== 'undefined' ? setImmediate : null; // IE and Node.js + jsdom

var isInputPending = typeof navigator !== 'undefined' && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;

function advanceTimers(currentTime) {
  // Check for tasks that are no longer delayed and add them to the queue.
  var timer = peek(timerQueue);

  while (timer !== null) {
    if (timer.callback === null) {
      // Timer was cancelled.
      pop(timerQueue);
    } else if (timer.startTime <= currentTime) {
      // Timer fired. Transfer to the task queue.
      pop(timerQueue);
      timer.sortIndex = timer.expirationTime;
      push(taskQueue, timer);
    } else {
      // Remaining timers are pending.
      return;
    }

    timer = peek(timerQueue);
  }
}

function handleTimeout(currentTime) {
  isHostTimeoutScheduled = false;
  advanceTimers(currentTime);

  if (!isHostCallbackScheduled) {
    if (peek(taskQueue) !== null) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    } else {
      var firstTimer = peek(timerQueue);

      if (firstTimer !== null) {
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
      }
    }
  }
}

function flushWork(hasTimeRemaining, initialTime) {


  isHostCallbackScheduled = false;

  if (isHostTimeoutScheduled) {
    // We scheduled a timeout but it's no longer needed. Cancel it.
    isHostTimeoutScheduled = false;
    cancelHostTimeout();
  }

  isPerformingWork = true;
  var previousPriorityLevel = currentPriorityLevel;

  try {
    if (enableProfiling) {
      try {
        return workLoop(hasTimeRemaining, initialTime);
      } catch (error) {
        if (currentTask !== null) {
          var currentTime = exports.unstable_now();
          markTaskErrored(currentTask, currentTime);
          currentTask.isQueued = false;
        }

        throw error;
      }
    } else {
      // No catch in prod code path.
      return workLoop(hasTimeRemaining, initialTime);
    }
  } finally {
    currentTask = null;
    currentPriorityLevel = previousPriorityLevel;
    isPerformingWork = false;
  }
}

function workLoop(hasTimeRemaining, initialTime) {
  var currentTime = initialTime;
  advanceTimers(currentTime);
  currentTask = peek(taskQueue);

  while (currentTask !== null && !(enableSchedulerDebugging )) {
    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
      // This currentTask hasn't expired, and we've reached the deadline.
      break;
    }

    var callback = currentTask.callback;

    if (typeof callback === 'function') {
      currentTask.callback = null;
      currentPriorityLevel = currentTask.priorityLevel;
      var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;

      var continuationCallback = callback(didUserCallbackTimeout);
      currentTime = exports.unstable_now();

      if (typeof continuationCallback === 'function') {
        currentTask.callback = continuationCallback;
      } else {

        if (currentTask === peek(taskQueue)) {
          pop(taskQueue);
        }
      }

      advanceTimers(currentTime);
    } else {
      pop(taskQueue);
    }

    currentTask = peek(taskQueue);
  } // Return whether there's additional work


  if (currentTask !== null) {
    return true;
  } else {
    var firstTimer = peek(timerQueue);

    if (firstTimer !== null) {
      requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
    }

    return false;
  }
}

function unstable_runWithPriority(priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
    case LowPriority:
    case IdlePriority:
      break;

    default:
      priorityLevel = NormalPriority;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_next(eventHandler) {
  var priorityLevel;

  switch (currentPriorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
      // Shift down to normal priority
      priorityLevel = NormalPriority;
      break;

    default:
      // Anything lower than normal priority should remain at the current level.
      priorityLevel = currentPriorityLevel;
      break;
  }

  var previousPriorityLevel = currentPriorityLevel;
  currentPriorityLevel = priorityLevel;

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
  }
}

function unstable_wrapCallback(callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    // This is a fork of runWithPriority, inlined for performance.
    var previousPriorityLevel = currentPriorityLevel;
    currentPriorityLevel = parentPriorityLevel;

    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
    }
  };
}

function unstable_scheduleCallback(priorityLevel, callback, options) {
  var currentTime = exports.unstable_now();
  var startTime;

  if (typeof options === 'object' && options !== null) {
    var delay = options.delay;

    if (typeof delay === 'number' && delay > 0) {
      startTime = currentTime + delay;
    } else {
      startTime = currentTime;
    }
  } else {
    startTime = currentTime;
  }

  var timeout;

  switch (priorityLevel) {
    case ImmediatePriority:
      timeout = IMMEDIATE_PRIORITY_TIMEOUT;
      break;

    case UserBlockingPriority:
      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
      break;

    case IdlePriority:
      timeout = IDLE_PRIORITY_TIMEOUT;
      break;

    case LowPriority:
      timeout = LOW_PRIORITY_TIMEOUT;
      break;

    case NormalPriority:
    default:
      timeout = NORMAL_PRIORITY_TIMEOUT;
      break;
  }

  var expirationTime = startTime + timeout;
  var newTask = {
    id: taskIdCounter++,
    callback: callback,
    priorityLevel: priorityLevel,
    startTime: startTime,
    expirationTime: expirationTime,
    sortIndex: -1
  };

  if (startTime > currentTime) {
    // This is a delayed task.
    newTask.sortIndex = startTime;
    push(timerQueue, newTask);

    if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
      // All tasks are delayed, and this is the task with the earliest delay.
      if (isHostTimeoutScheduled) {
        // Cancel an existing timeout.
        cancelHostTimeout();
      } else {
        isHostTimeoutScheduled = true;
      } // Schedule a timeout.


      requestHostTimeout(handleTimeout, startTime - currentTime);
    }
  } else {
    newTask.sortIndex = expirationTime;
    push(taskQueue, newTask);
    // wait until the next time we yield.


    if (!isHostCallbackScheduled && !isPerformingWork) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    }
  }

  return newTask;
}

function unstable_pauseExecution() {
}

function unstable_continueExecution() {

  if (!isHostCallbackScheduled && !isPerformingWork) {
    isHostCallbackScheduled = true;
    requestHostCallback(flushWork);
  }
}

function unstable_getFirstCallbackNode() {
  return peek(taskQueue);
}

function unstable_cancelCallback(task) {
  // remove from the queue because you can't remove arbitrary nodes from an
  // array based heap, only the first one.)


  task.callback = null;
}

function unstable_getCurrentPriorityLevel() {
  return currentPriorityLevel;
}

var isMessageLoopRunning = false;
var scheduledHostCallback = null;
var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
// thread, like user events. By default, it yields multiple times per frame.
// It does not attempt to align with frame boundaries, since most tasks don't
// need to be frame aligned; for those that do, use requestAnimationFrame.

var frameInterval = frameYieldMs;
var startTime = -1;

function shouldYieldToHost() {
  var timeElapsed = exports.unstable_now() - startTime;

  if (timeElapsed < frameInterval) {
    // The main thread has only been blocked for a really short amount of time;
    // smaller than a single frame. Don't yield yet.
    return false;
  } // The main thread has been blocked for a non-negligible amount of time. We


  return true;
}

function requestPaint() {

}

function forceFrameRate(fps) {
  if (fps < 0 || fps > 125) {
    // Using console['error'] to evade Babel and ESLint
    console['error']('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing frame rates higher than 125 fps is not supported');
    return;
  }

  if (fps > 0) {
    frameInterval = Math.floor(1000 / fps);
  } else {
    // reset the framerate
    frameInterval = frameYieldMs;
  }
}

var performWorkUntilDeadline = function () {
  if (scheduledHostCallback !== null) {
    var currentTime = exports.unstable_now(); // Keep track of the start time so we can measure how long the main thread
    // has been blocked.

    startTime = currentTime;
    var hasTimeRemaining = true; // If a scheduler task throws, exit the current browser task so the
    // error can be observed.
    //
    // Intentionally not using a try-catch, since that makes some debugging
    // techniques harder. Instead, if `scheduledHostCallback` errors, then
    // `hasMoreWork` will remain true, and we'll continue the work loop.

    var hasMoreWork = true;

    try {
      hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
    } finally {
      if (hasMoreWork) {
        // If there's more work, schedule the next message event at the end
        // of the preceding one.
        schedulePerformWorkUntilDeadline();
      } else {
        isMessageLoopRunning = false;
        scheduledHostCallback = null;
      }
    }
  } else {
    isMessageLoopRunning = false;
  } // Yielding to the browser will give it a chance to paint, so we can
};

var schedulePerformWorkUntilDeadline;

if (typeof localSetImmediate === 'function') {
  // Node.js and old IE.
  // There's a few reasons for why we prefer setImmediate.
  //
  // Unlike MessageChannel, it doesn't prevent a Node.js process from exiting.
  // (Even though this is a DOM fork of the Scheduler, you could get here
  // with a mix of Node.js 15+, which has a MessageChannel, and jsdom.)
  // https://github.com/facebook/react/issues/20756
  //
  // But also, it runs earlier which is the semantic we want.
  // If other browsers ever implement it, it's better to use it.
  // Although both of these would be inferior to native scheduling.
  schedulePerformWorkUntilDeadline = function () {
    localSetImmediate(performWorkUntilDeadline);
  };
} else if (typeof MessageChannel !== 'undefined') {
  // DOM and Worker environments.
  // We prefer MessageChannel because of the 4ms setTimeout clamping.
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;

  schedulePerformWorkUntilDeadline = function () {
    port.postMessage(null);
  };
} else {
  // We should only fallback here in non-browser environments.
  schedulePerformWorkUntilDeadline = function () {
    localSetTimeout(performWorkUntilDeadline, 0);
  };
}

function requestHostCallback(callback) {
  scheduledHostCallback = callback;

  if (!isMessageLoopRunning) {
    isMessageLoopRunning = true;
    schedulePerformWorkUntilDeadline();
  }
}

function requestHostTimeout(callback, ms) {
  taskTimeoutID = localSetTimeout(function () {
    callback(exports.unstable_now());
  }, ms);
}

function cancelHostTimeout() {
  localClearTimeout(taskTimeoutID);
  taskTimeoutID = -1;
}

var unstable_requestPaint = requestPaint;
var unstable_Profiling =  null;

exports.unstable_IdlePriority = IdlePriority;
exports.unstable_ImmediatePriority = ImmediatePriority;
exports.unstable_LowPriority = LowPriority;
exports.unstable_NormalPriority = NormalPriority;
exports.unstable_Profiling = unstable_Profiling;
exports.unstable_UserBlockingPriority = UserBlockingPriority;
exports.unstable_cancelCallback = unstable_cancelCallback;
exports.unstable_continueExecution = unstable_continueExecution;
exports.unstable_forceFrameRate = forceFrameRate;
exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
exports.unstable_next = unstable_next;
exports.unstable_pauseExecution = unstable_pauseExecution;
exports.unstable_requestPaint = unstable_requestPaint;
exports.unstable_runWithPriority = unstable_runWithPriority;
exports.unstable_scheduleCallback = unstable_scheduleCallback;
exports.unstable_shouldYield = shouldYieldToHost;
exports.unstable_wrapCallback = unstable_wrapCallback;
          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
    'function'
) {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
}
        
  })();
}


/***/ }),

/***/ 840:
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ 972);
}


/***/ }),

/***/ 986:
/*!******************************************!*\
  !*** ./src/components/sample/sample.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelloWorld: () => (/* binding */ HelloWorld),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_sample_cow_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/sample/cow.jpg */ 25);
/* harmony import */ var _sample_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample.css */ 181);



function SampleComponent() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: _assets_images_sample_cow_jpg__WEBPACK_IMPORTED_MODULE_1__, width: 400, height: 400, className: "test-style" }));
}
function HelloWorld() {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hello World!");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SampleComponent);



/***/ }),

/***/ 629:
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_global_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/global-style.css */ 98);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ 745);
/* harmony import */ var _developer_message_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./developer-message.js */ 680);
/* harmony import */ var _components_sample_sample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sample/sample */ 986);





(0,_developer_message_js__WEBPACK_IMPORTED_MODULE_3__["default"])(); // indicate that app is ready for development
const root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.querySelector('#app'));
function HomePage() {
    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { id: "HomePage" },
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_sample_sample__WEBPACK_IMPORTED_MODULE_4__.HelloWorld, null),
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_sample_sample__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}
root.render(react__WEBPACK_IMPORTED_MODULE_1___default().createElement(HomePage, null));


/***/ }),

/***/ 25:
/*!******************************************!*\
  !*** ./src/assets/images/sample/cow.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c970763858d57f0f07a1.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(629)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMmNlZWI2YjdhYTcxZDA3YTYxN2IuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxnQkFBZ0JBLENBQUEsRUFBRztFQUN6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7RUFDbkNELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtFQUFrRSxDQUFDO0FBQ2pGOzs7Ozs7Ozs7OztBQ0hBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFLG9CQUFvQjtBQUN0QjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsRUFBRSxvQkFBb0I7QUFDdEI7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQSxvQ0FBb0M7O0FBRXBDLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEMsK0NBQStDOztBQUUvQztBQUNBLHFCQUFxQjs7QUFFckIsdUJBQXVCO0FBQ3ZCO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0EsbUZBQW1GOztBQUVuRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCLGtDQUFrQztBQUNsQyw0QkFBNEI7QUFDNUIsK0JBQStCO0FBQy9CLDBCQUEwQjtBQUMxQixxQ0FBcUM7QUFDckMsK0JBQStCO0FBQy9CLGtDQUFrQztBQUNsQywrQkFBK0I7QUFDL0Isd0NBQXdDO0FBQ3hDLHFDQUFxQztBQUNyQyxxQkFBcUI7QUFDckIsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QixnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDLDRCQUE0QjtBQUM1Qiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7OztBQ3puQmE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDLENBQUM7QUFDRixFQUFFLCtFQUEwRDtBQUM1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7QUFDMkI7QUFDL0I7QUFFdEIsU0FBUyxlQUFlO0lBQ3RCLE9BQU8sQ0FDTCxvRUFBSyxHQUFHLEVBQUUsMERBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLFlBQVksR0FBRSxDQUNqRSxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsVUFBVTtJQUNqQixPQUFPLHNGQUFxQixDQUFDO0FBQy9CLENBQUM7QUFFRCxpRUFBZSxlQUFlLEVBQUM7QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm9CO0FBQ2hCO0FBQ2M7QUFDYztBQUNtQjtBQUV6RSxpRUFBZ0IsRUFBRSxDQUFDLENBQUMsNkNBQTZDO0FBRWpFLE1BQU0sSUFBSSxHQUFHLHdEQUFtQixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUVqRSxTQUFTLFFBQVE7SUFDZixPQUFPLENBQ0wsb0VBQUssRUFBRSxFQUFDLFVBQVU7UUFDaEIsMkRBQUMsaUVBQVUsT0FBRTtRQUNiLDJEQUFDLGlFQUFlLE9BQUUsQ0FDZCxDQUNQLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQywyREFBQyxRQUFRLE9BQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwX2JvaWxlcnBsYXRlLy4vc3JjL2RldmVsb3Blci1tZXNzYWdlLmpzIiwid2VicGFjazovL2FwcF9ib2lsZXJwbGF0ZS8uL3NyYy9hc3NldHMvc3R5bGVzL2dsb2JhbC1zdHlsZS5jc3M/OTcxNyIsIndlYnBhY2s6Ly9hcHBfYm9pbGVycGxhdGUvLi9zcmMvY29tcG9uZW50cy9zYW1wbGUvc2FtcGxlLmNzcz9jNDI1Iiwid2VicGFjazovL2FwcF9ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9hcHBfYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2luZGV4LmpzIiwid2VicGFjazovL2FwcF9ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL3NhbXBsZS9zYW1wbGUudHN4Iiwid2VicGFjazovL2FwcF9ib2lsZXJwbGF0ZS8uL3NyYy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV2ZWxvcGVyTWVzc2FnZSgpIHtcbiAgY29uc29sZS5sb2coJ1N0YXJ0IGRldmVsb3BpbmcgbWUhJyk7XG4gIGNvbnNvbGUubG9nKCdZb3UgbWF5IGdvIGludG8gXCIvc3JjL2RldmVsb3Blci1tZXNzYWdlLmpzXCIgdG8gZGVsZXRlIHRoaXMgZmlsZS4nKTtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiBzY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgZW5hYmxlU2NoZWR1bGVyRGVidWdnaW5nID0gZmFsc2U7XG52YXIgZW5hYmxlUHJvZmlsaW5nID0gZmFsc2U7XG52YXIgZnJhbWVZaWVsZE1zID0gNTtcblxuZnVuY3Rpb24gcHVzaChoZWFwLCBub2RlKSB7XG4gIHZhciBpbmRleCA9IGhlYXAubGVuZ3RoO1xuICBoZWFwLnB1c2gobm9kZSk7XG4gIHNpZnRVcChoZWFwLCBub2RlLCBpbmRleCk7XG59XG5mdW5jdGlvbiBwZWVrKGhlYXApIHtcbiAgcmV0dXJuIGhlYXAubGVuZ3RoID09PSAwID8gbnVsbCA6IGhlYXBbMF07XG59XG5mdW5jdGlvbiBwb3AoaGVhcCkge1xuICBpZiAoaGVhcC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBmaXJzdCA9IGhlYXBbMF07XG4gIHZhciBsYXN0ID0gaGVhcC5wb3AoKTtcblxuICBpZiAobGFzdCAhPT0gZmlyc3QpIHtcbiAgICBoZWFwWzBdID0gbGFzdDtcbiAgICBzaWZ0RG93bihoZWFwLCBsYXN0LCAwKTtcbiAgfVxuXG4gIHJldHVybiBmaXJzdDtcbn1cblxuZnVuY3Rpb24gc2lmdFVwKGhlYXAsIG5vZGUsIGkpIHtcbiAgdmFyIGluZGV4ID0gaTtcblxuICB3aGlsZSAoaW5kZXggPiAwKSB7XG4gICAgdmFyIHBhcmVudEluZGV4ID0gaW5kZXggLSAxID4+PiAxO1xuICAgIHZhciBwYXJlbnQgPSBoZWFwW3BhcmVudEluZGV4XTtcblxuICAgIGlmIChjb21wYXJlKHBhcmVudCwgbm9kZSkgPiAwKSB7XG4gICAgICAvLyBUaGUgcGFyZW50IGlzIGxhcmdlci4gU3dhcCBwb3NpdGlvbnMuXG4gICAgICBoZWFwW3BhcmVudEluZGV4XSA9IG5vZGU7XG4gICAgICBoZWFwW2luZGV4XSA9IHBhcmVudDtcbiAgICAgIGluZGV4ID0gcGFyZW50SW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBwYXJlbnQgaXMgc21hbGxlci4gRXhpdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2lmdERvd24oaGVhcCwgbm9kZSwgaSkge1xuICB2YXIgaW5kZXggPSBpO1xuICB2YXIgbGVuZ3RoID0gaGVhcC5sZW5ndGg7XG4gIHZhciBoYWxmTGVuZ3RoID0gbGVuZ3RoID4+PiAxO1xuXG4gIHdoaWxlIChpbmRleCA8IGhhbGZMZW5ndGgpIHtcbiAgICB2YXIgbGVmdEluZGV4ID0gKGluZGV4ICsgMSkgKiAyIC0gMTtcbiAgICB2YXIgbGVmdCA9IGhlYXBbbGVmdEluZGV4XTtcbiAgICB2YXIgcmlnaHRJbmRleCA9IGxlZnRJbmRleCArIDE7XG4gICAgdmFyIHJpZ2h0ID0gaGVhcFtyaWdodEluZGV4XTsgLy8gSWYgdGhlIGxlZnQgb3IgcmlnaHQgbm9kZSBpcyBzbWFsbGVyLCBzd2FwIHdpdGggdGhlIHNtYWxsZXIgb2YgdGhvc2UuXG5cbiAgICBpZiAoY29tcGFyZShsZWZ0LCBub2RlKSA8IDApIHtcbiAgICAgIGlmIChyaWdodEluZGV4IDwgbGVuZ3RoICYmIGNvbXBhcmUocmlnaHQsIGxlZnQpIDwgMCkge1xuICAgICAgICBoZWFwW2luZGV4XSA9IHJpZ2h0O1xuICAgICAgICBoZWFwW3JpZ2h0SW5kZXhdID0gbm9kZTtcbiAgICAgICAgaW5kZXggPSByaWdodEluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhcFtpbmRleF0gPSBsZWZ0O1xuICAgICAgICBoZWFwW2xlZnRJbmRleF0gPSBub2RlO1xuICAgICAgICBpbmRleCA9IGxlZnRJbmRleDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJpZ2h0SW5kZXggPCBsZW5ndGggJiYgY29tcGFyZShyaWdodCwgbm9kZSkgPCAwKSB7XG4gICAgICBoZWFwW2luZGV4XSA9IHJpZ2h0O1xuICAgICAgaGVhcFtyaWdodEluZGV4XSA9IG5vZGU7XG4gICAgICBpbmRleCA9IHJpZ2h0SW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5laXRoZXIgY2hpbGQgaXMgc21hbGxlci4gRXhpdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gIC8vIENvbXBhcmUgc29ydCBpbmRleCBmaXJzdCwgdGhlbiB0YXNrIGlkLlxuICB2YXIgZGlmZiA9IGEuc29ydEluZGV4IC0gYi5zb3J0SW5kZXg7XG4gIHJldHVybiBkaWZmICE9PSAwID8gZGlmZiA6IGEuaWQgLSBiLmlkO1xufVxuXG4vLyBUT0RPOiBVc2Ugc3ltYm9scz9cbnZhciBJbW1lZGlhdGVQcmlvcml0eSA9IDE7XG52YXIgVXNlckJsb2NraW5nUHJpb3JpdHkgPSAyO1xudmFyIE5vcm1hbFByaW9yaXR5ID0gMztcbnZhciBMb3dQcmlvcml0eSA9IDQ7XG52YXIgSWRsZVByaW9yaXR5ID0gNTtcblxuZnVuY3Rpb24gbWFya1Rhc2tFcnJvcmVkKHRhc2ssIG1zKSB7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xuXG52YXIgaGFzUGVyZm9ybWFuY2VOb3cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbic7XG5cbmlmIChoYXNQZXJmb3JtYW5jZU5vdykge1xuICB2YXIgbG9jYWxQZXJmb3JtYW5jZSA9IHBlcmZvcm1hbmNlO1xuXG4gIGV4cG9ydHMudW5zdGFibGVfbm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsb2NhbFBlcmZvcm1hbmNlLm5vdygpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIGxvY2FsRGF0ZSA9IERhdGU7XG4gIHZhciBpbml0aWFsVGltZSA9IGxvY2FsRGF0ZS5ub3coKTtcblxuICBleHBvcnRzLnVuc3RhYmxlX25vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbG9jYWxEYXRlLm5vdygpIC0gaW5pdGlhbFRpbWU7XG4gIH07XG59IC8vIE1heCAzMSBiaXQgaW50ZWdlci4gVGhlIG1heCBpbnRlZ2VyIHNpemUgaW4gVjggZm9yIDMyLWJpdCBzeXN0ZW1zLlxuLy8gTWF0aC5wb3coMiwgMzApIC0gMVxuLy8gMGIxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTFcblxuXG52YXIgbWF4U2lnbmVkMzFCaXRJbnQgPSAxMDczNzQxODIzOyAvLyBUaW1lcyBvdXQgaW1tZWRpYXRlbHlcblxudmFyIElNTUVESUFURV9QUklPUklUWV9USU1FT1VUID0gLTE7IC8vIEV2ZW50dWFsbHkgdGltZXMgb3V0XG5cbnZhciBVU0VSX0JMT0NLSU5HX1BSSU9SSVRZX1RJTUVPVVQgPSAyNTA7XG52YXIgTk9STUFMX1BSSU9SSVRZX1RJTUVPVVQgPSA1MDAwO1xudmFyIExPV19QUklPUklUWV9USU1FT1VUID0gMTAwMDA7IC8vIE5ldmVyIHRpbWVzIG91dFxuXG52YXIgSURMRV9QUklPUklUWV9USU1FT1VUID0gbWF4U2lnbmVkMzFCaXRJbnQ7IC8vIFRhc2tzIGFyZSBzdG9yZWQgb24gYSBtaW4gaGVhcFxuXG52YXIgdGFza1F1ZXVlID0gW107XG52YXIgdGltZXJRdWV1ZSA9IFtdOyAvLyBJbmNyZW1lbnRpbmcgaWQgY291bnRlci4gVXNlZCB0byBtYWludGFpbiBpbnNlcnRpb24gb3JkZXIuXG5cbnZhciB0YXNrSWRDb3VudGVyID0gMTsgLy8gUGF1c2luZyB0aGUgc2NoZWR1bGVyIGlzIHVzZWZ1bCBmb3IgZGVidWdnaW5nLlxudmFyIGN1cnJlbnRUYXNrID0gbnVsbDtcbnZhciBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IE5vcm1hbFByaW9yaXR5OyAvLyBUaGlzIGlzIHNldCB3aGlsZSBwZXJmb3JtaW5nIHdvcmssIHRvIHByZXZlbnQgcmUtZW50cmFuY2UuXG5cbnZhciBpc1BlcmZvcm1pbmdXb3JrID0gZmFsc2U7XG52YXIgaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQgPSBmYWxzZTtcbnZhciBpc0hvc3RUaW1lb3V0U2NoZWR1bGVkID0gZmFsc2U7IC8vIENhcHR1cmUgbG9jYWwgcmVmZXJlbmNlcyB0byBuYXRpdmUgQVBJcywgaW4gY2FzZSBhIHBvbHlmaWxsIG92ZXJyaWRlcyB0aGVtLlxuXG52YXIgbG9jYWxTZXRUaW1lb3V0ID0gdHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicgPyBzZXRUaW1lb3V0IDogbnVsbDtcbnZhciBsb2NhbENsZWFyVGltZW91dCA9IHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicgPyBjbGVhclRpbWVvdXQgOiBudWxsO1xudmFyIGxvY2FsU2V0SW1tZWRpYXRlID0gdHlwZW9mIHNldEltbWVkaWF0ZSAhPT0gJ3VuZGVmaW5lZCcgPyBzZXRJbW1lZGlhdGUgOiBudWxsOyAvLyBJRSBhbmQgTm9kZS5qcyArIGpzZG9tXG5cbnZhciBpc0lucHV0UGVuZGluZyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5zY2hlZHVsaW5nICE9PSB1bmRlZmluZWQgJiYgbmF2aWdhdG9yLnNjaGVkdWxpbmcuaXNJbnB1dFBlbmRpbmcgIT09IHVuZGVmaW5lZCA/IG5hdmlnYXRvci5zY2hlZHVsaW5nLmlzSW5wdXRQZW5kaW5nLmJpbmQobmF2aWdhdG9yLnNjaGVkdWxpbmcpIDogbnVsbDtcblxuZnVuY3Rpb24gYWR2YW5jZVRpbWVycyhjdXJyZW50VGltZSkge1xuICAvLyBDaGVjayBmb3IgdGFza3MgdGhhdCBhcmUgbm8gbG9uZ2VyIGRlbGF5ZWQgYW5kIGFkZCB0aGVtIHRvIHRoZSBxdWV1ZS5cbiAgdmFyIHRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcblxuICB3aGlsZSAodGltZXIgIT09IG51bGwpIHtcbiAgICBpZiAodGltZXIuY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgIC8vIFRpbWVyIHdhcyBjYW5jZWxsZWQuXG4gICAgICBwb3AodGltZXJRdWV1ZSk7XG4gICAgfSBlbHNlIGlmICh0aW1lci5zdGFydFRpbWUgPD0gY3VycmVudFRpbWUpIHtcbiAgICAgIC8vIFRpbWVyIGZpcmVkLiBUcmFuc2ZlciB0byB0aGUgdGFzayBxdWV1ZS5cbiAgICAgIHBvcCh0aW1lclF1ZXVlKTtcbiAgICAgIHRpbWVyLnNvcnRJbmRleCA9IHRpbWVyLmV4cGlyYXRpb25UaW1lO1xuICAgICAgcHVzaCh0YXNrUXVldWUsIHRpbWVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVtYWluaW5nIHRpbWVycyBhcmUgcGVuZGluZy5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aW1lciA9IHBlZWsodGltZXJRdWV1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGltZW91dChjdXJyZW50VGltZSkge1xuICBpc0hvc3RUaW1lb3V0U2NoZWR1bGVkID0gZmFsc2U7XG4gIGFkdmFuY2VUaW1lcnMoY3VycmVudFRpbWUpO1xuXG4gIGlmICghaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQpIHtcbiAgICBpZiAocGVlayh0YXNrUXVldWUpICE9PSBudWxsKSB7XG4gICAgICBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICByZXF1ZXN0SG9zdENhbGxiYWNrKGZsdXNoV29yayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBmaXJzdFRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcblxuICAgICAgaWYgKGZpcnN0VGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgcmVxdWVzdEhvc3RUaW1lb3V0KGhhbmRsZVRpbWVvdXQsIGZpcnN0VGltZXIuc3RhcnRUaW1lIC0gY3VycmVudFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmbHVzaFdvcmsoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpIHtcblxuXG4gIGlzSG9zdENhbGxiYWNrU2NoZWR1bGVkID0gZmFsc2U7XG5cbiAgaWYgKGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQpIHtcbiAgICAvLyBXZSBzY2hlZHVsZWQgYSB0aW1lb3V0IGJ1dCBpdCdzIG5vIGxvbmdlciBuZWVkZWQuIENhbmNlbCBpdC5cbiAgICBpc0hvc3RUaW1lb3V0U2NoZWR1bGVkID0gZmFsc2U7XG4gICAgY2FuY2VsSG9zdFRpbWVvdXQoKTtcbiAgfVxuXG4gIGlzUGVyZm9ybWluZ1dvcmsgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG5cbiAgdHJ5IHtcbiAgICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUYXNrICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcbiAgICAgICAgICBtYXJrVGFza0Vycm9yZWQoY3VycmVudFRhc2ssIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICBjdXJyZW50VGFzay5pc1F1ZXVlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGNhdGNoIGluIHByb2QgY29kZSBwYXRoLlxuICAgICAgcmV0dXJuIHdvcmtMb29wKGhhc1RpbWVSZW1haW5pbmcsIGluaXRpYWxUaW1lKTtcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgY3VycmVudFRhc2sgPSBudWxsO1xuICAgIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJldmlvdXNQcmlvcml0eUxldmVsO1xuICAgIGlzUGVyZm9ybWluZ1dvcmsgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3b3JrTG9vcChoYXNUaW1lUmVtYWluaW5nLCBpbml0aWFsVGltZSkge1xuICB2YXIgY3VycmVudFRpbWUgPSBpbml0aWFsVGltZTtcbiAgYWR2YW5jZVRpbWVycyhjdXJyZW50VGltZSk7XG4gIGN1cnJlbnRUYXNrID0gcGVlayh0YXNrUXVldWUpO1xuXG4gIHdoaWxlIChjdXJyZW50VGFzayAhPT0gbnVsbCAmJiAhKGVuYWJsZVNjaGVkdWxlckRlYnVnZ2luZyApKSB7XG4gICAgaWYgKGN1cnJlbnRUYXNrLmV4cGlyYXRpb25UaW1lID4gY3VycmVudFRpbWUgJiYgKCFoYXNUaW1lUmVtYWluaW5nIHx8IHNob3VsZFlpZWxkVG9Ib3N0KCkpKSB7XG4gICAgICAvLyBUaGlzIGN1cnJlbnRUYXNrIGhhc24ndCBleHBpcmVkLCBhbmQgd2UndmUgcmVhY2hlZCB0aGUgZGVhZGxpbmUuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgY2FsbGJhY2sgPSBjdXJyZW50VGFzay5jYWxsYmFjaztcblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGN1cnJlbnRUYXNrLmNhbGxiYWNrID0gbnVsbDtcbiAgICAgIGN1cnJlbnRQcmlvcml0eUxldmVsID0gY3VycmVudFRhc2sucHJpb3JpdHlMZXZlbDtcbiAgICAgIHZhciBkaWRVc2VyQ2FsbGJhY2tUaW1lb3V0ID0gY3VycmVudFRhc2suZXhwaXJhdGlvblRpbWUgPD0gY3VycmVudFRpbWU7XG5cbiAgICAgIHZhciBjb250aW51YXRpb25DYWxsYmFjayA9IGNhbGxiYWNrKGRpZFVzZXJDYWxsYmFja1RpbWVvdXQpO1xuICAgICAgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbnRpbnVhdGlvbkNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGN1cnJlbnRUYXNrLmNhbGxiYWNrID0gY29udGludWF0aW9uQ2FsbGJhY2s7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmIChjdXJyZW50VGFzayA9PT0gcGVlayh0YXNrUXVldWUpKSB7XG4gICAgICAgICAgcG9wKHRhc2tRdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYWR2YW5jZVRpbWVycyhjdXJyZW50VGltZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcCh0YXNrUXVldWUpO1xuICAgIH1cblxuICAgIGN1cnJlbnRUYXNrID0gcGVlayh0YXNrUXVldWUpO1xuICB9IC8vIFJldHVybiB3aGV0aGVyIHRoZXJlJ3MgYWRkaXRpb25hbCB3b3JrXG5cblxuICBpZiAoY3VycmVudFRhc2sgIT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZmlyc3RUaW1lciA9IHBlZWsodGltZXJRdWV1ZSk7XG5cbiAgICBpZiAoZmlyc3RUaW1lciAhPT0gbnVsbCkge1xuICAgICAgcmVxdWVzdEhvc3RUaW1lb3V0KGhhbmRsZVRpbWVvdXQsIGZpcnN0VGltZXIuc3RhcnRUaW1lIC0gY3VycmVudFRpbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkocHJpb3JpdHlMZXZlbCwgZXZlbnRIYW5kbGVyKSB7XG4gIHN3aXRjaCAocHJpb3JpdHlMZXZlbCkge1xuICAgIGNhc2UgSW1tZWRpYXRlUHJpb3JpdHk6XG4gICAgY2FzZSBVc2VyQmxvY2tpbmdQcmlvcml0eTpcbiAgICBjYXNlIE5vcm1hbFByaW9yaXR5OlxuICAgIGNhc2UgTG93UHJpb3JpdHk6XG4gICAgY2FzZSBJZGxlUHJpb3JpdHk6XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBwcmlvcml0eUxldmVsID0gTm9ybWFsUHJpb3JpdHk7XG4gIH1cblxuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJpb3JpdHlMZXZlbDtcblxuICB0cnkge1xuICAgIHJldHVybiBldmVudEhhbmRsZXIoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByZXZpb3VzUHJpb3JpdHlMZXZlbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9uZXh0KGV2ZW50SGFuZGxlcikge1xuICB2YXIgcHJpb3JpdHlMZXZlbDtcblxuICBzd2l0Y2ggKGN1cnJlbnRQcmlvcml0eUxldmVsKSB7XG4gICAgY2FzZSBJbW1lZGlhdGVQcmlvcml0eTpcbiAgICBjYXNlIFVzZXJCbG9ja2luZ1ByaW9yaXR5OlxuICAgIGNhc2UgTm9ybWFsUHJpb3JpdHk6XG4gICAgICAvLyBTaGlmdCBkb3duIHRvIG5vcm1hbCBwcmlvcml0eVxuICAgICAgcHJpb3JpdHlMZXZlbCA9IE5vcm1hbFByaW9yaXR5O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gQW55dGhpbmcgbG93ZXIgdGhhbiBub3JtYWwgcHJpb3JpdHkgc2hvdWxkIHJlbWFpbiBhdCB0aGUgY3VycmVudCBsZXZlbC5cbiAgICAgIHByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIHByZXZpb3VzUHJpb3JpdHlMZXZlbCA9IGN1cnJlbnRQcmlvcml0eUxldmVsO1xuICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByaW9yaXR5TGV2ZWw7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZXZlbnRIYW5kbGVyKCk7XG4gIH0gZmluYWxseSB7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmV2aW91c1ByaW9yaXR5TGV2ZWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfd3JhcENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gIHZhciBwYXJlbnRQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVGhpcyBpcyBhIGZvcmsgb2YgcnVuV2l0aFByaW9yaXR5LCBpbmxpbmVkIGZvciBwZXJmb3JtYW5jZS5cbiAgICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwYXJlbnRQcmlvcml0eUxldmVsO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByZXZpb3VzUHJpb3JpdHlMZXZlbDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2socHJpb3JpdHlMZXZlbCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgdmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcbiAgdmFyIHN0YXJ0VGltZTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMgIT09IG51bGwpIHtcbiAgICB2YXIgZGVsYXkgPSBvcHRpb25zLmRlbGF5O1xuXG4gICAgaWYgKHR5cGVvZiBkZWxheSA9PT0gJ251bWJlcicgJiYgZGVsYXkgPiAwKSB7XG4gICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZSArIGRlbGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gIH1cblxuICB2YXIgdGltZW91dDtcblxuICBzd2l0Y2ggKHByaW9yaXR5TGV2ZWwpIHtcbiAgICBjYXNlIEltbWVkaWF0ZVByaW9yaXR5OlxuICAgICAgdGltZW91dCA9IElNTUVESUFURV9QUklPUklUWV9USU1FT1VUO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFVzZXJCbG9ja2luZ1ByaW9yaXR5OlxuICAgICAgdGltZW91dCA9IFVTRVJfQkxPQ0tJTkdfUFJJT1JJVFlfVElNRU9VVDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBJZGxlUHJpb3JpdHk6XG4gICAgICB0aW1lb3V0ID0gSURMRV9QUklPUklUWV9USU1FT1VUO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIExvd1ByaW9yaXR5OlxuICAgICAgdGltZW91dCA9IExPV19QUklPUklUWV9USU1FT1VUO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIE5vcm1hbFByaW9yaXR5OlxuICAgIGRlZmF1bHQ6XG4gICAgICB0aW1lb3V0ID0gTk9STUFMX1BSSU9SSVRZX1RJTUVPVVQ7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHZhciBleHBpcmF0aW9uVGltZSA9IHN0YXJ0VGltZSArIHRpbWVvdXQ7XG4gIHZhciBuZXdUYXNrID0ge1xuICAgIGlkOiB0YXNrSWRDb3VudGVyKyssXG4gICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgIHByaW9yaXR5TGV2ZWw6IHByaW9yaXR5TGV2ZWwsXG4gICAgc3RhcnRUaW1lOiBzdGFydFRpbWUsXG4gICAgZXhwaXJhdGlvblRpbWU6IGV4cGlyYXRpb25UaW1lLFxuICAgIHNvcnRJbmRleDogLTFcbiAgfTtcblxuICBpZiAoc3RhcnRUaW1lID4gY3VycmVudFRpbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZGVsYXllZCB0YXNrLlxuICAgIG5ld1Rhc2suc29ydEluZGV4ID0gc3RhcnRUaW1lO1xuICAgIHB1c2godGltZXJRdWV1ZSwgbmV3VGFzayk7XG5cbiAgICBpZiAocGVlayh0YXNrUXVldWUpID09PSBudWxsICYmIG5ld1Rhc2sgPT09IHBlZWsodGltZXJRdWV1ZSkpIHtcbiAgICAgIC8vIEFsbCB0YXNrcyBhcmUgZGVsYXllZCwgYW5kIHRoaXMgaXMgdGhlIHRhc2sgd2l0aCB0aGUgZWFybGllc3QgZGVsYXkuXG4gICAgICBpZiAoaXNIb3N0VGltZW91dFNjaGVkdWxlZCkge1xuICAgICAgICAvLyBDYW5jZWwgYW4gZXhpc3RpbmcgdGltZW91dC5cbiAgICAgICAgY2FuY2VsSG9zdFRpbWVvdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgfSAvLyBTY2hlZHVsZSBhIHRpbWVvdXQuXG5cblxuICAgICAgcmVxdWVzdEhvc3RUaW1lb3V0KGhhbmRsZVRpbWVvdXQsIHN0YXJ0VGltZSAtIGN1cnJlbnRUaW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbmV3VGFzay5zb3J0SW5kZXggPSBleHBpcmF0aW9uVGltZTtcbiAgICBwdXNoKHRhc2tRdWV1ZSwgbmV3VGFzayk7XG4gICAgLy8gd2FpdCB1bnRpbCB0aGUgbmV4dCB0aW1lIHdlIHlpZWxkLlxuXG5cbiAgICBpZiAoIWlzSG9zdENhbGxiYWNrU2NoZWR1bGVkICYmICFpc1BlcmZvcm1pbmdXb3JrKSB7XG4gICAgICBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICByZXF1ZXN0SG9zdENhbGxiYWNrKGZsdXNoV29yayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uKCkge1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbigpIHtcblxuICBpZiAoIWlzSG9zdENhbGxiYWNrU2NoZWR1bGVkICYmICFpc1BlcmZvcm1pbmdXb3JrKSB7XG4gICAgaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQgPSB0cnVlO1xuICAgIHJlcXVlc3RIb3N0Q2FsbGJhY2soZmx1c2hXb3JrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZSgpIHtcbiAgcmV0dXJuIHBlZWsodGFza1F1ZXVlKTtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfY2FuY2VsQ2FsbGJhY2sodGFzaykge1xuICAvLyByZW1vdmUgZnJvbSB0aGUgcXVldWUgYmVjYXVzZSB5b3UgY2FuJ3QgcmVtb3ZlIGFyYml0cmFyeSBub2RlcyBmcm9tIGFuXG4gIC8vIGFycmF5IGJhc2VkIGhlYXAsIG9ubHkgdGhlIGZpcnN0IG9uZS4pXG5cblxuICB0YXNrLmNhbGxiYWNrID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwoKSB7XG4gIHJldHVybiBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbn1cblxudmFyIGlzTWVzc2FnZUxvb3BSdW5uaW5nID0gZmFsc2U7XG52YXIgc2NoZWR1bGVkSG9zdENhbGxiYWNrID0gbnVsbDtcbnZhciB0YXNrVGltZW91dElEID0gLTE7IC8vIFNjaGVkdWxlciBwZXJpb2RpY2FsbHkgeWllbGRzIGluIGNhc2UgdGhlcmUgaXMgb3RoZXIgd29yayBvbiB0aGUgbWFpblxuLy8gdGhyZWFkLCBsaWtlIHVzZXIgZXZlbnRzLiBCeSBkZWZhdWx0LCBpdCB5aWVsZHMgbXVsdGlwbGUgdGltZXMgcGVyIGZyYW1lLlxuLy8gSXQgZG9lcyBub3QgYXR0ZW1wdCB0byBhbGlnbiB3aXRoIGZyYW1lIGJvdW5kYXJpZXMsIHNpbmNlIG1vc3QgdGFza3MgZG9uJ3Rcbi8vIG5lZWQgdG8gYmUgZnJhbWUgYWxpZ25lZDsgZm9yIHRob3NlIHRoYXQgZG8sIHVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuXG5cbnZhciBmcmFtZUludGVydmFsID0gZnJhbWVZaWVsZE1zO1xudmFyIHN0YXJ0VGltZSA9IC0xO1xuXG5mdW5jdGlvbiBzaG91bGRZaWVsZFRvSG9zdCgpIHtcbiAgdmFyIHRpbWVFbGFwc2VkID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKSAtIHN0YXJ0VGltZTtcblxuICBpZiAodGltZUVsYXBzZWQgPCBmcmFtZUludGVydmFsKSB7XG4gICAgLy8gVGhlIG1haW4gdGhyZWFkIGhhcyBvbmx5IGJlZW4gYmxvY2tlZCBmb3IgYSByZWFsbHkgc2hvcnQgYW1vdW50IG9mIHRpbWU7XG4gICAgLy8gc21hbGxlciB0aGFuIGEgc2luZ2xlIGZyYW1lLiBEb24ndCB5aWVsZCB5ZXQuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIFRoZSBtYWluIHRocmVhZCBoYXMgYmVlbiBibG9ja2VkIGZvciBhIG5vbi1uZWdsaWdpYmxlIGFtb3VudCBvZiB0aW1lLiBXZVxuXG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RQYWludCgpIHtcblxufVxuXG5mdW5jdGlvbiBmb3JjZUZyYW1lUmF0ZShmcHMpIHtcbiAgaWYgKGZwcyA8IDAgfHwgZnBzID4gMTI1KSB7XG4gICAgLy8gVXNpbmcgY29uc29sZVsnZXJyb3InXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG4gICAgY29uc29sZVsnZXJyb3InXSgnZm9yY2VGcmFtZVJhdGUgdGFrZXMgYSBwb3NpdGl2ZSBpbnQgYmV0d2VlbiAwIGFuZCAxMjUsICcgKyAnZm9yY2luZyBmcmFtZSByYXRlcyBoaWdoZXIgdGhhbiAxMjUgZnBzIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZnBzID4gMCkge1xuICAgIGZyYW1lSW50ZXJ2YWwgPSBNYXRoLmZsb29yKDEwMDAgLyBmcHMpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlc2V0IHRoZSBmcmFtZXJhdGVcbiAgICBmcmFtZUludGVydmFsID0gZnJhbWVZaWVsZE1zO1xuICB9XG59XG5cbnZhciBwZXJmb3JtV29ya1VudGlsRGVhZGxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChzY2hlZHVsZWRIb3N0Q2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpOyAvLyBLZWVwIHRyYWNrIG9mIHRoZSBzdGFydCB0aW1lIHNvIHdlIGNhbiBtZWFzdXJlIGhvdyBsb25nIHRoZSBtYWluIHRocmVhZFxuICAgIC8vIGhhcyBiZWVuIGJsb2NrZWQuXG5cbiAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICB2YXIgaGFzVGltZVJlbWFpbmluZyA9IHRydWU7IC8vIElmIGEgc2NoZWR1bGVyIHRhc2sgdGhyb3dzLCBleGl0IHRoZSBjdXJyZW50IGJyb3dzZXIgdGFzayBzbyB0aGVcbiAgICAvLyBlcnJvciBjYW4gYmUgb2JzZXJ2ZWQuXG4gICAgLy9cbiAgICAvLyBJbnRlbnRpb25hbGx5IG5vdCB1c2luZyBhIHRyeS1jYXRjaCwgc2luY2UgdGhhdCBtYWtlcyBzb21lIGRlYnVnZ2luZ1xuICAgIC8vIHRlY2huaXF1ZXMgaGFyZGVyLiBJbnN0ZWFkLCBpZiBgc2NoZWR1bGVkSG9zdENhbGxiYWNrYCBlcnJvcnMsIHRoZW5cbiAgICAvLyBgaGFzTW9yZVdvcmtgIHdpbGwgcmVtYWluIHRydWUsIGFuZCB3ZSdsbCBjb250aW51ZSB0aGUgd29yayBsb29wLlxuXG4gICAgdmFyIGhhc01vcmVXb3JrID0gdHJ1ZTtcblxuICAgIHRyeSB7XG4gICAgICBoYXNNb3JlV29yayA9IHNjaGVkdWxlZEhvc3RDYWxsYmFjayhoYXNUaW1lUmVtYWluaW5nLCBjdXJyZW50VGltZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChoYXNNb3JlV29yaykge1xuICAgICAgICAvLyBJZiB0aGVyZSdzIG1vcmUgd29yaywgc2NoZWR1bGUgdGhlIG5leHQgbWVzc2FnZSBldmVudCBhdCB0aGUgZW5kXG4gICAgICAgIC8vIG9mIHRoZSBwcmVjZWRpbmcgb25lLlxuICAgICAgICBzY2hlZHVsZVBlcmZvcm1Xb3JrVW50aWxEZWFkbGluZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNNZXNzYWdlTG9vcFJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgc2NoZWR1bGVkSG9zdENhbGxiYWNrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaXNNZXNzYWdlTG9vcFJ1bm5pbmcgPSBmYWxzZTtcbiAgfSAvLyBZaWVsZGluZyB0byB0aGUgYnJvd3NlciB3aWxsIGdpdmUgaXQgYSBjaGFuY2UgdG8gcGFpbnQsIHNvIHdlIGNhblxufTtcblxudmFyIHNjaGVkdWxlUGVyZm9ybVdvcmtVbnRpbERlYWRsaW5lO1xuXG5pZiAodHlwZW9mIGxvY2FsU2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIE5vZGUuanMgYW5kIG9sZCBJRS5cbiAgLy8gVGhlcmUncyBhIGZldyByZWFzb25zIGZvciB3aHkgd2UgcHJlZmVyIHNldEltbWVkaWF0ZS5cbiAgLy9cbiAgLy8gVW5saWtlIE1lc3NhZ2VDaGFubmVsLCBpdCBkb2Vzbid0IHByZXZlbnQgYSBOb2RlLmpzIHByb2Nlc3MgZnJvbSBleGl0aW5nLlxuICAvLyAoRXZlbiB0aG91Z2ggdGhpcyBpcyBhIERPTSBmb3JrIG9mIHRoZSBTY2hlZHVsZXIsIHlvdSBjb3VsZCBnZXQgaGVyZVxuICAvLyB3aXRoIGEgbWl4IG9mIE5vZGUuanMgMTUrLCB3aGljaCBoYXMgYSBNZXNzYWdlQ2hhbm5lbCwgYW5kIGpzZG9tLilcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8yMDc1NlxuICAvL1xuICAvLyBCdXQgYWxzbywgaXQgcnVucyBlYXJsaWVyIHdoaWNoIGlzIHRoZSBzZW1hbnRpYyB3ZSB3YW50LlxuICAvLyBJZiBvdGhlciBicm93c2VycyBldmVyIGltcGxlbWVudCBpdCwgaXQncyBiZXR0ZXIgdG8gdXNlIGl0LlxuICAvLyBBbHRob3VnaCBib3RoIG9mIHRoZXNlIHdvdWxkIGJlIGluZmVyaW9yIHRvIG5hdGl2ZSBzY2hlZHVsaW5nLlxuICBzY2hlZHVsZVBlcmZvcm1Xb3JrVW50aWxEZWFkbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBsb2NhbFNldEltbWVkaWF0ZShwZXJmb3JtV29ya1VudGlsRGVhZGxpbmUpO1xuICB9O1xufSBlbHNlIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIERPTSBhbmQgV29ya2VyIGVudmlyb25tZW50cy5cbiAgLy8gV2UgcHJlZmVyIE1lc3NhZ2VDaGFubmVsIGJlY2F1c2Ugb2YgdGhlIDRtcyBzZXRUaW1lb3V0IGNsYW1waW5nLlxuICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICB2YXIgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gcGVyZm9ybVdvcmtVbnRpbERlYWRsaW5lO1xuXG4gIHNjaGVkdWxlUGVyZm9ybVdvcmtVbnRpbERlYWRsaW5lID0gZnVuY3Rpb24gKCkge1xuICAgIHBvcnQucG9zdE1lc3NhZ2UobnVsbCk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBXZSBzaG91bGQgb25seSBmYWxsYmFjayBoZXJlIGluIG5vbi1icm93c2VyIGVudmlyb25tZW50cy5cbiAgc2NoZWR1bGVQZXJmb3JtV29ya1VudGlsRGVhZGxpbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgbG9jYWxTZXRUaW1lb3V0KHBlcmZvcm1Xb3JrVW50aWxEZWFkbGluZSwgMCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RIb3N0Q2FsbGJhY2soY2FsbGJhY2spIHtcbiAgc2NoZWR1bGVkSG9zdENhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgaWYgKCFpc01lc3NhZ2VMb29wUnVubmluZykge1xuICAgIGlzTWVzc2FnZUxvb3BSdW5uaW5nID0gdHJ1ZTtcbiAgICBzY2hlZHVsZVBlcmZvcm1Xb3JrVW50aWxEZWFkbGluZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RIb3N0VGltZW91dChjYWxsYmFjaywgbXMpIHtcbiAgdGFza1RpbWVvdXRJRCA9IGxvY2FsU2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgY2FsbGJhY2soZXhwb3J0cy51bnN0YWJsZV9ub3coKSk7XG4gIH0sIG1zKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsSG9zdFRpbWVvdXQoKSB7XG4gIGxvY2FsQ2xlYXJUaW1lb3V0KHRhc2tUaW1lb3V0SUQpO1xuICB0YXNrVGltZW91dElEID0gLTE7XG59XG5cbnZhciB1bnN0YWJsZV9yZXF1ZXN0UGFpbnQgPSByZXF1ZXN0UGFpbnQ7XG52YXIgdW5zdGFibGVfUHJvZmlsaW5nID0gIG51bGw7XG5cbmV4cG9ydHMudW5zdGFibGVfSWRsZVByaW9yaXR5ID0gSWRsZVByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSA9IEltbWVkaWF0ZVByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9Mb3dQcmlvcml0eSA9IExvd1ByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSA9IE5vcm1hbFByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9Qcm9maWxpbmcgPSB1bnN0YWJsZV9Qcm9maWxpbmc7XG5leHBvcnRzLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5ID0gVXNlckJsb2NraW5nUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrID0gdW5zdGFibGVfY2FuY2VsQ2FsbGJhY2s7XG5leHBvcnRzLnVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uID0gdW5zdGFibGVfY29udGludWVFeGVjdXRpb247XG5leHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlID0gZm9yY2VGcmFtZVJhdGU7XG5leHBvcnRzLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsID0gdW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWw7XG5leHBvcnRzLnVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlID0gdW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGU7XG5leHBvcnRzLnVuc3RhYmxlX25leHQgPSB1bnN0YWJsZV9uZXh0O1xuZXhwb3J0cy51bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbiA9IHVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uO1xuZXhwb3J0cy51bnN0YWJsZV9yZXF1ZXN0UGFpbnQgPSB1bnN0YWJsZV9yZXF1ZXN0UGFpbnQ7XG5leHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSA9IHVuc3RhYmxlX3J1bldpdGhQcmlvcml0eTtcbmV4cG9ydHMudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayA9IHVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2s7XG5leHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkID0gc2hvdWxkWWllbGRUb0hvc3Q7XG5leHBvcnRzLnVuc3RhYmxlX3dyYXBDYWxsYmFjayA9IHVuc3RhYmxlX3dyYXBDYWxsYmFjaztcbiAgICAgICAgICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AgPT09XG4gICAgJ2Z1bmN0aW9uJ1xuKSB7XG4gIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgIFxuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY293IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2FtcGxlL2Nvdy5qcGcnO1xuaW1wb3J0ICcuL3NhbXBsZS5jc3MnO1xuXG5mdW5jdGlvbiBTYW1wbGVDb21wb25lbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPGltZyBzcmM9e2Nvd30gd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9IGNsYXNzTmFtZT1cInRlc3Qtc3R5bGVcIi8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEhlbGxvV29ybGQoKSB7XG4gIHJldHVybiA8aDE+SGVsbG8gV29ybGQhPC9oMT47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhbXBsZUNvbXBvbmVudDtcbmV4cG9ydCB7IEhlbGxvV29ybGQgfTsiLCJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9nbG9iYWwtc3R5bGUuY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgZGV2ZWxvcGVyTWVzc2FnZSBmcm9tICcuL2RldmVsb3Blci1tZXNzYWdlLmpzJztcbmltcG9ydCBTYW1wbGVDb21wb25lbnQsIHsgSGVsbG9Xb3JsZCB9IGZyb20gJy4vY29tcG9uZW50cy9zYW1wbGUvc2FtcGxlJztcblxuZGV2ZWxvcGVyTWVzc2FnZSgpOyAvLyBpbmRpY2F0ZSB0aGF0IGFwcCBpcyByZWFkeSBmb3IgZGV2ZWxvcG1lbnRcblxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpKTtcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIkhvbWVQYWdlXCI+XG4gICAgICA8SGVsbG9Xb3JsZC8+XG4gICAgICA8U2FtcGxlQ29tcG9uZW50Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxucm9vdC5yZW5kZXIoPEhvbWVQYWdlLz4pOyJdLCJuYW1lcyI6WyJkZXZlbG9wZXJNZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=