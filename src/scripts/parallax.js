const parallax = document.querySelector('.parallax');
const layers = parallax.children;

function moveLayersDependOnScroll(wScroll) {

  Array.from(layers).forEach(layer => {

    const divider = layer.dataset.speed;
    const strafe = wScroll * divider / 20;

    layer.style.transform = `translateY(-${strafe}%)`;

  })

}

const windowWidth = document.body.clientWidth;

if (windowWidth > 767) {
  window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersDependOnScroll(wScroll);
  })
}