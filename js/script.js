/*
2016/01/08
*/


$(function(){
	introFit();
	videoFit();
	imgBox();
	tileJs();
});

$(window).load(function(){
	introFit();
	videoFit();
	imgBox();
	tileJs();
});

$(window).resize(function(){
	introFit();
	videoFit();
	imgBox();
	tileJs();
});

$(window).on("orientationchange",function(){
	introFit();
	videoFit();
	imgBox();
	tileJs();
});

function introFit(){
	var H = $(window).height();
	$('#top-video').css({
		'height' : H + 'px'
	});
}

//top-video
function videoFit(){
	//設定
	var videoS = $('#bg-video');

	var videoW = videoS.width();
	var videoH = videoS.height();
	var videoT = 1280 / 720;

	var dispW = $(window).width();
	var dispH = $(window).height();
	var dispT = dispW /dispH;

	var W = dispH * 1280 / 720;
	var H = dispW * 720 / 1280;

	//原寸より横長のとき
	if( videoT < dispT ){
		videoS.css({
			'height':H + 'px',
			'width':dispW + 'px',
			'left':'50%',
			'margin-left':-(videoW / 2) +'px'
		});
	}

	//原寸より縦長か同じとき
	else{
		videoS.css({
			'height':dispH + 'px',
			'width':W + 'px',
			'left':'50%',
			'margin-left':-(videoW / 2) +'px'
		});
	}
}

//img-box
function imgBox(){
	/*見学会*/
	var kengakuH = $('.tk-img img').height() - 1;
	$('.tk-img').css('height',kengakuH + 'px');
	
	/*土地プラザ*/
	var plazaW = $('.tp-thumb').width();
	var plazaH = plazaW * 0.7;
	$('.tp-thumb').css('height',plazaH + 'px');

	/*ナチュラルハウス・ギャラリー*/
	var nhgdispW = $('.nhg-disp').width();
	var nhgdispH = nhgdispW * 0.749;
	$('.nhg-disp').css('height',nhgdispH + 'px');

	var nhgthumbW = $('.nhg-thumb ul li').width();
	var nhgthumbH = nhgthumbW * 0.803;
	$('.nhg-thumb ul li').css('height',nhgthumbH + 'px');
}

//tile
function tileJs(){
	var w = $(window).width();
	var x = 767;
	var x2 = 1023;
	if (w <= x){
		$('.tk-title').tile(1);
		$('.list-plaza a strong').tile(1);
		$('.zm-wapper').tile(1);
	}
	else if(w <= x2){
		$('.tk-title').tile(2);
		$('.list-plaza a strong').tile(2);
		$('.zm-wapper').tile(2);
	}
	else{
		$('.tk-title').tile(4);
		$('.list-plaza a strong').tile(4);
		$('.zm-wapper').tile(4);
	}
}

//imgLiquid
$(window).load(function(){
	$('.tp-thumb').imgLiquid();
	$('.nhg-disp').imgLiquid();
	$('.nhg-thumb ul li').imgLiquid();
	$('.wv-thum ul li').imgLiquid();
	$('.sub-photo ul li').imgLiquid();
});

//parallax
$(function(){
	var w = $(window).width();
	var x = 767;
	if (w <= x){
	}
	else{
		$('#top-select').parallax("50%", 0.3);
		$('#top-pickup').parallax("50%", 0.1);
	}
});

//insert
$(function(){
	$('.tp-more').prepend('<i class="fa fa-angle-right"></i>');
	$('#nav ul li a').prepend('<i class="fa fa-angle-right"></i>');
	$('#page-top').prepend('<i class="fa fa-arrow-up"></i>');
	$('.nhq dl dt').prepend('<i class="fa fa-arrow-circle-right"></i>');
	$('.contact-r a').prepend('<i class="fa fa-chevron-right"></i>');
	$('.lineup-more a').prepend('<i class="fa fa-arrow-circle-right"></i>');
	$('.nhg-more a').prepend('<i class="fa fa-arrow-circle-right"></i>');
	$('.plaza-search h3').prepend('<i class="fa fa-search"></i> ');
	$('.plaza-osusumelist h3').prepend('<i class="fa fa-hand-o-right"></i> ');
});

//page-top
$(function() {
	var pageTop = $('#page-top');
	pageTop.hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 300){
			pageTop.fadeIn();
		} else {
			pageTop.fadeOut();
		}
	});
	pageTop.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});

//sp-nav
$(function(){
	function eventHandler(event,selector){
		event.stopPropagation();
		event.preventDefault();
		if(event.type === 'touchend')selector.off('click');
	}
	
	$('#b-sp').on('touchend click',function(event){
		eventHandler(event,$(this));
		$("#nav").stop(true,false).slideToggle("fast");
		$(this).toggleClass("nav-on");
	});

});

//sp-tel
$(function() {
	var w = $(window).width();
	var x = 767;
	if (w <= x){

	$('#footer-inner p,.contact-c strong').each(function(){
		var txt = $(this).html();
		$(this).html(
			txt.replace('0982-53-2237','<a href="tel:0982-53-2237">0982-53-2237</a>')
		);
	});

	}
});

//tablet
$(function(){
	var ua = navigator.userAgent;
	if((ua.indexOf('Android') > 0 && ua.indexOf('Mobile') == -1) || (ua.indexOf('iPad') > 0)){
		//ビデオの代りに写真を表示
		$('#top-video').css({
			'background':'url(./images/sp.jpg)',
			'background-position':'center center',
			'background-size':'cover'
		});
	}
	else{
	}
});

//rollover
$(function(){
	$('a img').hover(function(){
		$(this).attr('src', $(this).attr('src').replace('-off', '-on'));
	}, function(){
		if (!$(this).hasClass('currentPage')) {
		$(this).attr('src', $(this).attr('src').replace('-on', '-off'));
	}
	});
});

//mapcreator
$(function(){
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
