// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
    var val = e.currentTarget.value;
    chrome.runtime.sendMessage({method:"setValue", value: val}, function(response)
    {
        
    });
    chrome.tabs.query({ url: "https://www.reddit.com/robin"}, function(tabs) { 
        if(tabs.length > 0)
        {
             switch (val) {
                case "ABANDON":
                    chrome.tabs.executeScript(tabs[0].id,
                    {code:"document.getElementsByClassName('robin-chat--vote-abandon')[0].click()"});       
                    break;
                case "CONTINUE":
                    chrome.tabs.executeScript(tabs[0].id,
                    {code:"document.getElementsByClassName('robin-chat--vote-continue')[0].click()"});    
                        break;
                case "INCREASE":
                    chrome.tabs.executeScript(tabs[0].id,
                    {code:"document.getElementsByClassName('robin-chat--vote-increase')[0].click()"});
                    break;
                default:
                    break;
            }
        }
    });
   
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('button');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
