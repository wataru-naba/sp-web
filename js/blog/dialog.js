// StartUP

jQuery.fn.dlgOpen = function(callback) {
  caret_pos = getCaretPosition($('#form_body').get(0));
  this.find('.btn').attr('href','javascript:void(0)');
  if (!this.hasClass('dialogBase')) return false;
  this.stop().fadeIn(300);
  if (callback) callback(this);
  return false;
}

jQuery.fn.dlgClose = function(callback) {
  if (!this.hasClass('dialogBase')) return false;
  this.stop().fadeOut(300);
  if (callback) callback(this);
  return false;
}
$(document).ready(function() { 
  var contentHeight = document.body.scrollHeight > window.innerHeight ? 
    document.body.scrollHeight + 'px' : '100%';
  /*CSS .dialogBase*/ 
  $('div.dialogBase')
    .css('font-family','Arial, Verdana, sans-serif')
    .css('font-size','16px')
    .css('color','#303030')
    .css('position','absolute')
    .css('background-color','rgba(0,0,0,0.7)')
    .css('left','0')
    .css('top','0')
    .css('width','100%')
    .css('height',contentHeight)
    .css('z-index','10000')
    .hide();
  /*CSS .dialog*/ 
  $('div.dialog')
    .css('width','80%')
    .css('border-radius','8px')
    .css('box-shadow','2px 2px 15px #000')
    .css('background','#eee')
    .css('background','-webkit-linear-gradient(top, #ffffff 0%,#cccccc 100%)')
    .css('margin','100px auto')
    .css('padding','20px');
  /*CSS .action*/ 
  $('div.dialog .action')
    .css('margin-top','25px')
    .css('width','100%')
    .css('text-align','right');
  /*CSS .btn*/ 
  $('div.dialog a.btn')
    .css('display','inline-block')
    .css('width','auto')
    .css('height','18px')
    .css('padding','10px 40px')
    .css('margin','0 0 0 8px')
    .css('border-radius','5px')
    //.css('background-color','#707070')
    .css('overflow','hidden')
    .css('color','#000')
    .css('text-align','center')
    .css('text-decoration','none');
  /*CSS .cancel*/ 
  $('div.dialog a.cancel')
   // .css('background-color','#a0a0a0');
}); 
