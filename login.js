$(document).ready(function(){
$("#login").click(function(){
var mobile = $("#mobileNo").val();
var password = $("#password").val();
// Checking for blank fields.
if( mobile =='' || password ==''){
$('input[type="text"],input[type="password"]').css("border","2px solid red");
$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
alert("Please fill all fields...!!!!!!");
}else {
$.post("login.php",{ mobileNo1: mobileNo, password1:password},
function(data) {
if(data=='Invalid Mobile Number') {
$('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
$('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
alert(data);
}else if(data=='Mobile Number or Password is wrong...!!!!'){
$('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
alert(data);
} else if(data=='Successfully Logged In'){
$("form")[0].reset();
$('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
alert(data);
} else{
alert(data);
}
});
}
});
});