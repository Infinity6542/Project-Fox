

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function clear() {
  console.log("[LOGS] [PURG] [CACHE] Clearing cache...");
  localStorage.clear();
  console.log("[LOGS] [PURG] [CACHE] Cache successfully cleared.");
  console.log("[LOGS] [PURG] Clearing checkboxes...");
  let inputs = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
  console.log("[LOGS] [PURG] Checkboxes successfully cleared.");
  console.log("[LOGS] [PURG] Reloading page to apply changes...");
  location.reload();
}

let prefersRedMo =
  window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
  window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

if (!!prefersRedMo) {
  localStorage.setItem("prefersReducedMotion", "true");
} else {
  // do nothing
}

fetch(new Request(location.href))
.then((response) => {
  if (response == 200) {
    // all good, do nothing
  } else if (response > 499 && response < 400) {
    console.error("[CRIT] [ERRO] [HTTP] Something went wrong." + response);
  } else {
    location.href = "/" + response + ".html";
  }
})