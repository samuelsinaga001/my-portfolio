// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/dynamic.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/sunder.jpg",
			 "images/luca.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})

alert('Welcome To My Portfolio');






