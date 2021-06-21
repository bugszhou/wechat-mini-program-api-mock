"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cache = {};
var MockWxApi = /** @class */ (function () {
    function MockWxApi(apiName, options) {
        var _this = this;
        this.cacheKey = "no key";
        this.resData = null;
        this.errData = null;
        this.mockType = "success";
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
            if (_this.mockType === "success") {
                var resData = cache[_this.cacheKey].resData;
                if (typeof resData === "function") {
                    success(resData());
                }
                else {
                    success(cache[_this.cacheKey].resData);
                }
                complete();
                return;
            }
            if (_this.mockType === "fail") {
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
        this.mockType = "success";
        this.resData = res;
        cache[this.cacheKey].resData = this.resData;
        return global.wx[cache[this.cacheKey].apiName];
    };
    MockWxApi.prototype.fail = function (err) {
        this.mockType = "fail";
        this.errData = err;
        cache[this.cacheKey].errData = this.errData;
        return global.wx[cache[this.cacheKey].apiName];
    };
    return MockWxApi;
}());
exports.default = MockWxApi;
//# sourceMappingURL=MockWxApi.js.map