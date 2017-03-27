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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Created by IvanP on 11.01.2017.
	                                                                                                                                                                                                                                                                               */
	
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(81);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _main = __webpack_require__(80);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _ReactVideo = __webpack_require__(76);
	
	var _ReactVideo2 = _interopRequireDefault(_ReactVideo);
	
	var _rReportalBase = __webpack_require__(21);
	
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(30)('wks'),
	    uid = __webpack_require__(33),
	    _Symbol = __webpack_require__(2).Symbol,
	    USE_SYMBOL = typeof _Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(12);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(13),
	    createDesc = __webpack_require__(29);
	module.exports = __webpack_require__(7) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(14);
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

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(4),
	    IE8_DOM_DEFINE = __webpack_require__(42),
	    toPrimitive = __webpack_require__(63),
	    dP = Object.defineProperty;
	
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

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(12),
	    document = __webpack_require__(2).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(13).f,
	    has = __webpack_require__(11),
	    TAG = __webpack_require__(1)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(30)('keys'),
	    uid = __webpack_require__(33);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(44),
	    defined = __webpack_require__(15);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

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
	        try {
	          var xhr = new XMLHttpRequest();
	          xhr.open('GET', URL, true);
	          xhr.onload = function () {
	            xhr.status == 200 ? resolve(xhr.responseText) : reject({ code: xhr.status, message: xhr.statusText });
	          };
	          xhr.onerror = function (error) {
	            reject(error);
	          };
	          xhr.send();
	        } catch (error) {
	          reject(error);
	        }
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

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(9),
	    TAG = __webpack_require__(1)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
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

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(2),
	    core = __webpack_require__(6),
	    ctx = __webpack_require__(10),
	    hide = __webpack_require__(5),
	    PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      IS_WRAP = type & $export.W,
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      expProto = exports[PROTOTYPE],
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
	      key,
	      own,
	      out;
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

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(2).document && document.documentElement;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(28),
	    $export = __webpack_require__(24),
	    redefine = __webpack_require__(57),
	    hide = __webpack_require__(5),
	    has = __webpack_require__(11),
	    Iterators = __webpack_require__(8),
	    $iterCreate = __webpack_require__(47),
	    setToStringTag = __webpack_require__(17),
	    getPrototypeOf = __webpack_require__(53),
	    ITERATOR = __webpack_require__(1)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	
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
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
	      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
	      methods,
	      key,
	      IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype) {
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

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = true;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(2),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(10),
	    invoke = __webpack_require__(43),
	    html = __webpack_require__(26),
	    cel = __webpack_require__(16),
	    global = __webpack_require__(2),
	    process = global.process,
	    setTask = global.setImmediate,
	    clearTask = global.clearImmediate,
	    MessageChannel = global.MessageChannel,
	    counter = 0,
	    queue = {},
	    ONREADYSTATECHANGE = 'onreadystatechange',
	    defer,
	    channel,
	    port;
	var run = function run() {
	  var id = +this;
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
	    var args = [],
	        i = 1;
	    while (arguments.length > i) {
	      args.push(arguments[i++]);
	    }queue[++counter] = function () {
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

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(19),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MDIcon = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by IvanP on 23.01.2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	/**
	 * Renders an SVG material icon imported from an icon-set and passed via props
	 * @param {Object} props
	 * @param {Object} props.icon - imported icon definition (jsx)
	 * @param {Object} props.children - imported icon definition (jsx) if you prefer using children and a closing tag in JSX rather than an icon attribute
	 * @param {Number} [props.size=24] - icon width/height (which equals height since all MD icons have square viewbox). Any of `18|24|36|48`
	 * @param {String} [props.fill='rgba(0,0,0,.85)'] - icon fill - any valid css color, fills the whole icon
	 * */
	var MDIcon = exports.MDIcon = function (_PureComponent) {
	  _inherits(MDIcon, _PureComponent);
	
	  function MDIcon() {
	    _classCallCheck(this, MDIcon);
	
	    return _possibleConstructorReturn(this, (MDIcon.__proto__ || Object.getPrototypeOf(MDIcon)).apply(this, arguments));
	  }
	
	  _createClass(MDIcon, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props,
	          fill = _props.fill,
	          size = _props.size,
	          icon = _props.icon,
	          children = _props.children;
	
	      return _react2.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: fill, width: size, height: size, viewBox: "0 0 24 24", children: icon || children });
	    }
	  }]);
	
	  return MDIcon;
	}(_react.PureComponent);
	
	MDIcon.defaultProps = {
	  size: 24,
	  fill: 'rgba(0,0,0,.85)'
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MDIcon = __webpack_require__(34);
	
	exports.default = _MDIcon.MDIcon; /**
	                                   * Created by IvanP on 11.01.2017.
	                                   */

	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	!function (e, t) {
	  if ("object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module))) module.exports = t(__webpack_require__(3));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
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
	        n(this, t);var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));return o._imageOnload = o._imageOnload.bind(o), o._imageOnerror = o._imageOnerror.bind(o), o.state = { src: "", placeholderHidden: !o.props.placeholder, sizing: o.props.sizing ? o.props.sizing : null, position: o.props.position ? o.props.position : "center", proportion: 0, loaded: !1, loading: !1, error: !1 }, o;
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
	              m = c.alt;return u.default.createElement("div", { className: "ProportionalImage", style: { width: t, height: o, paddingTop: r } }, u.default.createElement("div", { className: "sizedImgDiv", role: "img", style: { backgroundImage: "url(" + n + ")", backgroundSize: i, backgroundPosition: a, backgroundRepeat: i && "no-repeat", display: i ? "block" : "none" } }), u.default.createElement("img", { src: n, alt: m, onLoad: this._imageOnload, onError: this._imageOnerror, style: { display: i ? "none" : "block" } }), u.default.createElement("div", { style: { backgroundImage: "url(" + (!!g && g) + ")", backgroundSize: h ? h : i, backgroundPosition: a, backgroundRepeat: i && "no-repeat" }, className: "imagePlaceholder " + (p && "hidden") + " " + (d && f && !s && l && "faded-out") }));
	        } }, { key: "_imageOnload", value: function value() {
	          this.setState({ loading: !1, loaded: !0, error: !1 });
	        } }, { key: "_imageOnerror", value: function value() {
	          this.setState(s({}, this._reset(), { error: !0 }));
	        } }, { key: "_reset", value: function value() {
	          return { src: "", loading: !1, loaded: !1, error: !1 };
	        } }, { key: "_load", value: function value() {
	          var e = this._reset();if (!this.props.preventLoad) {
	            var t = this.props.src;e.src != t && (e = s({}, e, { src: !!t && t, loading: !!t }));
	          }this.setState(e);
	        } }]), t;
	    }(u.default.Component);t.default = c;
	  }, function (t, o) {
	    t.exports = e;
	  }]);
	});
	//# sourceMappingURL=ProportionalImage.bundle.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)(module)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(66);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(67);
	module.exports = __webpack_require__(6).Promise;

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function () {/* empty */};

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(20),
	    toLength = __webpack_require__(32),
	    toIndex = __webpack_require__(61);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this),
	        length = toLength(O.length),
	        index = toIndex(fromIndex, length),
	        value;
	    // Array#includes uses SameValueZero equality algorithm
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	      // Array#toIndex ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if (IS_INCLUDES || index in O) {
	        if (O[index] === el) return IS_INCLUDES || index || 0;
	      }
	    }return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(10),
	    call = __webpack_require__(46),
	    isArrayIter = __webpack_require__(45),
	    anObject = __webpack_require__(4),
	    toLength = __webpack_require__(32),
	    getIterFn = __webpack_require__(64),
	    BREAK = {},
	    RETURN = {};
	var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () {
	    return iterable;
	  } : getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator,
	      result;
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

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(7) && !__webpack_require__(25)(function () {
	  return Object.defineProperty(__webpack_require__(16)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 43 */
/***/ function(module, exports) {

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

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(9);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(8),
	    ITERATOR = __webpack_require__(1)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(51),
	    descriptor = __webpack_require__(29),
	    setToStringTag = __webpack_require__(17),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(5)(IteratorPrototype, __webpack_require__(1)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ITERATOR = __webpack_require__(1)('iterator'),
	    SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () {
	    SAFE_CLOSING = true;
	  };
	  Array.from(riter, function () {
	    throw 2;
	  });
	} catch (e) {/* empty */}
	
	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7],
	        iter = arr[ITERATOR]();
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

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(2),
	    macrotask = __webpack_require__(31).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(9)(process) == 'process';
	
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
	    var toggle = true,
	        node = document.createTextNode('');
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

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(4),
	    dPs = __webpack_require__(52),
	    enumBugKeys = __webpack_require__(23),
	    IE_PROTO = __webpack_require__(18)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(16)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(26).appendChild(iframe);
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

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(13),
	    anObject = __webpack_require__(4),
	    getKeys = __webpack_require__(55);
	
	module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties),
	      length = keys.length,
	      i = 0,
	      P;
	  while (length > i) {
	    dP.f(O, P = keys[i++], Properties[P]);
	  }return O;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(11),
	    toObject = __webpack_require__(62),
	    IE_PROTO = __webpack_require__(18)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(11),
	    toIObject = __webpack_require__(20),
	    arrayIndexOf = __webpack_require__(40)(false),
	    IE_PROTO = __webpack_require__(18)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object),
	      i = 0,
	      result = [],
	      key;
	  for (key in O) {
	    if (key != IE_PROTO) has(O, key) && result.push(key);
	  } // Don't enum bug & hidden keys
	  while (names.length > i) {
	    if (has(O, key = names[i++])) {
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	  }return result;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(54),
	    enumBugKeys = __webpack_require__(23);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var hide = __webpack_require__(5);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];else hide(target, key, src[key]);
	  }return target;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(5);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(2),
	    core = __webpack_require__(6),
	    dP = __webpack_require__(13),
	    DESCRIPTORS = __webpack_require__(7),
	    SPECIES = __webpack_require__(1)('species');
	
	module.exports = function (KEY) {
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(4),
	    aFunction = __webpack_require__(14),
	    SPECIES = __webpack_require__(1)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(19),
	    defined = __webpack_require__(15);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(19),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(15);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(22),
	    ITERATOR = __webpack_require__(1)('iterator'),
	    Iterators = __webpack_require__(8);
	module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(38),
	    step = __webpack_require__(49),
	    Iterators = __webpack_require__(8),
	    toIObject = __webpack_require__(20);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(27)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
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

/***/ },
/* 66 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(28),
	    global = __webpack_require__(2),
	    ctx = __webpack_require__(10),
	    classof = __webpack_require__(22),
	    $export = __webpack_require__(24),
	    isObject = __webpack_require__(12),
	    aFunction = __webpack_require__(14),
	    anInstance = __webpack_require__(39),
	    forOf = __webpack_require__(41),
	    speciesConstructor = __webpack_require__(59),
	    task = __webpack_require__(31).set,
	    microtask = __webpack_require__(50)(),
	    PROMISE = 'Promise',
	    TypeError = global.TypeError,
	    process = global.process,
	    $Promise = global[PROMISE],
	    process = global.process,
	    isNode = classof(process) == 'process',
	    empty = function empty() {/* empty */},
	    Internal,
	    GenericPromiseCapability,
	    Wrapper;
	
	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1),
	        FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) {/* empty */}
	}();
	
	// helpers
	var sameConstructor = function sameConstructor(a, b) {
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function isThenable(it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function newPromiseCapability(C) {
	  return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};
	var perform = function perform(exec) {
	  try {
	    exec();
	  } catch (e) {
	    return { error: e };
	  }
	};
	var notify = function notify(promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v,
	        ok = promise._s == 1,
	        i = 0;
	    var run = function run(reaction) {
	      var handler = ok ? reaction.ok : reaction.fail,
	          resolve = reaction.resolve,
	          reject = reaction.reject,
	          domain = reaction.domain,
	          result,
	          then;
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
	    var value = promise._v,
	        abrupt,
	        handler,
	        console;
	    if (isUnhandled(promise)) {
	      abrupt = perform(function () {
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
	    if (abrupt) throw abrupt.error;
	  });
	};
	var isUnhandled = function isUnhandled(promise) {
	  if (promise._h == 1) return false;
	  var chain = promise._a || promise._c,
	      i = 0,
	      reaction;
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
	  var promise = this,
	      then;
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
	  Internal = function Promise(executor) {
	    this._c = []; // <- awaiting reactions
	    this._a = undefined; // <- checked in isUnhandled reactions
	    this._s = 0; // <- state
	    this._d = false; // <- done
	    this._v = undefined; // <- value
	    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false; // <- notify
	  };
	  Internal.prototype = __webpack_require__(56)($Promise.prototype, {
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
	  PromiseCapability = function PromiseCapability() {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(17)($Promise, PROMISE);
	__webpack_require__(58)(PROMISE);
	Wrapper = __webpack_require__(6)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this),
	        $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    var capability = newPromiseCapability(this),
	        $$resolve = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(48)(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        resolve = capability.resolve,
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      var values = [],
	          index = 0,
	          remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++,
	            alreadyCalled = false;
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
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this,
	        capability = newPromiseCapability(C),
	        reject = capability.reject;
	    var abrupt = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (abrupt) reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(60)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(27)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(65);
	var global = __webpack_require__(2),
	    hide = __webpack_require__(5),
	    Iterators = __webpack_require__(8),
	    TO_STRING_TAG = __webpack_require__(1)('toStringTag');
	
	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _rReportalBase = __webpack_require__(21);
	
	var _rReportalBase2 = _interopRequireDefault(_rReportalBase);
	
	var _hitlistSetup = __webpack_require__(71);
	
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

/***/ },
/* 71 */
/***/ function(module, exports) {

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

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _hitlistDatasource = __webpack_require__(70);
	
	var _hitlistDatasource2 = _interopRequireDefault(_hitlistDatasource);
	
	var _rReportalBase = __webpack_require__(21);
	
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

/***/ },
/* 73 */
/***/ function(module, exports) {

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

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGridTile = __webpack_require__(79);
	
	var _ImageGridTile2 = _interopRequireDefault(_ImageGridTile);
	
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
	      var _props2 = this.props,
	          placeholder = _props2.placeholder,
	          mediatype = _props2.mediatype,
	          iconSize = _props2.iconSize,
	          iconColor = _props2.iconColor;
	
	      if (!placeholder && mediatype) {
	        if (MEDIA_TYPES.indexOf(mediatype) == -1) {
	          throw new Error('Unrecognized type "' + mediatype + '" is specified');
	        }
	        var icon = ImageGridTile.iconServer(mediatype, iconSize, iconColor);
	        return 'data:image/svg+xml,' + escape(icon);
	      } else {
	        return placeholder;
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
	
	      var icons = {
	        image: '<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>',
	        audio: '<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>',
	        video: '<path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>'
	      };
	      if (!icons[name]) {
	        throw new Error('icon "' + name + '" is not on the list');
	      }
	
	      return '<svg fill="' + fill + '" height="' + size + '" viewBox="0 0 24 24" width="' + size + '" xmlns="http://www.w3.org/2000/svg">' + icons[name] + '</svg>';
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

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGridTile = __webpack_require__(74);
	
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
	    _classCallCheck(this, ImageGrid);
	
	    return _possibleConstructorReturn(this, (ImageGrid.__proto__ || Object.getPrototypeOf(ImageGrid)).apply(this, arguments));
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
	          actionIcon = _props.actionIcon,
	          _onSelect = _props.onSelect;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'ImageGrid' },
	        Array.isArray(items) && items.length > 0 && items.map(function (item, index) {
	          return _react2.default.createElement(_ImageGridTile2.default, {
	            key: item.id.toString(),
	            aspect: aspect,
	            image: item.image,
	            mediatype: item.mediatype,
	            placeholder: item.placeholder,
	            placeholderSizing: placeholderSizing,
	            title: item.title,
	            description: item.description,
	            actionIcon: actionIcon,
	            onSelect: function onSelect() {
	              return _onSelect.call(_this2, item);
	            }
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

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGrid = __webpack_require__(75);
	
	var _ImageGrid2 = _interopRequireDefault(_ImageGrid);
	
	var _rHitlistDatasource = __webpack_require__(72);
	
	var _rHitlistDatasource2 = _interopRequireDefault(_rHitlistDatasource);
	
	var _SingleView = __webpack_require__(77);
	
	var _SingleView2 = _interopRequireDefault(_SingleView);
	
	var _unionBy = __webpack_require__(221);
	
	var _unionBy2 = _interopRequireDefault(_unionBy);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by IvanP on 11.01.2017.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var ReactVideo = function (_React$Component) {
	  _inherits(ReactVideo, _React$Component);
	
	  /**
	   * @param {Object} props
	   * @param {String} props.config - name of the config that maps question ids from data with the data types
	   * @param {Boolean} props.thumbsPlaceholder - display thumbs as image placeholders instead of media icons
	   *
	   * */
	  function ReactVideo(props) {
	    _classCallCheck(this, ReactVideo);
	
	    var _this = _possibleConstructorReturn(this, (ReactVideo.__proto__ || Object.getPrototypeOf(ReactVideo)).call(this, props));
	
	    _this.handleDataLoadingError = function () {
	      _this.setState({
	        error: true,
	        items: []
	      });
	    };
	
	    _this.loadNextPage = function () {
	      _this.DS.nextPage().then(function (response) {
	        return _this.processData(response);
	      }).catch(_this.handleDataLoadingError);
	    };
	
	    _this.loadPreviousPage = function () {
	      _this.DS.previousPage().then(function (response) {
	        return _this.processData(response);
	      }).catch(_this.handleDataLoadingError);
	    };
	
	    _this.loadMore = function () {
	      _this.DS.nextPage().then(function (response) {
	        return _this.processData(response, 'append');
	      }).catch(_this.handleDataLoadingError);
	    };
	
	    _this.onSelect = _this.onSelect.bind(_this);
	    _this.DS = new _rHitlistDatasource2.default();
	    _this.props.verbose && console.log(_this.DS);
	    _this.setupDataListener();
	    _this.state = {
	      items: null,
	      error: false,
	      singleView: {
	        link: ''
	      },
	      singleViewVisible: false
	    };
	    _this.returnToGrid = _this.returnToGrid.bind(_this);
	    return _this;
	  }
	
	  _createClass(ReactVideo, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          items = _state.items,
	          singleViewVisible = _state.singleViewVisible,
	          singleView = _state.singleView,
	          error = _state.error;
	
	      var render = null;
	      if (!error && Array.isArray(items) && items.length != 0) {
	        render = _react2.default.createElement(
	          'div',
	          { className: 'GridContainer ' + (!singleViewVisible ? 'GridView' : '') },
	          _react2.default.createElement(_SingleView2.default, {
	            link: singleView.link,
	            visible: singleViewVisible,
	            initialLoad: true,
	            returnToGridAction: this.returnToGrid,
	            headerText: 'Edit video "' + singleView.title + '"' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'ImageGridContainer', style: { display: !singleViewVisible ? 'block' : 'none' } },
	            _react2.default.createElement(_ImageGrid2.default, {
	              aspect: '16:9',
	              onSelect: this.onSelect,
	              items: items
	            }),
	            this.renderNavigation()
	          )
	        );
	      } else {
	        if (this.DS) {
	          render = _react2.default.createElement(
	            'div',
	            { className: 'GridContainer ImageGrid' },
	            this.dataLoadingMessage()
	          );
	        } else {
	          throw new Error('HitlistDatasource is not available');
	        }
	      }
	      return render;
	    }
	  }, {
	    key: 'dataLoadingMessage',
	    value: function dataLoadingMessage() {
	      var message = void 0;
	      var _state2 = this.state,
	          items = _state2.items,
	          error = _state2.error;
	
	      if (error) {
	        message = 'errorLoading';
	      } else if (Array.isArray(items) && items.length == 0) {
	        message = 'REPORT_SINGLEVIEW_NOTHINGFOUND';
	      } else {
	        message = 'loadingData';
	      }
	      return this.DS.i18n(message);
	    }
	  }, {
	    key: 'renderNavigation',
	    value: function renderNavigation() {
	      if (this.config) {
	        var pagination = this.config.pagination;
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
	    key: 'pagingNavigation',
	    value: function pagingNavigation() {
	      var pageInfo = '';
	      if (this.DS.pageInfo && this.DS.sortingPagingValues && this.DS.sortingPagingValues.totalHits) {
	        pageInfo = this.DS.pageInfo + ' of ' + this.DS.sortingPagingValues.totalHits;
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'buttonRow' },
	        _react2.default.createElement(
	          'span',
	          { rel: 'button',
	            className: 'materialButton accent',
	            onClick: this.loadPreviousPage,
	            disabled: this.DS.disablePrevButton
	          },
	          this.DS.i18n('REPORT_SINGLEVIEW_PREVIOUS')
	        ),
	        _react2.default.createElement(
	          'span',
	          { rel: 'button',
	            className: 'materialButton accent',
	            onClick: this.loadNextPage,
	            disabled: this.DS.disableNextButton
	          },
	          this.DS.i18n('REPORT_SINGLEVIEW_NEXT')
	        ),
	        _react2.default.createElement(
	          'span',
	          null,
	          pageInfo
	        )
	      );
	    }
	  }, {
	    key: 'continuousNavigation',
	    value: function continuousNavigation() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'buttonRow', style: { textAlign: 'center' } },
	        _react2.default.createElement(
	          'span',
	          { rel: 'button',
	            className: 'materialButton flat',
	            onClick: this.loadMore,
	            disabled: this.DS.disableNextButton
	          },
	          'Load more'
	        )
	      );
	    }
	
	    /**
	     * Launches listener for `Y.Global.reportcontroller:viewModeDataUpdate` event within YUI which is triggered every time the filter panel updates or on initial load
	     * */
	
	  }, {
	    key: 'setupDataListener',
	    value: function setupDataListener() {
	      var _this2 = this;
	
	      if (Y && Y.Global) {
	        Y.Global.on("reportcontroller:viewModeDataUpdate", function (filterInfo) {
	          _this2.initialiseConfig(_this2.props.config);
	          if (_this2.DS && _this2.config) {
	            _this2.DS.modifier = filterInfo; // filter information as a modifier for data fetch
	            _this2.DS.initialDataLoad().then(function (response) {
	              return _this2.processData(response);
	            }).catch(_this2.handleDataLoadingError);
	          }
	        });
	      } else {
	        throw new Error('YUI is not defined or accessible, cannot set up a "reportcontroller:viewModeDataUpdate" listener');
	      }
	    }
	  }, {
	    key: 'returnToGrid',
	    value: function returnToGrid() {
	      var _this3 = this;
	
	      console.log('will return to grid');
	      this.setState({ singleViewVisible: false });
	      this.DS.initialDataLoad().then(function (response) {
	        return _this3.processData(response, 'merge');
	      }).catch(this.handleDataLoadingError);
	    }
	  }, {
	    key: 'initialiseConfig',
	    value: function initialiseConfig(configName) {
	      if (!this.config) {
	        if (!window[configName]) {
	          throw new Error('config is not passed from backed');
	        }
	        this.config = window[configName];
	      }
	    }
	  }, {
	    key: 'processData',
	    value: function processData(data) {
	      var _this4 = this;
	
	      var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'replace';
	
	      var c = this.config,
	          config = {};
	      ['id', 'title', 'description', 'image', 'audio', 'video', 'tags'].forEach(function (item) {
	        return config[item] = [_this4.config[item]];
	      });
	      config = {
	        id: c.id,
	        title: c.title,
	        description: c.description,
	        image: c.image,
	        audio: c.audio,
	        video: c.video,
	        tags: c.tags
	      };
	      var newData = data.map(function (item, index) {
	        var parsedData = {};
	        for (var key in config) {
	          parsedData[key] = _this4.prepareData(item[config[key]], key);
	          // if image - we might want to use a placeholder as the thumb, and load the full image in background
	          if (key == 'image') {
	            if (_this4.props.thumbsPlaceholder) {
	              parsedData['placeholder'] = parsedData.image;
	            }
	            parsedData.image = parsedData.image.replace(/_thumb/gi, '');
	          }
	          // calculate mediatype or a placeholder icon
	          if (['video', 'audio', 'image'].indexOf(key) > -1 && config[key]) {
	            parsedData.mediatype = key;
	          }
	        }
	        // get id for keys
	        parsedData.id = item.responseid ? item.responseid : index;
	        // calculate link passed as `slink` property in data
	        if (item.slink) {
	          var l = item.slink;
	          parsedData.link = /href='(.+?)'/gi.exec(l)[1];
	        }
	        return parsedData;
	      });
	
	      //update state with the new set of data or a merged data
	      if (mode === 'replace') {
	        this.setState({
	          items: newData,
	          error: false
	        });
	      } else if (mode === 'append') {
	        this.setState(function (prevState) {
	          return {
	            items: [].concat(_toConsumableArray(prevState.items), _toConsumableArray(newData)),
	            error: false
	          };
	        });
	      } else if (mode === 'merge') {
	        console.log(mode);
	        this.setState(function (prevState) {
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
	
	  }, {
	    key: 'prepareData',
	    value: function prepareData(data, type) {
	      switch (type) {
	        case 'image':
	          var result = /src='(.+?)'/gi.exec(data);
	          return result && result != null && result[1] ? result[1] : undefined;
	          break;
	        case 'description':
	        case 'title':
	          return !(data.indexOf('-') > -1 && data.trim().length == 1) ? data.trim() : undefined;
	          break;
	        case 'tags':
	          return data && (data.indexOf(',') > -1 ? data.split(',') : data.indexOf('-') > -1 && data.trim().length == 1 ? undefined : data.trim());
	          break;
	      }
	    }
	  }, {
	    key: 'onSelect',
	    value: function onSelect(data) {
	      if (this.props.verbose) {
	        console.log("clicked item data:", data);
	      }
	      this.setState({
	        singleView: data,
	        singleViewVisible: true
	      });
	    }
	  }], [{
	    key: 'actionIcon',
	    value: function actionIcon() {
	      return _react2.default.createElement(
	        'svg',
	        { className: 'icon', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
	        _react2.default.createElement('path', { d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' })
	      );
	    }
	  }]);
	
	  return ReactVideo;
	}(_react2.default.Component);
	
	exports.default = ReactVideo;
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MDIcon = __webpack_require__(35);
	
	var _MDIcon2 = _interopRequireDefault(_MDIcon);
	
	var _icons = __webpack_require__(78);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SingleView = function (_React$Component) {
	  _inherits(SingleView, _React$Component);
	
	  /**
	   * Creates a single view which is a navigation header followed by an renderIframe that loads external content from a link
	   * @param {Object} props
	   * @param {Boolean} [props.visible=false] - whether the renderIframe is visible on a page
	   * @param {Boolean} props.initialLoad - whether it's the first time the renderIframe loads (necessary for the survey, because an initial load is the first time the survey loads, and second load is when the survey is submitted)
	   * @param {String} props.link - the link to a page to load in an renderIframe
	   * @param {String} [props.headerText] - the text to be displayed next to the back button in the nav header
	   * @param {Function} props.returnToGrid - the callback executed when the user wants to navigate off the SingleView page (hitting back or submit)
	   * @param {Boolean} [props.closeOnSubmit = false] - the callback executed when the user wants to navigate off the SingleView page (hitting back or submit)
	   * */
	  function SingleView(props) {
	    _classCallCheck(this, SingleView);
	
	    var _this = _possibleConstructorReturn(this, (SingleView.__proto__ || Object.getPrototypeOf(SingleView)).call(this, props));
	
	    var _this$props = _this.props,
	        visible = _this$props.visible,
	        link = _this$props.link,
	        _this$props$initialLo = _this$props.initialLoad,
	        initialLoad = _this$props$initialLo === undefined ? true : _this$props$initialLo;
	
	    _this.state = {
	      visible: visible,
	      link: link,
	      initialLoad: initialLoad,
	      iframeVisible: false,
	      iframeHeight: 'auto'
	    };
	    _this.onLoad = _this.onLoad.bind(_this);
	    _this.receiveMessage = _this.receiveMessage.bind(_this);
	    window.addEventListener("message", _this.receiveMessage, false);
	    return _this;
	  }
	
	  _createClass(SingleView, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.mapPropsToState(nextProps);
	    }
	  }, {
	    key: 'mapPropsToState',
	    value: function mapPropsToState(props) {
	      var visible = props.visible,
	          link = props.link,
	          initialLoad = props.initialLoad;
	
	      if (this.props.visible != visible || this.props.link != link || this.props.initialLoad != initialLoad) {
	        this.setState({ link: link, visible: visible, initialLoad: initialLoad });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.mapPropsToState(this.props);
	    }
	  }, {
	    key: 'setupListener',
	    value: function setupListener(e) {
	      this.handshake(this.iframeEl, this.getDomain(this.state.link));
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad(e) {
	      if (this.state.link.length > 0) {
	        if (this.state.initialLoad) {
	          this.setState({
	            visible: true,
	            iframeVisible: true,
	            initialLoad: false
	          });
	        }
	        //this.handshake(e.target, this.getDomain(this.state.link));
	      }
	    }
	  }, {
	    key: 'getDomain',
	    value: function getDomain(link) {
	      return link && link.length > 0 ? /(.+?\/\/.+?)\//gi.exec(link)[1] : null;
	    }
	  }, {
	    key: 'handshake',
	    value: function handshake(el, targetOrigin) {
	      if (targetOrigin != null) {
	        var iframe = el.contentWindow;
	        this.targetOrigin = targetOrigin;
	        iframe.postMessage('connect', targetOrigin);
	      }
	    }
	  }, {
	    key: 'receiveMessage',
	    value: function receiveMessage(event) {
	      var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
	      if (origin !== this.targetOrigin) return;
	      if (event.data && event.data.action && this[event.data.action]) {
	        this[event.data.action](event.data);
	      } else {
	        console.warn('action not found for ', event.data, event.data.action, this[event.data.action]);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          link = _state.link,
	          visible = _state.visible,
	          iframeVisible = _state.iframeVisible;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'SingleView', style: { display: this.state.visible ? 'block' : 'none' } },
	        _react2.default.createElement(
	          'div',
	          { className: 'SingleView--header' },
	          _react2.default.createElement(
	            'span',
	            { className: 'SingleView--back-button', title: 'Return to the list', onClick: this.props.returnToGridAction },
	            _react2.default.createElement(_MDIcon2.default, { icon: _icons.ic_arrow_back })
	          ),
	          this.props.headerText
	        ),
	        this.renderIframe(link, visible ? iframeVisible : visible)
	      );
	    }
	
	    /**
	     * Renders an renderIframe element
	     * @param {String} link - url of the renderIframe
	     * @param {String} visible - visibility of the renderIframe
	     * @param {String} height - height of the renderIframe
	     * */
	
	  }, {
	    key: 'renderIframe',
	    value: function renderIframe(link, visible) {
	      var _this2 = this;
	
	      return _react2.default.createElement('iframe', {
	        ref: function ref(iframe) {
	          _this2.iframeEl = iframe;
	        },
	        src: link,
	        onLoad: this.onLoad,
	        style: { display: visible ? 'block' : 'none' } });
	    }
	  }]);
	
	  return SingleView;
	}(_react2.default.Component);
	
	exports.default = SingleView;
	
	
	SingleView.defaultProps = {
	  closeOnSubmit: false
	};
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ic_arrow_back = exports.ic_star_border = exports.ic_star = undefined;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ic_star = exports.ic_star = _react2.default.createElement("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" });
	var ic_star_border = exports.ic_star_border = _react2.default.createElement("path", { d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" });
	var ic_arrow_back = exports.ic_arrow_back = _react2.default.createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" });

/***/ },
/* 79 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 80 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var freeGlobal = __webpack_require__(115);
	
	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;

/***/ },
/* 87 */
/***/ function(module, exports) {

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

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsNative = __webpack_require__(147),
	    getValue = __webpack_require__(171);
	
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

/***/ },
/* 89 */
/***/ function(module, exports) {

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

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(86);
	
	/** Built-in value references. */
	var _Symbol = root.Symbol;
	
	module.exports = _Symbol;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(90),
	    getRawTag = __webpack_require__(168),
	    objectToString = __webpack_require__(196);
	
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

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var listCacheClear = __webpack_require__(182),
	    listCacheDelete = __webpack_require__(183),
	    listCacheGet = __webpack_require__(184),
	    listCacheHas = __webpack_require__(185),
	    listCacheSet = __webpack_require__(186);
	
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

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var eq = __webpack_require__(120);
	
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

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isKeyable = __webpack_require__(179);
	
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

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(88);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isSymbol = __webpack_require__(105);
	
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

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(88),
	    root = __webpack_require__(86);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mapCacheClear = __webpack_require__(187),
	    mapCacheDelete = __webpack_require__(188),
	    mapCacheGet = __webpack_require__(189),
	    mapCacheHas = __webpack_require__(190),
	    mapCacheSet = __webpack_require__(191);
	
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

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var isArray = __webpack_require__(87),
	    isSymbol = __webpack_require__(105);
	
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

/***/ },
/* 100 */
/***/ function(module, exports) {

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

/***/ },
/* 101 */
/***/ function(module, exports) {

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

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsArguments = __webpack_require__(143),
	    isObjectLike = __webpack_require__(89);
	
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

/***/ },
/* 103 */
/***/ function(module, exports) {

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

/***/ },
/* 104 */
/***/ function(module, exports) {

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

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var baseGetTag = __webpack_require__(91),
	    isObjectLike = __webpack_require__(89);
	
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

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(88),
	    root = __webpack_require__(86);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var MapCache = __webpack_require__(98),
	    setCacheAdd = __webpack_require__(199),
	    setCacheHas = __webpack_require__(200);
	
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

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(92),
	    stackClear = __webpack_require__(203),
	    stackDelete = __webpack_require__(204),
	    stackGet = __webpack_require__(205),
	    stackHas = __webpack_require__(206),
	    stackSet = __webpack_require__(207);
	
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

/***/ },
/* 109 */
/***/ function(module, exports) {

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

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var castPath = __webpack_require__(113),
	    toKey = __webpack_require__(96);
	
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

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqualDeep = __webpack_require__(144),
	    isObjectLike = __webpack_require__(89);
	
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

/***/ },
/* 112 */
/***/ function(module, exports) {

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

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArray = __webpack_require__(87),
	    isKey = __webpack_require__(99),
	    stringToPath = __webpack_require__(209),
	    toString = __webpack_require__(220);
	
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

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var SetCache = __webpack_require__(107),
	    arraySome = __webpack_require__(137),
	    cacheHas = __webpack_require__(112);
	
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

/***/ },
/* 115 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 116 */
/***/ function(module, exports) {

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

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(104);
	
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

/***/ },
/* 118 */
/***/ function(module, exports) {

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

/***/ },
/* 119 */
/***/ function(module, exports) {

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

/***/ },
/* 120 */
/***/ function(module, exports) {

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

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(123),
	    isLength = __webpack_require__(103);
	
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

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var root = __webpack_require__(86),
	    stubFalse = __webpack_require__(219);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)(module)))

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(91),
	    isObject = __webpack_require__(104);
	
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

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsTypedArray = __webpack_require__(148),
	    baseUnary = __webpack_require__(159),
	    nodeUtil = __webpack_require__(195);
	
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

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayLikeKeys = __webpack_require__(135),
	    baseKeys = __webpack_require__(150),
	    isArrayLike = __webpack_require__(121);
	
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

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(88),
	    root = __webpack_require__(86);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var hashClear = __webpack_require__(173),
	    hashDelete = __webpack_require__(174),
	    hashGet = __webpack_require__(175),
	    hashHas = __webpack_require__(176),
	    hashSet = __webpack_require__(177);
	
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

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(88),
	    root = __webpack_require__(86);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(86);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(88),
	    root = __webpack_require__(86);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;

/***/ },
/* 131 */
/***/ function(module, exports) {

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

/***/ },
/* 132 */
/***/ function(module, exports) {

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

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIndexOf = __webpack_require__(142);
	
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

/***/ },
/* 134 */
/***/ function(module, exports) {

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

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseTimes = __webpack_require__(157),
	    isArguments = __webpack_require__(102),
	    isArray = __webpack_require__(87),
	    isBuffer = __webpack_require__(122),
	    isIndex = __webpack_require__(116),
	    isTypedArray = __webpack_require__(124);
	
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

/***/ },
/* 136 */
/***/ function(module, exports) {

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

/***/ },
/* 137 */
/***/ function(module, exports) {

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

/***/ },
/* 138 */
/***/ function(module, exports) {

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

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayPush = __webpack_require__(109),
	    isFlattenable = __webpack_require__(178);
	
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

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayPush = __webpack_require__(109),
	    isArray = __webpack_require__(87);
	
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

/***/ },
/* 141 */
/***/ function(module, exports) {

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

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseFindIndex = __webpack_require__(138),
	    baseIsNaN = __webpack_require__(146),
	    strictIndexOf = __webpack_require__(208);
	
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

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(91),
	    isObjectLike = __webpack_require__(89);
	
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

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stack = __webpack_require__(108),
	    equalArrays = __webpack_require__(114),
	    equalByTag = __webpack_require__(164),
	    equalObjects = __webpack_require__(165),
	    getTag = __webpack_require__(170),
	    isArray = __webpack_require__(87),
	    isBuffer = __webpack_require__(122),
	    isTypedArray = __webpack_require__(124);
	
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

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stack = __webpack_require__(108),
	    baseIsEqual = __webpack_require__(111);
	
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

/***/ },
/* 146 */
/***/ function(module, exports) {

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

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(123),
	    isMasked = __webpack_require__(180),
	    isObject = __webpack_require__(104),
	    toSource = __webpack_require__(119);
	
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

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(91),
	    isLength = __webpack_require__(103),
	    isObjectLike = __webpack_require__(89);
	
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

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var baseMatches = __webpack_require__(151),
	    baseMatchesProperty = __webpack_require__(152),
	    identity = __webpack_require__(101),
	    isArray = __webpack_require__(87),
	    property = __webpack_require__(217);
	
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

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isPrototype = __webpack_require__(181),
	    nativeKeys = __webpack_require__(194);
	
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

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsMatch = __webpack_require__(145),
	    getMatchData = __webpack_require__(167),
	    matchesStrictComparable = __webpack_require__(118);
	
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

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqual = __webpack_require__(111),
	    get = __webpack_require__(211),
	    hasIn = __webpack_require__(212),
	    isKey = __webpack_require__(99),
	    isStrictComparable = __webpack_require__(117),
	    matchesStrictComparable = __webpack_require__(118),
	    toKey = __webpack_require__(96);
	
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

/***/ },
/* 153 */
/***/ function(module, exports) {

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

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(110);
	
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

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var identity = __webpack_require__(101),
	    overRest = __webpack_require__(198),
	    setToString = __webpack_require__(201);
	
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

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var constant = __webpack_require__(210),
	    defineProperty = __webpack_require__(163),
	    identity = __webpack_require__(101);
	
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

/***/ },
/* 157 */
/***/ function(module, exports) {

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

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(90),
	    arrayMap = __webpack_require__(136),
	    isArray = __webpack_require__(87),
	    isSymbol = __webpack_require__(105);
	
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

/***/ },
/* 159 */
/***/ function(module, exports) {

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

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var SetCache = __webpack_require__(107),
	    arrayIncludes = __webpack_require__(133),
	    arrayIncludesWith = __webpack_require__(134),
	    cacheHas = __webpack_require__(112),
	    createSet = __webpack_require__(162),
	    setToArray = __webpack_require__(100);
	
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

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(86);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Set = __webpack_require__(106),
	    noop = __webpack_require__(216),
	    setToArray = __webpack_require__(100);
	
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

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(88);
	
	var defineProperty = function () {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}();
	
	module.exports = defineProperty;

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(90),
	    Uint8Array = __webpack_require__(129),
	    eq = __webpack_require__(120),
	    equalArrays = __webpack_require__(114),
	    mapToArray = __webpack_require__(192),
	    setToArray = __webpack_require__(100);
	
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

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getAllKeys = __webpack_require__(166);
	
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

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetAllKeys = __webpack_require__(140),
	    getSymbols = __webpack_require__(169),
	    keys = __webpack_require__(125);
	
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

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isStrictComparable = __webpack_require__(117),
	    keys = __webpack_require__(125);
	
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

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(90);
	
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

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayFilter = __webpack_require__(132),
	    stubArray = __webpack_require__(218);
	
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

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var DataView = __webpack_require__(126),
	    Map = __webpack_require__(97),
	    Promise = __webpack_require__(128),
	    Set = __webpack_require__(106),
	    WeakMap = __webpack_require__(130),
	    baseGetTag = __webpack_require__(91),
	    toSource = __webpack_require__(119);
	
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

/***/ },
/* 171 */
/***/ function(module, exports) {

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

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var castPath = __webpack_require__(113),
	    isArguments = __webpack_require__(102),
	    isArray = __webpack_require__(87),
	    isIndex = __webpack_require__(116),
	    isLength = __webpack_require__(103),
	    toKey = __webpack_require__(96);
	
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

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(95);
	
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

/***/ },
/* 174 */
/***/ function(module, exports) {

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

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(95);
	
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

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(95);
	
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

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(95);
	
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

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(90),
	    isArguments = __webpack_require__(102),
	    isArray = __webpack_require__(87);
	
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

/***/ },
/* 179 */
/***/ function(module, exports) {

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

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var coreJsData = __webpack_require__(161);
	
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

/***/ },
/* 181 */
/***/ function(module, exports) {

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

/***/ },
/* 182 */
/***/ function(module, exports) {

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

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(93);
	
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

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(93);
	
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

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(93);
	
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

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(93);
	
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

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Hash = __webpack_require__(127),
	    ListCache = __webpack_require__(92),
	    Map = __webpack_require__(97);
	
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

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(94);
	
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

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(94);
	
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

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(94);
	
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

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(94);
	
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

/***/ },
/* 192 */
/***/ function(module, exports) {

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

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var memoize = __webpack_require__(215);
	
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

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var overArg = __webpack_require__(197);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var freeGlobal = __webpack_require__(115);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)(module)))

/***/ },
/* 196 */
/***/ function(module, exports) {

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

/***/ },
/* 197 */
/***/ function(module, exports) {

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

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var apply = __webpack_require__(131);
	
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

/***/ },
/* 199 */
/***/ function(module, exports) {

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

/***/ },
/* 200 */
/***/ function(module, exports) {

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

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseSetToString = __webpack_require__(156),
	    shortOut = __webpack_require__(202);
	
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

/***/ },
/* 202 */
/***/ function(module, exports) {

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

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(92);
	
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

/***/ },
/* 204 */
/***/ function(module, exports) {

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

/***/ },
/* 205 */
/***/ function(module, exports) {

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

/***/ },
/* 206 */
/***/ function(module, exports) {

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

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(92),
	    Map = __webpack_require__(97),
	    MapCache = __webpack_require__(98);
	
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

/***/ },
/* 208 */
/***/ function(module, exports) {

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

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var memoizeCapped = __webpack_require__(193);
	
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

/***/ },
/* 210 */
/***/ function(module, exports) {

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

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(110);
	
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

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseHasIn = __webpack_require__(141),
	    hasPath = __webpack_require__(172);
	
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

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArrayLike = __webpack_require__(121),
	    isObjectLike = __webpack_require__(89);
	
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

/***/ },
/* 214 */
/***/ function(module, exports) {

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

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var MapCache = __webpack_require__(98);
	
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

/***/ },
/* 216 */
/***/ function(module, exports) {

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

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseProperty = __webpack_require__(153),
	    basePropertyDeep = __webpack_require__(154),
	    isKey = __webpack_require__(99),
	    toKey = __webpack_require__(96);
	
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

/***/ },
/* 218 */
/***/ function(module, exports) {

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

/***/ },
/* 219 */
/***/ function(module, exports) {

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

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseToString = __webpack_require__(158);
	
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

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseFlatten = __webpack_require__(139),
	    baseIteratee = __webpack_require__(149),
	    baseRest = __webpack_require__(155),
	    baseUniq = __webpack_require__(160),
	    isArrayLikeObject = __webpack_require__(213),
	    last = __webpack_require__(214);
	
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWFiZDZiOWU1ZTE1NmViZGRiMzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLXJlcG9ydGFsLWJhc2Uvc3JjL3JlcG9ydGFsLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vTURJY29uL3NyYy9NREljb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9NREljb24vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9kaXN0L1Byb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3QtZGF0YXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LXNldHVwLmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VHcmlkVGlsZS9JbWFnZUdyaWRUaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWQvSW1hZ2VHcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWFjdFZpZGVvL1JlYWN0VmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmdsZVZpZXcvU2luZ2xlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlR3JpZFRpbGUvSW1hZ2VHcmlkVGlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL190b0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19EYXRhVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fSGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUZsYXR0ZW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSGFzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hTi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXRlcmF0ZWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUHJvcGVydHlEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVNldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5pcS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb3ZlclJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3Nob3J0T3V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0NsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9oYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbm9vcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3VuaW9uQnkuanMiXSwibmFtZXMiOlsibGF1bmNoVmlkZW9IaXRsaXN0IiwiY29uZmlnTmFtZSIsInRodW1ic1BsYWNlaG9sZGVyIiwiRXJyb3IiLCJUeXBlRXJyb3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlcG9ydGFsIiwibWl4aW4iLCJzdG9yZSIsInJlcXVpcmUiLCJ1aWQiLCJTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImdsb2JhbCIsIk1hdGgiLCJzZWxmIiwiRnVuY3Rpb24iLCJfX2ciLCJpc09iamVjdCIsIml0IiwiZFAiLCJjcmVhdGVEZXNjIiwib2JqZWN0Iiwia2V5IiwidmFsdWUiLCJmIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImEiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImFGdW5jdGlvbiIsImZuIiwidGhhdCIsImxlbmd0aCIsInVuZGVmaW5lZCIsImIiLCJjIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYXNPd25Qcm9wZXJ0eSIsImFuT2JqZWN0IiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIk8iLCJQIiwiQXR0cmlidXRlcyIsImUiLCJpcyIsImNyZWF0ZUVsZW1lbnQiLCJkZWYiLCJoYXMiLCJUQUciLCJ0YWciLCJzdGF0IiwicHJvdG90eXBlIiwiY29uZmlndXJhYmxlIiwic2hhcmVkIiwiY2VpbCIsImZsb29yIiwiaXNOYU4iLCJJT2JqZWN0IiwiZGVmaW5lZCIsIlJlcG9ydGFsQmFzZSIsInRhcmdldCIsInNvdXJjZSIsImkiLCJsZXZlbCIsImFyZ3MiLCJBcnJheSIsImlzQXJyYXkiLCJjb25zb2xlIiwiX2xvZ2dlciIsImV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJzdHIiLCJwYXJzZUZsb2F0IiwicmVwbGFjZSIsIlVSTCIsInJlc29sdmUiLCJyZWplY3QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJjb2RlIiwibWVzc2FnZSIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwiZXJyb3IiLCJzZW5kIiwidmFyaWFibGUiLCJxdWVyeSIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwidmFycyIsInNwbGl0IiwicGFpciIsInRvTG93ZXJDYXNlIiwibyIsInBhdGgiLCJvcmlnaW4iLCJwYXRobmFtZSIsImZvckVhY2giLCJhUGFpciIsInB1c2giLCJqb2luIiwiY29mIiwiQVJHIiwidHJ5R2V0IiwiVCIsIkIiLCJjYWxsZWUiLCJjdHgiLCJoaWRlIiwiUFJPVE9UWVBFIiwiJGV4cG9ydCIsInR5cGUiLCJJU19GT1JDRUQiLCJGIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIlMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJJU19XUkFQIiwiVyIsImV4cFByb3RvIiwib3duIiwib3V0IiwiQyIsInZpcnR1YWwiLCJSIiwiVSIsImV4ZWMiLCJkb2N1bWVudEVsZW1lbnQiLCJMSUJSQVJZIiwicmVkZWZpbmUiLCJJdGVyYXRvcnMiLCIkaXRlckNyZWF0ZSIsInNldFRvU3RyaW5nVGFnIiwiZ2V0UHJvdG90eXBlT2YiLCJJVEVSQVRPUiIsIkJVR0dZIiwia2V5cyIsIkZGX0lURVJBVE9SIiwiS0VZUyIsIlZBTFVFUyIsInJldHVyblRoaXMiLCJCYXNlIiwiTkFNRSIsIkNvbnN0cnVjdG9yIiwibmV4dCIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJraW5kIiwicHJvdG8iLCJ2YWx1ZXMiLCJlbnRyaWVzIiwiREVGX1ZBTFVFUyIsIlZBTFVFU19CVUciLCIkbmF0aXZlIiwiJGRlZmF1bHQiLCIkZW50cmllcyIsIiRhbnlOYXRpdmUiLCJtZXRob2RzIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJiaXRtYXAiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJTSEFSRUQiLCJpbnZva2UiLCJodG1sIiwiY2VsIiwicHJvY2VzcyIsInNldFRhc2siLCJzZXRJbW1lZGlhdGUiLCJjbGVhclRhc2siLCJjbGVhckltbWVkaWF0ZSIsIk1lc3NhZ2VDaGFubmVsIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImlkIiwibGlzdGVuZXIiLCJkYXRhIiwibmV4dFRpY2siLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsInNldFRpbWVvdXQiLCJzZXQiLCJjbGVhciIsInRvSW50ZWdlciIsIm1pbiIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwiTURJY29uIiwicHJvcHMiLCJmaWxsIiwic2l6ZSIsImljb24iLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsInQiLCJyZWFjdCIsInIiLCJuIiwibG9hZGVkIiwibSIsInAiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIlJlZmVyZW5jZUVycm9yIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsInMiLCJhc3NpZ24iLCJsIiwidSIsIl9pbWFnZU9ubG9hZCIsImJpbmQiLCJfaW1hZ2VPbmVycm9yIiwic3RhdGUiLCJzcmMiLCJwbGFjZWhvbGRlckhpZGRlbiIsInBsYWNlaG9sZGVyIiwic2l6aW5nIiwicG9zaXRpb24iLCJwcm9wb3J0aW9uIiwibG9hZGluZyIsIl9sb2FkIiwiX2NvbXB1dGVEaW1lbnNpb25zIiwiX2NvbXB1dGVQcm9wb3J0aW9uIiwiYXNwZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJzZXRTdGF0ZSIsImluZGV4T2YiLCJtYXAiLCJkIiwicHJlbG9hZCIsImZhZGUiLCJoIiwicGxhY2Vob2xkZXJTaXppbmciLCJnIiwiYWx0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwYWRkaW5nVG9wIiwicm9sZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImRpc3BsYXkiLCJvbkxvYWQiLCJvbkVycm9yIiwiX3Jlc2V0IiwicHJldmVudExvYWQiLCJDb21wb25lbnQiLCJQcm9taXNlIiwiZm9yYmlkZGVuRmllbGQiLCJ0b0lPYmplY3QiLCJ0b0xlbmd0aCIsInRvSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpbmRleCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyYWJsZSIsIml0ZXJGbiIsInN0ZXAiLCJpdGVyYXRvciIsInJlc3VsdCIsImRvbmUiLCJ1biIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiQXJyYXlQcm90byIsInJldCIsImRlc2NyaXB0b3IiLCJTQUZFX0NMT1NJTkciLCJyaXRlciIsImZyb20iLCJza2lwQ2xvc2luZyIsInNhZmUiLCJhcnIiLCJpdGVyIiwibWFjcm90YXNrIiwiT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsImlzTm9kZSIsImhlYWQiLCJsYXN0Iiwibm90aWZ5IiwiZmx1c2giLCJwYXJlbnQiLCJkb21haW4iLCJleGl0IiwiZW50ZXIiLCJ0b2dnbGUiLCJub2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJvYnNlcnZlIiwiY2hhcmFjdGVyRGF0YSIsInByb21pc2UiLCJ0aGVuIiwidGFzayIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJjb250ZW50V2luZG93Iiwid3JpdGUiLCJjbG9zZSIsIlByb3BlcnRpZXMiLCJnZXRLZXlzIiwiZGVmaW5lUHJvcGVydGllcyIsInRvT2JqZWN0IiwiT2JqZWN0UHJvdG8iLCJhcnJheUluZGV4T2YiLCJuYW1lcyIsIiRrZXlzIiwiREVTQ1JJUFRPUlMiLCJTUEVDSUVTIiwiS0VZIiwiRCIsIlRPX1NUUklORyIsInBvcyIsIlN0cmluZyIsImNoYXJDb2RlQXQiLCJjaGFyQXQiLCJtYXgiLCJ2YWwiLCJ2YWx1ZU9mIiwiY2xhc3NvZiIsImdldEl0ZXJhdG9yTWV0aG9kIiwiYWRkVG9VbnNjb3BhYmxlcyIsIml0ZXJhdGVkIiwiX3QiLCJfaSIsIl9rIiwiQXJndW1lbnRzIiwiYW5JbnN0YW5jZSIsImZvck9mIiwic3BlY2llc0NvbnN0cnVjdG9yIiwibWljcm90YXNrIiwiUFJPTUlTRSIsIiRQcm9taXNlIiwiZW1wdHkiLCJJbnRlcm5hbCIsIkdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJzYW1lQ29uc3RydWN0b3IiLCJpc1RoZW5hYmxlIiwibmV3UHJvbWlzZUNhcGFiaWxpdHkiLCJQcm9taXNlQ2FwYWJpbGl0eSIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwicGVyZm9ybSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJvblVuaGFuZGxlZCIsImFicnVwdCIsImlzVW5oYW5kbGVkIiwiZW1pdCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwicmVhc29uIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwid3JhcHBlciIsImV4ZWN1dG9yIiwiZXJyIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiY2FwYWJpbGl0eSIsIngiLCJhbGwiLCJyZW1haW5pbmciLCIkaW5kZXgiLCJhbHJlYWR5Q2FsbGVkIiwicmFjZSIsIiRhdCIsInBvaW50IiwiVE9fU1RSSU5HX1RBRyIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbiIsIkhpdGxpc3REYXRhc291cmNlIiwib3B0aW9ucyIsIl9zZWFyY2hWYWx1ZXMiLCJtb2RpZmllciIsInJlcXVlc3RSZXNwb25zZSIsImluaXRpYWxMb2FkIiwiX3NraXBQYWdlIiwiaXNQYWdpbmciLCJsb2NhdGlvbkRlc2VyaWFsaXplIiwicmVwb3J0aWQiLCJoaXRsaXN0SUQiLCJwYXJhbXMiLCJQYWdlSWQiLCJwYWdlSUQiLCJwYWdlU3RhdGVJZCIsInBhZ2VTdGF0ZUlEIiwiUHJldmlldyIsInByZXZpZXciLCJhdHRybmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzb3J0aW5nUGFnaW5nVmFsdWVzIiwicGFnaW5nVmFsdWVzIiwicGFnZU51bWJlciIsInBhZ2luZ0ZvcndhcmQiLCJwcm9taXNlUmVxdWVzdCIsInNlcnZpY2VVUkwiLCJzZXJpYWxpemVQYXJhbXMiLCJwYXJzZVJlc3BvbnNlIiwicmVzcG9uc2UiLCJwYXJzZSIsInBhZ2VJbmZvIiwiX3NwdiIsInB2Iiwic3RhcnRJZCIsImxhc3RTdGFydElkIiwiZmlyc3RTdGFydElkIiwic3RhcnRWYWx1ZSIsImxhc3RTdGFydFZhbHVlIiwiZmlyc3RTdGFydFZhbHVlIiwiSGl0bGlzdFNldHVwIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsIl9jb25maWciLCJnZXRPcmlnaW5hbENvbmZpZyIsIl9lbGVtZW50VHlwZSIsIkhpdExpc3RFbGVtZW50VHlwZSIsIl9vcCIsIlNlYXJjaGFibGVMaXN0T3BlcmF0b3IiLCJjYXB0aW9ucyIsInNpbmdsZVZpZXdUZXh0cyIsImhpdGxpc3REYXRhIiwiZGlzYWJsZU5leHRCdXR0b24iLCJkaXNhYmxlUHJldkJ1dHRvbiIsImNvbHVtbnMiLCJhbGxDb2x1bW5zIiwiY29tcG9uZW50SWQiLCJwYWdlSWQiLCJsYW5ndWFnZSIsInNlcnZpY2VVcmwiLCJxdWVyeVNlbGVjdG9yIiwianNvbkRhdGUiLCJZIiwiTGFuZyIsImlzRnVuY3Rpb24iLCJjb25zdHIiLCJSZWdFeHAiLCJldmFsIiwic2NyaXB0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjZmciLCJzY3JpcHQiLCJ0ZXh0Iiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJNRURJQV9UWVBFUyIsIkltYWdlR3JpZFRpbGUiLCJhY3Rpb25CdXR0b24iLCJhY3Rpb25JY29uIiwib25TZWxlY3QiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJfY29tcHV0ZVRpbGVUeXBlIiwibWVkaWF0eXBlIiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJpY29uU2VydmVyIiwiZXNjYXBlIiwiaWNvbnMiLCJhdWRpbyIsInZpZGVvIiwicHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2YiLCJudW1iZXIiLCJmdW5jIiwiSW1hZ2VHcmlkIiwiaXRlbXMiLCJkdW1teUl0ZW1zIiwiaXRlbSIsInJlbmRlckR1bW15SXRlbXMiLCJjb3VudCIsImFycmF5IiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJSZWFjdFZpZGVvIiwiaGFuZGxlRGF0YUxvYWRpbmdFcnJvciIsImxvYWROZXh0UGFnZSIsIkRTIiwibmV4dFBhZ2UiLCJwcm9jZXNzRGF0YSIsImNhdGNoIiwibG9hZFByZXZpb3VzUGFnZSIsInByZXZpb3VzUGFnZSIsImxvYWRNb3JlIiwidmVyYm9zZSIsImxvZyIsInNldHVwRGF0YUxpc3RlbmVyIiwic2luZ2xlVmlldyIsImxpbmsiLCJzaW5nbGVWaWV3VmlzaWJsZSIsInJldHVyblRvR3JpZCIsInJlbmRlck5hdmlnYXRpb24iLCJkYXRhTG9hZGluZ01lc3NhZ2UiLCJpMThuIiwiY29uZmlnIiwicGFnaW5hdGlvbiIsImNvbnRpbnVvdXNOYXZpZ2F0aW9uIiwicGFnaW5nTmF2aWdhdGlvbiIsInRvdGFsSGl0cyIsInRleHRBbGlnbiIsIkdsb2JhbCIsIm9uIiwiaW5pdGlhbGlzZUNvbmZpZyIsImZpbHRlckluZm8iLCJpbml0aWFsRGF0YUxvYWQiLCJtb2RlIiwidGFncyIsIm5ld0RhdGEiLCJwYXJzZWREYXRhIiwicHJlcGFyZURhdGEiLCJyZXNwb25zZWlkIiwic2xpbmsiLCJwcmV2U3RhdGUiLCJ0cmltIiwiU2luZ2xlVmlldyIsInZpc2libGUiLCJpZnJhbWVWaXNpYmxlIiwiaWZyYW1lSGVpZ2h0IiwicmVjZWl2ZU1lc3NhZ2UiLCJuZXh0UHJvcHMiLCJtYXBQcm9wc1RvU3RhdGUiLCJoYW5kc2hha2UiLCJpZnJhbWVFbCIsImdldERvbWFpbiIsInRhcmdldE9yaWdpbiIsIm9yaWdpbmFsRXZlbnQiLCJhY3Rpb24iLCJ3YXJuIiwicmV0dXJuVG9HcmlkQWN0aW9uIiwiaGVhZGVyVGV4dCIsInJlbmRlcklmcmFtZSIsImNsb3NlT25TdWJtaXQiLCJpY19zdGFyIiwiaWNfc3Rhcl9ib3JkZXIiLCJpY19hcnJvd19iYWNrIiwiZnJlZUdsb2JhbCIsImZyZWVTZWxmIiwicm9vdCIsImJhc2VJc05hdGl2ZSIsImdldFZhbHVlIiwiZ2V0TmF0aXZlIiwiaXNPYmplY3RMaWtlIiwiZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImJhc2VHZXRUYWciLCJsaXN0Q2FjaGVDbGVhciIsImxpc3RDYWNoZURlbGV0ZSIsImxpc3RDYWNoZUdldCIsImxpc3RDYWNoZUhhcyIsImxpc3RDYWNoZVNldCIsIkxpc3RDYWNoZSIsImVudHJ5IiwiZXEiLCJhc3NvY0luZGV4T2YiLCJpc0tleWFibGUiLCJnZXRNYXBEYXRhIiwiX19kYXRhX18iLCJuYXRpdmVDcmVhdGUiLCJpc1N5bWJvbCIsIklORklOSVRZIiwidG9LZXkiLCJNYXAiLCJtYXBDYWNoZUNsZWFyIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsInJlSXNEZWVwUHJvcCIsInJlSXNQbGFpblByb3AiLCJpc0tleSIsInRlc3QiLCJzZXRUb0FycmF5IiwiaWRlbnRpdHkiLCJiYXNlSXNBcmd1bWVudHMiLCJvYmplY3RQcm90byIsImlzQXJndW1lbnRzIiwiTUFYX1NBRkVfSU5URUdFUiIsImlzTGVuZ3RoIiwic3ltYm9sVGFnIiwiU2V0Iiwic2V0Q2FjaGVBZGQiLCJzZXRDYWNoZUhhcyIsIlNldENhY2hlIiwiYWRkIiwic3RhY2tDbGVhciIsInN0YWNrRGVsZXRlIiwic3RhY2tHZXQiLCJzdGFja0hhcyIsInN0YWNrU2V0IiwiU3RhY2siLCJhcnJheVB1c2giLCJvZmZzZXQiLCJjYXN0UGF0aCIsImJhc2VHZXQiLCJiYXNlSXNFcXVhbERlZXAiLCJiYXNlSXNFcXVhbCIsIm90aGVyIiwiYml0bWFzayIsImN1c3RvbWl6ZXIiLCJzdGFjayIsImNhY2hlSGFzIiwiY2FjaGUiLCJzdHJpbmdUb1BhdGgiLCJhcnJheVNvbWUiLCJDT01QQVJFX1BBUlRJQUxfRkxBRyIsIkNPTVBBUkVfVU5PUkRFUkVEX0ZMQUciLCJlcXVhbEFycmF5cyIsImVxdWFsRnVuYyIsImlzUGFydGlhbCIsImFyckxlbmd0aCIsIm90aExlbmd0aCIsInN0YWNrZWQiLCJzZWVuIiwiYXJyVmFsdWUiLCJvdGhWYWx1ZSIsImNvbXBhcmVkIiwib3RoSW5kZXgiLCJyZUlzVWludCIsImlzSW5kZXgiLCJpc1N0cmljdENvbXBhcmFibGUiLCJtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSIsInNyY1ZhbHVlIiwiZnVuY1Byb3RvIiwiZnVuY1RvU3RyaW5nIiwidG9Tb3VyY2UiLCJpc0FycmF5TGlrZSIsInN0dWJGYWxzZSIsImZyZWVFeHBvcnRzIiwibm9kZVR5cGUiLCJmcmVlTW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsIkJ1ZmZlciIsIm5hdGl2ZUlzQnVmZmVyIiwiaXNCdWZmZXIiLCJhc3luY1RhZyIsImZ1bmNUYWciLCJnZW5UYWciLCJwcm94eVRhZyIsImJhc2VJc1R5cGVkQXJyYXkiLCJiYXNlVW5hcnkiLCJub2RlVXRpbCIsIm5vZGVJc1R5cGVkQXJyYXkiLCJpc1R5cGVkQXJyYXkiLCJhcnJheUxpa2VLZXlzIiwiYmFzZUtleXMiLCJEYXRhVmlldyIsImhhc2hDbGVhciIsImhhc2hEZWxldGUiLCJoYXNoR2V0IiwiaGFzaEhhcyIsImhhc2hTZXQiLCJIYXNoIiwiVWludDhBcnJheSIsIldlYWtNYXAiLCJ0aGlzQXJnIiwiYXJyYXlGaWx0ZXIiLCJwcmVkaWNhdGUiLCJyZXNJbmRleCIsImJhc2VJbmRleE9mIiwiYXJyYXlJbmNsdWRlcyIsImFycmF5SW5jbHVkZXNXaXRoIiwiY29tcGFyYXRvciIsImJhc2VUaW1lcyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsImFycmF5TWFwIiwiaXRlcmF0ZWUiLCJiYXNlRmluZEluZGV4IiwiZnJvbVJpZ2h0IiwiaXNGbGF0dGVuYWJsZSIsImJhc2VGbGF0dGVuIiwiZGVwdGgiLCJpc1N0cmljdCIsImJhc2VHZXRBbGxLZXlzIiwia2V5c0Z1bmMiLCJzeW1ib2xzRnVuYyIsImJhc2VIYXNJbiIsImJhc2VJc05hTiIsInN0cmljdEluZGV4T2YiLCJhcmdzVGFnIiwiZXF1YWxCeVRhZyIsImVxdWFsT2JqZWN0cyIsImdldFRhZyIsImFycmF5VGFnIiwib2JqZWN0VGFnIiwib2JqSXNBcnIiLCJvdGhJc0FyciIsIm9ialRhZyIsIm90aFRhZyIsIm9iaklzT2JqIiwib3RoSXNPYmoiLCJpc1NhbWVUYWciLCJvYmpJc1dyYXBwZWQiLCJvdGhJc1dyYXBwZWQiLCJvYmpVbndyYXBwZWQiLCJvdGhVbndyYXBwZWQiLCJiYXNlSXNNYXRjaCIsIm1hdGNoRGF0YSIsIm5vQ3VzdG9taXplciIsIm9ialZhbHVlIiwiaXNNYXNrZWQiLCJyZVJlZ0V4cENoYXIiLCJyZUlzSG9zdEN0b3IiLCJyZUlzTmF0aXZlIiwicGF0dGVybiIsImJvb2xUYWciLCJkYXRlVGFnIiwiZXJyb3JUYWciLCJtYXBUYWciLCJudW1iZXJUYWciLCJyZWdleHBUYWciLCJzZXRUYWciLCJzdHJpbmdUYWciLCJ3ZWFrTWFwVGFnIiwiYXJyYXlCdWZmZXJUYWciLCJkYXRhVmlld1RhZyIsImZsb2F0MzJUYWciLCJmbG9hdDY0VGFnIiwiaW50OFRhZyIsImludDE2VGFnIiwiaW50MzJUYWciLCJ1aW50OFRhZyIsInVpbnQ4Q2xhbXBlZFRhZyIsInVpbnQxNlRhZyIsInVpbnQzMlRhZyIsInR5cGVkQXJyYXlUYWdzIiwiYmFzZU1hdGNoZXMiLCJiYXNlTWF0Y2hlc1Byb3BlcnR5IiwicHJvcGVydHkiLCJiYXNlSXRlcmF0ZWUiLCJpc1Byb3RvdHlwZSIsIm5hdGl2ZUtleXMiLCJnZXRNYXRjaERhdGEiLCJoYXNJbiIsImJhc2VQcm9wZXJ0eSIsImJhc2VQcm9wZXJ0eURlZXAiLCJvdmVyUmVzdCIsInNldFRvU3RyaW5nIiwiYmFzZVJlc3QiLCJzdGFydCIsImNvbnN0YW50IiwiYmFzZVNldFRvU3RyaW5nIiwic3ltYm9sUHJvdG8iLCJzeW1ib2xUb1N0cmluZyIsImJhc2VUb1N0cmluZyIsImNyZWF0ZVNldCIsIkxBUkdFX0FSUkFZX1NJWkUiLCJiYXNlVW5pcSIsImluY2x1ZGVzIiwiaXNDb21tb24iLCJvdXRlciIsImNvbXB1dGVkIiwic2VlbkluZGV4IiwiY29yZUpzRGF0YSIsIm5vb3AiLCJtYXBUb0FycmF5Iiwic3ltYm9sVmFsdWVPZiIsImJ5dGVMZW5ndGgiLCJieXRlT2Zmc2V0IiwiYnVmZmVyIiwiY29udmVydCIsImdldEFsbEtleXMiLCJvYmpQcm9wcyIsIm9iakxlbmd0aCIsIm90aFByb3BzIiwic2tpcEN0b3IiLCJvYmpDdG9yIiwib3RoQ3RvciIsImdldFN5bWJvbHMiLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsImlzT3duIiwidW5tYXNrZWQiLCJzdHViQXJyYXkiLCJuYXRpdmVHZXRTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9sIiwicHJvbWlzZVRhZyIsImRhdGFWaWV3Q3RvclN0cmluZyIsIm1hcEN0b3JTdHJpbmciLCJwcm9taXNlQ3RvclN0cmluZyIsInNldEN0b3JTdHJpbmciLCJ3ZWFrTWFwQ3RvclN0cmluZyIsIkFycmF5QnVmZmVyIiwiQ3RvciIsImN0b3JTdHJpbmciLCJoYXNQYXRoIiwiaGFzRnVuYyIsIkhBU0hfVU5ERUZJTkVEIiwic3ByZWFkYWJsZVN5bWJvbCIsImlzQ29uY2F0U3ByZWFkYWJsZSIsIm1hc2tTcmNLZXkiLCJhcnJheVByb3RvIiwic3BsaWNlIiwibGFzdEluZGV4IiwicG9wIiwibWVtb2l6ZSIsIk1BWF9NRU1PSVpFX1NJWkUiLCJtZW1vaXplQ2FwcGVkIiwib3ZlckFyZyIsImZyZWVQcm9jZXNzIiwiYmluZGluZyIsInRyYW5zZm9ybSIsImFyZyIsIm5hdGl2ZU1heCIsIm90aGVyQXJncyIsInNob3J0T3V0IiwiSE9UX0NPVU5UIiwiSE9UX1NQQU4iLCJuYXRpdmVOb3ciLCJEYXRlIiwibm93IiwibGFzdENhbGxlZCIsInN0YW1wIiwicGFpcnMiLCJyZUxlYWRpbmdEb3QiLCJyZVByb3BOYW1lIiwicmVFc2NhcGVDaGFyIiwibWF0Y2giLCJxdW90ZSIsImRlZmF1bHRWYWx1ZSIsImlzQXJyYXlMaWtlT2JqZWN0IiwiRlVOQ19FUlJPUl9URVhUIiwicmVzb2x2ZXIiLCJtZW1vaXplZCIsIkNhY2hlIiwidW5pb25CeSIsImFycmF5cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OzsrUUN0Q0E7Ozs7O0FBR0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS0EsS0FBTUEscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsVUFBRCxFQUF1QztBQUFBLE9BQTNCQyxpQkFBMkIsdUVBQVQsSUFBUzs7QUFDaEUsT0FBRyxDQUFDRCxVQUFKLEVBQWU7QUFDYixXQUFNLElBQUlFLEtBQUosQ0FBVSwwQkFBVixDQUFOO0FBQ0QsSUFGRCxNQUVPLElBQUdGLGNBQWMsT0FBT0EsVUFBUCxJQUFxQixRQUF0QyxFQUErQztBQUNwRCxXQUFNLElBQUlHLFNBQUosa0RBQTRESCxVQUE1RCx5Q0FBNERBLFVBQTVELEdBQU47QUFDRDtBQUNESSxVQUFPQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBSTtBQUM5Qyx3QkFBU0MsTUFBVCxDQUNFO0FBQ0EsZUFBUU4sVUFEUjtBQUVBLDBCQUFtQkMsaUJBRm5CO0FBR0EsZ0JBQVM7QUFIVCxPQURGLEVBS0tNLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FMTDtBQU1ELElB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QixTQUFYO0FBQ0Q7QUFDRCxVQUFPbXhCLFNBQVM3RSxZQUFZNEosTUFBWixFQUFvQixDQUFwQixFQUF1Qk4saUJBQXZCLEVBQTBDLElBQTFDLENBQVQsRUFBMEQzRixhQUFhL0QsUUFBYixFQUF1QixDQUF2QixDQUExRCxDQUFQO0FBQ0QsRUFOYSxDQUFkOztBQVFBaHVCLFFBQU9DLE9BQVAsR0FBaUI4M0IsT0FBakIsQyIsImZpbGUiOiJyLXJlYWN0LXZpZGVvLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDlhYmQ2YjllNWUxNTZlYmRkYjMxIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDExLjAxLjIwMTcuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IG1haW5DU1MgZnJvbSAnLi9tYWluLmNzcyc7XG5pbXBvcnQgUmVhY3RWaWRlbyBmcm9tICcuL1JlYWN0VmlkZW8vUmVhY3RWaWRlbyc7XG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gJ3ItcmVwb3J0YWwtYmFzZSc7XG5cbi8qKlxuICogaW5pdGlhbGlzZSBIaXRMaXN0IG9uIERPTUNvbnRlbnRMb2FkZWQgZm9yIGEgcXVpY2tlciBjb2xkLXN0YXJ0LCBubyBuZWVkIHRvIHdhaXQgZm9yIHRoZSBvcmlnaW5hbCBIaXRMaXN0XG4gKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnTmFtZSAtIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHBhc3NlZCB0byBET00gYXMgYSBjb25maWdcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3RodW1ic1BsYWNlaG9sZGVyPXRydWVdIC0gZGlzcGxheSB0aHVtYnMgYXMgaW1hZ2UgcGxhY2Vob2xkZXJzIGluc3RlYWQgb2YgbWVkaWEgaWNvbnNcbiAqICovXG5jb25zdCBsYXVuY2hWaWRlb0hpdGxpc3QgPSAoY29uZmlnTmFtZSx0aHVtYnNQbGFjZWhvbGRlcj10cnVlKSA9PiB7XG4gIGlmKCFjb25maWdOYW1lKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbmZpZyBpcyBub3Qgc3BlY2lmaWVkIScpXG4gIH0gZWxzZSBpZihjb25maWdOYW1lICYmIHR5cGVvZiBjb25maWdOYW1lICE9ICdzdHJpbmcnKXtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBjb25maWcgbmFtZSBtdXN0IGJlIGEgc3RyaW5nLCBub3QgYSAke3R5cGVvZiBjb25maWdOYW1lfWApXG4gIH1cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgPFJlYWN0VmlkZW9cbiAgICAgIGNvbmZpZz17Y29uZmlnTmFtZX1cbiAgICAgIHRodW1ic1BsYWNlaG9sZGVyPXt0aHVtYnNQbGFjZWhvbGRlcn1cbiAgICAgIHZlcmJvc2U9e3RydWV9XG4gICAgICAvPixkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuICB9KTtcbn07XG5cbndpbmRvdy5SZXBvcnRhbCA9IHdpbmRvdy5SZXBvcnRhbCB8fCB7fTtcblJlcG9ydGFsQmFzZS5taXhpbih3aW5kb3cuUmVwb3J0YWwse1xuICBsYXVuY2hWaWRlb0hpdGxpc3Rcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJpbXBvcnQgUHJvbWlzZSBmcm9tICdjb3JlLWpzL2xpYnJhcnkvZXM2L3Byb21pc2UnO1xuXG5jbGFzcyBSZXBvcnRhbEJhc2Uge1xuXG4gIC8qKlxuICAgKiBDb3BpZXMgcHJvcHMgZnJvbSBhIHNvdXJjZSBvYmplY3QgdG8gYSB0YXJnZXQgb2JqZWN0LlxuICAgKlxuICAgKiBOb3RlLCB0aGlzIG1ldGhvZCB1c2VzIGEgc2ltcGxlIGBmb3IuLi5pbmAgc3RyYXRlZ3kgZm9yIGVudW1lcmF0aW5nXG4gICAqIHByb3BlcnRpZXMuICBUbyBlbnN1cmUgb25seSBgb3duUHJvcGVydGllc2AgYXJlIGNvcGllZCBmcm9tIHNvdXJjZVxuICAgKiB0byB0YXJnZXQgYW5kIHRoYXQgYWNjZXNzb3IgaW1wbGVtZW50YXRpb25zIGFyZSBjb3BpZWQsIHVzZSBgZXh0ZW5kYC5cbiAgICpcbiAgICogQG1ldGhvZCBtaXhpblxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRhcmdldCBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFNvdXJjZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGFyZ2V0IG9iamVjdCB0aGF0IHdhcyBwYXNzZWQgYXMgZmlyc3QgYXJndW1lbnQuXG4gICAqL1xuICBzdGF0aWMgbWl4aW4odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBpIGluIHNvdXJjZSkge1xuICAgICAgdGFyZ2V0W2ldID0gc291cmNlW2ldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgc3RhdGljIF9sb2dnZXIobGV2ZWwsIGFyZ3MpIHtcbiAgICAvLyBhY2NlcHQgWydmb28nLCAnYmFyJ10gYW5kIFtbJ2ZvbycsICdiYXInXV1cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgfVxuICAgIC8vIG9ubHkgYWNjZXB0IGxvZ2dpbmcgZnVuY3Rpb25zXG4gICAgc3dpdGNoKGxldmVsKSB7XG4gICAgICBjYXNlICdsb2cnOlxuICAgICAgY2FzZSAnd2Fybic6XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIGNvbnNvbGVbbGV2ZWxdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX2xvZygpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgdGhpcy5fbG9nZ2VyKCdsb2cnLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBfd2FybigpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgdGhpcy5fbG9nZ2VyKCd3YXJuJywgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgX2Vycm9yKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ2Vycm9yJywgYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5hbWVkIGV2ZW50IHdpdGggYG5hbWVgXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybiB7RXZlbnR9IFJldHVybnMgYSBjcmVhdGVkIGV2ZW50XG4gICAqICovXG4gIHN0YXRpYyBuZXdFdmVudChuYW1lKXtcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEluc3BlY3RzIGlmIHRoZSBjdXJyZW50IHN0cmluZyBtaWdodCBiZSBjb252ZXJ0ZWQgdG8gbnVtYmVyIGFuZCByZW5kZXJzIGl0IGFzIG51bWJlci4gSWYgc3RyaW5nIGxlbmd0aCBpcyAwLCByZXR1cm5zIGBudWxsYC4gSWYgbm9uZSBhcHBsaWVzIHJldHVybnMgdGhlIHN0cmluZyBhcyBpcy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIHZhbHVlIG9mIHRoZSBjZWxsIGlmIG5vdCBIVE1MIGNvbnRlbnRzXG4gICAqIEByZXR1cm4ge051bWJlcnxudWxsfFN0cmluZ31cbiAgICogKi9cbiAgc3RhdGljIGlzTnVtYmVyKHN0cil7XG4gICAgaWYoIWlzTmFOKHBhcnNlRmxvYXQoc3RyKSkpe1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLywvaSwnJyk7Ly8gcmVtb3ZlIHVubmVjZXNzYXJ5IGNvbW1hIGFzIGEgZGVsaW1pdGVyIGZvciB0aG91c2FuZHMgZnJvbSBkYXRhLlxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyKTtcbiAgICB9IGVsc2UgaWYoc3RyLmxlbmd0aD09MCl7cmV0dXJuIG51bGx9IGVsc2Uge3JldHVybiBzdHJ9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIFhIUiB3cmFwcGVkIGluIGEgUHJvbWlzZVxuICAgKiBAcGFyYW0geyFTdHJpbmd9IFVSTCAtIHVybCB0byBzZW5kIGEgYEdFVGAgcmVxdWVzdCB0b1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXR1cm5zIGEgdGhlbi1hYmxlIHByb21pc2Ugd2l0aCBgWE1MSHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0YFxuICAgKiAqL1xuICBzdGF0aWMgcHJvbWlzZVJlcXVlc3QoVVJMKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgdHJ5e1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBVUkwsIHRydWUpO1xuICAgICAgICB4aHIub25sb2FkID0gKCk9PntcbiAgICAgICAgICB4aHIuc3RhdHVzID09IDIwMD9cbiAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk6IHJlamVjdCh7Y29kZTp4aHIuc3RhdHVzLCBtZXNzYWdlOnhoci5zdGF0dXNUZXh0fSk7fVxuICAgICAgICB4aHIub25lcnJvciA9IChlcnJvcik9PntyZWplY3QoZXJyb3IpO31cbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSB2YXJpYWJsZSBsaXN0ZWQgaW4gcXVlcnkgc3RyaW5nXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gdmFyaWFibGUgLSB2YXJpYWJsZSBuYW1lIHRvIGdldCB2YWx1ZSBmb3JcbiAgICogQHBhcmFtIHtTdHJpbmc9fSBbcXVlcnk9d2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSldIC0gdGhlIHF1ZXJ5IHN0cmluZyB0byBzZWFyY2ggdmFyaWFibGUgZm9yIGluXG4gICAqIEByZXR1cm4ge1N0cmluZ30gUmV0dXJucyB2YWx1ZSBmb3IgdGhlIHZhcmlhYmxlXG4gICAqICovXG4gIHN0YXRpYyBnZXRRdWVyeVZhcmlhYmxlKHZhcmlhYmxlLHF1ZXJ5PXdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKXtcbiAgICB2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KFwiJlwiKTtcbiAgICBmb3IgKHZhciBpPTA7aTx2YXJzLmxlbmd0aDtpKyspIHtcbiAgICAgIHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICBpZigocGFpclswXSkudG9Mb3dlckNhc2UoKSA9PSB2YXJpYWJsZS50b0xvd2VyQ2FzZSgpKXtyZXR1cm4gcGFpclsxXTt9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIHR1cm5zIGB3aW5kb3cubG9jYXRpb25gIG9iamVjdCBpbnRvIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhcyBuYW1lZCBrZXlzIG5lY2Vzc2FyeSB0byByZWNvbnN0cnVjdCB0aGUgVVJMXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gW2xvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uXSAtIGEgd2luZG93LmxvY2F0aW9uIG9iamVjdCwgYnkgZGVmYXVsdCBvZiB0aGUgaG9zdCB3aW5kb3cgd2hlcmUgdGhlIHNjcmlwdCBpcyBleGVjdXRlZFxuICAgKiBAcmV0dXJucyB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBhIGBsb2NhdGlvbmAgb2JqZWN0XG4gICAqICovXG4gIHN0YXRpYyBsb2NhdGlvbkRlc2VyaWFsaXplKGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uKXtcbiAgICBsZXQgbyA9IHtcbiAgICAgIHBhdGg6IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgcXVlcnk6e31cbiAgICB9O1xuICAgIGxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkuc3BsaXQoLyYvKS5mb3JFYWNoKHBhaXI9PntcbiAgICAgIGxldCBhUGFpcj0gcGFpci5zcGxpdCgvPS8pO1xuICAgICAgby5xdWVyeVthUGFpclswXS50b0xvd2VyQ2FzZSgpXSA9IGFQYWlyWzFdXG4gICAgfSk7XG4gICAgcmV0dXJuIG9cbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJucyBhIGBsb2NhdGlvbmAgb2JqZWN0IChyZXN1bHQgb2YgYGxvY2F0aW9uRGVzZXJpYWxpemVgKSBpbnRvIGEgVVJMXG4gICAqIEBwYXJhbSB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBsb2NhdGlvbiAtIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhbmQgYSB1cmxcbiAgICogQHJldHVybnMge1N0cmluZ30gLSBhIFVSTCBzdHJpbmdcbiAgICogKi9cbiAgc3RhdGljIGxvY2F0aW9uU2VyaWFsaXplKGxvY2F0aW9uKXtcbiAgICBsZXQgcXVlcnk9W107XG4gICAgZm9yKGxldCBrZXkgaW4gbG9jYXRpb24ucXVlcnkpe1xuICAgICAgcXVlcnkucHVzaChba2V5LGxvY2F0aW9uLnF1ZXJ5W2tleV1dLmpvaW4oJz0nKSk7XG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRoICsgJz8nICsgcXVlcnkuam9pbignJicpO1xuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydGFsQmFzZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLXJlcG9ydGFsLWJhc2Uvc3JjL3JlcG9ydGFsLWJhc2UuanMiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAyMy4wMS4yMDE3LlxuICovXG5pbXBvcnQgUmVhY3QsIHtQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIFJlbmRlcnMgYW4gU1ZHIG1hdGVyaWFsIGljb24gaW1wb3J0ZWQgZnJvbSBhbiBpY29uLXNldCBhbmQgcGFzc2VkIHZpYSBwcm9wc1xuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMuaWNvbiAtIGltcG9ydGVkIGljb24gZGVmaW5pdGlvbiAoanN4KVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzLmNoaWxkcmVuIC0gaW1wb3J0ZWQgaWNvbiBkZWZpbml0aW9uIChqc3gpIGlmIHlvdSBwcmVmZXIgdXNpbmcgY2hpbGRyZW4gYW5kIGEgY2xvc2luZyB0YWcgaW4gSlNYIHJhdGhlciB0aGFuIGFuIGljb24gYXR0cmlidXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW3Byb3BzLnNpemU9MjRdIC0gaWNvbiB3aWR0aC9oZWlnaHQgKHdoaWNoIGVxdWFscyBoZWlnaHQgc2luY2UgYWxsIE1EIGljb25zIGhhdmUgc3F1YXJlIHZpZXdib3gpLiBBbnkgb2YgYDE4fDI0fDM2fDQ4YFxuICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5maWxsPSdyZ2JhKDAsMCwwLC44NSknXSAtIGljb24gZmlsbCAtIGFueSB2YWxpZCBjc3MgY29sb3IsIGZpbGxzIHRoZSB3aG9sZSBpY29uXG4gKiAqL1xuZXhwb3J0IGNsYXNzIE1ESWNvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHtmaWxsLHNpemUsaWNvbixjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD17ZmlsbH0gd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGNoaWxkcmVuPXtpY29uIHx8IGNoaWxkcmVufSAvPik7XG4gIH1cbn1cblxuTURJY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogMjQsXG4gIGZpbGw6ICdyZ2JhKDAsMCwwLC44NSknXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9NREljb24vc3JjL01ESWNvbi5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDExLjAxLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQge01ESWNvbn0gZnJvbSAnLi9NREljb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTURJY29uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L01ESWNvbi9zcmMvbWFpbi5qcyIsIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQocmVxdWlyZShcInJlYWN0XCIpKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW1wicmVhY3RcIl0sdCk7ZWxzZXt2YXIgbz10KFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP3JlcXVpcmUoXCJyZWFjdFwiKTplLnJlYWN0KTtmb3IodmFyIHIgaW4gbykoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czplKVtyXT1vW3JdfX0odGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihvW3JdKXJldHVybiBvW3JdLmV4cG9ydHM7dmFyIG49b1tyXT17ZXhwb3J0czp7fSxpZDpyLGxvYWRlZDohMX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sb2FkZWQ9ITAsbi5leHBvcnRzfXZhciBvPXt9O3JldHVybiB0Lm09ZSx0LmM9byx0LnA9XCJcIix0KDApfShbZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fWZ1bmN0aW9uIG4oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGkoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiBhKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG89YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBvKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLHIpJiYoZVtyXT1vW3JdKX1yZXR1cm4gZX0sbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIHI9dFtvXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LG8scil7cmV0dXJuIG8mJmUodC5wcm90b3R5cGUsbyksciYmZSh0LHIpLHR9fSgpLHA9bygxKSx1PXIocCksYz1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpe24odGhpcyx0KTt2YXIgbz1pKHRoaXMsKHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcyxlKSk7cmV0dXJuIG8uX2ltYWdlT25sb2FkPW8uX2ltYWdlT25sb2FkLmJpbmQobyksby5faW1hZ2VPbmVycm9yPW8uX2ltYWdlT25lcnJvci5iaW5kKG8pLG8uc3RhdGU9e3NyYzpcIlwiLHBsYWNlaG9sZGVySGlkZGVuOiFvLnByb3BzLnBsYWNlaG9sZGVyLHNpemluZzpvLnByb3BzLnNpemluZz9vLnByb3BzLnNpemluZzpudWxsLHBvc2l0aW9uOm8ucHJvcHMucG9zaXRpb24/by5wcm9wcy5wb3NpdGlvbjpcImNlbnRlclwiLHByb3BvcnRpb246MCxsb2FkZWQ6ITEsbG9hZGluZzohMSxlcnJvcjohMX0sb31yZXR1cm4gYSh0LGUpLGwodCxbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkKCksdGhpcy5fY29tcHV0ZURpbWVuc2lvbnMoKSx0aGlzLl9jb21wdXRlUHJvcG9ydGlvbih0aGlzLnByb3BzLmFzcGVjdCl9fSx7a2V5OlwiX2NvbXB1dGVEaW1lbnNpb25zXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLHQ9ZS53aWR0aCxvPWUuaGVpZ2h0O3RoaXMuc2V0U3RhdGUoe3dpZHRoOmlzTmFOKHQpP3Q6dCtcInB4XCIsaGVpZ2h0OmlzTmFOKG8pP286bytcInB4XCJ9KX19LHtrZXk6XCJfY29tcHV0ZVByb3BvcnRpb25cIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlJiZlLmluZGV4T2YoXCI6XCIpPi0xKXt2YXIgdD1lLnNwbGl0KFwiOlwiKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlRmxvYXQoZSl9KTtpc05hTih0WzBdKXx8aXNOYU4odFsxXSl8fHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24oZSl7aWYoIWlzTmFOKHBhcnNlRmxvYXQoZS53aWR0aCkpKXJldHVybntwcm9wb3J0aW9uOihwYXJzZUZsb2F0KGUud2lkdGgpKih0WzFdL3RbMF0pKS50b1N0cmluZygpK2Uud2lkdGguc3Vic3RyaW5nKHBhcnNlRmxvYXQoZS53aWR0aCkudG9TdHJpbmcoKS5sZW5ndGgpLGhlaWdodDpcImF1dG9cIn19KX19fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnN0YXRlLHQ9ZS53aWR0aCxvPWUuaGVpZ2h0LHI9ZS5wcm9wb3J0aW9uLG49ZS5zcmMsaT1lLnNpemluZyxhPWUucG9zaXRpb24scz1lLmxvYWRpbmcsbD1lLmxvYWRlZCxwPWUucGxhY2Vob2xkZXJIaWRkZW4sYz10aGlzLnByb3BzLGQ9Yy5wcmVsb2FkLGY9Yy5mYWRlLGg9Yy5wbGFjZWhvbGRlclNpemluZyxnPWMucGxhY2Vob2xkZXIsbT1jLmFsdDtyZXR1cm4gdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiUHJvcG9ydGlvbmFsSW1hZ2VcIixzdHlsZTp7d2lkdGg6dCxoZWlnaHQ6byxwYWRkaW5nVG9wOnJ9fSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJzaXplZEltZ0RpdlwiLHJvbGU6XCJpbWdcIixzdHlsZTp7YmFja2dyb3VuZEltYWdlOlwidXJsKFwiK24rXCIpXCIsYmFja2dyb3VuZFNpemU6aSxiYWNrZ3JvdW5kUG9zaXRpb246YSxiYWNrZ3JvdW5kUmVwZWF0OmkmJlwibm8tcmVwZWF0XCIsZGlzcGxheTppP1wiYmxvY2tcIjpcIm5vbmVcIn19KSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzcmM6bixhbHQ6bSxvbkxvYWQ6dGhpcy5faW1hZ2VPbmxvYWQsb25FcnJvcjp0aGlzLl9pbWFnZU9uZXJyb3Isc3R5bGU6e2Rpc3BsYXk6aT9cIm5vbmVcIjpcImJsb2NrXCJ9fSksdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6e2JhY2tncm91bmRJbWFnZTpcInVybChcIisoISFnJiZnKStcIilcIixiYWNrZ3JvdW5kU2l6ZTpoP2g6aSxiYWNrZ3JvdW5kUG9zaXRpb246YSxiYWNrZ3JvdW5kUmVwZWF0OmkmJlwibm8tcmVwZWF0XCJ9LGNsYXNzTmFtZTpcImltYWdlUGxhY2Vob2xkZXIgXCIrKHAmJlwiaGlkZGVuXCIpK1wiIFwiKyhkJiZmJiYhcyYmbCYmXCJmYWRlZC1vdXRcIil9KSl9fSx7a2V5OlwiX2ltYWdlT25sb2FkXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiExLGxvYWRlZDohMCxlcnJvcjohMX0pfX0se2tleTpcIl9pbWFnZU9uZXJyb3JcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2V0U3RhdGUocyh7fSx0aGlzLl9yZXNldCgpLHtlcnJvcjohMH0pKX19LHtrZXk6XCJfcmVzZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybntzcmM6XCJcIixsb2FkaW5nOiExLGxvYWRlZDohMSxlcnJvcjohMX19fSx7a2V5OlwiX2xvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuX3Jlc2V0KCk7aWYoIXRoaXMucHJvcHMucHJldmVudExvYWQpe3ZhciB0PXRoaXMucHJvcHMuc3JjO2Uuc3JjIT10JiYoZT1zKHt9LGUse3NyYzohIXQmJnQsbG9hZGluZzohIXR9KSl9dGhpcy5zZXRTdGF0ZShlKX19XSksdH0odS5kZWZhdWx0LkNvbXBvbmVudCk7dC5kZWZhdWx0PWN9LGZ1bmN0aW9uKHQsbyl7dC5leHBvcnRzPWV9XSl9KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHJvcG9ydGlvbmFsSW1hZ2UuYnVuZGxlLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vUHJvcG9ydGlvbmFsSW1hZ2UvZGlzdC9Qcm9wb3J0aW9uYWxJbWFnZS5idW5kbGUuanMiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDEwLjAxLjIwMTcuXG4gKi9cbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSBcInItcmVwb3J0YWwtYmFzZVwiO1xuaW1wb3J0IEhpdGxpc3RTZXR1cCBmcm9tIFwiLi9oaXRsaXN0LXNldHVwXCI7XG5cbmNsYXNzIEhpdGxpc3REYXRhc291cmNlIGV4dGVuZHMgSGl0bGlzdFNldHVwe1xuICAvKipcbiAgICogVGhpcyBjbGFzcyBhbGxvd3MgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB3aXRoIHRoZSBIaXRMaXN0IGRhdGFiYXNlIGFuZCB1c2UgdXRpbGl0eSBtZXRob2RzIHRvIHF1ZXJ5IGFuZCBmaWx0ZXIgZGF0YSBwcm92aWRlZCB0aGVyZSdzIGEgaGl0bGlzdCBvbiB0aGUgcGFnZVxuICAgKiBAZXh0ZW5kcyBIaXRsaXN0U2V0dXBcbiAgICogKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucz17fSl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZXM9W107XG4gICAgLyoqIEBwcm9wZXJ0eSB7U3RyaW5nfSBtb2RpZmllciAtIGV4dHJhIHBhcmFtcyBhZGRlZCBhcyBhIHN0cmluZyBmcm9tIGZpbHRlcnMgKi9cbiAgICB0aGlzLm1vZGlmaWVyID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogcGVyZm9ybXMgaW5pdGlhbCBkYXRhIGxvYWRcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgaW5pdGlhbERhdGFMb2FkKCl7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2luaXRpYWxMb2FkOnRydWV9KVxuICB9XG4gIC8qKlxuICAgKiBsb2FkcyBuZXh0IHBhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgbmV4dFBhZ2UoKXtcbiAgICB0aGlzLl9za2lwUGFnZSh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2lzUGFnaW5nOiB0cnVlfSx0aGlzLm1vZGlmaWVyKTtcbiAgfVxuICAvKipcbiAgICogbG9hZHMgcHJldmlvdXMgcGFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgb2YgZGF0YVxuICAgKiAqL1xuICBwcmV2aW91c1BhZ2UoKXtcbiAgICB0aGlzLl9za2lwUGFnZShmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpc1BhZ2luZzogdHJ1ZX0sdGhpcy5tb2RpZmllcik7XG4gIH1cblxuICAvKipcbiAgICogcXVlcmllcyBIaXRMaXN0IEFQSVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiAqL1xuICByZXF1ZXN0UmVzcG9uc2Uob3B0aW9ucyl7XG4gICAgbGV0IHF1ZXJ5PSBSZXBvcnRhbEJhc2UubG9jYXRpb25EZXNlcmlhbGl6ZSgpLnF1ZXJ5O1xuICAgIGlmKHF1ZXJ5ICYmIHF1ZXJ5LnJlcG9ydGlkICYmIHRoaXMuaGl0bGlzdElEKXtcbiAgICAgIC8qc2V0IGNvbW1vbiBwYXJhbXMqL1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgUGFnZUlkOiB0aGlzLnBhZ2VJRCxcbiAgICAgICAgcGFnZVN0YXRlSWQ6IHRoaXMucGFnZVN0YXRlSUQsXG4gICAgICAgIFByZXZpZXc6IHF1ZXJ5LnByZXZpZXdcbiAgICAgIH07XG5cbiAgICAgIC8qaWYgb3B0aW9ucyBhcmUgcGFzc2VkLCBhZGQgb3B0aW9ucyovXG4gICAgICBpZihvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGZvciAobGV0IGF0dHJuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICBwYXJhbXNbYXR0cm5hbWVdID0gdHlwZW9mIG9wdGlvbnNbYXR0cm5hbWVdPT09J2Jvb2xlYW4nPyhvcHRpb25zW2F0dHJuYW1lXT8nMSc6JzAnKTpvcHRpb25zW2F0dHJuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighcGFyYW1zLnNlYXJjaCAmJiB0aGlzLl9zZWFyY2hWYWx1ZXMubGVuZ3RoPjApe1xuICAgICAgICBwYXJhbXMuc2VhcmNoID0gSlNPTi5zdHJpbmdpZnkodGhpcy5fc2VhcmNoVmFsdWVzKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXM7XG5cbiAgICAgIGlmIChzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcyE9bnVsbCAmJiAhaXNOYU4oc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnZU51bWJlcikpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pbml0aWFsTG9hZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdlTnVtYmVyICs9IHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2luZ0ZvcndhcmQgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcGFyYW1zLnNvcnRpbmdQYWdpbmdWYWx1ZXM9SlNPTi5zdHJpbmdpZnkoc29ydGluZ1BhZ2luZ1ZhbHVlcyk7XG5cbiAgICAgIHJldHVybiBSZXBvcnRhbEJhc2UucHJvbWlzZVJlcXVlc3QoYCR7dGhpcy5zZXJ2aWNlVVJMfSYke0hpdGxpc3REYXRhc291cmNlLnNlcmlhbGl6ZVBhcmFtcyhwYXJhbXMpfSR7dGhpcy5tb2RpZmllciE9Jyc/JyYnK3RoaXMubW9kaWZpZXI6Jyd9YClcbiAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PnRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBIaXRMaXN0IEFQSSByZXNwb25zZVxuICAgKiAqL1xuICBwYXJzZVJlc3BvbnNlKHJlc3BvbnNlKXtcbiAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuXG4gICAgdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzID0gcmVzcG9uc2Uuc29ydGluZ1BhZ2luZ1ZhbHVlcztcbiAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIHRoaXMucGFnZUluZm8gPSByZXNwb25zZS5wYWdlSW5mbztcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcGFnaW5nRm9yd2FyZCBpZiBgdHJ1ZWAgZ29lcyBmb3J3YXJkLCBpZiBgbnVsbGAgZ29lcyBiYWNrd2FyZFxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogKi9cbiAgX3NraXBQYWdlKHBhZ2luZ0ZvcndhcmQpe1xuICAgIGxldCBfc3B2ID0gey4uLnRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlc307XG4gICAgbGV0IHB2ID0gey4uLl9zcHYucGFnaW5nVmFsdWVzfSB8fCB7fTtcbiAgICBwdi5wYWdpbmdGb3J3YXJkID0gcGFnaW5nRm9yd2FyZDsgLyppZiBmb3J3YXJkIGlzIG5lZWRlZCB0aGVuIHBhc3MgdHJ1ZSwgZWxzZSBudWxsIC0gYmFja3dhcmQqL1xuICAgIHB2LnN0YXJ0SWQgPSBwYWdpbmdGb3J3YXJkID8gcHYubGFzdFN0YXJ0SWQgOiBwdi5maXJzdFN0YXJ0SWQ7XG4gICAgcHYuc3RhcnRWYWx1ZSA9IHBhZ2luZ0ZvcndhcmQgPyBwdi5sYXN0U3RhcnRWYWx1ZSA6IHB2LmZpcnN0U3RhcnRWYWx1ZTtcbiAgICB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB7XG4gICAgICAuLi50aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMsXG4gICAgICBwYWdpbmdWYWx1ZXM6IHB2XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXJpYWxpemUgcGFyYW1zIGludG8gYSBxdWVyeSBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyAtIGFuIG9iamVjdCB3aXRoIHBhcmFtZXRlcnNcbiAgICogKi9cbiAgc3RhdGljIHNlcmlhbGl6ZVBhcmFtcyhwYXJhbXMpe1xuICAgIGxldCBxdWVyeSA9IFtdO1xuICAgIGZvcihsZXQga2V5IGluIHBhcmFtcyl7XG4gICAgICBxdWVyeS5wdXNoKFtrZXkscGFyYW1zW2tleV1dLmpvaW4oJz0nKSk7XG4gICAgfVxuICAgIHJldHVybiBxdWVyeS5qb2luKCcmJylcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpdGxpc3REYXRhc291cmNlO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3QtZGF0YXNvdXJjZS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMC4wMS4yMDE3LlxuICovXG5cbmNsYXNzIEhpdGxpc3RTZXR1cHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICAvL2ZpeCBmb3Igd2luZG93LmxvY2F0aW9uIG9yaWdpbiwgdGhhbnggSUVcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IEhpdGxpc3RTZXR1cC5nZXRPcmlnaW5hbENvbmZpZygpO1xuICAgIHRoaXMuX2VsZW1lbnRUeXBlID0gd2luZG93LkhpdExpc3RFbGVtZW50VHlwZTtcbiAgICB0aGlzLl9vcCA9IHdpbmRvdy5TZWFyY2hhYmxlTGlzdE9wZXJhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGFsbG93cyBnZXR0aW5nIGEgbG9jYWxpc2VkIHN0cmluZyBpbiB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIHJlcG9ydCBmcm9tIEhpdGxpc3QgY29uZmlnLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gdGhlIGtleSB0byBsb29rIHRoZSBwcm9wZXJ0eSB1cFxuICAgKlxuICAgKiAqIGBzdG9lYDpcIlNtYWxsZXIgdGhhbiBvciBlcXVhbFwiLFxuICAgKiAqIGBndG9lYDpcIkdyZWF0ZXIgdGhhbiBvciBlcXVhbFwiLFxuICAgKiAqIGBiZXR3ZWVuYDpcIkJldHdlZW5cIixcbiAgICogKiBgYmVmb3JlYDpcIkJlZm9yZVwiLFxuICAgKiAqIGBhZnRlcmA6XCJBZnRlclwiLFxuICAgKiAqIGBleGFjdGx5YDpcIkV4YWN0bHlcIixcbiAgICogKiBgc2hvd2RlZmF1bHRjb2xzYDpcIlNob3cgZGVmYXVsdCBjb2x1bW5zXCIsXG4gICAqICogYGFwcGx5YDpcIkFwcGx5XCIsXG4gICAqICogYGNhbmNlbGA6XCJDYW5jZWxcIixcbiAgICogKiBgc2hvd2hpZGVgOlwiU2hvdyAvIEhpZGUgY29sdW1uc1wiLFxuICAgKiAqIGB5ZXNgOlwiWWVzXCIsXG4gICAqICogYG5vYDpcIk5vXCIsXG4gICAqICogYGxvYWRpbmdEYXRhYDpcIkxvYWRpbmcgZGF0YSwgcGxlYXNlIHdhaXQuLi5cIixcIlxuICAgKiAqIGBjaGVja2FsbGA6XCJDaGVjayBhbGxcIixcbiAgICogKiBgdW5jaGVja2FsbGA6XCJVbmNoZWNrIGFsbFwiLFxuICAgKiAqIGBlcnJvckxvYWRpbmdgOlwiRXJyb3IgbG9hZGluZyBkYXRhXCIsXG4gICAqICogYGVycm9yTm9Db2x1bW5zYDpcIk5vIGNvbHVtbnMgc2VsZWN0ZWRcIlxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19SRVNQT05ERU5UT1ZFUlZJRVdgOlwiUmVzcG9uZGVudCBvdmVydmlld1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUklOVGA6XCJQcmludCB0aGUgY3VycmVudCByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX0NMT1NFYDpcIkNsb3NlIHRoaXMgb3ZlcmxheVwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19GSUxURVJgOlwiRmlsdGVyIHF1ZXN0aW9uc1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19OT1RISU5HRk9VTkRgOlwiTm8gcXVlc3Rpb25zIG1hdGNoIHlvdXIgc2VhcmNoXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTYDpcIlByZXZpb3VzXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTSElOVGA6XCJQcmV2aW91cyByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX05FWFRgOlwiTmV4dFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19ORVhUSElOVGA6XCJOZXh0IHJlc3BvbmRlbnRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfT0ZgOlwiezB9IG9mIHsxfVwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19NT1JFYDpcInswfSBtb3JlXCIsXG4gICAqICogUkVQT1JUX1NJTkdMRVZJRVdfQUxURVJOQVRJVkVTYDpcIkFuc3dlcnMgYWx0ZXJuYXRpdmVzOlwiXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqICovXG4gIGkxOG4oa2V5KXtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmNhcHRpb25zLmhhc093blByb3BlcnR5KGtleSk/dGhpcy5fY29uZmlnLmNhcHRpb25zW2tleV06dGhpcy5fY29uZmlnLnNpbmdsZVZpZXdUZXh0cy5oYXNPd25Qcm9wZXJ0eShrZXkpP3RoaXMuX2NvbmZpZy5zaW5nbGVWaWV3VGV4dHNba2V5XTpudWxsXG4gIH1cblxuICBnZXQgZGF0YSgpe3JldHVybiB0aGlzLl9jb25maWcuaGl0bGlzdERhdGF9XG5cbiAgc2V0IGRhdGEoZGF0YSl7XG4gICAgdGhpcy5fY29uZmlnLmhpdGxpc3REYXRhID0gZGF0YTtcbiAgfVxuICBnZXQgZGlzYWJsZU5leHRCdXR0b24oKXtcbiAgICByZXR1cm4gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLmRpc2FibGVOZXh0QnV0dG9uIHx8IGZhbHNlXG4gIH1cbiAgZ2V0IGRpc2FibGVQcmV2QnV0dG9uKCl7XG4gICAgcmV0dXJuIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcy5kaXNhYmxlUHJldkJ1dHRvbiB8fCBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHZpc2libGUgSGl0TGlzdCBjb2x1bW5zIG9mIE9iamVjdCB0eXBlOiBge2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfWBcbiAgICogQHJldHVybnMge0FycmF5Ljx7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9Pn0gUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgdmlzaWJsZSBIaXRMaXN0IGNvbHVtbnNcbiAgICogKi9cbiAgZ2V0IGNvbHVtbnMoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmNvbHVtbnN9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIEhpdExpc3QgY29sdW1ucyBvZiBPYmplY3QgdHlwZTogYHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ31gXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICogKi9cbiAgZ2V0IGFsbENvbHVtbnMoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmFsbENvbHVtbnN9XG5cbiAgZ2V0IGhpdGxpc3RJRCgpe3JldHVybiB0aGlzLl9jb25maWcuY29tcG9uZW50SWR9XG4gIGdldCBwYWdlSUQoKXtyZXR1cm4gdGhpcy5fY29uZmlnLnBhZ2VJZH1cbiAgZ2V0IGxhbmd1YWdlKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5sYW5ndWFnZX1cbiAgZ2V0IHNlcnZpY2VVUkwoKXtyZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3RoaXMuX2NvbmZpZy5zZXJ2aWNlVXJsfWB9XG4gIGdldCBwYWdlU3RhdGVJRCgpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUGFnZVN0YXRlSWQnKT8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1BhZ2VTdGF0ZUlkJykudmFsdWU6dW5kZWZpbmVkfVxuICBnZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcygpe1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlcyE9bnVsbD90aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlczp7fVxuICB9XG4gIHNldCBzb3J0aW5nUGFnaW5nVmFsdWVzKHZhbCl7XG4gICAgdGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB2YWw7XG4gIH1cblxuICBzdGF0aWMgX2ZpeEpzb25EYXRlKGpzb25EYXRlKSB7XG4gICAgaWYgKCEoanNvbkRhdGUgJiYgWSAmJiBZLkxhbmcuaXNGdW5jdGlvbihqc29uRGF0ZS5yZXBsYWNlKSkpIHtyZXR1cm4ganNvbkRhdGU7fVxuICAgIGxldCBjb25zdHIgPSBqc29uRGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeL0RhdGVcXFxcKChbLStdP1xcXFxkKylcXFxcKS8kXCIpLCBcIm5ldyBEYXRlKCQxKVwiKTtcbiAgICBpZiAoY29uc3RyID09IGpzb25EYXRlKSB7cmV0dXJuIGpzb25EYXRlO31cbiAgICByZXR1cm4gZXZhbChjb25zdHIpO1xuICB9XG5cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIGNvbmZpZyBmb3IgYSBIaXRMaXN0IGlmIGl0J3MgaW5pdGlhbGlzZWQgb24gdGhlIHBhZ2VcbiAgICogYGBgXG4gICAqIHtcbiAgICogIGFsbENvbHVtbnM6QXJyYXksXG4gICAqICBjYXB0aW9uczpPYmplY3QsXG4gICAqICBjbGllbnRJZDpTdHJpbmcsXG4gICAqICBjb2x1bW5zOkFycmF5LFxuICAgKiAgY29tcG9uZW50SWQ6U3RyaW5nLFxuICAgKiAgaGFzaGVkUHJvamVjdElkOlN0cmluZyxcbiAgICogIGhpdGxpc3REYXRhOkFycmF5LFxuICAgKiAgbGFuZ3VhZ2U6TnVtYmVyLFxuICAgKiAgbmV4dFRleHQ6U3RyaW5nLFxuICAgKiAgbm9Jbml0aWFsTG9hZDpCb29sZWFuLFxuICAgKiAgcGFnZUFqYXhFbmFibGVkOkJvb2xlYW4sXG4gICAqICBwYWdlSWQ6U3RyaW5nLFxuICAgKiAgcHJldlRleHQ6U3RyaW5nLFxuICAgKiAgcHJldmlldzpCb29sZWFuLFxuICAgKiAgc2VhcmNoSXRlbXM6QXJyYXksXG4gICAqICBzZWFyY2hWYWx1ZXM6QXJyYXksXG4gICAqICBzZXJ2aWNlVXJsOlN0cmluZyxcbiAgICogIHNlcnZpY2VVcmxNZXRhRGF0YTpTdHJpbmcsXG4gICAqICBzaG93U2luZ2xlVmlld09uUm93U2VsZWN0OkJvb2xlYW4sXG4gICAqICBzaW5nbGVWaWV3QXBpVXJsOlN0cmluZyxcbiAgICogIHNpbmdsZVZpZXdGb3Jtc0NodW5rQXBpVXJsOlN0cmluZyxcbiAgICogIHNpbmdsZVZpZXdUZXh0czpPYmplY3QsXG4gICAqICBzb3J0aW5nUGFnaW5nVmFsdWVzOk9iamVjdCxcbiAgICogIHN0eWxlczpPYmplY3QsXG4gICAqICB2ZXJzaW9uOlN0cmluZ1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiAqL1xuICBzdGF0aWMgZ2V0T3JpZ2luYWxDb25maWcoKXtcbiAgICBsZXQgc2NyaXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpO1xuICAgIGlmKHNjcmlwdHMpe1xuICAgICAgbGV0IGk9c2NyaXB0cy5sZW5ndGgsXG4gICAgICAgIGNmZyA9IC8oWVxcLlJlcG9ydGFsXFwuSGl0TGlzdCwpXFxzKC4qPylcXCk7L2dpO1xuICAgICAgd2hpbGUoaS0tKXtcbiAgICAgICAgbGV0IHNjcmlwdCA9IHNjcmlwdHNbaV0udGV4dDtcbiAgICAgICAgaWYoc2NyaXB0LmluZGV4T2YoJ1kuUmVwb3J0YWwuSGl0TGlzdCwnKT4tMSl7XG4gICAgICAgICAgbGV0IGV4ZWMgPSBjZmcuZXhlYyhzY3JpcHQpO1xuICAgICAgICAgIHJldHVybiAoZXhlYyE9bnVsbCAmJiBleGVjWzJdKT8gSlNPTi5wYXJzZShleGVjWzJdKTogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hpdGxpc3QgY29uZmlnIGlzIG5vdCBwcmVzZW50IG9uIHRoZSBwYWdlJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdFNldHVwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LXNldHVwLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMDcuMDkuMjAxNi5cclxuICovXHJcblxyXG5pbXBvcnQgSGl0bGlzdERhdGFzb3VyY2UgZnJvbSBcIi4vaGl0bGlzdC1kYXRhc291cmNlXCI7XHJcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSBcInItcmVwb3J0YWwtYmFzZVwiO1xyXG5cclxud2luZG93LlJlcG9ydGFsID0gd2luZG93LlJlcG9ydGFsIHx8IHt9O1xyXG5SZXBvcnRhbEJhc2UubWl4aW4od2luZG93LlJlcG9ydGFsLHtcclxuICBIaXRsaXN0RGF0YXNvdXJjZVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdERhdGFzb3VyY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL21haW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIFB1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZUdyaWRUaWxlU3R5bGUgZnJvbSAnLi9JbWFnZUdyaWRUaWxlLmNzcyc7XG5pbXBvcnQgSW1nIGZyb20gJ1Byb3BvcnRpb25hbEltYWdlJztcblxuY29uc3QgTUVESUFfVFlQRVMgPSBbJ2ltYWdlJywgJ2F1ZGlvJywgJ3ZpZGVvJ107XG5cbmNsYXNzIEltYWdlR3JpZFRpbGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50e1xuICAvKipcbiAgICogQ3JlYXRlcyBhIHRpbGUgZm9yIGltYWdlIGxpc3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5pbWFnZSAtIGltYWdlIHVybFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMucGxhY2Vob2xkZXIgLSBhIHBsYWNlaG9sZGVyIGltYWdlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlclNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIuIEJ5IGRlZmF1bHQgaXQncyB0aGUgc2FtZSBhcyBmb3IgdGhlIGBzcmNgIGltYWdlLCBidXQgc2V0IHRvIGBpbml0aWFsYCBvciBvdGhlciB2YWxpZCBgYmFja2dyb3VuZC1zaXplYCB2YWx1ZSB0byBvdmVycmlkZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLm1lZGlhdHlwZSAtIGEgZGVmYXVsdCBtZWRpYSBpY29uIGluc3RlYWQgb2YgdGhlIHBsYWNlaG9sZGVyIGltYWdlOiBvbmUgb2YgYGltYWdlYCxgYXVkaW9gLGB2aWRlb2BcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5pY29uQ29sb3I9XCIjY2NjY2NjXCJdIC0gZGVmYXVsdCBwbGFjZWhvbGRlciBtZWRpYSBpY29uIGNvbG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuaWNvblNpemU9NDhdIC0gZGVmYXVsdCBwbGFjZWhvbGRlciBtZWRpYSBpY29uIHNpemVcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5hc3BlY3Q9XCIxNjo5XCJdIC0gYXNwZWN0IHJhdGlvIG9mIHRoZSBpbWFnZSB0byBiZSBpbiB0aGUgdGlsZVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMudGl0bGUgLSB0aXRsZSBvZiB0aGUgdmlkZW9cbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmRlc2NyaXB0aW9uIC0gZGVzY3JpcHRpb24gb2YgdGhlIHZpZGVvXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMuYWN0aW9uSWNvbiAtIGljb24gdG8gZGlzcGxheSBhcyB0aGUgYWN0aW9uIGljb24uIEl0IGFsc28gaGFzIHRvIGhhdmUgYSBjYWxsYmFjayBhdHRhY2hlZCB0byBpdCB3aGVuIHBhc3NlZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMub25TZWxlY3QgLSBjYWxsYmFjayB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSBsaW5rIGlzIGNsaWNrZWRcbiAgICogKi9cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFjdGlvbkJ1dHRvbiA9IG51bGw7XG4gICAgY29uc3Qge2FjdGlvbkljb24sb25TZWxlY3QsYXNwZWN0LHRpdGxlLHBsYWNlaG9sZGVyU2l6aW5nLGltYWdlLGRlc2NyaXB0aW9ufT10aGlzLnByb3BzO1xuICAgIGlmICh0aGlzLnByb3BzLmFjdGlvbkljb24pIHtcbiAgICAgIGFjdGlvbkJ1dHRvbiA9IDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tZWRpdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWFjdGlvbi1pY29uXCI+e2FjdGlvbkljb259PC9kaXY+XG4gICAgICA8L2Rpdj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1jb3ZlclwiIG9uQ2xpY2s9e29uU2VsZWN0fT5cbiAgICAgICAgICA8SW1nXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgYXNwZWN0PXthc3BlY3R9XG4gICAgICAgICAgICBzaXppbmc9XCJjb3ZlclwiXG4gICAgICAgICAgICBwcmVsb2FkPXt0cnVlfVxuICAgICAgICAgICAgZmFkZT17dHJ1ZX1cbiAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5fY29tcHV0ZVRpbGVUeXBlKCl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlclNpemluZz17cGxhY2Vob2xkZXJTaXppbmd9XG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLW1ldGFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tdGl0bGUgZWxsaXBzaXNcIiBvbkNsaWNrPXtvblNlbGVjdH0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1kZXNjcmlwdGlvbiBlbGxpcHNpc1wiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7YWN0aW9uQnV0dG9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9jb21wdXRlVGlsZVR5cGUoKSB7XG4gICAgY29uc3Qge3BsYWNlaG9sZGVyLG1lZGlhdHlwZSxpY29uU2l6ZSxpY29uQ29sb3J9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXBsYWNlaG9sZGVyICYmIG1lZGlhdHlwZSkge1xuICAgICAgaWYgKE1FRElBX1RZUEVTLmluZGV4T2YobWVkaWF0eXBlKSA9PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCB0eXBlIFwiJHttZWRpYXR5cGV9XCIgaXMgc3BlY2lmaWVkYClcbiAgICAgIH1cbiAgICAgIGxldCBpY29uID0gSW1hZ2VHcmlkVGlsZS5pY29uU2VydmVyKG1lZGlhdHlwZSwgaWNvblNpemUsIGljb25Db2xvcik7XG4gICAgICByZXR1cm4gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZXNjYXBlKGljb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpY29uIHdpdGggYSBjb3JyZWN0IGZpbGwgY29sb3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBpY29uIG5hbWUgKG9uZSBvZiBgaW1hZ2VgLCBgdmlkZW9gLCBgYXVkaW9gKVxuICAgKiBAcGFyYW0ge051bWJlcn0gW3NpemU9MjRdIC0gaWNvbiBzaXplIGluIHBpeGVsc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gW2ZpbGw9XCIjY2NjY2NjXCJdIC0gdmFsaWQgQ1NTIGNvbG9yIGRlY2xhcmF0aW9uXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqICovXG4gIHN0YXRpYyBpY29uU2VydmVyKG5hbWUsIHNpemUgPSA0OCwgZmlsbCA9IFwiI2NjY2NjY1wiKSB7XG4gICAgY29uc3QgaWNvbnMgPSB7XG4gICAgICBpbWFnZTogYDxwYXRoIGQ9XCJNMjEgMTlWNWMwLTEuMS0uOS0yLTItMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yek04LjUgMTMuNWwyLjUgMy4wMUwxNC41IDEybDQuNSA2SDVsMy41LTQuNXpcIi8+YCxcbiAgICAgIGF1ZGlvOiBgPHBhdGggZD1cIk0xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnpcIi8+YCxcbiAgICAgIHZpZGVvOiBgPHBhdGggZD1cIk0xOCA0bDIgNGgtM2wtMi00aC0ybDIgNGgtM2wtMi00SDhsMiA0SDdMNSA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRoLTR6XCIvPmBcbiAgICB9O1xuICAgIGlmICghaWNvbnNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaWNvbiBcIiR7bmFtZX1cIiBpcyBub3Qgb24gdGhlIGxpc3RgKVxuICAgIH1cblxuICAgIHJldHVybiBgPHN2ZyBmaWxsPVwiJHtmaWxsfVwiIGhlaWdodD1cIiR7c2l6ZX1cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIke3NpemV9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiR7aWNvbnNbbmFtZV19PC9zdmc+YFxuICB9XG59XG5cbkltYWdlR3JpZFRpbGUucHJvcFR5cGVzID0ge1xuICBpbWFnZSAgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXIgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyU2l6aW5nOiBQcm9wVHlwZXMub25lT2YoWydjb250YWluJywgJ2NvdmVyJywgJ2luaXRpYWwnXSksXG4gIG1lZGlhdHlwZSAgICAgICAgOiBQcm9wVHlwZXMub25lT2YoTUVESUFfVFlQRVMpLFxuICBpY29uQ29sb3IgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvblNpemUgICAgICAgICA6IFByb3BUeXBlcy5udW1iZXIsXG4gIGFzcGVjdCAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZSAgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVzY3JpcHRpb24gICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGlvbkljb24gICAgICAgOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3QgICAgICAgICA6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5JbWFnZUdyaWRUaWxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWNvbkNvbG9yOiBcIiNjY2NjY2NcIixcbiAgaWNvblNpemUgOiA0OCxcbiAgYXNwZWN0ICAgOiBcIjE2OjlcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JpZFRpbGVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbWFnZUdyaWRUaWxlL0ltYWdlR3JpZFRpbGUuanMiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIFB1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZUdyaWRUaWxlIGZyb20gJy4uL0ltYWdlR3JpZFRpbGUvSW1hZ2VHcmlkVGlsZSc7XG5cblxuLyoqXG4gKiBgSW1hZ2VHcmlkYCBpcyBhIHN0YXRlbGVzcyBSZWFjdCBjb21wb25lbnQgdGhhdCBhbGxvd3MgdG8gY29tcHV0ZSBhbiBhcnJheSBvZiBJbWFnZUdyaWRUaWxlcyBmcm9tIGBpdGVtc2AgcGFzc2VkIGluIHByb3BzXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzLml0ZW1zIC0gYW4gYXJyYXkgb2YgaXRlbXMgYHtpZDpOdW1iZXJ8U3RyaW5nLCBpbWFnZTpTdHJpbmcsIG1lZGlhdHlwZTo/U3RyaW5nLCBwbGFjZWhvbGRlcjo/U3RyaW5nLCB0aXRsZTpTdHJpbmcsZGVzY3JpcHRpb246U3RyaW5nfWBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5hc3BlY3QgLSBhc3BlY3QgcmF0aW8gZm9yIHRoZSBJbWFnZUdyaWRUaWxlIGltYWdlXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gcHJvcHMuYWN0aW9uSWNvbiAtIGFjdGlvbiBpY29uIEpTWCB3aXRoIGEgYm91bmQgaGFuZGxlclxuICogQHBhcmFtIHs/U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlclNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIuIEJ5IGRlZmF1bHQgaXQncyB0aGUgc2FtZSBhcyBmb3IgdGhlIGBzcmNgIGltYWdlLCBidXQgc2V0IHRvIGBpbml0aWFsYCBvciBvdGhlciB2YWxpZCBgYmFja2dyb3VuZC1zaXplYCB2YWx1ZSB0byBvdmVycmlkZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLm9uU2VsZWN0IC0gZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZCBvblxuICogQHBhcmFtIHtOdW1iZXJ9IHByb3BzLmR1bW15SXRlbXMgLSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkIG9uXG4gKiAqL1xuY2xhc3MgSW1hZ2VHcmlkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aXRlbXMsZHVtbXlJdGVtcyxhc3BlY3QscGxhY2Vob2xkZXJTaXppbmcsYWN0aW9uSWNvbixvblNlbGVjdH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFwiPlxuICAgICAgICB7XG4gICAgICAgICAgQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoPjAgJiYgaXRlbXMubWFwKChpdGVtLGluZGV4KT0+KFxuICAgICAgICAgICAgPEltYWdlR3JpZFRpbGVcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgIGFzcGVjdD17YXNwZWN0fVxuICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cbiAgICAgICAgICAgICAgbWVkaWF0eXBlPXtpdGVtLm1lZGlhdHlwZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2l0ZW0ucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyU2l6aW5nPXtwbGFjZWhvbGRlclNpemluZ31cbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBhY3Rpb25JY29uPXthY3Rpb25JY29ufVxuICAgICAgICAgICAgICBvblNlbGVjdD17KCk9Pm9uU2VsZWN0LmNhbGwodGhpcyxpdGVtKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgICB7ZHVtbXlJdGVtcyAmJiB0aGlzLnJlbmRlckR1bW15SXRlbXMoZHVtbXlJdGVtcyl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXJEdW1teUl0ZW1zKGNvdW50KXtcbiAgICBjb25zdCBkdW1teUl0ZW1zPVtdO1xuICAgICAgd2hpbGUoY291bnQtLSl7XG4gICAgICAgIGR1bW15SXRlbXMucHVzaCg8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGVcIiBrZXk9e2BkdW1teSR7Y291bnR9YH0vPilcbiAgICAgIH1cbiAgICAgIHJldHVybiBkdW1teUl0ZW1zXG4gIH1cbn1cblxuSW1hZ2VHcmlkLnByb3BUeXBlcz17XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGFzcGVjdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aW9uSWNvbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIHBsYWNlaG9sZGVyU2l6aW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZHVtbXlJdGVtczogUHJvcFR5cGVzLm51bWJlclxufTtcblxuSW1hZ2VHcmlkLmRlZmF1bHRQcm9wcz17XG4gIGR1bW15SXRlbXM6MTJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JpZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbWFnZUdyaWQvSW1hZ2VHcmlkLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDExLjAxLjIwMTcuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2VHcmlkIGZyb20gJy4uL0ltYWdlR3JpZC9JbWFnZUdyaWQnO1xuaW1wb3J0IEhpdGxpc3REUyBmcm9tIFwici1oaXRsaXN0LWRhdGFzb3VyY2VcIjtcbmltcG9ydCBTaW5nbGVWaWV3IGZyb20gXCIuLi9TaW5nbGVWaWV3L1NpbmdsZVZpZXdcIjtcbmltcG9ydCB1bmlvbkJ5IGZyb20gJ2xvZGFzaC91bmlvbkJ5JztcblxuY2xhc3MgUmVhY3RWaWRlbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmNvbmZpZyAtIG5hbWUgb2YgdGhlIGNvbmZpZyB0aGF0IG1hcHMgcXVlc3Rpb24gaWRzIGZyb20gZGF0YSB3aXRoIHRoZSBkYXRhIHR5cGVzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMudGh1bWJzUGxhY2Vob2xkZXIgLSBkaXNwbGF5IHRodW1icyBhcyBpbWFnZSBwbGFjZWhvbGRlcnMgaW5zdGVhZCBvZiBtZWRpYSBpY29uc1xuICAgKlxuICAgKiAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TZWxlY3Q9dGhpcy5vblNlbGVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuRFMgPSBuZXcgSGl0bGlzdERTKCk7XG4gICAgdGhpcy5wcm9wcy52ZXJib3NlICYmIGNvbnNvbGUubG9nKHRoaXMuRFMpO1xuICAgIHRoaXMuc2V0dXBEYXRhTGlzdGVuZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXRlbXM6bnVsbCxcbiAgICAgIGVycm9yOmZhbHNlLFxuICAgICAgc2luZ2xlVmlldzp7XG4gICAgICAgIGxpbms6JydcbiAgICAgIH0sXG4gICAgICBzaW5nbGVWaWV3VmlzaWJsZTpmYWxzZVxuICAgIH07XG4gICAgdGhpcy5yZXR1cm5Ub0dyaWQgPXRoaXMucmV0dXJuVG9HcmlkLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2l0ZW1zLHNpbmdsZVZpZXdWaXNpYmxlLHNpbmdsZVZpZXcsZXJyb3J9PXRoaXMuc3RhdGU7XG4gICAgbGV0IHJlbmRlciA9IG51bGw7XG4gICAgaWYoIWVycm9yICYmIEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCE9MCl7XG4gICAgICByZW5kZXIgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgR3JpZENvbnRhaW5lciAkeyFzaW5nbGVWaWV3VmlzaWJsZSA/ICdHcmlkVmlldyc6Jyd9YH0+XG4gICAgICAgICAgICA8U2luZ2xlVmlld1xuICAgICAgICAgICAgICBsaW5rPXtzaW5nbGVWaWV3Lmxpbmt9XG4gICAgICAgICAgICAgIHZpc2libGU9e3NpbmdsZVZpZXdWaXNpYmxlfVxuICAgICAgICAgICAgICBpbml0aWFsTG9hZD17dHJ1ZX1cbiAgICAgICAgICAgICAgcmV0dXJuVG9HcmlkQWN0aW9uPXt0aGlzLnJldHVyblRvR3JpZH1cbiAgICAgICAgICAgICAgaGVhZGVyVGV4dD17YEVkaXQgdmlkZW8gXCIke3NpbmdsZVZpZXcudGl0bGV9XCJgfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkQ29udGFpbmVyXCIgc3R5bGU9e3tkaXNwbGF5OiAhc2luZ2xlVmlld1Zpc2libGU/ICdibG9jaycgOiAnbm9uZSd9fT5cbiAgICAgICAgICAgIDxJbWFnZUdyaWRcbiAgICAgICAgICAgICAgYXNwZWN0PVwiMTY6OVwiXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0fVxuICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTmF2aWdhdGlvbigpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYodGhpcy5EUyl7XG4gICAgICAgIHJlbmRlciA9IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdyaWRDb250YWluZXIgSW1hZ2VHcmlkXCI+e3RoaXMuZGF0YUxvYWRpbmdNZXNzYWdlKCl9PC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSGl0bGlzdERhdGFzb3VyY2UgaXMgbm90IGF2YWlsYWJsZScpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZW5kZXJcbiAgfVxuXG4gIGRhdGFMb2FkaW5nTWVzc2FnZSgpe1xuICAgIGxldCBtZXNzYWdlO1xuICAgIGNvbnN0IHtpdGVtcyxlcnJvcn0gPSB0aGlzLnN0YXRlO1xuICAgIGlmKGVycm9yKXtcbiAgICAgIG1lc3NhZ2UgPSAnZXJyb3JMb2FkaW5nJ1xuICAgIH0gZWxzZSBpZihBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGg9PTAgKXtcbiAgICAgIG1lc3NhZ2UgPSAnUkVQT1JUX1NJTkdMRVZJRVdfTk9USElOR0ZPVU5EJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgbWVzc2FnZSA9ICdsb2FkaW5nRGF0YSdcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuRFMuaTE4bihtZXNzYWdlKVxuICB9XG5cbiAgcmVuZGVyTmF2aWdhdGlvbigpe1xuICAgIGlmKHRoaXMuY29uZmlnKXtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uO1xuICAgICAgaWYocGFnaW5hdGlvbiA9PT0nY29udGludW91cycpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb250aW51b3VzTmF2aWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5nTmF2aWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHBhZ2luZ05hdmlnYXRpb24oKXtcbiAgICBsZXQgcGFnZUluZm89Jyc7XG4gICAgaWYodGhpcy5EUy5wYWdlSW5mbyAmJiB0aGlzLkRTLnNvcnRpbmdQYWdpbmdWYWx1ZXMgJiYgdGhpcy5EUy5zb3J0aW5nUGFnaW5nVmFsdWVzLnRvdGFsSGl0cyl7XG4gICAgICBwYWdlSW5mbyA9IGAke3RoaXMuRFMucGFnZUluZm99IG9mICR7dGhpcy5EUy5zb3J0aW5nUGFnaW5nVmFsdWVzLnRvdGFsSGl0c31gXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblJvd1wiPlxuICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBhY2NlbnRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvYWRQcmV2aW91c1BhZ2V9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLkRTLmRpc2FibGVQcmV2QnV0dG9ufVxuICAgICAgICA+XG4gICAgICAgICAgIHt0aGlzLkRTLmkxOG4oJ1JFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTJyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gYWNjZW50XCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2FkTmV4dFBhZ2V9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLkRTLmRpc2FibGVOZXh0QnV0dG9ufVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMuRFMuaTE4bignUkVQT1JUX1NJTkdMRVZJRVdfTkVYVCcpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuPntwYWdlSW5mb308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb250aW51b3VzTmF2aWdhdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblJvd1wiIHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInfX0+XG4gICAgICAgICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsQnV0dG9uIGZsYXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvYWRNb3JlfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbn1cbiAgICAgICAgICAgICAgPkxvYWQgbW9yZTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuXG4gIC8qKlxuICAgKiBMYXVuY2hlcyBsaXN0ZW5lciBmb3IgYFkuR2xvYmFsLnJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlYCBldmVudCB3aXRoaW4gWVVJIHdoaWNoIGlzIHRyaWdnZXJlZCBldmVyeSB0aW1lIHRoZSBmaWx0ZXIgcGFuZWwgdXBkYXRlcyBvciBvbiBpbml0aWFsIGxvYWRcbiAgICogKi9cbiAgc2V0dXBEYXRhTGlzdGVuZXIoKXtcbiAgICBpZihZICYmIFkuR2xvYmFsKXtcbiAgICAgIFkuR2xvYmFsLm9uKFwicmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVcIiwgZmlsdGVySW5mbz0+e1xuICAgICAgICB0aGlzLmluaXRpYWxpc2VDb25maWcodGhpcy5wcm9wcy5jb25maWcpO1xuICAgICAgICBpZih0aGlzLkRTICYmIHRoaXMuY29uZmlnKXtcbiAgICAgICAgICB0aGlzLkRTLm1vZGlmaWVyID0gZmlsdGVySW5mbzsgLy8gZmlsdGVyIGluZm9ybWF0aW9uIGFzIGEgbW9kaWZpZXIgZm9yIGRhdGEgZmV0Y2hcbiAgICAgICAgICB0aGlzLkRTLmluaXRpYWxEYXRhTG9hZCgpLnRoZW4ocmVzcG9uc2U9PnRoaXMucHJvY2Vzc0RhdGEocmVzcG9uc2UpKS5jYXRjaCh0aGlzLmhhbmRsZURhdGFMb2FkaW5nRXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWVVJIGlzIG5vdCBkZWZpbmVkIG9yIGFjY2Vzc2libGUsIGNhbm5vdCBzZXQgdXAgYSBcInJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlXCIgbGlzdGVuZXInKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEYXRhTG9hZGluZ0Vycm9yPSgpPT57XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlcnJvcjp0cnVlLFxuICAgICAgaXRlbXM6W11cbiAgICB9KVxuICB9O1xuXG4gIHJldHVyblRvR3JpZCgpe1xuICAgIGNvbnNvbGUubG9nKCd3aWxsIHJldHVybiB0byBncmlkJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2luZ2xlVmlld1Zpc2libGU6ZmFsc2V9KTtcbiAgICB0aGlzLkRTLmluaXRpYWxEYXRhTG9hZCgpLnRoZW4ocmVzcG9uc2U9PnRoaXMucHJvY2Vzc0RhdGEocmVzcG9uc2UsJ21lcmdlJykpLmNhdGNoKHRoaXMuaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XG4gIH1cblxuICBsb2FkTmV4dFBhZ2U9KCk9PntcbiAgICB0aGlzLkRTLm5leHRQYWdlKCkudGhlbihyZXNwb25zZT0+dGhpcy5wcm9jZXNzRGF0YShyZXNwb25zZSkpLmNhdGNoKHRoaXMuaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XG4gIH07XG4gIGxvYWRQcmV2aW91c1BhZ2U9KCk9PntcbiAgICB0aGlzLkRTLnByZXZpb3VzUGFnZSgpLnRoZW4ocmVzcG9uc2U9PnRoaXMucHJvY2Vzc0RhdGEocmVzcG9uc2UpKS5jYXRjaCh0aGlzLmhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xuICB9O1xuICBsb2FkTW9yZT0oKT0+e1xuICAgIHRoaXMuRFMubmV4dFBhZ2UoKS50aGVuKHJlc3BvbnNlPT50aGlzLnByb2Nlc3NEYXRhKHJlc3BvbnNlLCdhcHBlbmQnKSkuY2F0Y2godGhpcy5oYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcbiAgfTtcblxuICBpbml0aWFsaXNlQ29uZmlnKGNvbmZpZ05hbWUpe1xuICAgIGlmKCF0aGlzLmNvbmZpZyl7XG4gICAgICBpZighd2luZG93W2NvbmZpZ05hbWVdKXt0aHJvdyBuZXcgRXJyb3IoJ2NvbmZpZyBpcyBub3QgcGFzc2VkIGZyb20gYmFja2VkJyl9XG4gICAgICB0aGlzLmNvbmZpZyA9IHdpbmRvd1tjb25maWdOYW1lXTtcbiAgICB9XG4gIH1cblxuICBwcm9jZXNzRGF0YShkYXRhLG1vZGU9J3JlcGxhY2UnKXtcbiAgICBsZXQgYyA9IHRoaXMuY29uZmlnLFxuICAgICAgY29uZmlnPXt9O1xuICAgIFsnaWQnLCd0aXRsZScsJ2Rlc2NyaXB0aW9uJywnaW1hZ2UnLCdhdWRpbycsJ3ZpZGVvJywndGFncyddLmZvckVhY2goaXRlbT0+Y29uZmlnW2l0ZW1dPVt0aGlzLmNvbmZpZ1tpdGVtXV0pO1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIGlkOmMuaWQsXG4gICAgICB0aXRsZTpjLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246Yy5kZXNjcmlwdGlvbixcbiAgICAgIGltYWdlOmMuaW1hZ2UsXG4gICAgICBhdWRpbzpjLmF1ZGlvLFxuICAgICAgdmlkZW86Yy52aWRlbyxcbiAgICAgIHRhZ3M6Yy50YWdzLFxuICAgIH07XG4gICAgbGV0IG5ld0RhdGEgPSBkYXRhLm1hcCgoaXRlbSxpbmRleCk9PntcbiAgICAgIGxldCBwYXJzZWREYXRhID17fTtcbiAgICAgIGZvcihsZXQga2V5IGluIGNvbmZpZyl7XG4gICAgICAgIHBhcnNlZERhdGFba2V5XT10aGlzLnByZXBhcmVEYXRhKGl0ZW1bY29uZmlnW2tleV1dLGtleSk7XG4gICAgICAgIC8vIGlmIGltYWdlIC0gd2UgbWlnaHQgd2FudCB0byB1c2UgYSBwbGFjZWhvbGRlciBhcyB0aGUgdGh1bWIsIGFuZCBsb2FkIHRoZSBmdWxsIGltYWdlIGluIGJhY2tncm91bmRcbiAgICAgICAgaWYoa2V5ID09ICdpbWFnZScpe1xuICAgICAgICAgIGlmKHRoaXMucHJvcHMudGh1bWJzUGxhY2Vob2xkZXIpe1xuICAgICAgICAgICAgcGFyc2VkRGF0YVsncGxhY2Vob2xkZXInXSA9IHBhcnNlZERhdGEuaW1hZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcnNlZERhdGEuaW1hZ2UgPSBwYXJzZWREYXRhLmltYWdlLnJlcGxhY2UoL190aHVtYi9naSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBtZWRpYXR5cGUgb3IgYSBwbGFjZWhvbGRlciBpY29uXG4gICAgICAgIGlmKFsndmlkZW8nLCdhdWRpbycsJ2ltYWdlJ10uaW5kZXhPZihrZXkpPi0xICYmIGNvbmZpZ1trZXldKXtcbiAgICAgICAgICBwYXJzZWREYXRhLm1lZGlhdHlwZSA9IGtleVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBnZXQgaWQgZm9yIGtleXNcbiAgICAgIHBhcnNlZERhdGEuaWQgPSBpdGVtLnJlc3BvbnNlaWQ/IGl0ZW0ucmVzcG9uc2VpZCA6IGluZGV4O1xuICAgICAgLy8gY2FsY3VsYXRlIGxpbmsgcGFzc2VkIGFzIGBzbGlua2AgcHJvcGVydHkgaW4gZGF0YVxuICAgICAgaWYoaXRlbS5zbGluayl7XG4gICAgICAgIGxldCBsPWl0ZW0uc2xpbms7XG4gICAgICAgIHBhcnNlZERhdGEubGluayA9ICgvaHJlZj0nKC4rPyknL2dpKS5leGVjKGwpWzFdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcnNlZERhdGE7XG4gICAgfSk7XG5cbiAgICAvL3VwZGF0ZSBzdGF0ZSB3aXRoIHRoZSBuZXcgc2V0IG9mIGRhdGEgb3IgYSBtZXJnZWQgZGF0YVxuICAgIGlmKG1vZGU9PT0ncmVwbGFjZScpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGl0ZW1zOm5ld0RhdGEsXG4gICAgICAgIGVycm9yOmZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYobW9kZT09PSdhcHBlbmQnKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlPT4oe1xuICAgICAgICBpdGVtczpbLi4ucHJldlN0YXRlLml0ZW1zLC4uLm5ld0RhdGFdLFxuICAgICAgICBlcnJvcjpmYWxzZVxuICAgICAgfSkpO1xuICAgIH0gZWxzZSBpZihtb2RlPT09J21lcmdlJyl7XG4gICAgICBjb25zb2xlLmxvZyhtb2RlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlPT4oe1xuICAgICAgICBpdGVtczogdW5pb25CeShuZXdEYXRhLHByZXZTdGF0ZS5pdGVtcywnaWQnKSxcbiAgICAgICAgZXJyb3I6ZmFsc2VcbiAgICAgIH0pKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygn0YXRgNC10L0g0LfQvdCw0LXRgiDRh9GC0L4nKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAqIG1hc3NhZ2UgZGF0YSB0byBmaXQgdGhlIHR5cGUgd2UgZXhwZWN0IHRvIHJlY2VpdmUgaW4gcmVhY3Qgdmlld1xuICAqICovXG4gIHByZXBhcmVEYXRhKGRhdGEsdHlwZSl7XG4gICAgc3dpdGNoKHR5cGUpe1xuICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICBsZXQgcmVzdWx0ID0gKC9zcmM9JyguKz8pJy9naSkuZXhlYyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQgIT1udWxsICYmIHJlc3VsdFsxXT8gcmVzdWx0WzFdIDogdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgICAgcmV0dXJuICEoZGF0YS5pbmRleE9mKCctJyk+LTEgJiYgZGF0YS50cmltKCkubGVuZ3RoPT0xKSA/IGRhdGEudHJpbSgpIDogdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RhZ3MnOiByZXR1cm4gZGF0YSAmJiAoZGF0YS5pbmRleE9mKCcsJyk+LTE/IGRhdGEuc3BsaXQoJywnKSA6IGRhdGEuaW5kZXhPZignLScpPi0xICYmIGRhdGEudHJpbSgpLmxlbmd0aD09MT8gdW5kZWZpbmVkIDogZGF0YS50cmltKCkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdChkYXRhKXtcbiAgICBpZih0aGlzLnByb3BzLnZlcmJvc2Upe1xuICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkIGl0ZW0gZGF0YTpcIixkYXRhKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaW5nbGVWaWV3OmRhdGEsXG4gICAgICBzaW5nbGVWaWV3VmlzaWJsZTp0cnVlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYWN0aW9uSWNvbigpe1xuICAgIHJldHVybiAgPHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3pcIi8+PC9zdmc+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RWaWRlbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFjdFZpZGVvL1JlYWN0VmlkZW8uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTURJY29uIGZyb20gJ01ESWNvbic7XG5pbXBvcnQge2ljX2Fycm93X2JhY2t9IGZyb20gJy4uL2ljb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgc2luZ2xlIHZpZXcgd2hpY2ggaXMgYSBuYXZpZ2F0aW9uIGhlYWRlciBmb2xsb3dlZCBieSBhbiByZW5kZXJJZnJhbWUgdGhhdCBsb2FkcyBleHRlcm5hbCBjb250ZW50IGZyb20gYSBsaW5rXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcm9wcy52aXNpYmxlPWZhbHNlXSAtIHdoZXRoZXIgdGhlIHJlbmRlcklmcmFtZSBpcyB2aXNpYmxlIG9uIGEgcGFnZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByb3BzLmluaXRpYWxMb2FkIC0gd2hldGhlciBpdCdzIHRoZSBmaXJzdCB0aW1lIHRoZSByZW5kZXJJZnJhbWUgbG9hZHMgKG5lY2Vzc2FyeSBmb3IgdGhlIHN1cnZleSwgYmVjYXVzZSBhbiBpbml0aWFsIGxvYWQgaXMgdGhlIGZpcnN0IHRpbWUgdGhlIHN1cnZleSBsb2FkcywgYW5kIHNlY29uZCBsb2FkIGlzIHdoZW4gdGhlIHN1cnZleSBpcyBzdWJtaXR0ZWQpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5saW5rIC0gdGhlIGxpbmsgdG8gYSBwYWdlIHRvIGxvYWQgaW4gYW4gcmVuZGVySWZyYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuaGVhZGVyVGV4dF0gLSB0aGUgdGV4dCB0byBiZSBkaXNwbGF5ZWQgbmV4dCB0byB0aGUgYmFjayBidXR0b24gaW4gdGhlIG5hdiBoZWFkZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMucmV0dXJuVG9HcmlkIC0gdGhlIGNhbGxiYWNrIGV4ZWN1dGVkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gbmF2aWdhdGUgb2ZmIHRoZSBTaW5nbGVWaWV3IHBhZ2UgKGhpdHRpbmcgYmFjayBvciBzdWJtaXQpXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3Byb3BzLmNsb3NlT25TdWJtaXQgPSBmYWxzZV0gLSB0aGUgY2FsbGJhY2sgZXhlY3V0ZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBuYXZpZ2F0ZSBvZmYgdGhlIFNpbmdsZVZpZXcgcGFnZSAoaGl0dGluZyBiYWNrIG9yIHN1Ym1pdClcbiAgICogKi9cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgbGV0IHt2aXNpYmxlLCBsaW5rLCBpbml0aWFsTG9hZD10cnVlfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zdGF0ZSAgICAgICAgICAgICAgICAgICAgICAgPSB7XG4gICAgICB2aXNpYmxlLFxuICAgICAgbGluayxcbiAgICAgIGluaXRpYWxMb2FkLFxuICAgICAgaWZyYW1lVmlzaWJsZTogZmFsc2UsXG4gICAgICBpZnJhbWVIZWlnaHQgOiAnYXV0bycsXG4gICAgfTtcbiAgICB0aGlzLm9uTG9hZCAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMub25Mb2FkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWNlaXZlTWVzc2FnZSAgICAgICAgICAgICAgPSB0aGlzLnJlY2VpdmVNZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMucmVjZWl2ZU1lc3NhZ2UsIGZhbHNlKTtcbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLm1hcFByb3BzVG9TdGF0ZShuZXh0UHJvcHMpXG4gIH1cblxuICBtYXBQcm9wc1RvU3RhdGUocHJvcHMpIHtcbiAgICBsZXQge3Zpc2libGUsIGxpbmssIGluaXRpYWxMb2FkfSA9IHByb3BzO1xuICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgIT0gdmlzaWJsZSB8fCB0aGlzLnByb3BzLmxpbmsgIT0gbGluayB8fCB0aGlzLnByb3BzLmluaXRpYWxMb2FkICE9IGluaXRpYWxMb2FkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsaW5rLCB2aXNpYmxlLCBpbml0aWFsTG9hZH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubWFwUHJvcHNUb1N0YXRlKHRoaXMucHJvcHMpO1xuICB9XG5cbiAgc2V0dXBMaXN0ZW5lcihlKSB7XG4gICAgdGhpcy5oYW5kc2hha2UodGhpcy5pZnJhbWVFbCwgdGhpcy5nZXREb21haW4odGhpcy5zdGF0ZS5saW5rKSlcbiAgfVxuXG4gIG9uTG9hZChlKSB7XG4gICAgaWYodGhpcy5zdGF0ZS5saW5rLmxlbmd0aD4wKXtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmluaXRpYWxMb2FkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZpc2libGUgICAgICA6IHRydWUsXG4gICAgICAgICAgaWZyYW1lVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBpbml0aWFsTG9hZCAgOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vdGhpcy5oYW5kc2hha2UoZS50YXJnZXQsIHRoaXMuZ2V0RG9tYWluKHRoaXMuc3RhdGUubGluaykpO1xuICAgIH1cbiAgfVxuXG4gIGdldERvbWFpbihsaW5rKSB7XG4gICAgcmV0dXJuIGxpbmsgJiYgbGluay5sZW5ndGggPiAwID8gKC8oLis/XFwvXFwvLis/KVxcLy9naSkuZXhlYyhsaW5rKVsxXSA6IG51bGxcbiAgfVxuXG4gIGhhbmRzaGFrZShlbCwgdGFyZ2V0T3JpZ2luKSB7XG4gICAgaWYgKHRhcmdldE9yaWdpbiAhPSBudWxsKSB7XG4gICAgICBsZXQgaWZyYW1lICAgICAgICA9IGVsLmNvbnRlbnRXaW5kb3c7XG4gICAgICB0aGlzLnRhcmdldE9yaWdpbiA9IHRhcmdldE9yaWdpbjtcbiAgICAgIGlmcmFtZS5wb3N0TWVzc2FnZSgnY29ubmVjdCcsIHRhcmdldE9yaWdpbik7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBsZXQgb3JpZ2luID0gZXZlbnQub3JpZ2luIHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQub3JpZ2luOyAvLyBGb3IgQ2hyb21lLCB0aGUgb3JpZ2luIHByb3BlcnR5IGlzIGluIHRoZSBldmVudC5vcmlnaW5hbEV2ZW50IG9iamVjdC5cbiAgICBpZiAob3JpZ2luICE9PSB0aGlzLnRhcmdldE9yaWdpbilyZXR1cm47XG4gICAgaWYgKGV2ZW50LmRhdGEgJiYgZXZlbnQuZGF0YS5hY3Rpb24gJiYgdGhpc1tldmVudC5kYXRhLmFjdGlvbl0pIHtcbiAgICAgIHRoaXNbZXZlbnQuZGF0YS5hY3Rpb25dKGV2ZW50LmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2FjdGlvbiBub3QgZm91bmQgZm9yICcsIGV2ZW50LmRhdGEsIGV2ZW50LmRhdGEuYWN0aW9uLCB0aGlzW2V2ZW50LmRhdGEuYWN0aW9uXSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtsaW5rLCB2aXNpYmxlLGlmcmFtZVZpc2libGV9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3XCIgc3R5bGU9e3tkaXNwbGF5OiB0aGlzLnN0YXRlLnZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0taGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0tYmFjay1idXR0b25cIiB0aXRsZT1cIlJldHVybiB0byB0aGUgbGlzdFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMucmV0dXJuVG9HcmlkQWN0aW9ufT5cbiAgICAgICAgICAgIDxNREljb24gaWNvbj17aWNfYXJyb3dfYmFja30vPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5oZWFkZXJUZXh0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucmVuZGVySWZyYW1lKGxpbmssIHZpc2libGUgPyBpZnJhbWVWaXNpYmxlIDogdmlzaWJsZSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBhbiByZW5kZXJJZnJhbWUgZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbGluayAtIHVybCBvZiB0aGUgcmVuZGVySWZyYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2aXNpYmxlIC0gdmlzaWJpbGl0eSBvZiB0aGUgcmVuZGVySWZyYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBoZWlnaHQgLSBoZWlnaHQgb2YgdGhlIHJlbmRlcklmcmFtZVxuICAgKiAqL1xuICByZW5kZXJJZnJhbWUobGluaywgdmlzaWJsZSkge1xuICAgIHJldHVybiA8aWZyYW1lXG4gICAgICByZWY9e2lmcmFtZSA9PiB7XG4gICAgICAgIHRoaXMuaWZyYW1lRWwgPSBpZnJhbWVcbiAgICAgIH19XG4gICAgICBzcmM9e2xpbmt9XG4gICAgICBvbkxvYWQ9e3RoaXMub25Mb2FkfVxuICAgICAgc3R5bGU9e3tkaXNwbGF5OiB2aXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJ319Lz47XG4gIH1cbn1cblxuU2luZ2xlVmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsb3NlT25TdWJtaXQ6IGZhbHNlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvU2luZ2xlVmlldy5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGljX3N0YXIgPSA8cGF0aCBkPVwiTTEyIDE3LjI3TDE4LjE4IDIxbC0xLjY0LTcuMDNMMjIgOS4yNGwtNy4xOS0uNjFMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxelwiLz47XG5leHBvcnQgY29uc3QgaWNfc3Rhcl9ib3JkZXIgPSA8cGF0aCBkPVwiTTIyIDkuMjRsLTcuMTktLjYyTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMSAxMiAxNy4yNyAxOC4xOCAyMWwtMS42My03LjAzTDIyIDkuMjR6TTEyIDE1LjRsLTMuNzYgMi4yNyAxLTQuMjgtMy4zMi0yLjg4IDQuMzgtLjM4TDEyIDYuMWwxLjcxIDQuMDQgNC4zOC4zOC0zLjMyIDIuODggMSA0LjI4TDEyIDE1LjR6XCIvPjtcbmV4cG9ydCBjb25zdCBpY19hcnJvd19iYWNrID0gPHBhdGggZD1cIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwdi0yelwiLz47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaWNvbnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ltYWdlR3JpZFRpbGUvSW1hZ2VHcmlkVGlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fcm9vdC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TeW1ib2wuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19NYXAuanMiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzS2V5LmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzU3ltYm9sLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TZXQuanMiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ2YXIgYmFzZUlzRXF1YWxEZWVwID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Nhc3RQYXRoLmpzIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc1N0cmljdENvbXBhcmFibGUuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCBmb3Igc291cmNlIHZhbHVlcyBzdWl0YWJsZVxuICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2VxLmpzIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2tleXMuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fSGFzaC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fUHJvbWlzZS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcHBseS5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qcyIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheU1hcC5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0ZsYXR0ZW5hYmxlID0gcmVxdWlyZSgnLi9faXNGbGF0dGVuYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggc3VwcG9ydCBmb3IgcmVzdHJpY3RpbmcgZmxhdHRlbmluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcGFyYW0ge251bWJlcn0gZGVwdGggVGhlIG1heGltdW0gcmVjdXJzaW9uIGRlcHRoLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJlZGljYXRlPWlzRmxhdHRlbmFibGVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1N0cmljdF0gUmVzdHJpY3QgdG8gdmFsdWVzIHRoYXQgcGFzcyBgcHJlZGljYXRlYCBjaGVja3MuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBkZXB0aCwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHByZWRpY2F0ZSB8fCAocHJlZGljYXRlID0gaXNGbGF0dGVuYWJsZSk7XG4gIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChkZXB0aCA+IDAgJiYgcHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBmbGF0dGVuIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmxhdHRlbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlRmxhdHRlbi5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaGFzSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VIYXNJbihvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYga2V5IGluIE9iamVjdChvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VIYXNJbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSGFzSW4uanMiLCJ2YXIgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBiYXNlSXNOYU4gPSByZXF1aXJlKCcuL19iYXNlSXNOYU4nKSxcbiAgICBzdHJpY3RJbmRleE9mID0gcmVxdWlyZSgnLi9fc3RyaWN0SW5kZXhPZicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlXG4gICAgPyBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KVxuICAgIDogYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUlzTmFOLCBmcm9tSW5kZXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmFOO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hTi5qcyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzJyksXG4gICAgYmFzZU1hdGNoZXNQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgcHJvcGVydHkgPSByZXF1aXJlKCcuL3Byb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXRlcmF0ZWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhbiBpdGVyYXRlZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgaXRlcmF0ZWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJdGVyYXRlZSh2YWx1ZSkge1xuICAvLyBEb24ndCBzdG9yZSB0aGUgYHR5cGVvZmAgcmVzdWx0IGluIGEgdmFyaWFibGUgdG8gYXZvaWQgYSBKSVQgYnVnIGluIFNhZmFyaSA5LlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NjAzNCBmb3IgbW9yZSBkZXRhaWxzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKVxuICAgICAgPyBiYXNlTWF0Y2hlc1Byb3BlcnR5KHZhbHVlWzBdLCB2YWx1ZVsxXSlcbiAgICAgIDogYmFzZU1hdGNoZXModmFsdWUpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUl0ZXJhdGVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9fYmFzZUlzTWF0Y2gnKSxcbiAgICBnZXRNYXRjaERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXRjaERhdGEnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKSxcbiAgICBnZXQgPSByZXF1aXJlKCcuL2dldCcpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5RGVlcC5qcyIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBvdmVyUmVzdCA9IHJlcXVpcmUoJy4vX292ZXJSZXN0JyksXG4gICAgc2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19zZXRUb1N0cmluZycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsInZhciBjb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQnKSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTZXRUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVGltZXMuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKSxcbiAgICBjcmVhdGVTZXQgPSByZXF1aXJlKCcuL19jcmVhdGVTZXQnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuaXFCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHNlZW4gPSByZXN1bHQ7XG5cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gIH1cbiAgZWxzZSBpZiAobGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICB2YXIgc2V0ID0gaXRlcmF0ZWUgPyBudWxsIDogY3JlYXRlU2V0KGFycmF5KTtcbiAgICBpZiAoc2V0KSB7XG4gICAgICByZXR1cm4gc2V0VG9BcnJheShzZXQpO1xuICAgIH1cbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgc2VlbiA9IG5ldyBTZXRDYWNoZTtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWVuID0gaXRlcmF0ZWUgPyBbXSA6IHJlc3VsdDtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciBzZWVuSW5kZXggPSBzZWVuLmxlbmd0aDtcbiAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHNlZW4sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgaWYgKHNlZW4gIT09IHJlc3VsdCkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmlxO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2JqZWN0IG9mIGB2YWx1ZXNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBzZXQuXG4gKi9cbnZhciBjcmVhdGVTZXQgPSAhKFNldCAmJiAoMSAvIHNldFRvQXJyYXkobmV3IFNldChbLC0wXSkpWzFdKSA9PSBJTkZJTklUWSkgPyBub29wIDogZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgU2V0KHZhbHVlcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jcmVhdGVTZXQuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGV4aXN0cyBvbiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICBpZiAoIShyZXN1bHQgPSBvYmplY3QgIT0gbnVsbCAmJiBoYXNGdW5jKG9iamVjdCwga2V5KSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgfVxuICBpZiAocmVzdWx0IHx8ICsraW5kZXggIT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBsZW5ndGggPSBvYmplY3QgPT0gbnVsbCA/IDAgOiBvYmplY3QubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNQYXRoLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwcmVhZGFibGVTeW1ib2wgPSBTeW1ib2wgPyBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgZmxhdHRlbmFibGUgYGFyZ3VtZW50c2Agb2JqZWN0IG9yIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZsYXR0ZW5hYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzRmxhdHRlbmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSB8fFxuICAgICEhKHNwcmVhZGFibGVTeW1ib2wgJiYgdmFsdWUgJiYgdmFsdWVbc3ByZWFkYWJsZVN5bWJvbF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRmxhdHRlbmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNGbGF0dGVuYWJsZS5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX292ZXJSZXN0LmpzIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ2YXIgYmFzZVNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVNldFRvU3RyaW5nJyksXG4gICAgc2hvcnRPdXQgPSByZXF1aXJlKCcuL19zaG9ydE91dCcpO1xuXG4vKipcbiAqIFNldHMgdGhlIGB0b1N0cmluZ2AgbWV0aG9kIG9mIGBmdW5jYCB0byByZXR1cm4gYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgc2V0VG9TdHJpbmcgPSBzaG9ydE91dChiYXNlU2V0VG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3J0T3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3Nob3J0T3V0LmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja1NldC5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanMiLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlTGVhZGluZ0RvdCA9IC9eXFwuLyxcbiAgICByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAocmVMZWFkaW5nRG90LnRlc3Qoc3RyaW5nKSkge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCIvKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmV0dXJuIGZyb20gdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbnN0YW50IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IF8udGltZXMoMiwgXy5jb25zdGFudCh7ICdhJzogMSB9KSk7XG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0cyk7XG4gKiAvLyA9PiBbeyAnYSc6IDEgfSwgeyAnYSc6IDEgfV1cbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzWzBdID09PSBvYmplY3RzWzFdKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2NvbnN0YW50LmpzIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9nZXQuanMiLCJ2YXIgYmFzZUhhc0luID0gcmVxdWlyZSgnLi9fYmFzZUhhc0luJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaGFzSW4uanMiLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCIvKipcbiAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmxhc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gbGFzdChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPyBhcnJheVtsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbGFzdC5qcyIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbWVtb2l6ZS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL25vb3AuanMiLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5JyksXG4gICAgYmFzZVByb3BlcnR5RGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eURlZXAnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBhIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiAyIH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiAxIH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmInKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLm1hcChfLnNvcnRCeShvYmplY3RzLCBfLnByb3BlcnR5KFsnYScsICdiJ10pKSwgJ2EuYicpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHRvS2V5KHBhdGgpKSA6IGJhc2VQcm9wZXJ0eURlZXAocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9wcm9wZXJ0eS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ2YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4vbGFzdCcpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8udW5pb25gIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGl0ZXJhdGVlYCB3aGljaCBpc1xuICogaW52b2tlZCBmb3IgZWFjaCBlbGVtZW50IG9mIGVhY2ggYGFycmF5c2AgdG8gZ2VuZXJhdGUgdGhlIGNyaXRlcmlvbiBieVxuICogd2hpY2ggdW5pcXVlbmVzcyBpcyBjb21wdXRlZC4gUmVzdWx0IHZhbHVlcyBhcmUgY2hvc2VuIGZyb20gdGhlIGZpcnN0XG4gKiBhcnJheSBpbiB3aGljaCB0aGUgdmFsdWUgb2NjdXJzLiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDpcbiAqICh2YWx1ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0gey4uLkFycmF5fSBbYXJyYXlzXSBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBjb21iaW5lZCB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udW5pb25CeShbMi4xXSwgWzEuMiwgMi4zXSwgTWF0aC5mbG9vcik7XG4gKiAvLyA9PiBbMi4xLCAxLjJdXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLnVuaW9uQnkoW3sgJ3gnOiAxIH1dLCBbeyAneCc6IDIgfSwgeyAneCc6IDEgfV0sICd4Jyk7XG4gKiAvLyA9PiBbeyAneCc6IDEgfSwgeyAneCc6IDIgfV1cbiAqL1xudmFyIHVuaW9uQnkgPSBiYXNlUmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgdmFyIGl0ZXJhdGVlID0gbGFzdChhcnJheXMpO1xuICBpZiAoaXNBcnJheUxpa2VPYmplY3QoaXRlcmF0ZWUpKSB7XG4gICAgaXRlcmF0ZWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGJhc2VVbmlxKGJhc2VGbGF0dGVuKGFycmF5cywgMSwgaXNBcnJheUxpa2VPYmplY3QsIHRydWUpLCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDIpKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaW9uQnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC91bmlvbkJ5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==