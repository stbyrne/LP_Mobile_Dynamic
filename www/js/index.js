$(function(){	
    
///////////////////Ajax jsonp function to get data from json file////////////////
		
function jsonTitles(holdData){

    $.ajax({
        type: 'GET',
        /*url: 'titles.json',*/
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
    
///////////////////Calls the ajax jsonp function which retreives the data////////////////
    
jsonTitles(function(titles){
  
        var	screenList = [],
            moduleTitle = titles.course.moduleTitle,
            moduleCode = titles.course.moduleCode,
            menuList = $('#list'),
            $screen = $(titles.course.section.screen),
            $body = $('body');
            
    
///////////////////Parsing through the json file and applying variables to the different titles////////////////
            
        $screen.each(function(i){
                    var num = i + 1,
                        id = $(this).attr('id'),
                        title = $(this).attr('title'),
                        desc = $(this).attr('description');
            
                    screenList.push(title);
                    $('#0' + num).html('Screen ' + num + ': ' + $(this).attr('title'));
            
///////////////////Creates the homepage list of screens////////////////
            
                    menuList.append(
                        $('<li />', {
                            'class': 'lesson',
                            id: 'Screen_0' + num
                        }).html('<a href="#screenView' + num + '"><img src="images/screen' + num + '.png"><span>' + title + '</span><p>' + desc +'</p></a>'));
            
 ///////////////////Creates the individual pages for each screen////////////////
                    $body.append($('<div />', {
                        id: 'screenView' + num,
                        'data-role': 'page',
                        'data-add-back-btn': 'true'
                    
                    }));
            //.html('<h1>Screen ' + num + ':<br>' + title + '</h1><a href="index.html" data-role="button" class="ui-icon-nodisc ui-btn-right ui-icon-alt" data-corners="true" data-theme="c" data-icon="home" data-iconpos="notext">Home</a>')
                    $('#screenView' + num).append($('<div />', {
                        'data-role': 'header',
                        'data-theme': 'c',
                        id: 'header' + num
                    }));
                    $('#header' + num).html('<h1>Screen ' + num + ':<br>' + title + '</h1><a href="index.html" data-role="button" class="ui-icon-nodisc ui-btn-right ui-icon-alt" data-corners="true" data-theme="c" data-icon="home" data-iconpos="notext">Home</a>');
            
                    $('#screenView' + num).append($('<div />', {
                        'data-role': 'content',
                        id: 'video' + num
                    }));
                    $('#video' + num).html('<video id="myMovie0' + num + '" controls fullscreen width="100%" height="100%" poster="icon.png"><source src="http://www.skillpad.com/uploads/videos/Screen_0' + num + '.mp4" type="video/mp4">No connection! Please try again.</video>');
            
                    $('#screenView' + num).append($('<div />', {
                        'data-role': 'footer',
                        'data-position': 'fixed',
                        id: 'footer' + num
                    }));
                    $('#footer' + num).append($('<div />', {
                        'data-role': 'navbar',
                        'data-iconpos': 'right',
                        id: 'navbar' + num
                    }));
                    $('#navbar' + num).append($('<ul>', {
                        html: '<li><a href="#menu" id="menuButton" data-role="button" data-icon="bars">Menu</a></li>'
                    }));
            });
        	
            var lessonTitle=$('.lessonTitle'),
                screenTitle = $('.screenTitle'),
                lessonCode = $('.lessonCode');
        
        screenTitle.html(screenList[screen - 1]);
        lessonTitle.html(moduleTitle);
        lessonCode.html(moduleCode);
    
        /*$('head').append('<link rel="stylesheet" href="js/jquery.mobile-1.3.1.min.css" />');
        $('head').append('<link rel="stylesheet" href="js/jquery.mobile.structure-1.3.1.min.css" />');*/
        $('head').append('<script src="js/jquery.mobile-1.3.1.min.js"></script>');
        $('#home').attr('id', 'home');
        $(document).on('pagebeforeshow', function(){
            $.mobile.activePage.find(".ui-header a.ui-btn-left").addClass("ui-btn-icon-notext");
            $.mobile.activePage.find(".ui-header a.ui-btn-left").addClass("ui-icon-nodisc ui-icon-alt");
            $.mobile.activePage.find(".ui-header a.ui-btn-left").removeClass("ui-btn-icon-left");
        });
		
    
   /* menuList.attr({
        'data-role': 'listview',
        'data-theme': 'c',
        'class': 'ui-icon-alt'
    });*/
            
    });
    
   

});








/*.append($('<h1>', {
                        html: 'Screen ' + num + ':<br>' + title
                    }))*/

	


	







