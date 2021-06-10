/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace NodeJS {
    interface Global {
      wx: {
        removeStorageSync: () => void;
        setStorageSync: () => void;
        getStorageSync: () => void;
      };
    }
  }
}

declare var wx: NodeJS.Global["wx"];

global.wx = {
  removeStorageSync() {},
  setStorageSync() {},
  getStorageSync() {},
};

export {};
