$(function () {
  $('.u-nav-btn').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.p-gNav').toggleClass('open');
      $('.overlay').removeClass('open');
    } else {
      $(this).addClass('active');
      $('.p-gNav').addClass('open');
      $('.overlay').addClass('open');
    }
  });

  $('.overlay').on('click', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('.u-nav-btn').removeClass('active');
      $('.p-gNav').removeClass('open');
    }
  });

  $('a[href^="#"]').on('click', function() {
    var speed = 500;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({
      scrollTop: position }, speed, 'swing');
    return false;
  });

});
