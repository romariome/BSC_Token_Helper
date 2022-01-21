// ==UserScript==
// @name         filtertoken
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  this is simple story!
// @author       The Narrator
// @match        https://bscscan.com/tokentxns
// @exclude      https://bscscan.com/token/*
// @icon         https://www.google.com/s2/favicons?domain=bscscan.com
// @require      https://code.jquery.com/jquery-3.6.0.js
// @grant        none
// ==/UserScript==

var mintrasnferValue = 100000000;
var tablevar= $('.table tbody tr');
var length = tablevar.length;
var val1=0;
var i=0;
for(i=0;i<length;i++)
{
     val1= $(tablevar[i].cells[7]).text().replace(/,/g,'');
    if(val1<mintrasnferValue  )
    {
        tablevar[i].remove(0);
        //alert(val1);
    }
    else
    {
        var var4 = $(tablevar[i].cells[8]).html();
        var varbsc ='https://bscscan.com/token/';
        var var6 =var4.slice(16,58);
        var urlwinbsc =varbsc.concat(var6);
        //alert(urlwin);
        window.open(urlwinbsc, "_blank");
    }
}
