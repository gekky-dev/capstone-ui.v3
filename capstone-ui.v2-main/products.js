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
     PRODUCT POPUP
  ========================== */

  const productCards = document.querySelectorAll(".product-card");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");

  const popupImg = document.getElementById("popupImg");
  const popupTitle = document.getElementById("popupTitle");
  const popupSubtitle = document.getElementById("popupSubtitle");
  const popupPrice = document.getElementById("popupPrice");
  const popupStock = document.getElementById("popupStock");
  const popupBadge = document.getElementById("popupBadge");
  const popupDesc = document.getElementById("popupDesc");

  productCards.forEach(card => {

    card.addEventListener("click", () => {

      const img = card.querySelector(".product-img").src;
      const title = card.querySelector("h3").textContent;
      const desc = card.querySelector(".desc").textContent;
      const price = card.querySelector(".new-price").textContent;
      const stock = card.querySelector("small").textContent;
      const badge = card.querySelector(".badge").textContent;

      popupImg.src = img;
      popupTitle.textContent = title;
      popupSubtitle.textContent = desc;
      popupPrice.textContent = price;
      popupStock.textContent = stock;
      popupBadge.textContent = badge;

      const fullDescription = card.dataset.description;
      popupDesc.textContent = fullDescription;

      overlay.style.display = "flex";
    });
  });


  /* =========================
     CLOSE MODAL
  ========================== */

  if (closeBtn) {

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

  const qty = document.getElementById("qty");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");

  let count = 1;

  plus.addEventListener("click", () => {
    count++;
    qty.textContent = count;
  });

  minus.addEventListener("click", () => {

    if (count > 1) {
      count--;
      qty.textContent = count;
    }
  });

});