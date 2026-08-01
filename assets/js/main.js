/* =============================================================
   Saravanamuthu S — Portfolio interactions
   All effects are progressive enhancements and respect
   prefers-reduced-motion. Nothing here is required to read
   the page.
   ============================================================= */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const onReady = (fn) =>
    document.readyState === "loading"
      ? document.addEventListener("DOMContentLoaded", fn)
      : fn();

  onReady(function () {
    setupReveal();
    setupHeadingDraw();
    setupCounters();
    setupNav();
    setupTilt();
    // Kick the hero underline once fonts/layout settle.
    requestAnimationFrame(() => {
      const name = document.querySelector(".hero__name");
      if (name) name.classList.add("is-drawn");
    });
  });

  /* --- Scroll reveal for [data-reveal] elements ------------- */
  function setupReveal() {
    const items = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!items.length) return;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));

    // Failsafe: never leave content permanently hidden if the observer
    // misses an element sitting in a tall viewport's bottom margin.
    const sweep = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      items.forEach((el) => {
        if (el.classList.contains("is-visible")) return;
        if (el.getBoundingClientRect().top < vh - 40) el.classList.add("is-visible");
      });
    };
    window.addEventListener("load", () => setTimeout(sweep, 200), { once: true });
  }

  /* --- Hand-drawn underline stroke on section titles -------- */
  function setupHeadingDraw() {
    const titles = Array.from(document.querySelectorAll("[data-underline]"));
    if (!titles.length) return;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      titles.forEach((el) => el.classList.add("is-drawn"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-drawn");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );
    titles.forEach((el) => io.observe(el));
  }

  /* --- Count-up for stat numbers ---------------------------- */
  function setupCounters() {
    const nums = Array.from(document.querySelectorAll(".stat__num[data-count]"));
    if (!nums.length) return;

    const render = (el, value) => {
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      el.textContent = prefix + value.toLocaleString("en-US") + suffix;
    };

    if (prefersReduced || !("IntersectionObserver" in window)) {
      nums.forEach((el) => render(el, Number(el.dataset.count)));
      return;
    }

    const animate = (el) => {
      const target = Number(el.dataset.count);
      const duration = 1100;
      let start = null;
      const step = (ts) => {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        render(el, Math.round(target * eased));
        if (p < 1) requestAnimationFrame(step);
        else render(el, target);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animate(entry.target);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.6 }
    );
    nums.forEach((el) => io.observe(el));
  }

  /* --- Navigation: sticky shadow + mobile menu -------------- */
  function setupNav() {
    const nav = document.querySelector(".site-nav");
    const toggle = document.querySelector(".nav-toggle");
    if (!nav) return;

    const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("menu-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      nav.querySelectorAll(".nav-links a").forEach((link) =>
        link.addEventListener("click", () => {
          nav.classList.remove("menu-open");
          toggle.setAttribute("aria-expanded", "false");
        })
      );
    }
  }

  /* --- Gentle pointer parallax on [data-tilt] --------------- */
  function setupTilt() {
    if (prefersReduced) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const targets = Array.from(document.querySelectorAll("[data-tilt]"));
    if (!targets.length) return;

    let ticking = false;
    let lastX = 0;
    let lastY = 0;

    const apply = () => {
      ticking = false;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (lastX - cx) / cx; // -1..1
      const dy = (lastY - cy) / cy;
      targets.forEach((el) => {
        const depth = el.classList.contains("sticky-note") ? 4 : 8;
        const base = el.classList.contains("sticky-note") ? 2.2 : 0;
        el.style.transform =
          `rotate(${base + dx * 1.2}deg) translate(${dx * depth}px, ${dy * depth}px)`;
      });
    };

    window.addEventListener(
      "pointermove",
      (e) => {
        lastX = e.clientX;
        lastY = e.clientY;
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(apply);
        }
      },
      { passive: true }
    );
  }
})();
