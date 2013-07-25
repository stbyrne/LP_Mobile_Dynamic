$(function(){		
		
function jsonTitles(holdData){

    $.ajax({
        type: 'GET',
        url: 'http://www.skillpad.com/uploads/json/titles.json?callback=?',
        async: false,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(data) {
           holdData(data);
        },
        error: function(e) {
           console.log(e.message);
        }
    });
}
    
jsonTitles(function(titles){
   /* alert(titles.course.moduleTitle);*/

        var	screenList = [],
            moduleTitle = titles.course.moduleTitle,
            moduleCode = titles.course.moduleCode,
            menuList = $('#list'),
            $screen = $(titles.course.section.screen);
            
        $screen.each(function(i){
                    var num = i + 1,
                        id = $(this).attr('id'),
                        title = $(this).attr('title'),
                        desc = $(this).attr('description');
            
                    screenList.push(title);
                    $('#0' + num).html('Screen ' + num + ': ' + $(this).attr('title'));
                    
                    menuList.append(
                        $('<li />', {
                            'class': 'lesson',
                            id: 'Screen_0' + num
                        }).html('<a href="#screenView' + num + '"><img src="images/screen' + num + '.png"><span>' + title + '</span><p>' + desc +'</p></a>'));
            });
        
       /* var	numScreen = $screen.length,
            screen = 1,
            playing = 1,
            movie = $('#myMovie'),
            lessonTitle=$('.lessonTitle'),
            screenTitle = $('.screenTitle'),
            lessonCode = $('.lessonCode'),
            $nav = $('#nav');
            //buttonText=document.getElementById('playButton');
        
        screenTitle.html(screenList[screen - 1]);
        lessonTitle.html(moduleTitle);
        lessonCode.html(moduleCode);	      
            */
    });

});










	


	







