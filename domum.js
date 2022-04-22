function topnavbar() {
  var x = document.getElementById("navBar");
  if (x.className === "navbar") x.className += " responsive";
  else x.className = "navbar";
}
function initanima() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("showReveal");
    } else {
      reveals[i].classList.remove("showReveal");
    }
  }
}
window.addEventListener("scroll", initanima);
