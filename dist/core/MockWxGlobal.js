"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mockGlobal() {
    global.getCurrentPages = jest.fn();
    global.getApp = jest.fn();
    global.App = jest.fn();
    global.Page = jest.fn();
    global.Component = jest.fn();
    global.Behavior = jest.fn();
}
exports.default = mockGlobal;
//# sourceMappingURL=MockWxGlobal.js.map