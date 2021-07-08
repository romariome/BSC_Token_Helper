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

var mrvlue = $(".mr-3");
var val1 =mrvlue[0].innerText.replace(' addresses','');
var val2 =val1.replace(/,/g,'');
//alert('run');
if(val2>200||val2<40)
{
    window.close();
}
else
{
   // $( "#overlayMain" ).remove();
    var pathname = window.location.pathname;
    var tokenstr=pathname.slice(7,49);
    //alert(pathname);
    var varpoo ='https://poocoin.app/tokens/';
    var urlwinpoo =varpoo.concat(tokenstr);
    window.open(urlwinpoo, "_blank");
}



