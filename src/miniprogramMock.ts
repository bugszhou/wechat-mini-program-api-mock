/* eslint-disable @typescript-eslint/no-namespace */
import "./wxMock";
import mockGlobal from "./core/MockWxGlobal";
import MockWxApi, { IMockOptions } from "./core/MockWxApi";

declare global {
  namespace NodeJS {
    interface Global {
      wx: {
        [key: string]: jest.Mock;
      };

      [key: string]: jest.Mock;
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// declare const wx: NodeJS.Global["wx"];

if (global.wx) {
  global.wx = {
    ...global.wx,
  };
} else {
  global.wx = {};
}

mockGlobal();

class Mock {
  mock(apiName: string, options?: IMockOptions) {
    return new MockWxApi(apiName, options);
  }

  mockGlobal(apiName: string) {
    global[apiName] = jest.fn();
    return global[apiName];
  }
}

export default Mock;
