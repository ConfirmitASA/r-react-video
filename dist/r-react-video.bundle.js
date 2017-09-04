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
	            return _react2.default.createElement(
	                'video',
	                { controls: true, className: 'Responses--media' },
	                _react2.default.createElement('source', { src: this.props.data.video, type: 'video/mp4' }),
	                'Your browser does not support the video tag.'
	            );
	        }
	    }, {
	        key: '_audioRenderer',
	        get: function get() {
	            return _react2.default.createElement('audio', { src: this.props.data.audio, type: 'audio/mp4', controls: true, className: 'Responses--media' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjhlN2IxODRmZDYwMWMwMjE3NDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L01ESWNvbi9kaXN0L01ESWNvbi5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9kaXN0L1Byb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vci1yZXBvcnRhbC1iYXNlL3NyYy9yZXBvcnRhbC1iYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWRUaWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlYWN0VmlkZW8vTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RWaWRlby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2luZ2xlVmlldy9OYXZCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmdsZVZpZXcvUmVzcG9uc2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9TaW5nbGVWaWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvRFNBYnN0cmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19IYXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlRmxhdHRlbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jcmVhdGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNQYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzRmxhdHRlbmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2hvcnRPdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdHJpY3RJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZ2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9ub29wLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdW5pb25CeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LWRhdGFzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1zZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbImxhdW5jaFZpZGVvSGl0bGlzdCIsImNvbmZpZ05hbWUiLCJ0aHVtYnNQbGFjZWhvbGRlciIsIkVycm9yIiwiVHlwZUVycm9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXBvcnRhbCIsIm1peGluIiwic3RvcmUiLCJyZXF1aXJlIiwidWlkIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJnbG9iYWwiLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwiaXNPYmplY3QiLCJpdCIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsImtleSIsInZhbHVlIiwiZiIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJhRnVuY3Rpb24iLCJmbiIsInRoYXQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJiIiwiYyIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJPIiwiUCIsIkF0dHJpYnV0ZXMiLCJlIiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiZGVmIiwiaGFzIiwiVEFHIiwidGFnIiwic3RhdCIsInByb3RvdHlwZSIsImNvbmZpZ3VyYWJsZSIsInNoYXJlZCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiSU9iamVjdCIsImRlZmluZWQiLCJjb2YiLCJBUkciLCJ0cnlHZXQiLCJUIiwiQiIsImNhbGxlZSIsInNwbGl0IiwiY3R4IiwiaGlkZSIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJ0eXBlIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiRiIsIklTX0dMT0JBTCIsIkciLCJJU19TVEFUSUMiLCJTIiwiSVNfUFJPVE8iLCJJU19CSU5EIiwiSVNfV1JBUCIsIlciLCJleHBQcm90byIsInRhcmdldCIsIm93biIsIm91dCIsIkMiLCJ2aXJ0dWFsIiwiUiIsIlUiLCJleGVjIiwiZG9jdW1lbnRFbGVtZW50IiwiTElCUkFSWSIsInJlZGVmaW5lIiwiSXRlcmF0b3JzIiwiJGl0ZXJDcmVhdGUiLCJzZXRUb1N0cmluZ1RhZyIsImdldFByb3RvdHlwZU9mIiwiSVRFUkFUT1IiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiQmFzZSIsIk5BTUUiLCJDb25zdHJ1Y3RvciIsIm5leHQiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInByb3RvIiwidmFsdWVzIiwiZW50cmllcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwibWV0aG9kcyIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiUHJvbWlzZUNhcGFiaWxpdHkiLCJyZXNvbHZlIiwicmVqZWN0IiwicHJvbWlzZSIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiU0hBUkVEIiwiaW52b2tlIiwiaHRtbCIsImNlbCIsInByb2Nlc3MiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImlkIiwibGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJhcmdzIiwiaSIsInB1c2giLCJuZXh0VGljayIsIm5vdyIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsInNldCIsImNsZWFyIiwidG9JbnRlZ2VyIiwibWluIiwicHgiLCJyYW5kb20iLCJjb25jYXQiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwidCIsInIiLCJyZWFjdCIsIm8iLCJuIiwibG9hZGVkIiwibSIsInAiLCJkZWZhdWx0IiwiTURJY29uIiwiX19lc01vZHVsZSIsIlJlZmVyZW5jZUVycm9yIiwidSIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJsIiwicHJvcHMiLCJmaWxsIiwic2l6ZSIsImljb24iLCJjb25zb2xlIiwibG9nIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicyIsImFzc2lnbiIsIl9pbWFnZU9ubG9hZCIsImJpbmQiLCJfaW1hZ2VPbmVycm9yIiwic3RhdGUiLCJzcmMiLCJwbGFjZWhvbGRlckhpZGRlbiIsInBsYWNlaG9sZGVyIiwic2l6aW5nIiwicG9zaXRpb24iLCJwcm9wb3J0aW9uIiwibG9hZGluZyIsImVycm9yIiwiX2xvYWQiLCJfY29tcHV0ZURpbWVuc2lvbnMiLCJfY29tcHV0ZVByb3BvcnRpb24iLCJhc3BlY3QiLCJzZXRTdGF0ZSIsImluZGV4T2YiLCJtYXAiLCJwYXJzZUZsb2F0Iiwic3Vic3RyaW5nIiwiZCIsInByZWxvYWQiLCJmYWRlIiwiaCIsInBsYWNlaG9sZGVyU2l6aW5nIiwiZyIsImFsdCIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInJvbGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJkaXNwbGF5Iiwib25Mb2FkIiwib25FcnJvciIsIl9yZXNldCIsInByZXZlbnRMb2FkIiwiQ29tcG9uZW50IiwiUHJvbWlzZSIsImZvcmJpZGRlbkZpZWxkIiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpbmRleCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyYWJsZSIsIml0ZXJGbiIsInN0ZXAiLCJpdGVyYXRvciIsInJlc3VsdCIsImRvbmUiLCJ1biIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiQXJyYXlQcm90byIsIkFycmF5IiwicmV0IiwiZGVzY3JpcHRvciIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIml0ZXIiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwidGhlbiIsInRhc2siLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50IiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsImdldEtleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImFycmF5SW5kZXhPZiIsIm5hbWVzIiwiJGtleXMiLCJ2IiwibmV3UHJvbWlzZUNhcGFiaWxpdHkiLCJ4IiwicHJvbWlzZUNhcGFiaWxpdHkiLCJERVNDUklQVE9SUyIsIlNQRUNJRVMiLCJLRVkiLCJEIiwiVE9fU1RSSU5HIiwicG9zIiwiU3RyaW5nIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsIm1heCIsInZhbCIsInZhbHVlT2YiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJhZGRUb1Vuc2NvcGFibGVzIiwiaXRlcmF0ZWQiLCJfdCIsIl9pIiwiX2siLCJBcmd1bWVudHMiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJtaWNyb3Rhc2siLCJuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSIsInBlcmZvcm0iLCJwcm9taXNlUmVzb2x2ZSIsIlBST01JU0UiLCIkUHJvbWlzZSIsImVtcHR5IiwiSW50ZXJuYWwiLCJuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkiLCJPd25Qcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJzYW1lQ29uc3RydWN0b3IiLCJpc1RoZW5hYmxlIiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsIm9uVW5oYW5kbGVkIiwidW5oYW5kbGVkIiwiaXNVbmhhbmRsZWQiLCJlbWl0Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJyZWFzb24iLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJ3cmFwcGVyIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJjYXBhYmlsaXR5IiwiYWxsIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCIkYXQiLCJwb2ludCIsIlRPX1NUUklOR19UQUciLCJET01JdGVyYWJsZXMiLCJDb2xsZWN0aW9uIiwiUmVwb3J0YWxCYXNlIiwibGV2ZWwiLCJpc0FycmF5IiwiX2xvZ2dlciIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50Iiwic3RyIiwicmVwbGFjZSIsIlVSTCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZW5kIiwidmFyaWFibGUiLCJxdWVyeSIsImxvY2F0aW9uIiwic2VhcmNoIiwidmFycyIsInBhaXIiLCJ0b0xvd2VyQ2FzZSIsInBhdGgiLCJvcmlnaW4iLCJwYXRobmFtZSIsImZvckVhY2giLCJhUGFpciIsImpvaW4iLCJNRURJQV9UWVBFUyIsIkltYWdlR3JpZFRpbGUiLCJhY3Rpb25CdXR0b24iLCJhY3Rpb25JY29uIiwib25TZWxlY3QiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJfY29tcHV0ZVRpbGVUeXBlIiwibWVkaWF0eXBlIiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJpY29uU2VydmVyIiwiZXNjYXBlIiwiaWNvbnMiLCJhdWRpbyIsInZpZGVvIiwidW5rbm93biIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwibnVtYmVyIiwiZnVuYyIsIkltYWdlR3JpZCIsIml0ZW1DbGlja0hhbmRsZXIiLCJpdGVtIiwiaXRlbXMiLCJkdW1teUl0ZW1zIiwicmVuZGVyRHVtbXlJdGVtcyIsImNvdW50IiwiYXJyYXkiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsIk5hdmlnYXRpb24iLCJjb25maWciLCJwYWdpbmF0aW9uIiwiY29udGludW91c05hdmlnYXRpb24iLCJwYWdpbmdOYXZpZ2F0aW9uIiwibG9hZE1vcmUiLCJkaXNhYmxlTmV4dEJ1dHRvbiIsInRleHRBbGlnbiIsImxvYWRQcmV2aW91c1BhZ2UiLCJsb2FkTmV4dFBhZ2UiLCJkaXNhYmxlUHJldkJ1dHRvbiIsInBhZ2VJbmZvIiwidHJhbnNsYXRlIiwiUmVhY3RWaWRlbyIsIkRTIiwiY29tcG9uZW50Iiwic2luZ2xlVmlld01vZGUiLCJzaW5nbGVWaWV3IiwibGluayIsInNpbmdsZVZpZXdWaXNpYmxlIiwic2luZ2xlVmlld0Rpc2FibGVQcmV2Iiwic2luZ2xlVmlld0Rpc2FibGVOZXh0IiwiaTE4biIsInJldHVyblRvR3JpZCIsImxvYWRQcmV2aW91c0l0ZW0iLCJuYXZpZ2F0ZUl0ZW1zIiwibG9hZE5leHRJdGVtIiwiZ2V0U2luZ2xlVmlld05hdlN0YXRlIiwiYWN0aW9uSWNvbkNsaWNrIiwicmVuZGVyU2luZ2xlVmlldyIsImNhbkVkaXQiLCJyZW5kZXJOYXZpZ2F0aW9uIiwiZGF0YUxvYWRpbmdNZXNzYWdlIiwiZ2V0UGFnZUluZm8iLCJuYXZpZ2F0aW9uUHJvcHMiLCJpbmRpdmlkdWFsUmVjb3Jkc1F1ZXN0aW9uSWRzIiwiaW5kaXZpZHVhbFJlY29yZHNLZXlMYWJlbHMiLCJyZXZlcnNlIiwiYWxsQ29sdW1ucyIsImZpbHRlciIsInJlY29yZCIsImxhYmVsIiwiaXJJZHMiLCJjb2x1bW4iLCJtZXNzYWdlIiwiZGlyZWN0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJpdGVtc0xlbmd0aCIsImN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4IiwibmV4dEluZGV4IiwibG9hZEl0ZW1Gcm9tUHJldmlvdXNQYWdlIiwibG9hZEl0ZW1Gcm9tTmV4dFBhZ2UiLCJwcm9taXNlZEl0ZW1zIiwic2luZ2xlVmlld0RhdGEiLCJuZXdJdGVtcyIsInByZXZTdGF0ZSIsImF0RGF0YUxlZnRCb3VuZGFyeUNhbkxvYWQiLCJhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCIsImN1cnJlbnRJdGVtSW5kZXgiLCJpbmRpdmlkdWFsUmVjb3JkcyIsImdldExhYmVsc0Zvck1haW5GaWVsZHMiLCJnZXRMYWJlbHNGb3JJbmRpdmlkdWFsUmVjb3JkcyIsIk5hdkJ1dHRvbiIsIlJlc3BvbnNlcyIsImNvbHVtbnMiLCJjb2x1bW5zTWFwIiwibWVkaWEiLCJkYXRlIiwiaW50ZXJ2aWV3X3N0YXJ0IiwiaW50ZXJ2aWV3X2VuZCIsIm1lZGlhSXRlbSIsInFJRCIsIk5hdkJhciIsInJldHVyblRvR3JpZEFjdGlvbiIsIlNpbmdsZVZpZXciLCJuYXZCYXJQcm9wcyIsImljX3N0YXIiLCJpY19zdGFyX2JvcmRlciIsImljX2Fycm93X2JhY2siLCJpY19hcnJvd19mb3J3YXJkIiwiaWNfdmlld19tb2R1bGUiLCJEU0Fic3RyYWN0aW9uIiwib3B0aW9ucyIsImxvY2F0aW9uRGVzZXJpYWxpemUiLCJzZXR1cERhdGFMaXN0ZW5lciIsIlkiLCJHbG9iYWwiLCJvbiIsImluaXRpYWxpc2VDb25maWciLCJtb2RpZmllciIsImZpbHRlckluZm8iLCJpbml0aWFsRGF0YUxvYWQiLCJwcm9jZXNzRGF0YSIsImNhdGNoIiwiaGFuZGxlRGF0YUxvYWRpbmdFcnJvciIsInRyaW0iLCJtb2RlIiwibmV3RGF0YSIsImRhdGFSb3ciLCJyb3dJbmRleCIsInBhcnNlZFJvdyIsImlyIiwiZGF0YUZpZWxkcyIsImNvbHVtbklEIiwicHJlcGFyZURhdGEiLCJyZXNwb25zZWlkIiwic2xpbmsiLCJwb3AiLCJnZW5lcmF0ZU1lZGlhTGluayIsImZpbGVOYW1lIiwiZHNOYW1lIiwic3VydmV5SUQiLCJyZXBvcnRpZCIsIm5leHRQYWdlIiwicHJldmlvdXNQYWdlIiwicmVzcG9uc2UiLCJpbml0aWFsTG9hZCIsImhhc1BhZ2VJbmZvIiwic29ydGluZ1BhZ2luZ1ZhbHVlcyIsInRvdGFsSGl0cyIsImZyZWVHbG9iYWwiLCJmcmVlU2VsZiIsInJvb3QiLCJiYXNlSXNOYXRpdmUiLCJnZXRWYWx1ZSIsImdldE5hdGl2ZSIsImlzT2JqZWN0TGlrZSIsImdldFJhd1RhZyIsIm9iamVjdFRvU3RyaW5nIiwibnVsbFRhZyIsInVuZGVmaW5lZFRhZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJiYXNlR2V0VGFnIiwibGlzdENhY2hlQ2xlYXIiLCJsaXN0Q2FjaGVEZWxldGUiLCJsaXN0Q2FjaGVHZXQiLCJsaXN0Q2FjaGVIYXMiLCJsaXN0Q2FjaGVTZXQiLCJMaXN0Q2FjaGUiLCJlbnRyeSIsImVxIiwiYXNzb2NJbmRleE9mIiwiaXNLZXlhYmxlIiwiZ2V0TWFwRGF0YSIsIl9fZGF0YV9fIiwibmF0aXZlQ3JlYXRlIiwiaXNTeW1ib2wiLCJJTkZJTklUWSIsInRvS2V5IiwiTWFwIiwibWFwQ2FjaGVDbGVhciIsIm1hcENhY2hlRGVsZXRlIiwibWFwQ2FjaGVHZXQiLCJtYXBDYWNoZUhhcyIsIm1hcENhY2hlU2V0IiwiTWFwQ2FjaGUiLCJyZUlzRGVlcFByb3AiLCJyZUlzUGxhaW5Qcm9wIiwiaXNLZXkiLCJ0ZXN0Iiwic2V0VG9BcnJheSIsImlkZW50aXR5IiwiYmFzZUlzQXJndW1lbnRzIiwib2JqZWN0UHJvdG8iLCJpc0FyZ3VtZW50cyIsIk1BWF9TQUZFX0lOVEVHRVIiLCJpc0xlbmd0aCIsInN5bWJvbFRhZyIsIlNldCIsInNldENhY2hlQWRkIiwic2V0Q2FjaGVIYXMiLCJTZXRDYWNoZSIsImFkZCIsInN0YWNrQ2xlYXIiLCJzdGFja0RlbGV0ZSIsInN0YWNrR2V0Iiwic3RhY2tIYXMiLCJzdGFja1NldCIsIlN0YWNrIiwiYXJyYXlQdXNoIiwib2Zmc2V0IiwiY2FzdFBhdGgiLCJiYXNlR2V0IiwiYmFzZUlzRXF1YWxEZWVwIiwiYmFzZUlzRXF1YWwiLCJvdGhlciIsImJpdG1hc2siLCJjdXN0b21pemVyIiwic3RhY2siLCJjYWNoZUhhcyIsImNhY2hlIiwic3RyaW5nVG9QYXRoIiwiYXJyYXlTb21lIiwiQ09NUEFSRV9QQVJUSUFMX0ZMQUciLCJDT01QQVJFX1VOT1JERVJFRF9GTEFHIiwiZXF1YWxBcnJheXMiLCJlcXVhbEZ1bmMiLCJpc1BhcnRpYWwiLCJhcnJMZW5ndGgiLCJvdGhMZW5ndGgiLCJzdGFja2VkIiwic2VlbiIsImFyclZhbHVlIiwib3RoVmFsdWUiLCJjb21wYXJlZCIsIm90aEluZGV4IiwicmVJc1VpbnQiLCJpc0luZGV4IiwiaXNTdHJpY3RDb21wYXJhYmxlIiwibWF0Y2hlc1N0cmljdENvbXBhcmFibGUiLCJzcmNWYWx1ZSIsImZ1bmNQcm90byIsImZ1bmNUb1N0cmluZyIsInRvU291cmNlIiwiaXNGdW5jdGlvbiIsImlzQXJyYXlMaWtlIiwic3R1YkZhbHNlIiwiZnJlZUV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwibmF0aXZlSXNCdWZmZXIiLCJpc0J1ZmZlciIsImFzeW5jVGFnIiwiZnVuY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwiYmFzZUlzVHlwZWRBcnJheSIsImJhc2VVbmFyeSIsIm5vZGVVdGlsIiwibm9kZUlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheSIsImFycmF5TGlrZUtleXMiLCJiYXNlS2V5cyIsIkRhdGFWaWV3IiwiaGFzaENsZWFyIiwiaGFzaERlbGV0ZSIsImhhc2hHZXQiLCJoYXNoSGFzIiwiaGFzaFNldCIsIkhhc2giLCJVaW50OEFycmF5IiwiV2Vha01hcCIsInRoaXNBcmciLCJhcnJheUZpbHRlciIsInByZWRpY2F0ZSIsInJlc0luZGV4IiwiYmFzZUluZGV4T2YiLCJhcnJheUluY2x1ZGVzIiwiYXJyYXlJbmNsdWRlc1dpdGgiLCJjb21wYXJhdG9yIiwiYmFzZVRpbWVzIiwiaW5oZXJpdGVkIiwiaXNBcnIiLCJpc0FyZyIsImlzQnVmZiIsImlzVHlwZSIsInNraXBJbmRleGVzIiwiYXJyYXlNYXAiLCJpdGVyYXRlZSIsImJhc2VGaW5kSW5kZXgiLCJmcm9tUmlnaHQiLCJpc0ZsYXR0ZW5hYmxlIiwiYmFzZUZsYXR0ZW4iLCJkZXB0aCIsImlzU3RyaWN0IiwiYmFzZUdldEFsbEtleXMiLCJrZXlzRnVuYyIsInN5bWJvbHNGdW5jIiwiYmFzZUhhc0luIiwiYmFzZUlzTmFOIiwic3RyaWN0SW5kZXhPZiIsImFyZ3NUYWciLCJlcXVhbEJ5VGFnIiwiZXF1YWxPYmplY3RzIiwiZ2V0VGFnIiwiYXJyYXlUYWciLCJvYmplY3RUYWciLCJvYmpJc0FyciIsIm90aElzQXJyIiwib2JqVGFnIiwib3RoVGFnIiwib2JqSXNPYmoiLCJvdGhJc09iaiIsImlzU2FtZVRhZyIsIm9iaklzV3JhcHBlZCIsIm90aElzV3JhcHBlZCIsIm9ialVud3JhcHBlZCIsIm90aFVud3JhcHBlZCIsImJhc2VJc01hdGNoIiwibWF0Y2hEYXRhIiwibm9DdXN0b21pemVyIiwib2JqVmFsdWUiLCJpc01hc2tlZCIsInJlUmVnRXhwQ2hhciIsInJlSXNIb3N0Q3RvciIsInJlSXNOYXRpdmUiLCJSZWdFeHAiLCJwYXR0ZXJuIiwiYm9vbFRhZyIsImRhdGVUYWciLCJlcnJvclRhZyIsIm1hcFRhZyIsIm51bWJlclRhZyIsInJlZ2V4cFRhZyIsInNldFRhZyIsInN0cmluZ1RhZyIsIndlYWtNYXBUYWciLCJhcnJheUJ1ZmZlclRhZyIsImRhdGFWaWV3VGFnIiwiZmxvYXQzMlRhZyIsImZsb2F0NjRUYWciLCJpbnQ4VGFnIiwiaW50MTZUYWciLCJpbnQzMlRhZyIsInVpbnQ4VGFnIiwidWludDhDbGFtcGVkVGFnIiwidWludDE2VGFnIiwidWludDMyVGFnIiwidHlwZWRBcnJheVRhZ3MiLCJiYXNlTWF0Y2hlcyIsImJhc2VNYXRjaGVzUHJvcGVydHkiLCJwcm9wZXJ0eSIsImJhc2VJdGVyYXRlZSIsImlzUHJvdG90eXBlIiwibmF0aXZlS2V5cyIsImdldE1hdGNoRGF0YSIsImhhc0luIiwiYmFzZVByb3BlcnR5IiwiYmFzZVByb3BlcnR5RGVlcCIsIm92ZXJSZXN0Iiwic2V0VG9TdHJpbmciLCJiYXNlUmVzdCIsInN0YXJ0IiwiY29uc3RhbnQiLCJiYXNlU2V0VG9TdHJpbmciLCJzeW1ib2xQcm90byIsInN5bWJvbFRvU3RyaW5nIiwiYmFzZVRvU3RyaW5nIiwiY3JlYXRlU2V0IiwiTEFSR0VfQVJSQVlfU0laRSIsImJhc2VVbmlxIiwiaW5jbHVkZXMiLCJpc0NvbW1vbiIsIm91dGVyIiwiY29tcHV0ZWQiLCJzZWVuSW5kZXgiLCJjb3JlSnNEYXRhIiwibm9vcCIsIm1hcFRvQXJyYXkiLCJzeW1ib2xWYWx1ZU9mIiwiYnl0ZUxlbmd0aCIsImJ5dGVPZmZzZXQiLCJidWZmZXIiLCJjb252ZXJ0IiwiZ2V0QWxsS2V5cyIsIm9ialByb3BzIiwib2JqTGVuZ3RoIiwib3RoUHJvcHMiLCJza2lwQ3RvciIsIm9iakN0b3IiLCJvdGhDdG9yIiwiZ2V0U3ltYm9scyIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwiaXNPd24iLCJ1bm1hc2tlZCIsInN0dWJBcnJheSIsIm5hdGl2ZUdldFN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2wiLCJwcm9taXNlVGFnIiwiZGF0YVZpZXdDdG9yU3RyaW5nIiwibWFwQ3RvclN0cmluZyIsInByb21pc2VDdG9yU3RyaW5nIiwic2V0Q3RvclN0cmluZyIsIndlYWtNYXBDdG9yU3RyaW5nIiwiQXJyYXlCdWZmZXIiLCJDdG9yIiwiY3RvclN0cmluZyIsImhhc1BhdGgiLCJoYXNGdW5jIiwiSEFTSF9VTkRFRklORUQiLCJzcHJlYWRhYmxlU3ltYm9sIiwiaXNDb25jYXRTcHJlYWRhYmxlIiwibWFza1NyY0tleSIsImFycmF5UHJvdG8iLCJzcGxpY2UiLCJsYXN0SW5kZXgiLCJtZW1vaXplIiwiTUFYX01FTU9JWkVfU0laRSIsIm1lbW9pemVDYXBwZWQiLCJvdmVyQXJnIiwiZnJlZVByb2Nlc3MiLCJiaW5kaW5nIiwidHJhbnNmb3JtIiwiYXJnIiwibmF0aXZlTWF4Iiwib3RoZXJBcmdzIiwic2hvcnRPdXQiLCJIT1RfQ09VTlQiLCJIT1RfU1BBTiIsIm5hdGl2ZU5vdyIsIkRhdGUiLCJsYXN0Q2FsbGVkIiwic3RhbXAiLCJwYWlycyIsInJlTGVhZGluZ0RvdCIsInJlUHJvcE5hbWUiLCJyZUVzY2FwZUNoYXIiLCJtYXRjaCIsInF1b3RlIiwiZGVmYXVsdFZhbHVlIiwiaXNBcnJheUxpa2VPYmplY3QiLCJGVU5DX0VSUk9SX1RFWFQiLCJyZXNvbHZlciIsIm1lbW9pemVkIiwiQ2FjaGUiLCJ1bmlvbkJ5IiwiYXJyYXlzIiwiSGl0bGlzdERhdGFzb3VyY2UiLCJfc2VhcmNoVmFsdWVzIiwicmVxdWVzdFJlc3BvbnNlIiwiX3NraXBQYWdlIiwiaXNQYWdpbmciLCJoaXRsaXN0SUQiLCJwYXJhbXMiLCJQYWdlSWQiLCJwYWdlSUQiLCJwYWdlU3RhdGVJZCIsInBhZ2VTdGF0ZUlEIiwiUHJldmlldyIsInByZXZpZXciLCJhdHRybmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYWdpbmdWYWx1ZXMiLCJwYWdlTnVtYmVyIiwicGFnaW5nRm9yd2FyZCIsInByb21pc2VSZXF1ZXN0Iiwic2VydmljZVVSTCIsInNlcmlhbGl6ZVBhcmFtcyIsInBhcnNlUmVzcG9uc2UiLCJwYXJzZSIsIl9zcHYiLCJwdiIsInN0YXJ0SWQiLCJsYXN0U3RhcnRJZCIsImZpcnN0U3RhcnRJZCIsInN0YXJ0VmFsdWUiLCJsYXN0U3RhcnRWYWx1ZSIsImZpcnN0U3RhcnRWYWx1ZSIsIkhpdGxpc3RTZXR1cCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJfY29uZmlnIiwiZ2V0T3JpZ2luYWxDb25maWciLCJfZWxlbWVudFR5cGUiLCJIaXRMaXN0RWxlbWVudFR5cGUiLCJfb3AiLCJTZWFyY2hhYmxlTGlzdE9wZXJhdG9yIiwiY2FwdGlvbnMiLCJzaW5nbGVWaWV3VGV4dHMiLCJoaXRsaXN0RGF0YSIsImNvbXBvbmVudElkIiwicGFnZUlkIiwibGFuZ3VhZ2UiLCJzZXJ2aWNlVXJsIiwicXVlcnlTZWxlY3RvciIsImpzb25EYXRlIiwiTGFuZyIsImNvbnN0ciIsImV2YWwiLCJzY3JpcHRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNmZyIsInNjcmlwdCIsInRleHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7K1FDdENBOzs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtBLEtBQU1BLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFVBQUQsRUFBdUM7QUFBQSxPQUEzQkMsaUJBQTJCLHVFQUFULElBQVM7O0FBQ2hFLE9BQUcsQ0FBQ0QsVUFBSixFQUFlO0FBQ2IsV0FBTSxJQUFJRSxLQUFKLENB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R0FBa0JMLE9BQU9LLFFBQVAsSUFBbUIsRUFBckM7QUFDQSx5QkFBYUMsS0FBYixDQUFtQk4sT0FBT0ssUUFBMUIsRUFBbUM7QUFDakNzNEI7QUFEaUMsRUFBbkMiLCJmaWxlIjoici1yZWFjdC12aWRlby5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiOGU3YjE4NGZkNjAxYzAyMTc0MSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDExLjAxLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmltcG9ydCBtYWluQ1NTIGZyb20gJy4vbWFpbi5jc3MnO1xyXG5pbXBvcnQgUmVhY3RWaWRlbyBmcm9tICcuL1JlYWN0VmlkZW8nO1xyXG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gJ3ItcmVwb3J0YWwtYmFzZSc7XHJcblxyXG4vKipcclxuICogaW5pdGlhbGlzZSBIaXRMaXN0IG9uIERPTUNvbnRlbnRMb2FkZWQgZm9yIGEgcXVpY2tlciBjb2xkLXN0YXJ0LCBubyBuZWVkIHRvIHdhaXQgZm9yIHRoZSBvcmlnaW5hbCBIaXRMaXN0XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWdOYW1lIC0gbmFtZSBvZiB0aGUgdmFyaWFibGUgcGFzc2VkIHRvIERPTSBhcyBhIGNvbmZpZ1xyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt0aHVtYnNQbGFjZWhvbGRlcj10cnVlXSAtIGRpc3BsYXkgdGh1bWJzIGFzIGltYWdlIHBsYWNlaG9sZGVycyBpbnN0ZWFkIG9mIG1lZGlhIGljb25zXHJcbiAqICovXHJcbmNvbnN0IGxhdW5jaFZpZGVvSGl0bGlzdCA9IChjb25maWdOYW1lLHRodW1ic1BsYWNlaG9sZGVyPXRydWUpID0+IHtcclxuICBpZighY29uZmlnTmFtZSl7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbmZpZyBpcyBub3Qgc3BlY2lmaWVkIScpXHJcbiAgfSBlbHNlIGlmKGNvbmZpZ05hbWUgJiYgdHlwZW9mIGNvbmZpZ05hbWUgIT0gJ3N0cmluZycpe1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgY29uZmlnIG5hbWUgbXVzdCBiZSBhIHN0cmluZywgbm90IGEgJHt0eXBlb2YgY29uZmlnTmFtZX1gKVxyXG4gIH1cclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgIDxSZWFjdFZpZGVvXHJcbiAgICAgIGNvbmZpZz17Y29uZmlnTmFtZX1cclxuICAgICAgdGh1bWJzUGxhY2Vob2xkZXI9e3RodW1ic1BsYWNlaG9sZGVyfVxyXG4gICAgICB2ZXJib3NlXHJcbiAgICAgIC8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXHJcbiAgfSk7XHJcbn07XHJcblxyXG53aW5kb3cuUmVwb3J0YWwgPSB3aW5kb3cuUmVwb3J0YWwgfHwge307XHJcblJlcG9ydGFsQmFzZS5taXhpbih3aW5kb3cuUmVwb3J0YWwse1xyXG4gIGxhdW5jaFZpZGVvSGl0bGlzdFxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4wJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGtleSBpbiBleHBvcnRzKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQocmVxdWlyZShcInJlYWN0XCIpKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW1wicmVhY3RcIl0sdCk7ZWxzZXt2YXIgcj10KFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP3JlcXVpcmUoXCJyZWFjdFwiKTplLnJlYWN0KTtmb3IodmFyIG8gaW4gcikoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czplKVtvXT1yW29dfX0odGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChvKXtpZihyW29dKXJldHVybiByW29dLmV4cG9ydHM7dmFyIG49cltvXT17ZXhwb3J0czp7fSxpZDpvLGxvYWRlZDohMX07cmV0dXJuIGVbb10uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sb2FkZWQ9ITAsbi5leHBvcnRzfXZhciByPXt9O3JldHVybiB0Lm09ZSx0LmM9cix0LnA9XCJcIix0KDApfShbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPXIoMSk7dC5kZWZhdWx0PW8uTURJY29uLGUuZXhwb3J0cz10LmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBpKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9ZnVuY3Rpb24gdShlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuTURJY29uPXZvaWQgMDt2YXIgYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIG89dFtyXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LHIsbyl7cmV0dXJuIHImJmUodC5wcm90b3R5cGUsciksbyYmZSh0LG8pLHR9fSgpLGY9cigyKSxsPW8oZiksYT10Lk1ESWNvbj1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7cmV0dXJuIG4odGhpcyx0KSxpKHRoaXMsKHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9cmV0dXJuIHUodCxlKSxjKHQsW3trZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucHJvcHMsdD1lLmZpbGwscj1lLnNpemUsbz1lLmljb24sbj1lLmNoaWxkcmVuO3JldHVybiBjb25zb2xlLmxvZyh0LHIsbyxuKSxsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN2Z1wiLHt4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsZmlsbDp0LHdpZHRoOnIsaGVpZ2h0OnIsdmlld0JveDpcIjAgMCAyNCAyNFwiLGNoaWxkcmVuOm98fG59KX19XSksdH0oZi5QdXJlQ29tcG9uZW50KTthLmRlZmF1bHRQcm9wcz17c2l6ZToyNCxmaWxsOlwicmdiYSgwLDAsMCwuODUpXCJ9fSxmdW5jdGlvbih0LHIpe3QuZXhwb3J0cz1lfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NREljb24uYnVuZGxlLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vTURJY29uL2Rpc3QvTURJY29uLmJ1bmRsZS5qcyIsIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQocmVxdWlyZShcInJlYWN0XCIpKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW1wicmVhY3RcIl0sdCk7ZWxzZXt2YXIgbz10KFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP3JlcXVpcmUoXCJyZWFjdFwiKTplLnJlYWN0KTtmb3IodmFyIHIgaW4gbykoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czplKVtyXT1vW3JdfX0odGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihvW3JdKXJldHVybiBvW3JdLmV4cG9ydHM7dmFyIG49b1tyXT17ZXhwb3J0czp7fSxpZDpyLGxvYWRlZDohMX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sb2FkZWQ9ITAsbi5leHBvcnRzfXZhciBvPXt9O3JldHVybiB0Lm09ZSx0LmM9byx0LnA9XCJcIix0KDApfShbZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fWZ1bmN0aW9uIG4oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGkoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiBhKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG89YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBvKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLHIpJiYoZVtyXT1vW3JdKX1yZXR1cm4gZX0sbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIHI9dFtvXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LG8scil7cmV0dXJuIG8mJmUodC5wcm90b3R5cGUsbyksciYmZSh0LHIpLHR9fSgpLHA9bygxKSx1PXIocCksYz1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpe24odGhpcyx0KTt2YXIgbz1pKHRoaXMsKHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcyxlKSk7cmV0dXJuIG8uX2ltYWdlT25sb2FkPW8uX2ltYWdlT25sb2FkLmJpbmQobyksby5faW1hZ2VPbmVycm9yPW8uX2ltYWdlT25lcnJvci5iaW5kKG8pLG8uc3RhdGU9e3NyYzp2b2lkIDAscGxhY2Vob2xkZXJIaWRkZW46IW8ucHJvcHMucGxhY2Vob2xkZXIsc2l6aW5nOm8ucHJvcHMuc2l6aW5nP28ucHJvcHMuc2l6aW5nOm51bGwscG9zaXRpb246by5wcm9wcy5wb3NpdGlvbj9vLnByb3BzLnBvc2l0aW9uOlwiY2VudGVyXCIscHJvcG9ydGlvbjowLGxvYWRlZDohMSxsb2FkaW5nOiExLGVycm9yOiExfSxvfXJldHVybiBhKHQsZSksbCh0LFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX2xvYWQoKSx0aGlzLl9jb21wdXRlRGltZW5zaW9ucygpLHRoaXMuX2NvbXB1dGVQcm9wb3J0aW9uKHRoaXMucHJvcHMuYXNwZWN0KX19LHtrZXk6XCJfY29tcHV0ZURpbWVuc2lvbnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucHJvcHMsdD1lLndpZHRoLG89ZS5oZWlnaHQ7dGhpcy5zZXRTdGF0ZSh7d2lkdGg6aXNOYU4odCk/dDp0K1wicHhcIixoZWlnaHQ6aXNOYU4obyk/bzpvK1wicHhcIn0pfX0se2tleTpcIl9jb21wdXRlUHJvcG9ydGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUmJmUuaW5kZXhPZihcIjpcIik+LTEpe3ZhciB0PWUuc3BsaXQoXCI6XCIpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gcGFyc2VGbG9hdChlKX0pO2lzTmFOKHRbMF0pfHxpc05hTih0WzFdKXx8dGhpcy5zZXRTdGF0ZShmdW5jdGlvbihlKXtpZighaXNOYU4ocGFyc2VGbG9hdChlLndpZHRoKSkpcmV0dXJue3Byb3BvcnRpb246KHBhcnNlRmxvYXQoZS53aWR0aCkqKHRbMV0vdFswXSkpLnRvU3RyaW5nKCkrZS53aWR0aC5zdWJzdHJpbmcocGFyc2VGbG9hdChlLndpZHRoKS50b1N0cmluZygpLmxlbmd0aCksaGVpZ2h0OlwiYXV0b1wifX0pfX19LHtrZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuc3RhdGUsdD1lLndpZHRoLG89ZS5oZWlnaHQscj1lLnByb3BvcnRpb24sbj1lLnNyYyxpPWUuc2l6aW5nLGE9ZS5wb3NpdGlvbixzPWUubG9hZGluZyxsPWUubG9hZGVkLHA9ZS5wbGFjZWhvbGRlckhpZGRlbixjPXRoaXMucHJvcHMsZD1jLnByZWxvYWQsZj1jLmZhZGUsaD1jLnBsYWNlaG9sZGVyU2l6aW5nLGc9Yy5wbGFjZWhvbGRlcixtPWMuYWx0O3JldHVybiB1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJQcm9wb3J0aW9uYWxJbWFnZVwiLHN0eWxlOnt3aWR0aDp0LGhlaWdodDpvLHBhZGRpbmdUb3A6cn19LHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcInNpemVkSW1nRGl2XCIscm9sZTpcImltZ1wiLHN0eWxlOntiYWNrZ3JvdW5kSW1hZ2U6bj9cInVybChcIituK1wiKVwiOnZvaWQgMCxiYWNrZ3JvdW5kU2l6ZTppLGJhY2tncm91bmRQb3NpdGlvbjphLGJhY2tncm91bmRSZXBlYXQ6aT9cIm5vLXJlcGVhdFwiOlwiaW5pdGlhbFwiLGRpc3BsYXk6aT9cImJsb2NrXCI6XCJub25lXCJ9fSksdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3JjOm4sYWx0Om0sb25Mb2FkOnRoaXMuX2ltYWdlT25sb2FkLG9uRXJyb3I6dGhpcy5faW1hZ2VPbmVycm9yLHN0eWxlOntkaXNwbGF5Omk/XCJub25lXCI6XCJibG9ja1wifX0pLHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOntiYWNrZ3JvdW5kSW1hZ2U6Zz9cInVybChcIitnK1wiKVwiOnZvaWQgMCxiYWNrZ3JvdW5kU2l6ZTpoP2g6aSxiYWNrZ3JvdW5kUG9zaXRpb246YSxiYWNrZ3JvdW5kUmVwZWF0Omk/XCJuby1yZXBlYXRcIjpcImluaXRpYWxcIn0sY2xhc3NOYW1lOlwiaW1hZ2VQbGFjZWhvbGRlciBcIisocCYmXCJoaWRkZW5cIikrXCIgXCIrKGQmJmYmJiFzJiZsJiZcImZhZGVkLW91dFwiKX0pKX19LHtrZXk6XCJfaW1hZ2VPbmxvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ITEsbG9hZGVkOiEwLGVycm9yOiExfSl9fSx7a2V5OlwiX2ltYWdlT25lcnJvclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXRTdGF0ZShzKHt9LHRoaXMuX3Jlc2V0KCkse2Vycm9yOiEwfSkpfX0se2tleTpcIl9yZXNldFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJue3NyYzp2b2lkIDAsbG9hZGluZzohMSxsb2FkZWQ6ITEsZXJyb3I6ITF9fX0se2tleTpcIl9sb2FkXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9yZXNldCgpO2lmKCF0aGlzLnByb3BzLnByZXZlbnRMb2FkKXt2YXIgdD10aGlzLnByb3BzLnNyYztlLnNyYyE9PXQmJihlPXMoe30sZSx7c3JjOnQ/dDp2b2lkIDAsbG9hZGluZzohIXR9KSl9dGhpcy5zZXRTdGF0ZShlKX19XSksdH0odS5kZWZhdWx0LkNvbXBvbmVudCk7dC5kZWZhdWx0PWN9LGZ1bmN0aW9uKHQsbyl7dC5leHBvcnRzPWV9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L1Byb3BvcnRpb25hbEltYWdlL2Rpc3QvUHJvcG9ydGlvbmFsSW1hZ2UuYnVuZGxlLmpzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsInZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IExJQlJBUlkgPyBmdW5jdGlvbiAoYSwgYikge1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn0gOiBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIGlmIChwcm9taXNlLl9oID09IDEpIHJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZWFjdGlvbjtcbiAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYgKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKSByZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYgKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpIHJldHVybiB4O1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZSh0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJpbXBvcnQgUHJvbWlzZSBmcm9tICdjb3JlLWpzL2xpYnJhcnkvZXM2L3Byb21pc2UnO1xuXG5jbGFzcyBSZXBvcnRhbEJhc2Uge1xuXG4gIC8qKlxuICAgKiBDb3BpZXMgcHJvcHMgZnJvbSBhIHNvdXJjZSBvYmplY3QgdG8gYSB0YXJnZXQgb2JqZWN0LlxuICAgKlxuICAgKiBOb3RlLCB0aGlzIG1ldGhvZCB1c2VzIGEgc2ltcGxlIGBmb3IuLi5pbmAgc3RyYXRlZ3kgZm9yIGVudW1lcmF0aW5nXG4gICAqIHByb3BlcnRpZXMuICBUbyBlbnN1cmUgb25seSBgb3duUHJvcGVydGllc2AgYXJlIGNvcGllZCBmcm9tIHNvdXJjZVxuICAgKiB0byB0YXJnZXQgYW5kIHRoYXQgYWNjZXNzb3IgaW1wbGVtZW50YXRpb25zIGFyZSBjb3BpZWQsIHVzZSBgZXh0ZW5kYC5cbiAgICpcbiAgICogQG1ldGhvZCBtaXhpblxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRhcmdldCBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFNvdXJjZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGFyZ2V0IG9iamVjdCB0aGF0IHdhcyBwYXNzZWQgYXMgZmlyc3QgYXJndW1lbnQuXG4gICAqL1xuICBzdGF0aWMgbWl4aW4odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBpIGluIHNvdXJjZSkge1xuICAgICAgdGFyZ2V0W2ldID0gc291cmNlW2ldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgc3RhdGljIF9sb2dnZXIobGV2ZWwsIGFyZ3MpIHtcbiAgICAvLyBhY2NlcHQgWydmb28nLCAnYmFyJ10gYW5kIFtbJ2ZvbycsICdiYXInXV1cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgfVxuICAgIC8vIG9ubHkgYWNjZXB0IGxvZ2dpbmcgZnVuY3Rpb25zXG4gICAgc3dpdGNoKGxldmVsKSB7XG4gICAgICBjYXNlICdsb2cnOlxuICAgICAgY2FzZSAnd2Fybic6XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIGNvbnNvbGVbbGV2ZWxdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX2xvZygpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgdGhpcy5fbG9nZ2VyKCdsb2cnLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBfd2FybigpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgdGhpcy5fbG9nZ2VyKCd3YXJuJywgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgX2Vycm9yKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ2Vycm9yJywgYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5hbWVkIGV2ZW50IHdpdGggYG5hbWVgXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybiB7RXZlbnR9IFJldHVybnMgYSBjcmVhdGVkIGV2ZW50XG4gICAqICovXG4gIHN0YXRpYyBuZXdFdmVudChuYW1lKXtcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEluc3BlY3RzIGlmIHRoZSBjdXJyZW50IHN0cmluZyBtaWdodCBiZSBjb252ZXJ0ZWQgdG8gbnVtYmVyIGFuZCByZW5kZXJzIGl0IGFzIG51bWJlci4gSWYgc3RyaW5nIGxlbmd0aCBpcyAwLCByZXR1cm5zIGBudWxsYC4gSWYgbm9uZSBhcHBsaWVzIHJldHVybnMgdGhlIHN0cmluZyBhcyBpcy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIHZhbHVlIG9mIHRoZSBjZWxsIGlmIG5vdCBIVE1MIGNvbnRlbnRzXG4gICAqIEByZXR1cm4ge051bWJlcnxudWxsfFN0cmluZ31cbiAgICogKi9cbiAgc3RhdGljIGlzTnVtYmVyKHN0cil7XG4gICAgaWYoIWlzTmFOKHBhcnNlRmxvYXQoc3RyKSkpe1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLywvaSwnJyk7Ly8gcmVtb3ZlIHVubmVjZXNzYXJ5IGNvbW1hIGFzIGEgZGVsaW1pdGVyIGZvciB0aG91c2FuZHMgZnJvbSBkYXRhLlxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyKTtcbiAgICB9IGVsc2UgaWYoc3RyLmxlbmd0aD09MCl7cmV0dXJuIG51bGx9IGVsc2Uge3JldHVybiBzdHJ9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIFhIUiB3cmFwcGVkIGluIGEgUHJvbWlzZVxuICAgKiBAcGFyYW0geyFTdHJpbmd9IFVSTCAtIHVybCB0byBzZW5kIGEgYEdFVGAgcmVxdWVzdCB0b1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXR1cm5zIGEgdGhlbi1hYmxlIHByb21pc2Ugd2l0aCBgWE1MSHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0YFxuICAgKiAqL1xuICBzdGF0aWMgcHJvbWlzZVJlcXVlc3QoVVJMKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oJ0dFVCcsIFVSTCwgdHJ1ZSk7XG4gICAgICB4aHIub25sb2FkID0gKCk9Pnt4aHIuc3RhdHVzID09IDIwMD9yZXNvbHZlKHhoci5yZXNwb25zZVRleHQpOnJlamVjdChFcnJvcihgJHt4aHIuc3RhdHVzfTogJHt4aHIuc3RhdHVzVGV4dH1gKSk7fVxuICAgICAgeGhyLm9uZXJyb3IgPSAoKT0+e3JlamVjdChFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO31cbiAgICAgIHhoci5zZW5kKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHZhcmlhYmxlIGxpc3RlZCBpbiBxdWVyeSBzdHJpbmdcbiAgICogQHBhcmFtIHshU3RyaW5nfSB2YXJpYWJsZSAtIHZhcmlhYmxlIG5hbWUgdG8gZ2V0IHZhbHVlIGZvclxuICAgKiBAcGFyYW0ge1N0cmluZz19IFtxdWVyeT13aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKV0gLSB0aGUgcXVlcnkgc3RyaW5nIHRvIHNlYXJjaCB2YXJpYWJsZSBmb3IgaW5cbiAgICogQHJldHVybiB7U3RyaW5nfSBSZXR1cm5zIHZhbHVlIGZvciB0aGUgdmFyaWFibGVcbiAgICogKi9cbiAgc3RhdGljIGdldFF1ZXJ5VmFyaWFibGUodmFyaWFibGUscXVlcnk9d2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpe1xuICAgIHZhciB2YXJzID0gcXVlcnkuc3BsaXQoXCImXCIpO1xuICAgIGZvciAodmFyIGk9MDtpPHZhcnMubGVuZ3RoO2krKykge1xuICAgICAgdmFyIHBhaXIgPSB2YXJzW2ldLnNwbGl0KFwiPVwiKTtcbiAgICAgIGlmKChwYWlyWzBdKS50b0xvd2VyQ2FzZSgpID09IHZhcmlhYmxlLnRvTG93ZXJDYXNlKCkpe3JldHVybiBwYWlyWzFdO31cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiB0dXJucyBgd2luZG93LmxvY2F0aW9uYCBvYmplY3QgaW50byBhbiBvYmplY3Qgd2l0aCBwYXJhbXMgYXMgbmFtZWQga2V5cyBuZWNlc3NhcnkgdG8gcmVjb25zdHJ1Y3QgdGhlIFVSTFxuICAgKiBAcGFyYW0ge09iamVjdD19IFtsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbl0gLSBhIHdpbmRvdy5sb2NhdGlvbiBvYmplY3QsIGJ5IGRlZmF1bHQgb2YgdGhlIGhvc3Qgd2luZG93IHdoZXJlIHRoZSBzY3JpcHQgaXMgZXhlY3V0ZWRcbiAgICogQHJldHVybnMge3twYXRoOlN0cmluZywgcXVlcnk6T2JqZWN0fX0gYSBgbG9jYXRpb25gIG9iamVjdFxuICAgKiAqL1xuICBzdGF0aWMgbG9jYXRpb25EZXNlcmlhbGl6ZShsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbil7XG4gICAgbGV0IG8gPSB7XG4gICAgICBwYXRoOiBsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHF1ZXJ5Ont9XG4gICAgfTtcbiAgICBsb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpLnNwbGl0KC8mLykuZm9yRWFjaChwYWlyPT57XG4gICAgICBsZXQgYVBhaXI9IHBhaXIuc3BsaXQoLz0vKTtcbiAgICAgIG8ucXVlcnlbYVBhaXJbMF0udG9Mb3dlckNhc2UoKV0gPSBhUGFpclsxXVxuICAgIH0pO1xuICAgIHJldHVybiBvXG4gIH1cblxuICAvKipcbiAgICogVHVybnMgYSBgbG9jYXRpb25gIG9iamVjdCAocmVzdWx0IG9mIGBsb2NhdGlvbkRlc2VyaWFsaXplYCkgaW50byBhIFVSTFxuICAgKiBAcGFyYW0ge3twYXRoOlN0cmluZywgcXVlcnk6T2JqZWN0fX0gbG9jYXRpb24gLSBhbiBvYmplY3Qgd2l0aCBwYXJhbXMgYW5kIGEgdXJsXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IC0gYSBVUkwgc3RyaW5nXG4gICAqICovXG4gIHN0YXRpYyBsb2NhdGlvblNlcmlhbGl6ZShsb2NhdGlvbil7XG4gICAgbGV0IHF1ZXJ5PVtdO1xuICAgIGZvcihsZXQga2V5IGluIGxvY2F0aW9uLnF1ZXJ5KXtcbiAgICAgIHF1ZXJ5LnB1c2goW2tleSxsb2NhdGlvbi5xdWVyeVtrZXldXS5qb2luKCc9JykpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aCArICc/JyArIHF1ZXJ5LmpvaW4oJyYnKTtcbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBSZXBvcnRhbEJhc2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1yZXBvcnRhbC1iYXNlL3NyYy9yZXBvcnRhbC1iYXNlLmpzIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzLCBQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWcgZnJvbSAnUHJvcG9ydGlvbmFsSW1hZ2UnO1xyXG5cclxuY29uc3QgTUVESUFfVFlQRVMgPSBbJ2ltYWdlJywgJ2F1ZGlvJywgJ3ZpZGVvJ107XHJcblxyXG5jbGFzcyBJbWFnZUdyaWRUaWxlIGV4dGVuZHMgUHVyZUNvbXBvbmVudHtcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgdGlsZSBmb3IgaW1hZ2UgbGlzdFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5pbWFnZSAtIGltYWdlIHVybFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlciAtIGEgcGxhY2Vob2xkZXIgaW1hZ2VcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMucGxhY2Vob2xkZXJTaXppbmcgLSBTZXRzIGEgc2l6aW5nIG9wdGlvbiBmb3IgdGhlIHBsYWNlaG9sZGVyLiBCeSBkZWZhdWx0IGl0J3MgdGhlIHNhbWUgYXMgZm9yIHRoZSBgc3JjYCBpbWFnZSwgYnV0IHNldCB0byBgaW5pdGlhbGAgb3Igb3RoZXIgdmFsaWQgYGJhY2tncm91bmQtc2l6ZWAgdmFsdWUgdG8gb3ZlcnJpZGUuXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLm1lZGlhdHlwZSAtIGEgZGVmYXVsdCBtZWRpYSBpY29uIGluc3RlYWQgb2YgdGhlIHBsYWNlaG9sZGVyIGltYWdlOiBvbmUgb2YgYGltYWdlYCxgYXVkaW9gLGB2aWRlb2BcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmljb25Db2xvcj1cIiNjY2NjY2NcIl0gLSBkZWZhdWx0IHBsYWNlaG9sZGVyIG1lZGlhIGljb24gY29sb3JcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmljb25TaXplPTQ4XSAtIGRlZmF1bHQgcGxhY2Vob2xkZXIgbWVkaWEgaWNvbiBzaXplXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5hc3BlY3Q9XCIxNjo5XCJdIC0gYXNwZWN0IHJhdGlvIG9mIHRoZSBpbWFnZSB0byBiZSBpbiB0aGUgdGlsZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnRpdGxlIC0gdGl0bGUgb2YgdGhlIHZpZGVvXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmRlc2NyaXB0aW9uIC0gZGVzY3JpcHRpb24gb2YgdGhlIHZpZGVvXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy5hY3Rpb25JY29uIC0gaWNvbiB0byBkaXNwbGF5IGFzIHRoZSBhY3Rpb24gaWNvbi4gSXQgYWxzbyBoYXMgdG8gaGF2ZSBhIGNhbGxiYWNrIGF0dGFjaGVkIHRvIGl0IHdoZW4gcGFzc2VkLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLm9uU2VsZWN0IC0gY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWQgd2hlbiB0aGUgbGluayBpcyBjbGlja2VkXHJcbiAgICogKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGFjdGlvbkJ1dHRvbiA9IG51bGw7XHJcbiAgICBjb25zdCB7YWN0aW9uSWNvbixvblNlbGVjdCxhc3BlY3QsdGl0bGUscGxhY2Vob2xkZXJTaXppbmcsaW1hZ2UsZGVzY3JpcHRpb259PXRoaXMucHJvcHM7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb25JY29uKSB7XHJcbiAgICAgIGFjdGlvbkJ1dHRvbiA9IDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tZWRpdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tYWN0aW9uLWljb25cIj57YWN0aW9uSWNvbn08L2Rpdj5cclxuICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1jb3ZlclwiIG9uQ2xpY2s9e29uU2VsZWN0fT5cclxuICAgICAgICAgIDxJbWdcclxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgYXNwZWN0PXthc3BlY3R9XHJcbiAgICAgICAgICAgIHNpemluZz1cImNvdmVyXCJcclxuICAgICAgICAgICAgcHJlbG9hZD17dHJ1ZX1cclxuICAgICAgICAgICAgZmFkZT17dHJ1ZX1cclxuICAgICAgICAgICAgYWx0PXt0aXRsZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMuX2NvbXB1dGVUaWxlVHlwZSgpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlclNpemluZz17cGxhY2Vob2xkZXJTaXppbmd9XHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tY29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1tZXRhXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tdGl0bGUgZWxsaXBzaXNcIiBvbkNsaWNrPXtvblNlbGVjdH0+e3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWRlc2NyaXB0aW9uIGVsbGlwc2lzXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7YWN0aW9uQnV0dG9ufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIF9jb21wdXRlVGlsZVR5cGUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7cGxhY2Vob2xkZXIsbWVkaWF0eXBlLGljb25TaXplLGljb25Db2xvcn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBpZiAoIXBsYWNlaG9sZGVyICYmIG1lZGlhdHlwZSkge1xyXG4gICAgICAgIGlmIChNRURJQV9UWVBFUy5pbmRleE9mKG1lZGlhdHlwZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCB0eXBlIFwiJHttZWRpYXR5cGV9XCIgaXMgc3BlY2lmaWVkYClcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGljb24gPSBJbWFnZUdyaWRUaWxlLmljb25TZXJ2ZXIobWVkaWF0eXBlLCBpY29uU2l6ZSwgaWNvbkNvbG9yKTtcclxuICAgICAgICByZXR1cm4gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZXNjYXBlKGljb24pO1xyXG4gICAgICB9IGVsc2UgaWYoISFwbGFjZWhvbGRlcil7XHJcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICdkYXRhOmltYWdlL3N2Zyt4bWwsJyArIGVzY2FwZShJbWFnZUdyaWRUaWxlLmljb25TZXJ2ZXIoJ3Vua25vd24nLCBpY29uU2l6ZSwgaWNvbkNvbG9yKSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3Ipe1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBpY29uIHdpdGggYSBjb3JyZWN0IGZpbGwgY29sb3JcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIGljb24gbmFtZSAob25lIG9mIGBpbWFnZWAsIGB2aWRlb2AsIGBhdWRpb2ApXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtzaXplPTI0XSAtIGljb24gc2l6ZSBpbiBwaXhlbHNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2ZpbGw9XCIjY2NjY2NjXCJdIC0gdmFsaWQgQ1NTIGNvbG9yIGRlY2xhcmF0aW9uXHJcbiAgICogQHJldHVybnMge1N0cmluZ31cclxuICAgKiAqL1xyXG4gIHN0YXRpYyBpY29uU2VydmVyKG5hbWUsIHNpemUgPSA0OCwgZmlsbCA9IFwiI2NjY2NjY1wiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpY29ucyA9IHtcclxuICAgICAgICBpbWFnZTogYDxwYXRoIGQ9XCJNMjEgMTlWNWMwLTEuMS0uOS0yLTItMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yek04LjUgMTMuNWwyLjUgMy4wMUwxNC41IDEybDQuNSA2SDVsMy41LTQuNXpcIi8+YCxcclxuICAgICAgICBhdWRpbzogYDxwYXRoIGQ9XCJNMTIgM3YxMC41NWMtLjU5LS4zNC0xLjI3LS41NS0yLS41NS0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRWN2g0VjNoLTZ6XCIvPmAsXHJcbiAgICAgICAgdmlkZW86IGA8cGF0aCBkPVwiTTE4IDRsMiA0aC0zbC0yLTRoLTJsMiA0aC0zbC0yLTRIOGwyIDRIN0w1IDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNGgtNHpcIi8+YCxcclxuICAgICAgICB1bmtub3duOiBgPHBhdGggZD1cIk0yMSA1djYuNTlsLTMtMy4wMS00IDQuMDEtNC00LTQgNC0zLTMuMDFWNWMwLTEuMS45LTIgMi0yaDE0YzEuMSAwIDIgLjkgMiAyem0tMyA2LjQybDMgMy4wMVYxOWMwIDEuMS0uOSAyLTIgMkg1Yy0xLjEgMC0yLS45LTItMnYtNi41OGwzIDIuOTkgNC00IDQgNCA0LTMuOTl6XCIvPmAsXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICghaWNvbnNbbmFtZV0pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGljb24gXCIke25hbWV9XCIgaXMgbm90IG9uIHRoZSBsaXN0YClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGA8c3ZnIGZpbGw9XCIke2ZpbGx9XCIgaGVpZ2h0PVwiJHtzaXplfVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIiR7c2l6ZX1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JHtpY29uc1tuYW1lXX08L3N2Zz5gXHJcbiAgICB9IGNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkltYWdlR3JpZFRpbGUucHJvcFR5cGVzID0ge1xyXG4gIGltYWdlICAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYWNlaG9sZGVyICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYWNlaG9sZGVyU2l6aW5nOiBQcm9wVHlwZXMub25lT2YoWydjb250YWluJywgJ2NvdmVyJywgJ2luaXRpYWwnXSksXHJcbiAgbWVkaWF0eXBlICAgICAgICA6IFByb3BUeXBlcy5vbmVPZihNRURJQV9UWVBFUyksXHJcbiAgaWNvbkNvbG9yICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaWNvblNpemUgICAgICAgICA6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgYXNwZWN0ICAgICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdGl0bGUgICAgICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZGVzY3JpcHRpb24gICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYWN0aW9uSWNvbiAgICAgICA6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uU2VsZWN0ICAgICAgICAgOiBQcm9wVHlwZXMuZnVuY1xyXG59O1xyXG5cclxuSW1hZ2VHcmlkVGlsZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaWNvbkNvbG9yOiBcIiNjY2NjY2NcIixcclxuICBpY29uU2l6ZSA6IDQ4LFxyXG4gIGFzcGVjdCAgIDogXCIxNjo5XCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUdyaWRUaWxlXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbWFnZUdyaWRUaWxlL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzLCBQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZUdyaWRUaWxlIGZyb20gJy4uL0ltYWdlR3JpZFRpbGUnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBgSW1hZ2VHcmlkYCBpcyBhIHN0YXRlbGVzcyBSZWFjdCBjb21wb25lbnQgdGhhdCBhbGxvd3MgdG8gY29tcHV0ZSBhbiBhcnJheSBvZiBJbWFnZUdyaWRUaWxlcyBmcm9tIGBpdGVtc2AgcGFzc2VkIGluIHByb3BzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcy5pdGVtcyAtIGFuIGFycmF5IG9mIGl0ZW1zIGB7aWQ6TnVtYmVyfFN0cmluZywgaW1hZ2U6U3RyaW5nLCBtZWRpYXR5cGU6P1N0cmluZywgcGxhY2Vob2xkZXI6P1N0cmluZywgdGl0bGU6U3RyaW5nLGRlc2NyaXB0aW9uOlN0cmluZ31gXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5hc3BlY3QgLSBhc3BlY3QgcmF0aW8gZm9yIHRoZSBJbWFnZUdyaWRUaWxlIGltYWdlXHJcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBwcm9wcy5hY3Rpb25JY29uIC0gYWN0aW9uIGljb24gSlNYIHdpdGggYSBib3VuZCBoYW5kbGVyXHJcbiAqIEBwYXJhbSB7P1N0cmluZ30gcHJvcHMucGxhY2Vob2xkZXJTaXppbmcgLSBTZXRzIGEgc2l6aW5nIG9wdGlvbiBmb3IgdGhlIHBsYWNlaG9sZGVyLiBCeSBkZWZhdWx0IGl0J3MgdGhlIHNhbWUgYXMgZm9yIHRoZSBgc3JjYCBpbWFnZSwgYnV0IHNldCB0byBgaW5pdGlhbGAgb3Igb3RoZXIgdmFsaWQgYGJhY2tncm91bmQtc2l6ZWAgdmFsdWUgdG8gb3ZlcnJpZGUuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLm9uU2VsZWN0IC0gZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZCBvblxyXG4gKiBAcGFyYW0ge051bWJlcn0gcHJvcHMuZHVtbXlJdGVtcyAtIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhbiBpdGVtIGlzIGNsaWNrZWQgb25cclxuICogKi9cclxuY2xhc3MgSW1hZ2VHcmlkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcblxyXG4gIGl0ZW1DbGlja0hhbmRsZXIgPSAoaXRlbSkgPT4gKGV2ZW50KSA9PiB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW0pO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7aXRlbXMsIGR1bW15SXRlbXMsIGFzcGVjdCwgcGxhY2Vob2xkZXJTaXppbmcsIGFjdGlvbkljb259ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkXCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoID4gMCAmJiBpdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIDxJbWFnZUdyaWRUaWxlXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgYXNwZWN0PXthc3BlY3R9XHJcbiAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgbWVkaWF0eXBlPXtpdGVtLm1lZGlhdHlwZX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aXRlbS5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlclNpemluZz17aXRlbS5pbWFnZT9wbGFjZWhvbGRlclNpemluZzonaW5pdGlhbCd9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgYWN0aW9uSWNvbj17dHlwZW9mIGFjdGlvbkljb249PT0nZnVuY3Rpb24nP2FjdGlvbkljb24oaXRlbSk6bnVsbH1cclxuICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5pdGVtQ2xpY2tIYW5kbGVyKGl0ZW0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAge2R1bW15SXRlbXMgJiYgdGhpcy5yZW5kZXJEdW1teUl0ZW1zKGR1bW15SXRlbXMpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG5cclxuICByZW5kZXJEdW1teUl0ZW1zKGNvdW50KSB7XHJcbiAgICBjb25zdCBkdW1teUl0ZW1zID0gW107XHJcbiAgICB3aGlsZSAoY291bnQtLSkge1xyXG4gICAgICBkdW1teUl0ZW1zLnB1c2goPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlXCIga2V5PXtgZHVtbXkke2NvdW50fWB9Lz4pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZHVtbXlJdGVtc1xyXG4gIH1cclxufVxyXG5cclxuSW1hZ2VHcmlkLnByb3BUeXBlcyA9IHtcclxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxyXG4gIGFzcGVjdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhY3Rpb25JY29uOiBQcm9wVHlwZXMuZWxlbWVudCxcclxuICBwbGFjZWhvbGRlclNpemluZzogUHJvcFR5cGVzLnN0cmluZyxcclxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBkdW1teUl0ZW1zOiBQcm9wVHlwZXMubnVtYmVyXHJcbn07XHJcblxyXG5JbWFnZUdyaWQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGR1bW15SXRlbXM6IDEyXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUdyaWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbWFnZUdyaWQvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyhjb25maWcpXHJcbiAgICAgICAgaWYgKGNvbmZpZykge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uID0gY29uZmlnLnBhZ2luYXRpb247XHJcbiAgICAgICAgICAgIGlmIChwYWdpbmF0aW9uID09PSAnY29udGludW91cycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRpbnVvdXNOYXZpZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdpbmdOYXZpZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb250aW51b3VzTmF2aWdhdGlvbigpIHtcclxuICAgICAgICBjb25zdCB7IGxvYWRNb3JlLCBkaXNhYmxlTmV4dEJ1dHRvbiB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblJvd1wiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsQnV0dG9uIGZsYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvYWRNb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlTmV4dEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgID5Mb2FkIG1vcmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBwYWdpbmdOYXZpZ2F0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbG9hZFByZXZpb3VzUGFnZSxcclxuICAgICAgICAgICAgbG9hZE5leHRQYWdlLFxyXG4gICAgICAgICAgICBkaXNhYmxlTmV4dEJ1dHRvbixcclxuICAgICAgICAgICAgZGlzYWJsZVByZXZCdXR0b24sXHJcbiAgICAgICAgICAgIHBhZ2VJbmZvLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVcclxuICAgICAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Sb3dcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gYWNjZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2FkUHJldmlvdXNQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlUHJldkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VUycpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBhY2NlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvYWROZXh0UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZU5leHRCdXR0b259XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnUkVQT1JUX1NJTkdMRVZJRVdfTkVYVCcpfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3BhZ2VJbmZvfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFjdFZpZGVvL05hdmlnYXRpb24uanMiLCIvL0BmbG93XHJcbmltcG9ydCB0eXBlIHtTdGF0ZSwgUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2VHcmlkIGZyb20gXCIuLi9JbWFnZUdyaWRcIjtcclxuaW1wb3J0IFNpbmdsZVZpZXcgZnJvbSBcIi4uL1NpbmdsZVZpZXdcIjtcclxuaW1wb3J0IERTQWJzdHJhY3Rpb24gZnJvbSAnLi4vRFNBYnN0cmFjdGlvbidcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9OYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgU2luZ2xlVmlld1Jlc3BvbnNlcyBmcm9tICcuLi9TaW5nbGVWaWV3L1Jlc3BvbnNlcydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RWaWRlbyBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICBEUyA9IERTQWJzdHJhY3Rpb24oe1xyXG4gICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZyxcclxuICAgIHRodW1ic1BsYWNlaG9sZGVyOiB0aGlzLnByb3BzLnRodW1ic1BsYWNlaG9sZGVyLFxyXG4gICAgY29tcG9uZW50OiB0aGlzXHJcbiAgfSk7XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgaXRlbXM6IG51bGwsXHJcbiAgICBlcnJvcjogZmFsc2UsXHJcbiAgICBjb25maWc6IG51bGwsXHJcbiAgICBzaW5nbGVWaWV3TW9kZTogJ3ZpZXcnLFxyXG4gICAgc2luZ2xlVmlldzoge1xyXG4gICAgICBsaW5rOiAnJ1xyXG4gICAgfSxcclxuICAgIHNpbmdsZVZpZXdWaXNpYmxlOiBmYWxzZSxcclxuICAgIHNpbmdsZVZpZXdEaXNhYmxlUHJldjogZmFsc2UsXHJcbiAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHQ6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIHRyYW5zbGF0ZSA9IHRoaXMuRFMuaTE4bi5iaW5kKHRoaXMuRFMpO1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGl0ZW1zLCBzaW5nbGVWaWV3VmlzaWJsZSwgZXJyb3IsIGNvbmZpZyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCByZW5kZXIgPSBudWxsO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5EUyk7XHJcbiAgICBpZiAoIWVycm9yICYmIEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICByZW5kZXIgPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BHcmlkQ29udGFpbmVyICR7IXNpbmdsZVZpZXdWaXNpYmxlID8gJ0dyaWRWaWV3JyA6ICcnfWB9PlxyXG4gICAgICAgICAge3RoaXMucmVuZGVyU2luZ2xlVmlldygpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRDb250YWluZXJcIiBzdHlsZT17eyBkaXNwbGF5OiAhc2luZ2xlVmlld1Zpc2libGUgPyAnYmxvY2snIDogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2VHcmlkXHJcbiAgICAgICAgICAgICAgYXNwZWN0PVwiMTY6OVwiXHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25TZWxlY3R9XHJcbiAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxyXG4gICAgICAgICAgICAgIGFjdGlvbkljb249e2NvbmZpZy5jYW5FZGl0ID8gdGhpcy5hY3Rpb25JY29uIDogbnVsbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyTmF2aWdhdGlvbigpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLkRTKSB7XHJcbiAgICAgICAgcmVuZGVyID0gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHcmlkQ29udGFpbmVyIEltYWdlR3JpZFwiPnt0aGlzLmRhdGFMb2FkaW5nTWVzc2FnZSgpfTwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hpdGxpc3REYXRhc291cmNlIGlzIG5vdCBhdmFpbGFibGUnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVuZGVyXHJcbiAgfVxyXG5cclxuICByZW5kZXJOYXZpZ2F0aW9uKCkge1xyXG4gICAgY29uc3QgeyBsb2FkUHJldmlvdXNQYWdlLCBsb2FkTmV4dFBhZ2UsIGxvYWRNb3JlLCBkaXNhYmxlTmV4dEJ1dHRvbiwgZGlzYWJsZVByZXZCdXR0b24sIGdldFBhZ2VJbmZvIH0gPSB0aGlzLkRTO1xyXG4gICAgY29uc3QgbmF2aWdhdGlvblByb3BzID0ge1xyXG4gICAgICBsb2FkUHJldmlvdXNQYWdlLFxyXG4gICAgICBsb2FkTmV4dFBhZ2UsXHJcbiAgICAgIGxvYWRNb3JlLFxyXG4gICAgICBkaXNhYmxlTmV4dEJ1dHRvbixcclxuICAgICAgZGlzYWJsZVByZXZCdXR0b24sXHJcbiAgICAgIHBhZ2VJbmZvOiBnZXRQYWdlSW5mbygpLFxyXG4gICAgICBjb25maWc6IHRoaXMuc3RhdGUuY29uZmlnLFxyXG4gICAgICB0cmFuc2xhdGU6IHRoaXMudHJhbnNsYXRlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxOYXZpZ2F0aW9uIHsuLi5uYXZpZ2F0aW9uUHJvcHN9IC8+XHJcbiAgfVxyXG5cclxuICByZW5kZXJTaW5nbGVWaWV3KCkge1xyXG4gICAgY29uc3QgeyBzaW5nbGVWaWV3VmlzaWJsZSwgc2luZ2xlVmlldywgc2luZ2xlVmlld0Rpc2FibGVQcmV2LCBzaW5nbGVWaWV3RGlzYWJsZU5leHQsIHNpbmdsZVZpZXdNb2RlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIHNpbmdsZVZpZXdWaXNpYmxlID8gKFxyXG4gICAgICA8U2luZ2xlVmlld1xyXG4gICAgICAgIHJldHVyblRvR3JpZEFjdGlvbj17dGhpcy5yZXR1cm5Ub0dyaWR9XHJcbiAgICAgICAgbG9hZFByZXZpb3VzSXRlbT17dGhpcy5sb2FkUHJldmlvdXNJdGVtfVxyXG4gICAgICAgIGxvYWROZXh0SXRlbT17dGhpcy5sb2FkTmV4dEl0ZW19XHJcbiAgICAgICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2PXtzaW5nbGVWaWV3RGlzYWJsZVByZXZ9XHJcbiAgICAgICAgc2luZ2xlVmlld0Rpc2FibGVOZXh0PXtzaW5nbGVWaWV3RGlzYWJsZU5leHR9XHJcbiAgICAgID5cclxuICAgICAgICB7c2luZ2xlVmlld01vZGUgPT09ICdlZGl0JyA/XHJcbiAgICAgICAgICAoPGlmcmFtZSBjbGFzc05hbWU9XCJyZW5kZXJBcmVhXCIgc3JjPXtzaW5nbGVWaWV3Lmxpbmt9IC8+KVxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgKDxTaW5nbGVWaWV3UmVzcG9uc2VzIGRhdGE9e3NpbmdsZVZpZXd9IGNvbHVtbnM9e3RoaXMuaW5kaXZpZHVhbFJlY29yZHNRdWVzdGlvbklkc30gY29sdW1uc01hcD17dGhpcy5pbmRpdmlkdWFsUmVjb3Jkc0tleUxhYmVsc30gLz4pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L1NpbmdsZVZpZXc+XHJcbiAgICApIDogbnVsbFxyXG4gIH1cclxuXHJcbiAgZ2V0IGluZGl2aWR1YWxSZWNvcmRzUXVlc3Rpb25JZHMoKSB7XHJcbiAgICBjb25zdCB7IGluZGl2aWR1YWxSZWNvcmRzIH0gPSB0aGlzLkRTLmNvbmZpZygpO1xyXG4gICAgcmV0dXJuIGluZGl2aWR1YWxSZWNvcmRzICE9IG51bGwgJiYgQXJyYXkuaXNBcnJheShpbmRpdmlkdWFsUmVjb3JkcykgPyBpbmRpdmlkdWFsUmVjb3JkcyA6IFtdXHJcbiAgfVxyXG5cclxuICBnZXQgaW5kaXZpZHVhbFJlY29yZHNLZXlMYWJlbHMoKSB7XHJcbiAgICByZXR1cm4gey4uLnRoaXMuZ2V0TGFiZWxzRm9yTWFpbkZpZWxkcygpLCAuLi50aGlzLmdldExhYmVsc0ZvckluZGl2aWR1YWxSZWNvcmRzKCl9XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbHNGb3JNYWluRmllbGRzKCl7XHJcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLkRTLmNvbmZpZygpO1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ2ltYWdlJywgJ2F1ZGlvJywgJ3ZpZGVvJ10ucmV2ZXJzZSgpLmZvckVhY2goa2V5ID0+XHJcbiAgICAgIG1hcFtrZXldID0gdGhpcy5EUy5hbGxDb2x1bW5zLmZpbHRlcihyZWNvcmQgPT5cclxuICAgICAgICByZWNvcmQua2V5ID09PSBjb25maWdba2V5XVxyXG4gICAgICApWzBdLmxhYmVsXHJcbiAgICApXHJcbiAgICByZXR1cm4gbWFwO1xyXG4gIH0gXHJcblxyXG4gIGdldExhYmVsc0ZvckluZGl2aWR1YWxSZWNvcmRzKCl7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIGNvbnN0IGlySWRzID0gdGhpcy5pbmRpdmlkdWFsUmVjb3Jkc1F1ZXN0aW9uSWRzO1xyXG4gICAgdGhpcy5EUy5hbGxDb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgaWYgKGlySWRzLmluZGV4T2YoY29sdW1uLmtleSkgPiAtMSkge1xyXG4gICAgICAgIG1hcFtjb2x1bW4ua2V5XSA9IGNvbHVtbi5sYWJlbFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG1hcDtcclxuICB9IFxyXG5cclxuXHJcblxyXG4gIGRhdGFMb2FkaW5nTWVzc2FnZSgpIHtcclxuICAgIGxldCBtZXNzYWdlO1xyXG4gICAgY29uc3QgeyBpdGVtcywgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgbWVzc2FnZSA9ICdlcnJvckxvYWRpbmcnXHJcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBtZXNzYWdlID0gJ1JFUE9SVF9TSU5HTEVWSUVXX05PVEhJTkdGT1VORCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lc3NhZ2UgPSAnbG9hZGluZ0RhdGEnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5EUy5pMThuKG1lc3NhZ2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm5Ub0dyaWQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2luZ2xlVmlld1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICBzaW5nbGVWaWV3OiB7XHJcbiAgICAgICAgbGluazogJydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgbG9hZFByZXZpb3VzSXRlbSA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlSXRlbXMoJ2JhY2snKVxyXG4gIH1cclxuXHJcbiAgbG9hZE5leHRJdGVtID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVJdGVtcygnZm9yd2FyZCcpXHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZUl0ZW1zKGRpcmVjdGlvbjogJ2ZvcndhcmQnIHwgJ2JhY2t3YXJkJyk6IHZvaWQge1xyXG4gICAgbGV0IGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcztcclxuICAgIGNvbnN0IHBhZ2luYXRpb25UeXBlID0gdGhpcy5zdGF0ZS5jb25maWcucGFnaW5hdGlvbjtcclxuICAgIGxldCBpdGVtc0xlbmd0aCA9IGl0ZW1zLmxlbmd0aCAtIDE7XHJcbiAgICBjb25zdCBjdXJyZW50U2luZ2xlVmlld0l0ZW1JbmRleCA9IGl0ZW1zLmluZGV4T2YodGhpcy5zdGF0ZS5zaW5nbGVWaWV3KTtcclxuICAgIGNvbnN0IG5leHRJbmRleCA9IGRpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnID8gY3VycmVudFNpbmdsZVZpZXdJdGVtSW5kZXggKyAxIDogY3VycmVudFNpbmdsZVZpZXdJdGVtSW5kZXggLSAxO1xyXG5cclxuICAgIGNvbnN0IGxvYWRJdGVtRnJvbVByZXZpb3VzUGFnZSA9IG5leHRJbmRleCA8IDAgJiYgIXRoaXMuRFMuZGlzYWJsZVByZXZCdXR0b247XHJcbiAgICBjb25zdCBsb2FkSXRlbUZyb21OZXh0UGFnZSA9IG5leHRJbmRleCA+IGl0ZW1zTGVuZ3RoICYmICF0aGlzLkRTLmRpc2FibGVOZXh0QnV0dG9uO1xyXG5cclxuICAgIGxldCBwcm9taXNlZEl0ZW1zID0gUHJvbWlzZS5yZXNvbHZlKGl0ZW1zKTtcclxuICAgIC8vIGFzc2lnbiBpdGVtcyB0byB0aGVuYWJsZSBwcm9taXNlcyBpZiByZXF1ZXN0ZWQgaXRlbSBpcyBvdXRzaWRlIG9mIGRhdGEgYm91bmRhcmllc1xyXG4gICAgaWYgKGxvYWRJdGVtRnJvbVByZXZpb3VzUGFnZSkge1xyXG4gICAgICBwcm9taXNlZEl0ZW1zID0gdGhpcy5EUy5sb2FkUHJldmlvdXNQYWdlKCk7XHJcbiAgICB9IGVsc2UgaWYgKGxvYWRJdGVtRnJvbU5leHRQYWdlKSB7XHJcbiAgICAgIHByb21pc2VkSXRlbXMgPSBwYWdpbmF0aW9uVHlwZSAhPT0gJ2NvbnRpbnVvdXMnID8gdGhpcy5EUy5sb2FkTmV4dFBhZ2UoKSA6IHRoaXMuRFMubG9hZE1vcmUoKTtcclxuICAgIH1cclxuICAgIC8qICAgICBjb25zdCBpdGVtc0FyZVByb21pc2VkID0gIUFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmhhc093blByb3BlcnR5KCd0aGVuJyk7XHJcbiAgICAgICAgaWYgKCFpdGVtc0FyZVByb21pc2VkKSB7XHJcbiAgICAgICAgICBwcm9taXNlZEl0ZW1zID0gUHJvbWlzZS5yZXNvbHZlKGl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgKi9cclxuICAgIHByb21pc2VkSXRlbXMudGhlbigoKSA9PiB7XHJcbiAgICAgIGxldCBzaW5nbGVWaWV3RGF0YTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gcHJldlN0YXRlLml0ZW1zO1xyXG4gICAgICAgIGNvbnN0IGF0RGF0YUxlZnRCb3VuZGFyeUNhbkxvYWQgPSBuZXh0SW5kZXggPCAwICYmICFzaW5nbGVWaWV3RGlzYWJsZVByZXY7XHJcbiAgICAgICAgY29uc3QgYXREYXRhUmlnaHRCb3VuZGFyeUNhbkxvYWQgPSBuZXh0SW5kZXggPiBpdGVtc0xlbmd0aCAmJiAhc2luZ2xlVmlld0Rpc2FibGVOZXh0ICYmIHBhZ2luYXRpb25UeXBlICE9PSAnY29udGludW91cyc7XHJcbiAgICAgICAgaWYgKGF0RGF0YUxlZnRCb3VuZGFyeUNhbkxvYWQpIHtcclxuICAgICAgICAgIHNpbmdsZVZpZXdEYXRhID0gbmV3SXRlbXNbbmV3SXRlbXMubGVuZ3RoIC0gMV1cclxuICAgICAgICB9IGVsc2UgaWYgKGF0RGF0YVJpZ2h0Qm91bmRhcnlDYW5Mb2FkKSB7XHJcbiAgICAgICAgICBzaW5nbGVWaWV3RGF0YSA9IG5ld0l0ZW1zWzBdXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNpbmdsZVZpZXdEYXRhID0gbmV3SXRlbXNbbmV4dEluZGV4XVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnRoaXMuZ2V0U2luZ2xlVmlld05hdlN0YXRlKG5leHRJbmRleCksXHJcbiAgICAgICAgICBzaW5nbGVWaWV3OiBzaW5nbGVWaWV3RGF0YSxcclxuICAgICAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2luZ2xlVmlld05hdlN0YXRlKGl0ZW0pIHsgfVxyXG5cclxuICBvblNlbGVjdCA9IChpdGVtKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLi4udGhpcy5nZXRTaW5nbGVWaWV3TmF2U3RhdGUodGhpcy5zdGF0ZS5pdGVtcy5pbmRleE9mKGl0ZW0pKSxcclxuICAgICAgc2luZ2xlVmlldzogaXRlbSxcclxuICAgICAgc2luZ2xlVmlld1Zpc2libGU6IHRydWUsXHJcbiAgICAgIHNpbmdsZVZpZXdNb2RlOiAndmlldydcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgZ2V0U2luZ2xlVmlld05hdlN0YXRlKGN1cnJlbnRJdGVtSW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xyXG4gICAgbGV0IHNpbmdsZVZpZXdEaXNhYmxlTmV4dCA9IGZhbHNlLFxyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXYgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoY3VycmVudEl0ZW1JbmRleCA8PSAwICYmIHRoaXMuRFMuZGlzYWJsZVByZXZCdXR0b24pIHtcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50SXRlbUluZGV4ID49IGl0ZW1zLmxlbmd0aCAtIDEgJiYgdGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbikge1xyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2LFxyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGlvbkljb25DbGljayA9IChpdGVtKSA9PiAoKSA9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgIC4uLnRoaXMuZ2V0U2luZ2xlVmlld05hdlN0YXRlKHRoaXMuc3RhdGUuaXRlbXMuaW5kZXhPZihpdGVtKSksXHJcbiAgICBzaW5nbGVWaWV3OiBpdGVtLFxyXG4gICAgc2luZ2xlVmlld1Zpc2libGU6IHRydWUsXHJcbiAgICBzaW5nbGVWaWV3TW9kZTogJ2VkaXQnXHJcbiAgfSlcclxuICBhY3Rpb25JY29uID0gKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgb25DbGljaz17dGhpcy5hY3Rpb25JY29uQ2xpY2soaXRlbSl9PlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44My0xLjgzelwiIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VmlkZW8vaW5kZXguanMiLCIvL0BmbG93XHJcbmltcG9ydCB0eXBlIHtOYXZCdXR0b25Qcm9wc30gZnJvbSAnLi90eXBlcydcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNREljb24gZnJvbSAnTURJY29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkJ1dHRvbiBleHRlbmRzIFB1cmVDb21wb25lbnQ8TmF2QnV0dG9uUHJvcHMsIGFueT4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaWNvbiwgLi4ud3JhcHBlciB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlNpbmdsZVZpZXctLW5hdi1idXR0b25cIiB7Li4ud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8TURJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2luZ2xlVmlldy9OYXZCdXR0b24uanMiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9uc2VzIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhLCBjb2x1bW5zLCBjb2x1bW5zTWFwIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgbWVkaWEgPSBbJ2ltYWdlJywgJ3ZpZGVvJywgJ2F1ZGlvJ107XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRhdGEuaW50ZXJ2aWV3X3N0YXJ0IHx8IGRhdGEuaW50ZXJ2aWV3X2VuZDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbmRlckFyZWEgUmVzcG9uc2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1wYWdlVGl0bGVcIj4ge2RhdGEudGl0bGV9IDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7ISFkYXRlICYmIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1sYWJlbFwiPiB7ZGF0ZX0gPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS12YWx1ZVwiPiB7ZGF0YS5kZXNjcmlwdGlvbn0gPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHttZWRpYS5tYXAobWVkaWFJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbWVkaWFJdGVtXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLWxhYmVsXCI+e2NvbHVtbnNNYXBbbWVkaWFJdGVtXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tdmFsdWVcIj57dGhpc1tgXyR7bWVkaWFJdGVtfVJlbmRlcmVyYF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1ucyAhPSBudWxsICYmIGNvbHVtbnMubWFwKHFJRCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW3FJRF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1sYWJlbFwiPntjb2x1bW5zTWFwW3FJRF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLXZhbHVlXCI+e2RhdGFbcUlEXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBnZXQgX2ltYWdlUmVuZGVyZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1tZWRpYVwiIHNyYz17dGhpcy5wcm9wcy5kYXRhLmltYWdlfSAvPlxyXG4gICAgfVxyXG4gICAgZ2V0IF92aWRlb1JlbmRlcmVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx2aWRlbyBjb250cm9scyBjbGFzc05hbWU9XCJSZXNwb25zZXMtLW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17dGhpcy5wcm9wcy5kYXRhLnZpZGVvfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXHJcbiAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGdldCBfYXVkaW9SZW5kZXJlcigpIHtcclxuICAgICAgICByZXR1cm4gPGF1ZGlvIHNyYz17dGhpcy5wcm9wcy5kYXRhLmF1ZGlvfSB0eXBlPVwiYXVkaW8vbXA0XCIgY29udHJvbHMgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1tZWRpYVwiIC8+XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2luZ2xlVmlldy9SZXNwb25zZXMuanMiLCIvL0BmbG93XHJcbmltcG9ydCB0eXBlIHtQcm9wcywgTmF2QmFyUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tICcuL05hdkJ1dHRvbidcclxuaW1wb3J0IHsgaWNfYXJyb3dfYmFjaywgaWNfYXJyb3dfZm9yd2FyZCwgaWNfdmlld19tb2R1bGUgfSBmcm9tICcuLi9pY29ucyc7XHJcblxyXG5jb25zdCBOYXZCYXIgPSBmdW5jdGlvbiAocHJvcHM6TmF2QmFyUHJvcHMpIHtcclxuICBjb25zdCB7IGxvYWRQcmV2aW91c0l0ZW0sIHJldHVyblRvR3JpZEFjdGlvbiwgbG9hZE5leHRJdGVtLCBzaW5nbGVWaWV3RGlzYWJsZVByZXYsIHNpbmdsZVZpZXdEaXNhYmxlTmV4dCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0taGVhZGVyXCI+XHJcbiAgICAgIDxOYXZCdXR0b24gZGlzYWJsZWQ9e3NpbmdsZVZpZXdEaXNhYmxlUHJldn0gdGl0bGU9XCJQcmV2aW91cyBpdGVtXCIgb25DbGljaz17bG9hZFByZXZpb3VzSXRlbX0gaWNvbj17aWNfYXJyb3dfYmFja30gLz5cclxuICAgICAgPE5hdkJ1dHRvbiB0aXRsZT1cIlJldHVybiB0byB0aGUgbGlzdFwiIG9uQ2xpY2s9e3JldHVyblRvR3JpZEFjdGlvbn0gaWNvbj17aWNfdmlld19tb2R1bGV9IC8+XHJcbiAgICAgIDxOYXZCdXR0b24gZGlzYWJsZWQ9e3NpbmdsZVZpZXdEaXNhYmxlTmV4dH0gdGl0bGU9XCJOZXh0IEl0ZW1cIiBvbkNsaWNrPXtsb2FkTmV4dEl0ZW19IGljb249e2ljX2Fycm93X2ZvcndhcmR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZVZpZXcgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCB2b2lkPiB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2NoaWxkcmVuLCAuLi5uYXZCYXJQcm9wc30gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3XCI+XHJcbiAgICAgICAgPE5hdkJhciB7Li4ubmF2QmFyUHJvcHN9Lz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2luZ2xlVmlldy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGljX3N0YXIgPSA8cGF0aCBkPVwiTTEyIDE3LjI3TDE4LjE4IDIxbC0xLjY0LTcuMDNMMjIgOS4yNGwtNy4xOS0uNjFMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxelwiLz47XG5leHBvcnQgY29uc3QgaWNfc3Rhcl9ib3JkZXIgPSA8cGF0aCBkPVwiTTIyIDkuMjRsLTcuMTktLjYyTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMSAxMiAxNy4yNyAxOC4xOCAyMWwtMS42My03LjAzTDIyIDkuMjR6TTEyIDE1LjRsLTMuNzYgMi4yNyAxLTQuMjgtMy4zMi0yLjg4IDQuMzgtLjM4TDEyIDYuMWwxLjcxIDQuMDQgNC4zOC4zOC0zLjMyIDIuODggMSA0LjI4TDEyIDE1LjR6XCIvPjtcbmV4cG9ydCBjb25zdCBpY19hcnJvd19iYWNrID0gPHBhdGggZD1cIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwdi0yelwiLz47XG5leHBvcnQgY29uc3QgaWNfYXJyb3dfZm9yd2FyZCA9IDxwYXRoIGQ9XCJNMTIgNGwtMS40MSAxLjQxTDE2LjE3IDExSDR2MmgxMi4xN2wtNS41OCA1LjU5TDEyIDIwbDgtOHpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX3ZpZXdfbW9kdWxlID0gPHBhdGggZD1cIk00IDExaDVWNUg0djZ6bTAgN2g1di02SDR2NnptNiAwaDV2LTZoLTV2NnptNiAwaDV2LTZoLTV2NnptLTYtN2g1VjVoLTV2NnptNi02djZoNVY1aC01elwiLz47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaWNvbnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy9AZmxvd1xyXG5pbXBvcnQgSGl0bGlzdERTIGZyb20gXCJyLWhpdGxpc3QtZGF0YXNvdXJjZVwiO1xyXG5pbXBvcnQgdW5pb25CeSBmcm9tIFwibG9kYXNoL3VuaW9uQnlcIjtcclxuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tICdyLXJlcG9ydGFsLWJhc2UnO1xyXG5cclxudHlwZSBPcHRpb25zID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBuYW1lIG9mIGEgZ2xvYmFsIGNvbmZpZyB2YXJpYWJsZSBwYXNzZWRcclxuICAgICovXHJcbiAgICBjb25maWc6IHN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGRpc3BsYXkgdGh1bWJzIGFzIGltYWdlIHBsYWNlaG9sZGVycyBpbnN0ZWFkIG9mIG1lZGlhIGljb25zXHJcbiAgICAqL1xyXG4gICAgdGh1bWJzUGxhY2Vob2xkZXI6IGJvb2xlYW4sXHJcbiAgICBjb21wb25lbnQ6IGFueVxyXG59XHJcblxyXG50eXBlIHBhcnNlZERhdGFSb3cgPSB7XHJcbiAgICBpZDogc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxyXG4gICAgaW1hZ2U/OiBzdHJpbmcsXHJcbiAgICBtZWRpYXR5cGU6ICd2aWRlbycgfCAnYXVkaW8nIHwgJ2ltYWdlJyxcclxuICAgIGxpbms6IHN0cmluZyxcclxuICAgIFt4OnN0cmluZ106c3RyaW5nLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRFNBYnN0cmFjdGlvbihvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgICBjb25zdCBEUyA9IG5ldyBIaXRsaXN0RFMoKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IG9wdGlvbnMuY29tcG9uZW50O1xyXG4gICAgbGV0IGNvbmZpZztcclxuICAgIGNvbnN0IHF1ZXJ5ID0gUmVwb3J0YWxCYXNlLmxvY2F0aW9uRGVzZXJpYWxpemUoKS5xdWVyeTtcclxuXHJcbiAgICBzZXR1cERhdGFMaXN0ZW5lcihvcHRpb25zLmNvbmZpZyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXVuY2hlcyBsaXN0ZW5lciBmb3IgYFkuR2xvYmFsLnJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlYCBldmVudCB3aXRoaW4gWVVJIHdoaWNoIGlzIHRyaWdnZXJlZCBldmVyeSB0aW1lIHRoZSBmaWx0ZXIgcGFuZWwgdXBkYXRlcyBvciBvbiBpbml0aWFsIGxvYWRcclxuICAgICAqICovXHJcbiAgICBmdW5jdGlvbiBzZXR1cERhdGFMaXN0ZW5lcihjb25maWdOYW1lKSB7XHJcbiAgICAgICAgaWYgKFkgJiYgWS5HbG9iYWwpIHtcclxuICAgICAgICAgICAgWS5HbG9iYWwub24oXCJyZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZVwiLCBmaWx0ZXJJbmZvID0+IHtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpc2VDb25maWcoY29uZmlnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoRFMgJiYgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRFMubW9kaWZpZXIgPSBmaWx0ZXJJbmZvOyAvLyBmaWx0ZXIgaW5mb3JtYXRpb24gYXMgYSBtb2RpZmllciBmb3IgZGF0YSBmZXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIERTLmluaXRpYWxEYXRhTG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lVSSBpcyBub3QgZGVmaW5lZCBvciBhY2Nlc3NpYmxlLCBjYW5ub3Qgc2V0IHVwIGEgXCJyZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZVwiIGxpc3RlbmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpc2VDb25maWcoY29uZmlnTmFtZSkge1xyXG4gICAgICAgIGlmICghY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmICghd2luZG93W2NvbmZpZ05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbmZpZyBpcyBub3QgcGFzc2VkIGZyb20gYmFja2VuZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uZmlnID0gd2luZG93W2NvbmZpZ05hbWVdO1xyXG4gICAgICAgICAgICBpZihjb25maWcuaW5kaXZpZHVhbFJlY29yZHMgJiYgdHlwZW9mIGNvbmZpZy5pbmRpdmlkdWFsUmVjb3JkcyA9PT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzID0gY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzLnNwbGl0KCcsJykubWFwKGl0ZW09Pml0ZW0udHJpbSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoeyBjb25maWcgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0RhdGEoZGF0YSwgbW9kZSA9ICdyZXBsYWNlJykge1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGE6IHBhcnNlZERhdGFSb3dbXSA9IGRhdGEubWFwKChkYXRhUm93LCByb3dJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyc2VkUm93OiBwYXJzZWREYXRhUm93ID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGlyID0gY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzIHx8IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhRmllbGRzID0gWydpZCcsICd0aXRsZScsICdkZXNjcmlwdGlvbicsICdpbWFnZScsICdhdWRpbycsICd2aWRlbycsICd0YWdzJ10uY29uY2F0KGlyKTtcclxuICAgICAgICAgICAgZGF0YUZpZWxkcy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5JRCA9IGNvbmZpZ1trZXldO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkUm93W2tleV0gPSBwcmVwYXJlRGF0YShkYXRhUm93W2NvbHVtbklEIHx8IGtleV0sIGtleSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBpbWFnZSAtIHdlIG1pZ2h0IHdhbnQgdG8gdXNlIGEgcGxhY2Vob2xkZXIgYXMgdGhlIHRodW1iLCBhbmQgbG9hZCB0aGUgZnVsbCBpbWFnZSBpbiBiYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZFJvdy5pbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50aHVtYnNQbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkUm93LnBsYWNlaG9sZGVyID0gcGFyc2VkUm93LmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFJvdy5pbWFnZSA9IHBhcnNlZFJvdy5pbWFnZS5yZXBsYWNlKC9fdGh1bWIvZ2ksICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgbWVkaWF0eXBlIG9yIGEgcGxhY2Vob2xkZXIgaWNvblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRSb3cubWVkaWF0eXBlICYmIFsndmlkZW8nLCAnYXVkaW8nLCAnaW1hZ2UnXS5pbmRleE9mKGtleSkgPiAtMSAmJiBjb25maWdba2V5XSAmJiBwYXJzZWRSb3dba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZFJvdy5tZWRpYXR5cGUgPSBrZXlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgaWQgZm9yIGtleXNcclxuICAgICAgICAgICAgcGFyc2VkUm93LmlkID0gZGF0YVJvdy5yZXNwb25zZWlkID8gZGF0YVJvdy5yZXNwb25zZWlkIDogcm93SW5kZXg7XHJcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBsaW5rIHBhc3NlZCBhcyBgc2xpbmtgIHByb3BlcnR5IGluIGRhdGFcclxuICAgICAgICAgICAgaWYgKGRhdGFSb3cuc2xpbmspIHtcclxuICAgICAgICAgICAgICAgIGxldCBsID0gZGF0YVJvdy5zbGluaztcclxuICAgICAgICAgICAgICAgIHBhcnNlZFJvdy5saW5rID0gKC9ocmVmPScoLis/KScvZ2kpLmV4ZWMobCkucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJvdztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy91cGRhdGUgc3RhdGUgd2l0aCB0aGUgbmV3IHNldCBvZiBkYXRhIG9yIGEgbWVyZ2VkIGRhdGFcclxuICAgICAgICBpZiAobW9kZSA9PT0gJ3JlcGxhY2UnKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogbmV3RGF0YSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdhcHBlbmQnKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbLi4ucHJldlN0YXRlLml0ZW1zLCAuLi5uZXdEYXRhXSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnbWVyZ2UnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vZGUpO1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogdW5pb25CeShuZXdEYXRhLCBwcmV2U3RhdGUuaXRlbXMsICdpZCcpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRhdGA0LXQvSDQt9C90LDQtdGCINGH0YLQvicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbWFzc2FnZSBkYXRhIHRvIGZpdCB0aGUgdHlwZSB3ZSBleHBlY3QgdG8gcmVjZWl2ZSBpbiByZWFjdCB2aWV3XHJcbiAgICAgKiAqL1xyXG4gICAgZnVuY3Rpb24gcHJlcGFyZURhdGEoZGF0YTphbnksIHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcmVwYXJlRGF0YScsZGF0YSx0eXBlKVxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKC9zcmM9JyguKz8pJy9naSkuZXhlYyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgIT0gbnVsbCAmJiByZXN1bHRbMV0gPyByZXN1bHRbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcclxuICAgICAgICAgICAgY2FzZSAndGl0bGUnOnJldHVybiAhKGRhdGEuaW5kZXhPZignLScpID4gLTEgJiYgZGF0YS50cmltKCkubGVuZ3RoID09PSAxKSA/IGRhdGEudHJpbSgpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjYXNlICd2aWRlbyc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2F1ZGlvJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAhKGRhdGEuaW5kZXhPZignLScpID4gLTEgJiYgZGF0YS50cmltKCkubGVuZ3RoID09PSAxKSA/IGdlbmVyYXRlTWVkaWFMaW5rKGRhdGEudHJpbSgpLCB0eXBlKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY2FzZSAndGFncyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YSAmJiAoZGF0YS5pbmRleE9mKCcsJykgPiAtMSA/IGRhdGEuc3BsaXQoJywnKSA6IGRhdGEuaW5kZXhPZignLScpID4gLTEgJiYgZGF0YS50cmltKCkubGVuZ3RoID09PSAxID8gdW5kZWZpbmVkIDogZGF0YS50cmltKCkpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVNZWRpYUxpbmsoZmlsZU5hbWU6c3RyaW5nLCB0eXBlOiAnYXVkaW8nfCd2aWRlbycpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZW5lcmF0ZU1lZGlhTGluaycsZmlsZU5hbWUsdHlwZSlcclxuICAgICAgICBjb25zdCBkc05hbWUgPSBjb25maWcuc3VydmV5SUQ7XHJcbiAgICAgICAgcmV0dXJuIGAvcmVwb3J0YWwvV3lzaXd5Zy9SZXBvcnQvJHtxdWVyeS5yZXBvcnRpZH0vJHtkc05hbWV9LyR7dHlwZX0vJHtmaWxlTmFtZX1gXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGF0YUxvYWRpbmdFcnJvcihlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczogW11cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBEUy5sb2FkTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIERTLm5leHRQYWdlKClcclxuICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgRFMubG9hZFByZXZpb3VzUGFnZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gRFMucHJldmlvdXNQYWdlKClcclxuICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgRFMubG9hZE1vcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIERTLm5leHRQYWdlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcHJvY2Vzc0RhdGEocmVzcG9uc2UsICdhcHBlbmQnKSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5pbml0aWFsTG9hZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gRFMuaW5pdGlhbERhdGFMb2FkKClcclxuICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgRFMuZ2V0UGFnZUluZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzUGFnZUluZm8gPSBEUy5wYWdlSW5mbyAmJiBEUy5zb3J0aW5nUGFnaW5nVmFsdWVzICYmIERTLnNvcnRpbmdQYWdpbmdWYWx1ZXMudG90YWxIaXRzO1xyXG4gICAgICAgIHJldHVybiBoYXNQYWdlSW5mbyA/IGAke0RTLnBhZ2VJbmZvfSBvZiAke0RTLnNvcnRpbmdQYWdpbmdWYWx1ZXMudG90YWxIaXRzfWAgOiAnJztcclxuICAgIH07XHJcblxyXG4gICAgRFMuY29uZmlnID0gKCkgPT4geyByZXR1cm4gY29uZmlnICE9IG51bGwgPyBjb25maWcgOiBpbml0aWFsaXNlQ29uZmlnKG9wdGlvbnMuY29uZmlnKSB9O1xyXG5cclxuICAgIHJldHVybiBEU1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RTQWJzdHJhY3Rpb24uanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fcm9vdC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TeW1ib2wuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19NYXAuanMiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzS2V5LmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzU3ltYm9sLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TZXQuanMiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ2YXIgYmFzZUlzRXF1YWxEZWVwID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Nhc3RQYXRoLmpzIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc1N0cmljdENvbXBhcmFibGUuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCBmb3Igc291cmNlIHZhbHVlcyBzdWl0YWJsZVxuICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2VxLmpzIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2tleXMuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fSGFzaC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fUHJvbWlzZS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcHBseS5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qcyIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheU1hcC5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0ZsYXR0ZW5hYmxlID0gcmVxdWlyZSgnLi9faXNGbGF0dGVuYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggc3VwcG9ydCBmb3IgcmVzdHJpY3RpbmcgZmxhdHRlbmluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcGFyYW0ge251bWJlcn0gZGVwdGggVGhlIG1heGltdW0gcmVjdXJzaW9uIGRlcHRoLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJlZGljYXRlPWlzRmxhdHRlbmFibGVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1N0cmljdF0gUmVzdHJpY3QgdG8gdmFsdWVzIHRoYXQgcGFzcyBgcHJlZGljYXRlYCBjaGVja3MuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBkZXB0aCwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHByZWRpY2F0ZSB8fCAocHJlZGljYXRlID0gaXNGbGF0dGVuYWJsZSk7XG4gIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChkZXB0aCA+IDAgJiYgcHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBmbGF0dGVuIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmxhdHRlbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlRmxhdHRlbi5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaGFzSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VIYXNJbihvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYga2V5IGluIE9iamVjdChvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VIYXNJbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSGFzSW4uanMiLCJ2YXIgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBiYXNlSXNOYU4gPSByZXF1aXJlKCcuL19iYXNlSXNOYU4nKSxcbiAgICBzdHJpY3RJbmRleE9mID0gcmVxdWlyZSgnLi9fc3RyaWN0SW5kZXhPZicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlXG4gICAgPyBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KVxuICAgIDogYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUlzTmFOLCBmcm9tSW5kZXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmFOO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hTi5qcyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzJyksXG4gICAgYmFzZU1hdGNoZXNQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgcHJvcGVydHkgPSByZXF1aXJlKCcuL3Byb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXRlcmF0ZWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhbiBpdGVyYXRlZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgaXRlcmF0ZWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJdGVyYXRlZSh2YWx1ZSkge1xuICAvLyBEb24ndCBzdG9yZSB0aGUgYHR5cGVvZmAgcmVzdWx0IGluIGEgdmFyaWFibGUgdG8gYXZvaWQgYSBKSVQgYnVnIGluIFNhZmFyaSA5LlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NjAzNCBmb3IgbW9yZSBkZXRhaWxzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKVxuICAgICAgPyBiYXNlTWF0Y2hlc1Byb3BlcnR5KHZhbHVlWzBdLCB2YWx1ZVsxXSlcbiAgICAgIDogYmFzZU1hdGNoZXModmFsdWUpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUl0ZXJhdGVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9fYmFzZUlzTWF0Y2gnKSxcbiAgICBnZXRNYXRjaERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXRjaERhdGEnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKSxcbiAgICBnZXQgPSByZXF1aXJlKCcuL2dldCcpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5RGVlcC5qcyIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBvdmVyUmVzdCA9IHJlcXVpcmUoJy4vX292ZXJSZXN0JyksXG4gICAgc2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19zZXRUb1N0cmluZycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsInZhciBjb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQnKSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTZXRUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVGltZXMuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKSxcbiAgICBjcmVhdGVTZXQgPSByZXF1aXJlKCcuL19jcmVhdGVTZXQnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuaXFCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHNlZW4gPSByZXN1bHQ7XG5cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gIH1cbiAgZWxzZSBpZiAobGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICB2YXIgc2V0ID0gaXRlcmF0ZWUgPyBudWxsIDogY3JlYXRlU2V0KGFycmF5KTtcbiAgICBpZiAoc2V0KSB7XG4gICAgICByZXR1cm4gc2V0VG9BcnJheShzZXQpO1xuICAgIH1cbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgc2VlbiA9IG5ldyBTZXRDYWNoZTtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWVuID0gaXRlcmF0ZWUgPyBbXSA6IHJlc3VsdDtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciBzZWVuSW5kZXggPSBzZWVuLmxlbmd0aDtcbiAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHNlZW4sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgaWYgKHNlZW4gIT09IHJlc3VsdCkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmlxO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2JqZWN0IG9mIGB2YWx1ZXNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBzZXQuXG4gKi9cbnZhciBjcmVhdGVTZXQgPSAhKFNldCAmJiAoMSAvIHNldFRvQXJyYXkobmV3IFNldChbLC0wXSkpWzFdKSA9PSBJTkZJTklUWSkgPyBub29wIDogZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgU2V0KHZhbHVlcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jcmVhdGVTZXQuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGV4aXN0cyBvbiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICBpZiAoIShyZXN1bHQgPSBvYmplY3QgIT0gbnVsbCAmJiBoYXNGdW5jKG9iamVjdCwga2V5KSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgfVxuICBpZiAocmVzdWx0IHx8ICsraW5kZXggIT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBsZW5ndGggPSBvYmplY3QgPT0gbnVsbCA/IDAgOiBvYmplY3QubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNQYXRoLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwcmVhZGFibGVTeW1ib2wgPSBTeW1ib2wgPyBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgZmxhdHRlbmFibGUgYGFyZ3VtZW50c2Agb2JqZWN0IG9yIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZsYXR0ZW5hYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzRmxhdHRlbmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSB8fFxuICAgICEhKHNwcmVhZGFibGVTeW1ib2wgJiYgdmFsdWUgJiYgdmFsdWVbc3ByZWFkYWJsZVN5bWJvbF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRmxhdHRlbmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNGbGF0dGVuYWJsZS5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX292ZXJSZXN0LmpzIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ2YXIgYmFzZVNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVNldFRvU3RyaW5nJyksXG4gICAgc2hvcnRPdXQgPSByZXF1aXJlKCcuL19zaG9ydE91dCcpO1xuXG4vKipcbiAqIFNldHMgdGhlIGB0b1N0cmluZ2AgbWV0aG9kIG9mIGBmdW5jYCB0byByZXR1cm4gYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgc2V0VG9TdHJpbmcgPSBzaG9ydE91dChiYXNlU2V0VG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3J0T3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3Nob3J0T3V0LmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja1NldC5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanMiLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlTGVhZGluZ0RvdCA9IC9eXFwuLyxcbiAgICByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAocmVMZWFkaW5nRG90LnRlc3Qoc3RyaW5nKSkge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCIvKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmV0dXJuIGZyb20gdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbnN0YW50IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IF8udGltZXMoMiwgXy5jb25zdGFudCh7ICdhJzogMSB9KSk7XG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0cyk7XG4gKiAvLyA9PiBbeyAnYSc6IDEgfSwgeyAnYSc6IDEgfV1cbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzWzBdID09PSBvYmplY3RzWzFdKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2NvbnN0YW50LmpzIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9nZXQuanMiLCJ2YXIgYmFzZUhhc0luID0gcmVxdWlyZSgnLi9fYmFzZUhhc0luJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaGFzSW4uanMiLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCIvKipcbiAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmxhc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gbGFzdChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPyBhcnJheVtsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbGFzdC5qcyIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbWVtb2l6ZS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL25vb3AuanMiLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5JyksXG4gICAgYmFzZVByb3BlcnR5RGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eURlZXAnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBhIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiAyIH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiAxIH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmInKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLm1hcChfLnNvcnRCeShvYmplY3RzLCBfLnByb3BlcnR5KFsnYScsICdiJ10pKSwgJ2EuYicpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHRvS2V5KHBhdGgpKSA6IGJhc2VQcm9wZXJ0eURlZXAocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9wcm9wZXJ0eS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ2YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4vbGFzdCcpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8udW5pb25gIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGl0ZXJhdGVlYCB3aGljaCBpc1xuICogaW52b2tlZCBmb3IgZWFjaCBlbGVtZW50IG9mIGVhY2ggYGFycmF5c2AgdG8gZ2VuZXJhdGUgdGhlIGNyaXRlcmlvbiBieVxuICogd2hpY2ggdW5pcXVlbmVzcyBpcyBjb21wdXRlZC4gUmVzdWx0IHZhbHVlcyBhcmUgY2hvc2VuIGZyb20gdGhlIGZpcnN0XG4gKiBhcnJheSBpbiB3aGljaCB0aGUgdmFsdWUgb2NjdXJzLiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDpcbiAqICh2YWx1ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0gey4uLkFycmF5fSBbYXJyYXlzXSBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBjb21iaW5lZCB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udW5pb25CeShbMi4xXSwgWzEuMiwgMi4zXSwgTWF0aC5mbG9vcik7XG4gKiAvLyA9PiBbMi4xLCAxLjJdXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLnVuaW9uQnkoW3sgJ3gnOiAxIH1dLCBbeyAneCc6IDIgfSwgeyAneCc6IDEgfV0sICd4Jyk7XG4gKiAvLyA9PiBbeyAneCc6IDEgfSwgeyAneCc6IDIgfV1cbiAqL1xudmFyIHVuaW9uQnkgPSBiYXNlUmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgdmFyIGl0ZXJhdGVlID0gbGFzdChhcnJheXMpO1xuICBpZiAoaXNBcnJheUxpa2VPYmplY3QoaXRlcmF0ZWUpKSB7XG4gICAgaXRlcmF0ZWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGJhc2VVbmlxKGJhc2VGbGF0dGVuKGFycmF5cywgMSwgaXNBcnJheUxpa2VPYmplY3QsIHRydWUpLCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDIpKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaW9uQnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC91bmlvbkJ5LmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDEwLjAxLjIwMTcuXG4gKi9cbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSBcInItcmVwb3J0YWwtYmFzZVwiO1xuaW1wb3J0IEhpdGxpc3RTZXR1cCBmcm9tIFwiLi9oaXRsaXN0LXNldHVwXCI7XG5cbmNsYXNzIEhpdGxpc3REYXRhc291cmNlIGV4dGVuZHMgSGl0bGlzdFNldHVwe1xuICAvKipcbiAgICogVGhpcyBjbGFzcyBhbGxvd3MgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB3aXRoIHRoZSBIaXRMaXN0IGRhdGFiYXNlIGFuZCB1c2UgdXRpbGl0eSBtZXRob2RzIHRvIHF1ZXJ5IGFuZCBmaWx0ZXIgZGF0YSBwcm92aWRlZCB0aGVyZSdzIGEgaGl0bGlzdCBvbiB0aGUgcGFnZVxuICAgKiBAZXh0ZW5kcyBIaXRsaXN0U2V0dXBcbiAgICogKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucz17fSl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZXM9W107XG4gICAgLyoqIEBwcm9wZXJ0eSB7U3RyaW5nfSBtb2RpZmllciAtIGV4dHJhIHBhcmFtcyBhZGRlZCBhcyBhIHN0cmluZyBmcm9tIGZpbHRlcnMgKi9cbiAgICB0aGlzLm1vZGlmaWVyID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogcGVyZm9ybXMgaW5pdGlhbCBkYXRhIGxvYWRcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgaW5pdGlhbERhdGFMb2FkKCl7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2luaXRpYWxMb2FkOnRydWV9KVxuICB9XG4gIC8qKlxuICAgKiBsb2FkcyBuZXh0IHBhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgbmV4dFBhZ2UoKXtcbiAgICB0aGlzLl9za2lwUGFnZSh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2lzUGFnaW5nOiB0cnVlfSx0aGlzLm1vZGlmaWVyKTtcbiAgfVxuICAvKipcbiAgICogbG9hZHMgcHJldmlvdXMgcGFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgb2YgZGF0YVxuICAgKiAqL1xuICBwcmV2aW91c1BhZ2UoKXtcbiAgICB0aGlzLl9za2lwUGFnZShmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpc1BhZ2luZzogdHJ1ZX0sdGhpcy5tb2RpZmllcik7XG4gIH1cblxuICAvKipcbiAgICogcXVlcmllcyBIaXRMaXN0IEFQSVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiAqL1xuICByZXF1ZXN0UmVzcG9uc2Uob3B0aW9ucyl7XG4gICAgbGV0IHF1ZXJ5PSBSZXBvcnRhbEJhc2UubG9jYXRpb25EZXNlcmlhbGl6ZSgpLnF1ZXJ5O1xuICAgIGlmKHF1ZXJ5ICYmIHF1ZXJ5LnJlcG9ydGlkICYmIHRoaXMuaGl0bGlzdElEKXtcbiAgICAgIC8qc2V0IGNvbW1vbiBwYXJhbXMqL1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgUGFnZUlkOiB0aGlzLnBhZ2VJRCxcbiAgICAgICAgcGFnZVN0YXRlSWQ6IHRoaXMucGFnZVN0YXRlSUQsXG4gICAgICAgIFByZXZpZXc6IHF1ZXJ5LnByZXZpZXdcbiAgICAgIH07XG5cbiAgICAgIC8qaWYgb3B0aW9ucyBhcmUgcGFzc2VkLCBhZGQgb3B0aW9ucyovXG4gICAgICBpZihvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGZvciAobGV0IGF0dHJuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICBwYXJhbXNbYXR0cm5hbWVdID0gdHlwZW9mIG9wdGlvbnNbYXR0cm5hbWVdPT09J2Jvb2xlYW4nPyhvcHRpb25zW2F0dHJuYW1lXT8nMSc6JzAnKTpvcHRpb25zW2F0dHJuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighcGFyYW1zLnNlYXJjaCAmJiB0aGlzLl9zZWFyY2hWYWx1ZXMubGVuZ3RoPjApe1xuICAgICAgICBwYXJhbXMuc2VhcmNoID0gSlNPTi5zdHJpbmdpZnkodGhpcy5fc2VhcmNoVmFsdWVzKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXM7XG5cbiAgICAgIGlmIChzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcyE9bnVsbCAmJiAhaXNOYU4oc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnZU51bWJlcikpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pbml0aWFsTG9hZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdlTnVtYmVyICs9IHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2luZ0ZvcndhcmQgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcGFyYW1zLnNvcnRpbmdQYWdpbmdWYWx1ZXM9SlNPTi5zdHJpbmdpZnkoc29ydGluZ1BhZ2luZ1ZhbHVlcyk7XG5cbiAgICAgIHJldHVybiBSZXBvcnRhbEJhc2UucHJvbWlzZVJlcXVlc3QoYCR7dGhpcy5zZXJ2aWNlVVJMfSYke0hpdGxpc3REYXRhc291cmNlLnNlcmlhbGl6ZVBhcmFtcyhwYXJhbXMpfSR7dGhpcy5tb2RpZmllciE9Jyc/JyYnK3RoaXMubW9kaWZpZXI6Jyd9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PnRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBIaXRMaXN0IEFQSSByZXNwb25zZVxuICAgKiAqL1xuICBwYXJzZVJlc3BvbnNlKHJlc3BvbnNlKXtcbiAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuXG4gICAgdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzID0gcmVzcG9uc2Uuc29ydGluZ1BhZ2luZ1ZhbHVlcztcbiAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIHRoaXMucGFnZUluZm8gPSByZXNwb25zZS5wYWdlSW5mbztcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcGFnaW5nRm9yd2FyZCBpZiBgdHJ1ZWAgZ29lcyBmb3J3YXJkLCBpZiBgbnVsbGAgZ29lcyBiYWNrd2FyZFxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogKi9cbiAgX3NraXBQYWdlKHBhZ2luZ0ZvcndhcmQpe1xuICAgIGxldCBfc3B2ID0gey4uLnRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlc307XG4gICAgbGV0IHB2ID0gey4uLl9zcHYucGFnaW5nVmFsdWVzfSB8fCB7fTtcbiAgICBwdi5wYWdpbmdGb3J3YXJkID0gcGFnaW5nRm9yd2FyZDsgLyppZiBmb3J3YXJkIGlzIG5lZWRlZCB0aGVuIHBhc3MgdHJ1ZSwgZWxzZSBudWxsIC0gYmFja3dhcmQqL1xuICAgIHB2LnN0YXJ0SWQgPSBwYWdpbmdGb3J3YXJkID8gcHYubGFzdFN0YXJ0SWQgOiBwdi5maXJzdFN0YXJ0SWQ7XG4gICAgcHYuc3RhcnRWYWx1ZSA9IHBhZ2luZ0ZvcndhcmQgPyBwdi5sYXN0U3RhcnRWYWx1ZSA6IHB2LmZpcnN0U3RhcnRWYWx1ZTtcbiAgICB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB7XG4gICAgICAuLi50aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMsXG4gICAgICBwYWdpbmdWYWx1ZXM6IHB2XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXJpYWxpemUgcGFyYW1zIGludG8gYSBxdWVyeSBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyAtIGFuIG9iamVjdCB3aXRoIHBhcmFtZXRlcnNcbiAgICogKi9cbiAgc3RhdGljIHNlcmlhbGl6ZVBhcmFtcyhwYXJhbXMpe1xuICAgIGxldCBxdWVyeSA9IFtdO1xuICAgIGZvcihsZXQga2V5IGluIHBhcmFtcyl7XG4gICAgICBxdWVyeS5wdXNoKFtrZXkscGFyYW1zW2tleV1dLmpvaW4oJz0nKSk7XG4gICAgfVxuICAgIHJldHVybiBxdWVyeS5qb2luKCcmJylcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpdGxpc3REYXRhc291cmNlO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3QtZGF0YXNvdXJjZS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMC4wMS4yMDE3LlxuICovXG5cbmNsYXNzIEhpdGxpc3RTZXR1cHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICAvL2ZpeCBmb3Igd2luZG93LmxvY2F0aW9uIG9yaWdpbiwgdGhhbnggSUVcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IEhpdGxpc3RTZXR1cC5nZXRPcmlnaW5hbENvbmZpZygpO1xuICAgIHRoaXMuX2VsZW1lbnRUeXBlID0gd2luZG93LkhpdExpc3RFbGVtZW50VHlwZTtcbiAgICB0aGlzLl9vcCA9IHdpbmRvdy5TZWFyY2hhYmxlTGlzdE9wZXJhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGFsbG93cyBnZXR0aW5nIGEgbG9jYWxpc2VkIHN0cmluZyBpbiB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIHJlcG9ydCBmcm9tIEhpdGxpc3QgY29uZmlnLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gdGhlIGtleSB0byBsb29rIHRoZSBwcm9wZXJ0eSB1cFxuICAgKlxuICAgKiAqIGBzdG9lYDpcIlNtYWxsZXIgdGhhbiBvciBlcXVhbFwiLFxuICAgKiAqIGBndG9lYDpcIkdyZWF0ZXIgdGhhbiBvciBlcXVhbFwiLFxuICAgKiAqIGBiZXR3ZWVuYDpcIkJldHdlZW5cIixcbiAgICogKiBgYmVmb3JlYDpcIkJlZm9yZVwiLFxuICAgKiAqIGBhZnRlcmA6XCJBZnRlclwiLFxuICAgKiAqIGBleGFjdGx5YDpcIkV4YWN0bHlcIixcbiAgICogKiBgc2hvd2RlZmF1bHRjb2xzYDpcIlNob3cgZGVmYXVsdCBjb2x1bW5zXCIsXG4gICAqICogYGFwcGx5YDpcIkFwcGx5XCIsXG4gICAqICogYGNhbmNlbGA6XCJDYW5jZWxcIixcbiAgICogKiBgc2hvd2hpZGVgOlwiU2hvdyAvIEhpZGUgY29sdW1uc1wiLFxuICAgKiAqIGB5ZXNgOlwiWWVzXCIsXG4gICAqICogYG5vYDpcIk5vXCIsXG4gICAqICogYGxvYWRpbmdEYXRhYDpcIkxvYWRpbmcgZGF0YSwgcGxlYXNlIHdhaXQuLi5cIixcIlxuICAgKiAqIGBjaGVja2FsbGA6XCJDaGVjayBhbGxcIixcbiAgICogKiBgdW5jaGVja2FsbGA6XCJVbmNoZWNrIGFsbFwiLFxuICAgKiAqIGBlcnJvckxvYWRpbmdgOlwiRXJyb3IgbG9hZGluZyBkYXRhXCIsXG4gICAqICogYGVycm9yTm9Db2x1bW5zYDpcIk5vIGNvbHVtbnMgc2VsZWN0ZWRcIlxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19SRVNQT05ERU5UT1ZFUlZJRVdgOlwiUmVzcG9uZGVudCBvdmVydmlld1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUklOVGA6XCJQcmludCB0aGUgY3VycmVudCByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX0NMT1NFYDpcIkNsb3NlIHRoaXMgb3ZlcmxheVwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19GSUxURVJgOlwiRmlsdGVyIHF1ZXN0aW9uc1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19OT1RISU5HRk9VTkRgOlwiTm8gcXVlc3Rpb25zIG1hdGNoIHlvdXIgc2VhcmNoXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTYDpcIlByZXZpb3VzXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTSElOVGA6XCJQcmV2aW91cyByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX05FWFRgOlwiTmV4dFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19ORVhUSElOVGA6XCJOZXh0IHJlc3BvbmRlbnRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfT0ZgOlwiezB9IG9mIHsxfVwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19NT1JFYDpcInswfSBtb3JlXCIsXG4gICAqICogUkVQT1JUX1NJTkdMRVZJRVdfQUxURVJOQVRJVkVTYDpcIkFuc3dlcnMgYWx0ZXJuYXRpdmVzOlwiXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqICovXG4gIGkxOG4oa2V5KXtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmNhcHRpb25zLmhhc093blByb3BlcnR5KGtleSk/dGhpcy5fY29uZmlnLmNhcHRpb25zW2tleV06dGhpcy5fY29uZmlnLnNpbmdsZVZpZXdUZXh0cy5oYXNPd25Qcm9wZXJ0eShrZXkpP3RoaXMuX2NvbmZpZy5zaW5nbGVWaWV3VGV4dHNba2V5XTpudWxsXG4gIH1cblxuICBnZXQgZGF0YSgpe3JldHVybiB0aGlzLl9jb25maWcuaGl0bGlzdERhdGF9XG5cbiAgc2V0IGRhdGEoZGF0YSl7XG4gICAgdGhpcy5fY29uZmlnLmhpdGxpc3REYXRhID0gZGF0YTtcbiAgfVxuICBnZXQgZGlzYWJsZU5leHRCdXR0b24oKXtcbiAgICByZXR1cm4gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLmRpc2FibGVOZXh0QnV0dG9uIHx8IGZhbHNlXG4gIH1cbiAgZ2V0IGRpc2FibGVQcmV2QnV0dG9uKCl7XG4gICAgcmV0dXJuIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcy5kaXNhYmxlUHJldkJ1dHRvbiB8fCBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHZpc2libGUgSGl0TGlzdCBjb2x1bW5zIG9mIE9iamVjdCB0eXBlOiBge2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfWBcbiAgICogQHJldHVybnMge0FycmF5Ljx7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9Pn0gUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgdmlzaWJsZSBIaXRMaXN0IGNvbHVtbnNcbiAgICogKi9cbiAgZ2V0IGNvbHVtbnMoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmNvbHVtbnN9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIEhpdExpc3QgY29sdW1ucyBvZiBPYmplY3QgdHlwZTogYHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ31gXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICogKi9cbiAgZ2V0IGFsbENvbHVtbnMoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmFsbENvbHVtbnN9XG5cbiAgZ2V0IGhpdGxpc3RJRCgpe3JldHVybiB0aGlzLl9jb25maWcuY29tcG9uZW50SWR9XG4gIGdldCBwYWdlSUQoKXtyZXR1cm4gdGhpcy5fY29uZmlnLnBhZ2VJZH1cbiAgZ2V0IGxhbmd1YWdlKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5sYW5ndWFnZX1cbiAgZ2V0IHNlcnZpY2VVUkwoKXtyZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3RoaXMuX2NvbmZpZy5zZXJ2aWNlVXJsfWB9XG4gIGdldCBwYWdlU3RhdGVJRCgpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUGFnZVN0YXRlSWQnKT8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1BhZ2VTdGF0ZUlkJykudmFsdWU6dW5kZWZpbmVkfVxuICBnZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcygpe1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlcyE9bnVsbD90aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlczp7fVxuICB9XG4gIHNldCBzb3J0aW5nUGFnaW5nVmFsdWVzKHZhbCl7XG4gICAgdGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB2YWw7XG4gIH1cblxuICBzdGF0aWMgX2ZpeEpzb25EYXRlKGpzb25EYXRlKSB7XG4gICAgaWYgKCEoanNvbkRhdGUgJiYgWSAmJiBZLkxhbmcuaXNGdW5jdGlvbihqc29uRGF0ZS5yZXBsYWNlKSkpIHtyZXR1cm4ganNvbkRhdGU7fVxuICAgIGxldCBjb25zdHIgPSBqc29uRGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeL0RhdGVcXFxcKChbLStdP1xcXFxkKylcXFxcKS8kXCIpLCBcIm5ldyBEYXRlKCQxKVwiKTtcbiAgICBpZiAoY29uc3RyID09IGpzb25EYXRlKSB7cmV0dXJuIGpzb25EYXRlO31cbiAgICByZXR1cm4gZXZhbChjb25zdHIpO1xuICB9XG5cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIGNvbmZpZyBmb3IgYSBIaXRMaXN0IGlmIGl0J3MgaW5pdGlhbGlzZWQgb24gdGhlIHBhZ2VcbiAgICogYGBgXG4gICAqIHtcbiAgICogIGFsbENvbHVtbnM6QXJyYXksXG4gICAqICBjYXB0aW9uczpPYmplY3QsXG4gICAqICBjbGllbnRJZDpTdHJpbmcsXG4gICAqICBjb2x1bW5zOkFycmF5LFxuICAgKiAgY29tcG9uZW50SWQ6U3RyaW5nLFxuICAgKiAgaGFzaGVkUHJvamVjdElkOlN0cmluZyxcbiAgICogIGhpdGxpc3REYXRhOkFycmF5LFxuICAgKiAgbGFuZ3VhZ2U6TnVtYmVyLFxuICAgKiAgbmV4dFRleHQ6U3RyaW5nLFxuICAgKiAgbm9Jbml0aWFsTG9hZDpCb29sZWFuLFxuICAgKiAgcGFnZUFqYXhFbmFibGVkOkJvb2xlYW4sXG4gICAqICBwYWdlSWQ6U3RyaW5nLFxuICAgKiAgcHJldlRleHQ6U3RyaW5nLFxuICAgKiAgcHJldmlldzpCb29sZWFuLFxuICAgKiAgc2VhcmNoSXRlbXM6QXJyYXksXG4gICAqICBzZWFyY2hWYWx1ZXM6QXJyYXksXG4gICAqICBzZXJ2aWNlVXJsOlN0cmluZyxcbiAgICogIHNlcnZpY2VVcmxNZXRhRGF0YTpTdHJpbmcsXG4gICAqICBzaG93U2luZ2xlVmlld09uUm93U2VsZWN0OkJvb2xlYW4sXG4gICAqICBzaW5nbGVWaWV3QXBpVXJsOlN0cmluZyxcbiAgICogIHNpbmdsZVZpZXdGb3Jtc0NodW5rQXBpVXJsOlN0cmluZyxcbiAgICogIHNpbmdsZVZpZXdUZXh0czpPYmplY3QsXG4gICAqICBzb3J0aW5nUGFnaW5nVmFsdWVzOk9iamVjdCxcbiAgICogIHN0eWxlczpPYmplY3QsXG4gICAqICB2ZXJzaW9uOlN0cmluZ1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiAqL1xuICBzdGF0aWMgZ2V0T3JpZ2luYWxDb25maWcoKXtcbiAgICBsZXQgc2NyaXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpO1xuICAgIGlmKHNjcmlwdHMpe1xuICAgICAgbGV0IGk9c2NyaXB0cy5sZW5ndGgsXG4gICAgICAgICAgY2ZnID0gLyhZXFwuUmVwb3J0YWxcXC5IaXRMaXN0LClcXHMoLio/KVxcKTsvZ2k7XG4gICAgICB3aGlsZShpLS0pe1xuICAgICAgICBsZXQgc2NyaXB0ID0gc2NyaXB0c1tpXS50ZXh0O1xuICAgICAgICBpZihzY3JpcHQuaW5kZXhPZignWS5SZXBvcnRhbC5IaXRMaXN0LCcpPi0xKXtcbiAgICAgICAgICBsZXQgZXhlYyA9IGNmZy5leGVjKHNjcmlwdCk7XG4gICAgICAgICAgcmV0dXJuIChleGVjIT1udWxsICYmIGV4ZWNbMl0pPyBKU09OLnBhcnNlKGV4ZWNbMl0pOiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGl0bGlzdCBjb25maWcgaXMgbm90IHByZXNlbnQgb24gdGhlIHBhZ2UnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0U2V0dXBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3Qtc2V0dXAuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMDcuMDkuMjAxNi5cbiAqL1xuXG5pbXBvcnQgSGl0bGlzdERhdGFzb3VyY2UgZnJvbSBcIi4vaGl0bGlzdC1kYXRhc291cmNlXCI7XG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gXCJyLXJlcG9ydGFsLWJhc2VcIjtcblxud2luZG93LlJlcG9ydGFsID0gd2luZG93LlJlcG9ydGFsIHx8IHt9O1xuUmVwb3J0YWxCYXNlLm1peGluKHdpbmRvdy5SZXBvcnRhbCx7XG4gIEhpdGxpc3REYXRhc291cmNlXG59KTtcbmV4cG9ydCBkZWZhdWx0IEhpdGxpc3REYXRhc291cmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=