/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var wxApiName = [
    "drawCanvas",
    "createContext",
    "createCanvasContext",
    "canvasToTempFilePath",
    "canvasGetImageData",
    "canvasPutImageData",
    "createOffscreenCanvas",
    "getAccountInfoSync",
    "getShareInfo",
    "pageScrollTo",
    "chooseInvoiceTitle",
    "chooseInvoice",
    "arrayBufferToBase64",
    "base64ToArrayBuffer",
    "openSetting",
    "getExtConfig",
    "chooseMedia",
    "chooseMultiMedia",
    "chooseMessageFile",
    "chooseWeChatContact",
    "uploadEncryptedFileToCDN",
    "onUploadEncryptedFileToCDNProgress",
    "getExtConfigSync",
    "showShareMenu",
    "hideShareMenu",
    "updateShareMenu",
    "shareAppMessageForFakeNative",
    "openUrl",
    "setNavigationBarColor",
    "setNavigationBarAlpha",
    "vibrateShort",
    "vibrateLong",
    "getSetting",
    "checkIsSupportFacialRecognition",
    "startFacialRecognitionVerify",
    "startFacialRecognitionVerifyAndUploadVideo",
    "startCustomFacialRecognitionVerify",
    "startCustomFacialRecognitionVerifyAndUploadVideo",
    "sendBizRedPacket",
    "sendGoldenRedPacket",
    "openGoldenRedPacketDetail",
    "addPhoneContact",
    "setScreenBrightness",
    "getScreenBrightness",
    "getWeRunData",
    "uploadWeRunData",
    "addWeRunData",
    "canIUse",
    "setPageStyle",
    "triggerGettingWidgetData",
    "navigateToMiniProgram",
    "navigateToMiniProgramDirectly",
    "navigateToDevMiniProgram",
    "navigateBackMiniProgram",
    "launchMiniProgram",
    "launchApplicationDirectly",
    "setNavigationBarRightButton",
    "onTapNavigationBarRightButton",
    "setTopBarText",
    "setTabBarBadge",
    "removeTabBarBadge",
    "showTabBarRedDot",
    "hideTabBarRedDot",
    "showTabBar",
    "hideTabBar",
    "setTabBarStyle",
    "setTabBarItem",
    "setBackgroundColor",
    "setBackgroundTextStyle",
    "setEnableDebug",
    "captureScreen",
    "onUserCaptureScreen",
    "setKeepScreenOn",
    "checkIsSupportSoterAuthentication",
    "startSoterAuthentication",
    "checkIsSoterEnrolledInDevice",
    "openDeliveryList",
    "navigateBackH5",
    "openBusinessView",
    "navigateBackApplication",
    "navigateBackNative",
    "reportIDKey",
    "reportKeyValue",
    "setNavigationBarTitle",
    "showNavigationBarLoading",
    "hideNavigationBarLoading",
    "startPullDownRefresh",
    "stopPullDownRefresh",
    "operateWXData",
    "getOpenDeviceId",
    "getMenuButtonBoundingClientRect",
    "getSelectedTextRange",
    "openBluetoothAdapter",
    "closeBluetoothAdapter",
    "getBluetoothAdapterState",
    "onBluetoothAdapterStateChange",
    "startBluetoothDevicesDiscovery",
    "stopBluetoothDevicesDiscovery",
    "getBluetoothDevices",
    "getConnectedBluetoothDevices",
    "createBLEConnection",
    "closeBLEConnection",
    "getBLEDeviceServices",
    "getBLEDeviceCharacteristics",
    "notifyBLECharacteristicValueChanged",
    "notifyBLECharacteristicValueChange",
    "readBLECharacteristicValue",
    "writeBLECharacteristicValue",
    "onBluetoothDeviceFound",
    "onBLEConnectionStateChanged",
    "onBLEConnectionStateChange",
    "onBLECharacteristicValueChange",
    "startBeaconDiscovery",
    "stopBeaconDiscovery",
    "getBeacons",
    "onBeaconUpdate",
    "onBeaconServiceChange",
    "startWifi",
    "stopWifi",
    "getWifiList",
    "getConnectedWifi",
    "connectWifi",
    "presetWifiList",
    "setWifiList",
    "onGetWifiList",
    "onWifiConnected",
    "onEvaluateWifi",
    "getHCEState",
    "startHCE",
    "stopHCE",
    "sendHCEMessage",
    "onHCEMessage",
    "startLocalServiceDiscovery",
    "stopLocalServiceDiscovery",
    "onLocalServiceFound",
    "offLocalServiceFound",
    "onLocalServiceLost",
    "offLocalServiceLost",
    "onLocalServiceDiscoveryStop",
    "offLocalServiceDiscoveryStop",
    "onLocalServiceResolveFail",
    "offLocalServiceResolveFail",
    "redirectTo",
    "reLaunch",
    "navigateTo",
    "switchTab",
    "navigateBack",
    "onAppShow",
    "offAppShow",
    "onAppHide",
    "offAppHide",
    "onError",
    "offError",
    "getLaunchOptionsSync",
    "onWindowResize",
    "offWindowResize",
    "getStorage",
    "getStorageSync",
    "setStorage",
    "setStorageSync",
    "removeStorage",
    "removeStorageSync",
    "clearStorage",
    "clearStorageSync",
    "getStorageInfo",
    "getStorageInfoSync",
    "request",
    "connectSocket",
    "closeSocket",
    "sendSocketMessage",
    "onSocketOpen",
    "onSocketClose",
    "onSocketMessage",
    "onSocketError",
    "uploadFile",
    "downloadFile",
    "addNativeDownloadTask",
    "calRqt",
    "secureTunnel",
    "chooseImage",
    "previewImage",
    "getImageInfo",
    "saveImageToPhotosAlbum",
    "compressImage",
    "startRecord",
    "stopRecord",
    "playVoice",
    "pauseVoice",
    "stopVoice",
    "onVoicePlayEnd",
    "chooseVideo",
    "saveVideoToPhotosAlbum",
    "loadFontFace",
    "getLocation",
    "openLocation",
    "chooseLocation",
    "startLocationUpdate",
    "stopLocationUpdate",
    "onLocationChange",
    "getNetworkType",
    "onNetworkStatusChange",
    "getSystemInfo",
    "getSystemInfoSync",
    "getBatteryInfo",
    "getBatteryInfoSync",
    "startAccelerometer",
    "stopAccelerometer",
    "onAccelerometerChange",
    "startCompass",
    "stopCompass",
    "onCompassChange",
    "startDeviceMotionListening",
    "stopDeviceMotionListening",
    "onDeviceMotionChange",
    "startGyroscope",
    "stopGyroscope",
    "onGyroscopeChange",
    "reportAction",
    "getBackgroundAudioManager",
    "getRecorderManager",
    "getBackgroundAudioPlayerState",
    "playBackgroundAudio",
    "pauseBackgroundAudio",
    "seekBackgroundAudio",
    "stopBackgroundAudio",
    "onBackgroundAudioPlay",
    "onBackgroundAudioPause",
    "onBackgroundAudioStop",
    "joinVoIPChat",
    "exitVoIPChat",
    "updateVoIPChatMuteConfig",
    "onVoIPChatMembersChanged",
    "onVoIPChatSpeakersChanged",
    "onVoIPChatInterrupted",
    "login",
    "checkSession",
    "authorize",
    "getUserInfo",
    "requestPayment",
    "verifyPaymentPassword",
    "bindPaymentCard",
    "requestPaymentToBank",
    "requestVirtualPayment",
    "openOfflinePayView",
    "openWCPayCardList",
    "requestMallPayment",
    "setCurrentPaySpeech",
    "loadPaySpeechDialectConfig",
    "faceVerifyForPay",
    "openOfficialAccountProfile",
    "openMiniProgramProfile",
    "openMiniProgramSearch",
    "openMiniProgramHistoryList",
    "openMiniProgramStarList",
    "batchGetContactDirectly",
    "preventApplePayUI",
    "getWxSecData",
    "addCard",
    "openCard",
    "scanCode",
    "openQRCode",
    "chooseAddress",
    "saveFile",
    "openDocument",
    "getSavedFileList",
    "getSavedFileInfo",
    "getFileInfo",
    "removeSavedFile",
    "getFileSystemManager",
    "getABTestConfig",
    "chooseContact",
    "removeUserCloudStorage",
    "setUserCloudStorage",
    "makePhoneCall",
    "makeVoIPCall",
    "onAppRoute",
    "onAppRouteDone",
    "onAppEnterBackground",
    "onAppEnterForeground",
    "onAppUnhang",
    "onPageReload",
    "onPageNotFound",
    "offPageNotFound",
    "createAnimation",
    "createInnerAudioContext",
    "getAvailableAudioSources",
    "onAudioInterruptionBegin",
    "offAudioInterruptionBegin",
    "onAudioInterruptionEnd",
    "offAudioInterruptionEnd",
    "setInnerAudioOption",
    "createAudioContext",
    "createVideoContext",
    "createMapContext",
    "createCameraContext",
    "createLivePlayerContext",
    "createLivePusherContext",
    "onWebviewEvent",
    "onNativeEvent",
    "hideKeyboard",
    "onKeyboardHeightChange",
    "getPublicLibVersion",
    "showModal",
    "showToast",
    "hideToast",
    "showLoading",
    "hideLoading",
    "showActionSheet",
    "showShareActionSheet",
    "reportAnalytics",
    "reportMonitor",
    "getClipboardData",
    "setClipboardData",
    "createSelectorQuery",
    "createIntersectionObserver",
    "nextTick",
    "updatePerfData",
    "traceEvent",
    "onMemoryWarning",
    "getUpdateManager",
    "createWorker",
    "voiceSplitJoint",
    "uploadSilkVoice",
    "downloadSilkVoice",
    "getResPath",
    "setResPath",
    "setCookies",
    "getCookies",
    "getLabInfo",
    "setLabInfo",
    "createUDPSocket",
    "env",
    "createRewardedVideoAd",
    "createInterstitialAd",
    "getLogManager",
    "getRealtimeLogManager",
    "cloud",
    "version",
    "chooseShareGroup",
    "enterContact",
];
var wxMock = {};
wxApiName.forEach(function (apiName) {
    wxMock[apiName] = jest.fn();
});
Object.defineProperty(global, "wx", {
    writable: true,
    value: wxMock,
});

if (global.wx) {
    global.wx = __assign({}, global.wx);
}
else {
    global.wx = {};
}
var cache = {};
var MockWxApi = /** @class */ (function () {
    function MockWxApi(apiName, options) {
        var _this = this;
        this.cacheKey = "no key";
        this.resData = null;
        this.errData = null;
        if (options) {
            this.cacheKey = apiName + "." + JSON.stringify(options);
        }
        this.cacheKey = apiName;
        cache[this.cacheKey] = {
            apiName: apiName,
        };
        global.wx[apiName] = jest.fn().mockImplementation(function (apiOptions) {
            var success = apiOptions && apiOptions.success
                ? apiOptions.success
                : function () {
                    // do nothing
                };
            var fail = apiOptions && apiOptions.fail
                ? apiOptions.fail
                : function () {
                    // do nothing
                };
            var complete = apiOptions && apiOptions.complete
                ? apiOptions.complete
                : function () {
                    // do nothing
                };
            if (_this.resData) {
                var resData = cache[_this.cacheKey].resData;
                if (typeof resData === "function") {
                    success(resData());
                }
                else {
                    success(cache[_this.cacheKey].resData);
                }
                complete();
            }
            if (_this.errData) {
                var errData = cache[_this.cacheKey].errData;
                if (typeof errData === "function") {
                    fail(errData());
                }
                else {
                    fail(cache[_this.cacheKey].errData);
                }
                complete();
            }
        });
    }
    MockWxApi.prototype.name = function (aliasName) {
        this.cacheKey = aliasName;
        return this;
    };
    MockWxApi.prototype.success = function (res) {
        if (typeof res === "undefined" || res === null) {
            this.resData = null;
        }
        else {
            this.resData = res;
        }
        cache[this.cacheKey].resData = this.resData;
        return global.wx[cache[this.cacheKey].apiName];
    };
    MockWxApi.prototype.fail = function (err) {
        if (typeof err === "undefined" || err === null) {
            this.errData = null;
        }
        else {
            this.errData = err;
        }
        cache[this.cacheKey].errData = this.errData;
        return global.wx[cache[this.cacheKey].apiName];
    };
    return MockWxApi;
}());
var Mock = /** @class */ (function () {
    function Mock() {
    }
    Mock.prototype.mock = function (apiName, options) {
        return new MockWxApi(apiName, options);
    };
    return Mock;
}());

export default Mock;
//# sourceMappingURL=miniprogramMock.es.js.map
