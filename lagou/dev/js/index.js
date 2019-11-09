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

    this.pageNo = 1;
    this.dataList = [];
    this.total = 0;
    this.initEvent();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PositionController, [{
    key: "initEvent",
    value: function initEvent() {
      $('#main-container').on('click', '.item', function () {
        // 事件委托
        var id = $(this).attr('data-id');
        location.href = "/detail.html?".concat(id);
      });
    }
  }, {
    key: "getlist",
    value: function getlist() {
      var _this = this;

      var pageSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
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
                  return _model_Fetch__WEBPACK_IMPORTED_MODULE_9__["default"].getPositionList(_this.pageNo, pageSize);

                case 3:
                  rs = _context.sent;
                  _this.total = rs.content.data.page.totalCount;
                  _this.dataList = _this.dataList.concat(rs.content.data.page.result);
                  html = template.render(_views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_8___default.a, {
                    list: _this.dataList
                  });
                  $("#list-container").html(html);
                  $("#loading").hide();
                  reslove();

                case 10:
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _this2 = this;

        var $head;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                $("#main-container").html(_views_position_positionlist_html__WEBPACK_IMPORTED_MODULE_7___default.a);
                $head = $("#main-container .head");
                _context4.next = 4;
                return this.getlist();

              case 4:
                this.scroll = new _better_scroll_core__WEBPACK_IMPORTED_MODULE_4__["default"]('#position-wrapper', {
                  scrollY: true,
                  probeType: 3,
                  pullUpLoad: true,
                  click: true,
                  pullDownRefresh: {
                    threshold: 50
                  }
                }); // 上拉刷新

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
                          _this2.pageNo = 1;
                          _this2.dataList = [];
                          _context2.next = 5;
                          return _this2.getlist();

                        case 5:
                          _this2.scroll.finishPullDown(); // 回调结束必须有


                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }))); // 下拉加载更多

                this.scroll.on('pullingUp',
                /*#__PURE__*/
                _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                /*#__PURE__*/
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _this2.pageNo++;
                          _context3.next = 3;
                          return _this2.getlist();

                        case 3:
                          _this2.scroll.finishPullUp();

                          _this2.scroll.refresh();

                          if (_this2.dataList.length === _this2.total) {
                            $('#main-container .foot').hide(); // 加载完了
                          }

                        case 6:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
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

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_Search_Search_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/Search/Search.html */ "./src/views/Search/Search.html");
/* harmony import */ var _views_Search_Search_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_views_Search_Search_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/position/positionlist-item.html */ "./src/views/position/positionlist-item.html");
/* harmony import */ var _views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _model_Fetch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/Fetch.js */ "./src/js/model/Fetch.js");








var SearchController =
/*#__PURE__*/
function () {
  function SearchController() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SearchController);

    this.pageNo = 1;
    this.total = 0;
    this.dataList = [];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SearchController, [{
    key: "getlist",
    value: function getlist() {
      var _this = this;

      var pageSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;
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
                  $("#loading").show(); // let rs = await Fetch.getSearchList({
                  //     city: '全国',
                  //     positionName: '前端',
                  //     pageNo: this.pageNo,
                  //     pageSize: pageSize
                  // });

                  _context.next = 3;
                  return _model_Fetch_js__WEBPACK_IMPORTED_MODULE_6__["default"].getPositionList(_this.pageNo, pageSize);

                case 3:
                  rs = _context.sent;
                  _this.total = Number(rs.content.data.page.totalCount);
                  _this.dataList = _this.dataList.concat(rs.content.data.page.result);
                  html = template.render(_views_position_positionlist_item_html__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    list: _this.dataList
                  });
                  $("#list-container").html(html);
                  $("#loading").hide();
                  reslove();

                case 10:
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                $("#main-container").html(_views_Search_Search_html__WEBPACK_IMPORTED_MODULE_4___default.a); // await this.getlist()
                // $('#main-container').html('search')

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
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
    value: function getPositionList(pageNo) {
      var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
      return new Promise(function (resolve, reject) {
        $.ajax({
          url: "/fetch/listmore.json?pageNo=".concat(pageNo, "&pageSize=").concat(pageSize),
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
  }, {
    key: "getSearchList",
    value: function getSearchList(params) {
      var city = params.city,
          positionName = params.positionName,
          pageNo = params.pageNo,
          pageSize = params.pageSize;
      var enUrl = encodeURI("/fetch/search.json?city=".concat(city, "&positionName=").concat(positionName, "&pageNo=").concat(pageNo, "&pageSize=").concat(pageSize));
      console.log(enUrl);
      return new Promise(function (resolve, reject) {
        $.ajax({
          url: enUrl,
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
    _controller_SearchController_js__WEBPACK_IMPORTED_MODULE_4__["default"].render();
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

module.exports = "<div id=\"search\">    <div class=\"linputer\">        <div class=\"lbutton\">            <span class=\"city\">全国</span>            <span class=\"cityicon\"></span>        </div>        <div class=\"rinput\">            <input type=\"text\" class=\"inputer\" placeholder=\"搜索职位或公司\">            <i>&#xe501;</i>        </div>    </div>    <div class=\"listcon\">        <div class=\"custominfo\">将搜索地区和关键词设为定制条件</div>        <div id=\"list-container\">        </div>    </div></div>"

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

module.exports = "<% for(var i = 0; i < list.length; i++){ %><div class=\"item\" data-id=<%=list[i].positionId %> >    <div class=\"logo\">        <img src=\"https://www.lgstatic.com/<%=list[i].companyLogo %>\" alt=\"\">    </div>    <div class=\"desc\">        <h2><%=list[i].companyName %></h2>        <p><%=list[i][\'positionName\'] %> [ <%=list[i][\'city\'] %> ]</p>        <p><%=list[i][\'createTime\'] %></p>    </div>    <div class=\"salary\">        <%=list[i][\'salary\'] %>    </div></div><% } %>"

/***/ }),

/***/ "./src/views/position/positionlist.html":
/*!**********************************************!*\
  !*** ./src/views/position/positionlist.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"position-wrapper\">    <div>                <div class=\"head\">            <img src=\"../images/arrow.png\" alt=\"\">            下拉刷新        </div>        <div class=\"custom\">            <span>                10秒钟定制职位            </span>            <button>去登录</button>        </div>        <div id=\"list-container\">        </div>        <div class=\"foot\">            加载更多...        </div>    </div></div>"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiZXR0ZXItc2Nyb2xsL2NvcmUvZGlzdC9jb3JlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJldHRlci1zY3JvbGwvcHVsbC1kb3duL2Rpc3QvcHVsbC1kb3duLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJldHRlci1zY3JvbGwvcHVsbC11cC9kaXN0L3B1bGwtdXAuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbnRyb2xsZXIvRXJyb3JDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb250cm9sbGVyL1Bvc2l0aW9uQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udHJvbGxlci9Qcm9maWxlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29udHJvbGxlci9TZWFyY2hDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kZWwvRmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JvdXRlci9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL1NlYXJjaC9TZWFyY2guaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZXJyb3IvZXJyb3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9zaXRpb24vcG9zaXRpb25saXN0LWl0ZW0uaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9zaXRpb24vcG9zaXRpb25saXN0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Byb2ZpbGUvcHJvZmlsZS5odG1sIl0sIm5hbWVzIjpbIlNlYXJjaENvbnRyb2xsZXIiLCIkIiwiaHRtbCIsIkVycm9yaHRtbCIsIkJTY3JvbGwiLCJ1c2UiLCJQdWxsdXAiLCJQdWxsRG93biIsIlBvc2l0aW9uQ29udHJvbGxlciIsInBhZ2VObyIsImRhdGFMaXN0IiwidG90YWwiLCJpbml0RXZlbnQiLCJvbiIsImlkIiwiYXR0ciIsImxvY2F0aW9uIiwiaHJlZiIsInBhZ2VTaXplIiwiUHJvbWlzZSIsInJlc2xvdmUiLCJyZWplY3QiLCJzaG93IiwiZmV0Y2giLCJnZXRQb3NpdGlvbkxpc3QiLCJycyIsImNvbnRlbnQiLCJkYXRhIiwicGFnZSIsInRvdGFsQ291bnQiLCJjb25jYXQiLCJyZXN1bHQiLCJ0ZW1wbGF0ZSIsInJlbmRlciIsIml0ZW1IdG1sIiwibGlzdCIsImhpZGUiLCJwb3NpdGlvbmh0bWwiLCIkaGVhZCIsImdldGxpc3QiLCJzY3JvbGwiLCJzY3JvbGxZIiwicHJvYmVUeXBlIiwicHVsbFVwTG9hZCIsImNsaWNrIiwicHVsbERvd25SZWZyZXNoIiwidGhyZXNob2xkIiwiY29uc29sZSIsImxvZyIsImZpbmlzaFB1bGxEb3duIiwiZmluaXNoUHVsbFVwIiwicmVmcmVzaCIsImxlbmd0aCIsInkiLCJmaW5kIiwiUHJvZmlsZUNvbnRyb2xsZXIiLCJGZXRjaCIsIk51bWJlciIsIlNlYXJjaEh0bWwiLCJJbmRleCIsImFkZENsYXNzIiwic2libGluZ3MiLCJyZW1vdmVDbGFzcyIsImhhc2giLCJSb3V0ZXIiLCJnbyIsInJlc29sdmUiLCJhamF4IiwidXJsIiwidHlwZSIsInN1Y2Nlc3MiLCJfZGF0YSIsImVycm9yIiwicGFyYW1zIiwiY2l0eSIsInBvc2l0aW9uTmFtZSIsImVuVXJsIiwiZW5jb2RlVVJJIiwiTU9ERSIsInJvdXRlcyIsInBhdGgiLCJFcnJvckNvbnRyb2xsZXIiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwibG9hZFZpZXciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVwbGFjZSIsInN0YXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7Ozs7Ozs7O0FDaEJBLGlCQUFpQixtQkFBTyxDQUFDLDBFQUFxQjs7Ozs7Ozs7Ozs7OztBQ0E5QztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLHlCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEY7QUFDNUYsU0FBUztBQUNULENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULENBQUM7O0FBRUQsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZ0JBQWdCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4Qjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0M7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4Qjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNCQUFzQjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekM7QUFDQSwyRUFBMkUsYUFBYTtBQUN4RjtBQUNBO0FBQ0EsaUVBQWlFLGFBQWE7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHdCQUF3QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDbkMsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCO0FBQzNCLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdCQUFnQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEMsd0NBQXdDO0FBQ3hDLHFCQUFxQjtBQUNyQjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUNBQW1DO0FBQ3RFLGlDQUFpQztBQUNqQyxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw2QkFBNkIsRUFBRTtBQUNwRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCw2QkFBNkIsRUFBRTtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLHNFQUFPLEVBQUM7QUFDSjs7Ozs7Ozs7Ozs7OztBQ3JoRW5CO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4Qjs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQkFBc0I7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyx1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDeEl4QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0JBQXNCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWMscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7O0FDdkd0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcnRCQTs7SUFFTUEsZ0I7OztBQUNGLDhCQUFlO0FBQUE7QUFFZDs7Ozs2QkFDTztBQUNKQyxPQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkMsSUFBckIsQ0FBMEJDLDhEQUExQjtBQUNIOzs7Ozs7QUFFVSxtRUFBSUgsZ0JBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQUksMkRBQU8sQ0FBQ0MsR0FBUixDQUFZQyw4REFBWixFLENBQW9COztBQUNwQkYsMkRBQU8sQ0FBQ0MsR0FBUixDQUFZRSxnRUFBWixFLENBQXNCOztJQUVoQkMsa0I7OztBQUNKLGdDQUFjO0FBQUE7O0FBQ1osU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxTQUFMO0FBQ0Q7Ozs7Z0NBRVc7QUFDVlgsT0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJZLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLFlBQVk7QUFBRTtBQUN0RCxZQUFJQyxFQUFFLEdBQUdiLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWMsSUFBUixDQUFhLFNBQWIsQ0FBVDtBQUNBQyxnQkFBUSxDQUFDQyxJQUFULDBCQUFnQ0gsRUFBaEM7QUFDRCxPQUhEO0FBSUQ7Ozs4QkFFc0I7QUFBQTs7QUFBQSxVQUFmSSxRQUFlLHVFQUFKLEVBQUk7QUFDckIsYUFBTyxJQUFJQyxPQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRUFBWSxpQkFBT0MsT0FBUCxFQUFnQkMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCcEIsbUJBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY3FCLElBQWQ7QUFEaUI7QUFBQSx5QkFFRkMsb0RBQUssQ0FBQ0MsZUFBTixDQUFzQixLQUFJLENBQUNmLE1BQTNCLEVBQW1DUyxRQUFuQyxDQUZFOztBQUFBO0FBRWJPLG9CQUZhO0FBR2pCLHVCQUFJLENBQUNkLEtBQUwsR0FBYWMsRUFBRSxDQUFDQyxPQUFILENBQVdDLElBQVgsQ0FBZ0JDLElBQWhCLENBQXFCQyxVQUFsQztBQUNBLHVCQUFJLENBQUNuQixRQUFMLEdBQWdCLEtBQUksQ0FBQ0EsUUFBTCxDQUFjb0IsTUFBZCxDQUFxQkwsRUFBRSxDQUFDQyxPQUFILENBQVdDLElBQVgsQ0FBZ0JDLElBQWhCLENBQXFCRyxNQUExQyxDQUFoQjtBQUNJN0Isc0JBTGEsR0FLTjhCLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsNkVBQWhCLEVBQTBCO0FBQUVDLHdCQUFJLEVBQUUsS0FBSSxDQUFDekI7QUFBYixtQkFBMUIsQ0FMTTtBQU1qQlQsbUJBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCQyxJQUFyQixDQUEwQkEsSUFBMUI7QUFDQUQsbUJBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY21DLElBQWQ7QUFDQWhCLHlCQUFPOztBQVJVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVVEOzs7Ozs7Ozs7Ozs7OztBQUdDbkIsaUJBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCQyxJQUFyQixDQUEwQm1DLHdFQUExQjtBQUNJQyxxQixHQUFRckMsQ0FBQyxDQUFDLHVCQUFELEM7O3VCQUNQLEtBQUtzQyxPQUFMLEU7OztBQUVOLHFCQUFLQyxNQUFMLEdBQWMsSUFBSXBDLDJEQUFKLENBQVksbUJBQVosRUFBaUM7QUFDN0NxQyx5QkFBTyxFQUFFLElBRG9DO0FBRTdDQywyQkFBUyxFQUFFLENBRmtDO0FBRzdDQyw0QkFBVSxFQUFFLElBSGlDO0FBSTdDQyx1QkFBSyxFQUFFLElBSnNDO0FBSzdDQyxpQ0FBZSxFQUFFO0FBQ2ZDLDZCQUFTLEVBQUU7QUFESTtBQUw0QixpQkFBakMsQ0FBZCxDLENBVUE7O0FBQ0EscUJBQUtOLE1BQUwsQ0FBWTNCLEVBQVosQ0FBZSxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUZBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNUJrQyxpQ0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBLGdDQUFJLENBQUN2QyxNQUFMLEdBQWMsQ0FBZDtBQUNBLGdDQUFJLENBQUNDLFFBQUwsR0FBZ0IsRUFBaEI7QUFINEI7QUFBQSxpQ0FJdEIsTUFBSSxDQUFDNkIsT0FBTCxFQUpzQjs7QUFBQTtBQUs1QixnQ0FBSSxDQUFDQyxNQUFMLENBQVlTLGNBQVosR0FMNEIsQ0FLQzs7O0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTlCLEksQ0FRQTs7QUFDQSxxQkFBS1QsTUFBTCxDQUFZM0IsRUFBWixDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RkFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMxQixnQ0FBSSxDQUFDSixNQUFMO0FBRDBCO0FBQUEsaUNBRXBCLE1BQUksQ0FBQzhCLE9BQUwsRUFGb0I7O0FBQUE7QUFHMUIsZ0NBQUksQ0FBQ0MsTUFBTCxDQUFZVSxZQUFaOztBQUNBLGdDQUFJLENBQUNWLE1BQUwsQ0FBWVcsT0FBWjs7QUFDQSw4QkFBSSxNQUFJLENBQUN6QyxRQUFMLENBQWMwQyxNQUFkLEtBQXlCLE1BQUksQ0FBQ3pDLEtBQWxDLEVBQXlDO0FBQ3ZDViw2QkFBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJtQyxJQUEzQixHQUR1QyxDQUNMO0FBQ25DOztBQVB5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBNUI7QUFVQSxxQkFBS0ksTUFBTCxDQUFZM0IsRUFBWixDQUFlLFFBQWYsRUFBeUIsWUFBWTtBQUNuQyxzQkFBSSxLQUFLd0MsQ0FBTCxHQUFTLEVBQVQsSUFBZSxLQUFLQSxDQUFMLEdBQVMsRUFBNUIsRUFBZ0M7QUFDOUJmLHlCQUFLLENBQUNoQixJQUFOO0FBQ0QsbUJBRkQsTUFFTyxJQUFJLEtBQUsrQixDQUFMLEdBQVMsRUFBYixFQUFpQjtBQUN0QmYseUJBQUssQ0FBQ2dCLElBQU4sQ0FBVyxLQUFYLEVBQWtCdkMsSUFBbEIsQ0FBdUIsS0FBdkIsRUFBOEIsc0JBQTlCO0FBQ0QsbUJBRk0sTUFFQTtBQUNMdUIseUJBQUssQ0FBQ0YsSUFBTjtBQUNEO0FBQ0YsaUJBUkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlXLG1FQUFJNUIsa0JBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQ0E7O0lBRU0rQyxpQjs7O0FBQ0YsK0JBQWU7QUFBQTtBQUVkOzs7OzZCQUNPO0FBQ0o7QUFDQTtBQUNBdEQsT0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJDLElBQXJCLENBQTBCLFNBQTFCO0FBQ0g7Ozs7OztBQUVVLG1FQUFJcUQsaUJBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7O0lBRU12RCxnQjs7O0FBQ0YsOEJBQWM7QUFBQTs7QUFDVixTQUFLUyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUtFLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0QsUUFBTCxHQUFnQixFQUFoQjtBQUNIOzs7OzhCQUNzQjtBQUFBOztBQUFBLFVBQWZRLFFBQWUsdUVBQUosRUFBSTtBQUNuQixhQUFPLElBQUlDLE9BQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtFQUFZLGlCQUFPQyxPQUFQLEVBQWdCQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZnBCLG1CQUFDLENBQUMsVUFBRCxDQUFELENBQWNxQixJQUFkLEdBRGUsQ0FFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUGU7QUFBQSx5QkFRQWtDLHVEQUFLLENBQUNoQyxlQUFOLENBQXNCLEtBQUksQ0FBQ2YsTUFBM0IsRUFBbUNTLFFBQW5DLENBUkE7O0FBQUE7QUFRWE8sb0JBUlc7QUFTZix1QkFBSSxDQUFDZCxLQUFMLEdBQWE4QyxNQUFNLENBQUNoQyxFQUFFLENBQUNDLE9BQUgsQ0FBV0MsSUFBWCxDQUFnQkMsSUFBaEIsQ0FBcUJDLFVBQXRCLENBQW5CO0FBQ0EsdUJBQUksQ0FBQ25CLFFBQUwsR0FBZ0IsS0FBSSxDQUFDQSxRQUFMLENBQWNvQixNQUFkLENBQXFCTCxFQUFFLENBQUNDLE9BQUgsQ0FBV0MsSUFBWCxDQUFnQkMsSUFBaEIsQ0FBcUJHLE1BQTFDLENBQWhCO0FBQ0k3QixzQkFYVyxHQVdKOEIsUUFBUSxDQUFDQyxNQUFULENBQWdCQyw2RUFBaEIsRUFBMEI7QUFBRUMsd0JBQUksRUFBRSxLQUFJLENBQUN6QjtBQUFiLG1CQUExQixDQVhJO0FBWWZULG1CQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkMsSUFBckIsQ0FBMEJBLElBQTFCO0FBQ0FELG1CQUFDLENBQUMsVUFBRCxDQUFELENBQWNtQyxJQUFkO0FBQ0FoQix5QkFBTzs7QUFkUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFnQkg7Ozs7Ozs7Ozs7O0FBR0duQixpQkFBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJDLElBQXJCLENBQTBCd0QsZ0VBQTFCLEUsQ0FDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTyxtRUFBSTFELGdCQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7O0lBRU0yRCxLOzs7QUFFSixtQkFBYztBQUFBOztBQUNaLFNBQUsvQyxTQUFMO0FBQ0Q7Ozs7Z0NBRVc7QUFDVlgsT0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlksRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBWTtBQUN6Q1osU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkQsUUFBUixDQUFpQixRQUFqQixFQUEyQkMsUUFBM0IsR0FBc0NDLFdBQXRDLENBQWtELFFBQWxEO0FBQ0EsWUFBSUMsSUFBSSxHQUFHOUQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRYyxJQUFSLENBQWEsV0FBYixDQUFYO0FBQ0FpRCw4REFBTSxDQUFDQyxFQUFQLENBQVVGLElBQVY7QUFDRCxPQUpEO0FBS0Q7Ozs7OztBQUlILElBQUlKLEtBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsQk1ILEs7OztBQUNKLG1CQUFjO0FBQUE7QUFFYjs7OztvQ0FDZS9DLE0sRUFBcUI7QUFBQSxVQUFiUyxRQUFhLHVFQUFKLEVBQUk7QUFDbkMsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQytDLE9BQUQsRUFBVTdDLE1BQVYsRUFBcUI7QUFDdENwQixTQUFDLENBQUNrRSxJQUFGLENBQU87QUFDTEMsYUFBRyx3Q0FBaUMzRCxNQUFqQyx1QkFBb0RTLFFBQXBELENBREU7QUFFTG1ELGNBQUksRUFBRSxLQUZEO0FBR0xDLGlCQUhLLG1CQUdHQyxLQUhILEVBR1U7QUFDYkwsbUJBQU8sQ0FBQ0ssS0FBRCxDQUFQO0FBQ0QsV0FMSTtBQU1MQyxlQU5LLGlCQU1DRCxLQU5ELEVBTVE7QUFDWGxELGtCQUFNLENBQUNrRCxLQUFELENBQU47QUFDRDtBQVJJLFNBQVA7QUFVRCxPQVhNLENBQVA7QUFZRDs7O2tDQUVhRSxNLEVBQU87QUFBQSxVQUNkQyxJQURjLEdBQzBCRCxNQUQxQixDQUNkQyxJQURjO0FBQUEsVUFDUkMsWUFEUSxHQUMwQkYsTUFEMUIsQ0FDUkUsWUFEUTtBQUFBLFVBQ01sRSxNQUROLEdBQzBCZ0UsTUFEMUIsQ0FDTWhFLE1BRE47QUFBQSxVQUNjUyxRQURkLEdBQzBCdUQsTUFEMUIsQ0FDY3ZELFFBRGQ7QUFFbkIsVUFBSTBELEtBQUssR0FBR0MsU0FBUyxtQ0FBNEJILElBQTVCLDJCQUFpREMsWUFBakQscUJBQXdFbEUsTUFBeEUsdUJBQTJGUyxRQUEzRixFQUFyQjtBQUNBNkIsYUFBTyxDQUFDQyxHQUFSLENBQVk0QixLQUFaO0FBQ0EsYUFBTyxJQUFJekQsT0FBSixDQUFZLFVBQUMrQyxPQUFELEVBQVU3QyxNQUFWLEVBQXFCO0FBQ3RDcEIsU0FBQyxDQUFDa0UsSUFBRixDQUFPO0FBQ0xDLGFBQUcsRUFBRVEsS0FEQTtBQUVMUCxjQUFJLEVBQUUsS0FGRDtBQUdMQyxpQkFISyxtQkFHR0MsS0FISCxFQUdVO0FBQ2JMLG1CQUFPLENBQUNLLEtBQUQsQ0FBUDtBQUNELFdBTEk7QUFNTEMsZUFOSyxpQkFNQ0QsS0FORCxFQU1RO0FBQ1hsRCxrQkFBTSxDQUFDa0QsS0FBRCxDQUFOO0FBQ0Q7QUFSSSxTQUFQO0FBVUQsT0FYTSxDQUFQO0FBWUQ7Ozs7OztBQUVZLG1FQUFJZixLQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNc0IsSUFBSSxHQUFHLE1BQWI7O0lBRU1kLE07OztBQUNGLG9CQUFjO0FBQUE7O0FBQ1YsU0FBS2UsTUFBTCxHQUFjO0FBQ1Ysa0JBQVl2RSx5RUFERjtBQUVWLGdCQUFVUix1RUFGQTtBQUdWLGlCQUFXdUQsd0VBQWlCQTtBQUhsQixLQUFkO0FBS0EsU0FBSzNDLFNBQUw7QUFDQVosMkVBQWdCLENBQUNpQyxNQUFqQjtBQUNIOzs7OzZCQUVRK0MsSSxFQUFNO0FBQ1gsVUFBSSxLQUFLRCxNQUFMLENBQVlDLElBQVosQ0FBSixFQUF1QjtBQUNuQixhQUFLRCxNQUFMLENBQVlDLElBQVosRUFBa0IvQyxNQUFsQjtBQUNILE9BRkQsTUFFTztBQUNIZ0QsMkVBQWUsQ0FBQ2hELE1BQWhCO0FBQ0g7QUFDSjs7O3VCQUVFK0MsSSxFQUFNO0FBQ0wsVUFBSUYsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDakI5RCxnQkFBUSxDQUFDK0MsSUFBVCxHQUFnQmlCLElBQWhCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hFLGVBQU8sQ0FBQ0MsU0FBUixDQUFrQjtBQUFFSCxjQUFJLEVBQUpBO0FBQUYsU0FBbEIsRUFBNEIsRUFBNUIsRUFBZ0NBLElBQWhDO0FBQ0EsYUFBS0ksUUFBTCxDQUFjSixJQUFkO0FBQ0g7QUFDSjs7O2dDQUVXO0FBQUE7O0FBQ1IsVUFBSUYsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDakJPLGNBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsWUFBTTtBQUN4Q3ZDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWWhDLFFBQVEsQ0FBQytDLElBQXJCO0FBQ0EsY0FBSUEsSUFBSSxHQUFHL0MsUUFBUSxDQUFDK0MsSUFBVCxDQUFjd0IsT0FBZCxDQUFzQixHQUF0QixFQUEyQixFQUEzQixDQUFYOztBQUNBLGVBQUksQ0FBQ0gsUUFBTCxDQUFjckIsSUFBZDtBQUNILFNBSkQ7QUFLSCxPQU5ELE1BTU87QUFDSHNCLGNBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsWUFBTTtBQUN0QyxlQUFJLENBQUNGLFFBQUwsQ0FBY0YsT0FBTyxDQUFDTSxLQUFSLENBQWNSLElBQTVCO0FBQ0gsU0FGRDtBQUdIO0FBQ0o7Ozs7OztBQUVVLG1FQUFJaEIsTUFBSixFQUFmLEU7Ozs7Ozs7Ozs7O0FDakRBLG9VQUFvVSxnTDs7Ozs7Ozs7Ozs7QUNBcFUsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUNBQW1DLGlCQUFpQixNQUFNLDZiQUE2YixJOzs7Ozs7Ozs7OztBQ0F2Zix3Yjs7Ozs7Ozs7Ozs7QUNBQSxtQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiLyohXG4gKiBiZXR0ZXItc2Nyb2xsIC8gY29yZVxuICogKGMpIDIwMTYtMjAxOSB1c3RiaHVhbmd5aVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xuXG5mdW5jdGlvbiB3YXJuKG1zZykge1xyXG4gICAgY29uc29sZS5lcnJvcihcIltCU2Nyb2xsIHdhcm5dOiBcIiArIG1zZyk7XHJcbn1cblxuLy8gc3NyIHN1cHBvcnRcclxudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xyXG52YXIgdWEgPSBpbkJyb3dzZXIgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG52YXIgaXNXZUNoYXREZXZUb29scyA9IHVhICYmIC93ZWNoYXRkZXZ0b29scy8udGVzdCh1YSk7XHJcbnZhciBpc0FuZHJvaWQgPSB1YSAmJiB1YS5pbmRleE9mKCdhbmRyb2lkJykgPiAwO1xuXG5mdW5jdGlvbiBnZXROb3coKSB7XHJcbiAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3dcclxuICAgICAgICA/IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSArIHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0XHJcbiAgICAgICAgOiArbmV3IERhdGUoKTtcclxufVxyXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XHJcbiAgICB2YXIgcmVzdCA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICByZXN0W19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHNvdXJjZSA9IHJlc3RbaV07XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuZnVuY3Rpb24gaXNVbmRlZih2KSB7XHJcbiAgICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGw7XHJcbn1cblxudmFyIGVsZW1lbnRTdHlsZSA9IChpbkJyb3dzZXIgJiZcclxuICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlKTtcclxudmFyIHZlbmRvciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIWluQnJvd3Nlcikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhciB0cmFuc2Zvcm1OYW1lcyA9IHtcclxuICAgICAgICB3ZWJraXQ6ICd3ZWJraXRUcmFuc2Zvcm0nLFxyXG4gICAgICAgIE1vejogJ01velRyYW5zZm9ybScsXHJcbiAgICAgICAgTzogJ09UcmFuc2Zvcm0nLFxyXG4gICAgICAgIG1zOiAnbXNUcmFuc2Zvcm0nLFxyXG4gICAgICAgIHN0YW5kYXJkOiAndHJhbnNmb3JtJ1xyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGtleSBpbiB0cmFuc2Zvcm1OYW1lcykge1xyXG4gICAgICAgIGlmIChlbGVtZW50U3R5bGVbdHJhbnNmb3JtTmFtZXNba2V5XV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufSkoKTtcclxuZnVuY3Rpb24gcHJlZml4U3R5bGUoc3R5bGUpIHtcclxuICAgIGlmICh2ZW5kb3IgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgfVxyXG4gICAgaWYgKHZlbmRvciA9PT0gJ3N0YW5kYXJkJykge1xyXG4gICAgICAgIGlmIChzdHlsZSA9PT0gJ3RyYW5zaXRpb25FbmQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAndHJhbnNpdGlvbmVuZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgIH1cclxuICAgIHJldHVybiB2ZW5kb3IgKyBzdHlsZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0eWxlLnN1YnN0cigxKTtcclxufVxyXG5mdW5jdGlvbiBnZXRFbGVtZW50KGVsKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBlbCA9PT0gJ3N0cmluZydcclxuICAgICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXHJcbiAgICAgICAgOiBlbCk7XHJcbn1cclxuZnVuY3Rpb24gYWRkRXZlbnQoZWwsIHR5cGUsIGZuLCBjYXB0dXJlKSB7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGZuLCB7XHJcbiAgICAgICAgcGFzc2l2ZTogZmFsc2UsXHJcbiAgICAgICAgY2FwdHVyZTogISFjYXB0dXJlXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVFdmVudChlbCwgdHlwZSwgZm4sIGNhcHR1cmUpIHtcclxuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIHtcclxuICAgICAgICBjYXB0dXJlOiAhIWNhcHR1cmVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIG9mZnNldChlbCkge1xyXG4gICAgdmFyIGxlZnQgPSAwO1xyXG4gICAgdmFyIHRvcCA9IDA7XHJcbiAgICB3aGlsZSAoZWwpIHtcclxuICAgICAgICBsZWZ0IC09IGVsLm9mZnNldExlZnQ7XHJcbiAgICAgICAgdG9wIC09IGVsLm9mZnNldFRvcDtcclxuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICB0b3A6IHRvcFxyXG4gICAgfTtcclxufVxyXG52YXIgY3NzVmVuZG9yID0gdmVuZG9yICYmIHZlbmRvciAhPT0gJ3N0YW5kYXJkJyA/ICctJyArIHZlbmRvci50b0xvd2VyQ2FzZSgpICsgJy0nIDogJyc7XHJcbnZhciB0cmFuc2Zvcm0gPSBwcmVmaXhTdHlsZSgndHJhbnNmb3JtJyk7XHJcbnZhciB0cmFuc2l0aW9uID0gcHJlZml4U3R5bGUoJ3RyYW5zaXRpb24nKTtcclxudmFyIGhhc1BlcnNwZWN0aXZlID0gaW5Ccm93c2VyICYmIHByZWZpeFN0eWxlKCdwZXJzcGVjdGl2ZScpIGluIGVsZW1lbnRTdHlsZTtcclxuLy8gZml4IGlzc3VlICMzNjFcclxudmFyIGhhc1RvdWNoID0gaW5Ccm93c2VyICYmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgaXNXZUNoYXREZXZUb29scyk7XHJcbnZhciBoYXNUcmFuc2l0aW9uID0gaW5Ccm93c2VyICYmIHRyYW5zaXRpb24gaW4gZWxlbWVudFN0eWxlO1xyXG52YXIgc3R5bGUgPSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcclxuICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb24sXHJcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IHByZWZpeFN0eWxlKCd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nKSxcclxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogcHJlZml4U3R5bGUoJ3RyYW5zaXRpb25EdXJhdGlvbicpLFxyXG4gICAgdHJhbnNpdGlvbkRlbGF5OiBwcmVmaXhTdHlsZSgndHJhbnNpdGlvbkRlbGF5JyksXHJcbiAgICB0cmFuc2Zvcm1PcmlnaW46IHByZWZpeFN0eWxlKCd0cmFuc2Zvcm1PcmlnaW4nKSxcclxuICAgIHRyYW5zaXRpb25FbmQ6IHByZWZpeFN0eWxlKCd0cmFuc2l0aW9uRW5kJylcclxufTtcclxudmFyIGV2ZW50VHlwZU1hcCA9IHtcclxuICAgIHRvdWNoc3RhcnQ6IDEsXHJcbiAgICB0b3VjaG1vdmU6IDEsXHJcbiAgICB0b3VjaGVuZDogMSxcclxuICAgIG1vdXNlZG93bjogMixcclxuICAgIG1vdXNlbW92ZTogMixcclxuICAgIG1vdXNldXA6IDJcclxufTtcclxuZnVuY3Rpb24gZ2V0UmVjdChlbCkge1xyXG4gICAgaWYgKGVsIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvcDogcmVjdC50b3AsXHJcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcclxuICAgICAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9wOiBlbC5vZmZzZXRUb3AsXHJcbiAgICAgICAgICAgIGxlZnQ6IGVsLm9mZnNldExlZnQsXHJcbiAgICAgICAgICAgIHdpZHRoOiBlbC5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBlbC5vZmZzZXRIZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0RXhjZXB0aW9uRm4oZWwsIGV4Y2VwdGlvbnMpIHtcclxuICAgIGZvciAodmFyIGkgaW4gZXhjZXB0aW9ucykge1xyXG4gICAgICAgIGlmIChleGNlcHRpb25zW2ldLnRlc3QoZWxbaV0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG52YXIgdGFnRXhjZXB0aW9uRm4gPSBwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbkZuO1xyXG5mdW5jdGlvbiB0YXAoZSwgZXZlbnROYW1lKSB7XHJcbiAgICB2YXIgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICAgIGV2LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xyXG4gICAgZXYucGFnZVggPSBlLnBhZ2VYO1xyXG4gICAgZXYucGFnZVkgPSBlLnBhZ2VZO1xyXG4gICAgZS50YXJnZXQuZGlzcGF0Y2hFdmVudChldik7XHJcbn1cclxuZnVuY3Rpb24gY2xpY2soZSwgZXZlbnQpIHtcclxuICAgIGlmIChldmVudCA9PT0gdm9pZCAwKSB7IGV2ZW50ID0gJ2NsaWNrJzsgfVxyXG4gICAgdmFyIGV2ZW50U291cmNlO1xyXG4gICAgaWYgKGUudHlwZSA9PT0gJ21vdXNldXAnKSB7XHJcbiAgICAgICAgZXZlbnRTb3VyY2UgPSBlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZS50eXBlID09PSAndG91Y2hlbmQnIHx8IGUudHlwZSA9PT0gJ3RvdWNoY2FuY2VsJykge1xyXG4gICAgICAgIGV2ZW50U291cmNlID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgIH1cclxuICAgIHZhciBwb3NTcmMgPSB7fTtcclxuICAgIGlmIChldmVudFNvdXJjZSkge1xyXG4gICAgICAgIHBvc1NyYy5zY3JlZW5YID0gZXZlbnRTb3VyY2Uuc2NyZWVuWCB8fCAwO1xyXG4gICAgICAgIHBvc1NyYy5zY3JlZW5ZID0gZXZlbnRTb3VyY2Uuc2NyZWVuWSB8fCAwO1xyXG4gICAgICAgIHBvc1NyYy5jbGllbnRYID0gZXZlbnRTb3VyY2UuY2xpZW50WCB8fCAwO1xyXG4gICAgICAgIHBvc1NyYy5jbGllbnRZID0gZXZlbnRTb3VyY2UuY2xpZW50WSB8fCAwO1xyXG4gICAgfVxyXG4gICAgdmFyIGV2O1xyXG4gICAgdmFyIGJ1YmJsZXMgPSB0cnVlO1xyXG4gICAgdmFyIGNhbmNlbGFibGUgPSB0cnVlO1xyXG4gICAgaWYgKHR5cGVvZiBNb3VzZUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGV2ID0gbmV3IE1vdXNlRXZlbnQoZXZlbnQsIGV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICBidWJibGVzOiBidWJibGVzLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogY2FuY2VsYWJsZVxyXG4gICAgICAgICAgICB9LCBwb3NTcmMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY3JlYXRlRXZlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjcmVhdGVFdmVudCgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRXZlbnQoKSB7XHJcbiAgICAgICAgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICAgICAgICBldi5pbml0RXZlbnQoZXZlbnQsIGJ1YmJsZXMsIGNhbmNlbGFibGUpO1xyXG4gICAgICAgIGV4dGVuZChldiwgcG9zU3JjKTtcclxuICAgIH1cclxuICAgIC8vIGZvcndhcmRlZFRvdWNoRXZlbnQgc2V0IHRvIHRydWUgaW4gY2FzZSBvZiB0aGUgY29uZmxpY3Qgd2l0aCBmYXN0Y2xpY2tcclxuICAgIGV2LmZvcndhcmRlZFRvdWNoRXZlbnQgPSB0cnVlO1xyXG4gICAgZXYuX2NvbnN0cnVjdGVkID0gdHJ1ZTtcclxuICAgIGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGRibGNsaWNrKGUpIHtcclxuICAgIGNsaWNrKGUsICdkYmxjbGljaycpO1xyXG59XG5cbnZhciBlYXNlID0ge1xyXG4gICAgLy8gZWFzZU91dFF1aW50XHJcbiAgICBzd2lwZToge1xyXG4gICAgICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpJyxcclxuICAgICAgICBmbjogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgKyAtLXQgKiB0ICogdCAqIHQgKiB0O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBlYXNlT3V0UXVhcmRcclxuICAgIHN3aXBlQm91bmNlOiB7XHJcbiAgICAgICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCknLFxyXG4gICAgICAgIGZuOiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdCAqICgyIC0gdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIGVhc2VPdXRRdWFydFxyXG4gICAgYm91bmNlOiB7XHJcbiAgICAgICAgc3R5bGU6ICdjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpJyxcclxuICAgICAgICBmbjogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDEgLSAtLXQgKiB0ICogdCAqIHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xuXG52YXIgREVGQVVMVF9JTlRFUlZBTCA9IDEwMCAvIDYwO1xyXG52YXIgd2luZG93Q29tcGF0ID0gaW5Ccm93c2VyICYmIHdpbmRvdztcclxuZnVuY3Rpb24gbm9vcCgpIHsgfVxyXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghaW5Ccm93c2VyKSB7XHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgcmV0dXJuIG5vb3A7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKHdpbmRvd0NvbXBhdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICB3aW5kb3dDb21wYXQud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgd2luZG93Q29tcGF0Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvd0NvbXBhdC5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgLy8gaWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBzZXRUaW1lb3V0XHJcbiAgICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgKGNhbGxiYWNrLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUwpIC8gMik7IC8vIG1ha2UgaW50ZXJ2YWwgYXMgcHJlY2lzZSBhcyBwb3NzaWJsZS5cclxuICAgICAgICB9KTtcclxufSkoKTtcclxudmFyIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghaW5Ccm93c2VyKSB7XHJcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXHJcbiAgICAgICAgcmV0dXJuIG5vb3A7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKHdpbmRvd0NvbXBhdC5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvd0NvbXBhdC53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvd0NvbXBhdC5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgIHdpbmRvd0NvbXBhdC5vQ2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChpZCk7XHJcbiAgICAgICAgfSk7XHJcbn0pKCk7XG5cbnZhciBub29wJDEgPSBmdW5jdGlvbiAodmFsKSB7IH07XHJcbnZhciBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24gPSB7XHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiBub29wJDEsXHJcbiAgICBzZXQ6IG5vb3AkMVxyXG59O1xyXG52YXIgZ2V0UHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBrZXkpIHtcclxuICAgIHZhciBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgb2JqID0gb2JqW2tleXNbaV1dO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCAhb2JqKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgbGFzdEtleSA9IGtleXMucG9wKCk7XHJcbiAgICBpZiAodHlwZW9mIG9ialtsYXN0S2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmpbbGFzdEtleV0uYXBwbHkob2JqLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gb2JqW2xhc3RLZXldO1xyXG4gICAgfVxyXG59O1xyXG52YXIgc2V0UHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgICB2YXIga2V5cyA9IGtleS5zcGxpdCgnLicpO1xyXG4gICAgdmFyIHRlbXA7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgdGVtcCA9IGtleXNbaV07XHJcbiAgICAgICAgaWYgKCFvYmpbdGVtcF0pXHJcbiAgICAgICAgICAgIG9ialt0ZW1wXSA9IHt9O1xyXG4gICAgICAgIG9iaiA9IG9ialt0ZW1wXTtcclxuICAgIH1cclxuICAgIG9ialtrZXlzLnBvcCgpXSA9IHZhbHVlO1xyXG59O1xyXG5mdW5jdGlvbiBwcm9wZXJ0aWVzUHJveHkodGFyZ2V0LCBzb3VyY2VLZXksIGtleSkge1xyXG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IGZ1bmN0aW9uIHByb3h5R2V0dGVyKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRQcm9wZXJ0eSh0aGlzLCBzb3VyY2VLZXkpO1xyXG4gICAgfTtcclxuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiBwcm94eVNldHRlcih2YWwpIHtcclxuICAgICAgICBzZXRQcm9wZXJ0eSh0aGlzLCBzb3VyY2VLZXksIHZhbCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xyXG59XG5cbnZhciBFdmVudEVtaXR0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFdmVudEVtaXR0ZXIobmFtZXMpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuZXZlbnRUeXBlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJUeXBlKG5hbWVzKTtcclxuICAgIH1cclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAodHlwZSwgZm4sIGNvbnRleHQpIHtcclxuICAgICAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB0aGlzOyB9XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJblR5cGVzKHR5cGUpO1xyXG4gICAgICAgIGlmICghdGhpcy5ldmVudHNbdHlwZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHNbdHlwZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudHNbdHlwZV0ucHVzaChbZm4sIGNvbnRleHRdKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiAodHlwZSwgZm4sIGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IHRoaXM7IH1cclxuICAgICAgICB0aGlzLl9jaGVja0luVHlwZXModHlwZSk7XHJcbiAgICAgICAgdmFyIG1hZ2ljID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLm9mZih0eXBlLCBtYWdpYyk7XHJcbiAgICAgICAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWFnaWMuZm4gPSBmbjtcclxuICAgICAgICB0aGlzLm9uKHR5cGUsIG1hZ2ljKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uICh0eXBlLCBmbikge1xyXG4gICAgICAgIGlmICghdHlwZSAmJiAhZm4pIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrSW5UeXBlcyh0eXBlKTtcclxuICAgICAgICAgICAgaWYgKCFmbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHNbdHlwZV0gPSBbXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBldmVudHMgPSB0aGlzLmV2ZW50c1t0eXBlXTtcclxuICAgICAgICAgICAgaWYgKCFldmVudHMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjb3VudCA9IGV2ZW50cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHdoaWxlIChjb3VudC0tKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRzW2NvdW50XVswXSA9PT0gZm4gfHxcclxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRzW2NvdW50XVswXSAmJiBldmVudHNbY291bnRdWzBdLmZuID09PSBmbikpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudHMuc3BsaWNlKGNvdW50LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5UeXBlcyh0eXBlKTtcclxuICAgICAgICB2YXIgZXZlbnRzID0gdGhpcy5ldmVudHNbdHlwZV07XHJcbiAgICAgICAgaWYgKCFldmVudHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGVuID0gZXZlbnRzLmxlbmd0aDtcclxuICAgICAgICB2YXIgZXZlbnRzQ29weSA9IGV2ZW50cy5zbGljZSgpO1xyXG4gICAgICAgIHZhciByZXQ7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnRfMSA9IGV2ZW50c0NvcHlbaV07XHJcbiAgICAgICAgICAgIHZhciBmbiA9IGV2ZW50XzFbMF0sIGNvbnRleHQgPSBldmVudF8xWzFdO1xyXG4gICAgICAgICAgICBpZiAoZm4pIHtcclxuICAgICAgICAgICAgICAgIHJldCA9IGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJldCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZWdpc3RlclR5cGUgPSBmdW5jdGlvbiAobmFtZXMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuZXZlbnRUeXBlc1t0eXBlXSA9IHR5cGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5ldmVudFR5cGVzID0ge307XHJcbiAgICB9O1xyXG4gICAgRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fY2hlY2tJblR5cGVzID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICB2YXIgdHlwZXMgPSB0aGlzLmV2ZW50VHlwZXM7XHJcbiAgICAgICAgdmFyIGluVHlwZXMgPSB0eXBlc1t0eXBlXSA9PT0gdHlwZTtcclxuICAgICAgICBpZiAoIWluVHlwZXMpIHtcclxuICAgICAgICAgICAgd2FybihcIkV2ZW50RW1pdHRlciBoYXMgdXNlZCB1bmtub3duIGV2ZW50IHR5cGU6IFxcXCJcIiArIHR5cGUgKyBcIlxcXCIsIHNob3VsZCBiZSBvbmVvZiBbXCIgKyBPYmplY3Qua2V5cyh0eXBlcykgKyBcIl1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBFdmVudEVtaXR0ZXI7XHJcbn0oKSk7XG5cbnZhciBEaXJlY3Rpb247XHJcbihmdW5jdGlvbiAoRGlyZWN0aW9uKSB7XHJcbiAgICBEaXJlY3Rpb25bRGlyZWN0aW9uW1wiUG9zaXRpdmVcIl0gPSAxXSA9IFwiUG9zaXRpdmVcIjtcclxuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJOZWdhdGl2ZVwiXSA9IC0xXSA9IFwiTmVnYXRpdmVcIjtcclxuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJEZWZhdWx0XCJdID0gMF0gPSBcIkRlZmF1bHRcIjtcclxufSkoRGlyZWN0aW9uIHx8IChEaXJlY3Rpb24gPSB7fSkpO1xuXG52YXIgRGlyZWN0aW9uTG9jaztcclxuKGZ1bmN0aW9uIChEaXJlY3Rpb25Mb2NrKSB7XHJcbiAgICBEaXJlY3Rpb25Mb2NrW1wiRGVmYXVsdFwiXSA9IFwiXCI7XHJcbiAgICBEaXJlY3Rpb25Mb2NrW1wiSG9yaXpvbnRhbFwiXSA9IFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgRGlyZWN0aW9uTG9ja1tcIlZlcnRpY2FsXCJdID0gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgRGlyZWN0aW9uTG9ja1tcIk5vbmVcIl0gPSBcIm5vbmVcIjtcclxufSkoRGlyZWN0aW9uTG9jayB8fCAoRGlyZWN0aW9uTG9jayA9IHt9KSk7XG5cbnZhciBFdmVudFBhc3N0aHJvdWdoO1xyXG4oZnVuY3Rpb24gKEV2ZW50UGFzc3Rocm91Z2gpIHtcclxuICAgIEV2ZW50UGFzc3Rocm91Z2hbXCJOb25lXCJdID0gXCJcIjtcclxuICAgIEV2ZW50UGFzc3Rocm91Z2hbXCJIb3Jpem9udGFsXCJdID0gXCJob3Jpem9udGFsXCI7XHJcbiAgICBFdmVudFBhc3N0aHJvdWdoW1wiVmVydGljYWxcIl0gPSBcInZlcnRpY2FsXCI7XHJcbn0pKEV2ZW50UGFzc3Rocm91Z2ggfHwgKEV2ZW50UGFzc3Rocm91Z2ggPSB7fSkpO1xuXG52YXIgRXZlbnRUeXBlO1xyXG4oZnVuY3Rpb24gKEV2ZW50VHlwZSkge1xyXG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIlRvdWNoXCJdID0gMV0gPSBcIlRvdWNoXCI7XHJcbiAgICBFdmVudFR5cGVbRXZlbnRUeXBlW1wiTW91c2VcIl0gPSAyXSA9IFwiTW91c2VcIjtcclxufSkoRXZlbnRUeXBlIHx8IChFdmVudFR5cGUgPSB7fSkpO1xuXG52YXIgTW91c2VCdXR0b247XHJcbihmdW5jdGlvbiAoTW91c2VCdXR0b24pIHtcclxuICAgIE1vdXNlQnV0dG9uW01vdXNlQnV0dG9uW1wiTGVmdFwiXSA9IDBdID0gXCJMZWZ0XCI7XHJcbiAgICBNb3VzZUJ1dHRvbltNb3VzZUJ1dHRvbltcIk1pZGRsZVwiXSA9IDFdID0gXCJNaWRkbGVcIjtcclxuICAgIE1vdXNlQnV0dG9uW01vdXNlQnV0dG9uW1wiUmlnaHRcIl0gPSAyXSA9IFwiUmlnaHRcIjtcclxufSkoTW91c2VCdXR0b24gfHwgKE1vdXNlQnV0dG9uID0ge30pKTtcblxudmFyIFByb2JlO1xyXG4oZnVuY3Rpb24gKFByb2JlKSB7XHJcbiAgICBQcm9iZVtQcm9iZVtcIkRlZmF1bHRcIl0gPSAwXSA9IFwiRGVmYXVsdFwiO1xyXG4gICAgUHJvYmVbUHJvYmVbXCJUaHJvdHRsZVwiXSA9IDFdID0gXCJUaHJvdHRsZVwiO1xyXG4gICAgUHJvYmVbUHJvYmVbXCJOb3JtYWxcIl0gPSAyXSA9IFwiTm9ybWFsXCI7XHJcbiAgICBQcm9iZVtQcm9iZVtcIlJlYWx0aW1lXCJdID0gM10gPSBcIlJlYWx0aW1lXCI7XHJcbn0pKFByb2JlIHx8IChQcm9iZSA9IHt9KSk7XG5cbnZhciBPcHRpb25zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0WCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFydFkgPSAwO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsWSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5mcmVlU2Nyb2xsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkID0gNTtcclxuICAgICAgICB0aGlzLmV2ZW50UGFzc3Rocm91Z2ggPSBFdmVudFBhc3N0aHJvdWdoLk5vbmU7XHJcbiAgICAgICAgdGhpcy5jbGljayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGJsY2xpY2sgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRhcCA9ICcnO1xyXG4gICAgICAgIHRoaXMuYm91bmNlID0ge1xyXG4gICAgICAgICAgICB0b3A6IHRydWUsXHJcbiAgICAgICAgICAgIGJvdHRvbTogdHJ1ZSxcclxuICAgICAgICAgICAgbGVmdDogdHJ1ZSxcclxuICAgICAgICAgICAgcmlnaHQ6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYm91bmNlVGltZSA9IDgwMDtcclxuICAgICAgICB0aGlzLm1vbWVudHVtID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1vbWVudHVtTGltaXRUaW1lID0gMzAwO1xyXG4gICAgICAgIHRoaXMubW9tZW50dW1MaW1pdERpc3RhbmNlID0gMTU7XHJcbiAgICAgICAgdGhpcy5zd2lwZVRpbWUgPSAyNTAwO1xyXG4gICAgICAgIHRoaXMuc3dpcGVCb3VuY2VUaW1lID0gNTAwO1xyXG4gICAgICAgIHRoaXMuZGVjZWxlcmF0aW9uID0gMC4wMDE1O1xyXG4gICAgICAgIHRoaXMuZmxpY2tMaW1pdFRpbWUgPSAyMDA7XHJcbiAgICAgICAgdGhpcy5mbGlja0xpbWl0RGlzdGFuY2UgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5yZXNpemVQb2xsaW5nID0gNjA7XHJcbiAgICAgICAgdGhpcy5wcm9iZVR5cGUgPSBQcm9iZS5EZWZhdWx0O1xyXG4gICAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbiA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogL14oSU5QVVR8VEVYVEFSRUF8QlVUVE9OfFNFTEVDVHxBVURJTykkL1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50YWdFeGNlcHRpb24gPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6IC9eVEVYVEFSRUEkL1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5IV0NvbXBvc2l0aW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZVRyYW5zaXRpb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYmluZFRvV3JhcHBlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZU1vdXNlID0gaGFzVG91Y2g7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlVG91Y2ggPSAhaGFzVG91Y2g7XHJcbiAgICAgICAgdGhpcy5hdXRvQmx1ciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBPcHRpb25zLnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzW2tleV0gPSBvcHRpb25zW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE9wdGlvbnMucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVaID1cclxuICAgICAgICAgICAgdGhpcy5IV0NvbXBvc2l0aW5nICYmIGhhc1BlcnNwZWN0aXZlID8gJyB0cmFuc2xhdGVaKDApJyA6ICcnO1xyXG4gICAgICAgIHRoaXMudXNlVHJhbnNpdGlvbiA9IHRoaXMudXNlVHJhbnNpdGlvbiAmJiBoYXNUcmFuc2l0aW9uO1xyXG4gICAgICAgIHRoaXMucHJldmVudERlZmF1bHQgPSAhdGhpcy5ldmVudFBhc3N0aHJvdWdoICYmIHRoaXMucHJldmVudERlZmF1bHQ7XHJcbiAgICAgICAgLy8gSWYgeW91IHdhbnQgZXZlbnRQYXNzdGhyb3VnaCBJIGhhdmUgdG8gbG9jayBvbmUgb2YgdGhlIGF4ZXNcclxuICAgICAgICB0aGlzLnNjcm9sbFggPVxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50UGFzc3Rocm91Z2ggPT09IEV2ZW50UGFzc3Rocm91Z2guSG9yaXpvbnRhbFxyXG4gICAgICAgICAgICAgICAgPyBmYWxzZVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNjcm9sbFg7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxZID1cclxuICAgICAgICAgICAgdGhpcy5ldmVudFBhc3N0aHJvdWdoID09PSBFdmVudFBhc3N0aHJvdWdoLlZlcnRpY2FsID8gZmFsc2UgOiB0aGlzLnNjcm9sbFk7XHJcbiAgICAgICAgLy8gV2l0aCBldmVudFBhc3N0aHJvdWdoIHdlIGFsc28gbmVlZCBsb2NrRGlyZWN0aW9uIG1lY2hhbmlzbVxyXG4gICAgICAgIHRoaXMuZnJlZVNjcm9sbCA9IHRoaXMuZnJlZVNjcm9sbCAmJiAhdGhpcy5ldmVudFBhc3N0aHJvdWdoO1xyXG4gICAgICAgIC8vIGZvcmNlIHRydWUgd2hlbiBmcmVlU2Nyb2xsIGlzIHRydWVcclxuICAgICAgICB0aGlzLnNjcm9sbFggPSB0aGlzLmZyZWVTY3JvbGwgPyB0cnVlIDogdGhpcy5zY3JvbGxYO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsWSA9IHRoaXMuZnJlZVNjcm9sbCA/IHRydWUgOiB0aGlzLnNjcm9sbFk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkID0gdGhpcy5ldmVudFBhc3N0aHJvdWdoXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHRoaXMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICByZXR1cm4gT3B0aW9ucztcclxufSgpKTtcblxudmFyIEV2ZW50UmVnaXN0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFdmVudFJlZ2lzdGVyKHdyYXBwZXIsIGV2ZW50cykge1xyXG4gICAgICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XHJcbiAgICAgICAgdGhpcy5ldmVudHMgPSBldmVudHM7XHJcbiAgICAgICAgdGhpcy5hZGRET01FdmVudHMoKTtcclxuICAgIH1cclxuICAgIEV2ZW50UmVnaXN0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVET01FdmVudHMoKTtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xyXG4gICAgfTtcclxuICAgIEV2ZW50UmVnaXN0ZXIucHJvdG90eXBlLmFkZERPTUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZURPTUV2ZW50cyhhZGRFdmVudCk7XHJcbiAgICB9O1xyXG4gICAgRXZlbnRSZWdpc3Rlci5wcm90b3R5cGUucmVtb3ZlRE9NRXZlbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRE9NRXZlbnRzKHJlbW92ZUV2ZW50KTtcclxuICAgIH07XHJcbiAgICBFdmVudFJlZ2lzdGVyLnByb3RvdHlwZS5oYW5kbGVET01FdmVudHMgPSBmdW5jdGlvbiAoZXZlbnRPcGVyYXRpb24pIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy53cmFwcGVyO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50T3BlcmF0aW9uKHdyYXBwZXIsIGV2ZW50Lm5hbWUsIF90aGlzLCAhIWV2ZW50LmNhcHR1cmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEV2ZW50UmVnaXN0ZXIucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZXZlbnRUeXBlID0gZS50eXBlO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLnNvbWUoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5uYW1lID09PSBldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmhhbmRsZXIoZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEV2ZW50UmVnaXN0ZXI7XHJcbn0oKSk7XG5cbnZhciBBY3Rpb25zSGFuZGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFjdGlvbnNIYW5kbGVyKHdyYXBwZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBFdmVudEVtaXR0ZXIoW1xyXG4gICAgICAgICAgICAnYmVmb3JlU3RhcnQnLFxyXG4gICAgICAgICAgICAnc3RhcnQnLFxyXG4gICAgICAgICAgICAnbW92ZScsXHJcbiAgICAgICAgICAgICdlbmQnLFxyXG4gICAgICAgICAgICAnY2xpY2snXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVET01FdmVudHMoKTtcclxuICAgIH1cclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5oYW5kbGVET01FdmVudHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5vcHRpb25zLCBiaW5kVG9XcmFwcGVyID0gX2EuYmluZFRvV3JhcHBlciwgZGlzYWJsZU1vdXNlID0gX2EuZGlzYWJsZU1vdXNlLCBkaXNhYmxlVG91Y2ggPSBfYS5kaXNhYmxlVG91Y2gsIGNsaWNrID0gX2EuY2xpY2s7XHJcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB0aGlzLndyYXBwZXI7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGJpbmRUb1dyYXBwZXIgPyB3cmFwcGVyIDogd2luZG93O1xyXG4gICAgICAgIHZhciB3cmFwcGVyRXZlbnRzID0gW107XHJcbiAgICAgICAgdmFyIHRhcmdldEV2ZW50cyA9IFtdO1xyXG4gICAgICAgIHZhciBzaG91bGRSZWdpc2VyVG91Y2ggPSBoYXNUb3VjaCAmJiAhZGlzYWJsZVRvdWNoO1xyXG4gICAgICAgIHZhciBzaG9sZFJlZ2lzdGVyTW91c2UgPSAhZGlzYWJsZU1vdXNlO1xyXG4gICAgICAgIGlmIChjbGljaykge1xyXG4gICAgICAgICAgICB3cmFwcGVyRXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NsaWNrJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuY2xpY2suYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGNhcHR1cmU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG91bGRSZWdpc2VyVG91Y2gpIHtcclxuICAgICAgICAgICAgd3JhcHBlckV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICd0b3VjaHN0YXJ0JyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuc3RhcnQuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGFyZ2V0RXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3RvdWNobW92ZScsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLm1vdmUuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndG91Y2hlbmQnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5lbmQuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAndG91Y2hjYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5lbmQuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob2xkUmVnaXN0ZXJNb3VzZSkge1xyXG4gICAgICAgICAgICB3cmFwcGVyRXZlbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ21vdXNlZG93bicsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiB0aGlzLnN0YXJ0LmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRhcmdldEV2ZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdtb3VzZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5tb3ZlLmJpbmQodGhpcylcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ21vdXNldXAnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogdGhpcy5lbmQuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53cmFwcGVyRXZlbnRSZWdpc3RlciA9IG5ldyBFdmVudFJlZ2lzdGVyKHdyYXBwZXIsIHdyYXBwZXJFdmVudHMpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0RXZlbnRSZWdpc3RlciA9IG5ldyBFdmVudFJlZ2lzdGVyKHRhcmdldCwgdGFyZ2V0RXZlbnRzKTtcclxuICAgIH07XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUuYmVmb3JlSGFuZGxlciA9IGZ1bmN0aW9uIChlLCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5vcHRpb25zLCBwcmV2ZW50RGVmYXVsdCA9IF9hLnByZXZlbnREZWZhdWx0LCBzdG9wUHJvcGFnYXRpb24gPSBfYS5zdG9wUHJvcGFnYXRpb24sIHByZXZlbnREZWZhdWx0RXhjZXB0aW9uID0gX2EucHJldmVudERlZmF1bHRFeGNlcHRpb247XHJcbiAgICAgICAgdmFyIHByZXZlbnREZWZhdWx0Q29uZGl0aW9ucyA9IHtcclxuICAgICAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocHJldmVudERlZmF1bHQgJiZcclxuICAgICAgICAgICAgICAgICAgICAhcHJldmVudERlZmF1bHRFeGNlcHRpb25GbihlLnRhcmdldCwgcHJldmVudERlZmF1bHRFeGNlcHRpb24pKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW5kOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHByZXZlbnREZWZhdWx0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIXByZXZlbnREZWZhdWx0RXhjZXB0aW9uRm4oZS50YXJnZXQsIHByZXZlbnREZWZhdWx0RXhjZXB0aW9uKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHByZXZlbnREZWZhdWx0Q29uZGl0aW9uc1t0eXBlXSgpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUuc2V0SW5pdGlhdGVkID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gdm9pZCAwKSB7IHR5cGUgPSAwOyB9XHJcbiAgICAgICAgdGhpcy5pbml0aWF0ZWQgPSB0eXBlO1xyXG4gICAgfTtcclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIF9ldmVudFR5cGUgPSBldmVudFR5cGVNYXBbZS50eXBlXTtcclxuICAgICAgICBpZiAodGhpcy5pbml0aWF0ZWQgJiYgdGhpcy5pbml0aWF0ZWQgIT09IF9ldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEluaXRpYXRlZChfZXZlbnRUeXBlKTtcclxuICAgICAgICAvLyBpZiB0ZXh0YXJlYSBvciBvdGhlciBodG1sIHRhZ3MgaW4gb3B0aW9ucy50YWdFeGNlcHRpb24gaXMgbWFuaXB1bGF0ZWRcclxuICAgICAgICAvLyBkbyBub3QgbWFrZSBicyBzY3JvbGxcclxuICAgICAgICBpZiAodGFnRXhjZXB0aW9uRm4oZS50YXJnZXQsIHRoaXMub3B0aW9ucy50YWdFeGNlcHRpb24pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW5pdGlhdGVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbm8gbW91c2UgbGVmdCBidXR0b25cclxuICAgICAgICBpZiAoX2V2ZW50VHlwZSA9PT0gRXZlbnRUeXBlLk1vdXNlICYmIGUuYnV0dG9uICE9PSBNb3VzZUJ1dHRvbi5MZWZ0KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlU3RhcnQsIGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iZWZvcmVIYW5kbGVyKGUsICdzdGFydCcpO1xyXG4gICAgICAgIHZhciBwb2ludCA9IChlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlKTtcclxuICAgICAgICB0aGlzLnBvaW50WCA9IHBvaW50LnBhZ2VYO1xyXG4gICAgICAgIHRoaXMucG9pbnRZID0gcG9pbnQucGFnZVk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zdGFydCwgZSk7XHJcbiAgICB9O1xyXG4gICAgQWN0aW9uc0hhbmRsZXIucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChldmVudFR5cGVNYXBbZS50eXBlXSAhPT0gdGhpcy5pbml0aWF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJlZm9yZUhhbmRsZXIoZSwgJ21vdmUnKTtcclxuICAgICAgICB2YXIgcG9pbnQgPSAoZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZSk7XHJcbiAgICAgICAgdmFyIGRlbHRhWCA9IHBvaW50LnBhZ2VYIC0gdGhpcy5wb2ludFg7XHJcbiAgICAgICAgdmFyIGRlbHRhWSA9IHBvaW50LnBhZ2VZIC0gdGhpcy5wb2ludFk7XHJcbiAgICAgICAgdGhpcy5wb2ludFggPSBwb2ludC5wYWdlWDtcclxuICAgICAgICB0aGlzLnBvaW50WSA9IHBvaW50LnBhZ2VZO1xyXG4gICAgICAgIGlmICh0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLm1vdmUsIHtcclxuICAgICAgICAgICAgZGVsdGFYOiBkZWx0YVgsXHJcbiAgICAgICAgICAgIGRlbHRhWTogZGVsdGFZLFxyXG4gICAgICAgICAgICBlOiBlXHJcbiAgICAgICAgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhdXRvIGVuZCB3aGVuIG91dCBvZiB3cmFwcGVyXHJcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fFxyXG4gICAgICAgICAgICB3aW5kb3cucGFnZVhPZmZzZXQgfHxcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xyXG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8XHJcbiAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCB8fFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuICAgICAgICB2YXIgcFggPSB0aGlzLnBvaW50WCAtIHNjcm9sbExlZnQ7XHJcbiAgICAgICAgdmFyIHBZID0gdGhpcy5wb2ludFkgLSBzY3JvbGxUb3A7XHJcbiAgICAgICAgaWYgKHBYID5cclxuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC1cclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0RGlzdGFuY2UgfHxcclxuICAgICAgICAgICAgcFggPCB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdERpc3RhbmNlIHx8XHJcbiAgICAgICAgICAgIHBZIDwgdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXREaXN0YW5jZSB8fFxyXG4gICAgICAgICAgICBwWSA+XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZXZlbnRUeXBlTWFwW2UudHlwZV0gIT09IHRoaXMuaW5pdGlhdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRJbml0aWF0ZWQoKTtcclxuICAgICAgICB0aGlzLmJlZm9yZUhhbmRsZXIoZSwgJ2VuZCcpO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBlKTtcclxuICAgIH07XHJcbiAgICBBY3Rpb25zSGFuZGxlci5wcm90b3R5cGUuY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuY2xpY2ssIGUpO1xyXG4gICAgfTtcclxuICAgIEFjdGlvbnNIYW5kbGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMud3JhcHBlckV2ZW50UmVnaXN0ZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0RXZlbnRSZWdpc3Rlci5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5ob29rcy5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFjdGlvbnNIYW5kbGVyO1xyXG59KCkpO1xuXG52YXIgdHJhbnNsYXRlck1ldGFEYXRhID0ge1xyXG4gICAgeDogWyd0cmFuc2xhdGVYJywgJ3B4J10sXHJcbiAgICB5OiBbJ3RyYW5zbGF0ZVknLCAncHgnXVxyXG59O1xyXG52YXIgVHJhbnNsYXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZXIoY29udGVudCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IGNvbnRlbnQuc3R5bGU7XHJcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBFdmVudEVtaXR0ZXIoWydiZWZvcmVUcmFuc2xhdGUnLCAndHJhbnNsYXRlJ10pO1xyXG4gICAgfVxyXG4gICAgVHJhbnNsYXRlci5wcm90b3R5cGUuZ2V0Q29tcHV0ZWRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3NzU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNvbnRlbnQsIG51bGwpO1xyXG4gICAgICAgIHZhciBtYXRyaXggPSBjc3NTdHlsZVtzdHlsZS50cmFuc2Zvcm1dLnNwbGl0KCcpJylbMF0uc3BsaXQoJywgJyk7XHJcbiAgICAgICAgdmFyIHggPSArKG1hdHJpeFsxMl0gfHwgbWF0cml4WzRdKTtcclxuICAgICAgICB2YXIgeSA9ICsobWF0cml4WzEzXSB8fCBtYXRyaXhbNV0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHgsXHJcbiAgICAgICAgICAgIHk6IHlcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFRyYW5zbGF0ZXIucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgIHZhciB0cmFuc2Zvcm1TdHlsZSA9IFtdO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHBvaW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKCF0cmFuc2xhdGVyTWV0YURhdGFba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1Gbk5hbWUgPSB0cmFuc2xhdGVyTWV0YURhdGFba2V5XVswXTtcclxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybUZuTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybUZuQXJnVW5pdCA9IHRyYW5zbGF0ZXJNZXRhRGF0YVtrZXldWzFdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybUZuQXJnID0gcG9pbnRba2V5XTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0eWxlLnB1c2godHJhbnNmb3JtRm5OYW1lICsgXCIoXCIgKyB0cmFuc2Zvcm1GbkFyZyArIHRyYW5zZm9ybUZuQXJnVW5pdCArIFwiKVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlVHJhbnNsYXRlLCB0cmFuc2Zvcm1TdHlsZSwgcG9pbnQpO1xyXG4gICAgICAgIHRoaXMuc3R5bGVbc3R5bGUudHJhbnNmb3JtXSA9IFwiXCIgKyB0cmFuc2Zvcm1TdHlsZS5qb2luKCcgJyk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy50cmFuc2xhdGUsIHBvaW50KTtcclxuICAgIH07XHJcbiAgICBUcmFuc2xhdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaG9va3MuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUcmFuc2xhdGVyO1xyXG59KCkpO1xuXG52YXIgQmFzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJhc2UoY29udGVudCwgdHJhbnNsYXRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVyID0gdHJhbnNsYXRlcjtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgRXZlbnRFbWl0dGVyKFtcclxuICAgICAgICAgICAgJ21vdmUnLFxyXG4gICAgICAgICAgICAnZW5kJyxcclxuICAgICAgICAgICAgJ2JlZm9yZUZvcmNlU3RvcCcsXHJcbiAgICAgICAgICAgICdmb3JjZVN0b3AnLFxyXG4gICAgICAgICAgICAndGltZScsXHJcbiAgICAgICAgICAgICd0aW1lRnVuY3Rpb24nXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IGNvbnRlbnQuc3R5bGU7XHJcbiAgICB9XHJcbiAgICBCYXNlLnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAoZW5kUG9pbnQpIHtcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZXIudHJhbnNsYXRlKGVuZFBvaW50KTtcclxuICAgIH07XHJcbiAgICBCYXNlLnByb3RvdHlwZS5zZXRQZW5kaW5nID0gZnVuY3Rpb24gKHBlbmRpbmcpIHtcclxuICAgICAgICB0aGlzLnBlbmRpbmcgPSBwZW5kaW5nO1xyXG4gICAgfTtcclxuICAgIEJhc2UucHJvdG90eXBlLnNldEZvcmNlU3RvcHBlZCA9IGZ1bmN0aW9uIChmb3JjZVN0b3BwZWQpIHtcclxuICAgICAgICB0aGlzLmZvcmNlU3RvcHBlZCA9IGZvcmNlU3RvcHBlZDtcclxuICAgIH07XHJcbiAgICBCYXNlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaG9va3MuZGVzdHJveSgpO1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBCYXNlO1xyXG59KCkpO1xuXG52YXIgVHJhbnNpdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhUcmFuc2l0aW9uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVHJhbnNpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBUcmFuc2l0aW9uLnByb3RvdHlwZS5zdGFydFByb2JlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHByb2JlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gX3RoaXMudHJhbnNsYXRlci5nZXRDb21wdXRlZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5tb3ZlLCBwb3MpO1xyXG4gICAgICAgICAgICAvLyBleGN1dGUgd2hlbiB0cmFuc2l0aW9uIGVuZHNcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5wZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBwb3MpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLnRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHByb2JlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocHJvYmUpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zaXRpb24ucHJvdG90eXBlLnRyYW5zaXRpb25UaW1lID0gZnVuY3Rpb24gKHRpbWUpIHtcclxuICAgICAgICBpZiAodGltZSA9PT0gdm9pZCAwKSB7IHRpbWUgPSAwOyB9XHJcbiAgICAgICAgdGhpcy5zdHlsZVtzdHlsZS50cmFuc2l0aW9uRHVyYXRpb25dID0gdGltZSArICdtcyc7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy50aW1lLCB0aW1lKTtcclxuICAgIH07XHJcbiAgICBUcmFuc2l0aW9uLnByb3RvdHlwZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAoZWFzaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdHlsZVtzdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25dID0gZWFzaW5nO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMudGltZUZ1bmN0aW9uLCBlYXNpbmcpO1xyXG4gICAgfTtcclxuICAgIFRyYW5zaXRpb24ucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoc3RhcnRQb2ludCwgZW5kUG9pbnQsIHRpbWUsIGVhc2luZ0ZuLCBpc1NsaWVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0UGVuZGluZyh0aW1lID4gMCAmJiAoc3RhcnRQb2ludC54ICE9PSBlbmRQb2ludC54IHx8IHN0YXJ0UG9pbnQueSAhPT0gZW5kUG9pbnQueSkpO1xyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uKGVhc2luZ0ZuKTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25UaW1lKHRpbWUpO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlKGVuZFBvaW50KTtcclxuICAgICAgICBpZiAodGltZSAmJiB0aGlzLm9wdGlvbnMucHJvYmVUeXBlID09PSBQcm9iZS5SZWFsdGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0UHJvYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgd2UgY2hhbmdlIGNvbnRlbnQncyB0cmFuc2Zvcm1ZIGluIGEgdGlja1xyXG4gICAgICAgIC8vIHN1Y2ggYXM6IDAgLT4gNTBweCAtPiAwXHJcbiAgICAgICAgLy8gdHJhbnNpdGlvbmVuZCB3aWxsIG5vdCBiZSB0cmlnZ2VyZWRcclxuICAgICAgICAvLyBzbyB3ZSBmb3JjZXVwZGF0ZSBieSByZWZsb3dcclxuICAgICAgICBpZiAoIXRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVmbG93ID0gdGhpcy5jb250ZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbm8gbmVlZCB0byBkaXNwYXRjaCBtb3ZlIGFuZCBlbmQgd2hlbiBzbGllbnRcclxuICAgICAgICBpZiAoIXRpbWUgJiYgIWlzU2xpZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMubW92ZSwgZW5kUG9pbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgZW5kUG9pbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBUcmFuc2l0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHN0aWxsIGluIHRyYW5zaXRpb25cclxuICAgICAgICBpZiAodGhpcy5wZW5kaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGVuZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudGltZXIpO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnRyYW5zbGF0ZXIuZ2V0Q29tcHV0ZWRQb3NpdGlvbigpLCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvblRpbWUoKTtcclxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGUoeyB4OiB4LCB5OiB5IH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZvcmNlU3RvcHBlZCh0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlRm9yY2VTdG9wLCB7IHg6IHgsIHk6IHkgfSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmZvcmNlU3RvcCwgeyB4OiB4LCB5OiB5IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJhbnNpdGlvbjtcclxufShCYXNlKSk7XG5cbnZhciBBbmltYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQW5pbWF0aW9uLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIEFuaW1hdGlvbi5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChzdGFydFBvaW50LCBlbmRQb2ludCwgdGltZSwgZWFzaW5nRm4sIGlzU2xpZW50KSB7XHJcbiAgICAgICAgLy8gdGltZSBpcyAwXHJcbiAgICAgICAgaWYgKCF0aW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlKGVuZFBvaW50KTtcclxuICAgICAgICAgICAgLy8gaWYgd2UgY2hhbmdlIGNvbnRlbnQncyB0cmFuc2Zvcm1ZIGluIGEgdGlja1xyXG4gICAgICAgICAgICAvLyBzdWNoIGFzOiAwIC0+IDUwcHggLT4gMFxyXG4gICAgICAgICAgICAvLyB0cmFuc2l0aW9uZW5kIHdpbGwgbm90IGJlIHRyaWdnZXJlZFxyXG4gICAgICAgICAgICAvLyBzbyB3ZSBmb3JjZXVwZGF0ZSBieSByZWZsb3dcclxuICAgICAgICAgICAgdGhpcy5fcmVmbG93ID0gdGhpcy5jb250ZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgLy8gbm8gbmVlZCB0byBkaXNwYXRjaCBtb3ZlIGFuZCBlbmQgd2hlbiBzbGllbnRcclxuICAgICAgICAgICAgaWYgKGlzU2xpZW50KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLm1vdmUsIGVuZFBvaW50KTtcclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIGVuZFBvaW50KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW1hdGUoc3RhcnRQb2ludCwgZW5kUG9pbnQsIHRpbWUsIGVhc2luZ0ZuKTtcclxuICAgIH07XHJcbiAgICBBbmltYXRpb24ucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoc3RhcnRQb2ludCwgZW5kUG9pbnQsIGR1cmF0aW9uLCBlYXNpbmdGbikge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IGdldE5vdygpO1xyXG4gICAgICAgIHZhciBkZXN0VGltZSA9IHN0YXJ0VGltZSArIGR1cmF0aW9uO1xyXG4gICAgICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbm93ID0gZ2V0Tm93KCk7XHJcbiAgICAgICAgICAgIC8vIGpzIGFuaW1hdGlvbiBlbmRcclxuICAgICAgICAgICAgaWYgKG5vdyA+PSBkZXN0VGltZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNsYXRlKGVuZFBvaW50KTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5tb3ZlLCBlbmRQb2ludCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBlbmRQb2ludCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm93ID0gKG5vdyAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbjtcclxuICAgICAgICAgICAgdmFyIGVhc2luZyA9IGVhc2luZ0ZuKG5vdyk7XHJcbiAgICAgICAgICAgIHZhciBuZXdQb2ludCA9IHt9O1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlbmRQb2ludCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRWYWx1ZSA9IHN0YXJ0UG9pbnRba2V5XTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmRWYWx1ZSA9IGVuZFBvaW50W2tleV07XHJcbiAgICAgICAgICAgICAgICBuZXdQb2ludFtrZXldID0gKGVuZFZhbHVlIC0gc3RhcnRWYWx1ZSkgKiBlYXNpbmcgKyBzdGFydFZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3RoaXMudHJhbnNsYXRlKG5ld1BvaW50KTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLnBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnRpbWVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnByb2JlVHlwZSA9PT0gUHJvYmUuUmVhbHRpbWUpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5tb3ZlLCBuZXdQb2ludCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UGVuZGluZyh0cnVlKTtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVyKTtcclxuICAgICAgICBzdGVwKCk7XHJcbiAgICB9O1xyXG4gICAgQW5pbWF0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHN0aWxsIGluIHJlcXVlc3RGcmFtZUFuaW1hdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQZW5kaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLnRyYW5zbGF0ZXIuZ2V0Q29tcHV0ZWRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZvcmNlU3RvcHBlZCh0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlRm9yY2VTdG9wLCBwb3MpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5mb3JjZVN0b3AsIHBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBBbmltYXRpb247XHJcbn0oQmFzZSkpO1xuXG5mdW5jdGlvbiBjcmVhdGVBbmltYXRlcihlbGVtZW50LCB0cmFuc2xhdGVyLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgdXNlVHJhbnNpdGlvbiA9IG9wdGlvbnMudXNlVHJhbnNpdGlvbjtcclxuICAgIHZhciBhbmltYXRlck9wdGlvbnMgPSB7fTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhbmltYXRlck9wdGlvbnMsICdwcm9iZVR5cGUnLCB7XHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5wcm9iZVR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAodXNlVHJhbnNpdGlvbikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNpdGlvbihlbGVtZW50LCB0cmFuc2xhdGVyLCBhbmltYXRlck9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYXRpb24oZWxlbWVudCwgdHJhbnNsYXRlciwgYW5pbWF0ZXJPcHRpb25zKTtcclxuICAgIH1cclxufVxuXG52YXIgQmVoYXZpb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCZWhhdmlvcih3cmFwcGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyID0gd3JhcHBlcjtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgRXZlbnRFbWl0dGVyKFsnbW9tZW50dW0nLCAnZW5kJ10pO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMud3JhcHBlci5jaGlsZHJlblswXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSAwO1xyXG4gICAgfVxyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gRGlyZWN0aW9uLkRlZmF1bHQ7XHJcbiAgICAgICAgdGhpcy5tb3ZpbmdEaXJlY3Rpb24gPSBEaXJlY3Rpb24uRGVmYXVsdDtcclxuICAgICAgICB0aGlzLmRpc3QgPSAwO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgZGVsdGEgPSB0aGlzLmhhc1Njcm9sbCA/IGRlbHRhIDogMDtcclxuICAgICAgICB0aGlzLm1vdmluZ0RpcmVjdGlvbiA9XHJcbiAgICAgICAgICAgIGRlbHRhID4gMFxyXG4gICAgICAgICAgICAgICAgPyBEaXJlY3Rpb24uTmVnYXRpdmVcclxuICAgICAgICAgICAgICAgIDogZGVsdGEgPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBEaXJlY3Rpb24uUG9zaXRpdmVcclxuICAgICAgICAgICAgICAgICAgICA6IERpcmVjdGlvbi5EZWZhdWx0O1xyXG4gICAgICAgIHZhciBuZXdQb3MgPSB0aGlzLmN1cnJlbnRQb3MgKyBkZWx0YTtcclxuICAgICAgICAvLyBTbG93IGRvd24gb3Igc3RvcCBpZiBvdXRzaWRlIG9mIHRoZSBib3VuZGFyaWVzXHJcbiAgICAgICAgaWYgKG5ld1BvcyA+IHRoaXMubWluU2Nyb2xsUG9zIHx8IG5ld1BvcyA8IHRoaXMubWF4U2Nyb2xsUG9zKSB7XHJcbiAgICAgICAgICAgIGlmICgobmV3UG9zID4gdGhpcy5taW5TY3JvbGxQb3MgJiYgdGhpcy5vcHRpb25zLmJvdW5jZXNbMF0pIHx8XHJcbiAgICAgICAgICAgICAgICAobmV3UG9zIDwgdGhpcy5tYXhTY3JvbGxQb3MgJiYgdGhpcy5vcHRpb25zLmJvdW5jZXNbMV0pKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSB0aGlzLmN1cnJlbnRQb3MgKyBkZWx0YSAvIDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3MgPVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1BvcyA+IHRoaXMubWluU2Nyb2xsUG9zID8gdGhpcy5taW5TY3JvbGxQb3MgOiB0aGlzLm1heFNjcm9sbFBvcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3UG9zO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcclxuICAgICAgICB2YXIgbW9tZW50dW1JbmZvID0ge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGFic0Rpc3QgPSBNYXRoLmFicyh0aGlzLmN1cnJlbnRQb3MgLSB0aGlzLnN0YXJ0UG9zKTtcclxuICAgICAgICAvLyBzdGFydCBtb21lbnR1bSBhbmltYXRpb24gaWYgbmVlZGVkXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb21lbnR1bSAmJlxyXG4gICAgICAgICAgICBkdXJhdGlvbiA8IHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0VGltZSAmJlxyXG4gICAgICAgICAgICBhYnNEaXN0ID4gdGhpcy5vcHRpb25zLm1vbWVudHVtTGltaXREaXN0YW5jZSkge1xyXG4gICAgICAgICAgICB2YXIgd3JhcHBlclNpemUgPSAodGhpcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5OZWdhdGl2ZSAmJiB0aGlzLm9wdGlvbnMuYm91bmNlc1swXSkgfHxcclxuICAgICAgICAgICAgICAgICh0aGlzLmRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlBvc2l0aXZlICYmIHRoaXMub3B0aW9ucy5ib3VuY2VzWzFdKVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLndyYXBwZXJTaXplXHJcbiAgICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgIG1vbWVudHVtSW5mbyA9IHRoaXMuaGFzU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMubW9tZW50dW0odGhpcy5jdXJyZW50UG9zLCB0aGlzLnN0YXJ0UG9zLCBkdXJhdGlvbiwgdGhpcy5tYXhTY3JvbGxQb3MsIHRoaXMubWluU2Nyb2xsUG9zLCB3cmFwcGVyU2l6ZSwgdGhpcy5vcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgOiB7IGRlc3RpbmF0aW9uOiB0aGlzLmN1cnJlbnRQb3MsIGR1cmF0aW9uOiAwIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmVuZCwgbW9tZW50dW1JbmZvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudHVtSW5mbztcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUubW9tZW50dW0gPSBmdW5jdGlvbiAoY3VycmVudCwgc3RhcnQsIHRpbWUsIGxvd2VyTWFyZ2luLCB1cHBlck1hcmdpbiwgd3JhcHBlclNpemUsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7IH1cclxuICAgICAgICB2YXIgZGlzdGFuY2UgPSBjdXJyZW50IC0gc3RhcnQ7XHJcbiAgICAgICAgdmFyIHNwZWVkID0gTWF0aC5hYnMoZGlzdGFuY2UpIC8gdGltZTtcclxuICAgICAgICB2YXIgZGVjZWxlcmF0aW9uID0gb3B0aW9ucy5kZWNlbGVyYXRpb24sIHN3aXBlQm91bmNlVGltZSA9IG9wdGlvbnMuc3dpcGVCb3VuY2VUaW1lLCBzd2lwZVRpbWUgPSBvcHRpb25zLnN3aXBlVGltZTtcclxuICAgICAgICB2YXIgbW9tZW50dW1EYXRhID0ge1xyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogY3VycmVudCArIChzcGVlZCAvIGRlY2VsZXJhdGlvbikgKiAoZGlzdGFuY2UgPCAwID8gLTEgOiAxKSxcclxuICAgICAgICAgICAgZHVyYXRpb246IHN3aXBlVGltZSxcclxuICAgICAgICAgICAgcmF0ZTogMTVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMubW9tZW50dW0sIG1vbWVudHVtRGF0YSwgZGlzdGFuY2UpO1xyXG4gICAgICAgIGlmIChtb21lbnR1bURhdGEuZGVzdGluYXRpb24gPCBsb3dlck1hcmdpbikge1xyXG4gICAgICAgICAgICBtb21lbnR1bURhdGEuZGVzdGluYXRpb24gPSB3cmFwcGVyU2l6ZVxyXG4gICAgICAgICAgICAgICAgPyBNYXRoLm1heChsb3dlck1hcmdpbiAtIHdyYXBwZXJTaXplIC8gNCwgbG93ZXJNYXJnaW4gLSAod3JhcHBlclNpemUgLyBtb21lbnR1bURhdGEucmF0ZSkgKiBzcGVlZClcclxuICAgICAgICAgICAgICAgIDogbG93ZXJNYXJnaW47XHJcbiAgICAgICAgICAgIG1vbWVudHVtRGF0YS5kdXJhdGlvbiA9IHN3aXBlQm91bmNlVGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobW9tZW50dW1EYXRhLmRlc3RpbmF0aW9uID4gdXBwZXJNYXJnaW4pIHtcclxuICAgICAgICAgICAgbW9tZW50dW1EYXRhLmRlc3RpbmF0aW9uID0gd3JhcHBlclNpemVcclxuICAgICAgICAgICAgICAgID8gTWF0aC5taW4odXBwZXJNYXJnaW4gKyB3cmFwcGVyU2l6ZSAvIDQsIHVwcGVyTWFyZ2luICsgKHdyYXBwZXJTaXplIC8gbW9tZW50dW1EYXRhLnJhdGUpICogc3BlZWQpXHJcbiAgICAgICAgICAgICAgICA6IHVwcGVyTWFyZ2luO1xyXG4gICAgICAgICAgICBtb21lbnR1bURhdGEuZHVyYXRpb24gPSBzd2lwZUJvdW5jZVRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vbWVudHVtRGF0YS5kZXN0aW5hdGlvbiA9IE1hdGgucm91bmQobW9tZW50dW1EYXRhLmRlc3RpbmF0aW9uKTtcclxuICAgICAgICByZXR1cm4gbW9tZW50dW1EYXRhO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS51cGRhdGVEaXJlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFic0Rpc3QgPSBNYXRoLnJvdW5kKHRoaXMuY3VycmVudFBvcykgLSB0aGlzLmFic1N0YXJ0UG9zO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID1cclxuICAgICAgICAgICAgYWJzRGlzdCA+IDBcclxuICAgICAgICAgICAgICAgID8gRGlyZWN0aW9uLk5lZ2F0aXZlXHJcbiAgICAgICAgICAgICAgICA6IGFic0Rpc3QgPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyBEaXJlY3Rpb24uUG9zaXRpdmVcclxuICAgICAgICAgICAgICAgICAgICA6IERpcmVjdGlvbi5EZWZhdWx0O1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMub3B0aW9ucy5yZWN0LCBzaXplID0gX2Euc2l6ZSwgcG9zaXRpb24gPSBfYS5wb3NpdGlvbjtcclxuICAgICAgICB2YXIgaXNXcmFwcGVyU3RhdGljID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy53cmFwcGVyLCBudWxsKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYyc7XHJcbiAgICAgICAgdmFyIHdyYXBwZXJSZWN0ID0gZ2V0UmVjdCh0aGlzLndyYXBwZXIpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlclNpemUgPSB3cmFwcGVyUmVjdFtzaXplXTtcclxuICAgICAgICB2YXIgY29udGVudFJlY3QgPSBnZXRSZWN0KHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50U2l6ZSA9IGNvbnRlbnRSZWN0W3NpemVdO1xyXG4gICAgICAgIHRoaXMucmVsYXRpdmVPZmZzZXQgPSBjb250ZW50UmVjdFtwb3NpdGlvbl07XHJcbiAgICAgICAgaWYgKGlzV3JhcHBlclN0YXRpYykge1xyXG4gICAgICAgICAgICB0aGlzLnJlbGF0aXZlT2Zmc2V0IC09IHdyYXBwZXJSZWN0W3Bvc2l0aW9uXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5taW5TY3JvbGxQb3MgPSAwO1xyXG4gICAgICAgIHRoaXMubWF4U2Nyb2xsUG9zID0gdGhpcy53cmFwcGVyU2l6ZSAtIHRoaXMuY29udGVudFNpemU7XHJcbiAgICAgICAgaWYgKHRoaXMubWF4U2Nyb2xsUG9zIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1heFNjcm9sbFBvcyAtPSB0aGlzLnJlbGF0aXZlT2Zmc2V0O1xyXG4gICAgICAgICAgICB0aGlzLm1pblNjcm9sbFBvcyA9IC10aGlzLnJlbGF0aXZlT2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhc1Njcm9sbCA9XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zY3JvbGxhYmxlICYmIHRoaXMubWF4U2Nyb2xsUG9zIDwgdGhpcy5taW5TY3JvbGxQb3M7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc1Njcm9sbCkge1xyXG4gICAgICAgICAgICB0aGlzLm1heFNjcm9sbFBvcyA9IHRoaXMubWluU2Nyb2xsUG9zO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRTaXplID0gdGhpcy53cmFwcGVyU2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgfTtcclxuICAgIEJlaGF2aW9yLnByb3RvdHlwZS51cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSBwb3M7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmdldEN1cnJlbnRQb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5jdXJyZW50UG9zKTtcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUuY2hlY2tJbkJvdW5kYXJ5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuYWRqdXN0UG9zaXRpb24odGhpcy5jdXJyZW50UG9zKTtcclxuICAgICAgICB2YXIgaW5Cb3VuZGFyeSA9IHBvc2l0aW9uID09PSB0aGlzLmdldEN1cnJlbnRQb3MoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXHJcbiAgICAgICAgICAgIGluQm91bmRhcnk6IGluQm91bmRhcnlcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIC8vIGFkanVzdCBwb3NpdGlvbiB3aGVuIG91dCBvZiBib3VuZGFyeVxyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLmFkanVzdFBvc2l0aW9uID0gZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHZhciByb3VuZFBvcyA9IE1hdGgucm91bmQocG9zKTtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsIHx8IHJvdW5kUG9zID4gdGhpcy5taW5TY3JvbGxQb3MpIHtcclxuICAgICAgICAgICAgcm91bmRQb3MgPSB0aGlzLm1pblNjcm9sbFBvcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocm91bmRQb3MgPCB0aGlzLm1heFNjcm9sbFBvcykge1xyXG4gICAgICAgICAgICByb3VuZFBvcyA9IHRoaXMubWF4U2Nyb2xsUG9zO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm91bmRQb3M7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLnVwZGF0ZVN0YXJ0UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSB0aGlzLmN1cnJlbnRQb3M7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLnVwZGF0ZUFic1N0YXJ0UG9zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWJzU3RhcnRQb3MgPSB0aGlzLmN1cnJlbnRQb3M7XHJcbiAgICB9O1xyXG4gICAgQmVoYXZpb3IucHJvdG90eXBlLnJlc2V0U3RhcnRQb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdGFydFBvcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWJzU3RhcnRQb3MoKTtcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUuZ2V0QWJzRGlzdCA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuZGlzdCArPSBkZWx0YTtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5kaXN0KTtcclxuICAgIH07XHJcbiAgICBCZWhhdmlvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmhvb2tzLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQmVoYXZpb3I7XHJcbn0oKSk7XG5cbnZhciBfYSwgX2IsIF9jLCBfZDtcclxudmFyIFBhc3N0aHJvdWdoO1xyXG4oZnVuY3Rpb24gKFBhc3N0aHJvdWdoKSB7XHJcbiAgICBQYXNzdGhyb3VnaFtcIlllc1wiXSA9IFwieWVzXCI7XHJcbiAgICBQYXNzdGhyb3VnaFtcIk5vXCJdID0gXCJub1wiO1xyXG59KShQYXNzdGhyb3VnaCB8fCAoUGFzc3Rocm91Z2ggPSB7fSkpO1xyXG52YXIgUGFzc3Rocm91Z2hIYW5kbGVycyA9IChfYSA9IHt9LFxyXG4gICAgX2FbUGFzc3Rocm91Z2guWWVzXSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgX2FbUGFzc3Rocm91Z2guTm9dID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIF9hKTtcclxudmFyIERpcmVjdGlvbk1hcCA9IChfYiA9IHt9LFxyXG4gICAgX2JbRGlyZWN0aW9uTG9jay5Ib3Jpem9udGFsXSA9IChfYyA9IHt9LFxyXG4gICAgICAgIF9jW1Bhc3N0aHJvdWdoLlllc10gPSBFdmVudFBhc3N0aHJvdWdoLkhvcml6b250YWwsXHJcbiAgICAgICAgX2NbUGFzc3Rocm91Z2guTm9dID0gRXZlbnRQYXNzdGhyb3VnaC5WZXJ0aWNhbCxcclxuICAgICAgICBfYyksXHJcbiAgICBfYltEaXJlY3Rpb25Mb2NrLlZlcnRpY2FsXSA9IChfZCA9IHt9LFxyXG4gICAgICAgIF9kW1Bhc3N0aHJvdWdoLlllc10gPSBFdmVudFBhc3N0aHJvdWdoLlZlcnRpY2FsLFxyXG4gICAgICAgIF9kW1Bhc3N0aHJvdWdoLk5vXSA9IEV2ZW50UGFzc3Rocm91Z2guSG9yaXpvbnRhbCxcclxuICAgICAgICBfZCksXHJcbiAgICBfYik7XHJcbnZhciBEaXJlY3Rpb25Mb2NrQWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRGlyZWN0aW9uTG9ja0FjdGlvbihkaXJlY3Rpb25Mb2NrVGhyZXNob2xkLCBmcmVlU2Nyb2xsLCBldmVudFBhc3N0aHJvdWdoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkID0gZGlyZWN0aW9uTG9ja1RocmVzaG9sZDtcclxuICAgICAgICB0aGlzLmZyZWVTY3JvbGwgPSBmcmVlU2Nyb2xsO1xyXG4gICAgICAgIHRoaXMuZXZlbnRQYXNzdGhyb3VnaCA9IGV2ZW50UGFzc3Rocm91Z2g7XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgRGlyZWN0aW9uTG9ja0FjdGlvbi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSBEaXJlY3Rpb25Mb2NrLkRlZmF1bHQ7XHJcbiAgICB9O1xyXG4gICAgRGlyZWN0aW9uTG9ja0FjdGlvbi5wcm90b3R5cGUuY2hlY2tNb3ZpbmdEaXJlY3Rpb24gPSBmdW5jdGlvbiAoYWJzRGlzdFgsIGFic0Rpc3RZLCBlKSB7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlRGlyZWN0aW9uTG9jayhhYnNEaXN0WCwgYWJzRGlzdFkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUV2ZW50UGFzc3Rocm91Z2goZSk7XHJcbiAgICB9O1xyXG4gICAgRGlyZWN0aW9uTG9ja0FjdGlvbi5wcm90b3R5cGUuYWRqdXN0RGVsdGEgPSBmdW5jdGlvbiAoZGVsdGFYLCBkZWx0YVkpIHtcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25Mb2NrZWQgPT09IERpcmVjdGlvbkxvY2suSG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICBkZWx0YVkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbkxvY2tlZCA9PT0gRGlyZWN0aW9uTG9jay5WZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICBkZWx0YVggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkZWx0YVg6IGRlbHRhWCxcclxuICAgICAgICAgICAgZGVsdGFZOiBkZWx0YVlcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIERpcmVjdGlvbkxvY2tBY3Rpb24ucHJvdG90eXBlLmNvbXB1dGVEaXJlY3Rpb25Mb2NrID0gZnVuY3Rpb24gKGFic0Rpc3RYLCBhYnNEaXN0WSkge1xyXG4gICAgICAgIC8vIElmIHlvdSBhcmUgc2Nyb2xsaW5nIGluIG9uZSBkaXJlY3Rpb24sIGxvY2sgaXRcclxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb25Mb2NrZWQgPT09IERpcmVjdGlvbkxvY2suRGVmYXVsdCAmJiAhdGhpcy5mcmVlU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIGlmIChhYnNEaXN0WCA+IGFic0Rpc3RZICsgdGhpcy5kaXJlY3Rpb25Mb2NrVGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tlZCA9IERpcmVjdGlvbkxvY2suSG9yaXpvbnRhbDsgLy8gbG9jayBob3Jpem9udGFsbHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChhYnNEaXN0WSA+PSBhYnNEaXN0WCArIHRoaXMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25Mb2NrZWQgPSBEaXJlY3Rpb25Mb2NrLlZlcnRpY2FsOyAvLyBsb2NrIHZlcnRpY2FsbHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uTG9ja2VkID0gRGlyZWN0aW9uTG9jay5Ob25lOyAvLyBubyBsb2NrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgRGlyZWN0aW9uTG9ja0FjdGlvbi5wcm90b3R5cGUuaGFuZGxlRXZlbnRQYXNzdGhyb3VnaCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGhhbmRsZU1hcCA9IERpcmVjdGlvbk1hcFt0aGlzLmRpcmVjdGlvbkxvY2tlZF07XHJcbiAgICAgICAgaWYgKGhhbmRsZU1hcCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ldmVudFBhc3N0aHJvdWdoID09PSBoYW5kbGVNYXBbUGFzc3Rocm91Z2guWWVzXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFBhc3N0aHJvdWdoSGFuZGxlcnNbUGFzc3Rocm91Z2guWWVzXShlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV2ZW50UGFzc3Rocm91Z2ggPT09IGhhbmRsZU1hcFtQYXNzdGhyb3VnaC5Ob10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQYXNzdGhyb3VnaEhhbmRsZXJzW1Bhc3N0aHJvdWdoLk5vXShlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERpcmVjdGlvbkxvY2tBY3Rpb247XHJcbn0oKSk7XG5cbnZhciBTY3JvbGxlckFjdGlvbnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTY3JvbGxlckFjdGlvbnMoc2Nyb2xsQmVoYXZpb3JYLCBzY3JvbGxCZWhhdmlvclksIGFjdGlvbnNIYW5kbGVyLCBhbmltYXRlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgRXZlbnRFbWl0dGVyKFtcclxuICAgICAgICAgICAgJ3N0YXJ0JyxcclxuICAgICAgICAgICAgJ2JlZm9yZU1vdmUnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsU3RhcnQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgJ2JlZm9yZUVuZCcsXHJcbiAgICAgICAgICAgICdlbmQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsRW5kJ1xyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYID0gc2Nyb2xsQmVoYXZpb3JYO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZID0gc2Nyb2xsQmVoYXZpb3JZO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uc0hhbmRsZXIgPSBhY3Rpb25zSGFuZGxlcjtcclxuICAgICAgICB0aGlzLmFuaW1hdGVyID0gYW5pbWF0ZXI7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tBY3Rpb24gPSBuZXcgRGlyZWN0aW9uTG9ja0FjdGlvbihvcHRpb25zLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQsIG9wdGlvbnMuZnJlZVNjcm9sbCwgb3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoKTtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYmluZEFjdGlvbnNIYW5kbGVyKCk7XHJcbiAgICB9XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmJpbmRBY3Rpb25zSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIFttb3VzZXx0b3VjaF1zdGFydCBldmVudFxyXG4gICAgICAgIHRoaXMuYWN0aW9uc0hhbmRsZXIuaG9va3Mub24odGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5ldmVudFR5cGVzLnN0YXJ0LCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZVN0YXJ0KGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFttb3VzZXx0b3VjaF1tb3ZlIGV2ZW50XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5vbih0aGlzLmFjdGlvbnNIYW5kbGVyLmhvb2tzLmV2ZW50VHlwZXMubW92ZSwgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YVggPSBfYS5kZWx0YVgsIGRlbHRhWSA9IF9hLmRlbHRhWSwgZSA9IF9hLmU7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMuZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTW92ZShkZWx0YVgsIGRlbHRhWSwgZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gW21vdXNlfHRvdWNoXWVuZCBldmVudFxyXG4gICAgICAgIHRoaXMuYWN0aW9uc0hhbmRsZXIuaG9va3Mub24odGhpcy5hY3Rpb25zSGFuZGxlci5ob29rcy5ldmVudFR5cGVzLmVuZCwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVFbmQoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY2xpY2tcclxuICAgICAgICB0aGlzLmFjdGlvbnNIYW5kbGVyLmhvb2tzLm9uKHRoaXMuYWN0aW9uc0hhbmRsZXIuaG9va3MuZXZlbnRUeXBlcy5jbGljaywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgLy8gaGFuZGxlIG5hdGl2ZSBjbGljayBldmVudFxyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZW5hYmxlZCAmJiAhZS5fY29uc3RydWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZUNsaWNrKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5oYW5kbGVTdGFydCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIHRpbWVzdGFtcCA9IGdldE5vdygpO1xyXG4gICAgICAgIHRoaXMubW92ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxvY2tBY3Rpb24ucmVzZXQoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWC5zdGFydCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZLnN0YXJ0KCk7XHJcbiAgICAgICAgLy8gZm9yY2Ugc3RvcHBpbmcgbGFzdCB0cmFuc2l0aW9uIG9yIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZXIuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYLnJlc2V0U3RhcnRQb3MoKTtcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWS5yZXNldFN0YXJ0UG9zKCk7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zdGFydCwgZSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKGRlbHRhWCwgZGVsdGFZLCBlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlTW92ZSwgZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWJzRGlzdFggPSB0aGlzLnNjcm9sbEJlaGF2aW9yWC5nZXRBYnNEaXN0KGRlbHRhWCk7XHJcbiAgICAgICAgdmFyIGFic0Rpc3RZID0gdGhpcy5zY3JvbGxCZWhhdmlvclkuZ2V0QWJzRGlzdChkZWx0YVkpO1xyXG4gICAgICAgIHZhciB0aW1lc3RhbXAgPSBnZXROb3coKTtcclxuICAgICAgICAvLyBXZSBuZWVkIHRvIG1vdmUgYXQgbGVhc3QgbW9tZW50dW1MaW1pdERpc3RhbmNlIHBpeGVsc1xyXG4gICAgICAgIC8vIGZvciB0aGUgc2Nyb2xsaW5nIHRvIGluaXRpYXRlXHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tNb21lbnR1bShhYnNEaXN0WCwgYWJzRGlzdFksIHRpbWVzdGFtcCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbkxvY2tBY3Rpb24uY2hlY2tNb3ZpbmdEaXJlY3Rpb24oYWJzRGlzdFgsIGFic0Rpc3RZLCBlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnNIYW5kbGVyLnNldEluaXRpYXRlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRlbHRhID0gdGhpcy5kaXJlY3Rpb25Mb2NrQWN0aW9uLmFkanVzdERlbHRhKGRlbHRhWCwgZGVsdGFZKTtcclxuICAgICAgICB2YXIgbmV3WCA9IHRoaXMuc2Nyb2xsQmVoYXZpb3JYLm1vdmUoZGVsdGEuZGVsdGFYKTtcclxuICAgICAgICB2YXIgbmV3WSA9IHRoaXMuc2Nyb2xsQmVoYXZpb3JZLm1vdmUoZGVsdGEuZGVsdGFZKTtcclxuICAgICAgICBpZiAoIXRoaXMubW92ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsU3RhcnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW1hdGVyLnRyYW5zbGF0ZSh7XHJcbiAgICAgICAgICAgIHg6IG5ld1gsXHJcbiAgICAgICAgICAgIHk6IG5ld1lcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoU2Nyb2xsKHRpbWVzdGFtcCk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXJBY3Rpb25zLnByb3RvdHlwZS5kaXNwYXRjaFNjcm9sbCA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcclxuICAgICAgICAvLyBkaXNwYXRjaCBzY3JvbGwgaW4gaW50ZXJ2YWwgdGltZVxyXG4gICAgICAgIGlmICh0aW1lc3RhbXAgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0VGltZSkge1xyXG4gICAgICAgICAgICAvLyByZWZyZXNoIHRpbWUgYW5kIHN0YXJ0aW5nIHBvc2l0aW9uIHRvIGluaXRpYXRlIGEgbW9tZW50dW1cclxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aW1lc3RhbXA7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JYLnVwZGF0ZVN0YXJ0UG9zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZLnVwZGF0ZVN0YXJ0UG9zKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJvYmVUeXBlID09PSBQcm9iZS5UaHJvdHRsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGwsIHRoaXMuZ2V0Q3VycmVudFBvcygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkaXNwYXRjaCBzY3JvbGwgYWxsIHRoZSB0aW1lXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcm9iZVR5cGUgPiBQcm9iZS5UaHJvdHRsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbCwgdGhpcy5nZXRDdXJyZW50UG9zKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmNoZWNrTW9tZW50dW0gPSBmdW5jdGlvbiAoYWJzRGlzdFgsIGFic0Rpc3RZLCB0aW1lc3RhbXApIHtcclxuICAgICAgICByZXR1cm4gKHRpbWVzdGFtcCAtIHRoaXMuZW5kVGltZSA+IHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0VGltZSAmJlxyXG4gICAgICAgICAgICBhYnNEaXN0WSA8IHRoaXMub3B0aW9ucy5tb21lbnR1bUxpbWl0RGlzdGFuY2UgJiZcclxuICAgICAgICAgICAgYWJzRGlzdFggPCB0aGlzLm9wdGlvbnMubW9tZW50dW1MaW1pdERpc3RhbmNlKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmhhbmRsZUVuZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlRW5kLCBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50UG9zID0gdGhpcy5nZXRDdXJyZW50UG9zKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclgudXBkYXRlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclkudXBkYXRlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBlLCBjdXJyZW50UG9zKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbmltYXRlci50cmFuc2xhdGUoY3VycmVudFBvcyk7XHJcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZ2V0Tm93KCk7XHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gdGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxFbmQsIGN1cnJlbnRQb3MsIGR1cmF0aW9uKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoIXByZXZlbnREZWZhdWx0RXhjZXB0aW9uRm4oZS50YXJnZXQsIHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY3JvbGxlckFjdGlvbnMucHJvdG90eXBlLmdldEN1cnJlbnRQb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdGhpcy5zY3JvbGxCZWhhdmlvclguZ2V0Q3VycmVudFBvcygpLFxyXG4gICAgICAgICAgICB5OiB0aGlzLnNjcm9sbEJlaGF2aW9yWS5nZXRDdXJyZW50UG9zKClcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyQWN0aW9ucy5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmVuZFRpbWUgPSAwO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyQWN0aW9ucy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmhvb2tzLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2Nyb2xsZXJBY3Rpb25zO1xyXG59KCkpO1xuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25zSGFuZGxlck9wdGlvbnMoYnNPcHRpb25zKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IFtcclxuICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgICdiaW5kVG9XcmFwcGVyJyxcclxuICAgICAgICAnZGlzYWJsZU1vdXNlJyxcclxuICAgICAgICAnZGlzYWJsZVRvdWNoJyxcclxuICAgICAgICAncHJldmVudERlZmF1bHQnLFxyXG4gICAgICAgICdzdG9wUHJvcGFnYXRpb24nLFxyXG4gICAgICAgICd0YWdFeGNlcHRpb24nLFxyXG4gICAgICAgICdwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbidcclxuICAgIF0ucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXIpIHtcclxuICAgICAgICBwcmV2W2N1cl0gPSBic09wdGlvbnNbY3VyXTtcclxuICAgICAgICByZXR1cm4gcHJldjtcclxuICAgIH0sIHt9KTtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUJlaGF2aW9yT3B0aW9ucyhic09wdGlvbnMsIGV4dHJhUHJvcCwgYm91bmNlcywgcmVjdCkge1xyXG4gICAgdmFyIG9wdGlvbnMgPSBbXHJcbiAgICAgICAgJ21vbWVudHVtJyxcclxuICAgICAgICAnbW9tZW50dW1MaW1pdFRpbWUnLFxyXG4gICAgICAgICdtb21lbnR1bUxpbWl0RGlzdGFuY2UnLFxyXG4gICAgICAgICdkZWNlbGVyYXRpb24nLFxyXG4gICAgICAgICdzd2lwZUJvdW5jZVRpbWUnLFxyXG4gICAgICAgICdzd2lwZVRpbWUnXHJcbiAgICBdLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VyKSB7XHJcbiAgICAgICAgcHJldltjdXJdID0gYnNPcHRpb25zW2N1cl07XHJcbiAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9LCB7fSk7XHJcbiAgICAvLyBhZGQgZXh0cmEgcHJvcGVydHlcclxuICAgIG9wdGlvbnMuc2Nyb2xsYWJsZSA9IGJzT3B0aW9uc1tleHRyYVByb3BdO1xyXG4gICAgb3B0aW9ucy5ib3VuY2VzID0gYm91bmNlcztcclxuICAgIG9wdGlvbnMucmVjdCA9IHJlY3Q7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxufVxuXG5mdW5jdGlvbiBidWJibGluZyhzb3VyY2UsIHRhcmdldCwgZXZlbnRzKSB7XHJcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgc291cmNlRXZlbnQ7XHJcbiAgICAgICAgdmFyIHRhcmdldEV2ZW50O1xyXG4gICAgICAgIGlmICh0eXBlb2YgZXZlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZUV2ZW50ID0gdGFyZ2V0RXZlbnQgPSBldmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNvdXJjZUV2ZW50ID0gZXZlbnQuc291cmNlO1xyXG4gICAgICAgICAgICB0YXJnZXRFdmVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc291cmNlLm9uKHNvdXJjZUV2ZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC50cmlnZ2VyLmFwcGx5KHRhcmdldCwgW3RhcmdldEV2ZW50XS5jb25jYXQoYXJncykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cblxudmFyIFNjcm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2Nyb2xsZXIod3JhcHBlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgRXZlbnRFbWl0dGVyKFtcclxuICAgICAgICAgICAgJ2JlZm9yZVN0YXJ0JyxcclxuICAgICAgICAgICAgJ2JlZm9yZU1vdmUnLFxyXG4gICAgICAgICAgICAnYmVmb3JlU2Nyb2xsU3RhcnQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsU3RhcnQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgJ2JlZm9yZUVuZCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxFbmQnLFxyXG4gICAgICAgICAgICAncmVmcmVzaCcsXHJcbiAgICAgICAgICAgICd0b3VjaEVuZCcsXHJcbiAgICAgICAgICAgICdlbmQnLFxyXG4gICAgICAgICAgICAnZmxpY2snLFxyXG4gICAgICAgICAgICAnc2Nyb2xsQ2FuY2VsJyxcclxuICAgICAgICAgICAgJ21vbWVudHVtJyxcclxuICAgICAgICAgICAgJ3Njcm9sbFRvJyxcclxuICAgICAgICAgICAgJ2lnbm9yZURpc01vdmVGb3JTYW1lUG9zJyxcclxuICAgICAgICAgICAgJ3Njcm9sbFRvRWxlbWVudCdcclxuICAgICAgICBdKTtcclxuICAgICAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHdyYXBwZXIuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB2YXIgX2EgPSB0aGlzXHJcbiAgICAgICAgICAgIC5vcHRpb25zLmJvdW5jZSwgX2IgPSBfYS5sZWZ0LCBsZWZ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBfYS5yaWdodCwgcmlnaHQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IF9hLnRvcCwgdG9wID0gX2QgPT09IHZvaWQgMCA/IHRydWUgOiBfZCwgX2UgPSBfYS5ib3R0b20sIGJvdHRvbSA9IF9lID09PSB2b2lkIDAgPyB0cnVlIDogX2U7XHJcbiAgICAgICAgLy8gZGlyZWN0aW9uIFhcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWCA9IG5ldyBCZWhhdmlvcih3cmFwcGVyLCBjcmVhdGVCZWhhdmlvck9wdGlvbnMob3B0aW9ucywgJ3Njcm9sbFgnLCBbbGVmdCwgcmlnaHRdLCB7XHJcbiAgICAgICAgICAgIHNpemU6ICd3aWR0aCcsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnbGVmdCdcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgLy8gZGlyZWN0aW9uIFlcclxuICAgICAgICB0aGlzLnNjcm9sbEJlaGF2aW9yWSA9IG5ldyBCZWhhdmlvcih3cmFwcGVyLCBjcmVhdGVCZWhhdmlvck9wdGlvbnMob3B0aW9ucywgJ3Njcm9sbFknLCBbdG9wLCBib3R0b21dLCB7XHJcbiAgICAgICAgICAgIHNpemU6ICdoZWlnaHQnLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCdcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGVyID0gbmV3IFRyYW5zbGF0ZXIodGhpcy5jb250ZW50KTtcclxuICAgICAgICB0aGlzLmFuaW1hdGVyID0gY3JlYXRlQW5pbWF0ZXIodGhpcy5jb250ZW50LCB0aGlzLnRyYW5zbGF0ZXIsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zSGFuZGxlciA9IG5ldyBBY3Rpb25zSGFuZGxlcih3cmFwcGVyLCBjcmVhdGVBY3Rpb25zSGFuZGxlck9wdGlvbnModGhpcy5vcHRpb25zKSk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gbmV3IFNjcm9sbGVyQWN0aW9ucyh0aGlzLnNjcm9sbEJlaGF2aW9yWCwgdGhpcy5zY3JvbGxCZWhhdmlvclksIHRoaXMuYWN0aW9uc0hhbmRsZXIsIHRoaXMuYW5pbWF0ZXIsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgdmFyIHJlc2l6ZUhhbmRsZXIgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVzaXplUmVnaXN0ZXIgPSBuZXcgRXZlbnRSZWdpc3Rlcih3aW5kb3csIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ29yaWVudGF0aW9uY2hhbmdlJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHJlc2l6ZUhhbmRsZXJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Jlc2l6ZScsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiByZXNpemVIYW5kbGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25FbmRSZWdpc3RlciA9IG5ldyBFdmVudFJlZ2lzdGVyKHRoaXMuY29udGVudCwgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBzdHlsZS50cmFuc2l0aW9uRW5kLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogdGhpcy50cmFuc2l0aW9uRW5kLmJpbmQodGhpcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmJpbmRUcmFuc2xhdGVyKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kQW5pbWF0ZXIoKTtcclxuICAgICAgICB0aGlzLmJpbmRBY3Rpb25zKCk7XHJcbiAgICAgICAgLy8gZW5hYmxlIHBvaW50ZXIgZXZlbnRzIHdoZW4gc2Nyb2xsaW5nIGVuZHNcclxuICAgICAgICB0aGlzLmhvb2tzLm9uKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxFbmQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMudG9nZ2xlUG9pbnRlckV2ZW50cyh0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuYmluZFRyYW5zbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgaG9va3MgPSB0aGlzLnRyYW5zbGF0ZXIuaG9va3M7XHJcbiAgICAgICAgaG9va3Mub24oaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVUcmFuc2xhdGUsIGZ1bmN0aW9uICh0cmFuc2Zvcm1TdHlsZSkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy50cmFuc2xhdGVaKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHlsZS5wdXNoKF90aGlzLm9wdGlvbnMudHJhbnNsYXRlWik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBkaXNhYmxlIHBvaW50ZXIgZXZlbnRzIHdoZW4gc2Nyb2xsaW5nXHJcbiAgICAgICAgaG9va3Mub24oaG9va3MuZXZlbnRUeXBlcy50cmFuc2xhdGUsIGZ1bmN0aW9uIChwb3MpIHtcclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlUG9zaXRpb25zKHBvcyk7XHJcbiAgICAgICAgICAgIF90aGlzLnRvZ2dsZVBvaW50ZXJFdmVudHMoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5iaW5kQW5pbWF0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyByZXNldCBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZXIuaG9va3Mub24odGhpcy5hbmltYXRlci5ob29rcy5ldmVudFR5cGVzLmVuZCwgZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLnJlc2V0UG9zaXRpb24oX3RoaXMub3B0aW9ucy5ib3VuY2VUaW1lKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZXIuc2V0UGVuZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ob29rcy50cmlnZ2VyKF90aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsRW5kLCBwb3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnViYmxpbmcodGhpcy5hbmltYXRlci5ob29rcywgdGhpcy5ob29rcywgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuYW5pbWF0ZXIuaG9va3MuZXZlbnRUeXBlcy5tb3ZlLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogdGhpcy5hbmltYXRlci5ob29rcy5ldmVudFR5cGVzLmZvcmNlU3RvcCxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbEVuZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLmJpbmRBY3Rpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGFjdGlvbnMgPSB0aGlzLmFjdGlvbnM7XHJcbiAgICAgICAgYnViYmxpbmcoYWN0aW9ucy5ob29rcywgdGhpcy5ob29rcywgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5zdGFydCxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZVN0YXJ0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogYWN0aW9ucy5ob29rcy5ldmVudFR5cGVzLnN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmhvb2tzLmV2ZW50VHlwZXMuYmVmb3JlU2Nyb2xsU3RhcnQgLy8ganVzdCBmb3IgZXZlbnQgYXBpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogYWN0aW9ucy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZU1vdmUsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaG9va3MuZXZlbnRUeXBlcy5iZWZvcmVNb3ZlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogYWN0aW9ucy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbFN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsU3RhcnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiBhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogYWN0aW9ucy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZUVuZCxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGhpcy5ob29rcy5ldmVudFR5cGVzLmJlZm9yZUVuZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgYWN0aW9ucy5ob29rcy5vbihhY3Rpb25zLmhvb2tzLmV2ZW50VHlwZXMuZW5kLCBmdW5jdGlvbiAoZSwgcG9zKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy50b3VjaEVuZCwgcG9zKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5lbmQsIHBvcykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGl0IGlzIGEgY2xpY2sgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgIGlmICghYWN0aW9ucy5tb3ZlZCAmJiBfdGhpcy5jaGVja0NsaWNrKGUpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlci5zZXRGb3JjZVN0b3BwZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbENhbmNlbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5hbmltYXRlci5zZXRGb3JjZVN0b3BwZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyByZXNldCBpZiB3ZSBhcmUgb3V0c2lkZSBvZiB0aGUgYm91bmRhcmllc1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMucmVzZXRQb3NpdGlvbihfdGhpcy5vcHRpb25zLmJvdW5jZVRpbWUsIGVhc2UuYm91bmNlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBhY3Rpb25zLmhvb2tzLm9uKGFjdGlvbnMuaG9va3MuZXZlbnRUeXBlcy5zY3JvbGxFbmQsIGZ1bmN0aW9uIChwb3MsIGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YVggPSBNYXRoLmFicyhwb3MueCAtIF90aGlzLnNjcm9sbEJlaGF2aW9yWC5zdGFydFBvcyk7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YVkgPSBNYXRoLmFicyhwb3MueSAtIF90aGlzLnNjcm9sbEJlaGF2aW9yWS5zdGFydFBvcyk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5jaGVja0ZsaWNrKGR1cmF0aW9uLCBkZWx0YVgsIGRlbHRhWSkpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmhvb2tzLnRyaWdnZXIoX3RoaXMuaG9va3MuZXZlbnRUeXBlcy5mbGljayk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLm1vbWVudHVtKHBvcywgZHVyYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuaG9va3MudHJpZ2dlcihfdGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbEVuZCwgcG9zKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuY2hlY2tGbGljayA9IGZ1bmN0aW9uIChkdXJhdGlvbiwgZGVsdGFYLCBkZWx0YVkpIHtcclxuICAgICAgICAvLyBmbGlja1xyXG4gICAgICAgIGlmICh0aGlzLmhvb2tzLmV2ZW50cy5mbGljay5sZW5ndGggPiAxICYmXHJcbiAgICAgICAgICAgIGR1cmF0aW9uIDwgdGhpcy5vcHRpb25zLmZsaWNrTGltaXRUaW1lICYmXHJcbiAgICAgICAgICAgIGRlbHRhWCA8IHRoaXMub3B0aW9ucy5mbGlja0xpbWl0RGlzdGFuY2UgJiZcclxuICAgICAgICAgICAgZGVsdGFZIDwgdGhpcy5vcHRpb25zLmZsaWNrTGltaXREaXN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLm1vbWVudHVtID0gZnVuY3Rpb24gKHBvcywgZHVyYXRpb24pIHtcclxuICAgICAgICB2YXIgbWV0YSA9IHtcclxuICAgICAgICAgICAgdGltZTogMCxcclxuICAgICAgICAgICAgZWFzaW5nOiBlYXNlLnN3aXBlcixcclxuICAgICAgICAgICAgbmV3WDogcG9zLngsXHJcbiAgICAgICAgICAgIG5ld1k6IHBvcy55XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBzdGFydCBtb21lbnR1bSBhbmltYXRpb24gaWYgbmVlZGVkXHJcbiAgICAgICAgdmFyIG1vbWVudHVtWCA9IHRoaXMuc2Nyb2xsQmVoYXZpb3JYLmVuZChkdXJhdGlvbik7XHJcbiAgICAgICAgdmFyIG1vbWVudHVtWSA9IHRoaXMuc2Nyb2xsQmVoYXZpb3JZLmVuZChkdXJhdGlvbik7XHJcbiAgICAgICAgbWV0YS5uZXdYID0gaXNVbmRlZihtb21lbnR1bVguZGVzdGluYXRpb24pXHJcbiAgICAgICAgICAgID8gbWV0YS5uZXdYXHJcbiAgICAgICAgICAgIDogbW9tZW50dW1YLmRlc3RpbmF0aW9uO1xyXG4gICAgICAgIG1ldGEubmV3WSA9IGlzVW5kZWYobW9tZW50dW1ZLmRlc3RpbmF0aW9uKVxyXG4gICAgICAgICAgICA/IG1ldGEubmV3WVxyXG4gICAgICAgICAgICA6IG1vbWVudHVtWS5kZXN0aW5hdGlvbjtcclxuICAgICAgICBtZXRhLnRpbWUgPSBNYXRoLm1heChtb21lbnR1bVguZHVyYXRpb24sIG1vbWVudHVtWS5kdXJhdGlvbik7XHJcbiAgICAgICAgdGhpcy5ob29rcy50cmlnZ2VyKHRoaXMuaG9va3MuZXZlbnRUeXBlcy5tb21lbnR1bSwgbWV0YSwgdGhpcyk7XHJcbiAgICAgICAgLy8gd2hlbiB4IG9yIHkgY2hhbmdlZCwgZG8gbW9tZW50dW0gYW5pbWF0aW9uIG5vdyFcclxuICAgICAgICBpZiAobWV0YS5uZXdYICE9PSBwb3MueCB8fCBtZXRhLm5ld1kgIT09IHBvcy55KSB7XHJcbiAgICAgICAgICAgIC8vIGNoYW5nZSBlYXNpbmcgZnVuY3Rpb24gd2hlbiBzY3JvbGxlciBnb2VzIG91dCBvZiB0aGUgYm91bmRhcmllc1xyXG4gICAgICAgICAgICBpZiAobWV0YS5uZXdYID4gdGhpcy5zY3JvbGxCZWhhdmlvclgubWluU2Nyb2xsUG9zIHx8XHJcbiAgICAgICAgICAgICAgICBtZXRhLm5ld1ggPCB0aGlzLnNjcm9sbEJlaGF2aW9yWC5tYXhTY3JvbGxQb3MgfHxcclxuICAgICAgICAgICAgICAgIG1ldGEubmV3WSA+IHRoaXMuc2Nyb2xsQmVoYXZpb3JZLm1pblNjcm9sbFBvcyB8fFxyXG4gICAgICAgICAgICAgICAgbWV0YS5uZXdZIDwgdGhpcy5zY3JvbGxCZWhhdmlvclkubWF4U2Nyb2xsUG9zKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRhLmVhc2luZyA9IGVhc2Uuc3dpcGVCb3VuY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyhtZXRhLm5ld1gsIG1ldGEubmV3WSwgbWV0YS50aW1lLCBtZXRhLmVhc2luZyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuY2hlY2tDbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gd2hlbiBpbiB0aGUgcHJvY2VzcyBvZiBwdWxsaW5nIGRvd24sIGl0IHNob3VsZCBub3QgcHJldmVudCBjbGlja1xyXG4gICAgICAgIHZhciBjYW5jZWxhYmxlID0ge1xyXG4gICAgICAgICAgICBwcmV2ZW50Q2xpY2s6IHRoaXMuYW5pbWF0ZXIuZm9yY2VTdG9wcGVkXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyB3ZSBzY3JvbGxlZCBsZXNzIHRoYW4gbW9tZW50dW1MaW1pdERpc3RhbmNlIHBpeGVsc1xyXG4gICAgICAgIGlmICh0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmNoZWNrQ2xpY2spKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoIWNhbmNlbGFibGUucHJldmVudENsaWNrKSB7XHJcbiAgICAgICAgICAgIHZhciBfZGJsY2xpY2sgPSB0aGlzLm9wdGlvbnMuZGJsY2xpY2s7XHJcbiAgICAgICAgICAgIHZhciBkYmxjbGlja1RyaWdnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKF9kYmxjbGljayAmJiB0aGlzLmxhc3RDbGlja1RpbWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSA9IF9kYmxjbGljay5kZWxheSwgZGVsYXkgPSBfYSA9PT0gdm9pZCAwID8gMzAwIDogX2E7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2V0Tm93KCkgLSB0aGlzLmxhc3RDbGlja1RpbWUgPCBkZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRibGNsaWNrVHJpZ2dlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2soZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50YXApIHtcclxuICAgICAgICAgICAgICAgIHRhcChlLCB0aGlzLm9wdGlvbnMudGFwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNsaWNrICYmXHJcbiAgICAgICAgICAgICAgICAhcHJldmVudERlZmF1bHRFeGNlcHRpb25GbihlLnRhcmdldCwgdGhpcy5vcHRpb25zLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgY2xpY2soZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2xpY2tUaW1lID0gZGJsY2xpY2tUcmlnZ2VkID8gbnVsbCA6IGdldE5vdygpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aW9ucy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZml4IGEgc2Nyb2xsIHByb2JsZW0gdW5kZXIgQW5kcm9pZCBjb25kaXRpb25cclxuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JhcHBlci5zY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcclxuICAgICAgICB0aGlzLnJlc2l6ZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMucmVzaXplUG9sbGluZyk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcy5jb250ZW50IHx8ICF0aGlzLmFuaW1hdGVyLnBlbmRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYW5pbWF0ZXIgPSB0aGlzLmFuaW1hdGVyO1xyXG4gICAgICAgIGFuaW1hdGVyLnRyYW5zaXRpb25UaW1lKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlc2V0UG9zaXRpb24odGhpcy5vcHRpb25zLmJvdW5jZVRpbWUsIGVhc2UuYm91bmNlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVyLnNldFBlbmRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnByb2JlVHlwZSAhPT0gUHJvYmUuUmVhbHRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuc2Nyb2xsRW5kLCB0aGlzLmdldEN1cnJlbnRQb3MoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnRvZ2dsZVBvaW50ZXJFdmVudHMgPSBmdW5jdGlvbiAoZW5hYmxlZCkge1xyXG4gICAgICAgIGlmIChlbmFibGVkID09PSB2b2lkIDApIHsgZW5hYmxlZCA9IHRydWU7IH1cclxuICAgICAgICB2YXIgZWwgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoXHJcbiAgICAgICAgICAgID8gdGhpcy5jb250ZW50LmNoaWxkcmVuXHJcbiAgICAgICAgICAgIDogW3RoaXMuY29udGVudF07XHJcbiAgICAgICAgdmFyIHBvaW50ZXJFdmVudHMgPSBlbmFibGVkID8gJ2F1dG8nIDogJ25vbmUnO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBlbFtpXTtcclxuICAgICAgICAgICAgLy8gaWdub3JlIEJldHRlclNjcm9sbCBpbnN0YW5jZSdzIHdyYXBwZXIgRE9NXHJcbiAgICAgICAgICAgIGlmIChub2RlLmlzQlNjcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gcG9pbnRlckV2ZW50cztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclgucmVmcmVzaCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZLnJlZnJlc2goKTtcclxuICAgICAgICB0aGlzLmFjdGlvbnMucmVmcmVzaCgpO1xyXG4gICAgICAgIHRoaXMud3JhcHBlck9mZnNldCA9IG9mZnNldCh0aGlzLndyYXBwZXIpO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5zY3JvbGxCeSA9IGZ1bmN0aW9uIChkZWx0YVgsIGRlbHRhWSwgdGltZSwgZWFzaW5nKSB7XHJcbiAgICAgICAgaWYgKHRpbWUgPT09IHZvaWQgMCkgeyB0aW1lID0gMDsgfVxyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuZ2V0Q3VycmVudFBvcygpLCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICAgICAgZWFzaW5nID0gIWVhc2luZyA/IGVhc2UuYm91bmNlIDogZWFzaW5nO1xyXG4gICAgICAgIGRlbHRhWCArPSB4O1xyXG4gICAgICAgIGRlbHRhWSArPSB5O1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8oZGVsdGFYLCBkZWx0YVksIHRpbWUsIGVhc2luZyk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnNjcm9sbFRvID0gZnVuY3Rpb24gKHgsIHksIHRpbWUsIGVhc2luZywgZXh0cmFUcmFuc2Zvcm0sIGlzU2lsZW50KSB7XHJcbiAgICAgICAgaWYgKHRpbWUgPT09IHZvaWQgMCkgeyB0aW1lID0gMDsgfVxyXG4gICAgICAgIGlmIChleHRyYVRyYW5zZm9ybSA9PT0gdm9pZCAwKSB7IGV4dHJhVHJhbnNmb3JtID0ge1xyXG4gICAgICAgICAgICBzdGFydDoge30sXHJcbiAgICAgICAgICAgIGVuZDoge31cclxuICAgICAgICB9OyB9XHJcbiAgICAgICAgZWFzaW5nID0gIWVhc2luZyA/IGVhc2UuYm91bmNlIDogZWFzaW5nO1xyXG4gICAgICAgIHZhciBlYXNpbmdGbiA9IHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uID8gZWFzaW5nLnN0eWxlIDogZWFzaW5nLmZuO1xyXG4gICAgICAgIHZhciBjdXJyZW50UG9zID0gdGhpcy5nZXRDdXJyZW50UG9zKCk7XHJcbiAgICAgICAgdmFyIHN0YXJ0UG9pbnQgPSBfX2Fzc2lnbih7IHg6IGN1cnJlbnRQb3MueCwgeTogY3VycmVudFBvcy55IH0sIGV4dHJhVHJhbnNmb3JtLnN0YXJ0KTtcclxuICAgICAgICB2YXIgZW5kUG9pbnQgPSBfX2Fzc2lnbih7IHg6IHgsXHJcbiAgICAgICAgICAgIHk6IHkgfSwgZXh0cmFUcmFuc2Zvcm0uZW5kKTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbFRvLCBlbmRQb2ludCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmlnbm9yZURpc01vdmVGb3JTYW1lUG9zKSkge1xyXG4gICAgICAgICAgICAvLyBpdCBpcyBhbiB1c2VsZXNzIG1vdmVcclxuICAgICAgICAgICAgaWYgKHN0YXJ0UG9pbnQueCA9PT0gZW5kUG9pbnQueCAmJiBzdGFydFBvaW50LnkgPT09IGVuZFBvaW50LnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFuaW1hdGVyLm1vdmUoc3RhcnRQb2ludCwgZW5kUG9pbnQsIHRpbWUsIGVhc2luZ0ZuLCBpc1NpbGVudCk7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsZXIucHJvdG90eXBlLnNjcm9sbFRvRWxlbWVudCA9IGZ1bmN0aW9uIChlbCwgdGltZSwgb2Zmc2V0WCwgb2Zmc2V0WSwgZWFzaW5nKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldEVsZSA9IGdldEVsZW1lbnQoZWwpO1xyXG4gICAgICAgIHZhciBwb3MgPSBvZmZzZXQodGFyZ2V0RWxlKTtcclxuICAgICAgICB2YXIgZ2V0T2Zmc2V0ID0gZnVuY3Rpb24gKG9mZnNldCwgc2l6ZSwgd3JhcHBlclNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2Zmc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIG9mZnNldFgvWSBhcmUgdHJ1ZSB3ZSBjZW50ZXIgdGhlIGVsZW1lbnQgdG8gdGhlIHNjcmVlblxyXG4gICAgICAgICAgICByZXR1cm4gb2Zmc2V0ID8gTWF0aC5yb3VuZChzaXplIC8gMiAtIHdyYXBwZXJTaXplIC8gMikgOiAwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2Zmc2V0WCA9IGdldE9mZnNldChvZmZzZXRYLCB0YXJnZXRFbGUub2Zmc2V0V2lkdGgsIHRoaXMud3JhcHBlci5vZmZzZXRXaWR0aCk7XHJcbiAgICAgICAgb2Zmc2V0WSA9IGdldE9mZnNldChvZmZzZXRZLCB0YXJnZXRFbGUub2Zmc2V0SGVpZ2h0LCB0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0KTtcclxuICAgICAgICB2YXIgZ2V0UG9zID0gZnVuY3Rpb24gKHBvcywgd3JhcHBlclBvcywgb2Zmc2V0LCBzY3JvbGxCZWhhdmlvcikge1xyXG4gICAgICAgICAgICBwb3MgLT0gd3JhcHBlclBvcztcclxuICAgICAgICAgICAgcG9zID0gc2Nyb2xsQmVoYXZpb3IuYWRqdXN0UG9zaXRpb24ocG9zIC0gb2Zmc2V0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHBvcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHBvcy5sZWZ0ID0gZ2V0UG9zKHBvcy5sZWZ0LCB0aGlzLndyYXBwZXJPZmZzZXQubGVmdCwgb2Zmc2V0WCwgdGhpcy5zY3JvbGxCZWhhdmlvclgpO1xyXG4gICAgICAgIHBvcy50b3AgPSBnZXRQb3MocG9zLnRvcCwgdGhpcy53cmFwcGVyT2Zmc2V0LnRvcCwgb2Zmc2V0WSwgdGhpcy5zY3JvbGxCZWhhdmlvclkpO1xyXG4gICAgICAgIGlmICh0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLnNjcm9sbFRvRWxlbWVudCwgdGFyZ2V0RWxlLCBwb3MpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUbyhwb3MubGVmdCwgcG9zLnRvcCwgdGltZSwgZWFzaW5nKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUucmVzZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICh0aW1lLCBlYXNpbmcpIHtcclxuICAgICAgICBpZiAodGltZSA9PT0gdm9pZCAwKSB7IHRpbWUgPSAwOyB9XHJcbiAgICAgICAgZWFzaW5nID0gIWVhc2luZyA/IGVhc2UuYm91bmNlIDogZWFzaW5nO1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuc2Nyb2xsQmVoYXZpb3JYLmNoZWNrSW5Cb3VuZGFyeSgpLCB4ID0gX2EucG9zaXRpb24sIHhJbkJvdW5kYXJ5ID0gX2EuaW5Cb3VuZGFyeTtcclxuICAgICAgICB2YXIgX2IgPSB0aGlzLnNjcm9sbEJlaGF2aW9yWS5jaGVja0luQm91bmRhcnkoKSwgeSA9IF9iLnBvc2l0aW9uLCB5SW5Cb3VuZGFyeSA9IF9iLmluQm91bmRhcnk7XHJcbiAgICAgICAgaWYgKHhJbkJvdW5kYXJ5ICYmIHlJbkJvdW5kYXJ5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gb3V0IG9mIGJvdW5kYXJ5XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUbyh4LCB5LCB0aW1lLCBlYXNpbmcpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS51cGRhdGVQb3NpdGlvbnMgPSBmdW5jdGlvbiAocG9zKSB7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxCZWhhdmlvclgudXBkYXRlUG9zaXRpb24ocG9zLngpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmVoYXZpb3JZLnVwZGF0ZVBvc2l0aW9uKHBvcy55KTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuZ2V0Q3VycmVudFBvcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb25zLmdldEN1cnJlbnRQb3MoKTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aW9ucy5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBTY3JvbGxlci5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVyLnRpbWVyKTtcclxuICAgICAgICB0aGlzLmFjdGlvbnMuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFNjcm9sbGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGtleXMgPSBbXHJcbiAgICAgICAgICAgICdyZXNpemVSZWdpc3RlcicsXHJcbiAgICAgICAgICAgICd0cmFuc2l0aW9uRW5kUmVnaXN0ZXInLFxyXG4gICAgICAgICAgICAnYWN0aW9uc0hhbmRsZXInLFxyXG4gICAgICAgICAgICAnYWN0aW9ucycsXHJcbiAgICAgICAgICAgICdob29rcycsXHJcbiAgICAgICAgICAgICdhbmltYXRlcicsXHJcbiAgICAgICAgICAgICd0cmFuc2xhdGVyJyxcclxuICAgICAgICAgICAgJ3Njcm9sbEJlaGF2aW9yWCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxCZWhhdmlvclknXHJcbiAgICAgICAgXTtcclxuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gX3RoaXNba2V5XS5kZXN0cm95KCk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTY3JvbGxlcjtcclxufSgpKTtcblxudmFyIHByb3BlcnRpZXNDb25maWcgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JYLmN1cnJlbnRQb3MnLFxyXG4gICAgICAgIGtleTogJ3gnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbEJlaGF2aW9yWS5jdXJyZW50UG9zJyxcclxuICAgICAgICBrZXk6ICd5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclguaGFzU2Nyb2xsJyxcclxuICAgICAgICBrZXk6ICdoYXNIb3Jpem9udGFsU2Nyb2xsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclkuaGFzU2Nyb2xsJyxcclxuICAgICAgICBrZXk6ICdoYXNWZXJ0aWNhbFNjcm9sbCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQmVoYXZpb3JYLmNvbnRlbnRTaXplJyxcclxuICAgICAgICBrZXk6ICdzY3JvbGxlcldpZHRoJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclkuY29udGVudFNpemUnLFxyXG4gICAgICAgIGtleTogJ3Njcm9sbGVySGVpZ2h0J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclgubWF4U2Nyb2xsUG9zJyxcclxuICAgICAgICBrZXk6ICdtYXhTY3JvbGxYJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclkubWF4U2Nyb2xsUG9zJyxcclxuICAgICAgICBrZXk6ICdtYXhTY3JvbGxZJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclgubWluU2Nyb2xsUG9zJyxcclxuICAgICAgICBrZXk6ICdtaW5TY3JvbGxYJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclkubWluU2Nyb2xsUG9zJyxcclxuICAgICAgICBrZXk6ICdtaW5TY3JvbGxZJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclgubW92aW5nRGlyZWN0aW9uJyxcclxuICAgICAgICBrZXk6ICdtb3ZpbmdEaXJlY3Rpb25YJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclkubW92aW5nRGlyZWN0aW9uJyxcclxuICAgICAgICBrZXk6ICdtb3ZpbmdEaXJlY3Rpb25ZJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclguZGlyZWN0aW9uJyxcclxuICAgICAgICBrZXk6ICdkaXJlY3Rpb25YJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxCZWhhdmlvclkuZGlyZWN0aW9uJyxcclxuICAgICAgICBrZXk6ICdkaXJlY3Rpb25ZJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5hY3Rpb25zLmVuYWJsZWQnLFxyXG4gICAgICAgIGtleTogJ2VuYWJsZWQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLmFuaW1hdGVyLnBlbmRpbmcnLFxyXG4gICAgICAgIGtleTogJ3BlbmRpbmcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLmFuaW1hdGVyLnN0b3AnLFxyXG4gICAgICAgIGtleTogJ3N0b3AnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZUtleTogJ3Njcm9sbGVyLnNjcm9sbFRvJyxcclxuICAgICAgICBrZXk6ICdzY3JvbGxUbydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIuc2Nyb2xsQnknLFxyXG4gICAgICAgIGtleTogJ3Njcm9sbEJ5J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBzb3VyY2VLZXk6ICdzY3JvbGxlci5zY3JvbGxUb0VsZW1lbnQnLFxyXG4gICAgICAgIGtleTogJ3Njcm9sbFRvRWxlbWVudCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlS2V5OiAnc2Nyb2xsZXIucmVzZXRQb3NpdGlvbicsXHJcbiAgICAgICAga2V5OiAncmVzZXRQb3NpdGlvbidcclxuICAgIH1cclxuXTtcblxudmFyIEVuZm9yY2VPcmRlcjtcclxuKGZ1bmN0aW9uIChFbmZvcmNlT3JkZXIpIHtcclxuICAgIEVuZm9yY2VPcmRlcltcIlByZVwiXSA9IFwicHJlXCI7XHJcbiAgICBFbmZvcmNlT3JkZXJbXCJQb3N0XCJdID0gXCJwb3N0XCI7XHJcbn0pKEVuZm9yY2VPcmRlciB8fCAoRW5mb3JjZU9yZGVyID0ge30pKTtcblxudmFyIEJTY3JvbGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQlNjcm9sbCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEJTY3JvbGwoZWwsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBbXHJcbiAgICAgICAgICAgICdyZWZyZXNoJyxcclxuICAgICAgICAgICAgJ2VuYWJsZScsXHJcbiAgICAgICAgICAgICdkaXNhYmxlJyxcclxuICAgICAgICAgICAgJ2JlZm9yZVNjcm9sbFN0YXJ0JyxcclxuICAgICAgICAgICAgJ3Njcm9sbFN0YXJ0JyxcclxuICAgICAgICAgICAgJ3Njcm9sbCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxFbmQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsQ2FuY2VsJyxcclxuICAgICAgICAgICAgJ3RvdWNoRW5kJyxcclxuICAgICAgICAgICAgJ2ZsaWNrJyxcclxuICAgICAgICAgICAgJ2Rlc3Ryb3knXHJcbiAgICAgICAgXSkgfHwgdGhpcztcclxuICAgICAgICB2YXIgd3JhcHBlciA9IGdldEVsZW1lbnQoZWwpO1xyXG4gICAgICAgIGlmICghd3JhcHBlcikge1xyXG4gICAgICAgICAgICB3YXJuKCdDYW4gbm90IHJlc29sdmUgdGhlIHdyYXBwZXIgRE9NLicpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb250ZW50ID0gd3JhcHBlci5jaGlsZHJlblswXTtcclxuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgICAgd2FybignVGhlIHdyYXBwZXIgbmVlZCBhdCBsZWFzdCBvbmUgY2hpbGQgZWxlbWVudCB0byBiZSBzY3JvbGxlci4nKTtcclxuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGhpcy5wbHVnaW5zID0ge307XHJcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKCkubWVyZ2Uob3B0aW9ucykucHJvY2VzcygpO1xyXG4gICAgICAgIF90aGlzLmhvb2tzID0gbmV3IEV2ZW50RW1pdHRlcihbXHJcbiAgICAgICAgICAgICdpbml0JyxcclxuICAgICAgICAgICAgJ3JlZnJlc2gnLFxyXG4gICAgICAgICAgICAnZW5hYmxlJyxcclxuICAgICAgICAgICAgJ2Rpc2FibGUnLFxyXG4gICAgICAgICAgICAnZGVzdHJveSdcclxuICAgICAgICBdKTtcclxuICAgICAgICBfdGhpcy5pbml0KHdyYXBwZXIpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIEJTY3JvbGwudXNlID0gZnVuY3Rpb24gKGN0b3IpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IGN0b3IucGx1Z2luTmFtZTtcclxuICAgICAgICB2YXIgaW5zdGFsbGVkID0gdGhpcy5wbHVnaW5zLnNvbWUoZnVuY3Rpb24gKHBsdWdpbikgeyByZXR1cm4gY3RvciA9PT0gcGx1Z2luLmN0b3I7IH0pO1xyXG4gICAgICAgIGlmIChpbnN0YWxsZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChpc1VuZGVmKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHdhcm4oXCJQbHVnaW4gQ2xhc3MgbXVzdCBzcGVjaWZ5IHBsdWdpbidzIG5hbWUgaW4gc3RhdGljIHByb3BlcnR5IGJ5ICdwbHVnaW5OYW1lJyBmaWVsZC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbHVnaW5zTWFwW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHdhcm4oXCJUaGlzIHBsdWdpbiBoYXMgYmVlbiByZWdpc3RlcmVkLCBtYXliZSB5b3UgbmVlZCBjaGFuZ2UgcGx1Z2luJ3MgbmFtZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGx1Z2luc01hcFtuYW1lXSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBlbmZvcmNlOiBjdG9yLmVuZm9yY2UsXHJcbiAgICAgICAgICAgIGN0b3I6IGN0b3JcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHdyYXBwZXIpIHtcclxuICAgICAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyO1xyXG4gICAgICAgIHdyYXBwZXIuaXNCU2Nyb2xsID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyID0gbmV3IFNjcm9sbGVyKHdyYXBwZXIsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5ldmVudEJ1YmJsaW5nKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBdXRvQmx1cigpO1xyXG4gICAgICAgIHRoaXMuaW5uZXJSZWZyZXNoKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5zY3JvbGxUbyh0aGlzLm9wdGlvbnMuc3RhcnRYLCB0aGlzLm9wdGlvbnMuc3RhcnRZKTtcclxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xyXG4gICAgICAgIHRoaXMucHJveHkocHJvcGVydGllc0NvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5hcHBseVBsdWdpbnMoKTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5hcHBseVBsdWdpbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnBsdWdpbnNcclxuICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICB2YXIgZW5mb3JlT3JkZXJNYXAgPSAoX2EgPSB7fSxcclxuICAgICAgICAgICAgICAgIF9hW0VuZm9yY2VPcmRlci5QcmVdID0gLTEsXHJcbiAgICAgICAgICAgICAgICBfYVtFbmZvcmNlT3JkZXIuUG9zdF0gPSAxLFxyXG4gICAgICAgICAgICAgICAgX2EpO1xyXG4gICAgICAgICAgICB2YXIgYU9yZGVyID0gYS5lbmZvcmNlID8gZW5mb3JlT3JkZXJNYXBbYS5lbmZvcmNlXSA6IDA7XHJcbiAgICAgICAgICAgIHZhciBiT3JkZXIgPSBiLmVuZm9yY2UgPyBlbmZvcmVPcmRlck1hcFtiLmVuZm9yY2VdIDogMDtcclxuICAgICAgICAgICAgcmV0dXJuIGFPcmRlciAtIGJPcmRlcjtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIgY3RvciA9IGl0ZW0uY3RvcjtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnNbaXRlbS5uYW1lXSAmJiB0eXBlb2YgY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucGx1Z2luc1tpdGVtLm5hbWVdID0gbmV3IGN0b3IoX3RoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUuaGFuZGxlQXV0b0JsdXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvQmx1cikge1xyXG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMuZXZlbnRUeXBlcy5iZWZvcmVTY3JvbGxTdGFydCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAoYWN0aXZlRWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmV2ZW50QnViYmxpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYnViYmxpbmcodGhpcy5zY3JvbGxlci5ob29rcywgdGhpcywgW1xyXG4gICAgICAgICAgICAnYmVmb3JlU2Nyb2xsU3RhcnQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsU3RhcnQnLFxyXG4gICAgICAgICAgICAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgJ3Njcm9sbEVuZCcsXHJcbiAgICAgICAgICAgICdzY3JvbGxDYW5jZWwnLFxyXG4gICAgICAgICAgICAndG91Y2hFbmQnLFxyXG4gICAgICAgICAgICAnZmxpY2snXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUuaW5uZXJSZWZyZXNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIucmVmcmVzaCgpO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMucmVmcmVzaCk7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKHRoaXMuZXZlbnRUeXBlcy5yZWZyZXNoKTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnByb3RvdHlwZS5wcm94eSA9IGZ1bmN0aW9uIChwcm9wZXJ0aWVzQ29uZmlnKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBwcm9wZXJ0aWVzQ29uZmlnLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBfYS5rZXksIHNvdXJjZUtleSA9IF9hLnNvdXJjZUtleTtcclxuICAgICAgICAgICAgcHJvcGVydGllc1Byb3h5KF90aGlzLCBzb3VyY2VLZXksIGtleSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlubmVyUmVmcmVzaCgpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsZXIucmVzZXRQb3NpdGlvbigpO1xyXG4gICAgfTtcclxuICAgIEJTY3JvbGwucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyLmVuYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuaG9va3MudHJpZ2dlcih0aGlzLmhvb2tzLmV2ZW50VHlwZXMuZW5hYmxlKTtcclxuICAgICAgICB0aGlzLnRyaWdnZXIodGhpcy5ldmVudFR5cGVzLmVuYWJsZSk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjcm9sbGVyLmRpc2FibGUoKTtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmRpc2FibGUpO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmV2ZW50VHlwZXMuZGlzYWJsZSk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmhvb2tzLnRyaWdnZXIodGhpcy5ob29rcy5ldmVudFR5cGVzLmRlc3Ryb3kpO1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcih0aGlzLmV2ZW50VHlwZXMuZGVzdHJveSk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxlci5kZXN0cm95KCk7XHJcbiAgICB9O1xyXG4gICAgQlNjcm9sbC5wcm90b3R5cGUuZXZlbnRSZWdpc3RlciA9IGZ1bmN0aW9uIChuYW1lcykge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJUeXBlKG5hbWVzKTtcclxuICAgIH07XHJcbiAgICBCU2Nyb2xsLnBsdWdpbnMgPSBbXTtcclxuICAgIEJTY3JvbGwucGx1Z2luc01hcCA9IHt9O1xyXG4gICAgcmV0dXJuIEJTY3JvbGw7XHJcbn0oRXZlbnRFbWl0dGVyKSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJTY3JvbGw7XG5leHBvcnQgeyBPcHRpb25zIH07XG4iLCIvKiFcbiAqIGJldHRlci1zY3JvbGwgLyBwdWxsLWRvd25cbiAqIChjKSAyMDE2LTIwMTkgdXN0Ymh1YW5neWlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xudmFyIERpcmVjdGlvbjtcclxuKGZ1bmN0aW9uIChEaXJlY3Rpb24pIHtcclxuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJQb3NpdGl2ZVwiXSA9IDFdID0gXCJQb3NpdGl2ZVwiO1xyXG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIk5lZ2F0aXZlXCJdID0gLTFdID0gXCJOZWdhdGl2ZVwiO1xyXG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIkRlZmF1bHRcIl0gPSAwXSA9IFwiRGVmYXVsdFwiO1xyXG59KShEaXJlY3Rpb24gfHwgKERpcmVjdGlvbiA9IHt9KSk7XG5cbnZhciBQcm9iZTtcclxuKGZ1bmN0aW9uIChQcm9iZSkge1xyXG4gICAgUHJvYmVbUHJvYmVbXCJEZWZhdWx0XCJdID0gMF0gPSBcIkRlZmF1bHRcIjtcclxuICAgIFByb2JlW1Byb2JlW1wiVGhyb3R0bGVcIl0gPSAxXSA9IFwiVGhyb3R0bGVcIjtcclxuICAgIFByb2JlW1Byb2JlW1wiTm9ybWFsXCJdID0gMl0gPSBcIk5vcm1hbFwiO1xyXG4gICAgUHJvYmVbUHJvYmVbXCJSZWFsdGltZVwiXSA9IDNdID0gXCJSZWFsdGltZVwiO1xyXG59KShQcm9iZSB8fCAoUHJvYmUgPSB7fSkpO1xuXG52YXIgZWFzZSA9IHtcclxuICAgIC8vIGVhc2VPdXRRdWludFxyXG4gICAgc3dpcGU6IHtcclxuICAgICAgICBzdHlsZTogJ2N1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScsXHJcbiAgICAgICAgZm46IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxICsgLS10ICogdCAqIHQgKiB0ICogdDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gZWFzZU91dFF1YXJkXHJcbiAgICBzd2lwZUJvdW5jZToge1xyXG4gICAgICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpJyxcclxuICAgICAgICBmbjogZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQgKiAoMiAtIHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBlYXNlT3V0UXVhcnRcclxuICAgIGJvdW5jZToge1xyXG4gICAgICAgIHN0eWxlOiAnY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKScsXHJcbiAgICAgICAgZm46IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC0gLS10ICogdCAqIHQgKiB0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcblxudmFyIHNvdXJjZVByZWZpeCA9ICdwbHVnaW5zLnB1bGxEb3duUmVmcmVzaCc7XHJcbnZhciBwcm9wZXJ0aWVzTWFwID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2ZpbmlzaFB1bGxEb3duJyxcclxuICAgICAgICBuYW1lOiAnZmluaXNoJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdvcGVuUHVsbERvd24nLFxyXG4gICAgICAgIG5hbWU6ICdvcGVuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdjbG9zZVB1bGxEb3duJyxcclxuICAgICAgICBuYW1lOiAnY2xvc2UnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2F1dG9QdWxsRG93blJlZnJlc2gnLFxyXG4gICAgICAgIG5hbWU6ICdhdXRvUHVsbCdcclxuICAgIH1cclxuXTtcclxudmFyIHByb3BlcnRpZXNQcm94eUNvbmZpZyA9IHByb3BlcnRpZXNNYXAubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGtleTogaXRlbS5rZXksXHJcbiAgICAgICAgc291cmNlS2V5OiBzb3VyY2VQcmVmaXggKyBcIi5cIiArIGl0ZW0ubmFtZVxyXG4gICAgfTtcclxufSk7XG5cbnZhciBQdWxsRG93biA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFB1bGxEb3duKHNjcm9sbCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsID0gc2Nyb2xsO1xyXG4gICAgICAgIHRoaXMucHVsbGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChzY3JvbGwub3B0aW9ucy5wdWxsRG93blJlZnJlc2gpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2F0Y2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY3JvbGwucmVnaXN0ZXJUeXBlKFsncHVsbGluZ0Rvd24nXSk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwucHJveHkocHJvcGVydGllc1Byb3h5Q29uZmlnKTtcclxuICAgIH1cclxuICAgIFB1bGxEb3duLnByb3RvdHlwZS5fd2F0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8g6ZyA6KaB6K6+572uIHByb2JlID0gMyDlkJfvvJ9cclxuICAgICAgICAvLyBtdXN0IHdhdGNoIHNjcm9sbCBpbiByZWFsIHRpbWVcclxuICAgICAgICB0aGlzLnNjcm9sbC5vcHRpb25zLnByb2JlVHlwZSA9IFByb2JlLlJlYWx0aW1lO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbGVyLmhvb2tzLm9uKCdlbmQnLCB0aGlzLl9jaGVja1B1bGxEb3duLCB0aGlzKTtcclxuICAgIH07XHJcbiAgICBQdWxsRG93bi5wcm90b3R5cGUuX2NoZWNrUHVsbERvd24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbC5vcHRpb25zLnB1bGxEb3duUmVmcmVzaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuc2Nyb2xsLm9wdGlvbnNcclxuICAgICAgICAgICAgLnB1bGxEb3duUmVmcmVzaCwgX2IgPSBfYS50aHJlc2hvbGQsIHRocmVzaG9sZCA9IF9iID09PSB2b2lkIDAgPyA5MCA6IF9iLCBfYyA9IF9hLnN0b3AsIHN0b3AgPSBfYyA9PT0gdm9pZCAwID8gNDAgOiBfYztcclxuICAgICAgICAvLyBjaGVjayBpZiBhIHJlYWwgcHVsbCBkb3duIGFjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbC5kaXJlY3Rpb25ZICE9PSBEaXJlY3Rpb24uTmVnYXRpdmUgfHxcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwueSA8IHRocmVzaG9sZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5wdWxsaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHVsbGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLnRyaWdnZXIoJ3B1bGxpbmdEb3duJyk7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxNaW5TY3JvbGxZID0gdGhpcy5zY3JvbGwubWluU2Nyb2xsWTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGwubWluU2Nyb2xsWSA9IHN0b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnNjcm9sbFRvKHRoaXMuc2Nyb2xsLngsIHN0b3AsIHRoaXMuc2Nyb2xsLm9wdGlvbnMuYm91bmNlVGltZSwgZWFzZS5ib3VuY2UpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnB1bGxpbmc7XHJcbiAgICB9O1xyXG4gICAgUHVsbERvd24ucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnB1bGxpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjcm9sbC5taW5TY3JvbGxZID0gdGhpcy5vcmlnaW5hbE1pblNjcm9sbFk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwucmVzZXRQb3NpdGlvbih0aGlzLnNjcm9sbC5vcHRpb25zLmJvdW5jZVRpbWUsIGVhc2UuYm91bmNlKTtcclxuICAgIH07XHJcbiAgICBQdWxsRG93bi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0gdHJ1ZTsgfVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsLm9wdGlvbnMucHVsbERvd25SZWZyZXNoID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuX3dhdGNoKCk7XHJcbiAgICB9O1xyXG4gICAgUHVsbERvd24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLm9wdGlvbnMucHVsbERvd25SZWZyZXNoID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgUHVsbERvd24ucHJvdG90eXBlLmF1dG9QdWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuc2Nyb2xsLm9wdGlvbnNcclxuICAgICAgICAgICAgLnB1bGxEb3duUmVmcmVzaCwgX2IgPSBfYS50aHJlc2hvbGQsIHRocmVzaG9sZCA9IF9iID09PSB2b2lkIDAgPyA5MCA6IF9iLCBfYyA9IF9hLnN0b3AsIHN0b3AgPSBfYyA9PT0gdm9pZCAwID8gNDAgOiBfYztcclxuICAgICAgICBpZiAodGhpcy5wdWxsaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wdWxsaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsTWluU2Nyb2xsWSA9IHRoaXMuc2Nyb2xsLm1pblNjcm9sbFk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwubWluU2Nyb2xsWSA9IHRocmVzaG9sZDtcclxuICAgICAgICB0aGlzLnNjcm9sbC5zY3JvbGxUbyh0aGlzLnNjcm9sbC54LCB0aHJlc2hvbGQpO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsLnRyaWdnZXIoJ3B1bGxpbmdEb3duJyk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwuc2Nyb2xsVG8odGhpcy5zY3JvbGwueCwgc3RvcCwgdGhpcy5zY3JvbGwub3B0aW9ucy5ib3VuY2VUaW1lLCBlYXNlLmJvdW5jZSk7XHJcbiAgICB9O1xyXG4gICAgUHVsbERvd24ucGx1Z2luTmFtZSA9ICdwdWxsRG93blJlZnJlc2gnO1xyXG4gICAgcmV0dXJuIFB1bGxEb3duO1xyXG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBQdWxsRG93bjtcbiIsIi8qIVxuICogYmV0dGVyLXNjcm9sbCAvIHB1bGwtdXBcbiAqIChjKSAyMDE2LTIwMTkgdXN0Ymh1YW5neWlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xudmFyIERpcmVjdGlvbjtcclxuKGZ1bmN0aW9uIChEaXJlY3Rpb24pIHtcclxuICAgIERpcmVjdGlvbltEaXJlY3Rpb25bXCJQb3NpdGl2ZVwiXSA9IDFdID0gXCJQb3NpdGl2ZVwiO1xyXG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIk5lZ2F0aXZlXCJdID0gLTFdID0gXCJOZWdhdGl2ZVwiO1xyXG4gICAgRGlyZWN0aW9uW0RpcmVjdGlvbltcIkRlZmF1bHRcIl0gPSAwXSA9IFwiRGVmYXVsdFwiO1xyXG59KShEaXJlY3Rpb24gfHwgKERpcmVjdGlvbiA9IHt9KSk7XG5cbnZhciBQcm9iZTtcclxuKGZ1bmN0aW9uIChQcm9iZSkge1xyXG4gICAgUHJvYmVbUHJvYmVbXCJEZWZhdWx0XCJdID0gMF0gPSBcIkRlZmF1bHRcIjtcclxuICAgIFByb2JlW1Byb2JlW1wiVGhyb3R0bGVcIl0gPSAxXSA9IFwiVGhyb3R0bGVcIjtcclxuICAgIFByb2JlW1Byb2JlW1wiTm9ybWFsXCJdID0gMl0gPSBcIk5vcm1hbFwiO1xyXG4gICAgUHJvYmVbUHJvYmVbXCJSZWFsdGltZVwiXSA9IDNdID0gXCJSZWFsdGltZVwiO1xyXG59KShQcm9iZSB8fCAoUHJvYmUgPSB7fSkpO1xuXG52YXIgc291cmNlUHJlZml4ID0gJ3BsdWdpbnMucHVsbFVwTG9hZCc7XHJcbnZhciBwcm9wZXJ0aWVzTWFwID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2ZpbmlzaFB1bGxVcCcsXHJcbiAgICAgICAgbmFtZTogJ2ZpbmlzaCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnb3BlblB1bGxVcCcsXHJcbiAgICAgICAgbmFtZTogJ29wZW4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2Nsb3NlUHVsbFVwJyxcclxuICAgICAgICBuYW1lOiAnY2xvc2UnXHJcbiAgICB9XHJcbl07XHJcbnZhciBwcm9wZXJ0aWVzUHJveHlDb25maWcgPSBwcm9wZXJ0aWVzTWFwLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgIHNvdXJjZUtleTogc291cmNlUHJlZml4ICsgXCIuXCIgKyBpdGVtLm5hbWVcclxuICAgIH07XHJcbn0pO1xuXG52YXIgUHVsbFVwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUHVsbFVwKGJzY3JvbGwpIHtcclxuICAgICAgICB0aGlzLmJzY3JvbGwgPSBic2Nyb2xsO1xyXG4gICAgICAgIHRoaXMud2F0Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAoYnNjcm9sbC5vcHRpb25zLnB1bGxVcExvYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2F0Y2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ic2Nyb2xsLnJlZ2lzdGVyVHlwZShbJ3B1bGxpbmdVcCddKTtcclxuICAgICAgICB0aGlzLmJzY3JvbGwucHJveHkocHJvcGVydGllc1Byb3h5Q29uZmlnKTtcclxuICAgIH1cclxuICAgIFB1bGxVcC5wcm90b3R5cGUuX3dhdGNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLndhdGNoaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbXVzdCB3YXRjaCBzY3JvbGwgaW4gcmVhbCB0aW1lXHJcbiAgICAgICAgdGhpcy5ic2Nyb2xsLm9wdGlvbnMucHJvYmVUeXBlID0gUHJvYmUuUmVhbHRpbWU7XHJcbiAgICAgICAgdGhpcy53YXRjaGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ic2Nyb2xsLm9uKCdzY3JvbGwnLCB0aGlzLl9jaGVja1RvRW5kLCB0aGlzKTtcclxuICAgIH07XHJcbiAgICBQdWxsVXAucHJvdG90eXBlLl9jaGVja1RvRW5kID0gZnVuY3Rpb24gKHBvcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJzY3JvbGwub3B0aW9ucy5wdWxsVXBMb2FkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5ic2Nyb2xsLm9wdGlvbnNcclxuICAgICAgICAgICAgLnB1bGxVcExvYWQudGhyZXNob2xkLCB0aHJlc2hvbGQgPSBfYSA9PT0gdm9pZCAwID8gMCA6IF9hO1xyXG4gICAgICAgIGlmICh0aGlzLmJzY3JvbGwubW92aW5nRGlyZWN0aW9uWSA9PT0gRGlyZWN0aW9uLlBvc2l0aXZlICYmXHJcbiAgICAgICAgICAgIHBvcy55IDw9IHRoaXMuYnNjcm9sbC5tYXhTY3JvbGxZICsgdGhyZXNob2xkKSB7XHJcbiAgICAgICAgICAgIC8vIHJlc2V0IHB1bGx1cFdhdGNoaW5nIHN0YXR1cyBhZnRlciBzY3JvbGwgZW5kIHRvIHByb21pc2UgdGhhdCB0cmlnZ2VyICdwdWxsaW5nVXAnIG9ubHkgb25jZSB3aGVuIHB1bGxpbmcgdXBcclxuICAgICAgICAgICAgdGhpcy5ic2Nyb2xsLm9uY2UoJ3Njcm9sbEVuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLndhdGNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmJzY3JvbGwudHJpZ2dlcigncHVsbGluZ1VwJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnNjcm9sbC5vZmYoJ3Njcm9sbCcsIHRoaXMuX2NoZWNrVG9FbmQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQdWxsVXAucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy53YXRjaGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmJzY3JvbGwub25jZSgnc2Nyb2xsRW5kJywgdGhpcy5fd2F0Y2gsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fd2F0Y2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUHVsbFVwLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB0cnVlOyB9XHJcbiAgICAgICAgdGhpcy5ic2Nyb2xsLm9wdGlvbnMucHVsbFVwTG9hZCA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl93YXRjaCgpO1xyXG4gICAgfTtcclxuICAgIFB1bGxVcC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ic2Nyb2xsLm9wdGlvbnMucHVsbFVwTG9hZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy53YXRjaGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2F0Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJzY3JvbGwub2ZmKCdzY3JvbGwnLCB0aGlzLl9jaGVja1RvRW5kKTtcclxuICAgIH07XHJcbiAgICBQdWxsVXAucGx1Z2luTmFtZSA9ICdwdWxsVXBMb2FkJztcclxuICAgIHJldHVybiBQdWxsVXA7XHJcbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IFB1bGxVcDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiaW1wb3J0IEVycm9yaHRtbCBmcm9tICcuLi8uLi92aWV3cy9lcnJvci9lcnJvci5odG1sJztcblxuY2xhc3MgU2VhcmNoQ29udHJvbGxlcntcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgICQoJyNtYWluLWNvbnRhaW5lcicpLmh0bWwoRXJyb3JodG1sKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZWFyY2hDb250cm9sbGVyKCkiLCJpbXBvcnQgQlNjcm9sbCBmcm9tICdAYmV0dGVyLXNjcm9sbC9jb3JlJ1xuaW1wb3J0IFB1bGx1cCBmcm9tICdAYmV0dGVyLXNjcm9sbC9wdWxsLXVwJ1xuaW1wb3J0IFB1bGxEb3duIGZyb20gJ0BiZXR0ZXItc2Nyb2xsL3B1bGwtZG93bidcblxuaW1wb3J0IHBvc2l0aW9uaHRtbCBmcm9tICcuLi8uLi92aWV3cy9wb3NpdGlvbi9wb3NpdGlvbmxpc3QuaHRtbCdcbmltcG9ydCBpdGVtSHRtbCBmcm9tICcuLi8uLi92aWV3cy9wb3NpdGlvbi9wb3NpdGlvbmxpc3QtaXRlbS5odG1sJ1xuaW1wb3J0IGZldGNoIGZyb20gJy4uL21vZGVsL0ZldGNoJ1xuXG5CU2Nyb2xsLnVzZShQdWxsdXApIC8vIOW6lemDqOS4i+aLiVxuQlNjcm9sbC51c2UoUHVsbERvd24pIC8v6aG26YOo5LiL5ouJXG5cbmNsYXNzIFBvc2l0aW9uQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFnZU5vID0gMTtcbiAgICB0aGlzLmRhdGFMaXN0ID0gW107XG4gICAgdGhpcy50b3RhbCA9IDA7XG4gICAgdGhpcy5pbml0RXZlbnQoKVxuICB9XG5cbiAgaW5pdEV2ZW50KCkge1xuICAgICQoJyNtYWluLWNvbnRhaW5lcicpLm9uKCdjbGljaycsICcuaXRlbScsIGZ1bmN0aW9uICgpIHsgLy8g5LqL5Lu25aeU5omYXG4gICAgICBsZXQgaWQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKTtcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSBgL2RldGFpbC5odG1sPyR7aWR9YFxuICAgIH0pXG4gIH1cblxuICBnZXRsaXN0KHBhZ2VTaXplID0gMTUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc2xvdmUsIHJlamVjdCkgPT4ge1xuICAgICAgJChcIiNsb2FkaW5nXCIpLnNob3coKTtcbiAgICAgIGxldCBycyA9IGF3YWl0IGZldGNoLmdldFBvc2l0aW9uTGlzdCh0aGlzLnBhZ2VObywgcGFnZVNpemUpO1xuICAgICAgdGhpcy50b3RhbCA9IHJzLmNvbnRlbnQuZGF0YS5wYWdlLnRvdGFsQ291bnRcbiAgICAgIHRoaXMuZGF0YUxpc3QgPSB0aGlzLmRhdGFMaXN0LmNvbmNhdChycy5jb250ZW50LmRhdGEucGFnZS5yZXN1bHQpXG4gICAgICBsZXQgaHRtbCA9IHRlbXBsYXRlLnJlbmRlcihpdGVtSHRtbCwgeyBsaXN0OiB0aGlzLmRhdGFMaXN0IH0pXG4gICAgICAkKFwiI2xpc3QtY29udGFpbmVyXCIpLmh0bWwoaHRtbClcbiAgICAgICQoXCIjbG9hZGluZ1wiKS5oaWRlKCk7XG4gICAgICByZXNsb3ZlKCk7XG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIHJlbmRlcigpIHtcbiAgICAkKFwiI21haW4tY29udGFpbmVyXCIpLmh0bWwocG9zaXRpb25odG1sKVxuICAgIGxldCAkaGVhZCA9ICQoXCIjbWFpbi1jb250YWluZXIgLmhlYWRcIik7XG4gICAgYXdhaXQgdGhpcy5nZXRsaXN0KCk7XG5cbiAgICB0aGlzLnNjcm9sbCA9IG5ldyBCU2Nyb2xsKCcjcG9zaXRpb24td3JhcHBlcicsIHtcbiAgICAgIHNjcm9sbFk6IHRydWUsXG4gICAgICBwcm9iZVR5cGU6IDMsXG4gICAgICBwdWxsVXBMb2FkOiB0cnVlLFxuICAgICAgY2xpY2s6IHRydWUsXG4gICAgICBwdWxsRG93blJlZnJlc2g6IHtcbiAgICAgICAgdGhyZXNob2xkOiA1MFxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyDkuIrmi4nliLfmlrBcbiAgICB0aGlzLnNjcm9sbC5vbigncHVsbGluZ0Rvd24nLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncHVsbGluZ0Rvd24nKVxuICAgICAgdGhpcy5wYWdlTm8gPSAxXG4gICAgICB0aGlzLmRhdGFMaXN0ID0gW11cbiAgICAgIGF3YWl0IHRoaXMuZ2V0bGlzdCgpXG4gICAgICB0aGlzLnNjcm9sbC5maW5pc2hQdWxsRG93bigpIC8vIOWbnuiwg+e7k+adn+W/hemhu+aciVxuICAgIH0pXG5cbiAgICAvLyDkuIvmi4nliqDovb3mm7TlpJpcbiAgICB0aGlzLnNjcm9sbC5vbigncHVsbGluZ1VwJywgYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5wYWdlTm8rKztcbiAgICAgIGF3YWl0IHRoaXMuZ2V0bGlzdCgpXG4gICAgICB0aGlzLnNjcm9sbC5maW5pc2hQdWxsVXAoKTtcbiAgICAgIHRoaXMuc2Nyb2xsLnJlZnJlc2goKTtcbiAgICAgIGlmICh0aGlzLmRhdGFMaXN0Lmxlbmd0aCA9PT0gdGhpcy50b3RhbCkge1xuICAgICAgICAkKCcjbWFpbi1jb250YWluZXIgLmZvb3QnKS5oaWRlKCkgLy8g5Yqg6L295a6M5LqGXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2Nyb2xsLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy55ID4gMTAgJiYgdGhpcy55IDwgNTApIHtcbiAgICAgICAgJGhlYWQuc2hvdygpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnkgPiA1MCkge1xuICAgICAgICAkaGVhZC5maW5kKCdpbWcnKS5hdHRyKCdzcmMnLCAnLi9pbWFnZXMvbG9hZGluZy5naWYnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRoZWFkLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQb3NpdGlvbkNvbnRyb2xsZXIoKTsiLCJpbXBvcnQgcHJvZmlsZWh0bWwgZnJvbSAnLi4vLi4vdmlld3MvcHJvZmlsZS9wcm9maWxlLmh0bWwnO1xuaW1wb3J0IEZldGNoIGZyb20gJy4uL21vZGVsL0ZldGNoLmpzJztcblxuY2xhc3MgUHJvZmlsZUNvbnRyb2xsZXJ7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICAvLyBsZXQgZGF0YSA9IGF3YWl0IEZldGNoLmdldHByb2ZpbGVMaXN0KCk7XG4gICAgICAgIC8vIGxldCBodG1sID0gdGVtcGxhdGUucmVuZGVyKHByb2ZpbGVodG1sLCB7IGxpc3Q6IGRhdGEucmVzdWx0IH0pXG4gICAgICAgICQoJyNtYWluLWNvbnRhaW5lcicpLmh0bWwoJ3Byb2ZpbGUnKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBQcm9maWxlQ29udHJvbGxlcigpIiwiaW1wb3J0IFNlYXJjaEh0bWwgZnJvbSAnLi4vLi4vdmlld3MvU2VhcmNoL1NlYXJjaC5odG1sJztcbmltcG9ydCBpdGVtSHRtbCBmcm9tICcuLi8uLi92aWV3cy9wb3NpdGlvbi9wb3NpdGlvbmxpc3QtaXRlbS5odG1sJ1xuaW1wb3J0IEZldGNoIGZyb20gJy4uL21vZGVsL0ZldGNoLmpzJztcblxuY2xhc3MgU2VhcmNoQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGFnZU5vID0gMVxuICAgICAgICB0aGlzLnRvdGFsID0gMFxuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gW11cbiAgICB9XG4gICAgZ2V0bGlzdChwYWdlU2l6ZSA9IDE1KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzbG92ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAkKFwiI2xvYWRpbmdcIikuc2hvdygpO1xuICAgICAgICAgICAgLy8gbGV0IHJzID0gYXdhaXQgRmV0Y2guZ2V0U2VhcmNoTGlzdCh7XG4gICAgICAgICAgICAvLyAgICAgY2l0eTogJ+WFqOWbvScsXG4gICAgICAgICAgICAvLyAgICAgcG9zaXRpb25OYW1lOiAn5YmN56uvJyxcbiAgICAgICAgICAgIC8vICAgICBwYWdlTm86IHRoaXMucGFnZU5vLFxuICAgICAgICAgICAgLy8gICAgIHBhZ2VTaXplOiBwYWdlU2l6ZVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICBsZXQgcnMgPSBhd2FpdCBGZXRjaC5nZXRQb3NpdGlvbkxpc3QodGhpcy5wYWdlTm8sIHBhZ2VTaXplKVxuICAgICAgICAgICAgdGhpcy50b3RhbCA9IE51bWJlcihycy5jb250ZW50LmRhdGEucGFnZS50b3RhbENvdW50KVxuICAgICAgICAgICAgdGhpcy5kYXRhTGlzdCA9IHRoaXMuZGF0YUxpc3QuY29uY2F0KHJzLmNvbnRlbnQuZGF0YS5wYWdlLnJlc3VsdClcbiAgICAgICAgICAgIGxldCBodG1sID0gdGVtcGxhdGUucmVuZGVyKGl0ZW1IdG1sLCB7IGxpc3Q6IHRoaXMuZGF0YUxpc3QgfSlcbiAgICAgICAgICAgICQoXCIjbGlzdC1jb250YWluZXJcIikuaHRtbChodG1sKVxuICAgICAgICAgICAgJChcIiNsb2FkaW5nXCIpLmhpZGUoKTtcbiAgICAgICAgICAgIHJlc2xvdmUoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyByZW5kZXIoKSB7XG4gICAgICAgICQoXCIjbWFpbi1jb250YWluZXJcIikuaHRtbChTZWFyY2hIdG1sKVxuICAgICAgICAvLyBhd2FpdCB0aGlzLmdldGxpc3QoKVxuICAgICAgICAvLyAkKCcjbWFpbi1jb250YWluZXInKS5odG1sKCdzZWFyY2gnKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZWFyY2hDb250cm9sbGVyKCkiLCJpbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyL1JvdXRlcidcblxuY2xhc3MgSW5kZXgge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdEV2ZW50KCk7XG4gIH1cblxuICBpbml0RXZlbnQoKSB7XG4gICAgJChcIiNpbmRleF9uYXYgbGlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICBsZXQgaGFzaCA9ICQodGhpcykuYXR0cignZGF0YS1oYXNoJyk7XG4gICAgICBSb3V0ZXIuZ28oaGFzaClcbiAgICB9KVxuICB9XG5cbn1cblxubmV3IEluZGV4KCkiLCJjbGFzcyBGZXRjaCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cbiAgZ2V0UG9zaXRpb25MaXN0KHBhZ2VObywgcGFnZVNpemU9MTUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgL2ZldGNoL2xpc3Rtb3JlLmpzb24/cGFnZU5vPSR7cGFnZU5vfSZwYWdlU2l6ZT0ke3BhZ2VTaXplfWAsXG4gICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICBzdWNjZXNzKF9kYXRhKSB7XG4gICAgICAgICAgcmVzb2x2ZShfZGF0YSlcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IoX2RhdGEpIHtcbiAgICAgICAgICByZWplY3QoX2RhdGEpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGdldFNlYXJjaExpc3QocGFyYW1zKXtcbiAgICBsZXQge2NpdHksIHBvc2l0aW9uTmFtZSwgcGFnZU5vLCBwYWdlU2l6ZX0gPSBwYXJhbXNcbiAgICBsZXQgZW5VcmwgPSBlbmNvZGVVUkkoYC9mZXRjaC9zZWFyY2guanNvbj9jaXR5PSR7Y2l0eX0mcG9zaXRpb25OYW1lPSR7cG9zaXRpb25OYW1lfSZwYWdlTm89JHtwYWdlTm99JnBhZ2VTaXplPSR7cGFnZVNpemV9YClcbiAgICBjb25zb2xlLmxvZyhlblVybClcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBlblVybCxcbiAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgIHN1Y2Nlc3MoX2RhdGEpIHtcbiAgICAgICAgICByZXNvbHZlKF9kYXRhKVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcihfZGF0YSkge1xuICAgICAgICAgIHJlamVjdChfZGF0YSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgRmV0Y2goKSIsImltcG9ydCBQb3NpdGlvbkNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9Qb3NpdGlvbkNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IFByb2ZpbGVDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXIvUHJvZmlsZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IFNlYXJjaENvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9TZWFyY2hDb250cm9sbGVyLmpzJztcbmltcG9ydCBFcnJvckNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlci9FcnJvckNvbnRyb2xsZXInXG5cbmNvbnN0IE1PREUgPSAnaGFzaCc7XG5cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucm91dGVzID0ge1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogUG9zaXRpb25Db250cm9sbGVyLFxuICAgICAgICAgICAgJ3NlYXJjaCc6IFNlYXJjaENvbnRyb2xsZXIsXG4gICAgICAgICAgICAncHJvZmlsZSc6IFByb2ZpbGVDb250cm9sbGVyXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0RXZlbnQoKTtcbiAgICAgICAgU2VhcmNoQ29udHJvbGxlci5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBsb2FkVmlldyhwYXRoKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlc1twYXRoXSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXNbcGF0aF0ucmVuZGVyKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEVycm9yQ29udHJvbGxlci5yZW5kZXIoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ28ocGF0aCkge1xuICAgICAgICBpZiAoTU9ERSA9PT0gJ2hhc2gnKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gcGF0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHsgcGF0aCB9LCAnJywgcGF0aClcbiAgICAgICAgICAgIHRoaXMubG9hZFZpZXcocGF0aClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRFdmVudCgpIHtcbiAgICAgICAgaWYgKE1PREUgPT09ICdoYXNoJykge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24uaGFzaClcbiAgICAgICAgICAgICAgICBsZXQgaGFzaCA9IGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRWaWV3KGhhc2gpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFZpZXcoaGlzdG9yeS5zdGF0ZS5wYXRoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBSb3V0ZXIoKSIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJzZWFyY2hcXFwiPiAgICA8ZGl2IGNsYXNzPVxcXCJsaW5wdXRlclxcXCI+ICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsYnV0dG9uXFxcIj4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2l0eVxcXCI+5YWo5Zu9PC9zcGFuPiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjaXR5aWNvblxcXCI+PC9zcGFuPiAgICAgICAgPC9kaXY+ICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyaW5wdXRcXFwiPiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiaW5wdXRlclxcXCIgcGxhY2Vob2xkZXI9XFxcIuaQnOe0ouiBjOS9jeaIluWFrOWPuFxcXCI+ICAgICAgICAgICAgPGk+JiN4ZTUwMTs8L2k+ICAgICAgICA8L2Rpdj4gICAgPC9kaXY+ICAgIDxkaXYgY2xhc3M9XFxcImxpc3Rjb25cXFwiPiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY3VzdG9taW5mb1xcXCI+5bCG5pCc57Si5Zyw5Yy65ZKM5YWz6ZSu6K+N6K6+5Li65a6a5Yi25p2h5Lu2PC9kaXY+ICAgICAgICA8ZGl2IGlkPVxcXCJsaXN0LWNvbnRhaW5lclxcXCI+ICAgICAgICA8L2Rpdj4gICAgPC9kaXY+PC9kaXY+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gICAgcGFnZSBub3QgZm91bmQ8L2Rpdj5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8JSBmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7ICU+PGRpdiBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS1pZD08JT1saXN0W2ldLnBvc2l0aW9uSWQgJT4gPiAgICA8ZGl2IGNsYXNzPVxcXCJsb2dvXFxcIj4gICAgICAgIDxpbWcgc3JjPVxcXCJodHRwczovL3d3dy5sZ3N0YXRpYy5jb20vPCU9bGlzdFtpXS5jb21wYW55TG9nbyAlPlxcXCIgYWx0PVxcXCJcXFwiPiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cXFwiZGVzY1xcXCI+ICAgICAgICA8aDI+PCU9bGlzdFtpXS5jb21wYW55TmFtZSAlPjwvaDI+ICAgICAgICA8cD48JT1saXN0W2ldW1xcJ3Bvc2l0aW9uTmFtZVxcJ10gJT4gWyA8JT1saXN0W2ldW1xcJ2NpdHlcXCddICU+IF08L3A+ICAgICAgICA8cD48JT1saXN0W2ldW1xcJ2NyZWF0ZVRpbWVcXCddICU+PC9wPiAgICA8L2Rpdj4gICAgPGRpdiBjbGFzcz1cXFwic2FsYXJ5XFxcIj4gICAgICAgIDwlPWxpc3RbaV1bXFwnc2FsYXJ5XFwnXSAlPiAgICA8L2Rpdj48L2Rpdj48JSB9ICU+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBpZD1cXFwicG9zaXRpb24td3JhcHBlclxcXCI+ICAgIDxkaXY+ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRcXFwiPiAgICAgICAgICAgIDxpbWcgc3JjPVxcXCIuLi9pbWFnZXMvYXJyb3cucG5nXFxcIiBhbHQ9XFxcIlxcXCI+ICAgICAgICAgICAg5LiL5ouJ5Yi35pawICAgICAgICA8L2Rpdj4gICAgICAgIDxkaXYgY2xhc3M9XFxcImN1c3RvbVxcXCI+ICAgICAgICAgICAgPHNwYW4+ICAgICAgICAgICAgICAgIDEw56eS6ZKf5a6a5Yi26IGM5L2NICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgICAgIDxidXR0b24+5Y6755m75b2VPC9idXR0b24+ICAgICAgICA8L2Rpdj4gICAgICAgIDxkaXYgaWQ9XFxcImxpc3QtY29udGFpbmVyXFxcIj4gICAgICAgIDwvZGl2PiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdFxcXCI+ICAgICAgICAgICAg5Yqg6L295pu05aSaLi4uICAgICAgICA8L2Rpdj4gICAgPC9kaXY+PC9kaXY+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCIiXSwic291cmNlUm9vdCI6IiJ9