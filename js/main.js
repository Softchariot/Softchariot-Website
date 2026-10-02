(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("primary-nav");
  const year = document.getElementById("year");
  const form = document.getElementById("contact-form");
  const formNote = document.getElementById("form-note");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        document.querySelectorAll(".nav-dropdown.open").forEach((dropdown) => {
          dropdown.classList.remove("open");
          const btn = dropdown.querySelector(".nav-dropdown-toggle");
          if (btn) btn.setAttribute("aria-expanded", "false");
        });
      });
    });
  }

  document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
    const button = dropdown.querySelector(".nav-dropdown-toggle");
    if (!button) return;

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = dropdown.classList.toggle("open");
      button.setAttribute("aria-expanded", open ? "true" : "false");

      document.querySelectorAll(".nav-dropdown.open").forEach((other) => {
        if (other !== dropdown) {
          other.classList.remove("open");
          const otherBtn = other.querySelector(".nav-dropdown-toggle");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".nav-dropdown.open").forEach((dropdown) => {
      dropdown.classList.remove("open");
      const button = dropdown.querySelector(".nav-dropdown-toggle");
      if (button) button.setAttribute("aria-expanded", "false");
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealItems.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );

    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("visible"));
  }

  if (form && formNote) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      formNote.hidden = false;
      form.reset();
    });
  }

  const story = document.getElementById("hero-story");
  if (story) {
    const versions = Array.from(story.querySelectorAll(".hero-story-lang"));
    let index = 0;

    const showVersion = (nextIndex) => {
      versions.forEach((version, i) => {
        const active = i === nextIndex;
        version.classList.toggle("is-active", active);
        version.hidden = !active;
      });
      index = nextIndex;
    };

    if (versions.length > 1) {
      window.setInterval(() => {
        const current = versions[index];
        current.classList.add("is-fading");

        window.setTimeout(() => {
          const next = (index + 1) % versions.length;
          showVersion(next);
          const incoming = versions[next];
          incoming.classList.add("is-fading");
          requestAnimationFrame(() => {
            incoming.classList.remove("is-fading");
          });
        }, 350);
      }, 10000);
    }
  }
})();
