declare global {
  namespace NodeJS {
    interface Global {
      wx: {
        removeStorageSync: jest.Mock;
        setStorageSync: jest.Mock;
        getStorageSync: jest.Mock;

        [key: string]: any;
      };
    }
  }
}

declare const wx: NodeJS.Global["wx"];

export {};
