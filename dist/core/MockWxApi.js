"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cache = {};
var MockWxApi = /** @class */ (function () {
    function MockWxApi(apiName, options) {
        this.cacheKey = "no key";
        if (options) {
            this.cacheKey = apiName + "." + JSON.stringify(options);
        }
        this.cacheKey = apiName;
        cache[this.cacheKey] = {
            apiName: apiName,
        };
        global.wx[apiName] = jest.fn();
    }
    MockWxApi.prototype.name = function (aliasName) {
        this.cacheKey = aliasName;
        return this;
    };
    MockWxApi.prototype.success = function (res) {
        global.wx[cache[this.cacheKey].apiName].mockImplementation(mockSuccessReturn(res));
        return this;
    };
    MockWxApi.prototype.successOnce = function (res) {
        global.wx[cache[this.cacheKey].apiName].mockImplementationOnce(mockSuccessReturn(res));
        return this;
    };
    MockWxApi.prototype.fail = function (err) {
        global.wx[cache[this.cacheKey].apiName].mockImplementation(mockFailReturn(err));
        return this;
    };
    MockWxApi.prototype.failOnce = function (err) {
        global.wx[cache[this.cacheKey].apiName].mockImplementationOnce(mockFailReturn(err));
        return this;
    };
    return MockWxApi;
}());
exports.default = MockWxApi;
function mockSuccessReturn(data) {
    return function (apiOptions) {
        var success = apiOptions && apiOptions.success
            ? apiOptions.success
            : function () {
                // do nothing
            };
        var complete = apiOptions && apiOptions.complete
            ? apiOptions.complete
            : function () {
                // do nothing
            };
        if (typeof data === "function") {
            success(data());
        }
        else {
            success(data);
        }
        complete();
    };
}
function mockFailReturn(data) {
    return function (apiOptions) {
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
        if (typeof data === "function") {
            fail(data());
        }
        else {
            fail(data);
        }
        complete();
    };
}
//# sourceMappingURL=MockWxApi.js.map