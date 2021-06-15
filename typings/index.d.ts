declare class RequestMock {
  private reqData;
  private resData;
  private errData;
  constructor(reqData?: any);
  get(reqData: any): this;
  getErrData(): any;
  getReqData(): any;
  getResData(): any;
  success(resData: any): this;
  fail(errData: any): this;
}

export default RequestMock;
