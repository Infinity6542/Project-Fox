
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
