/*
  * @package 
  * @subpackage template name HTML
  * 
  * Template Scripts
  * Created by themeturn
  
  1. navigation scroll
  2. Sticky nav
  3. POrtfolio Isotope
  4. Counter
  5. Pretty photo
  8. Isotope
  9. Animation (wow)
  10. Back to top

  
*/


jQuery(function($) {
  "use strict";


    /*$.noConflict();
     $('.navbar-nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });*/


  /* === jQuery for page scrolling feature - requires jQuery Easing plugin === */
    (function () {
        $('a.scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }());



  /* ----------------------------------------------------------- */
  /*  Main Navigation sticky
  /* ----------------------------------------------------------- */  
    $(".main-nav").sticky();


  /* ----------------------------------------------------------- */
 /*ISotope Portfolio
 /* ----------------------------------------------------------- */   
    $(window).load(function(){
      var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
          itemSelector : '.grid',
          layoutMode : 'fitRows'
        });
        
        $portfolio_selectors.on('click', function(){
          $portfolio_selectors.removeClass('active');
          $(this).addClass('active');
          var selector = $(this).attr('data-filter');
          $portfolio.isotope({ filter: selector });
          return false;
        });
      });
   
   
    // jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 100,
            time: 2000
        });
    // }); 

// prettyphoto

 $("a[data-rel^='prettyPhoto']").prettyPhoto();
 
    
      $('#projectModal').on('shown.bs.modal', function () {
          $('#myInput').focus()
        })
/* ----------------------------------------------------------- */
   /*  Animation
   /* ----------------------------------------------------------- */
        //Wow
        new WOW().init();

/* ==============================================
Back To Top Button
=============================================== */  
 
  $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
          $('#back-to-top a').tooltip('hide');
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
      
      $('#back-top').tooltip('hide');


/*------------------------------------------------------------------------*/
/*  2. - Backstretch for Background
/*------------------------------------------------------------------------*/

    $("#slider").backstretch([
        "images/bg/top_slide1.jpg",
        "images/bg/top_slide2.jpg",
        "images/bg/top_slide3.jpg"
      ], {duration: 8000, fade: 'slow'});


	  $("#slider2").backstretch([
        "images/bg/top_slide_sm1.jpg",
        "images/bg/top_slide_sm2.jpg",
        "images/bg/top_slide_sm3.jpg"
      ], {duration: 8000, fade: 'slow'});




});