var zoom = 15;
// var latitude = 41.038966;
// var longitude = 28.984451;

var latitude = 12.360397;
var longitude = -87.021589;

idleTime = 0;

$(document).ready(function() {
    
      //Increment the idle time counter every minute.
    var idleInterval = setInterval("timerIncrement()", 1000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(document).mousemove(function (e) {
        idleTime = 0;
    });
    $(document).keypress(function (e) {
        idleTime = 0;
    });

 $(document).scroll(function (e) {
        idleTime = 0;
    });
    
    
    var controller = $.superscrollorama({
        triggerAtCenter: false,
        playoutAnimations: true
    });
    
  controller.pin($('#intro .story'), 1000);
 
  
  setupMap();
  
     
$('.nav-menu a').address($(this).attr('href'));

    $.address.change(function(event) {  
     
    var pageID=event.value.split('/')[1];
   if(pageID!=''){
    
     var el=$(".nav-menu [href=#"+pageID+"]");
     
        $('.nav-menu .active').removeClass('active');
        el.parent().addClass('active');
     $('select.nav option').each(function(){
        
         var val=$(this).val();
      
         if(val==="#"+pageID){
              $('select.nav option:selected').removeAttr('selected');
              $(this).attr('selected','selected');
         }
        
     });
    
    
     scrollToSection("#"+pageID);
   }    
}); 

 $('select.nav').change(function(){
      var loc=($(this).find('option:selected').val());
     
     scrollToSection(loc);
  })
  
  
function scrollToSection(destSection){
  
     
    $('html, body').stop().animate({
            scrollTop: $(destSection).offset().top 
        }, 1500,'easeInOutExpo');
 
}

 $('.nav-menu a').bind('click',function(event){
        var clickedMenu = $(this);
        $('.nav-menu .active').toggleClass('active');
clickedMenu.parent().toggleClass('active');
  
        scrollToSection(clickedMenu.attr('href'));

        event.preventDefault();
    });




function setupMap(){
     
    var styles = [ {
        featureType: 'road.highway', 
        elementType: 'geometry', 
        stylers: [ {
            hue: '#13ACD9'
        }, {
            saturation: -16
        }, {
            lightness: -28
        }, {
            visibility: 'on'
        } ]
    },{
        featureType: 'road', 
        elementType: 'all', 
        stylers: [ {
            hue: '#3CC6EE'
        }, {
            saturation: -16
        }, {
            lightness: -9
        }, {
            visibility: 'simplified'
        } ]
    },{
        featureType: 'water', 
        elementType: 'geometry', 
        stylers: [ {
            hue: '#cccccc'
        }, {
            saturation: -100
        }, {
            lightness: 17
        }, {
            visibility: 'on'
        } ]
    },{
        featureType: 'transit', 
        elementType: 'all', 
        stylers: [ {
            hue: '#1BBCEB'
        }, {
            saturation: 84
        }, {
            lightness: -32
        }, {
            visibility: 'simplified'
        } ]
    },{
        featureType: 'landscape', 
        elementType: 'all', 
        stylers: [ {
            hue: '#119DC6'
        }, {
            saturation: 78
        }, {
            lightness: -53
        }, {
            visibility: 'simplified'
        } ]
    },{
        featureType: 'poi', 
        elementType: 'all', 
        stylers: [ {
            hue: '#1BBCEB'
        }, {
            saturation: 72
        }, {
            lightness: -34
        }, {
            visibility: 'simplified'
        } ]
    },{
        featureType: 'road.local', 
        elementType: 'all', 
        stylers: [ {
            hue: '#ffffff'
        }, {
            saturation: -100
        }, {
            lightness: 100
        }, {
            visibility: 'off'
        } ]
    },{
        featureType: 'road.highway', 
        elementType: 'labels', 
        stylers: [ {
            hue: '#1496BC'
        }, {
            saturation: -19
        }, {
            lightness: -36
        }, {
            visibility: 'on'
        } ]
    },{
        featureType: 'road', 
        elementType: 'labels', 
        stylers: [ {
            hue: '#1496BC'
        }, {
            saturation: -19
        }, {
            lightness: -36
        }, {
            visibility: 'on'
        } ]
    },{
        featureType: 'road.local', 
        elementType: 'all', 
        stylers: [ {
            visibility: 'off'
        } ]
    } ];
    var options = {
        // mapTypeControlOptions: {
        //     mapTypeIds: [ 'Styled']
        // },
        center: new google.maps.LatLng(latitude, longitude),
        zoom: zoom//,
        // mapTypeId: 'Styled'
    };
    var div = document.getElementById('map');




    var map = new google.maps.Map(div, options);
    var styledMapType = new google.maps.StyledMapType(styles, {
        name: 'Styled'
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude), 
        map: map
    });
    // map.mapTypes.set('Styled', styledMapType);




}
   
 
});


function timerIncrement() {
    idleTime++;
  
    if (idleTime > 1) { // 20 minutes
        $('.nav').animate({top:'-45px'});
    }else{
         $('.nav').animate({top:'0px'});
    }
    }