/*
 * utility v0.3.0
 * http://code.google.com/p/utility-js/
 *
 * Requires ECMAScript 5.1 or above compliant browser
 *
 * Developed by:
 * - xotic750
 *
 * GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
 */

/*jslint sub: true, maxerr: 50, indent: 4, bitwise: true, browser: true */
/*global */

(function () {
    "use strict";

    ///////////////////////////
    //       Variables
    ///////////////////////////

    var Utility,
        utility,
        methods,
        internal = {},
        utilityRef = window.utility,
        $uRef = window.$u,
        defineProperty = Object.defineProperty,
        defineProperties = Object.defineProperties,
        getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
        getOwnPropertyNames = Object.getOwnPropertyNames,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        getPrototypeOf = Object.getPrototypeOf,
        objectKeys = Object.keys,
        isArray = Array.isArray,
        floor = Math.floor,
        max = Math.max,
        ceil = Math.ceil,
        abs = Math.abs,
        random = Math.random,
        oToString = Object.prototype.toString,
        oValueOf = Object.prototype.valueOf,
        aSlice = Array.prototype.slice,
        aIndexOf = Array.prototype.indexOf,
        aLastIndexOf = Array.prototype.lastIndexOf,
        aUnshift = Array.prototype.unshift,
        aPush = Array.prototype.push,
        aPop = Array.prototype.pop,
        aSome = Array.prototype.some,
        aForEach = Array.prototype.forEach,
        aJoin = Array.prototype.join,
        sReplace = String.prototype.replace,
        sSplit = String.prototype.split,
        sIndexOf = String.prototype.indexOf,
        sLastIndexOf = String.prototype.lastIndexOf,
        sContains = String.prototype.contains,
        sStartsWith = String.prototype.startsWith,
        sEndsWith = String.prototype.endsWith,
        sToArray = String.prototype.toArray,
        sRepeat = String.prototype.repeat,
        sTrim = String.prototype.trim,
        //sSlice = String.prototype.slice,
        nToString = Number.prototype.toString,
        dToString = Date.prototype.toString,
        refUndefined,
        refObject = {},
        noop = function () {},
        chainResult,
        mixinRelavantCache,
        mixinFromOtherCache,
        mixinFromOtherIgnore;

    ///////////////////////////
    //       Methods
    ///////////////////////////

    methods = {
        "noop": {
            external: true,
            value: noop
        },

        "refObject": {
            external: true,
            value: refObject
        },

        "refUndefined": {
            external: true,
            value: refUndefined
        },

        "isUndefined": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return obj === refUndefined;
            }
        },

        "isNull": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return obj === null;
            }
        },

        "isInitialised": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return obj !== refUndefined && obj !== null;
            }
        },

        "isBoolean": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return obj === true || obj === false;
            }
        },

        "isArray": {
            external: true,
            prototypal: true,
            value: isArray
        },

        "isString": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return typeof obj === "string";
            }
        },

        "isNumber": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return typeof obj === "number";
            }
        },

        "isFunction": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return typeof obj === "function";
            }
        },

        "isObject": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return oToString.call(obj) === "[object Object]";
            }
        },

        "isArguments": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return oToString.call(obj) === "[object Arguments]";
            }
        },

        "isRegExp": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return oToString.call(obj) === "[object RegExp]";
            }
        },

        "isError": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return oToString.call(obj) === "[object Error]";
            }
        },

        "isDate": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return oToString.call(obj) === "[object Date]";
            }
        },

        "isPrimitive": {
            external: true,
            prototypal: true,
            value: function (obj) {
                var t;

                return obj === refUndefined || obj === null || (t = typeof obj) === "boolean" || t === "number" || t === "string";
            }
        },

        "type": {
            generate: true,
            external: true,
            prototypal: true,
            value: function () {
                var class2type = {};

                ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Arguments"].forEach(function (name) {
                    class2type["[object " + name + "]"] = name.toLowerCase();
                });

                return function (obj) {
                    if (obj === refUndefined || obj === null) {
                        return String(obj);
                    }

                    var t = typeof obj;

                    if (t === "object" || t === "function") {
                        return class2type[oToString.call(obj)] || "object";
                    }

                    return t;
                };
            }
        },

        "toClassString": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return oToString.call(obj);
            }
        },

        "inheriting": {
            external: true,
            value: refObject
        },

        "mixin": {
            external: true,
            value: function (obj, inheritFrom, keys) {
                aForEach.call(keys, function (key) {
                    defineProperty(obj, key, getOwnPropertyDescriptor(inheritFrom, key));
                });
            }
        },

        "signedRx": {
            value: /^[\+\-]?/
        },

        "minusRx": {
            value: /^\-/
        },

        "isNumeric": {
            external: true,
            prototypal: true,
            value: function (obj) {
                var t = typeof obj,
                    s;

                return (t === "number" || t === "string") && !isNaN(parseFloat(s = sReplace.call(obj, internal.signedRx, ''))) && isFinite(s);
            }
        },

        "isPrimitiveInteger": {
            external: true,
            prototypal: true,
            value: function (obj) {
                var n;

                return internal.isNumeric(obj) && floor((n = Number(sReplace.call(obj, internal.signedRx, '')))) === n;
            }
        },

        "isCircular": {
            external: true,
            prototypal: true,
            value: function (obj) {
                if (internal.isPrimitive(obj)) {
                    return false;
                }

                var a = aSlice.call(arguments)[1],
                    c;

                if (!isArray(a)) {
                    if (a !== refUndefined && a !== null) {
                        throw new TypeError("Expected attribute to be an array");
                    }

                    a = [];
                }

                aPush.call(a, obj);
                c = aSome.call(objectKeys(obj), function (key) {
                    var val = obj[key];

                    return aIndexOf.call(a, val) !== -1 || internal.isCircular(val, a);
                });

                aPop.call(a);
                return c;
            }
        },

        "isNativeFunction": {
            generate: true,
            external: true,
            prototypal: true,
            value: function () {
                var rx = /^function\s+[\S\s]+?\s+\{\s+\[native\s+code\]\s+\}\s*$/;

                return function (fn) {
                    return typeof fn === "function" && rx.test(fn);
                };
            }
        },

        "isIn": {
            external: true,
            prototypal: true,
            value: function (obj, prop) {
                if ((!!obj[prop] || getOwnPropertyDescriptor(obj, prop)) !== refUndefined) {
                    return true;
                }

                return false;
            }
        },

        "has": {
            external: true,
            prototypal: true,
            value: function (obj, prop) {
                return !internal.isPrimitive(obj) && typeof prop === "string" && internal.isIn(obj, prop);
            }
        },

        "hasOwn": {
            external: true,
            prototypal: true,
            value: function (obj, prop) {
                return !internal.isPrimitive(obj) && typeof prop === "string" && hasOwnProperty.call(obj, prop);
            }
        },

        "nodeTypeList": {
            external: true,
            value: {
                1: "[object HTMLElement]",
                2: "[object Attr]",
                3: "[object Text]",
                4: "[object CDATASection]",
                5: "[object EntityReference]",
                6: "[object Entity]",
                7: "[object ProcessingInstruction]",
                8: "[object Comment]",
                9: "[object HTMLDocument]",
                10: "[object DocumentType]",
                11: "[object DocumentFragment]",
                12: "[object Notation]"
            }
        },

        "classStringToNodeType": {
            generate: true,
            external: true,
            value: function () {
                var value = {};

                aForEach.call(objectKeys(internal.nodeTypeList), function (type) {
                    value[internal.nodeTypeList[type]] = type;
                });

                return value;
            }
        },

        "normaliseDOMClassString": {
            external: true,
            value: function (str) {
                if (internal.startsWith(str, "[object HTML") && internal.endsWith(str, "Element]")) {
                    return internal.nodeTypeList[1];
                }

                return str;
            }
        },

        "isHTMLElementNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return internal.isDOMNode(obj) && internal.normaliseDOMClassString(oToString.call(obj)) === internal.nodeTypeList[1];
            }
        },

        "isAttrNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return internal.isDOMNode(obj) && internal.normaliseDOMClassString(oToString.call(obj)) === internal.nodeTypeList[2];
            }
        },

        "isTextNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return internal.isDOMNode(obj) && internal.normaliseDOMClassString(oToString.call(obj)) === internal.nodeTypeList[3];
            }
        },

        "isCDATASectionNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return internal.isDOMNode(obj) && internal.normaliseDOMClassString(oToString.call(obj)) === internal.nodeTypeList[4];
            }
        },

        "isEntityReferenceNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return internal.isDOMNode(obj) && internal.normaliseDOMClassString(oToString.call(obj)) === internal.nodeTypeList[5];
            }
        },

        "isEntityNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return internal.isDOMNode(obj) && internal.normaliseDOMClassString(oToString.call(obj)) === internal.nodeTypeList[6];
            }
        },

        "isProcessingInstructionNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return internal.isDOMNode(obj) && internal.normaliseDOMClassString(oToString.call(obj)) === internal.nodeTypeList[7];
            }
        },

        "isCommentNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return internal.isDOMNode(obj) && internal.normaliseDOMClassString(oToString.call(obj)) === internal.nodeTypeList[8];
            }
        },

        "isHTMLDocumentNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return internal.isDOMNode(obj) && internal.normaliseDOMClassString(oToString.call(obj)) === internal.nodeTypeList[9];
            }
        },

        "isDocumentTypeNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return internal.isDOMNode(obj) && internal.normaliseDOMClassString(oToString.call(obj)) === internal.nodeTypeList[10];
            }
        },

        "isDocumentFragmentNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return internal.isDOMNode(obj) && internal.normaliseDOMClassString(oToString.call(obj)) === internal.nodeTypeList[11];
            }
        },

        "isNotationNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return internal.isDOMNode(obj) && internal.normaliseDOMClassString(oToString.call(obj)) === internal.nodeTypeList[12];
            }
        },

        "isDOMNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return internal.type(obj) === "object" && typeof obj.nodeType === "number" && obj.nodeType >= 0 && obj.nodeType <= 12 && Number(internal.classStringToNodeType[internal.normaliseDOMClassString(oToString.call(obj))]) === obj.nodeType;
            }
        },

        "isHTMLElementOf": {
            external: true,
            prototypal: true,
            value: function (obj, str) {
                return internal.isHTMLElementNode(obj) && typeof str === "string" && str.toLowerCase() === obj.nodeName.toLowerCase();
            }
        },

        "typeHTMLElement": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return (internal.isHTMLElementNode(obj) && obj.nodeName) || refUndefined;
            }
        },

        "typeDOMNode": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return (internal.isDOMNode(obj) && internal.nodeTypeList[obj.nodeType]) || refUndefined;
            }
        },

        "windowObjects": {
            external: true,
            value: ["[object Window]", "[object global]", "[object DOMwindow]"]
        },

        "isWindow": {
            external: true,
            prototypal: true,
            value: function (obj) {
                return aIndexOf.call(internal.windowObjects, oToString.call(obj)) !== -1;
            }
        },

        "isPlainObject": {
            external: true,
            object: true,
            value: function (obj) {
                return oToString.call(obj) === "[object Object]" && getPrototypeOf(obj).isPrototypeOf(refObject);
            }
        },

        "isEmptyObject": {
            external: true,
            test: function (obj) {
                return internal.isPlainObject(obj);
            },
            value: function (obj) {
                return getOwnPropertyNames(obj).length === 0;
            }
        },

        "lengthOf": {
            external: true,
            test: function (obj) {
                return internal.isArrayLike(obj) || internal.isPlainObject(obj);
            },
            value: function (obj) {
                if (internal.isArrayLike(obj)) {
                    return obj.length;
                }

                if (internal.isPlainObject(obj)) {
                    return objectKeys(obj).length;
                }

                throw new TypeError("Cannot call method 'lengthOf' of " + oToString.call(obj));
            }
        },

        "hasContent": {
            external: true,
            prototypal: true,
            value: function (obj) {
                if (obj === refUndefined || obj === null) {
                    return false;
                }

                if (typeof obj === "number" || internal.isDate(obj)) {
                    return isFinite(obj);
                }

                if (internal.isRegExp(obj)) {
                    return typeof obj.source === "string" && obj.source.length > 0 && obj.source !== "(?:)";
                }

                if (internal.isError(obj)) {
                    return typeof obj.stack === "string" && obj.stack.length > 0;
                }

                try {
                    return internal.lengthOf(obj) > 0;
                } catch (e) {
                    return true;
                }
            }
        },

        "setContent": {
            external: true,
            value: function (obj, val) {
                if (internal.hasContent(obj)) {
                    return obj;
                }

                return val;
            }
        },

        "containsShim": {
            value: function (str, val) {
                if (typeof str !== "string") {
                    if (str === refUndefined || str === null) {
                        throw new TypeError("contains called on null or undefined " + oToString.call(str));
                    }

                    throw new TypeError("Object " + oToString.call(str) + " has no method 'contains'");
                }

                var args = aSlice.call(arguments, 2);

                aUnshift.call(args, val);

                return sIndexOf.apply(str, args) !== -1;
            }
        },

        "contains": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                if (typeof sContains === "function") {
                    return function (str, val) {
                        var args = aSlice.call(arguments, 2);

                        aUnshift.call(args, val);

                        return sContains.apply(str, args);
                    };
                }

                return internal.containsShim;
            }
        },

        "startsWithShim": {
            value: function (str, val) {
                if (typeof str !== "string") {
                    if (str === refUndefined || str === null) {
                        throw new TypeError("startsWith called on null or undefined " + oToString.call(str));
                    }

                    throw new TypeError("Object " + oToString.call(str) + " has no method 'startsWith'");
                }

                return sIndexOf.call(str, val) === 0;
            }
        },

        "startsWith": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                if (typeof sStartsWith === "function") {
                    return function (str, val) {
                        var args = aSlice.call(arguments, 2);

                        aUnshift.call(args, val);

                        return sStartsWith.apply(str, args);
                    };
                }

                return internal.startsWithShim;
            }
        },

        "endsWithShim": {
            value: function (str, val) {
                if (typeof str !== "string") {
                    if (str === refUndefined || str === null) {
                        throw new TypeError("endsWith called on null or undefined " + oToString.call(str));
                    }

                    throw new TypeError("Object " + oToString.call(str) + " has no method 'endsWith'");
                }

                var i = sLastIndexOf.call(str, val);

                return i >= 0 && i === str.length - val.length;
            }
        },

        "endsWith": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                if (typeof sEndsWith === "function") {
                    return function (str, val) {
                        var args = aSlice.call(arguments, 2);

                        aUnshift.call(args, val);

                        return sEndsWith.apply(str, args);
                    };
                }

                return internal.endsWithShim;
            }
        },

        "range": {
            external: true,
            value: function (begin, end, step) {
                var start = (internal.isNumeric(begin) && internal.toNumber(begin)) || 0,
                    interval = (internal.isNumeric(step) && internal.toNumber(step)) || 1,
                    stop = end,
                    length,
                    result = [],
                    index = 0;

                if (end === refUndefined || end === null) {
                    stop = start;
                    start = 0;
                }

                result.length = length = max(0, ceil((stop - start) / interval));
                while (index < length) {
                    result[index] = start;
                    start += interval;
                    index += 1;
                }

                return result;
            }
        },

        "toArrayShim": {
            value: function (str) {
                if (typeof str !== "string") {
                    if (str === refUndefined || str === null) {
                        throw new TypeError("toArray called on null or undefined " + oToString.call(str));
                    }

                    throw new TypeError("Object " + oToString.call(str) + " has no method 'toArray'");
                }

                return sSplit.call(str, '');
            }
        },

        "toArray": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                if (typeof sToArray === "function") {
                    return function (str) {
                        return sToArray.apply(str, aSlice.call(arguments, 1));
                    };
                }

                return internal.toArrayShim;
            }
        },

        "isArrayLikelist": {
            external: true,
            value: ["Array", "String", "Arguments", "NodeList", "HTMLCollection", "HTMLAllCollection", "NamedNodeMap", "DOMTokenList"]
        },

        "classStringToArrayLike": {
            generate: true,
            external: true,
            value: function () {
                var value = {};

                aForEach.call(internal.isArrayLikelist, function (type) {
                    value["[object " + type + "]"] = type;
                });

                return value;
            }
        },

        "isArrayLike": {
            external: true,
            prototypal: true,
            value: function (obj) {
                var length;

                return isArray(obj) || !!internal.classStringToArrayLike[oToString.call(obj)] ||
                    (obj !== refUndefined && obj !== null && typeof obj !== "function" && !internal.isWindow(obj) && !internal.isDOMNode(obj) &&
                    ((length = obj.length) === 0 || (typeof length === "number" && aIndexOf.call(objectKeys(obj), (length - 1).toString()) !== -1)));
            }
        },

        "fromShim": {
            value: function (obj) {
                return (isArray(obj) && aSlice.call(obj)) || (internal.has(obj, "toArray") && obj.toArray()) || (typeof obj === "string" && internal.toArray(obj)) || (internal.isArrayLike(obj) && aSlice.apply(obj)) || [];
            }
        },

        "from": {
            generate: true,
            external: true,
            test: function (obj) {
                return internal.isArrayLike(obj);
            },
            value: function () {
                return typeof Array.from === "function" ? Array.from : internal.fromShim;
            }
        },

        "indexOf": {
            external: true,
            test: function (obj) {
                return internal.isArrayLike(obj) || internal.has(obj, "toArray");
            },
            value: function (obj, val) {
                var args = aSlice.call(arguments, 2);

                aUnshift.call(args, val);

                if (typeof obj === "string") {
                    return sIndexOf.apply(obj, args);
                }

                if (isArray(obj)) {
                    return aIndexOf.apply(obj, args);
                }

                if (internal.has(obj, "toArray")) {
                    return aIndexOf.apply(obj.toArray(), args);
                }

                if (internal.isArrayLike(obj)) {
                    return aIndexOf.apply(aSlice.call(obj), args);
                }

                if (obj === refUndefined || obj === null) {
                    throw new TypeError("Cannot call method 'indexOf' of " + String(obj));
                }

                throw new TypeError("Object " + oToString.call(obj) + " has no method 'indexOf'");
            }
        },

        "lastIndexOf": {
            external: true,
            test: function (obj) {
                return internal.isArrayLike(obj) || internal.has(obj, "toArray");
            },
            value: function (obj, val) {
                var args = aSlice.call(arguments, 2);

                aUnshift.call(args, val);

                if (typeof obj === "string") {
                    return sLastIndexOf.apply(obj, args);
                }

                if (isArray(obj)) {
                    return aLastIndexOf.apply(obj, args);
                }

                if (internal.has(obj, "toArray")) {
                    return aLastIndexOf.apply(obj.toArray(), args);
                }

                if (internal.isArrayLike(obj)) {
                    return aLastIndexOf.apply(aSlice.call(obj), args);
                }

                if (obj === refUndefined || obj === null) {
                    throw new TypeError("Cannot call method 'lastIndexOf' of " + String(obj));
                }

                throw new TypeError("Object " + oToString.call(obj) + " has no method 'lastIndexOf'");
            }
        },

        "hasIndexOf": {
            external: true,
            test: function (obj) {
                return internal.isArrayLike(obj) || internal.has(obj, "toArray");
            },
            value: function (obj, val) {
                if (typeof obj !== "string" && !internal.isArrayLike(obj) && !internal.has(obj, "toArray")) {
                    if (obj === refUndefined || obj === null) {
                        throw new TypeError("hasIndexOf called on null or undefined " + oToString.call(obj));
                    }

                    throw new TypeError("Object " + oToString.call(obj) + " has no method 'hasIndexOf'");
                }

                return internal.indexOf(obj, val, aSlice.call(arguments)[2]) !== -1;
            }
        },

        "sortBy": {
            external: true,
            object: true,
            value: function sortBy(reverse, name, minor) {
                return function (o, p) {
                    var isPo = internal.isPlainObject(o),
                        isPp = internal.isPlainObject(p),
                        ta,
                        tb,
                        a,
                        b;

                    if (!isPo || !isPp) {
                        if (!isPo) {
                            throw new TypeError("Expected 'o' to be a plain object when sorting by " + name);
                        }

                        throw new TypeError("Expected 'p' to be a plain object when sorting by " + name);
                    }

                    a = o[name];
                    b = p[name];

                    if (a === b) {
                        if (typeof minor === "function") {
                            return minor(o, p);
                        }

                        return o;
                    }

                    ta = internal.type(a);
                    tb = internal.type(b);

                    if (ta === tb) {
                        if (reverse === true) {
                            if (a < b) {
                                return 1;
                            }

                            return -1;
                        }

                        if (a < b) {
                            return -1;
                        }

                        return 1;
                    }

                    if (reverse === true) {
                        if (ta < tb) {
                            return 1;
                        }

                        return -1;
                    }

                    if (ta < tb) {
                        return -1;
                    }

                    return 1;
                };
            }
        },

        "addEvent": {
            external: true,
            test: function (obj) {
                return internal.isDOMNode(obj);
            },
            value: function addEvent(obj, type, fn) {
                if (!internal.isDOMNode(obj) || (!internal.has(obj, "attachEvent") && !internal.has(obj, "addEventListener"))) {
                    throw new TypeError("Cannot call method 'addEvent' of " + oToString.call(obj));
                }

                var objType = typeof obj;

                if (objType !== "string" || obj.length < 1) {
                    throw new TypeError("Attribute 'type' is not a valid identifier");
                }

                if (objType !== "function") {
                    throw new TypeError("Attribute 'fn' is not a function");
                }

                if (typeof obj.attachEvent === "function") {
                    obj['e' + type + fn] = fn;
                    obj[type + fn] = function () {
                        obj['e' + type + fn](window.event);
                    };

                    obj.attachEvent('on' + type, obj[type + fn]);
                } else if (typeof obj.addEventListener === "function") {
                    obj.addEventListener(type, fn, false);
                } else {
                    throw new Error("unable to call method 'addEvent' of" + oToString.call(obj));
                }
            }
        },

        "removeEvent": {
            external: true,
            test: function (obj) {
                return internal.isDOMNode(obj);
            },
            value: function (obj, type, fn) {
                if (!internal.isDOMNode(obj) || (!internal.has(obj, "detachEvent") && !internal.has(obj, "removeEventListener"))) {
                    throw new TypeError("Cannot call method 'removeEvent' of " + oToString.call(obj));
                }

                var objType = typeof obj;

                if (objType !== "string" || obj.length < 1) {
                    throw new TypeError("Attribute 'type' is not a valid identifier");
                }

                if (objType !== "function") {
                    throw new TypeError("Attribute 'fn' is not a function");
                }

                if (typeof obj.detachEvent === "function") {
                    obj.detachEvent('on' + type, obj[type + fn]);
                    obj[type + fn] = null;
                } else if (typeof obj.removeEventListener === "function") {
                    obj.removeEventListener(type, fn, false);
                } else {
                    throw new Error("unable to call method 'removeEvent' of" + oToString.call(obj));
                }
            }
        },

        "toEscapedRxString": {
            generate: true,
            external: true,
            string: true,
            regexp: true,
            value: function () {
                var escapeRegExpCharList = ['.', '*', '+', '?', '^', '=', '!', ':', '$', '{', '}', '(', ')', '|', '[', ']', '/', '\\'],
                    toEscapedRx = new RegExp("([\\" + aJoin.call(escapeRegExpCharList, '\\') + "])", "gm");

                return function (str) {
                    if (typeof str !== "string") {
                        if (str === refUndefined || str === null) {
                            throw new TypeError("toEscapedRxString called on null or undefined " + oToString.call(str));
                        }

                        throw new TypeError("Object " + oToString.call(str) + " has no method 'toEscapedRxString'");
                    }

                    return sReplace.call(str, toEscapedRx, '\\$1');
                };
            }
        },

        "repeatShim": {
            value: function (str, num) {
                if (typeof str !== "string") {
                    if (str === refUndefined || str === null) {
                        throw new TypeError("repeatShim called on null or undefined " + oToString.call(str));
                    }

                    throw new TypeError("Object " + oToString.call(str) + " has no method 'repeatShim'");
                }

                if (str.length === 0 || !internal.isNumeric(num) || num <= 1) {
                    if (num === 1) {
                        return str;
                    }

                    return '';
                }

                var result = '',
                    pattern = str;

                while (num > 0) {
                    if (num & 1) {
                        result += pattern;
                    }

                    num >>= 1;
                    pattern += pattern;
                }

                return result;
            }
        },

        "repeat": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                if (typeof sRepeat === "function") {
                    return function (str, num) {
                        var args = aSlice.call(arguments, 2);

                        aUnshift.call(args, num);

                        return sRepeat.apply(str, args);
                    };
                }

                return internal.repeatShim;
            }
        },

        "leftPad": {
            external: true,
            string: true,
            value: function (obj, str, num) {
                if (typeof obj !== "string") {
                    if (obj === refUndefined || obj === null) {
                        throw new TypeError("leftPad called on null or undefined " + oToString.call(obj));
                    }

                    throw new TypeError("Object " + oToString.call(obj) + " has no method 'leftPad'");
                }

                return internal.repeat(str, num - obj.length) + obj;
            }
        },

        "rightPad": {
            external: true,
            string: true,
            value: function (obj, str, num) {
                if (typeof obj !== "string") {
                    if (obj === refUndefined || obj === null) {
                        throw new TypeError("rightPad called on null or undefined " + oToString.call(obj));
                    }

                    throw new TypeError("Object " + oToString.call(obj) + " has no method 'rightPad'");
                }

                return obj + internal.repeat(str, num - obj.length);
            }
        },

        "decodeURIQueryString": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                var decodeURIQueryStringRx1 = /\+/g;

                return function (str) {
                    if (typeof str !== "string") {
                        if (str === refUndefined || str === null) {
                            throw new TypeError("decodeURIQueryString called on null or undefined " + oToString.call(str));
                        }

                        throw new TypeError("Object " + oToString.call(str) + " has no method 'decodeURIQueryString'");
                    }

                    return sReplace.call(str, decodeURIQueryStringRx1, ' ');
                };
            }
        },

        "toQueryParams": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                var toQueryParamsRx1 = new RegExp("([^?#]*)(#.*)?$"),
                    toQueryParamsRx2 = new RegExp("(?:^|&)([^&=]*)=?([^&]*)", "g");

                return function (str) {
                    if (typeof str !== "string") {
                        if (str === refUndefined || str === null) {
                            throw new TypeError("toQueryParams called on null or undefined " + oToString.call(str));
                        }

                        throw new TypeError("Object " + oToString.call(str) + " has no method 'toQueryParams'");
                    }

                    var hash = {};

                    sReplace.call(sTrim.call(str).match(toQueryParamsRx1)[1], toQueryParamsRx2, function () {
                        var args = aSlice.apply(arguments),
                            key = args[1],
                            value = args[2];

                        if (typeof key === "string" && key.length > 0) {
                            key = internal.decodeURIQueryString(decodeURIComponent(key));

                            if (typeof value === "string" && value.length > 0) {
                                value = internal.decodeURIQueryString(decodeURIComponent(value));
                            } else {
                                value = "";
                            }

                            if (typeof key === "string" && key.length > 0) {
                                if (hash[key] !== refUndefined && hash[key] !== null) {
                                    if (!isArray(hash[key])) {
                                        hash[key] = [hash[key]];
                                    }

                                    aPush.call(hash[key], value);
                                } else {
                                    hash[key] = value;
                                }
                            }
                        }
                    });

                    return hash;
                };
            }
        },

        "toUriParts": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                var keys = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                    len = keys.length,
                    rx1 = new RegExp("^(?:([^:\\/?#]+):)?(?:\\/\\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?))?((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)"),
                    rx2 = new RegExp("^(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?(?:\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)");

                return function (str, strict) {
                    if (typeof str !== "string") {
                        if (str === refUndefined || str === null) {
                            throw new TypeError("toUriParts called on null or undefined " + oToString.call(str));
                        }

                        throw new TypeError("Object " + oToString.call(str) + " has no method 'toUriParts'");
                    }

                    var uri = {},
                        i = 0,
                        vals,
                        val;

                    if (strict === true) {
                        vals = rx1.exec(str);
                    } else {
                        vals = rx2.exec(str);
                    }

                    while (i < len) {
                        val = vals[i];

                        if (typeof val === "string" && val.length > 0) {
                            uri[keys[i]] = decodeURIComponent(val);
                        } else {
                            uri[keys[i]] = "";
                        }

                        i += 1;
                    }

                    if (uri.query.length > 0) {
                        uri.queryKey = internal.toQueryParams(uri.query);
                    } else {
                        uri.queryKey = {};
                    }

                    if (uri.anchor.length > 0) {
                        uri.anchorKey = internal.toQueryParams(uri.anchor);
                    } else {
                        uri.anchorKey = {};
                    }

                    return uri;
                };
            }
        },

        "isNaNShim": {
            value: function (obj) {
                return internal.is(obj, NaN);
            }
        },

        "isNaN": {
            generate: true,
            external: true,
            prototypal: true,
            value: function () {
                if (Number.isNan === "function") {
                    return Number.isNaN;
                }

                return internal.isNaNShim;
            }
        },

        "toNumber": {
            external: true,
            string: true,
            value: function (obj) {
                var type,
                    n;

                if (!internal.isNumeric(obj)) {
                    type = typeof obj;

                    if (type === "number") {
                        return obj;
                    }

                    if (type === "string" && !isNaN(parseFloat(obj))) {
                        return Number(obj);
                    }

                    return NaN;
                }

                if (internal.signedRx.test(obj)) {
                    n = Number(sReplace.call(obj, internal.signedRx, ''));

                    if (internal.minusRx.test(obj)) {
                        return -n;
                    }

                    return n;
                }

                return Number(obj);
            }
        },

        "toNumberIfNumeric": {
            external: true,
            prototypal: true,
            value: function (obj) {
                if (internal.isNumeric(obj)) {
                    return internal.toNumber(obj);
                }

                return obj;
            }
        },

        "toInt32": {
            external: true,
            number: true,
            string: true,
            value: function (obj) {
                if (!internal.isNumeric(obj)) {
                    if (obj === refUndefined || obj === null) {
                        throw new TypeError("toInt32 called on null or undefined " + oToString.call(obj));
                    }

                    throw new TypeError("Attribute 'obj' is not valid to cast to int32 " + (typeof obj === "number" ? "[" + String(obj) + "]" : oToString.call(obj)));
                }

                return internal.toNumber(obj) >> 0;
            }
        },

        "toUInt32": {
            external: true,
            number: true,
            string: true,
            value: function (obj) {
                if (!internal.isNumeric(obj)) {
                    if (obj === refUndefined || obj === null) {
                        throw new TypeError("toInt32 called on null or undefined " + oToString.call(obj));
                    }

                    throw new TypeError("Attribute 'obj' is not valid to cast to uint32 " + (typeof obj === "number" ? "[" + String(obj) + "]" : oToString.call(obj)));
                }

                return internal.toNumber(obj) >>> 0;
            }
        },

        "regex": {
            external: true,
            string: true,
            value: function (str, obj, flags) {
                if (typeof str !== "string") {
                    if (str === refUndefined || str === null) {
                        throw new TypeError("regex called on null or undefined " + oToString.call(str));
                    }

                    throw new TypeError("Object " + oToString.call(str) + " has no method 'regex'");
                }

                if (typeof obj !== "string" && !internal.isRegExp(obj)) {
                    throw new TypeError("Attribute 'obj' is not a string or regexp " + oToString.call(obj));
                }

                if (flags !== refUndefined && flags !== null) {
                    if (typeof flags !== "string") {
                        throw new TypeError("Attribute 'flags' is not a string " + oToString.call(obj));
                    }

                    if (!/^[gi]*$/.test(flags)) {
                        throw new TypeError("Invalid flags supplied '" + flags.match(new RegExp("[^gi]*")) + "'");
                    }
                }

                var matches,
                    rrx,
                    uflags = '',
                    cflags = '',
                    interim = [],
                    results = [],
                    a,
                    len,
                    e,
                    eLen,
                    i = 0,
                    j = 0;

                if (typeof obj === "string") {
                    if (typeof flags === "string") {
                        if (internal.contains(flags, "g")) {
                            uflags += 'g';
                        }

                        if (internal.contains(flags, "i")) {
                            uflags += 'i';
                        }
                    }

                    matches = str.match(new RegExp(internal.escapeRegExpString(obj), uflags));
                } else {
                    matches = str.match(obj);
                }

                if (!isArray(matches)) {
                    return internal.toNumberIfNumeric(matches);
                }

                i = 0;
                len = matches.length;
                if (internal.isRegExp(obj)) {
                    if (obj.global) {
                        if (obj.multiline) {
                            cflags += 'm';
                        }

                        if (obj.ignoreCase) {
                            cflags += 'i';
                        }

                        rrx = new RegExp(obj.source, cflags);

                        interim.length = len;
                        while (i < len) {
                            interim[i] = internal.regex(matches[i], rrx);
                        }
                    } else {
                        if (len > 1) {
                            interim = aSlice.call(matches, 1);
                        } else {
                            return matches[len - 1];
                        }
                    }
                    results.length = len = interim.length;
                    while (i < len) {
                        e = interim[i];
                        if (isArray(e)) {
                            a = [];

                            a.length = eLen = e.length;
                            while (j < eLen) {
                                a[j] = internal.toNumberIfNumeric(e[j]);
                                j += 1;
                            }

                            results[i] = a;
                        } else {
                            results[i] = internal.toNumberIfNumeric(e);
                        }

                        i += 1;
                    }
                } else {
                    results.length = len;
                    while (i < len) {
                        results[i] = internal.toNumberIfNumeric(matches[i]);
                        i += 1;
                    }
                }

                return results;
            }
        },

        "toList": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                var toListRx1 = /[,\n]/g;

                return function (str) {
                    if (typeof str !== "string") {
                        return [];
                    }

                    var a = [],
                        t = sSplit.call(str, toListRx1),
                        l = t.length,
                        i = 0,
                        trimmed;

                    while (i < l) {
                        trimmed = sTrim.call(t[i]);

                        if (trimmed.length > 0) {
                            a[i] = internal.toNumberIfNumeric(trimmed);
                        }

                        i += 1;
                    }

                    return a;
                };
            }
        },

        "b64CharSet": {
            generate: true,
            external: true,
            value: function () {
                var b64CharSetAcsiiList = [[65, 90], [97, 122], [48, 57], [43, 43], [47, 47]],
                    value = [];

                aForEach.call(b64CharSetAcsiiList, function (range) {
                    aForEach.call(internal.range(range[0], range[1]), function (num) {
                        aPush.call(value, String.fromCharCode(num));
                    });
                });

                return value;
            }
        },

        "atobCodex": {
            generate: true,
            value: function () {
                var value = {};

                aForEach.call(internal.b64CharSet, function (character, index) {
                    value[character] = index;
                });

                value["="] = 0x40;

                return value;
            }
        },

        "utf8Encode": {
            generate: true,
            external: true,
            value: function () {
                var rx = /\r\n/g;

                return function (str) {
                    if (typeof str !== "string") {
                        if (str === refUndefined || str === null) {
                            throw new TypeError("utf8Encode called on null or undefined " + oToString.call(str));
                        }

                        throw new TypeError("Object " + oToString.call(str) + " has no method 'utf8Encode'");
                    }

                    str = sReplace.call(str, rx, "\n");
                    var len = str.length,
                        utftext = "",
                        i = 0,
                        c;

                    while (i < len) {
                        c = str.charCodeAt(i);
                        if (c < 128) {
                            utftext += String.fromCharCode(c);
                        } else if (c < 2048) {
                            utftext += String.fromCharCode((c >> 6) | 192, (c & 63) | 128);
                        } else {
                            utftext += String.fromCharCode((c >> 12) | 224, ((c >> 6) & 63) | 128, (c & 63) | 128);
                        }

                        i += 1;
                    }

                    return utftext;
                };
            }
        },

        "utf8EncodeToCharCodeArray": {
            generate: true,
            external: true,
            value:  function () {
                var rx = /\r\n/g;

                return function (str) {
                    if (typeof str !== "string") {
                        if (str === refUndefined || str === null) {
                            throw new TypeError("utf8EncodeToCharCodeArray called on null or undefined " + oToString.call(str));
                        }

                        throw new TypeError("Object " + oToString.call(str) + " has no method 'utf8EncodeToCharCodeArray'");
                    }

                    str = sReplace.call(str, rx, "\n");
                    var len = str.length,
                        a = [],
                        i = 0,
                        j = 0,
                        c;

                    a.length = len;
                    while (i < len) {
                        c = str.charCodeAt(i);
                        if (c < 128) {
                            a[j] = c;
                        } else if (c < 2048) {
                            a[j] = (c >> 6) | 192;
                            a[j += 1] = (c & 63) | 128;
                        } else {
                            a[j] = (c >> 12) | 224;
                            a[j += 1] = ((c >> 6) & 63) | 128;
                            a[j += 1] = (c & 63) | 128;
                        }

                        i += 1;
                        j += 1;
                    }

                    return a;
                };
            }
        },

        "ECMAScriptString": {
            external: true,
            value: "\u044f \u043e\u0431\u043e\u0436\u0430\u044e \u0438\u0440\u0438\u044c\u0441\u043a\u0438"
        },

        "utf8String": {
            external: true,
            value: "\xd1\x8f \xd0\xbe\xd0\xb1\xd0\xbe\xd0\xb6\xd0\xb0\xd1\x8e \xd0\xb8\xd1\x80\xd0\xb8\xd1\x8c\xd1\x81\xd0\xba\xd0\xb8"
        },

        "utf8Decode": {
            external: true,
            value: function (str) {
                if (typeof str !== "string") {
                    if (str === refUndefined || str === null) {
                        throw new TypeError("utf8Decode called on null or undefined " + oToString.call(str));
                    }

                    throw new TypeError("Object " + oToString.call(str) + " has no method 'utf8Decode'");
                }

                var len = str.length,
                    string = "",
                    i = 0,
                    c;

                while (i < len) {
                    c = str.charCodeAt(i);

                    if (c < 128) {
                        string += str[i];
                    } else if ((c > 191) && (c < 224)) {
                        string += String.fromCharCode(((c & 31) << 6) | (str.charCodeAt(i += 1) & 63));
                    } else {
                        string += String.fromCharCode(((c & 15) << 12) | ((str.charCodeAt(i += 1) & 63) << 6) | (str.charCodeAt(i += 1) & 63));
                    }

                    i += 1;
                }

                return string;
            }
        },

        "btoaShim": {
            generate: true,
            external: true,
            value: function () {
                var btoaPad = [[/(?:)/, ''], [/(\w\w)$/, "=="], [/(\w)$/, "="]];

                return function (str) {
                    var l = str.length,
                        p = btoaPad[l % 3],
                        e = "",
                        i = 0,
                        bits;

                    e.length = l;
                    while (i < l) {
                        bits = str.charCodeAt(i) << 16 | str.charCodeAt(i += 1) << 8 | str.charCodeAt(i += 1);
                        e += internal.b64CharSet[(bits >> 18) & 0x3F] + internal.b64CharSet[(bits >> 12) & 0x3F] + internal.b64CharSet[(bits >> 6) & 0x3F] + internal.b64CharSet[bits & 0x3F];
                        i += 1;
                    }

                    return sReplace.call(e, p[0], p[1]);
                };
            }
        },

        "atobShim": {
            external: true,
            value: function (str) {
                var l = str.length,
                    d = "",
                    i = 0,
                    h3,
                    h4,
                    bits,
                    o1,
                    o2;

                while (i < l) {
                    bits = internal.a2bCodex[str.charAt(i)] << 18 | internal.a2bCodex[str.charAt(i += 1)] << 12;
                    h3 = internal.a2bCodex[str.charAt(i += 1)];
                    h4 = internal.a2bCodex[str.charAt(i += 1)];
                    bits |= h3 << 6 | h4;
                    o1 = bits >>> 16 & internal.b256mask;
                    if (h3 === 0x40) {
                        d += String.fromCharCode(o1);
                    } else {
                        o2 = bits >>> 8 & internal.b256mask;
                        if (h4 === 0x40) {
                            d += String.fromCharCode(o1, o2);
                        } else {
                            d += String.fromCharCode(o1, o2, bits & internal.b256mask);
                        }
                    }

                    i += 1;
                }

                return d;
            }
        },

        "btoa": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                if (typeof window.btoa === "function") {
                    return function (str) {
                        return window.btoa(str);
                    };
                }

                return internal.btoaShim;
            }
        },

        "atob": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                if (typeof window.atob === "function") {
                    return function (str) {
                        return window.atob(str);
                    };
                }

                return internal.atobShim;
            }
        },

        "utf8ToB64": {
            external: true,
            string: true,
            value: function (str) {
                return internal.btoa(internal.Utf8encode(str));
            }
        },

        "b64ToUtf8": {
            external: true,
            string: true,
            value: function (str) {
                return internal.Utf8decode(internal.atob(str));
            }
        },

        "isShim": {
            value: function (x, y) {
                if (x === y) {
                    if (x === 0) {
                        return 1 / x === 1 / y;
                    }

                    return true;
                }

                var x1 = x,
                    y1 = y;

                return x !== x1 && y !== y1;
            }
        },

        "isntShim": {
            value: function (x, y) {
                return !internal.is(x, y);
            }
        },

        "is": {
            generate: true,
            external: true,
            prototypal: true,
            value: function () {
                if (typeof Object.is === "function") {
                    return Object.is;
                }

                return internal.isShim;
            }
        },

        "isnt": {
            generate: true,
            external: true,
            prototypal: true,
            value: function () {
                if (typeof Object.isnt === "function") {
                    return Object.isnt;
                }

                return internal.isntShim;
            }
        },

        "escapeHTML": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                var pre = document.createElement('pre');

                return function (str) {
                    pre.appendChild(document.createTextNode(str));

                    var escapedStr = pre.innerHTML;
                    pre.innerHTML = "";

                    return escapedStr;
                };
            }
        },

        "unescapeHTML": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                var pre = document.createElement('pre');

                return function (str) {
                    pre.innerHTML = str;
                    var chl = pre.childNodes[0];
                    pre.innerHTML = "";

                    if (oToString.call(chl) === "[object Text]") {
                        return chl.nodeValue;
                    }

                    return '';
                };
            }
        },

        "toHexStr": {
            external: true,
            string: true,
            number: true,
            value: function (num) {
                if (!internal.isNumber(num)) {
                    switch (typeof num) {
                    case "string":
                        return num;
                    case "number":
                    case "boolean":
                        return String(num);
                    default:
                        return oToString.call(num);
                    }
                }

                var n = internal.toNumber(num);

                return nToString.call((n >>> 28) & 0xF, 16) +
                    nToString.call((n >>> 24) & 0xF, 16) +
                    nToString.call((n >>> 20) & 0xF, 16) +
                    nToString.call((n >>> 16) & 0xF, 16) +
                    nToString.call((n >>> 12) & 0xF, 16) +
                    nToString.call((n >>> 8)  & 0xF, 16) +
                    nToString.call((n >>> 4)  & 0xF, 16) +
                    nToString.call((n >>> 0)  & 0xF, 16);
            }
        },

        "floor32": {
            value: function (x) {
                return x | 0;
            }
        },

        "ceil32": {
            value: function (x) {
                return (x + 1) | 0;
            }
        },

        "dateFormat": {
            generate: true,
            external: true,
            date: true,
            value: function () {
                var r = {
                        'shortMonths': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

                        'longMonths': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

                        'shortDays': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

                        'longDays': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],

                        // Day
                        'd': function () {
                            return internal.leftPad(nToString.call(this.getDate(), 10), "0", 2);
                        },

                        'D': function () {
                            return internal.replaceChars.shortDays[this.getDay()];
                        },

                        'j': function () {
                            return this.getDate();
                        },

                        'l': function () {
                            return internal.replaceChars.longDays[this.getDay()];
                        },

                        'N': function () {
                            return this.getDay() + 1;
                        },

                        'S': function () {
                            return (this.getDate() % 10 === 1 && this.getDate() !== 11 ? 'st' : (this.getDate() % 10 === 2 && this.getDate() !== 12 ? 'nd' : (this.getDate() % 10 === 3 && this.getDate() !== 13 ? 'rd' : 'th')));
                        },

                        'w': function () {
                            return this.getDay();
                        },

                        'z': function () {
                            return "Not Yet Supported";
                        },

                        // Week
                        'W': function () {
                            return "Not Yet Supported";
                        },

                        // Month
                        'F': function () {
                            return internal.replaceChars.longMonths[this.getMonth()];
                        },

                        'm': function () {
                            return internal.leftPad(nToString.call(this.getMonth() + 1, 10), "0", 2);
                        },

                        'M': function () {
                            return internal.replaceChars.shortMonths[this.getMonth()];
                        },

                        'n': function () {
                            return this.getMonth() + 1;
                        },

                        't': function () {
                            return "Not Yet Supported";
                        },

                        // Year
                        'L': function () {
                            return (((this.getFullYear() % 4 === 0) && (this.getFullYear() % 100 !== 0)) || (this.getFullYear() % 400 === 0)) ? '1' : '0';
                        },

                        'o': function () {
                            return "Not Supported";
                        },

                        'Y': function () {
                            return this.getFullYear();
                        },

                        'y': function () {
                            return nToString.call(this.getFullYear(), 10).substr(2);
                        },

                        // Time
                        'a': function () {
                            return this.getHours() < 12 ? 'am' : 'pm';
                        },

                        'A': function () {
                            return this.getHours() < 12 ? 'AM' : 'PM';
                        },

                        'B': function () {
                            return "Not Yet Supported";
                        },

                        'g': function () {
                            return this.getHours() % 12 || 12;
                        },

                        'G': function () {
                            return this.getHours();
                        },

                        'h': function () {
                            return internal.leftPad(nToString.call(this.getHours() % 12 || 12, 10), "0", 2);
                        },

                        'H': function () {
                            return internal.leftPad(nToString.call(this.getHours(), 10), "0", 2);
                        },

                        'i': function () {
                            return internal.leftPad(nToString.call(this.getMinutes(), 10), "0", 2);
                        },

                        's': function () {
                            return internal.leftPad(nToString.call(this.getSeconds(), 10), "0", 2);
                        },

                        // Timezone
                        'e': function () {
                            return "Not Yet Supported";
                        },

                        'I': function () {
                            return "Not Supported";
                        },

                        'O': function () {
                            return (-this.getTimezoneOffset() < 0 ? '-' : '+') + internal.leftPad(nToString.call(abs(this.getTimezoneOffset() / 60), 10), "0", 2) + '00';
                        },

                        'P': function () {
                            return (-this.getTimezoneOffset() < 0 ? '-' : '+') + internal.leftPad(nToString.call(abs(this.getTimezoneOffset() / 60), 10), "0", 2) + ':' + internal.leftPad(nToString.call(abs(this.getTimezoneOffset() % 60), 10), "0", 2);
                        },

                        'T': function () {
                            var m = this.getMonth(),
                                r = '';

                            this.setMonth(0);
                            r = this.toTimeString().replace(new RegExp("^.+ \\(?([^\\)]+)\\)?$"), '$1');
                            this.setMonth(m);
                            return r;
                        },

                        'Z': function () {
                            return -this.getTimezoneOffset() * 60;
                        },

                        // Full Date/Time
                        'c': function () {
                            return internal.dateFormat(this, "Y-m-d") + "T" + internal.dateFormat(this, "H:i:sP");
                        },

                        'r': function () {
                            return dToString.call(this);
                        },

                        'U': function () {
                            return this.getTime() / 1000;
                        }
                    };

                return function (date, format) {
                    var i,
                        l = format.length,
                        c,
                        s = '';

                    for (i = 0; i < l; i += 1) {
                        c = format.charAt(i);

                        if (typeof r[c] === "function") {
                            s += r[c].call(date);
                        } else {
                            s += c;
                        }
                    }

                    return s;
                };
            }
        },

        "dateCopy": {
            external: true,
            date: true,
            value: function (date) {
                return new Date(date.getTime());
            }
        },

        "md5": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                var empty = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                function md5cycle(x, k) {
                    var a = x[0],
                        b = x[1],
                        c = x[2],
                        d = x[3],
                        temp;

                    a = ((((temp = (((a + ((b & c) | ((~b) & d)))) + ((k[0]  + 0xD76AA478)))) << 7)  | (temp >>> 25)) + b);
                    d = ((((temp = (((d + ((a & b) | ((~a) & c)))) + ((k[1]  + 0xE8C7B756)))) << 12) | (temp >>> 20)) + a);
                    c = ((((temp = (((c + ((d & a) | ((~d) & b)))) + ((k[2]  + 0x242070DB)))) << 17) | (temp >>> 15)) + d);
                    b = ((((temp = (((b + ((c & d) | ((~c) & a)))) + ((k[3]  + 0xC1BDCEEE)))) << 22) | (temp >>> 10)) + c);
                    a = ((((temp = (((a + ((b & c) | ((~b) & d)))) + ((k[4]  + 0xF57C0FAF)))) << 7)  | (temp >>> 25)) + b);
                    d = ((((temp = (((d + ((a & b) | ((~a) & c)))) + ((k[5]  + 0x4787C62A)))) << 12) | (temp >>> 20)) + a);
                    c = ((((temp = (((c + ((d & a) | ((~d) & b)))) + ((k[6]  + 0xA8304613)))) << 17) | (temp >>> 15)) + d);
                    b = ((((temp = (((b + ((c & d) | ((~c) & a)))) + ((k[7]  + 0xFD469501)))) << 22) | (temp >>> 10)) + c);
                    a = ((((temp = (((a + ((b & c) | ((~b) & d)))) + ((k[8]  + 0x698098D8)))) << 7)  | (temp >>> 25)) + b);
                    d = ((((temp = (((d + ((a & b) | ((~a) & c)))) + ((k[9]  + 0x8B44F7AF)))) << 12) | (temp >>> 20)) + a);
                    c = ((((temp = (((c + ((d & a) | ((~d) & b)))) + ((k[10] + 0xFFFF5BB1)))) << 17) | (temp >>> 15)) + d);
                    b = ((((temp = (((b + ((c & d) | ((~c) & a)))) + ((k[11] + 0x895CD7BE)))) << 22) | (temp >>> 10)) + c);
                    a = ((((temp = (((a + ((b & c) | ((~b) & d)))) + ((k[12] + 0x6B901122)))) << 7)  | (temp >>> 25)) + b);
                    d = ((((temp = (((d + ((a & b) | ((~a) & c)))) + ((k[13] + 0xFD987193)))) << 12) | (temp >>> 20)) + a);
                    c = ((((temp = (((c + ((d & a) | ((~d) & b)))) + ((k[14] + 0xA679438E)))) << 17) | (temp >>> 15)) + d);
                    b = ((((temp = (((b + ((c & d) | ((~c) & a)))) + ((k[15] + 0x49B40821)))) << 22) | (temp >>> 10)) + c);

                    a = ((((temp = (((a + ((b & d) | (c & (~d))))) + ((k[1]  + 0xF61E2562)))) << 5)  | (temp >>> 27)) + b);
                    d = ((((temp = (((d + ((a & c) | (b & (~c))))) + ((k[6]  + 0xC040B340)))) << 9)  | (temp >>> 23)) + a);
                    c = ((((temp = (((c + ((d & b) | (a & (~b))))) + ((k[11] + 0x265E5A51)))) << 14) | (temp >>> 18)) + d);
                    b = ((((temp = (((b + ((c & a) | (d & (~a))))) + ((k[0]  + 0xE9B6C7AA)))) << 20) | (temp >>> 12)) + c);
                    a = ((((temp = (((a + ((b & d) | (c & (~d))))) + ((k[5]  + 0xD62F105D)))) << 5)  | (temp >>> 27)) + b);
                    d = ((((temp = (((d + ((a & c) | (b & (~c))))) + ((k[10] + 0x02441453)))) << 9)  | (temp >>> 23)) + a);
                    c = ((((temp = (((c + ((d & b) | (a & (~b))))) + ((k[15] + 0xD8A1E681)))) << 14) | (temp >>> 18)) + d);
                    b = ((((temp = (((b + ((c & a) | (d & (~a))))) + ((k[4]  + 0xE7D3FBC8)))) << 20) | (temp >>> 12)) + c);
                    a = ((((temp = (((a + ((b & d) | (c & (~d))))) + ((k[9]  + 0x21E1CDE6)))) << 5)  | (temp >>> 27)) + b);
                    d = ((((temp = (((d + ((a & c) | (b & (~c))))) + ((k[14] + 0xC33707D6)))) << 9)  | (temp >>> 23)) + a);
                    c = ((((temp = (((c + ((d & b) | (a & (~b))))) + ((k[3]  + 0xF4D50D87)))) << 14) | (temp >>> 18)) + d);
                    b = ((((temp = (((b + ((c & a) | (d & (~a))))) + ((k[8]  + 0x455A14ED)))) << 20) | (temp >>> 12)) + c);
                    a = ((((temp = (((a + ((b & d) | (c & (~d))))) + ((k[13] + 0xA9E3E905)))) << 5)  | (temp >>> 27)) + b);
                    d = ((((temp = (((d + ((a & c) | (b & (~c))))) + ((k[2]  + 0xFCEFA3F8)))) << 9)  | (temp >>> 23)) + a);
                    c = ((((temp = (((c + ((d & b) | (a & (~b))))) + ((k[7]  + 0x676F02D9)))) << 14) | (temp >>> 18)) + d);
                    b = ((((temp = (((b + ((c & a) | (d & (~a))))) + ((k[12] + 0x8D2A4C8A)))) << 20) | (temp >>> 12)) + c);

                    a = ((((temp = (((a + (b ^ c ^ d))) + ((k[5]  + 0xFFFA3942)))) << 4)  | (temp >>> 28)) + b);
                    d = ((((temp = (((d + (a ^ b ^ c))) + ((k[8]  + 0x8771F681)))) << 11) | (temp >>> 21)) + a);
                    c = ((((temp = (((c + (d ^ a ^ b))) + ((k[11] + 0x6D9D6122)))) << 16) | (temp >>> 16)) + d);
                    b = ((((temp = (((b + (c ^ d ^ a))) + ((k[14] + 0xFDE5380C)))) << 23) | (temp >>> 9))  + c);
                    a = ((((temp = (((a + (b ^ c ^ d))) + ((k[1]  + 0xA4BEEA44)))) << 4)  | (temp >>> 28)) + b);
                    d = ((((temp = (((d + (a ^ b ^ c))) + ((k[4]  + 0x4BDECFA9)))) << 11) | (temp >>> 21)) + a);
                    c = ((((temp = (((c + (d ^ a ^ b))) + ((k[7]  + 0xF6BB4B60)))) << 16) | (temp >>> 16)) + d);
                    b = ((((temp = (((b + (c ^ d ^ a))) + ((k[10] + 0xBEBFBC70)))) << 23) | (temp >>> 9))  + c);
                    a = ((((temp = (((a + (b ^ c ^ d))) + ((k[13] + 0x289B7EC6)))) << 4)  | (temp >>> 28)) + b);
                    d = ((((temp = (((d + (a ^ b ^ c))) + ((k[0]  + 0xEAA127FA)))) << 11) | (temp >>> 21)) + a);
                    c = ((((temp = (((c + (d ^ a ^ b))) + ((k[3]  + 0xD4EF3085)))) << 16) | (temp >>> 16)) + d);
                    b = ((((temp = (((b + (c ^ d ^ a))) + ((k[6]  + 0x04881D05)))) << 23) | (temp >>> 9))  + c);
                    a = ((((temp = (((a + (b ^ c ^ d))) + ((k[9]  + 0xD9D4D039)))) << 4)  | (temp >>> 28)) + b);
                    d = ((((temp = (((d + (a ^ b ^ c))) + ((k[12] + 0xE6DB99E5)))) << 11) | (temp >>> 21)) + a);
                    c = ((((temp = (((c + (d ^ a ^ b))) + ((k[15] + 0x1FA27CF8)))) << 16) | (temp >>> 16)) + d);
                    b = ((((temp = (((b + (c ^ d ^ a))) + ((k[2]  + 0xC4AC5665)))) << 23) | (temp >>> 9))  + c);

                    a = ((((temp = (((a + (c ^ (b | (~d))))) + ((k[0]  + 0xF4292244)))) << 6)  | (temp >>> 26)) + b);
                    d = ((((temp = (((d + (b ^ (a | (~c))))) + ((k[7]  + 0x432AFF97)))) << 10) | (temp >>> 22)) + a);
                    c = ((((temp = (((c + (a ^ (d | (~b))))) + ((k[14] + 0xAB9423A7)))) << 15) | (temp >>> 17)) + d);
                    b = ((((temp = (((b + (d ^ (c | (~a))))) + ((k[5]  + 0xFC93A039)))) << 21) | (temp >>> 11)) + c);
                    a = ((((temp = (((a + (c ^ (b | (~d))))) + ((k[12] + 0x655B59C3)))) << 6)  | (temp >>> 26)) + b);
                    d = ((((temp = (((d + (b ^ (a | (~c))))) + ((k[3]  + 0x8F0CCC92)))) << 10) | (temp >>> 22)) + a);
                    c = ((((temp = (((c + (a ^ (d | (~b))))) + ((k[10] + 0xFFEFF47D)))) << 15) | (temp >>> 17)) + d);
                    b = ((((temp = (((b + (d ^ (c | (~a))))) + ((k[1]  + 0x85845DD1)))) << 21) | (temp >>> 11)) + c);
                    a = ((((temp = (((a + (c ^ (b | (~d))))) + ((k[8]  + 0x6FA87E4F)))) << 6)  | (temp >>> 26)) + b);
                    d = ((((temp = (((d + (b ^ (a | (~c))))) + ((k[15] + 0xFE2CE6E0)))) << 10) | (temp >>> 22)) + a);
                    c = ((((temp = (((c + (a ^ (d | (~b))))) + ((k[6]  + 0xA3014314)))) << 15) | (temp >>> 17)) + d);
                    b = ((((temp = (((b + (d ^ (c | (~a))))) + ((k[13] + 0x4E0811A1)))) << 21) | (temp >>> 11)) + c);
                    a = ((((temp = (((a + (c ^ (b | (~d))))) + ((k[4]  + 0xF7537E82)))) << 6)  | (temp >>> 26)) + b);
                    d = ((((temp = (((d + (b ^ (a | (~c))))) + ((k[11] + 0xBD3AF235)))) << 10) | (temp >>> 22)) + a);
                    c = ((((temp = (((c + (a ^ (d | (~b))))) + ((k[2]  + 0x2AD7D2BB)))) << 15) | (temp >>> 17)) + d);
                    b = ((((temp = (((b + (d ^ (c | (~a))))) + ((k[9]  + 0xEB86D391)))) << 21) | (temp >>> 11)) + c);

                    x[0] = (a + x[0]) >>> 0;
                    x[1] = (b + x[1]) >>> 0;
                    x[2] = (c + x[2]) >>> 0;
                    x[3] = (d + x[3]) >>> 0;
                }

                return function md5(inputString) {
                    var utfString = internal.utf8EncodeToCharCodeArray(inputString),
                        utfStringLength = utfString.length,
                        iterator1 = 64,
                        state = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476],
                        k = [],
                        tail = aSlice.call(empty),
                        block,
                        blockLength;

                    k.length = 16;
                    while (iterator1 <= utfStringLength) {
                        block = aSlice.call(utfString, iterator1 - 64, iterator1);
                        k[0]  = block[0]  + (block[1]  << 8) + (block[2]  << 16) + (block[3]  << 24);
                        k[1]  = block[4]  + (block[5]  << 8) + (block[6]  << 16) + (block[7]  << 24);
                        k[2]  = block[8]  + (block[9]  << 8) + (block[10] << 16) + (block[11] << 24);
                        k[3]  = block[12] + (block[13] << 8) + (block[14] << 16) + (block[15] << 24);
                        k[4]  = block[16] + (block[17] << 8) + (block[18] << 16) + (block[19] << 24);
                        k[5]  = block[20] + (block[21] << 8) + (block[22] << 16) + (block[23] << 24);
                        k[6]  = block[24] + (block[25] << 8) + (block[26] << 16) + (block[27] << 24);
                        k[7]  = block[28] + (block[29] << 8) + (block[30] << 16) + (block[31] << 24);
                        k[8]  = block[32] + (block[33] << 8) + (block[34] << 16) + (block[35] << 24);
                        k[9]  = block[36] + (block[37] << 8) + (block[38] << 16) + (block[39] << 24);
                        k[10] = block[40] + (block[41] << 8) + (block[42] << 16) + (block[43] << 24);
                        k[11] = block[44] + (block[45] << 8) + (block[46] << 16) + (block[47] << 24);
                        k[12] = block[48] + (block[49] << 8) + (block[50] << 16) + (block[51] << 24);
                        k[13] = block[52] + (block[53] << 8) + (block[54] << 16) + (block[55] << 24);
                        k[14] = block[56] + (block[57] << 8) + (block[58] << 16) + (block[59] << 24);
                        k[15] = block[60] + (block[61] << 8) + (block[62] << 16) + (block[63] << 24);
                        md5cycle(state, k);
                        iterator1 += 64;
                    }

                    block = aSlice.call(utfString, iterator1 - 64);

                    iterator1 = 0;
                    blockLength = block.length;
                    while (iterator1 < blockLength) {
                        tail[iterator1 >> 2] |= block[iterator1] << ((iterator1 & 3) << 3);
                        iterator1 += 1;
                    }

                    tail[iterator1 >> 2] |= 0x80 << ((iterator1 & 3) << 3);

                    if (iterator1 > 55) {
                        md5cycle(state, tail);
                        tail = aSlice.call(empty);
                    }

                    tail[14] = utfStringLength * 8;
                    md5cycle(state, tail);

                    return nToString.call((state[0] >> 4)  & 0x0F, 16) +
                        nToString.call((state[0] >> 0)  & 0x0F, 16) +
                        nToString.call((state[0] >> 12) & 0x0F, 16) +
                        nToString.call((state[0] >> 8)  & 0x0F, 16) +
                        nToString.call((state[0] >> 20) & 0x0F, 16) +
                        nToString.call((state[0] >> 16) & 0x0F, 16) +
                        nToString.call((state[0] >> 28) & 0x0F, 16) +
                        nToString.call((state[0] >> 24) & 0x0F, 16) +
                        nToString.call((state[1] >> 4)  & 0x0F, 16) +
                        nToString.call((state[1] >> 0)  & 0x0F, 16) +
                        nToString.call((state[1] >> 12) & 0x0F, 16) +
                        nToString.call((state[1] >> 8)  & 0x0F, 16) +
                        nToString.call((state[1] >> 20) & 0x0F, 16) +
                        nToString.call((state[1] >> 16) & 0x0F, 16) +
                        nToString.call((state[1] >> 28) & 0x0F, 16) +
                        nToString.call((state[1] >> 24) & 0x0F, 16) +
                        nToString.call((state[2] >> 4)  & 0x0F, 16) +
                        nToString.call((state[2] >> 0)  & 0x0F, 16) +
                        nToString.call((state[2] >> 12) & 0x0F, 16) +
                        nToString.call((state[2] >> 8)  & 0x0F, 16) +
                        nToString.call((state[2] >> 20) & 0x0F, 16) +
                        nToString.call((state[2] >> 16) & 0x0F, 16) +
                        nToString.call((state[2] >> 28) & 0x0F, 16) +
                        nToString.call((state[2] >> 24) & 0x0F, 16) +
                        nToString.call((state[3] >> 4)  & 0x0F, 16) +
                        nToString.call((state[3] >> 0)  & 0x0F, 16) +
                        nToString.call((state[3] >> 12) & 0x0F, 16) +
                        nToString.call((state[3] >> 8)  & 0x0F, 16) +
                        nToString.call((state[3] >> 20) & 0x0F, 16) +
                        nToString.call((state[3] >> 16) & 0x0F, 16) +
                        nToString.call((state[3] >> 28) & 0x0F, 16) +
                        nToString.call((state[3] >> 24) & 0x0F, 16);
                };
            }
        },

        "sha1": {
            external: true,
            string: true,
            value: function (str) {
                var msg = internal.utf8EncodeToCharCodeArray(str),
                    l0 = msg.length,
                    l1 = (l0 * 8) >>> 0,
                    l2 = (l1 / 0x100000000) | 0,
                    l = l0 + 1,
                    H0 = 0x67452301,
                    H1 = 0xEFCDAB89,
                    H2 = 0x98BADCFE,
                    H3 = 0x10325476,
                    H4 = 0xC3D2E1F0,
                    T0,
                    T1,
                    T2,
                    T3,
                    T4,
                    W = [],
                    n = ((l / 4) + 2) / 16,
                    N = n << 0,
                    t,
                    r,
                    i = 0,
                    j;

                aPush.call(msg, 0x80);
                if (N !== n) {
                    N += 1;
                }

                n = N - 1;
                W.length = 80;
                while (i < N) {
                    T0 = H0;
                    T1 = H1;
                    T2 = H2;
                    T3 = H3;
                    T4 = H4;

                    t = i * 64;
                    W[0]  = (msg[t]      << 24) | (msg[t + 1]  << 16) | (msg[t + 2]  << 8) | (msg[t + 3]);
                    W[1]  = (msg[t + 4]  << 24) | (msg[t + 5]  << 16) | (msg[t + 6]  << 8) | (msg[t + 7]);
                    W[2]  = (msg[t + 8]  << 24) | (msg[t + 9]  << 16) | (msg[t + 10] << 8) | (msg[t + 11]);
                    W[3]  = (msg[t + 12] << 24) | (msg[t + 13] << 16) | (msg[t + 14] << 8) | (msg[t + 15]);
                    W[4]  = (msg[t + 16] << 24) | (msg[t + 17] << 16) | (msg[t + 18] << 8) | (msg[t + 19]);
                    W[5]  = (msg[t + 20] << 24) | (msg[t + 21] << 16) | (msg[t + 22] << 8) | (msg[t + 23]);
                    W[6]  = (msg[t + 24] << 24) | (msg[t + 25] << 16) | (msg[t + 26] << 8) | (msg[t + 27]);
                    W[7]  = (msg[t + 28] << 24) | (msg[t + 29] << 16) | (msg[t + 30] << 8) | (msg[t + 31]);
                    W[8]  = (msg[t + 32] << 24) | (msg[t + 33] << 16) | (msg[t + 34] << 8) | (msg[t + 35]);
                    W[9]  = (msg[t + 36] << 24) | (msg[t + 37] << 16) | (msg[t + 38] << 8) | (msg[t + 39]);
                    W[10] = (msg[t + 40] << 24) | (msg[t + 41] << 16) | (msg[t + 42] << 8) | (msg[t + 43]);
                    W[11] = (msg[t + 44] << 24) | (msg[t + 45] << 16) | (msg[t + 46] << 8) | (msg[t + 47]);
                    W[12] = (msg[t + 48] << 24) | (msg[t + 49] << 16) | (msg[t + 50] << 8) | (msg[t + 51]);
                    W[13] = (msg[t + 52] << 24) | (msg[t + 53] << 16) | (msg[t + 54] << 8) | (msg[t + 55]);

                    if (i !== n) {
                        W[14] = (msg[t + 56] << 24) | (msg[t + 57] << 16) | (msg[t + 58] << 8) | (msg[t + 59]);
                        W[15] = (msg[t + 60] << 24) | (msg[t + 61] << 16) | (msg[t + 62] << 8) | (msg[t + 63]);
                    } else {
                        W[14] = l2;
                        W[15] = l1;
                    }

                    W[16] = ((r = W[13] ^ W[8]  ^ W[2]  ^ W[0])  << 1) | (r >>> 31);
                    W[17] = ((r = W[14] ^ W[9]  ^ W[3]  ^ W[1])  << 1) | (r >>> 31);
                    W[18] = ((r = W[15] ^ W[10] ^ W[4]  ^ W[2])  << 1) | (r >>> 31);
                    W[19] = ((r = W[16] ^ W[11] ^ W[5]  ^ W[3])  << 1) | (r >>> 31);
                    W[20] = ((r = W[17] ^ W[12] ^ W[6]  ^ W[4])  << 1) | (r >>> 31);
                    W[21] = ((r = W[18] ^ W[13] ^ W[7]  ^ W[5])  << 1) | (r >>> 31);
                    W[22] = ((r = W[19] ^ W[14] ^ W[8]  ^ W[6])  << 1) | (r >>> 31);
                    W[23] = ((r = W[20] ^ W[15] ^ W[9]  ^ W[7])  << 1) | (r >>> 31);

                    W[24] = ((r = W[21] ^ W[16] ^ W[10] ^ W[8])  << 1) | (r >>> 31);
                    W[25] = ((r = W[22] ^ W[17] ^ W[11] ^ W[9])  << 1) | (r >>> 31);
                    W[26] = ((r = W[23] ^ W[18] ^ W[12] ^ W[10]) << 1) | (r >>> 31);
                    W[27] = ((r = W[24] ^ W[19] ^ W[13] ^ W[11]) << 1) | (r >>> 31);
                    W[28] = ((r = W[25] ^ W[20] ^ W[14] ^ W[12]) << 1) | (r >>> 31);
                    W[29] = ((r = W[26] ^ W[21] ^ W[15] ^ W[13]) << 1) | (r >>> 31);
                    W[30] = ((r = W[27] ^ W[22] ^ W[16] ^ W[14]) << 1) | (r >>> 31);
                    W[31] = ((r = W[28] ^ W[23] ^ W[17] ^ W[15]) << 1) | (r >>> 31);

                    W[32] = ((r = W[29] ^ W[24] ^ W[18] ^ W[16]) << 1) | (r >>> 31);
                    W[33] = ((r = W[30] ^ W[25] ^ W[19] ^ W[17]) << 1) | (r >>> 31);
                    W[34] = ((r = W[31] ^ W[26] ^ W[20] ^ W[18]) << 1) | (r >>> 31);
                    W[35] = ((r = W[32] ^ W[27] ^ W[21] ^ W[19]) << 1) | (r >>> 31);
                    W[36] = ((r = W[33] ^ W[28] ^ W[22] ^ W[20]) << 1) | (r >>> 31);
                    W[37] = ((r = W[34] ^ W[29] ^ W[23] ^ W[21]) << 1) | (r >>> 31);
                    W[38] = ((r = W[35] ^ W[30] ^ W[24] ^ W[22]) << 1) | (r >>> 31);
                    W[39] = ((r = W[36] ^ W[31] ^ W[25] ^ W[23]) << 1) | (r >>> 31);

                    W[40] = ((r = W[37] ^ W[32] ^ W[26] ^ W[24]) << 1) | (r >>> 31);
                    W[41] = ((r = W[38] ^ W[33] ^ W[27] ^ W[25]) << 1) | (r >>> 31);
                    W[42] = ((r = W[39] ^ W[34] ^ W[28] ^ W[26]) << 1) | (r >>> 31);
                    W[43] = ((r = W[40] ^ W[35] ^ W[29] ^ W[27]) << 1) | (r >>> 31);
                    W[44] = ((r = W[41] ^ W[36] ^ W[30] ^ W[28]) << 1) | (r >>> 31);
                    W[45] = ((r = W[42] ^ W[37] ^ W[31] ^ W[29]) << 1) | (r >>> 31);
                    W[46] = ((r = W[43] ^ W[38] ^ W[32] ^ W[30]) << 1) | (r >>> 31);
                    W[47] = ((r = W[44] ^ W[39] ^ W[33] ^ W[31]) << 1) | (r >>> 31);

                    W[48] = ((r = W[45] ^ W[40] ^ W[34] ^ W[32]) << 1) | (r >>> 31);
                    W[49] = ((r = W[46] ^ W[41] ^ W[35] ^ W[33]) << 1) | (r >>> 31);
                    W[50] = ((r = W[47] ^ W[42] ^ W[36] ^ W[34]) << 1) | (r >>> 31);
                    W[51] = ((r = W[48] ^ W[43] ^ W[37] ^ W[35]) << 1) | (r >>> 31);
                    W[52] = ((r = W[49] ^ W[44] ^ W[38] ^ W[36]) << 1) | (r >>> 31);
                    W[53] = ((r = W[50] ^ W[45] ^ W[39] ^ W[37]) << 1) | (r >>> 31);
                    W[54] = ((r = W[51] ^ W[46] ^ W[40] ^ W[38]) << 1) | (r >>> 31);
                    W[55] = ((r = W[52] ^ W[47] ^ W[41] ^ W[39]) << 1) | (r >>> 31);

                    W[56] = ((r = W[53] ^ W[48] ^ W[42] ^ W[40]) << 1) | (r >>> 31);
                    W[57] = ((r = W[54] ^ W[49] ^ W[43] ^ W[41]) << 1) | (r >>> 31);
                    W[58] = ((r = W[55] ^ W[50] ^ W[44] ^ W[42]) << 1) | (r >>> 31);
                    W[59] = ((r = W[56] ^ W[51] ^ W[45] ^ W[43]) << 1) | (r >>> 31);
                    W[60] = ((r = W[57] ^ W[52] ^ W[46] ^ W[44]) << 1) | (r >>> 31);
                    W[61] = ((r = W[58] ^ W[53] ^ W[47] ^ W[45]) << 1) | (r >>> 31);
                    W[62] = ((r = W[59] ^ W[54] ^ W[48] ^ W[46]) << 1) | (r >>> 31);
                    W[63] = ((r = W[60] ^ W[55] ^ W[49] ^ W[47]) << 1) | (r >>> 31);

                    W[64] = ((r = W[61] ^ W[56] ^ W[50] ^ W[48]) << 1) | (r >>> 31);
                    W[65] = ((r = W[62] ^ W[57] ^ W[51] ^ W[49]) << 1) | (r >>> 31);
                    W[66] = ((r = W[63] ^ W[58] ^ W[52] ^ W[50]) << 1) | (r >>> 31);
                    W[67] = ((r = W[64] ^ W[59] ^ W[53] ^ W[51]) << 1) | (r >>> 31);
                    W[68] = ((r = W[65] ^ W[60] ^ W[54] ^ W[52]) << 1) | (r >>> 31);
                    W[69] = ((r = W[66] ^ W[61] ^ W[55] ^ W[53]) << 1) | (r >>> 31);
                    W[70] = ((r = W[67] ^ W[62] ^ W[56] ^ W[54]) << 1) | (r >>> 31);
                    W[71] = ((r = W[68] ^ W[63] ^ W[57] ^ W[55]) << 1) | (r >>> 31);

                    W[72] = ((r = W[69] ^ W[64] ^ W[58] ^ W[56]) << 1) | (r >>> 31);
                    W[73] = ((r = W[70] ^ W[65] ^ W[59] ^ W[57]) << 1) | (r >>> 31);
                    W[74] = ((r = W[71] ^ W[66] ^ W[60] ^ W[58]) << 1) | (r >>> 31);
                    W[75] = ((r = W[72] ^ W[67] ^ W[61] ^ W[59]) << 1) | (r >>> 31);
                    W[76] = ((r = W[73] ^ W[68] ^ W[62] ^ W[60]) << 1) | (r >>> 31);
                    W[77] = ((r = W[74] ^ W[69] ^ W[63] ^ W[61]) << 1) | (r >>> 31);
                    W[78] = ((r = W[75] ^ W[70] ^ W[64] ^ W[62]) << 1) | (r >>> 31);
                    W[79] = ((r = W[76] ^ W[71] ^ W[65] ^ W[63]) << 1) | (r >>> 31);

                    j = 0;
                    while (j < 80) {
                        t = ((T0 << 5) | (T0 >>> 27)) + T4 + W[j];
                        r = (j / 20) | 0;
                        if (r === 0) {
                            t += ((T1 & T2) ^ (~T1 & T3)) + 0x5A827999;
                        } else if (r === 1) {
                            t += (T1 ^ T2 ^ T3) + 0x6ED9EBA1;
                        } else if (r === 2) {
                            t += ((T1 & T2) ^ (T1 & T3) ^ (T2 & T3)) + 0x8F1BBCDC;
                        } else {
                            t += (T1 ^ T2 ^ T3) + 0xCA62C1D6;
                        }

                        T4 = T3;
                        T3 = T2;
                        T2 = (T1 << 30) | (T1 >>> 2);
                        T1 = T0;
                        T0 = t >>> 0;

                        j += 1;
                    }

                    H0 = (H0 + T0) >>> 0;
                    H1 = (H1 + T1) >>> 0;
                    H2 = (H2 + T2) >>> 0;
                    H3 = (H3 + T3) >>> 0;
                    H4 = (H4 + T4) >>> 0;

                    i += 1;
                }

                return internal.toHexStr(H0) + internal.toHexStr(H1) + internal.toHexStr(H2) + internal.toHexStr(H3) + internal.toHexStr(H4);
            }
        },

        "sha256": {
            generate: true,
            external: true,
            string: true,
            value:  function () {
                var kVals = [
                        0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
                        0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
                        0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
                        0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
                        0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
                        0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
                        0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
                        0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
                    ],
                    empty = [
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                    ];

                function sha256Transform(x, buffer) {
                    var t1,
                        t2,
                        W = [
                            ((buffer[3])  | (buffer[2]  << 8) | (buffer[1]  << 16) | (buffer[0]  << 24)),
                            ((buffer[7])  | (buffer[6]  << 8) | (buffer[5]  << 16) | (buffer[4]  << 24)),
                            ((buffer[11]) | (buffer[10] << 8) | (buffer[9]  << 16) | (buffer[8]  << 24)),
                            ((buffer[15]) | (buffer[14] << 8) | (buffer[13] << 16) | (buffer[12] << 24)),
                            ((buffer[19]) | (buffer[18] << 8) | (buffer[17] << 16) | (buffer[16] << 24)),
                            ((buffer[23]) | (buffer[22] << 8) | (buffer[21] << 16) | (buffer[20] << 24)),
                            ((buffer[27]) | (buffer[26] << 8) | (buffer[25] << 16) | (buffer[24] << 24)),
                            ((buffer[31]) | (buffer[30] << 8) | (buffer[29] << 16) | (buffer[28] << 24)),
                            ((buffer[35]) | (buffer[34] << 8) | (buffer[33] << 16) | (buffer[32] << 24)),
                            ((buffer[39]) | (buffer[38] << 8) | (buffer[37] << 16) | (buffer[36] << 24)),
                            ((buffer[43]) | (buffer[42] << 8) | (buffer[41] << 16) | (buffer[40] << 24)),
                            ((buffer[47]) | (buffer[46] << 8) | (buffer[45] << 16) | (buffer[44] << 24)),
                            ((buffer[51]) | (buffer[50] << 8) | (buffer[49] << 16) | (buffer[48] << 24)),
                            ((buffer[55]) | (buffer[54] << 8) | (buffer[53] << 16) | (buffer[52] << 24)),
                            ((buffer[59]) | (buffer[58] << 8) | (buffer[57] << 16) | (buffer[56] << 24)),
                            ((buffer[63]) | (buffer[62] << 8) | (buffer[61] << 16) | (buffer[60] << 24))
                        ],
                        i = 0,
                        temp0,
                        temp1,
                        H0 = x[0],
                        H1 = x[1],
                        H2 = x[2],
                        H3 = x[3],
                        H4 = x[4],
                        H5 = x[5],
                        H6 = x[6],
                        H7 = x[7];

                    while (i < 64) {
                        t1 = H7 + (((H4 >>> 6) | (H4 << 26)) ^ ((H4 >>> 11) | (H4 << 21)) ^ ((H4 >>> 25) | (H4 << 7))) + (((H4 & H5) ^ (~H4 & H6))) + kVals[i];
                        t2 = (((H0 >>> 2) | (H0 << 30)) ^ ((H0 >>> 13) | (H0 << 19)) ^ ((H0 >>> 22) | (H0 << 10))) + ((H0 & H1) ^ (H0 & H2) ^ (H1 & H2));
                        if (i < 16) {
                            t1 += W[i];
                        } else {
                            temp0 = W[(i + 14) & 0x0F];
                            temp1 = W[(i + 1) & 0x0F];
                            t1 += (W[i & 0x0F] += (((temp0 >>> 17) | (temp0 << 15)) ^ ((temp0 >>> 19) | (temp0 << 13)) ^ (temp0 >>> 10)) + W[(i + 9) & 0x0F] + (((temp1 >>> 7) | (temp1 << 25)) ^ ((temp1 >>> 18) | (temp1 << 14)) ^ (temp1 >>> 3)));
                        }

                        H7 = H6;
                        H6 = H5;
                        H5 = H4;
                        H4 = (H3 + t1) >>> 0;
                        H3 = H2;
                        H2 = H1;
                        H1 = H0;
                        H0 = (t1 + t2) >>> 0;

                        i += 1;
                    }

                    x[0] = (x[0] + H0) >>> 0;
                    x[1] = (x[1] + H1) >>> 0;
                    x[2] = (x[2] + H2) >>> 0;
                    x[3] = (x[3] + H3) >>> 0;
                    x[4] = (x[4] + H4) >>> 0;
                    x[5] = (x[5] + H5) >>> 0;
                    x[6] = (x[6] + H6) >>> 0;
                    x[7] = (x[7] + H7) >>> 0;
                }

                return function (str) {
                    var count0 = 0,
                        count1 = 0,
                        ihash = [0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19],
                        msg = internal.utf8EncodeToCharCodeArray(str),
                        inputLen = msg.length,
                        buffer =  [],
                        i = 0,
                        j,
                        curpos = 0,
                        index = (count0 >> 3) & 0x3F,
                        remainder = inputLen & 0x3F,
                        temp = inputLen << 3;

                    count0 += temp;
                    if (count0 !== temp) {
                        count1 += 1;
                    }

                    count1 += inputLen >> 29;

                    buffer.length = 64;
                    while (i + 63 < inputLen) {
                        j = index;
                        while (j < 64) {
                            buffer[j] = msg[curpos];
                            curpos += 1;
                            j += 1;
                        }

                        sha256Transform(ihash, buffer);
                        index = 0;

                        i += 64;
                    }

                    buffer = aSlice.call(empty);
                    j = 0;
                    while (j < remainder) {
                        buffer[j] = msg[curpos];
                        curpos += 1;
                        j += 1;
                    }

                    index = ((count0 >> 3) & 0x3F);
                    buffer[index] = 0x80;
                    index += 1;
                    if (index > 56) {
                        sha256Transform(ihash, buffer);
                        buffer = aSlice.call(empty);
                    }

                    buffer[56] = count1 >>> 24;
                    buffer[57] = count1 >>> 16;
                    buffer[58] = count1 >>> 8;
                    buffer[59] = count1;
                    buffer[60] = count0 >>> 24;
                    buffer[61] = count0 >>> 16;
                    buffer[62] = count0 >>> 8;
                    buffer[63] = count0;
                    sha256Transform(ihash, buffer);

                    return internal.toHexStr(ihash[0]) + internal.toHexStr(ihash[1]) +
                        internal.toHexStr(ihash[2]) + internal.toHexStr(ihash[3]) +
                        internal.toHexStr(ihash[4]) + internal.toHexStr(ihash[5]) +
                        internal.toHexStr(ihash[6]) + internal.toHexStr(ihash[7]);
                };
            }
        },

        "AES": {
            generate: true,
            external: true,
            string: true,
            value: function () {
                var sBox = [
                        0x63, 0x7C, 0x77, 0x7B, 0xF2, 0x6B, 0x6F, 0xC5, 0x30, 0x01, 0x67, 0x2B, 0xFE, 0xD7, 0xAB, 0x76,
                        0xCA, 0x82, 0xC9, 0x7D, 0xFA, 0x59, 0x47, 0xF0, 0xAD, 0xD4, 0xA2, 0xAF, 0x9C, 0xA4, 0x72, 0xC0,
                        0xB7, 0xFD, 0x93, 0x26, 0x36, 0x3F, 0xF7, 0xCC, 0x34, 0xA5, 0xE5, 0xF1, 0x71, 0xD8, 0x31, 0x15,
                        0x04, 0xC7, 0x23, 0xC3, 0x18, 0x96, 0x05, 0x9A, 0x07, 0x12, 0x80, 0xE2, 0xEB, 0x27, 0xB2, 0x75,
                        0x09, 0x83, 0x2C, 0x1A, 0x1B, 0x6E, 0x5A, 0xA0, 0x52, 0x3B, 0xD6, 0xB3, 0x29, 0xE3, 0x2F, 0x84,
                        0x53, 0xD1, 0x00, 0xED, 0x20, 0xFC, 0xB1, 0x5B, 0x6A, 0xCB, 0xBE, 0x39, 0x4A, 0x4C, 0x58, 0xCF,
                        0xD0, 0xEF, 0xAA, 0xFB, 0x43, 0x4D, 0x33, 0x85, 0x45, 0xF9, 0x02, 0x7F, 0x50, 0x3C, 0x9F, 0xA8,
                        0x51, 0xA3, 0x40, 0x8F, 0x92, 0x9D, 0x38, 0xF5, 0xBC, 0xB6, 0xDA, 0x21, 0x10, 0xFF, 0xF3, 0xD2,
                        0xCD, 0x0C, 0x13, 0xEC, 0x5F, 0x97, 0x44, 0x17, 0xC4, 0xA7, 0x7E, 0x3D, 0x64, 0x5D, 0x19, 0x73,
                        0x60, 0x81, 0x4F, 0xDC, 0x22, 0x2A, 0x90, 0x88, 0x46, 0xEE, 0xB8, 0x14, 0xDE, 0x5E, 0x0B, 0xDB,
                        0xE0, 0x32, 0x3A, 0x0A, 0x49, 0x06, 0x24, 0x5C, 0xC2, 0xD3, 0xAC, 0x62, 0x91, 0x95, 0xE4, 0x79,
                        0xE7, 0xC8, 0x37, 0x6D, 0x8D, 0xD5, 0x4E, 0xA9, 0x6C, 0x56, 0xF4, 0xEA, 0x65, 0x7A, 0xAE, 0x08,
                        0xBA, 0x78, 0x25, 0x2E, 0x1C, 0xA6, 0xB4, 0xC6, 0xE8, 0xDD, 0x74, 0x1F, 0x4B, 0xBD, 0x8B, 0x8A,
                        0x70, 0x3E, 0xB5, 0x66, 0x48, 0x03, 0xF6, 0x0E, 0x61, 0x35, 0x57, 0xB9, 0x86, 0xC1, 0x1D, 0x9E,
                        0xE1, 0xF8, 0x98, 0x11, 0x69, 0xD9, 0x8E, 0x94, 0x9B, 0x1E, 0x87, 0xE9, 0xCE, 0x55, 0x28, 0xDF,
                        0x8C, 0xA1, 0x89, 0x0D, 0xBF, 0xE6, 0x42, 0x68, 0x41, 0x99, 0x2D, 0x0F, 0xB0, 0x54, 0xBB, 0x16
                    ],
                    rCon = [
                        [0x00, 0x00, 0x00, 0x00],
                        [0x01, 0x00, 0x00, 0x00],
                        [0x02, 0x00, 0x00, 0x00],
                        [0x04, 0x00, 0x00, 0x00],
                        [0x08, 0x00, 0x00, 0x00],
                        [0x10, 0x00, 0x00, 0x00],
                        [0x20, 0x00, 0x00, 0x00],
                        [0x40, 0x00, 0x00, 0x00],
                        [0x80, 0x00, 0x00, 0x00],
                        [0x1B, 0x00, 0x00, 0x00],
                        [0x36, 0x00, 0x00, 0x00]
                    ];

                function cipher(output, input, w) {
                    var Nr = (w.length >> 2) - 1,
                        state = [
                            [input[0], input[4], input[8],  input[12]],
                            [input[1], input[5], input[9],  input[13]],
                            [input[2], input[6], input[10], input[14]],
                            [input[3], input[7], input[11], input[15]]
                        ],
                        t = [],
                        round = 1,
                        i,
                        tmp,
                        a0,
                        a1,
                        a2,
                        a3,
                        b0,
                        b1,
                        b2,
                        b3;

                    a0 = w[0];
                    a1 = w[1];
                    a2 = w[2];
                    a3 = w[3];
                    tmp = state[0];
                    tmp[0] ^= a0[0];
                    tmp[1] ^= a1[0];
                    tmp[2] ^= a2[0];
                    tmp[3] ^= a3[0];
                    tmp = state[1];
                    tmp[0] ^= a0[1];
                    tmp[1] ^= a1[1];
                    tmp[2] ^= a2[1];
                    tmp[3] ^= a3[1];
                    tmp = state[2];
                    tmp[0] ^= a0[2];
                    tmp[1] ^= a1[2];
                    tmp[2] ^= a2[2];
                    tmp[3] ^= a3[2];
                    tmp = state[3];
                    tmp[0] ^= a0[3];
                    tmp[1] ^= a1[3];
                    tmp[2] ^= a2[3];
                    tmp[3] ^= a3[3];

                    t.length = 12;
                    while (round < Nr) {
                        tmp = state[0];
                        tmp[0] = sBox[tmp[0]];
                        tmp[1] = sBox[tmp[1]];
                        tmp[2] = sBox[tmp[2]];
                        tmp[3] = sBox[tmp[3]];
                        tmp = state[1];
                        tmp[0] = sBox[tmp[0]];
                        tmp[1] = sBox[tmp[1]];
                        tmp[2] = sBox[tmp[2]];
                        tmp[3] = sBox[tmp[3]];
                        tmp = state[2];
                        tmp[0] = sBox[tmp[0]];
                        tmp[1] = sBox[tmp[1]];
                        tmp[2] = sBox[tmp[2]];
                        tmp[3] = sBox[tmp[3]];
                        tmp = state[3];
                        tmp[0] = sBox[tmp[0]];
                        tmp[1] = sBox[tmp[1]];
                        tmp[2] = sBox[tmp[2]];
                        tmp[3] = sBox[tmp[3]];

                        tmp = state[1];
                        t[0]  = tmp[1];
                        t[1]  = tmp[2];
                        t[2]  = tmp[3];
                        t[3]  = tmp[0];
                        tmp = state[2];
                        t[4]  = tmp[2];
                        t[5]  = tmp[3];
                        t[6]  = tmp[0];
                        t[7]  = tmp[1];
                        tmp = state[3];
                        t[8]  = tmp[3];
                        t[9]  = tmp[0];
                        t[10] = tmp[1];
                        t[11] = tmp[2];

                        tmp = state[1];
                        tmp[0] = t[0];
                        tmp[1] = t[1];
                        tmp[2] = t[2];
                        tmp[3] = t[3];
                        tmp = state[2];
                        tmp[0] = t[4];
                        tmp[1] = t[5];
                        tmp[2] = t[6];
                        tmp[3] = t[7];
                        tmp = state[3];
                        tmp[0] = t[8];
                        tmp[1] = t[9];
                        tmp[2] = t[10];
                        tmp[3] = t[11];

                        i = 0;
                        while (i < 4) {
                            a0 = state[0][i];
                            tmp = a0 << 1;
                            b0 = a0 & 0x80 ? tmp ^ 0x011B : tmp;

                            a1 = state[1][i];
                            tmp = a1 << 1;
                            b1 = a1 & 0x80 ? tmp ^ 0x011B : tmp;

                            a2 = state[2][i];
                            tmp = a2 << 1;
                            b2 = a2 & 0x80 ? tmp ^ 0x011B : tmp;

                            a3 = state[3][i];
                            tmp = a3 << 1;
                            b3 = a3 & 0x80 ? tmp ^ 0x011B : tmp;

                            state[0][i] = b0 ^ a1 ^ b1 ^ a2 ^ a3;
                            state[1][i] = a0 ^ b1 ^ a2 ^ b2 ^ a3;
                            state[2][i] = a0 ^ a1 ^ b2 ^ a3 ^ b3;
                            state[3][i] = a0 ^ b0 ^ a1 ^ a2 ^ b3;

                            i += 1;
                        }

                        tmp = round * 4;
                        a0 = w[tmp];
                        a1 = w[tmp + 1];
                        a2 = w[tmp + 2];
                        a3 = w[tmp + 3];
                        tmp = state[0];
                        tmp[0] ^= a0[0];
                        tmp[1] ^= a1[0];
                        tmp[2] ^= a2[0];
                        tmp[3] ^= a3[0];
                        tmp = state[1];
                        tmp[0] ^= a0[1];
                        tmp[1] ^= a1[1];
                        tmp[2] ^= a2[1];
                        tmp[3] ^= a3[1];
                        tmp = state[2];
                        tmp[0] ^= a0[2];
                        tmp[1] ^= a1[2];
                        tmp[2] ^= a2[2];
                        tmp[3] ^= a3[2];
                        tmp = state[3];
                        tmp[0] ^= a0[3];
                        tmp[1] ^= a1[3];
                        tmp[2] ^= a2[3];
                        tmp[3] ^= a3[3];

                        round += 1;
                    }

                    tmp = state[0];
                    tmp[0] = sBox[tmp[0]];
                    tmp[1] = sBox[tmp[1]];
                    tmp[2] = sBox[tmp[2]];
                    tmp[3] = sBox[tmp[3]];
                    tmp = state[1];
                    tmp[0] = sBox[tmp[0]];
                    tmp[1] = sBox[tmp[1]];
                    tmp[2] = sBox[tmp[2]];
                    tmp[3] = sBox[tmp[3]];
                    tmp = state[2];
                    tmp[0] = sBox[tmp[0]];
                    tmp[1] = sBox[tmp[1]];
                    tmp[2] = sBox[tmp[2]];
                    tmp[3] = sBox[tmp[3]];
                    tmp = state[3];
                    tmp[0] = sBox[tmp[0]];
                    tmp[1] = sBox[tmp[1]];
                    tmp[2] = sBox[tmp[2]];
                    tmp[3] = sBox[tmp[3]];

                    tmp = state[1];
                    t[0]  = tmp[1];
                    t[1]  = tmp[2];
                    t[2]  = tmp[3];
                    t[3]  = tmp[0];
                    tmp = state[2];
                    t[4]  = tmp[2];
                    t[5]  = tmp[3];
                    t[6]  = tmp[0];
                    t[7]  = tmp[1];
                    tmp = state[3];
                    t[8]  = tmp[3];
                    t[9]  = tmp[0];
                    t[10] = tmp[1];
                    t[11] = tmp[2];

                    tmp = state[1];
                    tmp[0] = t[0];
                    tmp[1] = t[1];
                    tmp[2] = t[2];
                    tmp[3] = t[3];
                    tmp = state[2];
                    tmp[0] = t[4];
                    tmp[1] = t[5];
                    tmp[2] = t[6];
                    tmp[3] = t[7];
                    tmp = state[3];
                    tmp[0] = t[8];
                    tmp[1] = t[9];
                    tmp[2] = t[10];
                    tmp[3] = t[11];

                    tmp = Nr * 4;
                    a0 = w[tmp];
                    a1 = w[tmp + 1];
                    a2 = w[tmp + 2];
                    a3 = w[tmp + 3];
                    tmp = state[0];
                    tmp[0] ^= a0[0];
                    tmp[1] ^= a1[0];
                    tmp[2] ^= a2[0];
                    tmp[3] ^= a3[0];
                    tmp = state[1];
                    tmp[0] ^= a0[1];
                    tmp[1] ^= a1[1];
                    tmp[2] ^= a2[1];
                    tmp[3] ^= a3[1];
                    tmp = state[2];
                    tmp[0] ^= a0[2];
                    tmp[1] ^= a1[2];
                    tmp[2] ^= a2[2];
                    tmp[3] ^= a3[2];
                    tmp = state[3];
                    tmp[0] ^= a0[3];
                    tmp[1] ^= a1[3];
                    tmp[2] ^= a2[3];
                    tmp[3] ^= a3[3];

                    a0 = state[0];
                    a1 = state[1];
                    a2 = state[2];
                    a3 = state[3];
                    output.length = 16;
                    output[0]  = a0[0];
                    output[1]  = a1[0];
                    output[2]  = a2[0];
                    output[3]  = a3[0];
                    output[4]  = a0[1];
                    output[5]  = a1[1];
                    output[6]  = a2[1];
                    output[7]  = a3[1];
                    output[8]  = a0[2];
                    output[9]  = a1[2];
                    output[10] = a2[2];
                    output[11] = a3[2];
                    output[12] = a0[3];
                    output[13] = a1[3];
                    output[14] = a2[3];
                    output[15] = a3[3];
                }

                function keyExpansion(key) {
                    var Nk = key.length >> 2,
                        Nl = 4 * (Nk + 7),
                        w = [],
                        temp = [],
                        i = 0,
                        r,
                        t;

                    w.length = Nl;
                    while (i < Nk) {
                        t = 4 * i;
                        w[i] = [key[t], key[t + 1], key[t + 2], key[t + 3]];
                        i += 1;
                    }

                    temp.length = 4;
                    while (i < Nl) {
                        w[i] = [];
                        w[i].length = 4;

                        t = w[i - 1];
                        temp[0] = t[0];
                        temp[1] = t[1];
                        temp[2] = t[2];
                        temp[3] = t[3];

                        r = i % Nk;
                        if (r === 0) {
                            t = temp[0];
                            temp[0] = sBox[temp[0] = temp[1]];
                            temp[1] = sBox[temp[1] = temp[2]];
                            temp[2] = sBox[temp[2] = temp[3]];
                            temp[3] = sBox[temp[3] = t];

                            t = rCon[i / Nk];
                            temp[0] ^= t[0];
                            temp[1] ^= t[1];
                            temp[2] ^= t[2];
                            temp[3] ^= t[3];
                        } else if (Nk > 6 && r === 4) {
                            temp[0] = sBox[temp[0]];
                            temp[1] = sBox[temp[1]];
                            temp[2] = sBox[temp[2]];
                            temp[3] = sBox[temp[3]];
                        }

                        r = w[i];
                        t = w[i - Nk];
                        r[0] = t[0] ^ temp[0];
                        r[1] = t[1] ^ temp[1];
                        r[2] = t[2] ^ temp[2];
                        r[3] = t[3] ^ temp[3];

                        i += 1;
                    }

                    return w;
                }

                return {
                    'encrypt': function (plaintext, password, nBits) {
                        plaintext = internal.utf8EncodeToCharCodeArray(plaintext);
                        password = internal.utf8EncodeToCharCodeArray(password);
                        var nBytes       = ((nBits === 128 || nBits === 192 || nBits === 256) ? nBits : 256) >> 3,
                            pwBytes      = [],
                            i            = 0,
                            counterBlock = [],
                            nonce        = Date.now(),
                            nonceSec     = floor(nonce / 1000),
                            nonceMs      = nonce % 1000,
                            nonceRnd     = (random() * 0xFFFF) | 0,
                            key          = [],
                            ctrTxt,
                            keySchedule,
                            blockCount,
                            bc1,
                            ciphertxt    = [],
                            b            = 0,
                            t1,
                            ptl1         = plaintext.length - 1,
                            bl1          = (ptl1 & 15) + 1,
                            cipherCntr   = [],
                            blockLength,
                            cipherChar   = [];

                        pwBytes.length = nBytes;
                        while (i < nBytes) {
                            pwBytes[i] = password[i] & 0xFF;
                            i += 1;
                        }

                        counterBlock[0] = (nonceSec >>> 0) & 0xFF;
                        counterBlock[1] = (nonceSec >>> 8) & 0xFF;
                        counterBlock[2] = (nonceRnd >>> 0) & 0xFF;
                        counterBlock[3] = (nonceRnd >>> 8) & 0xFF;
                        counterBlock[4] = counterBlock[5] = counterBlock[6] = counterBlock[7] = nonceMs & 0xFF;

                        ctrTxt = String.fromCharCode.apply(null, counterBlock);

                        cipher(key, pwBytes, keyExpansion(pwBytes));
                        keySchedule = keyExpansion(key.concat(key.slice(0, nBytes - 16)));
                        ciphertxt.length = blockCount = ceil(plaintext.length / 16);
                        bc1 = blockCount - 1;
                        while (b < blockCount) {
                            t1 = b / 0x100000000;
                            counterBlock[8]  = (t1 >>> 24);
                            counterBlock[9]  = (t1 >>> 16);
                            counterBlock[10] = (t1 >>> 8);
                            counterBlock[11] = (t1 >>> 0);
                            counterBlock[12] = (b  >>> 24) & 0xFF;
                            counterBlock[13] = (b  >>> 16) & 0xFF;
                            counterBlock[14] = (b  >>> 8)  & 0xFF;
                            counterBlock[15] = (b  >>> 0)  & 0xFF;

                            cipher(cipherCntr, counterBlock, keySchedule);
                            if (b < bc1) {
                                blockLength = 16;
                            } else {
                                blockLength = bl1;
                            }

                            cipherChar.length = blockLength;
                            i = 0;
                            t1 = b * 16;
                            while (i < blockLength) {
                                cipherChar[i] = String.fromCharCode(cipherCntr[i] ^ plaintext[t1 + i]);
                                i += 1;
                            }

                            ciphertxt[b] = cipherChar.join('');
                            b += 1;
                        }

                        return internal.btoa(ctrTxt + ciphertxt.join(''));
                    },

                    'decrypt': function (ciphertext, password, nBits) {
                        ciphertext = internal.atob(ciphertext);
                        password = internal.utf8EncodeToCharCodeArray(password);
                        var nBytes       = ((nBits === 128 || nBits === 192 || nBits === 256) ? nBits : 256) >> 3,
                            pwBytes      = [],
                            i            = 0,
                            l            = 0,
                            key          = [],
                            counterBlock = [],
                            keySchedule,
                            nBlocks,
                            t1,
                            ct           = [],
                            b            = 0,
                            plaintxt     = [],
                            cipherCntr   = [],
                            plaintxtByte = [];

                        pwBytes.length = nBytes;
                        while (i < nBytes) {
                            pwBytes[i] = password[i] & 0xFF;
                            i += 1;
                        }

                        counterBlock[0] = ciphertext.charCodeAt(0);
                        counterBlock[1] = ciphertext.charCodeAt(1);
                        counterBlock[2] = ciphertext.charCodeAt(2);
                        counterBlock[3] = ciphertext.charCodeAt(3);
                        counterBlock[4] = ciphertext.charCodeAt(4);
                        counterBlock[5] = ciphertext.charCodeAt(5);
                        counterBlock[6] = ciphertext.charCodeAt(6);
                        counterBlock[7] = ciphertext.charCodeAt(7);

                        cipher(key, pwBytes, keyExpansion(pwBytes));
                        keySchedule = keyExpansion(key.concat(key.slice(0, nBytes - 16)));
                        ct.length = nBlocks = ceil((ciphertext.length - 8) / 16);
                        while (b < nBlocks) {
                            t1 = 8 + b * 16;
                            ct[b] = ciphertext.slice(t1, t1 + 16);
                            b += 1;
                        }

                        ciphertext = ct;
                        plaintxt.length = nBlocks;
                        b = 0;
                        while (b < nBlocks) {
                            t1 = (b + 1) / 0x100000000 - 1;
                            counterBlock[8]  = (t1 >>> 24) & 0xFF;
                            counterBlock[9]  = (t1 >>> 16) & 0xFF;
                            counterBlock[10] = (t1 >>> 8)  & 0xFF;
                            counterBlock[11] = (t1 >>> 0)  & 0xFF;
                            counterBlock[12] = (b  >>> 24) & 0xFF;
                            counterBlock[13] = (b  >>> 16) & 0xFF;
                            counterBlock[14] = (b  >>> 8)  & 0xFF;
                            counterBlock[15] = (b  >>> 0)  & 0xFF;

                            cipher(cipherCntr, counterBlock, keySchedule);
                            plaintxtByte.length = l = ciphertext[b].length;
                            i = 0;
                            while (i < l) {
                                plaintxtByte[i] = String.fromCharCode(cipherCntr[i] ^ ciphertext[b].charCodeAt(i));
                                i += 1;
                            }

                            plaintxt[b] = plaintxtByte.join('');
                            b += 1;
                        }

                        return internal.utf8Decode(plaintxt.join(''));
                    }
                };
            }
        }
    };

    ///////////////////////////
    //       Internal
    ///////////////////////////

    aForEach.call(objectKeys(methods), function (name) {
        var props = methods[name];

        if (props.generate !== false) {
            if (props.generate === true) {
                internal[name] = props.value();
            } else {
                internal[name] = props.value;
            }
        }
    });

    ///////////////////////////
    //       Utility
    ///////////////////////////

    chainResult = function (obj) {
        if (this.beingChained === true) {
            return utility(obj).chain();
        }

        return obj;
    };

    function Cache(keys) {
        this.refs = [];
        this.vals = [];
        this.missKeys = keys;
        this.results = {};
        return this;
    }

    Cache.prototype.lookup = function (ref) {
        var proto,
            index;

        switch (typeof ref) {
        case "boolean":
            proto = Boolean.prototype;
            break;
        case "number":
            proto = Number.prototype;
            break;
        case "string":
            proto = String.prototype;
            break;
        default:
            proto = getPrototypeOf(ref);
        }

        this.results.proto = oValueOf.call(proto);
        index = aIndexOf.call(this.refs, this.results.proto);

        if (index === -1) {
            aPush.call(this.refs, this.results.proto);
            this.results.found = false;
            this.results.entry = {};
            this.results.keys = this.missKeys;
        } else {
            this.results.found = true;
            this.results.entry = this.vals[index];
            this.results.keys = objectKeys(this.vals[index] || refObject);
        }

        return this.results;
    };

    Cache.prototype.set = function () {
        if (!this.results.found) {
            aPush.call(this.vals, this.results.entry);
        }

        return this.vals;
    };

    function makeRelavantFunction(prop) {
        return function () {
            var args = aSlice.call(arguments);

            aUnshift.call(args, this.refersTo);

            return chainResult.call(this, prop.value.apply(null, args));
        };
    }

    function makeRelavantValue(prop) {
        return function () {
            return chainResult.call(this, prop.value);
        };
    }

    mixinRelavantCache = new Cache(objectKeys(methods));

    function mixinRelavant(obj, refObj) {
        var cache = mixinRelavantCache.lookup(refObj),
            l = cache.keys.length,
            i = 0,
            name,
            method,
            prop;

        while (i < l) {
            name = cache.keys[i];

            if (cache.found) {
                defineProperty(obj, name, cache.entry[name]);
            } else if (!internal.hasOwn(obj, name) && (method = methods[name]).external && method.prototypal !== true && (method[internal.type(obj.refersTo)] || (typeof method.test === "function" && method.test(obj.refersTo)))) {
                prop = getOwnPropertyDescriptor(internal, name);

                if (typeof prop.value === "function") {
                    cache.entry[name] = {
                        value: makeRelavantFunction(prop)
                    };
                } else {
                    cache.entry[name] = {
                        get: makeRelavantValue(prop)
                    };
                }

                defineProperty(obj, name, cache.entry[name]);
            }

            i += 1;
        }

        mixinRelavantCache.set();
    }

    mixinFromOtherCache = new Cache();

    mixinFromOtherIgnore = [
        "constructor",
        "prototype",
        "hasOwnProperty",
        "propertyIsEnum",
        "propertyIsEnumerable",
        "isPrototypeOf",
        "valueOf",
        "toString",
        "toLocaleString",
        "callee",
        "caller",
        "__defineGetter__",
        "__lookupGetter__",
        "__defineSetter__",
        "__lookupSetter__"
    ];

    function makeOtherFunction(prop) {
        return function () {
            return chainResult.call(this, prop.value.apply(this.refersTo, arguments));
        };
    }

    function makeOtherValue(name) {
        return function () {
            return chainResult.call(this, this.refersTo[name]);
        };
    }

    function makeOtherSet(name) {
        return function (val) {
            this.refersTo[name] = val;
            return this;
        };
    }

    function mixinFromOther(obj, inheritFrom) {
        var cache = mixinFromOtherCache.lookup(inheritFrom),
            l,
            i = 0,
            name,
            prop;

        if (!cache.found) {
            cache.keys = getOwnPropertyNames(cache.proto);
        }

        l = cache.keys.length;
        while (i < l) {
            name = cache.keys[i];

            if (cache.found) {
                defineProperty(obj, name, cache.entry[name]);
            } else if (aIndexOf.call(mixinFromOtherIgnore, name) === -1) {
                try {
                    prop = getOwnPropertyDescriptor(cache.proto, name);

                    if (typeof prop.value === "function") {
                        cache.entry[name] = {
                            value: makeOtherFunction(prop)
                        };
                    } else if (typeof prop.get === "function") {
                        if (typeof prop.set === "function") {
                            cache.entry[name] = {
                                get: makeOtherValue(name),
                                set: makeOtherSet(name)
                            };
                        } else {
                            cache.entry[name] = {
                                get: makeOtherValue(name)
                            };
                        }
                    } else if (typeof prop.set === "function") {
                        cache.entry[name] = {
                            set: makeOtherSet(name)
                        };
                    } else {
                        cache.entry[name] = {
                            get: makeOtherValue(name)
                        };
                    }

                    defineProperty(obj, name, cache.entry[name]);
                } catch (e) {
                    // Catch for FireFox bug https://bugzilla.mozilla.org/show_bug.cgi?id=560072
                }
            }

            i += 1;
        }

        mixinFromOtherCache.set();
    }

    Utility = function (obj) {
        if (obj instanceof Utility) {
            return obj;
        }

        if (!(this instanceof Utility)) {
            var x = new Utility(obj);

            if (obj !== refUndefined && obj !== null) {
                mixinFromOther(x, obj);
                mixinRelavant(x, obj);
            }

            return x;
        }

        defineProperty(this, "refersTo", {
            enumerable: true,
            value: obj
        });

        return this;
    };

    defineProperties(Utility, {
        "chain": {
            value: function (obj) {
                return utility(obj).chain();
            }
        }
    });

    defineProperties(Utility.prototype, {
        "value": {
            get: function () {
                return this.refersTo;
            }
        },

        "valueOf": {
            value: function () {
                if (internal.isPrimitive(this.refersTo)) {
                    return this.refersTo;
                }

                return chainResult.call(this, this.refersTo.valueOf(arguments));
            }
        },

        "toString": {
            value: function () {
                if (internal.isPrimitive(this.refersTo)) {
                    return String(this.refersTo);
                }

                return chainResult.call(this, this.refersTo.toString(arguments));
            }
        },

        "toLocaleString": {
            value: function () {
                if (internal.isPrimitive(this.refersTo)) {
                    return String(this.refersTo);
                }

                return chainResult.call(this, this.refersTo.toLocaleString(arguments));
            }
        },

        "chain": {
            value: function () {
                defineProperty(this, "beingChained", {
                    enumerable: true,
                    value: true
                });

                return this;
            }
        }
    });

    aForEach.call(objectKeys(methods), function (name) {
        var method = methods[name],
            props,
            protoProps;

        if (method.external) {
            props = {
                value: getOwnPropertyDescriptor(internal, name).value
            };

            props.configurable = method.configurable === true;
            props.enumerable = method.enumerable === true;
            props.writable = method.writable === true;
            defineProperty(Utility, name, props);

            if (method.prototypal) {
                protoProps = {};

                if (typeof props.value === "function") {
                    protoProps.value = function () {
                        var args = aSlice.call(arguments);

                        aUnshift.call(args, this.refersTo);

                        return chainResult.call(this, props.value.apply(null, args));
                    };
                } else {
                    protoProps.value =  function () {
                        return chainResult.call(this, props.value);
                    };
                }

                defineProperty(Utility.prototype, name, protoProps);
            }
        }
    });

    ///////////////////////////
    //       Expose
    ///////////////////////////

    window.$u = utility = Utility;
}());
