"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./wxMock");
if (global.wx) {
    global.wx = __assign({}, global.wx);
}
else {
    global.wx = {};
}
var cache = {};
var MockWxApi = /** @class */ (function () {
    function MockWxApi(apiName, options) {
        var _this = this;
        this.cacheKey = "no key";
        this.resData = null;
        this.errData = null;
        if (options) {
            this.cacheKey = apiName + "." + JSON.stringify(options);
        }
        this.cacheKey = apiName;
        cache[this.cacheKey] = {
            apiName: apiName,
        };
        global.wx[apiName] = jest.fn().mockImplementation(function (apiOptions) {
            var success = apiOptions && apiOptions.success
                ? apiOptions.success
                : function () {
                    // do nothing
                };
            var fail = apiOptions && apiOptions.fail
                ? apiOptions.fail
                : function () {
                    // do nothing
                };
            var complete = apiOptions && apiOptions.complete
                ? apiOptions.complete
                : function () {
                    // do nothing
                };
            if (_this.resData) {
                var resData = cache[_this.cacheKey].resData;
                if (typeof resData === "function") {
                    success(resData());
                }
                else {
                    success(cache[_this.cacheKey].resData);
                }
                complete();
            }
            if (_this.errData) {
                var errData = cache[_this.cacheKey].errData;
                if (typeof errData === "function") {
                    fail(errData());
                }
                else {
                    fail(cache[_this.cacheKey].errData);
                }
                complete();
            }
        });
    }
    MockWxApi.prototype.name = function (aliasName) {
        this.cacheKey = aliasName;
        return this;
    };
    MockWxApi.prototype.success = function (res) {
        if (typeof res === "undefined" || res === null) {
            this.resData = null;
        }
        else {
            this.resData = res;
        }
        cache[this.cacheKey].resData = this.resData;
        return global.wx[cache[this.cacheKey].apiName];
    };
    MockWxApi.prototype.fail = function (err) {
        if (typeof err === "undefined" || err === null) {
            this.errData = null;
        }
        else {
            this.errData = err;
        }
        cache[this.cacheKey].errData = this.errData;
        return global.wx[cache[this.cacheKey].apiName];
    };
    return MockWxApi;
}());
var Mock = /** @class */ (function () {
    function Mock() {
    }
    Mock.prototype.mock = function (apiName, options) {
        return new MockWxApi(apiName, options);
    };
    return Mock;
}());
exports.default = Mock;
//# sourceMappingURL=miniprogramMock.js.map