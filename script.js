/*
just append the url 
*/
//document.location.hash = "?share=1";


//window.history.pushState("object or string", "quora answer without login", "?share=1");
//document.location.hash = "?share=1";
//window.location.href
//window.location.reload()
//window.location.reload()
//window.stop()
/*
function my_code(){
//alert(" Alert inside my_code function");
//var text_val = document.getElementById("t2");
//text_val.select();
window.history.pushState("object or string", "quora answer without login", "?share=1");
window.location.reload()
window.stop()
}

window.onload=my_code();
*/

//window.location.search += 'share=1';
//window.stop()
//document.location.hash = ""
//window.location.reload()
//window.stop()

var url = window.location.href;    
if (url.indexOf('?') > -1){
   window.stop()
}else{
   url += '?abcd=1'
   window.location.href = url;
}
