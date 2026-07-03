/* La Maison Des Enfants — interactions */
(function () {
  "use strict";

  /* ---------- header: shrink + reveal-on-scroll-up ---------- */
  var header = document.querySelector(".site-header");
  var lastY = window.scrollY;
  var onScroll = function () {
    var y = window.scrollY;
    if (y > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");

    // reveal on ANY upward scroll; hide when scrolling down past the header
    if (y > lastY && y > 90) {
      header.classList.add("header-hidden");
    } else if (y < lastY) {
      header.classList.remove("header-hidden");
    }
    lastY = y;
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- mobile nav ---------- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");
  var drawer = document.getElementById("navDrawer");

  var closeMenu = function () {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };
  var openMenu = function () {
    header.classList.remove("header-hidden");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  };
  toggle.addEventListener("click", function () {
    if (document.body.classList.contains("menu-open")) closeMenu();
    else openMenu();
  });
  // tap the scrim area (drawer wrapper, but not the menu panel) to close
  if (drawer) {
    drawer.addEventListener("click", function (e) {
      if (!menu.contains(e.target)) closeMenu();
    });
  }
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") closeMenu();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- use real dropped photos when present ---------- */
  // Hero
  probeImage("assets/photos/hero.jpg", function () {
    var hp = document.getElementById("heroPhoto");
    if (hp) {
      hp.style.backgroundImage = 'url("assets/photos/hero.jpg")';
      var illus = hp.querySelector(".hero-illus");
      if (illus) illus.style.opacity = "0";
    }
  });
  // Age spreads (data-photo)
  document.querySelectorAll(".age-photo[data-photo]").forEach(function (el) {
    var file = "assets/photos/" + el.getAttribute("data-photo");
    probeImage(file, function () {
      el.style.backgroundImage = 'url("' + file + '")';
      el.classList.add("has-photo");
      var tag = el.querySelector(".age-tag");
      if (tag) { tag.style.position = "relative"; }
    });
  });

  function probeImage(src, onLoad) {
    var img = new Image();
    img.onload = onLoad;
    img.src = src;
  }

  /* ---------- enrollment / tour form ---------- */
  var form = document.getElementById("tourForm");
  var status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";

      var required = form.querySelectorAll("[required]");
      var firstBad = null;
      required.forEach(function (f) {
        if (!f.value.trim() || (f.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value))) {
          if (!firstBad) firstBad = f;
        }
      });
      if (firstBad) {
        status.textContent = "Please fill in the highlighted fields with valid details.";
        status.classList.add("err");
        firstBad.focus();
        return;
      }

      var name = form.parentName.value.trim().split(" ")[0];
      status.textContent =
        "Thanks" + (name ? ", " + name : "") +
        "! Your request is ready. This is a design concept, so please call (225) 647-4501 to confirm your tour.";
      status.classList.add("ok");
      form.reset();
    });
  }

  /* ---------- footer year ---------- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
