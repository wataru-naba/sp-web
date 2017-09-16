/**
 * 
 */
var child = 1;
$(function(){
	
	var click_flg = true;
	$('.zcp-nav ul li').click(function(){
		if(click_flg){
			click_flg = false;
			var myTarget = $(this);
			var myIndex = $(".zcp-nav ul li").index(myTarget) + 1;
			$('.zcp-nav ul li.active').removeClass('active');
			$(this).addClass('active');
			$('ul.zcp-slider li:nth-child('+child+')').css("opacity", "1.0").animate({opacity: 0.1}, 500,function(){
				$('ul.zcp-slider li').css({'display':'none','opacity':'1.0'});
				$('ul.zcp-slider li:nth-child('+myIndex+')').fadeIn();	
				child = myIndex;
				click_flg = true;
			});
		}else{}
	});
});

