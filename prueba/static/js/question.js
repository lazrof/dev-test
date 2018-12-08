/* Buttons */
$(document).ready(function(){
 
	$('#up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('#up').slideDown(300);
		} else {
			$('#up').slideUp(300);
		}
	});

	// Scroll Buttons //

	$('#bottom').click(function(){
		$('body, html').animate({ scrollTop: $(document).height()-$(window).height() });
	});

	$('#next1-1').click(function(){
		$("html, body").animate({ scrollTop: $("#page1").offset().top }, 1500);
	});
 	
 	$('#next1-2').click(function(){
		$("html, body").animate({ scrollTop: $("#page1").offset().top }, 1500);
	});

	$('#next1-3').click(function(){
		$("html, body").animate({ scrollTop: $("#page1").offset().top }, 1500);
	});

	$('#next2').click(function(){
		$("html, body").animate({ scrollTop: $("#page2").offset().top }, 1500);
	});

	$('#next3').click(function(){
		$("html, body").animate({ scrollTop: $("#page3").offset().top }, 1500);
	});

	$('#next4').click(function(){
		$("html, body").animate({ scrollTop: $("#thankyou").offset().top }, 1500);
	});

	$('#nav-to-page-1').click(function(){
		$("html, body").animate({ scrollTop: $("#page1").offset().top }, 2000);
	});

	$('#nav-to-page-2').click(function(){
		$("html, body").animate({ scrollTop: $("#page2").offset().top }, 2000);
	});

	$('#nav-to-page-3').click(function(){
		$("html, body").animate({ scrollTop: $("#page3").offset().top }, 2000);
	});
});

/* Questions Section */
$("select.custom-select").css("height", "3rem")
$("select.custom-select").css("width", "9rem")

if ($( "select.custom-select" ).change(function() {
	console.log('a')
	var question_1 = $( "#question-1" ).val(); if (question_1 == 'true') { question_1 = true} else { question_1 = false }
	//console.log(question_1 +' 1')

	var question_2 = $( "#question-2" ).val(); if (question_2 == 'true') { question_2 = true} else { question_2 = false }
	//console.log(question_2 +' 2')

	var question_3 = $( "#question-3" ).val(); if (question_3 == 'true') { question_3 = true} else { question_3 = false }
	//console.log(question_3 +' 3')

	var question_4 = $( "#question-4" ).val(); if (question_4 == 'true') { question_4 = true} else { question_4 = false }
	//console.log(question_4 +' 4')

	var question_5 = $( "#question-5" ).val(); if (question_5 == 'true') { question_5 = true} else { question_5 = false }
	//console.log(question_5 +' 5')

	var question_6 = $( "#question-6" ).val(); if (question_6 == 'true') { question_6 = true} else { question_6 = false }
	//console.log(question_6 +' 6')

	if (question_1 || question_2 || question_3 || question_4 || question_5 || question_6) {
		$("#results").append("<h5>Question Change: True</h5>");
	} else {
		$("#results").append("<h5>Question Change: False</h5>");
	}

}));
