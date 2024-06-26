// window.onload = () => {
//   let div = document.querySelector(".sonner");
//   let a = localStorage.getItem("onboardComplete");
//   if (a == "true") {
//     div.style.display = "none";
//   } else if (a == null) {
//     div.style.display = "inline";
//   } else {
//     console.log(
//       "[ERR] [DECT] An error occurred while trying to determine the value of onboardComplete."
//     );
//     console.error(
//       "[CRIT] [ERRO] Was unable to complete onboarding detection due to an invalid value."
//     );
//   }
// };

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
      scale: 20,
    },
    {
      x: 250,
      scale: 1,
      duration: 1,
      ease: "power1.out",
    }
  );
  gsap.to(".driver", {
    opacity: 0,
    duration: 0,
  })
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
  gsap.to(".path, .station, .heroContent > h1", {
    opacity: 0,
    delay: 3.5,
  });
  gsap.to(".driver", {
    opacity: 1,
    delay: 2,
  })
}

// Other animations
gsap.registerPlugin(ScrollTrigger);
delay(3500);
let pre1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".preDrive",
    start: "top top",
    pin: true,
    end: "+=650%",
    scrub: 1,
  },
});

pre1.addLabel("start")
.to(".preDrive", { y: 400 }, "start")
.addLabel("stage2")
.to(".preDrive", { rotation: 60 }, "stage2")
.addLabel("stage3")
.from("#about h1[data-index='1']", { opacity: 0, yPercent: 50}, "stage3")
.addLabel("text1")
.to("#about h1[data-index='1']", { opacity: 0, yPercent: -100}, "text1")
.from("#about h1[data-index='2']", { opacity: 0, yPercent: 50}, "text1")
.addLabel("text2")
.to(".preDrive", { y: -10 }, "text2")
.to("#about h1[data-index='2']", { opacity: 0, yPercent: -100}, "text2")
.from("#about h1[data-index='3']", { opacity: 0, yPercent: 50}, "text2")
.addLabel("text3")
.to("#about h1[data-index='3']", { opacity: 0, yPercent: -100}, "text3")
.from("#about h1[data-index='4']", { opacity: 0, yPercent: 50}, "text3")
.addLabel("text4")
.to("#about h1[data-index='4']", { opacity: 0, yPercent: -100}, "text4")
.from("#about h1[data-index='5']", { opacity: 0, yPercent: 50}, "text4")
.addLabel("text5")
.to("#about h1[data-index='5']", { opacity: 0, yPercent: -100}, "text5")
.from("#about h1[data-index='6']", { opacity: 0, yPercent: 50}, "text5");

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

setTimeout(() => {
  const phrases = [
    'Hello there.',
    'Let me explain that',
    'finding HTTP status codes',
    'is, by no means, easy.',
    'But, with a little help,',
    'and some knowledge from',
    'the Learning page,',
    'I\'m sure that you can do it,',
    'just as I did.',
    'I believe in you,',
    ' and good luck.',
    'You may scroll to continue.',
    '',
    '',
    '*radio static*',
    'h e l p    m e',
    ''
  ]
  
  const el = document.querySelector('.text')
  const fx = new TextScramble(el)
  
  let counter = 0
  
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 1200)
    })
    counter = (counter + 1) % phrases.length
  }
  
  next();
}, 3700);