/*
just append the url and reload it 
*/


var url = window.location.href;    
if (url.indexOf('?') > -1){
   window.stop()
}else{
   url += '?magic=1'
   window.location.href = url;
}
