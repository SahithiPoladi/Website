$(document).ready(function(){
	$('.work, .tech, .spon, .cul, .abt, .con').mouseenter(function(){
		$(this).animate({
			height:'+=10px'
		});
	});
	$('.work, .tech, .spon, .cul, .abt, .con').mouseleave(function(){
		$(this).animate({
			height:'-=10px'
		});
	});
});