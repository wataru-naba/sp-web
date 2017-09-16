/**
 * 
 */

$(function(){
	
	$('.nhg-thumb ul li').click(function(){
		$('.nhg-thumb ul li.active').removeClass('active');
		$(this).addClass('active');
		var ch_img = $('img',this).attr('src');
		$('.nhg-disp').fadeOut(300,function(){
			$('.nhg-disp').children("img").attr('src',ch_img);
			$('.nhg-disp').imgLiquid();
			$('.nhg-disp').fadeIn();
		});
	});
	
});

$(function(){
	
	$('.zcg-l ul li').click(function(){
		$('.zcg-l ul li.active').removeClass('active');
		$(this).addClass('active');
		var ch_img = $('img',this).attr('src');
		
		$('.zcg-l div img').fadeOut(300,function(){
			$('.zcg-l div img').attr('src',ch_img);
			$('.zcg-l div img').imgLiquid();
			$('.zcg-l div img').fadeIn();
		});
	});
	
});

$(function(){
	
	$('.sub-photo ul li').click(function(){
		
		var ch_img = $('img',this).attr('src');
		
		$('.main-photo img').fadeOut(300,function(){
			$('.main-photo img').attr('src',ch_img);
			$('.main-photo img').imgLiquid();
			$('.main-photo img').fadeIn();
		});
	});
	
});

$(function(){
	
	$('.wv-thum ul li').click(function(){
		$('.wv-thum ul li.active').removeClass('active');
		$(this).addClass('active');
		var ch_img = $('img',this).attr('src');
		
		$('.wkg-l div img').fadeOut(300,function(){
			$('.wkg-l div img').attr('src',ch_img);
			$('.wkg-l div img').imgLiquid();
			$('.wkg-l div img').fadeIn();
		});
	});
	
});