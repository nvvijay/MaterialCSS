//ripple effect
//for listview
var parent, ink, d, x, y;
//for tabs
jQuery('.title ul li, .getitbutton').click(function(e){
	parent = jQuery(this);
	//create .ink element if it doesn't exist
	if(parent.find(".inkwhite").length == 0)
		parent.prepend("<span class='inkwhite'></span>");
		
	ink = parent.find(".inkwhite");
	//incase of quick double clicks stop the previous animation
	ink.removeClass("animate");
	
	//set size of .ink
	if(!ink.height() && !ink.width())
	{
		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
		d = Math.max(parent.outerWidth(), parent.outerHeight());
		ink.css({height: d, width: d});
	}
	
	//get click coordinates
	//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
	x = e.pageX - parent.offset().left - ink.width()/2;
	y = e.pageY - parent.offset().top - ink.height()/2;
	
	//set the position and add class .animate
	ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});

jQuery('ul li').click(function(e){
	parent = jQuery(this);
	//create .ink element if it doesn't exist
	if(parent.find(".ink").length == 0)
		parent.prepend("<span class='ink'></span>");
		
	ink = parent.find(".ink");
	//incase of quick double clicks stop the previous animation
	ink.removeClass("animate");
	
	//set size of .ink
	if(!ink.height() && !ink.width())
	{
		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
		d = Math.max(parent.outerWidth(), parent.outerHeight());
		ink.css({height: d, width: d});
	}
	
	//get click coordinates
	//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
	x = e.pageX - parent.offset().left - ink.width()/2;
	y = e.pageY - parent.offset().top - ink.height()/2;
	
	//set the position and add class .animate
	ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});

//changing tabs
jQuery('.navitem').click(function(e){
	jQuery('.navbar li').removeClass('selected');
	jQuery(this).addClass('selected');
});

//opening sidebar
jQuery('.sidebartoggle, .sidebarcontainer').click(function(e){
	//black background
	jQuery('.sidebarcontainer').fadeToggle();

	//blurring the background
	//jQuery('.mainbody_container').toggleClass('blur');
		
	//toggling sidebar
	var options = { "direction" : "left" };
	jQuery('.sidebar').animate({width: 'toggle'});
	
	//moving logo
	jQuery('.titlenav i').animate({left: (jQuery('.titlenav i').css('left')=='-20px')?'0px':'-20px'});
});

jQuery(window).scroll(function() {
	var win	= jQuery(window);
	calc_scroll = function() {
		var header = jQuery('.title').height(), scroll = win.scrollTop();
		var trigger = 1;
		if(scroll >= trigger) {
			jQuery('.title').removeClass('big');
			jQuery('.logo').removeClass('big');
			jQuery('#explogo').removeClass('expandedlogo');
			jQuery('.headerpadding').css('height','150');
		} else {
			jQuery('.title').addClass('big');
			jQuery('.logo').addClass('big');
			jQuery('#explogo').addClass('expandedlogo');
			jQuery('.headerpadding').css('height','400');
		}
	}
	calc_scroll();
});

var num = 1;
jQuery('.imgnav1').click(function(e){
	jQuery('#s2'+(num+1)).css("font-size", "4em");
	num = (num-1);
	if(num == -1) num = 2;
	console.log("num is : "+num);
	jQuery('#s2'+(num+1)).css("font-size", "10em");
});

jQuery('.imgnav2').click(function(e){
	jQuery('#s2'+(num+1)).css("font-size", "4em");
	num = (num+1)%3;
	console.log("num is : "+num);
	jQuery('#s2'+(num+1)).css("font-size", "10em");
});

jQuery('.mobilemenu').click(function(e){
	jQuery('.mobilemenuexpand').toggleClass('open');
});
