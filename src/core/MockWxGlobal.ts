export default function mockGlobal() {
  global.getCurrentPages = jest.fn();
  global.getApp = jest.fn();
}
