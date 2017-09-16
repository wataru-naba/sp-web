$(document).ready(function(){
	$("input[name='email']").blur(function(){
		if(!$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){

			$('#submit').attr('disabled', true);
			  $('#email_err').html('<span style="color:red; font-size:18px;">Emailの形式が正しくありません。');
			alert('emailERR');
	  }else{
		  $('#submit').attr('disabled', false);
		  $('#email_err').html('');
		  
	  }
	});
});