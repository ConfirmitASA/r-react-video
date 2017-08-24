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
	
	
	var _react = __webpack_require__(70);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(71);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _main = __webpack_require__(69);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _ReactVideo = __webpack_require__(72);
	
	var _ReactVideo2 = _interopRequireDefault(_ReactVideo);
	
	var _rReportalBase = __webpack_require__(68);
	
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(29)('wks');
	var uid = __webpack_require__(32);
	var _Symbol = __webpack_require__(2).Symbol;
	var USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
	// eslint-disable-next-line no-new-func
	: Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(12);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(13);
	var createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(6) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.5.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(23)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(8);
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
/* 11 */
/***/ (function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(3);
	var IE8_DOM_DEFINE = __webpack_require__(38);
	var toPrimitive = __webpack_require__(61);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 14 */
/***/ (function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(12);
	var document = __webpack_require__(2).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(13).f;
	var has = __webpack_require__(11);
	var TAG = __webpack_require__(1)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(29)('keys');
	var uid = __webpack_require__(32);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(40);
	var defined = __webpack_require__(14);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(9);
	var TAG = __webpack_require__(1)('toStringTag');
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
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(2);
	var core = __webpack_require__(5);
	var ctx = __webpack_require__(10);
	var hide = __webpack_require__(4);
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var document = __webpack_require__(2).document;
	module.exports = document && document.documentElement;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(26);
	var $export = __webpack_require__(22);
	var redefine = __webpack_require__(55);
	var hide = __webpack_require__(4);
	var has = __webpack_require__(11);
	var Iterators = __webpack_require__(7);
	var $iterCreate = __webpack_require__(43);
	var setToStringTag = __webpack_require__(16);
	var getPrototypeOf = __webpack_require__(49);
	var ITERATOR = __webpack_require__(1)('iterator');
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
/* 26 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = true;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	
	var aFunction = __webpack_require__(8);
	
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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(2);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(10);
	var invoke = __webpack_require__(39);
	var html = __webpack_require__(24);
	var cel = __webpack_require__(15);
	var global = __webpack_require__(2);
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
	  if (__webpack_require__(9)(process) == 'process') {
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(18);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';
	
	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(64);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(65);
	module.exports = __webpack_require__(5).Promise;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function () {/* empty */};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(19);
	var toLength = __webpack_require__(31);
	var toAbsoluteIndex = __webpack_require__(59);
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(10);
	var call = __webpack_require__(42);
	var isArrayIter = __webpack_require__(41);
	var anObject = __webpack_require__(3);
	var toLength = __webpack_require__(31);
	var getIterFn = __webpack_require__(62);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(6) && !__webpack_require__(23)(function () {
	  return Object.defineProperty(__webpack_require__(15)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ }),
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(9);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(7);
	var ITERATOR = __webpack_require__(1)('iterator');
	var ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(3);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(47);
	var descriptor = __webpack_require__(28);
	var setToStringTag = __webpack_require__(16);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(4)(IteratorPrototype, __webpack_require__(1)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(1)('iterator');
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
/* 45 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(2);
	var macrotask = __webpack_require__(30).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(9)(process) == 'process';
	
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(3);
	var dPs = __webpack_require__(48);
	var enumBugKeys = __webpack_require__(21);
	var IE_PROTO = __webpack_require__(17)('IE_PROTO');
	var Empty = function Empty() {/* empty */};
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(15)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(24).appendChild(iframe);
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(13);
	var anObject = __webpack_require__(3);
	var getKeys = __webpack_require__(51);
	
	module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(11);
	var toObject = __webpack_require__(60);
	var IE_PROTO = __webpack_require__(17)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(11);
	var toIObject = __webpack_require__(19);
	var arrayIndexOf = __webpack_require__(36)(false);
	var IE_PROTO = __webpack_require__(17)('IE_PROTO');
	
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(50);
	var enumBugKeys = __webpack_require__(21);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 52 */
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var newPromiseCapability = __webpack_require__(27);
	
	module.exports = function (C, x) {
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var hide = __webpack_require__(4);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];else hide(target, key, src[key]);
	  }return target;
	};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(4);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(2);
	var core = __webpack_require__(5);
	var dP = __webpack_require__(13);
	var DESCRIPTORS = __webpack_require__(6);
	var SPECIES = __webpack_require__(1)('species');
	
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(3);
	var aFunction = __webpack_require__(8);
	var SPECIES = __webpack_require__(1)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(18);
	var defined = __webpack_require__(14);
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(18);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(14);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(12);
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(20);
	var ITERATOR = __webpack_require__(1)('iterator');
	var Iterators = __webpack_require__(7);
	module.exports = __webpack_require__(5).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(34);
	var step = __webpack_require__(45);
	var Iterators = __webpack_require__(7);
	var toIObject = __webpack_require__(19);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(25)(Array, 'Array', function (iterated, kind) {
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
/* 64 */
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(26);
	var global = __webpack_require__(2);
	var ctx = __webpack_require__(10);
	var classof = __webpack_require__(20);
	var $export = __webpack_require__(22);
	var isObject = __webpack_require__(12);
	var aFunction = __webpack_require__(8);
	var anInstance = __webpack_require__(35);
	var forOf = __webpack_require__(37);
	var speciesConstructor = __webpack_require__(57);
	var task = __webpack_require__(30).set;
	var microtask = __webpack_require__(46)();
	var newPromiseCapabilityModule = __webpack_require__(27);
	var perform = __webpack_require__(52);
	var promiseResolve = __webpack_require__(53);
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
	    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
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
	  Internal.prototype = __webpack_require__(54)($Promise.prototype, {
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
	__webpack_require__(16)($Promise, PROMISE);
	__webpack_require__(56)(PROMISE);
	Wrapper = __webpack_require__(5)[PROMISE];
	
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
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(44)(function (iter) {
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(58)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(25)(String, 'String', function (iterated) {
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(63);
	var global = __webpack_require__(2);
	var hide = __webpack_require__(4);
	var Iterators = __webpack_require__(7);
	var TO_STRING_TAG = __webpack_require__(1)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _promise = __webpack_require__(33);
	
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
/* 69 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(70);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGrid = __webpack_require__(220);
	
	var _ImageGrid2 = _interopRequireDefault(_ImageGrid);
	
	var _SingleView = __webpack_require__(222);
	
	var _SingleView2 = _interopRequireDefault(_SingleView);
	
	var _DSAbstraction = __webpack_require__(218);
	
	var _DSAbstraction2 = _interopRequireDefault(_DSAbstraction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by IvanP on 11.01.2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var ReactVideo = function (_React$Component) {
	  _inherits(ReactVideo, _React$Component);
	
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
	      singleView: {
	        link: ''
	      },
	      singleViewVisible: false,
	      disableSingleViewPrev: false,
	      disableSingleViewNext: false
	    }, _this.returnToGrid = function () {
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
	      var _this$checkSingleView = _this.checkSingleViewNavState(_this.state.items.indexOf(item)),
	          _this$checkSingleView2 = _slicedToArray(_this$checkSingleView, 2),
	          disableSingleViewPrev = _this$checkSingleView2[0],
	          disableSingleViewNext = _this$checkSingleView2[1];
	
	      _this.setState({
	        disableSingleViewPrev: disableSingleViewPrev,
	        disableSingleViewNext: disableSingleViewNext,
	        singleView: item,
	        singleViewVisible: true
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	  /**
	   * @param {Object} props
	   * @param {String} props.config - name of the config that maps question ids from data with the data types
	   * @param {Boolean} props.thumbsPlaceholder - display thumbs as image placeholders instead of media icons
	   *
	   * */
	
	
	  _createClass(ReactVideo, [{
	    key: "render",
	    value: function render() {
	      var _state = this.state,
	          items = _state.items,
	          singleViewVisible = _state.singleViewVisible,
	          singleView = _state.singleView,
	          error = _state.error,
	          disableSingleViewPrev = _state.disableSingleViewPrev,
	          disableSingleViewNext = _state.disableSingleViewNext;
	
	      var render = null;
	      if (!error && Array.isArray(items) && items.length !== 0) {
	        render = _react2.default.createElement(
	          "div",
	          { className: "GridContainer " + (!singleViewVisible ? 'GridView' : '') },
	          singleViewVisible && _react2.default.createElement(
	            _SingleView2.default,
	            {
	              returnToGridAction: this.returnToGrid,
	              loadPreviousItem: this.loadPreviousItem,
	              loadNextItem: this.loadNextItem,
	              headerText: "Edit video \"" + singleView.title + "\"",
	              disableSingleViewPrev: disableSingleViewPrev,
	              disableSingleViewNext: disableSingleViewNext
	            },
	            _react2.default.createElement("iframe", { className: "renderArea", src: singleView.link })
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "ImageGridContainer", style: { display: !singleViewVisible ? 'block' : 'none' } },
	            _react2.default.createElement(_ImageGrid2.default, {
	              aspect: "16:9",
	              onSelect: this.onSelect,
	              items: items
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
	    key: "dataLoadingMessage",
	    value: function dataLoadingMessage() {
	      var message = void 0;
	      var _state2 = this.state,
	          items = _state2.items,
	          error = _state2.error;
	
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
	    key: "renderNavigation",
	    value: function renderNavigation() {
	      var config = this.DS.config();
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
	    key: "pagingNavigation",
	    value: function pagingNavigation() {
	      var pageInfo = this.DS.getPageInfo();
	      return _react2.default.createElement(
	        "div",
	        { className: "buttonRow" },
	        _react2.default.createElement(
	          "span",
	          { rel: "button",
	            className: "materialButton accent",
	            onClick: this.DS.loadPreviousPage,
	            disabled: this.DS.disablePrevButton
	          },
	          this.DS.i18n('REPORT_SINGLEVIEW_PREVIOUS')
	        ),
	        _react2.default.createElement(
	          "span",
	          { rel: "button",
	            className: "materialButton accent",
	            onClick: this.DS.loadNextPage,
	            disabled: this.DS.disableNextButton
	          },
	          this.DS.i18n('REPORT_SINGLEVIEW_NEXT')
	        ),
	        _react2.default.createElement(
	          "span",
	          null,
	          pageInfo
	        )
	      );
	    }
	  }, {
	    key: "continuousNavigation",
	    value: function continuousNavigation() {
	      return _react2.default.createElement(
	        "div",
	        { className: "buttonRow", style: { textAlign: 'center' } },
	        _react2.default.createElement(
	          "span",
	          { rel: "button",
	            className: "materialButton flat",
	            onClick: this.DS.loadMore,
	            disabled: this.DS.disableNextButton
	          },
	          "Load more"
	        )
	      );
	    }
	  }, {
	    key: "navigateItems",
	    value: function navigateItems(direction) {
	      var _this2 = this;
	
	      var items = this.state.items;
	      var itemsLength = items.length - 1;
	      var prevData = this.state.singleView;
	      var prevIndex = items.indexOf(prevData);
	      var nextIndex = direction === 'forward' ? ++prevIndex : --prevIndex;
	
	      if (nextIndex < 0 && !this.DS.disablePrevButton) {
	        items = this.DS.loadPreviousPage();
	      } else if (nextIndex > itemsLength && !this.DS.disableNextButton) {
	        items = this.DS.loadNextPage();
	      }
	
	      if (!items.hasOwnProperty('then')) {
	        items = Promise.resolve(items);
	      }
	
	      var _checkSingleViewNavSt = this.checkSingleViewNavState(nextIndex),
	          _checkSingleViewNavSt2 = _slicedToArray(_checkSingleViewNavSt, 2),
	          disableSingleViewPrev = _checkSingleViewNavSt2[0],
	          disableSingleViewNext = _checkSingleViewNavSt2[1];
	
	      items.then(function () {
	        var singleView = void 0;
	        _this2.setState(function (prevState) {
	          var newItems = prevState.items;
	          if (nextIndex < 0 && !disableSingleViewPrev) {
	            singleView = newItems[newItems.length - 1];
	          } else if (nextIndex > itemsLength && !disableSingleViewNext) {
	            singleView = newItems[0];
	          } else {
	            singleView = newItems[nextIndex];
	          }
	          return {
	            disableSingleViewNext: disableSingleViewNext,
	            disableSingleViewPrev: disableSingleViewPrev,
	            singleView: singleView,
	            singleViewVisible: true
	          };
	        });
	      });
	    }
	  }, {
	    key: "toggleSingleViewNavState",
	    value: function toggleSingleViewNavState(item) {}
	  }, {
	    key: "checkSingleViewNavState",
	    value: function checkSingleViewNavState(currentItemIndex) {
	      var items = this.state.items;
	      var disableSingleViewNext = false,
	          disableSingleViewPrev = false;
	
	      if (currentItemIndex <= 0 && this.DS.disablePrevButton) {
	        disableSingleViewPrev = true;
	      }
	      if (currentItemIndex >= items.length - 1 && this.DS.disableNextButton) {
	        disableSingleViewNext = true;
	      }
	      return [disableSingleViewPrev, disableSingleViewNext];
	    }
	  }], [{
	    key: "actionIcon",
	    value: function actionIcon() {
	      return _react2.default.createElement(
	        "svg",
	        { className: "icon", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
	        _react2.default.createElement("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" })
	      );
	    }
	  }]);
	
	  return ReactVideo;
	}(_react2.default.Component);
	
	exports.default = ReactVideo;
	module.exports = exports["default"];

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var freeGlobal = __webpack_require__(106);
	
	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;

/***/ }),
/* 77 */
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsNative = __webpack_require__(140),
	    getValue = __webpack_require__(164);
	
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
/* 79 */
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(76);
	
	/** Built-in value references. */
	var _Symbol = root.Symbol;
	
	module.exports = _Symbol;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(80),
	    getRawTag = __webpack_require__(161),
	    objectToString = __webpack_require__(189);
	
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var listCacheClear = __webpack_require__(175),
	    listCacheDelete = __webpack_require__(176),
	    listCacheGet = __webpack_require__(177),
	    listCacheHas = __webpack_require__(178),
	    listCacheSet = __webpack_require__(179);
	
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var eq = __webpack_require__(111);
	
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isKeyable = __webpack_require__(172);
	
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(78);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isSymbol = __webpack_require__(96);
	
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
/* 87 */
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(78),
	    root = __webpack_require__(76);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var mapCacheClear = __webpack_require__(180),
	    mapCacheDelete = __webpack_require__(181),
	    mapCacheGet = __webpack_require__(182),
	    mapCacheHas = __webpack_require__(183),
	    mapCacheSet = __webpack_require__(184);
	
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var isArray = __webpack_require__(77),
	    isSymbol = __webpack_require__(96);
	
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
/* 91 */
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
/* 92 */
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsArguments = __webpack_require__(136),
	    isObjectLike = __webpack_require__(79);
	
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
/* 94 */
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
/* 95 */
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var baseGetTag = __webpack_require__(81),
	    isObjectLike = __webpack_require__(79);
	
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(78),
	    root = __webpack_require__(76);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var MapCache = __webpack_require__(89),
	    setCacheAdd = __webpack_require__(192),
	    setCacheHas = __webpack_require__(193);
	
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(82),
	    stackClear = __webpack_require__(196),
	    stackDelete = __webpack_require__(197),
	    stackGet = __webpack_require__(198),
	    stackHas = __webpack_require__(199),
	    stackSet = __webpack_require__(200);
	
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
/* 100 */
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var castPath = __webpack_require__(104),
	    toKey = __webpack_require__(86);
	
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqualDeep = __webpack_require__(137),
	    isObjectLike = __webpack_require__(79);
	
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
/* 103 */
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArray = __webpack_require__(77),
	    isKey = __webpack_require__(90),
	    stringToPath = __webpack_require__(202),
	    toString = __webpack_require__(213);
	
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var SetCache = __webpack_require__(98),
	    arraySome = __webpack_require__(130),
	    cacheHas = __webpack_require__(103);
	
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
/* 106 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 107 */
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(95);
	
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
/* 109 */
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
/* 110 */
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
/* 111 */
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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(114),
	    isLength = __webpack_require__(94);
	
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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var root = __webpack_require__(76),
	    stubFalse = __webpack_require__(212);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(87)(module)))

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(81),
	    isObject = __webpack_require__(95);
	
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsTypedArray = __webpack_require__(141),
	    baseUnary = __webpack_require__(152),
	    nodeUtil = __webpack_require__(188);
	
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
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayLikeKeys = __webpack_require__(128),
	    baseKeys = __webpack_require__(143),
	    isArrayLike = __webpack_require__(112);
	
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
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	!function (e, t) {
	  if ("object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module))) module.exports = t(__webpack_require__(70));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(70)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(87)(module)))

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	!function (e, t) {
	  if ("object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module))) module.exports = t(__webpack_require__(70));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(70)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(87)(module)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(78),
	    root = __webpack_require__(76);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var hashClear = __webpack_require__(166),
	    hashDelete = __webpack_require__(167),
	    hashGet = __webpack_require__(168),
	    hashHas = __webpack_require__(169),
	    hashSet = __webpack_require__(170);
	
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(78),
	    root = __webpack_require__(76);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(76);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(78),
	    root = __webpack_require__(76);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;

/***/ }),
/* 124 */
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
/* 125 */
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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIndexOf = __webpack_require__(135);
	
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
/* 127 */
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
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseTimes = __webpack_require__(150),
	    isArguments = __webpack_require__(93),
	    isArray = __webpack_require__(77),
	    isBuffer = __webpack_require__(113),
	    isIndex = __webpack_require__(107),
	    isTypedArray = __webpack_require__(115);
	
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
/* 129 */
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
/* 130 */
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
/* 131 */
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
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayPush = __webpack_require__(100),
	    isFlattenable = __webpack_require__(171);
	
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayPush = __webpack_require__(100),
	    isArray = __webpack_require__(77);
	
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
/* 134 */
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
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseFindIndex = __webpack_require__(131),
	    baseIsNaN = __webpack_require__(139),
	    strictIndexOf = __webpack_require__(201);
	
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
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(81),
	    isObjectLike = __webpack_require__(79);
	
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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stack = __webpack_require__(99),
	    equalArrays = __webpack_require__(105),
	    equalByTag = __webpack_require__(157),
	    equalObjects = __webpack_require__(158),
	    getTag = __webpack_require__(163),
	    isArray = __webpack_require__(77),
	    isBuffer = __webpack_require__(113),
	    isTypedArray = __webpack_require__(115);
	
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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stack = __webpack_require__(99),
	    baseIsEqual = __webpack_require__(102);
	
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
/* 139 */
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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(114),
	    isMasked = __webpack_require__(173),
	    isObject = __webpack_require__(95),
	    toSource = __webpack_require__(110);
	
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
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(81),
	    isLength = __webpack_require__(94),
	    isObjectLike = __webpack_require__(79);
	
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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var baseMatches = __webpack_require__(144),
	    baseMatchesProperty = __webpack_require__(145),
	    identity = __webpack_require__(92),
	    isArray = __webpack_require__(77),
	    property = __webpack_require__(210);
	
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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isPrototype = __webpack_require__(174),
	    nativeKeys = __webpack_require__(187);
	
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
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsMatch = __webpack_require__(138),
	    getMatchData = __webpack_require__(160),
	    matchesStrictComparable = __webpack_require__(109);
	
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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqual = __webpack_require__(102),
	    get = __webpack_require__(204),
	    hasIn = __webpack_require__(205),
	    isKey = __webpack_require__(90),
	    isStrictComparable = __webpack_require__(108),
	    matchesStrictComparable = __webpack_require__(109),
	    toKey = __webpack_require__(86);
	
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
/* 146 */
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
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(101);
	
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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var identity = __webpack_require__(92),
	    overRest = __webpack_require__(191),
	    setToString = __webpack_require__(194);
	
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
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var constant = __webpack_require__(203),
	    defineProperty = __webpack_require__(156),
	    identity = __webpack_require__(92);
	
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
/* 150 */
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
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(80),
	    arrayMap = __webpack_require__(129),
	    isArray = __webpack_require__(77),
	    isSymbol = __webpack_require__(96);
	
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
/* 152 */
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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var SetCache = __webpack_require__(98),
	    arrayIncludes = __webpack_require__(126),
	    arrayIncludesWith = __webpack_require__(127),
	    cacheHas = __webpack_require__(103),
	    createSet = __webpack_require__(155),
	    setToArray = __webpack_require__(91);
	
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
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(76);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Set = __webpack_require__(97),
	    noop = __webpack_require__(209),
	    setToArray = __webpack_require__(91);
	
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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(78);
	
	var defineProperty = function () {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}();
	
	module.exports = defineProperty;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(80),
	    Uint8Array = __webpack_require__(122),
	    eq = __webpack_require__(111),
	    equalArrays = __webpack_require__(105),
	    mapToArray = __webpack_require__(185),
	    setToArray = __webpack_require__(91);
	
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
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getAllKeys = __webpack_require__(159);
	
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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetAllKeys = __webpack_require__(133),
	    getSymbols = __webpack_require__(162),
	    keys = __webpack_require__(116);
	
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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isStrictComparable = __webpack_require__(108),
	    keys = __webpack_require__(116);
	
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
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(80);
	
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayFilter = __webpack_require__(125),
	    stubArray = __webpack_require__(211);
	
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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var DataView = __webpack_require__(119),
	    Map = __webpack_require__(88),
	    Promise = __webpack_require__(121),
	    Set = __webpack_require__(97),
	    WeakMap = __webpack_require__(123),
	    baseGetTag = __webpack_require__(81),
	    toSource = __webpack_require__(110);
	
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
/* 164 */
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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var castPath = __webpack_require__(104),
	    isArguments = __webpack_require__(93),
	    isArray = __webpack_require__(77),
	    isIndex = __webpack_require__(107),
	    isLength = __webpack_require__(94),
	    toKey = __webpack_require__(86);
	
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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(85);
	
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
/* 167 */
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
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(85);
	
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
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(85);
	
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
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(85);
	
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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(80),
	    isArguments = __webpack_require__(93),
	    isArray = __webpack_require__(77);
	
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
/* 172 */
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
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var coreJsData = __webpack_require__(154);
	
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
/* 174 */
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
/* 175 */
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
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(83);
	
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
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(83);
	
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
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(83);
	
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
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(83);
	
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
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Hash = __webpack_require__(120),
	    ListCache = __webpack_require__(82),
	    Map = __webpack_require__(88);
	
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
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(84);
	
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
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(84);
	
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
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(84);
	
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
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(84);
	
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
/* 185 */
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
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var memoize = __webpack_require__(208);
	
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
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var overArg = __webpack_require__(190);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var freeGlobal = __webpack_require__(106);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(87)(module)))

/***/ }),
/* 189 */
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
/* 190 */
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
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var apply = __webpack_require__(124);
	
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
/* 192 */
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
/* 193 */
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
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseSetToString = __webpack_require__(149),
	    shortOut = __webpack_require__(195);
	
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
/* 195 */
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
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(82);
	
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
/* 197 */
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
/* 198 */
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
/* 199 */
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
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(82),
	    Map = __webpack_require__(88),
	    MapCache = __webpack_require__(89);
	
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
/* 201 */
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
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var memoizeCapped = __webpack_require__(186);
	
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
/* 203 */
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
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(101);
	
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
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseHasIn = __webpack_require__(134),
	    hasPath = __webpack_require__(165);
	
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
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArrayLike = __webpack_require__(112),
	    isObjectLike = __webpack_require__(79);
	
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
/* 207 */
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
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var MapCache = __webpack_require__(89);
	
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
/* 209 */
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
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseProperty = __webpack_require__(146),
	    basePropertyDeep = __webpack_require__(147),
	    isKey = __webpack_require__(90),
	    toKey = __webpack_require__(86);
	
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
/* 211 */
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
/* 212 */
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
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseToString = __webpack_require__(151);
	
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
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseFlatten = __webpack_require__(132),
	    baseIteratee = __webpack_require__(142),
	    baseRest = __webpack_require__(148),
	    baseUniq = __webpack_require__(153),
	    isArrayLikeObject = __webpack_require__(206),
	    last = __webpack_require__(207);
	
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
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _rReportalBase = __webpack_require__(68);
	
	var _rReportalBase2 = _interopRequireDefault(_rReportalBase);
	
	var _hitlistSetup = __webpack_require__(216);
	
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
/* 216 */
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
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _hitlistDatasource = __webpack_require__(215);
	
	var _hitlistDatasource2 = _interopRequireDefault(_hitlistDatasource);
	
	var _rReportalBase = __webpack_require__(68);
	
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

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = DSAbstraction;
	
	var _rHitlistDatasource = __webpack_require__(217);
	
	var _rHitlistDatasource2 = _interopRequireDefault(_rHitlistDatasource);
	
	var _unionBy = __webpack_require__(214);
	
	var _unionBy2 = _interopRequireDefault(_unionBy);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function DSAbstraction(options) {
	    var DS = new _rHitlistDatasource2.default();
	    var component = options.component;
	    var config = void 0;
	
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
	        }
	    }
	
	    function processData(data) {
	        var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'replace';
	
	        var newData = data.map(function (dataRow, rowIndex) {
	            var parsedRow = {};
	            ['id', 'title', 'description', 'image', 'audio', 'video', 'tags'].forEach(function (key) {
	                var columnID = config[key];
	                parsedRow[key] = prepareData(dataRow[columnID], key);
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
	                if (['video', 'audio', 'image'].indexOf(key) > -1 && config[key] && parsedRow[key]) {
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
	        switch (type) {
	            case 'image':
	                var result = /src='(.+?)'/gi.exec(data);
	                return result && result !== null && result[1] ? result[1] : undefined;
	            case 'description':
	            case 'title':
	            case 'video':
	            case 'audio':
	                return !(data.indexOf('-') > -1 && data.trim().length === 1) ? data.trim() : undefined;
	            case 'tags':
	                return data && (data.indexOf(',') > -1 ? data.split(',') : data.indexOf('-') > -1 && data.trim().length === 1 ? undefined : data.trim());
	        }
	    }
	
	    function handleDataLoadingError(err) {
	        console.log(err);
	        component.setState({
	            error: true,
	            items: []
	        });
	    };
	
	    DS.loadNextPage = function () {
	        DS.nextPage().then(processData).catch(handleDataLoadingError);
	    };
	
	    DS.loadPreviousPage = function () {
	        DS.previousPage().then(processData).catch(handleDataLoadingError);
	    };
	
	    DS.loadMore = function () {
	        DS.nextPage().then(function (response) {
	            return processData(response, 'append');
	        }).catch(handleDataLoadingError);
	    };
	
	    DS.initialLoad = function () {
	        DS.initialDataLoad().then(processData).catch(handleDataLoadingError);
	    };
	
	    DS.getPageInfo = function () {
	        var hasPageInfo = DS.pageInfo && DS.sortingPagingValues && DS.sortingPagingValues.totalHits;
	        return hasPageInfo ? DS.pageInfo + " of " + DS.sortingPagingValues.totalHits : '';
	    };
	
	    DS.config = function () {
	        return config;
	    };
	
	    return DS;
	}
	module.exports = exports["default"];

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(70);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGridTile = __webpack_require__(224);
	
	var _ImageGridTile2 = _interopRequireDefault(_ImageGridTile);
	
	var _ProportionalImage = __webpack_require__(118);
	
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
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(70);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGridTile = __webpack_require__(219);
	
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
	            actionIcon: actionIcon,
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
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(70);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MDIcon = __webpack_require__(117);
	
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
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(70);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NavButton = __webpack_require__(221);
	
	var _NavButton2 = _interopRequireDefault(_NavButton);
	
	var _icons = __webpack_require__(223);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NavBar = function NavBar(props) {
	  var loadPreviousItem = props.loadPreviousItem,
	      returnToGridAction = props.returnToGridAction,
	      loadNextItem = props.loadNextItem,
	      disableSingleViewPrev = props.disableSingleViewPrev,
	      disableSingleViewNext = props.disableSingleViewNext;
	
	  return _react2.default.createElement(
	    'div',
	    { className: 'SingleView--header' },
	    _react2.default.createElement(_NavButton2.default, { disabled: disableSingleViewPrev, title: 'Previous item', onClick: loadPreviousItem, icon: _icons.ic_arrow_back }),
	    _react2.default.createElement(_NavButton2.default, { title: 'Return to the list', onClick: returnToGridAction, icon: _icons.ic_view_module }),
	    _react2.default.createElement(_NavButton2.default, { disabled: disableSingleViewNext, title: 'Next Item', onClick: loadNextItem, icon: _icons.ic_arrow_forward })
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
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ic_view_module = exports.ic_arrow_forward = exports.ic_arrow_back = exports.ic_star_border = exports.ic_star = undefined;
	
	var _react = __webpack_require__(70);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ic_star = exports.ic_star = _react2.default.createElement("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" });
	var ic_star_border = exports.ic_star_border = _react2.default.createElement("path", { d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" });
	var ic_arrow_back = exports.ic_arrow_back = _react2.default.createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" });
	var ic_arrow_forward = exports.ic_arrow_forward = _react2.default.createElement("path", { d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" });
	var ic_view_module = exports.ic_view_module = _react2.default.createElement("path", { d: "M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" });

/***/ }),
/* 224 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODQ3OTBjYjY1ZmVjMGYyNTU4OGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2VzNi9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLXJlcG9ydGFsLWJhc2Uvc3JjL3JlcG9ydGFsLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RWaWRlby9SZWFjdFZpZGVvLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vTURJY29uL2Rpc3QvTURJY29uLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L1Byb3BvcnRpb25hbEltYWdlL2Rpc3QvUHJvcG9ydGlvbmFsSW1hZ2UuYnVuZGxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19EYXRhVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fSGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUZsYXR0ZW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSGFzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hTi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXRlcmF0ZWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUHJvcGVydHlEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVNldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5pcS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb3ZlclJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3Nob3J0T3V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0NsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9oYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbm9vcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3VuaW9uQnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1kYXRhc291cmNlLmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3Qtc2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRFNBYnN0cmFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VHcmlkVGlsZS9JbWFnZUdyaWRUaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWQvSW1hZ2VHcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9TaW5nbGVWaWV3L05hdkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2luZ2xlVmlldy9TaW5nbGVWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VHcmlkVGlsZS9JbWFnZUdyaWRUaWxlLmNzcyJdLCJuYW1lcyI6WyJsYXVuY2hWaWRlb0hpdGxpc3QiLCJjb25maWdOYW1lIiwidGh1bWJzUGxhY2Vob2xkZXIiLCJFcnJvciIsIlR5cGVFcnJvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVwb3J0YWwiLCJtaXhpbiIsInN0b3JlIiwicmVxdWlyZSIsInVpZCIsIlN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJuYW1lIiwiZ2xvYmFsIiwiTWF0aCIsInNlbGYiLCJGdW5jdGlvbiIsIl9fZyIsImlzT2JqZWN0IiwiaXQiLCJkUCIsImNyZWF0ZURlc2MiLCJvYmplY3QiLCJrZXkiLCJ2YWx1ZSIsImYiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiYSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiYUZ1bmN0aW9uIiwiZm4iLCJ0aGF0IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYiIsImMiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhc093blByb3BlcnR5IiwiYW5PYmplY3QiLCJJRThfRE9NX0RFRklORSIsInRvUHJpbWl0aXZlIiwiTyIsIlAiLCJBdHRyaWJ1dGVzIiwiZSIsImlzIiwiY3JlYXRlRWxlbWVudCIsImRlZiIsImhhcyIsIlRBRyIsInRhZyIsInN0YXQiLCJwcm90b3R5cGUiLCJjb25maWd1cmFibGUiLCJzaGFyZWQiLCJjZWlsIiwiZmxvb3IiLCJpc05hTiIsIklPYmplY3QiLCJkZWZpbmVkIiwiY29mIiwiQVJHIiwidHJ5R2V0IiwiVCIsIkIiLCJjYWxsZWUiLCJzcGxpdCIsImN0eCIsImhpZGUiLCJQUk9UT1RZUEUiLCIkZXhwb3J0IiwidHlwZSIsInNvdXJjZSIsIklTX0ZPUkNFRCIsIkYiLCJJU19HTE9CQUwiLCJHIiwiSVNfU1RBVElDIiwiUyIsIklTX1BST1RPIiwiSVNfQklORCIsIklTX1dSQVAiLCJXIiwiZXhwUHJvdG8iLCJ0YXJnZXQiLCJvd24iLCJvdXQiLCJDIiwidmlydHVhbCIsIlIiLCJVIiwiZXhlYyIsImRvY3VtZW50RWxlbWVudCIsIkxJQlJBUlkiLCJyZWRlZmluZSIsIkl0ZXJhdG9ycyIsIiRpdGVyQ3JlYXRlIiwic2V0VG9TdHJpbmdUYWciLCJnZXRQcm90b3R5cGVPZiIsIklURVJBVE9SIiwiQlVHR1kiLCJrZXlzIiwiRkZfSVRFUkFUT1IiLCJLRVlTIiwiVkFMVUVTIiwicmV0dXJuVGhpcyIsIkJhc2UiLCJOQU1FIiwiQ29uc3RydWN0b3IiLCJuZXh0IiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsImtpbmQiLCJwcm90byIsInZhbHVlcyIsImVudHJpZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIm1ldGhvZHMiLCJJdGVyYXRvclByb3RvdHlwZSIsIlByb21pc2VDYXBhYmlsaXR5IiwicmVzb2x2ZSIsInJlamVjdCIsInByb21pc2UiLCIkJHJlc29sdmUiLCIkJHJlamVjdCIsImJpdG1hcCIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsIlNIQVJFRCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJwcm9jZXNzIiwic2V0VGFzayIsInNldEltbWVkaWF0ZSIsImNsZWFyVGFzayIsImNsZWFySW1tZWRpYXRlIiwiTWVzc2FnZUNoYW5uZWwiLCJEaXNwYXRjaCIsImNvdW50ZXIiLCJxdWV1ZSIsIk9OUkVBRFlTVEFURUNIQU5HRSIsImRlZmVyIiwiY2hhbm5lbCIsInBvcnQiLCJydW4iLCJpZCIsImxpc3RlbmVyIiwiZXZlbnQiLCJkYXRhIiwiYXJncyIsImkiLCJwdXNoIiwibmV4dFRpY2siLCJub3ciLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsInNldFRpbWVvdXQiLCJzZXQiLCJjbGVhciIsInRvSW50ZWdlciIsIm1pbiIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwiUHJvbWlzZSIsImZvcmJpZGRlbkZpZWxkIiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpbmRleCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyYWJsZSIsIml0ZXJGbiIsInN0ZXAiLCJpdGVyYXRvciIsInJlc3VsdCIsImRvbmUiLCJ1biIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiQXJyYXlQcm90byIsIkFycmF5IiwicmV0IiwiY3JlYXRlIiwiZGVzY3JpcHRvciIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIml0ZXIiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwidGhlbiIsInRhc2siLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50Iiwic3R5bGUiLCJkaXNwbGF5Iiwic3JjIiwiY29udGVudFdpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsImdldEtleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImNvbnN0cnVjdG9yIiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCIka2V5cyIsInYiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIngiLCJwcm9taXNlQ2FwYWJpbGl0eSIsIkRFU0NSSVBUT1JTIiwiU1BFQ0lFUyIsIktFWSIsIkQiLCJUT19TVFJJTkciLCJwb3MiLCJzIiwiU3RyaW5nIiwibCIsImNoYXJDb2RlQXQiLCJjaGFyQXQiLCJtYXgiLCJ2YWwiLCJ2YWx1ZU9mIiwiY2xhc3NvZiIsImdldEl0ZXJhdG9yTWV0aG9kIiwiYWRkVG9VbnNjb3BhYmxlcyIsIml0ZXJhdGVkIiwiX3QiLCJfaSIsIl9rIiwiQXJndW1lbnRzIiwiYW5JbnN0YW5jZSIsImZvck9mIiwic3BlY2llc0NvbnN0cnVjdG9yIiwibWljcm90YXNrIiwibmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUiLCJwZXJmb3JtIiwicHJvbWlzZVJlc29sdmUiLCJQUk9NSVNFIiwiJFByb21pc2UiLCJlbXB0eSIsIkludGVybmFsIiwibmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5IiwiT3duUHJvbWlzZUNhcGFiaWxpdHkiLCJXcmFwcGVyIiwiVVNFX05BVElWRSIsIkZha2VQcm9taXNlIiwiUHJvbWlzZVJlamVjdGlvbkV2ZW50Iiwic2FtZUNvbnN0cnVjdG9yIiwiaXNUaGVuYWJsZSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJvblVuaGFuZGxlZCIsInVuaGFuZGxlZCIsImlzVW5oYW5kbGVkIiwiY29uc29sZSIsImVtaXQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsInJlYXNvbiIsImVycm9yIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwid3JhcHBlciIsImV4ZWN1dG9yIiwiZXJyIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiciIsImNhcGFiaWxpdHkiLCJhbGwiLCJyZW1haW5pbmciLCIkaW5kZXgiLCJhbHJlYWR5Q2FsbGVkIiwicmFjZSIsIiRhdCIsInBvaW50IiwiVE9fU1RSSU5HX1RBRyIsIkRPTUl0ZXJhYmxlcyIsIkNvbGxlY3Rpb24iLCJSZXBvcnRhbEJhc2UiLCJsZXZlbCIsImlzQXJyYXkiLCJfbG9nZ2VyIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJzdHIiLCJwYXJzZUZsb2F0IiwicmVwbGFjZSIsIlVSTCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZW5kIiwidmFyaWFibGUiLCJxdWVyeSIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwidmFycyIsInBhaXIiLCJ0b0xvd2VyQ2FzZSIsIm8iLCJwYXRoIiwib3JpZ2luIiwicGF0aG5hbWUiLCJmb3JFYWNoIiwiYVBhaXIiLCJqb2luIiwiUmVhY3RWaWRlbyIsIkRTIiwiY29uZmlnIiwicHJvcHMiLCJjb21wb25lbnQiLCJzdGF0ZSIsIml0ZW1zIiwic2luZ2xlVmlldyIsImxpbmsiLCJzaW5nbGVWaWV3VmlzaWJsZSIsImRpc2FibGVTaW5nbGVWaWV3UHJldiIsImRpc2FibGVTaW5nbGVWaWV3TmV4dCIsInJldHVyblRvR3JpZCIsInNldFN0YXRlIiwibG9hZFByZXZpb3VzSXRlbSIsIm5hdmlnYXRlSXRlbXMiLCJsb2FkTmV4dEl0ZW0iLCJvblNlbGVjdCIsIml0ZW0iLCJjaGVja1NpbmdsZVZpZXdOYXZTdGF0ZSIsImluZGV4T2YiLCJ0aXRsZSIsInJlbmRlck5hdmlnYXRpb24iLCJkYXRhTG9hZGluZ01lc3NhZ2UiLCJtZXNzYWdlIiwiaTE4biIsInBhZ2luYXRpb24iLCJjb250aW51b3VzTmF2aWdhdGlvbiIsInBhZ2luZ05hdmlnYXRpb24iLCJwYWdlSW5mbyIsImdldFBhZ2VJbmZvIiwibG9hZFByZXZpb3VzUGFnZSIsImRpc2FibGVQcmV2QnV0dG9uIiwibG9hZE5leHRQYWdlIiwiZGlzYWJsZU5leHRCdXR0b24iLCJ0ZXh0QWxpZ24iLCJsb2FkTW9yZSIsImRpcmVjdGlvbiIsIml0ZW1zTGVuZ3RoIiwicHJldkRhdGEiLCJwcmV2SW5kZXgiLCJuZXh0SW5kZXgiLCJuZXdJdGVtcyIsInByZXZTdGF0ZSIsImN1cnJlbnRJdGVtSW5kZXgiLCJDb21wb25lbnQiLCJmcmVlR2xvYmFsIiwiZnJlZVNlbGYiLCJyb290IiwiYmFzZUlzTmF0aXZlIiwiZ2V0VmFsdWUiLCJnZXROYXRpdmUiLCJpc09iamVjdExpa2UiLCJnZXRSYXdUYWciLCJvYmplY3RUb1N0cmluZyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiYmFzZUdldFRhZyIsImxpc3RDYWNoZUNsZWFyIiwibGlzdENhY2hlRGVsZXRlIiwibGlzdENhY2hlR2V0IiwibGlzdENhY2hlSGFzIiwibGlzdENhY2hlU2V0IiwiTGlzdENhY2hlIiwiZW50cnkiLCJlcSIsImFzc29jSW5kZXhPZiIsImFycmF5IiwiaXNLZXlhYmxlIiwiZ2V0TWFwRGF0YSIsIm1hcCIsIl9fZGF0YV9fIiwibmF0aXZlQ3JlYXRlIiwiaXNTeW1ib2wiLCJJTkZJTklUWSIsInRvS2V5Iiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsIk1hcCIsIm1hcENhY2hlQ2xlYXIiLCJtYXBDYWNoZURlbGV0ZSIsIm1hcENhY2hlR2V0IiwibWFwQ2FjaGVIYXMiLCJtYXBDYWNoZVNldCIsIk1hcENhY2hlIiwicmVJc0RlZXBQcm9wIiwicmVJc1BsYWluUHJvcCIsImlzS2V5IiwidGVzdCIsInNldFRvQXJyYXkiLCJzaXplIiwiaWRlbnRpdHkiLCJiYXNlSXNBcmd1bWVudHMiLCJvYmplY3RQcm90byIsImlzQXJndW1lbnRzIiwiTUFYX1NBRkVfSU5URUdFUiIsImlzTGVuZ3RoIiwic3ltYm9sVGFnIiwiU2V0Iiwic2V0Q2FjaGVBZGQiLCJzZXRDYWNoZUhhcyIsIlNldENhY2hlIiwiYWRkIiwic3RhY2tDbGVhciIsInN0YWNrRGVsZXRlIiwic3RhY2tHZXQiLCJzdGFja0hhcyIsInN0YWNrU2V0IiwiU3RhY2siLCJhcnJheVB1c2giLCJvZmZzZXQiLCJjYXN0UGF0aCIsImJhc2VHZXQiLCJiYXNlSXNFcXVhbERlZXAiLCJiYXNlSXNFcXVhbCIsIm90aGVyIiwiYml0bWFzayIsImN1c3RvbWl6ZXIiLCJzdGFjayIsImNhY2hlSGFzIiwiY2FjaGUiLCJzdHJpbmdUb1BhdGgiLCJhcnJheVNvbWUiLCJDT01QQVJFX1BBUlRJQUxfRkxBRyIsIkNPTVBBUkVfVU5PUkRFUkVEX0ZMQUciLCJlcXVhbEFycmF5cyIsImVxdWFsRnVuYyIsImlzUGFydGlhbCIsImFyckxlbmd0aCIsIm90aExlbmd0aCIsInN0YWNrZWQiLCJzZWVuIiwiYXJyVmFsdWUiLCJvdGhWYWx1ZSIsImNvbXBhcmVkIiwib3RoSW5kZXgiLCJyZUlzVWludCIsImlzSW5kZXgiLCJpc1N0cmljdENvbXBhcmFibGUiLCJtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSIsInNyY1ZhbHVlIiwiZnVuY1Byb3RvIiwiZnVuY1RvU3RyaW5nIiwidG9Tb3VyY2UiLCJmdW5jIiwiaXNGdW5jdGlvbiIsImlzQXJyYXlMaWtlIiwic3R1YkZhbHNlIiwiZnJlZUV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwibmF0aXZlSXNCdWZmZXIiLCJpc0J1ZmZlciIsImFzeW5jVGFnIiwiZnVuY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwiYmFzZUlzVHlwZWRBcnJheSIsImJhc2VVbmFyeSIsIm5vZGVVdGlsIiwibm9kZUlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheSIsImFycmF5TGlrZUtleXMiLCJiYXNlS2V5cyIsInQiLCJyZWFjdCIsIm4iLCJsb2FkZWQiLCJtIiwicCIsImRlZmF1bHQiLCJNREljb24iLCJfX2VzTW9kdWxlIiwiUmVmZXJlbmNlRXJyb3IiLCJ1Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJmaWxsIiwiaWNvbiIsImxvZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsIl9pbWFnZU9ubG9hZCIsImJpbmQiLCJfaW1hZ2VPbmVycm9yIiwicGxhY2Vob2xkZXJIaWRkZW4iLCJwbGFjZWhvbGRlciIsInNpemluZyIsInBvc2l0aW9uIiwicHJvcG9ydGlvbiIsImxvYWRpbmciLCJfbG9hZCIsIl9jb21wdXRlRGltZW5zaW9ucyIsIl9jb21wdXRlUHJvcG9ydGlvbiIsImFzcGVjdCIsImQiLCJwcmVsb2FkIiwiZmFkZSIsImgiLCJwbGFjZWhvbGRlclNpemluZyIsImciLCJhbHQiLCJjbGFzc05hbWUiLCJwYWRkaW5nVG9wIiwicm9sZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJfcmVzZXQiLCJwcmV2ZW50TG9hZCIsIkRhdGFWaWV3IiwiaGFzaENsZWFyIiwiaGFzaERlbGV0ZSIsImhhc2hHZXQiLCJoYXNoSGFzIiwiaGFzaFNldCIsIkhhc2giLCJVaW50OEFycmF5IiwiV2Vha01hcCIsInRoaXNBcmciLCJhcnJheUZpbHRlciIsInByZWRpY2F0ZSIsInJlc0luZGV4IiwiYmFzZUluZGV4T2YiLCJhcnJheUluY2x1ZGVzIiwiYXJyYXlJbmNsdWRlc1dpdGgiLCJjb21wYXJhdG9yIiwiYmFzZVRpbWVzIiwiaW5oZXJpdGVkIiwiaXNBcnIiLCJpc0FyZyIsImlzQnVmZiIsImlzVHlwZSIsInNraXBJbmRleGVzIiwiYXJyYXlNYXAiLCJpdGVyYXRlZSIsImJhc2VGaW5kSW5kZXgiLCJmcm9tUmlnaHQiLCJpc0ZsYXR0ZW5hYmxlIiwiYmFzZUZsYXR0ZW4iLCJkZXB0aCIsImlzU3RyaWN0IiwiYmFzZUdldEFsbEtleXMiLCJrZXlzRnVuYyIsInN5bWJvbHNGdW5jIiwiYmFzZUhhc0luIiwiYmFzZUlzTmFOIiwic3RyaWN0SW5kZXhPZiIsImFyZ3NUYWciLCJlcXVhbEJ5VGFnIiwiZXF1YWxPYmplY3RzIiwiZ2V0VGFnIiwiYXJyYXlUYWciLCJvYmplY3RUYWciLCJvYmpJc0FyciIsIm90aElzQXJyIiwib2JqVGFnIiwib3RoVGFnIiwib2JqSXNPYmoiLCJvdGhJc09iaiIsImlzU2FtZVRhZyIsIm9iaklzV3JhcHBlZCIsIm90aElzV3JhcHBlZCIsIm9ialVud3JhcHBlZCIsIm90aFVud3JhcHBlZCIsImJhc2VJc01hdGNoIiwibWF0Y2hEYXRhIiwibm9DdXN0b21pemVyIiwib2JqVmFsdWUiLCJpc01hc2tlZCIsInJlUmVnRXhwQ2hhciIsInJlSXNIb3N0Q3RvciIsInJlSXNOYXRpdmUiLCJSZWdFeHAiLCJwYXR0ZXJuIiwiYm9vbFRhZyIsImRhdGVUYWciLCJlcnJvclRhZyIsIm1hcFRhZyIsIm51bWJlclRhZyIsInJlZ2V4cFRhZyIsInNldFRhZyIsInN0cmluZ1RhZyIsIndlYWtNYXBUYWciLCJhcnJheUJ1ZmZlclRhZyIsImRhdGFWaWV3VGFnIiwiZmxvYXQzMlRhZyIsImZsb2F0NjRUYWciLCJpbnQ4VGFnIiwiaW50MTZUYWciLCJpbnQzMlRhZyIsInVpbnQ4VGFnIiwidWludDhDbGFtcGVkVGFnIiwidWludDE2VGFnIiwidWludDMyVGFnIiwidHlwZWRBcnJheVRhZ3MiLCJiYXNlTWF0Y2hlcyIsImJhc2VNYXRjaGVzUHJvcGVydHkiLCJwcm9wZXJ0eSIsImJhc2VJdGVyYXRlZSIsImlzUHJvdG90eXBlIiwibmF0aXZlS2V5cyIsImdldE1hdGNoRGF0YSIsImhhc0luIiwiYmFzZVByb3BlcnR5IiwiYmFzZVByb3BlcnR5RGVlcCIsIm92ZXJSZXN0Iiwic2V0VG9TdHJpbmciLCJiYXNlUmVzdCIsInN0YXJ0IiwiY29uc3RhbnQiLCJiYXNlU2V0VG9TdHJpbmciLCJzdHJpbmciLCJzeW1ib2xQcm90byIsInN5bWJvbFRvU3RyaW5nIiwiYmFzZVRvU3RyaW5nIiwiY3JlYXRlU2V0IiwiTEFSR0VfQVJSQVlfU0laRSIsImJhc2VVbmlxIiwiaW5jbHVkZXMiLCJpc0NvbW1vbiIsIm91dGVyIiwiY29tcHV0ZWQiLCJzZWVuSW5kZXgiLCJjb3JlSnNEYXRhIiwibm9vcCIsIm1hcFRvQXJyYXkiLCJzeW1ib2xWYWx1ZU9mIiwiYnl0ZUxlbmd0aCIsImJ5dGVPZmZzZXQiLCJidWZmZXIiLCJjb252ZXJ0IiwiZ2V0QWxsS2V5cyIsIm9ialByb3BzIiwib2JqTGVuZ3RoIiwib3RoUHJvcHMiLCJza2lwQ3RvciIsIm9iakN0b3IiLCJvdGhDdG9yIiwiZ2V0U3ltYm9scyIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwiaXNPd24iLCJ1bm1hc2tlZCIsInN0dWJBcnJheSIsIm5hdGl2ZUdldFN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2wiLCJwcm9taXNlVGFnIiwiZGF0YVZpZXdDdG9yU3RyaW5nIiwibWFwQ3RvclN0cmluZyIsInByb21pc2VDdG9yU3RyaW5nIiwic2V0Q3RvclN0cmluZyIsIndlYWtNYXBDdG9yU3RyaW5nIiwiQXJyYXlCdWZmZXIiLCJDdG9yIiwiY3RvclN0cmluZyIsImhhc1BhdGgiLCJoYXNGdW5jIiwiSEFTSF9VTkRFRklORUQiLCJzcHJlYWRhYmxlU3ltYm9sIiwiaXNDb25jYXRTcHJlYWRhYmxlIiwibWFza1NyY0tleSIsImFycmF5UHJvdG8iLCJzcGxpY2UiLCJsYXN0SW5kZXgiLCJwb3AiLCJtZW1vaXplIiwiTUFYX01FTU9JWkVfU0laRSIsIm1lbW9pemVDYXBwZWQiLCJvdmVyQXJnIiwiZnJlZVByb2Nlc3MiLCJiaW5kaW5nIiwidHJhbnNmb3JtIiwiYXJnIiwibmF0aXZlTWF4Iiwib3RoZXJBcmdzIiwic2hvcnRPdXQiLCJIT1RfQ09VTlQiLCJIT1RfU1BBTiIsIm5hdGl2ZU5vdyIsIkRhdGUiLCJjb3VudCIsImxhc3RDYWxsZWQiLCJzdGFtcCIsInBhaXJzIiwicmVMZWFkaW5nRG90IiwicmVQcm9wTmFtZSIsInJlRXNjYXBlQ2hhciIsIm1hdGNoIiwibnVtYmVyIiwicXVvdGUiLCJkZWZhdWx0VmFsdWUiLCJpc0FycmF5TGlrZU9iamVjdCIsIkZVTkNfRVJST1JfVEVYVCIsInJlc29sdmVyIiwibWVtb2l6ZWQiLCJDYWNoZSIsInVuaW9uQnkiLCJhcnJheXMiLCJIaXRsaXN0RGF0YXNvdXJjZSIsIm9wdGlvbnMiLCJfc2VhcmNoVmFsdWVzIiwibW9kaWZpZXIiLCJyZXF1ZXN0UmVzcG9uc2UiLCJpbml0aWFsTG9hZCIsIl9za2lwUGFnZSIsImlzUGFnaW5nIiwibG9jYXRpb25EZXNlcmlhbGl6ZSIsInJlcG9ydGlkIiwiaGl0bGlzdElEIiwicGFyYW1zIiwiUGFnZUlkIiwicGFnZUlEIiwicGFnZVN0YXRlSWQiLCJwYWdlU3RhdGVJRCIsIlByZXZpZXciLCJwcmV2aWV3IiwiYXR0cm5hbWUiLCJKU09OIiwic3RyaW5naWZ5Iiwic29ydGluZ1BhZ2luZ1ZhbHVlcyIsInBhZ2luZ1ZhbHVlcyIsInBhZ2VOdW1iZXIiLCJwYWdpbmdGb3J3YXJkIiwicHJvbWlzZVJlcXVlc3QiLCJzZXJ2aWNlVVJMIiwic2VyaWFsaXplUGFyYW1zIiwicGFyc2VSZXNwb25zZSIsInJlc3BvbnNlIiwicGFyc2UiLCJfc3B2IiwicHYiLCJzdGFydElkIiwibGFzdFN0YXJ0SWQiLCJmaXJzdFN0YXJ0SWQiLCJzdGFydFZhbHVlIiwibGFzdFN0YXJ0VmFsdWUiLCJmaXJzdFN0YXJ0VmFsdWUiLCJIaXRsaXN0U2V0dXAiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwiX2NvbmZpZyIsImdldE9yaWdpbmFsQ29uZmlnIiwiX2VsZW1lbnRUeXBlIiwiSGl0TGlzdEVsZW1lbnRUeXBlIiwiX29wIiwiU2VhcmNoYWJsZUxpc3RPcGVyYXRvciIsImNhcHRpb25zIiwic2luZ2xlVmlld1RleHRzIiwiaGl0bGlzdERhdGEiLCJjb2x1bW5zIiwiYWxsQ29sdW1ucyIsImNvbXBvbmVudElkIiwicGFnZUlkIiwibGFuZ3VhZ2UiLCJzZXJ2aWNlVXJsIiwicXVlcnlTZWxlY3RvciIsImpzb25EYXRlIiwiWSIsIkxhbmciLCJjb25zdHIiLCJldmFsIiwic2NyaXB0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjZmciLCJzY3JpcHQiLCJ0ZXh0IiwiRFNBYnN0cmFjdGlvbiIsInNldHVwRGF0YUxpc3RlbmVyIiwiR2xvYmFsIiwib24iLCJpbml0aWFsaXNlQ29uZmlnIiwiZmlsdGVySW5mbyIsImluaXRpYWxEYXRhTG9hZCIsInByb2Nlc3NEYXRhIiwiY2F0Y2giLCJoYW5kbGVEYXRhTG9hZGluZ0Vycm9yIiwibW9kZSIsIm5ld0RhdGEiLCJkYXRhUm93Iiwicm93SW5kZXgiLCJwYXJzZWRSb3ciLCJjb2x1bW5JRCIsInByZXBhcmVEYXRhIiwiaW1hZ2UiLCJtZWRpYXR5cGUiLCJyZXNwb25zZWlkIiwic2xpbmsiLCJ0cmltIiwibmV4dFBhZ2UiLCJwcmV2aW91c1BhZ2UiLCJoYXNQYWdlSW5mbyIsInRvdGFsSGl0cyIsIk1FRElBX1RZUEVTIiwiSW1hZ2VHcmlkVGlsZSIsImFjdGlvbkJ1dHRvbiIsImFjdGlvbkljb24iLCJkZXNjcmlwdGlvbiIsIl9jb21wdXRlVGlsZVR5cGUiLCJpY29uU2l6ZSIsImljb25Db2xvciIsImljb25TZXJ2ZXIiLCJlc2NhcGUiLCJpY29ucyIsImF1ZGlvIiwidmlkZW8iLCJ1bmtub3duIiwicHJvcFR5cGVzIiwib25lT2YiLCJJbWFnZUdyaWQiLCJpdGVtQ2xpY2tIYW5kbGVyIiwiZHVtbXlJdGVtcyIsInJlbmRlckR1bW15SXRlbXMiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsIk5hdkJ1dHRvbiIsIk5hdkJhciIsInJldHVyblRvR3JpZEFjdGlvbiIsIlNpbmdsZVZpZXciLCJuYXZCYXJQcm9wcyIsImljX3N0YXIiLCJpY19zdGFyX2JvcmRlciIsImljX2Fycm93X2JhY2siLCJpY19hcnJvd19mb3J3YXJkIiwiaWNfdmlld19tb2R1bGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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Ozs4QkFDVjtBQUFBLG9CQUM0QixLQUFLamhCLEtBRGpDO0FBQUEsV0FDQThFLFFBREEsVUFDQUEsUUFEQTtBQUFBLFdBQ2FvYyxXQURiOztBQUVQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxZQUFmO0FBQ0UsdUNBQUMsTUFBRCxFQUFZQSxXQUFaLENBREY7QUFFR3BjO0FBRkgsUUFERjtBQU1EOzs7Ozs7bUJBVGtCbWMsVTs7Ozs7Ozs7Ozs7Ozs7QUNsQnJCOzs7Ozs7QUFFTyxLQUFNRSw0QkFBVSx3Q0FBTSxHQUFFLDBGQUFSLEdBQWhCO0FBQ0EsS0FBTUMsMENBQWlCLHdDQUFNLEdBQUUsa01BQVIsR0FBdkI7QUFDQSxLQUFNQyx3Q0FBZ0Isd0NBQU0sR0FBRSw4REFBUixHQUF0QjtBQUNBLEtBQU1DLDhDQUFtQix3Q0FBTSxHQUFFLDJEQUFSLEdBQXpCO0FBQ0EsS0FBTUMsMENBQWlCLHdDQUFNLEdBQUUseUZBQVIsR0FBdkIsQzs7Ozs7O0FDTlAsMEMiLCJmaWxlIjoici1yZWFjdC12aWRlby5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NDc5MGNiNjVmZWMwZjI1NTg4ZSIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMS4wMS4yMDE3LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBtYWluQ1NTIGZyb20gJy4vbWFpbi5jc3MnO1xuaW1wb3J0IFJlYWN0VmlkZW8gZnJvbSAnLi9SZWFjdFZpZGVvL1JlYWN0VmlkZW8nO1xuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tICdyLXJlcG9ydGFsLWJhc2UnO1xuXG4vKipcbiAqIGluaXRpYWxpc2UgSGl0TGlzdCBvbiBET01Db250ZW50TG9hZGVkIGZvciBhIHF1aWNrZXIgY29sZC1zdGFydCwgbm8gbmVlZCB0byB3YWl0IGZvciB0aGUgb3JpZ2luYWwgSGl0TGlzdFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZ05hbWUgLSBuYW1lIG9mIHRoZSB2YXJpYWJsZSBwYXNzZWQgdG8gRE9NIGFzIGEgY29uZmlnXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt0aHVtYnNQbGFjZWhvbGRlcj10cnVlXSAtIGRpc3BsYXkgdGh1bWJzIGFzIGltYWdlIHBsYWNlaG9sZGVycyBpbnN0ZWFkIG9mIG1lZGlhIGljb25zXG4gKiAqL1xuY29uc3QgbGF1bmNoVmlkZW9IaXRsaXN0ID0gKGNvbmZpZ05hbWUsdGh1bWJzUGxhY2Vob2xkZXI9dHJ1ZSkgPT4ge1xuICBpZighY29uZmlnTmFtZSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25maWcgaXMgbm90IHNwZWNpZmllZCEnKVxuICB9IGVsc2UgaWYoY29uZmlnTmFtZSAmJiB0eXBlb2YgY29uZmlnTmFtZSAhPSAnc3RyaW5nJyl7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgY29uZmlnIG5hbWUgbXVzdCBiZSBhIHN0cmluZywgbm90IGEgJHt0eXBlb2YgY29uZmlnTmFtZX1gKVxuICB9XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgIDxSZWFjdFZpZGVvXG4gICAgICBjb25maWc9e2NvbmZpZ05hbWV9XG4gICAgICB0aHVtYnNQbGFjZWhvbGRlcj17dGh1bWJzUGxhY2Vob2xkZXJ9XG4gICAgICB2ZXJib3NlPXt0cnVlfVxuICAgICAgLz4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcbiAgfSk7XG59O1xuXG53aW5kb3cuUmVwb3J0YWwgPSB3aW5kb3cuUmVwb3J0YWwgfHwge307XG5SZXBvcnRhbEJhc2UubWl4aW4od2luZG93LlJlcG9ydGFsLHtcbiAgbGF1bmNoVmlkZW9IaXRsaXN0XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMCcgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2VzNi9wcm9taXNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmIChPYnNlcnZlcikge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwidmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gTElCUkFSWSA/IGZ1bmN0aW9uIChhLCBiKSB7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufSA6IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgaWYgKHByb21pc2UuX2ggPT0gMSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2M7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlYWN0aW9uO1xuICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkge1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZiAocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpIHJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZiAoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSkgcmV0dXJuIHg7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsImltcG9ydCBQcm9taXNlIGZyb20gJ2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZSc7XG5cbmNsYXNzIFJlcG9ydGFsQmFzZSB7XG5cbiAgLyoqXG4gICAqIENvcGllcyBwcm9wcyBmcm9tIGEgc291cmNlIG9iamVjdCB0byBhIHRhcmdldCBvYmplY3QuXG4gICAqXG4gICAqIE5vdGUsIHRoaXMgbWV0aG9kIHVzZXMgYSBzaW1wbGUgYGZvci4uLmluYCBzdHJhdGVneSBmb3IgZW51bWVyYXRpbmdcbiAgICogcHJvcGVydGllcy4gIFRvIGVuc3VyZSBvbmx5IGBvd25Qcm9wZXJ0aWVzYCBhcmUgY29waWVkIGZyb20gc291cmNlXG4gICAqIHRvIHRhcmdldCBhbmQgdGhhdCBhY2Nlc3NvciBpbXBsZW1lbnRhdGlvbnMgYXJlIGNvcGllZCwgdXNlIGBleHRlbmRgLlxuICAgKlxuICAgKiBAbWV0aG9kIG1peGluXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgVGFyZ2V0IG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgU291cmNlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCBhcyBmaXJzdCBhcmd1bWVudC5cbiAgICovXG4gIHN0YXRpYyBtaXhpbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAodmFyIGkgaW4gc291cmNlKSB7XG4gICAgICB0YXJnZXRbaV0gPSBzb3VyY2VbaV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBzdGF0aWMgX2xvZ2dlcihsZXZlbCwgYXJncykge1xuICAgIC8vIGFjY2VwdCBbJ2ZvbycsICdiYXInXSBhbmQgW1snZm9vJywgJ2JhciddXVxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBhcmdzID0gYXJnc1swXTtcbiAgICB9XG4gICAgLy8gb25seSBhY2NlcHQgbG9nZ2luZyBmdW5jdGlvbnNcbiAgICBzd2l0Y2gobGV2ZWwpIHtcbiAgICAgIGNhc2UgJ2xvZyc6XG4gICAgICBjYXNlICd3YXJuJzpcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgY29uc29sZVtsZXZlbF0uYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBfbG9nKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ2xvZycsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIF93YXJuKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ3dhcm4nLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBfZXJyb3IoKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHRoaXMuX2xvZ2dlcignZXJyb3InLCBhcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmFtZWQgZXZlbnQgd2l0aCBgbmFtZWBcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJuIHtFdmVudH0gUmV0dXJucyBhIGNyZWF0ZWQgZXZlbnRcbiAgICogKi9cbiAgc3RhdGljIG5ld0V2ZW50KG5hbWUpe1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW5zcGVjdHMgaWYgdGhlIGN1cnJlbnQgc3RyaW5nIG1pZ2h0IGJlIGNvbnZlcnRlZCB0byBudW1iZXIgYW5kIHJlbmRlcnMgaXQgYXMgbnVtYmVyLiBJZiBzdHJpbmcgbGVuZ3RoIGlzIDAsIHJldHVybnMgYG51bGxgLiBJZiBub25lIGFwcGxpZXMgcmV0dXJucyB0aGUgc3RyaW5nIGFzIGlzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gdmFsdWUgb2YgdGhlIGNlbGwgaWYgbm90IEhUTUwgY29udGVudHNcbiAgICogQHJldHVybiB7TnVtYmVyfG51bGx8U3RyaW5nfVxuICAgKiAqL1xuICBzdGF0aWMgaXNOdW1iZXIoc3RyKXtcbiAgICBpZighaXNOYU4ocGFyc2VGbG9hdChzdHIpKSl7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvLC9pLCcnKTsvLyByZW1vdmUgdW5uZWNlc3NhcnkgY29tbWEgYXMgYSBkZWxpbWl0ZXIgZm9yIHRob3VzYW5kcyBmcm9tIGRhdGEuXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChzdHIpO1xuICAgIH0gZWxzZSBpZihzdHIubGVuZ3RoPT0wKXtyZXR1cm4gbnVsbH0gZWxzZSB7cmV0dXJuIHN0cn1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gWEhSIHdyYXBwZWQgaW4gYSBQcm9taXNlXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gVVJMIC0gdXJsIHRvIHNlbmQgYSBgR0VUYCByZXF1ZXN0IHRvXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJldHVybnMgYSB0aGVuLWFibGUgcHJvbWlzZSB3aXRoIGBYTUxIdHRwUmVxdWVzdC5yZXNwb25zZVRleHRgXG4gICAqICovXG4gIHN0YXRpYyBwcm9taXNlUmVxdWVzdChVUkwpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB4aHIub3BlbignR0VUJywgVVJMLCB0cnVlKTtcbiAgICAgIHhoci5vbmxvYWQgPSAoKT0+e3hoci5zdGF0dXMgPT0gMjAwP3Jlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk6cmVqZWN0KEVycm9yKGAke3hoci5zdGF0dXN9OiAke3hoci5zdGF0dXNUZXh0fWApKTt9XG4gICAgICB4aHIub25lcnJvciA9ICgpPT57cmVqZWN0KEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7fVxuICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgdmFyaWFibGUgbGlzdGVkIGluIHF1ZXJ5IHN0cmluZ1xuICAgKiBAcGFyYW0geyFTdHJpbmd9IHZhcmlhYmxlIC0gdmFyaWFibGUgbmFtZSB0byBnZXQgdmFsdWUgZm9yXG4gICAqIEBwYXJhbSB7U3RyaW5nPX0gW3F1ZXJ5PXdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpXSAtIHRoZSBxdWVyeSBzdHJpbmcgdG8gc2VhcmNoIHZhcmlhYmxlIGZvciBpblxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFJldHVybnMgdmFsdWUgZm9yIHRoZSB2YXJpYWJsZVxuICAgKiAqL1xuICBzdGF0aWMgZ2V0UXVlcnlWYXJpYWJsZSh2YXJpYWJsZSxxdWVyeT13aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSl7XG4gICAgdmFyIHZhcnMgPSBxdWVyeS5zcGxpdChcIiZcIik7XG4gICAgZm9yICh2YXIgaT0wO2k8dmFycy5sZW5ndGg7aSsrKSB7XG4gICAgICB2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgaWYoKHBhaXJbMF0pLnRvTG93ZXJDYXNlKCkgPT0gdmFyaWFibGUudG9Mb3dlckNhc2UoKSl7cmV0dXJuIHBhaXJbMV07fVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIHR1cm5zIGB3aW5kb3cubG9jYXRpb25gIG9iamVjdCBpbnRvIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhcyBuYW1lZCBrZXlzIG5lY2Vzc2FyeSB0byByZWNvbnN0cnVjdCB0aGUgVVJMXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gW2xvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uXSAtIGEgd2luZG93LmxvY2F0aW9uIG9iamVjdCwgYnkgZGVmYXVsdCBvZiB0aGUgaG9zdCB3aW5kb3cgd2hlcmUgdGhlIHNjcmlwdCBpcyBleGVjdXRlZFxuICAgKiBAcmV0dXJucyB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBhIGBsb2NhdGlvbmAgb2JqZWN0XG4gICAqICovXG4gIHN0YXRpYyBsb2NhdGlvbkRlc2VyaWFsaXplKGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uKXtcbiAgICBsZXQgbyA9IHtcbiAgICAgIHBhdGg6IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgcXVlcnk6e31cbiAgICB9O1xuICAgIGxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkuc3BsaXQoLyYvKS5mb3JFYWNoKHBhaXI9PntcbiAgICAgIGxldCBhUGFpcj0gcGFpci5zcGxpdCgvPS8pO1xuICAgICAgby5xdWVyeVthUGFpclswXS50b0xvd2VyQ2FzZSgpXSA9IGFQYWlyWzFdXG4gICAgfSk7XG4gICAgcmV0dXJuIG9cbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJucyBhIGBsb2NhdGlvbmAgb2JqZWN0IChyZXN1bHQgb2YgYGxvY2F0aW9uRGVzZXJpYWxpemVgKSBpbnRvIGEgVVJMXG4gICAqIEBwYXJhbSB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBsb2NhdGlvbiAtIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhbmQgYSB1cmxcbiAgICogQHJldHVybnMge1N0cmluZ30gLSBhIFVSTCBzdHJpbmdcbiAgICogKi9cbiAgc3RhdGljIGxvY2F0aW9uU2VyaWFsaXplKGxvY2F0aW9uKXtcbiAgICBsZXQgcXVlcnk9W107XG4gICAgZm9yKGxldCBrZXkgaW4gbG9jYXRpb24ucXVlcnkpe1xuICAgICAgcXVlcnkucHVzaChba2V5LGxvY2F0aW9uLnF1ZXJ5W2tleV1dLmpvaW4oJz0nKSk7XG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRoICsgJz8nICsgcXVlcnkuam9pbignJicpO1xuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydGFsQmFzZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLXJlcG9ydGFsLWJhc2Uvc3JjL3JlcG9ydGFsLWJhc2UuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMS4wMS4yMDE3LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2VHcmlkIGZyb20gXCIuLi9JbWFnZUdyaWQvSW1hZ2VHcmlkXCI7XG5pbXBvcnQgU2luZ2xlVmlldyBmcm9tIFwiLi4vU2luZ2xlVmlldy9TaW5nbGVWaWV3XCI7XG5pbXBvcnQgRFNBYnN0cmFjdGlvbiBmcm9tICcuLi9EU0Fic3RyYWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFZpZGVvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuY29uZmlnIC0gbmFtZSBvZiB0aGUgY29uZmlnIHRoYXQgbWFwcyBxdWVzdGlvbiBpZHMgZnJvbSBkYXRhIHdpdGggdGhlIGRhdGEgdHlwZXNcbiAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy50aHVtYnNQbGFjZWhvbGRlciAtIGRpc3BsYXkgdGh1bWJzIGFzIGltYWdlIHBsYWNlaG9sZGVycyBpbnN0ZWFkIG9mIG1lZGlhIGljb25zXG4gICAqXG4gICAqICovXG4gIERTID0gRFNBYnN0cmFjdGlvbih7XG4gICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZyxcbiAgICB0aHVtYnNQbGFjZWhvbGRlcjogdGhpcy5wcm9wcy50aHVtYnNQbGFjZWhvbGRlcixcbiAgICBjb21wb25lbnQ6IHRoaXNcbiAgfSk7XG5cbiAgc3RhdGUgPSB7XG4gICAgaXRlbXM6IG51bGwsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIHNpbmdsZVZpZXc6IHtcbiAgICAgIGxpbms6ICcnXG4gICAgfSxcbiAgICBzaW5nbGVWaWV3VmlzaWJsZTogZmFsc2UsXG4gICAgZGlzYWJsZVNpbmdsZVZpZXdQcmV2OiBmYWxzZSxcbiAgICBkaXNhYmxlU2luZ2xlVmlld05leHQ6IGZhbHNlLFxuICB9O1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXRlbXMsIHNpbmdsZVZpZXdWaXNpYmxlLCBzaW5nbGVWaWV3LCBlcnJvciwgZGlzYWJsZVNpbmdsZVZpZXdQcmV2LCBkaXNhYmxlU2luZ2xlVmlld05leHQgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHJlbmRlciA9IG51bGw7XG4gICAgaWYgKCFlcnJvciAmJiBBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgIHJlbmRlciA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BHcmlkQ29udGFpbmVyICR7IXNpbmdsZVZpZXdWaXNpYmxlID8gJ0dyaWRWaWV3JyA6ICcnfWB9PlxuICAgICAgICAgIHtzaW5nbGVWaWV3VmlzaWJsZSAmJiAoXG4gICAgICAgICAgICA8U2luZ2xlVmlld1xuICAgICAgICAgICAgICByZXR1cm5Ub0dyaWRBY3Rpb249e3RoaXMucmV0dXJuVG9HcmlkfVxuICAgICAgICAgICAgICBsb2FkUHJldmlvdXNJdGVtPXt0aGlzLmxvYWRQcmV2aW91c0l0ZW19XG4gICAgICAgICAgICAgIGxvYWROZXh0SXRlbT17dGhpcy5sb2FkTmV4dEl0ZW19XG4gICAgICAgICAgICAgIGhlYWRlclRleHQ9e2BFZGl0IHZpZGVvIFwiJHtzaW5nbGVWaWV3LnRpdGxlfVwiYH1cbiAgICAgICAgICAgICAgZGlzYWJsZVNpbmdsZVZpZXdQcmV2PXtkaXNhYmxlU2luZ2xlVmlld1ByZXZ9XG4gICAgICAgICAgICAgIGRpc2FibGVTaW5nbGVWaWV3TmV4dD17ZGlzYWJsZVNpbmdsZVZpZXdOZXh0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aWZyYW1lIGNsYXNzTmFtZT1cInJlbmRlckFyZWFcIiBzcmM9e3NpbmdsZVZpZXcubGlua30gLz5cbiAgICAgICAgICAgIDwvU2luZ2xlVmlldz5cbiAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkQ29udGFpbmVyXCIgc3R5bGU9e3sgZGlzcGxheTogIXNpbmdsZVZpZXdWaXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cbiAgICAgICAgICAgIDxJbWFnZUdyaWRcbiAgICAgICAgICAgICAgYXNwZWN0PVwiMTY6OVwiXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0fVxuICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTmF2aWdhdGlvbigpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuRFMpIHtcbiAgICAgICAgcmVuZGVyID0gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR3JpZENvbnRhaW5lciBJbWFnZUdyaWRcIj57dGhpcy5kYXRhTG9hZGluZ01lc3NhZ2UoKX08L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIaXRsaXN0RGF0YXNvdXJjZSBpcyBub3QgYXZhaWxhYmxlJylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlbmRlclxuICB9XG5cbiAgZGF0YUxvYWRpbmdNZXNzYWdlKCkge1xuICAgIGxldCBtZXNzYWdlO1xuICAgIGNvbnN0IHsgaXRlbXMsIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgbWVzc2FnZSA9ICdlcnJvckxvYWRpbmcnXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIG1lc3NhZ2UgPSAnUkVQT1JUX1NJTkdMRVZJRVdfTk9USElOR0ZPVU5EJ1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlID0gJ2xvYWRpbmdEYXRhJ1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5EUy5pMThuKG1lc3NhZ2UpXG4gIH1cblxuICByZW5kZXJOYXZpZ2F0aW9uKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuRFMuY29uZmlnKCk7XG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IGNvbmZpZy5wYWdpbmF0aW9uO1xuICAgICAgaWYgKHBhZ2luYXRpb24gPT09ICdjb250aW51b3VzJykge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250aW51b3VzTmF2aWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5nTmF2aWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHBhZ2luZ05hdmlnYXRpb24oKSB7XG4gICAgY29uc3QgcGFnZUluZm8gPSB0aGlzLkRTLmdldFBhZ2VJbmZvKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uUm93XCI+XG4gICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gYWNjZW50XCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLkRTLmxvYWRQcmV2aW91c1BhZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuRFMuZGlzYWJsZVByZXZCdXR0b259XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5EUy5pMThuKCdSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VUycpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gYWNjZW50XCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLkRTLmxvYWROZXh0UGFnZX1cbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbn1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLkRTLmkxOG4oJ1JFUE9SVF9TSU5HTEVWSUVXX05FWFQnKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3Bhbj57cGFnZUluZm99PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29udGludW91c05hdmlnYXRpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uUm93XCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBmbGF0XCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLkRTLmxvYWRNb3JlfVxuICAgICAgICAgIGRpc2FibGVkPXt0aGlzLkRTLmRpc2FibGVOZXh0QnV0dG9ufVxuICAgICAgICA+TG9hZCBtb3JlPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cblxuICByZXR1cm5Ub0dyaWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaW5nbGVWaWV3VmlzaWJsZTogZmFsc2UsXG4gICAgICBzaW5nbGVWaWV3OiB7XG4gICAgICAgIGxpbms6ICcnXG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIGxvYWRQcmV2aW91c0l0ZW0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVJdGVtcygnYmFjaycpXG4gIH1cblxuICBsb2FkTmV4dEl0ZW0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVJdGVtcygnZm9yd2FyZCcpXG4gIH1cblxuICBuYXZpZ2F0ZUl0ZW1zKGRpcmVjdGlvbikge1xuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XG4gICAgbGV0IGl0ZW1zTGVuZ3RoID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBwcmV2RGF0YSA9IHRoaXMuc3RhdGUuc2luZ2xlVmlldztcbiAgICBsZXQgcHJldkluZGV4ID0gaXRlbXMuaW5kZXhPZihwcmV2RGF0YSk7XG4gICAgbGV0IG5leHRJbmRleCA9IGRpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnID8gKytwcmV2SW5kZXggOiAtLXByZXZJbmRleDtcblxuICAgIGlmIChuZXh0SW5kZXggPCAwICYmICF0aGlzLkRTLmRpc2FibGVQcmV2QnV0dG9uKSB7XG4gICAgICBpdGVtcyA9IHRoaXMuRFMubG9hZFByZXZpb3VzUGFnZSgpO1xuICAgIH0gZWxzZSBpZiAobmV4dEluZGV4ID4gaXRlbXNMZW5ndGggJiYgIXRoaXMuRFMuZGlzYWJsZU5leHRCdXR0b24pIHtcbiAgICAgIGl0ZW1zID0gdGhpcy5EUy5sb2FkTmV4dFBhZ2UoKVxuICAgIH1cblxuICAgIGlmICghaXRlbXMuaGFzT3duUHJvcGVydHkoJ3RoZW4nKSkge1xuICAgICAgaXRlbXMgPSBQcm9taXNlLnJlc29sdmUoaXRlbXMpO1xuICAgIH1cbiAgICBjb25zdCBbZGlzYWJsZVNpbmdsZVZpZXdQcmV2LCBkaXNhYmxlU2luZ2xlVmlld05leHRdID0gdGhpcy5jaGVja1NpbmdsZVZpZXdOYXZTdGF0ZShuZXh0SW5kZXgpO1xuICAgIGl0ZW1zLnRoZW4oKCkgPT4ge1xuICAgICAgbGV0IHNpbmdsZVZpZXc7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gcHJldlN0YXRlLml0ZW1zO1xuICAgICAgICBpZiAobmV4dEluZGV4IDwgMCAmJiAhZGlzYWJsZVNpbmdsZVZpZXdQcmV2KSB7XG4gICAgICAgICAgc2luZ2xlVmlldyA9IG5ld0l0ZW1zW25ld0l0ZW1zLmxlbmd0aCAtIDFdXG4gICAgICAgIH0gZWxzZSBpZiAobmV4dEluZGV4ID4gaXRlbXNMZW5ndGggJiYgIWRpc2FibGVTaW5nbGVWaWV3TmV4dCkge1xuICAgICAgICAgIHNpbmdsZVZpZXcgPSBuZXdJdGVtc1swXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNpbmdsZVZpZXcgPSBuZXdJdGVtc1tuZXh0SW5kZXhdXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkaXNhYmxlU2luZ2xlVmlld05leHQsXG4gICAgICAgICAgZGlzYWJsZVNpbmdsZVZpZXdQcmV2LFxuICAgICAgICAgIHNpbmdsZVZpZXc6IHNpbmdsZVZpZXcsXG4gICAgICAgICAgc2luZ2xlVmlld1Zpc2libGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVTaW5nbGVWaWV3TmF2U3RhdGUoaXRlbSkgeyB9XG5cbiAgb25TZWxlY3QgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IFtkaXNhYmxlU2luZ2xlVmlld1ByZXYsIGRpc2FibGVTaW5nbGVWaWV3TmV4dF0gPSB0aGlzLmNoZWNrU2luZ2xlVmlld05hdlN0YXRlKHRoaXMuc3RhdGUuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNhYmxlU2luZ2xlVmlld1ByZXYsXG4gICAgICBkaXNhYmxlU2luZ2xlVmlld05leHQsXG4gICAgICBzaW5nbGVWaWV3OiBpdGVtLFxuICAgICAgc2luZ2xlVmlld1Zpc2libGU6IHRydWVcbiAgICB9KVxuICB9O1xuXG4gIGNoZWNrU2luZ2xlVmlld05hdlN0YXRlKGN1cnJlbnRJdGVtSW5kZXgpIHtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XG4gICAgbGV0IGRpc2FibGVTaW5nbGVWaWV3TmV4dCA9IGZhbHNlLFxuICAgICAgZGlzYWJsZVNpbmdsZVZpZXdQcmV2ID0gZmFsc2U7XG5cbiAgICBpZiAoY3VycmVudEl0ZW1JbmRleCA8PSAwICYmIHRoaXMuRFMuZGlzYWJsZVByZXZCdXR0b24pIHtcbiAgICAgIGRpc2FibGVTaW5nbGVWaWV3UHJldiA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjdXJyZW50SXRlbUluZGV4ID49IGl0ZW1zLmxlbmd0aCAtIDEgJiYgdGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbikge1xuICAgICAgZGlzYWJsZVNpbmdsZVZpZXdOZXh0ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIGRpc2FibGVTaW5nbGVWaWV3UHJldixcbiAgICAgIGRpc2FibGVTaW5nbGVWaWV3TmV4dFxuICAgIF1cbiAgfVxuXG5cbiAgc3RhdGljIGFjdGlvbkljb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaWNvblwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44My0xLjgzelwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICApXG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VmlkZW8vUmVhY3RWaWRlby5qcyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19yb290LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fdG9LZXkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX01hcC5qcyIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNLZXkuanMiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pZGVudGl0eS5qcyIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1NldC5qcyIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1NldENhY2hlLmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU3RhY2suanMiLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUdldC5qcyIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNFcXVhbC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaXNLZXkodmFsdWUsIG9iamVjdCkgPyBbdmFsdWVdIDogc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFBhdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY2FzdFBhdGguanMiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vX2FycmF5U29tZScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19lcXVhbEFycmF5cy5qcyIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0luZGV4LmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtYXRjaGVzUHJvcGVydHlgIGZvciBzb3VyY2UgdmFsdWVzIHN1aXRhYmxlXG4gKiBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUoa2V5LCBzcmNWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWUgJiZcbiAgICAgIChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gT2JqZWN0KG9iamVjdCkpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvZXEuanMiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gva2V5cy5qcyIsIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQocmVxdWlyZShcInJlYWN0XCIpKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW1wicmVhY3RcIl0sdCk7ZWxzZXt2YXIgcj10KFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP3JlcXVpcmUoXCJyZWFjdFwiKTplLnJlYWN0KTtmb3IodmFyIG8gaW4gcikoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czplKVtvXT1yW29dfX0odGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChvKXtpZihyW29dKXJldHVybiByW29dLmV4cG9ydHM7dmFyIG49cltvXT17ZXhwb3J0czp7fSxpZDpvLGxvYWRlZDohMX07cmV0dXJuIGVbb10uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sb2FkZWQ9ITAsbi5leHBvcnRzfXZhciByPXt9O3JldHVybiB0Lm09ZSx0LmM9cix0LnA9XCJcIix0KDApfShbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPXIoMSk7dC5kZWZhdWx0PW8uTURJY29uLGUuZXhwb3J0cz10LmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBpKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9ZnVuY3Rpb24gdShlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuTURJY29uPXZvaWQgMDt2YXIgYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIG89dFtyXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LHIsbyl7cmV0dXJuIHImJmUodC5wcm90b3R5cGUsciksbyYmZSh0LG8pLHR9fSgpLGY9cigyKSxsPW8oZiksYT10Lk1ESWNvbj1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7cmV0dXJuIG4odGhpcyx0KSxpKHRoaXMsKHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9cmV0dXJuIHUodCxlKSxjKHQsW3trZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucHJvcHMsdD1lLmZpbGwscj1lLnNpemUsbz1lLmljb24sbj1lLmNoaWxkcmVuO3JldHVybiBjb25zb2xlLmxvZyh0LHIsbyxuKSxsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN2Z1wiLHt4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsZmlsbDp0LHdpZHRoOnIsaGVpZ2h0OnIsdmlld0JveDpcIjAgMCAyNCAyNFwiLGNoaWxkcmVuOm98fG59KX19XSksdH0oZi5QdXJlQ29tcG9uZW50KTthLmRlZmF1bHRQcm9wcz17c2l6ZToyNCxmaWxsOlwicmdiYSgwLDAsMCwuODUpXCJ9fSxmdW5jdGlvbih0LHIpe3QuZXhwb3J0cz1lfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NREljb24uYnVuZGxlLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vTURJY29uL2Rpc3QvTURJY29uLmJ1bmRsZS5qcyIsIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQocmVxdWlyZShcInJlYWN0XCIpKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW1wicmVhY3RcIl0sdCk7ZWxzZXt2YXIgbz10KFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP3JlcXVpcmUoXCJyZWFjdFwiKTplLnJlYWN0KTtmb3IodmFyIHIgaW4gbykoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czplKVtyXT1vW3JdfX0odGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihvW3JdKXJldHVybiBvW3JdLmV4cG9ydHM7dmFyIG49b1tyXT17ZXhwb3J0czp7fSxpZDpyLGxvYWRlZDohMX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sb2FkZWQ9ITAsbi5leHBvcnRzfXZhciBvPXt9O3JldHVybiB0Lm09ZSx0LmM9byx0LnA9XCJcIix0KDApfShbZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fWZ1bmN0aW9uIG4oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGkoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiBhKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG89YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBvKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLHIpJiYoZVtyXT1vW3JdKX1yZXR1cm4gZX0sbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIHI9dFtvXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LG8scil7cmV0dXJuIG8mJmUodC5wcm90b3R5cGUsbyksciYmZSh0LHIpLHR9fSgpLHA9bygxKSx1PXIocCksYz1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpe24odGhpcyx0KTt2YXIgbz1pKHRoaXMsKHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcyxlKSk7cmV0dXJuIG8uX2ltYWdlT25sb2FkPW8uX2ltYWdlT25sb2FkLmJpbmQobyksby5faW1hZ2VPbmVycm9yPW8uX2ltYWdlT25lcnJvci5iaW5kKG8pLG8uc3RhdGU9e3NyYzp2b2lkIDAscGxhY2Vob2xkZXJIaWRkZW46IW8ucHJvcHMucGxhY2Vob2xkZXIsc2l6aW5nOm8ucHJvcHMuc2l6aW5nP28ucHJvcHMuc2l6aW5nOm51bGwscG9zaXRpb246by5wcm9wcy5wb3NpdGlvbj9vLnByb3BzLnBvc2l0aW9uOlwiY2VudGVyXCIscHJvcG9ydGlvbjowLGxvYWRlZDohMSxsb2FkaW5nOiExLGVycm9yOiExfSxvfXJldHVybiBhKHQsZSksbCh0LFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX2xvYWQoKSx0aGlzLl9jb21wdXRlRGltZW5zaW9ucygpLHRoaXMuX2NvbXB1dGVQcm9wb3J0aW9uKHRoaXMucHJvcHMuYXNwZWN0KX19LHtrZXk6XCJfY29tcHV0ZURpbWVuc2lvbnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucHJvcHMsdD1lLndpZHRoLG89ZS5oZWlnaHQ7dGhpcy5zZXRTdGF0ZSh7d2lkdGg6aXNOYU4odCk/dDp0K1wicHhcIixoZWlnaHQ6aXNOYU4obyk/bzpvK1wicHhcIn0pfX0se2tleTpcIl9jb21wdXRlUHJvcG9ydGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUmJmUuaW5kZXhPZihcIjpcIik+LTEpe3ZhciB0PWUuc3BsaXQoXCI6XCIpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gcGFyc2VGbG9hdChlKX0pO2lzTmFOKHRbMF0pfHxpc05hTih0WzFdKXx8dGhpcy5zZXRTdGF0ZShmdW5jdGlvbihlKXtpZighaXNOYU4ocGFyc2VGbG9hdChlLndpZHRoKSkpcmV0dXJue3Byb3BvcnRpb246KHBhcnNlRmxvYXQoZS53aWR0aCkqKHRbMV0vdFswXSkpLnRvU3RyaW5nKCkrZS53aWR0aC5zdWJzdHJpbmcocGFyc2VGbG9hdChlLndpZHRoKS50b1N0cmluZygpLmxlbmd0aCksaGVpZ2h0OlwiYXV0b1wifX0pfX19LHtrZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuc3RhdGUsdD1lLndpZHRoLG89ZS5oZWlnaHQscj1lLnByb3BvcnRpb24sbj1lLnNyYyxpPWUuc2l6aW5nLGE9ZS5wb3NpdGlvbixzPWUubG9hZGluZyxsPWUubG9hZGVkLHA9ZS5wbGFjZWhvbGRlckhpZGRlbixjPXRoaXMucHJvcHMsZD1jLnByZWxvYWQsZj1jLmZhZGUsaD1jLnBsYWNlaG9sZGVyU2l6aW5nLGc9Yy5wbGFjZWhvbGRlcixtPWMuYWx0O3JldHVybiB1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJQcm9wb3J0aW9uYWxJbWFnZVwiLHN0eWxlOnt3aWR0aDp0LGhlaWdodDpvLHBhZGRpbmdUb3A6cn19LHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcInNpemVkSW1nRGl2XCIscm9sZTpcImltZ1wiLHN0eWxlOntiYWNrZ3JvdW5kSW1hZ2U6bj9cInVybChcIituK1wiKVwiOnZvaWQgMCxiYWNrZ3JvdW5kU2l6ZTppLGJhY2tncm91bmRQb3NpdGlvbjphLGJhY2tncm91bmRSZXBlYXQ6aT9cIm5vLXJlcGVhdFwiOlwiaW5pdGlhbFwiLGRpc3BsYXk6aT9cImJsb2NrXCI6XCJub25lXCJ9fSksdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3JjOm4sYWx0Om0sb25Mb2FkOnRoaXMuX2ltYWdlT25sb2FkLG9uRXJyb3I6dGhpcy5faW1hZ2VPbmVycm9yLHN0eWxlOntkaXNwbGF5Omk/XCJub25lXCI6XCJibG9ja1wifX0pLHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOntiYWNrZ3JvdW5kSW1hZ2U6Zz9cInVybChcIitnK1wiKVwiOnZvaWQgMCxiYWNrZ3JvdW5kU2l6ZTpoP2g6aSxiYWNrZ3JvdW5kUG9zaXRpb246YSxiYWNrZ3JvdW5kUmVwZWF0Omk/XCJuby1yZXBlYXRcIjpcImluaXRpYWxcIn0sY2xhc3NOYW1lOlwiaW1hZ2VQbGFjZWhvbGRlciBcIisocCYmXCJoaWRkZW5cIikrXCIgXCIrKGQmJmYmJiFzJiZsJiZcImZhZGVkLW91dFwiKX0pKX19LHtrZXk6XCJfaW1hZ2VPbmxvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ITEsbG9hZGVkOiEwLGVycm9yOiExfSl9fSx7a2V5OlwiX2ltYWdlT25lcnJvclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXRTdGF0ZShzKHt9LHRoaXMuX3Jlc2V0KCkse2Vycm9yOiEwfSkpfX0se2tleTpcIl9yZXNldFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJue3NyYzp2b2lkIDAsbG9hZGluZzohMSxsb2FkZWQ6ITEsZXJyb3I6ITF9fX0se2tleTpcIl9sb2FkXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9yZXNldCgpO2lmKCF0aGlzLnByb3BzLnByZXZlbnRMb2FkKXt2YXIgdD10aGlzLnByb3BzLnNyYztlLnNyYyE9PXQmJihlPXMoe30sZSx7c3JjOnQ/dDp2b2lkIDAsbG9hZGluZzohIXR9KSl9dGhpcy5zZXRTdGF0ZShlKX19XSksdH0odS5kZWZhdWx0LkNvbXBvbmVudCk7dC5kZWZhdWx0PWN9LGZ1bmN0aW9uKHQsbyl7dC5leHBvcnRzPWV9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L1Byb3BvcnRpb25hbEltYWdlL2Rpc3QvUHJvcG9ydGlvbmFsSW1hZ2UuYnVuZGxlLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19EYXRhVmlldy5qcyIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0hhc2guanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXBwbHkuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNXaXRoKGFycmF5LCB2YWx1ZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlNYXAuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNGbGF0dGVuYWJsZSA9IHJlcXVpcmUoJy4vX2lzRmxhdHRlbmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mbGF0dGVuYCB3aXRoIHN1cHBvcnQgZm9yIHJlc3RyaWN0aW5nIGZsYXR0ZW5pbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBmbGF0dGVuLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlcHRoIFRoZSBtYXhpbXVtIHJlY3Vyc2lvbiBkZXB0aC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZWRpY2F0ZT1pc0ZsYXR0ZW5hYmxlXSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNTdHJpY3RdIFJlc3RyaWN0IHRvIHZhbHVlcyB0aGF0IHBhc3MgYHByZWRpY2F0ZWAgY2hlY2tzLlxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdD1bXV0gVGhlIGluaXRpYWwgcmVzdWx0IHZhbHVlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlRmxhdHRlbihhcnJheSwgZGVwdGgsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBwcmVkaWNhdGUgfHwgKHByZWRpY2F0ZSA9IGlzRmxhdHRlbmFibGUpO1xuICByZXN1bHQgfHwgKHJlc3VsdCA9IFtdKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAoZGVwdGggPiAwICYmIHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIGlmIChkZXB0aCA+IDEpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmxhdHRlbiBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgICAgYmFzZUZsYXR0ZW4odmFsdWUsIGRlcHRoIC0gMSwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5UHVzaChyZXN1bHQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc1N0cmljdCkge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZsYXR0ZW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUZsYXR0ZW4uanMiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmhhc0luYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSGFzSW4ob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGtleSBpbiBPYmplY3Qob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSGFzSW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUhhc0luLmpzIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUlzTmFOID0gcmVxdWlyZSgnLi9fYmFzZUlzTmFOJyksXG4gICAgc3RyaWN0SW5kZXhPZiA9IHJlcXVpcmUoJy4vX3N0cmljdEluZGV4T2YnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IGBmcm9tSW5kZXhgIGJvdW5kcyBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZVxuICAgID8gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleClcbiAgICA6IGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWF0Y2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBvYmplY3RgIGlzIGEgbWF0Y2gsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgaWYgKChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSlcbiAgICAgICAgICA/IGRhdGFbMV0gIT09IG9iamVjdFtkYXRhWzBdXVxuICAgICAgICAgIDogIShkYXRhWzBdIGluIG9iamVjdClcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgdmFyIGtleSA9IGRhdGFbMF0sXG4gICAgICAgIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHNyY1ZhbHVlID0gZGF0YVsxXTtcblxuICAgIGlmIChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSkge1xuICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFjayA9IG5ldyBTdGFjaztcbiAgICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spO1xuICAgICAgfVxuICAgICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcsIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICAgICAgOiByZXN1bHRcbiAgICAgICAgICApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWF0Y2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTWF0Y2guanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmFOYCB3aXRob3V0IHN1cHBvcnQgZm9yIG51bWJlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hTjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLml0ZXJhdGVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbdmFsdWU9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYW4gaXRlcmF0ZWUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGl0ZXJhdGVlLlxuICovXG5mdW5jdGlvbiBiYXNlSXRlcmF0ZWUodmFsdWUpIHtcbiAgLy8gRG9uJ3Qgc3RvcmUgdGhlIGB0eXBlb2ZgIHJlc3VsdCBpbiBhIHZhcmlhYmxlIHRvIGF2b2lkIGEgSklUIGJ1ZyBpbiBTYWZhcmkgOS5cbiAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYwMzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pXG4gICAgICA6IGJhc2VNYXRjaGVzKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJdGVyYXRlZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXRlcmF0ZWUuanMiLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5cy5qcyIsInZhciBiYXNlSXNNYXRjaCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hdGNoJyksXG4gICAgZ2V0TWF0Y2hEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWF0Y2hEYXRhJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShtYXRjaERhdGFbMF1bMF0sIG1hdGNoRGF0YVswXVsxXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT09IHNvdXJjZSB8fCBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlTWF0Y2hlcy5qcyIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyksXG4gICAgZ2V0ID0gcmVxdWlyZSgnLi9nZXQnKSxcbiAgICBoYXNJbiA9IHJlcXVpcmUoJy4vaGFzSW4nKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lc24ndCBjbG9uZSBgc3JjVmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIGlmIChpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKHRvS2V5KHBhdGgpLCBzcmNWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBvYmpWYWx1ZSA9IGdldChvYmplY3QsIHBhdGgpO1xuICAgIHJldHVybiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBvYmpWYWx1ZSA9PT0gc3JjVmFsdWUpXG4gICAgICA/IGhhc0luKG9iamVjdCwgcGF0aClcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzUHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVByb3BlcnR5YCB3aGljaCBzdXBwb3J0cyBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eURlZXAocGF0aCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlEZWVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgb3ZlclJlc3QgPSByZXF1aXJlKCcuL19vdmVyUmVzdCcpLFxuICAgIHNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fc2V0VG9TdHJpbmcnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVJlc3QuanMiLCJ2YXIgY29uc3RhbnQgPSByZXF1aXJlKCcuL2NvbnN0YW50JyksXG4gICAgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXRUb1N0cmluZ2Agd2l0aG91dCBzdXBwb3J0IGZvciBob3QgbG9vcCBzaG9ydGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuYywgJ3RvU3RyaW5nJywge1xuICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgJ3ZhbHVlJzogY29uc3RhbnQoc3RyaW5nKSxcbiAgICAnd3JpdGFibGUnOiB0cnVlXG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVNldFRvU3RyaW5nLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXG4gICAgY3JlYXRlU2V0ID0gcmVxdWlyZSgnLi9fY3JlYXRlU2V0JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBzZWVuID0gcmVzdWx0O1xuXG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICB9XG4gIGVsc2UgaWYgKGxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgdmFyIHNldCA9IGl0ZXJhdGVlID8gbnVsbCA6IGNyZWF0ZVNldChhcnJheSk7XG4gICAgaWYgKHNldCkge1xuICAgICAgcmV0dXJuIHNldFRvQXJyYXkoc2V0KTtcbiAgICB9XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIHNlZW4gPSBuZXcgU2V0Q2FjaGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcbiAgICAgICAgaWYgKHNlZW5bc2VlbkluZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyhzZWVuLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVW5pcS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsInZhciBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBub29wID0gcmVxdWlyZSgnLi9ub29wJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9iamVjdCBvZiBgdmFsdWVzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYWRkIHRvIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgc2V0LlxuICovXG52YXIgY3JlYXRlU2V0ID0gIShTZXQgJiYgKDEgLyBzZXRUb0FycmF5KG5ldyBTZXQoWywtMF0pKVsxXSkgPT0gSU5GSU5JVFkpID8gbm9vcCA6IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFNldCh2YWx1ZXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsInZhciBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3Mgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbWF0Y2ggZGF0YSBvZiBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hEYXRhKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0ga2V5cyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICB2YXIga2V5ID0gcmVzdWx0W2xlbmd0aF0sXG4gICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICByZXN1bHRbbGVuZ3RoXSA9IFtrZXksIHZhbHVlLCBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hdGNoRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBleGlzdHMgb24gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFzRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBoYXNGdW5jKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBmYWxzZTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSB0b0tleShwYXRoW2luZGV4XSk7XG4gICAgaWYgKCEocmVzdWx0ID0gb2JqZWN0ICE9IG51bGwgJiYgaGFzRnVuYyhvYmplY3QsIGtleSkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gIH1cbiAgaWYgKHJlc3VsdCB8fCArK2luZGV4ICE9IGxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogb2JqZWN0Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiYgaXNJbmRleChrZXksIGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1BhdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzUGF0aC5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoR2V0LmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoSGFzLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcHJlYWRhYmxlU3ltYm9sID0gU3ltYm9sID8gU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGZsYXR0ZW5hYmxlIGBhcmd1bWVudHNgIG9iamVjdCBvciBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmbGF0dGVuYWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0ZsYXR0ZW5hYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkgfHxcbiAgICAhIShzcHJlYWRhYmxlU3ltYm9sICYmIHZhbHVlICYmIHZhbHVlW3NwcmVhZGFibGVTeW1ib2xdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZsYXR0ZW5hYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzRmxhdHRlbmFibGUuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwidmFyIG1lbW9pemUgPSByZXF1aXJlKCcuL21lbW9pemUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIG1heGltdW0gbWVtb2l6ZSBjYWNoZSBzaXplLiAqL1xudmFyIE1BWF9NRU1PSVpFX1NJWkUgPSA1MDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1lbW9pemVgIHdoaWNoIGNsZWFycyB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24nc1xuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoY2FjaGUuc2l6ZSA9PT0gTUFYX01FTU9JWkVfU0laRSkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAgdmFyIGNhY2hlID0gcmVzdWx0LmNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVDYXBwZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19vdmVyQXJnLmpzIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyUmVzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19vdmVyUmVzdC5qcyIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwidmFyIGJhc2VTZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VTZXRUb1N0cmluZycpLFxuICAgIHNob3J0T3V0ID0gcmVxdWlyZSgnLi9fc2hvcnRPdXQnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRUb1N0cmluZy5qcyIsIi8qKiBVc2VkIHRvIGRldGVjdCBob3QgZnVuY3Rpb25zIGJ5IG51bWJlciBvZiBjYWxscyB3aXRoaW4gYSBzcGFuIG9mIG1pbGxpc2Vjb25kcy4gKi9cbnZhciBIT1RfQ09VTlQgPSA4MDAsXG4gICAgSE9UX1NQQU4gPSAxNjtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0J2xsIHNob3J0IG91dCBhbmQgaW52b2tlIGBpZGVudGl0eWAgaW5zdGVhZFxuICogb2YgYGZ1bmNgIHdoZW4gaXQncyBjYWxsZWQgYEhPVF9DT1VOVGAgb3IgbW9yZSB0aW1lcyBpbiBgSE9UX1NQQU5gXG4gKiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJlc3RyaWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc2hvcnRhYmxlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBzaG9ydE91dChmdW5jKSB7XG4gIHZhciBjb3VudCA9IDAsXG4gICAgICBsYXN0Q2FsbGVkID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YW1wID0gbmF0aXZlTm93KCksXG4gICAgICAgIHJlbWFpbmluZyA9IEhPVF9TUEFOIC0gKHN0YW1wIC0gbGFzdENhbGxlZCk7XG5cbiAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG9ydE91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zaG9ydE91dC5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tHZXQuanMiLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zIG9mIHZhbHVlcywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdHJpY3RJbmRleE9mLmpzIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUxlYWRpbmdEb3QgPSAvXlxcLi8sXG4gICAgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHJlTGVhZGluZ0RvdC50ZXN0KHN0cmluZykpIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwiLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJldHVybiBmcm9tIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb25zdGFudCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBfLnRpbWVzKDIsIF8uY29uc3RhbnQoeyAnYSc6IDEgfSkpO1xuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHMpO1xuICogLy8gPT4gW3sgJ2EnOiAxIH0sIHsgJ2EnOiAxIH1dXG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0c1swXSA9PT0gb2JqZWN0c1sxXSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uc3RhbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9jb25zdGFudC5qcyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvZ2V0LmpzIiwidmFyIGJhc2VIYXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VIYXNJbicpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBvciBpbmhlcml0ZWQgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNJbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2hhc0luLmpzIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZU9iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwiLyoqXG4gKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5sYXN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gbGVuZ3RoID8gYXJyYXlbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2xhc3QuanMiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL21lbW9pemUuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLm5vb3ApO1xuICogLy8gPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vb3A7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9ub29wLmpzIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvcHJvcGVydHkuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3N0dWJBcnJheS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3RvU3RyaW5nLmpzIiwidmFyIGJhc2VGbGF0dGVuID0gcmVxdWlyZSgnLi9fYmFzZUZsYXR0ZW4nKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpLFxuICAgIGxhc3QgPSByZXF1aXJlKCcuL2xhc3QnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnVuaW9uYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBpdGVyYXRlZWAgd2hpY2ggaXNcbiAqIGludm9rZWQgZm9yIGVhY2ggZWxlbWVudCBvZiBlYWNoIGBhcnJheXNgIHRvIGdlbmVyYXRlIHRoZSBjcml0ZXJpb24gYnlcbiAqIHdoaWNoIHVuaXF1ZW5lc3MgaXMgY29tcHV0ZWQuIFJlc3VsdCB2YWx1ZXMgYXJlIGNob3NlbiBmcm9tIHRoZSBmaXJzdFxuICogYXJyYXkgaW4gd2hpY2ggdGhlIHZhbHVlIG9jY3Vycy4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6XG4gKiAodmFsdWUpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgY29tYmluZWQgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaW9uQnkoWzIuMV0sIFsxLjIsIDIuM10sIE1hdGguZmxvb3IpO1xuICogLy8gPT4gWzIuMSwgMS4yXVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy51bmlvbkJ5KFt7ICd4JzogMSB9XSwgW3sgJ3gnOiAyIH0sIHsgJ3gnOiAxIH1dLCAneCcpO1xuICogLy8gPT4gW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH1dXG4gKi9cbnZhciB1bmlvbkJ5ID0gYmFzZVJlc3QoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHZhciBpdGVyYXRlZSA9IGxhc3QoYXJyYXlzKTtcbiAgaWYgKGlzQXJyYXlMaWtlT2JqZWN0KGl0ZXJhdGVlKSkge1xuICAgIGl0ZXJhdGVlID0gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBiYXNlVW5pcShiYXNlRmxhdHRlbihhcnJheXMsIDEsIGlzQXJyYXlMaWtlT2JqZWN0LCB0cnVlKSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmlvbkJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvdW5pb25CeS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMC4wMS4yMDE3LlxuICovXG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gXCJyLXJlcG9ydGFsLWJhc2VcIjtcbmltcG9ydCBIaXRsaXN0U2V0dXAgZnJvbSBcIi4vaGl0bGlzdC1zZXR1cFwiO1xuXG5jbGFzcyBIaXRsaXN0RGF0YXNvdXJjZSBleHRlbmRzIEhpdGxpc3RTZXR1cHtcbiAgLyoqXG4gICAqIFRoaXMgY2xhc3MgYWxsb3dzIHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gd2l0aCB0aGUgSGl0TGlzdCBkYXRhYmFzZSBhbmQgdXNlIHV0aWxpdHkgbWV0aG9kcyB0byBxdWVyeSBhbmQgZmlsdGVyIGRhdGEgcHJvdmlkZWQgdGhlcmUncyBhIGhpdGxpc3Qgb24gdGhlIHBhZ2VcbiAgICogQGV4dGVuZHMgSGl0bGlzdFNldHVwXG4gICAqICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM9e30pe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc2VhcmNoVmFsdWVzPVtdO1xuICAgIC8qKiBAcHJvcGVydHkge1N0cmluZ30gbW9kaWZpZXIgLSBleHRyYSBwYXJhbXMgYWRkZWQgYXMgYSBzdHJpbmcgZnJvbSBmaWx0ZXJzICovXG4gICAgdGhpcy5tb2RpZmllciA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIHBlcmZvcm1zIGluaXRpYWwgZGF0YSBsb2FkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIGluaXRpYWxEYXRhTG9hZCgpe1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpbml0aWFsTG9hZDp0cnVlfSlcbiAgfVxuICAvKipcbiAgICogbG9hZHMgbmV4dCBwYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIG5leHRQYWdlKCl7XG4gICAgdGhpcy5fc2tpcFBhZ2UodHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpc1BhZ2luZzogdHJ1ZX0sdGhpcy5tb2RpZmllcik7XG4gIH1cbiAgLyoqXG4gICAqIGxvYWRzIHByZXZpb3VzIHBhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgcHJldmlvdXNQYWdlKCl7XG4gICAgdGhpcy5fc2tpcFBhZ2UoZmFsc2UpO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aXNQYWdpbmc6IHRydWV9LHRoaXMubW9kaWZpZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJpZXMgSGl0TGlzdCBBUElcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogKi9cbiAgcmVxdWVzdFJlc3BvbnNlKG9wdGlvbnMpe1xuICAgIGxldCBxdWVyeT0gUmVwb3J0YWxCYXNlLmxvY2F0aW9uRGVzZXJpYWxpemUoKS5xdWVyeTtcbiAgICBpZihxdWVyeSAmJiBxdWVyeS5yZXBvcnRpZCAmJiB0aGlzLmhpdGxpc3RJRCl7XG4gICAgICAvKnNldCBjb21tb24gcGFyYW1zKi9cbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIFBhZ2VJZDogdGhpcy5wYWdlSUQsXG4gICAgICAgIHBhZ2VTdGF0ZUlkOiB0aGlzLnBhZ2VTdGF0ZUlELFxuICAgICAgICBQcmV2aWV3OiBxdWVyeS5wcmV2aWV3XG4gICAgICB9O1xuXG4gICAgICAvKmlmIG9wdGlvbnMgYXJlIHBhc3NlZCwgYWRkIG9wdGlvbnMqL1xuICAgICAgaWYob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpe1xuICAgICAgICBmb3IgKGxldCBhdHRybmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgcGFyYW1zW2F0dHJuYW1lXSA9IHR5cGVvZiBvcHRpb25zW2F0dHJuYW1lXT09PSdib29sZWFuJz8ob3B0aW9uc1thdHRybmFtZV0/JzEnOicwJyk6b3B0aW9uc1thdHRybmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIXBhcmFtcy5zZWFyY2ggJiYgdGhpcy5fc2VhcmNoVmFsdWVzLmxlbmd0aD4wKXtcbiAgICAgICAgcGFyYW1zLnNlYXJjaCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuX3NlYXJjaFZhbHVlcyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzb3J0aW5nUGFnaW5nVmFsdWVzID0gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzO1xuXG4gICAgICBpZiAoc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMhPW51bGwgJiYgIWlzTmFOKHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2VOdW1iZXIpKSB7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaW5pdGlhbExvYWQgPT09IHRydWUpIHtcbiAgICAgICAgICBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcyA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnZU51bWJlciArPSBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdpbmdGb3J3YXJkID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy5zb3J0aW5nUGFnaW5nVmFsdWVzPUpTT04uc3RyaW5naWZ5KHNvcnRpbmdQYWdpbmdWYWx1ZXMpO1xuXG4gICAgICByZXR1cm4gUmVwb3J0YWxCYXNlLnByb21pc2VSZXF1ZXN0KGAke3RoaXMuc2VydmljZVVSTH0mJHtIaXRsaXN0RGF0YXNvdXJjZS5zZXJpYWxpemVQYXJhbXMocGFyYW1zKX0ke3RoaXMubW9kaWZpZXIhPScnPycmJyt0aGlzLm1vZGlmaWVyOicnfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT50aGlzLnBhcnNlUmVzcG9uc2UocmVzcG9uc2UpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgSGl0TGlzdCBBUEkgcmVzcG9uc2VcbiAgICogKi9cbiAgcGFyc2VSZXNwb25zZShyZXNwb25zZSl7XG4gICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcblxuICAgIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHJlc3BvbnNlLnNvcnRpbmdQYWdpbmdWYWx1ZXM7XG4gICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICB0aGlzLnBhZ2VJbmZvID0gcmVzcG9uc2UucGFnZUluZm87XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHBhZ2luZ0ZvcndhcmQgaWYgYHRydWVgIGdvZXMgZm9yd2FyZCwgaWYgYG51bGxgIGdvZXMgYmFja3dhcmRcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNhbGxiYWNrXG4gICAqICovXG4gIF9za2lwUGFnZShwYWdpbmdGb3J3YXJkKXtcbiAgICBsZXQgX3NwdiA9IHsuLi50aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXN9O1xuICAgIGxldCBwdiA9IHsuLi5fc3B2LnBhZ2luZ1ZhbHVlc30gfHwge307XG4gICAgcHYucGFnaW5nRm9yd2FyZCA9IHBhZ2luZ0ZvcndhcmQ7IC8qaWYgZm9yd2FyZCBpcyBuZWVkZWQgdGhlbiBwYXNzIHRydWUsIGVsc2UgbnVsbCAtIGJhY2t3YXJkKi9cbiAgICBwdi5zdGFydElkID0gcGFnaW5nRm9yd2FyZCA/IHB2Lmxhc3RTdGFydElkIDogcHYuZmlyc3RTdGFydElkO1xuICAgIHB2LnN0YXJ0VmFsdWUgPSBwYWdpbmdGb3J3YXJkID8gcHYubGFzdFN0YXJ0VmFsdWUgOiBwdi5maXJzdFN0YXJ0VmFsdWU7XG4gICAgdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzID0ge1xuICAgICAgLi4udGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLFxuICAgICAgcGFnaW5nVmFsdWVzOiBwdlxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogc2VyaWFsaXplIHBhcmFtcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgLSBhbiBvYmplY3Qgd2l0aCBwYXJhbWV0ZXJzXG4gICAqICovXG4gIHN0YXRpYyBzZXJpYWxpemVQYXJhbXMocGFyYW1zKXtcbiAgICBsZXQgcXVlcnkgPSBbXTtcbiAgICBmb3IobGV0IGtleSBpbiBwYXJhbXMpe1xuICAgICAgcXVlcnkucHVzaChba2V5LHBhcmFtc1trZXldXS5qb2luKCc9JykpO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnkuam9pbignJicpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0RGF0YXNvdXJjZTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LWRhdGFzb3VyY2UuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTAuMDEuMjAxNy5cbiAqL1xuXG5jbGFzcyBIaXRsaXN0U2V0dXB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgLy9maXggZm9yIHdpbmRvdy5sb2NhdGlvbiBvcmlnaW4sIHRoYW54IElFXG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID8gJzonICsgd2luZG93LmxvY2F0aW9uLnBvcnQ6ICcnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBIaXRsaXN0U2V0dXAuZ2V0T3JpZ2luYWxDb25maWcoKTtcbiAgICB0aGlzLl9lbGVtZW50VHlwZSA9IHdpbmRvdy5IaXRMaXN0RWxlbWVudFR5cGU7XG4gICAgdGhpcy5fb3AgPSB3aW5kb3cuU2VhcmNoYWJsZUxpc3RPcGVyYXRvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBhbGxvd3MgZ2V0dGluZyBhIGxvY2FsaXNlZCBzdHJpbmcgaW4gdGhlIGxhbmd1YWdlIG9mIHRoZSByZXBvcnQgZnJvbSBIaXRsaXN0IGNvbmZpZy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIHRoZSBrZXkgdG8gbG9vayB0aGUgcHJvcGVydHkgdXBcbiAgICpcbiAgICogKiBgc3RvZWA6XCJTbWFsbGVyIHRoYW4gb3IgZXF1YWxcIixcbiAgICogKiBgZ3RvZWA6XCJHcmVhdGVyIHRoYW4gb3IgZXF1YWxcIixcbiAgICogKiBgYmV0d2VlbmA6XCJCZXR3ZWVuXCIsXG4gICAqICogYGJlZm9yZWA6XCJCZWZvcmVcIixcbiAgICogKiBgYWZ0ZXJgOlwiQWZ0ZXJcIixcbiAgICogKiBgZXhhY3RseWA6XCJFeGFjdGx5XCIsXG4gICAqICogYHNob3dkZWZhdWx0Y29sc2A6XCJTaG93IGRlZmF1bHQgY29sdW1uc1wiLFxuICAgKiAqIGBhcHBseWA6XCJBcHBseVwiLFxuICAgKiAqIGBjYW5jZWxgOlwiQ2FuY2VsXCIsXG4gICAqICogYHNob3doaWRlYDpcIlNob3cgLyBIaWRlIGNvbHVtbnNcIixcbiAgICogKiBgeWVzYDpcIlllc1wiLFxuICAgKiAqIGBub2A6XCJOb1wiLFxuICAgKiAqIGBsb2FkaW5nRGF0YWA6XCJMb2FkaW5nIGRhdGEsIHBsZWFzZSB3YWl0Li4uXCIsXCJcbiAgICogKiBgY2hlY2thbGxgOlwiQ2hlY2sgYWxsXCIsXG4gICAqICogYHVuY2hlY2thbGxgOlwiVW5jaGVjayBhbGxcIixcbiAgICogKiBgZXJyb3JMb2FkaW5nYDpcIkVycm9yIGxvYWRpbmcgZGF0YVwiLFxuICAgKiAqIGBlcnJvck5vQ29sdW1uc2A6XCJObyBjb2x1bW5zIHNlbGVjdGVkXCJcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUkVTUE9OREVOVE9WRVJWSUVXYDpcIlJlc3BvbmRlbnQgb3ZlcnZpZXdcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJJTlRgOlwiUHJpbnQgdGhlIGN1cnJlbnQgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19DTE9TRWA6XCJDbG9zZSB0aGlzIG92ZXJsYXlcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfRklMVEVSYDpcIkZpbHRlciBxdWVzdGlvbnNcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTk9USElOR0ZPVU5EYDpcIk5vIHF1ZXN0aW9ucyBtYXRjaCB5b3VyIHNlYXJjaFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VU2A6XCJQcmV2aW91c1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VU0hJTlRgOlwiUHJldmlvdXMgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19ORVhUYDpcIk5leHRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTkVYVEhJTlRgOlwiTmV4dCByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX09GYDpcInswfSBvZiB7MX1cIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTU9SRWA6XCJ7MH0gbW9yZVwiLFxuICAgKiAqIFJFUE9SVF9TSU5HTEVWSUVXX0FMVEVSTkFUSVZFU2A6XCJBbnN3ZXJzIGFsdGVybmF0aXZlczpcIlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKiAqL1xuICBpMThuKGtleSl7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5jYXB0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpP3RoaXMuX2NvbmZpZy5jYXB0aW9uc1trZXldOnRoaXMuX2NvbmZpZy5zaW5nbGVWaWV3VGV4dHMuaGFzT3duUHJvcGVydHkoa2V5KT90aGlzLl9jb25maWcuc2luZ2xlVmlld1RleHRzW2tleV06bnVsbFxuICB9XG5cbiAgZ2V0IGRhdGEoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmhpdGxpc3REYXRhfVxuXG4gIHNldCBkYXRhKGRhdGEpe1xuICAgIHRoaXMuX2NvbmZpZy5oaXRsaXN0RGF0YSA9IGRhdGE7XG4gIH1cbiAgZ2V0IGRpc2FibGVOZXh0QnV0dG9uKCl7XG4gICAgcmV0dXJuIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcy5kaXNhYmxlTmV4dEJ1dHRvbiB8fCBmYWxzZVxuICB9XG4gIGdldCBkaXNhYmxlUHJldkJ1dHRvbigpe1xuICAgIHJldHVybiB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMuZGlzYWJsZVByZXZCdXR0b24gfHwgZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSB2aXNpYmxlIEhpdExpc3QgY29sdW1ucyBvZiBPYmplY3QgdHlwZTogYHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ31gXG4gICAqIEByZXR1cm5zIHtBcnJheS48e2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfT59IFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHZpc2libGUgSGl0TGlzdCBjb2x1bW5zXG4gICAqICovXG4gIGdldCBjb2x1bW5zKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5jb2x1bW5zfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBIaXRMaXN0IGNvbHVtbnMgb2YgT2JqZWN0IHR5cGU6IGB7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9YFxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqICovXG4gIGdldCBhbGxDb2x1bW5zKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5hbGxDb2x1bW5zfVxuXG4gIGdldCBoaXRsaXN0SUQoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmNvbXBvbmVudElkfVxuICBnZXQgcGFnZUlEKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5wYWdlSWR9XG4gIGdldCBsYW5ndWFnZSgpe3JldHVybiB0aGlzLl9jb25maWcubGFuZ3VhZ2V9XG4gIGdldCBzZXJ2aWNlVVJMKCl7cmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt0aGlzLl9jb25maWcuc2VydmljZVVybH1gfVxuICBnZXQgcGFnZVN0YXRlSUQoKXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1BhZ2VTdGF0ZUlkJyk/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQYWdlU3RhdGVJZCcpLnZhbHVlOnVuZGVmaW5lZH1cbiAgZ2V0IHNvcnRpbmdQYWdpbmdWYWx1ZXMoKXtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXMhPW51bGw/dGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXM6e31cbiAgfVxuICBzZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcyh2YWwpe1xuICAgIHRoaXMuX2NvbmZpZy5zb3J0aW5nUGFnaW5nVmFsdWVzID0gdmFsO1xuICB9XG5cbiAgc3RhdGljIF9maXhKc29uRGF0ZShqc29uRGF0ZSkge1xuICAgIGlmICghKGpzb25EYXRlICYmIFkgJiYgWS5MYW5nLmlzRnVuY3Rpb24oanNvbkRhdGUucmVwbGFjZSkpKSB7cmV0dXJuIGpzb25EYXRlO31cbiAgICBsZXQgY29uc3RyID0ganNvbkRhdGUucmVwbGFjZShuZXcgUmVnRXhwKFwiXi9EYXRlXFxcXCgoWy0rXT9cXFxcZCspXFxcXCkvJFwiKSwgXCJuZXcgRGF0ZSgkMSlcIik7XG4gICAgaWYgKGNvbnN0ciA9PSBqc29uRGF0ZSkge3JldHVybiBqc29uRGF0ZTt9XG4gICAgcmV0dXJuIGV2YWwoY29uc3RyKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHRoZSBjb25maWcgZm9yIGEgSGl0TGlzdCBpZiBpdCdzIGluaXRpYWxpc2VkIG9uIHRoZSBwYWdlXG4gICAqIGBgYFxuICAgKiB7XG4gICAqICBhbGxDb2x1bW5zOkFycmF5LFxuICAgKiAgY2FwdGlvbnM6T2JqZWN0LFxuICAgKiAgY2xpZW50SWQ6U3RyaW5nLFxuICAgKiAgY29sdW1uczpBcnJheSxcbiAgICogIGNvbXBvbmVudElkOlN0cmluZyxcbiAgICogIGhhc2hlZFByb2plY3RJZDpTdHJpbmcsXG4gICAqICBoaXRsaXN0RGF0YTpBcnJheSxcbiAgICogIGxhbmd1YWdlOk51bWJlcixcbiAgICogIG5leHRUZXh0OlN0cmluZyxcbiAgICogIG5vSW5pdGlhbExvYWQ6Qm9vbGVhbixcbiAgICogIHBhZ2VBamF4RW5hYmxlZDpCb29sZWFuLFxuICAgKiAgcGFnZUlkOlN0cmluZyxcbiAgICogIHByZXZUZXh0OlN0cmluZyxcbiAgICogIHByZXZpZXc6Qm9vbGVhbixcbiAgICogIHNlYXJjaEl0ZW1zOkFycmF5LFxuICAgKiAgc2VhcmNoVmFsdWVzOkFycmF5LFxuICAgKiAgc2VydmljZVVybDpTdHJpbmcsXG4gICAqICBzZXJ2aWNlVXJsTWV0YURhdGE6U3RyaW5nLFxuICAgKiAgc2hvd1NpbmdsZVZpZXdPblJvd1NlbGVjdDpCb29sZWFuLFxuICAgKiAgc2luZ2xlVmlld0FwaVVybDpTdHJpbmcsXG4gICAqICBzaW5nbGVWaWV3Rm9ybXNDaHVua0FwaVVybDpTdHJpbmcsXG4gICAqICBzaW5nbGVWaWV3VGV4dHM6T2JqZWN0LFxuICAgKiAgc29ydGluZ1BhZ2luZ1ZhbHVlczpPYmplY3QsXG4gICAqICBzdHlsZXM6T2JqZWN0LFxuICAgKiAgdmVyc2lvbjpTdHJpbmdcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogKi9cbiAgc3RhdGljIGdldE9yaWdpbmFsQ29uZmlnKCl7XG4gICAgbGV0IHNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKTtcbiAgICBpZihzY3JpcHRzKXtcbiAgICAgIGxldCBpPXNjcmlwdHMubGVuZ3RoLFxuICAgICAgICAgIGNmZyA9IC8oWVxcLlJlcG9ydGFsXFwuSGl0TGlzdCwpXFxzKC4qPylcXCk7L2dpO1xuICAgICAgd2hpbGUoaS0tKXtcbiAgICAgICAgbGV0IHNjcmlwdCA9IHNjcmlwdHNbaV0udGV4dDtcbiAgICAgICAgaWYoc2NyaXB0LmluZGV4T2YoJ1kuUmVwb3J0YWwuSGl0TGlzdCwnKT4tMSl7XG4gICAgICAgICAgbGV0IGV4ZWMgPSBjZmcuZXhlYyhzY3JpcHQpO1xuICAgICAgICAgIHJldHVybiAoZXhlYyE9bnVsbCAmJiBleGVjWzJdKT8gSlNPTi5wYXJzZShleGVjWzJdKTogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hpdGxpc3QgY29uZmlnIGlzIG5vdCBwcmVzZW50IG9uIHRoZSBwYWdlJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdFNldHVwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LXNldHVwLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDA3LjA5LjIwMTYuXG4gKi9cblxuaW1wb3J0IEhpdGxpc3REYXRhc291cmNlIGZyb20gXCIuL2hpdGxpc3QtZGF0YXNvdXJjZVwiO1xuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tIFwici1yZXBvcnRhbC1iYXNlXCI7XG5cbndpbmRvdy5SZXBvcnRhbCA9IHdpbmRvdy5SZXBvcnRhbCB8fCB7fTtcblJlcG9ydGFsQmFzZS5taXhpbih3aW5kb3cuUmVwb3J0YWwse1xuICBIaXRsaXN0RGF0YXNvdXJjZVxufSk7XG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0RGF0YXNvdXJjZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL21haW4uanMiLCIvL0BmbG93XHJcbmltcG9ydCBIaXRsaXN0RFMgZnJvbSBcInItaGl0bGlzdC1kYXRhc291cmNlXCI7XHJcbmltcG9ydCB1bmlvbkJ5IGZyb20gXCJsb2Rhc2gvdW5pb25CeVwiO1xyXG5cclxudHlwZSBPcHRpb25zID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBuYW1lIG9mIGEgZ2xvYmFsIGNvbmZpZyB2YXJpYWJsZSBwYXNzZWRcclxuICAgICovXHJcbiAgICBjb25maWc6IHN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGRpc3BsYXkgdGh1bWJzIGFzIGltYWdlIHBsYWNlaG9sZGVycyBpbnN0ZWFkIG9mIG1lZGlhIGljb25zXHJcbiAgICAqL1xyXG4gICAgdGh1bWJzUGxhY2Vob2xkZXI6IGJvb2xlYW4sXHJcbiAgICBjb21wb25lbnQ6IGFueVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRFNBYnN0cmFjdGlvbihvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgICBjb25zdCBEUyA9IG5ldyBIaXRsaXN0RFMoKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IG9wdGlvbnMuY29tcG9uZW50O1xyXG4gICAgbGV0IGNvbmZpZztcclxuXHJcbiAgICBzZXR1cERhdGFMaXN0ZW5lcihvcHRpb25zLmNvbmZpZyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXVuY2hlcyBsaXN0ZW5lciBmb3IgYFkuR2xvYmFsLnJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlYCBldmVudCB3aXRoaW4gWVVJIHdoaWNoIGlzIHRyaWdnZXJlZCBldmVyeSB0aW1lIHRoZSBmaWx0ZXIgcGFuZWwgdXBkYXRlcyBvciBvbiBpbml0aWFsIGxvYWRcclxuICAgICAqICovXHJcbiAgICBmdW5jdGlvbiBzZXR1cERhdGFMaXN0ZW5lcihjb25maWdOYW1lKSB7XHJcbiAgICAgICAgaWYgKFkgJiYgWS5HbG9iYWwpIHtcclxuICAgICAgICAgICAgWS5HbG9iYWwub24oXCJyZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZVwiLCBmaWx0ZXJJbmZvID0+IHtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpc2VDb25maWcoY29uZmlnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoRFMgJiYgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRFMubW9kaWZpZXIgPSBmaWx0ZXJJbmZvOyAvLyBmaWx0ZXIgaW5mb3JtYXRpb24gYXMgYSBtb2RpZmllciBmb3IgZGF0YSBmZXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIERTLmluaXRpYWxEYXRhTG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lVSSBpcyBub3QgZGVmaW5lZCBvciBhY2Nlc3NpYmxlLCBjYW5ub3Qgc2V0IHVwIGEgXCJyZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZVwiIGxpc3RlbmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpc2VDb25maWcoY29uZmlnTmFtZSkge1xyXG4gICAgICAgIGlmICghY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmICghd2luZG93W2NvbmZpZ05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbmZpZyBpcyBub3QgcGFzc2VkIGZyb20gYmFja2VuZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uZmlnID0gd2luZG93W2NvbmZpZ05hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhLCBtb2RlID0gJ3JlcGxhY2UnKSB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGRhdGEubWFwKChkYXRhUm93LCByb3dJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyc2VkUm93ID0ge307XHJcbiAgICAgICAgICAgIFsnaWQnLCAndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nLCAndGFncyddLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbklEID0gY29uZmlnW2tleV07XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRSb3dba2V5XSA9IHByZXBhcmVEYXRhKGRhdGFSb3dbY29sdW1uSURdLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgaW1hZ2UgLSB3ZSBtaWdodCB3YW50IHRvIHVzZSBhIHBsYWNlaG9sZGVyIGFzIHRoZSB0aHVtYiwgYW5kIGxvYWQgdGhlIGZ1bGwgaW1hZ2UgaW4gYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWRSb3cuaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudGh1bWJzUGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFJvdy5wbGFjZWhvbGRlciA9IHBhcnNlZFJvdy5pbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRSb3cuaW1hZ2UgPSBwYXJzZWRSb3cuaW1hZ2UucmVwbGFjZSgvX3RodW1iL2dpLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIG1lZGlhdHlwZSBvciBhIHBsYWNlaG9sZGVyIGljb25cclxuICAgICAgICAgICAgICAgIGlmIChbJ3ZpZGVvJywgJ2F1ZGlvJywgJ2ltYWdlJ10uaW5kZXhPZihrZXkpID4gLTEgJiYgY29uZmlnW2tleV0gJiYgcGFyc2VkUm93W2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRSb3cubWVkaWF0eXBlID0ga2V5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IGlkIGZvciBrZXlzXHJcbiAgICAgICAgICAgIHBhcnNlZFJvdy5pZCA9IGRhdGFSb3cucmVzcG9uc2VpZCA/IGRhdGFSb3cucmVzcG9uc2VpZCA6IHJvd0luZGV4O1xyXG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgbGluayBwYXNzZWQgYXMgYHNsaW5rYCBwcm9wZXJ0eSBpbiBkYXRhXHJcbiAgICAgICAgICAgIGlmIChkYXRhUm93LnNsaW5rKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbCA9IGRhdGFSb3cuc2xpbms7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRSb3cubGluayA9ICgvaHJlZj0nKC4rPyknL2dpKS5leGVjKGwpLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRSb3c7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIHN0YXRlIHdpdGggdGhlIG5ldyBzZXQgb2YgZGF0YSBvciBhIG1lcmdlZCBkYXRhXHJcbiAgICAgICAgaWYgKG1vZGUgPT09ICdyZXBsYWNlJykge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IG5ld0RhdGEsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnYXBwZW5kJykge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogWy4uLnByZXZTdGF0ZS5pdGVtcywgLi4ubmV3RGF0YV0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ21lcmdlJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtb2RlKTtcclxuICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHVuaW9uQnkobmV3RGF0YSwgcHJldlN0YXRlLml0ZW1zLCAnaWQnKSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0YXRgNC10L0g0LfQvdCw0LXRgiDRh9GC0L4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1hc3NhZ2UgZGF0YSB0byBmaXQgdGhlIHR5cGUgd2UgZXhwZWN0IHRvIHJlY2VpdmUgaW4gcmVhY3Qgdmlld1xyXG4gICAgICogKi9cclxuICAgIGZ1bmN0aW9uIHByZXBhcmVEYXRhKGRhdGEsIHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKC9zcmM9JyguKz8pJy9naSkuZXhlYyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0ICE9PSBudWxsICYmIHJlc3VsdFsxXSA/IHJlc3VsdFsxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOlxyXG4gICAgICAgICAgICBjYXNlICd0aXRsZSc6XHJcbiAgICAgICAgICAgIGNhc2UgJ3ZpZGVvJzpcclxuICAgICAgICAgICAgY2FzZSAnYXVkaW8nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEoZGF0YS5pbmRleE9mKCctJykgPiAtMSAmJiBkYXRhLnRyaW0oKS5sZW5ndGggPT09IDEpID8gZGF0YS50cmltKCkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RhZ3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEgJiYgKGRhdGEuaW5kZXhPZignLCcpID4gLTEgPyBkYXRhLnNwbGl0KCcsJykgOiBkYXRhLmluZGV4T2YoJy0nKSA+IC0xICYmIGRhdGEudHJpbSgpLmxlbmd0aCA9PT0gMSA/IHVuZGVmaW5lZCA6IGRhdGEudHJpbSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGF0YUxvYWRpbmdFcnJvcihlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczogW11cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBEUy5sb2FkTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgRFMubmV4dFBhZ2UoKVxyXG4gICAgICAgICAgICAudGhlbihwcm9jZXNzRGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5sb2FkUHJldmlvdXNQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIERTLnByZXZpb3VzUGFnZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmxvYWRNb3JlID0gKCkgPT4ge1xyXG4gICAgICAgIERTLm5leHRQYWdlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcHJvY2Vzc0RhdGEocmVzcG9uc2UsICdhcHBlbmQnKSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5pbml0aWFsTG9hZCA9ICgpID0+IHtcclxuICAgICAgICBEUy5pbml0aWFsRGF0YUxvYWQoKVxyXG4gICAgICAgICAgICAudGhlbihwcm9jZXNzRGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5nZXRQYWdlSW5mbyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBoYXNQYWdlSW5mbyA9IERTLnBhZ2VJbmZvICYmIERTLnNvcnRpbmdQYWdpbmdWYWx1ZXMgJiYgRFMuc29ydGluZ1BhZ2luZ1ZhbHVlcy50b3RhbEhpdHM7XHJcbiAgICAgICAgcmV0dXJuIGhhc1BhZ2VJbmZvID8gYCR7RFMucGFnZUluZm99IG9mICR7RFMuc29ydGluZ1BhZ2luZ1ZhbHVlcy50b3RhbEhpdHN9YCA6ICcnO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5jb25maWcgPSAoKSA9PiBjb25maWc7XHJcblxyXG4gICAgcmV0dXJuIERTXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRFNBYnN0cmFjdGlvbi5qcyIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlR3JpZFRpbGVTdHlsZSBmcm9tICcuL0ltYWdlR3JpZFRpbGUuY3NzJztcbmltcG9ydCBJbWcgZnJvbSAnUHJvcG9ydGlvbmFsSW1hZ2UnO1xuXG5jb25zdCBNRURJQV9UWVBFUyA9IFsnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nXTtcblxuY2xhc3MgSW1hZ2VHcmlkVGlsZSBleHRlbmRzIFB1cmVDb21wb25lbnR7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgdGlsZSBmb3IgaW1hZ2UgbGlzdFxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmltYWdlIC0gaW1hZ2UgdXJsXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlciAtIGEgcGxhY2Vob2xkZXIgaW1hZ2VcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyU2l6aW5nIC0gU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlci4gQnkgZGVmYXVsdCBpdCdzIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNyY2AgaW1hZ2UsIGJ1dCBzZXQgdG8gYGluaXRpYWxgIG9yIG90aGVyIHZhbGlkIGBiYWNrZ3JvdW5kLXNpemVgIHZhbHVlIHRvIG92ZXJyaWRlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMubWVkaWF0eXBlIC0gYSBkZWZhdWx0IG1lZGlhIGljb24gaW5zdGVhZCBvZiB0aGUgcGxhY2Vob2xkZXIgaW1hZ2U6IG9uZSBvZiBgaW1hZ2VgLGBhdWRpb2AsYHZpZGVvYFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmljb25Db2xvcj1cIiNjY2NjY2NcIl0gLSBkZWZhdWx0IHBsYWNlaG9sZGVyIG1lZGlhIGljb24gY29sb3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5pY29uU2l6ZT00OF0gLSBkZWZhdWx0IHBsYWNlaG9sZGVyIG1lZGlhIGljb24gc2l6ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmFzcGVjdD1cIjE2OjlcIl0gLSBhc3BlY3QgcmF0aW8gb2YgdGhlIGltYWdlIHRvIGJlIGluIHRoZSB0aWxlXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy50aXRsZSAtIHRpdGxlIG9mIHRoZSB2aWRlb1xuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuZGVzY3JpcHRpb24gLSBkZXNjcmlwdGlvbiBvZiB0aGUgdmlkZW9cbiAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy5hY3Rpb25JY29uIC0gaWNvbiB0byBkaXNwbGF5IGFzIHRoZSBhY3Rpb24gaWNvbi4gSXQgYWxzbyBoYXMgdG8gaGF2ZSBhIGNhbGxiYWNrIGF0dGFjaGVkIHRvIGl0IHdoZW4gcGFzc2VkLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblNlbGVjdCAtIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGxpbmsgaXMgY2xpY2tlZFxuICAgKiAqL1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYWN0aW9uQnV0dG9uID0gbnVsbDtcbiAgICBjb25zdCB7YWN0aW9uSWNvbixvblNlbGVjdCxhc3BlY3QsdGl0bGUscGxhY2Vob2xkZXJTaXppbmcsaW1hZ2UsZGVzY3JpcHRpb259PXRoaXMucHJvcHM7XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aW9uSWNvbikge1xuICAgICAgYWN0aW9uQnV0dG9uID0gPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1lZGl0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tYWN0aW9uLWljb25cIj57YWN0aW9uSWNvbn08L2Rpdj5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWNvdmVyXCIgb25DbGljaz17b25TZWxlY3R9PlxuICAgICAgICAgIDxJbWdcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cbiAgICAgICAgICAgIHNpemluZz1cImNvdmVyXCJcbiAgICAgICAgICAgIHByZWxvYWQ9e3RydWV9XG4gICAgICAgICAgICBmYWRlPXt0cnVlfVxuICAgICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLl9jb21wdXRlVGlsZVR5cGUoKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyU2l6aW5nPXtwbGFjZWhvbGRlclNpemluZ31cbiAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tbWV0YVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS10aXRsZSBlbGxpcHNpc1wiIG9uQ2xpY2s9e29uU2VsZWN0fT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWRlc2NyaXB0aW9uIGVsbGlwc2lzXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHthY3Rpb25CdXR0b259XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2NvbXB1dGVUaWxlVHlwZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qge3BsYWNlaG9sZGVyLG1lZGlhdHlwZSxpY29uU2l6ZSxpY29uQ29sb3J9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICghcGxhY2Vob2xkZXIgJiYgbWVkaWF0eXBlKSB7XG4gICAgICAgIGlmIChNRURJQV9UWVBFUy5pbmRleE9mKG1lZGlhdHlwZSkgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgdHlwZSBcIiR7bWVkaWF0eXBlfVwiIGlzIHNwZWNpZmllZGApXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGljb24gPSBJbWFnZUdyaWRUaWxlLmljb25TZXJ2ZXIobWVkaWF0eXBlLCBpY29uU2l6ZSwgaWNvbkNvbG9yKTtcbiAgICAgICAgcmV0dXJuICdkYXRhOmltYWdlL3N2Zyt4bWwsJyArIGVzY2FwZShpY29uKTtcbiAgICAgIH0gZWxzZSBpZighIXBsYWNlaG9sZGVyKXtcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZXNjYXBlKEltYWdlR3JpZFRpbGUuaWNvblNlcnZlcigndW5rbm93bicsIGljb25TaXplLCBpY29uQ29sb3IpKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaWNvbiB3aXRoIGEgY29ycmVjdCBmaWxsIGNvbG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gaWNvbiBuYW1lIChvbmUgb2YgYGltYWdlYCwgYHZpZGVvYCwgYGF1ZGlvYClcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtzaXplPTI0XSAtIGljb24gc2l6ZSBpbiBwaXhlbHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtmaWxsPVwiI2NjY2NjY1wiXSAtIHZhbGlkIENTUyBjb2xvciBkZWNsYXJhdGlvblxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKiAqL1xuICBzdGF0aWMgaWNvblNlcnZlcihuYW1lLCBzaXplID0gNDgsIGZpbGwgPSBcIiNjY2NjY2NcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpY29ucyA9IHtcbiAgICAgICAgaW1hZ2U6IGA8cGF0aCBkPVwiTTIxIDE5VjVjMC0xLjEtLjktMi0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnpNOC41IDEzLjVsMi41IDMuMDFMMTQuNSAxMmw0LjUgNkg1bDMuNS00LjV6XCIvPmAsXG4gICAgICAgIGF1ZGlvOiBgPHBhdGggZD1cIk0xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnpcIi8+YCxcbiAgICAgICAgdmlkZW86IGA8cGF0aCBkPVwiTTE4IDRsMiA0aC0zbC0yLTRoLTJsMiA0aC0zbC0yLTRIOGwyIDRIN0w1IDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNGgtNHpcIi8+YCxcbiAgICAgICAgdW5rbm93bjogYDxwYXRoIGQ9XCJNMjEgNXY2LjU5bC0zLTMuMDEtNCA0LjAxLTQtNC00IDQtMy0zLjAxVjVjMC0xLjEuOS0yIDItMmgxNGMxLjEgMCAyIC45IDIgMnptLTMgNi40MmwzIDMuMDFWMTljMCAxLjEtLjkgMi0yIDJINWMtMS4xIDAtMi0uOS0yLTJ2LTYuNThsMyAyLjk5IDQtNCA0IDQgNC0zLjk5elwiLz5gLFxuICAgICAgfTtcbiAgICAgIGlmICghaWNvbnNbbmFtZV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpY29uIFwiJHtuYW1lfVwiIGlzIG5vdCBvbiB0aGUgbGlzdGApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBgPHN2ZyBmaWxsPVwiJHtmaWxsfVwiIGhlaWdodD1cIiR7c2l6ZX1cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIke3NpemV9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiR7aWNvbnNbbmFtZV19PC9zdmc+YFxuICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG4gIH1cbn1cblxuSW1hZ2VHcmlkVGlsZS5wcm9wVHlwZXMgPSB7XG4gIGltYWdlICAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlciAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXJTaXppbmc6IFByb3BUeXBlcy5vbmVPZihbJ2NvbnRhaW4nLCAnY292ZXInLCAnaW5pdGlhbCddKSxcbiAgbWVkaWF0eXBlICAgICAgICA6IFByb3BUeXBlcy5vbmVPZihNRURJQV9UWVBFUyksXG4gIGljb25Db2xvciAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uU2l6ZSAgICAgICAgIDogUHJvcFR5cGVzLm51bWJlcixcbiAgYXNwZWN0ICAgICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlICAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvbiAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aW9uSWNvbiAgICAgICA6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdCAgICAgICAgIDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkltYWdlR3JpZFRpbGUuZGVmYXVsdFByb3BzID0ge1xuICBpY29uQ29sb3I6IFwiI2NjY2NjY1wiLFxuICBpY29uU2l6ZSA6IDQ4LFxuICBhc3BlY3QgICA6IFwiMTY6OVwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHcmlkVGlsZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlR3JpZFRpbGUvSW1hZ2VHcmlkVGlsZS5qcyIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlR3JpZFRpbGUgZnJvbSAnLi4vSW1hZ2VHcmlkVGlsZS9JbWFnZUdyaWRUaWxlJztcblxuXG4vKipcbiAqIGBJbWFnZUdyaWRgIGlzIGEgc3RhdGVsZXNzIFJlYWN0IGNvbXBvbmVudCB0aGF0IGFsbG93cyB0byBjb21wdXRlIGFuIGFycmF5IG9mIEltYWdlR3JpZFRpbGVzIGZyb20gYGl0ZW1zYCBwYXNzZWQgaW4gcHJvcHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtBcnJheX0gcHJvcHMuaXRlbXMgLSBhbiBhcnJheSBvZiBpdGVtcyBge2lkOk51bWJlcnxTdHJpbmcsIGltYWdlOlN0cmluZywgbWVkaWF0eXBlOj9TdHJpbmcsIHBsYWNlaG9sZGVyOj9TdHJpbmcsIHRpdGxlOlN0cmluZyxkZXNjcmlwdGlvbjpTdHJpbmd9YFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmFzcGVjdCAtIGFzcGVjdCByYXRpbyBmb3IgdGhlIEltYWdlR3JpZFRpbGUgaW1hZ2VcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBwcm9wcy5hY3Rpb25JY29uIC0gYWN0aW9uIGljb24gSlNYIHdpdGggYSBib3VuZCBoYW5kbGVyXG4gKiBAcGFyYW0gez9TdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyU2l6aW5nIC0gU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlci4gQnkgZGVmYXVsdCBpdCdzIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNyY2AgaW1hZ2UsIGJ1dCBzZXQgdG8gYGluaXRpYWxgIG9yIG90aGVyIHZhbGlkIGBiYWNrZ3JvdW5kLXNpemVgIHZhbHVlIHRvIG92ZXJyaWRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMub25TZWxlY3QgLSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkIG9uXG4gKiBAcGFyYW0ge051bWJlcn0gcHJvcHMuZHVtbXlJdGVtcyAtIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhbiBpdGVtIGlzIGNsaWNrZWQgb25cbiAqICovXG5jbGFzcyBJbWFnZUdyaWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICBpdGVtQ2xpY2tIYW5kbGVyID0gKGl0ZW0pID0+IChldmVudCkgPT4gdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2l0ZW1zLCBkdW1teUl0ZW1zLCBhc3BlY3QsIHBsYWNlaG9sZGVyU2l6aW5nLCBhY3Rpb25JY29ufSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxJbWFnZUdyaWRUaWxlXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZC50b1N0cmluZygpfVxuICAgICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cbiAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgIG1lZGlhdHlwZT17aXRlbS5tZWRpYXR5cGV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpdGVtLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlclNpemluZz17aXRlbS5pbWFnZT9wbGFjZWhvbGRlclNpemluZzonaW5pdGlhbCd9XG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgYWN0aW9uSWNvbj17YWN0aW9uSWNvbn1cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaXRlbUNsaWNrSGFuZGxlcihpdGVtKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgICB7ZHVtbXlJdGVtcyAmJiB0aGlzLnJlbmRlckR1bW15SXRlbXMoZHVtbXlJdGVtcyl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuXG4gIHJlbmRlckR1bW15SXRlbXMoY291bnQpIHtcbiAgICBjb25zdCBkdW1teUl0ZW1zID0gW107XG4gICAgd2hpbGUgKGNvdW50LS0pIHtcbiAgICAgIGR1bW15SXRlbXMucHVzaCg8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGVcIiBrZXk9e2BkdW1teSR7Y291bnR9YH0vPilcbiAgICB9XG4gICAgcmV0dXJuIGR1bW15SXRlbXNcbiAgfVxufVxuXG5JbWFnZUdyaWQucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICBhc3BlY3Q6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGlvbkljb246IFByb3BUeXBlcy5lbGVtZW50LFxuICBwbGFjZWhvbGRlclNpemluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGR1bW15SXRlbXM6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cbkltYWdlR3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGR1bW15SXRlbXM6IDEyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUdyaWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VHcmlkL0ltYWdlR3JpZC5qcyIsIi8vQGZsb3dcclxuaW1wb3J0IHR5cGUge05hdkJ1dHRvblByb3BzfSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1ESWNvbiBmcm9tICdNREljb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2QnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxOYXZCdXR0b25Qcm9wcywgYW55PiB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpY29uLCAuLi53cmFwcGVyIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0tbmF2LWJ1dHRvblwiIHsuLi53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxNREljb24gaWNvbj17aWNvbn0gLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaW5nbGVWaWV3L05hdkJ1dHRvbi5qcyIsIi8vQGZsb3dcbmltcG9ydCB0eXBlIHtQcm9wcywgTmF2QmFyUHJvcHMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tICcuL05hdkJ1dHRvbidcbmltcG9ydCB7IGljX2Fycm93X2JhY2ssIGljX2Fycm93X2ZvcndhcmQsIGljX3ZpZXdfbW9kdWxlIH0gZnJvbSAnLi4vaWNvbnMnO1xuXG5jb25zdCBOYXZCYXIgPSBmdW5jdGlvbiAocHJvcHM6TmF2QmFyUHJvcHMpIHtcbiAgY29uc3QgeyBsb2FkUHJldmlvdXNJdGVtLCByZXR1cm5Ub0dyaWRBY3Rpb24sIGxvYWROZXh0SXRlbSwgZGlzYWJsZVNpbmdsZVZpZXdQcmV2LCBkaXNhYmxlU2luZ2xlVmlld05leHQgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0taGVhZGVyXCI+XG4gICAgICA8TmF2QnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlU2luZ2xlVmlld1ByZXZ9IHRpdGxlPVwiUHJldmlvdXMgaXRlbVwiIG9uQ2xpY2s9e2xvYWRQcmV2aW91c0l0ZW19IGljb249e2ljX2Fycm93X2JhY2t9IC8+XG4gICAgICA8TmF2QnV0dG9uIHRpdGxlPVwiUmV0dXJuIHRvIHRoZSBsaXN0XCIgb25DbGljaz17cmV0dXJuVG9HcmlkQWN0aW9ufSBpY29uPXtpY192aWV3X21vZHVsZX0gLz5cbiAgICAgIDxOYXZCdXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVTaW5nbGVWaWV3TmV4dH0gdGl0bGU9XCJOZXh0IEl0ZW1cIiBvbkNsaWNrPXtsb2FkTmV4dEl0ZW19IGljb249e2ljX2Fycm93X2ZvcndhcmR9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlVmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIHZvaWQ+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjaGlsZHJlbiwgLi4ubmF2QmFyUHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3XCI+XG4gICAgICAgIDxOYXZCYXIgey4uLm5hdkJhclByb3BzfS8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvU2luZ2xlVmlldy5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGljX3N0YXIgPSA8cGF0aCBkPVwiTTEyIDE3LjI3TDE4LjE4IDIxbC0xLjY0LTcuMDNMMjIgOS4yNGwtNy4xOS0uNjFMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxelwiLz47XG5leHBvcnQgY29uc3QgaWNfc3Rhcl9ib3JkZXIgPSA8cGF0aCBkPVwiTTIyIDkuMjRsLTcuMTktLjYyTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMSAxMiAxNy4yNyAxOC4xOCAyMWwtMS42My03LjAzTDIyIDkuMjR6TTEyIDE1LjRsLTMuNzYgMi4yNyAxLTQuMjgtMy4zMi0yLjg4IDQuMzgtLjM4TDEyIDYuMWwxLjcxIDQuMDQgNC4zOC4zOC0zLjMyIDIuODggMSA0LjI4TDEyIDE1LjR6XCIvPjtcbmV4cG9ydCBjb25zdCBpY19hcnJvd19iYWNrID0gPHBhdGggZD1cIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwdi0yelwiLz47XG5leHBvcnQgY29uc3QgaWNfYXJyb3dfZm9yd2FyZCA9IDxwYXRoIGQ9XCJNMTIgNGwtMS40MSAxLjQxTDE2LjE3IDExSDR2MmgxMi4xN2wtNS41OCA1LjU5TDEyIDIwbDgtOHpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX3ZpZXdfbW9kdWxlID0gPHBhdGggZD1cIk00IDExaDVWNUg0djZ6bTAgN2g1di02SDR2NnptNiAwaDV2LTZoLTV2NnptNiAwaDV2LTZoLTV2NnptLTYtN2g1VjVoLTV2NnptNi02djZoNVY1aC01elwiLz47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaWNvbnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ltYWdlR3JpZFRpbGUvSW1hZ2VHcmlkVGlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9