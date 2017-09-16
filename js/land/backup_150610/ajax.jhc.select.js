/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
	
	var data = {exe:1,offset:0,
        area:$("#form_area").children(':selected').val()
    };
    ajax_areaselect(data);
    
	$('#form_area').change(function() { 
            var data = {exe:1,offset:0,
                area:$("#form_area").children(':selected').val()
            };
            ajax_areaselect(data);
	});
        
});

function ajax_areaselect(data){
   
    $.ajax({
            url: BASE_URL+'landplaza/area/selectjhc',
            type: 'post',
            data: data,
            dataType: 'json',
            
            timeout: 10000,  // 単位はミリ秒
            
            // 通信成功時の処理
            success: function(data) {
              if(data['err']){
            	  $('#jhc').html('エリアを選択してください');
              }else{
	               var html = '<select name="jhc" id="form_jhc">';
	               for(var i = 0; i < data.length;i++){
	                    html += '<option value="'+data[i].key+'">'+data[i].value+'</option>';
	
	                }
	                html += '</select>';
	                $('#jhc').html(html);
	               set_selectjhc();
              }
            },
            
            // 通信失敗時の処理
            error: function(xhr, textStatus, error) {
            	alert('err');  
            	//$('#jhc').html('エリアを選択してください');
            }
        });
}

function set_selectjhc(){
    $('#form_jhc').change(function() {
    	 var form = $('#select_search');
         
         var data = new FormData(form[0]);
        ajax(form,data);
	});
}
