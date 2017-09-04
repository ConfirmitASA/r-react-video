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
	          { className: 'ImageGridTile--edit ripple' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjY2Nzc1NzMzNDM3NWUzYTg5OTciLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwid2VicGFjazovLy8uL34vci1yZXBvcnRhbC1iYXNlL3NyYy9yZXBvcnRhbC1iYXNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9NREljb24vZGlzdC9NREljb24uYnVuZGxlLmpzIiwid2VicGFjazovLy8uL34vUHJvcG9ydGlvbmFsSW1hZ2UvZGlzdC9Qcm9wb3J0aW9uYWxJbWFnZS5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZXM2L3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FwcGx5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VGbGF0dGVuLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUhhc0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc01hdGNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5RGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWF0Y2hEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNGbGF0dGVuYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJSZXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zaG9ydE91dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaGFzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9tZW1vaXplLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC90b1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC91bmlvbkJ5LmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3QtZGF0YXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LXNldHVwLmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RTQWJzdHJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlR3JpZFRpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlR3JpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RWaWRlby9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWFjdFZpZGVvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TaW5nbGVWaWV3L05hdkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2luZ2xlVmlldy9SZXNwb25zZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmdsZVZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbImxhdW5jaFZpZGVvSGl0bGlzdCIsImNvbmZpZ05hbWUiLCJ0aHVtYnNQbGFjZWhvbGRlciIsIkVycm9yIiwiVHlwZUVycm9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXBvcnRhbCIsIm1peGluIiwic3RvcmUiLCJyZXF1aXJlIiwidWlkIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJnbG9iYWwiLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwiZnJlZUdsb2JhbCIsImZyZWVTZWxmIiwiT2JqZWN0Iiwicm9vdCIsImlzQXJyYXkiLCJBcnJheSIsImJhc2VJc05hdGl2ZSIsImdldFZhbHVlIiwiZ2V0TmF0aXZlIiwib2JqZWN0Iiwia2V5IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJpc09iamVjdCIsIml0IiwiZFAiLCJjcmVhdGVEZXNjIiwiZiIsImlzT2JqZWN0TGlrZSIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwiZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImJhc2VHZXRUYWciLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImFGdW5jdGlvbiIsImZuIiwidGhhdCIsImxlbmd0aCIsImIiLCJjIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYXNPd25Qcm9wZXJ0eSIsImFuT2JqZWN0IiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIk8iLCJQIiwiQXR0cmlidXRlcyIsImUiLCJsaXN0Q2FjaGVDbGVhciIsImxpc3RDYWNoZURlbGV0ZSIsImxpc3RDYWNoZUdldCIsImxpc3RDYWNoZUhhcyIsImxpc3RDYWNoZVNldCIsIkxpc3RDYWNoZSIsImVudHJpZXMiLCJpbmRleCIsImNsZWFyIiwiZW50cnkiLCJzZXQiLCJwcm90b3R5cGUiLCJoYXMiLCJlcSIsImFzc29jSW5kZXhPZiIsImFycmF5IiwiaXNLZXlhYmxlIiwiZ2V0TWFwRGF0YSIsIm1hcCIsImRhdGEiLCJfX2RhdGFfXyIsIm5hdGl2ZUNyZWF0ZSIsImlzU3ltYm9sIiwiSU5GSU5JVFkiLCJ0b0tleSIsInJlc3VsdCIsIlJlcG9ydGFsQmFzZSIsInRhcmdldCIsInNvdXJjZSIsImkiLCJsZXZlbCIsImFyZ3MiLCJjb25zb2xlIiwiX2xvZ2dlciIsImV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJzdHIiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwiVVJMIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ubG9hZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2VuZCIsInZhcmlhYmxlIiwicXVlcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsInZhcnMiLCJzcGxpdCIsInBhaXIiLCJ0b0xvd2VyQ2FzZSIsIm8iLCJwYXRoIiwib3JpZ2luIiwicGF0aG5hbWUiLCJmb3JFYWNoIiwiYVBhaXIiLCJwdXNoIiwiam9pbiIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJpcyIsImNyZWF0ZUVsZW1lbnQiLCJkZWYiLCJUQUciLCJ0YWciLCJzdGF0IiwiY29uZmlndXJhYmxlIiwic2hhcmVkIiwiY2VpbCIsImZsb29yIiwiSU9iamVjdCIsImRlZmluZWQiLCJNYXAiLCJtYXBDYWNoZUNsZWFyIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsInJlSXNEZWVwUHJvcCIsInJlSXNQbGFpblByb3AiLCJpc0tleSIsInR5cGUiLCJ0ZXN0Iiwic2V0VG9BcnJheSIsInNpemUiLCJpZGVudGl0eSIsImJhc2VJc0FyZ3VtZW50cyIsIm9iamVjdFByb3RvIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJpc0FyZ3VtZW50cyIsIk1BWF9TQUZFX0lOVEVHRVIiLCJpc0xlbmd0aCIsInN5bWJvbFRhZyIsImNvZiIsIkFSRyIsInRyeUdldCIsIlQiLCJCIiwiY2FsbGVlIiwiY3R4IiwiaGlkZSIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJJU19GT1JDRUQiLCJGIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIlMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJJU19XUkFQIiwiVyIsImV4cFByb3RvIiwib3duIiwib3V0IiwiQyIsInZpcnR1YWwiLCJSIiwiVSIsImV4ZWMiLCJkb2N1bWVudEVsZW1lbnQiLCJMSUJSQVJZIiwicmVkZWZpbmUiLCJJdGVyYXRvcnMiLCIkaXRlckNyZWF0ZSIsInNldFRvU3RyaW5nVGFnIiwiZ2V0UHJvdG90eXBlT2YiLCJJVEVSQVRPUiIsIkJVR0dZIiwia2V5cyIsIkZGX0lURVJBVE9SIiwiS0VZUyIsIlZBTFVFUyIsInJldHVyblRoaXMiLCJCYXNlIiwiTkFNRSIsIkNvbnN0cnVjdG9yIiwibmV4dCIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJraW5kIiwicHJvdG8iLCJ2YWx1ZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIm1ldGhvZHMiLCJJdGVyYXRvclByb3RvdHlwZSIsIlByb21pc2VDYXBhYmlsaXR5IiwicHJvbWlzZSIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiU0hBUkVEIiwiaW52b2tlIiwiaHRtbCIsImNlbCIsInByb2Nlc3MiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImlkIiwibGlzdGVuZXIiLCJuZXh0VGljayIsIm5vdyIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsInRvSW50ZWdlciIsIm1pbiIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwiU2V0Iiwic2V0Q2FjaGVBZGQiLCJzZXRDYWNoZUhhcyIsIlNldENhY2hlIiwiYWRkIiwic3RhY2tDbGVhciIsInN0YWNrRGVsZXRlIiwic3RhY2tHZXQiLCJzdGFja0hhcyIsInN0YWNrU2V0IiwiU3RhY2siLCJhcnJheVB1c2giLCJvZmZzZXQiLCJjYXN0UGF0aCIsImJhc2VHZXQiLCJiYXNlSXNFcXVhbERlZXAiLCJiYXNlSXNFcXVhbCIsIm90aGVyIiwiYml0bWFzayIsImN1c3RvbWl6ZXIiLCJzdGFjayIsImNhY2hlSGFzIiwiY2FjaGUiLCJzdHJpbmdUb1BhdGgiLCJhcnJheVNvbWUiLCJDT01QQVJFX1BBUlRJQUxfRkxBRyIsIkNPTVBBUkVfVU5PUkRFUkVEX0ZMQUciLCJlcXVhbEFycmF5cyIsImVxdWFsRnVuYyIsImlzUGFydGlhbCIsImFyckxlbmd0aCIsIm90aExlbmd0aCIsInN0YWNrZWQiLCJzZWVuIiwiYXJyVmFsdWUiLCJvdGhWYWx1ZSIsImNvbXBhcmVkIiwib3RoSW5kZXgiLCJyZUlzVWludCIsImlzSW5kZXgiLCJpc1N0cmljdENvbXBhcmFibGUiLCJtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSIsInNyY1ZhbHVlIiwiZnVuY1Byb3RvIiwiZnVuY1RvU3RyaW5nIiwidG9Tb3VyY2UiLCJmdW5jIiwiaXNGdW5jdGlvbiIsImlzQXJyYXlMaWtlIiwic3R1YkZhbHNlIiwiZnJlZUV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwibmF0aXZlSXNCdWZmZXIiLCJpc0J1ZmZlciIsImFzeW5jVGFnIiwiZnVuY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwiYmFzZUlzVHlwZWRBcnJheSIsImJhc2VVbmFyeSIsIm5vZGVVdGlsIiwibm9kZUlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheSIsImFycmF5TGlrZUtleXMiLCJiYXNlS2V5cyIsInQiLCJyIiwicmVhY3QiLCJuIiwibG9hZGVkIiwibSIsInAiLCJkZWZhdWx0IiwiTURJY29uIiwiX19lc01vZHVsZSIsIlJlZmVyZW5jZUVycm9yIiwidSIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJsIiwicHJvcHMiLCJmaWxsIiwiaWNvbiIsImxvZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInMiLCJhc3NpZ24iLCJfaW1hZ2VPbmxvYWQiLCJiaW5kIiwiX2ltYWdlT25lcnJvciIsInN0YXRlIiwic3JjIiwicGxhY2Vob2xkZXJIaWRkZW4iLCJwbGFjZWhvbGRlciIsInNpemluZyIsInBvc2l0aW9uIiwicHJvcG9ydGlvbiIsImxvYWRpbmciLCJlcnJvciIsIl9sb2FkIiwiX2NvbXB1dGVEaW1lbnNpb25zIiwiX2NvbXB1dGVQcm9wb3J0aW9uIiwiYXNwZWN0Iiwic2V0U3RhdGUiLCJpbmRleE9mIiwiZCIsInByZWxvYWQiLCJmYWRlIiwiaCIsInBsYWNlaG9sZGVyU2l6aW5nIiwiZyIsImFsdCIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInJvbGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJkaXNwbGF5Iiwib25Mb2FkIiwib25FcnJvciIsIl9yZXNldCIsInByZXZlbnRMb2FkIiwiQ29tcG9uZW50IiwiUHJvbWlzZSIsImZvcmJpZGRlbkZpZWxkIiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiaXRlcmFibGUiLCJpdGVyRm4iLCJzdGVwIiwiaXRlcmF0b3IiLCJkb25lIiwidW4iLCJBcnJheVByb3RvIiwicmV0IiwiZGVzY3JpcHRvciIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIml0ZXIiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwidGhlbiIsInRhc2siLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50IiwiY29udGVudFdpbmRvdyIsIndyaXRlIiwiY2xvc2UiLCJQcm9wZXJ0aWVzIiwiZ2V0S2V5cyIsImRlZmluZVByb3BlcnRpZXMiLCJ0b09iamVjdCIsIk9iamVjdFByb3RvIiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCIka2V5cyIsInYiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIngiLCJwcm9taXNlQ2FwYWJpbGl0eSIsIkRFU0NSSVBUT1JTIiwiU1BFQ0lFUyIsIktFWSIsIkQiLCJUT19TVFJJTkciLCJwb3MiLCJTdHJpbmciLCJjaGFyQ29kZUF0IiwiY2hhckF0IiwibWF4IiwidmFsIiwidmFsdWVPZiIsImNsYXNzb2YiLCJnZXRJdGVyYXRvck1ldGhvZCIsImFkZFRvVW5zY29wYWJsZXMiLCJpdGVyYXRlZCIsIl90IiwiX2kiLCJfayIsIkFyZ3VtZW50cyIsImFuSW5zdGFuY2UiLCJmb3JPZiIsInNwZWNpZXNDb25zdHJ1Y3RvciIsIm1pY3JvdGFzayIsIm5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlIiwicGVyZm9ybSIsInByb21pc2VSZXNvbHZlIiwiUFJPTUlTRSIsIiRQcm9taXNlIiwiZW1wdHkiLCJJbnRlcm5hbCIsIm5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSIsIk93blByb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJGYWtlUHJvbWlzZSIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsInNhbWVDb25zdHJ1Y3RvciIsImlzVGhlbmFibGUiLCJpc1JlamVjdCIsIl9uIiwiY2hhaW4iLCJfYyIsIl92Iiwib2siLCJfcyIsInJlYWN0aW9uIiwiaGFuZGxlciIsImZhaWwiLCJfaCIsIm9uSGFuZGxlVW5oYW5kbGVkIiwib25VbmhhbmRsZWQiLCJ1bmhhbmRsZWQiLCJpc1VuaGFuZGxlZCIsImVtaXQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsInJlYXNvbiIsIl9hIiwib25yZWplY3Rpb25oYW5kbGVkIiwiJHJlamVjdCIsIl9kIiwiX3ciLCIkcmVzb2x2ZSIsIndyYXBwZXIiLCJleGVjdXRvciIsImVyciIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsImNhcGFiaWxpdHkiLCJhbGwiLCJyZW1haW5pbmciLCIkaW5kZXgiLCJhbHJlYWR5Q2FsbGVkIiwicmFjZSIsIiRhdCIsInBvaW50IiwiVE9fU1RSSU5HX1RBRyIsIkRPTUl0ZXJhYmxlcyIsIkNvbGxlY3Rpb24iLCJEYXRhVmlldyIsImhhc2hDbGVhciIsImhhc2hEZWxldGUiLCJoYXNoR2V0IiwiaGFzaEhhcyIsImhhc2hTZXQiLCJIYXNoIiwiVWludDhBcnJheSIsIldlYWtNYXAiLCJ0aGlzQXJnIiwiYXJyYXlGaWx0ZXIiLCJwcmVkaWNhdGUiLCJyZXNJbmRleCIsImJhc2VJbmRleE9mIiwiYXJyYXlJbmNsdWRlcyIsImFycmF5SW5jbHVkZXNXaXRoIiwiY29tcGFyYXRvciIsImJhc2VUaW1lcyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsImFycmF5TWFwIiwiaXRlcmF0ZWUiLCJiYXNlRmluZEluZGV4IiwiZnJvbVJpZ2h0IiwiaXNGbGF0dGVuYWJsZSIsImJhc2VGbGF0dGVuIiwiZGVwdGgiLCJpc1N0cmljdCIsImJhc2VHZXRBbGxLZXlzIiwia2V5c0Z1bmMiLCJzeW1ib2xzRnVuYyIsImJhc2VIYXNJbiIsImJhc2VJc05hTiIsInN0cmljdEluZGV4T2YiLCJhcmdzVGFnIiwiZXF1YWxCeVRhZyIsImVxdWFsT2JqZWN0cyIsImdldFRhZyIsImFycmF5VGFnIiwib2JqZWN0VGFnIiwib2JqSXNBcnIiLCJvdGhJc0FyciIsIm9ialRhZyIsIm90aFRhZyIsIm9iaklzT2JqIiwib3RoSXNPYmoiLCJpc1NhbWVUYWciLCJvYmpJc1dyYXBwZWQiLCJvdGhJc1dyYXBwZWQiLCJvYmpVbndyYXBwZWQiLCJvdGhVbndyYXBwZWQiLCJiYXNlSXNNYXRjaCIsIm1hdGNoRGF0YSIsIm5vQ3VzdG9taXplciIsIm9ialZhbHVlIiwiaXNNYXNrZWQiLCJyZVJlZ0V4cENoYXIiLCJyZUlzSG9zdEN0b3IiLCJyZUlzTmF0aXZlIiwiUmVnRXhwIiwicGF0dGVybiIsImJvb2xUYWciLCJkYXRlVGFnIiwiZXJyb3JUYWciLCJtYXBUYWciLCJudW1iZXJUYWciLCJyZWdleHBUYWciLCJzZXRUYWciLCJzdHJpbmdUYWciLCJ3ZWFrTWFwVGFnIiwiYXJyYXlCdWZmZXJUYWciLCJkYXRhVmlld1RhZyIsImZsb2F0MzJUYWciLCJmbG9hdDY0VGFnIiwiaW50OFRhZyIsImludDE2VGFnIiwiaW50MzJUYWciLCJ1aW50OFRhZyIsInVpbnQ4Q2xhbXBlZFRhZyIsInVpbnQxNlRhZyIsInVpbnQzMlRhZyIsInR5cGVkQXJyYXlUYWdzIiwiYmFzZU1hdGNoZXMiLCJiYXNlTWF0Y2hlc1Byb3BlcnR5IiwicHJvcGVydHkiLCJiYXNlSXRlcmF0ZWUiLCJpc1Byb3RvdHlwZSIsIm5hdGl2ZUtleXMiLCJnZXRNYXRjaERhdGEiLCJoYXNJbiIsImJhc2VQcm9wZXJ0eSIsImJhc2VQcm9wZXJ0eURlZXAiLCJvdmVyUmVzdCIsInNldFRvU3RyaW5nIiwiYmFzZVJlc3QiLCJzdGFydCIsImNvbnN0YW50IiwiYmFzZVNldFRvU3RyaW5nIiwic3RyaW5nIiwic3ltYm9sUHJvdG8iLCJzeW1ib2xUb1N0cmluZyIsImJhc2VUb1N0cmluZyIsImNyZWF0ZVNldCIsIkxBUkdFX0FSUkFZX1NJWkUiLCJiYXNlVW5pcSIsImluY2x1ZGVzIiwiaXNDb21tb24iLCJvdXRlciIsImNvbXB1dGVkIiwic2VlbkluZGV4IiwiY29yZUpzRGF0YSIsIm5vb3AiLCJtYXBUb0FycmF5Iiwic3ltYm9sVmFsdWVPZiIsImJ5dGVMZW5ndGgiLCJieXRlT2Zmc2V0IiwiYnVmZmVyIiwibWVzc2FnZSIsImNvbnZlcnQiLCJnZXRBbGxLZXlzIiwib2JqUHJvcHMiLCJvYmpMZW5ndGgiLCJvdGhQcm9wcyIsInNraXBDdG9yIiwib2JqQ3RvciIsIm90aEN0b3IiLCJnZXRTeW1ib2xzIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJpc093biIsInVubWFza2VkIiwic3R1YkFycmF5IiwibmF0aXZlR2V0U3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbCIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJBcnJheUJ1ZmZlciIsIkN0b3IiLCJjdG9yU3RyaW5nIiwiaGFzUGF0aCIsImhhc0Z1bmMiLCJIQVNIX1VOREVGSU5FRCIsInNwcmVhZGFibGVTeW1ib2wiLCJpc0NvbmNhdFNwcmVhZGFibGUiLCJtYXNrU3JjS2V5IiwiYXJyYXlQcm90byIsInNwbGljZSIsImxhc3RJbmRleCIsInBvcCIsIm1lbW9pemUiLCJNQVhfTUVNT0laRV9TSVpFIiwibWVtb2l6ZUNhcHBlZCIsIm92ZXJBcmciLCJmcmVlUHJvY2VzcyIsImJpbmRpbmciLCJ0cmFuc2Zvcm0iLCJhcmciLCJuYXRpdmVNYXgiLCJvdGhlckFyZ3MiLCJzaG9ydE91dCIsIkhPVF9DT1VOVCIsIkhPVF9TUEFOIiwibmF0aXZlTm93IiwiRGF0ZSIsImNvdW50IiwibGFzdENhbGxlZCIsInN0YW1wIiwicGFpcnMiLCJyZUxlYWRpbmdEb3QiLCJyZVByb3BOYW1lIiwicmVFc2NhcGVDaGFyIiwibWF0Y2giLCJudW1iZXIiLCJxdW90ZSIsImRlZmF1bHRWYWx1ZSIsImlzQXJyYXlMaWtlT2JqZWN0IiwiRlVOQ19FUlJPUl9URVhUIiwicmVzb2x2ZXIiLCJtZW1vaXplZCIsIkNhY2hlIiwidW5pb25CeSIsImFycmF5cyIsIkhpdGxpc3REYXRhc291cmNlIiwib3B0aW9ucyIsIl9zZWFyY2hWYWx1ZXMiLCJtb2RpZmllciIsInJlcXVlc3RSZXNwb25zZSIsImluaXRpYWxMb2FkIiwiX3NraXBQYWdlIiwiaXNQYWdpbmciLCJsb2NhdGlvbkRlc2VyaWFsaXplIiwicmVwb3J0aWQiLCJoaXRsaXN0SUQiLCJwYXJhbXMiLCJQYWdlSWQiLCJwYWdlSUQiLCJwYWdlU3RhdGVJZCIsInBhZ2VTdGF0ZUlEIiwiUHJldmlldyIsInByZXZpZXciLCJhdHRybmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzb3J0aW5nUGFnaW5nVmFsdWVzIiwicGFnaW5nVmFsdWVzIiwicGFnZU51bWJlciIsInBhZ2luZ0ZvcndhcmQiLCJwcm9taXNlUmVxdWVzdCIsInNlcnZpY2VVUkwiLCJzZXJpYWxpemVQYXJhbXMiLCJwYXJzZVJlc3BvbnNlIiwicmVzcG9uc2UiLCJwYXJzZSIsInBhZ2VJbmZvIiwiX3NwdiIsInB2Iiwic3RhcnRJZCIsImxhc3RTdGFydElkIiwiZmlyc3RTdGFydElkIiwic3RhcnRWYWx1ZSIsImxhc3RTdGFydFZhbHVlIiwiZmlyc3RTdGFydFZhbHVlIiwiSGl0bGlzdFNldHVwIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsIl9jb25maWciLCJnZXRPcmlnaW5hbENvbmZpZyIsIl9lbGVtZW50VHlwZSIsIkhpdExpc3RFbGVtZW50VHlwZSIsIl9vcCIsIlNlYXJjaGFibGVMaXN0T3BlcmF0b3IiLCJjYXB0aW9ucyIsInNpbmdsZVZpZXdUZXh0cyIsImhpdGxpc3REYXRhIiwiZGlzYWJsZU5leHRCdXR0b24iLCJkaXNhYmxlUHJldkJ1dHRvbiIsImNvbHVtbnMiLCJhbGxDb2x1bW5zIiwiY29tcG9uZW50SWQiLCJwYWdlSWQiLCJsYW5ndWFnZSIsInNlcnZpY2VVcmwiLCJxdWVyeVNlbGVjdG9yIiwianNvbkRhdGUiLCJZIiwiTGFuZyIsImNvbnN0ciIsImV2YWwiLCJzY3JpcHRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNmZyIsInNjcmlwdCIsInRleHQiLCJEU0Fic3RyYWN0aW9uIiwiRFMiLCJjb21wb25lbnQiLCJjb25maWciLCJzZXR1cERhdGFMaXN0ZW5lciIsIkdsb2JhbCIsIm9uIiwiaW5pdGlhbGlzZUNvbmZpZyIsImZpbHRlckluZm8iLCJpbml0aWFsRGF0YUxvYWQiLCJwcm9jZXNzRGF0YSIsImNhdGNoIiwiaGFuZGxlRGF0YUxvYWRpbmdFcnJvciIsImluZGl2aWR1YWxSZWNvcmRzIiwiaXRlbSIsInRyaW0iLCJtb2RlIiwibmV3RGF0YSIsImRhdGFSb3ciLCJyb3dJbmRleCIsInBhcnNlZFJvdyIsImlyIiwiZGF0YUZpZWxkcyIsImNvbHVtbklEIiwicHJlcGFyZURhdGEiLCJpbWFnZSIsIm1lZGlhdHlwZSIsInJlc3BvbnNlaWQiLCJzbGluayIsImxpbmsiLCJpdGVtcyIsInByZXZTdGF0ZSIsImdlbmVyYXRlTWVkaWFMaW5rIiwiZmlsZU5hbWUiLCJkc05hbWUiLCJzdXJ2ZXlJRCIsImxvYWROZXh0UGFnZSIsIm5leHRQYWdlIiwibG9hZFByZXZpb3VzUGFnZSIsInByZXZpb3VzUGFnZSIsImxvYWRNb3JlIiwiZ2V0UGFnZUluZm8iLCJoYXNQYWdlSW5mbyIsInRvdGFsSGl0cyIsIk1FRElBX1RZUEVTIiwiSW1hZ2VHcmlkVGlsZSIsImFjdGlvbkJ1dHRvbiIsImFjdGlvbkljb24iLCJvblNlbGVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfY29tcHV0ZVRpbGVUeXBlIiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJpY29uU2VydmVyIiwiZXNjYXBlIiwiaWNvbnMiLCJhdWRpbyIsInZpZGVvIiwidW5rbm93biIsInByb3BUeXBlcyIsIm9uZU9mIiwiSW1hZ2VHcmlkIiwiaXRlbUNsaWNrSGFuZGxlciIsImR1bW15SXRlbXMiLCJyZW5kZXJEdW1teUl0ZW1zIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJOYXZpZ2F0aW9uIiwicGFnaW5hdGlvbiIsImNvbnRpbnVvdXNOYXZpZ2F0aW9uIiwicGFnaW5nTmF2aWdhdGlvbiIsInRleHRBbGlnbiIsInRyYW5zbGF0ZSIsIlJlYWN0VmlkZW8iLCJzaW5nbGVWaWV3TW9kZSIsInNpbmdsZVZpZXciLCJzaW5nbGVWaWV3VmlzaWJsZSIsInNpbmdsZVZpZXdEaXNhYmxlUHJldiIsInNpbmdsZVZpZXdEaXNhYmxlTmV4dCIsImkxOG4iLCJyZXR1cm5Ub0dyaWQiLCJsb2FkUHJldmlvdXNJdGVtIiwibmF2aWdhdGVJdGVtcyIsImxvYWROZXh0SXRlbSIsImdldFNpbmdsZVZpZXdOYXZTdGF0ZSIsImFjdGlvbkljb25DbGljayIsInJlbmRlclNpbmdsZVZpZXciLCJjYW5FZGl0IiwicmVuZGVyTmF2aWdhdGlvbiIsImRhdGFMb2FkaW5nTWVzc2FnZSIsIm5hdmlnYXRpb25Qcm9wcyIsImluZGl2aWR1YWxSZWNvcmRzUXVlc3Rpb25JZHMiLCJpbmRpdmlkdWFsUmVjb3Jkc0tleUxhYmVscyIsInJldmVyc2UiLCJmaWx0ZXIiLCJyZWNvcmQiLCJsYWJlbCIsImlySWRzIiwiY29sdW1uIiwiZGlyZWN0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJpdGVtc0xlbmd0aCIsImN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4IiwibmV4dEluZGV4IiwibG9hZEl0ZW1Gcm9tUHJldmlvdXNQYWdlIiwibG9hZEl0ZW1Gcm9tTmV4dFBhZ2UiLCJwcm9taXNlZEl0ZW1zIiwic2luZ2xlVmlld0RhdGEiLCJuZXdJdGVtcyIsImF0RGF0YUxlZnRCb3VuZGFyeUNhbkxvYWQiLCJhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCIsImN1cnJlbnRJdGVtSW5kZXgiLCJnZXRMYWJlbHNGb3JNYWluRmllbGRzIiwiZ2V0TGFiZWxzRm9ySW5kaXZpZHVhbFJlY29yZHMiLCJOYXZCdXR0b24iLCJSZXNwb25zZXMiLCJjb2x1bW5zTWFwIiwibWVkaWEiLCJkYXRlIiwiaW50ZXJ2aWV3X3N0YXJ0IiwiaW50ZXJ2aWV3X2VuZCIsIm1lZGlhSXRlbSIsInFJRCIsIk5hdkJhciIsInJldHVyblRvR3JpZEFjdGlvbiIsIlNpbmdsZVZpZXciLCJuYXZCYXJQcm9wcyIsImljX3N0YXIiLCJpY19zdGFyX2JvcmRlciIsImljX2Fycm93X2JhY2siLCJpY19hcnJvd19mb3J3YXJkIiwiaWNfdmlld19tb2R1bGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7K1FDdENBOzs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtBLEtBQU1BLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFVBQUQsRUFBdUM7QUFBQSxPQUEzQkMsaUJBQTJCLHVFQUFULElBQVM7O0FBQ2hFLE9BQUcsQ0FBQ0QsVUFBSixFQUFlO0FBQ2IsV0FBTSxJQUFJRSxLQUFKLENB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LGVBQWxELEVBQWtFLFNBQVNJLGdCQUEzRSxFQUE2RiwwQkFBN0YsR0FERjtBQUVFLDBEQUFXLE9BQU0sb0JBQWpCLEVBQXNDLFNBQVMyQyxrQkFBL0MsRUFBbUUsMkJBQW5FLEdBRkY7QUFHRSwwREFBVyxVQUFVOUMscUJBQXJCLEVBQTRDLE9BQU0sV0FBbEQsRUFBOEQsU0FBU0ssWUFBdkUsRUFBcUYsNkJBQXJGO0FBSEYsSUFERjtBQU9ELEVBVEQ7O0tBV3FCMEMsVTs7Ozs7Ozs7Ozs7OEJBQ1Y7QUFBQSxvQkFDNEIsS0FBSzlrQixLQURqQztBQUFBLFdBQ0EvTixRQURBLFVBQ0FBLFFBREE7QUFBQSxXQUNhOHlCLFdBRGI7O0FBRVAsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFlBQWY7QUFDRSx1Q0FBQyxNQUFELEVBQVlBLFdBQVosQ0FERjtBQUVHOXlCO0FBRkgsUUFERjtBQU1EOzs7Ozs7bUJBVGtCNnlCLFU7Ozs7Ozs7Ozs7Ozs7O0FDbEJyQjs7Ozs7O0FBRU8sS0FBTUUsNEJBQVUsd0NBQU0sR0FBRSwwRkFBUixHQUFoQjtBQUNBLEtBQU1DLDBDQUFpQix3Q0FBTSxHQUFFLGtNQUFSLEdBQXZCO0FBQ0EsS0FBTUMsd0NBQWdCLHdDQUFNLEdBQUUsOERBQVIsR0FBdEI7QUFDQSxLQUFNQyw4Q0FBbUIsd0NBQU0sR0FBRSwyREFBUixHQUF6QjtBQUNBLEtBQU1DLDBDQUFpQix3Q0FBTSxHQUFFLHlGQUFSLEdBQXZCLEM7Ozs7OztBQ05QLDBDOzs7Ozs7QUNBQSwyQiIsImZpbGUiOiJyLXJlYWN0LXZpZGVvLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI2Njc3NTczMzQzNzVlM2E4OTk3IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTEuMDEuMjAxNy5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IG1haW5DU1MgZnJvbSAnLi9tYWluLmNzcyc7XHJcbmltcG9ydCBSZWFjdFZpZGVvIGZyb20gJy4vUmVhY3RWaWRlbyc7XHJcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSAnci1yZXBvcnRhbC1iYXNlJztcclxuXHJcbi8qKlxyXG4gKiBpbml0aWFsaXNlIEhpdExpc3Qgb24gRE9NQ29udGVudExvYWRlZCBmb3IgYSBxdWlja2VyIGNvbGQtc3RhcnQsIG5vIG5lZWQgdG8gd2FpdCBmb3IgdGhlIG9yaWdpbmFsIEhpdExpc3RcclxuICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZ05hbWUgLSBuYW1lIG9mIHRoZSB2YXJpYWJsZSBwYXNzZWQgdG8gRE9NIGFzIGEgY29uZmlnXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3RodW1ic1BsYWNlaG9sZGVyPXRydWVdIC0gZGlzcGxheSB0aHVtYnMgYXMgaW1hZ2UgcGxhY2Vob2xkZXJzIGluc3RlYWQgb2YgbWVkaWEgaWNvbnNcclxuICogKi9cclxuY29uc3QgbGF1bmNoVmlkZW9IaXRsaXN0ID0gKGNvbmZpZ05hbWUsdGh1bWJzUGxhY2Vob2xkZXI9dHJ1ZSkgPT4ge1xyXG4gIGlmKCFjb25maWdOYW1lKXtcclxuICAgIHRocm93IG5ldyBFcnJvcignY29uZmlnIGlzIG5vdCBzcGVjaWZpZWQhJylcclxuICB9IGVsc2UgaWYoY29uZmlnTmFtZSAmJiB0eXBlb2YgY29uZmlnTmFtZSAhPSAnc3RyaW5nJyl7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBjb25maWcgbmFtZSBtdXN0IGJlIGEgc3RyaW5nLCBub3QgYSAke3R5cGVvZiBjb25maWdOYW1lfWApXHJcbiAgfVxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcclxuICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgPFJlYWN0VmlkZW9cclxuICAgICAgY29uZmlnPXtjb25maWdOYW1lfVxyXG4gICAgICB0aHVtYnNQbGFjZWhvbGRlcj17dGh1bWJzUGxhY2Vob2xkZXJ9XHJcbiAgICAgIHZlcmJvc2VcclxuICAgICAgLz4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcclxuICB9KTtcclxufTtcclxuXHJcbndpbmRvdy5SZXBvcnRhbCA9IHdpbmRvdy5SZXBvcnRhbCB8fCB7fTtcclxuUmVwb3J0YWxCYXNlLm1peGluKHdpbmRvdy5SZXBvcnRhbCx7XHJcbiAgbGF1bmNoVmlkZW9IaXRsaXN0XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19yb290LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4wJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwiaW1wb3J0IFByb21pc2UgZnJvbSAnY29yZS1qcy9saWJyYXJ5L2VzNi9wcm9taXNlJztcblxuY2xhc3MgUmVwb3J0YWxCYXNlIHtcblxuICAvKipcbiAgICogQ29waWVzIHByb3BzIGZyb20gYSBzb3VyY2Ugb2JqZWN0IHRvIGEgdGFyZ2V0IG9iamVjdC5cbiAgICpcbiAgICogTm90ZSwgdGhpcyBtZXRob2QgdXNlcyBhIHNpbXBsZSBgZm9yLi4uaW5gIHN0cmF0ZWd5IGZvciBlbnVtZXJhdGluZ1xuICAgKiBwcm9wZXJ0aWVzLiAgVG8gZW5zdXJlIG9ubHkgYG93blByb3BlcnRpZXNgIGFyZSBjb3BpZWQgZnJvbSBzb3VyY2VcbiAgICogdG8gdGFyZ2V0IGFuZCB0aGF0IGFjY2Vzc29yIGltcGxlbWVudGF0aW9ucyBhcmUgY29waWVkLCB1c2UgYGV4dGVuZGAuXG4gICAqXG4gICAqIEBtZXRob2QgbWl4aW5cbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBUYXJnZXQgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBTb3VyY2Ugb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRhcmdldCBvYmplY3QgdGhhdCB3YXMgcGFzc2VkIGFzIGZpcnN0IGFyZ3VtZW50LlxuICAgKi9cbiAgc3RhdGljIG1peGluKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yICh2YXIgaSBpbiBzb3VyY2UpIHtcbiAgICAgIHRhcmdldFtpXSA9IHNvdXJjZVtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHN0YXRpYyBfbG9nZ2VyKGxldmVsLCBhcmdzKSB7XG4gICAgLy8gYWNjZXB0IFsnZm9vJywgJ2JhciddIGFuZCBbWydmb28nLCAnYmFyJ11dXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgIGFyZ3MgPSBhcmdzWzBdO1xuICAgIH1cbiAgICAvLyBvbmx5IGFjY2VwdCBsb2dnaW5nIGZ1bmN0aW9uc1xuICAgIHN3aXRjaChsZXZlbCkge1xuICAgICAgY2FzZSAnbG9nJzpcbiAgICAgIGNhc2UgJ3dhcm4nOlxuICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICBjb25zb2xlW2xldmVsXS5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIF9sb2coKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHRoaXMuX2xvZ2dlcignbG9nJywgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgX3dhcm4oKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHRoaXMuX2xvZ2dlcignd2FybicsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIF9lcnJvcigpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgdGhpcy5fbG9nZ2VyKCdlcnJvcicsIGFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuYW1lZCBldmVudCB3aXRoIGBuYW1lYFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAqIEByZXR1cm4ge0V2ZW50fSBSZXR1cm5zIGEgY3JlYXRlZCBldmVudFxuICAgKiAqL1xuICBzdGF0aWMgbmV3RXZlbnQobmFtZSl7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNwZWN0cyBpZiB0aGUgY3VycmVudCBzdHJpbmcgbWlnaHQgYmUgY29udmVydGVkIHRvIG51bWJlciBhbmQgcmVuZGVycyBpdCBhcyBudW1iZXIuIElmIHN0cmluZyBsZW5ndGggaXMgMCwgcmV0dXJucyBgbnVsbGAuIElmIG5vbmUgYXBwbGllcyByZXR1cm5zIHRoZSBzdHJpbmcgYXMgaXMuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgLSB2YWx1ZSBvZiB0aGUgY2VsbCBpZiBub3QgSFRNTCBjb250ZW50c1xuICAgKiBAcmV0dXJuIHtOdW1iZXJ8bnVsbHxTdHJpbmd9XG4gICAqICovXG4gIHN0YXRpYyBpc051bWJlcihzdHIpe1xuICAgIGlmKCFpc05hTihwYXJzZUZsb2F0KHN0cikpKXtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8sL2ksJycpOy8vIHJlbW92ZSB1bm5lY2Vzc2FyeSBjb21tYSBhcyBhIGRlbGltaXRlciBmb3IgdGhvdXNhbmRzIGZyb20gZGF0YS5cbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cik7XG4gICAgfSBlbHNlIGlmKHN0ci5sZW5ndGg9PTApe3JldHVybiBudWxsfSBlbHNlIHtyZXR1cm4gc3RyfVxuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBYSFIgd3JhcHBlZCBpbiBhIFByb21pc2VcbiAgICogQHBhcmFtIHshU3RyaW5nfSBVUkwgLSB1cmwgdG8gc2VuZCBhIGBHRVRgIHJlcXVlc3QgdG9cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmV0dXJucyBhIHRoZW4tYWJsZSBwcm9taXNlIHdpdGggYFhNTEh0dHBSZXF1ZXN0LnJlc3BvbnNlVGV4dGBcbiAgICogKi9cbiAgc3RhdGljIHByb21pc2VSZXF1ZXN0KFVSTCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHhoci5vcGVuKCdHRVQnLCBVUkwsIHRydWUpO1xuICAgICAgeGhyLm9ubG9hZCA9ICgpPT57eGhyLnN0YXR1cyA9PSAyMDA/cmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0KTpyZWplY3QoRXJyb3IoYCR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9YCkpO31cbiAgICAgIHhoci5vbmVycm9yID0gKCk9PntyZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTt9XG4gICAgICB4aHIuc2VuZCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSB2YXJpYWJsZSBsaXN0ZWQgaW4gcXVlcnkgc3RyaW5nXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gdmFyaWFibGUgLSB2YXJpYWJsZSBuYW1lIHRvIGdldCB2YWx1ZSBmb3JcbiAgICogQHBhcmFtIHtTdHJpbmc9fSBbcXVlcnk9d2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSldIC0gdGhlIHF1ZXJ5IHN0cmluZyB0byBzZWFyY2ggdmFyaWFibGUgZm9yIGluXG4gICAqIEByZXR1cm4ge1N0cmluZ30gUmV0dXJucyB2YWx1ZSBmb3IgdGhlIHZhcmlhYmxlXG4gICAqICovXG4gIHN0YXRpYyBnZXRRdWVyeVZhcmlhYmxlKHZhcmlhYmxlLHF1ZXJ5PXdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKXtcbiAgICB2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KFwiJlwiKTtcbiAgICBmb3IgKHZhciBpPTA7aTx2YXJzLmxlbmd0aDtpKyspIHtcbiAgICAgIHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICBpZigocGFpclswXSkudG9Mb3dlckNhc2UoKSA9PSB2YXJpYWJsZS50b0xvd2VyQ2FzZSgpKXtyZXR1cm4gcGFpclsxXTt9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIFxuICAvKipcbiAgICogdHVybnMgYHdpbmRvdy5sb2NhdGlvbmAgb2JqZWN0IGludG8gYW4gb2JqZWN0IHdpdGggcGFyYW1zIGFzIG5hbWVkIGtleXMgbmVjZXNzYXJ5IHRvIHJlY29uc3RydWN0IHRoZSBVUkxcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBbbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb25dIC0gYSB3aW5kb3cubG9jYXRpb24gb2JqZWN0LCBieSBkZWZhdWx0IG9mIHRoZSBob3N0IHdpbmRvdyB3aGVyZSB0aGUgc2NyaXB0IGlzIGV4ZWN1dGVkXG4gICAqIEByZXR1cm5zIHt7cGF0aDpTdHJpbmcsIHF1ZXJ5Ok9iamVjdH19IGEgYGxvY2F0aW9uYCBvYmplY3RcbiAgICogKi9cbiAgc3RhdGljIGxvY2F0aW9uRGVzZXJpYWxpemUobG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24pe1xuICAgIGxldCBvID0ge1xuICAgICAgcGF0aDogbG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBxdWVyeTp7fVxuICAgIH07XG4gICAgbG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKS5zcGxpdCgvJi8pLmZvckVhY2gocGFpcj0+e1xuICAgICAgbGV0IGFQYWlyPSBwYWlyLnNwbGl0KC89Lyk7XG4gICAgICBvLnF1ZXJ5W2FQYWlyWzBdLnRvTG93ZXJDYXNlKCldID0gYVBhaXJbMV1cbiAgICB9KTtcbiAgICByZXR1cm4gb1xuICB9XG5cbiAgLyoqXG4gICAqIFR1cm5zIGEgYGxvY2F0aW9uYCBvYmplY3QgKHJlc3VsdCBvZiBgbG9jYXRpb25EZXNlcmlhbGl6ZWApIGludG8gYSBVUkxcbiAgICogQHBhcmFtIHt7cGF0aDpTdHJpbmcsIHF1ZXJ5Ok9iamVjdH19IGxvY2F0aW9uIC0gYW4gb2JqZWN0IHdpdGggcGFyYW1zIGFuZCBhIHVybFxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtIGEgVVJMIHN0cmluZ1xuICAgKiAqL1xuICBzdGF0aWMgbG9jYXRpb25TZXJpYWxpemUobG9jYXRpb24pe1xuICAgIGxldCBxdWVyeT1bXTtcbiAgICBmb3IobGV0IGtleSBpbiBsb2NhdGlvbi5xdWVyeSl7XG4gICAgICBxdWVyeS5wdXNoKFtrZXksbG9jYXRpb24ucXVlcnlba2V5XV0uam9pbignPScpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGggKyAnPycgKyBxdWVyeS5qb2luKCcmJyk7XG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0YWxCYXNlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItcmVwb3J0YWwtYmFzZS9zcmMvcmVwb3J0YWwtYmFzZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19NYXAuanMiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzS2V5LmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzU3ltYm9sLmpzIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1NldC5qcyIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1NldENhY2hlLmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU3RhY2suanMiLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUdldC5qcyIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNFcXVhbC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaXNLZXkodmFsdWUsIG9iamVjdCkgPyBbdmFsdWVdIDogc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFBhdGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY2FzdFBhdGguanMiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vX2FycmF5U29tZScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19lcXVhbEFycmF5cy5qcyIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0luZGV4LmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtYXRjaGVzUHJvcGVydHlgIGZvciBzb3VyY2UgdmFsdWVzIHN1aXRhYmxlXG4gKiBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUoa2V5LCBzcmNWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWUgJiZcbiAgICAgIChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gT2JqZWN0KG9iamVjdCkpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvZXEuanMiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gva2V5cy5qcyIsIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQocmVxdWlyZShcInJlYWN0XCIpKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW1wicmVhY3RcIl0sdCk7ZWxzZXt2YXIgcj10KFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP3JlcXVpcmUoXCJyZWFjdFwiKTplLnJlYWN0KTtmb3IodmFyIG8gaW4gcikoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czplKVtvXT1yW29dfX0odGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChvKXtpZihyW29dKXJldHVybiByW29dLmV4cG9ydHM7dmFyIG49cltvXT17ZXhwb3J0czp7fSxpZDpvLGxvYWRlZDohMX07cmV0dXJuIGVbb10uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sb2FkZWQ9ITAsbi5leHBvcnRzfXZhciByPXt9O3JldHVybiB0Lm09ZSx0LmM9cix0LnA9XCJcIix0KDApfShbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPXIoMSk7dC5kZWZhdWx0PW8uTURJY29uLGUuZXhwb3J0cz10LmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBpKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9ZnVuY3Rpb24gdShlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuTURJY29uPXZvaWQgMDt2YXIgYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIG89dFtyXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LHIsbyl7cmV0dXJuIHImJmUodC5wcm90b3R5cGUsciksbyYmZSh0LG8pLHR9fSgpLGY9cigyKSxsPW8oZiksYT10Lk1ESWNvbj1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7cmV0dXJuIG4odGhpcyx0KSxpKHRoaXMsKHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9cmV0dXJuIHUodCxlKSxjKHQsW3trZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucHJvcHMsdD1lLmZpbGwscj1lLnNpemUsbz1lLmljb24sbj1lLmNoaWxkcmVuO3JldHVybiBjb25zb2xlLmxvZyh0LHIsbyxuKSxsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN2Z1wiLHt4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsZmlsbDp0LHdpZHRoOnIsaGVpZ2h0OnIsdmlld0JveDpcIjAgMCAyNCAyNFwiLGNoaWxkcmVuOm98fG59KX19XSksdH0oZi5QdXJlQ29tcG9uZW50KTthLmRlZmF1bHRQcm9wcz17c2l6ZToyNCxmaWxsOlwicmdiYSgwLDAsMCwuODUpXCJ9fSxmdW5jdGlvbih0LHIpe3QuZXhwb3J0cz1lfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NREljb24uYnVuZGxlLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vTURJY29uL2Rpc3QvTURJY29uLmJ1bmRsZS5qcyIsIiFmdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQocmVxdWlyZShcInJlYWN0XCIpKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW1wicmVhY3RcIl0sdCk7ZWxzZXt2YXIgbz10KFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP3JlcXVpcmUoXCJyZWFjdFwiKTplLnJlYWN0KTtmb3IodmFyIHIgaW4gbykoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czplKVtyXT1vW3JdfX0odGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChyKXtpZihvW3JdKXJldHVybiBvW3JdLmV4cG9ydHM7dmFyIG49b1tyXT17ZXhwb3J0czp7fSxpZDpyLGxvYWRlZDohMX07cmV0dXJuIGVbcl0uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsdCksbi5sb2FkZWQ9ITAsbi5leHBvcnRzfXZhciBvPXt9O3JldHVybiB0Lm09ZSx0LmM9byx0LnA9XCJcIix0KDApfShbZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fWZ1bmN0aW9uIG4oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGkoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiBhKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG89YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBvKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLHIpJiYoZVtyXT1vW3JdKX1yZXR1cm4gZX0sbD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG89MDtvPHQubGVuZ3RoO28rKyl7dmFyIHI9dFtvXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXJldHVybiBmdW5jdGlvbih0LG8scil7cmV0dXJuIG8mJmUodC5wcm90b3R5cGUsbyksciYmZSh0LHIpLHR9fSgpLHA9bygxKSx1PXIocCksYz1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUpe24odGhpcyx0KTt2YXIgbz1pKHRoaXMsKHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCkpLmNhbGwodGhpcyxlKSk7cmV0dXJuIG8uX2ltYWdlT25sb2FkPW8uX2ltYWdlT25sb2FkLmJpbmQobyksby5faW1hZ2VPbmVycm9yPW8uX2ltYWdlT25lcnJvci5iaW5kKG8pLG8uc3RhdGU9e3NyYzp2b2lkIDAscGxhY2Vob2xkZXJIaWRkZW46IW8ucHJvcHMucGxhY2Vob2xkZXIsc2l6aW5nOm8ucHJvcHMuc2l6aW5nP28ucHJvcHMuc2l6aW5nOm51bGwscG9zaXRpb246by5wcm9wcy5wb3NpdGlvbj9vLnByb3BzLnBvc2l0aW9uOlwiY2VudGVyXCIscHJvcG9ydGlvbjowLGxvYWRlZDohMSxsb2FkaW5nOiExLGVycm9yOiExfSxvfXJldHVybiBhKHQsZSksbCh0LFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX2xvYWQoKSx0aGlzLl9jb21wdXRlRGltZW5zaW9ucygpLHRoaXMuX2NvbXB1dGVQcm9wb3J0aW9uKHRoaXMucHJvcHMuYXNwZWN0KX19LHtrZXk6XCJfY29tcHV0ZURpbWVuc2lvbnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucHJvcHMsdD1lLndpZHRoLG89ZS5oZWlnaHQ7dGhpcy5zZXRTdGF0ZSh7d2lkdGg6aXNOYU4odCk/dDp0K1wicHhcIixoZWlnaHQ6aXNOYU4obyk/bzpvK1wicHhcIn0pfX0se2tleTpcIl9jb21wdXRlUHJvcG9ydGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUmJmUuaW5kZXhPZihcIjpcIik+LTEpe3ZhciB0PWUuc3BsaXQoXCI6XCIpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gcGFyc2VGbG9hdChlKX0pO2lzTmFOKHRbMF0pfHxpc05hTih0WzFdKXx8dGhpcy5zZXRTdGF0ZShmdW5jdGlvbihlKXtpZighaXNOYU4ocGFyc2VGbG9hdChlLndpZHRoKSkpcmV0dXJue3Byb3BvcnRpb246KHBhcnNlRmxvYXQoZS53aWR0aCkqKHRbMV0vdFswXSkpLnRvU3RyaW5nKCkrZS53aWR0aC5zdWJzdHJpbmcocGFyc2VGbG9hdChlLndpZHRoKS50b1N0cmluZygpLmxlbmd0aCksaGVpZ2h0OlwiYXV0b1wifX0pfX19LHtrZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuc3RhdGUsdD1lLndpZHRoLG89ZS5oZWlnaHQscj1lLnByb3BvcnRpb24sbj1lLnNyYyxpPWUuc2l6aW5nLGE9ZS5wb3NpdGlvbixzPWUubG9hZGluZyxsPWUubG9hZGVkLHA9ZS5wbGFjZWhvbGRlckhpZGRlbixjPXRoaXMucHJvcHMsZD1jLnByZWxvYWQsZj1jLmZhZGUsaD1jLnBsYWNlaG9sZGVyU2l6aW5nLGc9Yy5wbGFjZWhvbGRlcixtPWMuYWx0O3JldHVybiB1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJQcm9wb3J0aW9uYWxJbWFnZVwiLHN0eWxlOnt3aWR0aDp0LGhlaWdodDpvLHBhZGRpbmdUb3A6cn19LHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcInNpemVkSW1nRGl2XCIscm9sZTpcImltZ1wiLHN0eWxlOntiYWNrZ3JvdW5kSW1hZ2U6bj9cInVybChcIituK1wiKVwiOnZvaWQgMCxiYWNrZ3JvdW5kU2l6ZTppLGJhY2tncm91bmRQb3NpdGlvbjphLGJhY2tncm91bmRSZXBlYXQ6aT9cIm5vLXJlcGVhdFwiOlwiaW5pdGlhbFwiLGRpc3BsYXk6aT9cImJsb2NrXCI6XCJub25lXCJ9fSksdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3JjOm4sYWx0Om0sb25Mb2FkOnRoaXMuX2ltYWdlT25sb2FkLG9uRXJyb3I6dGhpcy5faW1hZ2VPbmVycm9yLHN0eWxlOntkaXNwbGF5Omk/XCJub25lXCI6XCJibG9ja1wifX0pLHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOntiYWNrZ3JvdW5kSW1hZ2U6Zz9cInVybChcIitnK1wiKVwiOnZvaWQgMCxiYWNrZ3JvdW5kU2l6ZTpoP2g6aSxiYWNrZ3JvdW5kUG9zaXRpb246YSxiYWNrZ3JvdW5kUmVwZWF0Omk/XCJuby1yZXBlYXRcIjpcImluaXRpYWxcIn0sY2xhc3NOYW1lOlwiaW1hZ2VQbGFjZWhvbGRlciBcIisocCYmXCJoaWRkZW5cIikrXCIgXCIrKGQmJmYmJiFzJiZsJiZcImZhZGVkLW91dFwiKX0pKX19LHtrZXk6XCJfaW1hZ2VPbmxvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ITEsbG9hZGVkOiEwLGVycm9yOiExfSl9fSx7a2V5OlwiX2ltYWdlT25lcnJvclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXRTdGF0ZShzKHt9LHRoaXMuX3Jlc2V0KCkse2Vycm9yOiEwfSkpfX0se2tleTpcIl9yZXNldFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJue3NyYzp2b2lkIDAsbG9hZGluZzohMSxsb2FkZWQ6ITEsZXJyb3I6ITF9fX0se2tleTpcIl9sb2FkXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9yZXNldCgpO2lmKCF0aGlzLnByb3BzLnByZXZlbnRMb2FkKXt2YXIgdD10aGlzLnByb3BzLnNyYztlLnNyYyE9PXQmJihlPXMoe30sZSx7c3JjOnQ/dDp2b2lkIDAsbG9hZGluZzohIXR9KSl9dGhpcy5zZXRTdGF0ZShlKX19XSksdH0odS5kZWZhdWx0LkNvbXBvbmVudCk7dC5kZWZhdWx0PWN9LGZ1bmN0aW9uKHQsbyl7dC5leHBvcnRzPWV9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L1Byb3BvcnRpb25hbEltYWdlL2Rpc3QvUHJvcG9ydGlvbmFsSW1hZ2UuYnVuZGxlLmpzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsInZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IExJQlJBUlkgPyBmdW5jdGlvbiAoYSwgYikge1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn0gOiBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIGlmIChwcm9taXNlLl9oID09IDEpIHJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZWFjdGlvbjtcbiAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYgKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKSByZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYgKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpIHJldHVybiB4O1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZSh0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fSGFzaC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fUHJvbWlzZS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcHBseS5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qcyIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheU1hcC5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0ZsYXR0ZW5hYmxlID0gcmVxdWlyZSgnLi9faXNGbGF0dGVuYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggc3VwcG9ydCBmb3IgcmVzdHJpY3RpbmcgZmxhdHRlbmluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcGFyYW0ge251bWJlcn0gZGVwdGggVGhlIG1heGltdW0gcmVjdXJzaW9uIGRlcHRoLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJlZGljYXRlPWlzRmxhdHRlbmFibGVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1N0cmljdF0gUmVzdHJpY3QgdG8gdmFsdWVzIHRoYXQgcGFzcyBgcHJlZGljYXRlYCBjaGVja3MuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBkZXB0aCwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHByZWRpY2F0ZSB8fCAocHJlZGljYXRlID0gaXNGbGF0dGVuYWJsZSk7XG4gIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChkZXB0aCA+IDAgJiYgcHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBmbGF0dGVuIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmxhdHRlbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlRmxhdHRlbi5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaGFzSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VIYXNJbihvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYga2V5IGluIE9iamVjdChvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VIYXNJbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSGFzSW4uanMiLCJ2YXIgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBiYXNlSXNOYU4gPSByZXF1aXJlKCcuL19iYXNlSXNOYU4nKSxcbiAgICBzdHJpY3RJbmRleE9mID0gcmVxdWlyZSgnLi9fc3RyaWN0SW5kZXhPZicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlXG4gICAgPyBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KVxuICAgIDogYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUlzTmFOLCBmcm9tSW5kZXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmFOO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hTi5qcyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzJyksXG4gICAgYmFzZU1hdGNoZXNQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgcHJvcGVydHkgPSByZXF1aXJlKCcuL3Byb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXRlcmF0ZWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhbiBpdGVyYXRlZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgaXRlcmF0ZWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJdGVyYXRlZSh2YWx1ZSkge1xuICAvLyBEb24ndCBzdG9yZSB0aGUgYHR5cGVvZmAgcmVzdWx0IGluIGEgdmFyaWFibGUgdG8gYXZvaWQgYSBKSVQgYnVnIGluIFNhZmFyaSA5LlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NjAzNCBmb3IgbW9yZSBkZXRhaWxzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKVxuICAgICAgPyBiYXNlTWF0Y2hlc1Byb3BlcnR5KHZhbHVlWzBdLCB2YWx1ZVsxXSlcbiAgICAgIDogYmFzZU1hdGNoZXModmFsdWUpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUl0ZXJhdGVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9fYmFzZUlzTWF0Y2gnKSxcbiAgICBnZXRNYXRjaERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXRjaERhdGEnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKSxcbiAgICBnZXQgPSByZXF1aXJlKCcuL2dldCcpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5RGVlcC5qcyIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBvdmVyUmVzdCA9IHJlcXVpcmUoJy4vX292ZXJSZXN0JyksXG4gICAgc2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19zZXRUb1N0cmluZycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsInZhciBjb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQnKSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTZXRUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVGltZXMuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKSxcbiAgICBjcmVhdGVTZXQgPSByZXF1aXJlKCcuL19jcmVhdGVTZXQnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuaXFCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHNlZW4gPSByZXN1bHQ7XG5cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gIH1cbiAgZWxzZSBpZiAobGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICB2YXIgc2V0ID0gaXRlcmF0ZWUgPyBudWxsIDogY3JlYXRlU2V0KGFycmF5KTtcbiAgICBpZiAoc2V0KSB7XG4gICAgICByZXR1cm4gc2V0VG9BcnJheShzZXQpO1xuICAgIH1cbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgc2VlbiA9IG5ldyBTZXRDYWNoZTtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWVuID0gaXRlcmF0ZWUgPyBbXSA6IHJlc3VsdDtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciBzZWVuSW5kZXggPSBzZWVuLmxlbmd0aDtcbiAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHNlZW4sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgaWYgKHNlZW4gIT09IHJlc3VsdCkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmlxO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2JqZWN0IG9mIGB2YWx1ZXNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBzZXQuXG4gKi9cbnZhciBjcmVhdGVTZXQgPSAhKFNldCAmJiAoMSAvIHNldFRvQXJyYXkobmV3IFNldChbLC0wXSkpWzFdKSA9PSBJTkZJTklUWSkgPyBub29wIDogZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgU2V0KHZhbHVlcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jcmVhdGVTZXQuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGV4aXN0cyBvbiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICBpZiAoIShyZXN1bHQgPSBvYmplY3QgIT0gbnVsbCAmJiBoYXNGdW5jKG9iamVjdCwga2V5KSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgfVxuICBpZiAocmVzdWx0IHx8ICsraW5kZXggIT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBsZW5ndGggPSBvYmplY3QgPT0gbnVsbCA/IDAgOiBvYmplY3QubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNQYXRoLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwcmVhZGFibGVTeW1ib2wgPSBTeW1ib2wgPyBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgZmxhdHRlbmFibGUgYGFyZ3VtZW50c2Agb2JqZWN0IG9yIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZsYXR0ZW5hYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzRmxhdHRlbmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSB8fFxuICAgICEhKHNwcmVhZGFibGVTeW1ib2wgJiYgdmFsdWUgJiYgdmFsdWVbc3ByZWFkYWJsZVN5bWJvbF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRmxhdHRlbmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNGbGF0dGVuYWJsZS5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX292ZXJSZXN0LmpzIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ2YXIgYmFzZVNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVNldFRvU3RyaW5nJyksXG4gICAgc2hvcnRPdXQgPSByZXF1aXJlKCcuL19zaG9ydE91dCcpO1xuXG4vKipcbiAqIFNldHMgdGhlIGB0b1N0cmluZ2AgbWV0aG9kIG9mIGBmdW5jYCB0byByZXR1cm4gYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgc2V0VG9TdHJpbmcgPSBzaG9ydE91dChiYXNlU2V0VG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3J0T3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3Nob3J0T3V0LmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja1NldC5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanMiLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlTGVhZGluZ0RvdCA9IC9eXFwuLyxcbiAgICByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAocmVMZWFkaW5nRG90LnRlc3Qoc3RyaW5nKSkge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCIvKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmV0dXJuIGZyb20gdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbnN0YW50IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IF8udGltZXMoMiwgXy5jb25zdGFudCh7ICdhJzogMSB9KSk7XG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0cyk7XG4gKiAvLyA9PiBbeyAnYSc6IDEgfSwgeyAnYSc6IDEgfV1cbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzWzBdID09PSBvYmplY3RzWzFdKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2NvbnN0YW50LmpzIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9nZXQuanMiLCJ2YXIgYmFzZUhhc0luID0gcmVxdWlyZSgnLi9fYmFzZUhhc0luJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaGFzSW4uanMiLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCIvKipcbiAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmxhc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gbGFzdChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPyBhcnJheVtsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbGFzdC5qcyIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbWVtb2l6ZS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL25vb3AuanMiLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5JyksXG4gICAgYmFzZVByb3BlcnR5RGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eURlZXAnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBhIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiAyIH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiAxIH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmInKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLm1hcChfLnNvcnRCeShvYmplY3RzLCBfLnByb3BlcnR5KFsnYScsICdiJ10pKSwgJ2EuYicpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHRvS2V5KHBhdGgpKSA6IGJhc2VQcm9wZXJ0eURlZXAocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9wcm9wZXJ0eS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ2YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4vbGFzdCcpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8udW5pb25gIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGl0ZXJhdGVlYCB3aGljaCBpc1xuICogaW52b2tlZCBmb3IgZWFjaCBlbGVtZW50IG9mIGVhY2ggYGFycmF5c2AgdG8gZ2VuZXJhdGUgdGhlIGNyaXRlcmlvbiBieVxuICogd2hpY2ggdW5pcXVlbmVzcyBpcyBjb21wdXRlZC4gUmVzdWx0IHZhbHVlcyBhcmUgY2hvc2VuIGZyb20gdGhlIGZpcnN0XG4gKiBhcnJheSBpbiB3aGljaCB0aGUgdmFsdWUgb2NjdXJzLiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDpcbiAqICh2YWx1ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0gey4uLkFycmF5fSBbYXJyYXlzXSBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBjb21iaW5lZCB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udW5pb25CeShbMi4xXSwgWzEuMiwgMi4zXSwgTWF0aC5mbG9vcik7XG4gKiAvLyA9PiBbMi4xLCAxLjJdXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLnVuaW9uQnkoW3sgJ3gnOiAxIH1dLCBbeyAneCc6IDIgfSwgeyAneCc6IDEgfV0sICd4Jyk7XG4gKiAvLyA9PiBbeyAneCc6IDEgfSwgeyAneCc6IDIgfV1cbiAqL1xudmFyIHVuaW9uQnkgPSBiYXNlUmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgdmFyIGl0ZXJhdGVlID0gbGFzdChhcnJheXMpO1xuICBpZiAoaXNBcnJheUxpa2VPYmplY3QoaXRlcmF0ZWUpKSB7XG4gICAgaXRlcmF0ZWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGJhc2VVbmlxKGJhc2VGbGF0dGVuKGFycmF5cywgMSwgaXNBcnJheUxpa2VPYmplY3QsIHRydWUpLCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDIpKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaW9uQnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC91bmlvbkJ5LmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDEwLjAxLjIwMTcuXG4gKi9cbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSBcInItcmVwb3J0YWwtYmFzZVwiO1xuaW1wb3J0IEhpdGxpc3RTZXR1cCBmcm9tIFwiLi9oaXRsaXN0LXNldHVwXCI7XG5cbmNsYXNzIEhpdGxpc3REYXRhc291cmNlIGV4dGVuZHMgSGl0bGlzdFNldHVwe1xuICAvKipcbiAgICogVGhpcyBjbGFzcyBhbGxvd3MgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB3aXRoIHRoZSBIaXRMaXN0IGRhdGFiYXNlIGFuZCB1c2UgdXRpbGl0eSBtZXRob2RzIHRvIHF1ZXJ5IGFuZCBmaWx0ZXIgZGF0YSBwcm92aWRlZCB0aGVyZSdzIGEgaGl0bGlzdCBvbiB0aGUgcGFnZVxuICAgKiBAZXh0ZW5kcyBIaXRsaXN0U2V0dXBcbiAgICogKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucz17fSl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZXM9W107XG4gICAgLyoqIEBwcm9wZXJ0eSB7U3RyaW5nfSBtb2RpZmllciAtIGV4dHJhIHBhcmFtcyBhZGRlZCBhcyBhIHN0cmluZyBmcm9tIGZpbHRlcnMgKi9cbiAgICB0aGlzLm1vZGlmaWVyID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogcGVyZm9ybXMgaW5pdGlhbCBkYXRhIGxvYWRcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgaW5pdGlhbERhdGFMb2FkKCl7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2luaXRpYWxMb2FkOnRydWV9KVxuICB9XG4gIC8qKlxuICAgKiBsb2FkcyBuZXh0IHBhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgbmV4dFBhZ2UoKXtcbiAgICB0aGlzLl9za2lwUGFnZSh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2lzUGFnaW5nOiB0cnVlfSx0aGlzLm1vZGlmaWVyKTtcbiAgfVxuICAvKipcbiAgICogbG9hZHMgcHJldmlvdXMgcGFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgb2YgZGF0YVxuICAgKiAqL1xuICBwcmV2aW91c1BhZ2UoKXtcbiAgICB0aGlzLl9za2lwUGFnZShmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpc1BhZ2luZzogdHJ1ZX0sdGhpcy5tb2RpZmllcik7XG4gIH1cblxuICAvKipcbiAgICogcXVlcmllcyBIaXRMaXN0IEFQSVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiAqL1xuICByZXF1ZXN0UmVzcG9uc2Uob3B0aW9ucyl7XG4gICAgbGV0IHF1ZXJ5PSBSZXBvcnRhbEJhc2UubG9jYXRpb25EZXNlcmlhbGl6ZSgpLnF1ZXJ5O1xuICAgIGlmKHF1ZXJ5ICYmIHF1ZXJ5LnJlcG9ydGlkICYmIHRoaXMuaGl0bGlzdElEKXtcbiAgICAgIC8qc2V0IGNvbW1vbiBwYXJhbXMqL1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgUGFnZUlkOiB0aGlzLnBhZ2VJRCxcbiAgICAgICAgcGFnZVN0YXRlSWQ6IHRoaXMucGFnZVN0YXRlSUQsXG4gICAgICAgIFByZXZpZXc6IHF1ZXJ5LnByZXZpZXdcbiAgICAgIH07XG5cbiAgICAgIC8qaWYgb3B0aW9ucyBhcmUgcGFzc2VkLCBhZGQgb3B0aW9ucyovXG4gICAgICBpZihvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGZvciAobGV0IGF0dHJuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICBwYXJhbXNbYXR0cm5hbWVdID0gdHlwZW9mIG9wdGlvbnNbYXR0cm5hbWVdPT09J2Jvb2xlYW4nPyhvcHRpb25zW2F0dHJuYW1lXT8nMSc6JzAnKTpvcHRpb25zW2F0dHJuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighcGFyYW1zLnNlYXJjaCAmJiB0aGlzLl9zZWFyY2hWYWx1ZXMubGVuZ3RoPjApe1xuICAgICAgICBwYXJhbXMuc2VhcmNoID0gSlNPTi5zdHJpbmdpZnkodGhpcy5fc2VhcmNoVmFsdWVzKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXM7XG5cbiAgICAgIGlmIChzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcyE9bnVsbCAmJiAhaXNOYU4oc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnZU51bWJlcikpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pbml0aWFsTG9hZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdlTnVtYmVyICs9IHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2luZ0ZvcndhcmQgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcGFyYW1zLnNvcnRpbmdQYWdpbmdWYWx1ZXM9SlNPTi5zdHJpbmdpZnkoc29ydGluZ1BhZ2luZ1ZhbHVlcyk7XG5cbiAgICAgIHJldHVybiBSZXBvcnRhbEJhc2UucHJvbWlzZVJlcXVlc3QoYCR7dGhpcy5zZXJ2aWNlVVJMfSYke0hpdGxpc3REYXRhc291cmNlLnNlcmlhbGl6ZVBhcmFtcyhwYXJhbXMpfSR7dGhpcy5tb2RpZmllciE9Jyc/JyYnK3RoaXMubW9kaWZpZXI6Jyd9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PnRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBIaXRMaXN0IEFQSSByZXNwb25zZVxuICAgKiAqL1xuICBwYXJzZVJlc3BvbnNlKHJlc3BvbnNlKXtcbiAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuXG4gICAgdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzID0gcmVzcG9uc2Uuc29ydGluZ1BhZ2luZ1ZhbHVlcztcbiAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIHRoaXMucGFnZUluZm8gPSByZXNwb25zZS5wYWdlSW5mbztcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcGFnaW5nRm9yd2FyZCBpZiBgdHJ1ZWAgZ29lcyBmb3J3YXJkLCBpZiBgbnVsbGAgZ29lcyBiYWNrd2FyZFxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogKi9cbiAgX3NraXBQYWdlKHBhZ2luZ0ZvcndhcmQpe1xuICAgIGxldCBfc3B2ID0gey4uLnRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlc307XG4gICAgbGV0IHB2ID0gey4uLl9zcHYucGFnaW5nVmFsdWVzfSB8fCB7fTtcbiAgICBwdi5wYWdpbmdGb3J3YXJkID0gcGFnaW5nRm9yd2FyZDsgLyppZiBmb3J3YXJkIGlzIG5lZWRlZCB0aGVuIHBhc3MgdHJ1ZSwgZWxzZSBudWxsIC0gYmFja3dhcmQqL1xuICAgIHB2LnN0YXJ0SWQgPSBwYWdpbmdGb3J3YXJkID8gcHYubGFzdFN0YXJ0SWQgOiBwdi5maXJzdFN0YXJ0SWQ7XG4gICAgcHYuc3RhcnRWYWx1ZSA9IHBhZ2luZ0ZvcndhcmQgPyBwdi5sYXN0U3RhcnRWYWx1ZSA6IHB2LmZpcnN0U3RhcnRWYWx1ZTtcbiAgICB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB7XG4gICAgICAuLi50aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMsXG4gICAgICBwYWdpbmdWYWx1ZXM6IHB2XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXJpYWxpemUgcGFyYW1zIGludG8gYSBxdWVyeSBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyAtIGFuIG9iamVjdCB3aXRoIHBhcmFtZXRlcnNcbiAgICogKi9cbiAgc3RhdGljIHNlcmlhbGl6ZVBhcmFtcyhwYXJhbXMpe1xuICAgIGxldCBxdWVyeSA9IFtdO1xuICAgIGZvcihsZXQga2V5IGluIHBhcmFtcyl7XG4gICAgICBxdWVyeS5wdXNoKFtrZXkscGFyYW1zW2tleV1dLmpvaW4oJz0nKSk7XG4gICAgfVxuICAgIHJldHVybiBxdWVyeS5qb2luKCcmJylcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpdGxpc3REYXRhc291cmNlO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3QtZGF0YXNvdXJjZS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMC4wMS4yMDE3LlxuICovXG5cbmNsYXNzIEhpdGxpc3RTZXR1cHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICAvL2ZpeCBmb3Igd2luZG93LmxvY2F0aW9uIG9yaWdpbiwgdGhhbnggSUVcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IEhpdGxpc3RTZXR1cC5nZXRPcmlnaW5hbENvbmZpZygpO1xuICAgIHRoaXMuX2VsZW1lbnRUeXBlID0gd2luZG93LkhpdExpc3RFbGVtZW50VHlwZTtcbiAgICB0aGlzLl9vcCA9IHdpbmRvdy5TZWFyY2hhYmxlTGlzdE9wZXJhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGFsbG93cyBnZXR0aW5nIGEgbG9jYWxpc2VkIHN0cmluZyBpbiB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIHJlcG9ydCBmcm9tIEhpdGxpc3QgY29uZmlnLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gdGhlIGtleSB0byBsb29rIHRoZSBwcm9wZXJ0eSB1cFxuICAgKlxuICAgKiAqIGBzdG9lYDpcIlNtYWxsZXIgdGhhbiBvciBlcXVhbFwiLFxuICAgKiAqIGBndG9lYDpcIkdyZWF0ZXIgdGhhbiBvciBlcXVhbFwiLFxuICAgKiAqIGBiZXR3ZWVuYDpcIkJldHdlZW5cIixcbiAgICogKiBgYmVmb3JlYDpcIkJlZm9yZVwiLFxuICAgKiAqIGBhZnRlcmA6XCJBZnRlclwiLFxuICAgKiAqIGBleGFjdGx5YDpcIkV4YWN0bHlcIixcbiAgICogKiBgc2hvd2RlZmF1bHRjb2xzYDpcIlNob3cgZGVmYXVsdCBjb2x1bW5zXCIsXG4gICAqICogYGFwcGx5YDpcIkFwcGx5XCIsXG4gICAqICogYGNhbmNlbGA6XCJDYW5jZWxcIixcbiAgICogKiBgc2hvd2hpZGVgOlwiU2hvdyAvIEhpZGUgY29sdW1uc1wiLFxuICAgKiAqIGB5ZXNgOlwiWWVzXCIsXG4gICAqICogYG5vYDpcIk5vXCIsXG4gICAqICogYGxvYWRpbmdEYXRhYDpcIkxvYWRpbmcgZGF0YSwgcGxlYXNlIHdhaXQuLi5cIixcIlxuICAgKiAqIGBjaGVja2FsbGA6XCJDaGVjayBhbGxcIixcbiAgICogKiBgdW5jaGVja2FsbGA6XCJVbmNoZWNrIGFsbFwiLFxuICAgKiAqIGBlcnJvckxvYWRpbmdgOlwiRXJyb3IgbG9hZGluZyBkYXRhXCIsXG4gICAqICogYGVycm9yTm9Db2x1bW5zYDpcIk5vIGNvbHVtbnMgc2VsZWN0ZWRcIlxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19SRVNQT05ERU5UT1ZFUlZJRVdgOlwiUmVzcG9uZGVudCBvdmVydmlld1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUklOVGA6XCJQcmludCB0aGUgY3VycmVudCByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX0NMT1NFYDpcIkNsb3NlIHRoaXMgb3ZlcmxheVwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19GSUxURVJgOlwiRmlsdGVyIHF1ZXN0aW9uc1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19OT1RISU5HRk9VTkRgOlwiTm8gcXVlc3Rpb25zIG1hdGNoIHlvdXIgc2VhcmNoXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTYDpcIlByZXZpb3VzXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTSElOVGA6XCJQcmV2aW91cyByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX05FWFRgOlwiTmV4dFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19ORVhUSElOVGA6XCJOZXh0IHJlc3BvbmRlbnRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfT0ZgOlwiezB9IG9mIHsxfVwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19NT1JFYDpcInswfSBtb3JlXCIsXG4gICAqICogUkVQT1JUX1NJTkdMRVZJRVdfQUxURVJOQVRJVkVTYDpcIkFuc3dlcnMgYWx0ZXJuYXRpdmVzOlwiXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqICovXG4gIGkxOG4oa2V5KXtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmNhcHRpb25zLmhhc093blByb3BlcnR5KGtleSk/dGhpcy5fY29uZmlnLmNhcHRpb25zW2tleV06dGhpcy5fY29uZmlnLnNpbmdsZVZpZXdUZXh0cy5oYXNPd25Qcm9wZXJ0eShrZXkpP3RoaXMuX2NvbmZpZy5zaW5nbGVWaWV3VGV4dHNba2V5XTpudWxsXG4gIH1cblxuICBnZXQgZGF0YSgpe3JldHVybiB0aGlzLl9jb25maWcuaGl0bGlzdERhdGF9XG5cbiAgc2V0IGRhdGEoZGF0YSl7XG4gICAgdGhpcy5fY29uZmlnLmhpdGxpc3REYXRhID0gZGF0YTtcbiAgfVxuICBnZXQgZGlzYWJsZU5leHRCdXR0b24oKXtcbiAgICByZXR1cm4gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLmRpc2FibGVOZXh0QnV0dG9uIHx8IGZhbHNlXG4gIH1cbiAgZ2V0IGRpc2FibGVQcmV2QnV0dG9uKCl7XG4gICAgcmV0dXJuIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcy5kaXNhYmxlUHJldkJ1dHRvbiB8fCBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHZpc2libGUgSGl0TGlzdCBjb2x1bW5zIG9mIE9iamVjdCB0eXBlOiBge2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfWBcbiAgICogQHJldHVybnMge0FycmF5Ljx7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9Pn0gUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgdmlzaWJsZSBIaXRMaXN0IGNvbHVtbnNcbiAgICogKi9cbiAgZ2V0IGNvbHVtbnMoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmNvbHVtbnN9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIEhpdExpc3QgY29sdW1ucyBvZiBPYmplY3QgdHlwZTogYHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ31gXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICogKi9cbiAgZ2V0IGFsbENvbHVtbnMoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmFsbENvbHVtbnN9XG5cbiAgZ2V0IGhpdGxpc3RJRCgpe3JldHVybiB0aGlzLl9jb25maWcuY29tcG9uZW50SWR9XG4gIGdldCBwYWdlSUQoKXtyZXR1cm4gdGhpcy5fY29uZmlnLnBhZ2VJZH1cbiAgZ2V0IGxhbmd1YWdlKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5sYW5ndWFnZX1cbiAgZ2V0IHNlcnZpY2VVUkwoKXtyZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3RoaXMuX2NvbmZpZy5zZXJ2aWNlVXJsfWB9XG4gIGdldCBwYWdlU3RhdGVJRCgpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUGFnZVN0YXRlSWQnKT8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1BhZ2VTdGF0ZUlkJykudmFsdWU6dW5kZWZpbmVkfVxuICBnZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcygpe1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlcyE9bnVsbD90aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlczp7fVxuICB9XG4gIHNldCBzb3J0aW5nUGFnaW5nVmFsdWVzKHZhbCl7XG4gICAgdGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB2YWw7XG4gIH1cblxuICBzdGF0aWMgX2ZpeEpzb25EYXRlKGpzb25EYXRlKSB7XG4gICAgaWYgKCEoanNvbkRhdGUgJiYgWSAmJiBZLkxhbmcuaXNGdW5jdGlvbihqc29uRGF0ZS5yZXBsYWNlKSkpIHtyZXR1cm4ganNvbkRhdGU7fVxuICAgIGxldCBjb25zdHIgPSBqc29uRGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeL0RhdGVcXFxcKChbLStdP1xcXFxkKylcXFxcKS8kXCIpLCBcIm5ldyBEYXRlKCQxKVwiKTtcbiAgICBpZiAoY29uc3RyID09IGpzb25EYXRlKSB7cmV0dXJuIGpzb25EYXRlO31cbiAgICByZXR1cm4gZXZhbChjb25zdHIpO1xuICB9XG5cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIGNvbmZpZyBmb3IgYSBIaXRMaXN0IGlmIGl0J3MgaW5pdGlhbGlzZWQgb24gdGhlIHBhZ2VcbiAgICogYGBgXG4gICAqIHtcbiAgICogIGFsbENvbHVtbnM6QXJyYXksXG4gICAqICBjYXB0aW9uczpPYmplY3QsXG4gICAqICBjbGllbnRJZDpTdHJpbmcsXG4gICAqICBjb2x1bW5zOkFycmF5LFxuICAgKiAgY29tcG9uZW50SWQ6U3RyaW5nLFxuICAgKiAgaGFzaGVkUHJvamVjdElkOlN0cmluZyxcbiAgICogIGhpdGxpc3REYXRhOkFycmF5LFxuICAgKiAgbGFuZ3VhZ2U6TnVtYmVyLFxuICAgKiAgbmV4dFRleHQ6U3RyaW5nLFxuICAgKiAgbm9Jbml0aWFsTG9hZDpCb29sZWFuLFxuICAgKiAgcGFnZUFqYXhFbmFibGVkOkJvb2xlYW4sXG4gICAqICBwYWdlSWQ6U3RyaW5nLFxuICAgKiAgcHJldlRleHQ6U3RyaW5nLFxuICAgKiAgcHJldmlldzpCb29sZWFuLFxuICAgKiAgc2VhcmNoSXRlbXM6QXJyYXksXG4gICAqICBzZWFyY2hWYWx1ZXM6QXJyYXksXG4gICAqICBzZXJ2aWNlVXJsOlN0cmluZyxcbiAgICogIHNlcnZpY2VVcmxNZXRhRGF0YTpTdHJpbmcsXG4gICAqICBzaG93U2luZ2xlVmlld09uUm93U2VsZWN0OkJvb2xlYW4sXG4gICAqICBzaW5nbGVWaWV3QXBpVXJsOlN0cmluZyxcbiAgICogIHNpbmdsZVZpZXdGb3Jtc0NodW5rQXBpVXJsOlN0cmluZyxcbiAgICogIHNpbmdsZVZpZXdUZXh0czpPYmplY3QsXG4gICAqICBzb3J0aW5nUGFnaW5nVmFsdWVzOk9iamVjdCxcbiAgICogIHN0eWxlczpPYmplY3QsXG4gICAqICB2ZXJzaW9uOlN0cmluZ1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiAqL1xuICBzdGF0aWMgZ2V0T3JpZ2luYWxDb25maWcoKXtcbiAgICBsZXQgc2NyaXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpO1xuICAgIGlmKHNjcmlwdHMpe1xuICAgICAgbGV0IGk9c2NyaXB0cy5sZW5ndGgsXG4gICAgICAgICAgY2ZnID0gLyhZXFwuUmVwb3J0YWxcXC5IaXRMaXN0LClcXHMoLio/KVxcKTsvZ2k7XG4gICAgICB3aGlsZShpLS0pe1xuICAgICAgICBsZXQgc2NyaXB0ID0gc2NyaXB0c1tpXS50ZXh0O1xuICAgICAgICBpZihzY3JpcHQuaW5kZXhPZignWS5SZXBvcnRhbC5IaXRMaXN0LCcpPi0xKXtcbiAgICAgICAgICBsZXQgZXhlYyA9IGNmZy5leGVjKHNjcmlwdCk7XG4gICAgICAgICAgcmV0dXJuIChleGVjIT1udWxsICYmIGV4ZWNbMl0pPyBKU09OLnBhcnNlKGV4ZWNbMl0pOiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGl0bGlzdCBjb25maWcgaXMgbm90IHByZXNlbnQgb24gdGhlIHBhZ2UnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0U2V0dXBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3Qtc2V0dXAuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMDcuMDkuMjAxNi5cbiAqL1xuXG5pbXBvcnQgSGl0bGlzdERhdGFzb3VyY2UgZnJvbSBcIi4vaGl0bGlzdC1kYXRhc291cmNlXCI7XG5pbXBvcnQgUmVwb3J0YWxCYXNlIGZyb20gXCJyLXJlcG9ydGFsLWJhc2VcIjtcblxud2luZG93LlJlcG9ydGFsID0gd2luZG93LlJlcG9ydGFsIHx8IHt9O1xuUmVwb3J0YWxCYXNlLm1peGluKHdpbmRvdy5SZXBvcnRhbCx7XG4gIEhpdGxpc3REYXRhc291cmNlXG59KTtcbmV4cG9ydCBkZWZhdWx0IEhpdGxpc3REYXRhc291cmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvbWFpbi5qcyIsIi8vQGZsb3dcclxuaW1wb3J0IEhpdGxpc3REUyBmcm9tIFwici1oaXRsaXN0LWRhdGFzb3VyY2VcIjtcclxuaW1wb3J0IHVuaW9uQnkgZnJvbSBcImxvZGFzaC91bmlvbkJ5XCI7XHJcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSAnci1yZXBvcnRhbC1iYXNlJztcclxuXHJcbnR5cGUgT3B0aW9ucyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogbmFtZSBvZiBhIGdsb2JhbCBjb25maWcgdmFyaWFibGUgcGFzc2VkXHJcbiAgICAqL1xyXG4gICAgY29uZmlnOiBzdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkaXNwbGF5IHRodW1icyBhcyBpbWFnZSBwbGFjZWhvbGRlcnMgaW5zdGVhZCBvZiBtZWRpYSBpY29uc1xyXG4gICAgKi9cclxuICAgIHRodW1ic1BsYWNlaG9sZGVyOiBib29sZWFuLFxyXG4gICAgY29tcG9uZW50OiBhbnlcclxufVxyXG5cclxudHlwZSBwYXJzZWREYXRhUm93ID0ge1xyXG4gICAgaWQ6IHN0cmluZyB8IG51bWJlcixcclxuICAgIHRpdGxlPzogc3RyaW5nLFxyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcclxuICAgIGltYWdlPzogc3RyaW5nLFxyXG4gICAgbWVkaWF0eXBlOiAndmlkZW8nIHwgJ2F1ZGlvJyB8ICdpbWFnZScsXHJcbiAgICBsaW5rOiBzdHJpbmcsXHJcbiAgICBbeDpzdHJpbmddOnN0cmluZyxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERTQWJzdHJhY3Rpb24ob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgY29uc3QgRFMgPSBuZXcgSGl0bGlzdERTKCk7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSBvcHRpb25zLmNvbXBvbmVudDtcclxuICAgIGxldCBjb25maWc7XHJcbiAgICBjb25zdCBxdWVyeSA9IFJlcG9ydGFsQmFzZS5sb2NhdGlvbkRlc2VyaWFsaXplKCkucXVlcnk7XHJcblxyXG4gICAgc2V0dXBEYXRhTGlzdGVuZXIob3B0aW9ucy5jb25maWcpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGF1bmNoZXMgbGlzdGVuZXIgZm9yIGBZLkdsb2JhbC5yZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZWAgZXZlbnQgd2l0aGluIFlVSSB3aGljaCBpcyB0cmlnZ2VyZWQgZXZlcnkgdGltZSB0aGUgZmlsdGVyIHBhbmVsIHVwZGF0ZXMgb3Igb24gaW5pdGlhbCBsb2FkXHJcbiAgICAgKiAqL1xyXG4gICAgZnVuY3Rpb24gc2V0dXBEYXRhTGlzdGVuZXIoY29uZmlnTmFtZSkge1xyXG4gICAgICAgIGlmIChZICYmIFkuR2xvYmFsKSB7XHJcbiAgICAgICAgICAgIFkuR2xvYmFsLm9uKFwicmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVcIiwgZmlsdGVySW5mbyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsaXNlQ29uZmlnKGNvbmZpZ05hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKERTICYmIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIERTLm1vZGlmaWVyID0gZmlsdGVySW5mbzsgLy8gZmlsdGVyIGluZm9ybWF0aW9uIGFzIGEgbW9kaWZpZXIgZm9yIGRhdGEgZmV0Y2hcclxuICAgICAgICAgICAgICAgICAgICBEUy5pbml0aWFsRGF0YUxvYWQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihwcm9jZXNzRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZVUkgaXMgbm90IGRlZmluZWQgb3IgYWNjZXNzaWJsZSwgY2Fubm90IHNldCB1cCBhIFwicmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVcIiBsaXN0ZW5lcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXNlQ29uZmlnKGNvbmZpZ05hbWUpIHtcclxuICAgICAgICBpZiAoIWNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoIXdpbmRvd1tjb25maWdOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25maWcgaXMgbm90IHBhc3NlZCBmcm9tIGJhY2tlbmQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbmZpZyA9IHdpbmRvd1tjb25maWdOYW1lXTtcclxuICAgICAgICAgICAgaWYoY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzICYmIHR5cGVvZiBjb25maWcuaW5kaXZpZHVhbFJlY29yZHMgPT09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5pbmRpdmlkdWFsUmVjb3JkcyA9IGNvbmZpZy5pbmRpdmlkdWFsUmVjb3Jkcy5zcGxpdCgnLCcpLm1hcChpdGVtPT5pdGVtLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHsgY29uZmlnIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEsIG1vZGUgPSAncmVwbGFjZScpIHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhOiBwYXJzZWREYXRhUm93W10gPSBkYXRhLm1hcCgoZGF0YVJvdywgcm93SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcnNlZFJvdzogcGFyc2VkRGF0YVJvdyA9IHt9O1xyXG4gICAgICAgICAgICBjb25zdCBpciA9IGNvbmZpZy5pbmRpdmlkdWFsUmVjb3JkcyB8fCBbXTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YUZpZWxkcyA9IFsnaWQnLCAndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nLCAndGFncyddLmNvbmNhdChpcik7XHJcbiAgICAgICAgICAgIGRhdGFGaWVsZHMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uSUQgPSBjb25maWdba2V5XTtcclxuICAgICAgICAgICAgICAgIHBhcnNlZFJvd1trZXldID0gcHJlcGFyZURhdGEoZGF0YVJvd1tjb2x1bW5JRCB8fCBrZXldLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgaW1hZ2UgLSB3ZSBtaWdodCB3YW50IHRvIHVzZSBhIHBsYWNlaG9sZGVyIGFzIHRoZSB0aHVtYiwgYW5kIGxvYWQgdGhlIGZ1bGwgaW1hZ2UgaW4gYmFja2dyb3VuZFxyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWRSb3cuaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudGh1bWJzUGxhY2Vob2xkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFJvdy5wbGFjZWhvbGRlciA9IHBhcnNlZFJvdy5pbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRSb3cuaW1hZ2UgPSBwYXJzZWRSb3cuaW1hZ2UucmVwbGFjZSgvX3RodW1iL2dpLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIG1lZGlhdHlwZSBvciBhIHBsYWNlaG9sZGVyIGljb25cclxuICAgICAgICAgICAgICAgIGlmICghcGFyc2VkUm93Lm1lZGlhdHlwZSAmJiBbJ3ZpZGVvJywgJ2F1ZGlvJywgJ2ltYWdlJ10uaW5kZXhPZihrZXkpID4gLTEgJiYgY29uZmlnW2tleV0gJiYgcGFyc2VkUm93W2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWRSb3cubWVkaWF0eXBlID0ga2V5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IGlkIGZvciBrZXlzXHJcbiAgICAgICAgICAgIHBhcnNlZFJvdy5pZCA9IGRhdGFSb3cucmVzcG9uc2VpZCA/IGRhdGFSb3cucmVzcG9uc2VpZCA6IHJvd0luZGV4O1xyXG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgbGluayBwYXNzZWQgYXMgYHNsaW5rYCBwcm9wZXJ0eSBpbiBkYXRhXHJcbiAgICAgICAgICAgIGlmIChkYXRhUm93LnNsaW5rKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbCA9IGRhdGFSb3cuc2xpbms7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWRSb3cubGluayA9ICgvaHJlZj0nKC4rPyknL2dpKS5leGVjKGwpLnBvcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRSb3c7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vdXBkYXRlIHN0YXRlIHdpdGggdGhlIG5ldyBzZXQgb2YgZGF0YSBvciBhIG1lcmdlZCBkYXRhXHJcbiAgICAgICAgaWYgKG1vZGUgPT09ICdyZXBsYWNlJykge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IG5ld0RhdGEsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnYXBwZW5kJykge1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogWy4uLnByZXZTdGF0ZS5pdGVtcywgLi4ubmV3RGF0YV0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2VcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ21lcmdlJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtb2RlKTtcclxuICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHVuaW9uQnkobmV3RGF0YSwgcHJldlN0YXRlLml0ZW1zLCAnaWQnKSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0YXRgNC10L0g0LfQvdCw0LXRgiDRh9GC0L4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1hc3NhZ2UgZGF0YSB0byBmaXQgdGhlIHR5cGUgd2UgZXhwZWN0IHRvIHJlY2VpdmUgaW4gcmVhY3Qgdmlld1xyXG4gICAgICogKi9cclxuICAgIGZ1bmN0aW9uIHByZXBhcmVEYXRhKGRhdGE6YW55LCB0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncHJlcGFyZURhdGEnLGRhdGEsdHlwZSlcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICgvc3JjPScoLis/KScvZ2kpLmV4ZWMoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICE9IG51bGwgJiYgcmVzdWx0WzFdID8gcmVzdWx0WzFdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjYXNlICdkZXNjcmlwdGlvbic6XHJcbiAgICAgICAgICAgIGNhc2UgJ3RpdGxlJzpyZXR1cm4gIShkYXRhLmluZGV4T2YoJy0nKSA+IC0xICYmIGRhdGEudHJpbSgpLmxlbmd0aCA9PT0gMSkgPyBkYXRhLnRyaW0oKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY2FzZSAndmlkZW8nOlxyXG4gICAgICAgICAgICBjYXNlICdhdWRpbyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIShkYXRhLmluZGV4T2YoJy0nKSA+IC0xICYmIGRhdGEudHJpbSgpLmxlbmd0aCA9PT0gMSkgPyBnZW5lcmF0ZU1lZGlhTGluayhkYXRhLnRyaW0oKSwgdHlwZSkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNhc2UgJ3RhZ3MnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEgJiYgKGRhdGEuaW5kZXhPZignLCcpID4gLTEgPyBkYXRhLnNwbGl0KCcsJykgOiBkYXRhLmluZGV4T2YoJy0nKSA+IC0xICYmIGRhdGEudHJpbSgpLmxlbmd0aCA9PT0gMSA/IHVuZGVmaW5lZCA6IGRhdGEudHJpbSgpKTtcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTWVkaWFMaW5rKGZpbGVOYW1lOnN0cmluZywgdHlwZTogJ2F1ZGlvJ3wndmlkZW8nKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnZ2VuZXJhdGVNZWRpYUxpbmsnLGZpbGVOYW1lLHR5cGUpXHJcbiAgICAgICAgY29uc3QgZHNOYW1lID0gY29uZmlnLnN1cnZleUlEO1xyXG4gICAgICAgIHJldHVybiBgL3JlcG9ydGFsL1d5c2l3eWcvUmVwb3J0LyR7cXVlcnkucmVwb3J0aWR9LyR7ZHNOYW1lfS8ke3R5cGV9LyR7ZmlsZU5hbWV9YFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZURhdGFMb2FkaW5nRXJyb3IoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgRFMubG9hZE5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBEUy5uZXh0UGFnZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmxvYWRQcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIERTLnByZXZpb3VzUGFnZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmxvYWRNb3JlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBEUy5uZXh0UGFnZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHByb2Nlc3NEYXRhKHJlc3BvbnNlLCAnYXBwZW5kJykpXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgRFMuaW5pdGlhbExvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIERTLmluaXRpYWxEYXRhTG9hZCgpXHJcbiAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmdldFBhZ2VJbmZvID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhhc1BhZ2VJbmZvID0gRFMucGFnZUluZm8gJiYgRFMuc29ydGluZ1BhZ2luZ1ZhbHVlcyAmJiBEUy5zb3J0aW5nUGFnaW5nVmFsdWVzLnRvdGFsSGl0cztcclxuICAgICAgICByZXR1cm4gaGFzUGFnZUluZm8gPyBgJHtEUy5wYWdlSW5mb30gb2YgJHtEUy5zb3J0aW5nUGFnaW5nVmFsdWVzLnRvdGFsSGl0c31gIDogJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIERTLmNvbmZpZyA9ICgpID0+IHsgcmV0dXJuIGNvbmZpZyAhPSBudWxsID8gY29uZmlnIDogaW5pdGlhbGlzZUNvbmZpZyhvcHRpb25zLmNvbmZpZykgfTtcclxuXHJcbiAgICByZXR1cm4gRFNcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EU0Fic3RyYWN0aW9uLmpzIiwiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzLCBQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWcgZnJvbSAnUHJvcG9ydGlvbmFsSW1hZ2UnO1xyXG5cclxuY29uc3QgTUVESUFfVFlQRVMgPSBbJ2ltYWdlJywgJ2F1ZGlvJywgJ3ZpZGVvJ107XHJcblxyXG5jbGFzcyBJbWFnZUdyaWRUaWxlIGV4dGVuZHMgUHVyZUNvbXBvbmVudHtcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgdGlsZSBmb3IgaW1hZ2UgbGlzdFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5pbWFnZSAtIGltYWdlIHVybFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlciAtIGEgcGxhY2Vob2xkZXIgaW1hZ2VcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMucGxhY2Vob2xkZXJTaXppbmcgLSBTZXRzIGEgc2l6aW5nIG9wdGlvbiBmb3IgdGhlIHBsYWNlaG9sZGVyLiBCeSBkZWZhdWx0IGl0J3MgdGhlIHNhbWUgYXMgZm9yIHRoZSBgc3JjYCBpbWFnZSwgYnV0IHNldCB0byBgaW5pdGlhbGAgb3Igb3RoZXIgdmFsaWQgYGJhY2tncm91bmQtc2l6ZWAgdmFsdWUgdG8gb3ZlcnJpZGUuXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLm1lZGlhdHlwZSAtIGEgZGVmYXVsdCBtZWRpYSBpY29uIGluc3RlYWQgb2YgdGhlIHBsYWNlaG9sZGVyIGltYWdlOiBvbmUgb2YgYGltYWdlYCxgYXVkaW9gLGB2aWRlb2BcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmljb25Db2xvcj1cIiNjY2NjY2NcIl0gLSBkZWZhdWx0IHBsYWNlaG9sZGVyIG1lZGlhIGljb24gY29sb3JcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmljb25TaXplPTQ4XSAtIGRlZmF1bHQgcGxhY2Vob2xkZXIgbWVkaWEgaWNvbiBzaXplXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5hc3BlY3Q9XCIxNjo5XCJdIC0gYXNwZWN0IHJhdGlvIG9mIHRoZSBpbWFnZSB0byBiZSBpbiB0aGUgdGlsZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnRpdGxlIC0gdGl0bGUgb2YgdGhlIHZpZGVvXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmRlc2NyaXB0aW9uIC0gZGVzY3JpcHRpb24gb2YgdGhlIHZpZGVvXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy5hY3Rpb25JY29uIC0gaWNvbiB0byBkaXNwbGF5IGFzIHRoZSBhY3Rpb24gaWNvbi4gSXQgYWxzbyBoYXMgdG8gaGF2ZSBhIGNhbGxiYWNrIGF0dGFjaGVkIHRvIGl0IHdoZW4gcGFzc2VkLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLm9uU2VsZWN0IC0gY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWQgd2hlbiB0aGUgbGluayBpcyBjbGlja2VkXHJcbiAgICogKi9cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGFjdGlvbkJ1dHRvbiA9IG51bGw7XHJcbiAgICBjb25zdCB7YWN0aW9uSWNvbixvblNlbGVjdCxhc3BlY3QsdGl0bGUscGxhY2Vob2xkZXJTaXppbmcsaW1hZ2UsZGVzY3JpcHRpb259PXRoaXMucHJvcHM7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hY3Rpb25JY29uKSB7XHJcbiAgICAgIGFjdGlvbkJ1dHRvbiA9IDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tZWRpdCByaXBwbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWFjdGlvbi1pY29uXCI+e2FjdGlvbkljb259PC9kaXY+XHJcbiAgICAgIDwvZGl2PjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tY292ZXJcIiBvbkNsaWNrPXtvblNlbGVjdH0+XHJcbiAgICAgICAgICA8SW1nXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgIGFzcGVjdD17YXNwZWN0fVxyXG4gICAgICAgICAgICBzaXppbmc9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgIHByZWxvYWQ9e3RydWV9XHJcbiAgICAgICAgICAgIGZhZGU9e3RydWV9XHJcbiAgICAgICAgICAgIGFsdD17dGl0bGV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLl9jb21wdXRlVGlsZVR5cGUoKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXJTaXppbmc9e3BsYWNlaG9sZGVyU2l6aW5nfVxyXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tbWV0YVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLXRpdGxlIGVsbGlwc2lzXCIgb25DbGljaz17b25TZWxlY3R9Pnt0aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1kZXNjcmlwdGlvbiBlbGxpcHNpc1wiPntkZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2FjdGlvbkJ1dHRvbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBfY29tcHV0ZVRpbGVUeXBlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qge3BsYWNlaG9sZGVyLG1lZGlhdHlwZSxpY29uU2l6ZSxpY29uQ29sb3J9ID0gdGhpcy5wcm9wcztcclxuICAgICAgaWYgKCFwbGFjZWhvbGRlciAmJiBtZWRpYXR5cGUpIHtcclxuICAgICAgICBpZiAoTUVESUFfVFlQRVMuaW5kZXhPZihtZWRpYXR5cGUpID09PSAtMSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgdHlwZSBcIiR7bWVkaWF0eXBlfVwiIGlzIHNwZWNpZmllZGApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpY29uID0gSW1hZ2VHcmlkVGlsZS5pY29uU2VydmVyKG1lZGlhdHlwZSwgaWNvblNpemUsIGljb25Db2xvcik7XHJcbiAgICAgICAgcmV0dXJuICdkYXRhOmltYWdlL3N2Zyt4bWwsJyArIGVzY2FwZShpY29uKTtcclxuICAgICAgfSBlbHNlIGlmKCEhcGxhY2Vob2xkZXIpe1xyXG4gICAgICAgIHJldHVybiBwbGFjZWhvbGRlclxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnZGF0YTppbWFnZS9zdmcreG1sLCcgKyBlc2NhcGUoSW1hZ2VHcmlkVGlsZS5pY29uU2VydmVyKCd1bmtub3duJywgaWNvblNpemUsIGljb25Db2xvcikpXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKXtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gaWNvbiB3aXRoIGEgY29ycmVjdCBmaWxsIGNvbG9yXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBpY29uIG5hbWUgKG9uZSBvZiBgaW1hZ2VgLCBgdmlkZW9gLCBgYXVkaW9gKVxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbc2l6ZT0yNF0gLSBpY29uIHNpemUgaW4gcGl4ZWxzXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtmaWxsPVwiI2NjY2NjY1wiXSAtIHZhbGlkIENTUyBjb2xvciBkZWNsYXJhdGlvblxyXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAgICogKi9cclxuICBzdGF0aWMgaWNvblNlcnZlcihuYW1lLCBzaXplID0gNDgsIGZpbGwgPSBcIiNjY2NjY2NcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWNvbnMgPSB7XHJcbiAgICAgICAgaW1hZ2U6IGA8cGF0aCBkPVwiTTIxIDE5VjVjMC0xLjEtLjktMi0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnpNOC41IDEzLjVsMi41IDMuMDFMMTQuNSAxMmw0LjUgNkg1bDMuNS00LjV6XCIvPmAsXHJcbiAgICAgICAgYXVkaW86IGA8cGF0aCBkPVwiTTEyIDN2MTAuNTVjLS41OS0uMzQtMS4yNy0uNTUtMi0uNTUtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00VjdoNFYzaC02elwiLz5gLFxyXG4gICAgICAgIHZpZGVvOiBgPHBhdGggZD1cIk0xOCA0bDIgNGgtM2wtMi00aC0ybDIgNGgtM2wtMi00SDhsMiA0SDdMNSA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRoLTR6XCIvPmAsXHJcbiAgICAgICAgdW5rbm93bjogYDxwYXRoIGQ9XCJNMjEgNXY2LjU5bC0zLTMuMDEtNCA0LjAxLTQtNC00IDQtMy0zLjAxVjVjMC0xLjEuOS0yIDItMmgxNGMxLjEgMCAyIC45IDIgMnptLTMgNi40MmwzIDMuMDFWMTljMCAxLjEtLjkgMi0yIDJINWMtMS4xIDAtMi0uOS0yLTJ2LTYuNThsMyAyLjk5IDQtNCA0IDQgNC0zLjk5elwiLz5gLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAoIWljb25zW25hbWVdKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpY29uIFwiJHtuYW1lfVwiIGlzIG5vdCBvbiB0aGUgbGlzdGApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBgPHN2ZyBmaWxsPVwiJHtmaWxsfVwiIGhlaWdodD1cIiR7c2l6ZX1cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIke3NpemV9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiR7aWNvbnNbbmFtZV19PC9zdmc+YFxyXG4gICAgfSBjYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5JbWFnZUdyaWRUaWxlLnByb3BUeXBlcyA9IHtcclxuICBpbWFnZSAgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFjZWhvbGRlciAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFjZWhvbGRlclNpemluZzogUHJvcFR5cGVzLm9uZU9mKFsnY29udGFpbicsICdjb3ZlcicsICdpbml0aWFsJ10pLFxyXG4gIG1lZGlhdHlwZSAgICAgICAgOiBQcm9wVHlwZXMub25lT2YoTUVESUFfVFlQRVMpLFxyXG4gIGljb25Db2xvciAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGljb25TaXplICAgICAgICAgOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGFzcGVjdCAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRpdGxlICAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGFjdGlvbkljb24gICAgICAgOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvblNlbGVjdCAgICAgICAgIDogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuXHJcbkltYWdlR3JpZFRpbGUuZGVmYXVsdFByb3BzID0ge1xyXG4gIGljb25Db2xvcjogXCIjY2NjY2NjXCIsXHJcbiAgaWNvblNpemUgOiA0OCxcclxuICBhc3BlY3QgICA6IFwiMTY6OVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHcmlkVGlsZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VHcmlkVGlsZS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2VHcmlkVGlsZSBmcm9tICcuLi9JbWFnZUdyaWRUaWxlJztcclxuXHJcblxyXG4vKipcclxuICogYEltYWdlR3JpZGAgaXMgYSBzdGF0ZWxlc3MgUmVhY3QgY29tcG9uZW50IHRoYXQgYWxsb3dzIHRvIGNvbXB1dGUgYW4gYXJyYXkgb2YgSW1hZ2VHcmlkVGlsZXMgZnJvbSBgaXRlbXNgIHBhc3NlZCBpbiBwcm9wc1xyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMuaXRlbXMgLSBhbiBhcnJheSBvZiBpdGVtcyBge2lkOk51bWJlcnxTdHJpbmcsIGltYWdlOlN0cmluZywgbWVkaWF0eXBlOj9TdHJpbmcsIHBsYWNlaG9sZGVyOj9TdHJpbmcsIHRpdGxlOlN0cmluZyxkZXNjcmlwdGlvbjpTdHJpbmd9YFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuYXNwZWN0IC0gYXNwZWN0IHJhdGlvIGZvciB0aGUgSW1hZ2VHcmlkVGlsZSBpbWFnZVxyXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gcHJvcHMuYWN0aW9uSWNvbiAtIGFjdGlvbiBpY29uIEpTWCB3aXRoIGEgYm91bmQgaGFuZGxlclxyXG4gKiBAcGFyYW0gez9TdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyU2l6aW5nIC0gU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlci4gQnkgZGVmYXVsdCBpdCdzIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNyY2AgaW1hZ2UsIGJ1dCBzZXQgdG8gYGluaXRpYWxgIG9yIG90aGVyIHZhbGlkIGBiYWNrZ3JvdW5kLXNpemVgIHZhbHVlIHRvIG92ZXJyaWRlLlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblNlbGVjdCAtIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhbiBpdGVtIGlzIGNsaWNrZWQgb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHByb3BzLmR1bW15SXRlbXMgLSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkIG9uXHJcbiAqICovXHJcbmNsYXNzIEltYWdlR3JpZCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG5cclxuICBpdGVtQ2xpY2tIYW5kbGVyID0gKGl0ZW0pID0+IChldmVudCkgPT4gdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtKTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2l0ZW1zLCBkdW1teUl0ZW1zLCBhc3BlY3QsIHBsYWNlaG9sZGVyU2l6aW5nLCBhY3Rpb25JY29ufSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFwiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCA+IDAgJiYgaXRlbXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VHcmlkVGlsZVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZC50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgIGFzcGVjdD17YXNwZWN0fVxyXG4gICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgIG1lZGlhdHlwZT17aXRlbS5tZWRpYXR5cGV9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2l0ZW0ucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJTaXppbmc9e2l0ZW0uaW1hZ2U/cGxhY2Vob2xkZXJTaXppbmc6J2luaXRpYWwnfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIGFjdGlvbkljb249e3R5cGVvZiBhY3Rpb25JY29uPT09J2Z1bmN0aW9uJz9hY3Rpb25JY29uKGl0ZW0pOm51bGx9XHJcbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaXRlbUNsaWNrSGFuZGxlcihpdGVtKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtkdW1teUl0ZW1zICYmIHRoaXMucmVuZGVyRHVtbXlJdGVtcyhkdW1teUl0ZW1zKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyRHVtbXlJdGVtcyhjb3VudCkge1xyXG4gICAgY29uc3QgZHVtbXlJdGVtcyA9IFtdO1xyXG4gICAgd2hpbGUgKGNvdW50LS0pIHtcclxuICAgICAgZHVtbXlJdGVtcy5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZVwiIGtleT17YGR1bW15JHtjb3VudH1gfS8+KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGR1bW15SXRlbXNcclxuICB9XHJcbn1cclxuXHJcbkltYWdlR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheSxcclxuICBhc3BlY3Q6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYWN0aW9uSWNvbjogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgcGxhY2Vob2xkZXJTaXppbmc6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgZHVtbXlJdGVtczogUHJvcFR5cGVzLm51bWJlclxyXG59O1xyXG5cclxuSW1hZ2VHcmlkLmRlZmF1bHRQcm9wcyA9IHtcclxuICBkdW1teUl0ZW1zOiAxMlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHcmlkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VHcmlkL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29uZmlnKVxyXG4gICAgICAgIGlmIChjb25maWcpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IGNvbmZpZy5wYWdpbmF0aW9uO1xyXG4gICAgICAgICAgICBpZiAocGFnaW5hdGlvbiA9PT0gJ2NvbnRpbnVvdXMnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250aW51b3VzTmF2aWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5nTmF2aWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29udGludW91c05hdmlnYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgeyBsb2FkTW9yZSwgZGlzYWJsZU5leHRCdXR0b24gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Sb3dcIiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBmbGF0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2FkTW9yZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZU5leHRCdXR0b259XHJcbiAgICAgICAgICAgICAgICA+TG9hZCBtb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcGFnaW5nTmF2aWdhdGlvbigpIHtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGxvYWRQcmV2aW91c1BhZ2UsXHJcbiAgICAgICAgICAgIGxvYWROZXh0UGFnZSxcclxuICAgICAgICAgICAgZGlzYWJsZU5leHRCdXR0b24sXHJcbiAgICAgICAgICAgIGRpc2FibGVQcmV2QnV0dG9uLFxyXG4gICAgICAgICAgICBwYWdlSW5mbyxcclxuICAgICAgICAgICAgdHJhbnNsYXRlXHJcbiAgICAgICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uUm93XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsQnV0dG9uIGFjY2VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9hZFByZXZpb3VzUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZVByZXZCdXR0b259XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZSgnUkVQT1JUX1NJTkdMRVZJRVdfUFJFVklPVVMnKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gYWNjZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2FkTmV4dFBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVOZXh0QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ1JFUE9SVF9TSU5HTEVWSUVXX05FWFQnKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntwYWdlSW5mb308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RWaWRlby9OYXZpZ2F0aW9uLmpzIiwiLy9AZmxvd1xyXG5pbXBvcnQgdHlwZSB7U3RhdGUsIFByb3BzIH0gZnJvbSAnLi90eXBlcydcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlR3JpZCBmcm9tIFwiLi4vSW1hZ2VHcmlkXCI7XHJcbmltcG9ydCBTaW5nbGVWaWV3IGZyb20gXCIuLi9TaW5nbGVWaWV3XCI7XHJcbmltcG9ydCBEU0Fic3RyYWN0aW9uIGZyb20gJy4uL0RTQWJzdHJhY3Rpb24nXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbidcclxuaW1wb3J0IFNpbmdsZVZpZXdSZXNwb25zZXMgZnJvbSAnLi4vU2luZ2xlVmlldy9SZXNwb25zZXMnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VmlkZW8gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgRFMgPSBEU0Fic3RyYWN0aW9uKHtcclxuICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcsXHJcbiAgICB0aHVtYnNQbGFjZWhvbGRlcjogdGhpcy5wcm9wcy50aHVtYnNQbGFjZWhvbGRlcixcclxuICAgIGNvbXBvbmVudDogdGhpc1xyXG4gIH0pO1xyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGl0ZW1zOiBudWxsLFxyXG4gICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgY29uZmlnOiBudWxsLFxyXG4gICAgc2luZ2xlVmlld01vZGU6ICd2aWV3JyxcclxuICAgIHNpbmdsZVZpZXc6IHtcclxuICAgICAgbGluazogJydcclxuICAgIH0sXHJcbiAgICBzaW5nbGVWaWV3VmlzaWJsZTogZmFsc2UsXHJcbiAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXY6IGZhbHNlLFxyXG4gICAgc2luZ2xlVmlld0Rpc2FibGVOZXh0OiBmYWxzZSxcclxuICB9O1xyXG5cclxuICB0cmFuc2xhdGUgPSB0aGlzLkRTLmkxOG4uYmluZCh0aGlzLkRTKTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpdGVtcywgc2luZ2xlVmlld1Zpc2libGUsIGVycm9yLCBjb25maWcgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgcmVuZGVyID0gbnVsbDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuRFMpO1xyXG4gICAgaWYgKCFlcnJvciAmJiBBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgcmVuZGVyID0gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgR3JpZENvbnRhaW5lciAkeyFzaW5nbGVWaWV3VmlzaWJsZSA/ICdHcmlkVmlldycgOiAnJ31gfT5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlclNpbmdsZVZpZXcoKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkQ29udGFpbmVyXCIgc3R5bGU9e3sgZGlzcGxheTogIXNpbmdsZVZpZXdWaXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgPEltYWdlR3JpZFxyXG4gICAgICAgICAgICAgIGFzcGVjdD1cIjE2OjlcIlxyXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0fVxyXG4gICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICAgICAgICBhY3Rpb25JY29uPXtjb25maWcuY2FuRWRpdCA/IHRoaXMuYWN0aW9uSWNvbiA6IG51bGx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlck5hdmlnYXRpb24oKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5EUykge1xyXG4gICAgICAgIHJlbmRlciA9IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR3JpZENvbnRhaW5lciBJbWFnZUdyaWRcIj57dGhpcy5kYXRhTG9hZGluZ01lc3NhZ2UoKX08L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIaXRsaXN0RGF0YXNvdXJjZSBpcyBub3QgYXZhaWxhYmxlJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlbmRlclxyXG4gIH1cclxuXHJcbiAgcmVuZGVyTmF2aWdhdGlvbigpIHtcclxuICAgIGNvbnN0IHsgbG9hZFByZXZpb3VzUGFnZSwgbG9hZE5leHRQYWdlLCBsb2FkTW9yZSwgZGlzYWJsZU5leHRCdXR0b24sIGRpc2FibGVQcmV2QnV0dG9uLCBnZXRQYWdlSW5mbyB9ID0gdGhpcy5EUztcclxuICAgIGNvbnN0IG5hdmlnYXRpb25Qcm9wcyA9IHtcclxuICAgICAgbG9hZFByZXZpb3VzUGFnZSxcclxuICAgICAgbG9hZE5leHRQYWdlLFxyXG4gICAgICBsb2FkTW9yZSxcclxuICAgICAgZGlzYWJsZU5leHRCdXR0b24sXHJcbiAgICAgIGRpc2FibGVQcmV2QnV0dG9uLFxyXG4gICAgICBwYWdlSW5mbzogZ2V0UGFnZUluZm8oKSxcclxuICAgICAgY29uZmlnOiB0aGlzLnN0YXRlLmNvbmZpZyxcclxuICAgICAgdHJhbnNsYXRlOiB0aGlzLnRyYW5zbGF0ZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8TmF2aWdhdGlvbiB7Li4ubmF2aWdhdGlvblByb3BzfSAvPlxyXG4gIH1cclxuXHJcbiAgcmVuZGVyU2luZ2xlVmlldygpIHtcclxuICAgIGNvbnN0IHsgc2luZ2xlVmlld1Zpc2libGUsIHNpbmdsZVZpZXcsIHNpbmdsZVZpZXdEaXNhYmxlUHJldiwgc2luZ2xlVmlld0Rpc2FibGVOZXh0LCBzaW5nbGVWaWV3TW9kZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiBzaW5nbGVWaWV3VmlzaWJsZSA/IChcclxuICAgICAgPFNpbmdsZVZpZXdcclxuICAgICAgICByZXR1cm5Ub0dyaWRBY3Rpb249e3RoaXMucmV0dXJuVG9HcmlkfVxyXG4gICAgICAgIGxvYWRQcmV2aW91c0l0ZW09e3RoaXMubG9hZFByZXZpb3VzSXRlbX1cclxuICAgICAgICBsb2FkTmV4dEl0ZW09e3RoaXMubG9hZE5leHRJdGVtfVxyXG4gICAgICAgIHNpbmdsZVZpZXdEaXNhYmxlUHJldj17c2luZ2xlVmlld0Rpc2FibGVQcmV2fVxyXG4gICAgICAgIHNpbmdsZVZpZXdEaXNhYmxlTmV4dD17c2luZ2xlVmlld0Rpc2FibGVOZXh0fVxyXG4gICAgICA+XHJcbiAgICAgICAge3NpbmdsZVZpZXdNb2RlID09PSAnZWRpdCcgP1xyXG4gICAgICAgICAgKDxpZnJhbWUgY2xhc3NOYW1lPVwicmVuZGVyQXJlYVwiIHNyYz17c2luZ2xlVmlldy5saW5rfSAvPilcclxuICAgICAgICAgIDpcclxuICAgICAgICAgICg8U2luZ2xlVmlld1Jlc3BvbnNlcyBkYXRhPXtzaW5nbGVWaWV3fSBjb2x1bW5zPXt0aGlzLmluZGl2aWR1YWxSZWNvcmRzUXVlc3Rpb25JZHN9IGNvbHVtbnNNYXA9e3RoaXMuaW5kaXZpZHVhbFJlY29yZHNLZXlMYWJlbHN9IC8+KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9TaW5nbGVWaWV3PlxyXG4gICAgKSA6IG51bGxcclxuICB9XHJcblxyXG4gIGdldCBpbmRpdmlkdWFsUmVjb3Jkc1F1ZXN0aW9uSWRzKCkge1xyXG4gICAgY29uc3QgeyBpbmRpdmlkdWFsUmVjb3JkcyB9ID0gdGhpcy5EUy5jb25maWcoKTtcclxuICAgIHJldHVybiBpbmRpdmlkdWFsUmVjb3JkcyAhPSBudWxsICYmIEFycmF5LmlzQXJyYXkoaW5kaXZpZHVhbFJlY29yZHMpID8gaW5kaXZpZHVhbFJlY29yZHMgOiBbXVxyXG4gIH1cclxuXHJcbiAgZ2V0IGluZGl2aWR1YWxSZWNvcmRzS2V5TGFiZWxzKCkge1xyXG4gICAgcmV0dXJuIHsuLi50aGlzLmdldExhYmVsc0Zvck1haW5GaWVsZHMoKSwgLi4udGhpcy5nZXRMYWJlbHNGb3JJbmRpdmlkdWFsUmVjb3JkcygpfVxyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWxzRm9yTWFpbkZpZWxkcygpe1xyXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5EUy5jb25maWcoKTtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdpbWFnZScsICdhdWRpbycsICd2aWRlbyddLnJldmVyc2UoKS5mb3JFYWNoKGtleSA9PlxyXG4gICAgICBtYXBba2V5XSA9IHRoaXMuRFMuYWxsQ29sdW1ucy5maWx0ZXIocmVjb3JkID0+XHJcbiAgICAgICAgcmVjb3JkLmtleSA9PT0gY29uZmlnW2tleV1cclxuICAgICAgKVswXS5sYWJlbFxyXG4gICAgKVxyXG4gICAgcmV0dXJuIG1hcDtcclxuICB9IFxyXG5cclxuICBnZXRMYWJlbHNGb3JJbmRpdmlkdWFsUmVjb3Jkcygpe1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBjb25zdCBpcklkcyA9IHRoaXMuaW5kaXZpZHVhbFJlY29yZHNRdWVzdGlvbklkcztcclxuICAgIHRoaXMuRFMuYWxsQ29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XHJcbiAgICAgIGlmIChpcklkcy5pbmRleE9mKGNvbHVtbi5rZXkpID4gLTEpIHtcclxuICAgICAgICBtYXBbY29sdW1uLmtleV0gPSBjb2x1bW4ubGFiZWxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBtYXA7XHJcbiAgfSBcclxuXHJcblxyXG5cclxuICBkYXRhTG9hZGluZ01lc3NhZ2UoKSB7XHJcbiAgICBsZXQgbWVzc2FnZTtcclxuICAgIGNvbnN0IHsgaXRlbXMsIGVycm9yIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIG1lc3NhZ2UgPSAnZXJyb3JMb2FkaW5nJ1xyXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgbWVzc2FnZSA9ICdSRVBPUlRfU0lOR0xFVklFV19OT1RISU5HRk9VTkQnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtZXNzYWdlID0gJ2xvYWRpbmdEYXRhJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuRFMuaTE4bihtZXNzYWdlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuVG9HcmlkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgc2luZ2xlVmlldzoge1xyXG4gICAgICAgIGxpbms6ICcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGxvYWRQcmV2aW91c0l0ZW0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZUl0ZW1zKCdiYWNrJylcclxuICB9XHJcblxyXG4gIGxvYWROZXh0SXRlbSA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlSXRlbXMoJ2ZvcndhcmQnKVxyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVJdGVtcyhkaXJlY3Rpb246ICdmb3J3YXJkJyB8ICdiYWNrd2FyZCcpOiB2b2lkIHtcclxuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uVHlwZSA9IHRoaXMuc3RhdGUuY29uZmlnLnBhZ2luYXRpb247XHJcbiAgICBsZXQgaXRlbXNMZW5ndGggPSBpdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgY29uc3QgY3VycmVudFNpbmdsZVZpZXdJdGVtSW5kZXggPSBpdGVtcy5pbmRleE9mKHRoaXMuc3RhdGUuc2luZ2xlVmlldyk7XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSBkaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4ICsgMSA6IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4IC0gMTtcclxuXHJcbiAgICBjb25zdCBsb2FkSXRlbUZyb21QcmV2aW91c1BhZ2UgPSBuZXh0SW5kZXggPCAwICYmICF0aGlzLkRTLmRpc2FibGVQcmV2QnV0dG9uO1xyXG4gICAgY29uc3QgbG9hZEl0ZW1Gcm9tTmV4dFBhZ2UgPSBuZXh0SW5kZXggPiBpdGVtc0xlbmd0aCAmJiAhdGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbjtcclxuXHJcbiAgICBsZXQgcHJvbWlzZWRJdGVtcyA9IFByb21pc2UucmVzb2x2ZShpdGVtcyk7XHJcbiAgICAvLyBhc3NpZ24gaXRlbXMgdG8gdGhlbmFibGUgcHJvbWlzZXMgaWYgcmVxdWVzdGVkIGl0ZW0gaXMgb3V0c2lkZSBvZiBkYXRhIGJvdW5kYXJpZXNcclxuICAgIGlmIChsb2FkSXRlbUZyb21QcmV2aW91c1BhZ2UpIHtcclxuICAgICAgcHJvbWlzZWRJdGVtcyA9IHRoaXMuRFMubG9hZFByZXZpb3VzUGFnZSgpO1xyXG4gICAgfSBlbHNlIGlmIChsb2FkSXRlbUZyb21OZXh0UGFnZSkge1xyXG4gICAgICBwcm9taXNlZEl0ZW1zID0gcGFnaW5hdGlvblR5cGUgIT09ICdjb250aW51b3VzJyA/IHRoaXMuRFMubG9hZE5leHRQYWdlKCkgOiB0aGlzLkRTLmxvYWRNb3JlKCk7XHJcbiAgICB9XHJcbiAgICAvKiAgICAgY29uc3QgaXRlbXNBcmVQcm9taXNlZCA9ICFBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5oYXNPd25Qcm9wZXJ0eSgndGhlbicpO1xyXG4gICAgICAgIGlmICghaXRlbXNBcmVQcm9taXNlZCkge1xyXG4gICAgICAgICAgcHJvbWlzZWRJdGVtcyA9IFByb21pc2UucmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICovXHJcbiAgICBwcm9taXNlZEl0ZW1zLnRoZW4oKCkgPT4ge1xyXG4gICAgICBsZXQgc2luZ2xlVmlld0RhdGE7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgICBjb25zdCBuZXdJdGVtcyA9IHByZXZTdGF0ZS5pdGVtcztcclxuICAgICAgICBjb25zdCBhdERhdGFMZWZ0Qm91bmRhcnlDYW5Mb2FkID0gbmV4dEluZGV4IDwgMCAmJiAhc2luZ2xlVmlld0Rpc2FibGVQcmV2O1xyXG4gICAgICAgIGNvbnN0IGF0RGF0YVJpZ2h0Qm91bmRhcnlDYW5Mb2FkID0gbmV4dEluZGV4ID4gaXRlbXNMZW5ndGggJiYgIXNpbmdsZVZpZXdEaXNhYmxlTmV4dCAmJiBwYWdpbmF0aW9uVHlwZSAhPT0gJ2NvbnRpbnVvdXMnO1xyXG4gICAgICAgIGlmIChhdERhdGFMZWZ0Qm91bmRhcnlDYW5Mb2FkKSB7XHJcbiAgICAgICAgICBzaW5nbGVWaWV3RGF0YSA9IG5ld0l0ZW1zW25ld0l0ZW1zLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgfSBlbHNlIGlmIChhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCkge1xyXG4gICAgICAgICAgc2luZ2xlVmlld0RhdGEgPSBuZXdJdGVtc1swXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaW5nbGVWaWV3RGF0YSA9IG5ld0l0ZW1zW25leHRJbmRleF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi50aGlzLmdldFNpbmdsZVZpZXdOYXZTdGF0ZShuZXh0SW5kZXgpLFxyXG4gICAgICAgICAgc2luZ2xlVmlldzogc2luZ2xlVmlld0RhdGEsXHJcbiAgICAgICAgICBzaW5nbGVWaWV3VmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVNpbmdsZVZpZXdOYXZTdGF0ZShpdGVtKSB7IH1cclxuXHJcbiAgb25TZWxlY3QgPSAoaXRlbSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnRoaXMuZ2V0U2luZ2xlVmlld05hdlN0YXRlKHRoaXMuc3RhdGUuaXRlbXMuaW5kZXhPZihpdGVtKSksXHJcbiAgICAgIHNpbmdsZVZpZXc6IGl0ZW0sXHJcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiB0cnVlLFxyXG4gICAgICBzaW5nbGVWaWV3TW9kZTogJ3ZpZXcnXHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGdldFNpbmdsZVZpZXdOYXZTdGF0ZShjdXJyZW50SXRlbUluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcztcclxuICAgIGxldCBzaW5nbGVWaWV3RGlzYWJsZU5leHQgPSBmYWxzZSxcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2ID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRJdGVtSW5kZXggPD0gMCAmJiB0aGlzLkRTLmRpc2FibGVQcmV2QnV0dG9uKSB7XHJcbiAgICAgIHNpbmdsZVZpZXdEaXNhYmxlUHJldiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEl0ZW1JbmRleCA+PSBpdGVtcy5sZW5ndGggLSAxICYmIHRoaXMuRFMuZGlzYWJsZU5leHRCdXR0b24pIHtcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVOZXh0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNpbmdsZVZpZXdEaXNhYmxlUHJldixcclxuICAgICAgc2luZ2xlVmlld0Rpc2FibGVOZXh0XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3Rpb25JY29uQ2xpY2sgPSAoaXRlbSkgPT4gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAuLi50aGlzLmdldFNpbmdsZVZpZXdOYXZTdGF0ZSh0aGlzLnN0YXRlLml0ZW1zLmluZGV4T2YoaXRlbSkpLFxyXG4gICAgc2luZ2xlVmlldzogaXRlbSxcclxuICAgIHNpbmdsZVZpZXdWaXNpYmxlOiB0cnVlLFxyXG4gICAgc2luZ2xlVmlld01vZGU6ICdlZGl0J1xyXG4gIH0pXHJcbiAgYWN0aW9uSWNvbiA9IChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3ZnIGNsYXNzTmFtZT1cImljb25cIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIG9uQ2xpY2s9e3RoaXMuYWN0aW9uSWNvbkNsaWNrKGl0ZW0pfT5cclxuICAgICAgICA8cGF0aCBkPVwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3pcIiAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWFjdFZpZGVvL2luZGV4LmpzIiwiLy9AZmxvd1xyXG5pbXBvcnQgdHlwZSB7TmF2QnV0dG9uUHJvcHN9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTURJY29uIGZyb20gJ01ESWNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZCdXR0b24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PE5hdkJ1dHRvblByb3BzLCBhbnk+IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGljb24sIC4uLndyYXBwZXIgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3LS1uYXYtYnV0dG9uIHJpcHBsZVwiIHsuLi53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxNREljb24gaWNvbj17aWNvbn0gLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaW5nbGVWaWV3L05hdkJ1dHRvbi5qcyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zZXMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGNvbHVtbnMsIGNvbHVtbnNNYXAgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCBtZWRpYSA9IFsnaW1hZ2UnLCAndmlkZW8nLCAnYXVkaW8nXTtcclxuICAgICAgICBjb25zdCBkYXRlID0gZGF0YS5pbnRlcnZpZXdfc3RhcnQgfHwgZGF0YS5pbnRlcnZpZXdfZW5kO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVuZGVyQXJlYSBSZXNwb25zZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEudGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLXBhZ2VUaXRsZVwiPiB7ZGF0YS50aXRsZX0gPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHshIWRhdGUgJiYgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLWxhYmVsXCI+IHtkYXRlfSA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLXZhbHVlXCI+IHtkYXRhLmRlc2NyaXB0aW9ufSA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge21lZGlhLm1hcChtZWRpYUl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVttZWRpYUl0ZW1dID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tbGFiZWxcIj57Y29sdW1uc01hcFttZWRpYUl0ZW1dfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS12YWx1ZVwiPnt0aGlzW2BfJHttZWRpYUl0ZW19UmVuZGVyZXJgXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zICE9IG51bGwgJiYgY29sdW1ucy5tYXAocUlEID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbcUlEXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLWxhYmVsXCI+e2NvbHVtbnNNYXBbcUlEXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tdmFsdWVcIj57ZGF0YVtxSURdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBfaW1hZ2VSZW5kZXJlcigpIHtcclxuICAgICAgICByZXR1cm4gPGltZyBjbGFzc05hbWU9XCJSZXNwb25zZXMtLW1lZGlhXCIgc3JjPXt0aGlzLnByb3BzLmRhdGEuaW1hZ2V9IC8+XHJcbiAgICB9XHJcbiAgICBnZXQgX3ZpZGVvUmVuZGVyZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMucHJvcHMuZGF0YS52aWRlb1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx2aWRlbyBrZXk9e2RhdGF9IGNvbnRyb2xzIGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtkYXRhfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuXHJcbiAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGdldCBfYXVkaW9SZW5kZXJlcigpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhLnZpZGVvXHJcbiAgICAgICAgcmV0dXJuIDxhdWRpbyBrZXk9e2RhdGF9IHNyYz17ZGF0YX0gdHlwZT1cImF1ZGlvL21wNFwiIGNvbnRyb2xzIGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tbWVkaWFcIiAvPlxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvUmVzcG9uc2VzLmpzIiwiLy9AZmxvd1xyXG5pbXBvcnQgdHlwZSB7UHJvcHMsIE5hdkJhclByb3BzIH0gZnJvbSAnLi90eXBlcydcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZCdXR0b24gZnJvbSAnLi9OYXZCdXR0b24nXHJcbmltcG9ydCB7IGljX2Fycm93X2JhY2ssIGljX2Fycm93X2ZvcndhcmQsIGljX3ZpZXdfbW9kdWxlIH0gZnJvbSAnLi4vaWNvbnMnO1xyXG5cclxuY29uc3QgTmF2QmFyID0gZnVuY3Rpb24gKHByb3BzOk5hdkJhclByb3BzKSB7XHJcbiAgY29uc3QgeyBsb2FkUHJldmlvdXNJdGVtLCByZXR1cm5Ub0dyaWRBY3Rpb24sIGxvYWROZXh0SXRlbSwgc2luZ2xlVmlld0Rpc2FibGVQcmV2LCBzaW5nbGVWaWV3RGlzYWJsZU5leHQgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbmdsZVZpZXctLWhlYWRlclwiPlxyXG4gICAgICA8TmF2QnV0dG9uIGRpc2FibGVkPXtzaW5nbGVWaWV3RGlzYWJsZVByZXZ9IHRpdGxlPVwiUHJldmlvdXMgaXRlbVwiIG9uQ2xpY2s9e2xvYWRQcmV2aW91c0l0ZW19IGljb249e2ljX2Fycm93X2JhY2t9IC8+XHJcbiAgICAgIDxOYXZCdXR0b24gdGl0bGU9XCJSZXR1cm4gdG8gdGhlIGxpc3RcIiBvbkNsaWNrPXtyZXR1cm5Ub0dyaWRBY3Rpb259IGljb249e2ljX3ZpZXdfbW9kdWxlfSAvPlxyXG4gICAgICA8TmF2QnV0dG9uIGRpc2FibGVkPXtzaW5nbGVWaWV3RGlzYWJsZU5leHR9IHRpdGxlPVwiTmV4dCBJdGVtXCIgb25DbGljaz17bG9hZE5leHRJdGVtfSBpY29uPXtpY19hcnJvd19mb3J3YXJkfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGVWaWV3IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgdm9pZD4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtjaGlsZHJlbiwgLi4ubmF2QmFyUHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlVmlld1wiPlxyXG4gICAgICAgIDxOYXZCYXIgey4uLm5hdkJhclByb3BzfS8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBpY19zdGFyID0gPHBhdGggZD1cIk0xMiAxNy4yN0wxOC4xOCAyMWwtMS42NC03LjAzTDIyIDkuMjRsLTcuMTktLjYxTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMXpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX3N0YXJfYm9yZGVyID0gPHBhdGggZD1cIk0yMiA5LjI0bC03LjE5LS42MkwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjEgMTIgMTcuMjcgMTguMTggMjFsLTEuNjMtNy4wM0wyMiA5LjI0ek0xMiAxNS40bC0zLjc2IDIuMjcgMS00LjI4LTMuMzItMi44OCA0LjM4LS4zOEwxMiA2LjFsMS43MSA0LjA0IDQuMzguMzgtMy4zMiAyLjg4IDEgNC4yOEwxMiAxNS40elwiLz47XG5leHBvcnQgY29uc3QgaWNfYXJyb3dfYmFjayA9IDxwYXRoIGQ9XCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHYtMnpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX2Fycm93X2ZvcndhcmQgPSA8cGF0aCBkPVwiTTEyIDRsLTEuNDEgMS40MUwxNi4xNyAxMUg0djJoMTIuMTdsLTUuNTggNS41OUwxMiAyMGw4LTh6XCIvPjtcbmV4cG9ydCBjb25zdCBpY192aWV3X21vZHVsZSA9IDxwYXRoIGQ9XCJNNCAxMWg1VjVINHY2em0wIDdoNXYtNkg0djZ6bTYgMGg1di02aC01djZ6bTYgMGg1di02aC01djZ6bS02LTdoNVY1aC01djZ6bTYtNnY2aDVWNWgtNXpcIi8+O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ljb25zLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMjIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJSZWFjdERPTVwiXG4vLyBtb2R1bGUgaWQgPSAyMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==