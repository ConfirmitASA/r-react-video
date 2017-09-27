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
	
	var _reactDom = __webpack_require__(222);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _main = __webpack_require__(221);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _ReactVideo = __webpack_require__(216);
	
	var _ReactVideo2 = _interopRequireDefault(_ReactVideo);
	
	var _rReportalBase = __webpack_require__(26);
	
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
	
	var store = __webpack_require__(53)('wks');
	var uid = __webpack_require__(56);
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var freeGlobal = __webpack_require__(66);
	
	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(12);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsNative = __webpack_require__(134),
	    getValue = __webpack_require__(158);
	
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(20);
	var createDesc = __webpack_require__(52);
	module.exports = __webpack_require__(11) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(47)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

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
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(4);
	
	/** Built-in value references. */
	var _Symbol = root.Symbol;
	
	module.exports = _Symbol;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(14),
	    getRawTag = __webpack_require__(155),
	    objectToString = __webpack_require__(183);
	
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
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(16);
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
/* 19 */
/***/ (function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(6);
	var IE8_DOM_DEFINE = __webpack_require__(83);
	var toPrimitive = __webpack_require__(106);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var listCacheClear = __webpack_require__(169),
	    listCacheDelete = __webpack_require__(170),
	    listCacheGet = __webpack_require__(171),
	    listCacheHas = __webpack_require__(172),
	    listCacheSet = __webpack_require__(173);
	
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var eq = __webpack_require__(71);
	
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isKeyable = __webpack_require__(166);
	
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(7);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isSymbol = __webpack_require__(42);
	
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _promise = __webpack_require__(43);
	
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(12);
	var document = __webpack_require__(3).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(20).f;
	var has = __webpack_require__(19);
	var TAG = __webpack_require__(2)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(53)('keys');
	var uid = __webpack_require__(56);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(85);
	var defined = __webpack_require__(28);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(7),
	    root = __webpack_require__(4);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var mapCacheClear = __webpack_require__(174),
	    mapCacheDelete = __webpack_require__(175),
	    mapCacheGet = __webpack_require__(176),
	    mapCacheHas = __webpack_require__(177),
	    mapCacheSet = __webpack_require__(178);
	
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var isArray = __webpack_require__(5),
	    isSymbol = __webpack_require__(42);
	
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
/* 37 */
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
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsArguments = __webpack_require__(130),
	    isObjectLike = __webpack_require__(9);
	
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
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var baseGetTag = __webpack_require__(15),
	    isObjectLike = __webpack_require__(9);
	
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(109);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(110);
	module.exports = __webpack_require__(10).Promise;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(17);
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
/* 45 */
/***/ (function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(3);
	var core = __webpack_require__(10);
	var ctx = __webpack_require__(18);
	var hide = __webpack_require__(8);
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
/* 47 */
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var document = __webpack_require__(3).document;
	module.exports = document && document.documentElement;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(50);
	var $export = __webpack_require__(46);
	var redefine = __webpack_require__(100);
	var hide = __webpack_require__(8);
	var has = __webpack_require__(19);
	var Iterators = __webpack_require__(13);
	var $iterCreate = __webpack_require__(88);
	var setToStringTag = __webpack_require__(30);
	var getPrototypeOf = __webpack_require__(94);
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
/* 50 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = true;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	
	var aFunction = __webpack_require__(16);
	
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
/* 52 */
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(3);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(18);
	var invoke = __webpack_require__(84);
	var html = __webpack_require__(48);
	var cel = __webpack_require__(29);
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
	  if (__webpack_require__(17)(process) == 'process') {
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(32);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	'use strict';
	
	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(7),
	    root = __webpack_require__(4);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var MapCache = __webpack_require__(35),
	    setCacheAdd = __webpack_require__(186),
	    setCacheHas = __webpack_require__(187);
	
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(21),
	    stackClear = __webpack_require__(190),
	    stackDelete = __webpack_require__(191),
	    stackGet = __webpack_require__(192),
	    stackHas = __webpack_require__(193),
	    stackSet = __webpack_require__(194);
	
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
/* 60 */
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var castPath = __webpack_require__(64),
	    toKey = __webpack_require__(25);
	
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqualDeep = __webpack_require__(131),
	    isObjectLike = __webpack_require__(9);
	
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
/* 63 */
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArray = __webpack_require__(5),
	    isKey = __webpack_require__(36),
	    stringToPath = __webpack_require__(196),
	    toString = __webpack_require__(207);
	
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var SetCache = __webpack_require__(58),
	    arraySome = __webpack_require__(124),
	    cacheHas = __webpack_require__(63);
	
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
/* 66 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(41);
	
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
/* 69 */
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
/* 70 */
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
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(74),
	    isLength = __webpack_require__(40);
	
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var root = __webpack_require__(4),
	    stubFalse = __webpack_require__(206);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(15),
	    isObject = __webpack_require__(41);
	
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsTypedArray = __webpack_require__(135),
	    baseUnary = __webpack_require__(146),
	    nodeUtil = __webpack_require__(182);
	
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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayLikeKeys = __webpack_require__(122),
	    baseKeys = __webpack_require__(137),
	    isArrayLike = __webpack_require__(72);
	
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
/* 77 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ }),
/* 78 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function () {/* empty */};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(33);
	var toLength = __webpack_require__(55);
	var toAbsoluteIndex = __webpack_require__(104);
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(18);
	var call = __webpack_require__(87);
	var isArrayIter = __webpack_require__(86);
	var anObject = __webpack_require__(6);
	var toLength = __webpack_require__(55);
	var getIterFn = __webpack_require__(107);
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(11) && !__webpack_require__(47)(function () {
	  return Object.defineProperty(__webpack_require__(29)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ }),
/* 84 */
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(17);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(13);
	var ITERATOR = __webpack_require__(2)('iterator');
	var ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(6);
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(92);
	var descriptor = __webpack_require__(52);
	var setToStringTag = __webpack_require__(30);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(2)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 89 */
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
/* 90 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(3);
	var macrotask = __webpack_require__(54).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(17)(process) == 'process';
	
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(6);
	var dPs = __webpack_require__(93);
	var enumBugKeys = __webpack_require__(45);
	var IE_PROTO = __webpack_require__(31)('IE_PROTO');
	var Empty = function Empty() {/* empty */};
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(29)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(48).appendChild(iframe);
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(20);
	var anObject = __webpack_require__(6);
	var getKeys = __webpack_require__(96);
	
	module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties) {
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(19);
	var toObject = __webpack_require__(105);
	var IE_PROTO = __webpack_require__(31)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(19);
	var toIObject = __webpack_require__(33);
	var arrayIndexOf = __webpack_require__(81)(false);
	var IE_PROTO = __webpack_require__(31)('IE_PROTO');
	
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(95);
	var enumBugKeys = __webpack_require__(45);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 97 */
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
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(6);
	var isObject = __webpack_require__(12);
	var newPromiseCapability = __webpack_require__(51);
	
	module.exports = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var hide = __webpack_require__(8);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];else hide(target, key, src[key]);
	  }return target;
	};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(8);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(3);
	var core = __webpack_require__(10);
	var dP = __webpack_require__(20);
	var DESCRIPTORS = __webpack_require__(11);
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(6);
	var aFunction = __webpack_require__(16);
	var SPECIES = __webpack_require__(2)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(32);
	var defined = __webpack_require__(28);
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
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(32);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(28);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ }),
/* 106 */
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(44);
	var ITERATOR = __webpack_require__(2)('iterator');
	var Iterators = __webpack_require__(13);
	module.exports = __webpack_require__(10).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(79);
	var step = __webpack_require__(90);
	var Iterators = __webpack_require__(13);
	var toIObject = __webpack_require__(33);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(49)(Array, 'Array', function (iterated, kind) {
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
/* 109 */
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(50);
	var global = __webpack_require__(3);
	var ctx = __webpack_require__(18);
	var classof = __webpack_require__(44);
	var $export = __webpack_require__(46);
	var isObject = __webpack_require__(12);
	var aFunction = __webpack_require__(16);
	var anInstance = __webpack_require__(80);
	var forOf = __webpack_require__(82);
	var speciesConstructor = __webpack_require__(102);
	var task = __webpack_require__(54).set;
	var microtask = __webpack_require__(91)();
	var newPromiseCapabilityModule = __webpack_require__(51);
	var perform = __webpack_require__(97);
	var promiseResolve = __webpack_require__(98);
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
	  Internal.prototype = __webpack_require__(99)($Promise.prototype, {
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
	    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
	__webpack_require__(30)($Promise, PROMISE);
	__webpack_require__(101)(PROMISE);
	Wrapper = __webpack_require__(10)[PROMISE];
	
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
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(89)(function (iter) {
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(103)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(49)(String, 'String', function (iterated) {
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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(108);
	var global = __webpack_require__(3);
	var hide = __webpack_require__(8);
	var Iterators = __webpack_require__(13);
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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(7),
	    root = __webpack_require__(4);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var hashClear = __webpack_require__(160),
	    hashDelete = __webpack_require__(161),
	    hashGet = __webpack_require__(162),
	    hashHas = __webpack_require__(163),
	    hashSet = __webpack_require__(164);
	
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(7),
	    root = __webpack_require__(4);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(4);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(7),
	    root = __webpack_require__(4);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;

/***/ }),
/* 118 */
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
/* 119 */
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIndexOf = __webpack_require__(129);
	
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
/* 121 */
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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseTimes = __webpack_require__(144),
	    isArguments = __webpack_require__(39),
	    isArray = __webpack_require__(5),
	    isBuffer = __webpack_require__(73),
	    isIndex = __webpack_require__(67),
	    isTypedArray = __webpack_require__(75);
	
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
/* 123 */
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
/* 124 */
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
/* 125 */
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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayPush = __webpack_require__(60),
	    isFlattenable = __webpack_require__(165);
	
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayPush = __webpack_require__(60),
	    isArray = __webpack_require__(5);
	
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
/* 128 */
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
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseFindIndex = __webpack_require__(125),
	    baseIsNaN = __webpack_require__(133),
	    strictIndexOf = __webpack_require__(195);
	
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
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(15),
	    isObjectLike = __webpack_require__(9);
	
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
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stack = __webpack_require__(59),
	    equalArrays = __webpack_require__(65),
	    equalByTag = __webpack_require__(151),
	    equalObjects = __webpack_require__(152),
	    getTag = __webpack_require__(157),
	    isArray = __webpack_require__(5),
	    isBuffer = __webpack_require__(73),
	    isTypedArray = __webpack_require__(75);
	
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
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stack = __webpack_require__(59),
	    baseIsEqual = __webpack_require__(62);
	
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
/* 133 */
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
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(74),
	    isMasked = __webpack_require__(167),
	    isObject = __webpack_require__(41),
	    toSource = __webpack_require__(70);
	
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
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(15),
	    isLength = __webpack_require__(40),
	    isObjectLike = __webpack_require__(9);
	
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
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var baseMatches = __webpack_require__(138),
	    baseMatchesProperty = __webpack_require__(139),
	    identity = __webpack_require__(38),
	    isArray = __webpack_require__(5),
	    property = __webpack_require__(204);
	
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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isPrototype = __webpack_require__(168),
	    nativeKeys = __webpack_require__(181);
	
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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsMatch = __webpack_require__(132),
	    getMatchData = __webpack_require__(154),
	    matchesStrictComparable = __webpack_require__(69);
	
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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqual = __webpack_require__(62),
	    get = __webpack_require__(198),
	    hasIn = __webpack_require__(199),
	    isKey = __webpack_require__(36),
	    isStrictComparable = __webpack_require__(68),
	    matchesStrictComparable = __webpack_require__(69),
	    toKey = __webpack_require__(25);
	
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
/* 140 */
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
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(61);
	
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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var identity = __webpack_require__(38),
	    overRest = __webpack_require__(185),
	    setToString = __webpack_require__(188);
	
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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var constant = __webpack_require__(197),
	    defineProperty = __webpack_require__(150),
	    identity = __webpack_require__(38);
	
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
/* 144 */
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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(14),
	    arrayMap = __webpack_require__(123),
	    isArray = __webpack_require__(5),
	    isSymbol = __webpack_require__(42);
	
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
/* 146 */
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
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var SetCache = __webpack_require__(58),
	    arrayIncludes = __webpack_require__(120),
	    arrayIncludesWith = __webpack_require__(121),
	    cacheHas = __webpack_require__(63),
	    createSet = __webpack_require__(149),
	    setToArray = __webpack_require__(37);
	
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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(4);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Set = __webpack_require__(57),
	    noop = __webpack_require__(203),
	    setToArray = __webpack_require__(37);
	
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
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(7);
	
	var defineProperty = function () {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}();
	
	module.exports = defineProperty;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(14),
	    Uint8Array = __webpack_require__(116),
	    eq = __webpack_require__(71),
	    equalArrays = __webpack_require__(65),
	    mapToArray = __webpack_require__(179),
	    setToArray = __webpack_require__(37);
	
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
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getAllKeys = __webpack_require__(153);
	
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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetAllKeys = __webpack_require__(127),
	    getSymbols = __webpack_require__(156),
	    keys = __webpack_require__(76);
	
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
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isStrictComparable = __webpack_require__(68),
	    keys = __webpack_require__(76);
	
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
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(14);
	
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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayFilter = __webpack_require__(119),
	    stubArray = __webpack_require__(205);
	
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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var DataView = __webpack_require__(113),
	    Map = __webpack_require__(34),
	    Promise = __webpack_require__(115),
	    Set = __webpack_require__(57),
	    WeakMap = __webpack_require__(117),
	    baseGetTag = __webpack_require__(15),
	    toSource = __webpack_require__(70);
	
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
/* 158 */
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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var castPath = __webpack_require__(64),
	    isArguments = __webpack_require__(39),
	    isArray = __webpack_require__(5),
	    isIndex = __webpack_require__(67),
	    isLength = __webpack_require__(40),
	    toKey = __webpack_require__(25);
	
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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(24);
	
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
/* 161 */
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(24);
	
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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(24);
	
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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(24);
	
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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(14),
	    isArguments = __webpack_require__(39),
	    isArray = __webpack_require__(5);
	
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
/* 166 */
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var coreJsData = __webpack_require__(148);
	
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
/* 168 */
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
/* 169 */
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
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(22);
	
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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(22);
	
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
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(22);
	
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
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(22);
	
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
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Hash = __webpack_require__(114),
	    ListCache = __webpack_require__(21),
	    Map = __webpack_require__(34);
	
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
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(23);
	
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
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(23);
	
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
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(23);
	
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
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(23);
	
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
/* 179 */
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
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var memoize = __webpack_require__(202);
	
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
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var overArg = __webpack_require__(184);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var freeGlobal = __webpack_require__(66);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ }),
/* 183 */
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
/* 184 */
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
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var apply = __webpack_require__(118);
	
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
/* 186 */
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
/* 187 */
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
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseSetToString = __webpack_require__(143),
	    shortOut = __webpack_require__(189);
	
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
/* 189 */
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
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(21);
	
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
/* 191 */
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
/* 192 */
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
/* 193 */
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
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(21),
	    Map = __webpack_require__(34),
	    MapCache = __webpack_require__(35);
	
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
/* 195 */
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
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var memoizeCapped = __webpack_require__(180);
	
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
/* 197 */
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
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(61);
	
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
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseHasIn = __webpack_require__(128),
	    hasPath = __webpack_require__(159);
	
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
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArrayLike = __webpack_require__(72),
	    isObjectLike = __webpack_require__(9);
	
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
/* 201 */
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
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var MapCache = __webpack_require__(35);
	
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
/* 203 */
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
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseProperty = __webpack_require__(140),
	    basePropertyDeep = __webpack_require__(141),
	    isKey = __webpack_require__(36),
	    toKey = __webpack_require__(25);
	
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
/* 205 */
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
/* 206 */
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
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseToString = __webpack_require__(145);
	
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
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseFlatten = __webpack_require__(126),
	    baseIteratee = __webpack_require__(136),
	    baseRest = __webpack_require__(142),
	    baseUniq = __webpack_require__(147),
	    isArrayLikeObject = __webpack_require__(200),
	    last = __webpack_require__(201);
	
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
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _rReportalBase = __webpack_require__(26);
	
	var _rReportalBase2 = _interopRequireDefault(_rReportalBase);
	
	var _hitlistSetup = __webpack_require__(210);
	
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
/* 210 */
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
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _hitlistDatasource = __webpack_require__(209);
	
	var _hitlistDatasource2 = _interopRequireDefault(_hitlistDatasource);
	
	var _rReportalBase = __webpack_require__(26);
	
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
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = DSAbstraction;
	
	var _rHitlistDatasource = __webpack_require__(211);
	
	var _rHitlistDatasource2 = _interopRequireDefault(_rHitlistDatasource);
	
	var _unionBy = __webpack_require__(208);
	
	var _unionBy2 = _interopRequireDefault(_unionBy);
	
	var _rReportalBase = __webpack_require__(26);
	
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
	        loading: false,
	        error: false
	      });
	    } else if (mode === 'append') {
	      component.setState(function (prevState) {
	        return {
	          items: [].concat(_toConsumableArray(prevState.items), _toConsumableArray(newData)),
	          loading: false,
	          error: false
	        };
	      });
	    } else if (mode === 'merge') {
	      console.log(mode);
	      component.setState(function (prevState) {
	        return {
	          items: [].concat(_toConsumableArray((0, _unionBy2.default)(newData, prevState.items, 'id'))),
	          loading: false,
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
	  }
	
	  DS.loadNextPage = function () {
	    component.setState({ loading: true });
	    return DS.nextPage().then(processData).catch(handleDataLoadingError);
	  };
	
	  DS.loadPreviousPage = function () {
	    component.setState({ loading: true });
	    return DS.previousPage().then(processData).catch(handleDataLoadingError);
	  };
	
	  DS.loadMore = function () {
	    component.setState({ loading: true });
	    return DS.nextPage().then(function (response) {
	      return processData(response, 'append');
	    }).catch(handleDataLoadingError);
	  };
	
	  DS.initialLoad = function () {
	    component.setState({ loading: true });
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
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ProportionalImage = __webpack_require__(78);
	
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
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGridTile = __webpack_require__(213);
	
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
/* 215 */
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
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _promise = __webpack_require__(43);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGrid = __webpack_require__(214);
	
	var _ImageGrid2 = _interopRequireDefault(_ImageGrid);
	
	var _SingleView = __webpack_require__(219);
	
	var _SingleView2 = _interopRequireDefault(_SingleView);
	
	var _DSAbstraction = __webpack_require__(212);
	
	var _DSAbstraction2 = _interopRequireDefault(_DSAbstraction);
	
	var _Navigation = __webpack_require__(215);
	
	var _Navigation2 = _interopRequireDefault(_Navigation);
	
	var _Responses = __webpack_require__(218);
	
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
	      loading: false,
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
	        'svg',
	        { className: 'icon', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
	        _react2.default.createElement('path', { d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' })
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
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          items = _state.items,
	          singleViewVisible = _state.singleViewVisible,
	          error = _state.error,
	          config = _state.config;
	
	      var render = null;
	      if (!error && Array.isArray(items) && items.length !== 0) {
	        render = _react2.default.createElement(
	          'div',
	          { className: 'GridContainer ' + (!singleViewVisible ? 'GridView' : '') },
	          this.renderSingleView(),
	          _react2.default.createElement(
	            'div',
	            { className: 'ImageGridContainer', style: { display: !singleViewVisible ? 'block' : 'none' } },
	            _react2.default.createElement(_ImageGrid2.default, {
	              aspect: '16:9',
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
	    key: 'renderNavigation',
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
	    key: 'renderSingleView',
	    value: function renderSingleView() {
	      var _state2 = this.state,
	          singleViewVisible = _state2.singleViewVisible,
	          singleView = _state2.singleView,
	          singleViewDisablePrev = _state2.singleViewDisablePrev,
	          singleViewDisableNext = _state2.singleViewDisableNext,
	          singleViewMode = _state2.singleViewMode,
	          loading = _state2.loading;
	
	      return singleViewVisible ? _react2.default.createElement(
	        _SingleView2.default,
	        {
	          returnToGridAction: this.returnToGrid,
	          loadPreviousItem: this.loadPreviousItem,
	          loadNextItem: this.loadNextItem,
	          singleViewDisablePrev: singleViewDisablePrev,
	          singleViewDisableNext: singleViewDisableNext,
	          loading: loading
	        },
	        singleViewMode === 'edit' ? _react2.default.createElement('iframe', { className: 'renderArea', src: singleView.link }) : _react2.default.createElement(_Responses2.default, { data: singleView, columns: this.individualRecordsQuestionIds, columnsMap: this.individualRecordsKeyLabels })
	      ) : null;
	    }
	  }, {
	    key: 'getLabelsForMainFields',
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
	    key: 'getLabelsForIndividualRecords',
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
	    key: 'dataLoadingMessage',
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
	    key: 'navigateItems',
	    value: function navigateItems(direction) {
	      var _this3 = this;
	
	      var items = this.state.items;
	      var paginationType = this.state.config.pagination;
	      var itemsLength = items.length - 1;
	      var currentSingleViewItemIndex = items.indexOf(this.state.singleView);
	      var nextIndex = direction === 'forward' ? currentSingleViewItemIndex + 1 : currentSingleViewItemIndex - 1;
	
	      var loadItemFromPreviousPage = nextIndex < 0 && !this.DS.disablePrevButton;
	      var loadItemFromNextPage = nextIndex > itemsLength && !this.DS.disableNextButton;
	
	      var promisedItems = _promise2.default.resolve(items);
	      // assign items to thenable promises if requested item is outside of data boundaries
	      if (loadItemFromPreviousPage) {
	        promisedItems = this.DS.loadPreviousPage();
	      } else if (loadItemFromNextPage) {
	        promisedItems = paginationType !== 'continuous' ? this.DS.loadNextPage() : this.DS.loadMore();
	      }
	
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
	
	          return _extends({}, _this3.getSingleViewNavState(newItems.indexOf(singleViewData)), {
	            singleView: singleViewData,
	            singleViewVisible: true
	          });
	        });
	      });
	    }
	  }, {
	    key: 'getSingleViewNavState',
	    value: function getSingleViewNavState(currentItemIndex) {
	      var items = this.state.items;
	      var singleViewDisableNext = false,
	          singleViewDisablePrev = false;
	      /*if new item index is 0 or less and it's the first item in dataset.
	      If hitlist pagination has disablePrevButton then button needs to be disabled.
	      But in case of continuous navigation hitlist sends disablePrevButton for the second page as false, but we know that there's no data beyond item[0], so we ignore hitlist flag.
	      */
	      console.log(currentItemIndex);
	      if (currentItemIndex <= 0 && (this.state.config.pagination === 'continuous' || this.DS.disablePrevButton)) {
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
	    key: 'individualRecordsQuestionIds',
	    get: function get() {
	      var _DS$config = this.DS.config(),
	          individualRecords = _DS$config.individualRecords;
	
	      return individualRecords != null && Array.isArray(individualRecords) ? individualRecords : [];
	    }
	  }, {
	    key: 'individualRecordsKeyLabels',
	    get: function get() {
	      return _extends({}, this.getLabelsForMainFields(), this.getLabelsForIndividualRecords());
	    }
	  }]);
	
	  return ReactVideo;
	}(_react.Component);
	
	exports.default = ReactVideo;
	module.exports = exports['default'];

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MDIcon = __webpack_require__(77);
	
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
/* 218 */
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
	      if (data) {
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
	      } else {
	        console.log('no data for individualResponse');
	        return null;
	      }
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
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NavButton = __webpack_require__(217);
	
	var _NavButton2 = _interopRequireDefault(_NavButton);
	
	var _icons = __webpack_require__(220);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NavBar = function (_PureComponent) {
	  _inherits(NavBar, _PureComponent);
	
	  function NavBar() {
	    _classCallCheck(this, NavBar);
	
	    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
	  }
	
	  _createClass(NavBar, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          loadPreviousItem = _props.loadPreviousItem,
	          returnToGridAction = _props.returnToGridAction,
	          loadNextItem = _props.loadNextItem,
	          singleViewDisablePrev = _props.singleViewDisablePrev,
	          singleViewDisableNext = _props.singleViewDisableNext,
	          loading = _props.loading;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'SingleView--header' },
	        _react2.default.createElement(_NavButton2.default, { disabled: singleViewDisablePrev || loading, title: 'Previous item', onClick: loadPreviousItem, icon: !loading ? _icons.ic_arrow_back : _icons.ic_hourglass }),
	        _react2.default.createElement(_NavButton2.default, { title: 'Return to the list', onClick: returnToGridAction, icon: _icons.ic_view_module }),
	        _react2.default.createElement(_NavButton2.default, { disabled: singleViewDisableNext || loading, title: 'Next Item', onClick: loadNextItem, icon: !loading ? _icons.ic_arrow_forward : _icons.ic_hourglass })
	      );
	    }
	  }]);
	
	  return NavBar;
	}(_react.PureComponent);
	
	var SingleView = function (_PureComponent2) {
	  _inherits(SingleView, _PureComponent2);
	
	  function SingleView() {
	    _classCallCheck(this, SingleView);
	
	    return _possibleConstructorReturn(this, (SingleView.__proto__ || Object.getPrototypeOf(SingleView)).apply(this, arguments));
	  }
	
	  _createClass(SingleView, [{
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          children = _props2.children,
	          navBarProps = _objectWithoutProperties(_props2, ['children']);
	
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
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ic_hourglass = exports.ic_view_module = exports.ic_arrow_forward = exports.ic_arrow_back = exports.ic_star_border = exports.ic_star = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ic_star = exports.ic_star = _react2.default.createElement("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" });
	var ic_star_border = exports.ic_star_border = _react2.default.createElement("path", { d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" });
	var ic_arrow_back = exports.ic_arrow_back = _react2.default.createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" });
	var ic_arrow_forward = exports.ic_arrow_forward = _react2.default.createElement("path", { d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" });
	var ic_view_module = exports.ic_view_module = _react2.default.createElement("path", { d: "M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" });
	var ic_hourglass = exports.ic_hourglass = _react2.default.createElement("path", { d: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z" });

/***/ }),
/* 221 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 222 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjJmN2RkZWQzYWJmYjE2N2I3ZjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwid2VicGFjazovLy8uL34vci1yZXBvcnRhbC1iYXNlL3NyYy9yZXBvcnRhbC1iYXNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9NREljb24vZGlzdC9NREljb24uYnVuZGxlLmpzIiwid2VicGFjazovLy8uL34vUHJvcG9ydGlvbmFsSW1hZ2UvZGlzdC9Qcm9wb3J0aW9uYWxJbWFnZS5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FwcGx5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VGbGF0dGVuLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUhhc0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc01hdGNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5RGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWF0Y2hEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNGbGF0dGVuYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJSZXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zaG9ydE91dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaGFzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9tZW1vaXplLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC90b1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC91bmlvbkJ5LmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3QtZGF0YXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LXNldHVwLmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RTQWJzdHJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlR3JpZFRpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlR3JpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RWaWRlby9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWFjdFZpZGVvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TaW5nbGVWaWV3L05hdkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2luZ2xlVmlldy9SZXNwb25zZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmdsZVZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbImxhdW5jaFZpZGVvSGl0bGlzdCIsImNvbmZpZ05hbWUiLCJ0aHVtYnNQbGFjZWhvbGRlciIsIkVycm9yIiwiVHlwZUVycm9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXBvcnRhbCIsIm1peGluIiwic3RvcmUiLCJyZXF1aXJlIiwidWlkIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJnbG9iYWwiLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwiZnJlZUdsb2JhbCIsImZyZWVTZWxmIiwiT2JqZWN0Iiwicm9vdCIsImlzQXJyYXkiLCJBcnJheSIsImlzT2JqZWN0IiwiaXQiLCJiYXNlSXNOYXRpdmUiLCJnZXRWYWx1ZSIsImdldE5hdGl2ZSIsIm9iamVjdCIsImtleSIsInZhbHVlIiwidW5kZWZpbmVkIiwiZFAiLCJjcmVhdGVEZXNjIiwiZiIsImlzT2JqZWN0TGlrZSIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwiZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImJhc2VHZXRUYWciLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImFGdW5jdGlvbiIsImZuIiwidGhhdCIsImxlbmd0aCIsImIiLCJjIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYXNPd25Qcm9wZXJ0eSIsImFuT2JqZWN0IiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIk8iLCJQIiwiQXR0cmlidXRlcyIsImUiLCJsaXN0Q2FjaGVDbGVhciIsImxpc3RDYWNoZURlbGV0ZSIsImxpc3RDYWNoZUdldCIsImxpc3RDYWNoZUhhcyIsImxpc3RDYWNoZVNldCIsIkxpc3RDYWNoZSIsImVudHJpZXMiLCJpbmRleCIsImNsZWFyIiwiZW50cnkiLCJzZXQiLCJwcm90b3R5cGUiLCJoYXMiLCJlcSIsImFzc29jSW5kZXhPZiIsImFycmF5IiwiaXNLZXlhYmxlIiwiZ2V0TWFwRGF0YSIsIm1hcCIsImRhdGEiLCJfX2RhdGFfXyIsIm5hdGl2ZUNyZWF0ZSIsImlzU3ltYm9sIiwiSU5GSU5JVFkiLCJ0b0tleSIsInJlc3VsdCIsIlJlcG9ydGFsQmFzZSIsInRhcmdldCIsInNvdXJjZSIsImkiLCJsZXZlbCIsImFyZ3MiLCJjb25zb2xlIiwiX2xvZ2dlciIsImV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJzdHIiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwiVVJMIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ubG9hZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2VuZCIsInZhcmlhYmxlIiwicXVlcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsInZhcnMiLCJzcGxpdCIsInBhaXIiLCJ0b0xvd2VyQ2FzZSIsIm8iLCJwYXRoIiwib3JpZ2luIiwicGF0aG5hbWUiLCJmb3JFYWNoIiwiYVBhaXIiLCJwdXNoIiwiam9pbiIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJpcyIsImNyZWF0ZUVsZW1lbnQiLCJkZWYiLCJUQUciLCJ0YWciLCJzdGF0IiwiY29uZmlndXJhYmxlIiwic2hhcmVkIiwiY2VpbCIsImZsb29yIiwiSU9iamVjdCIsImRlZmluZWQiLCJNYXAiLCJtYXBDYWNoZUNsZWFyIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsInJlSXNEZWVwUHJvcCIsInJlSXNQbGFpblByb3AiLCJpc0tleSIsInR5cGUiLCJ0ZXN0Iiwic2V0VG9BcnJheSIsInNpemUiLCJpZGVudGl0eSIsImJhc2VJc0FyZ3VtZW50cyIsIm9iamVjdFByb3RvIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJpc0FyZ3VtZW50cyIsIk1BWF9TQUZFX0lOVEVHRVIiLCJpc0xlbmd0aCIsInN5bWJvbFRhZyIsIlByb21pc2UiLCJjb2YiLCJBUkciLCJ0cnlHZXQiLCJUIiwiQiIsImNhbGxlZSIsImN0eCIsImhpZGUiLCJQUk9UT1RZUEUiLCIkZXhwb3J0IiwiSVNfRk9SQ0VEIiwiRiIsIklTX0dMT0JBTCIsIkciLCJJU19TVEFUSUMiLCJTIiwiSVNfUFJPVE8iLCJJU19CSU5EIiwiSVNfV1JBUCIsIlciLCJleHBQcm90byIsIm93biIsIm91dCIsIkMiLCJ2aXJ0dWFsIiwiUiIsIlUiLCJleGVjIiwiZG9jdW1lbnRFbGVtZW50IiwiTElCUkFSWSIsInJlZGVmaW5lIiwiSXRlcmF0b3JzIiwiJGl0ZXJDcmVhdGUiLCJzZXRUb1N0cmluZ1RhZyIsImdldFByb3RvdHlwZU9mIiwiSVRFUkFUT1IiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiQmFzZSIsIk5BTUUiLCJDb25zdHJ1Y3RvciIsIm5leHQiLCJERUZBVUxUIiwiSVNfU0VUIiwiRk9SQ0VEIiwiZ2V0TWV0aG9kIiwia2luZCIsInByb3RvIiwidmFsdWVzIiwiREVGX1ZBTFVFUyIsIlZBTFVFU19CVUciLCIkbmF0aXZlIiwiJGRlZmF1bHQiLCIkZW50cmllcyIsIiRhbnlOYXRpdmUiLCJtZXRob2RzIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJQcm9taXNlQ2FwYWJpbGl0eSIsInByb21pc2UiLCIkJHJlc29sdmUiLCIkJHJlamVjdCIsImJpdG1hcCIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsIlNIQVJFRCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJwcm9jZXNzIiwic2V0VGFzayIsInNldEltbWVkaWF0ZSIsImNsZWFyVGFzayIsImNsZWFySW1tZWRpYXRlIiwiTWVzc2FnZUNoYW5uZWwiLCJEaXNwYXRjaCIsImNvdW50ZXIiLCJxdWV1ZSIsIk9OUkVBRFlTVEFURUNIQU5HRSIsImRlZmVyIiwiY2hhbm5lbCIsInBvcnQiLCJydW4iLCJpZCIsImxpc3RlbmVyIiwibmV4dFRpY2siLCJub3ciLCJwb3J0MiIsInBvcnQxIiwib25tZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsInNldFRpbWVvdXQiLCJ0b0ludGVnZXIiLCJtaW4iLCJweCIsInJhbmRvbSIsImNvbmNhdCIsIlNldCIsInNldENhY2hlQWRkIiwic2V0Q2FjaGVIYXMiLCJTZXRDYWNoZSIsImFkZCIsInN0YWNrQ2xlYXIiLCJzdGFja0RlbGV0ZSIsInN0YWNrR2V0Iiwic3RhY2tIYXMiLCJzdGFja1NldCIsIlN0YWNrIiwiYXJyYXlQdXNoIiwib2Zmc2V0IiwiY2FzdFBhdGgiLCJiYXNlR2V0IiwiYmFzZUlzRXF1YWxEZWVwIiwiYmFzZUlzRXF1YWwiLCJvdGhlciIsImJpdG1hc2siLCJjdXN0b21pemVyIiwic3RhY2siLCJjYWNoZUhhcyIsImNhY2hlIiwic3RyaW5nVG9QYXRoIiwiYXJyYXlTb21lIiwiQ09NUEFSRV9QQVJUSUFMX0ZMQUciLCJDT01QQVJFX1VOT1JERVJFRF9GTEFHIiwiZXF1YWxBcnJheXMiLCJlcXVhbEZ1bmMiLCJpc1BhcnRpYWwiLCJhcnJMZW5ndGgiLCJvdGhMZW5ndGgiLCJzdGFja2VkIiwic2VlbiIsImFyclZhbHVlIiwib3RoVmFsdWUiLCJjb21wYXJlZCIsIm90aEluZGV4IiwicmVJc1VpbnQiLCJpc0luZGV4IiwiaXNTdHJpY3RDb21wYXJhYmxlIiwibWF0Y2hlc1N0cmljdENvbXBhcmFibGUiLCJzcmNWYWx1ZSIsImZ1bmNQcm90byIsImZ1bmNUb1N0cmluZyIsInRvU291cmNlIiwiZnVuYyIsImlzRnVuY3Rpb24iLCJpc0FycmF5TGlrZSIsInN0dWJGYWxzZSIsImZyZWVFeHBvcnRzIiwibm9kZVR5cGUiLCJmcmVlTW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsIkJ1ZmZlciIsIm5hdGl2ZUlzQnVmZmVyIiwiaXNCdWZmZXIiLCJhc3luY1RhZyIsImZ1bmNUYWciLCJnZW5UYWciLCJwcm94eVRhZyIsImJhc2VJc1R5cGVkQXJyYXkiLCJiYXNlVW5hcnkiLCJub2RlVXRpbCIsIm5vZGVJc1R5cGVkQXJyYXkiLCJpc1R5cGVkQXJyYXkiLCJhcnJheUxpa2VLZXlzIiwiYmFzZUtleXMiLCJ0IiwiciIsInJlYWN0IiwibiIsImxvYWRlZCIsIm0iLCJwIiwiZGVmYXVsdCIsIk1ESWNvbiIsIl9fZXNNb2R1bGUiLCJSZWZlcmVuY2VFcnJvciIsInUiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwibCIsInByb3BzIiwiZmlsbCIsImljb24iLCJsb2ciLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJzIiwiYXNzaWduIiwiX2ltYWdlT25sb2FkIiwiYmluZCIsIl9pbWFnZU9uZXJyb3IiLCJzdGF0ZSIsInNyYyIsInBsYWNlaG9sZGVySGlkZGVuIiwicGxhY2Vob2xkZXIiLCJzaXppbmciLCJwb3NpdGlvbiIsInByb3BvcnRpb24iLCJsb2FkaW5nIiwiZXJyb3IiLCJfbG9hZCIsIl9jb21wdXRlRGltZW5zaW9ucyIsIl9jb21wdXRlUHJvcG9ydGlvbiIsImFzcGVjdCIsInNldFN0YXRlIiwiaW5kZXhPZiIsImQiLCJwcmVsb2FkIiwiZmFkZSIsImgiLCJwbGFjZWhvbGRlclNpemluZyIsImciLCJhbHQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJyb2xlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiZGlzcGxheSIsIm9uTG9hZCIsIm9uRXJyb3IiLCJfcmVzZXQiLCJwcmV2ZW50TG9hZCIsIkNvbXBvbmVudCIsImZvcmJpZGRlbkZpZWxkIiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiaXRlcmFibGUiLCJpdGVyRm4iLCJzdGVwIiwiaXRlcmF0b3IiLCJkb25lIiwidW4iLCJBcnJheVByb3RvIiwicmV0IiwiZGVzY3JpcHRvciIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIml0ZXIiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwidGhlbiIsInRhc2siLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50IiwiY29udGVudFdpbmRvdyIsIndyaXRlIiwiY2xvc2UiLCJQcm9wZXJ0aWVzIiwiZ2V0S2V5cyIsImRlZmluZVByb3BlcnRpZXMiLCJ0b09iamVjdCIsIk9iamVjdFByb3RvIiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCIka2V5cyIsInYiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIngiLCJwcm9taXNlQ2FwYWJpbGl0eSIsIkRFU0NSSVBUT1JTIiwiU1BFQ0lFUyIsIktFWSIsIkQiLCJUT19TVFJJTkciLCJwb3MiLCJTdHJpbmciLCJjaGFyQ29kZUF0IiwiY2hhckF0IiwibWF4IiwidmFsIiwidmFsdWVPZiIsImNsYXNzb2YiLCJnZXRJdGVyYXRvck1ldGhvZCIsImFkZFRvVW5zY29wYWJsZXMiLCJpdGVyYXRlZCIsIl90IiwiX2kiLCJfayIsIkFyZ3VtZW50cyIsImFuSW5zdGFuY2UiLCJmb3JPZiIsInNwZWNpZXNDb25zdHJ1Y3RvciIsIm1pY3JvdGFzayIsIm5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlIiwicGVyZm9ybSIsInByb21pc2VSZXNvbHZlIiwiUFJPTUlTRSIsIiRQcm9taXNlIiwiZW1wdHkiLCJJbnRlcm5hbCIsIm5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSIsIk93blByb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJGYWtlUHJvbWlzZSIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsImlzVGhlbmFibGUiLCJpc1JlamVjdCIsIl9uIiwiY2hhaW4iLCJfYyIsIl92Iiwib2siLCJfcyIsInJlYWN0aW9uIiwiaGFuZGxlciIsImZhaWwiLCJfaCIsIm9uSGFuZGxlVW5oYW5kbGVkIiwib25VbmhhbmRsZWQiLCJ1bmhhbmRsZWQiLCJpc1VuaGFuZGxlZCIsImVtaXQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsInJlYXNvbiIsIl9hIiwib25yZWplY3Rpb25oYW5kbGVkIiwiJHJlamVjdCIsIl9kIiwiX3ciLCIkcmVzb2x2ZSIsIndyYXBwZXIiLCJleGVjdXRvciIsImVyciIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsImNhcGFiaWxpdHkiLCJhbGwiLCJyZW1haW5pbmciLCIkaW5kZXgiLCJhbHJlYWR5Q2FsbGVkIiwicmFjZSIsIiRhdCIsInBvaW50IiwiVE9fU1RSSU5HX1RBRyIsIkRPTUl0ZXJhYmxlcyIsIkNvbGxlY3Rpb24iLCJEYXRhVmlldyIsImhhc2hDbGVhciIsImhhc2hEZWxldGUiLCJoYXNoR2V0IiwiaGFzaEhhcyIsImhhc2hTZXQiLCJIYXNoIiwiVWludDhBcnJheSIsIldlYWtNYXAiLCJ0aGlzQXJnIiwiYXJyYXlGaWx0ZXIiLCJwcmVkaWNhdGUiLCJyZXNJbmRleCIsImJhc2VJbmRleE9mIiwiYXJyYXlJbmNsdWRlcyIsImFycmF5SW5jbHVkZXNXaXRoIiwiY29tcGFyYXRvciIsImJhc2VUaW1lcyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsImFycmF5TWFwIiwiaXRlcmF0ZWUiLCJiYXNlRmluZEluZGV4IiwiZnJvbVJpZ2h0IiwiaXNGbGF0dGVuYWJsZSIsImJhc2VGbGF0dGVuIiwiZGVwdGgiLCJpc1N0cmljdCIsImJhc2VHZXRBbGxLZXlzIiwia2V5c0Z1bmMiLCJzeW1ib2xzRnVuYyIsImJhc2VIYXNJbiIsImJhc2VJc05hTiIsInN0cmljdEluZGV4T2YiLCJhcmdzVGFnIiwiZXF1YWxCeVRhZyIsImVxdWFsT2JqZWN0cyIsImdldFRhZyIsImFycmF5VGFnIiwib2JqZWN0VGFnIiwib2JqSXNBcnIiLCJvdGhJc0FyciIsIm9ialRhZyIsIm90aFRhZyIsIm9iaklzT2JqIiwib3RoSXNPYmoiLCJpc1NhbWVUYWciLCJvYmpJc1dyYXBwZWQiLCJvdGhJc1dyYXBwZWQiLCJvYmpVbndyYXBwZWQiLCJvdGhVbndyYXBwZWQiLCJiYXNlSXNNYXRjaCIsIm1hdGNoRGF0YSIsIm5vQ3VzdG9taXplciIsIm9ialZhbHVlIiwiaXNNYXNrZWQiLCJyZVJlZ0V4cENoYXIiLCJyZUlzSG9zdEN0b3IiLCJyZUlzTmF0aXZlIiwiUmVnRXhwIiwicGF0dGVybiIsImJvb2xUYWciLCJkYXRlVGFnIiwiZXJyb3JUYWciLCJtYXBUYWciLCJudW1iZXJUYWciLCJyZWdleHBUYWciLCJzZXRUYWciLCJzdHJpbmdUYWciLCJ3ZWFrTWFwVGFnIiwiYXJyYXlCdWZmZXJUYWciLCJkYXRhVmlld1RhZyIsImZsb2F0MzJUYWciLCJmbG9hdDY0VGFnIiwiaW50OFRhZyIsImludDE2VGFnIiwiaW50MzJUYWciLCJ1aW50OFRhZyIsInVpbnQ4Q2xhbXBlZFRhZyIsInVpbnQxNlRhZyIsInVpbnQzMlRhZyIsInR5cGVkQXJyYXlUYWdzIiwiYmFzZU1hdGNoZXMiLCJiYXNlTWF0Y2hlc1Byb3BlcnR5IiwicHJvcGVydHkiLCJiYXNlSXRlcmF0ZWUiLCJpc1Byb3RvdHlwZSIsIm5hdGl2ZUtleXMiLCJnZXRNYXRjaERhdGEiLCJoYXNJbiIsImJhc2VQcm9wZXJ0eSIsImJhc2VQcm9wZXJ0eURlZXAiLCJvdmVyUmVzdCIsInNldFRvU3RyaW5nIiwiYmFzZVJlc3QiLCJzdGFydCIsImNvbnN0YW50IiwiYmFzZVNldFRvU3RyaW5nIiwic3RyaW5nIiwic3ltYm9sUHJvdG8iLCJzeW1ib2xUb1N0cmluZyIsImJhc2VUb1N0cmluZyIsImNyZWF0ZVNldCIsIkxBUkdFX0FSUkFZX1NJWkUiLCJiYXNlVW5pcSIsImluY2x1ZGVzIiwiaXNDb21tb24iLCJvdXRlciIsImNvbXB1dGVkIiwic2VlbkluZGV4IiwiY29yZUpzRGF0YSIsIm5vb3AiLCJtYXBUb0FycmF5Iiwic3ltYm9sVmFsdWVPZiIsImJ5dGVMZW5ndGgiLCJieXRlT2Zmc2V0IiwiYnVmZmVyIiwibWVzc2FnZSIsImNvbnZlcnQiLCJnZXRBbGxLZXlzIiwib2JqUHJvcHMiLCJvYmpMZW5ndGgiLCJvdGhQcm9wcyIsInNraXBDdG9yIiwib2JqQ3RvciIsIm90aEN0b3IiLCJnZXRTeW1ib2xzIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJpc093biIsInVubWFza2VkIiwic3R1YkFycmF5IiwibmF0aXZlR2V0U3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbCIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJBcnJheUJ1ZmZlciIsIkN0b3IiLCJjdG9yU3RyaW5nIiwiaGFzUGF0aCIsImhhc0Z1bmMiLCJIQVNIX1VOREVGSU5FRCIsInNwcmVhZGFibGVTeW1ib2wiLCJpc0NvbmNhdFNwcmVhZGFibGUiLCJtYXNrU3JjS2V5IiwiYXJyYXlQcm90byIsInNwbGljZSIsImxhc3RJbmRleCIsInBvcCIsIm1lbW9pemUiLCJNQVhfTUVNT0laRV9TSVpFIiwibWVtb2l6ZUNhcHBlZCIsIm92ZXJBcmciLCJmcmVlUHJvY2VzcyIsImJpbmRpbmciLCJ0cmFuc2Zvcm0iLCJhcmciLCJuYXRpdmVNYXgiLCJvdGhlckFyZ3MiLCJzaG9ydE91dCIsIkhPVF9DT1VOVCIsIkhPVF9TUEFOIiwibmF0aXZlTm93IiwiRGF0ZSIsImNvdW50IiwibGFzdENhbGxlZCIsInN0YW1wIiwicGFpcnMiLCJyZUxlYWRpbmdEb3QiLCJyZVByb3BOYW1lIiwicmVFc2NhcGVDaGFyIiwibWF0Y2giLCJudW1iZXIiLCJxdW90ZSIsImRlZmF1bHRWYWx1ZSIsImlzQXJyYXlMaWtlT2JqZWN0IiwiRlVOQ19FUlJPUl9URVhUIiwicmVzb2x2ZXIiLCJtZW1vaXplZCIsIkNhY2hlIiwidW5pb25CeSIsImFycmF5cyIsIkhpdGxpc3REYXRhc291cmNlIiwib3B0aW9ucyIsIl9zZWFyY2hWYWx1ZXMiLCJtb2RpZmllciIsInJlcXVlc3RSZXNwb25zZSIsImluaXRpYWxMb2FkIiwiX3NraXBQYWdlIiwiaXNQYWdpbmciLCJsb2NhdGlvbkRlc2VyaWFsaXplIiwicmVwb3J0aWQiLCJoaXRsaXN0SUQiLCJwYXJhbXMiLCJQYWdlSWQiLCJwYWdlSUQiLCJwYWdlU3RhdGVJZCIsInBhZ2VTdGF0ZUlEIiwiUHJldmlldyIsInByZXZpZXciLCJhdHRybmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzb3J0aW5nUGFnaW5nVmFsdWVzIiwicGFnaW5nVmFsdWVzIiwicGFnZU51bWJlciIsInBhZ2luZ0ZvcndhcmQiLCJwcm9taXNlUmVxdWVzdCIsInNlcnZpY2VVUkwiLCJzZXJpYWxpemVQYXJhbXMiLCJwYXJzZVJlc3BvbnNlIiwicmVzcG9uc2UiLCJwYXJzZSIsInBhZ2VJbmZvIiwiX3NwdiIsInB2Iiwic3RhcnRJZCIsImxhc3RTdGFydElkIiwiZmlyc3RTdGFydElkIiwic3RhcnRWYWx1ZSIsImxhc3RTdGFydFZhbHVlIiwiZmlyc3RTdGFydFZhbHVlIiwiSGl0bGlzdFNldHVwIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsIl9jb25maWciLCJnZXRPcmlnaW5hbENvbmZpZyIsIl9lbGVtZW50VHlwZSIsIkhpdExpc3RFbGVtZW50VHlwZSIsIl9vcCIsIlNlYXJjaGFibGVMaXN0T3BlcmF0b3IiLCJjYXB0aW9ucyIsInNpbmdsZVZpZXdUZXh0cyIsImhpdGxpc3REYXRhIiwiZGlzYWJsZU5leHRCdXR0b24iLCJkaXNhYmxlUHJldkJ1dHRvbiIsImNvbHVtbnMiLCJhbGxDb2x1bW5zIiwiY29tcG9uZW50SWQiLCJwYWdlSWQiLCJsYW5ndWFnZSIsInNlcnZpY2VVcmwiLCJxdWVyeVNlbGVjdG9yIiwianNvbkRhdGUiLCJZIiwiTGFuZyIsImNvbnN0ciIsImV2YWwiLCJzY3JpcHRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNmZyIsInNjcmlwdCIsInRleHQiLCJEU0Fic3RyYWN0aW9uIiwiRFMiLCJjb21wb25lbnQiLCJjb25maWciLCJzZXR1cERhdGFMaXN0ZW5lciIsIkdsb2JhbCIsIm9uIiwiaW5pdGlhbGlzZUNvbmZpZyIsImZpbHRlckluZm8iLCJpbml0aWFsRGF0YUxvYWQiLCJwcm9jZXNzRGF0YSIsImNhdGNoIiwiaGFuZGxlRGF0YUxvYWRpbmdFcnJvciIsImluZGl2aWR1YWxSZWNvcmRzIiwiaXRlbSIsInRyaW0iLCJtb2RlIiwibmV3RGF0YSIsImRhdGFSb3ciLCJyb3dJbmRleCIsInBhcnNlZFJvdyIsImlyIiwiZGF0YUZpZWxkcyIsImNvbHVtbklEIiwicHJlcGFyZURhdGEiLCJpbWFnZSIsIm1lZGlhdHlwZSIsInJlc3BvbnNlaWQiLCJzbGluayIsImxpbmsiLCJpdGVtcyIsInByZXZTdGF0ZSIsImdlbmVyYXRlTWVkaWFMaW5rIiwiZmlsZU5hbWUiLCJkc05hbWUiLCJzdXJ2ZXlJRCIsImxvYWROZXh0UGFnZSIsIm5leHRQYWdlIiwibG9hZFByZXZpb3VzUGFnZSIsInByZXZpb3VzUGFnZSIsImxvYWRNb3JlIiwiZ2V0UGFnZUluZm8iLCJoYXNQYWdlSW5mbyIsInRvdGFsSGl0cyIsIk1FRElBX1RZUEVTIiwiSW1hZ2VHcmlkVGlsZSIsImFjdGlvbkJ1dHRvbiIsImFjdGlvbkljb24iLCJhY3Rpb25JY29uQ2xpY2siLCJvblNlbGVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfY29tcHV0ZVRpbGVUeXBlIiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJpY29uU2VydmVyIiwiZXNjYXBlIiwiaWNvbnMiLCJhdWRpbyIsInZpZGVvIiwidW5rbm93biIsInByb3BUeXBlcyIsIm9uZU9mIiwiSW1hZ2VHcmlkIiwiaXRlbUNsaWNrSGFuZGxlciIsImVkaXRJdGVtIiwiZHVtbXlJdGVtcyIsInJlbmRlckR1bW15SXRlbXMiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsIk5hdmlnYXRpb24iLCJwYWdpbmF0aW9uIiwiY29udGludW91c05hdmlnYXRpb24iLCJwYWdpbmdOYXZpZ2F0aW9uIiwidGV4dEFsaWduIiwidHJhbnNsYXRlIiwiUmVhY3RWaWRlbyIsInNpbmdsZVZpZXdNb2RlIiwic2luZ2xlVmlldyIsInNpbmdsZVZpZXdWaXNpYmxlIiwic2luZ2xlVmlld0Rpc2FibGVQcmV2Iiwic2luZ2xlVmlld0Rpc2FibGVOZXh0IiwiaTE4biIsInJldHVyblRvR3JpZCIsImxvYWRQcmV2aW91c0l0ZW0iLCJuYXZpZ2F0ZUl0ZW1zIiwibG9hZE5leHRJdGVtIiwiZ2V0U2luZ2xlVmlld05hdlN0YXRlIiwicmVuZGVyU2luZ2xlVmlldyIsImNhbkVkaXQiLCJyZW5kZXJOYXZpZ2F0aW9uIiwiZGF0YUxvYWRpbmdNZXNzYWdlIiwibmF2aWdhdGlvblByb3BzIiwiaW5kaXZpZHVhbFJlY29yZHNRdWVzdGlvbklkcyIsImluZGl2aWR1YWxSZWNvcmRzS2V5TGFiZWxzIiwicmV2ZXJzZSIsImZpbHRlciIsInJlY29yZCIsImxhYmVsIiwiaXJJZHMiLCJjb2x1bW4iLCJkaXJlY3Rpb24iLCJwYWdpbmF0aW9uVHlwZSIsIml0ZW1zTGVuZ3RoIiwiY3VycmVudFNpbmdsZVZpZXdJdGVtSW5kZXgiLCJuZXh0SW5kZXgiLCJsb2FkSXRlbUZyb21QcmV2aW91c1BhZ2UiLCJsb2FkSXRlbUZyb21OZXh0UGFnZSIsInByb21pc2VkSXRlbXMiLCJzaW5nbGVWaWV3RGF0YSIsIm5ld0l0ZW1zIiwiYXREYXRhTGVmdEJvdW5kYXJ5Q2FuTG9hZCIsImF0RGF0YVJpZ2h0Qm91bmRhcnlDYW5Mb2FkIiwiY3VycmVudEl0ZW1JbmRleCIsImdldExhYmVsc0Zvck1haW5GaWVsZHMiLCJnZXRMYWJlbHNGb3JJbmRpdmlkdWFsUmVjb3JkcyIsIk5hdkJ1dHRvbiIsIlJlc3BvbnNlcyIsImNvbHVtbnNNYXAiLCJtZWRpYSIsInJlc3BvbnNlRGF0ZSIsImludGVydmlld19zdGFydCIsImludGVydmlld19lbmQiLCJtZWRpYUl0ZW0iLCJxSUQiLCJOYXZCYXIiLCJyZXR1cm5Ub0dyaWRBY3Rpb24iLCJTaW5nbGVWaWV3IiwibmF2QmFyUHJvcHMiLCJpY19zdGFyIiwiaWNfc3Rhcl9ib3JkZXIiLCJpY19hcnJvd19iYWNrIiwiaWNfYXJyb3dfZm9yd2FyZCIsImljX3ZpZXdfbW9kdWxlIiwiaWNfaG91cmdsYXNzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OytRQ3RDQTs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLQSxLQUFNQSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxVQUFELEVBQXVDO0FBQUEsT0FBM0JDLGlCQUEyQix1RUFBVCxJQUFTOztBQUNoRSxPQUFHLENBQUNELFVBQUosRUFBZTtBQUNiLFdB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Ozs7OzttQkFUa0I2eUIsVTs7Ozs7Ozs7Ozs7Ozs7QUNwQnJCOzs7Ozs7QUFFTyxLQUFNRSw0QkFBVSx3Q0FBTSxHQUFFLDBGQUFSLEdBQWhCO0FBQ0EsS0FBTUMsMENBQWlCLHdDQUFNLEdBQUUsa01BQVIsR0FBdkI7QUFDQSxLQUFNQyx3Q0FBZ0Isd0NBQU0sR0FBRSw4REFBUixHQUF0QjtBQUNBLEtBQU1DLDhDQUFtQix3Q0FBTSxHQUFFLDJEQUFSLEdBQXpCO0FBQ0EsS0FBTUMsMENBQWlCLHdDQUFNLEdBQUUseUZBQVIsR0FBdkI7QUFDQSxLQUFNQyxzQ0FBZSx3Q0FBTSxHQUFFLDZJQUFSLEdBQXJCLEM7Ozs7OztBQ1BQLDBDOzs7Ozs7QUNBQSwyQiIsImZpbGUiOiJyLXJlYWN0LXZpZGVvLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYyZjdkZGVkM2FiZmIxNjdiN2Y4IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTEuMDEuMjAxNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IG1haW5DU1MgZnJvbSAnLi9tYWluLmNzcyc7XHJcbmltcG9ydCBSZWFjdFZpZGVvIGZyb20gJy4vUmVhY3RWaWRlbyc7XHJcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSAnci1yZXBvcnRhbC1iYXNlJztcclxuXHJcbi8qKlxyXG4gKiBpbml0aWFsaXNlIEhpdExpc3Qgb24gRE9NQ29udGVudExvYWRlZCBmb3IgYSBxdWlja2VyIGNvbGQtc3RhcnQsIG5vIG5lZWQgdG8gd2FpdCBmb3IgdGhlIG9yaWdpbmFsIEhpdExpc3RcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZ05hbWUgLSBuYW1lIG9mIHRoZSB2YXJpYWJsZSBwYXNzZWQgdG8gRE9NIGFzIGEgY29uZmlnXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3RodW1ic1BsYWNlaG9sZGVyPXRydWVdIC0gZGlzcGxheSB0aHVtYnMgYXMgaW1hZ2UgcGxhY2Vob2xkZXJzIGluc3RlYWQgb2YgbWVkaWEgaWNvbnNcclxuICogKi9cclxuY29uc3QgbGF1bmNoVmlkZW9IaXRsaXN0ID0gKGNvbmZpZ05hbWUsdGh1bWJzUGxhY2Vob2xkZXI9dHJ1ZSkgPT4ge1xyXG4gIGlmKCFjb25maWdOYW1lKXtcclxuICAgIHRocm93IG5ldyBFcnJvcignY29uZmlnIGlzIG5vdCBzcGVjaWZpZWQhJylcclxuICB9IGVsc2UgaWYoY29uZmlnTmFtZSAmJiB0eXBlb2YgY29uZmlnTmFtZSAhPSAnc3RyaW5nJyl7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBjb25maWcgbmFtZSBtdXN0IGJlIGEgc3RyaW5nLCBub3QgYSAke3R5cGVvZiBjb25maWdOYW1lfWApXHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcclxuICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgPFJlYWN0VmlkZW9cclxuICAgICAgY29uZmlnPXtjb25maWdOYW1lfVxyXG4gICAgICB0aHVtYnNQbGFjZWhvbGRlcj17dGh1bWJzUGxhY2Vob2xkZXJ9XHJcbiAgICAgIHZlcmJvc2VcclxuICAgICAgLz4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcclxuICB9KTtcclxufTtcclxuXHJcbndpbmRvdy5SZXBvcnRhbCA9IHdpbmRvdy5SZXBvcnRhbCB8fCB7fTtcclxuUmVwb3J0YWxCYXNlLm1peGluKHdpbmRvdy5SZXBvcnRhbCx7XHJcbiAgbGF1bmNoVmlkZW9IaXRsaXN0XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19yb290LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4xJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TeW1ib2wuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwiaW1wb3J0IFByb21pc2UgZnJvbSAnY29yZS1qcy9saWJyYXJ5L2VzNi9wcm9taXNlJztcblxuY2xhc3MgUmVwb3J0YWxCYXNlIHtcblxuICAvKipcbiAgICogQ29waWVzIHByb3BzIGZyb20gYSBzb3VyY2Ugb2JqZWN0IHRvIGEgdGFyZ2V0IG9iamVjdC5cbiAgICpcbiAgICogTm90ZSwgdGhpcyBtZXRob2QgdXNlcyBhIHNpbXBsZSBgZm9yLi4uaW5gIHN0cmF0ZWd5IGZvciBlbnVtZXJhdGluZ1xuICAgKiBwcm9wZXJ0aWVzLiAgVG8gZW5zdXJlIG9ubHkgYG93blByb3BlcnRpZXNgIGFyZSBjb3BpZWQgZnJvbSBzb3VyY2VcbiAgICogdG8gdGFyZ2V0IGFuZCB0aGF0IGFjY2Vzc29yIGltcGxlbWVudGF0aW9ucyBhcmUgY29waWVkLCB1c2UgYGV4dGVuZGAuXG4gICAqXG4gICAqIEBtZXRob2QgbWl4aW5cbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBUYXJnZXQgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBTb3VyY2Ugb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRhcmdldCBvYmplY3QgdGhhdCB3YXMgcGFzc2VkIGFzIGZpcnN0IGFyZ3VtZW50LlxuICAgKi9cbiAgc3RhdGljIG1peGluKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yICh2YXIgaSBpbiBzb3VyY2UpIHtcbiAgICAgIHRhcmdldFtpXSA9IHNvdXJjZVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHN0YXRpYyBfbG9nZ2VyKGxldmVsLCBhcmdzKSB7XG4gICAgLy8gYWNjZXB0IFsnZm9vJywgJ2JhciddIGFuZCBbWydmb28nLCAnYmFyJ11dXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgIH1cbiAgICAvLyBvbmx5IGFjY2VwdCBsb2dnaW5nIGZ1bmN0aW9uc1xuICAgIHN3aXRjaChsZXZlbCkge1xuICAgICAgY2FzZSAnbG9nJzpcbiAgICAgIGNhc2UgJ3dhcm4nOlxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICBjb25zb2xlW2xldmVsXS5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIF9sb2coKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHRoaXMuX2xvZ2dlcignbG9nJywgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgX3dhcm4oKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHRoaXMuX2xvZ2dlcignd2FybicsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIF9lcnJvcigpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgdGhpcy5fbG9nZ2VyKCdlcnJvcicsIGFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuYW1lZCBldmVudCB3aXRoIGBuYW1lYFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEByZXR1cm4ge0V2ZW50fSBSZXR1cm5zIGEgY3JlYXRlZCBldmVudFxuICAgKiAqL1xuICBzdGF0aWMgbmV3RXZlbnQobmFtZSl7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNwZWN0cyBpZiB0aGUgY3VycmVudCBzdHJpbmcgbWlnaHQgYmUgY29udmVydGVkIHRvIG51bWJlciBhbmQgcmVuZGVycyBpdCBhcyBudW1iZXIuIElmIHN0cmluZyBsZW5ndGggaXMgMCwgcmV0dXJucyBgbnVsbGAuIElmIG5vbmUgYXBwbGllcyByZXR1cm5zIHRoZSBzdHJpbmcgYXMgaXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSB2YWx1ZSBvZiB0aGUgY2VsbCBpZiBub3QgSFRNTCBjb250ZW50c1xuICAgKiBAcmV0dXJuIHtOdW1iZXJ8bnVsbHxTdHJpbmd9XG4gICAqICovXG4gIHN0YXRpYyBpc051bWJlcihzdHIpe1xuICAgIGlmKCFpc05hTihwYXJzZUZsb2F0KHN0cikpKXtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8sL2ksJycpOy8vIHJlbW92ZSB1bm5lY2Vzc2FyeSBjb21tYSBhcyBhIGRlbGltaXRlciBmb3IgdGhvdXNhbmRzIGZyb20gZGF0YS5cbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cik7XG4gICAgfSBlbHNlIGlmKHN0ci5sZW5ndGg9PTApe3JldHVybiBudWxsfSBlbHNlIHtyZXR1cm4gc3RyfVxuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBYSFIgd3JhcHBlZCBpbiBhIFByb21pc2VcbiAgICogQHBhcmFtIHshU3RyaW5nfSBVUkwgLSB1cmwgdG8gc2VuZCBhIGBHRVRgIHJlcXVlc3QgdG9cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmV0dXJucyBhIHRoZW4tYWJsZSBwcm9taXNlIHdpdGggYFhNTEh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dGBcbiAgICogKi9cbiAgc3RhdGljIHByb21pc2VSZXF1ZXN0KFVSTCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKCdHRVQnLCBVUkwsIHRydWUpO1xuICAgICAgeGhyLm9ubG9hZCA9ICgpPT57eGhyLnN0YXR1cyA9PSAyMDA/cmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0KTpyZWplY3QoRXJyb3IoYCR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9YCkpO31cbiAgICAgIHhoci5vbmVycm9yID0gKCk9PntyZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTt9XG4gICAgICB4aHIuc2VuZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSB2YXJpYWJsZSBsaXN0ZWQgaW4gcXVlcnkgc3RyaW5nXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gdmFyaWFibGUgLSB2YXJpYWJsZSBuYW1lIHRvIGdldCB2YWx1ZSBmb3JcbiAgICogQHBhcmFtIHtTdHJpbmc9fSBbcXVlcnk9d2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSldIC0gdGhlIHF1ZXJ5IHN0cmluZyB0byBzZWFyY2ggdmFyaWFibGUgZm9yIGluXG4gICAqIEByZXR1cm4ge1N0cmluZ30gUmV0dXJucyB2YWx1ZSBmb3IgdGhlIHZhcmlhYmxlXG4gICAqICovXG4gIHN0YXRpYyBnZXRRdWVyeVZhcmlhYmxlKHZhcmlhYmxlLHF1ZXJ5PXdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKXtcbiAgICB2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KFwiJlwiKTtcbiAgICBmb3IgKHZhciBpPTA7aTx2YXJzLmxlbmd0aDtpKyspIHtcbiAgICAgIHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICBpZigocGFpclswXSkudG9Mb3dlckNhc2UoKSA9PSB2YXJpYWJsZS50b0xvd2VyQ2FzZSgpKXtyZXR1cm4gcGFpclsxXTt9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIFxuICAvKipcbiAgICogdHVybnMgYHdpbmRvdy5sb2NhdGlvbmAgb2JqZWN0IGludG8gYW4gb2JqZWN0IHdpdGggcGFyYW1zIGFzIG5hbWVkIGtleXMgbmVjZXNzYXJ5IHRvIHJlY29uc3RydWN0IHRoZSBVUkxcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBbbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb25dIC0gYSB3aW5kb3cubG9jYXRpb24gb2JqZWN0LCBieSBkZWZhdWx0IG9mIHRoZSBob3N0IHdpbmRvdyB3aGVyZSB0aGUgc2NyaXB0IGlzIGV4ZWN1dGVkXG4gICAqIEByZXR1cm5zIHt7cGF0aDpTdHJpbmcsIHF1ZXJ5Ok9iamVjdH19IGEgYGxvY2F0aW9uYCBvYmplY3RcbiAgICogKi9cbiAgc3RhdGljIGxvY2F0aW9uRGVzZXJpYWxpemUobG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24pe1xuICAgIGxldCBvID0ge1xuICAgICAgcGF0aDogbG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBxdWVyeTp7fVxuICAgIH07XG4gICAgbG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKS5zcGxpdCgvJi8pLmZvckVhY2gocGFpcj0+e1xuICAgICAgbGV0IGFQYWlyPSBwYWlyLnNwbGl0KC89Lyk7XG4gICAgICBvLnF1ZXJ5W2FQYWlyWzBdLnRvTG93ZXJDYXNlKCldID0gYVBhaXJbMV1cbiAgICB9KTtcbiAgICByZXR1cm4gb1xuICB9XG5cbiAgLyoqXG4gICAqIFR1cm5zIGEgYGxvY2F0aW9uYCBvYmplY3QgKHJlc3VsdCBvZiBgbG9jYXRpb25EZXNlcmlhbGl6ZWApIGludG8gYSBVUkxcbiAgICogQHBhcmFtIHt7cGF0aDpTdHJpbmcsIHF1ZXJ5Ok9iamVjdH19IGxvY2F0aW9uIC0gYW4gb2JqZWN0IHdpdGggcGFyYW1zIGFuZCBhIHVybFxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtIGEgVVJMIHN0cmluZ1xuICAgKiAqL1xuICBzdGF0aWMgbG9jYXRpb25TZXJpYWxpemUobG9jYXRpb24pe1xuICAgIGxldCBxdWVyeT1bXTtcbiAgICBmb3IobGV0IGtleSBpbiBsb2NhdGlvbi5xdWVyeSl7XG4gICAgICBxdWVyeS5wdXNoKFtrZXksbG9jYXRpb24ucXVlcnlba2V5XV0uam9pbignPScpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGggKyAnPycgKyBxdWVyeS5qb2luKCcmJyk7XG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0YWxCYXNlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItcmVwb3J0YWwtYmFzZS9zcmMvcmVwb3J0YWwtYmFzZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19NYXAuanMiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzS2V5LmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzU3ltYm9sLmpzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TZXQuanMiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ2YXIgYmFzZUlzRXF1YWxEZWVwID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Nhc3RQYXRoLmpzIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc1N0cmljdENvbXBhcmFibGUuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCBmb3Igc291cmNlIHZhbHVlcyBzdWl0YWJsZVxuICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2VxLmpzIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2tleXMuanMiLCIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtcInJlYWN0XCJdLHQpO2Vsc2V7dmFyIHI9dChcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwicmVhY3RcIik6ZS5yZWFjdCk7Zm9yKHZhciBvIGluIHIpKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbb109cltvXX19KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobyl7aWYocltvXSlyZXR1cm4gcltvXS5leHBvcnRzO3ZhciBuPXJbb109e2V4cG9ydHM6e30saWQ6byxsb2FkZWQ6ITF9O3JldHVybiBlW29dLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHQpLG4ubG9hZGVkPSEwLG4uZXhwb3J0c312YXIgcj17fTtyZXR1cm4gdC5tPWUsdC5jPXIsdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1yKDEpO3QuZGVmYXVsdD1vLk1ESWNvbixlLmV4cG9ydHM9dC5kZWZhdWx0fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gaShlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fWZ1bmN0aW9uIHUoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lk1ESWNvbj12b2lkIDA7dmFyIGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBvPXRbcl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxyLG8pe3JldHVybiByJiZlKHQucHJvdG90eXBlLHIpLG8mJmUodCxvKSx0fX0oKSxmPXIoMiksbD1vKGYpLGE9dC5NREljb249ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe3JldHVybiBuKHRoaXMsdCksaSh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfXJldHVybiB1KHQsZSksYyh0LFt7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLHQ9ZS5maWxsLHI9ZS5zaXplLG89ZS5pY29uLG49ZS5jaGlsZHJlbjtyZXR1cm4gY29uc29sZS5sb2codCxyLG8sbiksbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7eG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGZpbGw6dCx3aWR0aDpyLGhlaWdodDpyLHZpZXdCb3g6XCIwIDAgMjQgMjRcIixjaGlsZHJlbjpvfHxufSl9fV0pLHR9KGYuUHVyZUNvbXBvbmVudCk7YS5kZWZhdWx0UHJvcHM9e3NpemU6MjQsZmlsbDpcInJnYmEoMCwwLDAsLjg1KVwifX0sZnVuY3Rpb24odCxyKXt0LmV4cG9ydHM9ZX1dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TURJY29uLmJ1bmRsZS5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L01ESWNvbi9kaXN0L01ESWNvbi5idW5kbGUuanMiLCIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtcInJlYWN0XCJdLHQpO2Vsc2V7dmFyIG89dChcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwicmVhY3RcIik6ZS5yZWFjdCk7Zm9yKHZhciByIGluIG8pKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbcl09b1tyXX19KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQocil7aWYob1tyXSlyZXR1cm4gb1tyXS5leHBvcnRzO3ZhciBuPW9bcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiBlW3JdLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHQpLG4ubG9hZGVkPSEwLG4uZXhwb3J0c312YXIgbz17fTtyZXR1cm4gdC5tPWUsdC5jPW8sdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBpKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9ZnVuY3Rpb24gYShlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBvPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbylPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobyxyKSYmKGVbcl09b1tyXSl9cmV0dXJuIGV9LGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciByPXRbb107ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxvLHIpe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLHImJmUodCxyKSx0fX0oKSxwPW8oMSksdT1yKHApLGM9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXtuKHRoaXMsdCk7dmFyIG89aSh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsKHRoaXMsZSkpO3JldHVybiBvLl9pbWFnZU9ubG9hZD1vLl9pbWFnZU9ubG9hZC5iaW5kKG8pLG8uX2ltYWdlT25lcnJvcj1vLl9pbWFnZU9uZXJyb3IuYmluZChvKSxvLnN0YXRlPXtzcmM6dm9pZCAwLHBsYWNlaG9sZGVySGlkZGVuOiFvLnByb3BzLnBsYWNlaG9sZGVyLHNpemluZzpvLnByb3BzLnNpemluZz9vLnByb3BzLnNpemluZzpudWxsLHBvc2l0aW9uOm8ucHJvcHMucG9zaXRpb24/by5wcm9wcy5wb3NpdGlvbjpcImNlbnRlclwiLHByb3BvcnRpb246MCxsb2FkZWQ6ITEsbG9hZGluZzohMSxlcnJvcjohMX0sb31yZXR1cm4gYSh0LGUpLGwodCxbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkKCksdGhpcy5fY29tcHV0ZURpbWVuc2lvbnMoKSx0aGlzLl9jb21wdXRlUHJvcG9ydGlvbih0aGlzLnByb3BzLmFzcGVjdCl9fSx7a2V5OlwiX2NvbXB1dGVEaW1lbnNpb25zXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLHQ9ZS53aWR0aCxvPWUuaGVpZ2h0O3RoaXMuc2V0U3RhdGUoe3dpZHRoOmlzTmFOKHQpP3Q6dCtcInB4XCIsaGVpZ2h0OmlzTmFOKG8pP286bytcInB4XCJ9KX19LHtrZXk6XCJfY29tcHV0ZVByb3BvcnRpb25cIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlJiZlLmluZGV4T2YoXCI6XCIpPi0xKXt2YXIgdD1lLnNwbGl0KFwiOlwiKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlRmxvYXQoZSl9KTtpc05hTih0WzBdKXx8aXNOYU4odFsxXSl8fHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24oZSl7aWYoIWlzTmFOKHBhcnNlRmxvYXQoZS53aWR0aCkpKXJldHVybntwcm9wb3J0aW9uOihwYXJzZUZsb2F0KGUud2lkdGgpKih0WzFdL3RbMF0pKS50b1N0cmluZygpK2Uud2lkdGguc3Vic3RyaW5nKHBhcnNlRmxvYXQoZS53aWR0aCkudG9TdHJpbmcoKS5sZW5ndGgpLGhlaWdodDpcImF1dG9cIn19KX19fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnN0YXRlLHQ9ZS53aWR0aCxvPWUuaGVpZ2h0LHI9ZS5wcm9wb3J0aW9uLG49ZS5zcmMsaT1lLnNpemluZyxhPWUucG9zaXRpb24scz1lLmxvYWRpbmcsbD1lLmxvYWRlZCxwPWUucGxhY2Vob2xkZXJIaWRkZW4sYz10aGlzLnByb3BzLGQ9Yy5wcmVsb2FkLGY9Yy5mYWRlLGg9Yy5wbGFjZWhvbGRlclNpemluZyxnPWMucGxhY2Vob2xkZXIsbT1jLmFsdDtyZXR1cm4gdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiUHJvcG9ydGlvbmFsSW1hZ2VcIixzdHlsZTp7d2lkdGg6dCxoZWlnaHQ6byxwYWRkaW5nVG9wOnJ9fSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJzaXplZEltZ0RpdlwiLHJvbGU6XCJpbWdcIixzdHlsZTp7YmFja2dyb3VuZEltYWdlOm4/XCJ1cmwoXCIrbitcIilcIjp2b2lkIDAsYmFja2dyb3VuZFNpemU6aSxiYWNrZ3JvdW5kUG9zaXRpb246YSxiYWNrZ3JvdW5kUmVwZWF0Omk/XCJuby1yZXBlYXRcIjpcImluaXRpYWxcIixkaXNwbGF5Omk/XCJibG9ja1wiOlwibm9uZVwifX0pLHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3NyYzpuLGFsdDptLG9uTG9hZDp0aGlzLl9pbWFnZU9ubG9hZCxvbkVycm9yOnRoaXMuX2ltYWdlT25lcnJvcixzdHlsZTp7ZGlzcGxheTppP1wibm9uZVwiOlwiYmxvY2tcIn19KSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp7YmFja2dyb3VuZEltYWdlOmc/XCJ1cmwoXCIrZytcIilcIjp2b2lkIDAsYmFja2dyb3VuZFNpemU6aD9oOmksYmFja2dyb3VuZFBvc2l0aW9uOmEsYmFja2dyb3VuZFJlcGVhdDppP1wibm8tcmVwZWF0XCI6XCJpbml0aWFsXCJ9LGNsYXNzTmFtZTpcImltYWdlUGxhY2Vob2xkZXIgXCIrKHAmJlwiaGlkZGVuXCIpK1wiIFwiKyhkJiZmJiYhcyYmbCYmXCJmYWRlZC1vdXRcIil9KSl9fSx7a2V5OlwiX2ltYWdlT25sb2FkXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiExLGxvYWRlZDohMCxlcnJvcjohMX0pfX0se2tleTpcIl9pbWFnZU9uZXJyb3JcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2V0U3RhdGUocyh7fSx0aGlzLl9yZXNldCgpLHtlcnJvcjohMH0pKX19LHtrZXk6XCJfcmVzZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybntzcmM6dm9pZCAwLGxvYWRpbmc6ITEsbG9hZGVkOiExLGVycm9yOiExfX19LHtrZXk6XCJfbG9hZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fcmVzZXQoKTtpZighdGhpcy5wcm9wcy5wcmV2ZW50TG9hZCl7dmFyIHQ9dGhpcy5wcm9wcy5zcmM7ZS5zcmMhPT10JiYoZT1zKHt9LGUse3NyYzp0P3Q6dm9pZCAwLGxvYWRpbmc6ISF0fSkpfXRoaXMuc2V0U3RhdGUoZSl9fV0pLHR9KHUuZGVmYXVsdC5Db21wb25lbnQpO3QuZGVmYXVsdD1jfSxmdW5jdGlvbih0LG8pe3QuZXhwb3J0cz1lfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9wb3J0aW9uYWxJbWFnZS5idW5kbGUuanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9kaXN0L1Byb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgaWYgKHByb21pc2UuX2ggPT0gMSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2M7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlYWN0aW9uO1xuICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkge1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZiAocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpIHJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19IYXNoLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19Qcm9taXNlLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19XZWFrTWFwLmpzIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FwcGx5LmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanMiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChjb21wYXJhdG9yKHZhbHVlLCBhcnJheVtpbmRleF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmRJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzRmxhdHRlbmFibGUgPSByZXF1aXJlKCcuL19pc0ZsYXR0ZW5hYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmxhdHRlbmAgd2l0aCBzdXBwb3J0IGZvciByZXN0cmljdGluZyBmbGF0dGVuaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gZmxhdHRlbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXB0aCBUaGUgbWF4aW11bSByZWN1cnNpb24gZGVwdGguXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVkaWNhdGU9aXNGbGF0dGVuYWJsZV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU3RyaWN0XSBSZXN0cmljdCB0byB2YWx1ZXMgdGhhdCBwYXNzIGBwcmVkaWNhdGVgIGNoZWNrcy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtyZXN1bHQ9W11dIFRoZSBpbml0aWFsIHJlc3VsdCB2YWx1ZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZsYXR0ZW5lZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZUZsYXR0ZW4oYXJyYXksIGRlcHRoLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgcHJlZGljYXRlIHx8IChwcmVkaWNhdGUgPSBpc0ZsYXR0ZW5hYmxlKTtcbiAgcmVzdWx0IHx8IChyZXN1bHQgPSBbXSk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKGRlcHRoID4gMCAmJiBwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgICBpZiAoZGVwdGggPiAxKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsYXR0ZW4gYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICAgIGJhc2VGbGF0dGVuKHZhbHVlLCBkZXB0aCAtIDEsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheVB1c2gocmVzdWx0LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNTdHJpY3QpIHtcbiAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGbGF0dGVuO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VGbGF0dGVuLmpzIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJc05hTiA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hTicpLFxuICAgIHN0cmljdEluZGV4T2YgPSByZXF1aXJlKCcuL19zdHJpY3RJbmRleE9mJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcbiAgICA/IHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpXG4gICAgOiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXNOYU4sIGZyb21JbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hdGNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IGluZGV4LFxuICAgICAgbm9DdXN0b21pemVyID0gIWN1c3RvbWl6ZXI7XG5cbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgPyBkYXRhWzFdICE9PSBvYmplY3RbZGF0YVswXV1cbiAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cbiAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhY2sgPSBuZXcgU3RhY2s7XG4gICAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgICAgIDogcmVzdWx0XG4gICAgICAgICAgKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hdGNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc01hdGNoLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hTmAgd2l0aG91dCBzdXBwb3J0IGZvciBudW1iZXIgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgTmFOYCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYU47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXMnKSxcbiAgICBiYXNlTWF0Y2hlc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXNQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBwcm9wZXJ0eSA9IHJlcXVpcmUoJy4vcHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pdGVyYXRlZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGFuIGl0ZXJhdGVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2MDM0IGZvciBtb3JlIGRldGFpbHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICA/IGJhc2VNYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKVxuICAgICAgOiBiYXNlTWF0Y2hlcyh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXRlcmF0ZWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL19iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hdGNoRGF0YScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2Vzbid0IGNsb25lIGBzb3VyY2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUobWF0Y2hEYXRhWzBdWzBdLCBtYXRjaERhdGFbMF1bMV0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09PSBzb3VyY2UgfHwgYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXMuanMiLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpLFxuICAgIGdldCA9IHJlcXVpcmUoJy4vZ2V0JyksXG4gICAgaGFzSW4gPSByZXF1aXJlKCcuL2hhc0luJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzUHJvcGVydHlgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICBpZiAoaXNLZXkocGF0aCkgJiYgaXNTdHJpY3RDb21wYXJhYmxlKHNyY1ZhbHVlKSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSh0b0tleShwYXRoKSwgc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIgb2JqVmFsdWUgPSBnZXQob2JqZWN0LCBwYXRoKTtcbiAgICByZXR1cm4gKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgb2JqVmFsdWUgPT09IHNyY1ZhbHVlKVxuICAgICAgPyBoYXNJbihvYmplY3QsIHBhdGgpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlc1Byb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlUHJvcGVydHkuanMiLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5RGVlcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlUHJvcGVydHlEZWVwLmpzIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIG92ZXJSZXN0ID0gcmVxdWlyZSgnLi9fb3ZlclJlc3QnKSxcbiAgICBzZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX3NldFRvU3RyaW5nJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwidmFyIGNvbnN0YW50ID0gcmVxdWlyZSgnLi9jb25zdGFudCcpLFxuICAgIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc2V0VG9TdHJpbmdgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaG90IGxvb3Agc2hvcnRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgYmFzZVNldFRvU3RyaW5nID0gIWRlZmluZVByb3BlcnR5ID8gaWRlbnRpdHkgOiBmdW5jdGlvbihmdW5jLCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmMsICd0b1N0cmluZycsIHtcbiAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAnZW51bWVyYWJsZSc6IGZhbHNlLFxuICAgICd2YWx1ZSc6IGNvbnN0YW50KHN0cmluZyksXG4gICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNldFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpLFxuICAgIGNyZWF0ZVNldCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVNldCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmlxKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgc2VlbiA9IHJlc3VsdDtcblxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgfVxuICBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xuICAgIGlmIChzZXQpIHtcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XG4gICAgfVxuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKHNlZW5JbmRleC0tKSB7XG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXMoc2VlbiwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ2YXIgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgbm9vcCA9IHJlcXVpcmUoJy4vbm9vcCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvYmplY3Qgb2YgYHZhbHVlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFkZCB0byB0aGUgc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IHNldC5cbiAqL1xudmFyIGNyZWF0ZVNldCA9ICEoU2V0ICYmICgxIC8gc2V0VG9BcnJheShuZXcgU2V0KFssLTBdKSlbMV0pID09IElORklOSVRZKSA/IG5vb3AgOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBTZXQodmFsdWVzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2NyZWF0ZVNldC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ2YXIgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGtleSA9IHJlc3VsdFtsZW5ndGhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgcmVzdWx0W2xlbmd0aF0gPSBba2V5LCB2YWx1ZSwgaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXRjaERhdGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0TWF0Y2hEYXRhLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRUYWcuanMiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgZXhpc3RzIG9uIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgaGFzRnVuYykge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gdG9LZXkocGF0aFtpbmRleF0pO1xuICAgIGlmICghKHJlc3VsdCA9IG9iamVjdCAhPSBudWxsICYmIGhhc0Z1bmMob2JqZWN0LCBrZXkpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICB9XG4gIGlmIChyZXN1bHQgfHwgKytpbmRleCAhPSBsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGxlbmd0aCA9IG9iamVjdCA9PSBudWxsID8gMCA6IG9iamVjdC5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc1BhdGguanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoU2V0LmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ByZWFkYWJsZVN5bWJvbCA9IFN5bWJvbCA/IFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBmbGF0dGVuYWJsZSBgYXJndW1lbnRzYCBvYmplY3Qgb3IgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZmxhdHRlbmFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNGbGF0dGVuYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpIHx8XG4gICAgISEoc3ByZWFkYWJsZVN5bWJvbCAmJiB2YWx1ZSAmJiB2YWx1ZVtzcHJlYWRhYmxlU3ltYm9sXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGbGF0dGVuYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fb3ZlckFyZy5qcyIsInZhciBhcHBseSA9IHJlcXVpcmUoJy4vX2FwcGx5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VSZXN0YCB3aGljaCB0cmFuc2Zvcm1zIHRoZSByZXN0IGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSByZXN0IGFycmF5IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyUmVzdChmdW5jLCBzdGFydCwgdHJhbnNmb3JtKSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IHRyYW5zZm9ybShhcnJheSk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlclJlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fb3ZlclJlc3QuanMiLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsInZhciBiYXNlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlU2V0VG9TdHJpbmcnKSxcbiAgICBzaG9ydE91dCA9IHJlcXVpcmUoJy4vX3Nob3J0T3V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0VG9TdHJpbmcuanMiLCIvKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVOb3cgPSBEYXRlLm5vdztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvcnRPdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2hvcnRPdXQuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0NsZWFyLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0hhcy5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5kZXhPZmAgd2hpY2ggcGVyZm9ybXMgc3RyaWN0IGVxdWFsaXR5XG4gKiBjb21wYXJpc29ucyBvZiB2YWx1ZXMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmljdEluZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsInZhciBtZW1vaXplQ2FwcGVkID0gcmVxdWlyZSgnLi9fbWVtb2l6ZUNhcHBlZCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVMZWFkaW5nRG90ID0gL15cXC4vLFxuICAgIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChyZUxlYWRpbmdEb3QudGVzdChzdHJpbmcpKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9QYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvY29uc3RhbnQuanMiLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2dldC5qcyIsInZhciBiYXNlSGFzSW4gPSByZXF1aXJlKCcuL19iYXNlSGFzSW4nKSxcbiAgICBoYXNQYXRoID0gcmVxdWlyZSgnLi9faGFzUGF0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgaXMgYSBkaXJlY3Qgb3IgaW5oZXJpdGVkIHByb3BlcnR5IG9mIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IF8uY3JlYXRlKHsgJ2EnOiBfLmNyZWF0ZSh7ICdiJzogMiB9KSB9KTtcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EuYicpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2InKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGhhc0luKG9iamVjdCwgcGF0aCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgaGFzUGF0aChvYmplY3QsIHBhdGgsIGJhc2VIYXNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzSW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9oYXNJbi5qcyIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIi8qKlxuICogR2V0cyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ubGFzdChbMSwgMiwgM10pO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuIGxlbmd0aCA/IGFycmF5W2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxhc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9sYXN0LmpzIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9tZW1vaXplLmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbm9vcC5qcyIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHknKSxcbiAgICBiYXNlUHJvcGVydHlEZWVwID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5RGVlcCcpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGEgZ2l2ZW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW1xuICogICB7ICdhJzogeyAnYic6IDIgfSB9LFxuICogICB7ICdhJzogeyAnYic6IDEgfSB9XG4gKiBdO1xuICpcbiAqIF8ubWFwKG9iamVjdHMsIF8ucHJvcGVydHkoJ2EuYicpKTtcbiAqIC8vID0+IFsyLCAxXVxuICpcbiAqIF8ubWFwKF8uc29ydEJ5KG9iamVjdHMsIF8ucHJvcGVydHkoWydhJywgJ2InXSkpLCAnYS5iJyk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICByZXR1cm4gaXNLZXkocGF0aCkgPyBiYXNlUHJvcGVydHkodG9LZXkocGF0aCkpIDogYmFzZVByb3BlcnR5RGVlcChwYXRoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3Byb3BlcnR5LmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC90b1N0cmluZy5qcyIsInZhciBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJy4vX2Jhc2VGbGF0dGVuJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICBsYXN0ID0gcmVxdWlyZSgnLi9sYXN0Jyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy51bmlvbmAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgaXRlcmF0ZWVgIHdoaWNoIGlzXG4gKiBpbnZva2VkIGZvciBlYWNoIGVsZW1lbnQgb2YgZWFjaCBgYXJyYXlzYCB0byBnZW5lcmF0ZSB0aGUgY3JpdGVyaW9uIGJ5XG4gKiB3aGljaCB1bmlxdWVuZXNzIGlzIGNvbXB1dGVkLiBSZXN1bHQgdmFsdWVzIGFyZSBjaG9zZW4gZnJvbSB0aGUgZmlyc3RcbiAqIGFycmF5IGluIHdoaWNoIHRoZSB2YWx1ZSBvY2N1cnMuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OlxuICogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7Li4uQXJyYXl9IFthcnJheXNdIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGNvbWJpbmVkIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy51bmlvbkJ5KFsyLjFdLCBbMS4yLCAyLjNdLCBNYXRoLmZsb29yKTtcbiAqIC8vID0+IFsyLjEsIDEuMl1cbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8udW5pb25CeShbeyAneCc6IDEgfV0sIFt7ICd4JzogMiB9LCB7ICd4JzogMSB9XSwgJ3gnKTtcbiAqIC8vID0+IFt7ICd4JzogMSB9LCB7ICd4JzogMiB9XVxuICovXG52YXIgdW5pb25CeSA9IGJhc2VSZXN0KGZ1bmN0aW9uKGFycmF5cykge1xuICB2YXIgaXRlcmF0ZWUgPSBsYXN0KGFycmF5cyk7XG4gIGlmIChpc0FycmF5TGlrZU9iamVjdChpdGVyYXRlZSkpIHtcbiAgICBpdGVyYXRlZSA9IHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gYmFzZVVuaXEoYmFzZUZsYXR0ZW4oYXJyYXlzLCAxLCBpc0FycmF5TGlrZU9iamVjdCwgdHJ1ZSksIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMikpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pb25CeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3VuaW9uQnkuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTAuMDEuMjAxNy5cbiAqL1xuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tIFwici1yZXBvcnRhbC1iYXNlXCI7XG5pbXBvcnQgSGl0bGlzdFNldHVwIGZyb20gXCIuL2hpdGxpc3Qtc2V0dXBcIjtcblxuY2xhc3MgSGl0bGlzdERhdGFzb3VyY2UgZXh0ZW5kcyBIaXRsaXN0U2V0dXB7XG4gIC8qKlxuICAgKiBUaGlzIGNsYXNzIGFsbG93cyB0byBlc3RhYmxpc2ggYSBjb25uZWN0aW9uIHdpdGggdGhlIEhpdExpc3QgZGF0YWJhc2UgYW5kIHVzZSB1dGlsaXR5IG1ldGhvZHMgdG8gcXVlcnkgYW5kIGZpbHRlciBkYXRhIHByb3ZpZGVkIHRoZXJlJ3MgYSBoaXRsaXN0IG9uIHRoZSBwYWdlXG4gICAqIEBleHRlbmRzIEhpdGxpc3RTZXR1cFxuICAgKiAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zPXt9KXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3NlYXJjaFZhbHVlcz1bXTtcbiAgICAvKiogQHByb3BlcnR5IHtTdHJpbmd9IG1vZGlmaWVyIC0gZXh0cmEgcGFyYW1zIGFkZGVkIGFzIGEgc3RyaW5nIGZyb20gZmlsdGVycyAqL1xuICAgIHRoaXMubW9kaWZpZXIgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBwZXJmb3JtcyBpbml0aWFsIGRhdGEgbG9hZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgb2YgZGF0YVxuICAgKiAqL1xuICBpbml0aWFsRGF0YUxvYWQoKXtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aW5pdGlhbExvYWQ6dHJ1ZX0pXG4gIH1cbiAgLyoqXG4gICAqIGxvYWRzIG5leHQgcGFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgb2YgZGF0YVxuICAgKiAqL1xuICBuZXh0UGFnZSgpe1xuICAgIHRoaXMuX3NraXBQYWdlKHRydWUpO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aXNQYWdpbmc6IHRydWV9LHRoaXMubW9kaWZpZXIpO1xuICB9XG4gIC8qKlxuICAgKiBsb2FkcyBwcmV2aW91cyBwYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIHByZXZpb3VzUGFnZSgpe1xuICAgIHRoaXMuX3NraXBQYWdlKGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2lzUGFnaW5nOiB0cnVlfSx0aGlzLm1vZGlmaWVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyaWVzIEhpdExpc3QgQVBJXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqICovXG4gIHJlcXVlc3RSZXNwb25zZShvcHRpb25zKXtcbiAgICBsZXQgcXVlcnk9IFJlcG9ydGFsQmFzZS5sb2NhdGlvbkRlc2VyaWFsaXplKCkucXVlcnk7XG4gICAgaWYocXVlcnkgJiYgcXVlcnkucmVwb3J0aWQgJiYgdGhpcy5oaXRsaXN0SUQpe1xuICAgICAgLypzZXQgY29tbW9uIHBhcmFtcyovXG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBQYWdlSWQ6IHRoaXMucGFnZUlELFxuICAgICAgICBwYWdlU3RhdGVJZDogdGhpcy5wYWdlU3RhdGVJRCxcbiAgICAgICAgUHJldmlldzogcXVlcnkucHJldmlld1xuICAgICAgfTtcblxuICAgICAgLyppZiBvcHRpb25zIGFyZSBwYXNzZWQsIGFkZCBvcHRpb25zKi9cbiAgICAgIGlmKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgZm9yIChsZXQgYXR0cm5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHBhcmFtc1thdHRybmFtZV0gPSB0eXBlb2Ygb3B0aW9uc1thdHRybmFtZV09PT0nYm9vbGVhbic/KG9wdGlvbnNbYXR0cm5hbWVdPycxJzonMCcpOm9wdGlvbnNbYXR0cm5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFwYXJhbXMuc2VhcmNoICYmIHRoaXMuX3NlYXJjaFZhbHVlcy5sZW5ndGg+MCl7XG4gICAgICAgIHBhcmFtcy5zZWFyY2ggPSBKU09OLnN0cmluZ2lmeSh0aGlzLl9zZWFyY2hWYWx1ZXMpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcztcblxuICAgICAgaWYgKHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzIT1udWxsICYmICFpc05hTihzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdlTnVtYmVyKSkge1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmluaXRpYWxMb2FkID09PSB0cnVlKSB7XG4gICAgICAgICAgc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2VOdW1iZXIgKz0gc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnaW5nRm9yd2FyZCA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwYXJhbXMuc29ydGluZ1BhZ2luZ1ZhbHVlcz1KU09OLnN0cmluZ2lmeShzb3J0aW5nUGFnaW5nVmFsdWVzKTtcblxuICAgICAgcmV0dXJuIFJlcG9ydGFsQmFzZS5wcm9taXNlUmVxdWVzdChgJHt0aGlzLnNlcnZpY2VVUkx9JiR7SGl0bGlzdERhdGFzb3VyY2Uuc2VyaWFsaXplUGFyYW1zKHBhcmFtcyl9JHt0aGlzLm1vZGlmaWVyIT0nJz8nJicrdGhpcy5tb2RpZmllcjonJ31gKVxuICAgICAgICAudGhlbihyZXNwb25zZT0+dGhpcy5wYXJzZVJlc3BvbnNlKHJlc3BvbnNlKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIEhpdExpc3QgQVBJIHJlc3BvbnNlXG4gICAqICovXG4gIHBhcnNlUmVzcG9uc2UocmVzcG9uc2Upe1xuICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG5cbiAgICB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSByZXNwb25zZS5zb3J0aW5nUGFnaW5nVmFsdWVzO1xuICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgdGhpcy5wYWdlSW5mbyA9IHJlc3BvbnNlLnBhZ2VJbmZvO1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtCb29sZWFufSBwYWdpbmdGb3J3YXJkIGlmIGB0cnVlYCBnb2VzIGZvcndhcmQsIGlmIGBudWxsYCBnb2VzIGJhY2t3YXJkXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBjYWxsYmFja1xuICAgKiAqL1xuICBfc2tpcFBhZ2UocGFnaW5nRm9yd2FyZCl7XG4gICAgbGV0IF9zcHYgPSB7Li4udGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzfTtcbiAgICBsZXQgcHYgPSB7Li4uX3Nwdi5wYWdpbmdWYWx1ZXN9IHx8IHt9O1xuICAgIHB2LnBhZ2luZ0ZvcndhcmQgPSBwYWdpbmdGb3J3YXJkOyAvKmlmIGZvcndhcmQgaXMgbmVlZGVkIHRoZW4gcGFzcyB0cnVlLCBlbHNlIG51bGwgLSBiYWNrd2FyZCovXG4gICAgcHYuc3RhcnRJZCA9IHBhZ2luZ0ZvcndhcmQgPyBwdi5sYXN0U3RhcnRJZCA6IHB2LmZpcnN0U3RhcnRJZDtcbiAgICBwdi5zdGFydFZhbHVlID0gcGFnaW5nRm9yd2FyZCA/IHB2Lmxhc3RTdGFydFZhbHVlIDogcHYuZmlyc3RTdGFydFZhbHVlO1xuICAgIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHtcbiAgICAgIC4uLnRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyxcbiAgICAgIHBhZ2luZ1ZhbHVlczogcHZcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIHNlcmlhbGl6ZSBwYXJhbXMgaW50byBhIHF1ZXJ5IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIC0gYW4gb2JqZWN0IHdpdGggcGFyYW1ldGVyc1xuICAgKiAqL1xuICBzdGF0aWMgc2VyaWFsaXplUGFyYW1zKHBhcmFtcyl7XG4gICAgbGV0IHF1ZXJ5ID0gW107XG4gICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zKXtcbiAgICAgIHF1ZXJ5LnB1c2goW2tleSxwYXJhbXNba2V5XV0uam9pbignPScpKTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5LmpvaW4oJyYnKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdERhdGFzb3VyY2U7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1kYXRhc291cmNlLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDEwLjAxLjIwMTcuXG4gKi9cblxuY2xhc3MgSGl0bGlzdFNldHVwe1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIC8vZml4IGZvciB3aW5kb3cubG9jYXRpb24gb3JpZ2luLCB0aGFueCBJRVxuICAgIGlmICghd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0OiAnJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gSGl0bGlzdFNldHVwLmdldE9yaWdpbmFsQ29uZmlnKCk7XG4gICAgdGhpcy5fZWxlbWVudFR5cGUgPSB3aW5kb3cuSGl0TGlzdEVsZW1lbnRUeXBlO1xuICAgIHRoaXMuX29wID0gd2luZG93LlNlYXJjaGFibGVMaXN0T3BlcmF0b3I7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgYWxsb3dzIGdldHRpbmcgYSBsb2NhbGlzZWQgc3RyaW5nIGluIHRoZSBsYW5ndWFnZSBvZiB0aGUgcmVwb3J0IGZyb20gSGl0bGlzdCBjb25maWcuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSB0aGUga2V5IHRvIGxvb2sgdGhlIHByb3BlcnR5IHVwXG4gICAqXG4gICAqICogYHN0b2VgOlwiU21hbGxlciB0aGFuIG9yIGVxdWFsXCIsXG4gICAqICogYGd0b2VgOlwiR3JlYXRlciB0aGFuIG9yIGVxdWFsXCIsXG4gICAqICogYGJldHdlZW5gOlwiQmV0d2VlblwiLFxuICAgKiAqIGBiZWZvcmVgOlwiQmVmb3JlXCIsXG4gICAqICogYGFmdGVyYDpcIkFmdGVyXCIsXG4gICAqICogYGV4YWN0bHlgOlwiRXhhY3RseVwiLFxuICAgKiAqIGBzaG93ZGVmYXVsdGNvbHNgOlwiU2hvdyBkZWZhdWx0IGNvbHVtbnNcIixcbiAgICogKiBgYXBwbHlgOlwiQXBwbHlcIixcbiAgICogKiBgY2FuY2VsYDpcIkNhbmNlbFwiLFxuICAgKiAqIGBzaG93aGlkZWA6XCJTaG93IC8gSGlkZSBjb2x1bW5zXCIsXG4gICAqICogYHllc2A6XCJZZXNcIixcbiAgICogKiBgbm9gOlwiTm9cIixcbiAgICogKiBgbG9hZGluZ0RhdGFgOlwiTG9hZGluZyBkYXRhLCBwbGVhc2Ugd2FpdC4uLlwiLFwiXG4gICAqICogYGNoZWNrYWxsYDpcIkNoZWNrIGFsbFwiLFxuICAgKiAqIGB1bmNoZWNrYWxsYDpcIlVuY2hlY2sgYWxsXCIsXG4gICAqICogYGVycm9yTG9hZGluZ2A6XCJFcnJvciBsb2FkaW5nIGRhdGFcIixcbiAgICogKiBgZXJyb3JOb0NvbHVtbnNgOlwiTm8gY29sdW1ucyBzZWxlY3RlZFwiXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1JFU1BPTkRFTlRPVkVSVklFV2A6XCJSZXNwb25kZW50IG92ZXJ2aWV3XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSSU5UYDpcIlByaW50IHRoZSBjdXJyZW50IHJlc3BvbmRlbnRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfQ0xPU0VgOlwiQ2xvc2UgdGhpcyBvdmVybGF5XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX0ZJTFRFUmA6XCJGaWx0ZXIgcXVlc3Rpb25zXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX05PVEhJTkdGT1VORGA6XCJObyBxdWVzdGlvbnMgbWF0Y2ggeW91ciBzZWFyY2hcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJFVklPVVNgOlwiUHJldmlvdXNcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJFVklPVVNISU5UYDpcIlByZXZpb3VzIHJlc3BvbmRlbnRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTkVYVGA6XCJOZXh0XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX05FWFRISU5UYDpcIk5leHQgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19PRmA6XCJ7MH0gb2YgezF9XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX01PUkVgOlwiezB9IG1vcmVcIixcbiAgICogKiBSRVBPUlRfU0lOR0xFVklFV19BTFRFUk5BVElWRVNgOlwiQW5zd2VycyBhbHRlcm5hdGl2ZXM6XCJcbiAgICpcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICogKi9cbiAgaTE4bihrZXkpe1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuY2FwdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KT90aGlzLl9jb25maWcuY2FwdGlvbnNba2V5XTp0aGlzLl9jb25maWcuc2luZ2xlVmlld1RleHRzLmhhc093blByb3BlcnR5KGtleSk/dGhpcy5fY29uZmlnLnNpbmdsZVZpZXdUZXh0c1trZXldOm51bGxcbiAgfVxuXG4gIGdldCBkYXRhKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5oaXRsaXN0RGF0YX1cblxuICBzZXQgZGF0YShkYXRhKXtcbiAgICB0aGlzLl9jb25maWcuaGl0bGlzdERhdGEgPSBkYXRhO1xuICB9XG4gIGdldCBkaXNhYmxlTmV4dEJ1dHRvbigpe1xuICAgIHJldHVybiB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMuZGlzYWJsZU5leHRCdXR0b24gfHwgZmFsc2VcbiAgfVxuICBnZXQgZGlzYWJsZVByZXZCdXR0b24oKXtcbiAgICByZXR1cm4gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLmRpc2FibGVQcmV2QnV0dG9uIHx8IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgdmlzaWJsZSBIaXRMaXN0IGNvbHVtbnMgb2YgT2JqZWN0IHR5cGU6IGB7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9YFxuICAgKiBAcmV0dXJucyB7QXJyYXkuPHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ30+fSBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSB2aXNpYmxlIEhpdExpc3QgY29sdW1uc1xuICAgKiAqL1xuICBnZXQgY29sdW1ucygpe3JldHVybiB0aGlzLl9jb25maWcuY29sdW1uc31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBhbGwgSGl0TGlzdCBjb2x1bW5zIG9mIE9iamVjdCB0eXBlOiBge2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfWBcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKiAqL1xuICBnZXQgYWxsQ29sdW1ucygpe3JldHVybiB0aGlzLl9jb25maWcuYWxsQ29sdW1uc31cblxuICBnZXQgaGl0bGlzdElEKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5jb21wb25lbnRJZH1cbiAgZ2V0IHBhZ2VJRCgpe3JldHVybiB0aGlzLl9jb25maWcucGFnZUlkfVxuICBnZXQgbGFuZ3VhZ2UoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmxhbmd1YWdlfVxuICBnZXQgc2VydmljZVVSTCgpe3JldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7dGhpcy5fY29uZmlnLnNlcnZpY2VVcmx9YH1cbiAgZ2V0IHBhZ2VTdGF0ZUlEKCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQYWdlU3RhdGVJZCcpPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUGFnZVN0YXRlSWQnKS52YWx1ZTp1bmRlZmluZWR9XG4gIGdldCBzb3J0aW5nUGFnaW5nVmFsdWVzKCl7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zb3J0aW5nUGFnaW5nVmFsdWVzIT1udWxsP3RoaXMuX2NvbmZpZy5zb3J0aW5nUGFnaW5nVmFsdWVzOnt9XG4gIH1cbiAgc2V0IHNvcnRpbmdQYWdpbmdWYWx1ZXModmFsKXtcbiAgICB0aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHZhbDtcbiAgfVxuXG4gIHN0YXRpYyBfZml4SnNvbkRhdGUoanNvbkRhdGUpIHtcbiAgICBpZiAoIShqc29uRGF0ZSAmJiBZICYmIFkuTGFuZy5pc0Z1bmN0aW9uKGpzb25EYXRlLnJlcGxhY2UpKSkge3JldHVybiBqc29uRGF0ZTt9XG4gICAgbGV0IGNvbnN0ciA9IGpzb25EYXRlLnJlcGxhY2UobmV3IFJlZ0V4cChcIl4vRGF0ZVxcXFwoKFstK10/XFxcXGQrKVxcXFwpLyRcIiksIFwibmV3IERhdGUoJDEpXCIpO1xuICAgIGlmIChjb25zdHIgPT0ganNvbkRhdGUpIHtyZXR1cm4ganNvbkRhdGU7fVxuICAgIHJldHVybiBldmFsKGNvbnN0cik7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgY29uZmlnIGZvciBhIEhpdExpc3QgaWYgaXQncyBpbml0aWFsaXNlZCBvbiB0aGUgcGFnZVxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgYWxsQ29sdW1uczpBcnJheSxcbiAgICogIGNhcHRpb25zOk9iamVjdCxcbiAgICogIGNsaWVudElkOlN0cmluZyxcbiAgICogIGNvbHVtbnM6QXJyYXksXG4gICAqICBjb21wb25lbnRJZDpTdHJpbmcsXG4gICAqICBoYXNoZWRQcm9qZWN0SWQ6U3RyaW5nLFxuICAgKiAgaGl0bGlzdERhdGE6QXJyYXksXG4gICAqICBsYW5ndWFnZTpOdW1iZXIsXG4gICAqICBuZXh0VGV4dDpTdHJpbmcsXG4gICAqICBub0luaXRpYWxMb2FkOkJvb2xlYW4sXG4gICAqICBwYWdlQWpheEVuYWJsZWQ6Qm9vbGVhbixcbiAgICogIHBhZ2VJZDpTdHJpbmcsXG4gICAqICBwcmV2VGV4dDpTdHJpbmcsXG4gICAqICBwcmV2aWV3OkJvb2xlYW4sXG4gICAqICBzZWFyY2hJdGVtczpBcnJheSxcbiAgICogIHNlYXJjaFZhbHVlczpBcnJheSxcbiAgICogIHNlcnZpY2VVcmw6U3RyaW5nLFxuICAgKiAgc2VydmljZVVybE1ldGFEYXRhOlN0cmluZyxcbiAgICogIHNob3dTaW5nbGVWaWV3T25Sb3dTZWxlY3Q6Qm9vbGVhbixcbiAgICogIHNpbmdsZVZpZXdBcGlVcmw6U3RyaW5nLFxuICAgKiAgc2luZ2xlVmlld0Zvcm1zQ2h1bmtBcGlVcmw6U3RyaW5nLFxuICAgKiAgc2luZ2xlVmlld1RleHRzOk9iamVjdCxcbiAgICogIHNvcnRpbmdQYWdpbmdWYWx1ZXM6T2JqZWN0LFxuICAgKiAgc3R5bGVzOk9iamVjdCxcbiAgICogIHZlcnNpb246U3RyaW5nXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqICovXG4gIHN0YXRpYyBnZXRPcmlnaW5hbENvbmZpZygpe1xuICAgIGxldCBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0Jyk7XG4gICAgaWYoc2NyaXB0cyl7XG4gICAgICBsZXQgaT1zY3JpcHRzLmxlbmd0aCxcbiAgICAgICAgICBjZmcgPSAvKFlcXC5SZXBvcnRhbFxcLkhpdExpc3QsKVxccyguKj8pXFwpOy9naTtcbiAgICAgIHdoaWxlKGktLSl7XG4gICAgICAgIGxldCBzY3JpcHQgPSBzY3JpcHRzW2ldLnRleHQ7XG4gICAgICAgIGlmKHNjcmlwdC5pbmRleE9mKCdZLlJlcG9ydGFsLkhpdExpc3QsJyk+LTEpe1xuICAgICAgICAgIGxldCBleGVjID0gY2ZnLmV4ZWMoc2NyaXB0KTtcbiAgICAgICAgICByZXR1cm4gKGV4ZWMhPW51bGwgJiYgZXhlY1syXSk/IEpTT04ucGFyc2UoZXhlY1syXSk6IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIaXRsaXN0IGNvbmZpZyBpcyBub3QgcHJlc2VudCBvbiB0aGUgcGFnZScpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpdGxpc3RTZXR1cFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1zZXR1cC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAwNy4wOS4yMDE2LlxuICovXG5cbmltcG9ydCBIaXRsaXN0RGF0YXNvdXJjZSBmcm9tIFwiLi9oaXRsaXN0LWRhdGFzb3VyY2VcIjtcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSBcInItcmVwb3J0YWwtYmFzZVwiO1xuXG53aW5kb3cuUmVwb3J0YWwgPSB3aW5kb3cuUmVwb3J0YWwgfHwge307XG5SZXBvcnRhbEJhc2UubWl4aW4od2luZG93LlJlcG9ydGFsLHtcbiAgSGl0bGlzdERhdGFzb3VyY2Vcbn0pO1xuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdERhdGFzb3VyY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9tYWluLmpzIiwiLy9AZmxvd1xuaW1wb3J0IEhpdGxpc3REUyBmcm9tIFwici1oaXRsaXN0LWRhdGFzb3VyY2VcIjtcbmltcG9ydCB1bmlvbkJ5IGZyb20gXCJsb2Rhc2gvdW5pb25CeVwiO1xuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tICdyLXJlcG9ydGFsLWJhc2UnO1xuXG50eXBlIE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBuYW1lIG9mIGEgZ2xvYmFsIGNvbmZpZyB2YXJpYWJsZSBwYXNzZWRcbiAgICovXG4gIGNvbmZpZzogc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBkaXNwbGF5IHRodW1icyBhcyBpbWFnZSBwbGFjZWhvbGRlcnMgaW5zdGVhZCBvZiBtZWRpYSBpY29uc1xuICAgKi9cbiAgdGh1bWJzUGxhY2Vob2xkZXI6IGJvb2xlYW4sXG4gIGNvbXBvbmVudDogYW55XG59XG5cbnR5cGUgcGFyc2VkRGF0YVJvdyA9IHtcbiAgaWQ6IHN0cmluZyB8IG51bWJlcixcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxuICBwbGFjZWhvbGRlcj86IHN0cmluZyxcbiAgaW1hZ2U/OiBzdHJpbmcsXG4gIG1lZGlhdHlwZTogJ3ZpZGVvJyB8ICdhdWRpbycgfCAnaW1hZ2UnLFxuICBsaW5rOiBzdHJpbmcsXG4gIFt4OiBzdHJpbmddOiBzdHJpbmcsXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRFNBYnN0cmFjdGlvbihvcHRpb25zOiBPcHRpb25zKSB7XG4gIGNvbnN0IERTID0gbmV3IEhpdGxpc3REUygpO1xuICBjb25zdCBjb21wb25lbnQgPSBvcHRpb25zLmNvbXBvbmVudDtcbiAgbGV0IGNvbmZpZztcbiAgY29uc3QgcXVlcnkgPSBSZXBvcnRhbEJhc2UubG9jYXRpb25EZXNlcmlhbGl6ZSgpLnF1ZXJ5O1xuXG4gIHNldHVwRGF0YUxpc3RlbmVyKG9wdGlvbnMuY29uZmlnKTtcblxuICAvKipcbiAgICogTGF1bmNoZXMgbGlzdGVuZXIgZm9yIGBZLkdsb2JhbC5yZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZWAgZXZlbnQgd2l0aGluIFlVSSB3aGljaCBpcyB0cmlnZ2VyZWQgZXZlcnkgdGltZSB0aGUgZmlsdGVyIHBhbmVsIHVwZGF0ZXMgb3Igb24gaW5pdGlhbCBsb2FkXG4gICAqICovXG4gIGZ1bmN0aW9uIHNldHVwRGF0YUxpc3RlbmVyKGNvbmZpZ05hbWUpIHtcbiAgICBpZiAoWSAmJiBZLkdsb2JhbCkge1xuICAgICAgWS5HbG9iYWwub24oXCJyZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZVwiLCBmaWx0ZXJJbmZvID0+IHtcbiAgICAgICAgaW5pdGlhbGlzZUNvbmZpZyhjb25maWdOYW1lKTtcbiAgICAgICAgaWYgKERTICYmIGNvbmZpZykge1xuICAgICAgICAgIERTLm1vZGlmaWVyID0gZmlsdGVySW5mbzsgLy8gZmlsdGVyIGluZm9ybWF0aW9uIGFzIGEgbW9kaWZpZXIgZm9yIGRhdGEgZmV0Y2hcbiAgICAgICAgICBEUy5pbml0aWFsRGF0YUxvYWQoKVxuICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZVUkgaXMgbm90IGRlZmluZWQgb3IgYWNjZXNzaWJsZSwgY2Fubm90IHNldCB1cCBhIFwicmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVcIiBsaXN0ZW5lcicpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpc2VDb25maWcoY29uZmlnTmFtZSkge1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICBpZiAoIXdpbmRvd1tjb25maWdOYW1lXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbmZpZyBpcyBub3QgcGFzc2VkIGZyb20gYmFja2VuZCcpXG4gICAgICB9XG4gICAgICBjb25maWcgPSB3aW5kb3dbY29uZmlnTmFtZV07XG4gICAgICBpZiAoY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzICYmIHR5cGVvZiBjb25maWcuaW5kaXZpZHVhbFJlY29yZHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbmZpZy5pbmRpdmlkdWFsUmVjb3JkcyA9IGNvbmZpZy5pbmRpdmlkdWFsUmVjb3Jkcy5zcGxpdCgnLCcpLm1hcChpdGVtID0+IGl0ZW0udHJpbSgpKTtcbiAgICAgIH1cbiAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7Y29uZmlnfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhLCBtb2RlID0gJ3JlcGxhY2UnKSB7XG4gICAgY29uc3QgbmV3RGF0YTogcGFyc2VkRGF0YVJvd1tdID0gZGF0YS5tYXAoKGRhdGFSb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICBsZXQgcGFyc2VkUm93OiBwYXJzZWREYXRhUm93ID0ge307XG4gICAgICBjb25zdCBpciA9IGNvbmZpZy5pbmRpdmlkdWFsUmVjb3JkcyB8fCBbXTtcbiAgICAgIGNvbnN0IGRhdGFGaWVsZHMgPSBbJ2lkJywgJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ3ZpZGVvJywgJ2F1ZGlvJywgJ2ltYWdlJ10uY29uY2F0KGlyKTtcbiAgICAgIGRhdGFGaWVsZHMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBjb2x1bW5JRCA9IGNvbmZpZ1trZXldO1xuICAgICAgICBwYXJzZWRSb3dba2V5XSA9IHByZXBhcmVEYXRhKGRhdGFSb3dbY29sdW1uSUQgfHwga2V5XSwga2V5KTtcbiAgICAgICAgLy8gaWYgaW1hZ2UgLSB3ZSBtaWdodCB3YW50IHRvIHVzZSBhIHBsYWNlaG9sZGVyIGFzIHRoZSB0aHVtYiwgYW5kIGxvYWQgdGhlIGZ1bGwgaW1hZ2UgaW4gYmFja2dyb3VuZFxuICAgICAgICBpZiAoa2V5ID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgaWYgKHBhcnNlZFJvdy5pbWFnZSkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudGh1bWJzUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgcGFyc2VkUm93LnBsYWNlaG9sZGVyID0gcGFyc2VkUm93LmltYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyc2VkUm93LmltYWdlID0gcGFyc2VkUm93LmltYWdlLnJlcGxhY2UoL190aHVtYi9naSwgJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjYWxjdWxhdGUgbWVkaWF0eXBlIG9yIGEgcGxhY2Vob2xkZXIgaWNvblxuICAgICAgICBpZiAoIXBhcnNlZFJvdy5tZWRpYXR5cGUgJiYgWyd2aWRlbycsICdhdWRpbycsICdpbWFnZSddLmluZGV4T2Yoa2V5KSA+IC0xICYmIGNvbmZpZ1trZXldICYmIHBhcnNlZFJvd1trZXldKSB7XG4gICAgICAgICAgcGFyc2VkUm93Lm1lZGlhdHlwZSA9IGtleVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gZ2V0IGlkIGZvciBrZXlzXG4gICAgICBwYXJzZWRSb3cuaWQgPSBkYXRhUm93LnJlc3BvbnNlaWQgPyBkYXRhUm93LnJlc3BvbnNlaWQgOiByb3dJbmRleDtcbiAgICAgIC8vIGNhbGN1bGF0ZSBsaW5rIHBhc3NlZCBhcyBgc2xpbmtgIHByb3BlcnR5IGluIGRhdGFcbiAgICAgIGlmIChkYXRhUm93LnNsaW5rKSB7XG4gICAgICAgIGxldCBsID0gZGF0YVJvdy5zbGluaztcbiAgICAgICAgcGFyc2VkUm93LmxpbmsgPSAoL2hyZWY9JyguKz8pJy9naSkuZXhlYyhsKS5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJzZWRSb3c7XG4gICAgfSk7XG5cbiAgICAvL3VwZGF0ZSBzdGF0ZSB3aXRoIHRoZSBuZXcgc2V0IG9mIGRhdGEgb3IgYSBtZXJnZWQgZGF0YVxuICAgIGlmIChtb2RlID09PSAncmVwbGFjZScpIHtcbiAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7XG4gICAgICAgIGl0ZW1zOiBuZXdEYXRhLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdhcHBlbmQnKSB7XG4gICAgICBjb21wb25lbnQuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgIGl0ZW1zOiBbLi4ucHJldlN0YXRlLml0ZW1zLCAuLi5uZXdEYXRhXSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBmYWxzZVxuICAgICAgfSkpO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ21lcmdlJykge1xuICAgICAgY29uc29sZS5sb2cobW9kZSk7XG4gICAgICBjb21wb25lbnQuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgIGl0ZW1zOiBbLi4udW5pb25CeShuZXdEYXRhLCBwcmV2U3RhdGUuaXRlbXMsICdpZCcpXSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBmYWxzZVxuICAgICAgfSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCfRhdGA0LXQvSDQt9C90LDQtdGCINGH0YLQvicpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIG1hc3NhZ2UgZGF0YSB0byBmaXQgdGhlIHR5cGUgd2UgZXhwZWN0IHRvIHJlY2VpdmUgaW4gcmVhY3Qgdmlld1xuICAgKiAqL1xuICBmdW5jdGlvbiBwcmVwYXJlRGF0YShkYXRhOiBhbnksIHR5cGU6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKCdwcmVwYXJlRGF0YScsIGRhdGEsIHR5cGUpXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgIGxldCByZXN1bHQgPSAoL3NyYz0nKC4rPyknL2dpKS5leGVjKGRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzdWx0ICE9IG51bGwgJiYgcmVzdWx0WzFdID8gcmVzdWx0WzFdIDogdW5kZWZpbmVkO1xuICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOlxuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgICByZXR1cm4gIShkYXRhLmluZGV4T2YoJy0nKSA+IC0xICYmIGRhdGEudHJpbSgpLmxlbmd0aCA9PT0gMSkgPyBkYXRhLnRyaW0oKSA6IHVuZGVmaW5lZDtcbiAgICAgIGNhc2UgJ3ZpZGVvJzpcbiAgICAgIGNhc2UgJ2F1ZGlvJzpcbiAgICAgICAgcmV0dXJuICEoZGF0YS5pbmRleE9mKCctJykgPiAtMSAmJiBkYXRhLnRyaW0oKS5sZW5ndGggPT09IDEpID8gZ2VuZXJhdGVNZWRpYUxpbmsoZGF0YS50cmltKCksIHR5cGUpIDogdW5kZWZpbmVkO1xuICAgICAgY2FzZSAndGFncyc6XG4gICAgICAgIHJldHVybiBkYXRhICYmIChkYXRhLmluZGV4T2YoJywnKSA+IC0xID8gZGF0YS5zcGxpdCgnLCcpIDogZGF0YS5pbmRleE9mKCctJykgPiAtMSAmJiBkYXRhLnRyaW0oKS5sZW5ndGggPT09IDEgPyB1bmRlZmluZWQgOiBkYXRhLnRyaW0oKSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZU1lZGlhTGluayhmaWxlTmFtZTogc3RyaW5nLCB0eXBlOiAnYXVkaW8nIHwgJ3ZpZGVvJykge1xuICAgIGNvbnNvbGUubG9nKCdnZW5lcmF0ZU1lZGlhTGluaycsIGZpbGVOYW1lLCB0eXBlKTtcbiAgICBjb25zdCBkc05hbWUgPSBjb25maWcuc3VydmV5SUQ7XG4gICAgcmV0dXJuIGAvcmVwb3J0YWwvV3lzaXd5Zy9SZXBvcnQvJHtxdWVyeS5yZXBvcnRpZH0vJHtkc05hbWV9LyR7dHlwZX0vJHtmaWxlTmFtZX1gXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgY29tcG9uZW50LnNldFN0YXRlKHtcbiAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgaXRlbXM6IFtdXG4gICAgfSlcbiAgfVxuXG4gIERTLmxvYWROZXh0UGFnZSA9ICgpID0+IHtcbiAgICBjb21wb25lbnQuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KTtcbiAgICByZXR1cm4gRFMubmV4dFBhZ2UoKVxuICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXG4gICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XG4gIH07XG5cbiAgRFMubG9hZFByZXZpb3VzUGFnZSA9ICgpID0+IHtcbiAgICBjb21wb25lbnQuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KTtcbiAgICByZXR1cm4gRFMucHJldmlvdXNQYWdlKClcbiAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxuICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xuICB9O1xuXG4gIERTLmxvYWRNb3JlID0gKCkgPT4ge1xuICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pO1xuICAgIHJldHVybiBEUy5uZXh0UGFnZSgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBwcm9jZXNzRGF0YShyZXNwb25zZSwgJ2FwcGVuZCcpKVxuICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xuICB9O1xuXG4gIERTLmluaXRpYWxMb2FkID0gKCkgPT4ge1xuICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pO1xuICAgIHJldHVybiBEUy5pbml0aWFsRGF0YUxvYWQoKVxuICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXG4gICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XG4gIH07XG5cbiAgRFMuZ2V0UGFnZUluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgaGFzUGFnZUluZm8gPSBEUy5wYWdlSW5mbyAmJiBEUy5zb3J0aW5nUGFnaW5nVmFsdWVzICYmIERTLnNvcnRpbmdQYWdpbmdWYWx1ZXMudG90YWxIaXRzO1xuICAgIHJldHVybiBoYXNQYWdlSW5mbyA/IGAke0RTLnBhZ2VJbmZvfSBvZiAke0RTLnNvcnRpbmdQYWdpbmdWYWx1ZXMudG90YWxIaXRzfWAgOiAnJztcbiAgfTtcblxuICBEUy5jb25maWcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNvbmZpZyAhPSBudWxsID8gY29uZmlnIDogaW5pdGlhbGlzZUNvbmZpZyhvcHRpb25zLmNvbmZpZylcbiAgfTtcblxuICByZXR1cm4gRFNcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EU0Fic3RyYWN0aW9uLmpzIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzLCBQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWcgZnJvbSAnUHJvcG9ydGlvbmFsSW1hZ2UnO1xyXG5cclxuY29uc3QgTUVESUFfVFlQRVMgPSBbJ2ltYWdlJywgJ2F1ZGlvJywgJ3ZpZGVvJ107XHJcblxyXG5jbGFzcyBJbWFnZUdyaWRUaWxlIGV4dGVuZHMgUHVyZUNvbXBvbmVudHtcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgdGlsZSBmb3IgaW1hZ2UgbGlzdFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5pbWFnZSAtIGltYWdlIHVybFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlciAtIGEgcGxhY2Vob2xkZXIgaW1hZ2VcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMucGxhY2Vob2xkZXJTaXppbmcgLSBTZXRzIGEgc2l6aW5nIG9wdGlvbiBmb3IgdGhlIHBsYWNlaG9sZGVyLiBCeSBkZWZhdWx0IGl0J3MgdGhlIHNhbWUgYXMgZm9yIHRoZSBgc3JjYCBpbWFnZSwgYnV0IHNldCB0byBgaW5pdGlhbGAgb3Igb3RoZXIgdmFsaWQgYGJhY2tncm91bmQtc2l6ZWAgdmFsdWUgdG8gb3ZlcnJpZGUuXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLm1lZGlhdHlwZSAtIGEgZGVmYXVsdCBtZWRpYSBpY29uIGluc3RlYWQgb2YgdGhlIHBsYWNlaG9sZGVyIGltYWdlOiBvbmUgb2YgYGltYWdlYCxgYXVkaW9gLGB2aWRlb2BcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmljb25Db2xvcj1cIiNjY2NjY2NcIl0gLSBkZWZhdWx0IHBsYWNlaG9sZGVyIG1lZGlhIGljb24gY29sb3JcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmljb25TaXplPTQ4XSAtIGRlZmF1bHQgcGxhY2Vob2xkZXIgbWVkaWEgaWNvbiBzaXplXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5hc3BlY3Q9XCIxNjo5XCJdIC0gYXNwZWN0IHJhdGlvIG9mIHRoZSBpbWFnZSB0byBiZSBpbiB0aGUgdGlsZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnRpdGxlIC0gdGl0bGUgb2YgdGhlIHZpZGVvXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmRlc2NyaXB0aW9uIC0gZGVzY3JpcHRpb24gb2YgdGhlIHZpZGVvXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy5hY3Rpb25JY29uIC0gaWNvbiB0byBkaXNwbGF5IGFzIHRoZSBhY3Rpb24gaWNvbi4gSXQgYWxzbyBoYXMgdG8gaGF2ZSBhIGNhbGxiYWNrIGF0dGFjaGVkIHRvIGl0IHdoZW4gcGFzc2VkLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLm9uU2VsZWN0IC0gY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWQgd2hlbiB0aGUgbGluayBpcyBjbGlja2VkXHJcbiAgICogKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGFjdGlvbkJ1dHRvbiA9IG51bGw7XHJcbiAgICBjb25zdCB7YWN0aW9uSWNvbixhY3Rpb25JY29uQ2xpY2ssb25TZWxlY3QsYXNwZWN0LHRpdGxlLHBsYWNlaG9sZGVyU2l6aW5nLGltYWdlLGRlc2NyaXB0aW9ufT10aGlzLnByb3BzO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aW9uSWNvbikge1xyXG4gICAgICBhY3Rpb25CdXR0b24gPSAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1lZGl0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1hY3Rpb24taWNvbiByaXBwbGVcIiBvbkNsaWNrPXthY3Rpb25JY29uQ2xpY2t9PnthY3Rpb25JY29ufTwvZGl2PlxyXG4gICAgICA8L2Rpdj4pXHJcbiAgICAgIDtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tY292ZXJcIiBvbkNsaWNrPXtvblNlbGVjdH0+XHJcbiAgICAgICAgICA8SW1nXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgIGFzcGVjdD17YXNwZWN0fVxyXG4gICAgICAgICAgICBzaXppbmc9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgIHByZWxvYWQ9e3RydWV9XHJcbiAgICAgICAgICAgIGZhZGU9e3RydWV9XHJcbiAgICAgICAgICAgIGFsdD17dGl0bGV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLl9jb21wdXRlVGlsZVR5cGUoKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXJTaXppbmc9e3BsYWNlaG9sZGVyU2l6aW5nfVxyXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tbWV0YVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLXRpdGxlIGVsbGlwc2lzXCIgb25DbGljaz17b25TZWxlY3R9Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1kZXNjcmlwdGlvbiBlbGxpcHNpc1wiPntkZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2FjdGlvbkJ1dHRvbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBfY29tcHV0ZVRpbGVUeXBlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qge3BsYWNlaG9sZGVyLG1lZGlhdHlwZSxpY29uU2l6ZSxpY29uQ29sb3J9ID0gdGhpcy5wcm9wcztcclxuICAgICAgaWYgKCFwbGFjZWhvbGRlciAmJiBtZWRpYXR5cGUpIHtcclxuICAgICAgICBpZiAoTUVESUFfVFlQRVMuaW5kZXhPZihtZWRpYXR5cGUpID09PSAtMSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgdHlwZSBcIiR7bWVkaWF0eXBlfVwiIGlzIHNwZWNpZmllZGApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpY29uID0gSW1hZ2VHcmlkVGlsZS5pY29uU2VydmVyKG1lZGlhdHlwZSwgaWNvblNpemUsIGljb25Db2xvcik7XHJcbiAgICAgICAgcmV0dXJuICdkYXRhOmltYWdlL3N2Zyt4bWwsJyArIGVzY2FwZShpY29uKTtcclxuICAgICAgfSBlbHNlIGlmKCEhcGxhY2Vob2xkZXIpe1xyXG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnZGF0YTppbWFnZS9zdmcreG1sLCcgKyBlc2NhcGUoSW1hZ2VHcmlkVGlsZS5pY29uU2VydmVyKCd1bmtub3duJywgaWNvblNpemUsIGljb25Db2xvcikpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gaWNvbiB3aXRoIGEgY29ycmVjdCBmaWxsIGNvbG9yXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBpY29uIG5hbWUgKG9uZSBvZiBgaW1hZ2VgLCBgdmlkZW9gLCBgYXVkaW9gKVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbc2l6ZT0yNF0gLSBpY29uIHNpemUgaW4gcGl4ZWxzXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtmaWxsPVwiI2NjY2NjY1wiXSAtIHZhbGlkIENTUyBjb2xvciBkZWNsYXJhdGlvblxyXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAgICogKi9cclxuICBzdGF0aWMgaWNvblNlcnZlcihuYW1lLCBzaXplID0gNDgsIGZpbGwgPSBcIiNjY2NjY2NcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWNvbnMgPSB7XHJcbiAgICAgICAgaW1hZ2U6IGA8cGF0aCBkPVwiTTIxIDE5VjVjMC0xLjEtLjktMi0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnpNOC41IDEzLjVsMi41IDMuMDFMMTQuNSAxMmw0LjUgNkg1bDMuNS00LjV6XCIvPmAsXHJcbiAgICAgICAgYXVkaW86IGA8cGF0aCBkPVwiTTEyIDN2MTAuNTVjLS41OS0uMzQtMS4yNy0uNTUtMi0uNTUtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00VjdoNFYzaC02elwiLz5gLFxyXG4gICAgICAgIHZpZGVvOiBgPHBhdGggZD1cIk0xOCA0bDIgNGgtM2wtMi00aC0ybDIgNGgtM2wtMi00SDhsMiA0SDdMNSA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRoLTR6XCIvPmAsXHJcbiAgICAgICAgdW5rbm93bjogYDxwYXRoIGQ9XCJNMjEgNXY2LjU5bC0zLTMuMDEtNCA0LjAxLTQtNC00IDQtMy0zLjAxVjVjMC0xLjEuOS0yIDItMmgxNGMxLjEgMCAyIC45IDIgMnptLTMgNi40MmwzIDMuMDFWMTljMCAxLjEtLjkgMi0yIDJINWMtMS4xIDAtMi0uOS0yLTJ2LTYuNThsMyAyLjk5IDQtNCA0IDQgNC0zLjk5elwiLz5gLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoIWljb25zW25hbWVdKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpY29uIFwiJHtuYW1lfVwiIGlzIG5vdCBvbiB0aGUgbGlzdGApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBgPHN2ZyBmaWxsPVwiJHtmaWxsfVwiIGhlaWdodD1cIiR7c2l6ZX1cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIke3NpemV9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiR7aWNvbnNbbmFtZV19PC9zdmc+YFxyXG4gICAgfSBjYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5JbWFnZUdyaWRUaWxlLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZSAgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFjZWhvbGRlciAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFjZWhvbGRlclNpemluZzogUHJvcFR5cGVzLm9uZU9mKFsnY29udGFpbicsICdjb3ZlcicsICdpbml0aWFsJ10pLFxyXG4gIG1lZGlhdHlwZSAgICAgICAgOiBQcm9wVHlwZXMub25lT2YoTUVESUFfVFlQRVMpLFxyXG4gIGljb25Db2xvciAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGljb25TaXplICAgICAgICAgOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGFzcGVjdCAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRpdGxlICAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGFjdGlvbkljb24gICAgICAgOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvblNlbGVjdCAgICAgICAgIDogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuXHJcbkltYWdlR3JpZFRpbGUuZGVmYXVsdFByb3BzID0ge1xyXG4gIGljb25Db2xvcjogXCIjY2NjY2NjXCIsXHJcbiAgaWNvblNpemUgOiA0OCxcclxuICBhc3BlY3QgICA6IFwiMTY6OVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHcmlkVGlsZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VHcmlkVGlsZS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2VHcmlkVGlsZSBmcm9tICcuLi9JbWFnZUdyaWRUaWxlJztcclxuXHJcblxyXG4vKipcclxuICogYEltYWdlR3JpZGAgaXMgYSBzdGF0ZWxlc3MgUmVhY3QgY29tcG9uZW50IHRoYXQgYWxsb3dzIHRvIGNvbXB1dGUgYW4gYXJyYXkgb2YgSW1hZ2VHcmlkVGlsZXMgZnJvbSBgaXRlbXNgIHBhc3NlZCBpbiBwcm9wc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMuaXRlbXMgLSBhbiBhcnJheSBvZiBpdGVtcyBge2lkOk51bWJlcnxTdHJpbmcsIGltYWdlOlN0cmluZywgbWVkaWF0eXBlOj9TdHJpbmcsIHBsYWNlaG9sZGVyOj9TdHJpbmcsIHRpdGxlOlN0cmluZyxkZXNjcmlwdGlvbjpTdHJpbmd9YFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuYXNwZWN0IC0gYXNwZWN0IHJhdGlvIGZvciB0aGUgSW1hZ2VHcmlkVGlsZSBpbWFnZVxyXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gcHJvcHMuYWN0aW9uSWNvbiAtIGFjdGlvbiBpY29uIEpTWCB3aXRoIGEgYm91bmQgaGFuZGxlclxyXG4gKiBAcGFyYW0gez9TdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyU2l6aW5nIC0gU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlci4gQnkgZGVmYXVsdCBpdCdzIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNyY2AgaW1hZ2UsIGJ1dCBzZXQgdG8gYGluaXRpYWxgIG9yIG90aGVyIHZhbGlkIGBiYWNrZ3JvdW5kLXNpemVgIHZhbHVlIHRvIG92ZXJyaWRlLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblNlbGVjdCAtIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhbiBpdGVtIGlzIGNsaWNrZWQgb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHByb3BzLmR1bW15SXRlbXMgLSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkIG9uXHJcbiAqICovXHJcbmNsYXNzIEltYWdlR3JpZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG5cclxuICBpdGVtQ2xpY2tIYW5kbGVyID0gKGl0ZW0pID0+IChldmVudCkgPT4gdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtKTtcclxuICBlZGl0SXRlbSA9IGl0ZW09PiB0aGlzLnByb3BzLmFjdGlvbkljb25DbGljayhpdGVtKVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtpdGVtcywgZHVtbXlJdGVtcywgYXNwZWN0LCBwbGFjZWhvbGRlclNpemluZywgYWN0aW9uSWNvbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRcIj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgPEltYWdlR3JpZFRpbGVcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cclxuICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICBtZWRpYXR5cGU9e2l0ZW0ubWVkaWF0eXBlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpdGVtLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyU2l6aW5nPXtpdGVtLmltYWdlP3BsYWNlaG9sZGVyU2l6aW5nOidpbml0aWFsJ31cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBhY3Rpb25JY29uPXt0eXBlb2YgYWN0aW9uSWNvbj09PSdmdW5jdGlvbic/YWN0aW9uSWNvbihpdGVtKTpudWxsfVxyXG4gICAgICAgICAgICAgIGFjdGlvbkljb25DbGljaz17dGhpcy5lZGl0SXRlbShpdGVtKX1cclxuICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5pdGVtQ2xpY2tIYW5kbGVyKGl0ZW0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAge2R1bW15SXRlbXMgJiYgdGhpcy5yZW5kZXJEdW1teUl0ZW1zKGR1bW15SXRlbXMpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG5cclxuICByZW5kZXJEdW1teUl0ZW1zKGNvdW50KSB7XHJcbiAgICBjb25zdCBkdW1teUl0ZW1zID0gW107XHJcbiAgICB3aGlsZSAoY291bnQtLSkge1xyXG4gICAgICBkdW1teUl0ZW1zLnB1c2goPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlXCIga2V5PXtgZHVtbXkke2NvdW50fWB9Lz4pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZHVtbXlJdGVtc1xyXG4gIH1cclxufVxyXG5cclxuSW1hZ2VHcmlkLnByb3BUeXBlcyA9IHtcclxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxyXG4gIGFzcGVjdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhY3Rpb25JY29uOiBQcm9wVHlwZXMuZWxlbWVudCxcclxuICBhY3Rpb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHBsYWNlaG9sZGVyU2l6aW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGR1bW15SXRlbXM6IFByb3BUeXBlcy5udW1iZXJcclxufTtcclxuXHJcbkltYWdlR3JpZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZHVtbXlJdGVtczogMTJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JpZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlR3JpZC9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChjb25maWcpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IGNvbmZpZy5wYWdpbmF0aW9uO1xyXG4gICAgICAgICAgICBpZiAocGFnaW5hdGlvbiA9PT0gJ2NvbnRpbnVvdXMnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250aW51b3VzTmF2aWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5nTmF2aWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29udGludW91c05hdmlnYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgeyBsb2FkTW9yZSwgZGlzYWJsZU5leHRCdXR0b24gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Sb3dcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBmbGF0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2FkTW9yZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZU5leHRCdXR0b259XHJcbiAgICAgICAgICAgICAgICA+TG9hZCBtb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcGFnaW5nTmF2aWdhdGlvbigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGxvYWRQcmV2aW91c1BhZ2UsXHJcbiAgICAgICAgICAgIGxvYWROZXh0UGFnZSxcclxuICAgICAgICAgICAgZGlzYWJsZU5leHRCdXR0b24sXHJcbiAgICAgICAgICAgIGRpc2FibGVQcmV2QnV0dG9uLFxyXG4gICAgICAgICAgICBwYWdlSW5mbyxcclxuICAgICAgICAgICAgdHJhbnNsYXRlXHJcbiAgICAgICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uUm93XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsQnV0dG9uIGFjY2VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9hZFByZXZpb3VzUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZVByZXZCdXR0b259XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnUkVQT1JUX1NJTkdMRVZJRVdfUFJFVklPVVMnKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gYWNjZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2FkTmV4dFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVOZXh0QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ1JFUE9SVF9TSU5HTEVWSUVXX05FWFQnKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntwYWdlSW5mb308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RWaWRlby9OYXZpZ2F0aW9uLmpzIiwiLy9AZmxvd1xuaW1wb3J0IHR5cGUge1N0YXRlLCBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnY29yZS1qcy9saWJyYXJ5L2VzNi9wcm9taXNlJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZUdyaWQgZnJvbSBcIi4uL0ltYWdlR3JpZFwiO1xuaW1wb3J0IFNpbmdsZVZpZXcgZnJvbSBcIi4uL1NpbmdsZVZpZXdcIjtcbmltcG9ydCBEU0Fic3RyYWN0aW9uIGZyb20gJy4uL0RTQWJzdHJhY3Rpb24nXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nXG5pbXBvcnQgU2luZ2xlVmlld1Jlc3BvbnNlcyBmcm9tICcuLi9TaW5nbGVWaWV3L1Jlc3BvbnNlcydcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFZpZGVvIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBEUyA9IERTQWJzdHJhY3Rpb24oe1xuICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcsXG4gICAgdGh1bWJzUGxhY2Vob2xkZXI6IHRoaXMucHJvcHMudGh1bWJzUGxhY2Vob2xkZXIsXG4gICAgY29tcG9uZW50OiB0aGlzXG4gIH0pO1xuXG4gIHN0YXRlID0ge1xuICAgIGl0ZW1zOiBudWxsLFxuICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIGNvbmZpZzogbnVsbCxcbiAgICBzaW5nbGVWaWV3TW9kZTogJ3ZpZXcnLFxuICAgIHNpbmdsZVZpZXc6IHtcbiAgICAgIGxpbms6ICcnXG4gICAgfSxcbiAgICBzaW5nbGVWaWV3VmlzaWJsZTogZmFsc2UsXG4gICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2OiBmYWxzZSxcbiAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHQ6IGZhbHNlLFxuICB9O1xuXG4gIHRyYW5zbGF0ZSA9IHRoaXMuRFMuaTE4bi5iaW5kKHRoaXMuRFMpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW1zLCBzaW5nbGVWaWV3VmlzaWJsZSwgZXJyb3IsIGNvbmZpZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgcmVuZGVyID0gbnVsbDtcbiAgICBpZiAoIWVycm9yICYmIEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmVuZGVyID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YEdyaWRDb250YWluZXIgJHshc2luZ2xlVmlld1Zpc2libGUgPyAnR3JpZFZpZXcnIDogJyd9YH0+XG4gICAgICAgICAge3RoaXMucmVuZGVyU2luZ2xlVmlldygpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkQ29udGFpbmVyXCIgc3R5bGU9e3sgZGlzcGxheTogIXNpbmdsZVZpZXdWaXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cbiAgICAgICAgICAgIDxJbWFnZUdyaWRcbiAgICAgICAgICAgICAgYXNwZWN0PVwiMTY6OVwiXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0fVxuICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgIGFjdGlvbkljb249e2NvbmZpZy5jYW5FZGl0ID8gdGhpcy5hY3Rpb25JY29uIDogbnVsbH1cbiAgICAgICAgICAgICAgYWN0aW9uSWNvbkNsaWNrPXt0aGlzLmFjdGlvbkljb25DbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJOYXZpZ2F0aW9uKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5EUykge1xuICAgICAgICByZW5kZXIgPSAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHcmlkQ29udGFpbmVyIEltYWdlR3JpZFwiPnt0aGlzLmRhdGFMb2FkaW5nTWVzc2FnZSgpfTwvZGl2PlxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hpdGxpc3REYXRhc291cmNlIGlzIG5vdCBhdmFpbGFibGUnKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVuZGVyXG4gIH1cblxuICByZW5kZXJOYXZpZ2F0aW9uKCkge1xuICAgIGNvbnN0IHsgbG9hZFByZXZpb3VzUGFnZSwgbG9hZE5leHRQYWdlLCBsb2FkTW9yZSwgZGlzYWJsZU5leHRCdXR0b24sIGRpc2FibGVQcmV2QnV0dG9uLCBnZXRQYWdlSW5mbyB9ID0gdGhpcy5EUztcbiAgICBjb25zdCBuYXZpZ2F0aW9uUHJvcHMgPSB7XG4gICAgICBsb2FkUHJldmlvdXNQYWdlLFxuICAgICAgbG9hZE5leHRQYWdlLFxuICAgICAgbG9hZE1vcmUsXG4gICAgICBkaXNhYmxlTmV4dEJ1dHRvbixcbiAgICAgIGRpc2FibGVQcmV2QnV0dG9uLFxuICAgICAgcGFnZUluZm86IGdldFBhZ2VJbmZvKCksXG4gICAgICBjb25maWc6IHRoaXMuc3RhdGUuY29uZmlnLFxuICAgICAgdHJhbnNsYXRlOiB0aGlzLnRyYW5zbGF0ZVxuICAgIH1cblxuICAgIHJldHVybiA8TmF2aWdhdGlvbiB7Li4ubmF2aWdhdGlvblByb3BzfSAvPlxuICB9XG5cbiAgcmVuZGVyU2luZ2xlVmlldygpIHtcbiAgICBjb25zdCB7IHNpbmdsZVZpZXdWaXNpYmxlLCBzaW5nbGVWaWV3LCBzaW5nbGVWaWV3RGlzYWJsZVByZXYsIHNpbmdsZVZpZXdEaXNhYmxlTmV4dCwgc2luZ2xlVmlld01vZGUsIGxvYWRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIHNpbmdsZVZpZXdWaXNpYmxlID8gKFxuICAgICAgPFNpbmdsZVZpZXdcbiAgICAgICAgcmV0dXJuVG9HcmlkQWN0aW9uPXt0aGlzLnJldHVyblRvR3JpZH1cbiAgICAgICAgbG9hZFByZXZpb3VzSXRlbT17dGhpcy5sb2FkUHJldmlvdXNJdGVtfVxuICAgICAgICBsb2FkTmV4dEl0ZW09e3RoaXMubG9hZE5leHRJdGVtfVxuICAgICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXY9e3NpbmdsZVZpZXdEaXNhYmxlUHJldn1cbiAgICAgICAgc2luZ2xlVmlld0Rpc2FibGVOZXh0PXtzaW5nbGVWaWV3RGlzYWJsZU5leHR9XG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICA+XG4gICAgICAgIHtzaW5nbGVWaWV3TW9kZSA9PT0gJ2VkaXQnID9cbiAgICAgICAgICAoPGlmcmFtZSBjbGFzc05hbWU9XCJyZW5kZXJBcmVhXCIgc3JjPXtzaW5nbGVWaWV3Lmxpbmt9IC8+KVxuICAgICAgICAgIDpcbiAgICAgICAgICAoPFNpbmdsZVZpZXdSZXNwb25zZXMgZGF0YT17c2luZ2xlVmlld30gY29sdW1ucz17dGhpcy5pbmRpdmlkdWFsUmVjb3Jkc1F1ZXN0aW9uSWRzfSBjb2x1bW5zTWFwPXt0aGlzLmluZGl2aWR1YWxSZWNvcmRzS2V5TGFiZWxzfSAvPilcbiAgICAgICAgfVxuICAgICAgPC9TaW5nbGVWaWV3PlxuICAgICkgOiBudWxsXG4gIH1cblxuICBnZXQgaW5kaXZpZHVhbFJlY29yZHNRdWVzdGlvbklkcygpIHtcbiAgICBjb25zdCB7IGluZGl2aWR1YWxSZWNvcmRzIH0gPSB0aGlzLkRTLmNvbmZpZygpO1xuICAgIHJldHVybiBpbmRpdmlkdWFsUmVjb3JkcyAhPSBudWxsICYmIEFycmF5LmlzQXJyYXkoaW5kaXZpZHVhbFJlY29yZHMpID8gaW5kaXZpZHVhbFJlY29yZHMgOiBbXVxuICB9XG5cbiAgZ2V0IGluZGl2aWR1YWxSZWNvcmRzS2V5TGFiZWxzKCkge1xuICAgIHJldHVybiB7IC4uLnRoaXMuZ2V0TGFiZWxzRm9yTWFpbkZpZWxkcygpLCAuLi50aGlzLmdldExhYmVsc0ZvckluZGl2aWR1YWxSZWNvcmRzKCkgfVxuICB9XG5cbiAgZ2V0TGFiZWxzRm9yTWFpbkZpZWxkcygpIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLkRTLmNvbmZpZygpO1xuICAgIGNvbnN0IG1hcCA9IHt9O1xuICAgIFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nXS5yZXZlcnNlKCkuZm9yRWFjaChrZXkgPT5cbiAgICAgIG1hcFtrZXldID0gdGhpcy5EUy5hbGxDb2x1bW5zLmZpbHRlcihyZWNvcmQgPT5cbiAgICAgICAgcmVjb3JkLmtleSA9PT0gY29uZmlnW2tleV1cbiAgICAgIClbMF0ubGFiZWxcbiAgICApXG4gICAgcmV0dXJuIG1hcDtcbiAgfVxuXG4gIGdldExhYmVsc0ZvckluZGl2aWR1YWxSZWNvcmRzKCkge1xuICAgIGNvbnN0IG1hcCA9IHt9O1xuICAgIGNvbnN0IGlySWRzID0gdGhpcy5pbmRpdmlkdWFsUmVjb3Jkc1F1ZXN0aW9uSWRzO1xuICAgIHRoaXMuRFMuYWxsQ29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICBpZiAoaXJJZHMuaW5kZXhPZihjb2x1bW4ua2V5KSA+IC0xKSB7XG4gICAgICAgIG1hcFtjb2x1bW4ua2V5XSA9IGNvbHVtbi5sYWJlbFxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIG1hcDtcbiAgfVxuXG5cblxuICBkYXRhTG9hZGluZ01lc3NhZ2UoKSB7XG4gICAgbGV0IG1lc3NhZ2U7XG4gICAgY29uc3QgeyBpdGVtcywgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBtZXNzYWdlID0gJ2Vycm9yTG9hZGluZydcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbWVzc2FnZSA9ICdSRVBPUlRfU0lOR0xFVklFV19OT1RISU5HRk9VTkQnXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSAnbG9hZGluZ0RhdGEnXG4gICAgfVxuICAgIHJldHVybiB0aGlzLkRTLmkxOG4obWVzc2FnZSlcbiAgfVxuXG4gIHJldHVyblRvR3JpZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiBmYWxzZSxcbiAgICAgIHNpbmdsZVZpZXc6IHtcbiAgICAgICAgbGluazogJydcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgbG9hZFByZXZpb3VzSXRlbSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZUl0ZW1zKCdiYWNrJylcbiAgfVxuXG4gIGxvYWROZXh0SXRlbSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZUl0ZW1zKCdmb3J3YXJkJylcbiAgfVxuXG4gIG5hdmlnYXRlSXRlbXMoZGlyZWN0aW9uOiAnZm9yd2FyZCcgfCAnYmFja3dhcmQnKTogdm9pZCB7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcztcbiAgICBjb25zdCBwYWdpbmF0aW9uVHlwZSA9IHRoaXMuc3RhdGUuY29uZmlnLnBhZ2luYXRpb247XG4gICAgbGV0IGl0ZW1zTGVuZ3RoID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBjdXJyZW50U2luZ2xlVmlld0l0ZW1JbmRleCA9IGl0ZW1zLmluZGV4T2YodGhpcy5zdGF0ZS5zaW5nbGVWaWV3KTtcbiAgICBjb25zdCBuZXh0SW5kZXggPSBkaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4ICsgMSA6IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4IC0gMTtcblxuICAgIGNvbnN0IGxvYWRJdGVtRnJvbVByZXZpb3VzUGFnZSA9IG5leHRJbmRleCA8IDAgJiYgIXRoaXMuRFMuZGlzYWJsZVByZXZCdXR0b247XG4gICAgY29uc3QgbG9hZEl0ZW1Gcm9tTmV4dFBhZ2UgPSBuZXh0SW5kZXggPiBpdGVtc0xlbmd0aCAmJiAhdGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbjtcblxuICAgIGxldCBwcm9taXNlZEl0ZW1zID0gUHJvbWlzZS5yZXNvbHZlKGl0ZW1zKTtcbiAgICAvLyBhc3NpZ24gaXRlbXMgdG8gdGhlbmFibGUgcHJvbWlzZXMgaWYgcmVxdWVzdGVkIGl0ZW0gaXMgb3V0c2lkZSBvZiBkYXRhIGJvdW5kYXJpZXNcbiAgICBpZiAobG9hZEl0ZW1Gcm9tUHJldmlvdXNQYWdlKSB7XG4gICAgICBwcm9taXNlZEl0ZW1zID0gdGhpcy5EUy5sb2FkUHJldmlvdXNQYWdlKCk7XG4gICAgfSBlbHNlIGlmIChsb2FkSXRlbUZyb21OZXh0UGFnZSkge1xuICAgICAgcHJvbWlzZWRJdGVtcyA9IHBhZ2luYXRpb25UeXBlICE9PSAnY29udGludW91cycgPyB0aGlzLkRTLmxvYWROZXh0UGFnZSgpIDogdGhpcy5EUy5sb2FkTW9yZSgpO1xuICAgIH1cblxuICAgIHByb21pc2VkSXRlbXMudGhlbigoKSA9PiB7XG4gICAgICBsZXQgc2luZ2xlVmlld0RhdGE7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gcHJldlN0YXRlLml0ZW1zO1xuICAgICAgICBjb25zdCBhdERhdGFMZWZ0Qm91bmRhcnlDYW5Mb2FkID0gbmV4dEluZGV4IDwgMCAmJiAhcHJldlN0YXRlLnNpbmdsZVZpZXdEaXNhYmxlUHJldjtcbiAgICAgICAgY29uc3QgYXREYXRhUmlnaHRCb3VuZGFyeUNhbkxvYWQgPSBuZXh0SW5kZXggPiBpdGVtc0xlbmd0aCAmJiAhcHJldlN0YXRlLnNpbmdsZVZpZXdEaXNhYmxlTmV4dCAmJiBwYWdpbmF0aW9uVHlwZSAhPT0gJ2NvbnRpbnVvdXMnO1xuICAgICAgICBpZiAoYXREYXRhTGVmdEJvdW5kYXJ5Q2FuTG9hZCkge1xuICAgICAgICAgIHNpbmdsZVZpZXdEYXRhID0gbmV3SXRlbXNbbmV3SXRlbXMubGVuZ3RoIC0gMV1cbiAgICAgICAgfSBlbHNlIGlmIChhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCkge1xuICAgICAgICAgIHNpbmdsZVZpZXdEYXRhID0gbmV3SXRlbXNbMF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaW5nbGVWaWV3RGF0YSA9IG5ld0l0ZW1zW25leHRJbmRleF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4udGhpcy5nZXRTaW5nbGVWaWV3TmF2U3RhdGUobmV3SXRlbXMuaW5kZXhPZihzaW5nbGVWaWV3RGF0YSkpLFxuICAgICAgICAgIHNpbmdsZVZpZXc6IHNpbmdsZVZpZXdEYXRhLFxuICAgICAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U2luZ2xlVmlld05hdlN0YXRlKGN1cnJlbnRJdGVtSW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcztcbiAgICBsZXQgc2luZ2xlVmlld0Rpc2FibGVOZXh0ID0gZmFsc2UsXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXYgPSBmYWxzZTtcbiAgICAvKmlmIG5ldyBpdGVtIGluZGV4IGlzIDAgb3IgbGVzcyBhbmQgaXQncyB0aGUgZmlyc3QgaXRlbSBpbiBkYXRhc2V0LlxuICAgIElmIGhpdGxpc3QgcGFnaW5hdGlvbiBoYXMgZGlzYWJsZVByZXZCdXR0b24gdGhlbiBidXR0b24gbmVlZHMgdG8gYmUgZGlzYWJsZWQuXG4gICAgQnV0IGluIGNhc2Ugb2YgY29udGludW91cyBuYXZpZ2F0aW9uIGhpdGxpc3Qgc2VuZHMgZGlzYWJsZVByZXZCdXR0b24gZm9yIHRoZSBzZWNvbmQgcGFnZSBhcyBmYWxzZSwgYnV0IHdlIGtub3cgdGhhdCB0aGVyZSdzIG5vIGRhdGEgYmV5b25kIGl0ZW1bMF0sIHNvIHdlIGlnbm9yZSBoaXRsaXN0IGZsYWcuXG4gICAgKi9cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50SXRlbUluZGV4KVxuICAgIGlmIChjdXJyZW50SXRlbUluZGV4IDw9IDAgJiYgKHRoaXMuc3RhdGUuY29uZmlnLnBhZ2luYXRpb249PT0nY29udGludW91cycgfHwgdGhpcy5EUy5kaXNhYmxlUHJldkJ1dHRvbikpIHtcbiAgICAgIHNpbmdsZVZpZXdEaXNhYmxlUHJldiA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjdXJyZW50SXRlbUluZGV4ID49IGl0ZW1zLmxlbmd0aCAtIDEgJiYgdGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbikge1xuICAgICAgc2luZ2xlVmlld0Rpc2FibGVOZXh0ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHNpbmdsZVZpZXdEaXNhYmxlUHJldixcbiAgICAgIHNpbmdsZVZpZXdEaXNhYmxlTmV4dFxuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0ID0gKGl0ZW0pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC4uLnRoaXMuZ2V0U2luZ2xlVmlld05hdlN0YXRlKHRoaXMuc3RhdGUuaXRlbXMuaW5kZXhPZihpdGVtKSksXG4gICAgICBzaW5nbGVWaWV3OiBpdGVtLFxuICAgICAgc2luZ2xlVmlld1Zpc2libGU6IHRydWUsXG4gICAgICBzaW5nbGVWaWV3TW9kZTogJ3ZpZXcnXG4gICAgfSlcbiAgfVxuXG4gIGFjdGlvbkljb24gPSAoaXRlbSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8c3ZnIGNsYXNzTmFtZT1cImljb25cIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3pcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgKVxuICB9XG5cbiAgYWN0aW9uSWNvbkNsaWNrID0gKGl0ZW0pID0+ICgpID0+IHRoaXMuc2V0U3RhdGUoe1xuICAgIC4uLnRoaXMuZ2V0U2luZ2xlVmlld05hdlN0YXRlKHRoaXMuc3RhdGUuaXRlbXMuaW5kZXhPZihpdGVtKSksXG4gICAgc2luZ2xlVmlldzogaXRlbSxcbiAgICBzaW5nbGVWaWV3VmlzaWJsZTogdHJ1ZSxcbiAgICBzaW5nbGVWaWV3TW9kZTogJ2VkaXQnXG4gIH0pXG5cblxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RWaWRlby9pbmRleC5qcyIsIi8vQGZsb3dcclxuaW1wb3J0IHR5cGUge05hdkJ1dHRvblByb3BzfSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1ESWNvbiBmcm9tICdNREljb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2QnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxOYXZCdXR0b25Qcm9wcywgYW55PiB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpY29uLCAuLi53cmFwcGVyIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0tbmF2LWJ1dHRvbiByaXBwbGVcIiB7Li4ud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8TURJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2luZ2xlVmlldy9OYXZCdXR0b24uanMiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zZXMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSwgY29sdW1ucywgY29sdW1uc01hcCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgbWVkaWEgPSBbJ2ltYWdlJywgJ3ZpZGVvJywgJ2F1ZGlvJ107XG4gICAgICAgIGlmKGRhdGEpe1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0ZSA9IGRhdGEuaW50ZXJ2aWV3X3N0YXJ0IHx8IGRhdGEuaW50ZXJ2aWV3X2VuZDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZW5kZXJBcmVhIFJlc3BvbnNlc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1wYWdlVGl0bGVcIj4ge2RhdGEudGl0bGV9IDwvZGl2Pn1cbiAgICAgICAgICAgICAgICB7ISFyZXNwb25zZURhdGUgJiYgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLWxhYmVsXCI+IHtyZXNwb25zZURhdGV9IDwvZGl2Pn1cbiAgICAgICAgICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tdmFsdWVcIj4ge2RhdGEuZGVzY3JpcHRpb259IDwvZGl2Pn1cbiAgICAgICAgICAgICAgICB7bWVkaWEubWFwKG1lZGlhSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVttZWRpYUl0ZW1dID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1sYWJlbFwiPntjb2x1bW5zTWFwW21lZGlhSXRlbV19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLXZhbHVlXCI+e3RoaXNbYF8ke21lZGlhSXRlbX1SZW5kZXJlcmBdfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge2NvbHVtbnMgIT0gbnVsbCAmJiBjb2x1bW5zLm1hcChxSUQgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbcUlEXSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tbGFiZWxcIj57Y29sdW1uc01hcFtxSURdfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS12YWx1ZVwiPntkYXRhW3FJRF19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ25vIGRhdGEgZm9yIGluZGl2aWR1YWxSZXNwb25zZScpO1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgX2ltYWdlUmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiA8aW1nIGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tbWVkaWFcIiBzcmM9e3RoaXMucHJvcHMuZGF0YS5pbWFnZX0gLz5cbiAgICB9XG4gICAgZ2V0IF92aWRlb1JlbmRlcmVyKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhLnZpZGVvO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHZpZGVvIGtleT17ZGF0YX0gY29udHJvbHMgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1tZWRpYVwiPlxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtkYXRhfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgICAgICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgdmlkZW8gdGFnLlxuICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgIClcbiAgICB9XG4gICAgZ2V0IF9hdWRpb1JlbmRlcmVyKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhLmF1ZGlvO1xuICAgICAgICByZXR1cm4gPGF1ZGlvIGtleT17ZGF0YX0gc3JjPXtkYXRhfSB0eXBlPVwiYXVkaW8vbXA0XCIgY29udHJvbHMgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS1tZWRpYVwiIC8+XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvUmVzcG9uc2VzLmpzIiwiLy9AZmxvd1xuaW1wb3J0IHR5cGUge1Byb3BzLCBOYXZCYXJQcm9wcyB9IGZyb20gJy4vdHlwZXMnXG5cbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2QnV0dG9uIGZyb20gJy4vTmF2QnV0dG9uJ1xuaW1wb3J0IHsgaWNfYXJyb3dfYmFjaywgaWNfYXJyb3dfZm9yd2FyZCwgaWNfdmlld19tb2R1bGUsaWNfaG91cmdsYXNzIH0gZnJvbSAnLi4vaWNvbnMnO1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PE5hdkJhclByb3BzLHZvaWQ+IHtcbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBsb2FkUHJldmlvdXNJdGVtLCByZXR1cm5Ub0dyaWRBY3Rpb24sIGxvYWROZXh0SXRlbSwgc2luZ2xlVmlld0Rpc2FibGVQcmV2LCBzaW5nbGVWaWV3RGlzYWJsZU5leHQsIGxvYWRpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0taGVhZGVyXCI+XG4gICAgICAgIDxOYXZCdXR0b24gZGlzYWJsZWQ9e3NpbmdsZVZpZXdEaXNhYmxlUHJldiB8fCBsb2FkaW5nfSB0aXRsZT1cIlByZXZpb3VzIGl0ZW1cIiBvbkNsaWNrPXtsb2FkUHJldmlvdXNJdGVtfSBpY29uPXshbG9hZGluZz9pY19hcnJvd19iYWNrOmljX2hvdXJnbGFzc30gLz5cbiAgICAgICAgPE5hdkJ1dHRvbiB0aXRsZT1cIlJldHVybiB0byB0aGUgbGlzdFwiIG9uQ2xpY2s9e3JldHVyblRvR3JpZEFjdGlvbn0gaWNvbj17aWNfdmlld19tb2R1bGV9IC8+XG4gICAgICAgIDxOYXZCdXR0b24gZGlzYWJsZWQ9e3NpbmdsZVZpZXdEaXNhYmxlTmV4dCB8fCBsb2FkaW5nfSB0aXRsZT1cIk5leHQgSXRlbVwiIG9uQ2xpY2s9e2xvYWROZXh0SXRlbX0gaWNvbj17IWxvYWRpbmc/aWNfYXJyb3dfZm9yd2FyZDppY19ob3VyZ2xhc3N9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlVmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIHZvaWQ+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjaGlsZHJlbiwgLi4ubmF2QmFyUHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3XCI+XG4gICAgICAgIDxOYXZCYXIgey4uLm5hdkJhclByb3BzfS8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBpY19zdGFyID0gPHBhdGggZD1cIk0xMiAxNy4yN0wxOC4xOCAyMWwtMS42NC03LjAzTDIyIDkuMjRsLTcuMTktLjYxTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMXpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX3N0YXJfYm9yZGVyID0gPHBhdGggZD1cIk0yMiA5LjI0bC03LjE5LS42MkwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjEgMTIgMTcuMjcgMTguMTggMjFsLTEuNjMtNy4wM0wyMiA5LjI0ek0xMiAxNS40bC0zLjc2IDIuMjcgMS00LjI4LTMuMzItMi44OCA0LjM4LS4zOEwxMiA2LjFsMS43MSA0LjA0IDQuMzguMzgtMy4zMiAyLjg4IDEgNC4yOEwxMiAxNS40elwiLz47XG5leHBvcnQgY29uc3QgaWNfYXJyb3dfYmFjayA9IDxwYXRoIGQ9XCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHYtMnpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX2Fycm93X2ZvcndhcmQgPSA8cGF0aCBkPVwiTTEyIDRsLTEuNDEgMS40MUwxNi4xNyAxMUg0djJoMTIuMTdsLTUuNTggNS41OUwxMiAyMGw4LTh6XCIvPjtcbmV4cG9ydCBjb25zdCBpY192aWV3X21vZHVsZSA9IDxwYXRoIGQ9XCJNNCAxMWg1VjVINHY2em0wIDdoNXYtNkg0djZ6bTYgMGg1di02aC01djZ6bTYgMGg1di02aC01djZ6bS02LTdoNVY1aC01djZ6bTYtNnY2aDVWNWgtNXpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX2hvdXJnbGFzcyA9IDxwYXRoIGQ9XCJNNiAydjZoLjAxTDYgOC4wMSAxMCAxMmwtNCA0IC4wMS4wMUg2VjIyaDEydi01Ljk5aC0uMDFMMTggMTZsLTQtNCA0LTMuOTktLjAxLS4wMUgxOFYySDZ6bTEwIDE0LjVWMjBIOHYtMy41bDQtNCA0IDR6bS00LTVsLTQtNFY0aDh2My41bC00IDR6XCIvPjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pY29ucy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMjIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=