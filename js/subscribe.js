$(document).ready(function(){
$("#ajax-contact-form").submit(function(){
			
var str = $(this).serialize();
			
$.ajax({
type: "POST",
url: "php/contact.php",
data: str,
success: function(msg){
				
$("#note").ajaxComplete(function(event, request, settings){
			
if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
{
result = '<div class="notification_ok"> Thanks for Subscribing. We will keep you updated. </div>';
$("#fields").hide();
}
else
{
result = msg;
}
			
$(this).html(result);
			
});
			
}
			
});
			
return false;
			
});
			
});
/*
本代码由js代码网网友上传，js代码网收集并编辑整理;
尊重他人劳动成果;
转载请保留js代码链接 - www.jsdaima.com
*/