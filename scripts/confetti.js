
// Credit to the original author of the confetti.js library.
var duration = 15 * 300;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
let reduceMotion = document.getElementById("reduceMotion");
let reduceMotionContainer = reduceMotion.parentElement;
let slider = reduceMotion.nextElementSibling;
// var globalDisableForReducedMotion = true;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function () {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({
    ...defaults,
    particleCount,
    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    // disableForReducedMotion: true,
  });
  confetti({
    ...defaults,
    particleCount,
    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    // disableForReducedMotion: true,
  });
}, 250);

function ReduceMotion(checkbox) {
  if (checkbox.checked === true) {
    try {
      reduceMotionContainer.classList.add("active");
      slider.classList.add("on");
      endConfetti();
      localStorage.setItem("prefersReducedMotion", "true");
    } catch (e) {
      console.log("[ERR] [REDMO] " + e);
    }
  } else if (checkbox.checked === false) {
    try {
      reduceMotionContainer.classList.remove("active");
      slider.classList.remove("on");
      resumeConfetti();
      localStorage.setItem("prefersReducedMotion", "false");
    } catch (e) {
      console.log("[ERR] [REDMO] " + e);
    }
  }
}

if (localStorage.getItem("prefersReducedMotion") === "true") {
  reduceMotion.checked = true;
  ReduceMotion(reduceMotion);
} else {
  reduceMotion.checked = false;
  ReduceMotion(reduceMotion);
}

function endConfetti() {
  try {
    animationEnd = Date.now();
  } catch (e) {
    console.error("[ERR] [CORE] [CRIT] " + e);
  }
}

function resumeConfetti() {
  try {
    animationEnd = Date.now() + duration;
    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        // disableForReducedMotion: true,
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        // disableForReducedMotion: true,
      });
    }, 250);
  } catch (e) {
    console.error("[ERR] [CORE] [CNFTTI] " + e);
  }
}
