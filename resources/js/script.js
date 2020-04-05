$(document).ready(function () {
  $('.js--section-feature').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px',
    }
  );

  // Animate
  $('.js--wp-1').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('.js--wp-1').addClass('animated fadeIn');
      }
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-2').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('.js--wp-2').addClass('animated fadeInUp');
      }
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-3').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('.js--wp-3').addClass('animated fadeIn');
      }
    },
    {
      offset: '50%',
    }
  );

  $('.js--wp-4').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('.js--wp-4').addClass('animated pulse');
      }
    },
    {
      offset: '50%',
    }
  );

  //   Mobile Navigation

  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    nav.slideToggle(200);

    var icon = $('a.js--nav-icon ion-icon');
    if (icon.attr('name') == 'menu-outline') {
      icon.attr('name', 'close-outline');
    } else {
      icon.attr('name', 'menu-outline');
    }
  });
});
