document.querySelectorAll(".value").forEach(el => {
  if (!el.textContent.trim() || el.textContent === "₱--") {
    el.textContent = el.textContent.includes("₱") ? "₱0" : "0";
  }
});