var caret_pos;
jQuery.fn.imgOpen = function(callback) {

  this.find('.btn').attr('href','javascript:void(0)');
  if (!this.hasClass('dialogBase')) return false;
  this.stop().fadeIn(300);
  if (callback) callback(this);
  return false;
}

$( '#form_img' ).keypress( function ( e ) {
	if ( e.which == 13 ) {
		$('#dialog_img').imgInsert();
		return false;
	}
} );

jQuery.fn.imgInsert = function(callback) {
    
    var form = this.find('#form_img');
    
    var fd = new FormData(form[0]);
    
    $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            contentType: false,
            processData: false,
            data: fd,
            dataType: 'html',
            timeout: 10000,  // 単位はミリ秒
            
            // 通信成功時の処理
            success: function(data) {
                var arr = JSON.parse(data);
                var append =  '<div class="upimg" id="img-'+arr['id']+'">';
                	append += '<input type="radio" name="main_img" value="'+arr['name']+'"/>';
                    append += '<img src="'+BASE_URL+'public/assets/img/'+arr['folder']+'/'+arr['name']+'" class="upimg">';
                    append +='<br/><a class="btn" onclick="img_delete(';
                    append += "'"+arr['folder']+"'";
                    append += ','+arr['id']+')">× 削除する</a>';
                    append += '<input name="img_ids[]" value="'+arr['id']+'" type="hidden" />';
                    append += '</div>';
                    
                    $("#upload_img").append(append);
            },
            
            // 通信失敗時の処理
            error: function(xhr, textStatus, error) {
                alert('ファイル送信に失敗しました。');
            }
        });
    
  if (!this.hasClass('dialogBase')) return false;
    this.stop().fadeOut(300);
    if (callback) callback(this);
  return false;
}





