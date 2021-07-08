// ==UserScript==
// @name         closetoken
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  this is simple story!
// @author       The Narrator
// @include      https://bscscan.com/token/*
// @icon         https://www.google.com/s2/favicons?domain=bscscan.com
// @grant        none
// ==/UserScript==

var downlimit = 40;
var uplimit = 200;



var mrvlue = $(".mr-3");
var val1 =mrvlue[0].innerText.replace(' addresses','');
var val2 =val1.replace(/,/g,'');
//alert('run');
if(val2>downlimit && val2<uplimit)
{
    // $( "#overlayMain" ).remove();
    var pathname = window.location.pathname;
    var tokenstr=pathname.slice(7,49);
    //alert(pathname);
    var varpoo ='https://poocoin.app/tokens/';
    var urlwinpoo =varpoo.concat(tokenstr);
    window.open(urlwinpoo, "_blank");
}
else
{
    window.close();
}



