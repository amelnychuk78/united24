( function( $ ) {
jQuery(document).ready(function(){
	var currentWidth = window.innerWidth || document.documentElement.clientWidth;
	
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
			return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	if( isMobile.any() ) {
		jQuery('body').addClass('isMobile');
	}

	var mainVideo = document.getElementById("main-video");
	jQuery(".sec-bnr__play-btn").on("click", function() {
		if (mainVideo.paused) {
			jQuery('.sec-bnr').addClass('video-playing');
			mainVideo.play();
			jQuery('.sec-bnr__play-btn span').text('STOP');
		}			 
		else {
			jQuery('.sec-bnr').removeClass('video-playing');
			mainVideo.pause();
			mainVideo.currentTime = 0;
			jQuery('.sec-bnr__play-btn span').text('PLAY');
		}		 
		 
	});

	var mainVideo2 = document.getElementById("main-video-2");
	jQuery(".sec8__play-btn").on("click", function() {
		if (mainVideo2.paused) {
			jQuery('.sec8').addClass('video-playing');
			mainVideo2.play();
			jQuery('.sec8__play-btn span').text('STOP');
		}			 
		else {
			jQuery('.sec8').removeClass('video-playing');
			mainVideo2.pause();
			mainVideo2.currentTime = 0;
			jQuery('.sec8__play-btn span').text('PLAY');
		}		 
		 
	});		

	jQuery(".qa__q").on("click", function() {
		var panel = jQuery(this).closest('.qa__item').find('.qa__a');
		if(jQuery(this).hasClass('active')) {
			jQuery(this).removeClass('active');
		} else {
			jQuery(".qa__q").removeClass('active');
			jQuery(".qa__a").slideUp();
			jQuery(this).addClass('active');
		}
		
		if (panel.css('display') == "block") {
			panel.slideUp();			
		} else {
			panel.slideDown();
		}
	});

	jQuery("#donate, .back-btn").on("click", function() {
		jQuery('.donate-info').toggleClass('active');
	});

	jQuery("#copy-text-1").on("click", function() {
		CopyToClipboard('#bank-details-1');
	});
	jQuery("#copy-text-2").on("click", function() {
		CopyToClipboard('#bank-details-2');
	});

	function CopyToClipboard(containerid) {		
		var $temp = jQuery("<input>");
	    jQuery("body").append($temp);
		var copytext = jQuery(containerid).text();
		copytext = copytext.replace(/\s{2,}/g, ' ');
	    $temp.val(copytext).select();
	    document.execCommand("copy");
	    $temp.remove();
	}

	jQuery(".head-menu a").on("click", function(e){
		e.preventDefault();
		var anchor = jQuery(this).attr('href');
		if (anchor) {
			var top_anchor = jQuery(anchor).offset().top;
						
			jQuery('html, body').animate({
					scrollTop: top_anchor}, 800);
		}				
	});


	var $menu = jQuery("#header-mobile-menu").mmenu({
		"extensions": [
		"border-none",
		"pagedim-black",
		"fx-menu-slide",
		"position-right",
		],
		"setSelected": {
			"hover": true,
			"parent": true
		},
		"onClick": {
			"close": true
		}
	});
	var $icon = jQuery(".header__burger");
	var API = $menu.data( "mmenu" );
	var $x_icon = jQuery(".mmenu__close");

	$icon.on( "click", function() {
		API.open();
	});

	API.bind( "open:finish", function() {
		setTimeout(function() {
			$icon.addClass( "is-active" );
		}, 100);
		$x_icon.on( "click", function() {
			API.close();
		});
	});
	API.bind( "close:finish", function() {
		setTimeout(function() {
			$icon.removeClass( "is-active" );
		}, 100);
	});



});
}( jQuery ) );
