let a = new URLSearchParams(window.location.search);
let t = a.get("onboarding");

if (t === "true") {
    t = true;
} else {
    t = false;
}

console.log(typeof t);