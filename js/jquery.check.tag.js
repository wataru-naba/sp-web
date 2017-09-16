var count = 0;

$(function(){
     $("input[id^=inputpnf-]").click(function() {
        if($(this).prop('checked')) {
            $(this).prop("checked", false);
          }
          else{
             $(this).prop("checked", true);
       
          } 
    });
    $("tr[id^=pnf-]").click(function() {
            var id ='#input'+$(this).attr("id"); 
            if($(id).prop('checked')) {
                $(id).prop("checked", false);
                $(this).css({'background-color':'#fff','color':'#000'});
                if(count > 0){
                    count--;
                 }
              }
              else {
                 if(count < 3){
                    $(id).prop("checked", true);
                    $(this).css({'background-color':'#3f3f3f','color':'#fff'});
                    count++;
                 }else{
                     alert('パフレットは3つまでになります。');
                 }
              }  
    });
    
   
    
});

$(function(){
    
    
	   $("div[id^=place]").click(function() {
	          // var id = $(this).attr("key");
	           var value = $(this).attr("value");
	          
	           $('input[name="place"]').val([value]);
	           
	   });
	   
	  
	   
	});
