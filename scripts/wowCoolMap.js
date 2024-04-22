let bigImage = document.querySelector(".hub"),
    smallImage = document.querySelector("#miniMap"),
    marker = document.querySelector("#mapMarker"),
    smallX = gsap.quickSetter(marker, "x", "px"),
    smallY = gsap.quickSetter(marker, "y", "px"),
    bigX = gsap.quickSetter(bigImage, "x", "px"),
    bigY = gsap.quickSetter(bigImage, "y", "px"),
    imageScale;

function setupSizing() {
  imageScale = smallImage.offsetWidth / bigImage.offsetWidth;
  let screenToBigRatio = window.innerWidth / bigImage.offsetWidth,
      aspectRatio = window.innerWidth / window.innerHeight;
  gsap.set(marker, {
    width: screenToBigRatio * smallImage.offsetWidth, 
    height: screenToBigRatio * smallImage.offsetWidth / aspectRatio
  });
}
setupSizing();
window.addEventListener("resize", setupSizing);

let bigDraggable = Draggable.create(bigImage, {
  bounds: window,
  onDrag: alignSmall,
  onThrowUpdate: alignSmall,
  inertia: true,
})[0];

function alignSmall() {
  smallX(-bigDraggable.x * imageScale);
  smallY(-bigDraggable.y * imageScale);
}

let smallDraggable = Draggable.create(marker, {
  bounds: smallImage,
  onDrag: alignBig,
  onThrowUpdate: alignBig,
  inertia: true,
})[0];

function alignBig() {
  bigX(-smallDraggable.x / imageScale);
  bigY(-smallDraggable.y / imageScale);
}

// align center initially
gsap.set(bigImage, {
  x: (bigDraggable.minX + bigDraggable.maxX) / 2,
  y: (bigDraggable.minY + bigDraggable.maxY) / 2
});
bigDraggable.update();
alignSmall();
