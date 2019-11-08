const mountainsParallax = document.querySelector('.mountains-parallax');
const mountainsLayers = mountainsParallax.children;

const buddaParallax = document.querySelector('.budda-parallax');
const buddaLayers = buddaParallax.children;

function moveLayersDependsOnScroll(layers, wScroll) {
  [...layers].forEach(layer => {
    if (layer.dataset.speed) {
      const offset = -wScroll / layer.dataset.speed;
      layer.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
  });
}

window.addEventListener('scroll', () => {
  if (window.innerWidth < 768) {
    return;
  }
  const wScroll = window.pageYOffset;
  moveLayersDependsOnScroll(mountainsLayers, wScroll);

  const {top} = buddaParallax.getBoundingClientRect();
  const buddaParallaxOffset = window.innerHeight - top;
  if (buddaParallaxOffset > 0) {
    moveLayersDependsOnScroll(buddaLayers, buddaParallaxOffset);
  }
});
