window.onload = () => {
  let div = document.querySelector(".sonner");
  let a = localStorage.getItem("onboardComplete");
  if (a == "true") {
    div.style.display = "none";
  } else if (a == null) {
    div.style.display = "inline";
  } else {
    console.log(
      "[ERR] [DECT] An error occurred while trying to determine the value of onboardComplete."
    );
    console.error(
      "[CRIT] [ERRO] Was unable to complete onboarding detection due to an invalid value."
    );
  }
};

if (!!prefersRedMo) {
  gsap.from(".sonner", {
    y: 130,
    delay: 3,
    duration: 1,
    ease: "back.out",
  });
} else {
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
  });

  gsap.from(".heroContent > h1", {
    opacity: 0,
    duration: 0.5,
    delay: 2.5,
  });

  gsap.from("header, nav", {
    y: -100,
    delay: 1,
    duration: 1.4,
  });
  gsap.from(".sonner", {
    y: 130,
    delay: 3,
    duration: 1,
    ease: "back.out",
  });
}
