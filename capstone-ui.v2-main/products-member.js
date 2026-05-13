const user = {
  role: localStorage.getItem("role") || "guest"
};

console.log("Current role:", user.role);

function applyMemberDiscount() {
  if (user.role !== "member") return;

  document.querySelectorAll(".new-price").forEach(priceEl => {
    const originalPrice = Number(priceEl.dataset.price);
    const discountedPrice = originalPrice * 0.6;

    priceEl.innerHTML = `
      <span class="old-price">₱${originalPrice.toLocaleString()}</span>
      <span class="discounted-price">₱${Math.round(discountedPrice).toLocaleString()}</span>
    `;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector("#membershipBanner");

  if (user.role === "member") {
    if (banner) {
      banner.style.display = "none";
    }

    applyMemberDiscount();
  }
});
