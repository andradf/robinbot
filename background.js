var localstorage = chrome.storage.local;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
   if(request.method == "getValue")
   {
       localstorage.get('value', function(obj)
       {
          //sendResponse(hello);
          sendResponse({data: obj.value}); 
       });
       return true;
   } 
   else if(request.method == "setValue")
   {
       localstorage.set({"value": request.value}, function(){});
       sendResponse({});
   }
   else{
       sendResponse({});
   }
});