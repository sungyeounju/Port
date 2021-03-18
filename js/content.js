$(function(){
	mouse_AC();//마우스
});
  
function mouse_AC(){
	var boxbtn = $(".project ul li a");
 
	boxbtn.on("mouseover",function(){
		$(".mouseimg").removeClass("on");
		$(this).children(".mouseimg").addClass("on");
	});
	boxbtn.on("mouseleave",function(){
		$(".mouseimg").removeClass("on");
	});
	$(document).mousemove(function(e){
		$('.mouseimg').css("top", e.pageY);
		$('.mouseimg').css("left", e.pageX);
	});
}



