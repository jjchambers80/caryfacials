// Mobile menu toggle. From 1024px the links show inline and the button is hidden.
(function () {
  var btn = document.querySelector(".nav-btn"), nav = document.getElementById("site-nav");
  if (!btn || !nav) return;
  function set(open) { btn.setAttribute("aria-expanded", open); nav.classList.toggle("open", open); }
  btn.addEventListener("click", function () { set(btn.getAttribute("aria-expanded") !== "true"); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) { set(false); btn.focus(); }
  });
  document.addEventListener("click", function (e) {
    if (nav.classList.contains("open") && !nav.contains(e.target) && !btn.contains(e.target)) set(false);
  });
})();
