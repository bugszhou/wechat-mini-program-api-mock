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
/* eslint-disable @typescript-eslint/no-namespace */
require("./wxMock");
var MockWxGlobal_1 = require("./core/MockWxGlobal");
var MockWxApi_1 = require("./core/MockWxApi");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// declare const wx: NodeJS.Global["wx"];
if (global.wx) {
    global.wx = __assign({}, global.wx);
}
else {
    global.wx = {};
}
MockWxGlobal_1.default();
var Mock = /** @class */ (function () {
    function Mock() {
    }
    Mock.prototype.mock = function (apiName, options) {
        return new MockWxApi_1.default(apiName, options);
    };
    Mock.prototype.mockGlobal = function (apiName) {
        global[apiName] = jest.fn();
        return global[apiName];
    };
    return Mock;
}());
exports.default = Mock;
//# sourceMappingURL=miniprogramMock.js.map