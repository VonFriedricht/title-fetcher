// ==UserScript==
// @name         Title fetcher for Lucky
// @namespace    http://vnft.cc
// @version      0.1
// @description  gets the title of youtube video
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var lastSend
    var title
    setInterval( () => {
        if( location.pathname == "/watch" ) {
            title = JSON.stringify(document.title)
            if(title != lastSend){
                fetch(`https://vnft.cc/api/lucky/set/${title}`)
                lastSend = title
            }
        }
    },1000)
})();
