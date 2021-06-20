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

## Usage
