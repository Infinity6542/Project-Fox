let title = document.title.split("_", 3);
let code = title[1];
let err = title[2];
window.onload = () => {
  console.info("[INFO] [CORE] Page loaded.");
  console.info("[INFO] [CORE] " + code + " - " + err);
};
let text = document.getElementById("congrats");

if (localStorage.getItem(code) === "t") {
  text.innerHTML =
    "Damn. It looks like you've already found " +
    code +
    " (" +
    err +
    ")" +
    ". Maybe try another one?";
  console.warn("[INFO] [CORE] You've already found this one!");
  animationEnd = Date.now();
} else if (localStorage.getItem(code) === "f") {
  localStorage.setItem(code, "t");
  console.log("[COMP] [CORE] Hooray! " + code + " has been set to 't'!");
  text.innerHTML =
    "Congratulations! You’ve found the " +
    code +
    " (" +
    err +
    ")" +
    " HTTP response code.";
} else {
  console.error(
    "[ERR] [CORE] [CRIT] Invalid state for response " +
      code +
      ": '" +
      localStorage.getItem(code) +
      "'"
  );
  animationEnd = Date.now();
}
