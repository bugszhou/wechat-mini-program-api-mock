const cache: any = {};

export interface IMockOptions {
  /**
   * 接口别名，用来保证唯一性
   */
  aliasName?: string;
  apiOptions?: any;

  [key: string]: any;
}

export default class MockWxApi {
  private cacheKey = "no key";

  constructor(apiName: string, options?: IMockOptions) {
    if (options) {
      this.cacheKey = `${apiName}.${JSON.stringify(options)}`;
    }
    this.cacheKey = apiName;
    cache[this.cacheKey] = {
      apiName,
    };

    global.wx[apiName] = jest.fn();
  }

  name(aliasName: string) {
    this.cacheKey = aliasName;
    return this;
  }

  success(res?: any) {
    global.wx[cache[this.cacheKey].apiName].mockImplementation(
      mockSuccessReturn(res),
    );
    return this;
  }

  successOnce(res?: any) {
    global.wx[cache[this.cacheKey].apiName].mockImplementationOnce(
      mockSuccessReturn(res),
    );
    return this;
  }

  fail(err?: any) {
    global.wx[cache[this.cacheKey].apiName].mockImplementation(
      mockFailReturn(err),
    );
    return this;
  }

  failOnce(err?: any) {
    global.wx[cache[this.cacheKey].apiName].mockImplementationOnce(
      mockFailReturn(err),
    );
    return this;
  }
}

function mockSuccessReturn(data: any): (options?: any) => void {
  return (apiOptions?: any) => {
    const success =
      apiOptions && apiOptions.success
        ? apiOptions.success
        : () => {
            // do nothing
          };
    const complete =
      apiOptions && apiOptions.complete
        ? apiOptions.complete
        : () => {
            // do nothing
          };
    if (typeof data === "function") {
      success(data());
    } else {
      success(data);
    }
    complete();
  };
}

function mockFailReturn(data: any): (options?: any) => void {
  return (apiOptions?: any) => {
    const fail =
      apiOptions && apiOptions.fail
        ? apiOptions.fail
        : () => {
            // do nothing
          };
    const complete =
      apiOptions && apiOptions.complete
        ? apiOptions.complete
        : () => {
            // do nothing
          };
    if (typeof data === "function") {
      fail(data());
    } else {
      fail(data);
    }
    complete();
  };
}
