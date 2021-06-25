# wechat-mini-program-api-mock

微信小程序接口 mock

## Features

- 用于在 jest 下模拟微信小程序 api 返回结果

## Install

```shell
npm install --save-dev wechat-mini-program-api-mock
```

## Example

```javascript
import Mock from "wechat-mini-program-api-mock";

// 模拟wx.getStorage
describe("Test: getStorage", () => {
  it("success", () => {
    new Mock().mock("getStorage").success(true);
    wx.getStorage({
      success(res) {
        // res === true
      },
    });
  });

  it("success", () => {
    new Mock().mock("getStorage").fail(false);
    wx.getStorage({
      fail(err) {
        // err === false
      },
    });
  });

  it("throw", () => {
    new Mock().mock("getStorage").fail(() => {
      throw newError("test error");
    });

    expect(() => {
      wx.getStorage({
        fail(err) {
          // err === false
        },
      });
    }).toThrow();
  });
});
```

## API

### 创建 Mock 实例

```javascript
import Mock from "wechat-mini-program-api-mock";

const mockIns = new Mock();
```

### 实例 API

#### `mock(apiName[,options])`

##### apiName

Type: `String`

需要模拟的接口名称

Example：需要模拟`wx.login`，`mockIns.mock("login")`

##### options

Type: `Object`

| key        | 类型   | 说明                                           |
| ---------- | ------ | ---------------------------------------------- |
| aliasName  | String | 接口别名，用于标识 Mock 的唯一性               |
| apiOptions | Object | Mock 接口的参数，如`wx.setStorage(apiOptions)` |

Example：需要模拟`wx.setStorage`

```javascript
// Mock
mockIns.mock("setStorage", {
  apiOptions: {
    key: "demo",
    data: "demoValue",
  },
});

// 真实调用
wx.setStorage({
  key: "demo",
  data: "demoValue",
});
```

- 同一个接口 Mock 多次(`mockIns.mock("setStorage")`)，会覆盖之前 Mock 的接口，为了避免这种请求，可以在 Mock 的时候传入`aliasName`参数做区分，`aliasName`也是需要保证全局唯一，不然也会覆盖之前 Mock 的接口。

传入`aliasName`参数：

```javascript
mockIns.mock("setStorage", {
  aliasName: "setStorage_mock1",
  apiOptions: {
    key: "demo",
    data: "demoValue",
  },
});
```

#### `success(res)`

模拟`success`方法执行，用`success`模拟返回时，Mock 的接口多次调用会执行相同的逻辑。

##### res

Type: `Object | Function`

```javascript
// Mock
mockIns
  .mock("setStorage", {
    apiOptions: {
      key: "demo",
      data: "demoValue",
    },
  })
  .success({
    status: "ok",
  });

// 第一次真实调用
wx.setStorage({
  key: "demo",
  data: "demoValue",
  success(res) {
    // 这里的res就是上面Mock的数据{status: "ok"}
    res.status === "ok";
  },
});

// 第二次真实调用，res.status还是ok
wx.setStorage({
  key: "demo",
  data: "demoValue",
  success(res) {
    // 这里的res就是上面Mock的数据{status: "ok"}
    res.status === "ok";
  },
});
```

#### `successOnce(res)`

模拟`success`方法执行，用`successOnce`模拟返回时，`res`只会执行一次，之后再次执行会返回`jest.Mock`实例。

##### res

Type: `Object | Function`

```javascript
// Mock
mockIns
  .mock("setStorage", {
    apiOptions: {
      key: "demo",
      data: "demoValue",
    },
  })
  .successOnce({
    status: "ok",
  });

// 第一次真实调用
wx.setStorage({
  key: "demo",
  data: "demoValue",
  success(res) {
    // 这里的res就是上面Mock的数据{status: "ok"}
    res.status === "ok";
  },
});

// 第二次真实调用
wx.setStorage({
  key: "demo",
  data: "demoValue",
  success(res) {
    res instanceof jest.Mock === true;
  },
});
```

实现多次调用返回不同结果

```javascript
// Mock
mockIns
  .mock("setStorage", {
    apiOptions: {
      key: "demo",
      data: "demoValue",
    },
  })
  .successOnce({
    status: "ok",
  })
  .successOnce({
    status: "cancel",
  });

// 第一次真实调用
wx.setStorage({
  key: "demo",
  data: "demoValue",
  success(res) {
    // 这里的res就是上面Mock的数据{status: "ok"}
    res.status === "ok";
  },
});

// 第二次真实调用
wx.setStorage({
  key: "demo",
  data: "demoValue",
  success(res) {
    // 这里的res就是上面Mock的数据{status: "cancel"}
    res.status === "cancel";
  },
});
```

#### `fail(err)`

模拟`fail`方法执行，用`fail`模拟返回时，Mock 的接口多次调用会执行相同的逻辑。

##### err

Type: `Object | Function`

```javascript
// Mock
mockIns
  .mock("setStorage", {
    apiOptions: {
      key: "demo",
      data: "demoValue",
    },
  })
  .fail({
    status: "fail",
  });

// 第一次真实调用
wx.setStorage({
  key: "demo",
  data: "demoValue",
  fail(err) {
    // 这里的err就是上面Mock的数据{status: "fail"}
    err.status === "fail";
  },
});

// 第二次真实调用，err.status还是fail
wx.setStorage({
  key: "demo",
  data: "demoValue",
  fail(err) {
    // 这里的err就是上面Mock的数据{status: "fail"}
    err.status === "fail";
  },
});
```

#### `failOnce(err)`

模拟`fail`方法执行，用`failOnce`模拟返回时，`err`只会执行一次，之后再次执行会返回`jest.Mock`实例。

##### err

Type: `Object | Function`

```javascript
// Mock
mockIns
  .mock("setStorage", {
    apiOptions: {
      key: "demo",
      data: "demoValue",
    },
  })
  .failOnce({
    status: "fail",
  });

// 第一次真实调用
wx.setStorage({
  key: "demo",
  data: "demoValue",
  fail(err) {
    // 这里的err就是上面Mock的数据{status: "ok"}
    err.status === "ok";
  },
});

// 第二次真实调用
wx.setStorage({
  key: "demo",
  data: "demoValue",
  fail(err) {
    err instanceof jest.Mock === true;
  },
});
```

实现多次调用返回不同结果

```javascript
// Mock
mockIns
  .mock("setStorage", {
    apiOptions: {
      key: "demo",
      data: "demoValue",
    },
  })
  .failOnce({
    status: "ok",
  })
  .failOnce({
    status: "cancel",
  });

// 第一次真实调用
wx.setStorage({
  key: "demo",
  data: "demoValue",
  fail(err) {
    // 这里的err就是上面Mock的数据{status: "ok"}
    err.status === "ok";
  },
});

// 第二次真实调用
wx.setStorage({
  key: "demo",
  data: "demoValue",
  fail(err) {
    // 这里的err就是上面Mock的数据{status: "cancel"}
    err.status === "cancel";
  },
});
```
