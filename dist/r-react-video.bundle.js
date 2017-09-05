/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Created by IvanP on 11.01.2017.
	                                                                                                                                                                                                                                                                               */
	
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(83);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _main = __webpack_require__(82);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _ReactVideo = __webpack_require__(76);
	
	var _ReactVideo2 = _interopRequireDefault(_ReactVideo);
	
	var _rReportalBase = __webpack_require__(72);
	
	var _rReportalBase2 = _interopRequireDefault(_rReportalBase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * initialise HitList on DOMContentLoaded for a quicker cold-start, no need to wait for the original HitList
	 * @param {String} configName - name of the variable passed to DOM as a config
	 * @param {Boolean} [thumbsPlaceholder=true] - display thumbs as image placeholders instead of media icons
	 * */
	var launchVideoHitlist = function launchVideoHitlist(configName) {
	  var thumbsPlaceholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	  if (!configName) {
	    throw new Error('config is not specified!');
	  } else if (configName && typeof configName != 'string') {
	    throw new TypeError('config name must be a string, not a ' + (typeof configName === 'undefined' ? 'undefined' : _typeof(configName)));
	  }
	
	  window.addEventListener("DOMContentLoaded", function () {
	    _reactDom2.default.render(_react2.default.createElement(_ReactVideo2.default, {
	      config: configName,
	      thumbsPlaceholder: thumbsPlaceholder,
	      verbose: true
	    }), document.getElementById('root'));
	  });
	};
	
	window.Reportal = window.Reportal || {};
	_rReportalBase2.default.mixin(window.Reportal, {
	  launchVideoHitlist: launchVideoHitlist
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(30)('wks');
	var uid = __webpack_require__(33);
	var _Symbol = __webpack_require__(3).Symbol;
	var USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
	// eslint-disable-next-line no-new-func
	: Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(14);
	var createDesc = __webpack_require__(29);
	module.exports = __webpack_require__(7) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.5.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(24)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(9);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(4);
	var IE8_DOM_DEFINE = __webpack_require__(42);
	var toPrimitive = __webpack_require__(65);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) {/* empty */}
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(13);
	var document = __webpack_require__(3).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(14).f;
	var has = __webpack_require__(12);
	var TAG = __webpack_require__(2)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(30)('keys');
	var uid = __webpack_require__(33);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(44);
	var defined = __webpack_require__(15);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(10);
	var TAG = __webpack_require__(2)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function tryGet(it, key) {
	  try {
	    return it[key];
	  } catch (e) {/* empty */}
	};
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(3);
	var core = __webpack_require__(6);
	var ctx = __webpack_require__(11);
	var hide = __webpack_require__(5);
	var PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? function (C) {
	      var F = function F(a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0:
	              return new C();
	            case 1:
	              return new C(a);
	            case 2:
	              return new C(a, b);
	          }return new C(a, b, c);
	        }return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	      // make static versions for prototype methods
	    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	$export.U = 64; // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var document = __webpack_require__(3).document;
	module.exports = document && document.documentElement;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(27);
	var $export = __webpack_require__(23);
	var redefine = __webpack_require__(59);
	var hide = __webpack_require__(5);
	var has = __webpack_require__(12);
	var Iterators = __webpack_require__(8);
	var $iterCreate = __webpack_require__(47);
	var setToStringTag = __webpack_require__(17);
	var getPrototypeOf = __webpack_require__(53);
	var ITERATOR = __webpack_require__(2)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function returnThis() {
	  return this;
	};
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() {
	      return $native.call(this);
	    };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = true;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	
	var aFunction = __webpack_require__(9);
	
	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}
	
	module.exports.f = function (C) {
	  return new PromiseCapability(C);
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(3);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(11);
	var invoke = __webpack_require__(43);
	var html = __webpack_require__(25);
	var cel = __webpack_require__(16);
	var global = __webpack_require__(3);
	var process = global.process;
	var setTask = global.setImmediate;
	var clearTask = global.clearImmediate;
	var MessageChannel = global.MessageChannel;
	var Dispatch = global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function run() {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function listener(event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (__webpack_require__(10)(process) == 'process') {
	    defer = function defer(id) {
	      process.nextTick(ctx(run, id, 1));
	    };
	    // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function defer(id) {
	      Dispatch.now(ctx(run, id, 1));
	    };
	    // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	    // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
	    defer = function defer(id) {
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	    // IE8-
	  } else if (ONREADYSTATECHANGE in cel('script')) {
	    defer = function defer(id) {
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	    // Rest old browsers
	  } else {
	    defer = function defer(id) {
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set: setTask,
	  clear: clearTask
	};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(19);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';
	
	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	!function (e, t) {
	  if ("object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module))) module.exports = t(__webpack_require__(1));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	    var r = t("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("react") : e.react);for (var o in r) {
	      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : e)[o] = r[o];
	    }
	  }
	}(undefined, function (e) {
	  return function (e) {
	    function t(o) {
	      if (r[o]) return r[o].exports;var n = r[o] = { exports: {}, id: o, loaded: !1 };return e[o].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports;
	    }var r = {};return t.m = e, t.c = r, t.p = "", t(0);
	  }([function (e, t, r) {
	    "use strict";
	    Object.defineProperty(t, "__esModule", { value: !0 });var o = r(1);t.default = o.MDIcon, e.exports = t.default;
	  }, function (e, t, r) {
	    "use strict";
	    function o(e) {
	      return e && e.__esModule ? e : { default: e };
	    }function n(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }function i(e, t) {
	      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	    }function u(e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }Object.defineProperty(t, "__esModule", { value: !0 }), t.MDIcon = void 0;var c = function () {
	      function e(e, t) {
	        for (var r = 0; r < t.length; r++) {
	          var o = t[r];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
	        }
	      }return function (t, r, o) {
	        return r && e(t.prototype, r), o && e(t, o), t;
	      };
	    }(),
	        f = r(2),
	        l = o(f),
	        a = t.MDIcon = function (e) {
	      function t() {
	        return n(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
	      }return u(t, e), c(t, [{ key: "render", value: function value() {
	          var e = this.props,
	              t = e.fill,
	              r = e.size,
	              o = e.icon,
	              n = e.children;return console.log(t, r, o, n), l.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: t, width: r, height: r, viewBox: "0 0 24 24", children: o || n });
	        } }]), t;
	    }(f.PureComponent);a.defaultProps = { size: 24, fill: "rgba(0,0,0,.85)" };
	  }, function (t, r) {
	    t.exports = e;
	  }]);
	});
	//# sourceMappingURL=MDIcon.bundle.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	!function (e, t) {
	  if ("object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module))) module.exports = t(__webpack_require__(1));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	    var o = t("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("react") : e.react);for (var r in o) {
	      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : e)[r] = o[r];
	    }
	  }
	}(undefined, function (e) {
	  return function (e) {
	    function t(r) {
	      if (o[r]) return o[r].exports;var n = o[r] = { exports: {}, id: r, loaded: !1 };return e[r].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports;
	    }var o = {};return t.m = e, t.c = o, t.p = "", t(0);
	  }([function (e, t, o) {
	    "use strict";
	    function r(e) {
	      return e && e.__esModule ? e : { default: e };
	    }function n(e, t) {
	      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	    }function i(e, t) {
	      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	    }function a(e, t) {
	      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	    }Object.defineProperty(t, "__esModule", { value: !0 });var s = Object.assign || function (e) {
	      for (var t = 1; t < arguments.length; t++) {
	        var o = arguments[t];for (var r in o) {
	          Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
	        }
	      }return e;
	    },
	        l = function () {
	      function e(e, t) {
	        for (var o = 0; o < t.length; o++) {
	          var r = t[o];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	        }
	      }return function (t, o, r) {
	        return o && e(t.prototype, o), r && e(t, r), t;
	      };
	    }(),
	        p = o(1),
	        u = r(p),
	        c = function (e) {
	      function t(e) {
	        n(this, t);var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return o._imageOnload = o._imageOnload.bind(o), o._imageOnerror = o._imageOnerror.bind(o), o.state = { src: void 0, placeholderHidden: !o.props.placeholder, sizing: o.props.sizing ? o.props.sizing : null, position: o.props.position ? o.props.position : "center", proportion: 0, loaded: !1, loading: !1, error: !1 }, o;
	      }return a(t, e), l(t, [{ key: "componentDidMount", value: function value() {
	          this._load(), this._computeDimensions(), this._computeProportion(this.props.aspect);
	        } }, { key: "_computeDimensions", value: function value() {
	          var e = this.props,
	              t = e.width,
	              o = e.height;this.setState({ width: isNaN(t) ? t : t + "px", height: isNaN(o) ? o : o + "px" });
	        } }, { key: "_computeProportion", value: function value(e) {
	          if (e && e.indexOf(":") > -1) {
	            var t = e.split(":").map(function (e) {
	              return parseFloat(e);
	            });isNaN(t[0]) || isNaN(t[1]) || this.setState(function (e) {
	              if (!isNaN(parseFloat(e.width))) return { proportion: (parseFloat(e.width) * (t[1] / t[0])).toString() + e.width.substring(parseFloat(e.width).toString().length), height: "auto" };
	            });
	          }
	        } }, { key: "render", value: function value() {
	          var e = this.state,
	              t = e.width,
	              o = e.height,
	              r = e.proportion,
	              n = e.src,
	              i = e.sizing,
	              a = e.position,
	              s = e.loading,
	              l = e.loaded,
	              p = e.placeholderHidden,
	              c = this.props,
	              d = c.preload,
	              f = c.fade,
	              h = c.placeholderSizing,
	              g = c.placeholder,
	              m = c.alt;return u.default.createElement("div", { className: "ProportionalImage", style: { width: t, height: o, paddingTop: r } }, u.default.createElement("div", { className: "sizedImgDiv", role: "img", style: { backgroundImage: n ? "url(" + n + ")" : void 0, backgroundSize: i, backgroundPosition: a, backgroundRepeat: i ? "no-repeat" : "initial", display: i ? "block" : "none" } }), u.default.createElement("img", { src: n, alt: m, onLoad: this._imageOnload, onError: this._imageOnerror, style: { display: i ? "none" : "block" } }), u.default.createElement("div", { style: { backgroundImage: g ? "url(" + g + ")" : void 0, backgroundSize: h ? h : i, backgroundPosition: a, backgroundRepeat: i ? "no-repeat" : "initial" }, className: "imagePlaceholder " + (p && "hidden") + " " + (d && f && !s && l && "faded-out") }));
	        } }, { key: "_imageOnload", value: function value() {
	          this.setState({ loading: !1, loaded: !0, error: !1 });
	        } }, { key: "_imageOnerror", value: function value() {
	          this.setState(s({}, this._reset(), { error: !0 }));
	        } }, { key: "_reset", value: function value() {
	          return { src: void 0, loading: !1, loaded: !1, error: !1 };
	        } }, { key: "_load", value: function value() {
	          var e = this._reset();if (!this.props.preventLoad) {
	            var t = this.props.src;e.src !== t && (e = s({}, e, { src: t ? t : void 0, loading: !!t }));
	          }this.setState(e);
	        } }]), t;
	    }(u.default.Component);t.default = c;
	  }, function (t, o) {
	    t.exports = e;
	  }]);
	});
	//# sourceMappingURL=ProportionalImage.bundle.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(69);
	module.exports = __webpack_require__(6).Promise;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function () {/* empty */};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(20);
	var toLength = __webpack_require__(32);
	var toAbsoluteIndex = __webpack_require__(63);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	      // Array#indexOf ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(11);
	var call = __webpack_require__(46);
	var isArrayIter = __webpack_require__(45);
	var anObject = __webpack_require__(4);
	var toLength = __webpack_require__(32);
	var getIterFn = __webpack_require__(66);
	var BREAK = {};
	var RETURN = {};
	var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : getIterFn(iterable);
	  var f = ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	_exports.BREAK = BREAK;
	_exports.RETURN = RETURN;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(7) && !__webpack_require__(24)(function () {
	  return Object.defineProperty(__webpack_require__(16)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	"use strict";
	
	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function (fn, args, that) {
	                  var un = that === undefined;
	                  switch (args.length) {
	                                    case 0:
	                                                      return un ? fn() : fn.call(that);
	                                    case 1:
	                                                      return un ? fn(args[0]) : fn.call(that, args[0]);
	                                    case 2:
	                                                      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	                                    case 3:
	                                                      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	                                    case 4:
	                                                      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	                  }return fn.apply(that, args);
	};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(10);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(8);
	var ITERATOR = __webpack_require__(2)('iterator');
	var ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(4);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(51);
	var descriptor = __webpack_require__(29);
	var setToStringTag = __webpack_require__(17);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(5)(IteratorPrototype, __webpack_require__(2)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(2)('iterator');
	var SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () {
	      return { done: safe = true };
	    };
	    arr[ITERATOR] = function () {
	      return iter;
	    };
	    exec(arr);
	  } catch (e) {/* empty */}
	  return safe;
	};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(3);
	var macrotask = __webpack_require__(31).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(10)(process) == 'process';
	
	module.exports = function () {
	  var head, last, notify;
	
	  var flush = function flush() {
	    var parent, fn;
	    if (isNode && (parent = process.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();else last = undefined;
	        throw e;
	      }
	    }last = undefined;
	    if (parent) parent.enter();
	  };
	
	  // Node.js
	  if (isNode) {
	    notify = function notify() {
	      process.nextTick(flush);
	    };
	    // browsers with MutationObserver
	  } else if (Observer) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function notify() {
	      node.data = toggle = !toggle;
	    };
	    // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise && Promise.resolve) {
	    var promise = Promise.resolve();
	    notify = function notify() {
	      promise.then(flush);
	    };
	    // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout
	  } else {
	    notify = function notify() {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    }last = task;
	  };
	};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(4);
	var dPs = __webpack_require__(52);
	var enumBugKeys = __webpack_require__(22);
	var IE_PROTO = __webpack_require__(18)('IE_PROTO');
	var Empty = function Empty() {/* empty */};
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(16)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(25).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  _createDict = iframeDocument.F;
	  while (i--) {
	    delete _createDict[PROTOTYPE][enumBugKeys[i]];
	  }return _createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = _createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(14);
	var anObject = __webpack_require__(4);
	var getKeys = __webpack_require__(55);
	
	module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(12);
	var toObject = __webpack_require__(64);
	var IE_PROTO = __webpack_require__(18)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(12);
	var toIObject = __webpack_require__(20);
	var arrayIndexOf = __webpack_require__(40)(false);
	var IE_PROTO = __webpack_require__(18)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(54);
	var enumBugKeys = __webpack_require__(22);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var newPromiseCapability = __webpack_require__(28);
	
	module.exports = function (C, x) {
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var hide = __webpack_require__(5);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];else hide(target, key, src[key]);
	  }return target;
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(5);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(3);
	var core = __webpack_require__(6);
	var dP = __webpack_require__(14);
	var DESCRIPTORS = __webpack_require__(7);
	var SPECIES = __webpack_require__(2)('species');
	
	module.exports = function (KEY) {
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(4);
	var aFunction = __webpack_require__(9);
	var SPECIES = __webpack_require__(2)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(19);
	var defined = __webpack_require__(15);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(19);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(15);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(21);
	var ITERATOR = __webpack_require__(2)('iterator');
	var Iterators = __webpack_require__(8);
	module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(38);
	var step = __webpack_require__(49);
	var Iterators = __webpack_require__(8);
	var toIObject = __webpack_require__(20);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(26)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(27);
	var global = __webpack_require__(3);
	var ctx = __webpack_require__(11);
	var classof = __webpack_require__(21);
	var $export = __webpack_require__(23);
	var isObject = __webpack_require__(13);
	var aFunction = __webpack_require__(9);
	var anInstance = __webpack_require__(39);
	var forOf = __webpack_require__(41);
	var speciesConstructor = __webpack_require__(61);
	var task = __webpack_require__(31).set;
	var microtask = __webpack_require__(50)();
	var newPromiseCapabilityModule = __webpack_require__(28);
	var perform = __webpack_require__(56);
	var promiseResolve = __webpack_require__(57);
	var PROMISE = 'Promise';
	var TypeError = global.TypeError;
	var process = global.process;
	var $Promise = global[PROMISE];
	var isNode = classof(process) == 'process';
	var empty = function empty() {/* empty */};
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) {/* empty */}
	}();
	
	// helpers
	var sameConstructor = LIBRARY ? function (a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	} : function (a, b) {
	  return a === b;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value);
	            if (domain) domain.exit();
	          }
	          if (result === reaction.promise) {
	            reject(TypeError('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        reject(e);
	      }
	    };
	    while (chain.length > i) {
	      run(chain[i++]);
	    } // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function onUnhandled(promise) {
	  task.call(global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else if (handler = global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    }promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c;
	  var i = 0;
	  var reaction;
	  while (chain.length > i) {
	    reaction = chain[i++];
	    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
	  }return true;
	};
	var onHandleUnhandled = function onHandleUnhandled(promise) {
	  task.call(global, function () {
	    var handler;
	    if (isNode) {
	      process.emit('rejectionHandled', promise);
	    } else if (handler = global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function $reject(value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function $resolve(value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};
	
	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(58)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function _catch(onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function OwnPromiseCapability() {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
	    return sameConstructor($Promise, C) ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(17)($Promise, PROMISE);
	__webpack_require__(60)(PROMISE);
	Wrapper = __webpack_require__(6)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    return promiseResolve(this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(48)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(62)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(26)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(67);
	var global = __webpack_require__(3);
	var hide = __webpack_require__(5);
	var Iterators = __webpack_require__(8);
	var TO_STRING_TAG = __webpack_require__(2)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _promise = __webpack_require__(37);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ReportalBase = function () {
	  function ReportalBase() {
	    _classCallCheck(this, ReportalBase);
	  }
	
	  _createClass(ReportalBase, null, [{
	    key: 'mixin',
	
	
	    /**
	     * Copies props from a source object to a target object.
	     *
	     * Note, this method uses a simple `for...in` strategy for enumerating
	     * properties.  To ensure only `ownProperties` are copied from source
	     * to target and that accessor implementations are copied, use `extend`.
	     *
	     * @method mixin
	     * @param {Object} target Target object to copy properties to.
	     * @param {Object} source Source object to copy properties from.
	     * @return {Object} Target object that was passed as first argument.
	     */
	    value: function mixin(target, source) {
	      for (var i in source) {
	        target[i] = source[i];
	      }
	      return target;
	    }
	  }, {
	    key: '_logger',
	    value: function _logger(level, args) {
	      // accept ['foo', 'bar'] and [['foo', 'bar']]
	      if (args.length === 1 && Array.isArray(args[0])) {
	        args = args[0];
	      }
	      // only accept logging functions
	      switch (level) {
	        case 'log':
	        case 'warn':
	        case 'error':
	          console[level].apply(console, args);
	          break;
	      }
	    }
	  }, {
	    key: '_log',
	    value: function _log() {
	      var args = Array.prototype.slice.call(arguments, 0);
	      this._logger('log', args);
	    }
	  }, {
	    key: '_warn',
	    value: function _warn() {
	      var args = Array.prototype.slice.call(arguments, 0);
	      this._logger('warn', args);
	    }
	  }, {
	    key: '_error',
	    value: function _error() {
	      var args = Array.prototype.slice.call(arguments, 0);
	      this._logger('error', args);
	    }
	
	    /**
	     * Creates a named event with `name`
	     * @param {String} name - name of the event
	     * @return {Event} Returns a created event
	     * */
	
	  }, {
	    key: 'newEvent',
	    value: function newEvent(name) {
	      var event = document.createEvent('Event');
	      event.initEvent(name, true, true);
	      return event;
	    }
	
	    /**
	     * Inspects if the current string might be converted to number and renders it as number. If string length is 0, returns `null`. If none applies returns the string as is.
	     * @param {String} str - value of the cell if not HTML contents
	     * @return {Number|null|String}
	     * */
	
	  }, {
	    key: 'isNumber',
	    value: function isNumber(str) {
	      if (!isNaN(parseFloat(str))) {
	        str = str.replace(/,/i, ''); // remove unnecessary comma as a delimiter for thousands from data.
	        return parseFloat(str);
	      } else if (str.length == 0) {
	        return null;
	      } else {
	        return str;
	      }
	    }
	
	    /**
	     * Creates an XHR wrapped in a Promise
	     * @param {!String} URL - url to send a `GET` request to
	     * @return {Promise} Returns a then-able promise with `XMLHttpRequest.responseText`
	     * */
	
	  }, {
	    key: 'promiseRequest',
	    value: function promiseRequest(URL) {
	      return new _promise2.default(function (resolve, reject) {
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET', URL, true);
	        xhr.onload = function () {
	          xhr.status == 200 ? resolve(xhr.responseText) : reject(Error(xhr.status + ': ' + xhr.statusText));
	        };
	        xhr.onerror = function () {
	          reject(Error("Network Error"));
	        };
	        xhr.send();
	      });
	    }
	
	    /**
	     * Gets a variable listed in query string
	     * @param {!String} variable - variable name to get value for
	     * @param {String=} [query=window.location.search.substring(1)] - the query string to search variable for in
	     * @return {String} Returns value for the variable
	     * */
	
	  }, {
	    key: 'getQueryVariable',
	    value: function getQueryVariable(variable) {
	      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.search.substring(1);
	
	      var vars = query.split("&");
	      for (var i = 0; i < vars.length; i++) {
	        var pair = vars[i].split("=");
	        if (pair[0].toLowerCase() == variable.toLowerCase()) {
	          return pair[1];
	        }
	      }
	      return null;
	    }
	
	    /**
	     * turns `window.location` object into an object with params as named keys necessary to reconstruct the URL
	     * @param {Object=} [location = window.location] - a window.location object, by default of the host window where the script is executed
	     * @returns {{path:String, query:Object}} a `location` object
	     * */
	
	  }, {
	    key: 'locationDeserialize',
	    value: function locationDeserialize() {
	      var location = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location;
	
	      var o = {
	        path: location.origin + location.pathname,
	        query: {}
	      };
	      location.search.substring(1).split(/&/).forEach(function (pair) {
	        var aPair = pair.split(/=/);
	        o.query[aPair[0].toLowerCase()] = aPair[1];
	      });
	      return o;
	    }
	
	    /**
	     * Turns a `location` object (result of `locationDeserialize`) into a URL
	     * @param {{path:String, query:Object}} location - an object with params and a url
	     * @returns {String} - a URL string
	     * */
	
	  }, {
	    key: 'locationSerialize',
	    value: function locationSerialize(location) {
	      var query = [];
	      for (var key in location.query) {
	        query.push([key, location.query[key]].join('='));
	      }
	      return location.path + '?' + query.join('&');
	    }
	  }]);
	
	  return ReportalBase;
	}();
	
	exports.default = ReportalBase;
	module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ProportionalImage = __webpack_require__(36);
	
	var _ProportionalImage2 = _interopRequireDefault(_ProportionalImage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MEDIA_TYPES = ['image', 'audio', 'video'];
	
	var ImageGridTile = function (_PureComponent) {
	  _inherits(ImageGridTile, _PureComponent);
	
	  function ImageGridTile() {
	    _classCallCheck(this, ImageGridTile);
	
	    return _possibleConstructorReturn(this, (ImageGridTile.__proto__ || Object.getPrototypeOf(ImageGridTile)).apply(this, arguments));
	  }
	
	  _createClass(ImageGridTile, [{
	    key: 'render',
	
	    /**
	     * Creates a tile for image list
	     * @param {Object} props
	     * @param {String} props.image - image url
	     * @param {String} props.placeholder - a placeholder image
	     * @param {String} props.placeholderSizing - Sets a sizing option for the placeholder. By default it's the same as for the `src` image, but set to `initial` or other valid `background-size` value to override.
	     * @param {String} props.mediatype - a default media icon instead of the placeholder image: one of `image`,`audio`,`video`
	     * @param {String} [props.iconColor="#cccccc"] - default placeholder media icon color
	     * @param {String} [props.iconSize=48] - default placeholder media icon size
	     * @param {String} [props.aspect="16:9"] - aspect ratio of the image to be in the tile
	     *
	     * @param {String} props.title - title of the video
	     * @param {String} props.description - description of the video
	     * @param {Boolean} props.actionIcon - icon to display as the action icon. It also has to have a callback attached to it when passed.
	     * @param {Function} props.onSelect - callback to be executed when the link is clicked
	     * */
	
	    value: function render() {
	      var actionButton = null;
	      var _props = this.props,
	          actionIcon = _props.actionIcon,
	          actionIconClick = _props.actionIconClick,
	          onSelect = _props.onSelect,
	          aspect = _props.aspect,
	          title = _props.title,
	          placeholderSizing = _props.placeholderSizing,
	          image = _props.image,
	          description = _props.description;
	
	      if (this.props.actionIcon) {
	        actionButton = _react2.default.createElement(
	          'div',
	          { className: 'ImageGridTile--edit' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ImageGridTile--action-icon ripple', onClick: actionIconClick },
	            actionIcon
	          )
	        );
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'ImageGridTile' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ImageGridTile--cover', onClick: onSelect },
	          _react2.default.createElement(_ProportionalImage2.default, {
	            width: '100%',
	            aspect: aspect,
	            sizing: 'cover',
	            preload: true,
	            fade: true,
	            alt: title,
	            placeholder: this._computeTileType(),
	            placeholderSizing: placeholderSizing,
	            src: image
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ImageGridTile--content' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ImageGridTile--meta' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ImageGridTile--title ellipsis', onClick: onSelect },
	              title
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'ImageGridTile--description ellipsis' },
	              description
	            )
	          ),
	          actionButton
	        )
	      );
	    }
	  }, {
	    key: '_computeTileType',
	    value: function _computeTileType() {
	      try {
	        var _props2 = this.props,
	            placeholder = _props2.placeholder,
	            mediatype = _props2.mediatype,
	            iconSize = _props2.iconSize,
	            iconColor = _props2.iconColor;
	
	        if (!placeholder && mediatype) {
	          if (MEDIA_TYPES.indexOf(mediatype) === -1) {
	            throw new Error('Unrecognized type "' + mediatype + '" is specified');
	          }
	          var icon = ImageGridTile.iconServer(mediatype, iconSize, iconColor);
	          return 'data:image/svg+xml,' + escape(icon);
	        } else if (!!placeholder) {
	          return placeholder;
	        } else {
	          return 'data:image/svg+xml,' + escape(ImageGridTile.iconServer('unknown', iconSize, iconColor));
	        }
	      } catch (error) {
	        console.error(error);
	      }
	    }
	
	    /**
	     * Returns an icon with a correct fill color
	     * @param {String} name - icon name (one of `image`, `video`, `audio`)
	     * @param {Number} [size=24] - icon size in pixels
	     * @param {String} [fill="#cccccc"] - valid CSS color declaration
	     * @returns {String}
	     * */
	
	  }], [{
	    key: 'iconServer',
	    value: function iconServer(name) {
	      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 48;
	      var fill = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#cccccc";
	
	      try {
	        var icons = {
	          image: '<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>',
	          audio: '<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>',
	          video: '<path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>',
	          unknown: '<path d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z"/>'
	        };
	        if (!icons[name]) {
	          throw new Error('icon "' + name + '" is not on the list');
	        }
	
	        return '<svg fill="' + fill + '" height="' + size + '" viewBox="0 0 24 24" width="' + size + '" xmlns="http://www.w3.org/2000/svg">' + icons[name] + '</svg>';
	      } catch (error) {
	        console.error(error);
	      }
	    }
	  }]);
	
	  return ImageGridTile;
	}(_react.PureComponent);
	
	ImageGridTile.propTypes = {
	  image: _react.PropTypes.string,
	  placeholder: _react.PropTypes.string,
	  placeholderSizing: _react.PropTypes.oneOf(['contain', 'cover', 'initial']),
	  mediatype: _react.PropTypes.oneOf(MEDIA_TYPES),
	  iconColor: _react.PropTypes.string,
	  iconSize: _react.PropTypes.number,
	  aspect: _react.PropTypes.string,
	  title: _react.PropTypes.string,
	  description: _react.PropTypes.string,
	  actionIcon: _react.PropTypes.func,
	  onSelect: _react.PropTypes.func
	};
	
	ImageGridTile.defaultProps = {
	  iconColor: "#cccccc",
	  iconSize: 48,
	  aspect: "16:9"
	};
	
	exports.default = ImageGridTile;
	module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGridTile = __webpack_require__(73);
	
	var _ImageGridTile2 = _interopRequireDefault(_ImageGridTile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * `ImageGrid` is a stateless React component that allows to compute an array of ImageGridTiles from `items` passed in props
	 * @param {Object} props
	 * @param {Array} props.items - an array of items `{id:Number|String, image:String, mediatype:?String, placeholder:?String, title:String,description:String}`
	 * @param {String} props.aspect - aspect ratio for the ImageGridTile image
	 * @param {ReactElement} props.actionIcon - action icon JSX with a bound handler
	 * @param {?String} props.placeholderSizing - Sets a sizing option for the placeholder. By default it's the same as for the `src` image, but set to `initial` or other valid `background-size` value to override.
	 * @param {Function} props.onSelect - function that is executed when an item is clicked on
	 * @param {Number} props.dummyItems - function that is executed when an item is clicked on
	 * */
	var ImageGrid = function (_PureComponent) {
	  _inherits(ImageGrid, _PureComponent);
	
	  function ImageGrid() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ImageGrid);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageGrid.__proto__ || Object.getPrototypeOf(ImageGrid)).call.apply(_ref, [this].concat(args))), _this), _this.itemClickHandler = function (item) {
	      return function (event) {
	        return _this.props.onSelect(item);
	      };
	    }, _this.editItem = function (item) {
	      return _this.props.actionIconClick(item);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ImageGrid, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          items = _props.items,
	          dummyItems = _props.dummyItems,
	          aspect = _props.aspect,
	          placeholderSizing = _props.placeholderSizing,
	          actionIcon = _props.actionIcon;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'ImageGrid' },
	        Array.isArray(items) && items.length > 0 && items.map(function (item) {
	          return _react2.default.createElement(_ImageGridTile2.default, {
	            key: item.id.toString(),
	            aspect: aspect,
	            image: item.image,
	            mediatype: item.mediatype,
	            placeholder: item.placeholder,
	            placeholderSizing: item.image ? placeholderSizing : 'initial',
	            title: item.title,
	            description: item.description,
	            actionIcon: typeof actionIcon === 'function' ? actionIcon(item) : null,
	            actionIconClick: _this2.editItem(item),
	            onSelect: _this2.itemClickHandler(item)
	          });
	        }),
	        dummyItems && this.renderDummyItems(dummyItems)
	      );
	    }
	  }, {
	    key: 'renderDummyItems',
	    value: function renderDummyItems(count) {
	      var dummyItems = [];
	      while (count--) {
	        dummyItems.push(_react2.default.createElement('div', { className: 'ImageGridTile', key: 'dummy' + count }));
	      }
	      return dummyItems;
	    }
	  }]);
	
	  return ImageGrid;
	}(_react.PureComponent);
	
	ImageGrid.propTypes = {
	  items: _react.PropTypes.array,
	  aspect: _react.PropTypes.string,
	  actionIcon: _react.PropTypes.element,
	  actionIconClick: _react.PropTypes.func,
	  placeholderSizing: _react.PropTypes.string,
	  onSelect: _react.PropTypes.func.isRequired,
	  dummyItems: _react.PropTypes.number
	};
	
	ImageGrid.defaultProps = {
	  dummyItems: 12
	};
	
	exports.default = ImageGrid;
	module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Navigation = function (_PureComponent) {
	    _inherits(Navigation, _PureComponent);
	
	    function Navigation() {
	        _classCallCheck(this, Navigation);
	
	        return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
	    }
	
	    _createClass(Navigation, [{
	        key: 'render',
	        value: function render() {
	            var config = this.props.config;
	
	            if (config) {
	                var pagination = config.pagination;
	                if (pagination === 'continuous') {
	                    return this.continuousNavigation();
	                } else {
	                    return this.pagingNavigation();
	                }
	            } else {
	                return null;
	            }
	        }
	    }, {
	        key: 'continuousNavigation',
	        value: function continuousNavigation() {
	            var _props = this.props,
	                loadMore = _props.loadMore,
	                disableNextButton = _props.disableNextButton;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'buttonRow', style: { textAlign: 'center' } },
	                _react2.default.createElement(
	                    'span',
	                    { rel: 'button',
	                        className: 'materialButton flat',
	                        onClick: loadMore,
	                        disabled: disableNextButton
	                    },
	                    'Load more'
	                )
	            );
	        }
	    }, {
	        key: 'pagingNavigation',
	        value: function pagingNavigation() {
	            var _props2 = this.props,
	                loadPreviousPage = _props2.loadPreviousPage,
	                loadNextPage = _props2.loadNextPage,
	                disableNextButton = _props2.disableNextButton,
	                disablePrevButton = _props2.disablePrevButton,
	                pageInfo = _props2.pageInfo,
	                translate = _props2.translate;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'buttonRow' },
	                _react2.default.createElement(
	                    'span',
	                    { rel: 'button',
	                        className: 'materialButton accent',
	                        onClick: loadPreviousPage,
	                        disabled: disablePrevButton
	                    },
	                    translate('REPORT_SINGLEVIEW_PREVIOUS')
	                ),
	                _react2.default.createElement(
	                    'span',
	                    { rel: 'button',
	                        className: 'materialButton accent',
	                        onClick: loadNextPage,
	                        disabled: disableNextButton
	                    },
	                    translate('REPORT_SINGLEVIEW_NEXT')
	                ),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    pageInfo
	                )
	            );
	        }
	    }]);
	
	    return Navigation;
	}(_react.PureComponent);
	
	exports.default = Navigation;
	module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGrid = __webpack_require__(74);
	
	var _ImageGrid2 = _interopRequireDefault(_ImageGrid);
	
	var _SingleView = __webpack_require__(79);
	
	var _SingleView2 = _interopRequireDefault(_SingleView);
	
	var _DSAbstraction = __webpack_require__(84);
	
	var _DSAbstraction2 = _interopRequireDefault(_DSAbstraction);
	
	var _Navigation = __webpack_require__(75);
	
	var _Navigation2 = _interopRequireDefault(_Navigation);
	
	var _Responses = __webpack_require__(78);
	
	var _Responses2 = _interopRequireDefault(_Responses);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ReactVideo = function (_Component) {
	  _inherits(ReactVideo, _Component);
	
	  function ReactVideo() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ReactVideo);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactVideo.__proto__ || Object.getPrototypeOf(ReactVideo)).call.apply(_ref, [this].concat(args))), _this), _this.DS = (0, _DSAbstraction2.default)({
	      config: _this.props.config,
	      thumbsPlaceholder: _this.props.thumbsPlaceholder,
	      component: _this
	    }), _this.state = {
	      items: null,
	      error: false,
	      config: null,
	      singleViewMode: 'view',
	      singleView: {
	        link: ''
	      },
	      singleViewVisible: false,
	      singleViewDisablePrev: false,
	      singleViewDisableNext: false
	    }, _this.translate = _this.DS.i18n.bind(_this.DS), _this.returnToGrid = function () {
	      _this.setState({
	        singleViewVisible: false,
	        singleView: {
	          link: ''
	        }
	      });
	    }, _this.loadPreviousItem = function () {
	      return _this.navigateItems('back');
	    }, _this.loadNextItem = function () {
	      return _this.navigateItems('forward');
	    }, _this.onSelect = function (item) {
	      _this.setState(_extends({}, _this.getSingleViewNavState(_this.state.items.indexOf(item)), {
	        singleView: item,
	        singleViewVisible: true,
	        singleViewMode: 'view'
	      }));
	    }, _this.actionIcon = function (item) {
	      return _react2.default.createElement(
	        "svg",
	        { className: "icon", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
	        _react2.default.createElement("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" })
	      );
	    }, _this.actionIconClick = function (item) {
	      return function () {
	        return _this.setState(_extends({}, _this.getSingleViewNavState(_this.state.items.indexOf(item)), {
	          singleView: item,
	          singleViewVisible: true,
	          singleViewMode: 'edit'
	        }));
	      };
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ReactVideo, [{
	    key: "render",
	    value: function render() {
	      var _state = this.state,
	          items = _state.items,
	          singleViewVisible = _state.singleViewVisible,
	          error = _state.error,
	          config = _state.config;
	
	      var render = null;
	      if (!error && Array.isArray(items) && items.length !== 0) {
	        render = _react2.default.createElement(
	          "div",
	          { className: "GridContainer " + (!singleViewVisible ? 'GridView' : '') },
	          this.renderSingleView(),
	          _react2.default.createElement(
	            "div",
	            { className: "ImageGridContainer", style: { display: !singleViewVisible ? 'block' : 'none' } },
	            _react2.default.createElement(_ImageGrid2.default, {
	              aspect: "16:9",
	              onSelect: this.onSelect,
	              items: items,
	              actionIcon: config.canEdit ? this.actionIcon : null,
	              actionIconClick: this.actionIconClick
	            }),
	            this.renderNavigation()
	          )
	        );
	      } else {
	        if (this.DS) {
	          render = _react2.default.createElement(
	            "div",
	            { className: "GridContainer ImageGrid" },
	            this.dataLoadingMessage()
	          );
	        } else {
	          throw new Error('HitlistDatasource is not available');
	        }
	      }
	      return render;
	    }
	  }, {
	    key: "renderNavigation",
	    value: function renderNavigation() {
	      var _DS = this.DS,
	          loadPreviousPage = _DS.loadPreviousPage,
	          loadNextPage = _DS.loadNextPage,
	          loadMore = _DS.loadMore,
	          disableNextButton = _DS.disableNextButton,
	          disablePrevButton = _DS.disablePrevButton,
	          getPageInfo = _DS.getPageInfo;
	
	      var navigationProps = {
	        loadPreviousPage: loadPreviousPage,
	        loadNextPage: loadNextPage,
	        loadMore: loadMore,
	        disableNextButton: disableNextButton,
	        disablePrevButton: disablePrevButton,
	        pageInfo: getPageInfo(),
	        config: this.state.config,
	        translate: this.translate
	      };
	
	      return _react2.default.createElement(_Navigation2.default, navigationProps);
	    }
	  }, {
	    key: "renderSingleView",
	    value: function renderSingleView() {
	      var _state2 = this.state,
	          singleViewVisible = _state2.singleViewVisible,
	          singleView = _state2.singleView,
	          singleViewDisablePrev = _state2.singleViewDisablePrev,
	          singleViewDisableNext = _state2.singleViewDisableNext,
	          singleViewMode = _state2.singleViewMode;
	
	      return singleViewVisible ? _react2.default.createElement(
	        _SingleView2.default,
	        {
	          returnToGridAction: this.returnToGrid,
	          loadPreviousItem: this.loadPreviousItem,
	          loadNextItem: this.loadNextItem,
	          singleViewDisablePrev: singleViewDisablePrev,
	          singleViewDisableNext: singleViewDisableNext
	        },
	        singleViewMode === 'edit' ? _react2.default.createElement("iframe", { className: "renderArea", src: singleView.link }) : _react2.default.createElement(_Responses2.default, { data: singleView, columns: this.individualRecordsQuestionIds, columnsMap: this.individualRecordsKeyLabels })
	      ) : null;
	    }
	  }, {
	    key: "getLabelsForMainFields",
	    value: function getLabelsForMainFields() {
	      var _this2 = this;
	
	      var config = this.DS.config();
	      var map = {};
	      ['title', 'description', 'image', 'audio', 'video'].reverse().forEach(function (key) {
	        return map[key] = _this2.DS.allColumns.filter(function (record) {
	          return record.key === config[key];
	        })[0].label;
	      });
	      return map;
	    }
	  }, {
	    key: "getLabelsForIndividualRecords",
	    value: function getLabelsForIndividualRecords() {
	      var map = {};
	      var irIds = this.individualRecordsQuestionIds;
	      this.DS.allColumns.forEach(function (column) {
	        if (irIds.indexOf(column.key) > -1) {
	          map[column.key] = column.label;
	        }
	      });
	      return map;
	    }
	  }, {
	    key: "dataLoadingMessage",
	    value: function dataLoadingMessage() {
	      var message = void 0;
	      var _state3 = this.state,
	          items = _state3.items,
	          error = _state3.error;
	
	      if (error) {
	        message = 'errorLoading';
	      } else if (Array.isArray(items) && items.length === 0) {
	        message = 'REPORT_SINGLEVIEW_NOTHINGFOUND';
	      } else {
	        message = 'loadingData';
	      }
	      return this.DS.i18n(message);
	    }
	  }, {
	    key: "navigateItems",
	    value: function navigateItems(direction) {
	      var _this3 = this;
	
	      var items = this.state.items;
	      var paginationType = this.state.config.pagination;
	      var itemsLength = items.length - 1;
	      var currentSingleViewItemIndex = items.indexOf(this.state.singleView);
	      var nextIndex = direction === 'forward' ? currentSingleViewItemIndex + 1 : currentSingleViewItemIndex - 1;
	
	      var loadItemFromPreviousPage = nextIndex < 0 && !this.DS.disablePrevButton;
	      var loadItemFromNextPage = nextIndex > itemsLength && !this.DS.disableNextButton;
	
	      var promisedItems = Promise.resolve(items);
	      // assign items to thenable promises if requested item is outside of data boundaries
	      if (loadItemFromPreviousPage) {
	        promisedItems = this.DS.loadPreviousPage();
	      } else if (loadItemFromNextPage) {
	        promisedItems = paginationType !== 'continuous' ? this.DS.loadNextPage() : this.DS.loadMore();
	      }
	      /*     const itemsArePromised = !Array.isArray(items) && items.hasOwnProperty('then');
	          if (!itemsArePromised) {
	            promisedItems = Promise.resolve(items);
	          }
	       */
	      promisedItems.then(function () {
	        var singleViewData = void 0;
	        _this3.setState(function (prevState) {
	          var newItems = prevState.items;
	          var atDataLeftBoundaryCanLoad = nextIndex < 0 && !prevState.singleViewDisablePrev;
	          var atDataRightBoundaryCanLoad = nextIndex > itemsLength && !prevState.singleViewDisableNext && paginationType !== 'continuous';
	          if (atDataLeftBoundaryCanLoad) {
	            singleViewData = newItems[newItems.length - 1];
	          } else if (atDataRightBoundaryCanLoad) {
	            singleViewData = newItems[0];
	          } else {
	            singleViewData = newItems[nextIndex];
	          }
	
	          return _extends({}, _this3.getSingleViewNavState(nextIndex), {
	            singleView: singleViewData,
	            singleViewVisible: true
	          });
	        });
	      });
	    }
	  }, {
	    key: "getSingleViewNavState",
	    value: function getSingleViewNavState(currentItemIndex) {
	      var items = this.state.items;
	      var singleViewDisableNext = false,
	          singleViewDisablePrev = false;
	
	      if (currentItemIndex <= 0 && this.DS.disablePrevButton) {
	        singleViewDisablePrev = true;
	      }
	      if (currentItemIndex >= items.length - 1 && this.DS.disableNextButton) {
	        singleViewDisableNext = true;
	      }
	      return {
	        singleViewDisablePrev: singleViewDisablePrev,
	        singleViewDisableNext: singleViewDisableNext
	      };
	    }
	  }, {
	    key: "individualRecordsQuestionIds",
	    get: function get() {
	      var _DS$config = this.DS.config(),
	          individualRecords = _DS$config.individualRecords;
	
	      return individualRecords != null && Array.isArray(individualRecords) ? individualRecords : [];
	    }
	  }, {
	    key: "individualRecordsKeyLabels",
	    get: function get() {
	      return _extends({}, this.getLabelsForMainFields(), this.getLabelsForIndividualRecords());
	    }
	  }]);
	
	  return ReactVideo;
	}(_react.Component);
	
	exports.default = ReactVideo;
	module.exports = exports["default"];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MDIcon = __webpack_require__(35);
	
	var _MDIcon2 = _interopRequireDefault(_MDIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NavButton = function (_PureComponent) {
	    _inherits(NavButton, _PureComponent);
	
	    function NavButton() {
	        _classCallCheck(this, NavButton);
	
	        return _possibleConstructorReturn(this, (NavButton.__proto__ || Object.getPrototypeOf(NavButton)).apply(this, arguments));
	    }
	
	    _createClass(NavButton, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                icon = _props.icon,
	                wrapper = _objectWithoutProperties(_props, ['icon']);
	
	            return _react2.default.createElement(
	                'span',
	                _extends({ className: 'SingleView--nav-button ripple' }, wrapper),
	                _react2.default.createElement(_MDIcon2.default, { icon: icon })
	            );
	        }
	    }]);
	
	    return NavButton;
	}(_react.PureComponent);
	
	exports.default = NavButton;
	module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Responses = function (_PureComponent) {
	    _inherits(Responses, _PureComponent);
	
	    function Responses() {
	        _classCallCheck(this, Responses);
	
	        return _possibleConstructorReturn(this, (Responses.__proto__ || Object.getPrototypeOf(Responses)).apply(this, arguments));
	    }
	
	    _createClass(Responses, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props,
	                data = _props.data,
	                columns = _props.columns,
	                columnsMap = _props.columnsMap;
	
	            var media = ['image', 'video', 'audio'];
	            var responseDate = data.interview_start || data.interview_end;
	            return _react2.default.createElement(
	                'div',
	                { className: 'renderArea Responses' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'Responses--wrapper' },
	                    data.title && _react2.default.createElement(
	                        'div',
	                        { className: 'Responses--pageTitle' },
	                        ' ',
	                        data.title,
	                        ' '
	                    ),
	                    !!responseDate && _react2.default.createElement(
	                        'div',
	                        { className: 'Responses--label' },
	                        ' ',
	                        responseDate,
	                        ' '
	                    ),
	                    data.description && _react2.default.createElement(
	                        'div',
	                        { className: 'Responses--value' },
	                        ' ',
	                        data.description,
	                        ' '
	                    ),
	                    media.map(function (mediaItem) {
	                        return data[mediaItem] ? _react2.default.createElement(
	                            'div',
	                            { className: 'row' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'Responses--label' },
	                                columnsMap[mediaItem]
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'Responses--value' },
	                                _this2['_' + mediaItem + 'Renderer']
	                            )
	                        ) : null;
	                    }),
	                    columns != null && columns.map(function (qID) {
	                        return data[qID] ? _react2.default.createElement(
	                            'div',
	                            { className: 'row' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'Responses--label' },
	                                columnsMap[qID]
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'Responses--value' },
	                                data[qID]
	                            )
	                        ) : null;
	                    })
	                )
	            );
	        }
	    }, {
	        key: '_imageRenderer',
	        get: function get() {
	            return _react2.default.createElement('img', { className: 'Responses--media', src: this.props.data.image });
	        }
	    }, {
	        key: '_videoRenderer',
	        get: function get() {
	            var data = this.props.data.video;
	            return _react2.default.createElement(
	                'video',
	                { key: data, controls: true, className: 'Responses--media' },
	                _react2.default.createElement('source', { src: data, type: 'video/mp4' }),
	                'Your browser does not support the video tag.'
	            );
	        }
	    }, {
	        key: '_audioRenderer',
	        get: function get() {
	            var data = this.props.data.audio;
	            return _react2.default.createElement('audio', { key: data, src: data, type: 'audio/mp4', controls: true, className: 'Responses--media' });
	        }
	    }]);
	
	    return Responses;
	}(_react.PureComponent);
	
	exports.default = Responses;
	module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NavButton = __webpack_require__(77);
	
	var _NavButton2 = _interopRequireDefault(_NavButton);
	
	var _icons = __webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NavBar = function NavBar(props) {
	  var loadPreviousItem = props.loadPreviousItem,
	      returnToGridAction = props.returnToGridAction,
	      loadNextItem = props.loadNextItem,
	      singleViewDisablePrev = props.singleViewDisablePrev,
	      singleViewDisableNext = props.singleViewDisableNext;
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'SingleView--header' },
	    _react2.default.createElement(_NavButton2.default, { disabled: singleViewDisablePrev, title: 'Previous item', onClick: loadPreviousItem, icon: _icons.ic_arrow_back }),
	    _react2.default.createElement(_NavButton2.default, { title: 'Return to the list', onClick: returnToGridAction, icon: _icons.ic_view_module }),
	    _react2.default.createElement(_NavButton2.default, { disabled: singleViewDisableNext, title: 'Next Item', onClick: loadNextItem, icon: _icons.ic_arrow_forward })
	  );
	};
	
	var SingleView = function (_PureComponent) {
	  _inherits(SingleView, _PureComponent);
	
	  function SingleView() {
	    _classCallCheck(this, SingleView);
	
	    return _possibleConstructorReturn(this, (SingleView.__proto__ || Object.getPrototypeOf(SingleView)).apply(this, arguments));
	  }
	
	  _createClass(SingleView, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          navBarProps = _objectWithoutProperties(_props, ['children']);
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'SingleView' },
	        _react2.default.createElement(NavBar, navBarProps),
	        children
	      );
	    }
	  }]);
	
	  return SingleView;
	}(_react.PureComponent);
	
	exports.default = SingleView;
	module.exports = exports['default'];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ic_view_module = exports.ic_arrow_forward = exports.ic_arrow_back = exports.ic_star_border = exports.ic_star = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ic_star = exports.ic_star = _react2.default.createElement("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" });
	var ic_star_border = exports.ic_star_border = _react2.default.createElement("path", { d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" });
	var ic_arrow_back = exports.ic_arrow_back = _react2.default.createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" });
	var ic_arrow_forward = exports.ic_arrow_forward = _react2.default.createElement("path", { d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" });
	var ic_view_module = exports.ic_view_module = _react2.default.createElement("path", { d: "M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" });

/***/ }),
/* 81 */,
/* 82 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = DSAbstraction;
	
	var _rHitlistDatasource = __webpack_require__(227);
	
	var _rHitlistDatasource2 = _interopRequireDefault(_rHitlistDatasource);
	
	var _unionBy = __webpack_require__(224);
	
	var _unionBy2 = _interopRequireDefault(_unionBy);
	
	var _rReportalBase = __webpack_require__(72);
	
	var _rReportalBase2 = _interopRequireDefault(_rReportalBase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function DSAbstraction(options) {
	    var DS = new _rHitlistDatasource2.default();
	    var component = options.component;
	    var config = void 0;
	    var query = _rReportalBase2.default.locationDeserialize().query;
	
	    setupDataListener(options.config);
	
	    /**
	     * Launches listener for `Y.Global.reportcontroller:viewModeDataUpdate` event within YUI which is triggered every time the filter panel updates or on initial load
	     * */
	    function setupDataListener(configName) {
	        if (Y && Y.Global) {
	            Y.Global.on("reportcontroller:viewModeDataUpdate", function (filterInfo) {
	                initialiseConfig(configName);
	                if (DS && config) {
	                    DS.modifier = filterInfo; // filter information as a modifier for data fetch
	                    DS.initialDataLoad().then(processData).catch(handleDataLoadingError);
	                }
	            });
	        } else {
	            throw new Error('YUI is not defined or accessible, cannot set up a "reportcontroller:viewModeDataUpdate" listener');
	        }
	    }
	
	    function initialiseConfig(configName) {
	        if (!config) {
	            if (!window[configName]) {
	                throw new Error('config is not passed from backend');
	            }
	            config = window[configName];
	            if (config.individualRecords && typeof config.individualRecords === 'string') {
	                config.individualRecords = config.individualRecords.split(',').map(function (item) {
	                    return item.trim();
	                });
	            }
	            component.setState({ config: config });
	        }
	    }
	
	    function processData(data) {
	        var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'replace';
	
	        var newData = data.map(function (dataRow, rowIndex) {
	            var parsedRow = {};
	            var ir = config.individualRecords || [];
	            var dataFields = ['id', 'title', 'description', 'video', 'audio', 'image'].concat(ir);
	            dataFields.forEach(function (key) {
	                var columnID = config[key];
	                parsedRow[key] = prepareData(dataRow[columnID || key], key);
	                // if image - we might want to use a placeholder as the thumb, and load the full image in background
	                if (key === 'image') {
	                    if (parsedRow.image) {
	                        if (options.thumbsPlaceholder) {
	                            parsedRow.placeholder = parsedRow.image;
	                        }
	                        parsedRow.image = parsedRow.image.replace(/_thumb/gi, '');
	                    }
	                }
	                // calculate mediatype or a placeholder icon
	                if (!parsedRow.mediatype && ['video', 'audio', 'image'].indexOf(key) > -1 && config[key] && parsedRow[key]) {
	                    parsedRow.mediatype = key;
	                }
	            });
	
	            // get id for keys
	            parsedRow.id = dataRow.responseid ? dataRow.responseid : rowIndex;
	            // calculate link passed as `slink` property in data
	            if (dataRow.slink) {
	                var l = dataRow.slink;
	                parsedRow.link = /href='(.+?)'/gi.exec(l).pop();
	            }
	            return parsedRow;
	        });
	
	        //update state with the new set of data or a merged data
	        if (mode === 'replace') {
	            component.setState({
	                items: newData,
	                error: false
	            });
	        } else if (mode === 'append') {
	            component.setState(function (prevState) {
	                return {
	                    items: [].concat(_toConsumableArray(prevState.items), _toConsumableArray(newData)),
	                    error: false
	                };
	            });
	        } else if (mode === 'merge') {
	            console.log(mode);
	            component.setState(function (prevState) {
	                return {
	                    items: (0, _unionBy2.default)(newData, prevState.items, 'id'),
	                    error: false
	                };
	            });
	        } else {
	            console.log('хрен знает что');
	        }
	    }
	
	    /**
	     * massage data to fit the type we expect to receive in react view
	     * */
	    function prepareData(data, type) {
	        console.log('prepareData', data, type);
	        switch (type) {
	            case 'image':
	                var result = /src='(.+?)'/gi.exec(data);
	                return result != null && result[1] ? result[1] : undefined;
	            case 'description':
	            case 'title':
	                return !(data.indexOf('-') > -1 && data.trim().length === 1) ? data.trim() : undefined;
	            case 'video':
	            case 'audio':
	                return !(data.indexOf('-') > -1 && data.trim().length === 1) ? generateMediaLink(data.trim(), type) : undefined;
	            case 'tags':
	                return data && (data.indexOf(',') > -1 ? data.split(',') : data.indexOf('-') > -1 && data.trim().length === 1 ? undefined : data.trim());
	            default:
	                return data;
	        }
	    }
	
	    function generateMediaLink(fileName, type) {
	        console.log('generateMediaLink', fileName, type);
	        var dsName = config.surveyID;
	        return "/reportal/Wysiwyg/Report/" + query.reportid + "/" + dsName + "/" + type + "/" + fileName;
	    }
	
	    function handleDataLoadingError(err) {
	        console.log(err);
	        component.setState({
	            error: true,
	            items: []
	        });
	    };
	
	    DS.loadNextPage = function () {
	        return DS.nextPage().then(processData).catch(handleDataLoadingError);
	    };
	
	    DS.loadPreviousPage = function () {
	        return DS.previousPage().then(processData).catch(handleDataLoadingError);
	    };
	
	    DS.loadMore = function () {
	        return DS.nextPage().then(function (response) {
	            return processData(response, 'append');
	        }).catch(handleDataLoadingError);
	    };
	
	    DS.initialLoad = function () {
	        return DS.initialDataLoad().then(processData).catch(handleDataLoadingError);
	    };
	
	    DS.getPageInfo = function () {
	        var hasPageInfo = DS.pageInfo && DS.sortingPagingValues && DS.sortingPagingValues.totalHits;
	        return hasPageInfo ? DS.pageInfo + " of " + DS.sortingPagingValues.totalHits : '';
	    };
	
	    DS.config = function () {
	        return config != null ? config : initialiseConfig(options.config);
	    };
	
	    return DS;
	}
	module.exports = exports["default"];

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var freeGlobal = __webpack_require__(118);
	
	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsNative = __webpack_require__(150),
	    getValue = __webpack_require__(174);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}
	
	module.exports = isObjectLike;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(89);
	
	/** Built-in value references. */
	var _Symbol = root.Symbol;
	
	module.exports = _Symbol;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(93),
	    getRawTag = __webpack_require__(171),
	    objectToString = __webpack_require__(199);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	    if (value == null) {
	        return value === undefined ? undefinedTag : nullTag;
	    }
	    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	
	module.exports = baseGetTag;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var listCacheClear = __webpack_require__(185),
	    listCacheDelete = __webpack_require__(186),
	    listCacheGet = __webpack_require__(187),
	    listCacheHas = __webpack_require__(188),
	    listCacheSet = __webpack_require__(189);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	    var index = -1,
	        length = entries == null ? 0 : entries.length;
	
	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var eq = __webpack_require__(123);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isKeyable = __webpack_require__(182);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}
	
	module.exports = getMapData;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(91);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isSymbol = __webpack_require__(108);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}
	
	module.exports = toKey;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(91),
	    root = __webpack_require__(89);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var mapCacheClear = __webpack_require__(190),
	    mapCacheDelete = __webpack_require__(191),
	    mapCacheGet = __webpack_require__(192),
	    mapCacheHas = __webpack_require__(193),
	    mapCacheSet = __webpack_require__(194);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	    var index = -1,
	        length = entries == null ? 0 : entries.length;
	
	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var isArray = __webpack_require__(90),
	    isSymbol = __webpack_require__(108);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}
	
	module.exports = isKey;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function (value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsArguments = __webpack_require__(146),
	    isObjectLike = __webpack_require__(92);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function () {
	    return arguments;
	}()) ? baseIsArguments : function (value) {
	    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	'use strict';
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var baseGetTag = __webpack_require__(94),
	    isObjectLike = __webpack_require__(92);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
	}
	
	module.exports = isSymbol;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(91),
	    root = __webpack_require__(89);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var MapCache = __webpack_require__(101),
	    setCacheAdd = __webpack_require__(202),
	    setCacheHas = __webpack_require__(203);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	    var index = -1,
	        length = values == null ? 0 : values.length;
	
	    this.__data__ = new MapCache();
	    while (++index < length) {
	        this.add(values[index]);
	    }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(95),
	    stackClear = __webpack_require__(206),
	    stackDelete = __webpack_require__(207),
	    stackGet = __webpack_require__(208),
	    stackHas = __webpack_require__(209),
	    stackSet = __webpack_require__(210);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var castPath = __webpack_require__(116),
	    toKey = __webpack_require__(99);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return index && index == length ? object : undefined;
	}
	
	module.exports = baseGet;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqualDeep = __webpack_require__(147),
	    isObjectLike = __webpack_require__(92);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	
	module.exports = baseIsEqual;

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArray = __webpack_require__(90),
	    isKey = __webpack_require__(102),
	    stringToPath = __webpack_require__(212),
	    toString = __webpack_require__(223);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	
	module.exports = castPath;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var SetCache = __webpack_require__(110),
	    arraySome = __webpack_require__(140),
	    cacheHas = __webpack_require__(115);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function (othValue, othIndex) {
	        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	          return seen.push(othIndex);
	        }
	      })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 119 */
/***/ (function(module, exports) {

	'use strict';
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(107);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;

/***/ }),
/* 121 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function (object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
	  };
	}
	
	module.exports = matchesStrictComparable;

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	'use strict';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return func + '';
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;

/***/ }),
/* 123 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}
	
	module.exports = eq;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(126),
	    isLength = __webpack_require__(106);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var root = __webpack_require__(89),
	    stubFalse = __webpack_require__(222);
	
	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(94),
	    isObject = __webpack_require__(107);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	    if (!isObject(value)) {
	        return false;
	    }
	    // The use of `Object#toString` avoids issues with the `typeof` operator
	    // in Safari 9 which returns 'object' for typed arrays and other constructors.
	    var tag = baseGetTag(value);
	    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsTypedArray = __webpack_require__(151),
	    baseUnary = __webpack_require__(162),
	    nodeUtil = __webpack_require__(198);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayLikeKeys = __webpack_require__(138),
	    baseKeys = __webpack_require__(153),
	    isArrayLike = __webpack_require__(124);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(91),
	    root = __webpack_require__(89);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var hashClear = __webpack_require__(176),
	    hashDelete = __webpack_require__(177),
	    hashGet = __webpack_require__(178),
	    hashHas = __webpack_require__(179),
	    hashSet = __webpack_require__(180);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	    var index = -1,
	        length = entries == null ? 0 : entries.length;
	
	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(91),
	    root = __webpack_require__(89);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(89);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(91),
	    root = __webpack_require__(89);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;

/***/ }),
/* 134 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0:
	      return func.call(thisArg);
	    case 1:
	      return func.call(thisArg, args[0]);
	    case 2:
	      return func.call(thisArg, args[0], args[1]);
	    case 3:
	      return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;

/***/ }),
/* 135 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIndexOf = __webpack_require__(145);
	
	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}
	
	module.exports = arrayIncludes;

/***/ }),
/* 137 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arrayIncludesWith;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseTimes = __webpack_require__(160),
	    isArguments = __webpack_require__(105),
	    isArray = __webpack_require__(90),
	    isBuffer = __webpack_require__(125),
	    isIndex = __webpack_require__(119),
	    isTypedArray = __webpack_require__(127);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
	    // Safari 9 has enumerable `arguments.length` in strict mode.
	    key == 'length' ||
	    // Node.js 0.10 has enumerable non-index properties on buffers.
	    isBuff && (key == 'offset' || key == 'parent') ||
	    // PhantomJS 2 has enumerable non-index properties on typed arrays.
	    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
	    // Skip index properties.
	    isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;

/***/ }),
/* 139 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while (fromRight ? index-- : ++index < length) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseFindIndex;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayPush = __webpack_require__(112),
	    isFlattenable = __webpack_require__(181);
	
	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;
	
	  predicate || (predicate = isFlattenable);
	  result || (result = []);
	
	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayPush = __webpack_require__(112),
	    isArray = __webpack_require__(90);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;

/***/ }),
/* 144 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseFindIndex = __webpack_require__(141),
	    baseIsNaN = __webpack_require__(149),
	    strictIndexOf = __webpack_require__(211);
	
	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
	}
	
	module.exports = baseIndexOf;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(94),
	    isObjectLike = __webpack_require__(92);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stack = __webpack_require__(111),
	    equalArrays = __webpack_require__(117),
	    equalByTag = __webpack_require__(167),
	    equalObjects = __webpack_require__(168),
	    getTag = __webpack_require__(173),
	    isArray = __webpack_require__(90),
	    isBuffer = __webpack_require__(125),
	    isTypedArray = __webpack_require__(127);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);
	
	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;
	
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack());
	    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack());
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack());
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	
	module.exports = baseIsEqualDeep;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stack = __webpack_require__(111),
	    baseIsEqual = __webpack_require__(114);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack();
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}
	
	module.exports = baseIsNaN;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(126),
	    isMasked = __webpack_require__(183),
	    isObject = __webpack_require__(107),
	    toSource = __webpack_require__(122);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(94),
	    isLength = __webpack_require__(106),
	    isObjectLike = __webpack_require__(92);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var baseMatches = __webpack_require__(154),
	    baseMatchesProperty = __webpack_require__(155),
	    identity = __webpack_require__(104),
	    isArray = __webpack_require__(90),
	    property = __webpack_require__(220);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
	    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isPrototype = __webpack_require__(184),
	    nativeKeys = __webpack_require__(197);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsMatch = __webpack_require__(148),
	    getMatchData = __webpack_require__(170),
	    matchesStrictComparable = __webpack_require__(121);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function (object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqual = __webpack_require__(114),
	    get = __webpack_require__(214),
	    hasIn = __webpack_require__(215),
	    isKey = __webpack_require__(102),
	    isStrictComparable = __webpack_require__(120),
	    matchesStrictComparable = __webpack_require__(121),
	    toKey = __webpack_require__(99);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function (object) {
	    var objValue = get(object, path);
	    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;

/***/ }),
/* 156 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(113);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function (object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var identity = __webpack_require__(104),
	    overRest = __webpack_require__(201),
	    setToString = __webpack_require__(204);
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}
	
	module.exports = baseRest;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var constant = __webpack_require__(213),
	    defineProperty = __webpack_require__(166),
	    identity = __webpack_require__(104);
	
	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function (func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};
	
	module.exports = baseSetToString;

/***/ }),
/* 160 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(93),
	    arrayMap = __webpack_require__(139),
	    isArray = __webpack_require__(90),
	    isSymbol = __webpack_require__(108);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}
	
	module.exports = baseToString;

/***/ }),
/* 162 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function (value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var SetCache = __webpack_require__(110),
	    arrayIncludes = __webpack_require__(136),
	    arrayIncludesWith = __webpack_require__(137),
	    cacheHas = __webpack_require__(115),
	    createSet = __webpack_require__(165),
	    setToArray = __webpack_require__(103);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;
	
	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  } else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache();
	  } else {
	    seen = iteratee ? [] : result;
	  }
	  outer: while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;
	
	    value = comparator || value !== 0 ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    } else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseUniq;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(89);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Set = __webpack_require__(109),
	    noop = __webpack_require__(219),
	    setToArray = __webpack_require__(103);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Creates a set object of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function (values) {
	  return new Set(values);
	};
	
	module.exports = createSet;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(91);
	
	var defineProperty = function () {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}();
	
	module.exports = defineProperty;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(93),
	    Uint8Array = __webpack_require__(132),
	    eq = __webpack_require__(123),
	    equalArrays = __webpack_require__(117),
	    mapToArray = __webpack_require__(195),
	    setToArray = __webpack_require__(103);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == other + '';
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getAllKeys = __webpack_require__(169);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetAllKeys = __webpack_require__(143),
	    getSymbols = __webpack_require__(172),
	    keys = __webpack_require__(128);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isStrictComparable = __webpack_require__(120),
	    keys = __webpack_require__(128);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	    var result = keys(object),
	        length = result.length;
	
	    while (length--) {
	        var key = result[length],
	            value = object[key];
	
	        result[length] = [key, value, isStrictComparable(value)];
	    }
	    return result;
	}
	
	module.exports = getMatchData;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(93);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayFilter = __webpack_require__(135),
	    stubArray = __webpack_require__(221);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function (symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	module.exports = getSymbols;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var DataView = __webpack_require__(129),
	    Map = __webpack_require__(100),
	    Promise = __webpack_require__(131),
	    Set = __webpack_require__(109),
	    WeakMap = __webpack_require__(133),
	    baseGetTag = __webpack_require__(94),
	    toSource = __webpack_require__(122);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
	    getTag = function getTag(value) {
	        var result = baseGetTag(value),
	            Ctor = result == objectTag ? value.constructor : undefined,
	            ctorString = Ctor ? toSource(Ctor) : '';
	
	        if (ctorString) {
	            switch (ctorString) {
	                case dataViewCtorString:
	                    return dataViewTag;
	                case mapCtorString:
	                    return mapTag;
	                case promiseCtorString:
	                    return promiseTag;
	                case setCtorString:
	                    return setTag;
	                case weakMapCtorString:
	                    return weakMapTag;
	            }
	        }
	        return result;
	    };
	}
	
	module.exports = getTag;

/***/ }),
/* 174 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var castPath = __webpack_require__(116),
	    isArguments = __webpack_require__(105),
	    isArray = __webpack_require__(90),
	    isIndex = __webpack_require__(119),
	    isLength = __webpack_require__(106),
	    toKey = __webpack_require__(99);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      result = false;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
	}
	
	module.exports = hasPath;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(98);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;

/***/ }),
/* 177 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(98);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(98);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(98);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(93),
	    isArguments = __webpack_require__(105),
	    isArray = __webpack_require__(90);
	
	/** Built-in value references. */
	var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;
	
	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
	}
	
	module.exports = isFlattenable;

/***/ }),
/* 182 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}
	
	module.exports = isKeyable;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var coreJsData = __webpack_require__(164);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}
	
	module.exports = isMasked;

/***/ }),
/* 184 */
/***/ (function(module, exports) {

	'use strict';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;

/***/ }),
/* 185 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(96);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(96);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(96);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(96);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Hash = __webpack_require__(130),
	    ListCache = __webpack_require__(95),
	    Map = __webpack_require__(100);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash(),
	    'map': new (Map || ListCache)(),
	    'string': new Hash()
	  };
	}
	
	module.exports = mapCacheClear;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(97);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(97);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(97);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(97);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;

/***/ }),
/* 195 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function (value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var memoize = __webpack_require__(218);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function (key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var overArg = __webpack_require__(200);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var freeGlobal = __webpack_require__(118);
	
	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = function () {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}();
	
	module.exports = nodeUtil;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),
/* 199 */
/***/ (function(module, exports) {

	"use strict";
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;

/***/ }),
/* 200 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var apply = __webpack_require__(134);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
	  return function () {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = overRest;

/***/ }),
/* 202 */
/***/ (function(module, exports) {

	'use strict';
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;

/***/ }),
/* 203 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseSetToString = __webpack_require__(159),
	    shortOut = __webpack_require__(205);
	
	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);
	
	module.exports = setToString;

/***/ }),
/* 205 */
/***/ (function(module, exports) {

	"use strict";
	
	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;
	
	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;
	
	  return function () {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);
	
	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}
	
	module.exports = shortOut;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(95);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache();
	  this.size = 0;
	}
	
	module.exports = stackClear;

/***/ }),
/* 207 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;

/***/ }),
/* 208 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;

/***/ }),
/* 209 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(95),
	    Map = __webpack_require__(100),
	    MapCache = __webpack_require__(101);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;

/***/ }),
/* 211 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = strictIndexOf;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var memoizeCapped = __webpack_require__(196);
	
	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function (string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function (match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
	  });
	  return result;
	});
	
	module.exports = stringToPath;

/***/ }),
/* 213 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function () {
	    return value;
	  };
	}
	
	module.exports = constant;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(113);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseHasIn = __webpack_require__(144),
	    hasPath = __webpack_require__(175);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArrayLike = __webpack_require__(124),
	    isObjectLike = __webpack_require__(92);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;

/***/ }),
/* 217 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array == null ? 0 : array.length;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var MapCache = __webpack_require__(101);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function memoized() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache)();
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;

/***/ }),
/* 219 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}
	
	module.exports = noop;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseProperty = __webpack_require__(156),
	    basePropertyDeep = __webpack_require__(157),
	    isKey = __webpack_require__(102),
	    toKey = __webpack_require__(99);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;

/***/ }),
/* 221 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;

/***/ }),
/* 222 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseToString = __webpack_require__(161);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseFlatten = __webpack_require__(142),
	    baseIteratee = __webpack_require__(152),
	    baseRest = __webpack_require__(158),
	    baseUniq = __webpack_require__(163),
	    isArrayLikeObject = __webpack_require__(216),
	    last = __webpack_require__(217);
	
	/**
	 * This method is like `_.union` except that it accepts `iteratee` which is
	 * invoked for each element of each `arrays` to generate the criterion by
	 * which uniqueness is computed. Result values are chosen from the first
	 * array in which the value occurs. The iteratee is invoked with one argument:
	 * (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Array
	 * @param {...Array} [arrays] The arrays to inspect.
	 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	 * @returns {Array} Returns the new array of combined values.
	 * @example
	 *
	 * _.unionBy([2.1], [1.2, 2.3], Math.floor);
	 * // => [2.1, 1.2]
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	 * // => [{ 'x': 1 }, { 'x': 2 }]
	 */
	var unionBy = baseRest(function (arrays) {
	  var iteratee = last(arrays);
	  if (isArrayLikeObject(iteratee)) {
	    iteratee = undefined;
	  }
	  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), baseIteratee(iteratee, 2));
	});
	
	module.exports = unionBy;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _rReportalBase = __webpack_require__(72);
	
	var _rReportalBase2 = _interopRequireDefault(_rReportalBase);
	
	var _hitlistSetup = __webpack_require__(226);
	
	var _hitlistSetup2 = _interopRequireDefault(_hitlistSetup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by IvanP on 10.01.2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var HitlistDatasource = function (_HitlistSetup) {
	  _inherits(HitlistDatasource, _HitlistSetup);
	
	  /**
	   * This class allows to establish a connection with the HitList database and use utility methods to query and filter data provided there's a hitlist on the page
	   * @extends HitlistSetup
	   * */
	  function HitlistDatasource() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, HitlistDatasource);
	
	    var _this = _possibleConstructorReturn(this, (HitlistDatasource.__proto__ || Object.getPrototypeOf(HitlistDatasource)).call(this));
	
	    _this._searchValues = [];
	    /** @property {String} modifier - extra params added as a string from filters */
	    _this.modifier = '';
	    return _this;
	  }
	
	  /**
	   * performs initial data load
	   * @returns {Promise} Returns a promise resolved to an array of data
	   * */
	
	
	  _createClass(HitlistDatasource, [{
	    key: "initialDataLoad",
	    value: function initialDataLoad() {
	      this.data = null;
	      return this.requestResponse({ initialLoad: true });
	    }
	    /**
	     * loads next page
	     * @returns {Promise} Returns a promise resolved to an array of data
	     * */
	
	  }, {
	    key: "nextPage",
	    value: function nextPage() {
	      this._skipPage(true);
	      return this.requestResponse({ isPaging: true }, this.modifier);
	    }
	    /**
	     * loads previous page
	     * @returns {Promise} Returns a promise resolved to an array of data
	     * */
	
	  }, {
	    key: "previousPage",
	    value: function previousPage() {
	      this._skipPage(false);
	      return this.requestResponse({ isPaging: true }, this.modifier);
	    }
	
	    /**
	     * queries HitList API
	     * @param {Object} options
	     * */
	
	  }, {
	    key: "requestResponse",
	    value: function requestResponse(options) {
	      var _this2 = this;
	
	      var query = _rReportalBase2.default.locationDeserialize().query;
	      if (query && query.reportid && this.hitlistID) {
	        /*set common params*/
	        var params = {
	          PageId: this.pageID,
	          pageStateId: this.pageStateID,
	          Preview: query.preview
	        };
	
	        /*if options are passed, add options*/
	        if (options && (typeof options === "undefined" ? "undefined" : _typeof(options)) === 'object') {
	          for (var attrname in options) {
	            params[attrname] = typeof options[attrname] === 'boolean' ? options[attrname] ? '1' : '0' : options[attrname];
	          }
	        }
	
	        if (!params.search && this._searchValues.length > 0) {
	          params.search = JSON.stringify(this._searchValues);
	        }
	
	        var sortingPagingValues = this.sortingPagingValues;
	
	        if (sortingPagingValues.pagingValues != null && !isNaN(sortingPagingValues.pagingValues.pageNumber)) {
	          if (options && options.initialLoad === true) {
	            sortingPagingValues.pagingValues = null;
	          } else {
	            sortingPagingValues.pagingValues.pageNumber += sortingPagingValues.pagingValues.pagingForward ? 1 : -1;
	          }
	        }
	
	        params.sortingPagingValues = JSON.stringify(sortingPagingValues);
	
	        return _rReportalBase2.default.promiseRequest(this.serviceURL + "&" + HitlistDatasource.serializeParams(params) + (this.modifier != '' ? '&' + this.modifier : '')).then(function (response) {
	          return _this2.parseResponse(response);
	        });
	      }
	    }
	
	    /**
	     * Parses HitList API response
	     * */
	
	  }, {
	    key: "parseResponse",
	    value: function parseResponse(response) {
	      response = JSON.parse(response);
	
	      this.sortingPagingValues = response.sortingPagingValues;
	      this.data = response.data;
	      this.pageInfo = response.pageInfo;
	      return this.data;
	    }
	
	    /**
	     * @param {Boolean} pagingForward if `true` goes forward, if `null` goes backward
	     * @param {!Function} callback
	     * */
	
	  }, {
	    key: "_skipPage",
	    value: function _skipPage(pagingForward) {
	      var _spv = _extends({}, this.sortingPagingValues);
	      var pv = _extends({}, _spv.pagingValues) || {};
	      pv.pagingForward = pagingForward; /*if forward is needed then pass true, else null - backward*/
	      pv.startId = pagingForward ? pv.lastStartId : pv.firstStartId;
	      pv.startValue = pagingForward ? pv.lastStartValue : pv.firstStartValue;
	      this.sortingPagingValues = _extends({}, this.sortingPagingValues, {
	        pagingValues: pv
	      });
	    }
	
	    /**
	     * serialize params into a query string
	     * @param {Object} params - an object with parameters
	     * */
	
	  }], [{
	    key: "serializeParams",
	    value: function serializeParams(params) {
	      var query = [];
	      for (var key in params) {
	        query.push([key, params[key]].join('='));
	      }
	      return query.join('&');
	    }
	  }]);
	
	  return HitlistDatasource;
	}(_hitlistSetup2.default);
	
	exports.default = HitlistDatasource;
	module.exports = exports["default"];

/***/ }),
/* 226 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by IvanP on 10.01.2017.
	 */
	
	var HitlistSetup = function () {
	  function HitlistSetup() {
	    _classCallCheck(this, HitlistSetup);
	
	    //fix for window.location origin, thanx IE
	    if (!window.location.origin) {
	      window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
	    }
	
	    this._config = HitlistSetup.getOriginalConfig();
	    this._elementType = window.HitListElementType;
	    this._op = window.SearchableListOperator;
	  }
	
	  /**
	   * This method allows getting a localised string in the language of the report from Hitlist config.
	   *
	   * @param {String} key - the key to look the property up
	   *
	   * * `stoe`:"Smaller than or equal",
	   * * `gtoe`:"Greater than or equal",
	   * * `between`:"Between",
	   * * `before`:"Before",
	   * * `after`:"After",
	   * * `exactly`:"Exactly",
	   * * `showdefaultcols`:"Show default columns",
	   * * `apply`:"Apply",
	   * * `cancel`:"Cancel",
	   * * `showhide`:"Show / Hide columns",
	   * * `yes`:"Yes",
	   * * `no`:"No",
	   * * `loadingData`:"Loading data, please wait...","
	   * * `checkall`:"Check all",
	   * * `uncheckall`:"Uncheck all",
	   * * `errorLoading`:"Error loading data",
	   * * `errorNoColumns`:"No columns selected"
	   * * `REPORT_SINGLEVIEW_RESPONDENTOVERVIEW`:"Respondent overview",
	   * * `REPORT_SINGLEVIEW_PRINT`:"Print the current respondent",
	   * * `REPORT_SINGLEVIEW_CLOSE`:"Close this overlay",
	   * * `REPORT_SINGLEVIEW_FILTER`:"Filter questions",
	   * * `REPORT_SINGLEVIEW_NOTHINGFOUND`:"No questions match your search",
	   * * `REPORT_SINGLEVIEW_PREVIOUS`:"Previous",
	   * * `REPORT_SINGLEVIEW_PREVIOUSHINT`:"Previous respondent",
	   * * `REPORT_SINGLEVIEW_NEXT`:"Next",
	   * * `REPORT_SINGLEVIEW_NEXTHINT`:"Next respondent",
	   * * `REPORT_SINGLEVIEW_OF`:"{0} of {1}",
	   * * `REPORT_SINGLEVIEW_MORE`:"{0} more",
	   * * REPORT_SINGLEVIEW_ALTERNATIVES`:"Answers alternatives:"
	   *
	   * @returns {String}
	   * */
	
	
	  _createClass(HitlistSetup, [{
	    key: 'i18n',
	    value: function i18n(key) {
	      return this._config.captions.hasOwnProperty(key) ? this._config.captions[key] : this._config.singleViewTexts.hasOwnProperty(key) ? this._config.singleViewTexts[key] : null;
	    }
	  }, {
	    key: 'data',
	    get: function get() {
	      return this._config.hitlistData;
	    },
	    set: function set(data) {
	      this._config.hitlistData = data;
	    }
	  }, {
	    key: 'disableNextButton',
	    get: function get() {
	      return this.sortingPagingValues.disableNextButton || false;
	    }
	  }, {
	    key: 'disablePrevButton',
	    get: function get() {
	      return this.sortingPagingValues.disablePrevButton || false;
	    }
	
	    /**
	     * Returns an array of currently visible HitList columns of Object type: `{key:String, label:String, Sortable:Boolean, hiddenByDefault:Boolean, abbr:String,allowHTML:Boolean, alternativeStyle:String, contentStyle:String, headerStyle:String}`
	     * @returns {Array.<{key:String, label:String, Sortable:Boolean, hiddenByDefault:Boolean, abbr:String,allowHTML:Boolean, alternativeStyle:String, contentStyle:String, headerStyle:String}>} Returns an array of currently visible HitList columns
	     * */
	
	  }, {
	    key: 'columns',
	    get: function get() {
	      return this._config.columns;
	    }
	
	    /**
	     * Returns an array of all HitList columns of Object type: `{key:String, label:String, Sortable:Boolean, hiddenByDefault:Boolean, abbr:String,allowHTML:Boolean, alternativeStyle:String, contentStyle:String, headerStyle:String}`
	     * @returns {Array}
	     * */
	
	  }, {
	    key: 'allColumns',
	    get: function get() {
	      return this._config.allColumns;
	    }
	  }, {
	    key: 'hitlistID',
	    get: function get() {
	      return this._config.componentId;
	    }
	  }, {
	    key: 'pageID',
	    get: function get() {
	      return this._config.pageId;
	    }
	  }, {
	    key: 'language',
	    get: function get() {
	      return this._config.language;
	    }
	  }, {
	    key: 'serviceURL',
	    get: function get() {
	      return '' + window.location.origin + this._config.serviceUrl;
	    }
	  }, {
	    key: 'pageStateID',
	    get: function get() {
	      return document.querySelector('#PageStateId') ? document.querySelector('#PageStateId').value : undefined;
	    }
	  }, {
	    key: 'sortingPagingValues',
	    get: function get() {
	      return this._config.sortingPagingValues != null ? this._config.sortingPagingValues : {};
	    },
	    set: function set(val) {
	      this._config.sortingPagingValues = val;
	    }
	  }], [{
	    key: '_fixJsonDate',
	    value: function _fixJsonDate(jsonDate) {
	      if (!(jsonDate && Y && Y.Lang.isFunction(jsonDate.replace))) {
	        return jsonDate;
	      }
	      var constr = jsonDate.replace(new RegExp("^/Date\\(([-+]?\\d+)\\)/$"), "new Date($1)");
	      if (constr == jsonDate) {
	        return jsonDate;
	      }
	      return eval(constr);
	    }
	
	    /**
	     * Extracts the config for a HitList if it's initialised on the page
	     * ```
	     * {
	     *  allColumns:Array,
	     *  captions:Object,
	     *  clientId:String,
	     *  columns:Array,
	     *  componentId:String,
	     *  hashedProjectId:String,
	     *  hitlistData:Array,
	     *  language:Number,
	     *  nextText:String,
	     *  noInitialLoad:Boolean,
	     *  pageAjaxEnabled:Boolean,
	     *  pageId:String,
	     *  prevText:String,
	     *  preview:Boolean,
	     *  searchItems:Array,
	     *  searchValues:Array,
	     *  serviceUrl:String,
	     *  serviceUrlMetaData:String,
	     *  showSingleViewOnRowSelect:Boolean,
	     *  singleViewApiUrl:String,
	     *  singleViewFormsChunkApiUrl:String,
	     *  singleViewTexts:Object,
	     *  sortingPagingValues:Object,
	     *  styles:Object,
	     *  version:String
	     * }
	     * ```
	     *
	     * */
	
	  }, {
	    key: 'getOriginalConfig',
	    value: function getOriginalConfig() {
	      var scripts = document.querySelectorAll('script');
	      if (scripts) {
	        var i = scripts.length,
	            cfg = /(Y\.Reportal\.HitList,)\s(.*?)\);/gi;
	        while (i--) {
	          var script = scripts[i].text;
	          if (script.indexOf('Y.Reportal.HitList,') > -1) {
	            var exec = cfg.exec(script);
	            return exec != null && exec[2] ? JSON.parse(exec[2]) : null;
	          }
	        }
	      } else {
	        throw new Error('Hitlist config is not present on the page');
	      }
	    }
	  }]);
	
	  return HitlistSetup;
	}();
	
	exports.default = HitlistSetup;
	module.exports = exports['default'];

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _hitlistDatasource = __webpack_require__(225);
	
	var _hitlistDatasource2 = _interopRequireDefault(_hitlistDatasource);
	
	var _rReportalBase = __webpack_require__(72);
	
	var _rReportalBase2 = _interopRequireDefault(_rReportalBase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by IvanP on 07.09.2016.
	 */
	
	window.Reportal = window.Reportal || {};
	_rReportalBase2.default.mixin(window.Reportal, {
	  HitlistDatasource: _hitlistDatasource2.default
	});
	exports.default = _hitlistDatasource2.default;
	module.exports = exports["default"];

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTY0NjIzNWVlOWQ3MjAxMTY1NzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L01ESWNvbi9kaXN0L01ESWNvbi5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9kaXN0L1Byb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vci1yZXBvcnRhbC1iYXNlL3NyYy9yZXBvcnRhbC1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWRUaWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWN0VmlkZW8vTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RWaWRlby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2luZ2xlVmlldy9OYXZCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmdsZVZpZXcvUmVzcG9uc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9TaW5nbGVWaWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvRFNBYnN0cmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlRmxhdHRlbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jcmVhdGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNQYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzRmxhdHRlbmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2hvcnRPdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdHJpY3RJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZ2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9ub29wLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdW5pb25CeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LWRhdGFzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1zZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbImxhdW5jaFZpZGVvSGl0bGlzdCIsImNvbmZpZ05hbWUiLCJ0aHVtYnNQbGFjZWhvbGRlciIsIkVycm9yIiwiVHlwZUVycm9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXBvcnRhbCIsIm1peGluIiwic3RvcmUiLCJyZXF1aXJlIiwidWlkIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJnbG9iYWwiLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwiaXNPYmplY3QiLCJpdCIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsImtleSIsInZhbHVlIiwiZiIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJhRnVuY3Rpb24iLCJmbiIsInRoYXQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJiIiwiYyIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJPIiwiUCIsIkF0dHJpYnV0ZXMiLCJlIiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiZGVmIiwiaGFzIiwiVEFHIiwidGFnIiwic3RhdCIsInByb3RvdHlwZSIsImNvbmZpZ3VyYWJsZSIsInNoYXJlZCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiSU9iamVjdCIsImRlZmluZWQiLCJjb2YiLCJBUkciLCJ0cnlHZXQiLCJUIiwiQiIsImNhbGxlZSIsInNwbGl0IiwiY3R4IiwiaGlkZSIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiRiIsIklTX0dMT0JBTCIsIkciLCJJU19TVEFUSUMiLCJTIiwiSVNfUFJPVE8iLCJJU19CSU5EIiwiSVNfV1JBUCIsIlciLCJleHBQcm90byIsInRhcmdldCIsIm93biIsIm91dCIsIkMiLCJ2aXJ0dWFsIiwiUiIsIlUiLCJleGVjIiwiZG9jdW1lbnRFbGVtZW50IiwiTElCUkFSWSIsInJlZGVmaW5lIiwiSXRlcmF0b3JzIiwiJGl0ZXJDcmVhdGUiLCJzZXRUb1N0cmluZ1RhZyIsImdldFByb3RvdHlwZU9mIiwiSVRFUkFUT1IiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiQmFzZSIsIk5BTUUiLCJDb25zdHJ1Y3RvciIsIm5leHQiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInByb3RvIiwidmFsdWVzIiwiZW50cmllcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwibWV0aG9kcyIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiUHJvbWlzZUNhcGFiaWxpdHkiLCJyZXNvbHZlIiwicmVqZWN0IiwicHJvbWlzZSIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiU0hBUkVEIiwiaW52b2tlIiwiaHRtbCIsImNlbCIsInByb2Nlc3MiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImlkIiwibGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJhcmdzIiwiaSIsInB1c2giLCJuZXh0VGljayIsIm5vdyIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsInNldCIsImNsZWFyIiwidG9JbnRlZ2VyIiwibWluIiwicHgiLCJyYW5kb20iLCJjb25jYXQiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwidCIsInIiLCJyZWFjdCIsIm8iLCJuIiwibG9hZGVkIiwibSIsInAiLCJkZWZhdWx0IiwiTURJY29uIiwiX19lc01vZHVsZSIsIlJlZmVyZW5jZUVycm9yIiwidSIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJsIiwicHJvcHMiLCJmaWxsIiwic2l6ZSIsImljb24iLCJjb25zb2xlIiwibG9nIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicyIsImFzc2lnbiIsIl9pbWFnZU9ubG9hZCIsImJpbmQiLCJfaW1hZ2VPbmVycm9yIiwic3RhdGUiLCJzcmMiLCJwbGFjZWhvbGRlckhpZGRlbiIsInBsYWNlaG9sZGVyIiwic2l6aW5nIiwicG9zaXRpb24iLCJwcm9wb3J0aW9uIiwibG9hZGluZyIsImVycm9yIiwiX2xvYWQiLCJfY29tcHV0ZURpbWVuc2lvbnMiLCJfY29tcHV0ZVByb3BvcnRpb24iLCJhc3BlY3QiLCJzZXRTdGF0ZSIsImluZGV4T2YiLCJtYXAiLCJwYXJzZUZsb2F0Iiwic3Vic3RyaW5nIiwiZCIsInByZWxvYWQiLCJmYWRlIiwiaCIsInBsYWNlaG9sZGVyU2l6aW5nIiwiZyIsImFsdCIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInJvbGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJkaXNwbGF5Iiwib25Mb2FkIiwib25FcnJvciIsIl9yZXNldCIsInByZXZlbnRMb2FkIiwiQ29tcG9uZW50IiwiUHJvbWlzZSIsImZvcmJpZGRlbkZpZWxkIiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpbmRleCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyYWJsZSIsIml0ZXJGbiIsInN0ZXAiLCJpdGVyYXRvciIsInJlc3VsdCIsImRvbmUiLCJ1biIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiQXJyYXlQcm90byIsIkFycmF5IiwicmV0IiwiZGVzY3JpcHRvciIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIml0ZXIiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwidGhlbiIsInRhc2siLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50IiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsImdldEtleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImFycmF5SW5kZXhPZiIsIm5hbWVzIiwiJGtleXMiLCJ2IiwibmV3UHJvbWlzZUNhcGFiaWxpdHkiLCJ4IiwicHJvbWlzZUNhcGFiaWxpdHkiLCJERVNDUklQVE9SUyIsIlNQRUNJRVMiLCJLRVkiLCJEIiwiVE9fU1RSSU5HIiwicG9zIiwiU3RyaW5nIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsIm1heCIsInZhbCIsInZhbHVlT2YiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJhZGRUb1Vuc2NvcGFibGVzIiwiaXRlcmF0ZWQiLCJfdCIsIl9pIiwiX2siLCJBcmd1bWVudHMiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJtaWNyb3Rhc2siLCJuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSIsInBlcmZvcm0iLCJwcm9taXNlUmVzb2x2ZSIsIlBST01JU0UiLCIkUHJvbWlzZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJPd25Qcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJzYW1lQ29uc3RydWN0b3IiLCJpc1RoZW5hYmxlIiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsIm9uVW5oYW5kbGVkIiwidW5oYW5kbGVkIiwiaXNVbmhhbmRsZWQiLCJlbWl0Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJyZWFzb24iLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJ3cmFwcGVyIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJjYXBhYmlsaXR5IiwiYWxsIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCIkYXQiLCJwb2ludCIsIlRPX1NUUklOR19UQUciLCJET01JdGVyYWJsZXMiLCJDb2xsZWN0aW9uIiwiUmVwb3J0YWxCYXNlIiwibGV2ZWwiLCJpc0FycmF5IiwiX2xvZ2dlciIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50Iiwic3RyIiwicmVwbGFjZSIsIlVSTCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZW5kIiwidmFyaWFibGUiLCJxdWVyeSIsImxvY2F0aW9uIiwic2VhcmNoIiwidmFycyIsInBhaXIiLCJ0b0xvd2VyQ2FzZSIsInBhdGgiLCJvcmlnaW4iLCJwYXRobmFtZSIsImZvckVhY2giLCJhUGFpciIsImpvaW4iLCJNRURJQV9UWVBFUyIsIkltYWdlR3JpZFRpbGUiLCJhY3Rpb25CdXR0b24iLCJhY3Rpb25JY29uIiwiYWN0aW9uSWNvbkNsaWNrIiwib25TZWxlY3QiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJfY29tcHV0ZVRpbGVUeXBlIiwibWVkaWF0eXBlIiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJpY29uU2VydmVyIiwiZXNjYXBlIiwiaWNvbnMiLCJhdWRpbyIsInZpZGVvIiwidW5rbm93biIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwibnVtYmVyIiwiZnVuYyIsIkltYWdlR3JpZCIsIml0ZW1DbGlja0hhbmRsZXIiLCJpdGVtIiwiZWRpdEl0ZW0iLCJpdGVtcyIsImR1bW15SXRlbXMiLCJyZW5kZXJEdW1teUl0ZW1zIiwiY291bnQiLCJhcnJheSIsImVsZW1lbnQiLCJpc1JlcXVpcmVkIiwiTmF2aWdhdGlvbiIsImNvbmZpZyIsInBhZ2luYXRpb24iLCJjb250aW51b3VzTmF2aWdhdGlvbiIsInBhZ2luZ05hdmlnYXRpb24iLCJsb2FkTW9yZSIsImRpc2FibGVOZXh0QnV0dG9uIiwidGV4dEFsaWduIiwibG9hZFByZXZpb3VzUGFnZSIsImxvYWROZXh0UGFnZSIsImRpc2FibGVQcmV2QnV0dG9uIiwicGFnZUluZm8iLCJ0cmFuc2xhdGUiLCJSZWFjdFZpZGVvIiwiRFMiLCJjb21wb25lbnQiLCJzaW5nbGVWaWV3TW9kZSIsInNpbmdsZVZpZXciLCJsaW5rIiwic2luZ2xlVmlld1Zpc2libGUiLCJzaW5nbGVWaWV3RGlzYWJsZVByZXYiLCJzaW5nbGVWaWV3RGlzYWJsZU5leHQiLCJpMThuIiwicmV0dXJuVG9HcmlkIiwibG9hZFByZXZpb3VzSXRlbSIsIm5hdmlnYXRlSXRlbXMiLCJsb2FkTmV4dEl0ZW0iLCJnZXRTaW5nbGVWaWV3TmF2U3RhdGUiLCJyZW5kZXJTaW5nbGVWaWV3IiwiY2FuRWRpdCIsInJlbmRlck5hdmlnYXRpb24iLCJkYXRhTG9hZGluZ01lc3NhZ2UiLCJnZXRQYWdlSW5mbyIsIm5hdmlnYXRpb25Qcm9wcyIsImluZGl2aWR1YWxSZWNvcmRzUXVlc3Rpb25JZHMiLCJpbmRpdmlkdWFsUmVjb3Jkc0tleUxhYmVscyIsInJldmVyc2UiLCJhbGxDb2x1bW5zIiwiZmlsdGVyIiwicmVjb3JkIiwibGFiZWwiLCJpcklkcyIsImNvbHVtbiIsIm1lc3NhZ2UiLCJkaXJlY3Rpb24iLCJwYWdpbmF0aW9uVHlwZSIsIml0ZW1zTGVuZ3RoIiwiY3VycmVudFNpbmdsZVZpZXdJdGVtSW5kZXgiLCJuZXh0SW5kZXgiLCJsb2FkSXRlbUZyb21QcmV2aW91c1BhZ2UiLCJsb2FkSXRlbUZyb21OZXh0UGFnZSIsInByb21pc2VkSXRlbXMiLCJzaW5nbGVWaWV3RGF0YSIsIm5ld0l0ZW1zIiwicHJldlN0YXRlIiwiYXREYXRhTGVmdEJvdW5kYXJ5Q2FuTG9hZCIsImF0RGF0YVJpZ2h0Qm91bmRhcnlDYW5Mb2FkIiwiY3VycmVudEl0ZW1JbmRleCIsImluZGl2aWR1YWxSZWNvcmRzIiwiZ2V0TGFiZWxzRm9yTWFpbkZpZWxkcyIsImdldExhYmVsc0ZvckluZGl2aWR1YWxSZWNvcmRzIiwiTmF2QnV0dG9uIiwiUmVzcG9uc2VzIiwiY29sdW1ucyIsImNvbHVtbnNNYXAiLCJtZWRpYSIsInJlc3BvbnNlRGF0ZSIsImludGVydmlld19zdGFydCIsImludGVydmlld19lbmQiLCJtZWRpYUl0ZW0iLCJxSUQiLCJOYXZCYXIiLCJyZXR1cm5Ub0dyaWRBY3Rpb24iLCJTaW5nbGVWaWV3IiwibmF2QmFyUHJvcHMiLCJpY19zdGFyIiwiaWNfc3Rhcl9ib3JkZXIiLCJpY19hcnJvd19iYWNrIiwiaWNfYXJyb3dfZm9yd2FyZCIsImljX3ZpZXdfbW9kdWxlIiwiRFNBYnN0cmFjdGlvbiIsIm9wdGlvbnMiLCJsb2NhdGlvbkRlc2VyaWFsaXplIiwic2V0dXBEYXRhTGlzdGVuZXIiLCJZIiwiR2xvYmFsIiwib24iLCJpbml0aWFsaXNlQ29uZmlnIiwibW9kaWZpZXIiLCJmaWx0ZXJJbmZvIiwiaW5pdGlhbERhdGFMb2FkIiwicHJvY2Vzc0RhdGEiLCJjYXRjaCIsImhhbmRsZURhdGFMb2FkaW5nRXJyb3IiLCJ0cmltIiwibW9kZSIsIm5ld0RhdGEiLCJkYXRhUm93Iiwicm93SW5kZXgiLCJwYXJzZWRSb3ciLCJpciIsImRhdGFGaWVsZHMiLCJjb2x1bW5JRCIsInByZXBhcmVEYXRhIiwicmVzcG9uc2VpZCIsInNsaW5rIiwicG9wIiwiZ2VuZXJhdGVNZWRpYUxpbmsiLCJmaWxlTmFtZSIsImRzTmFtZSIsInN1cnZleUlEIiwicmVwb3J0aWQiLCJuZXh0UGFnZSIsInByZXZpb3VzUGFnZSIsInJlc3BvbnNlIiwiaW5pdGlhbExvYWQiLCJoYXNQYWdlSW5mbyIsInNvcnRpbmdQYWdpbmdWYWx1ZXMiLCJ0b3RhbEhpdHMiLCJmcmVlR2xvYmFsIiwiZnJlZVNlbGYiLCJyb290IiwiYmFzZUlzTmF0aXZlIiwiZ2V0VmFsdWUiLCJnZXROYXRpdmUiLCJpc09iamVjdExpa2UiLCJnZXRSYXdUYWciLCJvYmplY3RUb1N0cmluZyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiYmFzZUdldFRhZyIsImxpc3RDYWNoZUNsZWFyIiwibGlzdENhY2hlRGVsZXRlIiwibGlzdENhY2hlR2V0IiwibGlzdENhY2hlSGFzIiwibGlzdENhY2hlU2V0IiwiTGlzdENhY2hlIiwiZW50cnkiLCJlcSIsImFzc29jSW5kZXhPZiIsImlzS2V5YWJsZSIsImdldE1hcERhdGEiLCJfX2RhdGFfXyIsIm5hdGl2ZUNyZWF0ZSIsImlzU3ltYm9sIiwiSU5GSU5JVFkiLCJ0b0tleSIsIk1hcCIsIm1hcENhY2hlQ2xlYXIiLCJtYXBDYWNoZURlbGV0ZSIsIm1hcENhY2hlR2V0IiwibWFwQ2FjaGVIYXMiLCJtYXBDYWNoZVNldCIsIk1hcENhY2hlIiwicmVJc0RlZXBQcm9wIiwicmVJc1BsYWluUHJvcCIsImlzS2V5IiwidGVzdCIsInNldFRvQXJyYXkiLCJpZGVudGl0eSIsImJhc2VJc0FyZ3VtZW50cyIsIm9iamVjdFByb3RvIiwiaXNBcmd1bWVudHMiLCJNQVhfU0FGRV9JTlRFR0VSIiwiaXNMZW5ndGgiLCJzeW1ib2xUYWciLCJTZXQiLCJzZXRDYWNoZUFkZCIsInNldENhY2hlSGFzIiwiU2V0Q2FjaGUiLCJhZGQiLCJzdGFja0NsZWFyIiwic3RhY2tEZWxldGUiLCJzdGFja0dldCIsInN0YWNrSGFzIiwic3RhY2tTZXQiLCJTdGFjayIsImFycmF5UHVzaCIsIm9mZnNldCIsImNhc3RQYXRoIiwiYmFzZUdldCIsImJhc2VJc0VxdWFsRGVlcCIsImJhc2VJc0VxdWFsIiwib3RoZXIiLCJiaXRtYXNrIiwiY3VzdG9taXplciIsInN0YWNrIiwiY2FjaGVIYXMiLCJjYWNoZSIsInN0cmluZ1RvUGF0aCIsImFycmF5U29tZSIsIkNPTVBBUkVfUEFSVElBTF9GTEFHIiwiQ09NUEFSRV9VTk9SREVSRURfRkxBRyIsImVxdWFsQXJyYXlzIiwiZXF1YWxGdW5jIiwiaXNQYXJ0aWFsIiwiYXJyTGVuZ3RoIiwib3RoTGVuZ3RoIiwic3RhY2tlZCIsInNlZW4iLCJhcnJWYWx1ZSIsIm90aFZhbHVlIiwiY29tcGFyZWQiLCJvdGhJbmRleCIsInJlSXNVaW50IiwiaXNJbmRleCIsImlzU3RyaWN0Q29tcGFyYWJsZSIsIm1hdGNoZXNTdHJpY3RDb21wYXJhYmxlIiwic3JjVmFsdWUiLCJmdW5jUHJvdG8iLCJmdW5jVG9TdHJpbmciLCJ0b1NvdXJjZSIsImlzRnVuY3Rpb24iLCJpc0FycmF5TGlrZSIsInN0dWJGYWxzZSIsImZyZWVFeHBvcnRzIiwibm9kZVR5cGUiLCJmcmVlTW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsIkJ1ZmZlciIsIm5hdGl2ZUlzQnVmZmVyIiwiaXNCdWZmZXIiLCJhc3luY1RhZyIsImZ1bmNUYWciLCJnZW5UYWciLCJwcm94eVRhZyIsImJhc2VJc1R5cGVkQXJyYXkiLCJiYXNlVW5hcnkiLCJub2RlVXRpbCIsIm5vZGVJc1R5cGVkQXJyYXkiLCJpc1R5cGVkQXJyYXkiLCJhcnJheUxpa2VLZXlzIiwiYmFzZUtleXMiLCJEYXRhVmlldyIsImhhc2hDbGVhciIsImhhc2hEZWxldGUiLCJoYXNoR2V0IiwiaGFzaEhhcyIsImhhc2hTZXQiLCJIYXNoIiwiVWludDhBcnJheSIsIldlYWtNYXAiLCJ0aGlzQXJnIiwiYXJyYXlGaWx0ZXIiLCJwcmVkaWNhdGUiLCJyZXNJbmRleCIsImJhc2VJbmRleE9mIiwiYXJyYXlJbmNsdWRlcyIsImFycmF5SW5jbHVkZXNXaXRoIiwiY29tcGFyYXRvciIsImJhc2VUaW1lcyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsImFycmF5TWFwIiwiaXRlcmF0ZWUiLCJiYXNlRmluZEluZGV4IiwiZnJvbVJpZ2h0IiwiaXNGbGF0dGVuYWJsZSIsImJhc2VGbGF0dGVuIiwiZGVwdGgiLCJpc1N0cmljdCIsImJhc2VHZXRBbGxLZXlzIiwia2V5c0Z1bmMiLCJzeW1ib2xzRnVuYyIsImJhc2VIYXNJbiIsImJhc2VJc05hTiIsInN0cmljdEluZGV4T2YiLCJhcmdzVGFnIiwiZXF1YWxCeVRhZyIsImVxdWFsT2JqZWN0cyIsImdldFRhZyIsImFycmF5VGFnIiwib2JqZWN0VGFnIiwib2JqSXNBcnIiLCJvdGhJc0FyciIsIm9ialRhZyIsIm90aFRhZyIsIm9iaklzT2JqIiwib3RoSXNPYmoiLCJpc1NhbWVUYWciLCJvYmpJc1dyYXBwZWQiLCJvdGhJc1dyYXBwZWQiLCJvYmpVbndyYXBwZWQiLCJvdGhVbndyYXBwZWQiLCJiYXNlSXNNYXRjaCIsIm1hdGNoRGF0YSIsIm5vQ3VzdG9taXplciIsIm9ialZhbHVlIiwiaXNNYXNrZWQiLCJyZVJlZ0V4cENoYXIiLCJyZUlzSG9zdEN0b3IiLCJyZUlzTmF0aXZlIiwiUmVnRXhwIiwicGF0dGVybiIsImJvb2xUYWciLCJkYXRlVGFnIiwiZXJyb3JUYWciLCJtYXBUYWciLCJudW1iZXJUYWciLCJyZWdleHBUYWciLCJzZXRUYWciLCJzdHJpbmdUYWciLCJ3ZWFrTWFwVGFnIiwiYXJyYXlCdWZmZXJUYWciLCJkYXRhVmlld1RhZyIsImZsb2F0MzJUYWciLCJmbG9hdDY0VGFnIiwiaW50OFRhZyIsImludDE2VGFnIiwiaW50MzJUYWciLCJ1aW50OFRhZyIsInVpbnQ4Q2xhbXBlZFRhZyIsInVpbnQxNlRhZyIsInVpbnQzMlRhZyIsInR5cGVkQXJyYXlUYWdzIiwiYmFzZU1hdGNoZXMiLCJiYXNlTWF0Y2hlc1Byb3BlcnR5IiwicHJvcGVydHkiLCJiYXNlSXRlcmF0ZWUiLCJpc1Byb3RvdHlwZSIsIm5hdGl2ZUtleXMiLCJnZXRNYXRjaERhdGEiLCJoYXNJbiIsImJhc2VQcm9wZXJ0eSIsImJhc2VQcm9wZXJ0eURlZXAiLCJvdmVyUmVzdCIsInNldFRvU3RyaW5nIiwiYmFzZVJlc3QiLCJzdGFydCIsImNvbnN0YW50IiwiYmFzZVNldFRvU3RyaW5nIiwic3ltYm9sUHJvdG8iLCJzeW1ib2xUb1N0cmluZyIsImJhc2VUb1N0cmluZyIsImNyZWF0ZVNldCIsIkxBUkdFX0FSUkFZX1NJWkUiLCJiYXNlVW5pcSIsImluY2x1ZGVzIiwiaXNDb21tb24iLCJvdXRlciIsImNvbXB1dGVkIiwic2VlbkluZGV4IiwiY29yZUpzRGF0YSIsIm5vb3AiLCJtYXBUb0FycmF5Iiwic3ltYm9sVmFsdWVPZiIsImJ5dGVMZW5ndGgiLCJieXRlT2Zmc2V0IiwiYnVmZmVyIiwiY29udmVydCIsImdldEFsbEtleXMiLCJvYmpQcm9wcyIsIm9iakxlbmd0aCIsIm90aFByb3BzIiwic2tpcEN0b3IiLCJvYmpDdG9yIiwib3RoQ3RvciIsImdldFN5bWJvbHMiLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsImlzT3duIiwidW5tYXNrZWQiLCJzdHViQXJyYXkiLCJuYXRpdmVHZXRTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9sIiwicHJvbWlzZVRhZyIsImRhdGFWaWV3Q3RvclN0cmluZyIsIm1hcEN0b3JTdHJpbmciLCJwcm9taXNlQ3RvclN0cmluZyIsInNldEN0b3JTdHJpbmciLCJ3ZWFrTWFwQ3RvclN0cmluZyIsIkFycmF5QnVmZmVyIiwiQ3RvciIsImN0b3JTdHJpbmciLCJoYXNQYXRoIiwiaGFzRnVuYyIsIkhBU0hfVU5ERUZJTkVEIiwic3ByZWFkYWJsZVN5bWJvbCIsImlzQ29uY2F0U3ByZWFkYWJsZSIsIm1hc2tTcmNLZXkiLCJhcnJheVByb3RvIiwic3BsaWNlIiwibGFzdEluZGV4IiwibWVtb2l6ZSIsIk1BWF9NRU1PSVpFX1NJWkUiLCJtZW1vaXplQ2FwcGVkIiwib3ZlckFyZyIsImZyZWVQcm9jZXNzIiwiYmluZGluZyIsInRyYW5zZm9ybSIsImFyZyIsIm5hdGl2ZU1heCIsIm90aGVyQXJncyIsInNob3J0T3V0IiwiSE9UX0NPVU5UIiwiSE9UX1NQQU4iLCJuYXRpdmVOb3ciLCJEYXRlIiwibGFzdENhbGxlZCIsInN0YW1wIiwicGFpcnMiLCJyZUxlYWRpbmdEb3QiLCJyZVByb3BOYW1lIiwicmVFc2NhcGVDaGFyIiwibWF0Y2giLCJxdW90ZSIsImRlZmF1bHRWYWx1ZSIsImlzQXJyYXlMaWtlT2JqZWN0IiwiRlVOQ19FUlJPUl9URVhUIiwicmVzb2x2ZXIiLCJtZW1vaXplZCIsIkNhY2hlIiwidW5pb25CeSIsImFycmF5cyIsIkhpdGxpc3REYXRhc291cmNlIiwiX3NlYXJjaFZhbHVlcyIsInJlcXVlc3RSZXNwb25zZSIsIl9za2lwUGFnZSIsImlzUGFnaW5nIiwiaGl0bGlzdElEIiwicGFyYW1zIiwiUGFnZUlkIiwicGFnZUlEIiwicGFnZVN0YXRlSWQiLCJwYWdlU3RhdGVJRCIsIlByZXZpZXciLCJwcmV2aWV3IiwiYXR0cm5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGFnaW5nVmFsdWVzIiwicGFnZU51bWJlciIsInBhZ2luZ0ZvcndhcmQiLCJwcm9taXNlUmVxdWVzdCIsInNlcnZpY2VVUkwiLCJzZXJpYWxpemVQYXJhbXMiLCJwYXJzZVJlc3BvbnNlIiwicGFyc2UiLCJfc3B2IiwicHYiLCJzdGFydElkIiwibGFzdFN0YXJ0SWQiLCJmaXJzdFN0YXJ0SWQiLCJzdGFydFZhbHVlIiwibGFzdFN0YXJ0VmFsdWUiLCJmaXJzdFN0YXJ0VmFsdWUiLCJIaXRsaXN0U2V0dXAiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwiX2NvbmZpZyIsImdldE9yaWdpbmFsQ29uZmlnIiwiX2VsZW1lbnRUeXBlIiwiSGl0TGlzdEVsZW1lbnRUeXBlIiwiX29wIiwiU2VhcmNoYWJsZUxpc3RPcGVyYXRvciIsImNhcHRpb25zIiwic2luZ2xlVmlld1RleHRzIiwiaGl0bGlzdERhdGEiLCJjb21wb25lbnRJZCIsInBhZ2VJZCIsImxhbmd1YWdlIiwic2VydmljZVVybCIsInF1ZXJ5U2VsZWN0b3IiLCJqc29uRGF0ZSIsIkxhbmciLCJjb25zdHIiLCJldmFsIiwic2NyaXB0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjZmciLCJzY3JpcHQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OytRQ3RDQTs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLQSxLQUFNQSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxVQUFELEVBQXVDO0FBQUEsT0FBM0JDLGlCQUEyQix1RUFBVCxJQUFTOztBQUNoRSxPQUFHLENBQUNELFVBQUosRUFBZTtBQUNi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QUwsQ0FBVzd6QixLQUFLLENBQUwsQ0FBWCxDQUF6QixHQUE4QyxJQUFyRDtBQUNEO0FBQ0Y7QUFDRixRQVZELE1BVU87QUFDTCxlQUFNLElBQUl4RyxLQUFKLENBQVUsMkNBQVYsQ0FBTjtBQUNEO0FBQ0Y7Ozs7OzttQkFHWTg2QixZOzs7Ozs7Ozs7Ozs7O0FDcEpmOzs7O0FBQ0E7Ozs7OztBQUxBOzs7O0FBT0E1NkIsUUFBT0ssUUFBUCxHQUFrQkwsT0FBT0ssUUFBUCxJQUFtQixFQUFyQztBQUNBLHlCQUFhQyxLQUFiLENBQW1CTixPQUFPSyxRQUExQixFQUFtQztBQUNqQ3U0QjtBQURpQyxFQUFuQyIsImZpbGUiOiJyLXJlYWN0LXZpZGVvLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE2NDYyMzVlZTlkNzIwMTE2NTc5IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTEuMDEuMjAxNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IG1haW5DU1MgZnJvbSAnLi9tYWluLmNzcyc7XHJcbmltcG9ydCBSZWFjdFZpZGVvIGZyb20gJy4vUmVhY3RWaWRlbyc7XHJcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSAnci1yZXBvcnRhbC1iYXNlJztcclxuXHJcbi8qKlxyXG4gKiBpbml0aWFsaXNlIEhpdExpc3Qgb24gRE9NQ29udGVudExvYWRlZCBmb3IgYSBxdWlja2VyIGNvbGQtc3RhcnQsIG5vIG5lZWQgdG8gd2FpdCBmb3IgdGhlIG9yaWdpbmFsIEhpdExpc3RcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZ05hbWUgLSBuYW1lIG9mIHRoZSB2YXJpYWJsZSBwYXNzZWQgdG8gRE9NIGFzIGEgY29uZmlnXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3RodW1ic1BsYWNlaG9sZGVyPXRydWVdIC0gZGlzcGxheSB0aHVtYnMgYXMgaW1hZ2UgcGxhY2Vob2xkZXJzIGluc3RlYWQgb2YgbWVkaWEgaWNvbnNcclxuICogKi9cclxuY29uc3QgbGF1bmNoVmlkZW9IaXRsaXN0ID0gKGNvbmZpZ05hbWUsdGh1bWJzUGxhY2Vob2xkZXI9dHJ1ZSkgPT4ge1xyXG4gIGlmKCFjb25maWdOYW1lKXtcclxuICAgIHRocm93IG5ldyBFcnJvcignY29uZmlnIGlzIG5vdCBzcGVjaWZpZWQhJylcclxuICB9IGVsc2UgaWYoY29uZmlnTmFtZSAmJiB0eXBlb2YgY29uZmlnTmFtZSAhPSAnc3RyaW5nJyl7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBjb25maWcgbmFtZSBtdXN0IGJlIGEgc3RyaW5nLCBub3QgYSAke3R5cGVvZiBjb25maWdOYW1lfWApXHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcclxuICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgPFJlYWN0VmlkZW9cclxuICAgICAgY29uZmlnPXtjb25maWdOYW1lfVxyXG4gICAgICB0aHVtYnNQbGFjZWhvbGRlcj17dGh1bWJzUGxhY2Vob2xkZXJ9XHJcbiAgICAgIHZlcmJvc2VcclxuICAgICAgLz4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcclxuICB9KTtcclxufTtcclxuXHJcbndpbmRvdy5SZXBvcnRhbCA9IHdpbmRvdy5SZXBvcnRhbCB8fCB7fTtcclxuUmVwb3J0YWxCYXNlLm1peGluKHdpbmRvdy5SZXBvcnRhbCx7XHJcbiAgbGF1bmNoVmlkZW9IaXRsaXN0XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjAnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dChyZXF1aXJlKFwicmVhY3RcIikpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXCJyZWFjdFwiXSx0KTtlbHNle3ZhciByPXQoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/cmVxdWlyZShcInJlYWN0XCIpOmUucmVhY3QpO2Zvcih2YXIgbyBpbiByKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW29dPXJbb119fSh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KG8pe2lmKHJbb10pcmV0dXJuIHJbb10uZXhwb3J0czt2YXIgbj1yW29dPXtleHBvcnRzOnt9LGlkOm8sbG9hZGVkOiExfTtyZXR1cm4gZVtvXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyx0KSxuLmxvYWRlZD0hMCxuLmV4cG9ydHN9dmFyIHI9e307cmV0dXJuIHQubT1lLHQuYz1yLHQucD1cIlwiLHQoMCl9KFtmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89cigxKTt0LmRlZmF1bHQ9by5NREljb24sZS5leHBvcnRzPXQuZGVmYXVsdH0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fWZ1bmN0aW9uIG4oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGkoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiB1KGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5NREljb249dm9pZCAwO3ZhciBjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbz10W3JdO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQscixvKXtyZXR1cm4gciYmZSh0LnByb3RvdHlwZSxyKSxvJiZlKHQsbyksdH19KCksZj1yKDIpLGw9byhmKSxhPXQuTURJY29uPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXtyZXR1cm4gbih0aGlzLHQpLGkodGhpcywodC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuYXBwbHkodGhpcyxhcmd1bWVudHMpKX1yZXR1cm4gdSh0LGUpLGModCxbe2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wcm9wcyx0PWUuZmlsbCxyPWUuc2l6ZSxvPWUuaWNvbixuPWUuY2hpbGRyZW47cmV0dXJuIGNvbnNvbGUubG9nKHQscixvLG4pLGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3htbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixmaWxsOnQsd2lkdGg6cixoZWlnaHQ6cix2aWV3Qm94OlwiMCAwIDI0IDI0XCIsY2hpbGRyZW46b3x8bn0pfX1dKSx0fShmLlB1cmVDb21wb25lbnQpO2EuZGVmYXVsdFByb3BzPXtzaXplOjI0LGZpbGw6XCJyZ2JhKDAsMCwwLC44NSlcIn19LGZ1bmN0aW9uKHQscil7dC5leHBvcnRzPWV9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1ESWNvbi5idW5kbGUuanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9NREljb24vZGlzdC9NREljb24uYnVuZGxlLmpzIiwiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dChyZXF1aXJlKFwicmVhY3RcIikpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXCJyZWFjdFwiXSx0KTtlbHNle3ZhciBvPXQoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/cmVxdWlyZShcInJlYWN0XCIpOmUucmVhY3QpO2Zvcih2YXIgciBpbiBvKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW3JdPW9bcl19fSh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKG9bcl0pcmV0dXJuIG9bcl0uZXhwb3J0czt2YXIgbj1vW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gZVtyXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyx0KSxuLmxvYWRlZD0hMCxuLmV4cG9ydHN9dmFyIG89e307cmV0dXJuIHQubT1lLHQuYz1vLHQucD1cIlwiLHQoMCl9KFtmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gaShlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fWZ1bmN0aW9uIGEoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbz1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG8pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8scikmJihlW3JdPW9bcl0pfXJldHVybiBlfSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKXt2YXIgcj10W29dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsbyxyKXtyZXR1cm4gbyYmZSh0LnByb3RvdHlwZSxvKSxyJiZlKHQsciksdH19KCkscD1vKDEpLHU9cihwKSxjPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSl7bih0aGlzLHQpO3ZhciBvPWkodGhpcywodC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLGUpKTtyZXR1cm4gby5faW1hZ2VPbmxvYWQ9by5faW1hZ2VPbmxvYWQuYmluZChvKSxvLl9pbWFnZU9uZXJyb3I9by5faW1hZ2VPbmVycm9yLmJpbmQobyksby5zdGF0ZT17c3JjOnZvaWQgMCxwbGFjZWhvbGRlckhpZGRlbjohby5wcm9wcy5wbGFjZWhvbGRlcixzaXppbmc6by5wcm9wcy5zaXppbmc/by5wcm9wcy5zaXppbmc6bnVsbCxwb3NpdGlvbjpvLnByb3BzLnBvc2l0aW9uP28ucHJvcHMucG9zaXRpb246XCJjZW50ZXJcIixwcm9wb3J0aW9uOjAsbG9hZGVkOiExLGxvYWRpbmc6ITEsZXJyb3I6ITF9LG99cmV0dXJuIGEodCxlKSxsKHQsW3trZXk6XCJjb21wb25lbnREaWRNb3VudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5fbG9hZCgpLHRoaXMuX2NvbXB1dGVEaW1lbnNpb25zKCksdGhpcy5fY29tcHV0ZVByb3BvcnRpb24odGhpcy5wcm9wcy5hc3BlY3QpfX0se2tleTpcIl9jb21wdXRlRGltZW5zaW9uc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wcm9wcyx0PWUud2lkdGgsbz1lLmhlaWdodDt0aGlzLnNldFN0YXRlKHt3aWR0aDppc05hTih0KT90OnQrXCJweFwiLGhlaWdodDppc05hTihvKT9vOm8rXCJweFwifSl9fSx7a2V5OlwiX2NvbXB1dGVQcm9wb3J0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZSYmZS5pbmRleE9mKFwiOlwiKT4tMSl7dmFyIHQ9ZS5zcGxpdChcIjpcIikubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBwYXJzZUZsb2F0KGUpfSk7aXNOYU4odFswXSl8fGlzTmFOKHRbMV0pfHx0aGlzLnNldFN0YXRlKGZ1bmN0aW9uKGUpe2lmKCFpc05hTihwYXJzZUZsb2F0KGUud2lkdGgpKSlyZXR1cm57cHJvcG9ydGlvbjoocGFyc2VGbG9hdChlLndpZHRoKSoodFsxXS90WzBdKSkudG9TdHJpbmcoKStlLndpZHRoLnN1YnN0cmluZyhwYXJzZUZsb2F0KGUud2lkdGgpLnRvU3RyaW5nKCkubGVuZ3RoKSxoZWlnaHQ6XCJhdXRvXCJ9fSl9fX0se2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zdGF0ZSx0PWUud2lkdGgsbz1lLmhlaWdodCxyPWUucHJvcG9ydGlvbixuPWUuc3JjLGk9ZS5zaXppbmcsYT1lLnBvc2l0aW9uLHM9ZS5sb2FkaW5nLGw9ZS5sb2FkZWQscD1lLnBsYWNlaG9sZGVySGlkZGVuLGM9dGhpcy5wcm9wcyxkPWMucHJlbG9hZCxmPWMuZmFkZSxoPWMucGxhY2Vob2xkZXJTaXppbmcsZz1jLnBsYWNlaG9sZGVyLG09Yy5hbHQ7cmV0dXJuIHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIlByb3BvcnRpb25hbEltYWdlXCIsc3R5bGU6e3dpZHRoOnQsaGVpZ2h0Om8scGFkZGluZ1RvcDpyfX0sdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwic2l6ZWRJbWdEaXZcIixyb2xlOlwiaW1nXCIsc3R5bGU6e2JhY2tncm91bmRJbWFnZTpuP1widXJsKFwiK24rXCIpXCI6dm9pZCAwLGJhY2tncm91bmRTaXplOmksYmFja2dyb3VuZFBvc2l0aW9uOmEsYmFja2dyb3VuZFJlcGVhdDppP1wibm8tcmVwZWF0XCI6XCJpbml0aWFsXCIsZGlzcGxheTppP1wiYmxvY2tcIjpcIm5vbmVcIn19KSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzcmM6bixhbHQ6bSxvbkxvYWQ6dGhpcy5faW1hZ2VPbmxvYWQsb25FcnJvcjp0aGlzLl9pbWFnZU9uZXJyb3Isc3R5bGU6e2Rpc3BsYXk6aT9cIm5vbmVcIjpcImJsb2NrXCJ9fSksdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6e2JhY2tncm91bmRJbWFnZTpnP1widXJsKFwiK2crXCIpXCI6dm9pZCAwLGJhY2tncm91bmRTaXplOmg/aDppLGJhY2tncm91bmRQb3NpdGlvbjphLGJhY2tncm91bmRSZXBlYXQ6aT9cIm5vLXJlcGVhdFwiOlwiaW5pdGlhbFwifSxjbGFzc05hbWU6XCJpbWFnZVBsYWNlaG9sZGVyIFwiKyhwJiZcImhpZGRlblwiKStcIiBcIisoZCYmZiYmIXMmJmwmJlwiZmFkZWQtb3V0XCIpfSkpfX0se2tleTpcIl9pbWFnZU9ubG9hZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXRTdGF0ZSh7bG9hZGluZzohMSxsb2FkZWQ6ITAsZXJyb3I6ITF9KX19LHtrZXk6XCJfaW1hZ2VPbmVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNldFN0YXRlKHMoe30sdGhpcy5fcmVzZXQoKSx7ZXJyb3I6ITB9KSl9fSx7a2V5OlwiX3Jlc2V0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm57c3JjOnZvaWQgMCxsb2FkaW5nOiExLGxvYWRlZDohMSxlcnJvcjohMX19fSx7a2V5OlwiX2xvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuX3Jlc2V0KCk7aWYoIXRoaXMucHJvcHMucHJldmVudExvYWQpe3ZhciB0PXRoaXMucHJvcHMuc3JjO2Uuc3JjIT09dCYmKGU9cyh7fSxlLHtzcmM6dD90OnZvaWQgMCxsb2FkaW5nOiEhdH0pKX10aGlzLnNldFN0YXRlKGUpfX1dKSx0fSh1LmRlZmF1bHQuQ29tcG9uZW50KTt0LmRlZmF1bHQ9Y30sZnVuY3Rpb24odCxvKXt0LmV4cG9ydHM9ZX1dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHJvcG9ydGlvbmFsSW1hZ2UuYnVuZGxlLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vUHJvcG9ydGlvbmFsSW1hZ2UvZGlzdC9Qcm9wb3J0aW9uYWxJbWFnZS5idW5kbGUuanMiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2VzNi9wcm9taXNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmIChPYnNlcnZlcikge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwidmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gTElCUkFSWSA/IGZ1bmN0aW9uIChhLCBiKSB7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufSA6IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgaWYgKHByb21pc2UuX2ggPT0gMSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2M7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlYWN0aW9uO1xuICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkge1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZiAocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpIHJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZiAoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSkgcmV0dXJuIHg7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsImltcG9ydCBQcm9taXNlIGZyb20gJ2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZSc7XG5cbmNsYXNzIFJlcG9ydGFsQmFzZSB7XG5cbiAgLyoqXG4gICAqIENvcGllcyBwcm9wcyBmcm9tIGEgc291cmNlIG9iamVjdCB0byBhIHRhcmdldCBvYmplY3QuXG4gICAqXG4gICAqIE5vdGUsIHRoaXMgbWV0aG9kIHVzZXMgYSBzaW1wbGUgYGZvci4uLmluYCBzdHJhdGVneSBmb3IgZW51bWVyYXRpbmdcbiAgICogcHJvcGVydGllcy4gIFRvIGVuc3VyZSBvbmx5IGBvd25Qcm9wZXJ0aWVzYCBhcmUgY29waWVkIGZyb20gc291cmNlXG4gICAqIHRvIHRhcmdldCBhbmQgdGhhdCBhY2Nlc3NvciBpbXBsZW1lbnRhdGlvbnMgYXJlIGNvcGllZCwgdXNlIGBleHRlbmRgLlxuICAgKlxuICAgKiBAbWV0aG9kIG1peGluXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgVGFyZ2V0IG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgU291cmNlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCBhcyBmaXJzdCBhcmd1bWVudC5cbiAgICovXG4gIHN0YXRpYyBtaXhpbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAodmFyIGkgaW4gc291cmNlKSB7XG4gICAgICB0YXJnZXRbaV0gPSBzb3VyY2VbaV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBzdGF0aWMgX2xvZ2dlcihsZXZlbCwgYXJncykge1xuICAgIC8vIGFjY2VwdCBbJ2ZvbycsICdiYXInXSBhbmQgW1snZm9vJywgJ2JhciddXVxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBhcmdzID0gYXJnc1swXTtcbiAgICB9XG4gICAgLy8gb25seSBhY2NlcHQgbG9nZ2luZyBmdW5jdGlvbnNcbiAgICBzd2l0Y2gobGV2ZWwpIHtcbiAgICAgIGNhc2UgJ2xvZyc6XG4gICAgICBjYXNlICd3YXJuJzpcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgY29uc29sZVtsZXZlbF0uYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBfbG9nKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ2xvZycsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIF93YXJuKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ3dhcm4nLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBfZXJyb3IoKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHRoaXMuX2xvZ2dlcignZXJyb3InLCBhcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmFtZWQgZXZlbnQgd2l0aCBgbmFtZWBcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJuIHtFdmVudH0gUmV0dXJucyBhIGNyZWF0ZWQgZXZlbnRcbiAgICogKi9cbiAgc3RhdGljIG5ld0V2ZW50KG5hbWUpe1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW5zcGVjdHMgaWYgdGhlIGN1cnJlbnQgc3RyaW5nIG1pZ2h0IGJlIGNvbnZlcnRlZCB0byBudW1iZXIgYW5kIHJlbmRlcnMgaXQgYXMgbnVtYmVyLiBJZiBzdHJpbmcgbGVuZ3RoIGlzIDAsIHJldHVybnMgYG51bGxgLiBJZiBub25lIGFwcGxpZXMgcmV0dXJucyB0aGUgc3RyaW5nIGFzIGlzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gdmFsdWUgb2YgdGhlIGNlbGwgaWYgbm90IEhUTUwgY29udGVudHNcbiAgICogQHJldHVybiB7TnVtYmVyfG51bGx8U3RyaW5nfVxuICAgKiAqL1xuICBzdGF0aWMgaXNOdW1iZXIoc3RyKXtcbiAgICBpZighaXNOYU4ocGFyc2VGbG9hdChzdHIpKSl7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvLC9pLCcnKTsvLyByZW1vdmUgdW5uZWNlc3NhcnkgY29tbWEgYXMgYSBkZWxpbWl0ZXIgZm9yIHRob3VzYW5kcyBmcm9tIGRhdGEuXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChzdHIpO1xuICAgIH0gZWxzZSBpZihzdHIubGVuZ3RoPT0wKXtyZXR1cm4gbnVsbH0gZWxzZSB7cmV0dXJuIHN0cn1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gWEhSIHdyYXBwZWQgaW4gYSBQcm9taXNlXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gVVJMIC0gdXJsIHRvIHNlbmQgYSBgR0VUYCByZXF1ZXN0IHRvXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJldHVybnMgYSB0aGVuLWFibGUgcHJvbWlzZSB3aXRoIGBYTUxIdHRwUmVxdWVzdC5yZXNwb25zZVRleHRgXG4gICAqICovXG4gIHN0YXRpYyBwcm9taXNlUmVxdWVzdChVUkwpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB4aHIub3BlbignR0VUJywgVVJMLCB0cnVlKTtcbiAgICAgIHhoci5vbmxvYWQgPSAoKT0+e3hoci5zdGF0dXMgPT0gMjAwP3Jlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk6cmVqZWN0KEVycm9yKGAke3hoci5zdGF0dXN9OiAke3hoci5zdGF0dXNUZXh0fWApKTt9XG4gICAgICB4aHIub25lcnJvciA9ICgpPT57cmVqZWN0KEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7fVxuICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgdmFyaWFibGUgbGlzdGVkIGluIHF1ZXJ5IHN0cmluZ1xuICAgKiBAcGFyYW0geyFTdHJpbmd9IHZhcmlhYmxlIC0gdmFyaWFibGUgbmFtZSB0byBnZXQgdmFsdWUgZm9yXG4gICAqIEBwYXJhbSB7U3RyaW5nPX0gW3F1ZXJ5PXdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpXSAtIHRoZSBxdWVyeSBzdHJpbmcgdG8gc2VhcmNoIHZhcmlhYmxlIGZvciBpblxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFJldHVybnMgdmFsdWUgZm9yIHRoZSB2YXJpYWJsZVxuICAgKiAqL1xuICBzdGF0aWMgZ2V0UXVlcnlWYXJpYWJsZSh2YXJpYWJsZSxxdWVyeT13aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSl7XG4gICAgdmFyIHZhcnMgPSBxdWVyeS5zcGxpdChcIiZcIik7XG4gICAgZm9yICh2YXIgaT0wO2k8dmFycy5sZW5ndGg7aSsrKSB7XG4gICAgICB2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgaWYoKHBhaXJbMF0pLnRvTG93ZXJDYXNlKCkgPT0gdmFyaWFibGUudG9Mb3dlckNhc2UoKSl7cmV0dXJuIHBhaXJbMV07fVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIHR1cm5zIGB3aW5kb3cubG9jYXRpb25gIG9iamVjdCBpbnRvIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhcyBuYW1lZCBrZXlzIG5lY2Vzc2FyeSB0byByZWNvbnN0cnVjdCB0aGUgVVJMXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gW2xvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uXSAtIGEgd2luZG93LmxvY2F0aW9uIG9iamVjdCwgYnkgZGVmYXVsdCBvZiB0aGUgaG9zdCB3aW5kb3cgd2hlcmUgdGhlIHNjcmlwdCBpcyBleGVjdXRlZFxuICAgKiBAcmV0dXJucyB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBhIGBsb2NhdGlvbmAgb2JqZWN0XG4gICAqICovXG4gIHN0YXRpYyBsb2NhdGlvbkRlc2VyaWFsaXplKGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uKXtcbiAgICBsZXQgbyA9IHtcbiAgICAgIHBhdGg6IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgcXVlcnk6e31cbiAgICB9O1xuICAgIGxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkuc3BsaXQoLyYvKS5mb3JFYWNoKHBhaXI9PntcbiAgICAgIGxldCBhUGFpcj0gcGFpci5zcGxpdCgvPS8pO1xuICAgICAgby5xdWVyeVthUGFpclswXS50b0xvd2VyQ2FzZSgpXSA9IGFQYWlyWzFdXG4gICAgfSk7XG4gICAgcmV0dXJuIG9cbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJucyBhIGBsb2NhdGlvbmAgb2JqZWN0IChyZXN1bHQgb2YgYGxvY2F0aW9uRGVzZXJpYWxpemVgKSBpbnRvIGEgVVJMXG4gICAqIEBwYXJhbSB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBsb2NhdGlvbiAtIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhbmQgYSB1cmxcbiAgICogQHJldHVybnMge1N0cmluZ30gLSBhIFVSTCBzdHJpbmdcbiAgICogKi9cbiAgc3RhdGljIGxvY2F0aW9uU2VyaWFsaXplKGxvY2F0aW9uKXtcbiAgICBsZXQgcXVlcnk9W107XG4gICAgZm9yKGxldCBrZXkgaW4gbG9jYXRpb24ucXVlcnkpe1xuICAgICAgcXVlcnkucHVzaChba2V5LGxvY2F0aW9uLnF1ZXJ5W2tleV1dLmpvaW4oJz0nKSk7XG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRoICsgJz8nICsgcXVlcnkuam9pbignJicpO1xuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydGFsQmFzZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLXJlcG9ydGFsLWJhc2Uvc3JjL3JlcG9ydGFsLWJhc2UuanMiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIFB1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltZyBmcm9tICdQcm9wb3J0aW9uYWxJbWFnZSc7XHJcblxyXG5jb25zdCBNRURJQV9UWVBFUyA9IFsnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nXTtcclxuXHJcbmNsYXNzIEltYWdlR3JpZFRpbGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50e1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB0aWxlIGZvciBpbWFnZSBsaXN0XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmltYWdlIC0gaW1hZ2UgdXJsXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyIC0gYSBwbGFjZWhvbGRlciBpbWFnZVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlclNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIuIEJ5IGRlZmF1bHQgaXQncyB0aGUgc2FtZSBhcyBmb3IgdGhlIGBzcmNgIGltYWdlLCBidXQgc2V0IHRvIGBpbml0aWFsYCBvciBvdGhlciB2YWxpZCBgYmFja2dyb3VuZC1zaXplYCB2YWx1ZSB0byBvdmVycmlkZS5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMubWVkaWF0eXBlIC0gYSBkZWZhdWx0IG1lZGlhIGljb24gaW5zdGVhZCBvZiB0aGUgcGxhY2Vob2xkZXIgaW1hZ2U6IG9uZSBvZiBgaW1hZ2VgLGBhdWRpb2AsYHZpZGVvYFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuaWNvbkNvbG9yPVwiI2NjY2NjY1wiXSAtIGRlZmF1bHQgcGxhY2Vob2xkZXIgbWVkaWEgaWNvbiBjb2xvclxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuaWNvblNpemU9NDhdIC0gZGVmYXVsdCBwbGFjZWhvbGRlciBtZWRpYSBpY29uIHNpemVcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmFzcGVjdD1cIjE2OjlcIl0gLSBhc3BlY3QgcmF0aW8gb2YgdGhlIGltYWdlIHRvIGJlIGluIHRoZSB0aWxlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMudGl0bGUgLSB0aXRsZSBvZiB0aGUgdmlkZW9cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuZGVzY3JpcHRpb24gLSBkZXNjcmlwdGlvbiBvZiB0aGUgdmlkZW9cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByb3BzLmFjdGlvbkljb24gLSBpY29uIHRvIGRpc3BsYXkgYXMgdGhlIGFjdGlvbiBpY29uLiBJdCBhbHNvIGhhcyB0byBoYXZlIGEgY2FsbGJhY2sgYXR0YWNoZWQgdG8gaXQgd2hlbiBwYXNzZWQuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMub25TZWxlY3QgLSBjYWxsYmFjayB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSBsaW5rIGlzIGNsaWNrZWRcclxuICAgKiAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgYWN0aW9uQnV0dG9uID0gbnVsbDtcclxuICAgIGNvbnN0IHthY3Rpb25JY29uLGFjdGlvbkljb25DbGljayxvblNlbGVjdCxhc3BlY3QsdGl0bGUscGxhY2Vob2xkZXJTaXppbmcsaW1hZ2UsZGVzY3JpcHRpb259PXRoaXMucHJvcHM7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb25JY29uKSB7XHJcbiAgICAgIGFjdGlvbkJ1dHRvbiA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWVkaXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWFjdGlvbi1pY29uIHJpcHBsZVwiIG9uQ2xpY2s9e2FjdGlvbkljb25DbGlja30+e2FjdGlvbkljb259PC9kaXY+XHJcbiAgICAgIDwvZGl2PilcclxuICAgICAgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1jb3ZlclwiIG9uQ2xpY2s9e29uU2VsZWN0fT5cclxuICAgICAgICAgIDxJbWdcclxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgYXNwZWN0PXthc3BlY3R9XHJcbiAgICAgICAgICAgIHNpemluZz1cImNvdmVyXCJcclxuICAgICAgICAgICAgcHJlbG9hZD17dHJ1ZX1cclxuICAgICAgICAgICAgZmFkZT17dHJ1ZX1cclxuICAgICAgICAgICAgYWx0PXt0aXRsZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMuX2NvbXB1dGVUaWxlVHlwZSgpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlclNpemluZz17cGxhY2Vob2xkZXJTaXppbmd9XHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1tZXRhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tdGl0bGUgZWxsaXBzaXNcIiBvbkNsaWNrPXtvblNlbGVjdH0+e3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWRlc2NyaXB0aW9uIGVsbGlwc2lzXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7YWN0aW9uQnV0dG9ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIF9jb21wdXRlVGlsZVR5cGUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7cGxhY2Vob2xkZXIsbWVkaWF0eXBlLGljb25TaXplLGljb25Db2xvcn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBpZiAoIXBsYWNlaG9sZGVyICYmIG1lZGlhdHlwZSkge1xyXG4gICAgICAgIGlmIChNRURJQV9UWVBFUy5pbmRleE9mKG1lZGlhdHlwZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCB0eXBlIFwiJHttZWRpYXR5cGV9XCIgaXMgc3BlY2lmaWVkYClcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGljb24gPSBJbWFnZUdyaWRUaWxlLmljb25TZXJ2ZXIobWVkaWF0eXBlLCBpY29uU2l6ZSwgaWNvbkNvbG9yKTtcclxuICAgICAgICByZXR1cm4gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZXNjYXBlKGljb24pO1xyXG4gICAgICB9IGVsc2UgaWYoISFwbGFjZWhvbGRlcil7XHJcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICdkYXRhOmltYWdlL3N2Zyt4bWwsJyArIGVzY2FwZShJbWFnZUdyaWRUaWxlLmljb25TZXJ2ZXIoJ3Vua25vd24nLCBpY29uU2l6ZSwgaWNvbkNvbG9yKSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBpY29uIHdpdGggYSBjb3JyZWN0IGZpbGwgY29sb3JcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIGljb24gbmFtZSAob25lIG9mIGBpbWFnZWAsIGB2aWRlb2AsIGBhdWRpb2ApXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtzaXplPTI0XSAtIGljb24gc2l6ZSBpbiBwaXhlbHNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2ZpbGw9XCIjY2NjY2NjXCJdIC0gdmFsaWQgQ1NTIGNvbG9yIGRlY2xhcmF0aW9uXHJcbiAgICogQHJldHVybnMge1N0cmluZ31cclxuICAgKiAqL1xyXG4gIHN0YXRpYyBpY29uU2VydmVyKG5hbWUsIHNpemUgPSA0OCwgZmlsbCA9IFwiI2NjY2NjY1wiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpY29ucyA9IHtcclxuICAgICAgICBpbWFnZTogYDxwYXRoIGQ9XCJNMjEgMTlWNWMwLTEuMS0uOS0yLTItMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yek04LjUgMTMuNWwyLjUgMy4wMUwxNC41IDEybDQuNSA2SDVsMy41LTQuNXpcIi8+YCxcclxuICAgICAgICBhdWRpbzogYDxwYXRoIGQ9XCJNMTIgM3YxMC41NWMtLjU5LS4zNC0xLjI3LS41NS0yLS41NS0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRWN2g0VjNoLTZ6XCIvPmAsXHJcbiAgICAgICAgdmlkZW86IGA8cGF0aCBkPVwiTTE4IDRsMiA0aC0zbC0yLTRoLTJsMiA0aC0zbC0yLTRIOGwyIDRIN0w1IDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNGgtNHpcIi8+YCxcclxuICAgICAgICB1bmtub3duOiBgPHBhdGggZD1cIk0yMSA1djYuNTlsLTMtMy4wMS00IDQuMDEtNC00LTQgNC0zLTMuMDFWNWMwLTEuMS45LTIgMi0yaDE0YzEuMSAwIDIgLjkgMiAyem0tMyA2LjQybDMgMy4wMVYxOWMwIDEuMS0uOSAyLTIgMkg1Yy0xLjEgMC0yLS45LTItMnYtNi41OGwzIDIuOTkgNC00IDQgNCA0LTMuOTl6XCIvPmAsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICghaWNvbnNbbmFtZV0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGljb24gXCIke25hbWV9XCIgaXMgbm90IG9uIHRoZSBsaXN0YClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGA8c3ZnIGZpbGw9XCIke2ZpbGx9XCIgaGVpZ2h0PVwiJHtzaXplfVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIiR7c2l6ZX1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JHtpY29uc1tuYW1lXX08L3N2Zz5gXHJcbiAgICB9IGNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkltYWdlR3JpZFRpbGUucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlICAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYWNlaG9sZGVyICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYWNlaG9sZGVyU2l6aW5nOiBQcm9wVHlwZXMub25lT2YoWydjb250YWluJywgJ2NvdmVyJywgJ2luaXRpYWwnXSksXHJcbiAgbWVkaWF0eXBlICAgICAgICA6IFByb3BUeXBlcy5vbmVPZihNRURJQV9UWVBFUyksXHJcbiAgaWNvbkNvbG9yICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaWNvblNpemUgICAgICAgICA6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgYXNwZWN0ICAgICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdGl0bGUgICAgICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZGVzY3JpcHRpb24gICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYWN0aW9uSWNvbiAgICAgICA6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uU2VsZWN0ICAgICAgICAgOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG5cclxuSW1hZ2VHcmlkVGlsZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaWNvbkNvbG9yOiBcIiNjY2NjY2NcIixcclxuICBpY29uU2l6ZSA6IDQ4LFxyXG4gIGFzcGVjdCAgIDogXCIxNjo5XCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUdyaWRUaWxlXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbWFnZUdyaWRUaWxlL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzLCBQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZUdyaWRUaWxlIGZyb20gJy4uL0ltYWdlR3JpZFRpbGUnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBgSW1hZ2VHcmlkYCBpcyBhIHN0YXRlbGVzcyBSZWFjdCBjb21wb25lbnQgdGhhdCBhbGxvd3MgdG8gY29tcHV0ZSBhbiBhcnJheSBvZiBJbWFnZUdyaWRUaWxlcyBmcm9tIGBpdGVtc2AgcGFzc2VkIGluIHByb3BzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcy5pdGVtcyAtIGFuIGFycmF5IG9mIGl0ZW1zIGB7aWQ6TnVtYmVyfFN0cmluZywgaW1hZ2U6U3RyaW5nLCBtZWRpYXR5cGU6P1N0cmluZywgcGxhY2Vob2xkZXI6P1N0cmluZywgdGl0bGU6U3RyaW5nLGRlc2NyaXB0aW9uOlN0cmluZ31gXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5hc3BlY3QgLSBhc3BlY3QgcmF0aW8gZm9yIHRoZSBJbWFnZUdyaWRUaWxlIGltYWdlXHJcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBwcm9wcy5hY3Rpb25JY29uIC0gYWN0aW9uIGljb24gSlNYIHdpdGggYSBib3VuZCBoYW5kbGVyXHJcbiAqIEBwYXJhbSB7P1N0cmluZ30gcHJvcHMucGxhY2Vob2xkZXJTaXppbmcgLSBTZXRzIGEgc2l6aW5nIG9wdGlvbiBmb3IgdGhlIHBsYWNlaG9sZGVyLiBCeSBkZWZhdWx0IGl0J3MgdGhlIHNhbWUgYXMgZm9yIHRoZSBgc3JjYCBpbWFnZSwgYnV0IHNldCB0byBgaW5pdGlhbGAgb3Igb3RoZXIgdmFsaWQgYGJhY2tncm91bmQtc2l6ZWAgdmFsdWUgdG8gb3ZlcnJpZGUuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLm9uU2VsZWN0IC0gZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZCBvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gcHJvcHMuZHVtbXlJdGVtcyAtIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhbiBpdGVtIGlzIGNsaWNrZWQgb25cclxuICogKi9cclxuY2xhc3MgSW1hZ2VHcmlkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcblxyXG4gIGl0ZW1DbGlja0hhbmRsZXIgPSAoaXRlbSkgPT4gKGV2ZW50KSA9PiB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW0pO1xyXG4gIGVkaXRJdGVtID0gaXRlbT0+IHRoaXMucHJvcHMuYWN0aW9uSWNvbkNsaWNrKGl0ZW0pXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2l0ZW1zLCBkdW1teUl0ZW1zLCBhc3BlY3QsIHBsYWNlaG9sZGVyU2l6aW5nLCBhY3Rpb25JY29ufSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFwiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCA+IDAgJiYgaXRlbXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VHcmlkVGlsZVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgIGFzcGVjdD17YXNwZWN0fVxyXG4gICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgIG1lZGlhdHlwZT17aXRlbS5tZWRpYXR5cGV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2l0ZW0ucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJTaXppbmc9e2l0ZW0uaW1hZ2U/cGxhY2Vob2xkZXJTaXppbmc6J2luaXRpYWwnfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIGFjdGlvbkljb249e3R5cGVvZiBhY3Rpb25JY29uPT09J2Z1bmN0aW9uJz9hY3Rpb25JY29uKGl0ZW0pOm51bGx9XHJcbiAgICAgICAgICAgICAgYWN0aW9uSWNvbkNsaWNrPXt0aGlzLmVkaXRJdGVtKGl0ZW0pfVxyXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLml0ZW1DbGlja0hhbmRsZXIoaXRlbSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICB7ZHVtbXlJdGVtcyAmJiB0aGlzLnJlbmRlckR1bW15SXRlbXMoZHVtbXlJdGVtcyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlckR1bW15SXRlbXMoY291bnQpIHtcclxuICAgIGNvbnN0IGR1bW15SXRlbXMgPSBbXTtcclxuICAgIHdoaWxlIChjb3VudC0tKSB7XHJcbiAgICAgIGR1bW15SXRlbXMucHVzaCg8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGVcIiBrZXk9e2BkdW1teSR7Y291bnR9YH0vPilcclxuICAgIH1cclxuICAgIHJldHVybiBkdW1teUl0ZW1zXHJcbiAgfVxyXG59XHJcblxyXG5JbWFnZUdyaWQucHJvcFR5cGVzID0ge1xyXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgYXNwZWN0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGFjdGlvbkljb246IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gIGFjdGlvbkljb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgcGxhY2Vob2xkZXJTaXppbmc6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgZHVtbXlJdGVtczogUHJvcFR5cGVzLm51bWJlclxyXG59O1xyXG5cclxuSW1hZ2VHcmlkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkdW1teUl0ZW1zOiAxMlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHcmlkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VHcmlkL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYgKGNvbmZpZykge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gY29uZmlnLnBhZ2luYXRpb247XHJcbiAgICAgICAgICAgIGlmIChwYWdpbmF0aW9uID09PSAnY29udGludW91cycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRpbnVvdXNOYXZpZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdpbmdOYXZpZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb250aW51b3VzTmF2aWdhdGlvbigpIHtcclxuICAgICAgICBjb25zdCB7IGxvYWRNb3JlLCBkaXNhYmxlTmV4dEJ1dHRvbiB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblJvd1wiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsQnV0dG9uIGZsYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvYWRNb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlTmV4dEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgID5Mb2FkIG1vcmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBwYWdpbmdOYXZpZ2F0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbG9hZFByZXZpb3VzUGFnZSxcclxuICAgICAgICAgICAgbG9hZE5leHRQYWdlLFxyXG4gICAgICAgICAgICBkaXNhYmxlTmV4dEJ1dHRvbixcclxuICAgICAgICAgICAgZGlzYWJsZVByZXZCdXR0b24sXHJcbiAgICAgICAgICAgIHBhZ2VJbmZvLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVcclxuICAgICAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Sb3dcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gYWNjZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2FkUHJldmlvdXNQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlUHJldkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VUycpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBhY2NlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvYWROZXh0UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZU5leHRCdXR0b259XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnUkVQT1JUX1NJTkdMRVZJRVdfTkVYVCcpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3BhZ2VJbmZvfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFjdFZpZGVvL05hdmlnYXRpb24uanMiLCIvL0BmbG93XHJcbmltcG9ydCB0eXBlIHtTdGF0ZSwgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VHcmlkIGZyb20gXCIuLi9JbWFnZUdyaWRcIjtcclxuaW1wb3J0IFNpbmdsZVZpZXcgZnJvbSBcIi4uL1NpbmdsZVZpZXdcIjtcclxuaW1wb3J0IERTQWJzdHJhY3Rpb24gZnJvbSAnLi4vRFNBYnN0cmFjdGlvbidcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgU2luZ2xlVmlld1Jlc3BvbnNlcyBmcm9tICcuLi9TaW5nbGVWaWV3L1Jlc3BvbnNlcydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFZpZGVvIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIERTID0gRFNBYnN0cmFjdGlvbih7XHJcbiAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLFxyXG4gICAgdGh1bWJzUGxhY2Vob2xkZXI6IHRoaXMucHJvcHMudGh1bWJzUGxhY2Vob2xkZXIsXHJcbiAgICBjb21wb25lbnQ6IHRoaXNcclxuICB9KTtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpdGVtczogbnVsbCxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICAgIGNvbmZpZzogbnVsbCxcclxuICAgIHNpbmdsZVZpZXdNb2RlOiAndmlldycsXHJcbiAgICBzaW5nbGVWaWV3OiB7XHJcbiAgICAgIGxpbms6ICcnXHJcbiAgICB9LFxyXG4gICAgc2luZ2xlVmlld1Zpc2libGU6IGZhbHNlLFxyXG4gICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2OiBmYWxzZSxcclxuICAgIHNpbmdsZVZpZXdEaXNhYmxlTmV4dDogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgdHJhbnNsYXRlID0gdGhpcy5EUy5pMThuLmJpbmQodGhpcy5EUyk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXRlbXMsIHNpbmdsZVZpZXdWaXNpYmxlLCBlcnJvciwgY29uZmlnIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IHJlbmRlciA9IG51bGw7XHJcbiAgICBpZiAoIWVycm9yICYmIEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICByZW5kZXIgPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BHcmlkQ29udGFpbmVyICR7IXNpbmdsZVZpZXdWaXNpYmxlID8gJ0dyaWRWaWV3JyA6ICcnfWB9PlxyXG4gICAgICAgICAge3RoaXMucmVuZGVyU2luZ2xlVmlldygpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRDb250YWluZXJcIiBzdHlsZT17eyBkaXNwbGF5OiAhc2luZ2xlVmlld1Zpc2libGUgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2VHcmlkXHJcbiAgICAgICAgICAgICAgYXNwZWN0PVwiMTY6OVwiXHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25TZWxlY3R9XHJcbiAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxyXG4gICAgICAgICAgICAgIGFjdGlvbkljb249e2NvbmZpZy5jYW5FZGl0ID8gdGhpcy5hY3Rpb25JY29uIDogbnVsbH1cclxuICAgICAgICAgICAgICBhY3Rpb25JY29uQ2xpY2s9e3RoaXMuYWN0aW9uSWNvbkNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJOYXZpZ2F0aW9uKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuRFMpIHtcclxuICAgICAgICByZW5kZXIgPSAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdyaWRDb250YWluZXIgSW1hZ2VHcmlkXCI+e3RoaXMuZGF0YUxvYWRpbmdNZXNzYWdlKCl9PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSGl0bGlzdERhdGFzb3VyY2UgaXMgbm90IGF2YWlsYWJsZScpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZW5kZXJcclxuICB9XHJcblxyXG4gIHJlbmRlck5hdmlnYXRpb24oKSB7XHJcbiAgICBjb25zdCB7IGxvYWRQcmV2aW91c1BhZ2UsIGxvYWROZXh0UGFnZSwgbG9hZE1vcmUsIGRpc2FibGVOZXh0QnV0dG9uLCBkaXNhYmxlUHJldkJ1dHRvbiwgZ2V0UGFnZUluZm8gfSA9IHRoaXMuRFM7XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uUHJvcHMgPSB7XHJcbiAgICAgIGxvYWRQcmV2aW91c1BhZ2UsXHJcbiAgICAgIGxvYWROZXh0UGFnZSxcclxuICAgICAgbG9hZE1vcmUsXHJcbiAgICAgIGRpc2FibGVOZXh0QnV0dG9uLFxyXG4gICAgICBkaXNhYmxlUHJldkJ1dHRvbixcclxuICAgICAgcGFnZUluZm86IGdldFBhZ2VJbmZvKCksXHJcbiAgICAgIGNvbmZpZzogdGhpcy5zdGF0ZS5jb25maWcsXHJcbiAgICAgIHRyYW5zbGF0ZTogdGhpcy50cmFuc2xhdGVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPE5hdmlnYXRpb24gey4uLm5hdmlnYXRpb25Qcm9wc30gLz5cclxuICB9XHJcblxyXG4gIHJlbmRlclNpbmdsZVZpZXcoKSB7XHJcbiAgICBjb25zdCB7IHNpbmdsZVZpZXdWaXNpYmxlLCBzaW5nbGVWaWV3LCBzaW5nbGVWaWV3RGlzYWJsZVByZXYsIHNpbmdsZVZpZXdEaXNhYmxlTmV4dCwgc2luZ2xlVmlld01vZGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gc2luZ2xlVmlld1Zpc2libGUgPyAoXHJcbiAgICAgIDxTaW5nbGVWaWV3XHJcbiAgICAgICAgcmV0dXJuVG9HcmlkQWN0aW9uPXt0aGlzLnJldHVyblRvR3JpZH1cclxuICAgICAgICBsb2FkUHJldmlvdXNJdGVtPXt0aGlzLmxvYWRQcmV2aW91c0l0ZW19XHJcbiAgICAgICAgbG9hZE5leHRJdGVtPXt0aGlzLmxvYWROZXh0SXRlbX1cclxuICAgICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXY9e3NpbmdsZVZpZXdEaXNhYmxlUHJldn1cclxuICAgICAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHQ9e3NpbmdsZVZpZXdEaXNhYmxlTmV4dH1cclxuICAgICAgPlxyXG4gICAgICAgIHtzaW5nbGVWaWV3TW9kZSA9PT0gJ2VkaXQnID9cclxuICAgICAgICAgICg8aWZyYW1lIGNsYXNzTmFtZT1cInJlbmRlckFyZWFcIiBzcmM9e3NpbmdsZVZpZXcubGlua30gLz4pXHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICAoPFNpbmdsZVZpZXdSZXNwb25zZXMgZGF0YT17c2luZ2xlVmlld30gY29sdW1ucz17dGhpcy5pbmRpdmlkdWFsUmVjb3Jkc1F1ZXN0aW9uSWRzfSBjb2x1bW5zTWFwPXt0aGlzLmluZGl2aWR1YWxSZWNvcmRzS2V5TGFiZWxzfSAvPilcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2luZ2xlVmlldz5cclxuICAgICkgOiBudWxsXHJcbiAgfVxyXG5cclxuICBnZXQgaW5kaXZpZHVhbFJlY29yZHNRdWVzdGlvbklkcygpIHtcclxuICAgIGNvbnN0IHsgaW5kaXZpZHVhbFJlY29yZHMgfSA9IHRoaXMuRFMuY29uZmlnKCk7XHJcbiAgICByZXR1cm4gaW5kaXZpZHVhbFJlY29yZHMgIT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KGluZGl2aWR1YWxSZWNvcmRzKSA/IGluZGl2aWR1YWxSZWNvcmRzIDogW11cclxuICB9XHJcblxyXG4gIGdldCBpbmRpdmlkdWFsUmVjb3Jkc0tleUxhYmVscygpIHtcclxuICAgIHJldHVybiB7IC4uLnRoaXMuZ2V0TGFiZWxzRm9yTWFpbkZpZWxkcygpLCAuLi50aGlzLmdldExhYmVsc0ZvckluZGl2aWR1YWxSZWNvcmRzKCkgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWxzRm9yTWFpbkZpZWxkcygpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuRFMuY29uZmlnKCk7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nXS5yZXZlcnNlKCkuZm9yRWFjaChrZXkgPT5cclxuICAgICAgbWFwW2tleV0gPSB0aGlzLkRTLmFsbENvbHVtbnMuZmlsdGVyKHJlY29yZCA9PlxyXG4gICAgICAgIHJlY29yZC5rZXkgPT09IGNvbmZpZ1trZXldXHJcbiAgICAgIClbMF0ubGFiZWxcclxuICAgIClcclxuICAgIHJldHVybiBtYXA7XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbHNGb3JJbmRpdmlkdWFsUmVjb3JkcygpIHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgY29uc3QgaXJJZHMgPSB0aGlzLmluZGl2aWR1YWxSZWNvcmRzUXVlc3Rpb25JZHM7XHJcbiAgICB0aGlzLkRTLmFsbENvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoaXJJZHMuaW5kZXhPZihjb2x1bW4ua2V5KSA+IC0xKSB7XHJcbiAgICAgICAgbWFwW2NvbHVtbi5rZXldID0gY29sdW1uLmxhYmVsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbWFwO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBkYXRhTG9hZGluZ01lc3NhZ2UoKSB7XHJcbiAgICBsZXQgbWVzc2FnZTtcclxuICAgIGNvbnN0IHsgaXRlbXMsIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIG1lc3NhZ2UgPSAnZXJyb3JMb2FkaW5nJ1xyXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgbWVzc2FnZSA9ICdSRVBPUlRfU0lOR0xFVklFV19OT1RISU5HRk9VTkQnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlID0gJ2xvYWRpbmdEYXRhJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuRFMuaTE4bihtZXNzYWdlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuVG9HcmlkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgc2luZ2xlVmlldzoge1xyXG4gICAgICAgIGxpbms6ICcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGxvYWRQcmV2aW91c0l0ZW0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZUl0ZW1zKCdiYWNrJylcclxuICB9XHJcblxyXG4gIGxvYWROZXh0SXRlbSA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlSXRlbXMoJ2ZvcndhcmQnKVxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVJdGVtcyhkaXJlY3Rpb246ICdmb3J3YXJkJyB8ICdiYWNrd2FyZCcpOiB2b2lkIHtcclxuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uVHlwZSA9IHRoaXMuc3RhdGUuY29uZmlnLnBhZ2luYXRpb247XHJcbiAgICBsZXQgaXRlbXNMZW5ndGggPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgY3VycmVudFNpbmdsZVZpZXdJdGVtSW5kZXggPSBpdGVtcy5pbmRleE9mKHRoaXMuc3RhdGUuc2luZ2xlVmlldyk7XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBkaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4ICsgMSA6IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4IC0gMTtcclxuXHJcbiAgICBjb25zdCBsb2FkSXRlbUZyb21QcmV2aW91c1BhZ2UgPSBuZXh0SW5kZXggPCAwICYmICF0aGlzLkRTLmRpc2FibGVQcmV2QnV0dG9uO1xyXG4gICAgY29uc3QgbG9hZEl0ZW1Gcm9tTmV4dFBhZ2UgPSBuZXh0SW5kZXggPiBpdGVtc0xlbmd0aCAmJiAhdGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbjtcclxuXHJcbiAgICBsZXQgcHJvbWlzZWRJdGVtcyA9IFByb21pc2UucmVzb2x2ZShpdGVtcyk7XHJcbiAgICAvLyBhc3NpZ24gaXRlbXMgdG8gdGhlbmFibGUgcHJvbWlzZXMgaWYgcmVxdWVzdGVkIGl0ZW0gaXMgb3V0c2lkZSBvZiBkYXRhIGJvdW5kYXJpZXNcclxuICAgIGlmIChsb2FkSXRlbUZyb21QcmV2aW91c1BhZ2UpIHtcclxuICAgICAgcHJvbWlzZWRJdGVtcyA9IHRoaXMuRFMubG9hZFByZXZpb3VzUGFnZSgpO1xyXG4gICAgfSBlbHNlIGlmIChsb2FkSXRlbUZyb21OZXh0UGFnZSkge1xyXG4gICAgICBwcm9taXNlZEl0ZW1zID0gcGFnaW5hdGlvblR5cGUgIT09ICdjb250aW51b3VzJyA/IHRoaXMuRFMubG9hZE5leHRQYWdlKCkgOiB0aGlzLkRTLmxvYWRNb3JlKCk7XHJcbiAgICB9XHJcbiAgICAvKiAgICAgY29uc3QgaXRlbXNBcmVQcm9taXNlZCA9ICFBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5oYXNPd25Qcm9wZXJ0eSgndGhlbicpO1xyXG4gICAgICAgIGlmICghaXRlbXNBcmVQcm9taXNlZCkge1xyXG4gICAgICAgICAgcHJvbWlzZWRJdGVtcyA9IFByb21pc2UucmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICovXHJcbiAgICBwcm9taXNlZEl0ZW1zLnRoZW4oKCkgPT4ge1xyXG4gICAgICBsZXQgc2luZ2xlVmlld0RhdGE7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgICBjb25zdCBuZXdJdGVtcyA9IHByZXZTdGF0ZS5pdGVtcztcclxuICAgICAgICBjb25zdCBhdERhdGFMZWZ0Qm91bmRhcnlDYW5Mb2FkID0gbmV4dEluZGV4IDwgMCAmJiAhcHJldlN0YXRlLnNpbmdsZVZpZXdEaXNhYmxlUHJldjtcclxuICAgICAgICBjb25zdCBhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCA9IG5leHRJbmRleCA+IGl0ZW1zTGVuZ3RoICYmICFwcmV2U3RhdGUuc2luZ2xlVmlld0Rpc2FibGVOZXh0ICYmIHBhZ2luYXRpb25UeXBlICE9PSAnY29udGludW91cyc7XHJcbiAgICAgICAgaWYgKGF0RGF0YUxlZnRCb3VuZGFyeUNhbkxvYWQpIHtcclxuICAgICAgICAgIHNpbmdsZVZpZXdEYXRhID0gbmV3SXRlbXNbbmV3SXRlbXMubGVuZ3RoIC0gMV1cclxuICAgICAgICB9IGVsc2UgaWYgKGF0RGF0YVJpZ2h0Qm91bmRhcnlDYW5Mb2FkKSB7XHJcbiAgICAgICAgICBzaW5nbGVWaWV3RGF0YSA9IG5ld0l0ZW1zWzBdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNpbmdsZVZpZXdEYXRhID0gbmV3SXRlbXNbbmV4dEluZGV4XVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnRoaXMuZ2V0U2luZ2xlVmlld05hdlN0YXRlKG5leHRJbmRleCksXHJcbiAgICAgICAgICBzaW5nbGVWaWV3OiBzaW5nbGVWaWV3RGF0YSxcclxuICAgICAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2luZ2xlVmlld05hdlN0YXRlKGN1cnJlbnRJdGVtSW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xyXG4gICAgbGV0IHNpbmdsZVZpZXdEaXNhYmxlTmV4dCA9IGZhbHNlLFxyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXYgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoY3VycmVudEl0ZW1JbmRleCA8PSAwICYmIHRoaXMuRFMuZGlzYWJsZVByZXZCdXR0b24pIHtcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50SXRlbUluZGV4ID49IGl0ZW1zLmxlbmd0aCAtIDEgJiYgdGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbikge1xyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2LFxyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0ID0gKGl0ZW0pID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLmdldFNpbmdsZVZpZXdOYXZTdGF0ZSh0aGlzLnN0YXRlLml0ZW1zLmluZGV4T2YoaXRlbSkpLFxyXG4gICAgICBzaW5nbGVWaWV3OiBpdGVtLFxyXG4gICAgICBzaW5nbGVWaWV3VmlzaWJsZTogdHJ1ZSxcclxuICAgICAgc2luZ2xlVmlld01vZGU6ICd2aWV3J1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFjdGlvbkljb24gPSAoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICA8cGF0aCBkPVwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3pcIiAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGFjdGlvbkljb25DbGljayA9IChpdGVtKSA9PiAoKSA9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgIC4uLnRoaXMuZ2V0U2luZ2xlVmlld05hdlN0YXRlKHRoaXMuc3RhdGUuaXRlbXMuaW5kZXhPZihpdGVtKSksXHJcbiAgICBzaW5nbGVWaWV3OiBpdGVtLFxyXG4gICAgc2luZ2xlVmlld1Zpc2libGU6IHRydWUsXHJcbiAgICBzaW5nbGVWaWV3TW9kZTogJ2VkaXQnXHJcbiAgfSlcclxuXHJcblxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RWaWRlby9pbmRleC5qcyIsIi8vQGZsb3dcclxuaW1wb3J0IHR5cGUge05hdkJ1dHRvblByb3BzfSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1ESWNvbiBmcm9tICdNREljb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2QnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxOYXZCdXR0b25Qcm9wcywgYW55PiB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpY29uLCAuLi53cmFwcGVyIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0tbmF2LWJ1dHRvbiByaXBwbGVcIiB7Li4ud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8TURJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2luZ2xlVmlldy9OYXZCdXR0b24uanMiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2VzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBjb2x1bW5zLCBjb2x1bW5zTWFwIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgbWVkaWEgPSBbJ2ltYWdlJywgJ3ZpZGVvJywgJ2F1ZGlvJ107XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRlID0gZGF0YS5pbnRlcnZpZXdfc3RhcnQgfHwgZGF0YS5pbnRlcnZpZXdfZW5kO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVuZGVyQXJlYSBSZXNwb25zZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEudGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLXBhZ2VUaXRsZVwiPiB7ZGF0YS50aXRsZX0gPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHshIXJlc3BvbnNlRGF0ZSAmJiA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tbGFiZWxcIj4ge3Jlc3BvbnNlRGF0ZX0gPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS12YWx1ZVwiPiB7ZGF0YS5kZXNjcmlwdGlvbn0gPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHttZWRpYS5tYXAobWVkaWFJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbWVkaWFJdGVtXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLWxhYmVsXCI+e2NvbHVtbnNNYXBbbWVkaWFJdGVtXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tdmFsdWVcIj57dGhpc1tgXyR7bWVkaWFJdGVtfVJlbmRlcmVyYF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1ucyAhPSBudWxsICYmIGNvbHVtbnMubWFwKHFJRCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW3FJRF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1sYWJlbFwiPntjb2x1bW5zTWFwW3FJRF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLXZhbHVlXCI+e2RhdGFbcUlEXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX2ltYWdlUmVuZGVyZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1tZWRpYVwiIHNyYz17dGhpcy5wcm9wcy5kYXRhLmltYWdlfSAvPlxyXG4gICAgfVxyXG4gICAgZ2V0IF92aWRlb1JlbmRlcmVyKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGEudmlkZW87XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHZpZGVvIGtleT17ZGF0YX0gY29udHJvbHMgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2RhdGF9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cclxuICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZ2V0IF9hdWRpb1JlbmRlcmVyKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGEuYXVkaW87XHJcbiAgICAgICAgcmV0dXJuIDxhdWRpbyBrZXk9e2RhdGF9IHNyYz17ZGF0YX0gdHlwZT1cImF1ZGlvL21wNFwiIGNvbnRyb2xzIGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tbWVkaWFcIiAvPlxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvUmVzcG9uc2VzLmpzIiwiLy9AZmxvd1xyXG5pbXBvcnQgdHlwZSB7UHJvcHMsIE5hdkJhclByb3BzIH0gZnJvbSAnLi90eXBlcydcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZCdXR0b24gZnJvbSAnLi9OYXZCdXR0b24nXHJcbmltcG9ydCB7IGljX2Fycm93X2JhY2ssIGljX2Fycm93X2ZvcndhcmQsIGljX3ZpZXdfbW9kdWxlIH0gZnJvbSAnLi4vaWNvbnMnO1xyXG5cclxuY29uc3QgTmF2QmFyID0gZnVuY3Rpb24gKHByb3BzOk5hdkJhclByb3BzKSB7XHJcbiAgY29uc3QgeyBsb2FkUHJldmlvdXNJdGVtLCByZXR1cm5Ub0dyaWRBY3Rpb24sIGxvYWROZXh0SXRlbSwgc2luZ2xlVmlld0Rpc2FibGVQcmV2LCBzaW5nbGVWaWV3RGlzYWJsZU5leHQgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbmdsZVZpZXctLWhlYWRlclwiPlxyXG4gICAgICA8TmF2QnV0dG9uIGRpc2FibGVkPXtzaW5nbGVWaWV3RGlzYWJsZVByZXZ9IHRpdGxlPVwiUHJldmlvdXMgaXRlbVwiIG9uQ2xpY2s9e2xvYWRQcmV2aW91c0l0ZW19IGljb249e2ljX2Fycm93X2JhY2t9IC8+XHJcbiAgICAgIDxOYXZCdXR0b24gdGl0bGU9XCJSZXR1cm4gdG8gdGhlIGxpc3RcIiBvbkNsaWNrPXtyZXR1cm5Ub0dyaWRBY3Rpb259IGljb249e2ljX3ZpZXdfbW9kdWxlfSAvPlxyXG4gICAgICA8TmF2QnV0dG9uIGRpc2FibGVkPXtzaW5nbGVWaWV3RGlzYWJsZU5leHR9IHRpdGxlPVwiTmV4dCBJdGVtXCIgb25DbGljaz17bG9hZE5leHRJdGVtfSBpY29uPXtpY19hcnJvd19mb3J3YXJkfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGVWaWV3IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgdm9pZD4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtjaGlsZHJlbiwgLi4ubmF2QmFyUHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlVmlld1wiPlxyXG4gICAgICAgIDxOYXZCYXIgey4uLm5hdkJhclByb3BzfS8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBpY19zdGFyID0gPHBhdGggZD1cIk0xMiAxNy4yN0wxOC4xOCAyMWwtMS42NC03LjAzTDIyIDkuMjRsLTcuMTktLjYxTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMXpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX3N0YXJfYm9yZGVyID0gPHBhdGggZD1cIk0yMiA5LjI0bC03LjE5LS42MkwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjEgMTIgMTcuMjcgMTguMTggMjFsLTEuNjMtNy4wM0wyMiA5LjI0ek0xMiAxNS40bC0zLjc2IDIuMjcgMS00LjI4LTMuMzItMi44OCA0LjM4LS4zOEwxMiA2LjFsMS43MSA0LjA0IDQuMzguMzgtMy4zMiAyLjg4IDEgNC4yOEwxMiAxNS40elwiLz47XG5leHBvcnQgY29uc3QgaWNfYXJyb3dfYmFjayA9IDxwYXRoIGQ9XCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHYtMnpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX2Fycm93X2ZvcndhcmQgPSA8cGF0aCBkPVwiTTEyIDRsLTEuNDEgMS40MUwxNi4xNyAxMUg0djJoMTIuMTdsLTUuNTggNS41OUwxMiAyMGw4LTh6XCIvPjtcbmV4cG9ydCBjb25zdCBpY192aWV3X21vZHVsZSA9IDxwYXRoIGQ9XCJNNCAxMWg1VjVINHY2em0wIDdoNXYtNkg0djZ6bTYgMGg1di02aC01djZ6bTYgMGg1di02aC01djZ6bS02LTdoNVY1aC01djZ6bTYtNnY2aDVWNWgtNXpcIi8+O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ljb25zLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vQGZsb3dcclxuaW1wb3J0IEhpdGxpc3REUyBmcm9tIFwici1oaXRsaXN0LWRhdGFzb3VyY2VcIjtcclxuaW1wb3J0IHVuaW9uQnkgZnJvbSBcImxvZGFzaC91bmlvbkJ5XCI7XHJcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSAnci1yZXBvcnRhbC1iYXNlJztcclxuXHJcbnR5cGUgT3B0aW9ucyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogbmFtZSBvZiBhIGdsb2JhbCBjb25maWcgdmFyaWFibGUgcGFzc2VkXHJcbiAgICAqL1xyXG4gICAgY29uZmlnOiBzdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkaXNwbGF5IHRodW1icyBhcyBpbWFnZSBwbGFjZWhvbGRlcnMgaW5zdGVhZCBvZiBtZWRpYSBpY29uc1xyXG4gICAgKi9cclxuICAgIHRodW1ic1BsYWNlaG9sZGVyOiBib29sZWFuLFxyXG4gICAgY29tcG9uZW50OiBhbnlcclxufVxyXG5cclxudHlwZSBwYXJzZWREYXRhUm93ID0ge1xyXG4gICAgaWQ6IHN0cmluZyB8IG51bWJlcixcclxuICAgIHRpdGxlPzogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcclxuICAgIGltYWdlPzogc3RyaW5nLFxyXG4gICAgbWVkaWF0eXBlOiAndmlkZW8nIHwgJ2F1ZGlvJyB8ICdpbWFnZScsXHJcbiAgICBsaW5rOiBzdHJpbmcsXHJcbiAgICBbeDpzdHJpbmddOnN0cmluZyxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERTQWJzdHJhY3Rpb24ob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgY29uc3QgRFMgPSBuZXcgSGl0bGlzdERTKCk7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSBvcHRpb25zLmNvbXBvbmVudDtcclxuICAgIGxldCBjb25maWc7XHJcbiAgICBjb25zdCBxdWVyeSA9IFJlcG9ydGFsQmFzZS5sb2NhdGlvbkRlc2VyaWFsaXplKCkucXVlcnk7XHJcblxyXG4gICAgc2V0dXBEYXRhTGlzdGVuZXIob3B0aW9ucy5jb25maWcpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGF1bmNoZXMgbGlzdGVuZXIgZm9yIGBZLkdsb2JhbC5yZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZWAgZXZlbnQgd2l0aGluIFlVSSB3aGljaCBpcyB0cmlnZ2VyZWQgZXZlcnkgdGltZSB0aGUgZmlsdGVyIHBhbmVsIHVwZGF0ZXMgb3Igb24gaW5pdGlhbCBsb2FkXHJcbiAgICAgKiAqL1xyXG4gICAgZnVuY3Rpb24gc2V0dXBEYXRhTGlzdGVuZXIoY29uZmlnTmFtZSkge1xyXG4gICAgICAgIGlmIChZICYmIFkuR2xvYmFsKSB7XHJcbiAgICAgICAgICAgIFkuR2xvYmFsLm9uKFwicmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVcIiwgZmlsdGVySW5mbyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXNlQ29uZmlnKGNvbmZpZ05hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKERTICYmIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIERTLm1vZGlmaWVyID0gZmlsdGVySW5mbzsgLy8gZmlsdGVyIGluZm9ybWF0aW9uIGFzIGEgbW9kaWZpZXIgZm9yIGRhdGEgZmV0Y2hcclxuICAgICAgICAgICAgICAgICAgICBEUy5pbml0aWFsRGF0YUxvYWQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihwcm9jZXNzRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZVUkgaXMgbm90IGRlZmluZWQgb3IgYWNjZXNzaWJsZSwgY2Fubm90IHNldCB1cCBhIFwicmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVcIiBsaXN0ZW5lcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXNlQ29uZmlnKGNvbmZpZ05hbWUpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoIXdpbmRvd1tjb25maWdOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25maWcgaXMgbm90IHBhc3NlZCBmcm9tIGJhY2tlbmQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbmZpZyA9IHdpbmRvd1tjb25maWdOYW1lXTtcclxuICAgICAgICAgICAgaWYoY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzICYmIHR5cGVvZiBjb25maWcuaW5kaXZpZHVhbFJlY29yZHMgPT09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5pbmRpdmlkdWFsUmVjb3JkcyA9IGNvbmZpZy5pbmRpdmlkdWFsUmVjb3Jkcy5zcGxpdCgnLCcpLm1hcChpdGVtPT5pdGVtLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHsgY29uZmlnIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEsIG1vZGUgPSAncmVwbGFjZScpIHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhOiBwYXJzZWREYXRhUm93W10gPSBkYXRhLm1hcCgoZGF0YVJvdywgcm93SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcnNlZFJvdzogcGFyc2VkRGF0YVJvdyA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBpciA9IGNvbmZpZy5pbmRpdmlkdWFsUmVjb3JkcyB8fCBbXTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YUZpZWxkcyA9IFsnaWQnLCAndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAndmlkZW8nLCAnYXVkaW8nLCdpbWFnZSddLmNvbmNhdChpcik7XHJcbiAgICAgICAgICAgIGRhdGFGaWVsZHMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uSUQgPSBjb25maWdba2V5XTtcclxuICAgICAgICAgICAgICAgIHBhcnNlZFJvd1trZXldID0gcHJlcGFyZURhdGEoZGF0YVJvd1tjb2x1bW5JRCB8fCBrZXldLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgaW1hZ2UgLSB3ZSBtaWdodCB3YW50IHRvIHVzZSBhIHBsYWNlaG9sZGVyIGFzIHRoZSB0aHVtYiwgYW5kIGxvYWQgdGhlIGZ1bGwgaW1hZ2UgaW4gYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWRSb3cuaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudGh1bWJzUGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFJvdy5wbGFjZWhvbGRlciA9IHBhcnNlZFJvdy5pbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRSb3cuaW1hZ2UgPSBwYXJzZWRSb3cuaW1hZ2UucmVwbGFjZSgvX3RodW1iL2dpLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIG1lZGlhdHlwZSBvciBhIHBsYWNlaG9sZGVyIGljb25cclxuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkUm93Lm1lZGlhdHlwZSAmJiBbJ3ZpZGVvJywgJ2F1ZGlvJywgJ2ltYWdlJ10uaW5kZXhPZihrZXkpID4gLTEgJiYgY29uZmlnW2tleV0gJiYgcGFyc2VkUm93W2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRSb3cubWVkaWF0eXBlID0ga2V5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IGlkIGZvciBrZXlzXHJcbiAgICAgICAgICAgIHBhcnNlZFJvdy5pZCA9IGRhdGFSb3cucmVzcG9uc2VpZCA/IGRhdGFSb3cucmVzcG9uc2VpZCA6IHJvd0luZGV4O1xyXG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgbGluayBwYXNzZWQgYXMgYHNsaW5rYCBwcm9wZXJ0eSBpbiBkYXRhXHJcbiAgICAgICAgICAgIGlmIChkYXRhUm93LnNsaW5rKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbCA9IGRhdGFSb3cuc2xpbms7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRSb3cubGluayA9ICgvaHJlZj0nKC4rPyknL2dpKS5leGVjKGwpLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRSb3c7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIHN0YXRlIHdpdGggdGhlIG5ldyBzZXQgb2YgZGF0YSBvciBhIG1lcmdlZCBkYXRhXHJcbiAgICAgICAgaWYgKG1vZGUgPT09ICdyZXBsYWNlJykge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IG5ld0RhdGEsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnYXBwZW5kJykge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogWy4uLnByZXZTdGF0ZS5pdGVtcywgLi4ubmV3RGF0YV0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ21lcmdlJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtb2RlKTtcclxuICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHVuaW9uQnkobmV3RGF0YSwgcHJldlN0YXRlLml0ZW1zLCAnaWQnKSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0YXRgNC10L0g0LfQvdCw0LXRgiDRh9GC0L4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1hc3NhZ2UgZGF0YSB0byBmaXQgdGhlIHR5cGUgd2UgZXhwZWN0IHRvIHJlY2VpdmUgaW4gcmVhY3Qgdmlld1xyXG4gICAgICogKi9cclxuICAgIGZ1bmN0aW9uIHByZXBhcmVEYXRhKGRhdGE6YW55LCB0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJlcGFyZURhdGEnLGRhdGEsdHlwZSlcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICgvc3JjPScoLis/KScvZ2kpLmV4ZWMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICE9IG51bGwgJiYgcmVzdWx0WzFdID8gcmVzdWx0WzFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjYXNlICdkZXNjcmlwdGlvbic6XHJcbiAgICAgICAgICAgIGNhc2UgJ3RpdGxlJzpyZXR1cm4gIShkYXRhLmluZGV4T2YoJy0nKSA+IC0xICYmIGRhdGEudHJpbSgpLmxlbmd0aCA9PT0gMSkgPyBkYXRhLnRyaW0oKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY2FzZSAndmlkZW8nOlxyXG4gICAgICAgICAgICBjYXNlICdhdWRpbyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIShkYXRhLmluZGV4T2YoJy0nKSA+IC0xICYmIGRhdGEudHJpbSgpLmxlbmd0aCA9PT0gMSkgPyBnZW5lcmF0ZU1lZGlhTGluayhkYXRhLnRyaW0oKSwgdHlwZSkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RhZ3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEgJiYgKGRhdGEuaW5kZXhPZignLCcpID4gLTEgPyBkYXRhLnNwbGl0KCcsJykgOiBkYXRhLmluZGV4T2YoJy0nKSA+IC0xICYmIGRhdGEudHJpbSgpLmxlbmd0aCA9PT0gMSA/IHVuZGVmaW5lZCA6IGRhdGEudHJpbSgpKTtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTWVkaWFMaW5rKGZpbGVOYW1lOnN0cmluZywgdHlwZTogJ2F1ZGlvJ3wndmlkZW8nKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2VuZXJhdGVNZWRpYUxpbmsnLGZpbGVOYW1lLHR5cGUpXHJcbiAgICAgICAgY29uc3QgZHNOYW1lID0gY29uZmlnLnN1cnZleUlEO1xyXG4gICAgICAgIHJldHVybiBgL3JlcG9ydGFsL1d5c2l3eWcvUmVwb3J0LyR7cXVlcnkucmVwb3J0aWR9LyR7ZHNOYW1lfS8ke3R5cGV9LyR7ZmlsZU5hbWV9YFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURhdGFMb2FkaW5nRXJyb3IoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgRFMubG9hZE5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBEUy5uZXh0UGFnZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmxvYWRQcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIERTLnByZXZpb3VzUGFnZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmxvYWRNb3JlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBEUy5uZXh0UGFnZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHByb2Nlc3NEYXRhKHJlc3BvbnNlLCAnYXBwZW5kJykpXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgRFMuaW5pdGlhbExvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIERTLmluaXRpYWxEYXRhTG9hZCgpXHJcbiAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmdldFBhZ2VJbmZvID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc1BhZ2VJbmZvID0gRFMucGFnZUluZm8gJiYgRFMuc29ydGluZ1BhZ2luZ1ZhbHVlcyAmJiBEUy5zb3J0aW5nUGFnaW5nVmFsdWVzLnRvdGFsSGl0cztcclxuICAgICAgICByZXR1cm4gaGFzUGFnZUluZm8gPyBgJHtEUy5wYWdlSW5mb30gb2YgJHtEUy5zb3J0aW5nUGFnaW5nVmFsdWVzLnRvdGFsSGl0c31gIDogJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmNvbmZpZyA9ICgpID0+IHsgcmV0dXJuIGNvbmZpZyAhPSBudWxsID8gY29uZmlnIDogaW5pdGlhbGlzZUNvbmZpZyhvcHRpb25zLmNvbmZpZykgfTtcclxuXHJcbiAgICByZXR1cm4gRFNcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EU0Fic3RyYWN0aW9uLmpzIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3Jvb3QuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwidmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0tleTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL190b0tleS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fTWFwLmpzIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0tleS5qcyIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lkZW50aXR5LmpzIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU2V0LmpzIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TdGFjay5qcyIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0LmpzIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpZiBzdWl0YWJsZSBmb3Igc3RyaWN0XG4gKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmljdENvbXBhcmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNTdHJpY3RDb21wYXJhYmxlLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYG1hdGNoZXNQcm9wZXJ0eWAgZm9yIHNvdXJjZSB2YWx1ZXMgc3VpdGFibGVcbiAqIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShrZXksIHNyY1ZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZSAmJlxuICAgICAgKHNyY1ZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiBPYmplY3Qob2JqZWN0KSkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9lcS5qcyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9rZXlzLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19EYXRhVmlldy5qcyIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0hhc2guanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXBwbHkuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNXaXRoKGFycmF5LCB2YWx1ZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlNYXAuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNGbGF0dGVuYWJsZSA9IHJlcXVpcmUoJy4vX2lzRmxhdHRlbmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mbGF0dGVuYCB3aXRoIHN1cHBvcnQgZm9yIHJlc3RyaWN0aW5nIGZsYXR0ZW5pbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBmbGF0dGVuLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlcHRoIFRoZSBtYXhpbXVtIHJlY3Vyc2lvbiBkZXB0aC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZWRpY2F0ZT1pc0ZsYXR0ZW5hYmxlXSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNTdHJpY3RdIFJlc3RyaWN0IHRvIHZhbHVlcyB0aGF0IHBhc3MgYHByZWRpY2F0ZWAgY2hlY2tzLlxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdD1bXV0gVGhlIGluaXRpYWwgcmVzdWx0IHZhbHVlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlRmxhdHRlbihhcnJheSwgZGVwdGgsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBwcmVkaWNhdGUgfHwgKHByZWRpY2F0ZSA9IGlzRmxhdHRlbmFibGUpO1xuICByZXN1bHQgfHwgKHJlc3VsdCA9IFtdKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAoZGVwdGggPiAwICYmIHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIGlmIChkZXB0aCA+IDEpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmxhdHRlbiBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgICAgYmFzZUZsYXR0ZW4odmFsdWUsIGRlcHRoIC0gMSwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5UHVzaChyZXN1bHQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc1N0cmljdCkge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZsYXR0ZW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUZsYXR0ZW4uanMiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmhhc0luYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSGFzSW4ob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGtleSBpbiBPYmplY3Qob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSGFzSW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUhhc0luLmpzIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUlzTmFOID0gcmVxdWlyZSgnLi9fYmFzZUlzTmFOJyksXG4gICAgc3RyaWN0SW5kZXhPZiA9IHJlcXVpcmUoJy4vX3N0cmljdEluZGV4T2YnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IGBmcm9tSW5kZXhgIGJvdW5kcyBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZVxuICAgID8gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleClcbiAgICA6IGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWF0Y2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBvYmplY3RgIGlzIGEgbWF0Y2gsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgaWYgKChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSlcbiAgICAgICAgICA/IGRhdGFbMV0gIT09IG9iamVjdFtkYXRhWzBdXVxuICAgICAgICAgIDogIShkYXRhWzBdIGluIG9iamVjdClcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgdmFyIGtleSA9IGRhdGFbMF0sXG4gICAgICAgIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHNyY1ZhbHVlID0gZGF0YVsxXTtcblxuICAgIGlmIChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSkge1xuICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFjayA9IG5ldyBTdGFjaztcbiAgICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spO1xuICAgICAgfVxuICAgICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcsIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICAgICAgOiByZXN1bHRcbiAgICAgICAgICApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWF0Y2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTWF0Y2guanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmFOYCB3aXRob3V0IHN1cHBvcnQgZm9yIG51bWJlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hTjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLml0ZXJhdGVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbdmFsdWU9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYW4gaXRlcmF0ZWUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGl0ZXJhdGVlLlxuICovXG5mdW5jdGlvbiBiYXNlSXRlcmF0ZWUodmFsdWUpIHtcbiAgLy8gRG9uJ3Qgc3RvcmUgdGhlIGB0eXBlb2ZgIHJlc3VsdCBpbiBhIHZhcmlhYmxlIHRvIGF2b2lkIGEgSklUIGJ1ZyBpbiBTYWZhcmkgOS5cbiAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYwMzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pXG4gICAgICA6IGJhc2VNYXRjaGVzKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJdGVyYXRlZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXRlcmF0ZWUuanMiLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5cy5qcyIsInZhciBiYXNlSXNNYXRjaCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hdGNoJyksXG4gICAgZ2V0TWF0Y2hEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWF0Y2hEYXRhJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShtYXRjaERhdGFbMF1bMF0sIG1hdGNoRGF0YVswXVsxXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT09IHNvdXJjZSB8fCBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlTWF0Y2hlcy5qcyIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyksXG4gICAgZ2V0ID0gcmVxdWlyZSgnLi9nZXQnKSxcbiAgICBoYXNJbiA9IHJlcXVpcmUoJy4vaGFzSW4nKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lc24ndCBjbG9uZSBgc3JjVmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIGlmIChpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKHRvS2V5KHBhdGgpLCBzcmNWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBvYmpWYWx1ZSA9IGdldChvYmplY3QsIHBhdGgpO1xuICAgIHJldHVybiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBvYmpWYWx1ZSA9PT0gc3JjVmFsdWUpXG4gICAgICA/IGhhc0luKG9iamVjdCwgcGF0aClcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzUHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVByb3BlcnR5YCB3aGljaCBzdXBwb3J0cyBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eURlZXAocGF0aCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlEZWVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgb3ZlclJlc3QgPSByZXF1aXJlKCcuL19vdmVyUmVzdCcpLFxuICAgIHNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fc2V0VG9TdHJpbmcnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVJlc3QuanMiLCJ2YXIgY29uc3RhbnQgPSByZXF1aXJlKCcuL2NvbnN0YW50JyksXG4gICAgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXRUb1N0cmluZ2Agd2l0aG91dCBzdXBwb3J0IGZvciBob3QgbG9vcCBzaG9ydGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuYywgJ3RvU3RyaW5nJywge1xuICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgJ3ZhbHVlJzogY29uc3RhbnQoc3RyaW5nKSxcbiAgICAnd3JpdGFibGUnOiB0cnVlXG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVNldFRvU3RyaW5nLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXG4gICAgY3JlYXRlU2V0ID0gcmVxdWlyZSgnLi9fY3JlYXRlU2V0JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBzZWVuID0gcmVzdWx0O1xuXG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICB9XG4gIGVsc2UgaWYgKGxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgdmFyIHNldCA9IGl0ZXJhdGVlID8gbnVsbCA6IGNyZWF0ZVNldChhcnJheSk7XG4gICAgaWYgKHNldCkge1xuICAgICAgcmV0dXJuIHNldFRvQXJyYXkoc2V0KTtcbiAgICB9XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIHNlZW4gPSBuZXcgU2V0Q2FjaGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcbiAgICAgICAgaWYgKHNlZW5bc2VlbkluZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyhzZWVuLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVW5pcS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsInZhciBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBub29wID0gcmVxdWlyZSgnLi9ub29wJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9iamVjdCBvZiBgdmFsdWVzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYWRkIHRvIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgc2V0LlxuICovXG52YXIgY3JlYXRlU2V0ID0gIShTZXQgJiYgKDEgLyBzZXRUb0FycmF5KG5ldyBTZXQoWywtMF0pKVsxXSkgPT0gSU5GSU5JVFkpID8gbm9vcCA6IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFNldCh2YWx1ZXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsInZhciBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3Mgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbWF0Y2ggZGF0YSBvZiBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hEYXRhKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0ga2V5cyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICB2YXIga2V5ID0gcmVzdWx0W2xlbmd0aF0sXG4gICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICByZXN1bHRbbGVuZ3RoXSA9IFtrZXksIHZhbHVlLCBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hdGNoRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBleGlzdHMgb24gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFzRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBoYXNGdW5jKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBmYWxzZTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSB0b0tleShwYXRoW2luZGV4XSk7XG4gICAgaWYgKCEocmVzdWx0ID0gb2JqZWN0ICE9IG51bGwgJiYgaGFzRnVuYyhvYmplY3QsIGtleSkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gIH1cbiAgaWYgKHJlc3VsdCB8fCArK2luZGV4ICE9IGxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogb2JqZWN0Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiYgaXNJbmRleChrZXksIGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1BhdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzUGF0aC5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoR2V0LmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoSGFzLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcHJlYWRhYmxlU3ltYm9sID0gU3ltYm9sID8gU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGZsYXR0ZW5hYmxlIGBhcmd1bWVudHNgIG9iamVjdCBvciBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmbGF0dGVuYWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0ZsYXR0ZW5hYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkgfHxcbiAgICAhIShzcHJlYWRhYmxlU3ltYm9sICYmIHZhbHVlICYmIHZhbHVlW3NwcmVhZGFibGVTeW1ib2xdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZsYXR0ZW5hYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzRmxhdHRlbmFibGUuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwidmFyIG1lbW9pemUgPSByZXF1aXJlKCcuL21lbW9pemUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIG1heGltdW0gbWVtb2l6ZSBjYWNoZSBzaXplLiAqL1xudmFyIE1BWF9NRU1PSVpFX1NJWkUgPSA1MDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1lbW9pemVgIHdoaWNoIGNsZWFycyB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24nc1xuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoY2FjaGUuc2l6ZSA9PT0gTUFYX01FTU9JWkVfU0laRSkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAgdmFyIGNhY2hlID0gcmVzdWx0LmNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVDYXBwZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19vdmVyQXJnLmpzIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyUmVzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19vdmVyUmVzdC5qcyIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwidmFyIGJhc2VTZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VTZXRUb1N0cmluZycpLFxuICAgIHNob3J0T3V0ID0gcmVxdWlyZSgnLi9fc2hvcnRPdXQnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRUb1N0cmluZy5qcyIsIi8qKiBVc2VkIHRvIGRldGVjdCBob3QgZnVuY3Rpb25zIGJ5IG51bWJlciBvZiBjYWxscyB3aXRoaW4gYSBzcGFuIG9mIG1pbGxpc2Vjb25kcy4gKi9cbnZhciBIT1RfQ09VTlQgPSA4MDAsXG4gICAgSE9UX1NQQU4gPSAxNjtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0J2xsIHNob3J0IG91dCBhbmQgaW52b2tlIGBpZGVudGl0eWAgaW5zdGVhZFxuICogb2YgYGZ1bmNgIHdoZW4gaXQncyBjYWxsZWQgYEhPVF9DT1VOVGAgb3IgbW9yZSB0aW1lcyBpbiBgSE9UX1NQQU5gXG4gKiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJlc3RyaWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc2hvcnRhYmxlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBzaG9ydE91dChmdW5jKSB7XG4gIHZhciBjb3VudCA9IDAsXG4gICAgICBsYXN0Q2FsbGVkID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YW1wID0gbmF0aXZlTm93KCksXG4gICAgICAgIHJlbWFpbmluZyA9IEhPVF9TUEFOIC0gKHN0YW1wIC0gbGFzdENhbGxlZCk7XG5cbiAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG9ydE91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zaG9ydE91dC5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tHZXQuanMiLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zIG9mIHZhbHVlcywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdHJpY3RJbmRleE9mLmpzIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUxlYWRpbmdEb3QgPSAvXlxcLi8sXG4gICAgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHJlTGVhZGluZ0RvdC50ZXN0KHN0cmluZykpIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwiLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJldHVybiBmcm9tIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb25zdGFudCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBfLnRpbWVzKDIsIF8uY29uc3RhbnQoeyAnYSc6IDEgfSkpO1xuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHMpO1xuICogLy8gPT4gW3sgJ2EnOiAxIH0sIHsgJ2EnOiAxIH1dXG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0c1swXSA9PT0gb2JqZWN0c1sxXSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uc3RhbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9jb25zdGFudC5qcyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvZ2V0LmpzIiwidmFyIGJhc2VIYXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VIYXNJbicpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBvciBpbmhlcml0ZWQgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNJbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2hhc0luLmpzIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZU9iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwiLyoqXG4gKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5sYXN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gbGVuZ3RoID8gYXJyYXlbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2xhc3QuanMiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL21lbW9pemUuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLm5vb3ApO1xuICogLy8gPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vb3A7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9ub29wLmpzIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvcHJvcGVydHkuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3N0dWJBcnJheS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3RvU3RyaW5nLmpzIiwidmFyIGJhc2VGbGF0dGVuID0gcmVxdWlyZSgnLi9fYmFzZUZsYXR0ZW4nKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpLFxuICAgIGxhc3QgPSByZXF1aXJlKCcuL2xhc3QnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnVuaW9uYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBpdGVyYXRlZWAgd2hpY2ggaXNcbiAqIGludm9rZWQgZm9yIGVhY2ggZWxlbWVudCBvZiBlYWNoIGBhcnJheXNgIHRvIGdlbmVyYXRlIHRoZSBjcml0ZXJpb24gYnlcbiAqIHdoaWNoIHVuaXF1ZW5lc3MgaXMgY29tcHV0ZWQuIFJlc3VsdCB2YWx1ZXMgYXJlIGNob3NlbiBmcm9tIHRoZSBmaXJzdFxuICogYXJyYXkgaW4gd2hpY2ggdGhlIHZhbHVlIG9jY3Vycy4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6XG4gKiAodmFsdWUpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgY29tYmluZWQgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaW9uQnkoWzIuMV0sIFsxLjIsIDIuM10sIE1hdGguZmxvb3IpO1xuICogLy8gPT4gWzIuMSwgMS4yXVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy51bmlvbkJ5KFt7ICd4JzogMSB9XSwgW3sgJ3gnOiAyIH0sIHsgJ3gnOiAxIH1dLCAneCcpO1xuICogLy8gPT4gW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH1dXG4gKi9cbnZhciB1bmlvbkJ5ID0gYmFzZVJlc3QoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHZhciBpdGVyYXRlZSA9IGxhc3QoYXJyYXlzKTtcbiAgaWYgKGlzQXJyYXlMaWtlT2JqZWN0KGl0ZXJhdGVlKSkge1xuICAgIGl0ZXJhdGVlID0gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBiYXNlVW5pcShiYXNlRmxhdHRlbihhcnJheXMsIDEsIGlzQXJyYXlMaWtlT2JqZWN0LCB0cnVlKSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmlvbkJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvdW5pb25CeS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMC4wMS4yMDE3LlxuICovXG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gXCJyLXJlcG9ydGFsLWJhc2VcIjtcbmltcG9ydCBIaXRsaXN0U2V0dXAgZnJvbSBcIi4vaGl0bGlzdC1zZXR1cFwiO1xuXG5jbGFzcyBIaXRsaXN0RGF0YXNvdXJjZSBleHRlbmRzIEhpdGxpc3RTZXR1cHtcbiAgLyoqXG4gICAqIFRoaXMgY2xhc3MgYWxsb3dzIHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gd2l0aCB0aGUgSGl0TGlzdCBkYXRhYmFzZSBhbmQgdXNlIHV0aWxpdHkgbWV0aG9kcyB0byBxdWVyeSBhbmQgZmlsdGVyIGRhdGEgcHJvdmlkZWQgdGhlcmUncyBhIGhpdGxpc3Qgb24gdGhlIHBhZ2VcbiAgICogQGV4dGVuZHMgSGl0bGlzdFNldHVwXG4gICAqICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM9e30pe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc2VhcmNoVmFsdWVzPVtdO1xuICAgIC8qKiBAcHJvcGVydHkge1N0cmluZ30gbW9kaWZpZXIgLSBleHRyYSBwYXJhbXMgYWRkZWQgYXMgYSBzdHJpbmcgZnJvbSBmaWx0ZXJzICovXG4gICAgdGhpcy5tb2RpZmllciA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIHBlcmZvcm1zIGluaXRpYWwgZGF0YSBsb2FkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIGluaXRpYWxEYXRhTG9hZCgpe1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpbml0aWFsTG9hZDp0cnVlfSlcbiAgfVxuICAvKipcbiAgICogbG9hZHMgbmV4dCBwYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIG5leHRQYWdlKCl7XG4gICAgdGhpcy5fc2tpcFBhZ2UodHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpc1BhZ2luZzogdHJ1ZX0sdGhpcy5tb2RpZmllcik7XG4gIH1cbiAgLyoqXG4gICAqIGxvYWRzIHByZXZpb3VzIHBhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgcHJldmlvdXNQYWdlKCl7XG4gICAgdGhpcy5fc2tpcFBhZ2UoZmFsc2UpO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aXNQYWdpbmc6IHRydWV9LHRoaXMubW9kaWZpZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJpZXMgSGl0TGlzdCBBUElcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogKi9cbiAgcmVxdWVzdFJlc3BvbnNlKG9wdGlvbnMpe1xuICAgIGxldCBxdWVyeT0gUmVwb3J0YWxCYXNlLmxvY2F0aW9uRGVzZXJpYWxpemUoKS5xdWVyeTtcbiAgICBpZihxdWVyeSAmJiBxdWVyeS5yZXBvcnRpZCAmJiB0aGlzLmhpdGxpc3RJRCl7XG4gICAgICAvKnNldCBjb21tb24gcGFyYW1zKi9cbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIFBhZ2VJZDogdGhpcy5wYWdlSUQsXG4gICAgICAgIHBhZ2VTdGF0ZUlkOiB0aGlzLnBhZ2VTdGF0ZUlELFxuICAgICAgICBQcmV2aWV3OiBxdWVyeS5wcmV2aWV3XG4gICAgICB9O1xuXG4gICAgICAvKmlmIG9wdGlvbnMgYXJlIHBhc3NlZCwgYWRkIG9wdGlvbnMqL1xuICAgICAgaWYob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpe1xuICAgICAgICBmb3IgKGxldCBhdHRybmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgcGFyYW1zW2F0dHJuYW1lXSA9IHR5cGVvZiBvcHRpb25zW2F0dHJuYW1lXT09PSdib29sZWFuJz8ob3B0aW9uc1thdHRybmFtZV0/JzEnOicwJyk6b3B0aW9uc1thdHRybmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIXBhcmFtcy5zZWFyY2ggJiYgdGhpcy5fc2VhcmNoVmFsdWVzLmxlbmd0aD4wKXtcbiAgICAgICAgcGFyYW1zLnNlYXJjaCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuX3NlYXJjaFZhbHVlcyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzb3J0aW5nUGFnaW5nVmFsdWVzID0gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzO1xuXG4gICAgICBpZiAoc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMhPW51bGwgJiYgIWlzTmFOKHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2VOdW1iZXIpKSB7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaW5pdGlhbExvYWQgPT09IHRydWUpIHtcbiAgICAgICAgICBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcyA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnZU51bWJlciArPSBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdpbmdGb3J3YXJkID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy5zb3J0aW5nUGFnaW5nVmFsdWVzPUpTT04uc3RyaW5naWZ5KHNvcnRpbmdQYWdpbmdWYWx1ZXMpO1xuXG4gICAgICByZXR1cm4gUmVwb3J0YWxCYXNlLnByb21pc2VSZXF1ZXN0KGAke3RoaXMuc2VydmljZVVSTH0mJHtIaXRsaXN0RGF0YXNvdXJjZS5zZXJpYWxpemVQYXJhbXMocGFyYW1zKX0ke3RoaXMubW9kaWZpZXIhPScnPycmJyt0aGlzLm1vZGlmaWVyOicnfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT50aGlzLnBhcnNlUmVzcG9uc2UocmVzcG9uc2UpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgSGl0TGlzdCBBUEkgcmVzcG9uc2VcbiAgICogKi9cbiAgcGFyc2VSZXNwb25zZShyZXNwb25zZSl7XG4gICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcblxuICAgIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHJlc3BvbnNlLnNvcnRpbmdQYWdpbmdWYWx1ZXM7XG4gICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICB0aGlzLnBhZ2VJbmZvID0gcmVzcG9uc2UucGFnZUluZm87XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHBhZ2luZ0ZvcndhcmQgaWYgYHRydWVgIGdvZXMgZm9yd2FyZCwgaWYgYG51bGxgIGdvZXMgYmFja3dhcmRcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNhbGxiYWNrXG4gICAqICovXG4gIF9za2lwUGFnZShwYWdpbmdGb3J3YXJkKXtcbiAgICBsZXQgX3NwdiA9IHsuLi50aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXN9O1xuICAgIGxldCBwdiA9IHsuLi5fc3B2LnBhZ2luZ1ZhbHVlc30gfHwge307XG4gICAgcHYucGFnaW5nRm9yd2FyZCA9IHBhZ2luZ0ZvcndhcmQ7IC8qaWYgZm9yd2FyZCBpcyBuZWVkZWQgdGhlbiBwYXNzIHRydWUsIGVsc2UgbnVsbCAtIGJhY2t3YXJkKi9cbiAgICBwdi5zdGFydElkID0gcGFnaW5nRm9yd2FyZCA/IHB2Lmxhc3RTdGFydElkIDogcHYuZmlyc3RTdGFydElkO1xuICAgIHB2LnN0YXJ0VmFsdWUgPSBwYWdpbmdGb3J3YXJkID8gcHYubGFzdFN0YXJ0VmFsdWUgOiBwdi5maXJzdFN0YXJ0VmFsdWU7XG4gICAgdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzID0ge1xuICAgICAgLi4udGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLFxuICAgICAgcGFnaW5nVmFsdWVzOiBwdlxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogc2VyaWFsaXplIHBhcmFtcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgLSBhbiBvYmplY3Qgd2l0aCBwYXJhbWV0ZXJzXG4gICAqICovXG4gIHN0YXRpYyBzZXJpYWxpemVQYXJhbXMocGFyYW1zKXtcbiAgICBsZXQgcXVlcnkgPSBbXTtcbiAgICBmb3IobGV0IGtleSBpbiBwYXJhbXMpe1xuICAgICAgcXVlcnkucHVzaChba2V5LHBhcmFtc1trZXldXS5qb2luKCc9JykpO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnkuam9pbignJicpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0RGF0YXNvdXJjZTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LWRhdGFzb3VyY2UuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTAuMDEuMjAxNy5cbiAqL1xuXG5jbGFzcyBIaXRsaXN0U2V0dXB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgLy9maXggZm9yIHdpbmRvdy5sb2NhdGlvbiBvcmlnaW4sIHRoYW54IElFXG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID8gJzonICsgd2luZG93LmxvY2F0aW9uLnBvcnQ6ICcnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBIaXRsaXN0U2V0dXAuZ2V0T3JpZ2luYWxDb25maWcoKTtcbiAgICB0aGlzLl9lbGVtZW50VHlwZSA9IHdpbmRvdy5IaXRMaXN0RWxlbWVudFR5cGU7XG4gICAgdGhpcy5fb3AgPSB3aW5kb3cuU2VhcmNoYWJsZUxpc3RPcGVyYXRvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBhbGxvd3MgZ2V0dGluZyBhIGxvY2FsaXNlZCBzdHJpbmcgaW4gdGhlIGxhbmd1YWdlIG9mIHRoZSByZXBvcnQgZnJvbSBIaXRsaXN0IGNvbmZpZy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIHRoZSBrZXkgdG8gbG9vayB0aGUgcHJvcGVydHkgdXBcbiAgICpcbiAgICogKiBgc3RvZWA6XCJTbWFsbGVyIHRoYW4gb3IgZXF1YWxcIixcbiAgICogKiBgZ3RvZWA6XCJHcmVhdGVyIHRoYW4gb3IgZXF1YWxcIixcbiAgICogKiBgYmV0d2VlbmA6XCJCZXR3ZWVuXCIsXG4gICAqICogYGJlZm9yZWA6XCJCZWZvcmVcIixcbiAgICogKiBgYWZ0ZXJgOlwiQWZ0ZXJcIixcbiAgICogKiBgZXhhY3RseWA6XCJFeGFjdGx5XCIsXG4gICAqICogYHNob3dkZWZhdWx0Y29sc2A6XCJTaG93IGRlZmF1bHQgY29sdW1uc1wiLFxuICAgKiAqIGBhcHBseWA6XCJBcHBseVwiLFxuICAgKiAqIGBjYW5jZWxgOlwiQ2FuY2VsXCIsXG4gICAqICogYHNob3doaWRlYDpcIlNob3cgLyBIaWRlIGNvbHVtbnNcIixcbiAgICogKiBgeWVzYDpcIlllc1wiLFxuICAgKiAqIGBub2A6XCJOb1wiLFxuICAgKiAqIGBsb2FkaW5nRGF0YWA6XCJMb2FkaW5nIGRhdGEsIHBsZWFzZSB3YWl0Li4uXCIsXCJcbiAgICogKiBgY2hlY2thbGxgOlwiQ2hlY2sgYWxsXCIsXG4gICAqICogYHVuY2hlY2thbGxgOlwiVW5jaGVjayBhbGxcIixcbiAgICogKiBgZXJyb3JMb2FkaW5nYDpcIkVycm9yIGxvYWRpbmcgZGF0YVwiLFxuICAgKiAqIGBlcnJvck5vQ29sdW1uc2A6XCJObyBjb2x1bW5zIHNlbGVjdGVkXCJcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUkVTUE9OREVOVE9WRVJWSUVXYDpcIlJlc3BvbmRlbnQgb3ZlcnZpZXdcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJJTlRgOlwiUHJpbnQgdGhlIGN1cnJlbnQgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19DTE9TRWA6XCJDbG9zZSB0aGlzIG92ZXJsYXlcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfRklMVEVSYDpcIkZpbHRlciBxdWVzdGlvbnNcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTk9USElOR0ZPVU5EYDpcIk5vIHF1ZXN0aW9ucyBtYXRjaCB5b3VyIHNlYXJjaFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VU2A6XCJQcmV2aW91c1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VU0hJTlRgOlwiUHJldmlvdXMgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19ORVhUYDpcIk5leHRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTkVYVEhJTlRgOlwiTmV4dCByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX09GYDpcInswfSBvZiB7MX1cIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTU9SRWA6XCJ7MH0gbW9yZVwiLFxuICAgKiAqIFJFUE9SVF9TSU5HTEVWSUVXX0FMVEVSTkFUSVZFU2A6XCJBbnN3ZXJzIGFsdGVybmF0aXZlczpcIlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKiAqL1xuICBpMThuKGtleSl7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5jYXB0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpP3RoaXMuX2NvbmZpZy5jYXB0aW9uc1trZXldOnRoaXMuX2NvbmZpZy5zaW5nbGVWaWV3VGV4dHMuaGFzT3duUHJvcGVydHkoa2V5KT90aGlzLl9jb25maWcuc2luZ2xlVmlld1RleHRzW2tleV06bnVsbFxuICB9XG5cbiAgZ2V0IGRhdGEoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmhpdGxpc3REYXRhfVxuXG4gIHNldCBkYXRhKGRhdGEpe1xuICAgIHRoaXMuX2NvbmZpZy5oaXRsaXN0RGF0YSA9IGRhdGE7XG4gIH1cbiAgZ2V0IGRpc2FibGVOZXh0QnV0dG9uKCl7XG4gICAgcmV0dXJuIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcy5kaXNhYmxlTmV4dEJ1dHRvbiB8fCBmYWxzZVxuICB9XG4gIGdldCBkaXNhYmxlUHJldkJ1dHRvbigpe1xuICAgIHJldHVybiB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMuZGlzYWJsZVByZXZCdXR0b24gfHwgZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSB2aXNpYmxlIEhpdExpc3QgY29sdW1ucyBvZiBPYmplY3QgdHlwZTogYHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ31gXG4gICAqIEByZXR1cm5zIHtBcnJheS48e2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfT59IFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHZpc2libGUgSGl0TGlzdCBjb2x1bW5zXG4gICAqICovXG4gIGdldCBjb2x1bW5zKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5jb2x1bW5zfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBIaXRMaXN0IGNvbHVtbnMgb2YgT2JqZWN0IHR5cGU6IGB7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9YFxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqICovXG4gIGdldCBhbGxDb2x1bW5zKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5hbGxDb2x1bW5zfVxuXG4gIGdldCBoaXRsaXN0SUQoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmNvbXBvbmVudElkfVxuICBnZXQgcGFnZUlEKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5wYWdlSWR9XG4gIGdldCBsYW5ndWFnZSgpe3JldHVybiB0aGlzLl9jb25maWcubGFuZ3VhZ2V9XG4gIGdldCBzZXJ2aWNlVVJMKCl7cmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt0aGlzLl9jb25maWcuc2VydmljZVVybH1gfVxuICBnZXQgcGFnZVN0YXRlSUQoKXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1BhZ2VTdGF0ZUlkJyk/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQYWdlU3RhdGVJZCcpLnZhbHVlOnVuZGVmaW5lZH1cbiAgZ2V0IHNvcnRpbmdQYWdpbmdWYWx1ZXMoKXtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXMhPW51bGw/dGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXM6e31cbiAgfVxuICBzZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcyh2YWwpe1xuICAgIHRoaXMuX2NvbmZpZy5zb3J0aW5nUGFnaW5nVmFsdWVzID0gdmFsO1xuICB9XG5cbiAgc3RhdGljIF9maXhKc29uRGF0ZShqc29uRGF0ZSkge1xuICAgIGlmICghKGpzb25EYXRlICYmIFkgJiYgWS5MYW5nLmlzRnVuY3Rpb24oanNvbkRhdGUucmVwbGFjZSkpKSB7cmV0dXJuIGpzb25EYXRlO31cbiAgICBsZXQgY29uc3RyID0ganNvbkRhdGUucmVwbGFjZShuZXcgUmVnRXhwKFwiXi9EYXRlXFxcXCgoWy0rXT9cXFxcZCspXFxcXCkvJFwiKSwgXCJuZXcgRGF0ZSgkMSlcIik7XG4gICAgaWYgKGNvbnN0ciA9PSBqc29uRGF0ZSkge3JldHVybiBqc29uRGF0ZTt9XG4gICAgcmV0dXJuIGV2YWwoY29uc3RyKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHRoZSBjb25maWcgZm9yIGEgSGl0TGlzdCBpZiBpdCdzIGluaXRpYWxpc2VkIG9uIHRoZSBwYWdlXG4gICAqIGBgYFxuICAgKiB7XG4gICAqICBhbGxDb2x1bW5zOkFycmF5LFxuICAgKiAgY2FwdGlvbnM6T2JqZWN0LFxuICAgKiAgY2xpZW50SWQ6U3RyaW5nLFxuICAgKiAgY29sdW1uczpBcnJheSxcbiAgICogIGNvbXBvbmVudElkOlN0cmluZyxcbiAgICogIGhhc2hlZFByb2plY3RJZDpTdHJpbmcsXG4gICAqICBoaXRsaXN0RGF0YTpBcnJheSxcbiAgICogIGxhbmd1YWdlOk51bWJlcixcbiAgICogIG5leHRUZXh0OlN0cmluZyxcbiAgICogIG5vSW5pdGlhbExvYWQ6Qm9vbGVhbixcbiAgICogIHBhZ2VBamF4RW5hYmxlZDpCb29sZWFuLFxuICAgKiAgcGFnZUlkOlN0cmluZyxcbiAgICogIHByZXZUZXh0OlN0cmluZyxcbiAgICogIHByZXZpZXc6Qm9vbGVhbixcbiAgICogIHNlYXJjaEl0ZW1zOkFycmF5LFxuICAgKiAgc2VhcmNoVmFsdWVzOkFycmF5LFxuICAgKiAgc2VydmljZVVybDpTdHJpbmcsXG4gICAqICBzZXJ2aWNlVXJsTWV0YURhdGE6U3RyaW5nLFxuICAgKiAgc2hvd1NpbmdsZVZpZXdPblJvd1NlbGVjdDpCb29sZWFuLFxuICAgKiAgc2luZ2xlVmlld0FwaVVybDpTdHJpbmcsXG4gICAqICBzaW5nbGVWaWV3Rm9ybXNDaHVua0FwaVVybDpTdHJpbmcsXG4gICAqICBzaW5nbGVWaWV3VGV4dHM6T2JqZWN0LFxuICAgKiAgc29ydGluZ1BhZ2luZ1ZhbHVlczpPYmplY3QsXG4gICAqICBzdHlsZXM6T2JqZWN0LFxuICAgKiAgdmVyc2lvbjpTdHJpbmdcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogKi9cbiAgc3RhdGljIGdldE9yaWdpbmFsQ29uZmlnKCl7XG4gICAgbGV0IHNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKTtcbiAgICBpZihzY3JpcHRzKXtcbiAgICAgIGxldCBpPXNjcmlwdHMubGVuZ3RoLFxuICAgICAgICAgIGNmZyA9IC8oWVxcLlJlcG9ydGFsXFwuSGl0TGlzdCwpXFxzKC4qPylcXCk7L2dpO1xuICAgICAgd2hpbGUoaS0tKXtcbiAgICAgICAgbGV0IHNjcmlwdCA9IHNjcmlwdHNbaV0udGV4dDtcbiAgICAgICAgaWYoc2NyaXB0LmluZGV4T2YoJ1kuUmVwb3J0YWwuSGl0TGlzdCwnKT4tMSl7XG4gICAgICAgICAgbGV0IGV4ZWMgPSBjZmcuZXhlYyhzY3JpcHQpO1xuICAgICAgICAgIHJldHVybiAoZXhlYyE9bnVsbCAmJiBleGVjWzJdKT8gSlNPTi5wYXJzZShleGVjWzJdKTogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hpdGxpc3QgY29uZmlnIGlzIG5vdCBwcmVzZW50IG9uIHRoZSBwYWdlJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdFNldHVwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LXNldHVwLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDA3LjA5LjIwMTYuXG4gKi9cblxuaW1wb3J0IEhpdGxpc3REYXRhc291cmNlIGZyb20gXCIuL2hpdGxpc3QtZGF0YXNvdXJjZVwiO1xuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tIFwici1yZXBvcnRhbC1iYXNlXCI7XG5cbndpbmRvdy5SZXBvcnRhbCA9IHdpbmRvdy5SZXBvcnRhbCB8fCB7fTtcblJlcG9ydGFsQmFzZS5taXhpbih3aW5kb3cuUmVwb3J0YWwse1xuICBIaXRsaXN0RGF0YXNvdXJjZVxufSk7XG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0RGF0YXNvdXJjZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9