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
	
	var store = __webpack_require__(52)('wks');
	var uid = __webpack_require__(55);
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
	
	var freeGlobal = __webpack_require__(65);
	
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(19);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(20);
	var createDesc = __webpack_require__(51);
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
	
	var core = module.exports = { version: '2.5.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(46)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(4);
	
	/** Built-in value references. */
	var _Symbol = root.Symbol;
	
	module.exports = _Symbol;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(13),
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
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(15);
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
/* 18 */
/***/ (function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(7);
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
	
	var eq = __webpack_require__(70);
	
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
	
	var getNative = __webpack_require__(6);
	
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
	
	var _promise = __webpack_require__(78);
	
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
	
	var isObject = __webpack_require__(19);
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
	var has = __webpack_require__(18);
	var TAG = __webpack_require__(2)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(52)('keys');
	var uid = __webpack_require__(55);
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
	
	var getNative = __webpack_require__(6),
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
	
	var baseGetTag = __webpack_require__(14),
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
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(16);
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
/* 44 */
/***/ (function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(3);
	var core = __webpack_require__(10);
	var ctx = __webpack_require__(17);
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
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var document = __webpack_require__(3).document;
	module.exports = document && document.documentElement;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(49);
	var $export = __webpack_require__(45);
	var redefine = __webpack_require__(100);
	var hide = __webpack_require__(8);
	var has = __webpack_require__(18);
	var Iterators = __webpack_require__(12);
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
/* 49 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = true;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 25.4.1.5 NewPromiseCapability(C)
	
	var aFunction = __webpack_require__(15);
	
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
/* 51 */
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(3);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(17);
	var invoke = __webpack_require__(84);
	var html = __webpack_require__(47);
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
	  if (__webpack_require__(16)(process) == 'process') {
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(32);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';
	
	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(6),
	    root = __webpack_require__(4);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;

/***/ }),
/* 57 */
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
/* 58 */
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
/* 59 */
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var castPath = __webpack_require__(63),
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var SetCache = __webpack_require__(57),
	    arraySome = __webpack_require__(124),
	    cacheHas = __webpack_require__(62);
	
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
/* 65 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 66 */
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
/* 67 */
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
/* 68 */
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
/* 69 */
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
/* 70 */
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(73),
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
/* 72 */
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(14),
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
/* 74 */
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayLikeKeys = __webpack_require__(122),
	    baseKeys = __webpack_require__(137),
	    isArrayLike = __webpack_require__(71);
	
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
/* 76 */
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
/* 77 */
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(109);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(110);
	module.exports = __webpack_require__(10).Promise;

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
	var toLength = __webpack_require__(54);
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
	
	var ctx = __webpack_require__(17);
	var call = __webpack_require__(87);
	var isArrayIter = __webpack_require__(86);
	var anObject = __webpack_require__(7);
	var toLength = __webpack_require__(54);
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
	
	module.exports = !__webpack_require__(11) && !__webpack_require__(46)(function () {
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
	var cof = __webpack_require__(16);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(12);
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
	var anObject = __webpack_require__(7);
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
	var descriptor = __webpack_require__(51);
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
	var macrotask = __webpack_require__(53).set;
	var Observer = global.MutationObserver || global.WebKitMutationObserver;
	var process = global.process;
	var Promise = global.Promise;
	var isNode = __webpack_require__(16)(process) == 'process';
	
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
	var anObject = __webpack_require__(7);
	var dPs = __webpack_require__(93);
	var enumBugKeys = __webpack_require__(44);
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
	  __webpack_require__(47).appendChild(iframe);
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
	var anObject = __webpack_require__(7);
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
	var has = __webpack_require__(18);
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
	
	var has = __webpack_require__(18);
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
	var enumBugKeys = __webpack_require__(44);
	
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
	
	var newPromiseCapability = __webpack_require__(50);
	
	module.exports = function (C, x) {
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
	var anObject = __webpack_require__(7);
	var aFunction = __webpack_require__(15);
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
	var isObject = __webpack_require__(19);
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
	
	var classof = __webpack_require__(43);
	var ITERATOR = __webpack_require__(2)('iterator');
	var Iterators = __webpack_require__(12);
	module.exports = __webpack_require__(10).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(79);
	var step = __webpack_require__(90);
	var Iterators = __webpack_require__(12);
	var toIObject = __webpack_require__(33);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(48)(Array, 'Array', function (iterated, kind) {
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
	
	var LIBRARY = __webpack_require__(49);
	var global = __webpack_require__(3);
	var ctx = __webpack_require__(17);
	var classof = __webpack_require__(43);
	var $export = __webpack_require__(45);
	var isObject = __webpack_require__(19);
	var aFunction = __webpack_require__(15);
	var anInstance = __webpack_require__(80);
	var forOf = __webpack_require__(82);
	var speciesConstructor = __webpack_require__(102);
	var task = __webpack_require__(53).set;
	var microtask = __webpack_require__(91)();
	var newPromiseCapabilityModule = __webpack_require__(50);
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
	    return sameConstructor($Promise, C) ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
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
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
	    return promiseResolve(this, x);
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
	__webpack_require__(48)(String, 'String', function (iterated) {
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
	var Iterators = __webpack_require__(12);
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
	
	var getNative = __webpack_require__(6),
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
	
	var getNative = __webpack_require__(6),
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
	
	var getNative = __webpack_require__(6),
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
	    isBuffer = __webpack_require__(72),
	    isIndex = __webpack_require__(66),
	    isTypedArray = __webpack_require__(74);
	
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
	
	var arrayPush = __webpack_require__(59),
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
	
	var arrayPush = __webpack_require__(59),
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
	
	var baseGetTag = __webpack_require__(14),
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
	
	var Stack = __webpack_require__(58),
	    equalArrays = __webpack_require__(64),
	    equalByTag = __webpack_require__(151),
	    equalObjects = __webpack_require__(152),
	    getTag = __webpack_require__(157),
	    isArray = __webpack_require__(5),
	    isBuffer = __webpack_require__(72),
	    isTypedArray = __webpack_require__(74);
	
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
	
	var Stack = __webpack_require__(58),
	    baseIsEqual = __webpack_require__(61);
	
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
	
	var isFunction = __webpack_require__(73),
	    isMasked = __webpack_require__(167),
	    isObject = __webpack_require__(41),
	    toSource = __webpack_require__(69);
	
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
	
	var baseGetTag = __webpack_require__(14),
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
	    matchesStrictComparable = __webpack_require__(68);
	
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
	
	var baseIsEqual = __webpack_require__(61),
	    get = __webpack_require__(198),
	    hasIn = __webpack_require__(199),
	    isKey = __webpack_require__(36),
	    isStrictComparable = __webpack_require__(67),
	    matchesStrictComparable = __webpack_require__(68),
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
	
	var baseGet = __webpack_require__(60);
	
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
	
	var _Symbol = __webpack_require__(13),
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
	
	var SetCache = __webpack_require__(57),
	    arrayIncludes = __webpack_require__(120),
	    arrayIncludesWith = __webpack_require__(121),
	    cacheHas = __webpack_require__(62),
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
	
	var Set = __webpack_require__(56),
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
	
	var getNative = __webpack_require__(6);
	
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
	
	var _Symbol = __webpack_require__(13),
	    Uint8Array = __webpack_require__(116),
	    eq = __webpack_require__(70),
	    equalArrays = __webpack_require__(64),
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
	    keys = __webpack_require__(75);
	
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
	
	var isStrictComparable = __webpack_require__(67),
	    keys = __webpack_require__(75);
	
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
	
	var _Symbol = __webpack_require__(13);
	
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
	    Set = __webpack_require__(56),
	    WeakMap = __webpack_require__(117),
	    baseGetTag = __webpack_require__(14),
	    toSource = __webpack_require__(69);
	
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
	
	var castPath = __webpack_require__(63),
	    isArguments = __webpack_require__(39),
	    isArray = __webpack_require__(5),
	    isIndex = __webpack_require__(66),
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
	
	var _Symbol = __webpack_require__(13),
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
	
	var freeGlobal = __webpack_require__(65);
	
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
	
	var baseGet = __webpack_require__(60);
	
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
	
	var isArrayLike = __webpack_require__(71),
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
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ProportionalImage = __webpack_require__(77);
	
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
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
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
	
	var _MDIcon = __webpack_require__(76);
	
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
/* 220 */
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
/* 221 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 222 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODQ1MTNkNjZjZTY3MTQ1NDRmZGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwid2VicGFjazovLy8uL34vci1yZXBvcnRhbC1iYXNlL3NyYy9yZXBvcnRhbC1iYXNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9NREljb24vZGlzdC9NREljb24uYnVuZGxlLmpzIiwid2VicGFjazovLy8uL34vUHJvcG9ydGlvbmFsSW1hZ2UvZGlzdC9Qcm9wb3J0aW9uYWxJbWFnZS5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZXM2L3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FwcGx5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VGbGF0dGVuLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUhhc0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc01hdGNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5RGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWF0Y2hEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNGbGF0dGVuYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJSZXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zaG9ydE91dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaGFzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9tZW1vaXplLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC90b1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC91bmlvbkJ5LmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3QtZGF0YXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LXNldHVwLmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RTQWJzdHJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlR3JpZFRpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlR3JpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RWaWRlby9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWFjdFZpZGVvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TaW5nbGVWaWV3L05hdkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2luZ2xlVmlldy9SZXNwb25zZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmdsZVZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbImxhdW5jaFZpZGVvSGl0bGlzdCIsImNvbmZpZ05hbWUiLCJ0aHVtYnNQbGFjZWhvbGRlciIsIkVycm9yIiwiVHlwZUVycm9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXBvcnRhbCIsIm1peGluIiwic3RvcmUiLCJyZXF1aXJlIiwidWlkIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJnbG9iYWwiLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwiZnJlZUdsb2JhbCIsImZyZWVTZWxmIiwiT2JqZWN0Iiwicm9vdCIsImlzQXJyYXkiLCJBcnJheSIsImJhc2VJc05hdGl2ZSIsImdldFZhbHVlIiwiZ2V0TmF0aXZlIiwib2JqZWN0Iiwia2V5IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJpc09iamVjdCIsIml0IiwiZFAiLCJjcmVhdGVEZXNjIiwiZiIsImlzT2JqZWN0TGlrZSIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwiZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImJhc2VHZXRUYWciLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImFGdW5jdGlvbiIsImZuIiwidGhhdCIsImxlbmd0aCIsImIiLCJjIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYXNPd25Qcm9wZXJ0eSIsImFuT2JqZWN0IiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIk8iLCJQIiwiQXR0cmlidXRlcyIsImUiLCJsaXN0Q2FjaGVDbGVhciIsImxpc3RDYWNoZURlbGV0ZSIsImxpc3RDYWNoZUdldCIsImxpc3RDYWNoZUhhcyIsImxpc3RDYWNoZVNldCIsIkxpc3RDYWNoZSIsImVudHJpZXMiLCJpbmRleCIsImNsZWFyIiwiZW50cnkiLCJzZXQiLCJwcm90b3R5cGUiLCJoYXMiLCJlcSIsImFzc29jSW5kZXhPZiIsImFycmF5IiwiaXNLZXlhYmxlIiwiZ2V0TWFwRGF0YSIsIm1hcCIsImRhdGEiLCJfX2RhdGFfXyIsIm5hdGl2ZUNyZWF0ZSIsImlzU3ltYm9sIiwiSU5GSU5JVFkiLCJ0b0tleSIsInJlc3VsdCIsIlJlcG9ydGFsQmFzZSIsInRhcmdldCIsInNvdXJjZSIsImkiLCJsZXZlbCIsImFyZ3MiLCJjb25zb2xlIiwiX2xvZ2dlciIsImV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJzdHIiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwiVVJMIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ubG9hZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2VuZCIsInZhcmlhYmxlIiwicXVlcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsInZhcnMiLCJzcGxpdCIsInBhaXIiLCJ0b0xvd2VyQ2FzZSIsIm8iLCJwYXRoIiwib3JpZ2luIiwicGF0aG5hbWUiLCJmb3JFYWNoIiwiYVBhaXIiLCJwdXNoIiwiam9pbiIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJpcyIsImNyZWF0ZUVsZW1lbnQiLCJkZWYiLCJUQUciLCJ0YWciLCJzdGF0IiwiY29uZmlndXJhYmxlIiwic2hhcmVkIiwiY2VpbCIsImZsb29yIiwiSU9iamVjdCIsImRlZmluZWQiLCJNYXAiLCJtYXBDYWNoZUNsZWFyIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsInJlSXNEZWVwUHJvcCIsInJlSXNQbGFpblByb3AiLCJpc0tleSIsInR5cGUiLCJ0ZXN0Iiwic2V0VG9BcnJheSIsInNpemUiLCJpZGVudGl0eSIsImJhc2VJc0FyZ3VtZW50cyIsIm9iamVjdFByb3RvIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJpc0FyZ3VtZW50cyIsIk1BWF9TQUZFX0lOVEVHRVIiLCJpc0xlbmd0aCIsInN5bWJvbFRhZyIsImNvZiIsIkFSRyIsInRyeUdldCIsIlQiLCJCIiwiY2FsbGVlIiwiY3R4IiwiaGlkZSIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJJU19GT1JDRUQiLCJGIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIlMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJJU19XUkFQIiwiVyIsImV4cFByb3RvIiwib3duIiwib3V0IiwiQyIsInZpcnR1YWwiLCJSIiwiVSIsImV4ZWMiLCJkb2N1bWVudEVsZW1lbnQiLCJMSUJSQVJZIiwicmVkZWZpbmUiLCJJdGVyYXRvcnMiLCIkaXRlckNyZWF0ZSIsInNldFRvU3RyaW5nVGFnIiwiZ2V0UHJvdG90eXBlT2YiLCJJVEVSQVRPUiIsIkJVR0dZIiwia2V5cyIsIkZGX0lURVJBVE9SIiwiS0VZUyIsIlZBTFVFUyIsInJldHVyblRoaXMiLCJCYXNlIiwiTkFNRSIsIkNvbnN0cnVjdG9yIiwibmV4dCIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJraW5kIiwicHJvdG8iLCJ2YWx1ZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIm1ldGhvZHMiLCJJdGVyYXRvclByb3RvdHlwZSIsIlByb21pc2VDYXBhYmlsaXR5IiwicHJvbWlzZSIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiU0hBUkVEIiwiaW52b2tlIiwiaHRtbCIsImNlbCIsInByb2Nlc3MiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImlkIiwibGlzdGVuZXIiLCJuZXh0VGljayIsIm5vdyIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsInRvSW50ZWdlciIsIm1pbiIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwiU2V0Iiwic2V0Q2FjaGVBZGQiLCJzZXRDYWNoZUhhcyIsIlNldENhY2hlIiwiYWRkIiwic3RhY2tDbGVhciIsInN0YWNrRGVsZXRlIiwic3RhY2tHZXQiLCJzdGFja0hhcyIsInN0YWNrU2V0IiwiU3RhY2siLCJhcnJheVB1c2giLCJvZmZzZXQiLCJjYXN0UGF0aCIsImJhc2VHZXQiLCJiYXNlSXNFcXVhbERlZXAiLCJiYXNlSXNFcXVhbCIsIm90aGVyIiwiYml0bWFzayIsImN1c3RvbWl6ZXIiLCJzdGFjayIsImNhY2hlSGFzIiwiY2FjaGUiLCJzdHJpbmdUb1BhdGgiLCJhcnJheVNvbWUiLCJDT01QQVJFX1BBUlRJQUxfRkxBRyIsIkNPTVBBUkVfVU5PUkRFUkVEX0ZMQUciLCJlcXVhbEFycmF5cyIsImVxdWFsRnVuYyIsImlzUGFydGlhbCIsImFyckxlbmd0aCIsIm90aExlbmd0aCIsInN0YWNrZWQiLCJzZWVuIiwiYXJyVmFsdWUiLCJvdGhWYWx1ZSIsImNvbXBhcmVkIiwib3RoSW5kZXgiLCJyZUlzVWludCIsImlzSW5kZXgiLCJpc1N0cmljdENvbXBhcmFibGUiLCJtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSIsInNyY1ZhbHVlIiwiZnVuY1Byb3RvIiwiZnVuY1RvU3RyaW5nIiwidG9Tb3VyY2UiLCJmdW5jIiwiaXNGdW5jdGlvbiIsImlzQXJyYXlMaWtlIiwic3R1YkZhbHNlIiwiZnJlZUV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwibmF0aXZlSXNCdWZmZXIiLCJpc0J1ZmZlciIsImFzeW5jVGFnIiwiZnVuY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwiYmFzZUlzVHlwZWRBcnJheSIsImJhc2VVbmFyeSIsIm5vZGVVdGlsIiwibm9kZUlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheSIsImFycmF5TGlrZUtleXMiLCJiYXNlS2V5cyIsInQiLCJyIiwicmVhY3QiLCJuIiwibG9hZGVkIiwibSIsInAiLCJkZWZhdWx0IiwiTURJY29uIiwiX19lc01vZHVsZSIsIlJlZmVyZW5jZUVycm9yIiwidSIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJsIiwicHJvcHMiLCJmaWxsIiwiaWNvbiIsImxvZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInMiLCJhc3NpZ24iLCJfaW1hZ2VPbmxvYWQiLCJiaW5kIiwiX2ltYWdlT25lcnJvciIsInN0YXRlIiwic3JjIiwicGxhY2Vob2xkZXJIaWRkZW4iLCJwbGFjZWhvbGRlciIsInNpemluZyIsInBvc2l0aW9uIiwicHJvcG9ydGlvbiIsImxvYWRpbmciLCJlcnJvciIsIl9sb2FkIiwiX2NvbXB1dGVEaW1lbnNpb25zIiwiX2NvbXB1dGVQcm9wb3J0aW9uIiwiYXNwZWN0Iiwic2V0U3RhdGUiLCJpbmRleE9mIiwiZCIsInByZWxvYWQiLCJmYWRlIiwiaCIsInBsYWNlaG9sZGVyU2l6aW5nIiwiZyIsImFsdCIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInJvbGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJkaXNwbGF5Iiwib25Mb2FkIiwib25FcnJvciIsIl9yZXNldCIsInByZXZlbnRMb2FkIiwiQ29tcG9uZW50IiwiUHJvbWlzZSIsImZvcmJpZGRlbkZpZWxkIiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiaXRlcmFibGUiLCJpdGVyRm4iLCJzdGVwIiwiaXRlcmF0b3IiLCJkb25lIiwidW4iLCJBcnJheVByb3RvIiwicmV0IiwiZGVzY3JpcHRvciIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIml0ZXIiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwidGhlbiIsInRhc2siLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50IiwiY29udGVudFdpbmRvdyIsIndyaXRlIiwiY2xvc2UiLCJQcm9wZXJ0aWVzIiwiZ2V0S2V5cyIsImRlZmluZVByb3BlcnRpZXMiLCJ0b09iamVjdCIsIk9iamVjdFByb3RvIiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCIka2V5cyIsInYiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIngiLCJwcm9taXNlQ2FwYWJpbGl0eSIsIkRFU0NSSVBUT1JTIiwiU1BFQ0lFUyIsIktFWSIsIkQiLCJUT19TVFJJTkciLCJwb3MiLCJTdHJpbmciLCJjaGFyQ29kZUF0IiwiY2hhckF0IiwibWF4IiwidmFsIiwidmFsdWVPZiIsImNsYXNzb2YiLCJnZXRJdGVyYXRvck1ldGhvZCIsImFkZFRvVW5zY29wYWJsZXMiLCJpdGVyYXRlZCIsIl90IiwiX2kiLCJfayIsIkFyZ3VtZW50cyIsImFuSW5zdGFuY2UiLCJmb3JPZiIsInNwZWNpZXNDb25zdHJ1Y3RvciIsIm1pY3JvdGFzayIsIm5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlIiwicGVyZm9ybSIsInByb21pc2VSZXNvbHZlIiwiUFJPTUlTRSIsIiRQcm9taXNlIiwiZW1wdHkiLCJJbnRlcm5hbCIsIm5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSIsIk93blByb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJGYWtlUHJvbWlzZSIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsInNhbWVDb25zdHJ1Y3RvciIsImlzVGhlbmFibGUiLCJpc1JlamVjdCIsIl9uIiwiY2hhaW4iLCJfYyIsIl92Iiwib2siLCJfcyIsInJlYWN0aW9uIiwiaGFuZGxlciIsImZhaWwiLCJfaCIsIm9uSGFuZGxlVW5oYW5kbGVkIiwib25VbmhhbmRsZWQiLCJ1bmhhbmRsZWQiLCJpc1VuaGFuZGxlZCIsImVtaXQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsInJlYXNvbiIsIl9hIiwib25yZWplY3Rpb25oYW5kbGVkIiwiJHJlamVjdCIsIl9kIiwiX3ciLCIkcmVzb2x2ZSIsIndyYXBwZXIiLCJleGVjdXRvciIsImVyciIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsImNhcGFiaWxpdHkiLCJhbGwiLCJyZW1haW5pbmciLCIkaW5kZXgiLCJhbHJlYWR5Q2FsbGVkIiwicmFjZSIsIiRhdCIsInBvaW50IiwiVE9fU1RSSU5HX1RBRyIsIkRPTUl0ZXJhYmxlcyIsIkNvbGxlY3Rpb24iLCJEYXRhVmlldyIsImhhc2hDbGVhciIsImhhc2hEZWxldGUiLCJoYXNoR2V0IiwiaGFzaEhhcyIsImhhc2hTZXQiLCJIYXNoIiwiVWludDhBcnJheSIsIldlYWtNYXAiLCJ0aGlzQXJnIiwiYXJyYXlGaWx0ZXIiLCJwcmVkaWNhdGUiLCJyZXNJbmRleCIsImJhc2VJbmRleE9mIiwiYXJyYXlJbmNsdWRlcyIsImFycmF5SW5jbHVkZXNXaXRoIiwiY29tcGFyYXRvciIsImJhc2VUaW1lcyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsImFycmF5TWFwIiwiaXRlcmF0ZWUiLCJiYXNlRmluZEluZGV4IiwiZnJvbVJpZ2h0IiwiaXNGbGF0dGVuYWJsZSIsImJhc2VGbGF0dGVuIiwiZGVwdGgiLCJpc1N0cmljdCIsImJhc2VHZXRBbGxLZXlzIiwia2V5c0Z1bmMiLCJzeW1ib2xzRnVuYyIsImJhc2VIYXNJbiIsImJhc2VJc05hTiIsInN0cmljdEluZGV4T2YiLCJhcmdzVGFnIiwiZXF1YWxCeVRhZyIsImVxdWFsT2JqZWN0cyIsImdldFRhZyIsImFycmF5VGFnIiwib2JqZWN0VGFnIiwib2JqSXNBcnIiLCJvdGhJc0FyciIsIm9ialRhZyIsIm90aFRhZyIsIm9iaklzT2JqIiwib3RoSXNPYmoiLCJpc1NhbWVUYWciLCJvYmpJc1dyYXBwZWQiLCJvdGhJc1dyYXBwZWQiLCJvYmpVbndyYXBwZWQiLCJvdGhVbndyYXBwZWQiLCJiYXNlSXNNYXRjaCIsIm1hdGNoRGF0YSIsIm5vQ3VzdG9taXplciIsIm9ialZhbHVlIiwiaXNNYXNrZWQiLCJyZVJlZ0V4cENoYXIiLCJyZUlzSG9zdEN0b3IiLCJyZUlzTmF0aXZlIiwiUmVnRXhwIiwicGF0dGVybiIsImJvb2xUYWciLCJkYXRlVGFnIiwiZXJyb3JUYWciLCJtYXBUYWciLCJudW1iZXJUYWciLCJyZWdleHBUYWciLCJzZXRUYWciLCJzdHJpbmdUYWciLCJ3ZWFrTWFwVGFnIiwiYXJyYXlCdWZmZXJUYWciLCJkYXRhVmlld1RhZyIsImZsb2F0MzJUYWciLCJmbG9hdDY0VGFnIiwiaW50OFRhZyIsImludDE2VGFnIiwiaW50MzJUYWciLCJ1aW50OFRhZyIsInVpbnQ4Q2xhbXBlZFRhZyIsInVpbnQxNlRhZyIsInVpbnQzMlRhZyIsInR5cGVkQXJyYXlUYWdzIiwiYmFzZU1hdGNoZXMiLCJiYXNlTWF0Y2hlc1Byb3BlcnR5IiwicHJvcGVydHkiLCJiYXNlSXRlcmF0ZWUiLCJpc1Byb3RvdHlwZSIsIm5hdGl2ZUtleXMiLCJnZXRNYXRjaERhdGEiLCJoYXNJbiIsImJhc2VQcm9wZXJ0eSIsImJhc2VQcm9wZXJ0eURlZXAiLCJvdmVyUmVzdCIsInNldFRvU3RyaW5nIiwiYmFzZVJlc3QiLCJzdGFydCIsImNvbnN0YW50IiwiYmFzZVNldFRvU3RyaW5nIiwic3RyaW5nIiwic3ltYm9sUHJvdG8iLCJzeW1ib2xUb1N0cmluZyIsImJhc2VUb1N0cmluZyIsImNyZWF0ZVNldCIsIkxBUkdFX0FSUkFZX1NJWkUiLCJiYXNlVW5pcSIsImluY2x1ZGVzIiwiaXNDb21tb24iLCJvdXRlciIsImNvbXB1dGVkIiwic2VlbkluZGV4IiwiY29yZUpzRGF0YSIsIm5vb3AiLCJtYXBUb0FycmF5Iiwic3ltYm9sVmFsdWVPZiIsImJ5dGVMZW5ndGgiLCJieXRlT2Zmc2V0IiwiYnVmZmVyIiwibWVzc2FnZSIsImNvbnZlcnQiLCJnZXRBbGxLZXlzIiwib2JqUHJvcHMiLCJvYmpMZW5ndGgiLCJvdGhQcm9wcyIsInNraXBDdG9yIiwib2JqQ3RvciIsIm90aEN0b3IiLCJnZXRTeW1ib2xzIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJpc093biIsInVubWFza2VkIiwic3R1YkFycmF5IiwibmF0aXZlR2V0U3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbCIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJBcnJheUJ1ZmZlciIsIkN0b3IiLCJjdG9yU3RyaW5nIiwiaGFzUGF0aCIsImhhc0Z1bmMiLCJIQVNIX1VOREVGSU5FRCIsInNwcmVhZGFibGVTeW1ib2wiLCJpc0NvbmNhdFNwcmVhZGFibGUiLCJtYXNrU3JjS2V5IiwiYXJyYXlQcm90byIsInNwbGljZSIsImxhc3RJbmRleCIsInBvcCIsIm1lbW9pemUiLCJNQVhfTUVNT0laRV9TSVpFIiwibWVtb2l6ZUNhcHBlZCIsIm92ZXJBcmciLCJmcmVlUHJvY2VzcyIsImJpbmRpbmciLCJ0cmFuc2Zvcm0iLCJhcmciLCJuYXRpdmVNYXgiLCJvdGhlckFyZ3MiLCJzaG9ydE91dCIsIkhPVF9DT1VOVCIsIkhPVF9TUEFOIiwibmF0aXZlTm93IiwiRGF0ZSIsImNvdW50IiwibGFzdENhbGxlZCIsInN0YW1wIiwicGFpcnMiLCJyZUxlYWRpbmdEb3QiLCJyZVByb3BOYW1lIiwicmVFc2NhcGVDaGFyIiwibWF0Y2giLCJudW1iZXIiLCJxdW90ZSIsImRlZmF1bHRWYWx1ZSIsImlzQXJyYXlMaWtlT2JqZWN0IiwiRlVOQ19FUlJPUl9URVhUIiwicmVzb2x2ZXIiLCJtZW1vaXplZCIsIkNhY2hlIiwidW5pb25CeSIsImFycmF5cyIsIkhpdGxpc3REYXRhc291cmNlIiwib3B0aW9ucyIsIl9zZWFyY2hWYWx1ZXMiLCJtb2RpZmllciIsInJlcXVlc3RSZXNwb25zZSIsImluaXRpYWxMb2FkIiwiX3NraXBQYWdlIiwiaXNQYWdpbmciLCJsb2NhdGlvbkRlc2VyaWFsaXplIiwicmVwb3J0aWQiLCJoaXRsaXN0SUQiLCJwYXJhbXMiLCJQYWdlSWQiLCJwYWdlSUQiLCJwYWdlU3RhdGVJZCIsInBhZ2VTdGF0ZUlEIiwiUHJldmlldyIsInByZXZpZXciLCJhdHRybmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzb3J0aW5nUGFnaW5nVmFsdWVzIiwicGFnaW5nVmFsdWVzIiwicGFnZU51bWJlciIsInBhZ2luZ0ZvcndhcmQiLCJwcm9taXNlUmVxdWVzdCIsInNlcnZpY2VVUkwiLCJzZXJpYWxpemVQYXJhbXMiLCJwYXJzZVJlc3BvbnNlIiwicmVzcG9uc2UiLCJwYXJzZSIsInBhZ2VJbmZvIiwiX3NwdiIsInB2Iiwic3RhcnRJZCIsImxhc3RTdGFydElkIiwiZmlyc3RTdGFydElkIiwic3RhcnRWYWx1ZSIsImxhc3RTdGFydFZhbHVlIiwiZmlyc3RTdGFydFZhbHVlIiwiSGl0bGlzdFNldHVwIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsIl9jb25maWciLCJnZXRPcmlnaW5hbENvbmZpZyIsIl9lbGVtZW50VHlwZSIsIkhpdExpc3RFbGVtZW50VHlwZSIsIl9vcCIsIlNlYXJjaGFibGVMaXN0T3BlcmF0b3IiLCJjYXB0aW9ucyIsInNpbmdsZVZpZXdUZXh0cyIsImhpdGxpc3REYXRhIiwiZGlzYWJsZU5leHRCdXR0b24iLCJkaXNhYmxlUHJldkJ1dHRvbiIsImNvbHVtbnMiLCJhbGxDb2x1bW5zIiwiY29tcG9uZW50SWQiLCJwYWdlSWQiLCJsYW5ndWFnZSIsInNlcnZpY2VVcmwiLCJxdWVyeVNlbGVjdG9yIiwianNvbkRhdGUiLCJZIiwiTGFuZyIsImNvbnN0ciIsImV2YWwiLCJzY3JpcHRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNmZyIsInNjcmlwdCIsInRleHQiLCJEU0Fic3RyYWN0aW9uIiwiRFMiLCJjb21wb25lbnQiLCJjb25maWciLCJzZXR1cERhdGFMaXN0ZW5lciIsIkdsb2JhbCIsIm9uIiwiaW5pdGlhbGlzZUNvbmZpZyIsImZpbHRlckluZm8iLCJpbml0aWFsRGF0YUxvYWQiLCJwcm9jZXNzRGF0YSIsImNhdGNoIiwiaGFuZGxlRGF0YUxvYWRpbmdFcnJvciIsImluZGl2aWR1YWxSZWNvcmRzIiwiaXRlbSIsInRyaW0iLCJtb2RlIiwibmV3RGF0YSIsImRhdGFSb3ciLCJyb3dJbmRleCIsInBhcnNlZFJvdyIsImlyIiwiZGF0YUZpZWxkcyIsImNvbHVtbklEIiwicHJlcGFyZURhdGEiLCJpbWFnZSIsIm1lZGlhdHlwZSIsInJlc3BvbnNlaWQiLCJzbGluayIsImxpbmsiLCJpdGVtcyIsInByZXZTdGF0ZSIsImdlbmVyYXRlTWVkaWFMaW5rIiwiZmlsZU5hbWUiLCJkc05hbWUiLCJzdXJ2ZXlJRCIsImxvYWROZXh0UGFnZSIsIm5leHRQYWdlIiwibG9hZFByZXZpb3VzUGFnZSIsInByZXZpb3VzUGFnZSIsImxvYWRNb3JlIiwiZ2V0UGFnZUluZm8iLCJoYXNQYWdlSW5mbyIsInRvdGFsSGl0cyIsIk1FRElBX1RZUEVTIiwiSW1hZ2VHcmlkVGlsZSIsImFjdGlvbkJ1dHRvbiIsImFjdGlvbkljb24iLCJvblNlbGVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfY29tcHV0ZVRpbGVUeXBlIiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJpY29uU2VydmVyIiwiZXNjYXBlIiwiaWNvbnMiLCJhdWRpbyIsInZpZGVvIiwidW5rbm93biIsInByb3BUeXBlcyIsIm9uZU9mIiwiSW1hZ2VHcmlkIiwiaXRlbUNsaWNrSGFuZGxlciIsImR1bW15SXRlbXMiLCJyZW5kZXJEdW1teUl0ZW1zIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJOYXZpZ2F0aW9uIiwicGFnaW5hdGlvbiIsImNvbnRpbnVvdXNOYXZpZ2F0aW9uIiwicGFnaW5nTmF2aWdhdGlvbiIsInRleHRBbGlnbiIsInRyYW5zbGF0ZSIsIlJlYWN0VmlkZW8iLCJzaW5nbGVWaWV3TW9kZSIsInNpbmdsZVZpZXciLCJzaW5nbGVWaWV3VmlzaWJsZSIsInNpbmdsZVZpZXdEaXNhYmxlUHJldiIsInNpbmdsZVZpZXdEaXNhYmxlTmV4dCIsImkxOG4iLCJyZXR1cm5Ub0dyaWQiLCJsb2FkUHJldmlvdXNJdGVtIiwibmF2aWdhdGVJdGVtcyIsImxvYWROZXh0SXRlbSIsImdldFNpbmdsZVZpZXdOYXZTdGF0ZSIsImFjdGlvbkljb25DbGljayIsInJlbmRlclNpbmdsZVZpZXciLCJjYW5FZGl0IiwicmVuZGVyTmF2aWdhdGlvbiIsImRhdGFMb2FkaW5nTWVzc2FnZSIsIm5hdmlnYXRpb25Qcm9wcyIsImluZGl2aWR1YWxSZWNvcmRzUXVlc3Rpb25JZHMiLCJpbmRpdmlkdWFsUmVjb3Jkc0tleUxhYmVscyIsInJldmVyc2UiLCJmaWx0ZXIiLCJyZWNvcmQiLCJsYWJlbCIsImlySWRzIiwiY29sdW1uIiwiZGlyZWN0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJpdGVtc0xlbmd0aCIsImN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4IiwibmV4dEluZGV4IiwibG9hZEl0ZW1Gcm9tUHJldmlvdXNQYWdlIiwibG9hZEl0ZW1Gcm9tTmV4dFBhZ2UiLCJwcm9taXNlZEl0ZW1zIiwic2luZ2xlVmlld0RhdGEiLCJuZXdJdGVtcyIsImF0RGF0YUxlZnRCb3VuZGFyeUNhbkxvYWQiLCJhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCIsImN1cnJlbnRJdGVtSW5kZXgiLCJnZXRMYWJlbHNGb3JNYWluRmllbGRzIiwiZ2V0TGFiZWxzRm9ySW5kaXZpZHVhbFJlY29yZHMiLCJOYXZCdXR0b24iLCJSZXNwb25zZXMiLCJjb2x1bW5zTWFwIiwibWFpbkNvbHVtbnMiLCJxSUQiLCJOYXZCYXIiLCJyZXR1cm5Ub0dyaWRBY3Rpb24iLCJTaW5nbGVWaWV3IiwibmF2QmFyUHJvcHMiLCJpY19zdGFyIiwiaWNfc3Rhcl9ib3JkZXIiLCJpY19hcnJvd19iYWNrIiwiaWNfYXJyb3dfZm9yd2FyZCIsImljX3ZpZXdfbW9kdWxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OytRQ3RDQTs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLQSxLQUFNQSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxVQUFELEVBQXVDO0FBQUEsT0FBM0JDLGlCQUEyQix1RUFBVCxJQUFTOztBQUNoRSxPQUFHLENBQUNELFVBQUosRUFBZTtBQUNiLFdBQU0sSUFBSUUsS0FBSixDQUFVLDBCQUFWLENBQU47QUFDRCxJQUZELE1BRU8sSUFBR0YsY0FBYyxPQUFPQSxV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VyxPQUFNLG9CQUFqQixFQUFzQyxTQUFTdUMsa0JBQS9DLEVBQW1FLDJCQUFuRSxHQUZGO0FBR0UsMERBQVcsVUFBVTFDLHFCQUFyQixFQUE0QyxPQUFNLFdBQWxELEVBQThELFNBQVNLLFlBQXZFLEVBQXFGLDZCQUFyRjtBQUhGLElBREY7QUFPRCxFQVREOztLQVdxQnNDLFU7Ozs7Ozs7Ozs7OzhCQUNWO0FBQUEsb0JBQzRCLEtBQUsxa0IsS0FEakM7QUFBQSxXQUNBL04sUUFEQSxVQUNBQSxRQURBO0FBQUEsV0FDYTB5QixXQURiOztBQUVQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxZQUFmO0FBQ0UsdUNBQUMsTUFBRCxFQUFZQSxXQUFaLENBREY7QUFFRzF5QjtBQUZILFFBREY7QUFNRDs7Ozs7O21CQVRrQnl5QixVOzs7Ozs7Ozs7Ozs7OztBQ2xCckI7Ozs7OztBQUVPLEtBQU1FLDRCQUFVLHdDQUFNLEdBQUUsMEZBQVIsR0FBaEI7QUFDQSxLQUFNQywwQ0FBaUIsd0NBQU0sR0FBRSxrTUFBUixHQUF2QjtBQUNBLEtBQU1DLHdDQUFnQix3Q0FBTSxHQUFFLDhEQUFSLEdBQXRCO0FBQ0EsS0FBTUMsOENBQW1CLHdDQUFNLEdBQUUsMkRBQVIsR0FBekI7QUFDQSxLQUFNQywwQ0FBaUIsd0NBQU0sR0FBRSx5RkFBUixHQUF2QixDOzs7Ozs7QUNOUCwwQzs7Ozs7O0FDQUEsMkIiLCJmaWxlIjoici1yZWFjdC12aWRlby5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4NDUxM2Q2NmNlNjcxNDU0NGZkYyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDExLjAxLjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmltcG9ydCBtYWluQ1NTIGZyb20gJy4vbWFpbi5jc3MnO1xyXG5pbXBvcnQgUmVhY3RWaWRlbyBmcm9tICcuL1JlYWN0VmlkZW8nO1xyXG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gJ3ItcmVwb3J0YWwtYmFzZSc7XHJcblxyXG4vKipcclxuICogaW5pdGlhbGlzZSBIaXRMaXN0IG9uIERPTUNvbnRlbnRMb2FkZWQgZm9yIGEgcXVpY2tlciBjb2xkLXN0YXJ0LCBubyBuZWVkIHRvIHdhaXQgZm9yIHRoZSBvcmlnaW5hbCBIaXRMaXN0XHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWdOYW1lIC0gbmFtZSBvZiB0aGUgdmFyaWFibGUgcGFzc2VkIHRvIERPTSBhcyBhIGNvbmZpZ1xyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt0aHVtYnNQbGFjZWhvbGRlcj10cnVlXSAtIGRpc3BsYXkgdGh1bWJzIGFzIGltYWdlIHBsYWNlaG9sZGVycyBpbnN0ZWFkIG9mIG1lZGlhIGljb25zXHJcbiAqICovXHJcbmNvbnN0IGxhdW5jaFZpZGVvSGl0bGlzdCA9IChjb25maWdOYW1lLHRodW1ic1BsYWNlaG9sZGVyPXRydWUpID0+IHtcclxuICBpZighY29uZmlnTmFtZSl7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbmZpZyBpcyBub3Qgc3BlY2lmaWVkIScpXHJcbiAgfSBlbHNlIGlmKGNvbmZpZ05hbWUgJiYgdHlwZW9mIGNvbmZpZ05hbWUgIT0gJ3N0cmluZycpe1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgY29uZmlnIG5hbWUgbXVzdCBiZSBhIHN0cmluZywgbm90IGEgJHt0eXBlb2YgY29uZmlnTmFtZX1gKVxyXG4gIH1cclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgIDxSZWFjdFZpZGVvXHJcbiAgICAgIGNvbmZpZz17Y29uZmlnTmFtZX1cclxuICAgICAgdGh1bWJzUGxhY2Vob2xkZXI9e3RodW1ic1BsYWNlaG9sZGVyfVxyXG4gICAgICB2ZXJib3NlXHJcbiAgICAgIC8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXHJcbiAgfSk7XHJcbn07XHJcblxyXG53aW5kb3cuUmVwb3J0YWwgPSB3aW5kb3cuUmVwb3J0YWwgfHwge307XHJcblJlcG9ydGFsQmFzZS5taXhpbih3aW5kb3cuUmVwb3J0YWwse1xyXG4gIGxhdW5jaFZpZGVvSGl0bGlzdFxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fcm9vdC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMCcgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwidmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcga2V5IGlmIGl0J3Mgbm90IGEgc3RyaW5nIG9yIHN5bWJvbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmd8c3ltYm9sfSBSZXR1cm5zIHRoZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIHRvS2V5KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0tleTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL190b0tleS5qcyIsImltcG9ydCBQcm9taXNlIGZyb20gJ2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZSc7XG5cbmNsYXNzIFJlcG9ydGFsQmFzZSB7XG5cbiAgLyoqXG4gICAqIENvcGllcyBwcm9wcyBmcm9tIGEgc291cmNlIG9iamVjdCB0byBhIHRhcmdldCBvYmplY3QuXG4gICAqXG4gICAqIE5vdGUsIHRoaXMgbWV0aG9kIHVzZXMgYSBzaW1wbGUgYGZvci4uLmluYCBzdHJhdGVneSBmb3IgZW51bWVyYXRpbmdcbiAgICogcHJvcGVydGllcy4gIFRvIGVuc3VyZSBvbmx5IGBvd25Qcm9wZXJ0aWVzYCBhcmUgY29waWVkIGZyb20gc291cmNlXG4gICAqIHRvIHRhcmdldCBhbmQgdGhhdCBhY2Nlc3NvciBpbXBsZW1lbnRhdGlvbnMgYXJlIGNvcGllZCwgdXNlIGBleHRlbmRgLlxuICAgKlxuICAgKiBAbWV0aG9kIG1peGluXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgVGFyZ2V0IG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgU291cmNlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCBhcyBmaXJzdCBhcmd1bWVudC5cbiAgICovXG4gIHN0YXRpYyBtaXhpbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAodmFyIGkgaW4gc291cmNlKSB7XG4gICAgICB0YXJnZXRbaV0gPSBzb3VyY2VbaV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBzdGF0aWMgX2xvZ2dlcihsZXZlbCwgYXJncykge1xuICAgIC8vIGFjY2VwdCBbJ2ZvbycsICdiYXInXSBhbmQgW1snZm9vJywgJ2JhciddXVxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBhcmdzID0gYXJnc1swXTtcbiAgICB9XG4gICAgLy8gb25seSBhY2NlcHQgbG9nZ2luZyBmdW5jdGlvbnNcbiAgICBzd2l0Y2gobGV2ZWwpIHtcbiAgICAgIGNhc2UgJ2xvZyc6XG4gICAgICBjYXNlICd3YXJuJzpcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgY29uc29sZVtsZXZlbF0uYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBfbG9nKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ2xvZycsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIF93YXJuKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ3dhcm4nLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBfZXJyb3IoKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHRoaXMuX2xvZ2dlcignZXJyb3InLCBhcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmFtZWQgZXZlbnQgd2l0aCBgbmFtZWBcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJuIHtFdmVudH0gUmV0dXJucyBhIGNyZWF0ZWQgZXZlbnRcbiAgICogKi9cbiAgc3RhdGljIG5ld0V2ZW50KG5hbWUpe1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW5zcGVjdHMgaWYgdGhlIGN1cnJlbnQgc3RyaW5nIG1pZ2h0IGJlIGNvbnZlcnRlZCB0byBudW1iZXIgYW5kIHJlbmRlcnMgaXQgYXMgbnVtYmVyLiBJZiBzdHJpbmcgbGVuZ3RoIGlzIDAsIHJldHVybnMgYG51bGxgLiBJZiBub25lIGFwcGxpZXMgcmV0dXJucyB0aGUgc3RyaW5nIGFzIGlzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gdmFsdWUgb2YgdGhlIGNlbGwgaWYgbm90IEhUTUwgY29udGVudHNcbiAgICogQHJldHVybiB7TnVtYmVyfG51bGx8U3RyaW5nfVxuICAgKiAqL1xuICBzdGF0aWMgaXNOdW1iZXIoc3RyKXtcbiAgICBpZighaXNOYU4ocGFyc2VGbG9hdChzdHIpKSl7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvLC9pLCcnKTsvLyByZW1vdmUgdW5uZWNlc3NhcnkgY29tbWEgYXMgYSBkZWxpbWl0ZXIgZm9yIHRob3VzYW5kcyBmcm9tIGRhdGEuXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChzdHIpO1xuICAgIH0gZWxzZSBpZihzdHIubGVuZ3RoPT0wKXtyZXR1cm4gbnVsbH0gZWxzZSB7cmV0dXJuIHN0cn1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gWEhSIHdyYXBwZWQgaW4gYSBQcm9taXNlXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gVVJMIC0gdXJsIHRvIHNlbmQgYSBgR0VUYCByZXF1ZXN0IHRvXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJldHVybnMgYSB0aGVuLWFibGUgcHJvbWlzZSB3aXRoIGBYTUxIdHRwUmVxdWVzdC5yZXNwb25zZVRleHRgXG4gICAqICovXG4gIHN0YXRpYyBwcm9taXNlUmVxdWVzdChVUkwpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB4aHIub3BlbignR0VUJywgVVJMLCB0cnVlKTtcbiAgICAgIHhoci5vbmxvYWQgPSAoKT0+e3hoci5zdGF0dXMgPT0gMjAwP3Jlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk6cmVqZWN0KEVycm9yKGAke3hoci5zdGF0dXN9OiAke3hoci5zdGF0dXNUZXh0fWApKTt9XG4gICAgICB4aHIub25lcnJvciA9ICgpPT57cmVqZWN0KEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7fVxuICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgdmFyaWFibGUgbGlzdGVkIGluIHF1ZXJ5IHN0cmluZ1xuICAgKiBAcGFyYW0geyFTdHJpbmd9IHZhcmlhYmxlIC0gdmFyaWFibGUgbmFtZSB0byBnZXQgdmFsdWUgZm9yXG4gICAqIEBwYXJhbSB7U3RyaW5nPX0gW3F1ZXJ5PXdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpXSAtIHRoZSBxdWVyeSBzdHJpbmcgdG8gc2VhcmNoIHZhcmlhYmxlIGZvciBpblxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFJldHVybnMgdmFsdWUgZm9yIHRoZSB2YXJpYWJsZVxuICAgKiAqL1xuICBzdGF0aWMgZ2V0UXVlcnlWYXJpYWJsZSh2YXJpYWJsZSxxdWVyeT13aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSl7XG4gICAgdmFyIHZhcnMgPSBxdWVyeS5zcGxpdChcIiZcIik7XG4gICAgZm9yICh2YXIgaT0wO2k8dmFycy5sZW5ndGg7aSsrKSB7XG4gICAgICB2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgaWYoKHBhaXJbMF0pLnRvTG93ZXJDYXNlKCkgPT0gdmFyaWFibGUudG9Mb3dlckNhc2UoKSl7cmV0dXJuIHBhaXJbMV07fVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIHR1cm5zIGB3aW5kb3cubG9jYXRpb25gIG9iamVjdCBpbnRvIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhcyBuYW1lZCBrZXlzIG5lY2Vzc2FyeSB0byByZWNvbnN0cnVjdCB0aGUgVVJMXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gW2xvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uXSAtIGEgd2luZG93LmxvY2F0aW9uIG9iamVjdCwgYnkgZGVmYXVsdCBvZiB0aGUgaG9zdCB3aW5kb3cgd2hlcmUgdGhlIHNjcmlwdCBpcyBleGVjdXRlZFxuICAgKiBAcmV0dXJucyB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBhIGBsb2NhdGlvbmAgb2JqZWN0XG4gICAqICovXG4gIHN0YXRpYyBsb2NhdGlvbkRlc2VyaWFsaXplKGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uKXtcbiAgICBsZXQgbyA9IHtcbiAgICAgIHBhdGg6IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgcXVlcnk6e31cbiAgICB9O1xuICAgIGxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkuc3BsaXQoLyYvKS5mb3JFYWNoKHBhaXI9PntcbiAgICAgIGxldCBhUGFpcj0gcGFpci5zcGxpdCgvPS8pO1xuICAgICAgby5xdWVyeVthUGFpclswXS50b0xvd2VyQ2FzZSgpXSA9IGFQYWlyWzFdXG4gICAgfSk7XG4gICAgcmV0dXJuIG9cbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJucyBhIGBsb2NhdGlvbmAgb2JqZWN0IChyZXN1bHQgb2YgYGxvY2F0aW9uRGVzZXJpYWxpemVgKSBpbnRvIGEgVVJMXG4gICAqIEBwYXJhbSB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBsb2NhdGlvbiAtIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhbmQgYSB1cmxcbiAgICogQHJldHVybnMge1N0cmluZ30gLSBhIFVSTCBzdHJpbmdcbiAgICogKi9cbiAgc3RhdGljIGxvY2F0aW9uU2VyaWFsaXplKGxvY2F0aW9uKXtcbiAgICBsZXQgcXVlcnk9W107XG4gICAgZm9yKGxldCBrZXkgaW4gbG9jYXRpb24ucXVlcnkpe1xuICAgICAgcXVlcnkucHVzaChba2V5LGxvY2F0aW9uLnF1ZXJ5W2tleV1dLmpvaW4oJz0nKSk7XG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRoICsgJz8nICsgcXVlcnkuam9pbignJicpO1xuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydGFsQmFzZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLXJlcG9ydGFsLWJhc2Uvc3JjL3JlcG9ydGFsLWJhc2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fTWFwLmpzIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0tleS5qcyIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lkZW50aXR5LmpzIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TZXQuanMiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ2YXIgYmFzZUlzRXF1YWxEZWVwID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Nhc3RQYXRoLmpzIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc1N0cmljdENvbXBhcmFibGUuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCBmb3Igc291cmNlIHZhbHVlcyBzdWl0YWJsZVxuICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2VxLmpzIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2tleXMuanMiLCIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtcInJlYWN0XCJdLHQpO2Vsc2V7dmFyIHI9dChcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwicmVhY3RcIik6ZS5yZWFjdCk7Zm9yKHZhciBvIGluIHIpKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbb109cltvXX19KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobyl7aWYocltvXSlyZXR1cm4gcltvXS5leHBvcnRzO3ZhciBuPXJbb109e2V4cG9ydHM6e30saWQ6byxsb2FkZWQ6ITF9O3JldHVybiBlW29dLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHQpLG4ubG9hZGVkPSEwLG4uZXhwb3J0c312YXIgcj17fTtyZXR1cm4gdC5tPWUsdC5jPXIsdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1yKDEpO3QuZGVmYXVsdD1vLk1ESWNvbixlLmV4cG9ydHM9dC5kZWZhdWx0fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gaShlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fWZ1bmN0aW9uIHUoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Lk1ESWNvbj12b2lkIDA7dmFyIGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBvPXRbcl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxyLG8pe3JldHVybiByJiZlKHQucHJvdG90eXBlLHIpLG8mJmUodCxvKSx0fX0oKSxmPXIoMiksbD1vKGYpLGE9dC5NREljb249ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe3JldHVybiBuKHRoaXMsdCksaSh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfXJldHVybiB1KHQsZSksYyh0LFt7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLHQ9ZS5maWxsLHI9ZS5zaXplLG89ZS5pY29uLG49ZS5jaGlsZHJlbjtyZXR1cm4gY29uc29sZS5sb2codCxyLG8sbiksbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7eG1sbnM6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGZpbGw6dCx3aWR0aDpyLGhlaWdodDpyLHZpZXdCb3g6XCIwIDAgMjQgMjRcIixjaGlsZHJlbjpvfHxufSl9fV0pLHR9KGYuUHVyZUNvbXBvbmVudCk7YS5kZWZhdWx0UHJvcHM9e3NpemU6MjQsZmlsbDpcInJnYmEoMCwwLDAsLjg1KVwifX0sZnVuY3Rpb24odCxyKXt0LmV4cG9ydHM9ZX1dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TURJY29uLmJ1bmRsZS5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L01ESWNvbi9kaXN0L01ESWNvbi5idW5kbGUuanMiLCIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtcInJlYWN0XCJdLHQpO2Vsc2V7dmFyIG89dChcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwicmVhY3RcIik6ZS5yZWFjdCk7Zm9yKHZhciByIGluIG8pKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbcl09b1tyXX19KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQocil7aWYob1tyXSlyZXR1cm4gb1tyXS5leHBvcnRzO3ZhciBuPW9bcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiBlW3JdLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHQpLG4ubG9hZGVkPSEwLG4uZXhwb3J0c312YXIgbz17fTtyZXR1cm4gdC5tPWUsdC5jPW8sdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBpKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9ZnVuY3Rpb24gYShlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBvPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbylPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobyxyKSYmKGVbcl09b1tyXSl9cmV0dXJuIGV9LGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciByPXRbb107ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxvLHIpe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLHImJmUodCxyKSx0fX0oKSxwPW8oMSksdT1yKHApLGM9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXtuKHRoaXMsdCk7dmFyIG89aSh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsKHRoaXMsZSkpO3JldHVybiBvLl9pbWFnZU9ubG9hZD1vLl9pbWFnZU9ubG9hZC5iaW5kKG8pLG8uX2ltYWdlT25lcnJvcj1vLl9pbWFnZU9uZXJyb3IuYmluZChvKSxvLnN0YXRlPXtzcmM6dm9pZCAwLHBsYWNlaG9sZGVySGlkZGVuOiFvLnByb3BzLnBsYWNlaG9sZGVyLHNpemluZzpvLnByb3BzLnNpemluZz9vLnByb3BzLnNpemluZzpudWxsLHBvc2l0aW9uOm8ucHJvcHMucG9zaXRpb24/by5wcm9wcy5wb3NpdGlvbjpcImNlbnRlclwiLHByb3BvcnRpb246MCxsb2FkZWQ6ITEsbG9hZGluZzohMSxlcnJvcjohMX0sb31yZXR1cm4gYSh0LGUpLGwodCxbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkKCksdGhpcy5fY29tcHV0ZURpbWVuc2lvbnMoKSx0aGlzLl9jb21wdXRlUHJvcG9ydGlvbih0aGlzLnByb3BzLmFzcGVjdCl9fSx7a2V5OlwiX2NvbXB1dGVEaW1lbnNpb25zXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLHQ9ZS53aWR0aCxvPWUuaGVpZ2h0O3RoaXMuc2V0U3RhdGUoe3dpZHRoOmlzTmFOKHQpP3Q6dCtcInB4XCIsaGVpZ2h0OmlzTmFOKG8pP286bytcInB4XCJ9KX19LHtrZXk6XCJfY29tcHV0ZVByb3BvcnRpb25cIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlJiZlLmluZGV4T2YoXCI6XCIpPi0xKXt2YXIgdD1lLnNwbGl0KFwiOlwiKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlRmxvYXQoZSl9KTtpc05hTih0WzBdKXx8aXNOYU4odFsxXSl8fHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24oZSl7aWYoIWlzTmFOKHBhcnNlRmxvYXQoZS53aWR0aCkpKXJldHVybntwcm9wb3J0aW9uOihwYXJzZUZsb2F0KGUud2lkdGgpKih0WzFdL3RbMF0pKS50b1N0cmluZygpK2Uud2lkdGguc3Vic3RyaW5nKHBhcnNlRmxvYXQoZS53aWR0aCkudG9TdHJpbmcoKS5sZW5ndGgpLGhlaWdodDpcImF1dG9cIn19KX19fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnN0YXRlLHQ9ZS53aWR0aCxvPWUuaGVpZ2h0LHI9ZS5wcm9wb3J0aW9uLG49ZS5zcmMsaT1lLnNpemluZyxhPWUucG9zaXRpb24scz1lLmxvYWRpbmcsbD1lLmxvYWRlZCxwPWUucGxhY2Vob2xkZXJIaWRkZW4sYz10aGlzLnByb3BzLGQ9Yy5wcmVsb2FkLGY9Yy5mYWRlLGg9Yy5wbGFjZWhvbGRlclNpemluZyxnPWMucGxhY2Vob2xkZXIsbT1jLmFsdDtyZXR1cm4gdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiUHJvcG9ydGlvbmFsSW1hZ2VcIixzdHlsZTp7d2lkdGg6dCxoZWlnaHQ6byxwYWRkaW5nVG9wOnJ9fSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJzaXplZEltZ0RpdlwiLHJvbGU6XCJpbWdcIixzdHlsZTp7YmFja2dyb3VuZEltYWdlOm4/XCJ1cmwoXCIrbitcIilcIjp2b2lkIDAsYmFja2dyb3VuZFNpemU6aSxiYWNrZ3JvdW5kUG9zaXRpb246YSxiYWNrZ3JvdW5kUmVwZWF0Omk/XCJuby1yZXBlYXRcIjpcImluaXRpYWxcIixkaXNwbGF5Omk/XCJibG9ja1wiOlwibm9uZVwifX0pLHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3NyYzpuLGFsdDptLG9uTG9hZDp0aGlzLl9pbWFnZU9ubG9hZCxvbkVycm9yOnRoaXMuX2ltYWdlT25lcnJvcixzdHlsZTp7ZGlzcGxheTppP1wibm9uZVwiOlwiYmxvY2tcIn19KSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp7YmFja2dyb3VuZEltYWdlOmc/XCJ1cmwoXCIrZytcIilcIjp2b2lkIDAsYmFja2dyb3VuZFNpemU6aD9oOmksYmFja2dyb3VuZFBvc2l0aW9uOmEsYmFja2dyb3VuZFJlcGVhdDppP1wibm8tcmVwZWF0XCI6XCJpbml0aWFsXCJ9LGNsYXNzTmFtZTpcImltYWdlUGxhY2Vob2xkZXIgXCIrKHAmJlwiaGlkZGVuXCIpK1wiIFwiKyhkJiZmJiYhcyYmbCYmXCJmYWRlZC1vdXRcIil9KSl9fSx7a2V5OlwiX2ltYWdlT25sb2FkXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiExLGxvYWRlZDohMCxlcnJvcjohMX0pfX0se2tleTpcIl9pbWFnZU9uZXJyb3JcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2V0U3RhdGUocyh7fSx0aGlzLl9yZXNldCgpLHtlcnJvcjohMH0pKX19LHtrZXk6XCJfcmVzZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybntzcmM6dm9pZCAwLGxvYWRpbmc6ITEsbG9hZGVkOiExLGVycm9yOiExfX19LHtrZXk6XCJfbG9hZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fcmVzZXQoKTtpZighdGhpcy5wcm9wcy5wcmV2ZW50TG9hZCl7dmFyIHQ9dGhpcy5wcm9wcy5zcmM7ZS5zcmMhPT10JiYoZT1zKHt9LGUse3NyYzp0P3Q6dm9pZCAwLGxvYWRpbmc6ISF0fSkpfXRoaXMuc2V0U3RhdGUoZSl9fV0pLHR9KHUuZGVmYXVsdC5Db21wb25lbnQpO3QuZGVmYXVsdD1jfSxmdW5jdGlvbih0LG8pe3QuZXhwb3J0cz1lfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9wb3J0aW9uYWxJbWFnZS5idW5kbGUuanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9kaXN0L1Byb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZXM2L3Byb21pc2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYgKE9ic2VydmVyKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ2YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9taXNlLXJlc29sdmUuanMiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBMSUJSQVJZID8gZnVuY3Rpb24gKGEsIGIpIHtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59IDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICBpZiAocHJvbWlzZS5faCA9PSAxKSByZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYztcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVhY3Rpb247XG4gIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSB7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmIChyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSkgcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmICh4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKSByZXR1cm4geDtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUodGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19EYXRhVmlldy5qcyIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0hhc2guanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXBwbHkuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNXaXRoKGFycmF5LCB2YWx1ZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlNYXAuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNGbGF0dGVuYWJsZSA9IHJlcXVpcmUoJy4vX2lzRmxhdHRlbmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mbGF0dGVuYCB3aXRoIHN1cHBvcnQgZm9yIHJlc3RyaWN0aW5nIGZsYXR0ZW5pbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBmbGF0dGVuLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlcHRoIFRoZSBtYXhpbXVtIHJlY3Vyc2lvbiBkZXB0aC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZWRpY2F0ZT1pc0ZsYXR0ZW5hYmxlXSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNTdHJpY3RdIFJlc3RyaWN0IHRvIHZhbHVlcyB0aGF0IHBhc3MgYHByZWRpY2F0ZWAgY2hlY2tzLlxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdD1bXV0gVGhlIGluaXRpYWwgcmVzdWx0IHZhbHVlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlRmxhdHRlbihhcnJheSwgZGVwdGgsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBwcmVkaWNhdGUgfHwgKHByZWRpY2F0ZSA9IGlzRmxhdHRlbmFibGUpO1xuICByZXN1bHQgfHwgKHJlc3VsdCA9IFtdKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAoZGVwdGggPiAwICYmIHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIGlmIChkZXB0aCA+IDEpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgZmxhdHRlbiBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgICAgYmFzZUZsYXR0ZW4odmFsdWUsIGRlcHRoIC0gMSwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5UHVzaChyZXN1bHQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc1N0cmljdCkge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZsYXR0ZW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUZsYXR0ZW4uanMiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmhhc0luYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSGFzSW4ob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGtleSBpbiBPYmplY3Qob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSGFzSW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUhhc0luLmpzIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUlzTmFOID0gcmVxdWlyZSgnLi9fYmFzZUlzTmFOJyksXG4gICAgc3RyaWN0SW5kZXhPZiA9IHJlcXVpcmUoJy4vX3N0cmljdEluZGV4T2YnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IGBmcm9tSW5kZXhgIGJvdW5kcyBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZVxuICAgID8gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleClcbiAgICA6IGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWF0Y2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBvYmplY3RgIGlzIGEgbWF0Y2gsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgaWYgKChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSlcbiAgICAgICAgICA/IGRhdGFbMV0gIT09IG9iamVjdFtkYXRhWzBdXVxuICAgICAgICAgIDogIShkYXRhWzBdIGluIG9iamVjdClcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgdmFyIGtleSA9IGRhdGFbMF0sXG4gICAgICAgIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHNyY1ZhbHVlID0gZGF0YVsxXTtcblxuICAgIGlmIChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSkge1xuICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFjayA9IG5ldyBTdGFjaztcbiAgICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spO1xuICAgICAgfVxuICAgICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcsIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICAgICAgOiByZXN1bHRcbiAgICAgICAgICApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWF0Y2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTWF0Y2guanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmFOYCB3aXRob3V0IHN1cHBvcnQgZm9yIG51bWJlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hTjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLml0ZXJhdGVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbdmFsdWU9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYW4gaXRlcmF0ZWUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGl0ZXJhdGVlLlxuICovXG5mdW5jdGlvbiBiYXNlSXRlcmF0ZWUodmFsdWUpIHtcbiAgLy8gRG9uJ3Qgc3RvcmUgdGhlIGB0eXBlb2ZgIHJlc3VsdCBpbiBhIHZhcmlhYmxlIHRvIGF2b2lkIGEgSklUIGJ1ZyBpbiBTYWZhcmkgOS5cbiAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYwMzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pXG4gICAgICA6IGJhc2VNYXRjaGVzKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJdGVyYXRlZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXRlcmF0ZWUuanMiLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5cy5qcyIsInZhciBiYXNlSXNNYXRjaCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hdGNoJyksXG4gICAgZ2V0TWF0Y2hEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWF0Y2hEYXRhJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShtYXRjaERhdGFbMF1bMF0sIG1hdGNoRGF0YVswXVsxXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT09IHNvdXJjZSB8fCBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlTWF0Y2hlcy5qcyIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyksXG4gICAgZ2V0ID0gcmVxdWlyZSgnLi9nZXQnKSxcbiAgICBoYXNJbiA9IHJlcXVpcmUoJy4vaGFzSW4nKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lc24ndCBjbG9uZSBgc3JjVmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIGlmIChpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKHRvS2V5KHBhdGgpLCBzcmNWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBvYmpWYWx1ZSA9IGdldChvYmplY3QsIHBhdGgpO1xuICAgIHJldHVybiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBvYmpWYWx1ZSA9PT0gc3JjVmFsdWUpXG4gICAgICA/IGhhc0luKG9iamVjdCwgcGF0aClcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzUHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVByb3BlcnR5YCB3aGljaCBzdXBwb3J0cyBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eURlZXAocGF0aCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlEZWVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgb3ZlclJlc3QgPSByZXF1aXJlKCcuL19vdmVyUmVzdCcpLFxuICAgIHNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fc2V0VG9TdHJpbmcnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVJlc3QuanMiLCJ2YXIgY29uc3RhbnQgPSByZXF1aXJlKCcuL2NvbnN0YW50JyksXG4gICAgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXRUb1N0cmluZ2Agd2l0aG91dCBzdXBwb3J0IGZvciBob3QgbG9vcCBzaG9ydGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBiYXNlU2V0VG9TdHJpbmcgPSAhZGVmaW5lUHJvcGVydHkgPyBpZGVudGl0eSA6IGZ1bmN0aW9uKGZ1bmMsIHN0cmluZykge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuYywgJ3RvU3RyaW5nJywge1xuICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICdlbnVtZXJhYmxlJzogZmFsc2UsXG4gICAgJ3ZhbHVlJzogY29uc3RhbnQoc3RyaW5nKSxcbiAgICAnd3JpdGFibGUnOiB0cnVlXG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVNldFRvU3RyaW5nLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXG4gICAgY3JlYXRlU2V0ID0gcmVxdWlyZSgnLi9fY3JlYXRlU2V0JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBzZWVuID0gcmVzdWx0O1xuXG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICB9XG4gIGVsc2UgaWYgKGxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgdmFyIHNldCA9IGl0ZXJhdGVlID8gbnVsbCA6IGNyZWF0ZVNldChhcnJheSk7XG4gICAgaWYgKHNldCkge1xuICAgICAgcmV0dXJuIHNldFRvQXJyYXkoc2V0KTtcbiAgICB9XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIHNlZW4gPSBuZXcgU2V0Q2FjaGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcbiAgICAgICAgaWYgKHNlZW5bc2VlbkluZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyhzZWVuLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVW5pcS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsInZhciBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBub29wID0gcmVxdWlyZSgnLi9ub29wJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9iamVjdCBvZiBgdmFsdWVzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYWRkIHRvIHRoZSBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgc2V0LlxuICovXG52YXIgY3JlYXRlU2V0ID0gIShTZXQgJiYgKDEgLyBzZXRUb0FycmF5KG5ldyBTZXQoWywtMF0pKVsxXSkgPT0gSU5GSU5JVFkpID8gbm9vcCA6IGZ1bmN0aW9uKHZhbHVlcykge1xuICByZXR1cm4gbmV3IFNldCh2YWx1ZXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsInZhciBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3Mgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbWF0Y2ggZGF0YSBvZiBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hEYXRhKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0ga2V5cyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICB2YXIga2V5ID0gcmVzdWx0W2xlbmd0aF0sXG4gICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICByZXN1bHRbbGVuZ3RoXSA9IFtrZXksIHZhbHVlLCBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hdGNoRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBleGlzdHMgb24gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFzRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBoYXNGdW5jKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBmYWxzZTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSB0b0tleShwYXRoW2luZGV4XSk7XG4gICAgaWYgKCEocmVzdWx0ID0gb2JqZWN0ICE9IG51bGwgJiYgaGFzRnVuYyhvYmplY3QsIGtleSkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gIH1cbiAgaWYgKHJlc3VsdCB8fCArK2luZGV4ICE9IGxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogb2JqZWN0Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiYgaXNJbmRleChrZXksIGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1BhdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzUGF0aC5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoR2V0LmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoSGFzLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcHJlYWRhYmxlU3ltYm9sID0gU3ltYm9sID8gU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGZsYXR0ZW5hYmxlIGBhcmd1bWVudHNgIG9iamVjdCBvciBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmbGF0dGVuYWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0ZsYXR0ZW5hYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkgfHxcbiAgICAhIShzcHJlYWRhYmxlU3ltYm9sICYmIHZhbHVlICYmIHZhbHVlW3NwcmVhZGFibGVTeW1ib2xdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZsYXR0ZW5hYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzRmxhdHRlbmFibGUuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwidmFyIG1lbW9pemUgPSByZXF1aXJlKCcuL21lbW9pemUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIG1heGltdW0gbWVtb2l6ZSBjYWNoZSBzaXplLiAqL1xudmFyIE1BWF9NRU1PSVpFX1NJWkUgPSA1MDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1lbW9pemVgIHdoaWNoIGNsZWFycyB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24nc1xuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoY2FjaGUuc2l6ZSA9PT0gTUFYX01FTU9JWkVfU0laRSkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAgdmFyIGNhY2hlID0gcmVzdWx0LmNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVDYXBwZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19vdmVyQXJnLmpzIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyUmVzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19vdmVyUmVzdC5qcyIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwidmFyIGJhc2VTZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VTZXRUb1N0cmluZycpLFxuICAgIHNob3J0T3V0ID0gcmVxdWlyZSgnLi9fc2hvcnRPdXQnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRUb1N0cmluZy5qcyIsIi8qKiBVc2VkIHRvIGRldGVjdCBob3QgZnVuY3Rpb25zIGJ5IG51bWJlciBvZiBjYWxscyB3aXRoaW4gYSBzcGFuIG9mIG1pbGxpc2Vjb25kcy4gKi9cbnZhciBIT1RfQ09VTlQgPSA4MDAsXG4gICAgSE9UX1NQQU4gPSAxNjtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0J2xsIHNob3J0IG91dCBhbmQgaW52b2tlIGBpZGVudGl0eWAgaW5zdGVhZFxuICogb2YgYGZ1bmNgIHdoZW4gaXQncyBjYWxsZWQgYEhPVF9DT1VOVGAgb3IgbW9yZSB0aW1lcyBpbiBgSE9UX1NQQU5gXG4gKiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJlc3RyaWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc2hvcnRhYmxlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBzaG9ydE91dChmdW5jKSB7XG4gIHZhciBjb3VudCA9IDAsXG4gICAgICBsYXN0Q2FsbGVkID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YW1wID0gbmF0aXZlTm93KCksXG4gICAgICAgIHJlbWFpbmluZyA9IEhPVF9TUEFOIC0gKHN0YW1wIC0gbGFzdENhbGxlZCk7XG5cbiAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG9ydE91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zaG9ydE91dC5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tHZXQuanMiLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zIG9mIHZhbHVlcywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdHJpY3RJbmRleE9mLmpzIiwidmFyIG1lbW9pemVDYXBwZWQgPSByZXF1aXJlKCcuL19tZW1vaXplQ2FwcGVkJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUxlYWRpbmdEb3QgPSAvXlxcLi8sXG4gICAgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHJlTGVhZGluZ0RvdC50ZXN0KHN0cmluZykpIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb1BhdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwiLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJldHVybiBmcm9tIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb25zdGFudCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBfLnRpbWVzKDIsIF8uY29uc3RhbnQoeyAnYSc6IDEgfSkpO1xuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHMpO1xuICogLy8gPT4gW3sgJ2EnOiAxIH0sIHsgJ2EnOiAxIH1dXG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0c1swXSA9PT0gb2JqZWN0c1sxXSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uc3RhbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9jb25zdGFudC5qcyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvZ2V0LmpzIiwidmFyIGJhc2VIYXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VIYXNJbicpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBvciBpbmhlcml0ZWQgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNJbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2hhc0luLmpzIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZU9iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwiLyoqXG4gKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5sYXN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gbGVuZ3RoID8gYXJyYXlbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2xhc3QuanMiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL21lbW9pemUuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLm5vb3ApO1xuICogLy8gPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkXVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAvLyBObyBvcGVyYXRpb24gcGVyZm9ybWVkLlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vb3A7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9ub29wLmpzIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvcHJvcGVydHkuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3N0dWJBcnJheS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3RvU3RyaW5nLmpzIiwidmFyIGJhc2VGbGF0dGVuID0gcmVxdWlyZSgnLi9fYmFzZUZsYXR0ZW4nKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpLFxuICAgIGxhc3QgPSByZXF1aXJlKCcuL2xhc3QnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnVuaW9uYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGBpdGVyYXRlZWAgd2hpY2ggaXNcbiAqIGludm9rZWQgZm9yIGVhY2ggZWxlbWVudCBvZiBlYWNoIGBhcnJheXNgIHRvIGdlbmVyYXRlIHRoZSBjcml0ZXJpb24gYnlcbiAqIHdoaWNoIHVuaXF1ZW5lc3MgaXMgY29tcHV0ZWQuIFJlc3VsdCB2YWx1ZXMgYXJlIGNob3NlbiBmcm9tIHRoZSBmaXJzdFxuICogYXJyYXkgaW4gd2hpY2ggdGhlIHZhbHVlIG9jY3Vycy4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBvbmUgYXJndW1lbnQ6XG4gKiAodmFsdWUpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgY29tYmluZWQgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaW9uQnkoWzIuMV0sIFsxLjIsIDIuM10sIE1hdGguZmxvb3IpO1xuICogLy8gPT4gWzIuMSwgMS4yXVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy51bmlvbkJ5KFt7ICd4JzogMSB9XSwgW3sgJ3gnOiAyIH0sIHsgJ3gnOiAxIH1dLCAneCcpO1xuICogLy8gPT4gW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH1dXG4gKi9cbnZhciB1bmlvbkJ5ID0gYmFzZVJlc3QoZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHZhciBpdGVyYXRlZSA9IGxhc3QoYXJyYXlzKTtcbiAgaWYgKGlzQXJyYXlMaWtlT2JqZWN0KGl0ZXJhdGVlKSkge1xuICAgIGl0ZXJhdGVlID0gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBiYXNlVW5pcShiYXNlRmxhdHRlbihhcnJheXMsIDEsIGlzQXJyYXlMaWtlT2JqZWN0LCB0cnVlKSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmlvbkJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvdW5pb25CeS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMC4wMS4yMDE3LlxuICovXG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gXCJyLXJlcG9ydGFsLWJhc2VcIjtcbmltcG9ydCBIaXRsaXN0U2V0dXAgZnJvbSBcIi4vaGl0bGlzdC1zZXR1cFwiO1xuXG5jbGFzcyBIaXRsaXN0RGF0YXNvdXJjZSBleHRlbmRzIEhpdGxpc3RTZXR1cHtcbiAgLyoqXG4gICAqIFRoaXMgY2xhc3MgYWxsb3dzIHRvIGVzdGFibGlzaCBhIGNvbm5lY3Rpb24gd2l0aCB0aGUgSGl0TGlzdCBkYXRhYmFzZSBhbmQgdXNlIHV0aWxpdHkgbWV0aG9kcyB0byBxdWVyeSBhbmQgZmlsdGVyIGRhdGEgcHJvdmlkZWQgdGhlcmUncyBhIGhpdGxpc3Qgb24gdGhlIHBhZ2VcbiAgICogQGV4dGVuZHMgSGl0bGlzdFNldHVwXG4gICAqICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM9e30pe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc2VhcmNoVmFsdWVzPVtdO1xuICAgIC8qKiBAcHJvcGVydHkge1N0cmluZ30gbW9kaWZpZXIgLSBleHRyYSBwYXJhbXMgYWRkZWQgYXMgYSBzdHJpbmcgZnJvbSBmaWx0ZXJzICovXG4gICAgdGhpcy5tb2RpZmllciA9ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIHBlcmZvcm1zIGluaXRpYWwgZGF0YSBsb2FkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIGluaXRpYWxEYXRhTG9hZCgpe1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpbml0aWFsTG9hZDp0cnVlfSlcbiAgfVxuICAvKipcbiAgICogbG9hZHMgbmV4dCBwYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIG5leHRQYWdlKCl7XG4gICAgdGhpcy5fc2tpcFBhZ2UodHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpc1BhZ2luZzogdHJ1ZX0sdGhpcy5tb2RpZmllcik7XG4gIH1cbiAgLyoqXG4gICAqIGxvYWRzIHByZXZpb3VzIHBhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgcHJldmlvdXNQYWdlKCl7XG4gICAgdGhpcy5fc2tpcFBhZ2UoZmFsc2UpO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aXNQYWdpbmc6IHRydWV9LHRoaXMubW9kaWZpZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJpZXMgSGl0TGlzdCBBUElcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICogKi9cbiAgcmVxdWVzdFJlc3BvbnNlKG9wdGlvbnMpe1xuICAgIGxldCBxdWVyeT0gUmVwb3J0YWxCYXNlLmxvY2F0aW9uRGVzZXJpYWxpemUoKS5xdWVyeTtcbiAgICBpZihxdWVyeSAmJiBxdWVyeS5yZXBvcnRpZCAmJiB0aGlzLmhpdGxpc3RJRCl7XG4gICAgICAvKnNldCBjb21tb24gcGFyYW1zKi9cbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIFBhZ2VJZDogdGhpcy5wYWdlSUQsXG4gICAgICAgIHBhZ2VTdGF0ZUlkOiB0aGlzLnBhZ2VTdGF0ZUlELFxuICAgICAgICBQcmV2aWV3OiBxdWVyeS5wcmV2aWV3XG4gICAgICB9O1xuXG4gICAgICAvKmlmIG9wdGlvbnMgYXJlIHBhc3NlZCwgYWRkIG9wdGlvbnMqL1xuICAgICAgaWYob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpe1xuICAgICAgICBmb3IgKGxldCBhdHRybmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgcGFyYW1zW2F0dHJuYW1lXSA9IHR5cGVvZiBvcHRpb25zW2F0dHJuYW1lXT09PSdib29sZWFuJz8ob3B0aW9uc1thdHRybmFtZV0/JzEnOicwJyk6b3B0aW9uc1thdHRybmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoIXBhcmFtcy5zZWFyY2ggJiYgdGhpcy5fc2VhcmNoVmFsdWVzLmxlbmd0aD4wKXtcbiAgICAgICAgcGFyYW1zLnNlYXJjaCA9IEpTT04uc3RyaW5naWZ5KHRoaXMuX3NlYXJjaFZhbHVlcyk7XG4gICAgICB9XG5cbiAgICAgIGxldCBzb3J0aW5nUGFnaW5nVmFsdWVzID0gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzO1xuXG4gICAgICBpZiAoc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMhPW51bGwgJiYgIWlzTmFOKHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2VOdW1iZXIpKSB7XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaW5pdGlhbExvYWQgPT09IHRydWUpIHtcbiAgICAgICAgICBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcyA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnZU51bWJlciArPSBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdpbmdGb3J3YXJkID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHBhcmFtcy5zb3J0aW5nUGFnaW5nVmFsdWVzPUpTT04uc3RyaW5naWZ5KHNvcnRpbmdQYWdpbmdWYWx1ZXMpO1xuXG4gICAgICByZXR1cm4gUmVwb3J0YWxCYXNlLnByb21pc2VSZXF1ZXN0KGAke3RoaXMuc2VydmljZVVSTH0mJHtIaXRsaXN0RGF0YXNvdXJjZS5zZXJpYWxpemVQYXJhbXMocGFyYW1zKX0ke3RoaXMubW9kaWZpZXIhPScnPycmJyt0aGlzLm1vZGlmaWVyOicnfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT50aGlzLnBhcnNlUmVzcG9uc2UocmVzcG9uc2UpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgSGl0TGlzdCBBUEkgcmVzcG9uc2VcbiAgICogKi9cbiAgcGFyc2VSZXNwb25zZShyZXNwb25zZSl7XG4gICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcblxuICAgIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHJlc3BvbnNlLnNvcnRpbmdQYWdpbmdWYWx1ZXM7XG4gICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICB0aGlzLnBhZ2VJbmZvID0gcmVzcG9uc2UucGFnZUluZm87XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHBhZ2luZ0ZvcndhcmQgaWYgYHRydWVgIGdvZXMgZm9yd2FyZCwgaWYgYG51bGxgIGdvZXMgYmFja3dhcmRcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNhbGxiYWNrXG4gICAqICovXG4gIF9za2lwUGFnZShwYWdpbmdGb3J3YXJkKXtcbiAgICBsZXQgX3NwdiA9IHsuLi50aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXN9O1xuICAgIGxldCBwdiA9IHsuLi5fc3B2LnBhZ2luZ1ZhbHVlc30gfHwge307XG4gICAgcHYucGFnaW5nRm9yd2FyZCA9IHBhZ2luZ0ZvcndhcmQ7IC8qaWYgZm9yd2FyZCBpcyBuZWVkZWQgdGhlbiBwYXNzIHRydWUsIGVsc2UgbnVsbCAtIGJhY2t3YXJkKi9cbiAgICBwdi5zdGFydElkID0gcGFnaW5nRm9yd2FyZCA/IHB2Lmxhc3RTdGFydElkIDogcHYuZmlyc3RTdGFydElkO1xuICAgIHB2LnN0YXJ0VmFsdWUgPSBwYWdpbmdGb3J3YXJkID8gcHYubGFzdFN0YXJ0VmFsdWUgOiBwdi5maXJzdFN0YXJ0VmFsdWU7XG4gICAgdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzID0ge1xuICAgICAgLi4udGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLFxuICAgICAgcGFnaW5nVmFsdWVzOiBwdlxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogc2VyaWFsaXplIHBhcmFtcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgLSBhbiBvYmplY3Qgd2l0aCBwYXJhbWV0ZXJzXG4gICAqICovXG4gIHN0YXRpYyBzZXJpYWxpemVQYXJhbXMocGFyYW1zKXtcbiAgICBsZXQgcXVlcnkgPSBbXTtcbiAgICBmb3IobGV0IGtleSBpbiBwYXJhbXMpe1xuICAgICAgcXVlcnkucHVzaChba2V5LHBhcmFtc1trZXldXS5qb2luKCc9JykpO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnkuam9pbignJicpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0RGF0YXNvdXJjZTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LWRhdGFzb3VyY2UuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTAuMDEuMjAxNy5cbiAqL1xuXG5jbGFzcyBIaXRsaXN0U2V0dXB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgLy9maXggZm9yIHdpbmRvdy5sb2NhdGlvbiBvcmlnaW4sIHRoYW54IElFXG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24ub3JpZ2luKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgKHdpbmRvdy5sb2NhdGlvbi5wb3J0ID8gJzonICsgd2luZG93LmxvY2F0aW9uLnBvcnQ6ICcnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWcgPSBIaXRsaXN0U2V0dXAuZ2V0T3JpZ2luYWxDb25maWcoKTtcbiAgICB0aGlzLl9lbGVtZW50VHlwZSA9IHdpbmRvdy5IaXRMaXN0RWxlbWVudFR5cGU7XG4gICAgdGhpcy5fb3AgPSB3aW5kb3cuU2VhcmNoYWJsZUxpc3RPcGVyYXRvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBhbGxvd3MgZ2V0dGluZyBhIGxvY2FsaXNlZCBzdHJpbmcgaW4gdGhlIGxhbmd1YWdlIG9mIHRoZSByZXBvcnQgZnJvbSBIaXRsaXN0IGNvbmZpZy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAtIHRoZSBrZXkgdG8gbG9vayB0aGUgcHJvcGVydHkgdXBcbiAgICpcbiAgICogKiBgc3RvZWA6XCJTbWFsbGVyIHRoYW4gb3IgZXF1YWxcIixcbiAgICogKiBgZ3RvZWA6XCJHcmVhdGVyIHRoYW4gb3IgZXF1YWxcIixcbiAgICogKiBgYmV0d2VlbmA6XCJCZXR3ZWVuXCIsXG4gICAqICogYGJlZm9yZWA6XCJCZWZvcmVcIixcbiAgICogKiBgYWZ0ZXJgOlwiQWZ0ZXJcIixcbiAgICogKiBgZXhhY3RseWA6XCJFeGFjdGx5XCIsXG4gICAqICogYHNob3dkZWZhdWx0Y29sc2A6XCJTaG93IGRlZmF1bHQgY29sdW1uc1wiLFxuICAgKiAqIGBhcHBseWA6XCJBcHBseVwiLFxuICAgKiAqIGBjYW5jZWxgOlwiQ2FuY2VsXCIsXG4gICAqICogYHNob3doaWRlYDpcIlNob3cgLyBIaWRlIGNvbHVtbnNcIixcbiAgICogKiBgeWVzYDpcIlllc1wiLFxuICAgKiAqIGBub2A6XCJOb1wiLFxuICAgKiAqIGBsb2FkaW5nRGF0YWA6XCJMb2FkaW5nIGRhdGEsIHBsZWFzZSB3YWl0Li4uXCIsXCJcbiAgICogKiBgY2hlY2thbGxgOlwiQ2hlY2sgYWxsXCIsXG4gICAqICogYHVuY2hlY2thbGxgOlwiVW5jaGVjayBhbGxcIixcbiAgICogKiBgZXJyb3JMb2FkaW5nYDpcIkVycm9yIGxvYWRpbmcgZGF0YVwiLFxuICAgKiAqIGBlcnJvck5vQ29sdW1uc2A6XCJObyBjb2x1bW5zIHNlbGVjdGVkXCJcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUkVTUE9OREVOVE9WRVJWSUVXYDpcIlJlc3BvbmRlbnQgb3ZlcnZpZXdcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJJTlRgOlwiUHJpbnQgdGhlIGN1cnJlbnQgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19DTE9TRWA6XCJDbG9zZSB0aGlzIG92ZXJsYXlcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfRklMVEVSYDpcIkZpbHRlciBxdWVzdGlvbnNcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTk9USElOR0ZPVU5EYDpcIk5vIHF1ZXN0aW9ucyBtYXRjaCB5b3VyIHNlYXJjaFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VU2A6XCJQcmV2aW91c1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUkVWSU9VU0hJTlRgOlwiUHJldmlvdXMgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19ORVhUYDpcIk5leHRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTkVYVEhJTlRgOlwiTmV4dCByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX09GYDpcInswfSBvZiB7MX1cIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTU9SRWA6XCJ7MH0gbW9yZVwiLFxuICAgKiAqIFJFUE9SVF9TSU5HTEVWSUVXX0FMVEVSTkFUSVZFU2A6XCJBbnN3ZXJzIGFsdGVybmF0aXZlczpcIlxuICAgKlxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKiAqL1xuICBpMThuKGtleSl7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5jYXB0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpP3RoaXMuX2NvbmZpZy5jYXB0aW9uc1trZXldOnRoaXMuX2NvbmZpZy5zaW5nbGVWaWV3VGV4dHMuaGFzT3duUHJvcGVydHkoa2V5KT90aGlzLl9jb25maWcuc2luZ2xlVmlld1RleHRzW2tleV06bnVsbFxuICB9XG5cbiAgZ2V0IGRhdGEoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmhpdGxpc3REYXRhfVxuXG4gIHNldCBkYXRhKGRhdGEpe1xuICAgIHRoaXMuX2NvbmZpZy5oaXRsaXN0RGF0YSA9IGRhdGE7XG4gIH1cbiAgZ2V0IGRpc2FibGVOZXh0QnV0dG9uKCl7XG4gICAgcmV0dXJuIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcy5kaXNhYmxlTmV4dEJ1dHRvbiB8fCBmYWxzZVxuICB9XG4gIGdldCBkaXNhYmxlUHJldkJ1dHRvbigpe1xuICAgIHJldHVybiB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMuZGlzYWJsZVByZXZCdXR0b24gfHwgZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSB2aXNpYmxlIEhpdExpc3QgY29sdW1ucyBvZiBPYmplY3QgdHlwZTogYHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ31gXG4gICAqIEByZXR1cm5zIHtBcnJheS48e2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfT59IFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHZpc2libGUgSGl0TGlzdCBjb2x1bW5zXG4gICAqICovXG4gIGdldCBjb2x1bW5zKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5jb2x1bW5zfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGFsbCBIaXRMaXN0IGNvbHVtbnMgb2YgT2JqZWN0IHR5cGU6IGB7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9YFxuICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAqICovXG4gIGdldCBhbGxDb2x1bW5zKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5hbGxDb2x1bW5zfVxuXG4gIGdldCBoaXRsaXN0SUQoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmNvbXBvbmVudElkfVxuICBnZXQgcGFnZUlEKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5wYWdlSWR9XG4gIGdldCBsYW5ndWFnZSgpe3JldHVybiB0aGlzLl9jb25maWcubGFuZ3VhZ2V9XG4gIGdldCBzZXJ2aWNlVVJMKCl7cmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt0aGlzLl9jb25maWcuc2VydmljZVVybH1gfVxuICBnZXQgcGFnZVN0YXRlSUQoKXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1BhZ2VTdGF0ZUlkJyk/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQYWdlU3RhdGVJZCcpLnZhbHVlOnVuZGVmaW5lZH1cbiAgZ2V0IHNvcnRpbmdQYWdpbmdWYWx1ZXMoKXtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXMhPW51bGw/dGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXM6e31cbiAgfVxuICBzZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcyh2YWwpe1xuICAgIHRoaXMuX2NvbmZpZy5zb3J0aW5nUGFnaW5nVmFsdWVzID0gdmFsO1xuICB9XG5cbiAgc3RhdGljIF9maXhKc29uRGF0ZShqc29uRGF0ZSkge1xuICAgIGlmICghKGpzb25EYXRlICYmIFkgJiYgWS5MYW5nLmlzRnVuY3Rpb24oanNvbkRhdGUucmVwbGFjZSkpKSB7cmV0dXJuIGpzb25EYXRlO31cbiAgICBsZXQgY29uc3RyID0ganNvbkRhdGUucmVwbGFjZShuZXcgUmVnRXhwKFwiXi9EYXRlXFxcXCgoWy0rXT9cXFxcZCspXFxcXCkvJFwiKSwgXCJuZXcgRGF0ZSgkMSlcIik7XG4gICAgaWYgKGNvbnN0ciA9PSBqc29uRGF0ZSkge3JldHVybiBqc29uRGF0ZTt9XG4gICAgcmV0dXJuIGV2YWwoY29uc3RyKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHRoZSBjb25maWcgZm9yIGEgSGl0TGlzdCBpZiBpdCdzIGluaXRpYWxpc2VkIG9uIHRoZSBwYWdlXG4gICAqIGBgYFxuICAgKiB7XG4gICAqICBhbGxDb2x1bW5zOkFycmF5LFxuICAgKiAgY2FwdGlvbnM6T2JqZWN0LFxuICAgKiAgY2xpZW50SWQ6U3RyaW5nLFxuICAgKiAgY29sdW1uczpBcnJheSxcbiAgICogIGNvbXBvbmVudElkOlN0cmluZyxcbiAgICogIGhhc2hlZFByb2plY3RJZDpTdHJpbmcsXG4gICAqICBoaXRsaXN0RGF0YTpBcnJheSxcbiAgICogIGxhbmd1YWdlOk51bWJlcixcbiAgICogIG5leHRUZXh0OlN0cmluZyxcbiAgICogIG5vSW5pdGlhbExvYWQ6Qm9vbGVhbixcbiAgICogIHBhZ2VBamF4RW5hYmxlZDpCb29sZWFuLFxuICAgKiAgcGFnZUlkOlN0cmluZyxcbiAgICogIHByZXZUZXh0OlN0cmluZyxcbiAgICogIHByZXZpZXc6Qm9vbGVhbixcbiAgICogIHNlYXJjaEl0ZW1zOkFycmF5LFxuICAgKiAgc2VhcmNoVmFsdWVzOkFycmF5LFxuICAgKiAgc2VydmljZVVybDpTdHJpbmcsXG4gICAqICBzZXJ2aWNlVXJsTWV0YURhdGE6U3RyaW5nLFxuICAgKiAgc2hvd1NpbmdsZVZpZXdPblJvd1NlbGVjdDpCb29sZWFuLFxuICAgKiAgc2luZ2xlVmlld0FwaVVybDpTdHJpbmcsXG4gICAqICBzaW5nbGVWaWV3Rm9ybXNDaHVua0FwaVVybDpTdHJpbmcsXG4gICAqICBzaW5nbGVWaWV3VGV4dHM6T2JqZWN0LFxuICAgKiAgc29ydGluZ1BhZ2luZ1ZhbHVlczpPYmplY3QsXG4gICAqICBzdHlsZXM6T2JqZWN0LFxuICAgKiAgdmVyc2lvbjpTdHJpbmdcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogKi9cbiAgc3RhdGljIGdldE9yaWdpbmFsQ29uZmlnKCl7XG4gICAgbGV0IHNjcmlwdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKTtcbiAgICBpZihzY3JpcHRzKXtcbiAgICAgIGxldCBpPXNjcmlwdHMubGVuZ3RoLFxuICAgICAgICAgIGNmZyA9IC8oWVxcLlJlcG9ydGFsXFwuSGl0TGlzdCwpXFxzKC4qPylcXCk7L2dpO1xuICAgICAgd2hpbGUoaS0tKXtcbiAgICAgICAgbGV0IHNjcmlwdCA9IHNjcmlwdHNbaV0udGV4dDtcbiAgICAgICAgaWYoc2NyaXB0LmluZGV4T2YoJ1kuUmVwb3J0YWwuSGl0TGlzdCwnKT4tMSl7XG4gICAgICAgICAgbGV0IGV4ZWMgPSBjZmcuZXhlYyhzY3JpcHQpO1xuICAgICAgICAgIHJldHVybiAoZXhlYyE9bnVsbCAmJiBleGVjWzJdKT8gSlNPTi5wYXJzZShleGVjWzJdKTogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hpdGxpc3QgY29uZmlnIGlzIG5vdCBwcmVzZW50IG9uIHRoZSBwYWdlJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdFNldHVwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LXNldHVwLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDA3LjA5LjIwMTYuXG4gKi9cblxuaW1wb3J0IEhpdGxpc3REYXRhc291cmNlIGZyb20gXCIuL2hpdGxpc3QtZGF0YXNvdXJjZVwiO1xuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tIFwici1yZXBvcnRhbC1iYXNlXCI7XG5cbndpbmRvdy5SZXBvcnRhbCA9IHdpbmRvdy5SZXBvcnRhbCB8fCB7fTtcblJlcG9ydGFsQmFzZS5taXhpbih3aW5kb3cuUmVwb3J0YWwse1xuICBIaXRsaXN0RGF0YXNvdXJjZVxufSk7XG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0RGF0YXNvdXJjZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL21haW4uanMiLCIvL0BmbG93XHJcbmltcG9ydCBIaXRsaXN0RFMgZnJvbSBcInItaGl0bGlzdC1kYXRhc291cmNlXCI7XHJcbmltcG9ydCB1bmlvbkJ5IGZyb20gXCJsb2Rhc2gvdW5pb25CeVwiO1xyXG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gJ3ItcmVwb3J0YWwtYmFzZSc7XHJcblxyXG50eXBlIE9wdGlvbnMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIG5hbWUgb2YgYSBnbG9iYWwgY29uZmlnIHZhcmlhYmxlIHBhc3NlZFxyXG4gICAgKi9cclxuICAgIGNvbmZpZzogc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGlzcGxheSB0aHVtYnMgYXMgaW1hZ2UgcGxhY2Vob2xkZXJzIGluc3RlYWQgb2YgbWVkaWEgaWNvbnNcclxuICAgICovXHJcbiAgICB0aHVtYnNQbGFjZWhvbGRlcjogYm9vbGVhbixcclxuICAgIGNvbXBvbmVudDogYW55XHJcbn1cclxuXHJcbnR5cGUgcGFyc2VkRGF0YVJvdyA9IHtcclxuICAgIGlkOiBzdHJpbmcgfCBudW1iZXIsXHJcbiAgICB0aXRsZT86IHN0cmluZyxcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXHJcbiAgICBpbWFnZT86IHN0cmluZyxcclxuICAgIG1lZGlhdHlwZTogJ3ZpZGVvJyB8ICdhdWRpbycgfCAnaW1hZ2UnLFxyXG4gICAgbGluazogc3RyaW5nLFxyXG4gICAgW3g6c3RyaW5nXTpzdHJpbmcsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEU0Fic3RyYWN0aW9uKG9wdGlvbnM6IE9wdGlvbnMpIHtcclxuICAgIGNvbnN0IERTID0gbmV3IEhpdGxpc3REUygpO1xyXG4gICAgY29uc3QgY29tcG9uZW50ID0gb3B0aW9ucy5jb21wb25lbnQ7XHJcbiAgICBsZXQgY29uZmlnO1xyXG4gICAgY29uc3QgcXVlcnkgPSBSZXBvcnRhbEJhc2UubG9jYXRpb25EZXNlcmlhbGl6ZSgpLnF1ZXJ5O1xyXG5cclxuICAgIHNldHVwRGF0YUxpc3RlbmVyKG9wdGlvbnMuY29uZmlnKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIExhdW5jaGVzIGxpc3RlbmVyIGZvciBgWS5HbG9iYWwucmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVgIGV2ZW50IHdpdGhpbiBZVUkgd2hpY2ggaXMgdHJpZ2dlcmVkIGV2ZXJ5IHRpbWUgdGhlIGZpbHRlciBwYW5lbCB1cGRhdGVzIG9yIG9uIGluaXRpYWwgbG9hZFxyXG4gICAgICogKi9cclxuICAgIGZ1bmN0aW9uIHNldHVwRGF0YUxpc3RlbmVyKGNvbmZpZ05hbWUpIHtcclxuICAgICAgICBpZiAoWSAmJiBZLkdsb2JhbCkge1xyXG4gICAgICAgICAgICBZLkdsb2JhbC5vbihcInJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlXCIsIGZpbHRlckluZm8gPT4ge1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbGlzZUNvbmZpZyhjb25maWdOYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChEUyAmJiBjb25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBEUy5tb2RpZmllciA9IGZpbHRlckluZm87IC8vIGZpbHRlciBpbmZvcm1hdGlvbiBhcyBhIG1vZGlmaWVyIGZvciBkYXRhIGZldGNoXHJcbiAgICAgICAgICAgICAgICAgICAgRFMuaW5pdGlhbERhdGFMb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWVVJIGlzIG5vdCBkZWZpbmVkIG9yIGFjY2Vzc2libGUsIGNhbm5vdCBzZXQgdXAgYSBcInJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlXCIgbGlzdGVuZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGlzZUNvbmZpZyhjb25maWdOYW1lKSB7XHJcbiAgICAgICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgICAgICAgaWYgKCF3aW5kb3dbY29uZmlnTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29uZmlnIGlzIG5vdCBwYXNzZWQgZnJvbSBiYWNrZW5kJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25maWcgPSB3aW5kb3dbY29uZmlnTmFtZV07XHJcbiAgICAgICAgICAgIGlmKGNvbmZpZy5pbmRpdmlkdWFsUmVjb3JkcyAmJiB0eXBlb2YgY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzID09PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgICAgICAgICBjb25maWcuaW5kaXZpZHVhbFJlY29yZHMgPSBjb25maWcuaW5kaXZpZHVhbFJlY29yZHMuc3BsaXQoJywnKS5tYXAoaXRlbT0+aXRlbS50cmltKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7IGNvbmZpZyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhLCBtb2RlID0gJ3JlcGxhY2UnKSB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YTogcGFyc2VkRGF0YVJvd1tdID0gZGF0YS5tYXAoKGRhdGFSb3csIHJvd0luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXJzZWRSb3c6IHBhcnNlZERhdGFSb3cgPSB7fTtcclxuICAgICAgICAgICAgY29uc3QgaXIgPSBjb25maWcuaW5kaXZpZHVhbFJlY29yZHMgfHwgW107XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFGaWVsZHMgPSBbJ2lkJywgJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ2ltYWdlJywgJ2F1ZGlvJywgJ3ZpZGVvJywgJ3RhZ3MnXS5jb25jYXQoaXIpO1xyXG4gICAgICAgICAgICBkYXRhRmllbGRzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbklEID0gY29uZmlnW2tleV07XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRSb3dba2V5XSA9IHByZXBhcmVEYXRhKGRhdGFSb3dbY29sdW1uSUQgfHwga2V5XSwga2V5KTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIGltYWdlIC0gd2UgbWlnaHQgd2FudCB0byB1c2UgYSBwbGFjZWhvbGRlciBhcyB0aGUgdGh1bWIsIGFuZCBsb2FkIHRoZSBmdWxsIGltYWdlIGluIGJhY2tncm91bmRcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09ICdpbWFnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VkUm93LmltYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnRodW1ic1BsYWNlaG9sZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRSb3cucGxhY2Vob2xkZXIgPSBwYXJzZWRSb3cuaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkUm93LmltYWdlID0gcGFyc2VkUm93LmltYWdlLnJlcGxhY2UoL190aHVtYi9naSwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBtZWRpYXR5cGUgb3IgYSBwbGFjZWhvbGRlciBpY29uXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBhcnNlZFJvdy5tZWRpYXR5cGUgJiYgWyd2aWRlbycsICdhdWRpbycsICdpbWFnZSddLmluZGV4T2Yoa2V5KSA+IC0xICYmIGNvbmZpZ1trZXldICYmIHBhcnNlZFJvd1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkUm93Lm1lZGlhdHlwZSA9IGtleVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCBpZCBmb3Iga2V5c1xyXG4gICAgICAgICAgICBwYXJzZWRSb3cuaWQgPSBkYXRhUm93LnJlc3BvbnNlaWQgPyBkYXRhUm93LnJlc3BvbnNlaWQgOiByb3dJbmRleDtcclxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGxpbmsgcGFzc2VkIGFzIGBzbGlua2AgcHJvcGVydHkgaW4gZGF0YVxyXG4gICAgICAgICAgICBpZiAoZGF0YVJvdy5zbGluaykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGwgPSBkYXRhUm93LnNsaW5rO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkUm93LmxpbmsgPSAoL2hyZWY9JyguKz8pJy9naSkuZXhlYyhsKS5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkUm93O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSBzdGF0ZSB3aXRoIHRoZSBuZXcgc2V0IG9mIGRhdGEgb3IgYSBtZXJnZWQgZGF0YVxyXG4gICAgICAgIGlmIChtb2RlID09PSAncmVwbGFjZScpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBuZXdEYXRhLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2FwcGVuZCcpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFsuLi5wcmV2U3RhdGUuaXRlbXMsIC4uLm5ld0RhdGFdLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdtZXJnZScpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobW9kZSk7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiB1bmlvbkJ5KG5ld0RhdGEsIHByZXZTdGF0ZS5pdGVtcywgJ2lkJyksXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9GF0YDQtdC9INC30L3QsNC10YIg0YfRgtC+JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYXNzYWdlIGRhdGEgdG8gZml0IHRoZSB0eXBlIHdlIGV4cGVjdCB0byByZWNlaXZlIGluIHJlYWN0IHZpZXdcclxuICAgICAqICovXHJcbiAgICBmdW5jdGlvbiBwcmVwYXJlRGF0YShkYXRhOmFueSwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZXBhcmVEYXRhJyxkYXRhLHR5cGUpXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSAoL3NyYz0nKC4rPyknL2dpKS5leGVjKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdFsxXSA/IHJlc3VsdFsxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOlxyXG4gICAgICAgICAgICBjYXNlICd0aXRsZSc6cmV0dXJuICEoZGF0YS5pbmRleE9mKCctJykgPiAtMSAmJiBkYXRhLnRyaW0oKS5sZW5ndGggPT09IDEpID8gZGF0YS50cmltKCkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNhc2UgJ3ZpZGVvJzpcclxuICAgICAgICAgICAgY2FzZSAnYXVkaW8nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEoZGF0YS5pbmRleE9mKCctJykgPiAtMSAmJiBkYXRhLnRyaW0oKS5sZW5ndGggPT09IDEpID8gZ2VuZXJhdGVNZWRpYUxpbmsoZGF0YS50cmltKCksIHR5cGUpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjYXNlICd0YWdzJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhICYmIChkYXRhLmluZGV4T2YoJywnKSA+IC0xID8gZGF0YS5zcGxpdCgnLCcpIDogZGF0YS5pbmRleE9mKCctJykgPiAtMSAmJiBkYXRhLnRyaW0oKS5sZW5ndGggPT09IDEgPyB1bmRlZmluZWQgOiBkYXRhLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1lZGlhTGluayhmaWxlTmFtZTpzdHJpbmcsIHR5cGU6ICdhdWRpbyd8J3ZpZGVvJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dlbmVyYXRlTWVkaWFMaW5rJyxmaWxlTmFtZSx0eXBlKVxyXG4gICAgICAgIGNvbnN0IGRzTmFtZSA9IGNvbmZpZy5zdXJ2ZXlJRDtcclxuICAgICAgICByZXR1cm4gYC9yZXBvcnRhbC9XeXNpd3lnL1JlcG9ydC8ke3F1ZXJ5LnJlcG9ydGlkfS8ke2RzTmFtZX0vJHt0eXBlfS8ke2ZpbGVOYW1lfWBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIERTLmxvYWROZXh0UGFnZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gRFMubmV4dFBhZ2UoKVxyXG4gICAgICAgICAgICAudGhlbihwcm9jZXNzRGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5sb2FkUHJldmlvdXNQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBEUy5wcmV2aW91c1BhZ2UoKVxyXG4gICAgICAgICAgICAudGhlbihwcm9jZXNzRGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5sb2FkTW9yZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gRFMubmV4dFBhZ2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBwcm9jZXNzRGF0YShyZXNwb25zZSwgJ2FwcGVuZCcpKVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmluaXRpYWxMb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBEUy5pbml0aWFsRGF0YUxvYWQoKVxyXG4gICAgICAgICAgICAudGhlbihwcm9jZXNzRGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5nZXRQYWdlSW5mbyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBoYXNQYWdlSW5mbyA9IERTLnBhZ2VJbmZvICYmIERTLnNvcnRpbmdQYWdpbmdWYWx1ZXMgJiYgRFMuc29ydGluZ1BhZ2luZ1ZhbHVlcy50b3RhbEhpdHM7XHJcbiAgICAgICAgcmV0dXJuIGhhc1BhZ2VJbmZvID8gYCR7RFMucGFnZUluZm99IG9mICR7RFMuc29ydGluZ1BhZ2luZ1ZhbHVlcy50b3RhbEhpdHN9YCA6ICcnO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5jb25maWcgPSAoKSA9PiB7IHJldHVybiBjb25maWcgIT0gbnVsbCA/IGNvbmZpZyA6IGluaXRpYWxpc2VDb25maWcob3B0aW9ucy5jb25maWcpIH07XHJcblxyXG4gICAgcmV0dXJuIERTXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRFNBYnN0cmFjdGlvbi5qcyIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1nIGZyb20gJ1Byb3BvcnRpb25hbEltYWdlJztcclxuXHJcbmNvbnN0IE1FRElBX1RZUEVTID0gWydpbWFnZScsICdhdWRpbycsICd2aWRlbyddO1xyXG5cclxuY2xhc3MgSW1hZ2VHcmlkVGlsZSBleHRlbmRzIFB1cmVDb21wb25lbnR7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIHRpbGUgZm9yIGltYWdlIGxpc3RcclxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuaW1hZ2UgLSBpbWFnZSB1cmxcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMucGxhY2Vob2xkZXIgLSBhIHBsYWNlaG9sZGVyIGltYWdlXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyU2l6aW5nIC0gU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlci4gQnkgZGVmYXVsdCBpdCdzIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNyY2AgaW1hZ2UsIGJ1dCBzZXQgdG8gYGluaXRpYWxgIG9yIG90aGVyIHZhbGlkIGBiYWNrZ3JvdW5kLXNpemVgIHZhbHVlIHRvIG92ZXJyaWRlLlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5tZWRpYXR5cGUgLSBhIGRlZmF1bHQgbWVkaWEgaWNvbiBpbnN0ZWFkIG9mIHRoZSBwbGFjZWhvbGRlciBpbWFnZTogb25lIG9mIGBpbWFnZWAsYGF1ZGlvYCxgdmlkZW9gXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5pY29uQ29sb3I9XCIjY2NjY2NjXCJdIC0gZGVmYXVsdCBwbGFjZWhvbGRlciBtZWRpYSBpY29uIGNvbG9yXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5pY29uU2l6ZT00OF0gLSBkZWZhdWx0IHBsYWNlaG9sZGVyIG1lZGlhIGljb24gc2l6ZVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuYXNwZWN0PVwiMTY6OVwiXSAtIGFzcGVjdCByYXRpbyBvZiB0aGUgaW1hZ2UgdG8gYmUgaW4gdGhlIHRpbGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy50aXRsZSAtIHRpdGxlIG9mIHRoZSB2aWRlb1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5kZXNjcmlwdGlvbiAtIGRlc2NyaXB0aW9uIG9mIHRoZSB2aWRlb1xyXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMuYWN0aW9uSWNvbiAtIGljb24gdG8gZGlzcGxheSBhcyB0aGUgYWN0aW9uIGljb24uIEl0IGFsc28gaGFzIHRvIGhhdmUgYSBjYWxsYmFjayBhdHRhY2hlZCB0byBpdCB3aGVuIHBhc3NlZC5cclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblNlbGVjdCAtIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGxpbmsgaXMgY2xpY2tlZFxyXG4gICAqICovXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBhY3Rpb25CdXR0b24gPSBudWxsO1xyXG4gICAgY29uc3Qge2FjdGlvbkljb24sb25TZWxlY3QsYXNwZWN0LHRpdGxlLHBsYWNlaG9sZGVyU2l6aW5nLGltYWdlLGRlc2NyaXB0aW9ufT10aGlzLnByb3BzO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aW9uSWNvbikge1xyXG4gICAgICBhY3Rpb25CdXR0b24gPSA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWVkaXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWFjdGlvbi1pY29uXCI+e2FjdGlvbkljb259PC9kaXY+XHJcbiAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tY292ZXJcIiBvbkNsaWNrPXtvblNlbGVjdH0+XHJcbiAgICAgICAgICA8SW1nXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgIGFzcGVjdD17YXNwZWN0fVxyXG4gICAgICAgICAgICBzaXppbmc9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgIHByZWxvYWQ9e3RydWV9XHJcbiAgICAgICAgICAgIGZhZGU9e3RydWV9XHJcbiAgICAgICAgICAgIGFsdD17dGl0bGV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLl9jb21wdXRlVGlsZVR5cGUoKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXJTaXppbmc9e3BsYWNlaG9sZGVyU2l6aW5nfVxyXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tbWV0YVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLXRpdGxlIGVsbGlwc2lzXCIgb25DbGljaz17b25TZWxlY3R9Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1kZXNjcmlwdGlvbiBlbGxpcHNpc1wiPntkZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2FjdGlvbkJ1dHRvbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBfY29tcHV0ZVRpbGVUeXBlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qge3BsYWNlaG9sZGVyLG1lZGlhdHlwZSxpY29uU2l6ZSxpY29uQ29sb3J9ID0gdGhpcy5wcm9wcztcclxuICAgICAgaWYgKCFwbGFjZWhvbGRlciAmJiBtZWRpYXR5cGUpIHtcclxuICAgICAgICBpZiAoTUVESUFfVFlQRVMuaW5kZXhPZihtZWRpYXR5cGUpID09PSAtMSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgdHlwZSBcIiR7bWVkaWF0eXBlfVwiIGlzIHNwZWNpZmllZGApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpY29uID0gSW1hZ2VHcmlkVGlsZS5pY29uU2VydmVyKG1lZGlhdHlwZSwgaWNvblNpemUsIGljb25Db2xvcik7XHJcbiAgICAgICAgcmV0dXJuICdkYXRhOmltYWdlL3N2Zyt4bWwsJyArIGVzY2FwZShpY29uKTtcclxuICAgICAgfSBlbHNlIGlmKCEhcGxhY2Vob2xkZXIpe1xyXG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnZGF0YTppbWFnZS9zdmcreG1sLCcgKyBlc2NhcGUoSW1hZ2VHcmlkVGlsZS5pY29uU2VydmVyKCd1bmtub3duJywgaWNvblNpemUsIGljb25Db2xvcikpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gaWNvbiB3aXRoIGEgY29ycmVjdCBmaWxsIGNvbG9yXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBpY29uIG5hbWUgKG9uZSBvZiBgaW1hZ2VgLCBgdmlkZW9gLCBgYXVkaW9gKVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbc2l6ZT0yNF0gLSBpY29uIHNpemUgaW4gcGl4ZWxzXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtmaWxsPVwiI2NjY2NjY1wiXSAtIHZhbGlkIENTUyBjb2xvciBkZWNsYXJhdGlvblxyXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAgICogKi9cclxuICBzdGF0aWMgaWNvblNlcnZlcihuYW1lLCBzaXplID0gNDgsIGZpbGwgPSBcIiNjY2NjY2NcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWNvbnMgPSB7XHJcbiAgICAgICAgaW1hZ2U6IGA8cGF0aCBkPVwiTTIxIDE5VjVjMC0xLjEtLjktMi0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnpNOC41IDEzLjVsMi41IDMuMDFMMTQuNSAxMmw0LjUgNkg1bDMuNS00LjV6XCIvPmAsXHJcbiAgICAgICAgYXVkaW86IGA8cGF0aCBkPVwiTTEyIDN2MTAuNTVjLS41OS0uMzQtMS4yNy0uNTUtMi0uNTUtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00VjdoNFYzaC02elwiLz5gLFxyXG4gICAgICAgIHZpZGVvOiBgPHBhdGggZD1cIk0xOCA0bDIgNGgtM2wtMi00aC0ybDIgNGgtM2wtMi00SDhsMiA0SDdMNSA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRoLTR6XCIvPmAsXHJcbiAgICAgICAgdW5rbm93bjogYDxwYXRoIGQ9XCJNMjEgNXY2LjU5bC0zLTMuMDEtNCA0LjAxLTQtNC00IDQtMy0zLjAxVjVjMC0xLjEuOS0yIDItMmgxNGMxLjEgMCAyIC45IDIgMnptLTMgNi40MmwzIDMuMDFWMTljMCAxLjEtLjkgMi0yIDJINWMtMS4xIDAtMi0uOS0yLTJ2LTYuNThsMyAyLjk5IDQtNCA0IDQgNC0zLjk5elwiLz5gLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoIWljb25zW25hbWVdKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpY29uIFwiJHtuYW1lfVwiIGlzIG5vdCBvbiB0aGUgbGlzdGApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBgPHN2ZyBmaWxsPVwiJHtmaWxsfVwiIGhlaWdodD1cIiR7c2l6ZX1cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIke3NpemV9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiR7aWNvbnNbbmFtZV19PC9zdmc+YFxyXG4gICAgfSBjYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5JbWFnZUdyaWRUaWxlLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZSAgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFjZWhvbGRlciAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFjZWhvbGRlclNpemluZzogUHJvcFR5cGVzLm9uZU9mKFsnY29udGFpbicsICdjb3ZlcicsICdpbml0aWFsJ10pLFxyXG4gIG1lZGlhdHlwZSAgICAgICAgOiBQcm9wVHlwZXMub25lT2YoTUVESUFfVFlQRVMpLFxyXG4gIGljb25Db2xvciAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGljb25TaXplICAgICAgICAgOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGFzcGVjdCAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRpdGxlICAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGFjdGlvbkljb24gICAgICAgOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvblNlbGVjdCAgICAgICAgIDogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuXHJcbkltYWdlR3JpZFRpbGUuZGVmYXVsdFByb3BzID0ge1xyXG4gIGljb25Db2xvcjogXCIjY2NjY2NjXCIsXHJcbiAgaWNvblNpemUgOiA0OCxcclxuICBhc3BlY3QgICA6IFwiMTY6OVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHcmlkVGlsZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VHcmlkVGlsZS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2VHcmlkVGlsZSBmcm9tICcuLi9JbWFnZUdyaWRUaWxlJztcclxuXHJcblxyXG4vKipcclxuICogYEltYWdlR3JpZGAgaXMgYSBzdGF0ZWxlc3MgUmVhY3QgY29tcG9uZW50IHRoYXQgYWxsb3dzIHRvIGNvbXB1dGUgYW4gYXJyYXkgb2YgSW1hZ2VHcmlkVGlsZXMgZnJvbSBgaXRlbXNgIHBhc3NlZCBpbiBwcm9wc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMuaXRlbXMgLSBhbiBhcnJheSBvZiBpdGVtcyBge2lkOk51bWJlcnxTdHJpbmcsIGltYWdlOlN0cmluZywgbWVkaWF0eXBlOj9TdHJpbmcsIHBsYWNlaG9sZGVyOj9TdHJpbmcsIHRpdGxlOlN0cmluZyxkZXNjcmlwdGlvbjpTdHJpbmd9YFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuYXNwZWN0IC0gYXNwZWN0IHJhdGlvIGZvciB0aGUgSW1hZ2VHcmlkVGlsZSBpbWFnZVxyXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gcHJvcHMuYWN0aW9uSWNvbiAtIGFjdGlvbiBpY29uIEpTWCB3aXRoIGEgYm91bmQgaGFuZGxlclxyXG4gKiBAcGFyYW0gez9TdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyU2l6aW5nIC0gU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlci4gQnkgZGVmYXVsdCBpdCdzIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNyY2AgaW1hZ2UsIGJ1dCBzZXQgdG8gYGluaXRpYWxgIG9yIG90aGVyIHZhbGlkIGBiYWNrZ3JvdW5kLXNpemVgIHZhbHVlIHRvIG92ZXJyaWRlLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblNlbGVjdCAtIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhbiBpdGVtIGlzIGNsaWNrZWQgb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHByb3BzLmR1bW15SXRlbXMgLSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkIG9uXHJcbiAqICovXHJcbmNsYXNzIEltYWdlR3JpZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG5cclxuICBpdGVtQ2xpY2tIYW5kbGVyID0gKGl0ZW0pID0+IChldmVudCkgPT4gdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtKTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2l0ZW1zLCBkdW1teUl0ZW1zLCBhc3BlY3QsIHBsYWNlaG9sZGVyU2l6aW5nLCBhY3Rpb25JY29ufSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFwiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCA+IDAgJiYgaXRlbXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VHcmlkVGlsZVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgIGFzcGVjdD17YXNwZWN0fVxyXG4gICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgIG1lZGlhdHlwZT17aXRlbS5tZWRpYXR5cGV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2l0ZW0ucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJTaXppbmc9e2l0ZW0uaW1hZ2U/cGxhY2Vob2xkZXJTaXppbmc6J2luaXRpYWwnfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIGFjdGlvbkljb249e3R5cGVvZiBhY3Rpb25JY29uPT09J2Z1bmN0aW9uJz9hY3Rpb25JY29uKGl0ZW0pOm51bGx9XHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaXRlbUNsaWNrSGFuZGxlcihpdGVtKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtkdW1teUl0ZW1zICYmIHRoaXMucmVuZGVyRHVtbXlJdGVtcyhkdW1teUl0ZW1zKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyRHVtbXlJdGVtcyhjb3VudCkge1xyXG4gICAgY29uc3QgZHVtbXlJdGVtcyA9IFtdO1xyXG4gICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgZHVtbXlJdGVtcy5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZVwiIGtleT17YGR1bW15JHtjb3VudH1gfS8+KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGR1bW15SXRlbXNcclxuICB9XHJcbn1cclxuXHJcbkltYWdlR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheSxcclxuICBhc3BlY3Q6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYWN0aW9uSWNvbjogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgcGxhY2Vob2xkZXJTaXppbmc6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgZHVtbXlJdGVtczogUHJvcFR5cGVzLm51bWJlclxyXG59O1xyXG5cclxuSW1hZ2VHcmlkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkdW1teUl0ZW1zOiAxMlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHcmlkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VHcmlkL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29uZmlnKVxyXG4gICAgICAgIGlmIChjb25maWcpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IGNvbmZpZy5wYWdpbmF0aW9uO1xyXG4gICAgICAgICAgICBpZiAocGFnaW5hdGlvbiA9PT0gJ2NvbnRpbnVvdXMnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250aW51b3VzTmF2aWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5nTmF2aWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29udGludW91c05hdmlnYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgeyBsb2FkTW9yZSwgZGlzYWJsZU5leHRCdXR0b24gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Sb3dcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBmbGF0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2FkTW9yZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZU5leHRCdXR0b259XHJcbiAgICAgICAgICAgICAgICA+TG9hZCBtb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcGFnaW5nTmF2aWdhdGlvbigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGxvYWRQcmV2aW91c1BhZ2UsXHJcbiAgICAgICAgICAgIGxvYWROZXh0UGFnZSxcclxuICAgICAgICAgICAgZGlzYWJsZU5leHRCdXR0b24sXHJcbiAgICAgICAgICAgIGRpc2FibGVQcmV2QnV0dG9uLFxyXG4gICAgICAgICAgICBwYWdlSW5mbyxcclxuICAgICAgICAgICAgdHJhbnNsYXRlXHJcbiAgICAgICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uUm93XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsQnV0dG9uIGFjY2VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9hZFByZXZpb3VzUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZVByZXZCdXR0b259XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnUkVQT1JUX1NJTkdMRVZJRVdfUFJFVklPVVMnKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gYWNjZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2FkTmV4dFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVOZXh0QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ1JFUE9SVF9TSU5HTEVWSUVXX05FWFQnKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntwYWdlSW5mb308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RWaWRlby9OYXZpZ2F0aW9uLmpzIiwiLy9AZmxvd1xyXG5pbXBvcnQgdHlwZSB7U3RhdGUsIFByb3BzIH0gZnJvbSAnLi90eXBlcydcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlR3JpZCBmcm9tIFwiLi4vSW1hZ2VHcmlkXCI7XHJcbmltcG9ydCBTaW5nbGVWaWV3IGZyb20gXCIuLi9TaW5nbGVWaWV3XCI7XHJcbmltcG9ydCBEU0Fic3RyYWN0aW9uIGZyb20gJy4uL0RTQWJzdHJhY3Rpb24nXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbidcclxuaW1wb3J0IFNpbmdsZVZpZXdSZXNwb25zZXMgZnJvbSAnLi4vU2luZ2xlVmlldy9SZXNwb25zZXMnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VmlkZW8gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgRFMgPSBEU0Fic3RyYWN0aW9uKHtcclxuICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcsXHJcbiAgICB0aHVtYnNQbGFjZWhvbGRlcjogdGhpcy5wcm9wcy50aHVtYnNQbGFjZWhvbGRlcixcclxuICAgIGNvbXBvbmVudDogdGhpc1xyXG4gIH0pO1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGl0ZW1zOiBudWxsLFxyXG4gICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgY29uZmlnOiBudWxsLFxyXG4gICAgc2luZ2xlVmlld01vZGU6ICd2aWV3JyxcclxuICAgIHNpbmdsZVZpZXc6IHtcclxuICAgICAgbGluazogJydcclxuICAgIH0sXHJcbiAgICBzaW5nbGVWaWV3VmlzaWJsZTogZmFsc2UsXHJcbiAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXY6IGZhbHNlLFxyXG4gICAgc2luZ2xlVmlld0Rpc2FibGVOZXh0OiBmYWxzZSxcclxuICB9O1xyXG5cclxuICB0cmFuc2xhdGUgPSB0aGlzLkRTLmkxOG4uYmluZCh0aGlzLkRTKTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpdGVtcywgc2luZ2xlVmlld1Zpc2libGUsIGVycm9yLCBjb25maWcgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgcmVuZGVyID0gbnVsbDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuRFMpO1xyXG4gICAgaWYgKCFlcnJvciAmJiBBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgcmVuZGVyID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgR3JpZENvbnRhaW5lciAkeyFzaW5nbGVWaWV3VmlzaWJsZSA/ICdHcmlkVmlldycgOiAnJ31gfT5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlclNpbmdsZVZpZXcoKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkQ29udGFpbmVyXCIgc3R5bGU9e3sgZGlzcGxheTogIXNpbmdsZVZpZXdWaXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgPEltYWdlR3JpZFxyXG4gICAgICAgICAgICAgIGFzcGVjdD1cIjE2OjlcIlxyXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0fVxyXG4gICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICAgICAgICBhY3Rpb25JY29uPXtjb25maWcuY2FuRWRpdCA/IHRoaXMuYWN0aW9uSWNvbiA6IG51bGx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlck5hdmlnYXRpb24oKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5EUykge1xyXG4gICAgICAgIHJlbmRlciA9IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR3JpZENvbnRhaW5lciBJbWFnZUdyaWRcIj57dGhpcy5kYXRhTG9hZGluZ01lc3NhZ2UoKX08L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIaXRsaXN0RGF0YXNvdXJjZSBpcyBub3QgYXZhaWxhYmxlJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlbmRlclxyXG4gIH1cclxuXHJcbiAgcmVuZGVyTmF2aWdhdGlvbigpIHtcclxuICAgIGNvbnN0IHsgbG9hZFByZXZpb3VzUGFnZSwgbG9hZE5leHRQYWdlLCBsb2FkTW9yZSwgZGlzYWJsZU5leHRCdXR0b24sIGRpc2FibGVQcmV2QnV0dG9uLCBnZXRQYWdlSW5mbyB9ID0gdGhpcy5EUztcclxuICAgIGNvbnN0IG5hdmlnYXRpb25Qcm9wcyA9IHtcclxuICAgICAgbG9hZFByZXZpb3VzUGFnZSxcclxuICAgICAgbG9hZE5leHRQYWdlLFxyXG4gICAgICBsb2FkTW9yZSxcclxuICAgICAgZGlzYWJsZU5leHRCdXR0b24sXHJcbiAgICAgIGRpc2FibGVQcmV2QnV0dG9uLFxyXG4gICAgICBwYWdlSW5mbzogZ2V0UGFnZUluZm8oKSxcclxuICAgICAgY29uZmlnOiB0aGlzLnN0YXRlLmNvbmZpZyxcclxuICAgICAgdHJhbnNsYXRlOiB0aGlzLnRyYW5zbGF0ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8TmF2aWdhdGlvbiB7Li4ubmF2aWdhdGlvblByb3BzfSAvPlxyXG4gIH1cclxuXHJcbiAgcmVuZGVyU2luZ2xlVmlldygpIHtcclxuICAgIGNvbnN0IHsgc2luZ2xlVmlld1Zpc2libGUsIHNpbmdsZVZpZXcsIHNpbmdsZVZpZXdEaXNhYmxlUHJldiwgc2luZ2xlVmlld0Rpc2FibGVOZXh0LCBzaW5nbGVWaWV3TW9kZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiBzaW5nbGVWaWV3VmlzaWJsZSA/IChcclxuICAgICAgPFNpbmdsZVZpZXdcclxuICAgICAgICByZXR1cm5Ub0dyaWRBY3Rpb249e3RoaXMucmV0dXJuVG9HcmlkfVxyXG4gICAgICAgIGxvYWRQcmV2aW91c0l0ZW09e3RoaXMubG9hZFByZXZpb3VzSXRlbX1cclxuICAgICAgICBsb2FkTmV4dEl0ZW09e3RoaXMubG9hZE5leHRJdGVtfVxyXG4gICAgICAgIHNpbmdsZVZpZXdEaXNhYmxlUHJldj17c2luZ2xlVmlld0Rpc2FibGVQcmV2fVxyXG4gICAgICAgIHNpbmdsZVZpZXdEaXNhYmxlTmV4dD17c2luZ2xlVmlld0Rpc2FibGVOZXh0fVxyXG4gICAgICA+XHJcbiAgICAgICAge3NpbmdsZVZpZXdNb2RlID09PSAnZWRpdCcgP1xyXG4gICAgICAgICAgKDxpZnJhbWUgY2xhc3NOYW1lPVwicmVuZGVyQXJlYVwiIHNyYz17c2luZ2xlVmlldy5saW5rfSAvPilcclxuICAgICAgICAgIDpcclxuICAgICAgICAgICg8U2luZ2xlVmlld1Jlc3BvbnNlcyBkYXRhPXtzaW5nbGVWaWV3fSBjb2x1bW5zPXt0aGlzLmluZGl2aWR1YWxSZWNvcmRzUXVlc3Rpb25JZHN9IGNvbHVtbnNNYXA9e3RoaXMuaW5kaXZpZHVhbFJlY29yZHNLZXlMYWJlbHN9IC8+KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9TaW5nbGVWaWV3PlxyXG4gICAgKSA6IG51bGxcclxuICB9XHJcblxyXG4gIGdldCBpbmRpdmlkdWFsUmVjb3Jkc1F1ZXN0aW9uSWRzKCkge1xyXG4gICAgY29uc3QgeyBpbmRpdmlkdWFsUmVjb3JkcyB9ID0gdGhpcy5EUy5jb25maWcoKTtcclxuICAgIHJldHVybiBpbmRpdmlkdWFsUmVjb3JkcyAhPSBudWxsICYmIEFycmF5LmlzQXJyYXkoaW5kaXZpZHVhbFJlY29yZHMpID8gaW5kaXZpZHVhbFJlY29yZHMgOiBbXVxyXG4gIH1cclxuXHJcbiAgZ2V0IGluZGl2aWR1YWxSZWNvcmRzS2V5TGFiZWxzKCkge1xyXG4gICAgcmV0dXJuIHsuLi50aGlzLmdldExhYmVsc0Zvck1haW5GaWVsZHMoKSwgLi4udGhpcy5nZXRMYWJlbHNGb3JJbmRpdmlkdWFsUmVjb3JkcygpfVxyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWxzRm9yTWFpbkZpZWxkcygpe1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5EUy5jb25maWcoKTtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdpbWFnZScsICdhdWRpbycsICd2aWRlbyddLnJldmVyc2UoKS5mb3JFYWNoKGtleSA9PlxyXG4gICAgICBtYXBba2V5XSA9IHRoaXMuRFMuYWxsQ29sdW1ucy5maWx0ZXIocmVjb3JkID0+XHJcbiAgICAgICAgcmVjb3JkLmtleSA9PT0gY29uZmlnW2tleV1cclxuICAgICAgKVswXS5sYWJlbFxyXG4gICAgKVxyXG4gICAgcmV0dXJuIG1hcDtcclxuICB9IFxyXG5cclxuICBnZXRMYWJlbHNGb3JJbmRpdmlkdWFsUmVjb3Jkcygpe1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBjb25zdCBpcklkcyA9IHRoaXMuaW5kaXZpZHVhbFJlY29yZHNRdWVzdGlvbklkcztcclxuICAgIHRoaXMuRFMuYWxsQ29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgIGlmIChpcklkcy5pbmRleE9mKGNvbHVtbi5rZXkpID4gLTEpIHtcclxuICAgICAgICBtYXBbY29sdW1uLmtleV0gPSBjb2x1bW4ubGFiZWxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBtYXA7XHJcbiAgfSBcclxuXHJcblxyXG5cclxuICBkYXRhTG9hZGluZ01lc3NhZ2UoKSB7XHJcbiAgICBsZXQgbWVzc2FnZTtcclxuICAgIGNvbnN0IHsgaXRlbXMsIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIG1lc3NhZ2UgPSAnZXJyb3JMb2FkaW5nJ1xyXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgbWVzc2FnZSA9ICdSRVBPUlRfU0lOR0xFVklFV19OT1RISU5HRk9VTkQnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlID0gJ2xvYWRpbmdEYXRhJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuRFMuaTE4bihtZXNzYWdlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuVG9HcmlkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgc2luZ2xlVmlldzoge1xyXG4gICAgICAgIGxpbms6ICcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGxvYWRQcmV2aW91c0l0ZW0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZUl0ZW1zKCdiYWNrJylcclxuICB9XHJcblxyXG4gIGxvYWROZXh0SXRlbSA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlSXRlbXMoJ2ZvcndhcmQnKVxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVJdGVtcyhkaXJlY3Rpb246ICdmb3J3YXJkJyB8ICdiYWNrd2FyZCcpOiB2b2lkIHtcclxuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uVHlwZSA9IHRoaXMuc3RhdGUuY29uZmlnLnBhZ2luYXRpb247XHJcbiAgICBsZXQgaXRlbXNMZW5ndGggPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgY3VycmVudFNpbmdsZVZpZXdJdGVtSW5kZXggPSBpdGVtcy5pbmRleE9mKHRoaXMuc3RhdGUuc2luZ2xlVmlldyk7XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBkaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4ICsgMSA6IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4IC0gMTtcclxuXHJcbiAgICBjb25zdCBsb2FkSXRlbUZyb21QcmV2aW91c1BhZ2UgPSBuZXh0SW5kZXggPCAwICYmICF0aGlzLkRTLmRpc2FibGVQcmV2QnV0dG9uO1xyXG4gICAgY29uc3QgbG9hZEl0ZW1Gcm9tTmV4dFBhZ2UgPSBuZXh0SW5kZXggPiBpdGVtc0xlbmd0aCAmJiAhdGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbjtcclxuXHJcbiAgICBsZXQgcHJvbWlzZWRJdGVtcyA9IFByb21pc2UucmVzb2x2ZShpdGVtcyk7XHJcbiAgICAvLyBhc3NpZ24gaXRlbXMgdG8gdGhlbmFibGUgcHJvbWlzZXMgaWYgcmVxdWVzdGVkIGl0ZW0gaXMgb3V0c2lkZSBvZiBkYXRhIGJvdW5kYXJpZXNcclxuICAgIGlmIChsb2FkSXRlbUZyb21QcmV2aW91c1BhZ2UpIHtcclxuICAgICAgcHJvbWlzZWRJdGVtcyA9IHRoaXMuRFMubG9hZFByZXZpb3VzUGFnZSgpO1xyXG4gICAgfSBlbHNlIGlmIChsb2FkSXRlbUZyb21OZXh0UGFnZSkge1xyXG4gICAgICBwcm9taXNlZEl0ZW1zID0gcGFnaW5hdGlvblR5cGUgIT09ICdjb250aW51b3VzJyA/IHRoaXMuRFMubG9hZE5leHRQYWdlKCkgOiB0aGlzLkRTLmxvYWRNb3JlKCk7XHJcbiAgICB9XHJcbiAgICAvKiAgICAgY29uc3QgaXRlbXNBcmVQcm9taXNlZCA9ICFBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5oYXNPd25Qcm9wZXJ0eSgndGhlbicpO1xyXG4gICAgICAgIGlmICghaXRlbXNBcmVQcm9taXNlZCkge1xyXG4gICAgICAgICAgcHJvbWlzZWRJdGVtcyA9IFByb21pc2UucmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICovXHJcbiAgICBwcm9taXNlZEl0ZW1zLnRoZW4oKCkgPT4ge1xyXG4gICAgICBsZXQgc2luZ2xlVmlld0RhdGE7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgICBjb25zdCBuZXdJdGVtcyA9IHByZXZTdGF0ZS5pdGVtcztcclxuICAgICAgICBjb25zdCBhdERhdGFMZWZ0Qm91bmRhcnlDYW5Mb2FkID0gbmV4dEluZGV4IDwgMCAmJiAhc2luZ2xlVmlld0Rpc2FibGVQcmV2O1xyXG4gICAgICAgIGNvbnN0IGF0RGF0YVJpZ2h0Qm91bmRhcnlDYW5Mb2FkID0gbmV4dEluZGV4ID4gaXRlbXNMZW5ndGggJiYgIXNpbmdsZVZpZXdEaXNhYmxlTmV4dCAmJiBwYWdpbmF0aW9uVHlwZSAhPT0gJ2NvbnRpbnVvdXMnO1xyXG4gICAgICAgIGlmIChhdERhdGFMZWZ0Qm91bmRhcnlDYW5Mb2FkKSB7XHJcbiAgICAgICAgICBzaW5nbGVWaWV3RGF0YSA9IG5ld0l0ZW1zW25ld0l0ZW1zLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgfSBlbHNlIGlmIChhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCkge1xyXG4gICAgICAgICAgc2luZ2xlVmlld0RhdGEgPSBuZXdJdGVtc1swXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaW5nbGVWaWV3RGF0YSA9IG5ld0l0ZW1zW25leHRJbmRleF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi50aGlzLmdldFNpbmdsZVZpZXdOYXZTdGF0ZShuZXh0SW5kZXgpLFxyXG4gICAgICAgICAgc2luZ2xlVmlldzogc2luZ2xlVmlld0RhdGEsXHJcbiAgICAgICAgICBzaW5nbGVWaWV3VmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNpbmdsZVZpZXdOYXZTdGF0ZShpdGVtKSB7IH1cclxuXHJcbiAgb25TZWxlY3QgPSAoaXRlbSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnRoaXMuZ2V0U2luZ2xlVmlld05hdlN0YXRlKHRoaXMuc3RhdGUuaXRlbXMuaW5kZXhPZihpdGVtKSksXHJcbiAgICAgIHNpbmdsZVZpZXc6IGl0ZW0sXHJcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiB0cnVlLFxyXG4gICAgICBzaW5nbGVWaWV3TW9kZTogJ3ZpZXcnXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGdldFNpbmdsZVZpZXdOYXZTdGF0ZShjdXJyZW50SXRlbUluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcztcclxuICAgIGxldCBzaW5nbGVWaWV3RGlzYWJsZU5leHQgPSBmYWxzZSxcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2ID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRJdGVtSW5kZXggPD0gMCAmJiB0aGlzLkRTLmRpc2FibGVQcmV2QnV0dG9uKSB7XHJcbiAgICAgIHNpbmdsZVZpZXdEaXNhYmxlUHJldiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEl0ZW1JbmRleCA+PSBpdGVtcy5sZW5ndGggLSAxICYmIHRoaXMuRFMuZGlzYWJsZU5leHRCdXR0b24pIHtcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVOZXh0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNpbmdsZVZpZXdEaXNhYmxlUHJldixcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVOZXh0XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3Rpb25JY29uQ2xpY2sgPSAoaXRlbSkgPT4gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAuLi50aGlzLmdldFNpbmdsZVZpZXdOYXZTdGF0ZSh0aGlzLnN0YXRlLml0ZW1zLmluZGV4T2YoaXRlbSkpLFxyXG4gICAgc2luZ2xlVmlldzogaXRlbSxcclxuICAgIHNpbmdsZVZpZXdWaXNpYmxlOiB0cnVlLFxyXG4gICAgc2luZ2xlVmlld01vZGU6ICdlZGl0J1xyXG4gIH0pXHJcbiAgYWN0aW9uSWNvbiA9IChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3ZnIGNsYXNzTmFtZT1cImljb25cIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIG9uQ2xpY2s9e3RoaXMuYWN0aW9uSWNvbkNsaWNrKGl0ZW0pfT5cclxuICAgICAgICA8cGF0aCBkPVwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3pcIiAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFjdFZpZGVvL2luZGV4LmpzIiwiLy9AZmxvd1xyXG5pbXBvcnQgdHlwZSB7TmF2QnV0dG9uUHJvcHN9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTURJY29uIGZyb20gJ01ESWNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZCdXR0b24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PE5hdkJ1dHRvblByb3BzLCBhbnk+IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGljb24sIC4uLndyYXBwZXIgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3LS1uYXYtYnV0dG9uXCIgey4uLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPE1ESWNvbiBpY29uPXtpY29ufSAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvTmF2QnV0dG9uLmpzIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNlcyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgY29sdW1ucywgY29sdW1uc01hcCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IG1haW5Db2x1bW5zID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdpbWFnZScsICdhdWRpbycsICd2aWRlbyddO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVuZGVyQXJlYSBSZXNwb25zZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJSZXNwb25zZXMtLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bWFpbkNvbHVtbnMgIT0gbnVsbCAmJiBtYWluQ29sdW1ucy5tYXAocUlEID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbcUlEXSA/ICg8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLWxhYmVsXCI+e2NvbHVtbnNNYXBbcUlEXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS12YWx1ZVwiPnt0aGlzW2BfJHtxSUR9UmVuZGVyZXJgXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1ucyAhPSBudWxsICYmIGNvbHVtbnMubWFwKHFJRCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW3FJRF0gPyAoPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWxcIj57Y29sdW1uc01hcFtxSURdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWx1ZVwiPntkYXRhW3FJRF19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBfdGl0bGVSZW5kZXJlcigpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEudGl0bGVcclxuICAgIH1cclxuICAgIGdldCBfZGVzY3JpcHRpb25SZW5kZXJlcigpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEuZGVzY3JpcHRpb25cclxuICAgIH1cclxuICAgIGdldCBfaW1hZ2VSZW5kZXJlcigpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuICg8aW1nIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cImF1dG9cIiBzcmM9e2RhdGEuaW1hZ2V9IC8+KVxyXG4gICAgfVxyXG4gICAgZ2V0IF92aWRlb1JlbmRlcmVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8dmlkZW8gY29udHJvbHMgc3R5bGU9e3sgd2lkdGg6ICcxMDAlICFpbXBvcnRhbnQnLCBoZWlnaHQ6ICdhdXRvICFpbXBvcnRhbnQnIH19PlxyXG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2RhdGEudmlkZW99IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cclxuICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZ2V0IF9hdWRpb1JlbmRlcmVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgY29sdW1uc01hcCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gPGF1ZGlvIHNyYz17ZGF0YS5hdWRpb30gdHlwZT1cImF1ZGlvL21wNFwiIGNvbnRyb2xzIHN0eWxlPXt7IHdpZHRoOiAnMTAwJSAhaW1wb3J0YW50JywgaGVpZ2h0OiAnYXV0byAhaW1wb3J0YW50JyB9fT48L2F1ZGlvPlxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvUmVzcG9uc2VzLmpzIiwiLy9AZmxvd1xyXG5pbXBvcnQgdHlwZSB7UHJvcHMsIE5hdkJhclByb3BzIH0gZnJvbSAnLi90eXBlcydcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZCdXR0b24gZnJvbSAnLi9OYXZCdXR0b24nXHJcbmltcG9ydCB7IGljX2Fycm93X2JhY2ssIGljX2Fycm93X2ZvcndhcmQsIGljX3ZpZXdfbW9kdWxlIH0gZnJvbSAnLi4vaWNvbnMnO1xyXG5cclxuY29uc3QgTmF2QmFyID0gZnVuY3Rpb24gKHByb3BzOk5hdkJhclByb3BzKSB7XHJcbiAgY29uc3QgeyBsb2FkUHJldmlvdXNJdGVtLCByZXR1cm5Ub0dyaWRBY3Rpb24sIGxvYWROZXh0SXRlbSwgc2luZ2xlVmlld0Rpc2FibGVQcmV2LCBzaW5nbGVWaWV3RGlzYWJsZU5leHQgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbmdsZVZpZXctLWhlYWRlclwiPlxyXG4gICAgICA8TmF2QnV0dG9uIGRpc2FibGVkPXtzaW5nbGVWaWV3RGlzYWJsZVByZXZ9IHRpdGxlPVwiUHJldmlvdXMgaXRlbVwiIG9uQ2xpY2s9e2xvYWRQcmV2aW91c0l0ZW19IGljb249e2ljX2Fycm93X2JhY2t9IC8+XHJcbiAgICAgIDxOYXZCdXR0b24gdGl0bGU9XCJSZXR1cm4gdG8gdGhlIGxpc3RcIiBvbkNsaWNrPXtyZXR1cm5Ub0dyaWRBY3Rpb259IGljb249e2ljX3ZpZXdfbW9kdWxlfSAvPlxyXG4gICAgICA8TmF2QnV0dG9uIGRpc2FibGVkPXtzaW5nbGVWaWV3RGlzYWJsZU5leHR9IHRpdGxlPVwiTmV4dCBJdGVtXCIgb25DbGljaz17bG9hZE5leHRJdGVtfSBpY29uPXtpY19hcnJvd19mb3J3YXJkfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGVWaWV3IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgdm9pZD4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtjaGlsZHJlbiwgLi4ubmF2QmFyUHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlVmlld1wiPlxyXG4gICAgICAgIDxOYXZCYXIgey4uLm5hdkJhclByb3BzfS8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBpY19zdGFyID0gPHBhdGggZD1cIk0xMiAxNy4yN0wxOC4xOCAyMWwtMS42NC03LjAzTDIyIDkuMjRsLTcuMTktLjYxTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMXpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX3N0YXJfYm9yZGVyID0gPHBhdGggZD1cIk0yMiA5LjI0bC03LjE5LS42MkwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjEgMTIgMTcuMjcgMTguMTggMjFsLTEuNjMtNy4wM0wyMiA5LjI0ek0xMiAxNS40bC0zLjc2IDIuMjcgMS00LjI4LTMuMzItMi44OCA0LjM4LS4zOEwxMiA2LjFsMS43MSA0LjA0IDQuMzguMzgtMy4zMiAyLjg4IDEgNC4yOEwxMiAxNS40elwiLz47XG5leHBvcnQgY29uc3QgaWNfYXJyb3dfYmFjayA9IDxwYXRoIGQ9XCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHYtMnpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX2Fycm93X2ZvcndhcmQgPSA8cGF0aCBkPVwiTTEyIDRsLTEuNDEgMS40MUwxNi4xNyAxMUg0djJoMTIuMTdsLTUuNTggNS41OUwxMiAyMGw4LTh6XCIvPjtcbmV4cG9ydCBjb25zdCBpY192aWV3X21vZHVsZSA9IDxwYXRoIGQ9XCJNNCAxMWg1VjVINHY2em0wIDdoNXYtNkg0djZ6bTYgMGg1di02aC01djZ6bTYgMGg1di02aC01djZ6bS02LTdoNVY1aC01djZ6bTYtNnY2aDVWNWgtNXpcIi8+O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ljb25zLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMjIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAyMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==