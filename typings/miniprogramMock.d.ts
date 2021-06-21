/// <reference types="jest" />
import "./wxMock";
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
declare class Mock {
    mock(apiName: string, options?: IMockOptions): MockWxApi;
    mockGlobal(apiName: string): jest.Mock<any, any>;
}
export default Mock;
