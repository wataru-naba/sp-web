
$(document).ready(function() { 
    
    var idList = [];
    $("div[id^=mapcanves_]").each(function() {
        
        idList.push($(this).attr('id'));
        idList.forEach(mapcreater);
    
    });
    
});

function mapcreater(value, index, ar){

    var data = {id: $("div[id="+value+"]").attr('mapid')};
    $.ajax({
            url: 'http://www.hyuga-fuji.jp/blog/mapcreater/get_address',
            type: 'post',
            data: data,
            dataType: 'html',
            timeout: 10000,  // 単位はミリ秒
            
            // 通信成功時の処理
            success: function(data) {
               canvas(data,value);
            },
            
            // 通信失敗時の処理
            error: function(xhr, textStatus, error) {
                alert('err');
            }
        });
   

    return false;
    
   
    
}

function canvas(address,canvas_id){
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                    
                var opts = {
                        zoom:17,
                        center:results[0].geometry.location,
                        scaleControl: true, 
                        scrollwheel: false, 
                        mapTypeId:google.maps.MapTypeId.ROADMAP
                };

                var map = new google.maps.Map(document.getElementById(canvas_id), opts);

                var mopts = {
                                        animation: google.maps.Animation.DROP,
                                        position: results[0].geometry.location
                                //	draggable: true
                                }
                var marker = new google.maps.Marker(mopts);
                marker.setMap(map);

            } 
    });
    
}