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
    constructor(apiName: string, options?: IMockOptions);
    name(aliasName: string): this;
    success(res?: any): this;
    successOnce(res?: any): this;
    fail(err?: any): this;
    failOnce(err?: any): this;
}
