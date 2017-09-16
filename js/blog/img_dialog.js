var caret_pos;
jQuery.fn.imgOpen = function(callback) {
  caret_pos = getCaretPosition($('#form_body').get(0));
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
    
    var $form = $('#form_img');
    
    var fd = new FormData($form[0]);
    
    $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            contentType: false,
            processData: false,
            data: fd,
            dataType: 'html',
            timeout: 10000,  // 単位はミリ秒
            
            // 通信成功時の処理
            success: function(data) {
                insertTextAtPosision(
                        $('#form_body').get(0),
                        caret_pos,
                        data
                    );
                
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

function insertTextAtPosision(obj, pos, txt) {
    obj.focus();
    var s = obj.value;
    var np = pos + txt.length;
    obj.value = s.substr(0, pos) + txt + s.substr(pos);
    obj.setSelectionRange(np, np);
}
function getCaretPosition(obj) {
    obj.focus();
    pos = obj.selectionStart;
    return pos;
}



