const a = new URLSearchParams(window.location.search);
const t = a.get("onboarding");

console.log(t);
if (t === true) {
    console.log("Sey");
} else {
    console.log("On");
}