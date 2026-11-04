/* PeopleLens site — small, dependency-free enhancements */
(function () {
  "use strict";

  var header = document.getElementById("siteHeader");
  var menu = document.getElementById("menu");
  var nav = document.getElementById("nav");

  /* Header state on scroll */
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 12);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile navigation */
  function closeMenu() {
    if (!nav || !menu) return;
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    document.body.style.removeProperty("overflow");
  }

  if (menu && nav) {
    menu.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 820) closeMenu();
    });

    /* Close when tapping outside the panel */
    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(event.target) || menu.contains(event.target)) return;
      closeMenu();
    });
  }

  /* Footer year */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* Keep one FAQ answer open at a time */
  var details = Array.prototype.slice.call(document.querySelectorAll(".faq-list details"));
  details.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      details.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* Gentle scroll reveal — content stays visible if JS fails */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(
    ".section-head, .card, .steps-list li, .showcase-copy, .showcase-art, .privacy-card, .path-card, .install-step, .download-panel, .faq-list details, .final-inner"
  );

  if (!reduceMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

    targets.forEach(function (el, index) {
      el.classList.add("will-reveal");
      el.style.transitionDelay = Math.min(index % 6, 5) * 45 + "ms";
      observer.observe(el);
    });
  }
})();
