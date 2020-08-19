require("../bootstrap");
require("../common/ymaps");
require("../chunk/carousel");
require("./carousel/carousel");
require("../common/counter");
require("../common/form");
require("../chunk/disclaimer");
require("../chunk/forIE/imageloader");
require("./showcase");
require("./jquerycountdown");
// require("./timer");

var HeaderTop = $('header').offset().top;
$(window).scroll(() => {
  if ($(window).scrollTop() > HeaderTop) {
    $('header').css({position: 'fixed', top: '0px', left: '0px', right: '0px', margin: '0 auto'});
    $('.mob-menu-nav').css({position: 'fixed', top: '104px', left: '0px', right: '0px', margin: '0 auto'});
  } else {
    $('header').css({position: 'static'});
    $('.mob-menu-nav').css({position: 'static'});
  }
});

var burger = document.querySelector('.burger');
burger.addEventListener('click', MobBurger);
function MobBurger(event) {
  $('.header-mob__info').slideToggle('300');
  $('.mob-menu-nav').slideToggle('300');
  $('.burger')[0].classList.toggle('burger--open');
}
var submenuBtn = document.querySelectorAll('.mob-menu-nav__link--hassub');
if(submenuBtn.length !== 0 ){
  for(var i=0; i<submenuBtn.length; i++) {
    submenuBtn[i].addEventListener('click', openSubMenu);
  }
  function openSubMenu(event) {
    event.preventDefault();
    this.classList.toggle('mob-menu-nav__link--active');
    var currentItem = this.closest('.mob-menu-nav__item').querySelector('.mob-submenu');
    $(currentItem).slideToggle(300);
  }
}

$('.link-anchor').on("click", function (e) {
  e.preventDefault();
  var mylink = $(this).attr('href');
  MobBurger();
  if ($(window).scrollTop() > HeaderTop) {
    var positionblock = $(mylink).offset().top - 60;
  } else {
    var positionblock = $(mylink).offset().top - $('.header').outerHeight() - $('.mob-menu-nav').outerHeight() - 60;
  }
  $('html, body').animate({ scrollTop: positionblock }, 1100);
  
});