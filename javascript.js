function isUndefined(value) {return typeof value === 'undefined';}



function valueFn(value) {return function() {return value;};}


function isDefined(value) {return typeof value !== 'undefined';}
/**
* @ngdoc function
* @name angular.isObject
* @module ng
* @kind function
*
* @description
* Determines if a reference is an `Object`. Unlike `typeof` in JavaScript, `null`s are not
* considered to be objects. Note that JavaScript arrays are objects.
*
* @param {*} value Reference to check.
* @returns {boolean} True if `value` is an `Object` but not `null`.
*/
function isObject(value) {
// http://jsperf.com/isobject4
return value !== null && typeof value === 'object';
}
/**
* @ngdoc function
* @name angular.isString
* @module ng
* @kind function
*
* @description
* Determines if a reference is a `String`.
*
* @param {*} value Reference to check.
* @returns {boolean} True if `value` is a `String`.
*/
function isString(value) {return typeof value === 'string';}
/**
* @ngdoc function
* @name angular.isNumber
* @module ng
* @kind function
*
* @description
* Determines if a reference is a `Number`.
*
* @param {*} value Reference to check.
* @returns {boolean} True if `value` is a `Number`.
*/
function isNumber(value) {return typeof value === 'number';}
/**
* @ngdoc function
* @name angular.isDate
* @module ng
* @kind function
*
* @description
* Determines if a value is a date.
*
* @param {*} value Reference to check.
* @returns {boolean} True if `value` is a `Date`.
*/
function isDate(value) {
return toString.call(value) === '[object Date]';
}


 */
function isWindow(obj) {
return obj && obj.window === obj;
}
function isScope(obj) {
return obj && obj.$evalAsync && obj.$watch;
}
function isFile(obj) {
return toString.call(obj) === '[object File]';
}
function isBlob(obj) {
return toString.call(obj) === '[object Blob]';
}
function isBoolean(value) {
return typeof value === 'boolean';
}
function isPromiseLike(obj) {
return obj && isFunction(obj.then);
}
var trim = function(value) {
return isString(value) ? value.trim() : value;
};



var uppercase = function(string) {return isString(string) ? string.toUpperCase() : string;};


var uppercase = function(string) {return isString(string) ? string.toUpperCase() : string;};
var manualLowercase = function(s) {
/* jshint bitwise: false */
return isString(s)
? s.replace(/[A-Z]/g, function(ch) {return String.fromCharCode(ch.charCodeAt(0) | 32);})
: s;
};
var manualUppercase = function(s) {
/* jshint bitwise: false */
return isString(s)
? s.replace(/[a-z]/g, function(ch) {return String.fromCharCode(ch.charCodeAt(0) & ~32);})
: s;
};
