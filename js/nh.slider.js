/**
 *  visibility : hidden;
 */

$(function(){

	change_img();
	var changeImg = function(){
		change_img();
	};

	setInterval(changeImg,6500);
	
    
});

function change_img(){
	$('ul.nh-slider li:nth-child(2) img').each(function(){
		var next_img = $('ul.nh-slider li:nth-child(3) img').attr('src');
		 
		$(this).css("opacity", "1.0").animate({opacity: 0.1}, 1500, function(){
			var temp = $(this).attr('src');
			var temp2 = $('ul.nh-slider li:nth-child(1) img').attr('src');
			$('ul.nh-slider li:nth-child(4) img').animate({opacity: 0.1}, 1000);
			$('ul.nh-slider li:nth-child(1) img').animate({opacity: 0.1}, 1000);
			
			$(this).attr('src',$('ul.nh-slider li:nth-child(3) img').attr('src'));
			$(this).animate({opacity: 1.0}, 1500,function(){
				$('ul.nh-slider li:nth-child(3) img').attr('src',temp2);
				$('ul.nh-slider li:nth-child(1) img').attr('src',temp);
				$('ul.nh-slider li:nth-child(3) img').animate({opacity: 1}, 1000);
				$('ul.nh-slider li:nth-child(1) img').animate({opacity: 1}, 1000);
				
			});
			
		});
		
		
    });
	
	
}
