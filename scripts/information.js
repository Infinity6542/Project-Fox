
gsap.registerPlugin(ScrollTrigger);

let side = gsap.timeline({
  scrollTrigger: {
    trigger: "#traintrackdec",
    start: "top 5%",
    end: "+=60%",
    scrub: 1,
  },
});

side.addLabel("start").to("#traintrackdec", { x: 100 }, "start").to(
  ".ex-nav",
  {
    position: "fixed",
    x: "-60%",
    opacity: 1,
  },
  "start"
);

const deact = (el) => {
  el.style.transition = "opacity .5s ease-in-out";
  el.style.opacity = 0;
  delay(500);
  el.style.display = "none";
  el.ariaHidden = true;
};

const act = (el) => {
  el.style.transition = "opacity .5s ease-in-out";
  el.style.opacity = 1;
  delay(500);
  el.style.display = "inline-flex";
  el.ariaHidden = false;
};

function onboard(i) {
  let x = i - 1;
  deact(document.querySelector('.slide[data-index="' + x + '"'));
  act(document.querySelector('.slide[data-index="' + i + '"'));
}

function completeOnboard() {
  try {
    localStorage.setItem("onboardComplete", "true");
    localStorage.setItem("dashboard", "unlocked");
    console.info("[INFO] [ONBO] Onboarding complete.");
    window.alert(
      "You've completed onboarding! Feel free to use the navigation menu on the right to continue..."
    );
  } catch (e) {
    console.error(
      "[ERRO] [CORE] Something went wrong when completing onboarding. Self-fixing..."
    );
    localStorage.setItem("onboardComplete", "false");
    console.log("[XXXX] [XXXX] onboardComplete set to default value.");
  }
}
