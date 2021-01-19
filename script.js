function navToggle() {
    const x = document.getElementById("topNav");
    if (!x.classList.contains("responsive")) {
      x.classList.add("responsive");
    } else {
      x.classList.remove("responsive");
    }
}