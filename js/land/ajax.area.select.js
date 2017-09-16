/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
	$('#form_area').change(function() { 
            var data = {exe:1,offset:0,
                area:$("#form_area").children(':selected').val(),
                jhc:$("#form_jhc").children(':selected').val()
            };
            ajax_areaselect(data);
   
	});
        
        $('#form_address').change(function() {
            $('#gmap_link').attr("href","https://www.google.co.jp/maps/place/"+$('#form_address').val());
        });
        
});

function ajax_areaselect(data){
   
    $.ajax({
            url: BASE_URL+'landplaza/area/selectjhc',
            type: 'post',
            data: data,
            dataType: 'html',
            
            timeout: 10000,  // 単位はミリ秒
            
            // 通信成功時の処理
            success: function(data) {
               var html = '<select name="jhc" id="form_jhc">';
               for(var i = 0; i < data.length;i++){
                    html += '<option value="'+data[i]+'">'+data[i]+'</option>';
                }
                html += '</select>';
                
                $('#jhs').html(data);
               // set_selectzone();
            },
            
            // 通信失敗時の処理
            error: function(xhr, textStatus, error) {
                alert('err');
            }
        });
}

