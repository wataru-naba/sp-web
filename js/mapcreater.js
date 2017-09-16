
$(document).ready(function() { 
    $("#mapcanvas").each(function() {
        var address = $(this).attr('xy');
        canvas(address);
    });
});

function canvas(address){
	 
	 if(address.match(/^[0-9\,\.\ ]+$/)){
		    address = address.split(",");
		 	var centerPos = new google.maps.LatLng(address[0],address[1]);
		    var opts = {
		            zoom:16,
		            center:centerPos,
		            scaleControl: true, 
		            scrollwheel: false, 
		            mapTypeId:google.maps.MapTypeId.ROADMAP
		    };
		    var map = new google.maps.Map(document.getElementById('mapcanvas'), opts);
		    var mopts = {
                            animation: google.maps.Animation.DROP,
                            position: centerPos
		                    //	draggable: true
		                    }
		    var marker = new google.maps.Marker(mopts);
		    marker.setMap(map);
		 
	  }else{
		  	var geocoder = new google.maps.Geocoder();
		    geocoder.geocode({ 'address': address}, function(results, status) {
		            if (status == google.maps.GeocoderStatus.OK) {
		                    
		                var opts = {
		                        zoom:15,
		                        center:results[0].geometry.location,
		                        scaleControl: true, 
		                        scrollwheel: true, 
		                        mapTypeId:google.maps.MapTypeId.ROADMAP
		                };
	
		                var map = new google.maps.Map(document.getElementById('mapcanvas'), opts);
	
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
	
    
    
}