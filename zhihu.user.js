// ==UserScript==
// @name         知乎 关闭登录提示
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  知乎登录弹窗处理
// @author       忆年
// @match        https://zhuanlan.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// @license      none
// ==/UserScript==

(function() {
    'use strict';
    
    const css = `
    .signFlowModal,.Modal-wrapper.Modal-enter-done {display:none;transition:none}
    `;

    const style = document.createElement('style')
    style.innerHTML = css
    document.head.append(style)
    setTimeout(() => {
        document.querySelector('.Modal-closeButton').click()
    }, 290)
})();
