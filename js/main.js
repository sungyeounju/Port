$(function(){
	menu_AC(); //nav
	typing_AC(); //메인타이핑
	cont05_AC(); //jambtn ov
});

//setTime
setTimeout(function() {
	contxt_AC();//텍스트인아웃
}, 5000);
setTimeout(function() {
	$(".intro").fadeOut(500);
	$("body").css("overflow-y","auto");
}, 4000);
setTimeout(function() {
	$(".cont02").fadeIn(500);
}, 5000);

//nav
function menu_AC(){
	var menubox = $(".nav .menubox");
	var menubtn = $(".nav .menubox .menu");
	var menua = $(".nav .menubox .menuitem ul li a");

	menubtn.on("click", function(){
		if(!menubox.hasClass("on")){
			menubox.addClass("on");
		}else{
			menubox.removeClass("on");
		}
	});

	menua.on("click", function(){
		console.log("Sss");
		menubox.removeClass("on");
	})
}

//메인타이핑
function typing_AC(){
	var typingBool = false; 
	var typingIdx = 0; 
	var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다 
	typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
	if(typingBool == false){ // 타이핑이 진행되지 않았다면 
		typingBool = true;	
		var tyInt = setInterval(typing,100); // 반복동작 
	} 
        
	function typing(){ 
        if(typingIdx < typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
            $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++; 
        } else{ 
            clearInterval(tyInt); //끝나면 반복종료 
        } 
	}		
}


//텍스트인아웃
function contxt_AC(){

	if($(".cont02").hasClass("aos-animate")){
		var litxt = $(".move-text ul li");                
		var cnt = 0;             
		function activeFunc(){
			litxt[cnt].classList.add("on");
			cnt++;    
			if(cnt >= litxt.length){
				clearInterval(addActive);
			}
		}	
		var addActive = setInterval(activeFunc, 600);

		setTimeout(function(){
			$(".move-text .txtwrap").fadeOut(500);
		},8000);
		setTimeout(function(){
			$(".cont02").addClass("on");
			$(".move-text .txtcont").fadeIn(500);
		},8500);
		
	}
}

//jambtn ov
function cont05_AC(){
	var jambtn = $(".cont05 .work-right a");
	jambtn.on("mouseover",function(){
		$(".work-left").addClass("on");
	});
	jambtn.on("mouseleave",function(){
		$(".work-left").removeClass("on");
	});
}
