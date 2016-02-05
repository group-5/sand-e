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


