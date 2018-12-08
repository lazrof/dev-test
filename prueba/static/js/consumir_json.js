//Ajax Function to Get the Json Data
$.ajax({
	url: 'https://api.myjson.com/bins/17ocpi',
	dataType: 'json',
	type: 'get',
	cache: 'false',
	success: function(data){
		$(data.slide_1).each(function(index, value) {
			var slider_1_img = "url('"+value.image+"')"
			var slider_1_title = value.title.toUpperCase()
			var slider_1_title = slider_1_title.split(" ")
			$("#slider-1").css("background-image", slider_1_img)
			$("#slider-1-caption").append("<h1>"+slider_1_title[0]+"<b> "+slider_1_title[1]+"</b></h1>")
			$("#slider-1-caption").append("<p>"+value.text+"</p>")
		});

		$(data.slide_2).each(function(index, value) {
			var slider_2_img = "url('"+value.image+"')"
			var slider_2_title = value.title.toUpperCase()
			var slider_2_title = slider_2_title.split(" ")
			$("#slider-2").css("background-image", slider_2_img)
			$("#slider-2-caption").append("<h1>"+slider_2_title[0]+"<b> "+slider_2_title[1]+"</b></h1>")
			$("#slider-2-caption").append("<p>"+value.text+"</p>")
		});

		$(data.slide_3).each(function(index, value) {
			var slider_3_img = "url('"+value.image+"')"
			var slider_3_title = value.title.toUpperCase()
			var slider_3_title = slider_3_title.split(" ")
			$("#slider-3").css("background-image", slider_3_img)
			$("#slider-3-caption").append("<h1>"+slider_3_title[0]+"<b> "+slider_3_title[1]+"</b></h1>")
			$("#slider-3-caption").append("<p>"+value.text+"</p>")
		});
	}
});