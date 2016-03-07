$(document).ready(function(){
	$("#coverImage").click(function(){
		var viewportHeight = $(window).height();
		$("html, body").animate({
			scrollTop: viewportHeight
		}, 1000);
	});
});

$(document).ready(function(){
	$("#coverImage").mouseenter(function(){
		$("#coverImage").animate({
			width: '40vw',
			left: '30vw',
			height: '40vw'
		});
	});
});

$(document).ready(function(){
	$("#coverImage").mouseleave(function(){
		$("#coverImage").animate({
			width: '33.333333vw',
			left: '33.333333vw',
			height: '33.333333vw'
		});
	});
});

$(document).ready(function(){
	$(".navigation").click(function(){
		var bar = $("#navigationBar")
		var barWidth = bar.width() 
		if (barWidth=0) {
			bar.show();
		}
		else {
			bar.fadeToggle();
		};
		
	})
});

$(document).ready(function(){
	$('body').click(function(evt){    
       if(evt.target.class == "navigation"){
       	return;
       };
          
       //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
       if($(evt.target).closest('.navigation').length){
       	return; 
       };
                      
       var bar = $("#navigationBar")
		var barWidth = bar.width() 
		if (barWidth=0) {
			return;
		}
		else {
			bar.fadeOut();
		};
      

});
});

$(document).ready(function(){
$("#slideshow1 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow1 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow1');
},  5000);

});

$(document).ready(function(){
$("#slideshow2 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow2 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow2');
},  5000);

});



