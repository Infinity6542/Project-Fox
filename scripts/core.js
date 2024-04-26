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