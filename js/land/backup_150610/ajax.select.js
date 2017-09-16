
$(function(){

     var form = $('#select_search');
            
     var data = new FormData(form[0]);
     ajax(form,data);


});
$(document).ready(function(){
	$("select[id^=form_]").change(function() { 
			//alert($(this).attr("id"));
			
			var form = $('#select_search');
            
            var data = new FormData(form[0]);
            if($(this).attr("id") == 'form_area'){
            	data.append("reset_jhc", "TRUE");
            }
            
            ajax(form,data);

	});
        
   
        

});



function ajax(form,data){
  
    $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            contentType: false,
            processData: false,
            data: data,
            dataType: 'json',            
            timeout: 10000,  // 単位はミリ秒
            
            // 通信成功時の処理
            success: function(data) {
               $('#bukken_list').html(data['html']);
               $('#result').html('▽ 検索結果表示中：'+data['count']+'件');
            },
            
            // 通信失敗時の処理
            error: function(xhr, textStatus, error) {
                alert('エラーが発生しました。');
            }
        });
}

