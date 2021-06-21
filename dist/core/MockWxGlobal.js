"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mockGlobal() {
    global.getCurrentPages = jest.fn();
    global.getApp = jest.fn();
}
exports.default = mockGlobal;
//# sourceMappingURL=MockWxGlobal.js.map