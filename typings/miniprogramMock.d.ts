interface IMockOptions {
    /**
     * 接口别名，用来保证唯一性
     */
    aliasName?: string;
    apiOptions?: any;
    [key: string]: any;
}
declare class MockWxApi {
    private cacheKey;
    private resData;
    private errData;
    constructor(apiName: string, options?: IMockOptions);
    name(aliasName: string): this;
    success(res: any): any;
    fail(err: any): any;
}
declare class Mock {
    mock(apiName: string, options?: IMockOptions): MockWxApi;
}
export default Mock;
