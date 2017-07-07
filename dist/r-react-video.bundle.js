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
	
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(217);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _main = __webpack_require__(216);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _ReactVideo = __webpack_require__(212);
	
	var _ReactVideo2 = _interopRequireDefault(_ReactVideo);
	
	var _rReportalBase = __webpack_require__(41);
	
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
	
	var store = __webpack_require__(51)('wks'),
	    uid = __webpack_require__(54),
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var freeGlobal = __webpack_require__(64);
	
	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;

/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsNative = __webpack_require__(132),
	    getValue = __webpack_require__(156);
	
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(18);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(19),
	    createDesc = __webpack_require__(50);
	module.exports = __webpack_require__(11) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(46)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(3);
	
	/** Built-in value references. */
	var _Symbol = root.Symbol;
	
	module.exports = _Symbol;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(13),
	    getRawTag = __webpack_require__(153),
	    objectToString = __webpack_require__(181);
	
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
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(25);
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
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(7),
	    IE8_DOM_DEFINE = __webpack_require__(83),
	    toPrimitive = __webpack_require__(104),
	    dP = Object.defineProperty;
	
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

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var listCacheClear = __webpack_require__(167),
	    listCacheDelete = __webpack_require__(168),
	    listCacheGet = __webpack_require__(169),
	    listCacheHas = __webpack_require__(170),
	    listCacheSet = __webpack_require__(171);
	
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var eq = __webpack_require__(69);
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isKeyable = __webpack_require__(164);
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(6);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isSymbol = __webpack_require__(40);
	
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
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(18),
	    document = __webpack_require__(2).document
	// in old IE typeof document.createElement is 'object'
	,
	    is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(19).f,
	    has = __webpack_require__(17),
	    TAG = __webpack_require__(1)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shared = __webpack_require__(51)('keys'),
	    uid = __webpack_require__(54);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(85),
	    defined = __webpack_require__(26);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(6),
	    root = __webpack_require__(3);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var mapCacheClear = __webpack_require__(172),
	    mapCacheDelete = __webpack_require__(173),
	    mapCacheGet = __webpack_require__(174),
	    mapCacheHas = __webpack_require__(175),
	    mapCacheSet = __webpack_require__(176);
	
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var isArray = __webpack_require__(4),
	    isSymbol = __webpack_require__(40);
	
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
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsArguments = __webpack_require__(128),
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

/***/ },
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

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
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(15),
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
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	// IE 8- don't enum bug keys
	module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(2),
	    core = __webpack_require__(10),
	    ctx = __webpack_require__(16),
	    hide = __webpack_require__(8),
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
/* 46 */
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(2).document && document.documentElement;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(49),
	    $export = __webpack_require__(45),
	    redefine = __webpack_require__(98),
	    hide = __webpack_require__(8),
	    has = __webpack_require__(17),
	    Iterators = __webpack_require__(12),
	    $iterCreate = __webpack_require__(88),
	    setToStringTag = __webpack_require__(28),
	    getPrototypeOf = __webpack_require__(94),
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
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = true;

/***/ },
/* 50 */
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(2),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(16),
	    invoke = __webpack_require__(84),
	    html = __webpack_require__(47),
	    cel = __webpack_require__(27),
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
	  if (__webpack_require__(15)(process) == 'process') {
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(30),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(6),
	    root = __webpack_require__(3);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var MapCache = __webpack_require__(33),
	    setCacheAdd = __webpack_require__(184),
	    setCacheHas = __webpack_require__(185);
	
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(20),
	    stackClear = __webpack_require__(188),
	    stackDelete = __webpack_require__(189),
	    stackGet = __webpack_require__(190),
	    stackHas = __webpack_require__(191),
	    stackSet = __webpack_require__(192);
	
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
/* 58 */
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var castPath = __webpack_require__(62),
	    toKey = __webpack_require__(24);
	
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqualDeep = __webpack_require__(129),
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

/***/ },
/* 61 */
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArray = __webpack_require__(4),
	    isKey = __webpack_require__(34),
	    stringToPath = __webpack_require__(194),
	    toString = __webpack_require__(205);
	
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var SetCache = __webpack_require__(56),
	    arraySome = __webpack_require__(122),
	    cacheHas = __webpack_require__(61);
	
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
/* 64 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 65 */
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(39);
	
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
/* 67 */
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
/* 68 */
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
/* 69 */
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(72),
	    isLength = __webpack_require__(38);
	
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var root = __webpack_require__(3),
	    stubFalse = __webpack_require__(204);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)(module)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(14),
	    isObject = __webpack_require__(39);
	
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsTypedArray = __webpack_require__(133),
	    baseUnary = __webpack_require__(144),
	    nodeUtil = __webpack_require__(180);
	
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayLikeKeys = __webpack_require__(120),
	    baseKeys = __webpack_require__(135),
	    isArrayLike = __webpack_require__(70);
	
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MDIcon = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _MDIcon = __webpack_require__(75);
	
	exports.default = _MDIcon.MDIcon; /**
	                                   * Created by IvanP on 11.01.2017.
	                                   */

	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	!function (e, t) {
	  if ("object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module))) module.exports = t(__webpack_require__(5));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)(module)))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(108);
	module.exports = __webpack_require__(10).Promise;

/***/ },
/* 79 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function () {/* empty */};

/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
	    throw TypeError(name + ': incorrect invocation!');
	  }return it;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(31),
	    toLength = __webpack_require__(53),
	    toIndex = __webpack_require__(102);
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(16),
	    call = __webpack_require__(87),
	    isArrayIter = __webpack_require__(86),
	    anObject = __webpack_require__(7),
	    toLength = __webpack_require__(53),
	    getIterFn = __webpack_require__(105),
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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = !__webpack_require__(11) && !__webpack_require__(46)(function () {
	  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 84 */
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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(15);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(12),
	    ITERATOR = __webpack_require__(1)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var create = __webpack_require__(92),
	    descriptor = __webpack_require__(50),
	    setToStringTag = __webpack_require__(28),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(1)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 89 */
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
/* 90 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(2),
	    macrotask = __webpack_require__(52).set,
	    Observer = global.MutationObserver || global.WebKitMutationObserver,
	    process = global.process,
	    Promise = global.Promise,
	    isNode = __webpack_require__(15)(process) == 'process';
	
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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(7),
	    dPs = __webpack_require__(93),
	    enumBugKeys = __webpack_require__(44),
	    IE_PROTO = __webpack_require__(29)('IE_PROTO'),
	    Empty = function Empty() {/* empty */},
	    PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var _createDict = function createDict() {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(27)('iframe'),
	      i = enumBugKeys.length,
	      lt = '<',
	      gt = '>',
	      iframeDocument;
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

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var dP = __webpack_require__(19),
	    anObject = __webpack_require__(7),
	    getKeys = __webpack_require__(96);
	
	module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties) {
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(17),
	    toObject = __webpack_require__(103),
	    IE_PROTO = __webpack_require__(29)('IE_PROTO'),
	    ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(17),
	    toIObject = __webpack_require__(31),
	    arrayIndexOf = __webpack_require__(81)(false),
	    IE_PROTO = __webpack_require__(29)('IE_PROTO');
	
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(95),
	    enumBugKeys = __webpack_require__(44);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var hide = __webpack_require__(8);
	module.exports = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];else hide(target, key, src[key]);
	  }return target;
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(8);

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(2),
	    core = __webpack_require__(10),
	    dP = __webpack_require__(19),
	    DESCRIPTORS = __webpack_require__(11),
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject = __webpack_require__(7),
	    aFunction = __webpack_require__(25),
	    SPECIES = __webpack_require__(1)('species');
	module.exports = function (O, D) {
	  var C = anObject(O).constructor,
	      S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(30),
	    defined = __webpack_require__(26);
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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(30),
	    max = Math.max,
	    min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(26);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(43),
	    ITERATOR = __webpack_require__(1)('iterator'),
	    Iterators = __webpack_require__(12);
	module.exports = __webpack_require__(10).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(79),
	    step = __webpack_require__(90),
	    Iterators = __webpack_require__(12),
	    toIObject = __webpack_require__(31);
	
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
/* 107 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(49),
	    global = __webpack_require__(2),
	    ctx = __webpack_require__(16),
	    classof = __webpack_require__(43),
	    $export = __webpack_require__(45),
	    isObject = __webpack_require__(18),
	    aFunction = __webpack_require__(25),
	    anInstance = __webpack_require__(80),
	    forOf = __webpack_require__(82),
	    speciesConstructor = __webpack_require__(100),
	    task = __webpack_require__(52).set,
	    microtask = __webpack_require__(91)(),
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
	  Internal.prototype = __webpack_require__(97)($Promise.prototype, {
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
	__webpack_require__(28)($Promise, PROMISE);
	__webpack_require__(99)(PROMISE);
	Wrapper = __webpack_require__(10)[PROMISE];
	
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
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(89)(function (iter) {
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(101)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(48)(String, 'String', function (iterated) {
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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(106);
	var global = __webpack_require__(2),
	    hide = __webpack_require__(8),
	    Iterators = __webpack_require__(12),
	    TO_STRING_TAG = __webpack_require__(1)('toStringTag');
	
	for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
	  var NAME = collections[i],
	      Collection = global[NAME],
	      proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(6),
	    root = __webpack_require__(3);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var hashClear = __webpack_require__(158),
	    hashDelete = __webpack_require__(159),
	    hashGet = __webpack_require__(160),
	    hashHas = __webpack_require__(161),
	    hashSet = __webpack_require__(162);
	
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(6),
	    root = __webpack_require__(3);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(3);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(6),
	    root = __webpack_require__(3);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;

/***/ },
/* 116 */
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
/* 117 */
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
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIndexOf = __webpack_require__(127);
	
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
/* 119 */
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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseTimes = __webpack_require__(142),
	    isArguments = __webpack_require__(37),
	    isArray = __webpack_require__(4),
	    isBuffer = __webpack_require__(71),
	    isIndex = __webpack_require__(65),
	    isTypedArray = __webpack_require__(73);
	
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
/* 121 */
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
/* 122 */
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
/* 123 */
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
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayPush = __webpack_require__(58),
	    isFlattenable = __webpack_require__(163);
	
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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayPush = __webpack_require__(58),
	    isArray = __webpack_require__(4);
	
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
/* 126 */
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
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseFindIndex = __webpack_require__(123),
	    baseIsNaN = __webpack_require__(131),
	    strictIndexOf = __webpack_require__(193);
	
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
/* 128 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stack = __webpack_require__(57),
	    equalArrays = __webpack_require__(63),
	    equalByTag = __webpack_require__(149),
	    equalObjects = __webpack_require__(150),
	    getTag = __webpack_require__(155),
	    isArray = __webpack_require__(4),
	    isBuffer = __webpack_require__(71),
	    isTypedArray = __webpack_require__(73);
	
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
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stack = __webpack_require__(57),
	    baseIsEqual = __webpack_require__(60);
	
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
/* 131 */
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
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(72),
	    isMasked = __webpack_require__(165),
	    isObject = __webpack_require__(39),
	    toSource = __webpack_require__(68);
	
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
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetTag = __webpack_require__(14),
	    isLength = __webpack_require__(38),
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

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var baseMatches = __webpack_require__(136),
	    baseMatchesProperty = __webpack_require__(137),
	    identity = __webpack_require__(36),
	    isArray = __webpack_require__(4),
	    property = __webpack_require__(202);
	
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
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isPrototype = __webpack_require__(166),
	    nativeKeys = __webpack_require__(179);
	
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
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsMatch = __webpack_require__(130),
	    getMatchData = __webpack_require__(152),
	    matchesStrictComparable = __webpack_require__(67);
	
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
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqual = __webpack_require__(60),
	    get = __webpack_require__(196),
	    hasIn = __webpack_require__(197),
	    isKey = __webpack_require__(34),
	    isStrictComparable = __webpack_require__(66),
	    matchesStrictComparable = __webpack_require__(67),
	    toKey = __webpack_require__(24);
	
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
/* 138 */
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
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(59);
	
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
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var identity = __webpack_require__(36),
	    overRest = __webpack_require__(183),
	    setToString = __webpack_require__(186);
	
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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var constant = __webpack_require__(195),
	    defineProperty = __webpack_require__(148),
	    identity = __webpack_require__(36);
	
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
/* 142 */
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
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(13),
	    arrayMap = __webpack_require__(121),
	    isArray = __webpack_require__(4),
	    isSymbol = __webpack_require__(40);
	
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
/* 144 */
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
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var SetCache = __webpack_require__(56),
	    arrayIncludes = __webpack_require__(118),
	    arrayIncludesWith = __webpack_require__(119),
	    cacheHas = __webpack_require__(61),
	    createSet = __webpack_require__(147),
	    setToArray = __webpack_require__(35);
	
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
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(3);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Set = __webpack_require__(55),
	    noop = __webpack_require__(201),
	    setToArray = __webpack_require__(35);
	
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
/* 148 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(13),
	    Uint8Array = __webpack_require__(114),
	    eq = __webpack_require__(69),
	    equalArrays = __webpack_require__(63),
	    mapToArray = __webpack_require__(177),
	    setToArray = __webpack_require__(35);
	
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
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getAllKeys = __webpack_require__(151);
	
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
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGetAllKeys = __webpack_require__(125),
	    getSymbols = __webpack_require__(154),
	    keys = __webpack_require__(74);
	
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
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isStrictComparable = __webpack_require__(66),
	    keys = __webpack_require__(74);
	
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
/* 153 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayFilter = __webpack_require__(117),
	    stubArray = __webpack_require__(203);
	
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
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var DataView = __webpack_require__(111),
	    Map = __webpack_require__(32),
	    Promise = __webpack_require__(113),
	    Set = __webpack_require__(55),
	    WeakMap = __webpack_require__(115),
	    baseGetTag = __webpack_require__(14),
	    toSource = __webpack_require__(68);
	
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
/* 156 */
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
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var castPath = __webpack_require__(62),
	    isArguments = __webpack_require__(37),
	    isArray = __webpack_require__(4),
	    isIndex = __webpack_require__(65),
	    isLength = __webpack_require__(38),
	    toKey = __webpack_require__(24);
	
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
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(23);
	
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
/* 159 */
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
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(23);
	
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
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(23);
	
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
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(23);
	
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
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(13),
	    isArguments = __webpack_require__(37),
	    isArray = __webpack_require__(4);
	
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
/* 164 */
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
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var coreJsData = __webpack_require__(146);
	
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
/* 166 */
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
/* 167 */
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
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(21);
	
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
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(21);
	
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
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(21);
	
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
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(21);
	
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
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Hash = __webpack_require__(112),
	    ListCache = __webpack_require__(20),
	    Map = __webpack_require__(32);
	
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
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(22);
	
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
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(22);
	
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
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(22);
	
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
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(22);
	
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
/* 177 */
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
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var memoize = __webpack_require__(200);
	
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
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var overArg = __webpack_require__(182);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var freeGlobal = __webpack_require__(64);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)(module)))

/***/ },
/* 181 */
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
/* 182 */
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
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var apply = __webpack_require__(116);
	
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
/* 184 */
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
/* 185 */
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
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseSetToString = __webpack_require__(141),
	    shortOut = __webpack_require__(187);
	
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
/* 187 */
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
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(20);
	
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
/* 189 */
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
/* 190 */
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
/* 191 */
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
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(20),
	    Map = __webpack_require__(32),
	    MapCache = __webpack_require__(33);
	
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
/* 193 */
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
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var memoizeCapped = __webpack_require__(178);
	
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
/* 195 */
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
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(59);
	
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
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseHasIn = __webpack_require__(126),
	    hasPath = __webpack_require__(157);
	
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
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArrayLike = __webpack_require__(70),
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

/***/ },
/* 199 */
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
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var MapCache = __webpack_require__(33);
	
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
/* 201 */
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
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseProperty = __webpack_require__(138),
	    basePropertyDeep = __webpack_require__(139),
	    isKey = __webpack_require__(34),
	    toKey = __webpack_require__(24);
	
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
/* 203 */
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
/* 204 */
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
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseToString = __webpack_require__(143);
	
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
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseFlatten = __webpack_require__(124),
	    baseIteratee = __webpack_require__(134),
	    baseRest = __webpack_require__(140),
	    baseUniq = __webpack_require__(145),
	    isArrayLikeObject = __webpack_require__(198),
	    last = __webpack_require__(199);
	
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

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _rReportalBase = __webpack_require__(41);
	
	var _rReportalBase2 = _interopRequireDefault(_rReportalBase);
	
	var _hitlistSetup = __webpack_require__(208);
	
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
/* 208 */
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
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _hitlistDatasource = __webpack_require__(207);
	
	var _hitlistDatasource2 = _interopRequireDefault(_hitlistDatasource);
	
	var _rReportalBase = __webpack_require__(41);
	
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
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGridTile = __webpack_require__(215);
	
	var _ImageGridTile2 = _interopRequireDefault(_ImageGridTile);
	
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

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGridTile = __webpack_require__(210);
	
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

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ImageGrid = __webpack_require__(211);
	
	var _ImageGrid2 = _interopRequireDefault(_ImageGrid);
	
	var _rHitlistDatasource = __webpack_require__(209);
	
	var _rHitlistDatasource2 = _interopRequireDefault(_rHitlistDatasource);
	
	var _SingleView = __webpack_require__(213);
	
	var _SingleView2 = _interopRequireDefault(_SingleView);
	
	var _unionBy = __webpack_require__(206);
	
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
	
	    _this.handleDataLoadingError = function (err) {
	      console.log(err);
	      _this.setState({
	        error: true,
	        items: []
	      });
	    };
	
	    _this.returnToGrid = function () {
	      _this.setState({
	        singleViewVisible: false,
	        singleView: {
	          link: ''
	        }
	      });
	      _this.DS.initialDataLoad().then(function (response) {
	        return _this.processData(response);
	      }).catch(_this.handleDataLoadingError);
	    };
	
	    _this.loadPreviousItem = function () {
	      return _this.navigateItems('back');
	    };
	
	    _this.loadNextItem = function () {
	      return _this.navigateItems('forward');
	    };
	
	    _this.loadNextPage = function () {
	      return _this.DS.nextPage().then(function (response) {
	        return _this.processData(response);
	      }).catch(_this.handleDataLoadingError);
	    };
	
	    _this.loadPreviousPage = function () {
	      return _this.DS.previousPage().then(function (response) {
	        return _this.processData(response);
	      }).catch(_this.handleDataLoadingError);
	    };
	
	    _this.loadMore = function () {
	      _this.DS.nextPage().then(function (response) {
	        return _this.processData(response, 'append');
	      }).catch(_this.handleDataLoadingError);
	    };
	
	    _this.onSelect = function (item) {
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
	    };
	
	    _this.DS = new _rHitlistDatasource2.default();
	    _this.props.verbose && console.log(_this.DS);
	    _this.setupDataListener();
	    _this.state = {
	      items: null,
	      error: false,
	      singleView: {
	        link: ''
	      },
	      singleViewVisible: false,
	      disableSingleViewPrev: false,
	      disableSingleViewNext: false
	    };
	    return _this;
	  }
	
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
	          _react2.default.createElement(_SingleView2.default, {
	            link: singleView.link,
	            visible: singleViewVisible,
	            initialLoad: true,
	            returnToGridAction: this.returnToGrid,
	            loadPreviousItem: this.loadPreviousItem,
	            loadNextItem: this.loadNextItem,
	            headerText: "Edit video \"" + singleView.title + "\"",
	            disableSingleViewPrev: disableSingleViewPrev,
	            disableSingleViewNext: disableSingleViewNext
	          }),
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
	    key: "pagingNavigation",
	    value: function pagingNavigation() {
	      var pageInfo = '';
	      if (this.DS.pageInfo && this.DS.sortingPagingValues && this.DS.sortingPagingValues.totalHits) {
	        pageInfo = this.DS.pageInfo + " of " + this.DS.sortingPagingValues.totalHits;
	      }
	      return _react2.default.createElement(
	        "div",
	        { className: "buttonRow" },
	        _react2.default.createElement(
	          "span",
	          { rel: "button",
	            className: "materialButton accent",
	            onClick: this.loadPreviousPage,
	            disabled: this.DS.disablePrevButton
	          },
	          this.DS.i18n('REPORT_SINGLEVIEW_PREVIOUS')
	        ),
	        _react2.default.createElement(
	          "span",
	          { rel: "button",
	            className: "materialButton accent",
	            onClick: this.loadNextPage,
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
	            onClick: this.loadMore,
	            disabled: this.DS.disableNextButton
	          },
	          "Load more"
	        )
	      );
	    }
	
	    /**
	     * Launches listener for `Y.Global.reportcontroller:viewModeDataUpdate` event within YUI which is triggered every time the filter panel updates or on initial load
	     * */
	
	  }, {
	    key: "setupDataListener",
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
	    key: "navigateItems",
	    value: function navigateItems(direction) {
	      var _this3 = this;
	
	      var items = this.state.items;
	      var itemsLength = items.length - 1;
	      var prevData = this.state.singleView;
	      var prevIndex = items.indexOf(prevData);
	      var nextIndex = direction === 'forward' ? ++prevIndex : --prevIndex;
	
	      if (nextIndex < 0 && !this.DS.disablePrevButton) {
	        items = this.loadPreviousPage();
	      } else if (nextIndex > itemsLength && !this.DS.disableNextButton) {
	        items = this.loadNextPage();
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
	        _this3.setState(function (prevState) {
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
	  }, {
	    key: "initialiseConfig",
	    value: function initialiseConfig(configName) {
	      if (!this.config) {
	        if (!window[configName]) {
	          throw new Error('config is not passed from backed');
	        }
	        this.config = window[configName];
	      }
	    }
	  }, {
	    key: "processData",
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
	          if (key === 'image') {
	            if (parsedData.image) {
	              if (_this4.props.thumbsPlaceholder) {
	                parsedData.placeholder = parsedData.image;
	              }
	              parsedData.image = parsedData.image.replace(/_thumb/gi, '');
	            }
	          }
	          // calculate mediatype or a placeholder icon
	          if (['video', 'audio', 'image'].indexOf(key) > -1 && config[key] && parsedData[key]) {
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
	    key: "prepareData",
	    value: function prepareData(data, type) {
	      switch (type) {
	        case 'image':
	          var result = /src='(.+?)'/gi.exec(data);
	          return result && result !== null && result[1] ? result[1] : undefined;
	          break;
	        case 'description':
	        case 'title':
	        case 'video':
	        case 'audio':
	          return !(data.indexOf('-') > -1 && data.trim().length === 1) ? data.trim() : undefined;
	          break;
	        case 'tags':
	          return data && (data.indexOf(',') > -1 ? data.split(',') : data.indexOf('-') > -1 && data.trim().length === 1 ? undefined : data.trim());
	          break;
	      }
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

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MDIcon = __webpack_require__(76);
	
	var _MDIcon2 = _interopRequireDefault(_MDIcon);
	
	var _icons = __webpack_require__(214);
	
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
	
	    _this.onLoad = function (e) {
	      if (_this.state.link.length > 0) {
	        if (_this.state.initialLoad) {
	          _this.setState({
	            visible: true,
	            iframeVisible: true,
	            initialLoad: false
	          });
	        }
	        //this.handshake(e.target, this.getDomain(this.state.link));
	      }
	    };
	
	    _this.receiveMessage = function (event) {
	      var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
	      if (origin !== _this.targetOrigin) return;
	      if (event.data && event.data.action && _this[event.data.action]) {
	        _this[event.data.action](event.data);
	      } else {
	        console.warn('action not found for ', event.data, event.data.action, _this[event.data.action]);
	      }
	    };
	
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
	
	    window.addEventListener("message", _this.receiveMessage, false);
	    return _this;
	  }
	
	  _createClass(SingleView, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      //this.mapPropsToState(nextProps)
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
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          link = _props.link,
	          visible = _props.visible,
	          loadPreviousItem = _props.loadPreviousItem,
	          returnToGridAction = _props.returnToGridAction,
	          loadNextItem = _props.loadNextItem,
	          disableSingleViewPrev = _props.disableSingleViewPrev,
	          disableSingleViewNext = _props.disableSingleViewNext;
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'SingleView', style: { display: visible ? 'block' : 'none' } },
	        _react2.default.createElement(
	          'div',
	          { className: 'SingleView--header' },
	          _react2.default.createElement(
	            'span',
	            { className: 'SingleView--nav-button', disabled: disableSingleViewPrev, title: 'Previous item', onClick: loadPreviousItem },
	            _react2.default.createElement(_MDIcon2.default, { icon: _icons.ic_arrow_back })
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'SingleView--nav-button', title: 'Return to the list', onClick: returnToGridAction },
	            _react2.default.createElement(_MDIcon2.default, { icon: _icons.ic_view_module })
	          ),
	          _react2.default.createElement(
	            'span',
	            { className: 'SingleView--nav-button', disabled: disableSingleViewNext, title: 'Next Item', onClick: loadNextItem },
	            _react2.default.createElement(_MDIcon2.default, { icon: _icons.ic_arrow_forward })
	          )
	        ),
	        _react2.default.createElement('iframe', { ref: function ref(iframe) {
	            return _this2.iframeEl = iframe;
	          }, src: link })
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
	    value: function renderIframe(link) {
	      var _this3 = this;
	
	      return _react2.default.createElement('iframe', {
	        ref: function ref(iframe) {
	          _this3.iframeEl = iframe;
	        },
	        src: link
	      });
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
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ic_view_module = exports.ic_arrow_forward = exports.ic_arrow_back = exports.ic_star_border = exports.ic_star = undefined;
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ic_star = exports.ic_star = _react2.default.createElement("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" });
	var ic_star_border = exports.ic_star_border = _react2.default.createElement("path", { d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" });
	var ic_arrow_back = exports.ic_arrow_back = _react2.default.createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" });
	var ic_arrow_forward = exports.ic_arrow_forward = _react2.default.createElement("path", { d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" });
	var ic_view_module = exports.ic_view_module = _react2.default.createElement("path", { d: "M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" });

/***/ },
/* 215 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 216 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjc5ZTY0NDBmZmIyNGU4Y2I3YjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL190b0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLXJlcG9ydGFsLWJhc2Uvc3JjL3JlcG9ydGFsLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vTURJY29uL3NyYy9NREljb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9NREljb24vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9kaXN0L1Byb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19EYXRhVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fSGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUZsYXR0ZW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSGFzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hTi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXRlcmF0ZWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUHJvcGVydHlEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVNldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5pcS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb3ZlclJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3Nob3J0T3V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0NsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9oYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbm9vcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3VuaW9uQnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1kYXRhc291cmNlLmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3Qtc2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VHcmlkVGlsZS9JbWFnZUdyaWRUaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWQvSW1hZ2VHcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWFjdFZpZGVvL1JlYWN0VmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmdsZVZpZXcvU2luZ2xlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlR3JpZFRpbGUvSW1hZ2VHcmlkVGlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsibGF1bmNoVmlkZW9IaXRsaXN0IiwiY29uZmlnTmFtZSIsInRodW1ic1BsYWNlaG9sZGVyIiwiRXJyb3IiLCJUeXBlRXJyb3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlcG9ydGFsIiwibWl4aW4iLCJzdG9yZSIsInJlcXVpcmUiLCJ1aWQiLCJTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImdsb2JhbCIsIk1hdGgiLCJzZWxmIiwiRnVuY3Rpb24iLCJfX2ciLCJmcmVlR2xvYmFsIiwiZnJlZVNlbGYiLCJPYmplY3QiLCJyb290IiwiaXNBcnJheSIsIkFycmF5IiwiYmFzZUlzTmF0aXZlIiwiZ2V0VmFsdWUiLCJnZXROYXRpdmUiLCJvYmplY3QiLCJrZXkiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImlzT2JqZWN0IiwiaXQiLCJkUCIsImNyZWF0ZURlc2MiLCJmIiwiaXNPYmplY3RMaWtlIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImEiLCJnZXRSYXdUYWciLCJvYmplY3RUb1N0cmluZyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiYmFzZUdldFRhZyIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiYUZ1bmN0aW9uIiwiZm4iLCJ0aGF0IiwibGVuZ3RoIiwiYiIsImMiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhc093blByb3BlcnR5IiwiYW5PYmplY3QiLCJJRThfRE9NX0RFRklORSIsInRvUHJpbWl0aXZlIiwiTyIsIlAiLCJBdHRyaWJ1dGVzIiwiZSIsImxpc3RDYWNoZUNsZWFyIiwibGlzdENhY2hlRGVsZXRlIiwibGlzdENhY2hlR2V0IiwibGlzdENhY2hlSGFzIiwibGlzdENhY2hlU2V0IiwiTGlzdENhY2hlIiwiZW50cmllcyIsImluZGV4IiwiY2xlYXIiLCJlbnRyeSIsInNldCIsInByb3RvdHlwZSIsImhhcyIsImVxIiwiYXNzb2NJbmRleE9mIiwiYXJyYXkiLCJpc0tleWFibGUiLCJnZXRNYXBEYXRhIiwibWFwIiwiZGF0YSIsIl9fZGF0YV9fIiwibmF0aXZlQ3JlYXRlIiwiaXNTeW1ib2wiLCJJTkZJTklUWSIsInRvS2V5IiwicmVzdWx0IiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiZGVmIiwiVEFHIiwidGFnIiwic3RhdCIsImNvbmZpZ3VyYWJsZSIsInNoYXJlZCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiSU9iamVjdCIsImRlZmluZWQiLCJNYXAiLCJtYXBDYWNoZUNsZWFyIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsInJlSXNEZWVwUHJvcCIsInJlSXNQbGFpblByb3AiLCJpc0tleSIsInR5cGUiLCJ0ZXN0Iiwic2V0VG9BcnJheSIsInNpemUiLCJmb3JFYWNoIiwiaWRlbnRpdHkiLCJiYXNlSXNBcmd1bWVudHMiLCJvYmplY3RQcm90byIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiaXNBcmd1bWVudHMiLCJNQVhfU0FGRV9JTlRFR0VSIiwiaXNMZW5ndGgiLCJzeW1ib2xUYWciLCJSZXBvcnRhbEJhc2UiLCJ0YXJnZXQiLCJzb3VyY2UiLCJpIiwibGV2ZWwiLCJhcmdzIiwiY29uc29sZSIsIl9sb2dnZXIiLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50Iiwic3RyIiwicGFyc2VGbG9hdCIsInJlcGxhY2UiLCJVUkwiLCJyZXNvbHZlIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiY29kZSIsIm1lc3NhZ2UiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsImVycm9yIiwic2VuZCIsInZhcmlhYmxlIiwicXVlcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsInZhcnMiLCJzcGxpdCIsInBhaXIiLCJ0b0xvd2VyQ2FzZSIsIm8iLCJwYXRoIiwib3JpZ2luIiwicGF0aG5hbWUiLCJhUGFpciIsInB1c2giLCJqb2luIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImNvZiIsIkFSRyIsInRyeUdldCIsIlQiLCJCIiwiY2FsbGVlIiwiY3R4IiwiaGlkZSIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJJU19GT1JDRUQiLCJGIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIlMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJJU19XUkFQIiwiVyIsImV4cFByb3RvIiwib3duIiwib3V0IiwiQyIsInZpcnR1YWwiLCJSIiwiVSIsImV4ZWMiLCJkb2N1bWVudEVsZW1lbnQiLCJMSUJSQVJZIiwicmVkZWZpbmUiLCJJdGVyYXRvcnMiLCIkaXRlckNyZWF0ZSIsInNldFRvU3RyaW5nVGFnIiwiZ2V0UHJvdG90eXBlT2YiLCJJVEVSQVRPUiIsIkJVR0dZIiwia2V5cyIsIkZGX0lURVJBVE9SIiwiS0VZUyIsIlZBTFVFUyIsInJldHVyblRoaXMiLCJCYXNlIiwiTkFNRSIsIkNvbnN0cnVjdG9yIiwibmV4dCIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJraW5kIiwicHJvdG8iLCJ2YWx1ZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIm1ldGhvZHMiLCJJdGVyYXRvclByb3RvdHlwZSIsImJpdG1hcCIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsIlNIQVJFRCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJwcm9jZXNzIiwic2V0VGFzayIsInNldEltbWVkaWF0ZSIsImNsZWFyVGFzayIsImNsZWFySW1tZWRpYXRlIiwiTWVzc2FnZUNoYW5uZWwiLCJjb3VudGVyIiwicXVldWUiLCJPTlJFQURZU1RBVEVDSEFOR0UiLCJkZWZlciIsImNoYW5uZWwiLCJwb3J0IiwicnVuIiwiaWQiLCJsaXN0ZW5lciIsIm5leHRUaWNrIiwicG9ydDIiLCJwb3J0MSIsIm9ubWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJzZXRUaW1lb3V0IiwidG9JbnRlZ2VyIiwibWluIiwicHgiLCJyYW5kb20iLCJjb25jYXQiLCJTZXQiLCJzZXRDYWNoZUFkZCIsInNldENhY2hlSGFzIiwiU2V0Q2FjaGUiLCJhZGQiLCJzdGFja0NsZWFyIiwic3RhY2tEZWxldGUiLCJzdGFja0dldCIsInN0YWNrSGFzIiwic3RhY2tTZXQiLCJTdGFjayIsImFycmF5UHVzaCIsIm9mZnNldCIsImNhc3RQYXRoIiwiYmFzZUdldCIsImJhc2VJc0VxdWFsRGVlcCIsImJhc2VJc0VxdWFsIiwib3RoZXIiLCJiaXRtYXNrIiwiY3VzdG9taXplciIsInN0YWNrIiwiY2FjaGVIYXMiLCJjYWNoZSIsInN0cmluZ1RvUGF0aCIsImFycmF5U29tZSIsIkNPTVBBUkVfUEFSVElBTF9GTEFHIiwiQ09NUEFSRV9VTk9SREVSRURfRkxBRyIsImVxdWFsQXJyYXlzIiwiZXF1YWxGdW5jIiwiaXNQYXJ0aWFsIiwiYXJyTGVuZ3RoIiwib3RoTGVuZ3RoIiwic3RhY2tlZCIsInNlZW4iLCJhcnJWYWx1ZSIsIm90aFZhbHVlIiwiY29tcGFyZWQiLCJvdGhJbmRleCIsInJlSXNVaW50IiwiaXNJbmRleCIsImlzU3RyaWN0Q29tcGFyYWJsZSIsIm1hdGNoZXNTdHJpY3RDb21wYXJhYmxlIiwic3JjVmFsdWUiLCJmdW5jUHJvdG8iLCJmdW5jVG9TdHJpbmciLCJ0b1NvdXJjZSIsImZ1bmMiLCJpc0Z1bmN0aW9uIiwiaXNBcnJheUxpa2UiLCJzdHViRmFsc2UiLCJmcmVlRXhwb3J0cyIsIm5vZGVUeXBlIiwiZnJlZU1vZHVsZSIsIm1vZHVsZUV4cG9ydHMiLCJCdWZmZXIiLCJuYXRpdmVJc0J1ZmZlciIsImlzQnVmZmVyIiwiYXN5bmNUYWciLCJmdW5jVGFnIiwiZ2VuVGFnIiwicHJveHlUYWciLCJiYXNlSXNUeXBlZEFycmF5IiwiYmFzZVVuYXJ5Iiwibm9kZVV0aWwiLCJub2RlSXNUeXBlZEFycmF5IiwiaXNUeXBlZEFycmF5IiwiYXJyYXlMaWtlS2V5cyIsImJhc2VLZXlzIiwiTURJY29uIiwicHJvcHMiLCJmaWxsIiwiaWNvbiIsImRlZmF1bHRQcm9wcyIsInQiLCJyZWFjdCIsInIiLCJuIiwibG9hZGVkIiwibSIsInAiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIlJlZmVyZW5jZUVycm9yIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsInMiLCJhc3NpZ24iLCJsIiwidSIsIl9pbWFnZU9ubG9hZCIsImJpbmQiLCJfaW1hZ2VPbmVycm9yIiwic3RhdGUiLCJzcmMiLCJwbGFjZWhvbGRlckhpZGRlbiIsInBsYWNlaG9sZGVyIiwic2l6aW5nIiwicG9zaXRpb24iLCJwcm9wb3J0aW9uIiwibG9hZGluZyIsIl9sb2FkIiwiX2NvbXB1dGVEaW1lbnNpb25zIiwiX2NvbXB1dGVQcm9wb3J0aW9uIiwiYXNwZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJzZXRTdGF0ZSIsImluZGV4T2YiLCJkIiwicHJlbG9hZCIsImZhZGUiLCJoIiwicGxhY2Vob2xkZXJTaXppbmciLCJnIiwiYWx0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwYWRkaW5nVG9wIiwicm9sZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImRpc3BsYXkiLCJvbkxvYWQiLCJvbkVycm9yIiwiX3Jlc2V0IiwicHJldmVudExvYWQiLCJDb21wb25lbnQiLCJQcm9taXNlIiwiZm9yYmlkZGVuRmllbGQiLCJ0b0lPYmplY3QiLCJ0b0xlbmd0aCIsInRvSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiaXRlcmFibGUiLCJpdGVyRm4iLCJzdGVwIiwiaXRlcmF0b3IiLCJkb25lIiwidW4iLCJBcnJheVByb3RvIiwicmV0IiwiZGVzY3JpcHRvciIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIml0ZXIiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwicHJvbWlzZSIsInRoZW4iLCJ0YXNrIiwiZFBzIiwiZW51bUJ1Z0tleXMiLCJJRV9QUk9UTyIsIkVtcHR5IiwiY3JlYXRlRGljdCIsImlmcmFtZSIsImx0IiwiZ3QiLCJpZnJhbWVEb2N1bWVudCIsImNvbnRlbnRXaW5kb3ciLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsImdldEtleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImFycmF5SW5kZXhPZiIsIm5hbWVzIiwiJGtleXMiLCJERVNDUklQVE9SUyIsIlNQRUNJRVMiLCJLRVkiLCJEIiwiVE9fU1RSSU5HIiwicG9zIiwiU3RyaW5nIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsIm1heCIsInZhbCIsInZhbHVlT2YiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJhZGRUb1Vuc2NvcGFibGVzIiwiaXRlcmF0ZWQiLCJfdCIsIl9pIiwiX2siLCJBcmd1bWVudHMiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJtaWNyb3Rhc2siLCJQUk9NSVNFIiwiJFByb21pc2UiLCJlbXB0eSIsIkludGVybmFsIiwiR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJGYWtlUHJvbWlzZSIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsInNhbWVDb25zdHJ1Y3RvciIsImlzVGhlbmFibGUiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIlByb21pc2VDYXBhYmlsaXR5IiwiJCRyZXNvbHZlIiwiJCRyZWplY3QiLCJwZXJmb3JtIiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsIm9uVW5oYW5kbGVkIiwiYWJydXB0IiwiaXNVbmhhbmRsZWQiLCJlbWl0Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJyZWFzb24iLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJ3cmFwcGVyIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJjYXBhYmlsaXR5IiwieCIsImFsbCIsInJlbWFpbmluZyIsIiRpbmRleCIsImFscmVhZHlDYWxsZWQiLCJyYWNlIiwiJGF0IiwicG9pbnQiLCJUT19TVFJJTkdfVEFHIiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9uIiwiRGF0YVZpZXciLCJoYXNoQ2xlYXIiLCJoYXNoRGVsZXRlIiwiaGFzaEdldCIsImhhc2hIYXMiLCJoYXNoU2V0IiwiSGFzaCIsIlVpbnQ4QXJyYXkiLCJXZWFrTWFwIiwidGhpc0FyZyIsImFycmF5RmlsdGVyIiwicHJlZGljYXRlIiwicmVzSW5kZXgiLCJiYXNlSW5kZXhPZiIsImFycmF5SW5jbHVkZXMiLCJhcnJheUluY2x1ZGVzV2l0aCIsImNvbXBhcmF0b3IiLCJiYXNlVGltZXMiLCJpbmhlcml0ZWQiLCJpc0FyciIsImlzQXJnIiwiaXNCdWZmIiwiaXNUeXBlIiwic2tpcEluZGV4ZXMiLCJhcnJheU1hcCIsIml0ZXJhdGVlIiwiYmFzZUZpbmRJbmRleCIsImZyb21SaWdodCIsImlzRmxhdHRlbmFibGUiLCJiYXNlRmxhdHRlbiIsImRlcHRoIiwiaXNTdHJpY3QiLCJiYXNlR2V0QWxsS2V5cyIsImtleXNGdW5jIiwic3ltYm9sc0Z1bmMiLCJiYXNlSGFzSW4iLCJiYXNlSXNOYU4iLCJzdHJpY3RJbmRleE9mIiwiYXJnc1RhZyIsImVxdWFsQnlUYWciLCJlcXVhbE9iamVjdHMiLCJnZXRUYWciLCJhcnJheVRhZyIsIm9iamVjdFRhZyIsIm9iaklzQXJyIiwib3RoSXNBcnIiLCJvYmpUYWciLCJvdGhUYWciLCJvYmpJc09iaiIsIm90aElzT2JqIiwiaXNTYW1lVGFnIiwib2JqSXNXcmFwcGVkIiwib3RoSXNXcmFwcGVkIiwib2JqVW53cmFwcGVkIiwib3RoVW53cmFwcGVkIiwiYmFzZUlzTWF0Y2giLCJtYXRjaERhdGEiLCJub0N1c3RvbWl6ZXIiLCJvYmpWYWx1ZSIsImlzTWFza2VkIiwicmVSZWdFeHBDaGFyIiwicmVJc0hvc3RDdG9yIiwicmVJc05hdGl2ZSIsIlJlZ0V4cCIsInBhdHRlcm4iLCJib29sVGFnIiwiZGF0ZVRhZyIsImVycm9yVGFnIiwibWFwVGFnIiwibnVtYmVyVGFnIiwicmVnZXhwVGFnIiwic2V0VGFnIiwic3RyaW5nVGFnIiwid2Vha01hcFRhZyIsImFycmF5QnVmZmVyVGFnIiwiZGF0YVZpZXdUYWciLCJmbG9hdDMyVGFnIiwiZmxvYXQ2NFRhZyIsImludDhUYWciLCJpbnQxNlRhZyIsImludDMyVGFnIiwidWludDhUYWciLCJ1aW50OENsYW1wZWRUYWciLCJ1aW50MTZUYWciLCJ1aW50MzJUYWciLCJ0eXBlZEFycmF5VGFncyIsImJhc2VNYXRjaGVzIiwiYmFzZU1hdGNoZXNQcm9wZXJ0eSIsInByb3BlcnR5IiwiYmFzZUl0ZXJhdGVlIiwiaXNQcm90b3R5cGUiLCJuYXRpdmVLZXlzIiwiZ2V0TWF0Y2hEYXRhIiwiaGFzSW4iLCJiYXNlUHJvcGVydHkiLCJiYXNlUHJvcGVydHlEZWVwIiwib3ZlclJlc3QiLCJzZXRUb1N0cmluZyIsImJhc2VSZXN0Iiwic3RhcnQiLCJjb25zdGFudCIsImJhc2VTZXRUb1N0cmluZyIsInN0cmluZyIsInN5bWJvbFByb3RvIiwic3ltYm9sVG9TdHJpbmciLCJiYXNlVG9TdHJpbmciLCJjcmVhdGVTZXQiLCJMQVJHRV9BUlJBWV9TSVpFIiwiYmFzZVVuaXEiLCJpbmNsdWRlcyIsImlzQ29tbW9uIiwib3V0ZXIiLCJjb21wdXRlZCIsInNlZW5JbmRleCIsImNvcmVKc0RhdGEiLCJub29wIiwibWFwVG9BcnJheSIsInN5bWJvbFZhbHVlT2YiLCJieXRlTGVuZ3RoIiwiYnl0ZU9mZnNldCIsImJ1ZmZlciIsImNvbnZlcnQiLCJnZXRBbGxLZXlzIiwib2JqUHJvcHMiLCJvYmpMZW5ndGgiLCJvdGhQcm9wcyIsInNraXBDdG9yIiwib2JqQ3RvciIsIm90aEN0b3IiLCJnZXRTeW1ib2xzIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJpc093biIsInVubWFza2VkIiwic3R1YkFycmF5IiwibmF0aXZlR2V0U3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbCIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJBcnJheUJ1ZmZlciIsIkN0b3IiLCJjdG9yU3RyaW5nIiwiaGFzUGF0aCIsImhhc0Z1bmMiLCJIQVNIX1VOREVGSU5FRCIsInNwcmVhZGFibGVTeW1ib2wiLCJpc0NvbmNhdFNwcmVhZGFibGUiLCJtYXNrU3JjS2V5IiwiYXJyYXlQcm90byIsInNwbGljZSIsImxhc3RJbmRleCIsInBvcCIsIm1lbW9pemUiLCJNQVhfTUVNT0laRV9TSVpFIiwibWVtb2l6ZUNhcHBlZCIsIm92ZXJBcmciLCJmcmVlUHJvY2VzcyIsImJpbmRpbmciLCJ0cmFuc2Zvcm0iLCJhcmciLCJuYXRpdmVNYXgiLCJvdGhlckFyZ3MiLCJzaG9ydE91dCIsIkhPVF9DT1VOVCIsIkhPVF9TUEFOIiwibmF0aXZlTm93IiwiRGF0ZSIsIm5vdyIsImNvdW50IiwibGFzdENhbGxlZCIsInN0YW1wIiwicGFpcnMiLCJyZUxlYWRpbmdEb3QiLCJyZVByb3BOYW1lIiwicmVFc2NhcGVDaGFyIiwibWF0Y2giLCJudW1iZXIiLCJxdW90ZSIsImRlZmF1bHRWYWx1ZSIsImlzQXJyYXlMaWtlT2JqZWN0IiwiRlVOQ19FUlJPUl9URVhUIiwicmVzb2x2ZXIiLCJtZW1vaXplZCIsIkNhY2hlIiwidW5pb25CeSIsImFycmF5cyIsIkhpdGxpc3REYXRhc291cmNlIiwib3B0aW9ucyIsIl9zZWFyY2hWYWx1ZXMiLCJtb2RpZmllciIsInJlcXVlc3RSZXNwb25zZSIsImluaXRpYWxMb2FkIiwiX3NraXBQYWdlIiwiaXNQYWdpbmciLCJsb2NhdGlvbkRlc2VyaWFsaXplIiwicmVwb3J0aWQiLCJoaXRsaXN0SUQiLCJwYXJhbXMiLCJQYWdlSWQiLCJwYWdlSUQiLCJwYWdlU3RhdGVJZCIsInBhZ2VTdGF0ZUlEIiwiUHJldmlldyIsInByZXZpZXciLCJhdHRybmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzb3J0aW5nUGFnaW5nVmFsdWVzIiwicGFnaW5nVmFsdWVzIiwicGFnZU51bWJlciIsInBhZ2luZ0ZvcndhcmQiLCJwcm9taXNlUmVxdWVzdCIsInNlcnZpY2VVUkwiLCJzZXJpYWxpemVQYXJhbXMiLCJwYXJzZVJlc3BvbnNlIiwicmVzcG9uc2UiLCJwYXJzZSIsInBhZ2VJbmZvIiwiX3NwdiIsInB2Iiwic3RhcnRJZCIsImxhc3RTdGFydElkIiwiZmlyc3RTdGFydElkIiwic3RhcnRWYWx1ZSIsImxhc3RTdGFydFZhbHVlIiwiZmlyc3RTdGFydFZhbHVlIiwiSGl0bGlzdFNldHVwIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsIl9jb25maWciLCJnZXRPcmlnaW5hbENvbmZpZyIsIl9lbGVtZW50VHlwZSIsIkhpdExpc3RFbGVtZW50VHlwZSIsIl9vcCIsIlNlYXJjaGFibGVMaXN0T3BlcmF0b3IiLCJjYXB0aW9ucyIsInNpbmdsZVZpZXdUZXh0cyIsImhpdGxpc3REYXRhIiwiZGlzYWJsZU5leHRCdXR0b24iLCJkaXNhYmxlUHJldkJ1dHRvbiIsImNvbHVtbnMiLCJhbGxDb2x1bW5zIiwiY29tcG9uZW50SWQiLCJwYWdlSWQiLCJsYW5ndWFnZSIsInNlcnZpY2VVcmwiLCJxdWVyeVNlbGVjdG9yIiwianNvbkRhdGUiLCJZIiwiTGFuZyIsImNvbnN0ciIsImV2YWwiLCJzY3JpcHRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNmZyIsInNjcmlwdCIsInRleHQiLCJNRURJQV9UWVBFUyIsIkltYWdlR3JpZFRpbGUiLCJhY3Rpb25CdXR0b24iLCJhY3Rpb25JY29uIiwib25TZWxlY3QiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJfY29tcHV0ZVRpbGVUeXBlIiwibWVkaWF0eXBlIiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJpY29uU2VydmVyIiwiZXNjYXBlIiwiaWNvbnMiLCJhdWRpbyIsInZpZGVvIiwidW5rbm93biIsInByb3BUeXBlcyIsIm9uZU9mIiwiSW1hZ2VHcmlkIiwiaXRlbUNsaWNrSGFuZGxlciIsIml0ZW0iLCJpdGVtcyIsImR1bW15SXRlbXMiLCJyZW5kZXJEdW1teUl0ZW1zIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJSZWFjdFZpZGVvIiwiaGFuZGxlRGF0YUxvYWRpbmdFcnJvciIsImxvZyIsInJldHVyblRvR3JpZCIsInNpbmdsZVZpZXdWaXNpYmxlIiwic2luZ2xlVmlldyIsImxpbmsiLCJEUyIsImluaXRpYWxEYXRhTG9hZCIsInByb2Nlc3NEYXRhIiwiY2F0Y2giLCJsb2FkUHJldmlvdXNJdGVtIiwibmF2aWdhdGVJdGVtcyIsImxvYWROZXh0SXRlbSIsImxvYWROZXh0UGFnZSIsIm5leHRQYWdlIiwibG9hZFByZXZpb3VzUGFnZSIsInByZXZpb3VzUGFnZSIsImxvYWRNb3JlIiwiY2hlY2tTaW5nbGVWaWV3TmF2U3RhdGUiLCJkaXNhYmxlU2luZ2xlVmlld1ByZXYiLCJkaXNhYmxlU2luZ2xlVmlld05leHQiLCJ2ZXJib3NlIiwic2V0dXBEYXRhTGlzdGVuZXIiLCJyZW5kZXJOYXZpZ2F0aW9uIiwiZGF0YUxvYWRpbmdNZXNzYWdlIiwiaTE4biIsImNvbmZpZyIsInBhZ2luYXRpb24iLCJjb250aW51b3VzTmF2aWdhdGlvbiIsInBhZ2luZ05hdmlnYXRpb24iLCJ0b3RhbEhpdHMiLCJ0ZXh0QWxpZ24iLCJHbG9iYWwiLCJvbiIsImluaXRpYWxpc2VDb25maWciLCJmaWx0ZXJJbmZvIiwiZGlyZWN0aW9uIiwiaXRlbXNMZW5ndGgiLCJwcmV2RGF0YSIsInByZXZJbmRleCIsIm5leHRJbmRleCIsIm5ld0l0ZW1zIiwicHJldlN0YXRlIiwiY3VycmVudEl0ZW1JbmRleCIsIm1vZGUiLCJ0YWdzIiwibmV3RGF0YSIsInBhcnNlZERhdGEiLCJwcmVwYXJlRGF0YSIsInJlc3BvbnNlaWQiLCJzbGluayIsInRyaW0iLCJTaW5nbGVWaWV3IiwidmlzaWJsZSIsImlmcmFtZVZpc2libGUiLCJyZWNlaXZlTWVzc2FnZSIsIm9yaWdpbmFsRXZlbnQiLCJ0YXJnZXRPcmlnaW4iLCJhY3Rpb24iLCJ3YXJuIiwiaWZyYW1lSGVpZ2h0IiwibmV4dFByb3BzIiwibWFwUHJvcHNUb1N0YXRlIiwiaGFuZHNoYWtlIiwiaWZyYW1lRWwiLCJnZXREb21haW4iLCJyZXR1cm5Ub0dyaWRBY3Rpb24iLCJjbG9zZU9uU3VibWl0IiwiaWNfc3RhciIsImljX3N0YXJfYm9yZGVyIiwiaWNfYXJyb3dfYmFjayIsImljX2Fycm93X2ZvcndhcmQiLCJpY192aWV3X21vZHVsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OzsrUUN0Q0E7Ozs7O0FBR0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7O0FBS0EsS0FBTUEscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsVUFBRCxFQUF1QztBQUFBLE9BQTNCQyxpQkFBMkIsdUVBQVQsSUFBUzs7QUFDaEUsT0FBRyxDQUFDRCxVQUFKLEVBQWU7QUFDYixXQUFNLElBQUlFLEtBQUosQ0FBVSwwQkFBVixDQUFOO0FBQ0QsSUFGRCxNQUVPLElBQUdGLGNBQWMs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LyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmNzllNjQ0MGZmYjI0ZThjYjdiNSIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMS4wMS4yMDE3LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBtYWluQ1NTIGZyb20gJy4vbWFpbi5jc3MnO1xuaW1wb3J0IFJlYWN0VmlkZW8gZnJvbSAnLi9SZWFjdFZpZGVvL1JlYWN0VmlkZW8nO1xuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tICdyLXJlcG9ydGFsLWJhc2UnO1xuXG4vKipcbiAqIGluaXRpYWxpc2UgSGl0TGlzdCBvbiBET01Db250ZW50TG9hZGVkIGZvciBhIHF1aWNrZXIgY29sZC1zdGFydCwgbm8gbmVlZCB0byB3YWl0IGZvciB0aGUgb3JpZ2luYWwgSGl0TGlzdFxuICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZ05hbWUgLSBuYW1lIG9mIHRoZSB2YXJpYWJsZSBwYXNzZWQgdG8gRE9NIGFzIGEgY29uZmlnXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt0aHVtYnNQbGFjZWhvbGRlcj10cnVlXSAtIGRpc3BsYXkgdGh1bWJzIGFzIGltYWdlIHBsYWNlaG9sZGVycyBpbnN0ZWFkIG9mIG1lZGlhIGljb25zXG4gKiAqL1xuY29uc3QgbGF1bmNoVmlkZW9IaXRsaXN0ID0gKGNvbmZpZ05hbWUsdGh1bWJzUGxhY2Vob2xkZXI9dHJ1ZSkgPT4ge1xuICBpZighY29uZmlnTmFtZSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb25maWcgaXMgbm90IHNwZWNpZmllZCEnKVxuICB9IGVsc2UgaWYoY29uZmlnTmFtZSAmJiB0eXBlb2YgY29uZmlnTmFtZSAhPSAnc3RyaW5nJyl7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgY29uZmlnIG5hbWUgbXVzdCBiZSBhIHN0cmluZywgbm90IGEgJHt0eXBlb2YgY29uZmlnTmFtZX1gKVxuICB9XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgIDxSZWFjdFZpZGVvXG4gICAgICBjb25maWc9e2NvbmZpZ05hbWV9XG4gICAgICB0aHVtYnNQbGFjZWhvbGRlcj17dGh1bWJzUGxhY2Vob2xkZXJ9XG4gICAgICB2ZXJib3NlPXt0cnVlfVxuICAgICAgLz4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcbiAgfSk7XG59O1xuXG53aW5kb3cuUmVwb3J0YWwgPSB3aW5kb3cuUmVwb3J0YWwgfHwge307XG5SZXBvcnRhbEJhc2UubWl4aW4od2luZG93LlJlcG9ydGFsLHtcbiAgbGF1bmNoVmlkZW9IaXRsaXN0XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19yb290LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJyYXkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fdG9LZXkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fTWFwLmpzIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0tleS5qcyIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lkZW50aXR5LmpzIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsImltcG9ydCBQcm9taXNlIGZyb20gJ2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZSc7XG5cbmNsYXNzIFJlcG9ydGFsQmFzZSB7XG5cbiAgLyoqXG4gICAqIENvcGllcyBwcm9wcyBmcm9tIGEgc291cmNlIG9iamVjdCB0byBhIHRhcmdldCBvYmplY3QuXG4gICAqXG4gICAqIE5vdGUsIHRoaXMgbWV0aG9kIHVzZXMgYSBzaW1wbGUgYGZvci4uLmluYCBzdHJhdGVneSBmb3IgZW51bWVyYXRpbmdcbiAgICogcHJvcGVydGllcy4gIFRvIGVuc3VyZSBvbmx5IGBvd25Qcm9wZXJ0aWVzYCBhcmUgY29waWVkIGZyb20gc291cmNlXG4gICAqIHRvIHRhcmdldCBhbmQgdGhhdCBhY2Nlc3NvciBpbXBsZW1lbnRhdGlvbnMgYXJlIGNvcGllZCwgdXNlIGBleHRlbmRgLlxuICAgKlxuICAgKiBAbWV0aG9kIG1peGluXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgVGFyZ2V0IG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgU291cmNlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCBhcyBmaXJzdCBhcmd1bWVudC5cbiAgICovXG4gIHN0YXRpYyBtaXhpbih0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvciAodmFyIGkgaW4gc291cmNlKSB7XG4gICAgICB0YXJnZXRbaV0gPSBzb3VyY2VbaV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBzdGF0aWMgX2xvZ2dlcihsZXZlbCwgYXJncykge1xuICAgIC8vIGFjY2VwdCBbJ2ZvbycsICdiYXInXSBhbmQgW1snZm9vJywgJ2JhciddXVxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBhcmdzID0gYXJnc1swXTtcbiAgICB9XG4gICAgLy8gb25seSBhY2NlcHQgbG9nZ2luZyBmdW5jdGlvbnNcbiAgICBzd2l0Y2gobGV2ZWwpIHtcbiAgICAgIGNhc2UgJ2xvZyc6XG4gICAgICBjYXNlICd3YXJuJzpcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgY29uc29sZVtsZXZlbF0uYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBfbG9nKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ2xvZycsIGFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIF93YXJuKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ3dhcm4nLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBfZXJyb3IoKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHRoaXMuX2xvZ2dlcignZXJyb3InLCBhcmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmFtZWQgZXZlbnQgd2l0aCBgbmFtZWBcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJuIHtFdmVudH0gUmV0dXJucyBhIGNyZWF0ZWQgZXZlbnRcbiAgICogKi9cbiAgc3RhdGljIG5ld0V2ZW50KG5hbWUpe1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW5zcGVjdHMgaWYgdGhlIGN1cnJlbnQgc3RyaW5nIG1pZ2h0IGJlIGNvbnZlcnRlZCB0byBudW1iZXIgYW5kIHJlbmRlcnMgaXQgYXMgbnVtYmVyLiBJZiBzdHJpbmcgbGVuZ3RoIGlzIDAsIHJldHVybnMgYG51bGxgLiBJZiBub25lIGFwcGxpZXMgcmV0dXJucyB0aGUgc3RyaW5nIGFzIGlzLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyIC0gdmFsdWUgb2YgdGhlIGNlbGwgaWYgbm90IEhUTUwgY29udGVudHNcbiAgICogQHJldHVybiB7TnVtYmVyfG51bGx8U3RyaW5nfVxuICAgKiAqL1xuICBzdGF0aWMgaXNOdW1iZXIoc3RyKXtcbiAgICBpZighaXNOYU4ocGFyc2VGbG9hdChzdHIpKSl7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZSgvLC9pLCcnKTsvLyByZW1vdmUgdW5uZWNlc3NhcnkgY29tbWEgYXMgYSBkZWxpbWl0ZXIgZm9yIHRob3VzYW5kcyBmcm9tIGRhdGEuXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChzdHIpO1xuICAgIH0gZWxzZSBpZihzdHIubGVuZ3RoPT0wKXtyZXR1cm4gbnVsbH0gZWxzZSB7cmV0dXJuIHN0cn1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gWEhSIHdyYXBwZWQgaW4gYSBQcm9taXNlXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gVVJMIC0gdXJsIHRvIHNlbmQgYSBgR0VUYCByZXF1ZXN0IHRvXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJldHVybnMgYSB0aGVuLWFibGUgcHJvbWlzZSB3aXRoIGBYTUxIdHRwUmVxdWVzdC5yZXNwb25zZVRleHRgXG4gICAqICovXG4gIHN0YXRpYyBwcm9taXNlUmVxdWVzdChVUkwpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICB0cnl7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIFVSTCwgdHJ1ZSk7XG4gICAgICAgIHhoci5vbmxvYWQgPSAoKT0+e1xuICAgICAgICAgIHhoci5zdGF0dXMgPT0gMjAwP1xuICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2VUZXh0KTogcmVqZWN0KHtjb2RlOnhoci5zdGF0dXMsIG1lc3NhZ2U6eGhyLnN0YXR1c1RleHR9KTt9XG4gICAgICAgIHhoci5vbmVycm9yID0gKGVycm9yKT0+e3JlamVjdChlcnJvcik7fVxuICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3Ipe1xuICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHZhcmlhYmxlIGxpc3RlZCBpbiBxdWVyeSBzdHJpbmdcbiAgICogQHBhcmFtIHshU3RyaW5nfSB2YXJpYWJsZSAtIHZhcmlhYmxlIG5hbWUgdG8gZ2V0IHZhbHVlIGZvclxuICAgKiBAcGFyYW0ge1N0cmluZz19IFtxdWVyeT13aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKV0gLSB0aGUgcXVlcnkgc3RyaW5nIHRvIHNlYXJjaCB2YXJpYWJsZSBmb3IgaW5cbiAgICogQHJldHVybiB7U3RyaW5nfSBSZXR1cm5zIHZhbHVlIGZvciB0aGUgdmFyaWFibGVcbiAgICogKi9cbiAgc3RhdGljIGdldFF1ZXJ5VmFyaWFibGUodmFyaWFibGUscXVlcnk9d2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpe1xuICAgIHZhciB2YXJzID0gcXVlcnkuc3BsaXQoXCImXCIpO1xuICAgIGZvciAodmFyIGk9MDtpPHZhcnMubGVuZ3RoO2krKykge1xuICAgICAgdmFyIHBhaXIgPSB2YXJzW2ldLnNwbGl0KFwiPVwiKTtcbiAgICAgIGlmKChwYWlyWzBdKS50b0xvd2VyQ2FzZSgpID09IHZhcmlhYmxlLnRvTG93ZXJDYXNlKCkpe3JldHVybiBwYWlyWzFdO31cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogdHVybnMgYHdpbmRvdy5sb2NhdGlvbmAgb2JqZWN0IGludG8gYW4gb2JqZWN0IHdpdGggcGFyYW1zIGFzIG5hbWVkIGtleXMgbmVjZXNzYXJ5IHRvIHJlY29uc3RydWN0IHRoZSBVUkxcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBbbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb25dIC0gYSB3aW5kb3cubG9jYXRpb24gb2JqZWN0LCBieSBkZWZhdWx0IG9mIHRoZSBob3N0IHdpbmRvdyB3aGVyZSB0aGUgc2NyaXB0IGlzIGV4ZWN1dGVkXG4gICAqIEByZXR1cm5zIHt7cGF0aDpTdHJpbmcsIHF1ZXJ5Ok9iamVjdH19IGEgYGxvY2F0aW9uYCBvYmplY3RcbiAgICogKi9cbiAgc3RhdGljIGxvY2F0aW9uRGVzZXJpYWxpemUobG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24pe1xuICAgIGxldCBvID0ge1xuICAgICAgcGF0aDogbG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBxdWVyeTp7fVxuICAgIH07XG4gICAgbG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKS5zcGxpdCgvJi8pLmZvckVhY2gocGFpcj0+e1xuICAgICAgbGV0IGFQYWlyPSBwYWlyLnNwbGl0KC89Lyk7XG4gICAgICBvLnF1ZXJ5W2FQYWlyWzBdLnRvTG93ZXJDYXNlKCldID0gYVBhaXJbMV1cbiAgICB9KTtcbiAgICByZXR1cm4gb1xuICB9XG5cbiAgLyoqXG4gICAqIFR1cm5zIGEgYGxvY2F0aW9uYCBvYmplY3QgKHJlc3VsdCBvZiBgbG9jYXRpb25EZXNlcmlhbGl6ZWApIGludG8gYSBVUkxcbiAgICogQHBhcmFtIHt7cGF0aDpTdHJpbmcsIHF1ZXJ5Ok9iamVjdH19IGxvY2F0aW9uIC0gYW4gb2JqZWN0IHdpdGggcGFyYW1zIGFuZCBhIHVybFxuICAgKiBAcmV0dXJucyB7U3RyaW5nfSAtIGEgVVJMIHN0cmluZ1xuICAgKiAqL1xuICBzdGF0aWMgbG9jYXRpb25TZXJpYWxpemUobG9jYXRpb24pe1xuICAgIGxldCBxdWVyeT1bXTtcbiAgICBmb3IobGV0IGtleSBpbiBsb2NhdGlvbi5xdWVyeSl7XG4gICAgICBxdWVyeS5wdXNoKFtrZXksbG9jYXRpb24ucXVlcnlba2V5XV0uam9pbignPScpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGggKyAnPycgKyBxdWVyeS5qb2luKCcmJyk7XG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0YWxCYXNlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItcmVwb3J0YWwtYmFzZS9zcmMvcmVwb3J0YWwtYmFzZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TZXQuanMiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TZXRDYWNoZS5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ2YXIgYmFzZUlzRXF1YWxEZWVwID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Nhc3RQYXRoLmpzIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qcyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc1N0cmljdENvbXBhcmFibGUuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCBmb3Igc291cmNlIHZhbHVlcyBzdWl0YWJsZVxuICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanMiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2VxLmpzIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2tleXMuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMjMuMDEuMjAxNy5cbiAqL1xuaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBSZW5kZXJzIGFuIFNWRyBtYXRlcmlhbCBpY29uIGltcG9ydGVkIGZyb20gYW4gaWNvbi1zZXQgYW5kIHBhc3NlZCB2aWEgcHJvcHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtPYmplY3R9IHByb3BzLmljb24gLSBpbXBvcnRlZCBpY29uIGRlZmluaXRpb24gKGpzeClcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcy5jaGlsZHJlbiAtIGltcG9ydGVkIGljb24gZGVmaW5pdGlvbiAoanN4KSBpZiB5b3UgcHJlZmVyIHVzaW5nIGNoaWxkcmVuIGFuZCBhIGNsb3NpbmcgdGFnIGluIEpTWCByYXRoZXIgdGhhbiBhbiBpY29uIGF0dHJpYnV0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtwcm9wcy5zaXplPTI0XSAtIGljb24gd2lkdGgvaGVpZ2h0ICh3aGljaCBlcXVhbHMgaGVpZ2h0IHNpbmNlIGFsbCBNRCBpY29ucyBoYXZlIHNxdWFyZSB2aWV3Ym94KS4gQW55IG9mIGAxOHwyNHwzNnw0OGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuZmlsbD0ncmdiYSgwLDAsMCwuODUpJ10gLSBpY29uIGZpbGwgLSBhbnkgdmFsaWQgY3NzIGNvbG9yLCBmaWxscyB0aGUgd2hvbGUgaWNvblxuICogKi9cbmV4cG9ydCBjbGFzcyBNREljb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCB7ZmlsbCxzaXplLGljb24sY2hpbGRyZW59ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9e2ZpbGx9IHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBjaGlsZHJlbj17aWNvbiB8fCBjaGlsZHJlbn0gLz4pO1xuICB9XG59XG5cbk1ESWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6IDI0LFxuICBmaWxsOiAncmdiYSgwLDAsMCwuODUpJ1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vTURJY29uL3NyYy9NREljb24uanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMS4wMS4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtNREljb259IGZyb20gJy4vTURJY29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ESWNvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9NREljb24vc3JjL21haW4uanMiLCIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtcInJlYWN0XCJdLHQpO2Vsc2V7dmFyIG89dChcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwicmVhY3RcIik6ZS5yZWFjdCk7Zm9yKHZhciByIGluIG8pKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6ZSlbcl09b1tyXX19KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQocil7aWYob1tyXSlyZXR1cm4gb1tyXS5leHBvcnRzO3ZhciBuPW9bcl09e2V4cG9ydHM6e30saWQ6cixsb2FkZWQ6ITF9O3JldHVybiBlW3JdLmNhbGwobi5leHBvcnRzLG4sbi5leHBvcnRzLHQpLG4ubG9hZGVkPSEwLG4uZXhwb3J0c312YXIgbz17fTtyZXR1cm4gdC5tPWUsdC5jPW8sdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1mdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBpKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9ZnVuY3Rpb24gYShlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBvPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbylPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobyxyKSYmKGVbcl09b1tyXSl9cmV0dXJuIGV9LGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciByPXRbb107ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1yZXR1cm4gZnVuY3Rpb24odCxvLHIpe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLHImJmUodCxyKSx0fX0oKSxwPW8oMSksdT1yKHApLGM9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlKXtuKHRoaXMsdCk7dmFyIG89aSh0aGlzLCh0Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsKHRoaXMsZSkpO3JldHVybiBvLl9pbWFnZU9ubG9hZD1vLl9pbWFnZU9ubG9hZC5iaW5kKG8pLG8uX2ltYWdlT25lcnJvcj1vLl9pbWFnZU9uZXJyb3IuYmluZChvKSxvLnN0YXRlPXtzcmM6dm9pZCAwLHBsYWNlaG9sZGVySGlkZGVuOiFvLnByb3BzLnBsYWNlaG9sZGVyLHNpemluZzpvLnByb3BzLnNpemluZz9vLnByb3BzLnNpemluZzpudWxsLHBvc2l0aW9uOm8ucHJvcHMucG9zaXRpb24/by5wcm9wcy5wb3NpdGlvbjpcImNlbnRlclwiLHByb3BvcnRpb246MCxsb2FkZWQ6ITEsbG9hZGluZzohMSxlcnJvcjohMX0sb31yZXR1cm4gYSh0LGUpLGwodCxbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLl9sb2FkKCksdGhpcy5fY29tcHV0ZURpbWVuc2lvbnMoKSx0aGlzLl9jb21wdXRlUHJvcG9ydGlvbih0aGlzLnByb3BzLmFzcGVjdCl9fSx7a2V5OlwiX2NvbXB1dGVEaW1lbnNpb25zXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLHQ9ZS53aWR0aCxvPWUuaGVpZ2h0O3RoaXMuc2V0U3RhdGUoe3dpZHRoOmlzTmFOKHQpP3Q6dCtcInB4XCIsaGVpZ2h0OmlzTmFOKG8pP286bytcInB4XCJ9KX19LHtrZXk6XCJfY29tcHV0ZVByb3BvcnRpb25cIix2YWx1ZTpmdW5jdGlvbihlKXtpZihlJiZlLmluZGV4T2YoXCI6XCIpPi0xKXt2YXIgdD1lLnNwbGl0KFwiOlwiKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlRmxvYXQoZSl9KTtpc05hTih0WzBdKXx8aXNOYU4odFsxXSl8fHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24oZSl7aWYoIWlzTmFOKHBhcnNlRmxvYXQoZS53aWR0aCkpKXJldHVybntwcm9wb3J0aW9uOihwYXJzZUZsb2F0KGUud2lkdGgpKih0WzFdL3RbMF0pKS50b1N0cmluZygpK2Uud2lkdGguc3Vic3RyaW5nKHBhcnNlRmxvYXQoZS53aWR0aCkudG9TdHJpbmcoKS5sZW5ndGgpLGhlaWdodDpcImF1dG9cIn19KX19fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnN0YXRlLHQ9ZS53aWR0aCxvPWUuaGVpZ2h0LHI9ZS5wcm9wb3J0aW9uLG49ZS5zcmMsaT1lLnNpemluZyxhPWUucG9zaXRpb24scz1lLmxvYWRpbmcsbD1lLmxvYWRlZCxwPWUucGxhY2Vob2xkZXJIaWRkZW4sYz10aGlzLnByb3BzLGQ9Yy5wcmVsb2FkLGY9Yy5mYWRlLGg9Yy5wbGFjZWhvbGRlclNpemluZyxnPWMucGxhY2Vob2xkZXIsbT1jLmFsdDtyZXR1cm4gdS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiUHJvcG9ydGlvbmFsSW1hZ2VcIixzdHlsZTp7d2lkdGg6dCxoZWlnaHQ6byxwYWRkaW5nVG9wOnJ9fSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJzaXplZEltZ0RpdlwiLHJvbGU6XCJpbWdcIixzdHlsZTp7YmFja2dyb3VuZEltYWdlOm4/XCJ1cmwoXCIrbitcIilcIjp2b2lkIDAsYmFja2dyb3VuZFNpemU6aSxiYWNrZ3JvdW5kUG9zaXRpb246YSxiYWNrZ3JvdW5kUmVwZWF0Omk/XCJuby1yZXBlYXRcIjpcImluaXRpYWxcIixkaXNwbGF5Omk/XCJibG9ja1wiOlwibm9uZVwifX0pLHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3NyYzpuLGFsdDptLG9uTG9hZDp0aGlzLl9pbWFnZU9ubG9hZCxvbkVycm9yOnRoaXMuX2ltYWdlT25lcnJvcixzdHlsZTp7ZGlzcGxheTppP1wibm9uZVwiOlwiYmxvY2tcIn19KSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp7YmFja2dyb3VuZEltYWdlOmc/XCJ1cmwoXCIrZytcIilcIjp2b2lkIDAsYmFja2dyb3VuZFNpemU6aD9oOmksYmFja2dyb3VuZFBvc2l0aW9uOmEsYmFja2dyb3VuZFJlcGVhdDppP1wibm8tcmVwZWF0XCI6XCJpbml0aWFsXCJ9LGNsYXNzTmFtZTpcImltYWdlUGxhY2Vob2xkZXIgXCIrKHAmJlwiaGlkZGVuXCIpK1wiIFwiKyhkJiZmJiYhcyYmbCYmXCJmYWRlZC1vdXRcIil9KSl9fSx7a2V5OlwiX2ltYWdlT25sb2FkXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiExLGxvYWRlZDohMCxlcnJvcjohMX0pfX0se2tleTpcIl9pbWFnZU9uZXJyb3JcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2V0U3RhdGUocyh7fSx0aGlzLl9yZXNldCgpLHtlcnJvcjohMH0pKX19LHtrZXk6XCJfcmVzZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybntzcmM6dm9pZCAwLGxvYWRpbmc6ITEsbG9hZGVkOiExLGVycm9yOiExfX19LHtrZXk6XCJfbG9hZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fcmVzZXQoKTtpZighdGhpcy5wcm9wcy5wcmV2ZW50TG9hZCl7dmFyIHQ9dGhpcy5wcm9wcy5zcmM7ZS5zcmMhPT10JiYoZT1zKHt9LGUse3NyYzp0P3Q6dm9pZCAwLGxvYWRpbmc6ISF0fSkpfXRoaXMuc2V0U3RhdGUoZSl9fV0pLHR9KHUuZGVmYXVsdC5Db21wb25lbnQpO3QuZGVmYXVsdD1jfSxmdW5jdGlvbih0LG8pe3QuZXhwb3J0cz1lfV0pfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcy5tYXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L1Byb3BvcnRpb25hbEltYWdlL2Rpc3QvUHJvcG9ydGlvbmFsSW1hZ2UuYnVuZGxlLmpzIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZXM2L3Byb21pc2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19IYXNoLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19Qcm9taXNlLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19XZWFrTWFwLmpzIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FwcGx5LmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanMiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXJyYXlJbmNsdWRlc2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBhIGNvbXBhcmF0b3IuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzV2l0aChhcnJheSwgdmFsdWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChjb21wYXJhdG9yKHZhbHVlLCBhcnJheVtpbmRleF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5TWFwLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlTb21lLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmRJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzRmxhdHRlbmFibGUgPSByZXF1aXJlKCcuL19pc0ZsYXR0ZW5hYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmxhdHRlbmAgd2l0aCBzdXBwb3J0IGZvciByZXN0cmljdGluZyBmbGF0dGVuaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gZmxhdHRlbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXB0aCBUaGUgbWF4aW11bSByZWN1cnNpb24gZGVwdGguXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVkaWNhdGU9aXNGbGF0dGVuYWJsZV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU3RyaWN0XSBSZXN0cmljdCB0byB2YWx1ZXMgdGhhdCBwYXNzIGBwcmVkaWNhdGVgIGNoZWNrcy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtyZXN1bHQ9W11dIFRoZSBpbml0aWFsIHJlc3VsdCB2YWx1ZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZsYXR0ZW5lZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZUZsYXR0ZW4oYXJyYXksIGRlcHRoLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgcHJlZGljYXRlIHx8IChwcmVkaWNhdGUgPSBpc0ZsYXR0ZW5hYmxlKTtcbiAgcmVzdWx0IHx8IChyZXN1bHQgPSBbXSk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKGRlcHRoID4gMCAmJiBwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgICBpZiAoZGVwdGggPiAxKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsYXR0ZW4gYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICAgIGJhc2VGbGF0dGVuKHZhbHVlLCBkZXB0aCAtIDEsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnJheVB1c2gocmVzdWx0LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghaXNTdHJpY3QpIHtcbiAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGbGF0dGVuO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VGbGF0dGVuLmpzIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJc05hTiA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hTicpLFxuICAgIHN0cmljdEluZGV4T2YgPSByZXF1aXJlKCcuL19zdHJpY3RJbmRleE9mJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcbiAgICA/IHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpXG4gICAgOiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXNOYU4sIGZyb21JbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hdGNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IGluZGV4LFxuICAgICAgbm9DdXN0b21pemVyID0gIWN1c3RvbWl6ZXI7XG5cbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgPyBkYXRhWzFdICE9PSBvYmplY3RbZGF0YVswXV1cbiAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cbiAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhY2sgPSBuZXcgU3RhY2s7XG4gICAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgICAgIDogcmVzdWx0XG4gICAgICAgICAgKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hdGNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc01hdGNoLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hTmAgd2l0aG91dCBzdXBwb3J0IGZvciBudW1iZXIgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgTmFOYCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYU47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXMnKSxcbiAgICBiYXNlTWF0Y2hlc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXNQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBwcm9wZXJ0eSA9IHJlcXVpcmUoJy4vcHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pdGVyYXRlZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGFuIGl0ZXJhdGVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2MDM0IGZvciBtb3JlIGRldGFpbHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICA/IGJhc2VNYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKVxuICAgICAgOiBiYXNlTWF0Y2hlcyh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXRlcmF0ZWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL19iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hdGNoRGF0YScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2Vzbid0IGNsb25lIGBzb3VyY2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUobWF0Y2hEYXRhWzBdWzBdLCBtYXRjaERhdGFbMF1bMV0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09PSBzb3VyY2UgfHwgYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXMuanMiLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpLFxuICAgIGdldCA9IHJlcXVpcmUoJy4vZ2V0JyksXG4gICAgaGFzSW4gPSByZXF1aXJlKCcuL2hhc0luJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzUHJvcGVydHlgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICBpZiAoaXNLZXkocGF0aCkgJiYgaXNTdHJpY3RDb21wYXJhYmxlKHNyY1ZhbHVlKSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSh0b0tleShwYXRoKSwgc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIgb2JqVmFsdWUgPSBnZXQob2JqZWN0LCBwYXRoKTtcbiAgICByZXR1cm4gKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgb2JqVmFsdWUgPT09IHNyY1ZhbHVlKVxuICAgICAgPyBoYXNJbihvYmplY3QsIHBhdGgpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlc1Byb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlUHJvcGVydHkuanMiLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5RGVlcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlUHJvcGVydHlEZWVwLmpzIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIG92ZXJSZXN0ID0gcmVxdWlyZSgnLi9fb3ZlclJlc3QnKSxcbiAgICBzZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX3NldFRvU3RyaW5nJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VSZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VSZXN0LmpzIiwidmFyIGNvbnN0YW50ID0gcmVxdWlyZSgnLi9jb25zdGFudCcpLFxuICAgIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc2V0VG9TdHJpbmdgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaG90IGxvb3Agc2hvcnRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgYmFzZVNldFRvU3RyaW5nID0gIWRlZmluZVByb3BlcnR5ID8gaWRlbnRpdHkgOiBmdW5jdGlvbihmdW5jLCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmMsICd0b1N0cmluZycsIHtcbiAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAnZW51bWVyYWJsZSc6IGZhbHNlLFxuICAgICd2YWx1ZSc6IGNvbnN0YW50KHN0cmluZyksXG4gICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNldFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VTZXRUb1N0cmluZy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKSxcbiAgICBhcnJheUluY2x1ZGVzV2l0aCA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXNXaXRoJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpLFxuICAgIGNyZWF0ZVNldCA9IHJlcXVpcmUoJy4vX2NyZWF0ZVNldCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5pcUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJhdG9yXSBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmlxKGFycmF5LCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlcyxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIHJlc3VsdCA9IFtdLFxuICAgICAgc2VlbiA9IHJlc3VsdDtcblxuICBpZiAoY29tcGFyYXRvcikge1xuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgfVxuICBlbHNlIGlmIChsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIHZhciBzZXQgPSBpdGVyYXRlZSA/IG51bGwgOiBjcmVhdGVTZXQoYXJyYXkpO1xuICAgIGlmIChzZXQpIHtcbiAgICAgIHJldHVybiBzZXRUb0FycmF5KHNldCk7XG4gICAgfVxuICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgaW5jbHVkZXMgPSBjYWNoZUhhcztcbiAgICBzZWVuID0gbmV3IFNldENhY2hlO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlZW4gPSBpdGVyYXRlZSA/IFtdIDogcmVzdWx0O1xuICB9XG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgdmFsdWUgPSAoY29tcGFyYXRvciB8fCB2YWx1ZSAhPT0gMCkgPyB2YWx1ZSA6IDA7XG4gICAgaWYgKGlzQ29tbW9uICYmIGNvbXB1dGVkID09PSBjb21wdXRlZCkge1xuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKHNlZW5JbmRleC0tKSB7XG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICghaW5jbHVkZXMoc2VlbiwgY29tcHV0ZWQsIGNvbXBhcmF0b3IpKSB7XG4gICAgICBpZiAoc2VlbiAhPT0gcmVzdWx0KSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVVuaXEuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ2YXIgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgbm9vcCA9IHJlcXVpcmUoJy4vbm9vcCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvYmplY3Qgb2YgYHZhbHVlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFkZCB0byB0aGUgc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IHNldC5cbiAqL1xudmFyIGNyZWF0ZVNldCA9ICEoU2V0ICYmICgxIC8gc2V0VG9BcnJheShuZXcgU2V0KFssLTBdKSlbMV0pID09IElORklOSVRZKSA/IG5vb3AgOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBTZXQodmFsdWVzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2NyZWF0ZVNldC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ2YXIgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGtleSA9IHJlc3VsdFtsZW5ndGhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgcmVzdWx0W2xlbmd0aF0gPSBba2V5LCB2YWx1ZSwgaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXRjaERhdGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0TWF0Y2hEYXRhLmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRUYWcuanMiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgZXhpc3RzIG9uIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrIHByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgaGFzRnVuYykge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gdG9LZXkocGF0aFtpbmRleF0pO1xuICAgIGlmICghKHJlc3VsdCA9IG9iamVjdCAhPSBudWxsICYmIGhhc0Z1bmMob2JqZWN0LCBrZXkpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICB9XG4gIGlmIChyZXN1bHQgfHwgKytpbmRleCAhPSBsZW5ndGgpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGxlbmd0aCA9IG9iamVjdCA9PSBudWxsID8gMCA6IG9iamVjdC5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc1BhdGguanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoQ2xlYXIuanMiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaEdldC5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaEhhcy5qcyIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNoU2V0LmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ByZWFkYWJsZVN5bWJvbCA9IFN5bWJvbCA/IFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGUgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBmbGF0dGVuYWJsZSBgYXJndW1lbnRzYCBvYmplY3Qgb3IgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZmxhdHRlbmFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNGbGF0dGVuYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpIHx8XG4gICAgISEoc3ByZWFkYWJsZVN5bWJvbCAmJiB2YWx1ZSAmJiB2YWx1ZVtzcHJlYWRhYmxlU3ltYm9sXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGbGF0dGVuYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbm9kZVV0aWwuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fb3ZlckFyZy5qcyIsInZhciBhcHBseSA9IHJlcXVpcmUoJy4vX2FwcGx5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VSZXN0YCB3aGljaCB0cmFuc2Zvcm1zIHRoZSByZXN0IGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSByZXN0IGFycmF5IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyUmVzdChmdW5jLCBzdGFydCwgdHJhbnNmb3JtKSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IHRyYW5zZm9ybShhcnJheSk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlclJlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fb3ZlclJlc3QuanMiLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsInZhciBiYXNlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlU2V0VG9TdHJpbmcnKSxcbiAgICBzaG9ydE91dCA9IHJlcXVpcmUoJy4vX3Nob3J0T3V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0VG9TdHJpbmcuanMiLCIvKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVOb3cgPSBEYXRlLm5vdztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvcnRPdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2hvcnRPdXQuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0NsZWFyLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0hhcy5qcyIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5kZXhPZmAgd2hpY2ggcGVyZm9ybXMgc3RyaWN0IGVxdWFsaXR5XG4gKiBjb21wYXJpc29ucyBvZiB2YWx1ZXMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmljdEluZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsInZhciBtZW1vaXplQ2FwcGVkID0gcmVxdWlyZSgnLi9fbWVtb2l6ZUNhcHBlZCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVMZWFkaW5nRG90ID0gL15cXC4vLFxuICAgIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChyZUxlYWRpbmdEb3QudGVzdChzdHJpbmcpKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9QYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvY29uc3RhbnQuanMiLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vX2Jhc2VHZXQnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2dldC5qcyIsInZhciBiYXNlSGFzSW4gPSByZXF1aXJlKCcuL19iYXNlSGFzSW4nKSxcbiAgICBoYXNQYXRoID0gcmVxdWlyZSgnLi9faGFzUGF0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgaXMgYSBkaXJlY3Qgb3IgaW5oZXJpdGVkIHByb3BlcnR5IG9mIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IF8uY3JlYXRlKHsgJ2EnOiBfLmNyZWF0ZSh7ICdiJzogMiB9KSB9KTtcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2EuYicpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgJ2InKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGhhc0luKG9iamVjdCwgcGF0aCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgaGFzUGF0aChvYmplY3QsIHBhdGgsIGJhc2VIYXNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzSW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9oYXNJbi5qcyIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIi8qKlxuICogR2V0cyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ubGFzdChbMSwgMiwgM10pO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuIGxlbmd0aCA/IGFycmF5W2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxhc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9sYXN0LmpzIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9tZW1vaXplLmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbm9vcC5qcyIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHknKSxcbiAgICBiYXNlUHJvcGVydHlEZWVwID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5RGVlcCcpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGEgZ2l2ZW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW1xuICogICB7ICdhJzogeyAnYic6IDIgfSB9LFxuICogICB7ICdhJzogeyAnYic6IDEgfSB9XG4gKiBdO1xuICpcbiAqIF8ubWFwKG9iamVjdHMsIF8ucHJvcGVydHkoJ2EuYicpKTtcbiAqIC8vID0+IFsyLCAxXVxuICpcbiAqIF8ubWFwKF8uc29ydEJ5KG9iamVjdHMsIF8ucHJvcGVydHkoWydhJywgJ2InXSkpLCAnYS5iJyk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICByZXR1cm4gaXNLZXkocGF0aCkgPyBiYXNlUHJvcGVydHkodG9LZXkocGF0aCkpIDogYmFzZVByb3BlcnR5RGVlcChwYXRoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3Byb3BlcnR5LmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC90b1N0cmluZy5qcyIsInZhciBiYXNlRmxhdHRlbiA9IHJlcXVpcmUoJy4vX2Jhc2VGbGF0dGVuJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKSxcbiAgICBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2VPYmplY3QnKSxcbiAgICBsYXN0ID0gcmVxdWlyZSgnLi9sYXN0Jyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy51bmlvbmAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgaXRlcmF0ZWVgIHdoaWNoIGlzXG4gKiBpbnZva2VkIGZvciBlYWNoIGVsZW1lbnQgb2YgZWFjaCBgYXJyYXlzYCB0byBnZW5lcmF0ZSB0aGUgY3JpdGVyaW9uIGJ5XG4gKiB3aGljaCB1bmlxdWVuZXNzIGlzIGNvbXB1dGVkLiBSZXN1bHQgdmFsdWVzIGFyZSBjaG9zZW4gZnJvbSB0aGUgZmlyc3RcbiAqIGFycmF5IGluIHdoaWNoIHRoZSB2YWx1ZSBvY2N1cnMuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OlxuICogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7Li4uQXJyYXl9IFthcnJheXNdIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGNvbWJpbmVkIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy51bmlvbkJ5KFsyLjFdLCBbMS4yLCAyLjNdLCBNYXRoLmZsb29yKTtcbiAqIC8vID0+IFsyLjEsIDEuMl1cbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8udW5pb25CeShbeyAneCc6IDEgfV0sIFt7ICd4JzogMiB9LCB7ICd4JzogMSB9XSwgJ3gnKTtcbiAqIC8vID0+IFt7ICd4JzogMSB9LCB7ICd4JzogMiB9XVxuICovXG52YXIgdW5pb25CeSA9IGJhc2VSZXN0KGZ1bmN0aW9uKGFycmF5cykge1xuICB2YXIgaXRlcmF0ZWUgPSBsYXN0KGFycmF5cyk7XG4gIGlmIChpc0FycmF5TGlrZU9iamVjdChpdGVyYXRlZSkpIHtcbiAgICBpdGVyYXRlZSA9IHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gYmFzZVVuaXEoYmFzZUZsYXR0ZW4oYXJyYXlzLCAxLCBpc0FycmF5TGlrZU9iamVjdCwgdHJ1ZSksIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMikpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pb25CeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3VuaW9uQnkuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTAuMDEuMjAxNy5cbiAqL1xuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tIFwici1yZXBvcnRhbC1iYXNlXCI7XG5pbXBvcnQgSGl0bGlzdFNldHVwIGZyb20gXCIuL2hpdGxpc3Qtc2V0dXBcIjtcblxuY2xhc3MgSGl0bGlzdERhdGFzb3VyY2UgZXh0ZW5kcyBIaXRsaXN0U2V0dXB7XG4gIC8qKlxuICAgKiBUaGlzIGNsYXNzIGFsbG93cyB0byBlc3RhYmxpc2ggYSBjb25uZWN0aW9uIHdpdGggdGhlIEhpdExpc3QgZGF0YWJhc2UgYW5kIHVzZSB1dGlsaXR5IG1ldGhvZHMgdG8gcXVlcnkgYW5kIGZpbHRlciBkYXRhIHByb3ZpZGVkIHRoZXJlJ3MgYSBoaXRsaXN0IG9uIHRoZSBwYWdlXG4gICAqIEBleHRlbmRzIEhpdGxpc3RTZXR1cFxuICAgKiAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zPXt9KXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3NlYXJjaFZhbHVlcz1bXTtcbiAgICAvKiogQHByb3BlcnR5IHtTdHJpbmd9IG1vZGlmaWVyIC0gZXh0cmEgcGFyYW1zIGFkZGVkIGFzIGEgc3RyaW5nIGZyb20gZmlsdGVycyAqL1xuICAgIHRoaXMubW9kaWZpZXIgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBwZXJmb3JtcyBpbml0aWFsIGRhdGEgbG9hZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgb2YgZGF0YVxuICAgKiAqL1xuICBpbml0aWFsRGF0YUxvYWQoKXtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aW5pdGlhbExvYWQ6dHJ1ZX0pXG4gIH1cbiAgLyoqXG4gICAqIGxvYWRzIG5leHQgcGFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgb2YgZGF0YVxuICAgKiAqL1xuICBuZXh0UGFnZSgpe1xuICAgIHRoaXMuX3NraXBQYWdlKHRydWUpO1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3RSZXNwb25zZSh7aXNQYWdpbmc6IHRydWV9LHRoaXMubW9kaWZpZXIpO1xuICB9XG4gIC8qKlxuICAgKiBsb2FkcyBwcmV2aW91cyBwYWdlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZlZCB0byBhbiBhcnJheSBvZiBkYXRhXG4gICAqICovXG4gIHByZXZpb3VzUGFnZSgpe1xuICAgIHRoaXMuX3NraXBQYWdlKGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2lzUGFnaW5nOiB0cnVlfSx0aGlzLm1vZGlmaWVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyaWVzIEhpdExpc3QgQVBJXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqICovXG4gIHJlcXVlc3RSZXNwb25zZShvcHRpb25zKXtcbiAgICBsZXQgcXVlcnk9IFJlcG9ydGFsQmFzZS5sb2NhdGlvbkRlc2VyaWFsaXplKCkucXVlcnk7XG4gICAgaWYocXVlcnkgJiYgcXVlcnkucmVwb3J0aWQgJiYgdGhpcy5oaXRsaXN0SUQpe1xuICAgICAgLypzZXQgY29tbW9uIHBhcmFtcyovXG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBQYWdlSWQ6IHRoaXMucGFnZUlELFxuICAgICAgICBwYWdlU3RhdGVJZDogdGhpcy5wYWdlU3RhdGVJRCxcbiAgICAgICAgUHJldmlldzogcXVlcnkucHJldmlld1xuICAgICAgfTtcblxuICAgICAgLyppZiBvcHRpb25zIGFyZSBwYXNzZWQsIGFkZCBvcHRpb25zKi9cbiAgICAgIGlmKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgZm9yIChsZXQgYXR0cm5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHBhcmFtc1thdHRybmFtZV0gPSB0eXBlb2Ygb3B0aW9uc1thdHRybmFtZV09PT0nYm9vbGVhbic/KG9wdGlvbnNbYXR0cm5hbWVdPycxJzonMCcpOm9wdGlvbnNbYXR0cm5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFwYXJhbXMuc2VhcmNoICYmIHRoaXMuX3NlYXJjaFZhbHVlcy5sZW5ndGg+MCl7XG4gICAgICAgIHBhcmFtcy5zZWFyY2ggPSBKU09OLnN0cmluZ2lmeSh0aGlzLl9zZWFyY2hWYWx1ZXMpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcztcblxuICAgICAgaWYgKHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzIT1udWxsICYmICFpc05hTihzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdlTnVtYmVyKSkge1xuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmluaXRpYWxMb2FkID09PSB0cnVlKSB7XG4gICAgICAgICAgc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2VOdW1iZXIgKz0gc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnaW5nRm9yd2FyZCA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwYXJhbXMuc29ydGluZ1BhZ2luZ1ZhbHVlcz1KU09OLnN0cmluZ2lmeShzb3J0aW5nUGFnaW5nVmFsdWVzKTtcblxuICAgICAgcmV0dXJuIFJlcG9ydGFsQmFzZS5wcm9taXNlUmVxdWVzdChgJHt0aGlzLnNlcnZpY2VVUkx9JiR7SGl0bGlzdERhdGFzb3VyY2Uuc2VyaWFsaXplUGFyYW1zKHBhcmFtcyl9JHt0aGlzLm1vZGlmaWVyIT0nJz8nJicrdGhpcy5tb2RpZmllcjonJ31gKVxuICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+dGhpcy5wYXJzZVJlc3BvbnNlKHJlc3BvbnNlKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIEhpdExpc3QgQVBJIHJlc3BvbnNlXG4gICAqICovXG4gIHBhcnNlUmVzcG9uc2UocmVzcG9uc2Upe1xuICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG5cbiAgICB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSByZXNwb25zZS5zb3J0aW5nUGFnaW5nVmFsdWVzO1xuICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgdGhpcy5wYWdlSW5mbyA9IHJlc3BvbnNlLnBhZ2VJbmZvO1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtCb29sZWFufSBwYWdpbmdGb3J3YXJkIGlmIGB0cnVlYCBnb2VzIGZvcndhcmQsIGlmIGBudWxsYCBnb2VzIGJhY2t3YXJkXG4gICAqIEBwYXJhbSB7IUZ1bmN0aW9ufSBjYWxsYmFja1xuICAgKiAqL1xuICBfc2tpcFBhZ2UocGFnaW5nRm9yd2FyZCl7XG4gICAgbGV0IF9zcHYgPSB7Li4udGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzfTtcbiAgICBsZXQgcHYgPSB7Li4uX3Nwdi5wYWdpbmdWYWx1ZXN9IHx8IHt9O1xuICAgIHB2LnBhZ2luZ0ZvcndhcmQgPSBwYWdpbmdGb3J3YXJkOyAvKmlmIGZvcndhcmQgaXMgbmVlZGVkIHRoZW4gcGFzcyB0cnVlLCBlbHNlIG51bGwgLSBiYWNrd2FyZCovXG4gICAgcHYuc3RhcnRJZCA9IHBhZ2luZ0ZvcndhcmQgPyBwdi5sYXN0U3RhcnRJZCA6IHB2LmZpcnN0U3RhcnRJZDtcbiAgICBwdi5zdGFydFZhbHVlID0gcGFnaW5nRm9yd2FyZCA/IHB2Lmxhc3RTdGFydFZhbHVlIDogcHYuZmlyc3RTdGFydFZhbHVlO1xuICAgIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHtcbiAgICAgIC4uLnRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcyxcbiAgICAgIHBhZ2luZ1ZhbHVlczogcHZcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIHNlcmlhbGl6ZSBwYXJhbXMgaW50byBhIHF1ZXJ5IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIC0gYW4gb2JqZWN0IHdpdGggcGFyYW1ldGVyc1xuICAgKiAqL1xuICBzdGF0aWMgc2VyaWFsaXplUGFyYW1zKHBhcmFtcyl7XG4gICAgbGV0IHF1ZXJ5ID0gW107XG4gICAgZm9yKGxldCBrZXkgaW4gcGFyYW1zKXtcbiAgICAgIHF1ZXJ5LnB1c2goW2tleSxwYXJhbXNba2V5XV0uam9pbignPScpKTtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5LmpvaW4oJyYnKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdERhdGFzb3VyY2U7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1kYXRhc291cmNlLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDEwLjAxLjIwMTcuXG4gKi9cblxuY2xhc3MgSGl0bGlzdFNldHVwe1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIC8vZml4IGZvciB3aW5kb3cubG9jYXRpb24gb3JpZ2luLCB0aGFueCBJRVxuICAgIGlmICghd2luZG93LmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICh3aW5kb3cubG9jYXRpb24ucG9ydCA/ICc6JyArIHdpbmRvdy5sb2NhdGlvbi5wb3J0OiAnJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gSGl0bGlzdFNldHVwLmdldE9yaWdpbmFsQ29uZmlnKCk7XG4gICAgdGhpcy5fZWxlbWVudFR5cGUgPSB3aW5kb3cuSGl0TGlzdEVsZW1lbnRUeXBlO1xuICAgIHRoaXMuX29wID0gd2luZG93LlNlYXJjaGFibGVMaXN0T3BlcmF0b3I7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgYWxsb3dzIGdldHRpbmcgYSBsb2NhbGlzZWQgc3RyaW5nIGluIHRoZSBsYW5ndWFnZSBvZiB0aGUgcmVwb3J0IGZyb20gSGl0bGlzdCBjb25maWcuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgLSB0aGUga2V5IHRvIGxvb2sgdGhlIHByb3BlcnR5IHVwXG4gICAqXG4gICAqICogYHN0b2VgOlwiU21hbGxlciB0aGFuIG9yIGVxdWFsXCIsXG4gICAqICogYGd0b2VgOlwiR3JlYXRlciB0aGFuIG9yIGVxdWFsXCIsXG4gICAqICogYGJldHdlZW5gOlwiQmV0d2VlblwiLFxuICAgKiAqIGBiZWZvcmVgOlwiQmVmb3JlXCIsXG4gICAqICogYGFmdGVyYDpcIkFmdGVyXCIsXG4gICAqICogYGV4YWN0bHlgOlwiRXhhY3RseVwiLFxuICAgKiAqIGBzaG93ZGVmYXVsdGNvbHNgOlwiU2hvdyBkZWZhdWx0IGNvbHVtbnNcIixcbiAgICogKiBgYXBwbHlgOlwiQXBwbHlcIixcbiAgICogKiBgY2FuY2VsYDpcIkNhbmNlbFwiLFxuICAgKiAqIGBzaG93aGlkZWA6XCJTaG93IC8gSGlkZSBjb2x1bW5zXCIsXG4gICAqICogYHllc2A6XCJZZXNcIixcbiAgICogKiBgbm9gOlwiTm9cIixcbiAgICogKiBgbG9hZGluZ0RhdGFgOlwiTG9hZGluZyBkYXRhLCBwbGVhc2Ugd2FpdC4uLlwiLFwiXG4gICAqICogYGNoZWNrYWxsYDpcIkNoZWNrIGFsbFwiLFxuICAgKiAqIGB1bmNoZWNrYWxsYDpcIlVuY2hlY2sgYWxsXCIsXG4gICAqICogYGVycm9yTG9hZGluZ2A6XCJFcnJvciBsb2FkaW5nIGRhdGFcIixcbiAgICogKiBgZXJyb3JOb0NvbHVtbnNgOlwiTm8gY29sdW1ucyBzZWxlY3RlZFwiXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1JFU1BPTkRFTlRPVkVSVklFV2A6XCJSZXNwb25kZW50IG92ZXJ2aWV3XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSSU5UYDpcIlByaW50IHRoZSBjdXJyZW50IHJlc3BvbmRlbnRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfQ0xPU0VgOlwiQ2xvc2UgdGhpcyBvdmVybGF5XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX0ZJTFRFUmA6XCJGaWx0ZXIgcXVlc3Rpb25zXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX05PVEhJTkdGT1VORGA6XCJObyBxdWVzdGlvbnMgbWF0Y2ggeW91ciBzZWFyY2hcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJFVklPVVNgOlwiUHJldmlvdXNcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfUFJFVklPVVNISU5UYDpcIlByZXZpb3VzIHJlc3BvbmRlbnRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfTkVYVGA6XCJOZXh0XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX05FWFRISU5UYDpcIk5leHQgcmVzcG9uZGVudFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19PRmA6XCJ7MH0gb2YgezF9XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX01PUkVgOlwiezB9IG1vcmVcIixcbiAgICogKiBSRVBPUlRfU0lOR0xFVklFV19BTFRFUk5BVElWRVNgOlwiQW5zd2VycyBhbHRlcm5hdGl2ZXM6XCJcbiAgICpcbiAgICogQHJldHVybnMge1N0cmluZ31cbiAgICogKi9cbiAgaTE4bihrZXkpe1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuY2FwdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KT90aGlzLl9jb25maWcuY2FwdGlvbnNba2V5XTp0aGlzLl9jb25maWcuc2luZ2xlVmlld1RleHRzLmhhc093blByb3BlcnR5KGtleSk/dGhpcy5fY29uZmlnLnNpbmdsZVZpZXdUZXh0c1trZXldOm51bGxcbiAgfVxuXG4gIGdldCBkYXRhKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5oaXRsaXN0RGF0YX1cblxuICBzZXQgZGF0YShkYXRhKXtcbiAgICB0aGlzLl9jb25maWcuaGl0bGlzdERhdGEgPSBkYXRhO1xuICB9XG4gIGdldCBkaXNhYmxlTmV4dEJ1dHRvbigpe1xuICAgIHJldHVybiB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMuZGlzYWJsZU5leHRCdXR0b24gfHwgZmFsc2VcbiAgfVxuICBnZXQgZGlzYWJsZVByZXZCdXR0b24oKXtcbiAgICByZXR1cm4gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLmRpc2FibGVQcmV2QnV0dG9uIHx8IGZhbHNlXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgdmlzaWJsZSBIaXRMaXN0IGNvbHVtbnMgb2YgT2JqZWN0IHR5cGU6IGB7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9YFxuICAgKiBAcmV0dXJucyB7QXJyYXkuPHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ30+fSBSZXR1cm5zIGFuIGFycmF5IG9mIGN1cnJlbnRseSB2aXNpYmxlIEhpdExpc3QgY29sdW1uc1xuICAgKiAqL1xuICBnZXQgY29sdW1ucygpe3JldHVybiB0aGlzLl9jb25maWcuY29sdW1uc31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBhbGwgSGl0TGlzdCBjb2x1bW5zIG9mIE9iamVjdCB0eXBlOiBge2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfWBcbiAgICogQHJldHVybnMge0FycmF5fVxuICAgKiAqL1xuICBnZXQgYWxsQ29sdW1ucygpe3JldHVybiB0aGlzLl9jb25maWcuYWxsQ29sdW1uc31cblxuICBnZXQgaGl0bGlzdElEKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5jb21wb25lbnRJZH1cbiAgZ2V0IHBhZ2VJRCgpe3JldHVybiB0aGlzLl9jb25maWcucGFnZUlkfVxuICBnZXQgbGFuZ3VhZ2UoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmxhbmd1YWdlfVxuICBnZXQgc2VydmljZVVSTCgpe3JldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7dGhpcy5fY29uZmlnLnNlcnZpY2VVcmx9YH1cbiAgZ2V0IHBhZ2VTdGF0ZUlEKCl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQYWdlU3RhdGVJZCcpPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUGFnZVN0YXRlSWQnKS52YWx1ZTp1bmRlZmluZWR9XG4gIGdldCBzb3J0aW5nUGFnaW5nVmFsdWVzKCl7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zb3J0aW5nUGFnaW5nVmFsdWVzIT1udWxsP3RoaXMuX2NvbmZpZy5zb3J0aW5nUGFnaW5nVmFsdWVzOnt9XG4gIH1cbiAgc2V0IHNvcnRpbmdQYWdpbmdWYWx1ZXModmFsKXtcbiAgICB0aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlcyA9IHZhbDtcbiAgfVxuXG4gIHN0YXRpYyBfZml4SnNvbkRhdGUoanNvbkRhdGUpIHtcbiAgICBpZiAoIShqc29uRGF0ZSAmJiBZICYmIFkuTGFuZy5pc0Z1bmN0aW9uKGpzb25EYXRlLnJlcGxhY2UpKSkge3JldHVybiBqc29uRGF0ZTt9XG4gICAgbGV0IGNvbnN0ciA9IGpzb25EYXRlLnJlcGxhY2UobmV3IFJlZ0V4cChcIl4vRGF0ZVxcXFwoKFstK10/XFxcXGQrKVxcXFwpLyRcIiksIFwibmV3IERhdGUoJDEpXCIpO1xuICAgIGlmIChjb25zdHIgPT0ganNvbkRhdGUpIHtyZXR1cm4ganNvbkRhdGU7fVxuICAgIHJldHVybiBldmFsKGNvbnN0cik7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgY29uZmlnIGZvciBhIEhpdExpc3QgaWYgaXQncyBpbml0aWFsaXNlZCBvbiB0aGUgcGFnZVxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgYWxsQ29sdW1uczpBcnJheSxcbiAgICogIGNhcHRpb25zOk9iamVjdCxcbiAgICogIGNsaWVudElkOlN0cmluZyxcbiAgICogIGNvbHVtbnM6QXJyYXksXG4gICAqICBjb21wb25lbnRJZDpTdHJpbmcsXG4gICAqICBoYXNoZWRQcm9qZWN0SWQ6U3RyaW5nLFxuICAgKiAgaGl0bGlzdERhdGE6QXJyYXksXG4gICAqICBsYW5ndWFnZTpOdW1iZXIsXG4gICAqICBuZXh0VGV4dDpTdHJpbmcsXG4gICAqICBub0luaXRpYWxMb2FkOkJvb2xlYW4sXG4gICAqICBwYWdlQWpheEVuYWJsZWQ6Qm9vbGVhbixcbiAgICogIHBhZ2VJZDpTdHJpbmcsXG4gICAqICBwcmV2VGV4dDpTdHJpbmcsXG4gICAqICBwcmV2aWV3OkJvb2xlYW4sXG4gICAqICBzZWFyY2hJdGVtczpBcnJheSxcbiAgICogIHNlYXJjaFZhbHVlczpBcnJheSxcbiAgICogIHNlcnZpY2VVcmw6U3RyaW5nLFxuICAgKiAgc2VydmljZVVybE1ldGFEYXRhOlN0cmluZyxcbiAgICogIHNob3dTaW5nbGVWaWV3T25Sb3dTZWxlY3Q6Qm9vbGVhbixcbiAgICogIHNpbmdsZVZpZXdBcGlVcmw6U3RyaW5nLFxuICAgKiAgc2luZ2xlVmlld0Zvcm1zQ2h1bmtBcGlVcmw6U3RyaW5nLFxuICAgKiAgc2luZ2xlVmlld1RleHRzOk9iamVjdCxcbiAgICogIHNvcnRpbmdQYWdpbmdWYWx1ZXM6T2JqZWN0LFxuICAgKiAgc3R5bGVzOk9iamVjdCxcbiAgICogIHZlcnNpb246U3RyaW5nXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqICovXG4gIHN0YXRpYyBnZXRPcmlnaW5hbENvbmZpZygpe1xuICAgIGxldCBzY3JpcHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0Jyk7XG4gICAgaWYoc2NyaXB0cyl7XG4gICAgICBsZXQgaT1zY3JpcHRzLmxlbmd0aCxcbiAgICAgICAgY2ZnID0gLyhZXFwuUmVwb3J0YWxcXC5IaXRMaXN0LClcXHMoLio/KVxcKTsvZ2k7XG4gICAgICB3aGlsZShpLS0pe1xuICAgICAgICBsZXQgc2NyaXB0ID0gc2NyaXB0c1tpXS50ZXh0O1xuICAgICAgICBpZihzY3JpcHQuaW5kZXhPZignWS5SZXBvcnRhbC5IaXRMaXN0LCcpPi0xKXtcbiAgICAgICAgICBsZXQgZXhlYyA9IGNmZy5leGVjKHNjcmlwdCk7XG4gICAgICAgICAgcmV0dXJuIChleGVjIT1udWxsICYmIGV4ZWNbMl0pPyBKU09OLnBhcnNlKGV4ZWNbMl0pOiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGl0bGlzdCBjb25maWcgaXMgbm90IHByZXNlbnQgb24gdGhlIHBhZ2UnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0U2V0dXBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3Qtc2V0dXAuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAwNy4wOS4yMDE2LlxyXG4gKi9cclxuXHJcbmltcG9ydCBIaXRsaXN0RGF0YXNvdXJjZSBmcm9tIFwiLi9oaXRsaXN0LWRhdGFzb3VyY2VcIjtcclxuaW1wb3J0IFJlcG9ydGFsQmFzZSBmcm9tIFwici1yZXBvcnRhbC1iYXNlXCI7XHJcblxyXG53aW5kb3cuUmVwb3J0YWwgPSB3aW5kb3cuUmVwb3J0YWwgfHwge307XHJcblJlcG9ydGFsQmFzZS5taXhpbih3aW5kb3cuUmVwb3J0YWwse1xyXG4gIEhpdGxpc3REYXRhc291cmNlXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBIaXRsaXN0RGF0YXNvdXJjZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvbWFpbi5qcyIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlR3JpZFRpbGVTdHlsZSBmcm9tICcuL0ltYWdlR3JpZFRpbGUuY3NzJztcbmltcG9ydCBJbWcgZnJvbSAnUHJvcG9ydGlvbmFsSW1hZ2UnO1xuXG5jb25zdCBNRURJQV9UWVBFUyA9IFsnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nXTtcblxuY2xhc3MgSW1hZ2VHcmlkVGlsZSBleHRlbmRzIFB1cmVDb21wb25lbnR7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgdGlsZSBmb3IgaW1hZ2UgbGlzdFxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmltYWdlIC0gaW1hZ2UgdXJsXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlciAtIGEgcGxhY2Vob2xkZXIgaW1hZ2VcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyU2l6aW5nIC0gU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlci4gQnkgZGVmYXVsdCBpdCdzIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNyY2AgaW1hZ2UsIGJ1dCBzZXQgdG8gYGluaXRpYWxgIG9yIG90aGVyIHZhbGlkIGBiYWNrZ3JvdW5kLXNpemVgIHZhbHVlIHRvIG92ZXJyaWRlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMubWVkaWF0eXBlIC0gYSBkZWZhdWx0IG1lZGlhIGljb24gaW5zdGVhZCBvZiB0aGUgcGxhY2Vob2xkZXIgaW1hZ2U6IG9uZSBvZiBgaW1hZ2VgLGBhdWRpb2AsYHZpZGVvYFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmljb25Db2xvcj1cIiNjY2NjY2NcIl0gLSBkZWZhdWx0IHBsYWNlaG9sZGVyIG1lZGlhIGljb24gY29sb3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5pY29uU2l6ZT00OF0gLSBkZWZhdWx0IHBsYWNlaG9sZGVyIG1lZGlhIGljb24gc2l6ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmFzcGVjdD1cIjE2OjlcIl0gLSBhc3BlY3QgcmF0aW8gb2YgdGhlIGltYWdlIHRvIGJlIGluIHRoZSB0aWxlXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy50aXRsZSAtIHRpdGxlIG9mIHRoZSB2aWRlb1xuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMuZGVzY3JpcHRpb24gLSBkZXNjcmlwdGlvbiBvZiB0aGUgdmlkZW9cbiAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy5hY3Rpb25JY29uIC0gaWNvbiB0byBkaXNwbGF5IGFzIHRoZSBhY3Rpb24gaWNvbi4gSXQgYWxzbyBoYXMgdG8gaGF2ZSBhIGNhbGxiYWNrIGF0dGFjaGVkIHRvIGl0IHdoZW4gcGFzc2VkLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblNlbGVjdCAtIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGxpbmsgaXMgY2xpY2tlZFxuICAgKiAqL1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgYWN0aW9uQnV0dG9uID0gbnVsbDtcbiAgICBjb25zdCB7YWN0aW9uSWNvbixvblNlbGVjdCxhc3BlY3QsdGl0bGUscGxhY2Vob2xkZXJTaXppbmcsaW1hZ2UsZGVzY3JpcHRpb259PXRoaXMucHJvcHM7XG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aW9uSWNvbikge1xuICAgICAgYWN0aW9uQnV0dG9uID0gPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1lZGl0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tYWN0aW9uLWljb25cIj57YWN0aW9uSWNvbn08L2Rpdj5cbiAgICAgIDwvZGl2PjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWNvdmVyXCIgb25DbGljaz17b25TZWxlY3R9PlxuICAgICAgICAgIDxJbWdcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cbiAgICAgICAgICAgIHNpemluZz1cImNvdmVyXCJcbiAgICAgICAgICAgIHByZWxvYWQ9e3RydWV9XG4gICAgICAgICAgICBmYWRlPXt0cnVlfVxuICAgICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLl9jb21wdXRlVGlsZVR5cGUoKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyU2l6aW5nPXtwbGFjZWhvbGRlclNpemluZ31cbiAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tbWV0YVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS10aXRsZSBlbGxpcHNpc1wiIG9uQ2xpY2s9e29uU2VsZWN0fT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWRlc2NyaXB0aW9uIGVsbGlwc2lzXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHthY3Rpb25CdXR0b259XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2NvbXB1dGVUaWxlVHlwZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qge3BsYWNlaG9sZGVyLG1lZGlhdHlwZSxpY29uU2l6ZSxpY29uQ29sb3J9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICghcGxhY2Vob2xkZXIgJiYgbWVkaWF0eXBlKSB7XG4gICAgICAgIGlmIChNRURJQV9UWVBFUy5pbmRleE9mKG1lZGlhdHlwZSkgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgdHlwZSBcIiR7bWVkaWF0eXBlfVwiIGlzIHNwZWNpZmllZGApXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGljb24gPSBJbWFnZUdyaWRUaWxlLmljb25TZXJ2ZXIobWVkaWF0eXBlLCBpY29uU2l6ZSwgaWNvbkNvbG9yKTtcbiAgICAgICAgcmV0dXJuICdkYXRhOmltYWdlL3N2Zyt4bWwsJyArIGVzY2FwZShpY29uKTtcbiAgICAgIH0gZWxzZSBpZighIXBsYWNlaG9sZGVyKXtcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZXNjYXBlKEltYWdlR3JpZFRpbGUuaWNvblNlcnZlcigndW5rbm93bicsIGljb25TaXplLCBpY29uQ29sb3IpKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaWNvbiB3aXRoIGEgY29ycmVjdCBmaWxsIGNvbG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gaWNvbiBuYW1lIChvbmUgb2YgYGltYWdlYCwgYHZpZGVvYCwgYGF1ZGlvYClcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtzaXplPTI0XSAtIGljb24gc2l6ZSBpbiBwaXhlbHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtmaWxsPVwiI2NjY2NjY1wiXSAtIHZhbGlkIENTUyBjb2xvciBkZWNsYXJhdGlvblxuICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgKiAqL1xuICBzdGF0aWMgaWNvblNlcnZlcihuYW1lLCBzaXplID0gNDgsIGZpbGwgPSBcIiNjY2NjY2NcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpY29ucyA9IHtcbiAgICAgICAgaW1hZ2U6IGA8cGF0aCBkPVwiTTIxIDE5VjVjMC0xLjEtLjktMi0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnpNOC41IDEzLjVsMi41IDMuMDFMMTQuNSAxMmw0LjUgNkg1bDMuNS00LjV6XCIvPmAsXG4gICAgICAgIGF1ZGlvOiBgPHBhdGggZD1cIk0xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnpcIi8+YCxcbiAgICAgICAgdmlkZW86IGA8cGF0aCBkPVwiTTE4IDRsMiA0aC0zbC0yLTRoLTJsMiA0aC0zbC0yLTRIOGwyIDRIN0w1IDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNGgtNHpcIi8+YCxcbiAgICAgICAgdW5rbm93bjogYDxwYXRoIGQ9XCJNMjEgNXY2LjU5bC0zLTMuMDEtNCA0LjAxLTQtNC00IDQtMy0zLjAxVjVjMC0xLjEuOS0yIDItMmgxNGMxLjEgMCAyIC45IDIgMnptLTMgNi40MmwzIDMuMDFWMTljMCAxLjEtLjkgMi0yIDJINWMtMS4xIDAtMi0uOS0yLTJ2LTYuNThsMyAyLjk5IDQtNCA0IDQgNC0zLjk5elwiLz5gLFxuICAgICAgfTtcbiAgICAgIGlmICghaWNvbnNbbmFtZV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpY29uIFwiJHtuYW1lfVwiIGlzIG5vdCBvbiB0aGUgbGlzdGApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBgPHN2ZyBmaWxsPVwiJHtmaWxsfVwiIGhlaWdodD1cIiR7c2l6ZX1cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIke3NpemV9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiR7aWNvbnNbbmFtZV19PC9zdmc+YFxuICAgIH0gY2F0Y2goZXJyb3Ipe1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICB9XG4gIH1cbn1cblxuSW1hZ2VHcmlkVGlsZS5wcm9wVHlwZXMgPSB7XG4gIGltYWdlICAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlciAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXJTaXppbmc6IFByb3BUeXBlcy5vbmVPZihbJ2NvbnRhaW4nLCAnY292ZXInLCAnaW5pdGlhbCddKSxcbiAgbWVkaWF0eXBlICAgICAgICA6IFByb3BUeXBlcy5vbmVPZihNRURJQV9UWVBFUyksXG4gIGljb25Db2xvciAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uU2l6ZSAgICAgICAgIDogUHJvcFR5cGVzLm51bWJlcixcbiAgYXNwZWN0ICAgICAgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlICAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvbiAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aW9uSWNvbiAgICAgICA6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdCAgICAgICAgIDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkltYWdlR3JpZFRpbGUuZGVmYXVsdFByb3BzID0ge1xuICBpY29uQ29sb3I6IFwiI2NjY2NjY1wiLFxuICBpY29uU2l6ZSA6IDQ4LFxuICBhc3BlY3QgICA6IFwiMTY6OVwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VHcmlkVGlsZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlR3JpZFRpbGUvSW1hZ2VHcmlkVGlsZS5qcyIsImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlR3JpZFRpbGUgZnJvbSAnLi4vSW1hZ2VHcmlkVGlsZS9JbWFnZUdyaWRUaWxlJztcblxuXG4vKipcbiAqIGBJbWFnZUdyaWRgIGlzIGEgc3RhdGVsZXNzIFJlYWN0IGNvbXBvbmVudCB0aGF0IGFsbG93cyB0byBjb21wdXRlIGFuIGFycmF5IG9mIEltYWdlR3JpZFRpbGVzIGZyb20gYGl0ZW1zYCBwYXNzZWQgaW4gcHJvcHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtBcnJheX0gcHJvcHMuaXRlbXMgLSBhbiBhcnJheSBvZiBpdGVtcyBge2lkOk51bWJlcnxTdHJpbmcsIGltYWdlOlN0cmluZywgbWVkaWF0eXBlOj9TdHJpbmcsIHBsYWNlaG9sZGVyOj9TdHJpbmcsIHRpdGxlOlN0cmluZyxkZXNjcmlwdGlvbjpTdHJpbmd9YFxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmFzcGVjdCAtIGFzcGVjdCByYXRpbyBmb3IgdGhlIEltYWdlR3JpZFRpbGUgaW1hZ2VcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBwcm9wcy5hY3Rpb25JY29uIC0gYWN0aW9uIGljb24gSlNYIHdpdGggYSBib3VuZCBoYW5kbGVyXG4gKiBAcGFyYW0gez9TdHJpbmd9IHByb3BzLnBsYWNlaG9sZGVyU2l6aW5nIC0gU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBwbGFjZWhvbGRlci4gQnkgZGVmYXVsdCBpdCdzIHRoZSBzYW1lIGFzIGZvciB0aGUgYHNyY2AgaW1hZ2UsIGJ1dCBzZXQgdG8gYGluaXRpYWxgIG9yIG90aGVyIHZhbGlkIGBiYWNrZ3JvdW5kLXNpemVgIHZhbHVlIHRvIG92ZXJyaWRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMub25TZWxlY3QgLSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkIG9uXG4gKiBAcGFyYW0ge051bWJlcn0gcHJvcHMuZHVtbXlJdGVtcyAtIGZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiBhbiBpdGVtIGlzIGNsaWNrZWQgb25cbiAqICovXG5jbGFzcyBJbWFnZUdyaWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuICBpdGVtQ2xpY2tIYW5kbGVyID0gKGl0ZW0pID0+IChldmVudCkgPT4gdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2l0ZW1zLCBkdW1teUl0ZW1zLCBhc3BlY3QsIHBsYWNlaG9sZGVyU2l6aW5nLCBhY3Rpb25JY29ufSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggPiAwICYmIGl0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxJbWFnZUdyaWRUaWxlXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZC50b1N0cmluZygpfVxuICAgICAgICAgICAgICBhc3BlY3Q9e2FzcGVjdH1cbiAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2V9XG4gICAgICAgICAgICAgIG1lZGlhdHlwZT17aXRlbS5tZWRpYXR5cGV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpdGVtLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlclNpemluZz17aXRlbS5pbWFnZT9wbGFjZWhvbGRlclNpemluZzonaW5pdGlhbCd9XG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgYWN0aW9uSWNvbj17YWN0aW9uSWNvbn1cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuaXRlbUNsaWNrSGFuZGxlcihpdGVtKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgICB7ZHVtbXlJdGVtcyAmJiB0aGlzLnJlbmRlckR1bW15SXRlbXMoZHVtbXlJdGVtcyl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuXG4gIHJlbmRlckR1bW15SXRlbXMoY291bnQpIHtcbiAgICBjb25zdCBkdW1teUl0ZW1zID0gW107XG4gICAgd2hpbGUgKGNvdW50LS0pIHtcbiAgICAgIGR1bW15SXRlbXMucHVzaCg8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGVcIiBrZXk9e2BkdW1teSR7Y291bnR9YH0vPilcbiAgICB9XG4gICAgcmV0dXJuIGR1bW15SXRlbXNcbiAgfVxufVxuXG5JbWFnZUdyaWQucHJvcFR5cGVzID0ge1xuICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICBhc3BlY3Q6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGlvbkljb246IFByb3BUeXBlcy5lbGVtZW50LFxuICBwbGFjZWhvbGRlclNpemluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGR1bW15SXRlbXM6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cbkltYWdlR3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGR1bW15SXRlbXM6IDEyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUdyaWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VHcmlkL0ltYWdlR3JpZC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMS4wMS4yMDE3LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2VHcmlkIGZyb20gXCIuLi9JbWFnZUdyaWQvSW1hZ2VHcmlkXCI7XG5pbXBvcnQgSGl0bGlzdERTIGZyb20gXCJyLWhpdGxpc3QtZGF0YXNvdXJjZVwiO1xuaW1wb3J0IFNpbmdsZVZpZXcgZnJvbSBcIi4uL1NpbmdsZVZpZXcvU2luZ2xlVmlld1wiO1xuaW1wb3J0IHVuaW9uQnkgZnJvbSBcImxvZGFzaC91bmlvbkJ5XCI7XG5cbmNsYXNzIFJlYWN0VmlkZW8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5jb25maWcgLSBuYW1lIG9mIHRoZSBjb25maWcgdGhhdCBtYXBzIHF1ZXN0aW9uIGlkcyBmcm9tIGRhdGEgd2l0aCB0aGUgZGF0YSB0eXBlc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByb3BzLnRodW1ic1BsYWNlaG9sZGVyIC0gZGlzcGxheSB0aHVtYnMgYXMgaW1hZ2UgcGxhY2Vob2xkZXJzIGluc3RlYWQgb2YgbWVkaWEgaWNvbnNcbiAgICpcbiAgICogKi9cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5EUyA9IG5ldyBIaXRsaXN0RFMoKTtcbiAgICB0aGlzLnByb3BzLnZlcmJvc2UgJiYgY29uc29sZS5sb2codGhpcy5EUyk7XG4gICAgdGhpcy5zZXR1cERhdGFMaXN0ZW5lcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpdGVtczogbnVsbCxcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIHNpbmdsZVZpZXc6IHtcbiAgICAgICAgbGluazogJydcbiAgICAgIH0sXG4gICAgICBzaW5nbGVWaWV3VmlzaWJsZTogZmFsc2UsXG4gICAgICBkaXNhYmxlU2luZ2xlVmlld1ByZXY6IGZhbHNlLFxuICAgICAgZGlzYWJsZVNpbmdsZVZpZXdOZXh0OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtpdGVtcywgc2luZ2xlVmlld1Zpc2libGUsIHNpbmdsZVZpZXcsIGVycm9yLCBkaXNhYmxlU2luZ2xlVmlld1ByZXYsIGRpc2FibGVTaW5nbGVWaWV3TmV4dH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCByZW5kZXIgPSBudWxsO1xuICAgIGlmICghZXJyb3IgJiYgQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZW5kZXIgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgR3JpZENvbnRhaW5lciAkeyFzaW5nbGVWaWV3VmlzaWJsZSA/ICdHcmlkVmlldycgOiAnJ31gfT5cbiAgICAgICAgICA8U2luZ2xlVmlld1xuICAgICAgICAgICAgbGluaz17c2luZ2xlVmlldy5saW5rfVxuICAgICAgICAgICAgdmlzaWJsZT17c2luZ2xlVmlld1Zpc2libGV9XG4gICAgICAgICAgICBpbml0aWFsTG9hZD17dHJ1ZX1cbiAgICAgICAgICAgIHJldHVyblRvR3JpZEFjdGlvbj17dGhpcy5yZXR1cm5Ub0dyaWR9XG4gICAgICAgICAgICBsb2FkUHJldmlvdXNJdGVtPXt0aGlzLmxvYWRQcmV2aW91c0l0ZW19XG4gICAgICAgICAgICBsb2FkTmV4dEl0ZW09e3RoaXMubG9hZE5leHRJdGVtfVxuICAgICAgICAgICAgaGVhZGVyVGV4dD17YEVkaXQgdmlkZW8gXCIke3NpbmdsZVZpZXcudGl0bGV9XCJgfVxuICAgICAgICAgICAgZGlzYWJsZVNpbmdsZVZpZXdQcmV2PXtkaXNhYmxlU2luZ2xlVmlld1ByZXZ9XG4gICAgICAgICAgICBkaXNhYmxlU2luZ2xlVmlld05leHQ9e2Rpc2FibGVTaW5nbGVWaWV3TmV4dH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkQ29udGFpbmVyXCIgc3R5bGU9e3tkaXNwbGF5OiAhc2luZ2xlVmlld1Zpc2libGUgPyAnYmxvY2snIDogJ25vbmUnfX0+XG4gICAgICAgICAgICA8SW1hZ2VHcmlkXG4gICAgICAgICAgICAgIGFzcGVjdD1cIjE2OjlcIlxuICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vblNlbGVjdH1cbiAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlck5hdmlnYXRpb24oKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLkRTKSB7XG4gICAgICAgIHJlbmRlciA9IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdyaWRDb250YWluZXIgSW1hZ2VHcmlkXCI+e3RoaXMuZGF0YUxvYWRpbmdNZXNzYWdlKCl9PC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSGl0bGlzdERhdGFzb3VyY2UgaXMgbm90IGF2YWlsYWJsZScpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZW5kZXJcbiAgfVxuXG4gIGRhdGFMb2FkaW5nTWVzc2FnZSgpIHtcbiAgICBsZXQgbWVzc2FnZTtcbiAgICBjb25zdCB7aXRlbXMsIGVycm9yfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBtZXNzYWdlID0gJ2Vycm9yTG9hZGluZydcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXMpICYmIGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbWVzc2FnZSA9ICdSRVBPUlRfU0lOR0xFVklFV19OT1RISU5HRk9VTkQnXG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSAnbG9hZGluZ0RhdGEnXG4gICAgfVxuICAgIHJldHVybiB0aGlzLkRTLmkxOG4obWVzc2FnZSlcbiAgfVxuXG4gIHJlbmRlck5hdmlnYXRpb24oKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uID0gdGhpcy5jb25maWcucGFnaW5hdGlvbjtcbiAgICAgIGlmIChwYWdpbmF0aW9uID09PSAnY29udGludW91cycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGludW91c05hdmlnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2luZ05hdmlnYXRpb24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBwYWdpbmdOYXZpZ2F0aW9uKCkge1xuICAgIGxldCBwYWdlSW5mbyA9ICcnO1xuICAgIGlmICh0aGlzLkRTLnBhZ2VJbmZvICYmIHRoaXMuRFMuc29ydGluZ1BhZ2luZ1ZhbHVlcyAmJiB0aGlzLkRTLnNvcnRpbmdQYWdpbmdWYWx1ZXMudG90YWxIaXRzKSB7XG4gICAgICBwYWdlSW5mbyA9IGAke3RoaXMuRFMucGFnZUluZm99IG9mICR7dGhpcy5EUy5zb3J0aW5nUGFnaW5nVmFsdWVzLnRvdGFsSGl0c31gXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblJvd1wiPlxuICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBhY2NlbnRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvYWRQcmV2aW91c1BhZ2V9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLkRTLmRpc2FibGVQcmV2QnV0dG9ufVxuICAgICAgICA+XG4gICAgICAgICAgIHt0aGlzLkRTLmkxOG4oJ1JFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTJyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gYWNjZW50XCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2FkTmV4dFBhZ2V9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLkRTLmRpc2FibGVOZXh0QnV0dG9ufVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMuRFMuaTE4bignUkVQT1JUX1NJTkdMRVZJRVdfTkVYVCcpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuPntwYWdlSW5mb308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb250aW51b3VzTmF2aWdhdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Sb3dcIiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgPHNwYW4gcmVsPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWxCdXR0b24gZmxhdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9hZE1vcmV9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLkRTLmRpc2FibGVOZXh0QnV0dG9ufVxuICAgICAgICAgICAgICA+TG9hZCBtb3JlPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cblxuICAvKipcbiAgICogTGF1bmNoZXMgbGlzdGVuZXIgZm9yIGBZLkdsb2JhbC5yZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZWAgZXZlbnQgd2l0aGluIFlVSSB3aGljaCBpcyB0cmlnZ2VyZWQgZXZlcnkgdGltZSB0aGUgZmlsdGVyIHBhbmVsIHVwZGF0ZXMgb3Igb24gaW5pdGlhbCBsb2FkXG4gICAqICovXG4gIHNldHVwRGF0YUxpc3RlbmVyKCkge1xuICAgIGlmIChZICYmIFkuR2xvYmFsKSB7XG4gICAgICBZLkdsb2JhbC5vbihcInJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlXCIsIGZpbHRlckluZm8gPT4ge1xuICAgICAgICB0aGlzLmluaXRpYWxpc2VDb25maWcodGhpcy5wcm9wcy5jb25maWcpO1xuICAgICAgICBpZiAodGhpcy5EUyAmJiB0aGlzLmNvbmZpZykge1xuICAgICAgICAgIHRoaXMuRFMubW9kaWZpZXIgPSBmaWx0ZXJJbmZvOyAvLyBmaWx0ZXIgaW5mb3JtYXRpb24gYXMgYSBtb2RpZmllciBmb3IgZGF0YSBmZXRjaFxuICAgICAgICAgIHRoaXMuRFMuaW5pdGlhbERhdGFMb2FkKCkudGhlbihyZXNwb25zZSA9PiB0aGlzLnByb2Nlc3NEYXRhKHJlc3BvbnNlKSkuY2F0Y2godGhpcy5oYW5kbGVEYXRhTG9hZGluZ0Vycm9yKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lVSSBpcyBub3QgZGVmaW5lZCBvciBhY2Nlc3NpYmxlLCBjYW5ub3Qgc2V0IHVwIGEgXCJyZXBvcnRjb250cm9sbGVyOnZpZXdNb2RlRGF0YVVwZGF0ZVwiIGxpc3RlbmVyJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGF0YUxvYWRpbmdFcnJvciA9IChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXJyb3I6IHRydWUsXG4gICAgICBpdGVtczogW11cbiAgICB9KVxuICB9O1xuXG4gIHJldHVyblRvR3JpZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiBmYWxzZSxcbiAgICAgIHNpbmdsZVZpZXc6IHtcbiAgICAgICAgbGluazogJydcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLkRTLmluaXRpYWxEYXRhTG9hZCgpLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5wcm9jZXNzRGF0YShyZXNwb25zZSkpLmNhdGNoKHRoaXMuaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XG4gIH1cblxuICBsb2FkUHJldmlvdXNJdGVtID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlSXRlbXMoJ2JhY2snKVxuICB9XG5cbiAgbG9hZE5leHRJdGVtID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlSXRlbXMoJ2ZvcndhcmQnKVxuICB9XG5cbiAgbmF2aWdhdGVJdGVtcyhkaXJlY3Rpb24pIHtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xuICAgIGxldCBpdGVtc0xlbmd0aCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcHJldkRhdGEgPSB0aGlzLnN0YXRlLnNpbmdsZVZpZXc7XG4gICAgbGV0IHByZXZJbmRleCA9IGl0ZW1zLmluZGV4T2YocHJldkRhdGEpO1xuICAgIGxldCBuZXh0SW5kZXggPSBkaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/ICsrcHJldkluZGV4IDogLS1wcmV2SW5kZXg7XG5cbiAgICBpZiAobmV4dEluZGV4IDwgMCAmJiAhdGhpcy5EUy5kaXNhYmxlUHJldkJ1dHRvbikge1xuICAgICAgaXRlbXMgPSB0aGlzLmxvYWRQcmV2aW91c1BhZ2UoKTtcbiAgICB9IGVsc2UgaWYgKG5leHRJbmRleCA+IGl0ZW1zTGVuZ3RoICYmICF0aGlzLkRTLmRpc2FibGVOZXh0QnV0dG9uKSB7XG4gICAgICBpdGVtcyA9IHRoaXMubG9hZE5leHRQYWdlKClcbiAgICB9XG5cbiAgICBpZiAoIWl0ZW1zLmhhc093blByb3BlcnR5KCd0aGVuJykpIHtcbiAgICAgIGl0ZW1zID0gUHJvbWlzZS5yZXNvbHZlKGl0ZW1zKTtcbiAgICB9XG4gICAgY29uc3QgW2Rpc2FibGVTaW5nbGVWaWV3UHJldiwgZGlzYWJsZVNpbmdsZVZpZXdOZXh0XSA9IHRoaXMuY2hlY2tTaW5nbGVWaWV3TmF2U3RhdGUobmV4dEluZGV4KTtcbiAgICBpdGVtcy50aGVuKCgpID0+IHtcbiAgICAgIGxldCBzaW5nbGVWaWV3O1xuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgICBjb25zdCBuZXdJdGVtcyA9IHByZXZTdGF0ZS5pdGVtcztcbiAgICAgICAgaWYgKG5leHRJbmRleCA8IDAgJiYgIWRpc2FibGVTaW5nbGVWaWV3UHJldikge1xuICAgICAgICAgIHNpbmdsZVZpZXcgPSBuZXdJdGVtc1tuZXdJdGVtcy5sZW5ndGggLSAxXVxuICAgICAgICB9IGVsc2UgaWYgKG5leHRJbmRleCA+IGl0ZW1zTGVuZ3RoICYmICFkaXNhYmxlU2luZ2xlVmlld05leHQpIHtcbiAgICAgICAgICBzaW5nbGVWaWV3ID0gbmV3SXRlbXNbMF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaW5nbGVWaWV3ID0gbmV3SXRlbXNbbmV4dEluZGV4XVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGlzYWJsZVNpbmdsZVZpZXdOZXh0LFxuICAgICAgICAgIGRpc2FibGVTaW5nbGVWaWV3UHJldixcbiAgICAgICAgICBzaW5nbGVWaWV3OiBzaW5nbGVWaWV3LFxuICAgICAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlU2luZ2xlVmlld05hdlN0YXRlKGl0ZW0pIHtcbiAgfVxuXG4gIGxvYWROZXh0UGFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5EUy5uZXh0UGFnZSgpLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5wcm9jZXNzRGF0YShyZXNwb25zZSkpLmNhdGNoKHRoaXMuaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XG4gIH07XG4gIGxvYWRQcmV2aW91c1BhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuRFMucHJldmlvdXNQYWdlKCkudGhlbihyZXNwb25zZSA9PiB0aGlzLnByb2Nlc3NEYXRhKHJlc3BvbnNlKSkuY2F0Y2godGhpcy5oYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcbiAgfTtcbiAgbG9hZE1vcmUgPSAoKSA9PiB7XG4gICAgdGhpcy5EUy5uZXh0UGFnZSgpLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5wcm9jZXNzRGF0YShyZXNwb25zZSwgJ2FwcGVuZCcpKS5jYXRjaCh0aGlzLmhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xuICB9O1xuXG4gIG9uU2VsZWN0ID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBbZGlzYWJsZVNpbmdsZVZpZXdQcmV2LCBkaXNhYmxlU2luZ2xlVmlld05leHRdID0gdGhpcy5jaGVja1NpbmdsZVZpZXdOYXZTdGF0ZSh0aGlzLnN0YXRlLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGlzYWJsZVNpbmdsZVZpZXdQcmV2LFxuICAgICAgZGlzYWJsZVNpbmdsZVZpZXdOZXh0LFxuICAgICAgc2luZ2xlVmlldzogaXRlbSxcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiB0cnVlXG4gICAgfSlcbiAgfTtcblxuICBjaGVja1NpbmdsZVZpZXdOYXZTdGF0ZShjdXJyZW50SXRlbUluZGV4KSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xuICAgIGxldCBkaXNhYmxlU2luZ2xlVmlld05leHQgPSBmYWxzZSxcbiAgICAgIGRpc2FibGVTaW5nbGVWaWV3UHJldiA9IGZhbHNlO1xuXG4gICAgaWYgKGN1cnJlbnRJdGVtSW5kZXggPD0gMCAmJiB0aGlzLkRTLmRpc2FibGVQcmV2QnV0dG9uKSB7XG4gICAgICBkaXNhYmxlU2luZ2xlVmlld1ByZXYgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoY3VycmVudEl0ZW1JbmRleCA+PSBpdGVtcy5sZW5ndGggLSAxICYmIHRoaXMuRFMuZGlzYWJsZU5leHRCdXR0b24pIHtcbiAgICAgIGRpc2FibGVTaW5nbGVWaWV3TmV4dCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICBkaXNhYmxlU2luZ2xlVmlld1ByZXYsXG4gICAgICBkaXNhYmxlU2luZ2xlVmlld05leHRcbiAgICBdXG4gIH1cblxuXG4gIGluaXRpYWxpc2VDb25maWcoY29uZmlnTmFtZSkge1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIGlmICghd2luZG93W2NvbmZpZ05hbWVdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY29uZmlnIGlzIG5vdCBwYXNzZWQgZnJvbSBiYWNrZWQnKVxuICAgICAgfVxuICAgICAgdGhpcy5jb25maWcgPSB3aW5kb3dbY29uZmlnTmFtZV07XG4gICAgfVxuICB9XG5cbiAgcHJvY2Vzc0RhdGEoZGF0YSwgbW9kZSA9ICdyZXBsYWNlJykge1xuICAgIGxldCBjID0gdGhpcy5jb25maWcsXG4gICAgICBjb25maWcgPSB7fTtcbiAgICBbJ2lkJywgJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ2ltYWdlJywgJ2F1ZGlvJywgJ3ZpZGVvJywgJ3RhZ3MnXS5mb3JFYWNoKGl0ZW0gPT4gY29uZmlnW2l0ZW1dID0gW3RoaXMuY29uZmlnW2l0ZW1dXSk7XG4gICAgY29uZmlnID0ge1xuICAgICAgaWQ6IGMuaWQsXG4gICAgICB0aXRsZTogYy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBjLmRlc2NyaXB0aW9uLFxuICAgICAgaW1hZ2U6IGMuaW1hZ2UsXG4gICAgICBhdWRpbzogYy5hdWRpbyxcbiAgICAgIHZpZGVvOiBjLnZpZGVvLFxuICAgICAgdGFnczogYy50YWdzLFxuICAgIH07XG4gICAgbGV0IG5ld0RhdGEgPSBkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBwYXJzZWREYXRhID0ge307XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAgIHBhcnNlZERhdGFba2V5XSA9IHRoaXMucHJlcGFyZURhdGEoaXRlbVtjb25maWdba2V5XV0sIGtleSk7XG4gICAgICAgIC8vIGlmIGltYWdlIC0gd2UgbWlnaHQgd2FudCB0byB1c2UgYSBwbGFjZWhvbGRlciBhcyB0aGUgdGh1bWIsIGFuZCBsb2FkIHRoZSBmdWxsIGltYWdlIGluIGJhY2tncm91bmRcbiAgICAgICAgaWYgKGtleSA9PT0gJ2ltYWdlJykge1xuICAgICAgICAgIGlmKHBhcnNlZERhdGEuaW1hZ2Upe1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMudGh1bWJzUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgcGFyc2VkRGF0YS5wbGFjZWhvbGRlciA9IHBhcnNlZERhdGEuaW1hZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZWREYXRhLmltYWdlID0gcGFyc2VkRGF0YS5pbWFnZS5yZXBsYWNlKC9fdGh1bWIvZ2ksICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2FsY3VsYXRlIG1lZGlhdHlwZSBvciBhIHBsYWNlaG9sZGVyIGljb25cbiAgICAgICAgaWYgKFsndmlkZW8nLCAnYXVkaW8nLCAnaW1hZ2UnXS5pbmRleE9mKGtleSkgPiAtMSAmJiBjb25maWdba2V5XSAmJiBwYXJzZWREYXRhW2tleV0pIHtcbiAgICAgICAgICBwYXJzZWREYXRhLm1lZGlhdHlwZSA9IGtleVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBnZXQgaWQgZm9yIGtleXNcbiAgICAgIHBhcnNlZERhdGEuaWQgPSBpdGVtLnJlc3BvbnNlaWQgPyBpdGVtLnJlc3BvbnNlaWQgOiBpbmRleDtcbiAgICAgIC8vIGNhbGN1bGF0ZSBsaW5rIHBhc3NlZCBhcyBgc2xpbmtgIHByb3BlcnR5IGluIGRhdGFcbiAgICAgIGlmIChpdGVtLnNsaW5rKSB7XG4gICAgICAgIGxldCBsID0gaXRlbS5zbGluaztcbiAgICAgICAgcGFyc2VkRGF0YS5saW5rID0gKC9ocmVmPScoLis/KScvZ2kpLmV4ZWMobClbMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyc2VkRGF0YTtcbiAgICB9KTtcblxuICAgIC8vdXBkYXRlIHN0YXRlIHdpdGggdGhlIG5ldyBzZXQgb2YgZGF0YSBvciBhIG1lcmdlZCBkYXRhXG4gICAgaWYgKG1vZGUgPT09ICdyZXBsYWNlJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGl0ZW1zOiBuZXdEYXRhLFxuICAgICAgICBlcnJvcjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2FwcGVuZCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgIGl0ZW1zOiBbLi4ucHJldlN0YXRlLml0ZW1zLCAuLi5uZXdEYXRhXSxcbiAgICAgICAgZXJyb3I6IGZhbHNlXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAnbWVyZ2UnKSB7XG4gICAgICBjb25zb2xlLmxvZyhtb2RlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgIGl0ZW1zOiB1bmlvbkJ5KG5ld0RhdGEsIHByZXZTdGF0ZS5pdGVtcywgJ2lkJyksXG4gICAgICAgIGVycm9yOiBmYWxzZVxuICAgICAgfSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCfRhdGA0LXQvSDQt9C90LDQtdGCINGH0YLQvicpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIG1hc3NhZ2UgZGF0YSB0byBmaXQgdGhlIHR5cGUgd2UgZXhwZWN0IHRvIHJlY2VpdmUgaW4gcmVhY3Qgdmlld1xuICAgKiAqL1xuICBwcmVwYXJlRGF0YShkYXRhLCB0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgIGxldCByZXN1bHQgPSAoL3NyYz0nKC4rPyknL2dpKS5leGVjKGRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdCAhPT0gbnVsbCAmJiByZXN1bHRbMV0gPyByZXN1bHRbMV0gOiB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOlxuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgY2FzZSAndmlkZW8nOlxuICAgICAgY2FzZSAnYXVkaW8nOlxuICAgICAgICByZXR1cm4gIShkYXRhLmluZGV4T2YoJy0nKSA+IC0xICYmIGRhdGEudHJpbSgpLmxlbmd0aCA9PT0gMSkgPyBkYXRhLnRyaW0oKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0YWdzJzpcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgKGRhdGEuaW5kZXhPZignLCcpID4gLTEgPyBkYXRhLnNwbGl0KCcsJykgOiBkYXRhLmluZGV4T2YoJy0nKSA+IC0xICYmIGRhdGEudHJpbSgpLmxlbmd0aCA9PT0gMSA/IHVuZGVmaW5lZCA6IGRhdGEudHJpbSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cblxuICBzdGF0aWMgYWN0aW9uSWNvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0zIDE3LjI1VjIxaDMuNzVMMTcuODEgOS45NGwtMy43NS0zLjc1TDMgMTcuMjV6TTIwLjcxIDcuMDRjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6XCIvPlxuICAgICAgPC9zdmc+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0VmlkZW87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVhY3RWaWRlby9SZWFjdFZpZGVvLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1ESWNvbiBmcm9tICdNREljb24nO1xuaW1wb3J0IHtpY19hcnJvd19iYWNrLGljX2Fycm93X2ZvcndhcmQsaWNfdmlld19tb2R1bGV9IGZyb20gJy4uL2ljb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgc2luZ2xlIHZpZXcgd2hpY2ggaXMgYSBuYXZpZ2F0aW9uIGhlYWRlciBmb2xsb3dlZCBieSBhbiByZW5kZXJJZnJhbWUgdGhhdCBsb2FkcyBleHRlcm5hbCBjb250ZW50IGZyb20gYSBsaW5rXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcm9wcy52aXNpYmxlPWZhbHNlXSAtIHdoZXRoZXIgdGhlIHJlbmRlcklmcmFtZSBpcyB2aXNpYmxlIG9uIGEgcGFnZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHByb3BzLmluaXRpYWxMb2FkIC0gd2hldGhlciBpdCdzIHRoZSBmaXJzdCB0aW1lIHRoZSByZW5kZXJJZnJhbWUgbG9hZHMgKG5lY2Vzc2FyeSBmb3IgdGhlIHN1cnZleSwgYmVjYXVzZSBhbiBpbml0aWFsIGxvYWQgaXMgdGhlIGZpcnN0IHRpbWUgdGhlIHN1cnZleSBsb2FkcywgYW5kIHNlY29uZCBsb2FkIGlzIHdoZW4gdGhlIHN1cnZleSBpcyBzdWJtaXR0ZWQpXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5saW5rIC0gdGhlIGxpbmsgdG8gYSBwYWdlIHRvIGxvYWQgaW4gYW4gcmVuZGVySWZyYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuaGVhZGVyVGV4dF0gLSB0aGUgdGV4dCB0byBiZSBkaXNwbGF5ZWQgbmV4dCB0byB0aGUgYmFjayBidXR0b24gaW4gdGhlIG5hdiBoZWFkZXJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMucmV0dXJuVG9HcmlkIC0gdGhlIGNhbGxiYWNrIGV4ZWN1dGVkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gbmF2aWdhdGUgb2ZmIHRoZSBTaW5nbGVWaWV3IHBhZ2UgKGhpdHRpbmcgYmFjayBvciBzdWJtaXQpXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3Byb3BzLmNsb3NlT25TdWJtaXQgPSBmYWxzZV0gLSB0aGUgY2FsbGJhY2sgZXhlY3V0ZWQgd2hlbiB0aGUgdXNlciB3YW50cyB0byBuYXZpZ2F0ZSBvZmYgdGhlIFNpbmdsZVZpZXcgcGFnZSAoaGl0dGluZyBiYWNrIG9yIHN1Ym1pdClcbiAgICogKi9cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgbGV0IHt2aXNpYmxlLCBsaW5rLCBpbml0aWFsTG9hZD10cnVlfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlzaWJsZSxcbiAgICAgIGxpbmssXG4gICAgICBpbml0aWFsTG9hZCxcbiAgICAgIGlmcmFtZVZpc2libGU6IGZhbHNlLFxuICAgICAgaWZyYW1lSGVpZ2h0IDogJ2F1dG8nLFxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgdGhpcy5yZWNlaXZlTWVzc2FnZSwgZmFsc2UpO1xuICB9XG5cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIC8vdGhpcy5tYXBQcm9wc1RvU3RhdGUobmV4dFByb3BzKVxuICB9XG5cbiAgbWFwUHJvcHNUb1N0YXRlKHByb3BzKSB7XG4gICAgbGV0IHt2aXNpYmxlLCBsaW5rLCBpbml0aWFsTG9hZH0gPSBwcm9wcztcbiAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlICE9IHZpc2libGUgfHwgdGhpcy5wcm9wcy5saW5rICE9IGxpbmsgfHwgdGhpcy5wcm9wcy5pbml0aWFsTG9hZCAhPSBpbml0aWFsTG9hZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bGluaywgdmlzaWJsZSwgaW5pdGlhbExvYWR9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm1hcFByb3BzVG9TdGF0ZSh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIHNldHVwTGlzdGVuZXIoZSkge1xuICAgIHRoaXMuaGFuZHNoYWtlKHRoaXMuaWZyYW1lRWwsIHRoaXMuZ2V0RG9tYWluKHRoaXMuc3RhdGUubGluaykpXG4gIH1cblxuICBvbkxvYWQ9KGUpPT57XG4gICAgaWYodGhpcy5zdGF0ZS5saW5rLmxlbmd0aD4wKXtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmluaXRpYWxMb2FkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZpc2libGUgICAgICA6IHRydWUsXG4gICAgICAgICAgaWZyYW1lVmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICBpbml0aWFsTG9hZCAgOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vdGhpcy5oYW5kc2hha2UoZS50YXJnZXQsIHRoaXMuZ2V0RG9tYWluKHRoaXMuc3RhdGUubGluaykpO1xuICAgIH1cbiAgfVxuXG4gIGdldERvbWFpbihsaW5rKSB7XG4gICAgcmV0dXJuIGxpbmsgJiYgbGluay5sZW5ndGggPiAwID8gKC8oLis/XFwvXFwvLis/KVxcLy9naSkuZXhlYyhsaW5rKVsxXSA6IG51bGxcbiAgfVxuXG4gIGhhbmRzaGFrZShlbCwgdGFyZ2V0T3JpZ2luKSB7XG4gICAgaWYgKHRhcmdldE9yaWdpbiAhPSBudWxsKSB7XG4gICAgICBsZXQgaWZyYW1lICAgICAgICA9IGVsLmNvbnRlbnRXaW5kb3c7XG4gICAgICB0aGlzLnRhcmdldE9yaWdpbiA9IHRhcmdldE9yaWdpbjtcbiAgICAgIGlmcmFtZS5wb3N0TWVzc2FnZSgnY29ubmVjdCcsIHRhcmdldE9yaWdpbik7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZU1lc3NhZ2U9KGV2ZW50KT0+e1xuICAgIGxldCBvcmlnaW4gPSBldmVudC5vcmlnaW4gfHwgZXZlbnQub3JpZ2luYWxFdmVudC5vcmlnaW47IC8vIEZvciBDaHJvbWUsIHRoZSBvcmlnaW4gcHJvcGVydHkgaXMgaW4gdGhlIGV2ZW50Lm9yaWdpbmFsRXZlbnQgb2JqZWN0LlxuICAgIGlmIChvcmlnaW4gIT09IHRoaXMudGFyZ2V0T3JpZ2luKXJldHVybjtcbiAgICBpZiAoZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLmFjdGlvbiAmJiB0aGlzW2V2ZW50LmRhdGEuYWN0aW9uXSkge1xuICAgICAgdGhpc1tldmVudC5kYXRhLmFjdGlvbl0oZXZlbnQuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignYWN0aW9uIG5vdCBmb3VuZCBmb3IgJywgZXZlbnQuZGF0YSwgZXZlbnQuZGF0YS5hY3Rpb24sIHRoaXNbZXZlbnQuZGF0YS5hY3Rpb25dKVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtsaW5rLHZpc2libGUsIGxvYWRQcmV2aW91c0l0ZW0scmV0dXJuVG9HcmlkQWN0aW9uLGxvYWROZXh0SXRlbSxkaXNhYmxlU2luZ2xlVmlld1ByZXYsZGlzYWJsZVNpbmdsZVZpZXdOZXh0fSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlVmlld1wiIHN0eWxlPXt7ZGlzcGxheTogdmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSd9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3LS1oZWFkZXJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJTaW5nbGVWaWV3LS1uYXYtYnV0dG9uXCIgZGlzYWJsZWQ9e2Rpc2FibGVTaW5nbGVWaWV3UHJldn0gdGl0bGU9XCJQcmV2aW91cyBpdGVtXCIgb25DbGljaz17bG9hZFByZXZpb3VzSXRlbX0+XG4gICAgICAgICAgICA8TURJY29uIGljb249e2ljX2Fycm93X2JhY2t9Lz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0tbmF2LWJ1dHRvblwiIHRpdGxlPVwiUmV0dXJuIHRvIHRoZSBsaXN0XCIgb25DbGljaz17cmV0dXJuVG9HcmlkQWN0aW9ufT5cbiAgICAgICAgICAgIDxNREljb24gaWNvbj17aWNfdmlld19tb2R1bGV9Lz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0tbmF2LWJ1dHRvblwiIGRpc2FibGVkPXtkaXNhYmxlU2luZ2xlVmlld05leHR9IHRpdGxlPVwiTmV4dCBJdGVtXCIgb25DbGljaz17bG9hZE5leHRJdGVtfT5cbiAgICAgICAgICAgIDxNREljb24gaWNvbj17aWNfYXJyb3dfZm9yd2FyZH0vPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpZnJhbWUgcmVmPXtpZnJhbWUgPT4gdGhpcy5pZnJhbWVFbCA9IGlmcmFtZX0gc3JjPXtsaW5rfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBhbiByZW5kZXJJZnJhbWUgZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gbGluayAtIHVybCBvZiB0aGUgcmVuZGVySWZyYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2aXNpYmxlIC0gdmlzaWJpbGl0eSBvZiB0aGUgcmVuZGVySWZyYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBoZWlnaHQgLSBoZWlnaHQgb2YgdGhlIHJlbmRlcklmcmFtZVxuICAgKiAqL1xuICByZW5kZXJJZnJhbWUobGluaykge1xuICAgIHJldHVybiA8aWZyYW1lXG4gICAgICByZWY9e2lmcmFtZSA9PiB7XG4gICAgICAgIHRoaXMuaWZyYW1lRWwgPSBpZnJhbWVcbiAgICAgIH19XG4gICAgICBzcmM9e2xpbmt9XG4vPjtcbiAgfVxufVxuXG5TaW5nbGVWaWV3LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xvc2VPblN1Ym1pdDogZmFsc2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2luZ2xlVmlldy9TaW5nbGVWaWV3LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgaWNfc3RhciA9IDxwYXRoIGQ9XCJNMTIgMTcuMjdMMTguMTggMjFsLTEuNjQtNy4wM0wyMiA5LjI0bC03LjE5LS42MUwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjF6XCIvPjtcbmV4cG9ydCBjb25zdCBpY19zdGFyX2JvcmRlciA9IDxwYXRoIGQ9XCJNMjIgOS4yNGwtNy4xOS0uNjJMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxIDEyIDE3LjI3IDE4LjE4IDIxbC0xLjYzLTcuMDNMMjIgOS4yNHpNMTIgMTUuNGwtMy43NiAyLjI3IDEtNC4yOC0zLjMyLTIuODggNC4zOC0uMzhMMTIgNi4xbDEuNzEgNC4wNCA0LjM4LjM4LTMuMzIgMi44OCAxIDQuMjhMMTIgMTUuNHpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX2Fycm93X2JhY2sgPSA8cGF0aCBkPVwiTTIwIDExSDcuODNsNS41OS01LjU5TDEyIDRsLTggOCA4IDggMS40MS0xLjQxTDcuODMgMTNIMjB2LTJ6XCIvPjtcbmV4cG9ydCBjb25zdCBpY19hcnJvd19mb3J3YXJkID0gPHBhdGggZD1cIk0xMiA0bC0xLjQxIDEuNDFMMTYuMTcgMTFINHYyaDEyLjE3bC01LjU4IDUuNTlMMTIgMjBsOC04elwiLz47XG5leHBvcnQgY29uc3QgaWNfdmlld19tb2R1bGUgPSA8cGF0aCBkPVwiTTQgMTFoNVY1SDR2NnptMCA3aDV2LTZINHY2em02IDBoNXYtNmgtNXY2em02IDBoNXYtNmgtNXY2em0tNi03aDVWNWgtNXY2em02LTZ2Nmg1VjVoLTV6XCIvPjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pY29ucy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvSW1hZ2VHcmlkVGlsZS9JbWFnZUdyaWRUaWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMjE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiUmVhY3RET01cIlxuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=