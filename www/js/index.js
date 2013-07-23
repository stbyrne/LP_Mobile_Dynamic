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
				var title = $(this).attr('title');
				screenList.push(title);
				$('#0' + num).html('Screen ' + num + ': ' + $(this).attr('title'));
				menuList.append(
					$('<li />', {
						text: 'Screen ' + num + ': ' + title,
						'class': 'screenList',
						id: '0' + num
					})
				);
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










	


	







