// import 'bootstrap';
import './sass/main.scss';
const $ = require('jquery');

// =======================================
//
// ACCORDIONS OUR SERVICES PAGE
//
// =======================================

$(document).ready(function () {
  if ($(window).width() < 768) {
    var accordonContent = $('.excerpt');
    accordonContent.hide();
  } else {
    var accordonContent = $('.excerpt');
    accordonContent.show();
  }
})

// if ($(window).width() < 768) {
//   var accordonContent = $('.excerpt');
//   accordonContent.hide();
// } else {
//   var accordonContent = $('.excerpt');
//   accordonContent.show();
// }

// $(window).resize(function () {
//   if ($(window).width() < 768) {
//     var accordonContent = $('.excerpt');
//     accordonContent.hide();
//   } else {
//     var accordonContent = $('.excerpt');
//     accordonContent.show();
//   }
// });

var width = $(window).width();
$(window).resize(function () {
  if ($(window).width() != width) {
    width = $(window).width();

    if ($(window).width() < 768) {
      var accordonContent = $('.excerpt');
      accordonContent.hide();
    } else {
      var accordonContent = $('.excerpt');
      accordonContent.show();
    }

  }
});




var title = $('.our-services--item h3'),
  accordonContent = $('.excerpt');

accordonContent.hide();

title.click(function () {
  var excerpt = $(this).next('.excerpt'),
    isVisible = excerpt.is(':visible');

  title.removeClass('accordion__active');
  accordonContent.stop().slideUp(300);

  $(this).toggleClass('accordion__active', !isVisible);

  if (!isVisible) {
    $(this)
      .next(excerpt)
      .stop()
      .slideDown();
  } else {
    $(this)
      .next(excerpt)
      .stop()
      .slideUp();
  }
});