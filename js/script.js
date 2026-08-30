const toggle = document.querySelector(".menu-toggle");
      const nav = document.querySelector(".unlist");
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open);
        toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
      });

      document.querySelectorAll(".filter").forEach((filterButton) => {
        filterButton.addEventListener("click", () => {
          document.querySelector(".filter.active").classList.remove("active");
          filterButton.classList.add("active");
          const selected = filterButton.dataset.filter;
          document.querySelectorAll(".menu-card").forEach((card) => {
            card.hidden =
              selected !== "all" && card.dataset.category !== selected;
          });
        });
      });

      const toast = document.querySelector(".toast");
      document.querySelectorAll(".add-button").forEach((button) => {
        button.addEventListener("click", () => {
          toast.classList.add("show");
          window.setTimeout(() => toast.classList.remove("show"), 1800);
        });
      });
