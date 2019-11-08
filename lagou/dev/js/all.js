/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@better-scroll/core/dist/core.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@better-scroll/core/dist/core.esm.js ***!
  \***********************************************************/
/*! exports provided: default, Options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/*!
 * better-scroll / core
 * (c) 2016-2019 ustbhuangyi
 * Released under the MIT License.
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function warn(msg) {
    console.error("[BScroll warn]: " + msg);
}

// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = ua && /wechatdevtools/.test(ua);
var isAndroid = ua && ua.indexOf('android') > 0;

function getNow() {
    return window.performance && window.performance.now
        ? window.performance.now() + window.performance.timing.navigationStart
        : +new Date();
}
function extend(target) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < rest.length; i++) {
        var source = rest[i];
        for (var key in source) {
            target[key] = source[key];
        }
    }
    return target;
}
function isUndef(v) {
    return v === undefined || v === null;
}

var elementStyle = (inBrowser &&
    document.createElement('div').style);
var vendor = (function () {
    if (!inBrowser) {
        return false;
    }
    var transformNames = {
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
    };
    for (var key in transformNames) {
        if (elementStyle[transformNames[key]] !== undefined) {
            return key;
        }
    }
    return false;
})();
function prefixStyle(style) {
    if (vendor === false) {
        return style;
    }
    if (vendor === 'standard') {
        if (style === 'transitionEnd') {
            return 'transitionend';
        }
        return style;
    }
    return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
function getElement(el) {
    return (typeof el === 'string'
        ? document.querySelector(el)
        : el);
}
function addEvent(el, type, fn, capture) {
    el.addEventListener(type, fn, {
        passive: false,
        capture: !!capture
    });
}
function removeEvent(el, type, fn, capture) {
    el.removeEventListener(type, fn, {
        capture: !!capture
    });
}
function offset(el) {
    var left = 0;
    var top = 0;
    while (el) {
        left -= el.offsetLeft;
        top -= el.offsetTop;
        el = el.offsetParent;
    }
    return {
        left: left,
        top: top
    };
}
var cssVendor = vendor && vendor !== 'standard' ? '-' + vendor.toLowerCase() + '-' : '';
var transform = prefixStyle('transform');
var transition = prefixStyle('transition');
var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
var hasTransition = inBrowser && transition in elementStyle;
var style = {
    transform: transform,
    transition: transition,
    transitionTimingFunction: prefixStyle('transitionTimingFunction'),
    transitionDuration: prefixStyle('transitionDuration'),
    transitionDelay: prefixStyle('transitionDelay'),
    transformOrigin: prefixStyle('transformOrigin'),
    transitionEnd: prefixStyle('transitionEnd')
};
var eventTypeMap = {
    touchstart: 1,
    touchmove: 1,
    touchend: 1,
    mousedown: 2,
    mousemove: 2,
    mouseup: 2
};
function getRect(el) {
    if (el instanceof window.SVGElement) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
        };
    }
    else {
        return {
            top: el.offsetTop,
            left: el.offsetLeft,
            width: el.offsetWidth,
            height: el.offsetHeight
        };
    }
}
function preventDefaultExceptionFn(el, exceptions) {
    for (var i in exceptions) {
        if (exceptions[i].test(el[i])) {
            return true;
        }
    }
    return false;
}
var tagExceptionFn = preventDefaultExceptionFn;
function tap(e, eventName) {
    var ev = document.createEvent('Event');
    ev.initEvent(eventName, true, true);
    ev.pageX = e.pageX;
    ev.pageY = e.pageY;
    e.target.dispatchEvent(ev);
}
function click(e, event) {
    if (event === void 0) { event = 'click'; }
    var eventSource;
    if (e.type === 'mouseup') {
        eventSource = e;
    }
    else if (e.type === 'touchend' || e.type === 'touchcancel') {
        eventSource = e.changedTouches[0];
    }
    var posSrc = {};
    if (eventSource) {
        posSrc.screenX = eventSource.screenX || 0;
        posSrc.screenY = eventSource.screenY || 0;
        posSrc.clientX = eventSource.clientX || 0;
        posSrc.clientY = eventSource.clientY || 0;
    }
    var ev;
    var bubbles = true;
    var cancelable = true;
    if (typeof MouseEvent !== 'undefined') {
        try {
            ev = new MouseEvent(event, extend({
                bubbles: bubbles,
                cancelable: cancelable
            }, posSrc));
        }
        catch (e) {
            createEvent();
        }
    }
    else {
        createEvent();
    }
    function createEvent() {
        ev = document.createEvent('Event');
        ev.initEvent(event, bubbles, cancelable);
        extend(ev, posSrc);
    }
    // forwardedTouchEvent set to true in case of the conflict with fastclick
    ev.forwardedTouchEvent = true;
    ev._constructed = true;
    e.target.dispatchEvent(ev);
}
function dblclick(e) {
    click(e, 'dblclick');
}

var ease = {
    // easeOutQuint
    swipe: {
        style: 'cubic-bezier(0.23, 1, 0.32, 1)',
        fn: function (t) {
            return 1 + --t * t * t * t * t;
        }
    },
    // easeOutQuard
    swipeBounce: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function (t) {
            return t * (2 - t);
        }
    },
    // easeOutQuart
    bounce: {
        style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        fn: function (t) {
            return 1 - --t * t * t * t;
        }
    }
};

var DEFAULT_INTERVAL = 100 / 60;
var windowCompat = inBrowser && window;
function noop() { }
var requestAnimationFrame = (function () {
    if (!inBrowser) {
        /* istanbul ignore if */
        return noop;
    }
    return (windowCompat.requestAnimationFrame ||
        windowCompat.webkitRequestAnimationFrame ||
        windowCompat.mozRequestAnimationFrame ||
        windowCompat.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function (callback) {
            return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
        });
})();
var cancelAnimationFrame = (function () {
    if (!inBrowser) {
        /* istanbul ignore if */
        return noop;
    }
    return (windowCompat.cancelAnimationFrame ||
        windowCompat.webkitCancelAnimationFrame ||
        windowCompat.mozCancelAnimationFrame ||
        windowCompat.oCancelAnimationFrame ||
        function (id) {
            window.clearTimeout(id);
        });
})();

var noop$1 = function (val) { };
var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop$1,
    set: noop$1
};
var getProperty = function (obj, key) {
    var keys = key.split('.');
    for (var i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
        if (typeof obj !== 'object' || !obj)
            return;
    }
    var lastKey = keys.pop();
    if (typeof obj[lastKey] === 'function') {
        return function () {
            return obj[lastKey].apply(obj, arguments);
        };
    }
    else {
        return obj[lastKey];
    }
};
var setProperty = function (obj, key, value) {
    var keys = key.split('.');
    var temp;
    for (var i = 0; i < keys.length - 1; i++) {
        temp = keys[i];
        if (!obj[temp])
            obj[temp] = {};
        obj = obj[temp];
    }
    obj[keys.pop()] = value;
};
function propertiesProxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return getProperty(this, sourceKey);
    };
    sharedPropertyDefinition.set = function proxySetter(val) {
        setProperty(this, sourceKey, val);
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
}

var EventEmitter = /** @class */ (function () {
    function EventEmitter(names) {
        this.events = {};
        this.eventTypes = {};
        this.registerType(names);
    }
    EventEmitter.prototype.on = function (type, fn, context) {
        if (context === void 0) { context = this; }
        this._checkInTypes(type);
        if (!this.events[type]) {
            this.events[type] = [];
        }
        this.events[type].push([fn, context]);
        return this;
    };
    EventEmitter.prototype.once = function (type, fn, context) {
        var _this = this;
        if (context === void 0) { context = this; }
        this._checkInTypes(type);
        var magic = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            _this.off(type, magic);
            fn.apply(context, args);
        };
        magic.fn = fn;
        this.on(type, magic);
        return this;
    };
    EventEmitter.prototype.off = function (type, fn) {
        if (!type && !fn) {
            this.events = {};
            return this;
        }
        if (type) {
            this._checkInTypes(type);
            if (!fn) {
                this.events[type] = [];
                return this;
            }
            var events = this.events[type];
            if (!events) {
                return this;
            }
            var count = events.length;
            while (count--) {
                if (events[count][0] === fn ||
                    (events[count][0] && events[count][0].fn === fn)) {
                    events.splice(count, 1);
                }
            }
            return this;
        }
    };
    EventEmitter.prototype.trigger = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this._checkInTypes(type);
        var events = this.events[type];
        if (!events) {
            return;
        }
        var len = events.length;
        var eventsCopy = events.slice();
        var ret;
        for (var i = 0; i < len; i++) {
            var event_1 = eventsCopy[i];
            var fn = event_1[0], context = event_1[1];
            if (fn) {
                ret = fn.apply(context, args);
                if (ret === true) {
                    return ret;
                }
            }
        }
    };
    EventEmitter.prototype.registerType = function (names) {
        var _this = this;
        names.forEach(function (type) {
            _this.eventTypes[type] = type;
        });
    };
    EventEmitter.prototype.destroy = function () {
        this.events = {};
        this.eventTypes = {};
    };
    EventEmitter.prototype._checkInTypes = function (type) {
        var types = this.eventTypes;
        var inTypes = types[type] === type;
        if (!inTypes) {
            warn("EventEmitter has used unknown event type: \"" + type + "\", should be oneof [" + Object.keys(types) + "]");
        }
    };
    return EventEmitter;
}());

var Direction;
(function (Direction) {
    Direction[Direction["Positive"] = 1] = "Positive";
    Direction[Direction["Negative"] = -1] = "Negative";
    Direction[Direction["Default"] = 0] = "Default";
})(Direction || (Direction = {}));

var DirectionLock;
(function (DirectionLock) {
    DirectionLock["Default"] = "";
    DirectionLock["Horizontal"] = "horizontal";
    DirectionLock["Vertical"] = "vertical";
    DirectionLock["None"] = "none";
})(DirectionLock || (DirectionLock = {}));

var EventPassthrough;
(function (EventPassthrough) {
    EventPassthrough["None"] = "";
    EventPassthrough["Horizontal"] = "horizontal";
    EventPassthrough["Vertical"] = "vertical";
})(EventPassthrough || (EventPassthrough = {}));

var EventType;
(function (EventType) {
    EventType[EventType["Touch"] = 1] = "Touch";
    EventType[EventType["Mouse"] = 2] = "Mouse";
})(EventType || (EventType = {}));

var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["Left"] = 0] = "Left";
    MouseButton[MouseButton["Middle"] = 1] = "Middle";
    MouseButton[MouseButton["Right"] = 2] = "Right";
})(MouseButton || (MouseButton = {}));

var Probe;
(function (Probe) {
    Probe[Probe["Default"] = 0] = "Default";
    Probe[Probe["Throttle"] = 1] = "Throttle";
    Probe[Probe["Normal"] = 2] = "Normal";
    Probe[Probe["Realtime"] = 3] = "Realtime";
})(Probe || (Probe = {}));

var Options = /** @class */ (function () {
    function Options() {
        this.startX = 0;
        this.startY = 0;
        this.scrollX = false;
        this.scrollY = true;
        this.freeScroll = false;
        this.directionLockThreshold = 5;
        this.eventPassthrough = EventPassthrough.None;
        this.click = false;
        this.dblclick = false;
        this.tap = '';
        this.bounce = {
            top: true,
            bottom: true,
            left: true,
            right: true
        };
        this.bounceTime = 800;
        this.momentum = true;
        this.momentumLimitTime = 300;
        this.momentumLimitDistance = 15;
        this.swipeTime = 2500;
        this.swipeBounceTime = 500;
        this.deceleration = 0.0015;
        this.flickLimitTime = 200;
        this.flickLimitDistance = 100;
        this.resizePolling = 60;
        this.probeType = Probe.Default;
        this.stopPropagation = false;
        this.preventDefault = true;
        this.preventDefaultException = {
            tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
        };
        this.tagException = {
            tagName: /^TEXTAREA$/
        };
        this.HWCompositing = true;
        this.useTransition = true;
        this.bindToWrapper = false;
        this.disableMouse = hasTouch;
        this.disableTouch = !hasTouch;
        this.autoBlur = true;
    }
    Options.prototype.merge = function (options) {
        if (!options)
            return this;
        for (var key in options) {
            this[key] = options[key];
        }
        return this;
    };
    Options.prototype.process = function () {
        this.translateZ =
            this.HWCompositing && hasPerspective ? ' translateZ(0)' : '';
        this.useTransition = this.useTransition && hasTransition;
        this.preventDefault = !this.eventPassthrough && this.preventDefault;
        // If you want eventPassthrough I have to lock one of the axes
        this.scrollX =
            this.eventPassthrough === EventPassthrough.Horizontal
                ? false
                : this.scrollX;
        this.scrollY =
            this.eventPassthrough === EventPassthrough.Vertical ? false : this.scrollY;
        // With eventPassthrough we also need lockDirection mechanism
        this.freeScroll = this.freeScroll && !this.eventPassthrough;
        // force true when freeScroll is true
        this.scrollX = this.freeScroll ? true : this.scrollX;
        this.scrollY = this.freeScroll ? true : this.scrollY;
        this.directionLockThreshold = this.eventPassthrough
            ? 0
            : this.directionLockThreshold;
        return this;
    };
    return Options;
}());

var EventRegister = /** @class */ (function () {
    function EventRegister(wrapper, events) {
        this.wrapper = wrapper;
        this.events = events;
        this.addDOMEvents();
    }
    EventRegister.prototype.destroy = function () {
        this.removeDOMEvents();
        this.events = [];
    };
    EventRegister.prototype.addDOMEvents = function () {
        this.handleDOMEvents(addEvent);
    };
    EventRegister.prototype.removeDOMEvents = function () {
        this.handleDOMEvents(removeEvent);
    };
    EventRegister.prototype.handleDOMEvents = function (eventOperation) {
        var _this = this;
        var wrapper = this.wrapper;
        this.events.forEach(function (event) {
            eventOperation(wrapper, event.name, _this, !!event.capture);
        });
    };
    EventRegister.prototype.handleEvent = function (e) {
        var eventType = e.type;
        this.events.some(function (event) {
            if (event.name === eventType) {
                event.handler(e);
                return true;
            }
            return false;
        });
    };
    return EventRegister;
}());

var ActionsHandler = /** @class */ (function () {
    function ActionsHandler(wrapper, options) {
        this.wrapper = wrapper;
        this.options = options;
        this.hooks = new EventEmitter([
            'beforeStart',
            'start',
            'move',
            'end',
            'click'
        ]);
        this.handleDOMEvents();
    }
    ActionsHandler.prototype.handleDOMEvents = function () {
        var _a = this.options, bindToWrapper = _a.bindToWrapper, disableMouse = _a.disableMouse, disableTouch = _a.disableTouch, click = _a.click;
        var wrapper = this.wrapper;
        var target = bindToWrapper ? wrapper : window;
        var wrapperEvents = [];
        var targetEvents = [];
        var shouldRegiserTouch = hasTouch && !disableTouch;
        var sholdRegisterMouse = !disableMouse;
        if (click) {
            wrapperEvents.push({
                name: 'click',
                handler: this.click.bind(this),
                capture: true
            });
        }
        if (shouldRegiserTouch) {
            wrapperEvents.push({
                name: 'touchstart',
                handler: this.start.bind(this)
            });
            targetEvents.push({
                name: 'touchmove',
                handler: this.move.bind(this)
            }, {
                name: 'touchend',
                handler: this.end.bind(this)
            }, {
                name: 'touchcancel',
                handler: this.end.bind(this)
            });
        }
        if (sholdRegisterMouse) {
            wrapperEvents.push({
                name: 'mousedown',
                handler: this.start.bind(this)
            });
            targetEvents.push({
                name: 'mousemove',
                handler: this.move.bind(this)
            }, {
                name: 'mouseup',
                handler: this.end.bind(this)
            });
        }
        this.wrapperEventRegister = new EventRegister(wrapper, wrapperEvents);
        this.targetEventRegister = new EventRegister(target, targetEvents);
    };
    ActionsHandler.prototype.beforeHandler = function (e, type) {
        var _a = this.options, preventDefault = _a.preventDefault, stopPropagation = _a.stopPropagation, preventDefaultException = _a.preventDefaultException;
        var preventDefaultConditions = {
            start: function () {
                return (preventDefault &&
                    !preventDefaultExceptionFn(e.target, preventDefaultException));
            },
            end: function () {
                return (preventDefault &&
                    !preventDefaultExceptionFn(e.target, preventDefaultException));
            },
            move: function () {
                return preventDefault;
            }
        };
        if (preventDefaultConditions[type]()) {
            e.preventDefault();
        }
        if (stopPropagation) {
            e.stopPropagation();
        }
    };
    ActionsHandler.prototype.setInitiated = function (type) {
        if (type === void 0) { type = 0; }
        this.initiated = type;
    };
    ActionsHandler.prototype.start = function (e) {
        var _eventType = eventTypeMap[e.type];
        if (this.initiated && this.initiated !== _eventType) {
            return;
        }
        this.setInitiated(_eventType);
        // if textarea or other html tags in options.tagException is manipulated
        // do not make bs scroll
        if (tagExceptionFn(e.target, this.options.tagException)) {
            this.setInitiated();
            return;
        }
        // no mouse left button
        if (_eventType === EventType.Mouse && e.button !== MouseButton.Left)
            return;
        if (this.hooks.trigger(this.hooks.eventTypes.beforeStart, e)) {
            return;
        }
        this.beforeHandler(e, 'start');
        var point = (e.touches ? e.touches[0] : e);
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        this.hooks.trigger(this.hooks.eventTypes.start, e);
    };
    ActionsHandler.prototype.move = function (e) {
        if (eventTypeMap[e.type] !== this.initiated) {
            return;
        }
        this.beforeHandler(e, 'move');
        var point = (e.touches ? e.touches[0] : e);
        var deltaX = point.pageX - this.pointX;
        var deltaY = point.pageY - this.pointY;
        this.pointX = point.pageX;
        this.pointY = point.pageY;
        if (this.hooks.trigger(this.hooks.eventTypes.move, {
            deltaX: deltaX,
            deltaY: deltaY,
            e: e
        })) {
            return;
        }
        // auto end when out of wrapper
        var scrollLeft = document.documentElement.scrollLeft ||
            window.pageXOffset ||
            document.body.scrollLeft;
        var scrollTop = document.documentElement.scrollTop ||
            window.pageYOffset ||
            document.body.scrollTop;
        var pX = this.pointX - scrollLeft;
        var pY = this.pointY - scrollTop;
        if (pX >
            document.documentElement.clientWidth -
                this.options.momentumLimitDistance ||
            pX < this.options.momentumLimitDistance ||
            pY < this.options.momentumLimitDistance ||
            pY >
                document.documentElement.clientHeight -
                    this.options.momentumLimitDistance) {
            this.end(e);
        }
    };
    ActionsHandler.prototype.end = function (e) {
        if (eventTypeMap[e.type] !== this.initiated) {
            return;
        }
        this.setInitiated();
        this.beforeHandler(e, 'end');
        this.hooks.trigger(this.hooks.eventTypes.end, e);
    };
    ActionsHandler.prototype.click = function (e) {
        this.hooks.trigger(this.hooks.eventTypes.click, e);
    };
    ActionsHandler.prototype.destroy = function () {
        this.wrapperEventRegister.destroy();
        this.targetEventRegister.destroy();
        this.hooks.destroy();
    };
    return ActionsHandler;
}());

var translaterMetaData = {
    x: ['translateX', 'px'],
    y: ['translateY', 'px']
};
var Translater = /** @class */ (function () {
    function Translater(content) {
        this.content = content;
        this.style = content.style;
        this.hooks = new EventEmitter(['beforeTranslate', 'translate']);
    }
    Translater.prototype.getComputedPosition = function () {
        var cssStyle = window.getComputedStyle(this.content, null);
        var matrix = cssStyle[style.transform].split(')')[0].split(', ');
        var x = +(matrix[12] || matrix[4]);
        var y = +(matrix[13] || matrix[5]);
        return {
            x: x,
            y: y
        };
    };
    Translater.prototype.translate = function (point) {
        var transformStyle = [];
        Object.keys(point).forEach(function (key) {
            if (!translaterMetaData[key]) {
                return;
            }
            var transformFnName = translaterMetaData[key][0];
            if (transformFnName) {
                var transformFnArgUnit = translaterMetaData[key][1];
                var transformFnArg = point[key];
                transformStyle.push(transformFnName + "(" + transformFnArg + transformFnArgUnit + ")");
            }
        });
        this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, transformStyle, point);
        this.style[style.transform] = "" + transformStyle.join(' ');
        this.hooks.trigger(this.hooks.eventTypes.translate, point);
    };
    Translater.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return Translater;
}());

var Base = /** @class */ (function () {
    function Base(content, translater, options) {
        this.content = content;
        this.translater = translater;
        this.options = options;
        this.hooks = new EventEmitter([
            'move',
            'end',
            'beforeForceStop',
            'forceStop',
            'time',
            'timeFunction'
        ]);
        this.style = content.style;
    }
    Base.prototype.translate = function (endPoint) {
        this.translater.translate(endPoint);
    };
    Base.prototype.setPending = function (pending) {
        this.pending = pending;
    };
    Base.prototype.setForceStopped = function (forceStopped) {
        this.forceStopped = forceStopped;
    };
    Base.prototype.destroy = function () {
        this.hooks.destroy();
        cancelAnimationFrame(this.timer);
    };
    return Base;
}());

var Transition = /** @class */ (function (_super) {
    __extends(Transition, _super);
    function Transition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Transition.prototype.startProbe = function () {
        var _this = this;
        var probe = function () {
            var pos = _this.translater.getComputedPosition();
            _this.hooks.trigger(_this.hooks.eventTypes.move, pos);
            // excute when transition ends
            if (!_this.pending) {
                _this.hooks.trigger(_this.hooks.eventTypes.end, pos);
                return;
            }
            _this.timer = requestAnimationFrame(probe);
        };
        cancelAnimationFrame(this.timer);
        this.timer = requestAnimationFrame(probe);
    };
    Transition.prototype.transitionTime = function (time) {
        if (time === void 0) { time = 0; }
        this.style[style.transitionDuration] = time + 'ms';
        this.hooks.trigger(this.hooks.eventTypes.time, time);
    };
    Transition.prototype.transitionTimingFunction = function (easing) {
        this.style[style.transitionTimingFunction] = easing;
        this.hooks.trigger(this.hooks.eventTypes.timeFunction, easing);
    };
    Transition.prototype.move = function (startPoint, endPoint, time, easingFn, isSlient) {
        this.setPending(time > 0 && (startPoint.x !== endPoint.x || startPoint.y !== endPoint.y));
        this.transitionTimingFunction(easingFn);
        this.transitionTime(time);
        this.translate(endPoint);
        if (time && this.options.probeType === Probe.Realtime) {
            this.startProbe();
        }
        // if we change content's transformY in a tick
        // such as: 0 -> 50px -> 0
        // transitionend will not be triggered
        // so we forceupdate by reflow
        if (!time) {
            this._reflow = this.content.offsetHeight;
        }
        // no need to dispatch move and end when slient
        if (!time && !isSlient) {
            this.hooks.trigger(this.hooks.eventTypes.move, endPoint);
            this.hooks.trigger(this.hooks.eventTypes.end, endPoint);
        }
    };
    Transition.prototype.stop = function () {
        // still in transition
        if (this.pending) {
            this.setPending(false);
            cancelAnimationFrame(this.timer);
            var _a = this.translater.getComputedPosition(), x = _a.x, y = _a.y;
            this.transitionTime();
            this.translate({ x: x, y: y });
            this.setForceStopped(true);
            if (this.hooks.trigger(this.hooks.eventTypes.beforeForceStop, { x: x, y: y })) {
                return;
            }
            this.hooks.trigger(this.hooks.eventTypes.forceStop, { x: x, y: y });
        }
    };
    return Transition;
}(Base));

var Animation = /** @class */ (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animation.prototype.move = function (startPoint, endPoint, time, easingFn, isSlient) {
        // time is 0
        if (!time) {
            this.translate(endPoint);
            // if we change content's transformY in a tick
            // such as: 0 -> 50px -> 0
            // transitionend will not be triggered
            // so we forceupdate by reflow
            this._reflow = this.content.offsetHeight;
            // no need to dispatch move and end when slient
            if (isSlient)
                return;
            this.hooks.trigger(this.hooks.eventTypes.move, endPoint);
            this.hooks.trigger(this.hooks.eventTypes.end, endPoint);
            return;
        }
        this.animate(startPoint, endPoint, time, easingFn);
    };
    Animation.prototype.animate = function (startPoint, endPoint, duration, easingFn) {
        var _this = this;
        var startTime = getNow();
        var destTime = startTime + duration;
        var step = function () {
            var now = getNow();
            // js animation end
            if (now >= destTime) {
                _this.translate(endPoint);
                _this.hooks.trigger(_this.hooks.eventTypes.move, endPoint);
                _this.hooks.trigger(_this.hooks.eventTypes.end, endPoint);
                return;
            }
            now = (now - startTime) / duration;
            var easing = easingFn(now);
            var newPoint = {};
            Object.keys(endPoint).forEach(function (key) {
                var startValue = startPoint[key];
                var endValue = endPoint[key];
                newPoint[key] = (endValue - startValue) * easing + startValue;
            });
            _this.translate(newPoint);
            if (_this.pending) {
                _this.timer = requestAnimationFrame(step);
            }
            if (_this.options.probeType === Probe.Realtime) {
                _this.hooks.trigger(_this.hooks.eventTypes.move, newPoint);
            }
        };
        this.setPending(true);
        cancelAnimationFrame(this.timer);
        step();
    };
    Animation.prototype.stop = function () {
        // still in requestFrameAnimation
        if (this.pending) {
            this.setPending(false);
            cancelAnimationFrame(this.timer);
            var pos = this.translater.getComputedPosition();
            this.setForceStopped(true);
            if (this.hooks.trigger(this.hooks.eventTypes.beforeForceStop, pos)) {
                return;
            }
            this.hooks.trigger(this.hooks.eventTypes.forceStop, pos);
        }
    };
    return Animation;
}(Base));

function createAnimater(element, translater, options) {
    var useTransition = options.useTransition;
    var animaterOptions = {};
    Object.defineProperty(animaterOptions, 'probeType', {
        enumerable: true,
        configurable: false,
        get: function () {
            return options.probeType;
        }
    });
    if (useTransition) {
        return new Transition(element, translater, animaterOptions);
    }
    else {
        return new Animation(element, translater, animaterOptions);
    }
}

var Behavior = /** @class */ (function () {
    function Behavior(wrapper, options) {
        this.wrapper = wrapper;
        this.options = options;
        this.hooks = new EventEmitter(['momentum', 'end']);
        this.content = this.wrapper.children[0];
        this.currentPos = 0;
        this.startPos = 0;
    }
    Behavior.prototype.start = function () {
        this.direction = Direction.Default;
        this.movingDirection = Direction.Default;
        this.dist = 0;
    };
    Behavior.prototype.move = function (delta) {
        delta = this.hasScroll ? delta : 0;
        this.movingDirection =
            delta > 0
                ? Direction.Negative
                : delta < 0
                    ? Direction.Positive
                    : Direction.Default;
        var newPos = this.currentPos + delta;
        // Slow down or stop if outside of the boundaries
        if (newPos > this.minScrollPos || newPos < this.maxScrollPos) {
            if ((newPos > this.minScrollPos && this.options.bounces[0]) ||
                (newPos < this.maxScrollPos && this.options.bounces[1])) {
                newPos = this.currentPos + delta / 3;
            }
            else {
                newPos =
                    newPos > this.minScrollPos ? this.minScrollPos : this.maxScrollPos;
            }
        }
        return newPos;
    };
    Behavior.prototype.end = function (duration) {
        var momentumInfo = {
            duration: 0
        };
        var absDist = Math.abs(this.currentPos - this.startPos);
        // start momentum animation if needed
        if (this.options.momentum &&
            duration < this.options.momentumLimitTime &&
            absDist > this.options.momentumLimitDistance) {
            var wrapperSize = (this.direction === Direction.Negative && this.options.bounces[0]) ||
                (this.direction === Direction.Positive && this.options.bounces[1])
                ? this.wrapperSize
                : 0;
            momentumInfo = this.hasScroll
                ? this.momentum(this.currentPos, this.startPos, duration, this.maxScrollPos, this.minScrollPos, wrapperSize, this.options)
                : { destination: this.currentPos, duration: 0 };
        }
        else {
            this.hooks.trigger(this.hooks.eventTypes.end, momentumInfo);
        }
        return momentumInfo;
    };
    Behavior.prototype.momentum = function (current, start, time, lowerMargin, upperMargin, wrapperSize, options) {
        if (options === void 0) { options = this.options; }
        var distance = current - start;
        var speed = Math.abs(distance) / time;
        var deceleration = options.deceleration, swipeBounceTime = options.swipeBounceTime, swipeTime = options.swipeTime;
        var momentumData = {
            destination: current + (speed / deceleration) * (distance < 0 ? -1 : 1),
            duration: swipeTime,
            rate: 15
        };
        this.hooks.trigger(this.hooks.eventTypes.momentum, momentumData, distance);
        if (momentumData.destination < lowerMargin) {
            momentumData.destination = wrapperSize
                ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - (wrapperSize / momentumData.rate) * speed)
                : lowerMargin;
            momentumData.duration = swipeBounceTime;
        }
        else if (momentumData.destination > upperMargin) {
            momentumData.destination = wrapperSize
                ? Math.min(upperMargin + wrapperSize / 4, upperMargin + (wrapperSize / momentumData.rate) * speed)
                : upperMargin;
            momentumData.duration = swipeBounceTime;
        }
        momentumData.destination = Math.round(momentumData.destination);
        return momentumData;
    };
    Behavior.prototype.updateDirection = function () {
        var absDist = Math.round(this.currentPos) - this.absStartPos;
        this.direction =
            absDist > 0
                ? Direction.Negative
                : absDist < 0
                    ? Direction.Positive
                    : Direction.Default;
    };
    Behavior.prototype.refresh = function () {
        var _a = this.options.rect, size = _a.size, position = _a.position;
        var isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static';
        var wrapperRect = getRect(this.wrapper);
        this.wrapperSize = wrapperRect[size];
        var contentRect = getRect(this.content);
        this.contentSize = contentRect[size];
        this.relativeOffset = contentRect[position];
        if (isWrapperStatic) {
            this.relativeOffset -= wrapperRect[position];
        }
        this.minScrollPos = 0;
        this.maxScrollPos = this.wrapperSize - this.contentSize;
        if (this.maxScrollPos < 0) {
            this.maxScrollPos -= this.relativeOffset;
            this.minScrollPos = -this.relativeOffset;
        }
        this.hasScroll =
            this.options.scrollable && this.maxScrollPos < this.minScrollPos;
        if (!this.hasScroll) {
            this.maxScrollPos = this.minScrollPos;
            this.contentSize = this.wrapperSize;
        }
        this.direction = 0;
    };
    Behavior.prototype.updatePosition = function (pos) {
        this.currentPos = pos;
    };
    Behavior.prototype.getCurrentPos = function () {
        return Math.round(this.currentPos);
    };
    Behavior.prototype.checkInBoundary = function () {
        var position = this.adjustPosition(this.currentPos);
        var inBoundary = position === this.getCurrentPos();
        return {
            position: position,
            inBoundary: inBoundary
        };
    };
    // adjust position when out of boundary
    Behavior.prototype.adjustPosition = function (pos) {
        var roundPos = Math.round(pos);
        if (!this.hasScroll || roundPos > this.minScrollPos) {
            roundPos = this.minScrollPos;
        }
        else if (roundPos < this.maxScrollPos) {
            roundPos = this.maxScrollPos;
        }
        return roundPos;
    };
    Behavior.prototype.updateStartPos = function () {
        this.startPos = this.currentPos;
    };
    Behavior.prototype.updateAbsStartPos = function () {
        this.absStartPos = this.currentPos;
    };
    Behavior.prototype.resetStartPos = function () {
        this.updateStartPos();
        this.updateAbsStartPos();
    };
    Behavior.prototype.getAbsDist = function (delta) {
        this.dist += delta;
        return Math.abs(this.dist);
    };
    Behavior.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return Behavior;
}());

var _a, _b, _c, _d;
var Passthrough;
(function (Passthrough) {
    Passthrough["Yes"] = "yes";
    Passthrough["No"] = "no";
})(Passthrough || (Passthrough = {}));
var PassthroughHandlers = (_a = {},
    _a[Passthrough.Yes] = function (e) {
        return true;
    },
    _a[Passthrough.No] = function (e) {
        e.preventDefault();
        return false;
    },
    _a);
var DirectionMap = (_b = {},
    _b[DirectionLock.Horizontal] = (_c = {},
        _c[Passthrough.Yes] = EventPassthrough.Horizontal,
        _c[Passthrough.No] = EventPassthrough.Vertical,
        _c),
    _b[DirectionLock.Vertical] = (_d = {},
        _d[Passthrough.Yes] = EventPassthrough.Vertical,
        _d[Passthrough.No] = EventPassthrough.Horizontal,
        _d),
    _b);
var DirectionLockAction = /** @class */ (function () {
    function DirectionLockAction(directionLockThreshold, freeScroll, eventPassthrough) {
        this.directionLockThreshold = directionLockThreshold;
        this.freeScroll = freeScroll;
        this.eventPassthrough = eventPassthrough;
        this.reset();
    }
    DirectionLockAction.prototype.reset = function () {
        this.directionLocked = DirectionLock.Default;
    };
    DirectionLockAction.prototype.checkMovingDirection = function (absDistX, absDistY, e) {
        this.computeDirectionLock(absDistX, absDistY);
        return this.handleEventPassthrough(e);
    };
    DirectionLockAction.prototype.adjustDelta = function (deltaX, deltaY) {
        if (this.directionLocked === DirectionLock.Horizontal) {
            deltaY = 0;
        }
        else if (this.directionLocked === DirectionLock.Vertical) {
            deltaX = 0;
        }
        return {
            deltaX: deltaX,
            deltaY: deltaY
        };
    };
    DirectionLockAction.prototype.computeDirectionLock = function (absDistX, absDistY) {
        // If you are scrolling in one direction, lock it
        if (this.directionLocked === DirectionLock.Default && !this.freeScroll) {
            if (absDistX > absDistY + this.directionLockThreshold) {
                this.directionLocked = DirectionLock.Horizontal; // lock horizontally
            }
            else if (absDistY >= absDistX + this.directionLockThreshold) {
                this.directionLocked = DirectionLock.Vertical; // lock vertically
            }
            else {
                this.directionLocked = DirectionLock.None; // no lock
            }
        }
    };
    DirectionLockAction.prototype.handleEventPassthrough = function (e) {
        var handleMap = DirectionMap[this.directionLocked];
        if (handleMap) {
            if (this.eventPassthrough === handleMap[Passthrough.Yes]) {
                return PassthroughHandlers[Passthrough.Yes](e);
            }
            else if (this.eventPassthrough === handleMap[Passthrough.No]) {
                return PassthroughHandlers[Passthrough.No](e);
            }
        }
        return false;
    };
    return DirectionLockAction;
}());

var ScrollerActions = /** @class */ (function () {
    function ScrollerActions(scrollBehaviorX, scrollBehaviorY, actionsHandler, animater, options) {
        this.hooks = new EventEmitter([
            'start',
            'beforeMove',
            'scrollStart',
            'scroll',
            'beforeEnd',
            'end',
            'scrollEnd'
        ]);
        this.scrollBehaviorX = scrollBehaviorX;
        this.scrollBehaviorY = scrollBehaviorY;
        this.actionsHandler = actionsHandler;
        this.animater = animater;
        this.options = options;
        this.directionLockAction = new DirectionLockAction(options.directionLockThreshold, options.freeScroll, options.eventPassthrough);
        this.enabled = true;
        this.bindActionsHandler();
    }
    ScrollerActions.prototype.bindActionsHandler = function () {
        var _this = this;
        // [mouse|touch]start event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, function (e) {
            if (!_this.enabled)
                return true;
            return _this.handleStart(e);
        });
        // [mouse|touch]move event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, function (_a) {
            var deltaX = _a.deltaX, deltaY = _a.deltaY, e = _a.e;
            if (!_this.enabled)
                return true;
            return _this.handleMove(deltaX, deltaY, e);
        });
        // [mouse|touch]end event
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, function (e) {
            if (!_this.enabled)
                return true;
            return _this.handleEnd(e);
        });
        // click
        this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, function (e) {
            // handle native click event
            if (_this.enabled && !e._constructed) {
                _this.handleClick(e);
            }
        });
    };
    ScrollerActions.prototype.handleStart = function (e) {
        var timestamp = getNow();
        this.moved = false;
        this.startTime = timestamp;
        this.directionLockAction.reset();
        this.scrollBehaviorX.start();
        this.scrollBehaviorY.start();
        // force stopping last transition or animation
        this.animater.stop();
        this.scrollBehaviorX.resetStartPos();
        this.scrollBehaviorY.resetStartPos();
        this.hooks.trigger(this.hooks.eventTypes.start, e);
    };
    ScrollerActions.prototype.handleMove = function (deltaX, deltaY, e) {
        if (this.hooks.trigger(this.hooks.eventTypes.beforeMove, e)) {
            return;
        }
        var absDistX = this.scrollBehaviorX.getAbsDist(deltaX);
        var absDistY = this.scrollBehaviorY.getAbsDist(deltaY);
        var timestamp = getNow();
        // We need to move at least momentumLimitDistance pixels
        // for the scrolling to initiate
        if (this.checkMomentum(absDistX, absDistY, timestamp)) {
            return true;
        }
        if (this.directionLockAction.checkMovingDirection(absDistX, absDistY, e)) {
            this.actionsHandler.setInitiated();
            return true;
        }
        var delta = this.directionLockAction.adjustDelta(deltaX, deltaY);
        var newX = this.scrollBehaviorX.move(delta.deltaX);
        var newY = this.scrollBehaviorY.move(delta.deltaY);
        if (!this.moved) {
            this.moved = true;
            this.hooks.trigger(this.hooks.eventTypes.scrollStart);
        }
        this.animater.translate({
            x: newX,
            y: newY
        });
        this.dispatchScroll(timestamp);
    };
    ScrollerActions.prototype.dispatchScroll = function (timestamp) {
        // dispatch scroll in interval time
        if (timestamp - this.startTime > this.options.momentumLimitTime) {
            // refresh time and starting position to initiate a momentum
            this.startTime = timestamp;
            this.scrollBehaviorX.updateStartPos();
            this.scrollBehaviorY.updateStartPos();
            if (this.options.probeType === Probe.Throttle) {
                this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
            }
        }
        // dispatch scroll all the time
        if (this.options.probeType > Probe.Throttle) {
            this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
        }
    };
    ScrollerActions.prototype.checkMomentum = function (absDistX, absDistY, timestamp) {
        return (timestamp - this.endTime > this.options.momentumLimitTime &&
            absDistY < this.options.momentumLimitDistance &&
            absDistX < this.options.momentumLimitDistance);
    };
    ScrollerActions.prototype.handleEnd = function (e) {
        if (this.hooks.trigger(this.hooks.eventTypes.beforeEnd, e)) {
            return;
        }
        var currentPos = this.getCurrentPos();
        this.scrollBehaviorX.updateDirection();
        this.scrollBehaviorY.updateDirection();
        if (this.hooks.trigger(this.hooks.eventTypes.end, e, currentPos)) {
            return true;
        }
        this.animater.translate(currentPos);
        this.endTime = getNow();
        var duration = this.endTime - this.startTime;
        this.hooks.trigger(this.hooks.eventTypes.scrollEnd, currentPos, duration);
    };
    ScrollerActions.prototype.handleClick = function (e) {
        if (!preventDefaultExceptionFn(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
    ScrollerActions.prototype.getCurrentPos = function () {
        return {
            x: this.scrollBehaviorX.getCurrentPos(),
            y: this.scrollBehaviorY.getCurrentPos()
        };
    };
    ScrollerActions.prototype.refresh = function () {
        this.endTime = 0;
    };
    ScrollerActions.prototype.destroy = function () {
        this.hooks.destroy();
    };
    return ScrollerActions;
}());

function createActionsHandlerOptions(bsOptions) {
    var options = [
        'click',
        'bindToWrapper',
        'disableMouse',
        'disableTouch',
        'preventDefault',
        'stopPropagation',
        'tagException',
        'preventDefaultException'
    ].reduce(function (prev, cur) {
        prev[cur] = bsOptions[cur];
        return prev;
    }, {});
    return options;
}
function createBehaviorOptions(bsOptions, extraProp, bounces, rect) {
    var options = [
        'momentum',
        'momentumLimitTime',
        'momentumLimitDistance',
        'deceleration',
        'swipeBounceTime',
        'swipeTime'
    ].reduce(function (prev, cur) {
        prev[cur] = bsOptions[cur];
        return prev;
    }, {});
    // add extra property
    options.scrollable = bsOptions[extraProp];
    options.bounces = bounces;
    options.rect = rect;
    return options;
}

function bubbling(source, target, events) {
    events.forEach(function (event) {
        var sourceEvent;
        var targetEvent;
        if (typeof event === 'string') {
            sourceEvent = targetEvent = event;
        }
        else {
            sourceEvent = event.source;
            targetEvent = event.target;
        }
        source.on(sourceEvent, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return target.trigger.apply(target, [targetEvent].concat(args));
        });
    });
}

var Scroller = /** @class */ (function () {
    function Scroller(wrapper, options) {
        this.hooks = new EventEmitter([
            'beforeStart',
            'beforeMove',
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'beforeEnd',
            'scrollEnd',
            'refresh',
            'touchEnd',
            'end',
            'flick',
            'scrollCancel',
            'momentum',
            'scrollTo',
            'ignoreDisMoveForSamePos',
            'scrollToElement'
        ]);
        this.wrapper = wrapper;
        this.content = wrapper.children[0];
        this.options = options;
        var _a = this
            .options.bounce, _b = _a.left, left = _b === void 0 ? true : _b, _c = _a.right, right = _c === void 0 ? true : _c, _d = _a.top, top = _d === void 0 ? true : _d, _e = _a.bottom, bottom = _e === void 0 ? true : _e;
        // direction X
        this.scrollBehaviorX = new Behavior(wrapper, createBehaviorOptions(options, 'scrollX', [left, right], {
            size: 'width',
            position: 'left'
        }));
        // direction Y
        this.scrollBehaviorY = new Behavior(wrapper, createBehaviorOptions(options, 'scrollY', [top, bottom], {
            size: 'height',
            position: 'top'
        }));
        this.translater = new Translater(this.content);
        this.animater = createAnimater(this.content, this.translater, this.options);
        this.actionsHandler = new ActionsHandler(wrapper, createActionsHandlerOptions(this.options));
        this.actions = new ScrollerActions(this.scrollBehaviorX, this.scrollBehaviorY, this.actionsHandler, this.animater, this.options);
        var resizeHandler = this.resize.bind(this);
        this.resizeRegister = new EventRegister(window, [
            {
                name: 'orientationchange',
                handler: resizeHandler
            },
            {
                name: 'resize',
                handler: resizeHandler
            }
        ]);
        this.transitionEndRegister = new EventRegister(this.content, [
            {
                name: style.transitionEnd,
                handler: this.transitionEnd.bind(this)
            }
        ]);
        this.init();
    }
    Scroller.prototype.init = function () {
        var _this = this;
        this.bindTranslater();
        this.bindAnimater();
        this.bindActions();
        // enable pointer events when scrolling ends
        this.hooks.on(this.hooks.eventTypes.scrollEnd, function () {
            _this.togglePointerEvents(true);
        });
    };
    Scroller.prototype.bindTranslater = function () {
        var _this = this;
        var hooks = this.translater.hooks;
        hooks.on(hooks.eventTypes.beforeTranslate, function (transformStyle) {
            if (_this.options.translateZ) {
                transformStyle.push(_this.options.translateZ);
            }
        });
        // disable pointer events when scrolling
        hooks.on(hooks.eventTypes.translate, function (pos) {
            _this.updatePositions(pos);
            _this.togglePointerEvents(false);
        });
    };
    Scroller.prototype.bindAnimater = function () {
        var _this = this;
        // reset position
        this.animater.hooks.on(this.animater.hooks.eventTypes.end, function (pos) {
            if (!_this.resetPosition(_this.options.bounceTime)) {
                _this.animater.setPending(false);
                _this.hooks.trigger(_this.hooks.eventTypes.scrollEnd, pos);
            }
        });
        bubbling(this.animater.hooks, this.hooks, [
            {
                source: this.animater.hooks.eventTypes.move,
                target: this.hooks.eventTypes.scroll
            },
            {
                source: this.animater.hooks.eventTypes.forceStop,
                target: this.hooks.eventTypes.scrollEnd
            }
        ]);
    };
    Scroller.prototype.bindActions = function () {
        var _this = this;
        var actions = this.actions;
        bubbling(actions.hooks, this.hooks, [
            {
                source: actions.hooks.eventTypes.start,
                target: this.hooks.eventTypes.beforeStart
            },
            {
                source: actions.hooks.eventTypes.start,
                target: this.hooks.eventTypes.beforeScrollStart // just for event api
            },
            {
                source: actions.hooks.eventTypes.beforeMove,
                target: this.hooks.eventTypes.beforeMove
            },
            {
                source: actions.hooks.eventTypes.scrollStart,
                target: this.hooks.eventTypes.scrollStart
            },
            {
                source: actions.hooks.eventTypes.scroll,
                target: this.hooks.eventTypes.scroll
            },
            {
                source: actions.hooks.eventTypes.beforeEnd,
                target: this.hooks.eventTypes.beforeEnd
            }
        ]);
        actions.hooks.on(actions.hooks.eventTypes.end, function (e, pos) {
            _this.hooks.trigger(_this.hooks.eventTypes.touchEnd, pos);
            if (_this.hooks.trigger(_this.hooks.eventTypes.end, pos)) {
                return true;
            }
            // check if it is a click operation
            if (!actions.moved && _this.checkClick(e)) {
                _this.animater.setForceStopped(false);
                _this.hooks.trigger(_this.hooks.eventTypes.scrollCancel);
                return true;
            }
            _this.animater.setForceStopped(false);
            // reset if we are outside of the boundaries
            if (_this.resetPosition(_this.options.bounceTime, ease.bounce)) {
                return true;
            }
        });
        actions.hooks.on(actions.hooks.eventTypes.scrollEnd, function (pos, duration) {
            var deltaX = Math.abs(pos.x - _this.scrollBehaviorX.startPos);
            var deltaY = Math.abs(pos.y - _this.scrollBehaviorY.startPos);
            if (_this.checkFlick(duration, deltaX, deltaY)) {
                _this.hooks.trigger(_this.hooks.eventTypes.flick);
                return;
            }
            if (_this.momentum(pos, duration)) {
                return;
            }
            _this.hooks.trigger(_this.hooks.eventTypes.scrollEnd, pos);
        });
    };
    Scroller.prototype.checkFlick = function (duration, deltaX, deltaY) {
        // flick
        if (this.hooks.events.flick.length > 1 &&
            duration < this.options.flickLimitTime &&
            deltaX < this.options.flickLimitDistance &&
            deltaY < this.options.flickLimitDistance) {
            return true;
        }
    };
    Scroller.prototype.momentum = function (pos, duration) {
        var meta = {
            time: 0,
            easing: ease.swiper,
            newX: pos.x,
            newY: pos.y
        };
        // start momentum animation if needed
        var momentumX = this.scrollBehaviorX.end(duration);
        var momentumY = this.scrollBehaviorY.end(duration);
        meta.newX = isUndef(momentumX.destination)
            ? meta.newX
            : momentumX.destination;
        meta.newY = isUndef(momentumY.destination)
            ? meta.newY
            : momentumY.destination;
        meta.time = Math.max(momentumX.duration, momentumY.duration);
        this.hooks.trigger(this.hooks.eventTypes.momentum, meta, this);
        // when x or y changed, do momentum animation now!
        if (meta.newX !== pos.x || meta.newY !== pos.y) {
            // change easing function when scroller goes out of the boundaries
            if (meta.newX > this.scrollBehaviorX.minScrollPos ||
                meta.newX < this.scrollBehaviorX.maxScrollPos ||
                meta.newY > this.scrollBehaviorY.minScrollPos ||
                meta.newY < this.scrollBehaviorY.maxScrollPos) {
                meta.easing = ease.swipeBounce;
            }
            this.scrollTo(meta.newX, meta.newY, meta.time, meta.easing);
            return true;
        }
    };
    Scroller.prototype.checkClick = function (e) {
        // when in the process of pulling down, it should not prevent click
        var cancelable = {
            preventClick: this.animater.forceStopped
        };
        // we scrolled less than momentumLimitDistance pixels
        if (this.hooks.trigger(this.hooks.eventTypes.checkClick))
            return true;
        if (!cancelable.preventClick) {
            var _dblclick = this.options.dblclick;
            var dblclickTrigged = false;
            if (_dblclick && this.lastClickTime) {
                var _a = _dblclick.delay, delay = _a === void 0 ? 300 : _a;
                if (getNow() - this.lastClickTime < delay) {
                    dblclickTrigged = true;
                    dblclick(e);
                }
            }
            if (this.options.tap) {
                tap(e, this.options.tap);
            }
            if (this.options.click &&
                !preventDefaultExceptionFn(e.target, this.options.preventDefaultException)) {
                click(e);
            }
            this.lastClickTime = dblclickTrigged ? null : getNow();
            return true;
        }
        return false;
    };
    Scroller.prototype.resize = function () {
        var _this = this;
        if (!this.actions.enabled) {
            return;
        }
        // fix a scroll problem under Android condition
        if (isAndroid) {
            this.wrapper.scrollTop = 0;
        }
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(function () {
            _this.refresh();
        }, this.options.resizePolling);
    };
    Scroller.prototype.transitionEnd = function (e) {
        if (e.target !== this.content || !this.animater.pending) {
            return;
        }
        var animater = this.animater;
        animater.transitionTime();
        if (!this.resetPosition(this.options.bounceTime, ease.bounce)) {
            this.animater.setPending(false);
            if (this.options.probeType !== Probe.Realtime) {
                this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos());
            }
        }
    };
    Scroller.prototype.togglePointerEvents = function (enabled) {
        if (enabled === void 0) { enabled = true; }
        var el = this.content.children.length
            ? this.content.children
            : [this.content];
        var pointerEvents = enabled ? 'auto' : 'none';
        for (var i = 0; i < el.length; i++) {
            var node = el[i];
            // ignore BetterScroll instance's wrapper DOM
            if (node.isBScroll) {
                continue;
            }
            node.style.pointerEvents = pointerEvents;
        }
    };
    Scroller.prototype.refresh = function () {
        this.scrollBehaviorX.refresh();
        this.scrollBehaviorY.refresh();
        this.actions.refresh();
        this.wrapperOffset = offset(this.wrapper);
    };
    Scroller.prototype.scrollBy = function (deltaX, deltaY, time, easing) {
        if (time === void 0) { time = 0; }
        var _a = this.getCurrentPos(), x = _a.x, y = _a.y;
        easing = !easing ? ease.bounce : easing;
        deltaX += x;
        deltaY += y;
        this.scrollTo(deltaX, deltaY, time, easing);
    };
    Scroller.prototype.scrollTo = function (x, y, time, easing, extraTransform, isSilent) {
        if (time === void 0) { time = 0; }
        if (extraTransform === void 0) { extraTransform = {
            start: {},
            end: {}
        }; }
        easing = !easing ? ease.bounce : easing;
        var easingFn = this.options.useTransition ? easing.style : easing.fn;
        var currentPos = this.getCurrentPos();
        var startPoint = __assign({ x: currentPos.x, y: currentPos.y }, extraTransform.start);
        var endPoint = __assign({ x: x,
            y: y }, extraTransform.end);
        this.hooks.trigger(this.hooks.eventTypes.scrollTo, endPoint);
        if (!this.hooks.trigger(this.hooks.eventTypes.ignoreDisMoveForSamePos)) {
            // it is an useless move
            if (startPoint.x === endPoint.x && startPoint.y === endPoint.y) {
                return;
            }
        }
        this.animater.move(startPoint, endPoint, time, easingFn, isSilent);
    };
    Scroller.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
        var targetEle = getElement(el);
        var pos = offset(targetEle);
        var getOffset = function (offset, size, wrapperSize) {
            if (typeof offset === 'number') {
                return offset;
            }
            // if offsetX/Y are true we center the element to the screen
            return offset ? Math.round(size / 2 - wrapperSize / 2) : 0;
        };
        offsetX = getOffset(offsetX, targetEle.offsetWidth, this.wrapper.offsetWidth);
        offsetY = getOffset(offsetY, targetEle.offsetHeight, this.wrapper.offsetHeight);
        var getPos = function (pos, wrapperPos, offset, scrollBehavior) {
            pos -= wrapperPos;
            pos = scrollBehavior.adjustPosition(pos - offset);
            return pos;
        };
        pos.left = getPos(pos.left, this.wrapperOffset.left, offsetX, this.scrollBehaviorX);
        pos.top = getPos(pos.top, this.wrapperOffset.top, offsetY, this.scrollBehaviorY);
        if (this.hooks.trigger(this.hooks.eventTypes.scrollToElement, targetEle, pos)) {
            return;
        }
        this.scrollTo(pos.left, pos.top, time, easing);
    };
    Scroller.prototype.resetPosition = function (time, easing) {
        if (time === void 0) { time = 0; }
        easing = !easing ? ease.bounce : easing;
        var _a = this.scrollBehaviorX.checkInBoundary(), x = _a.position, xInBoundary = _a.inBoundary;
        var _b = this.scrollBehaviorY.checkInBoundary(), y = _b.position, yInBoundary = _b.inBoundary;
        if (xInBoundary && yInBoundary) {
            return false;
        }
        // out of boundary
        this.scrollTo(x, y, time, easing);
        return true;
    };
    Scroller.prototype.updatePositions = function (pos) {
        this.scrollBehaviorX.updatePosition(pos.x);
        this.scrollBehaviorY.updatePosition(pos.y);
    };
    Scroller.prototype.getCurrentPos = function () {
        return this.actions.getCurrentPos();
    };
    Scroller.prototype.enable = function () {
        this.actions.enabled = true;
    };
    Scroller.prototype.disable = function () {
        cancelAnimationFrame(this.animater.timer);
        this.actions.enabled = false;
    };
    Scroller.prototype.destroy = function () {
        var _this = this;
        var keys = [
            'resizeRegister',
            'transitionEndRegister',
            'actionsHandler',
            'actions',
            'hooks',
            'animater',
            'translater',
            'scrollBehaviorX',
            'scrollBehaviorY'
        ];
        keys.forEach(function (key) { return _this[key].destroy(); });
    };
    return Scroller;
}());

var propertiesConfig = [
    {
        sourceKey: 'scroller.scrollBehaviorX.currentPos',
        key: 'x'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.currentPos',
        key: 'y'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.hasScroll',
        key: 'hasHorizontalScroll'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.hasScroll',
        key: 'hasVerticalScroll'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.contentSize',
        key: 'scrollerWidth'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.contentSize',
        key: 'scrollerHeight'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.maxScrollPos',
        key: 'maxScrollX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.maxScrollPos',
        key: 'maxScrollY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.minScrollPos',
        key: 'minScrollX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.minScrollPos',
        key: 'minScrollY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.movingDirection',
        key: 'movingDirectionX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.movingDirection',
        key: 'movingDirectionY'
    },
    {
        sourceKey: 'scroller.scrollBehaviorX.direction',
        key: 'directionX'
    },
    {
        sourceKey: 'scroller.scrollBehaviorY.direction',
        key: 'directionY'
    },
    {
        sourceKey: 'scroller.actions.enabled',
        key: 'enabled'
    },
    {
        sourceKey: 'scroller.animater.pending',
        key: 'pending'
    },
    {
        sourceKey: 'scroller.animater.stop',
        key: 'stop'
    },
    {
        sourceKey: 'scroller.scrollTo',
        key: 'scrollTo'
    },
    {
        sourceKey: 'scroller.scrollBy',
        key: 'scrollBy'
    },
    {
        sourceKey: 'scroller.scrollToElement',
        key: 'scrollToElement'
    },
    {
        sourceKey: 'scroller.resetPosition',
        key: 'resetPosition'
    }
];

var EnforceOrder;
(function (EnforceOrder) {
    EnforceOrder["Pre"] = "pre";
    EnforceOrder["Post"] = "post";
})(EnforceOrder || (EnforceOrder = {}));

var BScroll = /** @class */ (function (_super) {
    __extends(BScroll, _super);
    function BScroll(el, options) {
        var _this = _super.call(this, [
            'refresh',
            'enable',
            'disable',
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'scrollEnd',
            'scrollCancel',
            'touchEnd',
            'flick',
            'destroy'
        ]) || this;
        var wrapper = getElement(el);
        if (!wrapper) {
            warn('Can not resolve the wrapper DOM.');
            return _this;
        }
        var content = wrapper.children[0];
        if (!content) {
            warn('The wrapper need at least one child element to be scroller.');
            return _this;
        }
        _this.plugins = {};
        _this.options = new Options().merge(options).process();
        _this.hooks = new EventEmitter([
            'init',
            'refresh',
            'enable',
            'disable',
            'destroy'
        ]);
        _this.init(wrapper);
        return _this;
    }
    BScroll.use = function (ctor) {
        var name = ctor.pluginName;
        var installed = this.plugins.some(function (plugin) { return ctor === plugin.ctor; });
        if (installed)
            return this;
        if (isUndef(name)) {
            warn("Plugin Class must specify plugin's name in static property by 'pluginName' field.");
            return this;
        }
        if (this.pluginsMap[name]) {
            warn("This plugin has been registered, maybe you need change plugin's name");
            return this;
        }
        this.pluginsMap[name] = true;
        this.plugins.push({
            name: name,
            enforce: ctor.enforce,
            ctor: ctor
        });
        return this;
    };
    BScroll.prototype.init = function (wrapper) {
        this.wrapper = wrapper;
        wrapper.isBScroll = true;
        this.scroller = new Scroller(wrapper, this.options);
        this.eventBubbling();
        this.handleAutoBlur();
        this.innerRefresh();
        this.scroller.scrollTo(this.options.startX, this.options.startY);
        this.enable();
        this.proxy(propertiesConfig);
        this.applyPlugins();
    };
    BScroll.prototype.applyPlugins = function () {
        var _this = this;
        var options = this.options;
        this.constructor.plugins
            .sort(function (a, b) {
            var _a;
            var enforeOrderMap = (_a = {},
                _a[EnforceOrder.Pre] = -1,
                _a[EnforceOrder.Post] = 1,
                _a);
            var aOrder = a.enforce ? enforeOrderMap[a.enforce] : 0;
            var bOrder = b.enforce ? enforeOrderMap[b.enforce] : 0;
            return aOrder - bOrder;
        })
            .forEach(function (item) {
            var ctor = item.ctor;
            if (options[item.name] && typeof ctor === 'function') {
                _this.plugins[item.name] = new ctor(_this);
            }
        });
    };
    BScroll.prototype.handleAutoBlur = function () {
        if (this.options.autoBlur) {
            this.on(this.eventTypes.beforeScrollStart, function () {
                var activeElement = document.activeElement;
                if (activeElement &&
                    (activeElement.tagName === 'INPUT' ||
                        activeElement.tagName === 'TEXTAREA')) {
                    activeElement.blur();
                }
            });
        }
    };
    BScroll.prototype.eventBubbling = function () {
        bubbling(this.scroller.hooks, this, [
            'beforeScrollStart',
            'scrollStart',
            'scroll',
            'scrollEnd',
            'scrollCancel',
            'touchEnd',
            'flick'
        ]);
    };
    BScroll.prototype.innerRefresh = function () {
        this.scroller.refresh();
        this.hooks.trigger(this.hooks.eventTypes.refresh);
        this.trigger(this.eventTypes.refresh);
    };
    BScroll.prototype.proxy = function (propertiesConfig) {
        var _this = this;
        propertiesConfig.forEach(function (_a) {
            var key = _a.key, sourceKey = _a.sourceKey;
            propertiesProxy(_this, sourceKey, key);
        });
    };
    BScroll.prototype.refresh = function () {
        this.innerRefresh();
        this.scroller.resetPosition();
    };
    BScroll.prototype.enable = function () {
        this.scroller.enable();
        this.hooks.trigger(this.hooks.eventTypes.enable);
        this.trigger(this.eventTypes.enable);
    };
    BScroll.prototype.disable = function () {
        this.scroller.disable();
        this.hooks.trigger(this.hooks.eventTypes.disable);
        this.trigger(this.eventTypes.disable);
    };
    BScroll.prototype.destroy = function () {
        this.hooks.trigger(this.hooks.eventTypes.destroy);
        this.trigger(this.eventTypes.destroy);
        this.scroller.destroy();
    };
    BScroll.prototype.eventRegister = function (names) {
        this.registerType(names);
    };
    BScroll.plugins = [];
    BScroll.pluginsMap = {};
    return BScroll;
}(EventEmitter));

/* harmony default export */ __webpack_exports__["default"] = (BScroll);



/***/ }),

/***/ "./node_modules/@better-scroll/pull-down/dist/pull-down.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@better-scroll/pull-down/dist/pull-down.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * better-scroll / pull-down
 * (c) 2016-2019 ustbhuangyi
 * Released under the MIT License.
 */
var Direction;
(function (Direction) {
    Direction[Direction["Positive"] = 1] = "Positive";
    Direction[Direction["Negative"] = -1] = "Negative";
    Direction[Direction["Default"] = 0] = "Default";
})(Direction || (Direction = {}));

var Probe;
(function (Probe) {
    Probe[Probe["Default"] = 0] = "Default";
    Probe[Probe["Throttle"] = 1] = "Throttle";
    Probe[Probe["Normal"] = 2] = "Normal";
    Probe[Probe["Realtime"] = 3] = "Realtime";
})(Probe || (Probe = {}));

var ease = {
    // easeOutQuint
    swipe: {
        style: 'cubic-bezier(0.23, 1, 0.32, 1)',
        fn: function (t) {
            return 1 + --t * t * t * t * t;
        }
    },
    // easeOutQuard
    swipeBounce: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function (t) {
            return t * (2 - t);
        }
    },
    // easeOutQuart
    bounce: {
        style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        fn: function (t) {
            return 1 - --t * t * t * t;
        }
    }
};

var sourcePrefix = 'plugins.pullDownRefresh';
var propertiesMap = [
    {
        key: 'finishPullDown',
        name: 'finish'
    },
    {
        key: 'openPullDown',
        name: 'open'
    },
    {
        key: 'closePullDown',
        name: 'close'
    },
    {
        key: 'autoPullDownRefresh',
        name: 'autoPull'
    }
];
var propertiesProxyConfig = propertiesMap.map(function (item) {
    return {
        key: item.key,
        sourceKey: sourcePrefix + "." + item.name
    };
});

var PullDown = /** @class */ (function () {
    function PullDown(scroll) {
        this.scroll = scroll;
        this.pulling = false;
        if (scroll.options.pullDownRefresh) {
            this._watch();
        }
        this.scroll.registerType(['pullingDown']);
        this.scroll.proxy(propertiesProxyConfig);
    }
    PullDown.prototype._watch = function () {
        // 需要设置 probe = 3 吗？
        // must watch scroll in real time
        this.scroll.options.probeType = Probe.Realtime;
        this.scroll.scroller.hooks.on('end', this._checkPullDown, this);
    };
    PullDown.prototype._checkPullDown = function () {
        if (!this.scroll.options.pullDownRefresh) {
            return;
        }
        var _a = this.scroll.options
            .pullDownRefresh, _b = _a.threshold, threshold = _b === void 0 ? 90 : _b, _c = _a.stop, stop = _c === void 0 ? 40 : _c;
        // check if a real pull down action
        if (this.scroll.directionY !== Direction.Negative ||
            this.scroll.y < threshold) {
            return false;
        }
        if (!this.pulling) {
            this.pulling = true;
            this.scroll.trigger('pullingDown');
            this.originalMinScrollY = this.scroll.minScrollY;
            this.scroll.minScrollY = stop;
        }
        this.scroll.scrollTo(this.scroll.x, stop, this.scroll.options.bounceTime, ease.bounce);
        return this.pulling;
    };
    PullDown.prototype.finish = function () {
        this.pulling = false;
        this.scroll.minScrollY = this.originalMinScrollY;
        this.scroll.resetPosition(this.scroll.options.bounceTime, ease.bounce);
    };
    PullDown.prototype.open = function (config) {
        if (config === void 0) { config = true; }
        this.scroll.options.pullDownRefresh = config;
        this._watch();
    };
    PullDown.prototype.close = function () {
        this.scroll.options.pullDownRefresh = false;
    };
    PullDown.prototype.autoPull = function () {
        var _a = this.scroll.options
            .pullDownRefresh, _b = _a.threshold, threshold = _b === void 0 ? 90 : _b, _c = _a.stop, stop = _c === void 0 ? 40 : _c;
        if (this.pulling) {
            return;
        }
        this.pulling = true;
        this.originalMinScrollY = this.scroll.minScrollY;
        this.scroll.minScrollY = threshold;
        this.scroll.scrollTo(this.scroll.x, threshold);
        this.scroll.trigger('pullingDown');
        this.scroll.scrollTo(this.scroll.x, stop, this.scroll.options.bounceTime, ease.bounce);
    };
    PullDown.pluginName = 'pullDownRefresh';
    return PullDown;
}());

/* harmony default export */ __webpack_exports__["default"] = (PullDown);


/***/ }),

/***/ "./node_modules/@better-scroll/pull-up/dist/pull-up.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@better-scroll/pull-up/dist/pull-up.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * better-scroll / pull-up
 * (c) 2016-2019 ustbhuangyi
 * Released under the MIT License.
 */
var Direction;
(function (Direction) {
    Direction[Direction["Positive"] = 1] = "Positive";
    Direction[Direction["Negative"] = -1] = "Negative";
    Direction[Direction["Default"] = 0] = "Default";
})(Direction || (Direction = {}));

var Probe;
(function (Probe) {
    Probe[Probe["Default"] = 0] = "Default";
    Probe[Probe["Throttle"] = 1] = "Throttle";
    Probe[Probe["Normal"] = 2] = "Normal";
    Probe[Probe["Realtime"] = 3] = "Realtime";
})(Probe || (Probe = {}));

var sourcePrefix = 'plugins.pullUpLoad';
var propertiesMap = [
    {
        key: 'finishPullUp',
        name: 'finish'
    },
    {
        key: 'openPullUp',
        name: 'open'
    },
    {
        key: 'closePullUp',
        name: 'close'
    }
];
var propertiesProxyConfig = propertiesMap.map(function (item) {
    return {
        key: item.key,
        sourceKey: sourcePrefix + "." + item.name
    };
});

var PullUp = /** @class */ (function () {
    function PullUp(bscroll) {
        this.bscroll = bscroll;
        this.watching = false;
        if (bscroll.options.pullUpLoad) {
            this._watch();
        }
        this.bscroll.registerType(['pullingUp']);
        this.bscroll.proxy(propertiesProxyConfig);
    }
    PullUp.prototype._watch = function () {
        if (this.watching) {
            return;
        }
        // must watch scroll in real time
        this.bscroll.options.probeType = Probe.Realtime;
        this.watching = true;
        this.bscroll.on('scroll', this._checkToEnd, this);
    };
    PullUp.prototype._checkToEnd = function (pos) {
        var _this = this;
        if (!this.bscroll.options.pullUpLoad) {
            return;
        }
        var _a = this.bscroll.options
            .pullUpLoad.threshold, threshold = _a === void 0 ? 0 : _a;
        if (this.bscroll.movingDirectionY === Direction.Positive &&
            pos.y <= this.bscroll.maxScrollY + threshold) {
            // reset pullupWatching status after scroll end to promise that trigger 'pullingUp' only once when pulling up
            this.bscroll.once('scrollEnd', function () {
                _this.watching = false;
            });
            this.bscroll.trigger('pullingUp');
            this.bscroll.off('scroll', this._checkToEnd);
        }
    };
    PullUp.prototype.finish = function () {
        if (this.watching) {
            this.bscroll.once('scrollEnd', this._watch, this);
        }
        else {
            this._watch();
        }
    };
    PullUp.prototype.open = function (config) {
        if (config === void 0) { config = true; }
        this.bscroll.options.pullUpLoad = config;
        this._watch();
    };
    PullUp.prototype.close = function () {
        this.bscroll.options.pullUpLoad = false;
        if (!this.watching) {
            return;
        }
        this.watching = false;
        this.bscroll.off('scroll', this._checkToEnd);
    };
    PullUp.pluginName = 'pullUpLoad';
    return PullUp;
}());

/* harmony default export */ __webpack_exports__["default"] = (PullUp);


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/js/controller/ErrorController.js":
/*!**********************************************!*\
  !*** ./src/js/controller/ErrorController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_error_error_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/error/error.html */ "./src/views/error/error.html");
/* harmony import */ var _views_error_error_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_error_error_html__WEBPACK_IMPORTED_MODULE_2__);




var SearchController =
/*#__PURE__*/
function () {
  function SearchController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SearchController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SearchController, [{
    key: "render",
    value: function render() {
      $('#main-container').html(_views_error_error_html__WEBPACK_IMPORTED_MODULE_2___default.a);
    }
  }]);

  return SearchController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SearchController());

/***/ }),

/***/ "./src/js/controller/PositionController.js":
/*!*************************************************!*\
  !*** ./src/js/controller/PositionController.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _better_scroll_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @better-scroll/core */ "./node_modules/@better-scroll/core/dist/core.esm.js");
/* harmony import */ var _better_scroll_pull_up__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @better-scroll/pull-up */ "./node_modules/@better-scroll/pull-up/dist/pull-up.esm.js");
/* harmony import */ var _better_scroll_pull_down__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @better-scroll/pull-down */ "./node_modules/@better-scroll/pull-down/dist/pull-down.esm.js");
/* harmony import */ var _views_position_positionlist_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/position/positionlist.html */ "./src/views/position/positionlist.html");
/* harmony import */ var _views_position_positionlist_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_views_position_positionlist_html__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../views/position/positionlist-item.html */ "./src/views/position/positionlist-item.html");
/* harmony import */ var _views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _model_Fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/Fetch */ "./src/js/model/Fetch.js");










_better_scroll_core__WEBPACK_IMPORTED_MODULE_4__["default"].use(_better_scroll_pull_up__WEBPACK_IMPORTED_MODULE_5__["default"]); // 底部下拉

_better_scroll_core__WEBPACK_IMPORTED_MODULE_4__["default"].use(_better_scroll_pull_down__WEBPACK_IMPORTED_MODULE_6__["default"]); //顶部下拉

var PositionController =
/*#__PURE__*/
function () {
  function PositionController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PositionController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PositionController, [{
    key: "getlist",
    value: function getlist() {
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(reslove, reject) {
          var rs, html;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  $("#loading").show();
                  _context.next = 3;
                  return _model_Fetch__WEBPACK_IMPORTED_MODULE_9__["default"].getPositionList();

                case 3:
                  rs = _context.sent;
                  html = template.render(_views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    list: rs.content.data.page.result
                  });
                  $("#list-container").html(html);
                  $("#loading").hide();
                  reslove();

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "render",
    value: function () {
      var _render = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this = this;

        var $head;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                $("#main-container").html(_views_position_positionlist_html__WEBPACK_IMPORTED_MODULE_7___default.a);
                $head = $("#main-container .head");
                _context3.next = 4;
                return this.getlist();

              case 4:
                this.scroll = new _better_scroll_core__WEBPACK_IMPORTED_MODULE_4__["default"]('#position-wrapper', {
                  scrollY: true,
                  probeType: 3,
                  pullDownRefresh: {
                    threshold: 50
                  }
                });
                this.scroll.on('pullingDown',
                /*#__PURE__*/
                _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          console.log('pullingDown');
                          _context2.next = 3;
                          return _this.getlist();

                        case 3:
                          _this.scroll.finishPullDown(); // 回调结束必须有


                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                })));
                this.scroll.on('scroll', function () {
                  if (this.y > 10 && this.y < 50) {
                    $head.show();
                  } else if (this.y > 50) {
                    $head.find('img').attr('src', './images/loading.gif');
                  } else {
                    $head.hide();
                  }
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }]);

  return PositionController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new PositionController());

/***/ }),

/***/ "./src/js/controller/ProfileController.js":
/*!************************************************!*\
  !*** ./src/js/controller/ProfileController.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_profile_profile_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/profile/profile.html */ "./src/views/profile/profile.html");
/* harmony import */ var _views_profile_profile_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_profile_profile_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_Fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Fetch.js */ "./src/js/model/Fetch.js");





var ProfileController =
/*#__PURE__*/
function () {
  function ProfileController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ProfileController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ProfileController, [{
    key: "render",
    value: function render() {
      // let data = await Fetch.getprofileList();
      // let html = template.render(profilehtml, { list: data.result })
      $('#main-container').html('profile');
    }
  }]);

  return ProfileController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new ProfileController());

/***/ }),

/***/ "./src/js/controller/SearchController.js":
/*!***********************************************!*\
  !*** ./src/js/controller/SearchController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_Search_Search_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../views/Search/Search.html */ "./src/views/Search/Search.html");
/* harmony import */ var _views_Search_Search_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_views_Search_Search_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_Fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/Fetch.js */ "./src/js/model/Fetch.js");





var SearchController =
/*#__PURE__*/
function () {
  function SearchController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SearchController);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SearchController, [{
    key: "render",
    value: function render() {
      $('#main-container').html('search');
    }
  }]);

  return SearchController;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SearchController());

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/Router */ "./src/js/router/Router.js");




var Index =
/*#__PURE__*/
function () {
  function Index() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Index);

    this.initEvent();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Index, [{
    key: "initEvent",
    value: function initEvent() {
      $("#index_nav li").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var hash = $(this).attr('data-hash');
        _router_Router__WEBPACK_IMPORTED_MODULE_2__["default"].go(hash);
      });
    }
  }]);

  return Index;
}();

new Index();

/***/ }),

/***/ "./src/js/model/Fetch.js":
/*!*******************************!*\
  !*** ./src/js/model/Fetch.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Fetch =
/*#__PURE__*/
function () {
  function Fetch() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Fetch);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Fetch, [{
    key: "getPositionList",
    value: function getPositionList() {
      return new Promise(function (resolve, reject) {
        $.ajax({
          url: '/fetch/listmore.json?pageNo=1&pageSize=15',
          type: 'GET',
          success: function success(_data) {
            resolve(_data);
          },
          error: function error(_data) {
            reject(_data);
          }
        });
      });
    }
  }]);

  return Fetch;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Fetch());

/***/ }),

/***/ "./src/js/router/Router.js":
/*!*********************************!*\
  !*** ./src/js/router/Router.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controller_PositionController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/PositionController.js */ "./src/js/controller/PositionController.js");
/* harmony import */ var _controller_ProfileController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/ProfileController.js */ "./src/js/controller/ProfileController.js");
/* harmony import */ var _controller_SearchController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controller/SearchController.js */ "./src/js/controller/SearchController.js");
/* harmony import */ var _controller_ErrorController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller/ErrorController */ "./src/js/controller/ErrorController.js");






var MODE = 'hash';

var Router =
/*#__PURE__*/
function () {
  function Router() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Router);

    this.routes = {
      'position': _controller_PositionController_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      'search': _controller_SearchController_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      'profile': _controller_ProfileController_js__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
    this.initEvent();
    _controller_PositionController_js__WEBPACK_IMPORTED_MODULE_2__["default"].render();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Router, [{
    key: "loadView",
    value: function loadView(path) {
      if (this.routes[path]) {
        this.routes[path].render();
      } else {
        _controller_ErrorController__WEBPACK_IMPORTED_MODULE_5__["default"].render();
      }
    }
  }, {
    key: "go",
    value: function go(path) {
      if (MODE === 'hash') {
        location.hash = path;
      } else {
        history.pushState({
          path: path
        }, '', path);
        this.loadView(path);
      }
    }
  }, {
    key: "initEvent",
    value: function initEvent() {
      var _this = this;

      if (MODE === 'hash') {
        window.addEventListener('hashchange', function () {
          console.log(location.hash);
          var hash = location.hash.replace('#', '');

          _this.loadView(hash);
        });
      } else {
        window.addEventListener('popstate', function () {
          _this.loadView(history.state.path);
        });
      }
    }
  }]);

  return Router;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Router());

/***/ }),

/***/ "./src/views/Search/Search.html":
/*!**************************************!*\
  !*** ./src/views/Search/Search.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/views/error/error.html":
/*!************************************!*\
  !*** ./src/views/error/error.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>    page not found</div>"

/***/ }),

/***/ "./src/views/position/positionlist-item.html":
/*!***************************************************!*\
  !*** ./src/views/position/positionlist-item.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<% for(var i = 0; i < list.length; i++){ %><div class=\"item\">    <div class=\"logo\">        <img src=\"https://www.lgstatic.com/<%=list[i].companyLogo %>\" alt=\"\">    </div>    <div class=\"desc\">        <h2><%=list[i].companyName %></h2>        <p><%=list[i][\'positionName\'] %> [ <%=list[i][\'city\'] %> ]</p>        <p><%=list[i][\'createTime\'] %></p>    </div>    <div class=\"salary\">        <%=list[i][\'salary\'] %>    </div></div><% } %>"

/***/ }),

/***/ "./src/views/position/positionlist.html":
/*!**********************************************!*\
  !*** ./src/views/position/positionlist.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"position-wrapper\">    <div>        <div id=\"loading\">            <img src=\"../images/loading.gif\" alt=\"\">        </div>        <div class=\"head\">            <img src=\"../images/arrow.png\" alt=\"\">            下拉刷新        </div>        <div class=\"custom\">            <span>                10秒钟定制职位            </span>            <button>去登录</button>        </div>        <div id=\"list-container\">        </div>        <div class=\"foot\">            加载更多...        </div>    </div></div>"

/***/ }),

/***/ "./src/views/profile/profile.html":
/*!****************************************!*\
  !*** ./src/views/profile/profile.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiZXR0ZXItc2Nyb2xsL2NvcmUvZGlzdC9jb3JlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJldHRlci1zY3JvbGwvcHVsbC1kb3duL2Rpc3QvcHVsbC1kb3duLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJldHRlci1zY3JvbGwvcHVsbC11cC9kaXN0L3B1bGwtdXAuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnRyb2xsZXIvRXJyb3JDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9sbGVyL1Bvc2l0aW9uQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udHJvbGxlci9Qcm9maWxlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udHJvbGxlci9TZWFyY2hDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWwvRmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JvdXRlci9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1NlYXJjaC9TZWFyY2guaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZXJyb3IvZXJyb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9zaXRpb24vcG9zaXRpb25saXN0LWl0ZW0uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9zaXRpb24vcG9zaXRpb25saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZS5odG1sIl0sIm5hbWVzIjpbIlNlYXJjaENvbnRyb2xsZXIiLCIkIiwiaHRtbCIsIkVycm9yaHRtbCIsIkJTY3JvbGwiLCJ1c2UiLCJQdWxsdXAiLCJQdWxsRG93biIsIlBvc2l0aW9uQ29udHJvbGxlciIsIlByb21pc2UiLCJyZXNsb3ZlIiwicmVqZWN0Iiwic2hvdyIsImZldGNoIiwiZ2V0UG9zaXRpb25MaXN0IiwicnMiLCJ0ZW1wbGF0ZSIsInJlbmRlciIsIml0ZW1IdG1sIiwibGlzdCIsImNvbnRlbnQiLCJkYXRhIiwicGFnZSIsInJlc3VsdCIsImhpZGUiLCJwb3NpdGlvbmh0bWwiLCIkaGVhZCIsImdldGxpc3QiLCJzY3JvbGwiLCJzY3JvbGxZIiwicHJvYmVUeXBlIiwicHVsbERvd25SZWZyZXNoIiwidGhyZXNob2xkIiwib24iLCJjb25zb2xlIiwibG9nIiwiZmluaXNoUHVsbERvd24iLCJ5IiwiZmluZCIsImF0dHIiLCJQcm9maWxlQ29udHJvbGxlciIsIkluZGV4IiwiaW5pdEV2ZW50IiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwiaGFzaCIsIlJvdXRlciIsImdvIiwiRmV0Y2giLCJyZXNvbHZlIiwiYWpheCIsInVybCIsInR5cGUiLCJzdWNjZXNzIiwiX2RhdGEiLCJlcnJvciIsIk1PREUiLCJyb3V0ZXMiLCJwYXRoIiwiRXJyb3JDb250cm9sbGVyIiwibG9jYXRpb24iLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwibG9hZFZpZXciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVwbGFjZSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7Ozs7Ozs7O0FDaEJBLGlCQUFpQixtQkFBTyxDQUFDLDBFQUFxQjs7Ozs7Ozs7Ozs7OztBQ0E5QztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEY7QUFDNUYsU0FBUztBQUNULENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULENBQUM7O0FBRUQsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0JBQWdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4Qjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0M7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4Qjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNCQUFzQjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekM7QUFDQSwyRUFBMkUsYUFBYTtBQUN4RjtBQUNBO0FBQ0EsaUVBQWlFLGFBQWE7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHdCQUF3QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDbkMsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCO0FBQzNCLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEMsd0NBQXdDO0FBQ3hDLHFCQUFxQjtBQUNyQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUNBQW1DO0FBQ3RFLGlDQUFpQztBQUNqQyxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw2QkFBNkIsRUFBRTtBQUNwRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCw2QkFBNkIsRUFBRTtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLHNFQUFPLEVBQUM7QUFDSjs7Ozs7Ozs7Ozs7OztBQ3JoRW5CO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4Qjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQkFBc0I7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyx1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDeEl4QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0JBQXNCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWMscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7O0FDdkd0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcnRCQTs7SUFFTUEsZ0I7OztBQUNGLDhCQUFlO0FBQUE7QUFFZDs7Ozs2QkFDTztBQUNKQyxPQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkMsSUFBckIsQ0FBMEJDLDhEQUExQjtBQUNIOzs7Ozs7QUFFVSxtRUFBSUgsZ0JBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQUksMkRBQU8sQ0FBQ0MsR0FBUixDQUFZQyw4REFBWixFLENBQW9COztBQUNwQkYsMkRBQU8sQ0FBQ0MsR0FBUixDQUFZRSxnRUFBWixFLENBQXNCOztJQUVoQkMsa0I7Ozs7Ozs7Ozs4QkFFTTtBQUNSLGFBQU8sSUFBSUMsT0FBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0VBQVksaUJBQU9DLE9BQVAsRUFBZ0JDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQlYsbUJBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY1csSUFBZDtBQURpQjtBQUFBLHlCQUVGQyxvREFBSyxDQUFDQyxlQUFOLEVBRkU7O0FBQUE7QUFFYkMsb0JBRmE7QUFHYmIsc0JBSGEsR0FHTmMsUUFBUSxDQUFDQyxNQUFULENBQWdCQyw2RUFBaEIsRUFBMEI7QUFBRUMsd0JBQUksRUFBRUosRUFBRSxDQUFDSyxPQUFILENBQVdDLElBQVgsQ0FBZ0JDLElBQWhCLENBQXFCQztBQUE3QixtQkFBMUIsQ0FITTtBQUlqQnRCLG1CQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkMsSUFBckIsQ0FBMEJBLElBQTFCO0FBQ0FELG1CQUFDLENBQUMsVUFBRCxDQUFELENBQWN1QixJQUFkO0FBQ0FkLHlCQUFPOztBQU5VO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVFEOzs7Ozs7Ozs7Ozs7OztBQUdDVCxpQkFBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJDLElBQXJCLENBQTBCdUIsd0VBQTFCO0FBQ0lDLHFCLEdBQVF6QixDQUFDLENBQUMsdUJBQUQsQzs7dUJBQ1AsS0FBSzBCLE9BQUwsRTs7O0FBRU4scUJBQUtDLE1BQUwsR0FBYyxJQUFJeEIsMkRBQUosQ0FBWSxtQkFBWixFQUFpQztBQUM3Q3lCLHlCQUFPLEVBQUUsSUFEb0M7QUFFN0NDLDJCQUFTLEVBQUUsQ0FGa0M7QUFHN0NDLGlDQUFlLEVBQUU7QUFDZkMsNkJBQVMsRUFBRTtBQURJO0FBSDRCLGlCQUFqQyxDQUFkO0FBUUEscUJBQUtKLE1BQUwsQ0FBWUssRUFBWixDQUFlLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RkFBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM1QkMsaUNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFENEI7QUFBQSxpQ0FFdEIsS0FBSSxDQUFDUixPQUFMLEVBRnNCOztBQUFBO0FBRzVCLCtCQUFJLENBQUNDLE1BQUwsQ0FBWVEsY0FBWixHQUg0QixDQUdDOzs7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBOUI7QUFNQSxxQkFBS1IsTUFBTCxDQUFZSyxFQUFaLENBQWUsUUFBZixFQUF5QixZQUFZO0FBQ25DLHNCQUFJLEtBQUtJLENBQUwsR0FBUyxFQUFULElBQWUsS0FBS0EsQ0FBTCxHQUFTLEVBQTVCLEVBQWdDO0FBQzlCWCx5QkFBSyxDQUFDZCxJQUFOO0FBQ0QsbUJBRkQsTUFFTyxJQUFJLEtBQUt5QixDQUFMLEdBQVMsRUFBYixFQUFpQjtBQUN0QlgseUJBQUssQ0FBQ1ksSUFBTixDQUFXLEtBQVgsRUFBa0JDLElBQWxCLENBQXVCLEtBQXZCLEVBQThCLHNCQUE5QjtBQUNELG1CQUZNLE1BRUE7QUFDTGIseUJBQUssQ0FBQ0YsSUFBTjtBQUNEO0FBQ0YsaUJBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlXLG1FQUFJaEIsa0JBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7O0lBRU1nQyxpQjs7O0FBQ0YsK0JBQWU7QUFBQTtBQUVkOzs7OzZCQUNPO0FBQ0o7QUFDQTtBQUNBdkMsT0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJDLElBQXJCLENBQTBCLFNBQTFCO0FBQ0g7Ozs7OztBQUVVLG1FQUFJc0MsaUJBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7SUFFTXhDLGdCOzs7QUFDRiw4QkFBZTtBQUFBO0FBRWQ7Ozs7NkJBQ087QUFDSkMsT0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJDLElBQXJCLENBQTBCLFFBQTFCO0FBQ0g7Ozs7OztBQUVVLG1FQUFJRixnQkFBSixFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7O0lBRU15QyxLOzs7QUFFSixtQkFBYztBQUFBOztBQUNaLFNBQUtDLFNBQUw7QUFDRDs7OztnQ0FFVztBQUNWekMsT0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmdDLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQVk7QUFDekNoQyxTQUFDLENBQUMsSUFBRCxDQUFELENBQVEwQyxRQUFSLENBQWlCLFFBQWpCLEVBQTJCQyxRQUEzQixHQUFzQ0MsV0FBdEMsQ0FBa0QsUUFBbEQ7QUFDQSxZQUFJQyxJQUFJLEdBQUc3QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQyxJQUFSLENBQWEsV0FBYixDQUFYO0FBQ0FRLDhEQUFNLENBQUNDLEVBQVAsQ0FBVUYsSUFBVjtBQUNELE9BSkQ7QUFLRDs7Ozs7O0FBSUgsSUFBSUwsS0FBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xCTVEsSzs7O0FBQ0osbUJBQWM7QUFBQTtBQUViOzs7O3NDQUNpQjtBQUNoQixhQUFPLElBQUl4QyxPQUFKLENBQVksVUFBQ3lDLE9BQUQsRUFBVXZDLE1BQVYsRUFBcUI7QUFDdENWLFNBQUMsQ0FBQ2tELElBQUYsQ0FBTztBQUNMQyxhQUFHLEVBQUUsMkNBREE7QUFFTEMsY0FBSSxFQUFFLEtBRkQ7QUFHTEMsaUJBSEssbUJBR0dDLEtBSEgsRUFHVTtBQUNiTCxtQkFBTyxDQUFDSyxLQUFELENBQVA7QUFDRCxXQUxJO0FBTUxDLGVBTkssaUJBTUNELEtBTkQsRUFNUTtBQUNYNUMsa0JBQU0sQ0FBQzRDLEtBQUQsQ0FBTjtBQUNEO0FBUkksU0FBUDtBQVVELE9BWE0sQ0FBUDtBQVlEOzs7Ozs7QUFFWSxtRUFBSU4sS0FBSixFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTVEsSUFBSSxHQUFHLE1BQWI7O0lBRU1WLE07OztBQUNGLG9CQUFjO0FBQUE7O0FBQ1YsU0FBS1csTUFBTCxHQUFjO0FBQ1Ysa0JBQVlsRCx5RUFERjtBQUVWLGdCQUFVUix1RUFGQTtBQUdWLGlCQUFXd0Msd0VBQWlCQTtBQUhsQixLQUFkO0FBS0EsU0FBS0UsU0FBTDtBQUNBbEMsNkVBQWtCLENBQUNTLE1BQW5CO0FBQ0g7Ozs7NkJBRVEwQyxJLEVBQU07QUFDWCxVQUFJLEtBQUtELE1BQUwsQ0FBWUMsSUFBWixDQUFKLEVBQXVCO0FBQ25CLGFBQUtELE1BQUwsQ0FBWUMsSUFBWixFQUFrQjFDLE1BQWxCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gyQywyRUFBZSxDQUFDM0MsTUFBaEI7QUFDSDtBQUNKOzs7dUJBRUUwQyxJLEVBQU07QUFDTCxVQUFJRixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNqQkksZ0JBQVEsQ0FBQ2YsSUFBVCxHQUFnQmEsSUFBaEI7QUFDSCxPQUZELE1BRU87QUFDSEcsZUFBTyxDQUFDQyxTQUFSLENBQWtCO0FBQUVKLGNBQUksRUFBSkE7QUFBRixTQUFsQixFQUE0QixFQUE1QixFQUFnQ0EsSUFBaEM7QUFDQSxhQUFLSyxRQUFMLENBQWNMLElBQWQ7QUFDSDtBQUNKOzs7Z0NBRVc7QUFBQTs7QUFDUixVQUFJRixJQUFJLEtBQUssTUFBYixFQUFxQjtBQUNqQlEsY0FBTSxDQUFDQyxnQkFBUCxDQUF3QixZQUF4QixFQUFzQyxZQUFNO0FBQ3hDaEMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZMEIsUUFBUSxDQUFDZixJQUFyQjtBQUNBLGNBQUlBLElBQUksR0FBR2UsUUFBUSxDQUFDZixJQUFULENBQWNxQixPQUFkLENBQXNCLEdBQXRCLEVBQTJCLEVBQTNCLENBQVg7O0FBQ0EsZUFBSSxDQUFDSCxRQUFMLENBQWNsQixJQUFkO0FBQ0gsU0FKRDtBQUtILE9BTkQsTUFNTztBQUNIbUIsY0FBTSxDQUFDQyxnQkFBUCxDQUF3QixVQUF4QixFQUFvQyxZQUFNO0FBQ3RDLGVBQUksQ0FBQ0YsUUFBTCxDQUFjRixPQUFPLENBQUNNLEtBQVIsQ0FBY1QsSUFBNUI7QUFDSCxTQUZEO0FBR0g7QUFDSjs7Ozs7O0FBRVUsbUVBQUlaLE1BQUosRUFBZixFOzs7Ozs7Ozs7OztBQ2pEQSxtQjs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtQ0FBbUMsaUJBQWlCLE1BQU0sMlpBQTJaLEk7Ozs7Ozs7Ozs7O0FDQXJkLGtoQjs7Ozs7Ozs7Ozs7QUNBQSxtQiIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qIVxuICogYmV0dGVyLXNjcm9sbCAvIGNvcmVcbiAqIChjKSAyMDE2LTIwMTkgdXN0Ymh1YW5neWlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxudmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcblxuZnVuY3Rpb24gd2Fybihtc2cpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJbQlNjcm9sbCB3YXJuXTogXCIgKyBtc2cpO1xyXG59XG5cbi8vIHNzciBzdXBwb3J0XHJcbnZhciBpbkJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcclxudmFyIHVhID0gaW5Ccm93c2VyICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxudmFyIGlzV2VDaGF0RGV2VG9vbHMgPSB1YSAmJiAvd2VjaGF0ZGV2dG9vbHMvLnRlc3QodWEpO1xyXG52YXIgaXNBbmRyb2lkID0gdWEgJiYgdWEuaW5kZXhPZignYW5kcm9pZCcpID4gMDtcblxuZnVuY3Rpb24gZ2V0Tm93KCkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB3aW5kb3cucGVyZm9ybWFuY2Uubm93XHJcbiAgICAgICAgPyB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgKyB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydFxyXG4gICAgICAgIDogK25ldyBEYXRlKCk7XHJcbn1cclxuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCkge1xyXG4gICAgdmFyIHJlc3QgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcmVzdFtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBzb3VyY2UgPSByZXN0W2ldO1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcbmZ1bmN0aW9uIGlzVW5kZWYodikge1xyXG4gICAgcmV0dXJuIHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsO1xyXG59XG5cbnZhciBlbGVtZW50U3R5bGUgPSAoaW5Ccm93c2VyICYmXHJcbiAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZSk7XHJcbnZhciB2ZW5kb3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCFpbkJyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgdHJhbnNmb3JtTmFtZXMgPSB7XHJcbiAgICAgICAgd2Via2l0OiAnd2Via2l0VHJhbnNmb3JtJyxcclxuICAgICAgICBNb3o6ICdNb3pUcmFuc2Zvcm0nLFxyXG4gICAgICAgIE86ICdPVHJhbnNmb3JtJyxcclxuICAgICAgICBtczogJ21zVHJhbnNmb3JtJyxcclxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zZm9ybSdcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gdHJhbnNmb3JtTmFtZXMpIHtcclxuICAgICAgICBpZiAoZWxlbWVudFN0eWxlW3RyYW5zZm9ybU5hbWVzW2tleV1dICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0pKCk7XHJcbmZ1bmN0aW9uIHByZWZpeFN0eWxlKHN0eWxlKSB7XHJcbiAgICBpZiAodmVuZG9yID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgIH1cclxuICAgIGlmICh2ZW5kb3IgPT09ICdzdGFuZGFyZCcpIHtcclxuICAgICAgICBpZiAoc3R5bGUgPT09ICd0cmFuc2l0aW9uRW5kJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3RyYW5zaXRpb25lbmQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmVuZG9yICsgc3R5bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHlsZS5zdWJzdHIoMSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RWxlbWVudChlbCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKVxyXG4gICAgICAgIDogZWwpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEV2ZW50KGVsLCB0eXBlLCBmbiwgY2FwdHVyZSkge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwge1xyXG4gICAgICAgIHBhc3NpdmU6IGZhbHNlLFxyXG4gICAgICAgIGNhcHR1cmU6ICEhY2FwdHVyZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlRXZlbnQoZWwsIHR5cGUsIGZuLCBjYXB0dXJlKSB7XHJcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB7XHJcbiAgICAgICAgY2FwdHVyZTogISFjYXB0dXJlXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBvZmZzZXQoZWwpIHtcclxuICAgIHZhciBsZWZ0ID0gMDtcclxuICAgIHZhciB0b3AgPSAwO1xyXG4gICAgd2hpbGUgKGVsKSB7XHJcbiAgICAgICAgbGVmdCAtPSBlbC5vZmZzZXRMZWZ0O1xyXG4gICAgICAgIHRvcCAtPSBlbC5vZmZzZXRUb3A7XHJcbiAgICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgdG9wOiB0b3BcclxuICAgIH07XHJcbn1cclxudmFyIGNzc1ZlbmRvciA9IHZlbmRvciAmJiB2ZW5kb3IgIT09ICdzdGFuZGFyZCcgPyAnLScgKyB2ZW5kb3IudG9Mb3dlckNhc2UoKSArICctJyA6ICcnO1xyXG52YXIgdHJhbnNmb3JtID0gcHJlZml4U3R5bGUoJ3RyYW5zZm9ybScpO1xyXG52YXIgdHJhbnNpdGlvbiA9IHByZWZpeFN0eWxlKCd0cmFuc2l0aW9uJyk7XHJcbnZhciBoYXNQZXJzcGVjdGl2ZSA9IGluQnJvd3NlciAmJiBwcmVmaXhTdHlsZSgncGVyc3BlY3RpdmUnKSBpbiBlbGVtZW50U3R5bGU7XHJcbi8vIGZpeCBpc3N1ZSAjMzYxXHJcbnZhciBoYXNUb3VjaCA9IGluQnJvd3NlciAmJiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IGlzV2VDaGF0RGV2VG9vbHMpO1xyXG52YXIgaGFzVHJhbnNpdGlvbiA9IGluQnJvd3NlciAmJiB0cmFuc2l0aW9uIGluIGVsZW1lbnRTdHlsZTtcclxudmFyIHN0eWxlID0ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uLFxyXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBwcmVmaXhTdHlsZSgndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJyksXHJcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IHByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRHVyYXRpb24nKSxcclxuICAgIHRyYW5zaXRpb25EZWxheTogcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25EZWxheScpLFxyXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBwcmVmaXhTdHlsZSgndHJhbnNmb3JtT3JpZ2luJyksXHJcbiAgICB0cmFuc2l0aW9uRW5kOiBwcmVmaXhTdHlsZSgndHJhbnNpdGlvbkVuZCcpXHJcbn07XHJcbnZhciBldmVudFR5cGVNYXAgPSB7XHJcbiAgICB0b3VjaHN0YXJ0OiAxLFxyXG4gICAgdG91Y2htb3ZlOiAxLFxyXG4gICAgdG91Y2hlbmQ6IDEsXHJcbiAgICBtb3VzZWRvd246IDIsXHJcbiAgICBtb3VzZW1vdmU6IDIsXHJcbiAgICBtb3VzZXVwOiAyXHJcbn07XHJcbmZ1bmN0aW9uIGdldFJlY3QoZWwpIHtcclxuICAgIGlmIChlbCBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXHJcbiAgICAgICAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvcDogZWwub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiBlbC5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgICB3aWR0aDogZWwub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogZWwub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbkZuKGVsLCBleGNlcHRpb25zKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIGV4Y2VwdGlvbnMpIHtcclxuICAgICAgICBpZiAoZXhjZXB0aW9uc1tpXS50ZXN0KGVsW2ldKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxudmFyIHRhZ0V4Y2VwdGlvbkZuID0gcHJldmVudERlZmF1bHRFeGNlcHRpb25GbjtcclxuZnVuY3Rpb24gdGFwKGUsIGV2ZW50TmFtZSkge1xyXG4gICAgdmFyIGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgICBldi5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcclxuICAgIGV2LnBhZ2VYID0gZS5wYWdlWDtcclxuICAgIGV2LnBhZ2VZID0gZS5wYWdlWTtcclxuICAgIGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGNsaWNrKGUsIGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQgPT09IHZvaWQgMCkgeyBldmVudCA9ICdjbGljayc7IH1cclxuICAgIHZhciBldmVudFNvdXJjZTtcclxuICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZXVwJykge1xyXG4gICAgICAgIGV2ZW50U291cmNlID0gZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGUudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGNhbmNlbCcpIHtcclxuICAgICAgICBldmVudFNvdXJjZSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICB9XHJcbiAgICB2YXIgcG9zU3JjID0ge307XHJcbiAgICBpZiAoZXZlbnRTb3VyY2UpIHtcclxuICAgICAgICBwb3NTcmMuc2NyZWVuWCA9IGV2ZW50U291cmNlLnNjcmVlblggfHwgMDtcclxuICAgICAgICBwb3NTcmMuc2NyZWVuWSA9IGV2ZW50U291cmNlLnNjcmVlblkgfHwgMDtcclxuICAgICAgICBwb3NTcmMuY2xpZW50WCA9IGV2ZW50U291cmNlLmNsaWVudFggfHwgMDtcclxuICAgICAgICBwb3NTcmMuY2xpZW50WSA9IGV2ZW50U291cmNlLmNsaWVudFkgfHwgMDtcclxuICAgIH1cclxuICAgIHZhciBldjtcclxuICAgIHZhciBidWJibGVzID0gdHJ1ZTtcclxuICAgIHZhciBjYW5jZWxhYmxlID0gdHJ1ZTtcclxuICAgIGlmICh0eXBlb2YgTW91c2VFdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBldiA9IG5ldyBNb3VzZUV2ZW50KGV2ZW50LCBleHRlbmQoe1xyXG4gICAgICAgICAgICAgICAgYnViYmxlczogYnViYmxlcyxcclxuICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IGNhbmNlbGFibGVcclxuICAgICAgICAgICAgfSwgcG9zU3JjKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY3JlYXRlRXZlbnQoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KCkge1xyXG4gICAgICAgIGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgICAgICAgZXYuaW5pdEV2ZW50KGV2ZW50LCBidWJibGVzLCBjYW5jZWxhYmxlKTtcclxuICAgICAgICBleHRlbmQoZXYsIHBvc1NyYyk7XHJcbiAgICB9XHJcbiAgICAvLyBmb3J3YXJkZWRUb3VjaEV2ZW50IHNldCB0byB0cnVlIGluIGNhc2Ugb2YgdGhlIGNvbmZsaWN0IHdpdGggZmFzdGNsaWNrXHJcbiAgICBldi5mb3J3YXJkZWRUb3VjaEV2ZW50ID0gdHJ1ZTtcclxuICAgIGV2Ll9jb25zdHJ1Y3RlZCA9IHRydWU7XHJcbiAgICBlLnRhcmdldC5kaXNwYXRjaEV2ZW50KGV2KTtcclxufVxyXG5mdW5jdGlvbiBkYmxjbGljayhlKSB7XHJcbiAgICBjbGljayhlLCAnZGJsY2xpY2snKTtcclxufVxuXG52YXIgZWFzZSA9IHtcclxuICAgIC8vIGVhc2VPdXRRdWludFxyXG4gICAgc3dpcGU6IHtcclxuICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScsXHJcbiAgICAgICAgZm46IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxICsgLS10ICogdCAqIHQgKiB0ICogdDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gZWFzZU91dFF1YXJkXHJcbiAgICBzd2lwZUJvdW5jZToge1xyXG4gICAgICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpJyxcclxuICAgICAgICBmbjogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQgKiAoMiAtIHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBlYXNlT3V0UXVhcnRcclxuICAgIGJvdW5jZToge1xyXG4gICAgICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsXHJcbiAgICAgICAgZm46IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC0gLS10ICogdCAqIHQgKiB0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxudmFyIERFRkFVTFRfSU5URVJWQUwgPSAxMDAgLyA2MDtcclxudmFyIHdpbmRvd0NvbXBhdCA9IGluQnJvd3NlciAmJiB3aW5kb3c7XHJcbmZ1bmN0aW9uIG5vb3AoKSB7IH1cclxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIWluQnJvd3Nlcikge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIHJldHVybiBub29wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICh3aW5kb3dDb21wYXQucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvd0NvbXBhdC5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIC8vIGlmIGFsbCBlbHNlIGZhaWxzLCB1c2Ugc2V0VGltZW91dFxyXG4gICAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIChjYWxsYmFjay5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMKSAvIDIpOyAvLyBtYWtlIGludGVydmFsIGFzIHByZWNpc2UgYXMgcG9zc2libGUuXHJcbiAgICAgICAgfSk7XHJcbn0pKCk7XHJcbnZhciBjYW5jZWxBbmltYXRpb25GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIWluQnJvd3Nlcikge1xyXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xyXG4gICAgICAgIHJldHVybiBub29wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICh3aW5kb3dDb21wYXQuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQub0NhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaWQpO1xyXG4gICAgICAgIH0pO1xyXG59KSgpO1xuXG52YXIgbm9vcCQxID0gZnVuY3Rpb24gKHZhbCkgeyB9O1xyXG52YXIgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uID0ge1xyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogbm9vcCQxLFxyXG4gICAgc2V0OiBub29wJDFcclxufTtcclxudmFyIGdldFByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5KSB7XHJcbiAgICB2YXIga2V5cyA9IGtleS5zcGxpdCgnLicpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIG9iaiA9IG9ialtrZXlzW2ldXTtcclxuICAgICAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgIW9iailcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGxhc3RLZXkgPSBrZXlzLnBvcCgpO1xyXG4gICAgaWYgKHR5cGVvZiBvYmpbbGFzdEtleV0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqW2xhc3RLZXldLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialtsYXN0S2V5XTtcclxuICAgIH1cclxufTtcclxudmFyIHNldFByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkge1xyXG4gICAgdmFyIGtleXMgPSBrZXkuc3BsaXQoJy4nKTtcclxuICAgIHZhciB0ZW1wO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIHRlbXAgPSBrZXlzW2ldO1xyXG4gICAgICAgIGlmICghb2JqW3RlbXBdKVxyXG4gICAgICAgICAgICBvYmpbdGVtcF0gPSB7fTtcclxuICAgICAgICBvYmogPSBvYmpbdGVtcF07XHJcbiAgICB9XHJcbiAgICBvYmpba2V5cy5wb3AoKV0gPSB2YWx1ZTtcclxufTtcclxuZnVuY3Rpb24gcHJvcGVydGllc1Byb3h5KHRhcmdldCwgc291cmNlS2V5LCBrZXkpIHtcclxuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBmdW5jdGlvbiBwcm94eUdldHRlcigpIHtcclxuICAgICAgICByZXR1cm4gZ2V0UHJvcGVydHkodGhpcywgc291cmNlS2V5KTtcclxuICAgIH07XHJcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gcHJveHlTZXR0ZXIodmFsKSB7XHJcbiAgICAgICAgc2V0UHJvcGVydHkodGhpcywgc291cmNlS2V5LCB2YWwpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uKTtcclxufVxuXG52YXIgRXZlbnRFbWl0dGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnRFbWl0dGVyKG5hbWVzKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLmV2ZW50VHlwZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyVHlwZShuYW1lcyk7XHJcbiAgICB9XHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKHR5cGUsIGZuLCBjb250ZXh0KSB7XHJcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0gdGhpczsgfVxyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5UeXBlcyh0eXBlKTtcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRzW3R5cGVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW3R5cGVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXZlbnRzW3R5cGVdLnB1c2goW2ZuLCBjb250ZXh0XSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gKHR5cGUsIGZuLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB0aGlzOyB9XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJblR5cGVzKHR5cGUpO1xyXG4gICAgICAgIHZhciBtYWdpYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5vZmYodHlwZSwgbWFnaWMpO1xyXG4gICAgICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1hZ2ljLmZuID0gZm47XHJcbiAgICAgICAgdGhpcy5vbih0eXBlLCBtYWdpYyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAodHlwZSwgZm4pIHtcclxuICAgICAgICBpZiAoIXR5cGUgJiYgIWZuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jaGVja0luVHlwZXModHlwZSk7XHJcbiAgICAgICAgICAgIGlmICghZm4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzW3R5cGVdID0gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudHNbdHlwZV07XHJcbiAgICAgICAgICAgIGlmICghZXZlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY291bnQgPSBldmVudHMubGVuZ3RoO1xyXG4gICAgICAgICAgICB3aGlsZSAoY291bnQtLSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50c1tjb3VudF1bMF0gPT09IGZuIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKGV2ZW50c1tjb3VudF1bMF0gJiYgZXZlbnRzW2NvdW50XVswXS5mbiA9PT0gZm4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnNwbGljZShjb3VudCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jaGVja0luVHlwZXModHlwZSk7XHJcbiAgICAgICAgdmFyIGV2ZW50cyA9IHRoaXMuZXZlbnRzW3R5cGVdO1xyXG4gICAgICAgIGlmICghZXZlbnRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxlbiA9IGV2ZW50cy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGV2ZW50c0NvcHkgPSBldmVudHMuc2xpY2UoKTtcclxuICAgICAgICB2YXIgcmV0O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGV2ZW50XzEgPSBldmVudHNDb3B5W2ldO1xyXG4gICAgICAgICAgICB2YXIgZm4gPSBldmVudF8xWzBdLCBjb250ZXh0ID0gZXZlbnRfMVsxXTtcclxuICAgICAgICAgICAgaWYgKGZuKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgPSBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVnaXN0ZXJUeXBlID0gZnVuY3Rpb24gKG5hbWVzKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmV2ZW50VHlwZXNbdHlwZV0gPSB0eXBlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuZXZlbnRUeXBlcyA9IHt9O1xyXG4gICAgfTtcclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2NoZWNrSW5UeXBlcyA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgdmFyIHR5cGVzID0gdGhpcy5ldmVudFR5cGVzO1xyXG4gICAgICAgIHZhciBpblR5cGVzID0gdHlwZXNbdHlwZV0gPT09IHR5cGU7XHJcbiAgICAgICAgaWYgKCFpblR5cGVzKSB7XHJcbiAgICAgICAgICAgIHdhcm4oXCJFdmVudEVtaXR0ZXIgaGFzIHVzZWQgdW5rbm93biBldmVudCB0eXBlOiBcXFwiXCIgKyB0eXBlICsgXCJcXFwiLCBzaG91bGQgYmUgb25lb2YgW1wiICsgT2JqZWN0LmtleXModHlwZXMpICsgXCJdXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyO1xyXG59KCkpO1xuXG52YXIgRGlyZWN0aW9uO1xyXG4oZnVuY3Rpb24gKERpcmVjdGlvbikge1xyXG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIlBvc2l0aXZlXCJdID0gMV0gPSBcIlBvc2l0aXZlXCI7XHJcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiTmVnYXRpdmVcIl0gPSAtMV0gPSBcIk5lZ2F0aXZlXCI7XHJcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiRGVmYXVsdFwiXSA9IDBdID0gXCJEZWZhdWx0XCI7XHJcbn0pKERpcmVjdGlvbiB8fCAoRGlyZWN0aW9uID0ge30pKTtcblxudmFyIERpcmVjdGlvbkxvY2s7XHJcbihmdW5jdGlvbiAoRGlyZWN0aW9uTG9jaykge1xyXG4gICAgRGlyZWN0aW9uTG9ja1tcIkRlZmF1bHRcIl0gPSBcIlwiO1xyXG4gICAgRGlyZWN0aW9uTG9ja1tcIkhvcml6b250YWxcIl0gPSBcImhvcml6b250YWxcIjtcclxuICAgIERpcmVjdGlvbkxvY2tbXCJWZXJ0aWNhbFwiXSA9IFwidmVydGljYWxcIjtcclxuICAgIERpcmVjdGlvbkxvY2tbXCJOb25lXCJdID0gXCJub25lXCI7XHJcbn0pKERpcmVjdGlvbkxvY2sgfHwgKERpcmVjdGlvbkxvY2sgPSB7fSkpO1xuXG52YXIgRXZlbnRQYXNzdGhyb3VnaDtcclxuKGZ1bmN0aW9uIChFdmVudFBhc3N0aHJvdWdoKSB7XHJcbiAgICBFdmVudFBhc3N0aHJvdWdoW1wiTm9uZVwiXSA9IFwiXCI7XHJcbiAgICBFdmVudFBhc3N0aHJvdWdoW1wiSG9yaXpvbnRhbFwiXSA9IFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgRXZlbnRQYXNzdGhyb3VnaFtcIlZlcnRpY2FsXCJdID0gXCJ2ZXJ0aWNhbFwiO1xyXG59KShFdmVudFBhc3N0aHJvdWdoIHx8IChFdmVudFBhc3N0aHJvdWdoID0ge30pKTtcblxudmFyIEV2ZW50VHlwZTtcclxuKGZ1bmN0aW9uIChFdmVudFR5cGUpIHtcclxuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJUb3VjaFwiXSA9IDFdID0gXCJUb3VjaFwiO1xyXG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIk1vdXNlXCJdID0gMl0gPSBcIk1vdXNlXCI7XHJcbn0pKEV2ZW50VHlwZSB8fCAoRXZlbnRUeXBlID0ge30pKTtcblxudmFyIE1vdXNlQnV0dG9uO1xyXG4oZnVuY3Rpb24gKE1vdXNlQnV0dG9uKSB7XHJcbiAgICBNb3VzZUJ1dHRvbltNb3VzZUJ1dHRvbltcIkxlZnRcIl0gPSAwXSA9IFwiTGVmdFwiO1xyXG4gICAgTW91c2VCdXR0b25bTW91c2VCdXR0b25bXCJNaWRkbGVcIl0gPSAxXSA9IFwiTWlkZGxlXCI7XHJcbiAgICBNb3VzZUJ1dHRvbltNb3VzZUJ1dHRvbltcIlJpZ2h0XCJdID0gMl0gPSBcIlJpZ2h0XCI7XHJcbn0pKE1vdXNlQnV0dG9uIHx8IChNb3VzZUJ1dHRvbiA9IHt9KSk7XG5cbnZhciBQcm9iZTtcclxuKGZ1bmN0aW9uIChQcm9iZSkge1xyXG4gICAgUHJvYmVbUHJvYmVbXCJEZWZhdWx0XCJdID0gMF0gPSBcIkRlZmF1bHRcIjtcclxuICAgIFByb2JlW1Byb2JlW1wiVGhyb3R0bGVcIl0gPSAxXSA9IFwiVGhyb3R0bGVcIjtcclxuICAgIFByb2JlW1Byb2JlW1wiTm9ybWFsXCJdID0gMl0gPSBcIk5vcm1hbFwiO1xyXG4gICAgUHJvYmVbUHJvYmVbXCJSZWFsdGltZVwiXSA9IDNdID0gXCJSZWFsdGltZVwiO1xyXG59KShQcm9iZSB8fCAoUHJvYmUgPSB7fSkpO1xuXG52YXIgT3B0aW9ucyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFggPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRZID0gMDtcclxuICAgICAgICB0aGlzLnNjcm9sbFggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjcm9sbFkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZnJlZVNjcm9sbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCA9IDU7XHJcbiAgICAgICAgdGhpcy5ldmVudFBhc3N0aHJvdWdoID0gRXZlbnRQYXNzdGhyb3VnaC5Ob25lO1xyXG4gICAgICAgIHRoaXMuY2xpY2sgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRibGNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50YXAgPSAnJztcclxuICAgICAgICB0aGlzLmJvdW5jZSA9IHtcclxuICAgICAgICAgICAgdG9wOiB0cnVlLFxyXG4gICAgICAgICAgICBib3R0b206IHRydWUsXHJcbiAgICAgICAgICAgIGxlZnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHJpZ2h0OiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmJvdW5jZVRpbWUgPSA4MDA7XHJcbiAgICAgICAgdGhpcy5tb21lbnR1bSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tb21lbnR1bUxpbWl0VGltZSA9IDMwMDtcclxuICAgICAgICB0aGlzLm1vbWVudHVtTGltaXREaXN0YW5jZSA9IDE1O1xyXG4gICAgICAgIHRoaXMuc3dpcGVUaW1lID0gMjUwMDtcclxuICAgICAgICB0aGlzLnN3aXBlQm91bmNlVGltZSA9IDUwMDtcclxuICAgICAgICB0aGlzLmRlY2VsZXJhdGlvbiA9IDAuMDAxNTtcclxuICAgICAgICB0aGlzLmZsaWNrTGltaXRUaW1lID0gMjAwO1xyXG4gICAgICAgIHRoaXMuZmxpY2tMaW1pdERpc3RhbmNlID0gMTAwO1xyXG4gICAgICAgIHRoaXMucmVzaXplUG9sbGluZyA9IDYwO1xyXG4gICAgICAgIHRoaXMucHJvYmVUeXBlID0gUHJvYmUuRGVmYXVsdDtcclxuICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucHJldmVudERlZmF1bHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucHJldmVudERlZmF1bHRFeGNlcHRpb24gPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6IC9eKElOUFVUfFRFWFRBUkVBfEJVVFRPTnxTRUxFQ1R8QVVESU8pJC9cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudGFnRXhjZXB0aW9uID0ge1xyXG4gICAgICAgICAgICB0YWdOYW1lOiAvXlRFWFRBUkVBJC9cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuSFdDb21wb3NpdGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51c2VUcmFuc2l0aW9uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJpbmRUb1dyYXBwZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpc2FibGVNb3VzZSA9IGhhc1RvdWNoO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVRvdWNoID0gIWhhc1RvdWNoO1xyXG4gICAgICAgIHRoaXMuYXV0b0JsdXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgT3B0aW9ucy5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIGlmICghb3B0aW9ucylcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpc1trZXldID0gb3B0aW9uc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBPcHRpb25zLnByb3RvdHlwZS5wcm9jZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlWiA9XHJcbiAgICAgICAgICAgIHRoaXMuSFdDb21wb3NpdGluZyAmJiBoYXNQZXJzcGVjdGl2ZSA/ICcgdHJhbnNsYXRlWigwKScgOiAnJztcclxuICAgICAgICB0aGlzLnVzZVRyYW5zaXRpb24gPSB0aGlzLnVzZVRyYW5zaXRpb24gJiYgaGFzVHJhbnNpdGlvbjtcclxuICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0ID0gIXRoaXMuZXZlbnRQYXNzdGhyb3VnaCAmJiB0aGlzLnByZXZlbnREZWZhdWx0O1xyXG4gICAgICAgIC8vIElmIHlvdSB3YW50IGV2ZW50UGFzc3Rocm91Z2ggSSBoYXZlIHRvIGxvY2sgb25lIG9mIHRoZSBheGVzXHJcbiAgICAgICAgdGhpcy5zY3JvbGxYID1cclxuICAgICAgICAgICAgdGhpcy5ldmVudFBhc3N0aHJvdWdoID09PSBFdmVudFBhc3N0aHJvdWdoLkhvcml6b250YWxcclxuICAgICAgICAgICAgICAgID8gZmFsc2VcclxuICAgICAgICAgICAgICAgIDogdGhpcy5zY3JvbGxYO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsWSA9XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRQYXNzdGhyb3VnaCA9PT0gRXZlbnRQYXNzdGhyb3VnaC5WZXJ0aWNhbCA/IGZhbHNlIDogdGhpcy5zY3JvbGxZO1xyXG4gICAgICAgIC8vIFdpdGggZXZlbnRQYXNzdGhyb3VnaCB3ZSBhbHNvIG5lZWQgbG9ja0RpcmVjdGlvbiBtZWNoYW5pc21cclxuICAgICAgICB0aGlzLmZyZWVTY3JvbGwgPSB0aGlzLmZyZWVTY3JvbGwgJiYgIXRoaXMuZXZlbnRQYXNzdGhyb3VnaDtcclxuICAgICAgICAvLyBmb3JjZSB0cnVlIHdoZW4gZnJlZVNjcm9sbCBpcyB0cnVlXHJcbiAgICAgICAgdGhpcy5zY3JvbGxYID0gdGhpcy5mcmVlU2Nyb2xsID8gdHJ1ZSA6IHRoaXMuc2Nyb2xsWDtcclxuICAgICAgICB0aGlzLnNjcm9sbFkgPSB0aGlzLmZyZWVTY3JvbGwgPyB0cnVlIDogdGhpcy5zY3JvbGxZO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCA9IHRoaXMuZXZlbnRQYXNzdGhyb3VnaFxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9wdGlvbnM7XHJcbn0oKSk7XG5cbnZhciBFdmVudFJlZ2lzdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnRSZWdpc3Rlcih3cmFwcGVyLCBldmVudHMpIHtcclxuICAgICAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xyXG4gICAgICAgIHRoaXMuYWRkRE9NRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgICBFdmVudFJlZ2lzdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRE9NRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcclxuICAgIH07XHJcbiAgICBFdmVudFJlZ2lzdGVyLnByb3RvdHlwZS5hZGRET01FdmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVET01FdmVudHMoYWRkRXZlbnQpO1xyXG4gICAgfTtcclxuICAgIEV2ZW50UmVnaXN0ZXIucHJvdG90eXBlLnJlbW92ZURPTUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZURPTUV2ZW50cyhyZW1vdmVFdmVudCk7XHJcbiAgICB9O1xyXG4gICAgRXZlbnRSZWdpc3Rlci5wcm90b3R5cGUuaGFuZGxlRE9NRXZlbnRzID0gZnVuY3Rpb24gKGV2ZW50T3BlcmF0aW9uKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMud3JhcHBlcjtcclxuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudE9wZXJhdGlvbih3cmFwcGVyLCBldmVudC5uYW1lLCBfdGhpcywgISFldmVudC5jYXB0dXJlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBFdmVudFJlZ2lzdGVyLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50VHlwZSA9IGUudHlwZTtcclxuICAgICAgICB0aGlzLmV2ZW50cy5zb21lKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQubmFtZSA9PT0gZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5oYW5kbGVyKGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFdmVudFJlZ2lzdGVyO1xyXG59KCkpO1xuXG52YXIgQWN0aW9uc0hhbmRsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBY3Rpb25zSGFuZGxlcih3cmFwcGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gd3JhcHBlcjtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgRXZlbnRFbWl0dGVyKFtcclxuICAgICAgICAgICAgJ2JlZm9yZVN0YXJ0JyxcclxuICAgICAgICAgICAgJ3N0YXJ0JyxcclxuICAgICAgICAgICAgJ21vdmUnLFxyXG4gICAgICAgICAgICAnZW5kJyxcclxuICAgICAgICAgICAgJ2NsaWNrJ1xyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRE9NRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUuaGFuZGxlRE9NRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMub3B0aW9ucywgYmluZFRvV3JhcHBlciA9IF9hLmJpbmRUb1dyYXBwZXIsIGRpc2FibGVNb3VzZSA9IF9hLmRpc2FibGVNb3VzZSwgZGlzYWJsZVRvdWNoID0gX2EuZGlzYWJsZVRvdWNoLCBjbGljayA9IF9hLmNsaWNrO1xyXG4gICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy53cmFwcGVyO1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBiaW5kVG9XcmFwcGVyID8gd3JhcHBlciA6IHdpbmRvdztcclxuICAgICAgICB2YXIgd3JhcHBlckV2ZW50cyA9IFtdO1xyXG4gICAgICAgIHZhciB0YXJnZXRFdmVudHMgPSBbXTtcclxuICAgICAgICB2YXIgc2hvdWxkUmVnaXNlclRvdWNoID0gaGFzVG91Y2ggJiYgIWRpc2FibGVUb3VjaDtcclxuICAgICAgICB2YXIgc2hvbGRSZWdpc3Rlck1vdXNlID0gIWRpc2FibGVNb3VzZTtcclxuICAgICAgICBpZiAoY2xpY2spIHtcclxuICAgICAgICAgICAgd3JhcHBlckV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdjbGljaycsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLmNsaWNrLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBjYXB0dXJlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvdWxkUmVnaXNlclRvdWNoKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXJFdmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndG91Y2hzdGFydCcsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLnN0YXJ0LmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRhcmdldEV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd0b3VjaG1vdmUnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5tb3ZlLmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvdWNoZW5kJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuZW5kLmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvdWNoY2FuY2VsJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuZW5kLmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG9sZFJlZ2lzdGVyTW91c2UpIHtcclxuICAgICAgICAgICAgd3JhcHBlckV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZWRvd24nLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5zdGFydC5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0YXJnZXRFdmVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnbW91c2Vtb3ZlJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMubW92ZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZXVwJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuZW5kLmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JhcHBlckV2ZW50UmVnaXN0ZXIgPSBuZXcgRXZlbnRSZWdpc3Rlcih3cmFwcGVyLCB3cmFwcGVyRXZlbnRzKTtcclxuICAgICAgICB0aGlzLnRhcmdldEV2ZW50UmVnaXN0ZXIgPSBuZXcgRXZlbnRSZWdpc3Rlcih0YXJnZXQsIHRhcmdldEV2ZW50cyk7XHJcbiAgICB9O1xyXG4gICAgQWN0aW9uc0hhbmRsZXIucHJvdG90eXBlLmJlZm9yZUhhbmRsZXIgPSBmdW5jdGlvbiAoZSwgdHlwZSkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMub3B0aW9ucywgcHJldmVudERlZmF1bHQgPSBfYS5wcmV2ZW50RGVmYXVsdCwgc3RvcFByb3BhZ2F0aW9uID0gX2Euc3RvcFByb3BhZ2F0aW9uLCBwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbiA9IF9hLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uO1xyXG4gICAgICAgIHZhciBwcmV2ZW50RGVmYXVsdENvbmRpdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHByZXZlbnREZWZhdWx0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXByZXZlbnREZWZhdWx0RXhjZXB0aW9uRm4oZS50YXJnZXQsIHByZXZlbnREZWZhdWx0RXhjZXB0aW9uKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChwcmV2ZW50RGVmYXVsdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbkZuKGUudGFyZ2V0LCBwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChwcmV2ZW50RGVmYXVsdENvbmRpdGlvbnNbdHlwZV0oKSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQWN0aW9uc0hhbmRsZXIucHJvdG90eXBlLnNldEluaXRpYXRlZCA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IHZvaWQgMCkgeyB0eXBlID0gMDsgfVxyXG4gICAgICAgIHRoaXMuaW5pdGlhdGVkID0gdHlwZTtcclxuICAgIH07XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBfZXZlbnRUeXBlID0gZXZlbnRUeXBlTWFwW2UudHlwZV07XHJcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhdGVkICYmIHRoaXMuaW5pdGlhdGVkICE9PSBfZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRJbml0aWF0ZWQoX2V2ZW50VHlwZSk7XHJcbiAgICAgICAgLy8gaWYgdGV4dGFyZWEgb3Igb3RoZXIgaHRtbCB0YWdzIGluIG9wdGlvbnMudGFnRXhjZXB0aW9uIGlzIG1hbmlwdWxhdGVkXHJcbiAgICAgICAgLy8gZG8gbm90IG1ha2UgYnMgc2Nyb2xsXHJcbiAgICAgICAgaWYgKHRhZ0V4Y2VwdGlvbkZuKGUudGFyZ2V0LCB0aGlzLm9wdGlvbnMudGFnRXhjZXB0aW9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEluaXRpYXRlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG5vIG1vdXNlIGxlZnQgYnV0dG9uXHJcbiAgICAgICAgaWYgKF9ldmVudFR5cGUgPT09IEV2ZW50VHlwZS5Nb3VzZSAmJiBlLmJ1dHRvbiAhPT0gTW91c2VCdXR0b24uTGVmdClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZVN0YXJ0LCBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmVmb3JlSGFuZGxlcihlLCAnc3RhcnQnKTtcclxuICAgICAgICB2YXIgcG9pbnQgPSAoZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZSk7XHJcbiAgICAgICAgdGhpcy5wb2ludFggPSBwb2ludC5wYWdlWDtcclxuICAgICAgICB0aGlzLnBvaW50WSA9IHBvaW50LnBhZ2VZO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc3RhcnQsIGUpO1xyXG4gICAgfTtcclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZXZlbnRUeXBlTWFwW2UudHlwZV0gIT09IHRoaXMuaW5pdGlhdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iZWZvcmVIYW5kbGVyKGUsICdtb3ZlJyk7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gKGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGUpO1xyXG4gICAgICAgIHZhciBkZWx0YVggPSBwb2ludC5wYWdlWCAtIHRoaXMucG9pbnRYO1xyXG4gICAgICAgIHZhciBkZWx0YVkgPSBwb2ludC5wYWdlWSAtIHRoaXMucG9pbnRZO1xyXG4gICAgICAgIHRoaXMucG9pbnRYID0gcG9pbnQucGFnZVg7XHJcbiAgICAgICAgdGhpcy5wb2ludFkgPSBwb2ludC5wYWdlWTtcclxuICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5tb3ZlLCB7XHJcbiAgICAgICAgICAgIGRlbHRhWDogZGVsdGFYLFxyXG4gICAgICAgICAgICBkZWx0YVk6IGRlbHRhWSxcclxuICAgICAgICAgICAgZTogZVxyXG4gICAgICAgIH0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYXV0byBlbmQgd2hlbiBvdXQgb2Ygd3JhcHBlclxyXG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHxcclxuICAgICAgICAgICAgd2luZG93LnBhZ2VYT2Zmc2V0IHx8XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcclxuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fFxyXG4gICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXQgfHxcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICAgICAgdmFyIHBYID0gdGhpcy5wb2ludFggLSBzY3JvbGxMZWZ0O1xyXG4gICAgICAgIHZhciBwWSA9IHRoaXMucG9pbnRZIC0gc2Nyb2xsVG9wO1xyXG4gICAgICAgIGlmIChwWCA+XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdERpc3RhbmNlIHx8XHJcbiAgICAgICAgICAgIHBYIDwgdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXREaXN0YW5jZSB8fFxyXG4gICAgICAgICAgICBwWSA8IHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0RGlzdGFuY2UgfHxcclxuICAgICAgICAgICAgcFkgPlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXREaXN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVuZChlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgQWN0aW9uc0hhbmRsZXIucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50VHlwZU1hcFtlLnR5cGVdICE9PSB0aGlzLmluaXRpYXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0SW5pdGlhdGVkKCk7XHJcbiAgICAgICAgdGhpcy5iZWZvcmVIYW5kbGVyKGUsICdlbmQnKTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgZSk7XHJcbiAgICB9O1xyXG4gICAgQWN0aW9uc0hhbmRsZXIucHJvdG90eXBlLmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmNsaWNrLCBlKTtcclxuICAgIH07XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLndyYXBwZXJFdmVudFJlZ2lzdGVyLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnRhcmdldEV2ZW50UmVnaXN0ZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuaG9va3MuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBY3Rpb25zSGFuZGxlcjtcclxufSgpKTtcblxudmFyIHRyYW5zbGF0ZXJNZXRhRGF0YSA9IHtcclxuICAgIHg6IFsndHJhbnNsYXRlWCcsICdweCddLFxyXG4gICAgeTogWyd0cmFuc2xhdGVZJywgJ3B4J11cclxufTtcclxudmFyIFRyYW5zbGF0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVyKGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBjb250ZW50LnN0eWxlO1xyXG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgRXZlbnRFbWl0dGVyKFsnYmVmb3JlVHJhbnNsYXRlJywgJ3RyYW5zbGF0ZSddKTtcclxuICAgIH1cclxuICAgIFRyYW5zbGF0ZXIucHJvdG90eXBlLmdldENvbXB1dGVkUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNzc1N0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5jb250ZW50LCBudWxsKTtcclxuICAgICAgICB2YXIgbWF0cml4ID0gY3NzU3R5bGVbc3R5bGUudHJhbnNmb3JtXS5zcGxpdCgnKScpWzBdLnNwbGl0KCcsICcpO1xyXG4gICAgICAgIHZhciB4ID0gKyhtYXRyaXhbMTJdIHx8IG1hdHJpeFs0XSk7XHJcbiAgICAgICAgdmFyIHkgPSArKG1hdHJpeFsxM10gfHwgbWF0cml4WzVdKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB4LFxyXG4gICAgICAgICAgICB5OiB5XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBUcmFuc2xhdGVyLnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAocG9pbnQpIHtcclxuICAgICAgICB2YXIgdHJhbnNmb3JtU3R5bGUgPSBbXTtcclxuICAgICAgICBPYmplY3Qua2V5cyhwb2ludCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIGlmICghdHJhbnNsYXRlck1ldGFEYXRhW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdHJhbnNmb3JtRm5OYW1lID0gdHJhbnNsYXRlck1ldGFEYXRhW2tleV1bMF07XHJcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1Gbk5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1GbkFyZ1VuaXQgPSB0cmFuc2xhdGVyTWV0YURhdGFba2V5XVsxXTtcclxuICAgICAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1GbkFyZyA9IHBvaW50W2tleV07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHlsZS5wdXNoKHRyYW5zZm9ybUZuTmFtZSArIFwiKFwiICsgdHJhbnNmb3JtRm5BcmcgKyB0cmFuc2Zvcm1GbkFyZ1VuaXQgKyBcIilcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZVRyYW5zbGF0ZSwgdHJhbnNmb3JtU3R5bGUsIHBvaW50KTtcclxuICAgICAgICB0aGlzLnN0eWxlW3N0eWxlLnRyYW5zZm9ybV0gPSBcIlwiICsgdHJhbnNmb3JtU3R5bGUuam9pbignICcpO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMudHJhbnNsYXRlLCBwb2ludCk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNsYXRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmhvb2tzLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJhbnNsYXRlcjtcclxufSgpKTtcblxudmFyIEJhc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCYXNlKGNvbnRlbnQsIHRyYW5zbGF0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlciA9IHRyYW5zbGF0ZXI7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEV2ZW50RW1pdHRlcihbXHJcbiAgICAgICAgICAgICdtb3ZlJyxcclxuICAgICAgICAgICAgJ2VuZCcsXHJcbiAgICAgICAgICAgICdiZWZvcmVGb3JjZVN0b3AnLFxyXG4gICAgICAgICAgICAnZm9yY2VTdG9wJyxcclxuICAgICAgICAgICAgJ3RpbWUnLFxyXG4gICAgICAgICAgICAndGltZUZ1bmN0aW9uJ1xyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSBjb250ZW50LnN0eWxlO1xyXG4gICAgfVxyXG4gICAgQmFzZS5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGVuZFBvaW50KSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVyLnRyYW5zbGF0ZShlbmRQb2ludCk7XHJcbiAgICB9O1xyXG4gICAgQmFzZS5wcm90b3R5cGUuc2V0UGVuZGluZyA9IGZ1bmN0aW9uIChwZW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gcGVuZGluZztcclxuICAgIH07XHJcbiAgICBCYXNlLnByb3RvdHlwZS5zZXRGb3JjZVN0b3BwZWQgPSBmdW5jdGlvbiAoZm9yY2VTdG9wcGVkKSB7XHJcbiAgICAgICAgdGhpcy5mb3JjZVN0b3BwZWQgPSBmb3JjZVN0b3BwZWQ7XHJcbiAgICB9O1xyXG4gICAgQmFzZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmhvb2tzLmRlc3Ryb3koKTtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmFzZTtcclxufSgpKTtcblxudmFyIFRyYW5zaXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoVHJhbnNpdGlvbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFRyYW5zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgVHJhbnNpdGlvbi5wcm90b3R5cGUuc3RhcnRQcm9iZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwcm9iZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBvcyA9IF90aGlzLnRyYW5zbGF0ZXIuZ2V0Q29tcHV0ZWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMubW92ZSwgcG9zKTtcclxuICAgICAgICAgICAgLy8gZXhjdXRlIHdoZW4gdHJhbnNpdGlvbiBlbmRzXHJcbiAgICAgICAgICAgIGlmICghX3RoaXMucGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgcG9zKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShwcm9iZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHByb2JlKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2l0aW9uLnByb3RvdHlwZS50cmFuc2l0aW9uVGltZSA9IGZ1bmN0aW9uICh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRpbWUgPT09IHZvaWQgMCkgeyB0aW1lID0gMDsgfVxyXG4gICAgICAgIHRoaXMuc3R5bGVbc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uXSA9IHRpbWUgKyAnbXMnO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMudGltZSwgdGltZSk7XHJcbiAgICB9O1xyXG4gICAgVHJhbnNpdGlvbi5wcm90b3R5cGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKGVhc2luZykge1xyXG4gICAgICAgIHRoaXMuc3R5bGVbc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXSA9IGVhc2luZztcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnRpbWVGdW5jdGlvbiwgZWFzaW5nKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2l0aW9uLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKHN0YXJ0UG9pbnQsIGVuZFBvaW50LCB0aW1lLCBlYXNpbmdGbiwgaXNTbGllbnQpIHtcclxuICAgICAgICB0aGlzLnNldFBlbmRpbmcodGltZSA+IDAgJiYgKHN0YXJ0UG9pbnQueCAhPT0gZW5kUG9pbnQueCB8fCBzdGFydFBvaW50LnkgIT09IGVuZFBvaW50LnkpKTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbihlYXNpbmdGbik7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVGltZSh0aW1lKTtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZShlbmRQb2ludCk7XHJcbiAgICAgICAgaWYgKHRpbWUgJiYgdGhpcy5vcHRpb25zLnByb2JlVHlwZSA9PT0gUHJvYmUuUmVhbHRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFByb2JlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIHdlIGNoYW5nZSBjb250ZW50J3MgdHJhbnNmb3JtWSBpbiBhIHRpY2tcclxuICAgICAgICAvLyBzdWNoIGFzOiAwIC0+IDUwcHggLT4gMFxyXG4gICAgICAgIC8vIHRyYW5zaXRpb25lbmQgd2lsbCBub3QgYmUgdHJpZ2dlcmVkXHJcbiAgICAgICAgLy8gc28gd2UgZm9yY2V1cGRhdGUgYnkgcmVmbG93XHJcbiAgICAgICAgaWYgKCF0aW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZmxvdyA9IHRoaXMuY29udGVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG5vIG5lZWQgdG8gZGlzcGF0Y2ggbW92ZSBhbmQgZW5kIHdoZW4gc2xpZW50XHJcbiAgICAgICAgaWYgKCF0aW1lICYmICFpc1NsaWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLm1vdmUsIGVuZFBvaW50KTtcclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIGVuZFBvaW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVHJhbnNpdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBzdGlsbCBpbiB0cmFuc2l0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFBlbmRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy50cmFuc2xhdGVyLmdldENvbXB1dGVkUG9zaXRpb24oKSwgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25UaW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKHsgeDogeCwgeTogeSB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGb3JjZVN0b3BwZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZUZvcmNlU3RvcCwgeyB4OiB4LCB5OiB5IH0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5mb3JjZVN0b3AsIHsgeDogeCwgeTogeSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRyYW5zaXRpb247XHJcbn0oQmFzZSkpO1xuXG52YXIgQW5pbWF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEFuaW1hdGlvbiwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEFuaW1hdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBBbmltYXRpb24ucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoc3RhcnRQb2ludCwgZW5kUG9pbnQsIHRpbWUsIGVhc2luZ0ZuLCBpc1NsaWVudCkge1xyXG4gICAgICAgIC8vIHRpbWUgaXMgMFxyXG4gICAgICAgIGlmICghdGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZShlbmRQb2ludCk7XHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGNoYW5nZSBjb250ZW50J3MgdHJhbnNmb3JtWSBpbiBhIHRpY2tcclxuICAgICAgICAgICAgLy8gc3VjaCBhczogMCAtPiA1MHB4IC0+IDBcclxuICAgICAgICAgICAgLy8gdHJhbnNpdGlvbmVuZCB3aWxsIG5vdCBiZSB0cmlnZ2VyZWRcclxuICAgICAgICAgICAgLy8gc28gd2UgZm9yY2V1cGRhdGUgYnkgcmVmbG93XHJcbiAgICAgICAgICAgIHRoaXMuX3JlZmxvdyA9IHRoaXMuY29udGVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gZGlzcGF0Y2ggbW92ZSBhbmQgZW5kIHdoZW4gc2xpZW50XHJcbiAgICAgICAgICAgIGlmIChpc1NsaWVudClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5tb3ZlLCBlbmRQb2ludCk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBlbmRQb2ludCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltYXRlKHN0YXJ0UG9pbnQsIGVuZFBvaW50LCB0aW1lLCBlYXNpbmdGbik7XHJcbiAgICB9O1xyXG4gICAgQW5pbWF0aW9uLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gKHN0YXJ0UG9pbnQsIGVuZFBvaW50LCBkdXJhdGlvbiwgZWFzaW5nRm4pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBnZXROb3coKTtcclxuICAgICAgICB2YXIgZGVzdFRpbWUgPSBzdGFydFRpbWUgKyBkdXJhdGlvbjtcclxuICAgICAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5vdyA9IGdldE5vdygpO1xyXG4gICAgICAgICAgICAvLyBqcyBhbmltYXRpb24gZW5kXHJcbiAgICAgICAgICAgIGlmIChub3cgPj0gZGVzdFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zbGF0ZShlbmRQb2ludCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMubW92ZSwgZW5kUG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgZW5kUG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vdyA9IChub3cgLSBzdGFydFRpbWUpIC8gZHVyYXRpb247XHJcbiAgICAgICAgICAgIHZhciBlYXNpbmcgPSBlYXNpbmdGbihub3cpO1xyXG4gICAgICAgICAgICB2YXIgbmV3UG9pbnQgPSB7fTtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZW5kUG9pbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0VmFsdWUgPSBzdGFydFBvaW50W2tleV07XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kVmFsdWUgPSBlbmRQb2ludFtrZXldO1xyXG4gICAgICAgICAgICAgICAgbmV3UG9pbnRba2V5XSA9IChlbmRWYWx1ZSAtIHN0YXJ0VmFsdWUpICogZWFzaW5nICsgc3RhcnRWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLnRyYW5zbGF0ZShuZXdQb2ludCk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5wZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5wcm9iZVR5cGUgPT09IFByb2JlLlJlYWx0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMubW92ZSwgbmV3UG9pbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldFBlbmRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcik7XHJcbiAgICAgICAgc3RlcCgpO1xyXG4gICAgfTtcclxuICAgIEFuaW1hdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBzdGlsbCBpbiByZXF1ZXN0RnJhbWVBbmltYXRpb25cclxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGVuZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gdGhpcy50cmFuc2xhdGVyLmdldENvbXB1dGVkUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGb3JjZVN0b3BwZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZUZvcmNlU3RvcCwgcG9zKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZm9yY2VTdG9wLCBwb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQW5pbWF0aW9uO1xyXG59KEJhc2UpKTtcblxuZnVuY3Rpb24gY3JlYXRlQW5pbWF0ZXIoZWxlbWVudCwgdHJhbnNsYXRlciwgb3B0aW9ucykge1xyXG4gICAgdmFyIHVzZVRyYW5zaXRpb24gPSBvcHRpb25zLnVzZVRyYW5zaXRpb247XHJcbiAgICB2YXIgYW5pbWF0ZXJPcHRpb25zID0ge307XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYW5pbWF0ZXJPcHRpb25zLCAncHJvYmVUeXBlJywge1xyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMucHJvYmVUeXBlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKHVzZVRyYW5zaXRpb24pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRyYW5zaXRpb24oZWxlbWVudCwgdHJhbnNsYXRlciwgYW5pbWF0ZXJPcHRpb25zKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uKGVsZW1lbnQsIHRyYW5zbGF0ZXIsIGFuaW1hdGVyT3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cblxudmFyIEJlaGF2aW9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQmVoYXZpb3Iod3JhcHBlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEV2ZW50RW1pdHRlcihbJ21vbWVudHVtJywgJ2VuZCddKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLndyYXBwZXIuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zID0gMDtcclxuICAgIH1cclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IERpcmVjdGlvbi5EZWZhdWx0O1xyXG4gICAgICAgIHRoaXMubW92aW5nRGlyZWN0aW9uID0gRGlyZWN0aW9uLkRlZmF1bHQ7XHJcbiAgICAgICAgdGhpcy5kaXN0ID0gMDtcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgIGRlbHRhID0gdGhpcy5oYXNTY3JvbGwgPyBkZWx0YSA6IDA7XHJcbiAgICAgICAgdGhpcy5tb3ZpbmdEaXJlY3Rpb24gPVxyXG4gICAgICAgICAgICBkZWx0YSA+IDBcclxuICAgICAgICAgICAgICAgID8gRGlyZWN0aW9uLk5lZ2F0aXZlXHJcbiAgICAgICAgICAgICAgICA6IGRlbHRhIDwgMFxyXG4gICAgICAgICAgICAgICAgICAgID8gRGlyZWN0aW9uLlBvc2l0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBEaXJlY3Rpb24uRGVmYXVsdDtcclxuICAgICAgICB2YXIgbmV3UG9zID0gdGhpcy5jdXJyZW50UG9zICsgZGVsdGE7XHJcbiAgICAgICAgLy8gU2xvdyBkb3duIG9yIHN0b3AgaWYgb3V0c2lkZSBvZiB0aGUgYm91bmRhcmllc1xyXG4gICAgICAgIGlmIChuZXdQb3MgPiB0aGlzLm1pblNjcm9sbFBvcyB8fCBuZXdQb3MgPCB0aGlzLm1heFNjcm9sbFBvcykge1xyXG4gICAgICAgICAgICBpZiAoKG5ld1BvcyA+IHRoaXMubWluU2Nyb2xsUG9zICYmIHRoaXMub3B0aW9ucy5ib3VuY2VzWzBdKSB8fFxyXG4gICAgICAgICAgICAgICAgKG5ld1BvcyA8IHRoaXMubWF4U2Nyb2xsUG9zICYmIHRoaXMub3B0aW9ucy5ib3VuY2VzWzFdKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zID0gdGhpcy5jdXJyZW50UG9zICsgZGVsdGEgLyAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zID1cclxuICAgICAgICAgICAgICAgICAgICBuZXdQb3MgPiB0aGlzLm1pblNjcm9sbFBvcyA/IHRoaXMubWluU2Nyb2xsUG9zIDogdGhpcy5tYXhTY3JvbGxQb3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld1BvcztcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1vbWVudHVtSW5mbyA9IHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBhYnNEaXN0ID0gTWF0aC5hYnModGhpcy5jdXJyZW50UG9zIC0gdGhpcy5zdGFydFBvcyk7XHJcbiAgICAgICAgLy8gc3RhcnQgbW9tZW50dW0gYW5pbWF0aW9uIGlmIG5lZWRlZFxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW9tZW50dW0gJiZcclxuICAgICAgICAgICAgZHVyYXRpb24gPCB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdFRpbWUgJiZcclxuICAgICAgICAgICAgYWJzRGlzdCA+IHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgdmFyIHdyYXBwZXJTaXplID0gKHRoaXMuZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTmVnYXRpdmUgJiYgdGhpcy5vcHRpb25zLmJvdW5jZXNbMF0pIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5Qb3NpdGl2ZSAmJiB0aGlzLm9wdGlvbnMuYm91bmNlc1sxXSlcclxuICAgICAgICAgICAgICAgID8gdGhpcy53cmFwcGVyU2l6ZVxyXG4gICAgICAgICAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICBtb21lbnR1bUluZm8gPSB0aGlzLmhhc1Njcm9sbFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLm1vbWVudHVtKHRoaXMuY3VycmVudFBvcywgdGhpcy5zdGFydFBvcywgZHVyYXRpb24sIHRoaXMubWF4U2Nyb2xsUG9zLCB0aGlzLm1pblNjcm9sbFBvcywgd3JhcHBlclNpemUsIHRoaXMub3B0aW9ucylcclxuICAgICAgICAgICAgICAgIDogeyBkZXN0aW5hdGlvbjogdGhpcy5jdXJyZW50UG9zLCBkdXJhdGlvbjogMCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIG1vbWVudHVtSW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtb21lbnR1bUluZm87XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLm1vbWVudHVtID0gZnVuY3Rpb24gKGN1cnJlbnQsIHN0YXJ0LCB0aW1lLCBsb3dlck1hcmdpbiwgdXBwZXJNYXJnaW4sIHdyYXBwZXJTaXplLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gdGhpcy5vcHRpb25zOyB9XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gY3VycmVudCAtIHN0YXJ0O1xyXG4gICAgICAgIHZhciBzcGVlZCA9IE1hdGguYWJzKGRpc3RhbmNlKSAvIHRpbWU7XHJcbiAgICAgICAgdmFyIGRlY2VsZXJhdGlvbiA9IG9wdGlvbnMuZGVjZWxlcmF0aW9uLCBzd2lwZUJvdW5jZVRpbWUgPSBvcHRpb25zLnN3aXBlQm91bmNlVGltZSwgc3dpcGVUaW1lID0gb3B0aW9ucy5zd2lwZVRpbWU7XHJcbiAgICAgICAgdmFyIG1vbWVudHVtRGF0YSA9IHtcclxuICAgICAgICAgICAgZGVzdGluYXRpb246IGN1cnJlbnQgKyAoc3BlZWQgLyBkZWNlbGVyYXRpb24pICogKGRpc3RhbmNlIDwgMCA/IC0xIDogMSksXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBzd2lwZVRpbWUsXHJcbiAgICAgICAgICAgIHJhdGU6IDE1XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLm1vbWVudHVtLCBtb21lbnR1bURhdGEsIGRpc3RhbmNlKTtcclxuICAgICAgICBpZiAobW9tZW50dW1EYXRhLmRlc3RpbmF0aW9uIDwgbG93ZXJNYXJnaW4pIHtcclxuICAgICAgICAgICAgbW9tZW50dW1EYXRhLmRlc3RpbmF0aW9uID0gd3JhcHBlclNpemVcclxuICAgICAgICAgICAgICAgID8gTWF0aC5tYXgobG93ZXJNYXJnaW4gLSB3cmFwcGVyU2l6ZSAvIDQsIGxvd2VyTWFyZ2luIC0gKHdyYXBwZXJTaXplIC8gbW9tZW50dW1EYXRhLnJhdGUpICogc3BlZWQpXHJcbiAgICAgICAgICAgICAgICA6IGxvd2VyTWFyZ2luO1xyXG4gICAgICAgICAgICBtb21lbnR1bURhdGEuZHVyYXRpb24gPSBzd2lwZUJvdW5jZVRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1vbWVudHVtRGF0YS5kZXN0aW5hdGlvbiA+IHVwcGVyTWFyZ2luKSB7XHJcbiAgICAgICAgICAgIG1vbWVudHVtRGF0YS5kZXN0aW5hdGlvbiA9IHdyYXBwZXJTaXplXHJcbiAgICAgICAgICAgICAgICA/IE1hdGgubWluKHVwcGVyTWFyZ2luICsgd3JhcHBlclNpemUgLyA0LCB1cHBlck1hcmdpbiArICh3cmFwcGVyU2l6ZSAvIG1vbWVudHVtRGF0YS5yYXRlKSAqIHNwZWVkKVxyXG4gICAgICAgICAgICAgICAgOiB1cHBlck1hcmdpbjtcclxuICAgICAgICAgICAgbW9tZW50dW1EYXRhLmR1cmF0aW9uID0gc3dpcGVCb3VuY2VUaW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtb21lbnR1bURhdGEuZGVzdGluYXRpb24gPSBNYXRoLnJvdW5kKG1vbWVudHVtRGF0YS5kZXN0aW5hdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudHVtRGF0YTtcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUudXBkYXRlRGlyZWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhYnNEaXN0ID0gTWF0aC5yb3VuZCh0aGlzLmN1cnJlbnRQb3MpIC0gdGhpcy5hYnNTdGFydFBvcztcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9XHJcbiAgICAgICAgICAgIGFic0Rpc3QgPiAwXHJcbiAgICAgICAgICAgICAgICA/IERpcmVjdGlvbi5OZWdhdGl2ZVxyXG4gICAgICAgICAgICAgICAgOiBhYnNEaXN0IDwgMFxyXG4gICAgICAgICAgICAgICAgICAgID8gRGlyZWN0aW9uLlBvc2l0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBEaXJlY3Rpb24uRGVmYXVsdDtcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLm9wdGlvbnMucmVjdCwgc2l6ZSA9IF9hLnNpemUsIHBvc2l0aW9uID0gX2EucG9zaXRpb247XHJcbiAgICAgICAgdmFyIGlzV3JhcHBlclN0YXRpYyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMud3JhcHBlciwgbnVsbCkucG9zaXRpb24gPT09ICdzdGF0aWMnO1xyXG4gICAgICAgIHZhciB3cmFwcGVyUmVjdCA9IGdldFJlY3QodGhpcy53cmFwcGVyKTtcclxuICAgICAgICB0aGlzLndyYXBwZXJTaXplID0gd3JhcHBlclJlY3Rbc2l6ZV07XHJcbiAgICAgICAgdmFyIGNvbnRlbnRSZWN0ID0gZ2V0UmVjdCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMuY29udGVudFNpemUgPSBjb250ZW50UmVjdFtzaXplXTtcclxuICAgICAgICB0aGlzLnJlbGF0aXZlT2Zmc2V0ID0gY29udGVudFJlY3RbcG9zaXRpb25dO1xyXG4gICAgICAgIGlmIChpc1dyYXBwZXJTdGF0aWMpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZU9mZnNldCAtPSB3cmFwcGVyUmVjdFtwb3NpdGlvbl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWluU2Nyb2xsUG9zID0gMDtcclxuICAgICAgICB0aGlzLm1heFNjcm9sbFBvcyA9IHRoaXMud3JhcHBlclNpemUgLSB0aGlzLmNvbnRlbnRTaXplO1xyXG4gICAgICAgIGlmICh0aGlzLm1heFNjcm9sbFBvcyA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tYXhTY3JvbGxQb3MgLT0gdGhpcy5yZWxhdGl2ZU9mZnNldDtcclxuICAgICAgICAgICAgdGhpcy5taW5TY3JvbGxQb3MgPSAtdGhpcy5yZWxhdGl2ZU9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYXNTY3JvbGwgPVxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2Nyb2xsYWJsZSAmJiB0aGlzLm1heFNjcm9sbFBvcyA8IHRoaXMubWluU2Nyb2xsUG9zO1xyXG4gICAgICAgIGlmICghdGhpcy5oYXNTY3JvbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXhTY3JvbGxQb3MgPSB0aGlzLm1pblNjcm9sbFBvcztcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50U2l6ZSA9IHRoaXMud3JhcHBlclNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUudXBkYXRlUG9zaXRpb24gPSBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zID0gcG9zO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5nZXRDdXJyZW50UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMuY3VycmVudFBvcyk7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmNoZWNrSW5Cb3VuZGFyeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLmFkanVzdFBvc2l0aW9uKHRoaXMuY3VycmVudFBvcyk7XHJcbiAgICAgICAgdmFyIGluQm91bmRhcnkgPSBwb3NpdGlvbiA9PT0gdGhpcy5nZXRDdXJyZW50UG9zKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBpbkJvdW5kYXJ5OiBpbkJvdW5kYXJ5XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICAvLyBhZGp1c3QgcG9zaXRpb24gd2hlbiBvdXQgb2YgYm91bmRhcnlcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5hZGp1c3RQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB2YXIgcm91bmRQb3MgPSBNYXRoLnJvdW5kKHBvcyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc1Njcm9sbCB8fCByb3VuZFBvcyA+IHRoaXMubWluU2Nyb2xsUG9zKSB7XHJcbiAgICAgICAgICAgIHJvdW5kUG9zID0gdGhpcy5taW5TY3JvbGxQb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJvdW5kUG9zIDwgdGhpcy5tYXhTY3JvbGxQb3MpIHtcclxuICAgICAgICAgICAgcm91bmRQb3MgPSB0aGlzLm1heFNjcm9sbFBvcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvdW5kUG9zO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS51cGRhdGVTdGFydFBvcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zID0gdGhpcy5jdXJyZW50UG9zO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS51cGRhdGVBYnNTdGFydFBvcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFic1N0YXJ0UG9zID0gdGhpcy5jdXJyZW50UG9zO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5yZXNldFN0YXJ0UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RhcnRQb3MoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFic1N0YXJ0UG9zKCk7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmdldEFic0Rpc3QgPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICB0aGlzLmRpc3QgKz0gZGVsdGE7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdCk7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcy5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEJlaGF2aW9yO1xyXG59KCkpO1xuXG52YXIgX2EsIF9iLCBfYywgX2Q7XHJcbnZhciBQYXNzdGhyb3VnaDtcclxuKGZ1bmN0aW9uIChQYXNzdGhyb3VnaCkge1xyXG4gICAgUGFzc3Rocm91Z2hbXCJZZXNcIl0gPSBcInllc1wiO1xyXG4gICAgUGFzc3Rocm91Z2hbXCJOb1wiXSA9IFwibm9cIjtcclxufSkoUGFzc3Rocm91Z2ggfHwgKFBhc3N0aHJvdWdoID0ge30pKTtcclxudmFyIFBhc3N0aHJvdWdoSGFuZGxlcnMgPSAoX2EgPSB7fSxcclxuICAgIF9hW1Bhc3N0aHJvdWdoLlllc10gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIF9hW1Bhc3N0aHJvdWdoLk5vXSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBfYSk7XHJcbnZhciBEaXJlY3Rpb25NYXAgPSAoX2IgPSB7fSxcclxuICAgIF9iW0RpcmVjdGlvbkxvY2suSG9yaXpvbnRhbF0gPSAoX2MgPSB7fSxcclxuICAgICAgICBfY1tQYXNzdGhyb3VnaC5ZZXNdID0gRXZlbnRQYXNzdGhyb3VnaC5Ib3Jpem9udGFsLFxyXG4gICAgICAgIF9jW1Bhc3N0aHJvdWdoLk5vXSA9IEV2ZW50UGFzc3Rocm91Z2guVmVydGljYWwsXHJcbiAgICAgICAgX2MpLFxyXG4gICAgX2JbRGlyZWN0aW9uTG9jay5WZXJ0aWNhbF0gPSAoX2QgPSB7fSxcclxuICAgICAgICBfZFtQYXNzdGhyb3VnaC5ZZXNdID0gRXZlbnRQYXNzdGhyb3VnaC5WZXJ0aWNhbCxcclxuICAgICAgICBfZFtQYXNzdGhyb3VnaC5Ob10gPSBFdmVudFBhc3N0aHJvdWdoLkhvcml6b250YWwsXHJcbiAgICAgICAgX2QpLFxyXG4gICAgX2IpO1xyXG52YXIgRGlyZWN0aW9uTG9ja0FjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERpcmVjdGlvbkxvY2tBY3Rpb24oZGlyZWN0aW9uTG9ja1RocmVzaG9sZCwgZnJlZVNjcm9sbCwgZXZlbnRQYXNzdGhyb3VnaCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCA9IGRpcmVjdGlvbkxvY2tUaHJlc2hvbGQ7XHJcbiAgICAgICAgdGhpcy5mcmVlU2Nyb2xsID0gZnJlZVNjcm9sbDtcclxuICAgICAgICB0aGlzLmV2ZW50UGFzc3Rocm91Z2ggPSBldmVudFBhc3N0aHJvdWdoO1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgIH1cclxuICAgIERpcmVjdGlvbkxvY2tBY3Rpb24ucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja2VkID0gRGlyZWN0aW9uTG9jay5EZWZhdWx0O1xyXG4gICAgfTtcclxuICAgIERpcmVjdGlvbkxvY2tBY3Rpb24ucHJvdG90eXBlLmNoZWNrTW92aW5nRGlyZWN0aW9uID0gZnVuY3Rpb24gKGFic0Rpc3RYLCBhYnNEaXN0WSwgZSkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZURpcmVjdGlvbkxvY2soYWJzRGlzdFgsIGFic0Rpc3RZKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFdmVudFBhc3N0aHJvdWdoKGUpO1xyXG4gICAgfTtcclxuICAgIERpcmVjdGlvbkxvY2tBY3Rpb24ucHJvdG90eXBlLmFkanVzdERlbHRhID0gZnVuY3Rpb24gKGRlbHRhWCwgZGVsdGFZKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uTG9ja2VkID09PSBEaXJlY3Rpb25Mb2NrLkhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgZGVsdGFZID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kaXJlY3Rpb25Mb2NrZWQgPT09IERpcmVjdGlvbkxvY2suVmVydGljYWwpIHtcclxuICAgICAgICAgICAgZGVsdGFYID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGVsdGFYOiBkZWx0YVgsXHJcbiAgICAgICAgICAgIGRlbHRhWTogZGVsdGFZXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBEaXJlY3Rpb25Mb2NrQWN0aW9uLnByb3RvdHlwZS5jb21wdXRlRGlyZWN0aW9uTG9jayA9IGZ1bmN0aW9uIChhYnNEaXN0WCwgYWJzRGlzdFkpIHtcclxuICAgICAgICAvLyBJZiB5b3UgYXJlIHNjcm9sbGluZyBpbiBvbmUgZGlyZWN0aW9uLCBsb2NrIGl0XHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uTG9ja2VkID09PSBEaXJlY3Rpb25Mb2NrLkRlZmF1bHQgJiYgIXRoaXMuZnJlZVNjcm9sbCkge1xyXG4gICAgICAgICAgICBpZiAoYWJzRGlzdFggPiBhYnNEaXN0WSArIHRoaXMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSBEaXJlY3Rpb25Mb2NrLkhvcml6b250YWw7IC8vIGxvY2sgaG9yaXpvbnRhbGx5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYWJzRGlzdFkgPj0gYWJzRGlzdFggKyB0aGlzLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja2VkID0gRGlyZWN0aW9uTG9jay5WZXJ0aWNhbDsgLy8gbG9jayB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tlZCA9IERpcmVjdGlvbkxvY2suTm9uZTsgLy8gbm8gbG9ja1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIERpcmVjdGlvbkxvY2tBY3Rpb24ucHJvdG90eXBlLmhhbmRsZUV2ZW50UGFzc3Rocm91Z2ggPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBoYW5kbGVNYXAgPSBEaXJlY3Rpb25NYXBbdGhpcy5kaXJlY3Rpb25Mb2NrZWRdO1xyXG4gICAgICAgIGlmIChoYW5kbGVNYXApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXZlbnRQYXNzdGhyb3VnaCA9PT0gaGFuZGxlTWFwW1Bhc3N0aHJvdWdoLlllc10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQYXNzdGhyb3VnaEhhbmRsZXJzW1Bhc3N0aHJvdWdoLlllc10oZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ldmVudFBhc3N0aHJvdWdoID09PSBoYW5kbGVNYXBbUGFzc3Rocm91Z2guTm9dKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFzc3Rocm91Z2hIYW5kbGVyc1tQYXNzdGhyb3VnaC5Ob10oZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEaXJlY3Rpb25Mb2NrQWN0aW9uO1xyXG59KCkpO1xuXG52YXIgU2Nyb2xsZXJBY3Rpb25zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2Nyb2xsZXJBY3Rpb25zKHNjcm9sbEJlaGF2aW9yWCwgc2Nyb2xsQmVoYXZpb3JZLCBhY3Rpb25zSGFuZGxlciwgYW5pbWF0ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEV2ZW50RW1pdHRlcihbXHJcbiAgICAgICAgICAgICdzdGFydCcsXHJcbiAgICAgICAgICAgICdiZWZvcmVNb3ZlJyxcclxuICAgICAgICAgICAgJ3Njcm9sbFN0YXJ0JyxcclxuICAgICAgICAgICAgJ3Njcm9sbCcsXHJcbiAgICAgICAgICAgICdiZWZvcmVFbmQnLFxyXG4gICAgICAgICAgICAnZW5kJyxcclxuICAgICAgICAgICAgJ3Njcm9sbEVuZCdcclxuICAgICAgICBdKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWCA9IHNjcm9sbEJlaGF2aW9yWDtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWSA9IHNjcm9sbEJlaGF2aW9yWTtcclxuICAgICAgICB0aGlzLmFjdGlvbnNIYW5kbGVyID0gYWN0aW9uc0hhbmRsZXI7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlciA9IGFuaW1hdGVyO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrQWN0aW9uID0gbmV3IERpcmVjdGlvbkxvY2tBY3Rpb24ob3B0aW9ucy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkLCBvcHRpb25zLmZyZWVTY3JvbGwsIG9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaCk7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJpbmRBY3Rpb25zSGFuZGxlcigpO1xyXG4gICAgfVxyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5iaW5kQWN0aW9uc0hhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBbbW91c2V8dG91Y2hdc3RhcnQgZXZlbnRcclxuICAgICAgICB0aGlzLmFjdGlvbnNIYW5kbGVyLmhvb2tzLm9uKHRoaXMuYWN0aW9uc0hhbmRsZXIuaG9va3MuZXZlbnRUeXBlcy5zdGFydCwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVTdGFydChlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBbbW91c2V8dG91Y2hdbW92ZSBldmVudFxyXG4gICAgICAgIHRoaXMuYWN0aW9uc0hhbmRsZXIuaG9va3Mub24odGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5ldmVudFR5cGVzLm1vdmUsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFYID0gX2EuZGVsdGFYLCBkZWx0YVkgPSBfYS5kZWx0YVksIGUgPSBfYS5lO1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZU1vdmUoZGVsdGFYLCBkZWx0YVksIGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFttb3VzZXx0b3VjaF1lbmQgZXZlbnRcclxuICAgICAgICB0aGlzLmFjdGlvbnNIYW5kbGVyLmhvb2tzLm9uKHRoaXMuYWN0aW9uc0hhbmRsZXIuaG9va3MuZXZlbnRUeXBlcy5lbmQsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMuZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlRW5kKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNsaWNrXHJcbiAgICAgICAgdGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5vbih0aGlzLmFjdGlvbnNIYW5kbGVyLmhvb2tzLmV2ZW50VHlwZXMuY2xpY2ssIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBuYXRpdmUgY2xpY2sgZXZlbnRcclxuICAgICAgICAgICAgaWYgKF90aGlzLmVuYWJsZWQgJiYgIWUuX2NvbnN0cnVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVDbGljayhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyQWN0aW9ucy5wcm90b3R5cGUuaGFuZGxlU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0aW1lc3RhbXAgPSBnZXROb3coKTtcclxuICAgICAgICB0aGlzLm1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrQWN0aW9uLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclguc3RhcnQoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWS5zdGFydCgpO1xyXG4gICAgICAgIC8vIGZvcmNlIHN0b3BwaW5nIGxhc3QgdHJhbnNpdGlvbiBvciBhbmltYXRpb25cclxuICAgICAgICB0aGlzLmFuaW1hdGVyLnN0b3AoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWC5yZXNldFN0YXJ0UG9zKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkucmVzZXRTdGFydFBvcygpO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc3RhcnQsIGUpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyQWN0aW9ucy5wcm90b3R5cGUuaGFuZGxlTW92ZSA9IGZ1bmN0aW9uIChkZWx0YVgsIGRlbHRhWSwgZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZU1vdmUsIGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFic0Rpc3RYID0gdGhpcy5zY3JvbGxCZWhhdmlvclguZ2V0QWJzRGlzdChkZWx0YVgpO1xyXG4gICAgICAgIHZhciBhYnNEaXN0WSA9IHRoaXMuc2Nyb2xsQmVoYXZpb3JZLmdldEFic0Rpc3QoZGVsdGFZKTtcclxuICAgICAgICB2YXIgdGltZXN0YW1wID0gZ2V0Tm93KCk7XHJcbiAgICAgICAgLy8gV2UgbmVlZCB0byBtb3ZlIGF0IGxlYXN0IG1vbWVudHVtTGltaXREaXN0YW5jZSBwaXhlbHNcclxuICAgICAgICAvLyBmb3IgdGhlIHNjcm9sbGluZyB0byBpbml0aWF0ZVxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrTW9tZW50dW0oYWJzRGlzdFgsIGFic0Rpc3RZLCB0aW1lc3RhbXApKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25Mb2NrQWN0aW9uLmNoZWNrTW92aW5nRGlyZWN0aW9uKGFic0Rpc3RYLCBhYnNEaXN0WSwgZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zSGFuZGxlci5zZXRJbml0aWF0ZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkZWx0YSA9IHRoaXMuZGlyZWN0aW9uTG9ja0FjdGlvbi5hZGp1c3REZWx0YShkZWx0YVgsIGRlbHRhWSk7XHJcbiAgICAgICAgdmFyIG5ld1ggPSB0aGlzLnNjcm9sbEJlaGF2aW9yWC5tb3ZlKGRlbHRhLmRlbHRhWCk7XHJcbiAgICAgICAgdmFyIG5ld1kgPSB0aGlzLnNjcm9sbEJlaGF2aW9yWS5tb3ZlKGRlbHRhLmRlbHRhWSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vdmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbFN0YXJ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltYXRlci50cmFuc2xhdGUoe1xyXG4gICAgICAgICAgICB4OiBuZXdYLFxyXG4gICAgICAgICAgICB5OiBuZXdZXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaFNjcm9sbCh0aW1lc3RhbXApO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyQWN0aW9ucy5wcm90b3R5cGUuZGlzcGF0Y2hTY3JvbGwgPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2ggc2Nyb2xsIGluIGludGVydmFsIHRpbWVcclxuICAgICAgICBpZiAodGltZXN0YW1wIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdFRpbWUpIHtcclxuICAgICAgICAgICAgLy8gcmVmcmVzaCB0aW1lIGFuZCBzdGFydGluZyBwb3NpdGlvbiB0byBpbml0aWF0ZSBhIG1vbWVudHVtXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGltZXN0YW1wO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWC51cGRhdGVTdGFydFBvcygpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWS51cGRhdGVTdGFydFBvcygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnByb2JlVHlwZSA9PT0gUHJvYmUuVGhyb3R0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsLCB0aGlzLmdldEN1cnJlbnRQb3MoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZGlzcGF0Y2ggc2Nyb2xsIGFsbCB0aGUgdGltZVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJvYmVUeXBlID4gUHJvYmUuVGhyb3R0bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGwsIHRoaXMuZ2V0Q3VycmVudFBvcygpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5jaGVja01vbWVudHVtID0gZnVuY3Rpb24gKGFic0Rpc3RYLCBhYnNEaXN0WSwgdGltZXN0YW1wKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aW1lc3RhbXAgLSB0aGlzLmVuZFRpbWUgPiB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdFRpbWUgJiZcclxuICAgICAgICAgICAgYWJzRGlzdFkgPCB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdERpc3RhbmNlICYmXHJcbiAgICAgICAgICAgIGFic0Rpc3RYIDwgdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXREaXN0YW5jZSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5oYW5kbGVFbmQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZUVuZCwgZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudFBvcyA9IHRoaXMuZ2V0Q3VycmVudFBvcygpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYLnVwZGF0ZURpcmVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZLnVwZGF0ZURpcmVjdGlvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgZSwgY3VycmVudFBvcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZXIudHJhbnNsYXRlKGN1cnJlbnRQb3MpO1xyXG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGdldE5vdygpO1xyXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IHRoaXMuZW5kVGltZSAtIHRoaXMuc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsRW5kLCBjdXJyZW50UG9zLCBkdXJhdGlvbik7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKCFwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbkZuKGUudGFyZ2V0LCB0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHRFeGNlcHRpb24pKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5nZXRDdXJyZW50UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuc2Nyb2xsQmVoYXZpb3JYLmdldEN1cnJlbnRQb3MoKSxcclxuICAgICAgICAgICAgeTogdGhpcy5zY3JvbGxCZWhhdmlvclkuZ2V0Q3VycmVudFBvcygpXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gMDtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcy5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNjcm9sbGVyQWN0aW9ucztcclxufSgpKTtcblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uc0hhbmRsZXJPcHRpb25zKGJzT3B0aW9ucykge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBbXHJcbiAgICAgICAgJ2NsaWNrJyxcclxuICAgICAgICAnYmluZFRvV3JhcHBlcicsXHJcbiAgICAgICAgJ2Rpc2FibGVNb3VzZScsXHJcbiAgICAgICAgJ2Rpc2FibGVUb3VjaCcsXHJcbiAgICAgICAgJ3ByZXZlbnREZWZhdWx0JyxcclxuICAgICAgICAnc3RvcFByb3BhZ2F0aW9uJyxcclxuICAgICAgICAndGFnRXhjZXB0aW9uJyxcclxuICAgICAgICAncHJldmVudERlZmF1bHRFeGNlcHRpb24nXHJcbiAgICBdLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VyKSB7XHJcbiAgICAgICAgcHJldltjdXJdID0gYnNPcHRpb25zW2N1cl07XHJcbiAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9LCB7fSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVCZWhhdmlvck9wdGlvbnMoYnNPcHRpb25zLCBleHRyYVByb3AsIGJvdW5jZXMsIHJlY3QpIHtcclxuICAgIHZhciBvcHRpb25zID0gW1xyXG4gICAgICAgICdtb21lbnR1bScsXHJcbiAgICAgICAgJ21vbWVudHVtTGltaXRUaW1lJyxcclxuICAgICAgICAnbW9tZW50dW1MaW1pdERpc3RhbmNlJyxcclxuICAgICAgICAnZGVjZWxlcmF0aW9uJyxcclxuICAgICAgICAnc3dpcGVCb3VuY2VUaW1lJyxcclxuICAgICAgICAnc3dpcGVUaW1lJ1xyXG4gICAgXS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cikge1xyXG4gICAgICAgIHByZXZbY3VyXSA9IGJzT3B0aW9uc1tjdXJdO1xyXG4gICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgfSwge30pO1xyXG4gICAgLy8gYWRkIGV4dHJhIHByb3BlcnR5XHJcbiAgICBvcHRpb25zLnNjcm9sbGFibGUgPSBic09wdGlvbnNbZXh0cmFQcm9wXTtcclxuICAgIG9wdGlvbnMuYm91bmNlcyA9IGJvdW5jZXM7XHJcbiAgICBvcHRpb25zLnJlY3QgPSByZWN0O1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbn1cblxuZnVuY3Rpb24gYnViYmxpbmcoc291cmNlLCB0YXJnZXQsIGV2ZW50cykge1xyXG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIHNvdXJjZUV2ZW50O1xyXG4gICAgICAgIHZhciB0YXJnZXRFdmVudDtcclxuICAgICAgICBpZiAodHlwZW9mIGV2ZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBzb3VyY2VFdmVudCA9IHRhcmdldEV2ZW50ID0gZXZlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzb3VyY2VFdmVudCA9IGV2ZW50LnNvdXJjZTtcclxuICAgICAgICAgICAgdGFyZ2V0RXZlbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNvdXJjZS5vbihzb3VyY2VFdmVudCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQudHJpZ2dlci5hcHBseSh0YXJnZXQsIFt0YXJnZXRFdmVudF0uY29uY2F0KGFyZ3MpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XG5cbnZhciBTY3JvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNjcm9sbGVyKHdyYXBwZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IEV2ZW50RW1pdHRlcihbXHJcbiAgICAgICAgICAgICdiZWZvcmVTdGFydCcsXHJcbiAgICAgICAgICAgICdiZWZvcmVNb3ZlJyxcclxuICAgICAgICAgICAgJ2JlZm9yZVNjcm9sbFN0YXJ0JyxcclxuICAgICAgICAgICAgJ3Njcm9sbFN0YXJ0JyxcclxuICAgICAgICAgICAgJ3Njcm9sbCcsXHJcbiAgICAgICAgICAgICdiZWZvcmVFbmQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsRW5kJyxcclxuICAgICAgICAgICAgJ3JlZnJlc2gnLFxyXG4gICAgICAgICAgICAndG91Y2hFbmQnLFxyXG4gICAgICAgICAgICAnZW5kJyxcclxuICAgICAgICAgICAgJ2ZsaWNrJyxcclxuICAgICAgICAgICAgJ3Njcm9sbENhbmNlbCcsXHJcbiAgICAgICAgICAgICdtb21lbnR1bScsXHJcbiAgICAgICAgICAgICdzY3JvbGxUbycsXHJcbiAgICAgICAgICAgICdpZ25vcmVEaXNNb3ZlRm9yU2FtZVBvcycsXHJcbiAgICAgICAgICAgICdzY3JvbGxUb0VsZW1lbnQnXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gd3JhcHBlcjtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB3cmFwcGVyLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpc1xyXG4gICAgICAgICAgICAub3B0aW9ucy5ib3VuY2UsIF9iID0gX2EubGVmdCwgbGVmdCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gX2EucmlnaHQsIHJpZ2h0ID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBfYS50b3AsIHRvcCA9IF9kID09PSB2b2lkIDAgPyB0cnVlIDogX2QsIF9lID0gX2EuYm90dG9tLCBib3R0b20gPSBfZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9lO1xyXG4gICAgICAgIC8vIGRpcmVjdGlvbiBYXHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclggPSBuZXcgQmVoYXZpb3Iod3JhcHBlciwgY3JlYXRlQmVoYXZpb3JPcHRpb25zKG9wdGlvbnMsICdzY3JvbGxYJywgW2xlZnQsIHJpZ2h0XSwge1xyXG4gICAgICAgICAgICBzaXplOiAnd2lkdGgnLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIC8vIGRpcmVjdGlvbiBZXHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkgPSBuZXcgQmVoYXZpb3Iod3JhcHBlciwgY3JlYXRlQmVoYXZpb3JPcHRpb25zKG9wdGlvbnMsICdzY3JvbGxZJywgW3RvcCwgYm90dG9tXSwge1xyXG4gICAgICAgICAgICBzaXplOiAnaGVpZ2h0JyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICd0b3AnXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlciA9IG5ldyBUcmFuc2xhdGVyKHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlciA9IGNyZWF0ZUFuaW1hdGVyKHRoaXMuY29udGVudCwgdGhpcy50cmFuc2xhdGVyLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uc0hhbmRsZXIgPSBuZXcgQWN0aW9uc0hhbmRsZXIod3JhcHBlciwgY3JlYXRlQWN0aW9uc0hhbmRsZXJPcHRpb25zKHRoaXMub3B0aW9ucykpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IG5ldyBTY3JvbGxlckFjdGlvbnModGhpcy5zY3JvbGxCZWhhdmlvclgsIHRoaXMuc2Nyb2xsQmVoYXZpb3JZLCB0aGlzLmFjdGlvbnNIYW5kbGVyLCB0aGlzLmFuaW1hdGVyLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHZhciByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlc2l6ZVJlZ2lzdGVyID0gbmV3IEV2ZW50UmVnaXN0ZXIod2luZG93LCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdvcmllbnRhdGlvbmNoYW5nZScsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiByZXNpemVIYW5kbGVyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdyZXNpemUnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogcmVzaXplSGFuZGxlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uRW5kUmVnaXN0ZXIgPSBuZXcgRXZlbnRSZWdpc3Rlcih0aGlzLmNvbnRlbnQsIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogc3R5bGUudHJhbnNpdGlvbkVuZCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMudHJhbnNpdGlvbkVuZC5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5iaW5kVHJhbnNsYXRlcigpO1xyXG4gICAgICAgIHRoaXMuYmluZEFuaW1hdGVyKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kQWN0aW9ucygpO1xyXG4gICAgICAgIC8vIGVuYWJsZSBwb2ludGVyIGV2ZW50cyB3aGVuIHNjcm9sbGluZyBlbmRzXHJcbiAgICAgICAgdGhpcy5ob29rcy5vbih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsRW5kLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnRvZ2dsZVBvaW50ZXJFdmVudHModHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmJpbmRUcmFuc2xhdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGhvb2tzID0gdGhpcy50cmFuc2xhdGVyLmhvb2tzO1xyXG4gICAgICAgIGhvb2tzLm9uKGhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlVHJhbnNsYXRlLCBmdW5jdGlvbiAodHJhbnNmb3JtU3R5bGUpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMudHJhbnNsYXRlWikge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGUucHVzaChfdGhpcy5vcHRpb25zLnRyYW5zbGF0ZVopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gZGlzYWJsZSBwb2ludGVyIGV2ZW50cyB3aGVuIHNjcm9sbGluZ1xyXG4gICAgICAgIGhvb2tzLm9uKGhvb2tzLmV2ZW50VHlwZXMudHJhbnNsYXRlLCBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVBvc2l0aW9ucyhwb3MpO1xyXG4gICAgICAgICAgICBfdGhpcy50b2dnbGVQb2ludGVyRXZlbnRzKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuYmluZEFuaW1hdGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8gcmVzZXQgcG9zaXRpb25cclxuICAgICAgICB0aGlzLmFuaW1hdGVyLmhvb2tzLm9uKHRoaXMuYW5pbWF0ZXIuaG9va3MuZXZlbnRUeXBlcy5lbmQsIGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5yZXNldFBvc2l0aW9uKF90aGlzLm9wdGlvbnMuYm91bmNlVGltZSkpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVyLnNldFBlbmRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbEVuZCwgcG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ1YmJsaW5nKHRoaXMuYW5pbWF0ZXIuaG9va3MsIHRoaXMuaG9va3MsIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLmFuaW1hdGVyLmhvb2tzLmV2ZW50VHlwZXMubW92ZSxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuYW5pbWF0ZXIuaG9va3MuZXZlbnRUeXBlcy5mb3JjZVN0b3AsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxFbmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5iaW5kQWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xyXG4gICAgICAgIGJ1YmJsaW5nKGFjdGlvbnMuaG9va3MsIHRoaXMuaG9va3MsIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuc3RhcnQsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVTdGFydFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5zdGFydCxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZVNjcm9sbFN0YXJ0IC8vIGp1c3QgZm9yIGV2ZW50IGFwaVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVNb3ZlLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlTW92ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxTdGFydCxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbFN0YXJ0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogYWN0aW9ucy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbCxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVFbmQsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVFbmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIGFjdGlvbnMuaG9va3Mub24oYWN0aW9ucy5ob29rcy5ldmVudFR5cGVzLmVuZCwgZnVuY3Rpb24gKGUsIHBvcykge1xyXG4gICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMudG91Y2hFbmQsIHBvcyk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBwb3MpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBpdCBpcyBhIGNsaWNrIG9wZXJhdGlvblxyXG4gICAgICAgICAgICBpZiAoIWFjdGlvbnMubW92ZWQgJiYgX3RoaXMuY2hlY2tDbGljayhlKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZXIuc2V0Rm9yY2VTdG9wcGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxDYW5jZWwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZXIuc2V0Rm9yY2VTdG9wcGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgLy8gcmVzZXQgaWYgd2UgYXJlIG91dHNpZGUgb2YgdGhlIGJvdW5kYXJpZXNcclxuICAgICAgICAgICAgaWYgKF90aGlzLnJlc2V0UG9zaXRpb24oX3RoaXMub3B0aW9ucy5ib3VuY2VUaW1lLCBlYXNlLmJvdW5jZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWN0aW9ucy5ob29rcy5vbihhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsRW5kLCBmdW5jdGlvbiAocG9zLCBkdXJhdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFYID0gTWF0aC5hYnMocG9zLnggLSBfdGhpcy5zY3JvbGxCZWhhdmlvclguc3RhcnRQb3MpO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGFZID0gTWF0aC5hYnMocG9zLnkgLSBfdGhpcy5zY3JvbGxCZWhhdmlvclkuc3RhcnRQb3MpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuY2hlY2tGbGljayhkdXJhdGlvbiwgZGVsdGFYLCBkZWx0YVkpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMuZmxpY2spO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5tb21lbnR1bShwb3MsIGR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxFbmQsIHBvcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmNoZWNrRmxpY2sgPSBmdW5jdGlvbiAoZHVyYXRpb24sIGRlbHRhWCwgZGVsdGFZKSB7XHJcbiAgICAgICAgLy8gZmxpY2tcclxuICAgICAgICBpZiAodGhpcy5ob29rcy5ldmVudHMuZmxpY2subGVuZ3RoID4gMSAmJlxyXG4gICAgICAgICAgICBkdXJhdGlvbiA8IHRoaXMub3B0aW9ucy5mbGlja0xpbWl0VGltZSAmJlxyXG4gICAgICAgICAgICBkZWx0YVggPCB0aGlzLm9wdGlvbnMuZmxpY2tMaW1pdERpc3RhbmNlICYmXHJcbiAgICAgICAgICAgIGRlbHRhWSA8IHRoaXMub3B0aW9ucy5mbGlja0xpbWl0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5tb21lbnR1bSA9IGZ1bmN0aW9uIChwb3MsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1ldGEgPSB7XHJcbiAgICAgICAgICAgIHRpbWU6IDAsXHJcbiAgICAgICAgICAgIGVhc2luZzogZWFzZS5zd2lwZXIsXHJcbiAgICAgICAgICAgIG5ld1g6IHBvcy54LFxyXG4gICAgICAgICAgICBuZXdZOiBwb3MueVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gc3RhcnQgbW9tZW50dW0gYW5pbWF0aW9uIGlmIG5lZWRlZFxyXG4gICAgICAgIHZhciBtb21lbnR1bVggPSB0aGlzLnNjcm9sbEJlaGF2aW9yWC5lbmQoZHVyYXRpb24pO1xyXG4gICAgICAgIHZhciBtb21lbnR1bVkgPSB0aGlzLnNjcm9sbEJlaGF2aW9yWS5lbmQoZHVyYXRpb24pO1xyXG4gICAgICAgIG1ldGEubmV3WCA9IGlzVW5kZWYobW9tZW50dW1YLmRlc3RpbmF0aW9uKVxyXG4gICAgICAgICAgICA/IG1ldGEubmV3WFxyXG4gICAgICAgICAgICA6IG1vbWVudHVtWC5kZXN0aW5hdGlvbjtcclxuICAgICAgICBtZXRhLm5ld1kgPSBpc1VuZGVmKG1vbWVudHVtWS5kZXN0aW5hdGlvbilcclxuICAgICAgICAgICAgPyBtZXRhLm5ld1lcclxuICAgICAgICAgICAgOiBtb21lbnR1bVkuZGVzdGluYXRpb247XHJcbiAgICAgICAgbWV0YS50aW1lID0gTWF0aC5tYXgobW9tZW50dW1YLmR1cmF0aW9uLCBtb21lbnR1bVkuZHVyYXRpb24pO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMubW9tZW50dW0sIG1ldGEsIHRoaXMpO1xyXG4gICAgICAgIC8vIHdoZW4geCBvciB5IGNoYW5nZWQsIGRvIG1vbWVudHVtIGFuaW1hdGlvbiBub3chXHJcbiAgICAgICAgaWYgKG1ldGEubmV3WCAhPT0gcG9zLnggfHwgbWV0YS5uZXdZICE9PSBwb3MueSkge1xyXG4gICAgICAgICAgICAvLyBjaGFuZ2UgZWFzaW5nIGZ1bmN0aW9uIHdoZW4gc2Nyb2xsZXIgZ29lcyBvdXQgb2YgdGhlIGJvdW5kYXJpZXNcclxuICAgICAgICAgICAgaWYgKG1ldGEubmV3WCA+IHRoaXMuc2Nyb2xsQmVoYXZpb3JYLm1pblNjcm9sbFBvcyB8fFxyXG4gICAgICAgICAgICAgICAgbWV0YS5uZXdYIDwgdGhpcy5zY3JvbGxCZWhhdmlvclgubWF4U2Nyb2xsUG9zIHx8XHJcbiAgICAgICAgICAgICAgICBtZXRhLm5ld1kgPiB0aGlzLnNjcm9sbEJlaGF2aW9yWS5taW5TY3JvbGxQb3MgfHxcclxuICAgICAgICAgICAgICAgIG1ldGEubmV3WSA8IHRoaXMuc2Nyb2xsQmVoYXZpb3JZLm1heFNjcm9sbFBvcykge1xyXG4gICAgICAgICAgICAgICAgbWV0YS5lYXNpbmcgPSBlYXNlLnN3aXBlQm91bmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8obWV0YS5uZXdYLCBtZXRhLm5ld1ksIG1ldGEudGltZSwgbWV0YS5lYXNpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmNoZWNrQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vIHdoZW4gaW4gdGhlIHByb2Nlc3Mgb2YgcHVsbGluZyBkb3duLCBpdCBzaG91bGQgbm90IHByZXZlbnQgY2xpY2tcclxuICAgICAgICB2YXIgY2FuY2VsYWJsZSA9IHtcclxuICAgICAgICAgICAgcHJldmVudENsaWNrOiB0aGlzLmFuaW1hdGVyLmZvcmNlU3RvcHBlZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gd2Ugc2Nyb2xsZWQgbGVzcyB0aGFuIG1vbWVudHVtTGltaXREaXN0YW5jZSBwaXhlbHNcclxuICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5jaGVja0NsaWNrKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKCFjYW5jZWxhYmxlLnByZXZlbnRDbGljaykge1xyXG4gICAgICAgICAgICB2YXIgX2RibGNsaWNrID0gdGhpcy5vcHRpb25zLmRibGNsaWNrO1xyXG4gICAgICAgICAgICB2YXIgZGJsY2xpY2tUcmlnZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChfZGJsY2xpY2sgJiYgdGhpcy5sYXN0Q2xpY2tUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBfZGJsY2xpY2suZGVsYXksIGRlbGF5ID0gX2EgPT09IHZvaWQgMCA/IDMwMCA6IF9hO1xyXG4gICAgICAgICAgICAgICAgaWYgKGdldE5vdygpIC0gdGhpcy5sYXN0Q2xpY2tUaW1lIDwgZGVsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYmxjbGlja1RyaWdnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRibGNsaWNrKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGFwKSB7XHJcbiAgICAgICAgICAgICAgICB0YXAoZSwgdGhpcy5vcHRpb25zLnRhcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbGljayAmJlxyXG4gICAgICAgICAgICAgICAgIXByZXZlbnREZWZhdWx0RXhjZXB0aW9uRm4oZS50YXJnZXQsIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIGNsaWNrKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENsaWNrVGltZSA9IGRibGNsaWNrVHJpZ2dlZCA/IG51bGwgOiBnZXROb3coKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbnMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZpeCBhIHNjcm9sbCBwcm9ibGVtIHVuZGVyIEFuZHJvaWQgY29uZGl0aW9uXHJcbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xyXG4gICAgICAgICAgICB0aGlzLndyYXBwZXIuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCk7XHJcbiAgICAgICAgdGhpcy5yZXNpemVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmcpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS50cmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgIT09IHRoaXMuY29udGVudCB8fCAhdGhpcy5hbmltYXRlci5wZW5kaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFuaW1hdGVyID0gdGhpcy5hbmltYXRlcjtcclxuICAgICAgICBhbmltYXRlci50cmFuc2l0aW9uVGltZSgpO1xyXG4gICAgICAgIGlmICghdGhpcy5yZXNldFBvc2l0aW9uKHRoaXMub3B0aW9ucy5ib3VuY2VUaW1lLCBlYXNlLmJvdW5jZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlci5zZXRQZW5kaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcm9iZVR5cGUgIT09IFByb2JlLlJlYWx0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbEVuZCwgdGhpcy5nZXRDdXJyZW50UG9zKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS50b2dnbGVQb2ludGVyRXZlbnRzID0gZnVuY3Rpb24gKGVuYWJsZWQpIHtcclxuICAgICAgICBpZiAoZW5hYmxlZCA9PT0gdm9pZCAwKSB7IGVuYWJsZWQgPSB0cnVlOyB9XHJcbiAgICAgICAgdmFyIGVsID0gdGhpcy5jb250ZW50LmNoaWxkcmVuLmxlbmd0aFxyXG4gICAgICAgICAgICA/IHRoaXMuY29udGVudC5jaGlsZHJlblxyXG4gICAgICAgICAgICA6IFt0aGlzLmNvbnRlbnRdO1xyXG4gICAgICAgIHZhciBwb2ludGVyRXZlbnRzID0gZW5hYmxlZCA/ICdhdXRvJyA6ICdub25lJztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gZWxbaV07XHJcbiAgICAgICAgICAgIC8vIGlnbm9yZSBCZXR0ZXJTY3JvbGwgaW5zdGFuY2UncyB3cmFwcGVyIERPTVxyXG4gICAgICAgICAgICBpZiAobm9kZS5pc0JTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9IHBvaW50ZXJFdmVudHM7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYLnJlZnJlc2goKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWS5yZWZyZXNoKCk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zLnJlZnJlc2goKTtcclxuICAgICAgICB0aGlzLndyYXBwZXJPZmZzZXQgPSBvZmZzZXQodGhpcy53cmFwcGVyKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuc2Nyb2xsQnkgPSBmdW5jdGlvbiAoZGVsdGFYLCBkZWx0YVksIHRpbWUsIGVhc2luZykge1xyXG4gICAgICAgIGlmICh0aW1lID09PSB2b2lkIDApIHsgdGltZSA9IDA7IH1cclxuICAgICAgICB2YXIgX2EgPSB0aGlzLmdldEN1cnJlbnRQb3MoKSwgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgICAgIGVhc2luZyA9ICFlYXNpbmcgPyBlYXNlLmJvdW5jZSA6IGVhc2luZztcclxuICAgICAgICBkZWx0YVggKz0geDtcclxuICAgICAgICBkZWx0YVkgKz0geTtcclxuICAgICAgICB0aGlzLnNjcm9sbFRvKGRlbHRhWCwgZGVsdGFZLCB0aW1lLCBlYXNpbmcpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uICh4LCB5LCB0aW1lLCBlYXNpbmcsIGV4dHJhVHJhbnNmb3JtLCBpc1NpbGVudCkge1xyXG4gICAgICAgIGlmICh0aW1lID09PSB2b2lkIDApIHsgdGltZSA9IDA7IH1cclxuICAgICAgICBpZiAoZXh0cmFUcmFuc2Zvcm0gPT09IHZvaWQgMCkgeyBleHRyYVRyYW5zZm9ybSA9IHtcclxuICAgICAgICAgICAgc3RhcnQ6IHt9LFxyXG4gICAgICAgICAgICBlbmQ6IHt9XHJcbiAgICAgICAgfTsgfVxyXG4gICAgICAgIGVhc2luZyA9ICFlYXNpbmcgPyBlYXNlLmJvdW5jZSA6IGVhc2luZztcclxuICAgICAgICB2YXIgZWFzaW5nRm4gPSB0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbiA/IGVhc2luZy5zdHlsZSA6IGVhc2luZy5mbjtcclxuICAgICAgICB2YXIgY3VycmVudFBvcyA9IHRoaXMuZ2V0Q3VycmVudFBvcygpO1xyXG4gICAgICAgIHZhciBzdGFydFBvaW50ID0gX19hc3NpZ24oeyB4OiBjdXJyZW50UG9zLngsIHk6IGN1cnJlbnRQb3MueSB9LCBleHRyYVRyYW5zZm9ybS5zdGFydCk7XHJcbiAgICAgICAgdmFyIGVuZFBvaW50ID0gX19hc3NpZ24oeyB4OiB4LFxyXG4gICAgICAgICAgICB5OiB5IH0sIGV4dHJhVHJhbnNmb3JtLmVuZCk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxUbywgZW5kUG9pbnQpO1xyXG4gICAgICAgIGlmICghdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5pZ25vcmVEaXNNb3ZlRm9yU2FtZVBvcykpIHtcclxuICAgICAgICAgICAgLy8gaXQgaXMgYW4gdXNlbGVzcyBtb3ZlXHJcbiAgICAgICAgICAgIGlmIChzdGFydFBvaW50LnggPT09IGVuZFBvaW50LnggJiYgc3RhcnRQb2ludC55ID09PSBlbmRQb2ludC55KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltYXRlci5tb3ZlKHN0YXJ0UG9pbnQsIGVuZFBvaW50LCB0aW1lLCBlYXNpbmdGbiwgaXNTaWxlbnQpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5zY3JvbGxUb0VsZW1lbnQgPSBmdW5jdGlvbiAoZWwsIHRpbWUsIG9mZnNldFgsIG9mZnNldFksIGVhc2luZykge1xyXG4gICAgICAgIHZhciB0YXJnZXRFbGUgPSBnZXRFbGVtZW50KGVsKTtcclxuICAgICAgICB2YXIgcG9zID0gb2Zmc2V0KHRhcmdldEVsZSk7XHJcbiAgICAgICAgdmFyIGdldE9mZnNldCA9IGZ1bmN0aW9uIChvZmZzZXQsIHNpemUsIHdyYXBwZXJTaXplKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiBvZmZzZXRYL1kgYXJlIHRydWUgd2UgY2VudGVyIHRoZSBlbGVtZW50IHRvIHRoZSBzY3JlZW5cclxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldCA/IE1hdGgucm91bmQoc2l6ZSAvIDIgLSB3cmFwcGVyU2l6ZSAvIDIpIDogMDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9mZnNldFggPSBnZXRPZmZzZXQob2Zmc2V0WCwgdGFyZ2V0RWxlLm9mZnNldFdpZHRoLCB0aGlzLndyYXBwZXIub2Zmc2V0V2lkdGgpO1xyXG4gICAgICAgIG9mZnNldFkgPSBnZXRPZmZzZXQob2Zmc2V0WSwgdGFyZ2V0RWxlLm9mZnNldEhlaWdodCwgdGhpcy53cmFwcGVyLm9mZnNldEhlaWdodCk7XHJcbiAgICAgICAgdmFyIGdldFBvcyA9IGZ1bmN0aW9uIChwb3MsIHdyYXBwZXJQb3MsIG9mZnNldCwgc2Nyb2xsQmVoYXZpb3IpIHtcclxuICAgICAgICAgICAgcG9zIC09IHdyYXBwZXJQb3M7XHJcbiAgICAgICAgICAgIHBvcyA9IHNjcm9sbEJlaGF2aW9yLmFkanVzdFBvc2l0aW9uKHBvcyAtIG9mZnNldCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwb3M7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwb3MubGVmdCA9IGdldFBvcyhwb3MubGVmdCwgdGhpcy53cmFwcGVyT2Zmc2V0LmxlZnQsIG9mZnNldFgsIHRoaXMuc2Nyb2xsQmVoYXZpb3JYKTtcclxuICAgICAgICBwb3MudG9wID0gZ2V0UG9zKHBvcy50b3AsIHRoaXMud3JhcHBlck9mZnNldC50b3AsIG9mZnNldFksIHRoaXMuc2Nyb2xsQmVoYXZpb3JZKTtcclxuICAgICAgICBpZiAodGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxUb0VsZW1lbnQsIHRhcmdldEVsZSwgcG9zKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8ocG9zLmxlZnQsIHBvcy50b3AsIHRpbWUsIGVhc2luZyk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnJlc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAodGltZSwgZWFzaW5nKSB7XHJcbiAgICAgICAgaWYgKHRpbWUgPT09IHZvaWQgMCkgeyB0aW1lID0gMDsgfVxyXG4gICAgICAgIGVhc2luZyA9ICFlYXNpbmcgPyBlYXNlLmJvdW5jZSA6IGVhc2luZztcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnNjcm9sbEJlaGF2aW9yWC5jaGVja0luQm91bmRhcnkoKSwgeCA9IF9hLnBvc2l0aW9uLCB4SW5Cb3VuZGFyeSA9IF9hLmluQm91bmRhcnk7XHJcbiAgICAgICAgdmFyIF9iID0gdGhpcy5zY3JvbGxCZWhhdmlvclkuY2hlY2tJbkJvdW5kYXJ5KCksIHkgPSBfYi5wb3NpdGlvbiwgeUluQm91bmRhcnkgPSBfYi5pbkJvdW5kYXJ5O1xyXG4gICAgICAgIGlmICh4SW5Cb3VuZGFyeSAmJiB5SW5Cb3VuZGFyeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG91dCBvZiBib3VuZGFyeVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8oeCwgeSwgdGltZSwgZWFzaW5nKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUudXBkYXRlUG9zaXRpb25zID0gZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYLnVwZGF0ZVBvc2l0aW9uKHBvcy54KTtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWS51cGRhdGVQb3NpdGlvbihwb3MueSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmdldEN1cnJlbnRQb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9ucy5nZXRDdXJyZW50UG9zKCk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbnMuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlci50aW1lcik7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBrZXlzID0gW1xyXG4gICAgICAgICAgICAncmVzaXplUmVnaXN0ZXInLFxyXG4gICAgICAgICAgICAndHJhbnNpdGlvbkVuZFJlZ2lzdGVyJyxcclxuICAgICAgICAgICAgJ2FjdGlvbnNIYW5kbGVyJyxcclxuICAgICAgICAgICAgJ2FjdGlvbnMnLFxyXG4gICAgICAgICAgICAnaG9va3MnLFxyXG4gICAgICAgICAgICAnYW5pbWF0ZXInLFxyXG4gICAgICAgICAgICAndHJhbnNsYXRlcicsXHJcbiAgICAgICAgICAgICdzY3JvbGxCZWhhdmlvclgnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsQmVoYXZpb3JZJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIF90aGlzW2tleV0uZGVzdHJveSgpOyB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2Nyb2xsZXI7XHJcbn0oKSk7XG5cbnZhciBwcm9wZXJ0aWVzQ29uZmlnID0gW1xyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5jdXJyZW50UG9zJyxcclxuICAgICAgICBrZXk6ICd4J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclkuY3VycmVudFBvcycsXHJcbiAgICAgICAga2V5OiAneSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JYLmhhc1Njcm9sbCcsXHJcbiAgICAgICAga2V5OiAnaGFzSG9yaXpvbnRhbFNjcm9sbCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLmhhc1Njcm9sbCcsXHJcbiAgICAgICAga2V5OiAnaGFzVmVydGljYWxTY3JvbGwnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWC5jb250ZW50U2l6ZScsXHJcbiAgICAgICAga2V5OiAnc2Nyb2xsZXJXaWR0aCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLmNvbnRlbnRTaXplJyxcclxuICAgICAgICBrZXk6ICdzY3JvbGxlckhlaWdodCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JYLm1heFNjcm9sbFBvcycsXHJcbiAgICAgICAga2V5OiAnbWF4U2Nyb2xsWCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLm1heFNjcm9sbFBvcycsXHJcbiAgICAgICAga2V5OiAnbWF4U2Nyb2xsWSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JYLm1pblNjcm9sbFBvcycsXHJcbiAgICAgICAga2V5OiAnbWluU2Nyb2xsWCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLm1pblNjcm9sbFBvcycsXHJcbiAgICAgICAga2V5OiAnbWluU2Nyb2xsWSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JYLm1vdmluZ0RpcmVjdGlvbicsXHJcbiAgICAgICAga2V5OiAnbW92aW5nRGlyZWN0aW9uWCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLm1vdmluZ0RpcmVjdGlvbicsXHJcbiAgICAgICAga2V5OiAnbW92aW5nRGlyZWN0aW9uWSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JYLmRpcmVjdGlvbicsXHJcbiAgICAgICAga2V5OiAnZGlyZWN0aW9uWCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JZLmRpcmVjdGlvbicsXHJcbiAgICAgICAga2V5OiAnZGlyZWN0aW9uWSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuYWN0aW9ucy5lbmFibGVkJyxcclxuICAgICAgICBrZXk6ICdlbmFibGVkJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5hbmltYXRlci5wZW5kaW5nJyxcclxuICAgICAgICBrZXk6ICdwZW5kaW5nJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5hbmltYXRlci5zdG9wJyxcclxuICAgICAgICBrZXk6ICdzdG9wJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxUbycsXHJcbiAgICAgICAga2V5OiAnc2Nyb2xsVG8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJ5JyxcclxuICAgICAgICBrZXk6ICdzY3JvbGxCeSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsVG9FbGVtZW50JyxcclxuICAgICAgICBrZXk6ICdzY3JvbGxUb0VsZW1lbnQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnJlc2V0UG9zaXRpb24nLFxyXG4gICAgICAgIGtleTogJ3Jlc2V0UG9zaXRpb24nXHJcbiAgICB9XHJcbl07XG5cbnZhciBFbmZvcmNlT3JkZXI7XHJcbihmdW5jdGlvbiAoRW5mb3JjZU9yZGVyKSB7XHJcbiAgICBFbmZvcmNlT3JkZXJbXCJQcmVcIl0gPSBcInByZVwiO1xyXG4gICAgRW5mb3JjZU9yZGVyW1wiUG9zdFwiXSA9IFwicG9zdFwiO1xyXG59KShFbmZvcmNlT3JkZXIgfHwgKEVuZm9yY2VPcmRlciA9IHt9KSk7XG5cbnZhciBCU2Nyb2xsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEJTY3JvbGwsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBCU2Nyb2xsKGVsLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgW1xyXG4gICAgICAgICAgICAncmVmcmVzaCcsXHJcbiAgICAgICAgICAgICdlbmFibGUnLFxyXG4gICAgICAgICAgICAnZGlzYWJsZScsXHJcbiAgICAgICAgICAgICdiZWZvcmVTY3JvbGxTdGFydCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxTdGFydCcsXHJcbiAgICAgICAgICAgICdzY3JvbGwnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsRW5kJyxcclxuICAgICAgICAgICAgJ3Njcm9sbENhbmNlbCcsXHJcbiAgICAgICAgICAgICd0b3VjaEVuZCcsXHJcbiAgICAgICAgICAgICdmbGljaycsXHJcbiAgICAgICAgICAgICdkZXN0cm95J1xyXG4gICAgICAgIF0pIHx8IHRoaXM7XHJcbiAgICAgICAgdmFyIHdyYXBwZXIgPSBnZXRFbGVtZW50KGVsKTtcclxuICAgICAgICBpZiAoIXdyYXBwZXIpIHtcclxuICAgICAgICAgICAgd2FybignQ2FuIG5vdCByZXNvbHZlIHRoZSB3cmFwcGVyIERPTS4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29udGVudCA9IHdyYXBwZXIuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgIHdhcm4oJ1RoZSB3cmFwcGVyIG5lZWQgYXQgbGVhc3Qgb25lIGNoaWxkIGVsZW1lbnQgdG8gYmUgc2Nyb2xsZXIuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgX3RoaXMucGx1Z2lucyA9IHt9O1xyXG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucygpLm1lcmdlKG9wdGlvbnMpLnByb2Nlc3MoKTtcclxuICAgICAgICBfdGhpcy5ob29rcyA9IG5ldyBFdmVudEVtaXR0ZXIoW1xyXG4gICAgICAgICAgICAnaW5pdCcsXHJcbiAgICAgICAgICAgICdyZWZyZXNoJyxcclxuICAgICAgICAgICAgJ2VuYWJsZScsXHJcbiAgICAgICAgICAgICdkaXNhYmxlJyxcclxuICAgICAgICAgICAgJ2Rlc3Ryb3knXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgX3RoaXMuaW5pdCh3cmFwcGVyKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBCU2Nyb2xsLnVzZSA9IGZ1bmN0aW9uIChjdG9yKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBjdG9yLnBsdWdpbk5hbWU7XHJcbiAgICAgICAgdmFyIGluc3RhbGxlZCA9IHRoaXMucGx1Z2lucy5zb21lKGZ1bmN0aW9uIChwbHVnaW4pIHsgcmV0dXJuIGN0b3IgPT09IHBsdWdpbi5jdG9yOyB9KTtcclxuICAgICAgICBpZiAoaW5zdGFsbGVkKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoaXNVbmRlZihuYW1lKSkge1xyXG4gICAgICAgICAgICB3YXJuKFwiUGx1Z2luIENsYXNzIG11c3Qgc3BlY2lmeSBwbHVnaW4ncyBuYW1lIGluIHN0YXRpYyBwcm9wZXJ0eSBieSAncGx1Z2luTmFtZScgZmllbGQuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luc01hcFtuYW1lXSkge1xyXG4gICAgICAgICAgICB3YXJuKFwiVGhpcyBwbHVnaW4gaGFzIGJlZW4gcmVnaXN0ZXJlZCwgbWF5YmUgeW91IG5lZWQgY2hhbmdlIHBsdWdpbidzIG5hbWVcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsdWdpbnNNYXBbbmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGx1Z2lucy5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgZW5mb3JjZTogY3Rvci5lbmZvcmNlLFxyXG4gICAgICAgICAgICBjdG9yOiBjdG9yXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICh3cmFwcGVyKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gd3JhcHBlcjtcclxuICAgICAgICB3cmFwcGVyLmlzQlNjcm9sbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlciA9IG5ldyBTY3JvbGxlcih3cmFwcGVyLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRCdWJibGluZygpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQXV0b0JsdXIoKTtcclxuICAgICAgICB0aGlzLmlubmVyUmVmcmVzaCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG8odGhpcy5vcHRpb25zLnN0YXJ0WCwgdGhpcy5vcHRpb25zLnN0YXJ0WSk7XHJcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgICAgICB0aGlzLnByb3h5KHByb3BlcnRpZXNDb25maWcpO1xyXG4gICAgICAgIHRoaXMuYXBwbHlQbHVnaW5zKCk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUuYXBwbHlQbHVnaW5zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5wbHVnaW5zXHJcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgdmFyIGVuZm9yZU9yZGVyTWFwID0gKF9hID0ge30sXHJcbiAgICAgICAgICAgICAgICBfYVtFbmZvcmNlT3JkZXIuUHJlXSA9IC0xLFxyXG4gICAgICAgICAgICAgICAgX2FbRW5mb3JjZU9yZGVyLlBvc3RdID0gMSxcclxuICAgICAgICAgICAgICAgIF9hKTtcclxuICAgICAgICAgICAgdmFyIGFPcmRlciA9IGEuZW5mb3JjZSA/IGVuZm9yZU9yZGVyTWFwW2EuZW5mb3JjZV0gOiAwO1xyXG4gICAgICAgICAgICB2YXIgYk9yZGVyID0gYi5lbmZvcmNlID8gZW5mb3JlT3JkZXJNYXBbYi5lbmZvcmNlXSA6IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBhT3JkZXIgLSBiT3JkZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGN0b3IgPSBpdGVtLmN0b3I7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zW2l0ZW0ubmFtZV0gJiYgdHlwZW9mIGN0b3IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBsdWdpbnNbaXRlbS5uYW1lXSA9IG5ldyBjdG9yKF90aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmhhbmRsZUF1dG9CbHVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b0JsdXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbih0aGlzLmV2ZW50VHlwZXMuYmVmb3JlU2Nyb2xsU3RhcnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ0lOUFVUJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50LnRhZ05hbWUgPT09ICdURVhUQVJFQScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5ldmVudEJ1YmJsaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGJ1YmJsaW5nKHRoaXMuc2Nyb2xsZXIuaG9va3MsIHRoaXMsIFtcclxuICAgICAgICAgICAgJ2JlZm9yZVNjcm9sbFN0YXJ0JyxcclxuICAgICAgICAgICAgJ3Njcm9sbFN0YXJ0JyxcclxuICAgICAgICAgICAgJ3Njcm9sbCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxFbmQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsQ2FuY2VsJyxcclxuICAgICAgICAgICAgJ3RvdWNoRW5kJyxcclxuICAgICAgICAgICAgJ2ZsaWNrJ1xyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmlubmVyUmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyLnJlZnJlc2goKTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnJlZnJlc2gpO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmV2ZW50VHlwZXMucmVmcmVzaCk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUucHJveHkgPSBmdW5jdGlvbiAocHJvcGVydGllc0NvbmZpZykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcHJvcGVydGllc0NvbmZpZy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gX2Eua2V5LCBzb3VyY2VLZXkgPSBfYS5zb3VyY2VLZXk7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXNQcm94eShfdGhpcywgc291cmNlS2V5LCBrZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pbm5lclJlZnJlc2goKTtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyLnJlc2V0UG9zaXRpb24oKTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5lbmFibGUoKTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmVuYWJsZSk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuZXZlbnRUeXBlcy5lbmFibGUpO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5kaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5kaXNhYmxlKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5ldmVudFR5cGVzLmRpc2FibGUpO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5kZXN0cm95KTtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5ldmVudFR5cGVzLmRlc3Ryb3kpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmV2ZW50UmVnaXN0ZXIgPSBmdW5jdGlvbiAobmFtZXMpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyVHlwZShuYW1lcyk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wbHVnaW5zID0gW107XHJcbiAgICBCU2Nyb2xsLnBsdWdpbnNNYXAgPSB7fTtcclxuICAgIHJldHVybiBCU2Nyb2xsO1xyXG59KEV2ZW50RW1pdHRlcikpO1xuXG5leHBvcnQgZGVmYXVsdCBCU2Nyb2xsO1xuZXhwb3J0IHsgT3B0aW9ucyB9O1xuIiwiLyohXG4gKiBiZXR0ZXItc2Nyb2xsIC8gcHVsbC1kb3duXG4gKiAoYykgMjAxNi0yMDE5IHVzdGJodWFuZ3lpXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbnZhciBEaXJlY3Rpb247XHJcbihmdW5jdGlvbiAoRGlyZWN0aW9uKSB7XHJcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiUG9zaXRpdmVcIl0gPSAxXSA9IFwiUG9zaXRpdmVcIjtcclxuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJOZWdhdGl2ZVwiXSA9IC0xXSA9IFwiTmVnYXRpdmVcIjtcclxuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJEZWZhdWx0XCJdID0gMF0gPSBcIkRlZmF1bHRcIjtcclxufSkoRGlyZWN0aW9uIHx8IChEaXJlY3Rpb24gPSB7fSkpO1xuXG52YXIgUHJvYmU7XHJcbihmdW5jdGlvbiAoUHJvYmUpIHtcclxuICAgIFByb2JlW1Byb2JlW1wiRGVmYXVsdFwiXSA9IDBdID0gXCJEZWZhdWx0XCI7XHJcbiAgICBQcm9iZVtQcm9iZVtcIlRocm90dGxlXCJdID0gMV0gPSBcIlRocm90dGxlXCI7XHJcbiAgICBQcm9iZVtQcm9iZVtcIk5vcm1hbFwiXSA9IDJdID0gXCJOb3JtYWxcIjtcclxuICAgIFByb2JlW1Byb2JlW1wiUmVhbHRpbWVcIl0gPSAzXSA9IFwiUmVhbHRpbWVcIjtcclxufSkoUHJvYmUgfHwgKFByb2JlID0ge30pKTtcblxudmFyIGVhc2UgPSB7XHJcbiAgICAvLyBlYXNlT3V0UXVpbnRcclxuICAgIHN3aXBlOiB7XHJcbiAgICAgICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSknLFxyXG4gICAgICAgIGZuOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMSArIC0tdCAqIHQgKiB0ICogdCAqIHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIGVhc2VPdXRRdWFyZFxyXG4gICAgc3dpcGVCb3VuY2U6IHtcclxuICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KScsXHJcbiAgICAgICAgZm46IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ICogKDIgLSB0KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gZWFzZU91dFF1YXJ0XHJcbiAgICBib3VuY2U6IHtcclxuICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSknLFxyXG4gICAgICAgIGZuOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMSAtIC0tdCAqIHQgKiB0ICogdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbnZhciBzb3VyY2VQcmVmaXggPSAncGx1Z2lucy5wdWxsRG93blJlZnJlc2gnO1xyXG52YXIgcHJvcGVydGllc01hcCA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdmaW5pc2hQdWxsRG93bicsXHJcbiAgICAgICAgbmFtZTogJ2ZpbmlzaCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnb3BlblB1bGxEb3duJyxcclxuICAgICAgICBuYW1lOiAnb3BlbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnY2xvc2VQdWxsRG93bicsXHJcbiAgICAgICAgbmFtZTogJ2Nsb3NlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdhdXRvUHVsbERvd25SZWZyZXNoJyxcclxuICAgICAgICBuYW1lOiAnYXV0b1B1bGwnXHJcbiAgICB9XHJcbl07XHJcbnZhciBwcm9wZXJ0aWVzUHJveHlDb25maWcgPSBwcm9wZXJ0aWVzTWFwLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgIHNvdXJjZUtleTogc291cmNlUHJlZml4ICsgXCIuXCIgKyBpdGVtLm5hbWVcclxuICAgIH07XHJcbn0pO1xuXG52YXIgUHVsbERvd24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQdWxsRG93bihzY3JvbGwpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbCA9IHNjcm9sbDtcclxuICAgICAgICB0aGlzLnB1bGxpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAoc2Nyb2xsLm9wdGlvbnMucHVsbERvd25SZWZyZXNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnJlZ2lzdGVyVHlwZShbJ3B1bGxpbmdEb3duJ10pO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnByb3h5KHByb3BlcnRpZXNQcm94eUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBQdWxsRG93bi5wcm90b3R5cGUuX3dhdGNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOmcgOimgeiuvue9riBwcm9iZSA9IDMg5ZCX77yfXHJcbiAgICAgICAgLy8gbXVzdCB3YXRjaCBzY3JvbGwgaW4gcmVhbCB0aW1lXHJcbiAgICAgICAgdGhpcy5zY3JvbGwub3B0aW9ucy5wcm9iZVR5cGUgPSBQcm9iZS5SZWFsdGltZTtcclxuICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxlci5ob29rcy5vbignZW5kJywgdGhpcy5fY2hlY2tQdWxsRG93biwgdGhpcyk7XHJcbiAgICB9O1xyXG4gICAgUHVsbERvd24ucHJvdG90eXBlLl9jaGVja1B1bGxEb3duID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zY3JvbGwub3B0aW9ucy5wdWxsRG93blJlZnJlc2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnNjcm9sbC5vcHRpb25zXHJcbiAgICAgICAgICAgIC5wdWxsRG93blJlZnJlc2gsIF9iID0gX2EudGhyZXNob2xkLCB0aHJlc2hvbGQgPSBfYiA9PT0gdm9pZCAwID8gOTAgOiBfYiwgX2MgPSBfYS5zdG9wLCBzdG9wID0gX2MgPT09IHZvaWQgMCA/IDQwIDogX2M7XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgYSByZWFsIHB1bGwgZG93biBhY3Rpb25cclxuICAgICAgICBpZiAodGhpcy5zY3JvbGwuZGlyZWN0aW9uWSAhPT0gRGlyZWN0aW9uLk5lZ2F0aXZlIHx8XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnkgPCB0aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucHVsbGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnB1bGxpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbC50cmlnZ2VyKCdwdWxsaW5nRG93bicpO1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsTWluU2Nyb2xsWSA9IHRoaXMuc2Nyb2xsLm1pblNjcm9sbFk7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLm1pblNjcm9sbFkgPSBzdG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh0aGlzLnNjcm9sbC54LCBzdG9wLCB0aGlzLnNjcm9sbC5vcHRpb25zLmJvdW5jZVRpbWUsIGVhc2UuYm91bmNlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wdWxsaW5nO1xyXG4gICAgfTtcclxuICAgIFB1bGxEb3duLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwubWluU2Nyb2xsWSA9IHRoaXMub3JpZ2luYWxNaW5TY3JvbGxZO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnJlc2V0UG9zaXRpb24odGhpcy5zY3JvbGwub3B0aW9ucy5ib3VuY2VUaW1lLCBlYXNlLmJvdW5jZSk7XHJcbiAgICB9O1xyXG4gICAgUHVsbERvd24ucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHRydWU7IH1cclxuICAgICAgICB0aGlzLnNjcm9sbC5vcHRpb25zLnB1bGxEb3duUmVmcmVzaCA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl93YXRjaCgpO1xyXG4gICAgfTtcclxuICAgIFB1bGxEb3duLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbC5vcHRpb25zLnB1bGxEb3duUmVmcmVzaCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFB1bGxEb3duLnByb3RvdHlwZS5hdXRvUHVsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLnNjcm9sbC5vcHRpb25zXHJcbiAgICAgICAgICAgIC5wdWxsRG93blJlZnJlc2gsIF9iID0gX2EudGhyZXNob2xkLCB0aHJlc2hvbGQgPSBfYiA9PT0gdm9pZCAwID8gOTAgOiBfYiwgX2MgPSBfYS5zdG9wLCBzdG9wID0gX2MgPT09IHZvaWQgMCA/IDQwIDogX2M7XHJcbiAgICAgICAgaWYgKHRoaXMucHVsbGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHVsbGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbE1pblNjcm9sbFkgPSB0aGlzLnNjcm9sbC5taW5TY3JvbGxZO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLm1pblNjcm9sbFkgPSB0aHJlc2hvbGQ7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwuc2Nyb2xsVG8odGhpcy5zY3JvbGwueCwgdGhyZXNob2xkKTtcclxuICAgICAgICB0aGlzLnNjcm9sbC50cmlnZ2VyKCdwdWxsaW5nRG93bicpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbFRvKHRoaXMuc2Nyb2xsLngsIHN0b3AsIHRoaXMuc2Nyb2xsLm9wdGlvbnMuYm91bmNlVGltZSwgZWFzZS5ib3VuY2UpO1xyXG4gICAgfTtcclxuICAgIFB1bGxEb3duLnBsdWdpbk5hbWUgPSAncHVsbERvd25SZWZyZXNoJztcclxuICAgIHJldHVybiBQdWxsRG93bjtcclxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgUHVsbERvd247XG4iLCIvKiFcbiAqIGJldHRlci1zY3JvbGwgLyBwdWxsLXVwXG4gKiAoYykgMjAxNi0yMDE5IHVzdGJodWFuZ3lpXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbnZhciBEaXJlY3Rpb247XHJcbihmdW5jdGlvbiAoRGlyZWN0aW9uKSB7XHJcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiUG9zaXRpdmVcIl0gPSAxXSA9IFwiUG9zaXRpdmVcIjtcclxuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJOZWdhdGl2ZVwiXSA9IC0xXSA9IFwiTmVnYXRpdmVcIjtcclxuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJEZWZhdWx0XCJdID0gMF0gPSBcIkRlZmF1bHRcIjtcclxufSkoRGlyZWN0aW9uIHx8IChEaXJlY3Rpb24gPSB7fSkpO1xuXG52YXIgUHJvYmU7XHJcbihmdW5jdGlvbiAoUHJvYmUpIHtcclxuICAgIFByb2JlW1Byb2JlW1wiRGVmYXVsdFwiXSA9IDBdID0gXCJEZWZhdWx0XCI7XHJcbiAgICBQcm9iZVtQcm9iZVtcIlRocm90dGxlXCJdID0gMV0gPSBcIlRocm90dGxlXCI7XHJcbiAgICBQcm9iZVtQcm9iZVtcIk5vcm1hbFwiXSA9IDJdID0gXCJOb3JtYWxcIjtcclxuICAgIFByb2JlW1Byb2JlW1wiUmVhbHRpbWVcIl0gPSAzXSA9IFwiUmVhbHRpbWVcIjtcclxufSkoUHJvYmUgfHwgKFByb2JlID0ge30pKTtcblxudmFyIHNvdXJjZVByZWZpeCA9ICdwbHVnaW5zLnB1bGxVcExvYWQnO1xyXG52YXIgcHJvcGVydGllc01hcCA9IFtcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdmaW5pc2hQdWxsVXAnLFxyXG4gICAgICAgIG5hbWU6ICdmaW5pc2gnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ29wZW5QdWxsVXAnLFxyXG4gICAgICAgIG5hbWU6ICdvcGVuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdjbG9zZVB1bGxVcCcsXHJcbiAgICAgICAgbmFtZTogJ2Nsb3NlJ1xyXG4gICAgfVxyXG5dO1xyXG52YXIgcHJvcGVydGllc1Byb3h5Q29uZmlnID0gcHJvcGVydGllc01hcC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAga2V5OiBpdGVtLmtleSxcclxuICAgICAgICBzb3VyY2VLZXk6IHNvdXJjZVByZWZpeCArIFwiLlwiICsgaXRlbS5uYW1lXHJcbiAgICB9O1xyXG59KTtcblxudmFyIFB1bGxVcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFB1bGxVcChic2Nyb2xsKSB7XHJcbiAgICAgICAgdGhpcy5ic2Nyb2xsID0gYnNjcm9sbDtcclxuICAgICAgICB0aGlzLndhdGNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGJzY3JvbGwub3B0aW9ucy5wdWxsVXBMb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5yZWdpc3RlclR5cGUoWydwdWxsaW5nVXAnXSk7XHJcbiAgICAgICAgdGhpcy5ic2Nyb2xsLnByb3h5KHByb3BlcnRpZXNQcm94eUNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBQdWxsVXAucHJvdG90eXBlLl93YXRjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy53YXRjaGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG11c3Qgd2F0Y2ggc2Nyb2xsIGluIHJlYWwgdGltZVxyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5vcHRpb25zLnByb2JlVHlwZSA9IFByb2JlLlJlYWx0aW1lO1xyXG4gICAgICAgIHRoaXMud2F0Y2hpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5vbignc2Nyb2xsJywgdGhpcy5fY2hlY2tUb0VuZCwgdGhpcyk7XHJcbiAgICB9O1xyXG4gICAgUHVsbFVwLnByb3RvdHlwZS5fY2hlY2tUb0VuZCA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhpcy5ic2Nyb2xsLm9wdGlvbnMucHVsbFVwTG9hZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuYnNjcm9sbC5vcHRpb25zXHJcbiAgICAgICAgICAgIC5wdWxsVXBMb2FkLnRocmVzaG9sZCwgdGhyZXNob2xkID0gX2EgPT09IHZvaWQgMCA/IDAgOiBfYTtcclxuICAgICAgICBpZiAodGhpcy5ic2Nyb2xsLm1vdmluZ0RpcmVjdGlvblkgPT09IERpcmVjdGlvbi5Qb3NpdGl2ZSAmJlxyXG4gICAgICAgICAgICBwb3MueSA8PSB0aGlzLmJzY3JvbGwubWF4U2Nyb2xsWSArIHRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAvLyByZXNldCBwdWxsdXBXYXRjaGluZyBzdGF0dXMgYWZ0ZXIgc2Nyb2xsIGVuZCB0byBwcm9taXNlIHRoYXQgdHJpZ2dlciAncHVsbGluZ1VwJyBvbmx5IG9uY2Ugd2hlbiBwdWxsaW5nIHVwXHJcbiAgICAgICAgICAgIHRoaXMuYnNjcm9sbC5vbmNlKCdzY3JvbGxFbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy53YXRjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5ic2Nyb2xsLnRyaWdnZXIoJ3B1bGxpbmdVcCcpO1xyXG4gICAgICAgICAgICB0aGlzLmJzY3JvbGwub2ZmKCdzY3JvbGwnLCB0aGlzLl9jaGVja1RvRW5kKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUHVsbFVwLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5ic2Nyb2xsLm9uY2UoJ3Njcm9sbEVuZCcsIHRoaXMuX3dhdGNoLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFB1bGxVcC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0gdHJ1ZTsgfVxyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5vcHRpb25zLnB1bGxVcExvYWQgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5fd2F0Y2goKTtcclxuICAgIH07XHJcbiAgICBQdWxsVXAucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYnNjcm9sbC5vcHRpb25zLnB1bGxVcExvYWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMud2F0Y2hpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndhdGNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ic2Nyb2xsLm9mZignc2Nyb2xsJywgdGhpcy5fY2hlY2tUb0VuZCk7XHJcbiAgICB9O1xyXG4gICAgUHVsbFVwLnBsdWdpbk5hbWUgPSAncHVsbFVwTG9hZCc7XHJcbiAgICByZXR1cm4gUHVsbFVwO1xyXG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBQdWxsVXA7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImltcG9ydCBFcnJvcmh0bWwgZnJvbSAnLi4vLi4vdmlld3MvZXJyb3IvZXJyb3IuaHRtbCc7XG5cbmNsYXNzIFNlYXJjaENvbnRyb2xsZXJ7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICAkKCcjbWFpbi1jb250YWluZXInKS5odG1sKEVycm9yaHRtbClcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgU2VhcmNoQ29udHJvbGxlcigpIiwiaW1wb3J0IEJTY3JvbGwgZnJvbSAnQGJldHRlci1zY3JvbGwvY29yZSdcbmltcG9ydCBQdWxsdXAgZnJvbSAnQGJldHRlci1zY3JvbGwvcHVsbC11cCdcbmltcG9ydCBQdWxsRG93biBmcm9tICdAYmV0dGVyLXNjcm9sbC9wdWxsLWRvd24nXG5cbmltcG9ydCBwb3NpdGlvbmh0bWwgZnJvbSAnLi4vLi4vdmlld3MvcG9zaXRpb24vcG9zaXRpb25saXN0Lmh0bWwnXG5pbXBvcnQgaXRlbUh0bWwgZnJvbSAnLi4vLi4vdmlld3MvcG9zaXRpb24vcG9zaXRpb25saXN0LWl0ZW0uaHRtbCdcbmltcG9ydCBmZXRjaCBmcm9tICcuLi9tb2RlbC9GZXRjaCdcblxuQlNjcm9sbC51c2UoUHVsbHVwKSAvLyDlupXpg6jkuIvmi4lcbkJTY3JvbGwudXNlKFB1bGxEb3duKSAvL+mhtumDqOS4i+aLiVxuXG5jbGFzcyBQb3NpdGlvbkNvbnRyb2xsZXIge1xuXG4gIGdldGxpc3QoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNsb3ZlLCByZWplY3QpID0+IHtcbiAgICAgICQoXCIjbG9hZGluZ1wiKS5zaG93KCk7XG4gICAgICBsZXQgcnMgPSBhd2FpdCBmZXRjaC5nZXRQb3NpdGlvbkxpc3QoKTtcbiAgICAgIGxldCBodG1sID0gdGVtcGxhdGUucmVuZGVyKGl0ZW1IdG1sLCB7IGxpc3Q6IHJzLmNvbnRlbnQuZGF0YS5wYWdlLnJlc3VsdCB9KVxuICAgICAgJChcIiNsaXN0LWNvbnRhaW5lclwiKS5odG1sKGh0bWwpXG4gICAgICAkKFwiI2xvYWRpbmdcIikuaGlkZSgpO1xuICAgICAgcmVzbG92ZSgpO1xuICAgIH0pXG4gIH1cblxuICBhc3luYyByZW5kZXIoKSB7XG4gICAgJChcIiNtYWluLWNvbnRhaW5lclwiKS5odG1sKHBvc2l0aW9uaHRtbClcbiAgICBsZXQgJGhlYWQgPSAkKFwiI21haW4tY29udGFpbmVyIC5oZWFkXCIpO1xuICAgIGF3YWl0IHRoaXMuZ2V0bGlzdCgpO1xuXG4gICAgdGhpcy5zY3JvbGwgPSBuZXcgQlNjcm9sbCgnI3Bvc2l0aW9uLXdyYXBwZXInLCB7XG4gICAgICBzY3JvbGxZOiB0cnVlLFxuICAgICAgcHJvYmVUeXBlOiAzLFxuICAgICAgcHVsbERvd25SZWZyZXNoOiB7XG4gICAgICAgIHRocmVzaG9sZDogNTBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zY3JvbGwub24oJ3B1bGxpbmdEb3duJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3B1bGxpbmdEb3duJylcbiAgICAgIGF3YWl0IHRoaXMuZ2V0bGlzdCgpXG4gICAgICB0aGlzLnNjcm9sbC5maW5pc2hQdWxsRG93bigpIC8vIOWbnuiwg+e7k+adn+W/hemhu+aciVxuICAgIH0pXG5cbiAgICB0aGlzLnNjcm9sbC5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMueSA+IDEwICYmIHRoaXMueSA8IDUwKSB7XG4gICAgICAgICRoZWFkLnNob3coKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy55ID4gNTApIHtcbiAgICAgICAgJGhlYWQuZmluZCgnaW1nJykuYXR0cignc3JjJywgJy4vaW1hZ2VzL2xvYWRpbmcuZ2lmJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkaGVhZC5oaWRlKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUG9zaXRpb25Db250cm9sbGVyKCk7IiwiaW1wb3J0IHByb2ZpbGVodG1sIGZyb20gJy4uLy4uL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZS5odG1sJztcbmltcG9ydCBGZXRjaCBmcm9tICcuLi9tb2RlbC9GZXRjaC5qcyc7XG5cbmNsYXNzIFByb2ZpbGVDb250cm9sbGVye1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgLy8gbGV0IGRhdGEgPSBhd2FpdCBGZXRjaC5nZXRwcm9maWxlTGlzdCgpO1xuICAgICAgICAvLyBsZXQgaHRtbCA9IHRlbXBsYXRlLnJlbmRlcihwcm9maWxlaHRtbCwgeyBsaXN0OiBkYXRhLnJlc3VsdCB9KVxuICAgICAgICAkKCcjbWFpbi1jb250YWluZXInKS5odG1sKCdwcm9maWxlJylcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvZmlsZUNvbnRyb2xsZXIoKSIsImltcG9ydCBTZWFyY2hodG1sIGZyb20gJy4uLy4uL3ZpZXdzL1NlYXJjaC9TZWFyY2guaHRtbCc7XG5pbXBvcnQgRmV0Y2ggZnJvbSAnLi4vbW9kZWwvRmV0Y2guanMnO1xuXG5jbGFzcyBTZWFyY2hDb250cm9sbGVye1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgJCgnI21haW4tY29udGFpbmVyJykuaHRtbCgnc2VhcmNoJylcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgU2VhcmNoQ29udHJvbGxlcigpIiwiaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlci9Sb3V0ZXInXG5cbmNsYXNzIEluZGV4IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRFdmVudCgpO1xuICB9XG5cbiAgaW5pdEV2ZW50KCkge1xuICAgICQoXCIjaW5kZXhfbmF2IGxpXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgbGV0IGhhc2ggPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaGFzaCcpO1xuICAgICAgUm91dGVyLmdvKGhhc2gpXG4gICAgfSlcbiAgfVxuXG59XG5cbm5ldyBJbmRleCgpIiwiY2xhc3MgRmV0Y2gge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG4gIGdldFBvc2l0aW9uTGlzdCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiAnL2ZldGNoL2xpc3Rtb3JlLmpzb24/cGFnZU5vPTEmcGFnZVNpemU9MTUnLFxuICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgc3VjY2VzcyhfZGF0YSkge1xuICAgICAgICAgIHJlc29sdmUoX2RhdGEpXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yKF9kYXRhKSB7XG4gICAgICAgICAgcmVqZWN0KF9kYXRhKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBGZXRjaCgpIiwiaW1wb3J0IFBvc2l0aW9uQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVyL1Bvc2l0aW9uQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgUHJvZmlsZUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9Qcm9maWxlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgU2VhcmNoQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVyL1NlYXJjaENvbnRyb2xsZXIuanMnO1xuaW1wb3J0IEVycm9yQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVyL0Vycm9yQ29udHJvbGxlcidcblxuY29uc3QgTU9ERSA9ICdoYXNoJztcblxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXMgPSB7XG4gICAgICAgICAgICAncG9zaXRpb24nOiBQb3NpdGlvbkNvbnRyb2xsZXIsXG4gICAgICAgICAgICAnc2VhcmNoJzogU2VhcmNoQ29udHJvbGxlcixcbiAgICAgICAgICAgICdwcm9maWxlJzogUHJvZmlsZUNvbnRyb2xsZXJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xuICAgICAgICBQb3NpdGlvbkNvbnRyb2xsZXIucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgbG9hZFZpZXcocGF0aCkge1xuICAgICAgICBpZiAodGhpcy5yb3V0ZXNbcGF0aF0pIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVzW3BhdGhdLnJlbmRlcigpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBFcnJvckNvbnRyb2xsZXIucmVuZGVyKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdvKHBhdGgpIHtcbiAgICAgICAgaWYgKE1PREUgPT09ICdoYXNoJykge1xuICAgICAgICAgICAgbG9jYXRpb24uaGFzaCA9IHBhdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7IHBhdGggfSwgJycsIHBhdGgpXG4gICAgICAgICAgICB0aGlzLmxvYWRWaWV3KHBhdGgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RXZlbnQoKSB7XG4gICAgICAgIGlmIChNT0RFID09PSAnaGFzaCcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uLmhhc2gpXG4gICAgICAgICAgICAgICAgbGV0IGhhc2ggPSBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVmlldyhoYXNoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRWaWV3KGhpc3Rvcnkuc3RhdGUucGF0aClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgUm91dGVyKCkiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gICAgcGFnZSBub3QgZm91bmQ8L2Rpdj5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8JSBmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7ICU+PGRpdiBjbGFzcz1cXFwiaXRlbVxcXCI+ICAgIDxkaXYgY2xhc3M9XFxcImxvZ29cXFwiPiAgICAgICAgPGltZyBzcmM9XFxcImh0dHBzOi8vd3d3Lmxnc3RhdGljLmNvbS88JT1saXN0W2ldLmNvbXBhbnlMb2dvICU+XFxcIiBhbHQ9XFxcIlxcXCI+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjXFxcIj4gICAgICAgIDxoMj48JT1saXN0W2ldLmNvbXBhbnlOYW1lICU+PC9oMj4gICAgICAgIDxwPjwlPWxpc3RbaV1bXFwncG9zaXRpb25OYW1lXFwnXSAlPiBbIDwlPWxpc3RbaV1bXFwnY2l0eVxcJ10gJT4gXTwvcD4gICAgICAgIDxwPjwlPWxpc3RbaV1bXFwnY3JlYXRlVGltZVxcJ10gJT48L3A+ICAgIDwvZGl2PiAgICA8ZGl2IGNsYXNzPVxcXCJzYWxhcnlcXFwiPiAgICAgICAgPCU9bGlzdFtpXVtcXCdzYWxhcnlcXCddICU+ICAgIDwvZGl2PjwvZGl2PjwlIH0gJT5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJwb3NpdGlvbi13cmFwcGVyXFxcIj4gICAgPGRpdj4gICAgICAgIDxkaXYgaWQ9XFxcImxvYWRpbmdcXFwiPiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi9pbWFnZXMvbG9hZGluZy5naWZcXFwiIGFsdD1cXFwiXFxcIj4gICAgICAgIDwvZGl2PiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZFxcXCI+ICAgICAgICAgICAgPGltZyBzcmM9XFxcIi4uL2ltYWdlcy9hcnJvdy5wbmdcXFwiIGFsdD1cXFwiXFxcIj4gICAgICAgICAgICDkuIvmi4nliLfmlrAgICAgICAgIDwvZGl2PiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY3VzdG9tXFxcIj4gICAgICAgICAgICA8c3Bhbj4gICAgICAgICAgICAgICAgMTDnp5Lpkp/lrprliLbogYzkvY0gICAgICAgICAgICA8L3NwYW4+ICAgICAgICAgICAgPGJ1dHRvbj7ljrvnmbvlvZU8L2J1dHRvbj4gICAgICAgIDwvZGl2PiAgICAgICAgPGRpdiBpZD1cXFwibGlzdC1jb250YWluZXJcXFwiPiAgICAgICAgPC9kaXY+ICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290XFxcIj4gICAgICAgICAgICDliqDovb3mm7TlpJouLi4gICAgICAgIDwvZGl2PiAgICA8L2Rpdj48L2Rpdj5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiJdLCJzb3VyY2VSb290IjoiIn0=