$(function () {
  $('#p-header__sp--menu--icon').on('click', function () {
    $('.p-header__gNav--list').slideToggle(200);
    $("i", this).toggleClass("fa-bars fa-times");
  });

  $('.p-main__enjoy--subTitle').on('click', function () {
    $(this).next('ul').slideToggle();
  });

  $('a[href^="#"]').on('click', function() {
    var speed = 500;
    var height = 60;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top-height;
    $('body,html').animate({
      scrollTop: position }, speed, 'swing');
    return false;
  });

  $('.p-footer__skill--more--list').find('li').on('click', function () {
    var contents = $('.p-footer__skill--more--contents--list');
    var index = $(this).index();
    $(contents).find('li').addClass('is-hidden');
    $(contents).find('li').eq(index).removeClass('is-hidden');
  });

});
