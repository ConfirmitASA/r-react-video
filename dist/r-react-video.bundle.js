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
	            { className: 'ImageGridTile--action-icon' },
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
	          var atDataLeftBoundaryCanLoad = nextIndex < 0 && !singleViewDisablePrev;
	          var atDataRightBoundaryCanLoad = nextIndex > itemsLength && !singleViewDisableNext && paginationType !== 'continuous';
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
	                _extends({ className: 'SingleView--nav-button' }, wrapper),
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
	
	            var mainColumns = ['title', 'description', 'image', 'audio', 'video'];
	            return _react2.default.createElement(
	                'div',
	                { className: 'renderArea Responses' },
	                _react2.default.createElement(
	                    'div',
	                    { 'class': 'Responses--wrapper' },
	                    mainColumns != null && mainColumns.map(function (qID) {
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
	                                _this2['_' + qID + 'Renderer']
	                            )
	                        ) : null;
	                    }),
	                    columns != null && columns.map(function (qID) {
	                        return data[qID] ? _react2.default.createElement(
	                            'div',
	                            { className: 'row' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'label' },
	                                columnsMap[qID]
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'value' },
	                                data[qID]
	                            )
	                        ) : null;
	                    })
	                )
	            );
	        }
	    }, {
	        key: '_titleRenderer',
	        get: function get() {
	            var data = this.props.data;
	
	            return data.title;
	        }
	    }, {
	        key: '_descriptionRenderer',
	        get: function get() {
	            var data = this.props.data;
	
	            return data.description;
	        }
	    }, {
	        key: '_imageRenderer',
	        get: function get() {
	            var data = this.props.data;
	
	            return _react2.default.createElement('img', { width: '100%', height: 'auto', src: data.image });
	        }
	    }, {
	        key: '_videoRenderer',
	        get: function get() {
	            var data = this.props.data;
	
	            return _react2.default.createElement(
	                'video',
	                { controls: true, style: { width: '100% !important', height: 'auto !important' } },
	                _react2.default.createElement('source', { src: data.video, type: 'video/mp4' }),
	                'Your browser does not support the video tag.'
	            );
	        }
	    }, {
	        key: '_audioRenderer',
	        get: function get() {
	            var _props2 = this.props,
	                data = _props2.data,
	                columnsMap = _props2.columnsMap;
	
	            return _react2.default.createElement('audio', { src: data.audio, type: 'audio/mp4', controls: true, style: { width: '100% !important', height: 'auto !important' } });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWEzM2FhZDFmMzhhNGM2Y2Q4YmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L01ESWNvbi9kaXN0L01ESWNvbi5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9kaXN0L1Byb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vci1yZXBvcnRhbC1iYXNlL3NyYy9yZXBvcnRhbC1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWRUaWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWN0VmlkZW8vTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RWaWRlby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2luZ2xlVmlldy9OYXZCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmdsZVZpZXcvUmVzcG9uc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9TaW5nbGVWaWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvRFNBYnN0cmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlRmxhdHRlbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jcmVhdGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNQYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzRmxhdHRlbmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2hvcnRPdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdHJpY3RJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZ2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9ub29wLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdW5pb25CeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LWRhdGFzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1zZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbImxhdW5jaFZpZGVvSGl0bGlzdCIsImNvbmZpZ05hbWUiLCJ0aHVtYnNQbGFjZWhvbGRlciIsIkVycm9yIiwiVHlwZUVycm9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXBvcnRhbCIsIm1peGluIiwic3RvcmUiLCJyZXF1aXJlIiwidWlkIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJnbG9iYWwiLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwiaXNPYmplY3QiLCJpdCIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsImtleSIsInZhbHVlIiwiZiIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJhRnVuY3Rpb24iLCJmbiIsInRoYXQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJiIiwiYyIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJPIiwiUCIsIkF0dHJpYnV0ZXMiLCJlIiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiZGVmIiwiaGFzIiwiVEFHIiwidGFnIiwic3RhdCIsInByb3RvdHlwZSIsImNvbmZpZ3VyYWJsZSIsInNoYXJlZCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiSU9iamVjdCIsImRlZmluZWQiLCJjb2YiLCJBUkciLCJ0cnlHZXQiLCJUIiwiQiIsImNhbGxlZSIsInNwbGl0IiwiY3R4IiwiaGlkZSIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiRiIsIklTX0dMT0JBTCIsIkciLCJJU19TVEFUSUMiLCJTIiwiSVNfUFJPVE8iLCJJU19CSU5EIiwiSVNfV1JBUCIsIlciLCJleHBQcm90byIsInRhcmdldCIsIm93biIsIm91dCIsIkMiLCJ2aXJ0dWFsIiwiUiIsIlUiLCJleGVjIiwiZG9jdW1lbnRFbGVtZW50IiwiTElCUkFSWSIsInJlZGVmaW5lIiwiSXRlcmF0b3JzIiwiJGl0ZXJDcmVhdGUiLCJzZXRUb1N0cmluZ1RhZyIsImdldFByb3RvdHlwZU9mIiwiSVRFUkFUT1IiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiQmFzZSIsIk5BTUUiLCJDb25zdHJ1Y3RvciIsIm5leHQiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInByb3RvIiwidmFsdWVzIiwiZW50cmllcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwibWV0aG9kcyIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiUHJvbWlzZUNhcGFiaWxpdHkiLCJyZXNvbHZlIiwicmVqZWN0IiwicHJvbWlzZSIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiU0hBUkVEIiwiaW52b2tlIiwiaHRtbCIsImNlbCIsInByb2Nlc3MiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImlkIiwibGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJhcmdzIiwiaSIsInB1c2giLCJuZXh0VGljayIsIm5vdyIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsInNldCIsImNsZWFyIiwidG9JbnRlZ2VyIiwibWluIiwicHgiLCJyYW5kb20iLCJjb25jYXQiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwidCIsInIiLCJyZWFjdCIsIm8iLCJuIiwibG9hZGVkIiwibSIsInAiLCJkZWZhdWx0IiwiTURJY29uIiwiX19lc01vZHVsZSIsIlJlZmVyZW5jZUVycm9yIiwidSIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJsIiwicHJvcHMiLCJmaWxsIiwic2l6ZSIsImljb24iLCJjb25zb2xlIiwibG9nIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicyIsImFzc2lnbiIsIl9pbWFnZU9ubG9hZCIsImJpbmQiLCJfaW1hZ2VPbmVycm9yIiwic3RhdGUiLCJzcmMiLCJwbGFjZWhvbGRlckhpZGRlbiIsInBsYWNlaG9sZGVyIiwic2l6aW5nIiwicG9zaXRpb24iLCJwcm9wb3J0aW9uIiwibG9hZGluZyIsImVycm9yIiwiX2xvYWQiLCJfY29tcHV0ZURpbWVuc2lvbnMiLCJfY29tcHV0ZVByb3BvcnRpb24iLCJhc3BlY3QiLCJzZXRTdGF0ZSIsImluZGV4T2YiLCJtYXAiLCJwYXJzZUZsb2F0Iiwic3Vic3RyaW5nIiwiZCIsInByZWxvYWQiLCJmYWRlIiwiaCIsInBsYWNlaG9sZGVyU2l6aW5nIiwiZyIsImFsdCIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInJvbGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJkaXNwbGF5Iiwib25Mb2FkIiwib25FcnJvciIsIl9yZXNldCIsInByZXZlbnRMb2FkIiwiQ29tcG9uZW50IiwiUHJvbWlzZSIsImZvcmJpZGRlbkZpZWxkIiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpbmRleCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyYWJsZSIsIml0ZXJGbiIsInN0ZXAiLCJpdGVyYXRvciIsInJlc3VsdCIsImRvbmUiLCJ1biIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiQXJyYXlQcm90byIsIkFycmF5IiwicmV0IiwiZGVzY3JpcHRvciIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIml0ZXIiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwidGhlbiIsInRhc2siLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50IiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsImdldEtleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImFycmF5SW5kZXhPZiIsIm5hbWVzIiwiJGtleXMiLCJ2IiwibmV3UHJvbWlzZUNhcGFiaWxpdHkiLCJ4IiwicHJvbWlzZUNhcGFiaWxpdHkiLCJERVNDUklQVE9SUyIsIlNQRUNJRVMiLCJLRVkiLCJEIiwiVE9fU1RSSU5HIiwicG9zIiwiU3RyaW5nIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsIm1heCIsInZhbCIsInZhbHVlT2YiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJhZGRUb1Vuc2NvcGFibGVzIiwiaXRlcmF0ZWQiLCJfdCIsIl9pIiwiX2siLCJBcmd1bWVudHMiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJtaWNyb3Rhc2siLCJuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSIsInBlcmZvcm0iLCJwcm9taXNlUmVzb2x2ZSIsIlBST01JU0UiLCIkUHJvbWlzZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJPd25Qcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJzYW1lQ29uc3RydWN0b3IiLCJpc1RoZW5hYmxlIiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsIm9uVW5oYW5kbGVkIiwidW5oYW5kbGVkIiwiaXNVbmhhbmRsZWQiLCJlbWl0Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJyZWFzb24iLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJ3cmFwcGVyIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJjYXBhYmlsaXR5IiwiYWxsIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCIkYXQiLCJwb2ludCIsIlRPX1NUUklOR19UQUciLCJET01JdGVyYWJsZXMiLCJDb2xsZWN0aW9uIiwiUmVwb3J0YWxCYXNlIiwibGV2ZWwiLCJpc0FycmF5IiwiX2xvZ2dlciIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50Iiwic3RyIiwicmVwbGFjZSIsIlVSTCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZW5kIiwidmFyaWFibGUiLCJxdWVyeSIsImxvY2F0aW9uIiwic2VhcmNoIiwidmFycyIsInBhaXIiLCJ0b0xvd2VyQ2FzZSIsInBhdGgiLCJvcmlnaW4iLCJwYXRobmFtZSIsImZvckVhY2giLCJhUGFpciIsImpvaW4iLCJNRURJQV9UWVBFUyIsIkltYWdlR3JpZFRpbGUiLCJhY3Rpb25CdXR0b24iLCJhY3Rpb25JY29uIiwib25TZWxlY3QiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJfY29tcHV0ZVRpbGVUeXBlIiwibWVkaWF0eXBlIiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJpY29uU2VydmVyIiwiZXNjYXBlIiwiaWNvbnMiLCJhdWRpbyIsInZpZGVvIiwidW5rbm93biIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwibnVtYmVyIiwiZnVuYyIsIkltYWdlR3JpZCIsIml0ZW1DbGlja0hhbmRsZXIiLCJpdGVtIiwiaXRlbXMiLCJkdW1teUl0ZW1zIiwicmVuZGVyRHVtbXlJdGVtcyIsImNvdW50IiwiYXJyYXkiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsIk5hdmlnYXRpb24iLCJjb25maWciLCJwYWdpbmF0aW9uIiwiY29udGludW91c05hdmlnYXRpb24iLCJwYWdpbmdOYXZpZ2F0aW9uIiwibG9hZE1vcmUiLCJkaXNhYmxlTmV4dEJ1dHRvbiIsInRleHRBbGlnbiIsImxvYWRQcmV2aW91c1BhZ2UiLCJsb2FkTmV4dFBhZ2UiLCJkaXNhYmxlUHJldkJ1dHRvbiIsInBhZ2VJbmZvIiwidHJhbnNsYXRlIiwiUmVhY3RWaWRlbyIsIkRTIiwiY29tcG9uZW50Iiwic2luZ2xlVmlld01vZGUiLCJzaW5nbGVWaWV3IiwibGluayIsInNpbmdsZVZpZXdWaXNpYmxlIiwic2luZ2xlVmlld0Rpc2FibGVQcmV2Iiwic2luZ2xlVmlld0Rpc2FibGVOZXh0IiwiaTE4biIsInJldHVyblRvR3JpZCIsImxvYWRQcmV2aW91c0l0ZW0iLCJuYXZpZ2F0ZUl0ZW1zIiwibG9hZE5leHRJdGVtIiwiZ2V0U2luZ2xlVmlld05hdlN0YXRlIiwiYWN0aW9uSWNvbkNsaWNrIiwicmVuZGVyU2luZ2xlVmlldyIsImNhbkVkaXQiLCJyZW5kZXJOYXZpZ2F0aW9uIiwiZGF0YUxvYWRpbmdNZXNzYWdlIiwiZ2V0UGFnZUluZm8iLCJuYXZpZ2F0aW9uUHJvcHMiLCJpbmRpdmlkdWFsUmVjb3Jkc1F1ZXN0aW9uSWRzIiwiaW5kaXZpZHVhbFJlY29yZHNLZXlMYWJlbHMiLCJyZXZlcnNlIiwiYWxsQ29sdW1ucyIsImZpbHRlciIsInJlY29yZCIsImxhYmVsIiwiaXJJZHMiLCJjb2x1bW4iLCJtZXNzYWdlIiwiZGlyZWN0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJpdGVtc0xlbmd0aCIsImN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4IiwibmV4dEluZGV4IiwibG9hZEl0ZW1Gcm9tUHJldmlvdXNQYWdlIiwibG9hZEl0ZW1Gcm9tTmV4dFBhZ2UiLCJwcm9taXNlZEl0ZW1zIiwic2luZ2xlVmlld0RhdGEiLCJuZXdJdGVtcyIsInByZXZTdGF0ZSIsImF0RGF0YUxlZnRCb3VuZGFyeUNhbkxvYWQiLCJhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCIsImN1cnJlbnRJdGVtSW5kZXgiLCJpbmRpdmlkdWFsUmVjb3JkcyIsImdldExhYmVsc0Zvck1haW5GaWVsZHMiLCJnZXRMYWJlbHNGb3JJbmRpdmlkdWFsUmVjb3JkcyIsIk5hdkJ1dHRvbiIsIlJlc3BvbnNlcyIsImNvbHVtbnMiLCJjb2x1bW5zTWFwIiwibWFpbkNvbHVtbnMiLCJxSUQiLCJOYXZCYXIiLCJyZXR1cm5Ub0dyaWRBY3Rpb24iLCJTaW5nbGVWaWV3IiwibmF2QmFyUHJvcHMiLCJpY19zdGFyIiwiaWNfc3Rhcl9ib3JkZXIiLCJpY19hcnJvd19iYWNrIiwiaWNfYXJyb3dfZm9yd2FyZCIsImljX3ZpZXdfbW9kdWxlIiwiRFNBYnN0cmFjdGlvbiIsIm9wdGlvbnMiLCJsb2NhdGlvbkRlc2VyaWFsaXplIiwic2V0dXBEYXRhTGlzdGVuZXIiLCJZIiwiR2xvYmFsIiwib24iLCJpbml0aWFsaXNlQ29uZmlnIiwibW9kaWZpZXIiLCJmaWx0ZXJJbmZvIiwiaW5pdGlhbERhdGFMb2FkIiwicHJvY2Vzc0RhdGEiLCJjYXRjaCIsImhhbmRsZURhdGFMb2FkaW5nRXJyb3IiLCJ0cmltIiwibW9kZSIsIm5ld0RhdGEiLCJkYXRhUm93Iiwicm93SW5kZXgiLCJwYXJzZWRSb3ciLCJpciIsImRhdGFGaWVsZHMiLCJjb2x1bW5JRCIsInByZXBhcmVEYXRhIiwicmVzcG9uc2VpZCIsInNsaW5rIiwicG9wIiwiZ2VuZXJhdGVNZWRpYUxpbmsiLCJmaWxlTmFtZSIsImRzTmFtZSIsInN1cnZleUlEIiwicmVwb3J0aWQiLCJuZXh0UGFnZSIsInByZXZpb3VzUGFnZSIsInJlc3BvbnNlIiwiaW5pdGlhbExvYWQiLCJoYXNQYWdlSW5mbyIsInNvcnRpbmdQYWdpbmdWYWx1ZXMiLCJ0b3RhbEhpdHMiLCJmcmVlR2xvYmFsIiwiZnJlZVNlbGYiLCJyb290IiwiYmFzZUlzTmF0aXZlIiwiZ2V0VmFsdWUiLCJnZXROYXRpdmUiLCJpc09iamVjdExpa2UiLCJnZXRSYXdUYWciLCJvYmplY3RUb1N0cmluZyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiYmFzZUdldFRhZyIsImxpc3RDYWNoZUNsZWFyIiwibGlzdENhY2hlRGVsZXRlIiwibGlzdENhY2hlR2V0IiwibGlzdENhY2hlSGFzIiwibGlzdENhY2hlU2V0IiwiTGlzdENhY2hlIiwiZW50cnkiLCJlcSIsImFzc29jSW5kZXhPZiIsImlzS2V5YWJsZSIsImdldE1hcERhdGEiLCJfX2RhdGFfXyIsIm5hdGl2ZUNyZWF0ZSIsImlzU3ltYm9sIiwiSU5GSU5JVFkiLCJ0b0tleSIsIk1hcCIsIm1hcENhY2hlQ2xlYXIiLCJtYXBDYWNoZURlbGV0ZSIsIm1hcENhY2hlR2V0IiwibWFwQ2FjaGVIYXMiLCJtYXBDYWNoZVNldCIsIk1hcENhY2hlIiwicmVJc0RlZXBQcm9wIiwicmVJc1BsYWluUHJvcCIsImlzS2V5IiwidGVzdCIsInNldFRvQXJyYXkiLCJpZGVudGl0eSIsImJhc2VJc0FyZ3VtZW50cyIsIm9iamVjdFByb3RvIiwiaXNBcmd1bWVudHMiLCJNQVhfU0FGRV9JTlRFR0VSIiwiaXNMZW5ndGgiLCJzeW1ib2xUYWciLCJTZXQiLCJzZXRDYWNoZUFkZCIsInNldENhY2hlSGFzIiwiU2V0Q2FjaGUiLCJhZGQiLCJzdGFja0NsZWFyIiwic3RhY2tEZWxldGUiLCJzdGFja0dldCIsInN0YWNrSGFzIiwic3RhY2tTZXQiLCJTdGFjayIsImFycmF5UHVzaCIsIm9mZnNldCIsImNhc3RQYXRoIiwiYmFzZUdldCIsImJhc2VJc0VxdWFsRGVlcCIsImJhc2VJc0VxdWFsIiwib3RoZXIiLCJiaXRtYXNrIiwiY3VzdG9taXplciIsInN0YWNrIiwiY2FjaGVIYXMiLCJjYWNoZSIsInN0cmluZ1RvUGF0aCIsImFycmF5U29tZSIsIkNPTVBBUkVfUEFSVElBTF9GTEFHIiwiQ09NUEFSRV9VTk9SREVSRURfRkxBRyIsImVxdWFsQXJyYXlzIiwiZXF1YWxGdW5jIiwiaXNQYXJ0aWFsIiwiYXJyTGVuZ3RoIiwib3RoTGVuZ3RoIiwic3RhY2tlZCIsInNlZW4iLCJhcnJWYWx1ZSIsIm90aFZhbHVlIiwiY29tcGFyZWQiLCJvdGhJbmRleCIsInJlSXNVaW50IiwiaXNJbmRleCIsImlzU3RyaWN0Q29tcGFyYWJsZSIsIm1hdGNoZXNTdHJpY3RDb21wYXJhYmxlIiwic3JjVmFsdWUiLCJmdW5jUHJvdG8iLCJmdW5jVG9TdHJpbmciLCJ0b1NvdXJjZSIsImlzRnVuY3Rpb24iLCJpc0FycmF5TGlrZSIsInN0dWJGYWxzZSIsImZyZWVFeHBvcnRzIiwibm9kZVR5cGUiLCJmcmVlTW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsIkJ1ZmZlciIsIm5hdGl2ZUlzQnVmZmVyIiwiaXNCdWZmZXIiLCJhc3luY1RhZyIsImZ1bmNUYWciLCJnZW5UYWciLCJwcm94eVRhZyIsImJhc2VJc1R5cGVkQXJyYXkiLCJiYXNlVW5hcnkiLCJub2RlVXRpbCIsIm5vZGVJc1R5cGVkQXJyYXkiLCJpc1R5cGVkQXJyYXkiLCJhcnJheUxpa2VLZXlzIiwiYmFzZUtleXMiLCJEYXRhVmlldyIsImhhc2hDbGVhciIsImhhc2hEZWxldGUiLCJoYXNoR2V0IiwiaGFzaEhhcyIsImhhc2hTZXQiLCJIYXNoIiwiVWludDhBcnJheSIsIldlYWtNYXAiLCJ0aGlzQXJnIiwiYXJyYXlGaWx0ZXIiLCJwcmVkaWNhdGUiLCJyZXNJbmRleCIsImJhc2VJbmRleE9mIiwiYXJyYXlJbmNsdWRlcyIsImFycmF5SW5jbHVkZXNXaXRoIiwiY29tcGFyYXRvciIsImJhc2VUaW1lcyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsImFycmF5TWFwIiwiaXRlcmF0ZWUiLCJiYXNlRmluZEluZGV4IiwiZnJvbVJpZ2h0IiwiaXNGbGF0dGVuYWJsZSIsImJhc2VGbGF0dGVuIiwiZGVwdGgiLCJpc1N0cmljdCIsImJhc2VHZXRBbGxLZXlzIiwia2V5c0Z1bmMiLCJzeW1ib2xzRnVuYyIsImJhc2VIYXNJbiIsImJhc2VJc05hTiIsInN0cmljdEluZGV4T2YiLCJhcmdzVGFnIiwiZXF1YWxCeVRhZyIsImVxdWFsT2JqZWN0cyIsImdldFRhZyIsImFycmF5VGFnIiwib2JqZWN0VGFnIiwib2JqSXNBcnIiLCJvdGhJc0FyciIsIm9ialRhZyIsIm90aFRhZyIsIm9iaklzT2JqIiwib3RoSXNPYmoiLCJpc1NhbWVUYWciLCJvYmpJc1dyYXBwZWQiLCJvdGhJc1dyYXBwZWQiLCJvYmpVbndyYXBwZWQiLCJvdGhVbndyYXBwZWQiLCJiYXNlSXNNYXRjaCIsIm1hdGNoRGF0YSIsIm5vQ3VzdG9taXplciIsIm9ialZhbHVlIiwiaXNNYXNrZWQiLCJyZVJlZ0V4cENoYXIiLCJyZUlzSG9zdEN0b3IiLCJyZUlzTmF0aXZlIiwiUmVnRXhwIiwicGF0dGVybiIsImJvb2xUYWciLCJkYXRlVGFnIiwiZXJyb3JUYWciLCJtYXBUYWciLCJudW1iZXJUYWciLCJyZWdleHBUYWciLCJzZXRUYWciLCJzdHJpbmdUYWciLCJ3ZWFrTWFwVGFnIiwiYXJyYXlCdWZmZXJUYWciLCJkYXRhVmlld1RhZyIsImZsb2F0MzJUYWciLCJmbG9hdDY0VGFnIiwiaW50OFRhZyIsImludDE2VGFnIiwiaW50MzJUYWciLCJ1aW50OFRhZyIsInVpbnQ4Q2xhbXBlZFRhZyIsInVpbnQxNlRhZyIsInVpbnQzMlRhZyIsInR5cGVkQXJyYXlUYWdzIiwiYmFzZU1hdGNoZXMiLCJiYXNlTWF0Y2hlc1Byb3BlcnR5IiwicHJvcGVydHkiLCJiYXNlSXRlcmF0ZWUiLCJpc1Byb3RvdHlwZSIsIm5hdGl2ZUtleXMiLCJnZXRNYXRjaERhdGEiLCJoYXNJbiIsImJhc2VQcm9wZXJ0eSIsImJhc2VQcm9wZXJ0eURlZXAiLCJvdmVyUmVzdCIsInNldFRvU3RyaW5nIiwiYmFzZVJlc3QiLCJzdGFydCIsImNvbnN0YW50IiwiYmFzZVNldFRvU3RyaW5nIiwic3ltYm9sUHJvdG8iLCJzeW1ib2xUb1N0cmluZyIsImJhc2VUb1N0cmluZyIsImNyZWF0ZVNldCIsIkxBUkdFX0FSUkFZX1NJWkUiLCJiYXNlVW5pcSIsImluY2x1ZGVzIiwiaXNDb21tb24iLCJvdXRlciIsImNvbXB1dGVkIiwic2VlbkluZGV4IiwiY29yZUpzRGF0YSIsIm5vb3AiLCJtYXBUb0FycmF5Iiwic3ltYm9sVmFsdWVPZiIsImJ5dGVMZW5ndGgiLCJieXRlT2Zmc2V0IiwiYnVmZmVyIiwiY29udmVydCIsImdldEFsbEtleXMiLCJvYmpQcm9wcyIsIm9iakxlbmd0aCIsIm90aFByb3BzIiwic2tpcEN0b3IiLCJvYmpDdG9yIiwib3RoQ3RvciIsImdldFN5bWJvbHMiLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsImlzT3duIiwidW5tYXNrZWQiLCJzdHViQXJyYXkiLCJuYXRpdmVHZXRTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9sIiwicHJvbWlzZVRhZyIsImRhdGFWaWV3Q3RvclN0cmluZyIsIm1hcEN0b3JTdHJpbmciLCJwcm9taXNlQ3RvclN0cmluZyIsInNldEN0b3JTdHJpbmciLCJ3ZWFrTWFwQ3RvclN0cmluZyIsIkFycmF5QnVmZmVyIiwiQ3RvciIsImN0b3JTdHJpbmciLCJoYXNQYXRoIiwiaGFzRnVuYyIsIkhBU0hfVU5ERUZJTkVEIiwic3ByZWFkYWJsZVN5bWJvbCIsImlzQ29uY2F0U3ByZWFkYWJsZSIsIm1hc2tTcmNLZXkiLCJhcnJheVByb3RvIiwic3BsaWNlIiwibGFzdEluZGV4IiwibWVtb2l6ZSIsIk1BWF9NRU1PSVpFX1NJWkUiLCJtZW1vaXplQ2FwcGVkIiwib3ZlckFyZyIsImZyZWVQcm9jZXNzIiwiYmluZGluZyIsInRyYW5zZm9ybSIsImFyZyIsIm5hdGl2ZU1heCIsIm90aGVyQXJncyIsInNob3J0T3V0IiwiSE9UX0NPVU5UIiwiSE9UX1NQQU4iLCJuYXRpdmVOb3ciLCJEYXRlIiwibGFzdENhbGxlZCIsInN0YW1wIiwicGFpcnMiLCJyZUxlYWRpbmdEb3QiLCJyZVByb3BOYW1lIiwicmVFc2NhcGVDaGFyIiwibWF0Y2giLCJxdW90ZSIsImRlZmF1bHRWYWx1ZSIsImlzQXJyYXlMaWtlT2JqZWN0IiwiRlVOQ19FUlJPUl9URVhUIiwicmVzb2x2ZXIiLCJtZW1vaXplZCIsIkNhY2hlIiwidW5pb25CeSIsImFycmF5cyIsIkhpdGxpc3REYXRhc291cmNlIiwiX3NlYXJjaFZhbHVlcyIsInJlcXVlc3RSZXNwb25zZSIsIl9za2lwUGFnZSIsImlzUGFnaW5nIiwiaGl0bGlzdElEIiwicGFyYW1zIiwiUGFnZUlkIiwicGFnZUlEIiwicGFnZVN0YXRlSWQiLCJwYWdlU3RhdGVJRCIsIlByZXZpZXciLCJwcmV2aWV3IiwiYXR0cm5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicGFnaW5nVmFsdWVzIiwicGFnZU51bWJlciIsInBhZ2luZ0ZvcndhcmQiLCJwcm9taXNlUmVxdWVzdCIsInNlcnZpY2VVUkwiLCJzZXJpYWxpemVQYXJhbXMiLCJwYXJzZVJlc3BvbnNlIiwicGFyc2UiLCJfc3B2IiwicHYiLCJzdGFydElkIiwibGFzdFN0YXJ0SWQiLCJmaXJzdFN0YXJ0SWQiLCJzdGFydFZhbHVlIiwibGFzdFN0YXJ0VmFsdWUiLCJmaXJzdFN0YXJ0VmFsdWUiLCJIaXRsaXN0U2V0dXAiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwiX2NvbmZpZyIsImdldE9yaWdpbmFsQ29uZmlnIiwiX2VsZW1lbnRUeXBlIiwiSGl0TGlzdEVsZW1lbnRUeXBlIiwiX29wIiwiU2VhcmNoYWJsZUxpc3RPcGVyYXRvciIsImNhcHRpb25zIiwic2luZ2xlVmlld1RleHRzIiwiaGl0bGlzdERhdGEiLCJjb21wb25lbnRJZCIsInBhZ2VJZCIsImxhbmd1YWdlIiwic2VydmljZVVybCIsInF1ZXJ5U2VsZWN0b3IiLCJqc29uRGF0ZSIsIkxhbmciLCJjb25zdHIiLCJldmFsIiwic2NyaXB0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjZmciLCJzY3JpcHQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OytRQ3RDQTs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLQSxLQUFNQSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxVQUFELEVBQXVDO0FBQUEsT0FBM0JDLGlCQUEyQix1RUFBVCxJQUFTOztBQUNoRSxPQUFHLENBQUNELFVBQUosRUFBZTtBQUNiLFdBQU0sSUFBSUUsS0FBSixDQUFVLDBCQUFWLENBQU47QUFDRCxJQUZELE1BRU8sSUFBR0YsY0FBYyxPQUFPQSxV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Ozs7OztBQUxBOzs7O0FBT0F2NkIsUUFBT0ssUUFBUCxHQUFrQkwsT0FBT0ssUUFBUCxJQUFtQixFQUFyQztBQUNBLHlCQUFhQyxLQUFiLENBQW1CTixPQUFPSyxRQUExQixFQUFtQztBQUNqQ2s0QjtBQURpQyxFQUFuQyIsImZpbGUiOiJyLXJlYWN0LXZpZGVvLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVhMzNhYWQxZjM4YTRjNmNkOGJjIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTEuMDEuMjAxNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IG1haW5DU1MgZnJvbSAnLi9tYWluLmNzcyc7XHJcbmltcG9ydCBSZWFjdFZpZGVvIGZyb20gJy4vUmVhY3RWaWRlbyc7XHJcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSAnci1yZXBvcnRhbC1iYXNlJztcclxuXHJcbi8qKlxyXG4gKiBpbml0aWFsaXNlIEhpdExpc3Qgb24gRE9NQ29udGVudExvYWRlZCBmb3IgYSBxdWlja2VyIGNvbGQtc3RhcnQsIG5vIG5lZWQgdG8gd2FpdCBmb3IgdGhlIG9yaWdpbmFsIEhpdExpc3RcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZ05hbWUgLSBuYW1lIG9mIHRoZSB2YXJpYWJsZSBwYXNzZWQgdG8gRE9NIGFzIGEgY29uZmlnXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3RodW1ic1BsYWNlaG9sZGVyPXRydWVdIC0gZGlzcGxheSB0aHVtYnMgYXMgaW1hZ2UgcGxhY2Vob2xkZXJzIGluc3RlYWQgb2YgbWVkaWEgaWNvbnNcclxuICogKi9cclxuY29uc3QgbGF1bmNoVmlkZW9IaXRsaXN0ID0gKGNvbmZpZ05hbWUsdGh1bWJzUGxhY2Vob2xkZXI9dHJ1ZSkgPT4ge1xyXG4gIGlmKCFjb25maWdOYW1lKXtcclxuICAgIHRocm93IG5ldyBFcnJvcignY29uZmlnIGlzIG5vdCBzcGVjaWZpZWQhJylcclxuICB9IGVsc2UgaWYoY29uZmlnTmFtZSAmJiB0eXBlb2YgY29uZmlnTmFtZSAhPSAnc3RyaW5nJyl7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBjb25maWcgbmFtZSBtdXN0IGJlIGEgc3RyaW5nLCBub3QgYSAke3R5cGVvZiBjb25maWdOYW1lfWApXHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcclxuICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgPFJlYWN0VmlkZW9cclxuICAgICAgY29uZmlnPXtjb25maWdOYW1lfVxyXG4gICAgICB0aHVtYnNQbGFjZWhvbGRlcj17dGh1bWJzUGxhY2Vob2xkZXJ9XHJcbiAgICAgIHZlcmJvc2VcclxuICAgICAgLz4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcclxuICB9KTtcclxufTtcclxuXHJcbndpbmRvdy5SZXBvcnRhbCA9IHdpbmRvdy5SZXBvcnRhbCB8fCB7fTtcclxuUmVwb3J0YWxCYXNlLm1peGluKHdpbmRvdy5SZXBvcnRhbCx7XHJcbiAgbGF1bmNoVmlkZW9IaXRsaXN0XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjAnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dChyZXF1aXJlKFwicmVhY3RcIikpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXCJyZWFjdFwiXSx0KTtlbHNle3ZhciByPXQoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/cmVxdWlyZShcInJlYWN0XCIpOmUucmVhY3QpO2Zvcih2YXIgbyBpbiByKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW29dPXJbb119fSh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KG8pe2lmKHJbb10pcmV0dXJuIHJbb10uZXhwb3J0czt2YXIgbj1yW29dPXtleHBvcnRzOnt9LGlkOm8sbG9hZGVkOiExfTtyZXR1cm4gZVtvXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyx0KSxuLmxvYWRlZD0hMCxuLmV4cG9ydHN9dmFyIHI9e307cmV0dXJuIHQubT1lLHQuYz1yLHQucD1cIlwiLHQoMCl9KFtmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89cigxKTt0LmRlZmF1bHQ9by5NREljb24sZS5leHBvcnRzPXQuZGVmYXVsdH0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fWZ1bmN0aW9uIG4oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGkoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiB1KGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5NREljb249dm9pZCAwO3ZhciBjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbz10W3JdO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQscixvKXtyZXR1cm4gciYmZSh0LnByb3RvdHlwZSxyKSxvJiZlKHQsbyksdH19KCksZj1yKDIpLGw9byhmKSxhPXQuTURJY29uPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXtyZXR1cm4gbih0aGlzLHQpLGkodGhpcywodC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuYXBwbHkodGhpcyxhcmd1bWVudHMpKX1yZXR1cm4gdSh0LGUpLGModCxbe2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wcm9wcyx0PWUuZmlsbCxyPWUuc2l6ZSxvPWUuaWNvbixuPWUuY2hpbGRyZW47cmV0dXJuIGNvbnNvbGUubG9nKHQscixvLG4pLGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3htbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixmaWxsOnQsd2lkdGg6cixoZWlnaHQ6cix2aWV3Qm94OlwiMCAwIDI0IDI0XCIsY2hpbGRyZW46b3x8bn0pfX1dKSx0fShmLlB1cmVDb21wb25lbnQpO2EuZGVmYXVsdFByb3BzPXtzaXplOjI0LGZpbGw6XCJyZ2JhKDAsMCwwLC44NSlcIn19LGZ1bmN0aW9uKHQscil7dC5leHBvcnRzPWV9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1ESWNvbi5idW5kbGUuanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9NREljb24vZGlzdC9NREljb24uYnVuZGxlLmpzIiwiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dChyZXF1aXJlKFwicmVhY3RcIikpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXCJyZWFjdFwiXSx0KTtlbHNle3ZhciBvPXQoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/cmVxdWlyZShcInJlYWN0XCIpOmUucmVhY3QpO2Zvcih2YXIgciBpbiBvKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW3JdPW9bcl19fSh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKG9bcl0pcmV0dXJuIG9bcl0uZXhwb3J0czt2YXIgbj1vW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gZVtyXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyx0KSxuLmxvYWRlZD0hMCxuLmV4cG9ydHN9dmFyIG89e307cmV0dXJuIHQubT1lLHQuYz1vLHQucD1cIlwiLHQoMCl9KFtmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gaShlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fWZ1bmN0aW9uIGEoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbz1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG8pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8scikmJihlW3JdPW9bcl0pfXJldHVybiBlfSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKXt2YXIgcj10W29dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsbyxyKXtyZXR1cm4gbyYmZSh0LnByb3RvdHlwZSxvKSxyJiZlKHQsciksdH19KCkscD1vKDEpLHU9cihwKSxjPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSl7bih0aGlzLHQpO3ZhciBvPWkodGhpcywodC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLGUpKTtyZXR1cm4gby5faW1hZ2VPbmxvYWQ9by5faW1hZ2VPbmxvYWQuYmluZChvKSxvLl9pbWFnZU9uZXJyb3I9by5faW1hZ2VPbmVycm9yLmJpbmQobyksby5zdGF0ZT17c3JjOnZvaWQgMCxwbGFjZWhvbGRlckhpZGRlbjohby5wcm9wcy5wbGFjZWhvbGRlcixzaXppbmc6by5wcm9wcy5zaXppbmc/by5wcm9wcy5zaXppbmc6bnVsbCxwb3NpdGlvbjpvLnByb3BzLnBvc2l0aW9uP28ucHJvcHMucG9zaXRpb246XCJjZW50ZXJcIixwcm9wb3J0aW9uOjAsbG9hZGVkOiExLGxvYWRpbmc6ITEsZXJyb3I6ITF9LG99cmV0dXJuIGEodCxlKSxsKHQsW3trZXk6XCJjb21wb25lbnREaWRNb3VudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5fbG9hZCgpLHRoaXMuX2NvbXB1dGVEaW1lbnNpb25zKCksdGhpcy5fY29tcHV0ZVByb3BvcnRpb24odGhpcy5wcm9wcy5hc3BlY3QpfX0se2tleTpcIl9jb21wdXRlRGltZW5zaW9uc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wcm9wcyx0PWUud2lkdGgsbz1lLmhlaWdodDt0aGlzLnNldFN0YXRlKHt3aWR0aDppc05hTih0KT90OnQrXCJweFwiLGhlaWdodDppc05hTihvKT9vOm8rXCJweFwifSl9fSx7a2V5OlwiX2NvbXB1dGVQcm9wb3J0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZSYmZS5pbmRleE9mKFwiOlwiKT4tMSl7dmFyIHQ9ZS5zcGxpdChcIjpcIikubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBwYXJzZUZsb2F0KGUpfSk7aXNOYU4odFswXSl8fGlzTmFOKHRbMV0pfHx0aGlzLnNldFN0YXRlKGZ1bmN0aW9uKGUpe2lmKCFpc05hTihwYXJzZUZsb2F0KGUud2lkdGgpKSlyZXR1cm57cHJvcG9ydGlvbjoocGFyc2VGbG9hdChlLndpZHRoKSoodFsxXS90WzBdKSkudG9TdHJpbmcoKStlLndpZHRoLnN1YnN0cmluZyhwYXJzZUZsb2F0KGUud2lkdGgpLnRvU3RyaW5nKCkubGVuZ3RoKSxoZWlnaHQ6XCJhdXRvXCJ9fSl9fX0se2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zdGF0ZSx0PWUud2lkdGgsbz1lLmhlaWdodCxyPWUucHJvcG9ydGlvbixuPWUuc3JjLGk9ZS5zaXppbmcsYT1lLnBvc2l0aW9uLHM9ZS5sb2FkaW5nLGw9ZS5sb2FkZWQscD1lLnBsYWNlaG9sZGVySGlkZGVuLGM9dGhpcy5wcm9wcyxkPWMucHJlbG9hZCxmPWMuZmFkZSxoPWMucGxhY2Vob2xkZXJTaXppbmcsZz1jLnBsYWNlaG9sZGVyLG09Yy5hbHQ7cmV0dXJuIHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIlByb3BvcnRpb25hbEltYWdlXCIsc3R5bGU6e3dpZHRoOnQsaGVpZ2h0Om8scGFkZGluZ1RvcDpyfX0sdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwic2l6ZWRJbWdEaXZcIixyb2xlOlwiaW1nXCIsc3R5bGU6e2JhY2tncm91bmRJbWFnZTpuP1widXJsKFwiK24rXCIpXCI6dm9pZCAwLGJhY2tncm91bmRTaXplOmksYmFja2dyb3VuZFBvc2l0aW9uOmEsYmFja2dyb3VuZFJlcGVhdDppP1wibm8tcmVwZWF0XCI6XCJpbml0aWFsXCIsZGlzcGxheTppP1wiYmxvY2tcIjpcIm5vbmVcIn19KSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzcmM6bixhbHQ6bSxvbkxvYWQ6dGhpcy5faW1hZ2VPbmxvYWQsb25FcnJvcjp0aGlzLl9pbWFnZU9uZXJyb3Isc3R5bGU6e2Rpc3BsYXk6aT9cIm5vbmVcIjpcImJsb2NrXCJ9fSksdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6e2JhY2tncm91bmRJbWFnZTpnP1widXJsKFwiK2crXCIpXCI6dm9pZCAwLGJhY2tncm91bmRTaXplOmg/aDppLGJhY2tncm91bmRQb3NpdGlvbjphLGJhY2tncm91bmRSZXBlYXQ6aT9cIm5vLXJlcGVhdFwiOlwiaW5pdGlhbFwifSxjbGFzc05hbWU6XCJpbWFnZVBsYWNlaG9sZGVyIFwiKyhwJiZcImhpZGRlblwiKStcIiBcIisoZCYmZiYmIXMmJmwmJlwiZmFkZWQtb3V0XCIpfSkpfX0se2tleTpcIl9pbWFnZU9ubG9hZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXRTdGF0ZSh7bG9hZGluZzohMSxsb2FkZWQ6ITAsZXJyb3I6ITF9KX19LHtrZXk6XCJfaW1hZ2VPbmVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNldFN0YXRlKHMoe30sdGhpcy5fcmVzZXQoKSx7ZXJyb3I6ITB9KSl9fSx7a2V5OlwiX3Jlc2V0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm57c3JjOnZvaWQgMCxsb2FkaW5nOiExLGxvYWRlZDohMSxlcnJvcjohMX19fSx7a2V5OlwiX2xvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuX3Jlc2V0KCk7aWYoIXRoaXMucHJvcHMucHJldmVudExvYWQpe3ZhciB0PXRoaXMucHJvcHMuc3JjO2Uuc3JjIT09dCYmKGU9cyh7fSxlLHtzcmM6dD90OnZvaWQgMCxsb2FkaW5nOiEhdH0pKX10aGlzLnNldFN0YXRlKGUpfX1dKSx0fSh1LmRlZmF1bHQuQ29tcG9uZW50KTt0LmRlZmF1bHQ9Y30sZnVuY3Rpb24odCxvKXt0LmV4cG9ydHM9ZX1dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHJvcG9ydGlvbmFsSW1hZ2UuYnVuZGxlLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vUHJvcG9ydGlvbmFsSW1hZ2UvZGlzdC9Qcm9wb3J0aW9uYWxJbWFnZS5idW5kbGUuanMiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2VzNi9wcm9taXNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmIChPYnNlcnZlcikge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwidmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gTElCUkFSWSA/IGZ1bmN0aW9uIChhLCBiKSB7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufSA6IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgaWYgKHByb21pc2UuX2ggPT0gMSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2M7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlYWN0aW9uO1xuICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkge1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZiAocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpIHJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZiAoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSkgcmV0dXJuIHg7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsImltcG9ydCBQcm9taXNlIGZyb20gJ2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZSc7XG5cbmNsYXNzIFJlcG9ydGFsQmFzZSB7XG5cbiAgLyoqXG4gICAqIENvcGllcyBwcm9wcyBmcm9tIGEgc291cmNlIG9iamVjdCB0byBhIHRhcmdldCBvYmplY3QuXG4gICAqXG4gICAqIE5vdGUsIHRoaXMgbWV0aG9kIHVzZXMgYSBzaW1wbGUgYGZvci4uLmluYCBzdHJhdGVneSBmb3IgZW51bWVyYXRpbmdcbiAgICogcHJvcGVydGllcy4gIFRvIGVuc3VyZSBvbmx5IGBvd25Qcm9wZXJ0aWVzYCBhcmUgY29waWVkIGZyb20gc291cmNlXG4gICAqIHRvIHRhcmdldCBhbmQgdGhhdCBhY2Nlc3NvciBpbXBsZW1lbnRhdGlvbnMgYXJlIGNvcGllZCwgdXNlIGBleHRlbmRgLlxuICAgKlxuICAgKiBAbWV0aG9kIG1peGluXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgVGFyZ2V0IG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgU291cmNlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCBhcyBmaXJzdCBhcmd1bWVudC5cbiAgICovXG4gIHN0YXRpYyBtaXhpbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAodmFyIGkgaW4gc291cmNlKSB7XG4gICAgICB0YXJnZXRbaV0gPSBzb3VyY2VbaV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBzdGF0aWMgX2xvZ2dlcihsZXZlbCwgYXJncykge1xuICAgIC8vIGFjY2VwdCBbJ2ZvbycsICdiYXInXSBhbmQgW1snZm9vJywgJ2JhciddXVxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBhcmdzID0gYXJnc1swXTtcbiAgICB9XG4gICAgLy8gb25seSBhY2NlcHQgbG9nZ2luZyBmdW5jdGlvbnNcbiAgICBzd2l0Y2gobGV2ZWwpIHtcbiAgICAgIGNhc2UgJ2xvZyc6XG4gICAgICBjYXNlICd3YXJuJzpcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgY29uc29sZVtsZXZlbF0uYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBfbG9nKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ2xvZycsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIF93YXJuKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ3dhcm4nLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBfZXJyb3IoKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHRoaXMuX2xvZ2dlcignZXJyb3InLCBhcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmFtZWQgZXZlbnQgd2l0aCBgbmFtZWBcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJuIHtFdmVudH0gUmV0dXJucyBhIGNyZWF0ZWQgZXZlbnRcbiAgICogKi9cbiAgc3RhdGljIG5ld0V2ZW50KG5hbWUpe1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW5zcGVjdHMgaWYgdGhlIGN1cnJlbnQgc3RyaW5nIG1pZ2h0IGJlIGNvbnZlcnRlZCB0byBudW1iZXIgYW5kIHJlbmRlcnMgaXQgYXMgbnVtYmVyLiBJZiBzdHJpbmcgbGVuZ3RoIGlzIDAsIHJldHVybnMgYG51bGxgLiBJZiBub25lIGFwcGxpZXMgcmV0dXJucyB0aGUgc3RyaW5nIGFzIGlzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gdmFsdWUgb2YgdGhlIGNlbGwgaWYgbm90IEhUTUwgY29udGVudHNcbiAgICogQHJldHVybiB7TnVtYmVyfG51bGx8U3RyaW5nfVxuICAgKiAqL1xuICBzdGF0aWMgaXNOdW1iZXIoc3RyKXtcbiAgICBpZighaXNOYU4ocGFyc2VGbG9hdChzdHIpKSl7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvLC9pLCcnKTsvLyByZW1vdmUgdW5uZWNlc3NhcnkgY29tbWEgYXMgYSBkZWxpbWl0ZXIgZm9yIHRob3VzYW5kcyBmcm9tIGRhdGEuXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChzdHIpO1xuICAgIH0gZWxzZSBpZihzdHIubGVuZ3RoPT0wKXtyZXR1cm4gbnVsbH0gZWxzZSB7cmV0dXJuIHN0cn1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gWEhSIHdyYXBwZWQgaW4gYSBQcm9taXNlXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gVVJMIC0gdXJsIHRvIHNlbmQgYSBgR0VUYCByZXF1ZXN0IHRvXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJldHVybnMgYSB0aGVuLWFibGUgcHJvbWlzZSB3aXRoIGBYTUxIdHRwUmVxdWVzdC5yZXNwb25zZVRleHRgXG4gICAqICovXG4gIHN0YXRpYyBwcm9taXNlUmVxdWVzdChVUkwpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB4aHIub3BlbignR0VUJywgVVJMLCB0cnVlKTtcbiAgICAgIHhoci5vbmxvYWQgPSAoKT0+e3hoci5zdGF0dXMgPT0gMjAwP3Jlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk6cmVqZWN0KEVycm9yKGAke3hoci5zdGF0dXN9OiAke3hoci5zdGF0dXNUZXh0fWApKTt9XG4gICAgICB4aHIub25lcnJvciA9ICgpPT57cmVqZWN0KEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7fVxuICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgdmFyaWFibGUgbGlzdGVkIGluIHF1ZXJ5IHN0cmluZ1xuICAgKiBAcGFyYW0geyFTdHJpbmd9IHZhcmlhYmxlIC0gdmFyaWFibGUgbmFtZSB0byBnZXQgdmFsdWUgZm9yXG4gICAqIEBwYXJhbSB7U3RyaW5nPX0gW3F1ZXJ5PXdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpXSAtIHRoZSBxdWVyeSBzdHJpbmcgdG8gc2VhcmNoIHZhcmlhYmxlIGZvciBpblxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFJldHVybnMgdmFsdWUgZm9yIHRoZSB2YXJpYWJsZVxuICAgKiAqL1xuICBzdGF0aWMgZ2V0UXVlcnlWYXJpYWJsZSh2YXJpYWJsZSxxdWVyeT13aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSl7XG4gICAgdmFyIHZhcnMgPSBxdWVyeS5zcGxpdChcIiZcIik7XG4gICAgZm9yICh2YXIgaT0wO2k8dmFycy5sZW5ndGg7aSsrKSB7XG4gICAgICB2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgaWYoKHBhaXJbMF0pLnRvTG93ZXJDYXNlKCkgPT0gdmFyaWFibGUudG9Mb3dlckNhc2UoKSl7cmV0dXJuIHBhaXJbMV07fVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIHR1cm5zIGB3aW5kb3cubG9jYXRpb25gIG9iamVjdCBpbnRvIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhcyBuYW1lZCBrZXlzIG5lY2Vzc2FyeSB0byByZWNvbnN0cnVjdCB0aGUgVVJMXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gW2xvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uXSAtIGEgd2luZG93LmxvY2F0aW9uIG9iamVjdCwgYnkgZGVmYXVsdCBvZiB0aGUgaG9zdCB3aW5kb3cgd2hlcmUgdGhlIHNjcmlwdCBpcyBleGVjdXRlZFxuICAgKiBAcmV0dXJucyB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBhIGBsb2NhdGlvbmAgb2JqZWN0XG4gICAqICovXG4gIHN0YXRpYyBsb2NhdGlvbkRlc2VyaWFsaXplKGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uKXtcbiAgICBsZXQgbyA9IHtcbiAgICAgIHBhdGg6IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgcXVlcnk6e31cbiAgICB9O1xuICAgIGxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkuc3BsaXQoLyYvKS5mb3JFYWNoKHBhaXI9PntcbiAgICAgIGxldCBhUGFpcj0gcGFpci5zcGxpdCgvPS8pO1xuICAgICAgby5xdWVyeVthUGFpclswXS50b0xvd2VyQ2FzZSgpXSA9IGFQYWlyWzFdXG4gICAgfSk7XG4gICAgcmV0dXJuIG9cbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJucyBhIGBsb2NhdGlvbmAgb2JqZWN0IChyZXN1bHQgb2YgYGxvY2F0aW9uRGVzZXJpYWxpemVgKSBpbnRvIGEgVVJMXG4gICAqIEBwYXJhbSB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBsb2NhdGlvbiAtIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhbmQgYSB1cmxcbiAgICogQHJldHVybnMge1N0cmluZ30gLSBhIFVSTCBzdHJpbmdcbiAgICogKi9cbiAgc3RhdGljIGxvY2F0aW9uU2VyaWFsaXplKGxvY2F0aW9uKXtcbiAgICBsZXQgcXVlcnk9W107XG4gICAgZm9yKGxldCBrZXkgaW4gbG9jYXRpb24ucXVlcnkpe1xuICAgICAgcXVlcnkucHVzaChba2V5LGxvY2F0aW9uLnF1ZXJ5W2tleV1dLmpvaW4oJz0nKSk7XG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRoICsgJz8nICsgcXVlcnkuam9pbignJicpO1xuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydGFsQmFzZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLXJlcG9ydGFsLWJhc2Uvc3JjL3JlcG9ydGFsLWJhc2UuanMiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIFB1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltZyBmcm9tICdQcm9wb3J0aW9uYWxJbWFnZSc7XHJcblxyXG5jb25zdCBNRURJQV9UWVBFUyA9IFsnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nXTtcclxuXHJcbmNsYXNzIEltYWdlR3JpZFRpbGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50e1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB0aWxlIGZvciBpbWFnZSBsaXN0XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmltYWdlIC0gaW1hZ2UgdXJsXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyIC0gYSBwbGFjZWhvbGRlciBpbWFnZVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlclNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIuIEJ5IGRlZmF1bHQgaXQncyB0aGUgc2FtZSBhcyBmb3IgdGhlIGBzcmNgIGltYWdlLCBidXQgc2V0IHRvIGBpbml0aWFsYCBvciBvdGhlciB2YWxpZCBgYmFja2dyb3VuZC1zaXplYCB2YWx1ZSB0byBvdmVycmlkZS5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMubWVkaWF0eXBlIC0gYSBkZWZhdWx0IG1lZGlhIGljb24gaW5zdGVhZCBvZiB0aGUgcGxhY2Vob2xkZXIgaW1hZ2U6IG9uZSBvZiBgaW1hZ2VgLGBhdWRpb2AsYHZpZGVvYFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuaWNvbkNvbG9yPVwiI2NjY2NjY1wiXSAtIGRlZmF1bHQgcGxhY2Vob2xkZXIgbWVkaWEgaWNvbiBjb2xvclxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuaWNvblNpemU9NDhdIC0gZGVmYXVsdCBwbGFjZWhvbGRlciBtZWRpYSBpY29uIHNpemVcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmFzcGVjdD1cIjE2OjlcIl0gLSBhc3BlY3QgcmF0aW8gb2YgdGhlIGltYWdlIHRvIGJlIGluIHRoZSB0aWxlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMudGl0bGUgLSB0aXRsZSBvZiB0aGUgdmlkZW9cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuZGVzY3JpcHRpb24gLSBkZXNjcmlwdGlvbiBvZiB0aGUgdmlkZW9cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByb3BzLmFjdGlvbkljb24gLSBpY29uIHRvIGRpc3BsYXkgYXMgdGhlIGFjdGlvbiBpY29uLiBJdCBhbHNvIGhhcyB0byBoYXZlIGEgY2FsbGJhY2sgYXR0YWNoZWQgdG8gaXQgd2hlbiBwYXNzZWQuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMub25TZWxlY3QgLSBjYWxsYmFjayB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSBsaW5rIGlzIGNsaWNrZWRcclxuICAgKiAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgYWN0aW9uQnV0dG9uID0gbnVsbDtcclxuICAgIGNvbnN0IHthY3Rpb25JY29uLG9uU2VsZWN0LGFzcGVjdCx0aXRsZSxwbGFjZWhvbGRlclNpemluZyxpbWFnZSxkZXNjcmlwdGlvbn09dGhpcy5wcm9wcztcclxuICAgIGlmICh0aGlzLnByb3BzLmFjdGlvbkljb24pIHtcclxuICAgICAgYWN0aW9uQnV0dG9uID0gPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1lZGl0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1hY3Rpb24taWNvblwiPnthY3Rpb25JY29ufTwvZGl2PlxyXG4gICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWNvdmVyXCIgb25DbGljaz17b25TZWxlY3R9PlxyXG4gICAgICAgICAgPEltZ1xyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cclxuICAgICAgICAgICAgc2l6aW5nPVwiY292ZXJcIlxyXG4gICAgICAgICAgICBwcmVsb2FkPXt0cnVlfVxyXG4gICAgICAgICAgICBmYWRlPXt0cnVlfVxyXG4gICAgICAgICAgICBhbHQ9e3RpdGxlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5fY29tcHV0ZVRpbGVUeXBlKCl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyU2l6aW5nPXtwbGFjZWhvbGRlclNpemluZ31cclxuICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLW1ldGFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS10aXRsZSBlbGxpcHNpc1wiIG9uQ2xpY2s9e29uU2VsZWN0fT57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tZGVzY3JpcHRpb24gZWxsaXBzaXNcIj57ZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHthY3Rpb25CdXR0b259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgX2NvbXB1dGVUaWxlVHlwZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHtwbGFjZWhvbGRlcixtZWRpYXR5cGUsaWNvblNpemUsaWNvbkNvbG9yfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGlmICghcGxhY2Vob2xkZXIgJiYgbWVkaWF0eXBlKSB7XHJcbiAgICAgICAgaWYgKE1FRElBX1RZUEVTLmluZGV4T2YobWVkaWF0eXBlKSA9PT0gLTEpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIHR5cGUgXCIke21lZGlhdHlwZX1cIiBpcyBzcGVjaWZpZWRgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaWNvbiA9IEltYWdlR3JpZFRpbGUuaWNvblNlcnZlcihtZWRpYXR5cGUsIGljb25TaXplLCBpY29uQ29sb3IpO1xyXG4gICAgICAgIHJldHVybiAnZGF0YTppbWFnZS9zdmcreG1sLCcgKyBlc2NhcGUoaWNvbik7XHJcbiAgICAgIH0gZWxzZSBpZighIXBsYWNlaG9sZGVyKXtcclxuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZXNjYXBlKEltYWdlR3JpZFRpbGUuaWNvblNlcnZlcigndW5rbm93bicsIGljb25TaXplLCBpY29uQ29sb3IpKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIGljb24gd2l0aCBhIGNvcnJlY3QgZmlsbCBjb2xvclxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gaWNvbiBuYW1lIChvbmUgb2YgYGltYWdlYCwgYHZpZGVvYCwgYGF1ZGlvYClcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3NpemU9MjRdIC0gaWNvbiBzaXplIGluIHBpeGVsc1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZmlsbD1cIiNjY2NjY2NcIl0gLSB2YWxpZCBDU1MgY29sb3IgZGVjbGFyYXRpb25cclxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gICAqICovXHJcbiAgc3RhdGljIGljb25TZXJ2ZXIobmFtZSwgc2l6ZSA9IDQ4LCBmaWxsID0gXCIjY2NjY2NjXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGljb25zID0ge1xyXG4gICAgICAgIGltYWdlOiBgPHBhdGggZD1cIk0yMSAxOVY1YzAtMS4xLS45LTItMi0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ6TTguNSAxMy41bDIuNSAzLjAxTDE0LjUgMTJsNC41IDZINWwzLjUtNC41elwiLz5gLFxyXG4gICAgICAgIGF1ZGlvOiBgPHBhdGggZD1cIk0xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnpcIi8+YCxcclxuICAgICAgICB2aWRlbzogYDxwYXRoIGQ9XCJNMTggNGwyIDRoLTNsLTItNGgtMmwyIDRoLTNsLTItNEg4bDIgNEg3TDUgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY0aC00elwiLz5gLFxyXG4gICAgICAgIHVua25vd246IGA8cGF0aCBkPVwiTTIxIDV2Ni41OWwtMy0zLjAxLTQgNC4wMS00LTQtNCA0LTMtMy4wMVY1YzAtMS4xLjktMiAyLTJoMTRjMS4xIDAgMiAuOSAyIDJ6bS0zIDYuNDJsMyAzLjAxVjE5YzAgMS4xLS45IDItMiAySDVjLTEuMSAwLTItLjktMi0ydi02LjU4bDMgMi45OSA0LTQgNCA0IDQtMy45OXpcIi8+YCxcclxuICAgICAgfTtcclxuICAgICAgaWYgKCFpY29uc1tuYW1lXSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaWNvbiBcIiR7bmFtZX1cIiBpcyBub3Qgb24gdGhlIGxpc3RgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYDxzdmcgZmlsbD1cIiR7ZmlsbH1cIiBoZWlnaHQ9XCIke3NpemV9XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiJHtzaXplfVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4ke2ljb25zW25hbWVdfTwvc3ZnPmBcclxuICAgIH0gY2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuSW1hZ2VHcmlkVGlsZS5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2UgICAgICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhY2Vob2xkZXIgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhY2Vob2xkZXJTaXppbmc6IFByb3BUeXBlcy5vbmVPZihbJ2NvbnRhaW4nLCAnY292ZXInLCAnaW5pdGlhbCddKSxcclxuICBtZWRpYXR5cGUgICAgICAgIDogUHJvcFR5cGVzLm9uZU9mKE1FRElBX1RZUEVTKSxcclxuICBpY29uQ29sb3IgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpY29uU2l6ZSAgICAgICAgIDogUHJvcFR5cGVzLm51bWJlcixcclxuICBhc3BlY3QgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0aXRsZSAgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZXNjcmlwdGlvbiAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhY3Rpb25JY29uICAgICAgIDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25TZWxlY3QgICAgICAgICA6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcblxyXG5JbWFnZUdyaWRUaWxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpY29uQ29sb3I6IFwiI2NjY2NjY1wiLFxyXG4gIGljb25TaXplIDogNDgsXHJcbiAgYXNwZWN0ICAgOiBcIjE2OjlcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JpZFRpbGVcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlR3JpZFRpbGUvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIFB1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlR3JpZFRpbGUgZnJvbSAnLi4vSW1hZ2VHcmlkVGlsZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIGBJbWFnZUdyaWRgIGlzIGEgc3RhdGVsZXNzIFJlYWN0IGNvbXBvbmVudCB0aGF0IGFsbG93cyB0byBjb21wdXRlIGFuIGFycmF5IG9mIEltYWdlR3JpZFRpbGVzIGZyb20gYGl0ZW1zYCBwYXNzZWQgaW4gcHJvcHNcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzLml0ZW1zIC0gYW4gYXJyYXkgb2YgaXRlbXMgYHtpZDpOdW1iZXJ8U3RyaW5nLCBpbWFnZTpTdHJpbmcsIG1lZGlhdHlwZTo/U3RyaW5nLCBwbGFjZWhvbGRlcjo/U3RyaW5nLCB0aXRsZTpTdHJpbmcsZGVzY3JpcHRpb246U3RyaW5nfWBcclxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmFzcGVjdCAtIGFzcGVjdCByYXRpbyBmb3IgdGhlIEltYWdlR3JpZFRpbGUgaW1hZ2VcclxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IHByb3BzLmFjdGlvbkljb24gLSBhY3Rpb24gaWNvbiBKU1ggd2l0aCBhIGJvdW5kIGhhbmRsZXJcclxuICogQHBhcmFtIHs/U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlclNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIuIEJ5IGRlZmF1bHQgaXQncyB0aGUgc2FtZSBhcyBmb3IgdGhlIGBzcmNgIGltYWdlLCBidXQgc2V0IHRvIGBpbml0aWFsYCBvciBvdGhlciB2YWxpZCBgYmFja2dyb3VuZC1zaXplYCB2YWx1ZSB0byBvdmVycmlkZS5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMub25TZWxlY3QgLSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkIG9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBwcm9wcy5kdW1teUl0ZW1zIC0gZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZCBvblxyXG4gKiAqL1xyXG5jbGFzcyBJbWFnZUdyaWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuXHJcbiAgaXRlbUNsaWNrSGFuZGxlciA9IChpdGVtKSA9PiAoZXZlbnQpID0+IHRoaXMucHJvcHMub25TZWxlY3QoaXRlbSk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtpdGVtcywgZHVtbXlJdGVtcywgYXNwZWN0LCBwbGFjZWhvbGRlclNpemluZywgYWN0aW9uSWNvbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRcIj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgPEltYWdlR3JpZFRpbGVcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cclxuICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICBtZWRpYXR5cGU9e2l0ZW0ubWVkaWF0eXBlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpdGVtLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyU2l6aW5nPXtpdGVtLmltYWdlP3BsYWNlaG9sZGVyU2l6aW5nOidpbml0aWFsJ31cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBhY3Rpb25JY29uPXt0eXBlb2YgYWN0aW9uSWNvbj09PSdmdW5jdGlvbic/YWN0aW9uSWNvbihpdGVtKTpudWxsfVxyXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLml0ZW1DbGlja0hhbmRsZXIoaXRlbSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICB7ZHVtbXlJdGVtcyAmJiB0aGlzLnJlbmRlckR1bW15SXRlbXMoZHVtbXlJdGVtcyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlckR1bW15SXRlbXMoY291bnQpIHtcclxuICAgIGNvbnN0IGR1bW15SXRlbXMgPSBbXTtcclxuICAgIHdoaWxlIChjb3VudC0tKSB7XHJcbiAgICAgIGR1bW15SXRlbXMucHVzaCg8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGVcIiBrZXk9e2BkdW1teSR7Y291bnR9YH0vPilcclxuICAgIH1cclxuICAgIHJldHVybiBkdW1teUl0ZW1zXHJcbiAgfVxyXG59XHJcblxyXG5JbWFnZUdyaWQucHJvcFR5cGVzID0ge1xyXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgYXNwZWN0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGFjdGlvbkljb246IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gIHBsYWNlaG9sZGVyU2l6aW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGR1bW15SXRlbXM6IFByb3BUeXBlcy5udW1iZXJcclxufTtcclxuXHJcbkltYWdlR3JpZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZHVtbXlJdGVtczogMTJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JpZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlR3JpZC9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZylcclxuICAgICAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBjb25maWcucGFnaW5hdGlvbjtcclxuICAgICAgICAgICAgaWYgKHBhZ2luYXRpb24gPT09ICdjb250aW51b3VzJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGludW91c05hdmlnYXRpb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2luZ05hdmlnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRpbnVvdXNOYXZpZ2F0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbG9hZE1vcmUsIGRpc2FibGVOZXh0QnV0dG9uIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uUm93XCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gZmxhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9hZE1vcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVOZXh0QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPkxvYWQgbW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHBhZ2luZ05hdmlnYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBsb2FkUHJldmlvdXNQYWdlLFxyXG4gICAgICAgICAgICBsb2FkTmV4dFBhZ2UsXHJcbiAgICAgICAgICAgIGRpc2FibGVOZXh0QnV0dG9uLFxyXG4gICAgICAgICAgICBkaXNhYmxlUHJldkJ1dHRvbixcclxuICAgICAgICAgICAgcGFnZUluZm8sXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBhY2NlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvYWRQcmV2aW91c1BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVQcmV2QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ1JFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTJyl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsQnV0dG9uIGFjY2VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9hZE5leHRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlTmV4dEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdSRVBPUlRfU0lOR0xFVklFV19ORVhUJyl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57cGFnZUluZm99PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VmlkZW8vTmF2aWdhdGlvbi5qcyIsIi8vQGZsb3dcclxuaW1wb3J0IHR5cGUge1N0YXRlLCBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZUdyaWQgZnJvbSBcIi4uL0ltYWdlR3JpZFwiO1xyXG5pbXBvcnQgU2luZ2xlVmlldyBmcm9tIFwiLi4vU2luZ2xlVmlld1wiO1xyXG5pbXBvcnQgRFNBYnN0cmFjdGlvbiBmcm9tICcuLi9EU0Fic3RyYWN0aW9uJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nXHJcbmltcG9ydCBTaW5nbGVWaWV3UmVzcG9uc2VzIGZyb20gJy4uL1NpbmdsZVZpZXcvUmVzcG9uc2VzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFZpZGVvIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIERTID0gRFNBYnN0cmFjdGlvbih7XHJcbiAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLFxyXG4gICAgdGh1bWJzUGxhY2Vob2xkZXI6IHRoaXMucHJvcHMudGh1bWJzUGxhY2Vob2xkZXIsXHJcbiAgICBjb21wb25lbnQ6IHRoaXNcclxuICB9KTtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpdGVtczogbnVsbCxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICAgIGNvbmZpZzogbnVsbCxcclxuICAgIHNpbmdsZVZpZXdNb2RlOiAndmlldycsXHJcbiAgICBzaW5nbGVWaWV3OiB7XHJcbiAgICAgIGxpbms6ICcnXHJcbiAgICB9LFxyXG4gICAgc2luZ2xlVmlld1Zpc2libGU6IGZhbHNlLFxyXG4gICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2OiBmYWxzZSxcclxuICAgIHNpbmdsZVZpZXdEaXNhYmxlTmV4dDogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgdHJhbnNsYXRlID0gdGhpcy5EUy5pMThuLmJpbmQodGhpcy5EUyk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXRlbXMsIHNpbmdsZVZpZXdWaXNpYmxlLCBlcnJvciwgY29uZmlnIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IHJlbmRlciA9IG51bGw7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLkRTKTtcclxuICAgIGlmICghZXJyb3IgJiYgQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHJlbmRlciA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YEdyaWRDb250YWluZXIgJHshc2luZ2xlVmlld1Zpc2libGUgPyAnR3JpZFZpZXcnIDogJyd9YH0+XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJTaW5nbGVWaWV3KCl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZENvbnRhaW5lclwiIHN0eWxlPXt7IGRpc3BsYXk6ICFzaW5nbGVWaWV3VmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIDxJbWFnZUdyaWRcclxuICAgICAgICAgICAgICBhc3BlY3Q9XCIxNjo5XCJcclxuICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdH1cclxuICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XHJcbiAgICAgICAgICAgICAgYWN0aW9uSWNvbj17Y29uZmlnLmNhbkVkaXQgPyB0aGlzLmFjdGlvbkljb24gOiBudWxsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJOYXZpZ2F0aW9uKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuRFMpIHtcclxuICAgICAgICByZW5kZXIgPSAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdyaWRDb250YWluZXIgSW1hZ2VHcmlkXCI+e3RoaXMuZGF0YUxvYWRpbmdNZXNzYWdlKCl9PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSGl0bGlzdERhdGFzb3VyY2UgaXMgbm90IGF2YWlsYWJsZScpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZW5kZXJcclxuICB9XHJcblxyXG4gIHJlbmRlck5hdmlnYXRpb24oKSB7XHJcbiAgICBjb25zdCB7IGxvYWRQcmV2aW91c1BhZ2UsIGxvYWROZXh0UGFnZSwgbG9hZE1vcmUsIGRpc2FibGVOZXh0QnV0dG9uLCBkaXNhYmxlUHJldkJ1dHRvbiwgZ2V0UGFnZUluZm8gfSA9IHRoaXMuRFM7XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uUHJvcHMgPSB7XHJcbiAgICAgIGxvYWRQcmV2aW91c1BhZ2UsXHJcbiAgICAgIGxvYWROZXh0UGFnZSxcclxuICAgICAgbG9hZE1vcmUsXHJcbiAgICAgIGRpc2FibGVOZXh0QnV0dG9uLFxyXG4gICAgICBkaXNhYmxlUHJldkJ1dHRvbixcclxuICAgICAgcGFnZUluZm86IGdldFBhZ2VJbmZvKCksXHJcbiAgICAgIGNvbmZpZzogdGhpcy5zdGF0ZS5jb25maWcsXHJcbiAgICAgIHRyYW5zbGF0ZTogdGhpcy50cmFuc2xhdGVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPE5hdmlnYXRpb24gey4uLm5hdmlnYXRpb25Qcm9wc30gLz5cclxuICB9XHJcblxyXG4gIHJlbmRlclNpbmdsZVZpZXcoKSB7XHJcbiAgICBjb25zdCB7IHNpbmdsZVZpZXdWaXNpYmxlLCBzaW5nbGVWaWV3LCBzaW5nbGVWaWV3RGlzYWJsZVByZXYsIHNpbmdsZVZpZXdEaXNhYmxlTmV4dCwgc2luZ2xlVmlld01vZGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gc2luZ2xlVmlld1Zpc2libGUgPyAoXHJcbiAgICAgIDxTaW5nbGVWaWV3XHJcbiAgICAgICAgcmV0dXJuVG9HcmlkQWN0aW9uPXt0aGlzLnJldHVyblRvR3JpZH1cclxuICAgICAgICBsb2FkUHJldmlvdXNJdGVtPXt0aGlzLmxvYWRQcmV2aW91c0l0ZW19XHJcbiAgICAgICAgbG9hZE5leHRJdGVtPXt0aGlzLmxvYWROZXh0SXRlbX1cclxuICAgICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXY9e3NpbmdsZVZpZXdEaXNhYmxlUHJldn1cclxuICAgICAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHQ9e3NpbmdsZVZpZXdEaXNhYmxlTmV4dH1cclxuICAgICAgPlxyXG4gICAgICAgIHtzaW5nbGVWaWV3TW9kZSA9PT0gJ2VkaXQnID9cclxuICAgICAgICAgICg8aWZyYW1lIGNsYXNzTmFtZT1cInJlbmRlckFyZWFcIiBzcmM9e3NpbmdsZVZpZXcubGlua30gLz4pXHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICAoPFNpbmdsZVZpZXdSZXNwb25zZXMgZGF0YT17c2luZ2xlVmlld30gY29sdW1ucz17dGhpcy5pbmRpdmlkdWFsUmVjb3Jkc1F1ZXN0aW9uSWRzfSBjb2x1bW5zTWFwPXt0aGlzLmluZGl2aWR1YWxSZWNvcmRzS2V5TGFiZWxzfSAvPilcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2luZ2xlVmlldz5cclxuICAgICkgOiBudWxsXHJcbiAgfVxyXG5cclxuICBnZXQgaW5kaXZpZHVhbFJlY29yZHNRdWVzdGlvbklkcygpIHtcclxuICAgIGNvbnN0IHsgaW5kaXZpZHVhbFJlY29yZHMgfSA9IHRoaXMuRFMuY29uZmlnKCk7XHJcbiAgICByZXR1cm4gaW5kaXZpZHVhbFJlY29yZHMgIT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KGluZGl2aWR1YWxSZWNvcmRzKSA/IGluZGl2aWR1YWxSZWNvcmRzIDogW11cclxuICB9XHJcblxyXG4gIGdldCBpbmRpdmlkdWFsUmVjb3Jkc0tleUxhYmVscygpIHtcclxuICAgIHJldHVybiB7Li4udGhpcy5nZXRMYWJlbHNGb3JNYWluRmllbGRzKCksIC4uLnRoaXMuZ2V0TGFiZWxzRm9ySW5kaXZpZHVhbFJlY29yZHMoKX1cclxuICB9XHJcblxyXG4gIGdldExhYmVsc0Zvck1haW5GaWVsZHMoKXtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuRFMuY29uZmlnKCk7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nXS5yZXZlcnNlKCkuZm9yRWFjaChrZXkgPT5cclxuICAgICAgbWFwW2tleV0gPSB0aGlzLkRTLmFsbENvbHVtbnMuZmlsdGVyKHJlY29yZCA9PlxyXG4gICAgICAgIHJlY29yZC5rZXkgPT09IGNvbmZpZ1trZXldXHJcbiAgICAgIClbMF0ubGFiZWxcclxuICAgIClcclxuICAgIHJldHVybiBtYXA7XHJcbiAgfSBcclxuXHJcbiAgZ2V0TGFiZWxzRm9ySW5kaXZpZHVhbFJlY29yZHMoKXtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgY29uc3QgaXJJZHMgPSB0aGlzLmluZGl2aWR1YWxSZWNvcmRzUXVlc3Rpb25JZHM7XHJcbiAgICB0aGlzLkRTLmFsbENvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoaXJJZHMuaW5kZXhPZihjb2x1bW4ua2V5KSA+IC0xKSB7XHJcbiAgICAgICAgbWFwW2NvbHVtbi5rZXldID0gY29sdW1uLmxhYmVsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbWFwO1xyXG4gIH0gXHJcblxyXG5cclxuXHJcbiAgZGF0YUxvYWRpbmdNZXNzYWdlKCkge1xyXG4gICAgbGV0IG1lc3NhZ2U7XHJcbiAgICBjb25zdCB7IGl0ZW1zLCBlcnJvciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBtZXNzYWdlID0gJ2Vycm9yTG9hZGluZydcclxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIG1lc3NhZ2UgPSAnUkVQT1JUX1NJTkdMRVZJRVdfTk9USElOR0ZPVU5EJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZSA9ICdsb2FkaW5nRGF0YSdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLkRTLmkxOG4obWVzc2FnZSlcclxuICB9XHJcblxyXG4gIHJldHVyblRvR3JpZCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaW5nbGVWaWV3VmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHNpbmdsZVZpZXc6IHtcclxuICAgICAgICBsaW5rOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBsb2FkUHJldmlvdXNJdGVtID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVJdGVtcygnYmFjaycpXHJcbiAgfVxyXG5cclxuICBsb2FkTmV4dEl0ZW0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZUl0ZW1zKCdmb3J3YXJkJylcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlSXRlbXMoZGlyZWN0aW9uOiAnZm9yd2FyZCcgfCAnYmFja3dhcmQnKTogdm9pZCB7XHJcbiAgICBsZXQgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xyXG4gICAgY29uc3QgcGFnaW5hdGlvblR5cGUgPSB0aGlzLnN0YXRlLmNvbmZpZy5wYWdpbmF0aW9uO1xyXG4gICAgbGV0IGl0ZW1zTGVuZ3RoID0gaXRlbXMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4ID0gaXRlbXMuaW5kZXhPZih0aGlzLnN0YXRlLnNpbmdsZVZpZXcpO1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gZGlyZWN0aW9uID09PSAnZm9yd2FyZCcgPyBjdXJyZW50U2luZ2xlVmlld0l0ZW1JbmRleCArIDEgOiBjdXJyZW50U2luZ2xlVmlld0l0ZW1JbmRleCAtIDE7XHJcblxyXG4gICAgY29uc3QgbG9hZEl0ZW1Gcm9tUHJldmlvdXNQYWdlID0gbmV4dEluZGV4IDwgMCAmJiAhdGhpcy5EUy5kaXNhYmxlUHJldkJ1dHRvbjtcclxuICAgIGNvbnN0IGxvYWRJdGVtRnJvbU5leHRQYWdlID0gbmV4dEluZGV4ID4gaXRlbXNMZW5ndGggJiYgIXRoaXMuRFMuZGlzYWJsZU5leHRCdXR0b247XHJcblxyXG4gICAgbGV0IHByb21pc2VkSXRlbXMgPSBQcm9taXNlLnJlc29sdmUoaXRlbXMpO1xyXG4gICAgLy8gYXNzaWduIGl0ZW1zIHRvIHRoZW5hYmxlIHByb21pc2VzIGlmIHJlcXVlc3RlZCBpdGVtIGlzIG91dHNpZGUgb2YgZGF0YSBib3VuZGFyaWVzXHJcbiAgICBpZiAobG9hZEl0ZW1Gcm9tUHJldmlvdXNQYWdlKSB7XHJcbiAgICAgIHByb21pc2VkSXRlbXMgPSB0aGlzLkRTLmxvYWRQcmV2aW91c1BhZ2UoKTtcclxuICAgIH0gZWxzZSBpZiAobG9hZEl0ZW1Gcm9tTmV4dFBhZ2UpIHtcclxuICAgICAgcHJvbWlzZWRJdGVtcyA9IHBhZ2luYXRpb25UeXBlICE9PSAnY29udGludW91cycgPyB0aGlzLkRTLmxvYWROZXh0UGFnZSgpIDogdGhpcy5EUy5sb2FkTW9yZSgpO1xyXG4gICAgfVxyXG4gICAgLyogICAgIGNvbnN0IGl0ZW1zQXJlUHJvbWlzZWQgPSAhQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMuaGFzT3duUHJvcGVydHkoJ3RoZW4nKTtcclxuICAgICAgICBpZiAoIWl0ZW1zQXJlUHJvbWlzZWQpIHtcclxuICAgICAgICAgIHByb21pc2VkSXRlbXMgPSBQcm9taXNlLnJlc29sdmUoaXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAqL1xyXG4gICAgcHJvbWlzZWRJdGVtcy50aGVuKCgpID0+IHtcclxuICAgICAgbGV0IHNpbmdsZVZpZXdEYXRhO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBwcmV2U3RhdGUuaXRlbXM7XHJcbiAgICAgICAgY29uc3QgYXREYXRhTGVmdEJvdW5kYXJ5Q2FuTG9hZCA9IG5leHRJbmRleCA8IDAgJiYgIXNpbmdsZVZpZXdEaXNhYmxlUHJldjtcclxuICAgICAgICBjb25zdCBhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCA9IG5leHRJbmRleCA+IGl0ZW1zTGVuZ3RoICYmICFzaW5nbGVWaWV3RGlzYWJsZU5leHQgJiYgcGFnaW5hdGlvblR5cGUgIT09ICdjb250aW51b3VzJztcclxuICAgICAgICBpZiAoYXREYXRhTGVmdEJvdW5kYXJ5Q2FuTG9hZCkge1xyXG4gICAgICAgICAgc2luZ2xlVmlld0RhdGEgPSBuZXdJdGVtc1tuZXdJdGVtcy5sZW5ndGggLSAxXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXREYXRhUmlnaHRCb3VuZGFyeUNhbkxvYWQpIHtcclxuICAgICAgICAgIHNpbmdsZVZpZXdEYXRhID0gbmV3SXRlbXNbMF1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2luZ2xlVmlld0RhdGEgPSBuZXdJdGVtc1tuZXh0SW5kZXhdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4udGhpcy5nZXRTaW5nbGVWaWV3TmF2U3RhdGUobmV4dEluZGV4KSxcclxuICAgICAgICAgIHNpbmdsZVZpZXc6IHNpbmdsZVZpZXdEYXRhLFxyXG4gICAgICAgICAgc2luZ2xlVmlld1Zpc2libGU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTaW5nbGVWaWV3TmF2U3RhdGUoaXRlbSkgeyB9XHJcblxyXG4gIG9uU2VsZWN0ID0gKGl0ZW0pID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLmdldFNpbmdsZVZpZXdOYXZTdGF0ZSh0aGlzLnN0YXRlLml0ZW1zLmluZGV4T2YoaXRlbSkpLFxyXG4gICAgICBzaW5nbGVWaWV3OiBpdGVtLFxyXG4gICAgICBzaW5nbGVWaWV3VmlzaWJsZTogdHJ1ZSxcclxuICAgICAgc2luZ2xlVmlld01vZGU6ICd2aWV3J1xyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBnZXRTaW5nbGVWaWV3TmF2U3RhdGUoY3VycmVudEl0ZW1JbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICBsZXQgc2luZ2xlVmlld0Rpc2FibGVOZXh0ID0gZmFsc2UsXHJcbiAgICAgIHNpbmdsZVZpZXdEaXNhYmxlUHJldiA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChjdXJyZW50SXRlbUluZGV4IDw9IDAgJiYgdGhpcy5EUy5kaXNhYmxlUHJldkJ1dHRvbikge1xyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXYgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRJdGVtSW5kZXggPj0gaXRlbXMubGVuZ3RoIC0gMSAmJiB0aGlzLkRTLmRpc2FibGVOZXh0QnV0dG9uKSB7XHJcbiAgICAgIHNpbmdsZVZpZXdEaXNhYmxlTmV4dCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXYsXHJcbiAgICAgIHNpbmdsZVZpZXdEaXNhYmxlTmV4dFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWN0aW9uSWNvbkNsaWNrID0gKGl0ZW0pID0+ICgpID0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgLi4udGhpcy5nZXRTaW5nbGVWaWV3TmF2U3RhdGUodGhpcy5zdGF0ZS5pdGVtcy5pbmRleE9mKGl0ZW0pKSxcclxuICAgIHNpbmdsZVZpZXc6IGl0ZW0sXHJcbiAgICBzaW5nbGVWaWV3VmlzaWJsZTogdHJ1ZSxcclxuICAgIHNpbmdsZVZpZXdNb2RlOiAnZWRpdCdcclxuICB9KVxyXG4gIGFjdGlvbkljb24gPSAoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBvbkNsaWNrPXt0aGlzLmFjdGlvbkljb25DbGljayhpdGVtKX0+XHJcbiAgICAgICAgPHBhdGggZD1cIk0zIDE3LjI1VjIxaDMuNzVMMTcuODEgOS45NGwtMy43NS0zLjc1TDMgMTcuMjV6TTIwLjcxIDcuMDRjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6XCIgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RWaWRlby9pbmRleC5qcyIsIi8vQGZsb3dcclxuaW1wb3J0IHR5cGUge05hdkJ1dHRvblByb3BzfSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1ESWNvbiBmcm9tICdNREljb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2QnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxOYXZCdXR0b25Qcm9wcywgYW55PiB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpY29uLCAuLi53cmFwcGVyIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0tbmF2LWJ1dHRvblwiIHsuLi53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxNREljb24gaWNvbj17aWNvbn0gLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaW5nbGVWaWV3L05hdkJ1dHRvbi5qcyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zZXMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGNvbHVtbnMsIGNvbHVtbnNNYXAgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCBtYWluQ29sdW1ucyA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nXTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbmRlckFyZWEgUmVzcG9uc2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUmVzcG9uc2VzLS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge21haW5Db2x1bW5zICE9IG51bGwgJiYgbWFpbkNvbHVtbnMubWFwKHFJRCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW3FJRF0gPyAoPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1sYWJlbFwiPntjb2x1bW5zTWFwW3FJRF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tdmFsdWVcIj57dGhpc1tgXyR7cUlEfVJlbmRlcmVyYF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbnMgIT0gbnVsbCAmJiBjb2x1bW5zLm1hcChxSUQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVtxSURdID8gKDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsXCI+e2NvbHVtbnNNYXBbcUlEXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsdWVcIj57ZGF0YVtxSURdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX3RpdGxlUmVuZGVyZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiBkYXRhLnRpdGxlXHJcbiAgICB9XHJcbiAgICBnZXQgX2Rlc2NyaXB0aW9uUmVuZGVyZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiBkYXRhLmRlc2NyaXB0aW9uXHJcbiAgICB9XHJcbiAgICBnZXQgX2ltYWdlUmVuZGVyZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoPGltZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCJhdXRvXCIgc3JjPXtkYXRhLmltYWdlfSAvPilcclxuICAgIH1cclxuICAgIGdldCBfdmlkZW9SZW5kZXJlcigpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHZpZGVvIGNvbnRyb2xzIHN0eWxlPXt7IHdpZHRoOiAnMTAwJSAhaW1wb3J0YW50JywgaGVpZ2h0OiAnYXV0byAhaW1wb3J0YW50JyB9fT5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtkYXRhLnZpZGVvfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXHJcbiAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGdldCBfYXVkaW9SZW5kZXJlcigpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGNvbHVtbnNNYXAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIDxhdWRpbyBzcmM9e2RhdGEuYXVkaW99IHR5cGU9XCJhdWRpby9tcDRcIiBjb250cm9scyBzdHlsZT17eyB3aWR0aDogJzEwMCUgIWltcG9ydGFudCcsIGhlaWdodDogJ2F1dG8gIWltcG9ydGFudCcgfX0+PC9hdWRpbz5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaW5nbGVWaWV3L1Jlc3BvbnNlcy5qcyIsIi8vQGZsb3dcclxuaW1wb3J0IHR5cGUge1Byb3BzLCBOYXZCYXJQcm9wcyB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2QnV0dG9uIGZyb20gJy4vTmF2QnV0dG9uJ1xyXG5pbXBvcnQgeyBpY19hcnJvd19iYWNrLCBpY19hcnJvd19mb3J3YXJkLCBpY192aWV3X21vZHVsZSB9IGZyb20gJy4uL2ljb25zJztcclxuXHJcbmNvbnN0IE5hdkJhciA9IGZ1bmN0aW9uIChwcm9wczpOYXZCYXJQcm9wcykge1xyXG4gIGNvbnN0IHsgbG9hZFByZXZpb3VzSXRlbSwgcmV0dXJuVG9HcmlkQWN0aW9uLCBsb2FkTmV4dEl0ZW0sIHNpbmdsZVZpZXdEaXNhYmxlUHJldiwgc2luZ2xlVmlld0Rpc2FibGVOZXh0IH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3LS1oZWFkZXJcIj5cclxuICAgICAgPE5hdkJ1dHRvbiBkaXNhYmxlZD17c2luZ2xlVmlld0Rpc2FibGVQcmV2fSB0aXRsZT1cIlByZXZpb3VzIGl0ZW1cIiBvbkNsaWNrPXtsb2FkUHJldmlvdXNJdGVtfSBpY29uPXtpY19hcnJvd19iYWNrfSAvPlxyXG4gICAgICA8TmF2QnV0dG9uIHRpdGxlPVwiUmV0dXJuIHRvIHRoZSBsaXN0XCIgb25DbGljaz17cmV0dXJuVG9HcmlkQWN0aW9ufSBpY29uPXtpY192aWV3X21vZHVsZX0gLz5cclxuICAgICAgPE5hdkJ1dHRvbiBkaXNhYmxlZD17c2luZ2xlVmlld0Rpc2FibGVOZXh0fSB0aXRsZT1cIk5leHQgSXRlbVwiIG9uQ2xpY2s9e2xvYWROZXh0SXRlbX0gaWNvbj17aWNfYXJyb3dfZm9yd2FyZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlVmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIHZvaWQ+IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7Y2hpbGRyZW4sIC4uLm5hdkJhclByb3BzfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbmdsZVZpZXdcIj5cclxuICAgICAgICA8TmF2QmFyIHsuLi5uYXZCYXJQcm9wc30vPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaW5nbGVWaWV3L2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgaWNfc3RhciA9IDxwYXRoIGQ9XCJNMTIgMTcuMjdMMTguMTggMjFsLTEuNjQtNy4wM0wyMiA5LjI0bC03LjE5LS42MUwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjF6XCIvPjtcbmV4cG9ydCBjb25zdCBpY19zdGFyX2JvcmRlciA9IDxwYXRoIGQ9XCJNMjIgOS4yNGwtNy4xOS0uNjJMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxIDEyIDE3LjI3IDE4LjE4IDIxbC0xLjYzLTcuMDNMMjIgOS4yNHpNMTIgMTUuNGwtMy43NiAyLjI3IDEtNC4yOC0zLjMyLTIuODggNC4zOC0uMzhMMTIgNi4xbDEuNzEgNC4wNCA0LjM4LjM4LTMuMzIgMi44OCAxIDQuMjhMMTIgMTUuNHpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX2Fycm93X2JhY2sgPSA8cGF0aCBkPVwiTTIwIDExSDcuODNsNS41OS01LjU5TDEyIDRsLTggOCA4IDggMS40MS0xLjQxTDcuODMgMTNIMjB2LTJ6XCIvPjtcbmV4cG9ydCBjb25zdCBpY19hcnJvd19mb3J3YXJkID0gPHBhdGggZD1cIk0xMiA0bC0xLjQxIDEuNDFMMTYuMTcgMTFINHYyaDEyLjE3bC01LjU4IDUuNTlMMTIgMjBsOC04elwiLz47XG5leHBvcnQgY29uc3QgaWNfdmlld19tb2R1bGUgPSA8cGF0aCBkPVwiTTQgMTFoNVY1SDR2NnptMCA3aDV2LTZINHY2em02IDBoNXYtNmgtNXY2em02IDBoNXYtNmgtNXY2em0tNi03aDVWNWgtNXY2em02LTZ2Nmg1VjVoLTV6XCIvPjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pY29ucy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL0BmbG93XHJcbmltcG9ydCBIaXRsaXN0RFMgZnJvbSBcInItaGl0bGlzdC1kYXRhc291cmNlXCI7XHJcbmltcG9ydCB1bmlvbkJ5IGZyb20gXCJsb2Rhc2gvdW5pb25CeVwiO1xyXG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gJ3ItcmVwb3J0YWwtYmFzZSc7XHJcblxyXG50eXBlIE9wdGlvbnMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIG5hbWUgb2YgYSBnbG9iYWwgY29uZmlnIHZhcmlhYmxlIHBhc3NlZFxyXG4gICAgKi9cclxuICAgIGNvbmZpZzogc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGlzcGxheSB0aHVtYnMgYXMgaW1hZ2UgcGxhY2Vob2xkZXJzIGluc3RlYWQgb2YgbWVkaWEgaWNvbnNcclxuICAgICovXHJcbiAgICB0aHVtYnNQbGFjZWhvbGRlcjogYm9vbGVhbixcclxuICAgIGNvbXBvbmVudDogYW55XHJcbn1cclxuXHJcbnR5cGUgcGFyc2VkRGF0YVJvdyA9IHtcclxuICAgIGlkOiBzdHJpbmcgfCBudW1iZXIsXHJcbiAgICB0aXRsZT86IHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXHJcbiAgICBpbWFnZT86IHN0cmluZyxcclxuICAgIG1lZGlhdHlwZTogJ3ZpZGVvJyB8ICdhdWRpbycgfCAnaW1hZ2UnLFxyXG4gICAgbGluazogc3RyaW5nLFxyXG4gICAgW3g6c3RyaW5nXTpzdHJpbmcsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEU0Fic3RyYWN0aW9uKG9wdGlvbnM6IE9wdGlvbnMpIHtcclxuICAgIGNvbnN0IERTID0gbmV3IEhpdGxpc3REUygpO1xyXG4gICAgY29uc3QgY29tcG9uZW50ID0gb3B0aW9ucy5jb21wb25lbnQ7XHJcbiAgICBsZXQgY29uZmlnO1xyXG4gICAgY29uc3QgcXVlcnkgPSBSZXBvcnRhbEJhc2UubG9jYXRpb25EZXNlcmlhbGl6ZSgpLnF1ZXJ5O1xyXG5cclxuICAgIHNldHVwRGF0YUxpc3RlbmVyKG9wdGlvbnMuY29uZmlnKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIExhdW5jaGVzIGxpc3RlbmVyIGZvciBgWS5HbG9iYWwucmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVgIGV2ZW50IHdpdGhpbiBZVUkgd2hpY2ggaXMgdHJpZ2dlcmVkIGV2ZXJ5IHRpbWUgdGhlIGZpbHRlciBwYW5lbCB1cGRhdGVzIG9yIG9uIGluaXRpYWwgbG9hZFxyXG4gICAgICogKi9cclxuICAgIGZ1bmN0aW9uIHNldHVwRGF0YUxpc3RlbmVyKGNvbmZpZ05hbWUpIHtcclxuICAgICAgICBpZiAoWSAmJiBZLkdsb2JhbCkge1xyXG4gICAgICAgICAgICBZLkdsb2JhbC5vbihcInJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlXCIsIGZpbHRlckluZm8gPT4ge1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbGlzZUNvbmZpZyhjb25maWdOYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChEUyAmJiBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBEUy5tb2RpZmllciA9IGZpbHRlckluZm87IC8vIGZpbHRlciBpbmZvcm1hdGlvbiBhcyBhIG1vZGlmaWVyIGZvciBkYXRhIGZldGNoXHJcbiAgICAgICAgICAgICAgICAgICAgRFMuaW5pdGlhbERhdGFMb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWVVJIGlzIG5vdCBkZWZpbmVkIG9yIGFjY2Vzc2libGUsIGNhbm5vdCBzZXQgdXAgYSBcInJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlXCIgbGlzdGVuZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGlzZUNvbmZpZyhjb25maWdOYW1lKSB7XHJcbiAgICAgICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgICAgICAgaWYgKCF3aW5kb3dbY29uZmlnTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29uZmlnIGlzIG5vdCBwYXNzZWQgZnJvbSBiYWNrZW5kJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25maWcgPSB3aW5kb3dbY29uZmlnTmFtZV07XHJcbiAgICAgICAgICAgIGlmKGNvbmZpZy5pbmRpdmlkdWFsUmVjb3JkcyAmJiB0eXBlb2YgY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzID09PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgICAgICAgICBjb25maWcuaW5kaXZpZHVhbFJlY29yZHMgPSBjb25maWcuaW5kaXZpZHVhbFJlY29yZHMuc3BsaXQoJywnKS5tYXAoaXRlbT0+aXRlbS50cmltKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7IGNvbmZpZyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhLCBtb2RlID0gJ3JlcGxhY2UnKSB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YTogcGFyc2VkRGF0YVJvd1tdID0gZGF0YS5tYXAoKGRhdGFSb3csIHJvd0luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXJzZWRSb3c6IHBhcnNlZERhdGFSb3cgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgaXIgPSBjb25maWcuaW5kaXZpZHVhbFJlY29yZHMgfHwgW107XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFGaWVsZHMgPSBbJ2lkJywgJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ2ltYWdlJywgJ2F1ZGlvJywgJ3ZpZGVvJywgJ3RhZ3MnXS5jb25jYXQoaXIpO1xyXG4gICAgICAgICAgICBkYXRhRmllbGRzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbklEID0gY29uZmlnW2tleV07XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRSb3dba2V5XSA9IHByZXBhcmVEYXRhKGRhdGFSb3dbY29sdW1uSUQgfHwga2V5XSwga2V5KTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIGltYWdlIC0gd2UgbWlnaHQgd2FudCB0byB1c2UgYSBwbGFjZWhvbGRlciBhcyB0aGUgdGh1bWIsIGFuZCBsb2FkIHRoZSBmdWxsIGltYWdlIGluIGJhY2tncm91bmRcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdpbWFnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkUm93LmltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnRodW1ic1BsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRSb3cucGxhY2Vob2xkZXIgPSBwYXJzZWRSb3cuaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkUm93LmltYWdlID0gcGFyc2VkUm93LmltYWdlLnJlcGxhY2UoL190aHVtYi9naSwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBtZWRpYXR5cGUgb3IgYSBwbGFjZWhvbGRlciBpY29uXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZFJvdy5tZWRpYXR5cGUgJiYgWyd2aWRlbycsICdhdWRpbycsICdpbWFnZSddLmluZGV4T2Yoa2V5KSA+IC0xICYmIGNvbmZpZ1trZXldICYmIHBhcnNlZFJvd1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkUm93Lm1lZGlhdHlwZSA9IGtleVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCBpZCBmb3Iga2V5c1xyXG4gICAgICAgICAgICBwYXJzZWRSb3cuaWQgPSBkYXRhUm93LnJlc3BvbnNlaWQgPyBkYXRhUm93LnJlc3BvbnNlaWQgOiByb3dJbmRleDtcclxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGxpbmsgcGFzc2VkIGFzIGBzbGlua2AgcHJvcGVydHkgaW4gZGF0YVxyXG4gICAgICAgICAgICBpZiAoZGF0YVJvdy5zbGluaykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGwgPSBkYXRhUm93LnNsaW5rO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkUm93LmxpbmsgPSAoL2hyZWY9JyguKz8pJy9naSkuZXhlYyhsKS5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkUm93O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSBzdGF0ZSB3aXRoIHRoZSBuZXcgc2V0IG9mIGRhdGEgb3IgYSBtZXJnZWQgZGF0YVxyXG4gICAgICAgIGlmIChtb2RlID09PSAncmVwbGFjZScpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBuZXdEYXRhLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2FwcGVuZCcpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5wcmV2U3RhdGUuaXRlbXMsIC4uLm5ld0RhdGFdLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdtZXJnZScpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobW9kZSk7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiB1bmlvbkJ5KG5ld0RhdGEsIHByZXZTdGF0ZS5pdGVtcywgJ2lkJyksXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9GF0YDQtdC9INC30L3QsNC10YIg0YfRgtC+JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNzYWdlIGRhdGEgdG8gZml0IHRoZSB0eXBlIHdlIGV4cGVjdCB0byByZWNlaXZlIGluIHJlYWN0IHZpZXdcclxuICAgICAqICovXHJcbiAgICBmdW5jdGlvbiBwcmVwYXJlRGF0YShkYXRhOmFueSwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZXBhcmVEYXRhJyxkYXRhLHR5cGUpXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoL3NyYz0nKC4rPyknL2dpKS5leGVjKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdFsxXSA/IHJlc3VsdFsxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOlxyXG4gICAgICAgICAgICBjYXNlICd0aXRsZSc6cmV0dXJuICEoZGF0YS5pbmRleE9mKCctJykgPiAtMSAmJiBkYXRhLnRyaW0oKS5sZW5ndGggPT09IDEpID8gZGF0YS50cmltKCkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNhc2UgJ3ZpZGVvJzpcclxuICAgICAgICAgICAgY2FzZSAnYXVkaW8nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEoZGF0YS5pbmRleE9mKCctJykgPiAtMSAmJiBkYXRhLnRyaW0oKS5sZW5ndGggPT09IDEpID8gZ2VuZXJhdGVNZWRpYUxpbmsoZGF0YS50cmltKCksIHR5cGUpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjYXNlICd0YWdzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhICYmIChkYXRhLmluZGV4T2YoJywnKSA+IC0xID8gZGF0YS5zcGxpdCgnLCcpIDogZGF0YS5pbmRleE9mKCctJykgPiAtMSAmJiBkYXRhLnRyaW0oKS5sZW5ndGggPT09IDEgPyB1bmRlZmluZWQgOiBkYXRhLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1lZGlhTGluayhmaWxlTmFtZTpzdHJpbmcsIHR5cGU6ICdhdWRpbyd8J3ZpZGVvJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dlbmVyYXRlTWVkaWFMaW5rJyxmaWxlTmFtZSx0eXBlKVxyXG4gICAgICAgIGNvbnN0IGRzTmFtZSA9IGNvbmZpZy5zdXJ2ZXlJRDtcclxuICAgICAgICByZXR1cm4gYC9yZXBvcnRhbC9XeXNpd3lnL1JlcG9ydC8ke3F1ZXJ5LnJlcG9ydGlkfS8ke2RzTmFtZX0vJHt0eXBlfS8ke2ZpbGVOYW1lfWBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIERTLmxvYWROZXh0UGFnZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gRFMubmV4dFBhZ2UoKVxyXG4gICAgICAgICAgICAudGhlbihwcm9jZXNzRGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5sb2FkUHJldmlvdXNQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBEUy5wcmV2aW91c1BhZ2UoKVxyXG4gICAgICAgICAgICAudGhlbihwcm9jZXNzRGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5sb2FkTW9yZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gRFMubmV4dFBhZ2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBwcm9jZXNzRGF0YShyZXNwb25zZSwgJ2FwcGVuZCcpKVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmluaXRpYWxMb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBEUy5pbml0aWFsRGF0YUxvYWQoKVxyXG4gICAgICAgICAgICAudGhlbihwcm9jZXNzRGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5nZXRQYWdlSW5mbyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBoYXNQYWdlSW5mbyA9IERTLnBhZ2VJbmZvICYmIERTLnNvcnRpbmdQYWdpbmdWYWx1ZXMgJiYgRFMuc29ydGluZ1BhZ2luZ1ZhbHVlcy50b3RhbEhpdHM7XHJcbiAgICAgICAgcmV0dXJuIGhhc1BhZ2VJbmZvID8gYCR7RFMucGFnZUluZm99IG9mICR7RFMuc29ydGluZ1BhZ2luZ1ZhbHVlcy50b3RhbEhpdHN9YCA6ICcnO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5jb25maWcgPSAoKSA9PiB7IHJldHVybiBjb25maWcgIT0gbnVsbCA/IGNvbmZpZyA6IGluaXRpYWxpc2VDb25maWcob3B0aW9ucy5jb25maWcpIH07XHJcblxyXG4gICAgcmV0dXJuIERTXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRFNBYnN0cmFjdGlvbi5qcyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19yb290LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fdG9LZXkuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX01hcC5qcyIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNLZXkuanMiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pZGVudGl0eS5qcyIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1NldC5qcyIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1NldENhY2hlLmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU3RhY2suanMiLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUdldC5qcyIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNFcXVhbC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaXNLZXkodmFsdWUsIG9iamVjdCkgPyBbdmFsdWVdIDogc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFBhdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY2FzdFBhdGguanMiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vX2FycmF5U29tZScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19lcXVhbEFycmF5cy5qcyIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0luZGV4LmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtYXRjaGVzUHJvcGVydHlgIGZvciBzb3VyY2UgdmFsdWVzIHN1aXRhYmxlXG4gKiBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUoa2V5LCBzcmNWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWUgJiZcbiAgICAgIChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gT2JqZWN0KG9iamVjdCkpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvZXEuanMiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gva2V5cy5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19IYXNoLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19Qcm9taXNlLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19XZWFrTWFwLmpzIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FwcGx5LmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanMiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChjb21wYXJhdG9yKHZhbHVlLCBhcnJheVtpbmRleF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmRJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzRmxhdHRlbmFibGUgPSByZXF1aXJlKCcuL19pc0ZsYXR0ZW5hYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmxhdHRlbmAgd2l0aCBzdXBwb3J0IGZvciByZXN0cmljdGluZyBmbGF0dGVuaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gZmxhdHRlbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXB0aCBUaGUgbWF4aW11bSByZWN1cnNpb24gZGVwdGguXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVkaWNhdGU9aXNGbGF0dGVuYWJsZV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU3RyaWN0XSBSZXN0cmljdCB0byB2YWx1ZXMgdGhhdCBwYXNzIGBwcmVkaWNhdGVgIGNoZWNrcy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtyZXN1bHQ9W11dIFRoZSBpbml0aWFsIHJlc3VsdCB2YWx1ZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZsYXR0ZW5lZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZUZsYXR0ZW4oYXJyYXksIGRlcHRoLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgcHJlZGljYXRlIHx8IChwcmVkaWNhdGUgPSBpc0ZsYXR0ZW5hYmxlKTtcbiAgcmVzdWx0IHx8IChyZXN1bHQgPSBbXSk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKGRlcHRoID4gMCAmJiBwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgICBpZiAoZGVwdGggPiAxKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsYXR0ZW4gYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICAgIGJhc2VGbGF0dGVuKHZhbHVlLCBkZXB0aCAtIDEsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheVB1c2gocmVzdWx0LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNTdHJpY3QpIHtcbiAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGbGF0dGVuO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VGbGF0dGVuLmpzIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJc05hTiA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hTicpLFxuICAgIHN0cmljdEluZGV4T2YgPSByZXF1aXJlKCcuL19zdHJpY3RJbmRleE9mJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcbiAgICA/IHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpXG4gICAgOiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXNOYU4sIGZyb21JbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hdGNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IGluZGV4LFxuICAgICAgbm9DdXN0b21pemVyID0gIWN1c3RvbWl6ZXI7XG5cbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgPyBkYXRhWzFdICE9PSBvYmplY3RbZGF0YVswXV1cbiAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cbiAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhY2sgPSBuZXcgU3RhY2s7XG4gICAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgICAgIDogcmVzdWx0XG4gICAgICAgICAgKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hdGNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc01hdGNoLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hTmAgd2l0aG91dCBzdXBwb3J0IGZvciBudW1iZXIgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgTmFOYCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYU47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXMnKSxcbiAgICBiYXNlTWF0Y2hlc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXNQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBwcm9wZXJ0eSA9IHJlcXVpcmUoJy4vcHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pdGVyYXRlZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGFuIGl0ZXJhdGVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2MDM0IGZvciBtb3JlIGRldGFpbHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICA/IGJhc2VNYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKVxuICAgICAgOiBiYXNlTWF0Y2hlcyh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXRlcmF0ZWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL19iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hdGNoRGF0YScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2Vzbid0IGNsb25lIGBzb3VyY2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUobWF0Y2hEYXRhWzBdWzBdLCBtYXRjaERhdGFbMF1bMV0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09PSBzb3VyY2UgfHwgYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXMuanMiLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpLFxuICAgIGdldCA9IHJlcXVpcmUoJy4vZ2V0JyksXG4gICAgaGFzSW4gPSByZXF1aXJlKCcuL2hhc0luJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzUHJvcGVydHlgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICBpZiAoaXNLZXkocGF0aCkgJiYgaXNTdHJpY3RDb21wYXJhYmxlKHNyY1ZhbHVlKSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSh0b0tleShwYXRoKSwgc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIgb2JqVmFsdWUgPSBnZXQob2JqZWN0LCBwYXRoKTtcbiAgICByZXR1cm4gKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgb2JqVmFsdWUgPT09IHNyY1ZhbHVlKVxuICAgICAgPyBoYXNJbihvYmplY3QsIHBhdGgpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlc1Byb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlUHJvcGVydHkuanMiLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5RGVlcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlUHJvcGVydHlEZWVwLmpzIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIG92ZXJSZXN0ID0gcmVxdWlyZSgnLi9fb3ZlclJlc3QnKSxcbiAgICBzZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX3NldFRvU3RyaW5nJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwidmFyIGNvbnN0YW50ID0gcmVxdWlyZSgnLi9jb25zdGFudCcpLFxuICAgIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc2V0VG9TdHJpbmdgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaG90IGxvb3Agc2hvcnRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgYmFzZVNldFRvU3RyaW5nID0gIWRlZmluZVByb3BlcnR5ID8gaWRlbnRpdHkgOiBmdW5jdGlvbihmdW5jLCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmMsICd0b1N0cmluZycsIHtcbiAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAnZW51bWVyYWJsZSc6IGZhbHNlLFxuICAgICd2YWx1ZSc6IGNvbnN0YW50KHN0cmluZyksXG4gICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNldFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpLFxuICAgIGNyZWF0ZVNldCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVNldCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmlxKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgc2VlbiA9IHJlc3VsdDtcblxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgfVxuICBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xuICAgIGlmIChzZXQpIHtcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XG4gICAgfVxuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKHNlZW5JbmRleC0tKSB7XG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXMoc2VlbiwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ2YXIgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgbm9vcCA9IHJlcXVpcmUoJy4vbm9vcCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvYmplY3Qgb2YgYHZhbHVlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFkZCB0byB0aGUgc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IHNldC5cbiAqL1xudmFyIGNyZWF0ZVNldCA9ICEoU2V0ICYmICgxIC8gc2V0VG9BcnJheShuZXcgU2V0KFssLTBdKSlbMV0pID09IElORklOSVRZKSA/IG5vb3AgOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBTZXQodmFsdWVzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2NyZWF0ZVNldC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ2YXIgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGtleSA9IHJlc3VsdFtsZW5ndGhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgcmVzdWx0W2xlbmd0aF0gPSBba2V5LCB2YWx1ZSwgaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXRjaERhdGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0TWF0Y2hEYXRhLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRUYWcuanMiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgZXhpc3RzIG9uIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgaGFzRnVuYykge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gdG9LZXkocGF0aFtpbmRleF0pO1xuICAgIGlmICghKHJlc3VsdCA9IG9iamVjdCAhPSBudWxsICYmIGhhc0Z1bmMob2JqZWN0LCBrZXkpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICB9XG4gIGlmIChyZXN1bHQgfHwgKytpbmRleCAhPSBsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGxlbmd0aCA9IG9iamVjdCA9PSBudWxsID8gMCA6IG9iamVjdC5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc1BhdGguanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoU2V0LmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ByZWFkYWJsZVN5bWJvbCA9IFN5bWJvbCA/IFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBmbGF0dGVuYWJsZSBgYXJndW1lbnRzYCBvYmplY3Qgb3IgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZmxhdHRlbmFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNGbGF0dGVuYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpIHx8XG4gICAgISEoc3ByZWFkYWJsZVN5bWJvbCAmJiB2YWx1ZSAmJiB2YWx1ZVtzcHJlYWRhYmxlU3ltYm9sXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGbGF0dGVuYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fb3ZlckFyZy5qcyIsInZhciBhcHBseSA9IHJlcXVpcmUoJy4vX2FwcGx5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VSZXN0YCB3aGljaCB0cmFuc2Zvcm1zIHRoZSByZXN0IGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSByZXN0IGFycmF5IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyUmVzdChmdW5jLCBzdGFydCwgdHJhbnNmb3JtKSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IHRyYW5zZm9ybShhcnJheSk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlclJlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fb3ZlclJlc3QuanMiLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsInZhciBiYXNlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlU2V0VG9TdHJpbmcnKSxcbiAgICBzaG9ydE91dCA9IHJlcXVpcmUoJy4vX3Nob3J0T3V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0VG9TdHJpbmcuanMiLCIvKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVOb3cgPSBEYXRlLm5vdztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvcnRPdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2hvcnRPdXQuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0NsZWFyLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0hhcy5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5kZXhPZmAgd2hpY2ggcGVyZm9ybXMgc3RyaWN0IGVxdWFsaXR5XG4gKiBjb21wYXJpc29ucyBvZiB2YWx1ZXMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmljdEluZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsInZhciBtZW1vaXplQ2FwcGVkID0gcmVxdWlyZSgnLi9fbWVtb2l6ZUNhcHBlZCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVMZWFkaW5nRG90ID0gL15cXC4vLFxuICAgIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChyZUxlYWRpbmdEb3QudGVzdChzdHJpbmcpKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9QYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvY29uc3RhbnQuanMiLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2dldC5qcyIsInZhciBiYXNlSGFzSW4gPSByZXF1aXJlKCcuL19iYXNlSGFzSW4nKSxcbiAgICBoYXNQYXRoID0gcmVxdWlyZSgnLi9faGFzUGF0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgaXMgYSBkaXJlY3Qgb3IgaW5oZXJpdGVkIHByb3BlcnR5IG9mIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IF8uY3JlYXRlKHsgJ2EnOiBfLmNyZWF0ZSh7ICdiJzogMiB9KSB9KTtcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EuYicpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2InKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGhhc0luKG9iamVjdCwgcGF0aCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgaGFzUGF0aChvYmplY3QsIHBhdGgsIGJhc2VIYXNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzSW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9oYXNJbi5qcyIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIi8qKlxuICogR2V0cyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ubGFzdChbMSwgMiwgM10pO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuIGxlbmd0aCA/IGFycmF5W2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxhc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9sYXN0LmpzIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9tZW1vaXplLmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbm9vcC5qcyIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHknKSxcbiAgICBiYXNlUHJvcGVydHlEZWVwID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5RGVlcCcpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGEgZ2l2ZW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW1xuICogICB7ICdhJzogeyAnYic6IDIgfSB9LFxuICogICB7ICdhJzogeyAnYic6IDEgfSB9XG4gKiBdO1xuICpcbiAqIF8ubWFwKG9iamVjdHMsIF8ucHJvcGVydHkoJ2EuYicpKTtcbiAqIC8vID0+IFsyLCAxXVxuICpcbiAqIF8ubWFwKF8uc29ydEJ5KG9iamVjdHMsIF8ucHJvcGVydHkoWydhJywgJ2InXSkpLCAnYS5iJyk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICByZXR1cm4gaXNLZXkocGF0aCkgPyBiYXNlUHJvcGVydHkodG9LZXkocGF0aCkpIDogYmFzZVByb3BlcnR5RGVlcChwYXRoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3Byb3BlcnR5LmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC90b1N0cmluZy5qcyIsInZhciBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJy4vX2Jhc2VGbGF0dGVuJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICBsYXN0ID0gcmVxdWlyZSgnLi9sYXN0Jyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy51bmlvbmAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgaXRlcmF0ZWVgIHdoaWNoIGlzXG4gKiBpbnZva2VkIGZvciBlYWNoIGVsZW1lbnQgb2YgZWFjaCBgYXJyYXlzYCB0byBnZW5lcmF0ZSB0aGUgY3JpdGVyaW9uIGJ5XG4gKiB3aGljaCB1bmlxdWVuZXNzIGlzIGNvbXB1dGVkLiBSZXN1bHQgdmFsdWVzIGFyZSBjaG9zZW4gZnJvbSB0aGUgZmlyc3RcbiAqIGFycmF5IGluIHdoaWNoIHRoZSB2YWx1ZSBvY2N1cnMuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OlxuICogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7Li4uQXJyYXl9IFthcnJheXNdIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGNvbWJpbmVkIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy51bmlvbkJ5KFsyLjFdLCBbMS4yLCAyLjNdLCBNYXRoLmZsb29yKTtcbiAqIC8vID0+IFsyLjEsIDEuMl1cbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8udW5pb25CeShbeyAneCc6IDEgfV0sIFt7ICd4JzogMiB9LCB7ICd4JzogMSB9XSwgJ3gnKTtcbiAqIC8vID0+IFt7ICd4JzogMSB9LCB7ICd4JzogMiB9XVxuICovXG52YXIgdW5pb25CeSA9IGJhc2VSZXN0KGZ1bmN0aW9uKGFycmF5cykge1xuICB2YXIgaXRlcmF0ZWUgPSBsYXN0KGFycmF5cyk7XG4gIGlmIChpc0FycmF5TGlrZU9iamVjdChpdGVyYXRlZSkpIHtcbiAgICBpdGVyYXRlZSA9IHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gYmFzZVVuaXEoYmFzZUZsYXR0ZW4oYXJyYXlzLCAxLCBpc0FycmF5TGlrZU9iamVjdCwgdHJ1ZSksIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMikpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pb25CeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3VuaW9uQnkuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTAuMDEuMjAxNy5cbiAqL1xuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tIFwici1yZXBvcnRhbC1iYXNlXCI7XG5pbXBvcnQgSGl0bGlzdFNldHVwIGZyb20gXCIuL2hpdGxpc3Qtc2V0dXBcIjtcblxuY2xhc3MgSGl0bGlzdERhdGFzb3VyY2UgZXh0ZW5kcyBIaXRsaXN0U2V0dXB7XG4gIC8qKlxuICAgKiBUaGlzIGNsYXNzIGFsbG93cyB0byBlc3RhYmxpc2ggYSBjb25uZWN0aW9uIHdpdGggdGhlIEhpdExpc3QgZGF0YWJhc2UgYW5kIHVzZSB1dGlsaXR5IG1ldGhvZHMgdG8gcXVlcnkgYW5kIGZpbHRlciBkYXRhIHByb3ZpZGVkIHRoZXJlJ3MgYSBoaXRsaXN0IG9uIHRoZSBwYWdlXG4gICAqIEBleHRlbmRzIEhpdGxpc3RTZXR1cFxuICAgKiAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zPXt9KXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3NlYXJjaFZhbHVlcz1bXTtcbiAgICAvKiogQHByb3BlcnR5IHtTdHJpbmd9IG1vZGlmaWVyIC0gZXh0cmEgcGFyYW1zIGFkZGVkIGFzIGEgc3RyaW5nIGZyb20gZmlsdGVycyAqL1xuICAgIHRoaXMubW9kaWZpZXIgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBwZXJmb3JtcyBpbml0aWFsIGRhdGEgbG9hZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgb2YgZGF0YVxuICAgKiAqL1xuICBpbml0aWFsRGF0YUxvYWQoKXtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aW5pdGlhbExvYWQ6dHJ1ZX0pXG4gIH1cbiAgLyoqXG4gICAqIGxvYWRzIG5leHQgcGFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgb2YgZGF0YVxuICAgKiAqL1xuICBuZXh0UGFnZSgpe1xuICAgIHRoaXMuX3NraXBQYWdlKHRydWUpO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aXNQYWdpbmc6IHRydWV9LHRoaXMubW9kaWZpZXIpO1xuICB9XG4gIC8qKlxuICAgKiBsb2FkcyBwcmV2aW91cyBwYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIHByZXZpb3VzUGFnZSgpe1xuICAgIHRoaXMuX3NraXBQYWdlKGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2lzUGFnaW5nOiB0cnVlfSx0aGlzLm1vZGlmaWVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyaWVzIEhpdExpc3QgQVBJXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqICovXG4gIHJlcXVlc3RSZXNwb25zZShvcHRpb25zKXtcbiAgICBsZXQgcXVlcnk9IFJlcG9ydGFsQmFzZS5sb2NhdGlvbkRlc2VyaWFsaXplKCkucXVlcnk7XG4gICAgaWYocXVlcnkgJiYgcXVlcnkucmVwb3J0aWQgJiYgdGhpcy5oaXRsaXN0SUQpe1xuICAgICAgLypzZXQgY29tbW9uIHBhcmFtcyovXG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBQYWdlSWQ6IHRoaXMucGFnZUlELFxuICAgICAgICBwYWdlU3RhdGVJZDogdGhpcy5wYWdlU3RhdGVJRCxcbiAgICAgICAgUHJldmlldzogcXVlcnkucHJldmlld1xuICAgICAgfTtcblxuICAgICAgLyppZiBvcHRpb25zIGFyZSBwYXNzZWQsIGFkZCBvcHRpb25zKi9cbiAgICAgIGlmKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgZm9yIChsZXQgYXR0cm5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHBhcmFtc1thdHRybmFtZV0gPSB0eXBlb2Ygb3B0aW9uc1thdHRybmFtZV09PT0nYm9vbGVhbic/KG9wdGlvbnNbYXR0cm5hbWVdPycxJzonMCcpOm9wdGlvbnNbYXR0cm5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFwYXJhbXMuc2VhcmNoICYmIHRoaXMuX3NlYXJjaFZhbHVlcy5sZW5ndGg+MCl7XG4gICAgICAgIHBhcmFtcy5zZWFyY2ggPSBKU09OLnN0cmluZ2lmeSh0aGlzLl9zZWFyY2hWYWx1ZXMpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcztcblxuICAgICAgaWYgKHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzIT1udWxsICYmICFpc05hTihzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdlTnVtYmVyKSkge1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmluaXRpYWxMb2FkID09PSB0cnVlKSB7XG4gICAgICAgICAgc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2VOdW1iZXIgKz0gc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnaW5nRm9yd2FyZCA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwYXJhbXMuc29ydGluZ1BhZ2luZ1ZhbHVlcz1KU09OLnN0cmluZ2lmeShzb3J0aW5nUGFnaW5nVmFsdWVzKTtcblxuICAgICAgcmV0dXJuIFJlcG9ydGFsQmFzZS5wcm9taXNlUmVxdWVzdChgJHt0aGlzLnNlcnZpY2VVUkx9JiR7SGl0bGlzdERhdGFzb3VyY2Uuc2VyaWFsaXplUGFyYW1zKHBhcmFtcyl9JHt0aGlzLm1vZGlmaWVyIT0nJz8nJicrdGhpcy5tb2RpZmllcjonJ31gKVxuICAgICAgICAudGhlbihyZXNwb25zZT0+dGhpcy5wYXJzZVJlc3BvbnNlKHJlc3BvbnNlKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIEhpdExpc3QgQVBJIHJlc3BvbnNlXG4gICAqICovXG4gIHBhcnNlUmVzcG9uc2UocmVzcG9uc2Upe1xuICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG5cbiAgICB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSByZXNwb25zZS5zb3J0aW5nUGFnaW5nVmFsdWVzO1xuICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgdGhpcy5wYWdlSW5mbyA9IHJlc3BvbnNlLnBhZ2VJbmZvO1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtCb29sZWFufSBwYWdpbmdGb3J3YXJkIGlmIGB0cnVlYCBnb2VzIGZvcndhcmQsIGlmIGBudWxsYCBnb2VzIGJhY2t3YXJkXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBjYWxsYmFja1xuICAgKiAqL1xuICBfc2tpcFBhZ2UocGFnaW5nRm9yd2FyZCl7XG4gICAgbGV0IF9zcHYgPSB7Li4udGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzfTtcbiAgICBsZXQgcHYgPSB7Li4uX3Nwdi5wYWdpbmdWYWx1ZXN9IHx8IHt9O1xuICAgIHB2LnBhZ2luZ0ZvcndhcmQgPSBwYWdpbmdGb3J3YXJkOyAvKmlmIGZvcndhcmQgaXMgbmVlZGVkIHRoZW4gcGFzcyB0cnVlLCBlbHNlIG51bGwgLSBiYWNrd2FyZCovXG4gICAgcHYuc3RhcnRJZCA9IHBhZ2luZ0ZvcndhcmQgPyBwdi5sYXN0U3RhcnRJZCA6IHB2LmZpcnN0U3RhcnRJZDtcbiAgICBwdi5zdGFydFZhbHVlID0gcGFnaW5nRm9yd2FyZCA/IHB2Lmxhc3RTdGFydFZhbHVlIDogcHYuZmlyc3RTdGFydFZhbHVlO1xuICAgIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHtcbiAgICAgIC4uLnRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyxcbiAgICAgIHBhZ2luZ1ZhbHVlczogcHZcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIHNlcmlhbGl6ZSBwYXJhbXMgaW50byBhIHF1ZXJ5IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIC0gYW4gb2JqZWN0IHdpdGggcGFyYW1ldGVyc1xuICAgKiAqL1xuICBzdGF0aWMgc2VyaWFsaXplUGFyYW1zKHBhcmFtcyl7XG4gICAgbGV0IHF1ZXJ5ID0gW107XG4gICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zKXtcbiAgICAgIHF1ZXJ5LnB1c2goW2tleSxwYXJhbXNba2V5XV0uam9pbignPScpKTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5LmpvaW4oJyYnKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdERhdGFzb3VyY2U7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1kYXRhc291cmNlLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDEwLjAxLjIwMTcuXG4gKi9cblxuY2xhc3MgSGl0bGlzdFNldHVwe1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIC8vZml4IGZvciB3aW5kb3cubG9jYXRpb24gb3JpZ2luLCB0aGFueCBJRVxuICAgIGlmICghd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0OiAnJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gSGl0bGlzdFNldHVwLmdldE9yaWdpbmFsQ29uZmlnKCk7XG4gICAgdGhpcy5fZWxlbWVudFR5cGUgPSB3aW5kb3cuSGl0TGlzdEVsZW1lbnRUeXBlO1xuICAgIHRoaXMuX29wID0gd2luZG93LlNlYXJjaGFibGVMaXN0T3BlcmF0b3I7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgYWxsb3dzIGdldHRpbmcgYSBsb2NhbGlzZWQgc3RyaW5nIGluIHRoZSBsYW5ndWFnZSBvZiB0aGUgcmVwb3J0IGZyb20gSGl0bGlzdCBjb25maWcuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSB0aGUga2V5IHRvIGxvb2sgdGhlIHByb3BlcnR5IHVwXG4gICAqXG4gICAqICogYHN0b2VgOlwiU21hbGxlciB0aGFuIG9yIGVxdWFsXCIsXG4gICAqICogYGd0b2VgOlwiR3JlYXRlciB0aGFuIG9yIGVxdWFsXCIsXG4gICAqICogYGJldHdlZW5gOlwiQmV0d2VlblwiLFxuICAgKiAqIGBiZWZvcmVgOlwiQmVmb3JlXCIsXG4gICAqICogYGFmdGVyYDpcIkFmdGVyXCIsXG4gICAqICogYGV4YWN0bHlgOlwiRXhhY3RseVwiLFxuICAgKiAqIGBzaG93ZGVmYXVsdGNvbHNgOlwiU2hvdyBkZWZhdWx0IGNvbHVtbnNcIixcbiAgICogKiBgYXBwbHlgOlwiQXBwbHlcIixcbiAgICogKiBgY2FuY2VsYDpcIkNhbmNlbFwiLFxuICAgKiAqIGBzaG93aGlkZWA6XCJTaG93IC8gSGlkZSBjb2x1bW5zXCIsXG4gICAqICogYHllc2A6XCJZZXNcIixcbiAgICogKiBgbm9gOlwiTm9cIixcbiAgICogKiBgbG9hZGluZ0RhdGFgOlwiTG9hZGluZyBkYXRhLCBwbGVhc2Ugd2FpdC4uLlwiLFwiXG4gICAqICogYGNoZWNrYWxsYDpcIkNoZWNrIGFsbFwiLFxuICAgKiAqIGB1bmNoZWNrYWxsYDpcIlVuY2hlY2sgYWxsXCIsXG4gICAqICogYGVycm9yTG9hZGluZ2A6XCJFcnJvciBsb2FkaW5nIGRhdGFcIixcbiAgICogKiBgZXJyb3JOb0NvbHVtbnNgOlwiTm8gY29sdW1ucyBzZWxlY3RlZFwiXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1JFU1BPTkRFTlRPVkVSVklFV2A6XCJSZXNwb25kZW50IG92ZXJ2aWV3XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSSU5UYDpcIlByaW50IHRoZSBjdXJyZW50IHJlc3BvbmRlbnRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfQ0xPU0VgOlwiQ2xvc2UgdGhpcyBvdmVybGF5XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX0ZJTFRFUmA6XCJGaWx0ZXIgcXVlc3Rpb25zXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX05PVEhJTkdGT1VORGA6XCJObyBxdWVzdGlvbnMgbWF0Y2ggeW91ciBzZWFyY2hcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJFVklPVVNgOlwiUHJldmlvdXNcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJFVklPVVNISU5UYDpcIlByZXZpb3VzIHJlc3BvbmRlbnRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTkVYVGA6XCJOZXh0XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX05FWFRISU5UYDpcIk5leHQgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19PRmA6XCJ7MH0gb2YgezF9XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX01PUkVgOlwiezB9IG1vcmVcIixcbiAgICogKiBSRVBPUlRfU0lOR0xFVklFV19BTFRFUk5BVElWRVNgOlwiQW5zd2VycyBhbHRlcm5hdGl2ZXM6XCJcbiAgICpcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICogKi9cbiAgaTE4bihrZXkpe1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuY2FwdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KT90aGlzLl9jb25maWcuY2FwdGlvbnNba2V5XTp0aGlzLl9jb25maWcuc2luZ2xlVmlld1RleHRzLmhhc093blByb3BlcnR5KGtleSk/dGhpcy5fY29uZmlnLnNpbmdsZVZpZXdUZXh0c1trZXldOm51bGxcbiAgfVxuXG4gIGdldCBkYXRhKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5oaXRsaXN0RGF0YX1cblxuICBzZXQgZGF0YShkYXRhKXtcbiAgICB0aGlzLl9jb25maWcuaGl0bGlzdERhdGEgPSBkYXRhO1xuICB9XG4gIGdldCBkaXNhYmxlTmV4dEJ1dHRvbigpe1xuICAgIHJldHVybiB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMuZGlzYWJsZU5leHRCdXR0b24gfHwgZmFsc2VcbiAgfVxuICBnZXQgZGlzYWJsZVByZXZCdXR0b24oKXtcbiAgICByZXR1cm4gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLmRpc2FibGVQcmV2QnV0dG9uIHx8IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgdmlzaWJsZSBIaXRMaXN0IGNvbHVtbnMgb2YgT2JqZWN0IHR5cGU6IGB7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9YFxuICAgKiBAcmV0dXJucyB7QXJyYXkuPHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ30+fSBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSB2aXNpYmxlIEhpdExpc3QgY29sdW1uc1xuICAgKiAqL1xuICBnZXQgY29sdW1ucygpe3JldHVybiB0aGlzLl9jb25maWcuY29sdW1uc31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBhbGwgSGl0TGlzdCBjb2x1bW5zIG9mIE9iamVjdCB0eXBlOiBge2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfWBcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKiAqL1xuICBnZXQgYWxsQ29sdW1ucygpe3JldHVybiB0aGlzLl9jb25maWcuYWxsQ29sdW1uc31cblxuICBnZXQgaGl0bGlzdElEKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5jb21wb25lbnRJZH1cbiAgZ2V0IHBhZ2VJRCgpe3JldHVybiB0aGlzLl9jb25maWcucGFnZUlkfVxuICBnZXQgbGFuZ3VhZ2UoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmxhbmd1YWdlfVxuICBnZXQgc2VydmljZVVSTCgpe3JldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7dGhpcy5fY29uZmlnLnNlcnZpY2VVcmx9YH1cbiAgZ2V0IHBhZ2VTdGF0ZUlEKCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQYWdlU3RhdGVJZCcpPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUGFnZVN0YXRlSWQnKS52YWx1ZTp1bmRlZmluZWR9XG4gIGdldCBzb3J0aW5nUGFnaW5nVmFsdWVzKCl7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zb3J0aW5nUGFnaW5nVmFsdWVzIT1udWxsP3RoaXMuX2NvbmZpZy5zb3J0aW5nUGFnaW5nVmFsdWVzOnt9XG4gIH1cbiAgc2V0IHNvcnRpbmdQYWdpbmdWYWx1ZXModmFsKXtcbiAgICB0aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHZhbDtcbiAgfVxuXG4gIHN0YXRpYyBfZml4SnNvbkRhdGUoanNvbkRhdGUpIHtcbiAgICBpZiAoIShqc29uRGF0ZSAmJiBZICYmIFkuTGFuZy5pc0Z1bmN0aW9uKGpzb25EYXRlLnJlcGxhY2UpKSkge3JldHVybiBqc29uRGF0ZTt9XG4gICAgbGV0IGNvbnN0ciA9IGpzb25EYXRlLnJlcGxhY2UobmV3IFJlZ0V4cChcIl4vRGF0ZVxcXFwoKFstK10/XFxcXGQrKVxcXFwpLyRcIiksIFwibmV3IERhdGUoJDEpXCIpO1xuICAgIGlmIChjb25zdHIgPT0ganNvbkRhdGUpIHtyZXR1cm4ganNvbkRhdGU7fVxuICAgIHJldHVybiBldmFsKGNvbnN0cik7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgY29uZmlnIGZvciBhIEhpdExpc3QgaWYgaXQncyBpbml0aWFsaXNlZCBvbiB0aGUgcGFnZVxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgYWxsQ29sdW1uczpBcnJheSxcbiAgICogIGNhcHRpb25zOk9iamVjdCxcbiAgICogIGNsaWVudElkOlN0cmluZyxcbiAgICogIGNvbHVtbnM6QXJyYXksXG4gICAqICBjb21wb25lbnRJZDpTdHJpbmcsXG4gICAqICBoYXNoZWRQcm9qZWN0SWQ6U3RyaW5nLFxuICAgKiAgaGl0bGlzdERhdGE6QXJyYXksXG4gICAqICBsYW5ndWFnZTpOdW1iZXIsXG4gICAqICBuZXh0VGV4dDpTdHJpbmcsXG4gICAqICBub0luaXRpYWxMb2FkOkJvb2xlYW4sXG4gICAqICBwYWdlQWpheEVuYWJsZWQ6Qm9vbGVhbixcbiAgICogIHBhZ2VJZDpTdHJpbmcsXG4gICAqICBwcmV2VGV4dDpTdHJpbmcsXG4gICAqICBwcmV2aWV3OkJvb2xlYW4sXG4gICAqICBzZWFyY2hJdGVtczpBcnJheSxcbiAgICogIHNlYXJjaFZhbHVlczpBcnJheSxcbiAgICogIHNlcnZpY2VVcmw6U3RyaW5nLFxuICAgKiAgc2VydmljZVVybE1ldGFEYXRhOlN0cmluZyxcbiAgICogIHNob3dTaW5nbGVWaWV3T25Sb3dTZWxlY3Q6Qm9vbGVhbixcbiAgICogIHNpbmdsZVZpZXdBcGlVcmw6U3RyaW5nLFxuICAgKiAgc2luZ2xlVmlld0Zvcm1zQ2h1bmtBcGlVcmw6U3RyaW5nLFxuICAgKiAgc2luZ2xlVmlld1RleHRzOk9iamVjdCxcbiAgICogIHNvcnRpbmdQYWdpbmdWYWx1ZXM6T2JqZWN0LFxuICAgKiAgc3R5bGVzOk9iamVjdCxcbiAgICogIHZlcnNpb246U3RyaW5nXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqICovXG4gIHN0YXRpYyBnZXRPcmlnaW5hbENvbmZpZygpe1xuICAgIGxldCBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0Jyk7XG4gICAgaWYoc2NyaXB0cyl7XG4gICAgICBsZXQgaT1zY3JpcHRzLmxlbmd0aCxcbiAgICAgICAgICBjZmcgPSAvKFlcXC5SZXBvcnRhbFxcLkhpdExpc3QsKVxccyguKj8pXFwpOy9naTtcbiAgICAgIHdoaWxlKGktLSl7XG4gICAgICAgIGxldCBzY3JpcHQgPSBzY3JpcHRzW2ldLnRleHQ7XG4gICAgICAgIGlmKHNjcmlwdC5pbmRleE9mKCdZLlJlcG9ydGFsLkhpdExpc3QsJyk+LTEpe1xuICAgICAgICAgIGxldCBleGVjID0gY2ZnLmV4ZWMoc2NyaXB0KTtcbiAgICAgICAgICByZXR1cm4gKGV4ZWMhPW51bGwgJiYgZXhlY1syXSk/IEpTT04ucGFyc2UoZXhlY1syXSk6IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIaXRsaXN0IGNvbmZpZyBpcyBub3QgcHJlc2VudCBvbiB0aGUgcGFnZScpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpdGxpc3RTZXR1cFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1zZXR1cC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAwNy4wOS4yMDE2LlxuICovXG5cbmltcG9ydCBIaXRsaXN0RGF0YXNvdXJjZSBmcm9tIFwiLi9oaXRsaXN0LWRhdGFzb3VyY2VcIjtcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSBcInItcmVwb3J0YWwtYmFzZVwiO1xuXG53aW5kb3cuUmVwb3J0YWwgPSB3aW5kb3cuUmVwb3J0YWwgfHwge307XG5SZXBvcnRhbEJhc2UubWl4aW4od2luZG93LlJlcG9ydGFsLHtcbiAgSGl0bGlzdERhdGFzb3VyY2Vcbn0pO1xuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdERhdGFzb3VyY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==