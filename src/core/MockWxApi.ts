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
  private resData = null;
  private errData = null;
  private mockType = "success";

  constructor(apiName: string, options?: IMockOptions) {
    if (options) {
      this.cacheKey = `${apiName}.${JSON.stringify(options)}`;
    }
    this.cacheKey = apiName;
    cache[this.cacheKey] = {
      apiName,
    };

    global.wx[apiName] = jest.fn().mockImplementation((apiOptions) => {
      const success =
        apiOptions && apiOptions.success
          ? apiOptions.success
          : () => {
              // do nothing
            };
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

      if (this.mockType === "success") {
        const resData = cache[this.cacheKey].resData;
        if (typeof resData === "function") {
          success(resData());
        } else {
          success(cache[this.cacheKey].resData);
        }
        complete();
        return;
      }

      if (this.mockType === "fail") {
        const errData = cache[this.cacheKey].errData;
        if (typeof errData === "function") {
          fail(errData());
        } else {
          fail(cache[this.cacheKey].errData);
        }
        complete();
      }
    });
  }

  name(aliasName: string) {
    this.cacheKey = aliasName;
    return this;
  }

  success(res?: any) {
    this.mockType = "success";
    this.resData = res;

    cache[this.cacheKey].resData = this.resData;
    return global.wx[cache[this.cacheKey].apiName];
  }

  fail(err?: any) {
    this.mockType = "fail";
    this.errData = err;

    cache[this.cacheKey].errData = this.errData;
    return global.wx[cache[this.cacheKey].apiName];
  }
}
