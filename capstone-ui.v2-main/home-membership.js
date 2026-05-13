function applyHomeMemberDiscount() {
  const userRole = localStorage.getItem("role") || "guest";

  if (userRole !== "member") return;

  document.querySelectorAll(".product-card .price").forEach((priceEl) => {
    const originalPrice = Number(priceEl.dataset.price);

    if (!originalPrice) return;

    const discountedPrice = Math.round(originalPrice * 0.6);

    priceEl.innerHTML = `
      <span class="old-price">₱${originalPrice.toLocaleString()}</span>
      <span class="discounted-price">₱${discountedPrice.toLocaleString()}</span>
    `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const userRole = localStorage.getItem("role") || "guest";

  const openBenefits = document.querySelector("#openBenefits");
  const closeBenefits = document.querySelector("#closeBenefits");
  const maybeLater = document.querySelector("#maybeLater");
  const membershipModal = document.querySelector("#membershipModal");

  const membershipStatus = document.querySelector(".membership-status");
  const membershipBtn = document.querySelector(".membership-btn");
  const membershipImages = document.querySelectorAll(".membership-icon img");
  const modalSubtitle = document.querySelector(".membership-box h4");
  const joinBtn = document.querySelector(".join-btn");

  if (userRole === "member") {
    membershipImages.forEach((img) => {
      img.src = "home-icons/member.png";
      img.alt = "Active Membership";
    });

    if (membershipStatus) {
      membershipStatus.innerHTML = `<span class="lock-icon">✅</span> Active`;
      membershipStatus.classList.add("member-active");
    }

    if (membershipBtn) {
      membershipBtn.textContent = "View member benefits →";
    }

    if (modalSubtitle) {
      modalSubtitle.textContent = "Your member benefits";
    }

    if (joinBtn) {
      joinBtn.style.display = "none";
    }
  }

  applyHomeMemberDiscount();

  if (!openBenefits || !closeBenefits || !maybeLater || !membershipModal) return;

  openBenefits.addEventListener("click", () => {
    membershipModal.classList.add("show");
  });

  closeBenefits.addEventListener("click", () => {
    membershipModal.classList.remove("show");
  });

  maybeLater.addEventListener("click", () => {
    membershipModal.classList.remove("show");
  });

  membershipModal.addEventListener("click", (event) => {
    if (event.target === membershipModal) {
      membershipModal.classList.remove("show");
    }
  });
});
