require("../bootstrap");
require("../common/ymaps");
require("../chunk/carousel");
require("./carousel/carousel");
require("../common/counter");
require("../common/form");
require("../chunk/disclaimer");
require("../chunk/forIE/imageloader");
require("./showcase");

var HeaderTop = $('header').offset().top;
$(window).scroll(() => {
    if ($(window).scrollTop() > HeaderTop) {
        $('header').css({position: 'fixed', top: '0px', left: '0px', right: '0px', margin: '0 auto'});
    } else {
        $('header').css({position: 'static'});
    }
});

var burger = document.querySelector('.burger');
burger.addEventListener('click', MobBurger);
function MobBurger(event) {
  $('.header-mob__info').slideToggle('300');
  $('.mob-menu-nav').slideToggle('300');
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