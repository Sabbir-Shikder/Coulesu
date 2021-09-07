(function ($) {
"use strict";
  // wow js
  new WOW().init();
  // sidebar used scripts
  $('.fea-btn').click(function(){
    $('.navbar-nav .nav-item .fea-show').toggleClass("show");
    $('.navbar-nav .nav-item .first').toggleClass("rotate");
  });
  $('.serv-btn').click(function(){
    $('.navbar-nav .nav-item .serv-show').toggleClass("show");
    $('.navbar-nav .nav-item .second').toggleClass("rotate");
  });
  
  // smooth scrolling 
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });
  
  // owl-carousel js 
      $('.owl-carousel').owlCarousel({
        items:1,
        loop: true,
        autoplay:true,
        autoplayHoverPause:true,
        responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
    }
      })
    // scrolling back button 
    $(".go_top").click(function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        1500
      );
    });
  
    $(".go_top").hide();
  
    $(window).scroll(function () {
      var ourwindow = $(this).scrollTop();
      if (ourwindow < 500) {
        $(".go_top").fadeOut();
      } else {
        $(".go_top").fadeIn();
      }
    });
  
  // sticy header 

  $(window).scroll(function(){
    var navFixed = $(window).scrollTop();
    if(navFixed > 200){
      $(".main_nav").removeClass("py-30").addClass("fixed-top nav-border animated fadeInDown faster");
    }else{
      $(".main_nav").removeClass("fixed-top nav-border animated fadeInDown faster py-15");
    }
  });

  // scrollToTop
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
})(jQuery);