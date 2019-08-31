$(function () {
    'use strict';
    /*------------------------------------------- preloader settings ----------------------------------------*/
    $(window).ready(function () {
    // will first fade out the loading animation
    $(".object").delay(2000).fadeOut(5000);
    // will fade out the whole DIV that covers the website.
    $(".loading").delay(2000).fadeOut(5000);
        });
    /*------------------------------------------- preloader settings ----------------------------------------*/
    
        var header = $('.main-header'),
            heading = $('.heading');
    /*------------------------------------------- adjust header height ----------------------------------------*/
    header.height($(window).height());
    /*------------------------------------------- adjust header height ----------------------------------------*/
    
    
    
    /*------------------------------------------- adjust heading padding-top height ----------------------------------------*/
        heading.each(function () {
       $(this).css('padding-top', (header.height() - heading.height()) / 2);
    });
    /*------------------------------------------- adjust heading padding-top height ----------------------------------------*/
            
        
        
    /*------------------------------------------- adjust navbar adding fixed class  ----------------------------------------*/
    $(window).on('scroll', function() {
	   var navHeight = $(window).height() - 70;
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
		});
    /*------------------------------------------- adjust navbar adding fixed class  ----------------------------------------*/
    
        
    
    /*------------------------------------------- adjust navbar adding active class  ---------------------------------------*/
    $('.navbar-nav li').click(function () {
       $(this).addClass('active').siblings().removeClass('active');
    });
    /*------------------------------------------- adjust navbar adding active class  ---------------------------------------*/
    
   
    
    /*------------------------------------------- adjust links parts animation  ---------------------------------------*/
    $('.navbar-nav li a').click(function () {
      $('html, body').animate({
          scrollTop:$($(this).attr('href')).offset().top+1
       },1000); 
    });
    /*------------------------------------------- adjust links parts animation  ---------------------------------------*/
    
    
    
    /*------------------------------------------- adjust adjust links sync  ---------------------------------------*/
      if($('.navbar-default').length) {
		$(window).on('scroll', function(){
			var scrollPos = $(window).scrollTop();
			$('.navbar-nav li a').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr('href'));
				if (refElement.offset().top <= scrollPos) {
					$('.navbar-nav li').removeClass('active');
					currLink.closest('.navbar-nav li').addClass("active");
				}
			});
		});
	}
    /*------------------------------------------- adjust adjust links sync  ---------------------------------------*/
    
    
    
    /*------------------------------------------- adjust button toggle collapse slidetoggle ---------------------------------------*/
    $('.navbar-toggle').click(function () {
       $('.navbar-collapse').slideToggle(500); 
    });
    $('.navbar-nav li a').click(function () {
       $('.navbar-collapse').slideToggle(700); 
    });
    /*------------------------------------------- adjust button toggle collapse slidetoggle ---------------------------------------*/
    
    
    
    /*------------------------------------------- adjust up button to scroll up to zero offset ---------------------------------------*/
    //fade event to scroll to top 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.top').click(function() {
        $('html, body').animate({scrollTop : 0}, 1800);
        return false;
    });
    /*------------------------------------------- adjust up button to scroll up to zero offset ---------------------------------------*/
    
    
    
    /*------------------------------------------- adjust about-us progress animation ---------------------------------------*/
    //adjust animation progress
     $(window).scroll(function() {
       if ($(this).scrollTop() >= 200) {
        $('.animated-progress span').each(function () {
       $(this).delay(1000).animate({
           width : $(this).attr('data-progress') + '%'
       }, 2000);
        }); }
     });
    /*------------------------------------------- adjust about-us progress animation ---------------------------------------*/
    
    
    /*------------------------------------------- adjust activate class on my-work ---------------------------------------*/
     $('.my-work .suffle ul li').click(function () {
       $(this).add('activate').siblings().removeClass('activate');
    });
    /*------------------------------------------- adjust activate class on my-work ---------------------------------------*/
    
    
    
    /*------------------------------------------- adjust tuped.js plugin ---------------------------------------*/
	var typed = new Typed('.typed', {
        strings: ["Front End Developer.", "Web Designer."],
        typeSpeed: 30,
        loop:true,
        backSpeed: 30
	});
    /*------------------------------------------- adjust tuped.js plugin ---------------------------------------*/
    
    
    
    /*------------------------------------------- adjust brand button to scroll up to zero offset ---------------------------------------*/
    $('.navbar-default .navbar-brand').click(function (){
        $('html, body').animate({scrollTop : 0}, 1800);
        return false;
    });
    /*------------------------------------------- adjust brand button to scroll up to zero offset ---------------------------------------*/
    
    
    
    /*------------------------------------------- adjust mixit up plugin ---------------------------------------*/
    var mixer = mixitup('#grid', {
    animation: {
    duration: 300
        }
    });
    /*------------------------------------------- adjust mixit up plugin ---------------------------------------*/
});