// ==UserScript==
// @name         知乎 关闭登录提示
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  知乎登录弹窗处理
// @author       忆年
// @match        https://zhuanlan.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// @license      none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(() => {
        document.querySelector('.Modal-closeButton').click()
    }, 300)

    // Your code here...
})();
