$(function(){	
    
///////////////////Ajax jsonp function to get data from json file////////////////
		
    
function jsonTitles(holdData){

    $.ajax({
        /*type: 'GET',*/
        /*url: 'titles.json',*/
        url: 'http://www.skillpad.com/uploads/json/titles.json?callback=?',
        /*async: false,*/
        jsonpCallback: 'jsonCallback',
        /*contentType: "application/json",*/
        dataType: 'jsonp',
        timeout: 5000,
        success: function(data) {
            holdData(data);
            
            /*$('body').remove('#loader');*/
        },
        error: function() {
            $('body').css({
                'background-color': '#393939',
                'margin': '200px auto',
                'display': 'block'
            });
            $('body').empty().append($('<div/>', {
                
            }).html('<div id="disconnect"><img id="noconnect" src="icon.png"/><div>'));
            setTimeout(function(){
                   alert('Unable to connect! Please try again.');
            }, 500)
        }
        
    });
}
    
///////////////////Calls the ajax jsonp function which retreives the data////////////////
    
jsonTitles(function(titles){
  
        var	screenList = [],
            moduleTitle = titles.course.moduleTitle,
            moduleCode = titles.course.moduleCode,
            menuList = $('#list'),
            collapseList = $('#collapseList'),
            listLeft = $('#listLeft'),
            logLeft = $('#loglistLeft'),
            menuLeft = $('#menulistLeft'),
            $screen = $(titles.course.section.screen),
            $body = $('body'),
            navlist = ['login', 'menu', 'contact'];
            
    
///////////////////Parsing through the json file and applying variables to the different titles////////////////
            
        $screen.each(function(i){
                    var num = i + 1,
                        id = $(this).attr('id'),
                        title = $(this).attr('title'),
                        desc = $(this).attr('description'),
                        content = $(this).attr('content'),
                        duration = '00:00';
            
                    screenList.push(title);
                    $('#0' + num).html('Screen ' + num + ': ' + $(this).attr('title'));
            
            
                    menuList.append(
                                $('<li />', {
                                    id: 'Screen_0' + num,
                                }).html('<a href="#screenView' + num + '"><img src="images/screen' + num + '.png"><h2>' + title + '</h2><p>' + desc +'</p><p class="ui-li-aside">Duration: ' + duration + '</p></a>'));
            
        
 ///////////////////Creates the individual pages for each screen////////////////
                    $body.append($('<div />', {
                        id: 'screenView' + num,
                        'data-role': 'page'
                    }));
            
            //.html('<h1>Screen ' + num + ':<br>' + title + '</h1><a href="index.html" data-role="button" class="ui-icon-nodisc ui-btn-right ui-icon-alt" data-corners="true" data-theme="c" data-icon="home" data-iconpos="notext">Home</a>')
                    $('#screenView' + num).append($('<div />', {
                        'data-role': 'header',
                        'data-theme': 'c',
                        id: 'header' + num
                    }));
            
                    $('#header' + num).html('<a href="#left-panel" class="ui-icon-nodisc" data-role="none"><img src="images/menu_r.png" width="45px" height="45px"/></a><h1>Screen ' + num + ':<br>' + title + '</h1><a href="#home" class="ui-icon-nodisc" data-role="none"><img src="images/home_r.png" width="55px" height="40px"/></a>');
            
                    $('#screenView' + num).append($('<div />', {
                        'data-role': 'content',
                        id: 'video' + num
                    }));
                        
                    $('#video' + num).html('<video id="myMovie0' + num + '" controls fullscreen width="100%" height="100%" poster="icon.png"><source src="http://www.skillpad.com/uploads/videos/Screen_0' + num + '.mp4" type="video/mp4">No connection! Please try again.</video>');
            
//////////////////////////////////////////////////////////////////////
            
                    /*var duration = $('#myMovie0' + num)[0].duration;
                    console.log(duration);*/
                                
///////////////////Creates the homepage list of screens////////////////
            
                    
            
                                
                    /*duration = $('myMovie0' + num).duration;*/
                    /*var videoholder = $('#myMovie0' + num);
                    duration = videoholder[0].duration;
                    setTimeout(function(){
                        console.log(videoholder[0].duration);
                        
                    }, 15000)*/
                    
            
                    $('#screenView' + num).append($('<div />', {
                        'data-role': 'panel',
                        id: 'left-panel',
                        'data-theme': 'd'
                    }).html('<p>Menu</p>').each(function(){
                        
                            $(this).append($('<div />', {
                                'data-role': 'content'
                            }).append($('<ul />', {
                                    'data-role': 'listview',
                                    'class': 'ui-icon-alt'
                                    })
                                ))
                            }));
///////////////////Loop for Menu within screen pages, ie loop within loop/////////////////
            
///////////////////Creates the menu screen//////////////// 
    
                    collapseList.append($('<div>', {
                        'data-role': 'collapsible',
                        id: 'collapseList' + num,
                        'data-theme': 'a',
                        'class': 'ui-icon-alt',
                        'data-icon':'false'
                    }));
            
                    $('#collapseList' + num).html('<h3>' + title + '</h3><p><a href="#screenView' + num + '">Click to view Screen ' + num + '</a></p><p>' + content + '</p>');
            
                    });//////End of Loop//////
    
        $(screenList).each(function(i){
                var numlist = i + 1;
               
                $('[data-role="panel"] ul:not(#listLeft_2)').append(
                            $('<li />', {
                                'class': 'lesson',
                                'data-theme': 'd'
                            }).html('<a href="#screenView' + numlist + '"><span>' + this + '</span></a>'));
                   
        });
    
    $(navlist).each(function(i){
        var navnum = i + 1;
        
        $('[data-role="panel"] ul').append(
                            $('<li />', {
                                'data-theme': 'd'
                            }).html('<a href="#' + this + '"><span>' + this + '</span></a>'));
    });
  
    
        var lessonTitle=$('.lessonTitle'),
            screenTitle = $('.screenTitle'),
            lessonCode = $('.lessonCode');
        
        screenTitle.html(screenList[screen - 1]);
        lessonTitle.html(moduleTitle);
        lessonCode.html(moduleCode);
    
        /*$('head').append('<link rel="stylesheet" href="css/index.css"/>');
        $('head').append('<link rel="stylesheet" href="js/jquery.mobile-1.3.2.min.css" />');*/
        /*$('head').append('<link rel="stylesheet" href="js/jquery.mobile.structure-1.3.2.min.css" />');*/
    
        $('head').append('<script src="js/jquery.mobile-1.3.2.min.js"></script>');
        $('#home').attr('id', 'home');
        
        
    });///End jsonTitles Function///
    
    $('#logo').click(function(){
        window.open('http://www.skillpad.com', '_blank');
    
    
    });
    
    $( document ).on( "pageinit", "#home", function() {
    $( document ).on( "swipeleft swiperight", "#home", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#left-panel" ).panel( "open" );
            }
        }
    });
});
    
    
    
});///End jQuery Function///




    
/////////////////////////////////////////////////////////////////////




	


	







