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
	
	var _reactDom = __webpack_require__(80);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _main = __webpack_require__(79);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _ReactVideo = __webpack_require__(75);
	
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

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProportionalImage = function (_React$Component) {
	  _inherits(ProportionalImage, _React$Component);
	
	  /**
	   * `ProportionalImage` is an element for displaying an image that provides useful sizing and preloading options not found on the standard `<img>` tag.
	   * The `sizing` option allows the image to be either cropped (`cover`) or letterboxed (`contain`) to fill a fixed user-size placed on the element.
	   * The `preload` option prevents the browser from rendering the image until the image is fully loaded.
	   * In the interim, either the element's CSS `background-color` can be be used as the placeholder, or the `placeholder` property can be set to a URL (preferably a data-URI, for instant rendering) for a placeholder image.
	   * The `fade` option (only valid when `preload` is set) will cause the placeholder image/color to be faded out once the image is rendered.
	   *
	   * Examples:
	   * Basically identical to `<img src="...">` tag:
	   * ```
	   * <ProportionalImage width="200" height="200" src="http://lorempixel.com/400/400" />
	   * ```
	   * Will letterbox the image to fit and use styles rather than the attributes to set height and width:
	   * ```
	   * <ProportionalImage style={{width:'400px', height:'400px'}} sizing="contain" src="http://lorempixel.com/600/400" />
	   * ```
	   * Will crop the image to fit:
	   * ```
	   * <ProportionalImage style={{width:'400px', height:'400px'}} sizing="cover" src="http://lorempixel.com/600/400" />
	   * ```
	   * Will show light-gray background until the image loads:
	   * ```
	   * <ProportionalImage style={{width:'400px', height:'400px', backgroundColor: 'lightgray'}} sizing="cover" preload="true" src="http://lorempixel.com/600/400" />
	   * ```
	   * Will show a base-64 encoded placeholder image until the image loads:
	   * ```
	   * <ProportionalImage style={{width:'400px', height:'400px'}} placeholder="data:image/gif;base64,..." sizing="cover" preload="true" src="http://lorempixel.com/600/400" />
	   * ```
	   * Will fade the light-gray background out once the image is loaded:
	   * ```
	   * <ProportionalImage style={{width:'400px', height:'400px', backgroundColor: 'lightgray'}} sizing="cover" preload="true" fade="true" src="http://lorempixel.com/600/400" />
	   * ```
	   * Will disregard the height, because the aspect is provided, and reduce the image height to be in 16:9 ratio. Specifying height in this case is not necessary
	   * ```
	   * <ProportionalImage aspect="16:9" style={{width:'400px', height:'400px', backgroundColor: 'lightgray'}} sizing="cover" preload="true" fade="true" src="http://lorempixel.com/600/400" />
	   * ```
	   * If you don't want to stretch a placeholder, but display it in its natural size even if the main image uses `sizing`, feel free to use a PostCSS mixin `--ProportionalImage-placeholder` to restyle it:
	   * ```css
	   * :root{
	   *  --ProportionalImage-placeholder: {
	   *    background-color: #f0f2f5;
	   *    background-size: auto !important;
	   *  };
	   * }
	   * ```
	   *
	   * @param {Object} props
	   * @param {String} props.src - The URL of an image.
	   * @param {String} props.alt - A short text alternative for the image.
	   * @param {Boolean} props.preventLoad - When true, the image is prevented from loading and any placeholder is shown.  This may be useful when a binding to the src property is known to be invalid, to prevent 404 requests.
	   * @param {String} props.sizing - Sets a sizing option for the image.  Valid values are `contain` (full aspect ratio of the image is contained within the element and letterboxed) or `cover` (image is cropped in order to fully cover the bounds of the element), or `null` (default: image takes natural size). Make sure you specify `height` and `width` if you use anything other thant `none` for `sizing`
	   * @param {String} props.position - When a sizing option is used (`cover` or `contain`), this determines how the image is aligned within the element bounds.
	   * @param {Boolean} props.preload - When `true`, any change to the `src` property will cause the `placeholder` image to be shown until the new image has loaded.
	   * @param {Boolean} props.fade - When `preload` is true, setting `fade` to true will cause the image to fade into place.
	   * @param {String} props.placeholder - This image will be used as a background/placeholder until the src image has loaded. Use of a data-URI for placeholder is encouraged for instant rendering.
	   * @param {String} props.placeholderSizing - Sets a sizing option for the placeholder. By default it's the same as for the `src` image, but set to `initial` or other valid `background-size` value to override.
	   * @param {String} props.width - Can be used to set the width of image (e.g. via binding); size may also be set via CSS.
	   * @param {String} props.height - Can be used to set the height of image (e.g. via binding); size may also be set via CSS.
	   * @param {String} props.aspect - Specify the aspect ratio to maintain, two numbers separated by semicolon(e.g. `16:9`). Make sure that the container for the image can resize vertically/ has enough space for it
	   * */
	  function ProportionalImage(props) {
	    _classCallCheck(this, ProportionalImage);
	
	    var _this = _possibleConstructorReturn(this, (ProportionalImage.__proto__ || Object.getPrototypeOf(ProportionalImage)).call(this, props));
	
	    _this._imageOnload = _this._imageOnload.bind(_this);
	    _this._imageOnerror = _this._imageOnerror.bind(_this);
	    _this.state = {
	      src: '',
	      placeholderHidden: !!!_this.props.placeholder,
	      sizing: _this.props.sizing ? _this.props.sizing : null,
	      position: _this.props.position ? _this.props.position : 'center',
	      proportion: 0,
	      loaded: false, //true when the image is loaded.
	      loading: false, //tracks the loading state of the image when the `preload` option is used.
	      error: false //indicates that the last set `src` failed to load.
	    };
	    return _this;
	  }
	
	  _createClass(ProportionalImage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._load();
	      this._computeDimensions();
	      this._computeProportion(this.props.aspect);
	    }
	  }, {
	    key: '_computeDimensions',
	    value: function _computeDimensions() {
	      var _props = this.props,
	          width = _props.width,
	          height = _props.height;
	
	      this.setState({
	        width: isNaN(width) ? width : width + 'px',
	        height: isNaN(height) ? height : height + 'px'
	      });
	    }
	    /**
	     * Computes aspect ratio of the image
	     * */
	
	  }, {
	    key: '_computeProportion',
	    value: function _computeProportion(aspect) {
	      if (aspect) {
	        if (aspect.indexOf(':') > -1) {
	          var parts = aspect.split(':').map(function (part) {
	            return parseFloat(part);
	          });
	
	          if (!isNaN(parts[0]) && !isNaN(parts[1])) {
	            this.setState(function (prevState) {
	              if (!isNaN(parseFloat(prevState.width))) {
	                return {
	                  proportion: (parseFloat(prevState.width) * (parts[1] / parts[0])).toString() + prevState.width.substring(parseFloat(prevState.width).toString().length),
	                  height: 'auto'
	                };
	              } else {
	                //throw new TypeError('Width in ProportionalImage has to be either in pixels or in percent')
	              }
	            });
	          }
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          width = _state.width,
	          height = _state.height,
	          proportion = _state.proportion,
	          src = _state.src,
	          sizing = _state.sizing,
	          position = _state.position,
	          loading = _state.loading,
	          loaded = _state.loaded,
	          placeholderHidden = _state.placeholderHidden,
	          _props2 = this.props,
	          preload = _props2.preload,
	          fade = _props2.fade,
	          placeholderSizing = _props2.placeholderSizing,
	          placeholder = _props2.placeholder,
	          alt = _props2.alt;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'ProportionalImage',
	          style: {
	            width: width,
	            height: height,
	            paddingTop: proportion
	          } },
	        _react2.default.createElement('div', { className: 'sizedImgDiv',
	          role: 'img',
	          style: {
	            backgroundImage: 'url(' + src + ')',
	            backgroundSize: sizing,
	            backgroundPosition: position,
	            backgroundRepeat: sizing && 'no-repeat',
	            display: sizing ? 'block' : 'none'
	          }
	        }),
	        _react2.default.createElement('img', {
	          src: src,
	          alt: alt,
	          onLoad: this._imageOnload,
	          onError: this._imageOnerror,
	          style: {
	            display: sizing ? 'none' : 'block'
	          }
	        }),
	        _react2.default.createElement('div', {
	          style: {
	            backgroundImage: 'url(' + (!!placeholder && placeholder) + ')',
	            backgroundSize: !placeholderSizing ? sizing : placeholderSizing,
	            backgroundPosition: position,
	            backgroundRepeat: sizing && 'no-repeat'
	          },
	          className: 'imagePlaceholder ' + (placeholderHidden && 'hidden') + ' ' + (preload && fade && !loading && loaded && 'faded-out') })
	      );
	    }
	  }, {
	    key: '_imageOnload',
	    value: function _imageOnload() {
	      this.setState({
	        loading: false,
	        loaded: true,
	        //placeholderHidden:true,
	        error: false
	      });
	    }
	  }, {
	    key: '_imageOnerror',
	    value: function _imageOnerror() {
	      this.setState(_extends({}, this._reset(), { error: true }));
	    }
	  }, {
	    key: '_reset',
	    value: function _reset() {
	      return {
	        src: '',
	        loading: false,
	        loaded: false,
	        error: false
	      };
	    }
	  }, {
	    key: '_load',
	    value: function _load() {
	      var state = this._reset();
	      if (!this.props.preventLoad) {
	        var src = this.props.src;
	        if (state.src != src) {
	          state = _extends({}, state, {
	            src: !!src && src,
	            loading: !!src
	          });
	        }
	      }
	      this.setState(state);
	    }
	  }]);
	
	  return ProportionalImage;
	}(_react2.default.Component);
	
	exports.default = ProportionalImage;
	module.exports = exports['default'];

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGridTile = __webpack_require__(78);
	
	var _ImageGridTile2 = _interopRequireDefault(_ImageGridTile);
	
	var _ProportionalImage = __webpack_require__(36);
	
	var _ProportionalImage2 = _interopRequireDefault(_ProportionalImage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ImageGridTile = function (_React$Component) {
	  _inherits(ImageGridTile, _React$Component);
	
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
	  function ImageGridTile(props) {
	    _classCallCheck(this, ImageGridTile);
	
	    return _possibleConstructorReturn(this, (ImageGridTile.__proto__ || Object.getPrototypeOf(ImageGridTile)).call(this, props));
	  }
	
	  _createClass(ImageGridTile, [{
	    key: 'render',
	    value: function render() {
	      var actionButton = null;
	      if (this.props.actionIcon) {
	        actionButton = _react2.default.createElement(
	          'div',
	          { className: 'ImageGridTile--edit' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ImageGridTile--action-icon' },
	            this.props.actionIcon
	          )
	        );
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'ImageGridTile' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ImageGridTile--cover', onClick: this.props.onSelect },
	          _react2.default.createElement(_ProportionalImage2.default, {
	            width: '100%',
	            aspect: this.props.aspect,
	            sizing: 'cover',
	            preload: true,
	            fade: true,
	            alt: this.props.title,
	            placeholder: this._computeTileType(),
	            placeholderSizing: this.props.placeholderSizing,
	            src: this.props.image
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
	              { className: 'ImageGridTile--title ellipsis', onClick: this.props.onSelect },
	              this.props.title
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'ImageGridTile--description ellipsis' },
	              this.props.description
	            )
	          ),
	          actionButton
	        )
	      );
	    }
	  }, {
	    key: '_computeTileType',
	    value: function _computeTileType() {
	      if (!this.props.placeholder && this.props.mediatype) {
	        var types = ['image', 'audio', 'video'];
	        if (types.indexOf(this.props.mediatype) == -1) {
	          throw new Error('Unrecognized type "' + this.props.mediatype + '" is specified');
	        }
	        var icon = this.constructor.iconServer(this.props.mediatype, this.props.iconSize, this.props.iconColor);
	        return 'data:image/svg+xml,' + escape(icon);
	      } else {
	        return this.props.placeholder;
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
	}(_react2.default.Component);
	
	exports.default = ImageGridTile;
	module.exports = exports['default'];

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
	 * @param {Array} props.aspect - aspect ratio for the ImageGridTile image
	 * @param {JSX} props.actionIcon - action icon JSX with a bound handler
	 * @param {?String} props.placeholderSizing - Sets a sizing option for the placeholder. By default it's the same as for the `src` image, but set to `initial` or other valid `background-size` value to override.
	 * @param {Function} props.onSelect - function that is executed when an item is clicked on
	 * @param {Number} props.dummyItems - function that is executed when an item is clicked on
	 * */
	var ImageGrid = function (_React$Component) {
	  _inherits(ImageGrid, _React$Component);
	
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
	        dummyItems.push(_react2.default.createElement('div', { className: 'ImageGridTile' }));
	      }
	      return dummyItems;
	    }
	  }]);
	
	  return ImageGrid;
	}(_react2.default.Component);
	
	ImageGrid.defaultProps = {
	  dummyItems: 12
	};
	
	exports.default = ImageGrid;
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
	
	var _ImageGrid = __webpack_require__(74);
	
	var _ImageGrid2 = _interopRequireDefault(_ImageGrid);
	
	var _rHitlistDatasource = __webpack_require__(72);
	
	var _rHitlistDatasource2 = _interopRequireDefault(_rHitlistDatasource);
	
	var _SingleView = __webpack_require__(76);
	
	var _SingleView2 = _interopRequireDefault(_SingleView);
	
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
	
	    _this.loadNextPage = function () {
	      _this.DS.nextPage().then(function (response) {
	        return _this.processData(response);
	      });
	    };
	
	    _this.loadPreviousPage = function () {
	      _this.DS.previousPage().then(function (response) {
	        return _this.processData(response);
	      });
	    };
	
	    _this.loadMore = function () {
	      _this.DS.nextPage().then(function (response) {
	        return _this.processData(response, 'append');
	      });
	    };
	
	    _this.onSelect = _this.onSelect.bind(_this);
	    _this.DS = new _rHitlistDatasource2.default();
	    _this.props.verbose && console.log(_this.DS);
	    _this.setupDataListener();
	    _this.state = {
	      items: null,
	      singleView: {
	        link: ''
	      },
	      singleViewVisible: false
	    };
	    _this.backCallback = _this.backCallback.bind(_this);
	    return _this;
	  }
	
	  _createClass(ReactVideo, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          items = _state.items,
	          singleViewVisible = _state.singleViewVisible,
	          singleView = _state.singleView;
	
	      var render = null;
	      if (Array.isArray(items) && items.length != 0) {
	        render = _react2.default.createElement(
	          'div',
	          { className: 'GridContainer ' + (!singleViewVisible ? 'GridView' : '') },
	          _react2.default.createElement(_SingleView2.default, {
	            link: singleView.link,
	            visible: singleViewVisible,
	            initialLoad: true,
	            backCallback: this.backCallback,
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
	            this.DS.i18n(Array.isArray(items) && items.length == 0 ? 'REPORT_SINGLEVIEW_NOTHINGFOUND' : 'loadingData')
	          );
	        } else {
	          throw new Error('HitlistDatasource is not available');
	        }
	      }
	      return render;
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
	      console.log(this.DS.pageInfo, this.DS.sortingPagingValues);
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
	  }, {
	    key: 'backCallback',
	    value: function backCallback() {
	      var _this2 = this;
	
	      this.setState({ singleViewVisible: false });
	      this.DS.initialDataLoad().then(function (response) {
	        return _this2.processData(response);
	      });
	    }
	
	    /**
	     * Launches listener for `Y.Global.reportcontroller:viewModeDataUpdate` event within YUI which is triggered every time the filter panel updates or on initial load
	     * */
	
	  }, {
	    key: 'setupDataListener',
	    value: function setupDataListener() {
	      var _this3 = this;
	
	      if (Y && Y.Global) {
	        Y.Global.on("reportcontroller:viewModeDataUpdate", function (filterInfo) {
	          _this3.initialiseConfig(_this3.props.config);
	          if (_this3.DS && _this3.config) {
	            _this3.DS.modifier = filterInfo; // filter information as a modifier for data fetch
	            _this3.DS.initialDataLoad().then(function (response) {
	              return _this3.processData(response);
	            });
	          }
	        });
	      } else {
	        throw new Error('YUI is not defined or accessible, cannot set up a "reportcontroller:viewModeDataUpdate" listener');
	      }
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
	      if (mode === 'replace') this.setState({ items: newData });
	      if (mode === 'append') this.setState(function (prevState) {
	        return { items: [].concat(_toConsumableArray(prevState.items), _toConsumableArray(newData)) };
	      });
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
/* 76 */
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
	
	var _icons = __webpack_require__(77);
	
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
	   * @param {Function} props.backCallback - the callback executed when the user wants to navigate off the SingleView page (hitting back or submit)
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
	            { className: 'SingleView--back-button', title: 'Return to the list', onClick: this.props.backCallback },
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
/* 77 */
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
/* 78 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 79 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGNiMDJmNjdkZTlhZWFjMmUwZDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLXJlcG9ydGFsLWJhc2Uvc3JjL3JlcG9ydGFsLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vTURJY29uL3NyYy9NREljb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9NREljb24vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3QtZGF0YXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LXNldHVwLmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlR3JpZFRpbGUvSW1hZ2VHcmlkVGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VHcmlkL0ltYWdlR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RWaWRlby9SZWFjdFZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9TaW5nbGVWaWV3L1NpbmdsZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWRUaWxlL0ltYWdlR3JpZFRpbGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbImxhdW5jaFZpZGVvSGl0bGlzdCIsImNvbmZpZ05hbWUiLCJ0aHVtYnNQbGFjZWhvbGRlciIsIkVycm9yIiwiVHlwZUVycm9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXBvcnRhbCIsIm1peGluIiwic3RvcmUiLCJyZXF1aXJlIiwidWlkIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJnbG9iYWwiLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwiaXNPYmplY3QiLCJpdCIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsImtleSIsInZhbHVlIiwiZiIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJhRnVuY3Rpb24iLCJmbiIsInRoYXQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJiIiwiYyIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJPIiwiUCIsIkF0dHJpYnV0ZXMiLCJlIiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiZGVmIiwiaGFzIiwiVEFHIiwidGFnIiwic3RhdCIsInByb3RvdHlwZSIsImNvbmZpZ3VyYWJsZSIsInNoYXJlZCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiSU9iamVjdCIsImRlZmluZWQiLCJSZXBvcnRhbEJhc2UiLCJ0YXJnZXQiLCJzb3VyY2UiLCJpIiwibGV2ZWwiLCJhcmdzIiwiQXJyYXkiLCJpc0FycmF5IiwiY29uc29sZSIsIl9sb2dnZXIiLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50Iiwic3RyIiwicGFyc2VGbG9hdCIsInJlcGxhY2UiLCJVUkwiLCJyZXNvbHZlIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZW5kIiwidmFyaWFibGUiLCJxdWVyeSIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwidmFycyIsInNwbGl0IiwicGFpciIsInRvTG93ZXJDYXNlIiwibyIsInBhdGgiLCJvcmlnaW4iLCJwYXRobmFtZSIsImZvckVhY2giLCJhUGFpciIsInB1c2giLCJqb2luIiwiY29mIiwiQVJHIiwidHJ5R2V0IiwiVCIsIkIiLCJjYWxsZWUiLCJjdHgiLCJoaWRlIiwiUFJPVE9UWVBFIiwiJGV4cG9ydCIsInR5cGUiLCJJU19GT1JDRUQiLCJGIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIlMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJJU19XUkFQIiwiVyIsImV4cFByb3RvIiwib3duIiwib3V0IiwiQyIsInZpcnR1YWwiLCJSIiwiVSIsImV4ZWMiLCJkb2N1bWVudEVsZW1lbnQiLCJMSUJSQVJZIiwicmVkZWZpbmUiLCJJdGVyYXRvcnMiLCIkaXRlckNyZWF0ZSIsInNldFRvU3RyaW5nVGFnIiwiZ2V0UHJvdG90eXBlT2YiLCJJVEVSQVRPUiIsIkJVR0dZIiwia2V5cyIsIkZGX0lURVJBVE9SIiwiS0VZUyIsIlZBTFVFUyIsInJldHVyblRoaXMiLCJCYXNlIiwiTkFNRSIsIkNvbnN0cnVjdG9yIiwibmV4dCIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJraW5kIiwicHJvdG8iLCJ2YWx1ZXMiLCJlbnRyaWVzIiwiREVGX1ZBTFVFUyIsIlZBTFVFU19CVUciLCIkbmF0aXZlIiwiJGRlZmF1bHQiLCIkZW50cmllcyIsIiRhbnlOYXRpdmUiLCJtZXRob2RzIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJiaXRtYXAiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJTSEFSRUQiLCJpbnZva2UiLCJodG1sIiwiY2VsIiwicHJvY2VzcyIsInNldFRhc2siLCJzZXRJbW1lZGlhdGUiLCJjbGVhclRhc2siLCJjbGVhckltbWVkaWF0ZSIsIk1lc3NhZ2VDaGFubmVsIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImlkIiwibGlzdGVuZXIiLCJkYXRhIiwibmV4dFRpY2siLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsInNldFRpbWVvdXQiLCJzZXQiLCJjbGVhciIsInRvSW50ZWdlciIsIm1pbiIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwiTURJY29uIiwicHJvcHMiLCJmaWxsIiwic2l6ZSIsImljb24iLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsIlByb3BvcnRpb25hbEltYWdlIiwiX2ltYWdlT25sb2FkIiwiYmluZCIsIl9pbWFnZU9uZXJyb3IiLCJzdGF0ZSIsInNyYyIsInBsYWNlaG9sZGVySGlkZGVuIiwicGxhY2Vob2xkZXIiLCJzaXppbmciLCJwb3NpdGlvbiIsInByb3BvcnRpb24iLCJsb2FkZWQiLCJsb2FkaW5nIiwiZXJyb3IiLCJfbG9hZCIsIl9jb21wdXRlRGltZW5zaW9ucyIsIl9jb21wdXRlUHJvcG9ydGlvbiIsImFzcGVjdCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0U3RhdGUiLCJpbmRleE9mIiwicGFydHMiLCJtYXAiLCJwYXJ0IiwicHJldlN0YXRlIiwicHJlbG9hZCIsImZhZGUiLCJwbGFjZWhvbGRlclNpemluZyIsImFsdCIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJkaXNwbGF5IiwiX3Jlc2V0IiwicHJldmVudExvYWQiLCJDb21wb25lbnQiLCJQcm9taXNlIiwiZm9yYmlkZGVuRmllbGQiLCJ0b0lPYmplY3QiLCJ0b0xlbmd0aCIsInRvSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpbmRleCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyYWJsZSIsIml0ZXJGbiIsInN0ZXAiLCJpdGVyYXRvciIsInJlc3VsdCIsImRvbmUiLCJ1biIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiQXJyYXlQcm90byIsInJldCIsImNyZWF0ZSIsImRlc2NyaXB0b3IiLCJTQUZFX0NMT1NJTkciLCJyaXRlciIsImZyb20iLCJza2lwQ2xvc2luZyIsInNhZmUiLCJhcnIiLCJpdGVyIiwibWFjcm90YXNrIiwiT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsImlzTm9kZSIsImhlYWQiLCJsYXN0Iiwibm90aWZ5IiwiZmx1c2giLCJwYXJlbnQiLCJkb21haW4iLCJleGl0IiwiZW50ZXIiLCJ0b2dnbGUiLCJub2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJvYnNlcnZlIiwiY2hhcmFjdGVyRGF0YSIsInByb21pc2UiLCJ0aGVuIiwidGFzayIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImNvbnRlbnRXaW5kb3ciLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsImdldEtleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImNvbnN0cnVjdG9yIiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCIka2V5cyIsIkRFU0NSSVBUT1JTIiwiU1BFQ0lFUyIsIktFWSIsIkQiLCJUT19TVFJJTkciLCJwb3MiLCJzIiwiU3RyaW5nIiwibCIsImNoYXJDb2RlQXQiLCJjaGFyQXQiLCJtYXgiLCJ2YWwiLCJ2YWx1ZU9mIiwiY2xhc3NvZiIsImdldEl0ZXJhdG9yTWV0aG9kIiwiYWRkVG9VbnNjb3BhYmxlcyIsIml0ZXJhdGVkIiwiX3QiLCJfaSIsIl9rIiwiQXJndW1lbnRzIiwiYW5JbnN0YW5jZSIsImZvck9mIiwic3BlY2llc0NvbnN0cnVjdG9yIiwibWljcm90YXNrIiwiUFJPTUlTRSIsIiRQcm9taXNlIiwiZW1wdHkiLCJJbnRlcm5hbCIsIkdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJzYW1lQ29uc3RydWN0b3IiLCJpc1RoZW5hYmxlIiwibmV3UHJvbWlzZUNhcGFiaWxpdHkiLCJQcm9taXNlQ2FwYWJpbGl0eSIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwicGVyZm9ybSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJvblVuaGFuZGxlZCIsImFicnVwdCIsImlzVW5oYW5kbGVkIiwiZW1pdCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwicmVhc29uIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwid3JhcHBlciIsImV4ZWN1dG9yIiwiZXJyIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiciIsImNhcGFiaWxpdHkiLCJ4IiwiYWxsIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCIkYXQiLCJwb2ludCIsIlRPX1NUUklOR19UQUciLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb24iLCJIaXRsaXN0RGF0YXNvdXJjZSIsIm9wdGlvbnMiLCJfc2VhcmNoVmFsdWVzIiwibW9kaWZpZXIiLCJyZXF1ZXN0UmVzcG9uc2UiLCJpbml0aWFsTG9hZCIsIl9za2lwUGFnZSIsImlzUGFnaW5nIiwibG9jYXRpb25EZXNlcmlhbGl6ZSIsInJlcG9ydGlkIiwiaGl0bGlzdElEIiwicGFyYW1zIiwiUGFnZUlkIiwicGFnZUlEIiwicGFnZVN0YXRlSWQiLCJwYWdlU3RhdGVJRCIsIlByZXZpZXciLCJwcmV2aWV3IiwiYXR0cm5hbWUiLCJKU09OIiwic3RyaW5naWZ5Iiwic29ydGluZ1BhZ2luZ1ZhbHVlcyIsInBhZ2luZ1ZhbHVlcyIsInBhZ2VOdW1iZXIiLCJwYWdpbmdGb3J3YXJkIiwicHJvbWlzZVJlcXVlc3QiLCJzZXJ2aWNlVVJMIiwic2VyaWFsaXplUGFyYW1zIiwicGFyc2VSZXNwb25zZSIsInJlc3BvbnNlIiwicGFyc2UiLCJwYWdlSW5mbyIsIl9zcHYiLCJwdiIsInN0YXJ0SWQiLCJsYXN0U3RhcnRJZCIsImZpcnN0U3RhcnRJZCIsInN0YXJ0VmFsdWUiLCJsYXN0U3RhcnRWYWx1ZSIsImZpcnN0U3RhcnRWYWx1ZSIsIkhpdGxpc3RTZXR1cCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJfY29uZmlnIiwiZ2V0T3JpZ2luYWxDb25maWciLCJfZWxlbWVudFR5cGUiLCJIaXRMaXN0RWxlbWVudFR5cGUiLCJfb3AiLCJTZWFyY2hhYmxlTGlzdE9wZXJhdG9yIiwiY2FwdGlvbnMiLCJzaW5nbGVWaWV3VGV4dHMiLCJoaXRsaXN0RGF0YSIsImRpc2FibGVOZXh0QnV0dG9uIiwiZGlzYWJsZVByZXZCdXR0b24iLCJjb2x1bW5zIiwiYWxsQ29sdW1ucyIsImNvbXBvbmVudElkIiwicGFnZUlkIiwibGFuZ3VhZ2UiLCJzZXJ2aWNlVXJsIiwicXVlcnlTZWxlY3RvciIsImpzb25EYXRlIiwiWSIsIkxhbmciLCJpc0Z1bmN0aW9uIiwiY29uc3RyIiwiUmVnRXhwIiwiZXZhbCIsInNjcmlwdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2ZnIiwic2NyaXB0IiwidGV4dCIsIkltYWdlR3JpZFRpbGUiLCJhY3Rpb25CdXR0b24iLCJhY3Rpb25JY29uIiwib25TZWxlY3QiLCJ0aXRsZSIsIl9jb21wdXRlVGlsZVR5cGUiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwibWVkaWF0eXBlIiwidHlwZXMiLCJpY29uU2VydmVyIiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJlc2NhcGUiLCJpY29ucyIsImF1ZGlvIiwidmlkZW8iLCJJbWFnZUdyaWQiLCJpdGVtcyIsImR1bW15SXRlbXMiLCJpdGVtIiwicmVuZGVyRHVtbXlJdGVtcyIsImNvdW50IiwiUmVhY3RWaWRlbyIsImxvYWROZXh0UGFnZSIsIkRTIiwibmV4dFBhZ2UiLCJwcm9jZXNzRGF0YSIsImxvYWRQcmV2aW91c1BhZ2UiLCJwcmV2aW91c1BhZ2UiLCJsb2FkTW9yZSIsInZlcmJvc2UiLCJsb2ciLCJzZXR1cERhdGFMaXN0ZW5lciIsInNpbmdsZVZpZXciLCJsaW5rIiwic2luZ2xlVmlld1Zpc2libGUiLCJiYWNrQ2FsbGJhY2siLCJyZW5kZXJOYXZpZ2F0aW9uIiwiaTE4biIsImNvbmZpZyIsInBhZ2luYXRpb24iLCJjb250aW51b3VzTmF2aWdhdGlvbiIsInBhZ2luZ05hdmlnYXRpb24iLCJ0b3RhbEhpdHMiLCJ0ZXh0QWxpZ24iLCJpbml0aWFsRGF0YUxvYWQiLCJHbG9iYWwiLCJvbiIsImluaXRpYWxpc2VDb25maWciLCJmaWx0ZXJJbmZvIiwibW9kZSIsInRhZ3MiLCJuZXdEYXRhIiwicGFyc2VkRGF0YSIsInByZXBhcmVEYXRhIiwicmVzcG9uc2VpZCIsInNsaW5rIiwidHJpbSIsIlNpbmdsZVZpZXciLCJ2aXNpYmxlIiwiaWZyYW1lVmlzaWJsZSIsImlmcmFtZUhlaWdodCIsIm9uTG9hZCIsInJlY2VpdmVNZXNzYWdlIiwibmV4dFByb3BzIiwibWFwUHJvcHNUb1N0YXRlIiwiaGFuZHNoYWtlIiwiaWZyYW1lRWwiLCJnZXREb21haW4iLCJ0YXJnZXRPcmlnaW4iLCJvcmlnaW5hbEV2ZW50IiwiYWN0aW9uIiwid2FybiIsImhlYWRlclRleHQiLCJyZW5kZXJJZnJhbWUiLCJjbG9zZU9uU3VibWl0IiwiaWNfc3RhciIsImljX3N0YXJfYm9yZGVyIiwiaWNfYXJyb3dfYmFjayJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OzsrUUN0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QU9HLGNBQUtDLFlBQUwsQ0FBa0J4QyxJQUFsQixFQUF3QnlCLFVBQVVDLGFBQVYsR0FBMEJELE9BQWxEO0FBUEgsUUFERjtBQVdEOztBQUVEOzs7Ozs7Ozs7a0NBTWF6QixJLEVBQU15QixPLEVBQVM7QUFBQTs7QUFDMUIsY0FBTztBQUNMLGNBQUsscUJBQVU7QUFDYixrQkFBS1EsUUFBTCxHQUFnQmxQLE1BQWhCO0FBQ0QsVUFISTtBQUlMLGNBQUtpTixJQUpBO0FBS0wsaUJBQVEsS0FBSzRCLE1BTFI7QUFNTCxnQkFBTyxFQUFDNVMsU0FBU3lTLFVBQVUsT0FBVixHQUFvQixNQUE5QixFQU5GLEdBQVA7QUFPRDs7OztHQTlHcUMsZ0JBQU10UyxTOzttQkFBekJxUyxVOzs7QUFpSHJCQSxZQUFXNVUsWUFBWCxHQUEwQjtBQUN4QjZWLGtCQUFlO0FBRFMsRUFBMUI7Ozs7Ozs7Ozs7Ozs7O0FDckhBOzs7Ozs7QUFFTyxLQUFNQyw0QkFBVSx3Q0FBTSxHQUFFLDBGQUFSLEdBQWhCO0FBQ0EsS0FBTUMsMENBQWlCLHdDQUFNLEdBQUUsa01BQVIsR0FBdkI7QUFDQSxLQUFNQyx3Q0FBZ0Isd0NBQU0sR0FBRSw4REFBUixHQUF0QixDOzs7Ozs7QUNKUCwwQzs7Ozs7O0FDQUEsMEM7Ozs7OztBQ0FBLDJCIiwiZmlsZSI6InItcmVhY3QtdmlkZW8uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGNiMDJmNjdkZTlhZWFjMmUwZDAiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTEuMDEuMjAxNy5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgbWFpbkNTUyBmcm9tICcuL21haW4uY3NzJztcbmltcG9ydCBSZWFjdFZpZGVvIGZyb20gJy4vUmVhY3RWaWRlby9SZWFjdFZpZGVvJztcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSAnci1yZXBvcnRhbC1iYXNlJztcblxuLyoqXG4gKiBpbml0aWFsaXNlIEhpdExpc3Qgb24gRE9NQ29udGVudExvYWRlZCBmb3IgYSBxdWlja2VyIGNvbGQtc3RhcnQsIG5vIG5lZWQgdG8gd2FpdCBmb3IgdGhlIG9yaWdpbmFsIEhpdExpc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWdOYW1lIC0gbmFtZSBvZiB0aGUgdmFyaWFibGUgcGFzc2VkIHRvIERPTSBhcyBhIGNvbmZpZ1xuICogQHBhcmFtIHtCb29sZWFufSBbdGh1bWJzUGxhY2Vob2xkZXI9dHJ1ZV0gLSBkaXNwbGF5IHRodW1icyBhcyBpbWFnZSBwbGFjZWhvbGRlcnMgaW5zdGVhZCBvZiBtZWRpYSBpY29uc1xuICogKi9cbmNvbnN0IGxhdW5jaFZpZGVvSGl0bGlzdCA9IChjb25maWdOYW1lLHRodW1ic1BsYWNlaG9sZGVyPXRydWUpID0+IHtcbiAgaWYoIWNvbmZpZ05hbWUpe1xuICAgIHRocm93IG5ldyBFcnJvcignY29uZmlnIGlzIG5vdCBzcGVjaWZpZWQhJylcbiAgfSBlbHNlIGlmKGNvbmZpZ05hbWUgJiYgdHlwZW9mIGNvbmZpZ05hbWUgIT0gJ3N0cmluZycpe1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGNvbmZpZyBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBhICR7dHlwZW9mIGNvbmZpZ05hbWV9YClcbiAgfVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8UmVhY3RWaWRlb1xuICAgICAgY29uZmlnPXtjb25maWdOYW1lfVxuICAgICAgdGh1bWJzUGxhY2Vob2xkZXI9e3RodW1ic1BsYWNlaG9sZGVyfVxuICAgICAgdmVyYm9zZT17dHJ1ZX1cbiAgICAgIC8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG4gIH0pO1xufTtcblxud2luZG93LlJlcG9ydGFsID0gd2luZG93LlJlcG9ydGFsIHx8IHt9O1xuUmVwb3J0YWxCYXNlLm1peGluKHdpbmRvdy5SZXBvcnRhbCx7XG4gIGxhdW5jaFZpZGVvSGl0bGlzdFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsImltcG9ydCBQcm9taXNlIGZyb20gJ2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZSc7XHJcblxyXG5jbGFzcyBSZXBvcnRhbEJhc2Uge1xyXG5cclxuICAvKipcclxuICAgKiBDb3BpZXMgcHJvcHMgZnJvbSBhIHNvdXJjZSBvYmplY3QgdG8gYSB0YXJnZXQgb2JqZWN0LlxyXG4gICAqXHJcbiAgICogTm90ZSwgdGhpcyBtZXRob2QgdXNlcyBhIHNpbXBsZSBgZm9yLi4uaW5gIHN0cmF0ZWd5IGZvciBlbnVtZXJhdGluZ1xyXG4gICAqIHByb3BlcnRpZXMuICBUbyBlbnN1cmUgb25seSBgb3duUHJvcGVydGllc2AgYXJlIGNvcGllZCBmcm9tIHNvdXJjZVxyXG4gICAqIHRvIHRhcmdldCBhbmQgdGhhdCBhY2Nlc3NvciBpbXBsZW1lbnRhdGlvbnMgYXJlIGNvcGllZCwgdXNlIGBleHRlbmRgLlxyXG4gICAqXHJcbiAgICogQG1ldGhvZCBtaXhpblxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgVGFyZ2V0IG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBTb3VyY2Ugb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxyXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGFyZ2V0IG9iamVjdCB0aGF0IHdhcyBwYXNzZWQgYXMgZmlyc3QgYXJndW1lbnQuXHJcbiAgICovXHJcbiAgc3RhdGljIG1peGluKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIHNvdXJjZSkge1xyXG4gICAgICB0YXJnZXRbaV0gPSBzb3VyY2VbaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIF9sb2dnZXIobGV2ZWwsIGFyZ3MpIHtcclxuICAgIC8vIGFjY2VwdCBbJ2ZvbycsICdiYXInXSBhbmQgW1snZm9vJywgJ2JhciddXVxyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcclxuICAgICAgYXJncyA9IGFyZ3NbMF07XHJcbiAgICB9XHJcbiAgICAvLyBvbmx5IGFjY2VwdCBsb2dnaW5nIGZ1bmN0aW9uc1xyXG4gICAgc3dpdGNoKGxldmVsKSB7XHJcbiAgICAgIGNhc2UgJ2xvZyc6XHJcbiAgICAgIGNhc2UgJ3dhcm4nOlxyXG4gICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgY29uc29sZVtsZXZlbF0uYXBwbHkoY29uc29sZSwgYXJncyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgX2xvZygpIHtcclxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuICAgIHRoaXMuX2xvZ2dlcignbG9nJywgYXJncyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgX3dhcm4oKSB7XHJcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcbiAgICB0aGlzLl9sb2dnZXIoJ3dhcm4nLCBhcmdzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBfZXJyb3IoKSB7XHJcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcbiAgICB0aGlzLl9sb2dnZXIoJ2Vycm9yJywgYXJncyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmFtZWQgZXZlbnQgd2l0aCBgbmFtZWBcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGV2ZW50XHJcbiAgICogQHJldHVybiB7RXZlbnR9IFJldHVybnMgYSBjcmVhdGVkIGV2ZW50XHJcbiAgICogKi9cclxuICBzdGF0aWMgbmV3RXZlbnQobmFtZSl7XHJcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluc3BlY3RzIGlmIHRoZSBjdXJyZW50IHN0cmluZyBtaWdodCBiZSBjb252ZXJ0ZWQgdG8gbnVtYmVyIGFuZCByZW5kZXJzIGl0IGFzIG51bWJlci4gSWYgc3RyaW5nIGxlbmd0aCBpcyAwLCByZXR1cm5zIGBudWxsYC4gSWYgbm9uZSBhcHBsaWVzIHJldHVybnMgdGhlIHN0cmluZyBhcyBpcy5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gdmFsdWUgb2YgdGhlIGNlbGwgaWYgbm90IEhUTUwgY29udGVudHNcclxuICAgKiBAcmV0dXJuIHtOdW1iZXJ8bnVsbHxTdHJpbmd9XHJcbiAgICogKi9cclxuICBzdGF0aWMgaXNOdW1iZXIoc3RyKXtcclxuICAgIGlmKCFpc05hTihwYXJzZUZsb2F0KHN0cikpKXtcclxuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLywvaSwnJyk7Ly8gcmVtb3ZlIHVubmVjZXNzYXJ5IGNvbW1hIGFzIGEgZGVsaW1pdGVyIGZvciB0aG91c2FuZHMgZnJvbSBkYXRhLlxyXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChzdHIpO1xyXG4gICAgfSBlbHNlIGlmKHN0ci5sZW5ndGg9PTApe3JldHVybiBudWxsfSBlbHNlIHtyZXR1cm4gc3RyfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW4gWEhSIHdyYXBwZWQgaW4gYSBQcm9taXNlXHJcbiAgICogQHBhcmFtIHshU3RyaW5nfSBVUkwgLSB1cmwgdG8gc2VuZCBhIGBHRVRgIHJlcXVlc3QgdG9cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXR1cm5zIGEgdGhlbi1hYmxlIHByb21pc2Ugd2l0aCBgWE1MSHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0YFxyXG4gICAqICovXHJcbiAgc3RhdGljIHByb21pc2VSZXF1ZXN0KFVSTCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgIHhoci5vcGVuKCdHRVQnLCBVUkwsIHRydWUpO1xyXG4gICAgICB4aHIub25sb2FkID0gKCk9Pnt4aHIuc3RhdHVzID09IDIwMD9yZXNvbHZlKHhoci5yZXNwb25zZVRleHQpOnJlamVjdChFcnJvcihgJHt4aHIuc3RhdHVzfTogJHt4aHIuc3RhdHVzVGV4dH1gKSk7fVxyXG4gICAgICB4aHIub25lcnJvciA9ICgpPT57cmVqZWN0KEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7fVxyXG4gICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGEgdmFyaWFibGUgbGlzdGVkIGluIHF1ZXJ5IHN0cmluZ1xyXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gdmFyaWFibGUgLSB2YXJpYWJsZSBuYW1lIHRvIGdldCB2YWx1ZSBmb3JcclxuICAgKiBAcGFyYW0ge1N0cmluZz19IFtxdWVyeT13aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKV0gLSB0aGUgcXVlcnkgc3RyaW5nIHRvIHNlYXJjaCB2YXJpYWJsZSBmb3IgaW5cclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFJldHVybnMgdmFsdWUgZm9yIHRoZSB2YXJpYWJsZVxyXG4gICAqICovXHJcbiAgc3RhdGljIGdldFF1ZXJ5VmFyaWFibGUodmFyaWFibGUscXVlcnk9d2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpe1xyXG4gICAgdmFyIHZhcnMgPSBxdWVyeS5zcGxpdChcIiZcIik7XHJcbiAgICBmb3IgKHZhciBpPTA7aTx2YXJzLmxlbmd0aDtpKyspIHtcclxuICAgICAgdmFyIHBhaXIgPSB2YXJzW2ldLnNwbGl0KFwiPVwiKTtcclxuICAgICAgaWYoKHBhaXJbMF0pLnRvTG93ZXJDYXNlKCkgPT0gdmFyaWFibGUudG9Mb3dlckNhc2UoKSl7cmV0dXJuIHBhaXJbMV07fVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIHR1cm5zIGB3aW5kb3cubG9jYXRpb25gIG9iamVjdCBpbnRvIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhcyBuYW1lZCBrZXlzIG5lY2Vzc2FyeSB0byByZWNvbnN0cnVjdCB0aGUgVVJMXHJcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBbbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb25dIC0gYSB3aW5kb3cubG9jYXRpb24gb2JqZWN0LCBieSBkZWZhdWx0IG9mIHRoZSBob3N0IHdpbmRvdyB3aGVyZSB0aGUgc2NyaXB0IGlzIGV4ZWN1dGVkXHJcbiAgICogQHJldHVybnMge3twYXRoOlN0cmluZywgcXVlcnk6T2JqZWN0fX0gYSBgbG9jYXRpb25gIG9iamVjdFxyXG4gICAqICovXHJcbiAgc3RhdGljIGxvY2F0aW9uRGVzZXJpYWxpemUobG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24pe1xyXG4gICAgbGV0IG8gPSB7XHJcbiAgICAgIHBhdGg6IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICBxdWVyeTp7fVxyXG4gICAgfTtcclxuICAgIGxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkuc3BsaXQoLyYvKS5mb3JFYWNoKHBhaXI9PntcclxuICAgICAgbGV0IGFQYWlyPSBwYWlyLnNwbGl0KC89Lyk7XHJcbiAgICAgIG8ucXVlcnlbYVBhaXJbMF0udG9Mb3dlckNhc2UoKV0gPSBhUGFpclsxXVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHVybnMgYSBgbG9jYXRpb25gIG9iamVjdCAocmVzdWx0IG9mIGBsb2NhdGlvbkRlc2VyaWFsaXplYCkgaW50byBhIFVSTFxyXG4gICAqIEBwYXJhbSB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBsb2NhdGlvbiAtIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhbmQgYSB1cmxcclxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtIGEgVVJMIHN0cmluZ1xyXG4gICAqICovXHJcbiAgc3RhdGljIGxvY2F0aW9uU2VyaWFsaXplKGxvY2F0aW9uKXtcclxuICAgIGxldCBxdWVyeT1bXTtcclxuICAgIGZvcihsZXQga2V5IGluIGxvY2F0aW9uLnF1ZXJ5KXtcclxuICAgICAgcXVlcnkucHVzaChba2V5LGxvY2F0aW9uLnF1ZXJ5W2tleV1dLmpvaW4oJz0nKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aCArICc/JyArIHF1ZXJ5LmpvaW4oJyYnKTtcclxuICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlcG9ydGFsQmFzZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItcmVwb3J0YWwtYmFzZS9zcmMvcmVwb3J0YWwtYmFzZS5qcyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDIzLjAxLjIwMTcuXG4gKi9cbmltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogUmVuZGVycyBhbiBTVkcgbWF0ZXJpYWwgaWNvbiBpbXBvcnRlZCBmcm9tIGFuIGljb24tc2V0IGFuZCBwYXNzZWQgdmlhIHByb3BzXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcy5pY29uIC0gaW1wb3J0ZWQgaWNvbiBkZWZpbml0aW9uIChqc3gpXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMuY2hpbGRyZW4gLSBpbXBvcnRlZCBpY29uIGRlZmluaXRpb24gKGpzeCkgaWYgeW91IHByZWZlciB1c2luZyBjaGlsZHJlbiBhbmQgYSBjbG9zaW5nIHRhZyBpbiBKU1ggcmF0aGVyIHRoYW4gYW4gaWNvbiBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcHJvcHMuc2l6ZT0yNF0gLSBpY29uIHdpZHRoL2hlaWdodCAod2hpY2ggZXF1YWxzIGhlaWdodCBzaW5jZSBhbGwgTUQgaWNvbnMgaGF2ZSBzcXVhcmUgdmlld2JveCkuIEFueSBvZiBgMTh8MjR8MzZ8NDhgXG4gKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmZpbGw9J3JnYmEoMCwwLDAsLjg1KSddIC0gaWNvbiBmaWxsIC0gYW55IHZhbGlkIGNzcyBjb2xvciwgZmlsbHMgdGhlIHdob2xlIGljb25cbiAqICovXG5leHBvcnQgY2xhc3MgTURJY29uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2ZpbGwsc2l6ZSxpY29uLGNoaWxkcmVufSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuICg8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPXtmaWxsfSB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgY2hpbGRyZW49e2ljb24gfHwgY2hpbGRyZW59IC8+KTtcbiAgfVxufVxuXG5NREljb24uZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiAyNCxcbiAgZmlsbDogJ3JnYmEoMCwwLDAsLjg1KSdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L01ESWNvbi9zcmMvTURJY29uLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTEuMDEuMjAxNy5cclxuICovXHJcbmltcG9ydCB7TURJY29ufSBmcm9tICcuL01ESWNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNREljb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vTURJY29uL3NyYy9tYWluLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgUHJvcG9ydGlvbmFsSW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvKipcbiAgICogYFByb3BvcnRpb25hbEltYWdlYCBpcyBhbiBlbGVtZW50IGZvciBkaXNwbGF5aW5nIGFuIGltYWdlIHRoYXQgcHJvdmlkZXMgdXNlZnVsIHNpemluZyBhbmQgcHJlbG9hZGluZyBvcHRpb25zIG5vdCBmb3VuZCBvbiB0aGUgc3RhbmRhcmQgYDxpbWc+YCB0YWcuXG4gICAqIFRoZSBgc2l6aW5nYCBvcHRpb24gYWxsb3dzIHRoZSBpbWFnZSB0byBiZSBlaXRoZXIgY3JvcHBlZCAoYGNvdmVyYCkgb3IgbGV0dGVyYm94ZWQgKGBjb250YWluYCkgdG8gZmlsbCBhIGZpeGVkIHVzZXItc2l6ZSBwbGFjZWQgb24gdGhlIGVsZW1lbnQuXG4gICAqIFRoZSBgcHJlbG9hZGAgb3B0aW9uIHByZXZlbnRzIHRoZSBicm93c2VyIGZyb20gcmVuZGVyaW5nIHRoZSBpbWFnZSB1bnRpbCB0aGUgaW1hZ2UgaXMgZnVsbHkgbG9hZGVkLlxuICAgKiBJbiB0aGUgaW50ZXJpbSwgZWl0aGVyIHRoZSBlbGVtZW50J3MgQ1NTIGBiYWNrZ3JvdW5kLWNvbG9yYCBjYW4gYmUgYmUgdXNlZCBhcyB0aGUgcGxhY2Vob2xkZXIsIG9yIHRoZSBgcGxhY2Vob2xkZXJgIHByb3BlcnR5IGNhbiBiZSBzZXQgdG8gYSBVUkwgKHByZWZlcmFibHkgYSBkYXRhLVVSSSwgZm9yIGluc3RhbnQgcmVuZGVyaW5nKSBmb3IgYSBwbGFjZWhvbGRlciBpbWFnZS5cbiAgICogVGhlIGBmYWRlYCBvcHRpb24gKG9ubHkgdmFsaWQgd2hlbiBgcHJlbG9hZGAgaXMgc2V0KSB3aWxsIGNhdXNlIHRoZSBwbGFjZWhvbGRlciBpbWFnZS9jb2xvciB0byBiZSBmYWRlZCBvdXQgb25jZSB0aGUgaW1hZ2UgaXMgcmVuZGVyZWQuXG4gICAqXG4gICAqIEV4YW1wbGVzOlxuICAgKiBCYXNpY2FsbHkgaWRlbnRpY2FsIHRvIGA8aW1nIHNyYz1cIi4uLlwiPmAgdGFnOlxuICAgKiBgYGBcbiAgICogPFByb3BvcnRpb25hbEltYWdlIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzQwMC80MDBcIiAvPlxuICAgKiBgYGBcbiAgICogV2lsbCBsZXR0ZXJib3ggdGhlIGltYWdlIHRvIGZpdCBhbmQgdXNlIHN0eWxlcyByYXRoZXIgdGhhbiB0aGUgYXR0cmlidXRlcyB0byBzZXQgaGVpZ2h0IGFuZCB3aWR0aDpcbiAgICogYGBgXG4gICAqIDxQcm9wb3J0aW9uYWxJbWFnZSBzdHlsZT17e3dpZHRoOic0MDBweCcsIGhlaWdodDonNDAwcHgnfX0gc2l6aW5nPVwiY29udGFpblwiIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCIgLz5cbiAgICogYGBgXG4gICAqIFdpbGwgY3JvcCB0aGUgaW1hZ2UgdG8gZml0OlxuICAgKiBgYGBcbiAgICogPFByb3BvcnRpb25hbEltYWdlIHN0eWxlPXt7d2lkdGg6JzQwMHB4JywgaGVpZ2h0Oic0MDBweCd9fSBzaXppbmc9XCJjb3ZlclwiIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCIgLz5cbiAgICogYGBgXG4gICAqIFdpbGwgc2hvdyBsaWdodC1ncmF5IGJhY2tncm91bmQgdW50aWwgdGhlIGltYWdlIGxvYWRzOlxuICAgKiBgYGBcbiAgICogPFByb3BvcnRpb25hbEltYWdlIHN0eWxlPXt7d2lkdGg6JzQwMHB4JywgaGVpZ2h0Oic0MDBweCcsIGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JheSd9fSBzaXppbmc9XCJjb3ZlclwiIHByZWxvYWQ9XCJ0cnVlXCIgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIiAvPlxuICAgKiBgYGBcbiAgICogV2lsbCBzaG93IGEgYmFzZS02NCBlbmNvZGVkIHBsYWNlaG9sZGVyIGltYWdlIHVudGlsIHRoZSBpbWFnZSBsb2FkczpcbiAgICogYGBgXG4gICAqIDxQcm9wb3J0aW9uYWxJbWFnZSBzdHlsZT17e3dpZHRoOic0MDBweCcsIGhlaWdodDonNDAwcHgnfX0gcGxhY2Vob2xkZXI9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsLi4uXCIgc2l6aW5nPVwiY292ZXJcIiBwcmVsb2FkPVwidHJ1ZVwiIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCIgLz5cbiAgICogYGBgXG4gICAqIFdpbGwgZmFkZSB0aGUgbGlnaHQtZ3JheSBiYWNrZ3JvdW5kIG91dCBvbmNlIHRoZSBpbWFnZSBpcyBsb2FkZWQ6XG4gICAqIGBgYFxuICAgKiA8UHJvcG9ydGlvbmFsSW1hZ2Ugc3R5bGU9e3t3aWR0aDonNDAwcHgnLCBoZWlnaHQ6JzQwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmF5J319IHNpemluZz1cImNvdmVyXCIgcHJlbG9hZD1cInRydWVcIiBmYWRlPVwidHJ1ZVwiIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCIgLz5cbiAgICogYGBgXG4gICAqIFdpbGwgZGlzcmVnYXJkIHRoZSBoZWlnaHQsIGJlY2F1c2UgdGhlIGFzcGVjdCBpcyBwcm92aWRlZCwgYW5kIHJlZHVjZSB0aGUgaW1hZ2UgaGVpZ2h0IHRvIGJlIGluIDE2OjkgcmF0aW8uIFNwZWNpZnlpbmcgaGVpZ2h0IGluIHRoaXMgY2FzZSBpcyBub3QgbmVjZXNzYXJ5XG4gICAqIGBgYFxuICAgKiA8UHJvcG9ydGlvbmFsSW1hZ2UgYXNwZWN0PVwiMTY6OVwiIHN0eWxlPXt7d2lkdGg6JzQwMHB4JywgaGVpZ2h0Oic0MDBweCcsIGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JheSd9fSBzaXppbmc9XCJjb3ZlclwiIHByZWxvYWQ9XCJ0cnVlXCIgZmFkZT1cInRydWVcIiBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiIC8+XG4gICAqIGBgYFxuICAgKiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBzdHJldGNoIGEgcGxhY2Vob2xkZXIsIGJ1dCBkaXNwbGF5IGl0IGluIGl0cyBuYXR1cmFsIHNpemUgZXZlbiBpZiB0aGUgbWFpbiBpbWFnZSB1c2VzIGBzaXppbmdgLCBmZWVsIGZyZWUgdG8gdXNlIGEgUG9zdENTUyBtaXhpbiBgLS1Qcm9wb3J0aW9uYWxJbWFnZS1wbGFjZWhvbGRlcmAgdG8gcmVzdHlsZSBpdDpcbiAgICogYGBgY3NzXG4gICAqIDpyb290e1xuICAgKiAgLS1Qcm9wb3J0aW9uYWxJbWFnZS1wbGFjZWhvbGRlcjoge1xuICAgKiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY1O1xuICAgKiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gIWltcG9ydGFudDtcbiAgICogIH07XG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuc3JjIC0gVGhlIFVSTCBvZiBhbiBpbWFnZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmFsdCAtIEEgc2hvcnQgdGV4dCBhbHRlcm5hdGl2ZSBmb3IgdGhlIGltYWdlLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByb3BzLnByZXZlbnRMb2FkIC0gV2hlbiB0cnVlLCB0aGUgaW1hZ2UgaXMgcHJldmVudGVkIGZyb20gbG9hZGluZyBhbmQgYW55IHBsYWNlaG9sZGVyIGlzIHNob3duLiAgVGhpcyBtYXkgYmUgdXNlZnVsIHdoZW4gYSBiaW5kaW5nIHRvIHRoZSBzcmMgcHJvcGVydHkgaXMga25vd24gdG8gYmUgaW52YWxpZCwgdG8gcHJldmVudCA0MDQgcmVxdWVzdHMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5zaXppbmcgLSBTZXRzIGEgc2l6aW5nIG9wdGlvbiBmb3IgdGhlIGltYWdlLiAgVmFsaWQgdmFsdWVzIGFyZSBgY29udGFpbmAgKGZ1bGwgYXNwZWN0IHJhdGlvIG9mIHRoZSBpbWFnZSBpcyBjb250YWluZWQgd2l0aGluIHRoZSBlbGVtZW50IGFuZCBsZXR0ZXJib3hlZCkgb3IgYGNvdmVyYCAoaW1hZ2UgaXMgY3JvcHBlZCBpbiBvcmRlciB0byBmdWxseSBjb3ZlciB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50KSwgb3IgYG51bGxgIChkZWZhdWx0OiBpbWFnZSB0YWtlcyBuYXR1cmFsIHNpemUpLiBNYWtlIHN1cmUgeW91IHNwZWNpZnkgYGhlaWdodGAgYW5kIGB3aWR0aGAgaWYgeW91IHVzZSBhbnl0aGluZyBvdGhlciB0aGFudCBgbm9uZWAgZm9yIGBzaXppbmdgXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wb3NpdGlvbiAtIFdoZW4gYSBzaXppbmcgb3B0aW9uIGlzIHVzZWQgKGBjb3ZlcmAgb3IgYGNvbnRhaW5gKSwgdGhpcyBkZXRlcm1pbmVzIGhvdyB0aGUgaW1hZ2UgaXMgYWxpZ25lZCB3aXRoaW4gdGhlIGVsZW1lbnQgYm91bmRzLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByb3BzLnByZWxvYWQgLSBXaGVuIGB0cnVlYCwgYW55IGNoYW5nZSB0byB0aGUgYHNyY2AgcHJvcGVydHkgd2lsbCBjYXVzZSB0aGUgYHBsYWNlaG9sZGVyYCBpbWFnZSB0byBiZSBzaG93biB1bnRpbCB0aGUgbmV3IGltYWdlIGhhcyBsb2FkZWQuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMuZmFkZSAtIFdoZW4gYHByZWxvYWRgIGlzIHRydWUsIHNldHRpbmcgYGZhZGVgIHRvIHRydWUgd2lsbCBjYXVzZSB0aGUgaW1hZ2UgdG8gZmFkZSBpbnRvIHBsYWNlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMucGxhY2Vob2xkZXIgLSBUaGlzIGltYWdlIHdpbGwgYmUgdXNlZCBhcyBhIGJhY2tncm91bmQvcGxhY2Vob2xkZXIgdW50aWwgdGhlIHNyYyBpbWFnZSBoYXMgbG9hZGVkLiBVc2Ugb2YgYSBkYXRhLVVSSSBmb3IgcGxhY2Vob2xkZXIgaXMgZW5jb3VyYWdlZCBmb3IgaW5zdGFudCByZW5kZXJpbmcuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlclNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIuIEJ5IGRlZmF1bHQgaXQncyB0aGUgc2FtZSBhcyBmb3IgdGhlIGBzcmNgIGltYWdlLCBidXQgc2V0IHRvIGBpbml0aWFsYCBvciBvdGhlciB2YWxpZCBgYmFja2dyb3VuZC1zaXplYCB2YWx1ZSB0byBvdmVycmlkZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLndpZHRoIC0gQ2FuIGJlIHVzZWQgdG8gc2V0IHRoZSB3aWR0aCBvZiBpbWFnZSAoZS5nLiB2aWEgYmluZGluZyk7IHNpemUgbWF5IGFsc28gYmUgc2V0IHZpYSBDU1MuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5oZWlnaHQgLSBDYW4gYmUgdXNlZCB0byBzZXQgdGhlIGhlaWdodCBvZiBpbWFnZSAoZS5nLiB2aWEgYmluZGluZyk7IHNpemUgbWF5IGFsc28gYmUgc2V0IHZpYSBDU1MuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5hc3BlY3QgLSBTcGVjaWZ5IHRoZSBhc3BlY3QgcmF0aW8gdG8gbWFpbnRhaW4sIHR3byBudW1iZXJzIHNlcGFyYXRlZCBieSBzZW1pY29sb24oZS5nLiBgMTY6OWApLiBNYWtlIHN1cmUgdGhhdCB0aGUgY29udGFpbmVyIGZvciB0aGUgaW1hZ2UgY2FuIHJlc2l6ZSB2ZXJ0aWNhbGx5LyBoYXMgZW5vdWdoIHNwYWNlIGZvciBpdFxuICAgKiAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuX2ltYWdlT25sb2FkID0gdGhpcy5faW1hZ2VPbmxvYWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9pbWFnZU9uZXJyb3IgPSB0aGlzLl9pbWFnZU9uZXJyb3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3JjOiAnJyxcbiAgICAgIHBsYWNlaG9sZGVySGlkZGVuOiEoISF0aGlzLnByb3BzLnBsYWNlaG9sZGVyKSxcbiAgICAgIHNpemluZzogdGhpcy5wcm9wcy5zaXppbmc/dGhpcy5wcm9wcy5zaXppbmc6bnVsbCxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnByb3BzLnBvc2l0aW9uP3RoaXMucHJvcHMucG9zaXRpb246J2NlbnRlcicsXG4gICAgICBwcm9wb3J0aW9uOjAsXG4gICAgICBsb2FkZWQ6ZmFsc2UsIC8vdHJ1ZSB3aGVuIHRoZSBpbWFnZSBpcyBsb2FkZWQuXG4gICAgICBsb2FkaW5nOmZhbHNlLCAvL3RyYWNrcyB0aGUgbG9hZGluZyBzdGF0ZSBvZiB0aGUgaW1hZ2Ugd2hlbiB0aGUgYHByZWxvYWRgIG9wdGlvbiBpcyB1c2VkLlxuICAgICAgZXJyb3I6ZmFsc2UgLy9pbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBzZXQgYHNyY2AgZmFpbGVkIHRvIGxvYWQuXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX2xvYWQoKTtcbiAgICB0aGlzLl9jb21wdXRlRGltZW5zaW9ucygpO1xuICAgIHRoaXMuX2NvbXB1dGVQcm9wb3J0aW9uKHRoaXMucHJvcHMuYXNwZWN0KTtcbiAgfVxuICBfY29tcHV0ZURpbWVuc2lvbnMoKXtcbiAgICBsZXQge3dpZHRoLGhlaWdodH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2lkdGg6aXNOYU4od2lkdGgpID8gd2lkdGggOiB3aWR0aCArICdweCcsXG4gICAgICBoZWlnaHQ6aXNOYU4oaGVpZ2h0KSA/IGhlaWdodCA6IGhlaWdodCArICdweCdcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQ29tcHV0ZXMgYXNwZWN0IHJhdGlvIG9mIHRoZSBpbWFnZVxuICAgKiAqL1xuICBfY29tcHV0ZVByb3BvcnRpb24oYXNwZWN0KXtcbiAgICBpZihhc3BlY3Qpe1xuICAgICAgaWYoYXNwZWN0LmluZGV4T2YoJzonKT4tMSl7XG4gICAgICAgIGxldCBwYXJ0cyA9IGFzcGVjdC5zcGxpdCgnOicpLm1hcChwYXJ0PT5wYXJzZUZsb2F0KHBhcnQpKTtcblxuICAgICAgICBpZighaXNOYU4ocGFydHNbMF0pICYmICFpc05hTihwYXJ0c1sxXSkpe1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlPT57XG4gICAgICAgICAgICBpZighaXNOYU4ocGFyc2VGbG9hdChwcmV2U3RhdGUud2lkdGgpKSl7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvbjoocGFyc2VGbG9hdChwcmV2U3RhdGUud2lkdGgpICogKHBhcnRzWzFdL3BhcnRzWzBdKSkudG9TdHJpbmcoKSArIHByZXZTdGF0ZS53aWR0aC5zdWJzdHJpbmcocGFyc2VGbG9hdChwcmV2U3RhdGUud2lkdGgpLnRvU3RyaW5nKCkubGVuZ3RoKSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvL3Rocm93IG5ldyBUeXBlRXJyb3IoJ1dpZHRoIGluIFByb3BvcnRpb25hbEltYWdlIGhhcyB0byBiZSBlaXRoZXIgaW4gcGl4ZWxzIG9yIGluIHBlcmNlbnQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7d2lkdGgsaGVpZ2h0LHByb3BvcnRpb24sc3JjLHNpemluZyxwb3NpdGlvbixsb2FkaW5nLGxvYWRlZCxwbGFjZWhvbGRlckhpZGRlbn0gPSB0aGlzLnN0YXRlLFxuICAgICAgICB7cHJlbG9hZCxmYWRlLHBsYWNlaG9sZGVyU2l6aW5nLHBsYWNlaG9sZGVyLGFsdH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb3BvcnRpb25hbEltYWdlXCJcbiAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgcGFkZGluZ1RvcDogcHJvcG9ydGlvblxuICAgICAgICAgICB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXplZEltZ0RpdlwiXG4gICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3NyY30pYCxcbiAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOnNpemluZyxcbiAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjpwb3NpdGlvbixcbiAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IHNpemluZyAmJiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IHNpemluZz8gJ2Jsb2NrJzonbm9uZSdcbiAgICAgICAgICAgICB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgICBvbkxvYWQ9e3RoaXMuX2ltYWdlT25sb2FkfVxuICAgICAgICAgIG9uRXJyb3I9e3RoaXMuX2ltYWdlT25lcnJvcn1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogc2l6aW5nPyAnbm9uZSc6J2Jsb2NrJ1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ISFwbGFjZWhvbGRlciAmJiBwbGFjZWhvbGRlcn0pYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAhcGxhY2Vob2xkZXJTaXppbmc/c2l6aW5nOnBsYWNlaG9sZGVyU2l6aW5nLFxuICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOnBvc2l0aW9uLFxuICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogc2l6aW5nICYmICduby1yZXBlYXQnXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BpbWFnZVBsYWNlaG9sZGVyICR7cGxhY2Vob2xkZXJIaWRkZW4gJiYgJ2hpZGRlbid9ICR7KHByZWxvYWQgJiYgZmFkZSAmJiAhbG9hZGluZyAmJiBsb2FkZWQpICYmICdmYWRlZC1vdXQnfWB9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIF9pbWFnZU9ubG9hZCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzpmYWxzZSxcbiAgICAgIGxvYWRlZDp0cnVlLFxuICAgICAgLy9wbGFjZWhvbGRlckhpZGRlbjp0cnVlLFxuICAgICAgZXJyb3I6ZmFsc2VcbiAgICB9KVxuICB9XG4gIF9pbWFnZU9uZXJyb3IoKXtcbiAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLl9yZXNldCgpLGVycm9yOnRydWV9KTtcbiAgfVxuICBfcmVzZXQoKSB7XG4gICAgcmV0dXJue1xuICAgICAgc3JjOicnLFxuICAgICAgbG9hZGluZzpmYWxzZSxcbiAgICAgIGxvYWRlZDpmYWxzZSxcbiAgICAgIGVycm9yOmZhbHNlXG4gICAgfVxuICB9XG4gIF9sb2FkKCl7XG4gICAgbGV0IHN0YXRlID0gdGhpcy5fcmVzZXQoKTtcbiAgICBpZighdGhpcy5wcm9wcy5wcmV2ZW50TG9hZCkge1xuICAgICAgbGV0IHNyYyA9IHRoaXMucHJvcHMuc3JjO1xuICAgICAgaWYgKHN0YXRlLnNyYyAhPSBzcmMpIHtcbiAgICAgICAgc3RhdGUgPSB7Li4uc3RhdGUsXG4gICAgICAgICAgc3JjOiAhIXNyYyAmJiBzcmMsXG4gICAgICAgICAgbG9hZGluZzohIXNyY1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BvcnRpb25hbEltYWdlO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L1Byb3BvcnRpb25hbEltYWdlL3NyYy9tYWluLmpzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZXM2L3Byb21pc2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMC4wMS4yMDE3LlxuICovXG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gXCJyLXJlcG9ydGFsLWJhc2VcIjtcbmltcG9ydCBIaXRsaXN0U2V0dXAgZnJvbSBcIi4vaGl0bGlzdC1zZXR1cFwiO1xuXG5jbGFzcyBIaXRsaXN0RGF0YXNvdXJjZSBleHRlbmRzIEhpdGxpc3RTZXR1cHtcbiAgLyoqXG4gICAqIFRoaXMgY2xhc3MgYWxsb3dzIHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gd2l0aCB0aGUgSGl0TGlzdCBkYXRhYmFzZSBhbmQgdXNlIHV0aWxpdHkgbWV0aG9kcyB0byBxdWVyeSBhbmQgZmlsdGVyIGRhdGEgcHJvdmlkZWQgdGhlcmUncyBhIGhpdGxpc3Qgb24gdGhlIHBhZ2VcbiAgICogQGV4dGVuZHMgSGl0bGlzdFNldHVwXG4gICAqICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM9e30pe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc2VhcmNoVmFsdWVzPVtdO1xuICAgIC8qKiBAcHJvcGVydHkge1N0cmluZ30gbW9kaWZpZXIgLSBleHRyYSBwYXJhbXMgYWRkZWQgYXMgYSBzdHJpbmcgZnJvbSBmaWx0ZXJzICovXG4gICAgdGhpcy5tb2RpZmllciA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIHBlcmZvcm1zIGluaXRpYWwgZGF0YSBsb2FkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIGluaXRpYWxEYXRhTG9hZCgpe1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpbml0aWFsTG9hZDp0cnVlfSlcbiAgfVxuICAvKipcbiAgICogbG9hZHMgbmV4dCBwYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIG5leHRQYWdlKCl7XG4gICAgdGhpcy5fc2tpcFBhZ2UodHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpc1BhZ2luZzogdHJ1ZX0sdGhpcy5tb2RpZmllcik7XG4gIH1cbiAgLyoqXG4gICAqIGxvYWRzIHByZXZpb3VzIHBhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgcHJldmlvdXNQYWdlKCl7XG4gICAgdGhpcy5fc2tpcFBhZ2UoZmFsc2UpO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aXNQYWdpbmc6IHRydWV9LHRoaXMubW9kaWZpZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJpZXMgSGl0TGlzdCBBUElcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogKi9cbiAgcmVxdWVzdFJlc3BvbnNlKG9wdGlvbnMpe1xuICAgIGxldCBxdWVyeT0gUmVwb3J0YWxCYXNlLmxvY2F0aW9uRGVzZXJpYWxpemUoKS5xdWVyeTtcbiAgICBpZihxdWVyeSAmJiBxdWVyeS5yZXBvcnRpZCAmJiB0aGlzLmhpdGxpc3RJRCl7XG4gICAgICAvKnNldCBjb21tb24gcGFyYW1zKi9cbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIFBhZ2VJZDogdGhpcy5wYWdlSUQsXG4gICAgICAgIHBhZ2VTdGF0ZUlkOiB0aGlzLnBhZ2VTdGF0ZUlELFxuICAgICAgICBQcmV2aWV3OiBxdWVyeS5wcmV2aWV3XG4gICAgICB9O1xuXG4gICAgICAvKmlmIG9wdGlvbnMgYXJlIHBhc3NlZCwgYWRkIG9wdGlvbnMqL1xuICAgICAgaWYob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpe1xuICAgICAgICBmb3IgKGxldCBhdHRybmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgcGFyYW1zW2F0dHJuYW1lXSA9IHR5cGVvZiBvcHRpb25zW2F0dHJuYW1lXT09PSdib29sZWFuJz8ob3B0aW9uc1thdHRybmFtZV0/JzEnOicwJyk6b3B0aW9uc1thdHRybmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIXBhcmFtcy5zZWFyY2ggJiYgdGhpcy5fc2VhcmNoVmFsdWVzLmxlbmd0aD4wKXtcbiAgICAgICAgcGFyYW1zLnNlYXJjaCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuX3NlYXJjaFZhbHVlcyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzb3J0aW5nUGFnaW5nVmFsdWVzID0gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzO1xuXG4gICAgICBpZiAoc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMhPW51bGwgJiYgIWlzTmFOKHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2VOdW1iZXIpKSB7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaW5pdGlhbExvYWQgPT09IHRydWUpIHtcbiAgICAgICAgICBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcyA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnZU51bWJlciArPSBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdpbmdGb3J3YXJkID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy5zb3J0aW5nUGFnaW5nVmFsdWVzPUpTT04uc3RyaW5naWZ5KHNvcnRpbmdQYWdpbmdWYWx1ZXMpO1xuXG4gICAgICByZXR1cm4gUmVwb3J0YWxCYXNlLnByb21pc2VSZXF1ZXN0KGAke3RoaXMuc2VydmljZVVSTH0mJHtIaXRsaXN0RGF0YXNvdXJjZS5zZXJpYWxpemVQYXJhbXMocGFyYW1zKX0ke3RoaXMubW9kaWZpZXIhPScnPycmJyt0aGlzLm1vZGlmaWVyOicnfWApXG4gICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT50aGlzLnBhcnNlUmVzcG9uc2UocmVzcG9uc2UpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgSGl0TGlzdCBBUEkgcmVzcG9uc2VcbiAgICogKi9cbiAgcGFyc2VSZXNwb25zZShyZXNwb25zZSl7XG4gICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcblxuICAgIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHJlc3BvbnNlLnNvcnRpbmdQYWdpbmdWYWx1ZXM7XG4gICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICB0aGlzLnBhZ2VJbmZvID0gcmVzcG9uc2UucGFnZUluZm87XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHBhZ2luZ0ZvcndhcmQgaWYgYHRydWVgIGdvZXMgZm9yd2FyZCwgaWYgYG51bGxgIGdvZXMgYmFja3dhcmRcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNhbGxiYWNrXG4gICAqICovXG4gIF9za2lwUGFnZShwYWdpbmdGb3J3YXJkKXtcbiAgICBsZXQgX3NwdiA9IHsuLi50aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXN9O1xuICAgIGxldCBwdiA9IHsuLi5fc3B2LnBhZ2luZ1ZhbHVlc30gfHwge307XG4gICAgcHYucGFnaW5nRm9yd2FyZCA9IHBhZ2luZ0ZvcndhcmQ7IC8qaWYgZm9yd2FyZCBpcyBuZWVkZWQgdGhlbiBwYXNzIHRydWUsIGVsc2UgbnVsbCAtIGJhY2t3YXJkKi9cbiAgICBwdi5zdGFydElkID0gcGFnaW5nRm9yd2FyZCA/IHB2Lmxhc3RTdGFydElkIDogcHYuZmlyc3RTdGFydElkO1xuICAgIHB2LnN0YXJ0VmFsdWUgPSBwYWdpbmdGb3J3YXJkID8gcHYubGFzdFN0YXJ0VmFsdWUgOiBwdi5maXJzdFN0YXJ0VmFsdWU7XG4gICAgdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzID0ge1xuICAgICAgLi4udGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLFxuICAgICAgcGFnaW5nVmFsdWVzOiBwdlxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogc2VyaWFsaXplIHBhcmFtcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgLSBhbiBvYmplY3Qgd2l0aCBwYXJhbWV0ZXJzXG4gICAqICovXG4gIHN0YXRpYyBzZXJpYWxpemVQYXJhbXMocGFyYW1zKXtcbiAgICBsZXQgcXVlcnkgPSBbXTtcbiAgICBmb3IobGV0IGtleSBpbiBwYXJhbXMpe1xuICAgICAgcXVlcnkucHVzaChba2V5LHBhcmFtc1trZXldXS5qb2luKCc9JykpO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnkuam9pbignJicpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0RGF0YXNvdXJjZTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LWRhdGFzb3VyY2UuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTAuMDEuMjAxNy5cbiAqL1xuXG5jbGFzcyBIaXRsaXN0U2V0dXB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgLy9maXggZm9yIHdpbmRvdy5sb2NhdGlvbiBvcmlnaW4sIHRoYW54IElFXG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID8gJzonICsgd2luZG93LmxvY2F0aW9uLnBvcnQ6ICcnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBIaXRsaXN0U2V0dXAuZ2V0T3JpZ2luYWxDb25maWcoKTtcbiAgICB0aGlzLl9lbGVtZW50VHlwZSA9IHdpbmRvdy5IaXRMaXN0RWxlbWVudFR5cGU7XG4gICAgdGhpcy5fb3AgPSB3aW5kb3cuU2VhcmNoYWJsZUxpc3RPcGVyYXRvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBhbGxvd3MgZ2V0dGluZyBhIGxvY2FsaXNlZCBzdHJpbmcgaW4gdGhlIGxhbmd1YWdlIG9mIHRoZSByZXBvcnQgZnJvbSBIaXRsaXN0IGNvbmZpZy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIHRoZSBrZXkgdG8gbG9vayB0aGUgcHJvcGVydHkgdXBcbiAgICpcbiAgICogKiBgc3RvZWA6XCJTbWFsbGVyIHRoYW4gb3IgZXF1YWxcIixcbiAgICogKiBgZ3RvZWA6XCJHcmVhdGVyIHRoYW4gb3IgZXF1YWxcIixcbiAgICogKiBgYmV0d2VlbmA6XCJCZXR3ZWVuXCIsXG4gICAqICogYGJlZm9yZWA6XCJCZWZvcmVcIixcbiAgICogKiBgYWZ0ZXJgOlwiQWZ0ZXJcIixcbiAgICogKiBgZXhhY3RseWA6XCJFeGFjdGx5XCIsXG4gICAqICogYHNob3dkZWZhdWx0Y29sc2A6XCJTaG93IGRlZmF1bHQgY29sdW1uc1wiLFxuICAgKiAqIGBhcHBseWA6XCJBcHBseVwiLFxuICAgKiAqIGBjYW5jZWxgOlwiQ2FuY2VsXCIsXG4gICAqICogYHNob3doaWRlYDpcIlNob3cgLyBIaWRlIGNvbHVtbnNcIixcbiAgICogKiBgeWVzYDpcIlllc1wiLFxuICAgKiAqIGBub2A6XCJOb1wiLFxuICAgKiAqIGBsb2FkaW5nRGF0YWA6XCJMb2FkaW5nIGRhdGEsIHBsZWFzZSB3YWl0Li4uXCIsXCJcbiAgICogKiBgY2hlY2thbGxgOlwiQ2hlY2sgYWxsXCIsXG4gICAqICogYHVuY2hlY2thbGxgOlwiVW5jaGVjayBhbGxcIixcbiAgICogKiBgZXJyb3JMb2FkaW5nYDpcIkVycm9yIGxvYWRpbmcgZGF0YVwiLFxuICAgKiAqIGBlcnJvck5vQ29sdW1uc2A6XCJObyBjb2x1bW5zIHNlbGVjdGVkXCJcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUkVTUE9OREVOVE9WRVJWSUVXYDpcIlJlc3BvbmRlbnQgb3ZlcnZpZXdcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJJTlRgOlwiUHJpbnQgdGhlIGN1cnJlbnQgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19DTE9TRWA6XCJDbG9zZSB0aGlzIG92ZXJsYXlcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfRklMVEVSYDpcIkZpbHRlciBxdWVzdGlvbnNcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTk9USElOR0ZPVU5EYDpcIk5vIHF1ZXN0aW9ucyBtYXRjaCB5b3VyIHNlYXJjaFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VU2A6XCJQcmV2aW91c1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VU0hJTlRgOlwiUHJldmlvdXMgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19ORVhUYDpcIk5leHRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTkVYVEhJTlRgOlwiTmV4dCByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX09GYDpcInswfSBvZiB7MX1cIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTU9SRWA6XCJ7MH0gbW9yZVwiLFxuICAgKiAqIFJFUE9SVF9TSU5HTEVWSUVXX0FMVEVSTkFUSVZFU2A6XCJBbnN3ZXJzIGFsdGVybmF0aXZlczpcIlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKiAqL1xuICBpMThuKGtleSl7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5jYXB0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpP3RoaXMuX2NvbmZpZy5jYXB0aW9uc1trZXldOnRoaXMuX2NvbmZpZy5zaW5nbGVWaWV3VGV4dHMuaGFzT3duUHJvcGVydHkoa2V5KT90aGlzLl9jb25maWcuc2luZ2xlVmlld1RleHRzW2tleV06bnVsbFxuICB9XG5cbiAgZ2V0IGRhdGEoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmhpdGxpc3REYXRhfVxuXG4gIHNldCBkYXRhKGRhdGEpe1xuICAgIHRoaXMuX2NvbmZpZy5oaXRsaXN0RGF0YSA9IGRhdGE7XG4gIH1cbiAgZ2V0IGRpc2FibGVOZXh0QnV0dG9uKCl7XG4gICAgcmV0dXJuIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcy5kaXNhYmxlTmV4dEJ1dHRvbiB8fCBmYWxzZVxuICB9XG4gIGdldCBkaXNhYmxlUHJldkJ1dHRvbigpe1xuICAgIHJldHVybiB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMuZGlzYWJsZVByZXZCdXR0b24gfHwgZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSB2aXNpYmxlIEhpdExpc3QgY29sdW1ucyBvZiBPYmplY3QgdHlwZTogYHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ31gXG4gICAqIEByZXR1cm5zIHtBcnJheS48e2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfT59IFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHZpc2libGUgSGl0TGlzdCBjb2x1bW5zXG4gICAqICovXG4gIGdldCBjb2x1bW5zKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5jb2x1bW5zfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBIaXRMaXN0IGNvbHVtbnMgb2YgT2JqZWN0IHR5cGU6IGB7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9YFxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqICovXG4gIGdldCBhbGxDb2x1bW5zKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5hbGxDb2x1bW5zfVxuXG4gIGdldCBoaXRsaXN0SUQoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmNvbXBvbmVudElkfVxuICBnZXQgcGFnZUlEKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5wYWdlSWR9XG4gIGdldCBsYW5ndWFnZSgpe3JldHVybiB0aGlzLl9jb25maWcubGFuZ3VhZ2V9XG4gIGdldCBzZXJ2aWNlVVJMKCl7cmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt0aGlzLl9jb25maWcuc2VydmljZVVybH1gfVxuICBnZXQgcGFnZVN0YXRlSUQoKXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1BhZ2VTdGF0ZUlkJyk/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQYWdlU3RhdGVJZCcpLnZhbHVlOnVuZGVmaW5lZH1cbiAgZ2V0IHNvcnRpbmdQYWdpbmdWYWx1ZXMoKXtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXMhPW51bGw/dGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXM6e31cbiAgfVxuICBzZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcyh2YWwpe1xuICAgIHRoaXMuX2NvbmZpZy5zb3J0aW5nUGFnaW5nVmFsdWVzID0gdmFsO1xuICB9XG5cbiAgc3RhdGljIF9maXhKc29uRGF0ZShqc29uRGF0ZSkge1xuICAgIGlmICghKGpzb25EYXRlICYmIFkgJiYgWS5MYW5nLmlzRnVuY3Rpb24oanNvbkRhdGUucmVwbGFjZSkpKSB7cmV0dXJuIGpzb25EYXRlO31cbiAgICBsZXQgY29uc3RyID0ganNvbkRhdGUucmVwbGFjZShuZXcgUmVnRXhwKFwiXi9EYXRlXFxcXCgoWy0rXT9cXFxcZCspXFxcXCkvJFwiKSwgXCJuZXcgRGF0ZSgkMSlcIik7XG4gICAgaWYgKGNvbnN0ciA9PSBqc29uRGF0ZSkge3JldHVybiBqc29uRGF0ZTt9XG4gICAgcmV0dXJuIGV2YWwoY29uc3RyKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHRoZSBjb25maWcgZm9yIGEgSGl0TGlzdCBpZiBpdCdzIGluaXRpYWxpc2VkIG9uIHRoZSBwYWdlXG4gICAqIGBgYFxuICAgKiB7XG4gICAqICBhbGxDb2x1bW5zOkFycmF5LFxuICAgKiAgY2FwdGlvbnM6T2JqZWN0LFxuICAgKiAgY2xpZW50SWQ6U3RyaW5nLFxuICAgKiAgY29sdW1uczpBcnJheSxcbiAgICogIGNvbXBvbmVudElkOlN0cmluZyxcbiAgICogIGhhc2hlZFByb2plY3RJZDpTdHJpbmcsXG4gICAqICBoaXRsaXN0RGF0YTpBcnJheSxcbiAgICogIGxhbmd1YWdlOk51bWJlcixcbiAgICogIG5leHRUZXh0OlN0cmluZyxcbiAgICogIG5vSW5pdGlhbExvYWQ6Qm9vbGVhbixcbiAgICogIHBhZ2VBamF4RW5hYmxlZDpCb29sZWFuLFxuICAgKiAgcGFnZUlkOlN0cmluZyxcbiAgICogIHByZXZUZXh0OlN0cmluZyxcbiAgICogIHByZXZpZXc6Qm9vbGVhbixcbiAgICogIHNlYXJjaEl0ZW1zOkFycmF5LFxuICAgKiAgc2VhcmNoVmFsdWVzOkFycmF5LFxuICAgKiAgc2VydmljZVVybDpTdHJpbmcsXG4gICAqICBzZXJ2aWNlVXJsTWV0YURhdGE6U3RyaW5nLFxuICAgKiAgc2hvd1NpbmdsZVZpZXdPblJvd1NlbGVjdDpCb29sZWFuLFxuICAgKiAgc2luZ2xlVmlld0FwaVVybDpTdHJpbmcsXG4gICAqICBzaW5nbGVWaWV3Rm9ybXNDaHVua0FwaVVybDpTdHJpbmcsXG4gICAqICBzaW5nbGVWaWV3VGV4dHM6T2JqZWN0LFxuICAgKiAgc29ydGluZ1BhZ2luZ1ZhbHVlczpPYmplY3QsXG4gICAqICBzdHlsZXM6T2JqZWN0LFxuICAgKiAgdmVyc2lvbjpTdHJpbmdcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogKi9cbiAgc3RhdGljIGdldE9yaWdpbmFsQ29uZmlnKCl7XG4gICAgbGV0IHNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKTtcbiAgICBpZihzY3JpcHRzKXtcbiAgICAgIGxldCBpPXNjcmlwdHMubGVuZ3RoLFxuICAgICAgICBjZmcgPSAvKFlcXC5SZXBvcnRhbFxcLkhpdExpc3QsKVxccyguKj8pXFwpOy9naTtcbiAgICAgIHdoaWxlKGktLSl7XG4gICAgICAgIGxldCBzY3JpcHQgPSBzY3JpcHRzW2ldLnRleHQ7XG4gICAgICAgIGlmKHNjcmlwdC5pbmRleE9mKCdZLlJlcG9ydGFsLkhpdExpc3QsJyk+LTEpe1xuICAgICAgICAgIGxldCBleGVjID0gY2ZnLmV4ZWMoc2NyaXB0KTtcbiAgICAgICAgICByZXR1cm4gKGV4ZWMhPW51bGwgJiYgZXhlY1syXSk/IEpTT04ucGFyc2UoZXhlY1syXSk6IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIaXRsaXN0IGNvbmZpZyBpcyBub3QgcHJlc2VudCBvbiB0aGUgcGFnZScpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpdGxpc3RTZXR1cFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1zZXR1cC5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDA3LjA5LjIwMTYuXHJcbiAqL1xyXG5cclxuaW1wb3J0IEhpdGxpc3REYXRhc291cmNlIGZyb20gXCIuL2hpdGxpc3QtZGF0YXNvdXJjZVwiO1xyXG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gXCJyLXJlcG9ydGFsLWJhc2VcIjtcclxuXHJcbndpbmRvdy5SZXBvcnRhbCA9IHdpbmRvdy5SZXBvcnRhbCB8fCB7fTtcclxuUmVwb3J0YWxCYXNlLm1peGluKHdpbmRvdy5SZXBvcnRhbCx7XHJcbiAgSGl0bGlzdERhdGFzb3VyY2VcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IEhpdGxpc3REYXRhc291cmNlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9tYWluLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZUdyaWRUaWxlU3R5bGUgZnJvbSAnLi9JbWFnZUdyaWRUaWxlLmNzcyc7XG5pbXBvcnQgSW1nIGZyb20gJ1Byb3BvcnRpb25hbEltYWdlJztcblxuY2xhc3MgSW1hZ2VHcmlkVGlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSB0aWxlIGZvciBpbWFnZSBsaXN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuaW1hZ2UgLSBpbWFnZSB1cmxcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyIC0gYSBwbGFjZWhvbGRlciBpbWFnZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMucGxhY2Vob2xkZXJTaXppbmcgLSBTZXRzIGEgc2l6aW5nIG9wdGlvbiBmb3IgdGhlIHBsYWNlaG9sZGVyLiBCeSBkZWZhdWx0IGl0J3MgdGhlIHNhbWUgYXMgZm9yIHRoZSBgc3JjYCBpbWFnZSwgYnV0IHNldCB0byBgaW5pdGlhbGAgb3Igb3RoZXIgdmFsaWQgYGJhY2tncm91bmQtc2l6ZWAgdmFsdWUgdG8gb3ZlcnJpZGUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5tZWRpYXR5cGUgLSBhIGRlZmF1bHQgbWVkaWEgaWNvbiBpbnN0ZWFkIG9mIHRoZSBwbGFjZWhvbGRlciBpbWFnZTogb25lIG9mIGBpbWFnZWAsYGF1ZGlvYCxgdmlkZW9gXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuaWNvbkNvbG9yPVwiI2NjY2NjY1wiXSAtIGRlZmF1bHQgcGxhY2Vob2xkZXIgbWVkaWEgaWNvbiBjb2xvclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmljb25TaXplPTQ4XSAtIGRlZmF1bHQgcGxhY2Vob2xkZXIgbWVkaWEgaWNvbiBzaXplXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuYXNwZWN0PVwiMTY6OVwiXSAtIGFzcGVjdCByYXRpbyBvZiB0aGUgaW1hZ2UgdG8gYmUgaW4gdGhlIHRpbGVcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnRpdGxlIC0gdGl0bGUgb2YgdGhlIHZpZGVvXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5kZXNjcmlwdGlvbiAtIGRlc2NyaXB0aW9uIG9mIHRoZSB2aWRlb1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByb3BzLmFjdGlvbkljb24gLSBpY29uIHRvIGRpc3BsYXkgYXMgdGhlIGFjdGlvbiBpY29uLiBJdCBhbHNvIGhhcyB0byBoYXZlIGEgY2FsbGJhY2sgYXR0YWNoZWQgdG8gaXQgd2hlbiBwYXNzZWQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLm9uU2VsZWN0IC0gY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWQgd2hlbiB0aGUgbGluayBpcyBjbGlja2VkXG4gICAqICovXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgbGV0IGFjdGlvbkJ1dHRvbiA9IG51bGw7XG4gICAgaWYodGhpcy5wcm9wcy5hY3Rpb25JY29uKXtcbiAgICAgIGFjdGlvbkJ1dHRvbiA9IDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tZWRpdFwiPjxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tYWN0aW9uLWljb25cIj57dGhpcy5wcm9wcy5hY3Rpb25JY29ufTwvZGl2PjwvZGl2PjtcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tY292ZXJcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uU2VsZWN0fT5cbiAgICAgICAgICA8SW1nXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgYXNwZWN0PXt0aGlzLnByb3BzLmFzcGVjdH1cbiAgICAgICAgICAgIHNpemluZz1cImNvdmVyXCJcbiAgICAgICAgICAgIHByZWxvYWQ9e3RydWV9XG4gICAgICAgICAgICBmYWRlPXt0cnVlfVxuICAgICAgICAgICAgYWx0PXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMuX2NvbXB1dGVUaWxlVHlwZSgpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXJTaXppbmc9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJTaXppbmd9XG4gICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuaW1hZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tbWV0YVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS10aXRsZSBlbGxpcHNpc1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25TZWxlY3R9Pnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1kZXNjcmlwdGlvbiBlbGxpcHNpc1wiPnt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHthY3Rpb25CdXR0b259XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2NvbXB1dGVUaWxlVHlwZSgpe1xuICAgIGlmKCF0aGlzLnByb3BzLnBsYWNlaG9sZGVyICYmIHRoaXMucHJvcHMubWVkaWF0eXBlKXtcbiAgICAgIGNvbnN0IHR5cGVzID0gWydpbWFnZScsJ2F1ZGlvJywndmlkZW8nXTtcbiAgICAgIGlmKHR5cGVzLmluZGV4T2YodGhpcy5wcm9wcy5tZWRpYXR5cGUpPT0tMSl7dGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgdHlwZSBcIiR7dGhpcy5wcm9wcy5tZWRpYXR5cGV9XCIgaXMgc3BlY2lmaWVkYCl9XG4gICAgICBsZXQgaWNvbiA9IHRoaXMuY29uc3RydWN0b3IuaWNvblNlcnZlcih0aGlzLnByb3BzLm1lZGlhdHlwZSx0aGlzLnByb3BzLmljb25TaXplLHRoaXMucHJvcHMuaWNvbkNvbG9yKTtcbiAgICAgIHJldHVybiAnZGF0YTppbWFnZS9zdmcreG1sLCcgKyBlc2NhcGUoaWNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnBsYWNlaG9sZGVyXG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGljb24gd2l0aCBhIGNvcnJlY3QgZmlsbCBjb2xvclxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIGljb24gbmFtZSAob25lIG9mIGBpbWFnZWAsIGB2aWRlb2AsIGBhdWRpb2ApXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbc2l6ZT0yNF0gLSBpY29uIHNpemUgaW4gcGl4ZWxzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZmlsbD1cIiNjY2NjY2NcIl0gLSB2YWxpZCBDU1MgY29sb3IgZGVjbGFyYXRpb25cbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICogKi9cbiAgc3RhdGljIGljb25TZXJ2ZXIobmFtZSxzaXplPTQ4LGZpbGw9XCIjY2NjY2NjXCIpe1xuICAgIGNvbnN0IGljb25zID0ge1xuICAgICAgaW1hZ2U6IGA8cGF0aCBkPVwiTTIxIDE5VjVjMC0xLjEtLjktMi0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnpNOC41IDEzLjVsMi41IDMuMDFMMTQuNSAxMmw0LjUgNkg1bDMuNS00LjV6XCIvPmAsXG4gICAgICBhdWRpbzogYDxwYXRoIGQ9XCJNMTIgM3YxMC41NWMtLjU5LS4zNC0xLjI3LS41NS0yLS41NS0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRWN2g0VjNoLTZ6XCIvPmAsXG4gICAgICB2aWRlbzogYDxwYXRoIGQ9XCJNMTggNGwyIDRoLTNsLTItNGgtMmwyIDRoLTNsLTItNEg4bDIgNEg3TDUgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY0aC00elwiLz5gXG4gICAgfTtcbiAgICBpZighaWNvbnNbbmFtZV0pe3Rocm93IG5ldyBFcnJvcihgaWNvbiBcIiR7bmFtZX1cIiBpcyBub3Qgb24gdGhlIGxpc3RgKX1cblxuICAgIHJldHVybiBgPHN2ZyBmaWxsPVwiJHtmaWxsfVwiIGhlaWdodD1cIiR7c2l6ZX1cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIke3NpemV9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiR7aWNvbnNbbmFtZV19PC9zdmc+YFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JpZFRpbGVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbWFnZUdyaWRUaWxlL0ltYWdlR3JpZFRpbGUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2VHcmlkVGlsZSBmcm9tICcuLi9JbWFnZUdyaWRUaWxlL0ltYWdlR3JpZFRpbGUnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBgSW1hZ2VHcmlkYCBpcyBhIHN0YXRlbGVzcyBSZWFjdCBjb21wb25lbnQgdGhhdCBhbGxvd3MgdG8gY29tcHV0ZSBhbiBhcnJheSBvZiBJbWFnZUdyaWRUaWxlcyBmcm9tIGBpdGVtc2AgcGFzc2VkIGluIHByb3BzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcy5pdGVtcyAtIGFuIGFycmF5IG9mIGl0ZW1zIGB7aWQ6TnVtYmVyfFN0cmluZywgaW1hZ2U6U3RyaW5nLCBtZWRpYXR5cGU6P1N0cmluZywgcGxhY2Vob2xkZXI6P1N0cmluZywgdGl0bGU6U3RyaW5nLGRlc2NyaXB0aW9uOlN0cmluZ31gXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzLmFzcGVjdCAtIGFzcGVjdCByYXRpbyBmb3IgdGhlIEltYWdlR3JpZFRpbGUgaW1hZ2VcclxuICogQHBhcmFtIHtKU1h9IHByb3BzLmFjdGlvbkljb24gLSBhY3Rpb24gaWNvbiBKU1ggd2l0aCBhIGJvdW5kIGhhbmRsZXJcclxuICogQHBhcmFtIHs/U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlclNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIuIEJ5IGRlZmF1bHQgaXQncyB0aGUgc2FtZSBhcyBmb3IgdGhlIGBzcmNgIGltYWdlLCBidXQgc2V0IHRvIGBpbml0aWFsYCBvciBvdGhlciB2YWxpZCBgYmFja2dyb3VuZC1zaXplYCB2YWx1ZSB0byBvdmVycmlkZS5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMub25TZWxlY3QgLSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkIG9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBwcm9wcy5kdW1teUl0ZW1zIC0gZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZCBvblxyXG4gKiAqL1xyXG5jbGFzcyBJbWFnZUdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtpdGVtcyxkdW1teUl0ZW1zLGFzcGVjdCxwbGFjZWhvbGRlclNpemluZyxhY3Rpb25JY29uLG9uU2VsZWN0fSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFwiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aD4wICYmIGl0ZW1zLm1hcCgoaXRlbSxpbmRleCk9PihcclxuICAgICAgICAgICAgPEltYWdlR3JpZFRpbGVcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cclxuICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICBtZWRpYXR5cGU9e2l0ZW0ubWVkaWF0eXBlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpdGVtLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyU2l6aW5nPXtwbGFjZWhvbGRlclNpemluZ31cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBhY3Rpb25JY29uPXthY3Rpb25JY29ufVxyXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXsoKT0+b25TZWxlY3QuY2FsbCh0aGlzLGl0ZW0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAge2R1bW15SXRlbXMgJiYgdGhpcy5yZW5kZXJEdW1teUl0ZW1zKGR1bW15SXRlbXMpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJlbmRlckR1bW15SXRlbXMoY291bnQpe1xyXG4gICAgY29uc3QgZHVtbXlJdGVtcz1bXTtcclxuICAgICAgd2hpbGUoY291bnQtLSl7XHJcbiAgICAgICAgZHVtbXlJdGVtcy5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZVwiLz4pXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGR1bW15SXRlbXNcclxuICB9XHJcbn1cclxuXHJcbkltYWdlR3JpZC5kZWZhdWx0UHJvcHM9e1xyXG4gIGR1bW15SXRlbXM6MTJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHcmlkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VHcmlkL0ltYWdlR3JpZC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMS4wMS4yMDE3LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlR3JpZCBmcm9tICcuLi9JbWFnZUdyaWQvSW1hZ2VHcmlkJztcbmltcG9ydCBIaXRsaXN0RFMgZnJvbSBcInItaGl0bGlzdC1kYXRhc291cmNlXCI7XG5pbXBvcnQgU2luZ2xlVmlldyBmcm9tIFwiLi4vU2luZ2xlVmlldy9TaW5nbGVWaWV3XCI7XG5cbmNsYXNzIFJlYWN0VmlkZW8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5jb25maWcgLSBuYW1lIG9mIHRoZSBjb25maWcgdGhhdCBtYXBzIHF1ZXN0aW9uIGlkcyBmcm9tIGRhdGEgd2l0aCB0aGUgZGF0YSB0eXBlc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByb3BzLnRodW1ic1BsYWNlaG9sZGVyIC0gZGlzcGxheSB0aHVtYnMgYXMgaW1hZ2UgcGxhY2Vob2xkZXJzIGluc3RlYWQgb2YgbWVkaWEgaWNvbnNcbiAgICpcbiAgICogKi9cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU2VsZWN0PXRoaXMub25TZWxlY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLkRTID0gbmV3IEhpdGxpc3REUygpO1xuICAgIHRoaXMucHJvcHMudmVyYm9zZSAmJiBjb25zb2xlLmxvZyh0aGlzLkRTKTtcbiAgICB0aGlzLnNldHVwRGF0YUxpc3RlbmVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0ZW1zOm51bGwsXG4gICAgICBzaW5nbGVWaWV3OntcbiAgICAgICAgbGluazonJ1xuICAgICAgfSxcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOmZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmJhY2tDYWxsYmFjaz10aGlzLmJhY2tDYWxsYmFjay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtpdGVtcyxzaW5nbGVWaWV3VmlzaWJsZSxzaW5nbGVWaWV3fT10aGlzLnN0YXRlO1xuICAgIGxldCByZW5kZXIgPSBudWxsO1xuICAgIGlmKEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCE9MCl7XG4gICAgICByZW5kZXIgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgR3JpZENvbnRhaW5lciAkeyFzaW5nbGVWaWV3VmlzaWJsZSA/ICdHcmlkVmlldyc6Jyd9YH0+XG4gICAgICAgICAgICA8U2luZ2xlVmlld1xuICAgICAgICAgICAgICBsaW5rPXtzaW5nbGVWaWV3Lmxpbmt9XG4gICAgICAgICAgICAgIHZpc2libGU9e3NpbmdsZVZpZXdWaXNpYmxlfVxuICAgICAgICAgICAgICBpbml0aWFsTG9hZD17dHJ1ZX1cbiAgICAgICAgICAgICAgYmFja0NhbGxiYWNrPXt0aGlzLmJhY2tDYWxsYmFja31cbiAgICAgICAgICAgICAgaGVhZGVyVGV4dD17YEVkaXQgdmlkZW8gXCIke3NpbmdsZVZpZXcudGl0bGV9XCJgfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkQ29udGFpbmVyXCIgc3R5bGU9e3tkaXNwbGF5OiAhc2luZ2xlVmlld1Zpc2libGU/ICdibG9jaycgOiAnbm9uZSd9fT5cbiAgICAgICAgICAgIDxJbWFnZUdyaWRcbiAgICAgICAgICAgICAgYXNwZWN0PVwiMTY6OVwiXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0fVxuICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTmF2aWdhdGlvbigpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYodGhpcy5EUyl7XG4gICAgICAgIHJlbmRlciA9IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdyaWRDb250YWluZXIgSW1hZ2VHcmlkXCI+e3RoaXMuRFMuaTE4bihBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGg9PTAgPyAnUkVQT1JUX1NJTkdMRVZJRVdfTk9USElOR0ZPVU5EJzonbG9hZGluZ0RhdGEnKX08L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHt0aHJvdyBuZXcgRXJyb3IoJ0hpdGxpc3REYXRhc291cmNlIGlzIG5vdCBhdmFpbGFibGUnKX1cbiAgICB9XG4gICAgcmV0dXJuIHJlbmRlclxuICB9XG5cbiAgcmVuZGVyTmF2aWdhdGlvbigpe1xuICAgIGlmKHRoaXMuY29uZmlnKXtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uO1xuICAgICAgaWYocGFnaW5hdGlvbiA9PT0nY29udGludW91cycpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb250aW51b3VzTmF2aWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5nTmF2aWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHBhZ2luZ05hdmlnYXRpb24oKXtcbiAgICBsZXQgcGFnZUluZm89Jyc7XG4gICAgY29uc29sZS5sb2codGhpcy5EUy5wYWdlSW5mbyx0aGlzLkRTLnNvcnRpbmdQYWdpbmdWYWx1ZXMpO1xuICAgIGlmKHRoaXMuRFMucGFnZUluZm8gJiYgdGhpcy5EUy5zb3J0aW5nUGFnaW5nVmFsdWVzICYmIHRoaXMuRFMuc29ydGluZ1BhZ2luZ1ZhbHVlcy50b3RhbEhpdHMpe1xuICAgICAgcGFnZUluZm8gPSBgJHt0aGlzLkRTLnBhZ2VJbmZvfSBvZiAke3RoaXMuRFMuc29ydGluZ1BhZ2luZ1ZhbHVlcy50b3RhbEhpdHN9YFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Sb3dcIj5cbiAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gYWNjZW50XCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2FkUHJldmlvdXNQYWdlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5EUy5kaXNhYmxlUHJldkJ1dHRvbn1cbiAgICAgICAgPlxuICAgICAgICAgICB7dGhpcy5EUy5pMThuKCdSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VUycpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsQnV0dG9uIGFjY2VudFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9hZE5leHRQYWdlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbn1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLkRTLmkxOG4oJ1JFUE9SVF9TSU5HTEVWSUVXX05FWFQnKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3Bhbj57cGFnZUluZm99PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29udGludW91c05hdmlnYXRpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Sb3dcIiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBmbGF0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2FkTW9yZX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuRFMuZGlzYWJsZU5leHRCdXR0b259XG4gICAgICAgICAgICAgID5Mb2FkIG1vcmU8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG5cblxuICBiYWNrQ2FsbGJhY2soKXtcbiAgICB0aGlzLnNldFN0YXRlKHtzaW5nbGVWaWV3VmlzaWJsZTpmYWxzZX0pO1xuICAgIHRoaXMuRFMuaW5pdGlhbERhdGFMb2FkKCkudGhlbihyZXNwb25zZT0+dGhpcy5wcm9jZXNzRGF0YShyZXNwb25zZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIExhdW5jaGVzIGxpc3RlbmVyIGZvciBgWS5HbG9iYWwucmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVgIGV2ZW50IHdpdGhpbiBZVUkgd2hpY2ggaXMgdHJpZ2dlcmVkIGV2ZXJ5IHRpbWUgdGhlIGZpbHRlciBwYW5lbCB1cGRhdGVzIG9yIG9uIGluaXRpYWwgbG9hZFxuICAgKiAqL1xuICBzZXR1cERhdGFMaXN0ZW5lcigpe1xuICAgIGlmKFkgJiYgWS5HbG9iYWwpe1xuICAgICAgWS5HbG9iYWwub24oXCJyZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZVwiLCBmaWx0ZXJJbmZvPT57XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZUNvbmZpZyh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgICAgIGlmKHRoaXMuRFMgJiYgdGhpcy5jb25maWcpe1xuICAgICAgICAgIHRoaXMuRFMubW9kaWZpZXIgPSBmaWx0ZXJJbmZvOyAvLyBmaWx0ZXIgaW5mb3JtYXRpb24gYXMgYSBtb2RpZmllciBmb3IgZGF0YSBmZXRjaFxuICAgICAgICAgIHRoaXMuRFMuaW5pdGlhbERhdGFMb2FkKCkudGhlbihyZXNwb25zZT0+dGhpcy5wcm9jZXNzRGF0YShyZXNwb25zZSkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWVVJIGlzIG5vdCBkZWZpbmVkIG9yIGFjY2Vzc2libGUsIGNhbm5vdCBzZXQgdXAgYSBcInJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlXCIgbGlzdGVuZXInKTtcbiAgICB9XG4gIH1cblxuICBsb2FkTmV4dFBhZ2U9KCk9PntcbiAgICB0aGlzLkRTLm5leHRQYWdlKCkudGhlbihyZXNwb25zZT0+dGhpcy5wcm9jZXNzRGF0YShyZXNwb25zZSkpO1xuICB9O1xuICBsb2FkUHJldmlvdXNQYWdlPSgpPT57XG4gICAgdGhpcy5EUy5wcmV2aW91c1BhZ2UoKS50aGVuKHJlc3BvbnNlPT50aGlzLnByb2Nlc3NEYXRhKHJlc3BvbnNlKSk7XG4gIH07XG4gIGxvYWRNb3JlPSgpPT57XG4gICAgdGhpcy5EUy5uZXh0UGFnZSgpLnRoZW4ocmVzcG9uc2U9PnRoaXMucHJvY2Vzc0RhdGEocmVzcG9uc2UsJ2FwcGVuZCcpKTtcbiAgfTtcblxuICBpbml0aWFsaXNlQ29uZmlnKGNvbmZpZ05hbWUpe1xuICAgIGlmKCF0aGlzLmNvbmZpZyl7XG4gICAgICBpZighd2luZG93W2NvbmZpZ05hbWVdKXt0aHJvdyBuZXcgRXJyb3IoJ2NvbmZpZyBpcyBub3QgcGFzc2VkIGZyb20gYmFja2VkJyl9XG4gICAgICB0aGlzLmNvbmZpZyA9IHdpbmRvd1tjb25maWdOYW1lXTtcbiAgICB9XG4gIH1cblxuICBwcm9jZXNzRGF0YShkYXRhLG1vZGU9J3JlcGxhY2UnKXtcbiAgICBsZXQgYyA9IHRoaXMuY29uZmlnLFxuICAgICAgY29uZmlnPXt9O1xuICAgIFsnaWQnLCd0aXRsZScsJ2Rlc2NyaXB0aW9uJywnaW1hZ2UnLCdhdWRpbycsJ3ZpZGVvJywndGFncyddLmZvckVhY2goaXRlbT0+Y29uZmlnW2l0ZW1dPVt0aGlzLmNvbmZpZ1tpdGVtXV0pO1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIGlkOmMuaWQsXG4gICAgICB0aXRsZTpjLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246Yy5kZXNjcmlwdGlvbixcbiAgICAgIGltYWdlOmMuaW1hZ2UsXG4gICAgICBhdWRpbzpjLmF1ZGlvLFxuICAgICAgdmlkZW86Yy52aWRlbyxcbiAgICAgIHRhZ3M6Yy50YWdzLFxuICAgIH07XG4gICAgbGV0IG5ld0RhdGEgPSBkYXRhLm1hcCgoaXRlbSxpbmRleCk9PntcbiAgICAgIGxldCBwYXJzZWREYXRhID17fTtcbiAgICAgIGZvcihsZXQga2V5IGluIGNvbmZpZyl7XG4gICAgICAgIHBhcnNlZERhdGFba2V5XT10aGlzLnByZXBhcmVEYXRhKGl0ZW1bY29uZmlnW2tleV1dLGtleSk7XG4gICAgICAgIC8vIGlmIGltYWdlIC0gd2UgbWlnaHQgd2FudCB0byB1c2UgYSBwbGFjZWhvbGRlciBhcyB0aGUgdGh1bWIsIGFuZCBsb2FkIHRoZSBmdWxsIGltYWdlIGluIGJhY2tncm91bmRcbiAgICAgICAgaWYoa2V5ID09ICdpbWFnZScpe1xuICAgICAgICAgIGlmKHRoaXMucHJvcHMudGh1bWJzUGxhY2Vob2xkZXIpe1xuICAgICAgICAgICAgcGFyc2VkRGF0YVsncGxhY2Vob2xkZXInXSA9IHBhcnNlZERhdGEuaW1hZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcnNlZERhdGEuaW1hZ2UgPSBwYXJzZWREYXRhLmltYWdlLnJlcGxhY2UoL190aHVtYi9naSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBtZWRpYXR5cGUgb3IgYSBwbGFjZWhvbGRlciBpY29uXG4gICAgICAgIGlmKFsndmlkZW8nLCdhdWRpbycsJ2ltYWdlJ10uaW5kZXhPZihrZXkpPi0xICYmIGNvbmZpZ1trZXldKXtcbiAgICAgICAgICBwYXJzZWREYXRhLm1lZGlhdHlwZSA9IGtleVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBnZXQgaWQgZm9yIGtleXNcbiAgICAgIHBhcnNlZERhdGEuaWQgPSBpdGVtLnJlc3BvbnNlaWQ/IGl0ZW0ucmVzcG9uc2VpZCA6IGluZGV4O1xuICAgICAgLy8gY2FsY3VsYXRlIGxpbmsgcGFzc2VkIGFzIGBzbGlua2AgcHJvcGVydHkgaW4gZGF0YVxuICAgICAgaWYoaXRlbS5zbGluayl7XG4gICAgICAgIGxldCBsPWl0ZW0uc2xpbms7XG4gICAgICAgIHBhcnNlZERhdGEubGluayA9ICgvaHJlZj0nKC4rPyknL2dpKS5leGVjKGwpWzFdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcnNlZERhdGE7XG4gICAgfSk7XG5cbiAgICAvL3VwZGF0ZSBzdGF0ZSB3aXRoIHRoZSBuZXcgc2V0IG9mIGRhdGEgb3IgYSBtZXJnZWQgZGF0YVxuICAgIGlmKG1vZGU9PT0ncmVwbGFjZScpdGhpcy5zZXRTdGF0ZSh7aXRlbXM6bmV3RGF0YX0pO1xuICAgIGlmKG1vZGU9PT0nYXBwZW5kJyl0aGlzLnNldFN0YXRlKHByZXZTdGF0ZT0+KHtpdGVtczpbLi4ucHJldlN0YXRlLml0ZW1zLC4uLm5ld0RhdGFdfSkpO1xuICB9XG5cbiAgLyoqXG4gICogbWFzc2FnZSBkYXRhIHRvIGZpdCB0aGUgdHlwZSB3ZSBleHBlY3QgdG8gcmVjZWl2ZSBpbiByZWFjdCB2aWV3XG4gICogKi9cbiAgcHJlcGFyZURhdGEoZGF0YSx0eXBlKXtcbiAgICBzd2l0Y2godHlwZSl7XG4gICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgIGxldCByZXN1bHQgPSAoL3NyYz0nKC4rPyknL2dpKS5leGVjKGRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdCAhPW51bGwgJiYgcmVzdWx0WzFdPyByZXN1bHRbMV0gOiB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOlxuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgICByZXR1cm4gIShkYXRhLmluZGV4T2YoJy0nKT4tMSAmJiBkYXRhLnRyaW0oKS5sZW5ndGg9PTEpID8gZGF0YS50cmltKCkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGFncyc6IHJldHVybiBkYXRhICYmIChkYXRhLmluZGV4T2YoJywnKT4tMT8gZGF0YS5zcGxpdCgnLCcpIDogZGF0YS5pbmRleE9mKCctJyk+LTEgJiYgZGF0YS50cmltKCkubGVuZ3RoPT0xPyB1bmRlZmluZWQgOiBkYXRhLnRyaW0oKSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0KGRhdGEpe1xuICAgIGlmKHRoaXMucHJvcHMudmVyYm9zZSl7XG4gICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgaXRlbSBkYXRhOlwiLGRhdGEpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNpbmdsZVZpZXc6ZGF0YSxcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOnRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhY3Rpb25JY29uKCl7XG4gICAgcmV0dXJuICA8c3ZnIGNsYXNzTmFtZT1cImljb25cIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44My0xLjgzelwiLz48L3N2Zz5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdFZpZGVvO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VmlkZW8vUmVhY3RWaWRlby5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1ESWNvbiBmcm9tICdNREljb24nO1xyXG5pbXBvcnQge2ljX2Fycm93X2JhY2t9IGZyb20gJy4uL2ljb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBzaW5nbGUgdmlldyB3aGljaCBpcyBhIG5hdmlnYXRpb24gaGVhZGVyIGZvbGxvd2VkIGJ5IGFuIHJlbmRlcklmcmFtZSB0aGF0IGxvYWRzIGV4dGVybmFsIGNvbnRlbnQgZnJvbSBhIGxpbmtcclxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcm9wcy52aXNpYmxlPWZhbHNlXSAtIHdoZXRoZXIgdGhlIHJlbmRlcklmcmFtZSBpcyB2aXNpYmxlIG9uIGEgcGFnZVxyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMuaW5pdGlhbExvYWQgLSB3aGV0aGVyIGl0J3MgdGhlIGZpcnN0IHRpbWUgdGhlIHJlbmRlcklmcmFtZSBsb2FkcyAobmVjZXNzYXJ5IGZvciB0aGUgc3VydmV5LCBiZWNhdXNlIGFuIGluaXRpYWwgbG9hZCBpcyB0aGUgZmlyc3QgdGltZSB0aGUgc3VydmV5IGxvYWRzLCBhbmQgc2Vjb25kIGxvYWQgaXMgd2hlbiB0aGUgc3VydmV5IGlzIHN1Ym1pdHRlZClcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMubGluayAtIHRoZSBsaW5rIHRvIGEgcGFnZSB0byBsb2FkIGluIGFuIHJlbmRlcklmcmFtZVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuaGVhZGVyVGV4dF0gLSB0aGUgdGV4dCB0byBiZSBkaXNwbGF5ZWQgbmV4dCB0byB0aGUgYmFjayBidXR0b24gaW4gdGhlIG5hdiBoZWFkZXJcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5iYWNrQ2FsbGJhY2sgLSB0aGUgY2FsbGJhY2sgZXhlY3V0ZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBuYXZpZ2F0ZSBvZmYgdGhlIFNpbmdsZVZpZXcgcGFnZSAoaGl0dGluZyBiYWNrIG9yIHN1Ym1pdClcclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcm9wcy5jbG9zZU9uU3VibWl0ID0gZmFsc2VdIC0gdGhlIGNhbGxiYWNrIGV4ZWN1dGVkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gbmF2aWdhdGUgb2ZmIHRoZSBTaW5nbGVWaWV3IHBhZ2UgKGhpdHRpbmcgYmFjayBvciBzdWJtaXQpXHJcbiAgICogKi9cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgbGV0IHt2aXNpYmxlLCBsaW5rLCBpbml0aWFsTG9hZD10cnVlfSA9IHRoaXMucHJvcHM7XHJcbiAgICB0aGlzLnN0YXRlICAgICAgICAgICAgICAgICAgICAgICA9IHtcclxuICAgICAgdmlzaWJsZSxcclxuICAgICAgbGluayxcclxuICAgICAgaW5pdGlhbExvYWQsXHJcbiAgICAgIGlmcmFtZVZpc2libGU6IGZhbHNlLFxyXG4gICAgICBpZnJhbWVIZWlnaHQgOiAnYXV0bycsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5vbkxvYWQgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZWNlaXZlTWVzc2FnZSAgICAgICAgICAgICAgPSB0aGlzLnJlY2VpdmVNZXNzYWdlLmJpbmQodGhpcyk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5yZWNlaXZlTWVzc2FnZSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICB0aGlzLm1hcFByb3BzVG9TdGF0ZShuZXh0UHJvcHMpXHJcbiAgfVxyXG5cclxuICBtYXBQcm9wc1RvU3RhdGUocHJvcHMpIHtcclxuICAgIGxldCB7dmlzaWJsZSwgbGluaywgaW5pdGlhbExvYWR9ID0gcHJvcHM7XHJcbiAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlICE9IHZpc2libGUgfHwgdGhpcy5wcm9wcy5saW5rICE9IGxpbmsgfHwgdGhpcy5wcm9wcy5pbml0aWFsTG9hZCAhPSBpbml0aWFsTG9hZCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtsaW5rLCB2aXNpYmxlLCBpbml0aWFsTG9hZH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm1hcFByb3BzVG9TdGF0ZSh0aGlzLnByb3BzKTtcclxuICB9XHJcblxyXG4gIHNldHVwTGlzdGVuZXIoZSkge1xyXG4gICAgdGhpcy5oYW5kc2hha2UodGhpcy5pZnJhbWVFbCwgdGhpcy5nZXREb21haW4odGhpcy5zdGF0ZS5saW5rKSlcclxuICB9XHJcblxyXG4gIG9uTG9hZChlKSB7XHJcbiAgICBpZih0aGlzLnN0YXRlLmxpbmsubGVuZ3RoPjApe1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5pbml0aWFsTG9hZCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgdmlzaWJsZSAgICAgIDogdHJ1ZSxcclxuICAgICAgICAgIGlmcmFtZVZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICBpbml0aWFsTG9hZCAgOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vdGhpcy5oYW5kc2hha2UoZS50YXJnZXQsIHRoaXMuZ2V0RG9tYWluKHRoaXMuc3RhdGUubGluaykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RG9tYWluKGxpbmspIHtcclxuICAgIHJldHVybiBsaW5rICYmIGxpbmsubGVuZ3RoID4gMCA/ICgvKC4rP1xcL1xcLy4rPylcXC8vZ2kpLmV4ZWMobGluaylbMV0gOiBudWxsXHJcbiAgfVxyXG5cclxuICBoYW5kc2hha2UoZWwsIHRhcmdldE9yaWdpbikge1xyXG4gICAgaWYgKHRhcmdldE9yaWdpbiAhPSBudWxsKSB7XHJcbiAgICAgIGxldCBpZnJhbWUgICAgICAgID0gZWwuY29udGVudFdpbmRvdztcclxuICAgICAgdGhpcy50YXJnZXRPcmlnaW4gPSB0YXJnZXRPcmlnaW47XHJcbiAgICAgIGlmcmFtZS5wb3N0TWVzc2FnZSgnY29ubmVjdCcsIHRhcmdldE9yaWdpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWNlaXZlTWVzc2FnZShldmVudCkge1xyXG4gICAgbGV0IG9yaWdpbiA9IGV2ZW50Lm9yaWdpbiB8fCBldmVudC5vcmlnaW5hbEV2ZW50Lm9yaWdpbjsgLy8gRm9yIENocm9tZSwgdGhlIG9yaWdpbiBwcm9wZXJ0eSBpcyBpbiB0aGUgZXZlbnQub3JpZ2luYWxFdmVudCBvYmplY3QuXHJcbiAgICBpZiAob3JpZ2luICE9PSB0aGlzLnRhcmdldE9yaWdpbilyZXR1cm47XHJcbiAgICBpZiAoZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLmFjdGlvbiAmJiB0aGlzW2V2ZW50LmRhdGEuYWN0aW9uXSkge1xyXG4gICAgICB0aGlzW2V2ZW50LmRhdGEuYWN0aW9uXShldmVudC5kYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignYWN0aW9uIG5vdCBmb3VuZCBmb3IgJywgZXZlbnQuZGF0YSwgZXZlbnQuZGF0YS5hY3Rpb24sIHRoaXNbZXZlbnQuZGF0YS5hY3Rpb25dKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHtsaW5rLCB2aXNpYmxlLGlmcmFtZVZpc2libGV9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlVmlld1wiIHN0eWxlPXt7ZGlzcGxheTogdGhpcy5zdGF0ZS52aXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJ319PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0taGVhZGVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3LS1iYWNrLWJ1dHRvblwiIHRpdGxlPVwiUmV0dXJuIHRvIHRoZSBsaXN0XCIgb25DbGljaz17dGhpcy5wcm9wcy5iYWNrQ2FsbGJhY2t9PlxyXG4gICAgICAgICAgICA8TURJY29uIGljb249e2ljX2Fycm93X2JhY2t9Lz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmhlYWRlclRleHR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3RoaXMucmVuZGVySWZyYW1lKGxpbmssIHZpc2libGUgPyBpZnJhbWVWaXNpYmxlIDogdmlzaWJsZSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVuZGVycyBhbiByZW5kZXJJZnJhbWUgZWxlbWVudFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsaW5rIC0gdXJsIG9mIHRoZSByZW5kZXJJZnJhbWVcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmlzaWJsZSAtIHZpc2liaWxpdHkgb2YgdGhlIHJlbmRlcklmcmFtZVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBoZWlnaHQgLSBoZWlnaHQgb2YgdGhlIHJlbmRlcklmcmFtZVxyXG4gICAqICovXHJcbiAgcmVuZGVySWZyYW1lKGxpbmssIHZpc2libGUpIHtcclxuICAgIHJldHVybiA8aWZyYW1lXHJcbiAgICAgIHJlZj17aWZyYW1lID0+IHtcclxuICAgICAgICB0aGlzLmlmcmFtZUVsID0gaWZyYW1lXHJcbiAgICAgIH19XHJcbiAgICAgIHNyYz17bGlua31cclxuICAgICAgb25Mb2FkPXt0aGlzLm9uTG9hZH1cclxuICAgICAgc3R5bGU9e3tkaXNwbGF5OiB2aXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJ319Lz47XHJcbiAgfVxyXG59XHJcblxyXG5TaW5nbGVWaWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICBjbG9zZU9uU3VibWl0OiBmYWxzZVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2luZ2xlVmlldy9TaW5nbGVWaWV3LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgaWNfc3RhciA9IDxwYXRoIGQ9XCJNMTIgMTcuMjdMMTguMTggMjFsLTEuNjQtNy4wM0wyMiA5LjI0bC03LjE5LS42MUwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjF6XCIvPjtcbmV4cG9ydCBjb25zdCBpY19zdGFyX2JvcmRlciA9IDxwYXRoIGQ9XCJNMjIgOS4yNGwtNy4xOS0uNjJMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxIDEyIDE3LjI3IDE4LjE4IDIxbC0xLjYzLTcuMDNMMjIgOS4yNHpNMTIgMTUuNGwtMy43NiAyLjI3IDEtNC4yOC0zLjMyLTIuODggNC4zOC0uMzhMMTIgNi4xbDEuNzEgNC4wNCA0LjM4LjM4LTMuMzIgMi44OCAxIDQuMjhMMTIgMTUuNHpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX2Fycm93X2JhY2sgPSA8cGF0aCBkPVwiTTIwIDExSDcuODNsNS41OS01LjU5TDEyIDRsLTggOCA4IDggMS40MS0xLjQxTDcuODMgMTNIMjB2LTJ6XCIvPjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pY29ucy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvSW1hZ2VHcmlkVGlsZS9JbWFnZUdyaWRUaWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=