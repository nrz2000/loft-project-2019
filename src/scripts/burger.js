let burgerBtn = document.getElementById("burger-btn");
let burger = document.getElementById("burger");
let close = document.getElementById("close");

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
document.addEventListener('click', e=> {
  let target = e.target;
  let eburger = target == burger || burger.contains(target);
  let eburgerBtn = target == burgerBtn;
  let checked = burger.classList.contains('mobile-menu_visible')
  if (!eburger && !eburgerBtn && checked) {
    toggleBurger();
  }
});