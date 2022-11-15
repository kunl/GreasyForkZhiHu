// ==UserScript==
// @name         gitlab 活动时间
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author        kunl
// @match        https://gitlab.*.com/*
// ==/UserScript==

(function() {
    'use strict';

    function showTime() {
        const times = jQuery('time.js-timeago');
        for(let i = 0; i < times.length; i ++) {
            let txt = jQuery(times[i]).text();
            txt = txt.split('-')[1] || txt.split('-')[0] 
            let time = jQuery(times[i]).attr('datetime');
            time = new Date(time)
            jQuery(times[i]).text(`${time.toLocaleString()} - ${txt}`)
        }
        console.log('show time')
    }
    setTimeout(showTime, 1000)

    let timer;
    window.addEventListener('scroll', () =>{
        if(timer) {
            clearTimeout(timer)
        }

         timer = setTimeout(showTime, 1000)
    })
    // Your code here...
})();