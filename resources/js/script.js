new Waypoint({
  element: document.getElementById('js--section-feature'),
  handler: function (direction) {
    if (direction == 'down') {
      document.getElementById('js--nav').classList.add('sticky');
    } else {
      document.getElementById('js--nav').classList.remove('sticky');
    }
  },
  offset: 60,
});

new Waypoint({
  element: document.getElementById('js--wp-1'),
  handler: function (direction) {
    if (direction == 'down') {
      var element = document.getElementById('js--wp-1');
      element.classList.add('animate', 'fadeIn');
      element.style.opacity = 1;
    }
  },
  offset: '50%',
});

new Waypoint({
  element: document.getElementById('js--wp-2'),
  handler: function (direction) {
    if (direction == 'down') {
      var element = document.getElementById('js--wp-2');
      element.classList.add('animate', 'fadeInUp');
      element.style.opacity = 1;
    }
  },
  offset: '50%',
});

new Waypoint({
  element: document.getElementById('js--wp-3'),
  handler: function (direction) {
    if (direction == 'down') {
      var element = document.getElementById('js--wp-3');
      element.classList.add('animate', 'fadeIn');
      element.style.opacity = 1;
    }
  },
  offset: '50%',
});

new Waypoint({
  element: document.getElementById('js--wp-4'),
  handler: function (direction) {
    if (direction == 'down') {
      document.getElementById('js--wp-4').classList.add('animate', 'pulse');
    }
  },
  offset: '50%',
});

function onClickMobileNav() {
  var element = document.getElementById('js-main-nav');
  if (element.style.opacity == 1) {
    element.style.opacity = 0;
    element.style.maxHeight = '0px';
    document
      .getElementById('js--mobile-nav-icon')
      .setAttribute('name', 'menu-outline');
  } else {
    element.style.opacity = 1;
    element.style.maxHeight = '200px';
    document
      .getElementById('js--mobile-nav-icon')
      .setAttribute('name', 'close-outline');
  }
}
