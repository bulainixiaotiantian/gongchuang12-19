$(function(){
	
	//调整html字体尺寸-------------------------------------------
	function htmlFont(){
		$("html").css("font-size",$(window).width()/900*100+"px");
		$(window).resize(function(){
			$("html").css("font-size",$(window).width()/900*100+"px");
		});
	};
	
	htmlFont()
	
	
	
	
	
	
	
})
