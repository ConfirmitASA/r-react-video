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
	      this.requestResponse({ isPaging: true }, this.modifier);
	    }
	    /**
	     * loads previous page
	     * @returns {Promise} Returns a promise resolved to an array of data
	     * */
	
	  }, {
	    key: "previousPage",
	    value: function previousPage() {
	      this._skipPage(false);
	      this.requestResponse({ isPaging: true }, this.modifier);
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
	      this._config.hitlistData = data != null ? this._config.hitlistData != null ? this._config.hitlistData.concat(data) : data : null;
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
	      var spv = this._config.sortingPagingValues;
	      val.pagingValues.firstStartValue = HitlistSetup._fixJsonDate(val.pagingValues.firstStartValue);
	      val.pagingValues.lastStartValue = HitlistSetup._fixJsonDate(val.pagingValues.lastStartValue);
	      spv = val;
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
	            })
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
	          parsedData[key] = _this4.constructor.prepareData(item[config[key]], key);
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
	
	      //update state with the new set of data
	      this.setState({ items: newData });
	      if (this.props.verbose) {
	        console.log("data: ", newData);
	      }
	    }
	
	    /**
	    * massage data to fit the type we expect to receive in react view
	    * */
	
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
	          return data.indexOf(',') > -1 ? data.split(',') : data.indexOf('-') > -1 && data.trim().length == 1 ? undefined : data.trim();
	          break;
	      }
	    }
	  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWMxZWQ0ZDAxNzdhZmQ2ZDUzZTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLXJlcG9ydGFsLWJhc2Uvc3JjL3JlcG9ydGFsLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL34vTURJY29uL3NyYy9NREljb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9NREljb24vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3QtZGF0YXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LXNldHVwLmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlR3JpZFRpbGUvSW1hZ2VHcmlkVGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VHcmlkL0ltYWdlR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RWaWRlby9SZWFjdFZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9TaW5nbGVWaWV3L1NpbmdsZVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWRUaWxlL0ltYWdlR3JpZFRpbGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbImxhdW5jaFZpZGVvSGl0bGlzdCIsImNvbmZpZ05hbWUiLCJ0aHVtYnNQbGFjZWhvbGRlciIsIkVycm9yIiwiVHlwZUVycm9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXBvcnRhbCIsIm1peGluIiwic3RvcmUiLCJyZXF1aXJlIiwidWlkIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJnbG9iYWwiLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwiaXNPYmplY3QiLCJpdCIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsImtleSIsInZhbHVlIiwiZiIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJhRnVuY3Rpb24iLCJmbiIsInRoYXQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJiIiwiYyIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJPIiwiUCIsIkF0dHJpYnV0ZXMiLCJlIiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiZGVmIiwiaGFzIiwiVEFHIiwidGFnIiwic3RhdCIsInByb3RvdHlwZSIsImNvbmZpZ3VyYWJsZSIsInNoYXJlZCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiSU9iamVjdCIsImRlZmluZWQiLCJSZXBvcnRhbEJhc2UiLCJ0YXJnZXQiLCJzb3VyY2UiLCJpIiwibGV2ZWwiLCJhcmdzIiwiQXJyYXkiLCJpc0FycmF5IiwiY29uc29sZSIsIl9sb2dnZXIiLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50Iiwic3RyIiwicGFyc2VGbG9hdCIsInJlcGxhY2UiLCJVUkwiLCJyZXNvbHZlIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJzZW5kIiwidmFyaWFibGUiLCJxdWVyeSIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyaW5nIiwidmFycyIsInNwbGl0IiwicGFpciIsInRvTG93ZXJDYXNlIiwibyIsInBhdGgiLCJvcmlnaW4iLCJwYXRobmFtZSIsImZvckVhY2giLCJhUGFpciIsInB1c2giLCJqb2luIiwiY29mIiwiQVJHIiwidHJ5R2V0IiwiVCIsIkIiLCJjYWxsZWUiLCJjdHgiLCJoaWRlIiwiUFJPVE9UWVBFIiwiJGV4cG9ydCIsInR5cGUiLCJJU19GT1JDRUQiLCJGIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIlMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJJU19XUkFQIiwiVyIsImV4cFByb3RvIiwib3duIiwib3V0IiwiQyIsInZpcnR1YWwiLCJSIiwiVSIsImV4ZWMiLCJkb2N1bWVudEVsZW1lbnQiLCJMSUJSQVJZIiwicmVkZWZpbmUiLCJJdGVyYXRvcnMiLCIkaXRlckNyZWF0ZSIsInNldFRvU3RyaW5nVGFnIiwiZ2V0UHJvdG90eXBlT2YiLCJJVEVSQVRPUiIsIkJVR0dZIiwia2V5cyIsIkZGX0lURVJBVE9SIiwiS0VZUyIsIlZBTFVFUyIsInJldHVyblRoaXMiLCJCYXNlIiwiTkFNRSIsIkNvbnN0cnVjdG9yIiwibmV4dCIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJraW5kIiwicHJvdG8iLCJ2YWx1ZXMiLCJlbnRyaWVzIiwiREVGX1ZBTFVFUyIsIlZBTFVFU19CVUciLCIkbmF0aXZlIiwiJGRlZmF1bHQiLCIkZW50cmllcyIsIiRhbnlOYXRpdmUiLCJtZXRob2RzIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJiaXRtYXAiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJTSEFSRUQiLCJpbnZva2UiLCJodG1sIiwiY2VsIiwicHJvY2VzcyIsInNldFRhc2siLCJzZXRJbW1lZGlhdGUiLCJjbGVhclRhc2siLCJjbGVhckltbWVkaWF0ZSIsIk1lc3NhZ2VDaGFubmVsIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImlkIiwibGlzdGVuZXIiLCJkYXRhIiwibmV4dFRpY2siLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsInNldFRpbWVvdXQiLCJzZXQiLCJjbGVhciIsInRvSW50ZWdlciIsIm1pbiIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwiTURJY29uIiwicHJvcHMiLCJmaWxsIiwic2l6ZSIsImljb24iLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyIsIlByb3BvcnRpb25hbEltYWdlIiwiX2ltYWdlT25sb2FkIiwiYmluZCIsIl9pbWFnZU9uZXJyb3IiLCJzdGF0ZSIsInNyYyIsInBsYWNlaG9sZGVySGlkZGVuIiwicGxhY2Vob2xkZXIiLCJzaXppbmciLCJwb3NpdGlvbiIsInByb3BvcnRpb24iLCJsb2FkZWQiLCJsb2FkaW5nIiwiZXJyb3IiLCJfbG9hZCIsIl9jb21wdXRlRGltZW5zaW9ucyIsIl9jb21wdXRlUHJvcG9ydGlvbiIsImFzcGVjdCIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0U3RhdGUiLCJpbmRleE9mIiwicGFydHMiLCJtYXAiLCJwYXJ0IiwicHJldlN0YXRlIiwicHJlbG9hZCIsImZhZGUiLCJwbGFjZWhvbGRlclNpemluZyIsImFsdCIsInBhZGRpbmdUb3AiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJkaXNwbGF5IiwiX3Jlc2V0IiwicHJldmVudExvYWQiLCJDb21wb25lbnQiLCJQcm9taXNlIiwiZm9yYmlkZGVuRmllbGQiLCJ0b0lPYmplY3QiLCJ0b0xlbmd0aCIsInRvSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpbmRleCIsImlzQXJyYXlJdGVyIiwiZ2V0SXRlckZuIiwiQlJFQUsiLCJSRVRVUk4iLCJpdGVyYWJsZSIsIml0ZXJGbiIsInN0ZXAiLCJpdGVyYXRvciIsInJlc3VsdCIsImRvbmUiLCJ1biIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiQXJyYXlQcm90byIsInJldCIsImNyZWF0ZSIsImRlc2NyaXB0b3IiLCJTQUZFX0NMT1NJTkciLCJyaXRlciIsImZyb20iLCJza2lwQ2xvc2luZyIsInNhZmUiLCJhcnIiLCJpdGVyIiwibWFjcm90YXNrIiwiT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiV2ViS2l0TXV0YXRpb25PYnNlcnZlciIsImlzTm9kZSIsImhlYWQiLCJsYXN0Iiwibm90aWZ5IiwiZmx1c2giLCJwYXJlbnQiLCJkb21haW4iLCJleGl0IiwiZW50ZXIiLCJ0b2dnbGUiLCJub2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJvYnNlcnZlIiwiY2hhcmFjdGVyRGF0YSIsInByb21pc2UiLCJ0aGVuIiwidGFzayIsImRQcyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJFbXB0eSIsImNyZWF0ZURpY3QiLCJpZnJhbWUiLCJsdCIsImd0IiwiaWZyYW1lRG9jdW1lbnQiLCJzdHlsZSIsImNvbnRlbnRXaW5kb3ciLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsImdldEtleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImNvbnN0cnVjdG9yIiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCIka2V5cyIsIkRFU0NSSVBUT1JTIiwiU1BFQ0lFUyIsIktFWSIsIkQiLCJUT19TVFJJTkciLCJwb3MiLCJzIiwiU3RyaW5nIiwibCIsImNoYXJDb2RlQXQiLCJjaGFyQXQiLCJtYXgiLCJ2YWwiLCJ2YWx1ZU9mIiwiY2xhc3NvZiIsImdldEl0ZXJhdG9yTWV0aG9kIiwiYWRkVG9VbnNjb3BhYmxlcyIsIml0ZXJhdGVkIiwiX3QiLCJfaSIsIl9rIiwiQXJndW1lbnRzIiwiYW5JbnN0YW5jZSIsImZvck9mIiwic3BlY2llc0NvbnN0cnVjdG9yIiwibWljcm90YXNrIiwiUFJPTUlTRSIsIiRQcm9taXNlIiwiZW1wdHkiLCJJbnRlcm5hbCIsIkdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSIsIldyYXBwZXIiLCJVU0VfTkFUSVZFIiwiRmFrZVByb21pc2UiLCJQcm9taXNlUmVqZWN0aW9uRXZlbnQiLCJzYW1lQ29uc3RydWN0b3IiLCJpc1RoZW5hYmxlIiwibmV3UHJvbWlzZUNhcGFiaWxpdHkiLCJQcm9taXNlQ2FwYWJpbGl0eSIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwicGVyZm9ybSIsImlzUmVqZWN0IiwiX24iLCJjaGFpbiIsIl9jIiwiX3YiLCJvayIsIl9zIiwicmVhY3Rpb24iLCJoYW5kbGVyIiwiZmFpbCIsIl9oIiwib25IYW5kbGVVbmhhbmRsZWQiLCJvblVuaGFuZGxlZCIsImFicnVwdCIsImlzVW5oYW5kbGVkIiwiZW1pdCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwicmVhc29uIiwiX2EiLCJvbnJlamVjdGlvbmhhbmRsZWQiLCIkcmVqZWN0IiwiX2QiLCJfdyIsIiRyZXNvbHZlIiwid3JhcHBlciIsImV4ZWN1dG9yIiwiZXJyIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwiciIsImNhcGFiaWxpdHkiLCJ4IiwiYWxsIiwicmVtYWluaW5nIiwiJGluZGV4IiwiYWxyZWFkeUNhbGxlZCIsInJhY2UiLCIkYXQiLCJwb2ludCIsIlRPX1NUUklOR19UQUciLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb24iLCJIaXRsaXN0RGF0YXNvdXJjZSIsIm9wdGlvbnMiLCJfc2VhcmNoVmFsdWVzIiwibW9kaWZpZXIiLCJyZXF1ZXN0UmVzcG9uc2UiLCJpbml0aWFsTG9hZCIsIl9za2lwUGFnZSIsImlzUGFnaW5nIiwibG9jYXRpb25EZXNlcmlhbGl6ZSIsInJlcG9ydGlkIiwiaGl0bGlzdElEIiwicGFyYW1zIiwiUGFnZUlkIiwicGFnZUlEIiwicGFnZVN0YXRlSWQiLCJwYWdlU3RhdGVJRCIsIlByZXZpZXciLCJwcmV2aWV3IiwiYXR0cm5hbWUiLCJKU09OIiwic3RyaW5naWZ5Iiwic29ydGluZ1BhZ2luZ1ZhbHVlcyIsInBhZ2luZ1ZhbHVlcyIsInBhZ2VOdW1iZXIiLCJwYWdpbmdGb3J3YXJkIiwicHJvbWlzZVJlcXVlc3QiLCJzZXJ2aWNlVVJMIiwic2VyaWFsaXplUGFyYW1zIiwicGFyc2VSZXNwb25zZSIsInJlc3BvbnNlIiwicGFyc2UiLCJwYWdlSW5mbyIsIl9zcHYiLCJwdiIsInN0YXJ0SWQiLCJsYXN0U3RhcnRJZCIsImZpcnN0U3RhcnRJZCIsInN0YXJ0VmFsdWUiLCJsYXN0U3RhcnRWYWx1ZSIsImZpcnN0U3RhcnRWYWx1ZSIsIkhpdGxpc3RTZXR1cCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJfY29uZmlnIiwiZ2V0T3JpZ2luYWxDb25maWciLCJfZWxlbWVudFR5cGUiLCJIaXRMaXN0RWxlbWVudFR5cGUiLCJfb3AiLCJTZWFyY2hhYmxlTGlzdE9wZXJhdG9yIiwiY2FwdGlvbnMiLCJzaW5nbGVWaWV3VGV4dHMiLCJoaXRsaXN0RGF0YSIsImNvbHVtbnMiLCJhbGxDb2x1bW5zIiwiY29tcG9uZW50SWQiLCJwYWdlSWQiLCJsYW5ndWFnZSIsInNlcnZpY2VVcmwiLCJxdWVyeVNlbGVjdG9yIiwic3B2IiwiX2ZpeEpzb25EYXRlIiwianNvbkRhdGUiLCJZIiwiTGFuZyIsImlzRnVuY3Rpb24iLCJjb25zdHIiLCJSZWdFeHAiLCJldmFsIiwic2NyaXB0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjZmciLCJzY3JpcHQiLCJ0ZXh0IiwiSW1hZ2VHcmlkVGlsZSIsImFjdGlvbkJ1dHRvbiIsImFjdGlvbkljb24iLCJvblNlbGVjdCIsInRpdGxlIiwiX2NvbXB1dGVUaWxlVHlwZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJtZWRpYXR5cGUiLCJ0eXBlcyIsImljb25TZXJ2ZXIiLCJpY29uU2l6ZSIsImljb25Db2xvciIsImVzY2FwZSIsImljb25zIiwiYXVkaW8iLCJ2aWRlbyIsIkltYWdlR3JpZCIsIml0ZW1zIiwiZHVtbXlJdGVtcyIsIml0ZW0iLCJyZW5kZXJEdW1teUl0ZW1zIiwiY291bnQiLCJSZWFjdFZpZGVvIiwiRFMiLCJ2ZXJib3NlIiwibG9nIiwic2V0dXBEYXRhTGlzdGVuZXIiLCJzaW5nbGVWaWV3IiwibGluayIsInNpbmdsZVZpZXdWaXNpYmxlIiwiYmFja0NhbGxiYWNrIiwiaTE4biIsImluaXRpYWxEYXRhTG9hZCIsInByb2Nlc3NEYXRhIiwiR2xvYmFsIiwib24iLCJpbml0aWFsaXNlQ29uZmlnIiwiY29uZmlnIiwiZmlsdGVySW5mbyIsInRhZ3MiLCJuZXdEYXRhIiwicGFyc2VkRGF0YSIsInByZXBhcmVEYXRhIiwicmVzcG9uc2VpZCIsInNsaW5rIiwidHJpbSIsIlNpbmdsZVZpZXciLCJ2aXNpYmxlIiwiaWZyYW1lVmlzaWJsZSIsImlmcmFtZUhlaWdodCIsIm9uTG9hZCIsInJlY2VpdmVNZXNzYWdlIiwibmV4dFByb3BzIiwibWFwUHJvcHNUb1N0YXRlIiwiaGFuZHNoYWtlIiwiaWZyYW1lRWwiLCJnZXREb21haW4iLCJ0YXJnZXRPcmlnaW4iLCJvcmlnaW5hbEV2ZW50IiwiYWN0aW9uIiwid2FybiIsImhlYWRlclRleHQiLCJyZW5kZXJJZnJhbWUiLCJjbG9zZU9uU3VibWl0IiwiaWNfc3RhciIsImljX3N0YXJfYm9yZGVyIiwiaWNfYXJyb3dfYmFjayJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OzsrUUN0Q0E7Ozs7O0FBR0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS0EsS0FBTUEscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsVUFBRCxFQUF1QztBQUFBLE9BQTNCQyxpQkFBMkIsdUVBQVQsSUFBUzs7QUFDaEUsT0FBRyxDQUFDRCxVQUFKLEVBQWU7QUFDYixXQUFNLElBQUlFLEtBQUosQ0FBVSwwQkFB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QUt0VSxLQUFMLENBQVdxVCxZQUF6RjtBQUNFLCtEQUFRLDBCQUFSO0FBREYsWUFERjtBQUlHLGdCQUFLclQsS0FBTCxDQUFXb1Y7QUFKZCxVQURGO0FBT0csY0FBS0MsWUFBTCxDQUFrQmxDLElBQWxCLEVBQXdCbUIsVUFBVUMsYUFBVixHQUEwQkQsT0FBbEQ7QUFQSCxRQURGO0FBV0Q7O0FBRUQ7Ozs7Ozs7OztrQ0FNYW5CLEksRUFBTW1CLE8sRUFBUztBQUFBOztBQUMxQixjQUFPO0FBQ0wsY0FBSyxxQkFBVTtBQUNiLGtCQUFLUSxRQUFMLEdBQWdCdE8sTUFBaEI7QUFDRCxVQUhJO0FBSUwsY0FBSzJNLElBSkE7QUFLTCxpQkFBUSxLQUFLc0IsTUFMUjtBQU1MLGdCQUFPLEVBQUNoUyxTQUFTNlIsVUFBVSxPQUFWLEdBQW9CLE1BQTlCLEVBTkYsR0FBUDtBQU9EOzs7O0dBOUdxQyxnQkFBTTFSLFM7O21CQUF6QnlSLFU7OztBQWlIckJBLFlBQVdoVSxZQUFYLEdBQTBCO0FBQ3hCaVYsa0JBQWU7QUFEUyxFQUExQjs7Ozs7Ozs7Ozs7Ozs7QUNySEE7Ozs7OztBQUVPLEtBQU1DLDRCQUFVLHdDQUFNLEdBQUUsMEZBQVIsR0FBaEI7QUFDQSxLQUFNQywwQ0FBaUIsd0NBQU0sR0FBRSxrTUFBUixHQUF2QjtBQUNBLEtBQU1DLHdDQUFnQix3Q0FBTSxHQUFFLDhEQUFSLEdBQXRCLEM7Ozs7OztBQ0pQLDBDOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsMkIiLCJmaWxlIjoici1yZWFjdC12aWRlby5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYzFlZDRkMDE3N2FmZDZkNTNlNiIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMS4wMS4yMDE3LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBtYWluQ1NTIGZyb20gJy4vbWFpbi5jc3MnO1xuaW1wb3J0IFJlYWN0VmlkZW8gZnJvbSAnLi9SZWFjdFZpZGVvL1JlYWN0VmlkZW8nO1xuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tICdyLXJlcG9ydGFsLWJhc2UnO1xuXG4vKipcbiAqIGluaXRpYWxpc2UgSGl0TGlzdCBvbiBET01Db250ZW50TG9hZGVkIGZvciBhIHF1aWNrZXIgY29sZC1zdGFydCwgbm8gbmVlZCB0byB3YWl0IGZvciB0aGUgb3JpZ2luYWwgSGl0TGlzdFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZ05hbWUgLSBuYW1lIG9mIHRoZSB2YXJpYWJsZSBwYXNzZWQgdG8gRE9NIGFzIGEgY29uZmlnXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt0aHVtYnNQbGFjZWhvbGRlcj10cnVlXSAtIGRpc3BsYXkgdGh1bWJzIGFzIGltYWdlIHBsYWNlaG9sZGVycyBpbnN0ZWFkIG9mIG1lZGlhIGljb25zXG4gKiAqL1xuY29uc3QgbGF1bmNoVmlkZW9IaXRsaXN0ID0gKGNvbmZpZ05hbWUsdGh1bWJzUGxhY2Vob2xkZXI9dHJ1ZSkgPT4ge1xuICBpZighY29uZmlnTmFtZSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25maWcgaXMgbm90IHNwZWNpZmllZCEnKVxuICB9IGVsc2UgaWYoY29uZmlnTmFtZSAmJiB0eXBlb2YgY29uZmlnTmFtZSAhPSAnc3RyaW5nJyl7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgY29uZmlnIG5hbWUgbXVzdCBiZSBhIHN0cmluZywgbm90IGEgJHt0eXBlb2YgY29uZmlnTmFtZX1gKVxuICB9XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgIDxSZWFjdFZpZGVvXG4gICAgICBjb25maWc9e2NvbmZpZ05hbWV9XG4gICAgICB0aHVtYnNQbGFjZWhvbGRlcj17dGh1bWJzUGxhY2Vob2xkZXJ9XG4gICAgICB2ZXJib3NlPXt0cnVlfVxuICAgICAgLz4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcbiAgfSk7XG59O1xuXG53aW5kb3cuUmVwb3J0YWwgPSB3aW5kb3cuUmVwb3J0YWwgfHwge307XG5SZXBvcnRhbEJhc2UubWl4aW4od2luZG93LlJlcG9ydGFsLHtcbiAgbGF1bmNoVmlkZW9IaXRsaXN0XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiaW1wb3J0IFByb21pc2UgZnJvbSAnY29yZS1qcy9saWJyYXJ5L2VzNi9wcm9taXNlJztcclxuXHJcbmNsYXNzIFJlcG9ydGFsQmFzZSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvcGllcyBwcm9wcyBmcm9tIGEgc291cmNlIG9iamVjdCB0byBhIHRhcmdldCBvYmplY3QuXHJcbiAgICpcclxuICAgKiBOb3RlLCB0aGlzIG1ldGhvZCB1c2VzIGEgc2ltcGxlIGBmb3IuLi5pbmAgc3RyYXRlZ3kgZm9yIGVudW1lcmF0aW5nXHJcbiAgICogcHJvcGVydGllcy4gIFRvIGVuc3VyZSBvbmx5IGBvd25Qcm9wZXJ0aWVzYCBhcmUgY29waWVkIGZyb20gc291cmNlXHJcbiAgICogdG8gdGFyZ2V0IGFuZCB0aGF0IGFjY2Vzc29yIGltcGxlbWVudGF0aW9ucyBhcmUgY29waWVkLCB1c2UgYGV4dGVuZGAuXHJcbiAgICpcclxuICAgKiBAbWV0aG9kIG1peGluXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBUYXJnZXQgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFNvdXJjZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXHJcbiAgICogQHJldHVybiB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCBhcyBmaXJzdCBhcmd1bWVudC5cclxuICAgKi9cclxuICBzdGF0aWMgbWl4aW4odGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGZvciAodmFyIGkgaW4gc291cmNlKSB7XHJcbiAgICAgIHRhcmdldFtpXSA9IHNvdXJjZVtpXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgX2xvZ2dlcihsZXZlbCwgYXJncykge1xyXG4gICAgLy8gYWNjZXB0IFsnZm9vJywgJ2JhciddIGFuZCBbWydmb28nLCAnYmFyJ11dXHJcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xyXG4gICAgICBhcmdzID0gYXJnc1swXTtcclxuICAgIH1cclxuICAgIC8vIG9ubHkgYWNjZXB0IGxvZ2dpbmcgZnVuY3Rpb25zXHJcbiAgICBzd2l0Y2gobGV2ZWwpIHtcclxuICAgICAgY2FzZSAnbG9nJzpcclxuICAgICAgY2FzZSAnd2Fybic6XHJcbiAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICBjb25zb2xlW2xldmVsXS5hcHBseShjb25zb2xlLCBhcmdzKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBfbG9nKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG4gICAgdGhpcy5fbG9nZ2VyKCdsb2cnLCBhcmdzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBfd2FybigpIHtcclxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuICAgIHRoaXMuX2xvZ2dlcignd2FybicsIGFyZ3MpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIF9lcnJvcigpIHtcclxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuICAgIHRoaXMuX2xvZ2dlcignZXJyb3InLCBhcmdzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuYW1lZCBldmVudCB3aXRoIGBuYW1lYFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgZXZlbnRcclxuICAgKiBAcmV0dXJuIHtFdmVudH0gUmV0dXJucyBhIGNyZWF0ZWQgZXZlbnRcclxuICAgKiAqL1xyXG4gIHN0YXRpYyBuZXdFdmVudChuYW1lKXtcclxuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG4gICAgZXZlbnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xyXG4gICAgcmV0dXJuIGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5zcGVjdHMgaWYgdGhlIGN1cnJlbnQgc3RyaW5nIG1pZ2h0IGJlIGNvbnZlcnRlZCB0byBudW1iZXIgYW5kIHJlbmRlcnMgaXQgYXMgbnVtYmVyLiBJZiBzdHJpbmcgbGVuZ3RoIGlzIDAsIHJldHVybnMgYG51bGxgLiBJZiBub25lIGFwcGxpZXMgcmV0dXJucyB0aGUgc3RyaW5nIGFzIGlzLlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSB2YWx1ZSBvZiB0aGUgY2VsbCBpZiBub3QgSFRNTCBjb250ZW50c1xyXG4gICAqIEByZXR1cm4ge051bWJlcnxudWxsfFN0cmluZ31cclxuICAgKiAqL1xyXG4gIHN0YXRpYyBpc051bWJlcihzdHIpe1xyXG4gICAgaWYoIWlzTmFOKHBhcnNlRmxvYXQoc3RyKSkpe1xyXG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvLC9pLCcnKTsvLyByZW1vdmUgdW5uZWNlc3NhcnkgY29tbWEgYXMgYSBkZWxpbWl0ZXIgZm9yIHRob3VzYW5kcyBmcm9tIGRhdGEuXHJcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cik7XHJcbiAgICB9IGVsc2UgaWYoc3RyLmxlbmd0aD09MCl7cmV0dXJuIG51bGx9IGVsc2Uge3JldHVybiBzdHJ9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbiBYSFIgd3JhcHBlZCBpbiBhIFByb21pc2VcclxuICAgKiBAcGFyYW0geyFTdHJpbmd9IFVSTCAtIHVybCB0byBzZW5kIGEgYEdFVGAgcmVxdWVzdCB0b1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJldHVybnMgYSB0aGVuLWFibGUgcHJvbWlzZSB3aXRoIGBYTUxIdHRwUmVxdWVzdC5yZXNwb25zZVRleHRgXHJcbiAgICogKi9cclxuICBzdGF0aWMgcHJvbWlzZVJlcXVlc3QoVVJMKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgeGhyLm9wZW4oJ0dFVCcsIFVSTCwgdHJ1ZSk7XHJcbiAgICAgIHhoci5vbmxvYWQgPSAoKT0+e3hoci5zdGF0dXMgPT0gMjAwP3Jlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk6cmVqZWN0KEVycm9yKGAke3hoci5zdGF0dXN9OiAke3hoci5zdGF0dXNUZXh0fWApKTt9XHJcbiAgICAgIHhoci5vbmVycm9yID0gKCk9PntyZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTt9XHJcbiAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgYSB2YXJpYWJsZSBsaXN0ZWQgaW4gcXVlcnkgc3RyaW5nXHJcbiAgICogQHBhcmFtIHshU3RyaW5nfSB2YXJpYWJsZSAtIHZhcmlhYmxlIG5hbWUgdG8gZ2V0IHZhbHVlIGZvclxyXG4gICAqIEBwYXJhbSB7U3RyaW5nPX0gW3F1ZXJ5PXdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpXSAtIHRoZSBxdWVyeSBzdHJpbmcgdG8gc2VhcmNoIHZhcmlhYmxlIGZvciBpblxyXG4gICAqIEByZXR1cm4ge1N0cmluZ30gUmV0dXJucyB2YWx1ZSBmb3IgdGhlIHZhcmlhYmxlXHJcbiAgICogKi9cclxuICBzdGF0aWMgZ2V0UXVlcnlWYXJpYWJsZSh2YXJpYWJsZSxxdWVyeT13aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSl7XHJcbiAgICB2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KFwiJlwiKTtcclxuICAgIGZvciAodmFyIGk9MDtpPHZhcnMubGVuZ3RoO2krKykge1xyXG4gICAgICB2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICBpZigocGFpclswXSkudG9Mb3dlckNhc2UoKSA9PSB2YXJpYWJsZS50b0xvd2VyQ2FzZSgpKXtyZXR1cm4gcGFpclsxXTt9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogdHVybnMgYHdpbmRvdy5sb2NhdGlvbmAgb2JqZWN0IGludG8gYW4gb2JqZWN0IHdpdGggcGFyYW1zIGFzIG5hbWVkIGtleXMgbmVjZXNzYXJ5IHRvIHJlY29uc3RydWN0IHRoZSBVUkxcclxuICAgKiBAcGFyYW0ge09iamVjdD19IFtsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbl0gLSBhIHdpbmRvdy5sb2NhdGlvbiBvYmplY3QsIGJ5IGRlZmF1bHQgb2YgdGhlIGhvc3Qgd2luZG93IHdoZXJlIHRoZSBzY3JpcHQgaXMgZXhlY3V0ZWRcclxuICAgKiBAcmV0dXJucyB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBhIGBsb2NhdGlvbmAgb2JqZWN0XHJcbiAgICogKi9cclxuICBzdGF0aWMgbG9jYXRpb25EZXNlcmlhbGl6ZShsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbil7XHJcbiAgICBsZXQgbyA9IHtcclxuICAgICAgcGF0aDogbG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgIHF1ZXJ5Ont9XHJcbiAgICB9O1xyXG4gICAgbG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKS5zcGxpdCgvJi8pLmZvckVhY2gocGFpcj0+e1xyXG4gICAgICBsZXQgYVBhaXI9IHBhaXIuc3BsaXQoLz0vKTtcclxuICAgICAgby5xdWVyeVthUGFpclswXS50b0xvd2VyQ2FzZSgpXSA9IGFQYWlyWzFdXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUdXJucyBhIGBsb2NhdGlvbmAgb2JqZWN0IChyZXN1bHQgb2YgYGxvY2F0aW9uRGVzZXJpYWxpemVgKSBpbnRvIGEgVVJMXHJcbiAgICogQHBhcmFtIHt7cGF0aDpTdHJpbmcsIHF1ZXJ5Ok9iamVjdH19IGxvY2F0aW9uIC0gYW4gb2JqZWN0IHdpdGggcGFyYW1zIGFuZCBhIHVybFxyXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IC0gYSBVUkwgc3RyaW5nXHJcbiAgICogKi9cclxuICBzdGF0aWMgbG9jYXRpb25TZXJpYWxpemUobG9jYXRpb24pe1xyXG4gICAgbGV0IHF1ZXJ5PVtdO1xyXG4gICAgZm9yKGxldCBrZXkgaW4gbG9jYXRpb24ucXVlcnkpe1xyXG4gICAgICBxdWVyeS5wdXNoKFtrZXksbG9jYXRpb24ucXVlcnlba2V5XV0uam9pbignPScpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRoICsgJz8nICsgcXVlcnkuam9pbignJicpO1xyXG4gIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0YWxCYXNlXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1yZXBvcnRhbC1iYXNlL3NyYy9yZXBvcnRhbC1iYXNlLmpzIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMjMuMDEuMjAxNy5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBSZW5kZXJzIGFuIFNWRyBtYXRlcmlhbCBpY29uIGltcG9ydGVkIGZyb20gYW4gaWNvbi1zZXQgYW5kIHBhc3NlZCB2aWEgcHJvcHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtPYmplY3R9IHByb3BzLmljb24gLSBpbXBvcnRlZCBpY29uIGRlZmluaXRpb24gKGpzeClcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcy5jaGlsZHJlbiAtIGltcG9ydGVkIGljb24gZGVmaW5pdGlvbiAoanN4KSBpZiB5b3UgcHJlZmVyIHVzaW5nIGNoaWxkcmVuIGFuZCBhIGNsb3NpbmcgdGFnIGluIEpTWCByYXRoZXIgdGhhbiBhbiBpY29uIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtwcm9wcy5zaXplPTI0XSAtIGljb24gd2lkdGgvaGVpZ2h0ICh3aGljaCBlcXVhbHMgaGVpZ2h0IHNpbmNlIGFsbCBNRCBpY29ucyBoYXZlIHNxdWFyZSB2aWV3Ym94KS4gQW55IG9mIGAxOHwyNHwzNnw0OGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuZmlsbD0ncmdiYSgwLDAsMCwuODUpJ10gLSBpY29uIGZpbGwgLSBhbnkgdmFsaWQgY3NzIGNvbG9yLCBmaWxscyB0aGUgd2hvbGUgaWNvblxuICogKi9cbmV4cG9ydCBjbGFzcyBNREljb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB7ZmlsbCxzaXplLGljb24sY2hpbGRyZW59ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9e2ZpbGx9IHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBjaGlsZHJlbj17aWNvbiB8fCBjaGlsZHJlbn0gLz4pO1xuICB9XG59XG5cbk1ESWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6IDI0LFxuICBmaWxsOiAncmdiYSgwLDAsMCwuODUpJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vTURJY29uL3NyYy9NREljb24uanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMS4wMS4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtNREljb259IGZyb20gJy4vTURJY29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ESWNvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9NREljb24vc3JjL21haW4uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBQcm9wb3J0aW9uYWxJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBgUHJvcG9ydGlvbmFsSW1hZ2VgIGlzIGFuIGVsZW1lbnQgZm9yIGRpc3BsYXlpbmcgYW4gaW1hZ2UgdGhhdCBwcm92aWRlcyB1c2VmdWwgc2l6aW5nIGFuZCBwcmVsb2FkaW5nIG9wdGlvbnMgbm90IGZvdW5kIG9uIHRoZSBzdGFuZGFyZCBgPGltZz5gIHRhZy5cbiAgICogVGhlIGBzaXppbmdgIG9wdGlvbiBhbGxvd3MgdGhlIGltYWdlIHRvIGJlIGVpdGhlciBjcm9wcGVkIChgY292ZXJgKSBvciBsZXR0ZXJib3hlZCAoYGNvbnRhaW5gKSB0byBmaWxsIGEgZml4ZWQgdXNlci1zaXplIHBsYWNlZCBvbiB0aGUgZWxlbWVudC5cbiAgICogVGhlIGBwcmVsb2FkYCBvcHRpb24gcHJldmVudHMgdGhlIGJyb3dzZXIgZnJvbSByZW5kZXJpbmcgdGhlIGltYWdlIHVudGlsIHRoZSBpbWFnZSBpcyBmdWxseSBsb2FkZWQuXG4gICAqIEluIHRoZSBpbnRlcmltLCBlaXRoZXIgdGhlIGVsZW1lbnQncyBDU1MgYGJhY2tncm91bmQtY29sb3JgIGNhbiBiZSBiZSB1c2VkIGFzIHRoZSBwbGFjZWhvbGRlciwgb3IgdGhlIGBwbGFjZWhvbGRlcmAgcHJvcGVydHkgY2FuIGJlIHNldCB0byBhIFVSTCAocHJlZmVyYWJseSBhIGRhdGEtVVJJLCBmb3IgaW5zdGFudCByZW5kZXJpbmcpIGZvciBhIHBsYWNlaG9sZGVyIGltYWdlLlxuICAgKiBUaGUgYGZhZGVgIG9wdGlvbiAob25seSB2YWxpZCB3aGVuIGBwcmVsb2FkYCBpcyBzZXQpIHdpbGwgY2F1c2UgdGhlIHBsYWNlaG9sZGVyIGltYWdlL2NvbG9yIHRvIGJlIGZhZGVkIG91dCBvbmNlIHRoZSBpbWFnZSBpcyByZW5kZXJlZC5cbiAgICpcbiAgICogRXhhbXBsZXM6XG4gICAqIEJhc2ljYWxseSBpZGVudGljYWwgdG8gYDxpbWcgc3JjPVwiLi4uXCI+YCB0YWc6XG4gICAqIGBgYFxuICAgKiA8UHJvcG9ydGlvbmFsSW1hZ2Ugd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNDAwLzQwMFwiIC8+XG4gICAqIGBgYFxuICAgKiBXaWxsIGxldHRlcmJveCB0aGUgaW1hZ2UgdG8gZml0IGFuZCB1c2Ugc3R5bGVzIHJhdGhlciB0aGFuIHRoZSBhdHRyaWJ1dGVzIHRvIHNldCBoZWlnaHQgYW5kIHdpZHRoOlxuICAgKiBgYGBcbiAgICogPFByb3BvcnRpb25hbEltYWdlIHN0eWxlPXt7d2lkdGg6JzQwMHB4JywgaGVpZ2h0Oic0MDBweCd9fSBzaXppbmc9XCJjb250YWluXCIgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIiAvPlxuICAgKiBgYGBcbiAgICogV2lsbCBjcm9wIHRoZSBpbWFnZSB0byBmaXQ6XG4gICAqIGBgYFxuICAgKiA8UHJvcG9ydGlvbmFsSW1hZ2Ugc3R5bGU9e3t3aWR0aDonNDAwcHgnLCBoZWlnaHQ6JzQwMHB4J319IHNpemluZz1cImNvdmVyXCIgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIiAvPlxuICAgKiBgYGBcbiAgICogV2lsbCBzaG93IGxpZ2h0LWdyYXkgYmFja2dyb3VuZCB1bnRpbCB0aGUgaW1hZ2UgbG9hZHM6XG4gICAqIGBgYFxuICAgKiA8UHJvcG9ydGlvbmFsSW1hZ2Ugc3R5bGU9e3t3aWR0aDonNDAwcHgnLCBoZWlnaHQ6JzQwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmF5J319IHNpemluZz1cImNvdmVyXCIgcHJlbG9hZD1cInRydWVcIiBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiIC8+XG4gICAqIGBgYFxuICAgKiBXaWxsIHNob3cgYSBiYXNlLTY0IGVuY29kZWQgcGxhY2Vob2xkZXIgaW1hZ2UgdW50aWwgdGhlIGltYWdlIGxvYWRzOlxuICAgKiBgYGBcbiAgICogPFByb3BvcnRpb25hbEltYWdlIHN0eWxlPXt7d2lkdGg6JzQwMHB4JywgaGVpZ2h0Oic0MDBweCd9fSBwbGFjZWhvbGRlcj1cImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCwuLi5cIiBzaXppbmc9XCJjb3ZlclwiIHByZWxvYWQ9XCJ0cnVlXCIgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIiAvPlxuICAgKiBgYGBcbiAgICogV2lsbCBmYWRlIHRoZSBsaWdodC1ncmF5IGJhY2tncm91bmQgb3V0IG9uY2UgdGhlIGltYWdlIGlzIGxvYWRlZDpcbiAgICogYGBgXG4gICAqIDxQcm9wb3J0aW9uYWxJbWFnZSBzdHlsZT17e3dpZHRoOic0MDBweCcsIGhlaWdodDonNDAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyYXknfX0gc2l6aW5nPVwiY292ZXJcIiBwcmVsb2FkPVwidHJ1ZVwiIGZhZGU9XCJ0cnVlXCIgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIiAvPlxuICAgKiBgYGBcbiAgICogV2lsbCBkaXNyZWdhcmQgdGhlIGhlaWdodCwgYmVjYXVzZSB0aGUgYXNwZWN0IGlzIHByb3ZpZGVkLCBhbmQgcmVkdWNlIHRoZSBpbWFnZSBoZWlnaHQgdG8gYmUgaW4gMTY6OSByYXRpby4gU3BlY2lmeWluZyBoZWlnaHQgaW4gdGhpcyBjYXNlIGlzIG5vdCBuZWNlc3NhcnlcbiAgICogYGBgXG4gICAqIDxQcm9wb3J0aW9uYWxJbWFnZSBhc3BlY3Q9XCIxNjo5XCIgc3R5bGU9e3t3aWR0aDonNDAwcHgnLCBoZWlnaHQ6JzQwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnbGlnaHRncmF5J319IHNpemluZz1cImNvdmVyXCIgcHJlbG9hZD1cInRydWVcIiBmYWRlPVwidHJ1ZVwiIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCIgLz5cbiAgICogYGBgXG4gICAqIElmIHlvdSBkb24ndCB3YW50IHRvIHN0cmV0Y2ggYSBwbGFjZWhvbGRlciwgYnV0IGRpc3BsYXkgaXQgaW4gaXRzIG5hdHVyYWwgc2l6ZSBldmVuIGlmIHRoZSBtYWluIGltYWdlIHVzZXMgYHNpemluZ2AsIGZlZWwgZnJlZSB0byB1c2UgYSBQb3N0Q1NTIG1peGluIGAtLVByb3BvcnRpb25hbEltYWdlLXBsYWNlaG9sZGVyYCB0byByZXN0eWxlIGl0OlxuICAgKiBgYGBjc3NcbiAgICogOnJvb3R7XG4gICAqICAtLVByb3BvcnRpb25hbEltYWdlLXBsYWNlaG9sZGVyOiB7XG4gICAqICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjU7XG4gICAqICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAhaW1wb3J0YW50O1xuICAgKiAgfTtcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5zcmMgLSBUaGUgVVJMIG9mIGFuIGltYWdlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuYWx0IC0gQSBzaG9ydCB0ZXh0IGFsdGVybmF0aXZlIGZvciB0aGUgaW1hZ2UuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMucHJldmVudExvYWQgLSBXaGVuIHRydWUsIHRoZSBpbWFnZSBpcyBwcmV2ZW50ZWQgZnJvbSBsb2FkaW5nIGFuZCBhbnkgcGxhY2Vob2xkZXIgaXMgc2hvd24uICBUaGlzIG1heSBiZSB1c2VmdWwgd2hlbiBhIGJpbmRpbmcgdG8gdGhlIHNyYyBwcm9wZXJ0eSBpcyBrbm93biB0byBiZSBpbnZhbGlkLCB0byBwcmV2ZW50IDQwNCByZXF1ZXN0cy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgaW1hZ2UuICBWYWxpZCB2YWx1ZXMgYXJlIGBjb250YWluYCAoZnVsbCBhc3BlY3QgcmF0aW8gb2YgdGhlIGltYWdlIGlzIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGVsZW1lbnQgYW5kIGxldHRlcmJveGVkKSBvciBgY292ZXJgIChpbWFnZSBpcyBjcm9wcGVkIGluIG9yZGVyIHRvIGZ1bGx5IGNvdmVyIHRoZSBib3VuZHMgb2YgdGhlIGVsZW1lbnQpLCBvciBgbnVsbGAgKGRlZmF1bHQ6IGltYWdlIHRha2VzIG5hdHVyYWwgc2l6ZSkuIE1ha2Ugc3VyZSB5b3Ugc3BlY2lmeSBgaGVpZ2h0YCBhbmQgYHdpZHRoYCBpZiB5b3UgdXNlIGFueXRoaW5nIG90aGVyIHRoYW50IGBub25lYCBmb3IgYHNpemluZ2BcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnBvc2l0aW9uIC0gV2hlbiBhIHNpemluZyBvcHRpb24gaXMgdXNlZCAoYGNvdmVyYCBvciBgY29udGFpbmApLCB0aGlzIGRldGVybWluZXMgaG93IHRoZSBpbWFnZSBpcyBhbGlnbmVkIHdpdGhpbiB0aGUgZWxlbWVudCBib3VuZHMuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMucHJlbG9hZCAtIFdoZW4gYHRydWVgLCBhbnkgY2hhbmdlIHRvIHRoZSBgc3JjYCBwcm9wZXJ0eSB3aWxsIGNhdXNlIHRoZSBgcGxhY2Vob2xkZXJgIGltYWdlIHRvIGJlIHNob3duIHVudGlsIHRoZSBuZXcgaW1hZ2UgaGFzIGxvYWRlZC5cbiAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy5mYWRlIC0gV2hlbiBgcHJlbG9hZGAgaXMgdHJ1ZSwgc2V0dGluZyBgZmFkZWAgdG8gdHJ1ZSB3aWxsIGNhdXNlIHRoZSBpbWFnZSB0byBmYWRlIGludG8gcGxhY2UuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlciAtIFRoaXMgaW1hZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgYmFja2dyb3VuZC9wbGFjZWhvbGRlciB1bnRpbCB0aGUgc3JjIGltYWdlIGhhcyBsb2FkZWQuIFVzZSBvZiBhIGRhdGEtVVJJIGZvciBwbGFjZWhvbGRlciBpcyBlbmNvdXJhZ2VkIGZvciBpbnN0YW50IHJlbmRlcmluZy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyU2l6aW5nIC0gU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlci4gQnkgZGVmYXVsdCBpdCdzIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNyY2AgaW1hZ2UsIGJ1dCBzZXQgdG8gYGluaXRpYWxgIG9yIG90aGVyIHZhbGlkIGBiYWNrZ3JvdW5kLXNpemVgIHZhbHVlIHRvIG92ZXJyaWRlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMud2lkdGggLSBDYW4gYmUgdXNlZCB0byBzZXQgdGhlIHdpZHRoIG9mIGltYWdlIChlLmcuIHZpYSBiaW5kaW5nKTsgc2l6ZSBtYXkgYWxzbyBiZSBzZXQgdmlhIENTUy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmhlaWdodCAtIENhbiBiZSB1c2VkIHRvIHNldCB0aGUgaGVpZ2h0IG9mIGltYWdlIChlLmcuIHZpYSBiaW5kaW5nKTsgc2l6ZSBtYXkgYWxzbyBiZSBzZXQgdmlhIENTUy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmFzcGVjdCAtIFNwZWNpZnkgdGhlIGFzcGVjdCByYXRpbyB0byBtYWludGFpbiwgdHdvIG51bWJlcnMgc2VwYXJhdGVkIGJ5IHNlbWljb2xvbihlLmcuIGAxNjo5YCkuIE1ha2Ugc3VyZSB0aGF0IHRoZSBjb250YWluZXIgZm9yIHRoZSBpbWFnZSBjYW4gcmVzaXplIHZlcnRpY2FsbHkvIGhhcyBlbm91Z2ggc3BhY2UgZm9yIGl0XG4gICAqICovXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5faW1hZ2VPbmxvYWQgPSB0aGlzLl9pbWFnZU9ubG9hZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2ltYWdlT25lcnJvciA9IHRoaXMuX2ltYWdlT25lcnJvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzcmM6ICcnLFxuICAgICAgcGxhY2Vob2xkZXJIaWRkZW46ISghIXRoaXMucHJvcHMucGxhY2Vob2xkZXIpLFxuICAgICAgc2l6aW5nOiB0aGlzLnByb3BzLnNpemluZz90aGlzLnByb3BzLnNpemluZzpudWxsLFxuICAgICAgcG9zaXRpb246IHRoaXMucHJvcHMucG9zaXRpb24/dGhpcy5wcm9wcy5wb3NpdGlvbjonY2VudGVyJyxcbiAgICAgIHByb3BvcnRpb246MCxcbiAgICAgIGxvYWRlZDpmYWxzZSwgLy90cnVlIHdoZW4gdGhlIGltYWdlIGlzIGxvYWRlZC5cbiAgICAgIGxvYWRpbmc6ZmFsc2UsIC8vdHJhY2tzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSBpbWFnZSB3aGVuIHRoZSBgcHJlbG9hZGAgb3B0aW9uIGlzIHVzZWQuXG4gICAgICBlcnJvcjpmYWxzZSAvL2luZGljYXRlcyB0aGF0IHRoZSBsYXN0IHNldCBgc3JjYCBmYWlsZWQgdG8gbG9hZC5cbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fbG9hZCgpO1xuICAgIHRoaXMuX2NvbXB1dGVEaW1lbnNpb25zKCk7XG4gICAgdGhpcy5fY29tcHV0ZVByb3BvcnRpb24odGhpcy5wcm9wcy5hc3BlY3QpO1xuICB9XG4gIF9jb21wdXRlRGltZW5zaW9ucygpe1xuICAgIGxldCB7d2lkdGgsaGVpZ2h0fSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB3aWR0aDppc05hTih3aWR0aCkgPyB3aWR0aCA6IHdpZHRoICsgJ3B4JyxcbiAgICAgIGhlaWdodDppc05hTihoZWlnaHQpID8gaGVpZ2h0IDogaGVpZ2h0ICsgJ3B4J1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBDb21wdXRlcyBhc3BlY3QgcmF0aW8gb2YgdGhlIGltYWdlXG4gICAqICovXG4gIF9jb21wdXRlUHJvcG9ydGlvbihhc3BlY3Qpe1xuICAgIGlmKGFzcGVjdCl7XG4gICAgICBpZihhc3BlY3QuaW5kZXhPZignOicpPi0xKXtcbiAgICAgICAgbGV0IHBhcnRzID0gYXNwZWN0LnNwbGl0KCc6JykubWFwKHBhcnQ9PnBhcnNlRmxvYXQocGFydCkpO1xuXG4gICAgICAgIGlmKCFpc05hTihwYXJ0c1swXSkgJiYgIWlzTmFOKHBhcnRzWzFdKSl7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGU9PntcbiAgICAgICAgICAgIGlmKCFpc05hTihwYXJzZUZsb2F0KHByZXZTdGF0ZS53aWR0aCkpKXtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwcm9wb3J0aW9uOihwYXJzZUZsb2F0KHByZXZTdGF0ZS53aWR0aCkgKiAocGFydHNbMV0vcGFydHNbMF0pKS50b1N0cmluZygpICsgcHJldlN0YXRlLndpZHRoLnN1YnN0cmluZyhwYXJzZUZsb2F0KHByZXZTdGF0ZS53aWR0aCkudG9TdHJpbmcoKS5sZW5ndGgpLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vdGhyb3cgbmV3IFR5cGVFcnJvcignV2lkdGggaW4gUHJvcG9ydGlvbmFsSW1hZ2UgaGFzIHRvIGJlIGVpdGhlciBpbiBwaXhlbHMgb3IgaW4gcGVyY2VudCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHt3aWR0aCxoZWlnaHQscHJvcG9ydGlvbixzcmMsc2l6aW5nLHBvc2l0aW9uLGxvYWRpbmcsbG9hZGVkLHBsYWNlaG9sZGVySGlkZGVufSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIHtwcmVsb2FkLGZhZGUscGxhY2Vob2xkZXJTaXppbmcscGxhY2Vob2xkZXIsYWx0fSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvcG9ydGlvbmFsSW1hZ2VcIlxuICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICBwYWRkaW5nVG9wOiBwcm9wb3J0aW9uXG4gICAgICAgICAgIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpemVkSW1nRGl2XCJcbiAgICAgICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c3JjfSlgLFxuICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6c2l6aW5nLFxuICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOnBvc2l0aW9uLFxuICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogc2l6aW5nICYmICduby1yZXBlYXQnLFxuICAgICAgICAgICAgICAgZGlzcGxheTogc2l6aW5nPyAnYmxvY2snOidub25lJ1xuICAgICAgICAgICAgIH19XG4gICAgICAgID48L2Rpdj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgIGFsdD17YWx0fVxuICAgICAgICAgIG9uTG9hZD17dGhpcy5faW1hZ2VPbmxvYWR9XG4gICAgICAgICAgb25FcnJvcj17dGhpcy5faW1hZ2VPbmVycm9yfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBzaXppbmc/ICdub25lJzonYmxvY2snXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHshIXBsYWNlaG9sZGVyICYmIHBsYWNlaG9sZGVyfSlgLFxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICFwbGFjZWhvbGRlclNpemluZz9zaXppbmc6cGxhY2Vob2xkZXJTaXppbmcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246cG9zaXRpb24sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBzaXppbmcgJiYgJ25vLXJlcGVhdCdcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17YGltYWdlUGxhY2Vob2xkZXIgJHtwbGFjZWhvbGRlckhpZGRlbiAmJiAnaGlkZGVuJ30gJHsocHJlbG9hZCAmJiBmYWRlICYmICFsb2FkaW5nICYmIGxvYWRlZCkgJiYgJ2ZhZGVkLW91dCd9YH0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgX2ltYWdlT25sb2FkKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2FkaW5nOmZhbHNlLFxuICAgICAgbG9hZGVkOnRydWUsXG4gICAgICAvL3BsYWNlaG9sZGVySGlkZGVuOnRydWUsXG4gICAgICBlcnJvcjpmYWxzZVxuICAgIH0pXG4gIH1cbiAgX2ltYWdlT25lcnJvcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuX3Jlc2V0KCksZXJyb3I6dHJ1ZX0pO1xuICB9XG4gIF9yZXNldCgpIHtcbiAgICByZXR1cm57XG4gICAgICBzcmM6JycsXG4gICAgICBsb2FkaW5nOmZhbHNlLFxuICAgICAgbG9hZGVkOmZhbHNlLFxuICAgICAgZXJyb3I6ZmFsc2VcbiAgICB9XG4gIH1cbiAgX2xvYWQoKXtcbiAgICBsZXQgc3RhdGUgPSB0aGlzLl9yZXNldCgpO1xuICAgIGlmKCF0aGlzLnByb3BzLnByZXZlbnRMb2FkKSB7XG4gICAgICBsZXQgc3JjID0gdGhpcy5wcm9wcy5zcmM7XG4gICAgICBpZiAoc3RhdGUuc3JjICE9IHNyYykge1xuICAgICAgICBzdGF0ZSA9IHsuLi5zdGF0ZSxcbiAgICAgICAgICBzcmM6ICEhc3JjICYmIHNyYyxcbiAgICAgICAgICBsb2FkaW5nOiEhc3JjXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvcG9ydGlvbmFsSW1hZ2U7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vUHJvcG9ydGlvbmFsSW1hZ2Uvc3JjL21haW4uanMiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDEwLjAxLjIwMTcuXG4gKi9cbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSBcInItcmVwb3J0YWwtYmFzZVwiO1xuaW1wb3J0IEhpdGxpc3RTZXR1cCBmcm9tIFwiLi9oaXRsaXN0LXNldHVwXCI7XG5cbmNsYXNzIEhpdGxpc3REYXRhc291cmNlIGV4dGVuZHMgSGl0bGlzdFNldHVwe1xuICAvKipcbiAgICogVGhpcyBjbGFzcyBhbGxvd3MgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB3aXRoIHRoZSBIaXRMaXN0IGRhdGFiYXNlIGFuZCB1c2UgdXRpbGl0eSBtZXRob2RzIHRvIHF1ZXJ5IGFuZCBmaWx0ZXIgZGF0YSBwcm92aWRlZCB0aGVyZSdzIGEgaGl0bGlzdCBvbiB0aGUgcGFnZVxuICAgKiBAZXh0ZW5kcyBIaXRsaXN0U2V0dXBcbiAgICogKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucz17fSl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZXM9W107XG4gICAgLyoqIEBwcm9wZXJ0eSB7U3RyaW5nfSBtb2RpZmllciAtIGV4dHJhIHBhcmFtcyBhZGRlZCBhcyBhIHN0cmluZyBmcm9tIGZpbHRlcnMgKi9cbiAgICB0aGlzLm1vZGlmaWVyID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogcGVyZm9ybXMgaW5pdGlhbCBkYXRhIGxvYWRcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgaW5pdGlhbERhdGFMb2FkKCl7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2luaXRpYWxMb2FkOnRydWV9KVxuICB9XG4gIC8qKlxuICAgKiBsb2FkcyBuZXh0IHBhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgbmV4dFBhZ2UoKXtcbiAgICB0aGlzLl9za2lwUGFnZSh0cnVlKTtcbiAgICB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aXNQYWdpbmc6IHRydWV9LHRoaXMubW9kaWZpZXIpO1xuICB9XG4gIC8qKlxuICAgKiBsb2FkcyBwcmV2aW91cyBwYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIHByZXZpb3VzUGFnZSgpe1xuICAgIHRoaXMuX3NraXBQYWdlKGZhbHNlKTtcbiAgICB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aXNQYWdpbmc6IHRydWV9LHRoaXMubW9kaWZpZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJpZXMgSGl0TGlzdCBBUElcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogKi9cbiAgcmVxdWVzdFJlc3BvbnNlKG9wdGlvbnMpe1xuICAgIGxldCBxdWVyeT0gUmVwb3J0YWxCYXNlLmxvY2F0aW9uRGVzZXJpYWxpemUoKS5xdWVyeTtcbiAgICBpZihxdWVyeSAmJiBxdWVyeS5yZXBvcnRpZCAmJiB0aGlzLmhpdGxpc3RJRCl7XG4gICAgICAvKnNldCBjb21tb24gcGFyYW1zKi9cbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIFBhZ2VJZDogdGhpcy5wYWdlSUQsXG4gICAgICAgIHBhZ2VTdGF0ZUlkOiB0aGlzLnBhZ2VTdGF0ZUlELFxuICAgICAgICBQcmV2aWV3OiBxdWVyeS5wcmV2aWV3XG4gICAgICB9O1xuXG4gICAgICAvKmlmIG9wdGlvbnMgYXJlIHBhc3NlZCwgYWRkIG9wdGlvbnMqL1xuICAgICAgaWYob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpe1xuICAgICAgICBmb3IgKGxldCBhdHRybmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgcGFyYW1zW2F0dHJuYW1lXSA9IHR5cGVvZiBvcHRpb25zW2F0dHJuYW1lXT09PSdib29sZWFuJz8ob3B0aW9uc1thdHRybmFtZV0/JzEnOicwJyk6b3B0aW9uc1thdHRybmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIXBhcmFtcy5zZWFyY2ggJiYgdGhpcy5fc2VhcmNoVmFsdWVzLmxlbmd0aD4wKXtcbiAgICAgICAgcGFyYW1zLnNlYXJjaCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuX3NlYXJjaFZhbHVlcyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzb3J0aW5nUGFnaW5nVmFsdWVzID0gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzO1xuXG4gICAgICBpZiAoc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMhPW51bGwgJiYgIWlzTmFOKHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2VOdW1iZXIpKSB7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaW5pdGlhbExvYWQgPT09IHRydWUpIHtcbiAgICAgICAgICBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcyA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnZU51bWJlciArPSBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdpbmdGb3J3YXJkID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy5zb3J0aW5nUGFnaW5nVmFsdWVzPUpTT04uc3RyaW5naWZ5KHNvcnRpbmdQYWdpbmdWYWx1ZXMpO1xuXG4gICAgICByZXR1cm4gUmVwb3J0YWxCYXNlLnByb21pc2VSZXF1ZXN0KGAke3RoaXMuc2VydmljZVVSTH0mJHtIaXRsaXN0RGF0YXNvdXJjZS5zZXJpYWxpemVQYXJhbXMocGFyYW1zKX0ke3RoaXMubW9kaWZpZXIhPScnPycmJyt0aGlzLm1vZGlmaWVyOicnfWApLnRoZW4ocmVzcG9uc2U9PnRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBIaXRMaXN0IEFQSSByZXNwb25zZVxuICAgKiAqL1xuICBwYXJzZVJlc3BvbnNlKHJlc3BvbnNlKXtcbiAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHJlc3BvbnNlLnNvcnRpbmdQYWdpbmdWYWx1ZXM7XG4gICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICB0aGlzLnBhZ2VJbmZvID0gcmVzcG9uc2UucGFnZUluZm87XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHBhZ2luZ0ZvcndhcmQgaWYgYHRydWVgIGdvZXMgZm9yd2FyZCwgaWYgYG51bGxgIGdvZXMgYmFja3dhcmRcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNhbGxiYWNrXG4gICAqICovXG4gIF9za2lwUGFnZShwYWdpbmdGb3J3YXJkKXtcbiAgICBsZXQgX3NwdiA9IHsuLi50aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXN9O1xuICAgIGxldCBwdiA9IHsuLi5fc3B2LnBhZ2luZ1ZhbHVlc30gfHwge307XG4gICAgcHYucGFnaW5nRm9yd2FyZCA9IHBhZ2luZ0ZvcndhcmQ7IC8qaWYgZm9yd2FyZCBpcyBuZWVkZWQgdGhlbiBwYXNzIHRydWUsIGVsc2UgbnVsbCAtIGJhY2t3YXJkKi9cbiAgICBwdi5zdGFydElkID0gcGFnaW5nRm9yd2FyZCA/IHB2Lmxhc3RTdGFydElkIDogcHYuZmlyc3RTdGFydElkO1xuICAgIHB2LnN0YXJ0VmFsdWUgPSBwYWdpbmdGb3J3YXJkID8gcHYubGFzdFN0YXJ0VmFsdWUgOiBwdi5maXJzdFN0YXJ0VmFsdWU7XG4gICAgdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzID0ge1xuICAgICAgLi4udGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLFxuICAgICAgcGFnaW5nVmFsdWVzOiBwdlxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogc2VyaWFsaXplIHBhcmFtcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgLSBhbiBvYmplY3Qgd2l0aCBwYXJhbWV0ZXJzXG4gICAqICovXG4gIHN0YXRpYyBzZXJpYWxpemVQYXJhbXMocGFyYW1zKXtcbiAgICBsZXQgcXVlcnkgPSBbXTtcbiAgICBmb3IobGV0IGtleSBpbiBwYXJhbXMpe1xuICAgICAgcXVlcnkucHVzaChba2V5LHBhcmFtc1trZXldXS5qb2luKCc9JykpO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnkuam9pbignJicpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0RGF0YXNvdXJjZTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LWRhdGFzb3VyY2UuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTAuMDEuMjAxNy5cbiAqL1xuXG5jbGFzcyBIaXRsaXN0U2V0dXB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgLy9maXggZm9yIHdpbmRvdy5sb2NhdGlvbiBvcmlnaW4sIHRoYW54IElFXG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID8gJzonICsgd2luZG93LmxvY2F0aW9uLnBvcnQ6ICcnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBIaXRsaXN0U2V0dXAuZ2V0T3JpZ2luYWxDb25maWcoKTtcbiAgICB0aGlzLl9lbGVtZW50VHlwZSA9IHdpbmRvdy5IaXRMaXN0RWxlbWVudFR5cGU7XG4gICAgdGhpcy5fb3AgPSB3aW5kb3cuU2VhcmNoYWJsZUxpc3RPcGVyYXRvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBhbGxvd3MgZ2V0dGluZyBhIGxvY2FsaXNlZCBzdHJpbmcgaW4gdGhlIGxhbmd1YWdlIG9mIHRoZSByZXBvcnQgZnJvbSBIaXRsaXN0IGNvbmZpZy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIHRoZSBrZXkgdG8gbG9vayB0aGUgcHJvcGVydHkgdXBcbiAgICpcbiAgICogKiBgc3RvZWA6XCJTbWFsbGVyIHRoYW4gb3IgZXF1YWxcIixcbiAgICogKiBgZ3RvZWA6XCJHcmVhdGVyIHRoYW4gb3IgZXF1YWxcIixcbiAgICogKiBgYmV0d2VlbmA6XCJCZXR3ZWVuXCIsXG4gICAqICogYGJlZm9yZWA6XCJCZWZvcmVcIixcbiAgICogKiBgYWZ0ZXJgOlwiQWZ0ZXJcIixcbiAgICogKiBgZXhhY3RseWA6XCJFeGFjdGx5XCIsXG4gICAqICogYHNob3dkZWZhdWx0Y29sc2A6XCJTaG93IGRlZmF1bHQgY29sdW1uc1wiLFxuICAgKiAqIGBhcHBseWA6XCJBcHBseVwiLFxuICAgKiAqIGBjYW5jZWxgOlwiQ2FuY2VsXCIsXG4gICAqICogYHNob3doaWRlYDpcIlNob3cgLyBIaWRlIGNvbHVtbnNcIixcbiAgICogKiBgeWVzYDpcIlllc1wiLFxuICAgKiAqIGBub2A6XCJOb1wiLFxuICAgKiAqIGBsb2FkaW5nRGF0YWA6XCJMb2FkaW5nIGRhdGEsIHBsZWFzZSB3YWl0Li4uXCIsXCJcbiAgICogKiBgY2hlY2thbGxgOlwiQ2hlY2sgYWxsXCIsXG4gICAqICogYHVuY2hlY2thbGxgOlwiVW5jaGVjayBhbGxcIixcbiAgICogKiBgZXJyb3JMb2FkaW5nYDpcIkVycm9yIGxvYWRpbmcgZGF0YVwiLFxuICAgKiAqIGBlcnJvck5vQ29sdW1uc2A6XCJObyBjb2x1bW5zIHNlbGVjdGVkXCJcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUkVTUE9OREVOVE9WRVJWSUVXYDpcIlJlc3BvbmRlbnQgb3ZlcnZpZXdcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJJTlRgOlwiUHJpbnQgdGhlIGN1cnJlbnQgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19DTE9TRWA6XCJDbG9zZSB0aGlzIG92ZXJsYXlcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfRklMVEVSYDpcIkZpbHRlciBxdWVzdGlvbnNcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTk9USElOR0ZPVU5EYDpcIk5vIHF1ZXN0aW9ucyBtYXRjaCB5b3VyIHNlYXJjaFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VU2A6XCJQcmV2aW91c1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VU0hJTlRgOlwiUHJldmlvdXMgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19ORVhUYDpcIk5leHRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTkVYVEhJTlRgOlwiTmV4dCByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX09GYDpcInswfSBvZiB7MX1cIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTU9SRWA6XCJ7MH0gbW9yZVwiLFxuICAgKiAqIFJFUE9SVF9TSU5HTEVWSUVXX0FMVEVSTkFUSVZFU2A6XCJBbnN3ZXJzIGFsdGVybmF0aXZlczpcIlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKiAqL1xuICBpMThuKGtleSl7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5jYXB0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpP3RoaXMuX2NvbmZpZy5jYXB0aW9uc1trZXldOnRoaXMuX2NvbmZpZy5zaW5nbGVWaWV3VGV4dHMuaGFzT3duUHJvcGVydHkoa2V5KT90aGlzLl9jb25maWcuc2luZ2xlVmlld1RleHRzW2tleV06bnVsbFxuICB9XG5cbiAgZ2V0IGRhdGEoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmhpdGxpc3REYXRhfVxuXG4gIHNldCBkYXRhKGRhdGEpe1xuICAgIHRoaXMuX2NvbmZpZy5oaXRsaXN0RGF0YSA9IGRhdGEhPW51bGw/dGhpcy5fY29uZmlnLmhpdGxpc3REYXRhICE9IG51bGwgPyB0aGlzLl9jb25maWcuaGl0bGlzdERhdGEuY29uY2F0KGRhdGEpOiBkYXRhIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSB2aXNpYmxlIEhpdExpc3QgY29sdW1ucyBvZiBPYmplY3QgdHlwZTogYHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ31gXG4gICAqIEByZXR1cm5zIHtBcnJheS48e2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfT59IFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHZpc2libGUgSGl0TGlzdCBjb2x1bW5zXG4gICAqICovXG4gIGdldCBjb2x1bW5zKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5jb2x1bW5zfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBIaXRMaXN0IGNvbHVtbnMgb2YgT2JqZWN0IHR5cGU6IGB7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9YFxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqICovXG4gIGdldCBhbGxDb2x1bW5zKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5hbGxDb2x1bW5zfVxuXG4gIGdldCBoaXRsaXN0SUQoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmNvbXBvbmVudElkfVxuICBnZXQgcGFnZUlEKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5wYWdlSWR9XG4gIGdldCBsYW5ndWFnZSgpe3JldHVybiB0aGlzLl9jb25maWcubGFuZ3VhZ2V9XG4gIGdldCBzZXJ2aWNlVVJMKCl7cmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt0aGlzLl9jb25maWcuc2VydmljZVVybH1gfVxuICBnZXQgcGFnZVN0YXRlSUQoKXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1BhZ2VTdGF0ZUlkJyk/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQYWdlU3RhdGVJZCcpLnZhbHVlOnVuZGVmaW5lZH1cbiAgZ2V0IHNvcnRpbmdQYWdpbmdWYWx1ZXMoKXtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXMhPW51bGw/dGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXM6e31cbiAgfVxuICBzZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcyh2YWwpe1xuICAgIGxldCBzcHYgPSB0aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlcztcbiAgICB2YWwucGFnaW5nVmFsdWVzLmZpcnN0U3RhcnRWYWx1ZSA9IEhpdGxpc3RTZXR1cC5fZml4SnNvbkRhdGUodmFsLnBhZ2luZ1ZhbHVlcy5maXJzdFN0YXJ0VmFsdWUpO1xuICAgIHZhbC5wYWdpbmdWYWx1ZXMubGFzdFN0YXJ0VmFsdWUgPSBIaXRsaXN0U2V0dXAuX2ZpeEpzb25EYXRlKHZhbC5wYWdpbmdWYWx1ZXMubGFzdFN0YXJ0VmFsdWUpO1xuICAgIHNwdiA9IHZhbDtcbiAgfVxuXG4gIHN0YXRpYyBfZml4SnNvbkRhdGUoanNvbkRhdGUpIHtcbiAgICBpZiAoIShqc29uRGF0ZSAmJiBZICYmIFkuTGFuZy5pc0Z1bmN0aW9uKGpzb25EYXRlLnJlcGxhY2UpKSkge3JldHVybiBqc29uRGF0ZTt9XG4gICAgbGV0IGNvbnN0ciA9IGpzb25EYXRlLnJlcGxhY2UobmV3IFJlZ0V4cChcIl4vRGF0ZVxcXFwoKFstK10/XFxcXGQrKVxcXFwpLyRcIiksIFwibmV3IERhdGUoJDEpXCIpO1xuICAgIGlmIChjb25zdHIgPT0ganNvbkRhdGUpIHtyZXR1cm4ganNvbkRhdGU7fVxuICAgIHJldHVybiBldmFsKGNvbnN0cik7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgY29uZmlnIGZvciBhIEhpdExpc3QgaWYgaXQncyBpbml0aWFsaXNlZCBvbiB0aGUgcGFnZVxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgYWxsQ29sdW1uczpBcnJheSxcbiAgICogIGNhcHRpb25zOk9iamVjdCxcbiAgICogIGNsaWVudElkOlN0cmluZyxcbiAgICogIGNvbHVtbnM6QXJyYXksXG4gICAqICBjb21wb25lbnRJZDpTdHJpbmcsXG4gICAqICBoYXNoZWRQcm9qZWN0SWQ6U3RyaW5nLFxuICAgKiAgaGl0bGlzdERhdGE6QXJyYXksXG4gICAqICBsYW5ndWFnZTpOdW1iZXIsXG4gICAqICBuZXh0VGV4dDpTdHJpbmcsXG4gICAqICBub0luaXRpYWxMb2FkOkJvb2xlYW4sXG4gICAqICBwYWdlQWpheEVuYWJsZWQ6Qm9vbGVhbixcbiAgICogIHBhZ2VJZDpTdHJpbmcsXG4gICAqICBwcmV2VGV4dDpTdHJpbmcsXG4gICAqICBwcmV2aWV3OkJvb2xlYW4sXG4gICAqICBzZWFyY2hJdGVtczpBcnJheSxcbiAgICogIHNlYXJjaFZhbHVlczpBcnJheSxcbiAgICogIHNlcnZpY2VVcmw6U3RyaW5nLFxuICAgKiAgc2VydmljZVVybE1ldGFEYXRhOlN0cmluZyxcbiAgICogIHNob3dTaW5nbGVWaWV3T25Sb3dTZWxlY3Q6Qm9vbGVhbixcbiAgICogIHNpbmdsZVZpZXdBcGlVcmw6U3RyaW5nLFxuICAgKiAgc2luZ2xlVmlld0Zvcm1zQ2h1bmtBcGlVcmw6U3RyaW5nLFxuICAgKiAgc2luZ2xlVmlld1RleHRzOk9iamVjdCxcbiAgICogIHNvcnRpbmdQYWdpbmdWYWx1ZXM6T2JqZWN0LFxuICAgKiAgc3R5bGVzOk9iamVjdCxcbiAgICogIHZlcnNpb246U3RyaW5nXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqICovXG4gIHN0YXRpYyBnZXRPcmlnaW5hbENvbmZpZygpe1xuICAgIGxldCBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0Jyk7XG4gICAgaWYoc2NyaXB0cyl7XG4gICAgICBsZXQgaT1zY3JpcHRzLmxlbmd0aCxcbiAgICAgICAgY2ZnID0gLyhZXFwuUmVwb3J0YWxcXC5IaXRMaXN0LClcXHMoLio/KVxcKTsvZ2k7XG4gICAgICB3aGlsZShpLS0pe1xuICAgICAgICBsZXQgc2NyaXB0ID0gc2NyaXB0c1tpXS50ZXh0O1xuICAgICAgICBpZihzY3JpcHQuaW5kZXhPZignWS5SZXBvcnRhbC5IaXRMaXN0LCcpPi0xKXtcbiAgICAgICAgICBsZXQgZXhlYyA9IGNmZy5leGVjKHNjcmlwdCk7XG4gICAgICAgICAgcmV0dXJuIChleGVjIT1udWxsICYmIGV4ZWNbMl0pPyBKU09OLnBhcnNlKGV4ZWNbMl0pOiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGl0bGlzdCBjb25maWcgaXMgbm90IHByZXNlbnQgb24gdGhlIHBhZ2UnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0U2V0dXBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3Qtc2V0dXAuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAwNy4wOS4yMDE2LlxyXG4gKi9cclxuXHJcbmltcG9ydCBIaXRsaXN0RGF0YXNvdXJjZSBmcm9tIFwiLi9oaXRsaXN0LWRhdGFzb3VyY2VcIjtcclxuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tIFwici1yZXBvcnRhbC1iYXNlXCI7XHJcblxyXG53aW5kb3cuUmVwb3J0YWwgPSB3aW5kb3cuUmVwb3J0YWwgfHwge307XHJcblJlcG9ydGFsQmFzZS5taXhpbih3aW5kb3cuUmVwb3J0YWwse1xyXG4gIEhpdGxpc3REYXRhc291cmNlXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0RGF0YXNvdXJjZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvbWFpbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2VHcmlkVGlsZVN0eWxlIGZyb20gJy4vSW1hZ2VHcmlkVGlsZS5jc3MnO1xuaW1wb3J0IEltZyBmcm9tICdQcm9wb3J0aW9uYWxJbWFnZSc7XG5cbmNsYXNzIEltYWdlR3JpZFRpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgdGlsZSBmb3IgaW1hZ2UgbGlzdFxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmltYWdlIC0gaW1hZ2UgdXJsXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlciAtIGEgcGxhY2Vob2xkZXIgaW1hZ2VcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyU2l6aW5nIC0gU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlci4gQnkgZGVmYXVsdCBpdCdzIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNyY2AgaW1hZ2UsIGJ1dCBzZXQgdG8gYGluaXRpYWxgIG9yIG90aGVyIHZhbGlkIGBiYWNrZ3JvdW5kLXNpemVgIHZhbHVlIHRvIG92ZXJyaWRlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMubWVkaWF0eXBlIC0gYSBkZWZhdWx0IG1lZGlhIGljb24gaW5zdGVhZCBvZiB0aGUgcGxhY2Vob2xkZXIgaW1hZ2U6IG9uZSBvZiBgaW1hZ2VgLGBhdWRpb2AsYHZpZGVvYFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmljb25Db2xvcj1cIiNjY2NjY2NcIl0gLSBkZWZhdWx0IHBsYWNlaG9sZGVyIG1lZGlhIGljb24gY29sb3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5pY29uU2l6ZT00OF0gLSBkZWZhdWx0IHBsYWNlaG9sZGVyIG1lZGlhIGljb24gc2l6ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmFzcGVjdD1cIjE2OjlcIl0gLSBhc3BlY3QgcmF0aW8gb2YgdGhlIGltYWdlIHRvIGJlIGluIHRoZSB0aWxlXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy50aXRsZSAtIHRpdGxlIG9mIHRoZSB2aWRlb1xuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuZGVzY3JpcHRpb24gLSBkZXNjcmlwdGlvbiBvZiB0aGUgdmlkZW9cbiAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy5hY3Rpb25JY29uIC0gaWNvbiB0byBkaXNwbGF5IGFzIHRoZSBhY3Rpb24gaWNvbi4gSXQgYWxzbyBoYXMgdG8gaGF2ZSBhIGNhbGxiYWNrIGF0dGFjaGVkIHRvIGl0IHdoZW4gcGFzc2VkLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblNlbGVjdCAtIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGxpbmsgaXMgY2xpY2tlZFxuICAgKiAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpe1xuICAgIGxldCBhY3Rpb25CdXR0b24gPSBudWxsO1xuICAgIGlmKHRoaXMucHJvcHMuYWN0aW9uSWNvbil7XG4gICAgICBhY3Rpb25CdXR0b24gPSA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWVkaXRcIj48ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWFjdGlvbi1pY29uXCI+e3RoaXMucHJvcHMuYWN0aW9uSWNvbn08L2Rpdj48L2Rpdj47XG4gICAgfVxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWNvdmVyXCIgb25DbGljaz17dGhpcy5wcm9wcy5vblNlbGVjdH0+XG4gICAgICAgICAgPEltZ1xuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGFzcGVjdD17dGhpcy5wcm9wcy5hc3BlY3R9XG4gICAgICAgICAgICBzaXppbmc9XCJjb3ZlclwiXG4gICAgICAgICAgICBwcmVsb2FkPXt0cnVlfVxuICAgICAgICAgICAgZmFkZT17dHJ1ZX1cbiAgICAgICAgICAgIGFsdD17dGhpcy5wcm9wcy50aXRsZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLl9jb21wdXRlVGlsZVR5cGUoKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyU2l6aW5nPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyU2l6aW5nfVxuICAgICAgICAgICAgc3JjPXt0aGlzLnByb3BzLmltYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLW1ldGFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tdGl0bGUgZWxsaXBzaXNcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uU2VsZWN0fT57dGhpcy5wcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tZGVzY3JpcHRpb24gZWxsaXBzaXNcIj57dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7YWN0aW9uQnV0dG9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9jb21wdXRlVGlsZVR5cGUoKXtcbiAgICBpZighdGhpcy5wcm9wcy5wbGFjZWhvbGRlciAmJiB0aGlzLnByb3BzLm1lZGlhdHlwZSl7XG4gICAgICBjb25zdCB0eXBlcyA9IFsnaW1hZ2UnLCdhdWRpbycsJ3ZpZGVvJ107XG4gICAgICBpZih0eXBlcy5pbmRleE9mKHRoaXMucHJvcHMubWVkaWF0eXBlKT09LTEpe3Rocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIHR5cGUgXCIke3RoaXMucHJvcHMubWVkaWF0eXBlfVwiIGlzIHNwZWNpZmllZGApfVxuICAgICAgbGV0IGljb24gPSB0aGlzLmNvbnN0cnVjdG9yLmljb25TZXJ2ZXIodGhpcy5wcm9wcy5tZWRpYXR5cGUsdGhpcy5wcm9wcy5pY29uU2l6ZSx0aGlzLnByb3BzLmljb25Db2xvcik7XG4gICAgICByZXR1cm4gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZXNjYXBlKGljb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5wbGFjZWhvbGRlclxuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBpY29uIHdpdGggYSBjb3JyZWN0IGZpbGwgY29sb3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBpY29uIG5hbWUgKG9uZSBvZiBgaW1hZ2VgLCBgdmlkZW9gLCBgYXVkaW9gKVxuICAgKiBAcGFyYW0ge051bWJlcn0gW3NpemU9MjRdIC0gaWNvbiBzaXplIGluIHBpeGVsc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gW2ZpbGw9XCIjY2NjY2NjXCJdIC0gdmFsaWQgQ1NTIGNvbG9yIGRlY2xhcmF0aW9uXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqICovXG4gIHN0YXRpYyBpY29uU2VydmVyKG5hbWUsc2l6ZT00OCxmaWxsPVwiI2NjY2NjY1wiKXtcbiAgICBjb25zdCBpY29ucyA9IHtcbiAgICAgIGltYWdlOiBgPHBhdGggZD1cIk0yMSAxOVY1YzAtMS4xLS45LTItMi0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ6TTguNSAxMy41bDIuNSAzLjAxTDE0LjUgMTJsNC41IDZINWwzLjUtNC41elwiLz5gLFxuICAgICAgYXVkaW86IGA8cGF0aCBkPVwiTTEyIDN2MTAuNTVjLS41OS0uMzQtMS4yNy0uNTUtMi0uNTUtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00VjdoNFYzaC02elwiLz5gLFxuICAgICAgdmlkZW86IGA8cGF0aCBkPVwiTTE4IDRsMiA0aC0zbC0yLTRoLTJsMiA0aC0zbC0yLTRIOGwyIDRIN0w1IDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNGgtNHpcIi8+YFxuICAgIH07XG4gICAgaWYoIWljb25zW25hbWVdKXt0aHJvdyBuZXcgRXJyb3IoYGljb24gXCIke25hbWV9XCIgaXMgbm90IG9uIHRoZSBsaXN0YCl9XG5cbiAgICByZXR1cm4gYDxzdmcgZmlsbD1cIiR7ZmlsbH1cIiBoZWlnaHQ9XCIke3NpemV9XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiJHtzaXplfVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4ke2ljb25zW25hbWVdfTwvc3ZnPmBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUdyaWRUaWxlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VHcmlkVGlsZS9JbWFnZUdyaWRUaWxlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZUdyaWRUaWxlIGZyb20gJy4uL0ltYWdlR3JpZFRpbGUvSW1hZ2VHcmlkVGlsZSc7XG5cblxuLyoqXG4gKiBgSW1hZ2VHcmlkYCBpcyBhIHN0YXRlbGVzcyBSZWFjdCBjb21wb25lbnQgdGhhdCBhbGxvd3MgdG8gY29tcHV0ZSBhbiBhcnJheSBvZiBJbWFnZUdyaWRUaWxlcyBmcm9tIGBpdGVtc2AgcGFzc2VkIGluIHByb3BzXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzLml0ZW1zIC0gYW4gYXJyYXkgb2YgaXRlbXMgYHtpZDpOdW1iZXJ8U3RyaW5nLCBpbWFnZTpTdHJpbmcsIG1lZGlhdHlwZTo/U3RyaW5nLCBwbGFjZWhvbGRlcjo/U3RyaW5nLCB0aXRsZTpTdHJpbmcsZGVzY3JpcHRpb246U3RyaW5nfWBcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzLmFzcGVjdCAtIGFzcGVjdCByYXRpbyBmb3IgdGhlIEltYWdlR3JpZFRpbGUgaW1hZ2VcbiAqIEBwYXJhbSB7SlNYfSBwcm9wcy5hY3Rpb25JY29uIC0gYWN0aW9uIGljb24gSlNYIHdpdGggYSBib3VuZCBoYW5kbGVyXG4gKiBAcGFyYW0gez9TdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyU2l6aW5nIC0gU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlci4gQnkgZGVmYXVsdCBpdCdzIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNyY2AgaW1hZ2UsIGJ1dCBzZXQgdG8gYGluaXRpYWxgIG9yIG90aGVyIHZhbGlkIGBiYWNrZ3JvdW5kLXNpemVgIHZhbHVlIHRvIG92ZXJyaWRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMub25TZWxlY3QgLSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkIG9uXG4gKiBAcGFyYW0ge051bWJlcn0gcHJvcHMuZHVtbXlJdGVtcyAtIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhbiBpdGVtIGlzIGNsaWNrZWQgb25cbiAqICovXG5jbGFzcyBJbWFnZUdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2l0ZW1zLGR1bW15SXRlbXMsYXNwZWN0LHBsYWNlaG9sZGVyU2l6aW5nLGFjdGlvbkljb24sb25TZWxlY3R9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRcIj5cbiAgICAgICAge1xuICAgICAgICAgIEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aD4wICYmIGl0ZW1zLm1hcCgoaXRlbSxpbmRleCk9PihcbiAgICAgICAgICAgIDxJbWFnZUdyaWRUaWxlXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZC50b1N0cmluZygpfVxuICAgICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cbiAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgIG1lZGlhdHlwZT17aXRlbS5tZWRpYXR5cGV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpdGVtLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlclNpemluZz17cGxhY2Vob2xkZXJTaXppbmd9XG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgYWN0aW9uSWNvbj17YWN0aW9uSWNvbn1cbiAgICAgICAgICAgICAgb25TZWxlY3Q9eygpPT5vblNlbGVjdC5jYWxsKHRoaXMsaXRlbSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAge2R1bW15SXRlbXMgJiYgdGhpcy5yZW5kZXJEdW1teUl0ZW1zKGR1bW15SXRlbXMpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyRHVtbXlJdGVtcyhjb3VudCl7XG4gICAgY29uc3QgZHVtbXlJdGVtcz1bXTtcbiAgICAgIHdoaWxlKGNvdW50LS0pe1xuICAgICAgICBkdW1teUl0ZW1zLnB1c2goPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlXCIvPilcbiAgICAgIH1cbiAgICAgIHJldHVybiBkdW1teUl0ZW1zXG4gIH1cbn1cblxuSW1hZ2VHcmlkLmRlZmF1bHRQcm9wcz17XG4gIGR1bW15SXRlbXM6MTJcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHcmlkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlR3JpZC9JbWFnZUdyaWQuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTEuMDEuMjAxNy5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZUdyaWQgZnJvbSAnLi4vSW1hZ2VHcmlkL0ltYWdlR3JpZCc7XG5pbXBvcnQgSGl0bGlzdERTIGZyb20gXCJyLWhpdGxpc3QtZGF0YXNvdXJjZVwiO1xuaW1wb3J0IFNpbmdsZVZpZXcgZnJvbSBcIi4uL1NpbmdsZVZpZXcvU2luZ2xlVmlld1wiO1xuXG5jbGFzcyBSZWFjdFZpZGVvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuY29uZmlnIC0gbmFtZSBvZiB0aGUgY29uZmlnIHRoYXQgbWFwcyBxdWVzdGlvbiBpZHMgZnJvbSBkYXRhIHdpdGggdGhlIGRhdGEgdHlwZXNcbiAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy50aHVtYnNQbGFjZWhvbGRlciAtIGRpc3BsYXkgdGh1bWJzIGFzIGltYWdlIHBsYWNlaG9sZGVycyBpbnN0ZWFkIG9mIG1lZGlhIGljb25zXG4gICAqXG4gICAqICovXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblNlbGVjdD10aGlzLm9uU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5EUyA9IG5ldyBIaXRsaXN0RFMoKTtcbiAgICB0aGlzLnByb3BzLnZlcmJvc2UgJiYgY29uc29sZS5sb2codGhpcy5EUyk7XG4gICAgdGhpcy5zZXR1cERhdGFMaXN0ZW5lcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGVtczpudWxsLFxuICAgICAgc2luZ2xlVmlldzp7XG4gICAgICAgIGxpbms6JydcbiAgICAgIH0sXG4gICAgICBzaW5nbGVWaWV3VmlzaWJsZTpmYWxzZVxuICAgIH07XG4gICAgdGhpcy5iYWNrQ2FsbGJhY2s9dGhpcy5iYWNrQ2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aXRlbXMsc2luZ2xlVmlld1Zpc2libGUsc2luZ2xlVmlld309dGhpcy5zdGF0ZTtcbiAgICBsZXQgcmVuZGVyID0gbnVsbDtcbiAgICBpZihBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGghPTApe1xuICAgICAgcmVuZGVyID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YEdyaWRDb250YWluZXIgJHshc2luZ2xlVmlld1Zpc2libGUgPyAnR3JpZFZpZXcnOicnfWB9PlxuICAgICAgICAgICAgPFNpbmdsZVZpZXdcbiAgICAgICAgICAgICAgbGluaz17c2luZ2xlVmlldy5saW5rfVxuICAgICAgICAgICAgICB2aXNpYmxlPXtzaW5nbGVWaWV3VmlzaWJsZX1cbiAgICAgICAgICAgICAgaW5pdGlhbExvYWQ9e3RydWV9XG4gICAgICAgICAgICAgIGJhY2tDYWxsYmFjaz17dGhpcy5iYWNrQ2FsbGJhY2t9XG4gICAgICAgICAgICAgIGhlYWRlclRleHQ9e2BFZGl0IHZpZGVvIFwiJHtzaW5nbGVWaWV3LnRpdGxlfVwiYH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZENvbnRhaW5lclwiIHN0eWxlPXt7ZGlzcGxheTogIXNpbmdsZVZpZXdWaXNpYmxlPyAnYmxvY2snIDogJ25vbmUnfX0+XG4gICAgICAgICAgICA8SW1hZ2VHcmlkXG4gICAgICAgICAgICAgIGFzcGVjdD1cIjE2OjlcIlxuICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdH1cbiAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKHRoaXMuRFMpe1xuICAgICAgICByZW5kZXIgPSAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHcmlkQ29udGFpbmVyIEltYWdlR3JpZFwiPnt0aGlzLkRTLmkxOG4oQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoPT0wID8gJ1JFUE9SVF9TSU5HTEVWSUVXX05PVEhJTkdGT1VORCc6J2xvYWRpbmdEYXRhJyl9PC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7dGhyb3cgbmV3IEVycm9yKCdIaXRsaXN0RGF0YXNvdXJjZSBpcyBub3QgYXZhaWxhYmxlJyl9XG4gICAgfVxuICAgIHJldHVybiByZW5kZXJcbiAgfVxuXG5cbiAgYmFja0NhbGxiYWNrKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2luZ2xlVmlld1Zpc2libGU6ZmFsc2V9KTtcbiAgICB0aGlzLkRTLmluaXRpYWxEYXRhTG9hZCgpLnRoZW4ocmVzcG9uc2U9PnRoaXMucHJvY2Vzc0RhdGEocmVzcG9uc2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMYXVuY2hlcyBsaXN0ZW5lciBmb3IgYFkuR2xvYmFsLnJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlYCBldmVudCB3aXRoaW4gWVVJIHdoaWNoIGlzIHRyaWdnZXJlZCBldmVyeSB0aW1lIHRoZSBmaWx0ZXIgcGFuZWwgdXBkYXRlcyBvciBvbiBpbml0aWFsIGxvYWRcbiAgICogKi9cbiAgc2V0dXBEYXRhTGlzdGVuZXIoKXtcbiAgICBpZihZICYmIFkuR2xvYmFsKXtcbiAgICAgIFkuR2xvYmFsLm9uKFwicmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVcIiwgZmlsdGVySW5mbz0+e1xuICAgICAgICB0aGlzLmluaXRpYWxpc2VDb25maWcodGhpcy5wcm9wcy5jb25maWcpO1xuICAgICAgICBpZih0aGlzLkRTICYmIHRoaXMuY29uZmlnKXtcbiAgICAgICAgICB0aGlzLkRTLm1vZGlmaWVyID0gZmlsdGVySW5mbzsgLy8gZmlsdGVyIGluZm9ybWF0aW9uIGFzIGEgbW9kaWZpZXIgZm9yIGRhdGEgZmV0Y2hcbiAgICAgICAgICB0aGlzLkRTLmluaXRpYWxEYXRhTG9hZCgpLnRoZW4ocmVzcG9uc2U9PnRoaXMucHJvY2Vzc0RhdGEocmVzcG9uc2UpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lVSSBpcyBub3QgZGVmaW5lZCBvciBhY2Nlc3NpYmxlLCBjYW5ub3Qgc2V0IHVwIGEgXCJyZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZVwiIGxpc3RlbmVyJyk7XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGlzZUNvbmZpZyhjb25maWdOYW1lKXtcbiAgICBpZighdGhpcy5jb25maWcpe1xuICAgICAgaWYoIXdpbmRvd1tjb25maWdOYW1lXSl7dGhyb3cgbmV3IEVycm9yKCdjb25maWcgaXMgbm90IHBhc3NlZCBmcm9tIGJhY2tlZCcpfVxuICAgICAgdGhpcy5jb25maWcgPSB3aW5kb3dbY29uZmlnTmFtZV07XG4gICAgfVxuICB9XG5cbiAgcHJvY2Vzc0RhdGEoZGF0YSl7XG4gICAgbGV0IGMgPSB0aGlzLmNvbmZpZyxcbiAgICAgIGNvbmZpZz17fTtcbiAgICBbJ2lkJywndGl0bGUnLCdkZXNjcmlwdGlvbicsJ2ltYWdlJywnYXVkaW8nLCd2aWRlbycsJ3RhZ3MnXS5mb3JFYWNoKGl0ZW09PmNvbmZpZ1tpdGVtXT1bdGhpcy5jb25maWdbaXRlbV1dKTtcbiAgICBjb25maWcgPSB7XG4gICAgICBpZDpjLmlkLFxuICAgICAgdGl0bGU6Yy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOmMuZGVzY3JpcHRpb24sXG4gICAgICBpbWFnZTpjLmltYWdlLFxuICAgICAgYXVkaW86Yy5hdWRpbyxcbiAgICAgIHZpZGVvOmMudmlkZW8sXG4gICAgICB0YWdzOmMudGFncyxcbiAgICB9O1xuICAgIGxldCBuZXdEYXRhID0gZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT57XG4gICAgICBsZXQgcGFyc2VkRGF0YSA9e307XG4gICAgICBmb3IobGV0IGtleSBpbiBjb25maWcpe1xuICAgICAgICBwYXJzZWREYXRhW2tleV09dGhpcy5jb25zdHJ1Y3Rvci5wcmVwYXJlRGF0YShpdGVtW2NvbmZpZ1trZXldXSxrZXkpO1xuICAgICAgICAvLyBpZiBpbWFnZSAtIHdlIG1pZ2h0IHdhbnQgdG8gdXNlIGEgcGxhY2Vob2xkZXIgYXMgdGhlIHRodW1iLCBhbmQgbG9hZCB0aGUgZnVsbCBpbWFnZSBpbiBiYWNrZ3JvdW5kXG4gICAgICAgIGlmKGtleSA9PSAnaW1hZ2UnKXtcbiAgICAgICAgICBpZih0aGlzLnByb3BzLnRodW1ic1BsYWNlaG9sZGVyKXtcbiAgICAgICAgICAgIHBhcnNlZERhdGFbJ3BsYWNlaG9sZGVyJ10gPSBwYXJzZWREYXRhLmltYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJzZWREYXRhLmltYWdlID0gcGFyc2VkRGF0YS5pbWFnZS5yZXBsYWNlKC9fdGh1bWIvZ2ksICcnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjYWxjdWxhdGUgbWVkaWF0eXBlIG9yIGEgcGxhY2Vob2xkZXIgaWNvblxuICAgICAgICBpZihbJ3ZpZGVvJywnYXVkaW8nLCdpbWFnZSddLmluZGV4T2Yoa2V5KT4tMSAmJiBjb25maWdba2V5XSl7XG4gICAgICAgICAgcGFyc2VkRGF0YS5tZWRpYXR5cGUgPSBrZXlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBnZXQgaWQgZm9yIGtleXNcbiAgICAgIHBhcnNlZERhdGEuaWQgPSBpdGVtLnJlc3BvbnNlaWQ/IGl0ZW0ucmVzcG9uc2VpZCA6IGluZGV4O1xuICAgICAgLy8gY2FsY3VsYXRlIGxpbmsgcGFzc2VkIGFzIGBzbGlua2AgcHJvcGVydHkgaW4gZGF0YVxuICAgICAgaWYoaXRlbS5zbGluayl7XG4gICAgICAgIGxldCBsPWl0ZW0uc2xpbms7XG4gICAgICAgIHBhcnNlZERhdGEubGluayA9ICgvaHJlZj0nKC4rPyknL2dpKS5leGVjKGwpWzFdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcnNlZERhdGE7XG4gICAgfSk7XG5cbiAgICAvL3VwZGF0ZSBzdGF0ZSB3aXRoIHRoZSBuZXcgc2V0IG9mIGRhdGFcbiAgICB0aGlzLnNldFN0YXRlKHtpdGVtczpuZXdEYXRhfSk7XG4gICAgaWYodGhpcy5wcm9wcy52ZXJib3NlKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YTogXCIsbmV3RGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICogbWFzc2FnZSBkYXRhIHRvIGZpdCB0aGUgdHlwZSB3ZSBleHBlY3QgdG8gcmVjZWl2ZSBpbiByZWFjdCB2aWV3XG4gICogKi9cbiAgc3RhdGljIHByZXBhcmVEYXRhKGRhdGEsdHlwZSl7XG4gICAgc3dpdGNoKHR5cGUpe1xuICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICBsZXQgcmVzdWx0ID0gKC9zcmM9JyguKz8pJy9naSkuZXhlYyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQgIT1udWxsICYmIHJlc3VsdFsxXT8gcmVzdWx0WzFdIDogdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgICAgcmV0dXJuICEoZGF0YS5pbmRleE9mKCctJyk+LTEgJiYgZGF0YS50cmltKCkubGVuZ3RoPT0xKSA/IGRhdGEudHJpbSgpIDogdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RhZ3MnOiByZXR1cm4gZGF0YS5pbmRleE9mKCcsJyk+LTE/IGRhdGEuc3BsaXQoJywnKSA6IGRhdGEuaW5kZXhPZignLScpPi0xICYmIGRhdGEudHJpbSgpLmxlbmd0aD09MT8gdW5kZWZpbmVkIDogZGF0YS50cmltKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0KGRhdGEpe1xuICAgIGlmKHRoaXMucHJvcHMudmVyYm9zZSl7XG4gICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgaXRlbSBkYXRhOlwiLGRhdGEpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNpbmdsZVZpZXc6ZGF0YSxcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOnRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhY3Rpb25JY29uKCl7XG4gICAgcmV0dXJuICA8c3ZnIGNsYXNzTmFtZT1cImljb25cIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44My0xLjgzelwiLz48L3N2Zz5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdFZpZGVvO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VmlkZW8vUmVhY3RWaWRlby5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNREljb24gZnJvbSAnTURJY29uJztcbmltcG9ydCB7aWNfYXJyb3dfYmFja30gZnJvbSAnLi4vaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGVWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzaW5nbGUgdmlldyB3aGljaCBpcyBhIG5hdmlnYXRpb24gaGVhZGVyIGZvbGxvd2VkIGJ5IGFuIHJlbmRlcklmcmFtZSB0aGF0IGxvYWRzIGV4dGVybmFsIGNvbnRlbnQgZnJvbSBhIGxpbmtcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3Byb3BzLnZpc2libGU9ZmFsc2VdIC0gd2hldGhlciB0aGUgcmVuZGVySWZyYW1lIGlzIHZpc2libGUgb24gYSBwYWdlXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMuaW5pdGlhbExvYWQgLSB3aGV0aGVyIGl0J3MgdGhlIGZpcnN0IHRpbWUgdGhlIHJlbmRlcklmcmFtZSBsb2FkcyAobmVjZXNzYXJ5IGZvciB0aGUgc3VydmV5LCBiZWNhdXNlIGFuIGluaXRpYWwgbG9hZCBpcyB0aGUgZmlyc3QgdGltZSB0aGUgc3VydmV5IGxvYWRzLCBhbmQgc2Vjb25kIGxvYWQgaXMgd2hlbiB0aGUgc3VydmV5IGlzIHN1Ym1pdHRlZClcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmxpbmsgLSB0aGUgbGluayB0byBhIHBhZ2UgdG8gbG9hZCBpbiBhbiByZW5kZXJJZnJhbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5oZWFkZXJUZXh0XSAtIHRoZSB0ZXh0IHRvIGJlIGRpc3BsYXllZCBuZXh0IHRvIHRoZSBiYWNrIGJ1dHRvbiBpbiB0aGUgbmF2IGhlYWRlclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5iYWNrQ2FsbGJhY2sgLSB0aGUgY2FsbGJhY2sgZXhlY3V0ZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBuYXZpZ2F0ZSBvZmYgdGhlIFNpbmdsZVZpZXcgcGFnZSAoaGl0dGluZyBiYWNrIG9yIHN1Ym1pdClcbiAgICogQHBhcmFtIHtCb29sZWFufSBbcHJvcHMuY2xvc2VPblN1Ym1pdCA9IGZhbHNlXSAtIHRoZSBjYWxsYmFjayBleGVjdXRlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIG5hdmlnYXRlIG9mZiB0aGUgU2luZ2xlVmlldyBwYWdlIChoaXR0aW5nIGJhY2sgb3Igc3VibWl0KVxuICAgKiAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBsZXQge3Zpc2libGUsIGxpbmssIGluaXRpYWxMb2FkPXRydWV9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnN0YXRlICAgICAgICAgICAgICAgICAgICAgICA9IHtcbiAgICAgIHZpc2libGUsXG4gICAgICBsaW5rLFxuICAgICAgaW5pdGlhbExvYWQsXG4gICAgICBpZnJhbWVWaXNpYmxlOiBmYWxzZSxcbiAgICAgIGlmcmFtZUhlaWdodCA6ICdhdXRvJyxcbiAgICB9O1xuICAgIHRoaXMub25Mb2FkICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy5vbkxvYWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlY2VpdmVNZXNzYWdlICAgICAgICAgICAgICA9IHRoaXMucmVjZWl2ZU1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5yZWNlaXZlTWVzc2FnZSwgZmFsc2UpO1xuICB9XG5cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMubWFwUHJvcHNUb1N0YXRlKG5leHRQcm9wcylcbiAgfVxuXG4gIG1hcFByb3BzVG9TdGF0ZShwcm9wcykge1xuICAgIGxldCB7dmlzaWJsZSwgbGluaywgaW5pdGlhbExvYWR9ID0gcHJvcHM7XG4gICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSAhPSB2aXNpYmxlIHx8IHRoaXMucHJvcHMubGluayAhPSBsaW5rIHx8IHRoaXMucHJvcHMuaW5pdGlhbExvYWQgIT0gaW5pdGlhbExvYWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xpbmssIHZpc2libGUsIGluaXRpYWxMb2FkfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tYXBQcm9wc1RvU3RhdGUodGhpcy5wcm9wcyk7XG4gIH1cblxuICBzZXR1cExpc3RlbmVyKGUpIHtcbiAgICB0aGlzLmhhbmRzaGFrZSh0aGlzLmlmcmFtZUVsLCB0aGlzLmdldERvbWFpbih0aGlzLnN0YXRlLmxpbmspKVxuICB9XG5cbiAgb25Mb2FkKGUpIHtcbiAgICBpZih0aGlzLnN0YXRlLmxpbmsubGVuZ3RoPjApe1xuICAgICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbExvYWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmlzaWJsZSAgICAgIDogdHJ1ZSxcbiAgICAgICAgICBpZnJhbWVWaXNpYmxlOiB0cnVlLFxuICAgICAgICAgIGluaXRpYWxMb2FkICA6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy90aGlzLmhhbmRzaGFrZShlLnRhcmdldCwgdGhpcy5nZXREb21haW4odGhpcy5zdGF0ZS5saW5rKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RG9tYWluKGxpbmspIHtcbiAgICByZXR1cm4gbGluayAmJiBsaW5rLmxlbmd0aCA+IDAgPyAoLyguKz9cXC9cXC8uKz8pXFwvL2dpKS5leGVjKGxpbmspWzFdIDogbnVsbFxuICB9XG5cbiAgaGFuZHNoYWtlKGVsLCB0YXJnZXRPcmlnaW4pIHtcbiAgICBpZiAodGFyZ2V0T3JpZ2luICE9IG51bGwpIHtcbiAgICAgIGxldCBpZnJhbWUgICAgICAgID0gZWwuY29udGVudFdpbmRvdztcbiAgICAgIHRoaXMudGFyZ2V0T3JpZ2luID0gdGFyZ2V0T3JpZ2luO1xuICAgICAgaWZyYW1lLnBvc3RNZXNzYWdlKCdjb25uZWN0JywgdGFyZ2V0T3JpZ2luKTtcbiAgICB9XG4gIH1cblxuICByZWNlaXZlTWVzc2FnZShldmVudCkge1xuICAgIGxldCBvcmlnaW4gPSBldmVudC5vcmlnaW4gfHwgZXZlbnQub3JpZ2luYWxFdmVudC5vcmlnaW47IC8vIEZvciBDaHJvbWUsIHRoZSBvcmlnaW4gcHJvcGVydHkgaXMgaW4gdGhlIGV2ZW50Lm9yaWdpbmFsRXZlbnQgb2JqZWN0LlxuICAgIGlmIChvcmlnaW4gIT09IHRoaXMudGFyZ2V0T3JpZ2luKXJldHVybjtcbiAgICBpZiAoZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLmFjdGlvbiAmJiB0aGlzW2V2ZW50LmRhdGEuYWN0aW9uXSkge1xuICAgICAgdGhpc1tldmVudC5kYXRhLmFjdGlvbl0oZXZlbnQuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignYWN0aW9uIG5vdCBmb3VuZCBmb3IgJywgZXZlbnQuZGF0YSwgZXZlbnQuZGF0YS5hY3Rpb24sIHRoaXNbZXZlbnQuZGF0YS5hY3Rpb25dKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2xpbmssIHZpc2libGUsaWZyYW1lVmlzaWJsZX0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbmdsZVZpZXdcIiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMuc3RhdGUudmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSd9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3LS1oZWFkZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3LS1iYWNrLWJ1dHRvblwiIHRpdGxlPVwiUmV0dXJuIHRvIHRoZSBsaXN0XCIgb25DbGljaz17dGhpcy5wcm9wcy5iYWNrQ2FsbGJhY2t9PlxuICAgICAgICAgICAgPE1ESWNvbiBpY29uPXtpY19hcnJvd19iYWNrfS8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmhlYWRlclRleHR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJJZnJhbWUobGluaywgdmlzaWJsZSA/IGlmcmFtZVZpc2libGUgOiB2aXNpYmxlKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGFuIHJlbmRlcklmcmFtZSBlbGVtZW50XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsaW5rIC0gdXJsIG9mIHRoZSByZW5kZXJJZnJhbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZpc2libGUgLSB2aXNpYmlsaXR5IG9mIHRoZSByZW5kZXJJZnJhbWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGhlaWdodCAtIGhlaWdodCBvZiB0aGUgcmVuZGVySWZyYW1lXG4gICAqICovXG4gIHJlbmRlcklmcmFtZShsaW5rLCB2aXNpYmxlKSB7XG4gICAgcmV0dXJuIDxpZnJhbWVcbiAgICAgIHJlZj17aWZyYW1lID0+IHtcbiAgICAgICAgdGhpcy5pZnJhbWVFbCA9IGlmcmFtZVxuICAgICAgfX1cbiAgICAgIHNyYz17bGlua31cbiAgICAgIG9uTG9hZD17dGhpcy5vbkxvYWR9XG4gICAgICBzdHlsZT17e2Rpc3BsYXk6IHZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnfX0vPjtcbiAgfVxufVxuXG5TaW5nbGVWaWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xvc2VPblN1Ym1pdDogZmFsc2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2luZ2xlVmlldy9TaW5nbGVWaWV3LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgaWNfc3RhciA9IDxwYXRoIGQ9XCJNMTIgMTcuMjdMMTguMTggMjFsLTEuNjQtNy4wM0wyMiA5LjI0bC03LjE5LS42MUwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjF6XCIvPjtcbmV4cG9ydCBjb25zdCBpY19zdGFyX2JvcmRlciA9IDxwYXRoIGQ9XCJNMjIgOS4yNGwtNy4xOS0uNjJMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxIDEyIDE3LjI3IDE4LjE4IDIxbC0xLjYzLTcuMDNMMjIgOS4yNHpNMTIgMTUuNGwtMy43NiAyLjI3IDEtNC4yOC0zLjMyLTIuODggNC4zOC0uMzhMMTIgNi4xbDEuNzEgNC4wNCA0LjM4LjM4LTMuMzIgMi44OCAxIDQuMjhMMTIgMTUuNHpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX2Fycm93X2JhY2sgPSA8cGF0aCBkPVwiTTIwIDExSDcuODNsNS41OS01LjU5TDEyIDRsLTggOCA4IDggMS40MS0xLjQxTDcuODMgMTNIMjB2LTJ6XCIvPjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pY29ucy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvSW1hZ2VHcmlkVGlsZS9JbWFnZUdyaWRUaWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=