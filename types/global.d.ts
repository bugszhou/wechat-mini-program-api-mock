declare global {
  namespace NodeJS {
    interface Global {
      wx: {
        [key: string]: any;
      };
    }
  }
}

declare const wx: NodeJS.Global["wx"];

export {};
