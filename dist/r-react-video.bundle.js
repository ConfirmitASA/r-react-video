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
	            placeholderSizing: placeholderSizing,
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

	'use strict';
	
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
	
	    _this.handleDataLoadingError = function () {
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
	    key: 'render',
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
	          'div',
	          { className: 'GridContainer ' + (!singleViewVisible ? 'GridView' : '') },
	          _react2.default.createElement(_SingleView2.default, {
	            link: singleView.link,
	            visible: singleViewVisible,
	            initialLoad: true,
	            returnToGridAction: this.returnToGrid,
	            loadPreviousItem: this.loadPreviousItem,
	            loadNextItem: this.loadNextItem,
	            headerText: 'Edit video "' + singleView.title + '"',
	            disableSingleViewPrev: disableSingleViewPrev,
	            disableSingleViewNext: disableSingleViewNext
	          }),
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
	      } else if (Array.isArray(items) && items.length === 0) {
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
	    key: 'navigateItems',
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
	    key: 'toggleSingleViewNavState',
	    value: function toggleSingleViewNavState(item) {}
	  }, {
	    key: 'checkSingleViewNavState',
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
	  }], [{
	    key: 'actionIcon',
	    value: function actionIcon() {
	      return _react2.default.createElement(
	        'svg',
	        { className: 'icon', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
	        _react2.default.createElement('path', {
	          d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' })
	      );
	    }
	  }]);
	
	  return ReactVideo;
	}(_react2.default.Component);
	
	exports.default = ReactVideo;
	module.exports = exports['default'];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjFiNmNkZDM3MWJmNzEzNzQ2MDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL190b0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLXJlcG9ydGFsLWJhc2Uvc3JjL3JlcG9ydGFsLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vTURJY29uL3NyYy9NREljb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9NREljb24vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9kaXN0L1Byb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9lczYvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19EYXRhVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fSGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUZsYXR0ZW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSGFzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hTi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXRlcmF0ZWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlTWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUHJvcGVydHlEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVNldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5pcS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0ZsYXR0ZW5hYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb3ZlclJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc2V0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3Nob3J0T3V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0NsZWFyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RyaW5nVG9QYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9oYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYXN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbm9vcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3VuaW9uQnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvaGl0bGlzdC1kYXRhc291cmNlLmpzIiwid2VicGFjazovLy8uL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3Qtc2V0dXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yLWhpdGxpc3QtZGF0YXNvdXJjZS9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VHcmlkVGlsZS9JbWFnZUdyaWRUaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUdyaWQvSW1hZ2VHcmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWFjdFZpZGVvL1JlYWN0VmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpbmdsZVZpZXcvU2luZ2xlVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ltYWdlR3JpZFRpbGUvSW1hZ2VHcmlkVGlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0RE9NXCIiXSwibmFtZXMiOlsibGF1bmNoVmlkZW9IaXRsaXN0IiwiY29uZmlnTmFtZSIsInRodW1ic1BsYWNlaG9sZGVyIiwiRXJyb3IiLCJUeXBlRXJyb3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlcG9ydGFsIiwibWl4aW4iLCJzdG9yZSIsInJlcXVpcmUiLCJ1aWQiLCJTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImdsb2JhbCIsIk1hdGgiLCJzZWxmIiwiRnVuY3Rpb24iLCJfX2ciLCJmcmVlR2xvYmFsIiwiZnJlZVNlbGYiLCJPYmplY3QiLCJyb290IiwiaXNBcnJheSIsIkFycmF5IiwiYmFzZUlzTmF0aXZlIiwiZ2V0VmFsdWUiLCJnZXROYXRpdmUiLCJvYmplY3QiLCJrZXkiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImlzT2JqZWN0IiwiaXQiLCJkUCIsImNyZWF0ZURlc2MiLCJmIiwiaXNPYmplY3RMaWtlIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImEiLCJnZXRSYXdUYWciLCJvYmplY3RUb1N0cmluZyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiYmFzZUdldFRhZyIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiYUZ1bmN0aW9uIiwiZm4iLCJ0aGF0IiwibGVuZ3RoIiwiYiIsImMiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhc093blByb3BlcnR5IiwiYW5PYmplY3QiLCJJRThfRE9NX0RFRklORSIsInRvUHJpbWl0aXZlIiwiTyIsIlAiLCJBdHRyaWJ1dGVzIiwiZSIsImxpc3RDYWNoZUNsZWFyIiwibGlzdENhY2hlRGVsZXRlIiwibGlzdENhY2hlR2V0IiwibGlzdENhY2hlSGFzIiwibGlzdENhY2hlU2V0IiwiTGlzdENhY2hlIiwiZW50cmllcyIsImluZGV4IiwiY2xlYXIiLCJlbnRyeSIsInNldCIsInByb3RvdHlwZSIsImhhcyIsImVxIiwiYXNzb2NJbmRleE9mIiwiYXJyYXkiLCJpc0tleWFibGUiLCJnZXRNYXBEYXRhIiwibWFwIiwiZGF0YSIsIl9fZGF0YV9fIiwibmF0aXZlQ3JlYXRlIiwiaXNTeW1ib2wiLCJJTkZJTklUWSIsInRvS2V5IiwicmVzdWx0IiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiZGVmIiwiVEFHIiwidGFnIiwic3RhdCIsImNvbmZpZ3VyYWJsZSIsInNoYXJlZCIsImNlaWwiLCJmbG9vciIsImlzTmFOIiwiSU9iamVjdCIsImRlZmluZWQiLCJNYXAiLCJtYXBDYWNoZUNsZWFyIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsInJlSXNEZWVwUHJvcCIsInJlSXNQbGFpblByb3AiLCJpc0tleSIsInR5cGUiLCJ0ZXN0Iiwic2V0VG9BcnJheSIsInNpemUiLCJmb3JFYWNoIiwiaWRlbnRpdHkiLCJiYXNlSXNBcmd1bWVudHMiLCJvYmplY3RQcm90byIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiaXNBcmd1bWVudHMiLCJNQVhfU0FGRV9JTlRFR0VSIiwiaXNMZW5ndGgiLCJzeW1ib2xUYWciLCJSZXBvcnRhbEJhc2UiLCJ0YXJnZXQiLCJzb3VyY2UiLCJpIiwibGV2ZWwiLCJhcmdzIiwiY29uc29sZSIsIl9sb2dnZXIiLCJldmVudCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50Iiwic3RyIiwicGFyc2VGbG9hdCIsInJlcGxhY2UiLCJVUkwiLCJyZXNvbHZlIiwicmVqZWN0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25sb2FkIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiY29kZSIsIm1lc3NhZ2UiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsImVycm9yIiwic2VuZCIsInZhcmlhYmxlIiwicXVlcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0cmluZyIsInZhcnMiLCJzcGxpdCIsInBhaXIiLCJ0b0xvd2VyQ2FzZSIsIm8iLCJwYXRoIiwib3JpZ2luIiwicGF0aG5hbWUiLCJhUGFpciIsInB1c2giLCJqb2luIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImNvZiIsIkFSRyIsInRyeUdldCIsIlQiLCJCIiwiY2FsbGVlIiwiY3R4IiwiaGlkZSIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJJU19GT1JDRUQiLCJGIiwiSVNfR0xPQkFMIiwiRyIsIklTX1NUQVRJQyIsIlMiLCJJU19QUk9UTyIsIklTX0JJTkQiLCJJU19XUkFQIiwiVyIsImV4cFByb3RvIiwib3duIiwib3V0IiwiQyIsInZpcnR1YWwiLCJSIiwiVSIsImV4ZWMiLCJkb2N1bWVudEVsZW1lbnQiLCJMSUJSQVJZIiwicmVkZWZpbmUiLCJJdGVyYXRvcnMiLCIkaXRlckNyZWF0ZSIsInNldFRvU3RyaW5nVGFnIiwiZ2V0UHJvdG90eXBlT2YiLCJJVEVSQVRPUiIsIkJVR0dZIiwia2V5cyIsIkZGX0lURVJBVE9SIiwiS0VZUyIsIlZBTFVFUyIsInJldHVyblRoaXMiLCJCYXNlIiwiTkFNRSIsIkNvbnN0cnVjdG9yIiwibmV4dCIsIkRFRkFVTFQiLCJJU19TRVQiLCJGT1JDRUQiLCJnZXRNZXRob2QiLCJraW5kIiwicHJvdG8iLCJ2YWx1ZXMiLCJERUZfVkFMVUVTIiwiVkFMVUVTX0JVRyIsIiRuYXRpdmUiLCIkZGVmYXVsdCIsIiRlbnRyaWVzIiwiJGFueU5hdGl2ZSIsIm1ldGhvZHMiLCJJdGVyYXRvclByb3RvdHlwZSIsImJpdG1hcCIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsIlNIQVJFRCIsImludm9rZSIsImh0bWwiLCJjZWwiLCJwcm9jZXNzIiwic2V0VGFzayIsInNldEltbWVkaWF0ZSIsImNsZWFyVGFzayIsImNsZWFySW1tZWRpYXRlIiwiTWVzc2FnZUNoYW5uZWwiLCJjb3VudGVyIiwicXVldWUiLCJPTlJFQURZU1RBVEVDSEFOR0UiLCJkZWZlciIsImNoYW5uZWwiLCJwb3J0IiwicnVuIiwiaWQiLCJsaXN0ZW5lciIsIm5leHRUaWNrIiwicG9ydDIiLCJwb3J0MSIsIm9ubWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJzZXRUaW1lb3V0IiwidG9JbnRlZ2VyIiwibWluIiwicHgiLCJyYW5kb20iLCJjb25jYXQiLCJTZXQiLCJzZXRDYWNoZUFkZCIsInNldENhY2hlSGFzIiwiU2V0Q2FjaGUiLCJhZGQiLCJzdGFja0NsZWFyIiwic3RhY2tEZWxldGUiLCJzdGFja0dldCIsInN0YWNrSGFzIiwic3RhY2tTZXQiLCJTdGFjayIsImFycmF5UHVzaCIsIm9mZnNldCIsImNhc3RQYXRoIiwiYmFzZUdldCIsImJhc2VJc0VxdWFsRGVlcCIsImJhc2VJc0VxdWFsIiwib3RoZXIiLCJiaXRtYXNrIiwiY3VzdG9taXplciIsInN0YWNrIiwiY2FjaGVIYXMiLCJjYWNoZSIsInN0cmluZ1RvUGF0aCIsImFycmF5U29tZSIsIkNPTVBBUkVfUEFSVElBTF9GTEFHIiwiQ09NUEFSRV9VTk9SREVSRURfRkxBRyIsImVxdWFsQXJyYXlzIiwiZXF1YWxGdW5jIiwiaXNQYXJ0aWFsIiwiYXJyTGVuZ3RoIiwib3RoTGVuZ3RoIiwic3RhY2tlZCIsInNlZW4iLCJhcnJWYWx1ZSIsIm90aFZhbHVlIiwiY29tcGFyZWQiLCJvdGhJbmRleCIsInJlSXNVaW50IiwiaXNJbmRleCIsImlzU3RyaWN0Q29tcGFyYWJsZSIsIm1hdGNoZXNTdHJpY3RDb21wYXJhYmxlIiwic3JjVmFsdWUiLCJmdW5jUHJvdG8iLCJmdW5jVG9TdHJpbmciLCJ0b1NvdXJjZSIsImZ1bmMiLCJpc0Z1bmN0aW9uIiwiaXNBcnJheUxpa2UiLCJzdHViRmFsc2UiLCJmcmVlRXhwb3J0cyIsIm5vZGVUeXBlIiwiZnJlZU1vZHVsZSIsIm1vZHVsZUV4cG9ydHMiLCJCdWZmZXIiLCJuYXRpdmVJc0J1ZmZlciIsImlzQnVmZmVyIiwiYXN5bmNUYWciLCJmdW5jVGFnIiwiZ2VuVGFnIiwicHJveHlUYWciLCJiYXNlSXNUeXBlZEFycmF5IiwiYmFzZVVuYXJ5Iiwibm9kZVV0aWwiLCJub2RlSXNUeXBlZEFycmF5IiwiaXNUeXBlZEFycmF5IiwiYXJyYXlMaWtlS2V5cyIsImJhc2VLZXlzIiwiTURJY29uIiwicHJvcHMiLCJmaWxsIiwiaWNvbiIsImRlZmF1bHRQcm9wcyIsInQiLCJyZWFjdCIsInIiLCJuIiwibG9hZGVkIiwibSIsInAiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIlJlZmVyZW5jZUVycm9yIiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsInMiLCJhc3NpZ24iLCJsIiwidSIsIl9pbWFnZU9ubG9hZCIsImJpbmQiLCJfaW1hZ2VPbmVycm9yIiwic3RhdGUiLCJzcmMiLCJwbGFjZWhvbGRlckhpZGRlbiIsInBsYWNlaG9sZGVyIiwic2l6aW5nIiwicG9zaXRpb24iLCJwcm9wb3J0aW9uIiwibG9hZGluZyIsIl9sb2FkIiwiX2NvbXB1dGVEaW1lbnNpb25zIiwiX2NvbXB1dGVQcm9wb3J0aW9uIiwiYXNwZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJzZXRTdGF0ZSIsImluZGV4T2YiLCJkIiwicHJlbG9hZCIsImZhZGUiLCJoIiwicGxhY2Vob2xkZXJTaXppbmciLCJnIiwiYWx0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwYWRkaW5nVG9wIiwicm9sZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImRpc3BsYXkiLCJvbkxvYWQiLCJvbkVycm9yIiwiX3Jlc2V0IiwicHJldmVudExvYWQiLCJDb21wb25lbnQiLCJQcm9taXNlIiwiZm9yYmlkZGVuRmllbGQiLCJ0b0lPYmplY3QiLCJ0b0xlbmd0aCIsInRvSW5kZXgiLCJJU19JTkNMVURFUyIsIiR0aGlzIiwiZWwiLCJmcm9tSW5kZXgiLCJpc0FycmF5SXRlciIsImdldEl0ZXJGbiIsIkJSRUFLIiwiUkVUVVJOIiwiaXRlcmFibGUiLCJpdGVyRm4iLCJzdGVwIiwiaXRlcmF0b3IiLCJkb25lIiwidW4iLCJBcnJheVByb3RvIiwicmV0IiwiZGVzY3JpcHRvciIsIlNBRkVfQ0xPU0lORyIsInJpdGVyIiwiZnJvbSIsInNraXBDbG9zaW5nIiwic2FmZSIsImFyciIsIml0ZXIiLCJtYWNyb3Rhc2siLCJPYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiaXNOb2RlIiwiaGVhZCIsImxhc3QiLCJub3RpZnkiLCJmbHVzaCIsInBhcmVudCIsImRvbWFpbiIsImV4aXQiLCJlbnRlciIsInRvZ2dsZSIsIm5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsIm9ic2VydmUiLCJjaGFyYWN0ZXJEYXRhIiwicHJvbWlzZSIsInRoZW4iLCJ0YXNrIiwiZFBzIiwiZW51bUJ1Z0tleXMiLCJJRV9QUk9UTyIsIkVtcHR5IiwiY3JlYXRlRGljdCIsImlmcmFtZSIsImx0IiwiZ3QiLCJpZnJhbWVEb2N1bWVudCIsImNvbnRlbnRXaW5kb3ciLCJ3cml0ZSIsImNsb3NlIiwiUHJvcGVydGllcyIsImdldEtleXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidG9PYmplY3QiLCJPYmplY3RQcm90byIsImFycmF5SW5kZXhPZiIsIm5hbWVzIiwiJGtleXMiLCJERVNDUklQVE9SUyIsIlNQRUNJRVMiLCJLRVkiLCJEIiwiVE9fU1RSSU5HIiwicG9zIiwiU3RyaW5nIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsIm1heCIsInZhbCIsInZhbHVlT2YiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJhZGRUb1Vuc2NvcGFibGVzIiwiaXRlcmF0ZWQiLCJfdCIsIl9pIiwiX2siLCJBcmd1bWVudHMiLCJhbkluc3RhbmNlIiwiZm9yT2YiLCJzcGVjaWVzQ29uc3RydWN0b3IiLCJtaWNyb3Rhc2siLCJQUk9NSVNFIiwiJFByb21pc2UiLCJlbXB0eSIsIkludGVybmFsIiwiR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5IiwiV3JhcHBlciIsIlVTRV9OQVRJVkUiLCJGYWtlUHJvbWlzZSIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsInNhbWVDb25zdHJ1Y3RvciIsImlzVGhlbmFibGUiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsIlByb21pc2VDYXBhYmlsaXR5IiwiJCRyZXNvbHZlIiwiJCRyZWplY3QiLCJwZXJmb3JtIiwiaXNSZWplY3QiLCJfbiIsImNoYWluIiwiX2MiLCJfdiIsIm9rIiwiX3MiLCJyZWFjdGlvbiIsImhhbmRsZXIiLCJmYWlsIiwiX2giLCJvbkhhbmRsZVVuaGFuZGxlZCIsIm9uVW5oYW5kbGVkIiwiYWJydXB0IiwiaXNVbmhhbmRsZWQiLCJlbWl0Iiwib251bmhhbmRsZWRyZWplY3Rpb24iLCJyZWFzb24iLCJfYSIsIm9ucmVqZWN0aW9uaGFuZGxlZCIsIiRyZWplY3QiLCJfZCIsIl93IiwiJHJlc29sdmUiLCJ3cmFwcGVyIiwiZXhlY3V0b3IiLCJlcnIiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJjYXBhYmlsaXR5IiwieCIsImFsbCIsInJlbWFpbmluZyIsIiRpbmRleCIsImFscmVhZHlDYWxsZWQiLCJyYWNlIiwiJGF0IiwicG9pbnQiLCJUT19TVFJJTkdfVEFHIiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9uIiwiRGF0YVZpZXciLCJoYXNoQ2xlYXIiLCJoYXNoRGVsZXRlIiwiaGFzaEdldCIsImhhc2hIYXMiLCJoYXNoU2V0IiwiSGFzaCIsIlVpbnQ4QXJyYXkiLCJXZWFrTWFwIiwidGhpc0FyZyIsImFycmF5RmlsdGVyIiwicHJlZGljYXRlIiwicmVzSW5kZXgiLCJiYXNlSW5kZXhPZiIsImFycmF5SW5jbHVkZXMiLCJhcnJheUluY2x1ZGVzV2l0aCIsImNvbXBhcmF0b3IiLCJiYXNlVGltZXMiLCJpbmhlcml0ZWQiLCJpc0FyciIsImlzQXJnIiwiaXNCdWZmIiwiaXNUeXBlIiwic2tpcEluZGV4ZXMiLCJhcnJheU1hcCIsIml0ZXJhdGVlIiwiYmFzZUZpbmRJbmRleCIsImZyb21SaWdodCIsImlzRmxhdHRlbmFibGUiLCJiYXNlRmxhdHRlbiIsImRlcHRoIiwiaXNTdHJpY3QiLCJiYXNlR2V0QWxsS2V5cyIsImtleXNGdW5jIiwic3ltYm9sc0Z1bmMiLCJiYXNlSGFzSW4iLCJiYXNlSXNOYU4iLCJzdHJpY3RJbmRleE9mIiwiYXJnc1RhZyIsImVxdWFsQnlUYWciLCJlcXVhbE9iamVjdHMiLCJnZXRUYWciLCJhcnJheVRhZyIsIm9iamVjdFRhZyIsIm9iaklzQXJyIiwib3RoSXNBcnIiLCJvYmpUYWciLCJvdGhUYWciLCJvYmpJc09iaiIsIm90aElzT2JqIiwiaXNTYW1lVGFnIiwib2JqSXNXcmFwcGVkIiwib3RoSXNXcmFwcGVkIiwib2JqVW53cmFwcGVkIiwib3RoVW53cmFwcGVkIiwiYmFzZUlzTWF0Y2giLCJtYXRjaERhdGEiLCJub0N1c3RvbWl6ZXIiLCJvYmpWYWx1ZSIsImlzTWFza2VkIiwicmVSZWdFeHBDaGFyIiwicmVJc0hvc3RDdG9yIiwicmVJc05hdGl2ZSIsIlJlZ0V4cCIsInBhdHRlcm4iLCJib29sVGFnIiwiZGF0ZVRhZyIsImVycm9yVGFnIiwibWFwVGFnIiwibnVtYmVyVGFnIiwicmVnZXhwVGFnIiwic2V0VGFnIiwic3RyaW5nVGFnIiwid2Vha01hcFRhZyIsImFycmF5QnVmZmVyVGFnIiwiZGF0YVZpZXdUYWciLCJmbG9hdDMyVGFnIiwiZmxvYXQ2NFRhZyIsImludDhUYWciLCJpbnQxNlRhZyIsImludDMyVGFnIiwidWludDhUYWciLCJ1aW50OENsYW1wZWRUYWciLCJ1aW50MTZUYWciLCJ1aW50MzJUYWciLCJ0eXBlZEFycmF5VGFncyIsImJhc2VNYXRjaGVzIiwiYmFzZU1hdGNoZXNQcm9wZXJ0eSIsInByb3BlcnR5IiwiYmFzZUl0ZXJhdGVlIiwiaXNQcm90b3R5cGUiLCJuYXRpdmVLZXlzIiwiZ2V0TWF0Y2hEYXRhIiwiaGFzSW4iLCJiYXNlUHJvcGVydHkiLCJiYXNlUHJvcGVydHlEZWVwIiwib3ZlclJlc3QiLCJzZXRUb1N0cmluZyIsImJhc2VSZXN0Iiwic3RhcnQiLCJjb25zdGFudCIsImJhc2VTZXRUb1N0cmluZyIsInN0cmluZyIsInN5bWJvbFByb3RvIiwic3ltYm9sVG9TdHJpbmciLCJiYXNlVG9TdHJpbmciLCJjcmVhdGVTZXQiLCJMQVJHRV9BUlJBWV9TSVpFIiwiYmFzZVVuaXEiLCJpbmNsdWRlcyIsImlzQ29tbW9uIiwib3V0ZXIiLCJjb21wdXRlZCIsInNlZW5JbmRleCIsImNvcmVKc0RhdGEiLCJub29wIiwibWFwVG9BcnJheSIsInN5bWJvbFZhbHVlT2YiLCJieXRlTGVuZ3RoIiwiYnl0ZU9mZnNldCIsImJ1ZmZlciIsImNvbnZlcnQiLCJnZXRBbGxLZXlzIiwib2JqUHJvcHMiLCJvYmpMZW5ndGgiLCJvdGhQcm9wcyIsInNraXBDdG9yIiwib2JqQ3RvciIsIm90aEN0b3IiLCJnZXRTeW1ib2xzIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJpc093biIsInVubWFza2VkIiwic3R1YkFycmF5IiwibmF0aXZlR2V0U3ltYm9scyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbCIsInByb21pc2VUYWciLCJkYXRhVmlld0N0b3JTdHJpbmciLCJtYXBDdG9yU3RyaW5nIiwicHJvbWlzZUN0b3JTdHJpbmciLCJzZXRDdG9yU3RyaW5nIiwid2Vha01hcEN0b3JTdHJpbmciLCJBcnJheUJ1ZmZlciIsIkN0b3IiLCJjdG9yU3RyaW5nIiwiaGFzUGF0aCIsImhhc0Z1bmMiLCJIQVNIX1VOREVGSU5FRCIsInNwcmVhZGFibGVTeW1ib2wiLCJpc0NvbmNhdFNwcmVhZGFibGUiLCJtYXNrU3JjS2V5IiwiYXJyYXlQcm90byIsInNwbGljZSIsImxhc3RJbmRleCIsInBvcCIsIm1lbW9pemUiLCJNQVhfTUVNT0laRV9TSVpFIiwibWVtb2l6ZUNhcHBlZCIsIm92ZXJBcmciLCJmcmVlUHJvY2VzcyIsImJpbmRpbmciLCJ0cmFuc2Zvcm0iLCJhcmciLCJuYXRpdmVNYXgiLCJvdGhlckFyZ3MiLCJzaG9ydE91dCIsIkhPVF9DT1VOVCIsIkhPVF9TUEFOIiwibmF0aXZlTm93IiwiRGF0ZSIsIm5vdyIsImNvdW50IiwibGFzdENhbGxlZCIsInN0YW1wIiwicGFpcnMiLCJyZUxlYWRpbmdEb3QiLCJyZVByb3BOYW1lIiwicmVFc2NhcGVDaGFyIiwibWF0Y2giLCJudW1iZXIiLCJxdW90ZSIsImRlZmF1bHRWYWx1ZSIsImlzQXJyYXlMaWtlT2JqZWN0IiwiRlVOQ19FUlJPUl9URVhUIiwicmVzb2x2ZXIiLCJtZW1vaXplZCIsIkNhY2hlIiwidW5pb25CeSIsImFycmF5cyIsIkhpdGxpc3REYXRhc291cmNlIiwib3B0aW9ucyIsIl9zZWFyY2hWYWx1ZXMiLCJtb2RpZmllciIsInJlcXVlc3RSZXNwb25zZSIsImluaXRpYWxMb2FkIiwiX3NraXBQYWdlIiwiaXNQYWdpbmciLCJsb2NhdGlvbkRlc2VyaWFsaXplIiwicmVwb3J0aWQiLCJoaXRsaXN0SUQiLCJwYXJhbXMiLCJQYWdlSWQiLCJwYWdlSUQiLCJwYWdlU3RhdGVJZCIsInBhZ2VTdGF0ZUlEIiwiUHJldmlldyIsInByZXZpZXciLCJhdHRybmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzb3J0aW5nUGFnaW5nVmFsdWVzIiwicGFnaW5nVmFsdWVzIiwicGFnZU51bWJlciIsInBhZ2luZ0ZvcndhcmQiLCJwcm9taXNlUmVxdWVzdCIsInNlcnZpY2VVUkwiLCJzZXJpYWxpemVQYXJhbXMiLCJwYXJzZVJlc3BvbnNlIiwicmVzcG9uc2UiLCJwYXJzZSIsInBhZ2VJbmZvIiwiX3NwdiIsInB2Iiwic3RhcnRJZCIsImxhc3RTdGFydElkIiwiZmlyc3RTdGFydElkIiwic3RhcnRWYWx1ZSIsImxhc3RTdGFydFZhbHVlIiwiZmlyc3RTdGFydFZhbHVlIiwiSGl0bGlzdFNldHVwIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsIl9jb25maWciLCJnZXRPcmlnaW5hbENvbmZpZyIsIl9lbGVtZW50VHlwZSIsIkhpdExpc3RFbGVtZW50VHlwZSIsIl9vcCIsIlNlYXJjaGFibGVMaXN0T3BlcmF0b3IiLCJjYXB0aW9ucyIsInNpbmdsZVZpZXdUZXh0cyIsImhpdGxpc3REYXRhIiwiZGlzYWJsZU5leHRCdXR0b24iLCJkaXNhYmxlUHJldkJ1dHRvbiIsImNvbHVtbnMiLCJhbGxDb2x1bW5zIiwiY29tcG9uZW50SWQiLCJwYWdlSWQiLCJsYW5ndWFnZSIsInNlcnZpY2VVcmwiLCJxdWVyeVNlbGVjdG9yIiwianNvbkRhdGUiLCJZIiwiTGFuZyIsImNvbnN0ciIsImV2YWwiLCJzY3JpcHRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNmZyIsInNjcmlwdCIsInRleHQiLCJNRURJQV9UWVBFUyIsIkltYWdlR3JpZFRpbGUiLCJhY3Rpb25CdXR0b24iLCJhY3Rpb25JY29uIiwib25TZWxlY3QiLCJ0aXRsZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJfY29tcHV0ZVRpbGVUeXBlIiwibWVkaWF0eXBlIiwiaWNvblNpemUiLCJpY29uQ29sb3IiLCJpY29uU2VydmVyIiwiZXNjYXBlIiwiaWNvbnMiLCJhdWRpbyIsInZpZGVvIiwicHJvcFR5cGVzIiwib25lT2YiLCJJbWFnZUdyaWQiLCJpdGVtQ2xpY2tIYW5kbGVyIiwiaXRlbSIsIml0ZW1zIiwiZHVtbXlJdGVtcyIsInJlbmRlckR1bW15SXRlbXMiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsIlJlYWN0VmlkZW8iLCJoYW5kbGVEYXRhTG9hZGluZ0Vycm9yIiwicmV0dXJuVG9HcmlkIiwic2luZ2xlVmlld1Zpc2libGUiLCJzaW5nbGVWaWV3IiwibGluayIsIkRTIiwiaW5pdGlhbERhdGFMb2FkIiwicHJvY2Vzc0RhdGEiLCJjYXRjaCIsImxvYWRQcmV2aW91c0l0ZW0iLCJuYXZpZ2F0ZUl0ZW1zIiwibG9hZE5leHRJdGVtIiwibG9hZE5leHRQYWdlIiwibmV4dFBhZ2UiLCJsb2FkUHJldmlvdXNQYWdlIiwicHJldmlvdXNQYWdlIiwibG9hZE1vcmUiLCJjaGVja1NpbmdsZVZpZXdOYXZTdGF0ZSIsImRpc2FibGVTaW5nbGVWaWV3UHJldiIsImRpc2FibGVTaW5nbGVWaWV3TmV4dCIsInZlcmJvc2UiLCJsb2ciLCJzZXR1cERhdGFMaXN0ZW5lciIsInJlbmRlck5hdmlnYXRpb24iLCJkYXRhTG9hZGluZ01lc3NhZ2UiLCJpMThuIiwiY29uZmlnIiwicGFnaW5hdGlvbiIsImNvbnRpbnVvdXNOYXZpZ2F0aW9uIiwicGFnaW5nTmF2aWdhdGlvbiIsInRvdGFsSGl0cyIsInRleHRBbGlnbiIsIkdsb2JhbCIsIm9uIiwiaW5pdGlhbGlzZUNvbmZpZyIsImZpbHRlckluZm8iLCJkaXJlY3Rpb24iLCJpdGVtc0xlbmd0aCIsInByZXZEYXRhIiwicHJldkluZGV4IiwibmV4dEluZGV4IiwibmV3SXRlbXMiLCJwcmV2U3RhdGUiLCJjdXJyZW50SXRlbUluZGV4IiwibW9kZSIsInRhZ3MiLCJuZXdEYXRhIiwicGFyc2VkRGF0YSIsInByZXBhcmVEYXRhIiwicmVzcG9uc2VpZCIsInNsaW5rIiwidHJpbSIsIlNpbmdsZVZpZXciLCJ2aXNpYmxlIiwiaWZyYW1lVmlzaWJsZSIsInJlY2VpdmVNZXNzYWdlIiwib3JpZ2luYWxFdmVudCIsInRhcmdldE9yaWdpbiIsImFjdGlvbiIsIndhcm4iLCJpZnJhbWVIZWlnaHQiLCJuZXh0UHJvcHMiLCJtYXBQcm9wc1RvU3RhdGUiLCJoYW5kc2hha2UiLCJpZnJhbWVFbCIsImdldERvbWFpbiIsInJldHVyblRvR3JpZEFjdGlvbiIsImNsb3NlT25TdWJtaXQiLCJpY19zdGFyIiwiaWNfc3Rhcl9ib3JkZXIiLCJpY19hcnJvd19iYWNrIiwiaWNfYXJyb3dfZm9yd2FyZCIsImljX3ZpZXdfbW9kdWxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OytRQ3RDQTs7Ozs7QUFHQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7QUFLQSxLQUFNQSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxVQUFELEVBQXVDO0FBQUEsT0FBM0JDLGlCQUEyQix1RUFBVCxJQUFTOztBQUNoRSxPQUFHLENBQUNELFVBQUosRUFBZTtBQUNiLFdBQU0sSUFBSUUsS0FBSixDQUFVLDBCQUFWLENBQU47QUFDRCxJQUZELE1BRU8sSUFBR0YsY0FBYyxPQUFPQSxVQUFQ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QVgsR0FBMEI7QUFDeEJzakIsa0JBQWU7QUFEUyxFQUExQjs7Ozs7Ozs7Ozs7Ozs7QUN6SEE7Ozs7OztBQUVPLEtBQU1DLDRCQUFVLHdDQUFNLEdBQUUsMEZBQVIsR0FBaEI7QUFDQSxLQUFNQywwQ0FBaUIsd0NBQU0sR0FBRSxrTUFBUixHQUF2QjtBQUNBLEtBQU1DLHdDQUFnQix3Q0FBTSxHQUFFLDhEQUFSLEdBQXRCO0FBQ0EsS0FBTUMsOENBQW1CLHdDQUFNLEdBQUUsMkRBQVIsR0FBekI7QUFDQSxLQUFNQywwQ0FBaUIsd0NBQU0sR0FBRSx5RkFBUixHQUF2QixDOzs7Ozs7QUNOUCwwQzs7Ozs7O0FDQUEsMEM7Ozs7OztBQ0FBLDJCIiwiZmlsZSI6InItcmVhY3QtdmlkZW8uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjFiNmNkZDM3MWJmNzEzNzQ2MDYiLCIvKipcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTEuMDEuMjAxNy5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgbWFpbkNTUyBmcm9tICcuL21haW4uY3NzJztcbmltcG9ydCBSZWFjdFZpZGVvIGZyb20gJy4vUmVhY3RWaWRlby9SZWFjdFZpZGVvJztcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSAnci1yZXBvcnRhbC1iYXNlJztcblxuLyoqXG4gKiBpbml0aWFsaXNlIEhpdExpc3Qgb24gRE9NQ29udGVudExvYWRlZCBmb3IgYSBxdWlja2VyIGNvbGQtc3RhcnQsIG5vIG5lZWQgdG8gd2FpdCBmb3IgdGhlIG9yaWdpbmFsIEhpdExpc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWdOYW1lIC0gbmFtZSBvZiB0aGUgdmFyaWFibGUgcGFzc2VkIHRvIERPTSBhcyBhIGNvbmZpZ1xuICogQHBhcmFtIHtCb29sZWFufSBbdGh1bWJzUGxhY2Vob2xkZXI9dHJ1ZV0gLSBkaXNwbGF5IHRodW1icyBhcyBpbWFnZSBwbGFjZWhvbGRlcnMgaW5zdGVhZCBvZiBtZWRpYSBpY29uc1xuICogKi9cbmNvbnN0IGxhdW5jaFZpZGVvSGl0bGlzdCA9IChjb25maWdOYW1lLHRodW1ic1BsYWNlaG9sZGVyPXRydWUpID0+IHtcbiAgaWYoIWNvbmZpZ05hbWUpe1xuICAgIHRocm93IG5ldyBFcnJvcignY29uZmlnIGlzIG5vdCBzcGVjaWZpZWQhJylcbiAgfSBlbHNlIGlmKGNvbmZpZ05hbWUgJiYgdHlwZW9mIGNvbmZpZ05hbWUgIT0gJ3N0cmluZycpe1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGNvbmZpZyBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBhICR7dHlwZW9mIGNvbmZpZ05hbWV9YClcbiAgfVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8UmVhY3RWaWRlb1xuICAgICAgY29uZmlnPXtjb25maWdOYW1lfVxuICAgICAgdGh1bWJzUGxhY2Vob2xkZXI9e3RodW1ic1BsYWNlaG9sZGVyfVxuICAgICAgdmVyYm9zZT17dHJ1ZX1cbiAgICAgIC8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG4gIH0pO1xufTtcblxud2luZG93LlJlcG9ydGFsID0gd2luZG93LlJlcG9ydGFsIHx8IHt9O1xuUmVwb3J0YWxCYXNlLm1peGluKHdpbmRvdy5SZXBvcnRhbCx7XG4gIGxhdW5jaFZpZGVvSGl0bGlzdFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fcm9vdC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3RvS2V5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX01hcC5qcyIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHxcbiAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgIChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiBPYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNLZXkuanMiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pZGVudGl0eS5qcyIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNMZW5ndGguanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNTeW1ib2wuanMiLCJpbXBvcnQgUHJvbWlzZSBmcm9tICdjb3JlLWpzL2xpYnJhcnkvZXM2L3Byb21pc2UnO1xuXG5jbGFzcyBSZXBvcnRhbEJhc2Uge1xuXG4gIC8qKlxuICAgKiBDb3BpZXMgcHJvcHMgZnJvbSBhIHNvdXJjZSBvYmplY3QgdG8gYSB0YXJnZXQgb2JqZWN0LlxuICAgKlxuICAgKiBOb3RlLCB0aGlzIG1ldGhvZCB1c2VzIGEgc2ltcGxlIGBmb3IuLi5pbmAgc3RyYXRlZ3kgZm9yIGVudW1lcmF0aW5nXG4gICAqIHByb3BlcnRpZXMuICBUbyBlbnN1cmUgb25seSBgb3duUHJvcGVydGllc2AgYXJlIGNvcGllZCBmcm9tIHNvdXJjZVxuICAgKiB0byB0YXJnZXQgYW5kIHRoYXQgYWNjZXNzb3IgaW1wbGVtZW50YXRpb25zIGFyZSBjb3BpZWQsIHVzZSBgZXh0ZW5kYC5cbiAgICpcbiAgICogQG1ldGhvZCBtaXhpblxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IFRhcmdldCBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFNvdXJjZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGFyZ2V0IG9iamVjdCB0aGF0IHdhcyBwYXNzZWQgYXMgZmlyc3QgYXJndW1lbnQuXG4gICAqL1xuICBzdGF0aWMgbWl4aW4odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBpIGluIHNvdXJjZSkge1xuICAgICAgdGFyZ2V0W2ldID0gc291cmNlW2ldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgc3RhdGljIF9sb2dnZXIobGV2ZWwsIGFyZ3MpIHtcbiAgICAvLyBhY2NlcHQgWydmb28nLCAnYmFyJ10gYW5kIFtbJ2ZvbycsICdiYXInXV1cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcmdzWzBdKSkge1xuICAgICAgYXJncyA9IGFyZ3NbMF07XG4gICAgfVxuICAgIC8vIG9ubHkgYWNjZXB0IGxvZ2dpbmcgZnVuY3Rpb25zXG4gICAgc3dpdGNoKGxldmVsKSB7XG4gICAgICBjYXNlICdsb2cnOlxuICAgICAgY2FzZSAnd2Fybic6XG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIGNvbnNvbGVbbGV2ZWxdLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX2xvZygpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgdGhpcy5fbG9nZ2VyKCdsb2cnLCBhcmdzKTtcbiAgfVxuXG4gIHN0YXRpYyBfd2FybigpIHtcbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgdGhpcy5fbG9nZ2VyKCd3YXJuJywgYXJncyk7XG4gIH1cblxuICBzdGF0aWMgX2Vycm9yKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICB0aGlzLl9sb2dnZXIoJ2Vycm9yJywgYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5hbWVkIGV2ZW50IHdpdGggYG5hbWVgXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHJldHVybiB7RXZlbnR9IFJldHVybnMgYSBjcmVhdGVkIGV2ZW50XG4gICAqICovXG4gIHN0YXRpYyBuZXdFdmVudChuYW1lKXtcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEluc3BlY3RzIGlmIHRoZSBjdXJyZW50IHN0cmluZyBtaWdodCBiZSBjb252ZXJ0ZWQgdG8gbnVtYmVyIGFuZCByZW5kZXJzIGl0IGFzIG51bWJlci4gSWYgc3RyaW5nIGxlbmd0aCBpcyAwLCByZXR1cm5zIGBudWxsYC4gSWYgbm9uZSBhcHBsaWVzIHJldHVybnMgdGhlIHN0cmluZyBhcyBpcy5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0ciAtIHZhbHVlIG9mIHRoZSBjZWxsIGlmIG5vdCBIVE1MIGNvbnRlbnRzXG4gICAqIEByZXR1cm4ge051bWJlcnxudWxsfFN0cmluZ31cbiAgICogKi9cbiAgc3RhdGljIGlzTnVtYmVyKHN0cil7XG4gICAgaWYoIWlzTmFOKHBhcnNlRmxvYXQoc3RyKSkpe1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UoLywvaSwnJyk7Ly8gcmVtb3ZlIHVubmVjZXNzYXJ5IGNvbW1hIGFzIGEgZGVsaW1pdGVyIGZvciB0aG91c2FuZHMgZnJvbSBkYXRhLlxuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyKTtcbiAgICB9IGVsc2UgaWYoc3RyLmxlbmd0aD09MCl7cmV0dXJuIG51bGx9IGVsc2Uge3JldHVybiBzdHJ9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIFhIUiB3cmFwcGVkIGluIGEgUHJvbWlzZVxuICAgKiBAcGFyYW0geyFTdHJpbmd9IFVSTCAtIHVybCB0byBzZW5kIGEgYEdFVGAgcmVxdWVzdCB0b1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBSZXR1cm5zIGEgdGhlbi1hYmxlIHByb21pc2Ugd2l0aCBgWE1MSHR0cFJlcXVlc3QucmVzcG9uc2VUZXh0YFxuICAgKiAqL1xuICBzdGF0aWMgcHJvbWlzZVJlcXVlc3QoVVJMKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgdHJ5e1xuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBVUkwsIHRydWUpO1xuICAgICAgICB4aHIub25sb2FkID0gKCk9PntcbiAgICAgICAgICB4aHIuc3RhdHVzID09IDIwMD9cbiAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk6IHJlamVjdCh7Y29kZTp4aHIuc3RhdHVzLCBtZXNzYWdlOnhoci5zdGF0dXNUZXh0fSk7fVxuICAgICAgICB4aHIub25lcnJvciA9IChlcnJvcik9PntyZWplY3QoZXJyb3IpO31cbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSB2YXJpYWJsZSBsaXN0ZWQgaW4gcXVlcnkgc3RyaW5nXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gdmFyaWFibGUgLSB2YXJpYWJsZSBuYW1lIHRvIGdldCB2YWx1ZSBmb3JcbiAgICogQHBhcmFtIHtTdHJpbmc9fSBbcXVlcnk9d2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSldIC0gdGhlIHF1ZXJ5IHN0cmluZyB0byBzZWFyY2ggdmFyaWFibGUgZm9yIGluXG4gICAqIEByZXR1cm4ge1N0cmluZ30gUmV0dXJucyB2YWx1ZSBmb3IgdGhlIHZhcmlhYmxlXG4gICAqICovXG4gIHN0YXRpYyBnZXRRdWVyeVZhcmlhYmxlKHZhcmlhYmxlLHF1ZXJ5PXdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKXtcbiAgICB2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KFwiJlwiKTtcbiAgICBmb3IgKHZhciBpPTA7aTx2YXJzLmxlbmd0aDtpKyspIHtcbiAgICAgIHZhciBwYWlyID0gdmFyc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICBpZigocGFpclswXSkudG9Mb3dlckNhc2UoKSA9PSB2YXJpYWJsZS50b0xvd2VyQ2FzZSgpKXtyZXR1cm4gcGFpclsxXTt9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIHR1cm5zIGB3aW5kb3cubG9jYXRpb25gIG9iamVjdCBpbnRvIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhcyBuYW1lZCBrZXlzIG5lY2Vzc2FyeSB0byByZWNvbnN0cnVjdCB0aGUgVVJMXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gW2xvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uXSAtIGEgd2luZG93LmxvY2F0aW9uIG9iamVjdCwgYnkgZGVmYXVsdCBvZiB0aGUgaG9zdCB3aW5kb3cgd2hlcmUgdGhlIHNjcmlwdCBpcyBleGVjdXRlZFxuICAgKiBAcmV0dXJucyB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBhIGBsb2NhdGlvbmAgb2JqZWN0XG4gICAqICovXG4gIHN0YXRpYyBsb2NhdGlvbkRlc2VyaWFsaXplKGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uKXtcbiAgICBsZXQgbyA9IHtcbiAgICAgIHBhdGg6IGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgcXVlcnk6e31cbiAgICB9O1xuICAgIGxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkuc3BsaXQoLyYvKS5mb3JFYWNoKHBhaXI9PntcbiAgICAgIGxldCBhUGFpcj0gcGFpci5zcGxpdCgvPS8pO1xuICAgICAgby5xdWVyeVthUGFpclswXS50b0xvd2VyQ2FzZSgpXSA9IGFQYWlyWzFdXG4gICAgfSk7XG4gICAgcmV0dXJuIG9cbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJucyBhIGBsb2NhdGlvbmAgb2JqZWN0IChyZXN1bHQgb2YgYGxvY2F0aW9uRGVzZXJpYWxpemVgKSBpbnRvIGEgVVJMXG4gICAqIEBwYXJhbSB7e3BhdGg6U3RyaW5nLCBxdWVyeTpPYmplY3R9fSBsb2NhdGlvbiAtIGFuIG9iamVjdCB3aXRoIHBhcmFtcyBhbmQgYSB1cmxcbiAgICogQHJldHVybnMge1N0cmluZ30gLSBhIFVSTCBzdHJpbmdcbiAgICogKi9cbiAgc3RhdGljIGxvY2F0aW9uU2VyaWFsaXplKGxvY2F0aW9uKXtcbiAgICBsZXQgcXVlcnk9W107XG4gICAgZm9yKGxldCBrZXkgaW4gbG9jYXRpb24ucXVlcnkpe1xuICAgICAgcXVlcnkucHVzaChba2V5LGxvY2F0aW9uLnF1ZXJ5W2tleV1dLmpvaW4oJz0nKSk7XG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRoICsgJz8nICsgcXVlcnkuam9pbignJicpO1xuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydGFsQmFzZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yLXJlcG9ydGFsLWJhc2Uvc3JjL3JlcG9ydGFsLWJhc2UuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU2V0LmpzIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19TdGFjay5qcyIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0LmpzIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jYXN0UGF0aC5qcyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2lzSW5kZXguanMiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpZiBzdWl0YWJsZSBmb3Igc3RyaWN0XG4gKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmljdENvbXBhcmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNTdHJpY3RDb21wYXJhYmxlLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYG1hdGNoZXNQcm9wZXJ0eWAgZm9yIHNvdXJjZSB2YWx1ZXMgc3VpdGFibGVcbiAqIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShrZXksIHNyY1ZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZSAmJlxuICAgICAgKHNyY1ZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiBPYmplY3Qob2JqZWN0KSkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9lcS5qcyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qcyIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9rZXlzLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDIzLjAxLjIwMTcuXG4gKi9cbmltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogUmVuZGVycyBhbiBTVkcgbWF0ZXJpYWwgaWNvbiBpbXBvcnRlZCBmcm9tIGFuIGljb24tc2V0IGFuZCBwYXNzZWQgdmlhIHByb3BzXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcy5pY29uIC0gaW1wb3J0ZWQgaWNvbiBkZWZpbml0aW9uIChqc3gpXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMuY2hpbGRyZW4gLSBpbXBvcnRlZCBpY29uIGRlZmluaXRpb24gKGpzeCkgaWYgeW91IHByZWZlciB1c2luZyBjaGlsZHJlbiBhbmQgYSBjbG9zaW5nIHRhZyBpbiBKU1ggcmF0aGVyIHRoYW4gYW4gaWNvbiBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBbcHJvcHMuc2l6ZT0yNF0gLSBpY29uIHdpZHRoL2hlaWdodCAod2hpY2ggZXF1YWxzIGhlaWdodCBzaW5jZSBhbGwgTUQgaWNvbnMgaGF2ZSBzcXVhcmUgdmlld2JveCkuIEFueSBvZiBgMTh8MjR8MzZ8NDhgXG4gKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmZpbGw9J3JnYmEoMCwwLDAsLjg1KSddIC0gaWNvbiBmaWxsIC0gYW55IHZhbGlkIGNzcyBjb2xvciwgZmlsbHMgdGhlIHdob2xlIGljb25cbiAqICovXG5leHBvcnQgY2xhc3MgTURJY29uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2ZpbGwsc2l6ZSxpY29uLGNoaWxkcmVufSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuICg8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPXtmaWxsfSB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgY2hpbGRyZW49e2ljb24gfHwgY2hpbGRyZW59IC8+KTtcbiAgfVxufVxuXG5NREljb24uZGVmYXVsdFByb3BzID0ge1xuICBzaXplOiAyNCxcbiAgZmlsbDogJ3JnYmEoMCwwLDAsLjg1KSdcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L01ESWNvbi9zcmMvTURJY29uLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMTEuMDEuMjAxNy5cclxuICovXHJcbmltcG9ydCB7TURJY29ufSBmcm9tICcuL01ESWNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNREljb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vTURJY29uL3NyYy9tYWluLmpzIiwiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dChyZXF1aXJlKFwicmVhY3RcIikpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXCJyZWFjdFwiXSx0KTtlbHNle3ZhciBvPXQoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/cmVxdWlyZShcInJlYWN0XCIpOmUucmVhY3QpO2Zvcih2YXIgciBpbiBvKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW3JdPW9bcl19fSh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KHIpe2lmKG9bcl0pcmV0dXJuIG9bcl0uZXhwb3J0czt2YXIgbj1vW3JdPXtleHBvcnRzOnt9LGlkOnIsbG9hZGVkOiExfTtyZXR1cm4gZVtyXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyx0KSxuLmxvYWRlZD0hMCxuLmV4cG9ydHN9dmFyIG89e307cmV0dXJuIHQubT1lLHQuYz1vLHQucD1cIlwiLHQoMCl9KFtmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gaShlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fWZ1bmN0aW9uIGEoZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbz1hcmd1bWVudHNbdF07Zm9yKHZhciByIGluIG8pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8scikmJihlW3JdPW9bcl0pfXJldHVybiBlfSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKXt2YXIgcj10W29dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19cmV0dXJuIGZ1bmN0aW9uKHQsbyxyKXtyZXR1cm4gbyYmZSh0LnByb3RvdHlwZSxvKSxyJiZlKHQsciksdH19KCkscD1vKDEpLHU9cihwKSxjPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSl7bih0aGlzLHQpO3ZhciBvPWkodGhpcywodC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbCh0aGlzLGUpKTtyZXR1cm4gby5faW1hZ2VPbmxvYWQ9by5faW1hZ2VPbmxvYWQuYmluZChvKSxvLl9pbWFnZU9uZXJyb3I9by5faW1hZ2VPbmVycm9yLmJpbmQobyksby5zdGF0ZT17c3JjOlwiXCIscGxhY2Vob2xkZXJIaWRkZW46IW8ucHJvcHMucGxhY2Vob2xkZXIsc2l6aW5nOm8ucHJvcHMuc2l6aW5nP28ucHJvcHMuc2l6aW5nOm51bGwscG9zaXRpb246by5wcm9wcy5wb3NpdGlvbj9vLnByb3BzLnBvc2l0aW9uOlwiY2VudGVyXCIscHJvcG9ydGlvbjowLGxvYWRlZDohMSxsb2FkaW5nOiExLGVycm9yOiExfSxvfXJldHVybiBhKHQsZSksbCh0LFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX2xvYWQoKSx0aGlzLl9jb21wdXRlRGltZW5zaW9ucygpLHRoaXMuX2NvbXB1dGVQcm9wb3J0aW9uKHRoaXMucHJvcHMuYXNwZWN0KX19LHtrZXk6XCJfY29tcHV0ZURpbWVuc2lvbnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucHJvcHMsdD1lLndpZHRoLG89ZS5oZWlnaHQ7dGhpcy5zZXRTdGF0ZSh7d2lkdGg6aXNOYU4odCk/dDp0K1wicHhcIixoZWlnaHQ6aXNOYU4obyk/bzpvK1wicHhcIn0pfX0se2tleTpcIl9jb21wdXRlUHJvcG9ydGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGUmJmUuaW5kZXhPZihcIjpcIik+LTEpe3ZhciB0PWUuc3BsaXQoXCI6XCIpLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gcGFyc2VGbG9hdChlKX0pO2lzTmFOKHRbMF0pfHxpc05hTih0WzFdKXx8dGhpcy5zZXRTdGF0ZShmdW5jdGlvbihlKXtpZighaXNOYU4ocGFyc2VGbG9hdChlLndpZHRoKSkpcmV0dXJue3Byb3BvcnRpb246KHBhcnNlRmxvYXQoZS53aWR0aCkqKHRbMV0vdFswXSkpLnRvU3RyaW5nKCkrZS53aWR0aC5zdWJzdHJpbmcocGFyc2VGbG9hdChlLndpZHRoKS50b1N0cmluZygpLmxlbmd0aCksaGVpZ2h0OlwiYXV0b1wifX0pfX19LHtrZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuc3RhdGUsdD1lLndpZHRoLG89ZS5oZWlnaHQscj1lLnByb3BvcnRpb24sbj1lLnNyYyxpPWUuc2l6aW5nLGE9ZS5wb3NpdGlvbixzPWUubG9hZGluZyxsPWUubG9hZGVkLHA9ZS5wbGFjZWhvbGRlckhpZGRlbixjPXRoaXMucHJvcHMsZD1jLnByZWxvYWQsZj1jLmZhZGUsaD1jLnBsYWNlaG9sZGVyU2l6aW5nLGc9Yy5wbGFjZWhvbGRlcixtPWMuYWx0O3JldHVybiB1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJQcm9wb3J0aW9uYWxJbWFnZVwiLHN0eWxlOnt3aWR0aDp0LGhlaWdodDpvLHBhZGRpbmdUb3A6cn19LHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcInNpemVkSW1nRGl2XCIscm9sZTpcImltZ1wiLHN0eWxlOntiYWNrZ3JvdW5kSW1hZ2U6XCJ1cmwoXCIrbitcIilcIixiYWNrZ3JvdW5kU2l6ZTppLGJhY2tncm91bmRQb3NpdGlvbjphLGJhY2tncm91bmRSZXBlYXQ6aSYmXCJuby1yZXBlYXRcIixkaXNwbGF5Omk/XCJibG9ja1wiOlwibm9uZVwifX0pLHUuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3NyYzpuLGFsdDptLG9uTG9hZDp0aGlzLl9pbWFnZU9ubG9hZCxvbkVycm9yOnRoaXMuX2ltYWdlT25lcnJvcixzdHlsZTp7ZGlzcGxheTppP1wibm9uZVwiOlwiYmxvY2tcIn19KSx1LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp7YmFja2dyb3VuZEltYWdlOlwidXJsKFwiKyghIWcmJmcpK1wiKVwiLGJhY2tncm91bmRTaXplOmg/aDppLGJhY2tncm91bmRQb3NpdGlvbjphLGJhY2tncm91bmRSZXBlYXQ6aSYmXCJuby1yZXBlYXRcIn0sY2xhc3NOYW1lOlwiaW1hZ2VQbGFjZWhvbGRlciBcIisocCYmXCJoaWRkZW5cIikrXCIgXCIrKGQmJmYmJiFzJiZsJiZcImZhZGVkLW91dFwiKX0pKX19LHtrZXk6XCJfaW1hZ2VPbmxvYWRcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ITEsbG9hZGVkOiEwLGVycm9yOiExfSl9fSx7a2V5OlwiX2ltYWdlT25lcnJvclwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXRTdGF0ZShzKHt9LHRoaXMuX3Jlc2V0KCkse2Vycm9yOiEwfSkpfX0se2tleTpcIl9yZXNldFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJue3NyYzpcIlwiLGxvYWRpbmc6ITEsbG9hZGVkOiExLGVycm9yOiExfX19LHtrZXk6XCJfbG9hZFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fcmVzZXQoKTtpZighdGhpcy5wcm9wcy5wcmV2ZW50TG9hZCl7dmFyIHQ9dGhpcy5wcm9wcy5zcmM7ZS5zcmMhPXQmJihlPXMoe30sZSx7c3JjOiEhdCYmdCxsb2FkaW5nOiEhdH0pKX10aGlzLnNldFN0YXRlKGUpfX1dKSx0fSh1LmRlZmF1bHQuQ29tcG9uZW50KTt0LmRlZmF1bHQ9Y30sZnVuY3Rpb24odCxvKXt0LmV4cG9ydHM9ZX1dKX0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9wb3J0aW9uYWxJbWFnZS5idW5kbGUuanMubWFwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9Qcm9wb3J0aW9uYWxJbWFnZS9kaXN0L1Byb3BvcnRpb25hbEltYWdlLmJ1bmRsZS5qcyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2VzNi9wcm9taXNlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fSGFzaC5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fUHJvbWlzZS5qcyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fVWludDhBcnJheS5qcyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcHBseS5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qcyIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19hcnJheU1hcC5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0ZsYXR0ZW5hYmxlID0gcmVxdWlyZSgnLi9faXNGbGF0dGVuYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggc3VwcG9ydCBmb3IgcmVzdHJpY3RpbmcgZmxhdHRlbmluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcGFyYW0ge251bWJlcn0gZGVwdGggVGhlIG1heGltdW0gcmVjdXJzaW9uIGRlcHRoLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJlZGljYXRlPWlzRmxhdHRlbmFibGVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1N0cmljdF0gUmVzdHJpY3QgdG8gdmFsdWVzIHRoYXQgcGFzcyBgcHJlZGljYXRlYCBjaGVja3MuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBkZXB0aCwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHByZWRpY2F0ZSB8fCAocHJlZGljYXRlID0gaXNGbGF0dGVuYWJsZSk7XG4gIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChkZXB0aCA+IDAgJiYgcHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBmbGF0dGVuIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmxhdHRlbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlRmxhdHRlbi5qcyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaGFzSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30ga2V5IFRoZSBrZXkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VIYXNJbihvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYga2V5IGluIE9iamVjdChvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VIYXNJbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSGFzSW4uanMiLCJ2YXIgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBiYXNlSXNOYU4gPSByZXF1aXJlKCcuL19iYXNlSXNOYU4nKSxcbiAgICBzdHJpY3RJbmRleE9mID0gcmVxdWlyZSgnLi9fc3RyaWN0SW5kZXhPZicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlXG4gICAgPyBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KVxuICAgIDogYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUlzTmFOLCBmcm9tSW5kZXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qcyIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmFOO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hTi5qcyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsInZhciBiYXNlTWF0Y2hlcyA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzJyksXG4gICAgYmFzZU1hdGNoZXNQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgcHJvcGVydHkgPSByZXF1aXJlKCcuL3Byb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXRlcmF0ZWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhbiBpdGVyYXRlZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgaXRlcmF0ZWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJdGVyYXRlZSh2YWx1ZSkge1xuICAvLyBEb24ndCBzdG9yZSB0aGUgYHR5cGVvZmAgcmVzdWx0IGluIGEgdmFyaWFibGUgdG8gYXZvaWQgYSBKSVQgYnVnIGluIFNhZmFyaSA5LlxuICAvLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NjAzNCBmb3IgbW9yZSBkZXRhaWxzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKVxuICAgICAgPyBiYXNlTWF0Y2hlc1Byb3BlcnR5KHZhbHVlWzBdLCB2YWx1ZVsxXSlcbiAgICAgIDogYmFzZU1hdGNoZXModmFsdWUpO1xuICB9XG4gIHJldHVybiBwcm9wZXJ0eSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUl0ZXJhdGVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9fYmFzZUlzTWF0Y2gnKSxcbiAgICBnZXRNYXRjaERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXRjaERhdGEnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKSxcbiAgICBnZXQgPSByZXF1aXJlKCcuL2dldCcpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVByb3BlcnR5RGVlcC5qcyIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBvdmVyUmVzdCA9IHJlcXVpcmUoJy4vX292ZXJSZXN0JyksXG4gICAgc2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19zZXRUb1N0cmluZycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlUmVzdC5qcyIsInZhciBjb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQnKSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTZXRUb1N0cmluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVGltZXMuanMiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKSxcbiAgICBjcmVhdGVTZXQgPSByZXF1aXJlKCcuL19jcmVhdGVTZXQnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuaXFCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHNlZW4gPSByZXN1bHQ7XG5cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gIH1cbiAgZWxzZSBpZiAobGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICB2YXIgc2V0ID0gaXRlcmF0ZWUgPyBudWxsIDogY3JlYXRlU2V0KGFycmF5KTtcbiAgICBpZiAoc2V0KSB7XG4gICAgICByZXR1cm4gc2V0VG9BcnJheShzZXQpO1xuICAgIH1cbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgc2VlbiA9IG5ldyBTZXRDYWNoZTtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWVuID0gaXRlcmF0ZWUgPyBbXSA6IHJlc3VsdDtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciBzZWVuSW5kZXggPSBzZWVuLmxlbmd0aDtcbiAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHNlZW4sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgaWYgKHNlZW4gIT09IHJlc3VsdCkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmlxO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2JqZWN0IG9mIGB2YWx1ZXNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBzZXQuXG4gKi9cbnZhciBjcmVhdGVTZXQgPSAhKFNldCAmJiAoMSAvIHNldFRvQXJyYXkobmV3IFNldChbLC0wXSkpWzFdKSA9PSBJTkZJTklUWSkgPyBub29wIDogZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgU2V0KHZhbHVlcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19jcmVhdGVTZXQuanMiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGV4aXN0cyBvbiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICBpZiAoIShyZXN1bHQgPSBvYmplY3QgIT0gbnVsbCAmJiBoYXNGdW5jKG9iamVjdCwga2V5KSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgfVxuICBpZiAocmVzdWx0IHx8ICsraW5kZXggIT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBsZW5ndGggPSBvYmplY3QgPT0gbnVsbCA/IDAgOiBvYmplY3QubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19oYXNQYXRoLmpzIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faGFzaFNldC5qcyIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwcmVhZGFibGVTeW1ib2wgPSBTeW1ib2wgPyBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgZmxhdHRlbmFibGUgYGFyZ3VtZW50c2Agb2JqZWN0IG9yIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZsYXR0ZW5hYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzRmxhdHRlbmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSB8fFxuICAgICEhKHNwcmVhZGFibGVTeW1ib2wgJiYgdmFsdWUgJiYgdmFsdWVbc3ByZWFkYWJsZVN5bWJvbF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRmxhdHRlbmFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNGbGF0dGVuYWJsZS5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX292ZXJSZXN0LmpzIiwiLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVBZGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ2YXIgYmFzZVNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVNldFRvU3RyaW5nJyksXG4gICAgc2hvcnRPdXQgPSByZXF1aXJlKCcuL19zaG9ydE91dCcpO1xuXG4vKipcbiAqIFNldHMgdGhlIGB0b1N0cmluZ2AgbWV0aG9kIG9mIGBmdW5jYCB0byByZXR1cm4gYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgc2V0VG9TdHJpbmcgPSBzaG9ydE91dChiYXNlU2V0VG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3J0T3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3Nob3J0T3V0LmpzIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qcyIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdGFja1NldC5qcyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanMiLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlTGVhZGluZ0RvdCA9IC9eXFwuLyxcbiAgICByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZUNhcHBlZChmdW5jdGlvbihzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAocmVMZWFkaW5nRG90LnRlc3Qoc3RyaW5nKSkge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCIvKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmV0dXJuIGZyb20gdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbnN0YW50IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IF8udGltZXMoMiwgXy5jb25zdGFudCh7ICdhJzogMSB9KSk7XG4gKlxuICogY29uc29sZS5sb2cob2JqZWN0cyk7XG4gKiAvLyA9PiBbeyAnYSc6IDEgfSwgeyAnYSc6IDEgfV1cbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzWzBdID09PSBvYmplY3RzWzFdKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL2NvbnN0YW50LmpzIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9nZXQuanMiLCJ2YXIgYmFzZUhhc0luID0gcmVxdWlyZSgnLi9fYmFzZUhhc0luJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0luO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaGFzSW4uanMiLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCIvKipcbiAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmxhc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gbGFzdChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPyBhcnJheVtsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbGFzdC5qcyIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvbWVtb2l6ZS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL25vb3AuanMiLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5JyksXG4gICAgYmFzZVByb3BlcnR5RGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eURlZXAnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBhIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiAyIH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiAxIH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmInKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLm1hcChfLnNvcnRCeShvYmplY3RzLCBfLnByb3BlcnR5KFsnYScsICdiJ10pKSwgJ2EuYicpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHRvS2V5KHBhdGgpKSA6IGJhc2VQcm9wZXJ0eURlZXAocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC9wcm9wZXJ0eS5qcyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ2YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBiYXNlVW5pcSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmlxJyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4vbGFzdCcpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8udW5pb25gIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGl0ZXJhdGVlYCB3aGljaCBpc1xuICogaW52b2tlZCBmb3IgZWFjaCBlbGVtZW50IG9mIGVhY2ggYGFycmF5c2AgdG8gZ2VuZXJhdGUgdGhlIGNyaXRlcmlvbiBieVxuICogd2hpY2ggdW5pcXVlbmVzcyBpcyBjb21wdXRlZC4gUmVzdWx0IHZhbHVlcyBhcmUgY2hvc2VuIGZyb20gdGhlIGZpcnN0XG4gKiBhcnJheSBpbiB3aGljaCB0aGUgdmFsdWUgb2NjdXJzLiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDpcbiAqICh2YWx1ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0gey4uLkFycmF5fSBbYXJyYXlzXSBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBjb21iaW5lZCB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udW5pb25CeShbMi4xXSwgWzEuMiwgMi4zXSwgTWF0aC5mbG9vcik7XG4gKiAvLyA9PiBbMi4xLCAxLjJdXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLnVuaW9uQnkoW3sgJ3gnOiAxIH1dLCBbeyAneCc6IDIgfSwgeyAneCc6IDEgfV0sICd4Jyk7XG4gKiAvLyA9PiBbeyAneCc6IDEgfSwgeyAneCc6IDIgfV1cbiAqL1xudmFyIHVuaW9uQnkgPSBiYXNlUmVzdChmdW5jdGlvbihhcnJheXMpIHtcbiAgdmFyIGl0ZXJhdGVlID0gbGFzdChhcnJheXMpO1xuICBpZiAoaXNBcnJheUxpa2VPYmplY3QoaXRlcmF0ZWUpKSB7XG4gICAgaXRlcmF0ZWUgPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGJhc2VVbmlxKGJhc2VGbGF0dGVuKGFycmF5cywgMSwgaXNBcnJheUxpa2VPYmplY3QsIHRydWUpLCBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDIpKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaW9uQnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC91bmlvbkJ5LmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDEwLjAxLjIwMTcuXG4gKi9cbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSBcInItcmVwb3J0YWwtYmFzZVwiO1xuaW1wb3J0IEhpdGxpc3RTZXR1cCBmcm9tIFwiLi9oaXRsaXN0LXNldHVwXCI7XG5cbmNsYXNzIEhpdGxpc3REYXRhc291cmNlIGV4dGVuZHMgSGl0bGlzdFNldHVwe1xuICAvKipcbiAgICogVGhpcyBjbGFzcyBhbGxvd3MgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB3aXRoIHRoZSBIaXRMaXN0IGRhdGFiYXNlIGFuZCB1c2UgdXRpbGl0eSBtZXRob2RzIHRvIHF1ZXJ5IGFuZCBmaWx0ZXIgZGF0YSBwcm92aWRlZCB0aGVyZSdzIGEgaGl0bGlzdCBvbiB0aGUgcGFnZVxuICAgKiBAZXh0ZW5kcyBIaXRsaXN0U2V0dXBcbiAgICogKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucz17fSl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZXM9W107XG4gICAgLyoqIEBwcm9wZXJ0eSB7U3RyaW5nfSBtb2RpZmllciAtIGV4dHJhIHBhcmFtcyBhZGRlZCBhcyBhIHN0cmluZyBmcm9tIGZpbHRlcnMgKi9cbiAgICB0aGlzLm1vZGlmaWVyID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogcGVyZm9ybXMgaW5pdGlhbCBkYXRhIGxvYWRcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgaW5pdGlhbERhdGFMb2FkKCl7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2luaXRpYWxMb2FkOnRydWV9KVxuICB9XG4gIC8qKlxuICAgKiBsb2FkcyBuZXh0IHBhZ2VcbiAgICogQHJldHVybnMge1Byb21pc2V9IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmVkIHRvIGFuIGFycmF5IG9mIGRhdGFcbiAgICogKi9cbiAgbmV4dFBhZ2UoKXtcbiAgICB0aGlzLl9za2lwUGFnZSh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVzcG9uc2Uoe2lzUGFnaW5nOiB0cnVlfSx0aGlzLm1vZGlmaWVyKTtcbiAgfVxuICAvKipcbiAgICogbG9hZHMgcHJldmlvdXMgcGFnZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gUmV0dXJucyBhIHByb21pc2UgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgb2YgZGF0YVxuICAgKiAqL1xuICBwcmV2aW91c1BhZ2UoKXtcbiAgICB0aGlzLl9za2lwUGFnZShmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlc3BvbnNlKHtpc1BhZ2luZzogdHJ1ZX0sdGhpcy5tb2RpZmllcik7XG4gIH1cblxuICAvKipcbiAgICogcXVlcmllcyBIaXRMaXN0IEFQSVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiAqL1xuICByZXF1ZXN0UmVzcG9uc2Uob3B0aW9ucyl7XG4gICAgbGV0IHF1ZXJ5PSBSZXBvcnRhbEJhc2UubG9jYXRpb25EZXNlcmlhbGl6ZSgpLnF1ZXJ5O1xuICAgIGlmKHF1ZXJ5ICYmIHF1ZXJ5LnJlcG9ydGlkICYmIHRoaXMuaGl0bGlzdElEKXtcbiAgICAgIC8qc2V0IGNvbW1vbiBwYXJhbXMqL1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgUGFnZUlkOiB0aGlzLnBhZ2VJRCxcbiAgICAgICAgcGFnZVN0YXRlSWQ6IHRoaXMucGFnZVN0YXRlSUQsXG4gICAgICAgIFByZXZpZXc6IHF1ZXJ5LnByZXZpZXdcbiAgICAgIH07XG5cbiAgICAgIC8qaWYgb3B0aW9ucyBhcmUgcGFzc2VkLCBhZGQgb3B0aW9ucyovXG4gICAgICBpZihvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIGZvciAobGV0IGF0dHJuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICBwYXJhbXNbYXR0cm5hbWVdID0gdHlwZW9mIG9wdGlvbnNbYXR0cm5hbWVdPT09J2Jvb2xlYW4nPyhvcHRpb25zW2F0dHJuYW1lXT8nMSc6JzAnKTpvcHRpb25zW2F0dHJuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighcGFyYW1zLnNlYXJjaCAmJiB0aGlzLl9zZWFyY2hWYWx1ZXMubGVuZ3RoPjApe1xuICAgICAgICBwYXJhbXMuc2VhcmNoID0gSlNPTi5zdHJpbmdpZnkodGhpcy5fc2VhcmNoVmFsdWVzKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXM7XG5cbiAgICAgIGlmIChzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcyE9bnVsbCAmJiAhaXNOYU4oc29ydGluZ1BhZ2luZ1ZhbHVlcy5wYWdpbmdWYWx1ZXMucGFnZU51bWJlcikpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pbml0aWFsTG9hZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3J0aW5nUGFnaW5nVmFsdWVzLnBhZ2luZ1ZhbHVlcy5wYWdlTnVtYmVyICs9IHNvcnRpbmdQYWdpbmdWYWx1ZXMucGFnaW5nVmFsdWVzLnBhZ2luZ0ZvcndhcmQgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcGFyYW1zLnNvcnRpbmdQYWdpbmdWYWx1ZXM9SlNPTi5zdHJpbmdpZnkoc29ydGluZ1BhZ2luZ1ZhbHVlcyk7XG5cbiAgICAgIHJldHVybiBSZXBvcnRhbEJhc2UucHJvbWlzZVJlcXVlc3QoYCR7dGhpcy5zZXJ2aWNlVVJMfSYke0hpdGxpc3REYXRhc291cmNlLnNlcmlhbGl6ZVBhcmFtcyhwYXJhbXMpfSR7dGhpcy5tb2RpZmllciE9Jyc/JyYnK3RoaXMubW9kaWZpZXI6Jyd9YClcbiAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PnRoaXMucGFyc2VSZXNwb25zZShyZXNwb25zZSkpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBIaXRMaXN0IEFQSSByZXNwb25zZVxuICAgKiAqL1xuICBwYXJzZVJlc3BvbnNlKHJlc3BvbnNlKXtcbiAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuXG4gICAgdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzID0gcmVzcG9uc2Uuc29ydGluZ1BhZ2luZ1ZhbHVlcztcbiAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIHRoaXMucGFnZUluZm8gPSByZXNwb25zZS5wYWdlSW5mbztcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcGFnaW5nRm9yd2FyZCBpZiBgdHJ1ZWAgZ29lcyBmb3J3YXJkLCBpZiBgbnVsbGAgZ29lcyBiYWNrd2FyZFxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogKi9cbiAgX3NraXBQYWdlKHBhZ2luZ0ZvcndhcmQpe1xuICAgIGxldCBfc3B2ID0gey4uLnRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlc307XG4gICAgbGV0IHB2ID0gey4uLl9zcHYucGFnaW5nVmFsdWVzfSB8fCB7fTtcbiAgICBwdi5wYWdpbmdGb3J3YXJkID0gcGFnaW5nRm9yd2FyZDsgLyppZiBmb3J3YXJkIGlzIG5lZWRlZCB0aGVuIHBhc3MgdHJ1ZSwgZWxzZSBudWxsIC0gYmFja3dhcmQqL1xuICAgIHB2LnN0YXJ0SWQgPSBwYWdpbmdGb3J3YXJkID8gcHYubGFzdFN0YXJ0SWQgOiBwdi5maXJzdFN0YXJ0SWQ7XG4gICAgcHYuc3RhcnRWYWx1ZSA9IHBhZ2luZ0ZvcndhcmQgPyBwdi5sYXN0U3RhcnRWYWx1ZSA6IHB2LmZpcnN0U3RhcnRWYWx1ZTtcbiAgICB0aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB7XG4gICAgICAuLi50aGlzLnNvcnRpbmdQYWdpbmdWYWx1ZXMsXG4gICAgICBwYWdpbmdWYWx1ZXM6IHB2XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXJpYWxpemUgcGFyYW1zIGludG8gYSBxdWVyeSBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyAtIGFuIG9iamVjdCB3aXRoIHBhcmFtZXRlcnNcbiAgICogKi9cbiAgc3RhdGljIHNlcmlhbGl6ZVBhcmFtcyhwYXJhbXMpe1xuICAgIGxldCBxdWVyeSA9IFtdO1xuICAgIGZvcihsZXQga2V5IGluIHBhcmFtcyl7XG4gICAgICBxdWVyeS5wdXNoKFtrZXkscGFyYW1zW2tleV1dLmpvaW4oJz0nKSk7XG4gICAgfVxuICAgIHJldHVybiBxdWVyeS5qb2luKCcmJylcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpdGxpc3REYXRhc291cmNlO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL2hpdGxpc3QtZGF0YXNvdXJjZS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJdmFuUCBvbiAxMC4wMS4yMDE3LlxuICovXG5cbmNsYXNzIEhpdGxpc3RTZXR1cHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICAvL2ZpeCBmb3Igd2luZG93LmxvY2F0aW9uIG9yaWdpbiwgdGhhbnggSUVcbiAgICBpZiAoIXdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IEhpdGxpc3RTZXR1cC5nZXRPcmlnaW5hbENvbmZpZygpO1xuICAgIHRoaXMuX2VsZW1lbnRUeXBlID0gd2luZG93LkhpdExpc3RFbGVtZW50VHlwZTtcbiAgICB0aGlzLl9vcCA9IHdpbmRvdy5TZWFyY2hhYmxlTGlzdE9wZXJhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGFsbG93cyBnZXR0aW5nIGEgbG9jYWxpc2VkIHN0cmluZyBpbiB0aGUgbGFuZ3VhZ2Ugb2YgdGhlIHJlcG9ydCBmcm9tIEhpdGxpc3QgY29uZmlnLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IC0gdGhlIGtleSB0byBsb29rIHRoZSBwcm9wZXJ0eSB1cFxuICAgKlxuICAgKiAqIGBzdG9lYDpcIlNtYWxsZXIgdGhhbiBvciBlcXVhbFwiLFxuICAgKiAqIGBndG9lYDpcIkdyZWF0ZXIgdGhhbiBvciBlcXVhbFwiLFxuICAgKiAqIGBiZXR3ZWVuYDpcIkJldHdlZW5cIixcbiAgICogKiBgYmVmb3JlYDpcIkJlZm9yZVwiLFxuICAgKiAqIGBhZnRlcmA6XCJBZnRlclwiLFxuICAgKiAqIGBleGFjdGx5YDpcIkV4YWN0bHlcIixcbiAgICogKiBgc2hvd2RlZmF1bHRjb2xzYDpcIlNob3cgZGVmYXVsdCBjb2x1bW5zXCIsXG4gICAqICogYGFwcGx5YDpcIkFwcGx5XCIsXG4gICAqICogYGNhbmNlbGA6XCJDYW5jZWxcIixcbiAgICogKiBgc2hvd2hpZGVgOlwiU2hvdyAvIEhpZGUgY29sdW1uc1wiLFxuICAgKiAqIGB5ZXNgOlwiWWVzXCIsXG4gICAqICogYG5vYDpcIk5vXCIsXG4gICAqICogYGxvYWRpbmdEYXRhYDpcIkxvYWRpbmcgZGF0YSwgcGxlYXNlIHdhaXQuLi5cIixcIlxuICAgKiAqIGBjaGVja2FsbGA6XCJDaGVjayBhbGxcIixcbiAgICogKiBgdW5jaGVja2FsbGA6XCJVbmNoZWNrIGFsbFwiLFxuICAgKiAqIGBlcnJvckxvYWRpbmdgOlwiRXJyb3IgbG9hZGluZyBkYXRhXCIsXG4gICAqICogYGVycm9yTm9Db2x1bW5zYDpcIk5vIGNvbHVtbnMgc2VsZWN0ZWRcIlxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19SRVNQT05ERU5UT1ZFUlZJRVdgOlwiUmVzcG9uZGVudCBvdmVydmlld1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19QUklOVGA6XCJQcmludCB0aGUgY3VycmVudCByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX0NMT1NFYDpcIkNsb3NlIHRoaXMgb3ZlcmxheVwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19GSUxURVJgOlwiRmlsdGVyIHF1ZXN0aW9uc1wiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19OT1RISU5HRk9VTkRgOlwiTm8gcXVlc3Rpb25zIG1hdGNoIHlvdXIgc2VhcmNoXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTYDpcIlByZXZpb3VzXCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX1BSRVZJT1VTSElOVGA6XCJQcmV2aW91cyByZXNwb25kZW50XCIsXG4gICAqICogYFJFUE9SVF9TSU5HTEVWSUVXX05FWFRgOlwiTmV4dFwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19ORVhUSElOVGA6XCJOZXh0IHJlc3BvbmRlbnRcIixcbiAgICogKiBgUkVQT1JUX1NJTkdMRVZJRVdfT0ZgOlwiezB9IG9mIHsxfVwiLFxuICAgKiAqIGBSRVBPUlRfU0lOR0xFVklFV19NT1JFYDpcInswfSBtb3JlXCIsXG4gICAqICogUkVQT1JUX1NJTkdMRVZJRVdfQUxURVJOQVRJVkVTYDpcIkFuc3dlcnMgYWx0ZXJuYXRpdmVzOlwiXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqICovXG4gIGkxOG4oa2V5KXtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLmNhcHRpb25zLmhhc093blByb3BlcnR5KGtleSk/dGhpcy5fY29uZmlnLmNhcHRpb25zW2tleV06dGhpcy5fY29uZmlnLnNpbmdsZVZpZXdUZXh0cy5oYXNPd25Qcm9wZXJ0eShrZXkpP3RoaXMuX2NvbmZpZy5zaW5nbGVWaWV3VGV4dHNba2V5XTpudWxsXG4gIH1cblxuICBnZXQgZGF0YSgpe3JldHVybiB0aGlzLl9jb25maWcuaGl0bGlzdERhdGF9XG5cbiAgc2V0IGRhdGEoZGF0YSl7XG4gICAgdGhpcy5fY29uZmlnLmhpdGxpc3REYXRhID0gZGF0YTtcbiAgfVxuICBnZXQgZGlzYWJsZU5leHRCdXR0b24oKXtcbiAgICByZXR1cm4gdGhpcy5zb3J0aW5nUGFnaW5nVmFsdWVzLmRpc2FibGVOZXh0QnV0dG9uIHx8IGZhbHNlXG4gIH1cbiAgZ2V0IGRpc2FibGVQcmV2QnV0dG9uKCl7XG4gICAgcmV0dXJuIHRoaXMuc29ydGluZ1BhZ2luZ1ZhbHVlcy5kaXNhYmxlUHJldkJ1dHRvbiB8fCBmYWxzZVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHZpc2libGUgSGl0TGlzdCBjb2x1bW5zIG9mIE9iamVjdCB0eXBlOiBge2tleTpTdHJpbmcsIGxhYmVsOlN0cmluZywgU29ydGFibGU6Qm9vbGVhbiwgaGlkZGVuQnlEZWZhdWx0OkJvb2xlYW4sIGFiYnI6U3RyaW5nLGFsbG93SFRNTDpCb29sZWFuLCBhbHRlcm5hdGl2ZVN0eWxlOlN0cmluZywgY29udGVudFN0eWxlOlN0cmluZywgaGVhZGVyU3R5bGU6U3RyaW5nfWBcbiAgICogQHJldHVybnMge0FycmF5Ljx7a2V5OlN0cmluZywgbGFiZWw6U3RyaW5nLCBTb3J0YWJsZTpCb29sZWFuLCBoaWRkZW5CeURlZmF1bHQ6Qm9vbGVhbiwgYWJicjpTdHJpbmcsYWxsb3dIVE1MOkJvb2xlYW4sIGFsdGVybmF0aXZlU3R5bGU6U3RyaW5nLCBjb250ZW50U3R5bGU6U3RyaW5nLCBoZWFkZXJTdHlsZTpTdHJpbmd9Pn0gUmV0dXJucyBhbiBhcnJheSBvZiBjdXJyZW50bHkgdmlzaWJsZSBIaXRMaXN0IGNvbHVtbnNcbiAgICogKi9cbiAgZ2V0IGNvbHVtbnMoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmNvbHVtbnN9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIEhpdExpc3QgY29sdW1ucyBvZiBPYmplY3QgdHlwZTogYHtrZXk6U3RyaW5nLCBsYWJlbDpTdHJpbmcsIFNvcnRhYmxlOkJvb2xlYW4sIGhpZGRlbkJ5RGVmYXVsdDpCb29sZWFuLCBhYmJyOlN0cmluZyxhbGxvd0hUTUw6Qm9vbGVhbiwgYWx0ZXJuYXRpdmVTdHlsZTpTdHJpbmcsIGNvbnRlbnRTdHlsZTpTdHJpbmcsIGhlYWRlclN0eWxlOlN0cmluZ31gXG4gICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICogKi9cbiAgZ2V0IGFsbENvbHVtbnMoKXtyZXR1cm4gdGhpcy5fY29uZmlnLmFsbENvbHVtbnN9XG5cbiAgZ2V0IGhpdGxpc3RJRCgpe3JldHVybiB0aGlzLl9jb25maWcuY29tcG9uZW50SWR9XG4gIGdldCBwYWdlSUQoKXtyZXR1cm4gdGhpcy5fY29uZmlnLnBhZ2VJZH1cbiAgZ2V0IGxhbmd1YWdlKCl7cmV0dXJuIHRoaXMuX2NvbmZpZy5sYW5ndWFnZX1cbiAgZ2V0IHNlcnZpY2VVUkwoKXtyZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3RoaXMuX2NvbmZpZy5zZXJ2aWNlVXJsfWB9XG4gIGdldCBwYWdlU3RhdGVJRCgpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUGFnZVN0YXRlSWQnKT8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1BhZ2VTdGF0ZUlkJykudmFsdWU6dW5kZWZpbmVkfVxuICBnZXQgc29ydGluZ1BhZ2luZ1ZhbHVlcygpe1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlcyE9bnVsbD90aGlzLl9jb25maWcuc29ydGluZ1BhZ2luZ1ZhbHVlczp7fVxuICB9XG4gIHNldCBzb3J0aW5nUGFnaW5nVmFsdWVzKHZhbCl7XG4gICAgdGhpcy5fY29uZmlnLnNvcnRpbmdQYWdpbmdWYWx1ZXMgPSB2YWw7XG4gIH1cblxuICBzdGF0aWMgX2ZpeEpzb25EYXRlKGpzb25EYXRlKSB7XG4gICAgaWYgKCEoanNvbkRhdGUgJiYgWSAmJiBZLkxhbmcuaXNGdW5jdGlvbihqc29uRGF0ZS5yZXBsYWNlKSkpIHtyZXR1cm4ganNvbkRhdGU7fVxuICAgIGxldCBjb25zdHIgPSBqc29uRGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeL0RhdGVcXFxcKChbLStdP1xcXFxkKylcXFxcKS8kXCIpLCBcIm5ldyBEYXRlKCQxKVwiKTtcbiAgICBpZiAoY29uc3RyID09IGpzb25EYXRlKSB7cmV0dXJuIGpzb25EYXRlO31cbiAgICByZXR1cm4gZXZhbChjb25zdHIpO1xuICB9XG5cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIGNvbmZpZyBmb3IgYSBIaXRMaXN0IGlmIGl0J3MgaW5pdGlhbGlzZWQgb24gdGhlIHBhZ2VcbiAgICogYGBgXG4gICAqIHtcbiAgICogIGFsbENvbHVtbnM6QXJyYXksXG4gICAqICBjYXB0aW9uczpPYmplY3QsXG4gICAqICBjbGllbnRJZDpTdHJpbmcsXG4gICAqICBjb2x1bW5zOkFycmF5LFxuICAgKiAgY29tcG9uZW50SWQ6U3RyaW5nLFxuICAgKiAgaGFzaGVkUHJvamVjdElkOlN0cmluZyxcbiAgICogIGhpdGxpc3REYXRhOkFycmF5LFxuICAgKiAgbGFuZ3VhZ2U6TnVtYmVyLFxuICAgKiAgbmV4dFRleHQ6U3RyaW5nLFxuICAgKiAgbm9Jbml0aWFsTG9hZDpCb29sZWFuLFxuICAgKiAgcGFnZUFqYXhFbmFibGVkOkJvb2xlYW4sXG4gICAqICBwYWdlSWQ6U3RyaW5nLFxuICAgKiAgcHJldlRleHQ6U3RyaW5nLFxuICAgKiAgcHJldmlldzpCb29sZWFuLFxuICAgKiAgc2VhcmNoSXRlbXM6QXJyYXksXG4gICAqICBzZWFyY2hWYWx1ZXM6QXJyYXksXG4gICAqICBzZXJ2aWNlVXJsOlN0cmluZyxcbiAgICogIHNlcnZpY2VVcmxNZXRhRGF0YTpTdHJpbmcsXG4gICAqICBzaG93U2luZ2xlVmlld09uUm93U2VsZWN0OkJvb2xlYW4sXG4gICAqICBzaW5nbGVWaWV3QXBpVXJsOlN0cmluZyxcbiAgICogIHNpbmdsZVZpZXdGb3Jtc0NodW5rQXBpVXJsOlN0cmluZyxcbiAgICogIHNpbmdsZVZpZXdUZXh0czpPYmplY3QsXG4gICAqICBzb3J0aW5nUGFnaW5nVmFsdWVzOk9iamVjdCxcbiAgICogIHN0eWxlczpPYmplY3QsXG4gICAqICB2ZXJzaW9uOlN0cmluZ1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiAqL1xuICBzdGF0aWMgZ2V0T3JpZ2luYWxDb25maWcoKXtcbiAgICBsZXQgc2NyaXB0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpO1xuICAgIGlmKHNjcmlwdHMpe1xuICAgICAgbGV0IGk9c2NyaXB0cy5sZW5ndGgsXG4gICAgICAgIGNmZyA9IC8oWVxcLlJlcG9ydGFsXFwuSGl0TGlzdCwpXFxzKC4qPylcXCk7L2dpO1xuICAgICAgd2hpbGUoaS0tKXtcbiAgICAgICAgbGV0IHNjcmlwdCA9IHNjcmlwdHNbaV0udGV4dDtcbiAgICAgICAgaWYoc2NyaXB0LmluZGV4T2YoJ1kuUmVwb3J0YWwuSGl0TGlzdCwnKT4tMSl7XG4gICAgICAgICAgbGV0IGV4ZWMgPSBjZmcuZXhlYyhzY3JpcHQpO1xuICAgICAgICAgIHJldHVybiAoZXhlYyE9bnVsbCAmJiBleGVjWzJdKT8gSlNPTi5wYXJzZShleGVjWzJdKTogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hpdGxpc3QgY29uZmlnIGlzIG5vdCBwcmVzZW50IG9uIHRoZSBwYWdlJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdFNldHVwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3ItaGl0bGlzdC1kYXRhc291cmNlL3NyYy9oaXRsaXN0LXNldHVwLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSXZhblAgb24gMDcuMDkuMjAxNi5cclxuICovXHJcblxyXG5pbXBvcnQgSGl0bGlzdERhdGFzb3VyY2UgZnJvbSBcIi4vaGl0bGlzdC1kYXRhc291cmNlXCI7XHJcbmltcG9ydCBSZXBvcnRhbEJhc2UgZnJvbSBcInItcmVwb3J0YWwtYmFzZVwiO1xyXG5cclxud2luZG93LlJlcG9ydGFsID0gd2luZG93LlJlcG9ydGFsIHx8IHt9O1xyXG5SZXBvcnRhbEJhc2UubWl4aW4od2luZG93LlJlcG9ydGFsLHtcclxuICBIaXRsaXN0RGF0YXNvdXJjZVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgSGl0bGlzdERhdGFzb3VyY2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vci1oaXRsaXN0LWRhdGFzb3VyY2Uvc3JjL21haW4uanMiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIFB1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZUdyaWRUaWxlU3R5bGUgZnJvbSAnLi9JbWFnZUdyaWRUaWxlLmNzcyc7XG5pbXBvcnQgSW1nIGZyb20gJ1Byb3BvcnRpb25hbEltYWdlJztcblxuY29uc3QgTUVESUFfVFlQRVMgPSBbJ2ltYWdlJywgJ2F1ZGlvJywgJ3ZpZGVvJ107XG5cbmNsYXNzIEltYWdlR3JpZFRpbGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50e1xuICAvKipcbiAgICogQ3JlYXRlcyBhIHRpbGUgZm9yIGltYWdlIGxpc3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5pbWFnZSAtIGltYWdlIHVybFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMucGxhY2Vob2xkZXIgLSBhIHBsYWNlaG9sZGVyIGltYWdlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlclNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIuIEJ5IGRlZmF1bHQgaXQncyB0aGUgc2FtZSBhcyBmb3IgdGhlIGBzcmNgIGltYWdlLCBidXQgc2V0IHRvIGBpbml0aWFsYCBvciBvdGhlciB2YWxpZCBgYmFja2dyb3VuZC1zaXplYCB2YWx1ZSB0byBvdmVycmlkZS5cbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLm1lZGlhdHlwZSAtIGEgZGVmYXVsdCBtZWRpYSBpY29uIGluc3RlYWQgb2YgdGhlIHBsYWNlaG9sZGVyIGltYWdlOiBvbmUgb2YgYGltYWdlYCxgYXVkaW9gLGB2aWRlb2BcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5pY29uQ29sb3I9XCIjY2NjY2NjXCJdIC0gZGVmYXVsdCBwbGFjZWhvbGRlciBtZWRpYSBpY29uIGNvbG9yXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbcHJvcHMuaWNvblNpemU9NDhdIC0gZGVmYXVsdCBwbGFjZWhvbGRlciBtZWRpYSBpY29uIHNpemVcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwcm9wcy5hc3BlY3Q9XCIxNjo5XCJdIC0gYXNwZWN0IHJhdGlvIG9mIHRoZSBpbWFnZSB0byBiZSBpbiB0aGUgdGlsZVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMudGl0bGUgLSB0aXRsZSBvZiB0aGUgdmlkZW9cbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmRlc2NyaXB0aW9uIC0gZGVzY3JpcHRpb24gb2YgdGhlIHZpZGVvXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMuYWN0aW9uSWNvbiAtIGljb24gdG8gZGlzcGxheSBhcyB0aGUgYWN0aW9uIGljb24uIEl0IGFsc28gaGFzIHRvIGhhdmUgYSBjYWxsYmFjayBhdHRhY2hlZCB0byBpdCB3aGVuIHBhc3NlZC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvcHMub25TZWxlY3QgLSBjYWxsYmFjayB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSBsaW5rIGlzIGNsaWNrZWRcbiAgICogKi9cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFjdGlvbkJ1dHRvbiA9IG51bGw7XG4gICAgY29uc3Qge2FjdGlvbkljb24sb25TZWxlY3QsYXNwZWN0LHRpdGxlLHBsYWNlaG9sZGVyU2l6aW5nLGltYWdlLGRlc2NyaXB0aW9ufT10aGlzLnByb3BzO1xuICAgIGlmICh0aGlzLnByb3BzLmFjdGlvbkljb24pIHtcbiAgICAgIGFjdGlvbkJ1dHRvbiA9IDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tZWRpdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWFjdGlvbi1pY29uXCI+e2FjdGlvbkljb259PC9kaXY+XG4gICAgICA8L2Rpdj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1jb3ZlclwiIG9uQ2xpY2s9e29uU2VsZWN0fT5cbiAgICAgICAgICA8SW1nXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgYXNwZWN0PXthc3BlY3R9XG4gICAgICAgICAgICBzaXppbmc9XCJjb3ZlclwiXG4gICAgICAgICAgICBwcmVsb2FkPXt0cnVlfVxuICAgICAgICAgICAgZmFkZT17dHJ1ZX1cbiAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5fY29tcHV0ZVRpbGVUeXBlKCl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlclNpemluZz17cGxhY2Vob2xkZXJTaXppbmd9XG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFRpbGUtLW1ldGFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZS0tdGl0bGUgZWxsaXBzaXNcIiBvbkNsaWNrPXtvblNlbGVjdH0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRUaWxlLS1kZXNjcmlwdGlvbiBlbGxpcHNpc1wiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7YWN0aW9uQnV0dG9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9jb21wdXRlVGlsZVR5cGUoKSB7XG4gICAgY29uc3Qge3BsYWNlaG9sZGVyLG1lZGlhdHlwZSxpY29uU2l6ZSxpY29uQ29sb3J9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXBsYWNlaG9sZGVyICYmIG1lZGlhdHlwZSkge1xuICAgICAgaWYgKE1FRElBX1RZUEVTLmluZGV4T2YobWVkaWF0eXBlKSA9PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVjb2duaXplZCB0eXBlIFwiJHttZWRpYXR5cGV9XCIgaXMgc3BlY2lmaWVkYClcbiAgICAgIH1cbiAgICAgIGxldCBpY29uID0gSW1hZ2VHcmlkVGlsZS5pY29uU2VydmVyKG1lZGlhdHlwZSwgaWNvblNpemUsIGljb25Db2xvcik7XG4gICAgICByZXR1cm4gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZXNjYXBlKGljb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXJcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpY29uIHdpdGggYSBjb3JyZWN0IGZpbGwgY29sb3JcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBpY29uIG5hbWUgKG9uZSBvZiBgaW1hZ2VgLCBgdmlkZW9gLCBgYXVkaW9gKVxuICAgKiBAcGFyYW0ge051bWJlcn0gW3NpemU9MjRdIC0gaWNvbiBzaXplIGluIHBpeGVsc1xuICAgKiBAcGFyYW0ge1N0cmluZ30gW2ZpbGw9XCIjY2NjY2NjXCJdIC0gdmFsaWQgQ1NTIGNvbG9yIGRlY2xhcmF0aW9uXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqICovXG4gIHN0YXRpYyBpY29uU2VydmVyKG5hbWUsIHNpemUgPSA0OCwgZmlsbCA9IFwiI2NjY2NjY1wiKSB7XG4gICAgY29uc3QgaWNvbnMgPSB7XG4gICAgICBpbWFnZTogYDxwYXRoIGQ9XCJNMjEgMTlWNWMwLTEuMS0uOS0yLTItMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yek04LjUgMTMuNWwyLjUgMy4wMUwxNC41IDEybDQuNSA2SDVsMy41LTQuNXpcIi8+YCxcbiAgICAgIGF1ZGlvOiBgPHBhdGggZD1cIk0xMiAzdjEwLjU1Yy0uNTktLjM0LTEuMjctLjU1LTItLjU1LTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNFY3aDRWM2gtNnpcIi8+YCxcbiAgICAgIHZpZGVvOiBgPHBhdGggZD1cIk0xOCA0bDIgNGgtM2wtMi00aC0ybDIgNGgtM2wtMi00SDhsMiA0SDdMNSA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjRoLTR6XCIvPmBcbiAgICB9O1xuICAgIGlmICghaWNvbnNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaWNvbiBcIiR7bmFtZX1cIiBpcyBub3Qgb24gdGhlIGxpc3RgKVxuICAgIH1cblxuICAgIHJldHVybiBgPHN2ZyBmaWxsPVwiJHtmaWxsfVwiIGhlaWdodD1cIiR7c2l6ZX1cIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIke3NpemV9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiR7aWNvbnNbbmFtZV19PC9zdmc+YFxuICB9XG59XG5cbkltYWdlR3JpZFRpbGUucHJvcFR5cGVzID0ge1xuICBpbWFnZSAgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXIgICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyU2l6aW5nOiBQcm9wVHlwZXMub25lT2YoWydjb250YWluJywgJ2NvdmVyJywgJ2luaXRpYWwnXSksXG4gIG1lZGlhdHlwZSAgICAgICAgOiBQcm9wVHlwZXMub25lT2YoTUVESUFfVFlQRVMpLFxuICBpY29uQ29sb3IgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvblNpemUgICAgICAgICA6IFByb3BUeXBlcy5udW1iZXIsXG4gIGFzcGVjdCAgICAgICAgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZSAgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVzY3JpcHRpb24gICAgICA6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGlvbkljb24gICAgICAgOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3QgICAgICAgICA6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5JbWFnZUdyaWRUaWxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgaWNvbkNvbG9yOiBcIiNjY2NjY2NcIixcbiAgaWNvblNpemUgOiA0OCxcbiAgYXNwZWN0ICAgOiBcIjE2OjlcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JpZFRpbGVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbWFnZUdyaWRUaWxlL0ltYWdlR3JpZFRpbGUuanMiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXMsIFB1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZUdyaWRUaWxlIGZyb20gJy4uL0ltYWdlR3JpZFRpbGUvSW1hZ2VHcmlkVGlsZSc7XG5cblxuLyoqXG4gKiBgSW1hZ2VHcmlkYCBpcyBhIHN0YXRlbGVzcyBSZWFjdCBjb21wb25lbnQgdGhhdCBhbGxvd3MgdG8gY29tcHV0ZSBhbiBhcnJheSBvZiBJbWFnZUdyaWRUaWxlcyBmcm9tIGBpdGVtc2AgcGFzc2VkIGluIHByb3BzXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzLml0ZW1zIC0gYW4gYXJyYXkgb2YgaXRlbXMgYHtpZDpOdW1iZXJ8U3RyaW5nLCBpbWFnZTpTdHJpbmcsIG1lZGlhdHlwZTo/U3RyaW5nLCBwbGFjZWhvbGRlcjo/U3RyaW5nLCB0aXRsZTpTdHJpbmcsZGVzY3JpcHRpb246U3RyaW5nfWBcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wcy5hc3BlY3QgLSBhc3BlY3QgcmF0aW8gZm9yIHRoZSBJbWFnZUdyaWRUaWxlIGltYWdlXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gcHJvcHMuYWN0aW9uSWNvbiAtIGFjdGlvbiBpY29uIEpTWCB3aXRoIGEgYm91bmQgaGFuZGxlclxuICogQHBhcmFtIHs/U3RyaW5nfSBwcm9wcy5wbGFjZWhvbGRlclNpemluZyAtIFNldHMgYSBzaXppbmcgb3B0aW9uIGZvciB0aGUgcGxhY2Vob2xkZXIuIEJ5IGRlZmF1bHQgaXQncyB0aGUgc2FtZSBhcyBmb3IgdGhlIGBzcmNgIGltYWdlLCBidXQgc2V0IHRvIGBpbml0aWFsYCBvciBvdGhlciB2YWxpZCBgYmFja2dyb3VuZC1zaXplYCB2YWx1ZSB0byBvdmVycmlkZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLm9uU2VsZWN0IC0gZnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCB3aGVuIGFuIGl0ZW0gaXMgY2xpY2tlZCBvblxuICogQHBhcmFtIHtOdW1iZXJ9IHByb3BzLmR1bW15SXRlbXMgLSBmdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIHdoZW4gYW4gaXRlbSBpcyBjbGlja2VkIG9uXG4gKiAqL1xuY2xhc3MgSW1hZ2VHcmlkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cbiAgaXRlbUNsaWNrSGFuZGxlciA9IChpdGVtKSA9PiAoZXZlbnQpID0+IHRoaXMucHJvcHMub25TZWxlY3QoaXRlbSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtpdGVtcywgZHVtbXlJdGVtcywgYXNwZWN0LCBwbGFjZWhvbGRlclNpemluZywgYWN0aW9uSWNvbn0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkltYWdlR3JpZFwiPlxuICAgICAgICB7XG4gICAgICAgICAgQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoID4gMCAmJiBpdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8SW1hZ2VHcmlkVGlsZVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWQudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgYXNwZWN0PXthc3BlY3R9XG4gICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICBtZWRpYXR5cGU9e2l0ZW0ubWVkaWF0eXBlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aXRlbS5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJTaXppbmc9e3BsYWNlaG9sZGVyU2l6aW5nfVxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGFjdGlvbkljb249e2FjdGlvbkljb259XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLml0ZW1DbGlja0hhbmRsZXIoaXRlbSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAge2R1bW15SXRlbXMgJiYgdGhpcy5yZW5kZXJEdW1teUl0ZW1zKGR1bW15SXRlbXMpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyRHVtbXlJdGVtcyhjb3VudCkge1xuICAgIGNvbnN0IGR1bW15SXRlbXMgPSBbXTtcbiAgICB3aGlsZSAoY291bnQtLSkge1xuICAgICAgZHVtbXlJdGVtcy5wdXNoKDxkaXYgY2xhc3NOYW1lPVwiSW1hZ2VHcmlkVGlsZVwiIGtleT17YGR1bW15JHtjb3VudH1gfS8+KVxuICAgIH1cbiAgICByZXR1cm4gZHVtbXlJdGVtc1xuICB9XG59XG5cbkltYWdlR3JpZC5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGFzcGVjdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aW9uSWNvbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIHBsYWNlaG9sZGVyU2l6aW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZHVtbXlJdGVtczogUHJvcFR5cGVzLm51bWJlclxufTtcblxuSW1hZ2VHcmlkLmRlZmF1bHRQcm9wcyA9IHtcbiAgZHVtbXlJdGVtczogMTJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlR3JpZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbWFnZUdyaWQvSW1hZ2VHcmlkLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEl2YW5QIG9uIDExLjAxLjIwMTcuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2VHcmlkIGZyb20gJy4uL0ltYWdlR3JpZC9JbWFnZUdyaWQnO1xuaW1wb3J0IEhpdGxpc3REUyBmcm9tIFwici1oaXRsaXN0LWRhdGFzb3VyY2VcIjtcbmltcG9ydCBTaW5nbGVWaWV3IGZyb20gXCIuLi9TaW5nbGVWaWV3L1NpbmdsZVZpZXdcIjtcbmltcG9ydCB1bmlvbkJ5IGZyb20gJ2xvZGFzaC91bmlvbkJ5JztcblxuY2xhc3MgUmVhY3RWaWRlbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BzLmNvbmZpZyAtIG5hbWUgb2YgdGhlIGNvbmZpZyB0aGF0IG1hcHMgcXVlc3Rpb24gaWRzIGZyb20gZGF0YSB3aXRoIHRoZSBkYXRhIHR5cGVzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMudGh1bWJzUGxhY2Vob2xkZXIgLSBkaXNwbGF5IHRodW1icyBhcyBpbWFnZSBwbGFjZWhvbGRlcnMgaW5zdGVhZCBvZiBtZWRpYSBpY29uc1xuICAgKlxuICAgKiAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLkRTID0gbmV3IEhpdGxpc3REUygpO1xuICAgIHRoaXMucHJvcHMudmVyYm9zZSAmJiBjb25zb2xlLmxvZyh0aGlzLkRTKTtcbiAgICB0aGlzLnNldHVwRGF0YUxpc3RlbmVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGl0ZW1zOiBudWxsLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgc2luZ2xlVmlldzoge1xuICAgICAgICBsaW5rOiAnJ1xuICAgICAgfSxcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiBmYWxzZSxcbiAgICAgIGRpc2FibGVTaW5nbGVWaWV3UHJldjogZmFsc2UsXG4gICAgICBkaXNhYmxlU2luZ2xlVmlld05leHQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2l0ZW1zLCBzaW5nbGVWaWV3VmlzaWJsZSwgc2luZ2xlVmlldywgZXJyb3IsIGRpc2FibGVTaW5nbGVWaWV3UHJldiwgZGlzYWJsZVNpbmdsZVZpZXdOZXh0fSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHJlbmRlciA9IG51bGw7XG4gICAgaWYgKCFlcnJvciAmJiBBcnJheS5pc0FycmF5KGl0ZW1zKSAmJiBpdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgIHJlbmRlciA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BHcmlkQ29udGFpbmVyICR7IXNpbmdsZVZpZXdWaXNpYmxlID8gJ0dyaWRWaWV3JyA6ICcnfWB9PlxuICAgICAgICAgIDxTaW5nbGVWaWV3XG4gICAgICAgICAgICBsaW5rPXtzaW5nbGVWaWV3Lmxpbmt9XG4gICAgICAgICAgICB2aXNpYmxlPXtzaW5nbGVWaWV3VmlzaWJsZX1cbiAgICAgICAgICAgIGluaXRpYWxMb2FkPXt0cnVlfVxuICAgICAgICAgICAgcmV0dXJuVG9HcmlkQWN0aW9uPXt0aGlzLnJldHVyblRvR3JpZH1cbiAgICAgICAgICAgIGxvYWRQcmV2aW91c0l0ZW09e3RoaXMubG9hZFByZXZpb3VzSXRlbX1cbiAgICAgICAgICAgIGxvYWROZXh0SXRlbT17dGhpcy5sb2FkTmV4dEl0ZW19XG4gICAgICAgICAgICBoZWFkZXJUZXh0PXtgRWRpdCB2aWRlbyBcIiR7c2luZ2xlVmlldy50aXRsZX1cImB9XG4gICAgICAgICAgICBkaXNhYmxlU2luZ2xlVmlld1ByZXY9e2Rpc2FibGVTaW5nbGVWaWV3UHJldn1cbiAgICAgICAgICAgIGRpc2FibGVTaW5nbGVWaWV3TmV4dD17ZGlzYWJsZVNpbmdsZVZpZXdOZXh0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbWFnZUdyaWRDb250YWluZXJcIiBzdHlsZT17e2Rpc3BsYXk6ICFzaW5nbGVWaWV3VmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSd9fT5cbiAgICAgICAgICAgIDxJbWFnZUdyaWRcbiAgICAgICAgICAgICAgYXNwZWN0PVwiMTY6OVwiXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0fVxuICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyTmF2aWdhdGlvbigpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuRFMpIHtcbiAgICAgICAgcmVuZGVyID0gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR3JpZENvbnRhaW5lciBJbWFnZUdyaWRcIj57dGhpcy5kYXRhTG9hZGluZ01lc3NhZ2UoKX08L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIaXRsaXN0RGF0YXNvdXJjZSBpcyBub3QgYXZhaWxhYmxlJylcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlbmRlclxuICB9XG5cbiAgZGF0YUxvYWRpbmdNZXNzYWdlKCkge1xuICAgIGxldCBtZXNzYWdlO1xuICAgIGNvbnN0IHtpdGVtcywgZXJyb3J9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIG1lc3NhZ2UgPSAnZXJyb3JMb2FkaW5nJ1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpdGVtcykgJiYgaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBtZXNzYWdlID0gJ1JFUE9SVF9TSU5HTEVWSUVXX05PVEhJTkdGT1VORCdcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZSA9ICdsb2FkaW5nRGF0YSdcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuRFMuaTE4bihtZXNzYWdlKVxuICB9XG5cbiAgcmVuZGVyTmF2aWdhdGlvbigpIHtcbiAgICBpZiAodGhpcy5jb25maWcpIHtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uO1xuICAgICAgaWYgKHBhZ2luYXRpb24gPT09ICdjb250aW51b3VzJykge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250aW51b3VzTmF2aWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnaW5nTmF2aWdhdGlvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHBhZ2luZ05hdmlnYXRpb24oKSB7XG4gICAgbGV0IHBhZ2VJbmZvID0gJyc7XG4gICAgaWYgKHRoaXMuRFMucGFnZUluZm8gJiYgdGhpcy5EUy5zb3J0aW5nUGFnaW5nVmFsdWVzICYmIHRoaXMuRFMuc29ydGluZ1BhZ2luZ1ZhbHVlcy50b3RhbEhpdHMpIHtcbiAgICAgIHBhZ2VJbmZvID0gYCR7dGhpcy5EUy5wYWdlSW5mb30gb2YgJHt0aGlzLkRTLnNvcnRpbmdQYWdpbmdWYWx1ZXMudG90YWxIaXRzfWBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uUm93XCI+XG4gICAgICAgIDxzcGFuIHJlbD1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsQnV0dG9uIGFjY2VudFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9hZFByZXZpb3VzUGFnZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuRFMuZGlzYWJsZVByZXZCdXR0b259XG4gICAgICAgID5cbiAgICAgICAgICAge3RoaXMuRFMuaTE4bignUkVQT1JUX1NJTkdMRVZJRVdfUFJFVklPVVMnKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBhY2NlbnRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvYWROZXh0UGFnZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuRFMuZGlzYWJsZU5leHRCdXR0b259XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5EUy5pMThuKCdSRVBPUlRfU0lOR0xFVklFV19ORVhUJyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e3BhZ2VJbmZvfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbnRpbnVvdXNOYXZpZ2F0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblJvd1wiIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgICA8c3BhbiByZWw9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbEJ1dHRvbiBmbGF0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2FkTW9yZX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuRFMuZGlzYWJsZU5leHRCdXR0b259XG4gICAgICAgICAgICAgID5Mb2FkIG1vcmU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuXG4gIC8qKlxuICAgKiBMYXVuY2hlcyBsaXN0ZW5lciBmb3IgYFkuR2xvYmFsLnJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlYCBldmVudCB3aXRoaW4gWVVJIHdoaWNoIGlzIHRyaWdnZXJlZCBldmVyeSB0aW1lIHRoZSBmaWx0ZXIgcGFuZWwgdXBkYXRlcyBvciBvbiBpbml0aWFsIGxvYWRcbiAgICogKi9cbiAgc2V0dXBEYXRhTGlzdGVuZXIoKSB7XG4gICAgaWYgKFkgJiYgWS5HbG9iYWwpIHtcbiAgICAgIFkuR2xvYmFsLm9uKFwicmVwb3J0Y29udHJvbGxlcjp2aWV3TW9kZURhdGFVcGRhdGVcIiwgZmlsdGVySW5mbyA9PiB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZUNvbmZpZyh0aGlzLnByb3BzLmNvbmZpZyk7XG4gICAgICAgIGlmICh0aGlzLkRTICYmIHRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgdGhpcy5EUy5tb2RpZmllciA9IGZpbHRlckluZm87IC8vIGZpbHRlciBpbmZvcm1hdGlvbiBhcyBhIG1vZGlmaWVyIGZvciBkYXRhIGZldGNoXG4gICAgICAgICAgdGhpcy5EUy5pbml0aWFsRGF0YUxvYWQoKS50aGVuKHJlc3BvbnNlID0+IHRoaXMucHJvY2Vzc0RhdGEocmVzcG9uc2UpKS5jYXRjaCh0aGlzLmhhbmRsZURhdGFMb2FkaW5nRXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWVVJIGlzIG5vdCBkZWZpbmVkIG9yIGFjY2Vzc2libGUsIGNhbm5vdCBzZXQgdXAgYSBcInJlcG9ydGNvbnRyb2xsZXI6dmlld01vZGVEYXRhVXBkYXRlXCIgbGlzdGVuZXInKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVEYXRhTG9hZGluZ0Vycm9yID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXJyb3I6IHRydWUsXG4gICAgICBpdGVtczogW11cbiAgICB9KVxuICB9O1xuXG4gIHJldHVyblRvR3JpZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNpbmdsZVZpZXdWaXNpYmxlOiBmYWxzZSxcbiAgICAgIHNpbmdsZVZpZXc6IHtcbiAgICAgICAgbGluazogJydcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLkRTLmluaXRpYWxEYXRhTG9hZCgpLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5wcm9jZXNzRGF0YShyZXNwb25zZSkpLmNhdGNoKHRoaXMuaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XG4gIH1cblxuICBsb2FkUHJldmlvdXNJdGVtID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlSXRlbXMoJ2JhY2snKVxuICB9XG5cbiAgbG9hZE5leHRJdGVtID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlSXRlbXMoJ2ZvcndhcmQnKVxuICB9XG5cbiAgbmF2aWdhdGVJdGVtcyhkaXJlY3Rpb24pIHtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xuICAgIGxldCBpdGVtc0xlbmd0aCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcHJldkRhdGEgPSB0aGlzLnN0YXRlLnNpbmdsZVZpZXc7XG4gICAgbGV0IHByZXZJbmRleCA9IGl0ZW1zLmluZGV4T2YocHJldkRhdGEpO1xuICAgIGxldCBuZXh0SW5kZXggPSBkaXJlY3Rpb24gPT09ICdmb3J3YXJkJyA/ICsrcHJldkluZGV4IDogLS1wcmV2SW5kZXg7XG5cbiAgICBpZiAobmV4dEluZGV4IDwgMCAmJiAhdGhpcy5EUy5kaXNhYmxlUHJldkJ1dHRvbikge1xuICAgICAgaXRlbXMgPSB0aGlzLmxvYWRQcmV2aW91c1BhZ2UoKTtcbiAgICB9IGVsc2UgaWYgKG5leHRJbmRleCA+IGl0ZW1zTGVuZ3RoICYmICF0aGlzLkRTLmRpc2FibGVOZXh0QnV0dG9uKSB7XG4gICAgICBpdGVtcyA9IHRoaXMubG9hZE5leHRQYWdlKClcbiAgICB9XG5cbiAgICBpZiAoIWl0ZW1zLmhhc093blByb3BlcnR5KCd0aGVuJykpIHtcbiAgICAgIGl0ZW1zID0gUHJvbWlzZS5yZXNvbHZlKGl0ZW1zKTtcbiAgICB9XG4gICAgY29uc3QgW2Rpc2FibGVTaW5nbGVWaWV3UHJldixkaXNhYmxlU2luZ2xlVmlld05leHRdPSB0aGlzLmNoZWNrU2luZ2xlVmlld05hdlN0YXRlKG5leHRJbmRleCk7XG5cbiAgICBpdGVtcy50aGVuKCgpID0+IHtcbiAgICAgIGxldCBzaW5nbGVWaWV3O1xuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGU9PntcbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBwcmV2U3RhdGUuaXRlbXM7XG4gICAgICAgIGlmIChuZXh0SW5kZXggPCAwICYmICFkaXNhYmxlU2luZ2xlVmlld1ByZXYpIHtcbiAgICAgICAgICBzaW5nbGVWaWV3ID0gbmV3SXRlbXNbbmV3SXRlbXMubGVuZ3RoIC0gMV1cbiAgICAgICAgfSBlbHNlIGlmIChuZXh0SW5kZXggPiBpdGVtc0xlbmd0aCAmJiAhZGlzYWJsZVNpbmdsZVZpZXdOZXh0KSB7XG4gICAgICAgICAgc2luZ2xlVmlldyA9IG5ld0l0ZW1zWzBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2luZ2xlVmlldyA9IG5ld0l0ZW1zW25leHRJbmRleF1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRpc2FibGVTaW5nbGVWaWV3TmV4dCxcbiAgICAgICAgICBkaXNhYmxlU2luZ2xlVmlld1ByZXYsXG4gICAgICAgICAgc2luZ2xlVmlldzogc2luZ2xlVmlldyxcbiAgICAgICAgICBzaW5nbGVWaWV3VmlzaWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZVNpbmdsZVZpZXdOYXZTdGF0ZShpdGVtKSB7XG4gIH1cblxuICBsb2FkTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuRFMubmV4dFBhZ2UoKS50aGVuKHJlc3BvbnNlID0+IHRoaXMucHJvY2Vzc0RhdGEocmVzcG9uc2UpKS5jYXRjaCh0aGlzLmhhbmRsZURhdGFMb2FkaW5nRXJyb3IpO1xuICB9O1xuICBsb2FkUHJldmlvdXNQYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLkRTLnByZXZpb3VzUGFnZSgpLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5wcm9jZXNzRGF0YShyZXNwb25zZSkpLmNhdGNoKHRoaXMuaGFuZGxlRGF0YUxvYWRpbmdFcnJvcik7XG4gIH07XG4gIGxvYWRNb3JlID0gKCkgPT4ge1xuICAgIHRoaXMuRFMubmV4dFBhZ2UoKS50aGVuKHJlc3BvbnNlID0+IHRoaXMucHJvY2Vzc0RhdGEocmVzcG9uc2UsICdhcHBlbmQnKSkuY2F0Y2godGhpcy5oYW5kbGVEYXRhTG9hZGluZ0Vycm9yKTtcbiAgfTtcblxuICBvblNlbGVjdCA9IChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBbZGlzYWJsZVNpbmdsZVZpZXdQcmV2LGRpc2FibGVTaW5nbGVWaWV3TmV4dF09IHRoaXMuY2hlY2tTaW5nbGVWaWV3TmF2U3RhdGUodGhpcy5zdGF0ZS5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNhYmxlU2luZ2xlVmlld1ByZXYsXG4gICAgICBkaXNhYmxlU2luZ2xlVmlld05leHQsXG4gICAgICBzaW5nbGVWaWV3OiBpdGVtLFxuICAgICAgc2luZ2xlVmlld1Zpc2libGU6IHRydWVcbiAgICB9KVxuICB9O1xuXG4gIGNoZWNrU2luZ2xlVmlld05hdlN0YXRlKGN1cnJlbnRJdGVtSW5kZXgpe1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcztcbiAgICBsZXQgZGlzYWJsZVNpbmdsZVZpZXdOZXh0ID0gZmFsc2UsXG4gICAgICBkaXNhYmxlU2luZ2xlVmlld1ByZXYgPSBmYWxzZTtcblxuICAgIGlmIChjdXJyZW50SXRlbUluZGV4IDw9IDAgJiYgdGhpcy5EUy5kaXNhYmxlUHJldkJ1dHRvbikge1xuICAgICAgZGlzYWJsZVNpbmdsZVZpZXdQcmV2ID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRJdGVtSW5kZXggPj0gaXRlbXMubGVuZ3RoLTEgJiYgdGhpcy5EUy5kaXNhYmxlTmV4dEJ1dHRvbikge1xuICAgICAgZGlzYWJsZVNpbmdsZVZpZXdOZXh0ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIGRpc2FibGVTaW5nbGVWaWV3UHJldixcbiAgICAgIGRpc2FibGVTaW5nbGVWaWV3TmV4dFxuICAgIF1cbiAgfVxuXG5cbiAgaW5pdGlhbGlzZUNvbmZpZyhjb25maWdOYW1lKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgaWYgKCF3aW5kb3dbY29uZmlnTmFtZV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25maWcgaXMgbm90IHBhc3NlZCBmcm9tIGJhY2tlZCcpXG4gICAgICB9XG4gICAgICB0aGlzLmNvbmZpZyA9IHdpbmRvd1tjb25maWdOYW1lXTtcbiAgICB9XG4gIH1cblxuICBwcm9jZXNzRGF0YShkYXRhLCBtb2RlID0gJ3JlcGxhY2UnKSB7XG4gICAgbGV0IGMgPSB0aGlzLmNvbmZpZyxcbiAgICAgIGNvbmZpZyA9IHt9O1xuICAgIFsnaWQnLCAndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnaW1hZ2UnLCAnYXVkaW8nLCAndmlkZW8nLCAndGFncyddLmZvckVhY2goaXRlbSA9PiBjb25maWdbaXRlbV0gPSBbdGhpcy5jb25maWdbaXRlbV1dKTtcbiAgICBjb25maWcgPSB7XG4gICAgICBpZDogYy5pZCxcbiAgICAgIHRpdGxlOiBjLnRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGMuZGVzY3JpcHRpb24sXG4gICAgICBpbWFnZTogYy5pbWFnZSxcbiAgICAgIGF1ZGlvOiBjLmF1ZGlvLFxuICAgICAgdmlkZW86IGMudmlkZW8sXG4gICAgICB0YWdzOiBjLnRhZ3MsXG4gICAgfTtcbiAgICBsZXQgbmV3RGF0YSA9IGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHBhcnNlZERhdGEgPSB7fTtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcpIHtcbiAgICAgICAgcGFyc2VkRGF0YVtrZXldID0gdGhpcy5wcmVwYXJlRGF0YShpdGVtW2NvbmZpZ1trZXldXSwga2V5KTtcbiAgICAgICAgLy8gaWYgaW1hZ2UgLSB3ZSBtaWdodCB3YW50IHRvIHVzZSBhIHBsYWNlaG9sZGVyIGFzIHRoZSB0aHVtYiwgYW5kIGxvYWQgdGhlIGZ1bGwgaW1hZ2UgaW4gYmFja2dyb3VuZFxuICAgICAgICBpZiAoa2V5ID09ICdpbWFnZScpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy50aHVtYnNQbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgcGFyc2VkRGF0YVsncGxhY2Vob2xkZXInXSA9IHBhcnNlZERhdGEuaW1hZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcnNlZERhdGEuaW1hZ2UgPSBwYXJzZWREYXRhLmltYWdlLnJlcGxhY2UoL190aHVtYi9naSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBtZWRpYXR5cGUgb3IgYSBwbGFjZWhvbGRlciBpY29uXG4gICAgICAgIGlmIChbJ3ZpZGVvJywgJ2F1ZGlvJywgJ2ltYWdlJ10uaW5kZXhPZihrZXkpID4gLTEgJiYgY29uZmlnW2tleV0pIHtcbiAgICAgICAgICBwYXJzZWREYXRhLm1lZGlhdHlwZSA9IGtleVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBnZXQgaWQgZm9yIGtleXNcbiAgICAgIHBhcnNlZERhdGEuaWQgPSBpdGVtLnJlc3BvbnNlaWQgPyBpdGVtLnJlc3BvbnNlaWQgOiBpbmRleDtcbiAgICAgIC8vIGNhbGN1bGF0ZSBsaW5rIHBhc3NlZCBhcyBgc2xpbmtgIHByb3BlcnR5IGluIGRhdGFcbiAgICAgIGlmIChpdGVtLnNsaW5rKSB7XG4gICAgICAgIGxldCBsID0gaXRlbS5zbGluaztcbiAgICAgICAgcGFyc2VkRGF0YS5saW5rID0gKC9ocmVmPScoLis/KScvZ2kpLmV4ZWMobClbMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyc2VkRGF0YTtcbiAgICB9KTtcblxuICAgIC8vdXBkYXRlIHN0YXRlIHdpdGggdGhlIG5ldyBzZXQgb2YgZGF0YSBvciBhIG1lcmdlZCBkYXRhXG4gICAgaWYgKG1vZGUgPT09ICdyZXBsYWNlJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGl0ZW1zOiBuZXdEYXRhLFxuICAgICAgICBlcnJvcjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gJ2FwcGVuZCcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgIGl0ZW1zOiBbLi4ucHJldlN0YXRlLml0ZW1zLCAuLi5uZXdEYXRhXSxcbiAgICAgICAgZXJyb3I6IGZhbHNlXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSAnbWVyZ2UnKSB7XG4gICAgICBjb25zb2xlLmxvZyhtb2RlKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgIGl0ZW1zOiB1bmlvbkJ5KG5ld0RhdGEsIHByZXZTdGF0ZS5pdGVtcywgJ2lkJyksXG4gICAgICAgIGVycm9yOiBmYWxzZVxuICAgICAgfSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCfRhdGA0LXQvSDQt9C90LDQtdGCINGH0YLQvicpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIG1hc3NhZ2UgZGF0YSB0byBmaXQgdGhlIHR5cGUgd2UgZXhwZWN0IHRvIHJlY2VpdmUgaW4gcmVhY3Qgdmlld1xuICAgKiAqL1xuICBwcmVwYXJlRGF0YShkYXRhLCB0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgIGxldCByZXN1bHQgPSAoL3NyYz0nKC4rPyknL2dpKS5leGVjKGRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdFsxXSA/IHJlc3VsdFsxXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXNjcmlwdGlvbic6XG4gICAgICBjYXNlICd0aXRsZSc6XG4gICAgICAgIHJldHVybiAhKGRhdGEuaW5kZXhPZignLScpID4gLTEgJiYgZGF0YS50cmltKCkubGVuZ3RoID09IDEpID8gZGF0YS50cmltKCkgOiB1bmRlZmluZWQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGFncyc6XG4gICAgICAgIHJldHVybiBkYXRhICYmIChkYXRhLmluZGV4T2YoJywnKSA+IC0xID8gZGF0YS5zcGxpdCgnLCcpIDogZGF0YS5pbmRleE9mKCctJykgPiAtMSAmJiBkYXRhLnRyaW0oKS5sZW5ndGggPT0gMSA/IHVuZGVmaW5lZCA6IGRhdGEudHJpbSgpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cblxuICBzdGF0aWMgYWN0aW9uSWNvbigpIHtcbiAgICByZXR1cm4gPHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44My0xLjgzelwiLz5cbiAgICA8L3N2Zz5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdFZpZGVvO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlYWN0VmlkZW8vUmVhY3RWaWRlby5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNREljb24gZnJvbSAnTURJY29uJztcbmltcG9ydCB7aWNfYXJyb3dfYmFjayxpY19hcnJvd19mb3J3YXJkLGljX3ZpZXdfbW9kdWxlfSBmcm9tICcuLi9pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIHNpbmdsZSB2aWV3IHdoaWNoIGlzIGEgbmF2aWdhdGlvbiBoZWFkZXIgZm9sbG93ZWQgYnkgYW4gcmVuZGVySWZyYW1lIHRoYXQgbG9hZHMgZXh0ZXJuYWwgY29udGVudCBmcm9tIGEgbGlua1xuICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICogQHBhcmFtIHtCb29sZWFufSBbcHJvcHMudmlzaWJsZT1mYWxzZV0gLSB3aGV0aGVyIHRoZSByZW5kZXJJZnJhbWUgaXMgdmlzaWJsZSBvbiBhIHBhZ2VcbiAgICogQHBhcmFtIHtCb29sZWFufSBwcm9wcy5pbml0aWFsTG9hZCAtIHdoZXRoZXIgaXQncyB0aGUgZmlyc3QgdGltZSB0aGUgcmVuZGVySWZyYW1lIGxvYWRzIChuZWNlc3NhcnkgZm9yIHRoZSBzdXJ2ZXksIGJlY2F1c2UgYW4gaW5pdGlhbCBsb2FkIGlzIHRoZSBmaXJzdCB0aW1lIHRoZSBzdXJ2ZXkgbG9hZHMsIGFuZCBzZWNvbmQgbG9hZCBpcyB3aGVuIHRoZSBzdXJ2ZXkgaXMgc3VibWl0dGVkKVxuICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcHMubGluayAtIHRoZSBsaW5rIHRvIGEgcGFnZSB0byBsb2FkIGluIGFuIHJlbmRlcklmcmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3Byb3BzLmhlYWRlclRleHRdIC0gdGhlIHRleHQgdG8gYmUgZGlzcGxheWVkIG5leHQgdG8gdGhlIGJhY2sgYnV0dG9uIGluIHRoZSBuYXYgaGVhZGVyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLnJldHVyblRvR3JpZCAtIHRoZSBjYWxsYmFjayBleGVjdXRlZCB3aGVuIHRoZSB1c2VyIHdhbnRzIHRvIG5hdmlnYXRlIG9mZiB0aGUgU2luZ2xlVmlldyBwYWdlIChoaXR0aW5nIGJhY2sgb3Igc3VibWl0KVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcm9wcy5jbG9zZU9uU3VibWl0ID0gZmFsc2VdIC0gdGhlIGNhbGxiYWNrIGV4ZWN1dGVkIHdoZW4gdGhlIHVzZXIgd2FudHMgdG8gbmF2aWdhdGUgb2ZmIHRoZSBTaW5nbGVWaWV3IHBhZ2UgKGhpdHRpbmcgYmFjayBvciBzdWJtaXQpXG4gICAqICovXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGxldCB7dmlzaWJsZSwgbGluaywgaW5pdGlhbExvYWQ9dHJ1ZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGUsXG4gICAgICBsaW5rLFxuICAgICAgaW5pdGlhbExvYWQsXG4gICAgICBpZnJhbWVWaXNpYmxlOiBmYWxzZSxcbiAgICAgIGlmcmFtZUhlaWdodCA6ICdhdXRvJyxcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHRoaXMucmVjZWl2ZU1lc3NhZ2UsIGZhbHNlKTtcbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAvL3RoaXMubWFwUHJvcHNUb1N0YXRlKG5leHRQcm9wcylcbiAgfVxuXG4gIG1hcFByb3BzVG9TdGF0ZShwcm9wcykge1xuICAgIGxldCB7dmlzaWJsZSwgbGluaywgaW5pdGlhbExvYWR9ID0gcHJvcHM7XG4gICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSAhPSB2aXNpYmxlIHx8IHRoaXMucHJvcHMubGluayAhPSBsaW5rIHx8IHRoaXMucHJvcHMuaW5pdGlhbExvYWQgIT0gaW5pdGlhbExvYWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xpbmssIHZpc2libGUsIGluaXRpYWxMb2FkfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tYXBQcm9wc1RvU3RhdGUodGhpcy5wcm9wcyk7XG4gIH1cblxuICBzZXR1cExpc3RlbmVyKGUpIHtcbiAgICB0aGlzLmhhbmRzaGFrZSh0aGlzLmlmcmFtZUVsLCB0aGlzLmdldERvbWFpbih0aGlzLnN0YXRlLmxpbmspKVxuICB9XG5cbiAgb25Mb2FkPShlKT0+e1xuICAgIGlmKHRoaXMuc3RhdGUubGluay5sZW5ndGg+MCl7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pbml0aWFsTG9hZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2aXNpYmxlICAgICAgOiB0cnVlLFxuICAgICAgICAgIGlmcmFtZVZpc2libGU6IHRydWUsXG4gICAgICAgICAgaW5pdGlhbExvYWQgIDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvL3RoaXMuaGFuZHNoYWtlKGUudGFyZ2V0LCB0aGlzLmdldERvbWFpbih0aGlzLnN0YXRlLmxpbmspKTtcbiAgICB9XG4gIH1cblxuICBnZXREb21haW4obGluaykge1xuICAgIHJldHVybiBsaW5rICYmIGxpbmsubGVuZ3RoID4gMCA/ICgvKC4rP1xcL1xcLy4rPylcXC8vZ2kpLmV4ZWMobGluaylbMV0gOiBudWxsXG4gIH1cblxuICBoYW5kc2hha2UoZWwsIHRhcmdldE9yaWdpbikge1xuICAgIGlmICh0YXJnZXRPcmlnaW4gIT0gbnVsbCkge1xuICAgICAgbGV0IGlmcmFtZSAgICAgICAgPSBlbC5jb250ZW50V2luZG93O1xuICAgICAgdGhpcy50YXJnZXRPcmlnaW4gPSB0YXJnZXRPcmlnaW47XG4gICAgICBpZnJhbWUucG9zdE1lc3NhZ2UoJ2Nvbm5lY3QnLCB0YXJnZXRPcmlnaW4pO1xuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVNZXNzYWdlPShldmVudCk9PntcbiAgICBsZXQgb3JpZ2luID0gZXZlbnQub3JpZ2luIHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQub3JpZ2luOyAvLyBGb3IgQ2hyb21lLCB0aGUgb3JpZ2luIHByb3BlcnR5IGlzIGluIHRoZSBldmVudC5vcmlnaW5hbEV2ZW50IG9iamVjdC5cbiAgICBpZiAob3JpZ2luICE9PSB0aGlzLnRhcmdldE9yaWdpbilyZXR1cm47XG4gICAgaWYgKGV2ZW50LmRhdGEgJiYgZXZlbnQuZGF0YS5hY3Rpb24gJiYgdGhpc1tldmVudC5kYXRhLmFjdGlvbl0pIHtcbiAgICAgIHRoaXNbZXZlbnQuZGF0YS5hY3Rpb25dKGV2ZW50LmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2FjdGlvbiBub3QgZm91bmQgZm9yICcsIGV2ZW50LmRhdGEsIGV2ZW50LmRhdGEuYWN0aW9uLCB0aGlzW2V2ZW50LmRhdGEuYWN0aW9uXSlcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7bGluayx2aXNpYmxlLCBsb2FkUHJldmlvdXNJdGVtLHJldHVyblRvR3JpZEFjdGlvbixsb2FkTmV4dEl0ZW0sZGlzYWJsZVNpbmdsZVZpZXdQcmV2LGRpc2FibGVTaW5nbGVWaWV3TmV4dH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbmdsZVZpZXdcIiBzdHlsZT17e2Rpc3BsYXk6IHZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0taGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiU2luZ2xlVmlldy0tbmF2LWJ1dHRvblwiIGRpc2FibGVkPXtkaXNhYmxlU2luZ2xlVmlld1ByZXZ9IHRpdGxlPVwiUHJldmlvdXMgaXRlbVwiIG9uQ2xpY2s9e2xvYWRQcmV2aW91c0l0ZW19PlxuICAgICAgICAgICAgPE1ESWNvbiBpY29uPXtpY19hcnJvd19iYWNrfS8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlNpbmdsZVZpZXctLW5hdi1idXR0b25cIiB0aXRsZT1cIlJldHVybiB0byB0aGUgbGlzdFwiIG9uQ2xpY2s9e3JldHVyblRvR3JpZEFjdGlvbn0+XG4gICAgICAgICAgICA8TURJY29uIGljb249e2ljX3ZpZXdfbW9kdWxlfS8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlNpbmdsZVZpZXctLW5hdi1idXR0b25cIiBkaXNhYmxlZD17ZGlzYWJsZVNpbmdsZVZpZXdOZXh0fSB0aXRsZT1cIk5leHQgSXRlbVwiIG9uQ2xpY2s9e2xvYWROZXh0SXRlbX0+XG4gICAgICAgICAgICA8TURJY29uIGljb249e2ljX2Fycm93X2ZvcndhcmR9Lz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aWZyYW1lIHJlZj17aWZyYW1lID0+IHRoaXMuaWZyYW1lRWwgPSBpZnJhbWV9IHNyYz17bGlua30vPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgYW4gcmVuZGVySWZyYW1lIGVsZW1lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGxpbmsgLSB1cmwgb2YgdGhlIHJlbmRlcklmcmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmlzaWJsZSAtIHZpc2liaWxpdHkgb2YgdGhlIHJlbmRlcklmcmFtZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gaGVpZ2h0IC0gaGVpZ2h0IG9mIHRoZSByZW5kZXJJZnJhbWVcbiAgICogKi9cbiAgcmVuZGVySWZyYW1lKGxpbmspIHtcbiAgICByZXR1cm4gPGlmcmFtZVxuICAgICAgcmVmPXtpZnJhbWUgPT4ge1xuICAgICAgICB0aGlzLmlmcmFtZUVsID0gaWZyYW1lXG4gICAgICB9fVxuICAgICAgc3JjPXtsaW5rfVxuLz47XG4gIH1cbn1cblxuU2luZ2xlVmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsb3NlT25TdWJtaXQ6IGZhbHNlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpbmdsZVZpZXcvU2luZ2xlVmlldy5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGljX3N0YXIgPSA8cGF0aCBkPVwiTTEyIDE3LjI3TDE4LjE4IDIxbC0xLjY0LTcuMDNMMjIgOS4yNGwtNy4xOS0uNjFMMTIgMiA5LjE5IDguNjMgMiA5LjI0bDUuNDYgNC43M0w1LjgyIDIxelwiLz47XG5leHBvcnQgY29uc3QgaWNfc3Rhcl9ib3JkZXIgPSA8cGF0aCBkPVwiTTIyIDkuMjRsLTcuMTktLjYyTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMSAxMiAxNy4yNyAxOC4xOCAyMWwtMS42My03LjAzTDIyIDkuMjR6TTEyIDE1LjRsLTMuNzYgMi4yNyAxLTQuMjgtMy4zMi0yLjg4IDQuMzgtLjM4TDEyIDYuMWwxLjcxIDQuMDQgNC4zOC4zOC0zLjMyIDIuODggMSA0LjI4TDEyIDE1LjR6XCIvPjtcbmV4cG9ydCBjb25zdCBpY19hcnJvd19iYWNrID0gPHBhdGggZD1cIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwdi0yelwiLz47XG5leHBvcnQgY29uc3QgaWNfYXJyb3dfZm9yd2FyZCA9IDxwYXRoIGQ9XCJNMTIgNGwtMS40MSAxLjQxTDE2LjE3IDExSDR2MmgxMi4xN2wtNS41OCA1LjU5TDEyIDIwbDgtOHpcIi8+O1xuZXhwb3J0IGNvbnN0IGljX3ZpZXdfbW9kdWxlID0gPHBhdGggZD1cIk00IDExaDVWNUg0djZ6bTAgN2g1di02SDR2NnptNiAwaDV2LTZoLTV2NnptNiAwaDV2LTZoLTV2NnptLTYtN2g1VjVoLTV2NnptNi02djZoNVY1aC01elwiLz47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaWNvbnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0ltYWdlR3JpZFRpbGUvSW1hZ2VHcmlkVGlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAyMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIlJlYWN0RE9NXCJcbi8vIG1vZHVsZSBpZCA9IDIxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9