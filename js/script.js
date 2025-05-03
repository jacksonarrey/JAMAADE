$(document).ready(function () {
  function toggleContainerVisibility() {
    var container = $('#ph');
    var containerTop = container.offset().top;
    var navBottom = $('.nav').offset().top + $('.nav').outerHeight();
    var scrollTop = $(window).scrollTop();

    if (scrollTop + navBottom >= containerTop) {
      container.addClass('visible');
    } else {
      container.removeClass('visible'); // Reset when scrolled back up
    }
  }

  $(window).on('scroll', toggleContainerVisibility);
  toggleContainerVisibility(); // Initial check
});