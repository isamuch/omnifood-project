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
