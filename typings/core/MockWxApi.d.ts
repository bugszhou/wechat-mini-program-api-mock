/// <reference types="jest" />
export interface IMockOptions {
    /**
     * 接口别名，用来保证唯一性
     */
    aliasName?: string;
    apiOptions?: any;
    [key: string]: any;
}
export default class MockWxApi {
    private cacheKey;
    private resData;
    private errData;
    constructor(apiName: string, options?: IMockOptions);
    name(aliasName: string): this;
    success(res?: any): jest.Mock<any, any>;
    fail(err?: any): jest.Mock<any, any>;
}
