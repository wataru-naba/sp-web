var caret_pos;
jQuery.fn.mapOpen = function(callback) {
  caret_pos = getCaretPosition($('#form_body').get(0));
  this.find('.btn').attr('href','javascript:void(0)');
  if (!this.hasClass('dialogBase')) return false;
  this.stop().fadeIn(300);
  if (callback) callback(this);
  return false;
}

$( '#form_map' ).keypress( function ( e ) {
	if ( e.which == 13 ) {
		$('#dialog_map').mapInsert();
		return false;
	}
} );
jQuery.fn.mapInsert = function(callback) {
    
    var $form = $('#form_point').val();
    alert($form);
    var insert_str = '<div id="mapcanvas" xy="'+$form+'" ></div>'
    //var insert_str = '<div id="mapcanves_'+data+'" mapid="'+data+'"></div>';
    insertTextAtPosision(
            $('#form_body').get(0),
            caret_pos,
            insert_str
        );
    
    /*
    $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: $form.serialize(),
            dataType: 'html',
            timeout: 10000,  // 単位はミリ秒
            
            // 通信成功時の処理
            success: function(data) {
                if(data){
                    var insert_str = '<div id="mapcanves_'+data+'" mapid="'+data+'"></div>';
                    insertTextAtPosision(
                            $('#form_body').get(0),
                            caret_pos,
                            insert_str
                        );
                            
                    var str = '<input type="hidden" name="map_ids[]" value="';
                    str += data;
                    str += '">';
                    $("#map_data").append(str);
                }
            },
            
            // 通信失敗時の処理
            error: function(xhr, textStatus, error) {
                alert('err');
            }
        });
    */
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



