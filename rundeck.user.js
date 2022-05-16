// ==UserScript==
// @name         rundeck 优化
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  rundeck 样式定制，隐藏其他信息
// @author       忆年
// @match        https://deploy.ops.chanjet.com.cn/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chanjet.com.cn
// @grant        none
// @license      none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    // , a:not([href="/?project=Prod_pkgs"])

const style = `

div[data-bind="if: projectCount()>0 || !loadedProjectNames()"]{
  display: none
}
span[data-bind="if: $root.projectForName(project)"]{
  display: none
}



a.h3:not([href="/?project=Moni-pkgs"],[href="/?project=Prod_pkgs"]){
display: none
}

.project_list_item:not([data-project="Moni-pkgs"],[data-project="Prod_pkgs"]) {
display: none
}
`

    let s = document.createElement('style')
    s.innerHTML = style

    document.head.append(s)



})();
