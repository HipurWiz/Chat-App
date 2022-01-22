import { refEqual, queryEqual, onSnapshot, getDocsFromServer, getDocsFromCache, getDocs, getDocFromServer, getDocFromCache, getDoc } from 'firebase/firestore';
import { useMemo, useReducer, useRef, useEffect } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var defaultState = function (defaultValue) {
    return {
        loading: defaultValue === undefined || defaultValue === null,
        value: defaultValue,
    };
};
var reducer = function () { return function (state, action) {
    switch (action.type) {
        case 'error':
            return __assign(__assign({}, state), { error: action.error, loading: false, value: undefined });
        case 'reset':
            return defaultState(action.defaultValue);
        case 'value':
            return __assign(__assign({}, state), { error: undefined, loading: false, value: action.value });
        default:
            return state;
    }
}; };
var useLoadingValue = (function (getDefaultValue) {
    var defaultValue = getDefaultValue ? getDefaultValue() : undefined;
    var _a = useReducer(reducer(), defaultState(defaultValue)), state = _a[0], dispatch = _a[1];
    var reset = function () {
        var defaultValue = getDefaultValue ? getDefaultValue() : undefined;
        dispatch({ type: 'reset', defaultValue: defaultValue });
    };
    var setError = function (error) {
        dispatch({ type: 'error', error: error });
    };
    var setValue = function (value) {
        dispatch({ type: 'value', value: value });
    };
    return useMemo(function () { return ({
        error: state.error,
        loading: state.loading,
        reset: reset,
        setError: setError,
        setValue: setValue,
        value: state.value,
    }); }, [state.error, state.loading, reset, setError, setValue, state.value]);
});

var useComparatorRef = function (value, isEqual, onChange) {
    var ref = useRef(value);
    useEffect(function () {
        if (!isEqual(value, ref.current)) {
            ref.current = value;
            if (onChange) {
                onChange();
            }
        }
    });
    return ref;
};

var isRefEqual = function (v1, v2) {
    var bothNull = !v1 && !v2;
    var equal = !!v1 && !!v2 && refEqual(v1, v2);
    return bothNull || equal;
};
var useIsFirestoreRefEqual = function (value, onChange) {
    return useComparatorRef(value, isRefEqual, onChange);
};
var isQueryEqual = function (v1, v2) {
    var bothNull = !v1 && !v2;
    var equal = !!v1 && !!v2 && queryEqual(v1, v2);
    return bothNull || equal;
};
var useIsFirestoreQueryEqual = function (value, onChange) {
    return useComparatorRef(value, isQueryEqual, onChange);
};

var useCollection = function (query, options) {
    var _a = useLoadingValue(), error = _a.error, loading = _a.loading, reset = _a.reset, setError = _a.setError, setValue = _a.setValue, value = _a.value;
    var ref = useIsFirestoreQueryEqual(query, reset);
    useEffect(function () {
        if (!ref.current) {
            setValue(undefined);
            return;
        }
        var unsubscribe = (options === null || options === void 0 ? void 0 : options.snapshotListenOptions)
            ? onSnapshot(ref.current, options.snapshotListenOptions, setValue, setError)
            : onSnapshot(ref.current, setValue, setError);
        return function () {
            unsubscribe();
        };
    }, [ref.current, options]);
    var resArray = [
        value,
        loading,
        error,
    ];
    return useMemo(function () { return resArray; }, resArray);
};
var useCollectionOnce = function (query, options) {
    var _a = useLoadingValue(), error = _a.error, loading = _a.loading, reset = _a.reset, setError = _a.setError, setValue = _a.setValue, value = _a.value;
    var effectActive = true;
    var ref = useIsFirestoreQueryEqual(query, reset);
    var loadData = function (query, options) { return __awaiter(void 0, void 0, void 0, function () {
        var get, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!query) {
                        setValue(undefined);
                        return [2 /*return*/];
                    }
                    get = getDocsFnFromGetOptions(options === null || options === void 0 ? void 0 : options.getOptions);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, get(query)];
                case 2:
                    result = _a.sent();
                    if (effectActive) {
                        setValue(result);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    if (effectActive) {
                        setError(error_1);
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        loadData(ref.current, options);
        return function () {
            effectActive = false;
        };
    }, [ref.current, options]);
    var resArray = [
        value,
        loading,
        error,
        function () { return loadData(ref.current, options); },
    ];
    return useMemo(function () { return resArray; }, resArray);
};
var useCollectionData = function (query, options) {
    var snapshotOptions = options === null || options === void 0 ? void 0 : options.snapshotOptions;
    var _a = useCollection(query, options), snapshots = _a[0], loading = _a[1], error = _a[2];
    var values = getValuesFromSnapshots(snapshots, snapshotOptions);
    var resArray = [values, loading, error, snapshots];
    return useMemo(function () { return resArray; }, resArray);
};
var useCollectionDataOnce = function (query, options) {
    var snapshotOptions = options === null || options === void 0 ? void 0 : options.snapshotOptions;
    var _a = useCollectionOnce(query, options), snapshots = _a[0], loading = _a[1], error = _a[2], loadData = _a[3];
    var values = getValuesFromSnapshots(snapshots, snapshotOptions);
    var resArray = [
        values,
        loading,
        error,
        snapshots,
        loadData,
    ];
    return useMemo(function () { return resArray; }, resArray);
};
var getValuesFromSnapshots = function (snapshots, options) {
    return useMemo(function () { return snapshots === null || snapshots === void 0 ? void 0 : snapshots.docs.map(function (doc) { return doc.data(options); }); }, [
        snapshots,
        options,
    ]);
};
var getDocsFnFromGetOptions = function (_a) {
    var _b = _a === void 0 ? { source: 'default' } : _a, source = _b.source;
    switch (source) {
        default:
        case 'default':
            return getDocs;
        case 'cache':
            return getDocsFromCache;
        case 'server':
            return getDocsFromServer;
    }
};

var useDocument = function (docRef, options) {
    var _a = useLoadingValue(), error = _a.error, loading = _a.loading, reset = _a.reset, setError = _a.setError, setValue = _a.setValue, value = _a.value;
    var ref = useIsFirestoreRefEqual(docRef, reset);
    useEffect(function () {
        if (!ref.current) {
            setValue(undefined);
            return;
        }
        var unsubscribe = (options === null || options === void 0 ? void 0 : options.snapshotListenOptions)
            ? onSnapshot(ref.current, options.snapshotListenOptions, setValue, setError)
            : onSnapshot(ref.current, setValue, setError);
        return function () {
            unsubscribe();
        };
    }, [ref.current, options]);
    var resArray = [
        value,
        loading,
        error,
    ];
    return useMemo(function () { return resArray; }, resArray);
};
var useDocumentOnce = function (docRef, options) {
    var _a = useLoadingValue(), error = _a.error, loading = _a.loading, reset = _a.reset, setError = _a.setError, setValue = _a.setValue, value = _a.value;
    var effectActive = true;
    var ref = useIsFirestoreRefEqual(docRef, reset);
    var loadData = function (reference, options) { return __awaiter(void 0, void 0, void 0, function () {
        var get, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!reference) {
                        setValue(undefined);
                        return [2 /*return*/];
                    }
                    get = getDocFnFromGetOptions(options === null || options === void 0 ? void 0 : options.getOptions);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, get(reference)];
                case 2:
                    result = _a.sent();
                    if (effectActive) {
                        setValue(result);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    if (effectActive) {
                        setError(error_1);
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        if (!ref.current) {
            setValue(undefined);
            return;
        }
        loadData(ref.current, options);
        return function () {
            effectActive = false;
        };
    }, [ref.current, options]);
    var resArray = [
        value,
        loading,
        error,
        function () { return loadData(ref.current, options); },
    ];
    return useMemo(function () { return resArray; }, resArray);
};
var useDocumentData = function (docRef, options) {
    var snapshotOptions = options === null || options === void 0 ? void 0 : options.snapshotOptions;
    var _a = useDocument(docRef, options), snapshot = _a[0], loading = _a[1], error = _a[2];
    var value = useMemo(function () { return snapshot === null || snapshot === void 0 ? void 0 : snapshot.data(snapshotOptions); }, [
        snapshot,
        snapshotOptions,
    ]);
    var resArray = [value, loading, error, snapshot];
    return useMemo(function () { return resArray; }, resArray);
};
var useDocumentDataOnce = function (docRef, options) {
    var snapshotOptions = options === null || options === void 0 ? void 0 : options.snapshotOptions;
    var _a = useDocumentOnce(docRef, options), snapshot = _a[0], loading = _a[1], error = _a[2], loadData = _a[3];
    var value = useMemo(function () { return snapshot === null || snapshot === void 0 ? void 0 : snapshot.data(snapshotOptions); }, [
        snapshot,
        snapshotOptions,
    ]);
    var resArray = [
        value,
        loading,
        error,
        snapshot,
        loadData,
    ];
    return useMemo(function () { return resArray; }, resArray);
};
var getDocFnFromGetOptions = function (_a) {
    var _b = _a === void 0 ? { source: 'default' } : _a, source = _b.source;
    switch (source) {
        default:
        case 'default':
            return getDoc;
        case 'cache':
            return getDocFromCache;
        case 'server':
            return getDocFromServer;
    }
};

export { useCollection, useCollectionData, useCollectionDataOnce, useCollectionOnce, useDocument, useDocumentData, useDocumentDataOnce, useDocumentOnce };
