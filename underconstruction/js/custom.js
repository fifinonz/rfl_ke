 "use strict";
/*-----------------------------------
 Quick Mobile Detection
 -----------------------------------*/

 var isMobile = {
    Android: function() {
     
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
    
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
     
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
     
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
     
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
     
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};



 /*-----------------------------------
 REVOLUTION Slider
 -----------------------------------*/
$(document).ready(function() {
			
			var windowsHeight = $(window).height();
            $('.revolution-slider').revolution(
            {
                dottedOverlay:"none",
                delay:8000,
                startwidth:1170,
                //startheight:windowsHeight,
				startheight:700,
                onHoverStop:"on",
                hideThumbs:10,
                fullWidth:"on",
                forceFullWidth:"on",
                navigationType:"none",
                shadow:0,
                spinner:"spinner4",
                hideTimerBar:"on"
				
            });
        });



/*-----------------------------------
Show Active Navigation
-----------------------------------*/


jQuery(window).resize(function(){
	
	var windowsize = jQuery(window).width();
	if (windowsize < 991) {
    jQuery("#header").insertAfter(jQuery("#slideshow,#page-header,.static-header"));
    } else {
    jQuery("#header").insertBefore(jQuery("#slideshow,#page-header,static-header"));
    }
});



/*-----------------------------------
FUNFACTSs
-----------------------------------*/
jQuery(function ($) {
 
      
      // start all the timers
      $('.count').each(count);
      
      function count(options) {
	  
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
    });



 /*-----------------------------------
Parallax VIDEO
-----------------------------------*/
 // Open Video
    $('.play-video').on('click', function (e) {
		
        $('.play-video').css({display: 'none'});
        $('.stop-video').css({display: 'block'});
        $('.video-player').css({display: 'block'});
        e.preventDefault();
    });

    // Close Video
    $('.stop-video').on('click', function (e) {
		
        $('.stop-video').css({display: 'none'});
        $('.video-player').css({display: 'none'});
        $('.play-video').css({display: 'block'});
        e.preventDefault();
    });


