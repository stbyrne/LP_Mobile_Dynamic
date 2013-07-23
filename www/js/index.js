$(function(){		
		
	$.extend({
		getTitles: function(url) {
			var result = null;
			$.ajax({
				url: url,
				type: 'get',
				dataType: 'json',
				async: false,
				success: function(data) {
					result = data;
				}
			});
		   return result;
		}
	});
	
	var titles = $.getTitles("titles.json"),
		screenList = [],
		moduleTitle = titles.course.moduleTitle,
		moduleCode = titles.course.moduleCode,
		menuList = $('#list');
		$screen = $(titles.course.section.screen);
		
	$screen.each(function(i){
				var num = i + 1;
                var id = $(this).attr('id');
				var title = $(this).attr('title');
                var desc = $(this).attr('description');
				screenList.push(title);
				$('#0' + num).html('Screen ' + num + ': ' + $(this).attr('title'));
                
				menuList.append(
					$('<li />', {
						'class': 'lesson',
						id: 'Screen_0' + num
					}).html('<a href="#screenView' + num + '"><img src="images/screen' + num + '.png"><span>' + title + '</span><p>' + desc +'</p></a>'));
		});	
	
	var	numScreen = $screen.length,
		screen = 1,
		playing = 1,
		movie = $('#myMovie'),
		lessonTitle=$('.lessonTitle'),
		screenTitle = $('.screenTitle'),
		lessonCode = $('.lessonCode'),
		mute = 1,
		$slider = $('#slider'),
		$slider_value = $('#slider_value'),
		$nextButton = $('#nextButton'),
		$prevButton = $('#prevButton'),
		$nav = $('#nav');
		//buttonText=document.getElementById('playButton');
	
	screenTitle.html(screenList[screen - 1]);
	lessonTitle.html(moduleTitle);
	lessonCode.html(moduleCode);	      
		


});










	


	







