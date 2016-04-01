chrome.runtime.sendMessage({method:"getValue"}, function(response)
{
    switch (response.data) {
        case "ABANDON":
            document.getElementsByClassName('robin-chat--vote-abandon')[0].click();       
            break;
        case "CONTINUE":
            document.getElementsByClassName('robin-chat--vote-continue')[0].click();    
                break;
        case "INCREASE":
            document.getElementsByClassName('robin-chat--vote-increase')[0].click();
            break;
        default:
            break;
    }
});
//document.getElementsByClassName('robin-chat--vote-increase')[0].click()