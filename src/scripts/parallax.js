const mountainsParallax = document.querySelector(".mountains-parallax");
const mountainsLayer = mountainsParallax.children;

function moveLayersDependsOnScroll(layers, wScroll) {
  [...layers].forEach((layer) => {
    if (layer.dataset.speed) {
      const offset = -wScroll / layer.dataset.speed;
      layer.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
  });
}

window.addEventListener("scroll", () => {
  if (window.innerWidth < 768) {
    return;
  }
  const wScroll = window.pageYOffset;
  moveLayersDependsOnScroll(mountainsLayers, wScroll);
});