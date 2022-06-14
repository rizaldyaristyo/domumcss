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
    if (elementTop < windowHeight - elementVisible) reveals[i].classList.add("showReveal");
    else reveals[i].classList.remove("showReveal");
  }
}
initanima();
window.addEventListener("scroll", initanima);

document.querySelectorAll(".carousel").forEach((carousel) => {
  let idx = 0,
    to = 2000;
  const items = carousel.querySelectorAll(".carousel-item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel-button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `<div class="carousel-nav">
      ${buttonsHtml.join("")}
    </div>`
  );

  const buttons = carousel.querySelectorAll(".carousel-button");
  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach((item) => item.classList.remove("carousel-item-s"));
      buttons.forEach((button) => button.classList.remove("carousel-button-s"));
      items[i].classList.add("carousel-item-s");
      button.classList.add("carousel-button-s");
      idx = i;
    });
  });
  function autoSlide() {
    items.forEach((item) => item.classList.remove("carousel-item-s"));
    buttons.forEach((button) => button.classList.remove("carousel-button-s"));
    items[idx].classList.add("carousel-item-s");
    buttons[idx].classList.add("carousel-button-s");
    if (idx != items.length - 1) idx++;
    else idx = 0;
    setTimeout(autoSlide, to);
  }
  items[idx].classList.add("carousel-item-s");
  buttons[idx].classList.add("carousel-button-s");
  autoSlide();
});
