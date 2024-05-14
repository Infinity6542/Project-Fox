
validateFile = () => {
  const fi = document.getElementById("upload");
  fileName = fi.value;
  extension = fileName.split(".").pop();
  if (fi == "txt") {
    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {
          const fsize = fi.files.item(i).size;
          const file = Math.round(fsize / 1024);
          // The size of the file.
          if (file >= 4096) {
            window.location.href = "/413.html";
          } else {
            document.getElementById("size").innerHTML = "<b>" + file + "</b> KB";
          }
        }
      }
  } else {
    window.location.href = "/415.html";
  }
};
function login() {
  let p = window.prompt("Woah. How did you find this?\nEnter the password to continue...\n(P.S. enter 'google' to login with Google)");
  if (p == null || p == "") {
    window.alert("You cancelled the prompt.\nAbandoned the process.");
  } else if (p == "google") {
    window.alert("An error occurred.")
    window.location.href = "/407.html";
  } else if (p != "the password") {
    window.alert("Incorrect. Abandoning.");
    window.location.href = "/401.html";
  } else if (p == "the password") {
    window.alert("To make life easier for you, we'll just pretend you've logged in and tried to access a restricted document. Abandoning.");
    window.location.href = "/403.html"
  }
}