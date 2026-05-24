document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SIDEBAR
  ========================== */
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector("#toggleBtn");

  if (sidebar && toggleBtn) {

    if (localStorage.getItem("sidebarCollapsed") === "true") {
      sidebar.classList.add("collapsed");
      document.documentElement.classList.add("sidebar-collapsed");
    }

    toggleBtn.addEventListener("click", () => {

      const isCollapsed = sidebar.classList.toggle("collapsed");

      document.documentElement.classList.toggle(
        "sidebar-collapsed",
        isCollapsed
      );

      localStorage.setItem("sidebarCollapsed", isCollapsed);
    });
  }


  /* =========================
     PRODUCT POPUP HELPERS
  ========================== */
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");
  const qty = document.getElementById("qty");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");

  function updateList(listSelector, value) {
    const list = document.querySelector(listSelector);

    if (!list) return;

    const items = value
      ? value.split("|").map(item => item.trim()).filter(Boolean)
      : [];

    list.innerHTML = items.length
      ? items.map(item => `<li>${item}</li>`).join("")
      : "<li>No details available.</li>";
  }

  function showTab(tabName) {
    document.querySelectorAll(".tab").forEach(tab => {
      tab.classList.remove("active");
    });

    document.querySelectorAll(".tab-content").forEach(content => {
      content.classList.remove("active");
    });

    const activeTab = document.querySelector(`.tab[data-tab="${tabName}"]`);
    const activeContent = document.getElementById(tabName);

    if (activeTab) activeTab.classList.add("active");
    if (activeContent) activeContent.classList.add("active");
  }


  /* =========================
     PRODUCT POPUP
  ========================== */
  document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("click", () => {
      overlay.style.display = "flex";

      document.getElementById("popupImg").src =
        card.querySelector(".product-img").src;

      document.getElementById("popupTitle").textContent =
        card.querySelector("h3").textContent;

      document.getElementById("popupSubtitle").textContent =
        card.querySelector(".desc").textContent;

      document.getElementById("popupBadge").textContent =
        card.querySelector(".badge").textContent;

      document.getElementById("popupPrice").textContent =
        card.querySelector(".new-price").textContent;

      document.getElementById("popupStock").textContent =
        card.querySelector(".bottom-row small").textContent;

      document.getElementById("popupDesc").textContent =
        card.dataset.description || "No description available.";

      document.getElementById("specName").textContent =
        card.dataset.name || card.querySelector("h3").textContent;

      document.getElementById("specBrand").textContent =
        card.dataset.brand || "JBM";

      document.getElementById("specType").textContent =
        card.dataset.type || card.querySelector(".desc").textContent;

      document.getElementById("specTechnology").textContent =
        card.dataset.technology || "No technology details available.";

      document.getElementById("specApplication").textContent =
        card.dataset.application || "No application details available.";

      document.getElementById("specPower").textContent =
        card.dataset.power || "No power details available.";

      updateList("#features .popup-list", card.dataset.features);
      updateList("#compatibility .popup-list", card.dataset.compatibility);
      updateList("#warranty .popup-list", card.dataset.warrantyDetails);

      showTab("specifications");

      if (qty) {
        qty.textContent = "1";
      }
    });
  });


  /* =========================
     PRODUCT POPUP TABS
  ========================== */
  document.querySelectorAll(".tab").forEach(tab => {

    tab.addEventListener("click", () => {
      showTab(tab.dataset.tab);
    });
  });


  /* =========================
     CLOSE MODAL
  ========================== */
  if (closeBtn && overlay) {

    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
    });

    overlay.addEventListener("click", (e) => {

      if (e.target === overlay) {
        overlay.style.display = "none";
      }
    });
  }


  /* =========================
     QUANTITY
  ========================== */
  let count = 1;

  if (plus && qty) {

    plus.addEventListener("click", () => {
      count++;
      qty.textContent = count;
    });
  }

  if (minus && qty) {

    minus.addEventListener("click", () => {

      if (count > 1) {
        count--;
        qty.textContent = count;
      }
    });
  }

});