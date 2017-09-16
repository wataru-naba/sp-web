function img_delete(action,id){
    alert(1);
    var url = BASE_URL+'landplaza/imagecontroller/imgdelete';
    $.ajax({
            url: url,
            type: 'post',
            data:{'id':id},
            dataType: 'html',
            timeout: 10000,  // 単位はミリ秒
            
             // 通信成功時の処理
            success: function(data) {
                
                if(data > 0){
                    var id = data;
                    $("#img-"+id).empty();
                }else{
                    
                    alert('エラーが発生しました'+data);
                }
            },
            
            // 通信失敗時の処理
            error: function(xhr, textStatus, error) {
                alert('データ送信に失敗しました。');
            }
    });
    
}