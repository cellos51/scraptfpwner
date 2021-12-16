// ==UserScript==
// @name         Scrap.TF Raffle-PWNER
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Joins every raffle on Scrap.TF (based on "https://greasyfork.org/en/scripts/25589-scraptf-raffle-killer")
// @author       Somebody On The Internet
// @match        https://scrap.tf/raffles*
// @icon         https://www.google.com/s2/favicons?domain=scrap.tf
// @grant        GM_openInTab
// ==/UserScript==

(function()
 {
    // this is the first ever thing i've wrote in js btw
    'use strict';
    console.log("Loaded Scrap.TF Raffle-PWNER");
    var button = '<button class="sussyButton" type="button">Join All Raffles</button>';
    if (window.location == "https://scrap.tf/raffles")
    {
        document.getElementsByClassName("new-raffle")[0].innerHTML += button;
        document.getElementsByClassName("sussyButton")[0].addEventListener("click", ButtonClickAction, false);
    }
    else if (document.getElementsByClassName("btn btn-embossed btn-info btn-lg")[0])
    {
        document.getElementsByClassName("btn btn-embossed btn-info btn-lg")[0].click();
        window.close();
    }

    function ButtonClickAction()
    {
        scrollDown();
        function openRaffle(i){
            var newI = i + 1;
            if (i !== document.getElementsByClassName("panel-raffle ").length1)
            {
                if (document.getElementsByClassName("panel-raffle ")[i].style.opacity == "")
                {
                    GM_openInTab(document.getElementsByClassName("panel-raffle ")[i].getElementsByTagName("a")[0].href, true);
                    setTimeout(function(){ openRaffle(newI); }, 3000 + Math.floor((Math.random() * 2000) + 1));
                } else {
                    openRaffle(newI);
                }
            }
            location.reload();
        }
        function scrollDown()
        {
            if (document.getElementsByClassName("panel-body raffle-pagination-done")[0])
            {
                if (!isHidden(document.getElementsByClassName("panel-body raffle-pagination-done")[0]))
                {
                    window.scrollTo(0,0);
                    openRaffle(0);
                }
                else if (isHidden(document.getElementsByClassName("panel-body raffle-pagination-done")[0]))
                {
                    window.scrollTo(0,document.body.scrollHeight);
                    setTimeout(function(){ scrollDown(); }, 100);
                }
            }
        }
        function isHidden(el) // Thanks Stack Overflow
        {
            var style = window.getComputedStyle(el);
            return (style.display === 'none')
        }
    }
})();