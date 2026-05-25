/* Yoshlik-Yu — alternative landing page scripts. Vanilla JS, no deps. */
(function () {
  "use strict";

  // ---- nav scroll state ----
  var nav = document.getElementById("alt-nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // ---- mobile burger ----
  var burger = document.getElementById("alt-burger");
  var menu = document.getElementById("alt-menu");
  function closeMenu() {
    if (burger) burger.classList.remove("is-open");
    if (menu) menu.classList.remove("is-open");
  }
  if (burger) {
    burger.addEventListener("click", function () {
      var open = burger.classList.toggle("is-open");
      if (menu) menu.classList.toggle("is-open", open);
    });
  }
  if (menu) {
    Array.prototype.forEach.call(menu.querySelectorAll("a"), function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  // ---- reveal on scroll + kpi counter ----
  var revealEls = document.querySelectorAll(".alt-reveal");
  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  function animateCount(card) {
    var b = card.querySelector("b[data-count]");
    if (!b) return;
    var target = parseFloat(b.getAttribute("data-count"));
    var suffix = b.getAttribute("data-suffix") || "";
    if (isNaN(target)) return;
    if (prefersReduced) {
      b.textContent = target.toLocaleString("ru-RU") + suffix;
      return;
    }
    var duration = 1400;
    var start = performance.now();
    function ease(t) {
      return 1 - Math.pow(1 - t, 3);
    }
    function tick(now) {
      var p = Math.min(1, (now - start) / duration);
      var v = Math.round(target * ease(p));
      b.textContent = v.toLocaleString("ru-RU") + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          if (e.target.classList.contains("alt-kpi")) animateCount(e.target);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.15 },
    );
    Array.prototype.forEach.call(revealEls, function (el) {
      io.observe(el);
    });
  } else {
    Array.prototype.forEach.call(revealEls, function (el) {
      el.classList.add("is-in");
      if (el.classList.contains("alt-kpi")) animateCount(el);
    });
  }

  // ---- active section in nav on scroll ----
  var navLinks = menu ? menu.querySelectorAll('a[href^="#"]') : [];
  var sections = [];
  Array.prototype.forEach.call(navLinks, function (link) {
    var id = link.getAttribute("href").slice(1);
    var el = document.getElementById(id);
    if (el) sections.push({ id: id, el: el, link: link });
  });
  function setActive() {
    var y = window.scrollY + 120;
    var current = sections[0];
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].el.offsetTop <= y) current = sections[i];
    }
    sections.forEach(function (s) {
      s.link.classList.toggle("is-active", s === current);
    });
  }
  if (sections.length) {
    setActive();
    window.addEventListener("scroll", setActive, { passive: true });
  }

  // ---- FAQ accordion ----
  Array.prototype.forEach.call(
    document.querySelectorAll(".alt-faq__item"),
    function (item) {
      var q = item.querySelector(".alt-faq__q");
      if (!q) return;
      q.addEventListener("click", function () {
        var open = item.classList.toggle("is-open");
        q.setAttribute("aria-expanded", open ? "true" : "false");
      });
    },
  );

  // ---- brand zoom lightbox ----
  var lightbox = null;
  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove("is-open");
      setTimeout(function () {
        if (lightbox && lightbox.parentNode)
          lightbox.parentNode.removeChild(lightbox);
        lightbox = null;
      }, 200);
    }
  }
  Array.prototype.forEach.call(
    document.querySelectorAll(".alt-brand"),
    function (brand) {
      brand.addEventListener("click", function (e) {
        e.preventDefault();
        var img = brand.querySelector("img");
        if (!img) return;
        lightbox = document.createElement("div");
        lightbox.className = "alt-lightbox";
        lightbox.innerHTML =
          '<div class="alt-lightbox__content"><img src="' +
          img.src +
          '" alt="' +
          img.alt +
          '" /><button class="alt-lightbox__close" aria-label="Close">×</button></div>';
        document.body.appendChild(lightbox);
        setTimeout(function () {
          if (lightbox) lightbox.classList.add("is-open");
        }, 10);
        lightbox
          .querySelector(".alt-lightbox__close")
          .addEventListener("click", closeLightbox);
        lightbox.addEventListener("click", function (evt) {
          if (evt.target === lightbox) closeLightbox();
        });
      });
    },
  );
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
})();
