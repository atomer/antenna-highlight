// ==UserScript==
// @name        antenna-highlight
// @namespace   https://github.com/atomer/antenna-highlight
// @description 24時間以内に更新されたはてなアンテナの項目をハイライトする
// @include     http://a.hatena.ne.jp/*
// @version     1.0.0
// ==/UserScript==

const now = Date.now();
const ONE_DAY = 1000*60*60*24;
Array
    .from(document.querySelectorAll('#hatena-antenna-normal .modified'))
    .every((el) => {
        const date = new Date(el.innerHTML);
        if (now - date.getTime() < ONE_DAY) {
            el.style.color = 'red';
            el.style.fontWeight = 'bold';
            return true;
        } else {
            return false;
        }
    });