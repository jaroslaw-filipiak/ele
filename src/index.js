// import 'bootstrap';
import './sass/main.scss';

const $ = require('jquery');

// =======================================
//
// ACCORDIONS OUR SERVICES PAGE
//
// =======================================


if ($(window).width() < 768) {
  accordion();
} else {

}

$(window).resize(function () {
  if ($(window).width() < 768) {
    accordion();
  } else {}
});


function accordion() {


  var title = $('.our-services--item h3'),
    accordonContent = $('.excerpt');

  accordonContent.hide();

  title.click(function () {
    var excerpt = $(this).next('.excerpt'),
      isVisible = excerpt.is(':visible');

    title.removeClass('accordion__active');
    // accordonContent.stop().slideUp(300);

    $(this).toggleClass('accordion__active', !isVisible);

    if (!isVisible) {
      $(this)
        .next(excerpt)
        // .stop()
        .slideDown();
    } else {
      $(this)
        .next(excerpt)
        // .stop()
        .slideUp();
    }
  });
}