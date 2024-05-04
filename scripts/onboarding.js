let a = new URLSearchParams(window.location.search);
let t = a.get("onboarding");
bigImage = document.querySelector(".hub");

if (t === "true") {
  t = true;
} else {
  t = false;
}

// for the map
if (
  t === true &&
  localStorage.getItem("onboardComplete") == null &&
  localStorage.getItem("onboardProg") == null
) {
  //* 1/3
  let title = "Hello and welcome!";
  let message =
    "You're here for a reason, so I'll get straight to the point.<br />This navigation assistant will help you navigate the map, and the game in general. <br />";
  let prompt =
    '<span class="material-symbols-outlined">arrow_right</span>Lead the way...';
  instruct(title, message, prompt, "about");
  delay(10000);
  gsap.to(".hub", {
    x: -500,
    y: -1900,
    duration: 2,
  });
  gsap.to(".onboarding__wrapper", {
    x: 150,
    y: 75,
  });
  document.querySelector(".highlight").style.opacity = 1;
  // document.querySelector(".highlight").style.display = "inline";
  // document.querySelector(".highlight").style.top = "30%";
  document.querySelector(".highlight").style.height = "450px";
  document.querySelector(".highlight").style.width = "85vw";
  document.querySelector(".hub").style.pointerEvents = "none";
  var btn = document.getElementById("btn");
  btn.onclick = () => {
    localStorage.setItem("onboardProg", "1");
    onboard2();
  };
} else if (
  t === true &&
  localStorage.getItem("onboardComplete") == null &&
  localStorage.getItem("onboardProg") == "1"
) {
  //* 2/3
  onboard2();
} else if (
  t === true &&
  localStorage.getItem("onboardComplete") == null &&
  localStorage.getItem("onboardProg") == "2"
) {
  //* 3/3
  onboard3();
} else if (
  t === true &&
  localStorage.getItem("onboardComplete") == null &&
  localStorage.getItem("onboardProg") == "3"
) {
  //* 3/3
  onboard4();
} else if (t === false) {
  // do nothing
} else {
  console.log(
    "[ERRO] [ONBO] The referer says to begin onboarding, yet it seems to be complete. Ignoring request."
  );
}

function popUp(e, m, i, t) {
  // element
  // message
  // identifier
  // text
  e.style.opacity = 1;
  e.style.display = inline;
  t.innerHTML = m;
  gsap.from(i, {
    y: 130,
    delay: 3,
    duration: 1,
    ease: "back.out",
  });
}

function instruct(h, m, b, t) {
  // head
  // message
  // button content
  // target
  // body text
  var p = document.getElementById("textbox");
  // h1
  var h1 = document.getElementById("title");
  // btn
  var prompt = document.getElementById("btn");
  if (t === "rdrInstructions") {
    btn = document.getElementById("btn");
    btn.onclick = () => {
      window.location.href = "./instructions.html";
      localStorage.setItem("onboardComplete", "true");
    };
  } else {
  }
  e.style.opacity = 1;
  e.style.display = "inline";
  h1.innerHTML = h;
  p.innerHTML = m;
  prompt.innerHTML = b;
}

function onboard2() {
  gsap.to(".onboarding__wrapper", {
    height: 500,
    width: 500,
  });
  instruct("Let's get you moving", "<img src='/assets/tut.gif' style='height: 400px; width: 400px; text-align: center;' alt='Click and drag to move around.'></img>", "Next", "about");
  btn = document.getElementById("btn");
  btn.onclick = () => {
    localStorage.setItem("onboardProg", "2");
    onboard3();
  };
  document.querySelector(".hub").style.pointerEvents = "all";
}

function onboard3() {
  let title = "Learn more";
  let message =
    "If you want to learn more about this project, including how and why it was made, head over to the About page.";
  let prompt = "I'll skip this for now";
  instruct(title, message, prompt, "instructions");
  gsap.to(".hub", {
    x: -420,
    y: -2370,
    duration: 2,
  });
  gsap.to(".onboarding__wrapper", {
    height: "20vh",
    width: "40vw",
  });
  document.querySelector(".highlight").style.opacity = 1;
  document.querySelector(".highlight").style.display = "inline";
  document.querySelector(".hub").style.pointerEvents = "none";
  document.querySelector(".highlight").style.height = "250px";
  document.querySelector(".highlight").style.width = "99vw";
  document.querySelector(".hub").style.pointerEvents = "none";
  btn = document.getElementById("btn");
  btn.onclick = () => {
    localStorage.setItem("onboardProg", "3");
    onboard4();
  };
}

function onboard4() {
  let title = "How to play";
  let message =
    "The part you've been waiting for, how to play the game!<br />Click in the highlighted section to head over to the instructions page to get started.";
  let prompt = "Let's go!";
  instruct(title, message, prompt, "rdrInstructions");
  gsap.to(".hub", {
    x: -2150,
    y: -2350,
    duration: 2,
  });
  document.querySelector(".highlight").style.opacity = 1;
  document.querySelector(".highlight").style.display = "inline";
  document.querySelector(".hub").style.pointerEvents = "none";
  document.querySelector(".highlight").style.height = "250px";
  document.querySelector(".highlight").style.width = "99vw";
}
