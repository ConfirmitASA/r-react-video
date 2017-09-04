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
	        { className: "icon", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTkwNzM4NzQ5YTdhNWJjMjhiODYiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L01ESWNvbi9kaXN0L01ESWNvbi5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9kaXN0L1Byb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vci1yZXBvcnRhbC1iYXNlL3NyYy9yZXBvcnRhbC1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWRUaWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWN0VmlkZW8vTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RWaWRlby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2luZ2xlVmlldy9OYXZCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmdsZVZpZXcvUmVzcG9uc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9TaW5nbGVWaWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvRFNBYnN0cmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlRmxhdHRlbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jcmVhdGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNQYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzRmxhdHRlbmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2hvcnRPdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdHJpY3RJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZ2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9ub29wLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdW5pb25CeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LWRhdGFzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1zZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbImxhdW5jaFZpZGVvSGl0bGlzdCIsImNvbmZpZ05hbWUiLCJ0aHVtYnNQbGFjZWhvbGRlciIsIkVycm9yIiwiVHlwZUVycm9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXBvcnRhbCIsIm1peGluIiwic3RvcmUiLCJyZXF1aXJlIiwidWlkIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJnbG9iYWwiLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwiaXNPYmplY3QiLCJpdCIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsImtleSIsInZhbHVlIiwiZiIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJhRnVuY3Rpb24iLCJmbiIsInRoYXQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJiIiwiYyIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJPIiwiUCIsIkF0dHJpYnV0ZXMiLCJlIiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiZGVmIiwiaGFzIiwiVEFHIiwidGFnIiwic3RhdCIsInByb3RvdHlwZSIsImNvbmZpZ3VyYWJsZSIsInNoYXJlZCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiSU9iamVjdCIsImRlZmluZWQiLCJjb2YiLCJBUkciLCJ0cnlHZXQiLCJUIiwiQiIsImNhbGxlZSIsInNwbGl0IiwiY3R4IiwiaGlkZSIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiRiIsIklTX0dMT0JBTCIsIkciLCJJU19TVEFUSUMiLCJTIiwiSVNfUFJPVE8iLCJJU19CSU5EIiwiSVNfV1JBUCIsIlciLCJleHBQcm90byIsInRhcmdldCIsIm93biIsIm91dCIsIkMiLCJ2aXJ0dWFsIiwiUiIsIlUiLCJleGVjIiwiZG9jdW1lbnRFbGVtZW50IiwiTElCUkFSWSIsInJlZGVmaW5lIiwiSXRlcmF0b3JzIiwiJGl0ZXJDcmVhdGUiLCJzZXRUb1N0cmluZ1RhZyIsImdldFByb3RvdHlwZU9mIiwiSVRFUkFUT1IiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiQmFzZSIsIk5BTUUiLCJDb25zdHJ1Y3RvciIsIm5leHQiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInByb3RvIiwidmFsdWVzIiwiZW50cmllcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwibWV0aG9kcyIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiUHJvbWlzZUNhcGFiaWxpdHkiLCJyZXNvbHZlIiwicmVqZWN0IiwicHJvbWlzZSIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiU0hBUkVEIiwiaW52b2tlIiwiaHRtbCIsImNlbCIsInByb2Nlc3MiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImlkIiwibGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJhcmdzIiwiaSIsInB1c2giLCJuZXh0VGljayIsIm5vdyIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsInNldCIsImNsZWFyIiwidG9JbnRlZ2VyIiwibWluIiwicHgiLCJyYW5kb20iLCJjb25jYXQiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwidCIsInIiLCJyZWFjdCIsIm8iLCJuIiwibG9hZGVkIiwibSIsInAiLCJkZWZhdWx0IiwiTURJY29uIiwiX19lc01vZHVsZSIsIlJlZmVyZW5jZUVycm9yIiwidSIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJsIiwicHJvcHMiLCJmaWxsIiwic2l6ZSIsImljb24iLCJjb25zb2xlIiwibG9nIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicyIsImFzc2lnbiIsIl9pbWFnZU9ubG9hZCIsImJpbmQiLCJfaW1hZ2VPbmVycm9yIiwic3RhdGUiLCJzcmMiLCJwbGFjZWhvbGRlckhpZGRlbiIsInBsYWNlaG9sZGVyIiwic2l6aW5nIiwicG9zaXRpb24iLCJwcm9wb3J0aW9uIiwibG9hZGluZyIsImVycm9yIiwiX2xvYWQiLCJfY29tcHV0ZURpbWVuc2lvbnMiLCJfY29tcHV0ZVByb3BvcnRpb24iLCJhc3BlY3QiLCJzZXRTdGF0ZSIsImluZGV4T2YiLCJtYXAiLCJwYXJzZUZsb2F0Iiwic3Vic3RyaW5nIiwiZCIsInByZWxvYWQiLCJmYWRlIiwiaCIsInBsYWNlaG9sZGVyU2l6aW5nIiwiZyIsImFsdCIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInJvbGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJkaXNwbGF5Iiwib25Mb2FkIiwib25FcnJvciIsIl9yZXNldCIsInByZXZlbnRMb2FkIiwiQ29tcG9uZW50IiwiUHJvbWlzZSIsImZvcmJpZGRlbkZpZWxkIiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpbmRleCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyYWJsZSIsIml0ZXJGbiIsInN0ZXAiLCJpdGVyYXRvciIsInJlc3VsdCIsImRvbmUiLCJ1biIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiQXJyYXlQcm90byIsIkFycmF5IiwicmV0IiwiZGVzY3JpcHRvciIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIml0ZXIiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwidGhlbiIsInRhc2siLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50IiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsImdldEtleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImFycmF5SW5kZXhPZiIsIm5hbWVzIiwiJGtleXMiLCJ2IiwibmV3UHJvbWlzZUNhcGFiaWxpdHkiLCJ4IiwicHJvbWlzZUNhcGFiaWxpdHkiLCJERVNDUklQVE9SUyIsIlNQRUNJRVMiLCJLRVkiLCJEIiwiVE9fU1RSSU5HIiwicG9zIiwiU3RyaW5nIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsIm1heCIsInZhbCIsInZhbHVlT2YiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJhZGRUb1Vuc2NvcGFibGVzIiwiaXRlcmF0ZWQiLCJfdCIsIl9pIiwiX2siLCJBcmd1bWVudHMiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJtaWNyb3Rhc2siLCJuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSIsInBlcmZvcm0iLCJwcm9taXNlUmVzb2x2ZSIsIlBST01JU0UiLCIkUHJvbWlzZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJPd25Qcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJzYW1lQ29uc3RydWN0b3IiLCJpc1RoZW5hYmxlIiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsIm9uVW5oYW5kbGVkIiwidW5oYW5kbGVkIiwiaXNVbmhhbmRsZWQiLCJlbWl0Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJyZWFzb24iLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJ3cmFwcGVyIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJjYXBhYmlsaXR5IiwiYWxsIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCIkYXQiLCJwb2ludCIsIlRPX1NUUklOR19UQUciLCJET01JdGVyYWJsZXMiLCJDb2xsZWN0aW9uIiwiUmVwb3J0YWxCYXNlIiwibGV2ZWwiLCJpc0FycmF5IiwiX2xvZ2dlciIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50Iiwic3RyIiwicmVwbGFjZSIsIlVSTCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZW5kIiwidmFyaWFibGUiLCJxdWVyeSIsImxvY2F0aW9uIiwic2VhcmNoIiwidmFycyIsInBhaXIiLCJ0b0xvd2VyQ2FzZSIsInBhdGgiLCJvcmlnaW4iLCJwYXRobmFtZSIsImZvckVhY2giLCJhUGFpciIsImpvaW4iLCJNRURJQV9UWVBFUyIsIkltYWdlR3JpZFRpbGUiLCJhY3Rpb25CdXR0b24iLCJhY3Rpb25JY29uIiwiYWN0aW9uSWNvbkNsaWNrIiwib25TZWxlY3QiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJfY29tcHV0ZVRpbGVUeXBlIiwibWVkaWF0eXBlIiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJpY29uU2VydmVyIiwiZXNjYXBlIiwiaWNvbnMiLCJhdWRpbyIsInZpZGVvIiwidW5rbm93biIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwibnVtYmVyIiwiZnVuYyIsIkltYWdlR3JpZCIsIml0ZW1DbGlja0hhbmRsZXIiLCJpdGVtIiwiZWRpdEl0ZW0iLCJpdGVtcyIsImR1bW15SXRlbXMiLCJyZW5kZXJEdW1teUl0ZW1zIiwiY291bnQiLCJhcnJheSIsImVsZW1lbnQiLCJpc1JlcXVpcmVkIiwiTmF2aWdhdGlvbiIsImNvbmZpZyIsInBhZ2luYXRpb24iLCJjb250aW51b3VzTmF2aWdhdGlvbiIsInBhZ2luZ05hdmlnYXRpb24iLCJsb2FkTW9yZSIsImRpc2FibGVOZXh0QnV0dG9uIiwidGV4dEFsaWduIiwibG9hZFByZXZpb3VzUGFnZSIsImxvYWROZXh0UGFnZSIsImRpc2FibGVQcmV2QnV0dG9uIiwicGFnZUluZm8iLCJ0cmFuc2xhdGUiLCJSZWFjdFZpZGVvIiwiRFMiLCJjb21wb25lbnQiLCJzaW5nbGVWaWV3TW9kZSIsInNpbmdsZVZpZXciLCJsaW5rIiwic2luZ2xlVmlld1Zpc2libGUiLCJzaW5nbGVWaWV3RGlzYWJsZVByZXYiLCJzaW5nbGVWaWV3RGlzYWJsZU5leHQiLCJpMThuIiwicmV0dXJuVG9HcmlkIiwibG9hZFByZXZpb3VzSXRlbSIsIm5hdmlnYXRlSXRlbXMiLCJsb2FkTmV4dEl0ZW0iLCJnZXRTaW5nbGVWaWV3TmF2U3RhdGUiLCJyZW5kZXJTaW5nbGVWaWV3IiwiY2FuRWRpdCIsInJlbmRlck5hdmlnYXRpb24iLCJkYXRhTG9hZGluZ01lc3NhZ2UiLCJnZXRQYWdlSW5mbyIsIm5hdmlnYXRpb25Qcm9wcyIsImluZGl2aWR1YWxSZWNvcmRzUXVlc3Rpb25JZHMiLCJpbmRpdmlkdWFsUmVjb3Jkc0tleUxhYmVscyIsInJldmVyc2UiLCJhbGxDb2x1bW5zIiwiZmlsdGVyIiwicmVjb3JkIiwibGFiZWwiLCJpcklkcyIsImNvbHVtbiIsIm1lc3NhZ2UiLCJkaXJlY3Rpb24iLCJwYWdpbmF0aW9uVHlwZSIsIml0ZW1zTGVuZ3RoIiwiY3VycmVudFNpbmdsZVZpZXdJdGVtSW5kZXgiLCJuZXh0SW5kZXgiLCJsb2FkSXRlbUZyb21QcmV2aW91c1BhZ2UiLCJsb2FkSXRlbUZyb21OZXh0UGFnZSIsInByb21pc2VkSXRlbXMiLCJzaW5nbGVWaWV3RGF0YSIsIm5ld0l0ZW1zIiwicHJldlN0YXRlIiwiYXREYXRhTGVmdEJvdW5kYXJ5Q2FuTG9hZCIsImF0RGF0YVJpZ2h0Qm91bmRhcnlDYW5Mb2FkIiwiY3VycmVudEl0ZW1JbmRleCIsImluZGl2aWR1YWxSZWNvcmRzIiwiZ2V0TGFiZWxzRm9yTWFpbkZpZWxkcyIsImdldExhYmVsc0ZvckluZGl2aWR1YWxSZWNvcmRzIiwiTmF2QnV0dG9uIiwiUmVzcG9uc2VzIiwiY29sdW1ucyIsImNvbHVtbnNNYXAiLCJtZWRpYSIsImRhdGUiLCJpbnRlcnZpZXdfc3RhcnQiLCJpbnRlcnZpZXdfZW5kIiwibWVkaWFJdGVtIiwicUlEIiwiTmF2QmFyIiwicmV0dXJuVG9HcmlkQWN0aW9uIiwiU2luZ2xlVmlldyIsIm5hdkJhclByb3BzIiwiaWNfc3RhciIsImljX3N0YXJfYm9yZGVyIiwiaWNfYXJyb3dfYmFjayIsImljX2Fycm93X2ZvcndhcmQiLCJpY192aWV3X21vZHVsZSIsIkRTQWJzdHJhY3Rpb24iLCJvcHRpb25zIiwibG9jYXRpb25EZXNlcmlhbGl6ZSIsInNldHVwRGF0YUxpc3RlbmVyIiwiWSIsIkdsb2JhbCIsIm9uIiwiaW5pdGlhbGlzZUNvbmZpZyIsIm1vZGlmaWVyIiwiZmlsdGVySW5mbyIsImluaXRpYWxEYXRhTG9hZCIsInByb2Nlc3NEYXRhIiwiY2F0Y2giLCJoYW5kbGVEYXRhTG9hZGluZ0Vycm9yIiwidHJpbSIsIm1vZGUiLCJuZXdEYXRhIiwiZGF0YVJvdyIsInJvd0luZGV4IiwicGFyc2VkUm93IiwiaXIiLCJkYXRhRmllbGRzIiwiY29sdW1uSUQiLCJwcmVwYXJlRGF0YSIsInJlc3BvbnNlaWQiLCJzbGluayIsInBvcCIsImdlbmVyYXRlTWVkaWFMaW5rIiwiZmlsZU5hbWUiLCJkc05hbWUiLCJzdXJ2ZXlJRCIsInJlcG9ydGlkIiwibmV4dFBhZ2UiLCJwcmV2aW91c1BhZ2UiLCJyZXNwb25zZSIsImluaXRpYWxMb2FkIiwiaGFzUGFnZUluZm8iLCJzb3J0aW5nUGFnaW5nVmFsdWVzIiwidG90YWxIaXRzIiwiZnJlZUdsb2JhbCIsImZyZWVTZWxmIiwicm9vdCIsImJhc2VJc05hdGl2ZSIsImdldFZhbHVlIiwiZ2V0TmF0aXZlIiwiaXNPYmplY3RMaWtlIiwiZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImJhc2VHZXRUYWciLCJsaXN0Q2FjaGVDbGVhciIsImxpc3RDYWNoZURlbGV0ZSIsImxpc3RDYWNoZUdldCIsImxpc3RDYWNoZUhhcyIsImxpc3RDYWNoZVNldCIsIkxpc3RDYWNoZSIsImVudHJ5IiwiZXEiLCJhc3NvY0luZGV4T2YiLCJpc0tleWFibGUiLCJnZXRNYXBEYXRhIiwiX19kYXRhX18iLCJuYXRpdmVDcmVhdGUiLCJpc1N5bWJvbCIsIklORklOSVRZIiwidG9LZXkiLCJNYXAiLCJtYXBDYWNoZUNsZWFyIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsInJlSXNEZWVwUHJvcCIsInJlSXNQbGFpblByb3AiLCJpc0tleSIsInRlc3QiLCJzZXRUb0FycmF5IiwiaWRlbnRpdHkiLCJiYXNlSXNBcmd1bWVudHMiLCJvYmplY3RQcm90byIsImlzQXJndW1lbnRzIiwiTUFYX1NBRkVfSU5URUdFUiIsImlzTGVuZ3RoIiwic3ltYm9sVGFnIiwiU2V0Iiwic2V0Q2FjaGVBZGQiLCJzZXRDYWNoZUhhcyIsIlNldENhY2hlIiwiYWRkIiwic3RhY2tDbGVhciIsInN0YWNrRGVsZXRlIiwic3RhY2tHZXQiLCJzdGFja0hhcyIsInN0YWNrU2V0IiwiU3RhY2siLCJhcnJheVB1c2giLCJvZmZzZXQiLCJjYXN0UGF0aCIsImJhc2VHZXQiLCJiYXNlSXNFcXVhbERlZXAiLCJiYXNlSXNFcXVhbCIsIm90aGVyIiwiYml0bWFzayIsImN1c3RvbWl6ZXIiLCJzdGFjayIsImNhY2hlSGFzIiwiY2FjaGUiLCJzdHJpbmdUb1BhdGgiLCJhcnJheVNvbWUiLCJDT01QQVJFX1BBUlRJQUxfRkxBRyIsIkNPTVBBUkVfVU5PUkRFUkVEX0ZMQUciLCJlcXVhbEFycmF5cyIsImVxdWFsRnVuYyIsImlzUGFydGlhbCIsImFyckxlbmd0aCIsIm90aExlbmd0aCIsInN0YWNrZWQiLCJzZWVuIiwiYXJyVmFsdWUiLCJvdGhWYWx1ZSIsImNvbXBhcmVkIiwib3RoSW5kZXgiLCJyZUlzVWludCIsImlzSW5kZXgiLCJpc1N0cmljdENvbXBhcmFibGUiLCJtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSIsInNyY1ZhbHVlIiwiZnVuY1Byb3RvIiwiZnVuY1RvU3RyaW5nIiwidG9Tb3VyY2UiLCJpc0Z1bmN0aW9uIiwiaXNBcnJheUxpa2UiLCJzdHViRmFsc2UiLCJmcmVlRXhwb3J0cyIsIm5vZGVUeXBlIiwiZnJlZU1vZHVsZSIsIm1vZHVsZUV4cG9ydHMiLCJCdWZmZXIiLCJuYXRpdmVJc0J1ZmZlciIsImlzQnVmZmVyIiwiYXN5bmNUYWciLCJmdW5jVGFnIiwiZ2VuVGFnIiwicHJveHlUYWciLCJiYXNlSXNUeXBlZEFycmF5IiwiYmFzZVVuYXJ5Iiwibm9kZVV0aWwiLCJub2RlSXNUeXBlZEFycmF5IiwiaXNUeXBlZEFycmF5IiwiYXJyYXlMaWtlS2V5cyIsImJhc2VLZXlzIiwiRGF0YVZpZXciLCJoYXNoQ2xlYXIiLCJoYXNoRGVsZXRlIiwiaGFzaEdldCIsImhhc2hIYXMiLCJoYXNoU2V0IiwiSGFzaCIsIlVpbnQ4QXJyYXkiLCJXZWFrTWFwIiwidGhpc0FyZyIsImFycmF5RmlsdGVyIiwicHJlZGljYXRlIiwicmVzSW5kZXgiLCJiYXNlSW5kZXhPZiIsImFycmF5SW5jbHVkZXMiLCJhcnJheUluY2x1ZGVzV2l0aCIsImNvbXBhcmF0b3IiLCJiYXNlVGltZXMiLCJpbmhlcml0ZWQiLCJpc0FyciIsImlzQXJnIiwiaXNCdWZmIiwiaXNUeXBlIiwic2tpcEluZGV4ZXMiLCJhcnJheU1hcCIsIml0ZXJhdGVlIiwiYmFzZUZpbmRJbmRleCIsImZyb21SaWdodCIsImlzRmxhdHRlbmFibGUiLCJiYXNlRmxhdHRlbiIsImRlcHRoIiwiaXNTdHJpY3QiLCJiYXNlR2V0QWxsS2V5cyIsImtleXNGdW5jIiwic3ltYm9sc0Z1bmMiLCJiYXNlSGFzSW4iLCJiYXNlSXNOYU4iLCJzdHJpY3RJbmRleE9mIiwiYXJnc1RhZyIsImVxdWFsQnlUYWciLCJlcXVhbE9iamVjdHMiLCJnZXRUYWciLCJhcnJheVRhZyIsIm9iamVjdFRhZyIsIm9iaklzQXJyIiwib3RoSXNBcnIiLCJvYmpUYWciLCJvdGhUYWciLCJvYmpJc09iaiIsIm90aElzT2JqIiwiaXNTYW1lVGFnIiwib2JqSXNXcmFwcGVkIiwib3RoSXNXcmFwcGVkIiwib2JqVW53cmFwcGVkIiwib3RoVW53cmFwcGVkIiwiYmFzZUlzTWF0Y2giLCJtYXRjaERhdGEiLCJub0N1c3RvbWl6ZXIiLCJvYmpWYWx1ZSIsImlzTWFza2VkIiwicmVSZWdFeHBDaGFyIiwicmVJc0hvc3RDdG9yIiwicmVJc05hdGl2ZSIsIlJlZ0V4cCIsInBhdHRlcm4iLCJib29sVGFnIiwiZGF0ZVRhZyIsImVycm9yVGFnIiwibWFwVGFnIiwibnVtYmVyVGFnIiwicmVnZXhwVGFnIiwic2V0VGFnIiwic3RyaW5nVGFnIiwid2Vha01hcFRhZyIsImFycmF5QnVmZmVyVGFnIiwiZGF0YVZpZXdUYWciLCJmbG9hdDMyVGFnIiwiZmxvYXQ2NFRhZyIsImludDhUYWciLCJpbnQxNlRhZyIsImludDMyVGFnIiwidWludDhUYWciLCJ1aW50OENsYW1wZWRUYWciLCJ1aW50MTZUYWciLCJ1aW50MzJUYWciLCJ0eXBlZEFycmF5VGFncyIsImJhc2VNYXRjaGVzIiwiYmFzZU1hdGNoZXNQcm9wZXJ0eSIsInByb3BlcnR5IiwiYmFzZUl0ZXJhdGVlIiwiaXNQcm90b3R5cGUiLCJuYXRpdmVLZXlzIiwiZ2V0TWF0Y2hEYXRhIiwiaGFzSW4iLCJiYXNlUHJvcGVydHkiLCJiYXNlUHJvcGVydHlEZWVwIiwib3ZlclJlc3QiLCJzZXRUb1N0cmluZyIsImJhc2VSZXN0Iiwic3RhcnQiLCJjb25zdGFudCIsImJhc2VTZXRUb1N0cmluZyIsInN5bWJvbFByb3RvIiwic3ltYm9sVG9TdHJpbmciLCJiYXNlVG9TdHJpbmciLCJjcmVhdGVTZXQiLCJMQVJHRV9BUlJBWV9TSVpFIiwiYmFzZVVuaXEiLCJpbmNsdWRlcyIsImlzQ29tbW9uIiwib3V0ZXIiLCJjb21wdXRlZCIsInNlZW5JbmRleCIsImNvcmVKc0RhdGEiLCJub29wIiwibWFwVG9BcnJheSIsInN5bWJvbFZhbHVlT2YiLCJieXRlTGVuZ3RoIiwiYnl0ZU9mZnNldCIsImJ1ZmZlciIsImNvbnZlcnQiLCJnZXRBbGxLZXlzIiwib2JqUHJvcHMiLCJvYmpMZW5ndGgiLCJvdGhQcm9wcyIsInNraXBDdG9yIiwib2JqQ3RvciIsIm90aEN0b3IiLCJnZXRTeW1ib2xzIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJpc093biIsInVubWFza2VkIiwic3R1YkFycmF5IiwibmF0aXZlR2V0U3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbCIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJBcnJheUJ1ZmZlciIsIkN0b3IiLCJjdG9yU3RyaW5nIiwiaGFzUGF0aCIsImhhc0Z1bmMiLCJIQVNIX1VOREVGSU5FRCIsInNwcmVhZGFibGVTeW1ib2wiLCJpc0NvbmNhdFNwcmVhZGFibGUiLCJtYXNrU3JjS2V5IiwiYXJyYXlQcm90byIsInNwbGljZSIsImxhc3RJbmRleCIsIm1lbW9pemUiLCJNQVhfTUVNT0laRV9TSVpFIiwibWVtb2l6ZUNhcHBlZCIsIm92ZXJBcmciLCJmcmVlUHJvY2VzcyIsImJpbmRpbmciLCJ0cmFuc2Zvcm0iLCJhcmciLCJuYXRpdmVNYXgiLCJvdGhlckFyZ3MiLCJzaG9ydE91dCIsIkhPVF9DT1VOVCIsIkhPVF9TUEFOIiwibmF0aXZlTm93IiwiRGF0ZSIsImxhc3RDYWxsZWQiLCJzdGFtcCIsInBhaXJzIiwicmVMZWFkaW5nRG90IiwicmVQcm9wTmFtZSIsInJlRXNjYXBlQ2hhciIsIm1hdGNoIiwicXVvdGUiLCJkZWZhdWx0VmFsdWUiLCJpc0FycmF5TGlrZU9iamVjdCIsIkZVTkNfRVJST1JfVEVYVCIsInJlc29sdmVyIiwibWVtb2l6ZWQiLCJDYWNoZSIsInVuaW9uQnkiLCJhcnJheXMiLCJIaXRsaXN0RGF0YXNvdXJjZSIsIl9zZWFyY2hWYWx1ZXMiLCJyZXF1ZXN0UmVzcG9uc2UiLCJfc2tpcFBhZ2UiLCJpc1BhZ2luZyIsImhpdGxpc3RJRCIsInBhcmFtcyIsIlBhZ2VJZCIsInBhZ2VJRCIsInBhZ2VTdGF0ZUlkIiwicGFnZVN0YXRlSUQiLCJQcmV2aWV3IiwicHJldmlldyIsImF0dHJuYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhZ2luZ1ZhbHVlcyIsInBhZ2VOdW1iZXIiLCJwYWdpbmdGb3J3YXJkIiwicHJvbWlzZVJlcXVlc3QiLCJzZXJ2aWNlVVJMIiwic2VyaWFsaXplUGFyYW1zIiwicGFyc2VSZXNwb25zZSIsInBhcnNlIiwiX3NwdiIsInB2Iiwic3RhcnRJZCIsImxhc3RTdGFydElkIiwiZmlyc3RTdGFydElkIiwic3RhcnRWYWx1ZSIsImxhc3RTdGFydFZhbHVlIiwiZmlyc3RTdGFydFZhbHVlIiwiSGl0bGlzdFNldHVwIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsIl9jb25maWciLCJnZXRPcmlnaW5hbENvbmZpZyIsIl9lbGVtZW50VHlwZSIsIkhpdExpc3RFbGVtZW50VHlwZSIsIl9vcCIsIlNlYXJjaGFibGVMaXN0T3BlcmF0b3IiLCJjYXB0aW9ucyIsInNpbmdsZVZpZXdUZXh0cyIsImhpdGxpc3REYXRhIiwiY29tcG9uZW50SWQiLCJwYWdlSWQiLCJsYW5ndWFnZSIsInNlcnZpY2VVcmwiLCJxdWVyeVNlbGVjdG9yIiwianNvbkRhdGUiLCJMYW5nIiwiY29uc3RyIiwiZXZhbCIsInNjcmlwdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2ZnIiwic2NyaXB0IiwidGV4dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OzsrUUN0Q0E7Ozs7O0FBR0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS0EsS0FBTUEscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsVUFBRCxFQUF1QztBQUFBLE9BQTNCQyxpQkFBMkIsdUVBQVQsSUFBUzs7QUFDaEUsT0FBRyxDQUFDRCxVQUFKLEVBQWU7QUFDYixXQUFNLElB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QUFMLENBQWYsR0FBeUJvekIsS0FBS1MsS0FBTCxDQUFXN3pCLEtBQUssQ0FBTCxDQUFYLENBQXpCLEdBQThDLElBQXJEO0FBQ0Q7QUFDRjtBQUNGLFFBVkQsTUFVTztBQUNMLGVBQU0sSUFBSXhHLEtBQUosQ0FBVSwyQ0FBVixDQUFOO0FBQ0Q7QUFDRjs7Ozs7O21CQUdZODZCLFk7Ozs7Ozs7Ozs7Ozs7QUNwSmY7Ozs7QUFDQTs7Ozs7O0FBTEE7Ozs7QUFPQTU2QixRQUFPSyxRQUFQLEdBQWtCTCxPQUFPSyxRQUFQLElBQW1CLEVBQXJDO0FBQ0EseUJBQWFDLEtBQWIsQ0FBbUJOLE9BQU9LLFFBQTFCLEVBQW1DO0FBQ2pDdTRCO0FBRGlDLEVBQW5DIiwiZmlsZSI6InItcmVhY3QtdmlkZW8uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTkwNzM4NzQ5YTdhNWJjMjhiODYiLCIvKipcclxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMS4wMS4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5pbXBvcnQgbWFpbkNTUyBmcm9tICcuL21haW4uY3NzJztcclxuaW1wb3J0IFJlYWN0VmlkZW8gZnJvbSAnLi9SZWFjdFZpZGVvJztcclxuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tICdyLXJlcG9ydGFsLWJhc2UnO1xyXG5cclxuLyoqXHJcbiAqIGluaXRpYWxpc2UgSGl0TGlzdCBvbiBET01Db250ZW50TG9hZGVkIGZvciBhIHF1aWNrZXIgY29sZC1zdGFydCwgbm8gbmVlZCB0byB3YWl0IGZvciB0aGUgb3JpZ2luYWwgSGl0TGlzdFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnTmFtZSAtIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHBhc3NlZCB0byBET00gYXMgYSBjb25maWdcclxuICogQHBhcmFtIHtCb29sZWFufSBbdGh1bWJzUGxhY2Vob2xkZXI9dHJ1ZV0gLSBkaXNwbGF5IHRodW1icyBhcyBpbWFnZSBwbGFjZWhvbGRlcnMgaW5zdGVhZCBvZiBtZWRpYSBpY29uc1xyXG4gKiAqL1xyXG5jb25zdCBsYXVuY2hWaWRlb0hpdGxpc3QgPSAoY29uZmlnTmFtZSx0aHVtYnNQbGFjZWhvbGRlcj10cnVlKSA9PiB7XHJcbiAgaWYoIWNvbmZpZ05hbWUpe1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25maWcgaXMgbm90IHNwZWNpZmllZCEnKVxyXG4gIH0gZWxzZSBpZihjb25maWdOYW1lICYmIHR5cGVvZiBjb25maWdOYW1lICE9ICdzdHJpbmcnKXtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGNvbmZpZyBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBhICR7dHlwZW9mIGNvbmZpZ05hbWV9YClcclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICA8UmVhY3RWaWRlb1xyXG4gICAgICBjb25maWc9e2NvbmZpZ05hbWV9XHJcbiAgICAgIHRodW1ic1BsYWNlaG9sZGVyPXt0aHVtYnNQbGFjZWhvbGRlcn1cclxuICAgICAgdmVyYm9zZVxyXG4gICAgICAvPixkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxyXG4gIH0pO1xyXG59O1xyXG5cclxud2luZG93LlJlcG9ydGFsID0gd2luZG93LlJlcG9ydGFsIHx8IHt9O1xyXG5SZXBvcnRhbEJhc2UubWl4aW4od2luZG93LlJlcG9ydGFsLHtcclxuICBsYXVuY2hWaWRlb0hpdGxpc3RcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMCcgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtcInJlYWN0XCJdLHQpO2Vsc2V7dmFyIHI9dChcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwicmVhY3RcIik6ZS5yZWFjdCk7Zm9yKHZhciBvIGluIHIpKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbb109cltvXX19KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobyl7aWYocltvXSlyZXR1cm4gcltvXS5leHBvcnRzO3ZhciBuPXJbb109e2V4cG9ydHM6e30saWQ6byxsb2FkZWQ6ITF9O3JldHVybiBlW29dLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHQpLG4ubG9hZGVkPSEwLG4uZXhwb3J0c312YXIgcj17fTtyZXR1cm4gdC5tPWUsdC5jPXIsdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1yKDEpO3QuZGVmYXVsdD1vLk1ESWNvbixlLmV4cG9ydHM9dC5kZWZhdWx0fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gaShlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fWZ1bmN0aW9uIHUoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lk1ESWNvbj12b2lkIDA7dmFyIGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBvPXRbcl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxyLG8pe3JldHVybiByJiZlKHQucHJvdG90eXBlLHIpLG8mJmUodCxvKSx0fX0oKSxmPXIoMiksbD1vKGYpLGE9dC5NREljb249ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe3JldHVybiBuKHRoaXMsdCksaSh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfXJldHVybiB1KHQsZSksYyh0LFt7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLHQ9ZS5maWxsLHI9ZS5zaXplLG89ZS5pY29uLG49ZS5jaGlsZHJlbjtyZXR1cm4gY29uc29sZS5sb2codCxyLG8sbiksbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7eG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGZpbGw6dCx3aWR0aDpyLGhlaWdodDpyLHZpZXdCb3g6XCIwIDAgMjQgMjRcIixjaGlsZHJlbjpvfHxufSl9fV0pLHR9KGYuUHVyZUNvbXBvbmVudCk7YS5kZWZhdWx0UHJvcHM9e3NpemU6MjQsZmlsbDpcInJnYmEoMCwwLDAsLjg1KVwifX0sZnVuY3Rpb24odCxyKXt0LmV4cG9ydHM9ZX1dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TURJY29uLmJ1bmRsZS5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L01ESWNvbi9kaXN0L01ESWNvbi5idW5kbGUuanMiLCIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtcInJlYWN0XCJdLHQpO2Vsc2V7dmFyIG89dChcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwicmVhY3RcIik6ZS5yZWFjdCk7Zm9yKHZhciByIGluIG8pKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbcl09b1tyXX19KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQocil7aWYob1tyXSlyZXR1cm4gb1tyXS5leHBvcnRzO3ZhciBuPW9bcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiBlW3JdLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHQpLG4ubG9hZGVkPSEwLG4uZXhwb3J0c312YXIgbz17fTtyZXR1cm4gdC5tPWUsdC5jPW8sdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBpKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9ZnVuY3Rpb24gYShlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBvPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbylPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobyxyKSYmKGVbcl09b1tyXSl9cmV0dXJuIGV9LGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciByPXRbb107ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxvLHIpe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLHImJmUodCxyKSx0fX0oKSxwPW8oMSksdT1yKHApLGM9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXtuKHRoaXMsdCk7dmFyIG89aSh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsKHRoaXMsZSkpO3JldHVybiBvLl9pbWFnZU9ubG9hZD1vLl9pbWFnZU9ubG9hZC5iaW5kKG8pLG8uX2ltYWdlT25lcnJvcj1vLl9pbWFnZU9uZXJyb3IuYmluZChvKSxvLnN0YXRlPXtzcmM6dm9pZCAwLHBsYWNlaG9sZGVySGlkZGVuOiFvLnByb3BzLnBsYWNlaG9sZGVyLHNpemluZzpvLnByb3BzLnNpemluZz9vLnByb3BzLnNpemluZzpudWxsLHBvc2l0aW9uOm8ucHJvcHMucG9zaXRpb24/by5wcm9wcy5wb3NpdGlvbjpcImNlbnRlclwiLHByb3BvcnRpb246MCxsb2FkZWQ6ITEsbG9hZGluZzohMSxlcnJvcjohMX0sb31yZXR1cm4gYSh0LGUpLGwodCxbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkKCksdGhpcy5fY29tcHV0ZURpbWVuc2lvbnMoKSx0aGlzLl9jb21wdXRlUHJvcG9ydGlvbih0aGlzLnByb3BzLmFzcGVjdCl9fSx7a2V5OlwiX2NvbXB1dGVEaW1lbnNpb25zXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLHQ9ZS53aWR0aCxvPWUuaGVpZ2h0O3RoaXMuc2V0U3RhdGUoe3dpZHRoOmlzTmFOKHQpP3Q6dCtcInB4XCIsaGVpZ2h0OmlzTmFOKG8pP286bytcInB4XCJ9KX19LHtrZXk6XCJfY29tcHV0ZVByb3BvcnRpb25cIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlJiZlLmluZGV4T2YoXCI6XCIpPi0xKXt2YXIgdD1lLnNwbGl0KFwiOlwiKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlRmxvYXQoZSl9KTtpc05hTih0WzBdKXx8aXNOYU4odFsxXSl8fHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24oZSl7aWYoIWlzTmFOKHBhcnNlRmxvYXQoZS53aWR0aCkpKXJldHVybntwcm9wb3J0aW9uOihwYXJzZUZsb2F0KGUud2lkdGgpKih0WzFdL3RbMF0pKS50b1N0cmluZygpK2Uud2lkdGguc3Vic3RyaW5nKHBhcnNlRmxvYXQoZS53aWR0aCkudG9TdHJpbmcoKS5sZW5ndGgpLGhlaWdodDpcImF1dG9cIn19KX19fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnN0YXRlLHQ9ZS53aWR0aCxvPWUuaGVpZ2h0LHI9ZS5wcm9wb3J0aW9uLG49ZS5zcmMsaT1lLnNpemluZyxhPWUucG9zaXRpb24scz1lLmxvYWRpbmcsbD1lLmxvYWRlZCxwPWUucGxhY2Vob2xkZXJIaWRkZW4sYz10aGlzLnByb3BzLGQ9Yy5wcmVsb2FkLGY9Yy5mYWRlLGg9Yy5wbGFjZWhvbGRlclNpemluZyxnPWMucGxhY2Vob2xkZXIsbT1jLmFsdDtyZXR1cm4gdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiUHJvcG9ydGlvbmFsSW1hZ2VcIixzdHlsZTp7d2lkdGg6dCxoZWlnaHQ6byxwYWRkaW5nVG9wOnJ9fSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJzaXplZEltZ0RpdlwiLHJvbGU6XCJpbWdcIixzdHlsZTp7YmFja2dyb3VuZEltYWdlOm4/XCJ1cmwoXCIrbitcIilcIjp2b2lkIDAsYmFja2dyb3VuZFNpemU6aSxiYWNrZ3JvdW5kUG9zaXRpb246YSxiYWNrZ3JvdW5kUmVwZWF0Omk/XCJuby1yZXBlYXRcIjpcImluaXRpYWxcIixkaXNwbGF5Omk/XCJibG9ja1wiOlwibm9uZVwifX0pLHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3NyYzpuLGFsdDptLG9uTG9hZDp0aGlzLl9pbWFnZU9ubG9hZCxvbkVycm9yOnRoaXMuX2ltYWdlT25lcnJvcixzdHlsZTp7ZGlzcGxheTppP1wibm9uZVwiOlwiYmxvY2tcIn19KSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp7YmFja2dyb3VuZEltYWdlOmc/XCJ1cmwoXCIrZytcIilcIjp2b2lkIDAsYmFja2dyb3VuZFNpemU6aD9oOmksYmFja2dyb3VuZFBvc2l0aW9uOmEsYmFja2dyb3VuZFJlcGVhdDppP1wibm8tcmVwZWF0XCI6XCJpbml0aWFsXCJ9LGNsYXNzTmFtZTpcImltYWdlUGxhY2Vob2xkZXIgXCIrKHAmJlwiaGlkZGVuXCIpK1wiIFwiKyhkJiZmJiYhcyYmbCYmXCJmYWRlZC1vdXRcIil9KSl9fSx7a2V5OlwiX2ltYWdlT25sb2FkXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiExLGxvYWRlZDohMCxlcnJvcjohMX0pfX0se2tleTpcIl9pbWFnZU9uZXJyb3JcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2V0U3RhdGUocyh7fSx0aGlzLl9yZXNldCgpLHtlcnJvcjohMH0pKX19LHtrZXk6XCJfcmVzZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybntzcmM6dm9pZCAwLGxvYWRpbmc6ITEsbG9hZGVkOiExLGVycm9yOiExfX19LHtrZXk6XCJfbG9hZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fcmVzZXQoKTtpZighdGhpcy5wcm9wcy5wcmV2ZW50TG9hZCl7dmFyIHQ9dGhpcy5wcm9wcy5zcmM7ZS5zcmMhPT10JiYoZT1zKHt9LGUse3NyYzp0P3Q6dm9pZCAwLGxvYWRpbmc6ISF0fSkpfXRoaXMuc2V0U3RhdGUoZSl9fV0pLHR9KHUuZGVmYXVsdC5Db21wb25lbnQpO3QuZGVmYXVsdD1jfSxmdW5jdGlvbih0LG8pe3QuZXhwb3J0cz1lfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9wb3J0aW9uYWxJbWFnZS5idW5kbGUuanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9kaXN0L1Byb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZXM2L3Byb21pc2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYgKE9ic2VydmVyKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ2YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBMSUJSQVJZID8gZnVuY3Rpb24gKGEsIGIpIHtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59IDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICBpZiAocHJvbWlzZS5faCA9PSAxKSByZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYztcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVhY3Rpb247XG4gIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSB7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmIChyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSkgcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmICh4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKSByZXR1cm4geDtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUodGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiaW1wb3J0IFByb21pc2UgZnJvbSAnY29yZS1qcy9saWJyYXJ5L2VzNi9wcm9taXNlJztcblxuY2xhc3MgUmVwb3J0YWxCYXNlIHtcblxuICAvKipcbiAgICogQ29waWVzIHByb3BzIGZyb20gYSBzb3VyY2Ugb2JqZWN0IHRvIGEgdGFyZ2V0IG9iamVjdC5cbiAgICpcbiAgICogTm90ZSwgdGhpcyBtZXRob2QgdXNlcyBhIHNpbXBsZSBgZm9yLi4uaW5gIHN0cmF0ZWd5IGZvciBlbnVtZXJhdGluZ1xuICAgKiBwcm9wZXJ0aWVzLiAgVG8gZW5zdXJlIG9ubHkgYG93blByb3BlcnRpZXNgIGFyZSBjb3BpZWQgZnJvbSBzb3VyY2VcbiAgICogdG8gdGFyZ2V0IGFuZCB0aGF0IGFjY2Vzc29yIGltcGxlbWVudGF0aW9ucyBhcmUgY29waWVkLCB1c2UgYGV4dGVuZGAuXG4gICAqXG4gICAqIEBtZXRob2QgbWl4aW5cbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBUYXJnZXQgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBTb3VyY2Ugb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRhcmdldCBvYmplY3QgdGhhdCB3YXMgcGFzc2VkIGFzIGZpcnN0IGFyZ3VtZW50LlxuICAgKi9cbiAgc3RhdGljIG1peGluKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yICh2YXIgaSBpbiBzb3VyY2UpIHtcbiAgICAgIHRhcmdldFtpXSA9IHNvdXJjZVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHN0YXRpYyBfbG9nZ2VyKGxldmVsLCBhcmdzKSB7XG4gICAgLy8gYWNjZXB0IFsnZm9vJywgJ2JhciddIGFuZCBbWydmb28nLCAnYmFyJ11dXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgIH1cbiAgICAvLyBvbmx5IGFjY2VwdCBsb2dnaW5nIGZ1bmN0aW9uc1xuICAgIHN3aXRjaChsZXZlbCkge1xuICAgICAgY2FzZSAnbG9nJzpcbiAgICAgIGNhc2UgJ3dhcm4nOlxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICBjb25zb2xlW2xldmVsXS5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIF9sb2coKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHRoaXMuX2xvZ2dlcignbG9nJywgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgX3dhcm4oKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHRoaXMuX2xvZ2dlcignd2FybicsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIF9lcnJvcigpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgdGhpcy5fbG9nZ2VyKCdlcnJvcicsIGFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuYW1lZCBldmVudCB3aXRoIGBuYW1lYFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEByZXR1cm4ge0V2ZW50fSBSZXR1cm5zIGEgY3JlYXRlZCBldmVudFxuICAgKiAqL1xuICBzdGF0aWMgbmV3RXZlbnQobmFtZSl7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNwZWN0cyBpZiB0aGUgY3VycmVudCBzdHJpbmcgbWlnaHQgYmUgY29udmVydGVkIHRvIG51bWJlciBhbmQgcmVuZGVycyBpdCBhcyBudW1iZXIuIElmIHN0cmluZyBsZW5ndGggaXMgMCwgcmV0dXJucyBgbnVsbGAuIElmIG5vbmUgYXBwbGllcyByZXR1cm5zIHRoZSBzdHJpbmcgYXMgaXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSB2YWx1ZSBvZiB0aGUgY2VsbCBpZiBub3QgSFRNTCBjb250ZW50c1xuICAgKiBAcmV0dXJuIHtOdW1iZXJ8bnVsbHxTdHJpbmd9XG4gICAqICovXG4gIHN0YXRpYyBpc051bWJlcihzdHIpe1xuICAgIGlmKCFpc05hTihwYXJzZUZsb2F0KHN0cikpKXtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8sL2ksJycpOy8vIHJlbW92ZSB1bm5lY2Vzc2FyeSBjb21tYSBhcyBhIGRlbGltaXRlciBmb3IgdGhvdXNhbmRzIGZyb20gZGF0YS5cbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cik7XG4gICAgfSBlbHNlIGlmKHN0ci5sZW5ndGg9PTApe3JldHVybiBudWxsfSBlbHNlIHtyZXR1cm4gc3RyfVxuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBYSFIgd3JhcHBlZCBpbiBhIFByb21pc2VcbiAgICogQHBhcmFtIHshU3RyaW5nfSBVUkwgLSB1cmwgdG8gc2VuZCBhIGBHRVRgIHJlcXVlc3QgdG9cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmV0dXJucyBhIHRoZW4tYWJsZSBwcm9taXNlIHdpdGggYFhNTEh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dGBcbiAgICogKi9cbiAgc3RhdGljIHByb21pc2VSZXF1ZXN0KFVSTCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKCdHRVQnLCBVUkwsIHRydWUpO1xuICAgICAgeGhyLm9ubG9hZCA9ICgpPT57eGhyLnN0YXR1cyA9PSAyMDA/cmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0KTpyZWplY3QoRXJyb3IoYCR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9YCkpO31cbiAgICAgIHhoci5vbmVycm9yID0gKCk9PntyZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTt9XG4gICAgICB4aHIuc2VuZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSB2YXJpYWJsZSBsaXN0ZWQgaW4gcXVlcnkgc3RyaW5nXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gdmFyaWFibGUgLSB2YXJpYWJsZSBuYW1lIHRvIGdldCB2YWx1ZSBmb3JcbiAgICogQHBhcmFtIHtTdHJpbmc9fSBbcXVlcnk9d2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSldIC0gdGhlIHF1ZXJ5IHN0cmluZyB0byBzZWFyY2ggdmFyaWFibGUgZm9yIGluXG4gICAqIEByZXR1cm4ge1N0cmluZ30gUmV0dXJucyB2YWx1ZSBmb3IgdGhlIHZhcmlhYmxlXG4gICAqICovXG4gIHN0YXRpYyBnZXRRdWVyeVZhcmlhYmxlKHZhcmlhYmxlLHF1ZXJ5PXdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKXtcbiAgICB2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KFwiJlwiKTtcbiAgICBmb3IgKHZhciBpPTA7aTx2YXJzLmxlbmd0aDtpKyspIHtcbiAgICAgIHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICBpZigocGFpclswXSkudG9Mb3dlckNhc2UoKSA9PSB2YXJpYWJsZS50b0xvd2VyQ2FzZSgpKXtyZXR1cm4gcGFpclsxXTt9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIFxuICAvKipcbiAgICogdHVybnMgYHdpbmRvdy5sb2NhdGlvbmAgb2JqZWN0IGludG8gYW4gb2JqZWN0IHdpdGggcGFyYW1zIGFzIG5hbWVkIGtleXMgbmVjZXNzYXJ5IHRvIHJlY29uc3RydWN0IHRoZSBVUkxcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBbbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb25dIC0gYSB3aW5kb3cubG9jYXRpb24gb2JqZWN0LCBieSBkZWZhdWx0IG9mIHRoZSBob3N0IHdpbmRvdyB3aGVyZSB0aGUgc2NyaXB0IGlzIGV4ZWN1dGVkXG4gICAqIEByZXR1cm5zIHt7cGF0aDpTdHJpbmcsIHF1ZXJ5Ok9iamVjdH19IGEgYGxvY2F0aW9uYCBvYmplY3RcbiAgICogKi9cbiAgc3RhdGljIGxvY2F0aW9uRGVzZXJpYWxpemUobG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24pe1xuICAgIGxldCBvID0ge1xuICAgICAgcGF0aDogbG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBxdWVyeTp7fVxuICAgIH07XG4gICAgbG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKS5zcGxpdCgvJi8pLmZvckVhY2gocGFpcj0+e1xuICAgICAgbGV0IGFQYWlyPSBwYWlyLnNwbGl0KC89Lyk7XG4gICAgICBvLnF1ZXJ5W2FQYWlyWzBdLnRvTG93ZXJDYXNlKCldID0gYVBhaXJbMV1cbiAgICB9KTtcbiAgICByZXR1cm4gb1xuICB9XG5cbiAgLyoqXG4gICAqIFR1cm5zIGEgYGxvY2F0aW9uYCBvYmplY3QgKHJlc3VsdCBvZiBgbG9jYXRpb25EZXNlcmlhbGl6ZWApIGludG8gYSBVUkxcbiAgICogQHBhcmFtIHt7cGF0aDpTdHJpbmcsIHF1ZXJ5Ok9iamVjdH19IGxvY2F0aW9uIC0gYW4gb2JqZWN0IHdpdGggcGFyYW1zIGFuZCBhIHVybFxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtIGEgVVJMIHN0cmluZ1xuICAgKiAqL1xuICBzdGF0aWMgbG9jYXRpb25TZXJpYWxpemUobG9jYXRpb24pe1xuICAgIGxldCBxdWVyeT1bXTtcbiAgICBmb3IobGV0IGtleSBpbiBsb2NhdGlvbi5xdWVyeSl7XG4gICAgICBxdWVyeS5wdXNoKFtrZXksbG9jYXRpb24ucXVlcnlba2V5XV0uam9pbignPScpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGggKyAnPycgKyBxdWVyeS5qb2luKCcmJyk7XG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0YWxCYXNlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItcmVwb3J0YWwtYmFzZS9zcmMvcmVwb3J0YWwtYmFzZS5qcyIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1nIGZyb20gJ1Byb3BvcnRpb25hbEltYWdlJztcclxuXHJcbmNvbnN0IE1FRElBX1RZUEVTID0gWydpbWFnZScsICdhdWRpbycsICd2aWRlbyddO1xyXG5cclxuY2xhc3MgSW1hZ2VHcmlkVGlsZSBleHRlbmRzIFB1cmVDb21wb25lbnR7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHRpbGUgZm9yIGltYWdlIGxpc3RcclxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuaW1hZ2UgLSBpbWFnZSB1cmxcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMucGxhY2Vob2xkZXIgLSBhIHBsYWNlaG9sZGVyIGltYWdlXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyU2l6aW5nIC0gU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlci4gQnkgZGVmYXVsdCBpdCdzIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNyY2AgaW1hZ2UsIGJ1dCBzZXQgdG8gYGluaXRpYWxgIG9yIG90aGVyIHZhbGlkIGBiYWNrZ3JvdW5kLXNpemVgIHZhbHVlIHRvIG92ZXJyaWRlLlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5tZWRpYXR5cGUgLSBhIGRlZmF1bHQgbWVkaWEgaWNvbiBpbnN0ZWFkIG9mIHRoZSBwbGFjZWhvbGRlciBpbWFnZTogb25lIG9mIGBpbWFnZWAsYGF1ZGlvYCxgdmlkZW9gXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5pY29uQ29sb3I9XCIjY2NjY2NjXCJdIC0gZGVmYXVsdCBwbGFjZWhvbGRlciBtZWRpYSBpY29uIGNvbG9yXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5pY29uU2l6ZT00OF0gLSBkZWZhdWx0IHBsYWNlaG9sZGVyIG1lZGlhIGljb24gc2l6ZVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuYXNwZWN0PVwiMTY6OVwiXSAtIGFzcGVjdCByYXRpbyBvZiB0aGUgaW1hZ2UgdG8gYmUgaW4gdGhlIHRpbGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy50aXRsZSAtIHRpdGxlIG9mIHRoZSB2aWRlb1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5kZXNjcmlwdGlvbiAtIGRlc2NyaXB0aW9uIG9mIHRoZSB2aWRlb1xyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMuYWN0aW9uSWNvbiAtIGljb24gdG8gZGlzcGxheSBhcyB0aGUgYWN0aW9uIGljb24uIEl0IGFsc28gaGFzIHRvIGhhdmUgYSBjYWxsYmFjayBhdHRhY2hlZCB0byBpdCB3aGVuIHBhc3NlZC5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblNlbGVjdCAtIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGxpbmsgaXMgY2xpY2tlZFxyXG4gICAqICovXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBhY3Rpb25CdXR0b24gPSBudWxsO1xyXG4gICAgY29uc3Qge2FjdGlvbkljb24sYWN0aW9uSWNvbkNsaWNrLG9uU2VsZWN0LGFzcGVjdCx0aXRsZSxwbGFjZWhvbGRlclNpemluZyxpbWFnZSxkZXNjcmlwdGlvbn09dGhpcy5wcm9wcztcclxuICAgIGlmICh0aGlzLnByb3BzLmFjdGlvbkljb24pIHtcclxuICAgICAgYWN0aW9uQnV0dG9uID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tZWRpdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tYWN0aW9uLWljb24gcmlwcGxlXCIgb25DbGljaz17YWN0aW9uSWNvbkNsaWNrfT57YWN0aW9uSWNvbn08L2Rpdj5cclxuICAgICAgPC9kaXY+KVxyXG4gICAgICA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWNvdmVyXCIgb25DbGljaz17b25TZWxlY3R9PlxyXG4gICAgICAgICAgPEltZ1xyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cclxuICAgICAgICAgICAgc2l6aW5nPVwiY292ZXJcIlxyXG4gICAgICAgICAgICBwcmVsb2FkPXt0cnVlfVxyXG4gICAgICAgICAgICBmYWRlPXt0cnVlfVxyXG4gICAgICAgICAgICBhbHQ9e3RpdGxlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5fY29tcHV0ZVRpbGVUeXBlKCl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyU2l6aW5nPXtwbGFjZWhvbGRlclNpemluZ31cclxuICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLW1ldGFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS10aXRsZSBlbGxpcHNpc1wiIG9uQ2xpY2s9e29uU2VsZWN0fT57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tZGVzY3JpcHRpb24gZWxsaXBzaXNcIj57ZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHthY3Rpb25CdXR0b259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgX2NvbXB1dGVUaWxlVHlwZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHtwbGFjZWhvbGRlcixtZWRpYXR5cGUsaWNvblNpemUsaWNvbkNvbG9yfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGlmICghcGxhY2Vob2xkZXIgJiYgbWVkaWF0eXBlKSB7XHJcbiAgICAgICAgaWYgKE1FRElBX1RZUEVTLmluZGV4T2YobWVkaWF0eXBlKSA9PT0gLTEpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIHR5cGUgXCIke21lZGlhdHlwZX1cIiBpcyBzcGVjaWZpZWRgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaWNvbiA9IEltYWdlR3JpZFRpbGUuaWNvblNlcnZlcihtZWRpYXR5cGUsIGljb25TaXplLCBpY29uQ29sb3IpO1xyXG4gICAgICAgIHJldHVybiAnZGF0YTppbWFnZS9zdmcreG1sLCcgKyBlc2NhcGUoaWNvbik7XHJcbiAgICAgIH0gZWxzZSBpZighIXBsYWNlaG9sZGVyKXtcclxuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZXNjYXBlKEltYWdlR3JpZFRpbGUuaWNvblNlcnZlcigndW5rbm93bicsIGljb25TaXplLCBpY29uQ29sb3IpKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIGljb24gd2l0aCBhIGNvcnJlY3QgZmlsbCBjb2xvclxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gaWNvbiBuYW1lIChvbmUgb2YgYGltYWdlYCwgYHZpZGVvYCwgYGF1ZGlvYClcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3NpemU9MjRdIC0gaWNvbiBzaXplIGluIHBpeGVsc1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZmlsbD1cIiNjY2NjY2NcIl0gLSB2YWxpZCBDU1MgY29sb3IgZGVjbGFyYXRpb25cclxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gICAqICovXHJcbiAgc3RhdGljIGljb25TZXJ2ZXIobmFtZSwgc2l6ZSA9IDQ4LCBmaWxsID0gXCIjY2NjY2NjXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGljb25zID0ge1xyXG4gICAgICAgIGltYWdlOiBgPHBhdGggZD1cIk0yMSAxOVY1YzAtMS4xLS45LTItMi0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ6TTguNSAxMy41bDIuNSAzLjAxTDE0LjUgMTJsNC41IDZINWwzLjUtNC41elwiLz5gLFxyXG4gICAgICAgIGF1ZGlvOiBgPHBhdGggZD1cIk0xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnpcIi8+YCxcclxuICAgICAgICB2aWRlbzogYDxwYXRoIGQ9XCJNMTggNGwyIDRoLTNsLTItNGgtMmwyIDRoLTNsLTItNEg4bDIgNEg3TDUgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY0aC00elwiLz5gLFxyXG4gICAgICAgIHVua25vd246IGA8cGF0aCBkPVwiTTIxIDV2Ni41OWwtMy0zLjAxLTQgNC4wMS00LTQtNCA0LTMtMy4wMVY1YzAtMS4xLjktMiAyLTJoMTRjMS4xIDAgMiAuOSAyIDJ6bS0zIDYuNDJsMyAzLjAxVjE5YzAgMS4xLS45IDItMiAySDVjLTEuMSAwLTItLjktMi0ydi02LjU4bDMgMi45OSA0LTQgNCA0IDQtMy45OXpcIi8+YCxcclxuICAgICAgfTtcclxuICAgICAgaWYgKCFpY29uc1tuYW1lXSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaWNvbiBcIiR7bmFtZX1cIiBpcyBub3Qgb24gdGhlIGxpc3RgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYDxzdmcgZmlsbD1cIiR7ZmlsbH1cIiBoZWlnaHQ9XCIke3NpemV9XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiJHtzaXplfVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4ke2ljb25zW25hbWVdfTwvc3ZnPmBcclxuICAgIH0gY2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuSW1hZ2VHcmlkVGlsZS5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2UgICAgICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhY2Vob2xkZXIgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhY2Vob2xkZXJTaXppbmc6IFByb3BUeXBlcy5vbmVPZihbJ2NvbnRhaW4nLCAnY292ZXInLCAnaW5pdGlhbCddKSxcclxuICBtZWRpYXR5cGUgICAgICAgIDogUHJvcFR5cGVzLm9uZU9mKE1FRElBX1RZUEVTKSxcclxuICBpY29uQ29sb3IgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpY29uU2l6ZSAgICAgICAgIDogUHJvcFR5cGVzLm51bWJlcixcclxuICBhc3BlY3QgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0aXRsZSAgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZXNjcmlwdGlvbiAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhY3Rpb25JY29uICAgICAgIDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25TZWxlY3QgICAgICAgICA6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcblxyXG5JbWFnZUdyaWRUaWxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpY29uQ29sb3I6IFwiI2NjY2NjY1wiLFxyXG4gIGljb25TaXplIDogNDgsXHJcbiAgYXNwZWN0ICAgOiBcIjE2OjlcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JpZFRpbGVcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlR3JpZFRpbGUvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIFB1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlR3JpZFRpbGUgZnJvbSAnLi4vSW1hZ2VHcmlkVGlsZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIGBJbWFnZUdyaWRgIGlzIGEgc3RhdGVsZXNzIFJlYWN0IGNvbXBvbmVudCB0aGF0IGFsbG93cyB0byBjb21wdXRlIGFuIGFycmF5IG9mIEltYWdlR3JpZFRpbGVzIGZyb20gYGl0ZW1zYCBwYXNzZWQgaW4gcHJvcHNcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzLml0ZW1zIC0gYW4gYXJyYXkgb2YgaXRlbXMgYHtpZDpOdW1iZXJ8U3RyaW5nLCBpbWFnZTpTdHJpbmcsIG1lZGlhdHlwZTo/U3RyaW5nLCBwbGFjZWhvbGRlcjo/U3RyaW5nLCB0aXRsZTpTdHJpbmcsZGVzY3JpcHRpb246U3RyaW5nfWBcclxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmFzcGVjdCAtIGFzcGVjdCByYXRpbyBmb3IgdGhlIEltYWdlR3JpZFRpbGUgaW1hZ2VcclxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IHByb3BzLmFjdGlvbkljb24gLSBhY3Rpb24gaWNvbiBKU1ggd2l0aCBhIGJvdW5kIGhhbmRsZXJcclxuICogQHBhcmFtIHs/U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlclNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIuIEJ5IGRlZmF1bHQgaXQncyB0aGUgc2FtZSBhcyBmb3IgdGhlIGBzcmNgIGltYWdlLCBidXQgc2V0IHRvIGBpbml0aWFsYCBvciBvdGhlciB2YWxpZCBgYmFja2dyb3VuZC1zaXplYCB2YWx1ZSB0byBvdmVycmlkZS5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMub25TZWxlY3QgLSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkIG9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBwcm9wcy5kdW1teUl0ZW1zIC0gZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZCBvblxyXG4gKiAqL1xyXG5jbGFzcyBJbWFnZUdyaWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuXHJcbiAgaXRlbUNsaWNrSGFuZGxlciA9IChpdGVtKSA9PiAoZXZlbnQpID0+IHRoaXMucHJvcHMub25TZWxlY3QoaXRlbSk7XHJcbiAgZWRpdEl0ZW0gPSBpdGVtPT4gdGhpcy5wcm9wcy5hY3Rpb25JY29uQ2xpY2soaXRlbSlcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7aXRlbXMsIGR1bW15SXRlbXMsIGFzcGVjdCwgcGxhY2Vob2xkZXJTaXppbmcsIGFjdGlvbkljb259ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkXCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoID4gMCAmJiBpdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIDxJbWFnZUdyaWRUaWxlXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgYXNwZWN0PXthc3BlY3R9XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgbWVkaWF0eXBlPXtpdGVtLm1lZGlhdHlwZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aXRlbS5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlclNpemluZz17aXRlbS5pbWFnZT9wbGFjZWhvbGRlclNpemluZzonaW5pdGlhbCd9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgYWN0aW9uSWNvbj17dHlwZW9mIGFjdGlvbkljb249PT0nZnVuY3Rpb24nP2FjdGlvbkljb24oaXRlbSk6bnVsbH1cclxuICAgICAgICAgICAgICBhY3Rpb25JY29uQ2xpY2s9e3RoaXMuZWRpdEl0ZW0oaXRlbSl9XHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaXRlbUNsaWNrSGFuZGxlcihpdGVtKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtkdW1teUl0ZW1zICYmIHRoaXMucmVuZGVyRHVtbXlJdGVtcyhkdW1teUl0ZW1zKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyRHVtbXlJdGVtcyhjb3VudCkge1xyXG4gICAgY29uc3QgZHVtbXlJdGVtcyA9IFtdO1xyXG4gICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgZHVtbXlJdGVtcy5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZVwiIGtleT17YGR1bW15JHtjb3VudH1gfS8+KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGR1bW15SXRlbXNcclxuICB9XHJcbn1cclxuXHJcbkltYWdlR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheSxcclxuICBhc3BlY3Q6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYWN0aW9uSWNvbjogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgYWN0aW9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBwbGFjZWhvbGRlclNpemluZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBkdW1teUl0ZW1zOiBQcm9wVHlwZXMubnVtYmVyXHJcbn07XHJcblxyXG5JbWFnZUdyaWQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGR1bW15SXRlbXM6IDEyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUdyaWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbWFnZUdyaWQvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBjb25maWcucGFnaW5hdGlvbjtcclxuICAgICAgICAgICAgaWYgKHBhZ2luYXRpb24gPT09ICdjb250aW51b3VzJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGludW91c05hdmlnYXRpb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2luZ05hdmlnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRpbnVvdXNOYXZpZ2F0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbG9hZE1vcmUsIGRpc2FibGVOZXh0QnV0dG9uIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uUm93XCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gZmxhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9hZE1vcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVOZXh0QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPkxvYWQgbW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHBhZ2luZ05hdmlnYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBsb2FkUHJldmlvdXNQYWdlLFxyXG4gICAgICAgICAgICBsb2FkTmV4dFBhZ2UsXHJcbiAgICAgICAgICAgIGRpc2FibGVOZXh0QnV0dG9uLFxyXG4gICAgICAgICAgICBkaXNhYmxlUHJldkJ1dHRvbixcclxuICAgICAgICAgICAgcGFnZUluZm8sXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBhY2NlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvYWRQcmV2aW91c1BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVQcmV2QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ1JFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTJyl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsQnV0dG9uIGFjY2VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9hZE5leHRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlTmV4dEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdSRVBPUlRfU0lOR0xFVklFV19ORVhUJyl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57cGFnZUluZm99PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VmlkZW8vTmF2aWdhdGlvbi5qcyIsIi8vQGZsb3dcclxuaW1wb3J0IHR5cGUge1N0YXRlLCBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZUdyaWQgZnJvbSBcIi4uL0ltYWdlR3JpZFwiO1xyXG5pbXBvcnQgU2luZ2xlVmlldyBmcm9tIFwiLi4vU2luZ2xlVmlld1wiO1xyXG5pbXBvcnQgRFNBYnN0cmFjdGlvbiBmcm9tICcuLi9EU0Fic3RyYWN0aW9uJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nXHJcbmltcG9ydCBTaW5nbGVWaWV3UmVzcG9uc2VzIGZyb20gJy4uL1NpbmdsZVZpZXcvUmVzcG9uc2VzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFZpZGVvIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIERTID0gRFNBYnN0cmFjdGlvbih7XHJcbiAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLFxyXG4gICAgdGh1bWJzUGxhY2Vob2xkZXI6IHRoaXMucHJvcHMudGh1bWJzUGxhY2Vob2xkZXIsXHJcbiAgICBjb21wb25lbnQ6IHRoaXNcclxuICB9KTtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpdGVtczogbnVsbCxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICAgIGNvbmZpZzogbnVsbCxcclxuICAgIHNpbmdsZVZpZXdNb2RlOiAndmlldycsXHJcbiAgICBzaW5nbGVWaWV3OiB7XHJcbiAgICAgIGxpbms6ICcnXHJcbiAgICB9LFxyXG4gICAgc2luZ2xlVmlld1Zpc2libGU6IGZhbHNlLFxyXG4gICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2OiBmYWxzZSxcclxuICAgIHNpbmdsZVZpZXdEaXNhYmxlTmV4dDogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgdHJhbnNsYXRlID0gdGhpcy5EUy5pMThuLmJpbmQodGhpcy5EUyk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXRlbXMsIHNpbmdsZVZpZXdWaXNpYmxlLCBlcnJvciwgY29uZmlnIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IHJlbmRlciA9IG51bGw7XHJcbiAgICBpZiAoIWVycm9yICYmIEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICByZW5kZXIgPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BHcmlkQ29udGFpbmVyICR7IXNpbmdsZVZpZXdWaXNpYmxlID8gJ0dyaWRWaWV3JyA6ICcnfWB9PlxyXG4gICAgICAgICAge3RoaXMucmVuZGVyU2luZ2xlVmlldygpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRDb250YWluZXJcIiBzdHlsZT17eyBkaXNwbGF5OiAhc2luZ2xlVmlld1Zpc2libGUgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2VHcmlkXHJcbiAgICAgICAgICAgICAgYXNwZWN0PVwiMTY6OVwiXHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25TZWxlY3R9XHJcbiAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxyXG4gICAgICAgICAgICAgIGFjdGlvbkljb249e2NvbmZpZy5jYW5FZGl0ID8gdGhpcy5hY3Rpb25JY29uIDogbnVsbH1cclxuICAgICAgICAgICAgICBhY3Rpb25JY29uQ2xpY2s9e3RoaXMuYWN0aW9uSWNvbkNsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJOYXZpZ2F0aW9uKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuRFMpIHtcclxuICAgICAgICByZW5kZXIgPSAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdyaWRDb250YWluZXIgSW1hZ2VHcmlkXCI+e3RoaXMuZGF0YUxvYWRpbmdNZXNzYWdlKCl9PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSGl0bGlzdERhdGFzb3VyY2UgaXMgbm90IGF2YWlsYWJsZScpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZW5kZXJcclxuICB9XHJcblxyXG4gIHJlbmRlck5hdmlnYXRpb24oKSB7XHJcbiAgICBjb25zdCB7IGxvYWRQcmV2aW91c1BhZ2UsIGxvYWROZXh0UGFnZSwgbG9hZE1vcmUsIGRpc2FibGVOZXh0QnV0dG9uLCBkaXNhYmxlUHJldkJ1dHRvbiwgZ2V0UGFnZUluZm8gfSA9IHRoaXMuRFM7XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uUHJvcHMgPSB7XHJcbiAgICAgIGxvYWRQcmV2aW91c1BhZ2UsXHJcbiAgICAgIGxvYWROZXh0UGFnZSxcclxuICAgICAgbG9hZE1vcmUsXHJcbiAgICAgIGRpc2FibGVOZXh0QnV0dG9uLFxyXG4gICAgICBkaXNhYmxlUHJldkJ1dHRvbixcclxuICAgICAgcGFnZUluZm86IGdldFBhZ2VJbmZvKCksXHJcbiAgICAgIGNvbmZpZzogdGhpcy5zdGF0ZS5jb25maWcsXHJcbiAgICAgIHRyYW5zbGF0ZTogdGhpcy50cmFuc2xhdGVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPE5hdmlnYXRpb24gey4uLm5hdmlnYXRpb25Qcm9wc30gLz5cclxuICB9XHJcblxyXG4gIHJlbmRlclNpbmdsZVZpZXcoKSB7XHJcbiAgICBjb25zdCB7IHNpbmdsZVZpZXdWaXNpYmxlLCBzaW5nbGVWaWV3LCBzaW5nbGVWaWV3RGlzYWJsZVByZXYsIHNpbmdsZVZpZXdEaXNhYmxlTmV4dCwgc2luZ2xlVmlld01vZGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gc2luZ2xlVmlld1Zpc2libGUgPyAoXHJcbiAgICAgIDxTaW5nbGVWaWV3XHJcbiAgICAgICAgcmV0dXJuVG9HcmlkQWN0aW9uPXt0aGlzLnJldHVyblRvR3JpZH1cclxuICAgICAgICBsb2FkUHJldmlvdXNJdGVtPXt0aGlzLmxvYWRQcmV2aW91c0l0ZW19XHJcbiAgICAgICAgbG9hZE5leHRJdGVtPXt0aGlzLmxvYWROZXh0SXRlbX1cclxuICAgICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXY9e3NpbmdsZVZpZXdEaXNhYmxlUHJldn1cclxuICAgICAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHQ9e3NpbmdsZVZpZXdEaXNhYmxlTmV4dH1cclxuICAgICAgPlxyXG4gICAgICAgIHtzaW5nbGVWaWV3TW9kZSA9PT0gJ2VkaXQnID9cclxuICAgICAgICAgICg8aWZyYW1lIGNsYXNzTmFtZT1cInJlbmRlckFyZWFcIiBzcmM9e3NpbmdsZVZpZXcubGlua30gLz4pXHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICAoPFNpbmdsZVZpZXdSZXNwb25zZXMgZGF0YT17c2luZ2xlVmlld30gY29sdW1ucz17dGhpcy5pbmRpdmlkdWFsUmVjb3Jkc1F1ZXN0aW9uSWRzfSBjb2x1bW5zTWFwPXt0aGlzLmluZGl2aWR1YWxSZWNvcmRzS2V5TGFiZWxzfSAvPilcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2luZ2xlVmlldz5cclxuICAgICkgOiBudWxsXHJcbiAgfVxyXG5cclxuICBnZXQgaW5kaXZpZHVhbFJlY29yZHNRdWVzdGlvbklkcygpIHtcclxuICAgIGNvbnN0IHsgaW5kaXZpZHVhbFJlY29yZHMgfSA9IHRoaXMuRFMuY29uZmlnKCk7XHJcbiAgICByZXR1cm4gaW5kaXZpZHVhbFJlY29yZHMgIT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KGluZGl2aWR1YWxSZWNvcmRzKSA/IGluZGl2aWR1YWxSZWNvcmRzIDogW11cclxuICB9XHJcblxyXG4gIGdldCBpbmRpdmlkdWFsUmVjb3Jkc0tleUxhYmVscygpIHtcclxuICAgIHJldHVybiB7IC4uLnRoaXMuZ2V0TGFiZWxzRm9yTWFpbkZpZWxkcygpLCAuLi50aGlzLmdldExhYmVsc0ZvckluZGl2aWR1YWxSZWNvcmRzKCkgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWxzRm9yTWFpbkZpZWxkcygpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuRFMuY29uZmlnKCk7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nXS5yZXZlcnNlKCkuZm9yRWFjaChrZXkgPT5cclxuICAgICAgbWFwW2tleV0gPSB0aGlzLkRTLmFsbENvbHVtbnMuZmlsdGVyKHJlY29yZCA9PlxyXG4gICAgICAgIHJlY29yZC5rZXkgPT09IGNvbmZpZ1trZXldXHJcbiAgICAgIClbMF0ubGFiZWxcclxuICAgIClcclxuICAgIHJldHVybiBtYXA7XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbHNGb3JJbmRpdmlkdWFsUmVjb3JkcygpIHtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgY29uc3QgaXJJZHMgPSB0aGlzLmluZGl2aWR1YWxSZWNvcmRzUXVlc3Rpb25JZHM7XHJcbiAgICB0aGlzLkRTLmFsbENvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoaXJJZHMuaW5kZXhPZihjb2x1bW4ua2V5KSA+IC0xKSB7XHJcbiAgICAgICAgbWFwW2NvbHVtbi5rZXldID0gY29sdW1uLmxhYmVsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbWFwO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBkYXRhTG9hZGluZ01lc3NhZ2UoKSB7XHJcbiAgICBsZXQgbWVzc2FnZTtcclxuICAgIGNvbnN0IHsgaXRlbXMsIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIG1lc3NhZ2UgPSAnZXJyb3JMb2FkaW5nJ1xyXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgbWVzc2FnZSA9ICdSRVBPUlRfU0lOR0xFVklFV19OT1RISU5HRk9VTkQnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlID0gJ2xvYWRpbmdEYXRhJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuRFMuaTE4bihtZXNzYWdlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuVG9HcmlkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgc2luZ2xlVmlldzoge1xyXG4gICAgICAgIGxpbms6ICcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGxvYWRQcmV2aW91c0l0ZW0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZUl0ZW1zKCdiYWNrJylcclxuICB9XHJcblxyXG4gIGxvYWROZXh0SXRlbSA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlSXRlbXMoJ2ZvcndhcmQnKVxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVJdGVtcyhkaXJlY3Rpb246ICdmb3J3YXJkJyB8ICdiYWNrd2FyZCcpOiB2b2lkIHtcclxuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uVHlwZSA9IHRoaXMuc3RhdGUuY29uZmlnLnBhZ2luYXRpb247XHJcbiAgICBsZXQgaXRlbXNMZW5ndGggPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgY3VycmVudFNpbmdsZVZpZXdJdGVtSW5kZXggPSBpdGVtcy5pbmRleE9mKHRoaXMuc3RhdGUuc2luZ2xlVmlldyk7XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBkaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4ICsgMSA6IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4IC0gMTtcclxuXHJcbiAgICBjb25zdCBsb2FkSXRlbUZyb21QcmV2aW91c1BhZ2UgPSBuZXh0SW5kZXggPCAwICYmICF0aGlzLkRTLmRpc2FibGVQcmV2QnV0dG9uO1xyXG4gICAgY29uc3QgbG9hZEl0ZW1Gcm9tTmV4dFBhZ2UgPSBuZXh0SW5kZXggPiBpdGVtc0xlbmd0aCAmJiAhdGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbjtcclxuXHJcbiAgICBsZXQgcHJvbWlzZWRJdGVtcyA9IFByb21pc2UucmVzb2x2ZShpdGVtcyk7XHJcbiAgICAvLyBhc3NpZ24gaXRlbXMgdG8gdGhlbmFibGUgcHJvbWlzZXMgaWYgcmVxdWVzdGVkIGl0ZW0gaXMgb3V0c2lkZSBvZiBkYXRhIGJvdW5kYXJpZXNcclxuICAgIGlmIChsb2FkSXRlbUZyb21QcmV2aW91c1BhZ2UpIHtcclxuICAgICAgcHJvbWlzZWRJdGVtcyA9IHRoaXMuRFMubG9hZFByZXZpb3VzUGFnZSgpO1xyXG4gICAgfSBlbHNlIGlmIChsb2FkSXRlbUZyb21OZXh0UGFnZSkge1xyXG4gICAgICBwcm9taXNlZEl0ZW1zID0gcGFnaW5hdGlvblR5cGUgIT09ICdjb250aW51b3VzJyA/IHRoaXMuRFMubG9hZE5leHRQYWdlKCkgOiB0aGlzLkRTLmxvYWRNb3JlKCk7XHJcbiAgICB9XHJcbiAgICAvKiAgICAgY29uc3QgaXRlbXNBcmVQcm9taXNlZCA9ICFBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5oYXNPd25Qcm9wZXJ0eSgndGhlbicpO1xyXG4gICAgICAgIGlmICghaXRlbXNBcmVQcm9taXNlZCkge1xyXG4gICAgICAgICAgcHJvbWlzZWRJdGVtcyA9IFByb21pc2UucmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICovXHJcbiAgICBwcm9taXNlZEl0ZW1zLnRoZW4oKCkgPT4ge1xyXG4gICAgICBsZXQgc2luZ2xlVmlld0RhdGE7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgICBjb25zdCBuZXdJdGVtcyA9IHByZXZTdGF0ZS5pdGVtcztcclxuICAgICAgICBjb25zdCBhdERhdGFMZWZ0Qm91bmRhcnlDYW5Mb2FkID0gbmV4dEluZGV4IDwgMCAmJiAhcHJldlN0YXRlLnNpbmdsZVZpZXdEaXNhYmxlUHJldjtcclxuICAgICAgICBjb25zdCBhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCA9IG5leHRJbmRleCA+IGl0ZW1zTGVuZ3RoICYmICFwcmV2U3RhdGUuc2luZ2xlVmlld0Rpc2FibGVOZXh0ICYmIHBhZ2luYXRpb25UeXBlICE9PSAnY29udGludW91cyc7XHJcbiAgICAgICAgaWYgKGF0RGF0YUxlZnRCb3VuZGFyeUNhbkxvYWQpIHtcclxuICAgICAgICAgIHNpbmdsZVZpZXdEYXRhID0gbmV3SXRlbXNbbmV3SXRlbXMubGVuZ3RoIC0gMV1cclxuICAgICAgICB9IGVsc2UgaWYgKGF0RGF0YVJpZ2h0Qm91bmRhcnlDYW5Mb2FkKSB7XHJcbiAgICAgICAgICBzaW5nbGVWaWV3RGF0YSA9IG5ld0l0ZW1zWzBdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNpbmdsZVZpZXdEYXRhID0gbmV3SXRlbXNbbmV4dEluZGV4XVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnRoaXMuZ2V0U2luZ2xlVmlld05hdlN0YXRlKG5leHRJbmRleCksXHJcbiAgICAgICAgICBzaW5nbGVWaWV3OiBzaW5nbGVWaWV3RGF0YSxcclxuICAgICAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2luZ2xlVmlld05hdlN0YXRlKGl0ZW0pIHsgfVxyXG5cclxuICBvblNlbGVjdCA9IChpdGVtKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLi4udGhpcy5nZXRTaW5nbGVWaWV3TmF2U3RhdGUodGhpcy5zdGF0ZS5pdGVtcy5pbmRleE9mKGl0ZW0pKSxcclxuICAgICAgc2luZ2xlVmlldzogaXRlbSxcclxuICAgICAgc2luZ2xlVmlld1Zpc2libGU6IHRydWUsXHJcbiAgICAgIHNpbmdsZVZpZXdNb2RlOiAndmlldydcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgZ2V0U2luZ2xlVmlld05hdlN0YXRlKGN1cnJlbnRJdGVtSW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xyXG4gICAgbGV0IHNpbmdsZVZpZXdEaXNhYmxlTmV4dCA9IGZhbHNlLFxyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXYgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoY3VycmVudEl0ZW1JbmRleCA8PSAwICYmIHRoaXMuRFMuZGlzYWJsZVByZXZCdXR0b24pIHtcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50SXRlbUluZGV4ID49IGl0ZW1zLmxlbmd0aCAtIDEgJiYgdGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbikge1xyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2LFxyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGlvbkljb25DbGljayA9IChpdGVtKSA9PiAoKSA9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgIC4uLnRoaXMuZ2V0U2luZ2xlVmlld05hdlN0YXRlKHRoaXMuc3RhdGUuaXRlbXMuaW5kZXhPZihpdGVtKSksXHJcbiAgICBzaW5nbGVWaWV3OiBpdGVtLFxyXG4gICAgc2luZ2xlVmlld1Zpc2libGU6IHRydWUsXHJcbiAgICBzaW5nbGVWaWV3TW9kZTogJ2VkaXQnXHJcbiAgfSlcclxuICBhY3Rpb25JY29uID0gKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44My0xLjgzelwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RWaWRlby9pbmRleC5qcyIsIi8vQGZsb3dcclxuaW1wb3J0IHR5cGUge05hdkJ1dHRvblByb3BzfSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1ESWNvbiBmcm9tICdNREljb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2QnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxOYXZCdXR0b25Qcm9wcywgYW55PiB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpY29uLCAuLi53cmFwcGVyIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0tbmF2LWJ1dHRvbiByaXBwbGVcIiB7Li4ud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8TURJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2luZ2xlVmlldy9OYXZCdXR0b24uanMiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2VzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBjb2x1bW5zLCBjb2x1bW5zTWFwIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgbWVkaWEgPSBbJ2ltYWdlJywgJ3ZpZGVvJywgJ2F1ZGlvJ107XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRhdGEuaW50ZXJ2aWV3X3N0YXJ0IHx8IGRhdGEuaW50ZXJ2aWV3X2VuZDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbmRlckFyZWEgUmVzcG9uc2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1wYWdlVGl0bGVcIj4ge2RhdGEudGl0bGV9IDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7ISFkYXRlICYmIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1sYWJlbFwiPiB7ZGF0ZX0gPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS12YWx1ZVwiPiB7ZGF0YS5kZXNjcmlwdGlvbn0gPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHttZWRpYS5tYXAobWVkaWFJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbWVkaWFJdGVtXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLWxhYmVsXCI+e2NvbHVtbnNNYXBbbWVkaWFJdGVtXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tdmFsdWVcIj57dGhpc1tgXyR7bWVkaWFJdGVtfVJlbmRlcmVyYF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1ucyAhPSBudWxsICYmIGNvbHVtbnMubWFwKHFJRCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW3FJRF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1sYWJlbFwiPntjb2x1bW5zTWFwW3FJRF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLXZhbHVlXCI+e2RhdGFbcUlEXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX2ltYWdlUmVuZGVyZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1tZWRpYVwiIHNyYz17dGhpcy5wcm9wcy5kYXRhLmltYWdlfSAvPlxyXG4gICAgfVxyXG4gICAgZ2V0IF92aWRlb1JlbmRlcmVyKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGEudmlkZW87XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHZpZGVvIGtleT17ZGF0YX0gY29udHJvbHMgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2RhdGF9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cclxuICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZ2V0IF9hdWRpb1JlbmRlcmVyKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGEuYXVkaW87XHJcbiAgICAgICAgcmV0dXJuIDxhdWRpbyBrZXk9e2RhdGF9IHNyYz17ZGF0YX0gdHlwZT1cImF1ZGlvL21wNFwiIGNvbnRyb2xzIGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tbWVkaWFcIiAvPlxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvUmVzcG9uc2VzLmpzIiwiLy9AZmxvd1xyXG5pbXBvcnQgdHlwZSB7UHJvcHMsIE5hdkJhclByb3BzIH0gZnJvbSAnLi90eXBlcydcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZCdXR0b24gZnJvbSAnLi9OYXZCdXR0b24nXHJcbmltcG9ydCB7IGljX2Fycm93X2JhY2ssIGljX2Fycm93X2ZvcndhcmQsIGljX3ZpZXdfbW9kdWxlIH0gZnJvbSAnLi4vaWNvbnMnO1xyXG5cclxuY29uc3QgTmF2QmFyID0gZnVuY3Rpb24gKHByb3BzOk5hdkJhclByb3BzKSB7XHJcbiAgY29uc3QgeyBsb2FkUHJldmlvdXNJdGVtLCByZXR1cm5Ub0dyaWRBY3Rpb24sIGxvYWROZXh0SXRlbSwgc2luZ2xlVmlld0Rpc2FibGVQcmV2LCBzaW5nbGVWaWV3RGlzYWJsZU5leHQgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbmdsZVZpZXctLWhlYWRlclwiPlxyXG4gICAgICA8TmF2QnV0dG9uIGRpc2FibGVkPXtzaW5nbGVWaWV3RGlzYWJsZVByZXZ9IHRpdGxlPVwiUHJldmlvdXMgaXRlbVwiIG9uQ2xpY2s9e2xvYWRQcmV2aW91c0l0ZW19IGljb249e2ljX2Fycm93X2JhY2t9IC8+XHJcbiAgICAgIDxOYXZCdXR0b24gdGl0bGU9XCJSZXR1cm4gdG8gdGhlIGxpc3RcIiBvbkNsaWNrPXtyZXR1cm5Ub0dyaWRBY3Rpb259IGljb249e2ljX3ZpZXdfbW9kdWxlfSAvPlxyXG4gICAgICA8TmF2QnV0dG9uIGRpc2FibGVkPXtzaW5nbGVWaWV3RGlzYWJsZU5leHR9IHRpdGxlPVwiTmV4dCBJdGVtXCIgb25DbGljaz17bG9hZE5leHRJdGVtfSBpY29uPXtpY19hcnJvd19mb3J3YXJkfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGVWaWV3IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgdm9pZD4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtjaGlsZHJlbiwgLi4ubmF2QmFyUHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlVmlld1wiPlxyXG4gICAgICAgIDxOYXZCYXIgey4uLm5hdkJhclByb3BzfS8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBpY19zdGFyID0gPHBhdGggZD1cIk0xMiAxNy4yN0wxOC4xOCAyMWwtMS42NC03LjAzTDIyIDkuMjRsLTcuMTktLjYxTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMXpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX3N0YXJfYm9yZGVyID0gPHBhdGggZD1cIk0yMiA5LjI0bC03LjE5LS42MkwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjEgMTIgMTcuMjcgMTguMTggMjFsLTEuNjMtNy4wM0wyMiA5LjI0ek0xMiAxNS40bC0zLjc2IDIuMjcgMS00LjI4LTMuMzItMi44OCA0LjM4LS4zOEwxMiA2LjFsMS43MSA0LjA0IDQuMzguMzgtMy4zMiAyLjg4IDEgNC4yOEwxMiAxNS40elwiLz47XG5leHBvcnQgY29uc3QgaWNfYXJyb3dfYmFjayA9IDxwYXRoIGQ9XCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHYtMnpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX2Fycm93X2ZvcndhcmQgPSA8cGF0aCBkPVwiTTEyIDRsLTEuNDEgMS40MUwxNi4xNyAxMUg0djJoMTIuMTdsLTUuNTggNS41OUwxMiAyMGw4LTh6XCIvPjtcbmV4cG9ydCBjb25zdCBpY192aWV3X21vZHVsZSA9IDxwYXRoIGQ9XCJNNCAxMWg1VjVINHY2em0wIDdoNXYtNkg0djZ6bTYgMGg1di02aC01djZ6bTYgMGg1di02aC01djZ6bS02LTdoNVY1aC01djZ6bTYtNnY2aDVWNWgtNXpcIi8+O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ljb25zLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vQGZsb3dcclxuaW1wb3J0IEhpdGxpc3REUyBmcm9tIFwici1oaXRsaXN0LWRhdGFzb3VyY2VcIjtcclxuaW1wb3J0IHVuaW9uQnkgZnJvbSBcImxvZGFzaC91bmlvbkJ5XCI7XHJcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSAnci1yZXBvcnRhbC1iYXNlJztcclxuXHJcbnR5cGUgT3B0aW9ucyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogbmFtZSBvZiBhIGdsb2JhbCBjb25maWcgdmFyaWFibGUgcGFzc2VkXHJcbiAgICAqL1xyXG4gICAgY29uZmlnOiBzdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkaXNwbGF5IHRodW1icyBhcyBpbWFnZSBwbGFjZWhvbGRlcnMgaW5zdGVhZCBvZiBtZWRpYSBpY29uc1xyXG4gICAgKi9cclxuICAgIHRodW1ic1BsYWNlaG9sZGVyOiBib29sZWFuLFxyXG4gICAgY29tcG9uZW50OiBhbnlcclxufVxyXG5cclxudHlwZSBwYXJzZWREYXRhUm93ID0ge1xyXG4gICAgaWQ6IHN0cmluZyB8IG51bWJlcixcclxuICAgIHRpdGxlPzogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcclxuICAgIGltYWdlPzogc3RyaW5nLFxyXG4gICAgbWVkaWF0eXBlOiAndmlkZW8nIHwgJ2F1ZGlvJyB8ICdpbWFnZScsXHJcbiAgICBsaW5rOiBzdHJpbmcsXHJcbiAgICBbeDpzdHJpbmddOnN0cmluZyxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERTQWJzdHJhY3Rpb24ob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgY29uc3QgRFMgPSBuZXcgSGl0bGlzdERTKCk7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSBvcHRpb25zLmNvbXBvbmVudDtcclxuICAgIGxldCBjb25maWc7XHJcbiAgICBjb25zdCBxdWVyeSA9IFJlcG9ydGFsQmFzZS5sb2NhdGlvbkRlc2VyaWFsaXplKCkucXVlcnk7XHJcblxyXG4gICAgc2V0dXBEYXRhTGlzdGVuZXIob3B0aW9ucy5jb25maWcpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGF1bmNoZXMgbGlzdGVuZXIgZm9yIGBZLkdsb2JhbC5yZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZWAgZXZlbnQgd2l0aGluIFlVSSB3aGljaCBpcyB0cmlnZ2VyZWQgZXZlcnkgdGltZSB0aGUgZmlsdGVyIHBhbmVsIHVwZGF0ZXMgb3Igb24gaW5pdGlhbCBsb2FkXHJcbiAgICAgKiAqL1xyXG4gICAgZnVuY3Rpb24gc2V0dXBEYXRhTGlzdGVuZXIoY29uZmlnTmFtZSkge1xyXG4gICAgICAgIGlmIChZICYmIFkuR2xvYmFsKSB7XHJcbiAgICAgICAgICAgIFkuR2xvYmFsLm9uKFwicmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVcIiwgZmlsdGVySW5mbyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXNlQ29uZmlnKGNvbmZpZ05hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKERTICYmIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIERTLm1vZGlmaWVyID0gZmlsdGVySW5mbzsgLy8gZmlsdGVyIGluZm9ybWF0aW9uIGFzIGEgbW9kaWZpZXIgZm9yIGRhdGEgZmV0Y2hcclxuICAgICAgICAgICAgICAgICAgICBEUy5pbml0aWFsRGF0YUxvYWQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihwcm9jZXNzRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZVUkgaXMgbm90IGRlZmluZWQgb3IgYWNjZXNzaWJsZSwgY2Fubm90IHNldCB1cCBhIFwicmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVcIiBsaXN0ZW5lcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXNlQ29uZmlnKGNvbmZpZ05hbWUpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoIXdpbmRvd1tjb25maWdOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25maWcgaXMgbm90IHBhc3NlZCBmcm9tIGJhY2tlbmQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbmZpZyA9IHdpbmRvd1tjb25maWdOYW1lXTtcclxuICAgICAgICAgICAgaWYoY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzICYmIHR5cGVvZiBjb25maWcuaW5kaXZpZHVhbFJlY29yZHMgPT09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5pbmRpdmlkdWFsUmVjb3JkcyA9IGNvbmZpZy5pbmRpdmlkdWFsUmVjb3Jkcy5zcGxpdCgnLCcpLm1hcChpdGVtPT5pdGVtLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHsgY29uZmlnIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEsIG1vZGUgPSAncmVwbGFjZScpIHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhOiBwYXJzZWREYXRhUm93W10gPSBkYXRhLm1hcCgoZGF0YVJvdywgcm93SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcnNlZFJvdzogcGFyc2VkRGF0YVJvdyA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBpciA9IGNvbmZpZy5pbmRpdmlkdWFsUmVjb3JkcyB8fCBbXTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YUZpZWxkcyA9IFsnaWQnLCAndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nLCAndGFncyddLmNvbmNhdChpcik7XHJcbiAgICAgICAgICAgIGRhdGFGaWVsZHMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uSUQgPSBjb25maWdba2V5XTtcclxuICAgICAgICAgICAgICAgIHBhcnNlZFJvd1trZXldID0gcHJlcGFyZURhdGEoZGF0YVJvd1tjb2x1bW5JRCB8fCBrZXldLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgaW1hZ2UgLSB3ZSBtaWdodCB3YW50IHRvIHVzZSBhIHBsYWNlaG9sZGVyIGFzIHRoZSB0aHVtYiwgYW5kIGxvYWQgdGhlIGZ1bGwgaW1hZ2UgaW4gYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWRSb3cuaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudGh1bWJzUGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFJvdy5wbGFjZWhvbGRlciA9IHBhcnNlZFJvdy5pbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRSb3cuaW1hZ2UgPSBwYXJzZWRSb3cuaW1hZ2UucmVwbGFjZSgvX3RodW1iL2dpLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIG1lZGlhdHlwZSBvciBhIHBsYWNlaG9sZGVyIGljb25cclxuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkUm93Lm1lZGlhdHlwZSAmJiBbJ3ZpZGVvJywgJ2F1ZGlvJywgJ2ltYWdlJ10uaW5kZXhPZihrZXkpID4gLTEgJiYgY29uZmlnW2tleV0gJiYgcGFyc2VkUm93W2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRSb3cubWVkaWF0eXBlID0ga2V5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IGlkIGZvciBrZXlzXHJcbiAgICAgICAgICAgIHBhcnNlZFJvdy5pZCA9IGRhdGFSb3cucmVzcG9uc2VpZCA/IGRhdGFSb3cucmVzcG9uc2VpZCA6IHJvd0luZGV4O1xyXG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgbGluayBwYXNzZWQgYXMgYHNsaW5rYCBwcm9wZXJ0eSBpbiBkYXRhXHJcbiAgICAgICAgICAgIGlmIChkYXRhUm93LnNsaW5rKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbCA9IGRhdGFSb3cuc2xpbms7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRSb3cubGluayA9ICgvaHJlZj0nKC4rPyknL2dpKS5leGVjKGwpLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRSb3c7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIHN0YXRlIHdpdGggdGhlIG5ldyBzZXQgb2YgZGF0YSBvciBhIG1lcmdlZCBkYXRhXHJcbiAgICAgICAgaWYgKG1vZGUgPT09ICdyZXBsYWNlJykge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IG5ld0RhdGEsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnYXBwZW5kJykge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogWy4uLnByZXZTdGF0ZS5pdGVtcywgLi4ubmV3RGF0YV0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ21lcmdlJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtb2RlKTtcclxuICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHVuaW9uQnkobmV3RGF0YSwgcHJldlN0YXRlLml0ZW1zLCAnaWQnKSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0YXRgNC10L0g0LfQvdCw0LXRgiDRh9GC0L4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1hc3NhZ2UgZGF0YSB0byBmaXQgdGhlIHR5cGUgd2UgZXhwZWN0IHRvIHJlY2VpdmUgaW4gcmVhY3Qgdmlld1xyXG4gICAgICogKi9cclxuICAgIGZ1bmN0aW9uIHByZXBhcmVEYXRhKGRhdGE6YW55LCB0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJlcGFyZURhdGEnLGRhdGEsdHlwZSlcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICgvc3JjPScoLis/KScvZ2kpLmV4ZWMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICE9IG51bGwgJiYgcmVzdWx0WzFdID8gcmVzdWx0WzFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjYXNlICdkZXNjcmlwdGlvbic6XHJcbiAgICAgICAgICAgIGNhc2UgJ3RpdGxlJzpyZXR1cm4gIShkYXRhLmluZGV4T2YoJy0nKSA+IC0xICYmIGRhdGEudHJpbSgpLmxlbmd0aCA9PT0gMSkgPyBkYXRhLnRyaW0oKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY2FzZSAndmlkZW8nOlxyXG4gICAgICAgICAgICBjYXNlICdhdWRpbyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIShkYXRhLmluZGV4T2YoJy0nKSA+IC0xICYmIGRhdGEudHJpbSgpLmxlbmd0aCA9PT0gMSkgPyBnZW5lcmF0ZU1lZGlhTGluayhkYXRhLnRyaW0oKSwgdHlwZSkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RhZ3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEgJiYgKGRhdGEuaW5kZXhPZignLCcpID4gLTEgPyBkYXRhLnNwbGl0KCcsJykgOiBkYXRhLmluZGV4T2YoJy0nKSA+IC0xICYmIGRhdGEudHJpbSgpLmxlbmd0aCA9PT0gMSA/IHVuZGVmaW5lZCA6IGRhdGEudHJpbSgpKTtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTWVkaWFMaW5rKGZpbGVOYW1lOnN0cmluZywgdHlwZTogJ2F1ZGlvJ3wndmlkZW8nKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2VuZXJhdGVNZWRpYUxpbmsnLGZpbGVOYW1lLHR5cGUpXHJcbiAgICAgICAgY29uc3QgZHNOYW1lID0gY29uZmlnLnN1cnZleUlEO1xyXG4gICAgICAgIHJldHVybiBgL3JlcG9ydGFsL1d5c2l3eWcvUmVwb3J0LyR7cXVlcnkucmVwb3J0aWR9LyR7ZHNOYW1lfS8ke3R5cGV9LyR7ZmlsZU5hbWV9YFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURhdGFMb2FkaW5nRXJyb3IoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgRFMubG9hZE5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBEUy5uZXh0UGFnZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmxvYWRQcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIERTLnByZXZpb3VzUGFnZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmxvYWRNb3JlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBEUy5uZXh0UGFnZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHByb2Nlc3NEYXRhKHJlc3BvbnNlLCAnYXBwZW5kJykpXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgRFMuaW5pdGlhbExvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIERTLmluaXRpYWxEYXRhTG9hZCgpXHJcbiAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmdldFBhZ2VJbmZvID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc1BhZ2VJbmZvID0gRFMucGFnZUluZm8gJiYgRFMuc29ydGluZ1BhZ2luZ1ZhbHVlcyAmJiBEUy5zb3J0aW5nUGFnaW5nVmFsdWVzLnRvdGFsSGl0cztcclxuICAgICAgICByZXR1cm4gaGFzUGFnZUluZm8gPyBgJHtEUy5wYWdlSW5mb30gb2YgJHtEUy5zb3J0aW5nUGFnaW5nVmFsdWVzLnRvdGFsSGl0c31gIDogJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmNvbmZpZyA9ICgpID0+IHsgcmV0dXJuIGNvbmZpZyAhPSBudWxsID8gY29uZmlnIDogaW5pdGlhbGlzZUNvbmZpZyhvcHRpb25zLmNvbmZpZykgfTtcclxuXHJcbiAgICByZXR1cm4gRFNcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EU0Fic3RyYWN0aW9uLmpzIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3Jvb3QuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwidmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0tleTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL190b0tleS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fTWFwLmpzIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0tleS5qcyIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lkZW50aXR5LmpzIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU2V0LmpzIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TdGFjay5qcyIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0LmpzIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpZiBzdWl0YWJsZSBmb3Igc3RyaWN0XG4gKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmljdENvbXBhcmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNTdHJpY3RDb21wYXJhYmxlLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYG1hdGNoZXNQcm9wZXJ0eWAgZm9yIHNvdXJjZSB2YWx1ZXMgc3VpdGFibGVcbiAqIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShrZXksIHNyY1ZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZSAmJlxuICAgICAgKHNyY1ZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiBPYmplY3Qob2JqZWN0KSkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9lcS5qcyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9rZXlzLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19EYXRhVmlldy5qcyIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0hhc2guanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXBwbHkuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNXaXRoKGFycmF5LCB2YWx1ZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlNYXAuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNGbGF0dGVuYWJsZSA9IHJlcXVpcmUoJy4vX2lzRmxhdHRlbmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mbGF0dGVuYCB3aXRoIHN1cHBvcnQgZm9yIHJlc3RyaWN0aW5nIGZsYXR0ZW5pbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBmbGF0dGVuLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlcHRoIFRoZSBtYXhpbXVtIHJlY3Vyc2lvbiBkZXB0aC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZWRpY2F0ZT1pc0ZsYXR0ZW5hYmxlXSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNTdHJpY3RdIFJlc3RyaWN0IHRvIHZhbHVlcyB0aGF0IHBhc3MgYHByZWRpY2F0ZWAgY2hlY2tzLlxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdD1bXV0gVGhlIGluaXRpYWwgcmVzdWx0IHZhbHVlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlRmxhdHRlbihhcnJheSwgZGVwdGgsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBwcmVkaWNhdGUgfHwgKHByZWRpY2F0ZSA9IGlzRmxhdHRlbmFibGUpO1xuICByZXN1bHQgfHwgKHJlc3VsdCA9IFtdKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAoZGVwdGggPiAwICYmIHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIGlmIChkZXB0aCA+IDEpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmxhdHRlbiBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgICAgYmFzZUZsYXR0ZW4odmFsdWUsIGRlcHRoIC0gMSwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5UHVzaChyZXN1bHQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc1N0cmljdCkge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZsYXR0ZW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUZsYXR0ZW4uanMiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmhhc0luYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSGFzSW4ob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGtleSBpbiBPYmplY3Qob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSGFzSW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUhhc0luLmpzIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUlzTmFOID0gcmVxdWlyZSgnLi9fYmFzZUlzTmFOJyksXG4gICAgc3RyaWN0SW5kZXhPZiA9IHJlcXVpcmUoJy4vX3N0cmljdEluZGV4T2YnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IGBmcm9tSW5kZXhgIGJvdW5kcyBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZVxuICAgID8gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleClcbiAgICA6IGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWF0Y2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBvYmplY3RgIGlzIGEgbWF0Y2gsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgaWYgKChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSlcbiAgICAgICAgICA/IGRhdGFbMV0gIT09IG9iamVjdFtkYXRhWzBdXVxuICAgICAgICAgIDogIShkYXRhWzBdIGluIG9iamVjdClcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgdmFyIGtleSA9IGRhdGFbMF0sXG4gICAgICAgIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHNyY1ZhbHVlID0gZGF0YVsxXTtcblxuICAgIGlmIChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSkge1xuICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFjayA9IG5ldyBTdGFjaztcbiAgICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spO1xuICAgICAgfVxuICAgICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcsIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICAgICAgOiByZXN1bHRcbiAgICAgICAgICApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWF0Y2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTWF0Y2guanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmFOYCB3aXRob3V0IHN1cHBvcnQgZm9yIG51bWJlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hTjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLml0ZXJhdGVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbdmFsdWU9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYW4gaXRlcmF0ZWUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGl0ZXJhdGVlLlxuICovXG5mdW5jdGlvbiBiYXNlSXRlcmF0ZWUodmFsdWUpIHtcbiAgLy8gRG9uJ3Qgc3RvcmUgdGhlIGB0eXBlb2ZgIHJlc3VsdCBpbiBhIHZhcmlhYmxlIHRvIGF2b2lkIGEgSklUIGJ1ZyBpbiBTYWZhcmkgOS5cbiAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYwMzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pXG4gICAgICA6IGJhc2VNYXRjaGVzKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJdGVyYXRlZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXRlcmF0ZWUuanMiLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5cy5qcyIsInZhciBiYXNlSXNNYXRjaCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hdGNoJyksXG4gICAgZ2V0TWF0Y2hEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWF0Y2hEYXRhJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShtYXRjaERhdGFbMF1bMF0sIG1hdGNoRGF0YVswXVsxXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT09IHNvdXJjZSB8fCBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlTWF0Y2hlcy5qcyIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyksXG4gICAgZ2V0ID0gcmVxdWlyZSgnLi9nZXQnKSxcbiAgICBoYXNJbiA9IHJlcXVpcmUoJy4vaGFzSW4nKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lc24ndCBjbG9uZSBgc3JjVmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIGlmIChpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKHRvS2V5KHBhdGgpLCBzcmNWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBvYmpWYWx1ZSA9IGdldChvYmplY3QsIHBhdGgpO1xuICAgIHJldHVybiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBvYmpWYWx1ZSA9PT0gc3JjVmFsdWUpXG4gICAgICA/IGhhc0luKG9iamVjdCwgcGF0aClcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzUHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVByb3BlcnR5YCB3aGljaCBzdXBwb3J0cyBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eURlZXAocGF0aCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlEZWVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgb3ZlclJlc3QgPSByZXF1aXJlKCcuL19vdmVyUmVzdCcpLFxuICAgIHNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fc2V0VG9TdHJpbmcnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVJlc3QuanMiLCJ2YXIgY29uc3RhbnQgPSByZXF1aXJlKCcuL2NvbnN0YW50JyksXG4gICAgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXRUb1N0cmluZ2Agd2l0aG91dCBzdXBwb3J0IGZvciBob3QgbG9vcCBzaG9ydGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuYywgJ3RvU3RyaW5nJywge1xuICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgJ3ZhbHVlJzogY29uc3RhbnQoc3RyaW5nKSxcbiAgICAnd3JpdGFibGUnOiB0cnVlXG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVNldFRvU3RyaW5nLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXG4gICAgY3JlYXRlU2V0ID0gcmVxdWlyZSgnLi9fY3JlYXRlU2V0JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBzZWVuID0gcmVzdWx0O1xuXG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICB9XG4gIGVsc2UgaWYgKGxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgdmFyIHNldCA9IGl0ZXJhdGVlID8gbnVsbCA6IGNyZWF0ZVNldChhcnJheSk7XG4gICAgaWYgKHNldCkge1xuICAgICAgcmV0dXJuIHNldFRvQXJyYXkoc2V0KTtcbiAgICB9XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIHNlZW4gPSBuZXcgU2V0Q2FjaGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcbiAgICAgICAgaWYgKHNlZW5bc2VlbkluZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyhzZWVuLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVW5pcS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsInZhciBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBub29wID0gcmVxdWlyZSgnLi9ub29wJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9iamVjdCBvZiBgdmFsdWVzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYWRkIHRvIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgc2V0LlxuICovXG52YXIgY3JlYXRlU2V0ID0gIShTZXQgJiYgKDEgLyBzZXRUb0FycmF5KG5ldyBTZXQoWywtMF0pKVsxXSkgPT0gSU5GSU5JVFkpID8gbm9vcCA6IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFNldCh2YWx1ZXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsInZhciBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3Mgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbWF0Y2ggZGF0YSBvZiBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hEYXRhKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0ga2V5cyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICB2YXIga2V5ID0gcmVzdWx0W2xlbmd0aF0sXG4gICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICByZXN1bHRbbGVuZ3RoXSA9IFtrZXksIHZhbHVlLCBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hdGNoRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBleGlzdHMgb24gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFzRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBoYXNGdW5jKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBmYWxzZTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSB0b0tleShwYXRoW2luZGV4XSk7XG4gICAgaWYgKCEocmVzdWx0ID0gb2JqZWN0ICE9IG51bGwgJiYgaGFzRnVuYyhvYmplY3QsIGtleSkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gIH1cbiAgaWYgKHJlc3VsdCB8fCArK2luZGV4ICE9IGxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogb2JqZWN0Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiYgaXNJbmRleChrZXksIGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1BhdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzUGF0aC5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoR2V0LmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoSGFzLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcHJlYWRhYmxlU3ltYm9sID0gU3ltYm9sID8gU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGZsYXR0ZW5hYmxlIGBhcmd1bWVudHNgIG9iamVjdCBvciBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmbGF0dGVuYWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0ZsYXR0ZW5hYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkgfHxcbiAgICAhIShzcHJlYWRhYmxlU3ltYm9sICYmIHZhbHVlICYmIHZhbHVlW3NwcmVhZGFibGVTeW1ib2xdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZsYXR0ZW5hYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzRmxhdHRlbmFibGUuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwidmFyIG1lbW9pemUgPSByZXF1aXJlKCcuL21lbW9pemUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIG1heGltdW0gbWVtb2l6ZSBjYWNoZSBzaXplLiAqL1xudmFyIE1BWF9NRU1PSVpFX1NJWkUgPSA1MDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1lbW9pemVgIHdoaWNoIGNsZWFycyB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24nc1xuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoY2FjaGUuc2l6ZSA9PT0gTUFYX01FTU9JWkVfU0laRSkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAgdmFyIGNhY2hlID0gcmVzdWx0LmNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVDYXBwZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19vdmVyQXJnLmpzIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyUmVzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19vdmVyUmVzdC5qcyIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwidmFyIGJhc2VTZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VTZXRUb1N0cmluZycpLFxuICAgIHNob3J0T3V0ID0gcmVxdWlyZSgnLi9fc2hvcnRPdXQnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRUb1N0cmluZy5qcyIsIi8qKiBVc2VkIHRvIGRldGVjdCBob3QgZnVuY3Rpb25zIGJ5IG51bWJlciBvZiBjYWxscyB3aXRoaW4gYSBzcGFuIG9mIG1pbGxpc2Vjb25kcy4gKi9cbnZhciBIT1RfQ09VTlQgPSA4MDAsXG4gICAgSE9UX1NQQU4gPSAxNjtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0J2xsIHNob3J0IG91dCBhbmQgaW52b2tlIGBpZGVudGl0eWAgaW5zdGVhZFxuICogb2YgYGZ1bmNgIHdoZW4gaXQncyBjYWxsZWQgYEhPVF9DT1VOVGAgb3IgbW9yZSB0aW1lcyBpbiBgSE9UX1NQQU5gXG4gKiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJlc3RyaWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc2hvcnRhYmxlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBzaG9ydE91dChmdW5jKSB7XG4gIHZhciBjb3VudCA9IDAsXG4gICAgICBsYXN0Q2FsbGVkID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YW1wID0gbmF0aXZlTm93KCksXG4gICAgICAgIHJlbWFpbmluZyA9IEhPVF9TUEFOIC0gKHN0YW1wIC0gbGFzdENhbGxlZCk7XG5cbiAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG9ydE91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zaG9ydE91dC5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tHZXQuanMiLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zIG9mIHZhbHVlcywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdHJpY3RJbmRleE9mLmpzIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUxlYWRpbmdEb3QgPSAvXlxcLi8sXG4gICAgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHJlTGVhZGluZ0RvdC50ZXN0KHN0cmluZykpIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwiLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJldHVybiBmcm9tIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb25zdGFudCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBfLnRpbWVzKDIsIF8uY29uc3RhbnQoeyAnYSc6IDEgfSkpO1xuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHMpO1xuICogLy8gPT4gW3sgJ2EnOiAxIH0sIHsgJ2EnOiAxIH1dXG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0c1swXSA9PT0gb2JqZWN0c1sxXSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uc3RhbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9jb25zdGFudC5qcyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvZ2V0LmpzIiwidmFyIGJhc2VIYXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VIYXNJbicpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBvciBpbmhlcml0ZWQgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNJbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2hhc0luLmpzIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZU9iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwiLyoqXG4gKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5sYXN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gbGVuZ3RoID8gYXJyYXlbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2xhc3QuanMiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL21lbW9pemUuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLm5vb3ApO1xuICogLy8gPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vb3A7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9ub29wLmpzIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvcHJvcGVydHkuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3N0dWJBcnJheS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3RvU3RyaW5nLmpzIiwidmFyIGJhc2VGbGF0dGVuID0gcmVxdWlyZSgnLi9fYmFzZUZsYXR0ZW4nKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpLFxuICAgIGxhc3QgPSByZXF1aXJlKCcuL2xhc3QnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnVuaW9uYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBpdGVyYXRlZWAgd2hpY2ggaXNcbiAqIGludm9rZWQgZm9yIGVhY2ggZWxlbWVudCBvZiBlYWNoIGBhcnJheXNgIHRvIGdlbmVyYXRlIHRoZSBjcml0ZXJpb24gYnlcbiAqIHdoaWNoIHVuaXF1ZW5lc3MgaXMgY29tcHV0ZWQuIFJlc3VsdCB2YWx1ZXMgYXJlIGNob3NlbiBmcm9tIHRoZSBmaXJzdFxuICogYXJyYXkgaW4gd2hpY2ggdGhlIHZhbHVlIG9jY3Vycy4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6XG4gKiAodmFsdWUpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgY29tYmluZWQgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaW9uQnkoWzIuMV0sIFsxLjIsIDIuM10sIE1hdGguZmxvb3IpO1xuICogLy8gPT4gWzIuMSwgMS4yXVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy51bmlvbkJ5KFt7ICd4JzogMSB9XSwgW3sgJ3gnOiAyIH0sIHsgJ3gnOiAxIH1dLCAneCcpO1xuICogLy8gPT4gW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH1dXG4gKi9cbnZhciB1bmlvbkJ5ID0gYmFzZVJlc3QoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHZhciBpdGVyYXRlZSA9IGxhc3QoYXJyYXlzKTtcbiAgaWYgKGlzQXJyYXlMaWtlT2JqZWN0KGl0ZXJhdGVlKSkge1xuICAgIGl0ZXJhdGVlID0gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBiYXNlVW5pcShiYXNlRmxhdHRlbihhcnJheXMsIDEsIGlzQXJyYXlMaWtlT2JqZWN0LCB0cnVlKSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmlvbkJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvdW5pb25CeS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMC4wMS4yMDE3LlxuICovXG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gXCJyLXJlcG9ydGFsLWJhc2VcIjtcbmltcG9ydCBIaXRsaXN0U2V0dXAgZnJvbSBcIi4vaGl0bGlzdC1zZXR1cFwiO1xuXG5jbGFzcyBIaXRsaXN0RGF0YXNvdXJjZSBleHRlbmRzIEhpdGxpc3RTZXR1cHtcbiAgLyoqXG4gICAqIFRoaXMgY2xhc3MgYWxsb3dzIHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gd2l0aCB0aGUgSGl0TGlzdCBkYXRhYmFzZSBhbmQgdXNlIHV0aWxpdHkgbWV0aG9kcyB0byBxdWVyeSBhbmQgZmlsdGVyIGRhdGEgcHJvdmlkZWQgdGhlcmUncyBhIGhpdGxpc3Qgb24gdGhlIHBhZ2VcbiAgICogQGV4dGVuZHMgSGl0bGlzdFNldHVwXG4gICAqICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM9e30pe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc2VhcmNoVmFsdWVzPVtdO1xuICAgIC8qKiBAcHJvcGVydHkge1N0cmluZ30gbW9kaWZpZXIgLSBleHRyYSBwYXJhbXMgYWRkZWQgYXMgYSBzdHJpbmcgZnJvbSBmaWx0ZXJzICovXG4gICAgdGhpcy5tb2RpZmllciA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIHBlcmZvcm1zIGluaXRpYWwgZGF0YSBsb2FkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIGluaXRpYWxEYXRhTG9hZCgpe1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpbml0aWFsTG9hZDp0cnVlfSlcbiAgfVxuICAvKipcbiAgICogbG9hZHMgbmV4dCBwYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIG5leHRQYWdlKCl7XG4gICAgdGhpcy5fc2tpcFBhZ2UodHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpc1BhZ2luZzogdHJ1ZX0sdGhpcy5tb2RpZmllcik7XG4gIH1cbiAgLyoqXG4gICAqIGxvYWRzIHByZXZpb3VzIHBhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgcHJldmlvdXNQYWdlKCl7XG4gICAgdGhpcy5fc2tpcFBhZ2UoZmFsc2UpO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aXNQYWdpbmc6IHRydWV9LHRoaXMubW9kaWZpZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJpZXMgSGl0TGlzdCBBUElcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogKi9cbiAgcmVxdWVzdFJlc3BvbnNlKG9wdGlvbnMpe1xuICAgIGxldCBxdWVyeT0gUmVwb3J0YWxCYXNlLmxvY2F0aW9uRGVzZXJpYWxpemUoKS5xdWVyeTtcbiAgICBpZihxdWVyeSAmJiBxdWVyeS5yZXBvcnRpZCAmJiB0aGlzLmhpdGxpc3RJRCl7XG4gICAgICAvKnNldCBjb21tb24gcGFyYW1zKi9cbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIFBhZ2VJZDogdGhpcy5wYWdlSUQsXG4gICAgICAgIHBhZ2VTdGF0ZUlkOiB0aGlzLnBhZ2VTdGF0ZUlELFxuICAgICAgICBQcmV2aWV3OiBxdWVyeS5wcmV2aWV3XG4gICAgICB9O1xuXG4gICAgICAvKmlmIG9wdGlvbnMgYXJlIHBhc3NlZCwgYWRkIG9wdGlvbnMqL1xuICAgICAgaWYob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpe1xuICAgICAgICBmb3IgKGxldCBhdHRybmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgcGFyYW1zW2F0dHJuYW1lXSA9IHR5cGVvZiBvcHRpb25zW2F0dHJuYW1lXT09PSdib29sZWFuJz8ob3B0aW9uc1thdHRybmFtZV0/JzEnOicwJyk6b3B0aW9uc1thdHRybmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIXBhcmFtcy5zZWFyY2ggJiYgdGhpcy5fc2VhcmNoVmFsdWVzLmxlbmd0aD4wKXtcbiAgICAgICAgcGFyYW1zLnNlYXJjaCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuX3NlYXJjaFZhbHVlcyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzb3J0aW5nUGFnaW5nVmFsdWVzID0gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzO1xuXG4gICAgICBpZiAoc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMhPW51bGwgJiYgIWlzTmFOKHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2VOdW1iZXIpKSB7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaW5pdGlhbExvYWQgPT09IHRydWUpIHtcbiAgICAgICAgICBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcyA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnZU51bWJlciArPSBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdpbmdGb3J3YXJkID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy5zb3J0aW5nUGFnaW5nVmFsdWVzPUpTT04uc3RyaW5naWZ5KHNvcnRpbmdQYWdpbmdWYWx1ZXMpO1xuXG4gICAgICByZXR1cm4gUmVwb3J0YWxCYXNlLnByb21pc2VSZXF1ZXN0KGAke3RoaXMuc2VydmljZVVSTH0mJHtIaXRsaXN0RGF0YXNvdXJjZS5zZXJpYWxpemVQYXJhbXMocGFyYW1zKX0ke3RoaXMubW9kaWZpZXIhPScnPycmJyt0aGlzLm1vZGlmaWVyOicnfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT50aGlzLnBhcnNlUmVzcG9uc2UocmVzcG9uc2UpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgSGl0TGlzdCBBUEkgcmVzcG9uc2VcbiAgICogKi9cbiAgcGFyc2VSZXNwb25zZShyZXNwb25zZSl7XG4gICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcblxuICAgIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHJlc3BvbnNlLnNvcnRpbmdQYWdpbmdWYWx1ZXM7XG4gICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICB0aGlzLnBhZ2VJbmZvID0gcmVzcG9uc2UucGFnZUluZm87XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHBhZ2luZ0ZvcndhcmQgaWYgYHRydWVgIGdvZXMgZm9yd2FyZCwgaWYgYG51bGxgIGdvZXMgYmFja3dhcmRcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNhbGxiYWNrXG4gICAqICovXG4gIF9za2lwUGFnZShwYWdpbmdGb3J3YXJkKXtcbiAgICBsZXQgX3NwdiA9IHsuLi50aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXN9O1xuICAgIGxldCBwdiA9IHsuLi5fc3B2LnBhZ2luZ1ZhbHVlc30gfHwge307XG4gICAgcHYucGFnaW5nRm9yd2FyZCA9IHBhZ2luZ0ZvcndhcmQ7IC8qaWYgZm9yd2FyZCBpcyBuZWVkZWQgdGhlbiBwYXNzIHRydWUsIGVsc2UgbnVsbCAtIGJhY2t3YXJkKi9cbiAgICBwdi5zdGFydElkID0gcGFnaW5nRm9yd2FyZCA/IHB2Lmxhc3RTdGFydElkIDogcHYuZmlyc3RTdGFydElkO1xuICAgIHB2LnN0YXJ0VmFsdWUgPSBwYWdpbmdGb3J3YXJkID8gcHYubGFzdFN0YXJ0VmFsdWUgOiBwdi5maXJzdFN0YXJ0VmFsdWU7XG4gICAgdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzID0ge1xuICAgICAgLi4udGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLFxuICAgICAgcGFnaW5nVmFsdWVzOiBwdlxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogc2VyaWFsaXplIHBhcmFtcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgLSBhbiBvYmplY3Qgd2l0aCBwYXJhbWV0ZXJzXG4gICAqICovXG4gIHN0YXRpYyBzZXJpYWxpemVQYXJhbXMocGFyYW1zKXtcbiAgICBsZXQgcXVlcnkgPSBbXTtcbiAgICBmb3IobGV0IGtleSBpbiBwYXJhbXMpe1xuICAgICAgcXVlcnkucHVzaChba2V5LHBhcmFtc1trZXldXS5qb2luKCc9JykpO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnkuam9pbignJicpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0RGF0YXNvdXJjZTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LWRhdGFzb3VyY2UuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTAuMDEuMjAxNy5cbiAqL1xuXG5jbGFzcyBIaXRsaXN0U2V0dXB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgLy9maXggZm9yIHdpbmRvdy5sb2NhdGlvbiBvcmlnaW4sIHRoYW54IElFXG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID8gJzonICsgd2luZG93LmxvY2F0aW9uLnBvcnQ6ICcnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBIaXRsaXN0U2V0dXAuZ2V0T3JpZ2luYWxDb25maWcoKTtcbiAgICB0aGlzLl9lbGVtZW50VHlwZSA9IHdpbmRvdy5IaXRMaXN0RWxlbWVudFR5cGU7XG4gICAgdGhpcy5fb3AgPSB3aW5kb3cuU2VhcmNoYWJsZUxpc3RPcGVyYXRvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBhbGxvd3MgZ2V0dGluZyBhIGxvY2FsaXNlZCBzdHJpbmcgaW4gdGhlIGxhbmd1YWdlIG9mIHRoZSByZXBvcnQgZnJvbSBIaXRsaXN0IGNvbmZpZy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIHRoZSBrZXkgdG8gbG9vayB0aGUgcHJvcGVydHkgdXBcbiAgICpcbiAgICogKiBgc3RvZWA6XCJTbWFsbGVyIHRoYW4gb3IgZXF1YWxcIixcbiAgICogKiBgZ3RvZWA6XCJHcmVhdGVyIHRoYW4gb3IgZXF1YWxcIixcbiAgICogKiBgYmV0d2VlbmA6XCJCZXR3ZWVuXCIsXG4gICAqICogYGJlZm9yZWA6XCJCZWZvcmVcIixcbiAgICogKiBgYWZ0ZXJgOlwiQWZ0ZXJcIixcbiAgICogKiBgZXhhY3RseWA6XCJFeGFjdGx5XCIsXG4gICAqICogYHNob3dkZWZhdWx0Y29sc2A6XCJTaG93IGRlZmF1bHQgY29sdW1uc1wiLFxuICAgKiAqIGBhcHBseWA6XCJBcHBseVwiLFxuICAgKiAqIGBjYW5jZWxgOlwiQ2FuY2VsXCIsXG4gICAqICogYHNob3doaWRlYDpcIlNob3cgLyBIaWRlIGNvbHVtbnNcIixcbiAgICogKiBgeWVzYDpcIlllc1wiLFxuICAgKiAqIGBub2A6XCJOb1wiLFxuICAgKiAqIGBsb2FkaW5nRGF0YWA6XCJMb2FkaW5nIGRhdGEsIHBsZWFzZSB3YWl0Li4uXCIsXCJcbiAgICogKiBgY2hlY2thbGxgOlwiQ2hlY2sgYWxsXCIsXG4gICAqICogYHVuY2hlY2thbGxgOlwiVW5jaGVjayBhbGxcIixcbiAgICogKiBgZXJyb3JMb2FkaW5nYDpcIkVycm9yIGxvYWRpbmcgZGF0YVwiLFxuICAgKiAqIGBlcnJvck5vQ29sdW1uc2A6XCJObyBjb2x1bW5zIHNlbGVjdGVkXCJcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUkVTUE9OREVOVE9WRVJWSUVXYDpcIlJlc3BvbmRlbnQgb3ZlcnZpZXdcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJJTlRgOlwiUHJpbnQgdGhlIGN1cnJlbnQgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19DTE9TRWA6XCJDbG9zZSB0aGlzIG92ZXJsYXlcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfRklMVEVSYDpcIkZpbHRlciBxdWVzdGlvbnNcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTk9USElOR0ZPVU5EYDpcIk5vIHF1ZXN0aW9ucyBtYXRjaCB5b3VyIHNlYXJjaFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VU2A6XCJQcmV2aW91c1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VU0hJTlRgOlwiUHJldmlvdXMgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19ORVhUYDpcIk5leHRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTkVYVEhJTlRgOlwiTmV4dCByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX09GYDpcInswfSBvZiB7MX1cIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTU9SRWA6XCJ7MH0gbW9yZVwiLFxuICAgKiAqIFJFUE9SVF9TSU5HTEVWSUVXX0FMVEVSTkFUSVZFU2A6XCJBbnN3ZXJzIGFsdGVybmF0aXZlczpcIlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKiAqL1xuICBpMThuKGtleSl7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5jYXB0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpP3RoaXMuX2NvbmZpZy5jYXB0aW9uc1trZXldOnRoaXMuX2NvbmZpZy5zaW5nbGVWaWV3VGV4dHMuaGFzT3duUHJvcGVydHkoa2V5KT90aGlzLl9jb25maWcuc2luZ2xlVmlld1RleHRzW2tleV06bnVsbFxuICB9XG5cbiAgZ2V0IGRhdGEoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmhpdGxpc3REYXRhfVxuXG4gIHNldCBkYXRhKGRhdGEpe1xuICAgIHRoaXMuX2NvbmZpZy5oaXRsaXN0RGF0YSA9IGRhdGE7XG4gIH1cbiAgZ2V0IGRpc2FibGVOZXh0QnV0dG9uKCl7XG4gICAgcmV0dXJuIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcy5kaXNhYmxlTmV4dEJ1dHRvbiB8fCBmYWxzZVxuICB9XG4gIGdldCBkaXNhYmxlUHJldkJ1dHRvbigpe1xuICAgIHJldHVybiB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMuZGlzYWJsZVByZXZCdXR0b24gfHwgZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSB2aXNpYmxlIEhpdExpc3QgY29sdW1ucyBvZiBPYmplY3QgdHlwZTogYHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ31gXG4gICAqIEByZXR1cm5zIHtBcnJheS48e2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfT59IFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHZpc2libGUgSGl0TGlzdCBjb2x1bW5zXG4gICAqICovXG4gIGdldCBjb2x1bW5zKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5jb2x1bW5zfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBIaXRMaXN0IGNvbHVtbnMgb2YgT2JqZWN0IHR5cGU6IGB7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9YFxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqICovXG4gIGdldCBhbGxDb2x1bW5zKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5hbGxDb2x1bW5zfVxuXG4gIGdldCBoaXRsaXN0SUQoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmNvbXBvbmVudElkfVxuICBnZXQgcGFnZUlEKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5wYWdlSWR9XG4gIGdldCBsYW5ndWFnZSgpe3JldHVybiB0aGlzLl9jb25maWcubGFuZ3VhZ2V9XG4gIGdldCBzZXJ2aWNlVVJMKCl7cmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt0aGlzLl9jb25maWcuc2VydmljZVVybH1gfVxuICBnZXQgcGFnZVN0YXRlSUQoKXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1BhZ2VTdGF0ZUlkJyk/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQYWdlU3RhdGVJZCcpLnZhbHVlOnVuZGVmaW5lZH1cbiAgZ2V0IHNvcnRpbmdQYWdpbmdWYWx1ZXMoKXtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXMhPW51bGw/dGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXM6e31cbiAgfVxuICBzZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcyh2YWwpe1xuICAgIHRoaXMuX2NvbmZpZy5zb3J0aW5nUGFnaW5nVmFsdWVzID0gdmFsO1xuICB9XG5cbiAgc3RhdGljIF9maXhKc29uRGF0ZShqc29uRGF0ZSkge1xuICAgIGlmICghKGpzb25EYXRlICYmIFkgJiYgWS5MYW5nLmlzRnVuY3Rpb24oanNvbkRhdGUucmVwbGFjZSkpKSB7cmV0dXJuIGpzb25EYXRlO31cbiAgICBsZXQgY29uc3RyID0ganNvbkRhdGUucmVwbGFjZShuZXcgUmVnRXhwKFwiXi9EYXRlXFxcXCgoWy0rXT9cXFxcZCspXFxcXCkvJFwiKSwgXCJuZXcgRGF0ZSgkMSlcIik7XG4gICAgaWYgKGNvbnN0ciA9PSBqc29uRGF0ZSkge3JldHVybiBqc29uRGF0ZTt9XG4gICAgcmV0dXJuIGV2YWwoY29uc3RyKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHRoZSBjb25maWcgZm9yIGEgSGl0TGlzdCBpZiBpdCdzIGluaXRpYWxpc2VkIG9uIHRoZSBwYWdlXG4gICAqIGBgYFxuICAgKiB7XG4gICAqICBhbGxDb2x1bW5zOkFycmF5LFxuICAgKiAgY2FwdGlvbnM6T2JqZWN0LFxuICAgKiAgY2xpZW50SWQ6U3RyaW5nLFxuICAgKiAgY29sdW1uczpBcnJheSxcbiAgICogIGNvbXBvbmVudElkOlN0cmluZyxcbiAgICogIGhhc2hlZFByb2plY3RJZDpTdHJpbmcsXG4gICAqICBoaXRsaXN0RGF0YTpBcnJheSxcbiAgICogIGxhbmd1YWdlOk51bWJlcixcbiAgICogIG5leHRUZXh0OlN0cmluZyxcbiAgICogIG5vSW5pdGlhbExvYWQ6Qm9vbGVhbixcbiAgICogIHBhZ2VBamF4RW5hYmxlZDpCb29sZWFuLFxuICAgKiAgcGFnZUlkOlN0cmluZyxcbiAgICogIHByZXZUZXh0OlN0cmluZyxcbiAgICogIHByZXZpZXc6Qm9vbGVhbixcbiAgICogIHNlYXJjaEl0ZW1zOkFycmF5LFxuICAgKiAgc2VhcmNoVmFsdWVzOkFycmF5LFxuICAgKiAgc2VydmljZVVybDpTdHJpbmcsXG4gICAqICBzZXJ2aWNlVXJsTWV0YURhdGE6U3RyaW5nLFxuICAgKiAgc2hvd1NpbmdsZVZpZXdPblJvd1NlbGVjdDpCb29sZWFuLFxuICAgKiAgc2luZ2xlVmlld0FwaVVybDpTdHJpbmcsXG4gICAqICBzaW5nbGVWaWV3Rm9ybXNDaHVua0FwaVVybDpTdHJpbmcsXG4gICAqICBzaW5nbGVWaWV3VGV4dHM6T2JqZWN0LFxuICAgKiAgc29ydGluZ1BhZ2luZ1ZhbHVlczpPYmplY3QsXG4gICAqICBzdHlsZXM6T2JqZWN0LFxuICAgKiAgdmVyc2lvbjpTdHJpbmdcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogKi9cbiAgc3RhdGljIGdldE9yaWdpbmFsQ29uZmlnKCl7XG4gICAgbGV0IHNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKTtcbiAgICBpZihzY3JpcHRzKXtcbiAgICAgIGxldCBpPXNjcmlwdHMubGVuZ3RoLFxuICAgICAgICAgIGNmZyA9IC8oWVxcLlJlcG9ydGFsXFwuSGl0TGlzdCwpXFxzKC4qPylcXCk7L2dpO1xuICAgICAgd2hpbGUoaS0tKXtcbiAgICAgICAgbGV0IHNjcmlwdCA9IHNjcmlwdHNbaV0udGV4dDtcbiAgICAgICAgaWYoc2NyaXB0LmluZGV4T2YoJ1kuUmVwb3J0YWwuSGl0TGlzdCwnKT4tMSl7XG4gICAgICAgICAgbGV0IGV4ZWMgPSBjZmcuZXhlYyhzY3JpcHQpO1xuICAgICAgICAgIHJldHVybiAoZXhlYyE9bnVsbCAmJiBleGVjWzJdKT8gSlNPTi5wYXJzZShleGVjWzJdKTogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hpdGxpc3QgY29uZmlnIGlzIG5vdCBwcmVzZW50IG9uIHRoZSBwYWdlJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdFNldHVwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LXNldHVwLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDA3LjA5LjIwMTYuXG4gKi9cblxuaW1wb3J0IEhpdGxpc3REYXRhc291cmNlIGZyb20gXCIuL2hpdGxpc3QtZGF0YXNvdXJjZVwiO1xuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tIFwici1yZXBvcnRhbC1iYXNlXCI7XG5cbndpbmRvdy5SZXBvcnRhbCA9IHdpbmRvdy5SZXBvcnRhbCB8fCB7fTtcblJlcG9ydGFsQmFzZS5taXhpbih3aW5kb3cuUmVwb3J0YWwse1xuICBIaXRsaXN0RGF0YXNvdXJjZVxufSk7XG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0RGF0YXNvdXJjZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9