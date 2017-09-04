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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzg3NGEzMDRlZGI5N2EyNmFiYTciLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwid2VicGFjazovLy8uL34vci1yZXBvcnRhbC1iYXNlL3NyYy9yZXBvcnRhbC1iYXNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9NREljb24vZGlzdC9NREljb24uYnVuZGxlLmpzIiwid2VicGFjazovLy8uL34vUHJvcG9ydGlvbmFsSW1hZ2UvZGlzdC9Qcm9wb3J0aW9uYWxJbWFnZS5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZXM2L3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FwcGx5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlJbmNsdWRlc1dpdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VGbGF0dGVuLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUhhc0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc01hdGNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5RGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NyZWF0ZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWF0Y2hEYXRhLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNGbGF0dGVuYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJSZXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zaG9ydE91dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9nZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaGFzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9tZW1vaXplLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC90b1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC91bmlvbkJ5LmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3QtZGF0YXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LXNldHVwLmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RTQWJzdHJhY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlR3JpZFRpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlR3JpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVhY3RWaWRlby9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWFjdFZpZGVvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TaW5nbGVWaWV3L05hdkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2luZ2xlVmlldy9SZXNwb25zZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmdsZVZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ljb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJSZWFjdERPTVwiIl0sIm5hbWVzIjpbImxhdW5jaFZpZGVvSGl0bGlzdCIsImNvbmZpZ05hbWUiLCJ0aHVtYnNQbGFjZWhvbGRlciIsIkVycm9yIiwiVHlwZUVycm9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZXBvcnRhbCIsIm1peGluIiwic3RvcmUiLCJyZXF1aXJlIiwidWlkIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm5hbWUiLCJnbG9iYWwiLCJNYXRoIiwic2VsZiIsIkZ1bmN0aW9uIiwiX19nIiwiZnJlZUdsb2JhbCIsImZyZWVTZWxmIiwiT2JqZWN0Iiwicm9vdCIsImlzQXJyYXkiLCJBcnJheSIsImJhc2VJc05hdGl2ZSIsImdldFZhbHVlIiwiZ2V0TmF0aXZlIiwib2JqZWN0Iiwia2V5IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJpc09iamVjdCIsIml0IiwiZFAiLCJjcmVhdGVEZXNjIiwiZiIsImlzT2JqZWN0TGlrZSIsImNvcmUiLCJ2ZXJzaW9uIiwiX19lIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJhIiwiZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImJhc2VHZXRUYWciLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsImFGdW5jdGlvbiIsImZuIiwidGhhdCIsImxlbmd0aCIsImIiLCJjIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYXNPd25Qcm9wZXJ0eSIsImFuT2JqZWN0IiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIk8iLCJQIiwiQXR0cmlidXRlcyIsImUiLCJsaXN0Q2FjaGVDbGVhciIsImxpc3RDYWNoZURlbGV0ZSIsImxpc3RDYWNoZUdldCIsImxpc3RDYWNoZUhhcyIsImxpc3RDYWNoZVNldCIsIkxpc3RDYWNoZSIsImVudHJpZXMiLCJpbmRleCIsImNsZWFyIiwiZW50cnkiLCJzZXQiLCJwcm90b3R5cGUiLCJoYXMiLCJlcSIsImFzc29jSW5kZXhPZiIsImFycmF5IiwiaXNLZXlhYmxlIiwiZ2V0TWFwRGF0YSIsIm1hcCIsImRhdGEiLCJfX2RhdGFfXyIsIm5hdGl2ZUNyZWF0ZSIsImlzU3ltYm9sIiwiSU5GSU5JVFkiLCJ0b0tleSIsInJlc3VsdCIsIlJlcG9ydGFsQmFzZSIsInRhcmdldCIsInNvdXJjZSIsImkiLCJsZXZlbCIsImFyZ3MiLCJjb25zb2xlIiwiX2xvZ2dlciIsImV2ZW50IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJzdHIiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJyZXBsYWNlIiwiVVJMIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ubG9hZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2VuZCIsInZhcmlhYmxlIiwicXVlcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsInZhcnMiLCJzcGxpdCIsInBhaXIiLCJ0b0xvd2VyQ2FzZSIsIm8iLCJwYXRoIiwib3JpZ2luIiwicGF0aG5hbWUiLCJmb3JFYWNoIiwiYVBhaXIiLCJwdXNoIiwiam9pbiIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJpcyIsImNyZWF0ZUVsZW1lbnQiLCJkZWYiLCJUQUciLCJ0YWciLCJzdGF0IiwiY29uZmlndXJhYmxlIiwic2hhcmVkIiwiY2VpbCIsImZsb29yIiwiSU9iamVjdCIsImRlZmluZWQiLCJNYXAiLCJtYXBDYWNoZUNsZWFyIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsInJlSXNEZWVwUHJvcCIsInJlSXNQbGFpblByb3AiLCJpc0tleSIsInR5cGUiLCJ0ZXN0Iiwic2V0VG9BcnJheSIsInNpemUiLCJpZGVudGl0eSIsImJhc2VJc0FyZ3VtZW50cyIsIm9iamVjdFByb3RvIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJpc0FyZ3VtZW50cyIsIk1BWF9TQUZFX0lOVEVHRVIiLCJpc0xlbmd0aCIsInN5bWJvbFRhZyIsImNvZiIsIkFSRyIsInRyeUdldCIsIlQiLCJCIiwiY2FsbGVlIiwiY3R4IiwiaGlkZSIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJJU19GT1JDRUQiLCJGIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIlMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJJU19XUkFQIiwiVyIsImV4cFByb3RvIiwib3duIiwib3V0IiwiQyIsInZpcnR1YWwiLCJSIiwiVSIsImV4ZWMiLCJkb2N1bWVudEVsZW1lbnQiLCJMSUJSQVJZIiwicmVkZWZpbmUiLCJJdGVyYXRvcnMiLCIkaXRlckNyZWF0ZSIsInNldFRvU3RyaW5nVGFnIiwiZ2V0UHJvdG90eXBlT2YiLCJJVEVSQVRPUiIsIkJVR0dZIiwia2V5cyIsIkZGX0lURVJBVE9SIiwiS0VZUyIsIlZBTFVFUyIsInJldHVyblRoaXMiLCJCYXNlIiwiTkFNRSIsIkNvbnN0cnVjdG9yIiwibmV4dCIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJraW5kIiwicHJvdG8iLCJ2YWx1ZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIm1ldGhvZHMiLCJJdGVyYXRvclByb3RvdHlwZSIsIlByb21pc2VDYXBhYmlsaXR5IiwicHJvbWlzZSIsIiQkcmVzb2x2ZSIsIiQkcmVqZWN0IiwiYml0bWFwIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiU0hBUkVEIiwiaW52b2tlIiwiaHRtbCIsImNlbCIsInByb2Nlc3MiLCJzZXRUYXNrIiwic2V0SW1tZWRpYXRlIiwiY2xlYXJUYXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJNZXNzYWdlQ2hhbm5lbCIsIkRpc3BhdGNoIiwiY291bnRlciIsInF1ZXVlIiwiT05SRUFEWVNUQVRFQ0hBTkdFIiwiZGVmZXIiLCJjaGFubmVsIiwicG9ydCIsInJ1biIsImlkIiwibGlzdGVuZXIiLCJuZXh0VGljayIsIm5vdyIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwic2V0VGltZW91dCIsInRvSW50ZWdlciIsIm1pbiIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwiU2V0Iiwic2V0Q2FjaGVBZGQiLCJzZXRDYWNoZUhhcyIsIlNldENhY2hlIiwiYWRkIiwic3RhY2tDbGVhciIsInN0YWNrRGVsZXRlIiwic3RhY2tHZXQiLCJzdGFja0hhcyIsInN0YWNrU2V0IiwiU3RhY2siLCJhcnJheVB1c2giLCJvZmZzZXQiLCJjYXN0UGF0aCIsImJhc2VHZXQiLCJiYXNlSXNFcXVhbERlZXAiLCJiYXNlSXNFcXVhbCIsIm90aGVyIiwiYml0bWFzayIsImN1c3RvbWl6ZXIiLCJzdGFjayIsImNhY2hlSGFzIiwiY2FjaGUiLCJzdHJpbmdUb1BhdGgiLCJhcnJheVNvbWUiLCJDT01QQVJFX1BBUlRJQUxfRkxBRyIsIkNPTVBBUkVfVU5PUkRFUkVEX0ZMQUciLCJlcXVhbEFycmF5cyIsImVxdWFsRnVuYyIsImlzUGFydGlhbCIsImFyckxlbmd0aCIsIm90aExlbmd0aCIsInN0YWNrZWQiLCJzZWVuIiwiYXJyVmFsdWUiLCJvdGhWYWx1ZSIsImNvbXBhcmVkIiwib3RoSW5kZXgiLCJyZUlzVWludCIsImlzSW5kZXgiLCJpc1N0cmljdENvbXBhcmFibGUiLCJtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSIsInNyY1ZhbHVlIiwiZnVuY1Byb3RvIiwiZnVuY1RvU3RyaW5nIiwidG9Tb3VyY2UiLCJmdW5jIiwiaXNGdW5jdGlvbiIsImlzQXJyYXlMaWtlIiwic3R1YkZhbHNlIiwiZnJlZUV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwibmF0aXZlSXNCdWZmZXIiLCJpc0J1ZmZlciIsImFzeW5jVGFnIiwiZnVuY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwiYmFzZUlzVHlwZWRBcnJheSIsImJhc2VVbmFyeSIsIm5vZGVVdGlsIiwibm9kZUlzVHlwZWRBcnJheSIsImlzVHlwZWRBcnJheSIsImFycmF5TGlrZUtleXMiLCJiYXNlS2V5cyIsInQiLCJyIiwicmVhY3QiLCJuIiwibG9hZGVkIiwibSIsInAiLCJkZWZhdWx0IiwiTURJY29uIiwiX19lc01vZHVsZSIsIlJlZmVyZW5jZUVycm9yIiwidSIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJsIiwicHJvcHMiLCJmaWxsIiwiaWNvbiIsImxvZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInMiLCJhc3NpZ24iLCJfaW1hZ2VPbmxvYWQiLCJiaW5kIiwiX2ltYWdlT25lcnJvciIsInN0YXRlIiwic3JjIiwicGxhY2Vob2xkZXJIaWRkZW4iLCJwbGFjZWhvbGRlciIsInNpemluZyIsInBvc2l0aW9uIiwicHJvcG9ydGlvbiIsImxvYWRpbmciLCJlcnJvciIsIl9sb2FkIiwiX2NvbXB1dGVEaW1lbnNpb25zIiwiX2NvbXB1dGVQcm9wb3J0aW9uIiwiYXNwZWN0Iiwic2V0U3RhdGUiLCJpbmRleE9mIiwiZCIsInByZWxvYWQiLCJmYWRlIiwiaCIsInBsYWNlaG9sZGVyU2l6aW5nIiwiZyIsImFsdCIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZ1RvcCIsInJvbGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJkaXNwbGF5Iiwib25Mb2FkIiwib25FcnJvciIsIl9yZXNldCIsInByZXZlbnRMb2FkIiwiQ29tcG9uZW50IiwiUHJvbWlzZSIsImZvcmJpZGRlbkZpZWxkIiwidG9JT2JqZWN0IiwidG9MZW5ndGgiLCJ0b0Fic29sdXRlSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiaXRlcmFibGUiLCJpdGVyRm4iLCJzdGVwIiwiaXRlcmF0b3IiLCJkb25lIiwidW4iLCJBcnJheVByb3RvIiwicmV0IiwiZGVzY3JpcHRvciIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIml0ZXIiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwidGhlbiIsInRhc2siLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwiaWZyYW1lIiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50IiwiY29udGVudFdpbmRvdyIsIndyaXRlIiwiY2xvc2UiLCJQcm9wZXJ0aWVzIiwiZ2V0S2V5cyIsImRlZmluZVByb3BlcnRpZXMiLCJ0b09iamVjdCIsIk9iamVjdFByb3RvIiwiYXJyYXlJbmRleE9mIiwibmFtZXMiLCIka2V5cyIsInYiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIngiLCJwcm9taXNlQ2FwYWJpbGl0eSIsIkRFU0NSSVBUT1JTIiwiU1BFQ0lFUyIsIktFWSIsIkQiLCJUT19TVFJJTkciLCJwb3MiLCJTdHJpbmciLCJjaGFyQ29kZUF0IiwiY2hhckF0IiwibWF4IiwidmFsIiwidmFsdWVPZiIsImNsYXNzb2YiLCJnZXRJdGVyYXRvck1ldGhvZCIsImFkZFRvVW5zY29wYWJsZXMiLCJpdGVyYXRlZCIsIl90IiwiX2kiLCJfayIsIkFyZ3VtZW50cyIsImFuSW5zdGFuY2UiLCJmb3JPZiIsInNwZWNpZXNDb25zdHJ1Y3RvciIsIm1pY3JvdGFzayIsIm5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlIiwicGVyZm9ybSIsInByb21pc2VSZXNvbHZlIiwiUFJPTUlTRSIsIiRQcm9taXNlIiwiZW1wdHkiLCJJbnRlcm5hbCIsIm5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSIsIk93blByb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJGYWtlUHJvbWlzZSIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsInNhbWVDb25zdHJ1Y3RvciIsImlzVGhlbmFibGUiLCJpc1JlamVjdCIsIl9uIiwiY2hhaW4iLCJfYyIsIl92Iiwib2siLCJfcyIsInJlYWN0aW9uIiwiaGFuZGxlciIsImZhaWwiLCJfaCIsIm9uSGFuZGxlVW5oYW5kbGVkIiwib25VbmhhbmRsZWQiLCJ1bmhhbmRsZWQiLCJpc1VuaGFuZGxlZCIsImVtaXQiLCJvbnVuaGFuZGxlZHJlamVjdGlvbiIsInJlYXNvbiIsIl9hIiwib25yZWplY3Rpb25oYW5kbGVkIiwiJHJlamVjdCIsIl9kIiwiX3ciLCIkcmVzb2x2ZSIsIndyYXBwZXIiLCJleGVjdXRvciIsImVyciIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsImNhcGFiaWxpdHkiLCJhbGwiLCJyZW1haW5pbmciLCIkaW5kZXgiLCJhbHJlYWR5Q2FsbGVkIiwicmFjZSIsIiRhdCIsInBvaW50IiwiVE9fU1RSSU5HX1RBRyIsIkRPTUl0ZXJhYmxlcyIsIkNvbGxlY3Rpb24iLCJEYXRhVmlldyIsImhhc2hDbGVhciIsImhhc2hEZWxldGUiLCJoYXNoR2V0IiwiaGFzaEhhcyIsImhhc2hTZXQiLCJIYXNoIiwiVWludDhBcnJheSIsIldlYWtNYXAiLCJ0aGlzQXJnIiwiYXJyYXlGaWx0ZXIiLCJwcmVkaWNhdGUiLCJyZXNJbmRleCIsImJhc2VJbmRleE9mIiwiYXJyYXlJbmNsdWRlcyIsImFycmF5SW5jbHVkZXNXaXRoIiwiY29tcGFyYXRvciIsImJhc2VUaW1lcyIsImluaGVyaXRlZCIsImlzQXJyIiwiaXNBcmciLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsImFycmF5TWFwIiwiaXRlcmF0ZWUiLCJiYXNlRmluZEluZGV4IiwiZnJvbVJpZ2h0IiwiaXNGbGF0dGVuYWJsZSIsImJhc2VGbGF0dGVuIiwiZGVwdGgiLCJpc1N0cmljdCIsImJhc2VHZXRBbGxLZXlzIiwia2V5c0Z1bmMiLCJzeW1ib2xzRnVuYyIsImJhc2VIYXNJbiIsImJhc2VJc05hTiIsInN0cmljdEluZGV4T2YiLCJhcmdzVGFnIiwiZXF1YWxCeVRhZyIsImVxdWFsT2JqZWN0cyIsImdldFRhZyIsImFycmF5VGFnIiwib2JqZWN0VGFnIiwib2JqSXNBcnIiLCJvdGhJc0FyciIsIm9ialRhZyIsIm90aFRhZyIsIm9iaklzT2JqIiwib3RoSXNPYmoiLCJpc1NhbWVUYWciLCJvYmpJc1dyYXBwZWQiLCJvdGhJc1dyYXBwZWQiLCJvYmpVbndyYXBwZWQiLCJvdGhVbndyYXBwZWQiLCJiYXNlSXNNYXRjaCIsIm1hdGNoRGF0YSIsIm5vQ3VzdG9taXplciIsIm9ialZhbHVlIiwiaXNNYXNrZWQiLCJyZVJlZ0V4cENoYXIiLCJyZUlzSG9zdEN0b3IiLCJyZUlzTmF0aXZlIiwiUmVnRXhwIiwicGF0dGVybiIsImJvb2xUYWciLCJkYXRlVGFnIiwiZXJyb3JUYWciLCJtYXBUYWciLCJudW1iZXJUYWciLCJyZWdleHBUYWciLCJzZXRUYWciLCJzdHJpbmdUYWciLCJ3ZWFrTWFwVGFnIiwiYXJyYXlCdWZmZXJUYWciLCJkYXRhVmlld1RhZyIsImZsb2F0MzJUYWciLCJmbG9hdDY0VGFnIiwiaW50OFRhZyIsImludDE2VGFnIiwiaW50MzJUYWciLCJ1aW50OFRhZyIsInVpbnQ4Q2xhbXBlZFRhZyIsInVpbnQxNlRhZyIsInVpbnQzMlRhZyIsInR5cGVkQXJyYXlUYWdzIiwiYmFzZU1hdGNoZXMiLCJiYXNlTWF0Y2hlc1Byb3BlcnR5IiwicHJvcGVydHkiLCJiYXNlSXRlcmF0ZWUiLCJpc1Byb3RvdHlwZSIsIm5hdGl2ZUtleXMiLCJnZXRNYXRjaERhdGEiLCJoYXNJbiIsImJhc2VQcm9wZXJ0eSIsImJhc2VQcm9wZXJ0eURlZXAiLCJvdmVyUmVzdCIsInNldFRvU3RyaW5nIiwiYmFzZVJlc3QiLCJzdGFydCIsImNvbnN0YW50IiwiYmFzZVNldFRvU3RyaW5nIiwic3RyaW5nIiwic3ltYm9sUHJvdG8iLCJzeW1ib2xUb1N0cmluZyIsImJhc2VUb1N0cmluZyIsImNyZWF0ZVNldCIsIkxBUkdFX0FSUkFZX1NJWkUiLCJiYXNlVW5pcSIsImluY2x1ZGVzIiwiaXNDb21tb24iLCJvdXRlciIsImNvbXB1dGVkIiwic2VlbkluZGV4IiwiY29yZUpzRGF0YSIsIm5vb3AiLCJtYXBUb0FycmF5Iiwic3ltYm9sVmFsdWVPZiIsImJ5dGVMZW5ndGgiLCJieXRlT2Zmc2V0IiwiYnVmZmVyIiwibWVzc2FnZSIsImNvbnZlcnQiLCJnZXRBbGxLZXlzIiwib2JqUHJvcHMiLCJvYmpMZW5ndGgiLCJvdGhQcm9wcyIsInNraXBDdG9yIiwib2JqQ3RvciIsIm90aEN0b3IiLCJnZXRTeW1ib2xzIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJpc093biIsInVubWFza2VkIiwic3R1YkFycmF5IiwibmF0aXZlR2V0U3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbCIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJBcnJheUJ1ZmZlciIsIkN0b3IiLCJjdG9yU3RyaW5nIiwiaGFzUGF0aCIsImhhc0Z1bmMiLCJIQVNIX1VOREVGSU5FRCIsInNwcmVhZGFibGVTeW1ib2wiLCJpc0NvbmNhdFNwcmVhZGFibGUiLCJtYXNrU3JjS2V5IiwiYXJyYXlQcm90byIsInNwbGljZSIsImxhc3RJbmRleCIsInBvcCIsIm1lbW9pemUiLCJNQVhfTUVNT0laRV9TSVpFIiwibWVtb2l6ZUNhcHBlZCIsIm92ZXJBcmciLCJmcmVlUHJvY2VzcyIsImJpbmRpbmciLCJ0cmFuc2Zvcm0iLCJhcmciLCJuYXRpdmVNYXgiLCJvdGhlckFyZ3MiLCJzaG9ydE91dCIsIkhPVF9DT1VOVCIsIkhPVF9TUEFOIiwibmF0aXZlTm93IiwiRGF0ZSIsImNvdW50IiwibGFzdENhbGxlZCIsInN0YW1wIiwicGFpcnMiLCJyZUxlYWRpbmdEb3QiLCJyZVByb3BOYW1lIiwicmVFc2NhcGVDaGFyIiwibWF0Y2giLCJudW1iZXIiLCJxdW90ZSIsImRlZmF1bHRWYWx1ZSIsImlzQXJyYXlMaWtlT2JqZWN0IiwiRlVOQ19FUlJPUl9URVhUIiwicmVzb2x2ZXIiLCJtZW1vaXplZCIsIkNhY2hlIiwidW5pb25CeSIsImFycmF5cyIsIkhpdGxpc3REYXRhc291cmNlIiwib3B0aW9ucyIsIl9zZWFyY2hWYWx1ZXMiLCJtb2RpZmllciIsInJlcXVlc3RSZXNwb25zZSIsImluaXRpYWxMb2FkIiwiX3NraXBQYWdlIiwiaXNQYWdpbmciLCJsb2NhdGlvbkRlc2VyaWFsaXplIiwicmVwb3J0aWQiLCJoaXRsaXN0SUQiLCJwYXJhbXMiLCJQYWdlSWQiLCJwYWdlSUQiLCJwYWdlU3RhdGVJZCIsInBhZ2VTdGF0ZUlEIiwiUHJldmlldyIsInByZXZpZXciLCJhdHRybmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzb3J0aW5nUGFnaW5nVmFsdWVzIiwicGFnaW5nVmFsdWVzIiwicGFnZU51bWJlciIsInBhZ2luZ0ZvcndhcmQiLCJwcm9taXNlUmVxdWVzdCIsInNlcnZpY2VVUkwiLCJzZXJpYWxpemVQYXJhbXMiLCJwYXJzZVJlc3BvbnNlIiwicmVzcG9uc2UiLCJwYXJzZSIsInBhZ2VJbmZvIiwiX3NwdiIsInB2Iiwic3RhcnRJZCIsImxhc3RTdGFydElkIiwiZmlyc3RTdGFydElkIiwic3RhcnRWYWx1ZSIsImxhc3RTdGFydFZhbHVlIiwiZmlyc3RTdGFydFZhbHVlIiwiSGl0bGlzdFNldHVwIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsIl9jb25maWciLCJnZXRPcmlnaW5hbENvbmZpZyIsIl9lbGVtZW50VHlwZSIsIkhpdExpc3RFbGVtZW50VHlwZSIsIl9vcCIsIlNlYXJjaGFibGVMaXN0T3BlcmF0b3IiLCJjYXB0aW9ucyIsInNpbmdsZVZpZXdUZXh0cyIsImhpdGxpc3REYXRhIiwiZGlzYWJsZU5leHRCdXR0b24iLCJkaXNhYmxlUHJldkJ1dHRvbiIsImNvbHVtbnMiLCJhbGxDb2x1bW5zIiwiY29tcG9uZW50SWQiLCJwYWdlSWQiLCJsYW5ndWFnZSIsInNlcnZpY2VVcmwiLCJxdWVyeVNlbGVjdG9yIiwianNvbkRhdGUiLCJZIiwiTGFuZyIsImNvbnN0ciIsImV2YWwiLCJzY3JpcHRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNmZyIsInNjcmlwdCIsInRleHQiLCJEU0Fic3RyYWN0aW9uIiwiRFMiLCJjb21wb25lbnQiLCJjb25maWciLCJzZXR1cERhdGFMaXN0ZW5lciIsIkdsb2JhbCIsIm9uIiwiaW5pdGlhbGlzZUNvbmZpZyIsImZpbHRlckluZm8iLCJpbml0aWFsRGF0YUxvYWQiLCJwcm9jZXNzRGF0YSIsImNhdGNoIiwiaGFuZGxlRGF0YUxvYWRpbmdFcnJvciIsImluZGl2aWR1YWxSZWNvcmRzIiwiaXRlbSIsInRyaW0iLCJtb2RlIiwibmV3RGF0YSIsImRhdGFSb3ciLCJyb3dJbmRleCIsInBhcnNlZFJvdyIsImlyIiwiZGF0YUZpZWxkcyIsImNvbHVtbklEIiwicHJlcGFyZURhdGEiLCJpbWFnZSIsIm1lZGlhdHlwZSIsInJlc3BvbnNlaWQiLCJzbGluayIsImxpbmsiLCJpdGVtcyIsInByZXZTdGF0ZSIsImdlbmVyYXRlTWVkaWFMaW5rIiwiZmlsZU5hbWUiLCJkc05hbWUiLCJzdXJ2ZXlJRCIsImxvYWROZXh0UGFnZSIsIm5leHRQYWdlIiwibG9hZFByZXZpb3VzUGFnZSIsInByZXZpb3VzUGFnZSIsImxvYWRNb3JlIiwiZ2V0UGFnZUluZm8iLCJoYXNQYWdlSW5mbyIsInRvdGFsSGl0cyIsIk1FRElBX1RZUEVTIiwiSW1hZ2VHcmlkVGlsZSIsImFjdGlvbkJ1dHRvbiIsImFjdGlvbkljb24iLCJvblNlbGVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfY29tcHV0ZVRpbGVUeXBlIiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJpY29uU2VydmVyIiwiZXNjYXBlIiwiaWNvbnMiLCJhdWRpbyIsInZpZGVvIiwidW5rbm93biIsInByb3BUeXBlcyIsIm9uZU9mIiwiSW1hZ2VHcmlkIiwiaXRlbUNsaWNrSGFuZGxlciIsImR1bW15SXRlbXMiLCJyZW5kZXJEdW1teUl0ZW1zIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJOYXZpZ2F0aW9uIiwicGFnaW5hdGlvbiIsImNvbnRpbnVvdXNOYXZpZ2F0aW9uIiwicGFnaW5nTmF2aWdhdGlvbiIsInRleHRBbGlnbiIsInRyYW5zbGF0ZSIsIlJlYWN0VmlkZW8iLCJzaW5nbGVWaWV3TW9kZSIsInNpbmdsZVZpZXciLCJzaW5nbGVWaWV3VmlzaWJsZSIsInNpbmdsZVZpZXdEaXNhYmxlUHJldiIsInNpbmdsZVZpZXdEaXNhYmxlTmV4dCIsImkxOG4iLCJyZXR1cm5Ub0dyaWQiLCJsb2FkUHJldmlvdXNJdGVtIiwibmF2aWdhdGVJdGVtcyIsImxvYWROZXh0SXRlbSIsImdldFNpbmdsZVZpZXdOYXZTdGF0ZSIsImFjdGlvbkljb25DbGljayIsInJlbmRlclNpbmdsZVZpZXciLCJjYW5FZGl0IiwicmVuZGVyTmF2aWdhdGlvbiIsImRhdGFMb2FkaW5nTWVzc2FnZSIsIm5hdmlnYXRpb25Qcm9wcyIsImluZGl2aWR1YWxSZWNvcmRzUXVlc3Rpb25JZHMiLCJpbmRpdmlkdWFsUmVjb3Jkc0tleUxhYmVscyIsInJldmVyc2UiLCJmaWx0ZXIiLCJyZWNvcmQiLCJsYWJlbCIsImlySWRzIiwiY29sdW1uIiwiZGlyZWN0aW9uIiwicGFnaW5hdGlvblR5cGUiLCJpdGVtc0xlbmd0aCIsImN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4IiwibmV4dEluZGV4IiwibG9hZEl0ZW1Gcm9tUHJldmlvdXNQYWdlIiwibG9hZEl0ZW1Gcm9tTmV4dFBhZ2UiLCJwcm9taXNlZEl0ZW1zIiwic2luZ2xlVmlld0RhdGEiLCJuZXdJdGVtcyIsImF0RGF0YUxlZnRCb3VuZGFyeUNhbkxvYWQiLCJhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCIsImN1cnJlbnRJdGVtSW5kZXgiLCJnZXRMYWJlbHNGb3JNYWluRmllbGRzIiwiZ2V0TGFiZWxzRm9ySW5kaXZpZHVhbFJlY29yZHMiLCJOYXZCdXR0b24iLCJSZXNwb25zZXMiLCJjb2x1bW5zTWFwIiwibWVkaWEiLCJkYXRlIiwiaW50ZXJ2aWV3X3N0YXJ0IiwiaW50ZXJ2aWV3X2VuZCIsIm1lZGlhSXRlbSIsInFJRCIsIk5hdkJhciIsInJldHVyblRvR3JpZEFjdGlvbiIsIlNpbmdsZVZpZXciLCJuYXZCYXJQcm9wcyIsImljX3N0YXIiLCJpY19zdGFyX2JvcmRlciIsImljX2Fycm93X2JhY2siLCJpY19hcnJvd19mb3J3YXJkIiwiaWNfdmlld19tb2R1bGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7K1FDdENBOzs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7OztBQUtBLEtBQU1BLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFVBQUQsRUFBdUM7QUFBQSxPQUEzQkMsaUJBQTJCLHVFQUFULElBQVM7O0FBQ2hFLE9BQUcsQ0FBQ0QsVUFBSixFQUFlO0FBQ2IsV0FBTSxJQUFJRSxLQUFKLENB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QUFtRSwyQkFBbkUsR0FGRjtBQUdFLDBEQUFXLFVBQVU5QyxxQkFBckIsRUFBNEMsT0FBTSxXQUFsRCxFQUE4RCxTQUFTSyxZQUF2RSxFQUFxRiw2QkFBckY7QUFIRixJQURGO0FBT0QsRUFURDs7S0FXcUIwQyxVOzs7Ozs7Ozs7Ozs4QkFDVjtBQUFBLG9CQUM0QixLQUFLOWtCLEtBRGpDO0FBQUEsV0FDQS9OLFFBREEsVUFDQUEsUUFEQTtBQUFBLFdBQ2E4eUIsV0FEYjs7QUFFUCxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUsWUFBZjtBQUNFLHVDQUFDLE1BQUQsRUFBWUEsV0FBWixDQURGO0FBRUc5eUI7QUFGSCxRQURGO0FBTUQ7Ozs7OzttQkFUa0I2eUIsVTs7Ozs7Ozs7Ozs7Ozs7QUNsQnJCOzs7Ozs7QUFFTyxLQUFNRSw0QkFBVSx3Q0FBTSxHQUFFLDBGQUFSLEdBQWhCO0FBQ0EsS0FBTUMsMENBQWlCLHdDQUFNLEdBQUUsa01BQVIsR0FBdkI7QUFDQSxLQUFNQyx3Q0FBZ0Isd0NBQU0sR0FBRSw4REFBUixHQUF0QjtBQUNBLEtBQU1DLDhDQUFtQix3Q0FBTSxHQUFFLDJEQUFSLEdBQXpCO0FBQ0EsS0FBTUMsMENBQWlCLHdDQUFNLEdBQUUseUZBQVIsR0FBdkIsQzs7Ozs7O0FDTlAsMEM7Ozs7OztBQ0FBLDJCIiwiZmlsZSI6InItcmVhY3QtdmlkZW8uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzg3NGEzMDRlZGI5N2EyNmFiYTciLCIvKipcclxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMS4wMS4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5pbXBvcnQgbWFpbkNTUyBmcm9tICcuL21haW4uY3NzJztcclxuaW1wb3J0IFJlYWN0VmlkZW8gZnJvbSAnLi9SZWFjdFZpZGVvJztcclxuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tICdyLXJlcG9ydGFsLWJhc2UnO1xyXG5cclxuLyoqXHJcbiAqIGluaXRpYWxpc2UgSGl0TGlzdCBvbiBET01Db250ZW50TG9hZGVkIGZvciBhIHF1aWNrZXIgY29sZC1zdGFydCwgbm8gbmVlZCB0byB3YWl0IGZvciB0aGUgb3JpZ2luYWwgSGl0TGlzdFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnTmFtZSAtIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHBhc3NlZCB0byBET00gYXMgYSBjb25maWdcclxuICogQHBhcmFtIHtCb29sZWFufSBbdGh1bWJzUGxhY2Vob2xkZXI9dHJ1ZV0gLSBkaXNwbGF5IHRodW1icyBhcyBpbWFnZSBwbGFjZWhvbGRlcnMgaW5zdGVhZCBvZiBtZWRpYSBpY29uc1xyXG4gKiAqL1xyXG5jb25zdCBsYXVuY2hWaWRlb0hpdGxpc3QgPSAoY29uZmlnTmFtZSx0aHVtYnNQbGFjZWhvbGRlcj10cnVlKSA9PiB7XHJcbiAgaWYoIWNvbmZpZ05hbWUpe1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25maWcgaXMgbm90IHNwZWNpZmllZCEnKVxyXG4gIH0gZWxzZSBpZihjb25maWdOYW1lICYmIHR5cGVvZiBjb25maWdOYW1lICE9ICdzdHJpbmcnKXtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGNvbmZpZyBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBhICR7dHlwZW9mIGNvbmZpZ05hbWV9YClcclxuICB9XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICA8UmVhY3RWaWRlb1xyXG4gICAgICBjb25maWc9e2NvbmZpZ05hbWV9XHJcbiAgICAgIHRodW1ic1BsYWNlaG9sZGVyPXt0aHVtYnNQbGFjZWhvbGRlcn1cclxuICAgICAgdmVyYm9zZVxyXG4gICAgICAvPixkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxyXG4gIH0pO1xyXG59O1xyXG5cclxud2luZG93LlJlcG9ydGFsID0gd2luZG93LlJlcG9ydGFsIHx8IHt9O1xyXG5SZXBvcnRhbEJhc2UubWl4aW4od2luZG93LlJlcG9ydGFsLHtcclxuICBsYXVuY2hWaWRlb0hpdGxpc3RcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3Jvb3QuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjAnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TeW1ib2wuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fdG9LZXkuanMiLCJpbXBvcnQgUHJvbWlzZSBmcm9tICdjb3JlLWpzL2xpYnJhcnkvZXM2L3Byb21pc2UnO1xuXG5jbGFzcyBSZXBvcnRhbEJhc2Uge1xuXG4gIC8qKlxuICAgKiBDb3BpZXMgcHJvcHMgZnJvbSBhIHNvdXJjZSBvYmplY3QgdG8gYSB0YXJnZXQgb2JqZWN0LlxuICAgKlxuICAgKiBOb3RlLCB0aGlzIG1ldGhvZCB1c2VzIGEgc2ltcGxlIGBmb3IuLi5pbmAgc3RyYXRlZ3kgZm9yIGVudW1lcmF0aW5nXG4gICAqIHByb3BlcnRpZXMuICBUbyBlbnN1cmUgb25seSBgb3duUHJvcGVydGllc2AgYXJlIGNvcGllZCBmcm9tIHNvdXJjZVxuICAgKiB0byB0YXJnZXQgYW5kIHRoYXQgYWNjZXNzb3IgaW1wbGVtZW50YXRpb25zIGFyZSBjb3BpZWQsIHVzZSBgZXh0ZW5kYC5cbiAgICpcbiAgICogQG1ldGhvZCBtaXhpblxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRhcmdldCBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFNvdXJjZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGFyZ2V0IG9iamVjdCB0aGF0IHdhcyBwYXNzZWQgYXMgZmlyc3QgYXJndW1lbnQuXG4gICAqL1xuICBzdGF0aWMgbWl4aW4odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBpIGluIHNvdXJjZSkge1xuICAgICAgdGFyZ2V0W2ldID0gc291cmNlW2ldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgc3RhdGljIF9sb2dnZXIobGV2ZWwsIGFyZ3MpIHtcbiAgICAvLyBhY2NlcHQgWydmb28nLCAnYmFyJ10gYW5kIFtbJ2ZvbycsICdiYXInXV1cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgfVxuICAgIC8vIG9ubHkgYWNjZXB0IGxvZ2dpbmcgZnVuY3Rpb25zXG4gICAgc3dpdGNoKGxldmVsKSB7XG4gICAgICBjYXNlICdsb2cnOlxuICAgICAgY2FzZSAnd2Fybic6XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIGNvbnNvbGVbbGV2ZWxdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX2xvZygpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgdGhpcy5fbG9nZ2VyKCdsb2cnLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBfd2FybigpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgdGhpcy5fbG9nZ2VyKCd3YXJuJywgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgX2Vycm9yKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ2Vycm9yJywgYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5hbWVkIGV2ZW50IHdpdGggYG5hbWVgXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybiB7RXZlbnR9IFJldHVybnMgYSBjcmVhdGVkIGV2ZW50XG4gICAqICovXG4gIHN0YXRpYyBuZXdFdmVudChuYW1lKXtcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEluc3BlY3RzIGlmIHRoZSBjdXJyZW50IHN0cmluZyBtaWdodCBiZSBjb252ZXJ0ZWQgdG8gbnVtYmVyIGFuZCByZW5kZXJzIGl0IGFzIG51bWJlci4gSWYgc3RyaW5nIGxlbmd0aCBpcyAwLCByZXR1cm5zIGBudWxsYC4gSWYgbm9uZSBhcHBsaWVzIHJldHVybnMgdGhlIHN0cmluZyBhcyBpcy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIHZhbHVlIG9mIHRoZSBjZWxsIGlmIG5vdCBIVE1MIGNvbnRlbnRzXG4gICAqIEByZXR1cm4ge051bWJlcnxudWxsfFN0cmluZ31cbiAgICogKi9cbiAgc3RhdGljIGlzTnVtYmVyKHN0cil7XG4gICAgaWYoIWlzTmFOKHBhcnNlRmxvYXQoc3RyKSkpe1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLywvaSwnJyk7Ly8gcmVtb3ZlIHVubmVjZXNzYXJ5IGNvbW1hIGFzIGEgZGVsaW1pdGVyIGZvciB0aG91c2FuZHMgZnJvbSBkYXRhLlxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyKTtcbiAgICB9IGVsc2UgaWYoc3RyLmxlbmd0aD09MCl7cmV0dXJuIG51bGx9IGVsc2Uge3JldHVybiBzdHJ9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIFhIUiB3cmFwcGVkIGluIGEgUHJvbWlzZVxuICAgKiBAcGFyYW0geyFTdHJpbmd9IFVSTCAtIHVybCB0byBzZW5kIGEgYEdFVGAgcmVxdWVzdCB0b1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXR1cm5zIGEgdGhlbi1hYmxlIHByb21pc2Ugd2l0aCBgWE1MSHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0YFxuICAgKiAqL1xuICBzdGF0aWMgcHJvbWlzZVJlcXVlc3QoVVJMKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGhyLm9wZW4oJ0dFVCcsIFVSTCwgdHJ1ZSk7XG4gICAgICB4aHIub25sb2FkID0gKCk9Pnt4aHIuc3RhdHVzID09IDIwMD9yZXNvbHZlKHhoci5yZXNwb25zZVRleHQpOnJlamVjdChFcnJvcihgJHt4aHIuc3RhdHVzfTogJHt4aHIuc3RhdHVzVGV4dH1gKSk7fVxuICAgICAgeGhyLm9uZXJyb3IgPSAoKT0+e3JlamVjdChFcnJvcihcIk5ldHdvcmsgRXJyb3JcIikpO31cbiAgICAgIHhoci5zZW5kKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHZhcmlhYmxlIGxpc3RlZCBpbiBxdWVyeSBzdHJpbmdcbiAgICogQHBhcmFtIHshU3RyaW5nfSB2YXJpYWJsZSAtIHZhcmlhYmxlIG5hbWUgdG8gZ2V0IHZhbHVlIGZvclxuICAgKiBAcGFyYW0ge1N0cmluZz19IFtxdWVyeT13aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKV0gLSB0aGUgcXVlcnkgc3RyaW5nIHRvIHNlYXJjaCB2YXJpYWJsZSBmb3IgaW5cbiAgICogQHJldHVybiB7U3RyaW5nfSBSZXR1cm5zIHZhbHVlIGZvciB0aGUgdmFyaWFibGVcbiAgICogKi9cbiAgc3RhdGljIGdldFF1ZXJ5VmFyaWFibGUodmFyaWFibGUscXVlcnk9d2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpe1xuICAgIHZhciB2YXJzID0gcXVlcnkuc3BsaXQoXCImXCIpO1xuICAgIGZvciAodmFyIGk9MDtpPHZhcnMubGVuZ3RoO2krKykge1xuICAgICAgdmFyIHBhaXIgPSB2YXJzW2ldLnNwbGl0KFwiPVwiKTtcbiAgICAgIGlmKChwYWlyWzBdKS50b0xvd2VyQ2FzZSgpID09IHZhcmlhYmxlLnRvTG93ZXJDYXNlKCkpe3JldHVybiBwYWlyWzFdO31cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiB0dXJucyBgd2luZG93LmxvY2F0aW9uYCBvYmplY3QgaW50byBhbiBvYmplY3Qgd2l0aCBwYXJhbXMgYXMgbmFtZWQga2V5cyBuZWNlc3NhcnkgdG8gcmVjb25zdHJ1Y3QgdGhlIFVSTFxuICAgKiBAcGFyYW0ge09iamVjdD19IFtsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbl0gLSBhIHdpbmRvdy5sb2NhdGlvbiBvYmplY3QsIGJ5IGRlZmF1bHQgb2YgdGhlIGhvc3Qgd2luZG93IHdoZXJlIHRoZSBzY3JpcHQgaXMgZXhlY3V0ZWRcbiAgICogQHJldHVybnMge3twYXRoOlN0cmluZywgcXVlcnk6T2JqZWN0fX0gYSBgbG9jYXRpb25gIG9iamVjdFxuICAgKiAqL1xuICBzdGF0aWMgbG9jYXRpb25EZXNlcmlhbGl6ZShsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbil7XG4gICAgbGV0IG8gPSB7XG4gICAgICBwYXRoOiBsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHF1ZXJ5Ont9XG4gICAgfTtcbiAgICBsb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpLnNwbGl0KC8mLykuZm9yRWFjaChwYWlyPT57XG4gICAgICBsZXQgYVBhaXI9IHBhaXIuc3BsaXQoLz0vKTtcbiAgICAgIG8ucXVlcnlbYVBhaXJbMF0udG9Mb3dlckNhc2UoKV0gPSBhUGFpclsxXVxuICAgIH0pO1xuICAgIHJldHVybiBvXG4gIH1cblxuICAvKipcbiAgICogVHVybnMgYSBgbG9jYXRpb25gIG9iamVjdCAocmVzdWx0IG9mIGBsb2NhdGlvbkRlc2VyaWFsaXplYCkgaW50byBhIFVSTFxuICAgKiBAcGFyYW0ge3twYXRoOlN0cmluZywgcXVlcnk6T2JqZWN0fX0gbG9jYXRpb24gLSBhbiBvYmplY3Qgd2l0aCBwYXJhbXMgYW5kIGEgdXJsXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IC0gYSBVUkwgc3RyaW5nXG4gICAqICovXG4gIHN0YXRpYyBsb2NhdGlvblNlcmlhbGl6ZShsb2NhdGlvbil7XG4gICAgbGV0IHF1ZXJ5PVtdO1xuICAgIGZvcihsZXQga2V5IGluIGxvY2F0aW9uLnF1ZXJ5KXtcbiAgICAgIHF1ZXJ5LnB1c2goW2tleSxsb2NhdGlvbi5xdWVyeVtrZXldXS5qb2luKCc9JykpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aCArICc/JyArIHF1ZXJ5LmpvaW4oJyYnKTtcbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBSZXBvcnRhbEJhc2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1yZXBvcnRhbC1iYXNlL3NyYy9yZXBvcnRhbC1iYXNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX01hcC5qcyIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNLZXkuanMiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pZGVudGl0eS5qcyIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNTeW1ib2wuanMiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGtleSBpbiBleHBvcnRzKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU2V0LmpzIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TdGFjay5qcyIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0LmpzIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpZiBzdWl0YWJsZSBmb3Igc3RyaWN0XG4gKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmljdENvbXBhcmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNTdHJpY3RDb21wYXJhYmxlLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYG1hdGNoZXNQcm9wZXJ0eWAgZm9yIHNvdXJjZSB2YWx1ZXMgc3VpdGFibGVcbiAqIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShrZXksIHNyY1ZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZSAmJlxuICAgICAgKHNyY1ZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiBPYmplY3Qob2JqZWN0KSkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9lcS5qcyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9rZXlzLmpzIiwiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dChyZXF1aXJlKFwicmVhY3RcIikpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXCJyZWFjdFwiXSx0KTtlbHNle3ZhciByPXQoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/cmVxdWlyZShcInJlYWN0XCIpOmUucmVhY3QpO2Zvcih2YXIgbyBpbiByKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW29dPXJbb119fSh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KG8pe2lmKHJbb10pcmV0dXJuIHJbb10uZXhwb3J0czt2YXIgbj1yW29dPXtleHBvcnRzOnt9LGlkOm8sbG9hZGVkOiExfTtyZXR1cm4gZVtvXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyx0KSxuLmxvYWRlZD0hMCxuLmV4cG9ydHN9dmFyIHI9e307cmV0dXJuIHQubT1lLHQuYz1yLHQucD1cIlwiLHQoMCl9KFtmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89cigxKTt0LmRlZmF1bHQ9by5NREljb24sZS5leHBvcnRzPXQuZGVmYXVsdH0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fWZ1bmN0aW9uIG4oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGkoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiB1KGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5NREljb249dm9pZCAwO3ZhciBjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbz10W3JdO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQscixvKXtyZXR1cm4gciYmZSh0LnByb3RvdHlwZSxyKSxvJiZlKHQsbyksdH19KCksZj1yKDIpLGw9byhmKSxhPXQuTURJY29uPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXtyZXR1cm4gbih0aGlzLHQpLGkodGhpcywodC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuYXBwbHkodGhpcyxhcmd1bWVudHMpKX1yZXR1cm4gdSh0LGUpLGModCxbe2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wcm9wcyx0PWUuZmlsbCxyPWUuc2l6ZSxvPWUuaWNvbixuPWUuY2hpbGRyZW47cmV0dXJuIGNvbnNvbGUubG9nKHQscixvLG4pLGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3htbG5zOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixmaWxsOnQsd2lkdGg6cixoZWlnaHQ6cix2aWV3Qm94OlwiMCAwIDI0IDI0XCIsY2hpbGRyZW46b3x8bn0pfX1dKSx0fShmLlB1cmVDb21wb25lbnQpO2EuZGVmYXVsdFByb3BzPXtzaXplOjI0LGZpbGw6XCJyZ2JhKDAsMCwwLC44NSlcIn19LGZ1bmN0aW9uKHQscil7dC5leHBvcnRzPWV9XSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1ESWNvbi5idW5kbGUuanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9NREljb24vZGlzdC9NREljb24uYnVuZGxlLmpzIiwiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dChyZXF1aXJlKFwicmVhY3RcIikpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXCJyZWFjdFwiXSx0KTtlbHNle3ZhciBvPXQoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/cmVxdWlyZShcInJlYWN0XCIpOmUucmVhY3QpO2Zvcih2YXIgciBpbiBvKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW3JdPW9bcl19fSh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKG9bcl0pcmV0dXJuIG9bcl0uZXhwb3J0czt2YXIgbj1vW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gZVtyXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyx0KSxuLmxvYWRlZD0hMCxuLmV4cG9ydHN9dmFyIG89e307cmV0dXJuIHQubT1lLHQuYz1vLHQucD1cIlwiLHQoMCl9KFtmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gaShlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fWZ1bmN0aW9uIGEoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbz1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG8pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8scikmJihlW3JdPW9bcl0pfXJldHVybiBlfSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKXt2YXIgcj10W29dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsbyxyKXtyZXR1cm4gbyYmZSh0LnByb3RvdHlwZSxvKSxyJiZlKHQsciksdH19KCkscD1vKDEpLHU9cihwKSxjPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSl7bih0aGlzLHQpO3ZhciBvPWkodGhpcywodC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLGUpKTtyZXR1cm4gby5faW1hZ2VPbmxvYWQ9by5faW1hZ2VPbmxvYWQuYmluZChvKSxvLl9pbWFnZU9uZXJyb3I9by5faW1hZ2VPbmVycm9yLmJpbmQobyksby5zdGF0ZT17c3JjOnZvaWQgMCxwbGFjZWhvbGRlckhpZGRlbjohby5wcm9wcy5wbGFjZWhvbGRlcixzaXppbmc6by5wcm9wcy5zaXppbmc/by5wcm9wcy5zaXppbmc6bnVsbCxwb3NpdGlvbjpvLnByb3BzLnBvc2l0aW9uP28ucHJvcHMucG9zaXRpb246XCJjZW50ZXJcIixwcm9wb3J0aW9uOjAsbG9hZGVkOiExLGxvYWRpbmc6ITEsZXJyb3I6ITF9LG99cmV0dXJuIGEodCxlKSxsKHQsW3trZXk6XCJjb21wb25lbnREaWRNb3VudFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5fbG9hZCgpLHRoaXMuX2NvbXB1dGVEaW1lbnNpb25zKCksdGhpcy5fY29tcHV0ZVByb3BvcnRpb24odGhpcy5wcm9wcy5hc3BlY3QpfX0se2tleTpcIl9jb21wdXRlRGltZW5zaW9uc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5wcm9wcyx0PWUud2lkdGgsbz1lLmhlaWdodDt0aGlzLnNldFN0YXRlKHt3aWR0aDppc05hTih0KT90OnQrXCJweFwiLGhlaWdodDppc05hTihvKT9vOm8rXCJweFwifSl9fSx7a2V5OlwiX2NvbXB1dGVQcm9wb3J0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYoZSYmZS5pbmRleE9mKFwiOlwiKT4tMSl7dmFyIHQ9ZS5zcGxpdChcIjpcIikubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBwYXJzZUZsb2F0KGUpfSk7aXNOYU4odFswXSl8fGlzTmFOKHRbMV0pfHx0aGlzLnNldFN0YXRlKGZ1bmN0aW9uKGUpe2lmKCFpc05hTihwYXJzZUZsb2F0KGUud2lkdGgpKSlyZXR1cm57cHJvcG9ydGlvbjoocGFyc2VGbG9hdChlLndpZHRoKSoodFsxXS90WzBdKSkudG9TdHJpbmcoKStlLndpZHRoLnN1YnN0cmluZyhwYXJzZUZsb2F0KGUud2lkdGgpLnRvU3RyaW5nKCkubGVuZ3RoKSxoZWlnaHQ6XCJhdXRvXCJ9fSl9fX0se2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zdGF0ZSx0PWUud2lkdGgsbz1lLmhlaWdodCxyPWUucHJvcG9ydGlvbixuPWUuc3JjLGk9ZS5zaXppbmcsYT1lLnBvc2l0aW9uLHM9ZS5sb2FkaW5nLGw9ZS5sb2FkZWQscD1lLnBsYWNlaG9sZGVySGlkZGVuLGM9dGhpcy5wcm9wcyxkPWMucHJlbG9hZCxmPWMuZmFkZSxoPWMucGxhY2Vob2xkZXJTaXppbmcsZz1jLnBsYWNlaG9sZGVyLG09Yy5hbHQ7cmV0dXJuIHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIlByb3BvcnRpb25hbEltYWdlXCIsc3R5bGU6e3dpZHRoOnQsaGVpZ2h0Om8scGFkZGluZ1RvcDpyfX0sdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwic2l6ZWRJbWdEaXZcIixyb2xlOlwiaW1nXCIsc3R5bGU6e2JhY2tncm91bmRJbWFnZTpuP1widXJsKFwiK24rXCIpXCI6dm9pZCAwLGJhY2tncm91bmRTaXplOmksYmFja2dyb3VuZFBvc2l0aW9uOmEsYmFja2dyb3VuZFJlcGVhdDppP1wibm8tcmVwZWF0XCI6XCJpbml0aWFsXCIsZGlzcGxheTppP1wiYmxvY2tcIjpcIm5vbmVcIn19KSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzcmM6bixhbHQ6bSxvbkxvYWQ6dGhpcy5faW1hZ2VPbmxvYWQsb25FcnJvcjp0aGlzLl9pbWFnZU9uZXJyb3Isc3R5bGU6e2Rpc3BsYXk6aT9cIm5vbmVcIjpcImJsb2NrXCJ9fSksdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6e2JhY2tncm91bmRJbWFnZTpnP1widXJsKFwiK2crXCIpXCI6dm9pZCAwLGJhY2tncm91bmRTaXplOmg/aDppLGJhY2tncm91bmRQb3NpdGlvbjphLGJhY2tncm91bmRSZXBlYXQ6aT9cIm5vLXJlcGVhdFwiOlwiaW5pdGlhbFwifSxjbGFzc05hbWU6XCJpbWFnZVBsYWNlaG9sZGVyIFwiKyhwJiZcImhpZGRlblwiKStcIiBcIisoZCYmZiYmIXMmJmwmJlwiZmFkZWQtb3V0XCIpfSkpfX0se2tleTpcIl9pbWFnZU9ubG9hZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXRTdGF0ZSh7bG9hZGluZzohMSxsb2FkZWQ6ITAsZXJyb3I6ITF9KX19LHtrZXk6XCJfaW1hZ2VPbmVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNldFN0YXRlKHMoe30sdGhpcy5fcmVzZXQoKSx7ZXJyb3I6ITB9KSl9fSx7a2V5OlwiX3Jlc2V0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm57c3JjOnZvaWQgMCxsb2FkaW5nOiExLGxvYWRlZDohMSxlcnJvcjohMX19fSx7a2V5OlwiX2xvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuX3Jlc2V0KCk7aWYoIXRoaXMucHJvcHMucHJldmVudExvYWQpe3ZhciB0PXRoaXMucHJvcHMuc3JjO2Uuc3JjIT09dCYmKGU9cyh7fSxlLHtzcmM6dD90OnZvaWQgMCxsb2FkaW5nOiEhdH0pKX10aGlzLnNldFN0YXRlKGUpfX1dKSx0fSh1LmRlZmF1bHQuQ29tcG9uZW50KTt0LmRlZmF1bHQ9Y30sZnVuY3Rpb24odCxvKXt0LmV4cG9ydHM9ZX1dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHJvcG9ydGlvbmFsSW1hZ2UuYnVuZGxlLmpzLm1hcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vUHJvcG9ydGlvbmFsSW1hZ2UvZGlzdC9Qcm9wb3J0aW9uYWxJbWFnZS5idW5kbGUuanMiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2VzNi9wcm9taXNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmIChPYnNlcnZlcikge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwidmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gTElCUkFSWSA/IGZ1bmN0aW9uIChhLCBiKSB7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufSA6IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgaWYgKHByb21pc2UuX2ggPT0gMSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2M7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlYWN0aW9uO1xuICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkge1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZiAocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpIHJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZiAoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSkgcmV0dXJuIHg7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19IYXNoLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19Qcm9taXNlLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19XZWFrTWFwLmpzIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FwcGx5LmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanMiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChjb21wYXJhdG9yKHZhbHVlLCBhcnJheVtpbmRleF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmRJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzRmxhdHRlbmFibGUgPSByZXF1aXJlKCcuL19pc0ZsYXR0ZW5hYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmxhdHRlbmAgd2l0aCBzdXBwb3J0IGZvciByZXN0cmljdGluZyBmbGF0dGVuaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gZmxhdHRlbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXB0aCBUaGUgbWF4aW11bSByZWN1cnNpb24gZGVwdGguXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVkaWNhdGU9aXNGbGF0dGVuYWJsZV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU3RyaWN0XSBSZXN0cmljdCB0byB2YWx1ZXMgdGhhdCBwYXNzIGBwcmVkaWNhdGVgIGNoZWNrcy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtyZXN1bHQ9W11dIFRoZSBpbml0aWFsIHJlc3VsdCB2YWx1ZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZsYXR0ZW5lZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZUZsYXR0ZW4oYXJyYXksIGRlcHRoLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgcHJlZGljYXRlIHx8IChwcmVkaWNhdGUgPSBpc0ZsYXR0ZW5hYmxlKTtcbiAgcmVzdWx0IHx8IChyZXN1bHQgPSBbXSk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKGRlcHRoID4gMCAmJiBwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgICBpZiAoZGVwdGggPiAxKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsYXR0ZW4gYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICAgIGJhc2VGbGF0dGVuKHZhbHVlLCBkZXB0aCAtIDEsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheVB1c2gocmVzdWx0LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNTdHJpY3QpIHtcbiAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGbGF0dGVuO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VGbGF0dGVuLmpzIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJc05hTiA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hTicpLFxuICAgIHN0cmljdEluZGV4T2YgPSByZXF1aXJlKCcuL19zdHJpY3RJbmRleE9mJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcbiAgICA/IHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpXG4gICAgOiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXNOYU4sIGZyb21JbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hdGNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IGluZGV4LFxuICAgICAgbm9DdXN0b21pemVyID0gIWN1c3RvbWl6ZXI7XG5cbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgPyBkYXRhWzFdICE9PSBvYmplY3RbZGF0YVswXV1cbiAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cbiAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhY2sgPSBuZXcgU3RhY2s7XG4gICAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgICAgIDogcmVzdWx0XG4gICAgICAgICAgKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hdGNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc01hdGNoLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hTmAgd2l0aG91dCBzdXBwb3J0IGZvciBudW1iZXIgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgTmFOYCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYU47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXMnKSxcbiAgICBiYXNlTWF0Y2hlc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXNQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBwcm9wZXJ0eSA9IHJlcXVpcmUoJy4vcHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pdGVyYXRlZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGFuIGl0ZXJhdGVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2MDM0IGZvciBtb3JlIGRldGFpbHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICA/IGJhc2VNYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKVxuICAgICAgOiBiYXNlTWF0Y2hlcyh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXRlcmF0ZWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL19iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hdGNoRGF0YScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2Vzbid0IGNsb25lIGBzb3VyY2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUobWF0Y2hEYXRhWzBdWzBdLCBtYXRjaERhdGFbMF1bMV0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09PSBzb3VyY2UgfHwgYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXMuanMiLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpLFxuICAgIGdldCA9IHJlcXVpcmUoJy4vZ2V0JyksXG4gICAgaGFzSW4gPSByZXF1aXJlKCcuL2hhc0luJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzUHJvcGVydHlgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICBpZiAoaXNLZXkocGF0aCkgJiYgaXNTdHJpY3RDb21wYXJhYmxlKHNyY1ZhbHVlKSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSh0b0tleShwYXRoKSwgc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIgb2JqVmFsdWUgPSBnZXQob2JqZWN0LCBwYXRoKTtcbiAgICByZXR1cm4gKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgb2JqVmFsdWUgPT09IHNyY1ZhbHVlKVxuICAgICAgPyBoYXNJbihvYmplY3QsIHBhdGgpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlc1Byb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlUHJvcGVydHkuanMiLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5RGVlcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlUHJvcGVydHlEZWVwLmpzIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIG92ZXJSZXN0ID0gcmVxdWlyZSgnLi9fb3ZlclJlc3QnKSxcbiAgICBzZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX3NldFRvU3RyaW5nJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwidmFyIGNvbnN0YW50ID0gcmVxdWlyZSgnLi9jb25zdGFudCcpLFxuICAgIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc2V0VG9TdHJpbmdgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaG90IGxvb3Agc2hvcnRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgYmFzZVNldFRvU3RyaW5nID0gIWRlZmluZVByb3BlcnR5ID8gaWRlbnRpdHkgOiBmdW5jdGlvbihmdW5jLCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmMsICd0b1N0cmluZycsIHtcbiAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAnZW51bWVyYWJsZSc6IGZhbHNlLFxuICAgICd2YWx1ZSc6IGNvbnN0YW50KHN0cmluZyksXG4gICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNldFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpLFxuICAgIGNyZWF0ZVNldCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVNldCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmlxKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgc2VlbiA9IHJlc3VsdDtcblxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgfVxuICBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xuICAgIGlmIChzZXQpIHtcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XG4gICAgfVxuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKHNlZW5JbmRleC0tKSB7XG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXMoc2VlbiwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ2YXIgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgbm9vcCA9IHJlcXVpcmUoJy4vbm9vcCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvYmplY3Qgb2YgYHZhbHVlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFkZCB0byB0aGUgc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IHNldC5cbiAqL1xudmFyIGNyZWF0ZVNldCA9ICEoU2V0ICYmICgxIC8gc2V0VG9BcnJheShuZXcgU2V0KFssLTBdKSlbMV0pID09IElORklOSVRZKSA/IG5vb3AgOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBTZXQodmFsdWVzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2NyZWF0ZVNldC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ2YXIgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGtleSA9IHJlc3VsdFtsZW5ndGhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgcmVzdWx0W2xlbmd0aF0gPSBba2V5LCB2YWx1ZSwgaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXRjaERhdGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0TWF0Y2hEYXRhLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRUYWcuanMiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgZXhpc3RzIG9uIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgaGFzRnVuYykge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gdG9LZXkocGF0aFtpbmRleF0pO1xuICAgIGlmICghKHJlc3VsdCA9IG9iamVjdCAhPSBudWxsICYmIGhhc0Z1bmMob2JqZWN0LCBrZXkpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICB9XG4gIGlmIChyZXN1bHQgfHwgKytpbmRleCAhPSBsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGxlbmd0aCA9IG9iamVjdCA9PSBudWxsID8gMCA6IG9iamVjdC5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc1BhdGguanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoU2V0LmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ByZWFkYWJsZVN5bWJvbCA9IFN5bWJvbCA/IFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBmbGF0dGVuYWJsZSBgYXJndW1lbnRzYCBvYmplY3Qgb3IgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZmxhdHRlbmFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNGbGF0dGVuYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpIHx8XG4gICAgISEoc3ByZWFkYWJsZVN5bWJvbCAmJiB2YWx1ZSAmJiB2YWx1ZVtzcHJlYWRhYmxlU3ltYm9sXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGbGF0dGVuYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fb3ZlckFyZy5qcyIsInZhciBhcHBseSA9IHJlcXVpcmUoJy4vX2FwcGx5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VSZXN0YCB3aGljaCB0cmFuc2Zvcm1zIHRoZSByZXN0IGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSByZXN0IGFycmF5IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyUmVzdChmdW5jLCBzdGFydCwgdHJhbnNmb3JtKSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IHRyYW5zZm9ybShhcnJheSk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlclJlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fb3ZlclJlc3QuanMiLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsInZhciBiYXNlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlU2V0VG9TdHJpbmcnKSxcbiAgICBzaG9ydE91dCA9IHJlcXVpcmUoJy4vX3Nob3J0T3V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0VG9TdHJpbmcuanMiLCIvKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVOb3cgPSBEYXRlLm5vdztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvcnRPdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2hvcnRPdXQuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0NsZWFyLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0hhcy5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5kZXhPZmAgd2hpY2ggcGVyZm9ybXMgc3RyaWN0IGVxdWFsaXR5XG4gKiBjb21wYXJpc29ucyBvZiB2YWx1ZXMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmljdEluZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsInZhciBtZW1vaXplQ2FwcGVkID0gcmVxdWlyZSgnLi9fbWVtb2l6ZUNhcHBlZCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVMZWFkaW5nRG90ID0gL15cXC4vLFxuICAgIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChyZUxlYWRpbmdEb3QudGVzdChzdHJpbmcpKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9QYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvY29uc3RhbnQuanMiLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2dldC5qcyIsInZhciBiYXNlSGFzSW4gPSByZXF1aXJlKCcuL19iYXNlSGFzSW4nKSxcbiAgICBoYXNQYXRoID0gcmVxdWlyZSgnLi9faGFzUGF0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgaXMgYSBkaXJlY3Qgb3IgaW5oZXJpdGVkIHByb3BlcnR5IG9mIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IF8uY3JlYXRlKHsgJ2EnOiBfLmNyZWF0ZSh7ICdiJzogMiB9KSB9KTtcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EuYicpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2InKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGhhc0luKG9iamVjdCwgcGF0aCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgaGFzUGF0aChvYmplY3QsIHBhdGgsIGJhc2VIYXNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzSW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9oYXNJbi5qcyIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIi8qKlxuICogR2V0cyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ubGFzdChbMSwgMiwgM10pO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuIGxlbmd0aCA/IGFycmF5W2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxhc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9sYXN0LmpzIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9tZW1vaXplLmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbm9vcC5qcyIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHknKSxcbiAgICBiYXNlUHJvcGVydHlEZWVwID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5RGVlcCcpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGEgZ2l2ZW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW1xuICogICB7ICdhJzogeyAnYic6IDIgfSB9LFxuICogICB7ICdhJzogeyAnYic6IDEgfSB9XG4gKiBdO1xuICpcbiAqIF8ubWFwKG9iamVjdHMsIF8ucHJvcGVydHkoJ2EuYicpKTtcbiAqIC8vID0+IFsyLCAxXVxuICpcbiAqIF8ubWFwKF8uc29ydEJ5KG9iamVjdHMsIF8ucHJvcGVydHkoWydhJywgJ2InXSkpLCAnYS5iJyk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICByZXR1cm4gaXNLZXkocGF0aCkgPyBiYXNlUHJvcGVydHkodG9LZXkocGF0aCkpIDogYmFzZVByb3BlcnR5RGVlcChwYXRoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3Byb3BlcnR5LmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC90b1N0cmluZy5qcyIsInZhciBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJy4vX2Jhc2VGbGF0dGVuJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICBsYXN0ID0gcmVxdWlyZSgnLi9sYXN0Jyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy51bmlvbmAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgaXRlcmF0ZWVgIHdoaWNoIGlzXG4gKiBpbnZva2VkIGZvciBlYWNoIGVsZW1lbnQgb2YgZWFjaCBgYXJyYXlzYCB0byBnZW5lcmF0ZSB0aGUgY3JpdGVyaW9uIGJ5XG4gKiB3aGljaCB1bmlxdWVuZXNzIGlzIGNvbXB1dGVkLiBSZXN1bHQgdmFsdWVzIGFyZSBjaG9zZW4gZnJvbSB0aGUgZmlyc3RcbiAqIGFycmF5IGluIHdoaWNoIHRoZSB2YWx1ZSBvY2N1cnMuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OlxuICogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7Li4uQXJyYXl9IFthcnJheXNdIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGNvbWJpbmVkIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy51bmlvbkJ5KFsyLjFdLCBbMS4yLCAyLjNdLCBNYXRoLmZsb29yKTtcbiAqIC8vID0+IFsyLjEsIDEuMl1cbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8udW5pb25CeShbeyAneCc6IDEgfV0sIFt7ICd4JzogMiB9LCB7ICd4JzogMSB9XSwgJ3gnKTtcbiAqIC8vID0+IFt7ICd4JzogMSB9LCB7ICd4JzogMiB9XVxuICovXG52YXIgdW5pb25CeSA9IGJhc2VSZXN0KGZ1bmN0aW9uKGFycmF5cykge1xuICB2YXIgaXRlcmF0ZWUgPSBsYXN0KGFycmF5cyk7XG4gIGlmIChpc0FycmF5TGlrZU9iamVjdChpdGVyYXRlZSkpIHtcbiAgICBpdGVyYXRlZSA9IHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gYmFzZVVuaXEoYmFzZUZsYXR0ZW4oYXJyYXlzLCAxLCBpc0FycmF5TGlrZU9iamVjdCwgdHJ1ZSksIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMikpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pb25CeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3VuaW9uQnkuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTAuMDEuMjAxNy5cbiAqL1xuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tIFwici1yZXBvcnRhbC1iYXNlXCI7XG5pbXBvcnQgSGl0bGlzdFNldHVwIGZyb20gXCIuL2hpdGxpc3Qtc2V0dXBcIjtcblxuY2xhc3MgSGl0bGlzdERhdGFzb3VyY2UgZXh0ZW5kcyBIaXRsaXN0U2V0dXB7XG4gIC8qKlxuICAgKiBUaGlzIGNsYXNzIGFsbG93cyB0byBlc3RhYmxpc2ggYSBjb25uZWN0aW9uIHdpdGggdGhlIEhpdExpc3QgZGF0YWJhc2UgYW5kIHVzZSB1dGlsaXR5IG1ldGhvZHMgdG8gcXVlcnkgYW5kIGZpbHRlciBkYXRhIHByb3ZpZGVkIHRoZXJlJ3MgYSBoaXRsaXN0IG9uIHRoZSBwYWdlXG4gICAqIEBleHRlbmRzIEhpdGxpc3RTZXR1cFxuICAgKiAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zPXt9KXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3NlYXJjaFZhbHVlcz1bXTtcbiAgICAvKiogQHByb3BlcnR5IHtTdHJpbmd9IG1vZGlmaWVyIC0gZXh0cmEgcGFyYW1zIGFkZGVkIGFzIGEgc3RyaW5nIGZyb20gZmlsdGVycyAqL1xuICAgIHRoaXMubW9kaWZpZXIgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBwZXJmb3JtcyBpbml0aWFsIGRhdGEgbG9hZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgb2YgZGF0YVxuICAgKiAqL1xuICBpbml0aWFsRGF0YUxvYWQoKXtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aW5pdGlhbExvYWQ6dHJ1ZX0pXG4gIH1cbiAgLyoqXG4gICAqIGxvYWRzIG5leHQgcGFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgb2YgZGF0YVxuICAgKiAqL1xuICBuZXh0UGFnZSgpe1xuICAgIHRoaXMuX3NraXBQYWdlKHRydWUpO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aXNQYWdpbmc6IHRydWV9LHRoaXMubW9kaWZpZXIpO1xuICB9XG4gIC8qKlxuICAgKiBsb2FkcyBwcmV2aW91cyBwYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIHByZXZpb3VzUGFnZSgpe1xuICAgIHRoaXMuX3NraXBQYWdlKGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2lzUGFnaW5nOiB0cnVlfSx0aGlzLm1vZGlmaWVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyaWVzIEhpdExpc3QgQVBJXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqICovXG4gIHJlcXVlc3RSZXNwb25zZShvcHRpb25zKXtcbiAgICBsZXQgcXVlcnk9IFJlcG9ydGFsQmFzZS5sb2NhdGlvbkRlc2VyaWFsaXplKCkucXVlcnk7XG4gICAgaWYocXVlcnkgJiYgcXVlcnkucmVwb3J0aWQgJiYgdGhpcy5oaXRsaXN0SUQpe1xuICAgICAgLypzZXQgY29tbW9uIHBhcmFtcyovXG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBQYWdlSWQ6IHRoaXMucGFnZUlELFxuICAgICAgICBwYWdlU3RhdGVJZDogdGhpcy5wYWdlU3RhdGVJRCxcbiAgICAgICAgUHJldmlldzogcXVlcnkucHJldmlld1xuICAgICAgfTtcblxuICAgICAgLyppZiBvcHRpb25zIGFyZSBwYXNzZWQsIGFkZCBvcHRpb25zKi9cbiAgICAgIGlmKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgZm9yIChsZXQgYXR0cm5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHBhcmFtc1thdHRybmFtZV0gPSB0eXBlb2Ygb3B0aW9uc1thdHRybmFtZV09PT0nYm9vbGVhbic/KG9wdGlvbnNbYXR0cm5hbWVdPycxJzonMCcpOm9wdGlvbnNbYXR0cm5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFwYXJhbXMuc2VhcmNoICYmIHRoaXMuX3NlYXJjaFZhbHVlcy5sZW5ndGg+MCl7XG4gICAgICAgIHBhcmFtcy5zZWFyY2ggPSBKU09OLnN0cmluZ2lmeSh0aGlzLl9zZWFyY2hWYWx1ZXMpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcztcblxuICAgICAgaWYgKHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzIT1udWxsICYmICFpc05hTihzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdlTnVtYmVyKSkge1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmluaXRpYWxMb2FkID09PSB0cnVlKSB7XG4gICAgICAgICAgc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2VOdW1iZXIgKz0gc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnaW5nRm9yd2FyZCA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwYXJhbXMuc29ydGluZ1BhZ2luZ1ZhbHVlcz1KU09OLnN0cmluZ2lmeShzb3J0aW5nUGFnaW5nVmFsdWVzKTtcblxuICAgICAgcmV0dXJuIFJlcG9ydGFsQmFzZS5wcm9taXNlUmVxdWVzdChgJHt0aGlzLnNlcnZpY2VVUkx9JiR7SGl0bGlzdERhdGFzb3VyY2Uuc2VyaWFsaXplUGFyYW1zKHBhcmFtcyl9JHt0aGlzLm1vZGlmaWVyIT0nJz8nJicrdGhpcy5tb2RpZmllcjonJ31gKVxuICAgICAgICAudGhlbihyZXNwb25zZT0+dGhpcy5wYXJzZVJlc3BvbnNlKHJlc3BvbnNlKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIEhpdExpc3QgQVBJIHJlc3BvbnNlXG4gICAqICovXG4gIHBhcnNlUmVzcG9uc2UocmVzcG9uc2Upe1xuICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG5cbiAgICB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSByZXNwb25zZS5zb3J0aW5nUGFnaW5nVmFsdWVzO1xuICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgdGhpcy5wYWdlSW5mbyA9IHJlc3BvbnNlLnBhZ2VJbmZvO1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtCb29sZWFufSBwYWdpbmdGb3J3YXJkIGlmIGB0cnVlYCBnb2VzIGZvcndhcmQsIGlmIGBudWxsYCBnb2VzIGJhY2t3YXJkXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBjYWxsYmFja1xuICAgKiAqL1xuICBfc2tpcFBhZ2UocGFnaW5nRm9yd2FyZCl7XG4gICAgbGV0IF9zcHYgPSB7Li4udGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzfTtcbiAgICBsZXQgcHYgPSB7Li4uX3Nwdi5wYWdpbmdWYWx1ZXN9IHx8IHt9O1xuICAgIHB2LnBhZ2luZ0ZvcndhcmQgPSBwYWdpbmdGb3J3YXJkOyAvKmlmIGZvcndhcmQgaXMgbmVlZGVkIHRoZW4gcGFzcyB0cnVlLCBlbHNlIG51bGwgLSBiYWNrd2FyZCovXG4gICAgcHYuc3RhcnRJZCA9IHBhZ2luZ0ZvcndhcmQgPyBwdi5sYXN0U3RhcnRJZCA6IHB2LmZpcnN0U3RhcnRJZDtcbiAgICBwdi5zdGFydFZhbHVlID0gcGFnaW5nRm9yd2FyZCA/IHB2Lmxhc3RTdGFydFZhbHVlIDogcHYuZmlyc3RTdGFydFZhbHVlO1xuICAgIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHtcbiAgICAgIC4uLnRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyxcbiAgICAgIHBhZ2luZ1ZhbHVlczogcHZcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIHNlcmlhbGl6ZSBwYXJhbXMgaW50byBhIHF1ZXJ5IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIC0gYW4gb2JqZWN0IHdpdGggcGFyYW1ldGVyc1xuICAgKiAqL1xuICBzdGF0aWMgc2VyaWFsaXplUGFyYW1zKHBhcmFtcyl7XG4gICAgbGV0IHF1ZXJ5ID0gW107XG4gICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zKXtcbiAgICAgIHF1ZXJ5LnB1c2goW2tleSxwYXJhbXNba2V5XV0uam9pbignPScpKTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5LmpvaW4oJyYnKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdERhdGFzb3VyY2U7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1kYXRhc291cmNlLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDEwLjAxLjIwMTcuXG4gKi9cblxuY2xhc3MgSGl0bGlzdFNldHVwe1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIC8vZml4IGZvciB3aW5kb3cubG9jYXRpb24gb3JpZ2luLCB0aGFueCBJRVxuICAgIGlmICghd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0OiAnJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gSGl0bGlzdFNldHVwLmdldE9yaWdpbmFsQ29uZmlnKCk7XG4gICAgdGhpcy5fZWxlbWVudFR5cGUgPSB3aW5kb3cuSGl0TGlzdEVsZW1lbnRUeXBlO1xuICAgIHRoaXMuX29wID0gd2luZG93LlNlYXJjaGFibGVMaXN0T3BlcmF0b3I7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgYWxsb3dzIGdldHRpbmcgYSBsb2NhbGlzZWQgc3RyaW5nIGluIHRoZSBsYW5ndWFnZSBvZiB0aGUgcmVwb3J0IGZyb20gSGl0bGlzdCBjb25maWcuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSB0aGUga2V5IHRvIGxvb2sgdGhlIHByb3BlcnR5IHVwXG4gICAqXG4gICAqICogYHN0b2VgOlwiU21hbGxlciB0aGFuIG9yIGVxdWFsXCIsXG4gICAqICogYGd0b2VgOlwiR3JlYXRlciB0aGFuIG9yIGVxdWFsXCIsXG4gICAqICogYGJldHdlZW5gOlwiQmV0d2VlblwiLFxuICAgKiAqIGBiZWZvcmVgOlwiQmVmb3JlXCIsXG4gICAqICogYGFmdGVyYDpcIkFmdGVyXCIsXG4gICAqICogYGV4YWN0bHlgOlwiRXhhY3RseVwiLFxuICAgKiAqIGBzaG93ZGVmYXVsdGNvbHNgOlwiU2hvdyBkZWZhdWx0IGNvbHVtbnNcIixcbiAgICogKiBgYXBwbHlgOlwiQXBwbHlcIixcbiAgICogKiBgY2FuY2VsYDpcIkNhbmNlbFwiLFxuICAgKiAqIGBzaG93aGlkZWA6XCJTaG93IC8gSGlkZSBjb2x1bW5zXCIsXG4gICAqICogYHllc2A6XCJZZXNcIixcbiAgICogKiBgbm9gOlwiTm9cIixcbiAgICogKiBgbG9hZGluZ0RhdGFgOlwiTG9hZGluZyBkYXRhLCBwbGVhc2Ugd2FpdC4uLlwiLFwiXG4gICAqICogYGNoZWNrYWxsYDpcIkNoZWNrIGFsbFwiLFxuICAgKiAqIGB1bmNoZWNrYWxsYDpcIlVuY2hlY2sgYWxsXCIsXG4gICAqICogYGVycm9yTG9hZGluZ2A6XCJFcnJvciBsb2FkaW5nIGRhdGFcIixcbiAgICogKiBgZXJyb3JOb0NvbHVtbnNgOlwiTm8gY29sdW1ucyBzZWxlY3RlZFwiXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1JFU1BPTkRFTlRPVkVSVklFV2A6XCJSZXNwb25kZW50IG92ZXJ2aWV3XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSSU5UYDpcIlByaW50IHRoZSBjdXJyZW50IHJlc3BvbmRlbnRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfQ0xPU0VgOlwiQ2xvc2UgdGhpcyBvdmVybGF5XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX0ZJTFRFUmA6XCJGaWx0ZXIgcXVlc3Rpb25zXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX05PVEhJTkdGT1VORGA6XCJObyBxdWVzdGlvbnMgbWF0Y2ggeW91ciBzZWFyY2hcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJFVklPVVNgOlwiUHJldmlvdXNcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJFVklPVVNISU5UYDpcIlByZXZpb3VzIHJlc3BvbmRlbnRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTkVYVGA6XCJOZXh0XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX05FWFRISU5UYDpcIk5leHQgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19PRmA6XCJ7MH0gb2YgezF9XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX01PUkVgOlwiezB9IG1vcmVcIixcbiAgICogKiBSRVBPUlRfU0lOR0xFVklFV19BTFRFUk5BVElWRVNgOlwiQW5zd2VycyBhbHRlcm5hdGl2ZXM6XCJcbiAgICpcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICogKi9cbiAgaTE4bihrZXkpe1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuY2FwdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KT90aGlzLl9jb25maWcuY2FwdGlvbnNba2V5XTp0aGlzLl9jb25maWcuc2luZ2xlVmlld1RleHRzLmhhc093blByb3BlcnR5KGtleSk/dGhpcy5fY29uZmlnLnNpbmdsZVZpZXdUZXh0c1trZXldOm51bGxcbiAgfVxuXG4gIGdldCBkYXRhKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5oaXRsaXN0RGF0YX1cblxuICBzZXQgZGF0YShkYXRhKXtcbiAgICB0aGlzLl9jb25maWcuaGl0bGlzdERhdGEgPSBkYXRhO1xuICB9XG4gIGdldCBkaXNhYmxlTmV4dEJ1dHRvbigpe1xuICAgIHJldHVybiB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMuZGlzYWJsZU5leHRCdXR0b24gfHwgZmFsc2VcbiAgfVxuICBnZXQgZGlzYWJsZVByZXZCdXR0b24oKXtcbiAgICByZXR1cm4gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLmRpc2FibGVQcmV2QnV0dG9uIHx8IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgdmlzaWJsZSBIaXRMaXN0IGNvbHVtbnMgb2YgT2JqZWN0IHR5cGU6IGB7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9YFxuICAgKiBAcmV0dXJucyB7QXJyYXkuPHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ30+fSBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSB2aXNpYmxlIEhpdExpc3QgY29sdW1uc1xuICAgKiAqL1xuICBnZXQgY29sdW1ucygpe3JldHVybiB0aGlzLl9jb25maWcuY29sdW1uc31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBhbGwgSGl0TGlzdCBjb2x1bW5zIG9mIE9iamVjdCB0eXBlOiBge2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfWBcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKiAqL1xuICBnZXQgYWxsQ29sdW1ucygpe3JldHVybiB0aGlzLl9jb25maWcuYWxsQ29sdW1uc31cblxuICBnZXQgaGl0bGlzdElEKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5jb21wb25lbnRJZH1cbiAgZ2V0IHBhZ2VJRCgpe3JldHVybiB0aGlzLl9jb25maWcucGFnZUlkfVxuICBnZXQgbGFuZ3VhZ2UoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmxhbmd1YWdlfVxuICBnZXQgc2VydmljZVVSTCgpe3JldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7dGhpcy5fY29uZmlnLnNlcnZpY2VVcmx9YH1cbiAgZ2V0IHBhZ2VTdGF0ZUlEKCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQYWdlU3RhdGVJZCcpPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUGFnZVN0YXRlSWQnKS52YWx1ZTp1bmRlZmluZWR9XG4gIGdldCBzb3J0aW5nUGFnaW5nVmFsdWVzKCl7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zb3J0aW5nUGFnaW5nVmFsdWVzIT1udWxsP3RoaXMuX2NvbmZpZy5zb3J0aW5nUGFnaW5nVmFsdWVzOnt9XG4gIH1cbiAgc2V0IHNvcnRpbmdQYWdpbmdWYWx1ZXModmFsKXtcbiAgICB0aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHZhbDtcbiAgfVxuXG4gIHN0YXRpYyBfZml4SnNvbkRhdGUoanNvbkRhdGUpIHtcbiAgICBpZiAoIShqc29uRGF0ZSAmJiBZICYmIFkuTGFuZy5pc0Z1bmN0aW9uKGpzb25EYXRlLnJlcGxhY2UpKSkge3JldHVybiBqc29uRGF0ZTt9XG4gICAgbGV0IGNvbnN0ciA9IGpzb25EYXRlLnJlcGxhY2UobmV3IFJlZ0V4cChcIl4vRGF0ZVxcXFwoKFstK10/XFxcXGQrKVxcXFwpLyRcIiksIFwibmV3IERhdGUoJDEpXCIpO1xuICAgIGlmIChjb25zdHIgPT0ganNvbkRhdGUpIHtyZXR1cm4ganNvbkRhdGU7fVxuICAgIHJldHVybiBldmFsKGNvbnN0cik7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgY29uZmlnIGZvciBhIEhpdExpc3QgaWYgaXQncyBpbml0aWFsaXNlZCBvbiB0aGUgcGFnZVxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgYWxsQ29sdW1uczpBcnJheSxcbiAgICogIGNhcHRpb25zOk9iamVjdCxcbiAgICogIGNsaWVudElkOlN0cmluZyxcbiAgICogIGNvbHVtbnM6QXJyYXksXG4gICAqICBjb21wb25lbnRJZDpTdHJpbmcsXG4gICAqICBoYXNoZWRQcm9qZWN0SWQ6U3RyaW5nLFxuICAgKiAgaGl0bGlzdERhdGE6QXJyYXksXG4gICAqICBsYW5ndWFnZTpOdW1iZXIsXG4gICAqICBuZXh0VGV4dDpTdHJpbmcsXG4gICAqICBub0luaXRpYWxMb2FkOkJvb2xlYW4sXG4gICAqICBwYWdlQWpheEVuYWJsZWQ6Qm9vbGVhbixcbiAgICogIHBhZ2VJZDpTdHJpbmcsXG4gICAqICBwcmV2VGV4dDpTdHJpbmcsXG4gICAqICBwcmV2aWV3OkJvb2xlYW4sXG4gICAqICBzZWFyY2hJdGVtczpBcnJheSxcbiAgICogIHNlYXJjaFZhbHVlczpBcnJheSxcbiAgICogIHNlcnZpY2VVcmw6U3RyaW5nLFxuICAgKiAgc2VydmljZVVybE1ldGFEYXRhOlN0cmluZyxcbiAgICogIHNob3dTaW5nbGVWaWV3T25Sb3dTZWxlY3Q6Qm9vbGVhbixcbiAgICogIHNpbmdsZVZpZXdBcGlVcmw6U3RyaW5nLFxuICAgKiAgc2luZ2xlVmlld0Zvcm1zQ2h1bmtBcGlVcmw6U3RyaW5nLFxuICAgKiAgc2luZ2xlVmlld1RleHRzOk9iamVjdCxcbiAgICogIHNvcnRpbmdQYWdpbmdWYWx1ZXM6T2JqZWN0LFxuICAgKiAgc3R5bGVzOk9iamVjdCxcbiAgICogIHZlcnNpb246U3RyaW5nXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqICovXG4gIHN0YXRpYyBnZXRPcmlnaW5hbENvbmZpZygpe1xuICAgIGxldCBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0Jyk7XG4gICAgaWYoc2NyaXB0cyl7XG4gICAgICBsZXQgaT1zY3JpcHRzLmxlbmd0aCxcbiAgICAgICAgICBjZmcgPSAvKFlcXC5SZXBvcnRhbFxcLkhpdExpc3QsKVxccyguKj8pXFwpOy9naTtcbiAgICAgIHdoaWxlKGktLSl7XG4gICAgICAgIGxldCBzY3JpcHQgPSBzY3JpcHRzW2ldLnRleHQ7XG4gICAgICAgIGlmKHNjcmlwdC5pbmRleE9mKCdZLlJlcG9ydGFsLkhpdExpc3QsJyk+LTEpe1xuICAgICAgICAgIGxldCBleGVjID0gY2ZnLmV4ZWMoc2NyaXB0KTtcbiAgICAgICAgICByZXR1cm4gKGV4ZWMhPW51bGwgJiYgZXhlY1syXSk/IEpTT04ucGFyc2UoZXhlY1syXSk6IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIaXRsaXN0IGNvbmZpZyBpcyBub3QgcHJlc2VudCBvbiB0aGUgcGFnZScpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpdGxpc3RTZXR1cFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1zZXR1cC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAwNy4wOS4yMDE2LlxuICovXG5cbmltcG9ydCBIaXRsaXN0RGF0YXNvdXJjZSBmcm9tIFwiLi9oaXRsaXN0LWRhdGFzb3VyY2VcIjtcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSBcInItcmVwb3J0YWwtYmFzZVwiO1xuXG53aW5kb3cuUmVwb3J0YWwgPSB3aW5kb3cuUmVwb3J0YWwgfHwge307XG5SZXBvcnRhbEJhc2UubWl4aW4od2luZG93LlJlcG9ydGFsLHtcbiAgSGl0bGlzdERhdGFzb3VyY2Vcbn0pO1xuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdERhdGFzb3VyY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9tYWluLmpzIiwiLy9AZmxvd1xyXG5pbXBvcnQgSGl0bGlzdERTIGZyb20gXCJyLWhpdGxpc3QtZGF0YXNvdXJjZVwiO1xyXG5pbXBvcnQgdW5pb25CeSBmcm9tIFwibG9kYXNoL3VuaW9uQnlcIjtcclxuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tICdyLXJlcG9ydGFsLWJhc2UnO1xyXG5cclxudHlwZSBPcHRpb25zID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBuYW1lIG9mIGEgZ2xvYmFsIGNvbmZpZyB2YXJpYWJsZSBwYXNzZWRcclxuICAgICovXHJcbiAgICBjb25maWc6IHN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGRpc3BsYXkgdGh1bWJzIGFzIGltYWdlIHBsYWNlaG9sZGVycyBpbnN0ZWFkIG9mIG1lZGlhIGljb25zXHJcbiAgICAqL1xyXG4gICAgdGh1bWJzUGxhY2Vob2xkZXI6IGJvb2xlYW4sXHJcbiAgICBjb21wb25lbnQ6IGFueVxyXG59XHJcblxyXG50eXBlIHBhcnNlZERhdGFSb3cgPSB7XHJcbiAgICBpZDogc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyxcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxyXG4gICAgaW1hZ2U/OiBzdHJpbmcsXHJcbiAgICBtZWRpYXR5cGU6ICd2aWRlbycgfCAnYXVkaW8nIHwgJ2ltYWdlJyxcclxuICAgIGxpbms6IHN0cmluZyxcclxuICAgIFt4OnN0cmluZ106c3RyaW5nLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRFNBYnN0cmFjdGlvbihvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgICBjb25zdCBEUyA9IG5ldyBIaXRsaXN0RFMoKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IG9wdGlvbnMuY29tcG9uZW50O1xyXG4gICAgbGV0IGNvbmZpZztcclxuICAgIGNvbnN0IHF1ZXJ5ID0gUmVwb3J0YWxCYXNlLmxvY2F0aW9uRGVzZXJpYWxpemUoKS5xdWVyeTtcclxuXHJcbiAgICBzZXR1cERhdGFMaXN0ZW5lcihvcHRpb25zLmNvbmZpZyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXVuY2hlcyBsaXN0ZW5lciBmb3IgYFkuR2xvYmFsLnJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlYCBldmVudCB3aXRoaW4gWVVJIHdoaWNoIGlzIHRyaWdnZXJlZCBldmVyeSB0aW1lIHRoZSBmaWx0ZXIgcGFuZWwgdXBkYXRlcyBvciBvbiBpbml0aWFsIGxvYWRcclxuICAgICAqICovXHJcbiAgICBmdW5jdGlvbiBzZXR1cERhdGFMaXN0ZW5lcihjb25maWdOYW1lKSB7XHJcbiAgICAgICAgaWYgKFkgJiYgWS5HbG9iYWwpIHtcclxuICAgICAgICAgICAgWS5HbG9iYWwub24oXCJyZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZVwiLCBmaWx0ZXJJbmZvID0+IHtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxpc2VDb25maWcoY29uZmlnTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoRFMgJiYgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgRFMubW9kaWZpZXIgPSBmaWx0ZXJJbmZvOyAvLyBmaWx0ZXIgaW5mb3JtYXRpb24gYXMgYSBtb2RpZmllciBmb3IgZGF0YSBmZXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIERTLmluaXRpYWxEYXRhTG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHByb2Nlc3NEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goaGFuZGxlRGF0YUxvYWRpbmdFcnJvcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lVSSBpcyBub3QgZGVmaW5lZCBvciBhY2Nlc3NpYmxlLCBjYW5ub3Qgc2V0IHVwIGEgXCJyZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZVwiIGxpc3RlbmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpc2VDb25maWcoY29uZmlnTmFtZSkge1xyXG4gICAgICAgIGlmICghY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmICghd2luZG93W2NvbmZpZ05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbmZpZyBpcyBub3QgcGFzc2VkIGZyb20gYmFja2VuZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uZmlnID0gd2luZG93W2NvbmZpZ05hbWVdO1xyXG4gICAgICAgICAgICBpZihjb25maWcuaW5kaXZpZHVhbFJlY29yZHMgJiYgdHlwZW9mIGNvbmZpZy5pbmRpdmlkdWFsUmVjb3JkcyA9PT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzID0gY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzLnNwbGl0KCcsJykubWFwKGl0ZW09Pml0ZW0udHJpbSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoeyBjb25maWcgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0RhdGEoZGF0YSwgbW9kZSA9ICdyZXBsYWNlJykge1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGE6IHBhcnNlZERhdGFSb3dbXSA9IGRhdGEubWFwKChkYXRhUm93LCByb3dJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyc2VkUm93OiBwYXJzZWREYXRhUm93ID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGlyID0gY29uZmlnLmluZGl2aWR1YWxSZWNvcmRzIHx8IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhRmllbGRzID0gWydpZCcsICd0aXRsZScsICdkZXNjcmlwdGlvbicsICdpbWFnZScsICdhdWRpbycsICd2aWRlbycsICd0YWdzJ10uY29uY2F0KGlyKTtcclxuICAgICAgICAgICAgZGF0YUZpZWxkcy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5JRCA9IGNvbmZpZ1trZXldO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkUm93W2tleV0gPSBwcmVwYXJlRGF0YShkYXRhUm93W2NvbHVtbklEIHx8IGtleV0sIGtleSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBpbWFnZSAtIHdlIG1pZ2h0IHdhbnQgdG8gdXNlIGEgcGxhY2Vob2xkZXIgYXMgdGhlIHRodW1iLCBhbmQgbG9hZCB0aGUgZnVsbCBpbWFnZSBpbiBiYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlZFJvdy5pbWFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50aHVtYnNQbGFjZWhvbGRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkUm93LnBsYWNlaG9sZGVyID0gcGFyc2VkUm93LmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFJvdy5pbWFnZSA9IHBhcnNlZFJvdy5pbWFnZS5yZXBsYWNlKC9fdGh1bWIvZ2ksICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgbWVkaWF0eXBlIG9yIGEgcGxhY2Vob2xkZXIgaWNvblxyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJzZWRSb3cubWVkaWF0eXBlICYmIFsndmlkZW8nLCAnYXVkaW8nLCAnaW1hZ2UnXS5pbmRleE9mKGtleSkgPiAtMSAmJiBjb25maWdba2V5XSAmJiBwYXJzZWRSb3dba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZFJvdy5tZWRpYXR5cGUgPSBrZXlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgaWQgZm9yIGtleXNcclxuICAgICAgICAgICAgcGFyc2VkUm93LmlkID0gZGF0YVJvdy5yZXNwb25zZWlkID8gZGF0YVJvdy5yZXNwb25zZWlkIDogcm93SW5kZXg7XHJcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBsaW5rIHBhc3NlZCBhcyBgc2xpbmtgIHByb3BlcnR5IGluIGRhdGFcclxuICAgICAgICAgICAgaWYgKGRhdGFSb3cuc2xpbmspIHtcclxuICAgICAgICAgICAgICAgIGxldCBsID0gZGF0YVJvdy5zbGluaztcclxuICAgICAgICAgICAgICAgIHBhcnNlZFJvdy5saW5rID0gKC9ocmVmPScoLis/KScvZ2kpLmV4ZWMobCkucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFJvdztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy91cGRhdGUgc3RhdGUgd2l0aCB0aGUgbmV3IHNldCBvZiBkYXRhIG9yIGEgbWVyZ2VkIGRhdGFcclxuICAgICAgICBpZiAobW9kZSA9PT0gJ3JlcGxhY2UnKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogbmV3RGF0YSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICdhcHBlbmQnKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbLi4ucHJldlN0YXRlLml0ZW1zLCAuLi5uZXdEYXRhXSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnbWVyZ2UnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vZGUpO1xyXG4gICAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogdW5pb25CeShuZXdEYXRhLCBwcmV2U3RhdGUuaXRlbXMsICdpZCcpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfRhdGA0LXQvSDQt9C90LDQtdGCINGH0YLQvicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbWFzc2FnZSBkYXRhIHRvIGZpdCB0aGUgdHlwZSB3ZSBleHBlY3QgdG8gcmVjZWl2ZSBpbiByZWFjdCB2aWV3XHJcbiAgICAgKiAqL1xyXG4gICAgZnVuY3Rpb24gcHJlcGFyZURhdGEoZGF0YTphbnksIHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcmVwYXJlRGF0YScsZGF0YSx0eXBlKVxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gKC9zcmM9JyguKz8pJy9naSkuZXhlYyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgIT0gbnVsbCAmJiByZXN1bHRbMV0gPyByZXN1bHRbMV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcclxuICAgICAgICAgICAgY2FzZSAndGl0bGUnOnJldHVybiAhKGRhdGEuaW5kZXhPZignLScpID4gLTEgJiYgZGF0YS50cmltKCkubGVuZ3RoID09PSAxKSA/IGRhdGEudHJpbSgpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjYXNlICd2aWRlbyc6XHJcbiAgICAgICAgICAgIGNhc2UgJ2F1ZGlvJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAhKGRhdGEuaW5kZXhPZignLScpID4gLTEgJiYgZGF0YS50cmltKCkubGVuZ3RoID09PSAxKSA/IGdlbmVyYXRlTWVkaWFMaW5rKGRhdGEudHJpbSgpLCB0eXBlKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY2FzZSAndGFncyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YSAmJiAoZGF0YS5pbmRleE9mKCcsJykgPiAtMSA/IGRhdGEuc3BsaXQoJywnKSA6IGRhdGEuaW5kZXhPZignLScpID4gLTEgJiYgZGF0YS50cmltKCkubGVuZ3RoID09PSAxID8gdW5kZWZpbmVkIDogZGF0YS50cmltKCkpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVNZWRpYUxpbmsoZmlsZU5hbWU6c3RyaW5nLCB0eXBlOiAnYXVkaW8nfCd2aWRlbycpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZW5lcmF0ZU1lZGlhTGluaycsZmlsZU5hbWUsdHlwZSlcclxuICAgICAgICBjb25zdCBkc05hbWUgPSBjb25maWcuc3VydmV5SUQ7XHJcbiAgICAgICAgcmV0dXJuIGAvcmVwb3J0YWwvV3lzaXd5Zy9SZXBvcnQvJHtxdWVyeS5yZXBvcnRpZH0vJHtkc05hbWV9LyR7dHlwZX0vJHtmaWxlTmFtZX1gXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGF0YUxvYWRpbmdFcnJvcihlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yOiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtczogW11cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBEUy5sb2FkTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIERTLm5leHRQYWdlKClcclxuICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgRFMubG9hZFByZXZpb3VzUGFnZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gRFMucHJldmlvdXNQYWdlKClcclxuICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgRFMubG9hZE1vcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIERTLm5leHRQYWdlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcHJvY2Vzc0RhdGEocmVzcG9uc2UsICdhcHBlbmQnKSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xyXG4gICAgfTtcclxuXHJcbiAgICBEUy5pbml0aWFsTG9hZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gRFMuaW5pdGlhbERhdGFMb2FkKClcclxuICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc0RhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcclxuICAgIH07XHJcblxyXG4gICAgRFMuZ2V0UGFnZUluZm8gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFzUGFnZUluZm8gPSBEUy5wYWdlSW5mbyAmJiBEUy5zb3J0aW5nUGFnaW5nVmFsdWVzICYmIERTLnNvcnRpbmdQYWdpbmdWYWx1ZXMudG90YWxIaXRzO1xyXG4gICAgICAgIHJldHVybiBoYXNQYWdlSW5mbyA/IGAke0RTLnBhZ2VJbmZvfSBvZiAke0RTLnNvcnRpbmdQYWdpbmdWYWx1ZXMudG90YWxIaXRzfWAgOiAnJztcclxuICAgIH07XHJcblxyXG4gICAgRFMuY29uZmlnID0gKCkgPT4geyByZXR1cm4gY29uZmlnICE9IG51bGwgPyBjb25maWcgOiBpbml0aWFsaXNlQ29uZmlnKG9wdGlvbnMuY29uZmlnKSB9O1xyXG5cclxuICAgIHJldHVybiBEU1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RTQWJzdHJhY3Rpb24uanMiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIFB1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltZyBmcm9tICdQcm9wb3J0aW9uYWxJbWFnZSc7XHJcblxyXG5jb25zdCBNRURJQV9UWVBFUyA9IFsnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nXTtcclxuXHJcbmNsYXNzIEltYWdlR3JpZFRpbGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50e1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSB0aWxlIGZvciBpbWFnZSBsaXN0XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmltYWdlIC0gaW1hZ2UgdXJsXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyIC0gYSBwbGFjZWhvbGRlciBpbWFnZVxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlclNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIuIEJ5IGRlZmF1bHQgaXQncyB0aGUgc2FtZSBhcyBmb3IgdGhlIGBzcmNgIGltYWdlLCBidXQgc2V0IHRvIGBpbml0aWFsYCBvciBvdGhlciB2YWxpZCBgYmFja2dyb3VuZC1zaXplYCB2YWx1ZSB0byBvdmVycmlkZS5cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMubWVkaWF0eXBlIC0gYSBkZWZhdWx0IG1lZGlhIGljb24gaW5zdGVhZCBvZiB0aGUgcGxhY2Vob2xkZXIgaW1hZ2U6IG9uZSBvZiBgaW1hZ2VgLGBhdWRpb2AsYHZpZGVvYFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuaWNvbkNvbG9yPVwiI2NjY2NjY1wiXSAtIGRlZmF1bHQgcGxhY2Vob2xkZXIgbWVkaWEgaWNvbiBjb2xvclxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuaWNvblNpemU9NDhdIC0gZGVmYXVsdCBwbGFjZWhvbGRlciBtZWRpYSBpY29uIHNpemVcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmFzcGVjdD1cIjE2OjlcIl0gLSBhc3BlY3QgcmF0aW8gb2YgdGhlIGltYWdlIHRvIGJlIGluIHRoZSB0aWxlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMudGl0bGUgLSB0aXRsZSBvZiB0aGUgdmlkZW9cclxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuZGVzY3JpcHRpb24gLSBkZXNjcmlwdGlvbiBvZiB0aGUgdmlkZW9cclxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByb3BzLmFjdGlvbkljb24gLSBpY29uIHRvIGRpc3BsYXkgYXMgdGhlIGFjdGlvbiBpY29uLiBJdCBhbHNvIGhhcyB0byBoYXZlIGEgY2FsbGJhY2sgYXR0YWNoZWQgdG8gaXQgd2hlbiBwYXNzZWQuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMub25TZWxlY3QgLSBjYWxsYmFjayB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSBsaW5rIGlzIGNsaWNrZWRcclxuICAgKiAqL1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgYWN0aW9uQnV0dG9uID0gbnVsbDtcclxuICAgIGNvbnN0IHthY3Rpb25JY29uLG9uU2VsZWN0LGFzcGVjdCx0aXRsZSxwbGFjZWhvbGRlclNpemluZyxpbWFnZSxkZXNjcmlwdGlvbn09dGhpcy5wcm9wcztcclxuICAgIGlmICh0aGlzLnByb3BzLmFjdGlvbkljb24pIHtcclxuICAgICAgYWN0aW9uQnV0dG9uID0gPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1lZGl0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1hY3Rpb24taWNvblwiPnthY3Rpb25JY29ufTwvZGl2PlxyXG4gICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWNvdmVyXCIgb25DbGljaz17b25TZWxlY3R9PlxyXG4gICAgICAgICAgPEltZ1xyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cclxuICAgICAgICAgICAgc2l6aW5nPVwiY292ZXJcIlxyXG4gICAgICAgICAgICBwcmVsb2FkPXt0cnVlfVxyXG4gICAgICAgICAgICBmYWRlPXt0cnVlfVxyXG4gICAgICAgICAgICBhbHQ9e3RpdGxlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5fY29tcHV0ZVRpbGVUeXBlKCl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyU2l6aW5nPXtwbGFjZWhvbGRlclNpemluZ31cclxuICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLW1ldGFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS10aXRsZSBlbGxpcHNpc1wiIG9uQ2xpY2s9e29uU2VsZWN0fT57dGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tZGVzY3JpcHRpb24gZWxsaXBzaXNcIj57ZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHthY3Rpb25CdXR0b259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgX2NvbXB1dGVUaWxlVHlwZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHtwbGFjZWhvbGRlcixtZWRpYXR5cGUsaWNvblNpemUsaWNvbkNvbG9yfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGlmICghcGxhY2Vob2xkZXIgJiYgbWVkaWF0eXBlKSB7XHJcbiAgICAgICAgaWYgKE1FRElBX1RZUEVTLmluZGV4T2YobWVkaWF0eXBlKSA9PT0gLTEpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIHR5cGUgXCIke21lZGlhdHlwZX1cIiBpcyBzcGVjaWZpZWRgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaWNvbiA9IEltYWdlR3JpZFRpbGUuaWNvblNlcnZlcihtZWRpYXR5cGUsIGljb25TaXplLCBpY29uQ29sb3IpO1xyXG4gICAgICAgIHJldHVybiAnZGF0YTppbWFnZS9zdmcreG1sLCcgKyBlc2NhcGUoaWNvbik7XHJcbiAgICAgIH0gZWxzZSBpZighIXBsYWNlaG9sZGVyKXtcclxuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZXNjYXBlKEltYWdlR3JpZFRpbGUuaWNvblNlcnZlcigndW5rbm93bicsIGljb25TaXplLCBpY29uQ29sb3IpKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIGljb24gd2l0aCBhIGNvcnJlY3QgZmlsbCBjb2xvclxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gaWNvbiBuYW1lIChvbmUgb2YgYGltYWdlYCwgYHZpZGVvYCwgYGF1ZGlvYClcclxuICAgKiBAcGFyYW0ge051bWJlcn0gW3NpemU9MjRdIC0gaWNvbiBzaXplIGluIHBpeGVsc1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbZmlsbD1cIiNjY2NjY2NcIl0gLSB2YWxpZCBDU1MgY29sb3IgZGVjbGFyYXRpb25cclxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gICAqICovXHJcbiAgc3RhdGljIGljb25TZXJ2ZXIobmFtZSwgc2l6ZSA9IDQ4LCBmaWxsID0gXCIjY2NjY2NjXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGljb25zID0ge1xyXG4gICAgICAgIGltYWdlOiBgPHBhdGggZD1cIk0yMSAxOVY1YzAtMS4xLS45LTItMi0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ6TTguNSAxMy41bDIuNSAzLjAxTDE0LjUgMTJsNC41IDZINWwzLjUtNC41elwiLz5gLFxyXG4gICAgICAgIGF1ZGlvOiBgPHBhdGggZD1cIk0xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnpcIi8+YCxcclxuICAgICAgICB2aWRlbzogYDxwYXRoIGQ9XCJNMTggNGwyIDRoLTNsLTItNGgtMmwyIDRoLTNsLTItNEg4bDIgNEg3TDUgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY0aC00elwiLz5gLFxyXG4gICAgICAgIHVua25vd246IGA8cGF0aCBkPVwiTTIxIDV2Ni41OWwtMy0zLjAxLTQgNC4wMS00LTQtNCA0LTMtMy4wMVY1YzAtMS4xLjktMiAyLTJoMTRjMS4xIDAgMiAuOSAyIDJ6bS0zIDYuNDJsMyAzLjAxVjE5YzAgMS4xLS45IDItMiAySDVjLTEuMSAwLTItLjktMi0ydi02LjU4bDMgMi45OSA0LTQgNCA0IDQtMy45OXpcIi8+YCxcclxuICAgICAgfTtcclxuICAgICAgaWYgKCFpY29uc1tuYW1lXSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaWNvbiBcIiR7bmFtZX1cIiBpcyBub3Qgb24gdGhlIGxpc3RgKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYDxzdmcgZmlsbD1cIiR7ZmlsbH1cIiBoZWlnaHQ9XCIke3NpemV9XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiJHtzaXplfVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4ke2ljb25zW25hbWVdfTwvc3ZnPmBcclxuICAgIH0gY2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuSW1hZ2VHcmlkVGlsZS5wcm9wVHlwZXMgPSB7XHJcbiAgaW1hZ2UgICAgICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhY2Vob2xkZXIgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhY2Vob2xkZXJTaXppbmc6IFByb3BUeXBlcy5vbmVPZihbJ2NvbnRhaW4nLCAnY292ZXInLCAnaW5pdGlhbCddKSxcclxuICBtZWRpYXR5cGUgICAgICAgIDogUHJvcFR5cGVzLm9uZU9mKE1FRElBX1RZUEVTKSxcclxuICBpY29uQ29sb3IgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpY29uU2l6ZSAgICAgICAgIDogUHJvcFR5cGVzLm51bWJlcixcclxuICBhc3BlY3QgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0aXRsZSAgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZXNjcmlwdGlvbiAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhY3Rpb25JY29uICAgICAgIDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25TZWxlY3QgICAgICAgICA6IFByb3BUeXBlcy5mdW5jXHJcbn07XHJcblxyXG5JbWFnZUdyaWRUaWxlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpY29uQ29sb3I6IFwiI2NjY2NjY1wiLFxyXG4gIGljb25TaXplIDogNDgsXHJcbiAgYXNwZWN0ICAgOiBcIjE2OjlcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JpZFRpbGVcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlR3JpZFRpbGUvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIFB1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlR3JpZFRpbGUgZnJvbSAnLi4vSW1hZ2VHcmlkVGlsZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIGBJbWFnZUdyaWRgIGlzIGEgc3RhdGVsZXNzIFJlYWN0IGNvbXBvbmVudCB0aGF0IGFsbG93cyB0byBjb21wdXRlIGFuIGFycmF5IG9mIEltYWdlR3JpZFRpbGVzIGZyb20gYGl0ZW1zYCBwYXNzZWQgaW4gcHJvcHNcclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzLml0ZW1zIC0gYW4gYXJyYXkgb2YgaXRlbXMgYHtpZDpOdW1iZXJ8U3RyaW5nLCBpbWFnZTpTdHJpbmcsIG1lZGlhdHlwZTo/U3RyaW5nLCBwbGFjZWhvbGRlcjo/U3RyaW5nLCB0aXRsZTpTdHJpbmcsZGVzY3JpcHRpb246U3RyaW5nfWBcclxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmFzcGVjdCAtIGFzcGVjdCByYXRpbyBmb3IgdGhlIEltYWdlR3JpZFRpbGUgaW1hZ2VcclxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IHByb3BzLmFjdGlvbkljb24gLSBhY3Rpb24gaWNvbiBKU1ggd2l0aCBhIGJvdW5kIGhhbmRsZXJcclxuICogQHBhcmFtIHs/U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlclNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIuIEJ5IGRlZmF1bHQgaXQncyB0aGUgc2FtZSBhcyBmb3IgdGhlIGBzcmNgIGltYWdlLCBidXQgc2V0IHRvIGBpbml0aWFsYCBvciBvdGhlciB2YWxpZCBgYmFja2dyb3VuZC1zaXplYCB2YWx1ZSB0byBvdmVycmlkZS5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMub25TZWxlY3QgLSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkIG9uXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBwcm9wcy5kdW1teUl0ZW1zIC0gZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZCBvblxyXG4gKiAqL1xyXG5jbGFzcyBJbWFnZUdyaWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuXHJcbiAgaXRlbUNsaWNrSGFuZGxlciA9IChpdGVtKSA9PiAoZXZlbnQpID0+IHRoaXMucHJvcHMub25TZWxlY3QoaXRlbSk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtpdGVtcywgZHVtbXlJdGVtcywgYXNwZWN0LCBwbGFjZWhvbGRlclNpemluZywgYWN0aW9uSWNvbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRcIj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgPEltYWdlR3JpZFRpbGVcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cclxuICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICBtZWRpYXR5cGU9e2l0ZW0ubWVkaWF0eXBlfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpdGVtLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyU2l6aW5nPXtpdGVtLmltYWdlP3BsYWNlaG9sZGVyU2l6aW5nOidpbml0aWFsJ31cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBhY3Rpb25JY29uPXt0eXBlb2YgYWN0aW9uSWNvbj09PSdmdW5jdGlvbic/YWN0aW9uSWNvbihpdGVtKTpudWxsfVxyXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLml0ZW1DbGlja0hhbmRsZXIoaXRlbSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICB7ZHVtbXlJdGVtcyAmJiB0aGlzLnJlbmRlckR1bW15SXRlbXMoZHVtbXlJdGVtcyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlckR1bW15SXRlbXMoY291bnQpIHtcclxuICAgIGNvbnN0IGR1bW15SXRlbXMgPSBbXTtcclxuICAgIHdoaWxlIChjb3VudC0tKSB7XHJcbiAgICAgIGR1bW15SXRlbXMucHVzaCg8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGVcIiBrZXk9e2BkdW1teSR7Y291bnR9YH0vPilcclxuICAgIH1cclxuICAgIHJldHVybiBkdW1teUl0ZW1zXHJcbiAgfVxyXG59XHJcblxyXG5JbWFnZUdyaWQucHJvcFR5cGVzID0ge1xyXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXHJcbiAgYXNwZWN0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGFjdGlvbkljb246IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gIHBsYWNlaG9sZGVyU2l6aW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGR1bW15SXRlbXM6IFByb3BUeXBlcy5udW1iZXJcclxufTtcclxuXHJcbkltYWdlR3JpZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZHVtbXlJdGVtczogMTJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JpZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlR3JpZC9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZylcclxuICAgICAgICBpZiAoY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBjb25maWcucGFnaW5hdGlvbjtcclxuICAgICAgICAgICAgaWYgKHBhZ2luYXRpb24gPT09ICdjb250aW51b3VzJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGludW91c05hdmlnYXRpb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2luZ05hdmlnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnRpbnVvdXNOYXZpZ2F0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbG9hZE1vcmUsIGRpc2FibGVOZXh0QnV0dG9uIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uUm93XCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gZmxhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9hZE1vcmV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVOZXh0QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPkxvYWQgbW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHBhZ2luZ05hdmlnYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBsb2FkUHJldmlvdXNQYWdlLFxyXG4gICAgICAgICAgICBsb2FkTmV4dFBhZ2UsXHJcbiAgICAgICAgICAgIGRpc2FibGVOZXh0QnV0dG9uLFxyXG4gICAgICAgICAgICBkaXNhYmxlUHJldkJ1dHRvbixcclxuICAgICAgICAgICAgcGFnZUluZm8sXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBhY2NlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvYWRQcmV2aW91c1BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVQcmV2QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ1JFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTJyl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsQnV0dG9uIGFjY2VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9hZE5leHRQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlTmV4dEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdSRVBPUlRfU0lOR0xFVklFV19ORVhUJyl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57cGFnZUluZm99PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VmlkZW8vTmF2aWdhdGlvbi5qcyIsIi8vQGZsb3dcclxuaW1wb3J0IHR5cGUge1N0YXRlLCBQcm9wcyB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZUdyaWQgZnJvbSBcIi4uL0ltYWdlR3JpZFwiO1xyXG5pbXBvcnQgU2luZ2xlVmlldyBmcm9tIFwiLi4vU2luZ2xlVmlld1wiO1xyXG5pbXBvcnQgRFNBYnN0cmFjdGlvbiBmcm9tICcuLi9EU0Fic3RyYWN0aW9uJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24nXHJcbmltcG9ydCBTaW5nbGVWaWV3UmVzcG9uc2VzIGZyb20gJy4uL1NpbmdsZVZpZXcvUmVzcG9uc2VzJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFZpZGVvIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xyXG4gIERTID0gRFNBYnN0cmFjdGlvbih7XHJcbiAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLFxyXG4gICAgdGh1bWJzUGxhY2Vob2xkZXI6IHRoaXMucHJvcHMudGh1bWJzUGxhY2Vob2xkZXIsXHJcbiAgICBjb21wb25lbnQ6IHRoaXNcclxuICB9KTtcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpdGVtczogbnVsbCxcclxuICAgIGVycm9yOiBmYWxzZSxcclxuICAgIGNvbmZpZzogbnVsbCxcclxuICAgIHNpbmdsZVZpZXdNb2RlOiAndmlldycsXHJcbiAgICBzaW5nbGVWaWV3OiB7XHJcbiAgICAgIGxpbms6ICcnXHJcbiAgICB9LFxyXG4gICAgc2luZ2xlVmlld1Zpc2libGU6IGZhbHNlLFxyXG4gICAgc2luZ2xlVmlld0Rpc2FibGVQcmV2OiBmYWxzZSxcclxuICAgIHNpbmdsZVZpZXdEaXNhYmxlTmV4dDogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgdHJhbnNsYXRlID0gdGhpcy5EUy5pMThuLmJpbmQodGhpcy5EUyk7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXRlbXMsIHNpbmdsZVZpZXdWaXNpYmxlLCBlcnJvciwgY29uZmlnIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IHJlbmRlciA9IG51bGw7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLkRTKTtcclxuICAgIGlmICghZXJyb3IgJiYgQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHJlbmRlciA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YEdyaWRDb250YWluZXIgJHshc2luZ2xlVmlld1Zpc2libGUgPyAnR3JpZFZpZXcnIDogJyd9YH0+XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJTaW5nbGVWaWV3KCl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZENvbnRhaW5lclwiIHN0eWxlPXt7IGRpc3BsYXk6ICFzaW5nbGVWaWV3VmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIDxJbWFnZUdyaWRcclxuICAgICAgICAgICAgICBhc3BlY3Q9XCIxNjo5XCJcclxuICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdH1cclxuICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XHJcbiAgICAgICAgICAgICAgYWN0aW9uSWNvbj17Y29uZmlnLmNhbkVkaXQgPyB0aGlzLmFjdGlvbkljb24gOiBudWxsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJOYXZpZ2F0aW9uKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuRFMpIHtcclxuICAgICAgICByZW5kZXIgPSAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdyaWRDb250YWluZXIgSW1hZ2VHcmlkXCI+e3RoaXMuZGF0YUxvYWRpbmdNZXNzYWdlKCl9PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSGl0bGlzdERhdGFzb3VyY2UgaXMgbm90IGF2YWlsYWJsZScpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZW5kZXJcclxuICB9XHJcblxyXG4gIHJlbmRlck5hdmlnYXRpb24oKSB7XHJcbiAgICBjb25zdCB7IGxvYWRQcmV2aW91c1BhZ2UsIGxvYWROZXh0UGFnZSwgbG9hZE1vcmUsIGRpc2FibGVOZXh0QnV0dG9uLCBkaXNhYmxlUHJldkJ1dHRvbiwgZ2V0UGFnZUluZm8gfSA9IHRoaXMuRFM7XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uUHJvcHMgPSB7XHJcbiAgICAgIGxvYWRQcmV2aW91c1BhZ2UsXHJcbiAgICAgIGxvYWROZXh0UGFnZSxcclxuICAgICAgbG9hZE1vcmUsXHJcbiAgICAgIGRpc2FibGVOZXh0QnV0dG9uLFxyXG4gICAgICBkaXNhYmxlUHJldkJ1dHRvbixcclxuICAgICAgcGFnZUluZm86IGdldFBhZ2VJbmZvKCksXHJcbiAgICAgIGNvbmZpZzogdGhpcy5zdGF0ZS5jb25maWcsXHJcbiAgICAgIHRyYW5zbGF0ZTogdGhpcy50cmFuc2xhdGVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPE5hdmlnYXRpb24gey4uLm5hdmlnYXRpb25Qcm9wc30gLz5cclxuICB9XHJcblxyXG4gIHJlbmRlclNpbmdsZVZpZXcoKSB7XHJcbiAgICBjb25zdCB7IHNpbmdsZVZpZXdWaXNpYmxlLCBzaW5nbGVWaWV3LCBzaW5nbGVWaWV3RGlzYWJsZVByZXYsIHNpbmdsZVZpZXdEaXNhYmxlTmV4dCwgc2luZ2xlVmlld01vZGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gc2luZ2xlVmlld1Zpc2libGUgPyAoXHJcbiAgICAgIDxTaW5nbGVWaWV3XHJcbiAgICAgICAgcmV0dXJuVG9HcmlkQWN0aW9uPXt0aGlzLnJldHVyblRvR3JpZH1cclxuICAgICAgICBsb2FkUHJldmlvdXNJdGVtPXt0aGlzLmxvYWRQcmV2aW91c0l0ZW19XHJcbiAgICAgICAgbG9hZE5leHRJdGVtPXt0aGlzLmxvYWROZXh0SXRlbX1cclxuICAgICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXY9e3NpbmdsZVZpZXdEaXNhYmxlUHJldn1cclxuICAgICAgICBzaW5nbGVWaWV3RGlzYWJsZU5leHQ9e3NpbmdsZVZpZXdEaXNhYmxlTmV4dH1cclxuICAgICAgPlxyXG4gICAgICAgIHtzaW5nbGVWaWV3TW9kZSA9PT0gJ2VkaXQnID9cclxuICAgICAgICAgICg8aWZyYW1lIGNsYXNzTmFtZT1cInJlbmRlckFyZWFcIiBzcmM9e3NpbmdsZVZpZXcubGlua30gLz4pXHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICAoPFNpbmdsZVZpZXdSZXNwb25zZXMgZGF0YT17c2luZ2xlVmlld30gY29sdW1ucz17dGhpcy5pbmRpdmlkdWFsUmVjb3Jkc1F1ZXN0aW9uSWRzfSBjb2x1bW5zTWFwPXt0aGlzLmluZGl2aWR1YWxSZWNvcmRzS2V5TGFiZWxzfSAvPilcclxuICAgICAgICB9XHJcbiAgICAgIDwvU2luZ2xlVmlldz5cclxuICAgICkgOiBudWxsXHJcbiAgfVxyXG5cclxuICBnZXQgaW5kaXZpZHVhbFJlY29yZHNRdWVzdGlvbklkcygpIHtcclxuICAgIGNvbnN0IHsgaW5kaXZpZHVhbFJlY29yZHMgfSA9IHRoaXMuRFMuY29uZmlnKCk7XHJcbiAgICByZXR1cm4gaW5kaXZpZHVhbFJlY29yZHMgIT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KGluZGl2aWR1YWxSZWNvcmRzKSA/IGluZGl2aWR1YWxSZWNvcmRzIDogW11cclxuICB9XHJcblxyXG4gIGdldCBpbmRpdmlkdWFsUmVjb3Jkc0tleUxhYmVscygpIHtcclxuICAgIHJldHVybiB7Li4udGhpcy5nZXRMYWJlbHNGb3JNYWluRmllbGRzKCksIC4uLnRoaXMuZ2V0TGFiZWxzRm9ySW5kaXZpZHVhbFJlY29yZHMoKX1cclxuICB9XHJcblxyXG4gIGdldExhYmVsc0Zvck1haW5GaWVsZHMoKXtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuRFMuY29uZmlnKCk7XHJcbiAgICBjb25zdCBtYXAgPSB7fTtcclxuICAgIFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nXS5yZXZlcnNlKCkuZm9yRWFjaChrZXkgPT5cclxuICAgICAgbWFwW2tleV0gPSB0aGlzLkRTLmFsbENvbHVtbnMuZmlsdGVyKHJlY29yZCA9PlxyXG4gICAgICAgIHJlY29yZC5rZXkgPT09IGNvbmZpZ1trZXldXHJcbiAgICAgIClbMF0ubGFiZWxcclxuICAgIClcclxuICAgIHJldHVybiBtYXA7XHJcbiAgfSBcclxuXHJcbiAgZ2V0TGFiZWxzRm9ySW5kaXZpZHVhbFJlY29yZHMoKXtcclxuICAgIGNvbnN0IG1hcCA9IHt9O1xyXG4gICAgY29uc3QgaXJJZHMgPSB0aGlzLmluZGl2aWR1YWxSZWNvcmRzUXVlc3Rpb25JZHM7XHJcbiAgICB0aGlzLkRTLmFsbENvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoaXJJZHMuaW5kZXhPZihjb2x1bW4ua2V5KSA+IC0xKSB7XHJcbiAgICAgICAgbWFwW2NvbHVtbi5rZXldID0gY29sdW1uLmxhYmVsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbWFwO1xyXG4gIH0gXHJcblxyXG5cclxuXHJcbiAgZGF0YUxvYWRpbmdNZXNzYWdlKCkge1xyXG4gICAgbGV0IG1lc3NhZ2U7XHJcbiAgICBjb25zdCB7IGl0ZW1zLCBlcnJvciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBtZXNzYWdlID0gJ2Vycm9yTG9hZGluZydcclxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIG1lc3NhZ2UgPSAnUkVQT1JUX1NJTkdMRVZJRVdfTk9USElOR0ZPVU5EJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVzc2FnZSA9ICdsb2FkaW5nRGF0YSdcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLkRTLmkxOG4obWVzc2FnZSlcclxuICB9XHJcblxyXG4gIHJldHVyblRvR3JpZCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaW5nbGVWaWV3VmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHNpbmdsZVZpZXc6IHtcclxuICAgICAgICBsaW5rOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBsb2FkUHJldmlvdXNJdGVtID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGVJdGVtcygnYmFjaycpXHJcbiAgfVxyXG5cclxuICBsb2FkTmV4dEl0ZW0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZUl0ZW1zKCdmb3J3YXJkJylcclxuICB9XHJcblxyXG4gIG5hdmlnYXRlSXRlbXMoZGlyZWN0aW9uOiAnZm9yd2FyZCcgfCAnYmFja3dhcmQnKTogdm9pZCB7XHJcbiAgICBsZXQgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xyXG4gICAgY29uc3QgcGFnaW5hdGlvblR5cGUgPSB0aGlzLnN0YXRlLmNvbmZpZy5wYWdpbmF0aW9uO1xyXG4gICAgbGV0IGl0ZW1zTGVuZ3RoID0gaXRlbXMubGVuZ3RoIC0gMTtcclxuICAgIGNvbnN0IGN1cnJlbnRTaW5nbGVWaWV3SXRlbUluZGV4ID0gaXRlbXMuaW5kZXhPZih0aGlzLnN0YXRlLnNpbmdsZVZpZXcpO1xyXG4gICAgY29uc3QgbmV4dEluZGV4ID0gZGlyZWN0aW9uID09PSAnZm9yd2FyZCcgPyBjdXJyZW50U2luZ2xlVmlld0l0ZW1JbmRleCArIDEgOiBjdXJyZW50U2luZ2xlVmlld0l0ZW1JbmRleCAtIDE7XHJcblxyXG4gICAgY29uc3QgbG9hZEl0ZW1Gcm9tUHJldmlvdXNQYWdlID0gbmV4dEluZGV4IDwgMCAmJiAhdGhpcy5EUy5kaXNhYmxlUHJldkJ1dHRvbjtcclxuICAgIGNvbnN0IGxvYWRJdGVtRnJvbU5leHRQYWdlID0gbmV4dEluZGV4ID4gaXRlbXNMZW5ndGggJiYgIXRoaXMuRFMuZGlzYWJsZU5leHRCdXR0b247XHJcblxyXG4gICAgbGV0IHByb21pc2VkSXRlbXMgPSBQcm9taXNlLnJlc29sdmUoaXRlbXMpO1xyXG4gICAgLy8gYXNzaWduIGl0ZW1zIHRvIHRoZW5hYmxlIHByb21pc2VzIGlmIHJlcXVlc3RlZCBpdGVtIGlzIG91dHNpZGUgb2YgZGF0YSBib3VuZGFyaWVzXHJcbiAgICBpZiAobG9hZEl0ZW1Gcm9tUHJldmlvdXNQYWdlKSB7XHJcbiAgICAgIHByb21pc2VkSXRlbXMgPSB0aGlzLkRTLmxvYWRQcmV2aW91c1BhZ2UoKTtcclxuICAgIH0gZWxzZSBpZiAobG9hZEl0ZW1Gcm9tTmV4dFBhZ2UpIHtcclxuICAgICAgcHJvbWlzZWRJdGVtcyA9IHBhZ2luYXRpb25UeXBlICE9PSAnY29udGludW91cycgPyB0aGlzLkRTLmxvYWROZXh0UGFnZSgpIDogdGhpcy5EUy5sb2FkTW9yZSgpO1xyXG4gICAgfVxyXG4gICAgLyogICAgIGNvbnN0IGl0ZW1zQXJlUHJvbWlzZWQgPSAhQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMuaGFzT3duUHJvcGVydHkoJ3RoZW4nKTtcclxuICAgICAgICBpZiAoIWl0ZW1zQXJlUHJvbWlzZWQpIHtcclxuICAgICAgICAgIHByb21pc2VkSXRlbXMgPSBQcm9taXNlLnJlc29sdmUoaXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAqL1xyXG4gICAgcHJvbWlzZWRJdGVtcy50aGVuKCgpID0+IHtcclxuICAgICAgbGV0IHNpbmdsZVZpZXdEYXRhO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBwcmV2U3RhdGUuaXRlbXM7XHJcbiAgICAgICAgY29uc3QgYXREYXRhTGVmdEJvdW5kYXJ5Q2FuTG9hZCA9IG5leHRJbmRleCA8IDAgJiYgIXNpbmdsZVZpZXdEaXNhYmxlUHJldjtcclxuICAgICAgICBjb25zdCBhdERhdGFSaWdodEJvdW5kYXJ5Q2FuTG9hZCA9IG5leHRJbmRleCA+IGl0ZW1zTGVuZ3RoICYmICFzaW5nbGVWaWV3RGlzYWJsZU5leHQgJiYgcGFnaW5hdGlvblR5cGUgIT09ICdjb250aW51b3VzJztcclxuICAgICAgICBpZiAoYXREYXRhTGVmdEJvdW5kYXJ5Q2FuTG9hZCkge1xyXG4gICAgICAgICAgc2luZ2xlVmlld0RhdGEgPSBuZXdJdGVtc1tuZXdJdGVtcy5sZW5ndGggLSAxXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYXREYXRhUmlnaHRCb3VuZGFyeUNhbkxvYWQpIHtcclxuICAgICAgICAgIHNpbmdsZVZpZXdEYXRhID0gbmV3SXRlbXNbMF1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2luZ2xlVmlld0RhdGEgPSBuZXdJdGVtc1tuZXh0SW5kZXhdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4udGhpcy5nZXRTaW5nbGVWaWV3TmF2U3RhdGUobmV4dEluZGV4KSxcclxuICAgICAgICAgIHNpbmdsZVZpZXc6IHNpbmdsZVZpZXdEYXRhLFxyXG4gICAgICAgICAgc2luZ2xlVmlld1Zpc2libGU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTaW5nbGVWaWV3TmF2U3RhdGUoaXRlbSkgeyB9XHJcblxyXG4gIG9uU2VsZWN0ID0gKGl0ZW0pID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLmdldFNpbmdsZVZpZXdOYXZTdGF0ZSh0aGlzLnN0YXRlLml0ZW1zLmluZGV4T2YoaXRlbSkpLFxyXG4gICAgICBzaW5nbGVWaWV3OiBpdGVtLFxyXG4gICAgICBzaW5nbGVWaWV3VmlzaWJsZTogdHJ1ZSxcclxuICAgICAgc2luZ2xlVmlld01vZGU6ICd2aWV3J1xyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBnZXRTaW5nbGVWaWV3TmF2U3RhdGUoY3VycmVudEl0ZW1JbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICBsZXQgc2luZ2xlVmlld0Rpc2FibGVOZXh0ID0gZmFsc2UsXHJcbiAgICAgIHNpbmdsZVZpZXdEaXNhYmxlUHJldiA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChjdXJyZW50SXRlbUluZGV4IDw9IDAgJiYgdGhpcy5EUy5kaXNhYmxlUHJldkJ1dHRvbikge1xyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXYgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRJdGVtSW5kZXggPj0gaXRlbXMubGVuZ3RoIC0gMSAmJiB0aGlzLkRTLmRpc2FibGVOZXh0QnV0dG9uKSB7XHJcbiAgICAgIHNpbmdsZVZpZXdEaXNhYmxlTmV4dCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzaW5nbGVWaWV3RGlzYWJsZVByZXYsXHJcbiAgICAgIHNpbmdsZVZpZXdEaXNhYmxlTmV4dFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWN0aW9uSWNvbkNsaWNrID0gKGl0ZW0pID0+ICgpID0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgLi4udGhpcy5nZXRTaW5nbGVWaWV3TmF2U3RhdGUodGhpcy5zdGF0ZS5pdGVtcy5pbmRleE9mKGl0ZW0pKSxcclxuICAgIHNpbmdsZVZpZXc6IGl0ZW0sXHJcbiAgICBzaW5nbGVWaWV3VmlzaWJsZTogdHJ1ZSxcclxuICAgIHNpbmdsZVZpZXdNb2RlOiAnZWRpdCdcclxuICB9KVxyXG4gIGFjdGlvbkljb24gPSAoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBvbkNsaWNrPXt0aGlzLmFjdGlvbkljb25DbGljayhpdGVtKX0+XHJcbiAgICAgICAgPHBhdGggZD1cIk0zIDE3LjI1VjIxaDMuNzVMMTcuODEgOS45NGwtMy43NS0zLjc1TDMgMTcuMjV6TTIwLjcxIDcuMDRjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6XCIgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RWaWRlby9pbmRleC5qcyIsIi8vQGZsb3dcclxuaW1wb3J0IHR5cGUge05hdkJ1dHRvblByb3BzfSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1ESWNvbiBmcm9tICdNREljb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2QnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxOYXZCdXR0b25Qcm9wcywgYW55PiB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBpY29uLCAuLi53cmFwcGVyIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0tbmF2LWJ1dHRvblwiIHsuLi53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxNREljb24gaWNvbj17aWNvbn0gLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaW5nbGVWaWV3L05hdkJ1dHRvbi5qcyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zZXMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEsIGNvbHVtbnMsIGNvbHVtbnNNYXAgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCBtZWRpYSA9IFsnaW1hZ2UnLCAndmlkZW8nLCAnYXVkaW8nXTtcclxuICAgICAgICBjb25zdCBkYXRlID0gZGF0YS5pbnRlcnZpZXdfc3RhcnQgfHwgZGF0YS5pbnRlcnZpZXdfZW5kO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVuZGVyQXJlYSBSZXNwb25zZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEudGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLXBhZ2VUaXRsZVwiPiB7ZGF0YS50aXRsZX0gPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIHshIWRhdGUgJiYgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLWxhYmVsXCI+IHtkYXRlfSA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLXZhbHVlXCI+IHtkYXRhLmRlc2NyaXB0aW9ufSA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAge21lZGlhLm1hcChtZWRpYUl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVttZWRpYUl0ZW1dID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tbGFiZWxcIj57Y29sdW1uc01hcFttZWRpYUl0ZW1dfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VzLS12YWx1ZVwiPnt0aGlzW2BfJHttZWRpYUl0ZW19UmVuZGVyZXJgXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zICE9IG51bGwgJiYgY29sdW1ucy5tYXAocUlEID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbcUlEXSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZXMtLWxhYmVsXCI+e2NvbHVtbnNNYXBbcUlEXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tdmFsdWVcIj57ZGF0YVtxSURdfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBfaW1hZ2VSZW5kZXJlcigpIHtcclxuICAgICAgICByZXR1cm4gPGltZyBjbGFzc05hbWU9XCJSZXNwb25zZXMtLW1lZGlhXCIgc3JjPXt0aGlzLnByb3BzLmRhdGEuaW1hZ2V9IC8+XHJcbiAgICB9XHJcbiAgICBnZXQgX3ZpZGVvUmVuZGVyZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHZpZGVvIGNvbnRyb2xzIGNsYXNzTmFtZT1cIlJlc3BvbnNlcy0tbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXt0aGlzLnByb3BzLmRhdGEudmlkZW99IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cclxuICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZ2V0IF9hdWRpb1JlbmRlcmVyKCkge1xyXG4gICAgICAgIHJldHVybiA8YXVkaW8gc3JjPXt0aGlzLnByb3BzLmRhdGEuYXVkaW99IHR5cGU9XCJhdWRpby9tcDRcIiBjb250cm9scyBjbGFzc05hbWU9XCJSZXNwb25zZXMtLW1lZGlhXCIgLz5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaW5nbGVWaWV3L1Jlc3BvbnNlcy5qcyIsIi8vQGZsb3dcclxuaW1wb3J0IHR5cGUge1Byb3BzLCBOYXZCYXJQcm9wcyB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2QnV0dG9uIGZyb20gJy4vTmF2QnV0dG9uJ1xyXG5pbXBvcnQgeyBpY19hcnJvd19iYWNrLCBpY19hcnJvd19mb3J3YXJkLCBpY192aWV3X21vZHVsZSB9IGZyb20gJy4uL2ljb25zJztcclxuXHJcbmNvbnN0IE5hdkJhciA9IGZ1bmN0aW9uIChwcm9wczpOYXZCYXJQcm9wcykge1xyXG4gIGNvbnN0IHsgbG9hZFByZXZpb3VzSXRlbSwgcmV0dXJuVG9HcmlkQWN0aW9uLCBsb2FkTmV4dEl0ZW0sIHNpbmdsZVZpZXdEaXNhYmxlUHJldiwgc2luZ2xlVmlld0Rpc2FibGVOZXh0IH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3LS1oZWFkZXJcIj5cclxuICAgICAgPE5hdkJ1dHRvbiBkaXNhYmxlZD17c2luZ2xlVmlld0Rpc2FibGVQcmV2fSB0aXRsZT1cIlByZXZpb3VzIGl0ZW1cIiBvbkNsaWNrPXtsb2FkUHJldmlvdXNJdGVtfSBpY29uPXtpY19hcnJvd19iYWNrfSAvPlxyXG4gICAgICA8TmF2QnV0dG9uIHRpdGxlPVwiUmV0dXJuIHRvIHRoZSBsaXN0XCIgb25DbGljaz17cmV0dXJuVG9HcmlkQWN0aW9ufSBpY29uPXtpY192aWV3X21vZHVsZX0gLz5cclxuICAgICAgPE5hdkJ1dHRvbiBkaXNhYmxlZD17c2luZ2xlVmlld0Rpc2FibGVOZXh0fSB0aXRsZT1cIk5leHQgSXRlbVwiIG9uQ2xpY2s9e2xvYWROZXh0SXRlbX0gaWNvbj17aWNfYXJyb3dfZm9yd2FyZH0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlVmlldyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIHZvaWQ+IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7Y2hpbGRyZW4sIC4uLm5hdkJhclByb3BzfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbmdsZVZpZXdcIj5cclxuICAgICAgICA8TmF2QmFyIHsuLi5uYXZCYXJQcm9wc30vPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaW5nbGVWaWV3L2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgaWNfc3RhciA9IDxwYXRoIGQ9XCJNMTIgMTcuMjdMMTguMTggMjFsLTEuNjQtNy4wM0wyMiA5LjI0bC03LjE5LS42MUwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjF6XCIvPjtcbmV4cG9ydCBjb25zdCBpY19zdGFyX2JvcmRlciA9IDxwYXRoIGQ9XCJNMjIgOS4yNGwtNy4xOS0uNjJMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxIDEyIDE3LjI3IDE4LjE4IDIxbC0xLjYzLTcuMDNMMjIgOS4yNHpNMTIgMTUuNGwtMy43NiAyLjI3IDEtNC4yOC0zLjMyLTIuODggNC4zOC0uMzhMMTIgNi4xbDEuNzEgNC4wNCA0LjM4LjM4LTMuMzIgMi44OCAxIDQuMjhMMTIgMTUuNHpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX2Fycm93X2JhY2sgPSA8cGF0aCBkPVwiTTIwIDExSDcuODNsNS41OS01LjU5TDEyIDRsLTggOCA4IDggMS40MS0xLjQxTDcuODMgMTNIMjB2LTJ6XCIvPjtcbmV4cG9ydCBjb25zdCBpY19hcnJvd19mb3J3YXJkID0gPHBhdGggZD1cIk0xMiA0bC0xLjQxIDEuNDFMMTYuMTcgMTFINHYyaDEyLjE3bC01LjU4IDUuNTlMMTIgMjBsOC04elwiLz47XG5leHBvcnQgY29uc3QgaWNfdmlld19tb2R1bGUgPSA8cGF0aCBkPVwiTTQgMTFoNVY1SDR2NnptMCA3aDV2LTZINHY2em02IDBoNXYtNmgtNXY2em02IDBoNXYtNmgtNXY2em0tNi03aDVWNWgtNXY2em02LTZ2Nmg1VjVoLTV6XCIvPjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pY29ucy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMjIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=