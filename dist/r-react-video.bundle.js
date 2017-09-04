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
	            { className: 'ImageGridTile--action-icon ripple' },
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
	
	            console.log(config);
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
	    }, _this.actionIconClick = function (item) {
	      return function () {
	        return _this.setState(_extends({}, _this.getSingleViewNavState(_this.state.items.indexOf(item)), {
	          singleView: item,
	          singleViewVisible: true,
	          singleViewMode: 'edit'
	        }));
	      };
	    }, _this.actionIcon = function (item) {
	      return _react2.default.createElement(
	        "svg",
	        { className: "icon", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg", onClick: _this.actionIconClick(item) },
	        _react2.default.createElement("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" })
	      );
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
	      console.log(this.DS);
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
	              actionIcon: config.canEdit ? this.actionIcon : null
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
	    key: "toggleSingleViewNavState",
	    value: function toggleSingleViewNavState(item) {}
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
	            var date = data.interview_start || data.interview_end;
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
	                    !!date && _react2.default.createElement(
	                        'div',
	                        { className: 'Responses--label' },
	                        ' ',
	                        date,
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
	            var data = this.props.data.video;
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
	            var dataFields = ['id', 'title', 'description', 'image', 'audio', 'video', 'tags'].concat(ir);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjliN2VjODM4ZGYyZWI3MGMxYjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L01ESWNvbi9kaXN0L01ESWNvbi5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9kaXN0L1Byb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vci1yZXBvcnRhbC1iYXNlL3NyYy9yZXBvcnRhbC1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWRUaWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWN0VmlkZW8vTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RWaWRlby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2luZ2xlVmlldy9OYXZCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmdsZVZpZXcvUmVzcG9uc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9TaW5nbGVWaWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvRFNBYnN0cmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlRmxhdHRlbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jcmVhdGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNQYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzRmxhdHRlbmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2hvcnRPdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdHJpY3RJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZ2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9ub29wLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdW5pb25CeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LWRhdGFzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1zZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbImxhdW5jaFZpZGVvSGl0bGlzdCIsImNvbmZpZ05hbWUiLCJ0aHVtYnNQbGFjZWhvbGRlciIsIkVycm9yIiwiVHlwZUVycm9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXBvcnRhbCIsIm1peGluIiwic3RvcmUiLCJyZXF1aXJlIiwidWlkIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJnbG9iYWwiLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwiaXNPYmplY3QiLCJpdCIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsImtleSIsInZhbHVlIiwiZiIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJhRnVuY3Rpb24iLCJmbiIsInRoYXQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJiIiwiYyIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJPIiwiUCIsIkF0dHJpYnV0ZXMiLCJlIiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiZGVmIiwiaGFzIiwiVEFHIiwidGFnIiwic3RhdCIsInByb3RvdHlwZSIsImNvbmZpZ3VyYWJsZSIsInNoYXJlZCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiSU9iamVjdCIsImRlZmluZWQiLCJjb2YiLCJBUkciLCJ0cnlHZXQiLCJUIiwiQiIsImNhbGxlZSIsInNwbGl0IiwiY3R4IiwiaGlkZSIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiRiIsIklTX0dMT0JBTCIsIkciLCJJU19TVEFUSUMiLCJTIiwiSVNfUFJPVE8iLCJJU19CSU5EIiwiSVNfV1JBUCIsIlciLCJleHBQcm90byIsInRhcmdldCIsIm93biIsIm91dCIsIkMiLCJ2aXJ0dWFsIiwiUiIsIlUiLCJleGVjIiwiZG9jdW1lbnRFbGVtZW50IiwiTElCUkFSWSIsInJlZGVmaW5lIiwiSXRlcmF0b3JzIiwiJGl0ZXJDcmVhdGUiLCJzZXRUb1N0cmluZ1RhZyIsImdldFByb3RvdHlwZU9mIiwiSVRFUkFUT1IiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiQmFzZSIsIk5BTUUiLCJDb25zdHJ1Y3RvciIsIm5leHQiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInByb3RvIiwidmFsdWVzIiwiZW50cmllcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwibWV0aG9kcyIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiUHJvbWlzZUNhcGFiaWxpdHkiLCJyZXNvbHZlIiwicmVqZWN0IiwicHJvbWlzZSIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiU0hBUkVEIiwiaW52b2tlIiwiaHRtbCIsImNlbCIsInByb2Nlc3MiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImlkIiwibGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJhcmdzIiwiaSIsInB1c2giLCJuZXh0VGljayIsIm5vdyIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsInNldCIsImNsZWFyIiwidG9JbnRlZ2VyIiwibWluIiwicHgiLCJyYW5kb20iLCJjb25jYXQiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwidCIsInIiLCJyZWFjdCIsIm8iLCJuIiwibG9hZGVkIiwibSIsInAiLCJkZWZhdWx0IiwiTURJY29uIiwiX19lc01vZHVsZSIsIlJlZmVyZW5jZUVycm9yIiwidSIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJsIiwicHJvcHMiLCJmaWxsIiwic2l6ZSIsImljb24iLCJjb25zb2xlIiwibG9nIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicyIsImFzc2lnbiIsIl9pbWFnZU9ubG9hZCIsImJpbmQiLCJfaW1hZ2VPbmVycm9yIiwic3RhdGUiLCJzcmMiLCJwbGFjZWhvbGRlckhpZGRlbiIsInBsYWNlaG9sZGVyIiwic2l6aW5nIiwicG9zaXRpb24iLCJwcm9wb3J0aW9uIiwibG9hZGluZyIsImVycm9yIiwiX2xvYWQiLCJfY29tcHV0ZURpbWVuc2lvbnMiLCJfY29tcHV0ZVByb3BvcnRpb24iLCJhc3BlY3QiLCJzZXRTdGF0ZSIsImluZGV4T2YiLCJtYXAiLCJwYXJzZUZsb2F0Iiwic3Vic3RyaW5nIiwiZCIsInByZWxvYWQiLCJmYWRlIiwiaCIsInBsYWNlaG9sZGVyU2l6aW5nIiwiZyIsImFsdCIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInJvbGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJkaXNwbGF5Iiwib25Mb2FkIiwib25FcnJvciIsIl9yZXNldCIsInByZXZlbnRMb2FkIiwiQ29tcG9uZW50IiwiUHJvbWlzZSIsImZvcmJpZGRlbkZpZWxkIiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpbmRleCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyYWJsZSIsIml0ZXJGbiIsInN0ZXAiLCJpdGVyYXRvciIsInJlc3VsdCIsImRvbmUiLCJ1biIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiQXJyYXlQcm90byIsIkFycmF5IiwicmV0IiwiZGVzY3JpcHRvciIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIml0ZXIiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwidGhlbiIsInRhc2siLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50IiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsImdldEtleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImFycmF5SW5kZXhPZiIsIm5hbWVzIiwiJGtleXMiLCJ2IiwibmV3UHJvbWlzZUNhcGFiaWxpdHkiLCJ4IiwicHJvbWlzZUNhcGFiaWxpdHkiLCJERVNDUklQVE9SUyIsIlNQRUNJRVMiLCJLRVkiLCJEIiwiVE9fU1RSSU5HIiwicG9zIiwiU3RyaW5nIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsIm1heCIsInZhbCIsInZhbHVlT2YiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJhZGRUb1Vuc2NvcGFibGVzIiwiaXRlcmF0ZWQiLCJfdCIsIl9pIiwiX2siLCJBcmd1bWVudHMiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJtaWNyb3Rhc2siLCJuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSIsInBlcmZvcm0iLCJwcm9taXNlUmVzb2x2ZSIsIlBST01JU0UiLCIkUHJvbWlzZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJPd25Qcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJzYW1lQ29uc3RydWN0b3IiLCJpc1RoZW5hYmxlIiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsIm9uVW5oYW5kbGVkIiwidW5oYW5kbGVkIiwiaXNVbmhhbmRsZWQiLCJlbWl0Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJyZWFzb24iLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJ3cmFwcGVyIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJjYXBhYmlsaXR5IiwiYWxsIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCIkYXQiLCJwb2ludCIsIlRPX1NUUklOR19UQUciLCJET01JdGVyYWJsZXMiLCJDb2xsZWN0aW9uIiwiUmVwb3J0YWxCYXNlIiwibGV2ZWwiLCJpc0FycmF5IiwiX2xvZ2dlciIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50Iiwic3RyIiwicmVwbGFjZSIsIlVSTCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZW5kIiwidmFyaWFibGUiLCJxdWVyeSIsImxvY2F0aW9uIiwic2VhcmNoIiwidmFycyIsInBhaXIiLCJ0b0xvd2VyQ2FzZSIsInBhdGgiLCJvcmlnaW4iLCJwYXRobmFtZSIsImZvckVhY2giLCJhUGFpciIsImpvaW4iLCJNRURJQV9UWVBFUyIsIkltYWdlR3JpZFRpbGUiLCJhY3Rpb25CdXR0b24iLCJhY3Rpb25JY29uIiwib25TZWxlY3QiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJfY29tcHV0ZVRpbGVUeXBlIiwibWVkaWF0eXBlIiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJpY29uU2VydmVyIiwiZXNjYXBlIiwiaWNvbnMiLCJhdWRpbyIsInZpZGVvIiwidW5rbm93biIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwibnVtYmVyIiwiZnVuYyIsIkltYWdlR3JpZCIsIml0ZW1DbGlja0hhbmRsZXIiLCJpdGVtIiwiaXRlbXMiLCJkdW1teUl0ZW1zIiwicmVuZGVyRHVtbXlJdGVtcyIsImNvdW50IiwiYXJyYXkiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsIk5hdmlnYXRpb24iLCJjb25maWciLCJwYWdpbmF0aW9uIiwiY29udGludW91c05hdmlnYXRpb24iLCJwYWdpbmdOYXZpZ2F0aW9uIiwibG9hZE1vcmUiLCJkaXNhYmxlTmV4dEJ1dHRvbiIsInRleHRBbGlnbiIsImxvYWRQcmV2aW91c1BhZ2UiLCJsb2FkTmV4dFBhZ2UiLCJkaXNhYmxlUHJldkJ1dHRvbiIsInBhZ2VJbmZvIiwidHJhbnNsYXRlIiwiUmVhY3RWaWRlbyIsIkRTIiwiY29tcG9uZW50Iiwic2luZ2xlVmlld01vZGUiLCJzaW5nbGVWaWV3IiwibGluayIsInNpbmdsZVZpZXdWaXNpYmxlIiwic2luZ2xlVmlld0Rpc2FibGVQcmV2Iiwic2luZ2xlVmlld0Rpc2FibGVOZXh0IiwiaTE4biIsInJldHVyblRvR3JpZCIsImxvYWRQcmV2aW91c0l0ZW0iLCJuYXZpZ2F0ZUl0ZW1zIiwibG9hZE5leHRJdGVtIiwiZ2V0U2luZ2xlVmlld05hdlN0YXRlIiwiYWN0aW9uSWNvbkNsaWNrIiwicmVuZGVyU2luZ2xlVmlldyIsImNhbkVkaXQiLCJyZW5kZXJOYXZpZ2F0aW9uIiwiZGF0YUxvYWRpbmdNZXNzYWdlIiwiZ2V0UGFnZUluZm8iLCJuYXZpZ2F0aW9uUHJvcHMiLCJpbmRpdmlkdWFsUmVjb3Jkc1F1ZXN0aW9uSWRzIiwiaW5kaXZpZHVhbFJlY29yZHNLZXlMYWJlbHMiLCJyZXZlcnNlIiwiYWxsQ29sdW1ucyIsImZpbHRlciIsInJlY29yZCIsImxhYmVsIiwiaXJJZHMiLCJjb2x1bW4iLCJtZXNzYWdlIiwiZGlyZWN0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJpdGVtc0xlbmd0aCIsImN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4IiwibmV4dEluZGV4IiwibG9hZEl0ZW1Gcm9tUHJldmlvdXNQYWdlIiwibG9hZEl0ZW1Gcm9tTmV4dFBhZ2UiLCJwcm9taXNlZEl0ZW1zIiwic2luZ2xlVmlld0RhdGEiLCJuZXdJdGVtcyIsInByZXZTdGF0ZSIsImF0RGF0YUxlZnRCb3VuZGFyeUNhbkxvYWQiLCJhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCIsImN1cnJlbnRJdGVtSW5kZXgiLCJpbmRpdmlkdWFsUmVjb3JkcyIsImdldExhYmVsc0Zvck1haW5GaWVsZHMiLCJnZXRMYWJlbHNGb3JJbmRpdmlkdWFsUmVjb3JkcyIsIk5hdkJ1dHRvbiIsIlJlc3BvbnNlcyIsImNvbHVtbnMiLCJjb2x1bW5zTWFwIiwibWVkaWEiLCJkYXRlIiwiaW50ZXJ2aWV3X3N0YXJ0IiwiaW50ZXJ2aWV3X2VuZCIsIm1lZGlhSXRlbSIsInFJRCIsIk5hdkJhciIsInJldHVyblRvR3JpZEFjdGlvbiIsIlNpbmdsZVZpZXciLCJuYXZCYXJQcm9wcyIsImljX3N0YXIiLCJpY19zdGFyX2JvcmRlciIsImljX2Fycm93X2JhY2siLCJpY19hcnJvd19mb3J3YXJkIiwiaWNfdmlld19tb2R1bGUiLCJEU0Fic3RyYWN0aW9uIiwib3B0aW9ucyIsImxvY2F0aW9uRGVzZXJpYWxpemUiLCJzZXR1cERhdGFMaXN0ZW5lciIsIlkiLCJHbG9iYWwiLCJvbiIsImluaXRpYWxpc2VDb25maWciLCJtb2RpZmllciIsImZpbHRlckluZm8iLCJpbml0aWFsRGF0YUxvYWQiLCJwcm9jZXNzRGF0YSIsImNhdGNoIiwiaGFuZGxlRGF0YUxvYWRpbmdFcnJvciIsInRyaW0iLCJtb2RlIiwibmV3RGF0YSIsImRhdGFSb3ciLCJyb3dJbmRleCIsInBhcnNlZFJvdyIsImlyIiwiZGF0YUZpZWxkcyIsImNvbHVtbklEIiwicHJlcGFyZURhdGEiLCJyZXNwb25zZWlkIiwic2xpbmsiLCJwb3AiLCJnZW5lcmF0ZU1lZGlhTGluayIsImZpbGVOYW1lIiwiZHNOYW1lIiwic3VydmV5SUQiLCJyZXBvcnRpZCIsIm5leHRQYWdlIiwicHJldmlvdXNQYWdlIiwicmVzcG9uc2UiLCJpbml0aWFsTG9hZCIsImhhc1BhZ2VJbmZvIiwic29ydGluZ1BhZ2luZ1ZhbHVlcyIsInRvdGFsSGl0cyIsImZyZWVHbG9iYWwiLCJmcmVlU2VsZiIsInJvb3QiLCJiYXNlSXNOYXRpdmUiLCJnZXRWYWx1ZSIsImdldE5hdGl2ZSIsImlzT2JqZWN0TGlrZSIsImdldFJhd1RhZyIsIm9iamVjdFRvU3RyaW5nIiwibnVsbFRhZyIsInVuZGVmaW5lZFRhZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJiYXNlR2V0VGFnIiwibGlzdENhY2hlQ2xlYXIiLCJsaXN0Q2FjaGVEZWxldGUiLCJsaXN0Q2FjaGVHZXQiLCJsaXN0Q2FjaGVIYXMiLCJsaXN0Q2FjaGVTZXQiLCJMaXN0Q2FjaGUiLCJlbnRyeSIsImVxIiwiYXNzb2NJbmRleE9mIiwiaXNLZXlhYmxlIiwiZ2V0TWFwRGF0YSIsIl9fZGF0YV9fIiwibmF0aXZlQ3JlYXRlIiwiaXNTeW1ib2wiLCJJTkZJTklUWSIsInRvS2V5IiwiTWFwIiwibWFwQ2FjaGVDbGVhciIsIm1hcENhY2hlRGVsZXRlIiwibWFwQ2FjaGVHZXQiLCJtYXBDYWNoZUhhcyIsIm1hcENhY2hlU2V0IiwiTWFwQ2FjaGUiLCJyZUlzRGVlcFByb3AiLCJyZUlzUGxhaW5Qcm9wIiwiaXNLZXkiLCJ0ZXN0Iiwic2V0VG9BcnJheSIsImlkZW50aXR5IiwiYmFzZUlzQXJndW1lbnRzIiwib2JqZWN0UHJvdG8iLCJpc0FyZ3VtZW50cyIsIk1BWF9TQUZFX0lOVEVHRVIiLCJpc0xlbmd0aCIsInN5bWJvbFRhZyIsIlNldCIsInNldENhY2hlQWRkIiwic2V0Q2FjaGVIYXMiLCJTZXRDYWNoZSIsImFkZCIsInN0YWNrQ2xlYXIiLCJzdGFja0RlbGV0ZSIsInN0YWNrR2V0Iiwic3RhY2tIYXMiLCJzdGFja1NldCIsIlN0YWNrIiwiYXJyYXlQdXNoIiwib2Zmc2V0IiwiY2FzdFBhdGgiLCJiYXNlR2V0IiwiYmFzZUlzRXF1YWxEZWVwIiwiYmFzZUlzRXF1YWwiLCJvdGhlciIsImJpdG1hc2siLCJjdXN0b21pemVyIiwic3RhY2siLCJjYWNoZUhhcyIsImNhY2hlIiwic3RyaW5nVG9QYXRoIiwiYXJyYXlTb21lIiwiQ09NUEFSRV9QQVJUSUFMX0ZMQUciLCJDT01QQVJFX1VOT1JERVJFRF9GTEFHIiwiZXF1YWxBcnJheXMiLCJlcXVhbEZ1bmMiLCJpc1BhcnRpYWwiLCJhcnJMZW5ndGgiLCJvdGhMZW5ndGgiLCJzdGFja2VkIiwic2VlbiIsImFyclZhbHVlIiwib3RoVmFsdWUiLCJjb21wYXJlZCIsIm90aEluZGV4IiwicmVJc1VpbnQiLCJpc0luZGV4IiwiaXNTdHJpY3RDb21wYXJhYmxlIiwibWF0Y2hlc1N0cmljdENvbXBhcmFibGUiLCJzcmNWYWx1ZSIsImZ1bmNQcm90byIsImZ1bmNUb1N0cmluZyIsInRvU291cmNlIiwiaXNGdW5jdGlvbiIsImlzQXJyYXlMaWtlIiwic3R1YkZhbHNlIiwiZnJlZUV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwibmF0aXZlSXNCdWZmZXIiLCJpc0J1ZmZlciIsImFzeW5jVGFnIiwiZnVuY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwiYmFzZUlzVHlwZWRBcnJheSIsImJhc2VVbmFyeSIsIm5vZGVVdGlsIiwibm9kZUlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheSIsImFycmF5TGlrZUtleXMiLCJiYXNlS2V5cyIsIkRhdGFWaWV3IiwiaGFzaENsZWFyIiwiaGFzaERlbGV0ZSIsImhhc2hHZXQiLCJoYXNoSGFzIiwiaGFzaFNldCIsIkhhc2giLCJVaW50OEFycmF5IiwiV2Vha01hcCIsInRoaXNBcmciLCJhcnJheUZpbHRlciIsInByZWRpY2F0ZSIsInJlc0luZGV4IiwiYmFzZUluZGV4T2YiLCJhcnJheUluY2x1ZGVzIiwiYXJyYXlJbmNsdWRlc1dpdGgiLCJjb21wYXJhdG9yIiwiYmFzZVRpbWVzIiwiaW5oZXJpdGVkIiwiaXNBcnIiLCJpc0FyZyIsImlzQnVmZiIsImlzVHlwZSIsInNraXBJbmRleGVzIiwiYXJyYXlNYXAiLCJpdGVyYXRlZSIsImJhc2VGaW5kSW5kZXgiLCJmcm9tUmlnaHQiLCJpc0ZsYXR0ZW5hYmxlIiwiYmFzZUZsYXR0ZW4iLCJkZXB0aCIsImlzU3RyaWN0IiwiYmFzZUdldEFsbEtleXMiLCJrZXlzRnVuYyIsInN5bWJvbHNGdW5jIiwiYmFzZUhhc0luIiwiYmFzZUlzTmFOIiwic3RyaWN0SW5kZXhPZiIsImFyZ3NUYWciLCJlcXVhbEJ5VGFnIiwiZXF1YWxPYmplY3RzIiwiZ2V0VGFnIiwiYXJyYXlUYWciLCJvYmplY3RUYWciLCJvYmpJc0FyciIsIm90aElzQXJyIiwib2JqVGFnIiwib3RoVGFnIiwib2JqSXNPYmoiLCJvdGhJc09iaiIsImlzU2FtZVRhZyIsIm9iaklzV3JhcHBlZCIsIm90aElzV3JhcHBlZCIsIm9ialVud3JhcHBlZCIsIm90aFVud3JhcHBlZCIsImJhc2VJc01hdGNoIiwibWF0Y2hEYXRhIiwibm9DdXN0b21pemVyIiwib2JqVmFsdWUiLCJpc01hc2tlZCIsInJlUmVnRXhwQ2hhciIsInJlSXNIb3N0Q3RvciIsInJlSXNOYXRpdmUiLCJSZWdFeHAiLCJwYXR0ZXJuIiwiYm9vbFRhZyIsImRhdGVUYWciLCJlcnJvclRhZyIsIm1hcFRhZyIsIm51bWJlclRhZyIsInJlZ2V4cFRhZyIsInNldFRhZyIsInN0cmluZ1RhZyIsIndlYWtNYXBUYWciLCJhcnJheUJ1ZmZlclRhZyIsImRhdGFWaWV3VGFnIiwiZmxvYXQzMlRhZyIsImZsb2F0NjRUYWciLCJpbnQ4VGFnIiwiaW50MTZUYWciLCJpbnQzMlRhZyIsInVpbnQ4VGFnIiwidWludDhDbGFtcGVkVGFnIiwidWludDE2VGFnIiwidWludDMyVGFnIiwidHlwZWRBcnJheVRhZ3MiLCJiYXNlTWF0Y2hlcyIsImJhc2VNYXRjaGVzUHJvcGVydHkiLCJwcm9wZXJ0eSIsImJhc2VJdGVyYXRlZSIsImlzUHJvdG90eXBlIiwibmF0aXZlS2V5cyIsImdldE1hdGNoRGF0YSIsImhhc0luIiwiYmFzZVByb3BlcnR5IiwiYmFzZVByb3BlcnR5RGVlcCIsIm92ZXJSZXN0Iiwic2V0VG9TdHJpbmciLCJiYXNlUmVzdCIsInN0YXJ0IiwiY29uc3RhbnQiLCJiYXNlU2V0VG9TdHJpbmciLCJzeW1ib2xQcm90byIsInN5bWJvbFRvU3RyaW5nIiwiYmFzZVRvU3RyaW5nIiwiY3JlYXRlU2V0IiwiTEFSR0VfQVJSQVlfU0laRSIsImJhc2VVbmlxIiwiaW5jbHVkZXMiLCJpc0NvbW1vbiIsIm91dGVyIiwiY29tcHV0ZWQiLCJzZWVuSW5kZXgiLCJjb3JlSnNEYXRhIiwibm9vcCIsIm1hcFRvQXJyYXkiLCJzeW1ib2xWYWx1ZU9mIiwiYnl0ZUxlbmd0aCIsImJ5dGVPZmZzZXQiLCJidWZmZXIiLCJjb252ZXJ0IiwiZ2V0QWxsS2V5cyIsIm9ialByb3BzIiwib2JqTGVuZ3RoIiwib3RoUHJvcHMiLCJza2lwQ3RvciIsIm9iakN0b3IiLCJvdGhDdG9yIiwiZ2V0U3ltYm9scyIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwiaXNPd24iLCJ1bm1hc2tlZCIsInN0dWJBcnJheSIsIm5hdGl2ZUdldFN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2wiLCJwcm9taXNlVGFnIiwiZGF0YVZpZXdDdG9yU3RyaW5nIiwibWFwQ3RvclN0cmluZyIsInByb21pc2VDdG9yU3RyaW5nIiwic2V0Q3RvclN0cmluZyIsIndlYWtNYXBDdG9yU3RyaW5nIiwiQXJyYXlCdWZmZXIiLCJDdG9yIiwiY3RvclN0cmluZyIsImhhc1BhdGgiLCJoYXNGdW5jIiwiSEFTSF9VTkRFRklORUQiLCJzcHJlYWRhYmxlU3ltYm9sIiwiaXNDb25jYXRTcHJlYWRhYmxlIiwibWFza1NyY0tleSIsImFycmF5UHJvdG8iLCJzcGxpY2UiLCJsYXN0SW5kZXgiLCJtZW1vaXplIiwiTUFYX01FTU9JWkVfU0laRSIsIm1lbW9pemVDYXBwZWQiLCJvdmVyQXJnIiwiZnJlZVByb2Nlc3MiLCJiaW5kaW5nIiwidHJhbnNmb3JtIiwiYXJnIiwibmF0aXZlTWF4Iiwib3RoZXJBcmdzIiwic2hvcnRPdXQiLCJIT1RfQ09VTlQiLCJIT1RfU1BBTiIsIm5hdGl2ZU5vdyIsIkRhdGUiLCJsYXN0Q2FsbGVkIiwic3RhbXAiLCJwYWlycyIsInJlTGVhZGluZ0RvdCIsInJlUHJvcE5hbWUiLCJyZUVzY2FwZUNoYXIiLCJtYXRjaCIsInF1b3RlIiwiZGVmYXVsdFZhbHVlIiwiaXNBcnJheUxpa2VPYmplY3QiLCJGVU5DX0VSUk9SX1RFWFQiLCJyZXNvbHZlciIsIm1lbW9pemVkIiwiQ2FjaGUiLCJ1bmlvbkJ5IiwiYXJyYXlzIiwiSGl0bGlzdERhdGFzb3VyY2UiLCJfc2VhcmNoVmFsdWVzIiwicmVxdWVzdFJlc3BvbnNlIiwiX3NraXBQYWdlIiwiaXNQYWdpbmciLCJoaXRsaXN0SUQiLCJwYXJhbXMiLCJQYWdlSWQiLCJwYWdlSUQiLCJwYWdlU3RhdGVJZCIsInBhZ2VTdGF0ZUlEIiwiUHJldmlldyIsInByZXZpZXciLCJhdHRybmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYWdpbmdWYWx1ZXMiLCJwYWdlTnVtYmVyIiwicGFnaW5nRm9yd2FyZCIsInByb21pc2VSZXF1ZXN0Iiwic2VydmljZVVSTCIsInNlcmlhbGl6ZVBhcmFtcyIsInBhcnNlUmVzcG9uc2UiLCJwYXJzZSIsIl9zcHYiLCJwdiIsInN0YXJ0SWQiLCJsYXN0U3RhcnRJZCIsImZpcnN0U3RhcnRJZCIsInN0YXJ0VmFsdWUiLCJsYXN0U3RhcnRWYWx1ZSIsImZpcnN0U3RhcnRWYWx1ZSIsIkhpdGxpc3RTZXR1cCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJfY29uZmlnIiwiZ2V0T3JpZ2luYWxDb25maWciLCJfZWxlbWVudFR5cGUiLCJIaXRMaXN0RWxlbWVudFR5cGUiLCJfb3AiLCJTZWFyY2hhYmxlTGlzdE9wZXJhdG9yIiwiY2FwdGlvbnMiLCJzaW5nbGVWaWV3VGV4dHMiLCJoaXRsaXN0RGF0YSIsImNvbXBvbmVudElkIiwicGFnZUlkIiwibGFuZ3VhZ2UiLCJzZXJ2aWNlVXJsIiwicXVlcnlTZWxlY3RvciIsImpzb25EYXRlIiwiTGFuZyIsImNvbnN0ciIsImV2YWwiLCJzY3JpcHRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNmZyIsInNjcmlwdCIsInRleHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7K1FDdENBOzs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtBLEtBQU1BLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFVBQUQsRUFBdUM7QUFBQSxPQUEzQkMsaUJBQTJCLHVFQUFULElBQVM7O0FBQ2hFLE9BQUcsQ0FBQ0QsVUFBSixFQUFlO0FBQ2IsV0FBTSxJQUFJRSxLQUFKLENB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VSwyQ0FBVixDQUFOO0FBQ0Q7QUFDRjs7Ozs7O21CQUdZNjZCLFk7Ozs7Ozs7Ozs7Ozs7QUNwSmY7Ozs7QUFDQTs7Ozs7O0FBTEE7Ozs7QUFPQTM2QixRQUFPSyxRQUFQLEdBQWtCTCxPQUFPSyxRQUFQLElBQW1CLEVBQXJDO0FBQ0EseUJBQWFDLEtBQWIsQ0FBbUJOLE9BQU9LLFFBQTFCLEVBQW1DO0FBQ2pDczRCO0FBRGlDLEVBQW5DIiwiZmlsZSI6InItcmVhY3QtdmlkZW8uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjliN2VjODM4ZGYyZWI3MGMxYjMiLCIvKipcclxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMS4wMS4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5pbXBvcnQgbWFpbkNTUyBmcm9tICcuL21haW4uY3NzJztcclxuaW1wb3J0IFJlYWN0VmlkZW8gZnJvbSAnLi9SZWFjdFZpZGVvJztcclxuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tICdyLXJlcG9ydGFsLWJhc2UnO1xyXG5cclxuLyoqXHJcbiAqIGluaXRpYWxpc2UgSGl0TGlzdCBvbiBET01Db250ZW50TG9hZGVkIGZvciBhIHF1aWNrZXIgY29sZC1zdGFydCwgbm8gbmVlZCB0byB3YWl0IGZvciB0aGUgb3JpZ2luYWwgSGl0TGlzdFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnTmFtZSAtIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHBhc3NlZCB0byBET00gYXMgYSBjb25maWdcclxuICogQHBhcmFtIHtCb29sZWFufSBbdGh1bWJzUGxhY2Vob2xkZXI9dHJ1ZV0gLSBkaXNwbGF5IHRodW1icyBhcyBpbWFnZSBwbGFjZWhvbGRlcnMgaW5zdGVhZCBvZiBtZWRpYSBpY29uc1xyXG4gKiAqL1xyXG5jb25zdCBsYXVuY2hWaWRlb0hpdGxpc3QgPSAoY29uZmlnTmFtZSx0aHVtYnNQbGFjZWhvbGRlcj10cnVlKSA9PiB7XHJcbiAgaWYoIWNvbmZpZ05hbWUpe1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25maWcgaXMgbm90IHNwZWNpZmllZCEnKVxyXG4gIH0gZWxzZSBpZihjb25maWdOYW1lICYmIHR5cGVvZiBjb25maWdOYW1lICE9ICdzdHJpbmcnKXtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGNvbmZpZyBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBhICR7dHlwZW9mIGNvbmZpZ05hbWV9YClcclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICA8UmVhY3RWaWRlb1xyXG4gICAgICBjb25maWc9e2NvbmZpZ05hbWV9XHJcbiAgICAgIHRodW1ic1BsYWNlaG9sZGVyPXt0aHVtYnNQbGFjZWhvbGRlcn1cclxuICAgICAgdmVyYm9zZVxyXG4gICAgICAvPixkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxyXG4gIH0pO1xyXG59O1xyXG5cclxud2luZG93LlJlcG9ydGFsID0gd2luZG93LlJlcG9ydGFsIHx8IHt9O1xyXG5SZXBvcnRhbEJhc2UubWl4aW4od2luZG93LlJlcG9ydGFsLHtcclxuICBsYXVuY2hWaWRlb0hpdGxpc3RcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMCcgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtcInJlYWN0XCJdLHQpO2Vsc2V7dmFyIHI9dChcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwicmVhY3RcIik6ZS5yZWFjdCk7Zm9yKHZhciBvIGluIHIpKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbb109cltvXX19KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobyl7aWYocltvXSlyZXR1cm4gcltvXS5leHBvcnRzO3ZhciBuPXJbb109e2V4cG9ydHM6e30saWQ6byxsb2FkZWQ6ITF9O3JldHVybiBlW29dLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHQpLG4ubG9hZGVkPSEwLG4uZXhwb3J0c312YXIgcj17fTtyZXR1cm4gdC5tPWUsdC5jPXIsdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1yKDEpO3QuZGVmYXVsdD1vLk1ESWNvbixlLmV4cG9ydHM9dC5kZWZhdWx0fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gaShlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fWZ1bmN0aW9uIHUoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lk1ESWNvbj12b2lkIDA7dmFyIGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBvPXRbcl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxyLG8pe3JldHVybiByJiZlKHQucHJvdG90eXBlLHIpLG8mJmUodCxvKSx0fX0oKSxmPXIoMiksbD1vKGYpLGE9dC5NREljb249ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe3JldHVybiBuKHRoaXMsdCksaSh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfXJldHVybiB1KHQsZSksYyh0LFt7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLHQ9ZS5maWxsLHI9ZS5zaXplLG89ZS5pY29uLG49ZS5jaGlsZHJlbjtyZXR1cm4gY29uc29sZS5sb2codCxyLG8sbiksbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7eG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGZpbGw6dCx3aWR0aDpyLGhlaWdodDpyLHZpZXdCb3g6XCIwIDAgMjQgMjRcIixjaGlsZHJlbjpvfHxufSl9fV0pLHR9KGYuUHVyZUNvbXBvbmVudCk7YS5kZWZhdWx0UHJvcHM9e3NpemU6MjQsZmlsbDpcInJnYmEoMCwwLDAsLjg1KVwifX0sZnVuY3Rpb24odCxyKXt0LmV4cG9ydHM9ZX1dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TURJY29uLmJ1bmRsZS5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L01ESWNvbi9kaXN0L01ESWNvbi5idW5kbGUuanMiLCIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtcInJlYWN0XCJdLHQpO2Vsc2V7dmFyIG89dChcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwicmVhY3RcIik6ZS5yZWFjdCk7Zm9yKHZhciByIGluIG8pKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbcl09b1tyXX19KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQocil7aWYob1tyXSlyZXR1cm4gb1tyXS5leHBvcnRzO3ZhciBuPW9bcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiBlW3JdLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHQpLG4ubG9hZGVkPSEwLG4uZXhwb3J0c312YXIgbz17fTtyZXR1cm4gdC5tPWUsdC5jPW8sdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBpKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9ZnVuY3Rpb24gYShlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBvPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbylPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobyxyKSYmKGVbcl09b1tyXSl9cmV0dXJuIGV9LGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciByPXRbb107ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxvLHIpe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLHImJmUodCxyKSx0fX0oKSxwPW8oMSksdT1yKHApLGM9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXtuKHRoaXMsdCk7dmFyIG89aSh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsKHRoaXMsZSkpO3JldHVybiBvLl9pbWFnZU9ubG9hZD1vLl9pbWFnZU9ubG9hZC5iaW5kKG8pLG8uX2ltYWdlT25lcnJvcj1vLl9pbWFnZU9uZXJyb3IuYmluZChvKSxvLnN0YXRlPXtzcmM6dm9pZCAwLHBsYWNlaG9sZGVySGlkZGVuOiFvLnByb3BzLnBsYWNlaG9sZGVyLHNpemluZzpvLnByb3BzLnNpemluZz9vLnByb3BzLnNpemluZzpudWxsLHBvc2l0aW9uOm8ucHJvcHMucG9zaXRpb24/by5wcm9wcy5wb3NpdGlvbjpcImNlbnRlclwiLHByb3BvcnRpb246MCxsb2FkZWQ6ITEsbG9hZGluZzohMSxlcnJvcjohMX0sb31yZXR1cm4gYSh0LGUpLGwodCxbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkKCksdGhpcy5fY29tcHV0ZURpbWVuc2lvbnMoKSx0aGlzLl9jb21wdXRlUHJvcG9ydGlvbih0aGlzLnByb3BzLmFzcGVjdCl9fSx7a2V5OlwiX2NvbXB1dGVEaW1lbnNpb25zXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLHQ9ZS53aWR0aCxvPWUuaGVpZ2h0O3RoaXMuc2V0U3RhdGUoe3dpZHRoOmlzTmFOKHQpP3Q6dCtcInB4XCIsaGVpZ2h0OmlzTmFOKG8pP286bytcInB4XCJ9KX19LHtrZXk6XCJfY29tcHV0ZVByb3BvcnRpb25cIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlJiZlLmluZGV4T2YoXCI6XCIpPi0xKXt2YXIgdD1lLnNwbGl0KFwiOlwiKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlRmxvYXQoZSl9KTtpc05hTih0WzBdKXx8aXNOYU4odFsxXSl8fHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24oZSl7aWYoIWlzTmFOKHBhcnNlRmxvYXQoZS53aWR0aCkpKXJldHVybntwcm9wb3J0aW9uOihwYXJzZUZsb2F0KGUud2lkdGgpKih0WzFdL3RbMF0pKS50b1N0cmluZygpK2Uud2lkdGguc3Vic3RyaW5nKHBhcnNlRmxvYXQoZS53aWR0aCkudG9TdHJpbmcoKS5sZW5ndGgpLGhlaWdodDpcImF1dG9cIn19KX19fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnN0YXRlLHQ9ZS53aWR0aCxvPWUuaGVpZ2h0LHI9ZS5wcm9wb3J0aW9uLG49ZS5zcmMsaT1lLnNpemluZyxhPWUucG9zaXRpb24scz1lLmxvYWRpbmcsbD1lLmxvYWRlZCxwPWUucGxhY2Vob2xkZXJIaWRkZW4sYz10aGlzLnByb3BzLGQ9Yy5wcmVsb2FkLGY9Yy5mYWRlLGg9Yy5wbGFjZWhvbGRlclNpemluZyxnPWMucGxhY2Vob2xkZXIsbT1jLmFsdDtyZXR1cm4gdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiUHJvcG9ydGlvbmFsSW1hZ2VcIixzdHlsZTp7d2lkdGg6dCxoZWlnaHQ6byxwYWRkaW5nVG9wOnJ9fSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJzaXplZEltZ0RpdlwiLHJvbGU6XCJpbWdcIixzdHlsZTp7YmFja2dyb3VuZEltYWdlOm4/XCJ1cmwoXCIrbitcIilcIjp2b2lkIDAsYmFja2dyb3VuZFNpemU6aSxiYWNrZ3JvdW5kUG9zaXRpb246YSxiYWNrZ3JvdW5kUmVwZWF0Omk/XCJuby1yZXBlYXRcIjpcImluaXRpYWxcIixkaXNwbGF5Omk/XCJibG9ja1wiOlwibm9uZVwifX0pLHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3NyYzpuLGFsdDptLG9uTG9hZDp0aGlzLl9pbWFnZU9ubG9hZCxvbkVycm9yOnRoaXMuX2ltYWdlT25lcnJvcixzdHlsZTp7ZGlzcGxheTppP1wibm9uZVwiOlwiYmxvY2tcIn19KSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp7YmFja2dyb3VuZEltYWdlOmc/XCJ1cmwoXCIrZytcIilcIjp2b2lkIDAsYmFja2dyb3VuZFNpemU6aD9oOmksYmFja2dyb3VuZFBvc2l0aW9uOmEsYmFja2dyb3VuZFJlcGVhdDppP1wibm8tcmVwZWF0XCI6XCJpbml0aWFsXCJ9LGNsYXNzTmFtZTpcImltYWdlUGxhY2Vob2xkZXIgXCIrKHAmJlwiaGlkZGVuXCIpK1wiIFwiKyhkJiZmJiYhcyYmbCYmXCJmYWRlZC1vdXRcIil9KSl9fSx7a2V5OlwiX2ltYWdlT25sb2FkXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiExLGxvYWRlZDohMCxlcnJvcjohMX0pfX0se2tleTpcIl9pbWFnZU9uZXJyb3JcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2V0U3RhdGUocyh7fSx0aGlzLl9yZXNldCgpLHtlcnJvcjohMH0pKX19LHtrZXk6XCJfcmVzZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybntzcmM6dm9pZCAwLGxvYWRpbmc6ITEsbG9hZGVkOiExLGVycm9yOiExfX19LHtrZXk6XCJfbG9hZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fcmVzZXQoKTtpZighdGhpcy5wcm9wcy5wcmV2ZW50TG9hZCl7dmFyIHQ9dGhpcy5wcm9wcy5zcmM7ZS5zcmMhPT10JiYoZT1zKHt9LGUse3NyYzp0P3Q6dm9pZCAwLGxvYWRpbmc6ISF0fSkpfXRoaXMuc2V0U3RhdGUoZSl9fV0pLHR9KHUuZGVmYXVsdC5Db21wb25lbnQpO3QuZGVmYXVsdD1jfSxmdW5jdGlvbih0LG8pe3QuZXhwb3J0cz1lfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9wb3J0aW9uYWxJbWFnZS5idW5kbGUuanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9kaXN0L1Byb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZXM2L3Byb21pc2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYgKE9ic2VydmVyKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ2YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBMSUJSQVJZID8gZnVuY3Rpb24gKGEsIGIpIHtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59IDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICBpZiAocHJvbWlzZS5faCA9PSAxKSByZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYztcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVhY3Rpb247XG4gIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSB7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmIChyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSkgcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmICh4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKSByZXR1cm4geDtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUodGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiaW1wb3J0IFByb21pc2UgZnJvbSAnY29yZS1qcy9saWJyYXJ5L2VzNi9wcm9taXNlJztcblxuY2xhc3MgUmVwb3J0YWxCYXNlIHtcblxuICAvKipcbiAgICogQ29waWVzIHByb3BzIGZyb20gYSBzb3VyY2Ugb2JqZWN0IHRvIGEgdGFyZ2V0IG9iamVjdC5cbiAgICpcbiAgICogTm90ZSwgdGhpcyBtZXRob2QgdXNlcyBhIHNpbXBsZSBgZm9yLi4uaW5gIHN0cmF0ZWd5IGZvciBlbnVtZXJhdGluZ1xuICAgKiBwcm9wZXJ0aWVzLiAgVG8gZW5zdXJlIG9ubHkgYG93blByb3BlcnRpZXNgIGFyZSBjb3BpZWQgZnJvbSBzb3VyY2VcbiAgICogdG8gdGFyZ2V0IGFuZCB0aGF0IGFjY2Vzc29yIGltcGxlbWVudGF0aW9ucyBhcmUgY29waWVkLCB1c2UgYGV4dGVuZGAuXG4gICAqXG4gICAqIEBtZXRob2QgbWl4aW5cbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBUYXJnZXQgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBTb3VyY2Ugb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRhcmdldCBvYmplY3QgdGhhdCB3YXMgcGFzc2VkIGFzIGZpcnN0IGFyZ3VtZW50LlxuICAgKi9cbiAgc3RhdGljIG1peGluKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yICh2YXIgaSBpbiBzb3VyY2UpIHtcbiAgICAgIHRhcmdldFtpXSA9IHNvdXJjZVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHN0YXRpYyBfbG9nZ2VyKGxldmVsLCBhcmdzKSB7XG4gICAgLy8gYWNjZXB0IFsnZm9vJywgJ2JhciddIGFuZCBbWydmb28nLCAnYmFyJ11dXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgIH1cbiAgICAvLyBvbmx5IGFjY2VwdCBsb2dnaW5nIGZ1bmN0aW9uc1xuICAgIHN3aXRjaChsZXZlbCkge1xuICAgICAgY2FzZSAnbG9nJzpcbiAgICAgIGNhc2UgJ3dhcm4nOlxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICBjb25zb2xlW2xldmVsXS5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIF9sb2coKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHRoaXMuX2xvZ2dlcignbG9nJywgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgX3dhcm4oKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHRoaXMuX2xvZ2dlcignd2FybicsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIF9lcnJvcigpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgdGhpcy5fbG9nZ2VyKCdlcnJvcicsIGFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuYW1lZCBldmVudCB3aXRoIGBuYW1lYFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEByZXR1cm4ge0V2ZW50fSBSZXR1cm5zIGEgY3JlYXRlZCBldmVudFxuICAgKiAqL1xuICBzdGF0aWMgbmV3RXZlbnQobmFtZSl7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNwZWN0cyBpZiB0aGUgY3VycmVudCBzdHJpbmcgbWlnaHQgYmUgY29udmVydGVkIHRvIG51bWJlciBhbmQgcmVuZGVycyBpdCBhcyBudW1iZXIuIElmIHN0cmluZyBsZW5ndGggaXMgMCwgcmV0dXJucyBgbnVsbGAuIElmIG5vbmUgYXBwbGllcyByZXR1cm5zIHRoZSBzdHJpbmcgYXMgaXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSB2YWx1ZSBvZiB0aGUgY2VsbCBpZiBub3QgSFRNTCBjb250ZW50c1xuICAgKiBAcmV0dXJuIHtOdW1iZXJ8bnVsbHxTdHJpbmd9XG4gICAqICovXG4gIHN0YXRpYyBpc051bWJlcihzdHIpe1xuICAgIGlmKCFpc05hTihwYXJzZUZsb2F0KHN0cikpKXtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8sL2ksJycpOy8vIHJlbW92ZSB1bm5lY2Vzc2FyeSBjb21tYSBhcyBhIGRlbGltaXRlciBmb3IgdGhvdXNhbmRzIGZyb20gZGF0YS5cbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cik7XG4gICAgfSBlbHNlIGlmKHN0ci5sZW5ndGg9PTApe3JldHVybiBudWxsfSBlbHNlIHtyZXR1cm4gc3RyfVxuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBYSFIgd3JhcHBlZCBpbiBhIFByb21pc2VcbiAgICogQHBhcmFtIHshU3RyaW5nfSBVUkwgLSB1cmwgdG8gc2VuZCBhIGBHRVRgIHJlcXVlc3QgdG9cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmV0dXJucyBhIHRoZW4tYWJsZSBwcm9taXNlIHdpdGggYFhNTEh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dGBcbiAgICogKi9cbiAgc3RhdGljIHByb21pc2VSZXF1ZXN0KFVSTCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKCdHRVQnLCBVUkwsIHRydWUpO1xuICAgICAgeGhyLm9ubG9hZCA9ICgpPT57eGhyLnN0YXR1cyA9PSAyMDA/cmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0KTpyZWplY3QoRXJyb3IoYCR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9YCkpO31cbiAgICAgIHhoci5vbmVycm9yID0gKCk9PntyZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTt9XG4gICAgICB4aHIuc2VuZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSB2YXJpYWJsZSBsaXN0ZWQgaW4gcXVlcnkgc3RyaW5nXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gdmFyaWFibGUgLSB2YXJpYWJsZSBuYW1lIHRvIGdldCB2YWx1ZSBmb3JcbiAgICogQHBhcmFtIHtTdHJpbmc9fSBbcXVlcnk9d2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSldIC0gdGhlIHF1ZXJ5IHN0cmluZyB0byBzZWFyY2ggdmFyaWFibGUgZm9yIGluXG4gICAqIEByZXR1cm4ge1N0cmluZ30gUmV0dXJucyB2YWx1ZSBmb3IgdGhlIHZhcmlhYmxlXG4gICAqICovXG4gIHN0YXRpYyBnZXRRdWVyeVZhcmlhYmxlKHZhcmlhYmxlLHF1ZXJ5PXdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKXtcbiAgICB2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KFwiJlwiKTtcbiAgICBmb3IgKHZhciBpPTA7aTx2YXJzLmxlbmd0aDtpKyspIHtcbiAgICAgIHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICBpZigocGFpclswXSkudG9Mb3dlckNhc2UoKSA9PSB2YXJpYWJsZS50b0xvd2VyQ2FzZSgpKXtyZXR1cm4gcGFpclsxXTt9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIFxuICAvKipcbiAgICogdHVybnMgYHdpbmRvdy5sb2NhdGlvbmAgb2JqZWN0IGludG8gYW4gb2JqZWN0IHdpdGggcGFyYW1zIGFzIG5hbWVkIGtleXMgbmVjZXNzYXJ5IHRvIHJlY29uc3RydWN0IHRoZSBVUkxcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBbbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb25dIC0gYSB3aW5kb3cubG9jYXRpb24gb2JqZWN0LCBieSBkZWZhdWx0IG9mIHRoZSBob3N0IHdpbmRvdyB3aGVyZSB0aGUgc2NyaXB0IGlzIGV4ZWN1dGVkXG4gICAqIEByZXR1cm5zIHt7cGF0aDpTdHJpbmcsIHF1ZXJ5Ok9iamVjdH19IGEgYGxvY2F0aW9uYCBvYmplY3RcbiAgICogKi9cbiAgc3RhdGljIGxvY2F0aW9uRGVzZXJpYWxpemUobG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24pe1xuICAgIGxldCBvID0ge1xuICAgICAgcGF0aDogbG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBxdWVyeTp7fVxuICAgIH07XG4gICAgbG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKS5zcGxpdCgvJi8pLmZvckVhY2gocGFpcj0+e1xuICAgICAgbGV0IGFQYWlyPSBwYWlyLnNwbGl0KC89Lyk7XG4gICAgICBvLnF1ZXJ5W2FQYWlyWzBdLnRvTG93ZXJDYXNlKCldID0gYVBhaXJbMV1cbiAgICB9KTtcbiAgICByZXR1cm4gb1xuICB9XG5cbiAgLyoqXG4gICAqIFR1cm5zIGEgYGxvY2F0aW9uYCBvYmplY3QgKHJlc3VsdCBvZiBgbG9jYXRpb25EZXNlcmlhbGl6ZWApIGludG8gYSBVUkxcbiAgICogQHBhcmFtIHt7cGF0aDpTdHJpbmcsIHF1ZXJ5Ok9iamVjdH19IGxvY2F0aW9uIC0gYW4gb2JqZWN0IHdpdGggcGFyYW1zIGFuZCBhIHVybFxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtIGEgVVJMIHN0cmluZ1xuICAgKiAqL1xuICBzdGF0aWMgbG9jYXRpb25TZXJpYWxpemUobG9jYXRpb24pe1xuICAgIGxldCBxdWVyeT1bXTtcbiAgICBmb3IobGV0IGtleSBpbiBsb2NhdGlvbi5xdWVyeSl7XG4gICAgICBxdWVyeS5wdXNoKFtrZXksbG9jYXRpb24ucXVlcnlba2V5XV0uam9pbignPScpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGggKyAnPycgKyBxdWVyeS5qb2luKCcmJyk7XG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0YWxCYXNlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItcmVwb3J0YWwtYmFzZS9zcmMvcmVwb3J0YWwtYmFzZS5qcyIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1nIGZyb20gJ1Byb3BvcnRpb25hbEltYWdlJztcclxuXHJcbmNvbnN0IE1FRElBX1RZUEVTID0gWydpbWFnZScsICdhdWRpbycsICd2aWRlbyddO1xyXG5cclxuY2xhc3MgSW1hZ2VHcmlkVGlsZSBleHRlbmRzIFB1cmVDb21wb25lbnR7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHRpbGUgZm9yIGltYWdlIGxpc3RcclxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuaW1hZ2UgLSBpbWFnZSB1cmxcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMucGxhY2Vob2xkZXIgLSBhIHBsYWNlaG9sZGVyIGltYWdlXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyU2l6aW5nIC0gU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlci4gQnkgZGVmYXVsdCBpdCdzIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNyY2AgaW1hZ2UsIGJ1dCBzZXQgdG8gYGluaXRpYWxgIG9yIG90aGVyIHZhbGlkIGBiYWNrZ3JvdW5kLXNpemVgIHZhbHVlIHRvIG92ZXJyaWRlLlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5tZWRpYXR5cGUgLSBhIGRlZmF1bHQgbWVkaWEgaWNvbiBpbnN0ZWFkIG9mIHRoZSBwbGFjZWhvbGRlciBpbWFnZTogb25lIG9mIGBpbWFnZWAsYGF1ZGlvYCxgdmlkZW9gXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5pY29uQ29sb3I9XCIjY2NjY2NjXCJdIC0gZGVmYXVsdCBwbGFjZWhvbGRlciBtZWRpYSBpY29uIGNvbG9yXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5pY29uU2l6ZT00OF0gLSBkZWZhdWx0IHBsYWNlaG9sZGVyIG1lZGlhIGljb24gc2l6ZVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuYXNwZWN0PVwiMTY6OVwiXSAtIGFzcGVjdCByYXRpbyBvZiB0aGUgaW1hZ2UgdG8gYmUgaW4gdGhlIHRpbGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy50aXRsZSAtIHRpdGxlIG9mIHRoZSB2aWRlb1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5kZXNjcmlwdGlvbiAtIGRlc2NyaXB0aW9uIG9mIHRoZSB2aWRlb1xyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMuYWN0aW9uSWNvbiAtIGljb24gdG8gZGlzcGxheSBhcyB0aGUgYWN0aW9uIGljb24uIEl0IGFsc28gaGFzIHRvIGhhdmUgYSBjYWxsYmFjayBhdHRhY2hlZCB0byBpdCB3aGVuIHBhc3NlZC5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblNlbGVjdCAtIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGxpbmsgaXMgY2xpY2tlZFxyXG4gICAqICovXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBhY3Rpb25CdXR0b24gPSBudWxsO1xyXG4gICAgY29uc3Qge2FjdGlvbkljb24sb25TZWxlY3QsYXNwZWN0LHRpdGxlLHBsYWNlaG9sZGVyU2l6aW5nLGltYWdlLGRlc2NyaXB0aW9ufT10aGlzLnByb3BzO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aW9uSWNvbikge1xyXG4gICAgICBhY3Rpb25CdXR0b24gPSA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWVkaXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWFjdGlvbi1pY29uIHJpcHBsZVwiPnthY3Rpb25JY29ufTwvZGl2PlxyXG4gICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWNvdmVyXCIgb25DbGljaz17b25TZWxlY3R9PlxyXG4gICAgICAgICAgPEltZ1xyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cclxuICAgICAgICAgICAgc2l6aW5nPVwiY292ZXJcIlxyXG4gICAgICAgICAgICBwcmVsb2FkPXt0cnVlfVxyXG4gICAgICAgICAgICBmYWRlPXt0cnVlfVxyXG4gICAgICAgICAgICBhbHQ9e3RpdGxlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5fY29tcHV0ZVRpbGVUeXBlKCl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyU2l6aW5nPXtwbGFjZWhvbGRlclNpemluZ31cclxuICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLW1ldGFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS10aXRsZSBlbGxpcHNpc1wiIG9uQ2xpY2s9e29uU2VsZWN0fT57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tZGVzY3JpcHRpb24gZWxsaXBzaXNcIj57ZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHthY3Rpb25CdXR0b259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgX2NvbXB1dGVUaWxlVHlwZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHtwbGFjZWhvbGRlcixtZWRpYXR5cGUsaWNvblNpemUsaWNvbkNvbG9yfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGlmICghcGxhY2Vob2xkZXIgJiYgbWVkaWF0eXBlKSB7XHJcbiAgICAgICAgaWYgKE1FRElBX1RZUEVTLmluZGV4T2YobWVkaWF0eXBlKSA9PT0gLTEpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIHR5cGUgXCIke21lZGlhdHlwZX1cIiBpcyBzcGVjaWZpZWRgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaWNvbiA9IEltYWdlR3JpZFRpbGUuaWNvblNlcnZlcihtZWRpYXR5cGUsIGljb25TaXplLCBpY29uQ29sb3IpO1xyXG4gICAgICAgIHJldHVybiAnZGF0YTppbWFnZS9zdmcreG1sLCcgKyBlc2NhcGUoaWNvbik7XHJcbiAgICAgIH0gZWxzZSBpZighIXBsYWNlaG9sZGVyKXtcclxuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZXNjYXBlKEltYWdlR3JpZFRpbGUuaWNvblNlcnZlcigndW5rbm93bicsIGljb25TaXplLCBpY29uQ29sb3IpKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIGljb24gd2l0aCBhIGNvcnJlY3QgZmlsbCBjb2xvclxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gaWNvbiBuYW1lIChvbmUgb2YgYGltYWdlYCwgYHZpZGVvYCwgYGF1ZGlvYClcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3NpemU9MjRdIC0gaWNvbiBzaXplIGluIHBpeGVsc1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZmlsbD1cIiNjY2NjY2NcIl0gLSB2YWxpZCBDU1MgY29sb3IgZGVjbGFyYXRpb25cclxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gICAqICovXHJcbiAgc3RhdGljIGljb25TZXJ2ZXIobmFtZSwgc2l6ZSA9IDQ4LCBmaWxsID0gXCIjY2NjY2NjXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGljb25zID0ge1xyXG4gICAgICAgIGltYWdlOiBgPHBhdGggZD1cIk0yMSAxOVY1YzAtMS4xLS45LTItMi0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ6TTguNSAxMy41bDIuNSAzLjAxTDE0LjUgMTJsNC41IDZINWwzLjUtNC41elwiLz5gLFxyXG4gICAgICAgIGF1ZGlvOiBgPHBhdGggZD1cIk0xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnpcIi8+YCxcclxuICAgICAgICB2aWRlbzogYDxwYXRoIGQ9XCJNMTggNGwyIDRoLTNsLTItNGgtMmwyIDRoLTNsLTItNEg4bDIgNEg3TDUgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY0aC00elwiLz5gLFxyXG4gICAgICAgIHVua25vd246IGA8cGF0aCBkPVwiTTIxIDV2Ni41OWwtMy0zLjAxLTQgNC4wMS00LTQtNCA0LTMtMy4wMVY1YzAtMS4xLjktMiAyLTJoMTRjMS4xIDAgMiAuOSAyIDJ6bS0zIDYuNDJsMyAzLjAxVjE5YzAgMS4xLS45IDItMiAySDVjLTEuMSAwLTItLjktMi0ydi02LjU4bDMgMi45OSA0LTQgNCA0IDQtMy45OXpcIi8+YCxcclxuICAgICAgfTtcclxuICAgICAgaWYgKCFpY29uc1tuYW1lXSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaWNvbiBcIiR7bmFtZX1cIiBpcyBub3Qgb24gdGhlIGxpc3RgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYDxzdmcgZmlsbD1cIiR7ZmlsbH1cIiBoZWlnaHQ9XCIke3NpemV9XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiJHtzaXplfVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4ke2ljb25zW25hbWVdfTwvc3ZnPmBcclxuICAgIH0gY2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuSW1hZ2VHcmlkVGlsZS5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2UgICAgICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhY2Vob2xkZXIgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhY2Vob2xkZXJTaXppbmc6IFByb3BUeXBlcy5vbmVPZihbJ2NvbnRhaW4nLCAnY292ZXInLCAnaW5pdGlhbCddKSxcclxuICBtZWRpYXR5cGUgICAgICAgIDogUHJvcFR5cGVzLm9uZU9mKE1FRElBX1RZUEVTKSxcclxuICBpY29uQ29sb3IgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpY29uU2l6ZSAgICAgICAgIDogUHJvcFR5cGVzLm51bWJlcixcclxuICBhc3BlY3QgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0aXRsZSAgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZXNjcmlwdGlvbiAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhY3Rpb25JY29uICAgICAgIDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25TZWxlY3QgICAgICAgICA6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcblxyXG5JbWFnZUdyaWRUaWxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpY29uQ29sb3I6IFwiI2NjY2NjY1wiLFxyXG4gIGljb25TaXplIDogNDgsXHJcbiAgYXNwZWN0ICAgOiBcIjE2OjlcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JpZFRpbGVcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlR3JpZFRpbGUvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIFB1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlR3JpZFRpbGUgZnJvbSAnLi4vSW1hZ2VHcmlkVGlsZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIGBJbWFnZUdyaWRgIGlzIGEgc3RhdGVsZXNzIFJlYWN0IGNvbXBvbmVudCB0aGF0IGFsbG93cyB0byBjb21wdXRlIGFuIGFycmF5IG9mIEltYWdlR3JpZFRpbGVzIGZyb20gYGl0ZW1zYCBwYXNzZWQgaW4gcHJvcHNcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzLml0ZW1zIC0gYW4gYXJyYXkgb2YgaXRlbXMgYHtpZDpOdW1iZXJ8U3RyaW5nLCBpbWFnZTpTdHJpbmcsIG1lZGlhdHlwZTo/U3RyaW5nLCBwbGFjZWhvbGRlcjo/U3RyaW5nLCB0aXRsZTpTdHJpbmcsZGVzY3JpcHRpb246U3RyaW5nfWBcclxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmFzcGVjdCAtIGFzcGVjdCByYXRpbyBmb3IgdGhlIEltYWdlR3JpZFRpbGUgaW1hZ2VcclxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IHByb3BzLmFjdGlvbkljb24gLSBhY3Rpb24gaWNvbiBKU1ggd2l0aCBhIGJvdW5kIGhhbmRsZXJcclxuICogQHBhcmFtIHs/U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlclNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIuIEJ5IGRlZmF1bHQgaXQncyB0aGUgc2FtZSBhcyBmb3IgdGhlIGBzcmNgIGltYWdlLCBidXQgc2V0IHRvIGBpbml0aWFsYCBvciBvdGhlciB2YWxpZCBgYmFja2dyb3VuZC1zaXplYCB2YWx1ZSB0byBvdmVycmlkZS5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMub25TZWxlY3QgLSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkIG9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBwcm9wcy5kdW1teUl0ZW1zIC0gZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZCBvblxyXG4gKiAqL1xyXG5jbGFzcyBJbWFnZUdyaWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuXHJcbiAgaXRlbUNsaWNrSGFuZGxlciA9IChpdGVtKSA9PiAoZXZlbnQpID0+IHRoaXMucHJvcHMub25TZWxlY3QoaXRlbSk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtpdGVtcywgZHVtbXlJdGVtcywgYXNwZWN0LCBwbGFjZWhvbGRlclNpemluZywgYWN0aW9uSWNvbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRcIj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgPEltYWdlR3JpZFRpbGVcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cclxuICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICBtZWRpYXR5cGU9e2l0ZW0ubWVkaWF0eXBlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpdGVtLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyU2l6aW5nPXtpdGVtLmltYWdlP3BsYWNlaG9sZGVyU2l6aW5nOidpbml0aWFsJ31cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBhY3Rpb25JY29uPXt0eXBlb2YgYWN0aW9uSWNvbj09PSdmdW5jdGlvbic/YWN0aW9uSWNvbihpdGVtKTpudWxsfVxyXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLml0ZW1DbGlja0hhbmRsZXIoaXRlbSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICB7ZHVtbXlJdGVtcyAmJiB0aGlzLnJlbmRlckR1bW15SXRlbXMoZHVtbXlJdGVtcyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlckR1bW15SXRlbXMoY291bnQpIHtcclxuICAgIGNvbnN0IGR1bW15SXRlbXMgPSBbXTtcclxuICAgIHdoaWxlIChjb3VudC0tKSB7XHJcbiAgICAgIGR1bW15SXRlbXMucHVzaCg8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGVcIiBrZXk9e2BkdW1teSR7Y291bnR9YH0vPilcclxuICAgIH1cclxuICAgIHJldHVybiBkdW1teUl0ZW1zXHJcbiAgfVxyXG59XHJcblxyXG5JbWFnZUdyaWQucHJvcFR5cGVzID0ge1xyXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgYXNwZWN0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGFjdGlvbkljb246IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gIHBsYWNlaG9sZGVyU2l6aW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGR1bW15SXRlbXM6IFByb3BUeXBlcy5udW1iZXJcclxufTtcclxuXHJcbkltYWdlR3JpZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZHVtbXlJdGVtczogMTJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JpZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlR3JpZC9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZylcclxuICAgICAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBjb25maWcucGFnaW5hdGlvbjtcclxuICAgICAgICAgICAgaWYgKHBhZ2luYXRpb24gPT09ICdjb250aW51b3VzJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGludW91c05hdmlnYXRpb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2luZ05hdmlnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRpbnVvdXNOYXZpZ2F0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbG9hZE1vcmUsIGRpc2FibGVOZXh0QnV0dG9uIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uUm93XCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gZmxhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9hZE1vcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVOZXh0QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPkxvYWQgbW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHBhZ2luZ05hdmlnYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBsb2FkUHJldmlvdXNQYWdlLFxyXG4gICAgICAgICAgICBsb2FkTmV4dFBhZ2UsXHJcbiAgICAgICAgICAgIGRpc2FibGVOZXh0QnV0dG9uLFxyXG4gICAgICAgICAgICBkaXNhYmxlUHJldkJ1dHRvbixcclxuICAgICAgICAgICAgcGFnZUluZm8sXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBhY2NlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvYWRQcmV2aW91c1BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVQcmV2QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ1JFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTJyl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsQnV0dG9uIGFjY2VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9hZE5leHRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlTmV4dEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdSRVBPUlRfU0lOR0xFVklFV19ORVhUJyl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57cGFnZUluZm99PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VmlkZW8vTmF2aWdhdGlvbi5qcyIsIi8vQGZsb3dcclxuaW1wb3J0IHR5cGUge1N0YXRlLCBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZUdyaWQgZnJvbSBcIi4uL0ltYWdlR3JpZFwiO1xyXG5pbXBvcnQgU2luZ2xlVmlldyBmcm9tIFwiLi4vU2luZ2xlVmlld1wiO1xyXG5pbXBvcnQgRFNBYnN0cmFjdGlvbiBmcm9tICcuLi9EU0Fic3RyYWN0aW9uJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nXHJcbmltcG9ydCBTaW5nbGVWaWV3UmVzcG9uc2VzIGZyb20gJy4uL1NpbmdsZVZpZXcvUmVzcG9uc2VzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFZpZGVvIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIERTID0gRFNBYnN0cmFjdGlvbih7XHJcbiAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLFxyXG4gICAgdGh1bWJzUGxhY2Vob2xkZXI6IHRoaXMucHJvcHMudGh1bWJzUGxhY2Vob2xkZXIsXHJcbiAgICBjb21wb25lbnQ6IHRoaXNcclxuICB9KTtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpdGVtczogbnVsbCxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICAgIGNvbmZpZzogbnVsbCxcclxuICAgIHNpbmdsZVZpZXdNb2RlOiAndmlldycsXHJcbiAgICBzaW5nbGVWaWV3OiB7XHJcbiAgICAgIGxpbms6ICcnXHJcbiAgICB9LFxyXG4gICAgc2luZ2xlVmlld1Zpc2libGU6IGZhbHNlLFxyXG4gICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2OiBmYWxzZSxcclxuICAgIHNpbmdsZVZpZXdEaXNhYmxlTmV4dDogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgdHJhbnNsYXRlID0gdGhpcy5EUy5pMThuLmJpbmQodGhpcy5EUyk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXRlbXMsIHNpbmdsZVZpZXdWaXNpYmxlLCBlcnJvciwgY29uZmlnIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IHJlbmRlciA9IG51bGw7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLkRTKTtcclxuICAgIGlmICghZXJyb3IgJiYgQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHJlbmRlciA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YEdyaWRDb250YWluZXIgJHshc2luZ2xlVmlld1Zpc2libGUgPyAnR3JpZFZpZXcnIDogJyd9YH0+XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJTaW5nbGVWaWV3KCl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZENvbnRhaW5lclwiIHN0eWxlPXt7IGRpc3BsYXk6ICFzaW5nbGVWaWV3VmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIDxJbWFnZUdyaWRcclxuICAgICAgICAgICAgICBhc3BlY3Q9XCIxNjo5XCJcclxuICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdH1cclxuICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XHJcbiAgICAgICAgICAgICAgYWN0aW9uSWNvbj17Y29uZmlnLmNhbkVkaXQgPyB0aGlzLmFjdGlvbkljb24gOiBudWxsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJOYXZpZ2F0aW9uKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuRFMpIHtcclxuICAgICAgICByZW5kZXIgPSAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdyaWRDb250YWluZXIgSW1hZ2VHcmlkXCI+e3RoaXMuZGF0YUxvYWRpbmdNZXNzYWdlKCl9PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSGl0bGlzdERhdGFzb3VyY2UgaXMgbm90IGF2YWlsYWJsZScpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZW5kZXJcclxuICB9XHJcblxyXG4gIHJlbmRlck5hdmlnYXRpb24oKSB7XHJcbiAgICBjb25zdCB7IGxvYWRQcmV2aW91c1BhZ2UsIGxvYWROZXh0UGFnZSwgbG9hZE1vcmUsIGRpc2FibGVOZXh0QnV0dG9uLCBkaXNhYmxlUHJldkJ1dHRvbiwgZ2V0UGFnZUluZm8gfSA9IHRoaXMuRFM7XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uUHJvcHMgPSB7XHJcbiAgICAgIGxvYWRQcmV2aW91c1BhZ2UsXHJcbiAgICAgIGxvYWROZXh0UGFnZSxcclxuICAgICAgbG9hZE1vcmUsXHJcbiAgICAgIGRpc2FibGVOZXh0QnV0dG9uLFxyXG4gICAgICBkaXNhYmxlUHJldkJ1dHRvbixcclxuICAgICAgcGFnZUluZm86IGdldFBhZ2VJbmZvKCksXHJcbiAgICAgIGNvbmZpZzogdGhpcy5zdGF0ZS5jb25maWcsXHJcbiAgICAgIHRyYW5zbGF0ZTogdGhpcy50cmFuc2xhdGVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPE5hdmlnYXRpb24gey4uLm5hdmlnYXRpb25Qcm9wc30gLz5cclxuICB9XHJcblxyXG4gIHJlbmRlclNpbmdsZVZpZXcoKSB7XHJcbiAgICBjb25zdCB7IHNpbmdsZVZpZXdWaXNpYmxlLCBzaW5nbGVWaWV3LCBzaW5nbGVWaWV3RGlzYWJsZVByZXYsIHNpbmdsZVZpZXdEaXNhYmxlTmV4dCwgc2luZ2xlVmlld01vZGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gc2luZ2xlVmlld1Zpc2libGUgPyAoXHJcbiAgICAgIDxTaW5nbGVWaWV3XHJcbiAgICAgICAgcmV0dXJuVG9HcmlkQWN0aW9uPXt0aGlzLnJldHVyblRvR3JpZH1cclxuICAgICAgICBsb2FkUHJldmlvdXNJdGVtPXt0aGlzLmxvYWRQcmV2aW91c0l0ZW19XHJcbiAgICAgICAgbG9hZE5leHRJdGVtPXt0aGlzLmxvYWROZXh0SXRlbX1cclxuICAgICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXY9e3NpbmdsZVZpZXdEaXNhYmxlUHJldn1cclxuICAgICAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHQ9e3NpbmdsZVZpZXdEaXNhYmxlTmV4dH1cclxuICAgICAgPlxyXG4gICAgICAgIHtzaW5nbGVWaWV3TW9kZSA9PT0gJ2VkaXQnID9cclxuICAgICAgICAgICg8aWZyYW1lIGNsYXNzTmFtZT1cInJlbmRlckFyZWFcIiBzcmM9e3NpbmdsZVZpZXcubGlua30gLz4pXHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICAoPFNpbmdsZVZpZXdSZXNwb25zZXMgZGF0YT17c2luZ2xlVmlld30gY29sdW1ucz17dGhpcy5pbmRpdmlkdWFsUmVjb3Jkc1F1ZXN0aW9uSWRzfSBjb2x1bW5zTWFwPXt0aGlzLmluZGl2aWR1YWxSZWNvcmRzS2V5TGFiZWxzfSAvPilcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2luZ2xlVmlldz5cclxuICAgICkgOiBudWxsXHJcbiAgfVxyXG5cclxuICBnZXQgaW5kaXZpZHVhbFJlY29yZHNRdWVzdGlvbklkcygpIHtcclxuICAgIGNvbnN0IHsgaW5kaXZpZHVhbFJlY29yZHMgfSA9IHRoaXMuRFMuY29uZmlnKCk7XHJcbiAgICByZXR1cm4gaW5kaXZpZHVhbFJlY29yZHMgIT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KGluZGl2aWR1YWxSZWNvcmRzKSA/IGluZGl2aWR1YWxSZWNvcmRzIDogW11cclxuICB9XHJcblxyXG4gIGdldCBpbmRpdmlkdWFsUmVjb3Jkc0tleUxhYmVscygpIHtcclxuICAgIHJldHVybiB7IC4uLnRoaXMuZ2V0TGFiZWxzRm9yTWFpbkZpZWxkcygpLCAuLi50aGlzLmdldExhYmVsc0ZvckluZGl2aWR1YWxSZWNvcmRzKCkgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWxzRm9yTWFpbkZpZWxkcygpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuRFMuY29uZmlnKCk7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nXS5yZXZlcnNlKCkuZm9yRWFjaChrZXkgPT5cclxuICAgICAgbWFwW2tleV0gPSB0aGlzLkRTLmFsbENvbHVtbnMuZmlsdGVyKHJlY29yZCA9PlxyXG4gICAgICAgIHJlY29yZC5rZXkgPT09IGNvbmZpZ1trZXldXHJcbiAgICAgIClbMF0ubGFiZWxcclxuICAgIClcclxuICAgIHJldHVybiBtYXA7XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbHNGb3JJbmRpdmlkdWFsUmVjb3JkcygpIHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgY29uc3QgaXJJZHMgPSB0aGlzLmluZGl2aWR1YWxSZWNvcmRzUXVlc3Rpb25JZHM7XHJcbiAgICB0aGlzLkRTLmFsbENvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoaXJJZHMuaW5kZXhPZihjb2x1bW4ua2V5KSA+IC0xKSB7XHJcbiAgICAgICAgbWFwW2NvbHVtbi5rZXldID0gY29sdW1uLmxhYmVsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbWFwO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBkYXRhTG9hZGluZ01lc3NhZ2UoKSB7XHJcbiAgICBsZXQgbWVzc2FnZTtcclxuICAgIGNvbnN0IHsgaXRlbXMsIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIG1lc3NhZ2UgPSAnZXJyb3JMb2FkaW5nJ1xyXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgbWVzc2FnZSA9ICdSRVBPUlRfU0lOR0xFVklFV19OT1RISU5HRk9VTkQnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlID0gJ2xvYWRpbmdEYXRhJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuRFMuaTE4bihtZXNzYWdlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuVG9HcmlkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgc2luZ2xlVmlldzoge1xyXG4gICAgICAgIGxpbms6ICcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGxvYWRQcmV2aW91c0l0ZW0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZUl0ZW1zKCdiYWNrJylcclxuICB9XHJcblxyXG4gIGxvYWROZXh0SXRlbSA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlSXRlbXMoJ2ZvcndhcmQnKVxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVJdGVtcyhkaXJlY3Rpb246ICdmb3J3YXJkJyB8ICdiYWNrd2FyZCcpOiB2b2lkIHtcclxuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uVHlwZSA9IHRoaXMuc3RhdGUuY29uZmlnLnBhZ2luYXRpb247XHJcbiAgICBsZXQgaXRlbXNMZW5ndGggPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgY3VycmVudFNpbmdsZVZpZXdJdGVtSW5kZXggPSBpdGVtcy5pbmRleE9mKHRoaXMuc3RhdGUuc2luZ2xlVmlldyk7XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBkaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4ICsgMSA6IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4IC0gMTtcclxuXHJcbiAgICBjb25zdCBsb2FkSXRlbUZyb21QcmV2aW91c1BhZ2UgPSBuZXh0SW5kZXggPCAwICYmICF0aGlzLkRTLmRpc2FibGVQcmV2QnV0dG9uO1xyXG4gICAgY29uc3QgbG9hZEl0ZW1Gcm9tTmV4dFBhZ2UgPSBuZXh0SW5kZXggPiBpdGVtc0xlbmd0aCAmJiAhdGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbjtcclxuXHJcbiAgICBsZXQgcHJvbWlzZWRJdGVtcyA9IFByb21pc2UucmVzb2x2ZShpdGVtcyk7XHJcbiAgICAvLyBhc3NpZ24gaXRlbXMgdG8gdGhlbmFibGUgcHJvbWlzZXMgaWYgcmVxdWVzdGVkIGl0ZW0gaXMgb3V0c2lkZSBvZiBkYXRhIGJvdW5kYXJpZXNcclxuICAgIGlmIChsb2FkSXRlbUZyb21QcmV2aW91c1BhZ2UpIHtcclxuICAgICAgcHJvbWlzZWRJdGVtcyA9IHRoaXMuRFMubG9hZFByZXZpb3VzUGFnZSgpO1xyXG4gICAgfSBlbHNlIGlmIChsb2FkSXRlbUZyb21OZXh0UGFnZSkge1xyXG4gICAgICBwcm9taXNlZEl0ZW1zID0gcGFnaW5hdGlvblR5cGUgIT09ICdjb250aW51b3VzJyA/IHRoaXMuRFMubG9hZE5leHRQYWdlKCkgOiB0aGlzLkRTLmxvYWRNb3JlKCk7XHJcbiAgICB9XHJcbiAgICAvKiAgICAgY29uc3QgaXRlbXNBcmVQcm9taXNlZCA9ICFBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5oYXNPd25Qcm9wZXJ0eSgndGhlbicpO1xyXG4gICAgICAgIGlmICghaXRlbXNBcmVQcm9taXNlZCkge1xyXG4gICAgICAgICAgcHJvbWlzZWRJdGVtcyA9IFByb21pc2UucmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICovXHJcbiAgICBwcm9taXNlZEl0ZW1zLnRoZW4oKCkgPT4ge1xyXG4gICAgICBsZXQgc2luZ2xlVmlld0RhdGE7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgICBjb25zdCBuZXdJdGVtcyA9IHByZXZTdGF0ZS5pdGVtcztcclxuICAgICAgICBjb25zdCBhdERhdGFMZWZ0Qm91bmRhcnlDYW5Mb2FkID0gbmV4dEluZGV4IDwgMCAmJiAhcHJldlN0YXRlLnNpbmdsZVZpZXdEaXNhYmxlUHJldjtcclxuICAgICAgICBjb25zdCBhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCA9IG5leHRJbmRleCA+IGl0ZW1zTGVuZ3RoICYmICFwcmV2U3RhdGUuc2luZ2xlVmlld0Rpc2FibGVOZXh0ICYmIHBhZ2luYXRpb25UeXBlICE9PSAnY29udGludW91cyc7XHJcbiAgICAgICAgaWYgKGF0RGF0YUxlZnRCb3VuZGFyeUNhbkxvYWQpIHtcclxuICAgICAgICAgIHNpbmdsZVZpZXdEYXRhID0gbmV3SXRlbXNbbmV3SXRlbXMubGVuZ3RoIC0gMV1cclxuICAgICAgICB9IGVsc2UgaWYgKGF0RGF0YVJpZ2h0Qm91bmRhcnlDYW5Mb2FkKSB7XHJcbiAgICAgICAgICBzaW5nbGVWaWV3RGF0YSA9IG5ld0l0ZW1zWzBdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNpbmdsZVZpZXdEYXRhID0gbmV3SXRlbXNbbmV4dEluZGV4XVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnRoaXMuZ2V0U2luZ2xlVmlld05hdlN0YXRlKG5leHRJbmRleCksXHJcbiAgICAgICAgICBzaW5nbGVWaWV3OiBzaW5nbGVWaWV3RGF0YSxcclxuICAgICAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2luZ2xlVmlld05hdlN0YXRlKGl0ZW0pIHsgfVxyXG5cclxuICBvblNlbGVjdCA9IChpdGVtKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLi4udGhpcy5nZXRTaW5nbGVWaWV3TmF2U3RhdGUodGhpcy5zdGF0ZS5pdGVtcy5pbmRleE9mKGl0ZW0pKSxcclxuICAgICAgc2luZ2xlVmlldzogaXRlbSxcclxuICAgICAgc2luZ2xlVmlld1Zpc2libGU6IHRydWUsXHJcbiAgICAgIHNpbmdsZVZpZXdNb2RlOiAndmlldydcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgZ2V0U2luZ2xlVmlld05hdlN0YXRlKGN1cnJlbnRJdGVtSW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xyXG4gICAgbGV0IHNpbmdsZVZpZXdEaXNhYmxlTmV4dCA9IGZhbHNlLFxyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXYgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoY3VycmVudEl0ZW1JbmRleCA8PSAwICYmIHRoaXMuRFMuZGlzYWJsZVByZXZCdXR0b24pIHtcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50SXRlbUluZGV4ID49IGl0ZW1zLmxlbmd0aCAtIDEgJiYgdGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbikge1xyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2LFxyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGlvbkljb25DbGljayA9IChpdGVtKSA9PiAoKSA9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgIC4uLnRoaXMuZ2V0U2luZ2xlVmlld05hdlN0YXRlKHRoaXMuc3RhdGUuaXRlbXMuaW5kZXhPZihpdGVtKSksXHJcbiAgICBzaW5nbGVWaWV3OiBpdGVtLFxyXG4gICAgc2luZ2xlVmlld1Zpc2libGU6IHRydWUsXHJcbiAgICBzaW5nbGVWaWV3TW9kZTogJ2VkaXQnXHJcbiAgfSlcclxuICBhY3Rpb25JY29uID0gKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBvbkNsaWNrPXt0aGlzLmFjdGlvbkljb25DbGljayhpdGVtKX0+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3pcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VmlkZW8vaW5kZXguanMiLCIvL0BmbG93XHJcbmltcG9ydCB0eXBlIHtOYXZCdXR0b25Qcm9wc30gZnJvbSAnLi90eXBlcydcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNREljb24gZnJvbSAnTURJY29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkJ1dHRvbiBleHRlbmRzIFB1cmVDb21wb25lbnQ8TmF2QnV0dG9uUHJvcHMsIGFueT4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaWNvbiwgLi4ud3JhcHBlciB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlNpbmdsZVZpZXctLW5hdi1idXR0b24gcmlwcGxlXCIgey4uLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPE1ESWNvbiBpY29uPXtpY29ufSAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvTmF2QnV0dG9uLmpzIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNlcyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgY29sdW1ucywgY29sdW1uc01hcCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IG1lZGlhID0gWydpbWFnZScsICd2aWRlbycsICdhdWRpbyddO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkYXRhLmludGVydmlld19zdGFydCB8fCBkYXRhLmludGVydmlld19lbmQ7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZW5kZXJBcmVhIFJlc3BvbnNlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS50aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tcGFnZVRpdGxlXCI+IHtkYXRhLnRpdGxlfSA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgeyEhZGF0ZSAmJiA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tbGFiZWxcIj4ge2RhdGV9IDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tdmFsdWVcIj4ge2RhdGEuZGVzY3JpcHRpb259IDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7bWVkaWEubWFwKG1lZGlhSXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW21lZGlhSXRlbV0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1sYWJlbFwiPntjb2x1bW5zTWFwW21lZGlhSXRlbV19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLXZhbHVlXCI+e3RoaXNbYF8ke21lZGlhSXRlbX1SZW5kZXJlcmBdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbnMgIT0gbnVsbCAmJiBjb2x1bW5zLm1hcChxSUQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtxSURdID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tbGFiZWxcIj57Y29sdW1uc01hcFtxSURdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS12YWx1ZVwiPntkYXRhW3FJRF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IF9pbWFnZVJlbmRlcmVyKCkge1xyXG4gICAgICAgIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tbWVkaWFcIiBzcmM9e3RoaXMucHJvcHMuZGF0YS5pbWFnZX0gLz5cclxuICAgIH1cclxuICAgIGdldCBfdmlkZW9SZW5kZXJlcigpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhLnZpZGVvXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHZpZGVvIGtleT17ZGF0YX0gY29udHJvbHMgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2RhdGF9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cclxuICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZ2V0IF9hdWRpb1JlbmRlcmVyKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGEudmlkZW9cclxuICAgICAgICByZXR1cm4gPGF1ZGlvIGtleT17ZGF0YX0gc3JjPXtkYXRhfSB0eXBlPVwiYXVkaW8vbXA0XCIgY29udHJvbHMgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1tZWRpYVwiIC8+XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2luZ2xlVmlldy9SZXNwb25zZXMuanMiLCIvL0BmbG93XHJcbmltcG9ydCB0eXBlIHtQcm9wcywgTmF2QmFyUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tICcuL05hdkJ1dHRvbidcclxuaW1wb3J0IHsgaWNfYXJyb3dfYmFjaywgaWNfYXJyb3dfZm9yd2FyZCwgaWNfdmlld19tb2R1bGUgfSBmcm9tICcuLi9pY29ucyc7XHJcblxyXG5jb25zdCBOYXZCYXIgPSBmdW5jdGlvbiAocHJvcHM6TmF2QmFyUHJvcHMpIHtcclxuICBjb25zdCB7IGxvYWRQcmV2aW91c0l0ZW0sIHJldHVyblRvR3JpZEFjdGlvbiwgbG9hZE5leHRJdGVtLCBzaW5nbGVWaWV3RGlzYWJsZVByZXYsIHNpbmdsZVZpZXdEaXNhYmxlTmV4dCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0taGVhZGVyXCI+XHJcbiAgICAgIDxOYXZCdXR0b24gZGlzYWJsZWQ9e3NpbmdsZVZpZXdEaXNhYmxlUHJldn0gdGl0bGU9XCJQcmV2aW91cyBpdGVtXCIgb25DbGljaz17bG9hZFByZXZpb3VzSXRlbX0gaWNvbj17aWNfYXJyb3dfYmFja30gLz5cclxuICAgICAgPE5hdkJ1dHRvbiB0aXRsZT1cIlJldHVybiB0byB0aGUgbGlzdFwiIG9uQ2xpY2s9e3JldHVyblRvR3JpZEFjdGlvbn0gaWNvbj17aWNfdmlld19tb2R1bGV9IC8+XHJcbiAgICAgIDxOYXZCdXR0b24gZGlzYWJsZWQ9e3NpbmdsZVZpZXdEaXNhYmxlTmV4dH0gdGl0bGU9XCJOZXh0IEl0ZW1cIiBvbkNsaWNrPXtsb2FkTmV4dEl0ZW19IGljb249e2ljX2Fycm93X2ZvcndhcmR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZVZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCB2b2lkPiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2NoaWxkcmVuLCAuLi5uYXZCYXJQcm9wc30gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3XCI+XHJcbiAgICAgICAgPE5hdkJhciB7Li4ubmF2QmFyUHJvcHN9Lz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2luZ2xlVmlldy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGljX3N0YXIgPSA8cGF0aCBkPVwiTTEyIDE3LjI3TDE4LjE4IDIxbC0xLjY0LTcuMDNMMjIgOS4yNGwtNy4xOS0uNjFMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxelwiLz47XG5leHBvcnQgY29uc3QgaWNfc3Rhcl9ib3JkZXIgPSA8cGF0aCBkPVwiTTIyIDkuMjRsLTcuMTktLjYyTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMSAxMiAxNy4yNyAxOC4xOCAyMWwtMS42My03LjAzTDIyIDkuMjR6TTEyIDE1LjRsLTMuNzYgMi4yNyAxLTQuMjgtMy4zMi0yLjg4IDQuMzgtLjM4TDEyIDYuMWwxLjcxIDQuMDQgNC4zOC4zOC0zLjMyIDIuODggMSA0LjI4TDEyIDE1LjR6XCIvPjtcbmV4cG9ydCBjb25zdCBpY19hcnJvd19iYWNrID0gPHBhdGggZD1cIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwdi0yelwiLz47XG5leHBvcnQgY29uc3QgaWNfYXJyb3dfZm9yd2FyZCA9IDxwYXRoIGQ9XCJNMTIgNGwtMS40MSAxLjQxTDE2LjE3IDExSDR2MmgxMi4xN2wtNS41OCA1LjU5TDEyIDIwbDgtOHpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX3ZpZXdfbW9kdWxlID0gPHBhdGggZD1cIk00IDExaDVWNUg0djZ6bTAgN2g1di02SDR2NnptNiAwaDV2LTZoLTV2NnptNiAwaDV2LTZoLTV2NnptLTYtN2g1VjVoLTV2NnptNi02djZoNVY1aC01elwiLz47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaWNvbnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy9AZmxvd1xyXG5pbXBvcnQgSGl0bGlzdERTIGZyb20gXCJyLWhpdGxpc3QtZGF0YXNvdXJjZVwiO1xyXG5pbXBvcnQgdW5pb25CeSBmcm9tIFwibG9kYXNoL3VuaW9uQnlcIjtcclxuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tICdyLXJlcG9ydGFsLWJhc2UnO1xyXG5cclxudHlwZSBPcHRpb25zID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBuYW1lIG9mIGEgZ2xvYmFsIGNvbmZpZyB2YXJpYWJsZSBwYXNzZWRcclxuICAgICovXHJcbiAgICBjb25maWc6IHN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGRpc3BsYXkgdGh1bWJzIGFzIGltYWdlIHBsYWNlaG9sZGVycyBpbnN0ZWFkIG9mIG1lZGlhIGljb25zXHJcbiAgICAqL1xyXG4gICAgdGh1bWJzUGxhY2Vob2xkZXI6IGJvb2xlYW4sXHJcbiAgICBjb21wb25lbnQ6IGFueVxyXG59XHJcblxyXG50eXBlIHBhcnNlZERhdGFSb3cgPSB7XHJcbiAgICBpZDogc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxyXG4gICAgaW1hZ2U/OiBzdHJpbmcsXHJcbiAgICBtZWRpYXR5cGU6ICd2aWRlbycgfCAnYXVkaW8nIHwgJ2ltYWdlJyxcclxuICAgIGxpbms6IHN0cmluZyxcclxuICAgIFt4OnN0cmluZ106c3RyaW5nLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRFNBYnN0cmFjdGlvbihvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgICBjb25zdCBEUyA9IG5ldyBIaXRsaXN0RFMoKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IG9wdGlvbnMuY29tcG9uZW50O1xyXG4gICAgbGV0IGNvbmZpZztcclxuICAgIGNvbnN0IHF1ZXJ5ID0gUmVwb3J0YWxCYXNlLmxvY2F0aW9uRGVzZXJpYWxpemUoKS5xdWVyeTtcclxuXHJcbiAgICBzZXR1cERhdGFMaXN0ZW5lcihvcHRpb25zLmNvbmZpZyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXVuY2hlcyBsaXN0ZW5lciBmb3IgYFkuR2xvYmFsLnJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlYCBldmVudCB3aXRoaW4gWVVJIHdoaWNoIGlzIHRyaWdnZXJlZCBldmVyeSB0aW1lIHRoZSBmaWx0ZXIgcGFuZWwgdXBkYXRlcyBvciBvbiBpbml0aWFsIGxvYWRcclxuICAgICAqICovXHJcbiAgICBmdW5jdGlvbiBzZXR1cERhdGFMaXN0ZW5lcihjb25maWdOYW1lKSB7XHJcbiAgICAgICAgaWYgKFkgJiYgWS5HbG9iYWwpIHtcclxuICAgICAgICAgICAgWS5HbG9iYWwub24oXCJyZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZVwiLCBmaWx0ZXJJbmZvID0+IHtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpc2VDb25maWcoY29uZmlnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoRFMgJiYgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRFMubW9kaWZpZXIgPSBmaWx0ZXJJbmZvOyAvLyBmaWx0ZXIgaW5mb3JtYXRpb24gYXMgYSBtb2RpZmllciBmb3IgZGF0YSBmZXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIERTLmluaXRpYWxEYXRhTG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lVSSBpcyBub3QgZGVmaW5lZCBvciBhY2Nlc3NpYmxlLCBjYW5ub3Qgc2V0IHVwIGEgXCJyZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZVwiIGxpc3RlbmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpc2VDb25maWcoY29uZmlnTmFtZSkge1xyXG4gICAgICAgIGlmICghY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmICghd2luZG93W2NvbmZpZ05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbmZpZyBpcyBub3QgcGFzc2VkIGZyb20gYmFja2VuZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uZmlnID0gd2luZG93W2NvbmZpZ05hbWVdO1xyXG4gICAgICAgICAgICBpZihjb25maWcuaW5kaXZpZHVhbFJlY29yZHMgJiYgdHlwZW9mIGNvbmZpZy5pbmRpdmlkdWFsUmVjb3JkcyA9PT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzID0gY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzLnNwbGl0KCcsJykubWFwKGl0ZW09Pml0ZW0udHJpbSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoeyBjb25maWcgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0RhdGEoZGF0YSwgbW9kZSA9ICdyZXBsYWNlJykge1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGE6IHBhcnNlZERhdGFSb3dbXSA9IGRhdGEubWFwKChkYXRhUm93LCByb3dJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyc2VkUm93OiBwYXJzZWREYXRhUm93ID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGlyID0gY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzIHx8IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhRmllbGRzID0gWydpZCcsICd0aXRsZScsICdkZXNjcmlwdGlvbicsICdpbWFnZScsICdhdWRpbycsICd2aWRlbycsICd0YWdzJ10uY29uY2F0KGlyKTtcclxuICAgICAgICAgICAgZGF0YUZpZWxkcy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5JRCA9IGNvbmZpZ1trZXldO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkUm93W2tleV0gPSBwcmVwYXJlRGF0YShkYXRhUm93W2NvbHVtbklEIHx8IGtleV0sIGtleSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBpbWFnZSAtIHdlIG1pZ2h0IHdhbnQgdG8gdXNlIGEgcGxhY2Vob2xkZXIgYXMgdGhlIHRodW1iLCBhbmQgbG9hZCB0aGUgZnVsbCBpbWFnZSBpbiBiYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZFJvdy5pbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50aHVtYnNQbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkUm93LnBsYWNlaG9sZGVyID0gcGFyc2VkUm93LmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFJvdy5pbWFnZSA9IHBhcnNlZFJvdy5pbWFnZS5yZXBsYWNlKC9fdGh1bWIvZ2ksICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgbWVkaWF0eXBlIG9yIGEgcGxhY2Vob2xkZXIgaWNvblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRSb3cubWVkaWF0eXBlICYmIFsndmlkZW8nLCAnYXVkaW8nLCAnaW1hZ2UnXS5pbmRleE9mKGtleSkgPiAtMSAmJiBjb25maWdba2V5XSAmJiBwYXJzZWRSb3dba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZFJvdy5tZWRpYXR5cGUgPSBrZXlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgaWQgZm9yIGtleXNcclxuICAgICAgICAgICAgcGFyc2VkUm93LmlkID0gZGF0YVJvdy5yZXNwb25zZWlkID8gZGF0YVJvdy5yZXNwb25zZWlkIDogcm93SW5kZXg7XHJcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBsaW5rIHBhc3NlZCBhcyBgc2xpbmtgIHByb3BlcnR5IGluIGRhdGFcclxuICAgICAgICAgICAgaWYgKGRhdGFSb3cuc2xpbmspIHtcclxuICAgICAgICAgICAgICAgIGxldCBsID0gZGF0YVJvdy5zbGluaztcclxuICAgICAgICAgICAgICAgIHBhcnNlZFJvdy5saW5rID0gKC9ocmVmPScoLis/KScvZ2kpLmV4ZWMobCkucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJvdztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy91cGRhdGUgc3RhdGUgd2l0aCB0aGUgbmV3IHNldCBvZiBkYXRhIG9yIGEgbWVyZ2VkIGRhdGFcclxuICAgICAgICBpZiAobW9kZSA9PT0gJ3JlcGxhY2UnKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogbmV3RGF0YSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdhcHBlbmQnKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbLi4ucHJldlN0YXRlLml0ZW1zLCAuLi5uZXdEYXRhXSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnbWVyZ2UnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vZGUpO1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogdW5pb25CeShuZXdEYXRhLCBwcmV2U3RhdGUuaXRlbXMsICdpZCcpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRhdGA0LXQvSDQt9C90LDQtdGCINGH0YLQvicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbWFzc2FnZSBkYXRhIHRvIGZpdCB0aGUgdHlwZSB3ZSBleHBlY3QgdG8gcmVjZWl2ZSBpbiByZWFjdCB2aWV3XHJcbiAgICAgKiAqL1xyXG4gICAgZnVuY3Rpb24gcHJlcGFyZURhdGEoZGF0YTphbnksIHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcmVwYXJlRGF0YScsZGF0YSx0eXBlKVxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKC9zcmM9JyguKz8pJy9naSkuZXhlYyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgIT0gbnVsbCAmJiByZXN1bHRbMV0gPyByZXN1bHRbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcclxuICAgICAgICAgICAgY2FzZSAndGl0bGUnOnJldHVybiAhKGRhdGEuaW5kZXhPZignLScpID4gLTEgJiYgZGF0YS50cmltKCkubGVuZ3RoID09PSAxKSA/IGRhdGEudHJpbSgpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjYXNlICd2aWRlbyc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2F1ZGlvJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAhKGRhdGEuaW5kZXhPZignLScpID4gLTEgJiYgZGF0YS50cmltKCkubGVuZ3RoID09PSAxKSA/IGdlbmVyYXRlTWVkaWFMaW5rKGRhdGEudHJpbSgpLCB0eXBlKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY2FzZSAndGFncyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YSAmJiAoZGF0YS5pbmRleE9mKCcsJykgPiAtMSA/IGRhdGEuc3BsaXQoJywnKSA6IGRhdGEuaW5kZXhPZignLScpID4gLTEgJiYgZGF0YS50cmltKCkubGVuZ3RoID09PSAxID8gdW5kZWZpbmVkIDogZGF0YS50cmltKCkpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVNZWRpYUxpbmsoZmlsZU5hbWU6c3RyaW5nLCB0eXBlOiAnYXVkaW8nfCd2aWRlbycpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZW5lcmF0ZU1lZGlhTGluaycsZmlsZU5hbWUsdHlwZSlcclxuICAgICAgICBjb25zdCBkc05hbWUgPSBjb25maWcuc3VydmV5SUQ7XHJcbiAgICAgICAgcmV0dXJuIGAvcmVwb3J0YWwvV3lzaXd5Zy9SZXBvcnQvJHtxdWVyeS5yZXBvcnRpZH0vJHtkc05hbWV9LyR7dHlwZX0vJHtmaWxlTmFtZX1gXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGF0YUxvYWRpbmdFcnJvcihlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczogW11cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBEUy5sb2FkTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIERTLm5leHRQYWdlKClcclxuICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgRFMubG9hZFByZXZpb3VzUGFnZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gRFMucHJldmlvdXNQYWdlKClcclxuICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgRFMubG9hZE1vcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIERTLm5leHRQYWdlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcHJvY2Vzc0RhdGEocmVzcG9uc2UsICdhcHBlbmQnKSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5pbml0aWFsTG9hZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gRFMuaW5pdGlhbERhdGFMb2FkKClcclxuICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgRFMuZ2V0UGFnZUluZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzUGFnZUluZm8gPSBEUy5wYWdlSW5mbyAmJiBEUy5zb3J0aW5nUGFnaW5nVmFsdWVzICYmIERTLnNvcnRpbmdQYWdpbmdWYWx1ZXMudG90YWxIaXRzO1xyXG4gICAgICAgIHJldHVybiBoYXNQYWdlSW5mbyA/IGAke0RTLnBhZ2VJbmZvfSBvZiAke0RTLnNvcnRpbmdQYWdpbmdWYWx1ZXMudG90YWxIaXRzfWAgOiAnJztcclxuICAgIH07XHJcblxyXG4gICAgRFMuY29uZmlnID0gKCkgPT4geyByZXR1cm4gY29uZmlnICE9IG51bGwgPyBjb25maWcgOiBpbml0aWFsaXNlQ29uZmlnKG9wdGlvbnMuY29uZmlnKSB9O1xyXG5cclxuICAgIHJldHVybiBEU1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RTQWJzdHJhY3Rpb24uanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fcm9vdC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TeW1ib2wuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19NYXAuanMiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzS2V5LmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzU3ltYm9sLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TZXQuanMiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ2YXIgYmFzZUlzRXF1YWxEZWVwID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Nhc3RQYXRoLmpzIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc1N0cmljdENvbXBhcmFibGUuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCBmb3Igc291cmNlIHZhbHVlcyBzdWl0YWJsZVxuICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2VxLmpzIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2tleXMuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fSGFzaC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fUHJvbWlzZS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcHBseS5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qcyIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheU1hcC5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0ZsYXR0ZW5hYmxlID0gcmVxdWlyZSgnLi9faXNGbGF0dGVuYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggc3VwcG9ydCBmb3IgcmVzdHJpY3RpbmcgZmxhdHRlbmluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcGFyYW0ge251bWJlcn0gZGVwdGggVGhlIG1heGltdW0gcmVjdXJzaW9uIGRlcHRoLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJlZGljYXRlPWlzRmxhdHRlbmFibGVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1N0cmljdF0gUmVzdHJpY3QgdG8gdmFsdWVzIHRoYXQgcGFzcyBgcHJlZGljYXRlYCBjaGVja3MuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBkZXB0aCwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHByZWRpY2F0ZSB8fCAocHJlZGljYXRlID0gaXNGbGF0dGVuYWJsZSk7XG4gIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChkZXB0aCA+IDAgJiYgcHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBmbGF0dGVuIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmxhdHRlbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlRmxhdHRlbi5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaGFzSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VIYXNJbihvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYga2V5IGluIE9iamVjdChvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VIYXNJbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSGFzSW4uanMiLCJ2YXIgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBiYXNlSXNOYU4gPSByZXF1aXJlKCcuL19iYXNlSXNOYU4nKSxcbiAgICBzdHJpY3RJbmRleE9mID0gcmVxdWlyZSgnLi9fc3RyaWN0SW5kZXhPZicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlXG4gICAgPyBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KVxuICAgIDogYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUlzTmFOLCBmcm9tSW5kZXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmFOO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hTi5qcyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzJyksXG4gICAgYmFzZU1hdGNoZXNQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgcHJvcGVydHkgPSByZXF1aXJlKCcuL3Byb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXRlcmF0ZWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhbiBpdGVyYXRlZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgaXRlcmF0ZWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJdGVyYXRlZSh2YWx1ZSkge1xuICAvLyBEb24ndCBzdG9yZSB0aGUgYHR5cGVvZmAgcmVzdWx0IGluIGEgdmFyaWFibGUgdG8gYXZvaWQgYSBKSVQgYnVnIGluIFNhZmFyaSA5LlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NjAzNCBmb3IgbW9yZSBkZXRhaWxzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKVxuICAgICAgPyBiYXNlTWF0Y2hlc1Byb3BlcnR5KHZhbHVlWzBdLCB2YWx1ZVsxXSlcbiAgICAgIDogYmFzZU1hdGNoZXModmFsdWUpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUl0ZXJhdGVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9fYmFzZUlzTWF0Y2gnKSxcbiAgICBnZXRNYXRjaERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXRjaERhdGEnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKSxcbiAgICBnZXQgPSByZXF1aXJlKCcuL2dldCcpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5RGVlcC5qcyIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBvdmVyUmVzdCA9IHJlcXVpcmUoJy4vX292ZXJSZXN0JyksXG4gICAgc2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19zZXRUb1N0cmluZycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsInZhciBjb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQnKSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTZXRUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVGltZXMuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKSxcbiAgICBjcmVhdGVTZXQgPSByZXF1aXJlKCcuL19jcmVhdGVTZXQnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuaXFCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHNlZW4gPSByZXN1bHQ7XG5cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gIH1cbiAgZWxzZSBpZiAobGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICB2YXIgc2V0ID0gaXRlcmF0ZWUgPyBudWxsIDogY3JlYXRlU2V0KGFycmF5KTtcbiAgICBpZiAoc2V0KSB7XG4gICAgICByZXR1cm4gc2V0VG9BcnJheShzZXQpO1xuICAgIH1cbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgc2VlbiA9IG5ldyBTZXRDYWNoZTtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWVuID0gaXRlcmF0ZWUgPyBbXSA6IHJlc3VsdDtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciBzZWVuSW5kZXggPSBzZWVuLmxlbmd0aDtcbiAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHNlZW4sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgaWYgKHNlZW4gIT09IHJlc3VsdCkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmlxO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2JqZWN0IG9mIGB2YWx1ZXNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBzZXQuXG4gKi9cbnZhciBjcmVhdGVTZXQgPSAhKFNldCAmJiAoMSAvIHNldFRvQXJyYXkobmV3IFNldChbLC0wXSkpWzFdKSA9PSBJTkZJTklUWSkgPyBub29wIDogZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgU2V0KHZhbHVlcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jcmVhdGVTZXQuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGV4aXN0cyBvbiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICBpZiAoIShyZXN1bHQgPSBvYmplY3QgIT0gbnVsbCAmJiBoYXNGdW5jKG9iamVjdCwga2V5KSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgfVxuICBpZiAocmVzdWx0IHx8ICsraW5kZXggIT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBsZW5ndGggPSBvYmplY3QgPT0gbnVsbCA/IDAgOiBvYmplY3QubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNQYXRoLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwcmVhZGFibGVTeW1ib2wgPSBTeW1ib2wgPyBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgZmxhdHRlbmFibGUgYGFyZ3VtZW50c2Agb2JqZWN0IG9yIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZsYXR0ZW5hYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzRmxhdHRlbmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSB8fFxuICAgICEhKHNwcmVhZGFibGVTeW1ib2wgJiYgdmFsdWUgJiYgdmFsdWVbc3ByZWFkYWJsZVN5bWJvbF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRmxhdHRlbmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNGbGF0dGVuYWJsZS5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX292ZXJSZXN0LmpzIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ2YXIgYmFzZVNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVNldFRvU3RyaW5nJyksXG4gICAgc2hvcnRPdXQgPSByZXF1aXJlKCcuL19zaG9ydE91dCcpO1xuXG4vKipcbiAqIFNldHMgdGhlIGB0b1N0cmluZ2AgbWV0aG9kIG9mIGBmdW5jYCB0byByZXR1cm4gYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgc2V0VG9TdHJpbmcgPSBzaG9ydE91dChiYXNlU2V0VG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3J0T3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3Nob3J0T3V0LmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja1NldC5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanMiLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlTGVhZGluZ0RvdCA9IC9eXFwuLyxcbiAgICByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAocmVMZWFkaW5nRG90LnRlc3Qoc3RyaW5nKSkge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCIvKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmV0dXJuIGZyb20gdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbnN0YW50IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IF8udGltZXMoMiwgXy5jb25zdGFudCh7ICdhJzogMSB9KSk7XG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0cyk7XG4gKiAvLyA9PiBbeyAnYSc6IDEgfSwgeyAnYSc6IDEgfV1cbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzWzBdID09PSBvYmplY3RzWzFdKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2NvbnN0YW50LmpzIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9nZXQuanMiLCJ2YXIgYmFzZUhhc0luID0gcmVxdWlyZSgnLi9fYmFzZUhhc0luJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaGFzSW4uanMiLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCIvKipcbiAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmxhc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gbGFzdChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPyBhcnJheVtsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbGFzdC5qcyIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbWVtb2l6ZS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL25vb3AuanMiLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5JyksXG4gICAgYmFzZVByb3BlcnR5RGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eURlZXAnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBhIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiAyIH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiAxIH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmInKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLm1hcChfLnNvcnRCeShvYmplY3RzLCBfLnByb3BlcnR5KFsnYScsICdiJ10pKSwgJ2EuYicpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHRvS2V5KHBhdGgpKSA6IGJhc2VQcm9wZXJ0eURlZXAocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9wcm9wZXJ0eS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ2YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4vbGFzdCcpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8udW5pb25gIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGl0ZXJhdGVlYCB3aGljaCBpc1xuICogaW52b2tlZCBmb3IgZWFjaCBlbGVtZW50IG9mIGVhY2ggYGFycmF5c2AgdG8gZ2VuZXJhdGUgdGhlIGNyaXRlcmlvbiBieVxuICogd2hpY2ggdW5pcXVlbmVzcyBpcyBjb21wdXRlZC4gUmVzdWx0IHZhbHVlcyBhcmUgY2hvc2VuIGZyb20gdGhlIGZpcnN0XG4gKiBhcnJheSBpbiB3aGljaCB0aGUgdmFsdWUgb2NjdXJzLiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDpcbiAqICh2YWx1ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0gey4uLkFycmF5fSBbYXJyYXlzXSBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBjb21iaW5lZCB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udW5pb25CeShbMi4xXSwgWzEuMiwgMi4zXSwgTWF0aC5mbG9vcik7XG4gKiAvLyA9PiBbMi4xLCAxLjJdXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLnVuaW9uQnkoW3sgJ3gnOiAxIH1dLCBbeyAneCc6IDIgfSwgeyAneCc6IDEgfV0sICd4Jyk7XG4gKiAvLyA9PiBbeyAneCc6IDEgfSwgeyAneCc6IDIgfV1cbiAqL1xudmFyIHVuaW9uQnkgPSBiYXNlUmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgdmFyIGl0ZXJhdGVlID0gbGFzdChhcnJheXMpO1xuICBpZiAoaXNBcnJheUxpa2VPYmplY3QoaXRlcmF0ZWUpKSB7XG4gICAgaXRlcmF0ZWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGJhc2VVbmlxKGJhc2VGbGF0dGVuKGFycmF5cywgMSwgaXNBcnJheUxpa2VPYmplY3QsIHRydWUpLCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDIpKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaW9uQnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC91bmlvbkJ5LmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDEwLjAxLjIwMTcuXG4gKi9cbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSBcInItcmVwb3J0YWwtYmFzZVwiO1xuaW1wb3J0IEhpdGxpc3RTZXR1cCBmcm9tIFwiLi9oaXRsaXN0LXNldHVwXCI7XG5cbmNsYXNzIEhpdGxpc3REYXRhc291cmNlIGV4dGVuZHMgSGl0bGlzdFNldHVwe1xuICAvKipcbiAgICogVGhpcyBjbGFzcyBhbGxvd3MgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB3aXRoIHRoZSBIaXRMaXN0IGRhdGFiYXNlIGFuZCB1c2UgdXRpbGl0eSBtZXRob2RzIHRvIHF1ZXJ5IGFuZCBmaWx0ZXIgZGF0YSBwcm92aWRlZCB0aGVyZSdzIGEgaGl0bGlzdCBvbiB0aGUgcGFnZVxuICAgKiBAZXh0ZW5kcyBIaXRsaXN0U2V0dXBcbiAgICogKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucz17fSl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZXM9W107XG4gICAgLyoqIEBwcm9wZXJ0eSB7U3RyaW5nfSBtb2RpZmllciAtIGV4dHJhIHBhcmFtcyBhZGRlZCBhcyBhIHN0cmluZyBmcm9tIGZpbHRlcnMgKi9cbiAgICB0aGlzLm1vZGlmaWVyID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogcGVyZm9ybXMgaW5pdGlhbCBkYXRhIGxvYWRcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgaW5pdGlhbERhdGFMb2FkKCl7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2luaXRpYWxMb2FkOnRydWV9KVxuICB9XG4gIC8qKlxuICAgKiBsb2FkcyBuZXh0IHBhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgbmV4dFBhZ2UoKXtcbiAgICB0aGlzLl9za2lwUGFnZSh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2lzUGFnaW5nOiB0cnVlfSx0aGlzLm1vZGlmaWVyKTtcbiAgfVxuICAvKipcbiAgICogbG9hZHMgcHJldmlvdXMgcGFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgb2YgZGF0YVxuICAgKiAqL1xuICBwcmV2aW91c1BhZ2UoKXtcbiAgICB0aGlzLl9za2lwUGFnZShmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpc1BhZ2luZzogdHJ1ZX0sdGhpcy5tb2RpZmllcik7XG4gIH1cblxuICAvKipcbiAgICogcXVlcmllcyBIaXRMaXN0IEFQSVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiAqL1xuICByZXF1ZXN0UmVzcG9uc2Uob3B0aW9ucyl7XG4gICAgbGV0IHF1ZXJ5PSBSZXBvcnRhbEJhc2UubG9jYXRpb25EZXNlcmlhbGl6ZSgpLnF1ZXJ5O1xuICAgIGlmKHF1ZXJ5ICYmIHF1ZXJ5LnJlcG9ydGlkICYmIHRoaXMuaGl0bGlzdElEKXtcbiAgICAgIC8qc2V0IGNvbW1vbiBwYXJhbXMqL1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgUGFnZUlkOiB0aGlzLnBhZ2VJRCxcbiAgICAgICAgcGFnZVN0YXRlSWQ6IHRoaXMucGFnZVN0YXRlSUQsXG4gICAgICAgIFByZXZpZXc6IHF1ZXJ5LnByZXZpZXdcbiAgICAgIH07XG5cbiAgICAgIC8qaWYgb3B0aW9ucyBhcmUgcGFzc2VkLCBhZGQgb3B0aW9ucyovXG4gICAgICBpZihvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGZvciAobGV0IGF0dHJuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICBwYXJhbXNbYXR0cm5hbWVdID0gdHlwZW9mIG9wdGlvbnNbYXR0cm5hbWVdPT09J2Jvb2xlYW4nPyhvcHRpb25zW2F0dHJuYW1lXT8nMSc6JzAnKTpvcHRpb25zW2F0dHJuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighcGFyYW1zLnNlYXJjaCAmJiB0aGlzLl9zZWFyY2hWYWx1ZXMubGVuZ3RoPjApe1xuICAgICAgICBwYXJhbXMuc2VhcmNoID0gSlNPTi5zdHJpbmdpZnkodGhpcy5fc2VhcmNoVmFsdWVzKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXM7XG5cbiAgICAgIGlmIChzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcyE9bnVsbCAmJiAhaXNOYU4oc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnZU51bWJlcikpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pbml0aWFsTG9hZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdlTnVtYmVyICs9IHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2luZ0ZvcndhcmQgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcGFyYW1zLnNvcnRpbmdQYWdpbmdWYWx1ZXM9SlNPTi5zdHJpbmdpZnkoc29ydGluZ1BhZ2luZ1ZhbHVlcyk7XG5cbiAgICAgIHJldHVybiBSZXBvcnRhbEJhc2UucHJvbWlzZVJlcXVlc3QoYCR7dGhpcy5zZXJ2aWNlVVJMfSYke0hpdGxpc3REYXRhc291cmNlLnNlcmlhbGl6ZVBhcmFtcyhwYXJhbXMpfSR7dGhpcy5tb2RpZmllciE9Jyc/JyYnK3RoaXMubW9kaWZpZXI6Jyd9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PnRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBIaXRMaXN0IEFQSSByZXNwb25zZVxuICAgKiAqL1xuICBwYXJzZVJlc3BvbnNlKHJlc3BvbnNlKXtcbiAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuXG4gICAgdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzID0gcmVzcG9uc2Uuc29ydGluZ1BhZ2luZ1ZhbHVlcztcbiAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIHRoaXMucGFnZUluZm8gPSByZXNwb25zZS5wYWdlSW5mbztcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcGFnaW5nRm9yd2FyZCBpZiBgdHJ1ZWAgZ29lcyBmb3J3YXJkLCBpZiBgbnVsbGAgZ29lcyBiYWNrd2FyZFxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogKi9cbiAgX3NraXBQYWdlKHBhZ2luZ0ZvcndhcmQpe1xuICAgIGxldCBfc3B2ID0gey4uLnRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlc307XG4gICAgbGV0IHB2ID0gey4uLl9zcHYucGFnaW5nVmFsdWVzfSB8fCB7fTtcbiAgICBwdi5wYWdpbmdGb3J3YXJkID0gcGFnaW5nRm9yd2FyZDsgLyppZiBmb3J3YXJkIGlzIG5lZWRlZCB0aGVuIHBhc3MgdHJ1ZSwgZWxzZSBudWxsIC0gYmFja3dhcmQqL1xuICAgIHB2LnN0YXJ0SWQgPSBwYWdpbmdGb3J3YXJkID8gcHYubGFzdFN0YXJ0SWQgOiBwdi5maXJzdFN0YXJ0SWQ7XG4gICAgcHYuc3RhcnRWYWx1ZSA9IHBhZ2luZ0ZvcndhcmQgPyBwdi5sYXN0U3RhcnRWYWx1ZSA6IHB2LmZpcnN0U3RhcnRWYWx1ZTtcbiAgICB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB7XG4gICAgICAuLi50aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMsXG4gICAgICBwYWdpbmdWYWx1ZXM6IHB2XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXJpYWxpemUgcGFyYW1zIGludG8gYSBxdWVyeSBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyAtIGFuIG9iamVjdCB3aXRoIHBhcmFtZXRlcnNcbiAgICogKi9cbiAgc3RhdGljIHNlcmlhbGl6ZVBhcmFtcyhwYXJhbXMpe1xuICAgIGxldCBxdWVyeSA9IFtdO1xuICAgIGZvcihsZXQga2V5IGluIHBhcmFtcyl7XG4gICAgICBxdWVyeS5wdXNoKFtrZXkscGFyYW1zW2tleV1dLmpvaW4oJz0nKSk7XG4gICAgfVxuICAgIHJldHVybiBxdWVyeS5qb2luKCcmJylcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpdGxpc3REYXRhc291cmNlO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3QtZGF0YXNvdXJjZS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMC4wMS4yMDE3LlxuICovXG5cbmNsYXNzIEhpdGxpc3RTZXR1cHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICAvL2ZpeCBmb3Igd2luZG93LmxvY2F0aW9uIG9yaWdpbiwgdGhhbnggSUVcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IEhpdGxpc3RTZXR1cC5nZXRPcmlnaW5hbENvbmZpZygpO1xuICAgIHRoaXMuX2VsZW1lbnRUeXBlID0gd2luZG93LkhpdExpc3RFbGVtZW50VHlwZTtcbiAgICB0aGlzLl9vcCA9IHdpbmRvdy5TZWFyY2hhYmxlTGlzdE9wZXJhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGFsbG93cyBnZXR0aW5nIGEgbG9jYWxpc2VkIHN0cmluZyBpbiB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIHJlcG9ydCBmcm9tIEhpdGxpc3QgY29uZmlnLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gdGhlIGtleSB0byBsb29rIHRoZSBwcm9wZXJ0eSB1cFxuICAgKlxuICAgKiAqIGBzdG9lYDpcIlNtYWxsZXIgdGhhbiBvciBlcXVhbFwiLFxuICAgKiAqIGBndG9lYDpcIkdyZWF0ZXIgdGhhbiBvciBlcXVhbFwiLFxuICAgKiAqIGBiZXR3ZWVuYDpcIkJldHdlZW5cIixcbiAgICogKiBgYmVmb3JlYDpcIkJlZm9yZVwiLFxuICAgKiAqIGBhZnRlcmA6XCJBZnRlclwiLFxuICAgKiAqIGBleGFjdGx5YDpcIkV4YWN0bHlcIixcbiAgICogKiBgc2hvd2RlZmF1bHRjb2xzYDpcIlNob3cgZGVmYXVsdCBjb2x1bW5zXCIsXG4gICAqICogYGFwcGx5YDpcIkFwcGx5XCIsXG4gICAqICogYGNhbmNlbGA6XCJDYW5jZWxcIixcbiAgICogKiBgc2hvd2hpZGVgOlwiU2hvdyAvIEhpZGUgY29sdW1uc1wiLFxuICAgKiAqIGB5ZXNgOlwiWWVzXCIsXG4gICAqICogYG5vYDpcIk5vXCIsXG4gICAqICogYGxvYWRpbmdEYXRhYDpcIkxvYWRpbmcgZGF0YSwgcGxlYXNlIHdhaXQuLi5cIixcIlxuICAgKiAqIGBjaGVja2FsbGA6XCJDaGVjayBhbGxcIixcbiAgICogKiBgdW5jaGVja2FsbGA6XCJVbmNoZWNrIGFsbFwiLFxuICAgKiAqIGBlcnJvckxvYWRpbmdgOlwiRXJyb3IgbG9hZGluZyBkYXRhXCIsXG4gICAqICogYGVycm9yTm9Db2x1bW5zYDpcIk5vIGNvbHVtbnMgc2VsZWN0ZWRcIlxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19SRVNQT05ERU5UT1ZFUlZJRVdgOlwiUmVzcG9uZGVudCBvdmVydmlld1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUklOVGA6XCJQcmludCB0aGUgY3VycmVudCByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX0NMT1NFYDpcIkNsb3NlIHRoaXMgb3ZlcmxheVwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19GSUxURVJgOlwiRmlsdGVyIHF1ZXN0aW9uc1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19OT1RISU5HRk9VTkRgOlwiTm8gcXVlc3Rpb25zIG1hdGNoIHlvdXIgc2VhcmNoXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTYDpcIlByZXZpb3VzXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTSElOVGA6XCJQcmV2aW91cyByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX05FWFRgOlwiTmV4dFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19ORVhUSElOVGA6XCJOZXh0IHJlc3BvbmRlbnRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfT0ZgOlwiezB9IG9mIHsxfVwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19NT1JFYDpcInswfSBtb3JlXCIsXG4gICAqICogUkVQT1JUX1NJTkdMRVZJRVdfQUxURVJOQVRJVkVTYDpcIkFuc3dlcnMgYWx0ZXJuYXRpdmVzOlwiXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqICovXG4gIGkxOG4oa2V5KXtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmNhcHRpb25zLmhhc093blByb3BlcnR5KGtleSk/dGhpcy5fY29uZmlnLmNhcHRpb25zW2tleV06dGhpcy5fY29uZmlnLnNpbmdsZVZpZXdUZXh0cy5oYXNPd25Qcm9wZXJ0eShrZXkpP3RoaXMuX2NvbmZpZy5zaW5nbGVWaWV3VGV4dHNba2V5XTpudWxsXG4gIH1cblxuICBnZXQgZGF0YSgpe3JldHVybiB0aGlzLl9jb25maWcuaGl0bGlzdERhdGF9XG5cbiAgc2V0IGRhdGEoZGF0YSl7XG4gICAgdGhpcy5fY29uZmlnLmhpdGxpc3REYXRhID0gZGF0YTtcbiAgfVxuICBnZXQgZGlzYWJsZU5leHRCdXR0b24oKXtcbiAgICByZXR1cm4gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLmRpc2FibGVOZXh0QnV0dG9uIHx8IGZhbHNlXG4gIH1cbiAgZ2V0IGRpc2FibGVQcmV2QnV0dG9uKCl7XG4gICAgcmV0dXJuIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcy5kaXNhYmxlUHJldkJ1dHRvbiB8fCBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHZpc2libGUgSGl0TGlzdCBjb2x1bW5zIG9mIE9iamVjdCB0eXBlOiBge2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfWBcbiAgICogQHJldHVybnMge0FycmF5Ljx7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9Pn0gUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgdmlzaWJsZSBIaXRMaXN0IGNvbHVtbnNcbiAgICogKi9cbiAgZ2V0IGNvbHVtbnMoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmNvbHVtbnN9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIEhpdExpc3QgY29sdW1ucyBvZiBPYmplY3QgdHlwZTogYHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ31gXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICogKi9cbiAgZ2V0IGFsbENvbHVtbnMoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmFsbENvbHVtbnN9XG5cbiAgZ2V0IGhpdGxpc3RJRCgpe3JldHVybiB0aGlzLl9jb25maWcuY29tcG9uZW50SWR9XG4gIGdldCBwYWdlSUQoKXtyZXR1cm4gdGhpcy5fY29uZmlnLnBhZ2VJZH1cbiAgZ2V0IGxhbmd1YWdlKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5sYW5ndWFnZX1cbiAgZ2V0IHNlcnZpY2VVUkwoKXtyZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3RoaXMuX2NvbmZpZy5zZXJ2aWNlVXJsfWB9XG4gIGdldCBwYWdlU3RhdGVJRCgpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUGFnZVN0YXRlSWQnKT8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1BhZ2VTdGF0ZUlkJykudmFsdWU6dW5kZWZpbmVkfVxuICBnZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcygpe1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlcyE9bnVsbD90aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlczp7fVxuICB9XG4gIHNldCBzb3J0aW5nUGFnaW5nVmFsdWVzKHZhbCl7XG4gICAgdGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB2YWw7XG4gIH1cblxuICBzdGF0aWMgX2ZpeEpzb25EYXRlKGpzb25EYXRlKSB7XG4gICAgaWYgKCEoanNvbkRhdGUgJiYgWSAmJiBZLkxhbmcuaXNGdW5jdGlvbihqc29uRGF0ZS5yZXBsYWNlKSkpIHtyZXR1cm4ganNvbkRhdGU7fVxuICAgIGxldCBjb25zdHIgPSBqc29uRGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeL0RhdGVcXFxcKChbLStdP1xcXFxkKylcXFxcKS8kXCIpLCBcIm5ldyBEYXRlKCQxKVwiKTtcbiAgICBpZiAoY29uc3RyID09IGpzb25EYXRlKSB7cmV0dXJuIGpzb25EYXRlO31cbiAgICByZXR1cm4gZXZhbChjb25zdHIpO1xuICB9XG5cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIGNvbmZpZyBmb3IgYSBIaXRMaXN0IGlmIGl0J3MgaW5pdGlhbGlzZWQgb24gdGhlIHBhZ2VcbiAgICogYGBgXG4gICAqIHtcbiAgICogIGFsbENvbHVtbnM6QXJyYXksXG4gICAqICBjYXB0aW9uczpPYmplY3QsXG4gICAqICBjbGllbnRJZDpTdHJpbmcsXG4gICAqICBjb2x1bW5zOkFycmF5LFxuICAgKiAgY29tcG9uZW50SWQ6U3RyaW5nLFxuICAgKiAgaGFzaGVkUHJvamVjdElkOlN0cmluZyxcbiAgICogIGhpdGxpc3REYXRhOkFycmF5LFxuICAgKiAgbGFuZ3VhZ2U6TnVtYmVyLFxuICAgKiAgbmV4dFRleHQ6U3RyaW5nLFxuICAgKiAgbm9Jbml0aWFsTG9hZDpCb29sZWFuLFxuICAgKiAgcGFnZUFqYXhFbmFibGVkOkJvb2xlYW4sXG4gICAqICBwYWdlSWQ6U3RyaW5nLFxuICAgKiAgcHJldlRleHQ6U3RyaW5nLFxuICAgKiAgcHJldmlldzpCb29sZWFuLFxuICAgKiAgc2VhcmNoSXRlbXM6QXJyYXksXG4gICAqICBzZWFyY2hWYWx1ZXM6QXJyYXksXG4gICAqICBzZXJ2aWNlVXJsOlN0cmluZyxcbiAgICogIHNlcnZpY2VVcmxNZXRhRGF0YTpTdHJpbmcsXG4gICAqICBzaG93U2luZ2xlVmlld09uUm93U2VsZWN0OkJvb2xlYW4sXG4gICAqICBzaW5nbGVWaWV3QXBpVXJsOlN0cmluZyxcbiAgICogIHNpbmdsZVZpZXdGb3Jtc0NodW5rQXBpVXJsOlN0cmluZyxcbiAgICogIHNpbmdsZVZpZXdUZXh0czpPYmplY3QsXG4gICAqICBzb3J0aW5nUGFnaW5nVmFsdWVzOk9iamVjdCxcbiAgICogIHN0eWxlczpPYmplY3QsXG4gICAqICB2ZXJzaW9uOlN0cmluZ1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiAqL1xuICBzdGF0aWMgZ2V0T3JpZ2luYWxDb25maWcoKXtcbiAgICBsZXQgc2NyaXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpO1xuICAgIGlmKHNjcmlwdHMpe1xuICAgICAgbGV0IGk9c2NyaXB0cy5sZW5ndGgsXG4gICAgICAgICAgY2ZnID0gLyhZXFwuUmVwb3J0YWxcXC5IaXRMaXN0LClcXHMoLio/KVxcKTsvZ2k7XG4gICAgICB3aGlsZShpLS0pe1xuICAgICAgICBsZXQgc2NyaXB0ID0gc2NyaXB0c1tpXS50ZXh0O1xuICAgICAgICBpZihzY3JpcHQuaW5kZXhPZignWS5SZXBvcnRhbC5IaXRMaXN0LCcpPi0xKXtcbiAgICAgICAgICBsZXQgZXhlYyA9IGNmZy5leGVjKHNjcmlwdCk7XG4gICAgICAgICAgcmV0dXJuIChleGVjIT1udWxsICYmIGV4ZWNbMl0pPyBKU09OLnBhcnNlKGV4ZWNbMl0pOiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGl0bGlzdCBjb25maWcgaXMgbm90IHByZXNlbnQgb24gdGhlIHBhZ2UnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0U2V0dXBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3Qtc2V0dXAuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMDcuMDkuMjAxNi5cbiAqL1xuXG5pbXBvcnQgSGl0bGlzdERhdGFzb3VyY2UgZnJvbSBcIi4vaGl0bGlzdC1kYXRhc291cmNlXCI7XG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gXCJyLXJlcG9ydGFsLWJhc2VcIjtcblxud2luZG93LlJlcG9ydGFsID0gd2luZG93LlJlcG9ydGFsIHx8IHt9O1xuUmVwb3J0YWxCYXNlLm1peGluKHdpbmRvdy5SZXBvcnRhbCx7XG4gIEhpdGxpc3REYXRhc291cmNlXG59KTtcbmV4cG9ydCBkZWZhdWx0IEhpdGxpc3REYXRhc291cmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=