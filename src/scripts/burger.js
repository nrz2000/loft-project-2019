var burgerBtn = document.getElementById("burger-btn");
var burger = document.getElementById("burger");
var burgerNavChild = document.querySelectorAll(".nav__link")
var close = document.getElementById("close");

const toggleBurger = () => {
  burger.classList.toggle('mobile-menu_visible')
}
burgerBtn.addEventListener('click', e=> {
  e.stopPropagation();
  toggleBurger();
});
close.addEventListener('click', e=> {
  e.stopPropagation();
  toggleBurger();
});
burgerNavChild.addEventListener('click', e=> {
  e.stopPropagation();
  toggleBurger();
});
document.addEventListener('click', e=> {
  let target = e.target;
  let eburger = target == burger || burger.contains(target);
  let eburgerBtn = target == burgerBtn;
  let checked = burger.classList.contains('mobile-menu_visible')
  if (!eburger && !eburgerBtn && checked) {
    toggleBurger();
  }
});
// if(document.getElementsByClassName("nav__link").addEventListener('click',))