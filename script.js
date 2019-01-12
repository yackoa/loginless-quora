/*
The main script checks for login.
if user isn't logged in then, it do the magic to remove the quora sign in block
*/


var url = window.location.href;
var oSerializer = new XMLSerializer();
var sXML = oSerializer.serializeToString(document);
var userLoggedIn = sXML.includes('<span class="expanded">Notifications');


if (!(userLoggedIn || url == "https://www.quora.com/")){
	if (url.indexOf('?') > -1){
   	window.stop()
	}else{
   		url += '?share=1'
   		window.location.href = url;
	}
}