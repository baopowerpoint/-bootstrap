function myCallback(el) {
  el.classList.remove("is-animating");
  el.classList.add("is-visible");
}

window.sr = ScrollReveal();
sr.reveal(".navbar", {
  duration: 2000,
  origin: "bottom",
  afterReset: function (el) {},
});
sr.reveal(".animation__1", {
  duration: 2000,
  origin: "left",
  delay: 500,
  distance: "300px",
  afterReset: function (el) {},
});
sr.reveal(".animation__2", {
  duration: 3000,
  origin: "bottom",
  delay: 500,
  distance: "100px",
  afterReset: function (el) {},
});
sr.reveal(".animation__left ", {
  duration: 3000,
  origin: "left",
  delay: 1000,
  distance: "100px",
  viewFactor: 0.3,
  afterReset: function (el) {},
});
sr.reveal(".animation__right ", {
  duration: 3000,
  origin: "right",
  delay: 1000,
  distance: "100px",
  viewFactor: 0.3,
  afterReset: function (el) {},
});
sr.reveal(".animation__top ", {
  duration: 3000,
  origin: "top",
  distance: "100px",
  viewFactor: 0.3,
});
sr.reveal(".animation__bottom ", {
  duration: 3000,
  origin: "bottom",

  distance: "100px",
  viewFactor: 0.3,
  afterReset: function (el) {},
});
sr.reveal(".animation__4 ", {
  duration: 3000,
  origin: "left",

  distance: "300px",
  viewFactor: 0.2,
  afterReset: function (el) {},
});
sr.reveal(".animation__5 ", {
  duration: 3000,
  origin: "left",
  delay: 300,
  distance: "300px",
  viewFactor: 0.2,
  afterReset: function (el) {},
});
