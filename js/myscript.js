$(function() {

  "use strict";
  var topoffset = 0 //variable for menu height
  var slideqty = $('#featured .item').length;
  var wheight  = $(window).height() //get the height of the window
  var randSlide = Math.floor(Math.random()*slideqty)

  $('#featured .item').eq(randSlide).addClass('active')

  $('.fullheight').css('height', wheight) //sets to window tallness

  //replace img inside carousel with a background image
  $('#featured .item img').each(function(){
    var imgSrc = $(this).attr('src');
    $(this).parent().css({ 'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  })

  //adjust height of .fullheight elements on window resize
  $(window).resize(function(){
    wheight  = $(window).height();
    $('.fullheight').css('height', wheight)

  })


  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

  var hash = $(this).find('li.active a').attr('href');
      if(hash !== '#featured') {
        $('header nav').addClass('inbody');
      } else {
        $('header nav').removeClass('inbody');
  }

  //add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function(){
      var hash = $(this).find('li.active a').attr('href');
      if(hash !== '#featured') {
        $('header nav').addClass('inbody');
      } else {
        $('header nav').removeClass('inbody');
  }

  })

  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



});

