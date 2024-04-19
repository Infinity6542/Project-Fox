gsap.fromTo(
  ".heroContent > .station",
  {
    x: 250,
    scale: 30,
  },
  {
    x: 250,
    scale: 1,
    duration: 1,
    ease: "power1.out",
  }
);

gsap.to(".heroContent > .station", {
  x: 0,
  duration: 1,
  ease: "bounce.out",
  delay: 1,
});

gsap.from(".heroContent > .path", {
  y: "-100%",
  duration: 1,
  delay: 2,
})

gsap.from(".heroContent > h1", {
    opacity: 0,
    duration: 0.5,
    delay: 3,
})

gsap.from("header, nav", {
  y: -100,
  delay: 1,
  duration: 1.4,
});

gsap.from(".sonner", {
  y: 130,
  delay: 4,
  duration: 1,
  ease: "back.out"
});